<?php include 'includes/header.php'; ?>

<main style="padding-top: 8rem; max-width: 80rem; margin: 0 auto; padding-left: 1rem; padding-right: 1rem; padding-bottom: 6rem;">
    <div style="text-align: center; margin-bottom: 4rem;">
        <h1 class="title" style="font-size: 3rem;">Contact <span class="gradient-text">Us</span></h1>
        <p style="color: var(--text-muted); font-size: 1.25rem; max-width: 600px; margin: 1rem auto 0;">
            Have a question or need assistance? Our team is here to help you 24/7.
        </p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; background: rgba(255, 255, 255, 0.02); padding: 3rem; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.05);">
        <div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Get In Touch</h3>
            <p style="margin-bottom: 2rem; color: var(--text-muted);">For all kinds of information, inquiries, or support, please reach out via our official channels.</p>
            
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <a href="mailto:syedaliwaris125@gmail.com" style="display: flex; align-items: center; gap: 1rem; background: var(--card-background); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(17, 153, 250, 0.2);">
                    <i data-lucide="mail" style="color: var(--primary);"></i>
                    <div>
                        <div style="font-size: 0.875rem; color: var(--text-muted);">Email Official</div>
                        <div style="font-weight: 600; color: var(--primary); font-size: 1.125rem;">syedaliwaris125@gmail.com</div>
                    </div>
                </a>

                <div style="display: flex; align-items: center; gap: 1rem; background: var(--card-background); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.05);">
                    <i data-lucide="message-square" style="color: var(--secondary);"></i>
                    <div>
                        <div style="font-size: 0.875rem; color: var(--text-muted);">Live Chat</div>
                        <div style="font-weight: 600; color: var(--secondary); font-size: 1.125rem;">Available 24/7</div>
                    </div>
                </div>
            </div>
        </div>

        <form id="contact-form" onsubmit="event.preventDefault(); alert('Message sent successfully!'); this.reset();" style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <label style="font-size: 0.875rem; color: var(--text-muted);">Full Name</label>
                <input type="text" required style="width: 100%; padding: 0.75rem 1rem; background: var(--background); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; color: white; outline: none;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <label style="font-size: 0.875rem; color: var(--text-muted);">Email Address</label>
                <input type="email" required style="width: 100%; padding: 0.75rem 1rem; background: var(--background); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; color: white; outline: none;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <label style="font-size: 0.875rem; color: var(--text-muted);">Subject</label>
                <select style="width: 100%; padding: 0.75rem 1rem; background: var(--background); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; color: white; outline: none;">
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                    <option>Other</option>
                </select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <label style="font-size: 0.875rem; color: var(--text-muted);">Message</label>
                <textarea required style="width: 100%; padding: 0.75rem 1rem; background: var(--background); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; color: white; outline: none; min-height: 120px; resize: vertical;"></textarea>
            </div>
            <button type="submit" style="padding: 1rem; background: var(--primary); color: white; border-radius: 8px; font-weight: 700; transition: opacity 0.2s; cursor: pointer;">Send Message</button>
        </form>
    </div>
</main>

<style>
@media (max-width: 768px) {
    main > div:last-of-type {
        grid-template-columns: 1fr !important;
    }
}
</style>

<?php include 'includes/footer.php'; ?>
