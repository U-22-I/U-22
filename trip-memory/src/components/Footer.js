import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    <footer class="footer">
        <div class="lg-flex md-justify-between">
            <div>
                <h1 style={{ color: '#000' }} className='footer_a' class="footer__logo">
                    Trip Memory
                </h1>
                <address class="footer__address">
                    株式会社trip<br />
                    〒xxx-xxxx 愛知県名古屋市中村区名駅４丁目２７−１<br />
                    TEL：<a className='footer_a' href="tel:">xxxx-xxx-xxx</a> / FAX：xxxx-xxx-xxx<br />
                </address>
            </div>
            <div class="grid">
                <div className='footer_navi'>
                    <p class="footer__navi-heading">FOLLOW US</p>
                    <ul class="footer__navi">
                        <li><a className='footer_a' href="#">Facebook</a></li>
                        <li><a className='footer_a' href="#">Twitter</a></li>
                        <li><a className='footer_a' href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className='footer_navi'>
                    <p class="footer__navi-heading">NAVIGATION</p>
                    <ul class="footer__navi">
                        <li><a className='footer_a' href="/top">マップ</a></li>
                        <li><a className='footer_a' href="/mission">ミッション</a></li>
                        <li><a className='footer_a' href="/mypage">マイページ</a></li>
                        <li><a className='footer_a' href="/inquiry">お問い合わせ</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <p class="copyright">
            © 2023 Trip-Memory All Rights Reserved.
        </p>
    </footer>
    </>
  )
}

export default Footer