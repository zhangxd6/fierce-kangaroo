import React from 'react';
import _ from 'lodash';

import { toStyleObj, safePrefix } from '../utils';
import Branding from './Branding';
import Navigation from './Navigation';
import {Helmet} from 'react-helmet'

export default class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="site-header">
        {_.get(this.props, 'img_path') ?
          <div id="header-bg" className="site-header-bg" style={toStyleObj('background-image:url(\'' + safePrefix(_.get(this.props, 'img_path')) + '\')')} />
          : (_.get(this.props, 'site.siteMetadata.header.bg_img') &&
            <div id="header-bg" className="site-header-bg" style={toStyleObj('background-image:url(\'' + safePrefix(_.get(this.props, 'site.siteMetadata.header.bg_img')) + '\')')} />
          )}
        <div className="site-header-scroll">
          <div className="site-header-inside">
            <div className="site-header-vertical">
              <Branding {...this.props} />
              <Navigation {...this.props} />
            </div>
          </div>
        </div>
        <Helmet>
          <script>{
            `
             (function(h,o,t,j,a,r){
              h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                    h._hjSettings={hjid:1573877,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
             `}

          </script>

        </Helmet>

      </header>
    );
  }
}
