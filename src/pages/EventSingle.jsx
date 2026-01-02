import React from 'react';
import { Link } from 'react-router-dom';
import ShopHero from '../components/Shop/ShopHero';
import { sidebarWidgets } from '../data/blogData';
import './EventSingle.css';

const EventSingle = () => {
    return (
        <div className="event-single-page">
            <ShopHero title="POWER LIFTING" />

            <div className="container">
                <div className="event-layout">
                    {/* Main Content */}
                    <div className="event-main">
                        <div className="event-featured-image">
                            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" alt="Power Lifting" />
                            <div className="event-date-badge">
                                <span className="day">22</span>
                                <span className="month">JUN</span>
                            </div>
                        </div>

                        <div className="event-header-info">
                            <h1 className="event-title">POWER LIFTING</h1>
                            <div className="event-meta">
                                <span><i className="far fa-clock"></i> 11.00 - 13.00</span>
                                <span><i className="fas fa-map-marker-alt"></i> 251 PURPLE SUNSET AVENUE</span>
                            </div>
                            <p className="event-description">
                                Sollicitudin vitae purus cum metus condimentum vel netus turpis interdum ac sem non. Pulvinar ipsum. Proin mi lectus suspendisse viverra ac potenti elit hendrerit vel pellentesque parturient mus vulputate ante urna. Purus viverra in mattis pulvinar urna ultrices mus interdum primis condimentum habitant primis. Odio sapien cum habitant mattis mus urna. Leo vel iaculis non nisl natoque. Imperdiet eu primis litora litora primis primis mus primis natoque ultrices ridiculus lectus sem.
                            </p>
                        </div>

                        <div className="event-schedule-section">
                            <h2 className="section-title">EVENT SCHEDULE</h2>
                            <div className="schedule-grid">
                                <div className="schedule-item">
                                    <h3 className="schedule-time">18.00 - 20.00</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus, urna quis placerat porta.</p>
                                </div>
                                <div className="schedule-item">
                                    <h3 className="schedule-time">19.00 - 20.00</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus, urna quis placerat porta.</p>
                                </div>
                                <div className="schedule-item">
                                    <h3 className="schedule-time">20.00 - 21.00</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus, urna quis placerat porta.</p>
                                </div>
                            </div>
                        </div>

                        <p className="extra-text">
                            At imperdiet litora parturient mi. Nec litora congue primis litora habitant primis litora. Leo nisl natoque primis nec nisl sem parturient mi litora primis litora habitant primis litora. Leo nisl natoque primis nec nisl sem parturient mi litora primis litora habitant primis litora. Leo nisl natoque primis nec nisl sem parturient mi litora primis litora habitant primis litora. Leo nisl natoque primis nec nisl sem parturient mi litora primis litora habitant primis litora. Leo nisl natoque primis nec nisl sem.
                        </p>

                        <div className="event-instructors-section">
                            <h2 className="section-title">JOIN IN FOR A FREE WORKOUT</h2>
                            <div className="instructors-grid">
                                <div className="instructor-card">
                                    <div className="instructor-img">
                                        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" alt="Instructor 1" />
                                        <div className="social-share">
                                            <i className="fas fa-share-alt"></i>
                                        </div>
                                    </div>
                                    <div className="instructor-name-vertical">
                                        <span>MATIE SIMMS JUNIOR</span>
                                    </div>
                                </div>
                                <div className="instructor-card">
                                    <div className="instructor-img">
                                        <img src="https://images.unsplash.com/photo-1534367955176-637d9aed21ad?w=600&q=80" alt="Instructor 2" />
                                        <div className="social-share">
                                            <i className="fas fa-share-alt"></i>
                                        </div>
                                    </div>
                                    <div className="instructor-name-vertical">
                                        <span>MADISON FRONING</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="event-expect-section">
                            <h2 className="section-title">WHAT TO EXPECT FROM THE CLASS</h2>
                            <p className="expect-desc">
                                Sollicitudin vitae purus cum metus condimentum vel netus turpis interdum ac sem non. Pulvinar ipsum. Proin mi lectus suspendisse viverra ac potenti elit hendrerit vel pellentesque parturient mus vulputate ante urna. Purus viverra in mattis pulvinar urna ultrices mus interdum primis condimentum habitant primis.
                            </p>
                            <div className="expect-grid">
                                <ul className="expect-list">
                                    <li><i className="fas fa-check"></i> Free T-shirt</li>
                                    <li><i className="fas fa-check"></i> Beverage from our juice bar</li>
                                    <li><i className="fas fa-check"></i> Shower</li>
                                    <li><i className="fas fa-check"></i> Poly Heart Rating</li>
                                </ul>
                                <form className="event-signup-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-row">
                                        <input type="text" placeholder="Your Name" />
                                        <input type="email" placeholder="Email address" />
                                    </div>
                                    <textarea placeholder="Message"></textarea>
                                    <button type="submit" className="confirm-btn">CONFIRM <span>↗</span></button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="blog-sidebar">
                        <div className="widget author-widget">
                            <div className="author-img-frame">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Author" />
                            </div>
                            <h3>MARK RIDDER</h3>
                            <p>Gym instructor and health enthusiast, focused on bringing the best out of people.</p>
                        </div>

                        <div className="widget search-widget">
                            <div className="search-box">
                                <input type="text" placeholder="Search..." />
                                <button><i className="fas fa-search"></i></button>
                            </div>
                        </div>

                        <div className="widget categories-widget">
                            <h3>CATEGORIES</h3>
                            <ul>
                                {sidebarWidgets.categories.map(cat => (
                                    <li key={cat.name}>
                                        <Link to="#">{cat.name}</Link>
                                        <span>({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="widget recent-posts-widget">
                            <h3>SIMILAR HEADS</h3>
                            <div className="recent-posts-list">
                                {sidebarWidgets.recentPosts.map(post => (
                                    <div key={post.id} className="recent-post-item">
                                        <img src={post.image} alt={post.title} />
                                        <Link to="#">{post.title}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="widget tags-widget">
                            <h3>TAGS</h3>
                            <div className="tags-cloud">
                                {sidebarWidgets.tags.map(tag => (
                                    <Link key={tag} to="#" className="tag-link">{tag}</Link>
                                ))}
                            </div>
                        </div>

                        <div className="widget instagram-widget">
                            <h3>OUR INSTAGRAM</h3>
                            <div className="insta-placeholder">
                                <div className="placeholder-text">INSTAGRAM FEED</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default EventSingle;
