import React from "react";
import book_img from "../assets/steal like an artist.png";
import "remixicon/fonts/remixicon.css";

const BuyCard = () => {
  return (
    <div className="buy-container">
      <div className="book-card">
        <div class="card">
          <div class="card-img">
            <img src={book_img} alt="bookImages" />
          </div>
          <div class="card-info">
            <p class="text-title">Steal like an artist</p>
            <p class="text-body">Great book to see the world in new way</p>
          </div>
          <div class="card-footer">
            <span class="text-title">$4</span>
            <div class="card-button">
              <i class="ri-heart-fill"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src={book_img} alt="bookImages" />
          </div>
          <div class="card-info">
            <p class="text-title">Steal like an artist</p>
            <p class="text-body">Great book to see the world in new way</p>
          </div>
          <div class="card-footer">
            <span class="text-title">$4</span>
            <div class="card-button">
              <i class="ri-heart-fill"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src={book_img} alt="bookImages" />
          </div>
          <div class="card-info">
            <p class="text-title">Steal like an artist</p>
            <p class="text-body">Great book to see the world in new way</p>
          </div>
          <div class="card-footer">
            <span class="text-title">$4</span>
            <div class="card-button">
              <i class="ri-heart-fill"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src={book_img} alt="bookImages" />
          </div>
          <div class="card-info">
            <p class="text-title">Steal like an artist</p>
            <p class="text-body">Great book to see the world in new way</p>
          </div>
          <div class="card-footer">
            <span class="text-title">$4</span>
            <div class="card-button">
              <i class="ri-heart-fill"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src={book_img} alt="bookImages" />
          </div>
          <div class="card-info">
            <p class="text-title">Steal like an artist</p>
            <p class="text-body">Great book to see the world in new way</p>
          </div>
          <div class="card-footer">
            <span class="text-title">$4</span>
            <div class="card-button">
              <i class="ri-heart-fill"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src={book_img} alt="bookImages" />
          </div>
          <div class="card-info">
            <p class="text-title">Steal like an artist</p>
            <p class="text-body">Great book to see the world in new way</p>
          </div>
          <div class="card-footer">
            <span class="text-title">$4</span>
            <div class="card-button">
              <i class="ri-heart-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
