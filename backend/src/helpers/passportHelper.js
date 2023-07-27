import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";

const authUser = (accessToken, refreshToken, profile, done) => {
//    console.log("accessToken", accessToken); // AccesToken es el token que le permite a nuestra aplicación acceder a los datos del usuario
//    console.log("refreshToken", refreshToken); // RefreshToken es el token que le permite a nuestra aplicación obtener un nuevo accessToken cuando el actual expire
//    console.log("profile", profile); // Profile es el objeto que contiene los datos del usuario
    done(null, profile);
};

passport.use(
    new DiscordStrategy(
        {
            clientID:
                "1134106235252256768",
            clientSecret: "iKtRGEEV9_fZ_0znUMTtbUTfAlsy3kfO",
            callbackURL: "http://localhost:3000/login/discord/callback"
        },
        authUser
    )
);

passport.serializeUser((user, done) => {
    console.log("serializeUser");
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log("deserializeUser");
    done(null, user);
});

export default passport;