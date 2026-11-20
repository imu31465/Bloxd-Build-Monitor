/*! For license information please see 7rj44.258.be02152e.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
    39675: (zz, tz, sz) => {
        sz.r(tz), sz.d(tz, {
          ActionCodeOperation: () => Nz,
          ActionCodeURL: () => ft,
          AuthCredential: () => ht,
          AuthErrorCodes: () => Hz,
          EmailAuthCredential: () => qt,
          EmailAuthProvider: () => zs,
          FacebookAuthProvider: () => Ws,
          FactorId: () => vz,
          GithubAuthProvider: () => Os,
          GoogleAuthProvider: () => Xs,
          OAuthCredential: () => Vt,
          OAuthProvider: () => Fs,
          OperationType: () => uz,
          PhoneAuthCredential: () => pt,
          PhoneAuthProvider: () => WW,
          PhoneMultiFactorGenerator: () => FX,
          ProviderId: () => Uz,
          RecaptchaVerifier: () => pF,
          SAMLAuthProvider: () => vs,
          SignInMethod: () => Kz,
          TotpMultiFactorGenerator: () => WX,
          TotpSecret: () => OX,
          TwitterAuthProvider: () => Us,
          applyActionCode: () => ys,
          beforeAuthStateChanged: () => oF,
          browserLocalPersistence: () => xF,
          browserPopupRedirectResolver: () => zX,
          browserSessionPersistence: () => JF,
          checkActionCode: () => Ms,
          confirmPasswordReset: () => As,
          connectAuthEmulator: () => yt,
          createUserWithEmailAndPassword: () => hs,
          debugErrorMap: () => wz,
          deleteUser: () => NF,
          fetchSignInMethodsForEmail: () => ls,
          getAdditionalUserInfo: () => FF,
          getAuth: () => wX,
          getIdToken: () => az,
          getIdTokenResult: () => qz,
          getMultiFactorResolver: () => DF,
          getRedirectResult: () => CW,
          inMemoryPersistence: () => ot,
          indexedDBLocalPersistence: () => kF,
          initializeAuth: () => At,
          initializeRecaptchaConfig: () => XF,
          isSignInWithEmailLink: () => is,
          linkWithCredential: () => ms,
          linkWithPhoneNumber: () => zW,
          linkWithPopup: () => wW,
          linkWithRedirect: () => IW,
          multiFactor: () => BF,
          onAuthStateChanged: () => vF,
          onIdTokenChanged: () => OF,
          parseActionCodeURL: () => Et,
          prodErrorMap: () => Dz,
          reauthenticateWithCredential: () => Is,
          reauthenticateWithPhoneNumber: () => tW,
          reauthenticateWithPopup: () => bW,
          reauthenticateWithRedirect: () => JW,
          reload: () => zt,
          sendEmailVerification: () => ns,
          sendPasswordResetEmail: () => cs,
          sendSignInLinkToEmail: () => ks,
          setPersistence: () => WF,
          signInAnonymously: () => bs,
          signInWithCredential: () => xs,
          signInWithCustomToken: () => Cs,
          signInWithEmailAndPassword: () => Qs,
          signInWithEmailLink: () => Ls,
          signInWithPhoneNumber: () => EF,
          signInWithPopup: () => NW,
          signInWithRedirect: () => mW,
          signOut: () => uF,
          unlink: () => Hs,
          updateCurrentUser: () => KF,
          updateEmail: () => Ss,
          updatePassword: () => Vs,
          updatePhoneNumber: () => FW,
          updateProfile: () => qs,
          useDeviceLanguage: () => UF,
          verifyBeforeUpdateEmail: () => as,
          verifyPasswordResetCode: () => ds
        });
        var Fz = sz(39657),
          Wz = sz(39644);

        function Xz(zz, tz) {
          var sz = {};
          for (var Fz in zz) Object.prototype.hasOwnProperty.call(zz, Fz) && tz.indexOf(Fz) < 0 && (sz[Fz] = zz[Fz]);
          if (null != zz && "function" === typeof Object.getOwnPropertySymbols) {
            var Wz = 0;
            for (Fz = Object.getOwnPropertySymbols(zz); Wz < Fz.length; Wz++) tz.indexOf(Fz[Wz]) < 0 && Object.prototype.propertyIsEnumerable.call(zz, Fz[Wz]) && (sz[Fz[Wz]] = zz[Fz[Wz]])
          }
          return sz
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Oz = sz(39662),
          oz = sz(39648);
        const vz = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Uz = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Kz = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          uz = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Nz = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function bz() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const wz = function() {
            return {
              "admin-restricted-operation": "This operation is restricted to administrators only.",
              "argument-error": "",
              "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
              "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
              "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
              "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
              "cordova-not-ready": "Cordova framework is not ready.",
              "cors-unsupported": "This browser is not supported.",
              "credential-already-in-use": "This credential is already associated with a different user account.",
              "custom-token-mismatch": "The custom token corresponds to a different audience.",
              "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
              "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
              "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
              "email-change-needs-verification": "Multi-factor users must always have a verified email.",
              "email-already-in-use": "The email address is already in use by another account.",
              "emulator-config-failed": 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
              "expired-action-code": "The action code has expired.",
              "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
              "internal-error": "An internal AuthError has occurred.",
              "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
              "invalid-app-id": "The mobile app identifier is not registed for the current project.",
              "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
              "invalid-auth-event": "An internal AuthError has occurred.",
              "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
              "invalid-continue-uri": "The continue URL provided in the request is invalid.",
              "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
              "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
              "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
              "invalid-email": "The email address is badly formatted.",
              "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).",
              "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
              "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
              "invalid-credential": "The supplied auth credential is malformed or has expired.",
              "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
              "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
              "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
              "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
              "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
              "wrong-password": "The password is invalid or the user does not have a password.",
              "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
              "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
              "invalid-provider-id": "The specified provider ID is invalid.",
              "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
              "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
              "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
              "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
              "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
              "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
              "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
              "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
              "missing-continue-uri": "A continue URL must be provided in the request.",
              "missing-iframe-start": "An internal AuthError has occurred.",
              "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
              "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
              "missing-password": "A non-empty password must be provided",
              "missing-multi-factor-info": "No second factor identifier is provided.",
              "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
              "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
              "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
              "app-deleted": "This instance of FirebaseApp has been deleted.",
              "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
              "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
              "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
              "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
              "no-auth-event": "An internal AuthError has occurred.",
              "no-such-provider": "User was not linked to an account with the given provider.",
              "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
              "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
              "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
              "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
              "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
              "provider-already-linked": "User can only be linked to one identity for the given provider.",
              "quota-exceeded": "The project's quota for this operation has been exceeded.",
              "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
              "redirect-operation-pending": "A redirect sign-in operation is already pending.",
              "rejected-credential": "The request contains malformed or mismatching credentials.",
              "second-factor-already-in-use": "The second factor is already enrolled on this account.",
              "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
              "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
              timeout: "The operation has timed out.",
              "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
              "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
              "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
              "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
              "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
              "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
              "unverified-email": "The operation requires a verified email.",
              "user-cancelled": "The user did not grant your application the permissions it requested.",
              "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
              "user-disabled": "The user account has been disabled by an administrator.",
              "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
              "user-signed-out": "",
              "weak-password": "The password must be 6 characters long or more.",
              "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.",
              "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
              "missing-recaptcha-token": "The reCAPTCHA token is missing when sending request to the backend.",
              "invalid-recaptcha-token": "The reCAPTCHA token is invalid when sending request to the backend.",
              "invalid-recaptcha-action": "The reCAPTCHA action is invalid when sending request to the backend.",
              "recaptcha-not-enabled": "reCAPTCHA Enterprise integration is not enabled for this project.",
              "missing-client-type": "The reCAPTCHA client type is missing when sending request to the backend.",
              "missing-recaptcha-version": "The reCAPTCHA version is missing when sending request to the backend.",
              "invalid-req-type": "Invalid request parameters.",
              "invalid-recaptcha-version": "The reCAPTCHA version is invalid when sending request to the backend."
            }
          },
          Dz = bz,
          gz = new Fz.d("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Hz = {
            ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
            ARGUMENT_ERROR: "auth/argument-error",
            APP_NOT_AUTHORIZED: "auth/app-not-authorized",
            APP_NOT_INSTALLED: "auth/app-not-installed",
            CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
            CODE_EXPIRED: "auth/code-expired",
            CORDOVA_NOT_READY: "auth/cordova-not-ready",
            CORS_UNSUPPORTED: "auth/cors-unsupported",
            CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
            CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
            DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
            DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
            EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
            EMAIL_EXISTS: "auth/email-already-in-use",
            EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
            EXPIRED_OOB_CODE: "auth/expired-action-code",
            EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
            INTERNAL_ERROR: "auth/internal-error",
            INVALID_API_KEY: "auth/invalid-api-key",
            INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
            INVALID_APP_ID: "auth/invalid-app-id",
            INVALID_AUTH: "auth/invalid-user-token",
            INVALID_AUTH_EVENT: "auth/invalid-auth-event",
            INVALID_CERT_HASH: "auth/invalid-cert-hash",
            INVALID_CODE: "auth/invalid-verification-code",
            INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
            INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
            INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
            INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
            INVALID_EMAIL: "auth/invalid-email",
            INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
            INVALID_IDP_RESPONSE: "auth/invalid-credential",
            INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
            INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
            INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
            INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
            INVALID_OOB_CODE: "auth/invalid-action-code",
            INVALID_ORIGIN: "auth/unauthorized-domain",
            INVALID_PASSWORD: "auth/wrong-password",
            INVALID_PERSISTENCE: "auth/invalid-persistence-type",
            INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
            INVALID_PROVIDER_ID: "auth/invalid-provider-id",
            INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
            INVALID_SENDER: "auth/invalid-sender",
            INVALID_SESSION_INFO: "auth/invalid-verification-id",
            INVALID_TENANT_ID: "auth/invalid-tenant-id",
            MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
            MFA_REQUIRED: "auth/multi-factor-auth-required",
            MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
            MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
            MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
            MISSING_CODE: "auth/missing-verification-code",
            MISSING_CONTINUE_URI: "auth/missing-continue-uri",
            MISSING_IFRAME_START: "auth/missing-iframe-start",
            MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
            MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
            MISSING_MFA_INFO: "auth/missing-multi-factor-info",
            MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
            MISSING_PHONE_NUMBER: "auth/missing-phone-number",
            MISSING_SESSION_INFO: "auth/missing-verification-id",
            MODULE_DESTROYED: "auth/app-deleted",
            NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
            NETWORK_REQUEST_FAILED: "auth/network-request-failed",
            NULL_USER: "auth/null-user",
            NO_AUTH_EVENT: "auth/no-auth-event",
            NO_SUCH_PROVIDER: "auth/no-such-provider",
            OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
            OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
            POPUP_BLOCKED: "auth/popup-blocked",
            POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
            PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
            QUOTA_EXCEEDED: "auth/quota-exceeded",
            REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
            REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
            REJECTED_CREDENTIAL: "auth/rejected-credential",
            SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
            TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
            TIMEOUT: "auth/timeout",
            TOKEN_EXPIRED: "auth/user-token-expired",
            TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
            UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
            UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
            UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
            UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
            UNVERIFIED_EMAIL: "auth/unverified-email",
            USER_CANCELLED: "auth/user-cancelled",
            USER_DELETED: "auth/user-not-found",
            USER_DISABLED: "auth/user-disabled",
            USER_MISMATCH: "auth/user-mismatch",
            USER_SIGNED_OUT: "auth/user-signed-out",
            WEAK_PASSWORD: "auth/weak-password",
            WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
            ALREADY_INITIALIZED: "auth/already-initialized",
            RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
            MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
            INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
            INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
            MISSING_CLIENT_TYPE: "auth/missing-client-type",
            MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
            INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
            INVALID_REQ_TYPE: "auth/invalid-req-type"
          },
          Bz = new Oz.f("@firebase/auth");

        function Pz(zz) {
          if (Bz.logLevel <= Oz.c.ERROR) {
            for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
            Bz.error(`Auth (${Wz.f}): ${zz}`, ...sz)
          }
        }

        function rz(zz) {
          for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
          throw Jz(zz, ...sz)
        }

        function Yz(zz) {
          for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
          return Jz(zz, ...sz)
        }

        function xz(zz, tz, sz) {
          const Wz = Object.assign(Object.assign({}, Dz()), {
            [tz]: sz
          });
          return new Fz.d("auth", "Firebase", Wz).create(tz, {
            appName: zz.name
          })
        }

        function mz(zz, tz, sz) {
          if (!(tz instanceof sz)) throw sz.name !== tz.constructor.name && rz(zz, "argument-error"), xz(zz, "argument-error", `Type of ${tz.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function Jz(zz) {
          for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
          if ("string" !== typeof zz) {
            const tz = sz[0],
              Fz = [...sz.slice(1)];
            return Fz[0] && (Fz[0].appName = zz.name), zz._errorFactory.create(tz, ...Fz)
          }
          return gz.create(zz, ...sz)
        }

        function Iz(zz, tz) {
          if (!zz) {
            for (var sz = arguments.length, Fz = new Array(sz > 2 ? sz - 2 : 0), Wz = 2; Wz < sz; Wz++) Fz[Wz - 2] = arguments[Wz];
            throw Jz(tz, ...Fz)
          }
        }

        function Cz(zz) {
          const tz = "INTERNAL ASSERTION FAILED: " + zz;
          throw Pz(tz), new Error(tz)
        }

        function ez(zz, tz) {
          zz || Cz(tz)
        }

        function Zz() {
          var zz;
          return "undefined" !== typeof self && (null === (zz = self.location) || void 0 === zz ? void 0 : zz.href) || ""
        }

        function Gz() {
          return "http:" === Tz() || "https:" === Tz()
        }

        function Tz() {
          var zz;
          return "undefined" !== typeof self && (null === (zz = self.location) || void 0 === zz ? void 0 : zz.protocol) || null
        }
        class cz {
          constructor(zz, tz) {
            this.shortDelay = zz, this.longDelay = tz, ez(tz > zz, "Short delay should be less than long delay!"), this.isMobile = (0, Fz.$)() || (0, Fz.ab)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Gz() || (0, Fz.R)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function jz(zz, tz) {
          ez(zz.emulator, "Emulator should always be set here");
          const {
            url: sz
          } = zz.emulator;
          return tz ? `${sz}${tz.startsWith("/")?tz.slice(1):tz}` : sz
        }
        class Az {
          static initialize(zz, tz, sz) {
            this.fetchImpl = zz, tz && (this.headersImpl = tz), sz && (this.responseImpl = sz)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Cz("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Cz("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Cz("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const yz = {
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_PASSWORD: "wrong-password",
            MISSING_PASSWORD: "missing-password",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_REQ_TYPE: "internal-error",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            INVALID_CODE: "invalid-verification-code",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            MISSING_SESSION_INFO: "missing-verification-id",
            SESSION_EXPIRED: "code-expired",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
            BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
            RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
            MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
            INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
            INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
            MISSING_CLIENT_TYPE: "missing-client-type",
            MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
            INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
            INVALID_REQ_TYPE: "invalid-req-type"
          },
          Mz = new cz(3e4, 6e4);

        function dz(zz, tz) {
          return zz.tenantId && !tz.tenantId ? Object.assign(Object.assign({}, tz), {
            tenantId: zz.tenantId
          }) : tz
        }
        async function hz(zz, tz, sz, Wz) {
          return Qz(zz, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Xz = {},
              Oz = {};
            Wz && ("GET" === tz ? Oz = Wz : Xz = {
              body: JSON.stringify(Wz)
            });
            const oz = (0, Fz.gb)(Object.assign({
                key: zz.config.apiKey
              }, Oz)).slice(1),
              vz = await zz._getAdditionalHeaders();
            return vz["Content-Type"] = "application/json", zz.languageCode && (vz["X-Firebase-Locale"] = zz.languageCode), Az.fetch()(iz(zz, zz.config.apiHost, sz, oz), Object.assign({
              method: tz,
              headers: vz,
              referrerPolicy: "no-referrer"
            }, Xz))
          }))
        }
        async function Qz(zz, tz, sz) {
          zz._canInitEmulator = !1;
          const Wz = Object.assign(Object.assign({}, yz), tz);
          try {
            const tz = new Lz(zz),
              Fz = await Promise.race([sz(), tz.promise]);
            tz.clearNetworkTimeout();
            const Xz = await Fz.json();
            if ("needConfirmation" in Xz) throw lz(zz, "account-exists-with-different-credential", Xz);
            if (Fz.ok && !("errorMessage" in Xz)) return Xz;
            {
              const tz = Fz.ok ? Xz.errorMessage : Xz.error.message,
                [sz, Oz] = tz.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === sz) throw lz(zz, "credential-already-in-use", Xz);
              if ("EMAIL_EXISTS" === sz) throw lz(zz, "email-already-in-use", Xz);
              if ("USER_DISABLED" === sz) throw lz(zz, "user-disabled", Xz);
              const oz = Wz[sz] || sz.toLowerCase().replace(/[_\s]+/g, "-");
              if (Oz) throw xz(zz, oz, Oz);
              rz(zz, oz)
            }
          } catch (Xz) {
            if (Xz instanceof Fz.f) throw Xz;
            rz(zz, "network-request-failed", {
              message: String(Xz)
            })
          }
        }
        async function kz(zz, tz, sz, Fz) {
          let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Xz = await hz(zz, tz, sz, Fz, Wz);
          return "mfaPendingCredential" in Xz && rz(zz, "multi-factor-auth-required", {
            _serverResponse: Xz
          }), Xz
        }

        function iz(zz, tz, sz, Fz) {
          const Wz = `${tz}${sz}?${Fz}`;
          return zz.config.emulator ? jz(zz.config, Wz) : `${zz.config.apiScheme}://${Wz}`
        }
        class Lz {
          constructor(zz) {
            this.auth = zz, this.timer = null, this.promise = new Promise(((zz, tz) => {
              this.timer = setTimeout((() => tz(Yz(this.auth, "network-request-failed"))), Mz.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function lz(zz, tz, sz) {
          const Fz = {
            appName: zz.name
          };
          sz.email && (Fz.email = sz.email), sz.phoneNumber && (Fz.phoneNumber = sz.phoneNumber);
          const Wz = Yz(zz, tz, Fz);
          return Wz.customData._tokenResponse = sz, Wz
        }

        function nz(zz) {
          if (zz) try {
            const tz = new Date(Number(zz));
            if (!isNaN(tz.getTime())) return tz.toUTCString()
          } catch (tz) {}
        }

        function az(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Fz.L)(zz).getIdToken(tz)
        }
        async function qz(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const sz = (0, Fz.L)(zz),
            Wz = await sz.getIdToken(tz),
            Xz = Vz(Wz);
          Iz(Xz && Xz.exp && Xz.auth_time && Xz.iat, sz.auth, "internal-error");
          const Oz = "object" === typeof Xz.firebase ? Xz.firebase : void 0,
            oz = null === Oz || void 0 === Oz ? void 0 : Oz.sign_in_provider;
          return {
            claims: Xz,
            token: Wz,
            authTime: nz(Sz(Xz.auth_time)),
            issuedAtTime: nz(Sz(Xz.iat)),
            expirationTime: nz(Sz(Xz.exp)),
            signInProvider: oz || null,
            signInSecondFactor: (null === Oz || void 0 === Oz ? void 0 : Oz.sign_in_second_factor) || null
          }
        }

        function Sz(zz) {
          return 1e3 * Number(zz)
        }

        function Vz(zz) {
          const [tz, sz, Wz] = zz.split(".");
          if (void 0 === tz || void 0 === sz || void 0 === Wz) return Pz("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const zz = (0, Fz.i)(sz);
            return zz ? JSON.parse(zz) : (Pz("Failed to decode base64 JWT payload"), null)
          } catch (Xz) {
            return Pz("Caught error parsing JWT payload as JSON", null === Xz || void 0 === Xz ? void 0 : Xz.toString()), null
          }
        }
        async function Rz(zz, tz) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return tz;
          try {
            return await tz
          } catch (sz) {
            throw sz instanceof Fz.f && function(zz) {
              let {
                code: tz
              } = zz;
              return "auth/user-disabled" === tz || "auth/user-token-expired" === tz
            }(sz) && zz.auth.currentUser === zz && await zz.auth.signOut(), sz
          }
        }
        class pz {
          constructor(zz) {
            this.user = zz, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(zz) {
            var tz;
            if (zz) {
              const zz = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), zz
            } {
              this.errorBackoff = 3e4;
              const zz = (null !== (tz = this.user.stsTokenManager.expirationTime) && void 0 !== tz ? tz : 0) - Date.now() - 3e5;
              return Math.max(0, zz)
            }
          }
          schedule() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const tz = this.getInterval(zz);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), tz)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (zz) {
              return void("auth/network-request-failed" === (null === zz || void 0 === zz ? void 0 : zz.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class fz {
          constructor(zz, tz) {
            this.createdAt = zz, this.lastLoginAt = tz, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = nz(this.lastLoginAt), this.creationTime = nz(this.createdAt)
          }
          _copy(zz) {
            this.createdAt = zz.createdAt, this.lastLoginAt = zz.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function Ez(zz) {
          var tz;
          const sz = zz.auth,
            Fz = await zz.getIdToken(),
            Wz = await Rz(zz, async function(zz, tz) {
              return hz(zz, "POST", "/v1/accounts:lookup", tz)
            }(sz, {
              idToken: Fz
            }));
          Iz(null === Wz || void 0 === Wz ? void 0 : Wz.users.length, sz, "internal-error");
          const Oz = Wz.users[0];
          zz._notifyReloadListener(Oz);
          const oz = (null === (tz = Oz.providerUserInfo) || void 0 === tz ? void 0 : tz.length) ? Oz.providerUserInfo.map((zz => {
            var {
              providerId: tz
            } = zz, sz = Xz(zz, ["providerId"]);
            return {
              providerId: tz,
              uid: sz.rawId || "",
              displayName: sz.displayName || null,
              email: sz.email || null,
              phoneNumber: sz.phoneNumber || null,
              photoURL: sz.photoUrl || null
            }
          })) : [];
          const vz = (Uz = zz.providerData, Kz = oz, [...Uz.filter((zz => !Kz.some((tz => tz.providerId === zz.providerId)))), ...Kz]);
          var Uz, Kz;
          const uz = zz.isAnonymous,
            Nz = !(zz.email && Oz.passwordHash) && !(null === vz || void 0 === vz ? void 0 : vz.length),
            bz = !!uz && Nz,
            wz = {
              uid: Oz.localId,
              displayName: Oz.displayName || null,
              photoURL: Oz.photoUrl || null,
              email: Oz.email || null,
              emailVerified: Oz.emailVerified || !1,
              phoneNumber: Oz.phoneNumber || null,
              tenantId: Oz.tenantId || null,
              providerData: vz,
              metadata: new fz(Oz.createdAt, Oz.lastLoginAt),
              isAnonymous: bz
            };
          Object.assign(zz, wz)
        }
        async function zt(zz) {
          const tz = (0, Fz.L)(zz);
          await Ez(tz), await tz.auth._persistUserIfCurrent(tz), tz.auth._notifyListenersIfCurrent(tz)
        }
        class tt {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(zz) {
            Iz(zz.idToken, "internal-error"), Iz("undefined" !== typeof zz.idToken, "internal-error"), Iz("undefined" !== typeof zz.refreshToken, "internal-error");
            const tz = "expiresIn" in zz && "undefined" !== typeof zz.expiresIn ? Number(zz.expiresIn) : function(zz) {
              const tz = Vz(zz);
              return Iz(tz, "internal-error"), Iz("undefined" !== typeof tz.exp, "internal-error"), Iz("undefined" !== typeof tz.iat, "internal-error"), Number(tz.exp) - Number(tz.iat)
            }(zz.idToken);
            this.updateTokensAndExpiration(zz.idToken, zz.refreshToken, tz)
          }
          async getToken(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Iz(!this.accessToken || this.refreshToken, zz, "user-token-expired"), tz || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(zz, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(zz, tz) {
            const {
              accessToken: sz,
              refreshToken: Wz,
              expiresIn: Xz
            } = await async function(zz, tz) {
              const sz = await Qz(zz, {}, (async () => {
                const sz = (0, Fz.gb)({
                    grant_type: "refresh_token",
                    refresh_token: tz
                  }).slice(1),
                  {
                    tokenApiHost: Wz,
                    apiKey: Xz
                  } = zz.config,
                  Oz = iz(zz, Wz, "/v1/token", `key=${Xz}`),
                  oz = await zz._getAdditionalHeaders();
                return oz["Content-Type"] = "application/x-www-form-urlencoded", Az.fetch()(Oz, {
                  method: "POST",
                  headers: oz,
                  body: sz
                })
              }));
              return {
                accessToken: sz.access_token,
                expiresIn: sz.expires_in,
                refreshToken: sz.refresh_token
              }
            }(zz, tz);
            this.updateTokensAndExpiration(sz, Wz, Number(Xz))
          }
          updateTokensAndExpiration(zz, tz, sz) {
            this.refreshToken = tz || null, this.accessToken = zz || null, this.expirationTime = Date.now() + 1e3 * sz
          }
          static fromJSON(zz, tz) {
            const {
              refreshToken: sz,
              accessToken: Fz,
              expirationTime: Wz
            } = tz, Xz = new tt;
            return sz && (Iz("string" === typeof sz, "internal-error", {
              appName: zz
            }), Xz.refreshToken = sz), Fz && (Iz("string" === typeof Fz, "internal-error", {
              appName: zz
            }), Xz.accessToken = Fz), Wz && (Iz("number" === typeof Wz, "internal-error", {
              appName: zz
            }), Xz.expirationTime = Wz), Xz
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(zz) {
            this.accessToken = zz.accessToken, this.refreshToken = zz.refreshToken, this.expirationTime = zz.expirationTime
          }
          _clone() {
            return Object.assign(new tt, this.toJSON())
          }
          _performRefresh() {
            return Cz("not implemented")
          }
        }

        function st(zz, tz) {
          Iz("string" === typeof zz || "undefined" === typeof zz, "internal-error", {
            appName: tz
          })
        }
        class Ft {
          constructor(zz) {
            var {
              uid: tz,
              auth: sz,
              stsTokenManager: Fz
            } = zz, Wz = Xz(zz, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new pz(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = tz, this.auth = sz, this.stsTokenManager = Fz, this.accessToken = Fz.accessToken, this.displayName = Wz.displayName || null, this.email = Wz.email || null, this.emailVerified = Wz.emailVerified || !1, this.phoneNumber = Wz.phoneNumber || null, this.photoURL = Wz.photoURL || null, this.isAnonymous = Wz.isAnonymous || !1, this.tenantId = Wz.tenantId || null, this.providerData = Wz.providerData ? [...Wz.providerData] : [], this.metadata = new fz(Wz.createdAt || void 0, Wz.lastLoginAt || void 0)
          }
          async getIdToken(zz) {
            const tz = await Rz(this, this.stsTokenManager.getToken(this.auth, zz));
            return Iz(tz, this.auth, "internal-error"), this.accessToken !== tz && (this.accessToken = tz, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), tz
          }
          getIdTokenResult(zz) {
            return qz(this, zz)
          }
          reload() {
            return zt(this)
          }
          _assign(zz) {
            this !== zz && (Iz(this.uid === zz.uid, this.auth, "internal-error"), this.displayName = zz.displayName, this.photoURL = zz.photoURL, this.email = zz.email, this.emailVerified = zz.emailVerified, this.phoneNumber = zz.phoneNumber, this.isAnonymous = zz.isAnonymous, this.tenantId = zz.tenantId, this.providerData = zz.providerData.map((zz => Object.assign({}, zz))), this.metadata._copy(zz.metadata), this.stsTokenManager._assign(zz.stsTokenManager))
          }
          _clone(zz) {
            const tz = new Ft(Object.assign(Object.assign({}, this), {
              auth: zz,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return tz.metadata._copy(this.metadata), tz
          }
          _onReload(zz) {
            Iz(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = zz, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(zz) {
            this.reloadListener ? this.reloadListener(zz) : this.reloadUserInfo = zz
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sz = !1;
            zz.idToken && zz.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(zz), sz = !0), tz && await Ez(this), await this.auth._persistUserIfCurrent(this), sz && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const zz = await this.getIdToken();
            return await Rz(this, async function(zz, tz) {
              return hz(zz, "POST", "/v1/accounts:delete", tz)
            }(this.auth, {
              idToken: zz
            })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
          }
          toJSON() {
            return Object.assign(Object.assign({
              uid: this.uid,
              email: this.email || void 0,
              emailVerified: this.emailVerified,
              displayName: this.displayName || void 0,
              isAnonymous: this.isAnonymous,
              photoURL: this.photoURL || void 0,
              phoneNumber: this.phoneNumber || void 0,
              tenantId: this.tenantId || void 0,
              providerData: this.providerData.map((zz => Object.assign({}, zz))),
              stsTokenManager: this.stsTokenManager.toJSON(),
              _redirectEventId: this._redirectEventId
            }, this.metadata.toJSON()), {
              apiKey: this.auth.config.apiKey,
              appName: this.auth.name
            })
          }
          get refreshToken() {
            return this.stsTokenManager.refreshToken || ""
          }
          static _fromJSON(zz, tz) {
            var sz, Fz, Wz, Xz, Oz, oz, vz, Uz;
            const Kz = null !== (sz = tz.displayName) && void 0 !== sz ? sz : void 0,
              uz = null !== (Fz = tz.email) && void 0 !== Fz ? Fz : void 0,
              Nz = null !== (Wz = tz.phoneNumber) && void 0 !== Wz ? Wz : void 0,
              bz = null !== (Xz = tz.photoURL) && void 0 !== Xz ? Xz : void 0,
              wz = null !== (Oz = tz.tenantId) && void 0 !== Oz ? Oz : void 0,
              Dz = null !== (oz = tz._redirectEventId) && void 0 !== oz ? oz : void 0,
              gz = null !== (vz = tz.createdAt) && void 0 !== vz ? vz : void 0,
              Hz = null !== (Uz = tz.lastLoginAt) && void 0 !== Uz ? Uz : void 0,
              {
                uid: Bz,
                emailVerified: Pz,
                isAnonymous: rz,
                providerData: Yz,
                stsTokenManager: xz
              } = tz;
            Iz(Bz && xz, zz, "internal-error");
            const mz = tt.fromJSON(this.name, xz);
            Iz("string" === typeof Bz, zz, "internal-error"), st(Kz, zz.name), st(uz, zz.name), Iz("boolean" === typeof Pz, zz, "internal-error"), Iz("boolean" === typeof rz, zz, "internal-error"), st(Nz, zz.name), st(bz, zz.name), st(wz, zz.name), st(Dz, zz.name), st(gz, zz.name), st(Hz, zz.name);
            const Jz = new Ft({
              uid: Bz,
              auth: zz,
              email: uz,
              emailVerified: Pz,
              displayName: Kz,
              isAnonymous: rz,
              photoURL: bz,
              phoneNumber: Nz,
              tenantId: wz,
              stsTokenManager: mz,
              createdAt: gz,
              lastLoginAt: Hz
            });
            return Yz && Array.isArray(Yz) && (Jz.providerData = Yz.map((zz => Object.assign({}, zz)))), Dz && (Jz._redirectEventId = Dz), Jz
          }
          static async _fromIdTokenResponse(zz, tz) {
            let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Fz = new tt;
            Fz.updateFromServerResponse(tz);
            const Wz = new Ft({
              uid: tz.localId,
              auth: zz,
              stsTokenManager: Fz,
              isAnonymous: sz
            });
            return await Ez(Wz), Wz
          }
        }
        const Wt = new Map;

        function Xt(zz) {
          ez(zz instanceof Function, "Expected a class definition");
          let tz = Wt.get(zz);
          return tz ? (ez(tz instanceof zz, "Instance stored in cache mismatched with class"), tz) : (tz = new zz, Wt.set(zz, tz), tz)
        }
        class Ot {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(zz, tz) {
            this.storage[zz] = tz
          }
          async _get(zz) {
            const tz = this.storage[zz];
            return void 0 === tz ? null : tz
          }
          async _remove(zz) {
            delete this.storage[zz]
          }
          _addListener(zz, tz) {}
          _removeListener(zz, tz) {}
        }
        Ot.type = "NONE";
        const ot = Ot;

        function vt(zz, tz, sz) {
          return `firebase:${zz}:${tz}:${sz}`
        }
        class Ut {
          constructor(zz, tz, sz) {
            this.persistence = zz, this.auth = tz, this.userKey = sz;
            const {
              config: Fz,
              name: Wz
            } = this.auth;
            this.fullUserKey = vt(this.userKey, Fz.apiKey, Wz), this.fullPersistenceKey = vt("persistence", Fz.apiKey, Wz), this.boundEventHandler = tz._onStorageEvent.bind(tz), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(zz) {
            return this.persistence._set(this.fullUserKey, zz.toJSON())
          }
          async getCurrentUser() {
            const zz = await this.persistence._get(this.fullUserKey);
            return zz ? Ft._fromJSON(this.auth, zz) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(zz) {
            if (this.persistence === zz) return;
            const tz = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = zz, tz ? this.setCurrentUser(tz) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(zz, tz) {
            let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!tz.length) return new Ut(Xt(ot), zz, sz);
            const Fz = (await Promise.all(tz.map((async zz => {
              if (await zz._isAvailable()) return zz
            })))).filter((zz => zz));
            let Wz = Fz[0] || Xt(ot);
            const Xz = vt(sz, zz.config.apiKey, zz.name);
            let Oz = null;
            for (const Uz of tz) try {
              const tz = await Uz._get(Xz);
              if (tz) {
                const sz = Ft._fromJSON(zz, tz);
                Uz !== Wz && (Oz = sz), Wz = Uz;
                break
              }
            } catch (vz) {}
            const oz = Fz.filter((zz => zz._shouldAllowMigration));
            return Wz._shouldAllowMigration && oz.length ? (Wz = oz[0], Oz && await Wz._set(Xz, Oz.toJSON()), await Promise.all(tz.map((async zz => {
              if (zz !== Wz) try {
                await zz._remove(Xz)
              } catch (vz) {}
            }))), new Ut(Wz, zz, sz)) : new Ut(Wz, zz, sz)
          }
        }

        function Kt(zz) {
          const tz = zz.toLowerCase();
          if (tz.includes("opera/") || tz.includes("opr/") || tz.includes("opios/")) return "Opera";
          if (wt(tz)) return "IEMobile";
          if (tz.includes("msie") || tz.includes("trident/")) return "IE";
          if (tz.includes("edge/")) return "Edge";
          if (ut(tz)) return "Firefox";
          if (tz.includes("silk/")) return "Silk";
          if (gt(tz)) return "Blackberry";
          if (Ht(tz)) return "Webos";
          if (Nt(tz)) return "Safari";
          if ((tz.includes("chrome/") || bt(tz)) && !tz.includes("edge/")) return "Chrome";
          if (Dt(tz)) return "Android";
          {
            const tz = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              sz = zz.match(tz);
            if (2 === (null === sz || void 0 === sz ? void 0 : sz.length)) return sz[1]
          }
          return "Other"
        }

        function ut() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)();
          return /firefox\//i.test(zz)
        }

        function Nt() {
          const zz = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)()).toLowerCase();
          return zz.includes("safari/") && !zz.includes("chrome/") && !zz.includes("crios/") && !zz.includes("android")
        }

        function bt() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)();
          return /crios\//i.test(zz)
        }

        function wt() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)();
          return /iemobile/i.test(zz)
        }

        function Dt() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)();
          return /android/i.test(zz)
        }

        function gt() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)();
          return /blackberry/i.test(zz)
        }

        function Ht() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)();
          return /webos/i.test(zz)
        }

        function Bt() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)();
          return /iphone|ipad|ipod/i.test(zz) || /macintosh/i.test(zz) && /mobile/i.test(zz)
        }

        function Pt() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)();
          return Bt(zz) || Dt(zz) || Ht(zz) || gt(zz) || /windows phone/i.test(zz) || wt(zz)
        }

        function rt(zz) {
          let tz, sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (zz) {
            case "Browser":
              tz = Kt((0, Fz.O)());
              break;
            case "Worker":
              tz = `${Kt((0,Fz.O)())}-${zz}`;
              break;
            default:
              tz = zz
          }
          const Xz = sz.length ? sz.join(",") : "FirebaseCore-web";
          return `${tz}/JsCore/${Wz.f}/${Xz}`
        }
        async function Yt(zz, tz) {
          return hz(zz, "GET", "/v2/recaptchaConfig", dz(zz, tz))
        }

        function xt(zz) {
          return void 0 !== zz && void 0 !== zz.getResponse
        }

        function mt(zz) {
          return void 0 !== zz && void 0 !== zz.enterprise
        }
        class Jt {
          constructor(zz) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === zz.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = zz.recaptchaKey.split("/")[3], this.emailPasswordEnabled = zz.recaptchaEnforcementState.some((zz => "EMAIL_PASSWORD_PROVIDER" === zz.provider && "OFF" !== zz.enforcementState))
          }
        }

        function It(zz) {
          return new Promise(((tz, sz) => {
            const Fz = document.createElement("script");
            Fz.setAttribute("src", zz), Fz.onload = tz, Fz.onerror = zz => {
                const tz = Yz("internal-error");
                tz.customData = zz, sz(tz)
              }, Fz.type = "text/javascript", Fz.charset = "UTF-8",
              function() {
                var zz, tz;
                return null !== (tz = null === (zz = document.getElementsByTagName("head")) || void 0 === zz ? void 0 : zz[0]) && void 0 !== tz ? tz : document
              }().appendChild(Fz)
          }))
        }

        function Ct(zz) {
          return `__${zz}${Math.floor(1e6*Math.random())}`
        }
        class et {
          constructor(zz) {
            this.type = "recaptcha-enterprise", this.auth = ct(zz)
          }
          async verify() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function sz(tz, sz, Fz) {
              const Wz = window.grecaptcha;
              mt(Wz) ? Wz.enterprise.ready((() => {
                Wz.enterprise.execute(tz, {
                  action: zz
                }).then((zz => {
                  sz(zz)
                })).catch((() => {
                  sz("NO_RECAPTCHA")
                }))
              })) : Fz(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((zz, Fz) => {
              (async function(zz) {
                if (!tz) {
                  if (null == zz.tenantId && null != zz._agentRecaptchaConfig) return zz._agentRecaptchaConfig.siteKey;
                  if (null != zz.tenantId && void 0 !== zz._tenantRecaptchaConfigs[zz.tenantId]) return zz._tenantRecaptchaConfigs[zz.tenantId].siteKey
                }
                return new Promise((async (tz, sz) => {
                  Yt(zz, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Fz => {
                    if (void 0 !== Fz.recaptchaKey) {
                      const sz = new Jt(Fz);
                      return null == zz.tenantId ? zz._agentRecaptchaConfig = sz : zz._tenantRecaptchaConfigs[zz.tenantId] = sz, tz(sz.siteKey)
                    }
                    sz(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((zz => {
                    sz(zz)
                  }))
                }))
              })(this.auth).then((Wz => {
                if (!tz && mt(window.grecaptcha)) sz(Wz, zz, Fz);
                else {
                  if ("undefined" === typeof window) return void Fz(new Error("RecaptchaVerifier is only supported in browser"));
                  It("https://www.google.com/recaptcha/enterprise.js?render=" + Wz).then((() => {
                    sz(Wz, zz, Fz)
                  })).catch((zz => {
                    Fz(zz)
                  }))
                }
              })).catch((zz => {
                Fz(zz)
              }))
            }))
          }
        }
        async function Zt(zz, tz, sz) {
          let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Wz = new et(zz);
          let Xz;
          try {
            Xz = await Wz.verify(sz)
          } catch (oz) {
            Xz = await Wz.verify(sz, !0)
          }
          const Oz = Object.assign({}, tz);
          return Fz ? Object.assign(Oz, {
            captchaResp: Xz
          }) : Object.assign(Oz, {
            captchaResponse: Xz
          }), Object.assign(Oz, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Oz, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Oz
        }
        class Gt {
          constructor(zz) {
            this.auth = zz, this.queue = []
          }
          pushCallback(zz, tz) {
            const sz = tz => new Promise(((sz, Fz) => {
              try {
                sz(zz(tz))
              } catch (Wz) {
                Fz(Wz)
              }
            }));
            sz.onAbort = tz, this.queue.push(sz);
            const Fz = this.queue.length - 1;
            return () => {
              this.queue[Fz] = () => Promise.resolve()
            }
          }
          async runMiddleware(zz) {
            if (this.auth.currentUser === zz) return;
            const tz = [];
            try {
              for (const sz of this.queue) await sz(zz), sz.onAbort && tz.push(sz.onAbort)
            } catch (sz) {
              tz.reverse();
              for (const zz of tz) try {
                zz()
              } catch (Fz) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === sz || void 0 === sz ? void 0 : sz.message
              })
            }
          }
        }
        class Tt {
          constructor(zz, tz, sz, Fz) {
            this.app = zz, this.heartbeatServiceProvider = tz, this.appCheckServiceProvider = sz, this.config = Fz, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new jt(this), this.idTokenSubscription = new jt(this), this.beforeStateQueue = new Gt(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = gz, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = zz.name, this.clientVersion = Fz.sdkClientVersion
          }
          _initializeWithPersistence(zz, tz) {
            return tz && (this._popupRedirectResolver = Xt(tz)), this._initializationPromise = this.queue((async () => {
              var sz, Fz;
              if (!this._deleted && (this.persistenceManager = await Ut.create(this, zz), !this._deleted)) {
                if (null === (sz = this._popupRedirectResolver) || void 0 === sz ? void 0 : sz._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Wz) {}
                await this.initializeCurrentUser(tz), this.lastNotifiedUid = (null === (Fz = this.currentUser) || void 0 === Fz ? void 0 : Fz.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const zz = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || zz ? this.currentUser && zz && this.currentUser.uid === zz.uid ? (this._currentUser._assign(zz), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(zz, !0) : void 0
          }
          async initializeCurrentUser(zz) {
            var tz;
            const sz = await this.assertedPersistence.getCurrentUser();
            let Fz = sz,
              Wz = !1;
            if (zz && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const sz = null === (tz = this.redirectUser) || void 0 === tz ? void 0 : tz._redirectEventId,
                Xz = null === Fz || void 0 === Fz ? void 0 : Fz._redirectEventId,
                Oz = await this.tryRedirectSignIn(zz);
              sz && sz !== Xz || !(null === Oz || void 0 === Oz ? void 0 : Oz.user) || (Fz = Oz.user, Wz = !0)
            }
            if (!Fz) return this.directlySetCurrentUser(null);
            if (!Fz._redirectEventId) {
              if (Wz) try {
                await this.beforeStateQueue.runMiddleware(Fz)
              } catch (Xz) {
                Fz = sz, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Xz)))
              }
              return Fz ? this.reloadAndSetCurrentUserOrClear(Fz) : this.directlySetCurrentUser(null)
            }
            return Iz(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Fz._redirectEventId ? this.directlySetCurrentUser(Fz) : this.reloadAndSetCurrentUserOrClear(Fz)
          }
          async tryRedirectSignIn(zz) {
            let tz = null;
            try {
              tz = await this._popupRedirectResolver._completeRedirectFn(this, zz, !0)
            } catch (sz) {
              await this._setRedirectUser(null)
            }
            return tz
          }
          async reloadAndSetCurrentUserOrClear(zz) {
            try {
              await Ez(zz)
            } catch (tz) {
              if ("auth/network-request-failed" !== (null === tz || void 0 === tz ? void 0 : tz.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(zz)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const zz = navigator;
              return zz.languages && zz.languages[0] || zz.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(zz) {
            const tz = zz ? (0, Fz.L)(zz) : null;
            return tz && Iz(tz.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(tz && tz._clone(this))
          }
          async _updateCurrentUser(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return zz && Iz(this.tenantId === zz.tenantId, this, "tenant-id-mismatch"), tz || await this.beforeStateQueue.runMiddleware(zz), this.queue((async () => {
              await this.directlySetCurrentUser(zz), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(zz) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Xt(zz))
            }))
          }
          async initializeRecaptchaConfig() {
            const zz = await Yt(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              tz = new Jt(zz);
            if (null == this.tenantId ? this._agentRecaptchaConfig = tz : this._tenantRecaptchaConfigs[this.tenantId] = tz, tz.emailPasswordEnabled) {
              new et(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(zz) {
            this._errorFactory = new Fz.d("auth", "Firebase", zz())
          }
          onAuthStateChanged(zz, tz, sz) {
            return this.registerStateListener(this.authStateSubscription, zz, tz, sz)
          }
          beforeAuthStateChanged(zz, tz) {
            return this.beforeStateQueue.pushCallback(zz, tz)
          }
          onIdTokenChanged(zz, tz, sz) {
            return this.registerStateListener(this.idTokenSubscription, zz, tz, sz)
          }
          toJSON() {
            var zz;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (zz = this._currentUser) || void 0 === zz ? void 0 : zz.toJSON()
            }
          }
          async _setRedirectUser(zz, tz) {
            const sz = await this.getOrInitRedirectPersistenceManager(tz);
            return null === zz ? sz.removeCurrentUser() : sz.setCurrentUser(zz)
          }
          async getOrInitRedirectPersistenceManager(zz) {
            if (!this.redirectPersistenceManager) {
              const tz = zz && Xt(zz) || this._popupRedirectResolver;
              Iz(tz, this, "argument-error"), this.redirectPersistenceManager = await Ut.create(this, [Xt(tz._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(zz) {
            var tz, sz;
            return this._isInitialized && await this.queue((async () => {})), (null === (tz = this._currentUser) || void 0 === tz ? void 0 : tz._redirectEventId) === zz ? this._currentUser : (null === (sz = this.redirectUser) || void 0 === sz ? void 0 : sz._redirectEventId) === zz ? this.redirectUser : null
          }
          async _persistUserIfCurrent(zz) {
            if (zz === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(zz)))
          }
          _notifyListenersIfCurrent(zz) {
            zz === this.currentUser && this.notifyAuthListeners()
          }
          _key() {
            return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
          }
          _startProactiveRefresh() {
            this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
          }
          _stopProactiveRefresh() {
            this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
          }
          get _currentUser() {
            return this.currentUser
          }
          notifyAuthListeners() {
            var zz, tz;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const sz = null !== (tz = null === (zz = this.currentUser) || void 0 === zz ? void 0 : zz.uid) && void 0 !== tz ? tz : null;
            this.lastNotifiedUid !== sz && (this.lastNotifiedUid = sz, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(zz, tz, sz, Fz) {
            if (this._deleted) return () => {};
            const Wz = "function" === typeof tz ? tz : tz.next.bind(tz),
              Xz = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Iz(Xz, this, "internal-error"), Xz.then((() => Wz(this.currentUser))), "function" === typeof tz ? zz.addObserver(tz, sz, Fz) : zz.addObserver(tz)
          }
          async directlySetCurrentUser(zz) {
            this.currentUser && this.currentUser !== zz && this._currentUser._stopProactiveRefresh(), zz && this.isProactiveRefreshEnabled && zz._startProactiveRefresh(), this.currentUser = zz, zz ? await this.assertedPersistence.setCurrentUser(zz) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(zz) {
            return this.operations = this.operations.then(zz, zz), this.operations
          }
          get assertedPersistence() {
            return Iz(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(zz) {
            zz && !this.frameworks.includes(zz) && (this.frameworks.push(zz), this.frameworks.sort(), this.clientVersion = rt(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var zz;
            const tz = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (tz["X-Firebase-gmpid"] = this.app.options.appId);
            const sz = await (null === (zz = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === zz ? void 0 : zz.getHeartbeatsHeader());
            sz && (tz["X-Firebase-Client"] = sz);
            const Fz = await this._getAppCheckToken();
            return Fz && (tz["X-Firebase-AppCheck"] = Fz), tz
          }
          async _getAppCheckToken() {
            var zz;
            const tz = await (null === (zz = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === zz ? void 0 : zz.getToken());
            return (null === tz || void 0 === tz ? void 0 : tz.error) && function(zz) {
              if (Bz.logLevel <= Oz.c.WARN) {
                for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
                Bz.warn(`Auth (${Wz.f}): ${zz}`, ...sz)
              }
            }(`Error while retrieving App Check token: ${tz.error}`), null === tz || void 0 === tz ? void 0 : tz.token
          }
        }

        function ct(zz) {
          return (0, Fz.L)(zz)
        }
        class jt {
          constructor(zz) {
            this.auth = zz, this.observer = null, this.addObserver = (0, Fz.t)((zz => this.observer = zz))
          }
          get next() {
            return Iz(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function At(zz, tz) {
          const sz = (0, Wz.x)(zz, "auth");
          if (sz.isInitialized()) {
            const zz = sz.getImmediate(),
              Wz = sz.getOptions();
            if ((0, Fz.v)(Wz, null !== tz && void 0 !== tz ? tz : {})) return zz;
            rz(zz, "already-initialized")
          }
          return sz.initialize({
            options: tz
          })
        }

        function yt(zz, tz, sz) {
          const Fz = ct(zz);
          Iz(Fz._canInitEmulator, Fz, "emulator-config-failed"), Iz(/^https?:\/\//.test(tz), Fz, "invalid-emulator-scheme");
          const Wz = !!(null === sz || void 0 === sz ? void 0 : sz.disableWarnings),
            Xz = Mt(tz),
            {
              host: Oz,
              port: oz
            } = function(zz) {
              const tz = Mt(zz),
                sz = /(\/\/)?([^?#/]+)/.exec(zz.substr(tz.length));
              if (!sz) return {
                host: "",
                port: null
              };
              const Fz = sz[2].split("@").pop() || "",
                Wz = /^(\[[^\]]+\])(:|$)/.exec(Fz);
              if (Wz) {
                const zz = Wz[1];
                return {
                  host: zz,
                  port: dt(Fz.substr(zz.length + 1))
                }
              } {
                const [zz, tz] = Fz.split(":");
                return {
                  host: zz,
                  port: dt(tz)
                }
              }
            }(tz),
            vz = null === oz ? "" : `:${oz}`;
          Fz.config.emulator = {
            url: `${Xz}//${Oz}${vz}/`
          }, Fz.settings.appVerificationDisabledForTesting = !0, Fz.emulatorConfig = Object.freeze({
            host: Oz,
            port: oz,
            protocol: Xz.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Wz
            })
          }), Wz || function() {
            function zz() {
              const zz = document.createElement("p"),
                tz = zz.style;
              zz.innerText = "Running in emulator mode. Do not use with production credentials.", tz.position = "fixed", tz.width = "100%", tz.backgroundColor = "#ffffff", tz.border = ".1em solid #000000", tz.color = "#b50000", tz.bottom = "0px", tz.left = "0px", tz.margin = "0px", tz.zIndex = "10000", tz.textAlign = "center", zz.classList.add("firebase-emulator-warning"), document.body.appendChild(zz)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", zz) : zz())
          }()
        }

        function Mt(zz) {
          const tz = zz.indexOf(":");
          return tz < 0 ? "" : zz.substr(0, tz + 1)
        }

        function dt(zz) {
          if (!zz) return null;
          const tz = Number(zz);
          return isNaN(tz) ? null : tz
        }
        class ht {
          constructor(zz, tz) {
            this.providerId = zz, this.signInMethod = tz
          }
          toJSON() {
            return Cz("not implemented")
          }
          _getIdTokenResponse(zz) {
            return Cz("not implemented")
          }
          _linkToIdToken(zz, tz) {
            return Cz("not implemented")
          }
          _getReauthenticationResolver(zz) {
            return Cz("not implemented")
          }
        }
        async function Qt(zz, tz) {
          return hz(zz, "POST", "/v1/accounts:resetPassword", dz(zz, tz))
        }
        async function kt(zz, tz) {
          return hz(zz, "POST", "/v1/accounts:update", tz)
        }
        async function it(zz, tz) {
          return kz(zz, "POST", "/v1/accounts:signInWithPassword", dz(zz, tz))
        }
        async function Lt(zz, tz) {
          return hz(zz, "POST", "/v1/accounts:sendOobCode", dz(zz, tz))
        }
        async function lt(zz, tz) {
          return Lt(zz, tz)
        }
        async function nt(zz, tz) {
          return Lt(zz, tz)
        }
        class qt extends ht {
          constructor(zz, tz, sz) {
            let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", sz), this._email = zz, this._password = tz, this._tenantId = Fz
          }
          static _fromEmailAndPassword(zz, tz) {
            return new qt(zz, tz, "password")
          }
          static _fromEmailAndCode(zz, tz) {
            return new qt(zz, tz, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(zz) {
            const tz = "string" === typeof zz ? JSON.parse(zz) : zz;
            if ((null === tz || void 0 === tz ? void 0 : tz.email) && (null === tz || void 0 === tz ? void 0 : tz.password)) {
              if ("password" === tz.signInMethod) return this._fromEmailAndPassword(tz.email, tz.password);
              if ("emailLink" === tz.signInMethod) return this._fromEmailAndCode(tz.email, tz.password, tz.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(zz) {
            var tz;
            switch (this.signInMethod) {
              case "password":
                const sz = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (tz = zz._getRecaptchaConfig()) || void 0 === tz ? void 0 : tz.emailPasswordEnabled) {
                  const tz = await Zt(zz, sz, "signInWithPassword");
                  return it(zz, tz)
                }
                return it(zz, sz).catch((async tz => {
                  if ("auth/missing-recaptcha-token" === tz.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const tz = await Zt(zz, sz, "signInWithPassword");
                    return it(zz, tz)
                  }
                  return Promise.reject(tz)
                }));
              case "emailLink":
                return async function(zz, tz) {
                  return kz(zz, "POST", "/v1/accounts:signInWithEmailLink", dz(zz, tz))
                }(zz, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                rz(zz, "internal-error")
            }
          }
          async _linkToIdToken(zz, tz) {
            switch (this.signInMethod) {
              case "password":
                return kt(zz, {
                  idToken: tz,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(zz, tz) {
                  return kz(zz, "POST", "/v1/accounts:signInWithEmailLink", dz(zz, tz))
                }(zz, {
                  idToken: tz,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                rz(zz, "internal-error")
            }
          }
          _getReauthenticationResolver(zz) {
            return this._getIdTokenResponse(zz)
          }
        }
        async function St(zz, tz) {
          return kz(zz, "POST", "/v1/accounts:signInWithIdp", dz(zz, tz))
        }
        class Vt extends ht {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(zz) {
            const tz = new Vt(zz.providerId, zz.signInMethod);
            return zz.idToken || zz.accessToken ? (zz.idToken && (tz.idToken = zz.idToken), zz.accessToken && (tz.accessToken = zz.accessToken), zz.nonce && !zz.pendingToken && (tz.nonce = zz.nonce), zz.pendingToken && (tz.pendingToken = zz.pendingToken)) : zz.oauthToken && zz.oauthTokenSecret ? (tz.accessToken = zz.oauthToken, tz.secret = zz.oauthTokenSecret) : rz("argument-error"), tz
          }
          toJSON() {
            return {
              idToken: this.idToken,
              accessToken: this.accessToken,
              secret: this.secret,
              nonce: this.nonce,
              pendingToken: this.pendingToken,
              providerId: this.providerId,
              signInMethod: this.signInMethod
            }
          }
          static fromJSON(zz) {
            const tz = "string" === typeof zz ? JSON.parse(zz) : zz,
              {
                providerId: sz,
                signInMethod: Fz
              } = tz,
              Wz = Xz(tz, ["providerId", "signInMethod"]);
            if (!sz || !Fz) return null;
            const Oz = new Vt(sz, Fz);
            return Oz.idToken = Wz.idToken || void 0, Oz.accessToken = Wz.accessToken || void 0, Oz.secret = Wz.secret, Oz.nonce = Wz.nonce, Oz.pendingToken = Wz.pendingToken || null, Oz
          }
          _getIdTokenResponse(zz) {
            return St(zz, this.buildRequest())
          }
          _linkToIdToken(zz, tz) {
            const sz = this.buildRequest();
            return sz.idToken = tz, St(zz, sz)
          }
          _getReauthenticationResolver(zz) {
            const tz = this.buildRequest();
            return tz.autoCreate = !1, St(zz, tz)
          }
          buildRequest() {
            const zz = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) zz.pendingToken = this.pendingToken;
            else {
              const tz = {};
              this.idToken && (tz.id_token = this.idToken), this.accessToken && (tz.access_token = this.accessToken), this.secret && (tz.oauth_token_secret = this.secret), tz.providerId = this.providerId, this.nonce && !this.pendingToken && (tz.nonce = this.nonce), zz.postBody = (0, Fz.gb)(tz)
            }
            return zz
          }
        }
        const Rt = {
          USER_NOT_FOUND: "user-not-found"
        };
        class pt extends ht {
          constructor(zz) {
            super("phone", "phone"), this.params = zz
          }
          static _fromVerification(zz, tz) {
            return new pt({
              verificationId: zz,
              verificationCode: tz
            })
          }
          static _fromTokenResponse(zz, tz) {
            return new pt({
              phoneNumber: zz,
              temporaryProof: tz
            })
          }
          _getIdTokenResponse(zz) {
            return async function(zz, tz) {
              return kz(zz, "POST", "/v1/accounts:signInWithPhoneNumber", dz(zz, tz))
            }(zz, this._makeVerificationRequest())
          }
          _linkToIdToken(zz, tz) {
            return async function(zz, tz) {
              const sz = await kz(zz, "POST", "/v1/accounts:signInWithPhoneNumber", dz(zz, tz));
              if (sz.temporaryProof) throw lz(zz, "account-exists-with-different-credential", sz);
              return sz
            }(zz, Object.assign({
              idToken: tz
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(zz) {
            return async function(zz, tz) {
              return kz(zz, "POST", "/v1/accounts:signInWithPhoneNumber", dz(zz, Object.assign(Object.assign({}, tz), {
                operation: "REAUTH"
              })), Rt)
            }(zz, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: zz,
              phoneNumber: tz,
              verificationId: sz,
              verificationCode: Fz
            } = this.params;
            return zz && tz ? {
              temporaryProof: zz,
              phoneNumber: tz
            } : {
              sessionInfo: sz,
              code: Fz
            }
          }
          toJSON() {
            const zz = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (zz.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (zz.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (zz.verificationCode = this.params.verificationCode), this.params.verificationId && (zz.verificationId = this.params.verificationId), zz
          }
          static fromJSON(zz) {
            "string" === typeof zz && (zz = JSON.parse(zz));
            const {
              verificationId: tz,
              verificationCode: sz,
              phoneNumber: Fz,
              temporaryProof: Wz
            } = zz;
            return sz || tz || Fz || Wz ? new pt({
              verificationId: tz,
              verificationCode: sz,
              phoneNumber: Fz,
              temporaryProof: Wz
            }) : null
          }
        }
        class ft {
          constructor(zz) {
            var tz, sz, Wz, Xz, Oz, oz;
            const vz = (0, Fz.eb)((0, Fz.y)(zz)),
              Uz = null !== (tz = vz.apiKey) && void 0 !== tz ? tz : null,
              Kz = null !== (sz = vz.oobCode) && void 0 !== sz ? sz : null,
              uz = function(zz) {
                switch (zz) {
                  case "recoverEmail":
                    return "RECOVER_EMAIL";
                  case "resetPassword":
                    return "PASSWORD_RESET";
                  case "signIn":
                    return "EMAIL_SIGNIN";
                  case "verifyEmail":
                    return "VERIFY_EMAIL";
                  case "verifyAndChangeEmail":
                    return "VERIFY_AND_CHANGE_EMAIL";
                  case "revertSecondFactorAddition":
                    return "REVERT_SECOND_FACTOR_ADDITION";
                  default:
                    return null
                }
              }(null !== (Wz = vz.mode) && void 0 !== Wz ? Wz : null);
            Iz(Uz && Kz && uz, "argument-error"), this.apiKey = Uz, this.operation = uz, this.code = Kz, this.continueUrl = null !== (Xz = vz.continueUrl) && void 0 !== Xz ? Xz : null, this.languageCode = null !== (Oz = vz.languageCode) && void 0 !== Oz ? Oz : null, this.tenantId = null !== (oz = vz.tenantId) && void 0 !== oz ? oz : null
          }
          static parseLink(zz) {
            const tz = function(zz) {
              const tz = (0, Fz.eb)((0, Fz.y)(zz)).link,
                sz = tz ? (0, Fz.eb)((0, Fz.y)(tz)).deep_link_id : null,
                Wz = (0, Fz.eb)((0, Fz.y)(zz)).deep_link_id;
              return (Wz ? (0, Fz.eb)((0, Fz.y)(Wz)).link : null) || Wz || sz || tz || zz
            }(zz);
            try {
              return new ft(tz)
            } catch (sz) {
              return null
            }
          }
        }

        function Et(zz) {
          return ft.parseLink(zz)
        }
        class zs {
          constructor() {
            this.providerId = zs.PROVIDER_ID
          }
          static credential(zz, tz) {
            return qt._fromEmailAndPassword(zz, tz)
          }
          static credentialWithLink(zz, tz) {
            const sz = ft.parseLink(tz);
            return Iz(sz, "argument-error"), qt._fromEmailAndCode(zz, sz.code, sz.tenantId)
          }
        }
        zs.PROVIDER_ID = "password", zs.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", zs.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class ts {
          constructor(zz) {
            this.providerId = zz, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(zz) {
            this.defaultLanguageCode = zz
          }
          setCustomParameters(zz) {
            return this.customParameters = zz, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class ss extends ts {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(zz) {
            return this.scopes.includes(zz) || this.scopes.push(zz), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class Fs extends ss {
          static credentialFromJSON(zz) {
            const tz = "string" === typeof zz ? JSON.parse(zz) : zz;
            return Iz("providerId" in tz && "signInMethod" in tz, "argument-error"), Vt._fromParams(tz)
          }
          credential(zz) {
            return this._credential(Object.assign(Object.assign({}, zz), {
              nonce: zz.rawNonce
            }))
          }
          _credential(zz) {
            return Iz(zz.idToken || zz.accessToken, "argument-error"), Vt._fromParams(Object.assign(Object.assign({}, zz), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(zz) {
            return Fs.oauthCredentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return Fs.oauthCredentialFromTaggedObject(zz.customData || {})
          }
          static oauthCredentialFromTaggedObject(zz) {
            let {
              _tokenResponse: tz
            } = zz;
            if (!tz) return null;
            const {
              oauthIdToken: sz,
              oauthAccessToken: Fz,
              oauthTokenSecret: Wz,
              pendingToken: Xz,
              nonce: Oz,
              providerId: oz
            } = tz;
            if (!Fz && !Wz && !sz && !Xz) return null;
            if (!oz) return null;
            try {
              return new Fs(oz)._credential({
                idToken: sz,
                accessToken: Fz,
                nonce: Oz,
                pendingToken: Xz
              })
            } catch (vz) {
              return null
            }
          }
        }
        class Ws extends ss {
          constructor() {
            super("facebook.com")
          }
          static credential(zz) {
            return Vt._fromParams({
              providerId: Ws.PROVIDER_ID,
              signInMethod: Ws.FACEBOOK_SIGN_IN_METHOD,
              accessToken: zz
            })
          }
          static credentialFromResult(zz) {
            return Ws.credentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return Ws.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: tz
            } = zz;
            if (!tz || !("oauthAccessToken" in tz)) return null;
            if (!tz.oauthAccessToken) return null;
            try {
              return Ws.credential(tz.oauthAccessToken)
            } catch (sz) {
              return null
            }
          }
        }
        Ws.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Ws.PROVIDER_ID = "facebook.com";
        class Xs extends ss {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(zz, tz) {
            return Vt._fromParams({
              providerId: Xs.PROVIDER_ID,
              signInMethod: Xs.GOOGLE_SIGN_IN_METHOD,
              idToken: zz,
              accessToken: tz
            })
          }
          static credentialFromResult(zz) {
            return Xs.credentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return Xs.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: tz
            } = zz;
            if (!tz) return null;
            const {
              oauthIdToken: sz,
              oauthAccessToken: Fz
            } = tz;
            if (!sz && !Fz) return null;
            try {
              return Xs.credential(sz, Fz)
            } catch (Wz) {
              return null
            }
          }
        }
        Xs.GOOGLE_SIGN_IN_METHOD = "google.com", Xs.PROVIDER_ID = "google.com";
        class Os extends ss {
          constructor() {
            super("github.com")
          }
          static credential(zz) {
            return Vt._fromParams({
              providerId: Os.PROVIDER_ID,
              signInMethod: Os.GITHUB_SIGN_IN_METHOD,
              accessToken: zz
            })
          }
          static credentialFromResult(zz) {
            return Os.credentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return Os.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: tz
            } = zz;
            if (!tz || !("oauthAccessToken" in tz)) return null;
            if (!tz.oauthAccessToken) return null;
            try {
              return Os.credential(tz.oauthAccessToken)
            } catch (sz) {
              return null
            }
          }
        }
        Os.GITHUB_SIGN_IN_METHOD = "github.com", Os.PROVIDER_ID = "github.com";
        class os extends ht {
          constructor(zz, tz) {
            super(zz, zz), this.pendingToken = tz
          }
          _getIdTokenResponse(zz) {
            return St(zz, this.buildRequest())
          }
          _linkToIdToken(zz, tz) {
            const sz = this.buildRequest();
            return sz.idToken = tz, St(zz, sz)
          }
          _getReauthenticationResolver(zz) {
            const tz = this.buildRequest();
            return tz.autoCreate = !1, St(zz, tz)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(zz) {
            const tz = "string" === typeof zz ? JSON.parse(zz) : zz,
              {
                providerId: sz,
                signInMethod: Fz,
                pendingToken: Wz
              } = tz;
            return sz && Fz && Wz && sz === Fz ? new os(sz, Wz) : null
          }
          static _create(zz, tz) {
            return new os(zz, tz)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class vs extends ts {
          constructor(zz) {
            Iz(zz.startsWith("saml."), "argument-error"), super(zz)
          }
          static credentialFromResult(zz) {
            return vs.samlCredentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return vs.samlCredentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromJSON(zz) {
            const tz = os.fromJSON(zz);
            return Iz(tz, "argument-error"), tz
          }
          static samlCredentialFromTaggedObject(zz) {
            let {
              _tokenResponse: tz
            } = zz;
            if (!tz) return null;
            const {
              pendingToken: sz,
              providerId: Fz
            } = tz;
            if (!sz || !Fz) return null;
            try {
              return os._create(Fz, sz)
            } catch (Wz) {
              return null
            }
          }
        }
        class Us extends ss {
          constructor() {
            super("twitter.com")
          }
          static credential(zz, tz) {
            return Vt._fromParams({
              providerId: Us.PROVIDER_ID,
              signInMethod: Us.TWITTER_SIGN_IN_METHOD,
              oauthToken: zz,
              oauthTokenSecret: tz
            })
          }
          static credentialFromResult(zz) {
            return Us.credentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return Us.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: tz
            } = zz;
            if (!tz) return null;
            const {
              oauthAccessToken: sz,
              oauthTokenSecret: Fz
            } = tz;
            if (!sz || !Fz) return null;
            try {
              return Us.credential(sz, Fz)
            } catch (Wz) {
              return null
            }
          }
        }
        async function Ks(zz, tz) {
          return kz(zz, "POST", "/v1/accounts:signUp", dz(zz, tz))
        }
        Us.TWITTER_SIGN_IN_METHOD = "twitter.com", Us.PROVIDER_ID = "twitter.com";
        class us {
          constructor(zz) {
            this.user = zz.user, this.providerId = zz.providerId, this._tokenResponse = zz._tokenResponse, this.operationType = zz.operationType
          }
          static async _fromIdTokenResponse(zz, tz, sz) {
            let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Wz = await Ft._fromIdTokenResponse(zz, sz, Fz),
              Xz = Ns(sz);
            return new us({
              user: Wz,
              providerId: Xz,
              _tokenResponse: sz,
              operationType: tz
            })
          }
          static async _forOperation(zz, tz, sz) {
            await zz._updateTokensIfNecessary(sz, !0);
            const Fz = Ns(sz);
            return new us({
              user: zz,
              providerId: Fz,
              _tokenResponse: sz,
              operationType: tz
            })
          }
        }

        function Ns(zz) {
          return zz.providerId ? zz.providerId : "phoneNumber" in zz ? "phone" : null
        }
        async function bs(zz) {
          var tz;
          const sz = ct(zz);
          if (await sz._initializationPromise, null === (tz = sz.currentUser) || void 0 === tz ? void 0 : tz.isAnonymous) return new us({
            user: sz.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Fz = await Ks(sz, {
              returnSecureToken: !0
            }),
            Wz = await us._fromIdTokenResponse(sz, "signIn", Fz, !0);
          return await sz._updateCurrentUser(Wz.user), Wz
        }
        class ws extends Fz.f {
          constructor(zz, tz, sz, Fz) {
            var Wz;
            super(tz.code, tz.message), this.operationType = sz, this.user = Fz, Object.setPrototypeOf(this, ws.prototype), this.customData = {
              appName: zz.name,
              tenantId: null !== (Wz = zz.tenantId) && void 0 !== Wz ? Wz : void 0,
              _serverResponse: tz.customData._serverResponse,
              operationType: sz
            }
          }
          static _fromErrorAndOperation(zz, tz, sz, Fz) {
            return new ws(zz, tz, sz, Fz)
          }
        }

        function Ds(zz, tz, sz, Fz) {
          return ("reauthenticate" === tz ? sz._getReauthenticationResolver(zz) : sz._getIdTokenResponse(zz)).catch((sz => {
            if ("auth/multi-factor-auth-required" === sz.code) throw ws._fromErrorAndOperation(zz, sz, tz, Fz);
            throw sz
          }))
        }

        function gs(zz) {
          return new Set(zz.map((zz => {
            let {
              providerId: tz
            } = zz;
            return tz
          })).filter((zz => !!zz)))
        }
        async function Hs(zz, tz) {
          const sz = (0, Fz.L)(zz);
          await Ps(!0, sz, tz);
          const {
            providerUserInfo: Wz
          } = await async function(zz, tz) {
            return hz(zz, "POST", "/v1/accounts:update", tz)
          }(sz.auth, {
            idToken: await sz.getIdToken(),
            deleteProvider: [tz]
          }), Xz = gs(Wz || []);
          return sz.providerData = sz.providerData.filter((zz => Xz.has(zz.providerId))), Xz.has("phone") || (sz.phoneNumber = null), await sz.auth._persistUserIfCurrent(sz), sz
        }
        async function Bs(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Fz = await Rz(zz, tz._linkToIdToken(zz.auth, await zz.getIdToken()), sz);
          return us._forOperation(zz, "link", Fz)
        }
        async function Ps(zz, tz, sz) {
          await Ez(tz);
          const Fz = !1 === zz ? "provider-already-linked" : "no-such-provider";
          Iz(gs(tz.providerData).has(sz) === zz, tz.auth, Fz)
        }
        async function rs(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Fz
          } = zz, Wz = "reauthenticate";
          try {
            const Xz = await Rz(zz, Ds(Fz, Wz, tz, zz), sz);
            Iz(Xz.idToken, Fz, "internal-error");
            const Oz = Vz(Xz.idToken);
            Iz(Oz, Fz, "internal-error");
            const {
              sub: oz
            } = Oz;
            return Iz(zz.uid === oz, Fz, "user-mismatch"), us._forOperation(zz, Wz, Xz)
          } catch (Xz) {
            throw "auth/user-not-found" === (null === Xz || void 0 === Xz ? void 0 : Xz.code) && rz(Fz, "user-mismatch"), Xz
          }
        }
        async function Ys(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Fz = "signIn",
            Wz = await Ds(zz, Fz, tz),
            Xz = await us._fromIdTokenResponse(zz, Fz, Wz);
          return sz || await zz._updateCurrentUser(Xz.user), Xz
        }
        async function xs(zz, tz) {
          return Ys(ct(zz), tz)
        }
        async function ms(zz, tz) {
          const sz = (0, Fz.L)(zz);
          return await Ps(!1, sz, tz.providerId), Bs(sz, tz)
        }
        async function Is(zz, tz) {
          return rs((0, Fz.L)(zz), tz)
        }
        async function Cs(zz, tz) {
          const sz = ct(zz),
            Fz = await async function(zz, tz) {
              return kz(zz, "POST", "/v1/accounts:signInWithCustomToken", dz(zz, tz))
            }(sz, {
              token: tz,
              returnSecureToken: !0
            }), Wz = await us._fromIdTokenResponse(sz, "signIn", Fz);
          return await sz._updateCurrentUser(Wz.user), Wz
        }
        class es {
          constructor(zz, tz) {
            this.factorId = zz, this.uid = tz.mfaEnrollmentId, this.enrollmentTime = new Date(tz.enrolledAt).toUTCString(), this.displayName = tz.displayName
          }
          static _fromServerResponse(zz, tz) {
            return "phoneInfo" in tz ? Zs._fromServerResponse(zz, tz) : "totpInfo" in tz ? Gs._fromServerResponse(zz, tz) : rz(zz, "internal-error")
          }
        }
        class Zs extends es {
          constructor(zz) {
            super("phone", zz), this.phoneNumber = zz.phoneInfo
          }
          static _fromServerResponse(zz, tz) {
            return new Zs(tz)
          }
        }
        class Gs extends es {
          constructor(zz) {
            super("totp", zz)
          }
          static _fromServerResponse(zz, tz) {
            return new Gs(tz)
          }
        }

        function Ts(zz, tz, sz) {
          var Fz;
          Iz((null === (Fz = sz.url) || void 0 === Fz ? void 0 : Fz.length) > 0, zz, "invalid-continue-uri"), Iz("undefined" === typeof sz.dynamicLinkDomain || sz.dynamicLinkDomain.length > 0, zz, "invalid-dynamic-link-domain"), tz.continueUrl = sz.url, tz.dynamicLinkDomain = sz.dynamicLinkDomain, tz.canHandleCodeInApp = sz.handleCodeInApp, sz.iOS && (Iz(sz.iOS.bundleId.length > 0, zz, "missing-ios-bundle-id"), tz.iOSBundleId = sz.iOS.bundleId), sz.android && (Iz(sz.android.packageName.length > 0, zz, "missing-android-pkg-name"), tz.androidInstallApp = sz.android.installApp, tz.androidMinimumVersionCode = sz.android.minimumVersion, tz.androidPackageName = sz.android.packageName)
        }
        async function cs(zz, tz, sz) {
          var Fz;
          const Wz = ct(zz),
            Xz = {
              requestType: "PASSWORD_RESET",
              email: tz,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Fz = Wz._getRecaptchaConfig()) || void 0 === Fz ? void 0 : Fz.emailPasswordEnabled) {
            const zz = await Zt(Wz, Xz, "getOobCode", !0);
            sz && Ts(Wz, zz, sz), await lt(Wz, zz)
          } else sz && Ts(Wz, Xz, sz), await lt(Wz, Xz).catch((async zz => {
            if ("auth/missing-recaptcha-token" !== zz.code) return Promise.reject(zz);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const zz = await Zt(Wz, Xz, "getOobCode", !0);
              sz && Ts(Wz, zz, sz), await lt(Wz, zz)
            }
          }))
        }
        async function As(zz, tz, sz) {
          await Qt((0, Fz.L)(zz), {
            oobCode: tz,
            newPassword: sz
          })
        }
        async function ys(zz, tz) {
          await async function(zz, tz) {
            return hz(zz, "POST", "/v1/accounts:update", dz(zz, tz))
          }((0, Fz.L)(zz), {
            oobCode: tz
          })
        }
        async function Ms(zz, tz) {
          const sz = (0, Fz.L)(zz),
            Wz = await Qt(sz, {
              oobCode: tz
            }),
            Xz = Wz.requestType;
          switch (Iz(Xz, sz, "internal-error"), Xz) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Iz(Wz.newEmail, sz, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Iz(Wz.mfaInfo, sz, "internal-error");
            default:
              Iz(Wz.email, sz, "internal-error")
          }
          let Oz = null;
          return Wz.mfaInfo && (Oz = es._fromServerResponse(ct(sz), Wz.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Wz.requestType ? Wz.newEmail : Wz.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Wz.requestType ? Wz.email : Wz.newEmail) || null,
              multiFactorInfo: Oz
            },
            operation: Xz
          }
        }
        async function ds(zz, tz) {
          const {
            data: sz
          } = await Ms((0, Fz.L)(zz), tz);
          return sz.email
        }
        async function hs(zz, tz, sz) {
          var Fz;
          const Wz = ct(zz),
            Xz = {
              returnSecureToken: !0,
              email: tz,
              password: sz,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Oz;
          if (null === (Fz = Wz._getRecaptchaConfig()) || void 0 === Fz ? void 0 : Fz.emailPasswordEnabled) {
            const zz = await Zt(Wz, Xz, "signUpPassword");
            Oz = Ks(Wz, zz)
          } else Oz = Ks(Wz, Xz).catch((async zz => {
            if ("auth/missing-recaptcha-token" === zz.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const zz = await Zt(Wz, Xz, "signUpPassword");
              return Ks(Wz, zz)
            }
            return Promise.reject(zz)
          }));
          const oz = await Oz.catch((zz => Promise.reject(zz))),
            vz = await us._fromIdTokenResponse(Wz, "signIn", oz);
          return await Wz._updateCurrentUser(vz.user), vz
        }

        function Qs(zz, tz, sz) {
          return xs((0, Fz.L)(zz), zs.credential(tz, sz))
        }
        async function ks(zz, tz, sz) {
          var Fz;
          const Wz = ct(zz),
            Xz = {
              requestType: "EMAIL_SIGNIN",
              email: tz,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Oz(zz, tz) {
            Iz(tz.handleCodeInApp, Wz, "argument-error"), tz && Ts(Wz, zz, tz)
          }
          if (null === (Fz = Wz._getRecaptchaConfig()) || void 0 === Fz ? void 0 : Fz.emailPasswordEnabled) {
            const zz = await Zt(Wz, Xz, "getOobCode", !0);
            Oz(zz, sz), await nt(Wz, zz)
          } else Oz(Xz, sz), await nt(Wz, Xz).catch((async zz => {
            if ("auth/missing-recaptcha-token" !== zz.code) return Promise.reject(zz);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const zz = await Zt(Wz, Xz, "getOobCode", !0);
              Oz(zz, sz), await nt(Wz, zz)
            }
          }))
        }

        function is(zz, tz) {
          const sz = ft.parseLink(tz);
          return "EMAIL_SIGNIN" === (null === sz || void 0 === sz ? void 0 : sz.operation)
        }
        async function Ls(zz, tz, sz) {
          const Wz = (0, Fz.L)(zz),
            Xz = zs.credentialWithLink(tz, sz || Zz());
          return Iz(Xz._tenantId === (Wz.tenantId || null), Wz, "tenant-id-mismatch"), xs(Wz, Xz)
        }
        async function ls(zz, tz) {
          const sz = {
              identifier: tz,
              continueUri: Gz() ? Zz() : "http://localhost"
            },
            {
              signinMethods: Wz
            } = await async function(zz, tz) {
              return hz(zz, "POST", "/v1/accounts:createAuthUri", dz(zz, tz))
            }((0, Fz.L)(zz), sz);
          return Wz || []
        }
        async function ns(zz, tz) {
          const sz = (0, Fz.L)(zz),
            Wz = {
              requestType: "VERIFY_EMAIL",
              idToken: await zz.getIdToken()
            };
          tz && Ts(sz.auth, Wz, tz);
          const {
            email: Xz
          } = await async function(zz, tz) {
            return Lt(zz, tz)
          }(sz.auth, Wz);
          Xz !== zz.email && await zz.reload()
        }
        async function as(zz, tz, sz) {
          const Wz = (0, Fz.L)(zz),
            Xz = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await zz.getIdToken(),
              newEmail: tz
            };
          sz && Ts(Wz.auth, Xz, sz);
          const {
            email: Oz
          } = await async function(zz, tz) {
            return Lt(zz, tz)
          }(Wz.auth, Xz);
          Oz !== zz.email && await zz.reload()
        }
        async function qs(zz, tz) {
          let {
            displayName: sz,
            photoURL: Wz
          } = tz;
          if (void 0 === sz && void 0 === Wz) return;
          const Xz = (0, Fz.L)(zz),
            Oz = {
              idToken: await Xz.getIdToken(),
              displayName: sz,
              photoUrl: Wz,
              returnSecureToken: !0
            },
            oz = await Rz(Xz, async function(zz, tz) {
              return hz(zz, "POST", "/v1/accounts:update", tz)
            }(Xz.auth, Oz));
          Xz.displayName = oz.displayName || null, Xz.photoURL = oz.photoUrl || null;
          const vz = Xz.providerData.find((zz => {
            let {
              providerId: tz
            } = zz;
            return "password" === tz
          }));
          vz && (vz.displayName = Xz.displayName, vz.photoURL = Xz.photoURL), await Xz._updateTokensIfNecessary(oz)
        }

        function Ss(zz, tz) {
          return Rs((0, Fz.L)(zz), tz, null)
        }

        function Vs(zz, tz) {
          return Rs((0, Fz.L)(zz), null, tz)
        }
        async function Rs(zz, tz, sz) {
          const {
            auth: Fz
          } = zz, Wz = {
            idToken: await zz.getIdToken(),
            returnSecureToken: !0
          };
          tz && (Wz.email = tz), sz && (Wz.password = sz);
          const Xz = await Rz(zz, kt(Fz, Wz));
          await zz._updateTokensIfNecessary(Xz, !0)
        }
        class ps {
          constructor(zz, tz) {
            let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = zz, this.providerId = tz, this.profile = sz
          }
        }
        class fs extends ps {
          constructor(zz, tz, sz, Fz) {
            super(zz, tz, sz), this.username = Fz
          }
        }
        class Es extends ps {
          constructor(zz, tz) {
            super(zz, "facebook.com", tz)
          }
        }
        class zF extends fs {
          constructor(zz, tz) {
            super(zz, "github.com", tz, "string" === typeof(null === tz || void 0 === tz ? void 0 : tz.login) ? null === tz || void 0 === tz ? void 0 : tz.login : null)
          }
        }
        class tF extends ps {
          constructor(zz, tz) {
            super(zz, "google.com", tz)
          }
        }
        class sF extends fs {
          constructor(zz, tz, sz) {
            super(zz, "twitter.com", tz, sz)
          }
        }

        function FF(zz) {
          const {
            user: tz,
            _tokenResponse: sz
          } = zz;
          return tz.isAnonymous && !sz ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(zz) {
            var tz, sz;
            if (!zz) return null;
            const {
              providerId: Fz
            } = zz, Wz = zz.rawUserInfo ? JSON.parse(zz.rawUserInfo) : {}, Xz = zz.isNewUser || "identitytoolkit#SignupNewUserResponse" === zz.kind;
            if (!Fz && (null === zz || void 0 === zz ? void 0 : zz.idToken)) {
              const Fz = null === (sz = null === (tz = Vz(zz.idToken)) || void 0 === tz ? void 0 : tz.firebase) || void 0 === sz ? void 0 : sz.sign_in_provider;
              if (Fz) return new ps(Xz, "anonymous" !== Fz && "custom" !== Fz ? Fz : null)
            }
            if (!Fz) return null;
            switch (Fz) {
              case "facebook.com":
                return new Es(Xz, Wz);
              case "github.com":
                return new zF(Xz, Wz);
              case "google.com":
                return new tF(Xz, Wz);
              case "twitter.com":
                return new sF(Xz, Wz, zz.screenName || null);
              case "custom":
              case "anonymous":
                return new ps(Xz, null);
              default:
                return new ps(Xz, Fz, Wz)
            }
          }(sz)
        }

        function WF(zz, tz) {
          return (0, Fz.L)(zz).setPersistence(tz)
        }

        function XF(zz) {
          return ct(zz).initializeRecaptchaConfig()
        }

        function OF(zz, tz, sz, Wz) {
          return (0, Fz.L)(zz).onIdTokenChanged(tz, sz, Wz)
        }

        function oF(zz, tz, sz) {
          return (0, Fz.L)(zz).beforeAuthStateChanged(tz, sz)
        }

        function vF(zz, tz, sz, Wz) {
          return (0, Fz.L)(zz).onAuthStateChanged(tz, sz, Wz)
        }

        function UF(zz) {
          (0, Fz.L)(zz).useDeviceLanguage()
        }

        function KF(zz, tz) {
          return (0, Fz.L)(zz).updateCurrentUser(tz)
        }

        function uF(zz) {
          return (0, Fz.L)(zz).signOut()
        }
        async function NF(zz) {
          return (0, Fz.L)(zz).delete()
        }
        class bF {
          constructor(zz, tz, sz) {
            this.type = zz, this.credential = tz, this.auth = sz
          }
          static _fromIdtoken(zz, tz) {
            return new bF("enroll", zz, tz)
          }
          static _fromMfaPendingCredential(zz) {
            return new bF("signin", zz)
          }
          toJSON() {
            const zz = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [zz]: this.credential
              }
            }
          }
          static fromJSON(zz) {
            var tz, sz;
            if (null === zz || void 0 === zz ? void 0 : zz.multiFactorSession) {
              if (null === (tz = zz.multiFactorSession) || void 0 === tz ? void 0 : tz.pendingCredential) return bF._fromMfaPendingCredential(zz.multiFactorSession.pendingCredential);
              if (null === (sz = zz.multiFactorSession) || void 0 === sz ? void 0 : sz.idToken) return bF._fromIdtoken(zz.multiFactorSession.idToken)
            }
            return null
          }
        }
        class wF {
          constructor(zz, tz, sz) {
            this.session = zz, this.hints = tz, this.signInResolver = sz
          }
          static _fromError(zz, tz) {
            const sz = ct(zz),
              Fz = tz.customData._serverResponse,
              Wz = (Fz.mfaInfo || []).map((zz => es._fromServerResponse(sz, zz)));
            Iz(Fz.mfaPendingCredential, sz, "internal-error");
            const Xz = bF._fromMfaPendingCredential(Fz.mfaPendingCredential);
            return new wF(Xz, Wz, (async zz => {
              const Wz = await zz._process(sz, Xz);
              delete Fz.mfaInfo, delete Fz.mfaPendingCredential;
              const Oz = Object.assign(Object.assign({}, Fz), {
                idToken: Wz.idToken,
                refreshToken: Wz.refreshToken
              });
              switch (tz.operationType) {
                case "signIn":
                  const zz = await us._fromIdTokenResponse(sz, tz.operationType, Oz);
                  return await sz._updateCurrentUser(zz.user), zz;
                case "reauthenticate":
                  return Iz(tz.user, sz, "internal-error"), us._forOperation(tz.user, tz.operationType, Oz);
                default:
                  rz(sz, "internal-error")
              }
            }))
          }
          async resolveSignIn(zz) {
            const tz = zz;
            return this.signInResolver(tz)
          }
        }

        function DF(zz, tz) {
          var sz;
          const Wz = (0, Fz.L)(zz),
            Xz = tz;
          return Iz(tz.customData.operationType, Wz, "argument-error"), Iz(null === (sz = Xz.customData._serverResponse) || void 0 === sz ? void 0 : sz.mfaPendingCredential, Wz, "argument-error"), wF._fromError(Wz, Xz)
        }
        class gF {
          constructor(zz) {
            this.user = zz, this.enrolledFactors = [], zz._onReload((tz => {
              tz.mfaInfo && (this.enrolledFactors = tz.mfaInfo.map((tz => es._fromServerResponse(zz.auth, tz))))
            }))
          }
          static _fromUser(zz) {
            return new gF(zz)
          }
          async getSession() {
            return bF._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(zz, tz) {
            const sz = zz,
              Fz = await this.getSession(),
              Wz = await Rz(this.user, sz._process(this.user.auth, Fz, tz));
            return await this.user._updateTokensIfNecessary(Wz), this.user.reload()
          }
          async unenroll(zz) {
            const tz = "string" === typeof zz ? zz : zz.uid,
              sz = await this.user.getIdToken();
            try {
              const zz = await Rz(this.user, (Fz = this.user.auth, Wz = {
                idToken: sz,
                mfaEnrollmentId: tz
              }, hz(Fz, "POST", "/v2/accounts/mfaEnrollment:withdraw", dz(Fz, Wz))));
              this.enrolledFactors = this.enrolledFactors.filter((zz => {
                let {
                  uid: sz
                } = zz;
                return sz !== tz
              })), await this.user._updateTokensIfNecessary(zz), await this.user.reload()
            } catch (Xz) {
              throw Xz
            }
            var Fz, Wz
          }
        }
        const HF = new WeakMap;

        function BF(zz) {
          const tz = (0, Fz.L)(zz);
          return HF.has(tz) || HF.set(tz, gF._fromUser(tz)), HF.get(tz)
        }
        const PF = "__sak";
        class rF {
          constructor(zz, tz) {
            this.storageRetriever = zz, this.type = tz
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(PF, "1"), this.storage.removeItem(PF), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (zz) {
              return Promise.resolve(!1)
            }
          }
          _set(zz, tz) {
            return this.storage.setItem(zz, JSON.stringify(tz)), Promise.resolve()
          }
          _get(zz) {
            const tz = this.storage.getItem(zz);
            return Promise.resolve(tz ? JSON.parse(tz) : null)
          }
          _remove(zz) {
            return this.storage.removeItem(zz), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class YF extends rF {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (zz, tz) => this.onStorageEvent(zz, tz), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const zz = (0, Fz.O)();
              return Nt(zz) || Bt(zz)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (zz) {
                return !1
              }
            }(), this.fallbackToPolling = Pt(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(zz) {
            for (const tz of Object.keys(this.listeners)) {
              const sz = this.storage.getItem(tz),
                Fz = this.localCache[tz];
              sz !== Fz && zz(tz, Fz, sz)
            }
          }
          onStorageEvent(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!zz.key) return void this.forAllChangedKeys(((zz, tz, sz) => {
              this.notifyListeners(zz, sz)
            }));
            const sz = zz.key;
            if (tz ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Fz = this.storage.getItem(sz);
              if (zz.newValue !== Fz) null !== zz.newValue ? this.storage.setItem(sz, zz.newValue) : this.storage.removeItem(sz);
              else if (this.localCache[sz] === zz.newValue && !tz) return
            }
            const Wz = () => {
                const zz = this.storage.getItem(sz);
                (tz || this.localCache[sz] !== zz) && this.notifyListeners(sz, zz)
              },
              Xz = this.storage.getItem(sz);
            (0, Fz.Y)() && 10 === document.documentMode && Xz !== zz.newValue && zz.newValue !== zz.oldValue ? setTimeout(Wz, 10) : Wz()
          }
          notifyListeners(zz, tz) {
            this.localCache[zz] = tz;
            const sz = this.listeners[zz];
            if (sz)
              for (const Fz of Array.from(sz)) Fz(tz ? JSON.parse(tz) : tz)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((zz, tz, sz) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: zz,
                  oldValue: tz,
                  newValue: sz
                }), !0)
              }))
            }), 1e3)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          attachListener() {
            window.addEventListener("storage", this.boundEventHandler)
          }
          detachListener() {
            window.removeEventListener("storage", this.boundEventHandler)
          }
          _addListener(zz, tz) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[zz] || (this.listeners[zz] = new Set, this.localCache[zz] = this.storage.getItem(zz)), this.listeners[zz].add(tz)
          }
          _removeListener(zz, tz) {
            this.listeners[zz] && (this.listeners[zz].delete(tz), 0 === this.listeners[zz].size && delete this.listeners[zz]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(zz, tz) {
            await super._set(zz, tz), this.localCache[zz] = JSON.stringify(tz)
          }
          async _get(zz) {
            const tz = await super._get(zz);
            return this.localCache[zz] = JSON.stringify(tz), tz
          }
          async _remove(zz) {
            await super._remove(zz), delete this.localCache[zz]
          }
        }
        YF.type = "LOCAL";
        const xF = YF;
        class mF extends rF {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(zz, tz) {}
          _removeListener(zz, tz) {}
        }
        mF.type = "SESSION";
        const JF = mF;
        class IF {
          constructor(zz) {
            this.eventTarget = zz, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(zz) {
            const tz = this.receivers.find((tz => tz.isListeningto(zz)));
            if (tz) return tz;
            const sz = new IF(zz);
            return this.receivers.push(sz), sz
          }
          isListeningto(zz) {
            return this.eventTarget === zz
          }
          async handleEvent(zz) {
            const tz = zz,
              {
                eventId: sz,
                eventType: Fz,
                data: Wz
              } = tz.data,
              Xz = this.handlersMap[Fz];
            if (!(null === Xz || void 0 === Xz ? void 0 : Xz.size)) return;
            tz.ports[0].postMessage({
              status: "ack",
              eventId: sz,
              eventType: Fz
            });
            const Oz = Array.from(Xz).map((async zz => zz(tz.origin, Wz))),
              oz = await
            function(zz) {
              return Promise.all(zz.map((async zz => {
                try {
                  return {
                    fulfilled: !0,
                    value: await zz
                  }
                } catch (tz) {
                  return {
                    fulfilled: !1,
                    reason: tz
                  }
                }
              })))
            }(Oz);
            tz.ports[0].postMessage({
              status: "done",
              eventId: sz,
              eventType: Fz,
              response: oz
            })
          }
          _subscribe(zz, tz) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[zz] || (this.handlersMap[zz] = new Set), this.handlersMap[zz].add(tz)
          }
          _unsubscribe(zz, tz) {
            this.handlersMap[zz] && tz && this.handlersMap[zz].delete(tz), tz && 0 !== this.handlersMap[zz].size || delete this.handlersMap[zz], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function CF() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            sz = "";
          for (let Fz = 0; Fz < tz; Fz++) sz += Math.floor(10 * Math.random());
          return zz + sz
        }
        IF.receivers = [];
        class eF {
          constructor(zz) {
            this.target = zz, this.handlers = new Set
          }
          removeMessageHandler(zz) {
            zz.messageChannel && (zz.messageChannel.port1.removeEventListener("message", zz.nB), zz.messageChannel.port1.close()), this.handlers.delete(zz)
          }
          async _send(zz, tz) {
            let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Fz = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Fz) throw new Error("connection_unavailable");
            let Wz, Xz;
            return new Promise(((Oz, oz) => {
              const vz = CF("", 20);
              Fz.port1.start();
              const Uz = setTimeout((() => {
                oz(new Error("unsupported_event"))
              }), sz);
              Xz = {
                messageChannel: Fz,
                nB(zz) {
                  const tz = zz;
                  if (tz.data.eventId === vz) switch (tz.data.status) {
                    case "ack":
                      clearTimeout(Uz), Wz = setTimeout((() => {
                        oz(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Wz), Oz(tz.data.response);
                      break;
                    default:
                      clearTimeout(Uz), clearTimeout(Wz), oz(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Xz), Fz.port1.addEventListener("message", Xz.nB), this.target.postMessage({
                eventType: zz,
                eventId: vz,
                data: tz
              }, [Fz.port2])
            })).finally((() => {
              Xz && this.removeMessageHandler(Xz)
            }))
          }
        }

        function ZF() {
          return window
        }

        function GF() {
          return "undefined" !== typeof ZF().WorkerGlobalScope && "function" === typeof ZF().importScripts
        }
        const TF = "firebaseLocalStorageDb",
          cF = "firebaseLocalStorage",
          jF = "fbase_key";
        class AF {
          constructor(zz) {
            this.request = zz
          }
          toPromise() {
            return new Promise(((zz, tz) => {
              this.request.addEventListener("success", (() => {
                zz(this.request.result)
              })), this.request.addEventListener("error", (() => {
                tz(this.request.error)
              }))
            }))
          }
        }

        function yF(zz, tz) {
          return zz.transaction([cF], tz ? "readwrite" : "readonly").objectStore(cF)
        }

        function MF() {
          const zz = indexedDB.open(TF, 1);
          return new Promise(((tz, sz) => {
            zz.addEventListener("error", (() => {
              sz(zz.error)
            })), zz.addEventListener("upgradeneeded", (() => {
              const tz = zz.result;
              try {
                tz.createObjectStore(cF, {
                  keyPath: jF
                })
              } catch (Fz) {
                sz(Fz)
              }
            })), zz.addEventListener("success", (async () => {
              const sz = zz.result;
              sz.objectStoreNames.contains(cF) ? tz(sz) : (sz.close(), await
                function() {
                  const zz = indexedDB.deleteDatabase(TF);
                  return new AF(zz).toPromise()
                }(), tz(await MF()))
            }))
          }))
        }
        async function dF(zz, tz, sz) {
          const Fz = yF(zz, !0).put({
            [jF]: tz,
            value: sz
          });
          return new AF(Fz).toPromise()
        }

        function hF(zz, tz) {
          const sz = yF(zz, !0).delete(tz);
          return new AF(sz).toPromise()
        }
        class QF {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await MF()), this.db
          }
          async _withRetries(zz) {
            let tz = 0;
            for (;;) try {
              const tz = await this._openDb();
              return await zz(tz)
            } catch (sz) {
              if (tz++ > 3) throw sz;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return GF() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = IF._getInstance(GF() ? self : null), this.receiver._subscribe("keyChanged", (async (zz, tz) => ({
              keyProcessed: (await this._poll()).includes(tz.key)
            }))), this.receiver._subscribe("ping", (async (zz, tz) => ["keyChanged"]))
          }
          async initializeSender() {
            var zz, tz;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (zz) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new eF(this.activeServiceWorker);
            const sz = await this.sender._send("ping", {}, 800);
            sz && (null === (zz = sz[0]) || void 0 === zz ? void 0 : zz.fulfilled) && (null === (tz = sz[0]) || void 0 === tz ? void 0 : tz.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(zz) {
            if (this.sender && this.activeServiceWorker && function() {
                var zz;
                return (null === (zz = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === zz ? void 0 : zz.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: zz
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (tz) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const zz = await MF();
              return await dF(zz, PF, "1"), await hF(zz, PF), !0
            } catch (zz) {}
            return !1
          }
          async _withPendingWrite(zz) {
            this.pendingWrites++;
            try {
              await zz()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(zz, tz) {
            return this._withPendingWrite((async () => (await this._withRetries((sz => dF(sz, zz, tz))), this.localCache[zz] = tz, this.notifyServiceWorker(zz))))
          }
          async _get(zz) {
            const tz = await this._withRetries((tz => async function(zz, tz) {
              const sz = yF(zz, !1).get(tz),
                Fz = await new AF(sz).toPromise();
              return void 0 === Fz ? null : Fz.value
            }(tz, zz)));
            return this.localCache[zz] = tz, tz
          }
          async _remove(zz) {
            return this._withPendingWrite((async () => (await this._withRetries((tz => hF(tz, zz))), delete this.localCache[zz], this.notifyServiceWorker(zz))))
          }
          async _poll() {
            const zz = await this._withRetries((zz => {
              const tz = yF(zz, !1).getAll();
              return new AF(tz).toPromise()
            }));
            if (!zz) return [];
            if (0 !== this.pendingWrites) return [];
            const tz = [],
              sz = new Set;
            for (const {
                fbase_key: Fz,
                value: Wz
              }
              of zz) sz.add(Fz), JSON.stringify(this.localCache[Fz]) !== JSON.stringify(Wz) && (this.notifyListeners(Fz, Wz), tz.push(Fz));
            for (const Fz of Object.keys(this.localCache)) this.localCache[Fz] && !sz.has(Fz) && (this.notifyListeners(Fz, null), tz.push(Fz));
            return tz
          }
          notifyListeners(zz, tz) {
            this.localCache[zz] = tz;
            const sz = this.listeners[zz];
            if (sz)
              for (const Fz of Array.from(sz)) Fz(tz)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(zz, tz) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[zz] || (this.listeners[zz] = new Set, this._get(zz)), this.listeners[zz].add(tz)
          }
          _removeListener(zz, tz) {
            this.listeners[zz] && (this.listeners[zz].delete(tz), 0 === this.listeners[zz].size && delete this.listeners[zz]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        QF.type = "LOCAL";
        const kF = QF;
        const iF = 1e12;
        class LF {
          constructor(zz) {
            this.auth = zz, this.counter = iF, this._widgets = new Map
          }
          render(zz, tz) {
            const sz = this.counter;
            return this._widgets.set(sz, new lF(zz, this.auth.name, tz || {})), this.counter++, sz
          }
          reset(zz) {
            var tz;
            const sz = zz || iF;
            null === (tz = this._widgets.get(sz)) || void 0 === tz || tz.delete(), this._widgets.delete(sz)
          }
          getResponse(zz) {
            var tz;
            const sz = zz || iF;
            return (null === (tz = this._widgets.get(sz)) || void 0 === tz ? void 0 : tz.getResponse()) || ""
          }
          async execute(zz) {
            var tz;
            const sz = zz || iF;
            return null === (tz = this._widgets.get(sz)) || void 0 === tz || tz.execute(), ""
          }
        }
        class lF {
          constructor(zz, tz, sz) {
            this.params = sz, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Fz = "string" === typeof zz ? document.getElementById(zz) : zz;
            Iz(Fz, "argument-error", {
              appName: tz
            }), this.container = Fz, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(zz) {
                const tz = [],
                  sz = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Fz = 0; Fz < zz; Fz++) tz.push(sz.charAt(Math.floor(Math.random() * sz.length)));
                return tz.join("")
              }(50);
              const {
                callback: zz,
                "expired-callback": tz
              } = this.params;
              if (zz) try {
                zz(this.responseToken)
              } catch (sz) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, tz) try {
                  tz()
                } catch (sz) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const nF = Ct("rcb"),
          aF = new cz(3e4, 6e4);
        class qF {
          constructor() {
            var zz;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (zz = ZF().grecaptcha) || void 0 === zz ? void 0 : zz.render)
          }
          load(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Iz(function(zz) {
              return zz.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(zz)
            }(tz), zz, "argument-error"), this.shouldResolveImmediately(tz) && xt(ZF().grecaptcha) ? Promise.resolve(ZF().grecaptcha) : new Promise(((sz, Wz) => {
              const Xz = ZF().setTimeout((() => {
                Wz(Yz(zz, "network-request-failed"))
              }), aF.get());
              ZF()[nF] = () => {
                ZF().clearTimeout(Xz), delete ZF()[nF];
                const Fz = ZF().grecaptcha;
                if (!Fz || !xt(Fz)) return void Wz(Yz(zz, "internal-error"));
                const Oz = Fz.render;
                Fz.render = (zz, tz) => {
                  const sz = Oz(zz, tz);
                  return this.counter++, sz
                }, this.hostLanguage = tz, sz(Fz)
              };
              It(`https://www.google.com/recaptcha/api.js??${(0,Fz.gb)({onload:nF,render:"explicit",hl:tz})}`).catch((() => {
                clearTimeout(Xz), Wz(Yz(zz, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(zz) {
            var tz;
            return !!(null === (tz = ZF().grecaptcha) || void 0 === tz ? void 0 : tz.render) && (zz === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class SF {
          async load(zz) {
            return new LF(zz)
          }
          clearedOneInstance() {}
        }
        const VF = "recaptcha",
          RF = {
            theme: "light",
            type: "image"
          };
        class pF {
          constructor(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, RF),
              sz = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = tz, this.type = VF, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = ct(sz), this.isInvisible = "invisible" === this.parameters.size, Iz("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Fz = "string" === typeof zz ? document.getElementById(zz) : zz;
            Iz(Fz, this.auth, "argument-error"), this.container = Fz, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new SF : new qF, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const zz = await this.render(),
              tz = this.getAssertedRecaptcha(),
              sz = tz.getResponse(zz);
            return sz || new Promise((sz => {
              const Fz = zz => {
                zz && (this.tokenChangeListeners.delete(Fz), sz(zz))
              };
              this.tokenChangeListeners.add(Fz), this.isInvisible && tz.execute(zz)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (zz) {
              return Promise.reject(zz)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((zz => {
              throw this.renderPromise = null, zz
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((zz => {
              this.container.removeChild(zz)
            }))
          }
          validateStartingState() {
            Iz(!this.parameters.sitekey, this.auth, "argument-error"), Iz(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Iz("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(zz) {
            return tz => {
              if (this.tokenChangeListeners.forEach((zz => zz(tz))), "function" === typeof zz) zz(tz);
              else if ("string" === typeof zz) {
                const sz = ZF()[zz];
                "function" === typeof sz && sz(tz)
              }
            }
          }
          assertNotDestroyed() {
            Iz(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let zz = this.container;
              if (!this.isInvisible) {
                const tz = document.createElement("div");
                zz.appendChild(tz), zz = tz
              }
              this.widgetId = this.getAssertedRecaptcha().render(zz, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            Iz(Gz() && !GF(), this.auth, "internal-error"), await
            function() {
              let zz = null;
              return new Promise((tz => {
                "complete" !== document.readyState ? (zz = () => tz(), window.addEventListener("load", zz)) : tz()
              })).catch((tz => {
                throw zz && window.removeEventListener("load", zz), tz
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const zz = await async function(zz) {
              return (await hz(zz, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Iz(zz, this.auth, "internal-error"), this.parameters.sitekey = zz
          }
          getAssertedRecaptcha() {
            return Iz(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class fF {
          constructor(zz, tz) {
            this.verificationId = zz, this.onConfirmation = tz
          }
          confirm(zz) {
            const tz = pt._fromVerification(this.verificationId, zz);
            return this.onConfirmation(tz)
          }
        }
        async function EF(zz, tz, sz) {
          const Wz = ct(zz),
            Xz = await sW(Wz, tz, (0, Fz.L)(sz));
          return new fF(Xz, (zz => xs(Wz, zz)))
        }
        async function zW(zz, tz, sz) {
          const Wz = (0, Fz.L)(zz);
          await Ps(!1, Wz, "phone");
          const Xz = await sW(Wz.auth, tz, (0, Fz.L)(sz));
          return new fF(Xz, (zz => ms(Wz, zz)))
        }
        async function tW(zz, tz, sz) {
          const Wz = (0, Fz.L)(zz),
            Xz = await sW(Wz.auth, tz, (0, Fz.L)(sz));
          return new fF(Xz, (zz => Is(Wz, zz)))
        }
        async function sW(zz, tz, sz) {
          var Fz;
          const Wz = await sz.verify();
          try {
            let Xz;
            if (Iz("string" === typeof Wz, zz, "argument-error"), Iz(sz.type === VF, zz, "argument-error"), Xz = "string" === typeof tz ? {
                phoneNumber: tz
              } : tz, "session" in Xz) {
              const tz = Xz.session;
              if ("phoneNumber" in Xz) {
                Iz("enroll" === tz.type, zz, "internal-error");
                const sz = await
                function(zz, tz) {
                  return hz(zz, "POST", "/v2/accounts/mfaEnrollment:start", dz(zz, tz))
                }(zz, {
                  idToken: tz.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Xz.phoneNumber,
                    recaptchaToken: Wz
                  }
                });
                return sz.phoneSessionInfo.sessionInfo
              } {
                Iz("signin" === tz.type, zz, "internal-error");
                const sz = (null === (Fz = Xz.multiFactorHint) || void 0 === Fz ? void 0 : Fz.uid) || Xz.multiFactorUid;
                Iz(sz, zz, "missing-multi-factor-info");
                const Oz = await
                function(zz, tz) {
                  return hz(zz, "POST", "/v2/accounts/mfaSignIn:start", dz(zz, tz))
                }(zz, {
                  mfaPendingCredential: tz.credential,
                  mfaEnrollmentId: sz,
                  phoneSignInInfo: {
                    recaptchaToken: Wz
                  }
                });
                return Oz.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: tz
              } = await async function(zz, tz) {
                return hz(zz, "POST", "/v1/accounts:sendVerificationCode", dz(zz, tz))
              }(zz, {
                phoneNumber: Xz.phoneNumber,
                recaptchaToken: Wz
              });
              return tz
            }
          } finally {
            sz._reset()
          }
        }
        async function FW(zz, tz) {
          await Bs((0, Fz.L)(zz), tz)
        }
        class WW {
          constructor(zz) {
            this.providerId = WW.PROVIDER_ID, this.auth = ct(zz)
          }
          verifyPhoneNumber(zz, tz) {
            return sW(this.auth, zz, (0, Fz.L)(tz))
          }
          static credential(zz, tz) {
            return pt._fromVerification(zz, tz)
          }
          static credentialFromResult(zz) {
            const tz = zz;
            return WW.credentialFromTaggedObject(tz)
          }
          static credentialFromError(zz) {
            return WW.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: tz
            } = zz;
            if (!tz) return null;
            const {
              phoneNumber: sz,
              temporaryProof: Fz
            } = tz;
            return sz && Fz ? pt._fromTokenResponse(sz, Fz) : null
          }
        }

        function XW(zz, tz) {
          return tz ? Xt(tz) : (Iz(zz._popupRedirectResolver, zz, "argument-error"), zz._popupRedirectResolver)
        }
        WW.PROVIDER_ID = "phone", WW.PHONE_SIGN_IN_METHOD = "phone";
        class OW extends ht {
          constructor(zz) {
            super("custom", "custom"), this.params = zz
          }
          _getIdTokenResponse(zz) {
            return St(zz, this._buildIdpRequest())
          }
          _linkToIdToken(zz, tz) {
            return St(zz, this._buildIdpRequest(tz))
          }
          _getReauthenticationResolver(zz) {
            return St(zz, this._buildIdpRequest())
          }
          _buildIdpRequest(zz) {
            const tz = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return zz && (tz.idToken = zz), tz
          }
        }

        function oW(zz) {
          return Ys(zz.auth, new OW(zz), zz.bypassAuthState)
        }

        function vW(zz) {
          const {
            auth: tz,
            user: sz
          } = zz;
          return Iz(sz, tz, "internal-error"), rs(sz, new OW(zz), zz.bypassAuthState)
        }
        async function UW(zz) {
          const {
            auth: tz,
            user: sz
          } = zz;
          return Iz(sz, tz, "internal-error"), Bs(sz, new OW(zz), zz.bypassAuthState)
        }
        class KW {
          constructor(zz, tz, sz, Fz) {
            let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = zz, this.resolver = sz, this.user = Fz, this.bypassAuthState = Wz, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(tz) ? tz : [tz]
          }
          execute() {
            return new Promise((async (zz, tz) => {
              this.pendingPromise = {
                resolve: zz,
                reject: tz
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (sz) {
                this.reject(sz)
              }
            }))
          }
          async onAuthEvent(zz) {
            const {
              urlResponse: tz,
              sessionId: sz,
              postBody: Fz,
              tenantId: Wz,
              error: Xz,
              type: Oz
            } = zz;
            if (Xz) return void this.reject(Xz);
            const oz = {
              auth: this.auth,
              requestUri: tz,
              sessionId: sz,
              tenantId: Wz || void 0,
              postBody: Fz || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Oz)(oz))
            } catch (vz) {
              this.reject(vz)
            }
          }
          onError(zz) {
            this.reject(zz)
          }
          getIdpTask(zz) {
            switch (zz) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return oW;
              case "linkViaPopup":
              case "linkViaRedirect":
                return UW;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return vW;
              default:
                rz(this.auth, "internal-error")
            }
          }
          resolve(zz) {
            ez(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(zz), this.unregisterAndCleanUp()
          }
          reject(zz) {
            ez(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(zz), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const uW = new cz(2e3, 1e4);
        async function NW(zz, tz, sz) {
          const Fz = ct(zz);
          mz(zz, tz, ts);
          const Wz = XW(Fz, sz);
          return new DW(Fz, "signInViaPopup", tz, Wz).executeNotNull()
        }
        async function bW(zz, tz, sz) {
          const Wz = (0, Fz.L)(zz);
          mz(Wz.auth, tz, ts);
          const Xz = XW(Wz.auth, sz);
          return new DW(Wz.auth, "reauthViaPopup", tz, Xz, Wz).executeNotNull()
        }
        async function wW(zz, tz, sz) {
          const Wz = (0, Fz.L)(zz);
          mz(Wz.auth, tz, ts);
          const Xz = XW(Wz.auth, sz);
          return new DW(Wz.auth, "linkViaPopup", tz, Xz, Wz).executeNotNull()
        }
        class DW extends KW {
          constructor(zz, tz, sz, Fz, Wz) {
            super(zz, tz, Fz, Wz), this.provider = sz, this.authWindow = null, this.pollId = null, DW.currentPopupAction && DW.currentPopupAction.cancel(), DW.currentPopupAction = this
          }
          async executeNotNull() {
            const zz = await this.execute();
            return Iz(zz, this.auth, "internal-error"), zz
          }
          async onExecution() {
            ez(1 === this.filter.length, "Popup operations only handle one event");
            const zz = CF();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], zz), this.authWindow.associatedEvent = zz, this.resolver._originValidation(this.auth).catch((zz => {
              this.reject(zz)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (zz => {
              zz || this.reject(Yz(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var zz;
            return (null === (zz = this.authWindow) || void 0 === zz ? void 0 : zz.associatedEvent) || null
          }
          cancel() {
            this.reject(Yz(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, DW.currentPopupAction = null
          }
          pollUserCancellation() {
            const zz = () => {
              var tz, sz;
              (null === (sz = null === (tz = this.authWindow) || void 0 === tz ? void 0 : tz.window) || void 0 === sz ? void 0 : sz.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Yz(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(zz, uW.get())
            };
            zz()
          }
        }
        DW.currentPopupAction = null;
        const gW = "pendingRedirect",
          HW = new Map;
        class BW extends KW {
          constructor(zz, tz) {
            super(zz, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], tz, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let zz = HW.get(this.auth._key());
            if (!zz) {
              try {
                const tz = await async function(zz, tz) {
                  const sz = xW(tz),
                    Fz = YW(zz);
                  if (!await Fz._isAvailable()) return !1;
                  const Wz = "true" === await Fz._get(sz);
                  return await Fz._remove(sz), Wz
                }(this.resolver, this.auth) ? await super.execute() : null;
                zz = () => Promise.resolve(tz)
              } catch (tz) {
                zz = () => Promise.reject(tz)
              }
              HW.set(this.auth._key(), zz)
            }
            return this.bypassAuthState || HW.set(this.auth._key(), (() => Promise.resolve(null))), zz()
          }
          async onAuthEvent(zz) {
            if ("signInViaRedirect" === zz.type) return super.onAuthEvent(zz);
            if ("unknown" !== zz.type) {
              if (zz.eventId) {
                const tz = await this.auth._redirectUserForId(zz.eventId);
                if (tz) return this.user = tz, super.onAuthEvent(zz);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function PW(zz, tz) {
          return YW(zz)._set(xW(tz), "true")
        }

        function rW(zz, tz) {
          HW.set(zz._key(), tz)
        }

        function YW(zz) {
          return Xt(zz._redirectPersistence)
        }

        function xW(zz) {
          return vt(gW, zz.config.apiKey, zz.name)
        }

        function mW(zz, tz, sz) {
          return async function(zz, tz, sz) {
            const Fz = ct(zz);
            mz(zz, tz, ts), await Fz._initializationPromise;
            const Wz = XW(Fz, sz);
            return await PW(Wz, Fz), Wz._openRedirect(Fz, tz, "signInViaRedirect")
          }(zz, tz, sz)
        }

        function JW(zz, tz, sz) {
          return async function(zz, tz, sz) {
            const Wz = (0, Fz.L)(zz);
            mz(Wz.auth, tz, ts), await Wz.auth._initializationPromise;
            const Xz = XW(Wz.auth, sz);
            await PW(Xz, Wz.auth);
            const Oz = await ZW(Wz);
            return Xz._openRedirect(Wz.auth, tz, "reauthViaRedirect", Oz)
          }(zz, tz, sz)
        }

        function IW(zz, tz, sz) {
          return async function(zz, tz, sz) {
            const Wz = (0, Fz.L)(zz);
            mz(Wz.auth, tz, ts), await Wz.auth._initializationPromise;
            const Xz = XW(Wz.auth, sz);
            await Ps(!1, Wz, tz.providerId), await PW(Xz, Wz.auth);
            const Oz = await ZW(Wz);
            return Xz._openRedirect(Wz.auth, tz, "linkViaRedirect", Oz)
          }(zz, tz, sz)
        }
        async function CW(zz, tz) {
          return await ct(zz)._initializationPromise, eW(zz, tz, !1)
        }
        async function eW(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Fz = ct(zz),
            Wz = XW(Fz, tz),
            Xz = new BW(Fz, Wz, sz),
            Oz = await Xz.execute();
          return Oz && !sz && (delete Oz.user._redirectEventId, await Fz._persistUserIfCurrent(Oz.user), await Fz._setRedirectUser(null, tz)), Oz
        }
        async function ZW(zz) {
          const tz = CF(`${zz.uid}:::`);
          return zz._redirectEventId = tz, await zz.auth._setRedirectUser(zz), await zz.auth._persistUserIfCurrent(zz), tz
        }
        class GW {
          constructor(zz) {
            this.auth = zz, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(zz) {
            this.consumers.add(zz), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, zz) && (this.sendToConsumer(this.queuedRedirectEvent, zz), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(zz) {
            this.consumers.delete(zz)
          }
          onEvent(zz) {
            if (this.hasEventBeenHandled(zz)) return !1;
            let tz = !1;
            return this.consumers.forEach((sz => {
              this.isEventForConsumer(zz, sz) && (tz = !0, this.sendToConsumer(zz, sz), this.saveEventToCache(zz))
            })), this.hasHandledPotentialRedirect || ! function(zz) {
              switch (zz.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return cW(zz);
                default:
                  return !1
              }
            }(zz) || (this.hasHandledPotentialRedirect = !0, tz || (this.queuedRedirectEvent = zz, tz = !0)), tz
          }
          sendToConsumer(zz, tz) {
            var sz;
            if (zz.error && !cW(zz)) {
              const Fz = (null === (sz = zz.error.code) || void 0 === sz ? void 0 : sz.split("auth/")[1]) || "internal-error";
              tz.onError(Yz(this.auth, Fz))
            } else tz.onAuthEvent(zz)
          }
          isEventForConsumer(zz, tz) {
            const sz = null === tz.eventId || !!zz.eventId && zz.eventId === tz.eventId;
            return tz.filter.includes(zz.type) && sz
          }
          hasEventBeenHandled(zz) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(TW(zz))
          }
          saveEventToCache(zz) {
            this.cachedEventUids.add(TW(zz)), this.lastProcessedEventTime = Date.now()
          }
        }

        function TW(zz) {
          return [zz.type, zz.eventId, zz.sessionId, zz.tenantId].filter((zz => zz)).join("-")
        }

        function cW(zz) {
          let {
            type: tz,
            error: sz
          } = zz;
          return "unknown" === tz && "auth/no-auth-event" === (null === sz || void 0 === sz ? void 0 : sz.code)
        }
        const jW = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          AW = /^https?/;
        async function yW(zz) {
          if (zz.config.emulator) return;
          const {
            authorizedDomains: tz
          } = await async function(zz) {
            return hz(zz, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(zz);
          for (const Fz of tz) try {
            if (MW(Fz)) return
          } catch (sz) {}
          rz(zz, "unauthorized-domain")
        }

        function MW(zz) {
          const tz = Zz(),
            {
              protocol: sz,
              hostname: Fz
            } = new URL(tz);
          if (zz.startsWith("chrome-extension://")) {
            const Wz = new URL(zz);
            return "" === Wz.hostname && "" === Fz ? "chrome-extension:" === sz && zz.replace("chrome-extension://", "") === tz.replace("chrome-extension://", "") : "chrome-extension:" === sz && Wz.hostname === Fz
          }
          if (!AW.test(sz)) return !1;
          if (jW.test(zz)) return Fz === zz;
          const Wz = zz.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Wz + "|" + Wz + ")$", "i").test(Fz)
        }
        const dW = new cz(3e4, 6e4);

        function hW() {
          const zz = ZF().___jsl;
          if (null === zz || void 0 === zz ? void 0 : zz.H)
            for (const tz of Object.keys(zz.H))
              if (zz.H[tz].r = zz.H[tz].r || [], zz.H[tz].L = zz.H[tz].L || [], zz.H[tz].r = [...zz.H[tz].L], zz.CP)
                for (let sz = 0; sz < zz.CP.length; sz++) zz.CP[sz] = null
        }
        let QW = null;

        function kW(zz) {
          return QW = QW || function(zz) {
            return new Promise(((tz, sz) => {
              var Fz, Wz, Xz;

              function Oz() {
                hW(), gapi.load("gapi.iframes", {
                  callback: () => {
                    tz(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    hW(), sz(Yz(zz, "network-request-failed"))
                  },
                  timeout: dW.get()
                })
              }
              if (null === (Wz = null === (Fz = ZF().gapi) || void 0 === Fz ? void 0 : Fz.iframes) || void 0 === Wz ? void 0 : Wz.Iframe) tz(gapi.iframes.getContext());
              else {
                if (!(null === (Xz = ZF().gapi) || void 0 === Xz ? void 0 : Xz.load)) {
                  const tz = Ct("iframefcb");
                  return ZF()[tz] = () => {
                    gapi.load ? Oz() : sz(Yz(zz, "network-request-failed"))
                  }, It(`https://apis.google.com/js/api.js?onload=${tz}`).catch((zz => sz(zz)))
                }
                Oz()
              }
            })).catch((zz => {
              throw QW = null, zz
            }))
          }(zz), QW
        }
        const iW = new cz(5e3, 15e3),
          LW = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          lW = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function nW(zz) {
          const tz = zz.config;
          Iz(tz.authDomain, zz, "auth-domain-config-required");
          const sz = tz.emulator ? jz(tz, "emulator/auth/iframe") : `https://${zz.config.authDomain}/__/auth/iframe`,
            Xz = {
              apiKey: tz.apiKey,
              appName: zz.name,
              v: Wz.f
            },
            Oz = lW.get(zz.config.apiHost);
          Oz && (Xz.eid = Oz);
          const oz = zz._getFrameworks();
          return oz.length && (Xz.fw = oz.join(",")), `${sz}?${(0,Fz.gb)(Xz).slice(1)}`
        }
        const aW = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class qW {
          constructor(zz) {
            this.window = zz, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (zz) {}
          }
        }

        function SW(zz, tz, sz) {
          let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Oz = Math.max((window.screen.availHeight - Xz) / 2, 0).toString(),
            oz = Math.max((window.screen.availWidth - Wz) / 2, 0).toString();
          let vz = "";
          const Uz = Object.assign(Object.assign({}, aW), {
              width: Wz.toString(),
              height: Xz.toString(),
              top: Oz,
              left: oz
            }),
            Kz = (0, Fz.O)().toLowerCase();
          sz && (vz = bt(Kz) ? "_blank" : sz), ut(Kz) && (tz = tz || "http://localhost", Uz.scrollbars = "yes");
          const uz = Object.entries(Uz).reduce(((zz, tz) => {
            let [sz, Fz] = tz;
            return `${zz}${sz}=${Fz},`
          }), "");
          if (function() {
              var zz;
              return Bt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.O)()) && !!(null === (zz = window.navigator) || void 0 === zz ? void 0 : zz.standalone)
            }(Kz) && "_self" !== vz) return function(zz, tz) {
            const sz = document.createElement("a");
            sz.href = zz, sz.target = tz;
            const Fz = document.createEvent("MouseEvent");
            Fz.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), sz.dispatchEvent(Fz)
          }(tz || "", vz), new qW(null);
          const Nz = window.open(tz || "", vz, uz);
          Iz(Nz, zz, "popup-blocked");
          try {
            Nz.focus()
          } catch (bz) {}
          return new qW(Nz)
        }
        const VW = "__/auth/handler",
          RW = "emulator/auth/handler",
          pW = encodeURIComponent("fac");
        async function fW(zz, tz, sz, Xz, Oz, oz) {
            Iz(zz.config.authDomain, zz, "auth-domain-config-required"), Iz(zz.config.apiKey, zz, "invalid-api-key");
            const vz = {
              apiKey: zz.config.apiKey,
              appName: zz.name,
              authType: sz,
              redirectUrl: Xz,
              v: Wz.f,
              eventId: Oz
            };
            if (tz instanceof ts) {
              tz.setDefaultLanguage(zz.languageCode), vz.providerId = tz.providerId || "", (0, Fz.V)(tz.getCustomParameters()) || (vz.customParameters = JSON.stringify(tz.getCustomParameters()));
              for (const [zz, tz] of Object.entries(oz || {})) vz[zz] = tz
            }
            if (tz instanceof ss) {
              const zz = tz.getScopes().filter((zz => "" !== zz));
              zz.length > 0 && (vz.scopes = zz.join(","))
            }
            zz.tenantId && (vz.tid = zz.tenantId);
            const Uz = vz;
            for (const Fz of Object.keys(Uz)) void 0 === Uz[Fz] && delete Uz[Fz];
            const Kz = await zz._getAppCheckToken(),
              uz = Kz ? `#${pW}=${encodeURIComponent(Kz)}` : "";
            return `${function(zz){let{config:tz}=zz;if(!tz.emulator)return`
            https: //${tz.authDomain}/${VW}`;return jz(tz,RW)}(zz)}?${(0,Fz.gb)(Uz).slice(1)}${uz}`}const EW="webStorageSupport";const zX=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=JF,this._completeRedirectFn=eW,this._overrideRedirectResult=rW}async _openPopup(zz,tz,sz,Fz){var Wz;ez(null===(Wz=this.eventManagers[zz._key()])||void 0===Wz?void 0:Wz.manager,"_initialize() not called before _openPopup()");return SW(zz,await fW(zz,tz,sz,Zz(),Fz),CF())}async _openRedirect(zz,tz,sz,Fz){await this._originValidation(zz);return function(zz){ZF().location.href=zz}(await fW(zz,tz,sz,Zz(),Fz)),new Promise((()=>{}))}_initialize(zz){const tz=zz._key();if(this.eventManagers[tz]){const{manager:zz,promise:sz}=this.eventManagers[tz];return zz?Promise.resolve(zz):(ez(sz,"If manager is not set, promise should be"),sz)}const sz=this.initAndGetManager(zz);return this.eventManagers[tz]={promise:sz},sz.catch((()=>{delete this.eventManagers[tz]})),sz}async initAndGetManager(zz){const tz=await async function(zz){const tz=await kW(zz),sz=ZF().gapi;return Iz(sz,zz,"internal-error"),tz.open({where:document.body,url:nW(zz),messageHandlersFilter:sz.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LW,dontclear:!0},(tz=>new Promise((async(sz,Fz)=>{await tz.restyle({setHideOnLeave:!1});const Wz=Yz(zz,"network-request-failed"),Xz=ZF().setTimeout((()=>{Fz(Wz)}),iW.get());function Oz(){ZF().clearTimeout(Xz),sz(tz)}tz.ping(Oz).then(Oz,(()=>{Fz(Wz)}))}))))}(zz),sz=new GW(zz);return tz.register("authEvent",(tz=>{Iz(null===tz||void 0===tz?void 0:tz.authEvent,zz,"invalid-auth-event");return{status:sz.onEvent(tz.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[zz._key()]={manager:sz},this.iframes[zz._key()]=tz,sz}_isIframeWebStorageSupported(zz,tz){this.iframes[zz._key()].send(EW,{type:EW},(sz=>{var Fz;const Wz=null===(Fz=null===sz||void 0===sz?void 0:sz[0])||void 0===Fz?void 0:Fz[EW];void 0!==Wz&&tz(!!Wz),rz(zz,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(zz){const tz=zz._key();return this.originValidationPromises[tz]||(this.originValidationPromises[tz]=yW(zz)),this.originValidationPromises[tz]}get _shouldInitProactively(){return Pt()||Nt()||Bt()}};class tX{constructor(zz){this.factorId=zz}_process(zz,tz,sz){switch(tz.type){case"enroll":return this._finalizeEnroll(zz,tz.credential,sz);case"signin":return this._finalizeSignIn(zz,tz.credential);default:return Cz("unexpected MultiFactorSessionType")}}}class sX extends tX{constructor(zz){super("phone"),this.credential=zz}static _fromCredential(zz){return new sX(zz)}_finalizeEnroll(zz,tz,sz){return function(zz,tz){return hz(zz,"POST","/v2/accounts/mfaEnrollment:finalize",dz(zz,tz))}(zz,{idToken:tz,displayName:sz,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(zz,tz){return function(zz,tz){return hz(zz,"POST","/v2/accounts/mfaSignIn:finalize",dz(zz,tz))}(zz,{mfaPendingCredential:tz,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class FX{constructor(){}static assertion(zz){return sX._fromCredential(zz)}}FX.FACTOR_ID="phone";class WX{static assertionForEnrollment(zz,tz){return XX._fromSecret(zz,tz)}static assertionForSignIn(zz,tz){return XX._fromEnrollmentId(zz,tz)}static async generateSecret(zz){const tz=zz;Iz("undefined"!==typeof tz.auth,"internal-error");const sz=await(Fz=tz.auth,Wz={idToken:tz.credential,totpEnrollmentInfo:{}},hz(Fz,"POST","/v2/accounts/mfaEnrollment:start",dz(Fz,Wz)));var Fz,Wz;return OX._fromStartTotpMfaEnrollmentResponse(sz,tz.auth)}}WX.FACTOR_ID="totp";class XX extends tX{constructor(zz,tz,sz){super("totp"),this.otp=zz,this.enrollmentId=tz,this.secret=sz}static _fromSecret(zz,tz){return new XX(tz,void 0,zz)}static _fromEnrollmentId(zz,tz){return new XX(tz,zz)}async _finalizeEnroll(zz,tz,sz){return Iz("undefined"!==typeof this.secret,zz,"argument-error"),function(zz,tz){return hz(zz,"POST","/v2/accounts/mfaEnrollment:finalize",dz(zz,tz))}(zz,{idToken:tz,displayName:sz,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(zz,tz){Iz(void 0!==this.enrollmentId&&void 0!==this.otp,zz,"argument-error");const sz={verificationCode:this.otp};return function(zz,tz){return hz(zz,"POST","/v2/accounts/mfaSignIn:finalize",dz(zz,tz))}(zz,{mfaPendingCredential:tz,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:sz})}}class OX{constructor(zz,tz,sz,Fz,Wz,Xz,Oz){this.sessionInfo=Xz,this.auth=Oz,this.secretKey=zz,this.hashingAlgorithm=tz,this.codeLength=sz,this.codeIntervalSeconds=Fz,this.enrollmentCompletionDeadline=Wz}static _fromStartTotpMfaEnrollmentResponse(zz,tz){return new OX(zz.totpSessionInfo.sharedSecretKey,zz.totpSessionInfo.hashingAlgorithm,zz.totpSessionInfo.verificationCodeLength,zz.totpSessionInfo.periodSec,new Date(zz.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),zz.totpSessionInfo.sessionInfo,tz)}_makeTotpVerificationInfo(zz){return{sessionInfo:this.sessionInfo,verificationCode:zz}}generateQrCodeUrl(zz,tz){var sz;let Fz=!1;return(oX(zz)||oX(tz))&&(Fz=!0),Fz&&(oX(zz)&&(zz=(null===(sz=this.auth.currentUser)||void 0===sz?void 0:sz.email)||"unknownuser"),oX(tz)&&(tz=this.auth.name)),`otpauth://totp/${tz}:${zz}?secret=${this.secretKey}&issuer=${tz}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function oX(zz){return"undefined"===typeof zz||0===(null===zz||void 0===zz?void 0:zz.length)}var vX="@firebase/auth",UX="0.23.2";class KX{constructor(zz){this.auth=zz,this.internalListeners=new Map}getUid(){var zz;return this.assertAuthConfigured(),(null===(zz=this.auth.currentUser)||void 0===zz?void 0:zz.uid)||null}async getToken(zz){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(zz)}}addAuthTokenListener(zz){if(this.assertAuthConfigured(),this.internalListeners.has(zz))return;const tz=this.auth.onIdTokenChanged((tz=>{zz((null===tz||void 0===tz?void 0:tz.stsTokenManager.accessToken)||null)}));this.internalListeners.set(zz,tz),this.updateProactiveRefresh()}removeAuthTokenListener(zz){this.assertAuthConfigured();const tz=this.internalListeners.get(zz);tz&&(this.internalListeners.delete(zz),tz(),this.updateProactiveRefresh())}assertAuthConfigured(){Iz(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const uX=(0,Fz.H)("authIdTokenMaxAge")||300;let NX=null;const bX=zz=>async tz=>{const sz=tz&&await tz.getIdTokenResult(),Fz=sz&&((new Date).getTime()-Date.parse(sz.issuedAtTime))/1e3;if(Fz&&Fz>uX)return;const Wz=null===sz||void 0===sz?void 0:sz.token;NX!==Wz&&(NX=Wz,await fetch(zz,{method:Wz?"POST":"DELETE",headers:Wz?{Authorization:`Bearer ${Wz}`}:{}}))};function wX(){let zz=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Wz.L)();const tz=(0,Wz.x)(zz,"auth");if(tz.isInitialized())return tz.getImmediate();const sz=At(zz,{popupRedirectResolver:zX,persistence:[kF,xF,JF]}),Xz=(0,Fz.H)("authTokenSyncURL");if(Xz){const zz=bX(Xz);oF(sz,zz,(()=>zz(sz.currentUser))),OF(sz,(tz=>zz(tz)))}const Oz=(0,Fz.E)("auth");return Oz&&yt(sz,`http://${Oz}`),sz}var DX;DX="Browser",(0,Wz.z)(new oz.f("auth",((zz,tz)=>{let{options:sz}=tz;const Fz=zz.getProvider("app").getImmediate(),Wz=zz.getProvider("heartbeat"),Xz=zz.getProvider("app-check-internal"),{apiKey:Oz,authDomain:oz}=Fz.options;Iz(Oz&&!Oz.includes(":"),"invalid-api-key",{appName:Fz.name});const vz={apiKey:Oz,authDomain:oz,clientPlatform:DX,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rt(DX)},Uz=new Tt(Fz,Wz,Xz,vz);return function(zz,tz){const sz=(null===tz||void 0===tz?void 0:tz.persistence)||[],Fz=(Array.isArray(sz)?sz:[sz]).map(Xt);(null===tz||void 0===tz?void 0:tz.errorMap)&&zz._updateErrorMap(tz.errorMap),zz._initializeWithPersistence(Fz,null===tz||void 0===tz?void 0:tz.popupRedirectResolver)}(Uz,sz),Uz}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((zz,tz,sz)=>{zz.getProvider("auth-internal").initialize()}))),(0,Wz.z)(new oz.f("auth-internal",(zz=>(zz=>new KX(zz))(ct(zz.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Wz.S)(vX,UX,function(zz){switch(zz){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(DX)),(0,Wz.S)(vX,UX,"esm2017")}};Object.freeze(modules);for(const zz in modules)Object.freeze(modules[zz]);