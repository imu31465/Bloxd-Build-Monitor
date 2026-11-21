/*! For license information please see bqoxjr.260.60a9a35e.chunk.js.LICENSE.txt */
export const id = 260;
export const ids = [260];
export const modules = {
    39965: (QQ, FQ, wQ) => {
        wQ.r(FQ), wQ.d(FQ, {
          ActionCodeOperation: () => bQ,
          ActionCodeURL: () => yF,
          AuthCredential: () => jF,
          AuthErrorCodes: () => eQ,
          EmailAuthCredential: () => EF,
          EmailAuthProvider: () => dF,
          FacebookAuthProvider: () => Lw,
          FactorId: () => vQ,
          GithubAuthProvider: () => ow,
          GoogleAuthProvider: () => qw,
          OAuthCredential: () => gF,
          OAuthProvider: () => ww,
          OperationType: () => HQ,
          PhoneAuthCredential: () => ZF,
          PhoneAuthProvider: () => wq,
          PhoneMultiFactorGenerator: () => Fo,
          ProviderId: () => mQ,
          RecaptchaVerifier: () => PL,
          SAMLAuthProvider: () => kw,
          SignInMethod: () => uQ,
          TotpMultiFactorGenerator: () => wo,
          TotpSecret: () => qo,
          TwitterAuthProvider: () => vw,
          applyActionCode: () => Nw,
          beforeAuthStateChanged: () => oL,
          browserLocalPersistence: () => pL,
          browserPopupRedirectResolver: () => Bq,
          browserSessionPersistence: () => CL,
          checkActionCode: () => Tw,
          confirmPasswordReset: () => Uw,
          connectAuthEmulator: () => KF,
          createUserWithEmailAndPassword: () => zw,
          debugErrorMap: () => xQ,
          deleteUser: () => uL,
          fetchSignInMethodsForEmail: () => fw,
          getAdditionalUserInfo: () => FL,
          getAuth: () => bo,
          getIdToken: () => EQ,
          getIdTokenResult: () => nQ,
          getMultiFactorResolver: () => YL,
          getRedirectResult: () => iq,
          inMemoryPersistence: () => kF,
          indexedDBLocalPersistence: () => jL,
          initializeAuth: () => TF,
          initializeRecaptchaConfig: () => LL,
          isSignInWithEmailLink: () => aw,
          linkWithCredential: () => Sw,
          linkWithPhoneNumber: () => BL,
          linkWithPopup: () => bq,
          linkWithRedirect: () => Sq,
          multiFactor: () => tL,
          onAuthStateChanged: () => DL,
          onIdTokenChanged: () => qL,
          parseActionCodeURL: () => BF,
          prodErrorMap: () => AQ,
          reauthenticateWithCredential: () => iw,
          reauthenticateWithPhoneNumber: () => dL,
          reauthenticateWithPopup: () => Hq,
          reauthenticateWithRedirect: () => Cq,
          reload: () => QF,
          sendEmailVerification: () => Vw,
          sendPasswordResetEmail: () => Iw,
          sendSignInLinkToEmail: () => jw,
          setPersistence: () => wL,
          signInAnonymously: () => bw,
          signInWithCredential: () => Cw,
          signInWithCustomToken: () => Ww,
          signInWithEmailAndPassword: () => lw,
          signInWithEmailLink: () => Xw,
          signInWithPhoneNumber: () => yL,
          signInWithPopup: () => uq,
          signInWithRedirect: () => cq,
          signOut: () => mL,
          unlink: () => tw,
          updateCurrentUser: () => vL,
          updateEmail: () => Ew,
          updatePassword: () => nw,
          updatePhoneNumber: () => Fq,
          updateProfile: () => Jw,
          useDeviceLanguage: () => kL,
          verifyBeforeUpdateEmail: () => hw,
          verifyPasswordResetCode: () => Kw
        });
        var LQ = wQ(39949),
          qQ = wQ(39933);

        function oQ(QQ, FQ) {
          var wQ = {};
          for (var LQ in QQ) Object.prototype.hasOwnProperty.call(QQ, LQ) && FQ.indexOf(LQ) < 0 && (wQ[LQ] = QQ[LQ]);
          if (null != QQ && "function" === typeof Object.getOwnPropertySymbols) {
            var qQ = 0;
            for (LQ = Object.getOwnPropertySymbols(QQ); qQ < LQ.length; qQ++) FQ.indexOf(LQ[qQ]) < 0 && Object.prototype.propertyIsEnumerable.call(QQ, LQ[qQ]) && (wQ[LQ[qQ]] = QQ[LQ[qQ]])
          }
          return wQ
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var DQ = wQ(39956),
          kQ = wQ(39942);
        const vQ = {
            PHONE: "phone",
            TOTP: "totp"
          },
          mQ = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          uQ = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          HQ = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          bQ = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function YQ() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const xQ = function() {
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
          AQ = YQ,
          tQ = new LQ.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          eQ = {
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
          MQ = new DQ.f("@firebase/auth");

        function GQ(QQ) {
          if (MQ.logLevel <= DQ.b.ERROR) {
            for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
            MQ.error(`Auth (${qQ.g}): ${QQ}`, ...wQ)
          }
        }

        function pQ(QQ) {
          for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
          throw iQ(QQ, ...wQ)
        }

        function cQ(QQ) {
          for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
          return iQ(QQ, ...wQ)
        }

        function CQ(QQ, FQ, wQ) {
          const qQ = Object.assign(Object.assign({}, AQ()), {
            [FQ]: wQ
          });
          return new LQ.h("auth", "Firebase", qQ).create(FQ, {
            appName: QQ.name
          })
        }

        function SQ(QQ, FQ, wQ) {
          if (!(FQ instanceof wQ)) throw wQ.name !== FQ.constructor.name && pQ(QQ, "argument-error"), CQ(QQ, "argument-error", `Type of ${FQ.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function iQ(QQ) {
          for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
          if ("string" !== typeof QQ) {
            const FQ = wQ[0],
              LQ = [...wQ.slice(1)];
            return LQ[0] && (LQ[0].appName = QQ.name), QQ._errorFactory.create(FQ, ...LQ)
          }
          return tQ.create(QQ, ...wQ)
        }

        function WQ(QQ, FQ) {
          if (!QQ) {
            for (var wQ = arguments.length, LQ = new Array(wQ > 2 ? wQ - 2 : 0), qQ = 2; qQ < wQ; qQ++) LQ[qQ - 2] = arguments[qQ];
            throw iQ(FQ, ...LQ)
          }
        }

        function RQ(QQ) {
          const FQ = "INTERNAL ASSERTION FAILED: " + QQ;
          throw GQ(FQ), new Error(FQ)
        }

        function OQ(QQ, FQ) {
          QQ || RQ(FQ)
        }

        function sQ() {
          var QQ;
          return "undefined" !== typeof self && (null === (QQ = self.location) || void 0 === QQ ? void 0 : QQ.href) || ""
        }

        function rQ() {
          return "http:" === IQ() || "https:" === IQ()
        }

        function IQ() {
          var QQ;
          return "undefined" !== typeof self && (null === (QQ = self.location) || void 0 === QQ ? void 0 : QQ.protocol) || null
        }
        class UQ {
          constructor(QQ, FQ) {
            this.shortDelay = QQ, this.longDelay = FQ, OQ(FQ > QQ, "Short delay should be less than long delay!"), this.isMobile = (0, LQ.bb)() || (0, LQ.eb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (rQ() || (0, LQ.U)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function NQ(QQ, FQ) {
          OQ(QQ.emulator, "Emulator should always be set here");
          const {
            url: wQ
          } = QQ.emulator;
          return FQ ? `${wQ}${FQ.startsWith("/")?FQ.slice(1):FQ}` : wQ
        }
        class TQ {
          static initialize(QQ, FQ, wQ) {
            this.fetchImpl = QQ, FQ && (this.headersImpl = FQ), wQ && (this.responseImpl = wQ)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void RQ("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void RQ("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void RQ("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const KQ = {
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
          zQ = new UQ(3e4, 6e4);

        function lQ(QQ, FQ) {
          return QQ.tenantId && !FQ.tenantId ? Object.assign(Object.assign({}, FQ), {
            tenantId: QQ.tenantId
          }) : FQ
        }
        async function jQ(QQ, FQ, wQ, qQ) {
          return aQ(QQ, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let oQ = {},
              DQ = {};
            qQ && ("GET" === FQ ? DQ = qQ : oQ = {
              body: JSON.stringify(qQ)
            });
            const kQ = (0, LQ.kb)(Object.assign({
                key: QQ.config.apiKey
              }, DQ)).slice(1),
              vQ = await QQ._getAdditionalHeaders();
            return vQ["Content-Type"] = "application/json", QQ.languageCode && (vQ["X-Firebase-Locale"] = QQ.languageCode), TQ.fetch()(fQ(QQ, QQ.config.apiHost, wQ, kQ), Object.assign({
              method: FQ,
              headers: vQ,
              referrerPolicy: "no-referrer"
            }, oQ))
          }))
        }
        async function aQ(QQ, FQ, wQ) {
          QQ._canInitEmulator = !1;
          const qQ = Object.assign(Object.assign({}, KQ), FQ);
          try {
            const FQ = new VQ(QQ),
              LQ = await Promise.race([wQ(), FQ.promise]);
            FQ.clearNetworkTimeout();
            const oQ = await LQ.json();
            if ("needConfirmation" in oQ) throw hQ(QQ, "account-exists-with-different-credential", oQ);
            if (LQ.ok && !("errorMessage" in oQ)) return oQ;
            {
              const FQ = LQ.ok ? oQ.errorMessage : oQ.error.message,
                [wQ, DQ] = FQ.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === wQ) throw hQ(QQ, "credential-already-in-use", oQ);
              if ("EMAIL_EXISTS" === wQ) throw hQ(QQ, "email-already-in-use", oQ);
              if ("USER_DISABLED" === wQ) throw hQ(QQ, "user-disabled", oQ);
              const kQ = qQ[wQ] || wQ.toLowerCase().replace(/[_\s]+/g, "-");
              if (DQ) throw CQ(QQ, kQ, DQ);
              pQ(QQ, kQ)
            }
          } catch (oQ) {
            if (oQ instanceof LQ.k) throw oQ;
            pQ(QQ, "network-request-failed", {
              message: String(oQ)
            })
          }
        }
        async function XQ(QQ, FQ, wQ, LQ) {
          let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const oQ = await jQ(QQ, FQ, wQ, LQ, qQ);
          return "mfaPendingCredential" in oQ && pQ(QQ, "multi-factor-auth-required", {
            _serverResponse: oQ
          }), oQ
        }

        function fQ(QQ, FQ, wQ, LQ) {
          const qQ = `${FQ}${wQ}?${LQ}`;
          return QQ.config.emulator ? NQ(QQ.config, qQ) : `${QQ.config.apiScheme}://${qQ}`
        }
        class VQ {
          constructor(QQ) {
            this.auth = QQ, this.timer = null, this.promise = new Promise(((QQ, FQ) => {
              this.timer = setTimeout((() => FQ(cQ(this.auth, "network-request-failed"))), zQ.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function hQ(QQ, FQ, wQ) {
          const LQ = {
            appName: QQ.name
          };
          wQ.email && (LQ.email = wQ.email), wQ.phoneNumber && (LQ.phoneNumber = wQ.phoneNumber);
          const qQ = cQ(QQ, FQ, LQ);
          return qQ.customData._tokenResponse = wQ, qQ
        }

        function JQ(QQ) {
          if (QQ) try {
            const FQ = new Date(Number(QQ));
            if (!isNaN(FQ.getTime())) return FQ.toUTCString()
          } catch (FQ) {}
        }

        function EQ(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, LQ.P)(QQ).getIdToken(FQ)
        }
        async function nQ(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const wQ = (0, LQ.P)(QQ),
            qQ = await wQ.getIdToken(FQ),
            oQ = PQ(qQ);
          WQ(oQ && oQ.exp && oQ.auth_time && oQ.iat, wQ.auth, "internal-error");
          const DQ = "object" === typeof oQ.firebase ? oQ.firebase : void 0,
            kQ = null === DQ || void 0 === DQ ? void 0 : DQ.sign_in_provider;
          return {
            claims: oQ,
            token: qQ,
            authTime: JQ(gQ(oQ.auth_time)),
            issuedAtTime: JQ(gQ(oQ.iat)),
            expirationTime: JQ(gQ(oQ.exp)),
            signInProvider: kQ || null,
            signInSecondFactor: (null === DQ || void 0 === DQ ? void 0 : DQ.sign_in_second_factor) || null
          }
        }

        function gQ(QQ) {
          return 1e3 * Number(QQ)
        }

        function PQ(QQ) {
          const [FQ, wQ, qQ] = QQ.split(".");
          if (void 0 === FQ || void 0 === wQ || void 0 === qQ) return GQ("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const QQ = (0, LQ.p)(wQ);
            return QQ ? JSON.parse(QQ) : (GQ("Failed to decode base64 JWT payload"), null)
          } catch (oQ) {
            return GQ("Caught error parsing JWT payload as JSON", null === oQ || void 0 === oQ ? void 0 : oQ.toString()), null
          }
        }
        async function ZQ(QQ, FQ) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return FQ;
          try {
            return await FQ
          } catch (wQ) {
            throw wQ instanceof LQ.k && function(QQ) {
              let {
                code: FQ
              } = QQ;
              return "auth/user-disabled" === FQ || "auth/user-token-expired" === FQ
            }(wQ) && QQ.auth.currentUser === QQ && await QQ.auth.signOut(), wQ
          }
        }
        class yQ {
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
            var FQ;
            if (QQ) {
              const QQ = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), QQ
            } {
              this.errorBackoff = 3e4;
              const QQ = (null !== (FQ = this.user.stsTokenManager.expirationTime) && void 0 !== FQ ? FQ : 0) - Date.now() - 3e5;
              return Math.max(0, QQ)
            }
          }
          schedule() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const FQ = this.getInterval(QQ);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), FQ)
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
        class BQ {
          constructor(QQ, FQ) {
            this.createdAt = QQ, this.lastLoginAt = FQ, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = JQ(this.lastLoginAt), this.creationTime = JQ(this.createdAt)
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
        async function dQ(QQ) {
          var FQ;
          const wQ = QQ.auth,
            LQ = await QQ.getIdToken(),
            qQ = await ZQ(QQ, async function(QQ, FQ) {
              return jQ(QQ, "POST", "/v1/accounts:lookup", FQ)
            }(wQ, {
              idToken: LQ
            }));
          WQ(null === qQ || void 0 === qQ ? void 0 : qQ.users.length, wQ, "internal-error");
          const DQ = qQ.users[0];
          QQ._notifyReloadListener(DQ);
          const kQ = (null === (FQ = DQ.providerUserInfo) || void 0 === FQ ? void 0 : FQ.length) ? DQ.providerUserInfo.map((QQ => {
            var {
              providerId: FQ
            } = QQ, wQ = oQ(QQ, ["providerId"]);
            return {
              providerId: FQ,
              uid: wQ.rawId || "",
              displayName: wQ.displayName || null,
              email: wQ.email || null,
              phoneNumber: wQ.phoneNumber || null,
              photoURL: wQ.photoUrl || null
            }
          })) : [];
          const vQ = (mQ = QQ.providerData, uQ = kQ, [...mQ.filter((QQ => !uQ.some((FQ => FQ.providerId === QQ.providerId)))), ...uQ]);
          var mQ, uQ;
          const HQ = QQ.isAnonymous,
            bQ = !(QQ.email && DQ.passwordHash) && !(null === vQ || void 0 === vQ ? void 0 : vQ.length),
            YQ = !!HQ && bQ,
            xQ = {
              uid: DQ.localId,
              displayName: DQ.displayName || null,
              photoURL: DQ.photoUrl || null,
              email: DQ.email || null,
              emailVerified: DQ.emailVerified || !1,
              phoneNumber: DQ.phoneNumber || null,
              tenantId: DQ.tenantId || null,
              providerData: vQ,
              metadata: new BQ(DQ.createdAt, DQ.lastLoginAt),
              isAnonymous: YQ
            };
          Object.assign(QQ, xQ)
        }
        async function QF(QQ) {
          const FQ = (0, LQ.P)(QQ);
          await dQ(FQ), await FQ.auth._persistUserIfCurrent(FQ), FQ.auth._notifyListenersIfCurrent(FQ)
        }
        class FF {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(QQ) {
            WQ(QQ.idToken, "internal-error"), WQ("undefined" !== typeof QQ.idToken, "internal-error"), WQ("undefined" !== typeof QQ.refreshToken, "internal-error");
            const FQ = "expiresIn" in QQ && "undefined" !== typeof QQ.expiresIn ? Number(QQ.expiresIn) : function(QQ) {
              const FQ = PQ(QQ);
              return WQ(FQ, "internal-error"), WQ("undefined" !== typeof FQ.exp, "internal-error"), WQ("undefined" !== typeof FQ.iat, "internal-error"), Number(FQ.exp) - Number(FQ.iat)
            }(QQ.idToken);
            this.updateTokensAndExpiration(QQ.idToken, QQ.refreshToken, FQ)
          }
          async getToken(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return WQ(!this.accessToken || this.refreshToken, QQ, "user-token-expired"), FQ || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(QQ, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(QQ, FQ) {
            const {
              accessToken: wQ,
              refreshToken: qQ,
              expiresIn: oQ
            } = await async function(QQ, FQ) {
              const wQ = await aQ(QQ, {}, (async () => {
                const wQ = (0, LQ.kb)({
                    grant_type: "refresh_token",
                    refresh_token: FQ
                  }).slice(1),
                  {
                    tokenApiHost: qQ,
                    apiKey: oQ
                  } = QQ.config,
                  DQ = fQ(QQ, qQ, "/v1/token", `key=${oQ}`),
                  kQ = await QQ._getAdditionalHeaders();
                return kQ["Content-Type"] = "application/x-www-form-urlencoded", TQ.fetch()(DQ, {
                  method: "POST",
                  headers: kQ,
                  body: wQ
                })
              }));
              return {
                accessToken: wQ.access_token,
                expiresIn: wQ.expires_in,
                refreshToken: wQ.refresh_token
              }
            }(QQ, FQ);
            this.updateTokensAndExpiration(wQ, qQ, Number(oQ))
          }
          updateTokensAndExpiration(QQ, FQ, wQ) {
            this.refreshToken = FQ || null, this.accessToken = QQ || null, this.expirationTime = Date.now() + 1e3 * wQ
          }
          static fromJSON(QQ, FQ) {
            const {
              refreshToken: wQ,
              accessToken: LQ,
              expirationTime: qQ
            } = FQ, oQ = new FF;
            return wQ && (WQ("string" === typeof wQ, "internal-error", {
              appName: QQ
            }), oQ.refreshToken = wQ), LQ && (WQ("string" === typeof LQ, "internal-error", {
              appName: QQ
            }), oQ.accessToken = LQ), qQ && (WQ("number" === typeof qQ, "internal-error", {
              appName: QQ
            }), oQ.expirationTime = qQ), oQ
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
            return Object.assign(new FF, this.toJSON())
          }
          _performRefresh() {
            return RQ("not implemented")
          }
        }

        function wF(QQ, FQ) {
          WQ("string" === typeof QQ || "undefined" === typeof QQ, "internal-error", {
            appName: FQ
          })
        }
        class LF {
          constructor(QQ) {
            var {
              uid: FQ,
              auth: wQ,
              stsTokenManager: LQ
            } = QQ, qQ = oQ(QQ, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new yQ(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = FQ, this.auth = wQ, this.stsTokenManager = LQ, this.accessToken = LQ.accessToken, this.displayName = qQ.displayName || null, this.email = qQ.email || null, this.emailVerified = qQ.emailVerified || !1, this.phoneNumber = qQ.phoneNumber || null, this.photoURL = qQ.photoURL || null, this.isAnonymous = qQ.isAnonymous || !1, this.tenantId = qQ.tenantId || null, this.providerData = qQ.providerData ? [...qQ.providerData] : [], this.metadata = new BQ(qQ.createdAt || void 0, qQ.lastLoginAt || void 0)
          }
          async getIdToken(QQ) {
            const FQ = await ZQ(this, this.stsTokenManager.getToken(this.auth, QQ));
            return WQ(FQ, this.auth, "internal-error"), this.accessToken !== FQ && (this.accessToken = FQ, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), FQ
          }
          getIdTokenResult(QQ) {
            return nQ(this, QQ)
          }
          reload() {
            return QF(this)
          }
          _assign(QQ) {
            this !== QQ && (WQ(this.uid === QQ.uid, this.auth, "internal-error"), this.displayName = QQ.displayName, this.photoURL = QQ.photoURL, this.email = QQ.email, this.emailVerified = QQ.emailVerified, this.phoneNumber = QQ.phoneNumber, this.isAnonymous = QQ.isAnonymous, this.tenantId = QQ.tenantId, this.providerData = QQ.providerData.map((QQ => Object.assign({}, QQ))), this.metadata._copy(QQ.metadata), this.stsTokenManager._assign(QQ.stsTokenManager))
          }
          _clone(QQ) {
            const FQ = new LF(Object.assign(Object.assign({}, this), {
              auth: QQ,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return FQ.metadata._copy(this.metadata), FQ
          }
          _onReload(QQ) {
            WQ(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = QQ, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wQ = !1;
            QQ.idToken && QQ.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(QQ), wQ = !0), FQ && await dQ(this), await this.auth._persistUserIfCurrent(this), wQ && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const QQ = await this.getIdToken();
            return await ZQ(this, async function(QQ, FQ) {
              return jQ(QQ, "POST", "/v1/accounts:delete", FQ)
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
          static _fromJSON(QQ, FQ) {
            var wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ;
            const uQ = null !== (wQ = FQ.displayName) && void 0 !== wQ ? wQ : void 0,
              HQ = null !== (LQ = FQ.email) && void 0 !== LQ ? LQ : void 0,
              bQ = null !== (qQ = FQ.phoneNumber) && void 0 !== qQ ? qQ : void 0,
              YQ = null !== (oQ = FQ.photoURL) && void 0 !== oQ ? oQ : void 0,
              xQ = null !== (DQ = FQ.tenantId) && void 0 !== DQ ? DQ : void 0,
              AQ = null !== (kQ = FQ._redirectEventId) && void 0 !== kQ ? kQ : void 0,
              tQ = null !== (vQ = FQ.createdAt) && void 0 !== vQ ? vQ : void 0,
              eQ = null !== (mQ = FQ.lastLoginAt) && void 0 !== mQ ? mQ : void 0,
              {
                uid: MQ,
                emailVerified: GQ,
                isAnonymous: pQ,
                providerData: cQ,
                stsTokenManager: CQ
              } = FQ;
            WQ(MQ && CQ, QQ, "internal-error");
            const SQ = FF.fromJSON(this.name, CQ);
            WQ("string" === typeof MQ, QQ, "internal-error"), wF(uQ, QQ.name), wF(HQ, QQ.name), WQ("boolean" === typeof GQ, QQ, "internal-error"), WQ("boolean" === typeof pQ, QQ, "internal-error"), wF(bQ, QQ.name), wF(YQ, QQ.name), wF(xQ, QQ.name), wF(AQ, QQ.name), wF(tQ, QQ.name), wF(eQ, QQ.name);
            const iQ = new LF({
              uid: MQ,
              auth: QQ,
              email: HQ,
              emailVerified: GQ,
              displayName: uQ,
              isAnonymous: pQ,
              photoURL: YQ,
              phoneNumber: bQ,
              tenantId: xQ,
              stsTokenManager: SQ,
              createdAt: tQ,
              lastLoginAt: eQ
            });
            return cQ && Array.isArray(cQ) && (iQ.providerData = cQ.map((QQ => Object.assign({}, QQ)))), AQ && (iQ._redirectEventId = AQ), iQ
          }
          static async _fromIdTokenResponse(QQ, FQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const LQ = new FF;
            LQ.updateFromServerResponse(FQ);
            const qQ = new LF({
              uid: FQ.localId,
              auth: QQ,
              stsTokenManager: LQ,
              isAnonymous: wQ
            });
            return await dQ(qQ), qQ
          }
        }
        const qF = new Map;

        function oF(QQ) {
          OQ(QQ instanceof Function, "Expected a class definition");
          let FQ = qF.get(QQ);
          return FQ ? (OQ(FQ instanceof QQ, "Instance stored in cache mismatched with class"), FQ) : (FQ = new QQ, qF.set(QQ, FQ), FQ)
        }
        class DF {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(QQ, FQ) {
            this.storage[QQ] = FQ
          }
          async _get(QQ) {
            const FQ = this.storage[QQ];
            return void 0 === FQ ? null : FQ
          }
          async _remove(QQ) {
            delete this.storage[QQ]
          }
          _addListener(QQ, FQ) {}
          _removeListener(QQ, FQ) {}
        }
        DF.type = "NONE";
        const kF = DF;

        function vF(QQ, FQ, wQ) {
          return `firebase:${QQ}:${FQ}:${wQ}`
        }
        class mF {
          constructor(QQ, FQ, wQ) {
            this.persistence = QQ, this.auth = FQ, this.userKey = wQ;
            const {
              config: LQ,
              name: qQ
            } = this.auth;
            this.fullUserKey = vF(this.userKey, LQ.apiKey, qQ), this.fullPersistenceKey = vF("persistence", LQ.apiKey, qQ), this.boundEventHandler = FQ._onStorageEvent.bind(FQ), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(QQ) {
            return this.persistence._set(this.fullUserKey, QQ.toJSON())
          }
          async getCurrentUser() {
            const QQ = await this.persistence._get(this.fullUserKey);
            return QQ ? LF._fromJSON(this.auth, QQ) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(QQ) {
            if (this.persistence === QQ) return;
            const FQ = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = QQ, FQ ? this.setCurrentUser(FQ) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(QQ, FQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!FQ.length) return new mF(oF(kF), QQ, wQ);
            const LQ = (await Promise.all(FQ.map((async QQ => {
              if (await QQ._isAvailable()) return QQ
            })))).filter((QQ => QQ));
            let qQ = LQ[0] || oF(kF);
            const oQ = vF(wQ, QQ.config.apiKey, QQ.name);
            let DQ = null;
            for (const mQ of FQ) try {
              const FQ = await mQ._get(oQ);
              if (FQ) {
                const wQ = LF._fromJSON(QQ, FQ);
                mQ !== qQ && (DQ = wQ), qQ = mQ;
                break
              }
            } catch (vQ) {}
            const kQ = LQ.filter((QQ => QQ._shouldAllowMigration));
            return qQ._shouldAllowMigration && kQ.length ? (qQ = kQ[0], DQ && await qQ._set(oQ, DQ.toJSON()), await Promise.all(FQ.map((async QQ => {
              if (QQ !== qQ) try {
                await QQ._remove(oQ)
              } catch (vQ) {}
            }))), new mF(qQ, QQ, wQ)) : new mF(qQ, QQ, wQ)
          }
        }

        function uF(QQ) {
          const FQ = QQ.toLowerCase();
          if (FQ.includes("opera/") || FQ.includes("opr/") || FQ.includes("opios/")) return "Opera";
          if (xF(FQ)) return "IEMobile";
          if (FQ.includes("msie") || FQ.includes("trident/")) return "IE";
          if (FQ.includes("edge/")) return "Edge";
          if (HF(FQ)) return "Firefox";
          if (FQ.includes("silk/")) return "Silk";
          if (tF(FQ)) return "Blackberry";
          if (eF(FQ)) return "Webos";
          if (bF(FQ)) return "Safari";
          if ((FQ.includes("chrome/") || YF(FQ)) && !FQ.includes("edge/")) return "Chrome";
          if (AF(FQ)) return "Android";
          {
            const FQ = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              wQ = QQ.match(FQ);
            if (2 === (null === wQ || void 0 === wQ ? void 0 : wQ.length)) return wQ[1]
          }
          return "Other"
        }

        function HF() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)();
          return /firefox\//i.test(QQ)
        }

        function bF() {
          const QQ = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)()).toLowerCase();
          return QQ.includes("safari/") && !QQ.includes("chrome/") && !QQ.includes("crios/") && !QQ.includes("android")
        }

        function YF() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)();
          return /crios\//i.test(QQ)
        }

        function xF() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)();
          return /iemobile/i.test(QQ)
        }

        function AF() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)();
          return /android/i.test(QQ)
        }

        function tF() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)();
          return /blackberry/i.test(QQ)
        }

        function eF() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)();
          return /webos/i.test(QQ)
        }

        function MF() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)();
          return /iphone|ipad|ipod/i.test(QQ) || /macintosh/i.test(QQ) && /mobile/i.test(QQ)
        }

        function GF() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)();
          return MF(QQ) || AF(QQ) || eF(QQ) || tF(QQ) || /windows phone/i.test(QQ) || xF(QQ)
        }

        function pF(QQ) {
          let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (QQ) {
            case "Browser":
              FQ = uF((0, LQ.Q)());
              break;
            case "Worker":
              FQ = `${uF((0,LQ.Q)())}-${QQ}`;
              break;
            default:
              FQ = QQ
          }
          const oQ = wQ.length ? wQ.join(",") : "FirebaseCore-web";
          return `${FQ}/JsCore/${qQ.g}/${oQ}`
        }
        async function cF(QQ, FQ) {
          return jQ(QQ, "GET", "/v2/recaptchaConfig", lQ(QQ, FQ))
        }

        function CF(QQ) {
          return void 0 !== QQ && void 0 !== QQ.getResponse
        }

        function SF(QQ) {
          return void 0 !== QQ && void 0 !== QQ.enterprise
        }
        class iF {
          constructor(QQ) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === QQ.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = QQ.recaptchaKey.split("/")[3], this.emailPasswordEnabled = QQ.recaptchaEnforcementState.some((QQ => "EMAIL_PASSWORD_PROVIDER" === QQ.provider && "OFF" !== QQ.enforcementState))
          }
        }

        function WF(QQ) {
          return new Promise(((FQ, wQ) => {
            const LQ = document.createElement("script");
            LQ.setAttribute("src", QQ), LQ.onload = FQ, LQ.onerror = QQ => {
                const FQ = cQ("internal-error");
                FQ.customData = QQ, wQ(FQ)
              }, LQ.type = "text/javascript", LQ.charset = "UTF-8",
              function() {
                var QQ, FQ;
                return null !== (FQ = null === (QQ = document.getElementsByTagName("head")) || void 0 === QQ ? void 0 : QQ[0]) && void 0 !== FQ ? FQ : document
              }().appendChild(LQ)
          }))
        }

        function RF(QQ) {
          return `__${QQ}${Math.floor(1e6*Math.random())}`
        }
        class OF {
          constructor(QQ) {
            this.type = "recaptcha-enterprise", this.auth = UF(QQ)
          }
          async verify() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function wQ(FQ, wQ, LQ) {
              const qQ = window.grecaptcha;
              SF(qQ) ? qQ.enterprise.ready((() => {
                qQ.enterprise.execute(FQ, {
                  action: QQ
                }).then((QQ => {
                  wQ(QQ)
                })).catch((() => {
                  wQ("NO_RECAPTCHA")
                }))
              })) : LQ(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((QQ, LQ) => {
              (async function(QQ) {
                if (!FQ) {
                  if (null == QQ.tenantId && null != QQ._agentRecaptchaConfig) return QQ._agentRecaptchaConfig.siteKey;
                  if (null != QQ.tenantId && void 0 !== QQ._tenantRecaptchaConfigs[QQ.tenantId]) return QQ._tenantRecaptchaConfigs[QQ.tenantId].siteKey
                }
                return new Promise((async (FQ, wQ) => {
                  cF(QQ, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((LQ => {
                    if (void 0 !== LQ.recaptchaKey) {
                      const wQ = new iF(LQ);
                      return null == QQ.tenantId ? QQ._agentRecaptchaConfig = wQ : QQ._tenantRecaptchaConfigs[QQ.tenantId] = wQ, FQ(wQ.siteKey)
                    }
                    wQ(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((QQ => {
                    wQ(QQ)
                  }))
                }))
              })(this.auth).then((qQ => {
                if (!FQ && SF(window.grecaptcha)) wQ(qQ, QQ, LQ);
                else {
                  if ("undefined" === typeof window) return void LQ(new Error("RecaptchaVerifier is only supported in browser"));
                  WF("https://www.google.com/recaptcha/enterprise.js?render=" + qQ).then((() => {
                    wQ(qQ, QQ, LQ)
                  })).catch((QQ => {
                    LQ(QQ)
                  }))
                }
              })).catch((QQ => {
                LQ(QQ)
              }))
            }))
          }
        }
        async function sF(QQ, FQ, wQ) {
          let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const qQ = new OF(QQ);
          let oQ;
          try {
            oQ = await qQ.verify(wQ)
          } catch (kQ) {
            oQ = await qQ.verify(wQ, !0)
          }
          const DQ = Object.assign({}, FQ);
          return LQ ? Object.assign(DQ, {
            captchaResp: oQ
          }) : Object.assign(DQ, {
            captchaResponse: oQ
          }), Object.assign(DQ, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(DQ, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), DQ
        }
        class rF {
          constructor(QQ) {
            this.auth = QQ, this.queue = []
          }
          pushCallback(QQ, FQ) {
            const wQ = FQ => new Promise(((wQ, LQ) => {
              try {
                wQ(QQ(FQ))
              } catch (qQ) {
                LQ(qQ)
              }
            }));
            wQ.onAbort = FQ, this.queue.push(wQ);
            const LQ = this.queue.length - 1;
            return () => {
              this.queue[LQ] = () => Promise.resolve()
            }
          }
          async runMiddleware(QQ) {
            if (this.auth.currentUser === QQ) return;
            const FQ = [];
            try {
              for (const wQ of this.queue) await wQ(QQ), wQ.onAbort && FQ.push(wQ.onAbort)
            } catch (wQ) {
              FQ.reverse();
              for (const QQ of FQ) try {
                QQ()
              } catch (LQ) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === wQ || void 0 === wQ ? void 0 : wQ.message
              })
            }
          }
        }
        class IF {
          constructor(QQ, FQ, wQ, LQ) {
            this.app = QQ, this.heartbeatServiceProvider = FQ, this.appCheckServiceProvider = wQ, this.config = LQ, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new NF(this), this.idTokenSubscription = new NF(this), this.beforeStateQueue = new rF(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = tQ, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = QQ.name, this.clientVersion = LQ.sdkClientVersion
          }
          _initializeWithPersistence(QQ, FQ) {
            return FQ && (this._popupRedirectResolver = oF(FQ)), this._initializationPromise = this.queue((async () => {
              var wQ, LQ;
              if (!this._deleted && (this.persistenceManager = await mF.create(this, QQ), !this._deleted)) {
                if (null === (wQ = this._popupRedirectResolver) || void 0 === wQ ? void 0 : wQ._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (qQ) {}
                await this.initializeCurrentUser(FQ), this.lastNotifiedUid = (null === (LQ = this.currentUser) || void 0 === LQ ? void 0 : LQ.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const QQ = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || QQ ? this.currentUser && QQ && this.currentUser.uid === QQ.uid ? (this._currentUser._assign(QQ), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(QQ, !0) : void 0
          }
          async initializeCurrentUser(QQ) {
            var FQ;
            const wQ = await this.assertedPersistence.getCurrentUser();
            let LQ = wQ,
              qQ = !1;
            if (QQ && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const wQ = null === (FQ = this.redirectUser) || void 0 === FQ ? void 0 : FQ._redirectEventId,
                oQ = null === LQ || void 0 === LQ ? void 0 : LQ._redirectEventId,
                DQ = await this.tryRedirectSignIn(QQ);
              wQ && wQ !== oQ || !(null === DQ || void 0 === DQ ? void 0 : DQ.user) || (LQ = DQ.user, qQ = !0)
            }
            if (!LQ) return this.directlySetCurrentUser(null);
            if (!LQ._redirectEventId) {
              if (qQ) try {
                await this.beforeStateQueue.runMiddleware(LQ)
              } catch (oQ) {
                LQ = wQ, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(oQ)))
              }
              return LQ ? this.reloadAndSetCurrentUserOrClear(LQ) : this.directlySetCurrentUser(null)
            }
            return WQ(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === LQ._redirectEventId ? this.directlySetCurrentUser(LQ) : this.reloadAndSetCurrentUserOrClear(LQ)
          }
          async tryRedirectSignIn(QQ) {
            let FQ = null;
            try {
              FQ = await this._popupRedirectResolver._completeRedirectFn(this, QQ, !0)
            } catch (wQ) {
              await this._setRedirectUser(null)
            }
            return FQ
          }
          async reloadAndSetCurrentUserOrClear(QQ) {
            try {
              await dQ(QQ)
            } catch (FQ) {
              if ("auth/network-request-failed" !== (null === FQ || void 0 === FQ ? void 0 : FQ.code)) return this.directlySetCurrentUser(null)
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
            const FQ = QQ ? (0, LQ.P)(QQ) : null;
            return FQ && WQ(FQ.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(FQ && FQ._clone(this))
          }
          async _updateCurrentUser(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return QQ && WQ(this.tenantId === QQ.tenantId, this, "tenant-id-mismatch"), FQ || await this.beforeStateQueue.runMiddleware(QQ), this.queue((async () => {
              await this.directlySetCurrentUser(QQ), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(QQ) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(oF(QQ))
            }))
          }
          async initializeRecaptchaConfig() {
            const QQ = await cF(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              FQ = new iF(QQ);
            if (null == this.tenantId ? this._agentRecaptchaConfig = FQ : this._tenantRecaptchaConfigs[this.tenantId] = FQ, FQ.emailPasswordEnabled) {
              new OF(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(QQ) {
            this._errorFactory = new LQ.h("auth", "Firebase", QQ())
          }
          onAuthStateChanged(QQ, FQ, wQ) {
            return this.registerStateListener(this.authStateSubscription, QQ, FQ, wQ)
          }
          beforeAuthStateChanged(QQ, FQ) {
            return this.beforeStateQueue.pushCallback(QQ, FQ)
          }
          onIdTokenChanged(QQ, FQ, wQ) {
            return this.registerStateListener(this.idTokenSubscription, QQ, FQ, wQ)
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
          async _setRedirectUser(QQ, FQ) {
            const wQ = await this.getOrInitRedirectPersistenceManager(FQ);
            return null === QQ ? wQ.removeCurrentUser() : wQ.setCurrentUser(QQ)
          }
          async getOrInitRedirectPersistenceManager(QQ) {
            if (!this.redirectPersistenceManager) {
              const FQ = QQ && oF(QQ) || this._popupRedirectResolver;
              WQ(FQ, this, "argument-error"), this.redirectPersistenceManager = await mF.create(this, [oF(FQ._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(QQ) {
            var FQ, wQ;
            return this._isInitialized && await this.queue((async () => {})), (null === (FQ = this._currentUser) || void 0 === FQ ? void 0 : FQ._redirectEventId) === QQ ? this._currentUser : (null === (wQ = this.redirectUser) || void 0 === wQ ? void 0 : wQ._redirectEventId) === QQ ? this.redirectUser : null
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
            var QQ, FQ;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const wQ = null !== (FQ = null === (QQ = this.currentUser) || void 0 === QQ ? void 0 : QQ.uid) && void 0 !== FQ ? FQ : null;
            this.lastNotifiedUid !== wQ && (this.lastNotifiedUid = wQ, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(QQ, FQ, wQ, LQ) {
            if (this._deleted) return () => {};
            const qQ = "function" === typeof FQ ? FQ : FQ.next.bind(FQ),
              oQ = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return WQ(oQ, this, "internal-error"), oQ.then((() => qQ(this.currentUser))), "function" === typeof FQ ? QQ.addObserver(FQ, wQ, LQ) : QQ.addObserver(FQ)
          }
          async directlySetCurrentUser(QQ) {
            this.currentUser && this.currentUser !== QQ && this._currentUser._stopProactiveRefresh(), QQ && this.isProactiveRefreshEnabled && QQ._startProactiveRefresh(), this.currentUser = QQ, QQ ? await this.assertedPersistence.setCurrentUser(QQ) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(QQ) {
            return this.operations = this.operations.then(QQ, QQ), this.operations
          }
          get assertedPersistence() {
            return WQ(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(QQ) {
            QQ && !this.frameworks.includes(QQ) && (this.frameworks.push(QQ), this.frameworks.sort(), this.clientVersion = pF(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var QQ;
            const FQ = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (FQ["X-Firebase-gmpid"] = this.app.options.appId);
            const wQ = await (null === (QQ = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === QQ ? void 0 : QQ.getHeartbeatsHeader());
            wQ && (FQ["X-Firebase-Client"] = wQ);
            const LQ = await this._getAppCheckToken();
            return LQ && (FQ["X-Firebase-AppCheck"] = LQ), FQ
          }
          async _getAppCheckToken() {
            var QQ;
            const FQ = await (null === (QQ = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === QQ ? void 0 : QQ.getToken());
            return (null === FQ || void 0 === FQ ? void 0 : FQ.error) && function(QQ) {
              if (MQ.logLevel <= DQ.b.WARN) {
                for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
                MQ.warn(`Auth (${qQ.g}): ${QQ}`, ...wQ)
              }
            }(`Error while retrieving App Check token: ${FQ.error}`), null === FQ || void 0 === FQ ? void 0 : FQ.token
          }
        }

        function UF(QQ) {
          return (0, LQ.P)(QQ)
        }
        class NF {
          constructor(QQ) {
            this.auth = QQ, this.observer = null, this.addObserver = (0, LQ.y)((QQ => this.observer = QQ))
          }
          get next() {
            return WQ(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function TF(QQ, FQ) {
          const wQ = (0, qQ.t)(QQ, "auth");
          if (wQ.isInitialized()) {
            const QQ = wQ.getImmediate(),
              qQ = wQ.getOptions();
            if ((0, LQ.C)(qQ, null !== FQ && void 0 !== FQ ? FQ : {})) return QQ;
            pQ(QQ, "already-initialized")
          }
          return wQ.initialize({
            options: FQ
          })
        }

        function KF(QQ, FQ, wQ) {
          const LQ = UF(QQ);
          WQ(LQ._canInitEmulator, LQ, "emulator-config-failed"), WQ(/^https?:\/\//.test(FQ), LQ, "invalid-emulator-scheme");
          const qQ = !!(null === wQ || void 0 === wQ ? void 0 : wQ.disableWarnings),
            oQ = zF(FQ),
            {
              host: DQ,
              port: kQ
            } = function(QQ) {
              const FQ = zF(QQ),
                wQ = /(\/\/)?([^?#/]+)/.exec(QQ.substr(FQ.length));
              if (!wQ) return {
                host: "",
                port: null
              };
              const LQ = wQ[2].split("@").pop() || "",
                qQ = /^(\[[^\]]+\])(:|$)/.exec(LQ);
              if (qQ) {
                const QQ = qQ[1];
                return {
                  host: QQ,
                  port: lF(LQ.substr(QQ.length + 1))
                }
              } {
                const [QQ, FQ] = LQ.split(":");
                return {
                  host: QQ,
                  port: lF(FQ)
                }
              }
            }(FQ),
            vQ = null === kQ ? "" : `:${kQ}`;
          LQ.config.emulator = {
            url: `${oQ}//${DQ}${vQ}/`
          }, LQ.settings.appVerificationDisabledForTesting = !0, LQ.emulatorConfig = Object.freeze({
            host: DQ,
            port: kQ,
            protocol: oQ.replace(":", ""),
            options: Object.freeze({
              disableWarnings: qQ
            })
          }), qQ || function() {
            function QQ() {
              const QQ = document.createElement("p"),
                FQ = QQ.style;
              QQ.innerText = "Running in emulator mode. Do not use with production credentials.", FQ.position = "fixed", FQ.width = "100%", FQ.backgroundColor = "#ffffff", FQ.border = ".1em solid #000000", FQ.color = "#b50000", FQ.bottom = "0px", FQ.left = "0px", FQ.margin = "0px", FQ.zIndex = "10000", FQ.textAlign = "center", QQ.classList.add("firebase-emulator-warning"), document.body.appendChild(QQ)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", QQ) : QQ())
          }()
        }

        function zF(QQ) {
          const FQ = QQ.indexOf(":");
          return FQ < 0 ? "" : QQ.substr(0, FQ + 1)
        }

        function lF(QQ) {
          if (!QQ) return null;
          const FQ = Number(QQ);
          return isNaN(FQ) ? null : FQ
        }
        class jF {
          constructor(QQ, FQ) {
            this.providerId = QQ, this.signInMethod = FQ
          }
          toJSON() {
            return RQ("not implemented")
          }
          _getIdTokenResponse(QQ) {
            return RQ("not implemented")
          }
          _linkToIdToken(QQ, FQ) {
            return RQ("not implemented")
          }
          _getReauthenticationResolver(QQ) {
            return RQ("not implemented")
          }
        }
        async function aF(QQ, FQ) {
          return jQ(QQ, "POST", "/v1/accounts:resetPassword", lQ(QQ, FQ))
        }
        async function XF(QQ, FQ) {
          return jQ(QQ, "POST", "/v1/accounts:update", FQ)
        }
        async function fF(QQ, FQ) {
          return XQ(QQ, "POST", "/v1/accounts:signInWithPassword", lQ(QQ, FQ))
        }
        async function VF(QQ, FQ) {
          return jQ(QQ, "POST", "/v1/accounts:sendOobCode", lQ(QQ, FQ))
        }
        async function hF(QQ, FQ) {
          return VF(QQ, FQ)
        }
        async function JF(QQ, FQ) {
          return VF(QQ, FQ)
        }
        class EF extends jF {
          constructor(QQ, FQ, wQ) {
            let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", wQ), this._email = QQ, this._password = FQ, this._tenantId = LQ
          }
          static _fromEmailAndPassword(QQ, FQ) {
            return new EF(QQ, FQ, "password")
          }
          static _fromEmailAndCode(QQ, FQ) {
            return new EF(QQ, FQ, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const FQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ;
            if ((null === FQ || void 0 === FQ ? void 0 : FQ.email) && (null === FQ || void 0 === FQ ? void 0 : FQ.password)) {
              if ("password" === FQ.signInMethod) return this._fromEmailAndPassword(FQ.email, FQ.password);
              if ("emailLink" === FQ.signInMethod) return this._fromEmailAndCode(FQ.email, FQ.password, FQ.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(QQ) {
            var FQ;
            switch (this.signInMethod) {
              case "password":
                const wQ = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (FQ = QQ._getRecaptchaConfig()) || void 0 === FQ ? void 0 : FQ.emailPasswordEnabled) {
                  const FQ = await sF(QQ, wQ, "signInWithPassword");
                  return fF(QQ, FQ)
                }
                return fF(QQ, wQ).catch((async FQ => {
                  if ("auth/missing-recaptcha-token" === FQ.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const FQ = await sF(QQ, wQ, "signInWithPassword");
                    return fF(QQ, FQ)
                  }
                  return Promise.reject(FQ)
                }));
              case "emailLink":
                return async function(QQ, FQ) {
                  return XQ(QQ, "POST", "/v1/accounts:signInWithEmailLink", lQ(QQ, FQ))
                }(QQ, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                pQ(QQ, "internal-error")
            }
          }
          async _linkToIdToken(QQ, FQ) {
            switch (this.signInMethod) {
              case "password":
                return XF(QQ, {
                  idToken: FQ,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(QQ, FQ) {
                  return XQ(QQ, "POST", "/v1/accounts:signInWithEmailLink", lQ(QQ, FQ))
                }(QQ, {
                  idToken: FQ,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                pQ(QQ, "internal-error")
            }
          }
          _getReauthenticationResolver(QQ) {
            return this._getIdTokenResponse(QQ)
          }
        }
        async function nF(QQ, FQ) {
          return XQ(QQ, "POST", "/v1/accounts:signInWithIdp", lQ(QQ, FQ))
        }
        class gF extends jF {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(QQ) {
            const FQ = new gF(QQ.providerId, QQ.signInMethod);
            return QQ.idToken || QQ.accessToken ? (QQ.idToken && (FQ.idToken = QQ.idToken), QQ.accessToken && (FQ.accessToken = QQ.accessToken), QQ.nonce && !QQ.pendingToken && (FQ.nonce = QQ.nonce), QQ.pendingToken && (FQ.pendingToken = QQ.pendingToken)) : QQ.oauthToken && QQ.oauthTokenSecret ? (FQ.accessToken = QQ.oauthToken, FQ.secret = QQ.oauthTokenSecret) : pQ("argument-error"), FQ
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
            const FQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ,
              {
                providerId: wQ,
                signInMethod: LQ
              } = FQ,
              qQ = oQ(FQ, ["providerId", "signInMethod"]);
            if (!wQ || !LQ) return null;
            const DQ = new gF(wQ, LQ);
            return DQ.idToken = qQ.idToken || void 0, DQ.accessToken = qQ.accessToken || void 0, DQ.secret = qQ.secret, DQ.nonce = qQ.nonce, DQ.pendingToken = qQ.pendingToken || null, DQ
          }
          _getIdTokenResponse(QQ) {
            return nF(QQ, this.buildRequest())
          }
          _linkToIdToken(QQ, FQ) {
            const wQ = this.buildRequest();
            return wQ.idToken = FQ, nF(QQ, wQ)
          }
          _getReauthenticationResolver(QQ) {
            const FQ = this.buildRequest();
            return FQ.autoCreate = !1, nF(QQ, FQ)
          }
          buildRequest() {
            const QQ = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) QQ.pendingToken = this.pendingToken;
            else {
              const FQ = {};
              this.idToken && (FQ.id_token = this.idToken), this.accessToken && (FQ.access_token = this.accessToken), this.secret && (FQ.oauth_token_secret = this.secret), FQ.providerId = this.providerId, this.nonce && !this.pendingToken && (FQ.nonce = this.nonce), QQ.postBody = (0, LQ.kb)(FQ)
            }
            return QQ
          }
        }
        const PF = {
          USER_NOT_FOUND: "user-not-found"
        };
        class ZF extends jF {
          constructor(QQ) {
            super("phone", "phone"), this.params = QQ
          }
          static _fromVerification(QQ, FQ) {
            return new ZF({
              verificationId: QQ,
              verificationCode: FQ
            })
          }
          static _fromTokenResponse(QQ, FQ) {
            return new ZF({
              phoneNumber: QQ,
              temporaryProof: FQ
            })
          }
          _getIdTokenResponse(QQ) {
            return async function(QQ, FQ) {
              return XQ(QQ, "POST", "/v1/accounts:signInWithPhoneNumber", lQ(QQ, FQ))
            }(QQ, this._makeVerificationRequest())
          }
          _linkToIdToken(QQ, FQ) {
            return async function(QQ, FQ) {
              const wQ = await XQ(QQ, "POST", "/v1/accounts:signInWithPhoneNumber", lQ(QQ, FQ));
              if (wQ.temporaryProof) throw hQ(QQ, "account-exists-with-different-credential", wQ);
              return wQ
            }(QQ, Object.assign({
              idToken: FQ
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(QQ) {
            return async function(QQ, FQ) {
              return XQ(QQ, "POST", "/v1/accounts:signInWithPhoneNumber", lQ(QQ, Object.assign(Object.assign({}, FQ), {
                operation: "REAUTH"
              })), PF)
            }(QQ, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: QQ,
              phoneNumber: FQ,
              verificationId: wQ,
              verificationCode: LQ
            } = this.params;
            return QQ && FQ ? {
              temporaryProof: QQ,
              phoneNumber: FQ
            } : {
              sessionInfo: wQ,
              code: LQ
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
              verificationId: FQ,
              verificationCode: wQ,
              phoneNumber: LQ,
              temporaryProof: qQ
            } = QQ;
            return wQ || FQ || LQ || qQ ? new ZF({
              verificationId: FQ,
              verificationCode: wQ,
              phoneNumber: LQ,
              temporaryProof: qQ
            }) : null
          }
        }
        class yF {
          constructor(QQ) {
            var FQ, wQ, qQ, oQ, DQ, kQ;
            const vQ = (0, LQ.gb)((0, LQ.G)(QQ)),
              mQ = null !== (FQ = vQ.apiKey) && void 0 !== FQ ? FQ : null,
              uQ = null !== (wQ = vQ.oobCode) && void 0 !== wQ ? wQ : null,
              HQ = function(QQ) {
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
              }(null !== (qQ = vQ.mode) && void 0 !== qQ ? qQ : null);
            WQ(mQ && uQ && HQ, "argument-error"), this.apiKey = mQ, this.operation = HQ, this.code = uQ, this.continueUrl = null !== (oQ = vQ.continueUrl) && void 0 !== oQ ? oQ : null, this.languageCode = null !== (DQ = vQ.languageCode) && void 0 !== DQ ? DQ : null, this.tenantId = null !== (kQ = vQ.tenantId) && void 0 !== kQ ? kQ : null
          }
          static parseLink(QQ) {
            const FQ = function(QQ) {
              const FQ = (0, LQ.gb)((0, LQ.G)(QQ)).link,
                wQ = FQ ? (0, LQ.gb)((0, LQ.G)(FQ)).deep_link_id : null,
                qQ = (0, LQ.gb)((0, LQ.G)(QQ)).deep_link_id;
              return (qQ ? (0, LQ.gb)((0, LQ.G)(qQ)).link : null) || qQ || wQ || FQ || QQ
            }(QQ);
            try {
              return new yF(FQ)
            } catch (wQ) {
              return null
            }
          }
        }

        function BF(QQ) {
          return yF.parseLink(QQ)
        }
        class dF {
          constructor() {
            this.providerId = dF.PROVIDER_ID
          }
          static credential(QQ, FQ) {
            return EF._fromEmailAndPassword(QQ, FQ)
          }
          static credentialWithLink(QQ, FQ) {
            const wQ = yF.parseLink(FQ);
            return WQ(wQ, "argument-error"), EF._fromEmailAndCode(QQ, wQ.code, wQ.tenantId)
          }
        }
        dF.PROVIDER_ID = "password", dF.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", dF.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Qw {
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
        class Fw extends Qw {
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
        class ww extends Fw {
          static credentialFromJSON(QQ) {
            const FQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ;
            return WQ("providerId" in FQ && "signInMethod" in FQ, "argument-error"), gF._fromParams(FQ)
          }
          credential(QQ) {
            return this._credential(Object.assign(Object.assign({}, QQ), {
              nonce: QQ.rawNonce
            }))
          }
          _credential(QQ) {
            return WQ(QQ.idToken || QQ.accessToken, "argument-error"), gF._fromParams(Object.assign(Object.assign({}, QQ), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(QQ) {
            return ww.oauthCredentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return ww.oauthCredentialFromTaggedObject(QQ.customData || {})
          }
          static oauthCredentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: FQ
            } = QQ;
            if (!FQ) return null;
            const {
              oauthIdToken: wQ,
              oauthAccessToken: LQ,
              oauthTokenSecret: qQ,
              pendingToken: oQ,
              nonce: DQ,
              providerId: kQ
            } = FQ;
            if (!LQ && !qQ && !wQ && !oQ) return null;
            if (!kQ) return null;
            try {
              return new ww(kQ)._credential({
                idToken: wQ,
                accessToken: LQ,
                nonce: DQ,
                pendingToken: oQ
              })
            } catch (vQ) {
              return null
            }
          }
        }
        class Lw extends Fw {
          constructor() {
            super("facebook.com")
          }
          static credential(QQ) {
            return gF._fromParams({
              providerId: Lw.PROVIDER_ID,
              signInMethod: Lw.FACEBOOK_SIGN_IN_METHOD,
              accessToken: QQ
            })
          }
          static credentialFromResult(QQ) {
            return Lw.credentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return Lw.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: FQ
            } = QQ;
            if (!FQ || !("oauthAccessToken" in FQ)) return null;
            if (!FQ.oauthAccessToken) return null;
            try {
              return Lw.credential(FQ.oauthAccessToken)
            } catch (wQ) {
              return null
            }
          }
        }
        Lw.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Lw.PROVIDER_ID = "facebook.com";
        class qw extends Fw {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(QQ, FQ) {
            return gF._fromParams({
              providerId: qw.PROVIDER_ID,
              signInMethod: qw.GOOGLE_SIGN_IN_METHOD,
              idToken: QQ,
              accessToken: FQ
            })
          }
          static credentialFromResult(QQ) {
            return qw.credentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return qw.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: FQ
            } = QQ;
            if (!FQ) return null;
            const {
              oauthIdToken: wQ,
              oauthAccessToken: LQ
            } = FQ;
            if (!wQ && !LQ) return null;
            try {
              return qw.credential(wQ, LQ)
            } catch (qQ) {
              return null
            }
          }
        }
        qw.GOOGLE_SIGN_IN_METHOD = "google.com", qw.PROVIDER_ID = "google.com";
        class ow extends Fw {
          constructor() {
            super("github.com")
          }
          static credential(QQ) {
            return gF._fromParams({
              providerId: ow.PROVIDER_ID,
              signInMethod: ow.GITHUB_SIGN_IN_METHOD,
              accessToken: QQ
            })
          }
          static credentialFromResult(QQ) {
            return ow.credentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return ow.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: FQ
            } = QQ;
            if (!FQ || !("oauthAccessToken" in FQ)) return null;
            if (!FQ.oauthAccessToken) return null;
            try {
              return ow.credential(FQ.oauthAccessToken)
            } catch (wQ) {
              return null
            }
          }
        }
        ow.GITHUB_SIGN_IN_METHOD = "github.com", ow.PROVIDER_ID = "github.com";
        class Dw extends jF {
          constructor(QQ, FQ) {
            super(QQ, QQ), this.pendingToken = FQ
          }
          _getIdTokenResponse(QQ) {
            return nF(QQ, this.buildRequest())
          }
          _linkToIdToken(QQ, FQ) {
            const wQ = this.buildRequest();
            return wQ.idToken = FQ, nF(QQ, wQ)
          }
          _getReauthenticationResolver(QQ) {
            const FQ = this.buildRequest();
            return FQ.autoCreate = !1, nF(QQ, FQ)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(QQ) {
            const FQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ,
              {
                providerId: wQ,
                signInMethod: LQ,
                pendingToken: qQ
              } = FQ;
            return wQ && LQ && qQ && wQ === LQ ? new Dw(wQ, qQ) : null
          }
          static _create(QQ, FQ) {
            return new Dw(QQ, FQ)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class kw extends Qw {
          constructor(QQ) {
            WQ(QQ.startsWith("saml."), "argument-error"), super(QQ)
          }
          static credentialFromResult(QQ) {
            return kw.samlCredentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return kw.samlCredentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromJSON(QQ) {
            const FQ = Dw.fromJSON(QQ);
            return WQ(FQ, "argument-error"), FQ
          }
          static samlCredentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: FQ
            } = QQ;
            if (!FQ) return null;
            const {
              pendingToken: wQ,
              providerId: LQ
            } = FQ;
            if (!wQ || !LQ) return null;
            try {
              return Dw._create(LQ, wQ)
            } catch (qQ) {
              return null
            }
          }
        }
        class vw extends Fw {
          constructor() {
            super("twitter.com")
          }
          static credential(QQ, FQ) {
            return gF._fromParams({
              providerId: vw.PROVIDER_ID,
              signInMethod: vw.TWITTER_SIGN_IN_METHOD,
              oauthToken: QQ,
              oauthTokenSecret: FQ
            })
          }
          static credentialFromResult(QQ) {
            return vw.credentialFromTaggedObject(QQ)
          }
          static credentialFromError(QQ) {
            return vw.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: FQ
            } = QQ;
            if (!FQ) return null;
            const {
              oauthAccessToken: wQ,
              oauthTokenSecret: LQ
            } = FQ;
            if (!wQ || !LQ) return null;
            try {
              return vw.credential(wQ, LQ)
            } catch (qQ) {
              return null
            }
          }
        }
        async function mw(QQ, FQ) {
          return XQ(QQ, "POST", "/v1/accounts:signUp", lQ(QQ, FQ))
        }
        vw.TWITTER_SIGN_IN_METHOD = "twitter.com", vw.PROVIDER_ID = "twitter.com";
        class uw {
          constructor(QQ) {
            this.user = QQ.user, this.providerId = QQ.providerId, this._tokenResponse = QQ._tokenResponse, this.operationType = QQ.operationType
          }
          static async _fromIdTokenResponse(QQ, FQ, wQ) {
            let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const qQ = await LF._fromIdTokenResponse(QQ, wQ, LQ),
              oQ = Hw(wQ);
            return new uw({
              user: qQ,
              providerId: oQ,
              _tokenResponse: wQ,
              operationType: FQ
            })
          }
          static async _forOperation(QQ, FQ, wQ) {
            await QQ._updateTokensIfNecessary(wQ, !0);
            const LQ = Hw(wQ);
            return new uw({
              user: QQ,
              providerId: LQ,
              _tokenResponse: wQ,
              operationType: FQ
            })
          }
        }

        function Hw(QQ) {
          return QQ.providerId ? QQ.providerId : "phoneNumber" in QQ ? "phone" : null
        }
        async function bw(QQ) {
          var FQ;
          const wQ = UF(QQ);
          if (await wQ._initializationPromise, null === (FQ = wQ.currentUser) || void 0 === FQ ? void 0 : FQ.isAnonymous) return new uw({
            user: wQ.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const LQ = await mw(wQ, {
              returnSecureToken: !0
            }),
            qQ = await uw._fromIdTokenResponse(wQ, "signIn", LQ, !0);
          return await wQ._updateCurrentUser(qQ.user), qQ
        }
        class Yw extends LQ.k {
          constructor(QQ, FQ, wQ, LQ) {
            var qQ;
            super(FQ.code, FQ.message), this.operationType = wQ, this.user = LQ, Object.setPrototypeOf(this, Yw.prototype), this.customData = {
              appName: QQ.name,
              tenantId: null !== (qQ = QQ.tenantId) && void 0 !== qQ ? qQ : void 0,
              _serverResponse: FQ.customData._serverResponse,
              operationType: wQ
            }
          }
          static _fromErrorAndOperation(QQ, FQ, wQ, LQ) {
            return new Yw(QQ, FQ, wQ, LQ)
          }
        }

        function xw(QQ, FQ, wQ, LQ) {
          return ("reauthenticate" === FQ ? wQ._getReauthenticationResolver(QQ) : wQ._getIdTokenResponse(QQ)).catch((wQ => {
            if ("auth/multi-factor-auth-required" === wQ.code) throw Yw._fromErrorAndOperation(QQ, wQ, FQ, LQ);
            throw wQ
          }))
        }

        function Aw(QQ) {
          return new Set(QQ.map((QQ => {
            let {
              providerId: FQ
            } = QQ;
            return FQ
          })).filter((QQ => !!QQ)))
        }
        async function tw(QQ, FQ) {
          const wQ = (0, LQ.P)(QQ);
          await Mw(!0, wQ, FQ);
          const {
            providerUserInfo: qQ
          } = await async function(QQ, FQ) {
            return jQ(QQ, "POST", "/v1/accounts:update", FQ)
          }(wQ.auth, {
            idToken: await wQ.getIdToken(),
            deleteProvider: [FQ]
          }), oQ = Aw(qQ || []);
          return wQ.providerData = wQ.providerData.filter((QQ => oQ.has(QQ.providerId))), oQ.has("phone") || (wQ.phoneNumber = null), await wQ.auth._persistUserIfCurrent(wQ), wQ
        }
        async function ew(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const LQ = await ZQ(QQ, FQ._linkToIdToken(QQ.auth, await QQ.getIdToken()), wQ);
          return uw._forOperation(QQ, "link", LQ)
        }
        async function Mw(QQ, FQ, wQ) {
          await dQ(FQ);
          const LQ = !1 === QQ ? "provider-already-linked" : "no-such-provider";
          WQ(Aw(FQ.providerData).has(wQ) === QQ, FQ.auth, LQ)
        }
        async function Gw(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: LQ
          } = QQ, qQ = "reauthenticate";
          try {
            const oQ = await ZQ(QQ, xw(LQ, qQ, FQ, QQ), wQ);
            WQ(oQ.idToken, LQ, "internal-error");
            const DQ = PQ(oQ.idToken);
            WQ(DQ, LQ, "internal-error");
            const {
              sub: kQ
            } = DQ;
            return WQ(QQ.uid === kQ, LQ, "user-mismatch"), uw._forOperation(QQ, qQ, oQ)
          } catch (oQ) {
            throw "auth/user-not-found" === (null === oQ || void 0 === oQ ? void 0 : oQ.code) && pQ(LQ, "user-mismatch"), oQ
          }
        }
        async function pw(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const LQ = "signIn",
            qQ = await xw(QQ, LQ, FQ),
            oQ = await uw._fromIdTokenResponse(QQ, LQ, qQ);
          return wQ || await QQ._updateCurrentUser(oQ.user), oQ
        }
        async function Cw(QQ, FQ) {
          return pw(UF(QQ), FQ)
        }
        async function Sw(QQ, FQ) {
          const wQ = (0, LQ.P)(QQ);
          return await Mw(!1, wQ, FQ.providerId), ew(wQ, FQ)
        }
        async function iw(QQ, FQ) {
          return Gw((0, LQ.P)(QQ), FQ)
        }
        async function Ww(QQ, FQ) {
          const wQ = UF(QQ),
            LQ = await async function(QQ, FQ) {
              return XQ(QQ, "POST", "/v1/accounts:signInWithCustomToken", lQ(QQ, FQ))
            }(wQ, {
              token: FQ,
              returnSecureToken: !0
            }), qQ = await uw._fromIdTokenResponse(wQ, "signIn", LQ);
          return await wQ._updateCurrentUser(qQ.user), qQ
        }
        class Rw {
          constructor(QQ, FQ) {
            this.factorId = QQ, this.uid = FQ.mfaEnrollmentId, this.enrollmentTime = new Date(FQ.enrolledAt).toUTCString(), this.displayName = FQ.displayName
          }
          static _fromServerResponse(QQ, FQ) {
            return "phoneInfo" in FQ ? Ow._fromServerResponse(QQ, FQ) : "totpInfo" in FQ ? sw._fromServerResponse(QQ, FQ) : pQ(QQ, "internal-error")
          }
        }
        class Ow extends Rw {
          constructor(QQ) {
            super("phone", QQ), this.phoneNumber = QQ.phoneInfo
          }
          static _fromServerResponse(QQ, FQ) {
            return new Ow(FQ)
          }
        }
        class sw extends Rw {
          constructor(QQ) {
            super("totp", QQ)
          }
          static _fromServerResponse(QQ, FQ) {
            return new sw(FQ)
          }
        }

        function rw(QQ, FQ, wQ) {
          var LQ;
          WQ((null === (LQ = wQ.url) || void 0 === LQ ? void 0 : LQ.length) > 0, QQ, "invalid-continue-uri"), WQ("undefined" === typeof wQ.dynamicLinkDomain || wQ.dynamicLinkDomain.length > 0, QQ, "invalid-dynamic-link-domain"), FQ.continueUrl = wQ.url, FQ.dynamicLinkDomain = wQ.dynamicLinkDomain, FQ.canHandleCodeInApp = wQ.handleCodeInApp, wQ.iOS && (WQ(wQ.iOS.bundleId.length > 0, QQ, "missing-ios-bundle-id"), FQ.iOSBundleId = wQ.iOS.bundleId), wQ.android && (WQ(wQ.android.packageName.length > 0, QQ, "missing-android-pkg-name"), FQ.androidInstallApp = wQ.android.installApp, FQ.androidMinimumVersionCode = wQ.android.minimumVersion, FQ.androidPackageName = wQ.android.packageName)
        }
        async function Iw(QQ, FQ, wQ) {
          var LQ;
          const qQ = UF(QQ),
            oQ = {
              requestType: "PASSWORD_RESET",
              email: FQ,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (LQ = qQ._getRecaptchaConfig()) || void 0 === LQ ? void 0 : LQ.emailPasswordEnabled) {
            const QQ = await sF(qQ, oQ, "getOobCode", !0);
            wQ && rw(qQ, QQ, wQ), await hF(qQ, QQ)
          } else wQ && rw(qQ, oQ, wQ), await hF(qQ, oQ).catch((async QQ => {
            if ("auth/missing-recaptcha-token" !== QQ.code) return Promise.reject(QQ);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const QQ = await sF(qQ, oQ, "getOobCode", !0);
              wQ && rw(qQ, QQ, wQ), await hF(qQ, QQ)
            }
          }))
        }
        async function Uw(QQ, FQ, wQ) {
          await aF((0, LQ.P)(QQ), {
            oobCode: FQ,
            newPassword: wQ
          })
        }
        async function Nw(QQ, FQ) {
          await async function(QQ, FQ) {
            return jQ(QQ, "POST", "/v1/accounts:update", lQ(QQ, FQ))
          }((0, LQ.P)(QQ), {
            oobCode: FQ
          })
        }
        async function Tw(QQ, FQ) {
          const wQ = (0, LQ.P)(QQ),
            qQ = await aF(wQ, {
              oobCode: FQ
            }),
            oQ = qQ.requestType;
          switch (WQ(oQ, wQ, "internal-error"), oQ) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              WQ(qQ.newEmail, wQ, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              WQ(qQ.mfaInfo, wQ, "internal-error");
            default:
              WQ(qQ.email, wQ, "internal-error")
          }
          let DQ = null;
          return qQ.mfaInfo && (DQ = Rw._fromServerResponse(UF(wQ), qQ.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === qQ.requestType ? qQ.newEmail : qQ.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === qQ.requestType ? qQ.email : qQ.newEmail) || null,
              multiFactorInfo: DQ
            },
            operation: oQ
          }
        }
        async function Kw(QQ, FQ) {
          const {
            data: wQ
          } = await Tw((0, LQ.P)(QQ), FQ);
          return wQ.email
        }
        async function zw(QQ, FQ, wQ) {
          var LQ;
          const qQ = UF(QQ),
            oQ = {
              returnSecureToken: !0,
              email: FQ,
              password: wQ,
              clientType: "CLIENT_TYPE_WEB"
            };
          let DQ;
          if (null === (LQ = qQ._getRecaptchaConfig()) || void 0 === LQ ? void 0 : LQ.emailPasswordEnabled) {
            const QQ = await sF(qQ, oQ, "signUpPassword");
            DQ = mw(qQ, QQ)
          } else DQ = mw(qQ, oQ).catch((async QQ => {
            if ("auth/missing-recaptcha-token" === QQ.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const QQ = await sF(qQ, oQ, "signUpPassword");
              return mw(qQ, QQ)
            }
            return Promise.reject(QQ)
          }));
          const kQ = await DQ.catch((QQ => Promise.reject(QQ))),
            vQ = await uw._fromIdTokenResponse(qQ, "signIn", kQ);
          return await qQ._updateCurrentUser(vQ.user), vQ
        }

        function lw(QQ, FQ, wQ) {
          return Cw((0, LQ.P)(QQ), dF.credential(FQ, wQ))
        }
        async function jw(QQ, FQ, wQ) {
          var LQ;
          const qQ = UF(QQ),
            oQ = {
              requestType: "EMAIL_SIGNIN",
              email: FQ,
              clientType: "CLIENT_TYPE_WEB"
            };

          function DQ(QQ, FQ) {
            WQ(FQ.handleCodeInApp, qQ, "argument-error"), FQ && rw(qQ, QQ, FQ)
          }
          if (null === (LQ = qQ._getRecaptchaConfig()) || void 0 === LQ ? void 0 : LQ.emailPasswordEnabled) {
            const QQ = await sF(qQ, oQ, "getOobCode", !0);
            DQ(QQ, wQ), await JF(qQ, QQ)
          } else DQ(oQ, wQ), await JF(qQ, oQ).catch((async QQ => {
            if ("auth/missing-recaptcha-token" !== QQ.code) return Promise.reject(QQ);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const QQ = await sF(qQ, oQ, "getOobCode", !0);
              DQ(QQ, wQ), await JF(qQ, QQ)
            }
          }))
        }

        function aw(QQ, FQ) {
          const wQ = yF.parseLink(FQ);
          return "EMAIL_SIGNIN" === (null === wQ || void 0 === wQ ? void 0 : wQ.operation)
        }
        async function Xw(QQ, FQ, wQ) {
          const qQ = (0, LQ.P)(QQ),
            oQ = dF.credentialWithLink(FQ, wQ || sQ());
          return WQ(oQ._tenantId === (qQ.tenantId || null), qQ, "tenant-id-mismatch"), Cw(qQ, oQ)
        }
        async function fw(QQ, FQ) {
          const wQ = {
              identifier: FQ,
              continueUri: rQ() ? sQ() : "http://localhost"
            },
            {
              signinMethods: qQ
            } = await async function(QQ, FQ) {
              return jQ(QQ, "POST", "/v1/accounts:createAuthUri", lQ(QQ, FQ))
            }((0, LQ.P)(QQ), wQ);
          return qQ || []
        }
        async function Vw(QQ, FQ) {
          const wQ = (0, LQ.P)(QQ),
            qQ = {
              requestType: "VERIFY_EMAIL",
              idToken: await QQ.getIdToken()
            };
          FQ && rw(wQ.auth, qQ, FQ);
          const {
            email: oQ
          } = await async function(QQ, FQ) {
            return VF(QQ, FQ)
          }(wQ.auth, qQ);
          oQ !== QQ.email && await QQ.reload()
        }
        async function hw(QQ, FQ, wQ) {
          const qQ = (0, LQ.P)(QQ),
            oQ = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await QQ.getIdToken(),
              newEmail: FQ
            };
          wQ && rw(qQ.auth, oQ, wQ);
          const {
            email: DQ
          } = await async function(QQ, FQ) {
            return VF(QQ, FQ)
          }(qQ.auth, oQ);
          DQ !== QQ.email && await QQ.reload()
        }
        async function Jw(QQ, FQ) {
          let {
            displayName: wQ,
            photoURL: qQ
          } = FQ;
          if (void 0 === wQ && void 0 === qQ) return;
          const oQ = (0, LQ.P)(QQ),
            DQ = {
              idToken: await oQ.getIdToken(),
              displayName: wQ,
              photoUrl: qQ,
              returnSecureToken: !0
            },
            kQ = await ZQ(oQ, async function(QQ, FQ) {
              return jQ(QQ, "POST", "/v1/accounts:update", FQ)
            }(oQ.auth, DQ));
          oQ.displayName = kQ.displayName || null, oQ.photoURL = kQ.photoUrl || null;
          const vQ = oQ.providerData.find((QQ => {
            let {
              providerId: FQ
            } = QQ;
            return "password" === FQ
          }));
          vQ && (vQ.displayName = oQ.displayName, vQ.photoURL = oQ.photoURL), await oQ._updateTokensIfNecessary(kQ)
        }

        function Ew(QQ, FQ) {
          return gw((0, LQ.P)(QQ), FQ, null)
        }

        function nw(QQ, FQ) {
          return gw((0, LQ.P)(QQ), null, FQ)
        }
        async function gw(QQ, FQ, wQ) {
          const {
            auth: LQ
          } = QQ, qQ = {
            idToken: await QQ.getIdToken(),
            returnSecureToken: !0
          };
          FQ && (qQ.email = FQ), wQ && (qQ.password = wQ);
          const oQ = await ZQ(QQ, XF(LQ, qQ));
          await QQ._updateTokensIfNecessary(oQ, !0)
        }
        class Pw {
          constructor(QQ, FQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = QQ, this.providerId = FQ, this.profile = wQ
          }
        }
        class Zw extends Pw {
          constructor(QQ, FQ, wQ, LQ) {
            super(QQ, FQ, wQ), this.username = LQ
          }
        }
        class yw extends Pw {
          constructor(QQ, FQ) {
            super(QQ, "facebook.com", FQ)
          }
        }
        class Bw extends Zw {
          constructor(QQ, FQ) {
            super(QQ, "github.com", FQ, "string" === typeof(null === FQ || void 0 === FQ ? void 0 : FQ.login) ? null === FQ || void 0 === FQ ? void 0 : FQ.login : null)
          }
        }
        class dw extends Pw {
          constructor(QQ, FQ) {
            super(QQ, "google.com", FQ)
          }
        }
        class QL extends Zw {
          constructor(QQ, FQ, wQ) {
            super(QQ, "twitter.com", FQ, wQ)
          }
        }

        function FL(QQ) {
          const {
            user: FQ,
            _tokenResponse: wQ
          } = QQ;
          return FQ.isAnonymous && !wQ ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(QQ) {
            var FQ, wQ;
            if (!QQ) return null;
            const {
              providerId: LQ
            } = QQ, qQ = QQ.rawUserInfo ? JSON.parse(QQ.rawUserInfo) : {}, oQ = QQ.isNewUser || "identitytoolkit#SignupNewUserResponse" === QQ.kind;
            if (!LQ && (null === QQ || void 0 === QQ ? void 0 : QQ.idToken)) {
              const LQ = null === (wQ = null === (FQ = PQ(QQ.idToken)) || void 0 === FQ ? void 0 : FQ.firebase) || void 0 === wQ ? void 0 : wQ.sign_in_provider;
              if (LQ) return new Pw(oQ, "anonymous" !== LQ && "custom" !== LQ ? LQ : null)
            }
            if (!LQ) return null;
            switch (LQ) {
              case "facebook.com":
                return new yw(oQ, qQ);
              case "github.com":
                return new Bw(oQ, qQ);
              case "google.com":
                return new dw(oQ, qQ);
              case "twitter.com":
                return new QL(oQ, qQ, QQ.screenName || null);
              case "custom":
              case "anonymous":
                return new Pw(oQ, null);
              default:
                return new Pw(oQ, LQ, qQ)
            }
          }(wQ)
        }

        function wL(QQ, FQ) {
          return (0, LQ.P)(QQ).setPersistence(FQ)
        }

        function LL(QQ) {
          return UF(QQ).initializeRecaptchaConfig()
        }

        function qL(QQ, FQ, wQ, qQ) {
          return (0, LQ.P)(QQ).onIdTokenChanged(FQ, wQ, qQ)
        }

        function oL(QQ, FQ, wQ) {
          return (0, LQ.P)(QQ).beforeAuthStateChanged(FQ, wQ)
        }

        function DL(QQ, FQ, wQ, qQ) {
          return (0, LQ.P)(QQ).onAuthStateChanged(FQ, wQ, qQ)
        }

        function kL(QQ) {
          (0, LQ.P)(QQ).useDeviceLanguage()
        }

        function vL(QQ, FQ) {
          return (0, LQ.P)(QQ).updateCurrentUser(FQ)
        }

        function mL(QQ) {
          return (0, LQ.P)(QQ).signOut()
        }
        async function uL(QQ) {
          return (0, LQ.P)(QQ).delete()
        }
        class HL {
          constructor(QQ, FQ, wQ) {
            this.type = QQ, this.credential = FQ, this.auth = wQ
          }
          static _fromIdtoken(QQ, FQ) {
            return new HL("enroll", QQ, FQ)
          }
          static _fromMfaPendingCredential(QQ) {
            return new HL("signin", QQ)
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
            var FQ, wQ;
            if (null === QQ || void 0 === QQ ? void 0 : QQ.multiFactorSession) {
              if (null === (FQ = QQ.multiFactorSession) || void 0 === FQ ? void 0 : FQ.pendingCredential) return HL._fromMfaPendingCredential(QQ.multiFactorSession.pendingCredential);
              if (null === (wQ = QQ.multiFactorSession) || void 0 === wQ ? void 0 : wQ.idToken) return HL._fromIdtoken(QQ.multiFactorSession.idToken)
            }
            return null
          }
        }
        class bL {
          constructor(QQ, FQ, wQ) {
            this.session = QQ, this.hints = FQ, this.signInResolver = wQ
          }
          static _fromError(QQ, FQ) {
            const wQ = UF(QQ),
              LQ = FQ.customData._serverResponse,
              qQ = (LQ.mfaInfo || []).map((QQ => Rw._fromServerResponse(wQ, QQ)));
            WQ(LQ.mfaPendingCredential, wQ, "internal-error");
            const oQ = HL._fromMfaPendingCredential(LQ.mfaPendingCredential);
            return new bL(oQ, qQ, (async QQ => {
              const qQ = await QQ._process(wQ, oQ);
              delete LQ.mfaInfo, delete LQ.mfaPendingCredential;
              const DQ = Object.assign(Object.assign({}, LQ), {
                idToken: qQ.idToken,
                refreshToken: qQ.refreshToken
              });
              switch (FQ.operationType) {
                case "signIn":
                  const QQ = await uw._fromIdTokenResponse(wQ, FQ.operationType, DQ);
                  return await wQ._updateCurrentUser(QQ.user), QQ;
                case "reauthenticate":
                  return WQ(FQ.user, wQ, "internal-error"), uw._forOperation(FQ.user, FQ.operationType, DQ);
                default:
                  pQ(wQ, "internal-error")
              }
            }))
          }
          async resolveSignIn(QQ) {
            const FQ = QQ;
            return this.signInResolver(FQ)
          }
        }

        function YL(QQ, FQ) {
          var wQ;
          const qQ = (0, LQ.P)(QQ),
            oQ = FQ;
          return WQ(FQ.customData.operationType, qQ, "argument-error"), WQ(null === (wQ = oQ.customData._serverResponse) || void 0 === wQ ? void 0 : wQ.mfaPendingCredential, qQ, "argument-error"), bL._fromError(qQ, oQ)
        }
        class xL {
          constructor(QQ) {
            this.user = QQ, this.enrolledFactors = [], QQ._onReload((FQ => {
              FQ.mfaInfo && (this.enrolledFactors = FQ.mfaInfo.map((FQ => Rw._fromServerResponse(QQ.auth, FQ))))
            }))
          }
          static _fromUser(QQ) {
            return new xL(QQ)
          }
          async getSession() {
            return HL._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(QQ, FQ) {
            const wQ = QQ,
              LQ = await this.getSession(),
              qQ = await ZQ(this.user, wQ._process(this.user.auth, LQ, FQ));
            return await this.user._updateTokensIfNecessary(qQ), this.user.reload()
          }
          async unenroll(QQ) {
            const FQ = "string" === typeof QQ ? QQ : QQ.uid,
              wQ = await this.user.getIdToken();
            try {
              const QQ = await ZQ(this.user, (LQ = this.user.auth, qQ = {
                idToken: wQ,
                mfaEnrollmentId: FQ
              }, jQ(LQ, "POST", "/v2/accounts/mfaEnrollment:withdraw", lQ(LQ, qQ))));
              this.enrolledFactors = this.enrolledFactors.filter((QQ => {
                let {
                  uid: wQ
                } = QQ;
                return wQ !== FQ
              })), await this.user._updateTokensIfNecessary(QQ), await this.user.reload()
            } catch (oQ) {
              throw oQ
            }
            var LQ, qQ
          }
        }
        const AL = new WeakMap;

        function tL(QQ) {
          const FQ = (0, LQ.P)(QQ);
          return AL.has(FQ) || AL.set(FQ, xL._fromUser(FQ)), AL.get(FQ)
        }
        const eL = "__sak";
        class ML {
          constructor(QQ, FQ) {
            this.storageRetriever = QQ, this.type = FQ
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(eL, "1"), this.storage.removeItem(eL), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (QQ) {
              return Promise.resolve(!1)
            }
          }
          _set(QQ, FQ) {
            return this.storage.setItem(QQ, JSON.stringify(FQ)), Promise.resolve()
          }
          _get(QQ) {
            const FQ = this.storage.getItem(QQ);
            return Promise.resolve(FQ ? JSON.parse(FQ) : null)
          }
          _remove(QQ) {
            return this.storage.removeItem(QQ), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class GL extends ML {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (QQ, FQ) => this.onStorageEvent(QQ, FQ), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const QQ = (0, LQ.Q)();
              return bF(QQ) || MF(QQ)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (QQ) {
                return !1
              }
            }(), this.fallbackToPolling = GF(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(QQ) {
            for (const FQ of Object.keys(this.listeners)) {
              const wQ = this.storage.getItem(FQ),
                LQ = this.localCache[FQ];
              wQ !== LQ && QQ(FQ, LQ, wQ)
            }
          }
          onStorageEvent(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!QQ.key) return void this.forAllChangedKeys(((QQ, FQ, wQ) => {
              this.notifyListeners(QQ, wQ)
            }));
            const wQ = QQ.key;
            if (FQ ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const LQ = this.storage.getItem(wQ);
              if (QQ.newValue !== LQ) null !== QQ.newValue ? this.storage.setItem(wQ, QQ.newValue) : this.storage.removeItem(wQ);
              else if (this.localCache[wQ] === QQ.newValue && !FQ) return
            }
            const qQ = () => {
                const QQ = this.storage.getItem(wQ);
                (FQ || this.localCache[wQ] !== QQ) && this.notifyListeners(wQ, QQ)
              },
              oQ = this.storage.getItem(wQ);
            (0, LQ.X)() && 10 === document.documentMode && oQ !== QQ.newValue && QQ.newValue !== QQ.oldValue ? setTimeout(qQ, 10) : qQ()
          }
          notifyListeners(QQ, FQ) {
            this.localCache[QQ] = FQ;
            const wQ = this.listeners[QQ];
            if (wQ)
              for (const LQ of Array.from(wQ)) LQ(FQ ? JSON.parse(FQ) : FQ)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((QQ, FQ, wQ) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: QQ,
                  oldValue: FQ,
                  newValue: wQ
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
          _addListener(QQ, FQ) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[QQ] || (this.listeners[QQ] = new Set, this.localCache[QQ] = this.storage.getItem(QQ)), this.listeners[QQ].add(FQ)
          }
          _removeListener(QQ, FQ) {
            this.listeners[QQ] && (this.listeners[QQ].delete(FQ), 0 === this.listeners[QQ].size && delete this.listeners[QQ]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(QQ, FQ) {
            await super._set(QQ, FQ), this.localCache[QQ] = JSON.stringify(FQ)
          }
          async _get(QQ) {
            const FQ = await super._get(QQ);
            return this.localCache[QQ] = JSON.stringify(FQ), FQ
          }
          async _remove(QQ) {
            await super._remove(QQ), delete this.localCache[QQ]
          }
        }
        GL.type = "LOCAL";
        const pL = GL;
        class cL extends ML {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(QQ, FQ) {}
          _removeListener(QQ, FQ) {}
        }
        cL.type = "SESSION";
        const CL = cL;
        class SL {
          constructor(QQ) {
            this.eventTarget = QQ, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(QQ) {
            const FQ = this.receivers.find((FQ => FQ.isListeningto(QQ)));
            if (FQ) return FQ;
            const wQ = new SL(QQ);
            return this.receivers.push(wQ), wQ
          }
          isListeningto(QQ) {
            return this.eventTarget === QQ
          }
          async handleEvent(QQ) {
            const FQ = QQ,
              {
                eventId: wQ,
                eventType: LQ,
                data: qQ
              } = FQ.data,
              oQ = this.handlersMap[LQ];
            if (!(null === oQ || void 0 === oQ ? void 0 : oQ.size)) return;
            FQ.ports[0].postMessage({
              status: "ack",
              eventId: wQ,
              eventType: LQ
            });
            const DQ = Array.from(oQ).map((async QQ => QQ(FQ.origin, qQ))),
              kQ = await
            function(QQ) {
              return Promise.all(QQ.map((async QQ => {
                try {
                  return {
                    fulfilled: !0,
                    value: await QQ
                  }
                } catch (FQ) {
                  return {
                    fulfilled: !1,
                    reason: FQ
                  }
                }
              })))
            }(DQ);
            FQ.ports[0].postMessage({
              status: "done",
              eventId: wQ,
              eventType: LQ,
              response: kQ
            })
          }
          _subscribe(QQ, FQ) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[QQ] || (this.handlersMap[QQ] = new Set), this.handlersMap[QQ].add(FQ)
          }
          _unsubscribe(QQ, FQ) {
            this.handlersMap[QQ] && FQ && this.handlersMap[QQ].delete(FQ), FQ && 0 !== this.handlersMap[QQ].size || delete this.handlersMap[QQ], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function iL() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            wQ = "";
          for (let LQ = 0; LQ < FQ; LQ++) wQ += Math.floor(10 * Math.random());
          return QQ + wQ
        }
        SL.receivers = [];
        class WL {
          constructor(QQ) {
            this.target = QQ, this.handlers = new Set
          }
          removeMessageHandler(QQ) {
            QQ.messageChannel && (QQ.messageChannel.port1.removeEventListener("message", QQ.mp), QQ.messageChannel.port1.close()), this.handlers.delete(QQ)
          }
          async _send(QQ, FQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const LQ = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!LQ) throw new Error("connection_unavailable");
            let qQ, oQ;
            return new Promise(((DQ, kQ) => {
              const vQ = iL("", 20);
              LQ.port1.start();
              const mQ = setTimeout((() => {
                kQ(new Error("unsupported_event"))
              }), wQ);
              oQ = {
                messageChannel: LQ,
                mp(QQ) {
                  const FQ = QQ;
                  if (FQ.data.eventId === vQ) switch (FQ.data.status) {
                    case "ack":
                      clearTimeout(mQ), qQ = setTimeout((() => {
                        kQ(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(qQ), DQ(FQ.data.response);
                      break;
                    default:
                      clearTimeout(mQ), clearTimeout(qQ), kQ(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(oQ), LQ.port1.addEventListener("message", oQ.mp), this.target.postMessage({
                eventType: QQ,
                eventId: vQ,
                data: FQ
              }, [LQ.port2])
            })).finally((() => {
              oQ && this.removeMessageHandler(oQ)
            }))
          }
        }

        function RL() {
          return window
        }

        function OL() {
          return "undefined" !== typeof RL().WorkerGlobalScope && "function" === typeof RL().importScripts
        }
        const sL = "firebaseLocalStorageDb",
          rL = "firebaseLocalStorage",
          IL = "fbase_key";
        class UL {
          constructor(QQ) {
            this.request = QQ
          }
          toPromise() {
            return new Promise(((QQ, FQ) => {
              this.request.addEventListener("success", (() => {
                QQ(this.request.result)
              })), this.request.addEventListener("error", (() => {
                FQ(this.request.error)
              }))
            }))
          }
        }

        function NL(QQ, FQ) {
          return QQ.transaction([rL], FQ ? "readwrite" : "readonly").objectStore(rL)
        }

        function TL() {
          const QQ = indexedDB.open(sL, 1);
          return new Promise(((FQ, wQ) => {
            QQ.addEventListener("error", (() => {
              wQ(QQ.error)
            })), QQ.addEventListener("upgradeneeded", (() => {
              const FQ = QQ.result;
              try {
                FQ.createObjectStore(rL, {
                  keyPath: IL
                })
              } catch (LQ) {
                wQ(LQ)
              }
            })), QQ.addEventListener("success", (async () => {
              const wQ = QQ.result;
              wQ.objectStoreNames.contains(rL) ? FQ(wQ) : (wQ.close(), await
                function() {
                  const QQ = indexedDB.deleteDatabase(sL);
                  return new UL(QQ).toPromise()
                }(), FQ(await TL()))
            }))
          }))
        }
        async function KL(QQ, FQ, wQ) {
          const LQ = NL(QQ, !0).put({
            [IL]: FQ,
            value: wQ
          });
          return new UL(LQ).toPromise()
        }

        function zL(QQ, FQ) {
          const wQ = NL(QQ, !0).delete(FQ);
          return new UL(wQ).toPromise()
        }
        class lL {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await TL()), this.db
          }
          async _withRetries(QQ) {
            let FQ = 0;
            for (;;) try {
              const FQ = await this._openDb();
              return await QQ(FQ)
            } catch (wQ) {
              if (FQ++ > 3) throw wQ;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return OL() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = SL._getInstance(OL() ? self : null), this.receiver._subscribe("keyChanged", (async (QQ, FQ) => ({
              keyProcessed: (await this._poll()).includes(FQ.key)
            }))), this.receiver._subscribe("ping", (async (QQ, FQ) => ["keyChanged"]))
          }
          async initializeSender() {
            var QQ, FQ;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (QQ) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new WL(this.activeServiceWorker);
            const wQ = await this.sender._send("ping", {}, 800);
            wQ && (null === (QQ = wQ[0]) || void 0 === QQ ? void 0 : QQ.fulfilled) && (null === (FQ = wQ[0]) || void 0 === FQ ? void 0 : FQ.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(QQ) {
            if (this.sender && this.activeServiceWorker && function() {
                var QQ;
                return (null === (QQ = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === QQ ? void 0 : QQ.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: QQ
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (FQ) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const QQ = await TL();
              return await KL(QQ, eL, "1"), await zL(QQ, eL), !0
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
          async _set(QQ, FQ) {
            return this._withPendingWrite((async () => (await this._withRetries((wQ => KL(wQ, QQ, FQ))), this.localCache[QQ] = FQ, this.notifyServiceWorker(QQ))))
          }
          async _get(QQ) {
            const FQ = await this._withRetries((FQ => async function(QQ, FQ) {
              const wQ = NL(QQ, !1).get(FQ),
                LQ = await new UL(wQ).toPromise();
              return void 0 === LQ ? null : LQ.value
            }(FQ, QQ)));
            return this.localCache[QQ] = FQ, FQ
          }
          async _remove(QQ) {
            return this._withPendingWrite((async () => (await this._withRetries((FQ => zL(FQ, QQ))), delete this.localCache[QQ], this.notifyServiceWorker(QQ))))
          }
          async _poll() {
            const QQ = await this._withRetries((QQ => {
              const FQ = NL(QQ, !1).getAll();
              return new UL(FQ).toPromise()
            }));
            if (!QQ) return [];
            if (0 !== this.pendingWrites) return [];
            const FQ = [],
              wQ = new Set;
            for (const {
                fbase_key: LQ,
                value: qQ
              }
              of QQ) wQ.add(LQ), JSON.stringify(this.localCache[LQ]) !== JSON.stringify(qQ) && (this.notifyListeners(LQ, qQ), FQ.push(LQ));
            for (const LQ of Object.keys(this.localCache)) this.localCache[LQ] && !wQ.has(LQ) && (this.notifyListeners(LQ, null), FQ.push(LQ));
            return FQ
          }
          notifyListeners(QQ, FQ) {
            this.localCache[QQ] = FQ;
            const wQ = this.listeners[QQ];
            if (wQ)
              for (const LQ of Array.from(wQ)) LQ(FQ)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(QQ, FQ) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[QQ] || (this.listeners[QQ] = new Set, this._get(QQ)), this.listeners[QQ].add(FQ)
          }
          _removeListener(QQ, FQ) {
            this.listeners[QQ] && (this.listeners[QQ].delete(FQ), 0 === this.listeners[QQ].size && delete this.listeners[QQ]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        lL.type = "LOCAL";
        const jL = lL;
        const aL = 1e12;
        class XL {
          constructor(QQ) {
            this.auth = QQ, this.counter = aL, this._widgets = new Map
          }
          render(QQ, FQ) {
            const wQ = this.counter;
            return this._widgets.set(wQ, new fL(QQ, this.auth.name, FQ || {})), this.counter++, wQ
          }
          reset(QQ) {
            var FQ;
            const wQ = QQ || aL;
            null === (FQ = this._widgets.get(wQ)) || void 0 === FQ || FQ.delete(), this._widgets.delete(wQ)
          }
          getResponse(QQ) {
            var FQ;
            const wQ = QQ || aL;
            return (null === (FQ = this._widgets.get(wQ)) || void 0 === FQ ? void 0 : FQ.getResponse()) || ""
          }
          async execute(QQ) {
            var FQ;
            const wQ = QQ || aL;
            return null === (FQ = this._widgets.get(wQ)) || void 0 === FQ || FQ.execute(), ""
          }
        }
        class fL {
          constructor(QQ, FQ, wQ) {
            this.params = wQ, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const LQ = "string" === typeof QQ ? document.getElementById(QQ) : QQ;
            WQ(LQ, "argument-error", {
              appName: FQ
            }), this.container = LQ, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const FQ = [],
                  wQ = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let LQ = 0; LQ < QQ; LQ++) FQ.push(wQ.charAt(Math.floor(Math.random() * wQ.length)));
                return FQ.join("")
              }(50);
              const {
                callback: QQ,
                "expired-callback": FQ
              } = this.params;
              if (QQ) try {
                QQ(this.responseToken)
              } catch (wQ) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, FQ) try {
                  FQ()
                } catch (wQ) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const VL = RF("rcb"),
          hL = new UQ(3e4, 6e4);
        class JL {
          constructor() {
            var QQ;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (QQ = RL().grecaptcha) || void 0 === QQ ? void 0 : QQ.render)
          }
          load(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return WQ(function(QQ) {
              return QQ.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(QQ)
            }(FQ), QQ, "argument-error"), this.shouldResolveImmediately(FQ) && CF(RL().grecaptcha) ? Promise.resolve(RL().grecaptcha) : new Promise(((wQ, qQ) => {
              const oQ = RL().setTimeout((() => {
                qQ(cQ(QQ, "network-request-failed"))
              }), hL.get());
              RL()[VL] = () => {
                RL().clearTimeout(oQ), delete RL()[VL];
                const LQ = RL().grecaptcha;
                if (!LQ || !CF(LQ)) return void qQ(cQ(QQ, "internal-error"));
                const DQ = LQ.render;
                LQ.render = (QQ, FQ) => {
                  const wQ = DQ(QQ, FQ);
                  return this.counter++, wQ
                }, this.hostLanguage = FQ, wQ(LQ)
              };
              WF(`https://www.google.com/recaptcha/api.js??${(0,LQ.kb)({onload:VL,render:"explicit",hl:FQ})}`).catch((() => {
                clearTimeout(oQ), qQ(cQ(QQ, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(QQ) {
            var FQ;
            return !!(null === (FQ = RL().grecaptcha) || void 0 === FQ ? void 0 : FQ.render) && (QQ === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class EL {
          async load(QQ) {
            return new XL(QQ)
          }
          clearedOneInstance() {}
        }
        const nL = "recaptcha",
          gL = {
            theme: "light",
            type: "image"
          };
        class PL {
          constructor(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, gL),
              wQ = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = FQ, this.type = nL, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = UF(wQ), this.isInvisible = "invisible" === this.parameters.size, WQ("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const LQ = "string" === typeof QQ ? document.getElementById(QQ) : QQ;
            WQ(LQ, this.auth, "argument-error"), this.container = LQ, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new EL : new JL, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const QQ = await this.render(),
              FQ = this.getAssertedRecaptcha(),
              wQ = FQ.getResponse(QQ);
            return wQ || new Promise((wQ => {
              const LQ = QQ => {
                QQ && (this.tokenChangeListeners.delete(LQ), wQ(QQ))
              };
              this.tokenChangeListeners.add(LQ), this.isInvisible && FQ.execute(QQ)
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
            WQ(!this.parameters.sitekey, this.auth, "argument-error"), WQ(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), WQ("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(QQ) {
            return FQ => {
              if (this.tokenChangeListeners.forEach((QQ => QQ(FQ))), "function" === typeof QQ) QQ(FQ);
              else if ("string" === typeof QQ) {
                const wQ = RL()[QQ];
                "function" === typeof wQ && wQ(FQ)
              }
            }
          }
          assertNotDestroyed() {
            WQ(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let QQ = this.container;
              if (!this.isInvisible) {
                const FQ = document.createElement("div");
                QQ.appendChild(FQ), QQ = FQ
              }
              this.widgetId = this.getAssertedRecaptcha().render(QQ, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            WQ(rQ() && !OL(), this.auth, "internal-error"), await
            function() {
              let QQ = null;
              return new Promise((FQ => {
                "complete" !== document.readyState ? (QQ = () => FQ(), window.addEventListener("load", QQ)) : FQ()
              })).catch((FQ => {
                throw QQ && window.removeEventListener("load", QQ), FQ
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const QQ = await async function(QQ) {
              return (await jQ(QQ, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            WQ(QQ, this.auth, "internal-error"), this.parameters.sitekey = QQ
          }
          getAssertedRecaptcha() {
            return WQ(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class ZL {
          constructor(QQ, FQ) {
            this.verificationId = QQ, this.onConfirmation = FQ
          }
          confirm(QQ) {
            const FQ = ZF._fromVerification(this.verificationId, QQ);
            return this.onConfirmation(FQ)
          }
        }
        async function yL(QQ, FQ, wQ) {
          const qQ = UF(QQ),
            oQ = await Qq(qQ, FQ, (0, LQ.P)(wQ));
          return new ZL(oQ, (QQ => Cw(qQ, QQ)))
        }
        async function BL(QQ, FQ, wQ) {
          const qQ = (0, LQ.P)(QQ);
          await Mw(!1, qQ, "phone");
          const oQ = await Qq(qQ.auth, FQ, (0, LQ.P)(wQ));
          return new ZL(oQ, (QQ => Sw(qQ, QQ)))
        }
        async function dL(QQ, FQ, wQ) {
          const qQ = (0, LQ.P)(QQ),
            oQ = await Qq(qQ.auth, FQ, (0, LQ.P)(wQ));
          return new ZL(oQ, (QQ => iw(qQ, QQ)))
        }
        async function Qq(QQ, FQ, wQ) {
          var LQ;
          const qQ = await wQ.verify();
          try {
            let oQ;
            if (WQ("string" === typeof qQ, QQ, "argument-error"), WQ(wQ.type === nL, QQ, "argument-error"), oQ = "string" === typeof FQ ? {
                phoneNumber: FQ
              } : FQ, "session" in oQ) {
              const FQ = oQ.session;
              if ("phoneNumber" in oQ) {
                WQ("enroll" === FQ.type, QQ, "internal-error");
                const wQ = await
                function(QQ, FQ) {
                  return jQ(QQ, "POST", "/v2/accounts/mfaEnrollment:start", lQ(QQ, FQ))
                }(QQ, {
                  idToken: FQ.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: oQ.phoneNumber,
                    recaptchaToken: qQ
                  }
                });
                return wQ.phoneSessionInfo.sessionInfo
              } {
                WQ("signin" === FQ.type, QQ, "internal-error");
                const wQ = (null === (LQ = oQ.multiFactorHint) || void 0 === LQ ? void 0 : LQ.uid) || oQ.multiFactorUid;
                WQ(wQ, QQ, "missing-multi-factor-info");
                const DQ = await
                function(QQ, FQ) {
                  return jQ(QQ, "POST", "/v2/accounts/mfaSignIn:start", lQ(QQ, FQ))
                }(QQ, {
                  mfaPendingCredential: FQ.credential,
                  mfaEnrollmentId: wQ,
                  phoneSignInInfo: {
                    recaptchaToken: qQ
                  }
                });
                return DQ.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: FQ
              } = await async function(QQ, FQ) {
                return jQ(QQ, "POST", "/v1/accounts:sendVerificationCode", lQ(QQ, FQ))
              }(QQ, {
                phoneNumber: oQ.phoneNumber,
                recaptchaToken: qQ
              });
              return FQ
            }
          } finally {
            wQ._reset()
          }
        }
        async function Fq(QQ, FQ) {
          await ew((0, LQ.P)(QQ), FQ)
        }
        class wq {
          constructor(QQ) {
            this.providerId = wq.PROVIDER_ID, this.auth = UF(QQ)
          }
          verifyPhoneNumber(QQ, FQ) {
            return Qq(this.auth, QQ, (0, LQ.P)(FQ))
          }
          static credential(QQ, FQ) {
            return ZF._fromVerification(QQ, FQ)
          }
          static credentialFromResult(QQ) {
            const FQ = QQ;
            return wq.credentialFromTaggedObject(FQ)
          }
          static credentialFromError(QQ) {
            return wq.credentialFromTaggedObject(QQ.customData || {})
          }
          static credentialFromTaggedObject(QQ) {
            let {
              _tokenResponse: FQ
            } = QQ;
            if (!FQ) return null;
            const {
              phoneNumber: wQ,
              temporaryProof: LQ
            } = FQ;
            return wQ && LQ ? ZF._fromTokenResponse(wQ, LQ) : null
          }
        }

        function Lq(QQ, FQ) {
          return FQ ? oF(FQ) : (WQ(QQ._popupRedirectResolver, QQ, "argument-error"), QQ._popupRedirectResolver)
        }
        wq.PROVIDER_ID = "phone", wq.PHONE_SIGN_IN_METHOD = "phone";
        class qq extends jF {
          constructor(QQ) {
            super("custom", "custom"), this.params = QQ
          }
          _getIdTokenResponse(QQ) {
            return nF(QQ, this._buildIdpRequest())
          }
          _linkToIdToken(QQ, FQ) {
            return nF(QQ, this._buildIdpRequest(FQ))
          }
          _getReauthenticationResolver(QQ) {
            return nF(QQ, this._buildIdpRequest())
          }
          _buildIdpRequest(QQ) {
            const FQ = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return QQ && (FQ.idToken = QQ), FQ
          }
        }

        function oq(QQ) {
          return pw(QQ.auth, new qq(QQ), QQ.bypassAuthState)
        }

        function Dq(QQ) {
          const {
            auth: FQ,
            user: wQ
          } = QQ;
          return WQ(wQ, FQ, "internal-error"), Gw(wQ, new qq(QQ), QQ.bypassAuthState)
        }
        async function kq(QQ) {
          const {
            auth: FQ,
            user: wQ
          } = QQ;
          return WQ(wQ, FQ, "internal-error"), ew(wQ, new qq(QQ), QQ.bypassAuthState)
        }
        class vq {
          constructor(QQ, FQ, wQ, LQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = QQ, this.resolver = wQ, this.user = LQ, this.bypassAuthState = qQ, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(FQ) ? FQ : [FQ]
          }
          execute() {
            return new Promise((async (QQ, FQ) => {
              this.pendingPromise = {
                resolve: QQ,
                reject: FQ
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (wQ) {
                this.reject(wQ)
              }
            }))
          }
          async onAuthEvent(QQ) {
            const {
              urlResponse: FQ,
              sessionId: wQ,
              postBody: LQ,
              tenantId: qQ,
              error: oQ,
              type: DQ
            } = QQ;
            if (oQ) return void this.reject(oQ);
            const kQ = {
              auth: this.auth,
              requestUri: FQ,
              sessionId: wQ,
              tenantId: qQ || void 0,
              postBody: LQ || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(DQ)(kQ))
            } catch (vQ) {
              this.reject(vQ)
            }
          }
          onError(QQ) {
            this.reject(QQ)
          }
          getIdpTask(QQ) {
            switch (QQ) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return oq;
              case "linkViaPopup":
              case "linkViaRedirect":
                return kq;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Dq;
              default:
                pQ(this.auth, "internal-error")
            }
          }
          resolve(QQ) {
            OQ(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(QQ), this.unregisterAndCleanUp()
          }
          reject(QQ) {
            OQ(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(QQ), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const mq = new UQ(2e3, 1e4);
        async function uq(QQ, FQ, wQ) {
          const LQ = UF(QQ);
          SQ(QQ, FQ, Qw);
          const qQ = Lq(LQ, wQ);
          return new Yq(LQ, "signInViaPopup", FQ, qQ).executeNotNull()
        }
        async function Hq(QQ, FQ, wQ) {
          const qQ = (0, LQ.P)(QQ);
          SQ(qQ.auth, FQ, Qw);
          const oQ = Lq(qQ.auth, wQ);
          return new Yq(qQ.auth, "reauthViaPopup", FQ, oQ, qQ).executeNotNull()
        }
        async function bq(QQ, FQ, wQ) {
          const qQ = (0, LQ.P)(QQ);
          SQ(qQ.auth, FQ, Qw);
          const oQ = Lq(qQ.auth, wQ);
          return new Yq(qQ.auth, "linkViaPopup", FQ, oQ, qQ).executeNotNull()
        }
        class Yq extends vq {
          constructor(QQ, FQ, wQ, LQ, qQ) {
            super(QQ, FQ, LQ, qQ), this.provider = wQ, this.authWindow = null, this.pollId = null, Yq.currentPopupAction && Yq.currentPopupAction.cancel(), Yq.currentPopupAction = this
          }
          async executeNotNull() {
            const QQ = await this.execute();
            return WQ(QQ, this.auth, "internal-error"), QQ
          }
          async onExecution() {
            OQ(1 === this.filter.length, "Popup operations only handle one event");
            const QQ = iL();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], QQ), this.authWindow.associatedEvent = QQ, this.resolver._originValidation(this.auth).catch((QQ => {
              this.reject(QQ)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (QQ => {
              QQ || this.reject(cQ(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var QQ;
            return (null === (QQ = this.authWindow) || void 0 === QQ ? void 0 : QQ.associatedEvent) || null
          }
          cancel() {
            this.reject(cQ(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Yq.currentPopupAction = null
          }
          pollUserCancellation() {
            const QQ = () => {
              var FQ, wQ;
              (null === (wQ = null === (FQ = this.authWindow) || void 0 === FQ ? void 0 : FQ.window) || void 0 === wQ ? void 0 : wQ.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(cQ(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(QQ, mq.get())
            };
            QQ()
          }
        }
        Yq.currentPopupAction = null;
        const xq = "pendingRedirect",
          Aq = new Map;
        class tq extends vq {
          constructor(QQ, FQ) {
            super(QQ, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], FQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let QQ = Aq.get(this.auth._key());
            if (!QQ) {
              try {
                const FQ = await async function(QQ, FQ) {
                  const wQ = pq(FQ),
                    LQ = Gq(QQ);
                  if (!await LQ._isAvailable()) return !1;
                  const qQ = "true" === await LQ._get(wQ);
                  return await LQ._remove(wQ), qQ
                }(this.resolver, this.auth) ? await super.execute() : null;
                QQ = () => Promise.resolve(FQ)
              } catch (FQ) {
                QQ = () => Promise.reject(FQ)
              }
              Aq.set(this.auth._key(), QQ)
            }
            return this.bypassAuthState || Aq.set(this.auth._key(), (() => Promise.resolve(null))), QQ()
          }
          async onAuthEvent(QQ) {
            if ("signInViaRedirect" === QQ.type) return super.onAuthEvent(QQ);
            if ("unknown" !== QQ.type) {
              if (QQ.eventId) {
                const FQ = await this.auth._redirectUserForId(QQ.eventId);
                if (FQ) return this.user = FQ, super.onAuthEvent(QQ);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function eq(QQ, FQ) {
          return Gq(QQ)._set(pq(FQ), "true")
        }

        function Mq(QQ, FQ) {
          Aq.set(QQ._key(), FQ)
        }

        function Gq(QQ) {
          return oF(QQ._redirectPersistence)
        }

        function pq(QQ) {
          return vF(xq, QQ.config.apiKey, QQ.name)
        }

        function cq(QQ, FQ, wQ) {
          return async function(QQ, FQ, wQ) {
            const LQ = UF(QQ);
            SQ(QQ, FQ, Qw), await LQ._initializationPromise;
            const qQ = Lq(LQ, wQ);
            return await eq(qQ, LQ), qQ._openRedirect(LQ, FQ, "signInViaRedirect")
          }(QQ, FQ, wQ)
        }

        function Cq(QQ, FQ, wQ) {
          return async function(QQ, FQ, wQ) {
            const qQ = (0, LQ.P)(QQ);
            SQ(qQ.auth, FQ, Qw), await qQ.auth._initializationPromise;
            const oQ = Lq(qQ.auth, wQ);
            await eq(oQ, qQ.auth);
            const DQ = await Rq(qQ);
            return oQ._openRedirect(qQ.auth, FQ, "reauthViaRedirect", DQ)
          }(QQ, FQ, wQ)
        }

        function Sq(QQ, FQ, wQ) {
          return async function(QQ, FQ, wQ) {
            const qQ = (0, LQ.P)(QQ);
            SQ(qQ.auth, FQ, Qw), await qQ.auth._initializationPromise;
            const oQ = Lq(qQ.auth, wQ);
            await Mw(!1, qQ, FQ.providerId), await eq(oQ, qQ.auth);
            const DQ = await Rq(qQ);
            return oQ._openRedirect(qQ.auth, FQ, "linkViaRedirect", DQ)
          }(QQ, FQ, wQ)
        }
        async function iq(QQ, FQ) {
          return await UF(QQ)._initializationPromise, Wq(QQ, FQ, !1)
        }
        async function Wq(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const LQ = UF(QQ),
            qQ = Lq(LQ, FQ),
            oQ = new tq(LQ, qQ, wQ),
            DQ = await oQ.execute();
          return DQ && !wQ && (delete DQ.user._redirectEventId, await LQ._persistUserIfCurrent(DQ.user), await LQ._setRedirectUser(null, FQ)), DQ
        }
        async function Rq(QQ) {
          const FQ = iL(`${QQ.uid}:::`);
          return QQ._redirectEventId = FQ, await QQ.auth._setRedirectUser(QQ), await QQ.auth._persistUserIfCurrent(QQ), FQ
        }
        class Oq {
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
            let FQ = !1;
            return this.consumers.forEach((wQ => {
              this.isEventForConsumer(QQ, wQ) && (FQ = !0, this.sendToConsumer(QQ, wQ), this.saveEventToCache(QQ))
            })), this.hasHandledPotentialRedirect || ! function(QQ) {
              switch (QQ.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return rq(QQ);
                default:
                  return !1
              }
            }(QQ) || (this.hasHandledPotentialRedirect = !0, FQ || (this.queuedRedirectEvent = QQ, FQ = !0)), FQ
          }
          sendToConsumer(QQ, FQ) {
            var wQ;
            if (QQ.error && !rq(QQ)) {
              const LQ = (null === (wQ = QQ.error.code) || void 0 === wQ ? void 0 : wQ.split("auth/")[1]) || "internal-error";
              FQ.onError(cQ(this.auth, LQ))
            } else FQ.onAuthEvent(QQ)
          }
          isEventForConsumer(QQ, FQ) {
            const wQ = null === FQ.eventId || !!QQ.eventId && QQ.eventId === FQ.eventId;
            return FQ.filter.includes(QQ.type) && wQ
          }
          hasEventBeenHandled(QQ) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(sq(QQ))
          }
          saveEventToCache(QQ) {
            this.cachedEventUids.add(sq(QQ)), this.lastProcessedEventTime = Date.now()
          }
        }

        function sq(QQ) {
          return [QQ.type, QQ.eventId, QQ.sessionId, QQ.tenantId].filter((QQ => QQ)).join("-")
        }

        function rq(QQ) {
          let {
            type: FQ,
            error: wQ
          } = QQ;
          return "unknown" === FQ && "auth/no-auth-event" === (null === wQ || void 0 === wQ ? void 0 : wQ.code)
        }
        const Iq = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Uq = /^https?/;
        async function Nq(QQ) {
          if (QQ.config.emulator) return;
          const {
            authorizedDomains: FQ
          } = await async function(QQ) {
            return jQ(QQ, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(QQ);
          for (const LQ of FQ) try {
            if (Tq(LQ)) return
          } catch (wQ) {}
          pQ(QQ, "unauthorized-domain")
        }

        function Tq(QQ) {
          const FQ = sQ(),
            {
              protocol: wQ,
              hostname: LQ
            } = new URL(FQ);
          if (QQ.startsWith("chrome-extension://")) {
            const qQ = new URL(QQ);
            return "" === qQ.hostname && "" === LQ ? "chrome-extension:" === wQ && QQ.replace("chrome-extension://", "") === FQ.replace("chrome-extension://", "") : "chrome-extension:" === wQ && qQ.hostname === LQ
          }
          if (!Uq.test(wQ)) return !1;
          if (Iq.test(QQ)) return LQ === QQ;
          const qQ = QQ.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + qQ + "|" + qQ + ")$", "i").test(LQ)
        }
        const Kq = new UQ(3e4, 6e4);

        function zq() {
          const QQ = RL().___jsl;
          if (null === QQ || void 0 === QQ ? void 0 : QQ.H)
            for (const FQ of Object.keys(QQ.H))
              if (QQ.H[FQ].r = QQ.H[FQ].r || [], QQ.H[FQ].L = QQ.H[FQ].L || [], QQ.H[FQ].r = [...QQ.H[FQ].L], QQ.CP)
                for (let wQ = 0; wQ < QQ.CP.length; wQ++) QQ.CP[wQ] = null
        }
        let lq = null;

        function jq(QQ) {
          return lq = lq || function(QQ) {
            return new Promise(((FQ, wQ) => {
              var LQ, qQ, oQ;

              function DQ() {
                zq(), gapi.load("gapi.iframes", {
                  callback: () => {
                    FQ(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    zq(), wQ(cQ(QQ, "network-request-failed"))
                  },
                  timeout: Kq.get()
                })
              }
              if (null === (qQ = null === (LQ = RL().gapi) || void 0 === LQ ? void 0 : LQ.iframes) || void 0 === qQ ? void 0 : qQ.Iframe) FQ(gapi.iframes.getContext());
              else {
                if (!(null === (oQ = RL().gapi) || void 0 === oQ ? void 0 : oQ.load)) {
                  const FQ = RF("iframefcb");
                  return RL()[FQ] = () => {
                    gapi.load ? DQ() : wQ(cQ(QQ, "network-request-failed"))
                  }, WF(`https://apis.google.com/js/api.js?onload=${FQ}`).catch((QQ => wQ(QQ)))
                }
                DQ()
              }
            })).catch((QQ => {
              throw lq = null, QQ
            }))
          }(QQ), lq
        }
        const aq = new UQ(5e3, 15e3),
          Xq = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          fq = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Vq(QQ) {
          const FQ = QQ.config;
          WQ(FQ.authDomain, QQ, "auth-domain-config-required");
          const wQ = FQ.emulator ? NQ(FQ, "emulator/auth/iframe") : `https://${QQ.config.authDomain}/__/auth/iframe`,
            oQ = {
              apiKey: FQ.apiKey,
              appName: QQ.name,
              v: qQ.g
            },
            DQ = fq.get(QQ.config.apiHost);
          DQ && (oQ.eid = DQ);
          const kQ = QQ._getFrameworks();
          return kQ.length && (oQ.fw = kQ.join(",")), `${wQ}?${(0,LQ.kb)(oQ).slice(1)}`
        }
        const hq = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Jq {
          constructor(QQ) {
            this.window = QQ, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (QQ) {}
          }
        }

        function Eq(QQ, FQ, wQ) {
          let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const DQ = Math.max((window.screen.availHeight - oQ) / 2, 0).toString(),
            kQ = Math.max((window.screen.availWidth - qQ) / 2, 0).toString();
          let vQ = "";
          const mQ = Object.assign(Object.assign({}, hq), {
              width: qQ.toString(),
              height: oQ.toString(),
              top: DQ,
              left: kQ
            }),
            uQ = (0, LQ.Q)().toLowerCase();
          wQ && (vQ = YF(uQ) ? "_blank" : wQ), HF(uQ) && (FQ = FQ || "http://localhost", mQ.scrollbars = "yes");
          const HQ = Object.entries(mQ).reduce(((QQ, FQ) => {
            let [wQ, LQ] = FQ;
            return `${QQ}${wQ}=${LQ},`
          }), "");
          if (function() {
              var QQ;
              return MF(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.Q)()) && !!(null === (QQ = window.navigator) || void 0 === QQ ? void 0 : QQ.standalone)
            }(uQ) && "_self" !== vQ) return function(QQ, FQ) {
            const wQ = document.createElement("a");
            wQ.href = QQ, wQ.target = FQ;
            const LQ = document.createEvent("MouseEvent");
            LQ.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), wQ.dispatchEvent(LQ)
          }(FQ || "", vQ), new Jq(null);
          const bQ = window.open(FQ || "", vQ, HQ);
          WQ(bQ, QQ, "popup-blocked");
          try {
            bQ.focus()
          } catch (YQ) {}
          return new Jq(bQ)
        }
        const nq = "__/auth/handler",
          gq = "emulator/auth/handler",
          Pq = encodeURIComponent("fac");
        async function Zq(QQ, FQ, wQ, oQ, DQ, kQ) {
            WQ(QQ.config.authDomain, QQ, "auth-domain-config-required"), WQ(QQ.config.apiKey, QQ, "invalid-api-key");
            const vQ = {
              apiKey: QQ.config.apiKey,
              appName: QQ.name,
              authType: wQ,
              redirectUrl: oQ,
              v: qQ.g,
              eventId: DQ
            };
            if (FQ instanceof Qw) {
              FQ.setDefaultLanguage(QQ.languageCode), vQ.providerId = FQ.providerId || "", (0, LQ.W)(FQ.getCustomParameters()) || (vQ.customParameters = JSON.stringify(FQ.getCustomParameters()));
              for (const [QQ, FQ] of Object.entries(kQ || {})) vQ[QQ] = FQ
            }
            if (FQ instanceof Fw) {
              const QQ = FQ.getScopes().filter((QQ => "" !== QQ));
              QQ.length > 0 && (vQ.scopes = QQ.join(","))
            }
            QQ.tenantId && (vQ.tid = QQ.tenantId);
            const mQ = vQ;
            for (const LQ of Object.keys(mQ)) void 0 === mQ[LQ] && delete mQ[LQ];
            const uQ = await QQ._getAppCheckToken(),
              HQ = uQ ? `#${Pq}=${encodeURIComponent(uQ)}` : "";
            return `${function(QQ){let{config:FQ}=QQ;if(!FQ.emulator)return`
            https: //${FQ.authDomain}/${nq}`;return NQ(FQ,gq)}(QQ)}?${(0,LQ.kb)(mQ).slice(1)}${HQ}`}const yq="webStorageSupport";const Bq=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CL,this._completeRedirectFn=Wq,this._overrideRedirectResult=Mq}async _openPopup(QQ,FQ,wQ,LQ){var qQ;OQ(null===(qQ=this.eventManagers[QQ._key()])||void 0===qQ?void 0:qQ.manager,"_initialize() not called before _openPopup()");return Eq(QQ,await Zq(QQ,FQ,wQ,sQ(),LQ),iL())}async _openRedirect(QQ,FQ,wQ,LQ){await this._originValidation(QQ);return function(QQ){RL().location.href=QQ}(await Zq(QQ,FQ,wQ,sQ(),LQ)),new Promise((()=>{}))}_initialize(QQ){const FQ=QQ._key();if(this.eventManagers[FQ]){const{manager:QQ,promise:wQ}=this.eventManagers[FQ];return QQ?Promise.resolve(QQ):(OQ(wQ,"If manager is not set, promise should be"),wQ)}const wQ=this.initAndGetManager(QQ);return this.eventManagers[FQ]={promise:wQ},wQ.catch((()=>{delete this.eventManagers[FQ]})),wQ}async initAndGetManager(QQ){const FQ=await async function(QQ){const FQ=await jq(QQ),wQ=RL().gapi;return WQ(wQ,QQ,"internal-error"),FQ.open({where:document.body,url:Vq(QQ),messageHandlersFilter:wQ.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xq,dontclear:!0},(FQ=>new Promise((async(wQ,LQ)=>{await FQ.restyle({setHideOnLeave:!1});const qQ=cQ(QQ,"network-request-failed"),oQ=RL().setTimeout((()=>{LQ(qQ)}),aq.get());function DQ(){RL().clearTimeout(oQ),wQ(FQ)}FQ.ping(DQ).then(DQ,(()=>{LQ(qQ)}))}))))}(QQ),wQ=new Oq(QQ);return FQ.register("authEvent",(FQ=>{WQ(null===FQ||void 0===FQ?void 0:FQ.authEvent,QQ,"invalid-auth-event");return{status:wQ.onEvent(FQ.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[QQ._key()]={manager:wQ},this.iframes[QQ._key()]=FQ,wQ}_isIframeWebStorageSupported(QQ,FQ){this.iframes[QQ._key()].send(yq,{type:yq},(wQ=>{var LQ;const qQ=null===(LQ=null===wQ||void 0===wQ?void 0:wQ[0])||void 0===LQ?void 0:LQ[yq];void 0!==qQ&&FQ(!!qQ),pQ(QQ,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(QQ){const FQ=QQ._key();return this.originValidationPromises[FQ]||(this.originValidationPromises[FQ]=Nq(QQ)),this.originValidationPromises[FQ]}get _shouldInitProactively(){return GF()||bF()||MF()}};class dq{constructor(QQ){this.factorId=QQ}_process(QQ,FQ,wQ){switch(FQ.type){case"enroll":return this._finalizeEnroll(QQ,FQ.credential,wQ);case"signin":return this._finalizeSignIn(QQ,FQ.credential);default:return RQ("unexpected MultiFactorSessionType")}}}class Qo extends dq{constructor(QQ){super("phone"),this.credential=QQ}static _fromCredential(QQ){return new Qo(QQ)}_finalizeEnroll(QQ,FQ,wQ){return function(QQ,FQ){return jQ(QQ,"POST","/v2/accounts/mfaEnrollment:finalize",lQ(QQ,FQ))}(QQ,{idToken:FQ,displayName:wQ,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(QQ,FQ){return function(QQ,FQ){return jQ(QQ,"POST","/v2/accounts/mfaSignIn:finalize",lQ(QQ,FQ))}(QQ,{mfaPendingCredential:FQ,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Fo{constructor(){}static assertion(QQ){return Qo._fromCredential(QQ)}}Fo.FACTOR_ID="phone";class wo{static assertionForEnrollment(QQ,FQ){return Lo._fromSecret(QQ,FQ)}static assertionForSignIn(QQ,FQ){return Lo._fromEnrollmentId(QQ,FQ)}static async generateSecret(QQ){const FQ=QQ;WQ("undefined"!==typeof FQ.auth,"internal-error");const wQ=await(LQ=FQ.auth,qQ={idToken:FQ.credential,totpEnrollmentInfo:{}},jQ(LQ,"POST","/v2/accounts/mfaEnrollment:start",lQ(LQ,qQ)));var LQ,qQ;return qo._fromStartTotpMfaEnrollmentResponse(wQ,FQ.auth)}}wo.FACTOR_ID="totp";class Lo extends dq{constructor(QQ,FQ,wQ){super("totp"),this.otp=QQ,this.enrollmentId=FQ,this.secret=wQ}static _fromSecret(QQ,FQ){return new Lo(FQ,void 0,QQ)}static _fromEnrollmentId(QQ,FQ){return new Lo(FQ,QQ)}async _finalizeEnroll(QQ,FQ,wQ){return WQ("undefined"!==typeof this.secret,QQ,"argument-error"),function(QQ,FQ){return jQ(QQ,"POST","/v2/accounts/mfaEnrollment:finalize",lQ(QQ,FQ))}(QQ,{idToken:FQ,displayName:wQ,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(QQ,FQ){WQ(void 0!==this.enrollmentId&&void 0!==this.otp,QQ,"argument-error");const wQ={verificationCode:this.otp};return function(QQ,FQ){return jQ(QQ,"POST","/v2/accounts/mfaSignIn:finalize",lQ(QQ,FQ))}(QQ,{mfaPendingCredential:FQ,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:wQ})}}class qo{constructor(QQ,FQ,wQ,LQ,qQ,oQ,DQ){this.sessionInfo=oQ,this.auth=DQ,this.secretKey=QQ,this.hashingAlgorithm=FQ,this.codeLength=wQ,this.codeIntervalSeconds=LQ,this.enrollmentCompletionDeadline=qQ}static _fromStartTotpMfaEnrollmentResponse(QQ,FQ){return new qo(QQ.totpSessionInfo.sharedSecretKey,QQ.totpSessionInfo.hashingAlgorithm,QQ.totpSessionInfo.verificationCodeLength,QQ.totpSessionInfo.periodSec,new Date(QQ.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),QQ.totpSessionInfo.sessionInfo,FQ)}_makeTotpVerificationInfo(QQ){return{sessionInfo:this.sessionInfo,verificationCode:QQ}}generateQrCodeUrl(QQ,FQ){var wQ;let LQ=!1;return(oo(QQ)||oo(FQ))&&(LQ=!0),LQ&&(oo(QQ)&&(QQ=(null===(wQ=this.auth.currentUser)||void 0===wQ?void 0:wQ.email)||"unknownuser"),oo(FQ)&&(FQ=this.auth.name)),`otpauth://totp/${FQ}:${QQ}?secret=${this.secretKey}&issuer=${FQ}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function oo(QQ){return"undefined"===typeof QQ||0===(null===QQ||void 0===QQ?void 0:QQ.length)}var Do="@firebase/auth",ko="0.23.2";class vo{constructor(QQ){this.auth=QQ,this.internalListeners=new Map}getUid(){var QQ;return this.assertAuthConfigured(),(null===(QQ=this.auth.currentUser)||void 0===QQ?void 0:QQ.uid)||null}async getToken(QQ){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(QQ)}}addAuthTokenListener(QQ){if(this.assertAuthConfigured(),this.internalListeners.has(QQ))return;const FQ=this.auth.onIdTokenChanged((FQ=>{QQ((null===FQ||void 0===FQ?void 0:FQ.stsTokenManager.accessToken)||null)}));this.internalListeners.set(QQ,FQ),this.updateProactiveRefresh()}removeAuthTokenListener(QQ){this.assertAuthConfigured();const FQ=this.internalListeners.get(QQ);FQ&&(this.internalListeners.delete(QQ),FQ(),this.updateProactiveRefresh())}assertAuthConfigured(){WQ(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const mo=(0,LQ.M)("authIdTokenMaxAge")||300;let uo=null;const Ho=QQ=>async FQ=>{const wQ=FQ&&await FQ.getIdTokenResult(),LQ=wQ&&((new Date).getTime()-Date.parse(wQ.issuedAtTime))/1e3;if(LQ&&LQ>mo)return;const qQ=null===wQ||void 0===wQ?void 0:wQ.token;uo!==qQ&&(uo=qQ,await fetch(QQ,{method:qQ?"POST":"DELETE",headers:qQ?{Authorization:`Bearer ${qQ}`}:{}}))};function bo(){let QQ=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,qQ.J)();const FQ=(0,qQ.t)(QQ,"auth");if(FQ.isInitialized())return FQ.getImmediate();const wQ=TF(QQ,{popupRedirectResolver:Bq,persistence:[jL,pL,CL]}),oQ=(0,LQ.M)("authTokenSyncURL");if(oQ){const QQ=Ho(oQ);oL(wQ,QQ,(()=>QQ(wQ.currentUser))),qL(wQ,(FQ=>QQ(FQ)))}const DQ=(0,LQ.K)("auth");return DQ&&KF(wQ,`http://${DQ}`),wQ}var Yo;Yo="Browser",(0,qQ.x)(new kQ.e("auth",((QQ,FQ)=>{let{options:wQ}=FQ;const LQ=QQ.getProvider("app").getImmediate(),qQ=QQ.getProvider("heartbeat"),oQ=QQ.getProvider("app-check-internal"),{apiKey:DQ,authDomain:kQ}=LQ.options;WQ(DQ&&!DQ.includes(":"),"invalid-api-key",{appName:LQ.name});const vQ={apiKey:DQ,authDomain:kQ,clientPlatform:Yo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pF(Yo)},mQ=new IF(LQ,qQ,oQ,vQ);return function(QQ,FQ){const wQ=(null===FQ||void 0===FQ?void 0:FQ.persistence)||[],LQ=(Array.isArray(wQ)?wQ:[wQ]).map(oF);(null===FQ||void 0===FQ?void 0:FQ.errorMap)&&QQ._updateErrorMap(FQ.errorMap),QQ._initializeWithPersistence(LQ,null===FQ||void 0===FQ?void 0:FQ.popupRedirectResolver)}(mQ,wQ),mQ}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((QQ,FQ,wQ)=>{QQ.getProvider("auth-internal").initialize()}))),(0,qQ.x)(new kQ.e("auth-internal",(QQ=>(QQ=>new vo(QQ))(UF(QQ.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,qQ.R)(Do,ko,function(QQ){switch(QQ){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Yo)),(0,qQ.R)(Do,ko,"esm2017")}};Object.freeze(modules);for(const QQ in modules)Object.freeze(modules[QQ]);