/*! For license information please see sn3sfj.272.14e37789.chunk.js.LICENSE.txt */
export const id = 272;
export const ids = [272];
export const modules = {
    40721: (pp, ip, cp) => {
        cp.r(ip), cp.d(ip, {
          ActionCodeOperation: () => Pp,
          ActionCodeURL: () => pc,
          AuthCredential: () => bi,
          AuthErrorCodes: () => vp,
          EmailAuthCredential: () => Zi,
          EmailAuthProvider: () => cc,
          FacebookAuthProvider: () => Sc,
          FactorId: () => Lp,
          GithubAuthProvider: () => Lc,
          GoogleAuthProvider: () => xc,
          OAuthCredential: () => si,
          OAuthProvider: () => Ic,
          OperationType: () => Ap,
          PhoneAuthCredential: () => Vi,
          PhoneAuthProvider: () => oo,
          PhoneMultiFactorGenerator: () => II,
          ProviderId: () => Yp,
          RecaptchaVerifier: () => sO,
          SAMLAuthProvider: () => Dc,
          SignInMethod: () => Dp,
          TotpMultiFactorGenerator: () => SI,
          TotpSecret: () => LI,
          TwitterAuthProvider: () => Ac,
          applyActionCode: () => Jc,
          beforeAuthStateChanged: () => xO,
          browserLocalPersistence: () => uO,
          browserPopupRedirectResolver: () => cI,
          browserSessionPersistence: () => kO,
          checkActionCode: () => Bc,
          confirmPasswordReset: () => Qc,
          connectAuthEmulator: () => Ni,
          createUserWithEmailAndPassword: () => Tc,
          debugErrorMap: () => yp,
          deleteUser: () => PO,
          fetchSignInMethodsForEmail: () => nc,
          getAdditionalUserInfo: () => OO,
          getAuth: () => wI,
          getIdToken: () => Gp,
          getIdTokenResult: () => rp,
          getMultiFactorResolver: () => UO,
          getRedirectResult: () => qo,
          inMemoryPersistence: () => Yi,
          indexedDBLocalPersistence: () => bO,
          initializeAuth: () => Bi,
          initializeRecaptchaConfig: () => IO,
          isSignInWithEmailLink: () => hc,
          linkWithCredential: () => mc,
          linkWithPhoneNumber: () => po,
          linkWithPopup: () => yo,
          linkWithRedirect: () => Ro,
          multiFactor: () => tO,
          onAuthStateChanged: () => LO,
          onIdTokenChanged: () => SO,
          parseActionCodeURL: () => ic,
          prodErrorMap: () => Up,
          reauthenticateWithCredential: () => Rc,
          reauthenticateWithPhoneNumber: () => io,
          reauthenticateWithPopup: () => Wo,
          reauthenticateWithRedirect: () => mo,
          reload: () => ci,
          sendEmailVerification: () => Fc,
          sendPasswordResetEmail: () => lc,
          sendSignInLinkToEmail: () => bc,
          setPersistence: () => oO,
          signInAnonymously: () => Uc,
          signInWithCredential: () => kc,
          signInWithCustomToken: () => qc,
          signInWithEmailAndPassword: () => fc,
          signInWithEmailLink: () => ac,
          signInWithPhoneNumber: () => VO,
          signInWithPopup: () => Po,
          signInWithRedirect: () => ko,
          signOut: () => AO,
          unlink: () => Hc,
          updateCurrentUser: () => DO,
          updateEmail: () => rc,
          updatePassword: () => Zc,
          updatePhoneNumber: () => Oo,
          updateProfile: () => Gc,
          useDeviceLanguage: () => YO,
          verifyBeforeUpdateEmail: () => gc,
          verifyPasswordResetCode: () => Nc
        });
        var Op = cp(40700),
          op = cp(40687);

        function Ip(pp, ip) {
          var cp = {};
          for (var Op in pp) Object.prototype.hasOwnProperty.call(pp, Op) && ip.indexOf(Op) < 0 && (cp[Op] = pp[Op]);
          if (null != pp && "function" === typeof Object.getOwnPropertySymbols) {
            var op = 0;
            for (Op = Object.getOwnPropertySymbols(pp); op < Op.length; op++) ip.indexOf(Op[op]) < 0 && Object.prototype.propertyIsEnumerable.call(pp, Op[op]) && (cp[Op[op]] = pp[Op[op]])
          }
          return cp
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Sp = cp(40704),
          xp = cp(40692);
        const Lp = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Yp = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Dp = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Ap = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Pp = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Wp() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const yp = function() {
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
          Up = Wp,
          wp = new Op.i("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          vp = {
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
          tp = new Sp.d("@firebase/auth");

        function Hp(pp) {
          if (tp.logLevel <= Sp.c.ERROR) {
            for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
            tp.error(`Auth (${op.f}): ${pp}`, ...cp)
          }
        }

        function dp(pp) {
          for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
          throw mp(pp, ...cp)
        }

        function ep(pp) {
          for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
          return mp(pp, ...cp)
        }

        function jp(pp, ip, cp) {
          const op = Object.assign(Object.assign({}, Up()), {
            [ip]: cp
          });
          return new Op.i("auth", "Firebase", op).create(ip, {
            appName: pp.name
          })
        }

        function kp(pp, ip, cp) {
          if (!(ip instanceof cp)) throw cp.name !== ip.constructor.name && dp(pp, "argument-error"), jp(pp, "argument-error", `Type of ${ip.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function mp(pp) {
          for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
          if ("string" !== typeof pp) {
            const ip = cp[0],
              Op = [...cp.slice(1)];
            return Op[0] && (Op[0].appName = pp.name), pp._errorFactory.create(ip, ...Op)
          }
          return wp.create(pp, ...cp)
        }

        function Rp(pp, ip) {
          if (!pp) {
            for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op];
            throw mp(ip, ...Op)
          }
        }

        function qp(pp) {
          const ip = "INTERNAL ASSERTION FAILED: " + pp;
          throw Hp(ip), new Error(ip)
        }

        function Mp(pp, ip) {
          pp || qp(ip)
        }

        function Cp() {
          var pp;
          return "undefined" !== typeof self && (null === (pp = self.location) || void 0 === pp ? void 0 : pp.href) || ""
        }

        function Ep() {
          return "http:" === Xp() || "https:" === Xp()
        }

        function Xp() {
          var pp;
          return "undefined" !== typeof self && (null === (pp = self.location) || void 0 === pp ? void 0 : pp.protocol) || null
        }
        class lp {
          constructor(pp, ip) {
            this.shortDelay = pp, this.longDelay = ip, Mp(ip > pp, "Short delay should be less than long delay!"), this.isMobile = (0, Op.T)() || (0, Op.X)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Ep() || (0, Op.K)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function Qp(pp, ip) {
          Mp(pp.emulator, "Emulator should always be set here");
          const {
            url: cp
          } = pp.emulator;
          return ip ? `${cp}${ip.startsWith("/")?ip.slice(1):ip}` : cp
        }
        class Jp {
          static initialize(pp, ip, cp) {
            this.fetchImpl = pp, ip && (this.headersImpl = ip), cp && (this.responseImpl = cp)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void qp("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void qp("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void qp("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Bp = {
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
          Np = new lp(3e4, 6e4);

        function Tp(pp, ip) {
          return pp.tenantId && !ip.tenantId ? Object.assign(Object.assign({}, ip), {
            tenantId: pp.tenantId
          }) : ip
        }
        async function fp(pp, ip, cp, op) {
          return bp(pp, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Ip = {},
              Sp = {};
            op && ("GET" === ip ? Sp = op : Ip = {
              body: JSON.stringify(op)
            });
            const xp = (0, Op.cb)(Object.assign({
                key: pp.config.apiKey
              }, Sp)).slice(1),
              Lp = await pp._getAdditionalHeaders();
            return Lp["Content-Type"] = "application/json", pp.languageCode && (Lp["X-Firebase-Locale"] = pp.languageCode), Jp.fetch()(ap(pp, pp.config.apiHost, cp, xp), Object.assign({
              method: ip,
              headers: Lp,
              referrerPolicy: "no-referrer"
            }, Ip))
          }))
        }
        async function bp(pp, ip, cp) {
          pp._canInitEmulator = !1;
          const op = Object.assign(Object.assign({}, Bp), ip);
          try {
            const ip = new np(pp),
              Op = await Promise.race([cp(), ip.promise]);
            ip.clearNetworkTimeout();
            const Ip = await Op.json();
            if ("needConfirmation" in Ip) throw Fp(pp, "account-exists-with-different-credential", Ip);
            if (Op.ok && !("errorMessage" in Ip)) return Ip;
            {
              const ip = Op.ok ? Ip.errorMessage : Ip.error.message,
                [cp, Sp] = ip.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === cp) throw Fp(pp, "credential-already-in-use", Ip);
              if ("EMAIL_EXISTS" === cp) throw Fp(pp, "email-already-in-use", Ip);
              if ("USER_DISABLED" === cp) throw Fp(pp, "user-disabled", Ip);
              const xp = op[cp] || cp.toLowerCase().replace(/[_\s]+/g, "-");
              if (Sp) throw jp(pp, xp, Sp);
              dp(pp, xp)
            }
          } catch (Ip) {
            if (Ip instanceof Op.l) throw Ip;
            dp(pp, "network-request-failed", {
              message: String(Ip)
            })
          }
        }
        async function hp(pp, ip, cp, Op) {
          let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Ip = await fp(pp, ip, cp, Op, op);
          return "mfaPendingCredential" in Ip && dp(pp, "multi-factor-auth-required", {
            _serverResponse: Ip
          }), Ip
        }

        function ap(pp, ip, cp, Op) {
          const op = `${ip}${cp}?${Op}`;
          return pp.config.emulator ? Qp(pp.config, op) : `${pp.config.apiScheme}://${op}`
        }
        class np {
          constructor(pp) {
            this.auth = pp, this.timer = null, this.promise = new Promise(((pp, ip) => {
              this.timer = setTimeout((() => ip(ep(this.auth, "network-request-failed"))), Np.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function Fp(pp, ip, cp) {
          const Op = {
            appName: pp.name
          };
          cp.email && (Op.email = cp.email), cp.phoneNumber && (Op.phoneNumber = cp.phoneNumber);
          const op = ep(pp, ip, Op);
          return op.customData._tokenResponse = cp, op
        }

        function gp(pp) {
          if (pp) try {
            const ip = new Date(Number(pp));
            if (!isNaN(ip.getTime())) return ip.toUTCString()
          } catch (ip) {}
        }

        function Gp(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Op.F)(pp).getIdToken(ip)
        }
        async function rp(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const cp = (0, Op.F)(pp),
            op = await cp.getIdToken(ip),
            Ip = zp(op);
          Rp(Ip && Ip.exp && Ip.auth_time && Ip.iat, cp.auth, "internal-error");
          const Sp = "object" === typeof Ip.firebase ? Ip.firebase : void 0,
            xp = null === Sp || void 0 === Sp ? void 0 : Sp.sign_in_provider;
          return {
            claims: Ip,
            token: op,
            authTime: gp(Zp(Ip.auth_time)),
            issuedAtTime: gp(Zp(Ip.iat)),
            expirationTime: gp(Zp(Ip.exp)),
            signInProvider: xp || null,
            signInSecondFactor: (null === Sp || void 0 === Sp ? void 0 : Sp.sign_in_second_factor) || null
          }
        }

        function Zp(pp) {
          return 1e3 * Number(pp)
        }

        function zp(pp) {
          const [ip, cp, op] = pp.split(".");
          if (void 0 === ip || void 0 === cp || void 0 === op) return Hp("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const pp = (0, Op.r)(cp);
            return pp ? JSON.parse(pp) : (Hp("Failed to decode base64 JWT payload"), null)
          } catch (Ip) {
            return Hp("Caught error parsing JWT payload as JSON", null === Ip || void 0 === Ip ? void 0 : Ip.toString()), null
          }
        }
        async function sp(pp, ip) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return ip;
          try {
            return await ip
          } catch (cp) {
            throw cp instanceof Op.l && function(pp) {
              let {
                code: ip
              } = pp;
              return "auth/user-disabled" === ip || "auth/user-token-expired" === ip
            }(cp) && pp.auth.currentUser === pp && await pp.auth.signOut(), cp
          }
        }
        class Kp {
          constructor(pp) {
            this.user = pp, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(pp) {
            var ip;
            if (pp) {
              const pp = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), pp
            } {
              this.errorBackoff = 3e4;
              const pp = (null !== (ip = this.user.stsTokenManager.expirationTime) && void 0 !== ip ? ip : 0) - Date.now() - 3e5;
              return Math.max(0, pp)
            }
          }
          schedule() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const ip = this.getInterval(pp);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), ip)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (pp) {
              return void("auth/network-request-failed" === (null === pp || void 0 === pp ? void 0 : pp.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class Vp {
          constructor(pp, ip) {
            this.createdAt = pp, this.lastLoginAt = ip, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = gp(this.lastLoginAt), this.creationTime = gp(this.createdAt)
          }
          _copy(pp) {
            this.createdAt = pp.createdAt, this.lastLoginAt = pp.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function ii(pp) {
          var ip;
          const cp = pp.auth,
            Op = await pp.getIdToken(),
            op = await sp(pp, async function(pp, ip) {
              return fp(pp, "POST", "/v1/accounts:lookup", ip)
            }(cp, {
              idToken: Op
            }));
          Rp(null === op || void 0 === op ? void 0 : op.users.length, cp, "internal-error");
          const Sp = op.users[0];
          pp._notifyReloadListener(Sp);
          const xp = (null === (ip = Sp.providerUserInfo) || void 0 === ip ? void 0 : ip.length) ? Sp.providerUserInfo.map((pp => {
            var {
              providerId: ip
            } = pp, cp = Ip(pp, ["providerId"]);
            return {
              providerId: ip,
              uid: cp.rawId || "",
              displayName: cp.displayName || null,
              email: cp.email || null,
              phoneNumber: cp.phoneNumber || null,
              photoURL: cp.photoUrl || null
            }
          })) : [];
          const Lp = (Yp = pp.providerData, Dp = xp, [...Yp.filter((pp => !Dp.some((ip => ip.providerId === pp.providerId)))), ...Dp]);
          var Yp, Dp;
          const Ap = pp.isAnonymous,
            Pp = !(pp.email && Sp.passwordHash) && !(null === Lp || void 0 === Lp ? void 0 : Lp.length),
            Wp = !!Ap && Pp,
            yp = {
              uid: Sp.localId,
              displayName: Sp.displayName || null,
              photoURL: Sp.photoUrl || null,
              email: Sp.email || null,
              emailVerified: Sp.emailVerified || !1,
              phoneNumber: Sp.phoneNumber || null,
              tenantId: Sp.tenantId || null,
              providerData: Lp,
              metadata: new Vp(Sp.createdAt, Sp.lastLoginAt),
              isAnonymous: Wp
            };
          Object.assign(pp, yp)
        }
        async function ci(pp) {
          const ip = (0, Op.F)(pp);
          await ii(ip), await ip.auth._persistUserIfCurrent(ip), ip.auth._notifyListenersIfCurrent(ip)
        }
        class Oi {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(pp) {
            Rp(pp.idToken, "internal-error"), Rp("undefined" !== typeof pp.idToken, "internal-error"), Rp("undefined" !== typeof pp.refreshToken, "internal-error");
            const ip = "expiresIn" in pp && "undefined" !== typeof pp.expiresIn ? Number(pp.expiresIn) : function(pp) {
              const ip = zp(pp);
              return Rp(ip, "internal-error"), Rp("undefined" !== typeof ip.exp, "internal-error"), Rp("undefined" !== typeof ip.iat, "internal-error"), Number(ip.exp) - Number(ip.iat)
            }(pp.idToken);
            this.updateTokensAndExpiration(pp.idToken, pp.refreshToken, ip)
          }
          async getToken(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Rp(!this.accessToken || this.refreshToken, pp, "user-token-expired"), ip || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(pp, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(pp, ip) {
            const {
              accessToken: cp,
              refreshToken: op,
              expiresIn: Ip
            } = await async function(pp, ip) {
              const cp = await bp(pp, {}, (async () => {
                const cp = (0, Op.cb)({
                    grant_type: "refresh_token",
                    refresh_token: ip
                  }).slice(1),
                  {
                    tokenApiHost: op,
                    apiKey: Ip
                  } = pp.config,
                  Sp = ap(pp, op, "/v1/token", `key=${Ip}`),
                  xp = await pp._getAdditionalHeaders();
                return xp["Content-Type"] = "application/x-www-form-urlencoded", Jp.fetch()(Sp, {
                  method: "POST",
                  headers: xp,
                  body: cp
                })
              }));
              return {
                accessToken: cp.access_token,
                expiresIn: cp.expires_in,
                refreshToken: cp.refresh_token
              }
            }(pp, ip);
            this.updateTokensAndExpiration(cp, op, Number(Ip))
          }
          updateTokensAndExpiration(pp, ip, cp) {
            this.refreshToken = ip || null, this.accessToken = pp || null, this.expirationTime = Date.now() + 1e3 * cp
          }
          static fromJSON(pp, ip) {
            const {
              refreshToken: cp,
              accessToken: Op,
              expirationTime: op
            } = ip, Ip = new Oi;
            return cp && (Rp("string" === typeof cp, "internal-error", {
              appName: pp
            }), Ip.refreshToken = cp), Op && (Rp("string" === typeof Op, "internal-error", {
              appName: pp
            }), Ip.accessToken = Op), op && (Rp("number" === typeof op, "internal-error", {
              appName: pp
            }), Ip.expirationTime = op), Ip
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(pp) {
            this.accessToken = pp.accessToken, this.refreshToken = pp.refreshToken, this.expirationTime = pp.expirationTime
          }
          _clone() {
            return Object.assign(new Oi, this.toJSON())
          }
          _performRefresh() {
            return qp("not implemented")
          }
        }

        function oi(pp, ip) {
          Rp("string" === typeof pp || "undefined" === typeof pp, "internal-error", {
            appName: ip
          })
        }
        class Ii {
          constructor(pp) {
            var {
              uid: ip,
              auth: cp,
              stsTokenManager: Op
            } = pp, op = Ip(pp, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Kp(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = ip, this.auth = cp, this.stsTokenManager = Op, this.accessToken = Op.accessToken, this.displayName = op.displayName || null, this.email = op.email || null, this.emailVerified = op.emailVerified || !1, this.phoneNumber = op.phoneNumber || null, this.photoURL = op.photoURL || null, this.isAnonymous = op.isAnonymous || !1, this.tenantId = op.tenantId || null, this.providerData = op.providerData ? [...op.providerData] : [], this.metadata = new Vp(op.createdAt || void 0, op.lastLoginAt || void 0)
          }
          async getIdToken(pp) {
            const ip = await sp(this, this.stsTokenManager.getToken(this.auth, pp));
            return Rp(ip, this.auth, "internal-error"), this.accessToken !== ip && (this.accessToken = ip, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), ip
          }
          getIdTokenResult(pp) {
            return rp(this, pp)
          }
          reload() {
            return ci(this)
          }
          _assign(pp) {
            this !== pp && (Rp(this.uid === pp.uid, this.auth, "internal-error"), this.displayName = pp.displayName, this.photoURL = pp.photoURL, this.email = pp.email, this.emailVerified = pp.emailVerified, this.phoneNumber = pp.phoneNumber, this.isAnonymous = pp.isAnonymous, this.tenantId = pp.tenantId, this.providerData = pp.providerData.map((pp => Object.assign({}, pp))), this.metadata._copy(pp.metadata), this.stsTokenManager._assign(pp.stsTokenManager))
          }
          _clone(pp) {
            const ip = new Ii(Object.assign(Object.assign({}, this), {
              auth: pp,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return ip.metadata._copy(this.metadata), ip
          }
          _onReload(pp) {
            Rp(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = pp, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(pp) {
            this.reloadListener ? this.reloadListener(pp) : this.reloadUserInfo = pp
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cp = !1;
            pp.idToken && pp.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(pp), cp = !0), ip && await ii(this), await this.auth._persistUserIfCurrent(this), cp && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const pp = await this.getIdToken();
            return await sp(this, async function(pp, ip) {
              return fp(pp, "POST", "/v1/accounts:delete", ip)
            }(this.auth, {
              idToken: pp
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
              providerData: this.providerData.map((pp => Object.assign({}, pp))),
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
          static _fromJSON(pp, ip) {
            var cp, Op, op, Ip, Sp, xp, Lp, Yp;
            const Dp = null !== (cp = ip.displayName) && void 0 !== cp ? cp : void 0,
              Ap = null !== (Op = ip.email) && void 0 !== Op ? Op : void 0,
              Pp = null !== (op = ip.phoneNumber) && void 0 !== op ? op : void 0,
              Wp = null !== (Ip = ip.photoURL) && void 0 !== Ip ? Ip : void 0,
              yp = null !== (Sp = ip.tenantId) && void 0 !== Sp ? Sp : void 0,
              Up = null !== (xp = ip._redirectEventId) && void 0 !== xp ? xp : void 0,
              wp = null !== (Lp = ip.createdAt) && void 0 !== Lp ? Lp : void 0,
              vp = null !== (Yp = ip.lastLoginAt) && void 0 !== Yp ? Yp : void 0,
              {
                uid: tp,
                emailVerified: Hp,
                isAnonymous: dp,
                providerData: ep,
                stsTokenManager: jp
              } = ip;
            Rp(tp && jp, pp, "internal-error");
            const kp = Oi.fromJSON(this.name, jp);
            Rp("string" === typeof tp, pp, "internal-error"), oi(Dp, pp.name), oi(Ap, pp.name), Rp("boolean" === typeof Hp, pp, "internal-error"), Rp("boolean" === typeof dp, pp, "internal-error"), oi(Pp, pp.name), oi(Wp, pp.name), oi(yp, pp.name), oi(Up, pp.name), oi(wp, pp.name), oi(vp, pp.name);
            const mp = new Ii({
              uid: tp,
              auth: pp,
              email: Ap,
              emailVerified: Hp,
              displayName: Dp,
              isAnonymous: dp,
              photoURL: Wp,
              phoneNumber: Pp,
              tenantId: yp,
              stsTokenManager: kp,
              createdAt: wp,
              lastLoginAt: vp
            });
            return ep && Array.isArray(ep) && (mp.providerData = ep.map((pp => Object.assign({}, pp)))), Up && (mp._redirectEventId = Up), mp
          }
          static async _fromIdTokenResponse(pp, ip) {
            let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Op = new Oi;
            Op.updateFromServerResponse(ip);
            const op = new Ii({
              uid: ip.localId,
              auth: pp,
              stsTokenManager: Op,
              isAnonymous: cp
            });
            return await ii(op), op
          }
        }
        const Si = new Map;

        function xi(pp) {
          Mp(pp instanceof Function, "Expected a class definition");
          let ip = Si.get(pp);
          return ip ? (Mp(ip instanceof pp, "Instance stored in cache mismatched with class"), ip) : (ip = new pp, Si.set(pp, ip), ip)
        }
        class Li {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(pp, ip) {
            this.storage[pp] = ip
          }
          async _get(pp) {
            const ip = this.storage[pp];
            return void 0 === ip ? null : ip
          }
          async _remove(pp) {
            delete this.storage[pp]
          }
          _addListener(pp, ip) {}
          _removeListener(pp, ip) {}
        }
        Li.type = "NONE";
        const Yi = Li;

        function Di(pp, ip, cp) {
          return `firebase:${pp}:${ip}:${cp}`
        }
        class Ai {
          constructor(pp, ip, cp) {
            this.persistence = pp, this.auth = ip, this.userKey = cp;
            const {
              config: Op,
              name: op
            } = this.auth;
            this.fullUserKey = Di(this.userKey, Op.apiKey, op), this.fullPersistenceKey = Di("persistence", Op.apiKey, op), this.boundEventHandler = ip._onStorageEvent.bind(ip), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(pp) {
            return this.persistence._set(this.fullUserKey, pp.toJSON())
          }
          async getCurrentUser() {
            const pp = await this.persistence._get(this.fullUserKey);
            return pp ? Ii._fromJSON(this.auth, pp) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(pp) {
            if (this.persistence === pp) return;
            const ip = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = pp, ip ? this.setCurrentUser(ip) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(pp, ip) {
            let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!ip.length) return new Ai(xi(Yi), pp, cp);
            const Op = (await Promise.all(ip.map((async pp => {
              if (await pp._isAvailable()) return pp
            })))).filter((pp => pp));
            let op = Op[0] || xi(Yi);
            const Ip = Di(cp, pp.config.apiKey, pp.name);
            let Sp = null;
            for (const Yp of ip) try {
              const ip = await Yp._get(Ip);
              if (ip) {
                const cp = Ii._fromJSON(pp, ip);
                Yp !== op && (Sp = cp), op = Yp;
                break
              }
            } catch (Lp) {}
            const xp = Op.filter((pp => pp._shouldAllowMigration));
            return op._shouldAllowMigration && xp.length ? (op = xp[0], Sp && await op._set(Ip, Sp.toJSON()), await Promise.all(ip.map((async pp => {
              if (pp !== op) try {
                await pp._remove(Ip)
              } catch (Lp) {}
            }))), new Ai(op, pp, cp)) : new Ai(op, pp, cp)
          }
        }

        function Pi(pp) {
          const ip = pp.toLowerCase();
          if (ip.includes("opera/") || ip.includes("opr/") || ip.includes("opios/")) return "Opera";
          if (wi(ip)) return "IEMobile";
          if (ip.includes("msie") || ip.includes("trident/")) return "IE";
          if (ip.includes("edge/")) return "Edge";
          if (Wi(ip)) return "Firefox";
          if (ip.includes("silk/")) return "Silk";
          if (ti(ip)) return "Blackberry";
          if (Hi(ip)) return "Webos";
          if (yi(ip)) return "Safari";
          if ((ip.includes("chrome/") || Ui(ip)) && !ip.includes("edge/")) return "Chrome";
          if (vi(ip)) return "Android";
          {
            const ip = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              cp = pp.match(ip);
            if (2 === (null === cp || void 0 === cp ? void 0 : cp.length)) return cp[1]
          }
          return "Other"
        }

        function Wi() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)();
          return /firefox\//i.test(pp)
        }

        function yi() {
          const pp = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)()).toLowerCase();
          return pp.includes("safari/") && !pp.includes("chrome/") && !pp.includes("crios/") && !pp.includes("android")
        }

        function Ui() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)();
          return /crios\//i.test(pp)
        }

        function wi() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)();
          return /iemobile/i.test(pp)
        }

        function vi() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)();
          return /android/i.test(pp)
        }

        function ti() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)();
          return /blackberry/i.test(pp)
        }

        function Hi() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)();
          return /webos/i.test(pp)
        }

        function di() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)();
          return /iphone|ipad|ipod/i.test(pp) || /macintosh/i.test(pp) && /mobile/i.test(pp)
        }

        function ei() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)();
          return di(pp) || vi(pp) || Hi(pp) || ti(pp) || /windows phone/i.test(pp) || wi(pp)
        }

        function ui(pp) {
          let ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (pp) {
            case "Browser":
              ip = Pi((0, Op.H)());
              break;
            case "Worker":
              ip = `${Pi((0,Op.H)())}-${pp}`;
              break;
            default:
              ip = pp
          }
          const Ip = cp.length ? cp.join(",") : "FirebaseCore-web";
          return `${ip}/JsCore/${op.f}/${Ip}`
        }
        async function ji(pp, ip) {
          return fp(pp, "GET", "/v2/recaptchaConfig", Tp(pp, ip))
        }

        function ki(pp) {
          return void 0 !== pp && void 0 !== pp.getResponse
        }

        function mi(pp) {
          return void 0 !== pp && void 0 !== pp.enterprise
        }
        class Ri {
          constructor(pp) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === pp.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = pp.recaptchaKey.split("/")[3], this.emailPasswordEnabled = pp.recaptchaEnforcementState.some((pp => "EMAIL_PASSWORD_PROVIDER" === pp.provider && "OFF" !== pp.enforcementState))
          }
        }

        function qi(pp) {
          return new Promise(((ip, cp) => {
            const Op = document.createElement("script");
            Op.setAttribute("src", pp), Op.onload = ip, Op.onerror = pp => {
                const ip = ep("internal-error");
                ip.customData = pp, cp(ip)
              }, Op.type = "text/javascript", Op.charset = "UTF-8",
              function() {
                var pp, ip;
                return null !== (ip = null === (pp = document.getElementsByTagName("head")) || void 0 === pp ? void 0 : pp[0]) && void 0 !== ip ? ip : document
              }().appendChild(Op)
          }))
        }

        function Mi(pp) {
          return `__${pp}${Math.floor(1e6*Math.random())}`
        }
        class Ci {
          constructor(pp) {
            this.type = "recaptcha-enterprise", this.auth = Qi(pp)
          }
          async verify() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function cp(ip, cp, Op) {
              const op = window.grecaptcha;
              mi(op) ? op.enterprise.ready((() => {
                op.enterprise.execute(ip, {
                  action: pp
                }).then((pp => {
                  cp(pp)
                })).catch((() => {
                  cp("NO_RECAPTCHA")
                }))
              })) : Op(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((pp, Op) => {
              (async function(pp) {
                if (!ip) {
                  if (null == pp.tenantId && null != pp._agentRecaptchaConfig) return pp._agentRecaptchaConfig.siteKey;
                  if (null != pp.tenantId && void 0 !== pp._tenantRecaptchaConfigs[pp.tenantId]) return pp._tenantRecaptchaConfigs[pp.tenantId].siteKey
                }
                return new Promise((async (ip, cp) => {
                  ji(pp, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Op => {
                    if (void 0 !== Op.recaptchaKey) {
                      const cp = new Ri(Op);
                      return null == pp.tenantId ? pp._agentRecaptchaConfig = cp : pp._tenantRecaptchaConfigs[pp.tenantId] = cp, ip(cp.siteKey)
                    }
                    cp(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((pp => {
                    cp(pp)
                  }))
                }))
              })(this.auth).then((op => {
                if (!ip && mi(window.grecaptcha)) cp(op, pp, Op);
                else {
                  if ("undefined" === typeof window) return void Op(new Error("RecaptchaVerifier is only supported in browser"));
                  qi("https://www.google.com/recaptcha/enterprise.js?render=" + op).then((() => {
                    cp(op, pp, Op)
                  })).catch((pp => {
                    Op(pp)
                  }))
                }
              })).catch((pp => {
                Op(pp)
              }))
            }))
          }
        }
        async function Ei(pp, ip, cp) {
          let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const op = new Ci(pp);
          let Ip;
          try {
            Ip = await op.verify(cp)
          } catch (xp) {
            Ip = await op.verify(cp, !0)
          }
          const Sp = Object.assign({}, ip);
          return Op ? Object.assign(Sp, {
            captchaResp: Ip
          }) : Object.assign(Sp, {
            captchaResponse: Ip
          }), Object.assign(Sp, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Sp, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Sp
        }
        class Xi {
          constructor(pp) {
            this.auth = pp, this.queue = []
          }
          pushCallback(pp, ip) {
            const cp = ip => new Promise(((cp, Op) => {
              try {
                cp(pp(ip))
              } catch (op) {
                Op(op)
              }
            }));
            cp.onAbort = ip, this.queue.push(cp);
            const Op = this.queue.length - 1;
            return () => {
              this.queue[Op] = () => Promise.resolve()
            }
          }
          async runMiddleware(pp) {
            if (this.auth.currentUser === pp) return;
            const ip = [];
            try {
              for (const cp of this.queue) await cp(pp), cp.onAbort && ip.push(cp.onAbort)
            } catch (cp) {
              ip.reverse();
              for (const pp of ip) try {
                pp()
              } catch (Op) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === cp || void 0 === cp ? void 0 : cp.message
              })
            }
          }
        }
        class li {
          constructor(pp, ip, cp, Op) {
            this.app = pp, this.heartbeatServiceProvider = ip, this.appCheckServiceProvider = cp, this.config = Op, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Ji(this), this.idTokenSubscription = new Ji(this), this.beforeStateQueue = new Xi(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = wp, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = pp.name, this.clientVersion = Op.sdkClientVersion
          }
          _initializeWithPersistence(pp, ip) {
            return ip && (this._popupRedirectResolver = xi(ip)), this._initializationPromise = this.queue((async () => {
              var cp, Op;
              if (!this._deleted && (this.persistenceManager = await Ai.create(this, pp), !this._deleted)) {
                if (null === (cp = this._popupRedirectResolver) || void 0 === cp ? void 0 : cp._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (op) {}
                await this.initializeCurrentUser(ip), this.lastNotifiedUid = (null === (Op = this.currentUser) || void 0 === Op ? void 0 : Op.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const pp = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || pp ? this.currentUser && pp && this.currentUser.uid === pp.uid ? (this._currentUser._assign(pp), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(pp, !0) : void 0
          }
          async initializeCurrentUser(pp) {
            var ip;
            const cp = await this.assertedPersistence.getCurrentUser();
            let Op = cp,
              op = !1;
            if (pp && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const cp = null === (ip = this.redirectUser) || void 0 === ip ? void 0 : ip._redirectEventId,
                Ip = null === Op || void 0 === Op ? void 0 : Op._redirectEventId,
                Sp = await this.tryRedirectSignIn(pp);
              cp && cp !== Ip || !(null === Sp || void 0 === Sp ? void 0 : Sp.user) || (Op = Sp.user, op = !0)
            }
            if (!Op) return this.directlySetCurrentUser(null);
            if (!Op._redirectEventId) {
              if (op) try {
                await this.beforeStateQueue.runMiddleware(Op)
              } catch (Ip) {
                Op = cp, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Ip)))
              }
              return Op ? this.reloadAndSetCurrentUserOrClear(Op) : this.directlySetCurrentUser(null)
            }
            return Rp(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Op._redirectEventId ? this.directlySetCurrentUser(Op) : this.reloadAndSetCurrentUserOrClear(Op)
          }
          async tryRedirectSignIn(pp) {
            let ip = null;
            try {
              ip = await this._popupRedirectResolver._completeRedirectFn(this, pp, !0)
            } catch (cp) {
              await this._setRedirectUser(null)
            }
            return ip
          }
          async reloadAndSetCurrentUserOrClear(pp) {
            try {
              await ii(pp)
            } catch (ip) {
              if ("auth/network-request-failed" !== (null === ip || void 0 === ip ? void 0 : ip.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(pp)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const pp = navigator;
              return pp.languages && pp.languages[0] || pp.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(pp) {
            const ip = pp ? (0, Op.F)(pp) : null;
            return ip && Rp(ip.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(ip && ip._clone(this))
          }
          async _updateCurrentUser(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return pp && Rp(this.tenantId === pp.tenantId, this, "tenant-id-mismatch"), ip || await this.beforeStateQueue.runMiddleware(pp), this.queue((async () => {
              await this.directlySetCurrentUser(pp), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(pp) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(xi(pp))
            }))
          }
          async initializeRecaptchaConfig() {
            const pp = await ji(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              ip = new Ri(pp);
            if (null == this.tenantId ? this._agentRecaptchaConfig = ip : this._tenantRecaptchaConfigs[this.tenantId] = ip, ip.emailPasswordEnabled) {
              new Ci(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(pp) {
            this._errorFactory = new Op.i("auth", "Firebase", pp())
          }
          onAuthStateChanged(pp, ip, cp) {
            return this.registerStateListener(this.authStateSubscription, pp, ip, cp)
          }
          beforeAuthStateChanged(pp, ip) {
            return this.beforeStateQueue.pushCallback(pp, ip)
          }
          onIdTokenChanged(pp, ip, cp) {
            return this.registerStateListener(this.idTokenSubscription, pp, ip, cp)
          }
          toJSON() {
            var pp;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (pp = this._currentUser) || void 0 === pp ? void 0 : pp.toJSON()
            }
          }
          async _setRedirectUser(pp, ip) {
            const cp = await this.getOrInitRedirectPersistenceManager(ip);
            return null === pp ? cp.removeCurrentUser() : cp.setCurrentUser(pp)
          }
          async getOrInitRedirectPersistenceManager(pp) {
            if (!this.redirectPersistenceManager) {
              const ip = pp && xi(pp) || this._popupRedirectResolver;
              Rp(ip, this, "argument-error"), this.redirectPersistenceManager = await Ai.create(this, [xi(ip._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(pp) {
            var ip, cp;
            return this._isInitialized && await this.queue((async () => {})), (null === (ip = this._currentUser) || void 0 === ip ? void 0 : ip._redirectEventId) === pp ? this._currentUser : (null === (cp = this.redirectUser) || void 0 === cp ? void 0 : cp._redirectEventId) === pp ? this.redirectUser : null
          }
          async _persistUserIfCurrent(pp) {
            if (pp === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(pp)))
          }
          _notifyListenersIfCurrent(pp) {
            pp === this.currentUser && this.notifyAuthListeners()
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
            var pp, ip;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const cp = null !== (ip = null === (pp = this.currentUser) || void 0 === pp ? void 0 : pp.uid) && void 0 !== ip ? ip : null;
            this.lastNotifiedUid !== cp && (this.lastNotifiedUid = cp, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(pp, ip, cp, Op) {
            if (this._deleted) return () => {};
            const op = "function" === typeof ip ? ip : ip.next.bind(ip),
              Ip = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Rp(Ip, this, "internal-error"), Ip.then((() => op(this.currentUser))), "function" === typeof ip ? pp.addObserver(ip, cp, Op) : pp.addObserver(ip)
          }
          async directlySetCurrentUser(pp) {
            this.currentUser && this.currentUser !== pp && this._currentUser._stopProactiveRefresh(), pp && this.isProactiveRefreshEnabled && pp._startProactiveRefresh(), this.currentUser = pp, pp ? await this.assertedPersistence.setCurrentUser(pp) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(pp) {
            return this.operations = this.operations.then(pp, pp), this.operations
          }
          get assertedPersistence() {
            return Rp(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(pp) {
            pp && !this.frameworks.includes(pp) && (this.frameworks.push(pp), this.frameworks.sort(), this.clientVersion = ui(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var pp;
            const ip = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (ip["X-Firebase-gmpid"] = this.app.options.appId);
            const cp = await (null === (pp = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === pp ? void 0 : pp.getHeartbeatsHeader());
            cp && (ip["X-Firebase-Client"] = cp);
            const Op = await this._getAppCheckToken();
            return Op && (ip["X-Firebase-AppCheck"] = Op), ip
          }
          async _getAppCheckToken() {
            var pp;
            const ip = await (null === (pp = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === pp ? void 0 : pp.getToken());
            return (null === ip || void 0 === ip ? void 0 : ip.error) && function(pp) {
              if (tp.logLevel <= Sp.c.WARN) {
                for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
                tp.warn(`Auth (${op.f}): ${pp}`, ...cp)
              }
            }(`Error while retrieving App Check token: ${ip.error}`), null === ip || void 0 === ip ? void 0 : ip.token
          }
        }

        function Qi(pp) {
          return (0, Op.F)(pp)
        }
        class Ji {
          constructor(pp) {
            this.auth = pp, this.observer = null, this.addObserver = (0, Op.x)((pp => this.observer = pp))
          }
          get next() {
            return Rp(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Bi(pp, ip) {
          const cp = (0, op.x)(pp, "auth");
          if (cp.isInitialized()) {
            const pp = cp.getImmediate(),
              op = cp.getOptions();
            if ((0, Op.y)(op, null !== ip && void 0 !== ip ? ip : {})) return pp;
            dp(pp, "already-initialized")
          }
          return cp.initialize({
            options: ip
          })
        }

        function Ni(pp, ip, cp) {
          const Op = Qi(pp);
          Rp(Op._canInitEmulator, Op, "emulator-config-failed"), Rp(/^https?:\/\//.test(ip), Op, "invalid-emulator-scheme");
          const op = !!(null === cp || void 0 === cp ? void 0 : cp.disableWarnings),
            Ip = Ti(ip),
            {
              host: Sp,
              port: xp
            } = function(pp) {
              const ip = Ti(pp),
                cp = /(\/\/)?([^?#/]+)/.exec(pp.substr(ip.length));
              if (!cp) return {
                host: "",
                port: null
              };
              const Op = cp[2].split("@").pop() || "",
                op = /^(\[[^\]]+\])(:|$)/.exec(Op);
              if (op) {
                const pp = op[1];
                return {
                  host: pp,
                  port: fi(Op.substr(pp.length + 1))
                }
              } {
                const [pp, ip] = Op.split(":");
                return {
                  host: pp,
                  port: fi(ip)
                }
              }
            }(ip),
            Lp = null === xp ? "" : `:${xp}`;
          Op.config.emulator = {
            url: `${Ip}//${Sp}${Lp}/`
          }, Op.settings.appVerificationDisabledForTesting = !0, Op.emulatorConfig = Object.freeze({
            host: Sp,
            port: xp,
            protocol: Ip.replace(":", ""),
            options: Object.freeze({
              disableWarnings: op
            })
          }), op || function() {
            function pp() {
              const pp = document.createElement("p"),
                ip = pp.style;
              pp.innerText = "Running in emulator mode. Do not use with production credentials.", ip.position = "fixed", ip.width = "100%", ip.backgroundColor = "#ffffff", ip.border = ".1em solid #000000", ip.color = "#b50000", ip.bottom = "0px", ip.left = "0px", ip.margin = "0px", ip.zIndex = "10000", ip.textAlign = "center", pp.classList.add("firebase-emulator-warning"), document.body.appendChild(pp)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", pp) : pp())
          }()
        }

        function Ti(pp) {
          const ip = pp.indexOf(":");
          return ip < 0 ? "" : pp.substr(0, ip + 1)
        }

        function fi(pp) {
          if (!pp) return null;
          const ip = Number(pp);
          return isNaN(ip) ? null : ip
        }
        class bi {
          constructor(pp, ip) {
            this.providerId = pp, this.signInMethod = ip
          }
          toJSON() {
            return qp("not implemented")
          }
          _getIdTokenResponse(pp) {
            return qp("not implemented")
          }
          _linkToIdToken(pp, ip) {
            return qp("not implemented")
          }
          _getReauthenticationResolver(pp) {
            return qp("not implemented")
          }
        }
        async function ai(pp, ip) {
          return fp(pp, "POST", "/v1/accounts:resetPassword", Tp(pp, ip))
        }
        async function ni(pp, ip) {
          return fp(pp, "POST", "/v1/accounts:update", ip)
        }
        async function Fi(pp, ip) {
          return hp(pp, "POST", "/v1/accounts:signInWithPassword", Tp(pp, ip))
        }
        async function gi(pp, ip) {
          return fp(pp, "POST", "/v1/accounts:sendOobCode", Tp(pp, ip))
        }
        async function Gi(pp, ip) {
          return gi(pp, ip)
        }
        async function ri(pp, ip) {
          return gi(pp, ip)
        }
        class Zi extends bi {
          constructor(pp, ip, cp) {
            let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", cp), this._email = pp, this._password = ip, this._tenantId = Op
          }
          static _fromEmailAndPassword(pp, ip) {
            return new Zi(pp, ip, "password")
          }
          static _fromEmailAndCode(pp, ip) {
            return new Zi(pp, ip, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(pp) {
            const ip = "string" === typeof pp ? JSON.parse(pp) : pp;
            if ((null === ip || void 0 === ip ? void 0 : ip.email) && (null === ip || void 0 === ip ? void 0 : ip.password)) {
              if ("password" === ip.signInMethod) return this._fromEmailAndPassword(ip.email, ip.password);
              if ("emailLink" === ip.signInMethod) return this._fromEmailAndCode(ip.email, ip.password, ip.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(pp) {
            var ip;
            switch (this.signInMethod) {
              case "password":
                const cp = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (ip = pp._getRecaptchaConfig()) || void 0 === ip ? void 0 : ip.emailPasswordEnabled) {
                  const ip = await Ei(pp, cp, "signInWithPassword");
                  return Fi(pp, ip)
                }
                return Fi(pp, cp).catch((async ip => {
                  if ("auth/missing-recaptcha-token" === ip.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const ip = await Ei(pp, cp, "signInWithPassword");
                    return Fi(pp, ip)
                  }
                  return Promise.reject(ip)
                }));
              case "emailLink":
                return async function(pp, ip) {
                  return hp(pp, "POST", "/v1/accounts:signInWithEmailLink", Tp(pp, ip))
                }(pp, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                dp(pp, "internal-error")
            }
          }
          async _linkToIdToken(pp, ip) {
            switch (this.signInMethod) {
              case "password":
                return ni(pp, {
                  idToken: ip,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(pp, ip) {
                  return hp(pp, "POST", "/v1/accounts:signInWithEmailLink", Tp(pp, ip))
                }(pp, {
                  idToken: ip,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                dp(pp, "internal-error")
            }
          }
          _getReauthenticationResolver(pp) {
            return this._getIdTokenResponse(pp)
          }
        }
        async function zi(pp, ip) {
          return hp(pp, "POST", "/v1/accounts:signInWithIdp", Tp(pp, ip))
        }
        class si extends bi {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(pp) {
            const ip = new si(pp.providerId, pp.signInMethod);
            return pp.idToken || pp.accessToken ? (pp.idToken && (ip.idToken = pp.idToken), pp.accessToken && (ip.accessToken = pp.accessToken), pp.nonce && !pp.pendingToken && (ip.nonce = pp.nonce), pp.pendingToken && (ip.pendingToken = pp.pendingToken)) : pp.oauthToken && pp.oauthTokenSecret ? (ip.accessToken = pp.oauthToken, ip.secret = pp.oauthTokenSecret) : dp("argument-error"), ip
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
          static fromJSON(pp) {
            const ip = "string" === typeof pp ? JSON.parse(pp) : pp,
              {
                providerId: cp,
                signInMethod: Op
              } = ip,
              op = Ip(ip, ["providerId", "signInMethod"]);
            if (!cp || !Op) return null;
            const Sp = new si(cp, Op);
            return Sp.idToken = op.idToken || void 0, Sp.accessToken = op.accessToken || void 0, Sp.secret = op.secret, Sp.nonce = op.nonce, Sp.pendingToken = op.pendingToken || null, Sp
          }
          _getIdTokenResponse(pp) {
            return zi(pp, this.buildRequest())
          }
          _linkToIdToken(pp, ip) {
            const cp = this.buildRequest();
            return cp.idToken = ip, zi(pp, cp)
          }
          _getReauthenticationResolver(pp) {
            const ip = this.buildRequest();
            return ip.autoCreate = !1, zi(pp, ip)
          }
          buildRequest() {
            const pp = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) pp.pendingToken = this.pendingToken;
            else {
              const ip = {};
              this.idToken && (ip.id_token = this.idToken), this.accessToken && (ip.access_token = this.accessToken), this.secret && (ip.oauth_token_secret = this.secret), ip.providerId = this.providerId, this.nonce && !this.pendingToken && (ip.nonce = this.nonce), pp.postBody = (0, Op.cb)(ip)
            }
            return pp
          }
        }
        const Ki = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Vi extends bi {
          constructor(pp) {
            super("phone", "phone"), this.params = pp
          }
          static _fromVerification(pp, ip) {
            return new Vi({
              verificationId: pp,
              verificationCode: ip
            })
          }
          static _fromTokenResponse(pp, ip) {
            return new Vi({
              phoneNumber: pp,
              temporaryProof: ip
            })
          }
          _getIdTokenResponse(pp) {
            return async function(pp, ip) {
              return hp(pp, "POST", "/v1/accounts:signInWithPhoneNumber", Tp(pp, ip))
            }(pp, this._makeVerificationRequest())
          }
          _linkToIdToken(pp, ip) {
            return async function(pp, ip) {
              const cp = await hp(pp, "POST", "/v1/accounts:signInWithPhoneNumber", Tp(pp, ip));
              if (cp.temporaryProof) throw Fp(pp, "account-exists-with-different-credential", cp);
              return cp
            }(pp, Object.assign({
              idToken: ip
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(pp) {
            return async function(pp, ip) {
              return hp(pp, "POST", "/v1/accounts:signInWithPhoneNumber", Tp(pp, Object.assign(Object.assign({}, ip), {
                operation: "REAUTH"
              })), Ki)
            }(pp, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: pp,
              phoneNumber: ip,
              verificationId: cp,
              verificationCode: Op
            } = this.params;
            return pp && ip ? {
              temporaryProof: pp,
              phoneNumber: ip
            } : {
              sessionInfo: cp,
              code: Op
            }
          }
          toJSON() {
            const pp = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (pp.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (pp.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (pp.verificationCode = this.params.verificationCode), this.params.verificationId && (pp.verificationId = this.params.verificationId), pp
          }
          static fromJSON(pp) {
            "string" === typeof pp && (pp = JSON.parse(pp));
            const {
              verificationId: ip,
              verificationCode: cp,
              phoneNumber: Op,
              temporaryProof: op
            } = pp;
            return cp || ip || Op || op ? new Vi({
              verificationId: ip,
              verificationCode: cp,
              phoneNumber: Op,
              temporaryProof: op
            }) : null
          }
        }
        class pc {
          constructor(pp) {
            var ip, cp, op, Ip, Sp, xp;
            const Lp = (0, Op._)((0, Op.A)(pp)),
              Yp = null !== (ip = Lp.apiKey) && void 0 !== ip ? ip : null,
              Dp = null !== (cp = Lp.oobCode) && void 0 !== cp ? cp : null,
              Ap = function(pp) {
                switch (pp) {
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
              }(null !== (op = Lp.mode) && void 0 !== op ? op : null);
            Rp(Yp && Dp && Ap, "argument-error"), this.apiKey = Yp, this.operation = Ap, this.code = Dp, this.continueUrl = null !== (Ip = Lp.continueUrl) && void 0 !== Ip ? Ip : null, this.languageCode = null !== (Sp = Lp.languageCode) && void 0 !== Sp ? Sp : null, this.tenantId = null !== (xp = Lp.tenantId) && void 0 !== xp ? xp : null
          }
          static parseLink(pp) {
            const ip = function(pp) {
              const ip = (0, Op._)((0, Op.A)(pp)).link,
                cp = ip ? (0, Op._)((0, Op.A)(ip)).deep_link_id : null,
                op = (0, Op._)((0, Op.A)(pp)).deep_link_id;
              return (op ? (0, Op._)((0, Op.A)(op)).link : null) || op || cp || ip || pp
            }(pp);
            try {
              return new pc(ip)
            } catch (cp) {
              return null
            }
          }
        }

        function ic(pp) {
          return pc.parseLink(pp)
        }
        class cc {
          constructor() {
            this.providerId = cc.PROVIDER_ID
          }
          static credential(pp, ip) {
            return Zi._fromEmailAndPassword(pp, ip)
          }
          static credentialWithLink(pp, ip) {
            const cp = pc.parseLink(ip);
            return Rp(cp, "argument-error"), Zi._fromEmailAndCode(pp, cp.code, cp.tenantId)
          }
        }
        cc.PROVIDER_ID = "password", cc.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", cc.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Oc {
          constructor(pp) {
            this.providerId = pp, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(pp) {
            this.defaultLanguageCode = pp
          }
          setCustomParameters(pp) {
            return this.customParameters = pp, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class oc extends Oc {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(pp) {
            return this.scopes.includes(pp) || this.scopes.push(pp), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class Ic extends oc {
          static credentialFromJSON(pp) {
            const ip = "string" === typeof pp ? JSON.parse(pp) : pp;
            return Rp("providerId" in ip && "signInMethod" in ip, "argument-error"), si._fromParams(ip)
          }
          credential(pp) {
            return this._credential(Object.assign(Object.assign({}, pp), {
              nonce: pp.rawNonce
            }))
          }
          _credential(pp) {
            return Rp(pp.idToken || pp.accessToken, "argument-error"), si._fromParams(Object.assign(Object.assign({}, pp), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(pp) {
            return Ic.oauthCredentialFromTaggedObject(pp)
          }
          static credentialFromError(pp) {
            return Ic.oauthCredentialFromTaggedObject(pp.customData || {})
          }
          static oauthCredentialFromTaggedObject(pp) {
            let {
              _tokenResponse: ip
            } = pp;
            if (!ip) return null;
            const {
              oauthIdToken: cp,
              oauthAccessToken: Op,
              oauthTokenSecret: op,
              pendingToken: Ip,
              nonce: Sp,
              providerId: xp
            } = ip;
            if (!Op && !op && !cp && !Ip) return null;
            if (!xp) return null;
            try {
              return new Ic(xp)._credential({
                idToken: cp,
                accessToken: Op,
                nonce: Sp,
                pendingToken: Ip
              })
            } catch (Lp) {
              return null
            }
          }
        }
        class Sc extends oc {
          constructor() {
            super("facebook.com")
          }
          static credential(pp) {
            return si._fromParams({
              providerId: Sc.PROVIDER_ID,
              signInMethod: Sc.FACEBOOK_SIGN_IN_METHOD,
              accessToken: pp
            })
          }
          static credentialFromResult(pp) {
            return Sc.credentialFromTaggedObject(pp)
          }
          static credentialFromError(pp) {
            return Sc.credentialFromTaggedObject(pp.customData || {})
          }
          static credentialFromTaggedObject(pp) {
            let {
              _tokenResponse: ip
            } = pp;
            if (!ip || !("oauthAccessToken" in ip)) return null;
            if (!ip.oauthAccessToken) return null;
            try {
              return Sc.credential(ip.oauthAccessToken)
            } catch (cp) {
              return null
            }
          }
        }
        Sc.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Sc.PROVIDER_ID = "facebook.com";
        class xc extends oc {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(pp, ip) {
            return si._fromParams({
              providerId: xc.PROVIDER_ID,
              signInMethod: xc.GOOGLE_SIGN_IN_METHOD,
              idToken: pp,
              accessToken: ip
            })
          }
          static credentialFromResult(pp) {
            return xc.credentialFromTaggedObject(pp)
          }
          static credentialFromError(pp) {
            return xc.credentialFromTaggedObject(pp.customData || {})
          }
          static credentialFromTaggedObject(pp) {
            let {
              _tokenResponse: ip
            } = pp;
            if (!ip) return null;
            const {
              oauthIdToken: cp,
              oauthAccessToken: Op
            } = ip;
            if (!cp && !Op) return null;
            try {
              return xc.credential(cp, Op)
            } catch (op) {
              return null
            }
          }
        }
        xc.GOOGLE_SIGN_IN_METHOD = "google.com", xc.PROVIDER_ID = "google.com";
        class Lc extends oc {
          constructor() {
            super("github.com")
          }
          static credential(pp) {
            return si._fromParams({
              providerId: Lc.PROVIDER_ID,
              signInMethod: Lc.GITHUB_SIGN_IN_METHOD,
              accessToken: pp
            })
          }
          static credentialFromResult(pp) {
            return Lc.credentialFromTaggedObject(pp)
          }
          static credentialFromError(pp) {
            return Lc.credentialFromTaggedObject(pp.customData || {})
          }
          static credentialFromTaggedObject(pp) {
            let {
              _tokenResponse: ip
            } = pp;
            if (!ip || !("oauthAccessToken" in ip)) return null;
            if (!ip.oauthAccessToken) return null;
            try {
              return Lc.credential(ip.oauthAccessToken)
            } catch (cp) {
              return null
            }
          }
        }
        Lc.GITHUB_SIGN_IN_METHOD = "github.com", Lc.PROVIDER_ID = "github.com";
        class Yc extends bi {
          constructor(pp, ip) {
            super(pp, pp), this.pendingToken = ip
          }
          _getIdTokenResponse(pp) {
            return zi(pp, this.buildRequest())
          }
          _linkToIdToken(pp, ip) {
            const cp = this.buildRequest();
            return cp.idToken = ip, zi(pp, cp)
          }
          _getReauthenticationResolver(pp) {
            const ip = this.buildRequest();
            return ip.autoCreate = !1, zi(pp, ip)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(pp) {
            const ip = "string" === typeof pp ? JSON.parse(pp) : pp,
              {
                providerId: cp,
                signInMethod: Op,
                pendingToken: op
              } = ip;
            return cp && Op && op && cp === Op ? new Yc(cp, op) : null
          }
          static _create(pp, ip) {
            return new Yc(pp, ip)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Dc extends Oc {
          constructor(pp) {
            Rp(pp.startsWith("saml."), "argument-error"), super(pp)
          }
          static credentialFromResult(pp) {
            return Dc.samlCredentialFromTaggedObject(pp)
          }
          static credentialFromError(pp) {
            return Dc.samlCredentialFromTaggedObject(pp.customData || {})
          }
          static credentialFromJSON(pp) {
            const ip = Yc.fromJSON(pp);
            return Rp(ip, "argument-error"), ip
          }
          static samlCredentialFromTaggedObject(pp) {
            let {
              _tokenResponse: ip
            } = pp;
            if (!ip) return null;
            const {
              pendingToken: cp,
              providerId: Op
            } = ip;
            if (!cp || !Op) return null;
            try {
              return Yc._create(Op, cp)
            } catch (op) {
              return null
            }
          }
        }
        class Ac extends oc {
          constructor() {
            super("twitter.com")
          }
          static credential(pp, ip) {
            return si._fromParams({
              providerId: Ac.PROVIDER_ID,
              signInMethod: Ac.TWITTER_SIGN_IN_METHOD,
              oauthToken: pp,
              oauthTokenSecret: ip
            })
          }
          static credentialFromResult(pp) {
            return Ac.credentialFromTaggedObject(pp)
          }
          static credentialFromError(pp) {
            return Ac.credentialFromTaggedObject(pp.customData || {})
          }
          static credentialFromTaggedObject(pp) {
            let {
              _tokenResponse: ip
            } = pp;
            if (!ip) return null;
            const {
              oauthAccessToken: cp,
              oauthTokenSecret: Op
            } = ip;
            if (!cp || !Op) return null;
            try {
              return Ac.credential(cp, Op)
            } catch (op) {
              return null
            }
          }
        }
        async function Pc(pp, ip) {
          return hp(pp, "POST", "/v1/accounts:signUp", Tp(pp, ip))
        }
        Ac.TWITTER_SIGN_IN_METHOD = "twitter.com", Ac.PROVIDER_ID = "twitter.com";
        class Wc {
          constructor(pp) {
            this.user = pp.user, this.providerId = pp.providerId, this._tokenResponse = pp._tokenResponse, this.operationType = pp.operationType
          }
          static async _fromIdTokenResponse(pp, ip, cp) {
            let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const op = await Ii._fromIdTokenResponse(pp, cp, Op),
              Ip = yc(cp);
            return new Wc({
              user: op,
              providerId: Ip,
              _tokenResponse: cp,
              operationType: ip
            })
          }
          static async _forOperation(pp, ip, cp) {
            await pp._updateTokensIfNecessary(cp, !0);
            const Op = yc(cp);
            return new Wc({
              user: pp,
              providerId: Op,
              _tokenResponse: cp,
              operationType: ip
            })
          }
        }

        function yc(pp) {
          return pp.providerId ? pp.providerId : "phoneNumber" in pp ? "phone" : null
        }
        async function Uc(pp) {
          var ip;
          const cp = Qi(pp);
          if (await cp._initializationPromise, null === (ip = cp.currentUser) || void 0 === ip ? void 0 : ip.isAnonymous) return new Wc({
            user: cp.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Op = await Pc(cp, {
              returnSecureToken: !0
            }),
            op = await Wc._fromIdTokenResponse(cp, "signIn", Op, !0);
          return await cp._updateCurrentUser(op.user), op
        }
        class wc extends Op.l {
          constructor(pp, ip, cp, Op) {
            var op;
            super(ip.code, ip.message), this.operationType = cp, this.user = Op, Object.setPrototypeOf(this, wc.prototype), this.customData = {
              appName: pp.name,
              tenantId: null !== (op = pp.tenantId) && void 0 !== op ? op : void 0,
              _serverResponse: ip.customData._serverResponse,
              operationType: cp
            }
          }
          static _fromErrorAndOperation(pp, ip, cp, Op) {
            return new wc(pp, ip, cp, Op)
          }
        }

        function vc(pp, ip, cp, Op) {
          return ("reauthenticate" === ip ? cp._getReauthenticationResolver(pp) : cp._getIdTokenResponse(pp)).catch((cp => {
            if ("auth/multi-factor-auth-required" === cp.code) throw wc._fromErrorAndOperation(pp, cp, ip, Op);
            throw cp
          }))
        }

        function tc(pp) {
          return new Set(pp.map((pp => {
            let {
              providerId: ip
            } = pp;
            return ip
          })).filter((pp => !!pp)))
        }
        async function Hc(pp, ip) {
          const cp = (0, Op.F)(pp);
          await ec(!0, cp, ip);
          const {
            providerUserInfo: op
          } = await async function(pp, ip) {
            return fp(pp, "POST", "/v1/accounts:update", ip)
          }(cp.auth, {
            idToken: await cp.getIdToken(),
            deleteProvider: [ip]
          }), Ip = tc(op || []);
          return cp.providerData = cp.providerData.filter((pp => Ip.has(pp.providerId))), Ip.has("phone") || (cp.phoneNumber = null), await cp.auth._persistUserIfCurrent(cp), cp
        }
        async function dc(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Op = await sp(pp, ip._linkToIdToken(pp.auth, await pp.getIdToken()), cp);
          return Wc._forOperation(pp, "link", Op)
        }
        async function ec(pp, ip, cp) {
          await ii(ip);
          const Op = !1 === pp ? "provider-already-linked" : "no-such-provider";
          Rp(tc(ip.providerData).has(cp) === pp, ip.auth, Op)
        }
        async function uc(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Op
          } = pp, op = "reauthenticate";
          try {
            const Ip = await sp(pp, vc(Op, op, ip, pp), cp);
            Rp(Ip.idToken, Op, "internal-error");
            const Sp = zp(Ip.idToken);
            Rp(Sp, Op, "internal-error");
            const {
              sub: xp
            } = Sp;
            return Rp(pp.uid === xp, Op, "user-mismatch"), Wc._forOperation(pp, op, Ip)
          } catch (Ip) {
            throw "auth/user-not-found" === (null === Ip || void 0 === Ip ? void 0 : Ip.code) && dp(Op, "user-mismatch"), Ip
          }
        }
        async function jc(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Op = "signIn",
            op = await vc(pp, Op, ip),
            Ip = await Wc._fromIdTokenResponse(pp, Op, op);
          return cp || await pp._updateCurrentUser(Ip.user), Ip
        }
        async function kc(pp, ip) {
          return jc(Qi(pp), ip)
        }
        async function mc(pp, ip) {
          const cp = (0, Op.F)(pp);
          return await ec(!1, cp, ip.providerId), dc(cp, ip)
        }
        async function Rc(pp, ip) {
          return uc((0, Op.F)(pp), ip)
        }
        async function qc(pp, ip) {
          const cp = Qi(pp),
            Op = await async function(pp, ip) {
              return hp(pp, "POST", "/v1/accounts:signInWithCustomToken", Tp(pp, ip))
            }(cp, {
              token: ip,
              returnSecureToken: !0
            }), op = await Wc._fromIdTokenResponse(cp, "signIn", Op);
          return await cp._updateCurrentUser(op.user), op
        }
        class Mc {
          constructor(pp, ip) {
            this.factorId = pp, this.uid = ip.mfaEnrollmentId, this.enrollmentTime = new Date(ip.enrolledAt).toUTCString(), this.displayName = ip.displayName
          }
          static _fromServerResponse(pp, ip) {
            return "phoneInfo" in ip ? Cc._fromServerResponse(pp, ip) : "totpInfo" in ip ? Ec._fromServerResponse(pp, ip) : dp(pp, "internal-error")
          }
        }
        class Cc extends Mc {
          constructor(pp) {
            super("phone", pp), this.phoneNumber = pp.phoneInfo
          }
          static _fromServerResponse(pp, ip) {
            return new Cc(ip)
          }
        }
        class Ec extends Mc {
          constructor(pp) {
            super("totp", pp)
          }
          static _fromServerResponse(pp, ip) {
            return new Ec(ip)
          }
        }

        function Xc(pp, ip, cp) {
          var Op;
          Rp((null === (Op = cp.url) || void 0 === Op ? void 0 : Op.length) > 0, pp, "invalid-continue-uri"), Rp("undefined" === typeof cp.dynamicLinkDomain || cp.dynamicLinkDomain.length > 0, pp, "invalid-dynamic-link-domain"), ip.continueUrl = cp.url, ip.dynamicLinkDomain = cp.dynamicLinkDomain, ip.canHandleCodeInApp = cp.handleCodeInApp, cp.iOS && (Rp(cp.iOS.bundleId.length > 0, pp, "missing-ios-bundle-id"), ip.iOSBundleId = cp.iOS.bundleId), cp.android && (Rp(cp.android.packageName.length > 0, pp, "missing-android-pkg-name"), ip.androidInstallApp = cp.android.installApp, ip.androidMinimumVersionCode = cp.android.minimumVersion, ip.androidPackageName = cp.android.packageName)
        }
        async function lc(pp, ip, cp) {
          var Op;
          const op = Qi(pp),
            Ip = {
              requestType: "PASSWORD_RESET",
              email: ip,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Op = op._getRecaptchaConfig()) || void 0 === Op ? void 0 : Op.emailPasswordEnabled) {
            const pp = await Ei(op, Ip, "getOobCode", !0);
            cp && Xc(op, pp, cp), await Gi(op, pp)
          } else cp && Xc(op, Ip, cp), await Gi(op, Ip).catch((async pp => {
            if ("auth/missing-recaptcha-token" !== pp.code) return Promise.reject(pp);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const pp = await Ei(op, Ip, "getOobCode", !0);
              cp && Xc(op, pp, cp), await Gi(op, pp)
            }
          }))
        }
        async function Qc(pp, ip, cp) {
          await ai((0, Op.F)(pp), {
            oobCode: ip,
            newPassword: cp
          })
        }
        async function Jc(pp, ip) {
          await async function(pp, ip) {
            return fp(pp, "POST", "/v1/accounts:update", Tp(pp, ip))
          }((0, Op.F)(pp), {
            oobCode: ip
          })
        }
        async function Bc(pp, ip) {
          const cp = (0, Op.F)(pp),
            op = await ai(cp, {
              oobCode: ip
            }),
            Ip = op.requestType;
          switch (Rp(Ip, cp, "internal-error"), Ip) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Rp(op.newEmail, cp, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Rp(op.mfaInfo, cp, "internal-error");
            default:
              Rp(op.email, cp, "internal-error")
          }
          let Sp = null;
          return op.mfaInfo && (Sp = Mc._fromServerResponse(Qi(cp), op.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === op.requestType ? op.newEmail : op.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === op.requestType ? op.email : op.newEmail) || null,
              multiFactorInfo: Sp
            },
            operation: Ip
          }
        }
        async function Nc(pp, ip) {
          const {
            data: cp
          } = await Bc((0, Op.F)(pp), ip);
          return cp.email
        }
        async function Tc(pp, ip, cp) {
          var Op;
          const op = Qi(pp),
            Ip = {
              returnSecureToken: !0,
              email: ip,
              password: cp,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Sp;
          if (null === (Op = op._getRecaptchaConfig()) || void 0 === Op ? void 0 : Op.emailPasswordEnabled) {
            const pp = await Ei(op, Ip, "signUpPassword");
            Sp = Pc(op, pp)
          } else Sp = Pc(op, Ip).catch((async pp => {
            if ("auth/missing-recaptcha-token" === pp.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const pp = await Ei(op, Ip, "signUpPassword");
              return Pc(op, pp)
            }
            return Promise.reject(pp)
          }));
          const xp = await Sp.catch((pp => Promise.reject(pp))),
            Lp = await Wc._fromIdTokenResponse(op, "signIn", xp);
          return await op._updateCurrentUser(Lp.user), Lp
        }

        function fc(pp, ip, cp) {
          return kc((0, Op.F)(pp), cc.credential(ip, cp))
        }
        async function bc(pp, ip, cp) {
          var Op;
          const op = Qi(pp),
            Ip = {
              requestType: "EMAIL_SIGNIN",
              email: ip,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Sp(pp, ip) {
            Rp(ip.handleCodeInApp, op, "argument-error"), ip && Xc(op, pp, ip)
          }
          if (null === (Op = op._getRecaptchaConfig()) || void 0 === Op ? void 0 : Op.emailPasswordEnabled) {
            const pp = await Ei(op, Ip, "getOobCode", !0);
            Sp(pp, cp), await ri(op, pp)
          } else Sp(Ip, cp), await ri(op, Ip).catch((async pp => {
            if ("auth/missing-recaptcha-token" !== pp.code) return Promise.reject(pp);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const pp = await Ei(op, Ip, "getOobCode", !0);
              Sp(pp, cp), await ri(op, pp)
            }
          }))
        }

        function hc(pp, ip) {
          const cp = pc.parseLink(ip);
          return "EMAIL_SIGNIN" === (null === cp || void 0 === cp ? void 0 : cp.operation)
        }
        async function ac(pp, ip, cp) {
          const op = (0, Op.F)(pp),
            Ip = cc.credentialWithLink(ip, cp || Cp());
          return Rp(Ip._tenantId === (op.tenantId || null), op, "tenant-id-mismatch"), kc(op, Ip)
        }
        async function nc(pp, ip) {
          const cp = {
              identifier: ip,
              continueUri: Ep() ? Cp() : "http://localhost"
            },
            {
              signinMethods: op
            } = await async function(pp, ip) {
              return fp(pp, "POST", "/v1/accounts:createAuthUri", Tp(pp, ip))
            }((0, Op.F)(pp), cp);
          return op || []
        }
        async function Fc(pp, ip) {
          const cp = (0, Op.F)(pp),
            op = {
              requestType: "VERIFY_EMAIL",
              idToken: await pp.getIdToken()
            };
          ip && Xc(cp.auth, op, ip);
          const {
            email: Ip
          } = await async function(pp, ip) {
            return gi(pp, ip)
          }(cp.auth, op);
          Ip !== pp.email && await pp.reload()
        }
        async function gc(pp, ip, cp) {
          const op = (0, Op.F)(pp),
            Ip = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await pp.getIdToken(),
              newEmail: ip
            };
          cp && Xc(op.auth, Ip, cp);
          const {
            email: Sp
          } = await async function(pp, ip) {
            return gi(pp, ip)
          }(op.auth, Ip);
          Sp !== pp.email && await pp.reload()
        }
        async function Gc(pp, ip) {
          let {
            displayName: cp,
            photoURL: op
          } = ip;
          if (void 0 === cp && void 0 === op) return;
          const Ip = (0, Op.F)(pp),
            Sp = {
              idToken: await Ip.getIdToken(),
              displayName: cp,
              photoUrl: op,
              returnSecureToken: !0
            },
            xp = await sp(Ip, async function(pp, ip) {
              return fp(pp, "POST", "/v1/accounts:update", ip)
            }(Ip.auth, Sp));
          Ip.displayName = xp.displayName || null, Ip.photoURL = xp.photoUrl || null;
          const Lp = Ip.providerData.find((pp => {
            let {
              providerId: ip
            } = pp;
            return "password" === ip
          }));
          Lp && (Lp.displayName = Ip.displayName, Lp.photoURL = Ip.photoURL), await Ip._updateTokensIfNecessary(xp)
        }

        function rc(pp, ip) {
          return zc((0, Op.F)(pp), ip, null)
        }

        function Zc(pp, ip) {
          return zc((0, Op.F)(pp), null, ip)
        }
        async function zc(pp, ip, cp) {
          const {
            auth: Op
          } = pp, op = {
            idToken: await pp.getIdToken(),
            returnSecureToken: !0
          };
          ip && (op.email = ip), cp && (op.password = cp);
          const Ip = await sp(pp, ni(Op, op));
          await pp._updateTokensIfNecessary(Ip, !0)
        }
        class sc {
          constructor(pp, ip) {
            let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = pp, this.providerId = ip, this.profile = cp
          }
        }
        class Kc extends sc {
          constructor(pp, ip, cp, Op) {
            super(pp, ip, cp), this.username = Op
          }
        }
        class Vc extends sc {
          constructor(pp, ip) {
            super(pp, "facebook.com", ip)
          }
        }
        class pO extends Kc {
          constructor(pp, ip) {
            super(pp, "github.com", ip, "string" === typeof(null === ip || void 0 === ip ? void 0 : ip.login) ? null === ip || void 0 === ip ? void 0 : ip.login : null)
          }
        }
        class iO extends sc {
          constructor(pp, ip) {
            super(pp, "google.com", ip)
          }
        }
        class cO extends Kc {
          constructor(pp, ip, cp) {
            super(pp, "twitter.com", ip, cp)
          }
        }

        function OO(pp) {
          const {
            user: ip,
            _tokenResponse: cp
          } = pp;
          return ip.isAnonymous && !cp ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(pp) {
            var ip, cp;
            if (!pp) return null;
            const {
              providerId: Op
            } = pp, op = pp.rawUserInfo ? JSON.parse(pp.rawUserInfo) : {}, Ip = pp.isNewUser || "identitytoolkit#SignupNewUserResponse" === pp.kind;
            if (!Op && (null === pp || void 0 === pp ? void 0 : pp.idToken)) {
              const Op = null === (cp = null === (ip = zp(pp.idToken)) || void 0 === ip ? void 0 : ip.firebase) || void 0 === cp ? void 0 : cp.sign_in_provider;
              if (Op) return new sc(Ip, "anonymous" !== Op && "custom" !== Op ? Op : null)
            }
            if (!Op) return null;
            switch (Op) {
              case "facebook.com":
                return new Vc(Ip, op);
              case "github.com":
                return new pO(Ip, op);
              case "google.com":
                return new iO(Ip, op);
              case "twitter.com":
                return new cO(Ip, op, pp.screenName || null);
              case "custom":
              case "anonymous":
                return new sc(Ip, null);
              default:
                return new sc(Ip, Op, op)
            }
          }(cp)
        }

        function oO(pp, ip) {
          return (0, Op.F)(pp).setPersistence(ip)
        }

        function IO(pp) {
          return Qi(pp).initializeRecaptchaConfig()
        }

        function SO(pp, ip, cp, op) {
          return (0, Op.F)(pp).onIdTokenChanged(ip, cp, op)
        }

        function xO(pp, ip, cp) {
          return (0, Op.F)(pp).beforeAuthStateChanged(ip, cp)
        }

        function LO(pp, ip, cp, op) {
          return (0, Op.F)(pp).onAuthStateChanged(ip, cp, op)
        }

        function YO(pp) {
          (0, Op.F)(pp).useDeviceLanguage()
        }

        function DO(pp, ip) {
          return (0, Op.F)(pp).updateCurrentUser(ip)
        }

        function AO(pp) {
          return (0, Op.F)(pp).signOut()
        }
        async function PO(pp) {
          return (0, Op.F)(pp).delete()
        }
        class WO {
          constructor(pp, ip, cp) {
            this.type = pp, this.credential = ip, this.auth = cp
          }
          static _fromIdtoken(pp, ip) {
            return new WO("enroll", pp, ip)
          }
          static _fromMfaPendingCredential(pp) {
            return new WO("signin", pp)
          }
          toJSON() {
            const pp = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [pp]: this.credential
              }
            }
          }
          static fromJSON(pp) {
            var ip, cp;
            if (null === pp || void 0 === pp ? void 0 : pp.multiFactorSession) {
              if (null === (ip = pp.multiFactorSession) || void 0 === ip ? void 0 : ip.pendingCredential) return WO._fromMfaPendingCredential(pp.multiFactorSession.pendingCredential);
              if (null === (cp = pp.multiFactorSession) || void 0 === cp ? void 0 : cp.idToken) return WO._fromIdtoken(pp.multiFactorSession.idToken)
            }
            return null
          }
        }
        class yO {
          constructor(pp, ip, cp) {
            this.session = pp, this.hints = ip, this.signInResolver = cp
          }
          static _fromError(pp, ip) {
            const cp = Qi(pp),
              Op = ip.customData._serverResponse,
              op = (Op.mfaInfo || []).map((pp => Mc._fromServerResponse(cp, pp)));
            Rp(Op.mfaPendingCredential, cp, "internal-error");
            const Ip = WO._fromMfaPendingCredential(Op.mfaPendingCredential);
            return new yO(Ip, op, (async pp => {
              const op = await pp._process(cp, Ip);
              delete Op.mfaInfo, delete Op.mfaPendingCredential;
              const Sp = Object.assign(Object.assign({}, Op), {
                idToken: op.idToken,
                refreshToken: op.refreshToken
              });
              switch (ip.operationType) {
                case "signIn":
                  const pp = await Wc._fromIdTokenResponse(cp, ip.operationType, Sp);
                  return await cp._updateCurrentUser(pp.user), pp;
                case "reauthenticate":
                  return Rp(ip.user, cp, "internal-error"), Wc._forOperation(ip.user, ip.operationType, Sp);
                default:
                  dp(cp, "internal-error")
              }
            }))
          }
          async resolveSignIn(pp) {
            const ip = pp;
            return this.signInResolver(ip)
          }
        }

        function UO(pp, ip) {
          var cp;
          const op = (0, Op.F)(pp),
            Ip = ip;
          return Rp(ip.customData.operationType, op, "argument-error"), Rp(null === (cp = Ip.customData._serverResponse) || void 0 === cp ? void 0 : cp.mfaPendingCredential, op, "argument-error"), yO._fromError(op, Ip)
        }
        class wO {
          constructor(pp) {
            this.user = pp, this.enrolledFactors = [], pp._onReload((ip => {
              ip.mfaInfo && (this.enrolledFactors = ip.mfaInfo.map((ip => Mc._fromServerResponse(pp.auth, ip))))
            }))
          }
          static _fromUser(pp) {
            return new wO(pp)
          }
          async getSession() {
            return WO._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(pp, ip) {
            const cp = pp,
              Op = await this.getSession(),
              op = await sp(this.user, cp._process(this.user.auth, Op, ip));
            return await this.user._updateTokensIfNecessary(op), this.user.reload()
          }
          async unenroll(pp) {
            const ip = "string" === typeof pp ? pp : pp.uid,
              cp = await this.user.getIdToken();
            try {
              const pp = await sp(this.user, (Op = this.user.auth, op = {
                idToken: cp,
                mfaEnrollmentId: ip
              }, fp(Op, "POST", "/v2/accounts/mfaEnrollment:withdraw", Tp(Op, op))));
              this.enrolledFactors = this.enrolledFactors.filter((pp => {
                let {
                  uid: cp
                } = pp;
                return cp !== ip
              })), await this.user._updateTokensIfNecessary(pp), await this.user.reload()
            } catch (Ip) {
              throw Ip
            }
            var Op, op
          }
        }
        const vO = new WeakMap;

        function tO(pp) {
          const ip = (0, Op.F)(pp);
          return vO.has(ip) || vO.set(ip, wO._fromUser(ip)), vO.get(ip)
        }
        const HO = "__sak";
        class dO {
          constructor(pp, ip) {
            this.storageRetriever = pp, this.type = ip
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(HO, "1"), this.storage.removeItem(HO), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (pp) {
              return Promise.resolve(!1)
            }
          }
          _set(pp, ip) {
            return this.storage.setItem(pp, JSON.stringify(ip)), Promise.resolve()
          }
          _get(pp) {
            const ip = this.storage.getItem(pp);
            return Promise.resolve(ip ? JSON.parse(ip) : null)
          }
          _remove(pp) {
            return this.storage.removeItem(pp), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class eO extends dO {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (pp, ip) => this.onStorageEvent(pp, ip), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const pp = (0, Op.H)();
              return yi(pp) || di(pp)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (pp) {
                return !1
              }
            }(), this.fallbackToPolling = ei(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(pp) {
            for (const ip of Object.keys(this.listeners)) {
              const cp = this.storage.getItem(ip),
                Op = this.localCache[ip];
              cp !== Op && pp(ip, Op, cp)
            }
          }
          onStorageEvent(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!pp.key) return void this.forAllChangedKeys(((pp, ip, cp) => {
              this.notifyListeners(pp, cp)
            }));
            const cp = pp.key;
            if (ip ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Op = this.storage.getItem(cp);
              if (pp.newValue !== Op) null !== pp.newValue ? this.storage.setItem(cp, pp.newValue) : this.storage.removeItem(cp);
              else if (this.localCache[cp] === pp.newValue && !ip) return
            }
            const op = () => {
                const pp = this.storage.getItem(cp);
                (ip || this.localCache[cp] !== pp) && this.notifyListeners(cp, pp)
              },
              Ip = this.storage.getItem(cp);
            (0, Op.P)() && 10 === document.documentMode && Ip !== pp.newValue && pp.newValue !== pp.oldValue ? setTimeout(op, 10) : op()
          }
          notifyListeners(pp, ip) {
            this.localCache[pp] = ip;
            const cp = this.listeners[pp];
            if (cp)
              for (const Op of Array.from(cp)) Op(ip ? JSON.parse(ip) : ip)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((pp, ip, cp) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: pp,
                  oldValue: ip,
                  newValue: cp
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
          _addListener(pp, ip) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[pp] || (this.listeners[pp] = new Set, this.localCache[pp] = this.storage.getItem(pp)), this.listeners[pp].add(ip)
          }
          _removeListener(pp, ip) {
            this.listeners[pp] && (this.listeners[pp].delete(ip), 0 === this.listeners[pp].size && delete this.listeners[pp]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(pp, ip) {
            await super._set(pp, ip), this.localCache[pp] = JSON.stringify(ip)
          }
          async _get(pp) {
            const ip = await super._get(pp);
            return this.localCache[pp] = JSON.stringify(ip), ip
          }
          async _remove(pp) {
            await super._remove(pp), delete this.localCache[pp]
          }
        }
        eO.type = "LOCAL";
        const uO = eO;
        class jO extends dO {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(pp, ip) {}
          _removeListener(pp, ip) {}
        }
        jO.type = "SESSION";
        const kO = jO;
        class mO {
          constructor(pp) {
            this.eventTarget = pp, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(pp) {
            const ip = this.receivers.find((ip => ip.isListeningto(pp)));
            if (ip) return ip;
            const cp = new mO(pp);
            return this.receivers.push(cp), cp
          }
          isListeningto(pp) {
            return this.eventTarget === pp
          }
          async handleEvent(pp) {
            const ip = pp,
              {
                eventId: cp,
                eventType: Op,
                data: op
              } = ip.data,
              Ip = this.handlersMap[Op];
            if (!(null === Ip || void 0 === Ip ? void 0 : Ip.size)) return;
            ip.ports[0].postMessage({
              status: "ack",
              eventId: cp,
              eventType: Op
            });
            const Sp = Array.from(Ip).map((async pp => pp(ip.origin, op))),
              xp = await
            function(pp) {
              return Promise.all(pp.map((async pp => {
                try {
                  return {
                    fulfilled: !0,
                    value: await pp
                  }
                } catch (ip) {
                  return {
                    fulfilled: !1,
                    reason: ip
                  }
                }
              })))
            }(Sp);
            ip.ports[0].postMessage({
              status: "done",
              eventId: cp,
              eventType: Op,
              response: xp
            })
          }
          _subscribe(pp, ip) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[pp] || (this.handlersMap[pp] = new Set), this.handlersMap[pp].add(ip)
          }
          _unsubscribe(pp, ip) {
            this.handlersMap[pp] && ip && this.handlersMap[pp].delete(ip), ip && 0 !== this.handlersMap[pp].size || delete this.handlersMap[pp], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function RO() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            cp = "";
          for (let Op = 0; Op < ip; Op++) cp += Math.floor(10 * Math.random());
          return pp + cp
        }
        mO.receivers = [];
        class qO {
          constructor(pp) {
            this.target = pp, this.handlers = new Set
          }
          removeMessageHandler(pp) {
            pp.messageChannel && (pp.messageChannel.port1.removeEventListener("message", pp.ku), pp.messageChannel.port1.close()), this.handlers.delete(pp)
          }
          async _send(pp, ip) {
            let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Op = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Op) throw new Error("connection_unavailable");
            let op, Ip;
            return new Promise(((Sp, xp) => {
              const Lp = RO("", 20);
              Op.port1.start();
              const Yp = setTimeout((() => {
                xp(new Error("unsupported_event"))
              }), cp);
              Ip = {
                messageChannel: Op,
                ku(pp) {
                  const ip = pp;
                  if (ip.data.eventId === Lp) switch (ip.data.status) {
                    case "ack":
                      clearTimeout(Yp), op = setTimeout((() => {
                        xp(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(op), Sp(ip.data.response);
                      break;
                    default:
                      clearTimeout(Yp), clearTimeout(op), xp(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Ip), Op.port1.addEventListener("message", Ip.ku), this.target.postMessage({
                eventType: pp,
                eventId: Lp,
                data: ip
              }, [Op.port2])
            })).finally((() => {
              Ip && this.removeMessageHandler(Ip)
            }))
          }
        }

        function MO() {
          return window
        }

        function CO() {
          return "undefined" !== typeof MO().WorkerGlobalScope && "function" === typeof MO().importScripts
        }
        const EO = "firebaseLocalStorageDb",
          XO = "firebaseLocalStorage",
          lO = "fbase_key";
        class QO {
          constructor(pp) {
            this.request = pp
          }
          toPromise() {
            return new Promise(((pp, ip) => {
              this.request.addEventListener("success", (() => {
                pp(this.request.result)
              })), this.request.addEventListener("error", (() => {
                ip(this.request.error)
              }))
            }))
          }
        }

        function JO(pp, ip) {
          return pp.transaction([XO], ip ? "readwrite" : "readonly").objectStore(XO)
        }

        function BO() {
          const pp = indexedDB.open(EO, 1);
          return new Promise(((ip, cp) => {
            pp.addEventListener("error", (() => {
              cp(pp.error)
            })), pp.addEventListener("upgradeneeded", (() => {
              const ip = pp.result;
              try {
                ip.createObjectStore(XO, {
                  keyPath: lO
                })
              } catch (Op) {
                cp(Op)
              }
            })), pp.addEventListener("success", (async () => {
              const cp = pp.result;
              cp.objectStoreNames.contains(XO) ? ip(cp) : (cp.close(), await
                function() {
                  const pp = indexedDB.deleteDatabase(EO);
                  return new QO(pp).toPromise()
                }(), ip(await BO()))
            }))
          }))
        }
        async function NO(pp, ip, cp) {
          const Op = JO(pp, !0).put({
            [lO]: ip,
            value: cp
          });
          return new QO(Op).toPromise()
        }

        function TO(pp, ip) {
          const cp = JO(pp, !0).delete(ip);
          return new QO(cp).toPromise()
        }
        class fO {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await BO()), this.db
          }
          async _withRetries(pp) {
            let ip = 0;
            for (;;) try {
              const ip = await this._openDb();
              return await pp(ip)
            } catch (cp) {
              if (ip++ > 3) throw cp;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return CO() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = mO._getInstance(CO() ? self : null), this.receiver._subscribe("keyChanged", (async (pp, ip) => ({
              keyProcessed: (await this._poll()).includes(ip.key)
            }))), this.receiver._subscribe("ping", (async (pp, ip) => ["keyChanged"]))
          }
          async initializeSender() {
            var pp, ip;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (pp) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new qO(this.activeServiceWorker);
            const cp = await this.sender._send("ping", {}, 800);
            cp && (null === (pp = cp[0]) || void 0 === pp ? void 0 : pp.fulfilled) && (null === (ip = cp[0]) || void 0 === ip ? void 0 : ip.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(pp) {
            if (this.sender && this.activeServiceWorker && function() {
                var pp;
                return (null === (pp = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === pp ? void 0 : pp.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: pp
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (ip) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const pp = await BO();
              return await NO(pp, HO, "1"), await TO(pp, HO), !0
            } catch (pp) {}
            return !1
          }
          async _withPendingWrite(pp) {
            this.pendingWrites++;
            try {
              await pp()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(pp, ip) {
            return this._withPendingWrite((async () => (await this._withRetries((cp => NO(cp, pp, ip))), this.localCache[pp] = ip, this.notifyServiceWorker(pp))))
          }
          async _get(pp) {
            const ip = await this._withRetries((ip => async function(pp, ip) {
              const cp = JO(pp, !1).get(ip),
                Op = await new QO(cp).toPromise();
              return void 0 === Op ? null : Op.value
            }(ip, pp)));
            return this.localCache[pp] = ip, ip
          }
          async _remove(pp) {
            return this._withPendingWrite((async () => (await this._withRetries((ip => TO(ip, pp))), delete this.localCache[pp], this.notifyServiceWorker(pp))))
          }
          async _poll() {
            const pp = await this._withRetries((pp => {
              const ip = JO(pp, !1).getAll();
              return new QO(ip).toPromise()
            }));
            if (!pp) return [];
            if (0 !== this.pendingWrites) return [];
            const ip = [],
              cp = new Set;
            for (const {
                fbase_key: Op,
                value: op
              }
              of pp) cp.add(Op), JSON.stringify(this.localCache[Op]) !== JSON.stringify(op) && (this.notifyListeners(Op, op), ip.push(Op));
            for (const Op of Object.keys(this.localCache)) this.localCache[Op] && !cp.has(Op) && (this.notifyListeners(Op, null), ip.push(Op));
            return ip
          }
          notifyListeners(pp, ip) {
            this.localCache[pp] = ip;
            const cp = this.listeners[pp];
            if (cp)
              for (const Op of Array.from(cp)) Op(ip)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(pp, ip) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[pp] || (this.listeners[pp] = new Set, this._get(pp)), this.listeners[pp].add(ip)
          }
          _removeListener(pp, ip) {
            this.listeners[pp] && (this.listeners[pp].delete(ip), 0 === this.listeners[pp].size && delete this.listeners[pp]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        fO.type = "LOCAL";
        const bO = fO;
        const hO = 1e12;
        class aO {
          constructor(pp) {
            this.auth = pp, this.counter = hO, this._widgets = new Map
          }
          render(pp, ip) {
            const cp = this.counter;
            return this._widgets.set(cp, new nO(pp, this.auth.name, ip || {})), this.counter++, cp
          }
          reset(pp) {
            var ip;
            const cp = pp || hO;
            null === (ip = this._widgets.get(cp)) || void 0 === ip || ip.delete(), this._widgets.delete(cp)
          }
          getResponse(pp) {
            var ip;
            const cp = pp || hO;
            return (null === (ip = this._widgets.get(cp)) || void 0 === ip ? void 0 : ip.getResponse()) || ""
          }
          async execute(pp) {
            var ip;
            const cp = pp || hO;
            return null === (ip = this._widgets.get(cp)) || void 0 === ip || ip.execute(), ""
          }
        }
        class nO {
          constructor(pp, ip, cp) {
            this.params = cp, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Op = "string" === typeof pp ? document.getElementById(pp) : pp;
            Rp(Op, "argument-error", {
              appName: ip
            }), this.container = Op, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(pp) {
                const ip = [],
                  cp = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Op = 0; Op < pp; Op++) ip.push(cp.charAt(Math.floor(Math.random() * cp.length)));
                return ip.join("")
              }(50);
              const {
                callback: pp,
                "expired-callback": ip
              } = this.params;
              if (pp) try {
                pp(this.responseToken)
              } catch (cp) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, ip) try {
                  ip()
                } catch (cp) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const FO = Mi("rcb"),
          gO = new lp(3e4, 6e4);
        class GO {
          constructor() {
            var pp;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (pp = MO().grecaptcha) || void 0 === pp ? void 0 : pp.render)
          }
          load(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Rp(function(pp) {
              return pp.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(pp)
            }(ip), pp, "argument-error"), this.shouldResolveImmediately(ip) && ki(MO().grecaptcha) ? Promise.resolve(MO().grecaptcha) : new Promise(((cp, op) => {
              const Ip = MO().setTimeout((() => {
                op(ep(pp, "network-request-failed"))
              }), gO.get());
              MO()[FO] = () => {
                MO().clearTimeout(Ip), delete MO()[FO];
                const Op = MO().grecaptcha;
                if (!Op || !ki(Op)) return void op(ep(pp, "internal-error"));
                const Sp = Op.render;
                Op.render = (pp, ip) => {
                  const cp = Sp(pp, ip);
                  return this.counter++, cp
                }, this.hostLanguage = ip, cp(Op)
              };
              qi(`https://www.google.com/recaptcha/api.js??${(0,Op.cb)({onload:FO,render:"explicit",hl:ip})}`).catch((() => {
                clearTimeout(Ip), op(ep(pp, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(pp) {
            var ip;
            return !!(null === (ip = MO().grecaptcha) || void 0 === ip ? void 0 : ip.render) && (pp === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class rO {
          async load(pp) {
            return new aO(pp)
          }
          clearedOneInstance() {}
        }
        const ZO = "recaptcha",
          zO = {
            theme: "light",
            type: "image"
          };
        class sO {
          constructor(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, zO),
              cp = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = ip, this.type = ZO, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Qi(cp), this.isInvisible = "invisible" === this.parameters.size, Rp("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Op = "string" === typeof pp ? document.getElementById(pp) : pp;
            Rp(Op, this.auth, "argument-error"), this.container = Op, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new rO : new GO, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const pp = await this.render(),
              ip = this.getAssertedRecaptcha(),
              cp = ip.getResponse(pp);
            return cp || new Promise((cp => {
              const Op = pp => {
                pp && (this.tokenChangeListeners.delete(Op), cp(pp))
              };
              this.tokenChangeListeners.add(Op), this.isInvisible && ip.execute(pp)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (pp) {
              return Promise.reject(pp)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((pp => {
              throw this.renderPromise = null, pp
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((pp => {
              this.container.removeChild(pp)
            }))
          }
          validateStartingState() {
            Rp(!this.parameters.sitekey, this.auth, "argument-error"), Rp(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Rp("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(pp) {
            return ip => {
              if (this.tokenChangeListeners.forEach((pp => pp(ip))), "function" === typeof pp) pp(ip);
              else if ("string" === typeof pp) {
                const cp = MO()[pp];
                "function" === typeof cp && cp(ip)
              }
            }
          }
          assertNotDestroyed() {
            Rp(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let pp = this.container;
              if (!this.isInvisible) {
                const ip = document.createElement("div");
                pp.appendChild(ip), pp = ip
              }
              this.widgetId = this.getAssertedRecaptcha().render(pp, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            Rp(Ep() && !CO(), this.auth, "internal-error"), await
            function() {
              let pp = null;
              return new Promise((ip => {
                "complete" !== document.readyState ? (pp = () => ip(), window.addEventListener("load", pp)) : ip()
              })).catch((ip => {
                throw pp && window.removeEventListener("load", pp), ip
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const pp = await async function(pp) {
              return (await fp(pp, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Rp(pp, this.auth, "internal-error"), this.parameters.sitekey = pp
          }
          getAssertedRecaptcha() {
            return Rp(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class KO {
          constructor(pp, ip) {
            this.verificationId = pp, this.onConfirmation = ip
          }
          confirm(pp) {
            const ip = Vi._fromVerification(this.verificationId, pp);
            return this.onConfirmation(ip)
          }
        }
        async function VO(pp, ip, cp) {
          const op = Qi(pp),
            Ip = await co(op, ip, (0, Op.F)(cp));
          return new KO(Ip, (pp => kc(op, pp)))
        }
        async function po(pp, ip, cp) {
          const op = (0, Op.F)(pp);
          await ec(!1, op, "phone");
          const Ip = await co(op.auth, ip, (0, Op.F)(cp));
          return new KO(Ip, (pp => mc(op, pp)))
        }
        async function io(pp, ip, cp) {
          const op = (0, Op.F)(pp),
            Ip = await co(op.auth, ip, (0, Op.F)(cp));
          return new KO(Ip, (pp => Rc(op, pp)))
        }
        async function co(pp, ip, cp) {
          var Op;
          const op = await cp.verify();
          try {
            let Ip;
            if (Rp("string" === typeof op, pp, "argument-error"), Rp(cp.type === ZO, pp, "argument-error"), Ip = "string" === typeof ip ? {
                phoneNumber: ip
              } : ip, "session" in Ip) {
              const ip = Ip.session;
              if ("phoneNumber" in Ip) {
                Rp("enroll" === ip.type, pp, "internal-error");
                const cp = await
                function(pp, ip) {
                  return fp(pp, "POST", "/v2/accounts/mfaEnrollment:start", Tp(pp, ip))
                }(pp, {
                  idToken: ip.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Ip.phoneNumber,
                    recaptchaToken: op
                  }
                });
                return cp.phoneSessionInfo.sessionInfo
              } {
                Rp("signin" === ip.type, pp, "internal-error");
                const cp = (null === (Op = Ip.multiFactorHint) || void 0 === Op ? void 0 : Op.uid) || Ip.multiFactorUid;
                Rp(cp, pp, "missing-multi-factor-info");
                const Sp = await
                function(pp, ip) {
                  return fp(pp, "POST", "/v2/accounts/mfaSignIn:start", Tp(pp, ip))
                }(pp, {
                  mfaPendingCredential: ip.credential,
                  mfaEnrollmentId: cp,
                  phoneSignInInfo: {
                    recaptchaToken: op
                  }
                });
                return Sp.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: ip
              } = await async function(pp, ip) {
                return fp(pp, "POST", "/v1/accounts:sendVerificationCode", Tp(pp, ip))
              }(pp, {
                phoneNumber: Ip.phoneNumber,
                recaptchaToken: op
              });
              return ip
            }
          } finally {
            cp._reset()
          }
        }
        async function Oo(pp, ip) {
          await dc((0, Op.F)(pp), ip)
        }
        class oo {
          constructor(pp) {
            this.providerId = oo.PROVIDER_ID, this.auth = Qi(pp)
          }
          verifyPhoneNumber(pp, ip) {
            return co(this.auth, pp, (0, Op.F)(ip))
          }
          static credential(pp, ip) {
            return Vi._fromVerification(pp, ip)
          }
          static credentialFromResult(pp) {
            const ip = pp;
            return oo.credentialFromTaggedObject(ip)
          }
          static credentialFromError(pp) {
            return oo.credentialFromTaggedObject(pp.customData || {})
          }
          static credentialFromTaggedObject(pp) {
            let {
              _tokenResponse: ip
            } = pp;
            if (!ip) return null;
            const {
              phoneNumber: cp,
              temporaryProof: Op
            } = ip;
            return cp && Op ? Vi._fromTokenResponse(cp, Op) : null
          }
        }

        function Io(pp, ip) {
          return ip ? xi(ip) : (Rp(pp._popupRedirectResolver, pp, "argument-error"), pp._popupRedirectResolver)
        }
        oo.PROVIDER_ID = "phone", oo.PHONE_SIGN_IN_METHOD = "phone";
        class So extends bi {
          constructor(pp) {
            super("custom", "custom"), this.params = pp
          }
          _getIdTokenResponse(pp) {
            return zi(pp, this._buildIdpRequest())
          }
          _linkToIdToken(pp, ip) {
            return zi(pp, this._buildIdpRequest(ip))
          }
          _getReauthenticationResolver(pp) {
            return zi(pp, this._buildIdpRequest())
          }
          _buildIdpRequest(pp) {
            const ip = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return pp && (ip.idToken = pp), ip
          }
        }

        function xo(pp) {
          return jc(pp.auth, new So(pp), pp.bypassAuthState)
        }

        function Lo(pp) {
          const {
            auth: ip,
            user: cp
          } = pp;
          return Rp(cp, ip, "internal-error"), uc(cp, new So(pp), pp.bypassAuthState)
        }
        async function Yo(pp) {
          const {
            auth: ip,
            user: cp
          } = pp;
          return Rp(cp, ip, "internal-error"), dc(cp, new So(pp), pp.bypassAuthState)
        }
        class Do {
          constructor(pp, ip, cp, Op) {
            let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = pp, this.resolver = cp, this.user = Op, this.bypassAuthState = op, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(ip) ? ip : [ip]
          }
          execute() {
            return new Promise((async (pp, ip) => {
              this.pendingPromise = {
                resolve: pp,
                reject: ip
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (cp) {
                this.reject(cp)
              }
            }))
          }
          async onAuthEvent(pp) {
            const {
              urlResponse: ip,
              sessionId: cp,
              postBody: Op,
              tenantId: op,
              error: Ip,
              type: Sp
            } = pp;
            if (Ip) return void this.reject(Ip);
            const xp = {
              auth: this.auth,
              requestUri: ip,
              sessionId: cp,
              tenantId: op || void 0,
              postBody: Op || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Sp)(xp))
            } catch (Lp) {
              this.reject(Lp)
            }
          }
          onError(pp) {
            this.reject(pp)
          }
          getIdpTask(pp) {
            switch (pp) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return xo;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Yo;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Lo;
              default:
                dp(this.auth, "internal-error")
            }
          }
          resolve(pp) {
            Mp(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(pp), this.unregisterAndCleanUp()
          }
          reject(pp) {
            Mp(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(pp), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const Ao = new lp(2e3, 1e4);
        async function Po(pp, ip, cp) {
          const Op = Qi(pp);
          kp(pp, ip, Oc);
          const op = Io(Op, cp);
          return new Uo(Op, "signInViaPopup", ip, op).executeNotNull()
        }
        async function Wo(pp, ip, cp) {
          const op = (0, Op.F)(pp);
          kp(op.auth, ip, Oc);
          const Ip = Io(op.auth, cp);
          return new Uo(op.auth, "reauthViaPopup", ip, Ip, op).executeNotNull()
        }
        async function yo(pp, ip, cp) {
          const op = (0, Op.F)(pp);
          kp(op.auth, ip, Oc);
          const Ip = Io(op.auth, cp);
          return new Uo(op.auth, "linkViaPopup", ip, Ip, op).executeNotNull()
        }
        class Uo extends Do {
          constructor(pp, ip, cp, Op, op) {
            super(pp, ip, Op, op), this.provider = cp, this.authWindow = null, this.pollId = null, Uo.currentPopupAction && Uo.currentPopupAction.cancel(), Uo.currentPopupAction = this
          }
          async executeNotNull() {
            const pp = await this.execute();
            return Rp(pp, this.auth, "internal-error"), pp
          }
          async onExecution() {
            Mp(1 === this.filter.length, "Popup operations only handle one event");
            const pp = RO();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], pp), this.authWindow.associatedEvent = pp, this.resolver._originValidation(this.auth).catch((pp => {
              this.reject(pp)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (pp => {
              pp || this.reject(ep(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var pp;
            return (null === (pp = this.authWindow) || void 0 === pp ? void 0 : pp.associatedEvent) || null
          }
          cancel() {
            this.reject(ep(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Uo.currentPopupAction = null
          }
          pollUserCancellation() {
            const pp = () => {
              var ip, cp;
              (null === (cp = null === (ip = this.authWindow) || void 0 === ip ? void 0 : ip.window) || void 0 === cp ? void 0 : cp.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(ep(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(pp, Ao.get())
            };
            pp()
          }
        }
        Uo.currentPopupAction = null;
        const wo = "pendingRedirect",
          vo = new Map;
        class to extends Do {
          constructor(pp, ip) {
            super(pp, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], ip, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let pp = vo.get(this.auth._key());
            if (!pp) {
              try {
                const ip = await async function(pp, ip) {
                  const cp = jo(ip),
                    Op = uo(pp);
                  if (!await Op._isAvailable()) return !1;
                  const op = "true" === await Op._get(cp);
                  return await Op._remove(cp), op
                }(this.resolver, this.auth) ? await super.execute() : null;
                pp = () => Promise.resolve(ip)
              } catch (ip) {
                pp = () => Promise.reject(ip)
              }
              vo.set(this.auth._key(), pp)
            }
            return this.bypassAuthState || vo.set(this.auth._key(), (() => Promise.resolve(null))), pp()
          }
          async onAuthEvent(pp) {
            if ("signInViaRedirect" === pp.type) return super.onAuthEvent(pp);
            if ("unknown" !== pp.type) {
              if (pp.eventId) {
                const ip = await this.auth._redirectUserForId(pp.eventId);
                if (ip) return this.user = ip, super.onAuthEvent(pp);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Ho(pp, ip) {
          return uo(pp)._set(jo(ip), "true")
        }

        function eo(pp, ip) {
          vo.set(pp._key(), ip)
        }

        function uo(pp) {
          return xi(pp._redirectPersistence)
        }

        function jo(pp) {
          return Di(wo, pp.config.apiKey, pp.name)
        }

        function ko(pp, ip, cp) {
          return async function(pp, ip, cp) {
            const Op = Qi(pp);
            kp(pp, ip, Oc), await Op._initializationPromise;
            const op = Io(Op, cp);
            return await Ho(op, Op), op._openRedirect(Op, ip, "signInViaRedirect")
          }(pp, ip, cp)
        }

        function mo(pp, ip, cp) {
          return async function(pp, ip, cp) {
            const op = (0, Op.F)(pp);
            kp(op.auth, ip, Oc), await op.auth._initializationPromise;
            const Ip = Io(op.auth, cp);
            await Ho(Ip, op.auth);
            const Sp = await Co(op);
            return Ip._openRedirect(op.auth, ip, "reauthViaRedirect", Sp)
          }(pp, ip, cp)
        }

        function Ro(pp, ip, cp) {
          return async function(pp, ip, cp) {
            const op = (0, Op.F)(pp);
            kp(op.auth, ip, Oc), await op.auth._initializationPromise;
            const Ip = Io(op.auth, cp);
            await ec(!1, op, ip.providerId), await Ho(Ip, op.auth);
            const Sp = await Co(op);
            return Ip._openRedirect(op.auth, ip, "linkViaRedirect", Sp)
          }(pp, ip, cp)
        }
        async function qo(pp, ip) {
          return await Qi(pp)._initializationPromise, Mo(pp, ip, !1)
        }
        async function Mo(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Op = Qi(pp),
            op = Io(Op, ip),
            Ip = new to(Op, op, cp),
            Sp = await Ip.execute();
          return Sp && !cp && (delete Sp.user._redirectEventId, await Op._persistUserIfCurrent(Sp.user), await Op._setRedirectUser(null, ip)), Sp
        }
        async function Co(pp) {
          const ip = RO(`${pp.uid}:::`);
          return pp._redirectEventId = ip, await pp.auth._setRedirectUser(pp), await pp.auth._persistUserIfCurrent(pp), ip
        }
        class Eo {
          constructor(pp) {
            this.auth = pp, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(pp) {
            this.consumers.add(pp), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, pp) && (this.sendToConsumer(this.queuedRedirectEvent, pp), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(pp) {
            this.consumers.delete(pp)
          }
          onEvent(pp) {
            if (this.hasEventBeenHandled(pp)) return !1;
            let ip = !1;
            return this.consumers.forEach((cp => {
              this.isEventForConsumer(pp, cp) && (ip = !0, this.sendToConsumer(pp, cp), this.saveEventToCache(pp))
            })), this.hasHandledPotentialRedirect || ! function(pp) {
              switch (pp.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Qo(pp);
                default:
                  return !1
              }
            }(pp) || (this.hasHandledPotentialRedirect = !0, ip || (this.queuedRedirectEvent = pp, ip = !0)), ip
          }
          sendToConsumer(pp, ip) {
            var cp;
            if (pp.error && !Qo(pp)) {
              const Op = (null === (cp = pp.error.code) || void 0 === cp ? void 0 : cp.split("auth/")[1]) || "internal-error";
              ip.onError(ep(this.auth, Op))
            } else ip.onAuthEvent(pp)
          }
          isEventForConsumer(pp, ip) {
            const cp = null === ip.eventId || !!pp.eventId && pp.eventId === ip.eventId;
            return ip.filter.includes(pp.type) && cp
          }
          hasEventBeenHandled(pp) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Xo(pp))
          }
          saveEventToCache(pp) {
            this.cachedEventUids.add(Xo(pp)), this.lastProcessedEventTime = Date.now()
          }
        }

        function Xo(pp) {
          return [pp.type, pp.eventId, pp.sessionId, pp.tenantId].filter((pp => pp)).join("-")
        }

        function Qo(pp) {
          let {
            type: ip,
            error: cp
          } = pp;
          return "unknown" === ip && "auth/no-auth-event" === (null === cp || void 0 === cp ? void 0 : cp.code)
        }
        const Jo = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Bo = /^https?/;
        async function No(pp) {
          if (pp.config.emulator) return;
          const {
            authorizedDomains: ip
          } = await async function(pp) {
            return fp(pp, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(pp);
          for (const Op of ip) try {
            if (To(Op)) return
          } catch (cp) {}
          dp(pp, "unauthorized-domain")
        }

        function To(pp) {
          const ip = Cp(),
            {
              protocol: cp,
              hostname: Op
            } = new URL(ip);
          if (pp.startsWith("chrome-extension://")) {
            const op = new URL(pp);
            return "" === op.hostname && "" === Op ? "chrome-extension:" === cp && pp.replace("chrome-extension://", "") === ip.replace("chrome-extension://", "") : "chrome-extension:" === cp && op.hostname === Op
          }
          if (!Bo.test(cp)) return !1;
          if (Jo.test(pp)) return Op === pp;
          const op = pp.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + op + "|" + op + ")$", "i").test(Op)
        }
        const fo = new lp(3e4, 6e4);

        function bo() {
          const pp = MO().___jsl;
          if (null === pp || void 0 === pp ? void 0 : pp.H)
            for (const ip of Object.keys(pp.H))
              if (pp.H[ip].r = pp.H[ip].r || [], pp.H[ip].L = pp.H[ip].L || [], pp.H[ip].r = [...pp.H[ip].L], pp.CP)
                for (let cp = 0; cp < pp.CP.length; cp++) pp.CP[cp] = null
        }
        let ho = null;

        function ao(pp) {
          return ho = ho || function(pp) {
            return new Promise(((ip, cp) => {
              var Op, op, Ip;

              function Sp() {
                bo(), gapi.load("gapi.iframes", {
                  callback: () => {
                    ip(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    bo(), cp(ep(pp, "network-request-failed"))
                  },
                  timeout: fo.get()
                })
              }
              if (null === (op = null === (Op = MO().gapi) || void 0 === Op ? void 0 : Op.iframes) || void 0 === op ? void 0 : op.Iframe) ip(gapi.iframes.getContext());
              else {
                if (!(null === (Ip = MO().gapi) || void 0 === Ip ? void 0 : Ip.load)) {
                  const ip = Mi("iframefcb");
                  return MO()[ip] = () => {
                    gapi.load ? Sp() : cp(ep(pp, "network-request-failed"))
                  }, qi(`https://apis.google.com/js/api.js?onload=${ip}`).catch((pp => cp(pp)))
                }
                Sp()
              }
            })).catch((pp => {
              throw ho = null, pp
            }))
          }(pp), ho
        }
        const no = new lp(5e3, 15e3),
          Fo = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          go = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Go(pp) {
          const ip = pp.config;
          Rp(ip.authDomain, pp, "auth-domain-config-required");
          const cp = ip.emulator ? Qp(ip, "emulator/auth/iframe") : `https://${pp.config.authDomain}/__/auth/iframe`,
            Ip = {
              apiKey: ip.apiKey,
              appName: pp.name,
              v: op.f
            },
            Sp = go.get(pp.config.apiHost);
          Sp && (Ip.eid = Sp);
          const xp = pp._getFrameworks();
          return xp.length && (Ip.fw = xp.join(",")), `${cp}?${(0,Op.cb)(Ip).slice(1)}`
        }
        const ro = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Zo {
          constructor(pp) {
            this.window = pp, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (pp) {}
          }
        }

        function zo(pp, ip, cp) {
          let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Sp = Math.max((window.screen.availHeight - Ip) / 2, 0).toString(),
            xp = Math.max((window.screen.availWidth - op) / 2, 0).toString();
          let Lp = "";
          const Yp = Object.assign(Object.assign({}, ro), {
              width: op.toString(),
              height: Ip.toString(),
              top: Sp,
              left: xp
            }),
            Dp = (0, Op.H)().toLowerCase();
          cp && (Lp = Ui(Dp) ? "_blank" : cp), Wi(Dp) && (ip = ip || "http://localhost", Yp.scrollbars = "yes");
          const Ap = Object.entries(Yp).reduce(((pp, ip) => {
            let [cp, Op] = ip;
            return `${pp}${cp}=${Op},`
          }), "");
          if (function() {
              var pp;
              return di(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.H)()) && !!(null === (pp = window.navigator) || void 0 === pp ? void 0 : pp.standalone)
            }(Dp) && "_self" !== Lp) return function(pp, ip) {
            const cp = document.createElement("a");
            cp.href = pp, cp.target = ip;
            const Op = document.createEvent("MouseEvent");
            Op.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), cp.dispatchEvent(Op)
          }(ip || "", Lp), new Zo(null);
          const Pp = window.open(ip || "", Lp, Ap);
          Rp(Pp, pp, "popup-blocked");
          try {
            Pp.focus()
          } catch (Wp) {}
          return new Zo(Pp)
        }
        const so = "__/auth/handler",
          Ko = "emulator/auth/handler",
          Vo = encodeURIComponent("fac");
        async function pI(pp, ip, cp, Ip, Sp, xp) {
            Rp(pp.config.authDomain, pp, "auth-domain-config-required"), Rp(pp.config.apiKey, pp, "invalid-api-key");
            const Lp = {
              apiKey: pp.config.apiKey,
              appName: pp.name,
              authType: cp,
              redirectUrl: Ip,
              v: op.f,
              eventId: Sp
            };
            if (ip instanceof Oc) {
              ip.setDefaultLanguage(pp.languageCode), Lp.providerId = ip.providerId || "", (0, Op.L)(ip.getCustomParameters()) || (Lp.customParameters = JSON.stringify(ip.getCustomParameters()));
              for (const [pp, ip] of Object.entries(xp || {})) Lp[pp] = ip
            }
            if (ip instanceof oc) {
              const pp = ip.getScopes().filter((pp => "" !== pp));
              pp.length > 0 && (Lp.scopes = pp.join(","))
            }
            pp.tenantId && (Lp.tid = pp.tenantId);
            const Yp = Lp;
            for (const Op of Object.keys(Yp)) void 0 === Yp[Op] && delete Yp[Op];
            const Dp = await pp._getAppCheckToken(),
              Ap = Dp ? `#${Vo}=${encodeURIComponent(Dp)}` : "";
            return `${function(pp){let{config:ip}=pp;if(!ip.emulator)return`
            https: //${ip.authDomain}/${so}`;return Qp(ip,Ko)}(pp)}?${(0,Op.cb)(Yp).slice(1)}${Ap}`}const iI="webStorageSupport";const cI=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kO,this._completeRedirectFn=Mo,this._overrideRedirectResult=eo}async _openPopup(pp,ip,cp,Op){var op;Mp(null===(op=this.eventManagers[pp._key()])||void 0===op?void 0:op.manager,"_initialize() not called before _openPopup()");return zo(pp,await pI(pp,ip,cp,Cp(),Op),RO())}async _openRedirect(pp,ip,cp,Op){await this._originValidation(pp);return function(pp){MO().location.href=pp}(await pI(pp,ip,cp,Cp(),Op)),new Promise((()=>{}))}_initialize(pp){const ip=pp._key();if(this.eventManagers[ip]){const{manager:pp,promise:cp}=this.eventManagers[ip];return pp?Promise.resolve(pp):(Mp(cp,"If manager is not set, promise should be"),cp)}const cp=this.initAndGetManager(pp);return this.eventManagers[ip]={promise:cp},cp.catch((()=>{delete this.eventManagers[ip]})),cp}async initAndGetManager(pp){const ip=await async function(pp){const ip=await ao(pp),cp=MO().gapi;return Rp(cp,pp,"internal-error"),ip.open({where:document.body,url:Go(pp),messageHandlersFilter:cp.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fo,dontclear:!0},(ip=>new Promise((async(cp,Op)=>{await ip.restyle({setHideOnLeave:!1});const op=ep(pp,"network-request-failed"),Ip=MO().setTimeout((()=>{Op(op)}),no.get());function Sp(){MO().clearTimeout(Ip),cp(ip)}ip.ping(Sp).then(Sp,(()=>{Op(op)}))}))))}(pp),cp=new Eo(pp);return ip.register("authEvent",(ip=>{Rp(null===ip||void 0===ip?void 0:ip.authEvent,pp,"invalid-auth-event");return{status:cp.onEvent(ip.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[pp._key()]={manager:cp},this.iframes[pp._key()]=ip,cp}_isIframeWebStorageSupported(pp,ip){this.iframes[pp._key()].send(iI,{type:iI},(cp=>{var Op;const op=null===(Op=null===cp||void 0===cp?void 0:cp[0])||void 0===Op?void 0:Op[iI];void 0!==op&&ip(!!op),dp(pp,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(pp){const ip=pp._key();return this.originValidationPromises[ip]||(this.originValidationPromises[ip]=No(pp)),this.originValidationPromises[ip]}get _shouldInitProactively(){return ei()||yi()||di()}};class OI{constructor(pp){this.factorId=pp}_process(pp,ip,cp){switch(ip.type){case"enroll":return this._finalizeEnroll(pp,ip.credential,cp);case"signin":return this._finalizeSignIn(pp,ip.credential);default:return qp("unexpected MultiFactorSessionType")}}}class oI extends OI{constructor(pp){super("phone"),this.credential=pp}static _fromCredential(pp){return new oI(pp)}_finalizeEnroll(pp,ip,cp){return function(pp,ip){return fp(pp,"POST","/v2/accounts/mfaEnrollment:finalize",Tp(pp,ip))}(pp,{idToken:ip,displayName:cp,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(pp,ip){return function(pp,ip){return fp(pp,"POST","/v2/accounts/mfaSignIn:finalize",Tp(pp,ip))}(pp,{mfaPendingCredential:ip,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class II{constructor(){}static assertion(pp){return oI._fromCredential(pp)}}II.FACTOR_ID="phone";class SI{static assertionForEnrollment(pp,ip){return xI._fromSecret(pp,ip)}static assertionForSignIn(pp,ip){return xI._fromEnrollmentId(pp,ip)}static async generateSecret(pp){const ip=pp;Rp("undefined"!==typeof ip.auth,"internal-error");const cp=await(Op=ip.auth,op={idToken:ip.credential,totpEnrollmentInfo:{}},fp(Op,"POST","/v2/accounts/mfaEnrollment:start",Tp(Op,op)));var Op,op;return LI._fromStartTotpMfaEnrollmentResponse(cp,ip.auth)}}SI.FACTOR_ID="totp";class xI extends OI{constructor(pp,ip,cp){super("totp"),this.otp=pp,this.enrollmentId=ip,this.secret=cp}static _fromSecret(pp,ip){return new xI(ip,void 0,pp)}static _fromEnrollmentId(pp,ip){return new xI(ip,pp)}async _finalizeEnroll(pp,ip,cp){return Rp("undefined"!==typeof this.secret,pp,"argument-error"),function(pp,ip){return fp(pp,"POST","/v2/accounts/mfaEnrollment:finalize",Tp(pp,ip))}(pp,{idToken:ip,displayName:cp,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(pp,ip){Rp(void 0!==this.enrollmentId&&void 0!==this.otp,pp,"argument-error");const cp={verificationCode:this.otp};return function(pp,ip){return fp(pp,"POST","/v2/accounts/mfaSignIn:finalize",Tp(pp,ip))}(pp,{mfaPendingCredential:ip,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:cp})}}class LI{constructor(pp,ip,cp,Op,op,Ip,Sp){this.sessionInfo=Ip,this.auth=Sp,this.secretKey=pp,this.hashingAlgorithm=ip,this.codeLength=cp,this.codeIntervalSeconds=Op,this.enrollmentCompletionDeadline=op}static _fromStartTotpMfaEnrollmentResponse(pp,ip){return new LI(pp.totpSessionInfo.sharedSecretKey,pp.totpSessionInfo.hashingAlgorithm,pp.totpSessionInfo.verificationCodeLength,pp.totpSessionInfo.periodSec,new Date(pp.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),pp.totpSessionInfo.sessionInfo,ip)}_makeTotpVerificationInfo(pp){return{sessionInfo:this.sessionInfo,verificationCode:pp}}generateQrCodeUrl(pp,ip){var cp;let Op=!1;return(YI(pp)||YI(ip))&&(Op=!0),Op&&(YI(pp)&&(pp=(null===(cp=this.auth.currentUser)||void 0===cp?void 0:cp.email)||"unknownuser"),YI(ip)&&(ip=this.auth.name)),`otpauth://totp/${ip}:${pp}?secret=${this.secretKey}&issuer=${ip}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function YI(pp){return"undefined"===typeof pp||0===(null===pp||void 0===pp?void 0:pp.length)}var DI="@firebase/auth",AI="0.23.2";class PI{constructor(pp){this.auth=pp,this.internalListeners=new Map}getUid(){var pp;return this.assertAuthConfigured(),(null===(pp=this.auth.currentUser)||void 0===pp?void 0:pp.uid)||null}async getToken(pp){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(pp)}}addAuthTokenListener(pp){if(this.assertAuthConfigured(),this.internalListeners.has(pp))return;const ip=this.auth.onIdTokenChanged((ip=>{pp((null===ip||void 0===ip?void 0:ip.stsTokenManager.accessToken)||null)}));this.internalListeners.set(pp,ip),this.updateProactiveRefresh()}removeAuthTokenListener(pp){this.assertAuthConfigured();const ip=this.internalListeners.get(pp);ip&&(this.internalListeners.delete(pp),ip(),this.updateProactiveRefresh())}assertAuthConfigured(){Rp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const WI=(0,Op.E)("authIdTokenMaxAge")||300;let yI=null;const UI=pp=>async ip=>{const cp=ip&&await ip.getIdTokenResult(),Op=cp&&((new Date).getTime()-Date.parse(cp.issuedAtTime))/1e3;if(Op&&Op>WI)return;const op=null===cp||void 0===cp?void 0:cp.token;yI!==op&&(yI=op,await fetch(pp,{method:op?"POST":"DELETE",headers:op?{Authorization:`Bearer ${op}`}:{}}))};function wI(){let pp=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,op.J)();const ip=(0,op.x)(pp,"auth");if(ip.isInitialized())return ip.getImmediate();const cp=Bi(pp,{popupRedirectResolver:cI,persistence:[bO,uO,kO]}),Ip=(0,Op.E)("authTokenSyncURL");if(Ip){const pp=UI(Ip);xO(cp,pp,(()=>pp(cp.currentUser))),SO(cp,(ip=>pp(ip)))}const Sp=(0,Op.D)("auth");return Sp&&Ni(cp,`http://${Sp}`),cp}var vI;vI="Browser",(0,op.z)(new xp.d("auth",((pp,ip)=>{let{options:cp}=ip;const Op=pp.getProvider("app").getImmediate(),op=pp.getProvider("heartbeat"),Ip=pp.getProvider("app-check-internal"),{apiKey:Sp,authDomain:xp}=Op.options;Rp(Sp&&!Sp.includes(":"),"invalid-api-key",{appName:Op.name});const Lp={apiKey:Sp,authDomain:xp,clientPlatform:vI,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ui(vI)},Yp=new li(Op,op,Ip,Lp);return function(pp,ip){const cp=(null===ip||void 0===ip?void 0:ip.persistence)||[],Op=(Array.isArray(cp)?cp:[cp]).map(xi);(null===ip||void 0===ip?void 0:ip.errorMap)&&pp._updateErrorMap(ip.errorMap),pp._initializeWithPersistence(Op,null===ip||void 0===ip?void 0:ip.popupRedirectResolver)}(Yp,cp),Yp}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((pp,ip,cp)=>{pp.getProvider("auth-internal").initialize()}))),(0,op.z)(new xp.d("auth-internal",(pp=>(pp=>new PI(pp))(Qi(pp.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,op.S)(DI,AI,function(pp){switch(pp){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(vI)),(0,op.S)(DI,AI,"esm2017")}};Object.freeze(modules);for(const pp in modules)Object.freeze(modules[pp]);