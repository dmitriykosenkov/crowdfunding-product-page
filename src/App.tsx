import React from "react";
import bookmarkIcon from "./images/icon-bookmark.svg";
import mainHeaderIcon from "./images/logo-mastercraft.svg";
import headerLogo from "./images/logo.svg";
import s from "./App.module.scss";
import { motion } from "framer-motion";

function App() {
   return (
      <div className={s.app}>
         <div className={s.mainImage}></div>
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className={s.container}
         >
            <header className={s.header}>
               <a href="" className={s.headerLogo}>
                  <img src={headerLogo} alt="" />
               </a>
               <nav className={s.headerMenu}>
                  <ul className={s.headerMenuList}>
                     <li className={s.headerMenuItem}>
                        <a href="" className={s.headerMenuLink}>
                           About
                        </a>
                     </li>
                     <li className={s.headerMenuItem}>
                        <a href="" className={s.headerMenuLink}>
                           Discover
                        </a>
                     </li>
                     <li className={s.headerMenuItem}>
                        <a href="" className={s.headerMenuLink}>
                           Get Started
                        </a>
                     </li>
                  </ul>
               </nav>
            </header>
            <main className={s.main}>
               <section className={s.mainHeader}>
                  <div className={s.mainHeaderIcon}>
                     <img src={mainHeaderIcon} alt="" />
                  </div>
                  <div className={s.mainHeaderBody}>
                     <div className={s.mainHeaderContent}>
                        <div className={s.mainHeaderContentTitle}>
                           Mastercraft Bamboo Monitor Riser
                        </div>
                        <div className={s.mainHeaderContentText}>
                           A beautiful & handcrafted monitor stand to reduce
                           neck and eye strain.
                        </div>
                     </div>
                     <div className={s.mainHeaderActions}>
                        <button className={s.button}>Back this project</button>
                        <button className={s.btnBookmark}>
                           <div className={s.btnBookmarkIcon}>
                              <img src={bookmarkIcon} alt="" />
                           </div>
                           <span className={s.btnBookmarkText}>Bookmark</span>
                        </button>
                     </div>
                  </div>
               </section>
               <section className={s.statistics}>
                  <div className={s.statsColumns}>
                     <div className={s.statsItem}>
                        <h4 className={s.statsItemTitle}>$89,914</h4>
                        <p className={s.statsItemSubtitle}>
                           of $100,000 backed
                        </p>
                     </div>
                     <div className={s.statsItem}>
                        <h4 className={s.statsItemTitle}>5,007</h4>
                        <p className={s.statsItemSubtitle}>total backers</p>
                     </div>
                     <div className={s.statsItem}>
                        <h4 className={s.statsItemTitle}>56</h4>
                        <p className={s.statsItemSubtitle}>days left</p>
                     </div>
                  </div>
                  <div className={s.progressBar}></div>
               </section>

               <section className={s.about}>
                  <h4 className={s.aboutTitle}>About this project</h4>
                  <p className={s.aboutDescr}>
                     The Mastercraft Bamboo Monitor Riser is a sturdy and
                     stylish platform that elevates your screen to a more
                     comfortable viewing height. Placing your monitor at eye
                     level has the potential to improve your posture and make
                     you more comfortable while at work, helping you stay
                     focused on the task at hand.
                  </p>
                  <p className={s.aboutDescr}>
                     Featuring artisan craftsmanship, the simplicity of design
                     creates extra desk space below your computer to allow
                     notepads, pens, and USB sticks to be stored under the
                     stand.
                  </p>
                  <div className={s.aboutCard}>
                     <div className={s.aboutCardHeader}>
                        <h5 className={s.aboutCardHeaderTitle}>Bamboo Stand</h5>
                        <h6 className={s.aboutCardHeaderSubtitle}>
                           Pledge $25 or more
                        </h6>
                     </div>
                     <div className={s.aboutCardText}>
                        You get an ergonomic stand made of natural bamboo.
                        You've helped us launch our promotional campaign, and
                        you’ll be added to a special Backer member list.
                     </div>
                     <div className={s.aboutCardFooter}>
                        <div className={s.aboutCardFooterCounter}>
                           <span>101</span> <p>left</p>
                        </div>
                        <button
                           className={`${s.aboutCardFooterBtn} ${s.button}`}
                        >
                           Select Reward
                        </button>
                     </div>
                  </div>
                  <div className={s.aboutCard}>
                     <div className={s.aboutCardHeader}>
                        <h5 className={s.aboutCardHeaderTitle}>
                           Black Edition Stand
                        </h5>
                        <h6 className={s.aboutCardHeaderSubtitle}>
                           Pledge $75 or more
                        </h6>
                     </div>
                     <div className={s.aboutCardText}>
                        You get a Black Special Edition computer stand and a
                        personal thank you. You’ll be added to our Backer member
                        list. Shipping is included.
                     </div>
                     <div className={s.aboutCardFooter}>
                        <div className={s.aboutCardFooterCounter}>
                           <span>64</span> <p>left</p>
                        </div>
                        <button
                           className={`${s.aboutCardFooterBtn} ${s.button}`}
                        >
                           Select Reward
                        </button>
                     </div>
                  </div>
                  <div className={s.aboutCard}>
                     <div className={s.aboutCardHeader}>
                        <h5 className={s.aboutCardHeaderTitle}>
                           Mahogany Special Edition
                        </h5>
                        <h6 className={s.aboutCardHeaderSubtitle}>
                           Pledge $200 or more
                        </h6>
                     </div>
                     <div className={s.aboutCardText}>
                        You get two Special Edition Mahogany stands, a Backer
                        T-Shirt, and a personal thank you. You’ll be added to
                        our Backer member list. Shipping is included.
                     </div>
                     <div className={s.aboutCardFooter}>
                        <div className={s.aboutCardFooterCounter}>
                           <span>0</span> <p>left</p>
                        </div>
                        <button
                           className={`${s.aboutCardFooterBtn} ${s.button}`}
                        >
                           Out of stock
                        </button>
                     </div>
                  </div>
               </section>
            </main>
         </motion.div>
      </div>
   );
}

export default App;
