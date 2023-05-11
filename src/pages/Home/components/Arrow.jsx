import React, { useEffect } from 'react'

import { gsap } from "gsap"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Arrow() {


    useEffect(() => {
        gsap.to('.moveArrow', {
            yPercent: 155,
            scrollTrigger: {
                trigger: ".arrow",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.movePlane', {
            y: 300,
            x: -500,
            scrollTrigger: {
                trigger: ".arrow",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.moveSmile', {
            y: 800,
            x: 400,
            rotateZ: ('-180deg'),
            scrollTrigger: {
                trigger: ".arrow",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.moveSunStars', {
            // xPercent: 200,
            rotateZ: ('360deg'),
            scrollTrigger: {
                trigger: ".arrow",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.moveStars', {
            xPercent: -200,
            yPercent: -100,
            rotateZ: ('-15deg'),
            scrollTrigger: {
                trigger: ".arrow",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])

    return (
        <section className='arrow'>
        
            <svg className='moveArrow' width="337" height="746" viewBox="0 0 278 710" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 569L2.5 537.5C31.1886 540.501 47.197 544.302 75.5 558C93.0213 570.293 103.307 578.68 123 598V10.5H155.5V598C168.716 584.742 175.149 577.776 202 558C229.458 544.076 245.446 540.373 274.5 537.5L278 569C247.451 573.822 230.657 578.722 202 596C185.694 610.403 177.256 619.558 167.5 644C158.638 670.234 156.629 684.478 155.5 709.5H122.5C121.232 682.429 119.225 667.817 110.5 644C101.162 623.327 95.0799 612.113 75.5 596C48.9866 579.386 32.7543 572.865 0 569Z" fill="#B79492" />
                <path d="M77 23.2267L78.44 22.9747C78.68 23.8867 78.872 24.4387 79.016 24.6307C79.16 24.8467 79.484 25.0507 79.988 25.2427L102.272 33.3067L102.272 36.2947L79.412 44.5387C79.052 44.6587 78.752 45.3667 78.512 46.6627L77 46.5187L77 38.1307L78.44 37.9147C78.776 39.5947 79.172 40.4347 79.628 40.4347C79.82 40.4347 80.072 40.3867 80.384 40.2907L85.064 38.7067L85.064 29.3827L79.952 27.5467C79.664 27.4507 79.46 27.4027 79.34 27.4027C79.244 27.4027 79.184 27.4747 79.16 27.6187L78.476 30.1747L77 30.0307L77 23.2267ZM86.972 30.0667L86.972 38.0947L97.088 34.5667C97.592 34.3987 97.94 34.3147 98.132 34.3147L98.132 33.9547L86.972 30.0667ZM79.952 51.5918C79.664 51.9998 79.376 52.6598 79.088 53.5718C78.824 54.5078 78.692 55.5518 78.692 56.7038C78.692 57.8558 79.04 58.8158 79.736 59.5838C80.432 60.3518 81.368 60.7358 82.544 60.7358C84.368 60.7358 85.856 59.7038 87.008 57.6398C87.272 57.1118 87.632 56.2958 88.088 55.1918C88.568 54.0878 88.916 53.3078 89.132 52.8518C89.372 52.3958 89.696 51.8558 90.104 51.2318C90.536 50.6318 90.968 50.1638 91.4 49.8278C92.432 48.9878 93.692 48.5678 95.18 48.5678C97.364 48.5678 99.092 49.3718 100.364 50.9798C101.636 52.6118 102.272 54.7238 102.272 57.3158C102.272 59.2838 101.948 61.1318 101.3 62.8598C100.724 62.9318 99.956 62.9678 98.996 62.9678C98.06 62.9678 96.8 62.8358 95.216 62.5718L94.964 60.4838C97.676 60.2198 99.188 59.8958 99.5 59.5118C100.004 58.9358 100.256 57.8798 100.256 56.3438C100.256 54.8318 99.944 53.6558 99.32 52.8158C98.72 51.9758 97.832 51.5558 96.656 51.5558C95.984 51.5558 95.384 51.6878 94.856 51.9518C94.328 52.2158 93.836 52.6958 93.38 53.3918C92.924 54.0878 92.6 54.6398 92.408 55.0478C92.096 55.6478 91.712 56.4878 91.256 57.5678C90.8 58.6478 90.404 59.4878 90.068 60.0878C89.732 60.6878 89.288 61.3358 88.736 62.0318C87.608 63.3758 85.976 64.0478 83.84 64.0478C81.704 64.0478 79.976 63.2798 78.656 61.7438C77.336 60.2318 76.676 58.1558 76.676 55.5158C76.676 54.0998 76.844 52.6838 77.18 51.2678C77.54 49.8758 77.888 48.8558 78.224 48.2078C78.512 48.1358 79.196 48.0998 80.276 48.0998C81.356 48.0998 82.664 48.2438 84.2 48.5318L84.308 50.5838C82.58 50.7758 81.464 50.9318 80.96 51.0518C80.456 51.1958 80.12 51.3758 79.952 51.5918ZM79.952 70.4356C79.664 70.8436 79.376 71.5036 79.088 72.4156C78.824 73.3516 78.692 74.3956 78.692 75.5476C78.692 76.6996 79.04 77.6596 79.736 78.4276C80.432 79.1956 81.368 79.5796 82.544 79.5796C84.368 79.5796 85.856 78.5476 87.008 76.4836C87.272 75.9556 87.632 75.1396 88.088 74.0356C88.568 72.9316 88.916 72.1516 89.132 71.6956C89.372 71.2396 89.696 70.6996 90.104 70.0756C90.536 69.4756 90.968 69.0076 91.4 68.6716C92.432 67.8316 93.692 67.4116 95.18 67.4116C97.364 67.4116 99.092 68.2156 100.364 69.8236C101.636 71.4556 102.272 73.5676 102.272 76.1596C102.272 78.1276 101.948 79.9756 101.3 81.7036C100.724 81.7756 99.956 81.8116 98.996 81.8116C98.06 81.8116 96.8 81.6796 95.216 81.4156L94.964 79.3276C97.676 79.0636 99.188 78.7396 99.5 78.3556C100.004 77.7796 100.256 76.7236 100.256 75.1876C100.256 73.6756 99.944 72.4996 99.32 71.6596C98.72 70.8196 97.832 70.3996 96.656 70.3996C95.984 70.3996 95.384 70.5316 94.856 70.7956C94.328 71.0596 93.836 71.5396 93.38 72.2356C92.924 72.9316 92.6 73.4836 92.408 73.8916C92.096 74.4916 91.712 75.3316 91.256 76.4116C90.8 77.4916 90.404 78.3316 90.068 78.9316C89.732 79.5316 89.288 80.1796 88.736 80.8756C87.608 82.2196 85.976 82.8916 83.84 82.8916C81.704 82.8916 79.976 82.1236 78.656 80.5876C77.336 79.0756 76.676 76.9996 76.676 74.3596C76.676 72.9436 76.844 71.5276 77.18 70.1116C77.54 68.7196 77.888 67.6996 78.224 67.0516C78.512 66.9796 79.196 66.9436 80.276 66.9436C81.356 66.9436 82.664 67.0876 84.2 67.3756L84.308 69.4276C82.58 69.6196 81.464 69.7756 80.96 69.8956C80.456 70.0396 80.12 70.2196 79.952 70.4356ZM77 86.3273L78.404 86.1113C78.62 87.3833 78.86 88.1513 79.124 88.4153C79.388 88.7033 79.892 88.8473 80.636 88.8473L98.312 88.8473C99.056 88.8473 99.56 88.7033 99.824 88.4153C100.088 88.1513 100.328 87.3833 100.544 86.1113L101.948 86.3273L101.948 95.1473L100.544 95.2913L100.112 93.0593C100.016 92.5793 99.704 92.3393 99.176 92.3393L79.772 92.3393C79.244 92.3393 78.932 92.5793 78.836 93.0593L78.404 95.2913L77 95.1473L77 86.3273ZM79.952 101.408C79.664 101.816 79.376 102.476 79.088 103.388C78.824 104.324 78.692 105.368 78.692 106.52C78.692 107.672 79.04 108.632 79.736 109.4C80.432 110.168 81.368 110.552 82.544 110.552C84.368 110.552 85.856 109.52 87.008 107.456C87.272 106.928 87.632 106.112 88.088 105.008C88.568 103.904 88.916 103.124 89.132 102.668C89.372 102.212 89.696 101.672 90.104 101.048C90.536 100.448 90.968 99.9802 91.4 99.6442C92.432 98.8042 93.692 98.3842 95.18 98.3842C97.364 98.3842 99.092 99.1882 100.364 100.796C101.636 102.428 102.272 104.54 102.272 107.132C102.272 109.1 101.948 110.948 101.3 112.676C100.724 112.748 99.956 112.784 98.996 112.784C98.06 112.784 96.8 112.652 95.216 112.388L94.964 110.3C97.676 110.036 99.188 109.712 99.5 109.328C100.004 108.752 100.256 107.696 100.256 106.16C100.256 104.648 99.944 103.472 99.32 102.632C98.72 101.792 97.832 101.372 96.656 101.372C95.984 101.372 95.384 101.504 94.856 101.768C94.328 102.032 93.836 102.512 93.38 103.208C92.924 103.904 92.6 104.456 92.408 104.864C92.096 105.464 91.712 106.304 91.256 107.384C90.8 108.464 90.404 109.304 90.068 109.904C89.732 110.504 89.288 111.152 88.736 111.848C87.608 113.192 85.976 113.864 83.84 113.864C81.704 113.864 79.976 113.096 78.656 111.56C77.336 110.048 76.676 107.972 76.676 105.332C76.676 103.916 76.844 102.5 77.18 101.084C77.54 99.6922 77.888 98.6722 78.224 98.0242C78.512 97.9522 79.196 97.9162 80.276 97.9162C81.356 97.9162 82.664 98.0602 84.2 98.3482L84.308 100.4C82.58 100.592 81.464 100.748 80.96 100.868C80.456 101.012 80.12 101.192 79.952 101.408ZM78.404 120.864C78.644 122.376 78.884 123.3 79.124 123.636C79.388 123.972 79.892 124.14 80.636 124.14L100.076 124.14C100.028 121.044 99.956 119.388 99.86 119.172C99.764 118.956 99.656 118.788 99.536 118.668C99.152 118.38 97.796 118.032 95.468 117.624L95.612 115.788C95.972 115.764 96.668 115.752 97.7 115.752C98.756 115.752 100.172 115.86 101.948 116.076L101.948 135.696C100.172 135.912 98.756 136.02 97.7 136.02C96.668 136.02 95.972 136.008 95.612 135.984L95.468 134.148C97.796 133.74 99.152 133.38 99.536 133.068C99.656 132.972 99.764 132.816 99.86 132.6C99.956 132.384 100.028 130.728 100.076 127.632L79.772 127.632C79.22 127.632 78.908 127.872 78.836 128.352L78.404 131.124L77 130.98L77 121.08L78.404 120.864ZM77 136.781L78.44 136.529C78.68 137.441 78.872 137.993 79.016 138.185C79.16 138.401 79.484 138.605 79.988 138.797L102.272 146.861L102.272 149.849L79.412 158.093C79.052 158.213 78.752 158.921 78.512 160.217L77 160.073L77 151.685L78.44 151.469C78.776 153.149 79.172 153.989 79.628 153.989C79.82 153.989 80.072 153.941 80.384 153.845L85.064 152.261L85.064 142.937L79.952 141.101C79.664 141.005 79.46 140.957 79.34 140.957C79.244 140.957 79.184 141.029 79.16 141.173L78.476 143.729L77 143.585L77 136.781ZM86.972 143.621L86.972 151.649L97.088 148.121C97.592 147.953 97.94 147.869 98.132 147.869L98.132 147.509L86.972 143.621ZM77 162.195L78.404 161.979C78.62 163.251 78.86 164.019 79.124 164.283C79.388 164.571 79.892 164.715 80.636 164.715L98.312 164.715C99.056 164.715 99.56 164.571 99.824 164.283C100.088 164.019 100.328 163.251 100.544 161.979L101.948 162.195L101.948 164.967L101.948 167.091L101.948 169.071L83.804 181.383L83.804 181.635L97.592 181.635C98.672 181.635 99.392 181.431 99.752 181.023C100.112 180.639 100.376 179.691 100.544 178.179L101.948 178.395L101.948 186.855L100.544 186.999L100.112 184.767C100.016 184.287 99.704 184.047 99.176 184.047L77 184.047L77 181.923L77 181.815L98.312 167.415L98.312 167.127L80.6 167.127C80 167.127 79.556 167.235 79.268 167.451C78.98 167.691 78.8 168.111 78.728 168.711L78.404 171.231L77 171.087L77 162.195ZM78.404 193.673C78.644 195.185 78.884 196.109 79.124 196.445C79.388 196.781 79.892 196.949 80.636 196.949L100.076 196.949C100.028 193.853 99.956 192.197 99.86 191.981C99.764 191.765 99.656 191.597 99.536 191.477C99.152 191.189 97.796 190.841 95.468 190.433L95.612 188.597C95.972 188.573 96.668 188.561 97.7 188.561C98.756 188.561 100.172 188.669 101.948 188.885L101.948 208.505C100.172 208.721 98.756 208.829 97.7 208.829C96.668 208.829 95.972 208.817 95.612 208.793L95.468 206.957C97.796 206.549 99.152 206.189 99.536 205.877C99.656 205.781 99.764 205.625 99.86 205.409C99.956 205.193 100.028 203.537 100.076 200.441L79.772 200.441C79.22 200.441 78.908 200.681 78.836 201.161L78.404 203.933L77 203.789L77 193.889L78.404 193.673ZM77 210.886L78.404 210.67C78.62 211.942 78.86 212.71 79.124 212.974C79.388 213.262 79.892 213.406 80.636 213.406L98.312 213.406C99.056 213.406 99.56 213.262 99.824 212.974C100.088 212.71 100.328 211.942 100.544 210.67L101.948 210.886L101.948 227.662C101.06 227.806 100.172 227.878 99.284 227.878C98.42 227.878 97.436 227.854 96.332 227.806L96.08 225.754C97.736 225.418 98.768 225.178 99.176 225.034C99.608 224.89 99.836 224.722 99.86 224.53C99.932 223.954 99.98 223.222 100.004 222.334L100.112 216.898L90.428 216.898L90.428 222.298C90.428 222.61 91.28 222.994 92.984 223.45L92.876 224.566C91.124 224.566 89.9 224.59 89.204 224.638C88.508 224.71 88.088 224.746 87.944 224.746C87.8 224.77 87.452 224.818 86.9 224.89C86.348 224.986 85.964 225.046 85.748 225.07L85.532 223.774C86.9 223.39 87.74 223.126 88.052 222.982C88.364 222.862 88.52 222.718 88.52 222.55L88.52 216.898L78.836 216.898L78.872 220.102C78.872 222.814 79.016 224.47 79.304 225.07C79.352 225.142 79.376 225.19 79.376 225.214C79.496 225.622 80.912 226.15 83.624 226.798L83.444 228.778C83.036 228.802 82.304 228.814 81.248 228.814C80.216 228.814 78.8 228.682 77 228.418L77 210.886ZM77 241.015L78.404 240.799C78.62 242.071 78.86 242.839 79.124 243.103C79.388 243.391 79.892 243.535 80.636 243.535L98.312 243.535C99.056 243.535 99.56 243.391 99.824 243.103C100.088 242.839 100.328 242.071 100.544 240.799L101.948 241.015L101.948 249.835L100.544 249.979L100.112 247.747C100.016 247.267 99.704 247.027 99.176 247.027L79.772 247.027C79.244 247.027 78.932 247.267 78.836 247.747L78.404 249.979L77 249.835L77 241.015ZM77 253.144L78.404 252.928C78.62 254.2 78.86 254.968 79.124 255.232C79.388 255.52 79.892 255.664 80.636 255.664L98.312 255.664C99.056 255.664 99.56 255.52 99.824 255.232C100.088 254.968 100.328 254.2 100.544 252.928L101.948 253.144L101.948 255.916L101.948 258.04L101.948 260.02L83.804 272.332L83.804 272.584L97.592 272.584C98.672 272.584 99.392 272.38 99.752 271.972C100.112 271.588 100.376 270.64 100.544 269.128L101.948 269.344L101.948 277.804L100.544 277.948L100.112 275.716C100.016 275.236 99.704 274.996 99.176 274.996L77 274.996L77 272.872L77 272.764L98.312 258.364L98.312 258.076L80.6 258.076C80 258.076 79.556 258.184 79.268 258.4C78.98 258.64 78.8 259.06 78.728 259.66L78.404 262.18L77 262.036L77 253.144ZM77 281.058L78.404 280.842C78.62 282.114 78.86 282.882 79.124 283.146C79.388 283.434 79.892 283.578 80.636 283.578L98.312 283.578C99.056 283.578 99.56 283.434 99.824 283.146C100.088 282.882 100.328 282.114 100.544 280.842L101.948 281.058L101.948 292.326C101.948 294.39 101.612 296.178 100.94 297.69C100.292 299.202 99.392 300.378 98.24 301.218C96.032 302.85 93.368 303.666 90.248 303.666C86.816 303.666 83.828 302.754 81.284 300.93C79.988 300.018 78.944 298.746 78.152 297.114C77.384 295.506 77 293.646 77 291.534L77 281.058ZM80.348 287.07C79.82 287.07 79.508 287.322 79.412 287.826C79.076 289.506 78.908 290.778 78.908 291.642C78.908 294.306 79.856 296.31 81.752 297.654C83.648 298.998 86.18 299.67 89.348 299.67C91.34 299.67 93.068 299.406 94.532 298.878C95.996 298.374 97.112 297.69 97.88 296.826C99.32 295.194 100.04 293.418 100.04 291.498L100.04 287.07L80.348 287.07ZM77 306.722L78.404 306.506C78.62 307.778 78.86 308.546 79.124 308.81C79.388 309.098 79.892 309.242 80.636 309.242L98.312 309.242C99.056 309.242 99.56 309.098 99.824 308.81C100.088 308.546 100.328 307.778 100.544 306.506L101.948 306.722L101.948 323.498C101.06 323.642 100.172 323.714 99.284 323.714C98.42 323.714 97.436 323.69 96.332 323.642L96.08 321.59C97.736 321.254 98.768 321.014 99.176 320.87C99.608 320.726 99.836 320.558 99.86 320.366C99.932 319.79 99.98 319.058 100.004 318.17L100.112 312.734L90.428 312.734L90.428 318.134C90.428 318.446 91.28 318.83 92.984 319.286L92.876 320.402C91.124 320.402 89.9 320.426 89.204 320.474C88.508 320.546 88.088 320.582 87.944 320.582C87.8 320.606 87.452 320.654 86.9 320.726C86.348 320.822 85.964 320.882 85.748 320.906L85.532 319.61C86.9 319.226 87.74 318.962 88.052 318.818C88.364 318.698 88.52 318.554 88.52 318.386L88.52 312.734L78.836 312.734L78.872 315.938C78.872 318.65 79.016 320.306 79.304 320.906C79.352 320.978 79.376 321.026 79.376 321.05C79.496 321.458 80.912 321.986 83.624 322.634L83.444 324.614C83.036 324.638 82.304 324.65 81.248 324.65C80.216 324.65 78.8 324.518 77 324.254L77 306.722ZM108.068 320.69L107.312 320.402L103.964 313.166L105.26 312.266L109.904 318.53L108.068 320.69ZM77 328.027L78.404 327.811C78.62 329.083 78.86 329.851 79.124 330.115C79.388 330.403 79.892 330.547 80.636 330.547L98.312 330.547C99.056 330.547 99.56 330.403 99.824 330.115C100.088 329.851 100.328 329.083 100.544 327.811L101.948 328.027L101.948 338.071C101.948 340.615 101.324 342.523 100.076 343.795C98.852 345.067 97.112 345.703 94.856 345.703C92.6 345.703 90.668 344.863 89.06 343.183C87.452 341.527 86.648 339.103 86.648 335.911L86.648 334.039L79.772 334.039C79.196 334.039 78.884 334.279 78.836 334.759L78.404 338.395L77 338.251L77 328.027ZM88.556 334.039L88.556 335.623C88.556 337.207 88.928 338.587 89.672 339.763C90.56 341.155 92.192 341.851 94.568 341.851C96.776 341.851 98.276 341.275 99.068 340.123C99.716 339.163 100.04 338.119 100.04 336.991L100.04 334.759C100.04 334.279 99.752 334.039 99.176 334.039L88.556 334.039ZM77 348.136L78.404 347.92C78.62 349.192 78.86 349.96 79.124 350.224C79.388 350.512 79.892 350.656 80.636 350.656L98.312 350.656C99.056 350.656 99.56 350.512 99.824 350.224C100.088 349.96 100.328 349.192 100.544 347.92L101.948 348.136L101.948 364.912C101.06 365.056 100.172 365.128 99.284 365.128C98.42 365.128 97.436 365.104 96.332 365.056L96.08 363.004C97.736 362.668 98.768 362.428 99.176 362.284C99.608 362.14 99.836 361.972 99.86 361.78C99.932 361.204 99.98 360.472 100.004 359.584L100.112 354.148L90.428 354.148L90.428 359.548C90.428 359.86 91.28 360.244 92.984 360.7L92.876 361.816C91.124 361.816 89.9 361.84 89.204 361.888C88.508 361.96 88.088 361.996 87.944 361.996C87.8 362.02 87.452 362.068 86.9 362.14C86.348 362.236 85.964 362.296 85.748 362.32L85.532 361.024C86.9 360.64 87.74 360.376 88.052 360.232C88.364 360.112 88.52 359.968 88.52 359.8L88.52 354.148L78.836 354.148L78.872 357.352C78.872 360.064 79.016 361.72 79.304 362.32C79.352 362.392 79.376 362.44 79.376 362.464C79.496 362.872 80.912 363.4 83.624 364.048L83.444 366.028C83.036 366.052 82.304 366.064 81.248 366.064C80.216 366.064 78.8 365.932 77 365.668L77 348.136ZM77 369.441L78.404 369.225C78.62 370.497 78.86 371.265 79.124 371.529C79.388 371.817 79.892 371.961 80.636 371.961L98.312 371.961C99.056 371.961 99.56 371.817 99.824 371.529C100.088 371.265 100.328 370.497 100.544 369.225L101.948 369.441L101.948 372.213L101.948 374.337L101.948 376.317L83.804 388.629L83.804 388.881L97.592 388.881C98.672 388.881 99.392 388.677 99.752 388.269C100.112 387.885 100.376 386.937 100.544 385.425L101.948 385.641L101.948 394.101L100.544 394.245L100.112 392.013C100.016 391.533 99.704 391.293 99.176 391.293L77 391.293L77 389.169L77 389.061L98.312 374.661L98.312 374.373L80.6 374.373C80 374.373 79.556 374.481 79.268 374.697C78.98 374.937 78.8 375.357 78.728 375.957L78.404 378.477L77 378.333L77 369.441ZM77 397.355L78.404 397.139C78.62 398.411 78.86 399.179 79.124 399.443C79.388 399.731 79.892 399.875 80.636 399.875L98.312 399.875C99.056 399.875 99.56 399.731 99.824 399.443C100.088 399.179 100.328 398.411 100.544 397.139L101.948 397.355L101.948 408.623C101.948 410.687 101.612 412.475 100.94 413.987C100.292 415.499 99.392 416.675 98.24 417.515C96.032 419.147 93.368 419.963 90.248 419.963C86.816 419.963 83.828 419.051 81.284 417.227C79.988 416.315 78.944 415.043 78.152 413.411C77.384 411.803 77 409.943 77 407.831L77 397.355ZM80.348 403.367C79.82 403.367 79.508 403.619 79.412 404.123C79.076 405.803 78.908 407.075 78.908 407.939C78.908 410.603 79.856 412.607 81.752 413.951C83.648 415.295 86.18 415.967 89.348 415.967C91.34 415.967 93.068 415.703 94.532 415.175C95.996 414.671 97.112 413.987 97.88 413.123C99.32 411.491 100.04 409.715 100.04 407.795L100.04 403.367L80.348 403.367ZM77 421.723L78.44 421.471C78.68 422.383 78.872 422.935 79.016 423.127C79.16 423.343 79.484 423.547 79.988 423.739L102.272 431.803L102.272 434.791L79.412 443.035C79.052 443.155 78.752 443.863 78.512 445.159L77 445.015L77 436.627L78.44 436.411C78.776 438.091 79.172 438.931 79.628 438.931C79.82 438.931 80.072 438.883 80.384 438.787L85.064 437.203L85.064 427.879L79.952 426.043C79.664 425.947 79.46 425.899 79.34 425.899C79.244 425.899 79.184 425.971 79.16 426.115L78.476 428.671L77 428.527L77 421.723ZM86.972 428.563L86.972 436.591L97.088 433.063C97.592 432.895 97.94 432.811 98.132 432.811L98.132 432.451L86.972 428.563ZM77 447.136L78.404 446.92C78.62 448.192 78.86 448.96 79.124 449.224C79.388 449.512 79.892 449.656 80.636 449.656L98.312 449.656C99.056 449.656 99.56 449.512 99.824 449.224C100.088 448.96 100.328 448.192 100.544 446.92L101.948 447.136L101.948 449.908L101.948 452.032L101.948 454.012L83.804 466.324L83.804 466.576L97.592 466.576C98.672 466.576 99.392 466.372 99.752 465.964C100.112 465.58 100.376 464.632 100.544 463.12L101.948 463.336L101.948 471.796L100.544 471.94L100.112 469.708C100.016 469.228 99.704 468.988 99.176 468.988L77 468.988L77 466.864L77 466.756L98.312 452.356L98.312 452.068L80.6 452.068C80 452.068 79.556 452.176 79.268 452.392C78.98 452.632 78.8 453.052 78.728 453.652L78.404 456.172L77 456.028L77 447.136ZM78.404 478.614C78.644 480.126 78.884 481.05 79.124 481.386C79.388 481.722 79.892 481.89 80.636 481.89L100.076 481.89C100.028 478.794 99.956 477.138 99.86 476.922C99.764 476.706 99.656 476.538 99.536 476.418C99.152 476.13 97.796 475.782 95.468 475.374L95.612 473.538C95.972 473.514 96.668 473.502 97.7 473.502C98.756 473.502 100.172 473.61 101.948 473.826L101.948 493.446C100.172 493.662 98.756 493.77 97.7 493.77C96.668 493.77 95.972 493.758 95.612 493.734L95.468 491.898C97.796 491.49 99.152 491.13 99.536 490.818C99.656 490.722 99.764 490.566 99.86 490.35C99.956 490.134 100.028 488.478 100.076 485.382L79.772 485.382C79.22 485.382 78.908 485.622 78.836 486.102L78.404 488.874L77 488.73L77 478.83L78.404 478.614ZM77 495.827L78.404 495.611C78.62 496.883 78.86 497.651 79.124 497.915C79.388 498.203 79.892 498.347 80.636 498.347L98.312 498.347C99.056 498.347 99.56 498.203 99.824 497.915C100.088 497.651 100.328 496.883 100.544 495.611L101.948 495.827L101.948 512.603C101.06 512.747 100.172 512.819 99.284 512.819C98.42 512.819 97.436 512.795 96.332 512.747L96.08 510.695C97.736 510.359 98.768 510.119 99.176 509.975C99.608 509.831 99.836 509.663 99.86 509.471C99.932 508.895 99.98 508.163 100.004 507.275L100.112 501.839L90.428 501.839L90.428 507.239C90.428 507.551 91.28 507.935 92.984 508.391L92.876 509.507C91.124 509.507 89.9 509.531 89.204 509.579C88.508 509.651 88.088 509.687 87.944 509.687C87.8 509.711 87.452 509.759 86.9 509.831C86.348 509.927 85.964 509.987 85.748 510.011L85.532 508.715C86.9 508.331 87.74 508.067 88.052 507.923C88.364 507.803 88.52 507.659 88.52 507.491L88.52 501.839L78.836 501.839L78.872 505.043C78.872 507.755 79.016 509.411 79.304 510.011C79.352 510.083 79.376 510.131 79.376 510.155C79.496 510.563 80.912 511.091 83.624 511.739L83.444 513.719C83.036 513.743 82.304 513.755 81.248 513.755C80.216 513.755 78.8 513.623 77 513.359L77 495.827ZM102.308 530.168L101.624 530.6L83.372 528.728L83.444 526.928L101.228 526.46L102.308 530.168ZM78.656 529.736C78.104 529.736 77.636 529.544 77.252 529.16C76.868 528.8 76.676 528.308 76.676 527.684C76.676 527.084 76.844 526.58 77.18 526.172C77.516 525.788 77.984 525.596 78.584 525.596C79.184 525.596 79.664 525.776 80.024 526.136C80.384 526.52 80.564 527.036 80.564 527.684C80.564 529.052 79.928 529.736 78.656 529.736Z" fill="#B79492" />
            </svg>

            <svg className='movePlane' width="125" height="124" viewBox="0 0 125 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" clipPath="url(#clip0_1_13)">
                    <path d="M34 52C22.5986 30.9483 15.7347 16.2323 27 5C41.982 -3.71545 52.6864 2.10034 72 13.5C89.4589 25.6937 98.0151 34.102 111 52C126 80.9313 127.006 91.3705 116 100C105.641 105.596 96.1188 103.562 72 90C55.9894 78.0755 47.5215 70.1233 34 52Z" strokeWidth="3" stroke="#B79492" />
                    <path d="M26 98C21.0641 90.7647 16 76 34 52C46.37 34.5838 54.282 25.6918 72.5 13.5C97.8429 -1.09974 107.665 -2.34669 118.5 6C125.938 14.6372 126.543 22.6873 111 52C99.1215 67.5806 90.8055 75.9275 72.5 90C47.6631 104.154 37.4243 106.001 26 98Z" strokeWidth="3" stroke="#B79492" />
                    <path d="M1.5 122.5L115 9" stroke="#B79492" strokeWidth="3" />
                </g>
                <defs>
                    <clipPath id="clip0_1_13">
                        <rect width="124.064" height="123.908" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <svg className='moveSmile' width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="35.9524" y1="42.3048" x2="27.9524" y2="67.3048" stroke="#B79492" strokeWidth="2" />
                <circle cx="63" cy="63" r="62" stroke="#B79492" strokeWidth="2" />
                <path d="M18.5 50L44 58.5" stroke="#B79492" strokeWidth="2" />
                <path d="M83.5 18.5L74.5 44.5" stroke="#B79492" strokeWidth="2" />
                <path d="M92 36.5L66.5 27.5" stroke="#B79492" strokeWidth="2" />
                <path d="M102.5 58C102.5 89.5 68 111.5 36.5 91" stroke="#B79492" strokeWidth="2" />
            </svg>

            <svg className='moveStars' xmlns="http://www.w3.org/2000/svg" width="308" height="496" viewBox="0 0 308 496" fill="none">
                <path d="M66.5 147C69.2132 148.578 58.2795 97.1974 66.5 74.5C71.7475 60.0112 109.92 132.49 128.5 126.5C133.041 133.501 174.554 106.383 190 103C205.817 99.5353 161.11 157.891 169.5 171.5C169.5 171.5 198.356 203.884 209 220C217.098 232.26 127.488 214.532 125.5 220C125.5 220 93.1975 284.527 82.5 277C70.8254 268.785 78.4212 211.181 66.5 209.5C69.3051 200.381 5.59583 204.607 8.49998 195C14.1895 176.18 66.5 147 66.5 147Z" stroke="#404e5c" strokeWidth="16" />
                <path d="M195 99.5C237.152 161.2 252.518 203.408 272.5 274" stroke="#404e5c" strokeWidth="6" strokeLinejoin="round" />
                <path d="M214 153.5C227.886 179.338 233.721 193.266 242 217.5" stroke="#404e5c" strokeWidth="3" />
                <path d="M8 201.5L48 237.5" stroke="#404e5c" strokeWidth="4" />
                <path d="M127 224.5C154.132 264.943 167.853 289.915 191 336.5C233.077 424.347 242.295 454.592 248.5 495" stroke="#404e5c" strokeWidth="4" />
                <path d="M81.5 282C112.453 313.24 128.533 330.426 155 360.5" stroke="#404e5c" strokeWidth="3" />
                <path d="M214 222.5L231.5 254.5" stroke="#404e5c" strokeWidth="4" />
                <path d="M148.5 274C156.661 287.384 160.751 294.842 166.5 308" stroke="#404e5c" strokeWidth="3" />
                <path d="M269.5 297C265.152 300.848 251.96 268.744 241.5 267C232.465 265.493 240.646 308.639 233 309C233.26 311.286 211.63 320.173 201.5 327C195.487 331.052 232.676 335.512 230 340C232.986 339.996 227.051 373.305 235.5 370C245.133 366.232 256.818 340.586 258.5 347C261.963 343 294.817 361.926 296.5 352.5C298.262 342.631 280.691 324.717 283 323C279.412 319.837 305.512 296.478 300.5 289C297.057 283.863 275.241 299.588 269.5 297Z" stroke="#404e5c" strokeWidth="7" />
                <path d="M259 348.5C265.899 364.008 269.019 375.729 274 399" stroke="#404e5c" strokeWidth="4" />
                <path d="M152.5 388C148.006 388.909 141.086 366.318 138 369C134.98 371.624 140.383 391.488 136 392.5C136 392.5 126.125 394.789 115 405C111.665 408.061 140.102 409.756 136 412.5C138.923 412.069 139.676 438.867 144 434C149.581 427.717 153.68 411.095 155 415C158.953 411.816 185.575 423.044 180 416.5C176.163 411.996 164.042 401.199 167 399.5C164.899 398.803 167.895 387.258 171 380.5C173.082 375.968 157.575 388.154 152.5 388Z" stroke="#404e5c" strokeWidth="9" />
                <path d="M184.5 395.5C194.842 405.758 199.842 412.824 207.5 427.5" stroke="#404e5c" strokeWidth="4" />
                <path d="M288.499 426.5C283.812 422.252 286.04 402.89 282.499 406C276.786 411.02 269.499 420.5 269.499 420.5C270.955 423.546 256.528 420.183 250.999 419.5C247.296 419.042 262.589 430.937 259.999 433.5C263.112 435.473 247.096 450.329 250.999 451C256.483 451.943 270.981 443.417 270.499 447C273.027 445.681 287.347 467.868 286.999 461C286.587 452.851 283.969 439.529 286.999 442.5C290.462 439.075 302.691 436.086 302.999 433.5C303.548 428.898 292.546 429.187 288.499 426.5Z" stroke="#404e5c" strokeWidth="8" />
                <path d="M224 20C226.883 20.698 232.652 1.07469 233.5 3.99999C234.348 6.92529 240.711 22.6072 243 20C245.262 22.5703 259.387 22.2143 257.5 25C255.709 27.644 246.637 34.0597 247.5 37C245.047 37.0208 248.958 47.1783 253 52C255.101 54.5069 231.5 46 231.5 46C231.376 43.8965 219.079 50.0196 212 52C207.572 53.2388 220 35 220 35C221.634 34.5282 202.658 19.8184 208.5 20C216.591 20.2516 224 20 224 20Z" stroke="#404e5c" strokeWidth="7" />
            </svg>

            <svg className='moveSunStars' xmlns="http://www.w3.org/2000/svg" width="419" height="522" viewBox="0 0 419 522" fill="none">
<path d="M16 247.5C17.7453 245.044 -0.532822 237.093 3.5 236.5C6.8083 236.013 14.5 229.5 14.5 229.5C14.5 229.5 20.8092 216.427 22.5 217C24.4069 217.647 28.318 228.208 31.5 227.5C31.8363 228.809 42.9433 227.059 42 229.5C41.6189 230.486 36.1345 238.199 39 240C37.219 243.024 45.3968 251.621 43.5 252.5C40.9461 253.684 29.1909 247.726 28 251C25.2522 249.04 18.5063 262.581 16 262C12.5593 261.202 17.5691 248.967 16 247.5Z" fill="#F8C8B0" stroke="#F8C8B0" strokeWidth="4"/>
<path d="M67.5 158.5C65.2247 159.904 59.2051 147.893 56.5 145C54.2307 142.573 53.1996 162.007 49 162C49 162 39.7484 162.96 29.5 166.5C25.052 168.037 50.4508 177.165 47 179.5C48.4262 180.69 43.1823 192.418 45 198C46.2477 201.831 61.5 188 61.5 188C61.5 188 80.7891 194.324 79.5 189.5C78.0979 184.253 71.578 175.276 74 175.5C73.0807 172.674 82.7125 163.029 83 158.5C83.1722 155.787 70.6299 160.047 67.5 158.5Z" stroke="#F8C8B0" strokeWidth="8"/>
<path d="M108.5 101C107.154 97.8688 114.214 84.5002 117.5 83.9999C121.225 83.4327 127.961 94.2924 129.5 95.9999C131.762 98.51 145.757 94.8149 148.5 97.4999C152.425 101.342 138.792 114.714 136.5 117.5C134.624 119.78 144.921 129.786 146.5 133.5C148.892 139.126 120.904 136.508 123 133.5C123 133.5 116.761 141.518 103 147.5C97.4453 149.914 103.168 126.105 105.5 124.5C107.64 123.028 90.7771 117.413 89 111C87.9554 107.23 108.5 101 108.5 101Z" fill="#F8C8B0" stroke="#F8C8B0" strokeWidth="4"/>
<path d="M227 24.5C218.045 20.6537 209.661 68.1015 207.5 61.5C212.185 64.2506 179.381 63.8167 173 73.5C177.438 81.3986 200.734 86.5415 198 89.5C203.748 88.3445 187.189 120.429 195.5 125.5C203.039 130.1 221.725 97.4369 223 103.5C223 103.5 258.981 121.558 261 112.5C262.767 104.573 246.585 85.5028 251.5 84.5C251.191 76.4192 276.309 59.4886 270 59.5C259.635 59.5187 243.5 58 243.5 58C240.717 62.9301 239.884 30.0339 227 24.5Z" stroke="#F8C8B0" strokeWidth="8"/>
<path d="M315.218 51.2554C320.194 45.7371 334.001 -3.26916 343 5.99999C358.597 22.0638 360.098 58.7806 362.5 50C362.5 50 403.935 46.0138 398.5 59.5C392.996 73.1568 364.818 82.7251 369.238 83.4552C369.353 83.1931 369.596 83.1899 370 83.5C369.682 83.5019 369.43 83.4868 369.238 83.4552C368.106 86.0495 379.585 114.003 372.5 114.5C348.086 116.213 324.699 88.4113 333 99.5C333 99.5 297.1 134.219 297.5 118.5C297.97 100.035 303.687 85.9122 306.388 80.5105C303.95 75.9588 277.605 57.2165 283.5 54.5C297.147 48.2107 310.423 49.9716 315.218 51.2554Z" fill="#F8C8B0"/>
<path d="M343 5.99999C333.097 -4.19936 317.374 56.16 314 51.5C325.017 54.3927 304.707 44.7268 283.5 54.5C276.838 57.5704 311.359 81.1132 306 81.5C312.741 70.138 298.26 88.6418 297.5 118.5C297.1 134.219 333 99.5 333 99.5C324.699 88.4113 348.086 116.213 372.5 114.5C380.301 113.953 365.597 80.1205 370 83.5C362.336 83.5457 392.758 73.7479 398.5 59.5C403.935 46.0138 362.5 50 362.5 50C360.098 58.7806 358.597 22.0638 343 5.99999Z" stroke="#F8C8B0" strokeWidth="8"/>
<path d="M31 318C45.467 266.833 58.4147 240.414 99 201.5C139.028 170.656 160.923 158.943 199 148C245.606 138.264 268.404 140.44 305.5 152.5C328.893 168.352 333.421 173.933 334 181C332.894 195.506 329.967 200.655 321 205C306.204 208.357 299.761 206.766 292.5 196C290.576 195.035 290.061 180.312 301.5 179C309.782 178.885 311.7 180.683 313.5 185" stroke="#F8C8B0" strokeWidth="6"/>
<path d="M168.5 220C208.302 300.291 110.622 293.535 91 278C131.468 327.499 121.828 344.7 57.5 360C104.349 389.061 104.6 406.261 60.5 438.5C118.315 438.507 130.27 457.176 128 512C165.464 464.68 186.48 459.44 224 509.5C253.316 454.844 271.078 458.982 304.5 512C322.187 450.288 341.763 452.138 386.5 492.5C365.467 451.445 370.235 432.547 405.5 405.5C361.455 380.803 357.222 364.26 408.5 327C362.595 330.354 351.928 317.063 371 255C328.569 289.977 308.822 289.662 286.5 225.5C256.896 284.206 231.435 284.389 168.5 220Z" stroke="#F8C8B0" strokeWidth="6"/>
<path d="M236.5 310C214.412 351.017 213 354 213 354C221.613 357.712 159.996 361.85 164.5 376C168.538 388.685 209.014 387.088 203 389C206.685 383.514 190.467 439.475 201 435C217.755 427.882 237.993 398.458 240.5 403.5C242.173 394.723 289.323 421.292 293 413C297.002 403.977 271.101 378.313 278 376C278 376 296.908 353.074 307 337C310.585 331.29 267.957 350.84 258.5 343C258.5 343 243.843 296.363 236.5 310Z" stroke="#F8C8B0" strokeWidth="8"/>
            </svg>
          

        </section>
    )
}
