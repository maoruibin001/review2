/**
 * Created by lenovo on 2017/9/6.
 */
import React from 'react';

import FooterLink from '../containers/FooterLink';

const Footer = () => {
    return <p>
        show:
        <FooterLink filter="SHOW_ALL">All</FooterLink>
        {", "}
        <FooterLink filter="SHOW_ACTIVE">Active</FooterLink>
        {", "}
        <FooterLink filter="SHOW_COMPLETE">Complete</FooterLink>
    </p>
};

export default Footer;