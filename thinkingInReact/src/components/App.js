import React, { Component } from 'react';
import booksMockData from '../mocks/books';
import Header from './Header';
import Menu from './Navigations/Menu';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials'];
    this.state = {
      books: booksMockData,
      isMenuOpen: false,
      selectedFilter: 'All',
    };
  }

  toggleMenu = () => {
    this.setState((prev) => {
      return { isMenuOpen: !prev.isMenuOpen };
    });
  };

  selectFilter = (filter) => {
    this.setState({
      selectedFilter: filter,
      books:
        filter === 'All'
          ? booksMockData
          : booksMockData.filter((book) => book.category === filter),
    });
  };

  tabItems = () => {
    return this.filters.map((filter) => (
      <li
        className={filter === this.state.selectedFilter ? 'active' : ''}
        key={filter}
        onClick={() => this.selectFilter(filter)}
      >
        <a href='#0'>{filter}</a>
      </li>
    ));
  };

  render() {
    return (
      <div id='page-wrap'>
        <Menu
          pageWrapId='page-wrap'
          isOpen={this.state.isMenuOpen}
          toggleMenu={this.toggleMenu}
        />

        <nav className='navbar navbar-default navbar-fixed-top navbar-custom'>
          <div className='container'>
            <div className='navbar-header'>
              <a className='navbar-brand' href='/'>
                Library
              </a>
            </div>
            <ul className='nav navbar-nav pull-right'>
              <li className='hidden-xs'>
                <a href='#about'>About us</a>
              </li>
              <li>
                <button
                  onClick={this.toggleMenu}
                  className='btn btn-lg btn-outline'
                >
                  <i className='fa fa-graduation-cap' /> <span>Training</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <Header title='Thinking in React' />

        <section id='books'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h2>Books</h2>
                <hr className='star-primary' />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <ul className='nav nav-pills text-center'>{this.tabItems()}</ul>
              </div>
            </div>
            <div className='row book-list'>
              {this.state.books.map((book) => (
                <div className='col-xs-6 col-sm-3' key={book.id}>
                  <div className='thumbnail'>
                    <img alt='' className='img-responsive' src={book.cover} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='about' className='success'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h2>About The Library</h2>
                <hr className='star-light' />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-lg-offset-2'>
                <p>
                  This library is an exercise for building UI in a{' '}
                  <strong style={{ textDecoration: 'underline' }}>
                    declarative way
                  </strong>
                  . This web site will help you understand the fundamental piece
                  of ReactJS, components. You'll learn how to break an app in
                  components (AKA componentization) and flow data accross them.
                </p>
              </div>
              <div className='col-lg-4'>
                <p>
                  This ReactJS web site works, but it's not well implemented.
                  The problem, the developer didn't think in React and there
                  aren't many components. We challenge you to fork the repo an
                  componentizise the app to unleash the power of ReactJS.
                </p>
              </div>
              <div className='col-lg-8 col-lg-offset-2 text-center'>
                <a
                  target='_blank'
                  href='#none'
                  className='btn btn-lg btn-outline'
                >
                  <i className='fa fa-code-fork' /> Fork me on Github
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className='text-center'>
          <div className='footer-above'>
            <div className='container'>
              <div className='row'>
                <div className='footer-col col-md-4'>
                  <h3>Main Location</h3>
                  <p>
                    <span>Chernichovsky 3, Ramla</span>
                    <br />
                    <span>Israel 724440</span>
                  </p>
                </div>
                <div className='footer-col col-md-4'>
                  <h3>Around the Web</h3>
                  <ul className='list-inline'>
                    <li>
                      <a
                        target='_blank'
                        href='#none'
                        className='btn-social btn-outline'
                      >
                        <i className='fa fa-fw fa-github' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        href='#none'
                        className='btn-social btn-outline'
                      >
                        <i className='fa fa-fw fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        href='#none'
                        className='btn-social btn-outline'
                      >
                        <i className='fa fa-fw fa-instagram' />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='footer-col col-md-4'>
                  <h3>About Appleseeds</h3>
                  <p>
                    <a href='#none'>Appleseeds'</a>
                    <span>
                      vision for Israel is technological equality for all.
                      Appleseeds is an Israeli nonprofit that was founded in
                      2000 with the aim of bridging Israel's growing Startup
                      Nation to underserved communities in Israel's social and
                      geographic periphery. Appleseeds promotes digital equality
                      in Israel by developing and implementing programs in the
                      areas of technology, employment, and life skills.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-below'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <span>Copyright &copy;</span>
                  <a href='#none' target='_blank'>
                    LeanJS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
