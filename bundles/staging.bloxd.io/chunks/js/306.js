/*! For license information please see yteou.306.060d95a0.chunk.js.LICENSE.txt */
export const id = 306;
export const ids = [306];
export const modules = {
    42479: (dd, Od, md) => {
        md.r(Od), md.d(Od, {
          ActionCodeOperation: () => od,
          ActionCodeURL: () => MO,
          AuthCredential: () => PO,
          AuthErrorCodes: () => bd,
          EmailAuthCredential: () => lO,
          EmailAuthProvider: () => Om,
          FacebookAuthProvider: () => Rm,
          FactorId: () => hd,
          GithubAuthProvider: () => Km,
          GoogleAuthProvider: () => Xm,
          OAuthCredential: () => ZO,
          OAuthProvider: () => Fm,
          OperationType: () => td,
          PhoneAuthCredential: () => fO,
          PhoneAuthProvider: () => FF,
          PhoneMultiFactorGenerator: () => WR,
          ProviderId: () => vd,
          RecaptchaVerifier: () => kW,
          SAMLAuthProvider: () => Qm,
          SignInMethod: () => Qd,
          TotpMultiFactorGenerator: () => FR,
          TotpSecret: () => XR,
          TwitterAuthProvider: () => tm,
          applyActionCode: () => Am,
          beforeAuthStateChanged: () => KW,
          browserLocalPersistence: () => wW,
          browserPopupRedirectResolver: () => dR,
          browserSessionPersistence: () => EW,
          checkActionCode: () => rm,
          confirmPasswordReset: () => im,
          connectAuthEmulator: () => GO,
          createUserWithEmailAndPassword: () => nm,
          debugErrorMap: () => qd,
          deleteUser: () => oW,
          fetchSignInMethodsForEmail: () => jm,
          getAdditionalUserInfo: () => WW,
          getAuth: () => qR,
          getIdToken: () => ld,
          getIdTokenResult: () => Cd,
          getMultiFactorResolver: () => HW,
          getRedirectResult: () => UF,
          inMemoryPersistence: () => vO,
          indexedDBLocalPersistence: () => PW,
          initializeAuth: () => rO,
          initializeRecaptchaConfig: () => RW,
          isSignInWithEmailLink: () => zm,
          linkWithCredential: () => Jm,
          linkWithPhoneNumber: () => dF,
          linkWithPopup: () => qF,
          linkWithRedirect: () => JF,
          multiFactor: () => TW,
          onAuthStateChanged: () => hW,
          onIdTokenChanged: () => XW,
          parseActionCodeURL: () => dm,
          prodErrorMap: () => Hd,
          reauthenticateWithCredential: () => Um,
          reauthenticateWithPhoneNumber: () => OF,
          reauthenticateWithPopup: () => NF,
          reauthenticateWithRedirect: () => EF,
          reload: () => mO,
          sendEmailVerification: () => Dm,
          sendPasswordResetEmail: () => Vm,
          sendSignInLinkToEmail: () => Pm,
          setPersistence: () => FW,
          signInAnonymously: () => Hm,
          signInWithCredential: () => Em,
          signInWithCustomToken: () => xm,
          signInWithEmailAndPassword: () => Lm,
          signInWithEmailLink: () => cm,
          signInWithPhoneNumber: () => MW,
          signInWithPopup: () => oF,
          signInWithRedirect: () => aF,
          signOut: () => tW,
          unlink: () => pm,
          updateCurrentUser: () => QW,
          updateEmail: () => lm,
          updatePassword: () => Cm,
          updatePhoneNumber: () => WF,
          updateProfile: () => Im,
          useDeviceLanguage: () => vW,
          verifyBeforeUpdateEmail: () => em,
          verifyPasswordResetCode: () => Gm
        });
        var Wd = md(42466),
          Fd = md(42458);

        function Rd(dd, Od) {
          var md = {};
          for (var Wd in dd) Object.prototype.hasOwnProperty.call(dd, Wd) && Od.indexOf(Wd) < 0 && (md[Wd] = dd[Wd]);
          if (null != dd && "function" === typeof Object.getOwnPropertySymbols) {
            var Fd = 0;
            for (Wd = Object.getOwnPropertySymbols(dd); Fd < Wd.length; Fd++) Od.indexOf(Wd[Fd]) < 0 && Object.prototype.propertyIsEnumerable.call(dd, Wd[Fd]) && (md[Wd[Fd]] = dd[Wd[Fd]])
          }
          return md
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Xd = md(42468),
          Kd = md(42464);
        const hd = {
            PHONE: "phone",
            TOTP: "totp"
          },
          vd = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Qd = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          td = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          od = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Nd() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const qd = function() {
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
          Hd = Nd,
          yd = new Wd.g("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          bd = {
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
          Td = new Xd.g("@firebase/auth");

        function pd(dd) {
          if (Td.logLevel <= Xd.d.ERROR) {
            for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
            Td.error(`Auth (${Fd.f}): ${dd}`, ...md)
          }
        }

        function Yd(dd) {
          for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
          throw Jd(dd, ...md)
        }

        function gd(dd) {
          for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
          return Jd(dd, ...md)
        }

        function wd(dd, Od, md) {
          const Fd = Object.assign(Object.assign({}, Hd()), {
            [Od]: md
          });
          return new Wd.g("auth", "Firebase", Fd).create(Od, {
            appName: dd.name
          })
        }

        function Ed(dd, Od, md) {
          if (!(Od instanceof md)) throw md.name !== Od.constructor.name && Yd(dd, "argument-error"), wd(dd, "argument-error", `Type of ${Od.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function Jd(dd) {
          for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
          if ("string" !== typeof dd) {
            const Od = md[0],
              Wd = [...md.slice(1)];
            return Wd[0] && (Wd[0].appName = dd.name), dd._errorFactory.create(Od, ...Wd)
          }
          return yd.create(dd, ...md)
        }

        function Ud(dd, Od) {
          if (!dd) {
            for (var md = arguments.length, Wd = new Array(md > 2 ? md - 2 : 0), Fd = 2; Fd < md; Fd++) Wd[Fd - 2] = arguments[Fd];
            throw Jd(Od, ...Wd)
          }
        }

        function xd(dd) {
          const Od = "INTERNAL ASSERTION FAILED: " + dd;
          throw pd(Od), new Error(Od)
        }

        function Bd(dd, Od) {
          dd || xd(Od)
        }

        function Sd() {
          var dd;
          return "undefined" !== typeof self && (null === (dd = self.location) || void 0 === dd ? void 0 : dd.href) || ""
        }

        function sd() {
          return "http:" === ud() || "https:" === ud()
        }

        function ud() {
          var dd;
          return "undefined" !== typeof self && (null === (dd = self.location) || void 0 === dd ? void 0 : dd.protocol) || null
        }
        class Vd {
          constructor(dd, Od) {
            this.shortDelay = dd, this.longDelay = Od, Bd(Od > dd, "Short delay should be less than long delay!"), this.isMobile = (0, Wd.db)() || (0, Wd.hb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (sd() || (0, Wd.V)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function Ad(dd, Od) {
          Bd(dd.emulator, "Emulator should always be set here");
          const {
            url: md
          } = dd.emulator;
          return Od ? `${md}${Od.startsWith("/")?Od.slice(1):Od}` : md
        }
        class rd {
          static initialize(dd, Od, md) {
            this.fetchImpl = dd, Od && (this.headersImpl = Od), md && (this.responseImpl = md)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void xd("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void xd("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void xd("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Gd = {
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
          nd = new Vd(3e4, 6e4);

        function Ld(dd, Od) {
          return dd.tenantId && !Od.tenantId ? Object.assign(Object.assign({}, Od), {
            tenantId: dd.tenantId
          }) : Od
        }
        async function Pd(dd, Od, md, Fd) {
          return zd(dd, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Rd = {},
              Xd = {};
            Fd && ("GET" === Od ? Xd = Fd : Rd = {
              body: JSON.stringify(Fd)
            });
            const Kd = (0, Wd.nb)(Object.assign({
                key: dd.config.apiKey
              }, Xd)).slice(1),
              hd = await dd._getAdditionalHeaders();
            return hd["Content-Type"] = "application/json", dd.languageCode && (hd["X-Firebase-Locale"] = dd.languageCode), rd.fetch()(jd(dd, dd.config.apiHost, md, Kd), Object.assign({
              method: Od,
              headers: hd,
              referrerPolicy: "no-referrer"
            }, Rd))
          }))
        }
        async function zd(dd, Od, md) {
          dd._canInitEmulator = !1;
          const Fd = Object.assign(Object.assign({}, Gd), Od);
          try {
            const Od = new Dd(dd),
              Wd = await Promise.race([md(), Od.promise]);
            Od.clearNetworkTimeout();
            const Rd = await Wd.json();
            if ("needConfirmation" in Rd) throw ed(dd, "account-exists-with-different-credential", Rd);
            if (Wd.ok && !("errorMessage" in Rd)) return Rd;
            {
              const Od = Wd.ok ? Rd.errorMessage : Rd.error.message,
                [md, Xd] = Od.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === md) throw ed(dd, "credential-already-in-use", Rd);
              if ("EMAIL_EXISTS" === md) throw ed(dd, "email-already-in-use", Rd);
              if ("USER_DISABLED" === md) throw ed(dd, "user-disabled", Rd);
              const Kd = Fd[md] || md.toLowerCase().replace(/[_\s]+/g, "-");
              if (Xd) throw wd(dd, Kd, Xd);
              Yd(dd, Kd)
            }
          } catch (Rd) {
            if (Rd instanceof Wd.k) throw Rd;
            Yd(dd, "network-request-failed", {
              message: String(Rd)
            })
          }
        }
        async function cd(dd, Od, md, Wd) {
          let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Rd = await Pd(dd, Od, md, Wd, Fd);
          return "mfaPendingCredential" in Rd && Yd(dd, "multi-factor-auth-required", {
            _serverResponse: Rd
          }), Rd
        }

        function jd(dd, Od, md, Wd) {
          const Fd = `${Od}${md}?${Wd}`;
          return dd.config.emulator ? Ad(dd.config, Fd) : `${dd.config.apiScheme}://${Fd}`
        }
        class Dd {
          constructor(dd) {
            this.auth = dd, this.timer = null, this.promise = new Promise(((dd, Od) => {
              this.timer = setTimeout((() => Od(gd(this.auth, "network-request-failed"))), nd.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function ed(dd, Od, md) {
          const Wd = {
            appName: dd.name
          };
          md.email && (Wd.email = md.email), md.phoneNumber && (Wd.phoneNumber = md.phoneNumber);
          const Fd = gd(dd, Od, Wd);
          return Fd.customData._tokenResponse = md, Fd
        }

        function Id(dd) {
          if (dd) try {
            const Od = new Date(Number(dd));
            if (!isNaN(Od.getTime())) return Od.toUTCString()
          } catch (Od) {}
        }

        function ld(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Wd.O)(dd).getIdToken(Od)
        }
        async function Cd(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const md = (0, Wd.O)(dd),
            Fd = await md.getIdToken(Od),
            Rd = kd(Fd);
          Ud(Rd && Rd.exp && Rd.auth_time && Rd.iat, md.auth, "internal-error");
          const Xd = "object" === typeof Rd.firebase ? Rd.firebase : void 0,
            Kd = null === Xd || void 0 === Xd ? void 0 : Xd.sign_in_provider;
          return {
            claims: Rd,
            token: Fd,
            authTime: Id(Zd(Rd.auth_time)),
            issuedAtTime: Id(Zd(Rd.iat)),
            expirationTime: Id(Zd(Rd.exp)),
            signInProvider: Kd || null,
            signInSecondFactor: (null === Xd || void 0 === Xd ? void 0 : Xd.sign_in_second_factor) || null
          }
        }

        function Zd(dd) {
          return 1e3 * Number(dd)
        }

        function kd(dd) {
          const [Od, md, Fd] = dd.split(".");
          if (void 0 === Od || void 0 === md || void 0 === Fd) return pd("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const dd = (0, Wd.q)(md);
            return dd ? JSON.parse(dd) : (pd("Failed to decode base64 JWT payload"), null)
          } catch (Rd) {
            return pd("Caught error parsing JWT payload as JSON", null === Rd || void 0 === Rd ? void 0 : Rd.toString()), null
          }
        }
        async function fd(dd, Od) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Od;
          try {
            return await Od
          } catch (md) {
            throw md instanceof Wd.k && function(dd) {
              let {
                code: Od
              } = dd;
              return "auth/user-disabled" === Od || "auth/user-token-expired" === Od
            }(md) && dd.auth.currentUser === dd && await dd.auth.signOut(), md
          }
        }
        class Md {
          constructor(dd) {
            this.user = dd, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(dd) {
            var Od;
            if (dd) {
              const dd = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), dd
            } {
              this.errorBackoff = 3e4;
              const dd = (null !== (Od = this.user.stsTokenManager.expirationTime) && void 0 !== Od ? Od : 0) - Date.now() - 3e5;
              return Math.max(0, dd)
            }
          }
          schedule() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const Od = this.getInterval(dd);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), Od)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (dd) {
              return void("auth/network-request-failed" === (null === dd || void 0 === dd ? void 0 : dd.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class dO {
          constructor(dd, Od) {
            this.createdAt = dd, this.lastLoginAt = Od, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Id(this.lastLoginAt), this.creationTime = Id(this.createdAt)
          }
          _copy(dd) {
            this.createdAt = dd.createdAt, this.lastLoginAt = dd.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function OO(dd) {
          var Od;
          const md = dd.auth,
            Wd = await dd.getIdToken(),
            Fd = await fd(dd, async function(dd, Od) {
              return Pd(dd, "POST", "/v1/accounts:lookup", Od)
            }(md, {
              idToken: Wd
            }));
          Ud(null === Fd || void 0 === Fd ? void 0 : Fd.users.length, md, "internal-error");
          const Xd = Fd.users[0];
          dd._notifyReloadListener(Xd);
          const Kd = (null === (Od = Xd.providerUserInfo) || void 0 === Od ? void 0 : Od.length) ? Xd.providerUserInfo.map((dd => {
            var {
              providerId: Od
            } = dd, md = Rd(dd, ["providerId"]);
            return {
              providerId: Od,
              uid: md.rawId || "",
              displayName: md.displayName || null,
              email: md.email || null,
              phoneNumber: md.phoneNumber || null,
              photoURL: md.photoUrl || null
            }
          })) : [];
          const hd = (vd = dd.providerData, Qd = Kd, [...vd.filter((dd => !Qd.some((Od => Od.providerId === dd.providerId)))), ...Qd]);
          var vd, Qd;
          const td = dd.isAnonymous,
            od = !(dd.email && Xd.passwordHash) && !(null === hd || void 0 === hd ? void 0 : hd.length),
            Nd = !!td && od,
            qd = {
              uid: Xd.localId,
              displayName: Xd.displayName || null,
              photoURL: Xd.photoUrl || null,
              email: Xd.email || null,
              emailVerified: Xd.emailVerified || !1,
              phoneNumber: Xd.phoneNumber || null,
              tenantId: Xd.tenantId || null,
              providerData: hd,
              metadata: new dO(Xd.createdAt, Xd.lastLoginAt),
              isAnonymous: Nd
            };
          Object.assign(dd, qd)
        }
        async function mO(dd) {
          const Od = (0, Wd.O)(dd);
          await OO(Od), await Od.auth._persistUserIfCurrent(Od), Od.auth._notifyListenersIfCurrent(Od)
        }
        class WO {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(dd) {
            Ud(dd.idToken, "internal-error"), Ud("undefined" !== typeof dd.idToken, "internal-error"), Ud("undefined" !== typeof dd.refreshToken, "internal-error");
            const Od = "expiresIn" in dd && "undefined" !== typeof dd.expiresIn ? Number(dd.expiresIn) : function(dd) {
              const Od = kd(dd);
              return Ud(Od, "internal-error"), Ud("undefined" !== typeof Od.exp, "internal-error"), Ud("undefined" !== typeof Od.iat, "internal-error"), Number(Od.exp) - Number(Od.iat)
            }(dd.idToken);
            this.updateTokensAndExpiration(dd.idToken, dd.refreshToken, Od)
          }
          async getToken(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Ud(!this.accessToken || this.refreshToken, dd, "user-token-expired"), Od || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(dd, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(dd, Od) {
            const {
              accessToken: md,
              refreshToken: Fd,
              expiresIn: Rd
            } = await async function(dd, Od) {
              const md = await zd(dd, {}, (async () => {
                const md = (0, Wd.nb)({
                    grant_type: "refresh_token",
                    refresh_token: Od
                  }).slice(1),
                  {
                    tokenApiHost: Fd,
                    apiKey: Rd
                  } = dd.config,
                  Xd = jd(dd, Fd, "/v1/token", `key=${Rd}`),
                  Kd = await dd._getAdditionalHeaders();
                return Kd["Content-Type"] = "application/x-www-form-urlencoded", rd.fetch()(Xd, {
                  method: "POST",
                  headers: Kd,
                  body: md
                })
              }));
              return {
                accessToken: md.access_token,
                expiresIn: md.expires_in,
                refreshToken: md.refresh_token
              }
            }(dd, Od);
            this.updateTokensAndExpiration(md, Fd, Number(Rd))
          }
          updateTokensAndExpiration(dd, Od, md) {
            this.refreshToken = Od || null, this.accessToken = dd || null, this.expirationTime = Date.now() + 1e3 * md
          }
          static fromJSON(dd, Od) {
            const {
              refreshToken: md,
              accessToken: Wd,
              expirationTime: Fd
            } = Od, Rd = new WO;
            return md && (Ud("string" === typeof md, "internal-error", {
              appName: dd
            }), Rd.refreshToken = md), Wd && (Ud("string" === typeof Wd, "internal-error", {
              appName: dd
            }), Rd.accessToken = Wd), Fd && (Ud("number" === typeof Fd, "internal-error", {
              appName: dd
            }), Rd.expirationTime = Fd), Rd
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(dd) {
            this.accessToken = dd.accessToken, this.refreshToken = dd.refreshToken, this.expirationTime = dd.expirationTime
          }
          _clone() {
            return Object.assign(new WO, this.toJSON())
          }
          _performRefresh() {
            return xd("not implemented")
          }
        }

        function FO(dd, Od) {
          Ud("string" === typeof dd || "undefined" === typeof dd, "internal-error", {
            appName: Od
          })
        }
        class RO {
          constructor(dd) {
            var {
              uid: Od,
              auth: md,
              stsTokenManager: Wd
            } = dd, Fd = Rd(dd, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Md(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Od, this.auth = md, this.stsTokenManager = Wd, this.accessToken = Wd.accessToken, this.displayName = Fd.displayName || null, this.email = Fd.email || null, this.emailVerified = Fd.emailVerified || !1, this.phoneNumber = Fd.phoneNumber || null, this.photoURL = Fd.photoURL || null, this.isAnonymous = Fd.isAnonymous || !1, this.tenantId = Fd.tenantId || null, this.providerData = Fd.providerData ? [...Fd.providerData] : [], this.metadata = new dO(Fd.createdAt || void 0, Fd.lastLoginAt || void 0)
          }
          async getIdToken(dd) {
            const Od = await fd(this, this.stsTokenManager.getToken(this.auth, dd));
            return Ud(Od, this.auth, "internal-error"), this.accessToken !== Od && (this.accessToken = Od, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Od
          }
          getIdTokenResult(dd) {
            return Cd(this, dd)
          }
          reload() {
            return mO(this)
          }
          _assign(dd) {
            this !== dd && (Ud(this.uid === dd.uid, this.auth, "internal-error"), this.displayName = dd.displayName, this.photoURL = dd.photoURL, this.email = dd.email, this.emailVerified = dd.emailVerified, this.phoneNumber = dd.phoneNumber, this.isAnonymous = dd.isAnonymous, this.tenantId = dd.tenantId, this.providerData = dd.providerData.map((dd => Object.assign({}, dd))), this.metadata._copy(dd.metadata), this.stsTokenManager._assign(dd.stsTokenManager))
          }
          _clone(dd) {
            const Od = new RO(Object.assign(Object.assign({}, this), {
              auth: dd,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return Od.metadata._copy(this.metadata), Od
          }
          _onReload(dd) {
            Ud(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = dd, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(dd) {
            this.reloadListener ? this.reloadListener(dd) : this.reloadUserInfo = dd
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              md = !1;
            dd.idToken && dd.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(dd), md = !0), Od && await OO(this), await this.auth._persistUserIfCurrent(this), md && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const dd = await this.getIdToken();
            return await fd(this, async function(dd, Od) {
              return Pd(dd, "POST", "/v1/accounts:delete", Od)
            }(this.auth, {
              idToken: dd
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
              providerData: this.providerData.map((dd => Object.assign({}, dd))),
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
          static _fromJSON(dd, Od) {
            var md, Wd, Fd, Rd, Xd, Kd, hd, vd;
            const Qd = null !== (md = Od.displayName) && void 0 !== md ? md : void 0,
              td = null !== (Wd = Od.email) && void 0 !== Wd ? Wd : void 0,
              od = null !== (Fd = Od.phoneNumber) && void 0 !== Fd ? Fd : void 0,
              Nd = null !== (Rd = Od.photoURL) && void 0 !== Rd ? Rd : void 0,
              qd = null !== (Xd = Od.tenantId) && void 0 !== Xd ? Xd : void 0,
              Hd = null !== (Kd = Od._redirectEventId) && void 0 !== Kd ? Kd : void 0,
              yd = null !== (hd = Od.createdAt) && void 0 !== hd ? hd : void 0,
              bd = null !== (vd = Od.lastLoginAt) && void 0 !== vd ? vd : void 0,
              {
                uid: Td,
                emailVerified: pd,
                isAnonymous: Yd,
                providerData: gd,
                stsTokenManager: wd
              } = Od;
            Ud(Td && wd, dd, "internal-error");
            const Ed = WO.fromJSON(this.name, wd);
            Ud("string" === typeof Td, dd, "internal-error"), FO(Qd, dd.name), FO(td, dd.name), Ud("boolean" === typeof pd, dd, "internal-error"), Ud("boolean" === typeof Yd, dd, "internal-error"), FO(od, dd.name), FO(Nd, dd.name), FO(qd, dd.name), FO(Hd, dd.name), FO(yd, dd.name), FO(bd, dd.name);
            const Jd = new RO({
              uid: Td,
              auth: dd,
              email: td,
              emailVerified: pd,
              displayName: Qd,
              isAnonymous: Yd,
              photoURL: Nd,
              phoneNumber: od,
              tenantId: qd,
              stsTokenManager: Ed,
              createdAt: yd,
              lastLoginAt: bd
            });
            return gd && Array.isArray(gd) && (Jd.providerData = gd.map((dd => Object.assign({}, dd)))), Hd && (Jd._redirectEventId = Hd), Jd
          }
          static async _fromIdTokenResponse(dd, Od) {
            let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Wd = new WO;
            Wd.updateFromServerResponse(Od);
            const Fd = new RO({
              uid: Od.localId,
              auth: dd,
              stsTokenManager: Wd,
              isAnonymous: md
            });
            return await OO(Fd), Fd
          }
        }
        const XO = new Map;

        function KO(dd) {
          Bd(dd instanceof Function, "Expected a class definition");
          let Od = XO.get(dd);
          return Od ? (Bd(Od instanceof dd, "Instance stored in cache mismatched with class"), Od) : (Od = new dd, XO.set(dd, Od), Od)
        }
        class hO {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(dd, Od) {
            this.storage[dd] = Od
          }
          async _get(dd) {
            const Od = this.storage[dd];
            return void 0 === Od ? null : Od
          }
          async _remove(dd) {
            delete this.storage[dd]
          }
          _addListener(dd, Od) {}
          _removeListener(dd, Od) {}
        }
        hO.type = "NONE";
        const vO = hO;

        function QO(dd, Od, md) {
          return `firebase:${dd}:${Od}:${md}`
        }
        class tO {
          constructor(dd, Od, md) {
            this.persistence = dd, this.auth = Od, this.userKey = md;
            const {
              config: Wd,
              name: Fd
            } = this.auth;
            this.fullUserKey = QO(this.userKey, Wd.apiKey, Fd), this.fullPersistenceKey = QO("persistence", Wd.apiKey, Fd), this.boundEventHandler = Od._onStorageEvent.bind(Od), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(dd) {
            return this.persistence._set(this.fullUserKey, dd.toJSON())
          }
          async getCurrentUser() {
            const dd = await this.persistence._get(this.fullUserKey);
            return dd ? RO._fromJSON(this.auth, dd) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(dd) {
            if (this.persistence === dd) return;
            const Od = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = dd, Od ? this.setCurrentUser(Od) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(dd, Od) {
            let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Od.length) return new tO(KO(vO), dd, md);
            const Wd = (await Promise.all(Od.map((async dd => {
              if (await dd._isAvailable()) return dd
            })))).filter((dd => dd));
            let Fd = Wd[0] || KO(vO);
            const Rd = QO(md, dd.config.apiKey, dd.name);
            let Xd = null;
            for (const vd of Od) try {
              const Od = await vd._get(Rd);
              if (Od) {
                const md = RO._fromJSON(dd, Od);
                vd !== Fd && (Xd = md), Fd = vd;
                break
              }
            } catch (hd) {}
            const Kd = Wd.filter((dd => dd._shouldAllowMigration));
            return Fd._shouldAllowMigration && Kd.length ? (Fd = Kd[0], Xd && await Fd._set(Rd, Xd.toJSON()), await Promise.all(Od.map((async dd => {
              if (dd !== Fd) try {
                await dd._remove(Rd)
              } catch (hd) {}
            }))), new tO(Fd, dd, md)) : new tO(Fd, dd, md)
          }
        }

        function oO(dd) {
          const Od = dd.toLowerCase();
          if (Od.includes("opera/") || Od.includes("opr/") || Od.includes("opios/")) return "Opera";
          if (yO(Od)) return "IEMobile";
          if (Od.includes("msie") || Od.includes("trident/")) return "IE";
          if (Od.includes("edge/")) return "Edge";
          if (NO(Od)) return "Firefox";
          if (Od.includes("silk/")) return "Silk";
          if (TO(Od)) return "Blackberry";
          if (pO(Od)) return "Webos";
          if (qO(Od)) return "Safari";
          if ((Od.includes("chrome/") || HO(Od)) && !Od.includes("edge/")) return "Chrome";
          if (bO(Od)) return "Android";
          {
            const Od = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              md = dd.match(Od);
            if (2 === (null === md || void 0 === md ? void 0 : md.length)) return md[1]
          }
          return "Other"
        }

        function NO() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)();
          return /firefox\//i.test(dd)
        }

        function qO() {
          const dd = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)()).toLowerCase();
          return dd.includes("safari/") && !dd.includes("chrome/") && !dd.includes("crios/") && !dd.includes("android")
        }

        function HO() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)();
          return /crios\//i.test(dd)
        }

        function yO() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)();
          return /iemobile/i.test(dd)
        }

        function bO() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)();
          return /android/i.test(dd)
        }

        function TO() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)();
          return /blackberry/i.test(dd)
        }

        function pO() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)();
          return /webos/i.test(dd)
        }

        function YO() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)();
          return /iphone|ipad|ipod/i.test(dd) || /macintosh/i.test(dd) && /mobile/i.test(dd)
        }

        function gO() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)();
          return YO(dd) || bO(dd) || pO(dd) || TO(dd) || /windows phone/i.test(dd) || yO(dd)
        }

        function wO(dd) {
          let Od, md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (dd) {
            case "Browser":
              Od = oO((0, Wd.R)());
              break;
            case "Worker":
              Od = `${oO((0,Wd.R)())}-${dd}`;
              break;
            default:
              Od = dd
          }
          const Rd = md.length ? md.join(",") : "FirebaseCore-web";
          return `${Od}/JsCore/${Fd.f}/${Rd}`
        }
        async function aO(dd, Od) {
          return Pd(dd, "GET", "/v2/recaptchaConfig", Ld(dd, Od))
        }

        function EO(dd) {
          return void 0 !== dd && void 0 !== dd.getResponse
        }

        function JO(dd) {
          return void 0 !== dd && void 0 !== dd.enterprise
        }
        class UO {
          constructor(dd) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === dd.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = dd.recaptchaKey.split("/")[3], this.emailPasswordEnabled = dd.recaptchaEnforcementState.some((dd => "EMAIL_PASSWORD_PROVIDER" === dd.provider && "OFF" !== dd.enforcementState))
          }
        }

        function xO(dd) {
          return new Promise(((Od, md) => {
            const Wd = document.createElement("script");
            Wd.setAttribute("src", dd), Wd.onload = Od, Wd.onerror = dd => {
                const Od = gd("internal-error");
                Od.customData = dd, md(Od)
              }, Wd.type = "text/javascript", Wd.charset = "UTF-8",
              function() {
                var dd, Od;
                return null !== (Od = null === (dd = document.getElementsByTagName("head")) || void 0 === dd ? void 0 : dd[0]) && void 0 !== Od ? Od : document
              }().appendChild(Wd)
          }))
        }

        function BO(dd) {
          return `__${dd}${Math.floor(1e6*Math.random())}`
        }
        class SO {
          constructor(dd) {
            this.type = "recaptcha-enterprise", this.auth = iO(dd)
          }
          async verify() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function md(Od, md, Wd) {
              const Fd = window.grecaptcha;
              JO(Fd) ? Fd.enterprise.ready((() => {
                Fd.enterprise.execute(Od, {
                  action: dd
                }).then((dd => {
                  md(dd)
                })).catch((() => {
                  md("NO_RECAPTCHA")
                }))
              })) : Wd(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((dd, Wd) => {
              (async function(dd) {
                if (!Od) {
                  if (null == dd.tenantId && null != dd._agentRecaptchaConfig) return dd._agentRecaptchaConfig.siteKey;
                  if (null != dd.tenantId && void 0 !== dd._tenantRecaptchaConfigs[dd.tenantId]) return dd._tenantRecaptchaConfigs[dd.tenantId].siteKey
                }
                return new Promise((async (Od, md) => {
                  aO(dd, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Wd => {
                    if (void 0 !== Wd.recaptchaKey) {
                      const md = new UO(Wd);
                      return null == dd.tenantId ? dd._agentRecaptchaConfig = md : dd._tenantRecaptchaConfigs[dd.tenantId] = md, Od(md.siteKey)
                    }
                    md(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((dd => {
                    md(dd)
                  }))
                }))
              })(this.auth).then((Fd => {
                if (!Od && JO(window.grecaptcha)) md(Fd, dd, Wd);
                else {
                  if ("undefined" === typeof window) return void Wd(new Error("RecaptchaVerifier is only supported in browser"));
                  xO("https://www.google.com/recaptcha/enterprise.js?render=" + Fd).then((() => {
                    md(Fd, dd, Wd)
                  })).catch((dd => {
                    Wd(dd)
                  }))
                }
              })).catch((dd => {
                Wd(dd)
              }))
            }))
          }
        }
        async function sO(dd, Od, md) {
          let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Fd = new SO(dd);
          let Rd;
          try {
            Rd = await Fd.verify(md)
          } catch (Kd) {
            Rd = await Fd.verify(md, !0)
          }
          const Xd = Object.assign({}, Od);
          return Wd ? Object.assign(Xd, {
            captchaResp: Rd
          }) : Object.assign(Xd, {
            captchaResponse: Rd
          }), Object.assign(Xd, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Xd, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Xd
        }
        class uO {
          constructor(dd) {
            this.auth = dd, this.queue = []
          }
          pushCallback(dd, Od) {
            const md = Od => new Promise(((md, Wd) => {
              try {
                md(dd(Od))
              } catch (Fd) {
                Wd(Fd)
              }
            }));
            md.onAbort = Od, this.queue.push(md);
            const Wd = this.queue.length - 1;
            return () => {
              this.queue[Wd] = () => Promise.resolve()
            }
          }
          async runMiddleware(dd) {
            if (this.auth.currentUser === dd) return;
            const Od = [];
            try {
              for (const md of this.queue) await md(dd), md.onAbort && Od.push(md.onAbort)
            } catch (md) {
              Od.reverse();
              for (const dd of Od) try {
                dd()
              } catch (Wd) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === md || void 0 === md ? void 0 : md.message
              })
            }
          }
        }
        class VO {
          constructor(dd, Od, md, Wd) {
            this.app = dd, this.heartbeatServiceProvider = Od, this.appCheckServiceProvider = md, this.config = Wd, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new AO(this), this.idTokenSubscription = new AO(this), this.beforeStateQueue = new uO(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = yd, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = dd.name, this.clientVersion = Wd.sdkClientVersion
          }
          _initializeWithPersistence(dd, Od) {
            return Od && (this._popupRedirectResolver = KO(Od)), this._initializationPromise = this.queue((async () => {
              var md, Wd;
              if (!this._deleted && (this.persistenceManager = await tO.create(this, dd), !this._deleted)) {
                if (null === (md = this._popupRedirectResolver) || void 0 === md ? void 0 : md._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Fd) {}
                await this.initializeCurrentUser(Od), this.lastNotifiedUid = (null === (Wd = this.currentUser) || void 0 === Wd ? void 0 : Wd.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const dd = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || dd ? this.currentUser && dd && this.currentUser.uid === dd.uid ? (this._currentUser._assign(dd), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(dd, !0) : void 0
          }
          async initializeCurrentUser(dd) {
            var Od;
            const md = await this.assertedPersistence.getCurrentUser();
            let Wd = md,
              Fd = !1;
            if (dd && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const md = null === (Od = this.redirectUser) || void 0 === Od ? void 0 : Od._redirectEventId,
                Rd = null === Wd || void 0 === Wd ? void 0 : Wd._redirectEventId,
                Xd = await this.tryRedirectSignIn(dd);
              md && md !== Rd || !(null === Xd || void 0 === Xd ? void 0 : Xd.user) || (Wd = Xd.user, Fd = !0)
            }
            if (!Wd) return this.directlySetCurrentUser(null);
            if (!Wd._redirectEventId) {
              if (Fd) try {
                await this.beforeStateQueue.runMiddleware(Wd)
              } catch (Rd) {
                Wd = md, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Rd)))
              }
              return Wd ? this.reloadAndSetCurrentUserOrClear(Wd) : this.directlySetCurrentUser(null)
            }
            return Ud(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Wd._redirectEventId ? this.directlySetCurrentUser(Wd) : this.reloadAndSetCurrentUserOrClear(Wd)
          }
          async tryRedirectSignIn(dd) {
            let Od = null;
            try {
              Od = await this._popupRedirectResolver._completeRedirectFn(this, dd, !0)
            } catch (md) {
              await this._setRedirectUser(null)
            }
            return Od
          }
          async reloadAndSetCurrentUserOrClear(dd) {
            try {
              await OO(dd)
            } catch (Od) {
              if ("auth/network-request-failed" !== (null === Od || void 0 === Od ? void 0 : Od.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(dd)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const dd = navigator;
              return dd.languages && dd.languages[0] || dd.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(dd) {
            const Od = dd ? (0, Wd.O)(dd) : null;
            return Od && Ud(Od.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Od && Od._clone(this))
          }
          async _updateCurrentUser(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return dd && Ud(this.tenantId === dd.tenantId, this, "tenant-id-mismatch"), Od || await this.beforeStateQueue.runMiddleware(dd), this.queue((async () => {
              await this.directlySetCurrentUser(dd), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(dd) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(KO(dd))
            }))
          }
          async initializeRecaptchaConfig() {
            const dd = await aO(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Od = new UO(dd);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Od : this._tenantRecaptchaConfigs[this.tenantId] = Od, Od.emailPasswordEnabled) {
              new SO(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(dd) {
            this._errorFactory = new Wd.g("auth", "Firebase", dd())
          }
          onAuthStateChanged(dd, Od, md) {
            return this.registerStateListener(this.authStateSubscription, dd, Od, md)
          }
          beforeAuthStateChanged(dd, Od) {
            return this.beforeStateQueue.pushCallback(dd, Od)
          }
          onIdTokenChanged(dd, Od, md) {
            return this.registerStateListener(this.idTokenSubscription, dd, Od, md)
          }
          toJSON() {
            var dd;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (dd = this._currentUser) || void 0 === dd ? void 0 : dd.toJSON()
            }
          }
          async _setRedirectUser(dd, Od) {
            const md = await this.getOrInitRedirectPersistenceManager(Od);
            return null === dd ? md.removeCurrentUser() : md.setCurrentUser(dd)
          }
          async getOrInitRedirectPersistenceManager(dd) {
            if (!this.redirectPersistenceManager) {
              const Od = dd && KO(dd) || this._popupRedirectResolver;
              Ud(Od, this, "argument-error"), this.redirectPersistenceManager = await tO.create(this, [KO(Od._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(dd) {
            var Od, md;
            return this._isInitialized && await this.queue((async () => {})), (null === (Od = this._currentUser) || void 0 === Od ? void 0 : Od._redirectEventId) === dd ? this._currentUser : (null === (md = this.redirectUser) || void 0 === md ? void 0 : md._redirectEventId) === dd ? this.redirectUser : null
          }
          async _persistUserIfCurrent(dd) {
            if (dd === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(dd)))
          }
          _notifyListenersIfCurrent(dd) {
            dd === this.currentUser && this.notifyAuthListeners()
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
            var dd, Od;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const md = null !== (Od = null === (dd = this.currentUser) || void 0 === dd ? void 0 : dd.uid) && void 0 !== Od ? Od : null;
            this.lastNotifiedUid !== md && (this.lastNotifiedUid = md, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(dd, Od, md, Wd) {
            if (this._deleted) return () => {};
            const Fd = "function" === typeof Od ? Od : Od.next.bind(Od),
              Rd = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Ud(Rd, this, "internal-error"), Rd.then((() => Fd(this.currentUser))), "function" === typeof Od ? dd.addObserver(Od, md, Wd) : dd.addObserver(Od)
          }
          async directlySetCurrentUser(dd) {
            this.currentUser && this.currentUser !== dd && this._currentUser._stopProactiveRefresh(), dd && this.isProactiveRefreshEnabled && dd._startProactiveRefresh(), this.currentUser = dd, dd ? await this.assertedPersistence.setCurrentUser(dd) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(dd) {
            return this.operations = this.operations.then(dd, dd), this.operations
          }
          get assertedPersistence() {
            return Ud(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(dd) {
            dd && !this.frameworks.includes(dd) && (this.frameworks.push(dd), this.frameworks.sort(), this.clientVersion = wO(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var dd;
            const Od = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (Od["X-Firebase-gmpid"] = this.app.options.appId);
            const md = await (null === (dd = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === dd ? void 0 : dd.getHeartbeatsHeader());
            md && (Od["X-Firebase-Client"] = md);
            const Wd = await this._getAppCheckToken();
            return Wd && (Od["X-Firebase-AppCheck"] = Wd), Od
          }
          async _getAppCheckToken() {
            var dd;
            const Od = await (null === (dd = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === dd ? void 0 : dd.getToken());
            return (null === Od || void 0 === Od ? void 0 : Od.error) && function(dd) {
              if (Td.logLevel <= Xd.d.WARN) {
                for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
                Td.warn(`Auth (${Fd.f}): ${dd}`, ...md)
              }
            }(`Error while retrieving App Check token: ${Od.error}`), null === Od || void 0 === Od ? void 0 : Od.token
          }
        }

        function iO(dd) {
          return (0, Wd.O)(dd)
        }
        class AO {
          constructor(dd) {
            this.auth = dd, this.observer = null, this.addObserver = (0, Wd.x)((dd => this.observer = dd))
          }
          get next() {
            return Ud(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function rO(dd, Od) {
          const md = (0, Fd.z)(dd, "auth");
          if (md.isInitialized()) {
            const dd = md.getImmediate(),
              Fd = md.getOptions();
            if ((0, Wd.A)(Fd, null !== Od && void 0 !== Od ? Od : {})) return dd;
            Yd(dd, "already-initialized")
          }
          return md.initialize({
            options: Od
          })
        }

        function GO(dd, Od, md) {
          const Wd = iO(dd);
          Ud(Wd._canInitEmulator, Wd, "emulator-config-failed"), Ud(/^https?:\/\//.test(Od), Wd, "invalid-emulator-scheme");
          const Fd = !!(null === md || void 0 === md ? void 0 : md.disableWarnings),
            Rd = nO(Od),
            {
              host: Xd,
              port: Kd
            } = function(dd) {
              const Od = nO(dd),
                md = /(\/\/)?([^?#/]+)/.exec(dd.substr(Od.length));
              if (!md) return {
                host: "",
                port: null
              };
              const Wd = md[2].split("@").pop() || "",
                Fd = /^(\[[^\]]+\])(:|$)/.exec(Wd);
              if (Fd) {
                const dd = Fd[1];
                return {
                  host: dd,
                  port: LO(Wd.substr(dd.length + 1))
                }
              } {
                const [dd, Od] = Wd.split(":");
                return {
                  host: dd,
                  port: LO(Od)
                }
              }
            }(Od),
            hd = null === Kd ? "" : `:${Kd}`;
          Wd.config.emulator = {
            url: `${Rd}//${Xd}${hd}/`
          }, Wd.settings.appVerificationDisabledForTesting = !0, Wd.emulatorConfig = Object.freeze({
            host: Xd,
            port: Kd,
            protocol: Rd.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Fd
            })
          }), Fd || function() {
            function dd() {
              const dd = document.createElement("p"),
                Od = dd.style;
              dd.innerText = "Running in emulator mode. Do not use with production credentials.", Od.position = "fixed", Od.width = "100%", Od.backgroundColor = "#ffffff", Od.border = ".1em solid #000000", Od.color = "#b50000", Od.bottom = "0px", Od.left = "0px", Od.margin = "0px", Od.zIndex = "10000", Od.textAlign = "center", dd.classList.add("firebase-emulator-warning"), document.body.appendChild(dd)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", dd) : dd())
          }()
        }

        function nO(dd) {
          const Od = dd.indexOf(":");
          return Od < 0 ? "" : dd.substr(0, Od + 1)
        }

        function LO(dd) {
          if (!dd) return null;
          const Od = Number(dd);
          return isNaN(Od) ? null : Od
        }
        class PO {
          constructor(dd, Od) {
            this.providerId = dd, this.signInMethod = Od
          }
          toJSON() {
            return xd("not implemented")
          }
          _getIdTokenResponse(dd) {
            return xd("not implemented")
          }
          _linkToIdToken(dd, Od) {
            return xd("not implemented")
          }
          _getReauthenticationResolver(dd) {
            return xd("not implemented")
          }
        }
        async function zO(dd, Od) {
          return Pd(dd, "POST", "/v1/accounts:resetPassword", Ld(dd, Od))
        }
        async function cO(dd, Od) {
          return Pd(dd, "POST", "/v1/accounts:update", Od)
        }
        async function jO(dd, Od) {
          return cd(dd, "POST", "/v1/accounts:signInWithPassword", Ld(dd, Od))
        }
        async function DO(dd, Od) {
          return Pd(dd, "POST", "/v1/accounts:sendOobCode", Ld(dd, Od))
        }
        async function eO(dd, Od) {
          return DO(dd, Od)
        }
        async function IO(dd, Od) {
          return DO(dd, Od)
        }
        class lO extends PO {
          constructor(dd, Od, md) {
            let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", md), this._email = dd, this._password = Od, this._tenantId = Wd
          }
          static _fromEmailAndPassword(dd, Od) {
            return new lO(dd, Od, "password")
          }
          static _fromEmailAndCode(dd, Od) {
            return new lO(dd, Od, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(dd) {
            const Od = "string" === typeof dd ? JSON.parse(dd) : dd;
            if ((null === Od || void 0 === Od ? void 0 : Od.email) && (null === Od || void 0 === Od ? void 0 : Od.password)) {
              if ("password" === Od.signInMethod) return this._fromEmailAndPassword(Od.email, Od.password);
              if ("emailLink" === Od.signInMethod) return this._fromEmailAndCode(Od.email, Od.password, Od.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(dd) {
            var Od;
            switch (this.signInMethod) {
              case "password":
                const md = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Od = dd._getRecaptchaConfig()) || void 0 === Od ? void 0 : Od.emailPasswordEnabled) {
                  const Od = await sO(dd, md, "signInWithPassword");
                  return jO(dd, Od)
                }
                return jO(dd, md).catch((async Od => {
                  if ("auth/missing-recaptcha-token" === Od.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Od = await sO(dd, md, "signInWithPassword");
                    return jO(dd, Od)
                  }
                  return Promise.reject(Od)
                }));
              case "emailLink":
                return async function(dd, Od) {
                  return cd(dd, "POST", "/v1/accounts:signInWithEmailLink", Ld(dd, Od))
                }(dd, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Yd(dd, "internal-error")
            }
          }
          async _linkToIdToken(dd, Od) {
            switch (this.signInMethod) {
              case "password":
                return cO(dd, {
                  idToken: Od,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(dd, Od) {
                  return cd(dd, "POST", "/v1/accounts:signInWithEmailLink", Ld(dd, Od))
                }(dd, {
                  idToken: Od,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Yd(dd, "internal-error")
            }
          }
          _getReauthenticationResolver(dd) {
            return this._getIdTokenResponse(dd)
          }
        }
        async function CO(dd, Od) {
          return cd(dd, "POST", "/v1/accounts:signInWithIdp", Ld(dd, Od))
        }
        class ZO extends PO {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(dd) {
            const Od = new ZO(dd.providerId, dd.signInMethod);
            return dd.idToken || dd.accessToken ? (dd.idToken && (Od.idToken = dd.idToken), dd.accessToken && (Od.accessToken = dd.accessToken), dd.nonce && !dd.pendingToken && (Od.nonce = dd.nonce), dd.pendingToken && (Od.pendingToken = dd.pendingToken)) : dd.oauthToken && dd.oauthTokenSecret ? (Od.accessToken = dd.oauthToken, Od.secret = dd.oauthTokenSecret) : Yd("argument-error"), Od
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
          static fromJSON(dd) {
            const Od = "string" === typeof dd ? JSON.parse(dd) : dd,
              {
                providerId: md,
                signInMethod: Wd
              } = Od,
              Fd = Rd(Od, ["providerId", "signInMethod"]);
            if (!md || !Wd) return null;
            const Xd = new ZO(md, Wd);
            return Xd.idToken = Fd.idToken || void 0, Xd.accessToken = Fd.accessToken || void 0, Xd.secret = Fd.secret, Xd.nonce = Fd.nonce, Xd.pendingToken = Fd.pendingToken || null, Xd
          }
          _getIdTokenResponse(dd) {
            return CO(dd, this.buildRequest())
          }
          _linkToIdToken(dd, Od) {
            const md = this.buildRequest();
            return md.idToken = Od, CO(dd, md)
          }
          _getReauthenticationResolver(dd) {
            const Od = this.buildRequest();
            return Od.autoCreate = !1, CO(dd, Od)
          }
          buildRequest() {
            const dd = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) dd.pendingToken = this.pendingToken;
            else {
              const Od = {};
              this.idToken && (Od.id_token = this.idToken), this.accessToken && (Od.access_token = this.accessToken), this.secret && (Od.oauth_token_secret = this.secret), Od.providerId = this.providerId, this.nonce && !this.pendingToken && (Od.nonce = this.nonce), dd.postBody = (0, Wd.nb)(Od)
            }
            return dd
          }
        }
        const kO = {
          USER_NOT_FOUND: "user-not-found"
        };
        class fO extends PO {
          constructor(dd) {
            super("phone", "phone"), this.params = dd
          }
          static _fromVerification(dd, Od) {
            return new fO({
              verificationId: dd,
              verificationCode: Od
            })
          }
          static _fromTokenResponse(dd, Od) {
            return new fO({
              phoneNumber: dd,
              temporaryProof: Od
            })
          }
          _getIdTokenResponse(dd) {
            return async function(dd, Od) {
              return cd(dd, "POST", "/v1/accounts:signInWithPhoneNumber", Ld(dd, Od))
            }(dd, this._makeVerificationRequest())
          }
          _linkToIdToken(dd, Od) {
            return async function(dd, Od) {
              const md = await cd(dd, "POST", "/v1/accounts:signInWithPhoneNumber", Ld(dd, Od));
              if (md.temporaryProof) throw ed(dd, "account-exists-with-different-credential", md);
              return md
            }(dd, Object.assign({
              idToken: Od
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(dd) {
            return async function(dd, Od) {
              return cd(dd, "POST", "/v1/accounts:signInWithPhoneNumber", Ld(dd, Object.assign(Object.assign({}, Od), {
                operation: "REAUTH"
              })), kO)
            }(dd, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: dd,
              phoneNumber: Od,
              verificationId: md,
              verificationCode: Wd
            } = this.params;
            return dd && Od ? {
              temporaryProof: dd,
              phoneNumber: Od
            } : {
              sessionInfo: md,
              code: Wd
            }
          }
          toJSON() {
            const dd = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (dd.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (dd.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (dd.verificationCode = this.params.verificationCode), this.params.verificationId && (dd.verificationId = this.params.verificationId), dd
          }
          static fromJSON(dd) {
            "string" === typeof dd && (dd = JSON.parse(dd));
            const {
              verificationId: Od,
              verificationCode: md,
              phoneNumber: Wd,
              temporaryProof: Fd
            } = dd;
            return md || Od || Wd || Fd ? new fO({
              verificationId: Od,
              verificationCode: md,
              phoneNumber: Wd,
              temporaryProof: Fd
            }) : null
          }
        }
        class MO {
          constructor(dd) {
            var Od, md, Fd, Rd, Xd, Kd;
            const hd = (0, Wd.jb)((0, Wd.D)(dd)),
              vd = null !== (Od = hd.apiKey) && void 0 !== Od ? Od : null,
              Qd = null !== (md = hd.oobCode) && void 0 !== md ? md : null,
              td = function(dd) {
                switch (dd) {
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
              }(null !== (Fd = hd.mode) && void 0 !== Fd ? Fd : null);
            Ud(vd && Qd && td, "argument-error"), this.apiKey = vd, this.operation = td, this.code = Qd, this.continueUrl = null !== (Rd = hd.continueUrl) && void 0 !== Rd ? Rd : null, this.languageCode = null !== (Xd = hd.languageCode) && void 0 !== Xd ? Xd : null, this.tenantId = null !== (Kd = hd.tenantId) && void 0 !== Kd ? Kd : null
          }
          static parseLink(dd) {
            const Od = function(dd) {
              const Od = (0, Wd.jb)((0, Wd.D)(dd)).link,
                md = Od ? (0, Wd.jb)((0, Wd.D)(Od)).deep_link_id : null,
                Fd = (0, Wd.jb)((0, Wd.D)(dd)).deep_link_id;
              return (Fd ? (0, Wd.jb)((0, Wd.D)(Fd)).link : null) || Fd || md || Od || dd
            }(dd);
            try {
              return new MO(Od)
            } catch (md) {
              return null
            }
          }
        }

        function dm(dd) {
          return MO.parseLink(dd)
        }
        class Om {
          constructor() {
            this.providerId = Om.PROVIDER_ID
          }
          static credential(dd, Od) {
            return lO._fromEmailAndPassword(dd, Od)
          }
          static credentialWithLink(dd, Od) {
            const md = MO.parseLink(Od);
            return Ud(md, "argument-error"), lO._fromEmailAndCode(dd, md.code, md.tenantId)
          }
        }
        Om.PROVIDER_ID = "password", Om.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Om.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class mm {
          constructor(dd) {
            this.providerId = dd, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(dd) {
            this.defaultLanguageCode = dd
          }
          setCustomParameters(dd) {
            return this.customParameters = dd, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class Wm extends mm {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(dd) {
            return this.scopes.includes(dd) || this.scopes.push(dd), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class Fm extends Wm {
          static credentialFromJSON(dd) {
            const Od = "string" === typeof dd ? JSON.parse(dd) : dd;
            return Ud("providerId" in Od && "signInMethod" in Od, "argument-error"), ZO._fromParams(Od)
          }
          credential(dd) {
            return this._credential(Object.assign(Object.assign({}, dd), {
              nonce: dd.rawNonce
            }))
          }
          _credential(dd) {
            return Ud(dd.idToken || dd.accessToken, "argument-error"), ZO._fromParams(Object.assign(Object.assign({}, dd), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(dd) {
            return Fm.oauthCredentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return Fm.oauthCredentialFromTaggedObject(dd.customData || {})
          }
          static oauthCredentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Od
            } = dd;
            if (!Od) return null;
            const {
              oauthIdToken: md,
              oauthAccessToken: Wd,
              oauthTokenSecret: Fd,
              pendingToken: Rd,
              nonce: Xd,
              providerId: Kd
            } = Od;
            if (!Wd && !Fd && !md && !Rd) return null;
            if (!Kd) return null;
            try {
              return new Fm(Kd)._credential({
                idToken: md,
                accessToken: Wd,
                nonce: Xd,
                pendingToken: Rd
              })
            } catch (hd) {
              return null
            }
          }
        }
        class Rm extends Wm {
          constructor() {
            super("facebook.com")
          }
          static credential(dd) {
            return ZO._fromParams({
              providerId: Rm.PROVIDER_ID,
              signInMethod: Rm.FACEBOOK_SIGN_IN_METHOD,
              accessToken: dd
            })
          }
          static credentialFromResult(dd) {
            return Rm.credentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return Rm.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Od
            } = dd;
            if (!Od || !("oauthAccessToken" in Od)) return null;
            if (!Od.oauthAccessToken) return null;
            try {
              return Rm.credential(Od.oauthAccessToken)
            } catch (md) {
              return null
            }
          }
        }
        Rm.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Rm.PROVIDER_ID = "facebook.com";
        class Xm extends Wm {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(dd, Od) {
            return ZO._fromParams({
              providerId: Xm.PROVIDER_ID,
              signInMethod: Xm.GOOGLE_SIGN_IN_METHOD,
              idToken: dd,
              accessToken: Od
            })
          }
          static credentialFromResult(dd) {
            return Xm.credentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return Xm.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Od
            } = dd;
            if (!Od) return null;
            const {
              oauthIdToken: md,
              oauthAccessToken: Wd
            } = Od;
            if (!md && !Wd) return null;
            try {
              return Xm.credential(md, Wd)
            } catch (Fd) {
              return null
            }
          }
        }
        Xm.GOOGLE_SIGN_IN_METHOD = "google.com", Xm.PROVIDER_ID = "google.com";
        class Km extends Wm {
          constructor() {
            super("github.com")
          }
          static credential(dd) {
            return ZO._fromParams({
              providerId: Km.PROVIDER_ID,
              signInMethod: Km.GITHUB_SIGN_IN_METHOD,
              accessToken: dd
            })
          }
          static credentialFromResult(dd) {
            return Km.credentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return Km.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Od
            } = dd;
            if (!Od || !("oauthAccessToken" in Od)) return null;
            if (!Od.oauthAccessToken) return null;
            try {
              return Km.credential(Od.oauthAccessToken)
            } catch (md) {
              return null
            }
          }
        }
        Km.GITHUB_SIGN_IN_METHOD = "github.com", Km.PROVIDER_ID = "github.com";
        class hm extends PO {
          constructor(dd, Od) {
            super(dd, dd), this.pendingToken = Od
          }
          _getIdTokenResponse(dd) {
            return CO(dd, this.buildRequest())
          }
          _linkToIdToken(dd, Od) {
            const md = this.buildRequest();
            return md.idToken = Od, CO(dd, md)
          }
          _getReauthenticationResolver(dd) {
            const Od = this.buildRequest();
            return Od.autoCreate = !1, CO(dd, Od)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(dd) {
            const Od = "string" === typeof dd ? JSON.parse(dd) : dd,
              {
                providerId: md,
                signInMethod: Wd,
                pendingToken: Fd
              } = Od;
            return md && Wd && Fd && md === Wd ? new hm(md, Fd) : null
          }
          static _create(dd, Od) {
            return new hm(dd, Od)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Qm extends mm {
          constructor(dd) {
            Ud(dd.startsWith("saml."), "argument-error"), super(dd)
          }
          static credentialFromResult(dd) {
            return Qm.samlCredentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return Qm.samlCredentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromJSON(dd) {
            const Od = hm.fromJSON(dd);
            return Ud(Od, "argument-error"), Od
          }
          static samlCredentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Od
            } = dd;
            if (!Od) return null;
            const {
              pendingToken: md,
              providerId: Wd
            } = Od;
            if (!md || !Wd) return null;
            try {
              return hm._create(Wd, md)
            } catch (Fd) {
              return null
            }
          }
        }
        class tm extends Wm {
          constructor() {
            super("twitter.com")
          }
          static credential(dd, Od) {
            return ZO._fromParams({
              providerId: tm.PROVIDER_ID,
              signInMethod: tm.TWITTER_SIGN_IN_METHOD,
              oauthToken: dd,
              oauthTokenSecret: Od
            })
          }
          static credentialFromResult(dd) {
            return tm.credentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return tm.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Od
            } = dd;
            if (!Od) return null;
            const {
              oauthAccessToken: md,
              oauthTokenSecret: Wd
            } = Od;
            if (!md || !Wd) return null;
            try {
              return tm.credential(md, Wd)
            } catch (Fd) {
              return null
            }
          }
        }
        async function om(dd, Od) {
          return cd(dd, "POST", "/v1/accounts:signUp", Ld(dd, Od))
        }
        tm.TWITTER_SIGN_IN_METHOD = "twitter.com", tm.PROVIDER_ID = "twitter.com";
        class Nm {
          constructor(dd) {
            this.user = dd.user, this.providerId = dd.providerId, this._tokenResponse = dd._tokenResponse, this.operationType = dd.operationType
          }
          static async _fromIdTokenResponse(dd, Od, md) {
            let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Fd = await RO._fromIdTokenResponse(dd, md, Wd),
              Rd = qm(md);
            return new Nm({
              user: Fd,
              providerId: Rd,
              _tokenResponse: md,
              operationType: Od
            })
          }
          static async _forOperation(dd, Od, md) {
            await dd._updateTokensIfNecessary(md, !0);
            const Wd = qm(md);
            return new Nm({
              user: dd,
              providerId: Wd,
              _tokenResponse: md,
              operationType: Od
            })
          }
        }

        function qm(dd) {
          return dd.providerId ? dd.providerId : "phoneNumber" in dd ? "phone" : null
        }
        async function Hm(dd) {
          var Od;
          const md = iO(dd);
          if (await md._initializationPromise, null === (Od = md.currentUser) || void 0 === Od ? void 0 : Od.isAnonymous) return new Nm({
            user: md.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Wd = await om(md, {
              returnSecureToken: !0
            }),
            Fd = await Nm._fromIdTokenResponse(md, "signIn", Wd, !0);
          return await md._updateCurrentUser(Fd.user), Fd
        }
        class ym extends Wd.k {
          constructor(dd, Od, md, Wd) {
            var Fd;
            super(Od.code, Od.message), this.operationType = md, this.user = Wd, Object.setPrototypeOf(this, ym.prototype), this.customData = {
              appName: dd.name,
              tenantId: null !== (Fd = dd.tenantId) && void 0 !== Fd ? Fd : void 0,
              _serverResponse: Od.customData._serverResponse,
              operationType: md
            }
          }
          static _fromErrorAndOperation(dd, Od, md, Wd) {
            return new ym(dd, Od, md, Wd)
          }
        }

        function bm(dd, Od, md, Wd) {
          return ("reauthenticate" === Od ? md._getReauthenticationResolver(dd) : md._getIdTokenResponse(dd)).catch((md => {
            if ("auth/multi-factor-auth-required" === md.code) throw ym._fromErrorAndOperation(dd, md, Od, Wd);
            throw md
          }))
        }

        function Tm(dd) {
          return new Set(dd.map((dd => {
            let {
              providerId: Od
            } = dd;
            return Od
          })).filter((dd => !!dd)))
        }
        async function pm(dd, Od) {
          const md = (0, Wd.O)(dd);
          await gm(!0, md, Od);
          const {
            providerUserInfo: Fd
          } = await async function(dd, Od) {
            return Pd(dd, "POST", "/v1/accounts:update", Od)
          }(md.auth, {
            idToken: await md.getIdToken(),
            deleteProvider: [Od]
          }), Rd = Tm(Fd || []);
          return md.providerData = md.providerData.filter((dd => Rd.has(dd.providerId))), Rd.has("phone") || (md.phoneNumber = null), await md.auth._persistUserIfCurrent(md), md
        }
        async function Ym(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Wd = await fd(dd, Od._linkToIdToken(dd.auth, await dd.getIdToken()), md);
          return Nm._forOperation(dd, "link", Wd)
        }
        async function gm(dd, Od, md) {
          await OO(Od);
          const Wd = !1 === dd ? "provider-already-linked" : "no-such-provider";
          Ud(Tm(Od.providerData).has(md) === dd, Od.auth, Wd)
        }
        async function wm(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Wd
          } = dd, Fd = "reauthenticate";
          try {
            const Rd = await fd(dd, bm(Wd, Fd, Od, dd), md);
            Ud(Rd.idToken, Wd, "internal-error");
            const Xd = kd(Rd.idToken);
            Ud(Xd, Wd, "internal-error");
            const {
              sub: Kd
            } = Xd;
            return Ud(dd.uid === Kd, Wd, "user-mismatch"), Nm._forOperation(dd, Fd, Rd)
          } catch (Rd) {
            throw "auth/user-not-found" === (null === Rd || void 0 === Rd ? void 0 : Rd.code) && Yd(Wd, "user-mismatch"), Rd
          }
        }
        async function am(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Wd = "signIn",
            Fd = await bm(dd, Wd, Od),
            Rd = await Nm._fromIdTokenResponse(dd, Wd, Fd);
          return md || await dd._updateCurrentUser(Rd.user), Rd
        }
        async function Em(dd, Od) {
          return am(iO(dd), Od)
        }
        async function Jm(dd, Od) {
          const md = (0, Wd.O)(dd);
          return await gm(!1, md, Od.providerId), Ym(md, Od)
        }
        async function Um(dd, Od) {
          return wm((0, Wd.O)(dd), Od)
        }
        async function xm(dd, Od) {
          const md = iO(dd),
            Wd = await async function(dd, Od) {
              return cd(dd, "POST", "/v1/accounts:signInWithCustomToken", Ld(dd, Od))
            }(md, {
              token: Od,
              returnSecureToken: !0
            }), Fd = await Nm._fromIdTokenResponse(md, "signIn", Wd);
          return await md._updateCurrentUser(Fd.user), Fd
        }
        class Bm {
          constructor(dd, Od) {
            this.factorId = dd, this.uid = Od.mfaEnrollmentId, this.enrollmentTime = new Date(Od.enrolledAt).toUTCString(), this.displayName = Od.displayName
          }
          static _fromServerResponse(dd, Od) {
            return "phoneInfo" in Od ? Sm._fromServerResponse(dd, Od) : "totpInfo" in Od ? sm._fromServerResponse(dd, Od) : Yd(dd, "internal-error")
          }
        }
        class Sm extends Bm {
          constructor(dd) {
            super("phone", dd), this.phoneNumber = dd.phoneInfo
          }
          static _fromServerResponse(dd, Od) {
            return new Sm(Od)
          }
        }
        class sm extends Bm {
          constructor(dd) {
            super("totp", dd)
          }
          static _fromServerResponse(dd, Od) {
            return new sm(Od)
          }
        }

        function um(dd, Od, md) {
          var Wd;
          Ud((null === (Wd = md.url) || void 0 === Wd ? void 0 : Wd.length) > 0, dd, "invalid-continue-uri"), Ud("undefined" === typeof md.dynamicLinkDomain || md.dynamicLinkDomain.length > 0, dd, "invalid-dynamic-link-domain"), Od.continueUrl = md.url, Od.dynamicLinkDomain = md.dynamicLinkDomain, Od.canHandleCodeInApp = md.handleCodeInApp, md.iOS && (Ud(md.iOS.bundleId.length > 0, dd, "missing-ios-bundle-id"), Od.iOSBundleId = md.iOS.bundleId), md.android && (Ud(md.android.packageName.length > 0, dd, "missing-android-pkg-name"), Od.androidInstallApp = md.android.installApp, Od.androidMinimumVersionCode = md.android.minimumVersion, Od.androidPackageName = md.android.packageName)
        }
        async function Vm(dd, Od, md) {
          var Wd;
          const Fd = iO(dd),
            Rd = {
              requestType: "PASSWORD_RESET",
              email: Od,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Wd = Fd._getRecaptchaConfig()) || void 0 === Wd ? void 0 : Wd.emailPasswordEnabled) {
            const dd = await sO(Fd, Rd, "getOobCode", !0);
            md && um(Fd, dd, md), await eO(Fd, dd)
          } else md && um(Fd, Rd, md), await eO(Fd, Rd).catch((async dd => {
            if ("auth/missing-recaptcha-token" !== dd.code) return Promise.reject(dd);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const dd = await sO(Fd, Rd, "getOobCode", !0);
              md && um(Fd, dd, md), await eO(Fd, dd)
            }
          }))
        }
        async function im(dd, Od, md) {
          await zO((0, Wd.O)(dd), {
            oobCode: Od,
            newPassword: md
          })
        }
        async function Am(dd, Od) {
          await async function(dd, Od) {
            return Pd(dd, "POST", "/v1/accounts:update", Ld(dd, Od))
          }((0, Wd.O)(dd), {
            oobCode: Od
          })
        }
        async function rm(dd, Od) {
          const md = (0, Wd.O)(dd),
            Fd = await zO(md, {
              oobCode: Od
            }),
            Rd = Fd.requestType;
          switch (Ud(Rd, md, "internal-error"), Rd) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Ud(Fd.newEmail, md, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Ud(Fd.mfaInfo, md, "internal-error");
            default:
              Ud(Fd.email, md, "internal-error")
          }
          let Xd = null;
          return Fd.mfaInfo && (Xd = Bm._fromServerResponse(iO(md), Fd.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Fd.requestType ? Fd.newEmail : Fd.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Fd.requestType ? Fd.email : Fd.newEmail) || null,
              multiFactorInfo: Xd
            },
            operation: Rd
          }
        }
        async function Gm(dd, Od) {
          const {
            data: md
          } = await rm((0, Wd.O)(dd), Od);
          return md.email
        }
        async function nm(dd, Od, md) {
          var Wd;
          const Fd = iO(dd),
            Rd = {
              returnSecureToken: !0,
              email: Od,
              password: md,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Xd;
          if (null === (Wd = Fd._getRecaptchaConfig()) || void 0 === Wd ? void 0 : Wd.emailPasswordEnabled) {
            const dd = await sO(Fd, Rd, "signUpPassword");
            Xd = om(Fd, dd)
          } else Xd = om(Fd, Rd).catch((async dd => {
            if ("auth/missing-recaptcha-token" === dd.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const dd = await sO(Fd, Rd, "signUpPassword");
              return om(Fd, dd)
            }
            return Promise.reject(dd)
          }));
          const Kd = await Xd.catch((dd => Promise.reject(dd))),
            hd = await Nm._fromIdTokenResponse(Fd, "signIn", Kd);
          return await Fd._updateCurrentUser(hd.user), hd
        }

        function Lm(dd, Od, md) {
          return Em((0, Wd.O)(dd), Om.credential(Od, md))
        }
        async function Pm(dd, Od, md) {
          var Wd;
          const Fd = iO(dd),
            Rd = {
              requestType: "EMAIL_SIGNIN",
              email: Od,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Xd(dd, Od) {
            Ud(Od.handleCodeInApp, Fd, "argument-error"), Od && um(Fd, dd, Od)
          }
          if (null === (Wd = Fd._getRecaptchaConfig()) || void 0 === Wd ? void 0 : Wd.emailPasswordEnabled) {
            const dd = await sO(Fd, Rd, "getOobCode", !0);
            Xd(dd, md), await IO(Fd, dd)
          } else Xd(Rd, md), await IO(Fd, Rd).catch((async dd => {
            if ("auth/missing-recaptcha-token" !== dd.code) return Promise.reject(dd);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const dd = await sO(Fd, Rd, "getOobCode", !0);
              Xd(dd, md), await IO(Fd, dd)
            }
          }))
        }

        function zm(dd, Od) {
          const md = MO.parseLink(Od);
          return "EMAIL_SIGNIN" === (null === md || void 0 === md ? void 0 : md.operation)
        }
        async function cm(dd, Od, md) {
          const Fd = (0, Wd.O)(dd),
            Rd = Om.credentialWithLink(Od, md || Sd());
          return Ud(Rd._tenantId === (Fd.tenantId || null), Fd, "tenant-id-mismatch"), Em(Fd, Rd)
        }
        async function jm(dd, Od) {
          const md = {
              identifier: Od,
              continueUri: sd() ? Sd() : "http://localhost"
            },
            {
              signinMethods: Fd
            } = await async function(dd, Od) {
              return Pd(dd, "POST", "/v1/accounts:createAuthUri", Ld(dd, Od))
            }((0, Wd.O)(dd), md);
          return Fd || []
        }
        async function Dm(dd, Od) {
          const md = (0, Wd.O)(dd),
            Fd = {
              requestType: "VERIFY_EMAIL",
              idToken: await dd.getIdToken()
            };
          Od && um(md.auth, Fd, Od);
          const {
            email: Rd
          } = await async function(dd, Od) {
            return DO(dd, Od)
          }(md.auth, Fd);
          Rd !== dd.email && await dd.reload()
        }
        async function em(dd, Od, md) {
          const Fd = (0, Wd.O)(dd),
            Rd = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await dd.getIdToken(),
              newEmail: Od
            };
          md && um(Fd.auth, Rd, md);
          const {
            email: Xd
          } = await async function(dd, Od) {
            return DO(dd, Od)
          }(Fd.auth, Rd);
          Xd !== dd.email && await dd.reload()
        }
        async function Im(dd, Od) {
          let {
            displayName: md,
            photoURL: Fd
          } = Od;
          if (void 0 === md && void 0 === Fd) return;
          const Rd = (0, Wd.O)(dd),
            Xd = {
              idToken: await Rd.getIdToken(),
              displayName: md,
              photoUrl: Fd,
              returnSecureToken: !0
            },
            Kd = await fd(Rd, async function(dd, Od) {
              return Pd(dd, "POST", "/v1/accounts:update", Od)
            }(Rd.auth, Xd));
          Rd.displayName = Kd.displayName || null, Rd.photoURL = Kd.photoUrl || null;
          const hd = Rd.providerData.find((dd => {
            let {
              providerId: Od
            } = dd;
            return "password" === Od
          }));
          hd && (hd.displayName = Rd.displayName, hd.photoURL = Rd.photoURL), await Rd._updateTokensIfNecessary(Kd)
        }

        function lm(dd, Od) {
          return Zm((0, Wd.O)(dd), Od, null)
        }

        function Cm(dd, Od) {
          return Zm((0, Wd.O)(dd), null, Od)
        }
        async function Zm(dd, Od, md) {
          const {
            auth: Wd
          } = dd, Fd = {
            idToken: await dd.getIdToken(),
            returnSecureToken: !0
          };
          Od && (Fd.email = Od), md && (Fd.password = md);
          const Rd = await fd(dd, cO(Wd, Fd));
          await dd._updateTokensIfNecessary(Rd, !0)
        }
        class km {
          constructor(dd, Od) {
            let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = dd, this.providerId = Od, this.profile = md
          }
        }
        class fm extends km {
          constructor(dd, Od, md, Wd) {
            super(dd, Od, md), this.username = Wd
          }
        }
        class Mm extends km {
          constructor(dd, Od) {
            super(dd, "facebook.com", Od)
          }
        }
        class dW extends fm {
          constructor(dd, Od) {
            super(dd, "github.com", Od, "string" === typeof(null === Od || void 0 === Od ? void 0 : Od.login) ? null === Od || void 0 === Od ? void 0 : Od.login : null)
          }
        }
        class OW extends km {
          constructor(dd, Od) {
            super(dd, "google.com", Od)
          }
        }
        class mW extends fm {
          constructor(dd, Od, md) {
            super(dd, "twitter.com", Od, md)
          }
        }

        function WW(dd) {
          const {
            user: Od,
            _tokenResponse: md
          } = dd;
          return Od.isAnonymous && !md ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(dd) {
            var Od, md;
            if (!dd) return null;
            const {
              providerId: Wd
            } = dd, Fd = dd.rawUserInfo ? JSON.parse(dd.rawUserInfo) : {}, Rd = dd.isNewUser || "identitytoolkit#SignupNewUserResponse" === dd.kind;
            if (!Wd && (null === dd || void 0 === dd ? void 0 : dd.idToken)) {
              const Wd = null === (md = null === (Od = kd(dd.idToken)) || void 0 === Od ? void 0 : Od.firebase) || void 0 === md ? void 0 : md.sign_in_provider;
              if (Wd) return new km(Rd, "anonymous" !== Wd && "custom" !== Wd ? Wd : null)
            }
            if (!Wd) return null;
            switch (Wd) {
              case "facebook.com":
                return new Mm(Rd, Fd);
              case "github.com":
                return new dW(Rd, Fd);
              case "google.com":
                return new OW(Rd, Fd);
              case "twitter.com":
                return new mW(Rd, Fd, dd.screenName || null);
              case "custom":
              case "anonymous":
                return new km(Rd, null);
              default:
                return new km(Rd, Wd, Fd)
            }
          }(md)
        }

        function FW(dd, Od) {
          return (0, Wd.O)(dd).setPersistence(Od)
        }

        function RW(dd) {
          return iO(dd).initializeRecaptchaConfig()
        }

        function XW(dd, Od, md, Fd) {
          return (0, Wd.O)(dd).onIdTokenChanged(Od, md, Fd)
        }

        function KW(dd, Od, md) {
          return (0, Wd.O)(dd).beforeAuthStateChanged(Od, md)
        }

        function hW(dd, Od, md, Fd) {
          return (0, Wd.O)(dd).onAuthStateChanged(Od, md, Fd)
        }

        function vW(dd) {
          (0, Wd.O)(dd).useDeviceLanguage()
        }

        function QW(dd, Od) {
          return (0, Wd.O)(dd).updateCurrentUser(Od)
        }

        function tW(dd) {
          return (0, Wd.O)(dd).signOut()
        }
        async function oW(dd) {
          return (0, Wd.O)(dd).delete()
        }
        class NW {
          constructor(dd, Od, md) {
            this.type = dd, this.credential = Od, this.auth = md
          }
          static _fromIdtoken(dd, Od) {
            return new NW("enroll", dd, Od)
          }
          static _fromMfaPendingCredential(dd) {
            return new NW("signin", dd)
          }
          toJSON() {
            const dd = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [dd]: this.credential
              }
            }
          }
          static fromJSON(dd) {
            var Od, md;
            if (null === dd || void 0 === dd ? void 0 : dd.multiFactorSession) {
              if (null === (Od = dd.multiFactorSession) || void 0 === Od ? void 0 : Od.pendingCredential) return NW._fromMfaPendingCredential(dd.multiFactorSession.pendingCredential);
              if (null === (md = dd.multiFactorSession) || void 0 === md ? void 0 : md.idToken) return NW._fromIdtoken(dd.multiFactorSession.idToken)
            }
            return null
          }
        }
        class qW {
          constructor(dd, Od, md) {
            this.session = dd, this.hints = Od, this.signInResolver = md
          }
          static _fromError(dd, Od) {
            const md = iO(dd),
              Wd = Od.customData._serverResponse,
              Fd = (Wd.mfaInfo || []).map((dd => Bm._fromServerResponse(md, dd)));
            Ud(Wd.mfaPendingCredential, md, "internal-error");
            const Rd = NW._fromMfaPendingCredential(Wd.mfaPendingCredential);
            return new qW(Rd, Fd, (async dd => {
              const Fd = await dd._process(md, Rd);
              delete Wd.mfaInfo, delete Wd.mfaPendingCredential;
              const Xd = Object.assign(Object.assign({}, Wd), {
                idToken: Fd.idToken,
                refreshToken: Fd.refreshToken
              });
              switch (Od.operationType) {
                case "signIn":
                  const dd = await Nm._fromIdTokenResponse(md, Od.operationType, Xd);
                  return await md._updateCurrentUser(dd.user), dd;
                case "reauthenticate":
                  return Ud(Od.user, md, "internal-error"), Nm._forOperation(Od.user, Od.operationType, Xd);
                default:
                  Yd(md, "internal-error")
              }
            }))
          }
          async resolveSignIn(dd) {
            const Od = dd;
            return this.signInResolver(Od)
          }
        }

        function HW(dd, Od) {
          var md;
          const Fd = (0, Wd.O)(dd),
            Rd = Od;
          return Ud(Od.customData.operationType, Fd, "argument-error"), Ud(null === (md = Rd.customData._serverResponse) || void 0 === md ? void 0 : md.mfaPendingCredential, Fd, "argument-error"), qW._fromError(Fd, Rd)
        }
        class yW {
          constructor(dd) {
            this.user = dd, this.enrolledFactors = [], dd._onReload((Od => {
              Od.mfaInfo && (this.enrolledFactors = Od.mfaInfo.map((Od => Bm._fromServerResponse(dd.auth, Od))))
            }))
          }
          static _fromUser(dd) {
            return new yW(dd)
          }
          async getSession() {
            return NW._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(dd, Od) {
            const md = dd,
              Wd = await this.getSession(),
              Fd = await fd(this.user, md._process(this.user.auth, Wd, Od));
            return await this.user._updateTokensIfNecessary(Fd), this.user.reload()
          }
          async unenroll(dd) {
            const Od = "string" === typeof dd ? dd : dd.uid,
              md = await this.user.getIdToken();
            try {
              const dd = await fd(this.user, (Wd = this.user.auth, Fd = {
                idToken: md,
                mfaEnrollmentId: Od
              }, Pd(Wd, "POST", "/v2/accounts/mfaEnrollment:withdraw", Ld(Wd, Fd))));
              this.enrolledFactors = this.enrolledFactors.filter((dd => {
                let {
                  uid: md
                } = dd;
                return md !== Od
              })), await this.user._updateTokensIfNecessary(dd), await this.user.reload()
            } catch (Rd) {
              throw Rd
            }
            var Wd, Fd
          }
        }
        const bW = new WeakMap;

        function TW(dd) {
          const Od = (0, Wd.O)(dd);
          return bW.has(Od) || bW.set(Od, yW._fromUser(Od)), bW.get(Od)
        }
        const pW = "__sak";
        class YW {
          constructor(dd, Od) {
            this.storageRetriever = dd, this.type = Od
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(pW, "1"), this.storage.removeItem(pW), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (dd) {
              return Promise.resolve(!1)
            }
          }
          _set(dd, Od) {
            return this.storage.setItem(dd, JSON.stringify(Od)), Promise.resolve()
          }
          _get(dd) {
            const Od = this.storage.getItem(dd);
            return Promise.resolve(Od ? JSON.parse(Od) : null)
          }
          _remove(dd) {
            return this.storage.removeItem(dd), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class gW extends YW {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (dd, Od) => this.onStorageEvent(dd, Od), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const dd = (0, Wd.R)();
              return qO(dd) || YO(dd)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (dd) {
                return !1
              }
            }(), this.fallbackToPolling = gO(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(dd) {
            for (const Od of Object.keys(this.listeners)) {
              const md = this.storage.getItem(Od),
                Wd = this.localCache[Od];
              md !== Wd && dd(Od, Wd, md)
            }
          }
          onStorageEvent(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!dd.key) return void this.forAllChangedKeys(((dd, Od, md) => {
              this.notifyListeners(dd, md)
            }));
            const md = dd.key;
            if (Od ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Wd = this.storage.getItem(md);
              if (dd.newValue !== Wd) null !== dd.newValue ? this.storage.setItem(md, dd.newValue) : this.storage.removeItem(md);
              else if (this.localCache[md] === dd.newValue && !Od) return
            }
            const Fd = () => {
                const dd = this.storage.getItem(md);
                (Od || this.localCache[md] !== dd) && this.notifyListeners(md, dd)
              },
              Rd = this.storage.getItem(md);
            (0, Wd.ab)() && 10 === document.documentMode && Rd !== dd.newValue && dd.newValue !== dd.oldValue ? setTimeout(Fd, 10) : Fd()
          }
          notifyListeners(dd, Od) {
            this.localCache[dd] = Od;
            const md = this.listeners[dd];
            if (md)
              for (const Wd of Array.from(md)) Wd(Od ? JSON.parse(Od) : Od)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((dd, Od, md) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: dd,
                  oldValue: Od,
                  newValue: md
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
          _addListener(dd, Od) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[dd] || (this.listeners[dd] = new Set, this.localCache[dd] = this.storage.getItem(dd)), this.listeners[dd].add(Od)
          }
          _removeListener(dd, Od) {
            this.listeners[dd] && (this.listeners[dd].delete(Od), 0 === this.listeners[dd].size && delete this.listeners[dd]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(dd, Od) {
            await super._set(dd, Od), this.localCache[dd] = JSON.stringify(Od)
          }
          async _get(dd) {
            const Od = await super._get(dd);
            return this.localCache[dd] = JSON.stringify(Od), Od
          }
          async _remove(dd) {
            await super._remove(dd), delete this.localCache[dd]
          }
        }
        gW.type = "LOCAL";
        const wW = gW;
        class aW extends YW {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(dd, Od) {}
          _removeListener(dd, Od) {}
        }
        aW.type = "SESSION";
        const EW = aW;
        class JW {
          constructor(dd) {
            this.eventTarget = dd, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(dd) {
            const Od = this.receivers.find((Od => Od.isListeningto(dd)));
            if (Od) return Od;
            const md = new JW(dd);
            return this.receivers.push(md), md
          }
          isListeningto(dd) {
            return this.eventTarget === dd
          }
          async handleEvent(dd) {
            const Od = dd,
              {
                eventId: md,
                eventType: Wd,
                data: Fd
              } = Od.data,
              Rd = this.handlersMap[Wd];
            if (!(null === Rd || void 0 === Rd ? void 0 : Rd.size)) return;
            Od.ports[0].postMessage({
              status: "ack",
              eventId: md,
              eventType: Wd
            });
            const Xd = Array.from(Rd).map((async dd => dd(Od.origin, Fd))),
              Kd = await
            function(dd) {
              return Promise.all(dd.map((async dd => {
                try {
                  return {
                    fulfilled: !0,
                    value: await dd
                  }
                } catch (Od) {
                  return {
                    fulfilled: !1,
                    reason: Od
                  }
                }
              })))
            }(Xd);
            Od.ports[0].postMessage({
              status: "done",
              eventId: md,
              eventType: Wd,
              response: Kd
            })
          }
          _subscribe(dd, Od) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[dd] || (this.handlersMap[dd] = new Set), this.handlersMap[dd].add(Od)
          }
          _unsubscribe(dd, Od) {
            this.handlersMap[dd] && Od && this.handlersMap[dd].delete(Od), Od && 0 !== this.handlersMap[dd].size || delete this.handlersMap[dd], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function UW() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            md = "";
          for (let Wd = 0; Wd < Od; Wd++) md += Math.floor(10 * Math.random());
          return dd + md
        }
        JW.receivers = [];
        class xW {
          constructor(dd) {
            this.target = dd, this.handlers = new Set
          }
          removeMessageHandler(dd) {
            dd.messageChannel && (dd.messageChannel.port1.removeEventListener("message", dd.bY), dd.messageChannel.port1.close()), this.handlers.delete(dd)
          }
          async _send(dd, Od) {
            let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Wd = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Wd) throw new Error("connection_unavailable");
            let Fd, Rd;
            return new Promise(((Xd, Kd) => {
              const hd = UW("", 20);
              Wd.port1.start();
              const vd = setTimeout((() => {
                Kd(new Error("unsupported_event"))
              }), md);
              Rd = {
                messageChannel: Wd,
                bY(dd) {
                  const Od = dd;
                  if (Od.data.eventId === hd) switch (Od.data.status) {
                    case "ack":
                      clearTimeout(vd), Fd = setTimeout((() => {
                        Kd(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Fd), Xd(Od.data.response);
                      break;
                    default:
                      clearTimeout(vd), clearTimeout(Fd), Kd(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Rd), Wd.port1.addEventListener("message", Rd.bY), this.target.postMessage({
                eventType: dd,
                eventId: hd,
                data: Od
              }, [Wd.port2])
            })).finally((() => {
              Rd && this.removeMessageHandler(Rd)
            }))
          }
        }

        function BW() {
          return window
        }

        function SW() {
          return "undefined" !== typeof BW().WorkerGlobalScope && "function" === typeof BW().importScripts
        }
        const sW = "firebaseLocalStorageDb",
          uW = "firebaseLocalStorage",
          VW = "fbase_key";
        class iW {
          constructor(dd) {
            this.request = dd
          }
          toPromise() {
            return new Promise(((dd, Od) => {
              this.request.addEventListener("success", (() => {
                dd(this.request.result)
              })), this.request.addEventListener("error", (() => {
                Od(this.request.error)
              }))
            }))
          }
        }

        function AW(dd, Od) {
          return dd.transaction([uW], Od ? "readwrite" : "readonly").objectStore(uW)
        }

        function rW() {
          const dd = indexedDB.open(sW, 1);
          return new Promise(((Od, md) => {
            dd.addEventListener("error", (() => {
              md(dd.error)
            })), dd.addEventListener("upgradeneeded", (() => {
              const Od = dd.result;
              try {
                Od.createObjectStore(uW, {
                  keyPath: VW
                })
              } catch (Wd) {
                md(Wd)
              }
            })), dd.addEventListener("success", (async () => {
              const md = dd.result;
              md.objectStoreNames.contains(uW) ? Od(md) : (md.close(), await
                function() {
                  const dd = indexedDB.deleteDatabase(sW);
                  return new iW(dd).toPromise()
                }(), Od(await rW()))
            }))
          }))
        }
        async function GW(dd, Od, md) {
          const Wd = AW(dd, !0).put({
            [VW]: Od,
            value: md
          });
          return new iW(Wd).toPromise()
        }

        function nW(dd, Od) {
          const md = AW(dd, !0).delete(Od);
          return new iW(md).toPromise()
        }
        class LW {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await rW()), this.db
          }
          async _withRetries(dd) {
            let Od = 0;
            for (;;) try {
              const Od = await this._openDb();
              return await dd(Od)
            } catch (md) {
              if (Od++ > 3) throw md;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return SW() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = JW._getInstance(SW() ? self : null), this.receiver._subscribe("keyChanged", (async (dd, Od) => ({
              keyProcessed: (await this._poll()).includes(Od.key)
            }))), this.receiver._subscribe("ping", (async (dd, Od) => ["keyChanged"]))
          }
          async initializeSender() {
            var dd, Od;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (dd) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new xW(this.activeServiceWorker);
            const md = await this.sender._send("ping", {}, 800);
            md && (null === (dd = md[0]) || void 0 === dd ? void 0 : dd.fulfilled) && (null === (Od = md[0]) || void 0 === Od ? void 0 : Od.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(dd) {
            if (this.sender && this.activeServiceWorker && function() {
                var dd;
                return (null === (dd = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === dd ? void 0 : dd.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: dd
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (Od) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const dd = await rW();
              return await GW(dd, pW, "1"), await nW(dd, pW), !0
            } catch (dd) {}
            return !1
          }
          async _withPendingWrite(dd) {
            this.pendingWrites++;
            try {
              await dd()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(dd, Od) {
            return this._withPendingWrite((async () => (await this._withRetries((md => GW(md, dd, Od))), this.localCache[dd] = Od, this.notifyServiceWorker(dd))))
          }
          async _get(dd) {
            const Od = await this._withRetries((Od => async function(dd, Od) {
              const md = AW(dd, !1).get(Od),
                Wd = await new iW(md).toPromise();
              return void 0 === Wd ? null : Wd.value
            }(Od, dd)));
            return this.localCache[dd] = Od, Od
          }
          async _remove(dd) {
            return this._withPendingWrite((async () => (await this._withRetries((Od => nW(Od, dd))), delete this.localCache[dd], this.notifyServiceWorker(dd))))
          }
          async _poll() {
            const dd = await this._withRetries((dd => {
              const Od = AW(dd, !1).getAll();
              return new iW(Od).toPromise()
            }));
            if (!dd) return [];
            if (0 !== this.pendingWrites) return [];
            const Od = [],
              md = new Set;
            for (const {
                fbase_key: Wd,
                value: Fd
              }
              of dd) md.add(Wd), JSON.stringify(this.localCache[Wd]) !== JSON.stringify(Fd) && (this.notifyListeners(Wd, Fd), Od.push(Wd));
            for (const Wd of Object.keys(this.localCache)) this.localCache[Wd] && !md.has(Wd) && (this.notifyListeners(Wd, null), Od.push(Wd));
            return Od
          }
          notifyListeners(dd, Od) {
            this.localCache[dd] = Od;
            const md = this.listeners[dd];
            if (md)
              for (const Wd of Array.from(md)) Wd(Od)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(dd, Od) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[dd] || (this.listeners[dd] = new Set, this._get(dd)), this.listeners[dd].add(Od)
          }
          _removeListener(dd, Od) {
            this.listeners[dd] && (this.listeners[dd].delete(Od), 0 === this.listeners[dd].size && delete this.listeners[dd]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        LW.type = "LOCAL";
        const PW = LW;
        const zW = 1e12;
        class cW {
          constructor(dd) {
            this.auth = dd, this.counter = zW, this._widgets = new Map
          }
          render(dd, Od) {
            const md = this.counter;
            return this._widgets.set(md, new jW(dd, this.auth.name, Od || {})), this.counter++, md
          }
          reset(dd) {
            var Od;
            const md = dd || zW;
            null === (Od = this._widgets.get(md)) || void 0 === Od || Od.delete(), this._widgets.delete(md)
          }
          getResponse(dd) {
            var Od;
            const md = dd || zW;
            return (null === (Od = this._widgets.get(md)) || void 0 === Od ? void 0 : Od.getResponse()) || ""
          }
          async execute(dd) {
            var Od;
            const md = dd || zW;
            return null === (Od = this._widgets.get(md)) || void 0 === Od || Od.execute(), ""
          }
        }
        class jW {
          constructor(dd, Od, md) {
            this.params = md, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Wd = "string" === typeof dd ? document.getElementById(dd) : dd;
            Ud(Wd, "argument-error", {
              appName: Od
            }), this.container = Wd, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(dd) {
                const Od = [],
                  md = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Wd = 0; Wd < dd; Wd++) Od.push(md.charAt(Math.floor(Math.random() * md.length)));
                return Od.join("")
              }(50);
              const {
                callback: dd,
                "expired-callback": Od
              } = this.params;
              if (dd) try {
                dd(this.responseToken)
              } catch (md) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Od) try {
                  Od()
                } catch (md) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const DW = BO("rcb"),
          eW = new Vd(3e4, 6e4);
        class IW {
          constructor() {
            var dd;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (dd = BW().grecaptcha) || void 0 === dd ? void 0 : dd.render)
          }
          load(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Ud(function(dd) {
              return dd.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(dd)
            }(Od), dd, "argument-error"), this.shouldResolveImmediately(Od) && EO(BW().grecaptcha) ? Promise.resolve(BW().grecaptcha) : new Promise(((md, Fd) => {
              const Rd = BW().setTimeout((() => {
                Fd(gd(dd, "network-request-failed"))
              }), eW.get());
              BW()[DW] = () => {
                BW().clearTimeout(Rd), delete BW()[DW];
                const Wd = BW().grecaptcha;
                if (!Wd || !EO(Wd)) return void Fd(gd(dd, "internal-error"));
                const Xd = Wd.render;
                Wd.render = (dd, Od) => {
                  const md = Xd(dd, Od);
                  return this.counter++, md
                }, this.hostLanguage = Od, md(Wd)
              };
              xO(`https://www.google.com/recaptcha/api.js??${(0,Wd.nb)({onload:DW,render:"explicit",hl:Od})}`).catch((() => {
                clearTimeout(Rd), Fd(gd(dd, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(dd) {
            var Od;
            return !!(null === (Od = BW().grecaptcha) || void 0 === Od ? void 0 : Od.render) && (dd === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class lW {
          async load(dd) {
            return new cW(dd)
          }
          clearedOneInstance() {}
        }
        const CW = "recaptcha",
          ZW = {
            theme: "light",
            type: "image"
          };
        class kW {
          constructor(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, ZW),
              md = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Od, this.type = CW, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = iO(md), this.isInvisible = "invisible" === this.parameters.size, Ud("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Wd = "string" === typeof dd ? document.getElementById(dd) : dd;
            Ud(Wd, this.auth, "argument-error"), this.container = Wd, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new lW : new IW, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const dd = await this.render(),
              Od = this.getAssertedRecaptcha(),
              md = Od.getResponse(dd);
            return md || new Promise((md => {
              const Wd = dd => {
                dd && (this.tokenChangeListeners.delete(Wd), md(dd))
              };
              this.tokenChangeListeners.add(Wd), this.isInvisible && Od.execute(dd)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (dd) {
              return Promise.reject(dd)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((dd => {
              throw this.renderPromise = null, dd
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((dd => {
              this.container.removeChild(dd)
            }))
          }
          validateStartingState() {
            Ud(!this.parameters.sitekey, this.auth, "argument-error"), Ud(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Ud("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(dd) {
            return Od => {
              if (this.tokenChangeListeners.forEach((dd => dd(Od))), "function" === typeof dd) dd(Od);
              else if ("string" === typeof dd) {
                const md = BW()[dd];
                "function" === typeof md && md(Od)
              }
            }
          }
          assertNotDestroyed() {
            Ud(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let dd = this.container;
              if (!this.isInvisible) {
                const Od = document.createElement("div");
                dd.appendChild(Od), dd = Od
              }
              this.widgetId = this.getAssertedRecaptcha().render(dd, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            Ud(sd() && !SW(), this.auth, "internal-error"), await
            function() {
              let dd = null;
              return new Promise((Od => {
                "complete" !== document.readyState ? (dd = () => Od(), window.addEventListener("load", dd)) : Od()
              })).catch((Od => {
                throw dd && window.removeEventListener("load", dd), Od
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const dd = await async function(dd) {
              return (await Pd(dd, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Ud(dd, this.auth, "internal-error"), this.parameters.sitekey = dd
          }
          getAssertedRecaptcha() {
            return Ud(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class fW {
          constructor(dd, Od) {
            this.verificationId = dd, this.onConfirmation = Od
          }
          confirm(dd) {
            const Od = fO._fromVerification(this.verificationId, dd);
            return this.onConfirmation(Od)
          }
        }
        async function MW(dd, Od, md) {
          const Fd = iO(dd),
            Rd = await mF(Fd, Od, (0, Wd.O)(md));
          return new fW(Rd, (dd => Em(Fd, dd)))
        }
        async function dF(dd, Od, md) {
          const Fd = (0, Wd.O)(dd);
          await gm(!1, Fd, "phone");
          const Rd = await mF(Fd.auth, Od, (0, Wd.O)(md));
          return new fW(Rd, (dd => Jm(Fd, dd)))
        }
        async function OF(dd, Od, md) {
          const Fd = (0, Wd.O)(dd),
            Rd = await mF(Fd.auth, Od, (0, Wd.O)(md));
          return new fW(Rd, (dd => Um(Fd, dd)))
        }
        async function mF(dd, Od, md) {
          var Wd;
          const Fd = await md.verify();
          try {
            let Rd;
            if (Ud("string" === typeof Fd, dd, "argument-error"), Ud(md.type === CW, dd, "argument-error"), Rd = "string" === typeof Od ? {
                phoneNumber: Od
              } : Od, "session" in Rd) {
              const Od = Rd.session;
              if ("phoneNumber" in Rd) {
                Ud("enroll" === Od.type, dd, "internal-error");
                const md = await
                function(dd, Od) {
                  return Pd(dd, "POST", "/v2/accounts/mfaEnrollment:start", Ld(dd, Od))
                }(dd, {
                  idToken: Od.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Rd.phoneNumber,
                    recaptchaToken: Fd
                  }
                });
                return md.phoneSessionInfo.sessionInfo
              } {
                Ud("signin" === Od.type, dd, "internal-error");
                const md = (null === (Wd = Rd.multiFactorHint) || void 0 === Wd ? void 0 : Wd.uid) || Rd.multiFactorUid;
                Ud(md, dd, "missing-multi-factor-info");
                const Xd = await
                function(dd, Od) {
                  return Pd(dd, "POST", "/v2/accounts/mfaSignIn:start", Ld(dd, Od))
                }(dd, {
                  mfaPendingCredential: Od.credential,
                  mfaEnrollmentId: md,
                  phoneSignInInfo: {
                    recaptchaToken: Fd
                  }
                });
                return Xd.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Od
              } = await async function(dd, Od) {
                return Pd(dd, "POST", "/v1/accounts:sendVerificationCode", Ld(dd, Od))
              }(dd, {
                phoneNumber: Rd.phoneNumber,
                recaptchaToken: Fd
              });
              return Od
            }
          } finally {
            md._reset()
          }
        }
        async function WF(dd, Od) {
          await Ym((0, Wd.O)(dd), Od)
        }
        class FF {
          constructor(dd) {
            this.providerId = FF.PROVIDER_ID, this.auth = iO(dd)
          }
          verifyPhoneNumber(dd, Od) {
            return mF(this.auth, dd, (0, Wd.O)(Od))
          }
          static credential(dd, Od) {
            return fO._fromVerification(dd, Od)
          }
          static credentialFromResult(dd) {
            const Od = dd;
            return FF.credentialFromTaggedObject(Od)
          }
          static credentialFromError(dd) {
            return FF.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Od
            } = dd;
            if (!Od) return null;
            const {
              phoneNumber: md,
              temporaryProof: Wd
            } = Od;
            return md && Wd ? fO._fromTokenResponse(md, Wd) : null
          }
        }

        function RF(dd, Od) {
          return Od ? KO(Od) : (Ud(dd._popupRedirectResolver, dd, "argument-error"), dd._popupRedirectResolver)
        }
        FF.PROVIDER_ID = "phone", FF.PHONE_SIGN_IN_METHOD = "phone";
        class XF extends PO {
          constructor(dd) {
            super("custom", "custom"), this.params = dd
          }
          _getIdTokenResponse(dd) {
            return CO(dd, this._buildIdpRequest())
          }
          _linkToIdToken(dd, Od) {
            return CO(dd, this._buildIdpRequest(Od))
          }
          _getReauthenticationResolver(dd) {
            return CO(dd, this._buildIdpRequest())
          }
          _buildIdpRequest(dd) {
            const Od = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return dd && (Od.idToken = dd), Od
          }
        }

        function KF(dd) {
          return am(dd.auth, new XF(dd), dd.bypassAuthState)
        }

        function hF(dd) {
          const {
            auth: Od,
            user: md
          } = dd;
          return Ud(md, Od, "internal-error"), wm(md, new XF(dd), dd.bypassAuthState)
        }
        async function vF(dd) {
          const {
            auth: Od,
            user: md
          } = dd;
          return Ud(md, Od, "internal-error"), Ym(md, new XF(dd), dd.bypassAuthState)
        }
        class QF {
          constructor(dd, Od, md, Wd) {
            let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = dd, this.resolver = md, this.user = Wd, this.bypassAuthState = Fd, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Od) ? Od : [Od]
          }
          execute() {
            return new Promise((async (dd, Od) => {
              this.pendingPromise = {
                resolve: dd,
                reject: Od
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (md) {
                this.reject(md)
              }
            }))
          }
          async onAuthEvent(dd) {
            const {
              urlResponse: Od,
              sessionId: md,
              postBody: Wd,
              tenantId: Fd,
              error: Rd,
              type: Xd
            } = dd;
            if (Rd) return void this.reject(Rd);
            const Kd = {
              auth: this.auth,
              requestUri: Od,
              sessionId: md,
              tenantId: Fd || void 0,
              postBody: Wd || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Xd)(Kd))
            } catch (hd) {
              this.reject(hd)
            }
          }
          onError(dd) {
            this.reject(dd)
          }
          getIdpTask(dd) {
            switch (dd) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return KF;
              case "linkViaPopup":
              case "linkViaRedirect":
                return vF;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return hF;
              default:
                Yd(this.auth, "internal-error")
            }
          }
          resolve(dd) {
            Bd(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(dd), this.unregisterAndCleanUp()
          }
          reject(dd) {
            Bd(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(dd), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const tF = new Vd(2e3, 1e4);
        async function oF(dd, Od, md) {
          const Wd = iO(dd);
          Ed(dd, Od, mm);
          const Fd = RF(Wd, md);
          return new HF(Wd, "signInViaPopup", Od, Fd).executeNotNull()
        }
        async function NF(dd, Od, md) {
          const Fd = (0, Wd.O)(dd);
          Ed(Fd.auth, Od, mm);
          const Rd = RF(Fd.auth, md);
          return new HF(Fd.auth, "reauthViaPopup", Od, Rd, Fd).executeNotNull()
        }
        async function qF(dd, Od, md) {
          const Fd = (0, Wd.O)(dd);
          Ed(Fd.auth, Od, mm);
          const Rd = RF(Fd.auth, md);
          return new HF(Fd.auth, "linkViaPopup", Od, Rd, Fd).executeNotNull()
        }
        class HF extends QF {
          constructor(dd, Od, md, Wd, Fd) {
            super(dd, Od, Wd, Fd), this.provider = md, this.authWindow = null, this.pollId = null, HF.currentPopupAction && HF.currentPopupAction.cancel(), HF.currentPopupAction = this
          }
          async executeNotNull() {
            const dd = await this.execute();
            return Ud(dd, this.auth, "internal-error"), dd
          }
          async onExecution() {
            Bd(1 === this.filter.length, "Popup operations only handle one event");
            const dd = UW();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], dd), this.authWindow.associatedEvent = dd, this.resolver._originValidation(this.auth).catch((dd => {
              this.reject(dd)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (dd => {
              dd || this.reject(gd(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var dd;
            return (null === (dd = this.authWindow) || void 0 === dd ? void 0 : dd.associatedEvent) || null
          }
          cancel() {
            this.reject(gd(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, HF.currentPopupAction = null
          }
          pollUserCancellation() {
            const dd = () => {
              var Od, md;
              (null === (md = null === (Od = this.authWindow) || void 0 === Od ? void 0 : Od.window) || void 0 === md ? void 0 : md.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(gd(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(dd, tF.get())
            };
            dd()
          }
        }
        HF.currentPopupAction = null;
        const yF = "pendingRedirect",
          bF = new Map;
        class TF extends QF {
          constructor(dd, Od) {
            super(dd, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Od, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let dd = bF.get(this.auth._key());
            if (!dd) {
              try {
                const Od = await async function(dd, Od) {
                  const md = wF(Od),
                    Wd = gF(dd);
                  if (!await Wd._isAvailable()) return !1;
                  const Fd = "true" === await Wd._get(md);
                  return await Wd._remove(md), Fd
                }(this.resolver, this.auth) ? await super.execute() : null;
                dd = () => Promise.resolve(Od)
              } catch (Od) {
                dd = () => Promise.reject(Od)
              }
              bF.set(this.auth._key(), dd)
            }
            return this.bypassAuthState || bF.set(this.auth._key(), (() => Promise.resolve(null))), dd()
          }
          async onAuthEvent(dd) {
            if ("signInViaRedirect" === dd.type) return super.onAuthEvent(dd);
            if ("unknown" !== dd.type) {
              if (dd.eventId) {
                const Od = await this.auth._redirectUserForId(dd.eventId);
                if (Od) return this.user = Od, super.onAuthEvent(dd);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function pF(dd, Od) {
          return gF(dd)._set(wF(Od), "true")
        }

        function YF(dd, Od) {
          bF.set(dd._key(), Od)
        }

        function gF(dd) {
          return KO(dd._redirectPersistence)
        }

        function wF(dd) {
          return QO(yF, dd.config.apiKey, dd.name)
        }

        function aF(dd, Od, md) {
          return async function(dd, Od, md) {
            const Wd = iO(dd);
            Ed(dd, Od, mm), await Wd._initializationPromise;
            const Fd = RF(Wd, md);
            return await pF(Fd, Wd), Fd._openRedirect(Wd, Od, "signInViaRedirect")
          }(dd, Od, md)
        }

        function EF(dd, Od, md) {
          return async function(dd, Od, md) {
            const Fd = (0, Wd.O)(dd);
            Ed(Fd.auth, Od, mm), await Fd.auth._initializationPromise;
            const Rd = RF(Fd.auth, md);
            await pF(Rd, Fd.auth);
            const Xd = await BF(Fd);
            return Rd._openRedirect(Fd.auth, Od, "reauthViaRedirect", Xd)
          }(dd, Od, md)
        }

        function JF(dd, Od, md) {
          return async function(dd, Od, md) {
            const Fd = (0, Wd.O)(dd);
            Ed(Fd.auth, Od, mm), await Fd.auth._initializationPromise;
            const Rd = RF(Fd.auth, md);
            await gm(!1, Fd, Od.providerId), await pF(Rd, Fd.auth);
            const Xd = await BF(Fd);
            return Rd._openRedirect(Fd.auth, Od, "linkViaRedirect", Xd)
          }(dd, Od, md)
        }
        async function UF(dd, Od) {
          return await iO(dd)._initializationPromise, xF(dd, Od, !1)
        }
        async function xF(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Wd = iO(dd),
            Fd = RF(Wd, Od),
            Rd = new TF(Wd, Fd, md),
            Xd = await Rd.execute();
          return Xd && !md && (delete Xd.user._redirectEventId, await Wd._persistUserIfCurrent(Xd.user), await Wd._setRedirectUser(null, Od)), Xd
        }
        async function BF(dd) {
          const Od = UW(`${dd.uid}:::`);
          return dd._redirectEventId = Od, await dd.auth._setRedirectUser(dd), await dd.auth._persistUserIfCurrent(dd), Od
        }
        class SF {
          constructor(dd) {
            this.auth = dd, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(dd) {
            this.consumers.add(dd), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, dd) && (this.sendToConsumer(this.queuedRedirectEvent, dd), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(dd) {
            this.consumers.delete(dd)
          }
          onEvent(dd) {
            if (this.hasEventBeenHandled(dd)) return !1;
            let Od = !1;
            return this.consumers.forEach((md => {
              this.isEventForConsumer(dd, md) && (Od = !0, this.sendToConsumer(dd, md), this.saveEventToCache(dd))
            })), this.hasHandledPotentialRedirect || ! function(dd) {
              switch (dd.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return uF(dd);
                default:
                  return !1
              }
            }(dd) || (this.hasHandledPotentialRedirect = !0, Od || (this.queuedRedirectEvent = dd, Od = !0)), Od
          }
          sendToConsumer(dd, Od) {
            var md;
            if (dd.error && !uF(dd)) {
              const Wd = (null === (md = dd.error.code) || void 0 === md ? void 0 : md.split("auth/")[1]) || "internal-error";
              Od.onError(gd(this.auth, Wd))
            } else Od.onAuthEvent(dd)
          }
          isEventForConsumer(dd, Od) {
            const md = null === Od.eventId || !!dd.eventId && dd.eventId === Od.eventId;
            return Od.filter.includes(dd.type) && md
          }
          hasEventBeenHandled(dd) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(sF(dd))
          }
          saveEventToCache(dd) {
            this.cachedEventUids.add(sF(dd)), this.lastProcessedEventTime = Date.now()
          }
        }

        function sF(dd) {
          return [dd.type, dd.eventId, dd.sessionId, dd.tenantId].filter((dd => dd)).join("-")
        }

        function uF(dd) {
          let {
            type: Od,
            error: md
          } = dd;
          return "unknown" === Od && "auth/no-auth-event" === (null === md || void 0 === md ? void 0 : md.code)
        }
        const VF = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          iF = /^https?/;
        async function AF(dd) {
          if (dd.config.emulator) return;
          const {
            authorizedDomains: Od
          } = await async function(dd) {
            return Pd(dd, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(dd);
          for (const Wd of Od) try {
            if (rF(Wd)) return
          } catch (md) {}
          Yd(dd, "unauthorized-domain")
        }

        function rF(dd) {
          const Od = Sd(),
            {
              protocol: md,
              hostname: Wd
            } = new URL(Od);
          if (dd.startsWith("chrome-extension://")) {
            const Fd = new URL(dd);
            return "" === Fd.hostname && "" === Wd ? "chrome-extension:" === md && dd.replace("chrome-extension://", "") === Od.replace("chrome-extension://", "") : "chrome-extension:" === md && Fd.hostname === Wd
          }
          if (!iF.test(md)) return !1;
          if (VF.test(dd)) return Wd === dd;
          const Fd = dd.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Fd + "|" + Fd + ")$", "i").test(Wd)
        }
        const GF = new Vd(3e4, 6e4);

        function nF() {
          const dd = BW().___jsl;
          if (null === dd || void 0 === dd ? void 0 : dd.H)
            for (const Od of Object.keys(dd.H))
              if (dd.H[Od].r = dd.H[Od].r || [], dd.H[Od].L = dd.H[Od].L || [], dd.H[Od].r = [...dd.H[Od].L], dd.CP)
                for (let md = 0; md < dd.CP.length; md++) dd.CP[md] = null
        }
        let LF = null;

        function PF(dd) {
          return LF = LF || function(dd) {
            return new Promise(((Od, md) => {
              var Wd, Fd, Rd;

              function Xd() {
                nF(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Od(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    nF(), md(gd(dd, "network-request-failed"))
                  },
                  timeout: GF.get()
                })
              }
              if (null === (Fd = null === (Wd = BW().gapi) || void 0 === Wd ? void 0 : Wd.iframes) || void 0 === Fd ? void 0 : Fd.Iframe) Od(gapi.iframes.getContext());
              else {
                if (!(null === (Rd = BW().gapi) || void 0 === Rd ? void 0 : Rd.load)) {
                  const Od = BO("iframefcb");
                  return BW()[Od] = () => {
                    gapi.load ? Xd() : md(gd(dd, "network-request-failed"))
                  }, xO(`https://apis.google.com/js/api.js?onload=${Od}`).catch((dd => md(dd)))
                }
                Xd()
              }
            })).catch((dd => {
              throw LF = null, dd
            }))
          }(dd), LF
        }
        const zF = new Vd(5e3, 15e3),
          cF = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          jF = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function DF(dd) {
          const Od = dd.config;
          Ud(Od.authDomain, dd, "auth-domain-config-required");
          const md = Od.emulator ? Ad(Od, "emulator/auth/iframe") : `https://${dd.config.authDomain}/__/auth/iframe`,
            Rd = {
              apiKey: Od.apiKey,
              appName: dd.name,
              v: Fd.f
            },
            Xd = jF.get(dd.config.apiHost);
          Xd && (Rd.eid = Xd);
          const Kd = dd._getFrameworks();
          return Kd.length && (Rd.fw = Kd.join(",")), `${md}?${(0,Wd.nb)(Rd).slice(1)}`
        }
        const eF = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class IF {
          constructor(dd) {
            this.window = dd, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (dd) {}
          }
        }

        function lF(dd, Od, md) {
          let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Xd = Math.max((window.screen.availHeight - Rd) / 2, 0).toString(),
            Kd = Math.max((window.screen.availWidth - Fd) / 2, 0).toString();
          let hd = "";
          const vd = Object.assign(Object.assign({}, eF), {
              width: Fd.toString(),
              height: Rd.toString(),
              top: Xd,
              left: Kd
            }),
            Qd = (0, Wd.R)().toLowerCase();
          md && (hd = HO(Qd) ? "_blank" : md), NO(Qd) && (Od = Od || "http://localhost", vd.scrollbars = "yes");
          const td = Object.entries(vd).reduce(((dd, Od) => {
            let [md, Wd] = Od;
            return `${dd}${md}=${Wd},`
          }), "");
          if (function() {
              var dd;
              return YO(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.R)()) && !!(null === (dd = window.navigator) || void 0 === dd ? void 0 : dd.standalone)
            }(Qd) && "_self" !== hd) return function(dd, Od) {
            const md = document.createElement("a");
            md.href = dd, md.target = Od;
            const Wd = document.createEvent("MouseEvent");
            Wd.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), md.dispatchEvent(Wd)
          }(Od || "", hd), new IF(null);
          const od = window.open(Od || "", hd, td);
          Ud(od, dd, "popup-blocked");
          try {
            od.focus()
          } catch (Nd) {}
          return new IF(od)
        }
        const CF = "__/auth/handler",
          ZF = "emulator/auth/handler",
          kF = encodeURIComponent("fac");
        async function fF(dd, Od, md, Rd, Xd, Kd) {
            Ud(dd.config.authDomain, dd, "auth-domain-config-required"), Ud(dd.config.apiKey, dd, "invalid-api-key");
            const hd = {
              apiKey: dd.config.apiKey,
              appName: dd.name,
              authType: md,
              redirectUrl: Rd,
              v: Fd.f,
              eventId: Xd
            };
            if (Od instanceof mm) {
              Od.setDefaultLanguage(dd.languageCode), hd.providerId = Od.providerId || "", (0, Wd.Z)(Od.getCustomParameters()) || (hd.customParameters = JSON.stringify(Od.getCustomParameters()));
              for (const [dd, Od] of Object.entries(Kd || {})) hd[dd] = Od
            }
            if (Od instanceof Wm) {
              const dd = Od.getScopes().filter((dd => "" !== dd));
              dd.length > 0 && (hd.scopes = dd.join(","))
            }
            dd.tenantId && (hd.tid = dd.tenantId);
            const vd = hd;
            for (const Wd of Object.keys(vd)) void 0 === vd[Wd] && delete vd[Wd];
            const Qd = await dd._getAppCheckToken(),
              td = Qd ? `#${kF}=${encodeURIComponent(Qd)}` : "";
            return `${function(dd){let{config:Od}=dd;if(!Od.emulator)return`
            https: //${Od.authDomain}/${CF}`;return Ad(Od,ZF)}(dd)}?${(0,Wd.nb)(vd).slice(1)}${td}`}const MF="webStorageSupport";const dR=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=EW,this._completeRedirectFn=xF,this._overrideRedirectResult=YF}async _openPopup(dd,Od,md,Wd){var Fd;Bd(null===(Fd=this.eventManagers[dd._key()])||void 0===Fd?void 0:Fd.manager,"_initialize() not called before _openPopup()");return lF(dd,await fF(dd,Od,md,Sd(),Wd),UW())}async _openRedirect(dd,Od,md,Wd){await this._originValidation(dd);return function(dd){BW().location.href=dd}(await fF(dd,Od,md,Sd(),Wd)),new Promise((()=>{}))}_initialize(dd){const Od=dd._key();if(this.eventManagers[Od]){const{manager:dd,promise:md}=this.eventManagers[Od];return dd?Promise.resolve(dd):(Bd(md,"If manager is not set, promise should be"),md)}const md=this.initAndGetManager(dd);return this.eventManagers[Od]={promise:md},md.catch((()=>{delete this.eventManagers[Od]})),md}async initAndGetManager(dd){const Od=await async function(dd){const Od=await PF(dd),md=BW().gapi;return Ud(md,dd,"internal-error"),Od.open({where:document.body,url:DF(dd),messageHandlersFilter:md.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cF,dontclear:!0},(Od=>new Promise((async(md,Wd)=>{await Od.restyle({setHideOnLeave:!1});const Fd=gd(dd,"network-request-failed"),Rd=BW().setTimeout((()=>{Wd(Fd)}),zF.get());function Xd(){BW().clearTimeout(Rd),md(Od)}Od.ping(Xd).then(Xd,(()=>{Wd(Fd)}))}))))}(dd),md=new SF(dd);return Od.register("authEvent",(Od=>{Ud(null===Od||void 0===Od?void 0:Od.authEvent,dd,"invalid-auth-event");return{status:md.onEvent(Od.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[dd._key()]={manager:md},this.iframes[dd._key()]=Od,md}_isIframeWebStorageSupported(dd,Od){this.iframes[dd._key()].send(MF,{type:MF},(md=>{var Wd;const Fd=null===(Wd=null===md||void 0===md?void 0:md[0])||void 0===Wd?void 0:Wd[MF];void 0!==Fd&&Od(!!Fd),Yd(dd,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(dd){const Od=dd._key();return this.originValidationPromises[Od]||(this.originValidationPromises[Od]=AF(dd)),this.originValidationPromises[Od]}get _shouldInitProactively(){return gO()||qO()||YO()}};class OR{constructor(dd){this.factorId=dd}_process(dd,Od,md){switch(Od.type){case"enroll":return this._finalizeEnroll(dd,Od.credential,md);case"signin":return this._finalizeSignIn(dd,Od.credential);default:return xd("unexpected MultiFactorSessionType")}}}class mR extends OR{constructor(dd){super("phone"),this.credential=dd}static _fromCredential(dd){return new mR(dd)}_finalizeEnroll(dd,Od,md){return function(dd,Od){return Pd(dd,"POST","/v2/accounts/mfaEnrollment:finalize",Ld(dd,Od))}(dd,{idToken:Od,displayName:md,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(dd,Od){return function(dd,Od){return Pd(dd,"POST","/v2/accounts/mfaSignIn:finalize",Ld(dd,Od))}(dd,{mfaPendingCredential:Od,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class WR{constructor(){}static assertion(dd){return mR._fromCredential(dd)}}WR.FACTOR_ID="phone";class FR{static assertionForEnrollment(dd,Od){return RR._fromSecret(dd,Od)}static assertionForSignIn(dd,Od){return RR._fromEnrollmentId(dd,Od)}static async generateSecret(dd){const Od=dd;Ud("undefined"!==typeof Od.auth,"internal-error");const md=await(Wd=Od.auth,Fd={idToken:Od.credential,totpEnrollmentInfo:{}},Pd(Wd,"POST","/v2/accounts/mfaEnrollment:start",Ld(Wd,Fd)));var Wd,Fd;return XR._fromStartTotpMfaEnrollmentResponse(md,Od.auth)}}FR.FACTOR_ID="totp";class RR extends OR{constructor(dd,Od,md){super("totp"),this.otp=dd,this.enrollmentId=Od,this.secret=md}static _fromSecret(dd,Od){return new RR(Od,void 0,dd)}static _fromEnrollmentId(dd,Od){return new RR(Od,dd)}async _finalizeEnroll(dd,Od,md){return Ud("undefined"!==typeof this.secret,dd,"argument-error"),function(dd,Od){return Pd(dd,"POST","/v2/accounts/mfaEnrollment:finalize",Ld(dd,Od))}(dd,{idToken:Od,displayName:md,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(dd,Od){Ud(void 0!==this.enrollmentId&&void 0!==this.otp,dd,"argument-error");const md={verificationCode:this.otp};return function(dd,Od){return Pd(dd,"POST","/v2/accounts/mfaSignIn:finalize",Ld(dd,Od))}(dd,{mfaPendingCredential:Od,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:md})}}class XR{constructor(dd,Od,md,Wd,Fd,Rd,Xd){this.sessionInfo=Rd,this.auth=Xd,this.secretKey=dd,this.hashingAlgorithm=Od,this.codeLength=md,this.codeIntervalSeconds=Wd,this.enrollmentCompletionDeadline=Fd}static _fromStartTotpMfaEnrollmentResponse(dd,Od){return new XR(dd.totpSessionInfo.sharedSecretKey,dd.totpSessionInfo.hashingAlgorithm,dd.totpSessionInfo.verificationCodeLength,dd.totpSessionInfo.periodSec,new Date(dd.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),dd.totpSessionInfo.sessionInfo,Od)}_makeTotpVerificationInfo(dd){return{sessionInfo:this.sessionInfo,verificationCode:dd}}generateQrCodeUrl(dd,Od){var md;let Wd=!1;return(KR(dd)||KR(Od))&&(Wd=!0),Wd&&(KR(dd)&&(dd=(null===(md=this.auth.currentUser)||void 0===md?void 0:md.email)||"unknownuser"),KR(Od)&&(Od=this.auth.name)),`otpauth://totp/${Od}:${dd}?secret=${this.secretKey}&issuer=${Od}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function KR(dd){return"undefined"===typeof dd||0===(null===dd||void 0===dd?void 0:dd.length)}var hR="@firebase/auth",vR="0.23.2";class QR{constructor(dd){this.auth=dd,this.internalListeners=new Map}getUid(){var dd;return this.assertAuthConfigured(),(null===(dd=this.auth.currentUser)||void 0===dd?void 0:dd.uid)||null}async getToken(dd){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(dd)}}addAuthTokenListener(dd){if(this.assertAuthConfigured(),this.internalListeners.has(dd))return;const Od=this.auth.onIdTokenChanged((Od=>{dd((null===Od||void 0===Od?void 0:Od.stsTokenManager.accessToken)||null)}));this.internalListeners.set(dd,Od),this.updateProactiveRefresh()}removeAuthTokenListener(dd){this.assertAuthConfigured();const Od=this.internalListeners.get(dd);Od&&(this.internalListeners.delete(dd),Od(),this.updateProactiveRefresh())}assertAuthConfigured(){Ud(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const tR=(0,Wd.K)("authIdTokenMaxAge")||300;let oR=null;const NR=dd=>async Od=>{const md=Od&&await Od.getIdTokenResult(),Wd=md&&((new Date).getTime()-Date.parse(md.issuedAtTime))/1e3;if(Wd&&Wd>tR)return;const Fd=null===md||void 0===md?void 0:md.token;oR!==Fd&&(oR=Fd,await fetch(dd,{method:Fd?"POST":"DELETE",headers:Fd?{Authorization:`Bearer ${Fd}`}:{}}))};function qR(){let dd=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Fd.L)();const Od=(0,Fd.z)(dd,"auth");if(Od.isInitialized())return Od.getImmediate();const md=rO(dd,{popupRedirectResolver:dR,persistence:[PW,wW,EW]}),Rd=(0,Wd.K)("authTokenSyncURL");if(Rd){const dd=NR(Rd);KW(md,dd,(()=>dd(md.currentUser))),XW(md,(Od=>dd(Od)))}const Xd=(0,Wd.H)("auth");return Xd&&GO(md,`http://${Xd}`),md}var HR;HR="Browser",(0,Fd.C)(new Kd.d("auth",((dd,Od)=>{let{options:md}=Od;const Wd=dd.getProvider("app").getImmediate(),Fd=dd.getProvider("heartbeat"),Rd=dd.getProvider("app-check-internal"),{apiKey:Xd,authDomain:Kd}=Wd.options;Ud(Xd&&!Xd.includes(":"),"invalid-api-key",{appName:Wd.name});const hd={apiKey:Xd,authDomain:Kd,clientPlatform:HR,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wO(HR)},vd=new VO(Wd,Fd,Rd,hd);return function(dd,Od){const md=(null===Od||void 0===Od?void 0:Od.persistence)||[],Wd=(Array.isArray(md)?md:[md]).map(KO);(null===Od||void 0===Od?void 0:Od.errorMap)&&dd._updateErrorMap(Od.errorMap),dd._initializeWithPersistence(Wd,null===Od||void 0===Od?void 0:Od.popupRedirectResolver)}(vd,md),vd}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((dd,Od,md)=>{dd.getProvider("auth-internal").initialize()}))),(0,Fd.C)(new Kd.d("auth-internal",(dd=>(dd=>new QR(dd))(iO(dd.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Fd.T)(hR,vR,function(dd){switch(dd){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(HR)),(0,Fd.T)(hR,vR,"esm2017")}};Object.freeze(modules);for(const dd in modules)Object.freeze(modules[dd]);