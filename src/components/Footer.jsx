const links = [
  // { label: 'إنشاء حساب في فيسبوك', href: 'https://web.facebook.com/reg/' },
  // { label: 'تسجيل الدخول', href: 'https://web.facebook.com/login/' },
  { label: 'Messenger', href: 'https://messenger.com/', rel: 'nofollow' },
  { label: 'Facebook Lite', href: 'https://web.facebook.com/lite/' },
  { label: 'فيديو', href: 'https://web.facebook.com/watch/' },
  {
    label: 'Meta Pay',
    href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUBOyYMqZr8iw2AcZlPNqetnd76n4d2iH7wf8YiJ9YFBTa0iM_z2a3RqfHeo7THlIYW78QSCkNxqSHVXNI_F3jHNVc6RuKeAYuyi3qbLLFGdCGhtGU0ltbSy-Yd83Q4pUBF2eFcv5_xSBqOoHD5o_A',
    rel: 'nofollow noreferrer',
    target: '_blank',
  },
  {
    label: 'Meta Store',
    href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUBOyYMqZr8iw2AcZlPNqetnd76n4d2iH7wf8YiJ9YFBTa0iM_z2a3RqfHeo7THlIYW78QSCkNxqSHVXNI_F3jHNVc6RuKeAYuyi3qbLLFGdCGhtGU0ltbSy-Yd83Q4pUBF2eFcv5_xSBqOoHD5o_A',
    rel: 'nofollow noreferrer',
    target: '_blank',
  },
  {
    label: 'Meta Quest',
    href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUBOyYMqZr8iw2AcZlPNqetnd76n4d2iH7wf8YiJ9YFBTa0iM_z2a3RqfHeo7THlIYW78QSCkNxqSHVXNI_F3jHNVc6RuKeAYuyi3qbLLFGdCGhtGU0ltbSy-Yd83Q4pUBF2eFcv5_xSBqOoHD5o_A',
    rel: 'nofollow noreferrer',
    target: '_blank',
  },
  {
    label: 'Ray-Ban Meta',
    href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fai-glasses%2Fray-ban-meta%2F&h=AUBOyYMqZr8iw2AcZlPNqetnd76n4d2iH7wf8YiJ9YFBTa0iM_z2a3RqfHeo7THlIYW78QSCkNxqSHVXNI_F3jHNVc6RuKeAYuyi3qbLLFGdCGhtGU0ltbSy-Yd83Q4pUBF2eFcv5_xSBqOoHD5o_A',
    rel: 'nofollow noreferrer',
    target: '_blank',
  },
  {
    label: 'Meta AI',
    href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUBOyYMqZr8iw2AcZlPNqetnd76n4d2iH7wf8YiJ9YFBTa0iM_z2a3RqfHeo7THlIYW78QSCkNxqSHVXNI_F3jHNVc6RuKeAYuyi3qbLLFGdCGhtGU0ltbSy-Yd83Q4pUBF2eFcv5_xSBqOoHD5o_A',
    rel: 'nofollow',
  },
  {
    label: 'Instagram',
    href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUBOyYMqZr8iw2AcZlPNqetnd76n4d2iH7wf8YiJ9YFBTa0iM_z2a3RqfHeo7THlIYW78QSCkNxqSHVXNI_F3jHNVc6RuKeAYuyi3qbLLFGdCGhtGU0ltbSy-Yd83Q4pUBF2eFcv5_xSBqOoHD5o_A',
    rel: 'nofollow',
  },
  {
    label: 'Threads',
    href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUBOyYMqZr8iw2AcZlPNqetnd76n4d2iH7wf8YiJ9YFBTa0iM_z2a3RqfHeo7THlIYW78QSCkNxqSHVXNI_F3jHNVc6RuKeAYuyi3qbLLFGdCGhtGU0ltbSy-Yd83Q4pUBF2eFcv5_xSBqOoHD5o_A',
    rel: 'nofollow',
  },
  {
    label: 'سياسة الخصوصية',
    href: 'https://web.facebook.com/privacy/policy/?entry_point=facebook_page_footer',
  },
  {
    label: 'مركز الخصوصية',
    href: 'https://web.facebook.com/privacy/center/?entry_point=facebook_page_footer',
  },
  { label: 'حول', href: 'https://web.facebook.com/about/' },
  {
    label: 'إنشاء إعلان',
    href: 'https://web.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto',
  },
  {
    label: 'إنشاء صفحة',
    href: 'https://web.facebook.com/pages/create/?ref_type=site_footer',
  },
  { label: 'المطوّرون', href: 'https://developers.facebook.com/?ref=pf' },
  { label: 'الوظائف', href: 'https://web.facebook.com/careers/?ref=pf' },
  {
    label: 'ملفات تعريف الارتباط',
    href: 'https://web.facebook.com/policies/cookies/',
  },
  {
    label: 'اختيارات الإعلانات',
    href: 'https://web.facebook.com/help/568137493302217',
  },
  { label: 'الشروط', href: 'https://web.facebook.com/policies?ref=pf' },
  { label: 'مساعدة', href: 'https://web.facebook.com/help/?ref=pf' },
  {
    label: 'تحميل جهات الاتصال والإشعار غير المتعلق بالمستخدمين',
    href: 'https://web.facebook.com/help/637205020878504',
  },
];

function Footer() {

  return (
    <footer>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          rel={link.rel}
          target={link.target || '_self'}
        >
          {link.label}
        </a>
      ))}
    </footer>
  );
}

export default Footer;