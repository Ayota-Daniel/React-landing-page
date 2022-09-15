import React from 'react';

import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Solution</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Support</h6>
                    <ul>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Documentation</li>
                        <li className='py-1'>Guides</li>
                        <li className='py-1'>API Status</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Compoany</h6>
                    <ul>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Jobs</li>
                        <li className='py-1'>Press</li>
                        <li className='py-1'>Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Legal</h6>
                    <ul>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Terms</li>
                        <li className='py-1'>Claims</li>
                        <li className='py-1'>Policies</li>
                        <li className='py-1'>Conditions</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Suscribe to our newsletter</p>
                    <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input type="email" className='w-full p-2 mr-4 rounded-md mb-4'/>
                        <button className='p-2 mb-4'>Suscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col md:flex-row max-w-[1240px] px-2 m-auto justify-between sm:flex-row text-gray-500'>
                <p className='pt-4'>2022 Workflow, LLC, ALL rights recerved</p>
                <div className='flex justify-between sm:w-[300px] py-4 text-2xl'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitch/>
                    <FaTwitter/>
                    <FaGithub/>
                </div>
            </div>
        </div>
    );
}

export default Footer;