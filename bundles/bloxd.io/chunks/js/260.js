/*! For license information please see qepqb8.260.d6c30eff.chunk.js.LICENSE.txt */
export const id = 260;
export const ids = [260];
export const modules = {
    39840: (vv, zv, Pv) => {
        Pv.r(zv), Pv.d(zv, {
          ActionCodeOperation: () => Wv,
          ActionCodeURL: () => kz,
          AuthCredential: () => Zz,
          AuthErrorCodes: () => iv,
          EmailAuthCredential: () => Jz,
          EmailAuthProvider: () => uz,
          FacebookAuthProvider: () => hP,
          FactorId: () => dv,
          GithubAuthProvider: () => eP,
          GoogleAuthProvider: () => SP,
          OAuthCredential: () => oz,
          OAuthProvider: () => PP,
          OperationType: () => Tv,
          PhoneAuthCredential: () => rz,
          PhoneAuthProvider: () => zS,
          PhoneMultiFactorGenerator: () => ve,
          ProviderId: () => Nv,
          RecaptchaVerifier: () => oh,
          SAMLAuthProvider: () => pP,
          SignInMethod: () => lv,
          TotpMultiFactorGenerator: () => ze,
          TotpSecret: () => he,
          TwitterAuthProvider: () => dP,
          applyActionCode: () => RP,
          beforeAuthStateChanged: () => Sh,
          browserLocalPersistence: () => Gh,
          browserPopupRedirectResolver: () => kS,
          browserSessionPersistence: () => jh,
          checkActionCode: () => xP,
          confirmPasswordReset: () => UP,
          connectAuthEmulator: () => qz,
          createUserWithEmailAndPassword: () => qP,
          debugErrorMap: () => av,
          deleteUser: () => Nh,
          fetchSignInMethodsForEmail: () => LP,
          getAdditionalUserInfo: () => vh,
          getAuth: () => Te,
          getIdToken: () => Jv,
          getIdTokenResult: () => Ev,
          getMultiFactorResolver: () => Wh,
          getRedirectResult: () => FS,
          inMemoryPersistence: () => pz,
          indexedDBLocalPersistence: () => Qh,
          initializeAuth: () => tz,
          initializeRecaptchaConfig: () => Ph,
          isSignInWithEmailLink: () => ZP,
          linkWithCredential: () => fP,
          linkWithPhoneNumber: () => kh,
          linkWithPopup: () => TS,
          linkWithRedirect: () => fS,
          multiFactor: () => sh,
          onAuthStateChanged: () => eh,
          onIdTokenChanged: () => hh,
          parseActionCodeURL: () => Xz,
          prodErrorMap: () => sv,
          reauthenticateWithCredential: () => FP,
          reauthenticateWithPhoneNumber: () => Xh,
          reauthenticateWithPopup: () => lS,
          reauthenticateWithRedirect: () => jS,
          reload: () => vz,
          sendEmailVerification: () => HP,
          sendPasswordResetEmail: () => VP,
          sendSignInLinkToEmail: () => QP,
          setPersistence: () => zh,
          signInAnonymously: () => WP,
          signInWithCredential: () => jP,
          signInWithCustomToken: () => YP,
          signInWithEmailAndPassword: () => IP,
          signInWithEmailLink: () => AP,
          signInWithPhoneNumber: () => rh,
          signInWithPopup: () => NS,
          signInWithRedirect: () => mS,
          signOut: () => dh,
          unlink: () => CP,
          updateCurrentUser: () => ph,
          updateEmail: () => BP,
          updatePassword: () => JP,
          updatePhoneNumber: () => vS,
          updateProfile: () => yP,
          useDeviceLanguage: () => gh,
          verifyBeforeUpdateEmail: () => MP,
          verifyPasswordResetCode: () => tP
        });
        var hv = Pv(39829),
          Sv = Pv(39815);

        function ev(vv, zv) {
          var Pv = {};
          for (var hv in vv) Object.prototype.hasOwnProperty.call(vv, hv) && zv.indexOf(hv) < 0 && (Pv[hv] = vv[hv]);
          if (null != vv && "function" === typeof Object.getOwnPropertySymbols) {
            var Sv = 0;
            for (hv = Object.getOwnPropertySymbols(vv); Sv < hv.length; Sv++) zv.indexOf(hv[Sv]) < 0 && Object.prototype.propertyIsEnumerable.call(vv, hv[Sv]) && (Pv[hv[Sv]] = vv[hv[Sv]])
          }
          return Pv
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var gv = Pv(39836),
          pv = Pv(39822);
        const dv = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Nv = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          lv = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Tv = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Wv = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function wv() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const av = function() {
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
          sv = wv,
          Cv = new hv.f("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          iv = {
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
          cv = new gv.g("@firebase/auth");

        function Gv(vv) {
          if (cv.logLevel <= gv.e.ERROR) {
            for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
            cv.error(`Auth (${Sv.g}): ${vv}`, ...Pv)
          }
        }

        function mv(vv) {
          for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
          throw Yv(vv, ...Pv)
        }

        function jv(vv) {
          for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
          return Yv(vv, ...Pv)
        }

        function fv(vv, zv, Pv) {
          const Sv = Object.assign(Object.assign({}, sv()), {
            [zv]: Pv
          });
          return new hv.f("auth", "Firebase", Sv).create(zv, {
            appName: vv.name
          })
        }

        function Fv(vv, zv, Pv) {
          if (!(zv instanceof Pv)) throw Pv.name !== zv.constructor.name && mv(vv, "argument-error"), fv(vv, "argument-error", `Type of ${zv.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function Yv(vv) {
          for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
          if ("string" !== typeof vv) {
            const zv = Pv[0],
              hv = [...Pv.slice(1)];
            return hv[0] && (hv[0].appName = vv.name), vv._errorFactory.create(zv, ...hv)
          }
          return Cv.create(vv, ...Pv)
        }

        function nv(vv, zv) {
          if (!vv) {
            for (var Pv = arguments.length, hv = new Array(Pv > 2 ? Pv - 2 : 0), Sv = 2; Sv < Pv; Sv++) hv[Sv - 2] = arguments[Sv];
            throw Yv(zv, ...hv)
          }
        }

        function Ov(vv) {
          const zv = "INTERNAL ASSERTION FAILED: " + vv;
          throw Gv(zv), new Error(zv)
        }

        function Dv(vv, zv) {
          vv || Ov(zv)
        }

        function Kv() {
          var vv;
          return "undefined" !== typeof self && (null === (vv = self.location) || void 0 === vv ? void 0 : vv.href) || ""
        }

        function Vv() {
          return "http:" === Uv() || "https:" === Uv()
        }

        function Uv() {
          var vv;
          return "undefined" !== typeof self && (null === (vv = self.location) || void 0 === vv ? void 0 : vv.protocol) || null
        }
        class Rv {
          constructor(vv, zv) {
            this.shortDelay = vv, this.longDelay = zv, Dv(zv > vv, "Short delay should be less than long delay!"), this.isMobile = (0, hv.Z)() || (0, hv.bb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Vv() || (0, hv.P)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function xv(vv, zv) {
          Dv(vv.emulator, "Emulator should always be set here");
          const {
            url: Pv
          } = vv.emulator;
          return zv ? `${Pv}${zv.startsWith("/")?zv.slice(1):zv}` : Pv
        }
        class tv {
          static initialize(vv, zv, Pv) {
            this.fetchImpl = vv, zv && (this.headersImpl = zv), Pv && (this.responseImpl = Pv)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Ov("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Ov("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Ov("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const qv = {
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
          Iv = new Rv(3e4, 6e4);

        function Qv(vv, zv) {
          return vv.tenantId && !zv.tenantId ? Object.assign(Object.assign({}, zv), {
            tenantId: vv.tenantId
          }) : zv
        }
        async function Zv(vv, zv, Pv, Sv) {
          return Av(vv, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let ev = {},
              gv = {};
            Sv && ("GET" === zv ? gv = Sv : ev = {
              body: JSON.stringify(Sv)
            });
            const pv = (0, hv.hb)(Object.assign({
                key: vv.config.apiKey
              }, gv)).slice(1),
              dv = await vv._getAdditionalHeaders();
            return dv["Content-Type"] = "application/json", vv.languageCode && (dv["X-Firebase-Locale"] = vv.languageCode), tv.fetch()(Hv(vv, vv.config.apiHost, Pv, pv), Object.assign({
              method: zv,
              headers: dv,
              referrerPolicy: "no-referrer"
            }, ev))
          }))
        }
        async function Av(vv, zv, Pv) {
          vv._canInitEmulator = !1;
          const Sv = Object.assign(Object.assign({}, qv), zv);
          try {
            const zv = new Mv(vv),
              hv = await Promise.race([Pv(), zv.promise]);
            zv.clearNetworkTimeout();
            const ev = await hv.json();
            if ("needConfirmation" in ev) throw yv(vv, "account-exists-with-different-credential", ev);
            if (hv.ok && !("errorMessage" in ev)) return ev;
            {
              const zv = hv.ok ? ev.errorMessage : ev.error.message,
                [Pv, gv] = zv.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === Pv) throw yv(vv, "credential-already-in-use", ev);
              if ("EMAIL_EXISTS" === Pv) throw yv(vv, "email-already-in-use", ev);
              if ("USER_DISABLED" === Pv) throw yv(vv, "user-disabled", ev);
              const pv = Sv[Pv] || Pv.toLowerCase().replace(/[_\s]+/g, "-");
              if (gv) throw fv(vv, pv, gv);
              mv(vv, pv)
            }
          } catch (ev) {
            if (ev instanceof hv.j) throw ev;
            mv(vv, "network-request-failed", {
              message: String(ev)
            })
          }
        }
        async function Lv(vv, zv, Pv, hv) {
          let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const ev = await Zv(vv, zv, Pv, hv, Sv);
          return "mfaPendingCredential" in ev && mv(vv, "multi-factor-auth-required", {
            _serverResponse: ev
          }), ev
        }

        function Hv(vv, zv, Pv, hv) {
          const Sv = `${zv}${Pv}?${hv}`;
          return vv.config.emulator ? xv(vv.config, Sv) : `${vv.config.apiScheme}://${Sv}`
        }
        class Mv {
          constructor(vv) {
            this.auth = vv, this.timer = null, this.promise = new Promise(((vv, zv) => {
              this.timer = setTimeout((() => zv(jv(this.auth, "network-request-failed"))), Iv.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function yv(vv, zv, Pv) {
          const hv = {
            appName: vv.name
          };
          Pv.email && (hv.email = Pv.email), Pv.phoneNumber && (hv.phoneNumber = Pv.phoneNumber);
          const Sv = jv(vv, zv, hv);
          return Sv.customData._tokenResponse = Pv, Sv
        }

        function Bv(vv) {
          if (vv) try {
            const zv = new Date(Number(vv));
            if (!isNaN(zv.getTime())) return zv.toUTCString()
          } catch (zv) {}
        }

        function Jv(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, hv.J)(vv).getIdToken(zv)
        }
        async function Ev(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const Pv = (0, hv.J)(vv),
            Sv = await Pv.getIdToken(zv),
            ev = bv(Sv);
          nv(ev && ev.exp && ev.auth_time && ev.iat, Pv.auth, "internal-error");
          const gv = "object" === typeof ev.firebase ? ev.firebase : void 0,
            pv = null === gv || void 0 === gv ? void 0 : gv.sign_in_provider;
          return {
            claims: ev,
            token: Sv,
            authTime: Bv(ov(ev.auth_time)),
            issuedAtTime: Bv(ov(ev.iat)),
            expirationTime: Bv(ov(ev.exp)),
            signInProvider: pv || null,
            signInSecondFactor: (null === gv || void 0 === gv ? void 0 : gv.sign_in_second_factor) || null
          }
        }

        function ov(vv) {
          return 1e3 * Number(vv)
        }

        function bv(vv) {
          const [zv, Pv, Sv] = vv.split(".");
          if (void 0 === zv || void 0 === Pv || void 0 === Sv) return Gv("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const vv = (0, hv.n)(Pv);
            return vv ? JSON.parse(vv) : (Gv("Failed to decode base64 JWT payload"), null)
          } catch (ev) {
            return Gv("Caught error parsing JWT payload as JSON", null === ev || void 0 === ev ? void 0 : ev.toString()), null
          }
        }
        async function rv(vv, zv) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return zv;
          try {
            return await zv
          } catch (Pv) {
            throw Pv instanceof hv.j && function(vv) {
              let {
                code: zv
              } = vv;
              return "auth/user-disabled" === zv || "auth/user-token-expired" === zv
            }(Pv) && vv.auth.currentUser === vv && await vv.auth.signOut(), Pv
          }
        }
        class kv {
          constructor(vv) {
            this.user = vv, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(vv) {
            var zv;
            if (vv) {
              const vv = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), vv
            } {
              this.errorBackoff = 3e4;
              const vv = (null !== (zv = this.user.stsTokenManager.expirationTime) && void 0 !== zv ? zv : 0) - Date.now() - 3e5;
              return Math.max(0, vv)
            }
          }
          schedule() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const zv = this.getInterval(vv);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), zv)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (vv) {
              return void("auth/network-request-failed" === (null === vv || void 0 === vv ? void 0 : vv.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class Xv {
          constructor(vv, zv) {
            this.createdAt = vv, this.lastLoginAt = zv, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Bv(this.lastLoginAt), this.creationTime = Bv(this.createdAt)
          }
          _copy(vv) {
            this.createdAt = vv.createdAt, this.lastLoginAt = vv.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function uv(vv) {
          var zv;
          const Pv = vv.auth,
            hv = await vv.getIdToken(),
            Sv = await rv(vv, async function(vv, zv) {
              return Zv(vv, "POST", "/v1/accounts:lookup", zv)
            }(Pv, {
              idToken: hv
            }));
          nv(null === Sv || void 0 === Sv ? void 0 : Sv.users.length, Pv, "internal-error");
          const gv = Sv.users[0];
          vv._notifyReloadListener(gv);
          const pv = (null === (zv = gv.providerUserInfo) || void 0 === zv ? void 0 : zv.length) ? gv.providerUserInfo.map((vv => {
            var {
              providerId: zv
            } = vv, Pv = ev(vv, ["providerId"]);
            return {
              providerId: zv,
              uid: Pv.rawId || "",
              displayName: Pv.displayName || null,
              email: Pv.email || null,
              phoneNumber: Pv.phoneNumber || null,
              photoURL: Pv.photoUrl || null
            }
          })) : [];
          const dv = (Nv = vv.providerData, lv = pv, [...Nv.filter((vv => !lv.some((zv => zv.providerId === vv.providerId)))), ...lv]);
          var Nv, lv;
          const Tv = vv.isAnonymous,
            Wv = !(vv.email && gv.passwordHash) && !(null === dv || void 0 === dv ? void 0 : dv.length),
            wv = !!Tv && Wv,
            av = {
              uid: gv.localId,
              displayName: gv.displayName || null,
              photoURL: gv.photoUrl || null,
              email: gv.email || null,
              emailVerified: gv.emailVerified || !1,
              phoneNumber: gv.phoneNumber || null,
              tenantId: gv.tenantId || null,
              providerData: dv,
              metadata: new Xv(gv.createdAt, gv.lastLoginAt),
              isAnonymous: wv
            };
          Object.assign(vv, av)
        }
        async function vz(vv) {
          const zv = (0, hv.J)(vv);
          await uv(zv), await zv.auth._persistUserIfCurrent(zv), zv.auth._notifyListenersIfCurrent(zv)
        }
        class zz {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(vv) {
            nv(vv.idToken, "internal-error"), nv("undefined" !== typeof vv.idToken, "internal-error"), nv("undefined" !== typeof vv.refreshToken, "internal-error");
            const zv = "expiresIn" in vv && "undefined" !== typeof vv.expiresIn ? Number(vv.expiresIn) : function(vv) {
              const zv = bv(vv);
              return nv(zv, "internal-error"), nv("undefined" !== typeof zv.exp, "internal-error"), nv("undefined" !== typeof zv.iat, "internal-error"), Number(zv.exp) - Number(zv.iat)
            }(vv.idToken);
            this.updateTokensAndExpiration(vv.idToken, vv.refreshToken, zv)
          }
          async getToken(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return nv(!this.accessToken || this.refreshToken, vv, "user-token-expired"), zv || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(vv, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(vv, zv) {
            const {
              accessToken: Pv,
              refreshToken: Sv,
              expiresIn: ev
            } = await async function(vv, zv) {
              const Pv = await Av(vv, {}, (async () => {
                const Pv = (0, hv.hb)({
                    grant_type: "refresh_token",
                    refresh_token: zv
                  }).slice(1),
                  {
                    tokenApiHost: Sv,
                    apiKey: ev
                  } = vv.config,
                  gv = Hv(vv, Sv, "/v1/token", `key=${ev}`),
                  pv = await vv._getAdditionalHeaders();
                return pv["Content-Type"] = "application/x-www-form-urlencoded", tv.fetch()(gv, {
                  method: "POST",
                  headers: pv,
                  body: Pv
                })
              }));
              return {
                accessToken: Pv.access_token,
                expiresIn: Pv.expires_in,
                refreshToken: Pv.refresh_token
              }
            }(vv, zv);
            this.updateTokensAndExpiration(Pv, Sv, Number(ev))
          }
          updateTokensAndExpiration(vv, zv, Pv) {
            this.refreshToken = zv || null, this.accessToken = vv || null, this.expirationTime = Date.now() + 1e3 * Pv
          }
          static fromJSON(vv, zv) {
            const {
              refreshToken: Pv,
              accessToken: hv,
              expirationTime: Sv
            } = zv, ev = new zz;
            return Pv && (nv("string" === typeof Pv, "internal-error", {
              appName: vv
            }), ev.refreshToken = Pv), hv && (nv("string" === typeof hv, "internal-error", {
              appName: vv
            }), ev.accessToken = hv), Sv && (nv("number" === typeof Sv, "internal-error", {
              appName: vv
            }), ev.expirationTime = Sv), ev
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(vv) {
            this.accessToken = vv.accessToken, this.refreshToken = vv.refreshToken, this.expirationTime = vv.expirationTime
          }
          _clone() {
            return Object.assign(new zz, this.toJSON())
          }
          _performRefresh() {
            return Ov("not implemented")
          }
        }

        function Pz(vv, zv) {
          nv("string" === typeof vv || "undefined" === typeof vv, "internal-error", {
            appName: zv
          })
        }
        class hz {
          constructor(vv) {
            var {
              uid: zv,
              auth: Pv,
              stsTokenManager: hv
            } = vv, Sv = ev(vv, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new kv(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = zv, this.auth = Pv, this.stsTokenManager = hv, this.accessToken = hv.accessToken, this.displayName = Sv.displayName || null, this.email = Sv.email || null, this.emailVerified = Sv.emailVerified || !1, this.phoneNumber = Sv.phoneNumber || null, this.photoURL = Sv.photoURL || null, this.isAnonymous = Sv.isAnonymous || !1, this.tenantId = Sv.tenantId || null, this.providerData = Sv.providerData ? [...Sv.providerData] : [], this.metadata = new Xv(Sv.createdAt || void 0, Sv.lastLoginAt || void 0)
          }
          async getIdToken(vv) {
            const zv = await rv(this, this.stsTokenManager.getToken(this.auth, vv));
            return nv(zv, this.auth, "internal-error"), this.accessToken !== zv && (this.accessToken = zv, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), zv
          }
          getIdTokenResult(vv) {
            return Ev(this, vv)
          }
          reload() {
            return vz(this)
          }
          _assign(vv) {
            this !== vv && (nv(this.uid === vv.uid, this.auth, "internal-error"), this.displayName = vv.displayName, this.photoURL = vv.photoURL, this.email = vv.email, this.emailVerified = vv.emailVerified, this.phoneNumber = vv.phoneNumber, this.isAnonymous = vv.isAnonymous, this.tenantId = vv.tenantId, this.providerData = vv.providerData.map((vv => Object.assign({}, vv))), this.metadata._copy(vv.metadata), this.stsTokenManager._assign(vv.stsTokenManager))
          }
          _clone(vv) {
            const zv = new hz(Object.assign(Object.assign({}, this), {
              auth: vv,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return zv.metadata._copy(this.metadata), zv
          }
          _onReload(vv) {
            nv(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = vv, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(vv) {
            this.reloadListener ? this.reloadListener(vv) : this.reloadUserInfo = vv
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Pv = !1;
            vv.idToken && vv.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(vv), Pv = !0), zv && await uv(this), await this.auth._persistUserIfCurrent(this), Pv && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const vv = await this.getIdToken();
            return await rv(this, async function(vv, zv) {
              return Zv(vv, "POST", "/v1/accounts:delete", zv)
            }(this.auth, {
              idToken: vv
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
              providerData: this.providerData.map((vv => Object.assign({}, vv))),
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
          static _fromJSON(vv, zv) {
            var Pv, hv, Sv, ev, gv, pv, dv, Nv;
            const lv = null !== (Pv = zv.displayName) && void 0 !== Pv ? Pv : void 0,
              Tv = null !== (hv = zv.email) && void 0 !== hv ? hv : void 0,
              Wv = null !== (Sv = zv.phoneNumber) && void 0 !== Sv ? Sv : void 0,
              wv = null !== (ev = zv.photoURL) && void 0 !== ev ? ev : void 0,
              av = null !== (gv = zv.tenantId) && void 0 !== gv ? gv : void 0,
              sv = null !== (pv = zv._redirectEventId) && void 0 !== pv ? pv : void 0,
              Cv = null !== (dv = zv.createdAt) && void 0 !== dv ? dv : void 0,
              iv = null !== (Nv = zv.lastLoginAt) && void 0 !== Nv ? Nv : void 0,
              {
                uid: cv,
                emailVerified: Gv,
                isAnonymous: mv,
                providerData: jv,
                stsTokenManager: fv
              } = zv;
            nv(cv && fv, vv, "internal-error");
            const Fv = zz.fromJSON(this.name, fv);
            nv("string" === typeof cv, vv, "internal-error"), Pz(lv, vv.name), Pz(Tv, vv.name), nv("boolean" === typeof Gv, vv, "internal-error"), nv("boolean" === typeof mv, vv, "internal-error"), Pz(Wv, vv.name), Pz(wv, vv.name), Pz(av, vv.name), Pz(sv, vv.name), Pz(Cv, vv.name), Pz(iv, vv.name);
            const Yv = new hz({
              uid: cv,
              auth: vv,
              email: Tv,
              emailVerified: Gv,
              displayName: lv,
              isAnonymous: mv,
              photoURL: wv,
              phoneNumber: Wv,
              tenantId: av,
              stsTokenManager: Fv,
              createdAt: Cv,
              lastLoginAt: iv
            });
            return jv && Array.isArray(jv) && (Yv.providerData = jv.map((vv => Object.assign({}, vv)))), sv && (Yv._redirectEventId = sv), Yv
          }
          static async _fromIdTokenResponse(vv, zv) {
            let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const hv = new zz;
            hv.updateFromServerResponse(zv);
            const Sv = new hz({
              uid: zv.localId,
              auth: vv,
              stsTokenManager: hv,
              isAnonymous: Pv
            });
            return await uv(Sv), Sv
          }
        }
        const Sz = new Map;

        function ez(vv) {
          Dv(vv instanceof Function, "Expected a class definition");
          let zv = Sz.get(vv);
          return zv ? (Dv(zv instanceof vv, "Instance stored in cache mismatched with class"), zv) : (zv = new vv, Sz.set(vv, zv), zv)
        }
        class gz {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(vv, zv) {
            this.storage[vv] = zv
          }
          async _get(vv) {
            const zv = this.storage[vv];
            return void 0 === zv ? null : zv
          }
          async _remove(vv) {
            delete this.storage[vv]
          }
          _addListener(vv, zv) {}
          _removeListener(vv, zv) {}
        }
        gz.type = "NONE";
        const pz = gz;

        function dz(vv, zv, Pv) {
          return `firebase:${vv}:${zv}:${Pv}`
        }
        class Nz {
          constructor(vv, zv, Pv) {
            this.persistence = vv, this.auth = zv, this.userKey = Pv;
            const {
              config: hv,
              name: Sv
            } = this.auth;
            this.fullUserKey = dz(this.userKey, hv.apiKey, Sv), this.fullPersistenceKey = dz("persistence", hv.apiKey, Sv), this.boundEventHandler = zv._onStorageEvent.bind(zv), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(vv) {
            return this.persistence._set(this.fullUserKey, vv.toJSON())
          }
          async getCurrentUser() {
            const vv = await this.persistence._get(this.fullUserKey);
            return vv ? hz._fromJSON(this.auth, vv) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(vv) {
            if (this.persistence === vv) return;
            const zv = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = vv, zv ? this.setCurrentUser(zv) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(vv, zv) {
            let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!zv.length) return new Nz(ez(pz), vv, Pv);
            const hv = (await Promise.all(zv.map((async vv => {
              if (await vv._isAvailable()) return vv
            })))).filter((vv => vv));
            let Sv = hv[0] || ez(pz);
            const ev = dz(Pv, vv.config.apiKey, vv.name);
            let gv = null;
            for (const Nv of zv) try {
              const zv = await Nv._get(ev);
              if (zv) {
                const Pv = hz._fromJSON(vv, zv);
                Nv !== Sv && (gv = Pv), Sv = Nv;
                break
              }
            } catch (dv) {}
            const pv = hv.filter((vv => vv._shouldAllowMigration));
            return Sv._shouldAllowMigration && pv.length ? (Sv = pv[0], gv && await Sv._set(ev, gv.toJSON()), await Promise.all(zv.map((async vv => {
              if (vv !== Sv) try {
                await vv._remove(ev)
              } catch (dv) {}
            }))), new Nz(Sv, vv, Pv)) : new Nz(Sv, vv, Pv)
          }
        }

        function lz(vv) {
          const zv = vv.toLowerCase();
          if (zv.includes("opera/") || zv.includes("opr/") || zv.includes("opios/")) return "Opera";
          if (az(zv)) return "IEMobile";
          if (zv.includes("msie") || zv.includes("trident/")) return "IE";
          if (zv.includes("edge/")) return "Edge";
          if (Tz(zv)) return "Firefox";
          if (zv.includes("silk/")) return "Silk";
          if (Cz(zv)) return "Blackberry";
          if (iz(zv)) return "Webos";
          if (Wz(zv)) return "Safari";
          if ((zv.includes("chrome/") || wz(zv)) && !zv.includes("edge/")) return "Chrome";
          if (sz(zv)) return "Android";
          {
            const zv = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              Pv = vv.match(zv);
            if (2 === (null === Pv || void 0 === Pv ? void 0 : Pv.length)) return Pv[1]
          }
          return "Other"
        }

        function Tz() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
          return /firefox\//i.test(vv)
        }

        function Wz() {
          const vv = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)()).toLowerCase();
          return vv.includes("safari/") && !vv.includes("chrome/") && !vv.includes("crios/") && !vv.includes("android")
        }

        function wz() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
          return /crios\//i.test(vv)
        }

        function az() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
          return /iemobile/i.test(vv)
        }

        function sz() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
          return /android/i.test(vv)
        }

        function Cz() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
          return /blackberry/i.test(vv)
        }

        function iz() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
          return /webos/i.test(vv)
        }

        function cz() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
          return /iphone|ipad|ipod/i.test(vv) || /macintosh/i.test(vv) && /mobile/i.test(vv)
        }

        function Gz() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
          return cz(vv) || sz(vv) || iz(vv) || Cz(vv) || /windows phone/i.test(vv) || az(vv)
        }

        function mz(vv) {
          let zv, Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (vv) {
            case "Browser":
              zv = lz((0, hv.L)());
              break;
            case "Worker":
              zv = `${lz((0,hv.L)())}-${vv}`;
              break;
            default:
              zv = vv
          }
          const ev = Pv.length ? Pv.join(",") : "FirebaseCore-web";
          return `${zv}/JsCore/${Sv.g}/${ev}`
        }
        async function jz(vv, zv) {
          return Zv(vv, "GET", "/v2/recaptchaConfig", Qv(vv, zv))
        }

        function fz(vv) {
          return void 0 !== vv && void 0 !== vv.getResponse
        }

        function Fz(vv) {
          return void 0 !== vv && void 0 !== vv.enterprise
        }
        class Yz {
          constructor(vv) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === vv.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = vv.recaptchaKey.split("/")[3], this.emailPasswordEnabled = vv.recaptchaEnforcementState.some((vv => "EMAIL_PASSWORD_PROVIDER" === vv.provider && "OFF" !== vv.enforcementState))
          }
        }

        function nz(vv) {
          return new Promise(((zv, Pv) => {
            const hv = document.createElement("script");
            hv.setAttribute("src", vv), hv.onload = zv, hv.onerror = vv => {
                const zv = jv("internal-error");
                zv.customData = vv, Pv(zv)
              }, hv.type = "text/javascript", hv.charset = "UTF-8",
              function() {
                var vv, zv;
                return null !== (zv = null === (vv = document.getElementsByTagName("head")) || void 0 === vv ? void 0 : vv[0]) && void 0 !== zv ? zv : document
              }().appendChild(hv)
          }))
        }

        function Oz(vv) {
          return `__${vv}${Math.floor(1e6*Math.random())}`
        }
        class Dz {
          constructor(vv) {
            this.type = "recaptcha-enterprise", this.auth = Rz(vv)
          }
          async verify() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function Pv(zv, Pv, hv) {
              const Sv = window.grecaptcha;
              Fz(Sv) ? Sv.enterprise.ready((() => {
                Sv.enterprise.execute(zv, {
                  action: vv
                }).then((vv => {
                  Pv(vv)
                })).catch((() => {
                  Pv("NO_RECAPTCHA")
                }))
              })) : hv(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((vv, hv) => {
              (async function(vv) {
                if (!zv) {
                  if (null == vv.tenantId && null != vv._agentRecaptchaConfig) return vv._agentRecaptchaConfig.siteKey;
                  if (null != vv.tenantId && void 0 !== vv._tenantRecaptchaConfigs[vv.tenantId]) return vv._tenantRecaptchaConfigs[vv.tenantId].siteKey
                }
                return new Promise((async (zv, Pv) => {
                  jz(vv, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((hv => {
                    if (void 0 !== hv.recaptchaKey) {
                      const Pv = new Yz(hv);
                      return null == vv.tenantId ? vv._agentRecaptchaConfig = Pv : vv._tenantRecaptchaConfigs[vv.tenantId] = Pv, zv(Pv.siteKey)
                    }
                    Pv(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((vv => {
                    Pv(vv)
                  }))
                }))
              })(this.auth).then((Sv => {
                if (!zv && Fz(window.grecaptcha)) Pv(Sv, vv, hv);
                else {
                  if ("undefined" === typeof window) return void hv(new Error("RecaptchaVerifier is only supported in browser"));
                  nz("https://www.google.com/recaptcha/enterprise.js?render=" + Sv).then((() => {
                    Pv(Sv, vv, hv)
                  })).catch((vv => {
                    hv(vv)
                  }))
                }
              })).catch((vv => {
                hv(vv)
              }))
            }))
          }
        }
        async function Kz(vv, zv, Pv) {
          let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Sv = new Dz(vv);
          let ev;
          try {
            ev = await Sv.verify(Pv)
          } catch (pv) {
            ev = await Sv.verify(Pv, !0)
          }
          const gv = Object.assign({}, zv);
          return hv ? Object.assign(gv, {
            captchaResp: ev
          }) : Object.assign(gv, {
            captchaResponse: ev
          }), Object.assign(gv, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(gv, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), gv
        }
        class Vz {
          constructor(vv) {
            this.auth = vv, this.queue = []
          }
          pushCallback(vv, zv) {
            const Pv = zv => new Promise(((Pv, hv) => {
              try {
                Pv(vv(zv))
              } catch (Sv) {
                hv(Sv)
              }
            }));
            Pv.onAbort = zv, this.queue.push(Pv);
            const hv = this.queue.length - 1;
            return () => {
              this.queue[hv] = () => Promise.resolve()
            }
          }
          async runMiddleware(vv) {
            if (this.auth.currentUser === vv) return;
            const zv = [];
            try {
              for (const Pv of this.queue) await Pv(vv), Pv.onAbort && zv.push(Pv.onAbort)
            } catch (Pv) {
              zv.reverse();
              for (const vv of zv) try {
                vv()
              } catch (hv) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === Pv || void 0 === Pv ? void 0 : Pv.message
              })
            }
          }
        }
        class Uz {
          constructor(vv, zv, Pv, hv) {
            this.app = vv, this.heartbeatServiceProvider = zv, this.appCheckServiceProvider = Pv, this.config = hv, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new xz(this), this.idTokenSubscription = new xz(this), this.beforeStateQueue = new Vz(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Cv, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = vv.name, this.clientVersion = hv.sdkClientVersion
          }
          _initializeWithPersistence(vv, zv) {
            return zv && (this._popupRedirectResolver = ez(zv)), this._initializationPromise = this.queue((async () => {
              var Pv, hv;
              if (!this._deleted && (this.persistenceManager = await Nz.create(this, vv), !this._deleted)) {
                if (null === (Pv = this._popupRedirectResolver) || void 0 === Pv ? void 0 : Pv._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Sv) {}
                await this.initializeCurrentUser(zv), this.lastNotifiedUid = (null === (hv = this.currentUser) || void 0 === hv ? void 0 : hv.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const vv = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || vv ? this.currentUser && vv && this.currentUser.uid === vv.uid ? (this._currentUser._assign(vv), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(vv, !0) : void 0
          }
          async initializeCurrentUser(vv) {
            var zv;
            const Pv = await this.assertedPersistence.getCurrentUser();
            let hv = Pv,
              Sv = !1;
            if (vv && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const Pv = null === (zv = this.redirectUser) || void 0 === zv ? void 0 : zv._redirectEventId,
                ev = null === hv || void 0 === hv ? void 0 : hv._redirectEventId,
                gv = await this.tryRedirectSignIn(vv);
              Pv && Pv !== ev || !(null === gv || void 0 === gv ? void 0 : gv.user) || (hv = gv.user, Sv = !0)
            }
            if (!hv) return this.directlySetCurrentUser(null);
            if (!hv._redirectEventId) {
              if (Sv) try {
                await this.beforeStateQueue.runMiddleware(hv)
              } catch (ev) {
                hv = Pv, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(ev)))
              }
              return hv ? this.reloadAndSetCurrentUserOrClear(hv) : this.directlySetCurrentUser(null)
            }
            return nv(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === hv._redirectEventId ? this.directlySetCurrentUser(hv) : this.reloadAndSetCurrentUserOrClear(hv)
          }
          async tryRedirectSignIn(vv) {
            let zv = null;
            try {
              zv = await this._popupRedirectResolver._completeRedirectFn(this, vv, !0)
            } catch (Pv) {
              await this._setRedirectUser(null)
            }
            return zv
          }
          async reloadAndSetCurrentUserOrClear(vv) {
            try {
              await uv(vv)
            } catch (zv) {
              if ("auth/network-request-failed" !== (null === zv || void 0 === zv ? void 0 : zv.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(vv)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const vv = navigator;
              return vv.languages && vv.languages[0] || vv.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(vv) {
            const zv = vv ? (0, hv.J)(vv) : null;
            return zv && nv(zv.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(zv && zv._clone(this))
          }
          async _updateCurrentUser(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return vv && nv(this.tenantId === vv.tenantId, this, "tenant-id-mismatch"), zv || await this.beforeStateQueue.runMiddleware(vv), this.queue((async () => {
              await this.directlySetCurrentUser(vv), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(vv) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(ez(vv))
            }))
          }
          async initializeRecaptchaConfig() {
            const vv = await jz(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              zv = new Yz(vv);
            if (null == this.tenantId ? this._agentRecaptchaConfig = zv : this._tenantRecaptchaConfigs[this.tenantId] = zv, zv.emailPasswordEnabled) {
              new Dz(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(vv) {
            this._errorFactory = new hv.f("auth", "Firebase", vv())
          }
          onAuthStateChanged(vv, zv, Pv) {
            return this.registerStateListener(this.authStateSubscription, vv, zv, Pv)
          }
          beforeAuthStateChanged(vv, zv) {
            return this.beforeStateQueue.pushCallback(vv, zv)
          }
          onIdTokenChanged(vv, zv, Pv) {
            return this.registerStateListener(this.idTokenSubscription, vv, zv, Pv)
          }
          toJSON() {
            var vv;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (vv = this._currentUser) || void 0 === vv ? void 0 : vv.toJSON()
            }
          }
          async _setRedirectUser(vv, zv) {
            const Pv = await this.getOrInitRedirectPersistenceManager(zv);
            return null === vv ? Pv.removeCurrentUser() : Pv.setCurrentUser(vv)
          }
          async getOrInitRedirectPersistenceManager(vv) {
            if (!this.redirectPersistenceManager) {
              const zv = vv && ez(vv) || this._popupRedirectResolver;
              nv(zv, this, "argument-error"), this.redirectPersistenceManager = await Nz.create(this, [ez(zv._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(vv) {
            var zv, Pv;
            return this._isInitialized && await this.queue((async () => {})), (null === (zv = this._currentUser) || void 0 === zv ? void 0 : zv._redirectEventId) === vv ? this._currentUser : (null === (Pv = this.redirectUser) || void 0 === Pv ? void 0 : Pv._redirectEventId) === vv ? this.redirectUser : null
          }
          async _persistUserIfCurrent(vv) {
            if (vv === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(vv)))
          }
          _notifyListenersIfCurrent(vv) {
            vv === this.currentUser && this.notifyAuthListeners()
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
            var vv, zv;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const Pv = null !== (zv = null === (vv = this.currentUser) || void 0 === vv ? void 0 : vv.uid) && void 0 !== zv ? zv : null;
            this.lastNotifiedUid !== Pv && (this.lastNotifiedUid = Pv, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(vv, zv, Pv, hv) {
            if (this._deleted) return () => {};
            const Sv = "function" === typeof zv ? zv : zv.next.bind(zv),
              ev = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return nv(ev, this, "internal-error"), ev.then((() => Sv(this.currentUser))), "function" === typeof zv ? vv.addObserver(zv, Pv, hv) : vv.addObserver(zv)
          }
          async directlySetCurrentUser(vv) {
            this.currentUser && this.currentUser !== vv && this._currentUser._stopProactiveRefresh(), vv && this.isProactiveRefreshEnabled && vv._startProactiveRefresh(), this.currentUser = vv, vv ? await this.assertedPersistence.setCurrentUser(vv) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(vv) {
            return this.operations = this.operations.then(vv, vv), this.operations
          }
          get assertedPersistence() {
            return nv(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(vv) {
            vv && !this.frameworks.includes(vv) && (this.frameworks.push(vv), this.frameworks.sort(), this.clientVersion = mz(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var vv;
            const zv = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (zv["X-Firebase-gmpid"] = this.app.options.appId);
            const Pv = await (null === (vv = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === vv ? void 0 : vv.getHeartbeatsHeader());
            Pv && (zv["X-Firebase-Client"] = Pv);
            const hv = await this._getAppCheckToken();
            return hv && (zv["X-Firebase-AppCheck"] = hv), zv
          }
          async _getAppCheckToken() {
            var vv;
            const zv = await (null === (vv = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === vv ? void 0 : vv.getToken());
            return (null === zv || void 0 === zv ? void 0 : zv.error) && function(vv) {
              if (cv.logLevel <= gv.e.WARN) {
                for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
                cv.warn(`Auth (${Sv.g}): ${vv}`, ...Pv)
              }
            }(`Error while retrieving App Check token: ${zv.error}`), null === zv || void 0 === zv ? void 0 : zv.token
          }
        }

        function Rz(vv) {
          return (0, hv.J)(vv)
        }
        class xz {
          constructor(vv) {
            this.auth = vv, this.observer = null, this.addObserver = (0, hv.u)((vv => this.observer = vv))
          }
          get next() {
            return nv(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function tz(vv, zv) {
          const Pv = (0, Sv.A)(vv, "auth");
          if (Pv.isInitialized()) {
            const vv = Pv.getImmediate(),
              Sv = Pv.getOptions();
            if ((0, hv.w)(Sv, null !== zv && void 0 !== zv ? zv : {})) return vv;
            mv(vv, "already-initialized")
          }
          return Pv.initialize({
            options: zv
          })
        }

        function qz(vv, zv, Pv) {
          const hv = Rz(vv);
          nv(hv._canInitEmulator, hv, "emulator-config-failed"), nv(/^https?:\/\//.test(zv), hv, "invalid-emulator-scheme");
          const Sv = !!(null === Pv || void 0 === Pv ? void 0 : Pv.disableWarnings),
            ev = Iz(zv),
            {
              host: gv,
              port: pv
            } = function(vv) {
              const zv = Iz(vv),
                Pv = /(\/\/)?([^?#/]+)/.exec(vv.substr(zv.length));
              if (!Pv) return {
                host: "",
                port: null
              };
              const hv = Pv[2].split("@").pop() || "",
                Sv = /^(\[[^\]]+\])(:|$)/.exec(hv);
              if (Sv) {
                const vv = Sv[1];
                return {
                  host: vv,
                  port: Qz(hv.substr(vv.length + 1))
                }
              } {
                const [vv, zv] = hv.split(":");
                return {
                  host: vv,
                  port: Qz(zv)
                }
              }
            }(zv),
            dv = null === pv ? "" : `:${pv}`;
          hv.config.emulator = {
            url: `${ev}//${gv}${dv}/`
          }, hv.settings.appVerificationDisabledForTesting = !0, hv.emulatorConfig = Object.freeze({
            host: gv,
            port: pv,
            protocol: ev.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Sv
            })
          }), Sv || function() {
            function vv() {
              const vv = document.createElement("p"),
                zv = vv.style;
              vv.innerText = "Running in emulator mode. Do not use with production credentials.", zv.position = "fixed", zv.width = "100%", zv.backgroundColor = "#ffffff", zv.border = ".1em solid #000000", zv.color = "#b50000", zv.bottom = "0px", zv.left = "0px", zv.margin = "0px", zv.zIndex = "10000", zv.textAlign = "center", vv.classList.add("firebase-emulator-warning"), document.body.appendChild(vv)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", vv) : vv())
          }()
        }

        function Iz(vv) {
          const zv = vv.indexOf(":");
          return zv < 0 ? "" : vv.substr(0, zv + 1)
        }

        function Qz(vv) {
          if (!vv) return null;
          const zv = Number(vv);
          return isNaN(zv) ? null : zv
        }
        class Zz {
          constructor(vv, zv) {
            this.providerId = vv, this.signInMethod = zv
          }
          toJSON() {
            return Ov("not implemented")
          }
          _getIdTokenResponse(vv) {
            return Ov("not implemented")
          }
          _linkToIdToken(vv, zv) {
            return Ov("not implemented")
          }
          _getReauthenticationResolver(vv) {
            return Ov("not implemented")
          }
        }
        async function Az(vv, zv) {
          return Zv(vv, "POST", "/v1/accounts:resetPassword", Qv(vv, zv))
        }
        async function Lz(vv, zv) {
          return Zv(vv, "POST", "/v1/accounts:update", zv)
        }
        async function Hz(vv, zv) {
          return Lv(vv, "POST", "/v1/accounts:signInWithPassword", Qv(vv, zv))
        }
        async function Mz(vv, zv) {
          return Zv(vv, "POST", "/v1/accounts:sendOobCode", Qv(vv, zv))
        }
        async function yz(vv, zv) {
          return Mz(vv, zv)
        }
        async function Bz(vv, zv) {
          return Mz(vv, zv)
        }
        class Jz extends Zz {
          constructor(vv, zv, Pv) {
            let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", Pv), this._email = vv, this._password = zv, this._tenantId = hv
          }
          static _fromEmailAndPassword(vv, zv) {
            return new Jz(vv, zv, "password")
          }
          static _fromEmailAndCode(vv, zv) {
            return new Jz(vv, zv, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(vv) {
            const zv = "string" === typeof vv ? JSON.parse(vv) : vv;
            if ((null === zv || void 0 === zv ? void 0 : zv.email) && (null === zv || void 0 === zv ? void 0 : zv.password)) {
              if ("password" === zv.signInMethod) return this._fromEmailAndPassword(zv.email, zv.password);
              if ("emailLink" === zv.signInMethod) return this._fromEmailAndCode(zv.email, zv.password, zv.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(vv) {
            var zv;
            switch (this.signInMethod) {
              case "password":
                const Pv = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (zv = vv._getRecaptchaConfig()) || void 0 === zv ? void 0 : zv.emailPasswordEnabled) {
                  const zv = await Kz(vv, Pv, "signInWithPassword");
                  return Hz(vv, zv)
                }
                return Hz(vv, Pv).catch((async zv => {
                  if ("auth/missing-recaptcha-token" === zv.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const zv = await Kz(vv, Pv, "signInWithPassword");
                    return Hz(vv, zv)
                  }
                  return Promise.reject(zv)
                }));
              case "emailLink":
                return async function(vv, zv) {
                  return Lv(vv, "POST", "/v1/accounts:signInWithEmailLink", Qv(vv, zv))
                }(vv, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                mv(vv, "internal-error")
            }
          }
          async _linkToIdToken(vv, zv) {
            switch (this.signInMethod) {
              case "password":
                return Lz(vv, {
                  idToken: zv,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(vv, zv) {
                  return Lv(vv, "POST", "/v1/accounts:signInWithEmailLink", Qv(vv, zv))
                }(vv, {
                  idToken: zv,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                mv(vv, "internal-error")
            }
          }
          _getReauthenticationResolver(vv) {
            return this._getIdTokenResponse(vv)
          }
        }
        async function Ez(vv, zv) {
          return Lv(vv, "POST", "/v1/accounts:signInWithIdp", Qv(vv, zv))
        }
        class oz extends Zz {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(vv) {
            const zv = new oz(vv.providerId, vv.signInMethod);
            return vv.idToken || vv.accessToken ? (vv.idToken && (zv.idToken = vv.idToken), vv.accessToken && (zv.accessToken = vv.accessToken), vv.nonce && !vv.pendingToken && (zv.nonce = vv.nonce), vv.pendingToken && (zv.pendingToken = vv.pendingToken)) : vv.oauthToken && vv.oauthTokenSecret ? (zv.accessToken = vv.oauthToken, zv.secret = vv.oauthTokenSecret) : mv("argument-error"), zv
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
          static fromJSON(vv) {
            const zv = "string" === typeof vv ? JSON.parse(vv) : vv,
              {
                providerId: Pv,
                signInMethod: hv
              } = zv,
              Sv = ev(zv, ["providerId", "signInMethod"]);
            if (!Pv || !hv) return null;
            const gv = new oz(Pv, hv);
            return gv.idToken = Sv.idToken || void 0, gv.accessToken = Sv.accessToken || void 0, gv.secret = Sv.secret, gv.nonce = Sv.nonce, gv.pendingToken = Sv.pendingToken || null, gv
          }
          _getIdTokenResponse(vv) {
            return Ez(vv, this.buildRequest())
          }
          _linkToIdToken(vv, zv) {
            const Pv = this.buildRequest();
            return Pv.idToken = zv, Ez(vv, Pv)
          }
          _getReauthenticationResolver(vv) {
            const zv = this.buildRequest();
            return zv.autoCreate = !1, Ez(vv, zv)
          }
          buildRequest() {
            const vv = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) vv.pendingToken = this.pendingToken;
            else {
              const zv = {};
              this.idToken && (zv.id_token = this.idToken), this.accessToken && (zv.access_token = this.accessToken), this.secret && (zv.oauth_token_secret = this.secret), zv.providerId = this.providerId, this.nonce && !this.pendingToken && (zv.nonce = this.nonce), vv.postBody = (0, hv.hb)(zv)
            }
            return vv
          }
        }
        const bz = {
          USER_NOT_FOUND: "user-not-found"
        };
        class rz extends Zz {
          constructor(vv) {
            super("phone", "phone"), this.params = vv
          }
          static _fromVerification(vv, zv) {
            return new rz({
              verificationId: vv,
              verificationCode: zv
            })
          }
          static _fromTokenResponse(vv, zv) {
            return new rz({
              phoneNumber: vv,
              temporaryProof: zv
            })
          }
          _getIdTokenResponse(vv) {
            return async function(vv, zv) {
              return Lv(vv, "POST", "/v1/accounts:signInWithPhoneNumber", Qv(vv, zv))
            }(vv, this._makeVerificationRequest())
          }
          _linkToIdToken(vv, zv) {
            return async function(vv, zv) {
              const Pv = await Lv(vv, "POST", "/v1/accounts:signInWithPhoneNumber", Qv(vv, zv));
              if (Pv.temporaryProof) throw yv(vv, "account-exists-with-different-credential", Pv);
              return Pv
            }(vv, Object.assign({
              idToken: zv
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(vv) {
            return async function(vv, zv) {
              return Lv(vv, "POST", "/v1/accounts:signInWithPhoneNumber", Qv(vv, Object.assign(Object.assign({}, zv), {
                operation: "REAUTH"
              })), bz)
            }(vv, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: vv,
              phoneNumber: zv,
              verificationId: Pv,
              verificationCode: hv
            } = this.params;
            return vv && zv ? {
              temporaryProof: vv,
              phoneNumber: zv
            } : {
              sessionInfo: Pv,
              code: hv
            }
          }
          toJSON() {
            const vv = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (vv.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (vv.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (vv.verificationCode = this.params.verificationCode), this.params.verificationId && (vv.verificationId = this.params.verificationId), vv
          }
          static fromJSON(vv) {
            "string" === typeof vv && (vv = JSON.parse(vv));
            const {
              verificationId: zv,
              verificationCode: Pv,
              phoneNumber: hv,
              temporaryProof: Sv
            } = vv;
            return Pv || zv || hv || Sv ? new rz({
              verificationId: zv,
              verificationCode: Pv,
              phoneNumber: hv,
              temporaryProof: Sv
            }) : null
          }
        }
        class kz {
          constructor(vv) {
            var zv, Pv, Sv, ev, gv, pv;
            const dv = (0, hv.db)((0, hv.y)(vv)),
              Nv = null !== (zv = dv.apiKey) && void 0 !== zv ? zv : null,
              lv = null !== (Pv = dv.oobCode) && void 0 !== Pv ? Pv : null,
              Tv = function(vv) {
                switch (vv) {
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
              }(null !== (Sv = dv.mode) && void 0 !== Sv ? Sv : null);
            nv(Nv && lv && Tv, "argument-error"), this.apiKey = Nv, this.operation = Tv, this.code = lv, this.continueUrl = null !== (ev = dv.continueUrl) && void 0 !== ev ? ev : null, this.languageCode = null !== (gv = dv.languageCode) && void 0 !== gv ? gv : null, this.tenantId = null !== (pv = dv.tenantId) && void 0 !== pv ? pv : null
          }
          static parseLink(vv) {
            const zv = function(vv) {
              const zv = (0, hv.db)((0, hv.y)(vv)).link,
                Pv = zv ? (0, hv.db)((0, hv.y)(zv)).deep_link_id : null,
                Sv = (0, hv.db)((0, hv.y)(vv)).deep_link_id;
              return (Sv ? (0, hv.db)((0, hv.y)(Sv)).link : null) || Sv || Pv || zv || vv
            }(vv);
            try {
              return new kz(zv)
            } catch (Pv) {
              return null
            }
          }
        }

        function Xz(vv) {
          return kz.parseLink(vv)
        }
        class uz {
          constructor() {
            this.providerId = uz.PROVIDER_ID
          }
          static credential(vv, zv) {
            return Jz._fromEmailAndPassword(vv, zv)
          }
          static credentialWithLink(vv, zv) {
            const Pv = kz.parseLink(zv);
            return nv(Pv, "argument-error"), Jz._fromEmailAndCode(vv, Pv.code, Pv.tenantId)
          }
        }
        uz.PROVIDER_ID = "password", uz.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", uz.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class vP {
          constructor(vv) {
            this.providerId = vv, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(vv) {
            this.defaultLanguageCode = vv
          }
          setCustomParameters(vv) {
            return this.customParameters = vv, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class zP extends vP {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(vv) {
            return this.scopes.includes(vv) || this.scopes.push(vv), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class PP extends zP {
          static credentialFromJSON(vv) {
            const zv = "string" === typeof vv ? JSON.parse(vv) : vv;
            return nv("providerId" in zv && "signInMethod" in zv, "argument-error"), oz._fromParams(zv)
          }
          credential(vv) {
            return this._credential(Object.assign(Object.assign({}, vv), {
              nonce: vv.rawNonce
            }))
          }
          _credential(vv) {
            return nv(vv.idToken || vv.accessToken, "argument-error"), oz._fromParams(Object.assign(Object.assign({}, vv), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(vv) {
            return PP.oauthCredentialFromTaggedObject(vv)
          }
          static credentialFromError(vv) {
            return PP.oauthCredentialFromTaggedObject(vv.customData || {})
          }
          static oauthCredentialFromTaggedObject(vv) {
            let {
              _tokenResponse: zv
            } = vv;
            if (!zv) return null;
            const {
              oauthIdToken: Pv,
              oauthAccessToken: hv,
              oauthTokenSecret: Sv,
              pendingToken: ev,
              nonce: gv,
              providerId: pv
            } = zv;
            if (!hv && !Sv && !Pv && !ev) return null;
            if (!pv) return null;
            try {
              return new PP(pv)._credential({
                idToken: Pv,
                accessToken: hv,
                nonce: gv,
                pendingToken: ev
              })
            } catch (dv) {
              return null
            }
          }
        }
        class hP extends zP {
          constructor() {
            super("facebook.com")
          }
          static credential(vv) {
            return oz._fromParams({
              providerId: hP.PROVIDER_ID,
              signInMethod: hP.FACEBOOK_SIGN_IN_METHOD,
              accessToken: vv
            })
          }
          static credentialFromResult(vv) {
            return hP.credentialFromTaggedObject(vv)
          }
          static credentialFromError(vv) {
            return hP.credentialFromTaggedObject(vv.customData || {})
          }
          static credentialFromTaggedObject(vv) {
            let {
              _tokenResponse: zv
            } = vv;
            if (!zv || !("oauthAccessToken" in zv)) return null;
            if (!zv.oauthAccessToken) return null;
            try {
              return hP.credential(zv.oauthAccessToken)
            } catch (Pv) {
              return null
            }
          }
        }
        hP.FACEBOOK_SIGN_IN_METHOD = "facebook.com", hP.PROVIDER_ID = "facebook.com";
        class SP extends zP {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(vv, zv) {
            return oz._fromParams({
              providerId: SP.PROVIDER_ID,
              signInMethod: SP.GOOGLE_SIGN_IN_METHOD,
              idToken: vv,
              accessToken: zv
            })
          }
          static credentialFromResult(vv) {
            return SP.credentialFromTaggedObject(vv)
          }
          static credentialFromError(vv) {
            return SP.credentialFromTaggedObject(vv.customData || {})
          }
          static credentialFromTaggedObject(vv) {
            let {
              _tokenResponse: zv
            } = vv;
            if (!zv) return null;
            const {
              oauthIdToken: Pv,
              oauthAccessToken: hv
            } = zv;
            if (!Pv && !hv) return null;
            try {
              return SP.credential(Pv, hv)
            } catch (Sv) {
              return null
            }
          }
        }
        SP.GOOGLE_SIGN_IN_METHOD = "google.com", SP.PROVIDER_ID = "google.com";
        class eP extends zP {
          constructor() {
            super("github.com")
          }
          static credential(vv) {
            return oz._fromParams({
              providerId: eP.PROVIDER_ID,
              signInMethod: eP.GITHUB_SIGN_IN_METHOD,
              accessToken: vv
            })
          }
          static credentialFromResult(vv) {
            return eP.credentialFromTaggedObject(vv)
          }
          static credentialFromError(vv) {
            return eP.credentialFromTaggedObject(vv.customData || {})
          }
          static credentialFromTaggedObject(vv) {
            let {
              _tokenResponse: zv
            } = vv;
            if (!zv || !("oauthAccessToken" in zv)) return null;
            if (!zv.oauthAccessToken) return null;
            try {
              return eP.credential(zv.oauthAccessToken)
            } catch (Pv) {
              return null
            }
          }
        }
        eP.GITHUB_SIGN_IN_METHOD = "github.com", eP.PROVIDER_ID = "github.com";
        class gP extends Zz {
          constructor(vv, zv) {
            super(vv, vv), this.pendingToken = zv
          }
          _getIdTokenResponse(vv) {
            return Ez(vv, this.buildRequest())
          }
          _linkToIdToken(vv, zv) {
            const Pv = this.buildRequest();
            return Pv.idToken = zv, Ez(vv, Pv)
          }
          _getReauthenticationResolver(vv) {
            const zv = this.buildRequest();
            return zv.autoCreate = !1, Ez(vv, zv)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(vv) {
            const zv = "string" === typeof vv ? JSON.parse(vv) : vv,
              {
                providerId: Pv,
                signInMethod: hv,
                pendingToken: Sv
              } = zv;
            return Pv && hv && Sv && Pv === hv ? new gP(Pv, Sv) : null
          }
          static _create(vv, zv) {
            return new gP(vv, zv)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class pP extends vP {
          constructor(vv) {
            nv(vv.startsWith("saml."), "argument-error"), super(vv)
          }
          static credentialFromResult(vv) {
            return pP.samlCredentialFromTaggedObject(vv)
          }
          static credentialFromError(vv) {
            return pP.samlCredentialFromTaggedObject(vv.customData || {})
          }
          static credentialFromJSON(vv) {
            const zv = gP.fromJSON(vv);
            return nv(zv, "argument-error"), zv
          }
          static samlCredentialFromTaggedObject(vv) {
            let {
              _tokenResponse: zv
            } = vv;
            if (!zv) return null;
            const {
              pendingToken: Pv,
              providerId: hv
            } = zv;
            if (!Pv || !hv) return null;
            try {
              return gP._create(hv, Pv)
            } catch (Sv) {
              return null
            }
          }
        }
        class dP extends zP {
          constructor() {
            super("twitter.com")
          }
          static credential(vv, zv) {
            return oz._fromParams({
              providerId: dP.PROVIDER_ID,
              signInMethod: dP.TWITTER_SIGN_IN_METHOD,
              oauthToken: vv,
              oauthTokenSecret: zv
            })
          }
          static credentialFromResult(vv) {
            return dP.credentialFromTaggedObject(vv)
          }
          static credentialFromError(vv) {
            return dP.credentialFromTaggedObject(vv.customData || {})
          }
          static credentialFromTaggedObject(vv) {
            let {
              _tokenResponse: zv
            } = vv;
            if (!zv) return null;
            const {
              oauthAccessToken: Pv,
              oauthTokenSecret: hv
            } = zv;
            if (!Pv || !hv) return null;
            try {
              return dP.credential(Pv, hv)
            } catch (Sv) {
              return null
            }
          }
        }
        async function NP(vv, zv) {
          return Lv(vv, "POST", "/v1/accounts:signUp", Qv(vv, zv))
        }
        dP.TWITTER_SIGN_IN_METHOD = "twitter.com", dP.PROVIDER_ID = "twitter.com";
        class lP {
          constructor(vv) {
            this.user = vv.user, this.providerId = vv.providerId, this._tokenResponse = vv._tokenResponse, this.operationType = vv.operationType
          }
          static async _fromIdTokenResponse(vv, zv, Pv) {
            let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Sv = await hz._fromIdTokenResponse(vv, Pv, hv),
              ev = TP(Pv);
            return new lP({
              user: Sv,
              providerId: ev,
              _tokenResponse: Pv,
              operationType: zv
            })
          }
          static async _forOperation(vv, zv, Pv) {
            await vv._updateTokensIfNecessary(Pv, !0);
            const hv = TP(Pv);
            return new lP({
              user: vv,
              providerId: hv,
              _tokenResponse: Pv,
              operationType: zv
            })
          }
        }

        function TP(vv) {
          return vv.providerId ? vv.providerId : "phoneNumber" in vv ? "phone" : null
        }
        async function WP(vv) {
          var zv;
          const Pv = Rz(vv);
          if (await Pv._initializationPromise, null === (zv = Pv.currentUser) || void 0 === zv ? void 0 : zv.isAnonymous) return new lP({
            user: Pv.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const hv = await NP(Pv, {
              returnSecureToken: !0
            }),
            Sv = await lP._fromIdTokenResponse(Pv, "signIn", hv, !0);
          return await Pv._updateCurrentUser(Sv.user), Sv
        }
        class wP extends hv.j {
          constructor(vv, zv, Pv, hv) {
            var Sv;
            super(zv.code, zv.message), this.operationType = Pv, this.user = hv, Object.setPrototypeOf(this, wP.prototype), this.customData = {
              appName: vv.name,
              tenantId: null !== (Sv = vv.tenantId) && void 0 !== Sv ? Sv : void 0,
              _serverResponse: zv.customData._serverResponse,
              operationType: Pv
            }
          }
          static _fromErrorAndOperation(vv, zv, Pv, hv) {
            return new wP(vv, zv, Pv, hv)
          }
        }

        function aP(vv, zv, Pv, hv) {
          return ("reauthenticate" === zv ? Pv._getReauthenticationResolver(vv) : Pv._getIdTokenResponse(vv)).catch((Pv => {
            if ("auth/multi-factor-auth-required" === Pv.code) throw wP._fromErrorAndOperation(vv, Pv, zv, hv);
            throw Pv
          }))
        }

        function sP(vv) {
          return new Set(vv.map((vv => {
            let {
              providerId: zv
            } = vv;
            return zv
          })).filter((vv => !!vv)))
        }
        async function CP(vv, zv) {
          const Pv = (0, hv.J)(vv);
          await cP(!0, Pv, zv);
          const {
            providerUserInfo: Sv
          } = await async function(vv, zv) {
            return Zv(vv, "POST", "/v1/accounts:update", zv)
          }(Pv.auth, {
            idToken: await Pv.getIdToken(),
            deleteProvider: [zv]
          }), ev = sP(Sv || []);
          return Pv.providerData = Pv.providerData.filter((vv => ev.has(vv.providerId))), ev.has("phone") || (Pv.phoneNumber = null), await Pv.auth._persistUserIfCurrent(Pv), Pv
        }
        async function iP(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const hv = await rv(vv, zv._linkToIdToken(vv.auth, await vv.getIdToken()), Pv);
          return lP._forOperation(vv, "link", hv)
        }
        async function cP(vv, zv, Pv) {
          await uv(zv);
          const hv = !1 === vv ? "provider-already-linked" : "no-such-provider";
          nv(sP(zv.providerData).has(Pv) === vv, zv.auth, hv)
        }
        async function GP(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: hv
          } = vv, Sv = "reauthenticate";
          try {
            const ev = await rv(vv, aP(hv, Sv, zv, vv), Pv);
            nv(ev.idToken, hv, "internal-error");
            const gv = bv(ev.idToken);
            nv(gv, hv, "internal-error");
            const {
              sub: pv
            } = gv;
            return nv(vv.uid === pv, hv, "user-mismatch"), lP._forOperation(vv, Sv, ev)
          } catch (ev) {
            throw "auth/user-not-found" === (null === ev || void 0 === ev ? void 0 : ev.code) && mv(hv, "user-mismatch"), ev
          }
        }
        async function mP(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const hv = "signIn",
            Sv = await aP(vv, hv, zv),
            ev = await lP._fromIdTokenResponse(vv, hv, Sv);
          return Pv || await vv._updateCurrentUser(ev.user), ev
        }
        async function jP(vv, zv) {
          return mP(Rz(vv), zv)
        }
        async function fP(vv, zv) {
          const Pv = (0, hv.J)(vv);
          return await cP(!1, Pv, zv.providerId), iP(Pv, zv)
        }
        async function FP(vv, zv) {
          return GP((0, hv.J)(vv), zv)
        }
        async function YP(vv, zv) {
          const Pv = Rz(vv),
            hv = await async function(vv, zv) {
              return Lv(vv, "POST", "/v1/accounts:signInWithCustomToken", Qv(vv, zv))
            }(Pv, {
              token: zv,
              returnSecureToken: !0
            }), Sv = await lP._fromIdTokenResponse(Pv, "signIn", hv);
          return await Pv._updateCurrentUser(Sv.user), Sv
        }
        class nP {
          constructor(vv, zv) {
            this.factorId = vv, this.uid = zv.mfaEnrollmentId, this.enrollmentTime = new Date(zv.enrolledAt).toUTCString(), this.displayName = zv.displayName
          }
          static _fromServerResponse(vv, zv) {
            return "phoneInfo" in zv ? OP._fromServerResponse(vv, zv) : "totpInfo" in zv ? DP._fromServerResponse(vv, zv) : mv(vv, "internal-error")
          }
        }
        class OP extends nP {
          constructor(vv) {
            super("phone", vv), this.phoneNumber = vv.phoneInfo
          }
          static _fromServerResponse(vv, zv) {
            return new OP(zv)
          }
        }
        class DP extends nP {
          constructor(vv) {
            super("totp", vv)
          }
          static _fromServerResponse(vv, zv) {
            return new DP(zv)
          }
        }

        function KP(vv, zv, Pv) {
          var hv;
          nv((null === (hv = Pv.url) || void 0 === hv ? void 0 : hv.length) > 0, vv, "invalid-continue-uri"), nv("undefined" === typeof Pv.dynamicLinkDomain || Pv.dynamicLinkDomain.length > 0, vv, "invalid-dynamic-link-domain"), zv.continueUrl = Pv.url, zv.dynamicLinkDomain = Pv.dynamicLinkDomain, zv.canHandleCodeInApp = Pv.handleCodeInApp, Pv.iOS && (nv(Pv.iOS.bundleId.length > 0, vv, "missing-ios-bundle-id"), zv.iOSBundleId = Pv.iOS.bundleId), Pv.android && (nv(Pv.android.packageName.length > 0, vv, "missing-android-pkg-name"), zv.androidInstallApp = Pv.android.installApp, zv.androidMinimumVersionCode = Pv.android.minimumVersion, zv.androidPackageName = Pv.android.packageName)
        }
        async function VP(vv, zv, Pv) {
          var hv;
          const Sv = Rz(vv),
            ev = {
              requestType: "PASSWORD_RESET",
              email: zv,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (hv = Sv._getRecaptchaConfig()) || void 0 === hv ? void 0 : hv.emailPasswordEnabled) {
            const vv = await Kz(Sv, ev, "getOobCode", !0);
            Pv && KP(Sv, vv, Pv), await yz(Sv, vv)
          } else Pv && KP(Sv, ev, Pv), await yz(Sv, ev).catch((async vv => {
            if ("auth/missing-recaptcha-token" !== vv.code) return Promise.reject(vv);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const vv = await Kz(Sv, ev, "getOobCode", !0);
              Pv && KP(Sv, vv, Pv), await yz(Sv, vv)
            }
          }))
        }
        async function UP(vv, zv, Pv) {
          await Az((0, hv.J)(vv), {
            oobCode: zv,
            newPassword: Pv
          })
        }
        async function RP(vv, zv) {
          await async function(vv, zv) {
            return Zv(vv, "POST", "/v1/accounts:update", Qv(vv, zv))
          }((0, hv.J)(vv), {
            oobCode: zv
          })
        }
        async function xP(vv, zv) {
          const Pv = (0, hv.J)(vv),
            Sv = await Az(Pv, {
              oobCode: zv
            }),
            ev = Sv.requestType;
          switch (nv(ev, Pv, "internal-error"), ev) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              nv(Sv.newEmail, Pv, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              nv(Sv.mfaInfo, Pv, "internal-error");
            default:
              nv(Sv.email, Pv, "internal-error")
          }
          let gv = null;
          return Sv.mfaInfo && (gv = nP._fromServerResponse(Rz(Pv), Sv.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Sv.requestType ? Sv.newEmail : Sv.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Sv.requestType ? Sv.email : Sv.newEmail) || null,
              multiFactorInfo: gv
            },
            operation: ev
          }
        }
        async function tP(vv, zv) {
          const {
            data: Pv
          } = await xP((0, hv.J)(vv), zv);
          return Pv.email
        }
        async function qP(vv, zv, Pv) {
          var hv;
          const Sv = Rz(vv),
            ev = {
              returnSecureToken: !0,
              email: zv,
              password: Pv,
              clientType: "CLIENT_TYPE_WEB"
            };
          let gv;
          if (null === (hv = Sv._getRecaptchaConfig()) || void 0 === hv ? void 0 : hv.emailPasswordEnabled) {
            const vv = await Kz(Sv, ev, "signUpPassword");
            gv = NP(Sv, vv)
          } else gv = NP(Sv, ev).catch((async vv => {
            if ("auth/missing-recaptcha-token" === vv.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const vv = await Kz(Sv, ev, "signUpPassword");
              return NP(Sv, vv)
            }
            return Promise.reject(vv)
          }));
          const pv = await gv.catch((vv => Promise.reject(vv))),
            dv = await lP._fromIdTokenResponse(Sv, "signIn", pv);
          return await Sv._updateCurrentUser(dv.user), dv
        }

        function IP(vv, zv, Pv) {
          return jP((0, hv.J)(vv), uz.credential(zv, Pv))
        }
        async function QP(vv, zv, Pv) {
          var hv;
          const Sv = Rz(vv),
            ev = {
              requestType: "EMAIL_SIGNIN",
              email: zv,
              clientType: "CLIENT_TYPE_WEB"
            };

          function gv(vv, zv) {
            nv(zv.handleCodeInApp, Sv, "argument-error"), zv && KP(Sv, vv, zv)
          }
          if (null === (hv = Sv._getRecaptchaConfig()) || void 0 === hv ? void 0 : hv.emailPasswordEnabled) {
            const vv = await Kz(Sv, ev, "getOobCode", !0);
            gv(vv, Pv), await Bz(Sv, vv)
          } else gv(ev, Pv), await Bz(Sv, ev).catch((async vv => {
            if ("auth/missing-recaptcha-token" !== vv.code) return Promise.reject(vv);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const vv = await Kz(Sv, ev, "getOobCode", !0);
              gv(vv, Pv), await Bz(Sv, vv)
            }
          }))
        }

        function ZP(vv, zv) {
          const Pv = kz.parseLink(zv);
          return "EMAIL_SIGNIN" === (null === Pv || void 0 === Pv ? void 0 : Pv.operation)
        }
        async function AP(vv, zv, Pv) {
          const Sv = (0, hv.J)(vv),
            ev = uz.credentialWithLink(zv, Pv || Kv());
          return nv(ev._tenantId === (Sv.tenantId || null), Sv, "tenant-id-mismatch"), jP(Sv, ev)
        }
        async function LP(vv, zv) {
          const Pv = {
              identifier: zv,
              continueUri: Vv() ? Kv() : "http://localhost"
            },
            {
              signinMethods: Sv
            } = await async function(vv, zv) {
              return Zv(vv, "POST", "/v1/accounts:createAuthUri", Qv(vv, zv))
            }((0, hv.J)(vv), Pv);
          return Sv || []
        }
        async function HP(vv, zv) {
          const Pv = (0, hv.J)(vv),
            Sv = {
              requestType: "VERIFY_EMAIL",
              idToken: await vv.getIdToken()
            };
          zv && KP(Pv.auth, Sv, zv);
          const {
            email: ev
          } = await async function(vv, zv) {
            return Mz(vv, zv)
          }(Pv.auth, Sv);
          ev !== vv.email && await vv.reload()
        }
        async function MP(vv, zv, Pv) {
          const Sv = (0, hv.J)(vv),
            ev = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await vv.getIdToken(),
              newEmail: zv
            };
          Pv && KP(Sv.auth, ev, Pv);
          const {
            email: gv
          } = await async function(vv, zv) {
            return Mz(vv, zv)
          }(Sv.auth, ev);
          gv !== vv.email && await vv.reload()
        }
        async function yP(vv, zv) {
          let {
            displayName: Pv,
            photoURL: Sv
          } = zv;
          if (void 0 === Pv && void 0 === Sv) return;
          const ev = (0, hv.J)(vv),
            gv = {
              idToken: await ev.getIdToken(),
              displayName: Pv,
              photoUrl: Sv,
              returnSecureToken: !0
            },
            pv = await rv(ev, async function(vv, zv) {
              return Zv(vv, "POST", "/v1/accounts:update", zv)
            }(ev.auth, gv));
          ev.displayName = pv.displayName || null, ev.photoURL = pv.photoUrl || null;
          const dv = ev.providerData.find((vv => {
            let {
              providerId: zv
            } = vv;
            return "password" === zv
          }));
          dv && (dv.displayName = ev.displayName, dv.photoURL = ev.photoURL), await ev._updateTokensIfNecessary(pv)
        }

        function BP(vv, zv) {
          return EP((0, hv.J)(vv), zv, null)
        }

        function JP(vv, zv) {
          return EP((0, hv.J)(vv), null, zv)
        }
        async function EP(vv, zv, Pv) {
          const {
            auth: hv
          } = vv, Sv = {
            idToken: await vv.getIdToken(),
            returnSecureToken: !0
          };
          zv && (Sv.email = zv), Pv && (Sv.password = Pv);
          const ev = await rv(vv, Lz(hv, Sv));
          await vv._updateTokensIfNecessary(ev, !0)
        }
        class oP {
          constructor(vv, zv) {
            let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = vv, this.providerId = zv, this.profile = Pv
          }
        }
        class bP extends oP {
          constructor(vv, zv, Pv, hv) {
            super(vv, zv, Pv), this.username = hv
          }
        }
        class rP extends oP {
          constructor(vv, zv) {
            super(vv, "facebook.com", zv)
          }
        }
        class kP extends bP {
          constructor(vv, zv) {
            super(vv, "github.com", zv, "string" === typeof(null === zv || void 0 === zv ? void 0 : zv.login) ? null === zv || void 0 === zv ? void 0 : zv.login : null)
          }
        }
        class XP extends oP {
          constructor(vv, zv) {
            super(vv, "google.com", zv)
          }
        }
        class uP extends bP {
          constructor(vv, zv, Pv) {
            super(vv, "twitter.com", zv, Pv)
          }
        }

        function vh(vv) {
          const {
            user: zv,
            _tokenResponse: Pv
          } = vv;
          return zv.isAnonymous && !Pv ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(vv) {
            var zv, Pv;
            if (!vv) return null;
            const {
              providerId: hv
            } = vv, Sv = vv.rawUserInfo ? JSON.parse(vv.rawUserInfo) : {}, ev = vv.isNewUser || "identitytoolkit#SignupNewUserResponse" === vv.kind;
            if (!hv && (null === vv || void 0 === vv ? void 0 : vv.idToken)) {
              const hv = null === (Pv = null === (zv = bv(vv.idToken)) || void 0 === zv ? void 0 : zv.firebase) || void 0 === Pv ? void 0 : Pv.sign_in_provider;
              if (hv) return new oP(ev, "anonymous" !== hv && "custom" !== hv ? hv : null)
            }
            if (!hv) return null;
            switch (hv) {
              case "facebook.com":
                return new rP(ev, Sv);
              case "github.com":
                return new kP(ev, Sv);
              case "google.com":
                return new XP(ev, Sv);
              case "twitter.com":
                return new uP(ev, Sv, vv.screenName || null);
              case "custom":
              case "anonymous":
                return new oP(ev, null);
              default:
                return new oP(ev, hv, Sv)
            }
          }(Pv)
        }

        function zh(vv, zv) {
          return (0, hv.J)(vv).setPersistence(zv)
        }

        function Ph(vv) {
          return Rz(vv).initializeRecaptchaConfig()
        }

        function hh(vv, zv, Pv, Sv) {
          return (0, hv.J)(vv).onIdTokenChanged(zv, Pv, Sv)
        }

        function Sh(vv, zv, Pv) {
          return (0, hv.J)(vv).beforeAuthStateChanged(zv, Pv)
        }

        function eh(vv, zv, Pv, Sv) {
          return (0, hv.J)(vv).onAuthStateChanged(zv, Pv, Sv)
        }

        function gh(vv) {
          (0, hv.J)(vv).useDeviceLanguage()
        }

        function ph(vv, zv) {
          return (0, hv.J)(vv).updateCurrentUser(zv)
        }

        function dh(vv) {
          return (0, hv.J)(vv).signOut()
        }
        async function Nh(vv) {
          return (0, hv.J)(vv).delete()
        }
        class lh {
          constructor(vv, zv, Pv) {
            this.type = vv, this.credential = zv, this.auth = Pv
          }
          static _fromIdtoken(vv, zv) {
            return new lh("enroll", vv, zv)
          }
          static _fromMfaPendingCredential(vv) {
            return new lh("signin", vv)
          }
          toJSON() {
            const vv = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [vv]: this.credential
              }
            }
          }
          static fromJSON(vv) {
            var zv, Pv;
            if (null === vv || void 0 === vv ? void 0 : vv.multiFactorSession) {
              if (null === (zv = vv.multiFactorSession) || void 0 === zv ? void 0 : zv.pendingCredential) return lh._fromMfaPendingCredential(vv.multiFactorSession.pendingCredential);
              if (null === (Pv = vv.multiFactorSession) || void 0 === Pv ? void 0 : Pv.idToken) return lh._fromIdtoken(vv.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Th {
          constructor(vv, zv, Pv) {
            this.session = vv, this.hints = zv, this.signInResolver = Pv
          }
          static _fromError(vv, zv) {
            const Pv = Rz(vv),
              hv = zv.customData._serverResponse,
              Sv = (hv.mfaInfo || []).map((vv => nP._fromServerResponse(Pv, vv)));
            nv(hv.mfaPendingCredential, Pv, "internal-error");
            const ev = lh._fromMfaPendingCredential(hv.mfaPendingCredential);
            return new Th(ev, Sv, (async vv => {
              const Sv = await vv._process(Pv, ev);
              delete hv.mfaInfo, delete hv.mfaPendingCredential;
              const gv = Object.assign(Object.assign({}, hv), {
                idToken: Sv.idToken,
                refreshToken: Sv.refreshToken
              });
              switch (zv.operationType) {
                case "signIn":
                  const vv = await lP._fromIdTokenResponse(Pv, zv.operationType, gv);
                  return await Pv._updateCurrentUser(vv.user), vv;
                case "reauthenticate":
                  return nv(zv.user, Pv, "internal-error"), lP._forOperation(zv.user, zv.operationType, gv);
                default:
                  mv(Pv, "internal-error")
              }
            }))
          }
          async resolveSignIn(vv) {
            const zv = vv;
            return this.signInResolver(zv)
          }
        }

        function Wh(vv, zv) {
          var Pv;
          const Sv = (0, hv.J)(vv),
            ev = zv;
          return nv(zv.customData.operationType, Sv, "argument-error"), nv(null === (Pv = ev.customData._serverResponse) || void 0 === Pv ? void 0 : Pv.mfaPendingCredential, Sv, "argument-error"), Th._fromError(Sv, ev)
        }
        class wh {
          constructor(vv) {
            this.user = vv, this.enrolledFactors = [], vv._onReload((zv => {
              zv.mfaInfo && (this.enrolledFactors = zv.mfaInfo.map((zv => nP._fromServerResponse(vv.auth, zv))))
            }))
          }
          static _fromUser(vv) {
            return new wh(vv)
          }
          async getSession() {
            return lh._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(vv, zv) {
            const Pv = vv,
              hv = await this.getSession(),
              Sv = await rv(this.user, Pv._process(this.user.auth, hv, zv));
            return await this.user._updateTokensIfNecessary(Sv), this.user.reload()
          }
          async unenroll(vv) {
            const zv = "string" === typeof vv ? vv : vv.uid,
              Pv = await this.user.getIdToken();
            try {
              const vv = await rv(this.user, (hv = this.user.auth, Sv = {
                idToken: Pv,
                mfaEnrollmentId: zv
              }, Zv(hv, "POST", "/v2/accounts/mfaEnrollment:withdraw", Qv(hv, Sv))));
              this.enrolledFactors = this.enrolledFactors.filter((vv => {
                let {
                  uid: Pv
                } = vv;
                return Pv !== zv
              })), await this.user._updateTokensIfNecessary(vv), await this.user.reload()
            } catch (ev) {
              throw ev
            }
            var hv, Sv
          }
        }
        const ah = new WeakMap;

        function sh(vv) {
          const zv = (0, hv.J)(vv);
          return ah.has(zv) || ah.set(zv, wh._fromUser(zv)), ah.get(zv)
        }
        const Ch = "__sak";
        class ih {
          constructor(vv, zv) {
            this.storageRetriever = vv, this.type = zv
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Ch, "1"), this.storage.removeItem(Ch), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (vv) {
              return Promise.resolve(!1)
            }
          }
          _set(vv, zv) {
            return this.storage.setItem(vv, JSON.stringify(zv)), Promise.resolve()
          }
          _get(vv) {
            const zv = this.storage.getItem(vv);
            return Promise.resolve(zv ? JSON.parse(zv) : null)
          }
          _remove(vv) {
            return this.storage.removeItem(vv), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class ch extends ih {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (vv, zv) => this.onStorageEvent(vv, zv), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const vv = (0, hv.L)();
              return Wz(vv) || cz(vv)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (vv) {
                return !1
              }
            }(), this.fallbackToPolling = Gz(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(vv) {
            for (const zv of Object.keys(this.listeners)) {
              const Pv = this.storage.getItem(zv),
                hv = this.localCache[zv];
              Pv !== hv && vv(zv, hv, Pv)
            }
          }
          onStorageEvent(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!vv.key) return void this.forAllChangedKeys(((vv, zv, Pv) => {
              this.notifyListeners(vv, Pv)
            }));
            const Pv = vv.key;
            if (zv ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const hv = this.storage.getItem(Pv);
              if (vv.newValue !== hv) null !== vv.newValue ? this.storage.setItem(Pv, vv.newValue) : this.storage.removeItem(Pv);
              else if (this.localCache[Pv] === vv.newValue && !zv) return
            }
            const Sv = () => {
                const vv = this.storage.getItem(Pv);
                (zv || this.localCache[Pv] !== vv) && this.notifyListeners(Pv, vv)
              },
              ev = this.storage.getItem(Pv);
            (0, hv.U)() && 10 === document.documentMode && ev !== vv.newValue && vv.newValue !== vv.oldValue ? setTimeout(Sv, 10) : Sv()
          }
          notifyListeners(vv, zv) {
            this.localCache[vv] = zv;
            const Pv = this.listeners[vv];
            if (Pv)
              for (const hv of Array.from(Pv)) hv(zv ? JSON.parse(zv) : zv)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((vv, zv, Pv) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: vv,
                  oldValue: zv,
                  newValue: Pv
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
          _addListener(vv, zv) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[vv] || (this.listeners[vv] = new Set, this.localCache[vv] = this.storage.getItem(vv)), this.listeners[vv].add(zv)
          }
          _removeListener(vv, zv) {
            this.listeners[vv] && (this.listeners[vv].delete(zv), 0 === this.listeners[vv].size && delete this.listeners[vv]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(vv, zv) {
            await super._set(vv, zv), this.localCache[vv] = JSON.stringify(zv)
          }
          async _get(vv) {
            const zv = await super._get(vv);
            return this.localCache[vv] = JSON.stringify(zv), zv
          }
          async _remove(vv) {
            await super._remove(vv), delete this.localCache[vv]
          }
        }
        ch.type = "LOCAL";
        const Gh = ch;
        class mh extends ih {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(vv, zv) {}
          _removeListener(vv, zv) {}
        }
        mh.type = "SESSION";
        const jh = mh;
        class fh {
          constructor(vv) {
            this.eventTarget = vv, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(vv) {
            const zv = this.receivers.find((zv => zv.isListeningto(vv)));
            if (zv) return zv;
            const Pv = new fh(vv);
            return this.receivers.push(Pv), Pv
          }
          isListeningto(vv) {
            return this.eventTarget === vv
          }
          async handleEvent(vv) {
            const zv = vv,
              {
                eventId: Pv,
                eventType: hv,
                data: Sv
              } = zv.data,
              ev = this.handlersMap[hv];
            if (!(null === ev || void 0 === ev ? void 0 : ev.size)) return;
            zv.ports[0].postMessage({
              status: "ack",
              eventId: Pv,
              eventType: hv
            });
            const gv = Array.from(ev).map((async vv => vv(zv.origin, Sv))),
              pv = await
            function(vv) {
              return Promise.all(vv.map((async vv => {
                try {
                  return {
                    fulfilled: !0,
                    value: await vv
                  }
                } catch (zv) {
                  return {
                    fulfilled: !1,
                    reason: zv
                  }
                }
              })))
            }(gv);
            zv.ports[0].postMessage({
              status: "done",
              eventId: Pv,
              eventType: hv,
              response: pv
            })
          }
          _subscribe(vv, zv) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[vv] || (this.handlersMap[vv] = new Set), this.handlersMap[vv].add(zv)
          }
          _unsubscribe(vv, zv) {
            this.handlersMap[vv] && zv && this.handlersMap[vv].delete(zv), zv && 0 !== this.handlersMap[vv].size || delete this.handlersMap[vv], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function Fh() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            Pv = "";
          for (let hv = 0; hv < zv; hv++) Pv += Math.floor(10 * Math.random());
          return vv + Pv
        }
        fh.receivers = [];
        class Yh {
          constructor(vv) {
            this.target = vv, this.handlers = new Set
          }
          removeMessageHandler(vv) {
            vv.messageChannel && (vv.messageChannel.port1.removeEventListener("message", vv.rG), vv.messageChannel.port1.close()), this.handlers.delete(vv)
          }
          async _send(vv, zv) {
            let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const hv = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!hv) throw new Error("connection_unavailable");
            let Sv, ev;
            return new Promise(((gv, pv) => {
              const dv = Fh("", 20);
              hv.port1.start();
              const Nv = setTimeout((() => {
                pv(new Error("unsupported_event"))
              }), Pv);
              ev = {
                messageChannel: hv,
                rG(vv) {
                  const zv = vv;
                  if (zv.data.eventId === dv) switch (zv.data.status) {
                    case "ack":
                      clearTimeout(Nv), Sv = setTimeout((() => {
                        pv(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Sv), gv(zv.data.response);
                      break;
                    default:
                      clearTimeout(Nv), clearTimeout(Sv), pv(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(ev), hv.port1.addEventListener("message", ev.rG), this.target.postMessage({
                eventType: vv,
                eventId: dv,
                data: zv
              }, [hv.port2])
            })).finally((() => {
              ev && this.removeMessageHandler(ev)
            }))
          }
        }

        function nh() {
          return window
        }

        function Oh() {
          return "undefined" !== typeof nh().WorkerGlobalScope && "function" === typeof nh().importScripts
        }
        const Dh = "firebaseLocalStorageDb",
          Kh = "firebaseLocalStorage",
          Vh = "fbase_key";
        class Uh {
          constructor(vv) {
            this.request = vv
          }
          toPromise() {
            return new Promise(((vv, zv) => {
              this.request.addEventListener("success", (() => {
                vv(this.request.result)
              })), this.request.addEventListener("error", (() => {
                zv(this.request.error)
              }))
            }))
          }
        }

        function Rh(vv, zv) {
          return vv.transaction([Kh], zv ? "readwrite" : "readonly").objectStore(Kh)
        }

        function xh() {
          const vv = indexedDB.open(Dh, 1);
          return new Promise(((zv, Pv) => {
            vv.addEventListener("error", (() => {
              Pv(vv.error)
            })), vv.addEventListener("upgradeneeded", (() => {
              const zv = vv.result;
              try {
                zv.createObjectStore(Kh, {
                  keyPath: Vh
                })
              } catch (hv) {
                Pv(hv)
              }
            })), vv.addEventListener("success", (async () => {
              const Pv = vv.result;
              Pv.objectStoreNames.contains(Kh) ? zv(Pv) : (Pv.close(), await
                function() {
                  const vv = indexedDB.deleteDatabase(Dh);
                  return new Uh(vv).toPromise()
                }(), zv(await xh()))
            }))
          }))
        }
        async function th(vv, zv, Pv) {
          const hv = Rh(vv, !0).put({
            [Vh]: zv,
            value: Pv
          });
          return new Uh(hv).toPromise()
        }

        function qh(vv, zv) {
          const Pv = Rh(vv, !0).delete(zv);
          return new Uh(Pv).toPromise()
        }
        class Ih {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await xh()), this.db
          }
          async _withRetries(vv) {
            let zv = 0;
            for (;;) try {
              const zv = await this._openDb();
              return await vv(zv)
            } catch (Pv) {
              if (zv++ > 3) throw Pv;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Oh() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = fh._getInstance(Oh() ? self : null), this.receiver._subscribe("keyChanged", (async (vv, zv) => ({
              keyProcessed: (await this._poll()).includes(zv.key)
            }))), this.receiver._subscribe("ping", (async (vv, zv) => ["keyChanged"]))
          }
          async initializeSender() {
            var vv, zv;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (vv) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new Yh(this.activeServiceWorker);
            const Pv = await this.sender._send("ping", {}, 800);
            Pv && (null === (vv = Pv[0]) || void 0 === vv ? void 0 : vv.fulfilled) && (null === (zv = Pv[0]) || void 0 === zv ? void 0 : zv.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(vv) {
            if (this.sender && this.activeServiceWorker && function() {
                var vv;
                return (null === (vv = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === vv ? void 0 : vv.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: vv
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (zv) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const vv = await xh();
              return await th(vv, Ch, "1"), await qh(vv, Ch), !0
            } catch (vv) {}
            return !1
          }
          async _withPendingWrite(vv) {
            this.pendingWrites++;
            try {
              await vv()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(vv, zv) {
            return this._withPendingWrite((async () => (await this._withRetries((Pv => th(Pv, vv, zv))), this.localCache[vv] = zv, this.notifyServiceWorker(vv))))
          }
          async _get(vv) {
            const zv = await this._withRetries((zv => async function(vv, zv) {
              const Pv = Rh(vv, !1).get(zv),
                hv = await new Uh(Pv).toPromise();
              return void 0 === hv ? null : hv.value
            }(zv, vv)));
            return this.localCache[vv] = zv, zv
          }
          async _remove(vv) {
            return this._withPendingWrite((async () => (await this._withRetries((zv => qh(zv, vv))), delete this.localCache[vv], this.notifyServiceWorker(vv))))
          }
          async _poll() {
            const vv = await this._withRetries((vv => {
              const zv = Rh(vv, !1).getAll();
              return new Uh(zv).toPromise()
            }));
            if (!vv) return [];
            if (0 !== this.pendingWrites) return [];
            const zv = [],
              Pv = new Set;
            for (const {
                fbase_key: hv,
                value: Sv
              }
              of vv) Pv.add(hv), JSON.stringify(this.localCache[hv]) !== JSON.stringify(Sv) && (this.notifyListeners(hv, Sv), zv.push(hv));
            for (const hv of Object.keys(this.localCache)) this.localCache[hv] && !Pv.has(hv) && (this.notifyListeners(hv, null), zv.push(hv));
            return zv
          }
          notifyListeners(vv, zv) {
            this.localCache[vv] = zv;
            const Pv = this.listeners[vv];
            if (Pv)
              for (const hv of Array.from(Pv)) hv(zv)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(vv, zv) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[vv] || (this.listeners[vv] = new Set, this._get(vv)), this.listeners[vv].add(zv)
          }
          _removeListener(vv, zv) {
            this.listeners[vv] && (this.listeners[vv].delete(zv), 0 === this.listeners[vv].size && delete this.listeners[vv]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Ih.type = "LOCAL";
        const Qh = Ih;
        const Zh = 1e12;
        class Ah {
          constructor(vv) {
            this.auth = vv, this.counter = Zh, this._widgets = new Map
          }
          render(vv, zv) {
            const Pv = this.counter;
            return this._widgets.set(Pv, new Lh(vv, this.auth.name, zv || {})), this.counter++, Pv
          }
          reset(vv) {
            var zv;
            const Pv = vv || Zh;
            null === (zv = this._widgets.get(Pv)) || void 0 === zv || zv.delete(), this._widgets.delete(Pv)
          }
          getResponse(vv) {
            var zv;
            const Pv = vv || Zh;
            return (null === (zv = this._widgets.get(Pv)) || void 0 === zv ? void 0 : zv.getResponse()) || ""
          }
          async execute(vv) {
            var zv;
            const Pv = vv || Zh;
            return null === (zv = this._widgets.get(Pv)) || void 0 === zv || zv.execute(), ""
          }
        }
        class Lh {
          constructor(vv, zv, Pv) {
            this.params = Pv, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const hv = "string" === typeof vv ? document.getElementById(vv) : vv;
            nv(hv, "argument-error", {
              appName: zv
            }), this.container = hv, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(vv) {
                const zv = [],
                  Pv = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let hv = 0; hv < vv; hv++) zv.push(Pv.charAt(Math.floor(Math.random() * Pv.length)));
                return zv.join("")
              }(50);
              const {
                callback: vv,
                "expired-callback": zv
              } = this.params;
              if (vv) try {
                vv(this.responseToken)
              } catch (Pv) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, zv) try {
                  zv()
                } catch (Pv) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const Hh = Oz("rcb"),
          Mh = new Rv(3e4, 6e4);
        class yh {
          constructor() {
            var vv;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (vv = nh().grecaptcha) || void 0 === vv ? void 0 : vv.render)
          }
          load(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return nv(function(vv) {
              return vv.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(vv)
            }(zv), vv, "argument-error"), this.shouldResolveImmediately(zv) && fz(nh().grecaptcha) ? Promise.resolve(nh().grecaptcha) : new Promise(((Pv, Sv) => {
              const ev = nh().setTimeout((() => {
                Sv(jv(vv, "network-request-failed"))
              }), Mh.get());
              nh()[Hh] = () => {
                nh().clearTimeout(ev), delete nh()[Hh];
                const hv = nh().grecaptcha;
                if (!hv || !fz(hv)) return void Sv(jv(vv, "internal-error"));
                const gv = hv.render;
                hv.render = (vv, zv) => {
                  const Pv = gv(vv, zv);
                  return this.counter++, Pv
                }, this.hostLanguage = zv, Pv(hv)
              };
              nz(`https://www.google.com/recaptcha/api.js??${(0,hv.hb)({onload:Hh,render:"explicit",hl:zv})}`).catch((() => {
                clearTimeout(ev), Sv(jv(vv, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(vv) {
            var zv;
            return !!(null === (zv = nh().grecaptcha) || void 0 === zv ? void 0 : zv.render) && (vv === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class Bh {
          async load(vv) {
            return new Ah(vv)
          }
          clearedOneInstance() {}
        }
        const Jh = "recaptcha",
          Eh = {
            theme: "light",
            type: "image"
          };
        class oh {
          constructor(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Eh),
              Pv = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = zv, this.type = Jh, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Rz(Pv), this.isInvisible = "invisible" === this.parameters.size, nv("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const hv = "string" === typeof vv ? document.getElementById(vv) : vv;
            nv(hv, this.auth, "argument-error"), this.container = hv, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Bh : new yh, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const vv = await this.render(),
              zv = this.getAssertedRecaptcha(),
              Pv = zv.getResponse(vv);
            return Pv || new Promise((Pv => {
              const hv = vv => {
                vv && (this.tokenChangeListeners.delete(hv), Pv(vv))
              };
              this.tokenChangeListeners.add(hv), this.isInvisible && zv.execute(vv)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (vv) {
              return Promise.reject(vv)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((vv => {
              throw this.renderPromise = null, vv
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((vv => {
              this.container.removeChild(vv)
            }))
          }
          validateStartingState() {
            nv(!this.parameters.sitekey, this.auth, "argument-error"), nv(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), nv("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(vv) {
            return zv => {
              if (this.tokenChangeListeners.forEach((vv => vv(zv))), "function" === typeof vv) vv(zv);
              else if ("string" === typeof vv) {
                const Pv = nh()[vv];
                "function" === typeof Pv && Pv(zv)
              }
            }
          }
          assertNotDestroyed() {
            nv(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let vv = this.container;
              if (!this.isInvisible) {
                const zv = document.createElement("div");
                vv.appendChild(zv), vv = zv
              }
              this.widgetId = this.getAssertedRecaptcha().render(vv, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            nv(Vv() && !Oh(), this.auth, "internal-error"), await
            function() {
              let vv = null;
              return new Promise((zv => {
                "complete" !== document.readyState ? (vv = () => zv(), window.addEventListener("load", vv)) : zv()
              })).catch((zv => {
                throw vv && window.removeEventListener("load", vv), zv
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const vv = await async function(vv) {
              return (await Zv(vv, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            nv(vv, this.auth, "internal-error"), this.parameters.sitekey = vv
          }
          getAssertedRecaptcha() {
            return nv(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class bh {
          constructor(vv, zv) {
            this.verificationId = vv, this.onConfirmation = zv
          }
          confirm(vv) {
            const zv = rz._fromVerification(this.verificationId, vv);
            return this.onConfirmation(zv)
          }
        }
        async function rh(vv, zv, Pv) {
          const Sv = Rz(vv),
            ev = await uh(Sv, zv, (0, hv.J)(Pv));
          return new bh(ev, (vv => jP(Sv, vv)))
        }
        async function kh(vv, zv, Pv) {
          const Sv = (0, hv.J)(vv);
          await cP(!1, Sv, "phone");
          const ev = await uh(Sv.auth, zv, (0, hv.J)(Pv));
          return new bh(ev, (vv => fP(Sv, vv)))
        }
        async function Xh(vv, zv, Pv) {
          const Sv = (0, hv.J)(vv),
            ev = await uh(Sv.auth, zv, (0, hv.J)(Pv));
          return new bh(ev, (vv => FP(Sv, vv)))
        }
        async function uh(vv, zv, Pv) {
          var hv;
          const Sv = await Pv.verify();
          try {
            let ev;
            if (nv("string" === typeof Sv, vv, "argument-error"), nv(Pv.type === Jh, vv, "argument-error"), ev = "string" === typeof zv ? {
                phoneNumber: zv
              } : zv, "session" in ev) {
              const zv = ev.session;
              if ("phoneNumber" in ev) {
                nv("enroll" === zv.type, vv, "internal-error");
                const Pv = await
                function(vv, zv) {
                  return Zv(vv, "POST", "/v2/accounts/mfaEnrollment:start", Qv(vv, zv))
                }(vv, {
                  idToken: zv.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: ev.phoneNumber,
                    recaptchaToken: Sv
                  }
                });
                return Pv.phoneSessionInfo.sessionInfo
              } {
                nv("signin" === zv.type, vv, "internal-error");
                const Pv = (null === (hv = ev.multiFactorHint) || void 0 === hv ? void 0 : hv.uid) || ev.multiFactorUid;
                nv(Pv, vv, "missing-multi-factor-info");
                const gv = await
                function(vv, zv) {
                  return Zv(vv, "POST", "/v2/accounts/mfaSignIn:start", Qv(vv, zv))
                }(vv, {
                  mfaPendingCredential: zv.credential,
                  mfaEnrollmentId: Pv,
                  phoneSignInInfo: {
                    recaptchaToken: Sv
                  }
                });
                return gv.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: zv
              } = await async function(vv, zv) {
                return Zv(vv, "POST", "/v1/accounts:sendVerificationCode", Qv(vv, zv))
              }(vv, {
                phoneNumber: ev.phoneNumber,
                recaptchaToken: Sv
              });
              return zv
            }
          } finally {
            Pv._reset()
          }
        }
        async function vS(vv, zv) {
          await iP((0, hv.J)(vv), zv)
        }
        class zS {
          constructor(vv) {
            this.providerId = zS.PROVIDER_ID, this.auth = Rz(vv)
          }
          verifyPhoneNumber(vv, zv) {
            return uh(this.auth, vv, (0, hv.J)(zv))
          }
          static credential(vv, zv) {
            return rz._fromVerification(vv, zv)
          }
          static credentialFromResult(vv) {
            const zv = vv;
            return zS.credentialFromTaggedObject(zv)
          }
          static credentialFromError(vv) {
            return zS.credentialFromTaggedObject(vv.customData || {})
          }
          static credentialFromTaggedObject(vv) {
            let {
              _tokenResponse: zv
            } = vv;
            if (!zv) return null;
            const {
              phoneNumber: Pv,
              temporaryProof: hv
            } = zv;
            return Pv && hv ? rz._fromTokenResponse(Pv, hv) : null
          }
        }

        function PS(vv, zv) {
          return zv ? ez(zv) : (nv(vv._popupRedirectResolver, vv, "argument-error"), vv._popupRedirectResolver)
        }
        zS.PROVIDER_ID = "phone", zS.PHONE_SIGN_IN_METHOD = "phone";
        class hS extends Zz {
          constructor(vv) {
            super("custom", "custom"), this.params = vv
          }
          _getIdTokenResponse(vv) {
            return Ez(vv, this._buildIdpRequest())
          }
          _linkToIdToken(vv, zv) {
            return Ez(vv, this._buildIdpRequest(zv))
          }
          _getReauthenticationResolver(vv) {
            return Ez(vv, this._buildIdpRequest())
          }
          _buildIdpRequest(vv) {
            const zv = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return vv && (zv.idToken = vv), zv
          }
        }

        function SS(vv) {
          return mP(vv.auth, new hS(vv), vv.bypassAuthState)
        }

        function eS(vv) {
          const {
            auth: zv,
            user: Pv
          } = vv;
          return nv(Pv, zv, "internal-error"), GP(Pv, new hS(vv), vv.bypassAuthState)
        }
        async function gS(vv) {
          const {
            auth: zv,
            user: Pv
          } = vv;
          return nv(Pv, zv, "internal-error"), iP(Pv, new hS(vv), vv.bypassAuthState)
        }
        class pS {
          constructor(vv, zv, Pv, hv) {
            let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = vv, this.resolver = Pv, this.user = hv, this.bypassAuthState = Sv, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(zv) ? zv : [zv]
          }
          execute() {
            return new Promise((async (vv, zv) => {
              this.pendingPromise = {
                resolve: vv,
                reject: zv
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (Pv) {
                this.reject(Pv)
              }
            }))
          }
          async onAuthEvent(vv) {
            const {
              urlResponse: zv,
              sessionId: Pv,
              postBody: hv,
              tenantId: Sv,
              error: ev,
              type: gv
            } = vv;
            if (ev) return void this.reject(ev);
            const pv = {
              auth: this.auth,
              requestUri: zv,
              sessionId: Pv,
              tenantId: Sv || void 0,
              postBody: hv || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(gv)(pv))
            } catch (dv) {
              this.reject(dv)
            }
          }
          onError(vv) {
            this.reject(vv)
          }
          getIdpTask(vv) {
            switch (vv) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return SS;
              case "linkViaPopup":
              case "linkViaRedirect":
                return gS;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return eS;
              default:
                mv(this.auth, "internal-error")
            }
          }
          resolve(vv) {
            Dv(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(vv), this.unregisterAndCleanUp()
          }
          reject(vv) {
            Dv(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(vv), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const dS = new Rv(2e3, 1e4);
        async function NS(vv, zv, Pv) {
          const hv = Rz(vv);
          Fv(vv, zv, vP);
          const Sv = PS(hv, Pv);
          return new WS(hv, "signInViaPopup", zv, Sv).executeNotNull()
        }
        async function lS(vv, zv, Pv) {
          const Sv = (0, hv.J)(vv);
          Fv(Sv.auth, zv, vP);
          const ev = PS(Sv.auth, Pv);
          return new WS(Sv.auth, "reauthViaPopup", zv, ev, Sv).executeNotNull()
        }
        async function TS(vv, zv, Pv) {
          const Sv = (0, hv.J)(vv);
          Fv(Sv.auth, zv, vP);
          const ev = PS(Sv.auth, Pv);
          return new WS(Sv.auth, "linkViaPopup", zv, ev, Sv).executeNotNull()
        }
        class WS extends pS {
          constructor(vv, zv, Pv, hv, Sv) {
            super(vv, zv, hv, Sv), this.provider = Pv, this.authWindow = null, this.pollId = null, WS.currentPopupAction && WS.currentPopupAction.cancel(), WS.currentPopupAction = this
          }
          async executeNotNull() {
            const vv = await this.execute();
            return nv(vv, this.auth, "internal-error"), vv
          }
          async onExecution() {
            Dv(1 === this.filter.length, "Popup operations only handle one event");
            const vv = Fh();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], vv), this.authWindow.associatedEvent = vv, this.resolver._originValidation(this.auth).catch((vv => {
              this.reject(vv)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (vv => {
              vv || this.reject(jv(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var vv;
            return (null === (vv = this.authWindow) || void 0 === vv ? void 0 : vv.associatedEvent) || null
          }
          cancel() {
            this.reject(jv(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, WS.currentPopupAction = null
          }
          pollUserCancellation() {
            const vv = () => {
              var zv, Pv;
              (null === (Pv = null === (zv = this.authWindow) || void 0 === zv ? void 0 : zv.window) || void 0 === Pv ? void 0 : Pv.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(jv(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(vv, dS.get())
            };
            vv()
          }
        }
        WS.currentPopupAction = null;
        const wS = "pendingRedirect",
          aS = new Map;
        class sS extends pS {
          constructor(vv, zv) {
            super(vv, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], zv, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let vv = aS.get(this.auth._key());
            if (!vv) {
              try {
                const zv = await async function(vv, zv) {
                  const Pv = GS(zv),
                    hv = cS(vv);
                  if (!await hv._isAvailable()) return !1;
                  const Sv = "true" === await hv._get(Pv);
                  return await hv._remove(Pv), Sv
                }(this.resolver, this.auth) ? await super.execute() : null;
                vv = () => Promise.resolve(zv)
              } catch (zv) {
                vv = () => Promise.reject(zv)
              }
              aS.set(this.auth._key(), vv)
            }
            return this.bypassAuthState || aS.set(this.auth._key(), (() => Promise.resolve(null))), vv()
          }
          async onAuthEvent(vv) {
            if ("signInViaRedirect" === vv.type) return super.onAuthEvent(vv);
            if ("unknown" !== vv.type) {
              if (vv.eventId) {
                const zv = await this.auth._redirectUserForId(vv.eventId);
                if (zv) return this.user = zv, super.onAuthEvent(vv);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function CS(vv, zv) {
          return cS(vv)._set(GS(zv), "true")
        }

        function iS(vv, zv) {
          aS.set(vv._key(), zv)
        }

        function cS(vv) {
          return ez(vv._redirectPersistence)
        }

        function GS(vv) {
          return dz(wS, vv.config.apiKey, vv.name)
        }

        function mS(vv, zv, Pv) {
          return async function(vv, zv, Pv) {
            const hv = Rz(vv);
            Fv(vv, zv, vP), await hv._initializationPromise;
            const Sv = PS(hv, Pv);
            return await CS(Sv, hv), Sv._openRedirect(hv, zv, "signInViaRedirect")
          }(vv, zv, Pv)
        }

        function jS(vv, zv, Pv) {
          return async function(vv, zv, Pv) {
            const Sv = (0, hv.J)(vv);
            Fv(Sv.auth, zv, vP), await Sv.auth._initializationPromise;
            const ev = PS(Sv.auth, Pv);
            await CS(ev, Sv.auth);
            const gv = await nS(Sv);
            return ev._openRedirect(Sv.auth, zv, "reauthViaRedirect", gv)
          }(vv, zv, Pv)
        }

        function fS(vv, zv, Pv) {
          return async function(vv, zv, Pv) {
            const Sv = (0, hv.J)(vv);
            Fv(Sv.auth, zv, vP), await Sv.auth._initializationPromise;
            const ev = PS(Sv.auth, Pv);
            await cP(!1, Sv, zv.providerId), await CS(ev, Sv.auth);
            const gv = await nS(Sv);
            return ev._openRedirect(Sv.auth, zv, "linkViaRedirect", gv)
          }(vv, zv, Pv)
        }
        async function FS(vv, zv) {
          return await Rz(vv)._initializationPromise, YS(vv, zv, !1)
        }
        async function YS(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const hv = Rz(vv),
            Sv = PS(hv, zv),
            ev = new sS(hv, Sv, Pv),
            gv = await ev.execute();
          return gv && !Pv && (delete gv.user._redirectEventId, await hv._persistUserIfCurrent(gv.user), await hv._setRedirectUser(null, zv)), gv
        }
        async function nS(vv) {
          const zv = Fh(`${vv.uid}:::`);
          return vv._redirectEventId = zv, await vv.auth._setRedirectUser(vv), await vv.auth._persistUserIfCurrent(vv), zv
        }
        class OS {
          constructor(vv) {
            this.auth = vv, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(vv) {
            this.consumers.add(vv), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, vv) && (this.sendToConsumer(this.queuedRedirectEvent, vv), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(vv) {
            this.consumers.delete(vv)
          }
          onEvent(vv) {
            if (this.hasEventBeenHandled(vv)) return !1;
            let zv = !1;
            return this.consumers.forEach((Pv => {
              this.isEventForConsumer(vv, Pv) && (zv = !0, this.sendToConsumer(vv, Pv), this.saveEventToCache(vv))
            })), this.hasHandledPotentialRedirect || ! function(vv) {
              switch (vv.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return KS(vv);
                default:
                  return !1
              }
            }(vv) || (this.hasHandledPotentialRedirect = !0, zv || (this.queuedRedirectEvent = vv, zv = !0)), zv
          }
          sendToConsumer(vv, zv) {
            var Pv;
            if (vv.error && !KS(vv)) {
              const hv = (null === (Pv = vv.error.code) || void 0 === Pv ? void 0 : Pv.split("auth/")[1]) || "internal-error";
              zv.onError(jv(this.auth, hv))
            } else zv.onAuthEvent(vv)
          }
          isEventForConsumer(vv, zv) {
            const Pv = null === zv.eventId || !!vv.eventId && vv.eventId === zv.eventId;
            return zv.filter.includes(vv.type) && Pv
          }
          hasEventBeenHandled(vv) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(DS(vv))
          }
          saveEventToCache(vv) {
            this.cachedEventUids.add(DS(vv)), this.lastProcessedEventTime = Date.now()
          }
        }

        function DS(vv) {
          return [vv.type, vv.eventId, vv.sessionId, vv.tenantId].filter((vv => vv)).join("-")
        }

        function KS(vv) {
          let {
            type: zv,
            error: Pv
          } = vv;
          return "unknown" === zv && "auth/no-auth-event" === (null === Pv || void 0 === Pv ? void 0 : Pv.code)
        }
        const VS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          US = /^https?/;
        async function RS(vv) {
          if (vv.config.emulator) return;
          const {
            authorizedDomains: zv
          } = await async function(vv) {
            return Zv(vv, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(vv);
          for (const hv of zv) try {
            if (xS(hv)) return
          } catch (Pv) {}
          mv(vv, "unauthorized-domain")
        }

        function xS(vv) {
          const zv = Kv(),
            {
              protocol: Pv,
              hostname: hv
            } = new URL(zv);
          if (vv.startsWith("chrome-extension://")) {
            const Sv = new URL(vv);
            return "" === Sv.hostname && "" === hv ? "chrome-extension:" === Pv && vv.replace("chrome-extension://", "") === zv.replace("chrome-extension://", "") : "chrome-extension:" === Pv && Sv.hostname === hv
          }
          if (!US.test(Pv)) return !1;
          if (VS.test(vv)) return hv === vv;
          const Sv = vv.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Sv + "|" + Sv + ")$", "i").test(hv)
        }
        const tS = new Rv(3e4, 6e4);

        function qS() {
          const vv = nh().___jsl;
          if (null === vv || void 0 === vv ? void 0 : vv.H)
            for (const zv of Object.keys(vv.H))
              if (vv.H[zv].r = vv.H[zv].r || [], vv.H[zv].L = vv.H[zv].L || [], vv.H[zv].r = [...vv.H[zv].L], vv.CP)
                for (let Pv = 0; Pv < vv.CP.length; Pv++) vv.CP[Pv] = null
        }
        let IS = null;

        function QS(vv) {
          return IS = IS || function(vv) {
            return new Promise(((zv, Pv) => {
              var hv, Sv, ev;

              function gv() {
                qS(), gapi.load("gapi.iframes", {
                  callback: () => {
                    zv(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    qS(), Pv(jv(vv, "network-request-failed"))
                  },
                  timeout: tS.get()
                })
              }
              if (null === (Sv = null === (hv = nh().gapi) || void 0 === hv ? void 0 : hv.iframes) || void 0 === Sv ? void 0 : Sv.Iframe) zv(gapi.iframes.getContext());
              else {
                if (!(null === (ev = nh().gapi) || void 0 === ev ? void 0 : ev.load)) {
                  const zv = Oz("iframefcb");
                  return nh()[zv] = () => {
                    gapi.load ? gv() : Pv(jv(vv, "network-request-failed"))
                  }, nz(`https://apis.google.com/js/api.js?onload=${zv}`).catch((vv => Pv(vv)))
                }
                gv()
              }
            })).catch((vv => {
              throw IS = null, vv
            }))
          }(vv), IS
        }
        const ZS = new Rv(5e3, 15e3),
          AS = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          LS = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function HS(vv) {
          const zv = vv.config;
          nv(zv.authDomain, vv, "auth-domain-config-required");
          const Pv = zv.emulator ? xv(zv, "emulator/auth/iframe") : `https://${vv.config.authDomain}/__/auth/iframe`,
            ev = {
              apiKey: zv.apiKey,
              appName: vv.name,
              v: Sv.g
            },
            gv = LS.get(vv.config.apiHost);
          gv && (ev.eid = gv);
          const pv = vv._getFrameworks();
          return pv.length && (ev.fw = pv.join(",")), `${Pv}?${(0,hv.hb)(ev).slice(1)}`
        }
        const MS = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class yS {
          constructor(vv) {
            this.window = vv, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (vv) {}
          }
        }

        function BS(vv, zv, Pv) {
          let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const gv = Math.max((window.screen.availHeight - ev) / 2, 0).toString(),
            pv = Math.max((window.screen.availWidth - Sv) / 2, 0).toString();
          let dv = "";
          const Nv = Object.assign(Object.assign({}, MS), {
              width: Sv.toString(),
              height: ev.toString(),
              top: gv,
              left: pv
            }),
            lv = (0, hv.L)().toLowerCase();
          Pv && (dv = wz(lv) ? "_blank" : Pv), Tz(lv) && (zv = zv || "http://localhost", Nv.scrollbars = "yes");
          const Tv = Object.entries(Nv).reduce(((vv, zv) => {
            let [Pv, hv] = zv;
            return `${vv}${Pv}=${hv},`
          }), "");
          if (function() {
              var vv;
              return cz(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)()) && !!(null === (vv = window.navigator) || void 0 === vv ? void 0 : vv.standalone)
            }(lv) && "_self" !== dv) return function(vv, zv) {
            const Pv = document.createElement("a");
            Pv.href = vv, Pv.target = zv;
            const hv = document.createEvent("MouseEvent");
            hv.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), Pv.dispatchEvent(hv)
          }(zv || "", dv), new yS(null);
          const Wv = window.open(zv || "", dv, Tv);
          nv(Wv, vv, "popup-blocked");
          try {
            Wv.focus()
          } catch (wv) {}
          return new yS(Wv)
        }
        const JS = "__/auth/handler",
          ES = "emulator/auth/handler",
          oS = encodeURIComponent("fac");
        async function bS(vv, zv, Pv, ev, gv, pv) {
            nv(vv.config.authDomain, vv, "auth-domain-config-required"), nv(vv.config.apiKey, vv, "invalid-api-key");
            const dv = {
              apiKey: vv.config.apiKey,
              appName: vv.name,
              authType: Pv,
              redirectUrl: ev,
              v: Sv.g,
              eventId: gv
            };
            if (zv instanceof vP) {
              zv.setDefaultLanguage(vv.languageCode), dv.providerId = zv.providerId || "", (0, hv.T)(zv.getCustomParameters()) || (dv.customParameters = JSON.stringify(zv.getCustomParameters()));
              for (const [vv, zv] of Object.entries(pv || {})) dv[vv] = zv
            }
            if (zv instanceof zP) {
              const vv = zv.getScopes().filter((vv => "" !== vv));
              vv.length > 0 && (dv.scopes = vv.join(","))
            }
            vv.tenantId && (dv.tid = vv.tenantId);
            const Nv = dv;
            for (const hv of Object.keys(Nv)) void 0 === Nv[hv] && delete Nv[hv];
            const lv = await vv._getAppCheckToken(),
              Tv = lv ? `#${oS}=${encodeURIComponent(lv)}` : "";
            return `${function(vv){let{config:zv}=vv;if(!zv.emulator)return`
            https: //${zv.authDomain}/${JS}`;return xv(zv,ES)}(vv)}?${(0,hv.hb)(Nv).slice(1)}${Tv}`}const rS="webStorageSupport";const kS=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jh,this._completeRedirectFn=YS,this._overrideRedirectResult=iS}async _openPopup(vv,zv,Pv,hv){var Sv;Dv(null===(Sv=this.eventManagers[vv._key()])||void 0===Sv?void 0:Sv.manager,"_initialize() not called before _openPopup()");return BS(vv,await bS(vv,zv,Pv,Kv(),hv),Fh())}async _openRedirect(vv,zv,Pv,hv){await this._originValidation(vv);return function(vv){nh().location.href=vv}(await bS(vv,zv,Pv,Kv(),hv)),new Promise((()=>{}))}_initialize(vv){const zv=vv._key();if(this.eventManagers[zv]){const{manager:vv,promise:Pv}=this.eventManagers[zv];return vv?Promise.resolve(vv):(Dv(Pv,"If manager is not set, promise should be"),Pv)}const Pv=this.initAndGetManager(vv);return this.eventManagers[zv]={promise:Pv},Pv.catch((()=>{delete this.eventManagers[zv]})),Pv}async initAndGetManager(vv){const zv=await async function(vv){const zv=await QS(vv),Pv=nh().gapi;return nv(Pv,vv,"internal-error"),zv.open({where:document.body,url:HS(vv),messageHandlersFilter:Pv.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AS,dontclear:!0},(zv=>new Promise((async(Pv,hv)=>{await zv.restyle({setHideOnLeave:!1});const Sv=jv(vv,"network-request-failed"),ev=nh().setTimeout((()=>{hv(Sv)}),ZS.get());function gv(){nh().clearTimeout(ev),Pv(zv)}zv.ping(gv).then(gv,(()=>{hv(Sv)}))}))))}(vv),Pv=new OS(vv);return zv.register("authEvent",(zv=>{nv(null===zv||void 0===zv?void 0:zv.authEvent,vv,"invalid-auth-event");return{status:Pv.onEvent(zv.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[vv._key()]={manager:Pv},this.iframes[vv._key()]=zv,Pv}_isIframeWebStorageSupported(vv,zv){this.iframes[vv._key()].send(rS,{type:rS},(Pv=>{var hv;const Sv=null===(hv=null===Pv||void 0===Pv?void 0:Pv[0])||void 0===hv?void 0:hv[rS];void 0!==Sv&&zv(!!Sv),mv(vv,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(vv){const zv=vv._key();return this.originValidationPromises[zv]||(this.originValidationPromises[zv]=RS(vv)),this.originValidationPromises[zv]}get _shouldInitProactively(){return Gz()||Wz()||cz()}};class XS{constructor(vv){this.factorId=vv}_process(vv,zv,Pv){switch(zv.type){case"enroll":return this._finalizeEnroll(vv,zv.credential,Pv);case"signin":return this._finalizeSignIn(vv,zv.credential);default:return Ov("unexpected MultiFactorSessionType")}}}class uS extends XS{constructor(vv){super("phone"),this.credential=vv}static _fromCredential(vv){return new uS(vv)}_finalizeEnroll(vv,zv,Pv){return function(vv,zv){return Zv(vv,"POST","/v2/accounts/mfaEnrollment:finalize",Qv(vv,zv))}(vv,{idToken:zv,displayName:Pv,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(vv,zv){return function(vv,zv){return Zv(vv,"POST","/v2/accounts/mfaSignIn:finalize",Qv(vv,zv))}(vv,{mfaPendingCredential:zv,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ve{constructor(){}static assertion(vv){return uS._fromCredential(vv)}}ve.FACTOR_ID="phone";class ze{static assertionForEnrollment(vv,zv){return Pe._fromSecret(vv,zv)}static assertionForSignIn(vv,zv){return Pe._fromEnrollmentId(vv,zv)}static async generateSecret(vv){const zv=vv;nv("undefined"!==typeof zv.auth,"internal-error");const Pv=await(hv=zv.auth,Sv={idToken:zv.credential,totpEnrollmentInfo:{}},Zv(hv,"POST","/v2/accounts/mfaEnrollment:start",Qv(hv,Sv)));var hv,Sv;return he._fromStartTotpMfaEnrollmentResponse(Pv,zv.auth)}}ze.FACTOR_ID="totp";class Pe extends XS{constructor(vv,zv,Pv){super("totp"),this.otp=vv,this.enrollmentId=zv,this.secret=Pv}static _fromSecret(vv,zv){return new Pe(zv,void 0,vv)}static _fromEnrollmentId(vv,zv){return new Pe(zv,vv)}async _finalizeEnroll(vv,zv,Pv){return nv("undefined"!==typeof this.secret,vv,"argument-error"),function(vv,zv){return Zv(vv,"POST","/v2/accounts/mfaEnrollment:finalize",Qv(vv,zv))}(vv,{idToken:zv,displayName:Pv,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(vv,zv){nv(void 0!==this.enrollmentId&&void 0!==this.otp,vv,"argument-error");const Pv={verificationCode:this.otp};return function(vv,zv){return Zv(vv,"POST","/v2/accounts/mfaSignIn:finalize",Qv(vv,zv))}(vv,{mfaPendingCredential:zv,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:Pv})}}class he{constructor(vv,zv,Pv,hv,Sv,ev,gv){this.sessionInfo=ev,this.auth=gv,this.secretKey=vv,this.hashingAlgorithm=zv,this.codeLength=Pv,this.codeIntervalSeconds=hv,this.enrollmentCompletionDeadline=Sv}static _fromStartTotpMfaEnrollmentResponse(vv,zv){return new he(vv.totpSessionInfo.sharedSecretKey,vv.totpSessionInfo.hashingAlgorithm,vv.totpSessionInfo.verificationCodeLength,vv.totpSessionInfo.periodSec,new Date(vv.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),vv.totpSessionInfo.sessionInfo,zv)}_makeTotpVerificationInfo(vv){return{sessionInfo:this.sessionInfo,verificationCode:vv}}generateQrCodeUrl(vv,zv){var Pv;let hv=!1;return(Se(vv)||Se(zv))&&(hv=!0),hv&&(Se(vv)&&(vv=(null===(Pv=this.auth.currentUser)||void 0===Pv?void 0:Pv.email)||"unknownuser"),Se(zv)&&(zv=this.auth.name)),`otpauth://totp/${zv}:${vv}?secret=${this.secretKey}&issuer=${zv}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Se(vv){return"undefined"===typeof vv||0===(null===vv||void 0===vv?void 0:vv.length)}var ee="@firebase/auth",ge="0.23.2";class pe{constructor(vv){this.auth=vv,this.internalListeners=new Map}getUid(){var vv;return this.assertAuthConfigured(),(null===(vv=this.auth.currentUser)||void 0===vv?void 0:vv.uid)||null}async getToken(vv){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(vv)}}addAuthTokenListener(vv){if(this.assertAuthConfigured(),this.internalListeners.has(vv))return;const zv=this.auth.onIdTokenChanged((zv=>{vv((null===zv||void 0===zv?void 0:zv.stsTokenManager.accessToken)||null)}));this.internalListeners.set(vv,zv),this.updateProactiveRefresh()}removeAuthTokenListener(vv){this.assertAuthConfigured();const zv=this.internalListeners.get(vv);zv&&(this.internalListeners.delete(vv),zv(),this.updateProactiveRefresh())}assertAuthConfigured(){nv(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const de=(0,hv.H)("authIdTokenMaxAge")||300;let Ne=null;const le=vv=>async zv=>{const Pv=zv&&await zv.getIdTokenResult(),hv=Pv&&((new Date).getTime()-Date.parse(Pv.issuedAtTime))/1e3;if(hv&&hv>de)return;const Sv=null===Pv||void 0===Pv?void 0:Pv.token;Ne!==Sv&&(Ne=Sv,await fetch(vv,{method:Sv?"POST":"DELETE",headers:Sv?{Authorization:`Bearer ${Sv}`}:{}}))};function Te(){let vv=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Sv.L)();const zv=(0,Sv.A)(vv,"auth");if(zv.isInitialized())return zv.getImmediate();const Pv=tz(vv,{popupRedirectResolver:kS,persistence:[Qh,Gh,jh]}),ev=(0,hv.H)("authTokenSyncURL");if(ev){const vv=le(ev);Sh(Pv,vv,(()=>vv(Pv.currentUser))),hh(Pv,(zv=>vv(zv)))}const gv=(0,hv.G)("auth");return gv&&qz(Pv,`http://${gv}`),Pv}var We;We="Browser",(0,Sv.D)(new pv.h("auth",((vv,zv)=>{let{options:Pv}=zv;const hv=vv.getProvider("app").getImmediate(),Sv=vv.getProvider("heartbeat"),ev=vv.getProvider("app-check-internal"),{apiKey:gv,authDomain:pv}=hv.options;nv(gv&&!gv.includes(":"),"invalid-api-key",{appName:hv.name});const dv={apiKey:gv,authDomain:pv,clientPlatform:We,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mz(We)},Nv=new Uz(hv,Sv,ev,dv);return function(vv,zv){const Pv=(null===zv||void 0===zv?void 0:zv.persistence)||[],hv=(Array.isArray(Pv)?Pv:[Pv]).map(ez);(null===zv||void 0===zv?void 0:zv.errorMap)&&vv._updateErrorMap(zv.errorMap),vv._initializeWithPersistence(hv,null===zv||void 0===zv?void 0:zv.popupRedirectResolver)}(Nv,Pv),Nv}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((vv,zv,Pv)=>{vv.getProvider("auth-internal").initialize()}))),(0,Sv.D)(new pv.h("auth-internal",(vv=>(vv=>new pe(vv))(Rz(vv.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Sv.S)(ee,ge,function(vv){switch(vv){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(We)),(0,Sv.S)(ee,ge,"esm2017")}};Object.freeze(modules);for(const vv in modules)Object.freeze(modules[vv]);