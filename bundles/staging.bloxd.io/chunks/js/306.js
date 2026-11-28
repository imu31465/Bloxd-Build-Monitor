/*! For license information please see welxxc.306.d7974bde.chunk.js.LICENSE.txt */
export const id = 306;
export const ids = [306];
export const modules = {
    42208: (bb, wb, Mb) => {
        Mb.r(wb), Mb.d(wb, {
          ActionCodeOperation: () => Ub,
          ActionCodeURL: () => Tw,
          AuthCredential: () => vw,
          AuthErrorCodes: () => Bb,
          EmailAuthCredential: () => dw,
          EmailAuthProvider: () => bM,
          FacebookAuthProvider: () => HM,
          FactorId: () => lb,
          GithubAuthProvider: () => VM,
          GoogleAuthProvider: () => pM,
          OAuthCredential: () => nw,
          OAuthProvider: () => eM,
          OperationType: () => Ob,
          PhoneAuthCredential: () => ow,
          PhoneAuthProvider: () => MH,
          PhoneMultiFactorGenerator: () => wp,
          ProviderId: () => Lb,
          RecaptchaVerifier: () => ne,
          SAMLAuthProvider: () => lM,
          SignInMethod: () => Ib,
          TotpMultiFactorGenerator: () => Mp,
          TotpSecret: () => Hp,
          TwitterAuthProvider: () => LM,
          applyActionCode: () => fM,
          beforeAuthStateChanged: () => pe,
          browserLocalPersistence: () => he,
          browserPopupRedirectResolver: () => TH,
          browserSessionPersistence: () => Xe,
          checkActionCode: () => AM,
          confirmPasswordReset: () => ZM,
          connectAuthEmulator: () => Jw,
          createUserWithEmailAndPassword: () => JM,
          debugErrorMap: () => Cb,
          deleteUser: () => Ie,
          fetchSignInMethodsForEmail: () => GM,
          getAdditionalUserInfo: () => we,
          getAuth: () => Up,
          getIdToken: () => ub,
          getIdTokenResult: () => db,
          getMultiFactorResolver: () => te,
          getRedirectResult: () => jH,
          inMemoryPersistence: () => gw,
          indexedDBLocalPersistence: () => Ne,
          initializeAuth: () => Ww,
          initializeRecaptchaConfig: () => ee,
          isSignInWithEmailLink: () => vM,
          linkWithCredential: () => xM,
          linkWithPhoneNumber: () => Te,
          linkWithPopup: () => UH,
          linkWithRedirect: () => xH,
          multiFactor: () => Fe,
          onAuthStateChanged: () => Ve,
          onIdTokenChanged: () => He,
          parseActionCodeURL: () => kw,
          prodErrorMap: () => Eb,
          reauthenticateWithCredential: () => jM,
          reauthenticateWithPhoneNumber: () => ke,
          reauthenticateWithPopup: () => OH,
          reauthenticateWithRedirect: () => XH,
          reload: () => bw,
          sendEmailVerification: () => qM,
          sendPasswordResetEmail: () => YM,
          sendSignInLinkToEmail: () => NM,
          setPersistence: () => Me,
          signInAnonymously: () => tM,
          signInWithCredential: () => XM,
          signInWithCustomToken: () => KM,
          signInWithEmailAndPassword: () => SM,
          signInWithEmailLink: () => QM,
          signInWithPhoneNumber: () => oe,
          signInWithPopup: () => IH,
          signInWithRedirect: () => zH,
          signOut: () => Le,
          unlink: () => BM,
          updateCurrentUser: () => le,
          updateEmail: () => uM,
          updatePassword: () => dM,
          updatePhoneNumber: () => wH,
          updateProfile: () => iM,
          useDeviceLanguage: () => ge,
          verifyBeforeUpdateEmail: () => aM,
          verifyPasswordResetCode: () => WM
        });
        var eb = Mb(42199),
          Hb = Mb(42192);

        function pb(bb, wb) {
          var Mb = {};
          for (var eb in bb) Object.prototype.hasOwnProperty.call(bb, eb) && wb.indexOf(eb) < 0 && (Mb[eb] = bb[eb]);
          if (null != bb && "function" === typeof Object.getOwnPropertySymbols) {
            var Hb = 0;
            for (eb = Object.getOwnPropertySymbols(bb); Hb < eb.length; Hb++) wb.indexOf(eb[Hb]) < 0 && Object.prototype.propertyIsEnumerable.call(bb, eb[Hb]) && (Mb[eb[Hb]] = bb[eb[Hb]])
          }
          return Mb
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Vb = Mb(42202),
          gb = Mb(42195);
        const lb = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Lb = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Ib = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Ob = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Ub = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function tb() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const Cb = function() {
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
          Eb = tb,
          Fb = new eb.f("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Bb = {
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
          sb = new Vb.g("@firebase/auth");

        function mb(bb) {
          if (sb.logLevel <= Vb.c.ERROR) {
            for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
            sb.error(`Auth (${Hb.f}): ${bb}`, ...Mb)
          }
        }

        function hb(bb) {
          for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
          throw jb(bb, ...Mb)
        }

        function zb(bb) {
          for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
          return jb(bb, ...Mb)
        }

        function Xb(bb, wb, Mb) {
          const Hb = Object.assign(Object.assign({}, Eb()), {
            [wb]: Mb
          });
          return new eb.f("auth", "Firebase", Hb).create(wb, {
            appName: bb.name
          })
        }

        function xb(bb, wb, Mb) {
          if (!(wb instanceof Mb)) throw Mb.name !== wb.constructor.name && hb(bb, "argument-error"), Xb(bb, "argument-error", `Type of ${wb.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function jb(bb) {
          for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
          if ("string" !== typeof bb) {
            const wb = Mb[0],
              eb = [...Mb.slice(1)];
            return eb[0] && (eb[0].appName = bb.name), bb._errorFactory.create(wb, ...eb)
          }
          return Fb.create(bb, ...Mb)
        }

        function Kb(bb, wb) {
          if (!bb) {
            for (var Mb = arguments.length, eb = new Array(Mb > 2 ? Mb - 2 : 0), Hb = 2; Hb < Mb; Hb++) eb[Hb - 2] = arguments[Hb];
            throw jb(wb, ...eb)
          }
        }

        function rb(bb) {
          const wb = "INTERNAL ASSERTION FAILED: " + bb;
          throw mb(wb), new Error(wb)
        }

        function Rb(bb, wb) {
          bb || rb(wb)
        }

        function Db() {
          var bb;
          return "undefined" !== typeof self && (null === (bb = self.location) || void 0 === bb ? void 0 : bb.href) || ""
        }

        function cb() {
          return "http:" === Yb() || "https:" === Yb()
        }

        function Yb() {
          var bb;
          return "undefined" !== typeof self && (null === (bb = self.location) || void 0 === bb ? void 0 : bb.protocol) || null
        }
        class Zb {
          constructor(bb, wb) {
            this.shortDelay = bb, this.longDelay = wb, Rb(wb > bb, "Short delay should be less than long delay!"), this.isMobile = (0, eb.Y)() || (0, eb._)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (cb() || (0, eb.T)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function fb(bb, wb) {
          Rb(bb.emulator, "Emulator should always be set here");
          const {
            url: Mb
          } = bb.emulator;
          return wb ? `${Mb}${wb.startsWith("/")?wb.slice(1):wb}` : Mb
        }
        class Ab {
          static initialize(bb, wb, Mb) {
            this.fetchImpl = bb, wb && (this.headersImpl = wb), Mb && (this.responseImpl = Mb)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void rb("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void rb("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void rb("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Wb = {
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
          Jb = new Zb(3e4, 6e4);

        function Sb(bb, wb) {
          return bb.tenantId && !wb.tenantId ? Object.assign(Object.assign({}, wb), {
            tenantId: bb.tenantId
          }) : wb
        }
        async function Nb(bb, wb, Mb, Hb) {
          return vb(bb, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let pb = {},
              Vb = {};
            Hb && ("GET" === wb ? Vb = Hb : pb = {
              body: JSON.stringify(Hb)
            });
            const gb = (0, eb.db)(Object.assign({
                key: bb.config.apiKey
              }, Vb)).slice(1),
              lb = await bb._getAdditionalHeaders();
            return lb["Content-Type"] = "application/json", bb.languageCode && (lb["X-Firebase-Locale"] = bb.languageCode), Ab.fetch()(Gb(bb, bb.config.apiHost, Mb, gb), Object.assign({
              method: wb,
              headers: lb,
              referrerPolicy: "no-referrer"
            }, pb))
          }))
        }
        async function vb(bb, wb, Mb) {
          bb._canInitEmulator = !1;
          const Hb = Object.assign(Object.assign({}, Wb), wb);
          try {
            const wb = new qb(bb),
              eb = await Promise.race([Mb(), wb.promise]);
            wb.clearNetworkTimeout();
            const pb = await eb.json();
            if ("needConfirmation" in pb) throw ab(bb, "account-exists-with-different-credential", pb);
            if (eb.ok && !("errorMessage" in pb)) return pb;
            {
              const wb = eb.ok ? pb.errorMessage : pb.error.message,
                [Mb, Vb] = wb.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === Mb) throw ab(bb, "credential-already-in-use", pb);
              if ("EMAIL_EXISTS" === Mb) throw ab(bb, "email-already-in-use", pb);
              if ("USER_DISABLED" === Mb) throw ab(bb, "user-disabled", pb);
              const gb = Hb[Mb] || Mb.toLowerCase().replace(/[_\s]+/g, "-");
              if (Vb) throw Xb(bb, gb, Vb);
              hb(bb, gb)
            }
          } catch (pb) {
            if (pb instanceof eb.j) throw pb;
            hb(bb, "network-request-failed", {
              message: String(pb)
            })
          }
        }
        async function Qb(bb, wb, Mb, eb) {
          let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const pb = await Nb(bb, wb, Mb, eb, Hb);
          return "mfaPendingCredential" in pb && hb(bb, "multi-factor-auth-required", {
            _serverResponse: pb
          }), pb
        }

        function Gb(bb, wb, Mb, eb) {
          const Hb = `${wb}${Mb}?${eb}`;
          return bb.config.emulator ? fb(bb.config, Hb) : `${bb.config.apiScheme}://${Hb}`
        }
        class qb {
          constructor(bb) {
            this.auth = bb, this.timer = null, this.promise = new Promise(((bb, wb) => {
              this.timer = setTimeout((() => wb(zb(this.auth, "network-request-failed"))), Jb.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function ab(bb, wb, Mb) {
          const eb = {
            appName: bb.name
          };
          Mb.email && (eb.email = Mb.email), Mb.phoneNumber && (eb.phoneNumber = Mb.phoneNumber);
          const Hb = zb(bb, wb, eb);
          return Hb.customData._tokenResponse = Mb, Hb
        }

        function ib(bb) {
          if (bb) try {
            const wb = new Date(Number(bb));
            if (!isNaN(wb.getTime())) return wb.toUTCString()
          } catch (wb) {}
        }

        function ub(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, eb.N)(bb).getIdToken(wb)
        }
        async function db(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const Mb = (0, eb.N)(bb),
            Hb = await Mb.getIdToken(wb),
            pb = nb(Hb);
          Kb(pb && pb.exp && pb.auth_time && pb.iat, Mb.auth, "internal-error");
          const Vb = "object" === typeof pb.firebase ? pb.firebase : void 0,
            gb = null === Vb || void 0 === Vb ? void 0 : Vb.sign_in_provider;
          return {
            claims: pb,
            token: Hb,
            authTime: ib(Pb(pb.auth_time)),
            issuedAtTime: ib(Pb(pb.iat)),
            expirationTime: ib(Pb(pb.exp)),
            signInProvider: gb || null,
            signInSecondFactor: (null === Vb || void 0 === Vb ? void 0 : Vb.sign_in_second_factor) || null
          }
        }

        function Pb(bb) {
          return 1e3 * Number(bb)
        }

        function nb(bb) {
          const [wb, Mb, Hb] = bb.split(".");
          if (void 0 === wb || void 0 === Mb || void 0 === Hb) return mb("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const bb = (0, eb.p)(Mb);
            return bb ? JSON.parse(bb) : (mb("Failed to decode base64 JWT payload"), null)
          } catch (pb) {
            return mb("Caught error parsing JWT payload as JSON", null === pb || void 0 === pb ? void 0 : pb.toString()), null
          }
        }
        async function yb(bb, wb) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return wb;
          try {
            return await wb
          } catch (Mb) {
            throw Mb instanceof eb.j && function(bb) {
              let {
                code: wb
              } = bb;
              return "auth/user-disabled" === wb || "auth/user-token-expired" === wb
            }(Mb) && bb.auth.currentUser === bb && await bb.auth.signOut(), Mb
          }
        }
        class ob {
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
            var wb;
            if (bb) {
              const bb = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), bb
            } {
              this.errorBackoff = 3e4;
              const bb = (null !== (wb = this.user.stsTokenManager.expirationTime) && void 0 !== wb ? wb : 0) - Date.now() - 3e5;
              return Math.max(0, bb)
            }
          }
          schedule() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const wb = this.getInterval(bb);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), wb)
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
        class Tb {
          constructor(bb, wb) {
            this.createdAt = bb, this.lastLoginAt = wb, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = ib(this.lastLoginAt), this.creationTime = ib(this.createdAt)
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
        async function kb(bb) {
          var wb;
          const Mb = bb.auth,
            eb = await bb.getIdToken(),
            Hb = await yb(bb, async function(bb, wb) {
              return Nb(bb, "POST", "/v1/accounts:lookup", wb)
            }(Mb, {
              idToken: eb
            }));
          Kb(null === Hb || void 0 === Hb ? void 0 : Hb.users.length, Mb, "internal-error");
          const Vb = Hb.users[0];
          bb._notifyReloadListener(Vb);
          const gb = (null === (wb = Vb.providerUserInfo) || void 0 === wb ? void 0 : wb.length) ? Vb.providerUserInfo.map((bb => {
            var {
              providerId: wb
            } = bb, Mb = pb(bb, ["providerId"]);
            return {
              providerId: wb,
              uid: Mb.rawId || "",
              displayName: Mb.displayName || null,
              email: Mb.email || null,
              phoneNumber: Mb.phoneNumber || null,
              photoURL: Mb.photoUrl || null
            }
          })) : [];
          const lb = (Lb = bb.providerData, Ib = gb, [...Lb.filter((bb => !Ib.some((wb => wb.providerId === bb.providerId)))), ...Ib]);
          var Lb, Ib;
          const Ob = bb.isAnonymous,
            Ub = !(bb.email && Vb.passwordHash) && !(null === lb || void 0 === lb ? void 0 : lb.length),
            tb = !!Ob && Ub,
            Cb = {
              uid: Vb.localId,
              displayName: Vb.displayName || null,
              photoURL: Vb.photoUrl || null,
              email: Vb.email || null,
              emailVerified: Vb.emailVerified || !1,
              phoneNumber: Vb.phoneNumber || null,
              tenantId: Vb.tenantId || null,
              providerData: lb,
              metadata: new Tb(Vb.createdAt, Vb.lastLoginAt),
              isAnonymous: tb
            };
          Object.assign(bb, Cb)
        }
        async function bw(bb) {
          const wb = (0, eb.N)(bb);
          await kb(wb), await wb.auth._persistUserIfCurrent(wb), wb.auth._notifyListenersIfCurrent(wb)
        }
        class ww {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(bb) {
            Kb(bb.idToken, "internal-error"), Kb("undefined" !== typeof bb.idToken, "internal-error"), Kb("undefined" !== typeof bb.refreshToken, "internal-error");
            const wb = "expiresIn" in bb && "undefined" !== typeof bb.expiresIn ? Number(bb.expiresIn) : function(bb) {
              const wb = nb(bb);
              return Kb(wb, "internal-error"), Kb("undefined" !== typeof wb.exp, "internal-error"), Kb("undefined" !== typeof wb.iat, "internal-error"), Number(wb.exp) - Number(wb.iat)
            }(bb.idToken);
            this.updateTokensAndExpiration(bb.idToken, bb.refreshToken, wb)
          }
          async getToken(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Kb(!this.accessToken || this.refreshToken, bb, "user-token-expired"), wb || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(bb, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(bb, wb) {
            const {
              accessToken: Mb,
              refreshToken: Hb,
              expiresIn: pb
            } = await async function(bb, wb) {
              const Mb = await vb(bb, {}, (async () => {
                const Mb = (0, eb.db)({
                    grant_type: "refresh_token",
                    refresh_token: wb
                  }).slice(1),
                  {
                    tokenApiHost: Hb,
                    apiKey: pb
                  } = bb.config,
                  Vb = Gb(bb, Hb, "/v1/token", `key=${pb}`),
                  gb = await bb._getAdditionalHeaders();
                return gb["Content-Type"] = "application/x-www-form-urlencoded", Ab.fetch()(Vb, {
                  method: "POST",
                  headers: gb,
                  body: Mb
                })
              }));
              return {
                accessToken: Mb.access_token,
                expiresIn: Mb.expires_in,
                refreshToken: Mb.refresh_token
              }
            }(bb, wb);
            this.updateTokensAndExpiration(Mb, Hb, Number(pb))
          }
          updateTokensAndExpiration(bb, wb, Mb) {
            this.refreshToken = wb || null, this.accessToken = bb || null, this.expirationTime = Date.now() + 1e3 * Mb
          }
          static fromJSON(bb, wb) {
            const {
              refreshToken: Mb,
              accessToken: eb,
              expirationTime: Hb
            } = wb, pb = new ww;
            return Mb && (Kb("string" === typeof Mb, "internal-error", {
              appName: bb
            }), pb.refreshToken = Mb), eb && (Kb("string" === typeof eb, "internal-error", {
              appName: bb
            }), pb.accessToken = eb), Hb && (Kb("number" === typeof Hb, "internal-error", {
              appName: bb
            }), pb.expirationTime = Hb), pb
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
            return Object.assign(new ww, this.toJSON())
          }
          _performRefresh() {
            return rb("not implemented")
          }
        }

        function Mw(bb, wb) {
          Kb("string" === typeof bb || "undefined" === typeof bb, "internal-error", {
            appName: wb
          })
        }
        class ew {
          constructor(bb) {
            var {
              uid: wb,
              auth: Mb,
              stsTokenManager: eb
            } = bb, Hb = pb(bb, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new ob(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = wb, this.auth = Mb, this.stsTokenManager = eb, this.accessToken = eb.accessToken, this.displayName = Hb.displayName || null, this.email = Hb.email || null, this.emailVerified = Hb.emailVerified || !1, this.phoneNumber = Hb.phoneNumber || null, this.photoURL = Hb.photoURL || null, this.isAnonymous = Hb.isAnonymous || !1, this.tenantId = Hb.tenantId || null, this.providerData = Hb.providerData ? [...Hb.providerData] : [], this.metadata = new Tb(Hb.createdAt || void 0, Hb.lastLoginAt || void 0)
          }
          async getIdToken(bb) {
            const wb = await yb(this, this.stsTokenManager.getToken(this.auth, bb));
            return Kb(wb, this.auth, "internal-error"), this.accessToken !== wb && (this.accessToken = wb, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), wb
          }
          getIdTokenResult(bb) {
            return db(this, bb)
          }
          reload() {
            return bw(this)
          }
          _assign(bb) {
            this !== bb && (Kb(this.uid === bb.uid, this.auth, "internal-error"), this.displayName = bb.displayName, this.photoURL = bb.photoURL, this.email = bb.email, this.emailVerified = bb.emailVerified, this.phoneNumber = bb.phoneNumber, this.isAnonymous = bb.isAnonymous, this.tenantId = bb.tenantId, this.providerData = bb.providerData.map((bb => Object.assign({}, bb))), this.metadata._copy(bb.metadata), this.stsTokenManager._assign(bb.stsTokenManager))
          }
          _clone(bb) {
            const wb = new ew(Object.assign(Object.assign({}, this), {
              auth: bb,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return wb.metadata._copy(this.metadata), wb
          }
          _onReload(bb) {
            Kb(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = bb, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Mb = !1;
            bb.idToken && bb.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(bb), Mb = !0), wb && await kb(this), await this.auth._persistUserIfCurrent(this), Mb && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const bb = await this.getIdToken();
            return await yb(this, async function(bb, wb) {
              return Nb(bb, "POST", "/v1/accounts:delete", wb)
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
          static _fromJSON(bb, wb) {
            var Mb, eb, Hb, pb, Vb, gb, lb, Lb;
            const Ib = null !== (Mb = wb.displayName) && void 0 !== Mb ? Mb : void 0,
              Ob = null !== (eb = wb.email) && void 0 !== eb ? eb : void 0,
              Ub = null !== (Hb = wb.phoneNumber) && void 0 !== Hb ? Hb : void 0,
              tb = null !== (pb = wb.photoURL) && void 0 !== pb ? pb : void 0,
              Cb = null !== (Vb = wb.tenantId) && void 0 !== Vb ? Vb : void 0,
              Eb = null !== (gb = wb._redirectEventId) && void 0 !== gb ? gb : void 0,
              Fb = null !== (lb = wb.createdAt) && void 0 !== lb ? lb : void 0,
              Bb = null !== (Lb = wb.lastLoginAt) && void 0 !== Lb ? Lb : void 0,
              {
                uid: sb,
                emailVerified: mb,
                isAnonymous: hb,
                providerData: zb,
                stsTokenManager: Xb
              } = wb;
            Kb(sb && Xb, bb, "internal-error");
            const xb = ww.fromJSON(this.name, Xb);
            Kb("string" === typeof sb, bb, "internal-error"), Mw(Ib, bb.name), Mw(Ob, bb.name), Kb("boolean" === typeof mb, bb, "internal-error"), Kb("boolean" === typeof hb, bb, "internal-error"), Mw(Ub, bb.name), Mw(tb, bb.name), Mw(Cb, bb.name), Mw(Eb, bb.name), Mw(Fb, bb.name), Mw(Bb, bb.name);
            const jb = new ew({
              uid: sb,
              auth: bb,
              email: Ob,
              emailVerified: mb,
              displayName: Ib,
              isAnonymous: hb,
              photoURL: tb,
              phoneNumber: Ub,
              tenantId: Cb,
              stsTokenManager: xb,
              createdAt: Fb,
              lastLoginAt: Bb
            });
            return zb && Array.isArray(zb) && (jb.providerData = zb.map((bb => Object.assign({}, bb)))), Eb && (jb._redirectEventId = Eb), jb
          }
          static async _fromIdTokenResponse(bb, wb) {
            let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const eb = new ww;
            eb.updateFromServerResponse(wb);
            const Hb = new ew({
              uid: wb.localId,
              auth: bb,
              stsTokenManager: eb,
              isAnonymous: Mb
            });
            return await kb(Hb), Hb
          }
        }
        const Hw = new Map;

        function pw(bb) {
          Rb(bb instanceof Function, "Expected a class definition");
          let wb = Hw.get(bb);
          return wb ? (Rb(wb instanceof bb, "Instance stored in cache mismatched with class"), wb) : (wb = new bb, Hw.set(bb, wb), wb)
        }
        class Vw {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(bb, wb) {
            this.storage[bb] = wb
          }
          async _get(bb) {
            const wb = this.storage[bb];
            return void 0 === wb ? null : wb
          }
          async _remove(bb) {
            delete this.storage[bb]
          }
          _addListener(bb, wb) {}
          _removeListener(bb, wb) {}
        }
        Vw.type = "NONE";
        const gw = Vw;

        function lw(bb, wb, Mb) {
          return `firebase:${bb}:${wb}:${Mb}`
        }
        class Lw {
          constructor(bb, wb, Mb) {
            this.persistence = bb, this.auth = wb, this.userKey = Mb;
            const {
              config: eb,
              name: Hb
            } = this.auth;
            this.fullUserKey = lw(this.userKey, eb.apiKey, Hb), this.fullPersistenceKey = lw("persistence", eb.apiKey, Hb), this.boundEventHandler = wb._onStorageEvent.bind(wb), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(bb) {
            return this.persistence._set(this.fullUserKey, bb.toJSON())
          }
          async getCurrentUser() {
            const bb = await this.persistence._get(this.fullUserKey);
            return bb ? ew._fromJSON(this.auth, bb) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(bb) {
            if (this.persistence === bb) return;
            const wb = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = bb, wb ? this.setCurrentUser(wb) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(bb, wb) {
            let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!wb.length) return new Lw(pw(gw), bb, Mb);
            const eb = (await Promise.all(wb.map((async bb => {
              if (await bb._isAvailable()) return bb
            })))).filter((bb => bb));
            let Hb = eb[0] || pw(gw);
            const pb = lw(Mb, bb.config.apiKey, bb.name);
            let Vb = null;
            for (const Lb of wb) try {
              const wb = await Lb._get(pb);
              if (wb) {
                const Mb = ew._fromJSON(bb, wb);
                Lb !== Hb && (Vb = Mb), Hb = Lb;
                break
              }
            } catch (lb) {}
            const gb = eb.filter((bb => bb._shouldAllowMigration));
            return Hb._shouldAllowMigration && gb.length ? (Hb = gb[0], Vb && await Hb._set(pb, Vb.toJSON()), await Promise.all(wb.map((async bb => {
              if (bb !== Hb) try {
                await bb._remove(pb)
              } catch (lb) {}
            }))), new Lw(Hb, bb, Mb)) : new Lw(Hb, bb, Mb)
          }
        }

        function Iw(bb) {
          const wb = bb.toLowerCase();
          if (wb.includes("opera/") || wb.includes("opr/") || wb.includes("opios/")) return "Opera";
          if (Cw(wb)) return "IEMobile";
          if (wb.includes("msie") || wb.includes("trident/")) return "IE";
          if (wb.includes("edge/")) return "Edge";
          if (Ow(wb)) return "Firefox";
          if (wb.includes("silk/")) return "Silk";
          if (Fw(wb)) return "Blackberry";
          if (Bw(wb)) return "Webos";
          if (Uw(wb)) return "Safari";
          if ((wb.includes("chrome/") || tw(wb)) && !wb.includes("edge/")) return "Chrome";
          if (Ew(wb)) return "Android";
          {
            const wb = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              Mb = bb.match(wb);
            if (2 === (null === Mb || void 0 === Mb ? void 0 : Mb.length)) return Mb[1]
          }
          return "Other"
        }

        function Ow() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)();
          return /firefox\//i.test(bb)
        }

        function Uw() {
          const bb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)()).toLowerCase();
          return bb.includes("safari/") && !bb.includes("chrome/") && !bb.includes("crios/") && !bb.includes("android")
        }

        function tw() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)();
          return /crios\//i.test(bb)
        }

        function Cw() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)();
          return /iemobile/i.test(bb)
        }

        function Ew() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)();
          return /android/i.test(bb)
        }

        function Fw() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)();
          return /blackberry/i.test(bb)
        }

        function Bw() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)();
          return /webos/i.test(bb)
        }

        function sw() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)();
          return /iphone|ipad|ipod/i.test(bb) || /macintosh/i.test(bb) && /mobile/i.test(bb)
        }

        function mw() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)();
          return sw(bb) || Ew(bb) || Bw(bb) || Fw(bb) || /windows phone/i.test(bb) || Cw(bb)
        }

        function hw(bb) {
          let wb, Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (bb) {
            case "Browser":
              wb = Iw((0, eb.R)());
              break;
            case "Worker":
              wb = `${Iw((0,eb.R)())}-${bb}`;
              break;
            default:
              wb = bb
          }
          const pb = Mb.length ? Mb.join(",") : "FirebaseCore-web";
          return `${wb}/JsCore/${Hb.f}/${pb}`
        }
        async function zw(bb, wb) {
          return Nb(bb, "GET", "/v2/recaptchaConfig", Sb(bb, wb))
        }

        function Xw(bb) {
          return void 0 !== bb && void 0 !== bb.getResponse
        }

        function xw(bb) {
          return void 0 !== bb && void 0 !== bb.enterprise
        }
        class jw {
          constructor(bb) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === bb.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = bb.recaptchaKey.split("/")[3], this.emailPasswordEnabled = bb.recaptchaEnforcementState.some((bb => "EMAIL_PASSWORD_PROVIDER" === bb.provider && "OFF" !== bb.enforcementState))
          }
        }

        function Kw(bb) {
          return new Promise(((wb, Mb) => {
            const eb = document.createElement("script");
            eb.setAttribute("src", bb), eb.onload = wb, eb.onerror = bb => {
                const wb = zb("internal-error");
                wb.customData = bb, Mb(wb)
              }, eb.type = "text/javascript", eb.charset = "UTF-8",
              function() {
                var bb, wb;
                return null !== (wb = null === (bb = document.getElementsByTagName("head")) || void 0 === bb ? void 0 : bb[0]) && void 0 !== wb ? wb : document
              }().appendChild(eb)
          }))
        }

        function rw(bb) {
          return `__${bb}${Math.floor(1e6*Math.random())}`
        }
        class Rw {
          constructor(bb) {
            this.type = "recaptcha-enterprise", this.auth = fw(bb)
          }
          async verify() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function Mb(wb, Mb, eb) {
              const Hb = window.grecaptcha;
              xw(Hb) ? Hb.enterprise.ready((() => {
                Hb.enterprise.execute(wb, {
                  action: bb
                }).then((bb => {
                  Mb(bb)
                })).catch((() => {
                  Mb("NO_RECAPTCHA")
                }))
              })) : eb(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((bb, eb) => {
              (async function(bb) {
                if (!wb) {
                  if (null == bb.tenantId && null != bb._agentRecaptchaConfig) return bb._agentRecaptchaConfig.siteKey;
                  if (null != bb.tenantId && void 0 !== bb._tenantRecaptchaConfigs[bb.tenantId]) return bb._tenantRecaptchaConfigs[bb.tenantId].siteKey
                }
                return new Promise((async (wb, Mb) => {
                  zw(bb, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((eb => {
                    if (void 0 !== eb.recaptchaKey) {
                      const Mb = new jw(eb);
                      return null == bb.tenantId ? bb._agentRecaptchaConfig = Mb : bb._tenantRecaptchaConfigs[bb.tenantId] = Mb, wb(Mb.siteKey)
                    }
                    Mb(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((bb => {
                    Mb(bb)
                  }))
                }))
              })(this.auth).then((Hb => {
                if (!wb && xw(window.grecaptcha)) Mb(Hb, bb, eb);
                else {
                  if ("undefined" === typeof window) return void eb(new Error("RecaptchaVerifier is only supported in browser"));
                  Kw("https://www.google.com/recaptcha/enterprise.js?render=" + Hb).then((() => {
                    Mb(Hb, bb, eb)
                  })).catch((bb => {
                    eb(bb)
                  }))
                }
              })).catch((bb => {
                eb(bb)
              }))
            }))
          }
        }
        async function Dw(bb, wb, Mb) {
          let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Hb = new Rw(bb);
          let pb;
          try {
            pb = await Hb.verify(Mb)
          } catch (gb) {
            pb = await Hb.verify(Mb, !0)
          }
          const Vb = Object.assign({}, wb);
          return eb ? Object.assign(Vb, {
            captchaResp: pb
          }) : Object.assign(Vb, {
            captchaResponse: pb
          }), Object.assign(Vb, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Vb, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Vb
        }
        class Yw {
          constructor(bb) {
            this.auth = bb, this.queue = []
          }
          pushCallback(bb, wb) {
            const Mb = wb => new Promise(((Mb, eb) => {
              try {
                Mb(bb(wb))
              } catch (Hb) {
                eb(Hb)
              }
            }));
            Mb.onAbort = wb, this.queue.push(Mb);
            const eb = this.queue.length - 1;
            return () => {
              this.queue[eb] = () => Promise.resolve()
            }
          }
          async runMiddleware(bb) {
            if (this.auth.currentUser === bb) return;
            const wb = [];
            try {
              for (const Mb of this.queue) await Mb(bb), Mb.onAbort && wb.push(Mb.onAbort)
            } catch (Mb) {
              wb.reverse();
              for (const bb of wb) try {
                bb()
              } catch (eb) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === Mb || void 0 === Mb ? void 0 : Mb.message
              })
            }
          }
        }
        class Zw {
          constructor(bb, wb, Mb, eb) {
            this.app = bb, this.heartbeatServiceProvider = wb, this.appCheckServiceProvider = Mb, this.config = eb, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Aw(this), this.idTokenSubscription = new Aw(this), this.beforeStateQueue = new Yw(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Fb, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = bb.name, this.clientVersion = eb.sdkClientVersion
          }
          _initializeWithPersistence(bb, wb) {
            return wb && (this._popupRedirectResolver = pw(wb)), this._initializationPromise = this.queue((async () => {
              var Mb, eb;
              if (!this._deleted && (this.persistenceManager = await Lw.create(this, bb), !this._deleted)) {
                if (null === (Mb = this._popupRedirectResolver) || void 0 === Mb ? void 0 : Mb._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Hb) {}
                await this.initializeCurrentUser(wb), this.lastNotifiedUid = (null === (eb = this.currentUser) || void 0 === eb ? void 0 : eb.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const bb = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || bb ? this.currentUser && bb && this.currentUser.uid === bb.uid ? (this._currentUser._assign(bb), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(bb, !0) : void 0
          }
          async initializeCurrentUser(bb) {
            var wb;
            const Mb = await this.assertedPersistence.getCurrentUser();
            let eb = Mb,
              Hb = !1;
            if (bb && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const Mb = null === (wb = this.redirectUser) || void 0 === wb ? void 0 : wb._redirectEventId,
                pb = null === eb || void 0 === eb ? void 0 : eb._redirectEventId,
                Vb = await this.tryRedirectSignIn(bb);
              Mb && Mb !== pb || !(null === Vb || void 0 === Vb ? void 0 : Vb.user) || (eb = Vb.user, Hb = !0)
            }
            if (!eb) return this.directlySetCurrentUser(null);
            if (!eb._redirectEventId) {
              if (Hb) try {
                await this.beforeStateQueue.runMiddleware(eb)
              } catch (pb) {
                eb = Mb, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(pb)))
              }
              return eb ? this.reloadAndSetCurrentUserOrClear(eb) : this.directlySetCurrentUser(null)
            }
            return Kb(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === eb._redirectEventId ? this.directlySetCurrentUser(eb) : this.reloadAndSetCurrentUserOrClear(eb)
          }
          async tryRedirectSignIn(bb) {
            let wb = null;
            try {
              wb = await this._popupRedirectResolver._completeRedirectFn(this, bb, !0)
            } catch (Mb) {
              await this._setRedirectUser(null)
            }
            return wb
          }
          async reloadAndSetCurrentUserOrClear(bb) {
            try {
              await kb(bb)
            } catch (wb) {
              if ("auth/network-request-failed" !== (null === wb || void 0 === wb ? void 0 : wb.code)) return this.directlySetCurrentUser(null)
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
            const wb = bb ? (0, eb.N)(bb) : null;
            return wb && Kb(wb.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(wb && wb._clone(this))
          }
          async _updateCurrentUser(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return bb && Kb(this.tenantId === bb.tenantId, this, "tenant-id-mismatch"), wb || await this.beforeStateQueue.runMiddleware(bb), this.queue((async () => {
              await this.directlySetCurrentUser(bb), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(bb) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(pw(bb))
            }))
          }
          async initializeRecaptchaConfig() {
            const bb = await zw(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              wb = new jw(bb);
            if (null == this.tenantId ? this._agentRecaptchaConfig = wb : this._tenantRecaptchaConfigs[this.tenantId] = wb, wb.emailPasswordEnabled) {
              new Rw(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(bb) {
            this._errorFactory = new eb.f("auth", "Firebase", bb())
          }
          onAuthStateChanged(bb, wb, Mb) {
            return this.registerStateListener(this.authStateSubscription, bb, wb, Mb)
          }
          beforeAuthStateChanged(bb, wb) {
            return this.beforeStateQueue.pushCallback(bb, wb)
          }
          onIdTokenChanged(bb, wb, Mb) {
            return this.registerStateListener(this.idTokenSubscription, bb, wb, Mb)
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
          async _setRedirectUser(bb, wb) {
            const Mb = await this.getOrInitRedirectPersistenceManager(wb);
            return null === bb ? Mb.removeCurrentUser() : Mb.setCurrentUser(bb)
          }
          async getOrInitRedirectPersistenceManager(bb) {
            if (!this.redirectPersistenceManager) {
              const wb = bb && pw(bb) || this._popupRedirectResolver;
              Kb(wb, this, "argument-error"), this.redirectPersistenceManager = await Lw.create(this, [pw(wb._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(bb) {
            var wb, Mb;
            return this._isInitialized && await this.queue((async () => {})), (null === (wb = this._currentUser) || void 0 === wb ? void 0 : wb._redirectEventId) === bb ? this._currentUser : (null === (Mb = this.redirectUser) || void 0 === Mb ? void 0 : Mb._redirectEventId) === bb ? this.redirectUser : null
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
            var bb, wb;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const Mb = null !== (wb = null === (bb = this.currentUser) || void 0 === bb ? void 0 : bb.uid) && void 0 !== wb ? wb : null;
            this.lastNotifiedUid !== Mb && (this.lastNotifiedUid = Mb, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(bb, wb, Mb, eb) {
            if (this._deleted) return () => {};
            const Hb = "function" === typeof wb ? wb : wb.next.bind(wb),
              pb = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Kb(pb, this, "internal-error"), pb.then((() => Hb(this.currentUser))), "function" === typeof wb ? bb.addObserver(wb, Mb, eb) : bb.addObserver(wb)
          }
          async directlySetCurrentUser(bb) {
            this.currentUser && this.currentUser !== bb && this._currentUser._stopProactiveRefresh(), bb && this.isProactiveRefreshEnabled && bb._startProactiveRefresh(), this.currentUser = bb, bb ? await this.assertedPersistence.setCurrentUser(bb) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(bb) {
            return this.operations = this.operations.then(bb, bb), this.operations
          }
          get assertedPersistence() {
            return Kb(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(bb) {
            bb && !this.frameworks.includes(bb) && (this.frameworks.push(bb), this.frameworks.sort(), this.clientVersion = hw(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var bb;
            const wb = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (wb["X-Firebase-gmpid"] = this.app.options.appId);
            const Mb = await (null === (bb = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === bb ? void 0 : bb.getHeartbeatsHeader());
            Mb && (wb["X-Firebase-Client"] = Mb);
            const eb = await this._getAppCheckToken();
            return eb && (wb["X-Firebase-AppCheck"] = eb), wb
          }
          async _getAppCheckToken() {
            var bb;
            const wb = await (null === (bb = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === bb ? void 0 : bb.getToken());
            return (null === wb || void 0 === wb ? void 0 : wb.error) && function(bb) {
              if (sb.logLevel <= Vb.c.WARN) {
                for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
                sb.warn(`Auth (${Hb.f}): ${bb}`, ...Mb)
              }
            }(`Error while retrieving App Check token: ${wb.error}`), null === wb || void 0 === wb ? void 0 : wb.token
          }
        }

        function fw(bb) {
          return (0, eb.N)(bb)
        }
        class Aw {
          constructor(bb) {
            this.auth = bb, this.observer = null, this.addObserver = (0, eb.w)((bb => this.observer = bb))
          }
          get next() {
            return Kb(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Ww(bb, wb) {
          const Mb = (0, Hb.w)(bb, "auth");
          if (Mb.isInitialized()) {
            const bb = Mb.getImmediate(),
              Hb = Mb.getOptions();
            if ((0, eb.x)(Hb, null !== wb && void 0 !== wb ? wb : {})) return bb;
            hb(bb, "already-initialized")
          }
          return Mb.initialize({
            options: wb
          })
        }

        function Jw(bb, wb, Mb) {
          const eb = fw(bb);
          Kb(eb._canInitEmulator, eb, "emulator-config-failed"), Kb(/^https?:\/\//.test(wb), eb, "invalid-emulator-scheme");
          const Hb = !!(null === Mb || void 0 === Mb ? void 0 : Mb.disableWarnings),
            pb = Sw(wb),
            {
              host: Vb,
              port: gb
            } = function(bb) {
              const wb = Sw(bb),
                Mb = /(\/\/)?([^?#/]+)/.exec(bb.substr(wb.length));
              if (!Mb) return {
                host: "",
                port: null
              };
              const eb = Mb[2].split("@").pop() || "",
                Hb = /^(\[[^\]]+\])(:|$)/.exec(eb);
              if (Hb) {
                const bb = Hb[1];
                return {
                  host: bb,
                  port: Nw(eb.substr(bb.length + 1))
                }
              } {
                const [bb, wb] = eb.split(":");
                return {
                  host: bb,
                  port: Nw(wb)
                }
              }
            }(wb),
            lb = null === gb ? "" : `:${gb}`;
          eb.config.emulator = {
            url: `${pb}//${Vb}${lb}/`
          }, eb.settings.appVerificationDisabledForTesting = !0, eb.emulatorConfig = Object.freeze({
            host: Vb,
            port: gb,
            protocol: pb.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Hb
            })
          }), Hb || function() {
            function bb() {
              const bb = document.createElement("p"),
                wb = bb.style;
              bb.innerText = "Running in emulator mode. Do not use with production credentials.", wb.position = "fixed", wb.width = "100%", wb.backgroundColor = "#ffffff", wb.border = ".1em solid #000000", wb.color = "#b50000", wb.bottom = "0px", wb.left = "0px", wb.margin = "0px", wb.zIndex = "10000", wb.textAlign = "center", bb.classList.add("firebase-emulator-warning"), document.body.appendChild(bb)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", bb) : bb())
          }()
        }

        function Sw(bb) {
          const wb = bb.indexOf(":");
          return wb < 0 ? "" : bb.substr(0, wb + 1)
        }

        function Nw(bb) {
          if (!bb) return null;
          const wb = Number(bb);
          return isNaN(wb) ? null : wb
        }
        class vw {
          constructor(bb, wb) {
            this.providerId = bb, this.signInMethod = wb
          }
          toJSON() {
            return rb("not implemented")
          }
          _getIdTokenResponse(bb) {
            return rb("not implemented")
          }
          _linkToIdToken(bb, wb) {
            return rb("not implemented")
          }
          _getReauthenticationResolver(bb) {
            return rb("not implemented")
          }
        }
        async function Qw(bb, wb) {
          return Nb(bb, "POST", "/v1/accounts:resetPassword", Sb(bb, wb))
        }
        async function Gw(bb, wb) {
          return Nb(bb, "POST", "/v1/accounts:update", wb)
        }
        async function qw(bb, wb) {
          return Qb(bb, "POST", "/v1/accounts:signInWithPassword", Sb(bb, wb))
        }
        async function aw(bb, wb) {
          return Nb(bb, "POST", "/v1/accounts:sendOobCode", Sb(bb, wb))
        }
        async function iw(bb, wb) {
          return aw(bb, wb)
        }
        async function uw(bb, wb) {
          return aw(bb, wb)
        }
        class dw extends vw {
          constructor(bb, wb, Mb) {
            let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", Mb), this._email = bb, this._password = wb, this._tenantId = eb
          }
          static _fromEmailAndPassword(bb, wb) {
            return new dw(bb, wb, "password")
          }
          static _fromEmailAndCode(bb, wb) {
            return new dw(bb, wb, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const wb = "string" === typeof bb ? JSON.parse(bb) : bb;
            if ((null === wb || void 0 === wb ? void 0 : wb.email) && (null === wb || void 0 === wb ? void 0 : wb.password)) {
              if ("password" === wb.signInMethod) return this._fromEmailAndPassword(wb.email, wb.password);
              if ("emailLink" === wb.signInMethod) return this._fromEmailAndCode(wb.email, wb.password, wb.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(bb) {
            var wb;
            switch (this.signInMethod) {
              case "password":
                const Mb = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (wb = bb._getRecaptchaConfig()) || void 0 === wb ? void 0 : wb.emailPasswordEnabled) {
                  const wb = await Dw(bb, Mb, "signInWithPassword");
                  return qw(bb, wb)
                }
                return qw(bb, Mb).catch((async wb => {
                  if ("auth/missing-recaptcha-token" === wb.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const wb = await Dw(bb, Mb, "signInWithPassword");
                    return qw(bb, wb)
                  }
                  return Promise.reject(wb)
                }));
              case "emailLink":
                return async function(bb, wb) {
                  return Qb(bb, "POST", "/v1/accounts:signInWithEmailLink", Sb(bb, wb))
                }(bb, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                hb(bb, "internal-error")
            }
          }
          async _linkToIdToken(bb, wb) {
            switch (this.signInMethod) {
              case "password":
                return Gw(bb, {
                  idToken: wb,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(bb, wb) {
                  return Qb(bb, "POST", "/v1/accounts:signInWithEmailLink", Sb(bb, wb))
                }(bb, {
                  idToken: wb,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                hb(bb, "internal-error")
            }
          }
          _getReauthenticationResolver(bb) {
            return this._getIdTokenResponse(bb)
          }
        }
        async function Pw(bb, wb) {
          return Qb(bb, "POST", "/v1/accounts:signInWithIdp", Sb(bb, wb))
        }
        class nw extends vw {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(bb) {
            const wb = new nw(bb.providerId, bb.signInMethod);
            return bb.idToken || bb.accessToken ? (bb.idToken && (wb.idToken = bb.idToken), bb.accessToken && (wb.accessToken = bb.accessToken), bb.nonce && !bb.pendingToken && (wb.nonce = bb.nonce), bb.pendingToken && (wb.pendingToken = bb.pendingToken)) : bb.oauthToken && bb.oauthTokenSecret ? (wb.accessToken = bb.oauthToken, wb.secret = bb.oauthTokenSecret) : hb("argument-error"), wb
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
            const wb = "string" === typeof bb ? JSON.parse(bb) : bb,
              {
                providerId: Mb,
                signInMethod: eb
              } = wb,
              Hb = pb(wb, ["providerId", "signInMethod"]);
            if (!Mb || !eb) return null;
            const Vb = new nw(Mb, eb);
            return Vb.idToken = Hb.idToken || void 0, Vb.accessToken = Hb.accessToken || void 0, Vb.secret = Hb.secret, Vb.nonce = Hb.nonce, Vb.pendingToken = Hb.pendingToken || null, Vb
          }
          _getIdTokenResponse(bb) {
            return Pw(bb, this.buildRequest())
          }
          _linkToIdToken(bb, wb) {
            const Mb = this.buildRequest();
            return Mb.idToken = wb, Pw(bb, Mb)
          }
          _getReauthenticationResolver(bb) {
            const wb = this.buildRequest();
            return wb.autoCreate = !1, Pw(bb, wb)
          }
          buildRequest() {
            const bb = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) bb.pendingToken = this.pendingToken;
            else {
              const wb = {};
              this.idToken && (wb.id_token = this.idToken), this.accessToken && (wb.access_token = this.accessToken), this.secret && (wb.oauth_token_secret = this.secret), wb.providerId = this.providerId, this.nonce && !this.pendingToken && (wb.nonce = this.nonce), bb.postBody = (0, eb.db)(wb)
            }
            return bb
          }
        }
        const yw = {
          USER_NOT_FOUND: "user-not-found"
        };
        class ow extends vw {
          constructor(bb) {
            super("phone", "phone"), this.params = bb
          }
          static _fromVerification(bb, wb) {
            return new ow({
              verificationId: bb,
              verificationCode: wb
            })
          }
          static _fromTokenResponse(bb, wb) {
            return new ow({
              phoneNumber: bb,
              temporaryProof: wb
            })
          }
          _getIdTokenResponse(bb) {
            return async function(bb, wb) {
              return Qb(bb, "POST", "/v1/accounts:signInWithPhoneNumber", Sb(bb, wb))
            }(bb, this._makeVerificationRequest())
          }
          _linkToIdToken(bb, wb) {
            return async function(bb, wb) {
              const Mb = await Qb(bb, "POST", "/v1/accounts:signInWithPhoneNumber", Sb(bb, wb));
              if (Mb.temporaryProof) throw ab(bb, "account-exists-with-different-credential", Mb);
              return Mb
            }(bb, Object.assign({
              idToken: wb
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(bb) {
            return async function(bb, wb) {
              return Qb(bb, "POST", "/v1/accounts:signInWithPhoneNumber", Sb(bb, Object.assign(Object.assign({}, wb), {
                operation: "REAUTH"
              })), yw)
            }(bb, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: bb,
              phoneNumber: wb,
              verificationId: Mb,
              verificationCode: eb
            } = this.params;
            return bb && wb ? {
              temporaryProof: bb,
              phoneNumber: wb
            } : {
              sessionInfo: Mb,
              code: eb
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
              verificationId: wb,
              verificationCode: Mb,
              phoneNumber: eb,
              temporaryProof: Hb
            } = bb;
            return Mb || wb || eb || Hb ? new ow({
              verificationId: wb,
              verificationCode: Mb,
              phoneNumber: eb,
              temporaryProof: Hb
            }) : null
          }
        }
        class Tw {
          constructor(bb) {
            var wb, Mb, Hb, pb, Vb, gb;
            const lb = (0, eb.ab)((0, eb.B)(bb)),
              Lb = null !== (wb = lb.apiKey) && void 0 !== wb ? wb : null,
              Ib = null !== (Mb = lb.oobCode) && void 0 !== Mb ? Mb : null,
              Ob = function(bb) {
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
              }(null !== (Hb = lb.mode) && void 0 !== Hb ? Hb : null);
            Kb(Lb && Ib && Ob, "argument-error"), this.apiKey = Lb, this.operation = Ob, this.code = Ib, this.continueUrl = null !== (pb = lb.continueUrl) && void 0 !== pb ? pb : null, this.languageCode = null !== (Vb = lb.languageCode) && void 0 !== Vb ? Vb : null, this.tenantId = null !== (gb = lb.tenantId) && void 0 !== gb ? gb : null
          }
          static parseLink(bb) {
            const wb = function(bb) {
              const wb = (0, eb.ab)((0, eb.B)(bb)).link,
                Mb = wb ? (0, eb.ab)((0, eb.B)(wb)).deep_link_id : null,
                Hb = (0, eb.ab)((0, eb.B)(bb)).deep_link_id;
              return (Hb ? (0, eb.ab)((0, eb.B)(Hb)).link : null) || Hb || Mb || wb || bb
            }(bb);
            try {
              return new Tw(wb)
            } catch (Mb) {
              return null
            }
          }
        }

        function kw(bb) {
          return Tw.parseLink(bb)
        }
        class bM {
          constructor() {
            this.providerId = bM.PROVIDER_ID
          }
          static credential(bb, wb) {
            return dw._fromEmailAndPassword(bb, wb)
          }
          static credentialWithLink(bb, wb) {
            const Mb = Tw.parseLink(wb);
            return Kb(Mb, "argument-error"), dw._fromEmailAndCode(bb, Mb.code, Mb.tenantId)
          }
        }
        bM.PROVIDER_ID = "password", bM.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", bM.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class wM {
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
        class MM extends wM {
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
        class eM extends MM {
          static credentialFromJSON(bb) {
            const wb = "string" === typeof bb ? JSON.parse(bb) : bb;
            return Kb("providerId" in wb && "signInMethod" in wb, "argument-error"), nw._fromParams(wb)
          }
          credential(bb) {
            return this._credential(Object.assign(Object.assign({}, bb), {
              nonce: bb.rawNonce
            }))
          }
          _credential(bb) {
            return Kb(bb.idToken || bb.accessToken, "argument-error"), nw._fromParams(Object.assign(Object.assign({}, bb), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(bb) {
            return eM.oauthCredentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return eM.oauthCredentialFromTaggedObject(bb.customData || {})
          }
          static oauthCredentialFromTaggedObject(bb) {
            let {
              _tokenResponse: wb
            } = bb;
            if (!wb) return null;
            const {
              oauthIdToken: Mb,
              oauthAccessToken: eb,
              oauthTokenSecret: Hb,
              pendingToken: pb,
              nonce: Vb,
              providerId: gb
            } = wb;
            if (!eb && !Hb && !Mb && !pb) return null;
            if (!gb) return null;
            try {
              return new eM(gb)._credential({
                idToken: Mb,
                accessToken: eb,
                nonce: Vb,
                pendingToken: pb
              })
            } catch (lb) {
              return null
            }
          }
        }
        class HM extends MM {
          constructor() {
            super("facebook.com")
          }
          static credential(bb) {
            return nw._fromParams({
              providerId: HM.PROVIDER_ID,
              signInMethod: HM.FACEBOOK_SIGN_IN_METHOD,
              accessToken: bb
            })
          }
          static credentialFromResult(bb) {
            return HM.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return HM.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: wb
            } = bb;
            if (!wb || !("oauthAccessToken" in wb)) return null;
            if (!wb.oauthAccessToken) return null;
            try {
              return HM.credential(wb.oauthAccessToken)
            } catch (Mb) {
              return null
            }
          }
        }
        HM.FACEBOOK_SIGN_IN_METHOD = "facebook.com", HM.PROVIDER_ID = "facebook.com";
        class pM extends MM {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(bb, wb) {
            return nw._fromParams({
              providerId: pM.PROVIDER_ID,
              signInMethod: pM.GOOGLE_SIGN_IN_METHOD,
              idToken: bb,
              accessToken: wb
            })
          }
          static credentialFromResult(bb) {
            return pM.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return pM.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: wb
            } = bb;
            if (!wb) return null;
            const {
              oauthIdToken: Mb,
              oauthAccessToken: eb
            } = wb;
            if (!Mb && !eb) return null;
            try {
              return pM.credential(Mb, eb)
            } catch (Hb) {
              return null
            }
          }
        }
        pM.GOOGLE_SIGN_IN_METHOD = "google.com", pM.PROVIDER_ID = "google.com";
        class VM extends MM {
          constructor() {
            super("github.com")
          }
          static credential(bb) {
            return nw._fromParams({
              providerId: VM.PROVIDER_ID,
              signInMethod: VM.GITHUB_SIGN_IN_METHOD,
              accessToken: bb
            })
          }
          static credentialFromResult(bb) {
            return VM.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return VM.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: wb
            } = bb;
            if (!wb || !("oauthAccessToken" in wb)) return null;
            if (!wb.oauthAccessToken) return null;
            try {
              return VM.credential(wb.oauthAccessToken)
            } catch (Mb) {
              return null
            }
          }
        }
        VM.GITHUB_SIGN_IN_METHOD = "github.com", VM.PROVIDER_ID = "github.com";
        class gM extends vw {
          constructor(bb, wb) {
            super(bb, bb), this.pendingToken = wb
          }
          _getIdTokenResponse(bb) {
            return Pw(bb, this.buildRequest())
          }
          _linkToIdToken(bb, wb) {
            const Mb = this.buildRequest();
            return Mb.idToken = wb, Pw(bb, Mb)
          }
          _getReauthenticationResolver(bb) {
            const wb = this.buildRequest();
            return wb.autoCreate = !1, Pw(bb, wb)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(bb) {
            const wb = "string" === typeof bb ? JSON.parse(bb) : bb,
              {
                providerId: Mb,
                signInMethod: eb,
                pendingToken: Hb
              } = wb;
            return Mb && eb && Hb && Mb === eb ? new gM(Mb, Hb) : null
          }
          static _create(bb, wb) {
            return new gM(bb, wb)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class lM extends wM {
          constructor(bb) {
            Kb(bb.startsWith("saml."), "argument-error"), super(bb)
          }
          static credentialFromResult(bb) {
            return lM.samlCredentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return lM.samlCredentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromJSON(bb) {
            const wb = gM.fromJSON(bb);
            return Kb(wb, "argument-error"), wb
          }
          static samlCredentialFromTaggedObject(bb) {
            let {
              _tokenResponse: wb
            } = bb;
            if (!wb) return null;
            const {
              pendingToken: Mb,
              providerId: eb
            } = wb;
            if (!Mb || !eb) return null;
            try {
              return gM._create(eb, Mb)
            } catch (Hb) {
              return null
            }
          }
        }
        class LM extends MM {
          constructor() {
            super("twitter.com")
          }
          static credential(bb, wb) {
            return nw._fromParams({
              providerId: LM.PROVIDER_ID,
              signInMethod: LM.TWITTER_SIGN_IN_METHOD,
              oauthToken: bb,
              oauthTokenSecret: wb
            })
          }
          static credentialFromResult(bb) {
            return LM.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return LM.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: wb
            } = bb;
            if (!wb) return null;
            const {
              oauthAccessToken: Mb,
              oauthTokenSecret: eb
            } = wb;
            if (!Mb || !eb) return null;
            try {
              return LM.credential(Mb, eb)
            } catch (Hb) {
              return null
            }
          }
        }
        async function IM(bb, wb) {
          return Qb(bb, "POST", "/v1/accounts:signUp", Sb(bb, wb))
        }
        LM.TWITTER_SIGN_IN_METHOD = "twitter.com", LM.PROVIDER_ID = "twitter.com";
        class OM {
          constructor(bb) {
            this.user = bb.user, this.providerId = bb.providerId, this._tokenResponse = bb._tokenResponse, this.operationType = bb.operationType
          }
          static async _fromIdTokenResponse(bb, wb, Mb) {
            let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Hb = await ew._fromIdTokenResponse(bb, Mb, eb),
              pb = UM(Mb);
            return new OM({
              user: Hb,
              providerId: pb,
              _tokenResponse: Mb,
              operationType: wb
            })
          }
          static async _forOperation(bb, wb, Mb) {
            await bb._updateTokensIfNecessary(Mb, !0);
            const eb = UM(Mb);
            return new OM({
              user: bb,
              providerId: eb,
              _tokenResponse: Mb,
              operationType: wb
            })
          }
        }

        function UM(bb) {
          return bb.providerId ? bb.providerId : "phoneNumber" in bb ? "phone" : null
        }
        async function tM(bb) {
          var wb;
          const Mb = fw(bb);
          if (await Mb._initializationPromise, null === (wb = Mb.currentUser) || void 0 === wb ? void 0 : wb.isAnonymous) return new OM({
            user: Mb.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const eb = await IM(Mb, {
              returnSecureToken: !0
            }),
            Hb = await OM._fromIdTokenResponse(Mb, "signIn", eb, !0);
          return await Mb._updateCurrentUser(Hb.user), Hb
        }
        class CM extends eb.j {
          constructor(bb, wb, Mb, eb) {
            var Hb;
            super(wb.code, wb.message), this.operationType = Mb, this.user = eb, Object.setPrototypeOf(this, CM.prototype), this.customData = {
              appName: bb.name,
              tenantId: null !== (Hb = bb.tenantId) && void 0 !== Hb ? Hb : void 0,
              _serverResponse: wb.customData._serverResponse,
              operationType: Mb
            }
          }
          static _fromErrorAndOperation(bb, wb, Mb, eb) {
            return new CM(bb, wb, Mb, eb)
          }
        }

        function EM(bb, wb, Mb, eb) {
          return ("reauthenticate" === wb ? Mb._getReauthenticationResolver(bb) : Mb._getIdTokenResponse(bb)).catch((Mb => {
            if ("auth/multi-factor-auth-required" === Mb.code) throw CM._fromErrorAndOperation(bb, Mb, wb, eb);
            throw Mb
          }))
        }

        function FM(bb) {
          return new Set(bb.map((bb => {
            let {
              providerId: wb
            } = bb;
            return wb
          })).filter((bb => !!bb)))
        }
        async function BM(bb, wb) {
          const Mb = (0, eb.N)(bb);
          await mM(!0, Mb, wb);
          const {
            providerUserInfo: Hb
          } = await async function(bb, wb) {
            return Nb(bb, "POST", "/v1/accounts:update", wb)
          }(Mb.auth, {
            idToken: await Mb.getIdToken(),
            deleteProvider: [wb]
          }), pb = FM(Hb || []);
          return Mb.providerData = Mb.providerData.filter((bb => pb.has(bb.providerId))), pb.has("phone") || (Mb.phoneNumber = null), await Mb.auth._persistUserIfCurrent(Mb), Mb
        }
        async function sM(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const eb = await yb(bb, wb._linkToIdToken(bb.auth, await bb.getIdToken()), Mb);
          return OM._forOperation(bb, "link", eb)
        }
        async function mM(bb, wb, Mb) {
          await kb(wb);
          const eb = !1 === bb ? "provider-already-linked" : "no-such-provider";
          Kb(FM(wb.providerData).has(Mb) === bb, wb.auth, eb)
        }
        async function hM(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: eb
          } = bb, Hb = "reauthenticate";
          try {
            const pb = await yb(bb, EM(eb, Hb, wb, bb), Mb);
            Kb(pb.idToken, eb, "internal-error");
            const Vb = nb(pb.idToken);
            Kb(Vb, eb, "internal-error");
            const {
              sub: gb
            } = Vb;
            return Kb(bb.uid === gb, eb, "user-mismatch"), OM._forOperation(bb, Hb, pb)
          } catch (pb) {
            throw "auth/user-not-found" === (null === pb || void 0 === pb ? void 0 : pb.code) && hb(eb, "user-mismatch"), pb
          }
        }
        async function zM(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const eb = "signIn",
            Hb = await EM(bb, eb, wb),
            pb = await OM._fromIdTokenResponse(bb, eb, Hb);
          return Mb || await bb._updateCurrentUser(pb.user), pb
        }
        async function XM(bb, wb) {
          return zM(fw(bb), wb)
        }
        async function xM(bb, wb) {
          const Mb = (0, eb.N)(bb);
          return await mM(!1, Mb, wb.providerId), sM(Mb, wb)
        }
        async function jM(bb, wb) {
          return hM((0, eb.N)(bb), wb)
        }
        async function KM(bb, wb) {
          const Mb = fw(bb),
            eb = await async function(bb, wb) {
              return Qb(bb, "POST", "/v1/accounts:signInWithCustomToken", Sb(bb, wb))
            }(Mb, {
              token: wb,
              returnSecureToken: !0
            }), Hb = await OM._fromIdTokenResponse(Mb, "signIn", eb);
          return await Mb._updateCurrentUser(Hb.user), Hb
        }
        class rM {
          constructor(bb, wb) {
            this.factorId = bb, this.uid = wb.mfaEnrollmentId, this.enrollmentTime = new Date(wb.enrolledAt).toUTCString(), this.displayName = wb.displayName
          }
          static _fromServerResponse(bb, wb) {
            return "phoneInfo" in wb ? RM._fromServerResponse(bb, wb) : "totpInfo" in wb ? DM._fromServerResponse(bb, wb) : hb(bb, "internal-error")
          }
        }
        class RM extends rM {
          constructor(bb) {
            super("phone", bb), this.phoneNumber = bb.phoneInfo
          }
          static _fromServerResponse(bb, wb) {
            return new RM(wb)
          }
        }
        class DM extends rM {
          constructor(bb) {
            super("totp", bb)
          }
          static _fromServerResponse(bb, wb) {
            return new DM(wb)
          }
        }

        function cM(bb, wb, Mb) {
          var eb;
          Kb((null === (eb = Mb.url) || void 0 === eb ? void 0 : eb.length) > 0, bb, "invalid-continue-uri"), Kb("undefined" === typeof Mb.dynamicLinkDomain || Mb.dynamicLinkDomain.length > 0, bb, "invalid-dynamic-link-domain"), wb.continueUrl = Mb.url, wb.dynamicLinkDomain = Mb.dynamicLinkDomain, wb.canHandleCodeInApp = Mb.handleCodeInApp, Mb.iOS && (Kb(Mb.iOS.bundleId.length > 0, bb, "missing-ios-bundle-id"), wb.iOSBundleId = Mb.iOS.bundleId), Mb.android && (Kb(Mb.android.packageName.length > 0, bb, "missing-android-pkg-name"), wb.androidInstallApp = Mb.android.installApp, wb.androidMinimumVersionCode = Mb.android.minimumVersion, wb.androidPackageName = Mb.android.packageName)
        }
        async function YM(bb, wb, Mb) {
          var eb;
          const Hb = fw(bb),
            pb = {
              requestType: "PASSWORD_RESET",
              email: wb,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (eb = Hb._getRecaptchaConfig()) || void 0 === eb ? void 0 : eb.emailPasswordEnabled) {
            const bb = await Dw(Hb, pb, "getOobCode", !0);
            Mb && cM(Hb, bb, Mb), await iw(Hb, bb)
          } else Mb && cM(Hb, pb, Mb), await iw(Hb, pb).catch((async bb => {
            if ("auth/missing-recaptcha-token" !== bb.code) return Promise.reject(bb);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const bb = await Dw(Hb, pb, "getOobCode", !0);
              Mb && cM(Hb, bb, Mb), await iw(Hb, bb)
            }
          }))
        }
        async function ZM(bb, wb, Mb) {
          await Qw((0, eb.N)(bb), {
            oobCode: wb,
            newPassword: Mb
          })
        }
        async function fM(bb, wb) {
          await async function(bb, wb) {
            return Nb(bb, "POST", "/v1/accounts:update", Sb(bb, wb))
          }((0, eb.N)(bb), {
            oobCode: wb
          })
        }
        async function AM(bb, wb) {
          const Mb = (0, eb.N)(bb),
            Hb = await Qw(Mb, {
              oobCode: wb
            }),
            pb = Hb.requestType;
          switch (Kb(pb, Mb, "internal-error"), pb) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Kb(Hb.newEmail, Mb, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Kb(Hb.mfaInfo, Mb, "internal-error");
            default:
              Kb(Hb.email, Mb, "internal-error")
          }
          let Vb = null;
          return Hb.mfaInfo && (Vb = rM._fromServerResponse(fw(Mb), Hb.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Hb.requestType ? Hb.newEmail : Hb.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Hb.requestType ? Hb.email : Hb.newEmail) || null,
              multiFactorInfo: Vb
            },
            operation: pb
          }
        }
        async function WM(bb, wb) {
          const {
            data: Mb
          } = await AM((0, eb.N)(bb), wb);
          return Mb.email
        }
        async function JM(bb, wb, Mb) {
          var eb;
          const Hb = fw(bb),
            pb = {
              returnSecureToken: !0,
              email: wb,
              password: Mb,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Vb;
          if (null === (eb = Hb._getRecaptchaConfig()) || void 0 === eb ? void 0 : eb.emailPasswordEnabled) {
            const bb = await Dw(Hb, pb, "signUpPassword");
            Vb = IM(Hb, bb)
          } else Vb = IM(Hb, pb).catch((async bb => {
            if ("auth/missing-recaptcha-token" === bb.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const bb = await Dw(Hb, pb, "signUpPassword");
              return IM(Hb, bb)
            }
            return Promise.reject(bb)
          }));
          const gb = await Vb.catch((bb => Promise.reject(bb))),
            lb = await OM._fromIdTokenResponse(Hb, "signIn", gb);
          return await Hb._updateCurrentUser(lb.user), lb
        }

        function SM(bb, wb, Mb) {
          return XM((0, eb.N)(bb), bM.credential(wb, Mb))
        }
        async function NM(bb, wb, Mb) {
          var eb;
          const Hb = fw(bb),
            pb = {
              requestType: "EMAIL_SIGNIN",
              email: wb,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Vb(bb, wb) {
            Kb(wb.handleCodeInApp, Hb, "argument-error"), wb && cM(Hb, bb, wb)
          }
          if (null === (eb = Hb._getRecaptchaConfig()) || void 0 === eb ? void 0 : eb.emailPasswordEnabled) {
            const bb = await Dw(Hb, pb, "getOobCode", !0);
            Vb(bb, Mb), await uw(Hb, bb)
          } else Vb(pb, Mb), await uw(Hb, pb).catch((async bb => {
            if ("auth/missing-recaptcha-token" !== bb.code) return Promise.reject(bb);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const bb = await Dw(Hb, pb, "getOobCode", !0);
              Vb(bb, Mb), await uw(Hb, bb)
            }
          }))
        }

        function vM(bb, wb) {
          const Mb = Tw.parseLink(wb);
          return "EMAIL_SIGNIN" === (null === Mb || void 0 === Mb ? void 0 : Mb.operation)
        }
        async function QM(bb, wb, Mb) {
          const Hb = (0, eb.N)(bb),
            pb = bM.credentialWithLink(wb, Mb || Db());
          return Kb(pb._tenantId === (Hb.tenantId || null), Hb, "tenant-id-mismatch"), XM(Hb, pb)
        }
        async function GM(bb, wb) {
          const Mb = {
              identifier: wb,
              continueUri: cb() ? Db() : "http://localhost"
            },
            {
              signinMethods: Hb
            } = await async function(bb, wb) {
              return Nb(bb, "POST", "/v1/accounts:createAuthUri", Sb(bb, wb))
            }((0, eb.N)(bb), Mb);
          return Hb || []
        }
        async function qM(bb, wb) {
          const Mb = (0, eb.N)(bb),
            Hb = {
              requestType: "VERIFY_EMAIL",
              idToken: await bb.getIdToken()
            };
          wb && cM(Mb.auth, Hb, wb);
          const {
            email: pb
          } = await async function(bb, wb) {
            return aw(bb, wb)
          }(Mb.auth, Hb);
          pb !== bb.email && await bb.reload()
        }
        async function aM(bb, wb, Mb) {
          const Hb = (0, eb.N)(bb),
            pb = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await bb.getIdToken(),
              newEmail: wb
            };
          Mb && cM(Hb.auth, pb, Mb);
          const {
            email: Vb
          } = await async function(bb, wb) {
            return aw(bb, wb)
          }(Hb.auth, pb);
          Vb !== bb.email && await bb.reload()
        }
        async function iM(bb, wb) {
          let {
            displayName: Mb,
            photoURL: Hb
          } = wb;
          if (void 0 === Mb && void 0 === Hb) return;
          const pb = (0, eb.N)(bb),
            Vb = {
              idToken: await pb.getIdToken(),
              displayName: Mb,
              photoUrl: Hb,
              returnSecureToken: !0
            },
            gb = await yb(pb, async function(bb, wb) {
              return Nb(bb, "POST", "/v1/accounts:update", wb)
            }(pb.auth, Vb));
          pb.displayName = gb.displayName || null, pb.photoURL = gb.photoUrl || null;
          const lb = pb.providerData.find((bb => {
            let {
              providerId: wb
            } = bb;
            return "password" === wb
          }));
          lb && (lb.displayName = pb.displayName, lb.photoURL = pb.photoURL), await pb._updateTokensIfNecessary(gb)
        }

        function uM(bb, wb) {
          return PM((0, eb.N)(bb), wb, null)
        }

        function dM(bb, wb) {
          return PM((0, eb.N)(bb), null, wb)
        }
        async function PM(bb, wb, Mb) {
          const {
            auth: eb
          } = bb, Hb = {
            idToken: await bb.getIdToken(),
            returnSecureToken: !0
          };
          wb && (Hb.email = wb), Mb && (Hb.password = Mb);
          const pb = await yb(bb, Gw(eb, Hb));
          await bb._updateTokensIfNecessary(pb, !0)
        }
        class nM {
          constructor(bb, wb) {
            let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = bb, this.providerId = wb, this.profile = Mb
          }
        }
        class yM extends nM {
          constructor(bb, wb, Mb, eb) {
            super(bb, wb, Mb), this.username = eb
          }
        }
        class oM extends nM {
          constructor(bb, wb) {
            super(bb, "facebook.com", wb)
          }
        }
        class TM extends yM {
          constructor(bb, wb) {
            super(bb, "github.com", wb, "string" === typeof(null === wb || void 0 === wb ? void 0 : wb.login) ? null === wb || void 0 === wb ? void 0 : wb.login : null)
          }
        }
        class kM extends nM {
          constructor(bb, wb) {
            super(bb, "google.com", wb)
          }
        }
        class be extends yM {
          constructor(bb, wb, Mb) {
            super(bb, "twitter.com", wb, Mb)
          }
        }

        function we(bb) {
          const {
            user: wb,
            _tokenResponse: Mb
          } = bb;
          return wb.isAnonymous && !Mb ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(bb) {
            var wb, Mb;
            if (!bb) return null;
            const {
              providerId: eb
            } = bb, Hb = bb.rawUserInfo ? JSON.parse(bb.rawUserInfo) : {}, pb = bb.isNewUser || "identitytoolkit#SignupNewUserResponse" === bb.kind;
            if (!eb && (null === bb || void 0 === bb ? void 0 : bb.idToken)) {
              const eb = null === (Mb = null === (wb = nb(bb.idToken)) || void 0 === wb ? void 0 : wb.firebase) || void 0 === Mb ? void 0 : Mb.sign_in_provider;
              if (eb) return new nM(pb, "anonymous" !== eb && "custom" !== eb ? eb : null)
            }
            if (!eb) return null;
            switch (eb) {
              case "facebook.com":
                return new oM(pb, Hb);
              case "github.com":
                return new TM(pb, Hb);
              case "google.com":
                return new kM(pb, Hb);
              case "twitter.com":
                return new be(pb, Hb, bb.screenName || null);
              case "custom":
              case "anonymous":
                return new nM(pb, null);
              default:
                return new nM(pb, eb, Hb)
            }
          }(Mb)
        }

        function Me(bb, wb) {
          return (0, eb.N)(bb).setPersistence(wb)
        }

        function ee(bb) {
          return fw(bb).initializeRecaptchaConfig()
        }

        function He(bb, wb, Mb, Hb) {
          return (0, eb.N)(bb).onIdTokenChanged(wb, Mb, Hb)
        }

        function pe(bb, wb, Mb) {
          return (0, eb.N)(bb).beforeAuthStateChanged(wb, Mb)
        }

        function Ve(bb, wb, Mb, Hb) {
          return (0, eb.N)(bb).onAuthStateChanged(wb, Mb, Hb)
        }

        function ge(bb) {
          (0, eb.N)(bb).useDeviceLanguage()
        }

        function le(bb, wb) {
          return (0, eb.N)(bb).updateCurrentUser(wb)
        }

        function Le(bb) {
          return (0, eb.N)(bb).signOut()
        }
        async function Ie(bb) {
          return (0, eb.N)(bb).delete()
        }
        class Oe {
          constructor(bb, wb, Mb) {
            this.type = bb, this.credential = wb, this.auth = Mb
          }
          static _fromIdtoken(bb, wb) {
            return new Oe("enroll", bb, wb)
          }
          static _fromMfaPendingCredential(bb) {
            return new Oe("signin", bb)
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
            var wb, Mb;
            if (null === bb || void 0 === bb ? void 0 : bb.multiFactorSession) {
              if (null === (wb = bb.multiFactorSession) || void 0 === wb ? void 0 : wb.pendingCredential) return Oe._fromMfaPendingCredential(bb.multiFactorSession.pendingCredential);
              if (null === (Mb = bb.multiFactorSession) || void 0 === Mb ? void 0 : Mb.idToken) return Oe._fromIdtoken(bb.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Ue {
          constructor(bb, wb, Mb) {
            this.session = bb, this.hints = wb, this.signInResolver = Mb
          }
          static _fromError(bb, wb) {
            const Mb = fw(bb),
              eb = wb.customData._serverResponse,
              Hb = (eb.mfaInfo || []).map((bb => rM._fromServerResponse(Mb, bb)));
            Kb(eb.mfaPendingCredential, Mb, "internal-error");
            const pb = Oe._fromMfaPendingCredential(eb.mfaPendingCredential);
            return new Ue(pb, Hb, (async bb => {
              const Hb = await bb._process(Mb, pb);
              delete eb.mfaInfo, delete eb.mfaPendingCredential;
              const Vb = Object.assign(Object.assign({}, eb), {
                idToken: Hb.idToken,
                refreshToken: Hb.refreshToken
              });
              switch (wb.operationType) {
                case "signIn":
                  const bb = await OM._fromIdTokenResponse(Mb, wb.operationType, Vb);
                  return await Mb._updateCurrentUser(bb.user), bb;
                case "reauthenticate":
                  return Kb(wb.user, Mb, "internal-error"), OM._forOperation(wb.user, wb.operationType, Vb);
                default:
                  hb(Mb, "internal-error")
              }
            }))
          }
          async resolveSignIn(bb) {
            const wb = bb;
            return this.signInResolver(wb)
          }
        }

        function te(bb, wb) {
          var Mb;
          const Hb = (0, eb.N)(bb),
            pb = wb;
          return Kb(wb.customData.operationType, Hb, "argument-error"), Kb(null === (Mb = pb.customData._serverResponse) || void 0 === Mb ? void 0 : Mb.mfaPendingCredential, Hb, "argument-error"), Ue._fromError(Hb, pb)
        }
        class Ce {
          constructor(bb) {
            this.user = bb, this.enrolledFactors = [], bb._onReload((wb => {
              wb.mfaInfo && (this.enrolledFactors = wb.mfaInfo.map((wb => rM._fromServerResponse(bb.auth, wb))))
            }))
          }
          static _fromUser(bb) {
            return new Ce(bb)
          }
          async getSession() {
            return Oe._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(bb, wb) {
            const Mb = bb,
              eb = await this.getSession(),
              Hb = await yb(this.user, Mb._process(this.user.auth, eb, wb));
            return await this.user._updateTokensIfNecessary(Hb), this.user.reload()
          }
          async unenroll(bb) {
            const wb = "string" === typeof bb ? bb : bb.uid,
              Mb = await this.user.getIdToken();
            try {
              const bb = await yb(this.user, (eb = this.user.auth, Hb = {
                idToken: Mb,
                mfaEnrollmentId: wb
              }, Nb(eb, "POST", "/v2/accounts/mfaEnrollment:withdraw", Sb(eb, Hb))));
              this.enrolledFactors = this.enrolledFactors.filter((bb => {
                let {
                  uid: Mb
                } = bb;
                return Mb !== wb
              })), await this.user._updateTokensIfNecessary(bb), await this.user.reload()
            } catch (pb) {
              throw pb
            }
            var eb, Hb
          }
        }
        const Ee = new WeakMap;

        function Fe(bb) {
          const wb = (0, eb.N)(bb);
          return Ee.has(wb) || Ee.set(wb, Ce._fromUser(wb)), Ee.get(wb)
        }
        const Be = "__sak";
        class se {
          constructor(bb, wb) {
            this.storageRetriever = bb, this.type = wb
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Be, "1"), this.storage.removeItem(Be), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (bb) {
              return Promise.resolve(!1)
            }
          }
          _set(bb, wb) {
            return this.storage.setItem(bb, JSON.stringify(wb)), Promise.resolve()
          }
          _get(bb) {
            const wb = this.storage.getItem(bb);
            return Promise.resolve(wb ? JSON.parse(wb) : null)
          }
          _remove(bb) {
            return this.storage.removeItem(bb), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class me extends se {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (bb, wb) => this.onStorageEvent(bb, wb), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const bb = (0, eb.R)();
              return Uw(bb) || sw(bb)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (bb) {
                return !1
              }
            }(), this.fallbackToPolling = mw(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(bb) {
            for (const wb of Object.keys(this.listeners)) {
              const Mb = this.storage.getItem(wb),
                eb = this.localCache[wb];
              Mb !== eb && bb(wb, eb, Mb)
            }
          }
          onStorageEvent(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!bb.key) return void this.forAllChangedKeys(((bb, wb, Mb) => {
              this.notifyListeners(bb, Mb)
            }));
            const Mb = bb.key;
            if (wb ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const eb = this.storage.getItem(Mb);
              if (bb.newValue !== eb) null !== bb.newValue ? this.storage.setItem(Mb, bb.newValue) : this.storage.removeItem(Mb);
              else if (this.localCache[Mb] === bb.newValue && !wb) return
            }
            const Hb = () => {
                const bb = this.storage.getItem(Mb);
                (wb || this.localCache[Mb] !== bb) && this.notifyListeners(Mb, bb)
              },
              pb = this.storage.getItem(Mb);
            (0, eb.V)() && 10 === document.documentMode && pb !== bb.newValue && bb.newValue !== bb.oldValue ? setTimeout(Hb, 10) : Hb()
          }
          notifyListeners(bb, wb) {
            this.localCache[bb] = wb;
            const Mb = this.listeners[bb];
            if (Mb)
              for (const eb of Array.from(Mb)) eb(wb ? JSON.parse(wb) : wb)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((bb, wb, Mb) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: bb,
                  oldValue: wb,
                  newValue: Mb
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
          _addListener(bb, wb) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[bb] || (this.listeners[bb] = new Set, this.localCache[bb] = this.storage.getItem(bb)), this.listeners[bb].add(wb)
          }
          _removeListener(bb, wb) {
            this.listeners[bb] && (this.listeners[bb].delete(wb), 0 === this.listeners[bb].size && delete this.listeners[bb]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(bb, wb) {
            await super._set(bb, wb), this.localCache[bb] = JSON.stringify(wb)
          }
          async _get(bb) {
            const wb = await super._get(bb);
            return this.localCache[bb] = JSON.stringify(wb), wb
          }
          async _remove(bb) {
            await super._remove(bb), delete this.localCache[bb]
          }
        }
        me.type = "LOCAL";
        const he = me;
        class ze extends se {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(bb, wb) {}
          _removeListener(bb, wb) {}
        }
        ze.type = "SESSION";
        const Xe = ze;
        class xe {
          constructor(bb) {
            this.eventTarget = bb, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(bb) {
            const wb = this.receivers.find((wb => wb.isListeningto(bb)));
            if (wb) return wb;
            const Mb = new xe(bb);
            return this.receivers.push(Mb), Mb
          }
          isListeningto(bb) {
            return this.eventTarget === bb
          }
          async handleEvent(bb) {
            const wb = bb,
              {
                eventId: Mb,
                eventType: eb,
                data: Hb
              } = wb.data,
              pb = this.handlersMap[eb];
            if (!(null === pb || void 0 === pb ? void 0 : pb.size)) return;
            wb.ports[0].postMessage({
              status: "ack",
              eventId: Mb,
              eventType: eb
            });
            const Vb = Array.from(pb).map((async bb => bb(wb.origin, Hb))),
              gb = await
            function(bb) {
              return Promise.all(bb.map((async bb => {
                try {
                  return {
                    fulfilled: !0,
                    value: await bb
                  }
                } catch (wb) {
                  return {
                    fulfilled: !1,
                    reason: wb
                  }
                }
              })))
            }(Vb);
            wb.ports[0].postMessage({
              status: "done",
              eventId: Mb,
              eventType: eb,
              response: gb
            })
          }
          _subscribe(bb, wb) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[bb] || (this.handlersMap[bb] = new Set), this.handlersMap[bb].add(wb)
          }
          _unsubscribe(bb, wb) {
            this.handlersMap[bb] && wb && this.handlersMap[bb].delete(wb), wb && 0 !== this.handlersMap[bb].size || delete this.handlersMap[bb], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function je() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            Mb = "";
          for (let eb = 0; eb < wb; eb++) Mb += Math.floor(10 * Math.random());
          return bb + Mb
        }
        xe.receivers = [];
        class Ke {
          constructor(bb) {
            this.target = bb, this.handlers = new Set
          }
          removeMessageHandler(bb) {
            bb.messageChannel && (bb.messageChannel.port1.removeEventListener("message", bb.Tm), bb.messageChannel.port1.close()), this.handlers.delete(bb)
          }
          async _send(bb, wb) {
            let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const eb = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!eb) throw new Error("connection_unavailable");
            let Hb, pb;
            return new Promise(((Vb, gb) => {
              const lb = je("", 20);
              eb.port1.start();
              const Lb = setTimeout((() => {
                gb(new Error("unsupported_event"))
              }), Mb);
              pb = {
                messageChannel: eb,
                Tm(bb) {
                  const wb = bb;
                  if (wb.data.eventId === lb) switch (wb.data.status) {
                    case "ack":
                      clearTimeout(Lb), Hb = setTimeout((() => {
                        gb(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Hb), Vb(wb.data.response);
                      break;
                    default:
                      clearTimeout(Lb), clearTimeout(Hb), gb(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(pb), eb.port1.addEventListener("message", pb.Tm), this.target.postMessage({
                eventType: bb,
                eventId: lb,
                data: wb
              }, [eb.port2])
            })).finally((() => {
              pb && this.removeMessageHandler(pb)
            }))
          }
        }

        function re() {
          return window
        }

        function Re() {
          return "undefined" !== typeof re().WorkerGlobalScope && "function" === typeof re().importScripts
        }
        const De = "firebaseLocalStorageDb",
          ce = "firebaseLocalStorage",
          Ye = "fbase_key";
        class Ze {
          constructor(bb) {
            this.request = bb
          }
          toPromise() {
            return new Promise(((bb, wb) => {
              this.request.addEventListener("success", (() => {
                bb(this.request.result)
              })), this.request.addEventListener("error", (() => {
                wb(this.request.error)
              }))
            }))
          }
        }

        function fe(bb, wb) {
          return bb.transaction([ce], wb ? "readwrite" : "readonly").objectStore(ce)
        }

        function Ae() {
          const bb = indexedDB.open(De, 1);
          return new Promise(((wb, Mb) => {
            bb.addEventListener("error", (() => {
              Mb(bb.error)
            })), bb.addEventListener("upgradeneeded", (() => {
              const wb = bb.result;
              try {
                wb.createObjectStore(ce, {
                  keyPath: Ye
                })
              } catch (eb) {
                Mb(eb)
              }
            })), bb.addEventListener("success", (async () => {
              const Mb = bb.result;
              Mb.objectStoreNames.contains(ce) ? wb(Mb) : (Mb.close(), await
                function() {
                  const bb = indexedDB.deleteDatabase(De);
                  return new Ze(bb).toPromise()
                }(), wb(await Ae()))
            }))
          }))
        }
        async function We(bb, wb, Mb) {
          const eb = fe(bb, !0).put({
            [Ye]: wb,
            value: Mb
          });
          return new Ze(eb).toPromise()
        }

        function Je(bb, wb) {
          const Mb = fe(bb, !0).delete(wb);
          return new Ze(Mb).toPromise()
        }
        class Se {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Ae()), this.db
          }
          async _withRetries(bb) {
            let wb = 0;
            for (;;) try {
              const wb = await this._openDb();
              return await bb(wb)
            } catch (Mb) {
              if (wb++ > 3) throw Mb;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Re() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = xe._getInstance(Re() ? self : null), this.receiver._subscribe("keyChanged", (async (bb, wb) => ({
              keyProcessed: (await this._poll()).includes(wb.key)
            }))), this.receiver._subscribe("ping", (async (bb, wb) => ["keyChanged"]))
          }
          async initializeSender() {
            var bb, wb;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (bb) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new Ke(this.activeServiceWorker);
            const Mb = await this.sender._send("ping", {}, 800);
            Mb && (null === (bb = Mb[0]) || void 0 === bb ? void 0 : bb.fulfilled) && (null === (wb = Mb[0]) || void 0 === wb ? void 0 : wb.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(bb) {
            if (this.sender && this.activeServiceWorker && function() {
                var bb;
                return (null === (bb = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === bb ? void 0 : bb.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: bb
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (wb) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const bb = await Ae();
              return await We(bb, Be, "1"), await Je(bb, Be), !0
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
          async _set(bb, wb) {
            return this._withPendingWrite((async () => (await this._withRetries((Mb => We(Mb, bb, wb))), this.localCache[bb] = wb, this.notifyServiceWorker(bb))))
          }
          async _get(bb) {
            const wb = await this._withRetries((wb => async function(bb, wb) {
              const Mb = fe(bb, !1).get(wb),
                eb = await new Ze(Mb).toPromise();
              return void 0 === eb ? null : eb.value
            }(wb, bb)));
            return this.localCache[bb] = wb, wb
          }
          async _remove(bb) {
            return this._withPendingWrite((async () => (await this._withRetries((wb => Je(wb, bb))), delete this.localCache[bb], this.notifyServiceWorker(bb))))
          }
          async _poll() {
            const bb = await this._withRetries((bb => {
              const wb = fe(bb, !1).getAll();
              return new Ze(wb).toPromise()
            }));
            if (!bb) return [];
            if (0 !== this.pendingWrites) return [];
            const wb = [],
              Mb = new Set;
            for (const {
                fbase_key: eb,
                value: Hb
              }
              of bb) Mb.add(eb), JSON.stringify(this.localCache[eb]) !== JSON.stringify(Hb) && (this.notifyListeners(eb, Hb), wb.push(eb));
            for (const eb of Object.keys(this.localCache)) this.localCache[eb] && !Mb.has(eb) && (this.notifyListeners(eb, null), wb.push(eb));
            return wb
          }
          notifyListeners(bb, wb) {
            this.localCache[bb] = wb;
            const Mb = this.listeners[bb];
            if (Mb)
              for (const eb of Array.from(Mb)) eb(wb)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(bb, wb) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[bb] || (this.listeners[bb] = new Set, this._get(bb)), this.listeners[bb].add(wb)
          }
          _removeListener(bb, wb) {
            this.listeners[bb] && (this.listeners[bb].delete(wb), 0 === this.listeners[bb].size && delete this.listeners[bb]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Se.type = "LOCAL";
        const Ne = Se;
        const ve = 1e12;
        class Qe {
          constructor(bb) {
            this.auth = bb, this.counter = ve, this._widgets = new Map
          }
          render(bb, wb) {
            const Mb = this.counter;
            return this._widgets.set(Mb, new Ge(bb, this.auth.name, wb || {})), this.counter++, Mb
          }
          reset(bb) {
            var wb;
            const Mb = bb || ve;
            null === (wb = this._widgets.get(Mb)) || void 0 === wb || wb.delete(), this._widgets.delete(Mb)
          }
          getResponse(bb) {
            var wb;
            const Mb = bb || ve;
            return (null === (wb = this._widgets.get(Mb)) || void 0 === wb ? void 0 : wb.getResponse()) || ""
          }
          async execute(bb) {
            var wb;
            const Mb = bb || ve;
            return null === (wb = this._widgets.get(Mb)) || void 0 === wb || wb.execute(), ""
          }
        }
        class Ge {
          constructor(bb, wb, Mb) {
            this.params = Mb, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const eb = "string" === typeof bb ? document.getElementById(bb) : bb;
            Kb(eb, "argument-error", {
              appName: wb
            }), this.container = eb, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const wb = [],
                  Mb = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let eb = 0; eb < bb; eb++) wb.push(Mb.charAt(Math.floor(Math.random() * Mb.length)));
                return wb.join("")
              }(50);
              const {
                callback: bb,
                "expired-callback": wb
              } = this.params;
              if (bb) try {
                bb(this.responseToken)
              } catch (Mb) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, wb) try {
                  wb()
                } catch (Mb) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const qe = rw("rcb"),
          ae = new Zb(3e4, 6e4);
        class ie {
          constructor() {
            var bb;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (bb = re().grecaptcha) || void 0 === bb ? void 0 : bb.render)
          }
          load(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Kb(function(bb) {
              return bb.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(bb)
            }(wb), bb, "argument-error"), this.shouldResolveImmediately(wb) && Xw(re().grecaptcha) ? Promise.resolve(re().grecaptcha) : new Promise(((Mb, Hb) => {
              const pb = re().setTimeout((() => {
                Hb(zb(bb, "network-request-failed"))
              }), ae.get());
              re()[qe] = () => {
                re().clearTimeout(pb), delete re()[qe];
                const eb = re().grecaptcha;
                if (!eb || !Xw(eb)) return void Hb(zb(bb, "internal-error"));
                const Vb = eb.render;
                eb.render = (bb, wb) => {
                  const Mb = Vb(bb, wb);
                  return this.counter++, Mb
                }, this.hostLanguage = wb, Mb(eb)
              };
              Kw(`https://www.google.com/recaptcha/api.js??${(0,eb.db)({onload:qe,render:"explicit",hl:wb})}`).catch((() => {
                clearTimeout(pb), Hb(zb(bb, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(bb) {
            var wb;
            return !!(null === (wb = re().grecaptcha) || void 0 === wb ? void 0 : wb.render) && (bb === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class ue {
          async load(bb) {
            return new Qe(bb)
          }
          clearedOneInstance() {}
        }
        const de = "recaptcha",
          Pe = {
            theme: "light",
            type: "image"
          };
        class ne {
          constructor(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Pe),
              Mb = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = wb, this.type = de, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = fw(Mb), this.isInvisible = "invisible" === this.parameters.size, Kb("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const eb = "string" === typeof bb ? document.getElementById(bb) : bb;
            Kb(eb, this.auth, "argument-error"), this.container = eb, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new ue : new ie, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const bb = await this.render(),
              wb = this.getAssertedRecaptcha(),
              Mb = wb.getResponse(bb);
            return Mb || new Promise((Mb => {
              const eb = bb => {
                bb && (this.tokenChangeListeners.delete(eb), Mb(bb))
              };
              this.tokenChangeListeners.add(eb), this.isInvisible && wb.execute(bb)
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
            Kb(!this.parameters.sitekey, this.auth, "argument-error"), Kb(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Kb("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(bb) {
            return wb => {
              if (this.tokenChangeListeners.forEach((bb => bb(wb))), "function" === typeof bb) bb(wb);
              else if ("string" === typeof bb) {
                const Mb = re()[bb];
                "function" === typeof Mb && Mb(wb)
              }
            }
          }
          assertNotDestroyed() {
            Kb(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let bb = this.container;
              if (!this.isInvisible) {
                const wb = document.createElement("div");
                bb.appendChild(wb), bb = wb
              }
              this.widgetId = this.getAssertedRecaptcha().render(bb, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            Kb(cb() && !Re(), this.auth, "internal-error"), await
            function() {
              let bb = null;
              return new Promise((wb => {
                "complete" !== document.readyState ? (bb = () => wb(), window.addEventListener("load", bb)) : wb()
              })).catch((wb => {
                throw bb && window.removeEventListener("load", bb), wb
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const bb = await async function(bb) {
              return (await Nb(bb, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Kb(bb, this.auth, "internal-error"), this.parameters.sitekey = bb
          }
          getAssertedRecaptcha() {
            return Kb(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class ye {
          constructor(bb, wb) {
            this.verificationId = bb, this.onConfirmation = wb
          }
          confirm(bb) {
            const wb = ow._fromVerification(this.verificationId, bb);
            return this.onConfirmation(wb)
          }
        }
        async function oe(bb, wb, Mb) {
          const Hb = fw(bb),
            pb = await bH(Hb, wb, (0, eb.N)(Mb));
          return new ye(pb, (bb => XM(Hb, bb)))
        }
        async function Te(bb, wb, Mb) {
          const Hb = (0, eb.N)(bb);
          await mM(!1, Hb, "phone");
          const pb = await bH(Hb.auth, wb, (0, eb.N)(Mb));
          return new ye(pb, (bb => xM(Hb, bb)))
        }
        async function ke(bb, wb, Mb) {
          const Hb = (0, eb.N)(bb),
            pb = await bH(Hb.auth, wb, (0, eb.N)(Mb));
          return new ye(pb, (bb => jM(Hb, bb)))
        }
        async function bH(bb, wb, Mb) {
          var eb;
          const Hb = await Mb.verify();
          try {
            let pb;
            if (Kb("string" === typeof Hb, bb, "argument-error"), Kb(Mb.type === de, bb, "argument-error"), pb = "string" === typeof wb ? {
                phoneNumber: wb
              } : wb, "session" in pb) {
              const wb = pb.session;
              if ("phoneNumber" in pb) {
                Kb("enroll" === wb.type, bb, "internal-error");
                const Mb = await
                function(bb, wb) {
                  return Nb(bb, "POST", "/v2/accounts/mfaEnrollment:start", Sb(bb, wb))
                }(bb, {
                  idToken: wb.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: pb.phoneNumber,
                    recaptchaToken: Hb
                  }
                });
                return Mb.phoneSessionInfo.sessionInfo
              } {
                Kb("signin" === wb.type, bb, "internal-error");
                const Mb = (null === (eb = pb.multiFactorHint) || void 0 === eb ? void 0 : eb.uid) || pb.multiFactorUid;
                Kb(Mb, bb, "missing-multi-factor-info");
                const Vb = await
                function(bb, wb) {
                  return Nb(bb, "POST", "/v2/accounts/mfaSignIn:start", Sb(bb, wb))
                }(bb, {
                  mfaPendingCredential: wb.credential,
                  mfaEnrollmentId: Mb,
                  phoneSignInInfo: {
                    recaptchaToken: Hb
                  }
                });
                return Vb.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: wb
              } = await async function(bb, wb) {
                return Nb(bb, "POST", "/v1/accounts:sendVerificationCode", Sb(bb, wb))
              }(bb, {
                phoneNumber: pb.phoneNumber,
                recaptchaToken: Hb
              });
              return wb
            }
          } finally {
            Mb._reset()
          }
        }
        async function wH(bb, wb) {
          await sM((0, eb.N)(bb), wb)
        }
        class MH {
          constructor(bb) {
            this.providerId = MH.PROVIDER_ID, this.auth = fw(bb)
          }
          verifyPhoneNumber(bb, wb) {
            return bH(this.auth, bb, (0, eb.N)(wb))
          }
          static credential(bb, wb) {
            return ow._fromVerification(bb, wb)
          }
          static credentialFromResult(bb) {
            const wb = bb;
            return MH.credentialFromTaggedObject(wb)
          }
          static credentialFromError(bb) {
            return MH.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: wb
            } = bb;
            if (!wb) return null;
            const {
              phoneNumber: Mb,
              temporaryProof: eb
            } = wb;
            return Mb && eb ? ow._fromTokenResponse(Mb, eb) : null
          }
        }

        function eH(bb, wb) {
          return wb ? pw(wb) : (Kb(bb._popupRedirectResolver, bb, "argument-error"), bb._popupRedirectResolver)
        }
        MH.PROVIDER_ID = "phone", MH.PHONE_SIGN_IN_METHOD = "phone";
        class HH extends vw {
          constructor(bb) {
            super("custom", "custom"), this.params = bb
          }
          _getIdTokenResponse(bb) {
            return Pw(bb, this._buildIdpRequest())
          }
          _linkToIdToken(bb, wb) {
            return Pw(bb, this._buildIdpRequest(wb))
          }
          _getReauthenticationResolver(bb) {
            return Pw(bb, this._buildIdpRequest())
          }
          _buildIdpRequest(bb) {
            const wb = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return bb && (wb.idToken = bb), wb
          }
        }

        function pH(bb) {
          return zM(bb.auth, new HH(bb), bb.bypassAuthState)
        }

        function VH(bb) {
          const {
            auth: wb,
            user: Mb
          } = bb;
          return Kb(Mb, wb, "internal-error"), hM(Mb, new HH(bb), bb.bypassAuthState)
        }
        async function gH(bb) {
          const {
            auth: wb,
            user: Mb
          } = bb;
          return Kb(Mb, wb, "internal-error"), sM(Mb, new HH(bb), bb.bypassAuthState)
        }
        class lH {
          constructor(bb, wb, Mb, eb) {
            let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = bb, this.resolver = Mb, this.user = eb, this.bypassAuthState = Hb, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(wb) ? wb : [wb]
          }
          execute() {
            return new Promise((async (bb, wb) => {
              this.pendingPromise = {
                resolve: bb,
                reject: wb
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (Mb) {
                this.reject(Mb)
              }
            }))
          }
          async onAuthEvent(bb) {
            const {
              urlResponse: wb,
              sessionId: Mb,
              postBody: eb,
              tenantId: Hb,
              error: pb,
              type: Vb
            } = bb;
            if (pb) return void this.reject(pb);
            const gb = {
              auth: this.auth,
              requestUri: wb,
              sessionId: Mb,
              tenantId: Hb || void 0,
              postBody: eb || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Vb)(gb))
            } catch (lb) {
              this.reject(lb)
            }
          }
          onError(bb) {
            this.reject(bb)
          }
          getIdpTask(bb) {
            switch (bb) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return pH;
              case "linkViaPopup":
              case "linkViaRedirect":
                return gH;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return VH;
              default:
                hb(this.auth, "internal-error")
            }
          }
          resolve(bb) {
            Rb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(bb), this.unregisterAndCleanUp()
          }
          reject(bb) {
            Rb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(bb), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const LH = new Zb(2e3, 1e4);
        async function IH(bb, wb, Mb) {
          const eb = fw(bb);
          xb(bb, wb, wM);
          const Hb = eH(eb, Mb);
          return new tH(eb, "signInViaPopup", wb, Hb).executeNotNull()
        }
        async function OH(bb, wb, Mb) {
          const Hb = (0, eb.N)(bb);
          xb(Hb.auth, wb, wM);
          const pb = eH(Hb.auth, Mb);
          return new tH(Hb.auth, "reauthViaPopup", wb, pb, Hb).executeNotNull()
        }
        async function UH(bb, wb, Mb) {
          const Hb = (0, eb.N)(bb);
          xb(Hb.auth, wb, wM);
          const pb = eH(Hb.auth, Mb);
          return new tH(Hb.auth, "linkViaPopup", wb, pb, Hb).executeNotNull()
        }
        class tH extends lH {
          constructor(bb, wb, Mb, eb, Hb) {
            super(bb, wb, eb, Hb), this.provider = Mb, this.authWindow = null, this.pollId = null, tH.currentPopupAction && tH.currentPopupAction.cancel(), tH.currentPopupAction = this
          }
          async executeNotNull() {
            const bb = await this.execute();
            return Kb(bb, this.auth, "internal-error"), bb
          }
          async onExecution() {
            Rb(1 === this.filter.length, "Popup operations only handle one event");
            const bb = je();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], bb), this.authWindow.associatedEvent = bb, this.resolver._originValidation(this.auth).catch((bb => {
              this.reject(bb)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (bb => {
              bb || this.reject(zb(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var bb;
            return (null === (bb = this.authWindow) || void 0 === bb ? void 0 : bb.associatedEvent) || null
          }
          cancel() {
            this.reject(zb(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, tH.currentPopupAction = null
          }
          pollUserCancellation() {
            const bb = () => {
              var wb, Mb;
              (null === (Mb = null === (wb = this.authWindow) || void 0 === wb ? void 0 : wb.window) || void 0 === Mb ? void 0 : Mb.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(zb(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(bb, LH.get())
            };
            bb()
          }
        }
        tH.currentPopupAction = null;
        const CH = "pendingRedirect",
          EH = new Map;
        class FH extends lH {
          constructor(bb, wb) {
            super(bb, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], wb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let bb = EH.get(this.auth._key());
            if (!bb) {
              try {
                const wb = await async function(bb, wb) {
                  const Mb = hH(wb),
                    eb = mH(bb);
                  if (!await eb._isAvailable()) return !1;
                  const Hb = "true" === await eb._get(Mb);
                  return await eb._remove(Mb), Hb
                }(this.resolver, this.auth) ? await super.execute() : null;
                bb = () => Promise.resolve(wb)
              } catch (wb) {
                bb = () => Promise.reject(wb)
              }
              EH.set(this.auth._key(), bb)
            }
            return this.bypassAuthState || EH.set(this.auth._key(), (() => Promise.resolve(null))), bb()
          }
          async onAuthEvent(bb) {
            if ("signInViaRedirect" === bb.type) return super.onAuthEvent(bb);
            if ("unknown" !== bb.type) {
              if (bb.eventId) {
                const wb = await this.auth._redirectUserForId(bb.eventId);
                if (wb) return this.user = wb, super.onAuthEvent(bb);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function BH(bb, wb) {
          return mH(bb)._set(hH(wb), "true")
        }

        function sH(bb, wb) {
          EH.set(bb._key(), wb)
        }

        function mH(bb) {
          return pw(bb._redirectPersistence)
        }

        function hH(bb) {
          return lw(CH, bb.config.apiKey, bb.name)
        }

        function zH(bb, wb, Mb) {
          return async function(bb, wb, Mb) {
            const eb = fw(bb);
            xb(bb, wb, wM), await eb._initializationPromise;
            const Hb = eH(eb, Mb);
            return await BH(Hb, eb), Hb._openRedirect(eb, wb, "signInViaRedirect")
          }(bb, wb, Mb)
        }

        function XH(bb, wb, Mb) {
          return async function(bb, wb, Mb) {
            const Hb = (0, eb.N)(bb);
            xb(Hb.auth, wb, wM), await Hb.auth._initializationPromise;
            const pb = eH(Hb.auth, Mb);
            await BH(pb, Hb.auth);
            const Vb = await rH(Hb);
            return pb._openRedirect(Hb.auth, wb, "reauthViaRedirect", Vb)
          }(bb, wb, Mb)
        }

        function xH(bb, wb, Mb) {
          return async function(bb, wb, Mb) {
            const Hb = (0, eb.N)(bb);
            xb(Hb.auth, wb, wM), await Hb.auth._initializationPromise;
            const pb = eH(Hb.auth, Mb);
            await mM(!1, Hb, wb.providerId), await BH(pb, Hb.auth);
            const Vb = await rH(Hb);
            return pb._openRedirect(Hb.auth, wb, "linkViaRedirect", Vb)
          }(bb, wb, Mb)
        }
        async function jH(bb, wb) {
          return await fw(bb)._initializationPromise, KH(bb, wb, !1)
        }
        async function KH(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const eb = fw(bb),
            Hb = eH(eb, wb),
            pb = new FH(eb, Hb, Mb),
            Vb = await pb.execute();
          return Vb && !Mb && (delete Vb.user._redirectEventId, await eb._persistUserIfCurrent(Vb.user), await eb._setRedirectUser(null, wb)), Vb
        }
        async function rH(bb) {
          const wb = je(`${bb.uid}:::`);
          return bb._redirectEventId = wb, await bb.auth._setRedirectUser(bb), await bb.auth._persistUserIfCurrent(bb), wb
        }
        class RH {
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
            let wb = !1;
            return this.consumers.forEach((Mb => {
              this.isEventForConsumer(bb, Mb) && (wb = !0, this.sendToConsumer(bb, Mb), this.saveEventToCache(bb))
            })), this.hasHandledPotentialRedirect || ! function(bb) {
              switch (bb.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return cH(bb);
                default:
                  return !1
              }
            }(bb) || (this.hasHandledPotentialRedirect = !0, wb || (this.queuedRedirectEvent = bb, wb = !0)), wb
          }
          sendToConsumer(bb, wb) {
            var Mb;
            if (bb.error && !cH(bb)) {
              const eb = (null === (Mb = bb.error.code) || void 0 === Mb ? void 0 : Mb.split("auth/")[1]) || "internal-error";
              wb.onError(zb(this.auth, eb))
            } else wb.onAuthEvent(bb)
          }
          isEventForConsumer(bb, wb) {
            const Mb = null === wb.eventId || !!bb.eventId && bb.eventId === wb.eventId;
            return wb.filter.includes(bb.type) && Mb
          }
          hasEventBeenHandled(bb) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(DH(bb))
          }
          saveEventToCache(bb) {
            this.cachedEventUids.add(DH(bb)), this.lastProcessedEventTime = Date.now()
          }
        }

        function DH(bb) {
          return [bb.type, bb.eventId, bb.sessionId, bb.tenantId].filter((bb => bb)).join("-")
        }

        function cH(bb) {
          let {
            type: wb,
            error: Mb
          } = bb;
          return "unknown" === wb && "auth/no-auth-event" === (null === Mb || void 0 === Mb ? void 0 : Mb.code)
        }
        const YH = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          ZH = /^https?/;
        async function fH(bb) {
          if (bb.config.emulator) return;
          const {
            authorizedDomains: wb
          } = await async function(bb) {
            return Nb(bb, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(bb);
          for (const eb of wb) try {
            if (AH(eb)) return
          } catch (Mb) {}
          hb(bb, "unauthorized-domain")
        }

        function AH(bb) {
          const wb = Db(),
            {
              protocol: Mb,
              hostname: eb
            } = new URL(wb);
          if (bb.startsWith("chrome-extension://")) {
            const Hb = new URL(bb);
            return "" === Hb.hostname && "" === eb ? "chrome-extension:" === Mb && bb.replace("chrome-extension://", "") === wb.replace("chrome-extension://", "") : "chrome-extension:" === Mb && Hb.hostname === eb
          }
          if (!ZH.test(Mb)) return !1;
          if (YH.test(bb)) return eb === bb;
          const Hb = bb.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Hb + "|" + Hb + ")$", "i").test(eb)
        }
        const WH = new Zb(3e4, 6e4);

        function JH() {
          const bb = re().___jsl;
          if (null === bb || void 0 === bb ? void 0 : bb.H)
            for (const wb of Object.keys(bb.H))
              if (bb.H[wb].r = bb.H[wb].r || [], bb.H[wb].L = bb.H[wb].L || [], bb.H[wb].r = [...bb.H[wb].L], bb.CP)
                for (let Mb = 0; Mb < bb.CP.length; Mb++) bb.CP[Mb] = null
        }
        let SH = null;

        function NH(bb) {
          return SH = SH || function(bb) {
            return new Promise(((wb, Mb) => {
              var eb, Hb, pb;

              function Vb() {
                JH(), gapi.load("gapi.iframes", {
                  callback: () => {
                    wb(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    JH(), Mb(zb(bb, "network-request-failed"))
                  },
                  timeout: WH.get()
                })
              }
              if (null === (Hb = null === (eb = re().gapi) || void 0 === eb ? void 0 : eb.iframes) || void 0 === Hb ? void 0 : Hb.Iframe) wb(gapi.iframes.getContext());
              else {
                if (!(null === (pb = re().gapi) || void 0 === pb ? void 0 : pb.load)) {
                  const wb = rw("iframefcb");
                  return re()[wb] = () => {
                    gapi.load ? Vb() : Mb(zb(bb, "network-request-failed"))
                  }, Kw(`https://apis.google.com/js/api.js?onload=${wb}`).catch((bb => Mb(bb)))
                }
                Vb()
              }
            })).catch((bb => {
              throw SH = null, bb
            }))
          }(bb), SH
        }
        const vH = new Zb(5e3, 15e3),
          QH = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          GH = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function qH(bb) {
          const wb = bb.config;
          Kb(wb.authDomain, bb, "auth-domain-config-required");
          const Mb = wb.emulator ? fb(wb, "emulator/auth/iframe") : `https://${bb.config.authDomain}/__/auth/iframe`,
            pb = {
              apiKey: wb.apiKey,
              appName: bb.name,
              v: Hb.f
            },
            Vb = GH.get(bb.config.apiHost);
          Vb && (pb.eid = Vb);
          const gb = bb._getFrameworks();
          return gb.length && (pb.fw = gb.join(",")), `${Mb}?${(0,eb.db)(pb).slice(1)}`
        }
        const aH = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class iH {
          constructor(bb) {
            this.window = bb, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (bb) {}
          }
        }

        function uH(bb, wb, Mb) {
          let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Vb = Math.max((window.screen.availHeight - pb) / 2, 0).toString(),
            gb = Math.max((window.screen.availWidth - Hb) / 2, 0).toString();
          let lb = "";
          const Lb = Object.assign(Object.assign({}, aH), {
              width: Hb.toString(),
              height: pb.toString(),
              top: Vb,
              left: gb
            }),
            Ib = (0, eb.R)().toLowerCase();
          Mb && (lb = tw(Ib) ? "_blank" : Mb), Ow(Ib) && (wb = wb || "http://localhost", Lb.scrollbars = "yes");
          const Ob = Object.entries(Lb).reduce(((bb, wb) => {
            let [Mb, eb] = wb;
            return `${bb}${Mb}=${eb},`
          }), "");
          if (function() {
              var bb;
              return sw(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.R)()) && !!(null === (bb = window.navigator) || void 0 === bb ? void 0 : bb.standalone)
            }(Ib) && "_self" !== lb) return function(bb, wb) {
            const Mb = document.createElement("a");
            Mb.href = bb, Mb.target = wb;
            const eb = document.createEvent("MouseEvent");
            eb.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), Mb.dispatchEvent(eb)
          }(wb || "", lb), new iH(null);
          const Ub = window.open(wb || "", lb, Ob);
          Kb(Ub, bb, "popup-blocked");
          try {
            Ub.focus()
          } catch (tb) {}
          return new iH(Ub)
        }
        const dH = "__/auth/handler",
          PH = "emulator/auth/handler",
          nH = encodeURIComponent("fac");
        async function yH(bb, wb, Mb, pb, Vb, gb) {
            Kb(bb.config.authDomain, bb, "auth-domain-config-required"), Kb(bb.config.apiKey, bb, "invalid-api-key");
            const lb = {
              apiKey: bb.config.apiKey,
              appName: bb.name,
              authType: Mb,
              redirectUrl: pb,
              v: Hb.f,
              eventId: Vb
            };
            if (wb instanceof wM) {
              wb.setDefaultLanguage(bb.languageCode), lb.providerId = wb.providerId || "", (0, eb.U)(wb.getCustomParameters()) || (lb.customParameters = JSON.stringify(wb.getCustomParameters()));
              for (const [bb, wb] of Object.entries(gb || {})) lb[bb] = wb
            }
            if (wb instanceof MM) {
              const bb = wb.getScopes().filter((bb => "" !== bb));
              bb.length > 0 && (lb.scopes = bb.join(","))
            }
            bb.tenantId && (lb.tid = bb.tenantId);
            const Lb = lb;
            for (const eb of Object.keys(Lb)) void 0 === Lb[eb] && delete Lb[eb];
            const Ib = await bb._getAppCheckToken(),
              Ob = Ib ? `#${nH}=${encodeURIComponent(Ib)}` : "";
            return `${function(bb){let{config:wb}=bb;if(!wb.emulator)return`
            https: //${wb.authDomain}/${dH}`;return fb(wb,PH)}(bb)}?${(0,eb.db)(Lb).slice(1)}${Ob}`}const oH="webStorageSupport";const TH=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xe,this._completeRedirectFn=KH,this._overrideRedirectResult=sH}async _openPopup(bb,wb,Mb,eb){var Hb;Rb(null===(Hb=this.eventManagers[bb._key()])||void 0===Hb?void 0:Hb.manager,"_initialize() not called before _openPopup()");return uH(bb,await yH(bb,wb,Mb,Db(),eb),je())}async _openRedirect(bb,wb,Mb,eb){await this._originValidation(bb);return function(bb){re().location.href=bb}(await yH(bb,wb,Mb,Db(),eb)),new Promise((()=>{}))}_initialize(bb){const wb=bb._key();if(this.eventManagers[wb]){const{manager:bb,promise:Mb}=this.eventManagers[wb];return bb?Promise.resolve(bb):(Rb(Mb,"If manager is not set, promise should be"),Mb)}const Mb=this.initAndGetManager(bb);return this.eventManagers[wb]={promise:Mb},Mb.catch((()=>{delete this.eventManagers[wb]})),Mb}async initAndGetManager(bb){const wb=await async function(bb){const wb=await NH(bb),Mb=re().gapi;return Kb(Mb,bb,"internal-error"),wb.open({where:document.body,url:qH(bb),messageHandlersFilter:Mb.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QH,dontclear:!0},(wb=>new Promise((async(Mb,eb)=>{await wb.restyle({setHideOnLeave:!1});const Hb=zb(bb,"network-request-failed"),pb=re().setTimeout((()=>{eb(Hb)}),vH.get());function Vb(){re().clearTimeout(pb),Mb(wb)}wb.ping(Vb).then(Vb,(()=>{eb(Hb)}))}))))}(bb),Mb=new RH(bb);return wb.register("authEvent",(wb=>{Kb(null===wb||void 0===wb?void 0:wb.authEvent,bb,"invalid-auth-event");return{status:Mb.onEvent(wb.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[bb._key()]={manager:Mb},this.iframes[bb._key()]=wb,Mb}_isIframeWebStorageSupported(bb,wb){this.iframes[bb._key()].send(oH,{type:oH},(Mb=>{var eb;const Hb=null===(eb=null===Mb||void 0===Mb?void 0:Mb[0])||void 0===eb?void 0:eb[oH];void 0!==Hb&&wb(!!Hb),hb(bb,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(bb){const wb=bb._key();return this.originValidationPromises[wb]||(this.originValidationPromises[wb]=fH(bb)),this.originValidationPromises[wb]}get _shouldInitProactively(){return mw()||Uw()||sw()}};class kH{constructor(bb){this.factorId=bb}_process(bb,wb,Mb){switch(wb.type){case"enroll":return this._finalizeEnroll(bb,wb.credential,Mb);case"signin":return this._finalizeSignIn(bb,wb.credential);default:return rb("unexpected MultiFactorSessionType")}}}class bp extends kH{constructor(bb){super("phone"),this.credential=bb}static _fromCredential(bb){return new bp(bb)}_finalizeEnroll(bb,wb,Mb){return function(bb,wb){return Nb(bb,"POST","/v2/accounts/mfaEnrollment:finalize",Sb(bb,wb))}(bb,{idToken:wb,displayName:Mb,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(bb,wb){return function(bb,wb){return Nb(bb,"POST","/v2/accounts/mfaSignIn:finalize",Sb(bb,wb))}(bb,{mfaPendingCredential:wb,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wp{constructor(){}static assertion(bb){return bp._fromCredential(bb)}}wp.FACTOR_ID="phone";class Mp{static assertionForEnrollment(bb,wb){return ep._fromSecret(bb,wb)}static assertionForSignIn(bb,wb){return ep._fromEnrollmentId(bb,wb)}static async generateSecret(bb){const wb=bb;Kb("undefined"!==typeof wb.auth,"internal-error");const Mb=await(eb=wb.auth,Hb={idToken:wb.credential,totpEnrollmentInfo:{}},Nb(eb,"POST","/v2/accounts/mfaEnrollment:start",Sb(eb,Hb)));var eb,Hb;return Hp._fromStartTotpMfaEnrollmentResponse(Mb,wb.auth)}}Mp.FACTOR_ID="totp";class ep extends kH{constructor(bb,wb,Mb){super("totp"),this.otp=bb,this.enrollmentId=wb,this.secret=Mb}static _fromSecret(bb,wb){return new ep(wb,void 0,bb)}static _fromEnrollmentId(bb,wb){return new ep(wb,bb)}async _finalizeEnroll(bb,wb,Mb){return Kb("undefined"!==typeof this.secret,bb,"argument-error"),function(bb,wb){return Nb(bb,"POST","/v2/accounts/mfaEnrollment:finalize",Sb(bb,wb))}(bb,{idToken:wb,displayName:Mb,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(bb,wb){Kb(void 0!==this.enrollmentId&&void 0!==this.otp,bb,"argument-error");const Mb={verificationCode:this.otp};return function(bb,wb){return Nb(bb,"POST","/v2/accounts/mfaSignIn:finalize",Sb(bb,wb))}(bb,{mfaPendingCredential:wb,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:Mb})}}class Hp{constructor(bb,wb,Mb,eb,Hb,pb,Vb){this.sessionInfo=pb,this.auth=Vb,this.secretKey=bb,this.hashingAlgorithm=wb,this.codeLength=Mb,this.codeIntervalSeconds=eb,this.enrollmentCompletionDeadline=Hb}static _fromStartTotpMfaEnrollmentResponse(bb,wb){return new Hp(bb.totpSessionInfo.sharedSecretKey,bb.totpSessionInfo.hashingAlgorithm,bb.totpSessionInfo.verificationCodeLength,bb.totpSessionInfo.periodSec,new Date(bb.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),bb.totpSessionInfo.sessionInfo,wb)}_makeTotpVerificationInfo(bb){return{sessionInfo:this.sessionInfo,verificationCode:bb}}generateQrCodeUrl(bb,wb){var Mb;let eb=!1;return(pp(bb)||pp(wb))&&(eb=!0),eb&&(pp(bb)&&(bb=(null===(Mb=this.auth.currentUser)||void 0===Mb?void 0:Mb.email)||"unknownuser"),pp(wb)&&(wb=this.auth.name)),`otpauth://totp/${wb}:${bb}?secret=${this.secretKey}&issuer=${wb}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function pp(bb){return"undefined"===typeof bb||0===(null===bb||void 0===bb?void 0:bb.length)}var Vp="@firebase/auth",gp="0.23.2";class lp{constructor(bb){this.auth=bb,this.internalListeners=new Map}getUid(){var bb;return this.assertAuthConfigured(),(null===(bb=this.auth.currentUser)||void 0===bb?void 0:bb.uid)||null}async getToken(bb){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(bb)}}addAuthTokenListener(bb){if(this.assertAuthConfigured(),this.internalListeners.has(bb))return;const wb=this.auth.onIdTokenChanged((wb=>{bb((null===wb||void 0===wb?void 0:wb.stsTokenManager.accessToken)||null)}));this.internalListeners.set(bb,wb),this.updateProactiveRefresh()}removeAuthTokenListener(bb){this.assertAuthConfigured();const wb=this.internalListeners.get(bb);wb&&(this.internalListeners.delete(bb),wb(),this.updateProactiveRefresh())}assertAuthConfigured(){Kb(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const Lp=(0,eb.J)("authIdTokenMaxAge")||300;let Ip=null;const Op=bb=>async wb=>{const Mb=wb&&await wb.getIdTokenResult(),eb=Mb&&((new Date).getTime()-Date.parse(Mb.issuedAtTime))/1e3;if(eb&&eb>Lp)return;const Hb=null===Mb||void 0===Mb?void 0:Mb.token;Ip!==Hb&&(Ip=Hb,await fetch(bb,{method:Hb?"POST":"DELETE",headers:Hb?{Authorization:`Bearer ${Hb}`}:{}}))};function Up(){let bb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Hb.E)();const wb=(0,Hb.w)(bb,"auth");if(wb.isInitialized())return wb.getImmediate();const Mb=Ww(bb,{popupRedirectResolver:TH,persistence:[Ne,he,Xe]}),pb=(0,eb.J)("authTokenSyncURL");if(pb){const bb=Op(pb);pe(Mb,bb,(()=>bb(Mb.currentUser))),He(Mb,(wb=>bb(wb)))}const Vb=(0,eb.H)("auth");return Vb&&Jw(Mb,`http://${Vb}`),Mb}var tp;tp="Browser",(0,Hb.x)(new gb.g("auth",((bb,wb)=>{let{options:Mb}=wb;const eb=bb.getProvider("app").getImmediate(),Hb=bb.getProvider("heartbeat"),pb=bb.getProvider("app-check-internal"),{apiKey:Vb,authDomain:gb}=eb.options;Kb(Vb&&!Vb.includes(":"),"invalid-api-key",{appName:eb.name});const lb={apiKey:Vb,authDomain:gb,clientPlatform:tp,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hw(tp)},Lb=new Zw(eb,Hb,pb,lb);return function(bb,wb){const Mb=(null===wb||void 0===wb?void 0:wb.persistence)||[],eb=(Array.isArray(Mb)?Mb:[Mb]).map(pw);(null===wb||void 0===wb?void 0:wb.errorMap)&&bb._updateErrorMap(wb.errorMap),bb._initializeWithPersistence(eb,null===wb||void 0===wb?void 0:wb.popupRedirectResolver)}(Lb,Mb),Lb}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((bb,wb,Mb)=>{bb.getProvider("auth-internal").initialize()}))),(0,Hb.x)(new gb.g("auth-internal",(bb=>(bb=>new lp(bb))(fw(bb.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Hb.K)(Vp,gp,function(bb){switch(bb){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(tp)),(0,Hb.K)(Vp,gp,"esm2017")}};Object.freeze(modules);for(const bb in modules)Object.freeze(modules[bb]);