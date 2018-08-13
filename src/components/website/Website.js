import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Website extends Component {
  render() {
    return (
      <body>
        <header>

          <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar" id="navbar">
            <div className="container">
              <a className="navbar-brand" href="#">
                <strong>Hora do Jogo</strong>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#about">Sobre</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">Valores</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">Time</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section className="view hm-gradient" id="intro">
            <div className="full-bg-img d-flex align-items-center">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-md-10 col-lg-6 text-center text-md-left margins">
                    <div className="white-text">
                      <div className="wow fadeInLeft" data-wow-delay="0.3s">
                        <h1 className="h1-responsive font-bold mt-sm-5">À hora do jogo é agorá .</h1>
                        <div className="h6">
                          texto.
              </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
        <div id="content">
          <section className="row no-gutters" id="features">
            <div className="col-lg-3 col-md-6 col-sm-12 deep-purple lighten-1 text-white">
              <div className="p-5 text-center wow zoomIn" data-wow-delay=".1s">
                <i className="fa fa-line-chart fa-2x"></i>
                <div className="h5 mt-3">Diferencial 1</div>
                <p className="mt-5">texto.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 purple lighten-1 text-white">
              <div className="p-5 text-center wow zoomIn" data-wow-delay=".3s">
                <i className="fa fa-industry fa-2x"></i>
                <div className="h5 mt-3">Diferencial 2</div>
                <p className="mt-5">texto</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 teal lighten-1 text-white">
              <div className="p-5 text-center wow zoomIn" data-wow-delay=".5s">
                <i className="fa fa-users fa-2x"></i>
                <div className="h5 mt-3"> Diferencial 3</div>
                <p className="mt-5">texto.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 light-blue lighten-1 text-white">
              <div className="p-5 text-center wow zoomIn" data-wow-delay=".7s">
                <i className="fa fa-bullhorn fa-2x"></i>
                <div className="h5 mt-3"> Diferencial 4</div>
                <p className="mt-5">texto.</p>
              </div>
            </div>
          </section>
          <section className="text-center py-5 grey lighten-4" id="about">
            <div className="container">
              <div className="wow fadeIn">
                <h2 className="h1 pt-5 pb-3">Por que trabalhar conosco?</h2>
                <p className="px-5 mb-5 pb-3 lead blue-grey-text">
                  Resposta que ainda nao sabemos.
      </p>
              </div>
              <div className="row">
                <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".3s">
                  <i className="fa fa-dashboard fa-3x orange-text"></i>
                  <h3 className="h4 mt-3">Design</h3>
                  <p className="mt-3 blue-grey-text">
                    Exemplo 1
        </p>
                </div>
                <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".4s">
                  <i className="fa fa-comments-o fa-3x cyan-text"></i>
                  <h3 className="h4 mt-3">Feedback</h3>
                  <p className="mt-3 blue-grey-text">
                    Exemplo 2
        </p>
                </div>
                <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".5s">
                  <i className="fa fa-cubes fa-3x red-text"></i>
                  <h3 className="h4 mt-3">Execution</h3>
                  <p className="mt-3 blue-grey-text">
                    Exemplo 3
        </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center py-5 indigo darken-1 text-white" id="pricing">
            <div className="container">
              <div className="wow fadeIn">
                <h2 className="h1 pt-5 pb-3">Qual o valor do Aplicativo?</h2>
                <p className="px-5 mb-5 pb-3 lead">
                  O empreendendor paga 10% do valor de cada jogo agendado pelo aplicativo.
      </p>
              </div>

            </div>
          </section>
          <section className="py-5" id="team">
            <div className="container">
              <div className="wow fadeIn">
                <h2 className="h1 pt-5 pb-3 text-center">
                  Nossos membros da equipe</h2>
                <p className="px-5 mb-5 pb-3 lead text-center blue-grey-text">
                  Texto
      </p>
              </div>
              <div className="row mb-lg-4 center-on-small-only">
                <div className="col-lg-6 col-md-12 mb-r wow fadeInLeft" data-wow-delay=".3s">
                  <div className="col-md-6 float-left">
                    <img className="img-fluid rounded z-depth-1 mb-3" src="img/woman-1.jpg" alt="team member" />
                  </div>
                  <div className="col-md-6 float-right">
                    <div className="h4">jean Visoski</div>
                    <h6 className="font-bold blue-grey-text mb-4">Função</h6>
                    <p className="grey-text">Historia.</p>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fa fa-facebook"></i>
                      <span className="ml-1">@jeanvisoski</span>
                    </a>
                  </div>
                </div>

              </div>
              <div className="row center-on-small-only">
                <div className="col-lg-6 col-md-12 mb-r wow fadeInLeft" data-wow-delay=".3s">
                  <div className="col-md-6 float-left">
                    <img className="img-fluid rounded z-depth-1 mb-3" src="img/man-1.jpg" alt="team member" />
                  </div>
                  <div className="col-md-6 float-right">
                    <div className="h4">Joel Visoski</div>
                    <h6 className="font-bold blue-grey-text mb-4">Função</h6>
                    <p className="grey-text">Historia.</p>
                    <a href="#" target="_blank">
                      <i className="fa fa-facebook"></i>
                      <span className="ml-1">@joelvisoski</span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-r wow fadeInRight" data-wow-delay=".3s">
                  <div className="col-md-6 float-left">
                    <img className="img-fluid rounded z-depth-1 mb-3" src="img/man-2.jpg" alt="team member" />
                  </div>
                  <div className="col-md-6 float-right">
                    <div className="h4">Cristian Ambrosi</div>
                    <h6 className="font-bold blue-grey-text mb-4">Função</h6>
                    <p className="grey-text">Historia.</p>
                    <a href="#" target="_blank">
                      <i className="fa fa-facebook"></i>
                      <span className="ml-1">@cristianambrosi</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="rgba-black-strong py-5">
              <div className="container">
                <div className="wow fadeIn">
                  <h2 className="h1 text-white pt-5 pb-3 text-center">Contate-Nos</h2>
                  <p className="text-white px-5 mb-5 pb-3 lead text-center">
                    texto.
        </p>
                </div>
                <div className="card mb-5 wow fadeInUp" data-wow-delay=".4s">
                  <div className="card-body p-5">
                    <div className="row">
                      <div className="col-md-8">
                        <form action="https://formspree.io/jean.a.visoski@gmail.com" method="POST">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="md-form">
                                <input className="form-control" id="name" type="text" name="name" required="required" />
                                <label for="name">Seu Nome</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="md-form">
                                <input className="form-control" id="email" type="text" name="_replyto" required="required" />
                                <label for="email">Seu email</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="md-form">
                                <input className="form-control" id="subject" type="text" name="subject" required="required" />
                                <label for="subject">Assunto</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="md-form">
                                <textarea className="md-textarea" id="message" name="message" required="required"></textarea>
                                <label for="message">Sua memsagem</label>
                              </div>
                            </div>
                          </div>
                          <div className="center-on-small-only mb-4">
                            <button className="btn btn-indigo ml-0" type="submit">
                              <i className="fa fa-paper-plane-o mr-2"></i> Enviar</button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-4">
                        <ul className="list-unstyled text-center">
                          <li className="mt-4">
                            <i className="fa fa-map-marker indigo-text fa-2x"></i>
                            <p className="mt-2">135, Erechim, Rio Grande, brazil</p>
                          </li>
                          <li className="mt-4">
                            <i className="fa fa-phone indigo-text fa-2x"></i>
                            <p className="mt-2">(54 ) 99625 - 4095</p>
                          </li>
                          <li className="mt-4">
                            <i className="fa fa-envelope indigo-text fa-2x"></i>
                            <p className="mt-2">jean.a.visoski@gmail.com</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="page-footer indigo darken-2 center-on-small-only pt-0 mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-5 flex-center">
                  <a className="px-3">
                    <i className="fa fa-facebook fa-lg white-text"></i>
                  </a>
                  <a className="px-3">
                    <i className="fa fa-twitter fa-lg white-text"></i>
                  </a>
                  <a className="px-3">
                    <i className="fa fa-google-plus fa-lg white-text"></i>
                  </a>
                  <a className="px-3">
                    <i className="fa fa-linkedin fa-lg white-text"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container-fluid">
              <p>&copy;
      <a href="/">Hora do Jogo</a>

              </p>
            </div>
          </div>
        </footer>


      </body>
    );
  }
}

export default Website;