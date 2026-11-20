/*! For license information please see teusab.258.fce294e0.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
    39653: (bb, ab, Ub) => {
        Ub.r(ab), Ub.d(ab, {
          ActionCodeOperation: () => Pb,
          ActionCodeURL: () => Ja,
          AuthCredential: () => ra,
          AuthErrorCodes: () => yb,
          EmailAuthCredential: () => ga,
          EmailAuthProvider: () => Sa,
          FacebookAuthProvider: () => AU,
          FactorId: () => Bb,
          GithubAuthProvider: () => TU,
          GoogleAuthProvider: () => MU,
          OAuthCredential: () => Va,
          OAuthProvider: () => UU,
          OperationType: () => Lb,
          PhoneAuthCredential: () => ca,
          PhoneAuthProvider: () => aM,
          PhoneMultiFactorGenerator: () => bT,
          ProviderId: () => eb,
          RecaptchaVerifier: () => VA,
          SAMLAuthProvider: () => YU,
          SignInMethod: () => vb,
          TotpMultiFactorGenerator: () => aT,
          TotpSecret: () => AT,
          TwitterAuthProvider: () => BU,
          applyActionCode: () => FU,
          beforeAuthStateChanged: () => MA,
          browserLocalPersistence: () => DA,
          browserPopupRedirectResolver: () => JM,
          browserSessionPersistence: () => xA,
          checkActionCode: () => hU,
          confirmPasswordReset: () => dU,
          connectAuthEmulator: () => Qa,
          createUserWithEmailAndPassword: () => QU,
          debugErrorMap: () => jb,
          deleteUser: () => eA,
          fetchSignInMethodsForEmail: () => oU,
          getAdditionalUserInfo: () => bA,
          getAuth: () => LT,
          getIdToken: () => gb,
          getIdTokenResult: () => Cb,
          getMultiFactorResolver: () => PA,
          getRedirectResult: () => fM,
          inMemoryPersistence: () => Ya,
          indexedDBLocalPersistence: () => uA,
          initializeAuth: () => Ga,
          initializeRecaptchaConfig: () => UA,
          isSignInWithEmailLink: () => rU,
          linkWithCredential: () => iU,
          linkWithPhoneNumber: () => JA,
          linkWithPopup: () => LM,
          linkWithRedirect: () => iM,
          multiFactor: () => RA,
          onAuthStateChanged: () => TA,
          onIdTokenChanged: () => AA,
          parseActionCodeURL: () => na,
          prodErrorMap: () => Rb,
          reauthenticateWithCredential: () => fU,
          reauthenticateWithPhoneNumber: () => nA,
          reauthenticateWithPopup: () => vM,
          reauthenticateWithRedirect: () => xM,
          reload: () => ba,
          sendEmailVerification: () => lU,
          sendPasswordResetEmail: () => IU,
          sendSignInLinkToEmail: () => uU,
          setPersistence: () => aA,
          signInAnonymously: () => PU,
          signInWithCredential: () => xU,
          signInWithCustomToken: () => mU,
          signInWithEmailAndPassword: () => qU,
          signInWithEmailLink: () => KU,
          signInWithPhoneNumber: () => cA,
          signInWithPopup: () => eM,
          signInWithRedirect: () => zM,
          signOut: () => BA,
          unlink: () => kU,
          updateCurrentUser: () => YA,
          updateEmail: () => sU,
          updatePassword: () => gU,
          updatePhoneNumber: () => bM,
          updateProfile: () => wU,
          useDeviceLanguage: () => EA,
          verifyBeforeUpdateEmail: () => tU,
          verifyPasswordResetCode: () => GU
        });
        var Ab = Ub(39640),
          Mb = Ub(39626);

        function Tb(bb, ab) {
          var Ub = {};
          for (var Ab in bb) Object.prototype.hasOwnProperty.call(bb, Ab) && ab.indexOf(Ab) < 0 && (Ub[Ab] = bb[Ab]);
          if (null != bb && "function" === typeof Object.getOwnPropertySymbols) {
            var Mb = 0;
            for (Ab = Object.getOwnPropertySymbols(bb); Mb < Ab.length; Mb++) ab.indexOf(Ab[Mb]) < 0 && Object.prototype.propertyIsEnumerable.call(bb, Ab[Mb]) && (Ub[Ab[Mb]] = bb[Ab[Mb]])
          }
          return Ub
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Eb = Ub(39642),
          Yb = Ub(39631);
        const Bb = {
            PHONE: "phone",
            TOTP: "totp"
          },
          eb = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          vb = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Lb = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Pb = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Xb() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const jb = function() {
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
          Rb = Xb,
          kb = new Ab.e("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          yb = {
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
          Zb = new Eb.e("@firebase/auth");

        function Db(bb) {
          if (Zb.logLevel <= Eb.b.ERROR) {
            for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
            Zb.error(`Auth (${Mb.f}): ${bb}`, ...Ub)
          }
        }

        function zb(bb) {
          for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
          throw mb(bb, ...Ub)
        }

        function xb(bb) {
          for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
          return mb(bb, ...Ub)
        }

        function ib(bb, ab, Ub) {
          const Mb = Object.assign(Object.assign({}, Rb()), {
            [ab]: Ub
          });
          return new Ab.e("auth", "Firebase", Mb).create(ab, {
            appName: bb.name
          })
        }

        function fb(bb, ab, Ub) {
          if (!(ab instanceof Ub)) throw Ub.name !== ab.constructor.name && zb(bb, "argument-error"), ib(bb, "argument-error", `Type of ${ab.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function mb(bb) {
          for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
          if ("string" !== typeof bb) {
            const ab = Ub[0],
              Ab = [...Ub.slice(1)];
            return Ab[0] && (Ab[0].appName = bb.name), bb._errorFactory.create(ab, ...Ab)
          }
          return kb.create(bb, ...Ub)
        }

        function pb(bb, ab) {
          if (!bb) {
            for (var Ub = arguments.length, Ab = new Array(Ub > 2 ? Ub - 2 : 0), Mb = 2; Mb < Ub; Mb++) Ab[Mb - 2] = arguments[Mb];
            throw mb(ab, ...Ab)
          }
        }

        function Nb(bb) {
          const ab = "INTERNAL ASSERTION FAILED: " + bb;
          throw Db(ab), new Error(ab)
        }

        function Wb(bb, ab) {
          bb || Nb(ab)
        }

        function Hb() {
          var bb;
          return "undefined" !== typeof self && (null === (bb = self.location) || void 0 === bb ? void 0 : bb.href) || ""
        }

        function Ib() {
          return "http:" === db() || "https:" === db()
        }

        function db() {
          var bb;
          return "undefined" !== typeof self && (null === (bb = self.location) || void 0 === bb ? void 0 : bb.protocol) || null
        }
        class Fb {
          constructor(bb, ab) {
            this.shortDelay = bb, this.longDelay = ab, Wb(ab > bb, "Short delay should be less than long delay!"), this.isMobile = (0, Ab.Y)() || (0, Ab.Z)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Ib() || (0, Ab.P)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function hb(bb, ab) {
          Wb(bb.emulator, "Emulator should always be set here");
          const {
            url: Ub
          } = bb.emulator;
          return ab ? `${Ub}${ab.startsWith("/")?ab.slice(1):ab}` : Ub
        }
        class Gb {
          static initialize(bb, ab, Ub) {
            this.fetchImpl = bb, ab && (this.headersImpl = ab), Ub && (this.responseImpl = Ub)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Nb("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Nb("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Nb("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Qb = {
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
          qb = new Fb(3e4, 6e4);

        function ub(bb, ab) {
          return bb.tenantId && !ab.tenantId ? Object.assign(Object.assign({}, ab), {
            tenantId: bb.tenantId
          }) : ab
        }
        async function rb(bb, ab, Ub, Mb) {
          return Kb(bb, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Tb = {},
              Eb = {};
            Mb && ("GET" === ab ? Eb = Mb : Tb = {
              body: JSON.stringify(Mb)
            });
            const Yb = (0, Ab.$)(Object.assign({
                key: bb.config.apiKey
              }, Eb)).slice(1),
              Bb = await bb._getAdditionalHeaders();
            return Bb["Content-Type"] = "application/json", bb.languageCode && (Bb["X-Firebase-Locale"] = bb.languageCode), Gb.fetch()(lb(bb, bb.config.apiHost, Ub, Yb), Object.assign({
              method: ab,
              headers: Bb,
              referrerPolicy: "no-referrer"
            }, Tb))
          }))
        }
        async function Kb(bb, ab, Ub) {
          bb._canInitEmulator = !1;
          const Mb = Object.assign(Object.assign({}, Qb), ab);
          try {
            const ab = new tb(bb),
              Ab = await Promise.race([Ub(), ab.promise]);
            ab.clearNetworkTimeout();
            const Tb = await Ab.json();
            if ("needConfirmation" in Tb) throw wb(bb, "account-exists-with-different-credential", Tb);
            if (Ab.ok && !("errorMessage" in Tb)) return Tb;
            {
              const ab = Ab.ok ? Tb.errorMessage : Tb.error.message,
                [Ub, Eb] = ab.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === Ub) throw wb(bb, "credential-already-in-use", Tb);
              if ("EMAIL_EXISTS" === Ub) throw wb(bb, "email-already-in-use", Tb);
              if ("USER_DISABLED" === Ub) throw wb(bb, "user-disabled", Tb);
              const Yb = Mb[Ub] || Ub.toLowerCase().replace(/[_\s]+/g, "-");
              if (Eb) throw ib(bb, Yb, Eb);
              zb(bb, Yb)
            }
          } catch (Tb) {
            if (Tb instanceof Ab.g) throw Tb;
            zb(bb, "network-request-failed", {
              message: String(Tb)
            })
          }
        }
        async function ob(bb, ab, Ub, Ab) {
          let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Tb = await rb(bb, ab, Ub, Ab, Mb);
          return "mfaPendingCredential" in Tb && zb(bb, "multi-factor-auth-required", {
            _serverResponse: Tb
          }), Tb
        }

        function lb(bb, ab, Ub, Ab) {
          const Mb = `${ab}${Ub}?${Ab}`;
          return bb.config.emulator ? hb(bb.config, Mb) : `${bb.config.apiScheme}://${Mb}`
        }
        class tb {
          constructor(bb) {
            this.auth = bb, this.timer = null, this.promise = new Promise(((bb, ab) => {
              this.timer = setTimeout((() => ab(xb(this.auth, "network-request-failed"))), qb.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function wb(bb, ab, Ub) {
          const Ab = {
            appName: bb.name
          };
          Ub.email && (Ab.email = Ub.email), Ub.phoneNumber && (Ab.phoneNumber = Ub.phoneNumber);
          const Mb = xb(bb, ab, Ab);
          return Mb.customData._tokenResponse = Ub, Mb
        }

        function sb(bb) {
          if (bb) try {
            const ab = new Date(Number(bb));
            if (!isNaN(ab.getTime())) return ab.toUTCString()
          } catch (ab) {}
        }

        function gb(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Ab.I)(bb).getIdToken(ab)
        }
        async function Cb(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const Ub = (0, Ab.I)(bb),
            Mb = await Ub.getIdToken(ab),
            Tb = Ob(Mb);
          pb(Tb && Tb.exp && Tb.auth_time && Tb.iat, Ub.auth, "internal-error");
          const Eb = "object" === typeof Tb.firebase ? Tb.firebase : void 0,
            Yb = null === Eb || void 0 === Eb ? void 0 : Eb.sign_in_provider;
          return {
            claims: Tb,
            token: Mb,
            authTime: sb(Vb(Tb.auth_time)),
            issuedAtTime: sb(Vb(Tb.iat)),
            expirationTime: sb(Vb(Tb.exp)),
            signInProvider: Yb || null,
            signInSecondFactor: (null === Eb || void 0 === Eb ? void 0 : Eb.sign_in_second_factor) || null
          }
        }

        function Vb(bb) {
          return 1e3 * Number(bb)
        }

        function Ob(bb) {
          const [ab, Ub, Mb] = bb.split(".");
          if (void 0 === ab || void 0 === Ub || void 0 === Mb) return Db("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const bb = (0, Ab.m)(Ub);
            return bb ? JSON.parse(bb) : (Db("Failed to decode base64 JWT payload"), null)
          } catch (Tb) {
            return Db("Caught error parsing JWT payload as JSON", null === Tb || void 0 === Tb ? void 0 : Tb.toString()), null
          }
        }
        async function cb(bb, ab) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return ab;
          try {
            return await ab
          } catch (Ub) {
            throw Ub instanceof Ab.g && function(bb) {
              let {
                code: ab
              } = bb;
              return "auth/user-disabled" === ab || "auth/user-token-expired" === ab
            }(Ub) && bb.auth.currentUser === bb && await bb.auth.signOut(), Ub
          }
        }
        class Jb {
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
            var ab;
            if (bb) {
              const bb = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), bb
            } {
              this.errorBackoff = 3e4;
              const bb = (null !== (ab = this.user.stsTokenManager.expirationTime) && void 0 !== ab ? ab : 0) - Date.now() - 3e5;
              return Math.max(0, bb)
            }
          }
          schedule() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const ab = this.getInterval(bb);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), ab)
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
        class nb {
          constructor(bb, ab) {
            this.createdAt = bb, this.lastLoginAt = ab, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = sb(this.lastLoginAt), this.creationTime = sb(this.createdAt)
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
        async function Sb(bb) {
          var ab;
          const Ub = bb.auth,
            Ab = await bb.getIdToken(),
            Mb = await cb(bb, async function(bb, ab) {
              return rb(bb, "POST", "/v1/accounts:lookup", ab)
            }(Ub, {
              idToken: Ab
            }));
          pb(null === Mb || void 0 === Mb ? void 0 : Mb.users.length, Ub, "internal-error");
          const Eb = Mb.users[0];
          bb._notifyReloadListener(Eb);
          const Yb = (null === (ab = Eb.providerUserInfo) || void 0 === ab ? void 0 : ab.length) ? Eb.providerUserInfo.map((bb => {
            var {
              providerId: ab
            } = bb, Ub = Tb(bb, ["providerId"]);
            return {
              providerId: ab,
              uid: Ub.rawId || "",
              displayName: Ub.displayName || null,
              email: Ub.email || null,
              phoneNumber: Ub.phoneNumber || null,
              photoURL: Ub.photoUrl || null
            }
          })) : [];
          const Bb = (eb = bb.providerData, vb = Yb, [...eb.filter((bb => !vb.some((ab => ab.providerId === bb.providerId)))), ...vb]);
          var eb, vb;
          const Lb = bb.isAnonymous,
            Pb = !(bb.email && Eb.passwordHash) && !(null === Bb || void 0 === Bb ? void 0 : Bb.length),
            Xb = !!Lb && Pb,
            jb = {
              uid: Eb.localId,
              displayName: Eb.displayName || null,
              photoURL: Eb.photoUrl || null,
              email: Eb.email || null,
              emailVerified: Eb.emailVerified || !1,
              phoneNumber: Eb.phoneNumber || null,
              tenantId: Eb.tenantId || null,
              providerData: Bb,
              metadata: new nb(Eb.createdAt, Eb.lastLoginAt),
              isAnonymous: Xb
            };
          Object.assign(bb, jb)
        }
        async function ba(bb) {
          const ab = (0, Ab.I)(bb);
          await Sb(ab), await ab.auth._persistUserIfCurrent(ab), ab.auth._notifyListenersIfCurrent(ab)
        }
        class aa {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(bb) {
            pb(bb.idToken, "internal-error"), pb("undefined" !== typeof bb.idToken, "internal-error"), pb("undefined" !== typeof bb.refreshToken, "internal-error");
            const ab = "expiresIn" in bb && "undefined" !== typeof bb.expiresIn ? Number(bb.expiresIn) : function(bb) {
              const ab = Ob(bb);
              return pb(ab, "internal-error"), pb("undefined" !== typeof ab.exp, "internal-error"), pb("undefined" !== typeof ab.iat, "internal-error"), Number(ab.exp) - Number(ab.iat)
            }(bb.idToken);
            this.updateTokensAndExpiration(bb.idToken, bb.refreshToken, ab)
          }
          async getToken(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return pb(!this.accessToken || this.refreshToken, bb, "user-token-expired"), ab || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(bb, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(bb, ab) {
            const {
              accessToken: Ub,
              refreshToken: Mb,
              expiresIn: Tb
            } = await async function(bb, ab) {
              const Ub = await Kb(bb, {}, (async () => {
                const Ub = (0, Ab.$)({
                    grant_type: "refresh_token",
                    refresh_token: ab
                  }).slice(1),
                  {
                    tokenApiHost: Mb,
                    apiKey: Tb
                  } = bb.config,
                  Eb = lb(bb, Mb, "/v1/token", `key=${Tb}`),
                  Yb = await bb._getAdditionalHeaders();
                return Yb["Content-Type"] = "application/x-www-form-urlencoded", Gb.fetch()(Eb, {
                  method: "POST",
                  headers: Yb,
                  body: Ub
                })
              }));
              return {
                accessToken: Ub.access_token,
                expiresIn: Ub.expires_in,
                refreshToken: Ub.refresh_token
              }
            }(bb, ab);
            this.updateTokensAndExpiration(Ub, Mb, Number(Tb))
          }
          updateTokensAndExpiration(bb, ab, Ub) {
            this.refreshToken = ab || null, this.accessToken = bb || null, this.expirationTime = Date.now() + 1e3 * Ub
          }
          static fromJSON(bb, ab) {
            const {
              refreshToken: Ub,
              accessToken: Ab,
              expirationTime: Mb
            } = ab, Tb = new aa;
            return Ub && (pb("string" === typeof Ub, "internal-error", {
              appName: bb
            }), Tb.refreshToken = Ub), Ab && (pb("string" === typeof Ab, "internal-error", {
              appName: bb
            }), Tb.accessToken = Ab), Mb && (pb("number" === typeof Mb, "internal-error", {
              appName: bb
            }), Tb.expirationTime = Mb), Tb
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
            return Object.assign(new aa, this.toJSON())
          }
          _performRefresh() {
            return Nb("not implemented")
          }
        }

        function Ua(bb, ab) {
          pb("string" === typeof bb || "undefined" === typeof bb, "internal-error", {
            appName: ab
          })
        }
        class Aa {
          constructor(bb) {
            var {
              uid: ab,
              auth: Ub,
              stsTokenManager: Ab
            } = bb, Mb = Tb(bb, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Jb(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = ab, this.auth = Ub, this.stsTokenManager = Ab, this.accessToken = Ab.accessToken, this.displayName = Mb.displayName || null, this.email = Mb.email || null, this.emailVerified = Mb.emailVerified || !1, this.phoneNumber = Mb.phoneNumber || null, this.photoURL = Mb.photoURL || null, this.isAnonymous = Mb.isAnonymous || !1, this.tenantId = Mb.tenantId || null, this.providerData = Mb.providerData ? [...Mb.providerData] : [], this.metadata = new nb(Mb.createdAt || void 0, Mb.lastLoginAt || void 0)
          }
          async getIdToken(bb) {
            const ab = await cb(this, this.stsTokenManager.getToken(this.auth, bb));
            return pb(ab, this.auth, "internal-error"), this.accessToken !== ab && (this.accessToken = ab, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), ab
          }
          getIdTokenResult(bb) {
            return Cb(this, bb)
          }
          reload() {
            return ba(this)
          }
          _assign(bb) {
            this !== bb && (pb(this.uid === bb.uid, this.auth, "internal-error"), this.displayName = bb.displayName, this.photoURL = bb.photoURL, this.email = bb.email, this.emailVerified = bb.emailVerified, this.phoneNumber = bb.phoneNumber, this.isAnonymous = bb.isAnonymous, this.tenantId = bb.tenantId, this.providerData = bb.providerData.map((bb => Object.assign({}, bb))), this.metadata._copy(bb.metadata), this.stsTokenManager._assign(bb.stsTokenManager))
          }
          _clone(bb) {
            const ab = new Aa(Object.assign(Object.assign({}, this), {
              auth: bb,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return ab.metadata._copy(this.metadata), ab
          }
          _onReload(bb) {
            pb(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = bb, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ub = !1;
            bb.idToken && bb.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(bb), Ub = !0), ab && await Sb(this), await this.auth._persistUserIfCurrent(this), Ub && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const bb = await this.getIdToken();
            return await cb(this, async function(bb, ab) {
              return rb(bb, "POST", "/v1/accounts:delete", ab)
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
          static _fromJSON(bb, ab) {
            var Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb;
            const vb = null !== (Ub = ab.displayName) && void 0 !== Ub ? Ub : void 0,
              Lb = null !== (Ab = ab.email) && void 0 !== Ab ? Ab : void 0,
              Pb = null !== (Mb = ab.phoneNumber) && void 0 !== Mb ? Mb : void 0,
              Xb = null !== (Tb = ab.photoURL) && void 0 !== Tb ? Tb : void 0,
              jb = null !== (Eb = ab.tenantId) && void 0 !== Eb ? Eb : void 0,
              Rb = null !== (Yb = ab._redirectEventId) && void 0 !== Yb ? Yb : void 0,
              kb = null !== (Bb = ab.createdAt) && void 0 !== Bb ? Bb : void 0,
              yb = null !== (eb = ab.lastLoginAt) && void 0 !== eb ? eb : void 0,
              {
                uid: Zb,
                emailVerified: Db,
                isAnonymous: zb,
                providerData: xb,
                stsTokenManager: ib
              } = ab;
            pb(Zb && ib, bb, "internal-error");
            const fb = aa.fromJSON(this.name, ib);
            pb("string" === typeof Zb, bb, "internal-error"), Ua(vb, bb.name), Ua(Lb, bb.name), pb("boolean" === typeof Db, bb, "internal-error"), pb("boolean" === typeof zb, bb, "internal-error"), Ua(Pb, bb.name), Ua(Xb, bb.name), Ua(jb, bb.name), Ua(Rb, bb.name), Ua(kb, bb.name), Ua(yb, bb.name);
            const mb = new Aa({
              uid: Zb,
              auth: bb,
              email: Lb,
              emailVerified: Db,
              displayName: vb,
              isAnonymous: zb,
              photoURL: Xb,
              phoneNumber: Pb,
              tenantId: jb,
              stsTokenManager: fb,
              createdAt: kb,
              lastLoginAt: yb
            });
            return xb && Array.isArray(xb) && (mb.providerData = xb.map((bb => Object.assign({}, bb)))), Rb && (mb._redirectEventId = Rb), mb
          }
          static async _fromIdTokenResponse(bb, ab) {
            let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Ab = new aa;
            Ab.updateFromServerResponse(ab);
            const Mb = new Aa({
              uid: ab.localId,
              auth: bb,
              stsTokenManager: Ab,
              isAnonymous: Ub
            });
            return await Sb(Mb), Mb
          }
        }
        const Ma = new Map;

        function Ta(bb) {
          Wb(bb instanceof Function, "Expected a class definition");
          let ab = Ma.get(bb);
          return ab ? (Wb(ab instanceof bb, "Instance stored in cache mismatched with class"), ab) : (ab = new bb, Ma.set(bb, ab), ab)
        }
        class Ea {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(bb, ab) {
            this.storage[bb] = ab
          }
          async _get(bb) {
            const ab = this.storage[bb];
            return void 0 === ab ? null : ab
          }
          async _remove(bb) {
            delete this.storage[bb]
          }
          _addListener(bb, ab) {}
          _removeListener(bb, ab) {}
        }
        Ea.type = "NONE";
        const Ya = Ea;

        function Ba(bb, ab, Ub) {
          return `firebase:${bb}:${ab}:${Ub}`
        }
        class ea {
          constructor(bb, ab, Ub) {
            this.persistence = bb, this.auth = ab, this.userKey = Ub;
            const {
              config: Ab,
              name: Mb
            } = this.auth;
            this.fullUserKey = Ba(this.userKey, Ab.apiKey, Mb), this.fullPersistenceKey = Ba("persistence", Ab.apiKey, Mb), this.boundEventHandler = ab._onStorageEvent.bind(ab), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(bb) {
            return this.persistence._set(this.fullUserKey, bb.toJSON())
          }
          async getCurrentUser() {
            const bb = await this.persistence._get(this.fullUserKey);
            return bb ? Aa._fromJSON(this.auth, bb) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(bb) {
            if (this.persistence === bb) return;
            const ab = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = bb, ab ? this.setCurrentUser(ab) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(bb, ab) {
            let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!ab.length) return new ea(Ta(Ya), bb, Ub);
            const Ab = (await Promise.all(ab.map((async bb => {
              if (await bb._isAvailable()) return bb
            })))).filter((bb => bb));
            let Mb = Ab[0] || Ta(Ya);
            const Tb = Ba(Ub, bb.config.apiKey, bb.name);
            let Eb = null;
            for (const eb of ab) try {
              const ab = await eb._get(Tb);
              if (ab) {
                const Ub = Aa._fromJSON(bb, ab);
                eb !== Mb && (Eb = Ub), Mb = eb;
                break
              }
            } catch (Bb) {}
            const Yb = Ab.filter((bb => bb._shouldAllowMigration));
            return Mb._shouldAllowMigration && Yb.length ? (Mb = Yb[0], Eb && await Mb._set(Tb, Eb.toJSON()), await Promise.all(ab.map((async bb => {
              if (bb !== Mb) try {
                await bb._remove(Tb)
              } catch (Bb) {}
            }))), new ea(Mb, bb, Ub)) : new ea(Mb, bb, Ub)
          }
        }

        function va(bb) {
          const ab = bb.toLowerCase();
          if (ab.includes("opera/") || ab.includes("opr/") || ab.includes("opios/")) return "Opera";
          if (ja(ab)) return "IEMobile";
          if (ab.includes("msie") || ab.includes("trident/")) return "IE";
          if (ab.includes("edge/")) return "Edge";
          if (La(ab)) return "Firefox";
          if (ab.includes("silk/")) return "Silk";
          if (ka(ab)) return "Blackberry";
          if (ya(ab)) return "Webos";
          if (Pa(ab)) return "Safari";
          if ((ab.includes("chrome/") || Xa(ab)) && !ab.includes("edge/")) return "Chrome";
          if (Ra(ab)) return "Android";
          {
            const ab = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              Ub = bb.match(ab);
            if (2 === (null === Ub || void 0 === Ub ? void 0 : Ub.length)) return Ub[1]
          }
          return "Other"
        }

        function La() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)();
          return /firefox\//i.test(bb)
        }

        function Pa() {
          const bb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)()).toLowerCase();
          return bb.includes("safari/") && !bb.includes("chrome/") && !bb.includes("crios/") && !bb.includes("android")
        }

        function Xa() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)();
          return /crios\//i.test(bb)
        }

        function ja() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)();
          return /iemobile/i.test(bb)
        }

        function Ra() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)();
          return /android/i.test(bb)
        }

        function ka() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)();
          return /blackberry/i.test(bb)
        }

        function ya() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)();
          return /webos/i.test(bb)
        }

        function Za() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)();
          return /iphone|ipad|ipod/i.test(bb) || /macintosh/i.test(bb) && /mobile/i.test(bb)
        }

        function Da() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)();
          return Za(bb) || Ra(bb) || ya(bb) || ka(bb) || /windows phone/i.test(bb) || ja(bb)
        }

        function za(bb) {
          let ab, Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (bb) {
            case "Browser":
              ab = va((0, Ab.M)());
              break;
            case "Worker":
              ab = `${va((0,Ab.M)())}-${bb}`;
              break;
            default:
              ab = bb
          }
          const Tb = Ub.length ? Ub.join(",") : "FirebaseCore-web";
          return `${ab}/JsCore/${Mb.f}/${Tb}`
        }
        async function xa(bb, ab) {
          return rb(bb, "GET", "/v2/recaptchaConfig", ub(bb, ab))
        }

        function ia(bb) {
          return void 0 !== bb && void 0 !== bb.getResponse
        }

        function fa(bb) {
          return void 0 !== bb && void 0 !== bb.enterprise
        }
        class ma {
          constructor(bb) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === bb.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = bb.recaptchaKey.split("/")[3], this.emailPasswordEnabled = bb.recaptchaEnforcementState.some((bb => "EMAIL_PASSWORD_PROVIDER" === bb.provider && "OFF" !== bb.enforcementState))
          }
        }

        function pa(bb) {
          return new Promise(((ab, Ub) => {
            const Ab = document.createElement("script");
            Ab.setAttribute("src", bb), Ab.onload = ab, Ab.onerror = bb => {
                const ab = xb("internal-error");
                ab.customData = bb, Ub(ab)
              }, Ab.type = "text/javascript", Ab.charset = "UTF-8",
              function() {
                var bb, ab;
                return null !== (ab = null === (bb = document.getElementsByTagName("head")) || void 0 === bb ? void 0 : bb[0]) && void 0 !== ab ? ab : document
              }().appendChild(Ab)
          }))
        }

        function Na(bb) {
          return `__${bb}${Math.floor(1e6*Math.random())}`
        }
        class Wa {
          constructor(bb) {
            this.type = "recaptcha-enterprise", this.auth = Fa(bb)
          }
          async verify() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function Ub(ab, Ub, Ab) {
              const Mb = window.grecaptcha;
              fa(Mb) ? Mb.enterprise.ready((() => {
                Mb.enterprise.execute(ab, {
                  action: bb
                }).then((bb => {
                  Ub(bb)
                })).catch((() => {
                  Ub("NO_RECAPTCHA")
                }))
              })) : Ab(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((bb, Ab) => {
              (async function(bb) {
                if (!ab) {
                  if (null == bb.tenantId && null != bb._agentRecaptchaConfig) return bb._agentRecaptchaConfig.siteKey;
                  if (null != bb.tenantId && void 0 !== bb._tenantRecaptchaConfigs[bb.tenantId]) return bb._tenantRecaptchaConfigs[bb.tenantId].siteKey
                }
                return new Promise((async (ab, Ub) => {
                  xa(bb, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Ab => {
                    if (void 0 !== Ab.recaptchaKey) {
                      const Ub = new ma(Ab);
                      return null == bb.tenantId ? bb._agentRecaptchaConfig = Ub : bb._tenantRecaptchaConfigs[bb.tenantId] = Ub, ab(Ub.siteKey)
                    }
                    Ub(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((bb => {
                    Ub(bb)
                  }))
                }))
              })(this.auth).then((Mb => {
                if (!ab && fa(window.grecaptcha)) Ub(Mb, bb, Ab);
                else {
                  if ("undefined" === typeof window) return void Ab(new Error("RecaptchaVerifier is only supported in browser"));
                  pa("https://www.google.com/recaptcha/enterprise.js?render=" + Mb).then((() => {
                    Ub(Mb, bb, Ab)
                  })).catch((bb => {
                    Ab(bb)
                  }))
                }
              })).catch((bb => {
                Ab(bb)
              }))
            }))
          }
        }
        async function Ha(bb, ab, Ub) {
          let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Mb = new Wa(bb);
          let Tb;
          try {
            Tb = await Mb.verify(Ub)
          } catch (Yb) {
            Tb = await Mb.verify(Ub, !0)
          }
          const Eb = Object.assign({}, ab);
          return Ab ? Object.assign(Eb, {
            captchaResp: Tb
          }) : Object.assign(Eb, {
            captchaResponse: Tb
          }), Object.assign(Eb, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Eb, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Eb
        }
        class Ia {
          constructor(bb) {
            this.auth = bb, this.queue = []
          }
          pushCallback(bb, ab) {
            const Ub = ab => new Promise(((Ub, Ab) => {
              try {
                Ub(bb(ab))
              } catch (Mb) {
                Ab(Mb)
              }
            }));
            Ub.onAbort = ab, this.queue.push(Ub);
            const Ab = this.queue.length - 1;
            return () => {
              this.queue[Ab] = () => Promise.resolve()
            }
          }
          async runMiddleware(bb) {
            if (this.auth.currentUser === bb) return;
            const ab = [];
            try {
              for (const Ub of this.queue) await Ub(bb), Ub.onAbort && ab.push(Ub.onAbort)
            } catch (Ub) {
              ab.reverse();
              for (const bb of ab) try {
                bb()
              } catch (Ab) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === Ub || void 0 === Ub ? void 0 : Ub.message
              })
            }
          }
        }
        class da {
          constructor(bb, ab, Ub, Ab) {
            this.app = bb, this.heartbeatServiceProvider = ab, this.appCheckServiceProvider = Ub, this.config = Ab, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ha(this), this.idTokenSubscription = new ha(this), this.beforeStateQueue = new Ia(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = kb, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = bb.name, this.clientVersion = Ab.sdkClientVersion
          }
          _initializeWithPersistence(bb, ab) {
            return ab && (this._popupRedirectResolver = Ta(ab)), this._initializationPromise = this.queue((async () => {
              var Ub, Ab;
              if (!this._deleted && (this.persistenceManager = await ea.create(this, bb), !this._deleted)) {
                if (null === (Ub = this._popupRedirectResolver) || void 0 === Ub ? void 0 : Ub._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Mb) {}
                await this.initializeCurrentUser(ab), this.lastNotifiedUid = (null === (Ab = this.currentUser) || void 0 === Ab ? void 0 : Ab.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const bb = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || bb ? this.currentUser && bb && this.currentUser.uid === bb.uid ? (this._currentUser._assign(bb), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(bb, !0) : void 0
          }
          async initializeCurrentUser(bb) {
            var ab;
            const Ub = await this.assertedPersistence.getCurrentUser();
            let Ab = Ub,
              Mb = !1;
            if (bb && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const Ub = null === (ab = this.redirectUser) || void 0 === ab ? void 0 : ab._redirectEventId,
                Tb = null === Ab || void 0 === Ab ? void 0 : Ab._redirectEventId,
                Eb = await this.tryRedirectSignIn(bb);
              Ub && Ub !== Tb || !(null === Eb || void 0 === Eb ? void 0 : Eb.user) || (Ab = Eb.user, Mb = !0)
            }
            if (!Ab) return this.directlySetCurrentUser(null);
            if (!Ab._redirectEventId) {
              if (Mb) try {
                await this.beforeStateQueue.runMiddleware(Ab)
              } catch (Tb) {
                Ab = Ub, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Tb)))
              }
              return Ab ? this.reloadAndSetCurrentUserOrClear(Ab) : this.directlySetCurrentUser(null)
            }
            return pb(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Ab._redirectEventId ? this.directlySetCurrentUser(Ab) : this.reloadAndSetCurrentUserOrClear(Ab)
          }
          async tryRedirectSignIn(bb) {
            let ab = null;
            try {
              ab = await this._popupRedirectResolver._completeRedirectFn(this, bb, !0)
            } catch (Ub) {
              await this._setRedirectUser(null)
            }
            return ab
          }
          async reloadAndSetCurrentUserOrClear(bb) {
            try {
              await Sb(bb)
            } catch (ab) {
              if ("auth/network-request-failed" !== (null === ab || void 0 === ab ? void 0 : ab.code)) return this.directlySetCurrentUser(null)
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
            const ab = bb ? (0, Ab.I)(bb) : null;
            return ab && pb(ab.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(ab && ab._clone(this))
          }
          async _updateCurrentUser(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return bb && pb(this.tenantId === bb.tenantId, this, "tenant-id-mismatch"), ab || await this.beforeStateQueue.runMiddleware(bb), this.queue((async () => {
              await this.directlySetCurrentUser(bb), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(bb) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Ta(bb))
            }))
          }
          async initializeRecaptchaConfig() {
            const bb = await xa(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              ab = new ma(bb);
            if (null == this.tenantId ? this._agentRecaptchaConfig = ab : this._tenantRecaptchaConfigs[this.tenantId] = ab, ab.emailPasswordEnabled) {
              new Wa(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(bb) {
            this._errorFactory = new Ab.e("auth", "Firebase", bb())
          }
          onAuthStateChanged(bb, ab, Ub) {
            return this.registerStateListener(this.authStateSubscription, bb, ab, Ub)
          }
          beforeAuthStateChanged(bb, ab) {
            return this.beforeStateQueue.pushCallback(bb, ab)
          }
          onIdTokenChanged(bb, ab, Ub) {
            return this.registerStateListener(this.idTokenSubscription, bb, ab, Ub)
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
          async _setRedirectUser(bb, ab) {
            const Ub = await this.getOrInitRedirectPersistenceManager(ab);
            return null === bb ? Ub.removeCurrentUser() : Ub.setCurrentUser(bb)
          }
          async getOrInitRedirectPersistenceManager(bb) {
            if (!this.redirectPersistenceManager) {
              const ab = bb && Ta(bb) || this._popupRedirectResolver;
              pb(ab, this, "argument-error"), this.redirectPersistenceManager = await ea.create(this, [Ta(ab._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(bb) {
            var ab, Ub;
            return this._isInitialized && await this.queue((async () => {})), (null === (ab = this._currentUser) || void 0 === ab ? void 0 : ab._redirectEventId) === bb ? this._currentUser : (null === (Ub = this.redirectUser) || void 0 === Ub ? void 0 : Ub._redirectEventId) === bb ? this.redirectUser : null
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
            var bb, ab;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const Ub = null !== (ab = null === (bb = this.currentUser) || void 0 === bb ? void 0 : bb.uid) && void 0 !== ab ? ab : null;
            this.lastNotifiedUid !== Ub && (this.lastNotifiedUid = Ub, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(bb, ab, Ub, Ab) {
            if (this._deleted) return () => {};
            const Mb = "function" === typeof ab ? ab : ab.next.bind(ab),
              Tb = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return pb(Tb, this, "internal-error"), Tb.then((() => Mb(this.currentUser))), "function" === typeof ab ? bb.addObserver(ab, Ub, Ab) : bb.addObserver(ab)
          }
          async directlySetCurrentUser(bb) {
            this.currentUser && this.currentUser !== bb && this._currentUser._stopProactiveRefresh(), bb && this.isProactiveRefreshEnabled && bb._startProactiveRefresh(), this.currentUser = bb, bb ? await this.assertedPersistence.setCurrentUser(bb) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(bb) {
            return this.operations = this.operations.then(bb, bb), this.operations
          }
          get assertedPersistence() {
            return pb(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(bb) {
            bb && !this.frameworks.includes(bb) && (this.frameworks.push(bb), this.frameworks.sort(), this.clientVersion = za(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var bb;
            const ab = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (ab["X-Firebase-gmpid"] = this.app.options.appId);
            const Ub = await (null === (bb = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === bb ? void 0 : bb.getHeartbeatsHeader());
            Ub && (ab["X-Firebase-Client"] = Ub);
            const Ab = await this._getAppCheckToken();
            return Ab && (ab["X-Firebase-AppCheck"] = Ab), ab
          }
          async _getAppCheckToken() {
            var bb;
            const ab = await (null === (bb = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === bb ? void 0 : bb.getToken());
            return (null === ab || void 0 === ab ? void 0 : ab.error) && function(bb) {
              if (Zb.logLevel <= Eb.b.WARN) {
                for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
                Zb.warn(`Auth (${Mb.f}): ${bb}`, ...Ub)
              }
            }(`Error while retrieving App Check token: ${ab.error}`), null === ab || void 0 === ab ? void 0 : ab.token
          }
        }

        function Fa(bb) {
          return (0, Ab.I)(bb)
        }
        class ha {
          constructor(bb) {
            this.auth = bb, this.observer = null, this.addObserver = (0, Ab.s)((bb => this.observer = bb))
          }
          get next() {
            return pb(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Ga(bb, ab) {
          const Ub = (0, Mb.r)(bb, "auth");
          if (Ub.isInitialized()) {
            const bb = Ub.getImmediate(),
              Mb = Ub.getOptions();
            if ((0, Ab.u)(Mb, null !== ab && void 0 !== ab ? ab : {})) return bb;
            zb(bb, "already-initialized")
          }
          return Ub.initialize({
            options: ab
          })
        }

        function Qa(bb, ab, Ub) {
          const Ab = Fa(bb);
          pb(Ab._canInitEmulator, Ab, "emulator-config-failed"), pb(/^https?:\/\//.test(ab), Ab, "invalid-emulator-scheme");
          const Mb = !!(null === Ub || void 0 === Ub ? void 0 : Ub.disableWarnings),
            Tb = qa(ab),
            {
              host: Eb,
              port: Yb
            } = function(bb) {
              const ab = qa(bb),
                Ub = /(\/\/)?([^?#/]+)/.exec(bb.substr(ab.length));
              if (!Ub) return {
                host: "",
                port: null
              };
              const Ab = Ub[2].split("@").pop() || "",
                Mb = /^(\[[^\]]+\])(:|$)/.exec(Ab);
              if (Mb) {
                const bb = Mb[1];
                return {
                  host: bb,
                  port: ua(Ab.substr(bb.length + 1))
                }
              } {
                const [bb, ab] = Ab.split(":");
                return {
                  host: bb,
                  port: ua(ab)
                }
              }
            }(ab),
            Bb = null === Yb ? "" : `:${Yb}`;
          Ab.config.emulator = {
            url: `${Tb}//${Eb}${Bb}/`
          }, Ab.settings.appVerificationDisabledForTesting = !0, Ab.emulatorConfig = Object.freeze({
            host: Eb,
            port: Yb,
            protocol: Tb.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Mb
            })
          }), Mb || function() {
            function bb() {
              const bb = document.createElement("p"),
                ab = bb.style;
              bb.innerText = "Running in emulator mode. Do not use with production credentials.", ab.position = "fixed", ab.width = "100%", ab.backgroundColor = "#ffffff", ab.border = ".1em solid #000000", ab.color = "#b50000", ab.bottom = "0px", ab.left = "0px", ab.margin = "0px", ab.zIndex = "10000", ab.textAlign = "center", bb.classList.add("firebase-emulator-warning"), document.body.appendChild(bb)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", bb) : bb())
          }()
        }

        function qa(bb) {
          const ab = bb.indexOf(":");
          return ab < 0 ? "" : bb.substr(0, ab + 1)
        }

        function ua(bb) {
          if (!bb) return null;
          const ab = Number(bb);
          return isNaN(ab) ? null : ab
        }
        class ra {
          constructor(bb, ab) {
            this.providerId = bb, this.signInMethod = ab
          }
          toJSON() {
            return Nb("not implemented")
          }
          _getIdTokenResponse(bb) {
            return Nb("not implemented")
          }
          _linkToIdToken(bb, ab) {
            return Nb("not implemented")
          }
          _getReauthenticationResolver(bb) {
            return Nb("not implemented")
          }
        }
        async function Ka(bb, ab) {
          return rb(bb, "POST", "/v1/accounts:resetPassword", ub(bb, ab))
        }
        async function oa(bb, ab) {
          return rb(bb, "POST", "/v1/accounts:update", ab)
        }
        async function la(bb, ab) {
          return ob(bb, "POST", "/v1/accounts:signInWithPassword", ub(bb, ab))
        }
        async function ta(bb, ab) {
          return rb(bb, "POST", "/v1/accounts:sendOobCode", ub(bb, ab))
        }
        async function wa(bb, ab) {
          return ta(bb, ab)
        }
        async function sa(bb, ab) {
          return ta(bb, ab)
        }
        class ga extends ra {
          constructor(bb, ab, Ub) {
            let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", Ub), this._email = bb, this._password = ab, this._tenantId = Ab
          }
          static _fromEmailAndPassword(bb, ab) {
            return new ga(bb, ab, "password")
          }
          static _fromEmailAndCode(bb, ab) {
            return new ga(bb, ab, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const ab = "string" === typeof bb ? JSON.parse(bb) : bb;
            if ((null === ab || void 0 === ab ? void 0 : ab.email) && (null === ab || void 0 === ab ? void 0 : ab.password)) {
              if ("password" === ab.signInMethod) return this._fromEmailAndPassword(ab.email, ab.password);
              if ("emailLink" === ab.signInMethod) return this._fromEmailAndCode(ab.email, ab.password, ab.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(bb) {
            var ab;
            switch (this.signInMethod) {
              case "password":
                const Ub = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (ab = bb._getRecaptchaConfig()) || void 0 === ab ? void 0 : ab.emailPasswordEnabled) {
                  const ab = await Ha(bb, Ub, "signInWithPassword");
                  return la(bb, ab)
                }
                return la(bb, Ub).catch((async ab => {
                  if ("auth/missing-recaptcha-token" === ab.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const ab = await Ha(bb, Ub, "signInWithPassword");
                    return la(bb, ab)
                  }
                  return Promise.reject(ab)
                }));
              case "emailLink":
                return async function(bb, ab) {
                  return ob(bb, "POST", "/v1/accounts:signInWithEmailLink", ub(bb, ab))
                }(bb, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                zb(bb, "internal-error")
            }
          }
          async _linkToIdToken(bb, ab) {
            switch (this.signInMethod) {
              case "password":
                return oa(bb, {
                  idToken: ab,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(bb, ab) {
                  return ob(bb, "POST", "/v1/accounts:signInWithEmailLink", ub(bb, ab))
                }(bb, {
                  idToken: ab,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                zb(bb, "internal-error")
            }
          }
          _getReauthenticationResolver(bb) {
            return this._getIdTokenResponse(bb)
          }
        }
        async function Ca(bb, ab) {
          return ob(bb, "POST", "/v1/accounts:signInWithIdp", ub(bb, ab))
        }
        class Va extends ra {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(bb) {
            const ab = new Va(bb.providerId, bb.signInMethod);
            return bb.idToken || bb.accessToken ? (bb.idToken && (ab.idToken = bb.idToken), bb.accessToken && (ab.accessToken = bb.accessToken), bb.nonce && !bb.pendingToken && (ab.nonce = bb.nonce), bb.pendingToken && (ab.pendingToken = bb.pendingToken)) : bb.oauthToken && bb.oauthTokenSecret ? (ab.accessToken = bb.oauthToken, ab.secret = bb.oauthTokenSecret) : zb("argument-error"), ab
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
            const ab = "string" === typeof bb ? JSON.parse(bb) : bb,
              {
                providerId: Ub,
                signInMethod: Ab
              } = ab,
              Mb = Tb(ab, ["providerId", "signInMethod"]);
            if (!Ub || !Ab) return null;
            const Eb = new Va(Ub, Ab);
            return Eb.idToken = Mb.idToken || void 0, Eb.accessToken = Mb.accessToken || void 0, Eb.secret = Mb.secret, Eb.nonce = Mb.nonce, Eb.pendingToken = Mb.pendingToken || null, Eb
          }
          _getIdTokenResponse(bb) {
            return Ca(bb, this.buildRequest())
          }
          _linkToIdToken(bb, ab) {
            const Ub = this.buildRequest();
            return Ub.idToken = ab, Ca(bb, Ub)
          }
          _getReauthenticationResolver(bb) {
            const ab = this.buildRequest();
            return ab.autoCreate = !1, Ca(bb, ab)
          }
          buildRequest() {
            const bb = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) bb.pendingToken = this.pendingToken;
            else {
              const ab = {};
              this.idToken && (ab.id_token = this.idToken), this.accessToken && (ab.access_token = this.accessToken), this.secret && (ab.oauth_token_secret = this.secret), ab.providerId = this.providerId, this.nonce && !this.pendingToken && (ab.nonce = this.nonce), bb.postBody = (0, Ab.$)(ab)
            }
            return bb
          }
        }
        const Oa = {
          USER_NOT_FOUND: "user-not-found"
        };
        class ca extends ra {
          constructor(bb) {
            super("phone", "phone"), this.params = bb
          }
          static _fromVerification(bb, ab) {
            return new ca({
              verificationId: bb,
              verificationCode: ab
            })
          }
          static _fromTokenResponse(bb, ab) {
            return new ca({
              phoneNumber: bb,
              temporaryProof: ab
            })
          }
          _getIdTokenResponse(bb) {
            return async function(bb, ab) {
              return ob(bb, "POST", "/v1/accounts:signInWithPhoneNumber", ub(bb, ab))
            }(bb, this._makeVerificationRequest())
          }
          _linkToIdToken(bb, ab) {
            return async function(bb, ab) {
              const Ub = await ob(bb, "POST", "/v1/accounts:signInWithPhoneNumber", ub(bb, ab));
              if (Ub.temporaryProof) throw wb(bb, "account-exists-with-different-credential", Ub);
              return Ub
            }(bb, Object.assign({
              idToken: ab
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(bb) {
            return async function(bb, ab) {
              return ob(bb, "POST", "/v1/accounts:signInWithPhoneNumber", ub(bb, Object.assign(Object.assign({}, ab), {
                operation: "REAUTH"
              })), Oa)
            }(bb, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: bb,
              phoneNumber: ab,
              verificationId: Ub,
              verificationCode: Ab
            } = this.params;
            return bb && ab ? {
              temporaryProof: bb,
              phoneNumber: ab
            } : {
              sessionInfo: Ub,
              code: Ab
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
              verificationId: ab,
              verificationCode: Ub,
              phoneNumber: Ab,
              temporaryProof: Mb
            } = bb;
            return Ub || ab || Ab || Mb ? new ca({
              verificationId: ab,
              verificationCode: Ub,
              phoneNumber: Ab,
              temporaryProof: Mb
            }) : null
          }
        }
        class Ja {
          constructor(bb) {
            var ab, Ub, Mb, Tb, Eb, Yb;
            const Bb = (0, Ab._)((0, Ab.y)(bb)),
              eb = null !== (ab = Bb.apiKey) && void 0 !== ab ? ab : null,
              vb = null !== (Ub = Bb.oobCode) && void 0 !== Ub ? Ub : null,
              Lb = function(bb) {
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
              }(null !== (Mb = Bb.mode) && void 0 !== Mb ? Mb : null);
            pb(eb && vb && Lb, "argument-error"), this.apiKey = eb, this.operation = Lb, this.code = vb, this.continueUrl = null !== (Tb = Bb.continueUrl) && void 0 !== Tb ? Tb : null, this.languageCode = null !== (Eb = Bb.languageCode) && void 0 !== Eb ? Eb : null, this.tenantId = null !== (Yb = Bb.tenantId) && void 0 !== Yb ? Yb : null
          }
          static parseLink(bb) {
            const ab = function(bb) {
              const ab = (0, Ab._)((0, Ab.y)(bb)).link,
                Ub = ab ? (0, Ab._)((0, Ab.y)(ab)).deep_link_id : null,
                Mb = (0, Ab._)((0, Ab.y)(bb)).deep_link_id;
              return (Mb ? (0, Ab._)((0, Ab.y)(Mb)).link : null) || Mb || Ub || ab || bb
            }(bb);
            try {
              return new Ja(ab)
            } catch (Ub) {
              return null
            }
          }
        }

        function na(bb) {
          return Ja.parseLink(bb)
        }
        class Sa {
          constructor() {
            this.providerId = Sa.PROVIDER_ID
          }
          static credential(bb, ab) {
            return ga._fromEmailAndPassword(bb, ab)
          }
          static credentialWithLink(bb, ab) {
            const Ub = Ja.parseLink(ab);
            return pb(Ub, "argument-error"), ga._fromEmailAndCode(bb, Ub.code, Ub.tenantId)
          }
        }
        Sa.PROVIDER_ID = "password", Sa.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Sa.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class bU {
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
        class aU extends bU {
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
        class UU extends aU {
          static credentialFromJSON(bb) {
            const ab = "string" === typeof bb ? JSON.parse(bb) : bb;
            return pb("providerId" in ab && "signInMethod" in ab, "argument-error"), Va._fromParams(ab)
          }
          credential(bb) {
            return this._credential(Object.assign(Object.assign({}, bb), {
              nonce: bb.rawNonce
            }))
          }
          _credential(bb) {
            return pb(bb.idToken || bb.accessToken, "argument-error"), Va._fromParams(Object.assign(Object.assign({}, bb), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(bb) {
            return UU.oauthCredentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return UU.oauthCredentialFromTaggedObject(bb.customData || {})
          }
          static oauthCredentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ab
            } = bb;
            if (!ab) return null;
            const {
              oauthIdToken: Ub,
              oauthAccessToken: Ab,
              oauthTokenSecret: Mb,
              pendingToken: Tb,
              nonce: Eb,
              providerId: Yb
            } = ab;
            if (!Ab && !Mb && !Ub && !Tb) return null;
            if (!Yb) return null;
            try {
              return new UU(Yb)._credential({
                idToken: Ub,
                accessToken: Ab,
                nonce: Eb,
                pendingToken: Tb
              })
            } catch (Bb) {
              return null
            }
          }
        }
        class AU extends aU {
          constructor() {
            super("facebook.com")
          }
          static credential(bb) {
            return Va._fromParams({
              providerId: AU.PROVIDER_ID,
              signInMethod: AU.FACEBOOK_SIGN_IN_METHOD,
              accessToken: bb
            })
          }
          static credentialFromResult(bb) {
            return AU.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return AU.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ab
            } = bb;
            if (!ab || !("oauthAccessToken" in ab)) return null;
            if (!ab.oauthAccessToken) return null;
            try {
              return AU.credential(ab.oauthAccessToken)
            } catch (Ub) {
              return null
            }
          }
        }
        AU.FACEBOOK_SIGN_IN_METHOD = "facebook.com", AU.PROVIDER_ID = "facebook.com";
        class MU extends aU {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(bb, ab) {
            return Va._fromParams({
              providerId: MU.PROVIDER_ID,
              signInMethod: MU.GOOGLE_SIGN_IN_METHOD,
              idToken: bb,
              accessToken: ab
            })
          }
          static credentialFromResult(bb) {
            return MU.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return MU.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ab
            } = bb;
            if (!ab) return null;
            const {
              oauthIdToken: Ub,
              oauthAccessToken: Ab
            } = ab;
            if (!Ub && !Ab) return null;
            try {
              return MU.credential(Ub, Ab)
            } catch (Mb) {
              return null
            }
          }
        }
        MU.GOOGLE_SIGN_IN_METHOD = "google.com", MU.PROVIDER_ID = "google.com";
        class TU extends aU {
          constructor() {
            super("github.com")
          }
          static credential(bb) {
            return Va._fromParams({
              providerId: TU.PROVIDER_ID,
              signInMethod: TU.GITHUB_SIGN_IN_METHOD,
              accessToken: bb
            })
          }
          static credentialFromResult(bb) {
            return TU.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return TU.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ab
            } = bb;
            if (!ab || !("oauthAccessToken" in ab)) return null;
            if (!ab.oauthAccessToken) return null;
            try {
              return TU.credential(ab.oauthAccessToken)
            } catch (Ub) {
              return null
            }
          }
        }
        TU.GITHUB_SIGN_IN_METHOD = "github.com", TU.PROVIDER_ID = "github.com";
        class EU extends ra {
          constructor(bb, ab) {
            super(bb, bb), this.pendingToken = ab
          }
          _getIdTokenResponse(bb) {
            return Ca(bb, this.buildRequest())
          }
          _linkToIdToken(bb, ab) {
            const Ub = this.buildRequest();
            return Ub.idToken = ab, Ca(bb, Ub)
          }
          _getReauthenticationResolver(bb) {
            const ab = this.buildRequest();
            return ab.autoCreate = !1, Ca(bb, ab)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(bb) {
            const ab = "string" === typeof bb ? JSON.parse(bb) : bb,
              {
                providerId: Ub,
                signInMethod: Ab,
                pendingToken: Mb
              } = ab;
            return Ub && Ab && Mb && Ub === Ab ? new EU(Ub, Mb) : null
          }
          static _create(bb, ab) {
            return new EU(bb, ab)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class YU extends bU {
          constructor(bb) {
            pb(bb.startsWith("saml."), "argument-error"), super(bb)
          }
          static credentialFromResult(bb) {
            return YU.samlCredentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return YU.samlCredentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromJSON(bb) {
            const ab = EU.fromJSON(bb);
            return pb(ab, "argument-error"), ab
          }
          static samlCredentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ab
            } = bb;
            if (!ab) return null;
            const {
              pendingToken: Ub,
              providerId: Ab
            } = ab;
            if (!Ub || !Ab) return null;
            try {
              return EU._create(Ab, Ub)
            } catch (Mb) {
              return null
            }
          }
        }
        class BU extends aU {
          constructor() {
            super("twitter.com")
          }
          static credential(bb, ab) {
            return Va._fromParams({
              providerId: BU.PROVIDER_ID,
              signInMethod: BU.TWITTER_SIGN_IN_METHOD,
              oauthToken: bb,
              oauthTokenSecret: ab
            })
          }
          static credentialFromResult(bb) {
            return BU.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return BU.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ab
            } = bb;
            if (!ab) return null;
            const {
              oauthAccessToken: Ub,
              oauthTokenSecret: Ab
            } = ab;
            if (!Ub || !Ab) return null;
            try {
              return BU.credential(Ub, Ab)
            } catch (Mb) {
              return null
            }
          }
        }
        async function eU(bb, ab) {
          return ob(bb, "POST", "/v1/accounts:signUp", ub(bb, ab))
        }
        BU.TWITTER_SIGN_IN_METHOD = "twitter.com", BU.PROVIDER_ID = "twitter.com";
        class vU {
          constructor(bb) {
            this.user = bb.user, this.providerId = bb.providerId, this._tokenResponse = bb._tokenResponse, this.operationType = bb.operationType
          }
          static async _fromIdTokenResponse(bb, ab, Ub) {
            let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Mb = await Aa._fromIdTokenResponse(bb, Ub, Ab),
              Tb = LU(Ub);
            return new vU({
              user: Mb,
              providerId: Tb,
              _tokenResponse: Ub,
              operationType: ab
            })
          }
          static async _forOperation(bb, ab, Ub) {
            await bb._updateTokensIfNecessary(Ub, !0);
            const Ab = LU(Ub);
            return new vU({
              user: bb,
              providerId: Ab,
              _tokenResponse: Ub,
              operationType: ab
            })
          }
        }

        function LU(bb) {
          return bb.providerId ? bb.providerId : "phoneNumber" in bb ? "phone" : null
        }
        async function PU(bb) {
          var ab;
          const Ub = Fa(bb);
          if (await Ub._initializationPromise, null === (ab = Ub.currentUser) || void 0 === ab ? void 0 : ab.isAnonymous) return new vU({
            user: Ub.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Ab = await eU(Ub, {
              returnSecureToken: !0
            }),
            Mb = await vU._fromIdTokenResponse(Ub, "signIn", Ab, !0);
          return await Ub._updateCurrentUser(Mb.user), Mb
        }
        class XU extends Ab.g {
          constructor(bb, ab, Ub, Ab) {
            var Mb;
            super(ab.code, ab.message), this.operationType = Ub, this.user = Ab, Object.setPrototypeOf(this, XU.prototype), this.customData = {
              appName: bb.name,
              tenantId: null !== (Mb = bb.tenantId) && void 0 !== Mb ? Mb : void 0,
              _serverResponse: ab.customData._serverResponse,
              operationType: Ub
            }
          }
          static _fromErrorAndOperation(bb, ab, Ub, Ab) {
            return new XU(bb, ab, Ub, Ab)
          }
        }

        function jU(bb, ab, Ub, Ab) {
          return ("reauthenticate" === ab ? Ub._getReauthenticationResolver(bb) : Ub._getIdTokenResponse(bb)).catch((Ub => {
            if ("auth/multi-factor-auth-required" === Ub.code) throw XU._fromErrorAndOperation(bb, Ub, ab, Ab);
            throw Ub
          }))
        }

        function RU(bb) {
          return new Set(bb.map((bb => {
            let {
              providerId: ab
            } = bb;
            return ab
          })).filter((bb => !!bb)))
        }
        async function kU(bb, ab) {
          const Ub = (0, Ab.I)(bb);
          await ZU(!0, Ub, ab);
          const {
            providerUserInfo: Mb
          } = await async function(bb, ab) {
            return rb(bb, "POST", "/v1/accounts:update", ab)
          }(Ub.auth, {
            idToken: await Ub.getIdToken(),
            deleteProvider: [ab]
          }), Tb = RU(Mb || []);
          return Ub.providerData = Ub.providerData.filter((bb => Tb.has(bb.providerId))), Tb.has("phone") || (Ub.phoneNumber = null), await Ub.auth._persistUserIfCurrent(Ub), Ub
        }
        async function yU(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Ab = await cb(bb, ab._linkToIdToken(bb.auth, await bb.getIdToken()), Ub);
          return vU._forOperation(bb, "link", Ab)
        }
        async function ZU(bb, ab, Ub) {
          await Sb(ab);
          const Ab = !1 === bb ? "provider-already-linked" : "no-such-provider";
          pb(RU(ab.providerData).has(Ub) === bb, ab.auth, Ab)
        }
        async function DU(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Ab
          } = bb, Mb = "reauthenticate";
          try {
            const Tb = await cb(bb, jU(Ab, Mb, ab, bb), Ub);
            pb(Tb.idToken, Ab, "internal-error");
            const Eb = Ob(Tb.idToken);
            pb(Eb, Ab, "internal-error");
            const {
              sub: Yb
            } = Eb;
            return pb(bb.uid === Yb, Ab, "user-mismatch"), vU._forOperation(bb, Mb, Tb)
          } catch (Tb) {
            throw "auth/user-not-found" === (null === Tb || void 0 === Tb ? void 0 : Tb.code) && zb(Ab, "user-mismatch"), Tb
          }
        }
        async function zU(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Ab = "signIn",
            Mb = await jU(bb, Ab, ab),
            Tb = await vU._fromIdTokenResponse(bb, Ab, Mb);
          return Ub || await bb._updateCurrentUser(Tb.user), Tb
        }
        async function xU(bb, ab) {
          return zU(Fa(bb), ab)
        }
        async function iU(bb, ab) {
          const Ub = (0, Ab.I)(bb);
          return await ZU(!1, Ub, ab.providerId), yU(Ub, ab)
        }
        async function fU(bb, ab) {
          return DU((0, Ab.I)(bb), ab)
        }
        async function mU(bb, ab) {
          const Ub = Fa(bb),
            Ab = await async function(bb, ab) {
              return ob(bb, "POST", "/v1/accounts:signInWithCustomToken", ub(bb, ab))
            }(Ub, {
              token: ab,
              returnSecureToken: !0
            }), Mb = await vU._fromIdTokenResponse(Ub, "signIn", Ab);
          return await Ub._updateCurrentUser(Mb.user), Mb
        }
        class pU {
          constructor(bb, ab) {
            this.factorId = bb, this.uid = ab.mfaEnrollmentId, this.enrollmentTime = new Date(ab.enrolledAt).toUTCString(), this.displayName = ab.displayName
          }
          static _fromServerResponse(bb, ab) {
            return "phoneInfo" in ab ? NU._fromServerResponse(bb, ab) : "totpInfo" in ab ? WU._fromServerResponse(bb, ab) : zb(bb, "internal-error")
          }
        }
        class NU extends pU {
          constructor(bb) {
            super("phone", bb), this.phoneNumber = bb.phoneInfo
          }
          static _fromServerResponse(bb, ab) {
            return new NU(ab)
          }
        }
        class WU extends pU {
          constructor(bb) {
            super("totp", bb)
          }
          static _fromServerResponse(bb, ab) {
            return new WU(ab)
          }
        }

        function HU(bb, ab, Ub) {
          var Ab;
          pb((null === (Ab = Ub.url) || void 0 === Ab ? void 0 : Ab.length) > 0, bb, "invalid-continue-uri"), pb("undefined" === typeof Ub.dynamicLinkDomain || Ub.dynamicLinkDomain.length > 0, bb, "invalid-dynamic-link-domain"), ab.continueUrl = Ub.url, ab.dynamicLinkDomain = Ub.dynamicLinkDomain, ab.canHandleCodeInApp = Ub.handleCodeInApp, Ub.iOS && (pb(Ub.iOS.bundleId.length > 0, bb, "missing-ios-bundle-id"), ab.iOSBundleId = Ub.iOS.bundleId), Ub.android && (pb(Ub.android.packageName.length > 0, bb, "missing-android-pkg-name"), ab.androidInstallApp = Ub.android.installApp, ab.androidMinimumVersionCode = Ub.android.minimumVersion, ab.androidPackageName = Ub.android.packageName)
        }
        async function IU(bb, ab, Ub) {
          var Ab;
          const Mb = Fa(bb),
            Tb = {
              requestType: "PASSWORD_RESET",
              email: ab,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Ab = Mb._getRecaptchaConfig()) || void 0 === Ab ? void 0 : Ab.emailPasswordEnabled) {
            const bb = await Ha(Mb, Tb, "getOobCode", !0);
            Ub && HU(Mb, bb, Ub), await wa(Mb, bb)
          } else Ub && HU(Mb, Tb, Ub), await wa(Mb, Tb).catch((async bb => {
            if ("auth/missing-recaptcha-token" !== bb.code) return Promise.reject(bb);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const bb = await Ha(Mb, Tb, "getOobCode", !0);
              Ub && HU(Mb, bb, Ub), await wa(Mb, bb)
            }
          }))
        }
        async function dU(bb, ab, Ub) {
          await Ka((0, Ab.I)(bb), {
            oobCode: ab,
            newPassword: Ub
          })
        }
        async function FU(bb, ab) {
          await async function(bb, ab) {
            return rb(bb, "POST", "/v1/accounts:update", ub(bb, ab))
          }((0, Ab.I)(bb), {
            oobCode: ab
          })
        }
        async function hU(bb, ab) {
          const Ub = (0, Ab.I)(bb),
            Mb = await Ka(Ub, {
              oobCode: ab
            }),
            Tb = Mb.requestType;
          switch (pb(Tb, Ub, "internal-error"), Tb) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              pb(Mb.newEmail, Ub, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              pb(Mb.mfaInfo, Ub, "internal-error");
            default:
              pb(Mb.email, Ub, "internal-error")
          }
          let Eb = null;
          return Mb.mfaInfo && (Eb = pU._fromServerResponse(Fa(Ub), Mb.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Mb.requestType ? Mb.newEmail : Mb.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Mb.requestType ? Mb.email : Mb.newEmail) || null,
              multiFactorInfo: Eb
            },
            operation: Tb
          }
        }
        async function GU(bb, ab) {
          const {
            data: Ub
          } = await hU((0, Ab.I)(bb), ab);
          return Ub.email
        }
        async function QU(bb, ab, Ub) {
          var Ab;
          const Mb = Fa(bb),
            Tb = {
              returnSecureToken: !0,
              email: ab,
              password: Ub,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Eb;
          if (null === (Ab = Mb._getRecaptchaConfig()) || void 0 === Ab ? void 0 : Ab.emailPasswordEnabled) {
            const bb = await Ha(Mb, Tb, "signUpPassword");
            Eb = eU(Mb, bb)
          } else Eb = eU(Mb, Tb).catch((async bb => {
            if ("auth/missing-recaptcha-token" === bb.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const bb = await Ha(Mb, Tb, "signUpPassword");
              return eU(Mb, bb)
            }
            return Promise.reject(bb)
          }));
          const Yb = await Eb.catch((bb => Promise.reject(bb))),
            Bb = await vU._fromIdTokenResponse(Mb, "signIn", Yb);
          return await Mb._updateCurrentUser(Bb.user), Bb
        }

        function qU(bb, ab, Ub) {
          return xU((0, Ab.I)(bb), Sa.credential(ab, Ub))
        }
        async function uU(bb, ab, Ub) {
          var Ab;
          const Mb = Fa(bb),
            Tb = {
              requestType: "EMAIL_SIGNIN",
              email: ab,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Eb(bb, ab) {
            pb(ab.handleCodeInApp, Mb, "argument-error"), ab && HU(Mb, bb, ab)
          }
          if (null === (Ab = Mb._getRecaptchaConfig()) || void 0 === Ab ? void 0 : Ab.emailPasswordEnabled) {
            const bb = await Ha(Mb, Tb, "getOobCode", !0);
            Eb(bb, Ub), await sa(Mb, bb)
          } else Eb(Tb, Ub), await sa(Mb, Tb).catch((async bb => {
            if ("auth/missing-recaptcha-token" !== bb.code) return Promise.reject(bb);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const bb = await Ha(Mb, Tb, "getOobCode", !0);
              Eb(bb, Ub), await sa(Mb, bb)
            }
          }))
        }

        function rU(bb, ab) {
          const Ub = Ja.parseLink(ab);
          return "EMAIL_SIGNIN" === (null === Ub || void 0 === Ub ? void 0 : Ub.operation)
        }
        async function KU(bb, ab, Ub) {
          const Mb = (0, Ab.I)(bb),
            Tb = Sa.credentialWithLink(ab, Ub || Hb());
          return pb(Tb._tenantId === (Mb.tenantId || null), Mb, "tenant-id-mismatch"), xU(Mb, Tb)
        }
        async function oU(bb, ab) {
          const Ub = {
              identifier: ab,
              continueUri: Ib() ? Hb() : "http://localhost"
            },
            {
              signinMethods: Mb
            } = await async function(bb, ab) {
              return rb(bb, "POST", "/v1/accounts:createAuthUri", ub(bb, ab))
            }((0, Ab.I)(bb), Ub);
          return Mb || []
        }
        async function lU(bb, ab) {
          const Ub = (0, Ab.I)(bb),
            Mb = {
              requestType: "VERIFY_EMAIL",
              idToken: await bb.getIdToken()
            };
          ab && HU(Ub.auth, Mb, ab);
          const {
            email: Tb
          } = await async function(bb, ab) {
            return ta(bb, ab)
          }(Ub.auth, Mb);
          Tb !== bb.email && await bb.reload()
        }
        async function tU(bb, ab, Ub) {
          const Mb = (0, Ab.I)(bb),
            Tb = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await bb.getIdToken(),
              newEmail: ab
            };
          Ub && HU(Mb.auth, Tb, Ub);
          const {
            email: Eb
          } = await async function(bb, ab) {
            return ta(bb, ab)
          }(Mb.auth, Tb);
          Eb !== bb.email && await bb.reload()
        }
        async function wU(bb, ab) {
          let {
            displayName: Ub,
            photoURL: Mb
          } = ab;
          if (void 0 === Ub && void 0 === Mb) return;
          const Tb = (0, Ab.I)(bb),
            Eb = {
              idToken: await Tb.getIdToken(),
              displayName: Ub,
              photoUrl: Mb,
              returnSecureToken: !0
            },
            Yb = await cb(Tb, async function(bb, ab) {
              return rb(bb, "POST", "/v1/accounts:update", ab)
            }(Tb.auth, Eb));
          Tb.displayName = Yb.displayName || null, Tb.photoURL = Yb.photoUrl || null;
          const Bb = Tb.providerData.find((bb => {
            let {
              providerId: ab
            } = bb;
            return "password" === ab
          }));
          Bb && (Bb.displayName = Tb.displayName, Bb.photoURL = Tb.photoURL), await Tb._updateTokensIfNecessary(Yb)
        }

        function sU(bb, ab) {
          return CU((0, Ab.I)(bb), ab, null)
        }

        function gU(bb, ab) {
          return CU((0, Ab.I)(bb), null, ab)
        }
        async function CU(bb, ab, Ub) {
          const {
            auth: Ab
          } = bb, Mb = {
            idToken: await bb.getIdToken(),
            returnSecureToken: !0
          };
          ab && (Mb.email = ab), Ub && (Mb.password = Ub);
          const Tb = await cb(bb, oa(Ab, Mb));
          await bb._updateTokensIfNecessary(Tb, !0)
        }
        class VU {
          constructor(bb, ab) {
            let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = bb, this.providerId = ab, this.profile = Ub
          }
        }
        class OU extends VU {
          constructor(bb, ab, Ub, Ab) {
            super(bb, ab, Ub), this.username = Ab
          }
        }
        class cU extends VU {
          constructor(bb, ab) {
            super(bb, "facebook.com", ab)
          }
        }
        class JU extends OU {
          constructor(bb, ab) {
            super(bb, "github.com", ab, "string" === typeof(null === ab || void 0 === ab ? void 0 : ab.login) ? null === ab || void 0 === ab ? void 0 : ab.login : null)
          }
        }
        class nU extends VU {
          constructor(bb, ab) {
            super(bb, "google.com", ab)
          }
        }
        class SU extends OU {
          constructor(bb, ab, Ub) {
            super(bb, "twitter.com", ab, Ub)
          }
        }

        function bA(bb) {
          const {
            user: ab,
            _tokenResponse: Ub
          } = bb;
          return ab.isAnonymous && !Ub ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(bb) {
            var ab, Ub;
            if (!bb) return null;
            const {
              providerId: Ab
            } = bb, Mb = bb.rawUserInfo ? JSON.parse(bb.rawUserInfo) : {}, Tb = bb.isNewUser || "identitytoolkit#SignupNewUserResponse" === bb.kind;
            if (!Ab && (null === bb || void 0 === bb ? void 0 : bb.idToken)) {
              const Ab = null === (Ub = null === (ab = Ob(bb.idToken)) || void 0 === ab ? void 0 : ab.firebase) || void 0 === Ub ? void 0 : Ub.sign_in_provider;
              if (Ab) return new VU(Tb, "anonymous" !== Ab && "custom" !== Ab ? Ab : null)
            }
            if (!Ab) return null;
            switch (Ab) {
              case "facebook.com":
                return new cU(Tb, Mb);
              case "github.com":
                return new JU(Tb, Mb);
              case "google.com":
                return new nU(Tb, Mb);
              case "twitter.com":
                return new SU(Tb, Mb, bb.screenName || null);
              case "custom":
              case "anonymous":
                return new VU(Tb, null);
              default:
                return new VU(Tb, Ab, Mb)
            }
          }(Ub)
        }

        function aA(bb, ab) {
          return (0, Ab.I)(bb).setPersistence(ab)
        }

        function UA(bb) {
          return Fa(bb).initializeRecaptchaConfig()
        }

        function AA(bb, ab, Ub, Mb) {
          return (0, Ab.I)(bb).onIdTokenChanged(ab, Ub, Mb)
        }

        function MA(bb, ab, Ub) {
          return (0, Ab.I)(bb).beforeAuthStateChanged(ab, Ub)
        }

        function TA(bb, ab, Ub, Mb) {
          return (0, Ab.I)(bb).onAuthStateChanged(ab, Ub, Mb)
        }

        function EA(bb) {
          (0, Ab.I)(bb).useDeviceLanguage()
        }

        function YA(bb, ab) {
          return (0, Ab.I)(bb).updateCurrentUser(ab)
        }

        function BA(bb) {
          return (0, Ab.I)(bb).signOut()
        }
        async function eA(bb) {
          return (0, Ab.I)(bb).delete()
        }
        class vA {
          constructor(bb, ab, Ub) {
            this.type = bb, this.credential = ab, this.auth = Ub
          }
          static _fromIdtoken(bb, ab) {
            return new vA("enroll", bb, ab)
          }
          static _fromMfaPendingCredential(bb) {
            return new vA("signin", bb)
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
            var ab, Ub;
            if (null === bb || void 0 === bb ? void 0 : bb.multiFactorSession) {
              if (null === (ab = bb.multiFactorSession) || void 0 === ab ? void 0 : ab.pendingCredential) return vA._fromMfaPendingCredential(bb.multiFactorSession.pendingCredential);
              if (null === (Ub = bb.multiFactorSession) || void 0 === Ub ? void 0 : Ub.idToken) return vA._fromIdtoken(bb.multiFactorSession.idToken)
            }
            return null
          }
        }
        class LA {
          constructor(bb, ab, Ub) {
            this.session = bb, this.hints = ab, this.signInResolver = Ub
          }
          static _fromError(bb, ab) {
            const Ub = Fa(bb),
              Ab = ab.customData._serverResponse,
              Mb = (Ab.mfaInfo || []).map((bb => pU._fromServerResponse(Ub, bb)));
            pb(Ab.mfaPendingCredential, Ub, "internal-error");
            const Tb = vA._fromMfaPendingCredential(Ab.mfaPendingCredential);
            return new LA(Tb, Mb, (async bb => {
              const Mb = await bb._process(Ub, Tb);
              delete Ab.mfaInfo, delete Ab.mfaPendingCredential;
              const Eb = Object.assign(Object.assign({}, Ab), {
                idToken: Mb.idToken,
                refreshToken: Mb.refreshToken
              });
              switch (ab.operationType) {
                case "signIn":
                  const bb = await vU._fromIdTokenResponse(Ub, ab.operationType, Eb);
                  return await Ub._updateCurrentUser(bb.user), bb;
                case "reauthenticate":
                  return pb(ab.user, Ub, "internal-error"), vU._forOperation(ab.user, ab.operationType, Eb);
                default:
                  zb(Ub, "internal-error")
              }
            }))
          }
          async resolveSignIn(bb) {
            const ab = bb;
            return this.signInResolver(ab)
          }
        }

        function PA(bb, ab) {
          var Ub;
          const Mb = (0, Ab.I)(bb),
            Tb = ab;
          return pb(ab.customData.operationType, Mb, "argument-error"), pb(null === (Ub = Tb.customData._serverResponse) || void 0 === Ub ? void 0 : Ub.mfaPendingCredential, Mb, "argument-error"), LA._fromError(Mb, Tb)
        }
        class XA {
          constructor(bb) {
            this.user = bb, this.enrolledFactors = [], bb._onReload((ab => {
              ab.mfaInfo && (this.enrolledFactors = ab.mfaInfo.map((ab => pU._fromServerResponse(bb.auth, ab))))
            }))
          }
          static _fromUser(bb) {
            return new XA(bb)
          }
          async getSession() {
            return vA._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(bb, ab) {
            const Ub = bb,
              Ab = await this.getSession(),
              Mb = await cb(this.user, Ub._process(this.user.auth, Ab, ab));
            return await this.user._updateTokensIfNecessary(Mb), this.user.reload()
          }
          async unenroll(bb) {
            const ab = "string" === typeof bb ? bb : bb.uid,
              Ub = await this.user.getIdToken();
            try {
              const bb = await cb(this.user, (Ab = this.user.auth, Mb = {
                idToken: Ub,
                mfaEnrollmentId: ab
              }, rb(Ab, "POST", "/v2/accounts/mfaEnrollment:withdraw", ub(Ab, Mb))));
              this.enrolledFactors = this.enrolledFactors.filter((bb => {
                let {
                  uid: Ub
                } = bb;
                return Ub !== ab
              })), await this.user._updateTokensIfNecessary(bb), await this.user.reload()
            } catch (Tb) {
              throw Tb
            }
            var Ab, Mb
          }
        }
        const jA = new WeakMap;

        function RA(bb) {
          const ab = (0, Ab.I)(bb);
          return jA.has(ab) || jA.set(ab, XA._fromUser(ab)), jA.get(ab)
        }
        const kA = "__sak";
        class yA {
          constructor(bb, ab) {
            this.storageRetriever = bb, this.type = ab
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(kA, "1"), this.storage.removeItem(kA), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (bb) {
              return Promise.resolve(!1)
            }
          }
          _set(bb, ab) {
            return this.storage.setItem(bb, JSON.stringify(ab)), Promise.resolve()
          }
          _get(bb) {
            const ab = this.storage.getItem(bb);
            return Promise.resolve(ab ? JSON.parse(ab) : null)
          }
          _remove(bb) {
            return this.storage.removeItem(bb), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class ZA extends yA {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (bb, ab) => this.onStorageEvent(bb, ab), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const bb = (0, Ab.M)();
              return Pa(bb) || Za(bb)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (bb) {
                return !1
              }
            }(), this.fallbackToPolling = Da(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(bb) {
            for (const ab of Object.keys(this.listeners)) {
              const Ub = this.storage.getItem(ab),
                Ab = this.localCache[ab];
              Ub !== Ab && bb(ab, Ab, Ub)
            }
          }
          onStorageEvent(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!bb.key) return void this.forAllChangedKeys(((bb, ab, Ub) => {
              this.notifyListeners(bb, Ub)
            }));
            const Ub = bb.key;
            if (ab ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Ab = this.storage.getItem(Ub);
              if (bb.newValue !== Ab) null !== bb.newValue ? this.storage.setItem(Ub, bb.newValue) : this.storage.removeItem(Ub);
              else if (this.localCache[Ub] === bb.newValue && !ab) return
            }
            const Mb = () => {
                const bb = this.storage.getItem(Ub);
                (ab || this.localCache[Ub] !== bb) && this.notifyListeners(Ub, bb)
              },
              Tb = this.storage.getItem(Ub);
            (0, Ab.S)() && 10 === document.documentMode && Tb !== bb.newValue && bb.newValue !== bb.oldValue ? setTimeout(Mb, 10) : Mb()
          }
          notifyListeners(bb, ab) {
            this.localCache[bb] = ab;
            const Ub = this.listeners[bb];
            if (Ub)
              for (const Ab of Array.from(Ub)) Ab(ab ? JSON.parse(ab) : ab)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((bb, ab, Ub) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: bb,
                  oldValue: ab,
                  newValue: Ub
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
          _addListener(bb, ab) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[bb] || (this.listeners[bb] = new Set, this.localCache[bb] = this.storage.getItem(bb)), this.listeners[bb].add(ab)
          }
          _removeListener(bb, ab) {
            this.listeners[bb] && (this.listeners[bb].delete(ab), 0 === this.listeners[bb].size && delete this.listeners[bb]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(bb, ab) {
            await super._set(bb, ab), this.localCache[bb] = JSON.stringify(ab)
          }
          async _get(bb) {
            const ab = await super._get(bb);
            return this.localCache[bb] = JSON.stringify(ab), ab
          }
          async _remove(bb) {
            await super._remove(bb), delete this.localCache[bb]
          }
        }
        ZA.type = "LOCAL";
        const DA = ZA;
        class zA extends yA {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(bb, ab) {}
          _removeListener(bb, ab) {}
        }
        zA.type = "SESSION";
        const xA = zA;
        class iA {
          constructor(bb) {
            this.eventTarget = bb, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(bb) {
            const ab = this.receivers.find((ab => ab.isListeningto(bb)));
            if (ab) return ab;
            const Ub = new iA(bb);
            return this.receivers.push(Ub), Ub
          }
          isListeningto(bb) {
            return this.eventTarget === bb
          }
          async handleEvent(bb) {
            const ab = bb,
              {
                eventId: Ub,
                eventType: Ab,
                data: Mb
              } = ab.data,
              Tb = this.handlersMap[Ab];
            if (!(null === Tb || void 0 === Tb ? void 0 : Tb.size)) return;
            ab.ports[0].postMessage({
              status: "ack",
              eventId: Ub,
              eventType: Ab
            });
            const Eb = Array.from(Tb).map((async bb => bb(ab.origin, Mb))),
              Yb = await
            function(bb) {
              return Promise.all(bb.map((async bb => {
                try {
                  return {
                    fulfilled: !0,
                    value: await bb
                  }
                } catch (ab) {
                  return {
                    fulfilled: !1,
                    reason: ab
                  }
                }
              })))
            }(Eb);
            ab.ports[0].postMessage({
              status: "done",
              eventId: Ub,
              eventType: Ab,
              response: Yb
            })
          }
          _subscribe(bb, ab) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[bb] || (this.handlersMap[bb] = new Set), this.handlersMap[bb].add(ab)
          }
          _unsubscribe(bb, ab) {
            this.handlersMap[bb] && ab && this.handlersMap[bb].delete(ab), ab && 0 !== this.handlersMap[bb].size || delete this.handlersMap[bb], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function fA() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            Ub = "";
          for (let Ab = 0; Ab < ab; Ab++) Ub += Math.floor(10 * Math.random());
          return bb + Ub
        }
        iA.receivers = [];
        class mA {
          constructor(bb) {
            this.target = bb, this.handlers = new Set
          }
          removeMessageHandler(bb) {
            bb.messageChannel && (bb.messageChannel.port1.removeEventListener("message", bb.ZZ), bb.messageChannel.port1.close()), this.handlers.delete(bb)
          }
          async _send(bb, ab) {
            let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Ab = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Ab) throw new Error("connection_unavailable");
            let Mb, Tb;
            return new Promise(((Eb, Yb) => {
              const Bb = fA("", 20);
              Ab.port1.start();
              const eb = setTimeout((() => {
                Yb(new Error("unsupported_event"))
              }), Ub);
              Tb = {
                messageChannel: Ab,
                ZZ(bb) {
                  const ab = bb;
                  if (ab.data.eventId === Bb) switch (ab.data.status) {
                    case "ack":
                      clearTimeout(eb), Mb = setTimeout((() => {
                        Yb(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Mb), Eb(ab.data.response);
                      break;
                    default:
                      clearTimeout(eb), clearTimeout(Mb), Yb(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Tb), Ab.port1.addEventListener("message", Tb.ZZ), this.target.postMessage({
                eventType: bb,
                eventId: Bb,
                data: ab
              }, [Ab.port2])
            })).finally((() => {
              Tb && this.removeMessageHandler(Tb)
            }))
          }
        }

        function pA() {
          return window
        }

        function NA() {
          return "undefined" !== typeof pA().WorkerGlobalScope && "function" === typeof pA().importScripts
        }
        const WA = "firebaseLocalStorageDb",
          HA = "firebaseLocalStorage",
          IA = "fbase_key";
        class dA {
          constructor(bb) {
            this.request = bb
          }
          toPromise() {
            return new Promise(((bb, ab) => {
              this.request.addEventListener("success", (() => {
                bb(this.request.result)
              })), this.request.addEventListener("error", (() => {
                ab(this.request.error)
              }))
            }))
          }
        }

        function FA(bb, ab) {
          return bb.transaction([HA], ab ? "readwrite" : "readonly").objectStore(HA)
        }

        function hA() {
          const bb = indexedDB.open(WA, 1);
          return new Promise(((ab, Ub) => {
            bb.addEventListener("error", (() => {
              Ub(bb.error)
            })), bb.addEventListener("upgradeneeded", (() => {
              const ab = bb.result;
              try {
                ab.createObjectStore(HA, {
                  keyPath: IA
                })
              } catch (Ab) {
                Ub(Ab)
              }
            })), bb.addEventListener("success", (async () => {
              const Ub = bb.result;
              Ub.objectStoreNames.contains(HA) ? ab(Ub) : (Ub.close(), await
                function() {
                  const bb = indexedDB.deleteDatabase(WA);
                  return new dA(bb).toPromise()
                }(), ab(await hA()))
            }))
          }))
        }
        async function GA(bb, ab, Ub) {
          const Ab = FA(bb, !0).put({
            [IA]: ab,
            value: Ub
          });
          return new dA(Ab).toPromise()
        }

        function QA(bb, ab) {
          const Ub = FA(bb, !0).delete(ab);
          return new dA(Ub).toPromise()
        }
        class qA {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await hA()), this.db
          }
          async _withRetries(bb) {
            let ab = 0;
            for (;;) try {
              const ab = await this._openDb();
              return await bb(ab)
            } catch (Ub) {
              if (ab++ > 3) throw Ub;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return NA() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = iA._getInstance(NA() ? self : null), this.receiver._subscribe("keyChanged", (async (bb, ab) => ({
              keyProcessed: (await this._poll()).includes(ab.key)
            }))), this.receiver._subscribe("ping", (async (bb, ab) => ["keyChanged"]))
          }
          async initializeSender() {
            var bb, ab;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (bb) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new mA(this.activeServiceWorker);
            const Ub = await this.sender._send("ping", {}, 800);
            Ub && (null === (bb = Ub[0]) || void 0 === bb ? void 0 : bb.fulfilled) && (null === (ab = Ub[0]) || void 0 === ab ? void 0 : ab.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(bb) {
            if (this.sender && this.activeServiceWorker && function() {
                var bb;
                return (null === (bb = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === bb ? void 0 : bb.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: bb
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (ab) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const bb = await hA();
              return await GA(bb, kA, "1"), await QA(bb, kA), !0
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
          async _set(bb, ab) {
            return this._withPendingWrite((async () => (await this._withRetries((Ub => GA(Ub, bb, ab))), this.localCache[bb] = ab, this.notifyServiceWorker(bb))))
          }
          async _get(bb) {
            const ab = await this._withRetries((ab => async function(bb, ab) {
              const Ub = FA(bb, !1).get(ab),
                Ab = await new dA(Ub).toPromise();
              return void 0 === Ab ? null : Ab.value
            }(ab, bb)));
            return this.localCache[bb] = ab, ab
          }
          async _remove(bb) {
            return this._withPendingWrite((async () => (await this._withRetries((ab => QA(ab, bb))), delete this.localCache[bb], this.notifyServiceWorker(bb))))
          }
          async _poll() {
            const bb = await this._withRetries((bb => {
              const ab = FA(bb, !1).getAll();
              return new dA(ab).toPromise()
            }));
            if (!bb) return [];
            if (0 !== this.pendingWrites) return [];
            const ab = [],
              Ub = new Set;
            for (const {
                fbase_key: Ab,
                value: Mb
              }
              of bb) Ub.add(Ab), JSON.stringify(this.localCache[Ab]) !== JSON.stringify(Mb) && (this.notifyListeners(Ab, Mb), ab.push(Ab));
            for (const Ab of Object.keys(this.localCache)) this.localCache[Ab] && !Ub.has(Ab) && (this.notifyListeners(Ab, null), ab.push(Ab));
            return ab
          }
          notifyListeners(bb, ab) {
            this.localCache[bb] = ab;
            const Ub = this.listeners[bb];
            if (Ub)
              for (const Ab of Array.from(Ub)) Ab(ab)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(bb, ab) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[bb] || (this.listeners[bb] = new Set, this._get(bb)), this.listeners[bb].add(ab)
          }
          _removeListener(bb, ab) {
            this.listeners[bb] && (this.listeners[bb].delete(ab), 0 === this.listeners[bb].size && delete this.listeners[bb]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        qA.type = "LOCAL";
        const uA = qA;
        const rA = 1e12;
        class KA {
          constructor(bb) {
            this.auth = bb, this.counter = rA, this._widgets = new Map
          }
          render(bb, ab) {
            const Ub = this.counter;
            return this._widgets.set(Ub, new oA(bb, this.auth.name, ab || {})), this.counter++, Ub
          }
          reset(bb) {
            var ab;
            const Ub = bb || rA;
            null === (ab = this._widgets.get(Ub)) || void 0 === ab || ab.delete(), this._widgets.delete(Ub)
          }
          getResponse(bb) {
            var ab;
            const Ub = bb || rA;
            return (null === (ab = this._widgets.get(Ub)) || void 0 === ab ? void 0 : ab.getResponse()) || ""
          }
          async execute(bb) {
            var ab;
            const Ub = bb || rA;
            return null === (ab = this._widgets.get(Ub)) || void 0 === ab || ab.execute(), ""
          }
        }
        class oA {
          constructor(bb, ab, Ub) {
            this.params = Ub, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Ab = "string" === typeof bb ? document.getElementById(bb) : bb;
            pb(Ab, "argument-error", {
              appName: ab
            }), this.container = Ab, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const ab = [],
                  Ub = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Ab = 0; Ab < bb; Ab++) ab.push(Ub.charAt(Math.floor(Math.random() * Ub.length)));
                return ab.join("")
              }(50);
              const {
                callback: bb,
                "expired-callback": ab
              } = this.params;
              if (bb) try {
                bb(this.responseToken)
              } catch (Ub) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, ab) try {
                  ab()
                } catch (Ub) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const lA = Na("rcb"),
          tA = new Fb(3e4, 6e4);
        class wA {
          constructor() {
            var bb;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (bb = pA().grecaptcha) || void 0 === bb ? void 0 : bb.render)
          }
          load(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return pb(function(bb) {
              return bb.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(bb)
            }(ab), bb, "argument-error"), this.shouldResolveImmediately(ab) && ia(pA().grecaptcha) ? Promise.resolve(pA().grecaptcha) : new Promise(((Ub, Mb) => {
              const Tb = pA().setTimeout((() => {
                Mb(xb(bb, "network-request-failed"))
              }), tA.get());
              pA()[lA] = () => {
                pA().clearTimeout(Tb), delete pA()[lA];
                const Ab = pA().grecaptcha;
                if (!Ab || !ia(Ab)) return void Mb(xb(bb, "internal-error"));
                const Eb = Ab.render;
                Ab.render = (bb, ab) => {
                  const Ub = Eb(bb, ab);
                  return this.counter++, Ub
                }, this.hostLanguage = ab, Ub(Ab)
              };
              pa(`https://www.google.com/recaptcha/api.js??${(0,Ab.$)({onload:lA,render:"explicit",hl:ab})}`).catch((() => {
                clearTimeout(Tb), Mb(xb(bb, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(bb) {
            var ab;
            return !!(null === (ab = pA().grecaptcha) || void 0 === ab ? void 0 : ab.render) && (bb === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class sA {
          async load(bb) {
            return new KA(bb)
          }
          clearedOneInstance() {}
        }
        const gA = "recaptcha",
          CA = {
            theme: "light",
            type: "image"
          };
        class VA {
          constructor(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, CA),
              Ub = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = ab, this.type = gA, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Fa(Ub), this.isInvisible = "invisible" === this.parameters.size, pb("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Ab = "string" === typeof bb ? document.getElementById(bb) : bb;
            pb(Ab, this.auth, "argument-error"), this.container = Ab, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new sA : new wA, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const bb = await this.render(),
              ab = this.getAssertedRecaptcha(),
              Ub = ab.getResponse(bb);
            return Ub || new Promise((Ub => {
              const Ab = bb => {
                bb && (this.tokenChangeListeners.delete(Ab), Ub(bb))
              };
              this.tokenChangeListeners.add(Ab), this.isInvisible && ab.execute(bb)
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
            pb(!this.parameters.sitekey, this.auth, "argument-error"), pb(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), pb("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(bb) {
            return ab => {
              if (this.tokenChangeListeners.forEach((bb => bb(ab))), "function" === typeof bb) bb(ab);
              else if ("string" === typeof bb) {
                const Ub = pA()[bb];
                "function" === typeof Ub && Ub(ab)
              }
            }
          }
          assertNotDestroyed() {
            pb(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let bb = this.container;
              if (!this.isInvisible) {
                const ab = document.createElement("div");
                bb.appendChild(ab), bb = ab
              }
              this.widgetId = this.getAssertedRecaptcha().render(bb, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            pb(Ib() && !NA(), this.auth, "internal-error"), await
            function() {
              let bb = null;
              return new Promise((ab => {
                "complete" !== document.readyState ? (bb = () => ab(), window.addEventListener("load", bb)) : ab()
              })).catch((ab => {
                throw bb && window.removeEventListener("load", bb), ab
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const bb = await async function(bb) {
              return (await rb(bb, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            pb(bb, this.auth, "internal-error"), this.parameters.sitekey = bb
          }
          getAssertedRecaptcha() {
            return pb(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class OA {
          constructor(bb, ab) {
            this.verificationId = bb, this.onConfirmation = ab
          }
          confirm(bb) {
            const ab = ca._fromVerification(this.verificationId, bb);
            return this.onConfirmation(ab)
          }
        }
        async function cA(bb, ab, Ub) {
          const Mb = Fa(bb),
            Tb = await SA(Mb, ab, (0, Ab.I)(Ub));
          return new OA(Tb, (bb => xU(Mb, bb)))
        }
        async function JA(bb, ab, Ub) {
          const Mb = (0, Ab.I)(bb);
          await ZU(!1, Mb, "phone");
          const Tb = await SA(Mb.auth, ab, (0, Ab.I)(Ub));
          return new OA(Tb, (bb => iU(Mb, bb)))
        }
        async function nA(bb, ab, Ub) {
          const Mb = (0, Ab.I)(bb),
            Tb = await SA(Mb.auth, ab, (0, Ab.I)(Ub));
          return new OA(Tb, (bb => fU(Mb, bb)))
        }
        async function SA(bb, ab, Ub) {
          var Ab;
          const Mb = await Ub.verify();
          try {
            let Tb;
            if (pb("string" === typeof Mb, bb, "argument-error"), pb(Ub.type === gA, bb, "argument-error"), Tb = "string" === typeof ab ? {
                phoneNumber: ab
              } : ab, "session" in Tb) {
              const ab = Tb.session;
              if ("phoneNumber" in Tb) {
                pb("enroll" === ab.type, bb, "internal-error");
                const Ub = await
                function(bb, ab) {
                  return rb(bb, "POST", "/v2/accounts/mfaEnrollment:start", ub(bb, ab))
                }(bb, {
                  idToken: ab.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Tb.phoneNumber,
                    recaptchaToken: Mb
                  }
                });
                return Ub.phoneSessionInfo.sessionInfo
              } {
                pb("signin" === ab.type, bb, "internal-error");
                const Ub = (null === (Ab = Tb.multiFactorHint) || void 0 === Ab ? void 0 : Ab.uid) || Tb.multiFactorUid;
                pb(Ub, bb, "missing-multi-factor-info");
                const Eb = await
                function(bb, ab) {
                  return rb(bb, "POST", "/v2/accounts/mfaSignIn:start", ub(bb, ab))
                }(bb, {
                  mfaPendingCredential: ab.credential,
                  mfaEnrollmentId: Ub,
                  phoneSignInInfo: {
                    recaptchaToken: Mb
                  }
                });
                return Eb.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: ab
              } = await async function(bb, ab) {
                return rb(bb, "POST", "/v1/accounts:sendVerificationCode", ub(bb, ab))
              }(bb, {
                phoneNumber: Tb.phoneNumber,
                recaptchaToken: Mb
              });
              return ab
            }
          } finally {
            Ub._reset()
          }
        }
        async function bM(bb, ab) {
          await yU((0, Ab.I)(bb), ab)
        }
        class aM {
          constructor(bb) {
            this.providerId = aM.PROVIDER_ID, this.auth = Fa(bb)
          }
          verifyPhoneNumber(bb, ab) {
            return SA(this.auth, bb, (0, Ab.I)(ab))
          }
          static credential(bb, ab) {
            return ca._fromVerification(bb, ab)
          }
          static credentialFromResult(bb) {
            const ab = bb;
            return aM.credentialFromTaggedObject(ab)
          }
          static credentialFromError(bb) {
            return aM.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: ab
            } = bb;
            if (!ab) return null;
            const {
              phoneNumber: Ub,
              temporaryProof: Ab
            } = ab;
            return Ub && Ab ? ca._fromTokenResponse(Ub, Ab) : null
          }
        }

        function UM(bb, ab) {
          return ab ? Ta(ab) : (pb(bb._popupRedirectResolver, bb, "argument-error"), bb._popupRedirectResolver)
        }
        aM.PROVIDER_ID = "phone", aM.PHONE_SIGN_IN_METHOD = "phone";
        class AM extends ra {
          constructor(bb) {
            super("custom", "custom"), this.params = bb
          }
          _getIdTokenResponse(bb) {
            return Ca(bb, this._buildIdpRequest())
          }
          _linkToIdToken(bb, ab) {
            return Ca(bb, this._buildIdpRequest(ab))
          }
          _getReauthenticationResolver(bb) {
            return Ca(bb, this._buildIdpRequest())
          }
          _buildIdpRequest(bb) {
            const ab = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return bb && (ab.idToken = bb), ab
          }
        }

        function MM(bb) {
          return zU(bb.auth, new AM(bb), bb.bypassAuthState)
        }

        function TM(bb) {
          const {
            auth: ab,
            user: Ub
          } = bb;
          return pb(Ub, ab, "internal-error"), DU(Ub, new AM(bb), bb.bypassAuthState)
        }
        async function EM(bb) {
          const {
            auth: ab,
            user: Ub
          } = bb;
          return pb(Ub, ab, "internal-error"), yU(Ub, new AM(bb), bb.bypassAuthState)
        }
        class YM {
          constructor(bb, ab, Ub, Ab) {
            let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = bb, this.resolver = Ub, this.user = Ab, this.bypassAuthState = Mb, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(ab) ? ab : [ab]
          }
          execute() {
            return new Promise((async (bb, ab) => {
              this.pendingPromise = {
                resolve: bb,
                reject: ab
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (Ub) {
                this.reject(Ub)
              }
            }))
          }
          async onAuthEvent(bb) {
            const {
              urlResponse: ab,
              sessionId: Ub,
              postBody: Ab,
              tenantId: Mb,
              error: Tb,
              type: Eb
            } = bb;
            if (Tb) return void this.reject(Tb);
            const Yb = {
              auth: this.auth,
              requestUri: ab,
              sessionId: Ub,
              tenantId: Mb || void 0,
              postBody: Ab || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Eb)(Yb))
            } catch (Bb) {
              this.reject(Bb)
            }
          }
          onError(bb) {
            this.reject(bb)
          }
          getIdpTask(bb) {
            switch (bb) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return MM;
              case "linkViaPopup":
              case "linkViaRedirect":
                return EM;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return TM;
              default:
                zb(this.auth, "internal-error")
            }
          }
          resolve(bb) {
            Wb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(bb), this.unregisterAndCleanUp()
          }
          reject(bb) {
            Wb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(bb), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const BM = new Fb(2e3, 1e4);
        async function eM(bb, ab, Ub) {
          const Ab = Fa(bb);
          fb(bb, ab, bU);
          const Mb = UM(Ab, Ub);
          return new PM(Ab, "signInViaPopup", ab, Mb).executeNotNull()
        }
        async function vM(bb, ab, Ub) {
          const Mb = (0, Ab.I)(bb);
          fb(Mb.auth, ab, bU);
          const Tb = UM(Mb.auth, Ub);
          return new PM(Mb.auth, "reauthViaPopup", ab, Tb, Mb).executeNotNull()
        }
        async function LM(bb, ab, Ub) {
          const Mb = (0, Ab.I)(bb);
          fb(Mb.auth, ab, bU);
          const Tb = UM(Mb.auth, Ub);
          return new PM(Mb.auth, "linkViaPopup", ab, Tb, Mb).executeNotNull()
        }
        class PM extends YM {
          constructor(bb, ab, Ub, Ab, Mb) {
            super(bb, ab, Ab, Mb), this.provider = Ub, this.authWindow = null, this.pollId = null, PM.currentPopupAction && PM.currentPopupAction.cancel(), PM.currentPopupAction = this
          }
          async executeNotNull() {
            const bb = await this.execute();
            return pb(bb, this.auth, "internal-error"), bb
          }
          async onExecution() {
            Wb(1 === this.filter.length, "Popup operations only handle one event");
            const bb = fA();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], bb), this.authWindow.associatedEvent = bb, this.resolver._originValidation(this.auth).catch((bb => {
              this.reject(bb)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (bb => {
              bb || this.reject(xb(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var bb;
            return (null === (bb = this.authWindow) || void 0 === bb ? void 0 : bb.associatedEvent) || null
          }
          cancel() {
            this.reject(xb(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, PM.currentPopupAction = null
          }
          pollUserCancellation() {
            const bb = () => {
              var ab, Ub;
              (null === (Ub = null === (ab = this.authWindow) || void 0 === ab ? void 0 : ab.window) || void 0 === Ub ? void 0 : Ub.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(xb(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(bb, BM.get())
            };
            bb()
          }
        }
        PM.currentPopupAction = null;
        const XM = "pendingRedirect",
          jM = new Map;
        class RM extends YM {
          constructor(bb, ab) {
            super(bb, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], ab, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let bb = jM.get(this.auth._key());
            if (!bb) {
              try {
                const ab = await async function(bb, ab) {
                  const Ub = DM(ab),
                    Ab = ZM(bb);
                  if (!await Ab._isAvailable()) return !1;
                  const Mb = "true" === await Ab._get(Ub);
                  return await Ab._remove(Ub), Mb
                }(this.resolver, this.auth) ? await super.execute() : null;
                bb = () => Promise.resolve(ab)
              } catch (ab) {
                bb = () => Promise.reject(ab)
              }
              jM.set(this.auth._key(), bb)
            }
            return this.bypassAuthState || jM.set(this.auth._key(), (() => Promise.resolve(null))), bb()
          }
          async onAuthEvent(bb) {
            if ("signInViaRedirect" === bb.type) return super.onAuthEvent(bb);
            if ("unknown" !== bb.type) {
              if (bb.eventId) {
                const ab = await this.auth._redirectUserForId(bb.eventId);
                if (ab) return this.user = ab, super.onAuthEvent(bb);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function kM(bb, ab) {
          return ZM(bb)._set(DM(ab), "true")
        }

        function yM(bb, ab) {
          jM.set(bb._key(), ab)
        }

        function ZM(bb) {
          return Ta(bb._redirectPersistence)
        }

        function DM(bb) {
          return Ba(XM, bb.config.apiKey, bb.name)
        }

        function zM(bb, ab, Ub) {
          return async function(bb, ab, Ub) {
            const Ab = Fa(bb);
            fb(bb, ab, bU), await Ab._initializationPromise;
            const Mb = UM(Ab, Ub);
            return await kM(Mb, Ab), Mb._openRedirect(Ab, ab, "signInViaRedirect")
          }(bb, ab, Ub)
        }

        function xM(bb, ab, Ub) {
          return async function(bb, ab, Ub) {
            const Mb = (0, Ab.I)(bb);
            fb(Mb.auth, ab, bU), await Mb.auth._initializationPromise;
            const Tb = UM(Mb.auth, Ub);
            await kM(Tb, Mb.auth);
            const Eb = await pM(Mb);
            return Tb._openRedirect(Mb.auth, ab, "reauthViaRedirect", Eb)
          }(bb, ab, Ub)
        }

        function iM(bb, ab, Ub) {
          return async function(bb, ab, Ub) {
            const Mb = (0, Ab.I)(bb);
            fb(Mb.auth, ab, bU), await Mb.auth._initializationPromise;
            const Tb = UM(Mb.auth, Ub);
            await ZU(!1, Mb, ab.providerId), await kM(Tb, Mb.auth);
            const Eb = await pM(Mb);
            return Tb._openRedirect(Mb.auth, ab, "linkViaRedirect", Eb)
          }(bb, ab, Ub)
        }
        async function fM(bb, ab) {
          return await Fa(bb)._initializationPromise, mM(bb, ab, !1)
        }
        async function mM(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Ab = Fa(bb),
            Mb = UM(Ab, ab),
            Tb = new RM(Ab, Mb, Ub),
            Eb = await Tb.execute();
          return Eb && !Ub && (delete Eb.user._redirectEventId, await Ab._persistUserIfCurrent(Eb.user), await Ab._setRedirectUser(null, ab)), Eb
        }
        async function pM(bb) {
          const ab = fA(`${bb.uid}:::`);
          return bb._redirectEventId = ab, await bb.auth._setRedirectUser(bb), await bb.auth._persistUserIfCurrent(bb), ab
        }
        class NM {
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
            let ab = !1;
            return this.consumers.forEach((Ub => {
              this.isEventForConsumer(bb, Ub) && (ab = !0, this.sendToConsumer(bb, Ub), this.saveEventToCache(bb))
            })), this.hasHandledPotentialRedirect || ! function(bb) {
              switch (bb.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return HM(bb);
                default:
                  return !1
              }
            }(bb) || (this.hasHandledPotentialRedirect = !0, ab || (this.queuedRedirectEvent = bb, ab = !0)), ab
          }
          sendToConsumer(bb, ab) {
            var Ub;
            if (bb.error && !HM(bb)) {
              const Ab = (null === (Ub = bb.error.code) || void 0 === Ub ? void 0 : Ub.split("auth/")[1]) || "internal-error";
              ab.onError(xb(this.auth, Ab))
            } else ab.onAuthEvent(bb)
          }
          isEventForConsumer(bb, ab) {
            const Ub = null === ab.eventId || !!bb.eventId && bb.eventId === ab.eventId;
            return ab.filter.includes(bb.type) && Ub
          }
          hasEventBeenHandled(bb) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(WM(bb))
          }
          saveEventToCache(bb) {
            this.cachedEventUids.add(WM(bb)), this.lastProcessedEventTime = Date.now()
          }
        }

        function WM(bb) {
          return [bb.type, bb.eventId, bb.sessionId, bb.tenantId].filter((bb => bb)).join("-")
        }

        function HM(bb) {
          let {
            type: ab,
            error: Ub
          } = bb;
          return "unknown" === ab && "auth/no-auth-event" === (null === Ub || void 0 === Ub ? void 0 : Ub.code)
        }
        const IM = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          dM = /^https?/;
        async function FM(bb) {
          if (bb.config.emulator) return;
          const {
            authorizedDomains: ab
          } = await async function(bb) {
            return rb(bb, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(bb);
          for (const Ab of ab) try {
            if (hM(Ab)) return
          } catch (Ub) {}
          zb(bb, "unauthorized-domain")
        }

        function hM(bb) {
          const ab = Hb(),
            {
              protocol: Ub,
              hostname: Ab
            } = new URL(ab);
          if (bb.startsWith("chrome-extension://")) {
            const Mb = new URL(bb);
            return "" === Mb.hostname && "" === Ab ? "chrome-extension:" === Ub && bb.replace("chrome-extension://", "") === ab.replace("chrome-extension://", "") : "chrome-extension:" === Ub && Mb.hostname === Ab
          }
          if (!dM.test(Ub)) return !1;
          if (IM.test(bb)) return Ab === bb;
          const Mb = bb.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Mb + "|" + Mb + ")$", "i").test(Ab)
        }
        const GM = new Fb(3e4, 6e4);

        function QM() {
          const bb = pA().___jsl;
          if (null === bb || void 0 === bb ? void 0 : bb.H)
            for (const ab of Object.keys(bb.H))
              if (bb.H[ab].r = bb.H[ab].r || [], bb.H[ab].L = bb.H[ab].L || [], bb.H[ab].r = [...bb.H[ab].L], bb.CP)
                for (let Ub = 0; Ub < bb.CP.length; Ub++) bb.CP[Ub] = null
        }
        let qM = null;

        function uM(bb) {
          return qM = qM || function(bb) {
            return new Promise(((ab, Ub) => {
              var Ab, Mb, Tb;

              function Eb() {
                QM(), gapi.load("gapi.iframes", {
                  callback: () => {
                    ab(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    QM(), Ub(xb(bb, "network-request-failed"))
                  },
                  timeout: GM.get()
                })
              }
              if (null === (Mb = null === (Ab = pA().gapi) || void 0 === Ab ? void 0 : Ab.iframes) || void 0 === Mb ? void 0 : Mb.Iframe) ab(gapi.iframes.getContext());
              else {
                if (!(null === (Tb = pA().gapi) || void 0 === Tb ? void 0 : Tb.load)) {
                  const ab = Na("iframefcb");
                  return pA()[ab] = () => {
                    gapi.load ? Eb() : Ub(xb(bb, "network-request-failed"))
                  }, pa(`https://apis.google.com/js/api.js?onload=${ab}`).catch((bb => Ub(bb)))
                }
                Eb()
              }
            })).catch((bb => {
              throw qM = null, bb
            }))
          }(bb), qM
        }
        const rM = new Fb(5e3, 15e3),
          KM = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          oM = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function lM(bb) {
          const ab = bb.config;
          pb(ab.authDomain, bb, "auth-domain-config-required");
          const Ub = ab.emulator ? hb(ab, "emulator/auth/iframe") : `https://${bb.config.authDomain}/__/auth/iframe`,
            Tb = {
              apiKey: ab.apiKey,
              appName: bb.name,
              v: Mb.f
            },
            Eb = oM.get(bb.config.apiHost);
          Eb && (Tb.eid = Eb);
          const Yb = bb._getFrameworks();
          return Yb.length && (Tb.fw = Yb.join(",")), `${Ub}?${(0,Ab.$)(Tb).slice(1)}`
        }
        const tM = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class wM {
          constructor(bb) {
            this.window = bb, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (bb) {}
          }
        }

        function sM(bb, ab, Ub) {
          let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Eb = Math.max((window.screen.availHeight - Tb) / 2, 0).toString(),
            Yb = Math.max((window.screen.availWidth - Mb) / 2, 0).toString();
          let Bb = "";
          const eb = Object.assign(Object.assign({}, tM), {
              width: Mb.toString(),
              height: Tb.toString(),
              top: Eb,
              left: Yb
            }),
            vb = (0, Ab.M)().toLowerCase();
          Ub && (Bb = Xa(vb) ? "_blank" : Ub), La(vb) && (ab = ab || "http://localhost", eb.scrollbars = "yes");
          const Lb = Object.entries(eb).reduce(((bb, ab) => {
            let [Ub, Ab] = ab;
            return `${bb}${Ub}=${Ab},`
          }), "");
          if (function() {
              var bb;
              return Za(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.M)()) && !!(null === (bb = window.navigator) || void 0 === bb ? void 0 : bb.standalone)
            }(vb) && "_self" !== Bb) return function(bb, ab) {
            const Ub = document.createElement("a");
            Ub.href = bb, Ub.target = ab;
            const Ab = document.createEvent("MouseEvent");
            Ab.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), Ub.dispatchEvent(Ab)
          }(ab || "", Bb), new wM(null);
          const Pb = window.open(ab || "", Bb, Lb);
          pb(Pb, bb, "popup-blocked");
          try {
            Pb.focus()
          } catch (Xb) {}
          return new wM(Pb)
        }
        const gM = "__/auth/handler",
          CM = "emulator/auth/handler",
          VM = encodeURIComponent("fac");
        async function OM(bb, ab, Ub, Tb, Eb, Yb) {
            pb(bb.config.authDomain, bb, "auth-domain-config-required"), pb(bb.config.apiKey, bb, "invalid-api-key");
            const Bb = {
              apiKey: bb.config.apiKey,
              appName: bb.name,
              authType: Ub,
              redirectUrl: Tb,
              v: Mb.f,
              eventId: Eb
            };
            if (ab instanceof bU) {
              ab.setDefaultLanguage(bb.languageCode), Bb.providerId = ab.providerId || "", (0, Ab.R)(ab.getCustomParameters()) || (Bb.customParameters = JSON.stringify(ab.getCustomParameters()));
              for (const [bb, ab] of Object.entries(Yb || {})) Bb[bb] = ab
            }
            if (ab instanceof aU) {
              const bb = ab.getScopes().filter((bb => "" !== bb));
              bb.length > 0 && (Bb.scopes = bb.join(","))
            }
            bb.tenantId && (Bb.tid = bb.tenantId);
            const eb = Bb;
            for (const Ab of Object.keys(eb)) void 0 === eb[Ab] && delete eb[Ab];
            const vb = await bb._getAppCheckToken(),
              Lb = vb ? `#${VM}=${encodeURIComponent(vb)}` : "";
            return `${function(bb){let{config:ab}=bb;if(!ab.emulator)return`
            https: //${ab.authDomain}/${gM}`;return hb(ab,CM)}(bb)}?${(0,Ab.$)(eb).slice(1)}${Lb}`}const cM="webStorageSupport";const JM=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xA,this._completeRedirectFn=mM,this._overrideRedirectResult=yM}async _openPopup(bb,ab,Ub,Ab){var Mb;Wb(null===(Mb=this.eventManagers[bb._key()])||void 0===Mb?void 0:Mb.manager,"_initialize() not called before _openPopup()");return sM(bb,await OM(bb,ab,Ub,Hb(),Ab),fA())}async _openRedirect(bb,ab,Ub,Ab){await this._originValidation(bb);return function(bb){pA().location.href=bb}(await OM(bb,ab,Ub,Hb(),Ab)),new Promise((()=>{}))}_initialize(bb){const ab=bb._key();if(this.eventManagers[ab]){const{manager:bb,promise:Ub}=this.eventManagers[ab];return bb?Promise.resolve(bb):(Wb(Ub,"If manager is not set, promise should be"),Ub)}const Ub=this.initAndGetManager(bb);return this.eventManagers[ab]={promise:Ub},Ub.catch((()=>{delete this.eventManagers[ab]})),Ub}async initAndGetManager(bb){const ab=await async function(bb){const ab=await uM(bb),Ub=pA().gapi;return pb(Ub,bb,"internal-error"),ab.open({where:document.body,url:lM(bb),messageHandlersFilter:Ub.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KM,dontclear:!0},(ab=>new Promise((async(Ub,Ab)=>{await ab.restyle({setHideOnLeave:!1});const Mb=xb(bb,"network-request-failed"),Tb=pA().setTimeout((()=>{Ab(Mb)}),rM.get());function Eb(){pA().clearTimeout(Tb),Ub(ab)}ab.ping(Eb).then(Eb,(()=>{Ab(Mb)}))}))))}(bb),Ub=new NM(bb);return ab.register("authEvent",(ab=>{pb(null===ab||void 0===ab?void 0:ab.authEvent,bb,"invalid-auth-event");return{status:Ub.onEvent(ab.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[bb._key()]={manager:Ub},this.iframes[bb._key()]=ab,Ub}_isIframeWebStorageSupported(bb,ab){this.iframes[bb._key()].send(cM,{type:cM},(Ub=>{var Ab;const Mb=null===(Ab=null===Ub||void 0===Ub?void 0:Ub[0])||void 0===Ab?void 0:Ab[cM];void 0!==Mb&&ab(!!Mb),zb(bb,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(bb){const ab=bb._key();return this.originValidationPromises[ab]||(this.originValidationPromises[ab]=FM(bb)),this.originValidationPromises[ab]}get _shouldInitProactively(){return Da()||Pa()||Za()}};class nM{constructor(bb){this.factorId=bb}_process(bb,ab,Ub){switch(ab.type){case"enroll":return this._finalizeEnroll(bb,ab.credential,Ub);case"signin":return this._finalizeSignIn(bb,ab.credential);default:return Nb("unexpected MultiFactorSessionType")}}}class SM extends nM{constructor(bb){super("phone"),this.credential=bb}static _fromCredential(bb){return new SM(bb)}_finalizeEnroll(bb,ab,Ub){return function(bb,ab){return rb(bb,"POST","/v2/accounts/mfaEnrollment:finalize",ub(bb,ab))}(bb,{idToken:ab,displayName:Ub,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(bb,ab){return function(bb,ab){return rb(bb,"POST","/v2/accounts/mfaSignIn:finalize",ub(bb,ab))}(bb,{mfaPendingCredential:ab,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bT{constructor(){}static assertion(bb){return SM._fromCredential(bb)}}bT.FACTOR_ID="phone";class aT{static assertionForEnrollment(bb,ab){return UT._fromSecret(bb,ab)}static assertionForSignIn(bb,ab){return UT._fromEnrollmentId(bb,ab)}static async generateSecret(bb){const ab=bb;pb("undefined"!==typeof ab.auth,"internal-error");const Ub=await(Ab=ab.auth,Mb={idToken:ab.credential,totpEnrollmentInfo:{}},rb(Ab,"POST","/v2/accounts/mfaEnrollment:start",ub(Ab,Mb)));var Ab,Mb;return AT._fromStartTotpMfaEnrollmentResponse(Ub,ab.auth)}}aT.FACTOR_ID="totp";class UT extends nM{constructor(bb,ab,Ub){super("totp"),this.otp=bb,this.enrollmentId=ab,this.secret=Ub}static _fromSecret(bb,ab){return new UT(ab,void 0,bb)}static _fromEnrollmentId(bb,ab){return new UT(ab,bb)}async _finalizeEnroll(bb,ab,Ub){return pb("undefined"!==typeof this.secret,bb,"argument-error"),function(bb,ab){return rb(bb,"POST","/v2/accounts/mfaEnrollment:finalize",ub(bb,ab))}(bb,{idToken:ab,displayName:Ub,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(bb,ab){pb(void 0!==this.enrollmentId&&void 0!==this.otp,bb,"argument-error");const Ub={verificationCode:this.otp};return function(bb,ab){return rb(bb,"POST","/v2/accounts/mfaSignIn:finalize",ub(bb,ab))}(bb,{mfaPendingCredential:ab,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:Ub})}}class AT{constructor(bb,ab,Ub,Ab,Mb,Tb,Eb){this.sessionInfo=Tb,this.auth=Eb,this.secretKey=bb,this.hashingAlgorithm=ab,this.codeLength=Ub,this.codeIntervalSeconds=Ab,this.enrollmentCompletionDeadline=Mb}static _fromStartTotpMfaEnrollmentResponse(bb,ab){return new AT(bb.totpSessionInfo.sharedSecretKey,bb.totpSessionInfo.hashingAlgorithm,bb.totpSessionInfo.verificationCodeLength,bb.totpSessionInfo.periodSec,new Date(bb.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),bb.totpSessionInfo.sessionInfo,ab)}_makeTotpVerificationInfo(bb){return{sessionInfo:this.sessionInfo,verificationCode:bb}}generateQrCodeUrl(bb,ab){var Ub;let Ab=!1;return(MT(bb)||MT(ab))&&(Ab=!0),Ab&&(MT(bb)&&(bb=(null===(Ub=this.auth.currentUser)||void 0===Ub?void 0:Ub.email)||"unknownuser"),MT(ab)&&(ab=this.auth.name)),`otpauth://totp/${ab}:${bb}?secret=${this.secretKey}&issuer=${ab}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function MT(bb){return"undefined"===typeof bb||0===(null===bb||void 0===bb?void 0:bb.length)}var TT="@firebase/auth",ET="0.23.2";class YT{constructor(bb){this.auth=bb,this.internalListeners=new Map}getUid(){var bb;return this.assertAuthConfigured(),(null===(bb=this.auth.currentUser)||void 0===bb?void 0:bb.uid)||null}async getToken(bb){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(bb)}}addAuthTokenListener(bb){if(this.assertAuthConfigured(),this.internalListeners.has(bb))return;const ab=this.auth.onIdTokenChanged((ab=>{bb((null===ab||void 0===ab?void 0:ab.stsTokenManager.accessToken)||null)}));this.internalListeners.set(bb,ab),this.updateProactiveRefresh()}removeAuthTokenListener(bb){this.assertAuthConfigured();const ab=this.internalListeners.get(bb);ab&&(this.internalListeners.delete(bb),ab(),this.updateProactiveRefresh())}assertAuthConfigured(){pb(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const BT=(0,Ab.F)("authIdTokenMaxAge")||300;let eT=null;const vT=bb=>async ab=>{const Ub=ab&&await ab.getIdTokenResult(),Ab=Ub&&((new Date).getTime()-Date.parse(Ub.issuedAtTime))/1e3;if(Ab&&Ab>BT)return;const Mb=null===Ub||void 0===Ub?void 0:Ub.token;eT!==Mb&&(eT=Mb,await fetch(bb,{method:Mb?"POST":"DELETE",headers:Mb?{Authorization:`Bearer ${Mb}`}:{}}))};function LT(){let bb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Mb.B)();const ab=(0,Mb.r)(bb,"auth");if(ab.isInitialized())return ab.getImmediate();const Ub=Ga(bb,{popupRedirectResolver:JM,persistence:[uA,DA,xA]}),Tb=(0,Ab.F)("authTokenSyncURL");if(Tb){const bb=vT(Tb);MA(Ub,bb,(()=>bb(Ub.currentUser))),AA(Ub,(ab=>bb(ab)))}const Eb=(0,Ab.D)("auth");return Eb&&Qa(Ub,`http://${Eb}`),Ub}var PT;PT="Browser",(0,Mb.u)(new Yb.e("auth",((bb,ab)=>{let{options:Ub}=ab;const Ab=bb.getProvider("app").getImmediate(),Mb=bb.getProvider("heartbeat"),Tb=bb.getProvider("app-check-internal"),{apiKey:Eb,authDomain:Yb}=Ab.options;pb(Eb&&!Eb.includes(":"),"invalid-api-key",{appName:Ab.name});const Bb={apiKey:Eb,authDomain:Yb,clientPlatform:PT,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:za(PT)},eb=new da(Ab,Mb,Tb,Bb);return function(bb,ab){const Ub=(null===ab||void 0===ab?void 0:ab.persistence)||[],Ab=(Array.isArray(Ub)?Ub:[Ub]).map(Ta);(null===ab||void 0===ab?void 0:ab.errorMap)&&bb._updateErrorMap(ab.errorMap),bb._initializeWithPersistence(Ab,null===ab||void 0===ab?void 0:ab.popupRedirectResolver)}(eb,Ub),eb}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((bb,ab,Ub)=>{bb.getProvider("auth-internal").initialize()}))),(0,Mb.u)(new Yb.e("auth-internal",(bb=>(bb=>new YT(bb))(Fa(bb.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Mb.K)(TT,ET,function(bb){switch(bb){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(PT)),(0,Mb.K)(TT,ET,"esm2017")}};Object.freeze(modules);for(const bb in modules)Object.freeze(modules[bb]);