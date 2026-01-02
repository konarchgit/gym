import React from 'react';
import { Link } from 'react-router-dom';
import ShopHero from '../components/Shop/ShopHero';
import { blogPosts, sidebarWidgets } from '../data/blogData';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-page">
            <ShopHero title="BLOG STANDARD" />

            <div className="container">
                <div className="blog-layout">
                    {/* Main Content */}
                    <div className="blog-main">
                        {blogPosts.map((post, index) => (
                            <React.Fragment key={post.id}>
                                <article className="blog-post">
                                    <div className="post-thumbnail">
                                        <img src={post.image} alt={post.title} />
                                        <div className="post-date-badge">
                                            <span className="day">{post.date.split(' ')[0]}</span>
                                            <span className="month">{post.date.split(' ')[1]}</span>
                                        </div>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span>By {post.author}</span>
                                            <span>/</span>
                                            <span>{post.category}</span>
                                            <span>/</span>
                                            <span>{post.comments} Comments</span>
                                        </div>
                                        <h2 className="post-title">
                                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                        </h2>
                                        <p className="post-excerpt">{post.excerpt}</p>
                                        <Link to={`/blog/${post.id}`} className="read-more">
                                            READ MORE <span>↗</span>
                                        </Link>
                                    </div>
                                </article>

                                {/* Insert Quote after the first post */}
                                {index === 0 && (
                                    <div className="blog-quote-banner">
                                        <div className="quote-icon">
                                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                                <path d="M3 21l1-9h-3v-9h10v9l-1 9h-7zm10 0l1-9h-3v-9h10v9l-1 9h-7z" />
                                            </svg>
                                        </div>
                                        <h3>"WHAT AN AMAZING TRAINING CLASS! EXCELLENT MENTOR, GREAT CREW"</h3>
                                        <span className="quote-author">MAYIN SIMMS JUNIOR</span>
                                    </div>
                                )}

                                {/* Video content for the last post as per screenshot */}
                                {post.video && (
                                    <div className="post-video-container">
                                        <iframe
                                            src={post.video}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}

                        {/* Pagination */}
                        <div className="pagination">
                            <span className="page-number active">1</span>
                            <span className="page-number">2</span>
                            <span className="page-number"><span>→</span></span>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="blog-sidebar">
                        {/* Author Widget */}
                        <div className="widget author-widget">
                            <div className="author-img-frame">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Author" />
                            </div>
                            <h3>MARK RIDDER</h3>
                            <p>Gym instructor and health enthusiast, focused on bringing the best out of people.</p>
                        </div>

                        {/* Search Widget */}
                        <div className="widget search-widget">
                            <div className="search-box">
                                <input type="text" placeholder="Search..." />
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Categories Widget */}
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

                        {/* Recent Posts Widget */}
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

                        {/* Tags Widget */}
                        <div className="widget tags-widget">
                            <h3>TAGS</h3>
                            <div className="tags-cloud">
                                {sidebarWidgets.tags.map(tag => (
                                    <Link key={tag} to="#" className="tag-link">{tag}</Link>
                                ))}
                            </div>
                        </div>

                        {/* Instagram Widget */}
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

export default Blog;
