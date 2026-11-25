/*! For license information please see igzsf.272.5d393359.chunk.js.LICENSE.txt */
export const id = 272;
export const ids = [272];
export const modules = {
    40715: (tt, et, Vt) => {
        Vt.r(et), Vt.d(et, {
          ActionCodeOperation: () => lt,
          ActionCodeURL: () => se,
          AuthCredential: () => ze,
          AuthErrorCodes: () => Nt,
          EmailAuthCredential: () => Be,
          EmailAuthProvider: () => tV,
          FacebookAuthProvider: () => qV,
          FactorId: () => jt,
          GithubAuthProvider: () => mV,
          GoogleAuthProvider: () => DV,
          OAuthCredential: () => xe,
          OAuthProvider: () => OV,
          OperationType: () => Qt,
          PhoneAuthCredential: () => ge,
          PhoneAuthProvider: () => Vq,
          PhoneMultiFactorGenerator: () => eD,
          ProviderId: () => Ht,
          RecaptchaVerifier: () => xO,
          SAMLAuthProvider: () => jV,
          SignInMethod: () => Xt,
          TotpMultiFactorGenerator: () => VD,
          TotpSecret: () => qD,
          TwitterAuthProvider: () => HV,
          applyActionCode: () => PV,
          beforeAuthStateChanged: () => DO,
          browserLocalPersistence: () => bO,
          browserPopupRedirectResolver: () => sq,
          browserSessionPersistence: () => CO,
          checkActionCode: () => ZV,
          confirmPasswordReset: () => IV,
          connectAuthEmulator: () => Fe,
          createUserWithEmailAndPassword: () => FV,
          debugErrorMap: () => ft,
          deleteUser: () => XO,
          fetchSignInMethodsForEmail: () => rV,
          getAdditionalUserInfo: () => eO,
          getAuth: () => lD,
          getIdToken: () => Bt,
          getIdTokenResult: () => pt,
          getMultiFactorResolver: () => EO,
          getRedirectResult: () => Kq,
          inMemoryPersistence: () => je,
          indexedDBLocalPersistence: () => GO,
          initializeAuth: () => Le,
          initializeRecaptchaConfig: () => OO,
          isSignInWithEmailLink: () => zV,
          linkWithCredential: () => uV,
          linkWithPhoneNumber: () => sO,
          linkWithPopup: () => lq,
          linkWithRedirect: () => uq,
          multiFactor: () => yO,
          onAuthStateChanged: () => mO,
          onIdTokenChanged: () => qO,
          parseActionCodeURL: () => ne,
          prodErrorMap: () => wt,
          reauthenticateWithCredential: () => KV,
          reauthenticateWithPhoneNumber: () => nO,
          reauthenticateWithPopup: () => Qq,
          reauthenticateWithRedirect: () => Cq,
          reload: () => ee,
          sendEmailVerification: () => UV,
          sendPasswordResetEmail: () => RV,
          sendSignInLinkToEmail: () => GV,
          setPersistence: () => VO,
          signInAnonymously: () => EV,
          signInWithCredential: () => CV,
          signInWithCustomToken: () => hV,
          signInWithEmailAndPassword: () => kV,
          signInWithEmailLink: () => oV,
          signInWithPhoneNumber: () => gO,
          signInWithPopup: () => Xq,
          signInWithRedirect: () => Jq,
          signOut: () => HO,
          unlink: () => NV,
          updateCurrentUser: () => jO,
          updateEmail: () => YV,
          updatePassword: () => BV,
          updatePhoneNumber: () => eq,
          updateProfile: () => iV,
          useDeviceLanguage: () => dO,
          verifyBeforeUpdateEmail: () => AV,
          verifyPasswordResetCode: () => LV
        });
        var Ot = Vt(40701),
          qt = Vt(40692);

        function Dt(tt, et) {
          var Vt = {};
          for (var Ot in tt) Object.prototype.hasOwnProperty.call(tt, Ot) && et.indexOf(Ot) < 0 && (Vt[Ot] = tt[Ot]);
          if (null != tt && "function" === typeof Object.getOwnPropertySymbols) {
            var qt = 0;
            for (Ot = Object.getOwnPropertySymbols(tt); qt < Ot.length; qt++) et.indexOf(Ot[qt]) < 0 && Object.prototype.propertyIsEnumerable.call(tt, Ot[qt]) && (Vt[Ot[qt]] = tt[Ot[qt]])
          }
          return Vt
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var mt = Vt(40708),
          dt = Vt(40699);
        const jt = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Ht = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Xt = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Qt = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          lt = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Et() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const ft = function() {
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
          wt = Et,
          yt = new Ot.e("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Nt = {
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
          Mt = new mt.f("@firebase/auth");

        function bt(tt) {
          if (Mt.logLevel <= mt.e.ERROR) {
            for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
            Mt.error(`Auth (${qt.g}): ${tt}`, ...Vt)
          }
        }

        function Jt(tt) {
          for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
          throw ht(tt, ...Vt)
        }

        function Ct(tt) {
          for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
          return ht(tt, ...Vt)
        }

        function ut(tt, et, Vt) {
          const qt = Object.assign(Object.assign({}, wt()), {
            [et]: Vt
          });
          return new Ot.e("auth", "Firebase", qt).create(et, {
            appName: tt.name
          })
        }

        function Kt(tt, et, Vt) {
          if (!(et instanceof Vt)) throw Vt.name !== et.constructor.name && Jt(tt, "argument-error"), ut(tt, "argument-error", `Type of ${et.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function ht(tt) {
          for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
          if ("string" !== typeof tt) {
            const et = Vt[0],
              Ot = [...Vt.slice(1)];
            return Ot[0] && (Ot[0].appName = tt.name), tt._errorFactory.create(et, ...Ot)
          }
          return yt.create(tt, ...Vt)
        }

        function vt(tt, et) {
          if (!tt) {
            for (var Vt = arguments.length, Ot = new Array(Vt > 2 ? Vt - 2 : 0), qt = 2; qt < Vt; qt++) Ot[qt - 2] = arguments[qt];
            throw ht(et, ...Ot)
          }
        }

        function Wt(tt) {
          const et = "INTERNAL ASSERTION FAILED: " + tt;
          throw bt(et), new Error(et)
        }

        function St(tt, et) {
          tt || Wt(et)
        }

        function ct() {
          var tt;
          return "undefined" !== typeof self && (null === (tt = self.location) || void 0 === tt ? void 0 : tt.href) || ""
        }

        function Rt() {
          return "http:" === It() || "https:" === It()
        }

        function It() {
          var tt;
          return "undefined" !== typeof self && (null === (tt = self.location) || void 0 === tt ? void 0 : tt.protocol) || null
        }
        class Pt {
          constructor(tt, et) {
            this.shortDelay = tt, this.longDelay = et, St(et > tt, "Short delay should be less than long delay!"), this.isMobile = (0, Ot.$)() || (0, Ot.db)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Rt() || (0, Ot.P)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function Zt(tt, et) {
          St(tt.emulator, "Emulator should always be set here");
          const {
            url: Vt
          } = tt.emulator;
          return et ? `${Vt}${et.startsWith("/")?et.slice(1):et}` : Vt
        }
        class Lt {
          static initialize(tt, et, Vt) {
            this.fetchImpl = tt, et && (this.headersImpl = et), Vt && (this.responseImpl = Vt)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Ft = {
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
          kt = new Pt(3e4, 6e4);

        function Gt(tt, et) {
          return tt.tenantId && !et.tenantId ? Object.assign(Object.assign({}, et), {
            tenantId: tt.tenantId
          }) : et
        }
        async function zt(tt, et, Vt, qt) {
          return ot(tt, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Dt = {},
              mt = {};
            qt && ("GET" === et ? mt = qt : Dt = {
              body: JSON.stringify(qt)
            });
            const dt = (0, Ot.kb)(Object.assign({
                key: tt.config.apiKey
              }, mt)).slice(1),
              jt = await tt._getAdditionalHeaders();
            return jt["Content-Type"] = "application/json", tt.languageCode && (jt["X-Firebase-Locale"] = tt.languageCode), Lt.fetch()(Ut(tt, tt.config.apiHost, Vt, dt), Object.assign({
              method: et,
              headers: jt,
              referrerPolicy: "no-referrer"
            }, Dt))
          }))
        }
        async function ot(tt, et, Vt) {
          tt._canInitEmulator = !1;
          const qt = Object.assign(Object.assign({}, Ft), et);
          try {
            const et = new At(tt),
              Ot = await Promise.race([Vt(), et.promise]);
            et.clearNetworkTimeout();
            const Dt = await Ot.json();
            if ("needConfirmation" in Dt) throw it(tt, "account-exists-with-different-credential", Dt);
            if (Ot.ok && !("errorMessage" in Dt)) return Dt;
            {
              const et = Ot.ok ? Dt.errorMessage : Dt.error.message,
                [Vt, mt] = et.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === Vt) throw it(tt, "credential-already-in-use", Dt);
              if ("EMAIL_EXISTS" === Vt) throw it(tt, "email-already-in-use", Dt);
              if ("USER_DISABLED" === Vt) throw it(tt, "user-disabled", Dt);
              const dt = qt[Vt] || Vt.toLowerCase().replace(/[_\s]+/g, "-");
              if (mt) throw ut(tt, dt, mt);
              Jt(tt, dt)
            }
          } catch (Dt) {
            if (Dt instanceof Ot.g) throw Dt;
            Jt(tt, "network-request-failed", {
              message: String(Dt)
            })
          }
        }
        async function rt(tt, et, Vt, Ot) {
          let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Dt = await zt(tt, et, Vt, Ot, qt);
          return "mfaPendingCredential" in Dt && Jt(tt, "multi-factor-auth-required", {
            _serverResponse: Dt
          }), Dt
        }

        function Ut(tt, et, Vt, Ot) {
          const qt = `${et}${Vt}?${Ot}`;
          return tt.config.emulator ? Zt(tt.config, qt) : `${tt.config.apiScheme}://${qt}`
        }
        class At {
          constructor(tt) {
            this.auth = tt, this.timer = null, this.promise = new Promise(((tt, et) => {
              this.timer = setTimeout((() => et(Ct(this.auth, "network-request-failed"))), kt.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function it(tt, et, Vt) {
          const Ot = {
            appName: tt.name
          };
          Vt.email && (Ot.email = Vt.email), Vt.phoneNumber && (Ot.phoneNumber = Vt.phoneNumber);
          const qt = Ct(tt, et, Ot);
          return qt.customData._tokenResponse = Vt, qt
        }

        function Yt(tt) {
          if (tt) try {
            const et = new Date(Number(tt));
            if (!isNaN(et.getTime())) return et.toUTCString()
          } catch (et) {}
        }

        function Bt(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Ot.L)(tt).getIdToken(et)
        }
        async function pt(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const Vt = (0, Ot.L)(tt),
            qt = await Vt.getIdToken(et),
            Dt = Tt(qt);
          vt(Dt && Dt.exp && Dt.auth_time && Dt.iat, Vt.auth, "internal-error");
          const mt = "object" === typeof Dt.firebase ? Dt.firebase : void 0,
            dt = null === mt || void 0 === mt ? void 0 : mt.sign_in_provider;
          return {
            claims: Dt,
            token: qt,
            authTime: Yt(xt(Dt.auth_time)),
            issuedAtTime: Yt(xt(Dt.iat)),
            expirationTime: Yt(xt(Dt.exp)),
            signInProvider: dt || null,
            signInSecondFactor: (null === mt || void 0 === mt ? void 0 : mt.sign_in_second_factor) || null
          }
        }

        function xt(tt) {
          return 1e3 * Number(tt)
        }

        function Tt(tt) {
          const [et, Vt, qt] = tt.split(".");
          if (void 0 === et || void 0 === Vt || void 0 === qt) return bt("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const tt = (0, Ot.m)(Vt);
            return tt ? JSON.parse(tt) : (bt("Failed to decode base64 JWT payload"), null)
          } catch (Dt) {
            return bt("Caught error parsing JWT payload as JSON", null === Dt || void 0 === Dt ? void 0 : Dt.toString()), null
          }
        }
        async function gt(tt, et) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return et;
          try {
            return await et
          } catch (Vt) {
            throw Vt instanceof Ot.g && function(tt) {
              let {
                code: et
              } = tt;
              return "auth/user-disabled" === et || "auth/user-token-expired" === et
            }(Vt) && tt.auth.currentUser === tt && await tt.auth.signOut(), Vt
          }
        }
        class st {
          constructor(tt) {
            this.user = tt, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(tt) {
            var et;
            if (tt) {
              const tt = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), tt
            } {
              this.errorBackoff = 3e4;
              const tt = (null !== (et = this.user.stsTokenManager.expirationTime) && void 0 !== et ? et : 0) - Date.now() - 3e5;
              return Math.max(0, tt)
            }
          }
          schedule() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const et = this.getInterval(tt);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), et)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (tt) {
              return void("auth/network-request-failed" === (null === tt || void 0 === tt ? void 0 : tt.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class nt {
          constructor(tt, et) {
            this.createdAt = tt, this.lastLoginAt = et, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Yt(this.lastLoginAt), this.creationTime = Yt(this.createdAt)
          }
          _copy(tt) {
            this.createdAt = tt.createdAt, this.lastLoginAt = tt.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function te(tt) {
          var et;
          const Vt = tt.auth,
            Ot = await tt.getIdToken(),
            qt = await gt(tt, async function(tt, et) {
              return zt(tt, "POST", "/v1/accounts:lookup", et)
            }(Vt, {
              idToken: Ot
            }));
          vt(null === qt || void 0 === qt ? void 0 : qt.users.length, Vt, "internal-error");
          const mt = qt.users[0];
          tt._notifyReloadListener(mt);
          const dt = (null === (et = mt.providerUserInfo) || void 0 === et ? void 0 : et.length) ? mt.providerUserInfo.map((tt => {
            var {
              providerId: et
            } = tt, Vt = Dt(tt, ["providerId"]);
            return {
              providerId: et,
              uid: Vt.rawId || "",
              displayName: Vt.displayName || null,
              email: Vt.email || null,
              phoneNumber: Vt.phoneNumber || null,
              photoURL: Vt.photoUrl || null
            }
          })) : [];
          const jt = (Ht = tt.providerData, Xt = dt, [...Ht.filter((tt => !Xt.some((et => et.providerId === tt.providerId)))), ...Xt]);
          var Ht, Xt;
          const Qt = tt.isAnonymous,
            lt = !(tt.email && mt.passwordHash) && !(null === jt || void 0 === jt ? void 0 : jt.length),
            Et = !!Qt && lt,
            ft = {
              uid: mt.localId,
              displayName: mt.displayName || null,
              photoURL: mt.photoUrl || null,
              email: mt.email || null,
              emailVerified: mt.emailVerified || !1,
              phoneNumber: mt.phoneNumber || null,
              tenantId: mt.tenantId || null,
              providerData: jt,
              metadata: new nt(mt.createdAt, mt.lastLoginAt),
              isAnonymous: Et
            };
          Object.assign(tt, ft)
        }
        async function ee(tt) {
          const et = (0, Ot.L)(tt);
          await te(et), await et.auth._persistUserIfCurrent(et), et.auth._notifyListenersIfCurrent(et)
        }
        class Ve {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(tt) {
            vt(tt.idToken, "internal-error"), vt("undefined" !== typeof tt.idToken, "internal-error"), vt("undefined" !== typeof tt.refreshToken, "internal-error");
            const et = "expiresIn" in tt && "undefined" !== typeof tt.expiresIn ? Number(tt.expiresIn) : function(tt) {
              const et = Tt(tt);
              return vt(et, "internal-error"), vt("undefined" !== typeof et.exp, "internal-error"), vt("undefined" !== typeof et.iat, "internal-error"), Number(et.exp) - Number(et.iat)
            }(tt.idToken);
            this.updateTokensAndExpiration(tt.idToken, tt.refreshToken, et)
          }
          async getToken(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return vt(!this.accessToken || this.refreshToken, tt, "user-token-expired"), et || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(tt, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(tt, et) {
            const {
              accessToken: Vt,
              refreshToken: qt,
              expiresIn: Dt
            } = await async function(tt, et) {
              const Vt = await ot(tt, {}, (async () => {
                const Vt = (0, Ot.kb)({
                    grant_type: "refresh_token",
                    refresh_token: et
                  }).slice(1),
                  {
                    tokenApiHost: qt,
                    apiKey: Dt
                  } = tt.config,
                  mt = Ut(tt, qt, "/v1/token", `key=${Dt}`),
                  dt = await tt._getAdditionalHeaders();
                return dt["Content-Type"] = "application/x-www-form-urlencoded", Lt.fetch()(mt, {
                  method: "POST",
                  headers: dt,
                  body: Vt
                })
              }));
              return {
                accessToken: Vt.access_token,
                expiresIn: Vt.expires_in,
                refreshToken: Vt.refresh_token
              }
            }(tt, et);
            this.updateTokensAndExpiration(Vt, qt, Number(Dt))
          }
          updateTokensAndExpiration(tt, et, Vt) {
            this.refreshToken = et || null, this.accessToken = tt || null, this.expirationTime = Date.now() + 1e3 * Vt
          }
          static fromJSON(tt, et) {
            const {
              refreshToken: Vt,
              accessToken: Ot,
              expirationTime: qt
            } = et, Dt = new Ve;
            return Vt && (vt("string" === typeof Vt, "internal-error", {
              appName: tt
            }), Dt.refreshToken = Vt), Ot && (vt("string" === typeof Ot, "internal-error", {
              appName: tt
            }), Dt.accessToken = Ot), qt && (vt("number" === typeof qt, "internal-error", {
              appName: tt
            }), Dt.expirationTime = qt), Dt
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(tt) {
            this.accessToken = tt.accessToken, this.refreshToken = tt.refreshToken, this.expirationTime = tt.expirationTime
          }
          _clone() {
            return Object.assign(new Ve, this.toJSON())
          }
          _performRefresh() {
            return Wt("not implemented")
          }
        }

        function Oe(tt, et) {
          vt("string" === typeof tt || "undefined" === typeof tt, "internal-error", {
            appName: et
          })
        }
        class qe {
          constructor(tt) {
            var {
              uid: et,
              auth: Vt,
              stsTokenManager: Ot
            } = tt, qt = Dt(tt, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new st(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = et, this.auth = Vt, this.stsTokenManager = Ot, this.accessToken = Ot.accessToken, this.displayName = qt.displayName || null, this.email = qt.email || null, this.emailVerified = qt.emailVerified || !1, this.phoneNumber = qt.phoneNumber || null, this.photoURL = qt.photoURL || null, this.isAnonymous = qt.isAnonymous || !1, this.tenantId = qt.tenantId || null, this.providerData = qt.providerData ? [...qt.providerData] : [], this.metadata = new nt(qt.createdAt || void 0, qt.lastLoginAt || void 0)
          }
          async getIdToken(tt) {
            const et = await gt(this, this.stsTokenManager.getToken(this.auth, tt));
            return vt(et, this.auth, "internal-error"), this.accessToken !== et && (this.accessToken = et, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), et
          }
          getIdTokenResult(tt) {
            return pt(this, tt)
          }
          reload() {
            return ee(this)
          }
          _assign(tt) {
            this !== tt && (vt(this.uid === tt.uid, this.auth, "internal-error"), this.displayName = tt.displayName, this.photoURL = tt.photoURL, this.email = tt.email, this.emailVerified = tt.emailVerified, this.phoneNumber = tt.phoneNumber, this.isAnonymous = tt.isAnonymous, this.tenantId = tt.tenantId, this.providerData = tt.providerData.map((tt => Object.assign({}, tt))), this.metadata._copy(tt.metadata), this.stsTokenManager._assign(tt.stsTokenManager))
          }
          _clone(tt) {
            const et = new qe(Object.assign(Object.assign({}, this), {
              auth: tt,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return et.metadata._copy(this.metadata), et
          }
          _onReload(tt) {
            vt(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = tt, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(tt) {
            this.reloadListener ? this.reloadListener(tt) : this.reloadUserInfo = tt
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Vt = !1;
            tt.idToken && tt.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(tt), Vt = !0), et && await te(this), await this.auth._persistUserIfCurrent(this), Vt && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const tt = await this.getIdToken();
            return await gt(this, async function(tt, et) {
              return zt(tt, "POST", "/v1/accounts:delete", et)
            }(this.auth, {
              idToken: tt
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
              providerData: this.providerData.map((tt => Object.assign({}, tt))),
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
          static _fromJSON(tt, et) {
            var Vt, Ot, qt, Dt, mt, dt, jt, Ht;
            const Xt = null !== (Vt = et.displayName) && void 0 !== Vt ? Vt : void 0,
              Qt = null !== (Ot = et.email) && void 0 !== Ot ? Ot : void 0,
              lt = null !== (qt = et.phoneNumber) && void 0 !== qt ? qt : void 0,
              Et = null !== (Dt = et.photoURL) && void 0 !== Dt ? Dt : void 0,
              ft = null !== (mt = et.tenantId) && void 0 !== mt ? mt : void 0,
              wt = null !== (dt = et._redirectEventId) && void 0 !== dt ? dt : void 0,
              yt = null !== (jt = et.createdAt) && void 0 !== jt ? jt : void 0,
              Nt = null !== (Ht = et.lastLoginAt) && void 0 !== Ht ? Ht : void 0,
              {
                uid: Mt,
                emailVerified: bt,
                isAnonymous: Jt,
                providerData: Ct,
                stsTokenManager: ut
              } = et;
            vt(Mt && ut, tt, "internal-error");
            const Kt = Ve.fromJSON(this.name, ut);
            vt("string" === typeof Mt, tt, "internal-error"), Oe(Xt, tt.name), Oe(Qt, tt.name), vt("boolean" === typeof bt, tt, "internal-error"), vt("boolean" === typeof Jt, tt, "internal-error"), Oe(lt, tt.name), Oe(Et, tt.name), Oe(ft, tt.name), Oe(wt, tt.name), Oe(yt, tt.name), Oe(Nt, tt.name);
            const ht = new qe({
              uid: Mt,
              auth: tt,
              email: Qt,
              emailVerified: bt,
              displayName: Xt,
              isAnonymous: Jt,
              photoURL: Et,
              phoneNumber: lt,
              tenantId: ft,
              stsTokenManager: Kt,
              createdAt: yt,
              lastLoginAt: Nt
            });
            return Ct && Array.isArray(Ct) && (ht.providerData = Ct.map((tt => Object.assign({}, tt)))), wt && (ht._redirectEventId = wt), ht
          }
          static async _fromIdTokenResponse(tt, et) {
            let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Ot = new Ve;
            Ot.updateFromServerResponse(et);
            const qt = new qe({
              uid: et.localId,
              auth: tt,
              stsTokenManager: Ot,
              isAnonymous: Vt
            });
            return await te(qt), qt
          }
        }
        const De = new Map;

        function me(tt) {
          St(tt instanceof Function, "Expected a class definition");
          let et = De.get(tt);
          return et ? (St(et instanceof tt, "Instance stored in cache mismatched with class"), et) : (et = new tt, De.set(tt, et), et)
        }
        class de {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(tt, et) {
            this.storage[tt] = et
          }
          async _get(tt) {
            const et = this.storage[tt];
            return void 0 === et ? null : et
          }
          async _remove(tt) {
            delete this.storage[tt]
          }
          _addListener(tt, et) {}
          _removeListener(tt, et) {}
        }
        de.type = "NONE";
        const je = de;

        function He(tt, et, Vt) {
          return `firebase:${tt}:${et}:${Vt}`
        }
        class Xe {
          constructor(tt, et, Vt) {
            this.persistence = tt, this.auth = et, this.userKey = Vt;
            const {
              config: Ot,
              name: qt
            } = this.auth;
            this.fullUserKey = He(this.userKey, Ot.apiKey, qt), this.fullPersistenceKey = He("persistence", Ot.apiKey, qt), this.boundEventHandler = et._onStorageEvent.bind(et), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(tt) {
            return this.persistence._set(this.fullUserKey, tt.toJSON())
          }
          async getCurrentUser() {
            const tt = await this.persistence._get(this.fullUserKey);
            return tt ? qe._fromJSON(this.auth, tt) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(tt) {
            if (this.persistence === tt) return;
            const et = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = tt, et ? this.setCurrentUser(et) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(tt, et) {
            let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!et.length) return new Xe(me(je), tt, Vt);
            const Ot = (await Promise.all(et.map((async tt => {
              if (await tt._isAvailable()) return tt
            })))).filter((tt => tt));
            let qt = Ot[0] || me(je);
            const Dt = He(Vt, tt.config.apiKey, tt.name);
            let mt = null;
            for (const Ht of et) try {
              const et = await Ht._get(Dt);
              if (et) {
                const Vt = qe._fromJSON(tt, et);
                Ht !== qt && (mt = Vt), qt = Ht;
                break
              }
            } catch (jt) {}
            const dt = Ot.filter((tt => tt._shouldAllowMigration));
            return qt._shouldAllowMigration && dt.length ? (qt = dt[0], mt && await qt._set(Dt, mt.toJSON()), await Promise.all(et.map((async tt => {
              if (tt !== qt) try {
                await tt._remove(Dt)
              } catch (jt) {}
            }))), new Xe(qt, tt, Vt)) : new Xe(qt, tt, Vt)
          }
        }

        function Qe(tt) {
          const et = tt.toLowerCase();
          if (et.includes("opera/") || et.includes("opr/") || et.includes("opios/")) return "Opera";
          if (we(et)) return "IEMobile";
          if (et.includes("msie") || et.includes("trident/")) return "IE";
          if (et.includes("edge/")) return "Edge";
          if (le(et)) return "Firefox";
          if (et.includes("silk/")) return "Silk";
          if (Ne(et)) return "Blackberry";
          if (ae(et)) return "Webos";
          if (Ee(et)) return "Safari";
          if ((et.includes("chrome/") || fe(et)) && !et.includes("edge/")) return "Chrome";
          if (ye(et)) return "Android";
          {
            const et = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              Vt = tt.match(et);
            if (2 === (null === Vt || void 0 === Vt ? void 0 : Vt.length)) return Vt[1]
          }
          return "Other"
        }

        function le() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)();
          return /firefox\//i.test(tt)
        }

        function Ee() {
          const tt = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)()).toLowerCase();
          return tt.includes("safari/") && !tt.includes("chrome/") && !tt.includes("crios/") && !tt.includes("android")
        }

        function fe() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)();
          return /crios\//i.test(tt)
        }

        function we() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)();
          return /iemobile/i.test(tt)
        }

        function ye() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)();
          return /android/i.test(tt)
        }

        function Ne() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)();
          return /blackberry/i.test(tt)
        }

        function ae() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)();
          return /webos/i.test(tt)
        }

        function Me() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)();
          return /iphone|ipad|ipod/i.test(tt) || /macintosh/i.test(tt) && /mobile/i.test(tt)
        }

        function be() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)();
          return Me(tt) || ye(tt) || ae(tt) || Ne(tt) || /windows phone/i.test(tt) || we(tt)
        }

        function Je(tt) {
          let et, Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (tt) {
            case "Browser":
              et = Qe((0, Ot.M)());
              break;
            case "Worker":
              et = `${Qe((0,Ot.M)())}-${tt}`;
              break;
            default:
              et = tt
          }
          const Dt = Vt.length ? Vt.join(",") : "FirebaseCore-web";
          return `${et}/JsCore/${qt.g}/${Dt}`
        }
        async function Ce(tt, et) {
          return zt(tt, "GET", "/v2/recaptchaConfig", Gt(tt, et))
        }

        function ue(tt) {
          return void 0 !== tt && void 0 !== tt.getResponse
        }

        function Ke(tt) {
          return void 0 !== tt && void 0 !== tt.enterprise
        }
        class he {
          constructor(tt) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === tt.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = tt.recaptchaKey.split("/")[3], this.emailPasswordEnabled = tt.recaptchaEnforcementState.some((tt => "EMAIL_PASSWORD_PROVIDER" === tt.provider && "OFF" !== tt.enforcementState))
          }
        }

        function ve(tt) {
          return new Promise(((et, Vt) => {
            const Ot = document.createElement("script");
            Ot.setAttribute("src", tt), Ot.onload = et, Ot.onerror = tt => {
                const et = Ct("internal-error");
                et.customData = tt, Vt(et)
              }, Ot.type = "text/javascript", Ot.charset = "UTF-8",
              function() {
                var tt, et;
                return null !== (et = null === (tt = document.getElementsByTagName("head")) || void 0 === tt ? void 0 : tt[0]) && void 0 !== et ? et : document
              }().appendChild(Ot)
          }))
        }

        function We(tt) {
          return `__${tt}${Math.floor(1e6*Math.random())}`
        }
        class Se {
          constructor(tt) {
            this.type = "recaptcha-enterprise", this.auth = Pe(tt)
          }
          async verify() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function Vt(et, Vt, Ot) {
              const qt = window.grecaptcha;
              Ke(qt) ? qt.enterprise.ready((() => {
                qt.enterprise.execute(et, {
                  action: tt
                }).then((tt => {
                  Vt(tt)
                })).catch((() => {
                  Vt("NO_RECAPTCHA")
                }))
              })) : Ot(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((tt, Ot) => {
              (async function(tt) {
                if (!et) {
                  if (null == tt.tenantId && null != tt._agentRecaptchaConfig) return tt._agentRecaptchaConfig.siteKey;
                  if (null != tt.tenantId && void 0 !== tt._tenantRecaptchaConfigs[tt.tenantId]) return tt._tenantRecaptchaConfigs[tt.tenantId].siteKey
                }
                return new Promise((async (et, Vt) => {
                  Ce(tt, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Ot => {
                    if (void 0 !== Ot.recaptchaKey) {
                      const Vt = new he(Ot);
                      return null == tt.tenantId ? tt._agentRecaptchaConfig = Vt : tt._tenantRecaptchaConfigs[tt.tenantId] = Vt, et(Vt.siteKey)
                    }
                    Vt(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((tt => {
                    Vt(tt)
                  }))
                }))
              })(this.auth).then((qt => {
                if (!et && Ke(window.grecaptcha)) Vt(qt, tt, Ot);
                else {
                  if ("undefined" === typeof window) return void Ot(new Error("RecaptchaVerifier is only supported in browser"));
                  ve("https://www.google.com/recaptcha/enterprise.js?render=" + qt).then((() => {
                    Vt(qt, tt, Ot)
                  })).catch((tt => {
                    Ot(tt)
                  }))
                }
              })).catch((tt => {
                Ot(tt)
              }))
            }))
          }
        }
        async function ce(tt, et, Vt) {
          let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const qt = new Se(tt);
          let Dt;
          try {
            Dt = await qt.verify(Vt)
          } catch (dt) {
            Dt = await qt.verify(Vt, !0)
          }
          const mt = Object.assign({}, et);
          return Ot ? Object.assign(mt, {
            captchaResp: Dt
          }) : Object.assign(mt, {
            captchaResponse: Dt
          }), Object.assign(mt, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(mt, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), mt
        }
        class Re {
          constructor(tt) {
            this.auth = tt, this.queue = []
          }
          pushCallback(tt, et) {
            const Vt = et => new Promise(((Vt, Ot) => {
              try {
                Vt(tt(et))
              } catch (qt) {
                Ot(qt)
              }
            }));
            Vt.onAbort = et, this.queue.push(Vt);
            const Ot = this.queue.length - 1;
            return () => {
              this.queue[Ot] = () => Promise.resolve()
            }
          }
          async runMiddleware(tt) {
            if (this.auth.currentUser === tt) return;
            const et = [];
            try {
              for (const Vt of this.queue) await Vt(tt), Vt.onAbort && et.push(Vt.onAbort)
            } catch (Vt) {
              et.reverse();
              for (const tt of et) try {
                tt()
              } catch (Ot) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === Vt || void 0 === Vt ? void 0 : Vt.message
              })
            }
          }
        }
        class Ie {
          constructor(tt, et, Vt, Ot) {
            this.app = tt, this.heartbeatServiceProvider = et, this.appCheckServiceProvider = Vt, this.config = Ot, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Ze(this), this.idTokenSubscription = new Ze(this), this.beforeStateQueue = new Re(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = yt, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = tt.name, this.clientVersion = Ot.sdkClientVersion
          }
          _initializeWithPersistence(tt, et) {
            return et && (this._popupRedirectResolver = me(et)), this._initializationPromise = this.queue((async () => {
              var Vt, Ot;
              if (!this._deleted && (this.persistenceManager = await Xe.create(this, tt), !this._deleted)) {
                if (null === (Vt = this._popupRedirectResolver) || void 0 === Vt ? void 0 : Vt._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (qt) {}
                await this.initializeCurrentUser(et), this.lastNotifiedUid = (null === (Ot = this.currentUser) || void 0 === Ot ? void 0 : Ot.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const tt = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || tt ? this.currentUser && tt && this.currentUser.uid === tt.uid ? (this._currentUser._assign(tt), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(tt, !0) : void 0
          }
          async initializeCurrentUser(tt) {
            var et;
            const Vt = await this.assertedPersistence.getCurrentUser();
            let Ot = Vt,
              qt = !1;
            if (tt && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const Vt = null === (et = this.redirectUser) || void 0 === et ? void 0 : et._redirectEventId,
                Dt = null === Ot || void 0 === Ot ? void 0 : Ot._redirectEventId,
                mt = await this.tryRedirectSignIn(tt);
              Vt && Vt !== Dt || !(null === mt || void 0 === mt ? void 0 : mt.user) || (Ot = mt.user, qt = !0)
            }
            if (!Ot) return this.directlySetCurrentUser(null);
            if (!Ot._redirectEventId) {
              if (qt) try {
                await this.beforeStateQueue.runMiddleware(Ot)
              } catch (Dt) {
                Ot = Vt, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Dt)))
              }
              return Ot ? this.reloadAndSetCurrentUserOrClear(Ot) : this.directlySetCurrentUser(null)
            }
            return vt(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Ot._redirectEventId ? this.directlySetCurrentUser(Ot) : this.reloadAndSetCurrentUserOrClear(Ot)
          }
          async tryRedirectSignIn(tt) {
            let et = null;
            try {
              et = await this._popupRedirectResolver._completeRedirectFn(this, tt, !0)
            } catch (Vt) {
              await this._setRedirectUser(null)
            }
            return et
          }
          async reloadAndSetCurrentUserOrClear(tt) {
            try {
              await te(tt)
            } catch (et) {
              if ("auth/network-request-failed" !== (null === et || void 0 === et ? void 0 : et.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(tt)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const tt = navigator;
              return tt.languages && tt.languages[0] || tt.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(tt) {
            const et = tt ? (0, Ot.L)(tt) : null;
            return et && vt(et.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(et && et._clone(this))
          }
          async _updateCurrentUser(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return tt && vt(this.tenantId === tt.tenantId, this, "tenant-id-mismatch"), et || await this.beforeStateQueue.runMiddleware(tt), this.queue((async () => {
              await this.directlySetCurrentUser(tt), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(tt) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(me(tt))
            }))
          }
          async initializeRecaptchaConfig() {
            const tt = await Ce(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              et = new he(tt);
            if (null == this.tenantId ? this._agentRecaptchaConfig = et : this._tenantRecaptchaConfigs[this.tenantId] = et, et.emailPasswordEnabled) {
              new Se(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(tt) {
            this._errorFactory = new Ot.e("auth", "Firebase", tt())
          }
          onAuthStateChanged(tt, et, Vt) {
            return this.registerStateListener(this.authStateSubscription, tt, et, Vt)
          }
          beforeAuthStateChanged(tt, et) {
            return this.beforeStateQueue.pushCallback(tt, et)
          }
          onIdTokenChanged(tt, et, Vt) {
            return this.registerStateListener(this.idTokenSubscription, tt, et, Vt)
          }
          toJSON() {
            var tt;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (tt = this._currentUser) || void 0 === tt ? void 0 : tt.toJSON()
            }
          }
          async _setRedirectUser(tt, et) {
            const Vt = await this.getOrInitRedirectPersistenceManager(et);
            return null === tt ? Vt.removeCurrentUser() : Vt.setCurrentUser(tt)
          }
          async getOrInitRedirectPersistenceManager(tt) {
            if (!this.redirectPersistenceManager) {
              const et = tt && me(tt) || this._popupRedirectResolver;
              vt(et, this, "argument-error"), this.redirectPersistenceManager = await Xe.create(this, [me(et._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(tt) {
            var et, Vt;
            return this._isInitialized && await this.queue((async () => {})), (null === (et = this._currentUser) || void 0 === et ? void 0 : et._redirectEventId) === tt ? this._currentUser : (null === (Vt = this.redirectUser) || void 0 === Vt ? void 0 : Vt._redirectEventId) === tt ? this.redirectUser : null
          }
          async _persistUserIfCurrent(tt) {
            if (tt === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(tt)))
          }
          _notifyListenersIfCurrent(tt) {
            tt === this.currentUser && this.notifyAuthListeners()
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
            var tt, et;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const Vt = null !== (et = null === (tt = this.currentUser) || void 0 === tt ? void 0 : tt.uid) && void 0 !== et ? et : null;
            this.lastNotifiedUid !== Vt && (this.lastNotifiedUid = Vt, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(tt, et, Vt, Ot) {
            if (this._deleted) return () => {};
            const qt = "function" === typeof et ? et : et.next.bind(et),
              Dt = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return vt(Dt, this, "internal-error"), Dt.then((() => qt(this.currentUser))), "function" === typeof et ? tt.addObserver(et, Vt, Ot) : tt.addObserver(et)
          }
          async directlySetCurrentUser(tt) {
            this.currentUser && this.currentUser !== tt && this._currentUser._stopProactiveRefresh(), tt && this.isProactiveRefreshEnabled && tt._startProactiveRefresh(), this.currentUser = tt, tt ? await this.assertedPersistence.setCurrentUser(tt) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(tt) {
            return this.operations = this.operations.then(tt, tt), this.operations
          }
          get assertedPersistence() {
            return vt(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(tt) {
            tt && !this.frameworks.includes(tt) && (this.frameworks.push(tt), this.frameworks.sort(), this.clientVersion = Je(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var tt;
            const et = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (et["X-Firebase-gmpid"] = this.app.options.appId);
            const Vt = await (null === (tt = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === tt ? void 0 : tt.getHeartbeatsHeader());
            Vt && (et["X-Firebase-Client"] = Vt);
            const Ot = await this._getAppCheckToken();
            return Ot && (et["X-Firebase-AppCheck"] = Ot), et
          }
          async _getAppCheckToken() {
            var tt;
            const et = await (null === (tt = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === tt ? void 0 : tt.getToken());
            return (null === et || void 0 === et ? void 0 : et.error) && function(tt) {
              if (Mt.logLevel <= mt.e.WARN) {
                for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
                Mt.warn(`Auth (${qt.g}): ${tt}`, ...Vt)
              }
            }(`Error while retrieving App Check token: ${et.error}`), null === et || void 0 === et ? void 0 : et.token
          }
        }

        function Pe(tt) {
          return (0, Ot.L)(tt)
        }
        class Ze {
          constructor(tt) {
            this.auth = tt, this.observer = null, this.addObserver = (0, Ot.v)((tt => this.observer = tt))
          }
          get next() {
            return vt(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Le(tt, et) {
          const Vt = (0, qt.z)(tt, "auth");
          if (Vt.isInitialized()) {
            const tt = Vt.getImmediate(),
              qt = Vt.getOptions();
            if ((0, Ot.x)(qt, null !== et && void 0 !== et ? et : {})) return tt;
            Jt(tt, "already-initialized")
          }
          return Vt.initialize({
            options: et
          })
        }

        function Fe(tt, et, Vt) {
          const Ot = Pe(tt);
          vt(Ot._canInitEmulator, Ot, "emulator-config-failed"), vt(/^https?:\/\//.test(et), Ot, "invalid-emulator-scheme");
          const qt = !!(null === Vt || void 0 === Vt ? void 0 : Vt.disableWarnings),
            Dt = ke(et),
            {
              host: mt,
              port: dt
            } = function(tt) {
              const et = ke(tt),
                Vt = /(\/\/)?([^?#/]+)/.exec(tt.substr(et.length));
              if (!Vt) return {
                host: "",
                port: null
              };
              const Ot = Vt[2].split("@").pop() || "",
                qt = /^(\[[^\]]+\])(:|$)/.exec(Ot);
              if (qt) {
                const tt = qt[1];
                return {
                  host: tt,
                  port: Ge(Ot.substr(tt.length + 1))
                }
              } {
                const [tt, et] = Ot.split(":");
                return {
                  host: tt,
                  port: Ge(et)
                }
              }
            }(et),
            jt = null === dt ? "" : `:${dt}`;
          Ot.config.emulator = {
            url: `${Dt}//${mt}${jt}/`
          }, Ot.settings.appVerificationDisabledForTesting = !0, Ot.emulatorConfig = Object.freeze({
            host: mt,
            port: dt,
            protocol: Dt.replace(":", ""),
            options: Object.freeze({
              disableWarnings: qt
            })
          }), qt || function() {
            function tt() {
              const tt = document.createElement("p"),
                et = tt.style;
              tt.innerText = "Running in emulator mode. Do not use with production credentials.", et.position = "fixed", et.width = "100%", et.backgroundColor = "#ffffff", et.border = ".1em solid #000000", et.color = "#b50000", et.bottom = "0px", et.left = "0px", et.margin = "0px", et.zIndex = "10000", et.textAlign = "center", tt.classList.add("firebase-emulator-warning"), document.body.appendChild(tt)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", tt) : tt())
          }()
        }

        function ke(tt) {
          const et = tt.indexOf(":");
          return et < 0 ? "" : tt.substr(0, et + 1)
        }

        function Ge(tt) {
          if (!tt) return null;
          const et = Number(tt);
          return isNaN(et) ? null : et
        }
        class ze {
          constructor(tt, et) {
            this.providerId = tt, this.signInMethod = et
          }
          toJSON() {
            return Wt("not implemented")
          }
          _getIdTokenResponse(tt) {
            return Wt("not implemented")
          }
          _linkToIdToken(tt, et) {
            return Wt("not implemented")
          }
          _getReauthenticationResolver(tt) {
            return Wt("not implemented")
          }
        }
        async function oe(tt, et) {
          return zt(tt, "POST", "/v1/accounts:resetPassword", Gt(tt, et))
        }
        async function re(tt, et) {
          return zt(tt, "POST", "/v1/accounts:update", et)
        }
        async function Ue(tt, et) {
          return rt(tt, "POST", "/v1/accounts:signInWithPassword", Gt(tt, et))
        }
        async function Ae(tt, et) {
          return zt(tt, "POST", "/v1/accounts:sendOobCode", Gt(tt, et))
        }
        async function ie(tt, et) {
          return Ae(tt, et)
        }
        async function Ye(tt, et) {
          return Ae(tt, et)
        }
        class Be extends ze {
          constructor(tt, et, Vt) {
            let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", Vt), this._email = tt, this._password = et, this._tenantId = Ot
          }
          static _fromEmailAndPassword(tt, et) {
            return new Be(tt, et, "password")
          }
          static _fromEmailAndCode(tt, et) {
            return new Be(tt, et, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(tt) {
            const et = "string" === typeof tt ? JSON.parse(tt) : tt;
            if ((null === et || void 0 === et ? void 0 : et.email) && (null === et || void 0 === et ? void 0 : et.password)) {
              if ("password" === et.signInMethod) return this._fromEmailAndPassword(et.email, et.password);
              if ("emailLink" === et.signInMethod) return this._fromEmailAndCode(et.email, et.password, et.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(tt) {
            var et;
            switch (this.signInMethod) {
              case "password":
                const Vt = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (et = tt._getRecaptchaConfig()) || void 0 === et ? void 0 : et.emailPasswordEnabled) {
                  const et = await ce(tt, Vt, "signInWithPassword");
                  return Ue(tt, et)
                }
                return Ue(tt, Vt).catch((async et => {
                  if ("auth/missing-recaptcha-token" === et.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const et = await ce(tt, Vt, "signInWithPassword");
                    return Ue(tt, et)
                  }
                  return Promise.reject(et)
                }));
              case "emailLink":
                return async function(tt, et) {
                  return rt(tt, "POST", "/v1/accounts:signInWithEmailLink", Gt(tt, et))
                }(tt, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Jt(tt, "internal-error")
            }
          }
          async _linkToIdToken(tt, et) {
            switch (this.signInMethod) {
              case "password":
                return re(tt, {
                  idToken: et,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(tt, et) {
                  return rt(tt, "POST", "/v1/accounts:signInWithEmailLink", Gt(tt, et))
                }(tt, {
                  idToken: et,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Jt(tt, "internal-error")
            }
          }
          _getReauthenticationResolver(tt) {
            return this._getIdTokenResponse(tt)
          }
        }
        async function pe(tt, et) {
          return rt(tt, "POST", "/v1/accounts:signInWithIdp", Gt(tt, et))
        }
        class xe extends ze {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(tt) {
            const et = new xe(tt.providerId, tt.signInMethod);
            return tt.idToken || tt.accessToken ? (tt.idToken && (et.idToken = tt.idToken), tt.accessToken && (et.accessToken = tt.accessToken), tt.nonce && !tt.pendingToken && (et.nonce = tt.nonce), tt.pendingToken && (et.pendingToken = tt.pendingToken)) : tt.oauthToken && tt.oauthTokenSecret ? (et.accessToken = tt.oauthToken, et.secret = tt.oauthTokenSecret) : Jt("argument-error"), et
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
          static fromJSON(tt) {
            const et = "string" === typeof tt ? JSON.parse(tt) : tt,
              {
                providerId: Vt,
                signInMethod: Ot
              } = et,
              qt = Dt(et, ["providerId", "signInMethod"]);
            if (!Vt || !Ot) return null;
            const mt = new xe(Vt, Ot);
            return mt.idToken = qt.idToken || void 0, mt.accessToken = qt.accessToken || void 0, mt.secret = qt.secret, mt.nonce = qt.nonce, mt.pendingToken = qt.pendingToken || null, mt
          }
          _getIdTokenResponse(tt) {
            return pe(tt, this.buildRequest())
          }
          _linkToIdToken(tt, et) {
            const Vt = this.buildRequest();
            return Vt.idToken = et, pe(tt, Vt)
          }
          _getReauthenticationResolver(tt) {
            const et = this.buildRequest();
            return et.autoCreate = !1, pe(tt, et)
          }
          buildRequest() {
            const tt = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) tt.pendingToken = this.pendingToken;
            else {
              const et = {};
              this.idToken && (et.id_token = this.idToken), this.accessToken && (et.access_token = this.accessToken), this.secret && (et.oauth_token_secret = this.secret), et.providerId = this.providerId, this.nonce && !this.pendingToken && (et.nonce = this.nonce), tt.postBody = (0, Ot.kb)(et)
            }
            return tt
          }
        }
        const Te = {
          USER_NOT_FOUND: "user-not-found"
        };
        class ge extends ze {
          constructor(tt) {
            super("phone", "phone"), this.params = tt
          }
          static _fromVerification(tt, et) {
            return new ge({
              verificationId: tt,
              verificationCode: et
            })
          }
          static _fromTokenResponse(tt, et) {
            return new ge({
              phoneNumber: tt,
              temporaryProof: et
            })
          }
          _getIdTokenResponse(tt) {
            return async function(tt, et) {
              return rt(tt, "POST", "/v1/accounts:signInWithPhoneNumber", Gt(tt, et))
            }(tt, this._makeVerificationRequest())
          }
          _linkToIdToken(tt, et) {
            return async function(tt, et) {
              const Vt = await rt(tt, "POST", "/v1/accounts:signInWithPhoneNumber", Gt(tt, et));
              if (Vt.temporaryProof) throw it(tt, "account-exists-with-different-credential", Vt);
              return Vt
            }(tt, Object.assign({
              idToken: et
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(tt) {
            return async function(tt, et) {
              return rt(tt, "POST", "/v1/accounts:signInWithPhoneNumber", Gt(tt, Object.assign(Object.assign({}, et), {
                operation: "REAUTH"
              })), Te)
            }(tt, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: tt,
              phoneNumber: et,
              verificationId: Vt,
              verificationCode: Ot
            } = this.params;
            return tt && et ? {
              temporaryProof: tt,
              phoneNumber: et
            } : {
              sessionInfo: Vt,
              code: Ot
            }
          }
          toJSON() {
            const tt = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (tt.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (tt.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (tt.verificationCode = this.params.verificationCode), this.params.verificationId && (tt.verificationId = this.params.verificationId), tt
          }
          static fromJSON(tt) {
            "string" === typeof tt && (tt = JSON.parse(tt));
            const {
              verificationId: et,
              verificationCode: Vt,
              phoneNumber: Ot,
              temporaryProof: qt
            } = tt;
            return Vt || et || Ot || qt ? new ge({
              verificationId: et,
              verificationCode: Vt,
              phoneNumber: Ot,
              temporaryProof: qt
            }) : null
          }
        }
        class se {
          constructor(tt) {
            var et, Vt, qt, Dt, mt, dt;
            const jt = (0, Ot.gb)((0, Ot.A)(tt)),
              Ht = null !== (et = jt.apiKey) && void 0 !== et ? et : null,
              Xt = null !== (Vt = jt.oobCode) && void 0 !== Vt ? Vt : null,
              Qt = function(tt) {
                switch (tt) {
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
              }(null !== (qt = jt.mode) && void 0 !== qt ? qt : null);
            vt(Ht && Xt && Qt, "argument-error"), this.apiKey = Ht, this.operation = Qt, this.code = Xt, this.continueUrl = null !== (Dt = jt.continueUrl) && void 0 !== Dt ? Dt : null, this.languageCode = null !== (mt = jt.languageCode) && void 0 !== mt ? mt : null, this.tenantId = null !== (dt = jt.tenantId) && void 0 !== dt ? dt : null
          }
          static parseLink(tt) {
            const et = function(tt) {
              const et = (0, Ot.gb)((0, Ot.A)(tt)).link,
                Vt = et ? (0, Ot.gb)((0, Ot.A)(et)).deep_link_id : null,
                qt = (0, Ot.gb)((0, Ot.A)(tt)).deep_link_id;
              return (qt ? (0, Ot.gb)((0, Ot.A)(qt)).link : null) || qt || Vt || et || tt
            }(tt);
            try {
              return new se(et)
            } catch (Vt) {
              return null
            }
          }
        }

        function ne(tt) {
          return se.parseLink(tt)
        }
        class tV {
          constructor() {
            this.providerId = tV.PROVIDER_ID
          }
          static credential(tt, et) {
            return Be._fromEmailAndPassword(tt, et)
          }
          static credentialWithLink(tt, et) {
            const Vt = se.parseLink(et);
            return vt(Vt, "argument-error"), Be._fromEmailAndCode(tt, Vt.code, Vt.tenantId)
          }
        }
        tV.PROVIDER_ID = "password", tV.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", tV.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class eV {
          constructor(tt) {
            this.providerId = tt, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(tt) {
            this.defaultLanguageCode = tt
          }
          setCustomParameters(tt) {
            return this.customParameters = tt, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class VV extends eV {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(tt) {
            return this.scopes.includes(tt) || this.scopes.push(tt), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class OV extends VV {
          static credentialFromJSON(tt) {
            const et = "string" === typeof tt ? JSON.parse(tt) : tt;
            return vt("providerId" in et && "signInMethod" in et, "argument-error"), xe._fromParams(et)
          }
          credential(tt) {
            return this._credential(Object.assign(Object.assign({}, tt), {
              nonce: tt.rawNonce
            }))
          }
          _credential(tt) {
            return vt(tt.idToken || tt.accessToken, "argument-error"), xe._fromParams(Object.assign(Object.assign({}, tt), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(tt) {
            return OV.oauthCredentialFromTaggedObject(tt)
          }
          static credentialFromError(tt) {
            return OV.oauthCredentialFromTaggedObject(tt.customData || {})
          }
          static oauthCredentialFromTaggedObject(tt) {
            let {
              _tokenResponse: et
            } = tt;
            if (!et) return null;
            const {
              oauthIdToken: Vt,
              oauthAccessToken: Ot,
              oauthTokenSecret: qt,
              pendingToken: Dt,
              nonce: mt,
              providerId: dt
            } = et;
            if (!Ot && !qt && !Vt && !Dt) return null;
            if (!dt) return null;
            try {
              return new OV(dt)._credential({
                idToken: Vt,
                accessToken: Ot,
                nonce: mt,
                pendingToken: Dt
              })
            } catch (jt) {
              return null
            }
          }
        }
        class qV extends VV {
          constructor() {
            super("facebook.com")
          }
          static credential(tt) {
            return xe._fromParams({
              providerId: qV.PROVIDER_ID,
              signInMethod: qV.FACEBOOK_SIGN_IN_METHOD,
              accessToken: tt
            })
          }
          static credentialFromResult(tt) {
            return qV.credentialFromTaggedObject(tt)
          }
          static credentialFromError(tt) {
            return qV.credentialFromTaggedObject(tt.customData || {})
          }
          static credentialFromTaggedObject(tt) {
            let {
              _tokenResponse: et
            } = tt;
            if (!et || !("oauthAccessToken" in et)) return null;
            if (!et.oauthAccessToken) return null;
            try {
              return qV.credential(et.oauthAccessToken)
            } catch (Vt) {
              return null
            }
          }
        }
        qV.FACEBOOK_SIGN_IN_METHOD = "facebook.com", qV.PROVIDER_ID = "facebook.com";
        class DV extends VV {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(tt, et) {
            return xe._fromParams({
              providerId: DV.PROVIDER_ID,
              signInMethod: DV.GOOGLE_SIGN_IN_METHOD,
              idToken: tt,
              accessToken: et
            })
          }
          static credentialFromResult(tt) {
            return DV.credentialFromTaggedObject(tt)
          }
          static credentialFromError(tt) {
            return DV.credentialFromTaggedObject(tt.customData || {})
          }
          static credentialFromTaggedObject(tt) {
            let {
              _tokenResponse: et
            } = tt;
            if (!et) return null;
            const {
              oauthIdToken: Vt,
              oauthAccessToken: Ot
            } = et;
            if (!Vt && !Ot) return null;
            try {
              return DV.credential(Vt, Ot)
            } catch (qt) {
              return null
            }
          }
        }
        DV.GOOGLE_SIGN_IN_METHOD = "google.com", DV.PROVIDER_ID = "google.com";
        class mV extends VV {
          constructor() {
            super("github.com")
          }
          static credential(tt) {
            return xe._fromParams({
              providerId: mV.PROVIDER_ID,
              signInMethod: mV.GITHUB_SIGN_IN_METHOD,
              accessToken: tt
            })
          }
          static credentialFromResult(tt) {
            return mV.credentialFromTaggedObject(tt)
          }
          static credentialFromError(tt) {
            return mV.credentialFromTaggedObject(tt.customData || {})
          }
          static credentialFromTaggedObject(tt) {
            let {
              _tokenResponse: et
            } = tt;
            if (!et || !("oauthAccessToken" in et)) return null;
            if (!et.oauthAccessToken) return null;
            try {
              return mV.credential(et.oauthAccessToken)
            } catch (Vt) {
              return null
            }
          }
        }
        mV.GITHUB_SIGN_IN_METHOD = "github.com", mV.PROVIDER_ID = "github.com";
        class dV extends ze {
          constructor(tt, et) {
            super(tt, tt), this.pendingToken = et
          }
          _getIdTokenResponse(tt) {
            return pe(tt, this.buildRequest())
          }
          _linkToIdToken(tt, et) {
            const Vt = this.buildRequest();
            return Vt.idToken = et, pe(tt, Vt)
          }
          _getReauthenticationResolver(tt) {
            const et = this.buildRequest();
            return et.autoCreate = !1, pe(tt, et)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(tt) {
            const et = "string" === typeof tt ? JSON.parse(tt) : tt,
              {
                providerId: Vt,
                signInMethod: Ot,
                pendingToken: qt
              } = et;
            return Vt && Ot && qt && Vt === Ot ? new dV(Vt, qt) : null
          }
          static _create(tt, et) {
            return new dV(tt, et)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class jV extends eV {
          constructor(tt) {
            vt(tt.startsWith("saml."), "argument-error"), super(tt)
          }
          static credentialFromResult(tt) {
            return jV.samlCredentialFromTaggedObject(tt)
          }
          static credentialFromError(tt) {
            return jV.samlCredentialFromTaggedObject(tt.customData || {})
          }
          static credentialFromJSON(tt) {
            const et = dV.fromJSON(tt);
            return vt(et, "argument-error"), et
          }
          static samlCredentialFromTaggedObject(tt) {
            let {
              _tokenResponse: et
            } = tt;
            if (!et) return null;
            const {
              pendingToken: Vt,
              providerId: Ot
            } = et;
            if (!Vt || !Ot) return null;
            try {
              return dV._create(Ot, Vt)
            } catch (qt) {
              return null
            }
          }
        }
        class HV extends VV {
          constructor() {
            super("twitter.com")
          }
          static credential(tt, et) {
            return xe._fromParams({
              providerId: HV.PROVIDER_ID,
              signInMethod: HV.TWITTER_SIGN_IN_METHOD,
              oauthToken: tt,
              oauthTokenSecret: et
            })
          }
          static credentialFromResult(tt) {
            return HV.credentialFromTaggedObject(tt)
          }
          static credentialFromError(tt) {
            return HV.credentialFromTaggedObject(tt.customData || {})
          }
          static credentialFromTaggedObject(tt) {
            let {
              _tokenResponse: et
            } = tt;
            if (!et) return null;
            const {
              oauthAccessToken: Vt,
              oauthTokenSecret: Ot
            } = et;
            if (!Vt || !Ot) return null;
            try {
              return HV.credential(Vt, Ot)
            } catch (qt) {
              return null
            }
          }
        }
        async function XV(tt, et) {
          return rt(tt, "POST", "/v1/accounts:signUp", Gt(tt, et))
        }
        HV.TWITTER_SIGN_IN_METHOD = "twitter.com", HV.PROVIDER_ID = "twitter.com";
        class QV {
          constructor(tt) {
            this.user = tt.user, this.providerId = tt.providerId, this._tokenResponse = tt._tokenResponse, this.operationType = tt.operationType
          }
          static async _fromIdTokenResponse(tt, et, Vt) {
            let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const qt = await qe._fromIdTokenResponse(tt, Vt, Ot),
              Dt = lV(Vt);
            return new QV({
              user: qt,
              providerId: Dt,
              _tokenResponse: Vt,
              operationType: et
            })
          }
          static async _forOperation(tt, et, Vt) {
            await tt._updateTokensIfNecessary(Vt, !0);
            const Ot = lV(Vt);
            return new QV({
              user: tt,
              providerId: Ot,
              _tokenResponse: Vt,
              operationType: et
            })
          }
        }

        function lV(tt) {
          return tt.providerId ? tt.providerId : "phoneNumber" in tt ? "phone" : null
        }
        async function EV(tt) {
          var et;
          const Vt = Pe(tt);
          if (await Vt._initializationPromise, null === (et = Vt.currentUser) || void 0 === et ? void 0 : et.isAnonymous) return new QV({
            user: Vt.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Ot = await XV(Vt, {
              returnSecureToken: !0
            }),
            qt = await QV._fromIdTokenResponse(Vt, "signIn", Ot, !0);
          return await Vt._updateCurrentUser(qt.user), qt
        }
        class fV extends Ot.g {
          constructor(tt, et, Vt, Ot) {
            var qt;
            super(et.code, et.message), this.operationType = Vt, this.user = Ot, Object.setPrototypeOf(this, fV.prototype), this.customData = {
              appName: tt.name,
              tenantId: null !== (qt = tt.tenantId) && void 0 !== qt ? qt : void 0,
              _serverResponse: et.customData._serverResponse,
              operationType: Vt
            }
          }
          static _fromErrorAndOperation(tt, et, Vt, Ot) {
            return new fV(tt, et, Vt, Ot)
          }
        }

        function wV(tt, et, Vt, Ot) {
          return ("reauthenticate" === et ? Vt._getReauthenticationResolver(tt) : Vt._getIdTokenResponse(tt)).catch((Vt => {
            if ("auth/multi-factor-auth-required" === Vt.code) throw fV._fromErrorAndOperation(tt, Vt, et, Ot);
            throw Vt
          }))
        }

        function yV(tt) {
          return new Set(tt.map((tt => {
            let {
              providerId: et
            } = tt;
            return et
          })).filter((tt => !!tt)))
        }
        async function NV(tt, et) {
          const Vt = (0, Ot.L)(tt);
          await MV(!0, Vt, et);
          const {
            providerUserInfo: qt
          } = await async function(tt, et) {
            return zt(tt, "POST", "/v1/accounts:update", et)
          }(Vt.auth, {
            idToken: await Vt.getIdToken(),
            deleteProvider: [et]
          }), Dt = yV(qt || []);
          return Vt.providerData = Vt.providerData.filter((tt => Dt.has(tt.providerId))), Dt.has("phone") || (Vt.phoneNumber = null), await Vt.auth._persistUserIfCurrent(Vt), Vt
        }
        async function aV(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Ot = await gt(tt, et._linkToIdToken(tt.auth, await tt.getIdToken()), Vt);
          return QV._forOperation(tt, "link", Ot)
        }
        async function MV(tt, et, Vt) {
          await te(et);
          const Ot = !1 === tt ? "provider-already-linked" : "no-such-provider";
          vt(yV(et.providerData).has(Vt) === tt, et.auth, Ot)
        }
        async function bV(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Ot
          } = tt, qt = "reauthenticate";
          try {
            const Dt = await gt(tt, wV(Ot, qt, et, tt), Vt);
            vt(Dt.idToken, Ot, "internal-error");
            const mt = Tt(Dt.idToken);
            vt(mt, Ot, "internal-error");
            const {
              sub: dt
            } = mt;
            return vt(tt.uid === dt, Ot, "user-mismatch"), QV._forOperation(tt, qt, Dt)
          } catch (Dt) {
            throw "auth/user-not-found" === (null === Dt || void 0 === Dt ? void 0 : Dt.code) && Jt(Ot, "user-mismatch"), Dt
          }
        }
        async function JV(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Ot = "signIn",
            qt = await wV(tt, Ot, et),
            Dt = await QV._fromIdTokenResponse(tt, Ot, qt);
          return Vt || await tt._updateCurrentUser(Dt.user), Dt
        }
        async function CV(tt, et) {
          return JV(Pe(tt), et)
        }
        async function uV(tt, et) {
          const Vt = (0, Ot.L)(tt);
          return await MV(!1, Vt, et.providerId), aV(Vt, et)
        }
        async function KV(tt, et) {
          return bV((0, Ot.L)(tt), et)
        }
        async function hV(tt, et) {
          const Vt = Pe(tt),
            Ot = await async function(tt, et) {
              return rt(tt, "POST", "/v1/accounts:signInWithCustomToken", Gt(tt, et))
            }(Vt, {
              token: et,
              returnSecureToken: !0
            }), qt = await QV._fromIdTokenResponse(Vt, "signIn", Ot);
          return await Vt._updateCurrentUser(qt.user), qt
        }
        class vV {
          constructor(tt, et) {
            this.factorId = tt, this.uid = et.mfaEnrollmentId, this.enrollmentTime = new Date(et.enrolledAt).toUTCString(), this.displayName = et.displayName
          }
          static _fromServerResponse(tt, et) {
            return "phoneInfo" in et ? WV._fromServerResponse(tt, et) : "totpInfo" in et ? SV._fromServerResponse(tt, et) : Jt(tt, "internal-error")
          }
        }
        class WV extends vV {
          constructor(tt) {
            super("phone", tt), this.phoneNumber = tt.phoneInfo
          }
          static _fromServerResponse(tt, et) {
            return new WV(et)
          }
        }
        class SV extends vV {
          constructor(tt) {
            super("totp", tt)
          }
          static _fromServerResponse(tt, et) {
            return new SV(et)
          }
        }

        function cV(tt, et, Vt) {
          var Ot;
          vt((null === (Ot = Vt.url) || void 0 === Ot ? void 0 : Ot.length) > 0, tt, "invalid-continue-uri"), vt("undefined" === typeof Vt.dynamicLinkDomain || Vt.dynamicLinkDomain.length > 0, tt, "invalid-dynamic-link-domain"), et.continueUrl = Vt.url, et.dynamicLinkDomain = Vt.dynamicLinkDomain, et.canHandleCodeInApp = Vt.handleCodeInApp, Vt.iOS && (vt(Vt.iOS.bundleId.length > 0, tt, "missing-ios-bundle-id"), et.iOSBundleId = Vt.iOS.bundleId), Vt.android && (vt(Vt.android.packageName.length > 0, tt, "missing-android-pkg-name"), et.androidInstallApp = Vt.android.installApp, et.androidMinimumVersionCode = Vt.android.minimumVersion, et.androidPackageName = Vt.android.packageName)
        }
        async function RV(tt, et, Vt) {
          var Ot;
          const qt = Pe(tt),
            Dt = {
              requestType: "PASSWORD_RESET",
              email: et,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Ot = qt._getRecaptchaConfig()) || void 0 === Ot ? void 0 : Ot.emailPasswordEnabled) {
            const tt = await ce(qt, Dt, "getOobCode", !0);
            Vt && cV(qt, tt, Vt), await ie(qt, tt)
          } else Vt && cV(qt, Dt, Vt), await ie(qt, Dt).catch((async tt => {
            if ("auth/missing-recaptcha-token" !== tt.code) return Promise.reject(tt);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const tt = await ce(qt, Dt, "getOobCode", !0);
              Vt && cV(qt, tt, Vt), await ie(qt, tt)
            }
          }))
        }
        async function IV(tt, et, Vt) {
          await oe((0, Ot.L)(tt), {
            oobCode: et,
            newPassword: Vt
          })
        }
        async function PV(tt, et) {
          await async function(tt, et) {
            return zt(tt, "POST", "/v1/accounts:update", Gt(tt, et))
          }((0, Ot.L)(tt), {
            oobCode: et
          })
        }
        async function ZV(tt, et) {
          const Vt = (0, Ot.L)(tt),
            qt = await oe(Vt, {
              oobCode: et
            }),
            Dt = qt.requestType;
          switch (vt(Dt, Vt, "internal-error"), Dt) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              vt(qt.newEmail, Vt, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              vt(qt.mfaInfo, Vt, "internal-error");
            default:
              vt(qt.email, Vt, "internal-error")
          }
          let mt = null;
          return qt.mfaInfo && (mt = vV._fromServerResponse(Pe(Vt), qt.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === qt.requestType ? qt.newEmail : qt.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === qt.requestType ? qt.email : qt.newEmail) || null,
              multiFactorInfo: mt
            },
            operation: Dt
          }
        }
        async function LV(tt, et) {
          const {
            data: Vt
          } = await ZV((0, Ot.L)(tt), et);
          return Vt.email
        }
        async function FV(tt, et, Vt) {
          var Ot;
          const qt = Pe(tt),
            Dt = {
              returnSecureToken: !0,
              email: et,
              password: Vt,
              clientType: "CLIENT_TYPE_WEB"
            };
          let mt;
          if (null === (Ot = qt._getRecaptchaConfig()) || void 0 === Ot ? void 0 : Ot.emailPasswordEnabled) {
            const tt = await ce(qt, Dt, "signUpPassword");
            mt = XV(qt, tt)
          } else mt = XV(qt, Dt).catch((async tt => {
            if ("auth/missing-recaptcha-token" === tt.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const tt = await ce(qt, Dt, "signUpPassword");
              return XV(qt, tt)
            }
            return Promise.reject(tt)
          }));
          const dt = await mt.catch((tt => Promise.reject(tt))),
            jt = await QV._fromIdTokenResponse(qt, "signIn", dt);
          return await qt._updateCurrentUser(jt.user), jt
        }

        function kV(tt, et, Vt) {
          return CV((0, Ot.L)(tt), tV.credential(et, Vt))
        }
        async function GV(tt, et, Vt) {
          var Ot;
          const qt = Pe(tt),
            Dt = {
              requestType: "EMAIL_SIGNIN",
              email: et,
              clientType: "CLIENT_TYPE_WEB"
            };

          function mt(tt, et) {
            vt(et.handleCodeInApp, qt, "argument-error"), et && cV(qt, tt, et)
          }
          if (null === (Ot = qt._getRecaptchaConfig()) || void 0 === Ot ? void 0 : Ot.emailPasswordEnabled) {
            const tt = await ce(qt, Dt, "getOobCode", !0);
            mt(tt, Vt), await Ye(qt, tt)
          } else mt(Dt, Vt), await Ye(qt, Dt).catch((async tt => {
            if ("auth/missing-recaptcha-token" !== tt.code) return Promise.reject(tt);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const tt = await ce(qt, Dt, "getOobCode", !0);
              mt(tt, Vt), await Ye(qt, tt)
            }
          }))
        }

        function zV(tt, et) {
          const Vt = se.parseLink(et);
          return "EMAIL_SIGNIN" === (null === Vt || void 0 === Vt ? void 0 : Vt.operation)
        }
        async function oV(tt, et, Vt) {
          const qt = (0, Ot.L)(tt),
            Dt = tV.credentialWithLink(et, Vt || ct());
          return vt(Dt._tenantId === (qt.tenantId || null), qt, "tenant-id-mismatch"), CV(qt, Dt)
        }
        async function rV(tt, et) {
          const Vt = {
              identifier: et,
              continueUri: Rt() ? ct() : "http://localhost"
            },
            {
              signinMethods: qt
            } = await async function(tt, et) {
              return zt(tt, "POST", "/v1/accounts:createAuthUri", Gt(tt, et))
            }((0, Ot.L)(tt), Vt);
          return qt || []
        }
        async function UV(tt, et) {
          const Vt = (0, Ot.L)(tt),
            qt = {
              requestType: "VERIFY_EMAIL",
              idToken: await tt.getIdToken()
            };
          et && cV(Vt.auth, qt, et);
          const {
            email: Dt
          } = await async function(tt, et) {
            return Ae(tt, et)
          }(Vt.auth, qt);
          Dt !== tt.email && await tt.reload()
        }
        async function AV(tt, et, Vt) {
          const qt = (0, Ot.L)(tt),
            Dt = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await tt.getIdToken(),
              newEmail: et
            };
          Vt && cV(qt.auth, Dt, Vt);
          const {
            email: mt
          } = await async function(tt, et) {
            return Ae(tt, et)
          }(qt.auth, Dt);
          mt !== tt.email && await tt.reload()
        }
        async function iV(tt, et) {
          let {
            displayName: Vt,
            photoURL: qt
          } = et;
          if (void 0 === Vt && void 0 === qt) return;
          const Dt = (0, Ot.L)(tt),
            mt = {
              idToken: await Dt.getIdToken(),
              displayName: Vt,
              photoUrl: qt,
              returnSecureToken: !0
            },
            dt = await gt(Dt, async function(tt, et) {
              return zt(tt, "POST", "/v1/accounts:update", et)
            }(Dt.auth, mt));
          Dt.displayName = dt.displayName || null, Dt.photoURL = dt.photoUrl || null;
          const jt = Dt.providerData.find((tt => {
            let {
              providerId: et
            } = tt;
            return "password" === et
          }));
          jt && (jt.displayName = Dt.displayName, jt.photoURL = Dt.photoURL), await Dt._updateTokensIfNecessary(dt)
        }

        function YV(tt, et) {
          return pV((0, Ot.L)(tt), et, null)
        }

        function BV(tt, et) {
          return pV((0, Ot.L)(tt), null, et)
        }
        async function pV(tt, et, Vt) {
          const {
            auth: Ot
          } = tt, qt = {
            idToken: await tt.getIdToken(),
            returnSecureToken: !0
          };
          et && (qt.email = et), Vt && (qt.password = Vt);
          const Dt = await gt(tt, re(Ot, qt));
          await tt._updateTokensIfNecessary(Dt, !0)
        }
        class xV {
          constructor(tt, et) {
            let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = tt, this.providerId = et, this.profile = Vt
          }
        }
        class TV extends xV {
          constructor(tt, et, Vt, Ot) {
            super(tt, et, Vt), this.username = Ot
          }
        }
        class gV extends xV {
          constructor(tt, et) {
            super(tt, "facebook.com", et)
          }
        }
        class sV extends TV {
          constructor(tt, et) {
            super(tt, "github.com", et, "string" === typeof(null === et || void 0 === et ? void 0 : et.login) ? null === et || void 0 === et ? void 0 : et.login : null)
          }
        }
        class nV extends xV {
          constructor(tt, et) {
            super(tt, "google.com", et)
          }
        }
        class tO extends TV {
          constructor(tt, et, Vt) {
            super(tt, "twitter.com", et, Vt)
          }
        }

        function eO(tt) {
          const {
            user: et,
            _tokenResponse: Vt
          } = tt;
          return et.isAnonymous && !Vt ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(tt) {
            var et, Vt;
            if (!tt) return null;
            const {
              providerId: Ot
            } = tt, qt = tt.rawUserInfo ? JSON.parse(tt.rawUserInfo) : {}, Dt = tt.isNewUser || "identitytoolkit#SignupNewUserResponse" === tt.kind;
            if (!Ot && (null === tt || void 0 === tt ? void 0 : tt.idToken)) {
              const Ot = null === (Vt = null === (et = Tt(tt.idToken)) || void 0 === et ? void 0 : et.firebase) || void 0 === Vt ? void 0 : Vt.sign_in_provider;
              if (Ot) return new xV(Dt, "anonymous" !== Ot && "custom" !== Ot ? Ot : null)
            }
            if (!Ot) return null;
            switch (Ot) {
              case "facebook.com":
                return new gV(Dt, qt);
              case "github.com":
                return new sV(Dt, qt);
              case "google.com":
                return new nV(Dt, qt);
              case "twitter.com":
                return new tO(Dt, qt, tt.screenName || null);
              case "custom":
              case "anonymous":
                return new xV(Dt, null);
              default:
                return new xV(Dt, Ot, qt)
            }
          }(Vt)
        }

        function VO(tt, et) {
          return (0, Ot.L)(tt).setPersistence(et)
        }

        function OO(tt) {
          return Pe(tt).initializeRecaptchaConfig()
        }

        function qO(tt, et, Vt, qt) {
          return (0, Ot.L)(tt).onIdTokenChanged(et, Vt, qt)
        }

        function DO(tt, et, Vt) {
          return (0, Ot.L)(tt).beforeAuthStateChanged(et, Vt)
        }

        function mO(tt, et, Vt, qt) {
          return (0, Ot.L)(tt).onAuthStateChanged(et, Vt, qt)
        }

        function dO(tt) {
          (0, Ot.L)(tt).useDeviceLanguage()
        }

        function jO(tt, et) {
          return (0, Ot.L)(tt).updateCurrentUser(et)
        }

        function HO(tt) {
          return (0, Ot.L)(tt).signOut()
        }
        async function XO(tt) {
          return (0, Ot.L)(tt).delete()
        }
        class QO {
          constructor(tt, et, Vt) {
            this.type = tt, this.credential = et, this.auth = Vt
          }
          static _fromIdtoken(tt, et) {
            return new QO("enroll", tt, et)
          }
          static _fromMfaPendingCredential(tt) {
            return new QO("signin", tt)
          }
          toJSON() {
            const tt = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [tt]: this.credential
              }
            }
          }
          static fromJSON(tt) {
            var et, Vt;
            if (null === tt || void 0 === tt ? void 0 : tt.multiFactorSession) {
              if (null === (et = tt.multiFactorSession) || void 0 === et ? void 0 : et.pendingCredential) return QO._fromMfaPendingCredential(tt.multiFactorSession.pendingCredential);
              if (null === (Vt = tt.multiFactorSession) || void 0 === Vt ? void 0 : Vt.idToken) return QO._fromIdtoken(tt.multiFactorSession.idToken)
            }
            return null
          }
        }
        class lO {
          constructor(tt, et, Vt) {
            this.session = tt, this.hints = et, this.signInResolver = Vt
          }
          static _fromError(tt, et) {
            const Vt = Pe(tt),
              Ot = et.customData._serverResponse,
              qt = (Ot.mfaInfo || []).map((tt => vV._fromServerResponse(Vt, tt)));
            vt(Ot.mfaPendingCredential, Vt, "internal-error");
            const Dt = QO._fromMfaPendingCredential(Ot.mfaPendingCredential);
            return new lO(Dt, qt, (async tt => {
              const qt = await tt._process(Vt, Dt);
              delete Ot.mfaInfo, delete Ot.mfaPendingCredential;
              const mt = Object.assign(Object.assign({}, Ot), {
                idToken: qt.idToken,
                refreshToken: qt.refreshToken
              });
              switch (et.operationType) {
                case "signIn":
                  const tt = await QV._fromIdTokenResponse(Vt, et.operationType, mt);
                  return await Vt._updateCurrentUser(tt.user), tt;
                case "reauthenticate":
                  return vt(et.user, Vt, "internal-error"), QV._forOperation(et.user, et.operationType, mt);
                default:
                  Jt(Vt, "internal-error")
              }
            }))
          }
          async resolveSignIn(tt) {
            const et = tt;
            return this.signInResolver(et)
          }
        }

        function EO(tt, et) {
          var Vt;
          const qt = (0, Ot.L)(tt),
            Dt = et;
          return vt(et.customData.operationType, qt, "argument-error"), vt(null === (Vt = Dt.customData._serverResponse) || void 0 === Vt ? void 0 : Vt.mfaPendingCredential, qt, "argument-error"), lO._fromError(qt, Dt)
        }
        class fO {
          constructor(tt) {
            this.user = tt, this.enrolledFactors = [], tt._onReload((et => {
              et.mfaInfo && (this.enrolledFactors = et.mfaInfo.map((et => vV._fromServerResponse(tt.auth, et))))
            }))
          }
          static _fromUser(tt) {
            return new fO(tt)
          }
          async getSession() {
            return QO._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(tt, et) {
            const Vt = tt,
              Ot = await this.getSession(),
              qt = await gt(this.user, Vt._process(this.user.auth, Ot, et));
            return await this.user._updateTokensIfNecessary(qt), this.user.reload()
          }
          async unenroll(tt) {
            const et = "string" === typeof tt ? tt : tt.uid,
              Vt = await this.user.getIdToken();
            try {
              const tt = await gt(this.user, (Ot = this.user.auth, qt = {
                idToken: Vt,
                mfaEnrollmentId: et
              }, zt(Ot, "POST", "/v2/accounts/mfaEnrollment:withdraw", Gt(Ot, qt))));
              this.enrolledFactors = this.enrolledFactors.filter((tt => {
                let {
                  uid: Vt
                } = tt;
                return Vt !== et
              })), await this.user._updateTokensIfNecessary(tt), await this.user.reload()
            } catch (Dt) {
              throw Dt
            }
            var Ot, qt
          }
        }
        const wO = new WeakMap;

        function yO(tt) {
          const et = (0, Ot.L)(tt);
          return wO.has(et) || wO.set(et, fO._fromUser(et)), wO.get(et)
        }
        const NO = "__sak";
        class aO {
          constructor(tt, et) {
            this.storageRetriever = tt, this.type = et
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(NO, "1"), this.storage.removeItem(NO), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (tt) {
              return Promise.resolve(!1)
            }
          }
          _set(tt, et) {
            return this.storage.setItem(tt, JSON.stringify(et)), Promise.resolve()
          }
          _get(tt) {
            const et = this.storage.getItem(tt);
            return Promise.resolve(et ? JSON.parse(et) : null)
          }
          _remove(tt) {
            return this.storage.removeItem(tt), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class MO extends aO {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (tt, et) => this.onStorageEvent(tt, et), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const tt = (0, Ot.M)();
              return Ee(tt) || Me(tt)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (tt) {
                return !1
              }
            }(), this.fallbackToPolling = be(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(tt) {
            for (const et of Object.keys(this.listeners)) {
              const Vt = this.storage.getItem(et),
                Ot = this.localCache[et];
              Vt !== Ot && tt(et, Ot, Vt)
            }
          }
          onStorageEvent(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!tt.key) return void this.forAllChangedKeys(((tt, et, Vt) => {
              this.notifyListeners(tt, Vt)
            }));
            const Vt = tt.key;
            if (et ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Ot = this.storage.getItem(Vt);
              if (tt.newValue !== Ot) null !== tt.newValue ? this.storage.setItem(Vt, tt.newValue) : this.storage.removeItem(Vt);
              else if (this.localCache[Vt] === tt.newValue && !et) return
            }
            const qt = () => {
                const tt = this.storage.getItem(Vt);
                (et || this.localCache[Vt] !== tt) && this.notifyListeners(Vt, tt)
              },
              Dt = this.storage.getItem(Vt);
            (0, Ot.W)() && 10 === document.documentMode && Dt !== tt.newValue && tt.newValue !== tt.oldValue ? setTimeout(qt, 10) : qt()
          }
          notifyListeners(tt, et) {
            this.localCache[tt] = et;
            const Vt = this.listeners[tt];
            if (Vt)
              for (const Ot of Array.from(Vt)) Ot(et ? JSON.parse(et) : et)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((tt, et, Vt) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: tt,
                  oldValue: et,
                  newValue: Vt
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
          _addListener(tt, et) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[tt] || (this.listeners[tt] = new Set, this.localCache[tt] = this.storage.getItem(tt)), this.listeners[tt].add(et)
          }
          _removeListener(tt, et) {
            this.listeners[tt] && (this.listeners[tt].delete(et), 0 === this.listeners[tt].size && delete this.listeners[tt]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(tt, et) {
            await super._set(tt, et), this.localCache[tt] = JSON.stringify(et)
          }
          async _get(tt) {
            const et = await super._get(tt);
            return this.localCache[tt] = JSON.stringify(et), et
          }
          async _remove(tt) {
            await super._remove(tt), delete this.localCache[tt]
          }
        }
        MO.type = "LOCAL";
        const bO = MO;
        class JO extends aO {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(tt, et) {}
          _removeListener(tt, et) {}
        }
        JO.type = "SESSION";
        const CO = JO;
        class uO {
          constructor(tt) {
            this.eventTarget = tt, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(tt) {
            const et = this.receivers.find((et => et.isListeningto(tt)));
            if (et) return et;
            const Vt = new uO(tt);
            return this.receivers.push(Vt), Vt
          }
          isListeningto(tt) {
            return this.eventTarget === tt
          }
          async handleEvent(tt) {
            const et = tt,
              {
                eventId: Vt,
                eventType: Ot,
                data: qt
              } = et.data,
              Dt = this.handlersMap[Ot];
            if (!(null === Dt || void 0 === Dt ? void 0 : Dt.size)) return;
            et.ports[0].postMessage({
              status: "ack",
              eventId: Vt,
              eventType: Ot
            });
            const mt = Array.from(Dt).map((async tt => tt(et.origin, qt))),
              dt = await
            function(tt) {
              return Promise.all(tt.map((async tt => {
                try {
                  return {
                    fulfilled: !0,
                    value: await tt
                  }
                } catch (et) {
                  return {
                    fulfilled: !1,
                    reason: et
                  }
                }
              })))
            }(mt);
            et.ports[0].postMessage({
              status: "done",
              eventId: Vt,
              eventType: Ot,
              response: dt
            })
          }
          _subscribe(tt, et) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[tt] || (this.handlersMap[tt] = new Set), this.handlersMap[tt].add(et)
          }
          _unsubscribe(tt, et) {
            this.handlersMap[tt] && et && this.handlersMap[tt].delete(et), et && 0 !== this.handlersMap[tt].size || delete this.handlersMap[tt], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function KO() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            Vt = "";
          for (let Ot = 0; Ot < et; Ot++) Vt += Math.floor(10 * Math.random());
          return tt + Vt
        }
        uO.receivers = [];
        class hO {
          constructor(tt) {
            this.target = tt, this.handlers = new Set
          }
          removeMessageHandler(tt) {
            tt.messageChannel && (tt.messageChannel.port1.removeEventListener("message", tt.gM), tt.messageChannel.port1.close()), this.handlers.delete(tt)
          }
          async _send(tt, et) {
            let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Ot = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Ot) throw new Error("connection_unavailable");
            let qt, Dt;
            return new Promise(((mt, dt) => {
              const jt = KO("", 20);
              Ot.port1.start();
              const Ht = setTimeout((() => {
                dt(new Error("unsupported_event"))
              }), Vt);
              Dt = {
                messageChannel: Ot,
                gM(tt) {
                  const et = tt;
                  if (et.data.eventId === jt) switch (et.data.status) {
                    case "ack":
                      clearTimeout(Ht), qt = setTimeout((() => {
                        dt(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(qt), mt(et.data.response);
                      break;
                    default:
                      clearTimeout(Ht), clearTimeout(qt), dt(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Dt), Ot.port1.addEventListener("message", Dt.gM), this.target.postMessage({
                eventType: tt,
                eventId: jt,
                data: et
              }, [Ot.port2])
            })).finally((() => {
              Dt && this.removeMessageHandler(Dt)
            }))
          }
        }

        function vO() {
          return window
        }

        function WO() {
          return "undefined" !== typeof vO().WorkerGlobalScope && "function" === typeof vO().importScripts
        }
        const SO = "firebaseLocalStorageDb",
          cO = "firebaseLocalStorage",
          RO = "fbase_key";
        class IO {
          constructor(tt) {
            this.request = tt
          }
          toPromise() {
            return new Promise(((tt, et) => {
              this.request.addEventListener("success", (() => {
                tt(this.request.result)
              })), this.request.addEventListener("error", (() => {
                et(this.request.error)
              }))
            }))
          }
        }

        function PO(tt, et) {
          return tt.transaction([cO], et ? "readwrite" : "readonly").objectStore(cO)
        }

        function ZO() {
          const tt = indexedDB.open(SO, 1);
          return new Promise(((et, Vt) => {
            tt.addEventListener("error", (() => {
              Vt(tt.error)
            })), tt.addEventListener("upgradeneeded", (() => {
              const et = tt.result;
              try {
                et.createObjectStore(cO, {
                  keyPath: RO
                })
              } catch (Ot) {
                Vt(Ot)
              }
            })), tt.addEventListener("success", (async () => {
              const Vt = tt.result;
              Vt.objectStoreNames.contains(cO) ? et(Vt) : (Vt.close(), await
                function() {
                  const tt = indexedDB.deleteDatabase(SO);
                  return new IO(tt).toPromise()
                }(), et(await ZO()))
            }))
          }))
        }
        async function LO(tt, et, Vt) {
          const Ot = PO(tt, !0).put({
            [RO]: et,
            value: Vt
          });
          return new IO(Ot).toPromise()
        }

        function FO(tt, et) {
          const Vt = PO(tt, !0).delete(et);
          return new IO(Vt).toPromise()
        }
        class kO {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await ZO()), this.db
          }
          async _withRetries(tt) {
            let et = 0;
            for (;;) try {
              const et = await this._openDb();
              return await tt(et)
            } catch (Vt) {
              if (et++ > 3) throw Vt;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return WO() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = uO._getInstance(WO() ? self : null), this.receiver._subscribe("keyChanged", (async (tt, et) => ({
              keyProcessed: (await this._poll()).includes(et.key)
            }))), this.receiver._subscribe("ping", (async (tt, et) => ["keyChanged"]))
          }
          async initializeSender() {
            var tt, et;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (tt) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new hO(this.activeServiceWorker);
            const Vt = await this.sender._send("ping", {}, 800);
            Vt && (null === (tt = Vt[0]) || void 0 === tt ? void 0 : tt.fulfilled) && (null === (et = Vt[0]) || void 0 === et ? void 0 : et.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(tt) {
            if (this.sender && this.activeServiceWorker && function() {
                var tt;
                return (null === (tt = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === tt ? void 0 : tt.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: tt
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (et) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const tt = await ZO();
              return await LO(tt, NO, "1"), await FO(tt, NO), !0
            } catch (tt) {}
            return !1
          }
          async _withPendingWrite(tt) {
            this.pendingWrites++;
            try {
              await tt()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(tt, et) {
            return this._withPendingWrite((async () => (await this._withRetries((Vt => LO(Vt, tt, et))), this.localCache[tt] = et, this.notifyServiceWorker(tt))))
          }
          async _get(tt) {
            const et = await this._withRetries((et => async function(tt, et) {
              const Vt = PO(tt, !1).get(et),
                Ot = await new IO(Vt).toPromise();
              return void 0 === Ot ? null : Ot.value
            }(et, tt)));
            return this.localCache[tt] = et, et
          }
          async _remove(tt) {
            return this._withPendingWrite((async () => (await this._withRetries((et => FO(et, tt))), delete this.localCache[tt], this.notifyServiceWorker(tt))))
          }
          async _poll() {
            const tt = await this._withRetries((tt => {
              const et = PO(tt, !1).getAll();
              return new IO(et).toPromise()
            }));
            if (!tt) return [];
            if (0 !== this.pendingWrites) return [];
            const et = [],
              Vt = new Set;
            for (const {
                fbase_key: Ot,
                value: qt
              }
              of tt) Vt.add(Ot), JSON.stringify(this.localCache[Ot]) !== JSON.stringify(qt) && (this.notifyListeners(Ot, qt), et.push(Ot));
            for (const Ot of Object.keys(this.localCache)) this.localCache[Ot] && !Vt.has(Ot) && (this.notifyListeners(Ot, null), et.push(Ot));
            return et
          }
          notifyListeners(tt, et) {
            this.localCache[tt] = et;
            const Vt = this.listeners[tt];
            if (Vt)
              for (const Ot of Array.from(Vt)) Ot(et)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(tt, et) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[tt] || (this.listeners[tt] = new Set, this._get(tt)), this.listeners[tt].add(et)
          }
          _removeListener(tt, et) {
            this.listeners[tt] && (this.listeners[tt].delete(et), 0 === this.listeners[tt].size && delete this.listeners[tt]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        kO.type = "LOCAL";
        const GO = kO;
        const zO = 1e12;
        class oO {
          constructor(tt) {
            this.auth = tt, this.counter = zO, this._widgets = new Map
          }
          render(tt, et) {
            const Vt = this.counter;
            return this._widgets.set(Vt, new rO(tt, this.auth.name, et || {})), this.counter++, Vt
          }
          reset(tt) {
            var et;
            const Vt = tt || zO;
            null === (et = this._widgets.get(Vt)) || void 0 === et || et.delete(), this._widgets.delete(Vt)
          }
          getResponse(tt) {
            var et;
            const Vt = tt || zO;
            return (null === (et = this._widgets.get(Vt)) || void 0 === et ? void 0 : et.getResponse()) || ""
          }
          async execute(tt) {
            var et;
            const Vt = tt || zO;
            return null === (et = this._widgets.get(Vt)) || void 0 === et || et.execute(), ""
          }
        }
        class rO {
          constructor(tt, et, Vt) {
            this.params = Vt, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Ot = "string" === typeof tt ? document.getElementById(tt) : tt;
            vt(Ot, "argument-error", {
              appName: et
            }), this.container = Ot, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(tt) {
                const et = [],
                  Vt = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Ot = 0; Ot < tt; Ot++) et.push(Vt.charAt(Math.floor(Math.random() * Vt.length)));
                return et.join("")
              }(50);
              const {
                callback: tt,
                "expired-callback": et
              } = this.params;
              if (tt) try {
                tt(this.responseToken)
              } catch (Vt) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, et) try {
                  et()
                } catch (Vt) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const UO = We("rcb"),
          AO = new Pt(3e4, 6e4);
        class iO {
          constructor() {
            var tt;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (tt = vO().grecaptcha) || void 0 === tt ? void 0 : tt.render)
          }
          load(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return vt(function(tt) {
              return tt.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(tt)
            }(et), tt, "argument-error"), this.shouldResolveImmediately(et) && ue(vO().grecaptcha) ? Promise.resolve(vO().grecaptcha) : new Promise(((Vt, qt) => {
              const Dt = vO().setTimeout((() => {
                qt(Ct(tt, "network-request-failed"))
              }), AO.get());
              vO()[UO] = () => {
                vO().clearTimeout(Dt), delete vO()[UO];
                const Ot = vO().grecaptcha;
                if (!Ot || !ue(Ot)) return void qt(Ct(tt, "internal-error"));
                const mt = Ot.render;
                Ot.render = (tt, et) => {
                  const Vt = mt(tt, et);
                  return this.counter++, Vt
                }, this.hostLanguage = et, Vt(Ot)
              };
              ve(`https://www.google.com/recaptcha/api.js??${(0,Ot.kb)({onload:UO,render:"explicit",hl:et})}`).catch((() => {
                clearTimeout(Dt), qt(Ct(tt, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(tt) {
            var et;
            return !!(null === (et = vO().grecaptcha) || void 0 === et ? void 0 : et.render) && (tt === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class YO {
          async load(tt) {
            return new oO(tt)
          }
          clearedOneInstance() {}
        }
        const BO = "recaptcha",
          pO = {
            theme: "light",
            type: "image"
          };
        class xO {
          constructor(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, pO),
              Vt = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = et, this.type = BO, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Pe(Vt), this.isInvisible = "invisible" === this.parameters.size, vt("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Ot = "string" === typeof tt ? document.getElementById(tt) : tt;
            vt(Ot, this.auth, "argument-error"), this.container = Ot, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new YO : new iO, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const tt = await this.render(),
              et = this.getAssertedRecaptcha(),
              Vt = et.getResponse(tt);
            return Vt || new Promise((Vt => {
              const Ot = tt => {
                tt && (this.tokenChangeListeners.delete(Ot), Vt(tt))
              };
              this.tokenChangeListeners.add(Ot), this.isInvisible && et.execute(tt)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (tt) {
              return Promise.reject(tt)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((tt => {
              throw this.renderPromise = null, tt
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((tt => {
              this.container.removeChild(tt)
            }))
          }
          validateStartingState() {
            vt(!this.parameters.sitekey, this.auth, "argument-error"), vt(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), vt("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(tt) {
            return et => {
              if (this.tokenChangeListeners.forEach((tt => tt(et))), "function" === typeof tt) tt(et);
              else if ("string" === typeof tt) {
                const Vt = vO()[tt];
                "function" === typeof Vt && Vt(et)
              }
            }
          }
          assertNotDestroyed() {
            vt(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let tt = this.container;
              if (!this.isInvisible) {
                const et = document.createElement("div");
                tt.appendChild(et), tt = et
              }
              this.widgetId = this.getAssertedRecaptcha().render(tt, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            vt(Rt() && !WO(), this.auth, "internal-error"), await
            function() {
              let tt = null;
              return new Promise((et => {
                "complete" !== document.readyState ? (tt = () => et(), window.addEventListener("load", tt)) : et()
              })).catch((et => {
                throw tt && window.removeEventListener("load", tt), et
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const tt = await async function(tt) {
              return (await zt(tt, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            vt(tt, this.auth, "internal-error"), this.parameters.sitekey = tt
          }
          getAssertedRecaptcha() {
            return vt(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class TO {
          constructor(tt, et) {
            this.verificationId = tt, this.onConfirmation = et
          }
          confirm(tt) {
            const et = ge._fromVerification(this.verificationId, tt);
            return this.onConfirmation(et)
          }
        }
        async function gO(tt, et, Vt) {
          const qt = Pe(tt),
            Dt = await tq(qt, et, (0, Ot.L)(Vt));
          return new TO(Dt, (tt => CV(qt, tt)))
        }
        async function sO(tt, et, Vt) {
          const qt = (0, Ot.L)(tt);
          await MV(!1, qt, "phone");
          const Dt = await tq(qt.auth, et, (0, Ot.L)(Vt));
          return new TO(Dt, (tt => uV(qt, tt)))
        }
        async function nO(tt, et, Vt) {
          const qt = (0, Ot.L)(tt),
            Dt = await tq(qt.auth, et, (0, Ot.L)(Vt));
          return new TO(Dt, (tt => KV(qt, tt)))
        }
        async function tq(tt, et, Vt) {
          var Ot;
          const qt = await Vt.verify();
          try {
            let Dt;
            if (vt("string" === typeof qt, tt, "argument-error"), vt(Vt.type === BO, tt, "argument-error"), Dt = "string" === typeof et ? {
                phoneNumber: et
              } : et, "session" in Dt) {
              const et = Dt.session;
              if ("phoneNumber" in Dt) {
                vt("enroll" === et.type, tt, "internal-error");
                const Vt = await
                function(tt, et) {
                  return zt(tt, "POST", "/v2/accounts/mfaEnrollment:start", Gt(tt, et))
                }(tt, {
                  idToken: et.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Dt.phoneNumber,
                    recaptchaToken: qt
                  }
                });
                return Vt.phoneSessionInfo.sessionInfo
              } {
                vt("signin" === et.type, tt, "internal-error");
                const Vt = (null === (Ot = Dt.multiFactorHint) || void 0 === Ot ? void 0 : Ot.uid) || Dt.multiFactorUid;
                vt(Vt, tt, "missing-multi-factor-info");
                const mt = await
                function(tt, et) {
                  return zt(tt, "POST", "/v2/accounts/mfaSignIn:start", Gt(tt, et))
                }(tt, {
                  mfaPendingCredential: et.credential,
                  mfaEnrollmentId: Vt,
                  phoneSignInInfo: {
                    recaptchaToken: qt
                  }
                });
                return mt.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: et
              } = await async function(tt, et) {
                return zt(tt, "POST", "/v1/accounts:sendVerificationCode", Gt(tt, et))
              }(tt, {
                phoneNumber: Dt.phoneNumber,
                recaptchaToken: qt
              });
              return et
            }
          } finally {
            Vt._reset()
          }
        }
        async function eq(tt, et) {
          await aV((0, Ot.L)(tt), et)
        }
        class Vq {
          constructor(tt) {
            this.providerId = Vq.PROVIDER_ID, this.auth = Pe(tt)
          }
          verifyPhoneNumber(tt, et) {
            return tq(this.auth, tt, (0, Ot.L)(et))
          }
          static credential(tt, et) {
            return ge._fromVerification(tt, et)
          }
          static credentialFromResult(tt) {
            const et = tt;
            return Vq.credentialFromTaggedObject(et)
          }
          static credentialFromError(tt) {
            return Vq.credentialFromTaggedObject(tt.customData || {})
          }
          static credentialFromTaggedObject(tt) {
            let {
              _tokenResponse: et
            } = tt;
            if (!et) return null;
            const {
              phoneNumber: Vt,
              temporaryProof: Ot
            } = et;
            return Vt && Ot ? ge._fromTokenResponse(Vt, Ot) : null
          }
        }

        function Oq(tt, et) {
          return et ? me(et) : (vt(tt._popupRedirectResolver, tt, "argument-error"), tt._popupRedirectResolver)
        }
        Vq.PROVIDER_ID = "phone", Vq.PHONE_SIGN_IN_METHOD = "phone";
        class qq extends ze {
          constructor(tt) {
            super("custom", "custom"), this.params = tt
          }
          _getIdTokenResponse(tt) {
            return pe(tt, this._buildIdpRequest())
          }
          _linkToIdToken(tt, et) {
            return pe(tt, this._buildIdpRequest(et))
          }
          _getReauthenticationResolver(tt) {
            return pe(tt, this._buildIdpRequest())
          }
          _buildIdpRequest(tt) {
            const et = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return tt && (et.idToken = tt), et
          }
        }

        function Dq(tt) {
          return JV(tt.auth, new qq(tt), tt.bypassAuthState)
        }

        function mq(tt) {
          const {
            auth: et,
            user: Vt
          } = tt;
          return vt(Vt, et, "internal-error"), bV(Vt, new qq(tt), tt.bypassAuthState)
        }
        async function dq(tt) {
          const {
            auth: et,
            user: Vt
          } = tt;
          return vt(Vt, et, "internal-error"), aV(Vt, new qq(tt), tt.bypassAuthState)
        }
        class jq {
          constructor(tt, et, Vt, Ot) {
            let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = tt, this.resolver = Vt, this.user = Ot, this.bypassAuthState = qt, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(et) ? et : [et]
          }
          execute() {
            return new Promise((async (tt, et) => {
              this.pendingPromise = {
                resolve: tt,
                reject: et
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (Vt) {
                this.reject(Vt)
              }
            }))
          }
          async onAuthEvent(tt) {
            const {
              urlResponse: et,
              sessionId: Vt,
              postBody: Ot,
              tenantId: qt,
              error: Dt,
              type: mt
            } = tt;
            if (Dt) return void this.reject(Dt);
            const dt = {
              auth: this.auth,
              requestUri: et,
              sessionId: Vt,
              tenantId: qt || void 0,
              postBody: Ot || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(mt)(dt))
            } catch (jt) {
              this.reject(jt)
            }
          }
          onError(tt) {
            this.reject(tt)
          }
          getIdpTask(tt) {
            switch (tt) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return Dq;
              case "linkViaPopup":
              case "linkViaRedirect":
                return dq;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return mq;
              default:
                Jt(this.auth, "internal-error")
            }
          }
          resolve(tt) {
            St(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(tt), this.unregisterAndCleanUp()
          }
          reject(tt) {
            St(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(tt), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const Hq = new Pt(2e3, 1e4);
        async function Xq(tt, et, Vt) {
          const Ot = Pe(tt);
          Kt(tt, et, eV);
          const qt = Oq(Ot, Vt);
          return new Eq(Ot, "signInViaPopup", et, qt).executeNotNull()
        }
        async function Qq(tt, et, Vt) {
          const qt = (0, Ot.L)(tt);
          Kt(qt.auth, et, eV);
          const Dt = Oq(qt.auth, Vt);
          return new Eq(qt.auth, "reauthViaPopup", et, Dt, qt).executeNotNull()
        }
        async function lq(tt, et, Vt) {
          const qt = (0, Ot.L)(tt);
          Kt(qt.auth, et, eV);
          const Dt = Oq(qt.auth, Vt);
          return new Eq(qt.auth, "linkViaPopup", et, Dt, qt).executeNotNull()
        }
        class Eq extends jq {
          constructor(tt, et, Vt, Ot, qt) {
            super(tt, et, Ot, qt), this.provider = Vt, this.authWindow = null, this.pollId = null, Eq.currentPopupAction && Eq.currentPopupAction.cancel(), Eq.currentPopupAction = this
          }
          async executeNotNull() {
            const tt = await this.execute();
            return vt(tt, this.auth, "internal-error"), tt
          }
          async onExecution() {
            St(1 === this.filter.length, "Popup operations only handle one event");
            const tt = KO();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], tt), this.authWindow.associatedEvent = tt, this.resolver._originValidation(this.auth).catch((tt => {
              this.reject(tt)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (tt => {
              tt || this.reject(Ct(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var tt;
            return (null === (tt = this.authWindow) || void 0 === tt ? void 0 : tt.associatedEvent) || null
          }
          cancel() {
            this.reject(Ct(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Eq.currentPopupAction = null
          }
          pollUserCancellation() {
            const tt = () => {
              var et, Vt;
              (null === (Vt = null === (et = this.authWindow) || void 0 === et ? void 0 : et.window) || void 0 === Vt ? void 0 : Vt.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Ct(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(tt, Hq.get())
            };
            tt()
          }
        }
        Eq.currentPopupAction = null;
        const fq = "pendingRedirect",
          wq = new Map;
        class yq extends jq {
          constructor(tt, et) {
            super(tt, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], et, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let tt = wq.get(this.auth._key());
            if (!tt) {
              try {
                const et = await async function(tt, et) {
                  const Vt = bq(et),
                    Ot = Mq(tt);
                  if (!await Ot._isAvailable()) return !1;
                  const qt = "true" === await Ot._get(Vt);
                  return await Ot._remove(Vt), qt
                }(this.resolver, this.auth) ? await super.execute() : null;
                tt = () => Promise.resolve(et)
              } catch (et) {
                tt = () => Promise.reject(et)
              }
              wq.set(this.auth._key(), tt)
            }
            return this.bypassAuthState || wq.set(this.auth._key(), (() => Promise.resolve(null))), tt()
          }
          async onAuthEvent(tt) {
            if ("signInViaRedirect" === tt.type) return super.onAuthEvent(tt);
            if ("unknown" !== tt.type) {
              if (tt.eventId) {
                const et = await this.auth._redirectUserForId(tt.eventId);
                if (et) return this.user = et, super.onAuthEvent(tt);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Nq(tt, et) {
          return Mq(tt)._set(bq(et), "true")
        }

        function aq(tt, et) {
          wq.set(tt._key(), et)
        }

        function Mq(tt) {
          return me(tt._redirectPersistence)
        }

        function bq(tt) {
          return He(fq, tt.config.apiKey, tt.name)
        }

        function Jq(tt, et, Vt) {
          return async function(tt, et, Vt) {
            const Ot = Pe(tt);
            Kt(tt, et, eV), await Ot._initializationPromise;
            const qt = Oq(Ot, Vt);
            return await Nq(qt, Ot), qt._openRedirect(Ot, et, "signInViaRedirect")
          }(tt, et, Vt)
        }

        function Cq(tt, et, Vt) {
          return async function(tt, et, Vt) {
            const qt = (0, Ot.L)(tt);
            Kt(qt.auth, et, eV), await qt.auth._initializationPromise;
            const Dt = Oq(qt.auth, Vt);
            await Nq(Dt, qt.auth);
            const mt = await vq(qt);
            return Dt._openRedirect(qt.auth, et, "reauthViaRedirect", mt)
          }(tt, et, Vt)
        }

        function uq(tt, et, Vt) {
          return async function(tt, et, Vt) {
            const qt = (0, Ot.L)(tt);
            Kt(qt.auth, et, eV), await qt.auth._initializationPromise;
            const Dt = Oq(qt.auth, Vt);
            await MV(!1, qt, et.providerId), await Nq(Dt, qt.auth);
            const mt = await vq(qt);
            return Dt._openRedirect(qt.auth, et, "linkViaRedirect", mt)
          }(tt, et, Vt)
        }
        async function Kq(tt, et) {
          return await Pe(tt)._initializationPromise, hq(tt, et, !1)
        }
        async function hq(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Ot = Pe(tt),
            qt = Oq(Ot, et),
            Dt = new yq(Ot, qt, Vt),
            mt = await Dt.execute();
          return mt && !Vt && (delete mt.user._redirectEventId, await Ot._persistUserIfCurrent(mt.user), await Ot._setRedirectUser(null, et)), mt
        }
        async function vq(tt) {
          const et = KO(`${tt.uid}:::`);
          return tt._redirectEventId = et, await tt.auth._setRedirectUser(tt), await tt.auth._persistUserIfCurrent(tt), et
        }
        class Wq {
          constructor(tt) {
            this.auth = tt, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(tt) {
            this.consumers.add(tt), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, tt) && (this.sendToConsumer(this.queuedRedirectEvent, tt), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(tt) {
            this.consumers.delete(tt)
          }
          onEvent(tt) {
            if (this.hasEventBeenHandled(tt)) return !1;
            let et = !1;
            return this.consumers.forEach((Vt => {
              this.isEventForConsumer(tt, Vt) && (et = !0, this.sendToConsumer(tt, Vt), this.saveEventToCache(tt))
            })), this.hasHandledPotentialRedirect || ! function(tt) {
              switch (tt.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return cq(tt);
                default:
                  return !1
              }
            }(tt) || (this.hasHandledPotentialRedirect = !0, et || (this.queuedRedirectEvent = tt, et = !0)), et
          }
          sendToConsumer(tt, et) {
            var Vt;
            if (tt.error && !cq(tt)) {
              const Ot = (null === (Vt = tt.error.code) || void 0 === Vt ? void 0 : Vt.split("auth/")[1]) || "internal-error";
              et.onError(Ct(this.auth, Ot))
            } else et.onAuthEvent(tt)
          }
          isEventForConsumer(tt, et) {
            const Vt = null === et.eventId || !!tt.eventId && tt.eventId === et.eventId;
            return et.filter.includes(tt.type) && Vt
          }
          hasEventBeenHandled(tt) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Sq(tt))
          }
          saveEventToCache(tt) {
            this.cachedEventUids.add(Sq(tt)), this.lastProcessedEventTime = Date.now()
          }
        }

        function Sq(tt) {
          return [tt.type, tt.eventId, tt.sessionId, tt.tenantId].filter((tt => tt)).join("-")
        }

        function cq(tt) {
          let {
            type: et,
            error: Vt
          } = tt;
          return "unknown" === et && "auth/no-auth-event" === (null === Vt || void 0 === Vt ? void 0 : Vt.code)
        }
        const Rq = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Iq = /^https?/;
        async function Pq(tt) {
          if (tt.config.emulator) return;
          const {
            authorizedDomains: et
          } = await async function(tt) {
            return zt(tt, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(tt);
          for (const Ot of et) try {
            if (Zq(Ot)) return
          } catch (Vt) {}
          Jt(tt, "unauthorized-domain")
        }

        function Zq(tt) {
          const et = ct(),
            {
              protocol: Vt,
              hostname: Ot
            } = new URL(et);
          if (tt.startsWith("chrome-extension://")) {
            const qt = new URL(tt);
            return "" === qt.hostname && "" === Ot ? "chrome-extension:" === Vt && tt.replace("chrome-extension://", "") === et.replace("chrome-extension://", "") : "chrome-extension:" === Vt && qt.hostname === Ot
          }
          if (!Iq.test(Vt)) return !1;
          if (Rq.test(tt)) return Ot === tt;
          const qt = tt.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + qt + "|" + qt + ")$", "i").test(Ot)
        }
        const Lq = new Pt(3e4, 6e4);

        function Fq() {
          const tt = vO().___jsl;
          if (null === tt || void 0 === tt ? void 0 : tt.H)
            for (const et of Object.keys(tt.H))
              if (tt.H[et].r = tt.H[et].r || [], tt.H[et].L = tt.H[et].L || [], tt.H[et].r = [...tt.H[et].L], tt.CP)
                for (let Vt = 0; Vt < tt.CP.length; Vt++) tt.CP[Vt] = null
        }
        let kq = null;

        function Gq(tt) {
          return kq = kq || function(tt) {
            return new Promise(((et, Vt) => {
              var Ot, qt, Dt;

              function mt() {
                Fq(), gapi.load("gapi.iframes", {
                  callback: () => {
                    et(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    Fq(), Vt(Ct(tt, "network-request-failed"))
                  },
                  timeout: Lq.get()
                })
              }
              if (null === (qt = null === (Ot = vO().gapi) || void 0 === Ot ? void 0 : Ot.iframes) || void 0 === qt ? void 0 : qt.Iframe) et(gapi.iframes.getContext());
              else {
                if (!(null === (Dt = vO().gapi) || void 0 === Dt ? void 0 : Dt.load)) {
                  const et = We("iframefcb");
                  return vO()[et] = () => {
                    gapi.load ? mt() : Vt(Ct(tt, "network-request-failed"))
                  }, ve(`https://apis.google.com/js/api.js?onload=${et}`).catch((tt => Vt(tt)))
                }
                mt()
              }
            })).catch((tt => {
              throw kq = null, tt
            }))
          }(tt), kq
        }
        const zq = new Pt(5e3, 15e3),
          oq = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          rq = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Uq(tt) {
          const et = tt.config;
          vt(et.authDomain, tt, "auth-domain-config-required");
          const Vt = et.emulator ? Zt(et, "emulator/auth/iframe") : `https://${tt.config.authDomain}/__/auth/iframe`,
            Dt = {
              apiKey: et.apiKey,
              appName: tt.name,
              v: qt.g
            },
            mt = rq.get(tt.config.apiHost);
          mt && (Dt.eid = mt);
          const dt = tt._getFrameworks();
          return dt.length && (Dt.fw = dt.join(",")), `${Vt}?${(0,Ot.kb)(Dt).slice(1)}`
        }
        const Aq = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class iq {
          constructor(tt) {
            this.window = tt, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (tt) {}
          }
        }

        function Yq(tt, et, Vt) {
          let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const mt = Math.max((window.screen.availHeight - Dt) / 2, 0).toString(),
            dt = Math.max((window.screen.availWidth - qt) / 2, 0).toString();
          let jt = "";
          const Ht = Object.assign(Object.assign({}, Aq), {
              width: qt.toString(),
              height: Dt.toString(),
              top: mt,
              left: dt
            }),
            Xt = (0, Ot.M)().toLowerCase();
          Vt && (jt = fe(Xt) ? "_blank" : Vt), le(Xt) && (et = et || "http://localhost", Ht.scrollbars = "yes");
          const Qt = Object.entries(Ht).reduce(((tt, et) => {
            let [Vt, Ot] = et;
            return `${tt}${Vt}=${Ot},`
          }), "");
          if (function() {
              var tt;
              return Me(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.M)()) && !!(null === (tt = window.navigator) || void 0 === tt ? void 0 : tt.standalone)
            }(Xt) && "_self" !== jt) return function(tt, et) {
            const Vt = document.createElement("a");
            Vt.href = tt, Vt.target = et;
            const Ot = document.createEvent("MouseEvent");
            Ot.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), Vt.dispatchEvent(Ot)
          }(et || "", jt), new iq(null);
          const lt = window.open(et || "", jt, Qt);
          vt(lt, tt, "popup-blocked");
          try {
            lt.focus()
          } catch (Et) {}
          return new iq(lt)
        }
        const Bq = "__/auth/handler",
          pq = "emulator/auth/handler",
          xq = encodeURIComponent("fac");
        async function Tq(tt, et, Vt, Dt, mt, dt) {
            vt(tt.config.authDomain, tt, "auth-domain-config-required"), vt(tt.config.apiKey, tt, "invalid-api-key");
            const jt = {
              apiKey: tt.config.apiKey,
              appName: tt.name,
              authType: Vt,
              redirectUrl: Dt,
              v: qt.g,
              eventId: mt
            };
            if (et instanceof eV) {
              et.setDefaultLanguage(tt.languageCode), jt.providerId = et.providerId || "", (0, Ot.S)(et.getCustomParameters()) || (jt.customParameters = JSON.stringify(et.getCustomParameters()));
              for (const [tt, et] of Object.entries(dt || {})) jt[tt] = et
            }
            if (et instanceof VV) {
              const tt = et.getScopes().filter((tt => "" !== tt));
              tt.length > 0 && (jt.scopes = tt.join(","))
            }
            tt.tenantId && (jt.tid = tt.tenantId);
            const Ht = jt;
            for (const Ot of Object.keys(Ht)) void 0 === Ht[Ot] && delete Ht[Ot];
            const Xt = await tt._getAppCheckToken(),
              Qt = Xt ? `#${xq}=${encodeURIComponent(Xt)}` : "";
            return `${function(tt){let{config:et}=tt;if(!et.emulator)return`
            https: //${et.authDomain}/${Bq}`;return Zt(et,pq)}(tt)}?${(0,Ot.kb)(Ht).slice(1)}${Qt}`}const gq="webStorageSupport";const sq=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CO,this._completeRedirectFn=hq,this._overrideRedirectResult=aq}async _openPopup(tt,et,Vt,Ot){var qt;St(null===(qt=this.eventManagers[tt._key()])||void 0===qt?void 0:qt.manager,"_initialize() not called before _openPopup()");return Yq(tt,await Tq(tt,et,Vt,ct(),Ot),KO())}async _openRedirect(tt,et,Vt,Ot){await this._originValidation(tt);return function(tt){vO().location.href=tt}(await Tq(tt,et,Vt,ct(),Ot)),new Promise((()=>{}))}_initialize(tt){const et=tt._key();if(this.eventManagers[et]){const{manager:tt,promise:Vt}=this.eventManagers[et];return tt?Promise.resolve(tt):(St(Vt,"If manager is not set, promise should be"),Vt)}const Vt=this.initAndGetManager(tt);return this.eventManagers[et]={promise:Vt},Vt.catch((()=>{delete this.eventManagers[et]})),Vt}async initAndGetManager(tt){const et=await async function(tt){const et=await Gq(tt),Vt=vO().gapi;return vt(Vt,tt,"internal-error"),et.open({where:document.body,url:Uq(tt),messageHandlersFilter:Vt.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oq,dontclear:!0},(et=>new Promise((async(Vt,Ot)=>{await et.restyle({setHideOnLeave:!1});const qt=Ct(tt,"network-request-failed"),Dt=vO().setTimeout((()=>{Ot(qt)}),zq.get());function mt(){vO().clearTimeout(Dt),Vt(et)}et.ping(mt).then(mt,(()=>{Ot(qt)}))}))))}(tt),Vt=new Wq(tt);return et.register("authEvent",(et=>{vt(null===et||void 0===et?void 0:et.authEvent,tt,"invalid-auth-event");return{status:Vt.onEvent(et.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[tt._key()]={manager:Vt},this.iframes[tt._key()]=et,Vt}_isIframeWebStorageSupported(tt,et){this.iframes[tt._key()].send(gq,{type:gq},(Vt=>{var Ot;const qt=null===(Ot=null===Vt||void 0===Vt?void 0:Vt[0])||void 0===Ot?void 0:Ot[gq];void 0!==qt&&et(!!qt),Jt(tt,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(tt){const et=tt._key();return this.originValidationPromises[et]||(this.originValidationPromises[et]=Pq(tt)),this.originValidationPromises[et]}get _shouldInitProactively(){return be()||Ee()||Me()}};class nq{constructor(tt){this.factorId=tt}_process(tt,et,Vt){switch(et.type){case"enroll":return this._finalizeEnroll(tt,et.credential,Vt);case"signin":return this._finalizeSignIn(tt,et.credential);default:return Wt("unexpected MultiFactorSessionType")}}}class tD extends nq{constructor(tt){super("phone"),this.credential=tt}static _fromCredential(tt){return new tD(tt)}_finalizeEnroll(tt,et,Vt){return function(tt,et){return zt(tt,"POST","/v2/accounts/mfaEnrollment:finalize",Gt(tt,et))}(tt,{idToken:et,displayName:Vt,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(tt,et){return function(tt,et){return zt(tt,"POST","/v2/accounts/mfaSignIn:finalize",Gt(tt,et))}(tt,{mfaPendingCredential:et,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class eD{constructor(){}static assertion(tt){return tD._fromCredential(tt)}}eD.FACTOR_ID="phone";class VD{static assertionForEnrollment(tt,et){return OD._fromSecret(tt,et)}static assertionForSignIn(tt,et){return OD._fromEnrollmentId(tt,et)}static async generateSecret(tt){const et=tt;vt("undefined"!==typeof et.auth,"internal-error");const Vt=await(Ot=et.auth,qt={idToken:et.credential,totpEnrollmentInfo:{}},zt(Ot,"POST","/v2/accounts/mfaEnrollment:start",Gt(Ot,qt)));var Ot,qt;return qD._fromStartTotpMfaEnrollmentResponse(Vt,et.auth)}}VD.FACTOR_ID="totp";class OD extends nq{constructor(tt,et,Vt){super("totp"),this.otp=tt,this.enrollmentId=et,this.secret=Vt}static _fromSecret(tt,et){return new OD(et,void 0,tt)}static _fromEnrollmentId(tt,et){return new OD(et,tt)}async _finalizeEnroll(tt,et,Vt){return vt("undefined"!==typeof this.secret,tt,"argument-error"),function(tt,et){return zt(tt,"POST","/v2/accounts/mfaEnrollment:finalize",Gt(tt,et))}(tt,{idToken:et,displayName:Vt,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(tt,et){vt(void 0!==this.enrollmentId&&void 0!==this.otp,tt,"argument-error");const Vt={verificationCode:this.otp};return function(tt,et){return zt(tt,"POST","/v2/accounts/mfaSignIn:finalize",Gt(tt,et))}(tt,{mfaPendingCredential:et,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:Vt})}}class qD{constructor(tt,et,Vt,Ot,qt,Dt,mt){this.sessionInfo=Dt,this.auth=mt,this.secretKey=tt,this.hashingAlgorithm=et,this.codeLength=Vt,this.codeIntervalSeconds=Ot,this.enrollmentCompletionDeadline=qt}static _fromStartTotpMfaEnrollmentResponse(tt,et){return new qD(tt.totpSessionInfo.sharedSecretKey,tt.totpSessionInfo.hashingAlgorithm,tt.totpSessionInfo.verificationCodeLength,tt.totpSessionInfo.periodSec,new Date(tt.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),tt.totpSessionInfo.sessionInfo,et)}_makeTotpVerificationInfo(tt){return{sessionInfo:this.sessionInfo,verificationCode:tt}}generateQrCodeUrl(tt,et){var Vt;let Ot=!1;return(DD(tt)||DD(et))&&(Ot=!0),Ot&&(DD(tt)&&(tt=(null===(Vt=this.auth.currentUser)||void 0===Vt?void 0:Vt.email)||"unknownuser"),DD(et)&&(et=this.auth.name)),`otpauth://totp/${et}:${tt}?secret=${this.secretKey}&issuer=${et}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function DD(tt){return"undefined"===typeof tt||0===(null===tt||void 0===tt?void 0:tt.length)}var mD="@firebase/auth",dD="0.23.2";class jD{constructor(tt){this.auth=tt,this.internalListeners=new Map}getUid(){var tt;return this.assertAuthConfigured(),(null===(tt=this.auth.currentUser)||void 0===tt?void 0:tt.uid)||null}async getToken(tt){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(tt)}}addAuthTokenListener(tt){if(this.assertAuthConfigured(),this.internalListeners.has(tt))return;const et=this.auth.onIdTokenChanged((et=>{tt((null===et||void 0===et?void 0:et.stsTokenManager.accessToken)||null)}));this.internalListeners.set(tt,et),this.updateProactiveRefresh()}removeAuthTokenListener(tt){this.assertAuthConfigured();const et=this.internalListeners.get(tt);et&&(this.internalListeners.delete(tt),et(),this.updateProactiveRefresh())}assertAuthConfigured(){vt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const HD=(0,Ot.H)("authIdTokenMaxAge")||300;let XD=null;const QD=tt=>async et=>{const Vt=et&&await et.getIdTokenResult(),Ot=Vt&&((new Date).getTime()-Date.parse(Vt.issuedAtTime))/1e3;if(Ot&&Ot>HD)return;const qt=null===Vt||void 0===Vt?void 0:Vt.token;XD!==qt&&(XD=qt,await fetch(tt,{method:qt?"POST":"DELETE",headers:qt?{Authorization:`Bearer ${qt}`}:{}}))};function lD(){let tt=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,qt.P)();const et=(0,qt.z)(tt,"auth");if(et.isInitialized())return et.getImmediate();const Vt=Le(tt,{popupRedirectResolver:sq,persistence:[GO,bO,CO]}),Dt=(0,Ot.H)("authTokenSyncURL");if(Dt){const tt=QD(Dt);DO(Vt,tt,(()=>tt(Vt.currentUser))),qO(Vt,(et=>tt(et)))}const mt=(0,Ot.E)("auth");return mt&&Fe(Vt,`http://${mt}`),Vt}var ED;ED="Browser",(0,qt.B)(new dt.d("auth",((tt,et)=>{let{options:Vt}=et;const Ot=tt.getProvider("app").getImmediate(),qt=tt.getProvider("heartbeat"),Dt=tt.getProvider("app-check-internal"),{apiKey:mt,authDomain:dt}=Ot.options;vt(mt&&!mt.includes(":"),"invalid-api-key",{appName:Ot.name});const jt={apiKey:mt,authDomain:dt,clientPlatform:ED,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Je(ED)},Ht=new Ie(Ot,qt,Dt,jt);return function(tt,et){const Vt=(null===et||void 0===et?void 0:et.persistence)||[],Ot=(Array.isArray(Vt)?Vt:[Vt]).map(me);(null===et||void 0===et?void 0:et.errorMap)&&tt._updateErrorMap(et.errorMap),tt._initializeWithPersistence(Ot,null===et||void 0===et?void 0:et.popupRedirectResolver)}(Ht,Vt),Ht}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((tt,et,Vt)=>{tt.getProvider("auth-internal").initialize()}))),(0,qt.B)(new dt.d("auth-internal",(tt=>(tt=>new jD(tt))(Pe(tt.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,qt._)(mD,dD,function(tt){switch(tt){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ED)),(0,qt._)(mD,dD,"esm2017")}};Object.freeze(modules);for(const tt in modules)Object.freeze(modules[tt]);