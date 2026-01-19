"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface TableRow {
  id: number;
  name: string;
  dateOfBirth: string;
  jobTitle: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: string;
}

interface DashboardProps {
  balance?: string;
}

function Dashboard({ balance = "$ 1,893.44" }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "users">("dashboard");

  const tableData: TableRow[] = [
    { id: 1, name: "Darlene Robertson", dateOfBirth: "02/07/1971", jobTitle: "Dog Trainer" },
    { id: 2, name: "Ronald Richards", dateOfBirth: "28/03/1968", jobTitle: "Marketing Head" },
    { id: 3, name: "Jenone Bell", dateOfBirth: "12/08/1985", jobTitle: "President of Sales" },
  ];

  const usersData: User[] = [
    { id: 1, name: "Darlene Robertson", email: "darlene.r@example.com", status: "Active", joinDate: "01/15/2023" },
    { id: 2, name: "Ronald Richards", email: "ronald.r@example.com", status: "Active", joinDate: "03/22/2023" },
    { id: 3, name: "Jenone Bell", email: "jenone.b@example.com", status: "Inactive", joinDate: "05/10/2023" },
    { id: 4, name: "Kathryn Murphy", email: "kathryn.m@example.com", status: "Active", joinDate: "02/08/2024" },
    { id: 5, name: "Jacob Jones", email: "jacob.j@example.com", status: "Active", joinDate: "04/01/2024" },
    { id: 6, name: "Bessie Cooper", email: "bessie.c@example.com", status: "Inactive", joinDate: "06/12/2024" },
  ];

  return (
    <div className={styles.dashboard}>
      {/* Top Navigation */}
      <nav className={styles.topNav}>
        <div className={styles.topNavLeft}>
          <svg className={styles.sunIcon} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 0V4.5H19.5V0H16.5ZM6.33398 4.21289L4.21289 6.33398L7.39453 9.51562L9.51562 7.39453L6.33398 4.21289ZM29.666 4.21289L26.4844 7.39453L28.6055 9.51562L31.7871 6.33398L29.666 4.21289ZM18 7.5C12.2188 7.5 7.5 12.2188 7.5 18C7.5 23.7812 12.2188 28.5 18 28.5C23.7812 28.5 28.5 23.7812 28.5 18C28.5 12.2188 23.7812 7.5 18 7.5ZM18 10.5C22.1599 10.5 25.5 13.8401 25.5 18C25.5 22.1599 22.1599 25.5 18 25.5C13.8401 25.5 10.5 22.1599 10.5 18C10.5 13.8401 13.8401 10.5 18 10.5ZM0 16.5V19.5H4.5V16.5H0ZM31.5 16.5V19.5H36V16.5H31.5ZM7.39453 26.4844L4.21289 29.666L6.33398 31.7871L9.51562 28.6055L7.39453 26.4844ZM28.6055 26.4844L26.4844 28.6055L29.666 31.7871L31.7871 29.666L28.6055 26.4844ZM16.5 31.5V36H19.5V31.5H16.5Z" fill="#545F71"/>
          </svg>
          <div className={styles.brandName}>Knackline</div>
        </div>
        <div className={styles.searchContainer}>
          <svg className={styles.searchIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#545F71"/>
          </svg>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
        <svg className={styles.accountIcon} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2.33333C7.56004 2.33333 2.33337 7.56 2.33337 14C2.33337 20.44 7.56004 25.6667 14 25.6667C20.44 25.6667 25.6667 20.44 25.6667 14C25.6667 7.56 20.44 2.33333 14 2.33333ZM8.24837 21.3267C8.75004 20.2767 11.8067 19.25 14 19.25C16.1934 19.25 19.2617 20.2767 19.7517 21.3267C18.165 22.5867 16.17 23.3333 14 23.3333C11.83 23.3333 9.83504 22.5867 8.24837 21.3267ZM21.42 19.635C19.7517 17.605 15.7034 16.9167 14 16.9167C12.2967 16.9167 8.24837 17.605 6.58004 19.635C5.39004 18.0717 4.66671 16.1233 4.66671 14C4.66671 8.855 8.85504 4.66667 14 4.66667C19.145 4.66667 23.3334 8.855 23.3334 14C23.3334 16.1233 22.61 18.0717 21.42 19.635ZM14 7C11.7367 7 9.91671 8.82 9.91671 11.0833C9.91671 13.3467 11.7367 15.1667 14 15.1667C16.2634 15.1667 18.0834 13.3467 18.0834 11.0833C18.0834 8.82 16.2634 7 14 7ZM14 12.8333C13.0317 12.8333 12.25 12.0517 12.25 11.0833C12.25 10.115 13.0317 9.33333 14 9.33333C14.9684 9.33333 15.75 10.115 15.75 11.0833C15.75 12.0517 14.9684 12.8333 14 12.8333Z" fill="#545F71"/>
        </svg>
      </nav>

      {/* Side Navigation */}
      <aside className={styles.sideNav}>
        <div className={styles.navItems}>
          <div className={`${styles.navItem} ${styles.navItemActive}`}>
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.navLabel}>Dashboard</span>
            <svg className={styles.chevronIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.16666L13.3333 9.99999L7.5 15.8333" stroke="#9BA5B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.navItem}>
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.navLabel}>Events</span>
            <svg className={styles.chevronIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.16666L13.3333 9.99999L7.5 15.8333" stroke="#9BA5B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.navItem}>
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.navLabel}>Users</span>
            <svg className={styles.chevronIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.16668L13.3333 10L7.5 15.8333" stroke="#9BA5B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className={styles.navFooter}>
          <div className={styles.navItem}>
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 16L7 12M7 12L11 8M7 12L21 12M16 16V17C16 18.6569 14.6569 20 13 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H13C14.6569 4 16 5.34315 16 7V8" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.navLabel}>Sign Out</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Account Summary Cards */}
        <div className={styles.accountSummaryCards}>
          <div className={styles.accountCard}>
            <div className={styles.balanceAmount}>{balance}</div>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              <span className={styles.btnLabel}>Transfer</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className={styles.accountCard}>
            <div className={styles.balanceAmount}>{balance}</div>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              <span className={styles.btnLabel}>Add money</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12M12 12V18M12 12H18M12 12L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.tableHeader}>#</th>
                <th className={styles.tableHeader}>Name</th>
                <th className={styles.tableHeader}>Date of Birth</th>
                <th className={styles.tableHeader}>Job Title</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>{row.id}</td>
                  <td className={styles.tableCell}>{row.name}</td>
                  <td className={styles.tableCell}>{row.dateOfBirth}</td>
                  <td className={styles.tableCell}>{row.jobTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
