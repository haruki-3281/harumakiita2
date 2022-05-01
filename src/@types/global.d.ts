type typeUser = {
    github_login_name:string;
    twitter_screen_name:string;
    name:string;
    profile_image_url:string;
};

type typeArticle = {
    id:string;
    created_at:string;
    title:string;
    likes_count:number;
    
    user:typeUser;
    tags:[];
};