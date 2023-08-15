import React from 'react'
import Menuitem from './Menuitem'

function Menu() {

    const menuItem = [
        {
            id:1,
            img :'./images/4.png',
            name:'Cheeseburger With Salad',
            price:'$18.00',
        },
        {
            id:2,
            img :'./images/Burger.png',
            name:'Beef Burger',
            price:'$15.00',
        },
        {
            id:3,
            img :'./images/1.png',
            name:'Royel Cheeseburger',
            price:'$16.00',
        },
        {
            id:4,
            img :'./images/2.png',
            name:'Black Gambugrer ',
            price:'$14.00',
        },
        {
            id:5,
            img :'./images/3.png',
            name:'Chicken Burger',
            price:'$15.00',
        },
    ]



  return (
    <div className="menu">
        <div className="container">
            <div className="menu_row">
                <div className="menu_text">
                    <p className="menu_title">Our popular <span className="banner_marked">Category</span> </p>
                </div>
                <div className="menu_panels">
                    <div className="menu_sections">
                    <div className="menu_panel">
                        <div className="menu_panel_icon">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_161)">
<path d="M44 20.3359C44 18.6467 42.9108 17.2079 41.3982 16.6825C41.1658 11.4417 39.2092 7.41987 35.573 4.71723C32.2543 2.25065 27.6878 1 22 1C16.3122 1 11.7457 2.25065 8.42703 4.71731C4.79084 7.41987 2.83422 11.4418 2.60176 16.6826C1.08917 17.2079 0 18.6467 0 20.3359C0 21.3257 0.374172 22.2293 0.987852 22.9141C0.374172 23.5988 0 24.5024 0 25.4922C0 27.1918 1.10258 28.6378 2.6296 29.1551C3.18252 35.0454 8.18967 39.6719 14.2656 39.6719H29.7344C35.8103 39.6719 40.8175 35.0454 41.3704 29.1551C42.8974 28.6378 44 27.1918 44 25.4922C44 24.5024 43.6258 23.5988 43.0121 22.9141C43.6258 22.2293 44 21.3257 44 20.3359ZM22 3.57812C29.3933 3.57812 38.1513 5.85719 38.8034 16.4688H5.19655C5.84873 5.85719 14.6067 3.57812 22 3.57812ZM3.86719 19.0469H40.1328C40.8436 19.0469 41.4219 19.6251 41.4219 20.3359C41.4219 21.0467 40.8436 21.625 40.1328 21.625H3.86719C3.1564 21.625 2.57812 21.0467 2.57812 20.3359C2.57812 19.6251 3.1564 19.0469 3.86719 19.0469ZM29.7344 37.0938H14.2656C9.68456 37.0938 5.88302 33.7265 5.24958 29.3594H6.44531C7.30709 29.3594 7.57943 29.6525 8.12187 30.2366C8.78857 30.9545 9.70166 31.9375 11.6875 31.9375C13.6874 31.9375 14.5766 30.9444 15.226 30.2193C15.7387 29.6468 15.996 29.3594 16.8438 29.3594C17.6915 29.3594 17.9488 29.6468 18.4615 30.2193C19.1109 30.9444 20.0001 31.9375 22 31.9375C23.9999 31.9375 24.8891 30.9444 25.5385 30.2193C26.0512 29.6468 26.3085 29.3594 27.1562 29.3594C28.004 29.3594 28.2613 29.6468 28.774 30.2193C29.4234 30.9444 30.3126 31.9375 32.3125 31.9375C34.3124 31.9375 35.2016 30.9444 35.851 30.2193C36.3637 29.6468 36.621 29.3594 37.4688 29.3594H38.7504C38.117 33.7265 34.3154 37.0938 29.7344 37.0938ZM40.1328 26.7812H37.4688C35.4689 26.7812 34.5796 27.7743 33.9303 28.4995C33.4176 29.072 33.1603 29.3594 32.3125 29.3594C31.4647 29.3594 31.2074 29.072 30.6947 28.4995C30.0454 27.7743 29.1561 26.7812 27.1562 26.7812C25.1564 26.7812 24.2671 27.7743 23.6178 28.4995C23.1051 29.072 22.8478 29.3594 22 29.3594C21.1522 29.3594 20.8949 29.072 20.3822 28.4995C19.7329 27.7743 18.8436 26.7812 16.8438 26.7812C14.8439 26.7812 13.9546 27.7743 13.3053 28.4995C12.7926 29.072 12.5353 29.3594 11.6875 29.3594C10.8257 29.3594 10.5534 29.0662 10.0109 28.4821C9.34424 27.7643 8.43116 26.7812 6.44531 26.7812H3.86719C3.1564 26.7812 2.57812 26.203 2.57812 25.4922C2.57812 24.7814 3.1564 24.2031 3.86719 24.2031H40.1328C40.8436 24.2031 41.4219 24.7814 41.4219 25.4922C41.4219 26.203 40.8436 26.7812 40.1328 26.7812Z" fill="white"/>
<path d="M14.2656 13.8906C14.9776 13.8906 15.5547 13.3135 15.5547 12.6016C15.5547 11.8896 14.9776 11.3125 14.2656 11.3125C13.5537 11.3125 12.9766 11.8896 12.9766 12.6016C12.9766 13.3135 13.5537 13.8906 14.2656 13.8906Z" fill="white"/>
<path d="M29.7344 13.8906C30.4463 13.8906 31.0234 13.3135 31.0234 12.6016C31.0234 11.8896 30.4463 11.3125 29.7344 11.3125C29.0224 11.3125 28.4453 11.8896 28.4453 12.6016C28.4453 13.3135 29.0224 13.8906 29.7344 13.8906Z" fill="white"/>
<path d="M24.5781 11.3125C25.2901 11.3125 25.8672 10.7354 25.8672 10.0234C25.8672 9.31151 25.2901 8.73438 24.5781 8.73438C23.8662 8.73438 23.2891 9.31151 23.2891 10.0234C23.2891 10.7354 23.8662 11.3125 24.5781 11.3125Z" fill="white"/>
<path d="M19.4219 8.73438C20.1338 8.73438 20.7109 8.15724 20.7109 7.44531C20.7109 6.73338 20.1338 6.15625 19.4219 6.15625C18.7099 6.15625 18.1328 6.73338 18.1328 7.44531C18.1328 8.15724 18.7099 8.73438 19.4219 8.73438Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_161">
<rect width="44" height="44" fill="white"/>
</clipPath>
</defs>
</svg>

                        </div>
                        <p className="menu_panel_text">Burger</p>
                    </div>
                    <div className="menu_panel">
                        <div className="menu_panel_icon">
                        <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_172)">
<path d="M61.8701 31.1174C61.8679 31.4473 61.6772 31.7474 61.379 31.8883L27.1399 48.1286C26.7992 49.5417 25.8126 50.7795 24.3701 51.3772C21.9754 52.369 19.2201 51.2278 18.2281 48.8331C15.8892 43.1862 14.7032 37.224 14.7032 31.1119C14.7032 24.9999 15.8891 19.0377 18.2281 13.3908C18.471 12.8044 18.8195 12.2933 19.2427 11.8701C20.5477 10.5652 22.5618 10.0976 24.3701 10.8468C25.5867 11.3508 26.479 12.3104 26.9333 13.4463L61.389 30.3403C61.6852 30.4855 61.8722 30.7875 61.8701 31.1174ZM31.0339 44.3794L34.6625 42.6581C34.642 42.0095 34.3344 41.3958 33.8073 40.9913C33.343 40.6352 32.7679 40.481 32.1878 40.5573C31.6077 40.6337 31.0925 40.9312 30.7359 41.3956C30.3798 41.8597 30.2256 42.4348 30.302 43.0149C30.3724 43.5494 30.6309 44.0288 31.0339 44.3794ZM23.7124 12.4348C22.1932 11.8055 20.4451 12.5296 19.8162 14.0487C15.2584 25.0521 15.2584 37.1718 19.8161 48.1753C20.1209 48.9112 20.694 49.4843 21.43 49.7892C22.1659 50.094 22.9764 50.094 23.7123 49.7892C24.4482 49.4843 25.0213 48.9112 25.3261 48.1753C25.6309 47.4394 25.6309 46.6289 25.3261 45.893C23.3751 41.1831 22.386 36.2101 22.386 31.112C22.386 26.0139 23.3752 21.0409 25.3261 16.3309C25.9555 14.8118 25.2315 13.0639 23.7124 12.4348ZM47.5385 25.4635C47.4849 25.5198 47.433 25.5781 47.3852 25.6402C47.0291 26.1043 46.875 26.6794 46.9514 27.2594C47.0277 27.8395 47.3255 28.3552 47.7896 28.7113C48.7478 29.4465 50.1252 29.2653 50.8609 28.3069C51.0878 28.0112 51.2318 27.6645 51.2868 27.3012L47.5385 25.4635ZM52.8723 28.0788C52.7374 28.5361 52.5195 28.9687 52.2244 29.3533C50.9126 31.0641 48.4534 31.3871 46.7432 30.0749C45.9148 29.4392 45.3836 28.5191 45.2473 27.4838C45.116 26.4866 45.3672 25.4981 45.954 24.6865L41.2145 22.3626L40.8913 24.8175C40.8293 25.2879 40.3976 25.6194 39.9271 25.5573C39.4565 25.4954 39.1254 25.0637 39.1873 24.5931L39.5861 21.5641L27.2596 15.5202C27.2252 16.0127 27.1134 16.5078 26.9144 16.9885C23.1419 26.0962 23.1419 36.1275 26.9144 45.235C27.0456 45.5517 27.1384 45.8749 27.197 46.1993L29.4045 45.1522C28.971 44.6051 28.6916 43.9493 28.5981 43.2393C28.4617 42.2041 28.7368 41.1776 29.3725 40.3493C29.479 40.2105 29.5932 40.0803 29.7149 39.9586C30.3194 39.3541 31.1017 38.9668 31.9635 38.8532C32.9989 38.7169 34.0251 38.992 34.8537 39.6277C35.5974 40.1984 36.0949 41.0027 36.2898 41.8863L46.5369 37.0259L46.132 36.0484C45.9949 35.7174 46.0799 35.3499 46.3183 35.1115C46.3958 35.034 46.4895 34.9702 46.5971 34.9256C47.0355 34.7439 47.5383 34.9523 47.7199 35.3907L48.0918 36.2883L59.0323 31.099L52.8723 28.0788Z" fill="#fff"/>
<path d="M21.3733 39.3603C21.3744 39.365 21.377 39.3777 21.3779 39.3825C21.4709 39.8476 21.1693 40.2991 20.7042 40.3925C20.2398 40.4856 19.7876 40.1845 19.6928 39.7208C19.6304 39.4257 19.7276 39.1334 19.9265 38.9346C20.039 38.822 20.1841 38.7394 20.351 38.7032C20.8148 38.6023 21.2725 38.8966 21.3733 39.3603Z" fill="#fff"/>
<path d="M21.9588 41.794C22.4049 43.4245 22.9592 45.0434 23.6063 46.6057C23.788 47.0443 23.5794 47.547 23.1411 47.7285C22.7026 47.9102 22.2 47.7019 22.0184 47.2634C21.3438 45.6348 20.7661 43.9471 20.3011 42.2476C20.2167 41.939 20.3116 41.6236 20.5227 41.4125C20.6248 41.3104 20.754 41.2327 20.9031 41.1919C21.3609 41.0667 21.8336 41.3362 21.9588 41.794Z" fill="#fff"/>
<path d="M42.3514 35.4321C42.2469 35.5684 42.1326 35.6988 42.0118 35.8196C40.6313 37.2 38.4209 37.3437 36.8703 36.1538C35.1602 34.8416 34.8364 32.3828 36.1486 30.6727C36.2531 30.5363 36.3674 30.406 36.4882 30.2852C37.8686 28.9048 40.079 28.7611 41.6298 29.9511C43.3398 31.2633 43.6635 33.722 42.3514 35.4321ZM40.5835 31.3146C39.7145 30.6478 38.4764 30.7277 37.7036 31.5006C37.6356 31.5685 37.5712 31.642 37.5122 31.719C36.7769 32.6773 36.9584 34.0549 37.9166 34.7903C38.7856 35.457 40.0235 35.377 40.7964 34.6042C40.8643 34.5363 40.9288 34.4628 40.9878 34.3858C41.7229 33.4275 41.5416 32.0498 40.5835 31.3146Z" fill="#fff"/>
<path d="M34.6346 28.0315C34.53 28.1679 34.4158 28.2982 34.295 28.419C32.9145 29.7995 30.7041 29.9432 29.1534 28.7532C28.3249 28.1176 27.7937 27.1974 27.6574 26.1621C27.521 25.1269 27.796 24.1005 28.4316 23.272C28.5362 23.1358 28.6505 23.0055 28.7712 22.8848C30.1516 21.5044 32.3621 21.3606 33.9129 22.5506C35.623 23.8626 35.9466 26.3214 34.6346 28.0315ZM32.8667 23.914C31.9976 23.2472 30.7595 23.3272 29.9867 24.1C29.9188 24.1679 29.8544 24.2414 29.7954 24.3183C29.4393 24.7826 29.2852 25.3577 29.3615 25.9377C29.4378 26.5178 29.7355 27.0334 30.1998 27.3896C31.0687 28.0564 32.3068 27.9764 33.0796 27.2036C33.1475 27.1357 33.212 27.0622 33.271 26.9852C34.0062 26.0271 33.8248 24.6493 32.8667 23.914Z" fill="#fff"/>
<path d="M33.1442 34.5568L31.5224 36.6705C31.234 37.0472 30.694 37.1181 30.3175 36.8292C29.9409 36.5403 29.8699 36.0008 30.1588 35.6243L31.7806 33.5107C31.8039 33.4802 31.829 33.4517 31.8554 33.4253C32.1556 33.125 32.6394 33.0865 32.9854 33.352C33.362 33.6408 33.4331 34.1803 33.1442 34.5568Z" fill="#fff"/>
<path d="M27.7126 31.0196L28.801 32.4378C29.0899 32.8144 29.0191 33.3539 28.6424 33.6427C28.2658 33.9316 27.7264 33.8607 27.4375 33.4841L26.3492 32.0659C26.0836 31.7198 26.1221 31.2361 26.4224 30.9358C26.4489 30.9093 26.4773 30.8843 26.5078 30.861C26.8843 30.5721 27.4237 30.6431 27.7126 31.0196Z" fill="#fff"/>
</g>
<defs>
<clipPath id="clip0_0_172">
<rect width="44" height="44" fill="white" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 31.1128 62.2253)"/>
</clipPath>
</defs>
</svg>


                        </div>
                        <p className="menu_panel_text">Pizza</p>
                    </div>
                    <div className="menu_panel">
                        <div className="menu_panel_icon">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_263)">
<path d="M41.7999 6.59989H40.3333V5.13319C40.3333 3.91821 39.3482 2.93319 38.1333 2.93319H36.3865L35.3253 0.810968C35.0787 0.312358 34.5697 -0.00234463 34.0134 -0.00011025H33C32.1899 -0.00011025 31.5333 0.656538 31.5333 1.46659V2.93328H23.4666C22.2515 2.93328 21.2666 3.91821 21.2666 5.13328V6.59989H19.8C18.585 6.59989 17.6 7.58491 17.6 8.79989V10.2666C17.6 11.0766 18.2566 11.7333 19.0666 11.7333H19.1444L20.0024 19.31L16.4692 18.4799C16.291 18.2057 16.1025 17.9336 15.8928 17.6666L14.6461 12.3008C14.5691 11.969 14.2739 11.734 13.9333 11.7332H9.71957C7.73149 9.98127 5.38187 9.18927 3.60941 9.71066L2.53287 8.53735C2.12605 8.09323 1.48693 7.94722 0.927647 8.17066C0.36742 8.38653 -0.00159544 8.92553 -4.85612e-05 9.52589V41.8146C0.00158425 43.0208 0.979038 43.9983 2.18526 43.9999H38.1333C38.5061 43.9996 38.8193 43.7198 38.8615 43.3494L42.4541 11.7332H42.5333C43.3434 11.7332 44 11.0765 44 10.2665V8.79989C44 7.58491 43.015 6.59989 41.7999 6.59989ZM33 1.46659H34.0134L34.7467 2.93328H33V1.46659ZM22.7333 5.13319C22.7333 4.72817 23.0616 4.39989 23.4666 4.39989H38.1333C38.5383 4.39989 38.8666 4.72817 38.8666 5.13319V6.59989H22.7333V5.13319ZM20.68 20.9732L20.7262 20.982L21.3187 21.1227L21.7162 25.2844C20.5645 24.469 19.1864 24.0346 17.7753 24.0421C18.0469 22.7482 17.9031 21.4017 17.3646 20.1943L20.68 20.9732ZM22.1129 27.4596L22.1224 27.4677C22.388 27.7134 22.6403 27.9734 22.8777 28.2464C23.7502 29.2199 24.3917 30.3778 24.7543 31.6337C24.8783 32.0711 24.9421 32.5233 24.9443 32.9779L18.095 25.5081C19.6184 25.6787 21.0369 26.3677 22.1129 27.4596ZM14.385 18.1397V18.1382C15.9676 19.9569 16.7046 22.1415 16.3548 23.6096L8.89165 15.4733C10.3972 15.1367 12.6866 16.1941 14.385 18.1397ZM13.3466 13.1999L13.9333 15.6969C13.344 15.237 12.7017 14.8495 12.0201 14.5427C11.7429 14.0738 11.4329 13.6251 11.0924 13.1999H13.3466ZM9.66019 13.7455H9.66311C9.72395 13.8152 9.77388 13.8922 9.83249 13.9655C9.14404 13.9021 8.45087 14.0185 7.82095 14.3036L4.80618 11.016C6.28026 11.0373 8.2038 12.0742 9.66019 13.7455ZM30.737 42.1025C30.6235 42.3636 30.3661 42.5328 30.0813 42.5333H23.4666H2.18526C1.78831 42.5333 1.46656 42.2115 1.46656 41.8146L1.45333 9.53328L16.1721 25.5815V25.5852L24.8166 35.0093L24.8262 35.0203L29.568 40.1917C29.5848 40.2137 29.6024 40.2357 29.6215 40.257L30.6049 41.3291C30.7987 41.5377 30.8506 41.8413 30.737 42.1025ZM26.1976 34.3448C26.3318 33.9069 26.4 33.4513 26.4 32.9933C26.7852 33.3182 27.1442 33.673 27.4736 34.0544C27.8832 34.5225 28.2469 35.0289 28.5596 35.5666C28.9879 36.2867 29.2906 37.0742 29.455 37.8957L26.1976 34.3448ZM37.4784 42.5333H32.1361C32.4108 41.7734 32.2366 40.9238 31.6851 40.3333L30.9466 39.5266C31.0915 38.299 30.8935 37.0552 30.3746 35.9333H38.2286L37.4784 42.5333ZM38.3951 34.4666H29.5951C29.2941 33.9836 28.9568 33.5242 28.586 33.0923C27.8643 32.2546 27.0171 31.534 26.0743 30.956C25.6434 29.5974 24.931 28.3447 23.9836 27.2798C23.7636 27.0305 23.5436 26.798 23.3126 26.5743L22.7333 20.4635C22.7035 20.1509 22.4779 19.892 22.1723 19.8197L21.5226 19.6657L21.3686 18.3332H40.2292L38.3951 34.4666ZM40.3956 16.8666H21.2021L20.6213 11.7333H40.9786L40.3956 16.8666ZM42.5333 10.2666H19.0666V8.79989C19.0666 8.39487 19.3949 8.06658 19.8 8.06658H41.7999C42.205 8.06658 42.5333 8.39487 42.5333 8.79989V10.2666Z" fill="#fff"/>
<path d="M31.1006 32.2667C31.1423 32.2667 31.1834 32.2608 31.2245 32.2594C31.2355 32.2594 31.2465 32.2667 31.2575 32.2667C31.2943 32.2644 31.3308 32.2593 31.3667 32.2513C32.5147 32.1738 33.5724 31.6017 34.2655 30.6834C35.1895 29.3853 35.4536 27.7299 34.9798 26.2087C34.8778 25.8288 34.7847 25.4563 34.6945 25.0962C34.1225 22.8031 33.5762 20.6404 31.2596 20.543C31.2362 20.543 31.2142 20.5386 31.1907 20.5386C31.1672 20.5386 31.1328 20.5334 31.1005 20.5334C28.5089 20.5334 26.3998 23.1654 26.3998 26.4001C26.3998 29.6349 28.5089 32.2667 31.1006 32.2667ZM31.6682 22.11C32.4264 22.4077 32.7601 23.4014 33.2719 25.451C33.3636 25.8177 33.4589 26.202 33.5652 26.5914C33.9163 27.6723 33.7448 28.8549 33.101 29.7916C32.8673 30.0981 32.5682 30.3486 32.2254 30.5249C32.2006 29.2643 31.9524 28.0181 31.4921 26.8443C31.4188 26.6155 31.3454 26.3947 31.2809 26.1843C30.8542 24.7962 31.3542 22.9973 31.6682 22.11ZM30.0922 22.22C29.615 23.6363 29.5416 25.1577 29.8802 26.6134C29.9477 26.8334 30.0225 27.0614 30.1002 27.2983C30.4669 28.4174 30.9069 29.7704 30.7272 30.7662C29.1198 30.5154 27.8665 28.6542 27.8665 26.4C27.8666 24.453 28.8016 22.8 30.0922 22.22Z" fill="#fff"/>
<path d="M3.88139 38.563L3.36293 39.0815C3.17232 39.2657 3.09584 39.5383 3.16296 39.7947C3.23007 40.0511 3.43031 40.2514 3.68666 40.3184C3.9431 40.3855 4.21569 40.309 4.39985 40.1184L4.91831 39.6C5.19624 39.3122 5.19228 38.8548 4.90938 38.572C4.62656 38.2891 4.16911 38.2851 3.88139 38.563Z" fill="#fff"/>
<path d="M10.8929 33.6264C11.1794 33.3399 11.1794 32.8753 10.8929 32.5887C10.6064 32.3021 10.1418 32.3021 9.85518 32.5887L9.33672 33.1071C9.15135 33.2923 9.07891 33.5624 9.14663 33.8155C9.21434 34.0687 9.412 34.2664 9.66509 34.3343C9.91817 34.4022 10.1883 34.3299 10.3736 34.1447L10.8929 33.6264Z" fill="#fff"/>
<path d="M4.39994 31.7482L3.88148 32.2667C3.69087 32.4509 3.61439 32.7234 3.6815 32.9799C3.74862 33.2362 3.94885 33.4365 4.20521 33.5036C4.46164 33.5707 4.73424 33.4942 4.9184 33.3036L5.43686 32.7851C5.71478 32.4974 5.71083 32.04 5.42793 31.7572C5.1451 31.4743 4.68766 31.4703 4.39994 31.7482Z" fill="#fff"/>
<path d="M4.39994 26.6149L3.88148 27.1333C3.69087 27.3175 3.61439 27.5901 3.6815 27.8465C3.74862 28.1029 3.94885 28.3031 4.20521 28.3702C4.46164 28.4373 4.73424 28.3609 4.9184 28.1702L5.43686 27.6518C5.71478 27.3641 5.71083 26.9066 5.42793 26.6238C5.1451 26.341 4.68766 26.337 4.39994 26.6149Z" fill="#fff"/>
<path d="M11 38.563L10.4815 39.0815C10.2909 39.2657 10.2144 39.5383 10.2816 39.7947C10.3487 40.0511 10.5489 40.2514 10.8053 40.3184C11.0617 40.3855 11.3343 40.309 11.5185 40.1184L12.0369 39.6C12.3148 39.3122 12.3109 38.8548 12.028 38.572C11.7452 38.2891 11.2877 38.2851 11 38.563Z" fill="#fff"/>
<path d="M16.3481 38.5631L15.8297 39.0816C15.6391 39.2658 15.5626 39.5384 15.6297 39.7948C15.6968 40.0512 15.897 40.2515 16.1534 40.3185C16.4098 40.3856 16.6824 40.3091 16.8666 40.1185L17.385 39.6001C17.663 39.3123 17.659 38.8549 17.3761 38.5721C17.0932 38.2893 16.6358 38.2852 16.3481 38.5631Z" fill="#fff"/>
</g>
<defs>
<clipPath id="clip0_0_263">
<rect width="44" height="44" fill="white"/>
</clipPath>
</defs>
</svg>

                        </div>
                        <p className="menu_panel_text">sandwich</p>
                    </div>
                    <div className="menu_panel">
                        <div className="menu_panel_icon">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_200)">
<path d="M15.1315 13.5667H17.2563C17.8077 13.5667 18.2562 14.0152 18.2562 14.5666V16.0315C18.2562 16.3875 18.5448 16.676 18.9007 16.676C19.2567 16.676 19.5453 16.3875 19.5453 16.0315V14.5666C19.5453 13.3044 18.5184 12.2777 17.2563 12.2777H15.1315C14.5894 12.2777 14.1484 11.8366 14.1484 11.2945C14.1484 10.7524 14.5894 10.3115 15.1315 10.3115H19.843C21.0959 10.3115 22.1151 9.2922 22.1151 8.03931C22.1151 6.78643 21.0958 5.76721 19.843 5.76721H16.0738C15.7179 5.76721 15.4293 6.05579 15.4293 6.41174C15.4293 6.7677 15.7179 7.05627 16.0738 7.05627H19.843C20.3851 7.05627 20.8261 7.49731 20.8261 8.03931C20.8261 8.58141 20.385 9.02244 19.843 9.02244H15.1315C13.8786 9.02244 12.8593 10.0417 12.8593 11.2945C12.8593 12.5474 13.8786 13.5667 15.1315 13.5667Z" fill="#fff"/>
<path d="M7.38856 17.8924H9.49713C10.0415 17.8924 10.4844 18.3354 10.4844 18.8798V20.3335C10.4844 20.6895 10.773 20.978 11.1289 20.978C11.4849 20.978 11.7734 20.6895 11.7734 20.3335V18.8798C11.7734 17.6246 10.7522 16.6034 9.49713 16.6034H7.38856C6.85334 16.6034 6.41798 16.1679 6.41798 15.6328C6.41798 15.0977 6.85343 14.6622 7.38856 14.6622H9.85385C10.2098 14.6622 10.4984 14.3737 10.4984 14.0177C10.4984 13.6617 10.2098 13.3732 9.85385 13.3732H7.38856C6.14255 13.3732 5.12892 14.3868 5.12892 15.6328C5.12892 16.8788 6.14255 17.8924 7.38856 17.8924Z" fill="#fff"/>
<path d="M25.6523 26.8125C26.0083 26.8125 26.2969 26.5239 26.2969 26.168C26.2969 25.812 26.0083 25.5234 25.6523 25.5234C25.2964 25.5234 25.0078 25.812 25.0078 26.168C25.0078 26.5239 25.2964 26.8125 25.6523 26.8125Z" fill="#fff"/>
<path d="M28.832 28.2734C29.188 28.2734 29.4766 27.9849 29.4766 27.6289C29.4766 27.2729 29.188 26.9844 28.832 26.9844C28.4761 26.9844 28.1875 27.2729 28.1875 27.6289C28.1875 27.9849 28.4761 28.2734 28.832 28.2734Z" fill="#fff"/>
<path d="M30.7227 30.5078C31.0786 30.5078 31.3672 30.2192 31.3672 29.8633C31.3672 29.5073 31.0786 29.2188 30.7227 29.2188C30.3667 29.2188 30.0781 29.5073 30.0781 29.8633C30.0781 30.2192 30.3667 30.5078 30.7227 30.5078Z" fill="#fff"/>
<path d="M28.0586 25.2656C28.4146 25.2656 28.7031 24.9771 28.7031 24.6211C28.7031 24.2651 28.4146 23.9766 28.0586 23.9766C27.7026 23.9766 27.4141 24.2651 27.4141 24.6211C27.4141 24.9771 27.7026 25.2656 28.0586 25.2656Z" fill="#fff"/>
<path d="M25.9102 30.9375C26.2661 30.9375 26.5547 30.6489 26.5547 30.293C26.5547 29.937 26.2661 29.6484 25.9102 29.6484C25.5542 29.6484 25.2656 29.937 25.2656 30.293C25.2656 30.6489 25.5542 30.9375 25.9102 30.9375Z" fill="#fff"/>
<path d="M42.9114 22.8109H41.083L41.9867 20.9433C43.1331 20.715 44 19.7014 44 18.4889C44 17.2453 43.0882 16.2111 41.8981 16.0186C40.5827 13.6495 38.0131 11.8701 34.8968 11.1599V11.1107C34.8968 10.7548 34.6083 10.4662 34.2523 10.4662C33.9573 10.4662 33.7091 10.6646 33.6326 10.9351C33.2401 10.8845 32.8407 10.8517 32.4363 10.8349C32.333 10.6172 32.1116 10.4662 31.8545 10.4662C31.5973 10.4662 31.376 10.6172 31.2726 10.8349C30.8681 10.8517 30.4687 10.8845 30.0762 10.9352C29.9998 10.6647 29.7516 10.4662 29.4565 10.4662C29.1005 10.4662 28.812 10.7548 28.812 11.1107V11.1599C25.6958 11.8701 23.1261 13.6496 21.8108 16.0186C20.6207 16.2111 19.709 17.2453 19.709 18.4889C19.709 18.5615 19.7123 18.6333 19.7184 18.7043C16.7427 18.981 14.0692 20.2242 12.0633 22.0896H8.01359C7.73755 22.0896 7.4904 22.2134 7.32316 22.408H5.43039C5.12033 21.6246 4.35067 21.071 3.47342 21.071C2.31344 21.071 1.36976 22.0146 1.36976 23.1746C1.36976 23.2737 1.37758 23.3717 1.39124 23.4683C0.580851 23.7608 0 24.5375 0 25.4474C0 25.8514 0.114727 26.2398 0.325445 26.5722C0.114727 26.9047 0 27.293 0 27.697C0 28.857 0.94368 29.8007 2.10366 29.8007C2.98091 29.8007 3.75057 29.2471 4.06063 28.4636H5.76537C5.84358 28.7509 6.0592 28.988 6.35087 29.087L8.37177 29.7733C8.35974 29.9815 8.35321 30.1911 8.35321 30.4021C8.35321 30.6009 8.35888 30.7988 8.36945 30.9961C8.05346 31.0723 7.75852 31.2031 7.49607 31.3792C7.06398 31.0894 6.54491 30.9197 5.98666 30.9197C4.48791 30.9197 3.26863 32.139 3.26863 33.6378C3.26863 33.6607 3.27035 33.6833 3.27095 33.7061H2.51685C2.09129 33.7061 1.71411 33.9452 1.53244 34.3299C1.35077 34.7147 1.40585 35.1578 1.6763 35.4864L3.6098 37.8359C3.81743 38.088 4.12371 38.2327 4.45036 38.2327H31.7103C32.0663 38.2327 32.3548 37.9441 32.3548 37.5882C32.3548 37.2322 32.0663 36.9436 31.7103 36.9436H4.54498L2.94147 34.9952H42.4853L40.8818 36.9436H34.7181C34.362 36.9436 34.0735 37.2322 34.0735 37.5882C34.0735 37.9441 34.362 38.2327 34.7181 38.2327H40.9764C41.3031 38.2327 41.6095 38.088 41.8169 37.8358L43.7504 35.4865C44.0207 35.1578 44.0759 34.7147 43.8942 34.3299C43.7126 33.9451 43.3354 33.7061 42.9099 33.7061H42.2716C42.905 32.61 43.143 31.311 42.9119 30.0346C42.8639 29.7702 42.657 29.5631 42.3925 29.5153C40.6466 29.1992 38.857 29.758 37.6048 31.0101C37.5283 31.0865 37.4554 31.1658 37.3842 31.2462C37.0148 31.0462 36.594 30.9301 36.1474 30.9214V29.695H36.835C37.925 29.695 38.8117 28.8083 38.8117 27.7183V26.8531H42.9114C43.5116 26.8531 44 26.3647 44 25.7645V23.8995C44 23.2992 43.5116 22.8109 42.9114 22.8109ZM6.29054 33.7062H4.56002C4.5589 33.6835 4.5577 33.6608 4.5577 33.6379C4.5577 32.8499 5.1987 32.2089 5.98666 32.2089C6.21079 32.2089 6.42254 32.2614 6.61126 32.354C6.40535 32.7365 6.28813 33.1737 6.28813 33.6379C6.28822 33.6608 6.28994 33.6833 6.29054 33.7062ZM38.5163 31.9216C39.3595 31.0786 40.5223 30.6483 41.7005 30.7267C41.7727 31.812 41.412 32.8847 40.6953 33.7062H39.6325L40.5131 32.8256C40.7648 32.5739 40.7648 32.1658 40.5131 31.9141C40.2613 31.6624 39.8533 31.6624 39.6015 31.9141L38.6882 32.8275C38.6075 32.5698 38.4893 32.3286 38.3402 32.1101C38.3969 32.0456 38.4553 31.9826 38.5163 31.9216ZM25.5032 13.9422C26.4787 13.2886 27.6054 12.7984 28.812 12.4901V13.1534C28.812 13.5093 29.1005 13.7979 29.4565 13.7979C29.8126 13.7979 30.1011 13.5093 30.1011 13.1534V12.2345C30.4665 12.1825 30.8368 12.1482 31.2099 12.129V13.1534C31.2099 13.5093 31.4984 13.7979 31.8545 13.7979C32.2105 13.7979 32.499 13.5093 32.499 13.1534V12.129C32.8721 12.1482 33.2424 12.1826 33.6077 12.2345V13.1534C33.6077 13.5093 33.8962 13.7979 34.2523 13.7979C34.6083 13.7979 34.8968 13.5093 34.8968 13.1534V12.4901C36.1035 12.7984 37.2302 13.2886 38.2057 13.9423C39.1561 14.579 39.9304 15.3479 40.4945 16.1982C40.2768 16.294 40.0729 16.42 39.89 16.5732C39.4452 16.2005 38.8773 15.9861 38.2829 15.9861C37.6885 15.9861 37.1205 16.2005 36.6758 16.5732C36.231 16.2005 35.663 15.9861 35.0687 15.9861C34.4743 15.9861 33.9063 16.2005 33.4616 16.5732C33.0168 16.2005 32.4488 15.9861 31.8545 15.9861C31.26 15.9861 30.6921 16.2005 30.2473 16.5732C29.8025 16.2005 29.2346 15.9861 28.6402 15.9861C28.0458 15.9861 27.4778 16.2005 27.0331 16.5732C26.5884 16.2005 26.0204 15.9861 25.426 15.9861C24.8316 15.9861 24.2637 16.2005 23.8189 16.5732C23.6361 16.42 23.4321 16.294 23.2144 16.1982C23.7785 15.3478 24.5528 14.5789 25.5032 13.9422ZM22.2117 17.2751C22.642 17.2751 23.0441 17.5077 23.2612 17.8822C23.3765 18.0809 23.5889 18.2034 23.8188 18.2034C24.0486 18.2034 24.261 18.081 24.3763 17.8823C24.5935 17.5077 24.9957 17.2751 25.4259 17.2751C25.8562 17.2751 26.2584 17.5077 26.4755 17.8822C26.5908 18.0809 26.8031 18.2034 27.033 18.2034C27.2629 18.2034 27.4752 18.081 27.5906 17.8822C27.8077 17.5077 28.2098 17.2751 28.6401 17.2751C29.0703 17.2751 29.4725 17.5077 29.6898 17.8823C29.8051 18.081 30.0175 18.2034 30.2472 18.2034C30.4771 18.2034 30.6895 18.081 30.8048 17.8822C31.0219 17.5077 31.4241 17.2751 31.8544 17.2751C32.2846 17.2751 32.6868 17.5077 32.904 17.8823C33.0192 18.081 33.2317 18.2034 33.4615 18.2034C33.6914 18.2034 33.9037 18.081 34.019 17.8822C34.2361 17.5077 34.6383 17.2751 35.0686 17.2751C35.4988 17.2751 35.901 17.5077 36.1182 17.8823C36.2336 18.081 36.4459 18.2034 36.6757 18.2034C36.9056 18.2034 37.118 18.081 37.2333 17.8822C37.4504 17.5077 37.8525 17.2751 38.2828 17.2751C38.713 17.2751 39.1152 17.5077 39.3325 17.8823C39.4477 18.081 39.6602 18.2034 39.89 18.2034C40.1198 18.2034 40.3322 18.081 40.4475 17.8822C40.6646 17.5077 41.0668 17.2751 41.4971 17.2751C42.1663 17.2751 42.7108 17.8195 42.7108 18.4888C42.7108 19.1581 42.1663 19.7025 41.4971 19.7025C41.0668 19.7025 40.6646 19.4699 40.4475 19.0954C40.3322 18.8967 40.1198 18.7742 39.89 18.7742C39.6602 18.7742 39.4477 18.8966 39.3325 19.0953C39.1152 19.4699 38.713 19.7025 38.2828 19.7025C37.8525 19.7025 37.4504 19.4699 37.2333 19.0954C37.118 18.8967 36.9056 18.7742 36.6757 18.7742C36.4459 18.7742 36.2335 18.8966 36.1182 19.0953C35.901 19.4699 35.4988 19.7025 35.0686 19.7025C34.6383 19.7025 34.2361 19.4699 34.019 19.0954C33.9037 18.8967 33.6914 18.7742 33.4615 18.7742C33.2317 18.7742 33.0192 18.8966 32.904 19.0953C32.6868 19.4699 32.2846 19.7025 31.8544 19.7025C31.4241 19.7025 31.0219 19.4699 30.8048 19.0954C30.6895 18.8967 30.4771 18.7742 30.2472 18.7742C30.0175 18.7742 29.805 18.8966 29.6898 19.0953C29.4725 19.4699 29.0703 19.7025 28.6401 19.7025C28.2098 19.7025 27.8077 19.4699 27.5906 19.0954C27.4752 18.8967 27.2629 18.7742 27.033 18.7742C26.8031 18.7742 26.5908 18.8966 26.4755 19.0954C26.3486 19.3142 26.1583 19.4841 25.9363 19.5879C24.4222 18.9847 22.7569 18.6492 21.0094 18.6458C21.0026 18.5943 20.998 18.5422 20.998 18.4888C20.998 17.8195 21.5424 17.2751 22.2117 17.2751ZM8.39163 23.3786H10.8635C10.6095 23.6949 10.3712 24.0227 10.1518 24.3624H8.39163V23.3786ZM5.7328 27.1746H3.5567C3.22145 27.1746 2.94216 27.4316 2.9144 27.7657C2.87968 28.184 2.52355 28.5116 2.10375 28.5116C1.65455 28.5116 1.28915 28.1462 1.28915 27.697C1.28915 27.4535 1.397 27.2244 1.58512 27.0688C1.7331 26.9463 1.81878 26.7643 1.81878 26.5722C1.81878 26.38 1.7331 26.198 1.58512 26.0755C1.397 25.9199 1.28915 25.691 1.28915 25.4473C1.28915 24.9981 1.65455 24.6327 2.10375 24.6327C2.52355 24.6327 2.87968 24.9603 2.9144 25.3786C2.94216 25.7127 3.22145 25.9697 3.5567 25.9697H5.73289V27.1746H5.7328ZM5.95332 24.6808H4.06063C3.82362 24.082 3.31779 23.6184 2.70093 23.4327C2.67343 23.3505 2.65873 23.2635 2.65873 23.1745C2.65873 22.7253 3.02414 22.3599 3.47334 22.3599C3.89314 22.3599 4.24927 22.6876 4.28407 23.1058C4.31183 23.4399 4.59113 23.697 4.92637 23.697H7.10256V24.3624H6.64383C6.3678 24.3624 6.12055 24.4863 5.95332 24.6808ZM10.433 33.7062H7.5796C7.57848 33.6835 7.57728 33.6608 7.57728 33.6379C7.57728 32.8499 8.21829 32.2089 9.00625 32.2089C9.79421 32.2089 10.4352 32.8499 10.4352 33.6379C10.4353 33.6608 10.434 33.6835 10.433 33.7062ZM30.3116 33.7062H28.0679C28.0668 33.6835 28.0656 33.6608 28.0656 33.6379C28.0656 32.8499 28.7066 32.2089 29.4946 32.2089C29.8885 32.2089 30.2459 32.3692 30.5046 32.6279C30.3791 32.9404 30.3093 33.281 30.3093 33.6379C30.3092 33.6608 30.311 33.6833 30.3116 33.7062ZM29.4946 30.9197C27.9959 30.9197 26.7765 32.139 26.7765 33.6378C26.7765 33.6607 26.7782 33.6833 26.7788 33.7061H11.722C11.7226 33.6832 11.7244 33.6607 11.7244 33.6378C11.7244 32.3649 10.8446 31.294 9.66135 31C9.64915 30.8017 9.64227 30.6024 9.64227 30.4021C9.64227 30.3364 9.64322 30.2709 9.64451 30.2054L16.2366 32.4439C16.6807 32.5948 17.1349 32.6691 17.5847 32.6691C18.4345 32.6691 19.2687 32.4037 19.9891 31.8877C21.0906 31.0983 21.7223 29.8685 21.7223 28.5133C21.7223 28.0288 21.6392 27.5535 21.4753 27.1005C21.3541 26.7658 20.9846 26.5927 20.6498 26.7139C20.3151 26.835 20.142 27.2046 20.2632 27.5393C20.3761 27.8512 20.4334 28.1789 20.4334 28.5132C20.4334 29.4475 19.9978 30.2955 19.2383 30.8396C18.479 31.3838 17.5359 31.5235 16.6512 31.2232L7.02195 27.9534V25.6514H17.5715C17.8948 25.6514 18.2133 25.7056 18.5182 25.8125C18.8543 25.9304 19.222 25.7534 19.3397 25.4173C19.4575 25.0813 19.2805 24.7137 18.9446 24.5959C18.5023 24.4409 18.0403 24.3623 17.5715 24.3623H11.7273C13.7835 21.6855 17.1654 19.9344 20.9831 19.9344C27.2364 19.9344 32.3238 24.6302 32.3238 30.4021C32.3238 30.6083 32.3166 30.8135 32.3036 31.0178C31.9142 31.1257 31.5596 31.3183 31.2609 31.5745C30.7855 31.1668 30.1685 30.9197 29.4946 30.9197ZM34.454 33.7062H31.6006C31.5995 33.6835 31.5983 33.6608 31.5983 33.6379C31.5983 32.8499 32.2393 32.2089 33.0272 32.2089C33.8152 32.2089 34.4563 32.8499 34.4563 33.6379C34.4563 33.6608 34.4551 33.6835 34.454 33.7062ZM34.8583 31.2197C34.7555 31.2725 34.6558 31.3304 34.5611 31.3954C34.2745 31.1988 33.9482 31.0568 33.5974 30.9815C33.6073 30.7892 33.6128 30.5961 33.6128 30.4022C33.6128 30.1646 33.6029 29.9292 33.5878 29.695H34.8583V31.2197ZM37.5226 33.6378C37.5226 33.6607 37.5214 33.6834 37.5203 33.7061H35.743C35.7436 33.6832 35.7454 33.6607 35.7454 33.6378C35.7454 33.181 35.6316 32.7505 35.4317 32.3723C35.6296 32.2679 35.8547 32.2088 36.0937 32.2088C36.8816 32.2088 37.5226 32.8498 37.5226 33.6378ZM37.5226 27.7184C37.5226 28.0976 37.2142 28.406 36.835 28.406H33.4281C33.33 27.8757 33.1959 27.3568 33.0241 26.8531H37.5226V27.7184ZM42.7109 25.564H32.4932C32.2456 25.0557 31.9601 24.5668 31.6404 24.0999H34.375C34.731 24.0999 35.0195 23.8113 35.0195 23.4554C35.0195 23.0994 34.731 22.8109 34.375 22.8109H30.6187C30.0022 22.1339 29.3059 21.5221 28.5421 20.9893C28.5747 20.9906 28.6074 20.9916 28.6401 20.9916C29.2345 20.9916 29.8024 20.7771 30.2472 20.4044C30.692 20.7771 31.26 20.9916 31.8544 20.9916C32.4487 20.9916 33.0167 20.7771 33.4615 20.4044C33.9062 20.7771 34.4743 20.9916 35.0686 20.9916C35.6629 20.9916 36.2309 20.7771 36.6757 20.4044C37.1204 20.7771 37.6885 20.9916 38.2828 20.9916C38.8772 20.9916 39.4451 20.7771 39.89 20.4044C40.105 20.5846 40.3489 20.7274 40.6106 20.8272L39.6508 22.8109H37.3828C37.0268 22.8109 36.7383 23.0994 36.7383 23.4554C36.7383 23.8113 37.0268 24.0999 37.3828 24.0999H42.7109V25.564Z" fill="#fff"/>
</g>
<defs>
<clipPath id="clip0_0_200">
<rect width="44" height="44" fill="white"/>
</clipPath>
</defs>
</svg>


                        </div>
                        <p className="menu_panel_text">Asian Food</p>
                    </div>
                    <div className="menu_panel">
                        <div className="menu_panel_icon">
                        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_228)">
<path d="M31.158 15.5309L30.6872 13.9994C30.0892 12.2596 28.1775 11.3285 26.4173 11.9196C25.4271 12.2521 24.6495 13.0207 24.3131 13.9994L23.8423 15.5309C23.4461 16.8226 23.363 18.1882 23.5996 19.5174C23.8154 20.6366 24.5342 21.5981 25.5532 22.1304L25.0259 33.7805C24.9553 34.4308 25.1687 35.0799 25.6126 35.565C26.5671 36.597 28.1874 36.6688 29.2315 35.7253C29.2879 35.6743 29.342 35.6208 29.3936 35.565C29.8276 35.0937 30.0406 34.4636 29.9803 33.8291L29.4501 22.129C30.4677 21.5963 31.1853 20.6355 31.4008 19.5174C31.6373 18.1882 31.5542 16.8226 31.158 15.5309ZM29.9561 19.2652C29.7973 20.0692 29.2176 20.7289 28.4344 20.9968C28.1372 21.1073 27.9457 21.3943 27.96 21.7079L28.5173 33.9436C28.543 34.1836 28.4628 34.4229 28.2973 34.6003C27.8557 35.0324 27.1446 35.0324 26.703 34.6003C26.5292 34.4086 26.4503 34.1505 26.4874 33.8958L27.0404 21.7079C27.0547 21.3943 26.8632 21.1073 26.5659 20.9968C25.7827 20.7289 25.203 20.0692 25.0442 19.2652C24.8481 18.1617 24.9172 17.028 25.2459 15.9557L25.7167 14.4234C26.081 13.4499 27.1747 12.9525 28.1598 13.3126C28.6806 13.503 29.091 13.9088 29.2836 14.4234L29.7544 15.9557C30.0828 17.028 30.1519 18.1617 29.9561 19.2652Z" fill="#fff"/>
<path d="M19.8 11.7458C19.395 11.7458 19.0667 12.0704 19.0667 12.4707V18.694L17.0815 20.6561C16.9347 20.8007 16.8566 21.0001 16.8667 21.2048L17.5083 33.8892C17.5236 34.1627 17.4232 34.4303 17.2311 34.6278C16.8297 35.0281 16.176 35.031 15.7709 34.6341C15.7687 34.632 15.7666 34.6299 15.7645 34.6278C15.5723 34.4303 15.472 34.1627 15.4873 33.8892L16.1333 21.2048C16.1436 21.0002 16.0658 20.8009 15.9192 20.6561L13.9333 18.694V12.4707C13.9333 12.0704 13.605 11.7458 13.2 11.7458C12.795 11.7458 12.4667 12.0704 12.4667 12.4707V18.9941C12.4667 19.1863 12.544 19.3706 12.6815 19.5065L14.6513 21.4541L14.0257 33.8189C13.9592 35.1695 15.013 36.3178 16.3795 36.3836C17.7459 36.4494 18.9077 35.4078 18.9743 34.0572C18.9782 33.9778 18.9782 33.8983 18.9743 33.819L18.3487 21.4542L20.3185 19.5066C20.456 19.3707 20.5333 19.1864 20.5333 18.9942V12.4708C20.5333 12.0704 20.205 11.7458 19.8 11.7458Z" fill="#fff"/>
<path d="M15.4 11.7458C14.995 11.7458 14.6667 12.0704 14.6667 12.4707V18.2693C14.6667 18.6695 14.995 18.9941 15.4 18.9941C15.805 18.9941 16.1333 18.6695 16.1333 18.2693V12.4707C16.1333 12.0704 15.805 11.7458 15.4 11.7458Z" fill="#fff"/>
<path d="M17.6 11.7458C17.195 11.7458 16.8667 12.0704 16.8667 12.4707V18.2693C16.8667 18.6695 17.195 18.9941 17.6 18.9941C18.005 18.9941 18.3333 18.6695 18.3333 18.2693V12.4707C18.3333 12.0704 18.005 11.7458 17.6 11.7458Z" fill="#fff"/>
<path d="M22 0.873535C9.84977 0.873535 0 10.609 0 22.6182C0 34.6275 9.84977 44.3629 22 44.3629C34.1502 44.3629 44 34.6275 44 22.6182C43.9863 10.6146 34.1446 0.887126 22 0.873535ZM22 42.9133C10.6597 42.9133 1.46667 33.8269 1.46667 22.6182C1.46667 11.4096 10.6597 2.32318 22 2.32318C33.3403 2.32318 42.5333 11.4096 42.5333 22.6182C42.5204 33.8215 33.3349 42.9005 22 42.9133Z" fill="#fff"/>
<path d="M24.3804 36.2246C24.3411 35.826 23.9824 35.5344 23.5792 35.5733C23.5698 35.5742 23.5604 35.5753 23.5509 35.5766L23.5539 35.5758C22.5214 35.6944 21.4784 35.6944 20.446 35.5758C20.0436 35.5292 19.6792 35.8139 19.632 36.2118C19.5848 36.6098 19.8727 36.9701 20.2751 37.0168C21.4201 37.1491 22.5768 37.1491 23.7218 37.0168C24.1248 36.978 24.4197 36.6233 24.3804 36.2246Z" fill="#fff"/>
<path d="M33.2202 13.2781C32.9599 12.9714 32.4974 12.9313 32.1871 13.1886C32.1861 13.1894 32.1851 13.1903 32.184 13.1911C31.8744 13.4491 31.835 13.9063 32.096 14.2124C36.5175 19.4003 36.1793 27.0716 31.3179 31.8597C31.031 32.1423 31.0302 32.6013 31.3161 32.8849C31.602 33.1685 32.0665 33.1693 32.3534 32.8867C37.756 27.5672 38.1327 19.0431 33.2202 13.2781Z" fill="#fff"/>
<path d="M17.0859 10.4551C17.0854 10.4551 17.085 10.4541 17.0845 10.4541C17.0838 10.4541 17.083 10.4551 17.0822 10.4551H17.0859Z" fill="#fff"/>
<path d="M25.4592 8.52689C22.5932 7.848 19.5874 8.03048 16.8271 9.05094C16.4479 9.19182 16.2563 9.60987 16.3988 9.98451C16.5062 10.2669 16.7794 10.4538 17.0846 10.4541C17.1723 10.4536 17.2592 10.4378 17.3411 10.4071C19.827 9.48828 22.5337 9.3242 25.1145 9.93595C25.5082 10.03 25.9045 9.79089 25.9996 9.40175C26.0948 9.01261 25.8529 8.62094 25.4592 8.52689Z" fill="#fff"/>
<path d="M12.6492 31.8234C10.1771 29.3841 8.79151 26.0709 8.79994 22.6182C8.7927 19.8597 9.67674 17.1709 11.3233 14.9437C11.5667 14.6237 11.5015 14.1694 11.1778 13.9288C10.854 13.6883 10.3943 13.7527 10.1509 14.0727C10.1466 14.0784 10.1424 14.0841 10.1383 14.0899C5.89842 19.8512 6.5223 27.8035 11.6101 32.8498C11.8968 33.1334 12.3619 33.1335 12.6488 32.8501C12.9358 32.5667 12.9359 32.107 12.6492 31.8234Z" fill="#fff"/>
</g>
<defs>
<clipPath id="clip0_0_228">
<rect width="44" height="43.4894" fill="white" transform="translate(0 0.873535)"/>
</clipPath>
</defs>
</svg>


                        </div>
                        <p className="menu_panel_text">Set Menu</p>
                    </div>
                    </div>
                    <div className="menu_items">
                        {
                            menuItem.map((item, key) => (
                                <Menuitem key={key} img={item.img} name={item.name} price={item.price}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu