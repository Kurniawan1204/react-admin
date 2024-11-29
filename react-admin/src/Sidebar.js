import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
  <div className="app-sidebar__overlay" data-bs-toggle="sidebar" />
  <div className="sticky">
    <aside className="app-sidebar sidebar-scroll">
      <div className="main-sidebar-header active">
        <a className="desktop-logo logo-light active" href="index.html"><img src="../assets/img/brand/logo.png" className="main-logo" alt="logo" /></a>
        <a className="desktop-logo logo-dark active" href="index.html"><img src="../assets/img/brand/logo-white.png" className="main-logo" alt="logo" /></a>
        <a className="logo-icon mobile-logo icon-light active" href="index.html"><img src="../assets/img/brand/favicon.png" alt="logo" /></a>
        <a className="logo-icon mobile-logo icon-dark active" href="index.html"><img src="../assets/img/brand/favicon-white.png" alt="logo" /></a>
      </div>
      <div className="main-sidemenu">
        <div className="main-sidebar-loggedin">
          <div className="app-sidebar__user">
            <div className="dropdown user-pro-body text-center">
              <div className="user-pic">
                <img src="../assets/img/faces/6.jpg" alt="user" className="rounded-circle mCS_img_loaded" />
              </div>
              <div className="user-info">
                <h6 className=" mb-0 text-dark">Petey Cruiser</h6>
                <span className="text-muted app-sidebar__user-name text-sm">Administrator</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-navs">
          <ul className="nav  nav-pills-circle">
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Settings" aria-describedby="tooltip365540">
              <a href="fake" className="nav-link text-center m-2">
                <i className="fe fe-settings" />
              </a>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Chat" aria-describedby="tooltip143427">
              <a href="fake" className="nav-link text-center m-2">
                <i className="fe fe-mail" />
              </a>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Followers">
              <a href="fake" className="nav-link text-center m-2">
                <i className="fe fe-user" />
              </a>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Logout">
              <a href="fake" className="nav-link text-center m-2">
                <i className="fe fe-power" />
              </a>
            </li>
          </ul>
        </div>
        <div className="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width={24} height={24} viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" /></svg></div>
        <ul className="side-menu ">
          <li className="slide">
            <a className="side-menu__item" href="index.html"><i className="side-menu__icon fe fe-airplay" /><span className="side-menu__label">Dashboard</span></a>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-box" /><span className="side-menu__label">Apps</span><i className="angle fe fe-chevron-down" /></a>
            <ul className="slide-menu">
              <li className="side-menu__label1"><a href="fake">Apps</a></li>
              <li><a className="slide-item" href="cards.html">Cards</a></li>
              <li><a className="slide-item" href="darggablecards.html">Darggablecards</a></li>
              <li><a className="slide-item" href="rangeslider.html">Range-slider</a></li>
              <li><a className="slide-item" href="calendar.html">Calendar</a></li>
              <li><a className="slide-item" href="contacts.html">Contacts</a></li>
              <li><a className="slide-item" href="image-compare.html">Image-compare</a></li>
              <li><a className="slide-item" href="notification.html">Notification</a></li>
              <li><a className="slide-item" href="widget-notification.html">Widget-notification</a></li>
              <li><a className="slide-item" href="treeview.html">Treeview</a></li>
              <li><a className="slide-item" href="widgets.html">Widgets</a></li>
              <li className="sub-slide">
                <a className="slide-item" data-bs-toggle="sub-slide" href="fake"><span className="sub-side-menu__label">Mail</span><i className="sub-angle fe fe-chevron-down" /></a>
                <ul className="sub-slide-menu">
                  <li><a className="sub-side-menu__item" href="mail.html">Mail</a></li>
                  <li><a className="sub-side-menu__item" href="mail-compose.html">Mail Compose</a></li>
                  <li><a className="sub-side-menu__item" href="mail-read.html">Read-mail</a></li>
                  <li><a className="sub-side-menu__item" href="mail-settings.html">mail-settings</a></li>
                  <li><a className="sub-side-menu__item" href="chat.html">Chat</a></li>
                </ul>
              </li>
              <li className="sub-slide">
                <a className="slide-item" data-bs-toggle="sub-slide" href="fake"><span className="sub-side-menu__label">Maps</span><i className="sub-angle fe fe-chevron-down" /></a>
                <ul className="sub-slide-menu">
                  <li><a className="sub-side-menu__item" href="map-leaflet.html">Mapel Maps</a></li>
                  <li><a className="sub-side-menu__item" href="map-vector.html">Vector Maps</a></li>
                </ul>
              </li>
              <li className="sub-slide">
                <a className="slide-item" data-bs-toggle="sub-slide" href="fake"><span className="sub-side-menu__label">File-Manager</span><i className="sub-angle fe fe-chevron-down" /></a>
                <ul className="sub-slide-menu">
                  <li><a className="sub-side-menu__item" href="file-manager.html">File-Manager</a></li>
                  <li><a className="sub-side-menu__item" href="file-manager-list.html">File-Manager-List</a></li>
                  <li><a className="sub-side-menu__item" href="file-manager-details.html">File-Manager-Details</a></li>
                  <li><a className="sub-side-menu__item" href="file-attachments.html">File-Attachments</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-award " /><span className="side-menu__label">Icons</span><i className="angle fe fe-chevron-down" /></a>
            <ul className="slide-menu">
              <li className="side-menu__label1"><a href="fake">Icons</a></li>
              <li><a className="slide-item" href="icons.html">Font Awesome </a></li>
              <li><a className="slide-item" href="icons-2.html">Material Design Icons</a></li>
              <li><a className="slide-item" href="icons-3.html">Simple Line Icons</a></li>
              <li><a className="slide-item" href="icons-4.html">Feather Icons</a></li>
              <li><a className="slide-item" href="icons-5.html">Ionic Icons</a></li>
              <li><a className="slide-item" href="icons-6.html">Flag Icons</a></li>
              <li><a className="slide-item" href="icons-7.html">Pe7 Icons</a></li>
              <li><a className="slide-item" href="icons-8.html">Themify Icons</a></li>
              <li><a className="slide-item" href="icons-9.html">Typicons Icons</a></li>
              <li><a className="slide-item" href="icons-10.html">Weather Icons</a></li>
              <li><a className="slide-item" href="icons-11.html">Material Icons</a></li>
              <li><a className="slide-item" href="icons-12.html">Bootstrap Icons</a></li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-layers " /><span className="side-menu__label">Elements</span><i className="angle fe fe-chevron-down" /></a>
            <ul className="slide-menu">
              <li className="side-menu__label1"><a href="fake">Elements</a></li>
              <li><a className="slide-item" href="alerts.html">Alerts</a></li>
              <li><a className="slide-item" href="avatar.html">Avatar</a></li>
              <li><a className="slide-item" href="breadcrumbs.html">Breadcrumbs</a></li>
              <li><a className="slide-item" href="buttons.html">Buttons</a></li>
              <li><a className="slide-item" href="badge.html">Badge</a></li>
              <li><a className="slide-item" href="dropdown.html">Dropdown</a></li>
              <li><a className="slide-item" href="thumbnails.html">Thumbnails</a></li>
              <li><a className="slide-item" href="images.html">Images</a></li>
              <li><a className="slide-item" href="list-group.html">List Group</a></li>
              <li><a className="slide-item" href="navigation.html">Navigation</a></li>
              <li><a className="slide-item" href="pagination.html">Pagination</a></li>
              <li><a className="slide-item" href="popover.html">Popover</a></li>
              <li><a className="slide-item" href="progress.html">Progress</a></li>
              <li><a className="slide-item" href="spinners.html">Spinners</a></li>
              <li><a className="slide-item" href="media-object.html">Media Object</a></li>
              <li><a className="slide-item" href="typography.html">Typography</a></li>
              <li><a className="slide-item" href="tooltip.html">Tooltip</a></li>
              <li><a className="slide-item" href="toast.html">Toast</a></li>
              <li><a className="slide-item" href="tags.html">Tags</a></li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-package " /><span className="side-menu__label">Advanced UI</span><i className="angle fe fe-chevron-down" /></a>
            <ul className="slide-menu">
              <li className="side-menu__label1"><a href="fake">Advanced Ui</a></li>
              <li><a className="slide-item" href="accordion.html">Accordion</a></li>
              <li><a className="slide-item" href="carousel.html">Carousel</a></li>
              <li><a className="slide-item" href="collapse.html">Collapse</a></li>
              <li><a className="slide-item" href="modals.html">Modals</a></li>
              <li><a className="slide-item" href="timeline.html">Timeline</a></li>
              <li><a className="slide-item" href="sweet-alert.html">Sweet Alert</a></li>
              <li><a className="slide-item" href="rating.html">Ratings</a></li>
              <li><a className="slide-item" href="counters.html">Counters</a></li>
              <li><a className="slide-item" href="search.html">Search</a></li>
              <li><a className="slide-item" href="userlist.html">Userlist</a></li>
              <li className="sub-slide">
                <a className="slide-item" data-bs-toggle="sub-slide" href="fake"><span className="sub-side-menu__label">Blog-Pages</span><i className="sub-angle fe fe-chevron-down" /></a>
                <ul className="sub-slide-menu">
                  <li><a className="sub-side-menu__item" href="blog.html">Blog</a></li>
                  <li><a className="sub-side-menu__item" href="blog-details.html">Blog-Details</a></li>
                  <li><a className="sub-side-menu__item" href="edit-post.html">Blog-Edit</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-file" /><span className="side-menu__label">Forms</span><span className="badge bg-info side-badge">6</span><i className="angle fe fe-chevron-down  hor-angle" /></a>
            <ul className="slide-menu">
              <li className="side-menu__label1"><a href="fake">Forms</a></li>
              <li><a className="slide-item" href="form-elements.html">Form Elements</a></li>
              <li><a className="slide-item" href="form-advanced.html">Advanced Forms</a></li>
              <li><a className="slide-item" href="form-layouts.html">Form Layouts</a></li>
              <li><a className="slide-item" href="form-validation.html">Form Validation</a></li>
              <li><a className="slide-item" href="form-wizards.html">Form Wizards</a></li>
              <li><a className="slide-item" href="form-editor.html">WYSIWYG Editor</a></li>
              <li><a className="slide-item" href="form-sizes.html">Form-Sizes</a></li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-bar-chart-2 " /><span className="side-menu__label">Charts</span><span className="badge bg-danger side-badge">5</span><i className="angle fe fe-chevron-down hor-angle" /></a>
            <ul className="slide-menu">
              <li className="side-menu__label1"><a href="fake">Charts</a></li>
              <li><a className="slide-item" href="chart-morris.html">Morris Charts</a></li>
              <li><a className="slide-item" href="chart-flot.html">Flot Charts</a></li>
              <li><a className="slide-item" href="chart-chartjs.html">ChartJS</a></li>
              <li><a className="slide-item" href="chart-echart.html">Echart</a></li>
              <li><a className="slide-item" href="chart-sparkline.html">Sparkline</a></li>
              <li><a className="slide-item" href="chart-peity.html">Chart-peity</a></li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-compass" /><span className="side-menu__label">Pages</span><i className="angle fe fe-chevron-down" /></a>
            <ul className="slide-menu">
              <li className="side-menu__label1"><a href="fake">Pages</a></li>
              <li><a className="slide-item" href="profile.html">Profile</a></li>
              <li><a className="slide-item" href="editprofile.html">Edit-Profile</a></li>
              <li><a className="slide-item" href="about.html">About-Us</a></li>
              <li><a className="slide-item" href="settings.html">Settings</a></li>
              <li><a className="slide-item" href="invoice.html">Invoice</a></li>
              <li><a className="slide-item" href="pricing.html">Pricing</a></li>
              <li><a className="slide-item" href="gallery.html">Gallery</a></li>
              <li><a className="slide-item" href="todotask.html">Todotask</a></li>
              <li><a className="slide-item" href="faq.html">Faqs</a></li>
              <li><a className="slide-item" href="empty.html">Empty Page</a></li>
              <li><a className="slide-item" href="Switcher-1.html">switcher-1</a></li>
              <li className="sub-slide">
                <a className="slide-item" data-bs-toggle="sub-slide" href="fake"><span className="sub-side-menu__label">Tables</span><i className="sub-angle fe fe-chevron-down" /></a>
                <ul className="sub-slide-menu">
                  <li><a className="sub-side-menu__item" href="table-basic.html">Basic Tables</a></li>
                  <li><a className="sub-side-menu__item" href="table-data.html">Data Tables</a></li>
                  <li><a className="sub-side-menu__item" href="edit-table.html">Edit Tables</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-grid" /><span className="side-menu__label">Submenus</span><i className="angle fe fe-chevron-down" /></a>
            <ul className="slide-menu">
              <li className="side-menu__label1"><a href="fake">Submenus</a></li>
              <li><a className="slide-item" href="fake">Level1</a></li>
              <li className="sub-slide">
                <a className="slide-item" data-bs-toggle="sub-slide"href="fake"><span className="sub-side-menu__label">Level-2</span><i className="sub-angle fe fe-chevron-down" /></a>
                <ul className="sub-slide-menu">
                  <li><a className="sub-side-menu__item" href="fake">Level-2.1</a></li>
                  <li className="sub-slide2">
                    <a className="sub-side-menu__item" data-bs-toggle="sub-slide2" href="fake"><span className="sub-side-menu__label">Level-2.2</span><i className="sub-angle2 fe fe-chevron-down" /></a>
                    <ul className="sub-slide-menu1">
                      <li><a className="sub-slide-item2" href="fake">Level-2.2.1</a></li>
                      <li><a className="sub-slide-item2" href="fake">Level-2.2.2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-shopping-cart" /><span className="side-menu__label">Ecommerce</span><span className="badge bg-success side-badge">3</span><i className="angle fe fe-chevron-down  hor-angle" /></a>
            <ul className="slide-menu">
              <li><a className="slide-item" href="products.html">Products</a></li>
              <li><a className="slide-item" href="product-details.html">Product-Details</a></li>
              <li><a className="slide-item" href="product-cart.html">Cart</a></li>
              <li><a className="slide-item" href="check-out.html">Check-out</a></li>
              <li><a className="slide-item" href="wish-list.html">Wish-list</a></li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-codepen " /><span className="side-menu__label">Utilities</span><i className="angle fe fe-chevron-down" /></a>
            <ul className="slide-menu">
              <li><a className="slide-item" href="background.html">Background</a></li>
              <li><a className="slide-item" href="border.html">Border</a></li>
              <li><a className="slide-item" href="display.html">Display</a></li>
              <li><a className="slide-item" href="flex.html">Flex</a></li>
              <li><a className="slide-item" href="height.html">Height</a></li>
              <li><a className="slide-item" href="margin.html">Margin</a></li>
              <li><a className="slide-item" href="padding.html">Padding</a></li>
              <li><a className="slide-item" href="position.html">Position</a></li>
              <li><a className="slide-item" href="width.html">Width</a></li>
              <li><a className="slide-item" href="extras.html">Extras</a></li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-bs-toggle="slide" href="fake"><i className="side-menu__icon fe fe-aperture" /><span className="side-menu__label">Custom Pages</span><i className="angle fe fe-chevron-down" /></a>
            <ul className="slide-menu">
              <li><a className="slide-item" href="signin.html">Sign In</a></li>
              <li><a className="slide-item" href="signup.html">Sign Up</a></li>
              <li><a className="slide-item" href="forgot.html">Forgot Password</a></li>
              <li><a className="slide-item" href="reset.html">Reset Password</a></li>
              <li><a className="slide-item" href="lockscreen.html">Lockscreen</a></li>
              <li><a className="slide-item" href="underconstruction.html">UnderConstruction</a></li>
              <li><a className="slide-item" href="404.html">404 Error</a></li>
              <li><a className="slide-item" href="500.html">500 Error</a></li>
            </ul>
          </li>
        </ul>
        <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width={24} height={24} viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" /></svg></div>
      </div>
    </aside>
  </div></div>

      </div>
    )
  }
}
