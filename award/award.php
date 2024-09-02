<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awards</title>
    <?php include('../header/header-link.php');?>
</head>
<body>
<div class="main_area award">
    <?php include('../header/header.php');?>
    <?php include('../popup/popup.php');?>
    <section class="breadcomb-area">
        <div class="container">
            <h2>Awards</h2>
        </div>
    </section>
    <section class="award-area">
        <article>
            <section class="card">
                <div class="text-content">
                <h3>Piles, and Fistula Award</h3>
                <p>Awarded by Times group in Feb 2020 at Hyatt Mumbai for Revolutionary Laser treatment for Piles, and Fistula.</p>  

                <span class="awards-date">Feb 2020</span>  
                <!-- <a href="#">Join now</a> -->
                </div>
                <div class="visual">
                <img src="https://www.pilesclinicmumbai.in/images/awards/awad1.jpeg" alt="" />
                </div>
            </section> 

            <section class="card">
                <div class="text-content">
                <h3>Proctology</h3>
                <p>Received the award for Iconic Centre for Proctology from the hands of Shri Devendra Fadnavis ji at an event organised by Midday at Mumbai in December 2020.</p>  
                <span class="awards-date">December 2020</span>  
                <!-- <a href="#">Join now</a> -->
                </div>
                <div class="visual">
                <img src="https://www.pilesclinicmumbai.in/images/awards/awa.jpeg" alt="" />
                </div>
            </section> 
        </article>
    </section>

    <section>
        <div class="gallery">
            <div class="gallery-item" onclick="openModal(0)">
                <img src="https://www.pilesclinicmumbai.in/images/awards/2-1.jpg" alt="Venice Italie">
            </div>
            <div class="gallery-item" onclick="openModal(1)">
                <img src="https://www.pilesclinicmumbai.in/images/awards/4-1.jpg" alt="Venice Italie">
            </div>
            <div class="gallery-item" onclick="openModal(2)">
                <img src="https://www.pilesclinicmumbai.in/images/awards/6-1.jpg" alt="France">
            </div>
            <div class="gallery-item" onclick="openModal(3)">
                <img src="https://www.pilesclinicmumbai.in/images/awards/3-1.jpg" alt="Street View">
            </div>
            <div class="gallery-item" onclick="openModal(4)">
                <img src="https://www.pilesclinicmumbai.in/images/awards/5-1.jpg" alt="Provence">
            </div>
            <div class="gallery-item" onclick="openModal(5)">
                <img src="https://www.pilesclinicmumbai.in/images/awards/1-2.jpg" alt="Harbor by night ">
            </div>
        </div>
    </section>
    <!-- awards modal of gallery view starts -->
    <div class="award-modal">
        <div id="modal" class="modal">
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="modal-content">
                <div class="modal-left">
                    <img id="modal-img" src="" alt="Modal Image">
                </div>
                <div class="modal-right">
                    <!-- <p id="modal-text"></p> -->
                    <!-- <button class="nav-btn" onclick="prevImage()">&#9664;</button>
                    <button class="nav-btn" onclick="nextImage()">&#9654;</button> -->
                </div>
            </div>
        
        </div>
    </div>
    <!-- awards modal of gallery view ends -->
    <?php include('../footer/footer.php');?>
</div>

<?php include('../footer/footer-link.php');?>
    
</body>
</html>