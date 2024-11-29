import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        	<div className="main-header side-header sticky nav nav-item">
  <div className="container-fluid main-container ">
    <div className="main-header-left ">
      <div className="app-sidebar__toggle mobile-toggle" data-bs-toggle="sidebar">
        <a className="open-toggle" href="fake"><i className="header-icons" data-eva="menu-outline" /></a>
        <a className="close-toggle" href="fake"><i className="header-icons" data-eva="close-outline" /></a>
      </div>
      <div className="responsive-logo">
        <a href="index.html" className="header-logo"><img src="../assets/img/brand/logo.png" className="logo-11" alt='logo'/></a>
        <a href="index.html" className="header-logo"><img src="../assets/img/brand/logo-white.png" className="logo-1"alt='logo' /></a>
      </div>
      <ul className="header-megamenu-dropdown  nav">
        <li className="nav-item">
          <div className="btn-group dropdown">
            <button aria-expanded="false" aria-haspopup="true" className="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" id="dropdownMenuButton2" type="button"><span><i className="fe fe-settings" /> Settings </span></button>
            <div className="dropdown-menu">
              <div className="dropdown-menu-header header-img p-3">
                <div className="drop-menu-inner">
                  <div className="header-content text-start d-flex">
                    <div className="text-white">
                      <h5 className="menu-header-title">Setting</h5>
                      <h6 className="menu-header-subtitle mb-0">Overview of theme</h6>
                    </div>
                    <div className="my-auto ms-auto">
                      <span className="badge bg-pill bg-warning float-end">View all</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setting-scroll">
                <div>
                  <div className="setting-menu ">
                    <a className="dropdown-item" href="profile.html"><i className="mdi mdi-account-outline tx-16 me-2 mt-1" />Profile</a>
                    <a className="dropdown-item" href="contacts.html"><i className="mdi mdi-account-box-outline tx-16 me-2" />Contacts</a>
                    <a className="dropdown-item" href="settings.html"><i className="mdi mdi-account-location tx-16 me-2" />Accounts</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="about.html"><i className="typcn typcn-briefcase tx-16 me-2" />About us</a>
                    <a className="dropdown-item" href="fake"><i className="mdi mdi-application tx-16 me-2" />Getting start</a>
                  </div>
                </div>
              </div>
              <ul className="setting-menu-footer flex-column ps-0">
                <li className="divider mb-0 pb-0 " />
                <li className="setting-menu-btn">
                  <button className=" btn-shadow btn btn-success btn-sm">Cancel</button>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <div className="dropdown-menu-rounded btn-group dropdown">
            <button aria-expanded="false" aria-haspopup="true" className="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" id="dropdownMenuButton3" type="button"><span><i className="nav-link-icon fe fe-briefcase" /> Projects </span></button>
            <div className="dropdown-menu-lg dropdown-menu" x-placement="bottom-left">
              <div className="dropdown-menu-header">
                <div className="dropdown-menu-header-inner header-img p-3">
                  <div className="header-content text-start d-flex">
                    <div className="text-white">
                      <h5 className="menu-header-title">Projects</h5>
                      <h6 className="menu-header-subtitle mb-0">Overview of Projects</h6>
                    </div>
                    <div className="my-auto ms-auto">
                      <span className="badge bg-pill bg-warning float-end">View all</span>
                    </div>
                  </div>
                </div>
              </div>
              <a className="dropdown-item  mt-2" href="fake"><i className="dropdown-icon" />Mobile Application</a>
              <a className="dropdown-item" href="fake"><i className="dropdown-icon" />PSD Projects</a>
              <a className="dropdown-item" href="fake"><i className="dropdown-icon" />PHP Project</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="fake"><i className="dropdown-icon" />Wordpress Projects</a>
              <a className="dropdown-item mb-2" href="fake"><i className="dropdown-icon " />HTML &amp; CSS3 Projects</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <button className="navbar-toggler nav-link icon navresponsive-toggler vertical-icon ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fe fe-more-vertical header-icons navbar-toggler-icon" />
    </button>
    <div className="mb-0 navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0  mg-lg-s-auto">
      <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
        <div className="main-header-right">
          <div className="nav nav-item nav-link" id="bs-example-navbar-collapse-1">
            <form className="navbar-form" role="search">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <span className="input-group-btn">
                  <button type="reset" className="btn btn-default">
                    <i className="fas fa-times" />
                  </button>
                  <button type="submit" className="btn btn-default nav-link">
                    <i className="fe fe-search" />
                  </button>
                </span>
              </div>
            </form>
          </div>
          <li className="dropdown nav-item main-layout">
            <a href="fake" className="new theme-layout nav-link-bg layout-setting">
              <span className="dark-layout"><i className="fe fe-moon" /></span>
              <span className="light-layout"><i className="fe fe-sun" /></span>
            </a>
          </li>
          <div className="nav nav-item  navbar-nav-right mg-lg-s-auto">
            <div className="nav-item full-screen fullscreen-button">
              <a className="new nav-link full-screen-link" href="fake"><i className="fe fe-maximize" /></a>
            </div>
            <div className="dropdown  nav-item main-header-message ">
              <a className="new nav-link" href="fake"><i className="fe fe-mail" /><span className=" pulse-danger" /></a>
              <div className="dropdown-menu">
                <div className="menu-header-content bg-primary-gradient text-start d-flex">
                  <div className>
                    <h6 className="menu-header-title text-white mb-0">5 new Messages</h6>
                  </div>
                  <div className="my-auto mg-s-auto">
                    <a className="badge bg-pill bg-warning float-end" href="fake">Mark All Read</a>
                  </div>
                </div>
                <div className="main-message-list chat-scroll">
                  <a href="mail.html" className="p-3 d-flex border-bottom">
                    <div className="drop-img  cover-image  " data-bs-image-src="../assets/img/faces/3.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Paul Molive</h5>
                        <p className="time mb-0 text-end ms-auto float-end">10 min ago</p>
                      </div>
                      <p className="mb-0 desc">I'm sorry but i'm not sure how...</p>
                    </div>
                  </a>
                  <a href="mail.html" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-bs-image-src="../assets/img/faces/2.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Sahar Dary</h5>
                        <p className="time mb-0 text-end ms-auto float-end">13 min ago</p>
                      </div>
                      <p className="mb-0 desc">All set ! Now, time to get to you now......</p>
                    </div>
                  </a>
                  <a href="mail.html" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-bs-image-src="../assets/img/faces/9.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Khadija Mehr</h5>
                        <p className="time mb-0 text-end ms-auto float-end">20 min ago</p>
                      </div>
                      <p className="mb-0 desc">Are you ready to pickup your Delivery...</p>
                    </div>
                  </a>
                  <a href="mail.html" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-bs-image-src="../assets/img/faces/12.jpg">
                      <span className="avatar-status bg-danger" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Barney Cull</h5>
                        <p className="time mb-0 text-end ms-auto float-end">30 min ago</p>
                      </div>
                      <p className="mb-0 desc">Here are some products ...</p>
                    </div>
                  </a>
                  <a href="mail.html" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-bs-image-src="../assets/img/faces/5.jpg">
                      <span className="avatar-status bg-teal" />
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Petey Cruiser</h5>
                        <p className="time mb-0 text-end ms-auto float-end">35 min ago</p>
                      </div>
                      <p className="mb-0 desc">I'm sorry but i'm not sure how...</p>
                    </div>
                  </a>
                </div>
                <div className="text-center dropdown-footer">
                  <a href="mail.html">VIEW ALL</a>
                </div>
              </div>
            </div>
            <div className="dropdown nav-item main-header-notification">
              <a className="new nav-link" href="fake"><i className="fe fe-bell" /><span className=" pulse" /></a>
              <div className="dropdown-menu">
                <div className="menu-header-content bg-primary-gradient text-start d-flex">
                  <div className>
                    <h6 className="menu-header-title text-white mb-0">7 new Notifications</h6>
                  </div>
                  <div className="my-auto ms-auto">
                    <a className="badge bg-pill bg-warning float-end" href="fake">Mark All Read</a>
                  </div>
                </div>
                <div className="main-notification-list Notification-scroll">
                  <a className="d-flex p-3 border-bottom" href="fake">
                    <div className="notifyimg bg-success-transparent">
                      <i className="la la-shopping-basket text-success" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">New Order Received</h5>
                      <div className="notification-subtext">1 hour ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="fake">
                    <div className="notifyimg bg-danger-transparent">
                      <i className="la la-user-check text-danger" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">22 verified registrations</h5>
                      <div className="notification-subtext">2 hour ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="fake">
                    <div className="notifyimg bg-primary-transparent">
                      <i className="la la-check-circle text-primary" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">Project has been approved</h5>
                      <div className="notification-subtext">4 hour ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="fake">
                    <div className="notifyimg bg-pink-transparent">
                      <i className="la la-file-alt text-pink" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">New files available</h5>
                      <div className="notification-subtext">10 hour ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3 border-bottom" href="fake">
                    <div className="notifyimg bg-warning-transparent">
                      <i className="la la-envelope-open text-warning" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">New review received</h5>
                      <div className="notification-subtext">1 day ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                  <a className="d-flex p-3" href="fake">
                    <div className="notifyimg bg-purple-transparent">
                      <i className="la la-gem text-purple" />
                    </div>
                    <div className="ms-3">
                      <h5 className="notification-label mb-1">Updates Available</h5>
                      <div className="notification-subtext">2 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <i className="las la-angle-right text-end text-muted" />
                    </div>
                  </a>
                </div>
                <div className="dropdown-footer">
                  <a href="fake">VIEW ALL</a>
                </div>
              </div>
            </div>
            <div className="dropdown main-profile-menu nav nav-item nav-link">
              <a className="profile-user d-flex" href><img src="../assets/img/faces/6.jpg" alt="use" className="rounded-circle mCS_img_loaded" /><span /></a>
              <div className="dropdown-menu">
                <div className="main-header-profile header-img">
                  <div className="main-img-user"><img alt="user" src="../assets/img/faces/6.jpg" /></div>
                  <h6>Petey Cruiser</h6><span>Premium Member</span>
                </div>
                <a className="dropdown-item" href="profile.html"><i className="far fa-user" /> My Profile</a>
                <a className="dropdown-item" href="profile.html"><i className="far fa-edit" /> Edit Profile</a>
                <a className="dropdown-item" href="profile.html"><i className="far fa-clock" /> Activity Logs</a>
                <a className="dropdown-item" href="profile.html"><i className="fas fa-sliders-h" /> Account Settings</a>
                <a className="dropdown-item" href="signup.html"><i className="fas fa-sign-out-alt" /> Sign Out</a>
              </div>
            </div>
            <div className="dropdown main-header-message right-toggle">
              <a href='fake' className="nav-link pe-0" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
                <i className="ion ion-md-menu tx-20 bg-transparent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    )
  }
}
