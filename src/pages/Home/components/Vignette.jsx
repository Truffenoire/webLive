import React, { useState, useEffect, useRef } from 'react';

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img2 from '../../../imgImport/2.jpg';
import img3 from '../../../imgImport/3.jpg';
import img4 from '../../../imgImport/4.png';
import img5 from '../../../imgImport/5.jpg';
import img1 from '../../../imgImport/mongol.jpg';


export default function Vignette() {
    //ESSAI 1 CHAT GPT
    const [clipPaths, setClipPaths] = useState([
        'circle(0px at 0 0)',
        'circle(0px at 0 0)',
        'circle(0px at 0 0)',
        'circle(0px at 0 0)',
        'circle(0px at 0 0)',
    ]);
    const [clipIsChanged, setClipIsChanged] = useState(false)
    //Remet le clipPaths de tous les elements à 0
    useEffect(() => {
        setClipPaths([
            'circle(0px at 0 0)',
            'circle(0px at 0 0)',
            'circle(0px at 0 0)',
            'circle(0px at 0 0)',
            'circle(0px at 0 0)',
        ])
    }, [clipIsChanged])

    //   recupere la position exact de la souris dans un element enfant IMPORTANT
    const handleMouseMove = (event, index) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        // console.log('x', x, 'y', y);
        const newClipPaths = [...clipPaths];
        newClipPaths[index] = `circle(100px at ${x}px ${y}px)`;
        setClipPaths(newClipPaths);
    };

    const images = [img1, img2, img3, img4, img5];
    const titreDeleguez = [
        "Sans frais liés à l'embauche",
        "Sans engagement, ponctuel ou régulier",
        "A distance ou de son domicile",
        "Moyennes et petites entreprises",
        "Aide aux particuliers"
    ];
    const easy = [
        <svg className='fromBack' width="99" height="151" viewBox="0 0 99 151" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M78.4 82C73.2 80.1333 67.8 78.9333 62.2 78.4C56.8667 77.7333 51.4 77.1333 45.8 76.6C50.8667 77.4 56.0667 78.1333 61.4 78.8C67 79.4667 72.2667 80.9333 77.2 83.2C76.6667 83.7333 76.1333 84.2 75.6 84.6C75.0667 85 74.5333 85.2 74 85.2C72.1333 85.2 70.3333 85 68.6 84.6C66.8667 84.0667 65 83.8 63 83.8V81.4C62.3333 81.5333 61.4 81.6 60.2 81.6C56.8667 81.6 53.6 81.1333 50.4 80.2C47.2 79.2667 43.9333 78.8 40.6 78.8C38.8667 78.8 37.2 79 35.6 79.4V80.2C39.8667 80.4667 44.2 80.9333 48.6 81.6C53.1333 82.1333 57.7333 82.8667 62.4 83.8C58.1333 83.1333 53.5333 82.5333 48.6 82C43.8 81.4667 39.2667 81.2 35 81.2C33.2667 81.2 31.6 81.2667 30 81.4C28.5333 81.4 27.0667 81.4667 25.6 81.6C25.6 84.4 25.6667 87.6667 25.8 91.4C25.9333 95.1333 26.2 98.8 26.6 102.4C27 105.867 27.4667 108.933 28 111.6C28.5333 114.267 29.2 116 30 116.8L31.8 120.4C33.4 125.333 38.7333 127.8 47.8 127.8C49.8 127.8 52.2 127.533 55 127C57.8 126.467 60.6 125.867 63.4 125.2C66.3333 124.4 69.0667 123.733 71.6 123.2C74.2667 122.667 76.5333 122.4 78.4 122.4C80.2667 122.4 81.3333 122.667 81.6 123.2C81.8667 123.733 82 124.467 82 125.4C76.4 126.067 71 127.067 65.8 128.4C61.2667 129.6 56.8667 130.533 52.6 131.2C56.8667 130.533 61.2 129.733 65.6 128.8C70.8 127.6 76.0667 126.667 81.4 126C81.1333 126.8 81 127.333 81 127.6C81 128.4 81.3333 129.067 82 129.6L84.8 129.2C85.6 129.067 86.4 129 87.2 129C88 128.867 88.7333 128.667 89.4 128.4C91.8 129.067 93.4667 129.8 94.4 130.6C95.4667 131.4 96 132.267 96 133.2C96 134.933 95.1333 136.133 93.4 136.8C91.8 137.467 90.2667 138.533 88.8 140H88C84.1333 140 80.4 140.333 76.8 141C73.2 141.533 69.6 142.133 66 142.8C62.5333 143.467 58.9333 144.133 55.2 144.8C51.6 145.333 47.8667 145.6 44 145.6H41.2H40C42.5333 145.867 45.2667 146 48.2 146C51.9333 146 55.4 145.8 58.6 145.4C61.9333 145 65.1333 144.533 68.2 144C71.2667 143.467 74.2 143 77 142.6C79.9333 142.2 82.8667 142 85.8 142C83.6667 143.067 81.0667 144.133 78 145.2C74.9333 146.133 71.5333 146.933 67.8 147.6C64.0667 148.4 60.2 149 56.2 149.4C52.2 149.933 48.2667 150.2 44.4 150.2C41.7333 150.2 39.1333 150.067 36.6 149.8C34.0667 149.533 31.3333 148.667 28.4 147.2L28.2 145C26.3333 144.333 24.3333 143.133 22.2 141.4C20.2 139.533 18.3333 137.6 16.6 135.6C14.8667 133.6 13.4 131.733 12.2 130C11 128.267 10.4 127.133 10.4 126.6L9.8 124.8C8.6 122.267 7.6 119.467 6.8 116.4C6.13333 113.333 5.6 110.267 5.2 107.2C4.8 104 4.46667 100.867 4.2 97.8C3.93333 94.7333 3.73333 91.8667 3.6 89.2C3.33333 84.8 3.13333 80.4 3 76C2.86667 71.4667 2.8 66.9333 2.8 62.4C2.8 57.8667 2.8 53.3333 2.8 48.8C2.93333 44.1333 3 39.4667 3 34.8H2.4C1.73333 39.8667 1.33333 44.7333 1.2 49.4C1.2 54.0667 1.2 58.7333 1.2 63.4V71.2C1.2 80.5333 1.66667 90.2667 2.6 100.4C3.66667 110.533 6.26667 120.4 10.4 130C7.33333 124.8 5.4 119.667 4.6 114.6C3.8 109.4 3.06667 104.6 2.4 100.2C1.6 94.4667 1 88.9333 0.6 83.6C0.333334 78.2667 0.200001 72.8 0.200001 67.2V63C0.200001 55.2667 0.400001 47.4 0.800001 39.4C1.2 31.4 2.4 22.9333 4.4 14C3.6 14 3.2 13.6 3.2 12.8C3.2 12 3.6 10.8667 4.4 9.4C5.33333 7.93332 6.46667 6.53332 7.8 5.19999C9.13333 3.73333 10.6 2.53333 12.2 1.59999C13.9333 0.533328 15.6 -2.86102e-06 17.2 -2.86102e-06H64.8C69.7333 0.933326 74.5333 1.73332 79.2 2.39999C84 2.93332 89 3.33333 94.2 3.6L94 8.2C94 9 93.6 9.66666 92.8 10.2C92.1333 10.6 90.5333 10.8 88 10.8C87.2 10.8 86.2 10.8 85 10.8C83.9333 10.6667 82.7333 10.5333 81.4 10.4V12.2C86.8667 13.4 91.1333 14.8667 94.2 16.6C97.4 18.3333 99 20 99 21.6C99 23.4667 97.2 24.6 93.6 25C90.1333 25.4 85.4667 25.6 79.6 25.6C72.1333 25.6 64.1333 25.6 55.6 25.6C47.2 25.4667 39.0667 25.0667 31.2 24.4H27.8C27.1333 29.4667 26.6667 34.6667 26.4 40C26.1333 45.3333 25.9333 50.8 25.8 56.4C27.9333 56.4 30 56.3333 32 56.2C34.1333 55.9333 36.3333 55.8 38.6 55.8C40.4667 55.8 42.6 56 45 56.4C47.5333 56.6667 50.1333 57.0667 52.8 57.6C55.6 58.1333 58.3333 58.8 61 59.6C63.8 60.2667 66.3333 61 68.6 61.8C69 61.9333 69.4667 62 70 62H73.4C75.1333 62 76.2667 62.2667 76.8 62.8C77.4667 63.3333 77.8 64.4 77.8 66C75.5333 66 73.4 65.8667 71.4 65.6C69.4 65.3333 67.4667 65.0667 65.6 64.8C67.4667 65.4667 69.4 66 71.4 66.4C73.4 66.6667 75.5333 66.9333 77.8 67.2C77.5333 67.8667 77.3333 68.4667 77.2 69C77.2 69.5333 77.2 70 77.2 70.4C78.5333 70.6667 79.4 71.3333 79.8 72.4C80.3333 73.3333 80.6 74.4 80.6 75.6C80.6 77.3333 80.2 78.7333 79.4 79.8C78.7333 80.7333 78.4 81.4667 78.4 82ZM8 104.6C8.53333 107.8 9.13333 111.267 9.8 115C10.6 118.6 11.7333 122.2 13.2 125.8C14.8 129.267 16.9333 132.533 19.6 135.6C21.7333 138.133 24.5333 140.267 28 142C24 139.867 20.7333 136.933 18.2 133.2C15.2667 128.667 12.9333 123.6 11.2 118C9.6 112.4 8.4 106.467 7.6 100.2C6.93333 93.9333 6.4 87.9333 6 82.2C6.13333 85.8 6.33333 89.4667 6.6 93.2C6.86667 96.9333 7.33333 100.733 8 104.6ZM57 63.8C59.2667 64.2 61.6667 64.5333 64.2 64.8C61.8 64.1333 59.5333 63.6667 57.4 63.4C55.2667 63 53.1333 62.5333 51 62C52.7333 62.8 54.7333 63.4 57 63.8ZM24.2 145.8C22.4667 145 20.9333 144.067 19.6 143C18.6667 142.2 17.8 141.4 17 140.6C17.8 141.4 18.7333 142.133 19.8 142.8C21.2667 143.867 22.7333 144.867 24.2 145.8ZM30.2 143L28.4 142.2L30.2 143Z" fill="black" />
        </svg>,
        <svg className='fromBack' width="107" height="118" viewBox="0 0 107 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.2 59.6C60.6 59.6 57.8667 59.5333 56 59.4C54.2667 59.2667 52.6667 59.2 51.2 59.2C47.2 59.2 43.6667 59.4 40.6 59.8C37.5333 60.2 34.9333 61 32.8 62.2C30.6667 63.4 29.0667 65.1333 28 67.4C26.9333 69.6667 26.4 72.6667 26.4 76.4C26.4 81.8667 27 85.9333 28.2 88.6C29.5333 91.1333 31.3333 93 33.6 94.2C36 95.2667 38.8667 95.9333 42.2 96.2C45.5333 96.4667 49.2667 97.0667 53.4 98C55.8 98.2667 58.2 98.4667 60.6 98.6C63 98.6 65.4 98.6 67.8 98.6H82.2C75.5333 98.2 68.8667 98 62.2 98C55.6667 97.8667 49.7333 97.2667 44.4 96.2C39.2 95.1333 34.9333 93.2667 31.6 90.6C28.4 87.9333 26.8 83.8667 26.8 78.4C26.8 74 27.3333 70.6667 28.4 68.4C29.6 66 31.1333 64.2667 33 63.2C35 62 37.3333 61.3333 40 61.2C42.6667 60.9333 45.5333 60.8 48.6 60.8C52.3333 60.8 56.1333 61 60 61.4C56.9333 62.3333 53.8 63.0667 50.6 63.6C47.5333 64 44.6667 64.4667 42 65C39.3333 65.4 37 66 35 66.8C33.1333 67.4667 31.8667 68.4667 31.2 69.8V78.8L29.6 79.6C30.1333 82.9333 30.6 85.4667 31 87.2C31.5333 88.8 32.8667 90.0667 35 91C37.1333 91.8 40.5333 92.4667 45.2 93C50 93.5333 56.9333 94.4 66 95.6H80.4C82.9333 95.6 84.4 95.5333 84.8 95.4C85.3333 95.1333 85.6667 95 85.8 95L84 84.2C83.7333 81.5333 83.4 79.1333 83 77C82.6 74.8667 82.0667 72.6 81.4 70.2C81.2667 70.6 80.8667 70.8 80.2 70.8C80.8667 73.0667 81.4 75.4667 81.8 78C82.3333 80.5333 82.7333 82.9333 83 85.2C83.4 87.4667 83.6667 89.4 83.8 91C84.0667 92.6 84.3333 93.5333 84.6 93.8L83.4 94.2C83.1333 94.3333 82.7333 94.4 82.2 94.4H81C80.0667 94.4 79 94.3333 77.8 94.2C76.6 93.9333 75.0667 93.8 73.2 93.8H66.6C61.4 93.8 56.6 93.5333 52.2 93C48.0667 92.4667 44.4667 91.8 41.4 91C44.4667 91.6667 48.2 92.2 52.6 92.6C57.2667 93.1333 61.6 93.4 65.6 93.4C67.3333 93.4 69.1333 93.4 71 93.4C73 93.2667 75.1333 93.2 77.4 93.2H84C83.6 92.8 83.1333 92.6 82.6 92.6H82.2C81.6667 83.4 80.4667 74.6 78.6 66.2C76.7333 57.8 73.7333 50.4667 69.6 44.2C65.4667 37.8 60.0667 32.7333 53.4 29C46.7333 25.1333 38.4 23.2 28.4 23.2C25.6 23.2 22.8 23.4 20 23.8C17.2 24.2 14.3333 24.7333 11.4 25.4C11.6667 25.1333 11.8 24.8667 11.8 24.6C11.8 23.9333 11.5333 23.3333 11 22.8C10.4667 22.1333 10.2 21.4667 10.2 20.8C10.2 20 11 19.2667 12.6 18.6C14.3333 17.8 17.9333 17.0667 23.4 16.4C23.1333 16.1333 22.9333 15.7333 22.8 15.2C22.8 14.6667 22.8 14.2667 22.8 14C15.6 14 10 13.8667 6 13.6C2 13.2 1.13249e-06 12.2 1.13249e-06 10.6C1.13249e-06 9.93333 0.800001 8.99999 2.4 7.79999C4.13333 6.59999 6.53333 5.46666 9.6 4.39999C12.6667 3.19999 16.3333 2.19999 20.6 1.39999C25 0.466664 29.8667 -4.76837e-07 35.2 -4.76837e-07C45.4667 -4.76837e-07 54.2667 1.6 61.6 4.8C68.9333 7.86666 75.0667 12 80 17.2C85.0667 22.2667 89.1333 28.0667 92.2 34.6C95.4 41.1333 97.9333 47.7333 99.8 54.4C101.8 60.9333 103.267 67.3333 104.2 73.6C105.133 79.7333 106 85.0667 106.8 89.6C106.8 90.4 106.8 91.2 106.8 92C106.933 92.8 107 93.7333 107 94.8C107 98.6667 106.267 102.067 104.8 105C103.467 107.8 101.533 110.133 99 112C96.6 114 93.7333 115.467 90.4 116.4C87.2 117.467 83.7333 118 80 118C77.0667 118 73.2667 117.933 68.6 117.8C63.9333 117.667 59.4667 117.267 55.2 116.6C52.4 115.933 49.3333 115.4 46 115C42.6667 114.733 39.2667 114.2 35.8 113.4C32.3333 112.6 28.9333 111.467 25.6 110C22.4 108.533 19.4667 106.333 16.8 103.4C14.2667 100.333 12.2 96.4 10.6 91.6C9.13333 86.8 8.4 80.7333 8.4 73.4C8.4 66.4667 10 60.9333 13.2 56.8C16.4 52.5333 20.2 49.2667 24.6 47C29.1333 44.6 33.7333 43.0667 38.4 42.4C43.0667 41.6 46.8667 41.2 49.8 41.2C53.5333 41.2 56 41.4667 57.2 42C58.4 42.5333 59 43.0667 59 43.6C59 44 58.9333 44.3333 58.8 44.6C55.4667 44.6 51.2 44.7333 46 45C40.8 45.2667 35.7333 46.1333 30.8 47.6C26 49.0667 21.8667 51.3333 18.4 54.4C14.9333 57.3333 13.2 61.5333 13.2 67C14.4 62.0667 16.4 58.2 19.2 55.4C22.1333 52.4667 25.4667 50.3333 29.2 49C32.9333 47.5333 36.7333 46.6667 40.6 46.4C44.6 46 48.2 45.8 51.4 45.8H58.2C57.6667 46.3333 57.4 46.8667 57.4 47.4C57.4 47.9333 57.6667 48.4 58.2 48.8H66C68.1333 49.2 69.6667 49.9333 70.6 51C71.5333 51.9333 72 52.8 72 53.6C72 54.8 71.4 55.8667 70.2 56.8C69 57.7333 67 58.6667 64.2 59.6ZM30.6 108C34.3333 109.467 38.1333 110.6 42 111.4C46 112.2 49.9333 112.733 53.8 113C57.6667 113.4 61.2667 113.6 64.6 113.6C61.9333 113.333 59.2667 112.867 56.6 112.2C53.8 111.533 51.3333 110.933 49.2 110.4C46.9333 109.867 44.6667 109.533 42.4 109.4C40.2667 109.133 38 108.8 35.6 108.4C33.3333 108 31 107.4 28.6 106.6C26.2 105.667 23.8 104.333 21.4 102.6C23.9333 104.867 27 106.667 30.6 108ZM32.6 87C32.4667 86.8667 32.8667 87.2667 33.8 88.2C34.6 89 35.6667 89.6 37 90C36.3333 89.7333 35.3333 89.4 34 89C32.5333 88.4667 31.8 87.6667 31.8 86.6L32.6 87ZM37.6 90C37.4667 90 37.2667 90 37 90C37.1333 90 37.3333 90 37.6 90Z" fill="black" />
        </svg>,
        <svg className='fromBack' width="109" height="135" viewBox="0 0 109 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6 95.8C19.7333 96.4667 22.2667 97.6667 25.2 99.4C28.2667 101.133 31.6667 102.933 35.4 104.8C39.1333 106.667 43.2 108.333 47.6 109.8C52.1333 111.267 56.9333 112 62 112H64.2C65 112 65.9333 111.867 67 111.6L69.2 113.2C74.4 111.6 78.6667 108.6 82 104.2C85.3333 99.6667 87 93.6 87 86C87 80.5333 85.6667 76.8 83 74.8C80.4667 72.6667 75.7333 71.6 68.8 71.6C64.5333 71.6 60.0667 71.9333 55.4 72.6C50.8667 73.1333 46.0667 73.4 41 73.4C38.7333 73.4 36.4 73.3333 34 73.2C31.6 72.9333 29.1333 72.4667 26.6 71.8V73C31.9333 74.3333 37.2 75 42.4 75C47.4667 75 52.2667 74.7333 56.8 74.2C61.4667 73.5333 65.9333 73.2 70.2 73.2C73.8 73.2 76.6 73.6 78.6 74.4C80.7333 75.0667 82.3333 76 83.4 77.2C84.4667 78.4 85.1333 79.8667 85.4 81.6C85.8 83.2 86 85 86 87C86 93.2667 84.3333 98.6 81 103C77.8 107.133 74 109.733 69.6 110.8C74.5333 109.067 78.4 106.067 81.2 101.8C84.1333 97.2667 85.6 92.2 85.6 86.6C85.6 82.6 84.5333 79.5333 82.4 77.4C80.4 75.2667 76.8667 74.2 71.8 74.2C67.6667 74.2 63 74.4667 57.8 75C52.6 75.5333 47.0667 75.8 41.2 75.8C37.6 75.8 33.4 75.3333 28.6 74.4C23.9333 73.4667 19.4667 71.7333 15.2 69.2C10.9333 66.6667 7.33333 63.2 4.4 58.8C1.46667 54.2667 3.57628e-07 48.4 3.57628e-07 41.2C3.57628e-07 35.4667 1.13333 30.2 3.4 25.4C5.8 20.4667 8.93333 16.2 12.8 12.6C16.6667 8.86666 21.0667 5.93333 26 3.79999C31.0667 1.66666 36.2667 0.533329 41.6 0.399998C46.6667 0.399998 51.4667 1.13333 56 2.59999C60.6667 3.93333 65.0667 5.73333 69.2 8C73.3333 10.1333 77.2667 12.5333 81 15.2C84.7333 17.8667 88.2 20.5333 91.4 23.2L87.4 27.2C86.4667 27.2 85.0667 26.6667 83.2 25.6C81.3333 24.4 78.4667 22.4 74.6 19.6L73.4 21.4C78.2 25.2667 81.6667 28.8667 83.8 32.2C86.0667 35.5333 87.2 38.1333 87.2 40C86.9333 41.0667 86.2667 41.6 85.2 41.6C84.1333 41.6 82 40.7333 78.8 39C75.6 37.2667 71.9333 35.3333 67.8 33.2C63.8 31.0667 59.5333 29.1333 55 27.4C50.4667 25.6667 46.3333 24.8 42.6 24.8C40.4667 24.8 38.3333 25.2 36.2 26C34.0667 26.8 32.1333 27.9333 30.4 29.4C28.6667 30.7333 27.2 32.4 26 34.4C24.9333 36.4 24.4 38.6 24.4 41C24.4 44.8667 26.2 47.4667 29.8 48.8C33.4 50.1333 38.1333 50.8 44 50.8C45.2 50.8 46.4667 50.8 47.8 50.8C49.2667 50.6667 50.6 50.4667 51.8 50.2C54.8667 50.2 56.8667 50.1333 57.8 50C58.8667 49.7333 59.8667 49.6 60.8 49.6C66.5333 49.6 72.2667 50 78 50.8C83.7333 51.6 88.8667 53.3333 93.4 56C97.9333 58.6667 101.6 62.4667 104.4 67.4C107.2 72.3333 108.6 78.9333 108.6 87.2C108.6 92.9333 107.6 98.6667 105.6 104.4C103.733 110 100.867 115.067 97 119.6C93.1333 124 88.3333 127.533 82.6 130.2C76.8667 133 70.1333 134.4 62.4 134.4C57.7333 134.4 52.2 133.467 45.8 131.6C39.5333 129.867 33.5333 127.8 27.8 125.4C22.2 122.867 17.4 120.267 13.4 117.6C9.53333 114.933 7.6 112.667 7.6 110.8C7.6 110.267 7.93333 109.867 8.6 109.6C16.7333 115.6 25 120.533 33.4 124.4C41.6667 128 50.1333 130 58.8 130.4C54.5333 130.133 50.2667 129.4 46 128.2C41.6 126.867 37.2 125.267 32.8 123.4C28.5333 121.4 24.4 119.2 20.4 116.8C16.5333 114.267 12.8 111.733 9.2 109.2L12.2 106.6C11.8 106.467 11.0667 106 10 105.2C8.93333 104.4 7.86667 103.4 6.8 102.2C5.86667 101 5 99.7333 4.2 98.4C3.4 97.0667 3 95.8 3 94.6C3 93.2667 3.26667 92.4 3.8 92C4.33333 91.6 4.93333 91.4 5.6 91.4C6.26667 91.4 7.66667 91.8667 9.8 92.8C11.9333 93.7333 14.5333 94.7333 17.6 95.8ZM61.8 116.2C57.1333 116.2 51.9333 115.267 46.2 113.4C40.6 111.4 35.2667 108.867 30.2 105.8C34.3333 108.6 38.9333 111.133 44 113.4C49.0667 115.533 54.9333 116.6 61.6 116.6C70.5333 116.6 77.6 113.867 82.8 108.4C88.1333 102.933 90.8 95.6 90.8 86.4V84.4C90.1333 80.1333 88.6667 76.6667 86.4 74C84.2667 71.2 80.9333 69.6667 76.4 69.4C79.2 69.9333 81.4667 70.8 83.2 72C85.0667 73.2 86.4667 74.6667 87.4 76.4C88.4667 78 89.2 79.8 89.6 81.8C90 83.8 90.2 85.8667 90.2 88C89.6667 96.8 86.8667 103.733 81.8 108.8C76.7333 113.733 70.0667 116.2 61.8 116.2ZM87.2 124C90.5333 121.867 93.2 119.267 95.2 116.2C97.2 113.133 98.9333 109.933 100.4 106.6C97.6 112.2 93.7333 117.133 88.8 121.4C84 125.667 78.2667 128.333 71.6 129.4C74.1333 129 76.7333 128.467 79.4 127.8C82.2 127 84.8 125.733 87.2 124ZM106.2 86.4C106.2 84.9333 105.933 83.5333 105.4 82.2C105 81.1333 104.667 80 104.4 78.8L104.6 81.4C104.733 82.4667 104.8 83.9333 104.8 85.8C104.8 89.4 104.4 92.8667 103.6 96.2C102.8 99.5333 101.8 102.8 100.6 106C101.8 103.067 102.933 100 104 96.8C105.2 93.4667 105.933 90 106.2 86.4ZM104.4 78.2C104.4 78.3333 104.4 78.5333 104.4 78.8C104.4 78.5333 104.4 78.3333 104.4 78.2ZM69.4 111C69.2667 111 69.1333 111 69 111C69.1333 111 69.2667 111 69.4 111Z" fill="black"/>
        </svg>,
        <svg className='fromBack' width="110" height="186" viewBox="0 0 110 186" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.4 163.8C9.46667 164.867 11.2667 165.667 13.8 166.2C16.4667 166.867 19 167.2 21.4 167.2C25.8 167.2 30 165.733 34 162.8C38 160 41.8 156.133 45.4 151.2C49.1333 146.267 52.6667 140.6 56 134.2C59.3333 127.8 62.5333 121.067 65.6 114H65.4C62.7333 119.867 59.8667 125.867 56.8 132C53.7333 138.267 50.4 143.933 46.8 149C43.2 154.2 39.2667 158.4 35 161.6C30.8667 164.933 26.4 166.6 21.6 166.6C17.7333 166.6 13.9333 165.467 10.2 163.2C12.2 162.533 14.0667 162.2 15.8 162.2C16.3333 162.2 17.2667 162.333 18.6 162.6C20.7333 162.6 22.5333 162.533 24 162.4C25.4667 162.267 26.8667 161.933 28.2 161.4C29.5333 161 30.8 160.267 32 159.2C33.2 158.267 34.5333 157 36 155.4L38.4 156C42.2667 150.933 45.8667 145.467 49.2 139.6C52.6667 133.733 56.0667 127.8 59.4 121.8L63 113.8L61.2 113.4L58.2 120.6C55.1333 126.6 51.9333 132.467 48.6 138.2C45.2667 144.067 41.4667 149.4 37.2 154.2C41.8667 148.467 46.1333 142.067 50 135C53.8667 127.933 57.4 120.6 60.6 113L59.4 111C58.7333 107.933 57.7333 104.933 56.4 102C55.4667 99.7333 54.4 97.4 53.2 95C55.6 100.733 57.2667 106.267 58.2 111.6C56.8667 111.2 55.7333 110.4 54.8 109.2C54 107.867 53.2 106.333 52.4 104.6C51.7333 102.867 51.0667 101.067 50.4 99.2C49.8667 97.3333 49.1333 95.4667 48.2 93.6L49.2 91.8C47.0667 88.4667 44.7333 84.3333 42.2 79.4C39.8 74.4667 37.2 69.4 34.4 64.2C31.7333 59 29 53.9333 26.2 49C23.4 44.0667 20.6667 39.9333 18 36.6L17.4 37.2L42.4 82.2C37.3333 73.6667 31.9333 65 26.2 56.2C20.4667 47.4 15.3333 37.6667 10.8 27C10.8 26.0667 10.6667 24.8667 10.4 23.4C10.1333 21.8 9.8 20.2 9.4 18.6C9.13333 16.8667 8.8 15.2 8.4 13.6C8 11.8667 7.6 10.3333 7.2 9L12.4 7.4C13.0667 7.4 13.6667 7.73333 14.2 8.4C14.7333 8.93333 15.2 10.1333 15.6 12C16.2667 12 16.8667 11.4667 17.4 10.4C17.9333 9.33333 18.4667 8.13333 19 6.79999C19.6667 5.46666 20.3333 4.26666 21 3.19999C21.8 2.13332 22.8 1.59999 24 1.59999C25.7333 1.59999 27.2667 2.79999 28.6 5.19999C30.0667 7.46666 31.4 10.2667 32.6 13.6C33.9333 16.9333 35.3333 20.4667 36.8 24.2C38.2667 27.8 40 30.9333 42 33.6C44.1333 37.2 46.2667 40.7333 48.4 44.2C50.6667 47.6667 52.7333 51.3333 54.6 55.2C56.6 60.5333 59.2 65.9333 62.4 71.4C65.6 76.7333 68.1333 82.3333 70 88.2C73.2 77.5333 75.7333 68.0667 77.6 59.8C79.6 51.4 81.1333 43.0667 82.2 34.8C83.6667 30.5333 84.9333 25.7333 86 20.4C87.0667 15.0667 87.6 9.86666 87.6 4.8L92 4.99999C92.6667 4.99999 93.2667 5.33333 93.8 5.99999C94.3333 6.53333 94.6 7.93333 94.6 10.2C94.6 10.8667 94.5333 11.6 94.4 12.4C94.4 13.0667 94.3333 13.9333 94.2 15H96C97.2 10.6 98.6 7.06666 100.2 4.4C101.8 1.73333 103.333 0.399992 104.8 0.399992C105.867 0.399992 106.867 1.53333 107.8 3.8C108.867 6.06667 109.4 9.86666 109.4 15.2C109.4 24.1333 108.333 33.8 106.2 44.2C104.067 54.6 101.867 64.8667 99.6 75C95.8667 88.6 91.4667 101.667 86.4 114.2C81.3333 126.733 74.9333 139.467 67.2 152.4C64.8 156 62.0667 159.733 59 163.6C56.0667 167.6 52.6 171.2 48.6 174.4C44.7333 177.6 40.2667 180.2 35.2 182.2C30.2667 184.333 24.6 185.4 18.2 185.4C13.5333 185.4 10.3333 184.8 8.6 183.6C7 182.4 6.2 181.467 6.2 180.8C6.2 180.4 6.33333 179.933 6.6 179.4C10.6 180.733 14.8667 181.4 19.4 181.4C22.6 181.4 26.2667 180.8 30.4 179.6C34.6667 178.533 38.4667 176.867 41.8 174.6C38.7333 176.2 35.2667 177.6 31.4 178.8C27.6667 180 24.2667 180.6 21.2 180.6C16.4 180.6 11.7333 180 7.2 178.8C7.2 177.867 6.8 177 6 176.2C5.33333 175.4 4.53333 174.6 3.6 173.8C2.66667 173.133 1.8 172.4 1 171.6C0.333333 170.8 0 169.867 0 168.8C0 167.733 0.333333 166.933 1 166.4C1.66667 165.867 2.4 165.467 3.2 165.2C4.13333 164.933 5.06667 164.667 6 164.4C6.93333 164.267 7.73333 164.067 8.4 163.8ZM75.6 128.4C71.7333 135.333 67.7333 142.267 63.6 149.2C59.4667 156.267 54.2667 162.933 48 169.2C54.4 163.2 59.6667 156.667 63.8 149.6C68.0667 142.667 72 135.6 75.6 128.4ZM60.6 78.2L67.2 94.6L68.4 93.4L60.6 78.2ZM71.2 91.8C71.7333 90.2 72.2 88.6 72.6 87L73.8 82.2L72.6 81.6L70.4 89.4C70.6667 90.4667 70.9333 91.2667 71.2 91.8ZM48.6 84.6C47.1333 81.1333 45.4 77.7333 43.4 74.4C41.5333 70.9333 39.4667 67.5333 37.2 64.2C39.2 68.0667 41.2667 71.9333 43.4 75.8C45.5333 79.4 47.5333 83.0667 49.4 86.8L48.6 84.6ZM53.4 61.8C53.5333 63.8 53.8 65.4667 54.2 66.8C54.7333 68.1333 55.2667 69.3333 55.8 70.4C56.4667 71.3333 57.0667 72.2667 57.6 73.2C58.2667 74 58.8667 75 59.4 76.2L59 75.6L53.4 61.8ZM68.8 94.2L67.4 95.8C67.6667 96.2 67.9333 96.6 68.2 97C68.4667 97.2667 68.6667 97.6667 68.8 98.2L69.8 96.6L68.8 94.2Z" fill="black"/>
        </svg>,
        <svg className='fromBack' width="39" height="143" viewBox="0 0 39 143" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2 2.59999C10.7333 2.59999 11.2 2.93333 11.6 3.59999C12 4.13333 12.2 4.6 12.2 5L12 7L14.2 7.19999C14.8667 5.73333 15.8667 4.26666 17.2 2.79999C18.5333 1.2 20.1333 0.399998 22 0.399998C23.2 0.399998 24.1333 0.799997 24.8 1.59999C25.6 2.39999 26.2 3.39999 26.6 4.59999C27 5.66666 27.2 6.8 27.2 8C27.3333 9.2 27.4 10.2667 27.4 11.2C27.4 17.3333 27.1333 23.4 26.6 29.4C26.0667 35.4 25.4667 41.4667 24.8 47.6C24.1333 53.6 23.5333 59.6 23 65.6C22.4667 71.6 22.2 77.6667 22.2 83.8C22.2 85.2667 22.4667 86.6667 23 88C23.5333 89.2 23.8 90.5333 23.8 92C23.8 92.9333 23.4667 93.6667 22.8 94.2C22.2667 94.6 21.6 94.8667 20.8 95C20.2667 93.1333 19.7333 91.2667 19.2 89.4C18.8 87.8 18.5333 86.1333 18.4 84.4C18.4 88.2667 18.8667 91.8667 19.8 95.2L16.6 96L17.4 98.6C16.3333 101.533 14.4 103 11.6 103C9.86667 103 8.53333 102.267 7.6 100.8C6.66667 99.2 5.93333 97.2667 5.4 95C5 92.7333 4.73333 90.3333 4.6 87.8C4.6 85.1333 4.6 82.7333 4.6 80.6C4.6 75.9333 4.66667 71.3333 4.8 66.8C5.06667 62.6667 5.2 58.5333 5.2 54.4L4.6 64.4C4.33333 68.2667 4.2 72.1333 4.2 76C4.2 80.1333 4.2 84.2 4.2 88.2C4.33333 92.2 4.6 96.2667 5 100.4C3.53333 99.3333 2.46667 97.9333 1.8 96.2C1.13333 94.3333 0.666667 92.4 0.400001 90.4C0.133334 88.4 5.96046e-08 86.4 5.96046e-08 84.4V79L2.2 78.8C1.93333 77.3333 1.73333 75.9333 1.6 74.6C1.46667 73.1333 1.4 71.6667 1.4 70.2C1.4 65.9333 1.73333 61.6667 2.4 57.4C3.06667 53 3.4 48.6667 3.4 44.4C3.4 43.3333 3.33333 42.3333 3.2 41.4C3.2 40.4667 3.13333 39.4667 3 38.4H1.8C1.66667 43.4667 1.33333 48.4 0.8 53.2C0.4 57.3333 0.133334 61.5333 5.96046e-08 65.8C5.96046e-08 57.2667 0.266667 48.7333 0.8 40.2C1.33333 31.1333 1.93333 21.9333 2.6 12.6C4.33333 9.4 5.2 6.06666 5.2 2.59999C5.6 2.73333 6.13333 2.79999 6.8 2.79999C7.46667 2.79999 8.06667 2.79999 8.6 2.79999C9.13333 2.66666 9.66667 2.59999 10.2 2.59999ZM38.2 120.4L38 122.4C35.6 121.867 33.1333 121.467 30.6 121.2C28.2 120.8 25.7333 120.467 23.2 120.2C25.6 120.867 28.0667 121.333 30.6 121.6C33.1333 121.867 35.5333 122.467 37.8 123.4L37.2 126.8H38.2L38.4 128.6C38.4 130.067 38.1333 131.6 37.6 133.2C37.2 134.667 36.7333 136.133 36.2 137.6C35.2667 136.933 34.0667 136.267 32.6 135.6C31.1333 134.8 29.8667 134.4 28.8 134.4C28.4 134.4 27.9333 134.533 27.4 134.8C26.8667 134.933 26.4667 135.067 26.2 135.2C27.8 135.2 29.4667 135.4 31.2 135.8C33.0667 136.2 34.5333 137.2 35.6 138.8C35.4667 139.467 35 140.2 34.2 141L31.6 139.8V137.6L29.8 138.2L26.4 137.6C25.2 137.867 24.5333 138.467 24.4 139.4L25 140.2C26.0667 139.667 27.1333 139.4 28.2 139.4C28.3333 139.4 28.4667 139.467 28.6 139.6H28.8C27.6 139.733 26.6667 140.067 26 140.6C25.3333 141.133 24.4667 141.933 23.4 143L21.6 142.6L21 143C19.9333 142.333 18.8667 141.733 17.8 141.2C16.7333 140.667 15.6667 140.067 14.6 139.4L15.2 138.8L13.4 137.6C12.6 137.6 11.5333 137.533 10.2 137.4C9 137.267 7.73333 137.067 6.4 136.8C5.2 136.4 4.13333 135.867 3.2 135.2C2.4 134.533 2 133.6 2 132.4C2 130.8 2.66667 129.133 4 127.4C5.33333 125.533 6.93333 123.8 8.8 122.2C10.8 120.6 12.8667 119.267 15 118.2C17.1333 117.133 18.9333 116.6 20.4 116.6H27.2C28.5333 116.6 29.7333 116.933 30.8 117.6C32 118.133 33.2667 118.4 34.6 118.4L36.2 118.2L38 119.2L38.2 120.4ZM19 66.8C19.2667 64.6667 19.5333 62.5333 19.8 60.4C19.4 62.4 19.0667 64.4667 18.8 66.6C18.5333 68.4667 18.4 70.4 18.4 72.4C18.5333 70.4 18.7333 68.5333 19 66.8ZM30.4 139.6L30.6 139.8L30.4 139.6Z" fill="black"/>
        </svg>
    ];

    const mouseLeave = (event, index) => {
        // const newClipPaths = [...clipPaths];
        // newClipPaths[index] = 'circle(0px at 0 0)';
        // setClipPaths(newClipPaths);
        setClipIsChanged(!clipIsChanged)

    }
    const vignettesRef = useRef(null);

    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger);
    
        const vignettes = document.querySelectorAll('.fromBack');
    
        gsap.set(vignettes, { transformOrigin: "center center", width: 0 });
    
        const timeline = gsap.timeline({
          defaults: { duration: 1, ease: "bounce.out" },
          scrollTrigger: {
            trigger: vignettesRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: true
          }
        });
    
        timeline.fromTo(
          vignettes,
          { width: 0, stagger: 0.3 },
          { width: 100, stagger: 0.3 }
        );
      }, []);

    return (
        <section className='vignetteContain'>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="calque_1" x="0px"
                y="0px" viewBox="0 0 1300 550" xmlSpace="preserve">

                <path className="st1" d="M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250">
                    <animate
                        attributeName="d"
                        dur="25s"
                        begin="1s"
                        values="M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
                                    M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
                                    M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250"
                        repeatCount="indefinite"
                    />
                </path>
            </svg>
            <h1 className='posAbH1'>Déléguez</h1>
            <div ref={vignettesRef} className='vignette'>
                <ul>
                    {images.map((image, index) => (
                        <li key={index} className={`item index${index}`}
                            onMouseMove={(event) => handleMouseMove(event, index)}
                            onMouseLeave={(event) => mouseLeave(event, index)}>
                        
                            <div className="text"
                                style={{ pointerEvent: 'none' }}>
                            
                                <h2>{titreDeleguez[index]}</h2>
                                <p>{easy[index]}</p>
                            </div>
                            <div
                                className="image"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    clipPath: clipPaths[index]
                                }}
                            ></div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
