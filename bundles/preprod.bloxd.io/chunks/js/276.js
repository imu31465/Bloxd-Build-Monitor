/*! For license information please see 8104he.276.7679a5b6.chunk.js.LICENSE.txt */
export const id = 276;
export const ids = [276];
export const modules = {
    40779: (QQ, WQ, XQ) => {
        XQ.r(WQ), XQ.d(WQ, {
          ActionCodeOperation: () => rQ,
          ActionCodeURL: () => KW,
          AuthCredential: () => kW,
          AuthErrorCodes: () => VQ,
          EmailAuthCredential: () => xW,
          EmailAuthProvider: () => MW,
          FacebookAuthProvider: () => wX,
          FactorId: () => FQ,
          GithubAuthProvider: () => TX,
          GoogleAuthProvider: () => qX,
          OAuthCredential: () => NW,
          OAuthProvider: () => XX,
          OperationType: () => JQ,
          PhoneAuthCredential: () => OW,
          PhoneAuthProvider: () => Xq,
          PhoneMultiFactorGenerator: () => WT,
          ProviderId: () => PQ,
          RecaptchaVerifier: () => Zw,
          SAMLAuthProvider: () => sX,
          SignInMethod: () => gQ,
          TotpMultiFactorGenerator: () => XT,
          TotpSecret: () => qT,
          TwitterAuthProvider: () => FX,
          applyActionCode: () => AX,
          beforeAuthStateChanged: () => qw,
          browserLocalPersistence: () => pw,
          browserPopupRedirectResolver: () => mq,
          browserSessionPersistence: () => Uw,
          checkActionCode: () => RX,
          confirmPasswordReset: () => cX,
          connectAuthEmulator: () => CW,
          createUserWithEmailAndPassword: () => CX,
          debugErrorMap: () => jQ,
          deleteUser: () => Pw,
          fetchSignInMethodsForEmail: () => SX,
          getAdditionalUserInfo: () => Qw,
          getAuth: () => rT,
          getIdToken: () => xQ,
          getIdTokenResult: () => YQ,
          getMultiFactorResolver: () => rw,
          getRedirectResult: () => dq,
          inMemoryPersistence: () => sW,
          indexedDBLocalPersistence: () => kw,
          initializeAuth: () => EW,
          initializeRecaptchaConfig: () => Xw,
          isSignInWithEmailLink: () => kX,
          linkWithCredential: () => bX,
          linkWithPhoneNumber: () => mw,
          linkWithPopup: () => rq,
          linkWithRedirect: () => vq,
          multiFactor: () => Bw,
          onAuthStateChanged: () => Tw,
          onIdTokenChanged: () => ww,
          parseActionCodeURL: () => mW,
          prodErrorMap: () => BQ,
          reauthenticateWithCredential: () => vX,
          reauthenticateWithPhoneNumber: () => Mw,
          reauthenticateWithPopup: () => Jq,
          reauthenticateWithRedirect: () => bq,
          reload: () => QW,
          sendEmailVerification: () => tX,
          sendPasswordResetEmail: () => iX,
          sendSignInLinkToEmail: () => LX,
          setPersistence: () => Ww,
          signInAnonymously: () => rX,
          signInWithCredential: () => UX,
          signInWithCustomToken: () => dX,
          signInWithEmailAndPassword: () => uX,
          signInWithEmailLink: () => fX,
          signInWithPhoneNumber: () => Kw,
          signInWithPopup: () => gq,
          signInWithRedirect: () => Uq,
          signOut: () => Fw,
          unlink: () => yX,
          updateCurrentUser: () => sw,
          updateEmail: () => nX,
          updatePassword: () => xX,
          updatePhoneNumber: () => Wq,
          updateProfile: () => eX,
          useDeviceLanguage: () => zw,
          verifyBeforeUpdateEmail: () => oX,
          verifyPasswordResetCode: () => EX
        });
        var wQ = XQ(40761),
          qQ = XQ(40755);

        function TQ(QQ, WQ) {
          var XQ = {};
          for (var wQ in QQ) Object.prototype.hasOwnProperty.call(QQ, wQ) && WQ.indexOf(wQ) < 0 && (XQ[wQ] = QQ[wQ]);
          if (null != QQ && "function" === typeof Object.getOwnPropertySymbols) {
            var qQ = 0;
            for (wQ = Object.getOwnPropertySymbols(QQ); qQ < wQ.length; qQ++) WQ.indexOf(wQ[qQ]) < 0 && Object.prototype.propertyIsEnumerable.call(QQ, wQ[qQ]) && (XQ[wQ[qQ]] = QQ[wQ[qQ]])
          }
          return XQ
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var zQ = XQ(40770),
          sQ = XQ(40758);
        const FQ = {
            PHONE: "phone",
            TOTP: "totp"
          },
          PQ = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          gQ = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          JQ = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          rQ = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function IQ() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const jQ = function() {
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
          BQ = IQ,
          yQ = new wQ.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          VQ = {
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
          DQ = new zQ.e("@firebase/auth");

        function pQ(QQ) {
          if (DQ.logLevel <= zQ.b.ERROR) {
            for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
            DQ.error(`Auth (${qQ.g}): ${QQ}`, ...XQ)
          }
        }

        function GQ(QQ) {
          for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
          throw dQ(QQ, ...XQ)
        }

        function UQ(QQ) {
          for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
          return dQ(QQ, ...XQ)
        }

        function bQ(QQ, WQ, XQ) {
          const qQ = Object.assign(Object.assign({}, BQ()), {
            [WQ]: XQ
          });
          return new wQ.h("auth", "Firebase", qQ).create(WQ, {
            appName: QQ.name
          })
        }

        function vQ(QQ, WQ, XQ) {
          if (!(WQ instanceof XQ)) throw XQ.name !== WQ.constructor.name && GQ(QQ, "argument-error"), bQ(QQ, "argument-error", `Type of ${WQ.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function dQ(QQ) {
          for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
          if ("string" !== typeof QQ) {
            const WQ = XQ[0],
              wQ = [...XQ.slice(1)];
            return wQ[0] && (wQ[0].appName = QQ.name), QQ._errorFactory.create(WQ, ...wQ)
          }
          return yQ.create(QQ, ...XQ)
        }

        function HQ(QQ, WQ) {
          if (!QQ) {
            for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ];
            throw dQ(WQ, ...wQ)
          }
        }

        function aQ(QQ) {
          const WQ = "INTERNAL ASSERTION FAILED: " + QQ;
          throw pQ(WQ), new Error(WQ)
        }

        function lQ(QQ, WQ) {
          QQ || aQ(WQ)
        }

        function hQ() {
          var QQ;
          return "undefined" !== typeof self && (null === (QQ = self.location) || void 0 === QQ ? void 0 : QQ.href) || ""
        }

        function iQ() {
          return "http:" === cQ() || "https:" === cQ()
        }

        function cQ() {
          var QQ;
          return "undefined" !== typeof self && (null === (QQ = self.location) || void 0 === QQ ? void 0 : QQ.protocol) || null
        }
        class AQ {
          constructor(QQ, WQ) {
            this.shortDelay = QQ, this.longDelay = WQ, lQ(WQ > QQ, "Short delay should be less than long delay!"), this.isMobile = (0, wQ._)() || (0, wQ.$)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (iQ() || (0, wQ.R)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function RQ(QQ, WQ) {
          lQ(QQ.emulator, "Emulator should always be set here");
          const {
            url: XQ
          } = QQ.emulator;
          return WQ ? `${XQ}${WQ.startsWith("/")?WQ.slice(1):WQ}` : XQ
        }
        class EQ {
          static initialize(QQ, WQ, XQ) {
            this.fetchImpl = QQ, WQ && (this.headersImpl = WQ), XQ && (this.responseImpl = XQ)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void aQ("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void aQ("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void aQ("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const CQ = {
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
          uQ = new AQ(3e4, 6e4);

        function LQ(QQ, WQ) {
          return QQ.tenantId && !WQ.tenantId ? Object.assign(Object.assign({}, WQ), {
            tenantId: QQ.tenantId
          }) : WQ
        }
        async function kQ(QQ, WQ, XQ, qQ) {
          return fQ(QQ, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let TQ = {},
              zQ = {};
            qQ && ("GET" === WQ ? zQ = qQ : TQ = {
              body: JSON.stringify(qQ)
            });
            const sQ = (0, wQ.eb)(Object.assign({
                key: QQ.config.apiKey
              }, zQ)).slice(1),
              FQ = await QQ._getAdditionalHeaders();
            return FQ["Content-Type"] = "application/json", QQ.languageCode && (FQ["X-Firebase-Locale"] = QQ.languageCode), EQ.fetch()(tQ(QQ, QQ.config.apiHost, XQ, sQ), Object.assign({
              method: WQ,
              headers: FQ,
              referrerPolicy: "no-referrer"
            }, TQ))
          }))
        }
        async function fQ(QQ, WQ, XQ) {
          QQ._canInitEmulator = !1;
          const qQ = Object.assign(Object.assign({}, CQ), WQ);
          try {
            const WQ = new oQ(QQ),
              wQ = await Promise.race([XQ(), WQ.promise]);
            WQ.clearNetworkTimeout();
            const TQ = await wQ.json();
            if ("needConfirmation" in TQ) throw eQ(QQ, "account-exists-with-different-credential", TQ);
            if (wQ.ok && !("errorMessage" in TQ)) return TQ;
            {
              const WQ = wQ.ok ? TQ.errorMessage : TQ.error.message,
                [XQ, zQ] = WQ.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === XQ) throw eQ(QQ, "credential-already-in-use", TQ);
              if ("EMAIL_EXISTS" === XQ) throw eQ(QQ, "email-already-in-use", TQ);
              if ("USER_DISABLED" === XQ) throw eQ(QQ, "user-disabled", TQ);
              const sQ = qQ[XQ] || XQ.toLowerCase().replace(/[_\s]+/g, "-");
              if (zQ) throw bQ(QQ, sQ, zQ);
              GQ(QQ, sQ)
            }
          } catch (TQ) {
            if (TQ instanceof wQ.k) throw TQ;
            GQ(QQ, "network-request-failed", {
              message: String(TQ)
            })
          }
        }
        async function SQ(QQ, WQ, XQ, wQ) {
          let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const TQ = await kQ(QQ, WQ, XQ, wQ, qQ);
          return "mfaPendingCredential" in TQ && GQ(QQ, "multi-factor-auth-required", {
            _serverResponse: TQ
          }), TQ
        }

        function tQ(QQ, WQ, XQ, wQ) {
          const qQ = `${WQ}${XQ}?${wQ}`;
          return QQ.config.emulator ? RQ(QQ.config, qQ) : `${QQ.config.apiScheme}://${qQ}`
        }
        class oQ {
          constructor(QQ) {
            this.auth = QQ, this.timer = null, this.promise = new Promise(((QQ, WQ) => {
              this.timer = setTimeout((() => WQ(UQ(this.auth, "network-request-failed"))), uQ.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function eQ(QQ, WQ, XQ) {
          const wQ = {
            appName: QQ.name
          };
          XQ.email && (wQ.email = XQ.email), XQ.phoneNumber && (wQ.phoneNumber = XQ.phoneNumber);
          const qQ = UQ(QQ, WQ, wQ);
          return qQ.customData._tokenResponse = XQ, qQ
        }

        function nQ(QQ) {
          if (QQ) try {
            const WQ = new Date(Number(QQ));
            if (!isNaN(WQ.getTime())) return WQ.toUTCString()
          } catch (WQ) {}
        }

        function xQ(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, wQ.L)(QQ).getIdToken(WQ)
        }
        async function YQ(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const XQ = (0, wQ.L)(QQ),
            qQ = await XQ.getIdToken(WQ),
            TQ = ZQ(qQ);
          HQ(TQ && TQ.exp && TQ.auth_time && TQ.iat, XQ.auth, "internal-error");
          const zQ = "object" === typeof TQ.firebase ? TQ.firebase : void 0,
            sQ = null === zQ || void 0 === zQ ? void 0 : zQ.sign_in_provider;
          return {
            claims: TQ,
            token: qQ,
            authTime: nQ(NQ(TQ.auth_time)),
            issuedAtTime: nQ(NQ(TQ.iat)),
            expirationTime: nQ(NQ(TQ.exp)),
            signInProvider: sQ || null,
            signInSecondFactor: (null === zQ || void 0 === zQ ? void 0 : zQ.sign_in_second_factor) || null
          }
        }

        function NQ(QQ) {
          return 1e3 * Number(QQ)
        }

        function ZQ(QQ) {
          const [WQ, XQ, qQ] = QQ.split(".");
          if (void 0 === WQ || void 0 === XQ || void 0 === qQ) return pQ("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const QQ = (0, wQ.q)(XQ);
            return QQ ? JSON.parse(QQ) : (pQ("Failed to decode base64 JWT payload"), null)
          } catch (TQ) {
            return pQ("Caught error parsing JWT payload as JSON", null === TQ || void 0 === TQ ? void 0 : TQ.toString()), null
          }
        }
        async function OQ(QQ, WQ) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return WQ;
          try {
            return await WQ
          } catch (XQ) {
            throw XQ instanceof wQ.k && function(QQ) {
              let {
                code: WQ
              } = QQ;
              return "auth/user-disabled" === WQ || "auth/user-token-expired" === WQ
            }(XQ) && QQ.auth.currentUser === QQ && await QQ.auth.signOut(), XQ
          }
        }
        class KQ {
          constructor(QQ) {
            this.user = QQ, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(QQ) {
            var WQ;
            if (QQ) {
              const QQ = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), QQ
            } {
              this.errorBackoff = 3e4;
              const QQ = (null !== (WQ = this.user.stsTokenManager.expirationTime) && void 0 !== WQ ? WQ : 0) - Date.now() - 3e5;
              return Math.max(0, QQ)
            }
          }
          schedule() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const WQ = this.getInterval(QQ);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), WQ)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (QQ) {
              return void("auth/network-request-failed" === (null === QQ || void 0 === QQ ? void 0 : QQ.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class mQ {
          constructor(QQ, WQ) {
            this.createdAt = QQ, this.lastLoginAt = WQ, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = nQ(this.lastLoginAt), this.creationTime = nQ(this.createdAt)
          }
          _copy(QQ) {
            this.createdAt = QQ.createdAt, this.lastLoginAt = QQ.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function MQ(QQ) {
          var WQ;
          const XQ = QQ.auth,
            wQ = await QQ.getIdToken(),
            qQ = await OQ(QQ, async function(QQ, WQ) {
              return kQ(QQ, "POST", "/v1/accounts:lookup", WQ)
            }(XQ, {
              idToken: wQ
            }));
          HQ(null === qQ || void 0 === qQ ? void 0 : qQ.users.length, XQ, "internal-error");
          const zQ = qQ.users[0];
          QQ._notifyReloadListener(zQ);
          const sQ = (null === (WQ = zQ.providerUserInfo) || void 0 === WQ ? void 0 : WQ.length) ? zQ.providerUserInfo.map((QQ => {
            var {
              providerId: WQ
            } = QQ, XQ = TQ(QQ, ["providerId"]);
            return {
              providerId: WQ,
              uid: XQ.rawId || "",
              displayName: XQ.displayName || null,
              email: XQ.email || null,
              phoneNumber: XQ.phoneNumber || null,
              photoURL: XQ.photoUrl || null
            }
          })) : [];
          const FQ = (PQ = QQ.providerData, gQ = sQ, [...PQ.filter((QQ => !gQ.some((WQ => WQ.providerId === QQ.providerId)))), ...gQ]);
          var PQ, gQ;
          const JQ = QQ.isAnonymous,
            rQ = !(QQ.email && zQ.passwordHash) && !(null === FQ || void 0 === FQ ? void 0 : FQ.length),
            IQ = !!JQ && rQ,
            jQ = {
              uid: zQ.localId,
              displayName: zQ.displayName || null,
              photoURL: zQ.photoUrl || null,
              email: zQ.email || null,
              emailVerified: zQ.emailVerified || !1,
              phoneNumber: zQ.phoneNumber || null,
              tenantId: zQ.tenantId || null,
              providerData: FQ,
              metadata: new mQ(zQ.createdAt, zQ.lastLoginAt),
              isAnonymous: IQ
            };
          Object.assign(QQ, jQ)
        }
        async function QW(QQ) {
          const WQ = (0, wQ.L)(QQ);
          await MQ(WQ), await WQ.auth._persistUserIfCurrent(WQ), WQ.auth._notifyListenersIfCurrent(WQ)
        }
        class WW {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(QQ) {
            HQ(QQ.idToken, "internal-error"), HQ("undefined" !== typeof QQ.idToken, "internal-error"), HQ("undefined" !== typeof QQ.refreshToken, "internal-error");
            const WQ = "expiresIn" in QQ && "undefined" !== typeof QQ.expiresIn ? Number(QQ.expiresIn) : function(QQ) {
              const WQ = ZQ(QQ);
              return HQ(WQ, "internal-error"), HQ("undefined" !== typeof WQ.exp, "internal-error"), HQ("undefined" !== typeof WQ.iat, "internal-error"), Number(WQ.exp) - Number(WQ.iat)
            }(QQ.idToken);
            this.updateTokensAndExpiration(QQ.idToken, QQ.refreshToken, WQ)
          }
          async getToken(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return HQ(!this.accessToken || this.refreshToken, QQ, "user-token-expired"), WQ || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(QQ, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(QQ, WQ) {
            const {
              accessToken: XQ,
              refreshToken: qQ,
              expiresIn: TQ
            } = await async function(QQ, WQ) {
              const XQ = await fQ(QQ, {}, (async () => {
                const XQ = (0, wQ.eb)({
                    grant_type: "refresh_token",
                    refresh_token: WQ
                  }).slice(1),
                  {
                    tokenApiHost: qQ,
                    apiKey: TQ
                  } = QQ.config,
                  zQ = tQ(QQ, qQ, "/v1/token", `key=${TQ}`),
                  sQ = await QQ._getAdditionalHeaders();
                return sQ["Content-Type"] = "application/x-www-form-urlencoded", EQ.fetch()(zQ, {
                  method: "POST",
                  headers: sQ,
                  body: XQ
                })
              }));
              return {
                accessToken: XQ.access_token,
                expiresIn: XQ.expires_in,
                refreshToken: XQ.refresh_token
              }
            }(QQ, WQ);
            this.updateTokensAndExpiration(XQ, qQ, Number(TQ))
          }
          updateTokensAndExpiration(QQ, WQ, XQ) {
            this.refreshToken = WQ || null, this.accessToken = QQ || null, this.expirationTime = Date.now() + 1e3 * XQ
          }
          static fromJSON(QQ, WQ) {
            const {
              refreshToken: XQ,
              accessToken: wQ,
              expirationTime: qQ
            } = WQ, TQ = new WW;
            return XQ && (HQ("string" === typeof XQ, "internal-error", {
              appName: QQ
            }), TQ.refreshToken = XQ), wQ && (HQ("string" === typeof wQ, "internal-error", {
              appName: QQ
            }), TQ.accessToken = wQ), qQ && (HQ("number" === typeof qQ, "internal-error", {
              appName: QQ
            }), TQ.expirationTime = qQ), TQ
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(QQ) {
            this.accessToken = QQ.accessToken, this.refreshToken = QQ.refreshToken, this.expirationTime = QQ.expirationTime
          }
          _clone() {
            return Object.assign(new WW, this.toJSON())
          }
          _performRefresh() {
            return aQ("not implemented")
          }
        }

        function XW(QQ, WQ) {
          HQ("string" === typeof QQ || "undefined" === typeof QQ, "internal-error", {
            appName: WQ
          })
        }
        class wW {
          constructor(QQ) {
            var {
              uid: WQ,
              auth: XQ,
              stsTokenManager: wQ
            } = QQ, qQ = TQ(QQ, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new KQ(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = WQ, this.auth = XQ, this.stsTokenManager = wQ, this.accessToken = wQ.accessToken, this.displayName = qQ.displayName || null, this.email = qQ.email || null, this.emailVerified = qQ.emailVerified || !1, this.phoneNumber = qQ.phoneNumber || null, this.photoURL = qQ.photoURL || null, this.isAnonymous = qQ.isAnonymous || !1, this.tenantId = qQ.tenantId || null, this.providerData = qQ.providerData ? [...qQ.providerData] : [], this.metadata = new mQ(qQ.createdAt || void 0, qQ.lastLoginAt || void 0)
          }
          async getIdToken(QQ) {
            const WQ = await OQ(this, this.stsTokenManager.getToken(this.auth, QQ));
            return HQ(WQ, this.auth, "internal-error"), this.accessToken !== WQ && (this.accessToken = WQ, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), WQ
          }
          getIdTokenResult(QQ) {
            return YQ(this, QQ)
          }
          reload() {
            return QW(this)
          }
          _assign(QQ) {
            this !== QQ && (HQ(this.uid === QQ.uid, this.auth, "internal-error"), this.displayName = QQ.displayName, this.photoURL = QQ.photoURL, this.email = QQ.email, this.emailVerified = QQ.emailVerified, this.phoneNumber = QQ.phoneNumber, this.isAnonymous = QQ.isAnonymous, this.tenantId = QQ.tenantId, this.providerData = QQ.providerData.map((QQ => Object.assign({}, QQ))), this.metadata._copy(QQ.metadata), this.stsTokenManager._assign(QQ.stsTokenManager))
          }
          _clone(QQ) {
            const WQ = new wW(Object.assign(Object.assign({}, this), {
              auth: QQ,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return WQ.metadata._copy(this.metadata), WQ
          }
          _onReload(QQ) {
            HQ(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = QQ, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(QQ) {
            this.reloadListener ? this.reloadListener(QQ) : this.reloadUserInfo = QQ
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              XQ = !1;
            QQ.idToken && QQ.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(QQ), XQ = !0), WQ && await MQ(this), await this.auth._persistUserIfCurrent(this), XQ && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const QQ = await this.getIdToken();
            return await OQ(this, async function(QQ, WQ) {
              return kQ(QQ, "POST", "/v1/accounts:delete", WQ)
            }(this.auth, {
              idToken: QQ
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
              providerData: this.providerData.map((QQ => Object.assign({}, QQ))),
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
          static _fromJSON(QQ, WQ) {
            var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
            const gQ = null !== (XQ = WQ.displayName) && void 0 !== XQ ? XQ : void 0,
              JQ = null !== (wQ = WQ.email) && void 0 !== wQ ? wQ : void 0,
              rQ = null !== (qQ = WQ.phoneNumber) && void 0 !== qQ ? qQ : void 0,
              IQ = null !== (TQ = WQ.photoURL) && void 0 !== TQ ? TQ : void 0,
              jQ = null !== (zQ = WQ.tenantId) && void 0 !== zQ ? zQ : void 0,
              BQ = null !== (sQ = WQ._redirectEventId) && void 0 !== sQ ? sQ : void 0,
              yQ = null !== (FQ = WQ.createdAt) && void 0 !== FQ ? FQ : void 0,
              VQ = null !== (PQ = WQ.lastLoginAt) && void 0 !== PQ ? PQ : void 0,
              {
                uid: DQ,
                emailVerified: pQ,
                isAnonymous: GQ,
                providerData: UQ,
                stsTokenManager: bQ
              } = WQ;
            HQ(DQ && bQ, QQ, "internal-error");
            const vQ = WW.fromJSON(this.name, bQ);
            HQ("string" === typeof DQ, QQ, "internal-error"), XW(gQ, QQ.name), XW(JQ, QQ.name), HQ("boolean" === typeof pQ, QQ, "internal-error"), HQ("boolean" === typeof GQ, QQ, "internal-error"), XW(rQ, QQ.name), XW(IQ, QQ.name), XW(jQ, QQ.name), XW(BQ, QQ.name), XW(yQ, QQ.name), XW(VQ, QQ.name);
            const dQ = new wW({
              uid: DQ,
              auth: QQ,
              email: JQ,
              emailVerified: pQ,
              displayName: gQ,
              isAnonymous: GQ,
              photoURL: IQ,
              phoneNumber: rQ,
              tenantId: jQ,
              stsTokenManager: vQ,
              createdAt: yQ,
              lastLoginAt: VQ
            });
            return UQ && Array.isArray(UQ) && (dQ.providerData = UQ.map((QQ => Object.assign({}, QQ)))), BQ && (dQ._redirectEventId = BQ), dQ
          }
          static async _fromIdTokenResponse(QQ, WQ) {
            let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const wQ = new WW;
            wQ.updateFromServerResponse(WQ);
            const qQ = new wW({
              uid: WQ.localId,
              auth: QQ,
              stsTokenManager: wQ,
              isAnonymous: XQ
            });
            return await MQ(qQ), qQ
          }
        }
        const qW = new Map;

        function TW(QQ) {
          lQ(QQ instanceof Function, "Expected a class definition");
          let WQ = qW.get(QQ);
          return WQ ? (lQ(WQ instanceof QQ, "Instance stored in cache mismatched with class"), WQ) : (WQ = new QQ, qW.set(QQ, WQ), WQ)
        }
        class zW {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(QQ, WQ) {
            this.storage[QQ] = WQ
          }
          async _get(QQ) {
            const WQ = this.storage[QQ];
            return void 0 === WQ ? null : WQ
          }
          async _remove(QQ) {
            delete this.storage[QQ]
          }
          _addListener(QQ, WQ) {}
          _removeListener(QQ, WQ) {}
        }
        zW.type = "NONE";
        const sW = zW;

        function FW(QQ, WQ, XQ) {
          return `firebase:${QQ}:${WQ}:${XQ}`
        }
        class PW {
          constructor(QQ, WQ, XQ) {
            this.persistence = QQ, this.auth = WQ, this.userKey = XQ;
            const {
              config: wQ,
              name: qQ
            } = this.auth;
            this.fullUserKey = FW(this.userKey, wQ.apiKey, qQ), this.fullPersistenceKey = FW("persistence", wQ.apiKey, qQ), this.boundEventHandler = WQ._onStorageEvent.bind(WQ), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(QQ) {
            return this.persistence._set(this.fullUserKey, QQ.toJSON())
          }
          async getCurrentUser() {
            const QQ = await this.persistence._get(this.fullUserKey);
            return QQ ? wW._fromJSON(this.auth, QQ) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(QQ) {
            if (this.persistence === QQ) return;
            const WQ = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = QQ, WQ ? this.setCurrentUser(WQ) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(QQ, WQ) {
            let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!WQ.length) return new PW(TW(sW), QQ, XQ);
            const wQ = (await Promise.all(WQ.map((async QQ => {
              if (await QQ._isAvailable()) return QQ
            })))).filter((QQ => QQ));
            let qQ = wQ[0] || TW(sW);
            const TQ = FW(XQ, QQ.config.apiKey, QQ.name);
            let zQ = null;
            for (const PQ of WQ) try {
              const WQ = await PQ._get(TQ);
              if (WQ) {
                const XQ = wW._fromJSON(QQ, WQ);
                PQ !== qQ && (zQ = XQ), qQ = PQ;
                break
              }
            } catch (FQ) {}
            const sQ = wQ.filter((QQ => QQ._shouldAllowMigration));
            return qQ._shouldAllowMigration && sQ.length ? (qQ = sQ[0], zQ && await qQ._set(TQ, zQ.toJSON()), await Promise.all(WQ.map((async QQ => {
              if (QQ !== qQ) try {
                await QQ._remove(TQ)
              } catch (FQ) {}
            }))), new PW(qQ, QQ, XQ)) : new PW(qQ, QQ, XQ)
          }
        }

        function gW(QQ) {
          const WQ = QQ.toLowerCase();
          if (WQ.includes("opera/") || WQ.includes("opr/") || WQ.includes("opios/")) return "Opera";
          if (jW(WQ)) return "IEMobile";
          if (WQ.includes("msie") || WQ.includes("trident/")) return "IE";
          if (WQ.includes("edge/")) return "Edge";
          if (JW(WQ)) return "Firefox";
          if (WQ.includes("silk/")) return "Silk";
          if (yW(WQ)) return "Blackberry";
          if (VW(WQ)) return "Webos";
          if (rW(WQ)) return "Safari";
          if ((WQ.includes("chrome/") || IW(WQ)) && !WQ.includes("edge/")) return "Chrome";
          if (BW(WQ)) return "Android";
          {
            const WQ = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              XQ = QQ.match(WQ);
            if (2 === (null === XQ || void 0 === XQ ? void 0 : XQ.length)) return XQ[1]
          }
          return "Other"
        }

        function JW() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
          return /firefox\//i.test(QQ)
        }

        function rW() {
          const QQ = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)()).toLowerCase();
          return QQ.includes("safari/") && !QQ.includes("chrome/") && !QQ.includes("crios/") && !QQ.includes("android")
        }

        function IW() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
          return /crios\//i.test(QQ)
        }

        function jW() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
          return /iemobile/i.test(QQ)
        }

        function BW() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
          return /android/i.test(QQ)
        }

        function yW() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
          return /blackberry/i.test(QQ)
        }

        function VW() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
          return /webos/i.test(QQ)
        }

        function DW() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
          return /iphone|ipad|ipod/i.test(QQ) || /macintosh/i.test(QQ) && /mobile/i.test(QQ)
        }

        function pW() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
          return DW(QQ) || BW(QQ) || VW(QQ) || yW(QQ) || /windows phone/i.test(QQ) || jW(QQ)
        }

        function GW(QQ) {
          let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (QQ) {
            case "Browser":
              WQ = gW((0, wQ.N)());
              break;
            case "Worker":
              WQ = `${gW((0,wQ.N)())}-${QQ}`;
              break;
            default:
              WQ = QQ
          }
          const TQ = XQ.length ? XQ.join(",") : "FirebaseCore-web";
          return `${WQ}/JsCore/${qQ.g}/${TQ}`
        }
        async function UW(QQ, WQ) {
          return kQ(QQ, "GET", "/v2/recaptchaConfig", LQ(QQ, WQ))
        }

        function bW(QQ) {
          return void 0 !== QQ && void 0 !== QQ.getResponse
        }

        function vW(QQ) {
          return void 0 !== QQ && void 0 !== QQ.enterprise
        }
        class dW {
          constructor(QQ) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === QQ.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = QQ.recaptchaKey.split("/")[3], this.emailPasswordEnabled = QQ.recaptchaEnforcementState.some((QQ => "EMAIL_PASSWORD_PROVIDER" === QQ.provider && "OFF" !== QQ.enforcementState))
          }
        }

        function HW(QQ) {
          return new Promise(((WQ, XQ) => {
            const wQ = document.createElement("script");
            wQ.setAttribute("src", QQ), wQ.onload = WQ, wQ.onerror = QQ => {
                const WQ = UQ("internal-error");
                WQ.customData = QQ, XQ(WQ)
              }, wQ.type = "text/javascript", wQ.charset = "UTF-8",
              function() {
                var QQ, WQ;
                return null !== (WQ = null === (QQ = document.getElementsByTagName("head")) || void 0 === QQ ? void 0 : QQ[0]) && void 0 !== WQ ? WQ : document
              }().appendChild(wQ)
          }))
        }

        function aW(QQ) {
          return `__${QQ}${Math.floor(1e6*Math.random())}`
        }
        class lW {
          constructor(QQ) {
            this.type = "recaptcha-enterprise", this.auth = AW(QQ)
          }
          async verify() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function XQ(WQ, XQ, wQ) {
              const qQ = window.grecaptcha;
              vW(qQ) ? qQ.enterprise.ready((() => {
                qQ.enterprise.execute(WQ, {
                  action: QQ
                }).then((QQ => {
                  XQ(QQ)
                })).catch((() => {
                  XQ("NO_RECAPTCHA")
                }))
              })) : wQ(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((QQ, wQ) => {
              (async function(QQ) {
                if (!WQ) {
                  if (null == QQ.tenantId && null != QQ._agentRecaptchaConfig) return QQ._agentRecaptchaConfig.siteKey;
                  if (null != QQ.tenantId && void 0 !== QQ._tenantRecaptchaConfigs[QQ.tenantId]) return QQ._tenantRecaptchaConfigs[QQ.tenantId].siteKey
                }
                return new Promise((async (WQ, XQ) => {
                  UW(QQ, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((wQ => {
                    if (void 0 !== wQ.recaptchaKey) {
                      const XQ = new dW(wQ);
                      return null == QQ.tenantId ? QQ._agentRecaptchaConfig = XQ : QQ._tenantRecaptchaConfigs[QQ.tenantId] = XQ, WQ(XQ.siteKey)
                    }
                    XQ(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((QQ => {
                    XQ(QQ)
                  }))
                }))
              })(this.auth).then((qQ => {
                if (!WQ && vW(window.grecaptcha)) XQ(qQ, QQ, wQ);
                else {
                  if ("undefined" === typeof window) return void wQ(new Error("RecaptchaVerifier is only supported in browser"));
                  HW("https://www.google.com/recaptcha/enterprise.js?render=" + qQ).then((() => {
                    XQ(qQ, QQ, wQ)
                  })).catch((QQ => {
                    wQ(QQ)
                  }))
                }
              })).catch((QQ => {
                wQ(QQ)
              }))
            }))
          }
        }
        async function hW(QQ, WQ, XQ) {
          let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const qQ = new lW(QQ);
          let TQ;
          try {
            TQ = await qQ.verify(XQ)
          } catch (sQ) {
            TQ = await qQ.verify(XQ, !0)
          }
          const zQ = Object.assign({}, WQ);
          return wQ ? Object.assign(zQ, {
            captchaResp: TQ
          }) : Object.assign(zQ, {
            captchaResponse: TQ
          }), Object.assign(zQ, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(zQ, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), zQ
        }
        class iW {
          constructor(QQ) {
            this.auth = QQ, this.queue = []
          }
          pushCallback(QQ, WQ) {
            const XQ = WQ => new Promise(((XQ, wQ) => {
              try {
                XQ(QQ(WQ))
              } catch (qQ) {
                wQ(qQ)
              }
            }));
            XQ.onAbort = WQ, this.queue.push(XQ);
            const wQ = this.queue.length - 1;
            return () => {
              this.queue[wQ] = () => Promise.resolve()
            }
          }
          async runMiddleware(QQ) {
            if (this.auth.currentUser === QQ) return;
            const WQ = [];
            try {
              for (const XQ of this.queue) await XQ(QQ), XQ.onAbort && WQ.push(XQ.onAbort)
            } catch (XQ) {
              WQ.reverse();
              for (const QQ of WQ) try {
                QQ()
              } catch (wQ) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === XQ || void 0 === XQ ? void 0 : XQ.message
              })
            }
          }
        }
        class cW {
          constructor(QQ, WQ, XQ, wQ) {
            this.app = QQ, this.heartbeatServiceProvider = WQ, this.appCheckServiceProvider = XQ, this.config = wQ, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new RW(this), this.idTokenSubscription = new RW(this), this.beforeStateQueue = new iW(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = yQ, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = QQ.name, this.clientVersion = wQ.sdkClientVersion
          }
          _initializeWithPersistence(QQ, WQ) {
            return WQ && (this._popupRedirectResolver = TW(WQ)), this._initializationPromise = this.queue((async () => {
              var XQ, wQ;
              if (!this._deleted && (this.persistenceManager = await PW.create(this, QQ), !this._deleted)) {
                if (null === (XQ = this._popupRedirectResolver) || void 0 === XQ ? void 0 : XQ._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (qQ) {}
                await this.initializeCurrentUser(WQ), this.lastNotifiedUid = (null === (wQ = this.currentUser) || void 0 === wQ ? void 0 : wQ.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const QQ = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || QQ ? this.currentUser && QQ && this.currentUser.uid === QQ.uid ? (this._currentUser._assign(QQ), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(QQ, !0) : void 0
          }
          async initializeCurrentUser(QQ) {
            var WQ;
            const XQ = await this.assertedPersistence.getCurrentUser();
            let wQ = XQ,
              qQ = !1;
            if (QQ && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const XQ = null === (WQ = this.redirectUser) || void 0 === WQ ? void 0 : WQ._redirectEventId,
                TQ = null === wQ || void 0 === wQ ? void 0 : wQ._redirectEventId,
                zQ = await this.tryRedirectSignIn(QQ);
              XQ && XQ !== TQ || !(null === zQ || void 0 === zQ ? void 0 : zQ.user) || (wQ = zQ.user, qQ = !0)
            }
            if (!wQ) return this.directlySetCurrentUser(null);
            if (!wQ._redirectEventId) {
              if (qQ) try {
                await this.beforeStateQueue.runMiddleware(wQ)
              } catch (TQ) {
                wQ = XQ, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(TQ)))
              }
              return wQ ? this.reloadAndSetCurrentUserOrClear(wQ) : this.directlySetCurrentUser(null)
            }
            return HQ(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === wQ._redirectEventId ? this.directlySetCurrentUser(wQ) : this.reloadAndSetCurrentUserOrClear(wQ)
          }
          async tryRedirectSignIn(QQ) {
            let WQ = null;
            try {
              WQ = await this._popupRedirectResolver._completeRedirectFn(this, QQ, !0)
            } catch (XQ) {
              await this._setRedirectUser(null)
            }
            return WQ
          }
          async reloadAndSetCurrentUserOrClear(QQ) {
            try {
              await MQ(QQ)
            } catch (WQ) {
              if ("auth/network-request-failed" !== (null === WQ || void 0 === WQ ? void 0 : WQ.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(QQ)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const QQ = navigator;
              return QQ.languages && QQ.languages[0] || QQ.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(QQ) {
            const WQ = QQ ? (0, wQ.L)(QQ) : null;
            return WQ && HQ(WQ.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(WQ && WQ._clone(this))
          }
          async _updateCurrentUser(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return QQ && HQ(this.tenantId === QQ.tenantId, this, "tenant-id-mismatch"), WQ || await this.beforeStateQueue.runMiddleware(QQ), this.queue((async () => {
              await this.directlySetCurrentUser(QQ), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(QQ) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(TW(QQ))
            }))
          }
          async initializeRecaptchaConfig() {
            const QQ = await UW(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              WQ = new dW(QQ);
            if (null == this.tenantId ? this._agentRecaptchaConfig = WQ : this._tenantRecaptchaConfigs[this.tenantId] = WQ, WQ.emailPasswordEnabled) {
              new lW(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(QQ) {
            this._errorFactory = new wQ.h("auth", "Firebase", QQ())
          }
          onAuthStateChanged(QQ, WQ, XQ) {
            return this.registerStateListener(this.authStateSubscription, QQ, WQ, XQ)
          }
          beforeAuthStateChanged(QQ, WQ) {
            return this.beforeStateQueue.pushCallback(QQ, WQ)
          }
          onIdTokenChanged(QQ, WQ, XQ) {
            return this.registerStateListener(this.idTokenSubscription, QQ, WQ, XQ)
          }
          toJSON() {
            var QQ;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (QQ = this._currentUser) || void 0 === QQ ? void 0 : QQ.toJSON()
            }
          }
          async _setRedirectUser(QQ, WQ) {
            const XQ = await this.getOrInitRedirectPersistenceManager(WQ);
            return null === QQ ? XQ.removeCurrentUser() : XQ.setCurrentUser(QQ)
          }
          async getOrInitRedirectPersistenceManager(QQ) {
            if (!this.redirectPersistenceManager) {
              const WQ = QQ && TW(QQ) || this._popupRedirectResolver;
              HQ(WQ, this, "argument-error"), this.redirectPersistenceManager = await PW.create(this, [TW(WQ._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(QQ) {
            var WQ, XQ;
            return this._isInitialized && await this.queue((async () => {})), (null === (WQ = this._currentUser) || void 0 === WQ ? void 0 : WQ._redirectEventId) === QQ ? this._currentUser : (null === (XQ = this.redirectUser) || void 0 === XQ ? void 0 : XQ._redirectEventId) === QQ ? this.redirectUser : null
          }
          async _persistUserIfCurrent(QQ) {
            if (QQ === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(QQ)))
          }
          _notifyListenersIfCurrent(QQ) {
            QQ === this.currentUser && this.notifyAuthListeners()
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
            var QQ, WQ;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const XQ = null !== (WQ = null === (QQ = this.currentUser) || void 0 === QQ ? void 0 : QQ.uid) && void 0 !== WQ ? WQ : null;
            this.lastNotifiedUid !== XQ && (this.lastNotifiedUid = XQ, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(QQ, WQ, XQ, wQ) {
            if (this._deleted) return () => {};
            const qQ = "function" === typeof WQ ? WQ : WQ.next.bind(WQ),
              TQ = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return HQ(TQ, this, "internal-error"), TQ.then((() => qQ(this.currentUser))), "function" === typeof WQ ? QQ.addObserver(WQ, XQ, wQ) : QQ.addObserver(WQ)
          }
          async directlySetCurrentUser(QQ) {
            this.currentUser && this.currentUser !== QQ && this._currentUser._stopProactiveRefresh(), QQ && this.isProactiveRefreshEnabled && QQ._startProactiveRefresh(), this.currentUser = QQ, QQ ? await this.assertedPersistence.setCurrentUser(QQ) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(QQ) {
            return this.operations = this.operations.then(QQ, QQ), this.operations
          }
          get assertedPersistence() {
            return HQ(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(QQ) {
            QQ && !this.frameworks.includes(QQ) && (this.frameworks.push(QQ), this.frameworks.sort(), this.clientVersion = GW(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var QQ;
            const WQ = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (WQ["X-Firebase-gmpid"] = this.app.options.appId);
            const XQ = await (null === (QQ = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === QQ ? void 0 : QQ.getHeartbeatsHeader());
            XQ && (WQ["X-Firebase-Client"] = XQ);
            const wQ = await this._getAppCheckToken();
            return wQ && (WQ["X-Firebase-AppCheck"] = wQ), WQ
          }
          async _getAppCheckToken() {
            var QQ;
            const WQ = await (null === (QQ = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === QQ ? void 0 : QQ.getToken());
            return (null === WQ || void 0 === WQ ? void 0 : WQ.error) && function(QQ) {
              if (DQ.logLevel <= zQ.b.WARN) {
                for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
                DQ.warn(`Auth (${qQ.g}): ${QQ}`, ...XQ)
              }
            }(`Error while retrieving App Check token: ${WQ.error}`), null === WQ || void 0 === WQ ? void 0 : WQ.token
          }
        }

        function AW(QQ) {
          return (0, wQ.L)(QQ)
        }
        class RW {
          constructor(QQ) {
            this.auth = QQ, this.observer = null, this.addObserver = (0, wQ.x)((QQ => this.observer = QQ))
          }
          get next() {
            return HQ(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function EW(QQ, WQ) {
          const XQ = (0, qQ.B)(QQ, "auth");
          if (XQ.isInitialized()) {
            const QQ = XQ.getImmediate(),
              qQ = XQ.getOptions();
            if ((0, wQ.y)(qQ, null !== WQ && void 0 !== WQ ? WQ : {})) return QQ;
            GQ(QQ, "already-initialized")
          }
          return XQ.initialize({
            options: WQ
          })
        }

        function CW(QQ, WQ, XQ) {
          const wQ = AW(QQ);
          HQ(wQ._canInitEmulator, wQ, "emulator-config-failed"), HQ(/^https?:\/\//.test(WQ), wQ, "invalid-emulator-scheme");
          const qQ = !!(null === XQ || void 0 === XQ ? void 0 : XQ.disableWarnings),
            TQ = uW(WQ),
            {
              host: zQ,
              port: sQ
            } = function(QQ) {
              const WQ = uW(QQ),
                XQ = /(\/\/)?([^?#/]+)/.exec(QQ.substr(WQ.length));
              if (!XQ) return {
                host: "",
                port: null
              };
              const wQ = XQ[2].split("@").pop() || "",
                qQ = /^(\[[^\]]+\])(:|$)/.exec(wQ);
              if (qQ) {
                const QQ = qQ[1];
                return {
                  host: QQ,
                  port: LW(wQ.substr(QQ.length + 1))
                }
              } {
                const [QQ, WQ] = wQ.split(":");
                return {
                  host: QQ,
                  port: LW(WQ)
                }
              }
            }(WQ),
            FQ = null === sQ ? "" : `:${sQ}`;
          wQ.config.emulator = {
            url: `${TQ}//${zQ}${FQ}/`
          }, wQ.settings.appVerificationDisabledForTesting = !0, wQ.emulatorConfig = Object.freeze({
            host: zQ,
            port: sQ,
            protocol: TQ.replace(":", ""),
            options: Object.freeze({
              disableWarnings: qQ
            })
          }), qQ || function() {
            function QQ() {
              const QQ = document.createElement("p"),
                WQ = QQ.style;
              QQ.innerText = "Running in emulator mode. Do not use with production credentials.", WQ.position = "fixed", WQ.width = "100%", WQ.backgroundColor = "#ffffff", WQ.border = ".1em solid #000000", WQ.color = "#b50000", WQ.bottom = "0px", WQ.left = "0px", WQ.margin = "0px", WQ.zIndex = "10000", WQ.textAlign = "center", QQ.classList.add("firebase-emulator-warning"), document.body.appendChild(QQ)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", QQ) : QQ())
          }()
        }

        function uW(QQ) {
          const WQ = QQ.indexOf(":");
          return WQ < 0 ? "" : QQ.substr(0, WQ + 1)
        }

        function LW(QQ) {
          if (!QQ) return null;
          const WQ = Number(QQ);
          return isNaN(WQ) ? null : WQ
        }
        class kW {
          constructor(QQ, WQ) {
            this.providerId = QQ, this.signInMethod = WQ
          }
          toJSON() {
            return aQ("not implemented")
          }
          _getIdTokenResponse(QQ) {
            return aQ("not implemented")
          }
          _linkToIdToken(QQ, WQ) {
            return aQ("not implemented")
          }
          _getReauthenticationResolver(QQ) {
            return aQ("not implemented")
          }
        }
        async function fW(QQ, WQ) {
          return kQ(QQ, "POST", "/v1/accounts:resetPassword", LQ(QQ, WQ))
        }
        async function SW(QQ, WQ) {
          return kQ(QQ, "POST", "/v1/accounts:update", WQ)
        }
        async function tW(QQ, WQ) {
          return SQ(QQ, "POST", "/v1/accounts:signInWithPassword", LQ(QQ, WQ))
        }
        async function oW(QQ, WQ) {
          return kQ(QQ, "POST", "/v1/accounts:sendOobCode", LQ(QQ, WQ))
        }
        async function eW(QQ, WQ) {
          return oW(QQ, WQ)
        }
        async function nW(QQ, WQ) {
          return oW(QQ, WQ)
        }
        class xW extends kW {
          constructor(QQ, WQ, XQ) {
            let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", XQ), this._email = QQ, this._password = WQ, this._tenantId = wQ
          }
          static _fromEmailAndPassword(QQ, WQ) {
            return new xW(QQ, WQ, "password")
          }
          static _fromEmailAndCode(QQ, WQ) {
            return new xW(QQ, WQ, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(QQ) {
            const WQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ;
            if ((null === WQ || void 0 === WQ ? void 0 : WQ.email) && (null === WQ || void 0 === WQ ? void 0 : WQ.password)) {
              if ("password" === WQ.signInMethod) return this._fromEmailAndPassword(WQ.email, WQ.password);
              if ("emailLink" === WQ.signInMethod) return this._fromEmailAndCode(WQ.email, WQ.password, WQ.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(QQ) {
            var WQ;
            switch (this.signInMethod) {
              case "password":
                const XQ = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (WQ = QQ._getRecaptchaConfig()) || void 0 === WQ ? void 0 : WQ.emailPasswordEnabled) {
                  const WQ = await hW(QQ, XQ, "signInWithPassword");
                  return tW(QQ, WQ)
                }
                return tW(QQ, XQ).catch((async WQ => {
                  if ("auth/missing-recaptcha-token" === WQ.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const WQ = await hW(QQ, XQ, "signInWithPassword");
                    return tW(QQ, WQ)
                  }
                  return Promise.reject(WQ)
                }));
              case "emailLink":
                return async function(QQ, WQ) {
                  return SQ(QQ, "POST", "/v1/accounts:signInWithEmailLink", LQ(QQ, WQ))
                }(QQ, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                GQ(QQ, "internal-error")
            }
          }
          async _linkToIdToken(QQ, WQ) {
            switch (this.signInMethod) {
              case "password":
                return SW(QQ, {
                  idToken: WQ,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(QQ, WQ) {
                  return SQ(QQ, "POST", "/v1/accounts:signInWithEmailLink", LQ(QQ, WQ))
                }(QQ, {
                  idToken: WQ,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                GQ(QQ, "internal-error")
            }
          }
          _getReauthenticationResolver(QQ) {
            return this._getIdTokenResponse(QQ)
          }
        }
        async function YW(QQ, WQ) {
          return SQ(QQ, "POST", "/v1/accounts:signInWithIdp", LQ(QQ, WQ))
        }
        class NW extends kW {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(QQ) {
            const WQ = new NW(QQ.providerId, QQ.signInMethod);
            return QQ.idToken || QQ.accessToken ? (QQ.idToken && (WQ.idToken = QQ.idToken), QQ.accessToken && (WQ.accessToken = QQ.accessToken), QQ.nonce && !QQ.pendingToken && (WQ.nonce = QQ.nonce), QQ.pendingToken && (WQ.pendingToken = QQ.pendingToken)) : QQ.oauthToken && QQ.oauthTokenSecret ? (WQ.accessToken = QQ.oauthToken, WQ.secret = QQ.oauthTokenSecret) : GQ("argument-error"), WQ
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
          static fromJSON(QQ) {
            const WQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ,
              {
                providerId: XQ,
                signInMethod: wQ
              } = WQ,
              qQ = TQ(WQ, ["providerId", "signInMethod"]);
            if (!XQ || !wQ) return null;
            const zQ = new NW(XQ, wQ);
            return zQ.idToken = qQ.idToken || void 0, zQ.accessToken = qQ.accessToken || void 0, zQ.secret = qQ.secret, zQ.nonce = qQ.nonce, zQ.pendingToken = qQ.pendingToken || null, zQ
          }
          _getIdTokenResponse(QQ) {
            return YW(QQ, this.buildRequest())
          }
          _linkToIdToken(QQ, WQ) {
            const XQ = this.buildRequest();
            return XQ.idToken = WQ, YW(QQ, XQ)
          }
          _getReauthenticationResolver(QQ) {
            const WQ = this.buildRequest();
            return WQ.autoCreate = !1, YW(QQ, WQ)
          }
          buildRequest() {
            const QQ = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) QQ.pendingToken = this.pendingToken;
            else {
              const WQ = {};
              this.idToken && (WQ.id_token = this.idToken), this.accessToken && (WQ.access_token = this.accessToken), this.secret && (WQ.oauth_token_secret = this.secret), WQ.providerId = this.providerId, this.nonce && !this.pendingToken && (WQ.nonce = this.nonce), QQ.postBody = (0, wQ.eb)(WQ)
            }
            return QQ
          }
        }
        const ZW = {
          USER_NOT_FOUND: "user-not-found"
        };
        class OW extends kW {
          constructor(QQ) {
            super("phone", "phone"), this.params = QQ
          }
          static _fromVerification(QQ, WQ) {
            return new OW({
              verificationId: QQ,
              verificationCode: WQ
            })
          }
          static _fromTokenResponse(QQ, WQ) {
            return new OW({
              phoneNumber: QQ,
              temporaryProof: WQ
            })
          }
          _getIdTokenResponse(QQ) {
            return async function(QQ, WQ) {
              return SQ(QQ, "POST", "/v1/accounts:signInWithPhoneNumber", LQ(QQ, WQ))
            }(QQ, this._makeVerificationRequest())
          }
          _linkToIdToken(QQ, WQ) {
            return async function(QQ, WQ) {
              const XQ = await SQ(QQ, "POST", "/v1/accounts:signInWithPhoneNumber", LQ(QQ, WQ));
              if (XQ.temporaryProof) throw eQ(QQ, "account-exists-with-different-credential", XQ);
              return XQ
            }(QQ, Object.assign({
              idToken: WQ
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(QQ) {
            return async function(QQ, WQ) {
              return SQ(QQ, "POST", "/v1/accounts:signInWithPhoneNumber", LQ(QQ, Object.assign(Object.assign({}, WQ), {
                operation: "REAUTH"
              })), ZW)
            }(QQ, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: QQ,
              phoneNumber: WQ,
              verificationId: XQ,
              verificationCode: wQ
            } = this.params;
            return QQ && WQ ? {
              temporaryProof: QQ,
              phoneNumber: WQ
            } : {
              sessionInfo: XQ,
              code: wQ
            }
          }
          toJSON() {
            const QQ = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (QQ.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (QQ.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (QQ.verificationCode = this.params.verificationCode), this.params.verificationId && (QQ.verificationId = this.params.verificationId), QQ
          }
          static fromJSON(QQ) {
            "string" === typeof QQ && (QQ = JSON.parse(QQ));
            const {
              verificationId: WQ,
              verificationCode: XQ,
              phoneNumber: wQ,
              temporaryProof: qQ
            } = QQ;
            return XQ || WQ || wQ || qQ ? new OW({
              verificationId: WQ,
              verificationCode: XQ,
              phoneNumber: wQ,
              temporaryProof: qQ
            }) : null
          }
        }
        class KW {
          constructor(QQ) {
            var WQ, XQ, qQ, TQ, zQ, sQ;
            const FQ = (0, wQ.db)((0, wQ.z)(QQ)),
              PQ = null !== (WQ = FQ.apiKey) && void 0 !== WQ ? WQ : null,
              gQ = null !== (XQ = FQ.oobCode) && void 0 !== XQ ? XQ : null,
              JQ = function(QQ) {
                switch (QQ) {
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
              }(null !== (qQ = FQ.mode) && void 0 !== qQ ? qQ : null);
            HQ(PQ && gQ && JQ, "argument-error"), this.apiKey = PQ, this.operation = JQ, this.code = gQ, this.continueUrl = null !== (TQ = FQ.continueUrl) && void 0 !== TQ ? TQ : null, this.languageCode = null !== (zQ = FQ.languageCode) && void 0 !== zQ ? zQ : null, this.tenantId = null !== (sQ = FQ.tenantId) && void 0 !== sQ ? sQ : null
          }
          static parseLink(QQ) {
            const WQ = function(QQ) {
              const WQ = (0, wQ.db)((0, wQ.z)(QQ)).link,
                XQ = WQ ? (0, wQ.db)((0, wQ.z)(WQ)).deep_link_id : null,
                qQ = (0, wQ.db)((0, wQ.z)(QQ)).deep_link_id;
              return (qQ ? (0, wQ.db)((0, wQ.z)(qQ)).link : null) || qQ || XQ || WQ || QQ
            }(QQ);
            try {
              return new KW(WQ)
            } catch (XQ) {
              return null
            }
          }
        }

        function mW(QQ) {
          return KW.parseLink(QQ)
        }
        class MW {
          constructor() {
            this.providerId = MW.PROVIDER_ID
          }
          static credential(QQ, WQ) {
            return xW._fromEmailAndPassword(QQ, WQ)
          }
          static credentialWithLink(QQ, WQ) {
            const XQ = KW.parseLink(WQ);
            return HQ(XQ, "argument-error"), xW._fromEmailAndCode(QQ, XQ.code, XQ.tenantId)
          }
        }
        MW.PROVIDER_ID = "password", MW.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", MW.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class QX {
          constructor(QQ) {
            this.providerId = QQ, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(QQ) {
            this.defaultLanguageCode = QQ
          }
          setCustomParameters(QQ) {
            return this.customParameters = QQ, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class WX extends QX {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(QQ) {
            return this.scopes.includes(QQ) || this.scopes.push(QQ), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class XX extends WX {
          static credentialFromJSON(QQ) {
            const WQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ;
            return HQ("providerId" in WQ && "signInMethod" in WQ, "argument-error"), NW._fromParams(WQ)
          }
          credential(QQ) {
            return this._credential(Object.assign(Object.assign({}, QQ), {
              nonce: QQ.rawNonce
            }))
          }
          _credential(QQ) {
            return HQ(QQ.idToken || QQ.accessToken, "argument-error"), NW._fromParams(Object.assign(Object.assign({}, QQ), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(QQ) {
            return XX.oauthCredentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return XX.oauthCredentialFromTaggedObject(QQ.customData || {})
          }
          static oauthCredentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: WQ
            } = QQ;
            if (!WQ) return null;
            const {
              oauthIdToken: XQ,
              oauthAccessToken: wQ,
              oauthTokenSecret: qQ,
              pendingToken: TQ,
              nonce: zQ,
              providerId: sQ
            } = WQ;
            if (!wQ && !qQ && !XQ && !TQ) return null;
            if (!sQ) return null;
            try {
              return new XX(sQ)._credential({
                idToken: XQ,
                accessToken: wQ,
                nonce: zQ,
                pendingToken: TQ
              })
            } catch (FQ) {
              return null
            }
          }
        }
        class wX extends WX {
          constructor() {
            super("facebook.com")
          }
          static credential(QQ) {
            return NW._fromParams({
              providerId: wX.PROVIDER_ID,
              signInMethod: wX.FACEBOOK_SIGN_IN_METHOD,
              accessToken: QQ
            })
          }
          static credentialFromResult(QQ) {
            return wX.credentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return wX.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: WQ
            } = QQ;
            if (!WQ || !("oauthAccessToken" in WQ)) return null;
            if (!WQ.oauthAccessToken) return null;
            try {
              return wX.credential(WQ.oauthAccessToken)
            } catch (XQ) {
              return null
            }
          }
        }
        wX.FACEBOOK_SIGN_IN_METHOD = "facebook.com", wX.PROVIDER_ID = "facebook.com";
        class qX extends WX {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(QQ, WQ) {
            return NW._fromParams({
              providerId: qX.PROVIDER_ID,
              signInMethod: qX.GOOGLE_SIGN_IN_METHOD,
              idToken: QQ,
              accessToken: WQ
            })
          }
          static credentialFromResult(QQ) {
            return qX.credentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return qX.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: WQ
            } = QQ;
            if (!WQ) return null;
            const {
              oauthIdToken: XQ,
              oauthAccessToken: wQ
            } = WQ;
            if (!XQ && !wQ) return null;
            try {
              return qX.credential(XQ, wQ)
            } catch (qQ) {
              return null
            }
          }
        }
        qX.GOOGLE_SIGN_IN_METHOD = "google.com", qX.PROVIDER_ID = "google.com";
        class TX extends WX {
          constructor() {
            super("github.com")
          }
          static credential(QQ) {
            return NW._fromParams({
              providerId: TX.PROVIDER_ID,
              signInMethod: TX.GITHUB_SIGN_IN_METHOD,
              accessToken: QQ
            })
          }
          static credentialFromResult(QQ) {
            return TX.credentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return TX.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: WQ
            } = QQ;
            if (!WQ || !("oauthAccessToken" in WQ)) return null;
            if (!WQ.oauthAccessToken) return null;
            try {
              return TX.credential(WQ.oauthAccessToken)
            } catch (XQ) {
              return null
            }
          }
        }
        TX.GITHUB_SIGN_IN_METHOD = "github.com", TX.PROVIDER_ID = "github.com";
        class zX extends kW {
          constructor(QQ, WQ) {
            super(QQ, QQ), this.pendingToken = WQ
          }
          _getIdTokenResponse(QQ) {
            return YW(QQ, this.buildRequest())
          }
          _linkToIdToken(QQ, WQ) {
            const XQ = this.buildRequest();
            return XQ.idToken = WQ, YW(QQ, XQ)
          }
          _getReauthenticationResolver(QQ) {
            const WQ = this.buildRequest();
            return WQ.autoCreate = !1, YW(QQ, WQ)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(QQ) {
            const WQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ,
              {
                providerId: XQ,
                signInMethod: wQ,
                pendingToken: qQ
              } = WQ;
            return XQ && wQ && qQ && XQ === wQ ? new zX(XQ, qQ) : null
          }
          static _create(QQ, WQ) {
            return new zX(QQ, WQ)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class sX extends QX {
          constructor(QQ) {
            HQ(QQ.startsWith("saml."), "argument-error"), super(QQ)
          }
          static credentialFromResult(QQ) {
            return sX.samlCredentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return sX.samlCredentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromJSON(QQ) {
            const WQ = zX.fromJSON(QQ);
            return HQ(WQ, "argument-error"), WQ
          }
          static samlCredentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: WQ
            } = QQ;
            if (!WQ) return null;
            const {
              pendingToken: XQ,
              providerId: wQ
            } = WQ;
            if (!XQ || !wQ) return null;
            try {
              return zX._create(wQ, XQ)
            } catch (qQ) {
              return null
            }
          }
        }
        class FX extends WX {
          constructor() {
            super("twitter.com")
          }
          static credential(QQ, WQ) {
            return NW._fromParams({
              providerId: FX.PROVIDER_ID,
              signInMethod: FX.TWITTER_SIGN_IN_METHOD,
              oauthToken: QQ,
              oauthTokenSecret: WQ
            })
          }
          static credentialFromResult(QQ) {
            return FX.credentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return FX.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: WQ
            } = QQ;
            if (!WQ) return null;
            const {
              oauthAccessToken: XQ,
              oauthTokenSecret: wQ
            } = WQ;
            if (!XQ || !wQ) return null;
            try {
              return FX.credential(XQ, wQ)
            } catch (qQ) {
              return null
            }
          }
        }
        async function PX(QQ, WQ) {
          return SQ(QQ, "POST", "/v1/accounts:signUp", LQ(QQ, WQ))
        }
        FX.TWITTER_SIGN_IN_METHOD = "twitter.com", FX.PROVIDER_ID = "twitter.com";
        class gX {
          constructor(QQ) {
            this.user = QQ.user, this.providerId = QQ.providerId, this._tokenResponse = QQ._tokenResponse, this.operationType = QQ.operationType
          }
          static async _fromIdTokenResponse(QQ, WQ, XQ) {
            let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const qQ = await wW._fromIdTokenResponse(QQ, XQ, wQ),
              TQ = JX(XQ);
            return new gX({
              user: qQ,
              providerId: TQ,
              _tokenResponse: XQ,
              operationType: WQ
            })
          }
          static async _forOperation(QQ, WQ, XQ) {
            await QQ._updateTokensIfNecessary(XQ, !0);
            const wQ = JX(XQ);
            return new gX({
              user: QQ,
              providerId: wQ,
              _tokenResponse: XQ,
              operationType: WQ
            })
          }
        }

        function JX(QQ) {
          return QQ.providerId ? QQ.providerId : "phoneNumber" in QQ ? "phone" : null
        }
        async function rX(QQ) {
          var WQ;
          const XQ = AW(QQ);
          if (await XQ._initializationPromise, null === (WQ = XQ.currentUser) || void 0 === WQ ? void 0 : WQ.isAnonymous) return new gX({
            user: XQ.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const wQ = await PX(XQ, {
              returnSecureToken: !0
            }),
            qQ = await gX._fromIdTokenResponse(XQ, "signIn", wQ, !0);
          return await XQ._updateCurrentUser(qQ.user), qQ
        }
        class IX extends wQ.k {
          constructor(QQ, WQ, XQ, wQ) {
            var qQ;
            super(WQ.code, WQ.message), this.operationType = XQ, this.user = wQ, Object.setPrototypeOf(this, IX.prototype), this.customData = {
              appName: QQ.name,
              tenantId: null !== (qQ = QQ.tenantId) && void 0 !== qQ ? qQ : void 0,
              _serverResponse: WQ.customData._serverResponse,
              operationType: XQ
            }
          }
          static _fromErrorAndOperation(QQ, WQ, XQ, wQ) {
            return new IX(QQ, WQ, XQ, wQ)
          }
        }

        function jX(QQ, WQ, XQ, wQ) {
          return ("reauthenticate" === WQ ? XQ._getReauthenticationResolver(QQ) : XQ._getIdTokenResponse(QQ)).catch((XQ => {
            if ("auth/multi-factor-auth-required" === XQ.code) throw IX._fromErrorAndOperation(QQ, XQ, WQ, wQ);
            throw XQ
          }))
        }

        function BX(QQ) {
          return new Set(QQ.map((QQ => {
            let {
              providerId: WQ
            } = QQ;
            return WQ
          })).filter((QQ => !!QQ)))
        }
        async function yX(QQ, WQ) {
          const XQ = (0, wQ.L)(QQ);
          await DX(!0, XQ, WQ);
          const {
            providerUserInfo: qQ
          } = await async function(QQ, WQ) {
            return kQ(QQ, "POST", "/v1/accounts:update", WQ)
          }(XQ.auth, {
            idToken: await XQ.getIdToken(),
            deleteProvider: [WQ]
          }), TQ = BX(qQ || []);
          return XQ.providerData = XQ.providerData.filter((QQ => TQ.has(QQ.providerId))), TQ.has("phone") || (XQ.phoneNumber = null), await XQ.auth._persistUserIfCurrent(XQ), XQ
        }
        async function VX(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const wQ = await OQ(QQ, WQ._linkToIdToken(QQ.auth, await QQ.getIdToken()), XQ);
          return gX._forOperation(QQ, "link", wQ)
        }
        async function DX(QQ, WQ, XQ) {
          await MQ(WQ);
          const wQ = !1 === QQ ? "provider-already-linked" : "no-such-provider";
          HQ(BX(WQ.providerData).has(XQ) === QQ, WQ.auth, wQ)
        }
        async function pX(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: wQ
          } = QQ, qQ = "reauthenticate";
          try {
            const TQ = await OQ(QQ, jX(wQ, qQ, WQ, QQ), XQ);
            HQ(TQ.idToken, wQ, "internal-error");
            const zQ = ZQ(TQ.idToken);
            HQ(zQ, wQ, "internal-error");
            const {
              sub: sQ
            } = zQ;
            return HQ(QQ.uid === sQ, wQ, "user-mismatch"), gX._forOperation(QQ, qQ, TQ)
          } catch (TQ) {
            throw "auth/user-not-found" === (null === TQ || void 0 === TQ ? void 0 : TQ.code) && GQ(wQ, "user-mismatch"), TQ
          }
        }
        async function GX(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const wQ = "signIn",
            qQ = await jX(QQ, wQ, WQ),
            TQ = await gX._fromIdTokenResponse(QQ, wQ, qQ);
          return XQ || await QQ._updateCurrentUser(TQ.user), TQ
        }
        async function UX(QQ, WQ) {
          return GX(AW(QQ), WQ)
        }
        async function bX(QQ, WQ) {
          const XQ = (0, wQ.L)(QQ);
          return await DX(!1, XQ, WQ.providerId), VX(XQ, WQ)
        }
        async function vX(QQ, WQ) {
          return pX((0, wQ.L)(QQ), WQ)
        }
        async function dX(QQ, WQ) {
          const XQ = AW(QQ),
            wQ = await async function(QQ, WQ) {
              return SQ(QQ, "POST", "/v1/accounts:signInWithCustomToken", LQ(QQ, WQ))
            }(XQ, {
              token: WQ,
              returnSecureToken: !0
            }), qQ = await gX._fromIdTokenResponse(XQ, "signIn", wQ);
          return await XQ._updateCurrentUser(qQ.user), qQ
        }
        class HX {
          constructor(QQ, WQ) {
            this.factorId = QQ, this.uid = WQ.mfaEnrollmentId, this.enrollmentTime = new Date(WQ.enrolledAt).toUTCString(), this.displayName = WQ.displayName
          }
          static _fromServerResponse(QQ, WQ) {
            return "phoneInfo" in WQ ? aX._fromServerResponse(QQ, WQ) : "totpInfo" in WQ ? lX._fromServerResponse(QQ, WQ) : GQ(QQ, "internal-error")
          }
        }
        class aX extends HX {
          constructor(QQ) {
            super("phone", QQ), this.phoneNumber = QQ.phoneInfo
          }
          static _fromServerResponse(QQ, WQ) {
            return new aX(WQ)
          }
        }
        class lX extends HX {
          constructor(QQ) {
            super("totp", QQ)
          }
          static _fromServerResponse(QQ, WQ) {
            return new lX(WQ)
          }
        }

        function hX(QQ, WQ, XQ) {
          var wQ;
          HQ((null === (wQ = XQ.url) || void 0 === wQ ? void 0 : wQ.length) > 0, QQ, "invalid-continue-uri"), HQ("undefined" === typeof XQ.dynamicLinkDomain || XQ.dynamicLinkDomain.length > 0, QQ, "invalid-dynamic-link-domain"), WQ.continueUrl = XQ.url, WQ.dynamicLinkDomain = XQ.dynamicLinkDomain, WQ.canHandleCodeInApp = XQ.handleCodeInApp, XQ.iOS && (HQ(XQ.iOS.bundleId.length > 0, QQ, "missing-ios-bundle-id"), WQ.iOSBundleId = XQ.iOS.bundleId), XQ.android && (HQ(XQ.android.packageName.length > 0, QQ, "missing-android-pkg-name"), WQ.androidInstallApp = XQ.android.installApp, WQ.androidMinimumVersionCode = XQ.android.minimumVersion, WQ.androidPackageName = XQ.android.packageName)
        }
        async function iX(QQ, WQ, XQ) {
          var wQ;
          const qQ = AW(QQ),
            TQ = {
              requestType: "PASSWORD_RESET",
              email: WQ,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (wQ = qQ._getRecaptchaConfig()) || void 0 === wQ ? void 0 : wQ.emailPasswordEnabled) {
            const QQ = await hW(qQ, TQ, "getOobCode", !0);
            XQ && hX(qQ, QQ, XQ), await eW(qQ, QQ)
          } else XQ && hX(qQ, TQ, XQ), await eW(qQ, TQ).catch((async QQ => {
            if ("auth/missing-recaptcha-token" !== QQ.code) return Promise.reject(QQ);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const QQ = await hW(qQ, TQ, "getOobCode", !0);
              XQ && hX(qQ, QQ, XQ), await eW(qQ, QQ)
            }
          }))
        }
        async function cX(QQ, WQ, XQ) {
          await fW((0, wQ.L)(QQ), {
            oobCode: WQ,
            newPassword: XQ
          })
        }
        async function AX(QQ, WQ) {
          await async function(QQ, WQ) {
            return kQ(QQ, "POST", "/v1/accounts:update", LQ(QQ, WQ))
          }((0, wQ.L)(QQ), {
            oobCode: WQ
          })
        }
        async function RX(QQ, WQ) {
          const XQ = (0, wQ.L)(QQ),
            qQ = await fW(XQ, {
              oobCode: WQ
            }),
            TQ = qQ.requestType;
          switch (HQ(TQ, XQ, "internal-error"), TQ) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              HQ(qQ.newEmail, XQ, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              HQ(qQ.mfaInfo, XQ, "internal-error");
            default:
              HQ(qQ.email, XQ, "internal-error")
          }
          let zQ = null;
          return qQ.mfaInfo && (zQ = HX._fromServerResponse(AW(XQ), qQ.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === qQ.requestType ? qQ.newEmail : qQ.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === qQ.requestType ? qQ.email : qQ.newEmail) || null,
              multiFactorInfo: zQ
            },
            operation: TQ
          }
        }
        async function EX(QQ, WQ) {
          const {
            data: XQ
          } = await RX((0, wQ.L)(QQ), WQ);
          return XQ.email
        }
        async function CX(QQ, WQ, XQ) {
          var wQ;
          const qQ = AW(QQ),
            TQ = {
              returnSecureToken: !0,
              email: WQ,
              password: XQ,
              clientType: "CLIENT_TYPE_WEB"
            };
          let zQ;
          if (null === (wQ = qQ._getRecaptchaConfig()) || void 0 === wQ ? void 0 : wQ.emailPasswordEnabled) {
            const QQ = await hW(qQ, TQ, "signUpPassword");
            zQ = PX(qQ, QQ)
          } else zQ = PX(qQ, TQ).catch((async QQ => {
            if ("auth/missing-recaptcha-token" === QQ.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const QQ = await hW(qQ, TQ, "signUpPassword");
              return PX(qQ, QQ)
            }
            return Promise.reject(QQ)
          }));
          const sQ = await zQ.catch((QQ => Promise.reject(QQ))),
            FQ = await gX._fromIdTokenResponse(qQ, "signIn", sQ);
          return await qQ._updateCurrentUser(FQ.user), FQ
        }

        function uX(QQ, WQ, XQ) {
          return UX((0, wQ.L)(QQ), MW.credential(WQ, XQ))
        }
        async function LX(QQ, WQ, XQ) {
          var wQ;
          const qQ = AW(QQ),
            TQ = {
              requestType: "EMAIL_SIGNIN",
              email: WQ,
              clientType: "CLIENT_TYPE_WEB"
            };

          function zQ(QQ, WQ) {
            HQ(WQ.handleCodeInApp, qQ, "argument-error"), WQ && hX(qQ, QQ, WQ)
          }
          if (null === (wQ = qQ._getRecaptchaConfig()) || void 0 === wQ ? void 0 : wQ.emailPasswordEnabled) {
            const QQ = await hW(qQ, TQ, "getOobCode", !0);
            zQ(QQ, XQ), await nW(qQ, QQ)
          } else zQ(TQ, XQ), await nW(qQ, TQ).catch((async QQ => {
            if ("auth/missing-recaptcha-token" !== QQ.code) return Promise.reject(QQ);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const QQ = await hW(qQ, TQ, "getOobCode", !0);
              zQ(QQ, XQ), await nW(qQ, QQ)
            }
          }))
        }

        function kX(QQ, WQ) {
          const XQ = KW.parseLink(WQ);
          return "EMAIL_SIGNIN" === (null === XQ || void 0 === XQ ? void 0 : XQ.operation)
        }
        async function fX(QQ, WQ, XQ) {
          const qQ = (0, wQ.L)(QQ),
            TQ = MW.credentialWithLink(WQ, XQ || hQ());
          return HQ(TQ._tenantId === (qQ.tenantId || null), qQ, "tenant-id-mismatch"), UX(qQ, TQ)
        }
        async function SX(QQ, WQ) {
          const XQ = {
              identifier: WQ,
              continueUri: iQ() ? hQ() : "http://localhost"
            },
            {
              signinMethods: qQ
            } = await async function(QQ, WQ) {
              return kQ(QQ, "POST", "/v1/accounts:createAuthUri", LQ(QQ, WQ))
            }((0, wQ.L)(QQ), XQ);
          return qQ || []
        }
        async function tX(QQ, WQ) {
          const XQ = (0, wQ.L)(QQ),
            qQ = {
              requestType: "VERIFY_EMAIL",
              idToken: await QQ.getIdToken()
            };
          WQ && hX(XQ.auth, qQ, WQ);
          const {
            email: TQ
          } = await async function(QQ, WQ) {
            return oW(QQ, WQ)
          }(XQ.auth, qQ);
          TQ !== QQ.email && await QQ.reload()
        }
        async function oX(QQ, WQ, XQ) {
          const qQ = (0, wQ.L)(QQ),
            TQ = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await QQ.getIdToken(),
              newEmail: WQ
            };
          XQ && hX(qQ.auth, TQ, XQ);
          const {
            email: zQ
          } = await async function(QQ, WQ) {
            return oW(QQ, WQ)
          }(qQ.auth, TQ);
          zQ !== QQ.email && await QQ.reload()
        }
        async function eX(QQ, WQ) {
          let {
            displayName: XQ,
            photoURL: qQ
          } = WQ;
          if (void 0 === XQ && void 0 === qQ) return;
          const TQ = (0, wQ.L)(QQ),
            zQ = {
              idToken: await TQ.getIdToken(),
              displayName: XQ,
              photoUrl: qQ,
              returnSecureToken: !0
            },
            sQ = await OQ(TQ, async function(QQ, WQ) {
              return kQ(QQ, "POST", "/v1/accounts:update", WQ)
            }(TQ.auth, zQ));
          TQ.displayName = sQ.displayName || null, TQ.photoURL = sQ.photoUrl || null;
          const FQ = TQ.providerData.find((QQ => {
            let {
              providerId: WQ
            } = QQ;
            return "password" === WQ
          }));
          FQ && (FQ.displayName = TQ.displayName, FQ.photoURL = TQ.photoURL), await TQ._updateTokensIfNecessary(sQ)
        }

        function nX(QQ, WQ) {
          return YX((0, wQ.L)(QQ), WQ, null)
        }

        function xX(QQ, WQ) {
          return YX((0, wQ.L)(QQ), null, WQ)
        }
        async function YX(QQ, WQ, XQ) {
          const {
            auth: wQ
          } = QQ, qQ = {
            idToken: await QQ.getIdToken(),
            returnSecureToken: !0
          };
          WQ && (qQ.email = WQ), XQ && (qQ.password = XQ);
          const TQ = await OQ(QQ, SW(wQ, qQ));
          await QQ._updateTokensIfNecessary(TQ, !0)
        }
        class NX {
          constructor(QQ, WQ) {
            let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = QQ, this.providerId = WQ, this.profile = XQ
          }
        }
        class ZX extends NX {
          constructor(QQ, WQ, XQ, wQ) {
            super(QQ, WQ, XQ), this.username = wQ
          }
        }
        class OX extends NX {
          constructor(QQ, WQ) {
            super(QQ, "facebook.com", WQ)
          }
        }
        class KX extends ZX {
          constructor(QQ, WQ) {
            super(QQ, "github.com", WQ, "string" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.login) ? null === WQ || void 0 === WQ ? void 0 : WQ.login : null)
          }
        }
        class mX extends NX {
          constructor(QQ, WQ) {
            super(QQ, "google.com", WQ)
          }
        }
        class MX extends ZX {
          constructor(QQ, WQ, XQ) {
            super(QQ, "twitter.com", WQ, XQ)
          }
        }

        function Qw(QQ) {
          const {
            user: WQ,
            _tokenResponse: XQ
          } = QQ;
          return WQ.isAnonymous && !XQ ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(QQ) {
            var WQ, XQ;
            if (!QQ) return null;
            const {
              providerId: wQ
            } = QQ, qQ = QQ.rawUserInfo ? JSON.parse(QQ.rawUserInfo) : {}, TQ = QQ.isNewUser || "identitytoolkit#SignupNewUserResponse" === QQ.kind;
            if (!wQ && (null === QQ || void 0 === QQ ? void 0 : QQ.idToken)) {
              const wQ = null === (XQ = null === (WQ = ZQ(QQ.idToken)) || void 0 === WQ ? void 0 : WQ.firebase) || void 0 === XQ ? void 0 : XQ.sign_in_provider;
              if (wQ) return new NX(TQ, "anonymous" !== wQ && "custom" !== wQ ? wQ : null)
            }
            if (!wQ) return null;
            switch (wQ) {
              case "facebook.com":
                return new OX(TQ, qQ);
              case "github.com":
                return new KX(TQ, qQ);
              case "google.com":
                return new mX(TQ, qQ);
              case "twitter.com":
                return new MX(TQ, qQ, QQ.screenName || null);
              case "custom":
              case "anonymous":
                return new NX(TQ, null);
              default:
                return new NX(TQ, wQ, qQ)
            }
          }(XQ)
        }

        function Ww(QQ, WQ) {
          return (0, wQ.L)(QQ).setPersistence(WQ)
        }

        function Xw(QQ) {
          return AW(QQ).initializeRecaptchaConfig()
        }

        function ww(QQ, WQ, XQ, qQ) {
          return (0, wQ.L)(QQ).onIdTokenChanged(WQ, XQ, qQ)
        }

        function qw(QQ, WQ, XQ) {
          return (0, wQ.L)(QQ).beforeAuthStateChanged(WQ, XQ)
        }

        function Tw(QQ, WQ, XQ, qQ) {
          return (0, wQ.L)(QQ).onAuthStateChanged(WQ, XQ, qQ)
        }

        function zw(QQ) {
          (0, wQ.L)(QQ).useDeviceLanguage()
        }

        function sw(QQ, WQ) {
          return (0, wQ.L)(QQ).updateCurrentUser(WQ)
        }

        function Fw(QQ) {
          return (0, wQ.L)(QQ).signOut()
        }
        async function Pw(QQ) {
          return (0, wQ.L)(QQ).delete()
        }
        class gw {
          constructor(QQ, WQ, XQ) {
            this.type = QQ, this.credential = WQ, this.auth = XQ
          }
          static _fromIdtoken(QQ, WQ) {
            return new gw("enroll", QQ, WQ)
          }
          static _fromMfaPendingCredential(QQ) {
            return new gw("signin", QQ)
          }
          toJSON() {
            const QQ = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [QQ]: this.credential
              }
            }
          }
          static fromJSON(QQ) {
            var WQ, XQ;
            if (null === QQ || void 0 === QQ ? void 0 : QQ.multiFactorSession) {
              if (null === (WQ = QQ.multiFactorSession) || void 0 === WQ ? void 0 : WQ.pendingCredential) return gw._fromMfaPendingCredential(QQ.multiFactorSession.pendingCredential);
              if (null === (XQ = QQ.multiFactorSession) || void 0 === XQ ? void 0 : XQ.idToken) return gw._fromIdtoken(QQ.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Jw {
          constructor(QQ, WQ, XQ) {
            this.session = QQ, this.hints = WQ, this.signInResolver = XQ
          }
          static _fromError(QQ, WQ) {
            const XQ = AW(QQ),
              wQ = WQ.customData._serverResponse,
              qQ = (wQ.mfaInfo || []).map((QQ => HX._fromServerResponse(XQ, QQ)));
            HQ(wQ.mfaPendingCredential, XQ, "internal-error");
            const TQ = gw._fromMfaPendingCredential(wQ.mfaPendingCredential);
            return new Jw(TQ, qQ, (async QQ => {
              const qQ = await QQ._process(XQ, TQ);
              delete wQ.mfaInfo, delete wQ.mfaPendingCredential;
              const zQ = Object.assign(Object.assign({}, wQ), {
                idToken: qQ.idToken,
                refreshToken: qQ.refreshToken
              });
              switch (WQ.operationType) {
                case "signIn":
                  const QQ = await gX._fromIdTokenResponse(XQ, WQ.operationType, zQ);
                  return await XQ._updateCurrentUser(QQ.user), QQ;
                case "reauthenticate":
                  return HQ(WQ.user, XQ, "internal-error"), gX._forOperation(WQ.user, WQ.operationType, zQ);
                default:
                  GQ(XQ, "internal-error")
              }
            }))
          }
          async resolveSignIn(QQ) {
            const WQ = QQ;
            return this.signInResolver(WQ)
          }
        }

        function rw(QQ, WQ) {
          var XQ;
          const qQ = (0, wQ.L)(QQ),
            TQ = WQ;
          return HQ(WQ.customData.operationType, qQ, "argument-error"), HQ(null === (XQ = TQ.customData._serverResponse) || void 0 === XQ ? void 0 : XQ.mfaPendingCredential, qQ, "argument-error"), Jw._fromError(qQ, TQ)
        }
        class Iw {
          constructor(QQ) {
            this.user = QQ, this.enrolledFactors = [], QQ._onReload((WQ => {
              WQ.mfaInfo && (this.enrolledFactors = WQ.mfaInfo.map((WQ => HX._fromServerResponse(QQ.auth, WQ))))
            }))
          }
          static _fromUser(QQ) {
            return new Iw(QQ)
          }
          async getSession() {
            return gw._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(QQ, WQ) {
            const XQ = QQ,
              wQ = await this.getSession(),
              qQ = await OQ(this.user, XQ._process(this.user.auth, wQ, WQ));
            return await this.user._updateTokensIfNecessary(qQ), this.user.reload()
          }
          async unenroll(QQ) {
            const WQ = "string" === typeof QQ ? QQ : QQ.uid,
              XQ = await this.user.getIdToken();
            try {
              const QQ = await OQ(this.user, (wQ = this.user.auth, qQ = {
                idToken: XQ,
                mfaEnrollmentId: WQ
              }, kQ(wQ, "POST", "/v2/accounts/mfaEnrollment:withdraw", LQ(wQ, qQ))));
              this.enrolledFactors = this.enrolledFactors.filter((QQ => {
                let {
                  uid: XQ
                } = QQ;
                return XQ !== WQ
              })), await this.user._updateTokensIfNecessary(QQ), await this.user.reload()
            } catch (TQ) {
              throw TQ
            }
            var wQ, qQ
          }
        }
        const jw = new WeakMap;

        function Bw(QQ) {
          const WQ = (0, wQ.L)(QQ);
          return jw.has(WQ) || jw.set(WQ, Iw._fromUser(WQ)), jw.get(WQ)
        }
        const yw = "__sak";
        class Vw {
          constructor(QQ, WQ) {
            this.storageRetriever = QQ, this.type = WQ
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(yw, "1"), this.storage.removeItem(yw), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (QQ) {
              return Promise.resolve(!1)
            }
          }
          _set(QQ, WQ) {
            return this.storage.setItem(QQ, JSON.stringify(WQ)), Promise.resolve()
          }
          _get(QQ) {
            const WQ = this.storage.getItem(QQ);
            return Promise.resolve(WQ ? JSON.parse(WQ) : null)
          }
          _remove(QQ) {
            return this.storage.removeItem(QQ), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Dw extends Vw {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (QQ, WQ) => this.onStorageEvent(QQ, WQ), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const QQ = (0, wQ.N)();
              return rW(QQ) || DW(QQ)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (QQ) {
                return !1
              }
            }(), this.fallbackToPolling = pW(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(QQ) {
            for (const WQ of Object.keys(this.listeners)) {
              const XQ = this.storage.getItem(WQ),
                wQ = this.localCache[WQ];
              XQ !== wQ && QQ(WQ, wQ, XQ)
            }
          }
          onStorageEvent(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!QQ.key) return void this.forAllChangedKeys(((QQ, WQ, XQ) => {
              this.notifyListeners(QQ, XQ)
            }));
            const XQ = QQ.key;
            if (WQ ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const wQ = this.storage.getItem(XQ);
              if (QQ.newValue !== wQ) null !== QQ.newValue ? this.storage.setItem(XQ, QQ.newValue) : this.storage.removeItem(XQ);
              else if (this.localCache[XQ] === QQ.newValue && !WQ) return
            }
            const qQ = () => {
                const QQ = this.storage.getItem(XQ);
                (WQ || this.localCache[XQ] !== QQ) && this.notifyListeners(XQ, QQ)
              },
              TQ = this.storage.getItem(XQ);
            (0, wQ.W)() && 10 === document.documentMode && TQ !== QQ.newValue && QQ.newValue !== QQ.oldValue ? setTimeout(qQ, 10) : qQ()
          }
          notifyListeners(QQ, WQ) {
            this.localCache[QQ] = WQ;
            const XQ = this.listeners[QQ];
            if (XQ)
              for (const wQ of Array.from(XQ)) wQ(WQ ? JSON.parse(WQ) : WQ)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((QQ, WQ, XQ) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: QQ,
                  oldValue: WQ,
                  newValue: XQ
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
          _addListener(QQ, WQ) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[QQ] || (this.listeners[QQ] = new Set, this.localCache[QQ] = this.storage.getItem(QQ)), this.listeners[QQ].add(WQ)
          }
          _removeListener(QQ, WQ) {
            this.listeners[QQ] && (this.listeners[QQ].delete(WQ), 0 === this.listeners[QQ].size && delete this.listeners[QQ]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(QQ, WQ) {
            await super._set(QQ, WQ), this.localCache[QQ] = JSON.stringify(WQ)
          }
          async _get(QQ) {
            const WQ = await super._get(QQ);
            return this.localCache[QQ] = JSON.stringify(WQ), WQ
          }
          async _remove(QQ) {
            await super._remove(QQ), delete this.localCache[QQ]
          }
        }
        Dw.type = "LOCAL";
        const pw = Dw;
        class Gw extends Vw {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(QQ, WQ) {}
          _removeListener(QQ, WQ) {}
        }
        Gw.type = "SESSION";
        const Uw = Gw;
        class bw {
          constructor(QQ) {
            this.eventTarget = QQ, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(QQ) {
            const WQ = this.receivers.find((WQ => WQ.isListeningto(QQ)));
            if (WQ) return WQ;
            const XQ = new bw(QQ);
            return this.receivers.push(XQ), XQ
          }
          isListeningto(QQ) {
            return this.eventTarget === QQ
          }
          async handleEvent(QQ) {
            const WQ = QQ,
              {
                eventId: XQ,
                eventType: wQ,
                data: qQ
              } = WQ.data,
              TQ = this.handlersMap[wQ];
            if (!(null === TQ || void 0 === TQ ? void 0 : TQ.size)) return;
            WQ.ports[0].postMessage({
              status: "ack",
              eventId: XQ,
              eventType: wQ
            });
            const zQ = Array.from(TQ).map((async QQ => QQ(WQ.origin, qQ))),
              sQ = await
            function(QQ) {
              return Promise.all(QQ.map((async QQ => {
                try {
                  return {
                    fulfilled: !0,
                    value: await QQ
                  }
                } catch (WQ) {
                  return {
                    fulfilled: !1,
                    reason: WQ
                  }
                }
              })))
            }(zQ);
            WQ.ports[0].postMessage({
              status: "done",
              eventId: XQ,
              eventType: wQ,
              response: sQ
            })
          }
          _subscribe(QQ, WQ) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[QQ] || (this.handlersMap[QQ] = new Set), this.handlersMap[QQ].add(WQ)
          }
          _unsubscribe(QQ, WQ) {
            this.handlersMap[QQ] && WQ && this.handlersMap[QQ].delete(WQ), WQ && 0 !== this.handlersMap[QQ].size || delete this.handlersMap[QQ], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function vw() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            XQ = "";
          for (let wQ = 0; wQ < WQ; wQ++) XQ += Math.floor(10 * Math.random());
          return QQ + XQ
        }
        bw.receivers = [];
        class dw {
          constructor(QQ) {
            this.target = QQ, this.handlers = new Set
          }
          removeMessageHandler(QQ) {
            QQ.messageChannel && (QQ.messageChannel.port1.removeEventListener("message", QQ.KV), QQ.messageChannel.port1.close()), this.handlers.delete(QQ)
          }
          async _send(QQ, WQ) {
            let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const wQ = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!wQ) throw new Error("connection_unavailable");
            let qQ, TQ;
            return new Promise(((zQ, sQ) => {
              const FQ = vw("", 20);
              wQ.port1.start();
              const PQ = setTimeout((() => {
                sQ(new Error("unsupported_event"))
              }), XQ);
              TQ = {
                messageChannel: wQ,
                KV(QQ) {
                  const WQ = QQ;
                  if (WQ.data.eventId === FQ) switch (WQ.data.status) {
                    case "ack":
                      clearTimeout(PQ), qQ = setTimeout((() => {
                        sQ(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(qQ), zQ(WQ.data.response);
                      break;
                    default:
                      clearTimeout(PQ), clearTimeout(qQ), sQ(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(TQ), wQ.port1.addEventListener("message", TQ.KV), this.target.postMessage({
                eventType: QQ,
                eventId: FQ,
                data: WQ
              }, [wQ.port2])
            })).finally((() => {
              TQ && this.removeMessageHandler(TQ)
            }))
          }
        }

        function Hw() {
          return window
        }

        function aw() {
          return "undefined" !== typeof Hw().WorkerGlobalScope && "function" === typeof Hw().importScripts
        }
        const lw = "firebaseLocalStorageDb",
          hw = "firebaseLocalStorage",
          iw = "fbase_key";
        class Aw {
          constructor(QQ) {
            this.request = QQ
          }
          toPromise() {
            return new Promise(((QQ, WQ) => {
              this.request.addEventListener("success", (() => {
                QQ(this.request.result)
              })), this.request.addEventListener("error", (() => {
                WQ(this.request.error)
              }))
            }))
          }
        }

        function Rw(QQ, WQ) {
          return QQ.transaction([hw], WQ ? "readwrite" : "readonly").objectStore(hw)
        }

        function Ew() {
          const QQ = indexedDB.open(lw, 1);
          return new Promise(((WQ, XQ) => {
            QQ.addEventListener("error", (() => {
              XQ(QQ.error)
            })), QQ.addEventListener("upgradeneeded", (() => {
              const WQ = QQ.result;
              try {
                WQ.createObjectStore(hw, {
                  keyPath: iw
                })
              } catch (wQ) {
                XQ(wQ)
              }
            })), QQ.addEventListener("success", (async () => {
              const XQ = QQ.result;
              XQ.objectStoreNames.contains(hw) ? WQ(XQ) : (XQ.close(), await
                function() {
                  const QQ = indexedDB.deleteDatabase(lw);
                  return new Aw(QQ).toPromise()
                }(), WQ(await Ew()))
            }))
          }))
        }
        async function Cw(QQ, WQ, XQ) {
          const wQ = Rw(QQ, !0).put({
            [iw]: WQ,
            value: XQ
          });
          return new Aw(wQ).toPromise()
        }

        function uw(QQ, WQ) {
          const XQ = Rw(QQ, !0).delete(WQ);
          return new Aw(XQ).toPromise()
        }
        class Lw {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Ew()), this.db
          }
          async _withRetries(QQ) {
            let WQ = 0;
            for (;;) try {
              const WQ = await this._openDb();
              return await QQ(WQ)
            } catch (XQ) {
              if (WQ++ > 3) throw XQ;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return aw() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = bw._getInstance(aw() ? self : null), this.receiver._subscribe("keyChanged", (async (QQ, WQ) => ({
              keyProcessed: (await this._poll()).includes(WQ.key)
            }))), this.receiver._subscribe("ping", (async (QQ, WQ) => ["keyChanged"]))
          }
          async initializeSender() {
            var QQ, WQ;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (QQ) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new dw(this.activeServiceWorker);
            const XQ = await this.sender._send("ping", {}, 800);
            XQ && (null === (QQ = XQ[0]) || void 0 === QQ ? void 0 : QQ.fulfilled) && (null === (WQ = XQ[0]) || void 0 === WQ ? void 0 : WQ.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(QQ) {
            if (this.sender && this.activeServiceWorker && function() {
                var QQ;
                return (null === (QQ = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === QQ ? void 0 : QQ.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: QQ
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (WQ) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const QQ = await Ew();
              return await Cw(QQ, yw, "1"), await uw(QQ, yw), !0
            } catch (QQ) {}
            return !1
          }
          async _withPendingWrite(QQ) {
            this.pendingWrites++;
            try {
              await QQ()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(QQ, WQ) {
            return this._withPendingWrite((async () => (await this._withRetries((XQ => Cw(XQ, QQ, WQ))), this.localCache[QQ] = WQ, this.notifyServiceWorker(QQ))))
          }
          async _get(QQ) {
            const WQ = await this._withRetries((WQ => async function(QQ, WQ) {
              const XQ = Rw(QQ, !1).get(WQ),
                wQ = await new Aw(XQ).toPromise();
              return void 0 === wQ ? null : wQ.value
            }(WQ, QQ)));
            return this.localCache[QQ] = WQ, WQ
          }
          async _remove(QQ) {
            return this._withPendingWrite((async () => (await this._withRetries((WQ => uw(WQ, QQ))), delete this.localCache[QQ], this.notifyServiceWorker(QQ))))
          }
          async _poll() {
            const QQ = await this._withRetries((QQ => {
              const WQ = Rw(QQ, !1).getAll();
              return new Aw(WQ).toPromise()
            }));
            if (!QQ) return [];
            if (0 !== this.pendingWrites) return [];
            const WQ = [],
              XQ = new Set;
            for (const {
                fbase_key: wQ,
                value: qQ
              }
              of QQ) XQ.add(wQ), JSON.stringify(this.localCache[wQ]) !== JSON.stringify(qQ) && (this.notifyListeners(wQ, qQ), WQ.push(wQ));
            for (const wQ of Object.keys(this.localCache)) this.localCache[wQ] && !XQ.has(wQ) && (this.notifyListeners(wQ, null), WQ.push(wQ));
            return WQ
          }
          notifyListeners(QQ, WQ) {
            this.localCache[QQ] = WQ;
            const XQ = this.listeners[QQ];
            if (XQ)
              for (const wQ of Array.from(XQ)) wQ(WQ)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(QQ, WQ) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[QQ] || (this.listeners[QQ] = new Set, this._get(QQ)), this.listeners[QQ].add(WQ)
          }
          _removeListener(QQ, WQ) {
            this.listeners[QQ] && (this.listeners[QQ].delete(WQ), 0 === this.listeners[QQ].size && delete this.listeners[QQ]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Lw.type = "LOCAL";
        const kw = Lw;
        const fw = 1e12;
        class Sw {
          constructor(QQ) {
            this.auth = QQ, this.counter = fw, this._widgets = new Map
          }
          render(QQ, WQ) {
            const XQ = this.counter;
            return this._widgets.set(XQ, new tw(QQ, this.auth.name, WQ || {})), this.counter++, XQ
          }
          reset(QQ) {
            var WQ;
            const XQ = QQ || fw;
            null === (WQ = this._widgets.get(XQ)) || void 0 === WQ || WQ.delete(), this._widgets.delete(XQ)
          }
          getResponse(QQ) {
            var WQ;
            const XQ = QQ || fw;
            return (null === (WQ = this._widgets.get(XQ)) || void 0 === WQ ? void 0 : WQ.getResponse()) || ""
          }
          async execute(QQ) {
            var WQ;
            const XQ = QQ || fw;
            return null === (WQ = this._widgets.get(XQ)) || void 0 === WQ || WQ.execute(), ""
          }
        }
        class tw {
          constructor(QQ, WQ, XQ) {
            this.params = XQ, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const wQ = "string" === typeof QQ ? document.getElementById(QQ) : QQ;
            HQ(wQ, "argument-error", {
              appName: WQ
            }), this.container = wQ, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(QQ) {
                const WQ = [],
                  XQ = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let wQ = 0; wQ < QQ; wQ++) WQ.push(XQ.charAt(Math.floor(Math.random() * XQ.length)));
                return WQ.join("")
              }(50);
              const {
                callback: QQ,
                "expired-callback": WQ
              } = this.params;
              if (QQ) try {
                QQ(this.responseToken)
              } catch (XQ) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, WQ) try {
                  WQ()
                } catch (XQ) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const ow = aW("rcb"),
          ew = new AQ(3e4, 6e4);
        class nw {
          constructor() {
            var QQ;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (QQ = Hw().grecaptcha) || void 0 === QQ ? void 0 : QQ.render)
          }
          load(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return HQ(function(QQ) {
              return QQ.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(QQ)
            }(WQ), QQ, "argument-error"), this.shouldResolveImmediately(WQ) && bW(Hw().grecaptcha) ? Promise.resolve(Hw().grecaptcha) : new Promise(((XQ, qQ) => {
              const TQ = Hw().setTimeout((() => {
                qQ(UQ(QQ, "network-request-failed"))
              }), ew.get());
              Hw()[ow] = () => {
                Hw().clearTimeout(TQ), delete Hw()[ow];
                const wQ = Hw().grecaptcha;
                if (!wQ || !bW(wQ)) return void qQ(UQ(QQ, "internal-error"));
                const zQ = wQ.render;
                wQ.render = (QQ, WQ) => {
                  const XQ = zQ(QQ, WQ);
                  return this.counter++, XQ
                }, this.hostLanguage = WQ, XQ(wQ)
              };
              HW(`https://www.google.com/recaptcha/api.js??${(0,wQ.eb)({onload:ow,render:"explicit",hl:WQ})}`).catch((() => {
                clearTimeout(TQ), qQ(UQ(QQ, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(QQ) {
            var WQ;
            return !!(null === (WQ = Hw().grecaptcha) || void 0 === WQ ? void 0 : WQ.render) && (QQ === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class xw {
          async load(QQ) {
            return new Sw(QQ)
          }
          clearedOneInstance() {}
        }
        const Yw = "recaptcha",
          Nw = {
            theme: "light",
            type: "image"
          };
        class Zw {
          constructor(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Nw),
              XQ = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = WQ, this.type = Yw, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = AW(XQ), this.isInvisible = "invisible" === this.parameters.size, HQ("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const wQ = "string" === typeof QQ ? document.getElementById(QQ) : QQ;
            HQ(wQ, this.auth, "argument-error"), this.container = wQ, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new xw : new nw, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const QQ = await this.render(),
              WQ = this.getAssertedRecaptcha(),
              XQ = WQ.getResponse(QQ);
            return XQ || new Promise((XQ => {
              const wQ = QQ => {
                QQ && (this.tokenChangeListeners.delete(wQ), XQ(QQ))
              };
              this.tokenChangeListeners.add(wQ), this.isInvisible && WQ.execute(QQ)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (QQ) {
              return Promise.reject(QQ)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((QQ => {
              throw this.renderPromise = null, QQ
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((QQ => {
              this.container.removeChild(QQ)
            }))
          }
          validateStartingState() {
            HQ(!this.parameters.sitekey, this.auth, "argument-error"), HQ(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), HQ("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(QQ) {
            return WQ => {
              if (this.tokenChangeListeners.forEach((QQ => QQ(WQ))), "function" === typeof QQ) QQ(WQ);
              else if ("string" === typeof QQ) {
                const XQ = Hw()[QQ];
                "function" === typeof XQ && XQ(WQ)
              }
            }
          }
          assertNotDestroyed() {
            HQ(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let QQ = this.container;
              if (!this.isInvisible) {
                const WQ = document.createElement("div");
                QQ.appendChild(WQ), QQ = WQ
              }
              this.widgetId = this.getAssertedRecaptcha().render(QQ, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            HQ(iQ() && !aw(), this.auth, "internal-error"), await
            function() {
              let QQ = null;
              return new Promise((WQ => {
                "complete" !== document.readyState ? (QQ = () => WQ(), window.addEventListener("load", QQ)) : WQ()
              })).catch((WQ => {
                throw QQ && window.removeEventListener("load", QQ), WQ
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const QQ = await async function(QQ) {
              return (await kQ(QQ, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            HQ(QQ, this.auth, "internal-error"), this.parameters.sitekey = QQ
          }
          getAssertedRecaptcha() {
            return HQ(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Ow {
          constructor(QQ, WQ) {
            this.verificationId = QQ, this.onConfirmation = WQ
          }
          confirm(QQ) {
            const WQ = OW._fromVerification(this.verificationId, QQ);
            return this.onConfirmation(WQ)
          }
        }
        async function Kw(QQ, WQ, XQ) {
          const qQ = AW(QQ),
            TQ = await Qq(qQ, WQ, (0, wQ.L)(XQ));
          return new Ow(TQ, (QQ => UX(qQ, QQ)))
        }
        async function mw(QQ, WQ, XQ) {
          const qQ = (0, wQ.L)(QQ);
          await DX(!1, qQ, "phone");
          const TQ = await Qq(qQ.auth, WQ, (0, wQ.L)(XQ));
          return new Ow(TQ, (QQ => bX(qQ, QQ)))
        }
        async function Mw(QQ, WQ, XQ) {
          const qQ = (0, wQ.L)(QQ),
            TQ = await Qq(qQ.auth, WQ, (0, wQ.L)(XQ));
          return new Ow(TQ, (QQ => vX(qQ, QQ)))
        }
        async function Qq(QQ, WQ, XQ) {
          var wQ;
          const qQ = await XQ.verify();
          try {
            let TQ;
            if (HQ("string" === typeof qQ, QQ, "argument-error"), HQ(XQ.type === Yw, QQ, "argument-error"), TQ = "string" === typeof WQ ? {
                phoneNumber: WQ
              } : WQ, "session" in TQ) {
              const WQ = TQ.session;
              if ("phoneNumber" in TQ) {
                HQ("enroll" === WQ.type, QQ, "internal-error");
                const XQ = await
                function(QQ, WQ) {
                  return kQ(QQ, "POST", "/v2/accounts/mfaEnrollment:start", LQ(QQ, WQ))
                }(QQ, {
                  idToken: WQ.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: TQ.phoneNumber,
                    recaptchaToken: qQ
                  }
                });
                return XQ.phoneSessionInfo.sessionInfo
              } {
                HQ("signin" === WQ.type, QQ, "internal-error");
                const XQ = (null === (wQ = TQ.multiFactorHint) || void 0 === wQ ? void 0 : wQ.uid) || TQ.multiFactorUid;
                HQ(XQ, QQ, "missing-multi-factor-info");
                const zQ = await
                function(QQ, WQ) {
                  return kQ(QQ, "POST", "/v2/accounts/mfaSignIn:start", LQ(QQ, WQ))
                }(QQ, {
                  mfaPendingCredential: WQ.credential,
                  mfaEnrollmentId: XQ,
                  phoneSignInInfo: {
                    recaptchaToken: qQ
                  }
                });
                return zQ.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: WQ
              } = await async function(QQ, WQ) {
                return kQ(QQ, "POST", "/v1/accounts:sendVerificationCode", LQ(QQ, WQ))
              }(QQ, {
                phoneNumber: TQ.phoneNumber,
                recaptchaToken: qQ
              });
              return WQ
            }
          } finally {
            XQ._reset()
          }
        }
        async function Wq(QQ, WQ) {
          await VX((0, wQ.L)(QQ), WQ)
        }
        class Xq {
          constructor(QQ) {
            this.providerId = Xq.PROVIDER_ID, this.auth = AW(QQ)
          }
          verifyPhoneNumber(QQ, WQ) {
            return Qq(this.auth, QQ, (0, wQ.L)(WQ))
          }
          static credential(QQ, WQ) {
            return OW._fromVerification(QQ, WQ)
          }
          static credentialFromResult(QQ) {
            const WQ = QQ;
            return Xq.credentialFromTaggedObject(WQ)
          }
          static credentialFromError(QQ) {
            return Xq.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: WQ
            } = QQ;
            if (!WQ) return null;
            const {
              phoneNumber: XQ,
              temporaryProof: wQ
            } = WQ;
            return XQ && wQ ? OW._fromTokenResponse(XQ, wQ) : null
          }
        }

        function wq(QQ, WQ) {
          return WQ ? TW(WQ) : (HQ(QQ._popupRedirectResolver, QQ, "argument-error"), QQ._popupRedirectResolver)
        }
        Xq.PROVIDER_ID = "phone", Xq.PHONE_SIGN_IN_METHOD = "phone";
        class qq extends kW {
          constructor(QQ) {
            super("custom", "custom"), this.params = QQ
          }
          _getIdTokenResponse(QQ) {
            return YW(QQ, this._buildIdpRequest())
          }
          _linkToIdToken(QQ, WQ) {
            return YW(QQ, this._buildIdpRequest(WQ))
          }
          _getReauthenticationResolver(QQ) {
            return YW(QQ, this._buildIdpRequest())
          }
          _buildIdpRequest(QQ) {
            const WQ = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return QQ && (WQ.idToken = QQ), WQ
          }
        }

        function Tq(QQ) {
          return GX(QQ.auth, new qq(QQ), QQ.bypassAuthState)
        }

        function zq(QQ) {
          const {
            auth: WQ,
            user: XQ
          } = QQ;
          return HQ(XQ, WQ, "internal-error"), pX(XQ, new qq(QQ), QQ.bypassAuthState)
        }
        async function sq(QQ) {
          const {
            auth: WQ,
            user: XQ
          } = QQ;
          return HQ(XQ, WQ, "internal-error"), VX(XQ, new qq(QQ), QQ.bypassAuthState)
        }
        class Fq {
          constructor(QQ, WQ, XQ, wQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = QQ, this.resolver = XQ, this.user = wQ, this.bypassAuthState = qQ, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(WQ) ? WQ : [WQ]
          }
          execute() {
            return new Promise((async (QQ, WQ) => {
              this.pendingPromise = {
                resolve: QQ,
                reject: WQ
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (XQ) {
                this.reject(XQ)
              }
            }))
          }
          async onAuthEvent(QQ) {
            const {
              urlResponse: WQ,
              sessionId: XQ,
              postBody: wQ,
              tenantId: qQ,
              error: TQ,
              type: zQ
            } = QQ;
            if (TQ) return void this.reject(TQ);
            const sQ = {
              auth: this.auth,
              requestUri: WQ,
              sessionId: XQ,
              tenantId: qQ || void 0,
              postBody: wQ || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(zQ)(sQ))
            } catch (FQ) {
              this.reject(FQ)
            }
          }
          onError(QQ) {
            this.reject(QQ)
          }
          getIdpTask(QQ) {
            switch (QQ) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return Tq;
              case "linkViaPopup":
              case "linkViaRedirect":
                return sq;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return zq;
              default:
                GQ(this.auth, "internal-error")
            }
          }
          resolve(QQ) {
            lQ(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(QQ), this.unregisterAndCleanUp()
          }
          reject(QQ) {
            lQ(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(QQ), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const Pq = new AQ(2e3, 1e4);
        async function gq(QQ, WQ, XQ) {
          const wQ = AW(QQ);
          vQ(QQ, WQ, QX);
          const qQ = wq(wQ, XQ);
          return new Iq(wQ, "signInViaPopup", WQ, qQ).executeNotNull()
        }
        async function Jq(QQ, WQ, XQ) {
          const qQ = (0, wQ.L)(QQ);
          vQ(qQ.auth, WQ, QX);
          const TQ = wq(qQ.auth, XQ);
          return new Iq(qQ.auth, "reauthViaPopup", WQ, TQ, qQ).executeNotNull()
        }
        async function rq(QQ, WQ, XQ) {
          const qQ = (0, wQ.L)(QQ);
          vQ(qQ.auth, WQ, QX);
          const TQ = wq(qQ.auth, XQ);
          return new Iq(qQ.auth, "linkViaPopup", WQ, TQ, qQ).executeNotNull()
        }
        class Iq extends Fq {
          constructor(QQ, WQ, XQ, wQ, qQ) {
            super(QQ, WQ, wQ, qQ), this.provider = XQ, this.authWindow = null, this.pollId = null, Iq.currentPopupAction && Iq.currentPopupAction.cancel(), Iq.currentPopupAction = this
          }
          async executeNotNull() {
            const QQ = await this.execute();
            return HQ(QQ, this.auth, "internal-error"), QQ
          }
          async onExecution() {
            lQ(1 === this.filter.length, "Popup operations only handle one event");
            const QQ = vw();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], QQ), this.authWindow.associatedEvent = QQ, this.resolver._originValidation(this.auth).catch((QQ => {
              this.reject(QQ)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (QQ => {
              QQ || this.reject(UQ(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var QQ;
            return (null === (QQ = this.authWindow) || void 0 === QQ ? void 0 : QQ.associatedEvent) || null
          }
          cancel() {
            this.reject(UQ(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Iq.currentPopupAction = null
          }
          pollUserCancellation() {
            const QQ = () => {
              var WQ, XQ;
              (null === (XQ = null === (WQ = this.authWindow) || void 0 === WQ ? void 0 : WQ.window) || void 0 === XQ ? void 0 : XQ.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(UQ(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(QQ, Pq.get())
            };
            QQ()
          }
        }
        Iq.currentPopupAction = null;
        const jq = "pendingRedirect",
          Bq = new Map;
        class yq extends Fq {
          constructor(QQ, WQ) {
            super(QQ, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], WQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let QQ = Bq.get(this.auth._key());
            if (!QQ) {
              try {
                const WQ = await async function(QQ, WQ) {
                  const XQ = Gq(WQ),
                    wQ = pq(QQ);
                  if (!await wQ._isAvailable()) return !1;
                  const qQ = "true" === await wQ._get(XQ);
                  return await wQ._remove(XQ), qQ
                }(this.resolver, this.auth) ? await super.execute() : null;
                QQ = () => Promise.resolve(WQ)
              } catch (WQ) {
                QQ = () => Promise.reject(WQ)
              }
              Bq.set(this.auth._key(), QQ)
            }
            return this.bypassAuthState || Bq.set(this.auth._key(), (() => Promise.resolve(null))), QQ()
          }
          async onAuthEvent(QQ) {
            if ("signInViaRedirect" === QQ.type) return super.onAuthEvent(QQ);
            if ("unknown" !== QQ.type) {
              if (QQ.eventId) {
                const WQ = await this.auth._redirectUserForId(QQ.eventId);
                if (WQ) return this.user = WQ, super.onAuthEvent(QQ);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Vq(QQ, WQ) {
          return pq(QQ)._set(Gq(WQ), "true")
        }

        function Dq(QQ, WQ) {
          Bq.set(QQ._key(), WQ)
        }

        function pq(QQ) {
          return TW(QQ._redirectPersistence)
        }

        function Gq(QQ) {
          return FW(jq, QQ.config.apiKey, QQ.name)
        }

        function Uq(QQ, WQ, XQ) {
          return async function(QQ, WQ, XQ) {
            const wQ = AW(QQ);
            vQ(QQ, WQ, QX), await wQ._initializationPromise;
            const qQ = wq(wQ, XQ);
            return await Vq(qQ, wQ), qQ._openRedirect(wQ, WQ, "signInViaRedirect")
          }(QQ, WQ, XQ)
        }

        function bq(QQ, WQ, XQ) {
          return async function(QQ, WQ, XQ) {
            const qQ = (0, wQ.L)(QQ);
            vQ(qQ.auth, WQ, QX), await qQ.auth._initializationPromise;
            const TQ = wq(qQ.auth, XQ);
            await Vq(TQ, qQ.auth);
            const zQ = await aq(qQ);
            return TQ._openRedirect(qQ.auth, WQ, "reauthViaRedirect", zQ)
          }(QQ, WQ, XQ)
        }

        function vq(QQ, WQ, XQ) {
          return async function(QQ, WQ, XQ) {
            const qQ = (0, wQ.L)(QQ);
            vQ(qQ.auth, WQ, QX), await qQ.auth._initializationPromise;
            const TQ = wq(qQ.auth, XQ);
            await DX(!1, qQ, WQ.providerId), await Vq(TQ, qQ.auth);
            const zQ = await aq(qQ);
            return TQ._openRedirect(qQ.auth, WQ, "linkViaRedirect", zQ)
          }(QQ, WQ, XQ)
        }
        async function dq(QQ, WQ) {
          return await AW(QQ)._initializationPromise, Hq(QQ, WQ, !1)
        }
        async function Hq(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const wQ = AW(QQ),
            qQ = wq(wQ, WQ),
            TQ = new yq(wQ, qQ, XQ),
            zQ = await TQ.execute();
          return zQ && !XQ && (delete zQ.user._redirectEventId, await wQ._persistUserIfCurrent(zQ.user), await wQ._setRedirectUser(null, WQ)), zQ
        }
        async function aq(QQ) {
          const WQ = vw(`${QQ.uid}:::`);
          return QQ._redirectEventId = WQ, await QQ.auth._setRedirectUser(QQ), await QQ.auth._persistUserIfCurrent(QQ), WQ
        }
        class lq {
          constructor(QQ) {
            this.auth = QQ, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(QQ) {
            this.consumers.add(QQ), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, QQ) && (this.sendToConsumer(this.queuedRedirectEvent, QQ), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(QQ) {
            this.consumers.delete(QQ)
          }
          onEvent(QQ) {
            if (this.hasEventBeenHandled(QQ)) return !1;
            let WQ = !1;
            return this.consumers.forEach((XQ => {
              this.isEventForConsumer(QQ, XQ) && (WQ = !0, this.sendToConsumer(QQ, XQ), this.saveEventToCache(QQ))
            })), this.hasHandledPotentialRedirect || ! function(QQ) {
              switch (QQ.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return iq(QQ);
                default:
                  return !1
              }
            }(QQ) || (this.hasHandledPotentialRedirect = !0, WQ || (this.queuedRedirectEvent = QQ, WQ = !0)), WQ
          }
          sendToConsumer(QQ, WQ) {
            var XQ;
            if (QQ.error && !iq(QQ)) {
              const wQ = (null === (XQ = QQ.error.code) || void 0 === XQ ? void 0 : XQ.split("auth/")[1]) || "internal-error";
              WQ.onError(UQ(this.auth, wQ))
            } else WQ.onAuthEvent(QQ)
          }
          isEventForConsumer(QQ, WQ) {
            const XQ = null === WQ.eventId || !!QQ.eventId && QQ.eventId === WQ.eventId;
            return WQ.filter.includes(QQ.type) && XQ
          }
          hasEventBeenHandled(QQ) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(hq(QQ))
          }
          saveEventToCache(QQ) {
            this.cachedEventUids.add(hq(QQ)), this.lastProcessedEventTime = Date.now()
          }
        }

        function hq(QQ) {
          return [QQ.type, QQ.eventId, QQ.sessionId, QQ.tenantId].filter((QQ => QQ)).join("-")
        }

        function iq(QQ) {
          let {
            type: WQ,
            error: XQ
          } = QQ;
          return "unknown" === WQ && "auth/no-auth-event" === (null === XQ || void 0 === XQ ? void 0 : XQ.code)
        }
        const cq = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Aq = /^https?/;
        async function Rq(QQ) {
          if (QQ.config.emulator) return;
          const {
            authorizedDomains: WQ
          } = await async function(QQ) {
            return kQ(QQ, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(QQ);
          for (const wQ of WQ) try {
            if (Eq(wQ)) return
          } catch (XQ) {}
          GQ(QQ, "unauthorized-domain")
        }

        function Eq(QQ) {
          const WQ = hQ(),
            {
              protocol: XQ,
              hostname: wQ
            } = new URL(WQ);
          if (QQ.startsWith("chrome-extension://")) {
            const qQ = new URL(QQ);
            return "" === qQ.hostname && "" === wQ ? "chrome-extension:" === XQ && QQ.replace("chrome-extension://", "") === WQ.replace("chrome-extension://", "") : "chrome-extension:" === XQ && qQ.hostname === wQ
          }
          if (!Aq.test(XQ)) return !1;
          if (cq.test(QQ)) return wQ === QQ;
          const qQ = QQ.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + qQ + "|" + qQ + ")$", "i").test(wQ)
        }
        const Cq = new AQ(3e4, 6e4);

        function uq() {
          const QQ = Hw().___jsl;
          if (null === QQ || void 0 === QQ ? void 0 : QQ.H)
            for (const WQ of Object.keys(QQ.H))
              if (QQ.H[WQ].r = QQ.H[WQ].r || [], QQ.H[WQ].L = QQ.H[WQ].L || [], QQ.H[WQ].r = [...QQ.H[WQ].L], QQ.CP)
                for (let XQ = 0; XQ < QQ.CP.length; XQ++) QQ.CP[XQ] = null
        }
        let Lq = null;

        function kq(QQ) {
          return Lq = Lq || function(QQ) {
            return new Promise(((WQ, XQ) => {
              var wQ, qQ, TQ;

              function zQ() {
                uq(), gapi.load("gapi.iframes", {
                  callback: () => {
                    WQ(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    uq(), XQ(UQ(QQ, "network-request-failed"))
                  },
                  timeout: Cq.get()
                })
              }
              if (null === (qQ = null === (wQ = Hw().gapi) || void 0 === wQ ? void 0 : wQ.iframes) || void 0 === qQ ? void 0 : qQ.Iframe) WQ(gapi.iframes.getContext());
              else {
                if (!(null === (TQ = Hw().gapi) || void 0 === TQ ? void 0 : TQ.load)) {
                  const WQ = aW("iframefcb");
                  return Hw()[WQ] = () => {
                    gapi.load ? zQ() : XQ(UQ(QQ, "network-request-failed"))
                  }, HW(`https://apis.google.com/js/api.js?onload=${WQ}`).catch((QQ => XQ(QQ)))
                }
                zQ()
              }
            })).catch((QQ => {
              throw Lq = null, QQ
            }))
          }(QQ), Lq
        }
        const fq = new AQ(5e3, 15e3),
          Sq = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          tq = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function oq(QQ) {
          const WQ = QQ.config;
          HQ(WQ.authDomain, QQ, "auth-domain-config-required");
          const XQ = WQ.emulator ? RQ(WQ, "emulator/auth/iframe") : `https://${QQ.config.authDomain}/__/auth/iframe`,
            TQ = {
              apiKey: WQ.apiKey,
              appName: QQ.name,
              v: qQ.g
            },
            zQ = tq.get(QQ.config.apiHost);
          zQ && (TQ.eid = zQ);
          const sQ = QQ._getFrameworks();
          return sQ.length && (TQ.fw = sQ.join(",")), `${XQ}?${(0,wQ.eb)(TQ).slice(1)}`
        }
        const eq = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class nq {
          constructor(QQ) {
            this.window = QQ, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (QQ) {}
          }
        }

        function xq(QQ, WQ, XQ) {
          let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const zQ = Math.max((window.screen.availHeight - TQ) / 2, 0).toString(),
            sQ = Math.max((window.screen.availWidth - qQ) / 2, 0).toString();
          let FQ = "";
          const PQ = Object.assign(Object.assign({}, eq), {
              width: qQ.toString(),
              height: TQ.toString(),
              top: zQ,
              left: sQ
            }),
            gQ = (0, wQ.N)().toLowerCase();
          XQ && (FQ = IW(gQ) ? "_blank" : XQ), JW(gQ) && (WQ = WQ || "http://localhost", PQ.scrollbars = "yes");
          const JQ = Object.entries(PQ).reduce(((QQ, WQ) => {
            let [XQ, wQ] = WQ;
            return `${QQ}${XQ}=${wQ},`
          }), "");
          if (function() {
              var QQ;
              return DW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)()) && !!(null === (QQ = window.navigator) || void 0 === QQ ? void 0 : QQ.standalone)
            }(gQ) && "_self" !== FQ) return function(QQ, WQ) {
            const XQ = document.createElement("a");
            XQ.href = QQ, XQ.target = WQ;
            const wQ = document.createEvent("MouseEvent");
            wQ.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), XQ.dispatchEvent(wQ)
          }(WQ || "", FQ), new nq(null);
          const rQ = window.open(WQ || "", FQ, JQ);
          HQ(rQ, QQ, "popup-blocked");
          try {
            rQ.focus()
          } catch (IQ) {}
          return new nq(rQ)
        }
        const Yq = "__/auth/handler",
          Nq = "emulator/auth/handler",
          Zq = encodeURIComponent("fac");
        async function Oq(QQ, WQ, XQ, TQ, zQ, sQ) {
            HQ(QQ.config.authDomain, QQ, "auth-domain-config-required"), HQ(QQ.config.apiKey, QQ, "invalid-api-key");
            const FQ = {
              apiKey: QQ.config.apiKey,
              appName: QQ.name,
              authType: XQ,
              redirectUrl: TQ,
              v: qQ.g,
              eventId: zQ
            };
            if (WQ instanceof QX) {
              WQ.setDefaultLanguage(QQ.languageCode), FQ.providerId = WQ.providerId || "", (0, wQ.T)(WQ.getCustomParameters()) || (FQ.customParameters = JSON.stringify(WQ.getCustomParameters()));
              for (const [QQ, WQ] of Object.entries(sQ || {})) FQ[QQ] = WQ
            }
            if (WQ instanceof WX) {
              const QQ = WQ.getScopes().filter((QQ => "" !== QQ));
              QQ.length > 0 && (FQ.scopes = QQ.join(","))
            }
            QQ.tenantId && (FQ.tid = QQ.tenantId);
            const PQ = FQ;
            for (const wQ of Object.keys(PQ)) void 0 === PQ[wQ] && delete PQ[wQ];
            const gQ = await QQ._getAppCheckToken(),
              JQ = gQ ? `#${Zq}=${encodeURIComponent(gQ)}` : "";
            return `${function(QQ){let{config:WQ}=QQ;if(!WQ.emulator)return`
            https: //${WQ.authDomain}/${Yq}`;return RQ(WQ,Nq)}(QQ)}?${(0,wQ.eb)(PQ).slice(1)}${JQ}`}const Kq="webStorageSupport";const mq=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uw,this._completeRedirectFn=Hq,this._overrideRedirectResult=Dq}async _openPopup(QQ,WQ,XQ,wQ){var qQ;lQ(null===(qQ=this.eventManagers[QQ._key()])||void 0===qQ?void 0:qQ.manager,"_initialize() not called before _openPopup()");return xq(QQ,await Oq(QQ,WQ,XQ,hQ(),wQ),vw())}async _openRedirect(QQ,WQ,XQ,wQ){await this._originValidation(QQ);return function(QQ){Hw().location.href=QQ}(await Oq(QQ,WQ,XQ,hQ(),wQ)),new Promise((()=>{}))}_initialize(QQ){const WQ=QQ._key();if(this.eventManagers[WQ]){const{manager:QQ,promise:XQ}=this.eventManagers[WQ];return QQ?Promise.resolve(QQ):(lQ(XQ,"If manager is not set, promise should be"),XQ)}const XQ=this.initAndGetManager(QQ);return this.eventManagers[WQ]={promise:XQ},XQ.catch((()=>{delete this.eventManagers[WQ]})),XQ}async initAndGetManager(QQ){const WQ=await async function(QQ){const WQ=await kq(QQ),XQ=Hw().gapi;return HQ(XQ,QQ,"internal-error"),WQ.open({where:document.body,url:oq(QQ),messageHandlersFilter:XQ.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sq,dontclear:!0},(WQ=>new Promise((async(XQ,wQ)=>{await WQ.restyle({setHideOnLeave:!1});const qQ=UQ(QQ,"network-request-failed"),TQ=Hw().setTimeout((()=>{wQ(qQ)}),fq.get());function zQ(){Hw().clearTimeout(TQ),XQ(WQ)}WQ.ping(zQ).then(zQ,(()=>{wQ(qQ)}))}))))}(QQ),XQ=new lq(QQ);return WQ.register("authEvent",(WQ=>{HQ(null===WQ||void 0===WQ?void 0:WQ.authEvent,QQ,"invalid-auth-event");return{status:XQ.onEvent(WQ.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[QQ._key()]={manager:XQ},this.iframes[QQ._key()]=WQ,XQ}_isIframeWebStorageSupported(QQ,WQ){this.iframes[QQ._key()].send(Kq,{type:Kq},(XQ=>{var wQ;const qQ=null===(wQ=null===XQ||void 0===XQ?void 0:XQ[0])||void 0===wQ?void 0:wQ[Kq];void 0!==qQ&&WQ(!!qQ),GQ(QQ,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(QQ){const WQ=QQ._key();return this.originValidationPromises[WQ]||(this.originValidationPromises[WQ]=Rq(QQ)),this.originValidationPromises[WQ]}get _shouldInitProactively(){return pW()||rW()||DW()}};class Mq{constructor(QQ){this.factorId=QQ}_process(QQ,WQ,XQ){switch(WQ.type){case"enroll":return this._finalizeEnroll(QQ,WQ.credential,XQ);case"signin":return this._finalizeSignIn(QQ,WQ.credential);default:return aQ("unexpected MultiFactorSessionType")}}}class QT extends Mq{constructor(QQ){super("phone"),this.credential=QQ}static _fromCredential(QQ){return new QT(QQ)}_finalizeEnroll(QQ,WQ,XQ){return function(QQ,WQ){return kQ(QQ,"POST","/v2/accounts/mfaEnrollment:finalize",LQ(QQ,WQ))}(QQ,{idToken:WQ,displayName:XQ,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(QQ,WQ){return function(QQ,WQ){return kQ(QQ,"POST","/v2/accounts/mfaSignIn:finalize",LQ(QQ,WQ))}(QQ,{mfaPendingCredential:WQ,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class WT{constructor(){}static assertion(QQ){return QT._fromCredential(QQ)}}WT.FACTOR_ID="phone";class XT{static assertionForEnrollment(QQ,WQ){return wT._fromSecret(QQ,WQ)}static assertionForSignIn(QQ,WQ){return wT._fromEnrollmentId(QQ,WQ)}static async generateSecret(QQ){const WQ=QQ;HQ("undefined"!==typeof WQ.auth,"internal-error");const XQ=await(wQ=WQ.auth,qQ={idToken:WQ.credential,totpEnrollmentInfo:{}},kQ(wQ,"POST","/v2/accounts/mfaEnrollment:start",LQ(wQ,qQ)));var wQ,qQ;return qT._fromStartTotpMfaEnrollmentResponse(XQ,WQ.auth)}}XT.FACTOR_ID="totp";class wT extends Mq{constructor(QQ,WQ,XQ){super("totp"),this.otp=QQ,this.enrollmentId=WQ,this.secret=XQ}static _fromSecret(QQ,WQ){return new wT(WQ,void 0,QQ)}static _fromEnrollmentId(QQ,WQ){return new wT(WQ,QQ)}async _finalizeEnroll(QQ,WQ,XQ){return HQ("undefined"!==typeof this.secret,QQ,"argument-error"),function(QQ,WQ){return kQ(QQ,"POST","/v2/accounts/mfaEnrollment:finalize",LQ(QQ,WQ))}(QQ,{idToken:WQ,displayName:XQ,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(QQ,WQ){HQ(void 0!==this.enrollmentId&&void 0!==this.otp,QQ,"argument-error");const XQ={verificationCode:this.otp};return function(QQ,WQ){return kQ(QQ,"POST","/v2/accounts/mfaSignIn:finalize",LQ(QQ,WQ))}(QQ,{mfaPendingCredential:WQ,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:XQ})}}class qT{constructor(QQ,WQ,XQ,wQ,qQ,TQ,zQ){this.sessionInfo=TQ,this.auth=zQ,this.secretKey=QQ,this.hashingAlgorithm=WQ,this.codeLength=XQ,this.codeIntervalSeconds=wQ,this.enrollmentCompletionDeadline=qQ}static _fromStartTotpMfaEnrollmentResponse(QQ,WQ){return new qT(QQ.totpSessionInfo.sharedSecretKey,QQ.totpSessionInfo.hashingAlgorithm,QQ.totpSessionInfo.verificationCodeLength,QQ.totpSessionInfo.periodSec,new Date(QQ.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),QQ.totpSessionInfo.sessionInfo,WQ)}_makeTotpVerificationInfo(QQ){return{sessionInfo:this.sessionInfo,verificationCode:QQ}}generateQrCodeUrl(QQ,WQ){var XQ;let wQ=!1;return(TT(QQ)||TT(WQ))&&(wQ=!0),wQ&&(TT(QQ)&&(QQ=(null===(XQ=this.auth.currentUser)||void 0===XQ?void 0:XQ.email)||"unknownuser"),TT(WQ)&&(WQ=this.auth.name)),`otpauth://totp/${WQ}:${QQ}?secret=${this.secretKey}&issuer=${WQ}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function TT(QQ){return"undefined"===typeof QQ||0===(null===QQ||void 0===QQ?void 0:QQ.length)}var zT="@firebase/auth",sT="0.23.2";class FT{constructor(QQ){this.auth=QQ,this.internalListeners=new Map}getUid(){var QQ;return this.assertAuthConfigured(),(null===(QQ=this.auth.currentUser)||void 0===QQ?void 0:QQ.uid)||null}async getToken(QQ){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(QQ)}}addAuthTokenListener(QQ){if(this.assertAuthConfigured(),this.internalListeners.has(QQ))return;const WQ=this.auth.onIdTokenChanged((WQ=>{QQ((null===WQ||void 0===WQ?void 0:WQ.stsTokenManager.accessToken)||null)}));this.internalListeners.set(QQ,WQ),this.updateProactiveRefresh()}removeAuthTokenListener(QQ){this.assertAuthConfigured();const WQ=this.internalListeners.get(QQ);WQ&&(this.internalListeners.delete(QQ),WQ(),this.updateProactiveRefresh())}assertAuthConfigured(){HQ(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const PT=(0,wQ.I)("authIdTokenMaxAge")||300;let gT=null;const JT=QQ=>async WQ=>{const XQ=WQ&&await WQ.getIdTokenResult(),wQ=XQ&&((new Date).getTime()-Date.parse(XQ.issuedAtTime))/1e3;if(wQ&&wQ>PT)return;const qQ=null===XQ||void 0===XQ?void 0:XQ.token;gT!==qQ&&(gT=qQ,await fetch(QQ,{method:qQ?"POST":"DELETE",headers:qQ?{Authorization:`Bearer ${qQ}`}:{}}))};function rT(){let QQ=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,qQ.O)();const WQ=(0,qQ.B)(QQ,"auth");if(WQ.isInitialized())return WQ.getImmediate();const XQ=EW(QQ,{popupRedirectResolver:mq,persistence:[kw,pw,Uw]}),TQ=(0,wQ.I)("authTokenSyncURL");if(TQ){const QQ=JT(TQ);qw(XQ,QQ,(()=>QQ(XQ.currentUser))),ww(XQ,(WQ=>QQ(WQ)))}const zQ=(0,wQ.F)("auth");return zQ&&CW(XQ,`http://${zQ}`),XQ}var IT;IT="Browser",(0,qQ.E)(new sQ.e("auth",((QQ,WQ)=>{let{options:XQ}=WQ;const wQ=QQ.getProvider("app").getImmediate(),qQ=QQ.getProvider("heartbeat"),TQ=QQ.getProvider("app-check-internal"),{apiKey:zQ,authDomain:sQ}=wQ.options;HQ(zQ&&!zQ.includes(":"),"invalid-api-key",{appName:wQ.name});const FQ={apiKey:zQ,authDomain:sQ,clientPlatform:IT,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GW(IT)},PQ=new cW(wQ,qQ,TQ,FQ);return function(QQ,WQ){const XQ=(null===WQ||void 0===WQ?void 0:WQ.persistence)||[],wQ=(Array.isArray(XQ)?XQ:[XQ]).map(TW);(null===WQ||void 0===WQ?void 0:WQ.errorMap)&&QQ._updateErrorMap(WQ.errorMap),QQ._initializeWithPersistence(wQ,null===WQ||void 0===WQ?void 0:WQ.popupRedirectResolver)}(PQ,XQ),PQ}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((QQ,WQ,XQ)=>{QQ.getProvider("auth-internal").initialize()}))),(0,qQ.E)(new sQ.e("auth-internal",(QQ=>(QQ=>new FT(QQ))(AW(QQ.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,qQ._)(zT,sT,function(QQ){switch(QQ){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(IT)),(0,qQ._)(zT,sT,"esm2017")}};Object.freeze(modules);for(const QQ in modules)Object.freeze(modules[QQ]);