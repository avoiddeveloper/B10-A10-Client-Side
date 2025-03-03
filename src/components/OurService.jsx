import React from 'react';
import service from '../assets/service.png'
import { IoGameControllerOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";
import { RiDiscountPercentLine } from "react-icons/ri";

const OurService = () => {
    return (
        <section className='w-11/12 mx-auto pb-5'>
            <div className='grid lg:grid-cols-12 gap-3'>

                <div className='col-span-6 flex flex-col justify-center space-y-4'>
                    <p className='font-semibold text-purple-500'>Our Service</p>
                    <h1 className='font-bold text-3xl'>Discover what makes our platform the ultimate destination for gamers!</h1>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full border-2 border-purple-500'><IoGameControllerOutline className='text-4xl text-purple-500'></IoGameControllerOutline></div>
                            <div>
                                <p className='font-semibold text-[22px]'>In-Depth Game Reviews</p>
                                <p className='font-light'>Honest, unbiased, and detailed game reviews covering gameplay, graphics, story, and more.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full border-2 border-purple-500'><GoTrophy className='text-4xl text-purple-500'></GoTrophy></div>
                            <div>
                                <p className='font-semibold text-[22px]'>Top Game Rankings</p>
                                <p className='font-light'>Curated lists of the best games across various genres and platforms.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full border-2 border-purple-500'><GoVideo className='text-4xl text-purple-500'></GoVideo></div>
                            <div>
                                <p className='font-semibold text-[22px]'>Video & Gameplay Analysis</p>
                                <p className='font-light'>Watch in-depth breakdowns and hands-on gameplay impressions.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full border-2 border-purple-500'><FaRegNewspaper className='text-4xl text-purple-500'></FaRegNewspaper></div>
                            <div>
                                <p className='font-semibold text-[22px]'>Gaming News & Updates</p>
                                <p className='font-light'>Stay up-to-date with the latest news, releases, and industry trends.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full border-2 border-purple-500'><RiUserCommunityLine className='text-4xl text-purple-500'></RiUserCommunityLine></div>
                            <div>
                                <p className='font-semibold text-[22px]'> Community Discussions</p>
                                <p className='font-light'>Engage with fellow gamers through forums, comments, and polls.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full border-2 border-purple-500'><RiDiscountPercentLine className='text-4xl text-purple-500'></RiDiscountPercentLine></div>
                            <div>
                                <p className='font-semibold text-[22px]'>Exclusive Deals & Discounts</p>
                                <p className='font-light'>Find the best offers on games, subscriptions, and accessories.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-6 ml-auto'>
                    <img src={service} alt="service-bg" />
                </div>
            </div>
        </section>
    );
};

export default OurService;