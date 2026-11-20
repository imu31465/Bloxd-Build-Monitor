/*! For license information please see halsg.260.2088a8d7.chunk.js.LICENSE.txt */
export const id = 260;
export const ids = [260];
export const modules = {
    39989: (bb, ub, hb) => {
        hb.r(ub), hb.d(ub, {
          ActionCodeOperation: () => wb,
          ActionCodeURL: () => cu,
          AuthCredential: () => Mu,
          AuthErrorCodes: () => Ab,
          EmailAuthCredential: () => Vu,
          EmailAuthProvider: () => Ru,
          FacebookAuthProvider: () => Bh,
          FactorId: () => Yb,
          GithubAuthProvider: () => Gh,
          GoogleAuthProvider: () => Oh,
          OAuthCredential: () => fu,
          OAuthProvider: () => hh,
          OperationType: () => Hb,
          PhoneAuthCredential: () => Tu,
          PhoneAuthProvider: () => uO,
          PhoneMultiFactorGenerator: () => bG,
          ProviderId: () => Sb,
          RecaptchaVerifier: () => fB,
          SAMLAuthProvider: () => Lh,
          SignInMethod: () => ab,
          TotpMultiFactorGenerator: () => uG,
          TotpSecret: () => BG,
          TwitterAuthProvider: () => Yh,
          applyActionCode: () => vh,
          beforeAuthStateChanged: () => OB,
          browserLocalPersistence: () => KB,
          browserPopupRedirectResolver: () => cO,
          browserSessionPersistence: () => CB,
          checkActionCode: () => th,
          confirmPasswordReset: () => ih,
          connectAuthEmulator: () => eu,
          createUserWithEmailAndPassword: () => eh,
          debugErrorMap: () => Xb,
          deleteUser: () => SB,
          fetchSignInMethodsForEmail: () => Ih,
          getAdditionalUserInfo: () => bB,
          getAuth: () => HG,
          getIdToken: () => Vb,
          getIdTokenResult: () => Fb,
          getMultiFactorResolver: () => wB,
          getRedirectResult: () => rO,
          inMemoryPersistence: () => Lu,
          indexedDBLocalPersistence: () => sB,
          initializeAuth: () => Ju,
          initializeRecaptchaConfig: () => hB,
          isSignInWithEmailLink: () => Mh,
          linkWithCredential: () => dh,
          linkWithPhoneNumber: () => cB,
          linkWithPopup: () => HO,
          linkWithRedirect: () => dO,
          multiFactor: () => pB,
          onAuthStateChanged: () => GB,
          onIdTokenChanged: () => BB,
          parseActionCodeURL: () => Qu,
          prodErrorMap: () => pb,
          reauthenticateWithCredential: () => rh,
          reauthenticateWithPhoneNumber: () => QB,
          reauthenticateWithPopup: () => aO,
          reauthenticateWithRedirect: () => CO,
          reload: () => bu,
          sendEmailVerification: () => Ph,
          sendPasswordResetEmail: () => gh,
          sendSignInLinkToEmail: () => sh,
          setPersistence: () => uB,
          signInAnonymously: () => wh,
          signInWithCredential: () => Ch,
          signInWithCustomToken: () => jh,
          signInWithEmailAndPassword: () => Nh,
          signInWithEmailLink: () => mh,
          signInWithPhoneNumber: () => TB,
          signInWithPopup: () => SO,
          signInWithRedirect: () => WO,
          signOut: () => YB,
          unlink: () => oh,
          updateCurrentUser: () => LB,
          updateEmail: () => yh,
          updatePassword: () => Vh,
          updatePhoneNumber: () => bO,
          updateProfile: () => Eh,
          useDeviceLanguage: () => UB,
          verifyBeforeUpdateEmail: () => qh,
          verifyPasswordResetCode: () => Jh
        });
        var Bb = hb(39976),
          Ob = hb(39959);

        function Gb(bb, ub) {
          var hb = {};
          for (var Bb in bb) Object.prototype.hasOwnProperty.call(bb, Bb) && ub.indexOf(Bb) < 0 && (hb[Bb] = bb[Bb]);
          if (null != bb && "function" === typeof Object.getOwnPropertySymbols) {
            var Ob = 0;
            for (Bb = Object.getOwnPropertySymbols(bb); Ob < Bb.length; Ob++) ub.indexOf(Bb[Ob]) < 0 && Object.prototype.propertyIsEnumerable.call(bb, Bb[Ob]) && (hb[Bb[Ob]] = bb[Bb[Ob]])
          }
          return hb
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Ub = hb(39983),
          Lb = hb(39967);
        const Yb = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Sb = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          ab = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Hb = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          wb = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Zb() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const Xb = function() {
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
          pb = Zb,
          ob = new Bb.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Ab = {
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
          lb = new Ub.i("@firebase/auth");

        function Kb(bb) {
          if (lb.logLevel <= Ub.e.ERROR) {
            for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
            lb.error(`Auth (${Ob.e}): ${bb}`, ...hb)
          }
        }

        function Wb(bb) {
          for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
          throw jb(bb, ...hb)
        }

        function Cb(bb) {
          for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
          return jb(bb, ...hb)
        }

        function db(bb, ub, hb) {
          const Ob = Object.assign(Object.assign({}, pb()), {
            [ub]: hb
          });
          return new Bb.h("auth", "Firebase", Ob).create(ub, {
            appName: bb.name
          })
        }

        function rb(bb, ub, hb) {
          if (!(ub instanceof hb)) throw hb.name !== ub.constructor.name && Wb(bb, "argument-error"), db(bb, "argument-error", `Type of ${ub.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function jb(bb) {
          for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
          if ("string" !== typeof bb) {
            const ub = hb[0],
              Bb = [...hb.slice(1)];
            return Bb[0] && (Bb[0].appName = bb.name), bb._errorFactory.create(ub, ...Bb)
          }
          return ob.create(bb, ...hb)
        }

        function nb(bb, ub) {
          if (!bb) {
            for (var hb = arguments.length, Bb = new Array(hb > 2 ? hb - 2 : 0), Ob = 2; Ob < hb; Ob++) Bb[Ob - 2] = arguments[Ob];
            throw jb(ub, ...Bb)
          }
        }

        function Db(bb) {
          const ub = "INTERNAL ASSERTION FAILED: " + bb;
          throw Kb(ub), new Error(ub)
        }

        function xb(bb, ub) {
          bb || Db(ub)
        }

        function zb() {
          var bb;
          return "undefined" !== typeof self && (null === (bb = self.location) || void 0 === bb ? void 0 : bb.href) || ""
        }

        function gb() {
          return "http:" === ib() || "https:" === ib()
        }

        function ib() {
          var bb;
          return "undefined" !== typeof self && (null === (bb = self.location) || void 0 === bb ? void 0 : bb.protocol) || null
        }
        class vb {
          constructor(bb, ub) {
            this.shortDelay = bb, this.longDelay = ub, xb(ub > bb, "Short delay should be less than long delay!"), this.isMobile = (0, Bb.Y)() || (0, Bb.ab)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (gb() || (0, Bb.P)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function tb(bb, ub) {
          xb(bb.emulator, "Emulator should always be set here");
          const {
            url: hb
          } = bb.emulator;
          return ub ? `${hb}${ub.startsWith("/")?ub.slice(1):ub}` : hb
        }
        class Jb {
          static initialize(bb, ub, hb) {
            this.fetchImpl = bb, ub && (this.headersImpl = ub), hb && (this.responseImpl = hb)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Db("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Db("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Db("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const eb = {
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
          Nb = new vb(3e4, 6e4);

        function sb(bb, ub) {
          return bb.tenantId && !ub.tenantId ? Object.assign(Object.assign({}, ub), {
            tenantId: bb.tenantId
          }) : ub
        }
        async function Mb(bb, ub, hb, Ob) {
          return mb(bb, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Gb = {},
              Ub = {};
            Ob && ("GET" === ub ? Ub = Ob : Gb = {
              body: JSON.stringify(Ob)
            });
            const Lb = (0, Bb.fb)(Object.assign({
                key: bb.config.apiKey
              }, Ub)).slice(1),
              Yb = await bb._getAdditionalHeaders();
            return Yb["Content-Type"] = "application/json", bb.languageCode && (Yb["X-Firebase-Locale"] = bb.languageCode), Jb.fetch()(Pb(bb, bb.config.apiHost, hb, Lb), Object.assign({
              method: ub,
              headers: Yb,
              referrerPolicy: "no-referrer"
            }, Gb))
          }))
        }
        async function mb(bb, ub, hb) {
          bb._canInitEmulator = !1;
          const Ob = Object.assign(Object.assign({}, eb), ub);
          try {
            const ub = new qb(bb),
              Bb = await Promise.race([hb(), ub.promise]);
            ub.clearNetworkTimeout();
            const Gb = await Bb.json();
            if ("needConfirmation" in Gb) throw Eb(bb, "account-exists-with-different-credential", Gb);
            if (Bb.ok && !("errorMessage" in Gb)) return Gb;
            {
              const ub = Bb.ok ? Gb.errorMessage : Gb.error.message,
                [hb, Ub] = ub.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === hb) throw Eb(bb, "credential-already-in-use", Gb);
              if ("EMAIL_EXISTS" === hb) throw Eb(bb, "email-already-in-use", Gb);
              if ("USER_DISABLED" === hb) throw Eb(bb, "user-disabled", Gb);
              const Lb = Ob[hb] || hb.toLowerCase().replace(/[_\s]+/g, "-");
              if (Ub) throw db(bb, Lb, Ub);
              Wb(bb, Lb)
            }
          } catch (Gb) {
            if (Gb instanceof Bb.i) throw Gb;
            Wb(bb, "network-request-failed", {
              message: String(Gb)
            })
          }
        }
        async function Ib(bb, ub, hb, Bb) {
          let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Gb = await Mb(bb, ub, hb, Bb, Ob);
          return "mfaPendingCredential" in Gb && Wb(bb, "multi-factor-auth-required", {
            _serverResponse: Gb
          }), Gb
        }

        function Pb(bb, ub, hb, Bb) {
          const Ob = `${ub}${hb}?${Bb}`;
          return bb.config.emulator ? tb(bb.config, Ob) : `${bb.config.apiScheme}://${Ob}`
        }
        class qb {
          constructor(bb) {
            this.auth = bb, this.timer = null, this.promise = new Promise(((bb, ub) => {
              this.timer = setTimeout((() => ub(Cb(this.auth, "network-request-failed"))), Nb.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function Eb(bb, ub, hb) {
          const Bb = {
            appName: bb.name
          };
          hb.email && (Bb.email = hb.email), hb.phoneNumber && (Bb.phoneNumber = hb.phoneNumber);
          const Ob = Cb(bb, ub, Bb);
          return Ob.customData._tokenResponse = hb, Ob
        }

        function yb(bb) {
          if (bb) try {
            const ub = new Date(Number(bb));
            if (!isNaN(ub.getTime())) return ub.toUTCString()
          } catch (ub) {}
        }

        function Vb(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Bb.K)(bb).getIdToken(ub)
        }
        async function Fb(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const hb = (0, Bb.K)(bb),
            Ob = await hb.getIdToken(ub),
            Gb = kb(Ob);
          nb(Gb && Gb.exp && Gb.auth_time && Gb.iat, hb.auth, "internal-error");
          const Ub = "object" === typeof Gb.firebase ? Gb.firebase : void 0,
            Lb = null === Ub || void 0 === Ub ? void 0 : Ub.sign_in_provider;
          return {
            claims: Gb,
            token: Ob,
            authTime: yb(fb(Gb.auth_time)),
            issuedAtTime: yb(fb(Gb.iat)),
            expirationTime: yb(fb(Gb.exp)),
            signInProvider: Lb || null,
            signInSecondFactor: (null === Ub || void 0 === Ub ? void 0 : Ub.sign_in_second_factor) || null
          }
        }

        function fb(bb) {
          return 1e3 * Number(bb)
        }

        function kb(bb) {
          const [ub, hb, Ob] = bb.split(".");
          if (void 0 === ub || void 0 === hb || void 0 === Ob) return Kb("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const bb = (0, Bb.n)(hb);
            return bb ? JSON.parse(bb) : (Kb("Failed to decode base64 JWT payload"), null)
          } catch (Gb) {
            return Kb("Caught error parsing JWT payload as JSON", null === Gb || void 0 === Gb ? void 0 : Gb.toString()), null
          }
        }
        async function Tb(bb, ub) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return ub;
          try {
            return await ub
          } catch (hb) {
            throw hb instanceof Bb.i && function(bb) {
              let {
                code: ub
              } = bb;
              return "auth/user-disabled" === ub || "auth/user-token-expired" === ub
            }(hb) && bb.auth.currentUser === bb && await bb.auth.signOut(), hb
          }
        }
        class cb {
          constructor(bb) {
            this.user = bb, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(bb) {
            var ub;
            if (bb) {
              const bb = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), bb
            } {
              this.errorBackoff = 3e4;
              const bb = (null !== (ub = this.user.stsTokenManager.expirationTime) && void 0 !== ub ? ub : 0) - Date.now() - 3e5;
              return Math.max(0, bb)
            }
          }
          schedule() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const ub = this.getInterval(bb);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), ub)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (bb) {
              return void("auth/network-request-failed" === (null === bb || void 0 === bb ? void 0 : bb.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class Qb {
          constructor(bb, ub) {
            this.createdAt = bb, this.lastLoginAt = ub, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = yb(this.lastLoginAt), this.creationTime = yb(this.createdAt)
          }
          _copy(bb) {
            this.createdAt = bb.createdAt, this.lastLoginAt = bb.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function Rb(bb) {
          var ub;
          const hb = bb.auth,
            Bb = await bb.getIdToken(),
            Ob = await Tb(bb, async function(bb, ub) {
              return Mb(bb, "POST", "/v1/accounts:lookup", ub)
            }(hb, {
              idToken: Bb
            }));
          nb(null === Ob || void 0 === Ob ? void 0 : Ob.users.length, hb, "internal-error");
          const Ub = Ob.users[0];
          bb._notifyReloadListener(Ub);
          const Lb = (null === (ub = Ub.providerUserInfo) || void 0 === ub ? void 0 : ub.length) ? Ub.providerUserInfo.map((bb => {
            var {
              providerId: ub
            } = bb, hb = Gb(bb, ["providerId"]);
            return {
              providerId: ub,
              uid: hb.rawId || "",
              displayName: hb.displayName || null,
              email: hb.email || null,
              phoneNumber: hb.phoneNumber || null,
              photoURL: hb.photoUrl || null
            }
          })) : [];
          const Yb = (Sb = bb.providerData, ab = Lb, [...Sb.filter((bb => !ab.some((ub => ub.providerId === bb.providerId)))), ...ab]);
          var Sb, ab;
          const Hb = bb.isAnonymous,
            wb = !(bb.email && Ub.passwordHash) && !(null === Yb || void 0 === Yb ? void 0 : Yb.length),
            Zb = !!Hb && wb,
            Xb = {
              uid: Ub.localId,
              displayName: Ub.displayName || null,
              photoURL: Ub.photoUrl || null,
              email: Ub.email || null,
              emailVerified: Ub.emailVerified || !1,
              phoneNumber: Ub.phoneNumber || null,
              tenantId: Ub.tenantId || null,
              providerData: Yb,
              metadata: new Qb(Ub.createdAt, Ub.lastLoginAt),
              isAnonymous: Zb
            };
          Object.assign(bb, Xb)
        }
        async function bu(bb) {
          const ub = (0, Bb.K)(bb);
          await Rb(ub), await ub.auth._persistUserIfCurrent(ub), ub.auth._notifyListenersIfCurrent(ub)
        }
        class uu {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(bb) {
            nb(bb.idToken, "internal-error"), nb("undefined" !== typeof bb.idToken, "internal-error"), nb("undefined" !== typeof bb.refreshToken, "internal-error");
            const ub = "expiresIn" in bb && "undefined" !== typeof bb.expiresIn ? Number(bb.expiresIn) : function(bb) {
              const ub = kb(bb);
              return nb(ub, "internal-error"), nb("undefined" !== typeof ub.exp, "internal-error"), nb("undefined" !== typeof ub.iat, "internal-error"), Number(ub.exp) - Number(ub.iat)
            }(bb.idToken);
            this.updateTokensAndExpiration(bb.idToken, bb.refreshToken, ub)
          }
          async getToken(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return nb(!this.accessToken || this.refreshToken, bb, "user-token-expired"), ub || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(bb, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(bb, ub) {
            const {
              accessToken: hb,
              refreshToken: Ob,
              expiresIn: Gb
            } = await async function(bb, ub) {
              const hb = await mb(bb, {}, (async () => {
                const hb = (0, Bb.fb)({
                    grant_type: "refresh_token",
                    refresh_token: ub
                  }).slice(1),
                  {
                    tokenApiHost: Ob,
                    apiKey: Gb
                  } = bb.config,
                  Ub = Pb(bb, Ob, "/v1/token", `key=${Gb}`),
                  Lb = await bb._getAdditionalHeaders();
                return Lb["Content-Type"] = "application/x-www-form-urlencoded", Jb.fetch()(Ub, {
                  method: "POST",
                  headers: Lb,
                  body: hb
                })
              }));
              return {
                accessToken: hb.access_token,
                expiresIn: hb.expires_in,
                refreshToken: hb.refresh_token
              }
            }(bb, ub);
            this.updateTokensAndExpiration(hb, Ob, Number(Gb))
          }
          updateTokensAndExpiration(bb, ub, hb) {
            this.refreshToken = ub || null, this.accessToken = bb || null, this.expirationTime = Date.now() + 1e3 * hb
          }
          static fromJSON(bb, ub) {
            const {
              refreshToken: hb,
              accessToken: Bb,
              expirationTime: Ob
            } = ub, Gb = new uu;
            return hb && (nb("string" === typeof hb, "internal-error", {
              appName: bb
            }), Gb.refreshToken = hb), Bb && (nb("string" === typeof Bb, "internal-error", {
              appName: bb
            }), Gb.accessToken = Bb), Ob && (nb("number" === typeof Ob, "internal-error", {
              appName: bb
            }), Gb.expirationTime = Ob), Gb
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(bb) {
            this.accessToken = bb.accessToken, this.refreshToken = bb.refreshToken, this.expirationTime = bb.expirationTime
          }
          _clone() {
            return Object.assign(new uu, this.toJSON())
          }
          _performRefresh() {
            return Db("not implemented")
          }
        }

        function hu(bb, ub) {
          nb("string" === typeof bb || "undefined" === typeof bb, "internal-error", {
            appName: ub
          })
        }
        class Bu {
          constructor(bb) {
            var {
              uid: ub,
              auth: hb,
              stsTokenManager: Bb
            } = bb, Ob = Gb(bb, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new cb(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = ub, this.auth = hb, this.stsTokenManager = Bb, this.accessToken = Bb.accessToken, this.displayName = Ob.displayName || null, this.email = Ob.email || null, this.emailVerified = Ob.emailVerified || !1, this.phoneNumber = Ob.phoneNumber || null, this.photoURL = Ob.photoURL || null, this.isAnonymous = Ob.isAnonymous || !1, this.tenantId = Ob.tenantId || null, this.providerData = Ob.providerData ? [...Ob.providerData] : [], this.metadata = new Qb(Ob.createdAt || void 0, Ob.lastLoginAt || void 0)
          }
          async getIdToken(bb) {
            const ub = await Tb(this, this.stsTokenManager.getToken(this.auth, bb));
            return nb(ub, this.auth, "internal-error"), this.accessToken !== ub && (this.accessToken = ub, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), ub
          }
          getIdTokenResult(bb) {
            return Fb(this, bb)
          }
          reload() {
            return bu(this)
          }
          _assign(bb) {
            this !== bb && (nb(this.uid === bb.uid, this.auth, "internal-error"), this.displayName = bb.displayName, this.photoURL = bb.photoURL, this.email = bb.email, this.emailVerified = bb.emailVerified, this.phoneNumber = bb.phoneNumber, this.isAnonymous = bb.isAnonymous, this.tenantId = bb.tenantId, this.providerData = bb.providerData.map((bb => Object.assign({}, bb))), this.metadata._copy(bb.metadata), this.stsTokenManager._assign(bb.stsTokenManager))
          }
          _clone(bb) {
            const ub = new Bu(Object.assign(Object.assign({}, this), {
              auth: bb,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return ub.metadata._copy(this.metadata), ub
          }
          _onReload(bb) {
            nb(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = bb, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(bb) {
            this.reloadListener ? this.reloadListener(bb) : this.reloadUserInfo = bb
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              hb = !1;
            bb.idToken && bb.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(bb), hb = !0), ub && await Rb(this), await this.auth._persistUserIfCurrent(this), hb && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const bb = await this.getIdToken();
            return await Tb(this, async function(bb, ub) {
              return Mb(bb, "POST", "/v1/accounts:delete", ub)
            }(this.auth, {
              idToken: bb
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
              providerData: this.providerData.map((bb => Object.assign({}, bb))),
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
          static _fromJSON(bb, ub) {
            var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb;
            const ab = null !== (hb = ub.displayName) && void 0 !== hb ? hb : void 0,
              Hb = null !== (Bb = ub.email) && void 0 !== Bb ? Bb : void 0,
              wb = null !== (Ob = ub.phoneNumber) && void 0 !== Ob ? Ob : void 0,
              Zb = null !== (Gb = ub.photoURL) && void 0 !== Gb ? Gb : void 0,
              Xb = null !== (Ub = ub.tenantId) && void 0 !== Ub ? Ub : void 0,
              pb = null !== (Lb = ub._redirectEventId) && void 0 !== Lb ? Lb : void 0,
              ob = null !== (Yb = ub.createdAt) && void 0 !== Yb ? Yb : void 0,
              Ab = null !== (Sb = ub.lastLoginAt) && void 0 !== Sb ? Sb : void 0,
              {
                uid: lb,
                emailVerified: Kb,
                isAnonymous: Wb,
                providerData: Cb,
                stsTokenManager: db
              } = ub;
            nb(lb && db, bb, "internal-error");
            const rb = uu.fromJSON(this.name, db);
            nb("string" === typeof lb, bb, "internal-error"), hu(ab, bb.name), hu(Hb, bb.name), nb("boolean" === typeof Kb, bb, "internal-error"), nb("boolean" === typeof Wb, bb, "internal-error"), hu(wb, bb.name), hu(Zb, bb.name), hu(Xb, bb.name), hu(pb, bb.name), hu(ob, bb.name), hu(Ab, bb.name);
            const jb = new Bu({
              uid: lb,
              auth: bb,
              email: Hb,
              emailVerified: Kb,
              displayName: ab,
              isAnonymous: Wb,
              photoURL: Zb,
              phoneNumber: wb,
              tenantId: Xb,
              stsTokenManager: rb,
              createdAt: ob,
              lastLoginAt: Ab
            });
            return Cb && Array.isArray(Cb) && (jb.providerData = Cb.map((bb => Object.assign({}, bb)))), pb && (jb._redirectEventId = pb), jb
          }
          static async _fromIdTokenResponse(bb, ub) {
            let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Bb = new uu;
            Bb.updateFromServerResponse(ub);
            const Ob = new Bu({
              uid: ub.localId,
              auth: bb,
              stsTokenManager: Bb,
              isAnonymous: hb
            });
            return await Rb(Ob), Ob
          }
        }
        const Ou = new Map;

        function Gu(bb) {
          xb(bb instanceof Function, "Expected a class definition");
          let ub = Ou.get(bb);
          return ub ? (xb(ub instanceof bb, "Instance stored in cache mismatched with class"), ub) : (ub = new bb, Ou.set(bb, ub), ub)
        }
        class Uu {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(bb, ub) {
            this.storage[bb] = ub
          }
          async _get(bb) {
            const ub = this.storage[bb];
            return void 0 === ub ? null : ub
          }
          async _remove(bb) {
            delete this.storage[bb]
          }
          _addListener(bb, ub) {}
          _removeListener(bb, ub) {}
        }
        Uu.type = "NONE";
        const Lu = Uu;

        function Yu(bb, ub, hb) {
          return `firebase:${bb}:${ub}:${hb}`
        }
        class Su {
          constructor(bb, ub, hb) {
            this.persistence = bb, this.auth = ub, this.userKey = hb;
            const {
              config: Bb,
              name: Ob
            } = this.auth;
            this.fullUserKey = Yu(this.userKey, Bb.apiKey, Ob), this.fullPersistenceKey = Yu("persistence", Bb.apiKey, Ob), this.boundEventHandler = ub._onStorageEvent.bind(ub), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(bb) {
            return this.persistence._set(this.fullUserKey, bb.toJSON())
          }
          async getCurrentUser() {
            const bb = await this.persistence._get(this.fullUserKey);
            return bb ? Bu._fromJSON(this.auth, bb) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(bb) {
            if (this.persistence === bb) return;
            const ub = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = bb, ub ? this.setCurrentUser(ub) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(bb, ub) {
            let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!ub.length) return new Su(Gu(Lu), bb, hb);
            const Bb = (await Promise.all(ub.map((async bb => {
              if (await bb._isAvailable()) return bb
            })))).filter((bb => bb));
            let Ob = Bb[0] || Gu(Lu);
            const Gb = Yu(hb, bb.config.apiKey, bb.name);
            let Ub = null;
            for (const Sb of ub) try {
              const ub = await Sb._get(Gb);
              if (ub) {
                const hb = Bu._fromJSON(bb, ub);
                Sb !== Ob && (Ub = hb), Ob = Sb;
                break
              }
            } catch (Yb) {}
            const Lb = Bb.filter((bb => bb._shouldAllowMigration));
            return Ob._shouldAllowMigration && Lb.length ? (Ob = Lb[0], Ub && await Ob._set(Gb, Ub.toJSON()), await Promise.all(ub.map((async bb => {
              if (bb !== Ob) try {
                await bb._remove(Gb)
              } catch (Yb) {}
            }))), new Su(Ob, bb, hb)) : new Su(Ob, bb, hb)
          }
        }

        function au(bb) {
          const ub = bb.toLowerCase();
          if (ub.includes("opera/") || ub.includes("opr/") || ub.includes("opios/")) return "Opera";
          if (Xu(ub)) return "IEMobile";
          if (ub.includes("msie") || ub.includes("trident/")) return "IE";
          if (ub.includes("edge/")) return "Edge";
          if (Hu(ub)) return "Firefox";
          if (ub.includes("silk/")) return "Silk";
          if (ou(ub)) return "Blackberry";
          if (Au(ub)) return "Webos";
          if (wu(ub)) return "Safari";
          if ((ub.includes("chrome/") || Zu(ub)) && !ub.includes("edge/")) return "Chrome";
          if (pu(ub)) return "Android";
          {
            const ub = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              hb = bb.match(ub);
            if (2 === (null === hb || void 0 === hb ? void 0 : hb.length)) return hb[1]
          }
          return "Other"
        }

        function Hu() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
          return /firefox\//i.test(bb)
        }

        function wu() {
          const bb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)()).toLowerCase();
          return bb.includes("safari/") && !bb.includes("chrome/") && !bb.includes("crios/") && !bb.includes("android")
        }

        function Zu() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
          return /crios\//i.test(bb)
        }

        function Xu() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
          return /iemobile/i.test(bb)
        }

        function pu() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
          return /android/i.test(bb)
        }

        function ou() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
          return /blackberry/i.test(bb)
        }

        function Au() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
          return /webos/i.test(bb)
        }

        function lu() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
          return /iphone|ipad|ipod/i.test(bb) || /macintosh/i.test(bb) && /mobile/i.test(bb)
        }

        function Ku() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
          return lu(bb) || pu(bb) || Au(bb) || ou(bb) || /windows phone/i.test(bb) || Xu(bb)
        }

        function Wu(bb) {
          let ub, hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (bb) {
            case "Browser":
              ub = au((0, Bb.M)());
              break;
            case "Worker":
              ub = `${au((0,Bb.M)())}-${bb}`;
              break;
            default:
              ub = bb
          }
          const Gb = hb.length ? hb.join(",") : "FirebaseCore-web";
          return `${ub}/JsCore/${Ob.e}/${Gb}`
        }
        async function Cu(bb, ub) {
          return Mb(bb, "GET", "/v2/recaptchaConfig", sb(bb, ub))
        }

        function du(bb) {
          return void 0 !== bb && void 0 !== bb.getResponse
        }

        function ru(bb) {
          return void 0 !== bb && void 0 !== bb.enterprise
        }
        class ju {
          constructor(bb) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === bb.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = bb.recaptchaKey.split("/")[3], this.emailPasswordEnabled = bb.recaptchaEnforcementState.some((bb => "EMAIL_PASSWORD_PROVIDER" === bb.provider && "OFF" !== bb.enforcementState))
          }
        }

        function nu(bb) {
          return new Promise(((ub, hb) => {
            const Bb = document.createElement("script");
            Bb.setAttribute("src", bb), Bb.onload = ub, Bb.onerror = bb => {
                const ub = Cb("internal-error");
                ub.customData = bb, hb(ub)
              }, Bb.type = "text/javascript", Bb.charset = "UTF-8",
              function() {
                var bb, ub;
                return null !== (ub = null === (bb = document.getElementsByTagName("head")) || void 0 === bb ? void 0 : bb[0]) && void 0 !== ub ? ub : document
              }().appendChild(Bb)
          }))
        }

        function Du(bb) {
          return `__${bb}${Math.floor(1e6*Math.random())}`
        }
        class xu {
          constructor(bb) {
            this.type = "recaptcha-enterprise", this.auth = vu(bb)
          }
          async verify() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function hb(ub, hb, Bb) {
              const Ob = window.grecaptcha;
              ru(Ob) ? Ob.enterprise.ready((() => {
                Ob.enterprise.execute(ub, {
                  action: bb
                }).then((bb => {
                  hb(bb)
                })).catch((() => {
                  hb("NO_RECAPTCHA")
                }))
              })) : Bb(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((bb, Bb) => {
              (async function(bb) {
                if (!ub) {
                  if (null == bb.tenantId && null != bb._agentRecaptchaConfig) return bb._agentRecaptchaConfig.siteKey;
                  if (null != bb.tenantId && void 0 !== bb._tenantRecaptchaConfigs[bb.tenantId]) return bb._tenantRecaptchaConfigs[bb.tenantId].siteKey
                }
                return new Promise((async (ub, hb) => {
                  Cu(bb, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Bb => {
                    if (void 0 !== Bb.recaptchaKey) {
                      const hb = new ju(Bb);
                      return null == bb.tenantId ? bb._agentRecaptchaConfig = hb : bb._tenantRecaptchaConfigs[bb.tenantId] = hb, ub(hb.siteKey)
                    }
                    hb(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((bb => {
                    hb(bb)
                  }))
                }))
              })(this.auth).then((Ob => {
                if (!ub && ru(window.grecaptcha)) hb(Ob, bb, Bb);
                else {
                  if ("undefined" === typeof window) return void Bb(new Error("RecaptchaVerifier is only supported in browser"));
                  nu("https://www.google.com/recaptcha/enterprise.js?render=" + Ob).then((() => {
                    hb(Ob, bb, Bb)
                  })).catch((bb => {
                    Bb(bb)
                  }))
                }
              })).catch((bb => {
                Bb(bb)
              }))
            }))
          }
        }
        async function zu(bb, ub, hb) {
          let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Ob = new xu(bb);
          let Gb;
          try {
            Gb = await Ob.verify(hb)
          } catch (Lb) {
            Gb = await Ob.verify(hb, !0)
          }
          const Ub = Object.assign({}, ub);
          return Bb ? Object.assign(Ub, {
            captchaResp: Gb
          }) : Object.assign(Ub, {
            captchaResponse: Gb
          }), Object.assign(Ub, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Ub, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Ub
        }
        class gu {
          constructor(bb) {
            this.auth = bb, this.queue = []
          }
          pushCallback(bb, ub) {
            const hb = ub => new Promise(((hb, Bb) => {
              try {
                hb(bb(ub))
              } catch (Ob) {
                Bb(Ob)
              }
            }));
            hb.onAbort = ub, this.queue.push(hb);
            const Bb = this.queue.length - 1;
            return () => {
              this.queue[Bb] = () => Promise.resolve()
            }
          }
          async runMiddleware(bb) {
            if (this.auth.currentUser === bb) return;
            const ub = [];
            try {
              for (const hb of this.queue) await hb(bb), hb.onAbort && ub.push(hb.onAbort)
            } catch (hb) {
              ub.reverse();
              for (const bb of ub) try {
                bb()
              } catch (Bb) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === hb || void 0 === hb ? void 0 : hb.message
              })
            }
          }
        }
        class iu {
          constructor(bb, ub, hb, Bb) {
            this.app = bb, this.heartbeatServiceProvider = ub, this.appCheckServiceProvider = hb, this.config = Bb, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new tu(this), this.idTokenSubscription = new tu(this), this.beforeStateQueue = new gu(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ob, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = bb.name, this.clientVersion = Bb.sdkClientVersion
          }
          _initializeWithPersistence(bb, ub) {
            return ub && (this._popupRedirectResolver = Gu(ub)), this._initializationPromise = this.queue((async () => {
              var hb, Bb;
              if (!this._deleted && (this.persistenceManager = await Su.create(this, bb), !this._deleted)) {
                if (null === (hb = this._popupRedirectResolver) || void 0 === hb ? void 0 : hb._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Ob) {}
                await this.initializeCurrentUser(ub), this.lastNotifiedUid = (null === (Bb = this.currentUser) || void 0 === Bb ? void 0 : Bb.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const bb = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || bb ? this.currentUser && bb && this.currentUser.uid === bb.uid ? (this._currentUser._assign(bb), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(bb, !0) : void 0
          }
          async initializeCurrentUser(bb) {
            var ub;
            const hb = await this.assertedPersistence.getCurrentUser();
            let Bb = hb,
              Ob = !1;
            if (bb && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const hb = null === (ub = this.redirectUser) || void 0 === ub ? void 0 : ub._redirectEventId,
                Gb = null === Bb || void 0 === Bb ? void 0 : Bb._redirectEventId,
                Ub = await this.tryRedirectSignIn(bb);
              hb && hb !== Gb || !(null === Ub || void 0 === Ub ? void 0 : Ub.user) || (Bb = Ub.user, Ob = !0)
            }
            if (!Bb) return this.directlySetCurrentUser(null);
            if (!Bb._redirectEventId) {
              if (Ob) try {
                await this.beforeStateQueue.runMiddleware(Bb)
              } catch (Gb) {
                Bb = hb, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Gb)))
              }
              return Bb ? this.reloadAndSetCurrentUserOrClear(Bb) : this.directlySetCurrentUser(null)
            }
            return nb(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Bb._redirectEventId ? this.directlySetCurrentUser(Bb) : this.reloadAndSetCurrentUserOrClear(Bb)
          }
          async tryRedirectSignIn(bb) {
            let ub = null;
            try {
              ub = await this._popupRedirectResolver._completeRedirectFn(this, bb, !0)
            } catch (hb) {
              await this._setRedirectUser(null)
            }
            return ub
          }
          async reloadAndSetCurrentUserOrClear(bb) {
            try {
              await Rb(bb)
            } catch (ub) {
              if ("auth/network-request-failed" !== (null === ub || void 0 === ub ? void 0 : ub.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(bb)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const bb = navigator;
              return bb.languages && bb.languages[0] || bb.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(bb) {
            const ub = bb ? (0, Bb.K)(bb) : null;
            return ub && nb(ub.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(ub && ub._clone(this))
          }
          async _updateCurrentUser(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return bb && nb(this.tenantId === bb.tenantId, this, "tenant-id-mismatch"), ub || await this.beforeStateQueue.runMiddleware(bb), this.queue((async () => {
              await this.directlySetCurrentUser(bb), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(bb) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Gu(bb))
            }))
          }
          async initializeRecaptchaConfig() {
            const bb = await Cu(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              ub = new ju(bb);
            if (null == this.tenantId ? this._agentRecaptchaConfig = ub : this._tenantRecaptchaConfigs[this.tenantId] = ub, ub.emailPasswordEnabled) {
              new xu(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(bb) {
            this._errorFactory = new Bb.h("auth", "Firebase", bb())
          }
          onAuthStateChanged(bb, ub, hb) {
            return this.registerStateListener(this.authStateSubscription, bb, ub, hb)
          }
          beforeAuthStateChanged(bb, ub) {
            return this.beforeStateQueue.pushCallback(bb, ub)
          }
          onIdTokenChanged(bb, ub, hb) {
            return this.registerStateListener(this.idTokenSubscription, bb, ub, hb)
          }
          toJSON() {
            var bb;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (bb = this._currentUser) || void 0 === bb ? void 0 : bb.toJSON()
            }
          }
          async _setRedirectUser(bb, ub) {
            const hb = await this.getOrInitRedirectPersistenceManager(ub);
            return null === bb ? hb.removeCurrentUser() : hb.setCurrentUser(bb)
          }
          async getOrInitRedirectPersistenceManager(bb) {
            if (!this.redirectPersistenceManager) {
              const ub = bb && Gu(bb) || this._popupRedirectResolver;
              nb(ub, this, "argument-error"), this.redirectPersistenceManager = await Su.create(this, [Gu(ub._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(bb) {
            var ub, hb;
            return this._isInitialized && await this.queue((async () => {})), (null === (ub = this._currentUser) || void 0 === ub ? void 0 : ub._redirectEventId) === bb ? this._currentUser : (null === (hb = this.redirectUser) || void 0 === hb ? void 0 : hb._redirectEventId) === bb ? this.redirectUser : null
          }
          async _persistUserIfCurrent(bb) {
            if (bb === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(bb)))
          }
          _notifyListenersIfCurrent(bb) {
            bb === this.currentUser && this.notifyAuthListeners()
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
            var bb, ub;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const hb = null !== (ub = null === (bb = this.currentUser) || void 0 === bb ? void 0 : bb.uid) && void 0 !== ub ? ub : null;
            this.lastNotifiedUid !== hb && (this.lastNotifiedUid = hb, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(bb, ub, hb, Bb) {
            if (this._deleted) return () => {};
            const Ob = "function" === typeof ub ? ub : ub.next.bind(ub),
              Gb = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return nb(Gb, this, "internal-error"), Gb.then((() => Ob(this.currentUser))), "function" === typeof ub ? bb.addObserver(ub, hb, Bb) : bb.addObserver(ub)
          }
          async directlySetCurrentUser(bb) {
            this.currentUser && this.currentUser !== bb && this._currentUser._stopProactiveRefresh(), bb && this.isProactiveRefreshEnabled && bb._startProactiveRefresh(), this.currentUser = bb, bb ? await this.assertedPersistence.setCurrentUser(bb) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(bb) {
            return this.operations = this.operations.then(bb, bb), this.operations
          }
          get assertedPersistence() {
            return nb(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(bb) {
            bb && !this.frameworks.includes(bb) && (this.frameworks.push(bb), this.frameworks.sort(), this.clientVersion = Wu(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var bb;
            const ub = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (ub["X-Firebase-gmpid"] = this.app.options.appId);
            const hb = await (null === (bb = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === bb ? void 0 : bb.getHeartbeatsHeader());
            hb && (ub["X-Firebase-Client"] = hb);
            const Bb = await this._getAppCheckToken();
            return Bb && (ub["X-Firebase-AppCheck"] = Bb), ub
          }
          async _getAppCheckToken() {
            var bb;
            const ub = await (null === (bb = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === bb ? void 0 : bb.getToken());
            return (null === ub || void 0 === ub ? void 0 : ub.error) && function(bb) {
              if (lb.logLevel <= Ub.e.WARN) {
                for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
                lb.warn(`Auth (${Ob.e}): ${bb}`, ...hb)
              }
            }(`Error while retrieving App Check token: ${ub.error}`), null === ub || void 0 === ub ? void 0 : ub.token
          }
        }

        function vu(bb) {
          return (0, Bb.K)(bb)
        }
        class tu {
          constructor(bb) {
            this.auth = bb, this.observer = null, this.addObserver = (0, Bb.v)((bb => this.observer = bb))
          }
          get next() {
            return nb(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Ju(bb, ub) {
          const hb = (0, Ob.z)(bb, "auth");
          if (hb.isInitialized()) {
            const bb = hb.getImmediate(),
              Ob = hb.getOptions();
            if ((0, Bb.y)(Ob, null !== ub && void 0 !== ub ? ub : {})) return bb;
            Wb(bb, "already-initialized")
          }
          return hb.initialize({
            options: ub
          })
        }

        function eu(bb, ub, hb) {
          const Bb = vu(bb);
          nb(Bb._canInitEmulator, Bb, "emulator-config-failed"), nb(/^https?:\/\//.test(ub), Bb, "invalid-emulator-scheme");
          const Ob = !!(null === hb || void 0 === hb ? void 0 : hb.disableWarnings),
            Gb = Nu(ub),
            {
              host: Ub,
              port: Lb
            } = function(bb) {
              const ub = Nu(bb),
                hb = /(\/\/)?([^?#/]+)/.exec(bb.substr(ub.length));
              if (!hb) return {
                host: "",
                port: null
              };
              const Bb = hb[2].split("@").pop() || "",
                Ob = /^(\[[^\]]+\])(:|$)/.exec(Bb);
              if (Ob) {
                const bb = Ob[1];
                return {
                  host: bb,
                  port: su(Bb.substr(bb.length + 1))
                }
              } {
                const [bb, ub] = Bb.split(":");
                return {
                  host: bb,
                  port: su(ub)
                }
              }
            }(ub),
            Yb = null === Lb ? "" : `:${Lb}`;
          Bb.config.emulator = {
            url: `${Gb}//${Ub}${Yb}/`
          }, Bb.settings.appVerificationDisabledForTesting = !0, Bb.emulatorConfig = Object.freeze({
            host: Ub,
            port: Lb,
            protocol: Gb.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Ob
            })
          }), Ob || function() {
            function bb() {
              const bb = document.createElement("p"),
                ub = bb.style;
              bb.innerText = "Running in emulator mode. Do not use with production credentials.", ub.position = "fixed", ub.width = "100%", ub.backgroundColor = "#ffffff", ub.border = ".1em solid #000000", ub.color = "#b50000", ub.bottom = "0px", ub.left = "0px", ub.margin = "0px", ub.zIndex = "10000", ub.textAlign = "center", bb.classList.add("firebase-emulator-warning"), document.body.appendChild(bb)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", bb) : bb())
          }()
        }

        function Nu(bb) {
          const ub = bb.indexOf(":");
          return ub < 0 ? "" : bb.substr(0, ub + 1)
        }

        function su(bb) {
          if (!bb) return null;
          const ub = Number(bb);
          return isNaN(ub) ? null : ub
        }
        class Mu {
          constructor(bb, ub) {
            this.providerId = bb, this.signInMethod = ub
          }
          toJSON() {
            return Db("not implemented")
          }
          _getIdTokenResponse(bb) {
            return Db("not implemented")
          }
          _linkToIdToken(bb, ub) {
            return Db("not implemented")
          }
          _getReauthenticationResolver(bb) {
            return Db("not implemented")
          }
        }
        async function mu(bb, ub) {
          return Mb(bb, "POST", "/v1/accounts:resetPassword", sb(bb, ub))
        }
        async function Iu(bb, ub) {
          return Mb(bb, "POST", "/v1/accounts:update", ub)
        }
        async function Pu(bb, ub) {
          return Ib(bb, "POST", "/v1/accounts:signInWithPassword", sb(bb, ub))
        }
        async function qu(bb, ub) {
          return Mb(bb, "POST", "/v1/accounts:sendOobCode", sb(bb, ub))
        }
        async function Eu(bb, ub) {
          return qu(bb, ub)
        }
        async function yu(bb, ub) {
          return qu(bb, ub)
        }
        class Vu extends Mu {
          constructor(bb, ub, hb) {
            let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", hb), this._email = bb, this._password = ub, this._tenantId = Bb
          }
          static _fromEmailAndPassword(bb, ub) {
            return new Vu(bb, ub, "password")
          }
          static _fromEmailAndCode(bb, ub) {
            return new Vu(bb, ub, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(bb) {
            const ub = "string" === typeof bb ? JSON.parse(bb) : bb;
            if ((null === ub || void 0 === ub ? void 0 : ub.email) && (null === ub || void 0 === ub ? void 0 : ub.password)) {
              if ("password" === ub.signInMethod) return this._fromEmailAndPassword(ub.email, ub.password);
              if ("emailLink" === ub.signInMethod) return this._fromEmailAndCode(ub.email, ub.password, ub.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(bb) {
            var ub;
            switch (this.signInMethod) {
              case "password":
                const hb = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (ub = bb._getRecaptchaConfig()) || void 0 === ub ? void 0 : ub.emailPasswordEnabled) {
                  const ub = await zu(bb, hb, "signInWithPassword");
                  return Pu(bb, ub)
                }
                return Pu(bb, hb).catch((async ub => {
                  if ("auth/missing-recaptcha-token" === ub.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const ub = await zu(bb, hb, "signInWithPassword");
                    return Pu(bb, ub)
                  }
                  return Promise.reject(ub)
                }));
              case "emailLink":
                return async function(bb, ub) {
                  return Ib(bb, "POST", "/v1/accounts:signInWithEmailLink", sb(bb, ub))
                }(bb, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Wb(bb, "internal-error")
            }
          }
          async _linkToIdToken(bb, ub) {
            switch (this.signInMethod) {
              case "password":
                return Iu(bb, {
                  idToken: ub,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(bb, ub) {
                  return Ib(bb, "POST", "/v1/accounts:signInWithEmailLink", sb(bb, ub))
                }(bb, {
                  idToken: ub,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Wb(bb, "internal-error")
            }
          }
          _getReauthenticationResolver(bb) {
            return this._getIdTokenResponse(bb)
          }
        }
        async function Fu(bb, ub) {
          return Ib(bb, "POST", "/v1/accounts:signInWithIdp", sb(bb, ub))
        }
        class fu extends Mu {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(bb) {
            const ub = new fu(bb.providerId, bb.signInMethod);
            return bb.idToken || bb.accessToken ? (bb.idToken && (ub.idToken = bb.idToken), bb.accessToken && (ub.accessToken = bb.accessToken), bb.nonce && !bb.pendingToken && (ub.nonce = bb.nonce), bb.pendingToken && (ub.pendingToken = bb.pendingToken)) : bb.oauthToken && bb.oauthTokenSecret ? (ub.accessToken = bb.oauthToken, ub.secret = bb.oauthTokenSecret) : Wb("argument-error"), ub
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
          static fromJSON(bb) {
            const ub = "string" === typeof bb ? JSON.parse(bb) : bb,
              {
                providerId: hb,
                signInMethod: Bb
              } = ub,
              Ob = Gb(ub, ["providerId", "signInMethod"]);
            if (!hb || !Bb) return null;
            const Ub = new fu(hb, Bb);
            return Ub.idToken = Ob.idToken || void 0, Ub.accessToken = Ob.accessToken || void 0, Ub.secret = Ob.secret, Ub.nonce = Ob.nonce, Ub.pendingToken = Ob.pendingToken || null, Ub
          }
          _getIdTokenResponse(bb) {
            return Fu(bb, this.buildRequest())
          }
          _linkToIdToken(bb, ub) {
            const hb = this.buildRequest();
            return hb.idToken = ub, Fu(bb, hb)
          }
          _getReauthenticationResolver(bb) {
            const ub = this.buildRequest();
            return ub.autoCreate = !1, Fu(bb, ub)
          }
          buildRequest() {
            const bb = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) bb.pendingToken = this.pendingToken;
            else {
              const ub = {};
              this.idToken && (ub.id_token = this.idToken), this.accessToken && (ub.access_token = this.accessToken), this.secret && (ub.oauth_token_secret = this.secret), ub.providerId = this.providerId, this.nonce && !this.pendingToken && (ub.nonce = this.nonce), bb.postBody = (0, Bb.fb)(ub)
            }
            return bb
          }
        }
        const ku = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Tu extends Mu {
          constructor(bb) {
            super("phone", "phone"), this.params = bb
          }
          static _fromVerification(bb, ub) {
            return new Tu({
              verificationId: bb,
              verificationCode: ub
            })
          }
          static _fromTokenResponse(bb, ub) {
            return new Tu({
              phoneNumber: bb,
              temporaryProof: ub
            })
          }
          _getIdTokenResponse(bb) {
            return async function(bb, ub) {
              return Ib(bb, "POST", "/v1/accounts:signInWithPhoneNumber", sb(bb, ub))
            }(bb, this._makeVerificationRequest())
          }
          _linkToIdToken(bb, ub) {
            return async function(bb, ub) {
              const hb = await Ib(bb, "POST", "/v1/accounts:signInWithPhoneNumber", sb(bb, ub));
              if (hb.temporaryProof) throw Eb(bb, "account-exists-with-different-credential", hb);
              return hb
            }(bb, Object.assign({
              idToken: ub
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(bb) {
            return async function(bb, ub) {
              return Ib(bb, "POST", "/v1/accounts:signInWithPhoneNumber", sb(bb, Object.assign(Object.assign({}, ub), {
                operation: "REAUTH"
              })), ku)
            }(bb, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: bb,
              phoneNumber: ub,
              verificationId: hb,
              verificationCode: Bb
            } = this.params;
            return bb && ub ? {
              temporaryProof: bb,
              phoneNumber: ub
            } : {
              sessionInfo: hb,
              code: Bb
            }
          }
          toJSON() {
            const bb = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (bb.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (bb.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (bb.verificationCode = this.params.verificationCode), this.params.verificationId && (bb.verificationId = this.params.verificationId), bb
          }
          static fromJSON(bb) {
            "string" === typeof bb && (bb = JSON.parse(bb));
            const {
              verificationId: ub,
              verificationCode: hb,
              phoneNumber: Bb,
              temporaryProof: Ob
            } = bb;
            return hb || ub || Bb || Ob ? new Tu({
              verificationId: ub,
              verificationCode: hb,
              phoneNumber: Bb,
              temporaryProof: Ob
            }) : null
          }
        }
        class cu {
          constructor(bb) {
            var ub, hb, Ob, Gb, Ub, Lb;
            const Yb = (0, Bb.eb)((0, Bb.C)(bb)),
              Sb = null !== (ub = Yb.apiKey) && void 0 !== ub ? ub : null,
              ab = null !== (hb = Yb.oobCode) && void 0 !== hb ? hb : null,
              Hb = function(bb) {
                switch (bb) {
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
              }(null !== (Ob = Yb.mode) && void 0 !== Ob ? Ob : null);
            nb(Sb && ab && Hb, "argument-error"), this.apiKey = Sb, this.operation = Hb, this.code = ab, this.continueUrl = null !== (Gb = Yb.continueUrl) && void 0 !== Gb ? Gb : null, this.languageCode = null !== (Ub = Yb.languageCode) && void 0 !== Ub ? Ub : null, this.tenantId = null !== (Lb = Yb.tenantId) && void 0 !== Lb ? Lb : null
          }
          static parseLink(bb) {
            const ub = function(bb) {
              const ub = (0, Bb.eb)((0, Bb.C)(bb)).link,
                hb = ub ? (0, Bb.eb)((0, Bb.C)(ub)).deep_link_id : null,
                Ob = (0, Bb.eb)((0, Bb.C)(bb)).deep_link_id;
              return (Ob ? (0, Bb.eb)((0, Bb.C)(Ob)).link : null) || Ob || hb || ub || bb
            }(bb);
            try {
              return new cu(ub)
            } catch (hb) {
              return null
            }
          }
        }

        function Qu(bb) {
          return cu.parseLink(bb)
        }
        class Ru {
          constructor() {
            this.providerId = Ru.PROVIDER_ID
          }
          static credential(bb, ub) {
            return Vu._fromEmailAndPassword(bb, ub)
          }
          static credentialWithLink(bb, ub) {
            const hb = cu.parseLink(ub);
            return nb(hb, "argument-error"), Vu._fromEmailAndCode(bb, hb.code, hb.tenantId)
          }
        }
        Ru.PROVIDER_ID = "password", Ru.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Ru.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class bh {
          constructor(bb) {
            this.providerId = bb, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(bb) {
            this.defaultLanguageCode = bb
          }
          setCustomParameters(bb) {
            return this.customParameters = bb, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class uh extends bh {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(bb) {
            return this.scopes.includes(bb) || this.scopes.push(bb), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class hh extends uh {
          static credentialFromJSON(bb) {
            const ub = "string" === typeof bb ? JSON.parse(bb) : bb;
            return nb("providerId" in ub && "signInMethod" in ub, "argument-error"), fu._fromParams(ub)
          }
          credential(bb) {
            return this._credential(Object.assign(Object.assign({}, bb), {
              nonce: bb.rawNonce
            }))
          }
          _credential(bb) {
            return nb(bb.idToken || bb.accessToken, "argument-error"), fu._fromParams(Object.assign(Object.assign({}, bb), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(bb) {
            return hh.oauthCredentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return hh.oauthCredentialFromTaggedObject(bb.customData || {})
          }
          static oauthCredentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ub
            } = bb;
            if (!ub) return null;
            const {
              oauthIdToken: hb,
              oauthAccessToken: Bb,
              oauthTokenSecret: Ob,
              pendingToken: Gb,
              nonce: Ub,
              providerId: Lb
            } = ub;
            if (!Bb && !Ob && !hb && !Gb) return null;
            if (!Lb) return null;
            try {
              return new hh(Lb)._credential({
                idToken: hb,
                accessToken: Bb,
                nonce: Ub,
                pendingToken: Gb
              })
            } catch (Yb) {
              return null
            }
          }
        }
        class Bh extends uh {
          constructor() {
            super("facebook.com")
          }
          static credential(bb) {
            return fu._fromParams({
              providerId: Bh.PROVIDER_ID,
              signInMethod: Bh.FACEBOOK_SIGN_IN_METHOD,
              accessToken: bb
            })
          }
          static credentialFromResult(bb) {
            return Bh.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return Bh.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ub
            } = bb;
            if (!ub || !("oauthAccessToken" in ub)) return null;
            if (!ub.oauthAccessToken) return null;
            try {
              return Bh.credential(ub.oauthAccessToken)
            } catch (hb) {
              return null
            }
          }
        }
        Bh.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Bh.PROVIDER_ID = "facebook.com";
        class Oh extends uh {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(bb, ub) {
            return fu._fromParams({
              providerId: Oh.PROVIDER_ID,
              signInMethod: Oh.GOOGLE_SIGN_IN_METHOD,
              idToken: bb,
              accessToken: ub
            })
          }
          static credentialFromResult(bb) {
            return Oh.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return Oh.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ub
            } = bb;
            if (!ub) return null;
            const {
              oauthIdToken: hb,
              oauthAccessToken: Bb
            } = ub;
            if (!hb && !Bb) return null;
            try {
              return Oh.credential(hb, Bb)
            } catch (Ob) {
              return null
            }
          }
        }
        Oh.GOOGLE_SIGN_IN_METHOD = "google.com", Oh.PROVIDER_ID = "google.com";
        class Gh extends uh {
          constructor() {
            super("github.com")
          }
          static credential(bb) {
            return fu._fromParams({
              providerId: Gh.PROVIDER_ID,
              signInMethod: Gh.GITHUB_SIGN_IN_METHOD,
              accessToken: bb
            })
          }
          static credentialFromResult(bb) {
            return Gh.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return Gh.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ub
            } = bb;
            if (!ub || !("oauthAccessToken" in ub)) return null;
            if (!ub.oauthAccessToken) return null;
            try {
              return Gh.credential(ub.oauthAccessToken)
            } catch (hb) {
              return null
            }
          }
        }
        Gh.GITHUB_SIGN_IN_METHOD = "github.com", Gh.PROVIDER_ID = "github.com";
        class Uh extends Mu {
          constructor(bb, ub) {
            super(bb, bb), this.pendingToken = ub
          }
          _getIdTokenResponse(bb) {
            return Fu(bb, this.buildRequest())
          }
          _linkToIdToken(bb, ub) {
            const hb = this.buildRequest();
            return hb.idToken = ub, Fu(bb, hb)
          }
          _getReauthenticationResolver(bb) {
            const ub = this.buildRequest();
            return ub.autoCreate = !1, Fu(bb, ub)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(bb) {
            const ub = "string" === typeof bb ? JSON.parse(bb) : bb,
              {
                providerId: hb,
                signInMethod: Bb,
                pendingToken: Ob
              } = ub;
            return hb && Bb && Ob && hb === Bb ? new Uh(hb, Ob) : null
          }
          static _create(bb, ub) {
            return new Uh(bb, ub)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Lh extends bh {
          constructor(bb) {
            nb(bb.startsWith("saml."), "argument-error"), super(bb)
          }
          static credentialFromResult(bb) {
            return Lh.samlCredentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return Lh.samlCredentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromJSON(bb) {
            const ub = Uh.fromJSON(bb);
            return nb(ub, "argument-error"), ub
          }
          static samlCredentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ub
            } = bb;
            if (!ub) return null;
            const {
              pendingToken: hb,
              providerId: Bb
            } = ub;
            if (!hb || !Bb) return null;
            try {
              return Uh._create(Bb, hb)
            } catch (Ob) {
              return null
            }
          }
        }
        class Yh extends uh {
          constructor() {
            super("twitter.com")
          }
          static credential(bb, ub) {
            return fu._fromParams({
              providerId: Yh.PROVIDER_ID,
              signInMethod: Yh.TWITTER_SIGN_IN_METHOD,
              oauthToken: bb,
              oauthTokenSecret: ub
            })
          }
          static credentialFromResult(bb) {
            return Yh.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return Yh.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ub
            } = bb;
            if (!ub) return null;
            const {
              oauthAccessToken: hb,
              oauthTokenSecret: Bb
            } = ub;
            if (!hb || !Bb) return null;
            try {
              return Yh.credential(hb, Bb)
            } catch (Ob) {
              return null
            }
          }
        }
        async function Sh(bb, ub) {
          return Ib(bb, "POST", "/v1/accounts:signUp", sb(bb, ub))
        }
        Yh.TWITTER_SIGN_IN_METHOD = "twitter.com", Yh.PROVIDER_ID = "twitter.com";
        class ah {
          constructor(bb) {
            this.user = bb.user, this.providerId = bb.providerId, this._tokenResponse = bb._tokenResponse, this.operationType = bb.operationType
          }
          static async _fromIdTokenResponse(bb, ub, hb) {
            let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Ob = await Bu._fromIdTokenResponse(bb, hb, Bb),
              Gb = Hh(hb);
            return new ah({
              user: Ob,
              providerId: Gb,
              _tokenResponse: hb,
              operationType: ub
            })
          }
          static async _forOperation(bb, ub, hb) {
            await bb._updateTokensIfNecessary(hb, !0);
            const Bb = Hh(hb);
            return new ah({
              user: bb,
              providerId: Bb,
              _tokenResponse: hb,
              operationType: ub
            })
          }
        }

        function Hh(bb) {
          return bb.providerId ? bb.providerId : "phoneNumber" in bb ? "phone" : null
        }
        async function wh(bb) {
          var ub;
          const hb = vu(bb);
          if (await hb._initializationPromise, null === (ub = hb.currentUser) || void 0 === ub ? void 0 : ub.isAnonymous) return new ah({
            user: hb.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Bb = await Sh(hb, {
              returnSecureToken: !0
            }),
            Ob = await ah._fromIdTokenResponse(hb, "signIn", Bb, !0);
          return await hb._updateCurrentUser(Ob.user), Ob
        }
        class Zh extends Bb.i {
          constructor(bb, ub, hb, Bb) {
            var Ob;
            super(ub.code, ub.message), this.operationType = hb, this.user = Bb, Object.setPrototypeOf(this, Zh.prototype), this.customData = {
              appName: bb.name,
              tenantId: null !== (Ob = bb.tenantId) && void 0 !== Ob ? Ob : void 0,
              _serverResponse: ub.customData._serverResponse,
              operationType: hb
            }
          }
          static _fromErrorAndOperation(bb, ub, hb, Bb) {
            return new Zh(bb, ub, hb, Bb)
          }
        }

        function Xh(bb, ub, hb, Bb) {
          return ("reauthenticate" === ub ? hb._getReauthenticationResolver(bb) : hb._getIdTokenResponse(bb)).catch((hb => {
            if ("auth/multi-factor-auth-required" === hb.code) throw Zh._fromErrorAndOperation(bb, hb, ub, Bb);
            throw hb
          }))
        }

        function ph(bb) {
          return new Set(bb.map((bb => {
            let {
              providerId: ub
            } = bb;
            return ub
          })).filter((bb => !!bb)))
        }
        async function oh(bb, ub) {
          const hb = (0, Bb.K)(bb);
          await lh(!0, hb, ub);
          const {
            providerUserInfo: Ob
          } = await async function(bb, ub) {
            return Mb(bb, "POST", "/v1/accounts:update", ub)
          }(hb.auth, {
            idToken: await hb.getIdToken(),
            deleteProvider: [ub]
          }), Gb = ph(Ob || []);
          return hb.providerData = hb.providerData.filter((bb => Gb.has(bb.providerId))), Gb.has("phone") || (hb.phoneNumber = null), await hb.auth._persistUserIfCurrent(hb), hb
        }
        async function Ah(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Bb = await Tb(bb, ub._linkToIdToken(bb.auth, await bb.getIdToken()), hb);
          return ah._forOperation(bb, "link", Bb)
        }
        async function lh(bb, ub, hb) {
          await Rb(ub);
          const Bb = !1 === bb ? "provider-already-linked" : "no-such-provider";
          nb(ph(ub.providerData).has(hb) === bb, ub.auth, Bb)
        }
        async function Kh(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Bb
          } = bb, Ob = "reauthenticate";
          try {
            const Gb = await Tb(bb, Xh(Bb, Ob, ub, bb), hb);
            nb(Gb.idToken, Bb, "internal-error");
            const Ub = kb(Gb.idToken);
            nb(Ub, Bb, "internal-error");
            const {
              sub: Lb
            } = Ub;
            return nb(bb.uid === Lb, Bb, "user-mismatch"), ah._forOperation(bb, Ob, Gb)
          } catch (Gb) {
            throw "auth/user-not-found" === (null === Gb || void 0 === Gb ? void 0 : Gb.code) && Wb(Bb, "user-mismatch"), Gb
          }
        }
        async function Wh(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Bb = "signIn",
            Ob = await Xh(bb, Bb, ub),
            Gb = await ah._fromIdTokenResponse(bb, Bb, Ob);
          return hb || await bb._updateCurrentUser(Gb.user), Gb
        }
        async function Ch(bb, ub) {
          return Wh(vu(bb), ub)
        }
        async function dh(bb, ub) {
          const hb = (0, Bb.K)(bb);
          return await lh(!1, hb, ub.providerId), Ah(hb, ub)
        }
        async function rh(bb, ub) {
          return Kh((0, Bb.K)(bb), ub)
        }
        async function jh(bb, ub) {
          const hb = vu(bb),
            Bb = await async function(bb, ub) {
              return Ib(bb, "POST", "/v1/accounts:signInWithCustomToken", sb(bb, ub))
            }(hb, {
              token: ub,
              returnSecureToken: !0
            }), Ob = await ah._fromIdTokenResponse(hb, "signIn", Bb);
          return await hb._updateCurrentUser(Ob.user), Ob
        }
        class nh {
          constructor(bb, ub) {
            this.factorId = bb, this.uid = ub.mfaEnrollmentId, this.enrollmentTime = new Date(ub.enrolledAt).toUTCString(), this.displayName = ub.displayName
          }
          static _fromServerResponse(bb, ub) {
            return "phoneInfo" in ub ? Dh._fromServerResponse(bb, ub) : "totpInfo" in ub ? xh._fromServerResponse(bb, ub) : Wb(bb, "internal-error")
          }
        }
        class Dh extends nh {
          constructor(bb) {
            super("phone", bb), this.phoneNumber = bb.phoneInfo
          }
          static _fromServerResponse(bb, ub) {
            return new Dh(ub)
          }
        }
        class xh extends nh {
          constructor(bb) {
            super("totp", bb)
          }
          static _fromServerResponse(bb, ub) {
            return new xh(ub)
          }
        }

        function zh(bb, ub, hb) {
          var Bb;
          nb((null === (Bb = hb.url) || void 0 === Bb ? void 0 : Bb.length) > 0, bb, "invalid-continue-uri"), nb("undefined" === typeof hb.dynamicLinkDomain || hb.dynamicLinkDomain.length > 0, bb, "invalid-dynamic-link-domain"), ub.continueUrl = hb.url, ub.dynamicLinkDomain = hb.dynamicLinkDomain, ub.canHandleCodeInApp = hb.handleCodeInApp, hb.iOS && (nb(hb.iOS.bundleId.length > 0, bb, "missing-ios-bundle-id"), ub.iOSBundleId = hb.iOS.bundleId), hb.android && (nb(hb.android.packageName.length > 0, bb, "missing-android-pkg-name"), ub.androidInstallApp = hb.android.installApp, ub.androidMinimumVersionCode = hb.android.minimumVersion, ub.androidPackageName = hb.android.packageName)
        }
        async function gh(bb, ub, hb) {
          var Bb;
          const Ob = vu(bb),
            Gb = {
              requestType: "PASSWORD_RESET",
              email: ub,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Bb = Ob._getRecaptchaConfig()) || void 0 === Bb ? void 0 : Bb.emailPasswordEnabled) {
            const bb = await zu(Ob, Gb, "getOobCode", !0);
            hb && zh(Ob, bb, hb), await Eu(Ob, bb)
          } else hb && zh(Ob, Gb, hb), await Eu(Ob, Gb).catch((async bb => {
            if ("auth/missing-recaptcha-token" !== bb.code) return Promise.reject(bb);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const bb = await zu(Ob, Gb, "getOobCode", !0);
              hb && zh(Ob, bb, hb), await Eu(Ob, bb)
            }
          }))
        }
        async function ih(bb, ub, hb) {
          await mu((0, Bb.K)(bb), {
            oobCode: ub,
            newPassword: hb
          })
        }
        async function vh(bb, ub) {
          await async function(bb, ub) {
            return Mb(bb, "POST", "/v1/accounts:update", sb(bb, ub))
          }((0, Bb.K)(bb), {
            oobCode: ub
          })
        }
        async function th(bb, ub) {
          const hb = (0, Bb.K)(bb),
            Ob = await mu(hb, {
              oobCode: ub
            }),
            Gb = Ob.requestType;
          switch (nb(Gb, hb, "internal-error"), Gb) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              nb(Ob.newEmail, hb, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              nb(Ob.mfaInfo, hb, "internal-error");
            default:
              nb(Ob.email, hb, "internal-error")
          }
          let Ub = null;
          return Ob.mfaInfo && (Ub = nh._fromServerResponse(vu(hb), Ob.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Ob.requestType ? Ob.newEmail : Ob.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Ob.requestType ? Ob.email : Ob.newEmail) || null,
              multiFactorInfo: Ub
            },
            operation: Gb
          }
        }
        async function Jh(bb, ub) {
          const {
            data: hb
          } = await th((0, Bb.K)(bb), ub);
          return hb.email
        }
        async function eh(bb, ub, hb) {
          var Bb;
          const Ob = vu(bb),
            Gb = {
              returnSecureToken: !0,
              email: ub,
              password: hb,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Ub;
          if (null === (Bb = Ob._getRecaptchaConfig()) || void 0 === Bb ? void 0 : Bb.emailPasswordEnabled) {
            const bb = await zu(Ob, Gb, "signUpPassword");
            Ub = Sh(Ob, bb)
          } else Ub = Sh(Ob, Gb).catch((async bb => {
            if ("auth/missing-recaptcha-token" === bb.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const bb = await zu(Ob, Gb, "signUpPassword");
              return Sh(Ob, bb)
            }
            return Promise.reject(bb)
          }));
          const Lb = await Ub.catch((bb => Promise.reject(bb))),
            Yb = await ah._fromIdTokenResponse(Ob, "signIn", Lb);
          return await Ob._updateCurrentUser(Yb.user), Yb
        }

        function Nh(bb, ub, hb) {
          return Ch((0, Bb.K)(bb), Ru.credential(ub, hb))
        }
        async function sh(bb, ub, hb) {
          var Bb;
          const Ob = vu(bb),
            Gb = {
              requestType: "EMAIL_SIGNIN",
              email: ub,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Ub(bb, ub) {
            nb(ub.handleCodeInApp, Ob, "argument-error"), ub && zh(Ob, bb, ub)
          }
          if (null === (Bb = Ob._getRecaptchaConfig()) || void 0 === Bb ? void 0 : Bb.emailPasswordEnabled) {
            const bb = await zu(Ob, Gb, "getOobCode", !0);
            Ub(bb, hb), await yu(Ob, bb)
          } else Ub(Gb, hb), await yu(Ob, Gb).catch((async bb => {
            if ("auth/missing-recaptcha-token" !== bb.code) return Promise.reject(bb);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const bb = await zu(Ob, Gb, "getOobCode", !0);
              Ub(bb, hb), await yu(Ob, bb)
            }
          }))
        }

        function Mh(bb, ub) {
          const hb = cu.parseLink(ub);
          return "EMAIL_SIGNIN" === (null === hb || void 0 === hb ? void 0 : hb.operation)
        }
        async function mh(bb, ub, hb) {
          const Ob = (0, Bb.K)(bb),
            Gb = Ru.credentialWithLink(ub, hb || zb());
          return nb(Gb._tenantId === (Ob.tenantId || null), Ob, "tenant-id-mismatch"), Ch(Ob, Gb)
        }
        async function Ih(bb, ub) {
          const hb = {
              identifier: ub,
              continueUri: gb() ? zb() : "http://localhost"
            },
            {
              signinMethods: Ob
            } = await async function(bb, ub) {
              return Mb(bb, "POST", "/v1/accounts:createAuthUri", sb(bb, ub))
            }((0, Bb.K)(bb), hb);
          return Ob || []
        }
        async function Ph(bb, ub) {
          const hb = (0, Bb.K)(bb),
            Ob = {
              requestType: "VERIFY_EMAIL",
              idToken: await bb.getIdToken()
            };
          ub && zh(hb.auth, Ob, ub);
          const {
            email: Gb
          } = await async function(bb, ub) {
            return qu(bb, ub)
          }(hb.auth, Ob);
          Gb !== bb.email && await bb.reload()
        }
        async function qh(bb, ub, hb) {
          const Ob = (0, Bb.K)(bb),
            Gb = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await bb.getIdToken(),
              newEmail: ub
            };
          hb && zh(Ob.auth, Gb, hb);
          const {
            email: Ub
          } = await async function(bb, ub) {
            return qu(bb, ub)
          }(Ob.auth, Gb);
          Ub !== bb.email && await bb.reload()
        }
        async function Eh(bb, ub) {
          let {
            displayName: hb,
            photoURL: Ob
          } = ub;
          if (void 0 === hb && void 0 === Ob) return;
          const Gb = (0, Bb.K)(bb),
            Ub = {
              idToken: await Gb.getIdToken(),
              displayName: hb,
              photoUrl: Ob,
              returnSecureToken: !0
            },
            Lb = await Tb(Gb, async function(bb, ub) {
              return Mb(bb, "POST", "/v1/accounts:update", ub)
            }(Gb.auth, Ub));
          Gb.displayName = Lb.displayName || null, Gb.photoURL = Lb.photoUrl || null;
          const Yb = Gb.providerData.find((bb => {
            let {
              providerId: ub
            } = bb;
            return "password" === ub
          }));
          Yb && (Yb.displayName = Gb.displayName, Yb.photoURL = Gb.photoURL), await Gb._updateTokensIfNecessary(Lb)
        }

        function yh(bb, ub) {
          return Fh((0, Bb.K)(bb), ub, null)
        }

        function Vh(bb, ub) {
          return Fh((0, Bb.K)(bb), null, ub)
        }
        async function Fh(bb, ub, hb) {
          const {
            auth: Bb
          } = bb, Ob = {
            idToken: await bb.getIdToken(),
            returnSecureToken: !0
          };
          ub && (Ob.email = ub), hb && (Ob.password = hb);
          const Gb = await Tb(bb, Iu(Bb, Ob));
          await bb._updateTokensIfNecessary(Gb, !0)
        }
        class fh {
          constructor(bb, ub) {
            let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = bb, this.providerId = ub, this.profile = hb
          }
        }
        class kh extends fh {
          constructor(bb, ub, hb, Bb) {
            super(bb, ub, hb), this.username = Bb
          }
        }
        class Th extends fh {
          constructor(bb, ub) {
            super(bb, "facebook.com", ub)
          }
        }
        class ch extends kh {
          constructor(bb, ub) {
            super(bb, "github.com", ub, "string" === typeof(null === ub || void 0 === ub ? void 0 : ub.login) ? null === ub || void 0 === ub ? void 0 : ub.login : null)
          }
        }
        class Qh extends fh {
          constructor(bb, ub) {
            super(bb, "google.com", ub)
          }
        }
        class Rh extends kh {
          constructor(bb, ub, hb) {
            super(bb, "twitter.com", ub, hb)
          }
        }

        function bB(bb) {
          const {
            user: ub,
            _tokenResponse: hb
          } = bb;
          return ub.isAnonymous && !hb ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(bb) {
            var ub, hb;
            if (!bb) return null;
            const {
              providerId: Bb
            } = bb, Ob = bb.rawUserInfo ? JSON.parse(bb.rawUserInfo) : {}, Gb = bb.isNewUser || "identitytoolkit#SignupNewUserResponse" === bb.kind;
            if (!Bb && (null === bb || void 0 === bb ? void 0 : bb.idToken)) {
              const Bb = null === (hb = null === (ub = kb(bb.idToken)) || void 0 === ub ? void 0 : ub.firebase) || void 0 === hb ? void 0 : hb.sign_in_provider;
              if (Bb) return new fh(Gb, "anonymous" !== Bb && "custom" !== Bb ? Bb : null)
            }
            if (!Bb) return null;
            switch (Bb) {
              case "facebook.com":
                return new Th(Gb, Ob);
              case "github.com":
                return new ch(Gb, Ob);
              case "google.com":
                return new Qh(Gb, Ob);
              case "twitter.com":
                return new Rh(Gb, Ob, bb.screenName || null);
              case "custom":
              case "anonymous":
                return new fh(Gb, null);
              default:
                return new fh(Gb, Bb, Ob)
            }
          }(hb)
        }

        function uB(bb, ub) {
          return (0, Bb.K)(bb).setPersistence(ub)
        }

        function hB(bb) {
          return vu(bb).initializeRecaptchaConfig()
        }

        function BB(bb, ub, hb, Ob) {
          return (0, Bb.K)(bb).onIdTokenChanged(ub, hb, Ob)
        }

        function OB(bb, ub, hb) {
          return (0, Bb.K)(bb).beforeAuthStateChanged(ub, hb)
        }

        function GB(bb, ub, hb, Ob) {
          return (0, Bb.K)(bb).onAuthStateChanged(ub, hb, Ob)
        }

        function UB(bb) {
          (0, Bb.K)(bb).useDeviceLanguage()
        }

        function LB(bb, ub) {
          return (0, Bb.K)(bb).updateCurrentUser(ub)
        }

        function YB(bb) {
          return (0, Bb.K)(bb).signOut()
        }
        async function SB(bb) {
          return (0, Bb.K)(bb).delete()
        }
        class aB {
          constructor(bb, ub, hb) {
            this.type = bb, this.credential = ub, this.auth = hb
          }
          static _fromIdtoken(bb, ub) {
            return new aB("enroll", bb, ub)
          }
          static _fromMfaPendingCredential(bb) {
            return new aB("signin", bb)
          }
          toJSON() {
            const bb = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [bb]: this.credential
              }
            }
          }
          static fromJSON(bb) {
            var ub, hb;
            if (null === bb || void 0 === bb ? void 0 : bb.multiFactorSession) {
              if (null === (ub = bb.multiFactorSession) || void 0 === ub ? void 0 : ub.pendingCredential) return aB._fromMfaPendingCredential(bb.multiFactorSession.pendingCredential);
              if (null === (hb = bb.multiFactorSession) || void 0 === hb ? void 0 : hb.idToken) return aB._fromIdtoken(bb.multiFactorSession.idToken)
            }
            return null
          }
        }
        class HB {
          constructor(bb, ub, hb) {
            this.session = bb, this.hints = ub, this.signInResolver = hb
          }
          static _fromError(bb, ub) {
            const hb = vu(bb),
              Bb = ub.customData._serverResponse,
              Ob = (Bb.mfaInfo || []).map((bb => nh._fromServerResponse(hb, bb)));
            nb(Bb.mfaPendingCredential, hb, "internal-error");
            const Gb = aB._fromMfaPendingCredential(Bb.mfaPendingCredential);
            return new HB(Gb, Ob, (async bb => {
              const Ob = await bb._process(hb, Gb);
              delete Bb.mfaInfo, delete Bb.mfaPendingCredential;
              const Ub = Object.assign(Object.assign({}, Bb), {
                idToken: Ob.idToken,
                refreshToken: Ob.refreshToken
              });
              switch (ub.operationType) {
                case "signIn":
                  const bb = await ah._fromIdTokenResponse(hb, ub.operationType, Ub);
                  return await hb._updateCurrentUser(bb.user), bb;
                case "reauthenticate":
                  return nb(ub.user, hb, "internal-error"), ah._forOperation(ub.user, ub.operationType, Ub);
                default:
                  Wb(hb, "internal-error")
              }
            }))
          }
          async resolveSignIn(bb) {
            const ub = bb;
            return this.signInResolver(ub)
          }
        }

        function wB(bb, ub) {
          var hb;
          const Ob = (0, Bb.K)(bb),
            Gb = ub;
          return nb(ub.customData.operationType, Ob, "argument-error"), nb(null === (hb = Gb.customData._serverResponse) || void 0 === hb ? void 0 : hb.mfaPendingCredential, Ob, "argument-error"), HB._fromError(Ob, Gb)
        }
        class ZB {
          constructor(bb) {
            this.user = bb, this.enrolledFactors = [], bb._onReload((ub => {
              ub.mfaInfo && (this.enrolledFactors = ub.mfaInfo.map((ub => nh._fromServerResponse(bb.auth, ub))))
            }))
          }
          static _fromUser(bb) {
            return new ZB(bb)
          }
          async getSession() {
            return aB._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(bb, ub) {
            const hb = bb,
              Bb = await this.getSession(),
              Ob = await Tb(this.user, hb._process(this.user.auth, Bb, ub));
            return await this.user._updateTokensIfNecessary(Ob), this.user.reload()
          }
          async unenroll(bb) {
            const ub = "string" === typeof bb ? bb : bb.uid,
              hb = await this.user.getIdToken();
            try {
              const bb = await Tb(this.user, (Bb = this.user.auth, Ob = {
                idToken: hb,
                mfaEnrollmentId: ub
              }, Mb(Bb, "POST", "/v2/accounts/mfaEnrollment:withdraw", sb(Bb, Ob))));
              this.enrolledFactors = this.enrolledFactors.filter((bb => {
                let {
                  uid: hb
                } = bb;
                return hb !== ub
              })), await this.user._updateTokensIfNecessary(bb), await this.user.reload()
            } catch (Gb) {
              throw Gb
            }
            var Bb, Ob
          }
        }
        const XB = new WeakMap;

        function pB(bb) {
          const ub = (0, Bb.K)(bb);
          return XB.has(ub) || XB.set(ub, ZB._fromUser(ub)), XB.get(ub)
        }
        const oB = "__sak";
        class AB {
          constructor(bb, ub) {
            this.storageRetriever = bb, this.type = ub
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(oB, "1"), this.storage.removeItem(oB), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (bb) {
              return Promise.resolve(!1)
            }
          }
          _set(bb, ub) {
            return this.storage.setItem(bb, JSON.stringify(ub)), Promise.resolve()
          }
          _get(bb) {
            const ub = this.storage.getItem(bb);
            return Promise.resolve(ub ? JSON.parse(ub) : null)
          }
          _remove(bb) {
            return this.storage.removeItem(bb), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class lB extends AB {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (bb, ub) => this.onStorageEvent(bb, ub), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const bb = (0, Bb.M)();
              return wu(bb) || lu(bb)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (bb) {
                return !1
              }
            }(), this.fallbackToPolling = Ku(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(bb) {
            for (const ub of Object.keys(this.listeners)) {
              const hb = this.storage.getItem(ub),
                Bb = this.localCache[ub];
              hb !== Bb && bb(ub, Bb, hb)
            }
          }
          onStorageEvent(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!bb.key) return void this.forAllChangedKeys(((bb, ub, hb) => {
              this.notifyListeners(bb, hb)
            }));
            const hb = bb.key;
            if (ub ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Bb = this.storage.getItem(hb);
              if (bb.newValue !== Bb) null !== bb.newValue ? this.storage.setItem(hb, bb.newValue) : this.storage.removeItem(hb);
              else if (this.localCache[hb] === bb.newValue && !ub) return
            }
            const Ob = () => {
                const bb = this.storage.getItem(hb);
                (ub || this.localCache[hb] !== bb) && this.notifyListeners(hb, bb)
              },
              Gb = this.storage.getItem(hb);
            (0, Bb.T)() && 10 === document.documentMode && Gb !== bb.newValue && bb.newValue !== bb.oldValue ? setTimeout(Ob, 10) : Ob()
          }
          notifyListeners(bb, ub) {
            this.localCache[bb] = ub;
            const hb = this.listeners[bb];
            if (hb)
              for (const Bb of Array.from(hb)) Bb(ub ? JSON.parse(ub) : ub)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((bb, ub, hb) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: bb,
                  oldValue: ub,
                  newValue: hb
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
          _addListener(bb, ub) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[bb] || (this.listeners[bb] = new Set, this.localCache[bb] = this.storage.getItem(bb)), this.listeners[bb].add(ub)
          }
          _removeListener(bb, ub) {
            this.listeners[bb] && (this.listeners[bb].delete(ub), 0 === this.listeners[bb].size && delete this.listeners[bb]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(bb, ub) {
            await super._set(bb, ub), this.localCache[bb] = JSON.stringify(ub)
          }
          async _get(bb) {
            const ub = await super._get(bb);
            return this.localCache[bb] = JSON.stringify(ub), ub
          }
          async _remove(bb) {
            await super._remove(bb), delete this.localCache[bb]
          }
        }
        lB.type = "LOCAL";
        const KB = lB;
        class WB extends AB {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(bb, ub) {}
          _removeListener(bb, ub) {}
        }
        WB.type = "SESSION";
        const CB = WB;
        class dB {
          constructor(bb) {
            this.eventTarget = bb, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(bb) {
            const ub = this.receivers.find((ub => ub.isListeningto(bb)));
            if (ub) return ub;
            const hb = new dB(bb);
            return this.receivers.push(hb), hb
          }
          isListeningto(bb) {
            return this.eventTarget === bb
          }
          async handleEvent(bb) {
            const ub = bb,
              {
                eventId: hb,
                eventType: Bb,
                data: Ob
              } = ub.data,
              Gb = this.handlersMap[Bb];
            if (!(null === Gb || void 0 === Gb ? void 0 : Gb.size)) return;
            ub.ports[0].postMessage({
              status: "ack",
              eventId: hb,
              eventType: Bb
            });
            const Ub = Array.from(Gb).map((async bb => bb(ub.origin, Ob))),
              Lb = await
            function(bb) {
              return Promise.all(bb.map((async bb => {
                try {
                  return {
                    fulfilled: !0,
                    value: await bb
                  }
                } catch (ub) {
                  return {
                    fulfilled: !1,
                    reason: ub
                  }
                }
              })))
            }(Ub);
            ub.ports[0].postMessage({
              status: "done",
              eventId: hb,
              eventType: Bb,
              response: Lb
            })
          }
          _subscribe(bb, ub) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[bb] || (this.handlersMap[bb] = new Set), this.handlersMap[bb].add(ub)
          }
          _unsubscribe(bb, ub) {
            this.handlersMap[bb] && ub && this.handlersMap[bb].delete(ub), ub && 0 !== this.handlersMap[bb].size || delete this.handlersMap[bb], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function rB() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            hb = "";
          for (let Bb = 0; Bb < ub; Bb++) hb += Math.floor(10 * Math.random());
          return bb + hb
        }
        dB.receivers = [];
        class jB {
          constructor(bb) {
            this.target = bb, this.handlers = new Set
          }
          removeMessageHandler(bb) {
            bb.messageChannel && (bb.messageChannel.port1.removeEventListener("message", bb.sK), bb.messageChannel.port1.close()), this.handlers.delete(bb)
          }
          async _send(bb, ub) {
            let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Bb = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Bb) throw new Error("connection_unavailable");
            let Ob, Gb;
            return new Promise(((Ub, Lb) => {
              const Yb = rB("", 20);
              Bb.port1.start();
              const Sb = setTimeout((() => {
                Lb(new Error("unsupported_event"))
              }), hb);
              Gb = {
                messageChannel: Bb,
                sK(bb) {
                  const ub = bb;
                  if (ub.data.eventId === Yb) switch (ub.data.status) {
                    case "ack":
                      clearTimeout(Sb), Ob = setTimeout((() => {
                        Lb(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Ob), Ub(ub.data.response);
                      break;
                    default:
                      clearTimeout(Sb), clearTimeout(Ob), Lb(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Gb), Bb.port1.addEventListener("message", Gb.sK), this.target.postMessage({
                eventType: bb,
                eventId: Yb,
                data: ub
              }, [Bb.port2])
            })).finally((() => {
              Gb && this.removeMessageHandler(Gb)
            }))
          }
        }

        function nB() {
          return window
        }

        function DB() {
          return "undefined" !== typeof nB().WorkerGlobalScope && "function" === typeof nB().importScripts
        }
        const xB = "firebaseLocalStorageDb",
          zB = "firebaseLocalStorage",
          gB = "fbase_key";
        class iB {
          constructor(bb) {
            this.request = bb
          }
          toPromise() {
            return new Promise(((bb, ub) => {
              this.request.addEventListener("success", (() => {
                bb(this.request.result)
              })), this.request.addEventListener("error", (() => {
                ub(this.request.error)
              }))
            }))
          }
        }

        function vB(bb, ub) {
          return bb.transaction([zB], ub ? "readwrite" : "readonly").objectStore(zB)
        }

        function tB() {
          const bb = indexedDB.open(xB, 1);
          return new Promise(((ub, hb) => {
            bb.addEventListener("error", (() => {
              hb(bb.error)
            })), bb.addEventListener("upgradeneeded", (() => {
              const ub = bb.result;
              try {
                ub.createObjectStore(zB, {
                  keyPath: gB
                })
              } catch (Bb) {
                hb(Bb)
              }
            })), bb.addEventListener("success", (async () => {
              const hb = bb.result;
              hb.objectStoreNames.contains(zB) ? ub(hb) : (hb.close(), await
                function() {
                  const bb = indexedDB.deleteDatabase(xB);
                  return new iB(bb).toPromise()
                }(), ub(await tB()))
            }))
          }))
        }
        async function JB(bb, ub, hb) {
          const Bb = vB(bb, !0).put({
            [gB]: ub,
            value: hb
          });
          return new iB(Bb).toPromise()
        }

        function eB(bb, ub) {
          const hb = vB(bb, !0).delete(ub);
          return new iB(hb).toPromise()
        }
        class NB {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await tB()), this.db
          }
          async _withRetries(bb) {
            let ub = 0;
            for (;;) try {
              const ub = await this._openDb();
              return await bb(ub)
            } catch (hb) {
              if (ub++ > 3) throw hb;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return DB() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = dB._getInstance(DB() ? self : null), this.receiver._subscribe("keyChanged", (async (bb, ub) => ({
              keyProcessed: (await this._poll()).includes(ub.key)
            }))), this.receiver._subscribe("ping", (async (bb, ub) => ["keyChanged"]))
          }
          async initializeSender() {
            var bb, ub;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (bb) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new jB(this.activeServiceWorker);
            const hb = await this.sender._send("ping", {}, 800);
            hb && (null === (bb = hb[0]) || void 0 === bb ? void 0 : bb.fulfilled) && (null === (ub = hb[0]) || void 0 === ub ? void 0 : ub.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(bb) {
            if (this.sender && this.activeServiceWorker && function() {
                var bb;
                return (null === (bb = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === bb ? void 0 : bb.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: bb
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (ub) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const bb = await tB();
              return await JB(bb, oB, "1"), await eB(bb, oB), !0
            } catch (bb) {}
            return !1
          }
          async _withPendingWrite(bb) {
            this.pendingWrites++;
            try {
              await bb()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(bb, ub) {
            return this._withPendingWrite((async () => (await this._withRetries((hb => JB(hb, bb, ub))), this.localCache[bb] = ub, this.notifyServiceWorker(bb))))
          }
          async _get(bb) {
            const ub = await this._withRetries((ub => async function(bb, ub) {
              const hb = vB(bb, !1).get(ub),
                Bb = await new iB(hb).toPromise();
              return void 0 === Bb ? null : Bb.value
            }(ub, bb)));
            return this.localCache[bb] = ub, ub
          }
          async _remove(bb) {
            return this._withPendingWrite((async () => (await this._withRetries((ub => eB(ub, bb))), delete this.localCache[bb], this.notifyServiceWorker(bb))))
          }
          async _poll() {
            const bb = await this._withRetries((bb => {
              const ub = vB(bb, !1).getAll();
              return new iB(ub).toPromise()
            }));
            if (!bb) return [];
            if (0 !== this.pendingWrites) return [];
            const ub = [],
              hb = new Set;
            for (const {
                fbase_key: Bb,
                value: Ob
              }
              of bb) hb.add(Bb), JSON.stringify(this.localCache[Bb]) !== JSON.stringify(Ob) && (this.notifyListeners(Bb, Ob), ub.push(Bb));
            for (const Bb of Object.keys(this.localCache)) this.localCache[Bb] && !hb.has(Bb) && (this.notifyListeners(Bb, null), ub.push(Bb));
            return ub
          }
          notifyListeners(bb, ub) {
            this.localCache[bb] = ub;
            const hb = this.listeners[bb];
            if (hb)
              for (const Bb of Array.from(hb)) Bb(ub)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(bb, ub) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[bb] || (this.listeners[bb] = new Set, this._get(bb)), this.listeners[bb].add(ub)
          }
          _removeListener(bb, ub) {
            this.listeners[bb] && (this.listeners[bb].delete(ub), 0 === this.listeners[bb].size && delete this.listeners[bb]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        NB.type = "LOCAL";
        const sB = NB;
        const MB = 1e12;
        class mB {
          constructor(bb) {
            this.auth = bb, this.counter = MB, this._widgets = new Map
          }
          render(bb, ub) {
            const hb = this.counter;
            return this._widgets.set(hb, new IB(bb, this.auth.name, ub || {})), this.counter++, hb
          }
          reset(bb) {
            var ub;
            const hb = bb || MB;
            null === (ub = this._widgets.get(hb)) || void 0 === ub || ub.delete(), this._widgets.delete(hb)
          }
          getResponse(bb) {
            var ub;
            const hb = bb || MB;
            return (null === (ub = this._widgets.get(hb)) || void 0 === ub ? void 0 : ub.getResponse()) || ""
          }
          async execute(bb) {
            var ub;
            const hb = bb || MB;
            return null === (ub = this._widgets.get(hb)) || void 0 === ub || ub.execute(), ""
          }
        }
        class IB {
          constructor(bb, ub, hb) {
            this.params = hb, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Bb = "string" === typeof bb ? document.getElementById(bb) : bb;
            nb(Bb, "argument-error", {
              appName: ub
            }), this.container = Bb, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(bb) {
                const ub = [],
                  hb = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Bb = 0; Bb < bb; Bb++) ub.push(hb.charAt(Math.floor(Math.random() * hb.length)));
                return ub.join("")
              }(50);
              const {
                callback: bb,
                "expired-callback": ub
              } = this.params;
              if (bb) try {
                bb(this.responseToken)
              } catch (hb) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, ub) try {
                  ub()
                } catch (hb) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const PB = Du("rcb"),
          qB = new vb(3e4, 6e4);
        class EB {
          constructor() {
            var bb;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (bb = nB().grecaptcha) || void 0 === bb ? void 0 : bb.render)
          }
          load(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return nb(function(bb) {
              return bb.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(bb)
            }(ub), bb, "argument-error"), this.shouldResolveImmediately(ub) && du(nB().grecaptcha) ? Promise.resolve(nB().grecaptcha) : new Promise(((hb, Ob) => {
              const Gb = nB().setTimeout((() => {
                Ob(Cb(bb, "network-request-failed"))
              }), qB.get());
              nB()[PB] = () => {
                nB().clearTimeout(Gb), delete nB()[PB];
                const Bb = nB().grecaptcha;
                if (!Bb || !du(Bb)) return void Ob(Cb(bb, "internal-error"));
                const Ub = Bb.render;
                Bb.render = (bb, ub) => {
                  const hb = Ub(bb, ub);
                  return this.counter++, hb
                }, this.hostLanguage = ub, hb(Bb)
              };
              nu(`https://www.google.com/recaptcha/api.js??${(0,Bb.fb)({onload:PB,render:"explicit",hl:ub})}`).catch((() => {
                clearTimeout(Gb), Ob(Cb(bb, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(bb) {
            var ub;
            return !!(null === (ub = nB().grecaptcha) || void 0 === ub ? void 0 : ub.render) && (bb === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class yB {
          async load(bb) {
            return new mB(bb)
          }
          clearedOneInstance() {}
        }
        const VB = "recaptcha",
          FB = {
            theme: "light",
            type: "image"
          };
        class fB {
          constructor(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, FB),
              hb = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = ub, this.type = VB, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = vu(hb), this.isInvisible = "invisible" === this.parameters.size, nb("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Bb = "string" === typeof bb ? document.getElementById(bb) : bb;
            nb(Bb, this.auth, "argument-error"), this.container = Bb, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new yB : new EB, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const bb = await this.render(),
              ub = this.getAssertedRecaptcha(),
              hb = ub.getResponse(bb);
            return hb || new Promise((hb => {
              const Bb = bb => {
                bb && (this.tokenChangeListeners.delete(Bb), hb(bb))
              };
              this.tokenChangeListeners.add(Bb), this.isInvisible && ub.execute(bb)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (bb) {
              return Promise.reject(bb)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((bb => {
              throw this.renderPromise = null, bb
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((bb => {
              this.container.removeChild(bb)
            }))
          }
          validateStartingState() {
            nb(!this.parameters.sitekey, this.auth, "argument-error"), nb(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), nb("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(bb) {
            return ub => {
              if (this.tokenChangeListeners.forEach((bb => bb(ub))), "function" === typeof bb) bb(ub);
              else if ("string" === typeof bb) {
                const hb = nB()[bb];
                "function" === typeof hb && hb(ub)
              }
            }
          }
          assertNotDestroyed() {
            nb(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let bb = this.container;
              if (!this.isInvisible) {
                const ub = document.createElement("div");
                bb.appendChild(ub), bb = ub
              }
              this.widgetId = this.getAssertedRecaptcha().render(bb, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            nb(gb() && !DB(), this.auth, "internal-error"), await
            function() {
              let bb = null;
              return new Promise((ub => {
                "complete" !== document.readyState ? (bb = () => ub(), window.addEventListener("load", bb)) : ub()
              })).catch((ub => {
                throw bb && window.removeEventListener("load", bb), ub
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const bb = await async function(bb) {
              return (await Mb(bb, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            nb(bb, this.auth, "internal-error"), this.parameters.sitekey = bb
          }
          getAssertedRecaptcha() {
            return nb(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class kB {
          constructor(bb, ub) {
            this.verificationId = bb, this.onConfirmation = ub
          }
          confirm(bb) {
            const ub = Tu._fromVerification(this.verificationId, bb);
            return this.onConfirmation(ub)
          }
        }
        async function TB(bb, ub, hb) {
          const Ob = vu(bb),
            Gb = await RB(Ob, ub, (0, Bb.K)(hb));
          return new kB(Gb, (bb => Ch(Ob, bb)))
        }
        async function cB(bb, ub, hb) {
          const Ob = (0, Bb.K)(bb);
          await lh(!1, Ob, "phone");
          const Gb = await RB(Ob.auth, ub, (0, Bb.K)(hb));
          return new kB(Gb, (bb => dh(Ob, bb)))
        }
        async function QB(bb, ub, hb) {
          const Ob = (0, Bb.K)(bb),
            Gb = await RB(Ob.auth, ub, (0, Bb.K)(hb));
          return new kB(Gb, (bb => rh(Ob, bb)))
        }
        async function RB(bb, ub, hb) {
          var Bb;
          const Ob = await hb.verify();
          try {
            let Gb;
            if (nb("string" === typeof Ob, bb, "argument-error"), nb(hb.type === VB, bb, "argument-error"), Gb = "string" === typeof ub ? {
                phoneNumber: ub
              } : ub, "session" in Gb) {
              const ub = Gb.session;
              if ("phoneNumber" in Gb) {
                nb("enroll" === ub.type, bb, "internal-error");
                const hb = await
                function(bb, ub) {
                  return Mb(bb, "POST", "/v2/accounts/mfaEnrollment:start", sb(bb, ub))
                }(bb, {
                  idToken: ub.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Gb.phoneNumber,
                    recaptchaToken: Ob
                  }
                });
                return hb.phoneSessionInfo.sessionInfo
              } {
                nb("signin" === ub.type, bb, "internal-error");
                const hb = (null === (Bb = Gb.multiFactorHint) || void 0 === Bb ? void 0 : Bb.uid) || Gb.multiFactorUid;
                nb(hb, bb, "missing-multi-factor-info");
                const Ub = await
                function(bb, ub) {
                  return Mb(bb, "POST", "/v2/accounts/mfaSignIn:start", sb(bb, ub))
                }(bb, {
                  mfaPendingCredential: ub.credential,
                  mfaEnrollmentId: hb,
                  phoneSignInInfo: {
                    recaptchaToken: Ob
                  }
                });
                return Ub.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: ub
              } = await async function(bb, ub) {
                return Mb(bb, "POST", "/v1/accounts:sendVerificationCode", sb(bb, ub))
              }(bb, {
                phoneNumber: Gb.phoneNumber,
                recaptchaToken: Ob
              });
              return ub
            }
          } finally {
            hb._reset()
          }
        }
        async function bO(bb, ub) {
          await Ah((0, Bb.K)(bb), ub)
        }
        class uO {
          constructor(bb) {
            this.providerId = uO.PROVIDER_ID, this.auth = vu(bb)
          }
          verifyPhoneNumber(bb, ub) {
            return RB(this.auth, bb, (0, Bb.K)(ub))
          }
          static credential(bb, ub) {
            return Tu._fromVerification(bb, ub)
          }
          static credentialFromResult(bb) {
            const ub = bb;
            return uO.credentialFromTaggedObject(ub)
          }
          static credentialFromError(bb) {
            return uO.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ub
            } = bb;
            if (!ub) return null;
            const {
              phoneNumber: hb,
              temporaryProof: Bb
            } = ub;
            return hb && Bb ? Tu._fromTokenResponse(hb, Bb) : null
          }
        }

        function hO(bb, ub) {
          return ub ? Gu(ub) : (nb(bb._popupRedirectResolver, bb, "argument-error"), bb._popupRedirectResolver)
        }
        uO.PROVIDER_ID = "phone", uO.PHONE_SIGN_IN_METHOD = "phone";
        class BO extends Mu {
          constructor(bb) {
            super("custom", "custom"), this.params = bb
          }
          _getIdTokenResponse(bb) {
            return Fu(bb, this._buildIdpRequest())
          }
          _linkToIdToken(bb, ub) {
            return Fu(bb, this._buildIdpRequest(ub))
          }
          _getReauthenticationResolver(bb) {
            return Fu(bb, this._buildIdpRequest())
          }
          _buildIdpRequest(bb) {
            const ub = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return bb && (ub.idToken = bb), ub
          }
        }

        function OO(bb) {
          return Wh(bb.auth, new BO(bb), bb.bypassAuthState)
        }

        function GO(bb) {
          const {
            auth: ub,
            user: hb
          } = bb;
          return nb(hb, ub, "internal-error"), Kh(hb, new BO(bb), bb.bypassAuthState)
        }
        async function UO(bb) {
          const {
            auth: ub,
            user: hb
          } = bb;
          return nb(hb, ub, "internal-error"), Ah(hb, new BO(bb), bb.bypassAuthState)
        }
        class LO {
          constructor(bb, ub, hb, Bb) {
            let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = bb, this.resolver = hb, this.user = Bb, this.bypassAuthState = Ob, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(ub) ? ub : [ub]
          }
          execute() {
            return new Promise((async (bb, ub) => {
              this.pendingPromise = {
                resolve: bb,
                reject: ub
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (hb) {
                this.reject(hb)
              }
            }))
          }
          async onAuthEvent(bb) {
            const {
              urlResponse: ub,
              sessionId: hb,
              postBody: Bb,
              tenantId: Ob,
              error: Gb,
              type: Ub
            } = bb;
            if (Gb) return void this.reject(Gb);
            const Lb = {
              auth: this.auth,
              requestUri: ub,
              sessionId: hb,
              tenantId: Ob || void 0,
              postBody: Bb || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Ub)(Lb))
            } catch (Yb) {
              this.reject(Yb)
            }
          }
          onError(bb) {
            this.reject(bb)
          }
          getIdpTask(bb) {
            switch (bb) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return OO;
              case "linkViaPopup":
              case "linkViaRedirect":
                return UO;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return GO;
              default:
                Wb(this.auth, "internal-error")
            }
          }
          resolve(bb) {
            xb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(bb), this.unregisterAndCleanUp()
          }
          reject(bb) {
            xb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(bb), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const YO = new vb(2e3, 1e4);
        async function SO(bb, ub, hb) {
          const Bb = vu(bb);
          rb(bb, ub, bh);
          const Ob = hO(Bb, hb);
          return new wO(Bb, "signInViaPopup", ub, Ob).executeNotNull()
        }
        async function aO(bb, ub, hb) {
          const Ob = (0, Bb.K)(bb);
          rb(Ob.auth, ub, bh);
          const Gb = hO(Ob.auth, hb);
          return new wO(Ob.auth, "reauthViaPopup", ub, Gb, Ob).executeNotNull()
        }
        async function HO(bb, ub, hb) {
          const Ob = (0, Bb.K)(bb);
          rb(Ob.auth, ub, bh);
          const Gb = hO(Ob.auth, hb);
          return new wO(Ob.auth, "linkViaPopup", ub, Gb, Ob).executeNotNull()
        }
        class wO extends LO {
          constructor(bb, ub, hb, Bb, Ob) {
            super(bb, ub, Bb, Ob), this.provider = hb, this.authWindow = null, this.pollId = null, wO.currentPopupAction && wO.currentPopupAction.cancel(), wO.currentPopupAction = this
          }
          async executeNotNull() {
            const bb = await this.execute();
            return nb(bb, this.auth, "internal-error"), bb
          }
          async onExecution() {
            xb(1 === this.filter.length, "Popup operations only handle one event");
            const bb = rB();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], bb), this.authWindow.associatedEvent = bb, this.resolver._originValidation(this.auth).catch((bb => {
              this.reject(bb)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (bb => {
              bb || this.reject(Cb(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var bb;
            return (null === (bb = this.authWindow) || void 0 === bb ? void 0 : bb.associatedEvent) || null
          }
          cancel() {
            this.reject(Cb(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, wO.currentPopupAction = null
          }
          pollUserCancellation() {
            const bb = () => {
              var ub, hb;
              (null === (hb = null === (ub = this.authWindow) || void 0 === ub ? void 0 : ub.window) || void 0 === hb ? void 0 : hb.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Cb(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(bb, YO.get())
            };
            bb()
          }
        }
        wO.currentPopupAction = null;
        const ZO = "pendingRedirect",
          XO = new Map;
        class pO extends LO {
          constructor(bb, ub) {
            super(bb, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], ub, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let bb = XO.get(this.auth._key());
            if (!bb) {
              try {
                const ub = await async function(bb, ub) {
                  const hb = KO(ub),
                    Bb = lO(bb);
                  if (!await Bb._isAvailable()) return !1;
                  const Ob = "true" === await Bb._get(hb);
                  return await Bb._remove(hb), Ob
                }(this.resolver, this.auth) ? await super.execute() : null;
                bb = () => Promise.resolve(ub)
              } catch (ub) {
                bb = () => Promise.reject(ub)
              }
              XO.set(this.auth._key(), bb)
            }
            return this.bypassAuthState || XO.set(this.auth._key(), (() => Promise.resolve(null))), bb()
          }
          async onAuthEvent(bb) {
            if ("signInViaRedirect" === bb.type) return super.onAuthEvent(bb);
            if ("unknown" !== bb.type) {
              if (bb.eventId) {
                const ub = await this.auth._redirectUserForId(bb.eventId);
                if (ub) return this.user = ub, super.onAuthEvent(bb);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function oO(bb, ub) {
          return lO(bb)._set(KO(ub), "true")
        }

        function AO(bb, ub) {
          XO.set(bb._key(), ub)
        }

        function lO(bb) {
          return Gu(bb._redirectPersistence)
        }

        function KO(bb) {
          return Yu(ZO, bb.config.apiKey, bb.name)
        }

        function WO(bb, ub, hb) {
          return async function(bb, ub, hb) {
            const Bb = vu(bb);
            rb(bb, ub, bh), await Bb._initializationPromise;
            const Ob = hO(Bb, hb);
            return await oO(Ob, Bb), Ob._openRedirect(Bb, ub, "signInViaRedirect")
          }(bb, ub, hb)
        }

        function CO(bb, ub, hb) {
          return async function(bb, ub, hb) {
            const Ob = (0, Bb.K)(bb);
            rb(Ob.auth, ub, bh), await Ob.auth._initializationPromise;
            const Gb = hO(Ob.auth, hb);
            await oO(Gb, Ob.auth);
            const Ub = await nO(Ob);
            return Gb._openRedirect(Ob.auth, ub, "reauthViaRedirect", Ub)
          }(bb, ub, hb)
        }

        function dO(bb, ub, hb) {
          return async function(bb, ub, hb) {
            const Ob = (0, Bb.K)(bb);
            rb(Ob.auth, ub, bh), await Ob.auth._initializationPromise;
            const Gb = hO(Ob.auth, hb);
            await lh(!1, Ob, ub.providerId), await oO(Gb, Ob.auth);
            const Ub = await nO(Ob);
            return Gb._openRedirect(Ob.auth, ub, "linkViaRedirect", Ub)
          }(bb, ub, hb)
        }
        async function rO(bb, ub) {
          return await vu(bb)._initializationPromise, jO(bb, ub, !1)
        }
        async function jO(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Bb = vu(bb),
            Ob = hO(Bb, ub),
            Gb = new pO(Bb, Ob, hb),
            Ub = await Gb.execute();
          return Ub && !hb && (delete Ub.user._redirectEventId, await Bb._persistUserIfCurrent(Ub.user), await Bb._setRedirectUser(null, ub)), Ub
        }
        async function nO(bb) {
          const ub = rB(`${bb.uid}:::`);
          return bb._redirectEventId = ub, await bb.auth._setRedirectUser(bb), await bb.auth._persistUserIfCurrent(bb), ub
        }
        class DO {
          constructor(bb) {
            this.auth = bb, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(bb) {
            this.consumers.add(bb), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, bb) && (this.sendToConsumer(this.queuedRedirectEvent, bb), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(bb) {
            this.consumers.delete(bb)
          }
          onEvent(bb) {
            if (this.hasEventBeenHandled(bb)) return !1;
            let ub = !1;
            return this.consumers.forEach((hb => {
              this.isEventForConsumer(bb, hb) && (ub = !0, this.sendToConsumer(bb, hb), this.saveEventToCache(bb))
            })), this.hasHandledPotentialRedirect || ! function(bb) {
              switch (bb.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return zO(bb);
                default:
                  return !1
              }
            }(bb) || (this.hasHandledPotentialRedirect = !0, ub || (this.queuedRedirectEvent = bb, ub = !0)), ub
          }
          sendToConsumer(bb, ub) {
            var hb;
            if (bb.error && !zO(bb)) {
              const Bb = (null === (hb = bb.error.code) || void 0 === hb ? void 0 : hb.split("auth/")[1]) || "internal-error";
              ub.onError(Cb(this.auth, Bb))
            } else ub.onAuthEvent(bb)
          }
          isEventForConsumer(bb, ub) {
            const hb = null === ub.eventId || !!bb.eventId && bb.eventId === ub.eventId;
            return ub.filter.includes(bb.type) && hb
          }
          hasEventBeenHandled(bb) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(xO(bb))
          }
          saveEventToCache(bb) {
            this.cachedEventUids.add(xO(bb)), this.lastProcessedEventTime = Date.now()
          }
        }

        function xO(bb) {
          return [bb.type, bb.eventId, bb.sessionId, bb.tenantId].filter((bb => bb)).join("-")
        }

        function zO(bb) {
          let {
            type: ub,
            error: hb
          } = bb;
          return "unknown" === ub && "auth/no-auth-event" === (null === hb || void 0 === hb ? void 0 : hb.code)
        }
        const gO = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          iO = /^https?/;
        async function vO(bb) {
          if (bb.config.emulator) return;
          const {
            authorizedDomains: ub
          } = await async function(bb) {
            return Mb(bb, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(bb);
          for (const Bb of ub) try {
            if (tO(Bb)) return
          } catch (hb) {}
          Wb(bb, "unauthorized-domain")
        }

        function tO(bb) {
          const ub = zb(),
            {
              protocol: hb,
              hostname: Bb
            } = new URL(ub);
          if (bb.startsWith("chrome-extension://")) {
            const Ob = new URL(bb);
            return "" === Ob.hostname && "" === Bb ? "chrome-extension:" === hb && bb.replace("chrome-extension://", "") === ub.replace("chrome-extension://", "") : "chrome-extension:" === hb && Ob.hostname === Bb
          }
          if (!iO.test(hb)) return !1;
          if (gO.test(bb)) return Bb === bb;
          const Ob = bb.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Ob + "|" + Ob + ")$", "i").test(Bb)
        }
        const JO = new vb(3e4, 6e4);

        function eO() {
          const bb = nB().___jsl;
          if (null === bb || void 0 === bb ? void 0 : bb.H)
            for (const ub of Object.keys(bb.H))
              if (bb.H[ub].r = bb.H[ub].r || [], bb.H[ub].L = bb.H[ub].L || [], bb.H[ub].r = [...bb.H[ub].L], bb.CP)
                for (let hb = 0; hb < bb.CP.length; hb++) bb.CP[hb] = null
        }
        let NO = null;

        function sO(bb) {
          return NO = NO || function(bb) {
            return new Promise(((ub, hb) => {
              var Bb, Ob, Gb;

              function Ub() {
                eO(), gapi.load("gapi.iframes", {
                  callback: () => {
                    ub(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    eO(), hb(Cb(bb, "network-request-failed"))
                  },
                  timeout: JO.get()
                })
              }
              if (null === (Ob = null === (Bb = nB().gapi) || void 0 === Bb ? void 0 : Bb.iframes) || void 0 === Ob ? void 0 : Ob.Iframe) ub(gapi.iframes.getContext());
              else {
                if (!(null === (Gb = nB().gapi) || void 0 === Gb ? void 0 : Gb.load)) {
                  const ub = Du("iframefcb");
                  return nB()[ub] = () => {
                    gapi.load ? Ub() : hb(Cb(bb, "network-request-failed"))
                  }, nu(`https://apis.google.com/js/api.js?onload=${ub}`).catch((bb => hb(bb)))
                }
                Ub()
              }
            })).catch((bb => {
              throw NO = null, bb
            }))
          }(bb), NO
        }
        const MO = new vb(5e3, 15e3),
          mO = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          IO = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function PO(bb) {
          const ub = bb.config;
          nb(ub.authDomain, bb, "auth-domain-config-required");
          const hb = ub.emulator ? tb(ub, "emulator/auth/iframe") : `https://${bb.config.authDomain}/__/auth/iframe`,
            Gb = {
              apiKey: ub.apiKey,
              appName: bb.name,
              v: Ob.e
            },
            Ub = IO.get(bb.config.apiHost);
          Ub && (Gb.eid = Ub);
          const Lb = bb._getFrameworks();
          return Lb.length && (Gb.fw = Lb.join(",")), `${hb}?${(0,Bb.fb)(Gb).slice(1)}`
        }
        const qO = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class EO {
          constructor(bb) {
            this.window = bb, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (bb) {}
          }
        }

        function yO(bb, ub, hb) {
          let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Ub = Math.max((window.screen.availHeight - Gb) / 2, 0).toString(),
            Lb = Math.max((window.screen.availWidth - Ob) / 2, 0).toString();
          let Yb = "";
          const Sb = Object.assign(Object.assign({}, qO), {
              width: Ob.toString(),
              height: Gb.toString(),
              top: Ub,
              left: Lb
            }),
            ab = (0, Bb.M)().toLowerCase();
          hb && (Yb = Zu(ab) ? "_blank" : hb), Hu(ab) && (ub = ub || "http://localhost", Sb.scrollbars = "yes");
          const Hb = Object.entries(Sb).reduce(((bb, ub) => {
            let [hb, Bb] = ub;
            return `${bb}${hb}=${Bb},`
          }), "");
          if (function() {
              var bb;
              return lu(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)()) && !!(null === (bb = window.navigator) || void 0 === bb ? void 0 : bb.standalone)
            }(ab) && "_self" !== Yb) return function(bb, ub) {
            const hb = document.createElement("a");
            hb.href = bb, hb.target = ub;
            const Bb = document.createEvent("MouseEvent");
            Bb.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), hb.dispatchEvent(Bb)
          }(ub || "", Yb), new EO(null);
          const wb = window.open(ub || "", Yb, Hb);
          nb(wb, bb, "popup-blocked");
          try {
            wb.focus()
          } catch (Zb) {}
          return new EO(wb)
        }
        const VO = "__/auth/handler",
          FO = "emulator/auth/handler",
          fO = encodeURIComponent("fac");
        async function kO(bb, ub, hb, Gb, Ub, Lb) {
            nb(bb.config.authDomain, bb, "auth-domain-config-required"), nb(bb.config.apiKey, bb, "invalid-api-key");
            const Yb = {
              apiKey: bb.config.apiKey,
              appName: bb.name,
              authType: hb,
              redirectUrl: Gb,
              v: Ob.e,
              eventId: Ub
            };
            if (ub instanceof bh) {
              ub.setDefaultLanguage(bb.languageCode), Yb.providerId = ub.providerId || "", (0, Bb.Q)(ub.getCustomParameters()) || (Yb.customParameters = JSON.stringify(ub.getCustomParameters()));
              for (const [bb, ub] of Object.entries(Lb || {})) Yb[bb] = ub
            }
            if (ub instanceof uh) {
              const bb = ub.getScopes().filter((bb => "" !== bb));
              bb.length > 0 && (Yb.scopes = bb.join(","))
            }
            bb.tenantId && (Yb.tid = bb.tenantId);
            const Sb = Yb;
            for (const Bb of Object.keys(Sb)) void 0 === Sb[Bb] && delete Sb[Bb];
            const ab = await bb._getAppCheckToken(),
              Hb = ab ? `#${fO}=${encodeURIComponent(ab)}` : "";
            return `${function(bb){let{config:ub}=bb;if(!ub.emulator)return`
            https: //${ub.authDomain}/${VO}`;return tb(ub,FO)}(bb)}?${(0,Bb.fb)(Sb).slice(1)}${Hb}`}const TO="webStorageSupport";const cO=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CB,this._completeRedirectFn=jO,this._overrideRedirectResult=AO}async _openPopup(bb,ub,hb,Bb){var Ob;xb(null===(Ob=this.eventManagers[bb._key()])||void 0===Ob?void 0:Ob.manager,"_initialize() not called before _openPopup()");return yO(bb,await kO(bb,ub,hb,zb(),Bb),rB())}async _openRedirect(bb,ub,hb,Bb){await this._originValidation(bb);return function(bb){nB().location.href=bb}(await kO(bb,ub,hb,zb(),Bb)),new Promise((()=>{}))}_initialize(bb){const ub=bb._key();if(this.eventManagers[ub]){const{manager:bb,promise:hb}=this.eventManagers[ub];return bb?Promise.resolve(bb):(xb(hb,"If manager is not set, promise should be"),hb)}const hb=this.initAndGetManager(bb);return this.eventManagers[ub]={promise:hb},hb.catch((()=>{delete this.eventManagers[ub]})),hb}async initAndGetManager(bb){const ub=await async function(bb){const ub=await sO(bb),hb=nB().gapi;return nb(hb,bb,"internal-error"),ub.open({where:document.body,url:PO(bb),messageHandlersFilter:hb.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mO,dontclear:!0},(ub=>new Promise((async(hb,Bb)=>{await ub.restyle({setHideOnLeave:!1});const Ob=Cb(bb,"network-request-failed"),Gb=nB().setTimeout((()=>{Bb(Ob)}),MO.get());function Ub(){nB().clearTimeout(Gb),hb(ub)}ub.ping(Ub).then(Ub,(()=>{Bb(Ob)}))}))))}(bb),hb=new DO(bb);return ub.register("authEvent",(ub=>{nb(null===ub||void 0===ub?void 0:ub.authEvent,bb,"invalid-auth-event");return{status:hb.onEvent(ub.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[bb._key()]={manager:hb},this.iframes[bb._key()]=ub,hb}_isIframeWebStorageSupported(bb,ub){this.iframes[bb._key()].send(TO,{type:TO},(hb=>{var Bb;const Ob=null===(Bb=null===hb||void 0===hb?void 0:hb[0])||void 0===Bb?void 0:Bb[TO];void 0!==Ob&&ub(!!Ob),Wb(bb,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(bb){const ub=bb._key();return this.originValidationPromises[ub]||(this.originValidationPromises[ub]=vO(bb)),this.originValidationPromises[ub]}get _shouldInitProactively(){return Ku()||wu()||lu()}};class QO{constructor(bb){this.factorId=bb}_process(bb,ub,hb){switch(ub.type){case"enroll":return this._finalizeEnroll(bb,ub.credential,hb);case"signin":return this._finalizeSignIn(bb,ub.credential);default:return Db("unexpected MultiFactorSessionType")}}}class RO extends QO{constructor(bb){super("phone"),this.credential=bb}static _fromCredential(bb){return new RO(bb)}_finalizeEnroll(bb,ub,hb){return function(bb,ub){return Mb(bb,"POST","/v2/accounts/mfaEnrollment:finalize",sb(bb,ub))}(bb,{idToken:ub,displayName:hb,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(bb,ub){return function(bb,ub){return Mb(bb,"POST","/v2/accounts/mfaSignIn:finalize",sb(bb,ub))}(bb,{mfaPendingCredential:ub,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bG{constructor(){}static assertion(bb){return RO._fromCredential(bb)}}bG.FACTOR_ID="phone";class uG{static assertionForEnrollment(bb,ub){return hG._fromSecret(bb,ub)}static assertionForSignIn(bb,ub){return hG._fromEnrollmentId(bb,ub)}static async generateSecret(bb){const ub=bb;nb("undefined"!==typeof ub.auth,"internal-error");const hb=await(Bb=ub.auth,Ob={idToken:ub.credential,totpEnrollmentInfo:{}},Mb(Bb,"POST","/v2/accounts/mfaEnrollment:start",sb(Bb,Ob)));var Bb,Ob;return BG._fromStartTotpMfaEnrollmentResponse(hb,ub.auth)}}uG.FACTOR_ID="totp";class hG extends QO{constructor(bb,ub,hb){super("totp"),this.otp=bb,this.enrollmentId=ub,this.secret=hb}static _fromSecret(bb,ub){return new hG(ub,void 0,bb)}static _fromEnrollmentId(bb,ub){return new hG(ub,bb)}async _finalizeEnroll(bb,ub,hb){return nb("undefined"!==typeof this.secret,bb,"argument-error"),function(bb,ub){return Mb(bb,"POST","/v2/accounts/mfaEnrollment:finalize",sb(bb,ub))}(bb,{idToken:ub,displayName:hb,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(bb,ub){nb(void 0!==this.enrollmentId&&void 0!==this.otp,bb,"argument-error");const hb={verificationCode:this.otp};return function(bb,ub){return Mb(bb,"POST","/v2/accounts/mfaSignIn:finalize",sb(bb,ub))}(bb,{mfaPendingCredential:ub,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:hb})}}class BG{constructor(bb,ub,hb,Bb,Ob,Gb,Ub){this.sessionInfo=Gb,this.auth=Ub,this.secretKey=bb,this.hashingAlgorithm=ub,this.codeLength=hb,this.codeIntervalSeconds=Bb,this.enrollmentCompletionDeadline=Ob}static _fromStartTotpMfaEnrollmentResponse(bb,ub){return new BG(bb.totpSessionInfo.sharedSecretKey,bb.totpSessionInfo.hashingAlgorithm,bb.totpSessionInfo.verificationCodeLength,bb.totpSessionInfo.periodSec,new Date(bb.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),bb.totpSessionInfo.sessionInfo,ub)}_makeTotpVerificationInfo(bb){return{sessionInfo:this.sessionInfo,verificationCode:bb}}generateQrCodeUrl(bb,ub){var hb;let Bb=!1;return(OG(bb)||OG(ub))&&(Bb=!0),Bb&&(OG(bb)&&(bb=(null===(hb=this.auth.currentUser)||void 0===hb?void 0:hb.email)||"unknownuser"),OG(ub)&&(ub=this.auth.name)),`otpauth://totp/${ub}:${bb}?secret=${this.secretKey}&issuer=${ub}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function OG(bb){return"undefined"===typeof bb||0===(null===bb||void 0===bb?void 0:bb.length)}var GG="@firebase/auth",UG="0.23.2";class LG{constructor(bb){this.auth=bb,this.internalListeners=new Map}getUid(){var bb;return this.assertAuthConfigured(),(null===(bb=this.auth.currentUser)||void 0===bb?void 0:bb.uid)||null}async getToken(bb){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(bb)}}addAuthTokenListener(bb){if(this.assertAuthConfigured(),this.internalListeners.has(bb))return;const ub=this.auth.onIdTokenChanged((ub=>{bb((null===ub||void 0===ub?void 0:ub.stsTokenManager.accessToken)||null)}));this.internalListeners.set(bb,ub),this.updateProactiveRefresh()}removeAuthTokenListener(bb){this.assertAuthConfigured();const ub=this.internalListeners.get(bb);ub&&(this.internalListeners.delete(bb),ub(),this.updateProactiveRefresh())}assertAuthConfigured(){nb(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const YG=(0,Bb.H)("authIdTokenMaxAge")||300;let SG=null;const aG=bb=>async ub=>{const hb=ub&&await ub.getIdTokenResult(),Bb=hb&&((new Date).getTime()-Date.parse(hb.issuedAtTime))/1e3;if(Bb&&Bb>YG)return;const Ob=null===hb||void 0===hb?void 0:hb.token;SG!==Ob&&(SG=Ob,await fetch(bb,{method:Ob?"POST":"DELETE",headers:Ob?{Authorization:`Bearer ${Ob}`}:{}}))};function HG(){let bb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Ob.L)();const ub=(0,Ob.z)(bb,"auth");if(ub.isInitialized())return ub.getImmediate();const hb=Ju(bb,{popupRedirectResolver:cO,persistence:[sB,KB,CB]}),Gb=(0,Bb.H)("authTokenSyncURL");if(Gb){const bb=aG(Gb);OB(hb,bb,(()=>bb(hb.currentUser))),BB(hb,(ub=>bb(ub)))}const Ub=(0,Bb.E)("auth");return Ub&&eu(hb,`http://${Ub}`),hb}var wG;wG="Browser",(0,Ob.D)(new Lb.f("auth",((bb,ub)=>{let{options:hb}=ub;const Bb=bb.getProvider("app").getImmediate(),Ob=bb.getProvider("heartbeat"),Gb=bb.getProvider("app-check-internal"),{apiKey:Ub,authDomain:Lb}=Bb.options;nb(Ub&&!Ub.includes(":"),"invalid-api-key",{appName:Bb.name});const Yb={apiKey:Ub,authDomain:Lb,clientPlatform:wG,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wu(wG)},Sb=new iu(Bb,Ob,Gb,Yb);return function(bb,ub){const hb=(null===ub||void 0===ub?void 0:ub.persistence)||[],Bb=(Array.isArray(hb)?hb:[hb]).map(Gu);(null===ub||void 0===ub?void 0:ub.errorMap)&&bb._updateErrorMap(ub.errorMap),bb._initializeWithPersistence(Bb,null===ub||void 0===ub?void 0:ub.popupRedirectResolver)}(Sb,hb),Sb}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((bb,ub,hb)=>{bb.getProvider("auth-internal").initialize()}))),(0,Ob.D)(new Lb.f("auth-internal",(bb=>(bb=>new LG(bb))(vu(bb.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Ob.R)(GG,UG,function(bb){switch(bb){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(wG)),(0,Ob.R)(GG,UG,"esm2017")}};Object.freeze(modules);for(const bb in modules)Object.freeze(modules[bb]);