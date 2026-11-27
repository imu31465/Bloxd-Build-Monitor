/*! For license information please see fl4vv.306.c81284df.chunk.js.LICENSE.txt */
export const id = 306;
export const ids = [306];
export const modules = {
    42388: (rr, Sr, Qr) => {
        Qr.r(Sr), Qr.d(Sr, {
          ActionCodeOperation: () => mr,
          ActionCodeURL: () => dS,
          AuthCredential: () => GS,
          AuthErrorCodes: () => zr,
          EmailAuthCredential: () => FS,
          EmailAuthProvider: () => uS,
          FacebookAuthProvider: () => ZQ,
          FactorId: () => fr,
          GithubAuthProvider: () => aQ,
          GoogleAuthProvider: () => WQ,
          OAuthCredential: () => bS,
          OAuthProvider: () => QQ,
          OperationType: () => xr,
          PhoneAuthCredential: () => DS,
          PhoneAuthProvider: () => SW,
          PhoneMultiFactorGenerator: () => ra,
          ProviderId: () => Er,
          RecaptchaVerifier: () => bZ,
          SAMLAuthProvider: () => IQ,
          SignInMethod: () => pr,
          TotpMultiFactorGenerator: () => Sa,
          TotpSecret: () => Za,
          TwitterAuthProvider: () => fQ,
          applyActionCode: () => HQ,
          beforeAuthStateChanged: () => WZ,
          browserLocalPersistence: () => nZ,
          browserPopupRedirectResolver: () => dW,
          browserSessionPersistence: () => KZ,
          checkActionCode: () => qQ,
          confirmPasswordReset: () => PQ,
          connectAuthEmulator: () => gS,
          createUserWithEmailAndPassword: () => gQ,
          debugErrorMap: () => Ur,
          deleteUser: () => EZ,
          fetchSignInMethodsForEmail: () => AQ,
          getAdditionalUserInfo: () => rZ,
          getAuth: () => xa,
          getIdToken: () => Fr,
          getIdTokenResult: () => or,
          getMultiFactorResolver: () => mZ,
          getRedirectResult: () => BW,
          inMemoryPersistence: () => IS,
          indexedDBLocalPersistence: () => MZ,
          initializeAuth: () => RS,
          initializeRecaptchaConfig: () => QZ,
          isSignInWithEmailLink: () => GQ,
          linkWithCredential: () => yQ,
          linkWithPhoneNumber: () => dZ,
          linkWithPopup: () => xW,
          linkWithRedirect: () => yW,
          multiFactor: () => tZ,
          onAuthStateChanged: () => aZ,
          onIdTokenChanged: () => ZZ,
          parseActionCodeURL: () => sS,
          prodErrorMap: () => tr,
          reauthenticateWithCredential: () => BQ,
          reauthenticateWithPhoneNumber: () => sZ,
          reauthenticateWithPopup: () => pW,
          reauthenticateWithRedirect: () => KW,
          reload: () => rS,
          sendEmailVerification: () => VQ,
          sendPasswordResetEmail: () => XQ,
          sendSignInLinkToEmail: () => MQ,
          setPersistence: () => SZ,
          signInAnonymously: () => mQ,
          signInWithCredential: () => KQ,
          signInWithCustomToken: () => TQ,
          signInWithEmailAndPassword: () => CQ,
          signInWithEmailLink: () => kQ,
          signInWithPhoneNumber: () => DZ,
          signInWithPopup: () => EW,
          signInWithRedirect: () => eW,
          signOut: () => fZ,
          unlink: () => hQ,
          updateCurrentUser: () => IZ,
          updateEmail: () => cQ,
          updatePassword: () => FQ,
          updatePhoneNumber: () => rW,
          updateProfile: () => wQ,
          useDeviceLanguage: () => jZ,
          verifyBeforeUpdateEmail: () => iQ,
          verifyPasswordResetCode: () => RQ
        });
        var Zr = Qr(42366),
          Wr = Qr(42350);

        function ar(rr, Sr) {
          var Qr = {};
          for (var Zr in rr) Object.prototype.hasOwnProperty.call(rr, Zr) && Sr.indexOf(Zr) < 0 && (Qr[Zr] = rr[Zr]);
          if (null != rr && "function" === typeof Object.getOwnPropertySymbols) {
            var Wr = 0;
            for (Zr = Object.getOwnPropertySymbols(rr); Wr < Zr.length; Wr++) Sr.indexOf(Zr[Wr]) < 0 && Object.prototype.propertyIsEnumerable.call(rr, Zr[Wr]) && (Qr[Zr[Wr]] = rr[Zr[Wr]])
          }
          return Qr
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var jr = Qr(42375),
          Ir = Qr(42359);
        const fr = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Er = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          pr = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          xr = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          mr = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Nr() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const Ur = function() {
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
          tr = Nr,
          hr = new Zr.g("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          zr = {
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
          Yr = new jr.d("@firebase/auth");

        function nr(rr) {
          if (Yr.logLevel <= jr.c.ERROR) {
            for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
            Yr.error(`Auth (${Wr.f}): ${rr}`, ...Qr)
          }
        }

        function er(rr) {
          for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
          throw Tr(rr, ...Qr)
        }

        function Kr(rr) {
          for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
          return Tr(rr, ...Qr)
        }

        function yr(rr, Sr, Qr) {
          const Wr = Object.assign(Object.assign({}, tr()), {
            [Sr]: Qr
          });
          return new Zr.g("auth", "Firebase", Wr).create(Sr, {
            appName: rr.name
          })
        }

        function Br(rr, Sr, Qr) {
          if (!(Sr instanceof Qr)) throw Qr.name !== Sr.constructor.name && er(rr, "argument-error"), yr(rr, "argument-error", `Type of ${Sr.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function Tr(rr) {
          for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
          if ("string" !== typeof rr) {
            const Sr = Qr[0],
              Zr = [...Qr.slice(1)];
            return Zr[0] && (Zr[0].appName = rr.name), rr._errorFactory.create(Sr, ...Zr)
          }
          return hr.create(rr, ...Qr)
        }

        function vr(rr, Sr) {
          if (!rr) {
            for (var Qr = arguments.length, Zr = new Array(Qr > 2 ? Qr - 2 : 0), Wr = 2; Wr < Qr; Wr++) Zr[Wr - 2] = arguments[Wr];
            throw Tr(Sr, ...Zr)
          }
        }

        function Or(rr) {
          const Sr = "INTERNAL ASSERTION FAILED: " + rr;
          throw nr(Sr), new Error(Sr)
        }

        function Lr(rr, Sr) {
          rr || Or(Sr)
        }

        function lr() {
          var rr;
          return "undefined" !== typeof self && (null === (rr = self.location) || void 0 === rr ? void 0 : rr.href) || ""
        }

        function Xr() {
          return "http:" === Pr() || "https:" === Pr()
        }

        function Pr() {
          var rr;
          return "undefined" !== typeof self && (null === (rr = self.location) || void 0 === rr ? void 0 : rr.protocol) || null
        }
        class Hr {
          constructor(rr, Sr) {
            this.shortDelay = rr, this.longDelay = Sr, Lr(Sr > rr, "Short delay should be less than long delay!"), this.isMobile = (0, Zr.eb)() || (0, Zr.fb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Xr() || (0, Zr.W)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function qr(rr, Sr) {
          Lr(rr.emulator, "Emulator should always be set here");
          const {
            url: Qr
          } = rr.emulator;
          return Sr ? `${Qr}${Sr.startsWith("/")?Sr.slice(1):Sr}` : Qr
        }
        class Rr {
          static initialize(rr, Sr, Qr) {
            this.fetchImpl = rr, Sr && (this.headersImpl = Sr), Qr && (this.responseImpl = Qr)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const gr = {
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
          Cr = new Hr(3e4, 6e4);

        function Mr(rr, Sr) {
          return rr.tenantId && !Sr.tenantId ? Object.assign(Object.assign({}, Sr), {
            tenantId: rr.tenantId
          }) : Sr
        }
        async function Gr(rr, Sr, Qr, Wr) {
          return kr(rr, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let ar = {},
              jr = {};
            Wr && ("GET" === Sr ? jr = Wr : ar = {
              body: JSON.stringify(Wr)
            });
            const Ir = (0, Zr.ib)(Object.assign({
                key: rr.config.apiKey
              }, jr)).slice(1),
              fr = await rr._getAdditionalHeaders();
            return fr["Content-Type"] = "application/json", rr.languageCode && (fr["X-Firebase-Locale"] = rr.languageCode), Rr.fetch()(Vr(rr, rr.config.apiHost, Qr, Ir), Object.assign({
              method: Sr,
              headers: fr,
              referrerPolicy: "no-referrer"
            }, ar))
          }))
        }
        async function kr(rr, Sr, Qr) {
          rr._canInitEmulator = !1;
          const Wr = Object.assign(Object.assign({}, gr), Sr);
          try {
            const Sr = new ir(rr),
              Zr = await Promise.race([Qr(), Sr.promise]);
            Sr.clearNetworkTimeout();
            const ar = await Zr.json();
            if ("needConfirmation" in ar) throw wr(rr, "account-exists-with-different-credential", ar);
            if (Zr.ok && !("errorMessage" in ar)) return ar;
            {
              const Sr = Zr.ok ? ar.errorMessage : ar.error.message,
                [Qr, jr] = Sr.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === Qr) throw wr(rr, "credential-already-in-use", ar);
              if ("EMAIL_EXISTS" === Qr) throw wr(rr, "email-already-in-use", ar);
              if ("USER_DISABLED" === Qr) throw wr(rr, "user-disabled", ar);
              const Ir = Wr[Qr] || Qr.toLowerCase().replace(/[_\s]+/g, "-");
              if (jr) throw yr(rr, Ir, jr);
              er(rr, Ir)
            }
          } catch (ar) {
            if (ar instanceof Zr.k) throw ar;
            er(rr, "network-request-failed", {
              message: String(ar)
            })
          }
        }
        async function Ar(rr, Sr, Qr, Zr) {
          let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const ar = await Gr(rr, Sr, Qr, Zr, Wr);
          return "mfaPendingCredential" in ar && er(rr, "multi-factor-auth-required", {
            _serverResponse: ar
          }), ar
        }

        function Vr(rr, Sr, Qr, Zr) {
          const Wr = `${Sr}${Qr}?${Zr}`;
          return rr.config.emulator ? qr(rr.config, Wr) : `${rr.config.apiScheme}://${Wr}`
        }
        class ir {
          constructor(rr) {
            this.auth = rr, this.timer = null, this.promise = new Promise(((rr, Sr) => {
              this.timer = setTimeout((() => Sr(Kr(this.auth, "network-request-failed"))), Cr.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function wr(rr, Sr, Qr) {
          const Zr = {
            appName: rr.name
          };
          Qr.email && (Zr.email = Qr.email), Qr.phoneNumber && (Zr.phoneNumber = Qr.phoneNumber);
          const Wr = Kr(rr, Sr, Zr);
          return Wr.customData._tokenResponse = Qr, Wr
        }

        function cr(rr) {
          if (rr) try {
            const Sr = new Date(Number(rr));
            if (!isNaN(Sr.getTime())) return Sr.toUTCString()
          } catch (Sr) {}
        }

        function Fr(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Zr.R)(rr).getIdToken(Sr)
        }
        async function or(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const Qr = (0, Zr.R)(rr),
            Wr = await Qr.getIdToken(Sr),
            ar = Jr(Wr);
          vr(ar && ar.exp && ar.auth_time && ar.iat, Qr.auth, "internal-error");
          const jr = "object" === typeof ar.firebase ? ar.firebase : void 0,
            Ir = null === jr || void 0 === jr ? void 0 : jr.sign_in_provider;
          return {
            claims: ar,
            token: Wr,
            authTime: cr(br(ar.auth_time)),
            issuedAtTime: cr(br(ar.iat)),
            expirationTime: cr(br(ar.exp)),
            signInProvider: Ir || null,
            signInSecondFactor: (null === jr || void 0 === jr ? void 0 : jr.sign_in_second_factor) || null
          }
        }

        function br(rr) {
          return 1e3 * Number(rr)
        }

        function Jr(rr) {
          const [Sr, Qr, Wr] = rr.split(".");
          if (void 0 === Sr || void 0 === Qr || void 0 === Wr) return nr("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const rr = (0, Zr.s)(Qr);
            return rr ? JSON.parse(rr) : (nr("Failed to decode base64 JWT payload"), null)
          } catch (ar) {
            return nr("Caught error parsing JWT payload as JSON", null === ar || void 0 === ar ? void 0 : ar.toString()), null
          }
        }
        async function Dr(rr, Sr) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Sr;
          try {
            return await Sr
          } catch (Qr) {
            throw Qr instanceof Zr.k && function(rr) {
              let {
                code: Sr
              } = rr;
              return "auth/user-disabled" === Sr || "auth/user-token-expired" === Sr
            }(Qr) && rr.auth.currentUser === rr && await rr.auth.signOut(), Qr
          }
        }
        class dr {
          constructor(rr) {
            this.user = rr, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(rr) {
            var Sr;
            if (rr) {
              const rr = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), rr
            } {
              this.errorBackoff = 3e4;
              const rr = (null !== (Sr = this.user.stsTokenManager.expirationTime) && void 0 !== Sr ? Sr : 0) - Date.now() - 3e5;
              return Math.max(0, rr)
            }
          }
          schedule() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const Sr = this.getInterval(rr);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), Sr)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (rr) {
              return void("auth/network-request-failed" === (null === rr || void 0 === rr ? void 0 : rr.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class sr {
          constructor(rr, Sr) {
            this.createdAt = rr, this.lastLoginAt = Sr, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = cr(this.lastLoginAt), this.creationTime = cr(this.createdAt)
          }
          _copy(rr) {
            this.createdAt = rr.createdAt, this.lastLoginAt = rr.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function ur(rr) {
          var Sr;
          const Qr = rr.auth,
            Zr = await rr.getIdToken(),
            Wr = await Dr(rr, async function(rr, Sr) {
              return Gr(rr, "POST", "/v1/accounts:lookup", Sr)
            }(Qr, {
              idToken: Zr
            }));
          vr(null === Wr || void 0 === Wr ? void 0 : Wr.users.length, Qr, "internal-error");
          const jr = Wr.users[0];
          rr._notifyReloadListener(jr);
          const Ir = (null === (Sr = jr.providerUserInfo) || void 0 === Sr ? void 0 : Sr.length) ? jr.providerUserInfo.map((rr => {
            var {
              providerId: Sr
            } = rr, Qr = ar(rr, ["providerId"]);
            return {
              providerId: Sr,
              uid: Qr.rawId || "",
              displayName: Qr.displayName || null,
              email: Qr.email || null,
              phoneNumber: Qr.phoneNumber || null,
              photoURL: Qr.photoUrl || null
            }
          })) : [];
          const fr = (Er = rr.providerData, pr = Ir, [...Er.filter((rr => !pr.some((Sr => Sr.providerId === rr.providerId)))), ...pr]);
          var Er, pr;
          const xr = rr.isAnonymous,
            mr = !(rr.email && jr.passwordHash) && !(null === fr || void 0 === fr ? void 0 : fr.length),
            Nr = !!xr && mr,
            Ur = {
              uid: jr.localId,
              displayName: jr.displayName || null,
              photoURL: jr.photoUrl || null,
              email: jr.email || null,
              emailVerified: jr.emailVerified || !1,
              phoneNumber: jr.phoneNumber || null,
              tenantId: jr.tenantId || null,
              providerData: fr,
              metadata: new sr(jr.createdAt, jr.lastLoginAt),
              isAnonymous: Nr
            };
          Object.assign(rr, Ur)
        }
        async function rS(rr) {
          const Sr = (0, Zr.R)(rr);
          await ur(Sr), await Sr.auth._persistUserIfCurrent(Sr), Sr.auth._notifyListenersIfCurrent(Sr)
        }
        class SS {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(rr) {
            vr(rr.idToken, "internal-error"), vr("undefined" !== typeof rr.idToken, "internal-error"), vr("undefined" !== typeof rr.refreshToken, "internal-error");
            const Sr = "expiresIn" in rr && "undefined" !== typeof rr.expiresIn ? Number(rr.expiresIn) : function(rr) {
              const Sr = Jr(rr);
              return vr(Sr, "internal-error"), vr("undefined" !== typeof Sr.exp, "internal-error"), vr("undefined" !== typeof Sr.iat, "internal-error"), Number(Sr.exp) - Number(Sr.iat)
            }(rr.idToken);
            this.updateTokensAndExpiration(rr.idToken, rr.refreshToken, Sr)
          }
          async getToken(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return vr(!this.accessToken || this.refreshToken, rr, "user-token-expired"), Sr || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(rr, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(rr, Sr) {
            const {
              accessToken: Qr,
              refreshToken: Wr,
              expiresIn: ar
            } = await async function(rr, Sr) {
              const Qr = await kr(rr, {}, (async () => {
                const Qr = (0, Zr.ib)({
                    grant_type: "refresh_token",
                    refresh_token: Sr
                  }).slice(1),
                  {
                    tokenApiHost: Wr,
                    apiKey: ar
                  } = rr.config,
                  jr = Vr(rr, Wr, "/v1/token", `key=${ar}`),
                  Ir = await rr._getAdditionalHeaders();
                return Ir["Content-Type"] = "application/x-www-form-urlencoded", Rr.fetch()(jr, {
                  method: "POST",
                  headers: Ir,
                  body: Qr
                })
              }));
              return {
                accessToken: Qr.access_token,
                expiresIn: Qr.expires_in,
                refreshToken: Qr.refresh_token
              }
            }(rr, Sr);
            this.updateTokensAndExpiration(Qr, Wr, Number(ar))
          }
          updateTokensAndExpiration(rr, Sr, Qr) {
            this.refreshToken = Sr || null, this.accessToken = rr || null, this.expirationTime = Date.now() + 1e3 * Qr
          }
          static fromJSON(rr, Sr) {
            const {
              refreshToken: Qr,
              accessToken: Zr,
              expirationTime: Wr
            } = Sr, ar = new SS;
            return Qr && (vr("string" === typeof Qr, "internal-error", {
              appName: rr
            }), ar.refreshToken = Qr), Zr && (vr("string" === typeof Zr, "internal-error", {
              appName: rr
            }), ar.accessToken = Zr), Wr && (vr("number" === typeof Wr, "internal-error", {
              appName: rr
            }), ar.expirationTime = Wr), ar
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(rr) {
            this.accessToken = rr.accessToken, this.refreshToken = rr.refreshToken, this.expirationTime = rr.expirationTime
          }
          _clone() {
            return Object.assign(new SS, this.toJSON())
          }
          _performRefresh() {
            return Or("not implemented")
          }
        }

        function QS(rr, Sr) {
          vr("string" === typeof rr || "undefined" === typeof rr, "internal-error", {
            appName: Sr
          })
        }
        class ZS {
          constructor(rr) {
            var {
              uid: Sr,
              auth: Qr,
              stsTokenManager: Zr
            } = rr, Wr = ar(rr, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new dr(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Sr, this.auth = Qr, this.stsTokenManager = Zr, this.accessToken = Zr.accessToken, this.displayName = Wr.displayName || null, this.email = Wr.email || null, this.emailVerified = Wr.emailVerified || !1, this.phoneNumber = Wr.phoneNumber || null, this.photoURL = Wr.photoURL || null, this.isAnonymous = Wr.isAnonymous || !1, this.tenantId = Wr.tenantId || null, this.providerData = Wr.providerData ? [...Wr.providerData] : [], this.metadata = new sr(Wr.createdAt || void 0, Wr.lastLoginAt || void 0)
          }
          async getIdToken(rr) {
            const Sr = await Dr(this, this.stsTokenManager.getToken(this.auth, rr));
            return vr(Sr, this.auth, "internal-error"), this.accessToken !== Sr && (this.accessToken = Sr, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Sr
          }
          getIdTokenResult(rr) {
            return or(this, rr)
          }
          reload() {
            return rS(this)
          }
          _assign(rr) {
            this !== rr && (vr(this.uid === rr.uid, this.auth, "internal-error"), this.displayName = rr.displayName, this.photoURL = rr.photoURL, this.email = rr.email, this.emailVerified = rr.emailVerified, this.phoneNumber = rr.phoneNumber, this.isAnonymous = rr.isAnonymous, this.tenantId = rr.tenantId, this.providerData = rr.providerData.map((rr => Object.assign({}, rr))), this.metadata._copy(rr.metadata), this.stsTokenManager._assign(rr.stsTokenManager))
          }
          _clone(rr) {
            const Sr = new ZS(Object.assign(Object.assign({}, this), {
              auth: rr,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return Sr.metadata._copy(this.metadata), Sr
          }
          _onReload(rr) {
            vr(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = rr, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(rr) {
            this.reloadListener ? this.reloadListener(rr) : this.reloadUserInfo = rr
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Qr = !1;
            rr.idToken && rr.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(rr), Qr = !0), Sr && await ur(this), await this.auth._persistUserIfCurrent(this), Qr && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const rr = await this.getIdToken();
            return await Dr(this, async function(rr, Sr) {
              return Gr(rr, "POST", "/v1/accounts:delete", Sr)
            }(this.auth, {
              idToken: rr
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
              providerData: this.providerData.map((rr => Object.assign({}, rr))),
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
          static _fromJSON(rr, Sr) {
            var Qr, Zr, Wr, ar, jr, Ir, fr, Er;
            const pr = null !== (Qr = Sr.displayName) && void 0 !== Qr ? Qr : void 0,
              xr = null !== (Zr = Sr.email) && void 0 !== Zr ? Zr : void 0,
              mr = null !== (Wr = Sr.phoneNumber) && void 0 !== Wr ? Wr : void 0,
              Nr = null !== (ar = Sr.photoURL) && void 0 !== ar ? ar : void 0,
              Ur = null !== (jr = Sr.tenantId) && void 0 !== jr ? jr : void 0,
              tr = null !== (Ir = Sr._redirectEventId) && void 0 !== Ir ? Ir : void 0,
              hr = null !== (fr = Sr.createdAt) && void 0 !== fr ? fr : void 0,
              zr = null !== (Er = Sr.lastLoginAt) && void 0 !== Er ? Er : void 0,
              {
                uid: Yr,
                emailVerified: nr,
                isAnonymous: er,
                providerData: Kr,
                stsTokenManager: yr
              } = Sr;
            vr(Yr && yr, rr, "internal-error");
            const Br = SS.fromJSON(this.name, yr);
            vr("string" === typeof Yr, rr, "internal-error"), QS(pr, rr.name), QS(xr, rr.name), vr("boolean" === typeof nr, rr, "internal-error"), vr("boolean" === typeof er, rr, "internal-error"), QS(mr, rr.name), QS(Nr, rr.name), QS(Ur, rr.name), QS(tr, rr.name), QS(hr, rr.name), QS(zr, rr.name);
            const Tr = new ZS({
              uid: Yr,
              auth: rr,
              email: xr,
              emailVerified: nr,
              displayName: pr,
              isAnonymous: er,
              photoURL: Nr,
              phoneNumber: mr,
              tenantId: Ur,
              stsTokenManager: Br,
              createdAt: hr,
              lastLoginAt: zr
            });
            return Kr && Array.isArray(Kr) && (Tr.providerData = Kr.map((rr => Object.assign({}, rr)))), tr && (Tr._redirectEventId = tr), Tr
          }
          static async _fromIdTokenResponse(rr, Sr) {
            let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Zr = new SS;
            Zr.updateFromServerResponse(Sr);
            const Wr = new ZS({
              uid: Sr.localId,
              auth: rr,
              stsTokenManager: Zr,
              isAnonymous: Qr
            });
            return await ur(Wr), Wr
          }
        }
        const WS = new Map;

        function aS(rr) {
          Lr(rr instanceof Function, "Expected a class definition");
          let Sr = WS.get(rr);
          return Sr ? (Lr(Sr instanceof rr, "Instance stored in cache mismatched with class"), Sr) : (Sr = new rr, WS.set(rr, Sr), Sr)
        }
        class jS {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(rr, Sr) {
            this.storage[rr] = Sr
          }
          async _get(rr) {
            const Sr = this.storage[rr];
            return void 0 === Sr ? null : Sr
          }
          async _remove(rr) {
            delete this.storage[rr]
          }
          _addListener(rr, Sr) {}
          _removeListener(rr, Sr) {}
        }
        jS.type = "NONE";
        const IS = jS;

        function fS(rr, Sr, Qr) {
          return `firebase:${rr}:${Sr}:${Qr}`
        }
        class ES {
          constructor(rr, Sr, Qr) {
            this.persistence = rr, this.auth = Sr, this.userKey = Qr;
            const {
              config: Zr,
              name: Wr
            } = this.auth;
            this.fullUserKey = fS(this.userKey, Zr.apiKey, Wr), this.fullPersistenceKey = fS("persistence", Zr.apiKey, Wr), this.boundEventHandler = Sr._onStorageEvent.bind(Sr), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(rr) {
            return this.persistence._set(this.fullUserKey, rr.toJSON())
          }
          async getCurrentUser() {
            const rr = await this.persistence._get(this.fullUserKey);
            return rr ? ZS._fromJSON(this.auth, rr) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(rr) {
            if (this.persistence === rr) return;
            const Sr = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = rr, Sr ? this.setCurrentUser(Sr) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(rr, Sr) {
            let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Sr.length) return new ES(aS(IS), rr, Qr);
            const Zr = (await Promise.all(Sr.map((async rr => {
              if (await rr._isAvailable()) return rr
            })))).filter((rr => rr));
            let Wr = Zr[0] || aS(IS);
            const ar = fS(Qr, rr.config.apiKey, rr.name);
            let jr = null;
            for (const Er of Sr) try {
              const Sr = await Er._get(ar);
              if (Sr) {
                const Qr = ZS._fromJSON(rr, Sr);
                Er !== Wr && (jr = Qr), Wr = Er;
                break
              }
            } catch (fr) {}
            const Ir = Zr.filter((rr => rr._shouldAllowMigration));
            return Wr._shouldAllowMigration && Ir.length ? (Wr = Ir[0], jr && await Wr._set(ar, jr.toJSON()), await Promise.all(Sr.map((async rr => {
              if (rr !== Wr) try {
                await rr._remove(ar)
              } catch (fr) {}
            }))), new ES(Wr, rr, Qr)) : new ES(Wr, rr, Qr)
          }
        }

        function pS(rr) {
          const Sr = rr.toLowerCase();
          if (Sr.includes("opera/") || Sr.includes("opr/") || Sr.includes("opios/")) return "Opera";
          if (US(Sr)) return "IEMobile";
          if (Sr.includes("msie") || Sr.includes("trident/")) return "IE";
          if (Sr.includes("edge/")) return "Edge";
          if (xS(Sr)) return "Firefox";
          if (Sr.includes("silk/")) return "Silk";
          if (hS(Sr)) return "Blackberry";
          if (zS(Sr)) return "Webos";
          if (mS(Sr)) return "Safari";
          if ((Sr.includes("chrome/") || NS(Sr)) && !Sr.includes("edge/")) return "Chrome";
          if (tS(Sr)) return "Android";
          {
            const Sr = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              Qr = rr.match(Sr);
            if (2 === (null === Qr || void 0 === Qr ? void 0 : Qr.length)) return Qr[1]
          }
          return "Other"
        }

        function xS() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)();
          return /firefox\//i.test(rr)
        }

        function mS() {
          const rr = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)()).toLowerCase();
          return rr.includes("safari/") && !rr.includes("chrome/") && !rr.includes("crios/") && !rr.includes("android")
        }

        function NS() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)();
          return /crios\//i.test(rr)
        }

        function US() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)();
          return /iemobile/i.test(rr)
        }

        function tS() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)();
          return /android/i.test(rr)
        }

        function hS() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)();
          return /blackberry/i.test(rr)
        }

        function zS() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)();
          return /webos/i.test(rr)
        }

        function YS() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)();
          return /iphone|ipad|ipod/i.test(rr) || /macintosh/i.test(rr) && /mobile/i.test(rr)
        }

        function nS() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)();
          return YS(rr) || tS(rr) || zS(rr) || hS(rr) || /windows phone/i.test(rr) || US(rr)
        }

        function eS(rr) {
          let Sr, Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (rr) {
            case "Browser":
              Sr = pS((0, Zr.V)());
              break;
            case "Worker":
              Sr = `${pS((0,Zr.V)())}-${rr}`;
              break;
            default:
              Sr = rr
          }
          const ar = Qr.length ? Qr.join(",") : "FirebaseCore-web";
          return `${Sr}/JsCore/${Wr.f}/${ar}`
        }
        async function KS(rr, Sr) {
          return Gr(rr, "GET", "/v2/recaptchaConfig", Mr(rr, Sr))
        }

        function yS(rr) {
          return void 0 !== rr && void 0 !== rr.getResponse
        }

        function BS(rr) {
          return void 0 !== rr && void 0 !== rr.enterprise
        }
        class TS {
          constructor(rr) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === rr.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = rr.recaptchaKey.split("/")[3], this.emailPasswordEnabled = rr.recaptchaEnforcementState.some((rr => "EMAIL_PASSWORD_PROVIDER" === rr.provider && "OFF" !== rr.enforcementState))
          }
        }

        function vS(rr) {
          return new Promise(((Sr, Qr) => {
            const Zr = document.createElement("script");
            Zr.setAttribute("src", rr), Zr.onload = Sr, Zr.onerror = rr => {
                const Sr = Kr("internal-error");
                Sr.customData = rr, Qr(Sr)
              }, Zr.type = "text/javascript", Zr.charset = "UTF-8",
              function() {
                var rr, Sr;
                return null !== (Sr = null === (rr = document.getElementsByTagName("head")) || void 0 === rr ? void 0 : rr[0]) && void 0 !== Sr ? Sr : document
              }().appendChild(Zr)
          }))
        }

        function OS(rr) {
          return `__${rr}${Math.floor(1e6*Math.random())}`
        }
        class LS {
          constructor(rr) {
            this.type = "recaptcha-enterprise", this.auth = HS(rr)
          }
          async verify() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function Qr(Sr, Qr, Zr) {
              const Wr = window.grecaptcha;
              BS(Wr) ? Wr.enterprise.ready((() => {
                Wr.enterprise.execute(Sr, {
                  action: rr
                }).then((rr => {
                  Qr(rr)
                })).catch((() => {
                  Qr("NO_RECAPTCHA")
                }))
              })) : Zr(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((rr, Zr) => {
              (async function(rr) {
                if (!Sr) {
                  if (null == rr.tenantId && null != rr._agentRecaptchaConfig) return rr._agentRecaptchaConfig.siteKey;
                  if (null != rr.tenantId && void 0 !== rr._tenantRecaptchaConfigs[rr.tenantId]) return rr._tenantRecaptchaConfigs[rr.tenantId].siteKey
                }
                return new Promise((async (Sr, Qr) => {
                  KS(rr, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Zr => {
                    if (void 0 !== Zr.recaptchaKey) {
                      const Qr = new TS(Zr);
                      return null == rr.tenantId ? rr._agentRecaptchaConfig = Qr : rr._tenantRecaptchaConfigs[rr.tenantId] = Qr, Sr(Qr.siteKey)
                    }
                    Qr(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((rr => {
                    Qr(rr)
                  }))
                }))
              })(this.auth).then((Wr => {
                if (!Sr && BS(window.grecaptcha)) Qr(Wr, rr, Zr);
                else {
                  if ("undefined" === typeof window) return void Zr(new Error("RecaptchaVerifier is only supported in browser"));
                  vS("https://www.google.com/recaptcha/enterprise.js?render=" + Wr).then((() => {
                    Qr(Wr, rr, Zr)
                  })).catch((rr => {
                    Zr(rr)
                  }))
                }
              })).catch((rr => {
                Zr(rr)
              }))
            }))
          }
        }
        async function lS(rr, Sr, Qr) {
          let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Wr = new LS(rr);
          let ar;
          try {
            ar = await Wr.verify(Qr)
          } catch (Ir) {
            ar = await Wr.verify(Qr, !0)
          }
          const jr = Object.assign({}, Sr);
          return Zr ? Object.assign(jr, {
            captchaResp: ar
          }) : Object.assign(jr, {
            captchaResponse: ar
          }), Object.assign(jr, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(jr, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), jr
        }
        class XS {
          constructor(rr) {
            this.auth = rr, this.queue = []
          }
          pushCallback(rr, Sr) {
            const Qr = Sr => new Promise(((Qr, Zr) => {
              try {
                Qr(rr(Sr))
              } catch (Wr) {
                Zr(Wr)
              }
            }));
            Qr.onAbort = Sr, this.queue.push(Qr);
            const Zr = this.queue.length - 1;
            return () => {
              this.queue[Zr] = () => Promise.resolve()
            }
          }
          async runMiddleware(rr) {
            if (this.auth.currentUser === rr) return;
            const Sr = [];
            try {
              for (const Qr of this.queue) await Qr(rr), Qr.onAbort && Sr.push(Qr.onAbort)
            } catch (Qr) {
              Sr.reverse();
              for (const rr of Sr) try {
                rr()
              } catch (Zr) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === Qr || void 0 === Qr ? void 0 : Qr.message
              })
            }
          }
        }
        class PS {
          constructor(rr, Sr, Qr, Zr) {
            this.app = rr, this.heartbeatServiceProvider = Sr, this.appCheckServiceProvider = Qr, this.config = Zr, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new qS(this), this.idTokenSubscription = new qS(this), this.beforeStateQueue = new XS(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = hr, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = rr.name, this.clientVersion = Zr.sdkClientVersion
          }
          _initializeWithPersistence(rr, Sr) {
            return Sr && (this._popupRedirectResolver = aS(Sr)), this._initializationPromise = this.queue((async () => {
              var Qr, Zr;
              if (!this._deleted && (this.persistenceManager = await ES.create(this, rr), !this._deleted)) {
                if (null === (Qr = this._popupRedirectResolver) || void 0 === Qr ? void 0 : Qr._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Wr) {}
                await this.initializeCurrentUser(Sr), this.lastNotifiedUid = (null === (Zr = this.currentUser) || void 0 === Zr ? void 0 : Zr.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const rr = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || rr ? this.currentUser && rr && this.currentUser.uid === rr.uid ? (this._currentUser._assign(rr), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(rr, !0) : void 0
          }
          async initializeCurrentUser(rr) {
            var Sr;
            const Qr = await this.assertedPersistence.getCurrentUser();
            let Zr = Qr,
              Wr = !1;
            if (rr && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const Qr = null === (Sr = this.redirectUser) || void 0 === Sr ? void 0 : Sr._redirectEventId,
                ar = null === Zr || void 0 === Zr ? void 0 : Zr._redirectEventId,
                jr = await this.tryRedirectSignIn(rr);
              Qr && Qr !== ar || !(null === jr || void 0 === jr ? void 0 : jr.user) || (Zr = jr.user, Wr = !0)
            }
            if (!Zr) return this.directlySetCurrentUser(null);
            if (!Zr._redirectEventId) {
              if (Wr) try {
                await this.beforeStateQueue.runMiddleware(Zr)
              } catch (ar) {
                Zr = Qr, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(ar)))
              }
              return Zr ? this.reloadAndSetCurrentUserOrClear(Zr) : this.directlySetCurrentUser(null)
            }
            return vr(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Zr._redirectEventId ? this.directlySetCurrentUser(Zr) : this.reloadAndSetCurrentUserOrClear(Zr)
          }
          async tryRedirectSignIn(rr) {
            let Sr = null;
            try {
              Sr = await this._popupRedirectResolver._completeRedirectFn(this, rr, !0)
            } catch (Qr) {
              await this._setRedirectUser(null)
            }
            return Sr
          }
          async reloadAndSetCurrentUserOrClear(rr) {
            try {
              await ur(rr)
            } catch (Sr) {
              if ("auth/network-request-failed" !== (null === Sr || void 0 === Sr ? void 0 : Sr.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(rr)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const rr = navigator;
              return rr.languages && rr.languages[0] || rr.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(rr) {
            const Sr = rr ? (0, Zr.R)(rr) : null;
            return Sr && vr(Sr.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Sr && Sr._clone(this))
          }
          async _updateCurrentUser(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return rr && vr(this.tenantId === rr.tenantId, this, "tenant-id-mismatch"), Sr || await this.beforeStateQueue.runMiddleware(rr), this.queue((async () => {
              await this.directlySetCurrentUser(rr), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(rr) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(aS(rr))
            }))
          }
          async initializeRecaptchaConfig() {
            const rr = await KS(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Sr = new TS(rr);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Sr : this._tenantRecaptchaConfigs[this.tenantId] = Sr, Sr.emailPasswordEnabled) {
              new LS(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(rr) {
            this._errorFactory = new Zr.g("auth", "Firebase", rr())
          }
          onAuthStateChanged(rr, Sr, Qr) {
            return this.registerStateListener(this.authStateSubscription, rr, Sr, Qr)
          }
          beforeAuthStateChanged(rr, Sr) {
            return this.beforeStateQueue.pushCallback(rr, Sr)
          }
          onIdTokenChanged(rr, Sr, Qr) {
            return this.registerStateListener(this.idTokenSubscription, rr, Sr, Qr)
          }
          toJSON() {
            var rr;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (rr = this._currentUser) || void 0 === rr ? void 0 : rr.toJSON()
            }
          }
          async _setRedirectUser(rr, Sr) {
            const Qr = await this.getOrInitRedirectPersistenceManager(Sr);
            return null === rr ? Qr.removeCurrentUser() : Qr.setCurrentUser(rr)
          }
          async getOrInitRedirectPersistenceManager(rr) {
            if (!this.redirectPersistenceManager) {
              const Sr = rr && aS(rr) || this._popupRedirectResolver;
              vr(Sr, this, "argument-error"), this.redirectPersistenceManager = await ES.create(this, [aS(Sr._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(rr) {
            var Sr, Qr;
            return this._isInitialized && await this.queue((async () => {})), (null === (Sr = this._currentUser) || void 0 === Sr ? void 0 : Sr._redirectEventId) === rr ? this._currentUser : (null === (Qr = this.redirectUser) || void 0 === Qr ? void 0 : Qr._redirectEventId) === rr ? this.redirectUser : null
          }
          async _persistUserIfCurrent(rr) {
            if (rr === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(rr)))
          }
          _notifyListenersIfCurrent(rr) {
            rr === this.currentUser && this.notifyAuthListeners()
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
            var rr, Sr;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const Qr = null !== (Sr = null === (rr = this.currentUser) || void 0 === rr ? void 0 : rr.uid) && void 0 !== Sr ? Sr : null;
            this.lastNotifiedUid !== Qr && (this.lastNotifiedUid = Qr, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(rr, Sr, Qr, Zr) {
            if (this._deleted) return () => {};
            const Wr = "function" === typeof Sr ? Sr : Sr.next.bind(Sr),
              ar = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return vr(ar, this, "internal-error"), ar.then((() => Wr(this.currentUser))), "function" === typeof Sr ? rr.addObserver(Sr, Qr, Zr) : rr.addObserver(Sr)
          }
          async directlySetCurrentUser(rr) {
            this.currentUser && this.currentUser !== rr && this._currentUser._stopProactiveRefresh(), rr && this.isProactiveRefreshEnabled && rr._startProactiveRefresh(), this.currentUser = rr, rr ? await this.assertedPersistence.setCurrentUser(rr) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(rr) {
            return this.operations = this.operations.then(rr, rr), this.operations
          }
          get assertedPersistence() {
            return vr(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(rr) {
            rr && !this.frameworks.includes(rr) && (this.frameworks.push(rr), this.frameworks.sort(), this.clientVersion = eS(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var rr;
            const Sr = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (Sr["X-Firebase-gmpid"] = this.app.options.appId);
            const Qr = await (null === (rr = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === rr ? void 0 : rr.getHeartbeatsHeader());
            Qr && (Sr["X-Firebase-Client"] = Qr);
            const Zr = await this._getAppCheckToken();
            return Zr && (Sr["X-Firebase-AppCheck"] = Zr), Sr
          }
          async _getAppCheckToken() {
            var rr;
            const Sr = await (null === (rr = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === rr ? void 0 : rr.getToken());
            return (null === Sr || void 0 === Sr ? void 0 : Sr.error) && function(rr) {
              if (Yr.logLevel <= jr.c.WARN) {
                for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
                Yr.warn(`Auth (${Wr.f}): ${rr}`, ...Qr)
              }
            }(`Error while retrieving App Check token: ${Sr.error}`), null === Sr || void 0 === Sr ? void 0 : Sr.token
          }
        }

        function HS(rr) {
          return (0, Zr.R)(rr)
        }
        class qS {
          constructor(rr) {
            this.auth = rr, this.observer = null, this.addObserver = (0, Zr.B)((rr => this.observer = rr))
          }
          get next() {
            return vr(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function RS(rr, Sr) {
          const Qr = (0, Wr.A)(rr, "auth");
          if (Qr.isInitialized()) {
            const rr = Qr.getImmediate(),
              Wr = Qr.getOptions();
            if ((0, Zr.D)(Wr, null !== Sr && void 0 !== Sr ? Sr : {})) return rr;
            er(rr, "already-initialized")
          }
          return Qr.initialize({
            options: Sr
          })
        }

        function gS(rr, Sr, Qr) {
          const Zr = HS(rr);
          vr(Zr._canInitEmulator, Zr, "emulator-config-failed"), vr(/^https?:\/\//.test(Sr), Zr, "invalid-emulator-scheme");
          const Wr = !!(null === Qr || void 0 === Qr ? void 0 : Qr.disableWarnings),
            ar = CS(Sr),
            {
              host: jr,
              port: Ir
            } = function(rr) {
              const Sr = CS(rr),
                Qr = /(\/\/)?([^?#/]+)/.exec(rr.substr(Sr.length));
              if (!Qr) return {
                host: "",
                port: null
              };
              const Zr = Qr[2].split("@").pop() || "",
                Wr = /^(\[[^\]]+\])(:|$)/.exec(Zr);
              if (Wr) {
                const rr = Wr[1];
                return {
                  host: rr,
                  port: MS(Zr.substr(rr.length + 1))
                }
              } {
                const [rr, Sr] = Zr.split(":");
                return {
                  host: rr,
                  port: MS(Sr)
                }
              }
            }(Sr),
            fr = null === Ir ? "" : `:${Ir}`;
          Zr.config.emulator = {
            url: `${ar}//${jr}${fr}/`
          }, Zr.settings.appVerificationDisabledForTesting = !0, Zr.emulatorConfig = Object.freeze({
            host: jr,
            port: Ir,
            protocol: ar.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Wr
            })
          }), Wr || function() {
            function rr() {
              const rr = document.createElement("p"),
                Sr = rr.style;
              rr.innerText = "Running in emulator mode. Do not use with production credentials.", Sr.position = "fixed", Sr.width = "100%", Sr.backgroundColor = "#ffffff", Sr.border = ".1em solid #000000", Sr.color = "#b50000", Sr.bottom = "0px", Sr.left = "0px", Sr.margin = "0px", Sr.zIndex = "10000", Sr.textAlign = "center", rr.classList.add("firebase-emulator-warning"), document.body.appendChild(rr)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", rr) : rr())
          }()
        }

        function CS(rr) {
          const Sr = rr.indexOf(":");
          return Sr < 0 ? "" : rr.substr(0, Sr + 1)
        }

        function MS(rr) {
          if (!rr) return null;
          const Sr = Number(rr);
          return isNaN(Sr) ? null : Sr
        }
        class GS {
          constructor(rr, Sr) {
            this.providerId = rr, this.signInMethod = Sr
          }
          toJSON() {
            return Or("not implemented")
          }
          _getIdTokenResponse(rr) {
            return Or("not implemented")
          }
          _linkToIdToken(rr, Sr) {
            return Or("not implemented")
          }
          _getReauthenticationResolver(rr) {
            return Or("not implemented")
          }
        }
        async function kS(rr, Sr) {
          return Gr(rr, "POST", "/v1/accounts:resetPassword", Mr(rr, Sr))
        }
        async function AS(rr, Sr) {
          return Gr(rr, "POST", "/v1/accounts:update", Sr)
        }
        async function VS(rr, Sr) {
          return Ar(rr, "POST", "/v1/accounts:signInWithPassword", Mr(rr, Sr))
        }
        async function iS(rr, Sr) {
          return Gr(rr, "POST", "/v1/accounts:sendOobCode", Mr(rr, Sr))
        }
        async function wS(rr, Sr) {
          return iS(rr, Sr)
        }
        async function cS(rr, Sr) {
          return iS(rr, Sr)
        }
        class FS extends GS {
          constructor(rr, Sr, Qr) {
            let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", Qr), this._email = rr, this._password = Sr, this._tenantId = Zr
          }
          static _fromEmailAndPassword(rr, Sr) {
            return new FS(rr, Sr, "password")
          }
          static _fromEmailAndCode(rr, Sr) {
            return new FS(rr, Sr, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(rr) {
            const Sr = "string" === typeof rr ? JSON.parse(rr) : rr;
            if ((null === Sr || void 0 === Sr ? void 0 : Sr.email) && (null === Sr || void 0 === Sr ? void 0 : Sr.password)) {
              if ("password" === Sr.signInMethod) return this._fromEmailAndPassword(Sr.email, Sr.password);
              if ("emailLink" === Sr.signInMethod) return this._fromEmailAndCode(Sr.email, Sr.password, Sr.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(rr) {
            var Sr;
            switch (this.signInMethod) {
              case "password":
                const Qr = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Sr = rr._getRecaptchaConfig()) || void 0 === Sr ? void 0 : Sr.emailPasswordEnabled) {
                  const Sr = await lS(rr, Qr, "signInWithPassword");
                  return VS(rr, Sr)
                }
                return VS(rr, Qr).catch((async Sr => {
                  if ("auth/missing-recaptcha-token" === Sr.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Sr = await lS(rr, Qr, "signInWithPassword");
                    return VS(rr, Sr)
                  }
                  return Promise.reject(Sr)
                }));
              case "emailLink":
                return async function(rr, Sr) {
                  return Ar(rr, "POST", "/v1/accounts:signInWithEmailLink", Mr(rr, Sr))
                }(rr, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                er(rr, "internal-error")
            }
          }
          async _linkToIdToken(rr, Sr) {
            switch (this.signInMethod) {
              case "password":
                return AS(rr, {
                  idToken: Sr,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(rr, Sr) {
                  return Ar(rr, "POST", "/v1/accounts:signInWithEmailLink", Mr(rr, Sr))
                }(rr, {
                  idToken: Sr,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                er(rr, "internal-error")
            }
          }
          _getReauthenticationResolver(rr) {
            return this._getIdTokenResponse(rr)
          }
        }
        async function oS(rr, Sr) {
          return Ar(rr, "POST", "/v1/accounts:signInWithIdp", Mr(rr, Sr))
        }
        class bS extends GS {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(rr) {
            const Sr = new bS(rr.providerId, rr.signInMethod);
            return rr.idToken || rr.accessToken ? (rr.idToken && (Sr.idToken = rr.idToken), rr.accessToken && (Sr.accessToken = rr.accessToken), rr.nonce && !rr.pendingToken && (Sr.nonce = rr.nonce), rr.pendingToken && (Sr.pendingToken = rr.pendingToken)) : rr.oauthToken && rr.oauthTokenSecret ? (Sr.accessToken = rr.oauthToken, Sr.secret = rr.oauthTokenSecret) : er("argument-error"), Sr
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
          static fromJSON(rr) {
            const Sr = "string" === typeof rr ? JSON.parse(rr) : rr,
              {
                providerId: Qr,
                signInMethod: Zr
              } = Sr,
              Wr = ar(Sr, ["providerId", "signInMethod"]);
            if (!Qr || !Zr) return null;
            const jr = new bS(Qr, Zr);
            return jr.idToken = Wr.idToken || void 0, jr.accessToken = Wr.accessToken || void 0, jr.secret = Wr.secret, jr.nonce = Wr.nonce, jr.pendingToken = Wr.pendingToken || null, jr
          }
          _getIdTokenResponse(rr) {
            return oS(rr, this.buildRequest())
          }
          _linkToIdToken(rr, Sr) {
            const Qr = this.buildRequest();
            return Qr.idToken = Sr, oS(rr, Qr)
          }
          _getReauthenticationResolver(rr) {
            const Sr = this.buildRequest();
            return Sr.autoCreate = !1, oS(rr, Sr)
          }
          buildRequest() {
            const rr = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) rr.pendingToken = this.pendingToken;
            else {
              const Sr = {};
              this.idToken && (Sr.id_token = this.idToken), this.accessToken && (Sr.access_token = this.accessToken), this.secret && (Sr.oauth_token_secret = this.secret), Sr.providerId = this.providerId, this.nonce && !this.pendingToken && (Sr.nonce = this.nonce), rr.postBody = (0, Zr.ib)(Sr)
            }
            return rr
          }
        }
        const JS = {
          USER_NOT_FOUND: "user-not-found"
        };
        class DS extends GS {
          constructor(rr) {
            super("phone", "phone"), this.params = rr
          }
          static _fromVerification(rr, Sr) {
            return new DS({
              verificationId: rr,
              verificationCode: Sr
            })
          }
          static _fromTokenResponse(rr, Sr) {
            return new DS({
              phoneNumber: rr,
              temporaryProof: Sr
            })
          }
          _getIdTokenResponse(rr) {
            return async function(rr, Sr) {
              return Ar(rr, "POST", "/v1/accounts:signInWithPhoneNumber", Mr(rr, Sr))
            }(rr, this._makeVerificationRequest())
          }
          _linkToIdToken(rr, Sr) {
            return async function(rr, Sr) {
              const Qr = await Ar(rr, "POST", "/v1/accounts:signInWithPhoneNumber", Mr(rr, Sr));
              if (Qr.temporaryProof) throw wr(rr, "account-exists-with-different-credential", Qr);
              return Qr
            }(rr, Object.assign({
              idToken: Sr
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(rr) {
            return async function(rr, Sr) {
              return Ar(rr, "POST", "/v1/accounts:signInWithPhoneNumber", Mr(rr, Object.assign(Object.assign({}, Sr), {
                operation: "REAUTH"
              })), JS)
            }(rr, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: rr,
              phoneNumber: Sr,
              verificationId: Qr,
              verificationCode: Zr
            } = this.params;
            return rr && Sr ? {
              temporaryProof: rr,
              phoneNumber: Sr
            } : {
              sessionInfo: Qr,
              code: Zr
            }
          }
          toJSON() {
            const rr = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (rr.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (rr.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (rr.verificationCode = this.params.verificationCode), this.params.verificationId && (rr.verificationId = this.params.verificationId), rr
          }
          static fromJSON(rr) {
            "string" === typeof rr && (rr = JSON.parse(rr));
            const {
              verificationId: Sr,
              verificationCode: Qr,
              phoneNumber: Zr,
              temporaryProof: Wr
            } = rr;
            return Qr || Sr || Zr || Wr ? new DS({
              verificationId: Sr,
              verificationCode: Qr,
              phoneNumber: Zr,
              temporaryProof: Wr
            }) : null
          }
        }
        class dS {
          constructor(rr) {
            var Sr, Qr, Wr, ar, jr, Ir;
            const fr = (0, Zr.gb)((0, Zr.G)(rr)),
              Er = null !== (Sr = fr.apiKey) && void 0 !== Sr ? Sr : null,
              pr = null !== (Qr = fr.oobCode) && void 0 !== Qr ? Qr : null,
              xr = function(rr) {
                switch (rr) {
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
              }(null !== (Wr = fr.mode) && void 0 !== Wr ? Wr : null);
            vr(Er && pr && xr, "argument-error"), this.apiKey = Er, this.operation = xr, this.code = pr, this.continueUrl = null !== (ar = fr.continueUrl) && void 0 !== ar ? ar : null, this.languageCode = null !== (jr = fr.languageCode) && void 0 !== jr ? jr : null, this.tenantId = null !== (Ir = fr.tenantId) && void 0 !== Ir ? Ir : null
          }
          static parseLink(rr) {
            const Sr = function(rr) {
              const Sr = (0, Zr.gb)((0, Zr.G)(rr)).link,
                Qr = Sr ? (0, Zr.gb)((0, Zr.G)(Sr)).deep_link_id : null,
                Wr = (0, Zr.gb)((0, Zr.G)(rr)).deep_link_id;
              return (Wr ? (0, Zr.gb)((0, Zr.G)(Wr)).link : null) || Wr || Qr || Sr || rr
            }(rr);
            try {
              return new dS(Sr)
            } catch (Qr) {
              return null
            }
          }
        }

        function sS(rr) {
          return dS.parseLink(rr)
        }
        class uS {
          constructor() {
            this.providerId = uS.PROVIDER_ID
          }
          static credential(rr, Sr) {
            return FS._fromEmailAndPassword(rr, Sr)
          }
          static credentialWithLink(rr, Sr) {
            const Qr = dS.parseLink(Sr);
            return vr(Qr, "argument-error"), FS._fromEmailAndCode(rr, Qr.code, Qr.tenantId)
          }
        }
        uS.PROVIDER_ID = "password", uS.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", uS.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class rQ {
          constructor(rr) {
            this.providerId = rr, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(rr) {
            this.defaultLanguageCode = rr
          }
          setCustomParameters(rr) {
            return this.customParameters = rr, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class SQ extends rQ {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(rr) {
            return this.scopes.includes(rr) || this.scopes.push(rr), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class QQ extends SQ {
          static credentialFromJSON(rr) {
            const Sr = "string" === typeof rr ? JSON.parse(rr) : rr;
            return vr("providerId" in Sr && "signInMethod" in Sr, "argument-error"), bS._fromParams(Sr)
          }
          credential(rr) {
            return this._credential(Object.assign(Object.assign({}, rr), {
              nonce: rr.rawNonce
            }))
          }
          _credential(rr) {
            return vr(rr.idToken || rr.accessToken, "argument-error"), bS._fromParams(Object.assign(Object.assign({}, rr), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(rr) {
            return QQ.oauthCredentialFromTaggedObject(rr)
          }
          static credentialFromError(rr) {
            return QQ.oauthCredentialFromTaggedObject(rr.customData || {})
          }
          static oauthCredentialFromTaggedObject(rr) {
            let {
              _tokenResponse: Sr
            } = rr;
            if (!Sr) return null;
            const {
              oauthIdToken: Qr,
              oauthAccessToken: Zr,
              oauthTokenSecret: Wr,
              pendingToken: ar,
              nonce: jr,
              providerId: Ir
            } = Sr;
            if (!Zr && !Wr && !Qr && !ar) return null;
            if (!Ir) return null;
            try {
              return new QQ(Ir)._credential({
                idToken: Qr,
                accessToken: Zr,
                nonce: jr,
                pendingToken: ar
              })
            } catch (fr) {
              return null
            }
          }
        }
        class ZQ extends SQ {
          constructor() {
            super("facebook.com")
          }
          static credential(rr) {
            return bS._fromParams({
              providerId: ZQ.PROVIDER_ID,
              signInMethod: ZQ.FACEBOOK_SIGN_IN_METHOD,
              accessToken: rr
            })
          }
          static credentialFromResult(rr) {
            return ZQ.credentialFromTaggedObject(rr)
          }
          static credentialFromError(rr) {
            return ZQ.credentialFromTaggedObject(rr.customData || {})
          }
          static credentialFromTaggedObject(rr) {
            let {
              _tokenResponse: Sr
            } = rr;
            if (!Sr || !("oauthAccessToken" in Sr)) return null;
            if (!Sr.oauthAccessToken) return null;
            try {
              return ZQ.credential(Sr.oauthAccessToken)
            } catch (Qr) {
              return null
            }
          }
        }
        ZQ.FACEBOOK_SIGN_IN_METHOD = "facebook.com", ZQ.PROVIDER_ID = "facebook.com";
        class WQ extends SQ {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(rr, Sr) {
            return bS._fromParams({
              providerId: WQ.PROVIDER_ID,
              signInMethod: WQ.GOOGLE_SIGN_IN_METHOD,
              idToken: rr,
              accessToken: Sr
            })
          }
          static credentialFromResult(rr) {
            return WQ.credentialFromTaggedObject(rr)
          }
          static credentialFromError(rr) {
            return WQ.credentialFromTaggedObject(rr.customData || {})
          }
          static credentialFromTaggedObject(rr) {
            let {
              _tokenResponse: Sr
            } = rr;
            if (!Sr) return null;
            const {
              oauthIdToken: Qr,
              oauthAccessToken: Zr
            } = Sr;
            if (!Qr && !Zr) return null;
            try {
              return WQ.credential(Qr, Zr)
            } catch (Wr) {
              return null
            }
          }
        }
        WQ.GOOGLE_SIGN_IN_METHOD = "google.com", WQ.PROVIDER_ID = "google.com";
        class aQ extends SQ {
          constructor() {
            super("github.com")
          }
          static credential(rr) {
            return bS._fromParams({
              providerId: aQ.PROVIDER_ID,
              signInMethod: aQ.GITHUB_SIGN_IN_METHOD,
              accessToken: rr
            })
          }
          static credentialFromResult(rr) {
            return aQ.credentialFromTaggedObject(rr)
          }
          static credentialFromError(rr) {
            return aQ.credentialFromTaggedObject(rr.customData || {})
          }
          static credentialFromTaggedObject(rr) {
            let {
              _tokenResponse: Sr
            } = rr;
            if (!Sr || !("oauthAccessToken" in Sr)) return null;
            if (!Sr.oauthAccessToken) return null;
            try {
              return aQ.credential(Sr.oauthAccessToken)
            } catch (Qr) {
              return null
            }
          }
        }
        aQ.GITHUB_SIGN_IN_METHOD = "github.com", aQ.PROVIDER_ID = "github.com";
        class jQ extends GS {
          constructor(rr, Sr) {
            super(rr, rr), this.pendingToken = Sr
          }
          _getIdTokenResponse(rr) {
            return oS(rr, this.buildRequest())
          }
          _linkToIdToken(rr, Sr) {
            const Qr = this.buildRequest();
            return Qr.idToken = Sr, oS(rr, Qr)
          }
          _getReauthenticationResolver(rr) {
            const Sr = this.buildRequest();
            return Sr.autoCreate = !1, oS(rr, Sr)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(rr) {
            const Sr = "string" === typeof rr ? JSON.parse(rr) : rr,
              {
                providerId: Qr,
                signInMethod: Zr,
                pendingToken: Wr
              } = Sr;
            return Qr && Zr && Wr && Qr === Zr ? new jQ(Qr, Wr) : null
          }
          static _create(rr, Sr) {
            return new jQ(rr, Sr)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class IQ extends rQ {
          constructor(rr) {
            vr(rr.startsWith("saml."), "argument-error"), super(rr)
          }
          static credentialFromResult(rr) {
            return IQ.samlCredentialFromTaggedObject(rr)
          }
          static credentialFromError(rr) {
            return IQ.samlCredentialFromTaggedObject(rr.customData || {})
          }
          static credentialFromJSON(rr) {
            const Sr = jQ.fromJSON(rr);
            return vr(Sr, "argument-error"), Sr
          }
          static samlCredentialFromTaggedObject(rr) {
            let {
              _tokenResponse: Sr
            } = rr;
            if (!Sr) return null;
            const {
              pendingToken: Qr,
              providerId: Zr
            } = Sr;
            if (!Qr || !Zr) return null;
            try {
              return jQ._create(Zr, Qr)
            } catch (Wr) {
              return null
            }
          }
        }
        class fQ extends SQ {
          constructor() {
            super("twitter.com")
          }
          static credential(rr, Sr) {
            return bS._fromParams({
              providerId: fQ.PROVIDER_ID,
              signInMethod: fQ.TWITTER_SIGN_IN_METHOD,
              oauthToken: rr,
              oauthTokenSecret: Sr
            })
          }
          static credentialFromResult(rr) {
            return fQ.credentialFromTaggedObject(rr)
          }
          static credentialFromError(rr) {
            return fQ.credentialFromTaggedObject(rr.customData || {})
          }
          static credentialFromTaggedObject(rr) {
            let {
              _tokenResponse: Sr
            } = rr;
            if (!Sr) return null;
            const {
              oauthAccessToken: Qr,
              oauthTokenSecret: Zr
            } = Sr;
            if (!Qr || !Zr) return null;
            try {
              return fQ.credential(Qr, Zr)
            } catch (Wr) {
              return null
            }
          }
        }
        async function EQ(rr, Sr) {
          return Ar(rr, "POST", "/v1/accounts:signUp", Mr(rr, Sr))
        }
        fQ.TWITTER_SIGN_IN_METHOD = "twitter.com", fQ.PROVIDER_ID = "twitter.com";
        class pQ {
          constructor(rr) {
            this.user = rr.user, this.providerId = rr.providerId, this._tokenResponse = rr._tokenResponse, this.operationType = rr.operationType
          }
          static async _fromIdTokenResponse(rr, Sr, Qr) {
            let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Wr = await ZS._fromIdTokenResponse(rr, Qr, Zr),
              ar = xQ(Qr);
            return new pQ({
              user: Wr,
              providerId: ar,
              _tokenResponse: Qr,
              operationType: Sr
            })
          }
          static async _forOperation(rr, Sr, Qr) {
            await rr._updateTokensIfNecessary(Qr, !0);
            const Zr = xQ(Qr);
            return new pQ({
              user: rr,
              providerId: Zr,
              _tokenResponse: Qr,
              operationType: Sr
            })
          }
        }

        function xQ(rr) {
          return rr.providerId ? rr.providerId : "phoneNumber" in rr ? "phone" : null
        }
        async function mQ(rr) {
          var Sr;
          const Qr = HS(rr);
          if (await Qr._initializationPromise, null === (Sr = Qr.currentUser) || void 0 === Sr ? void 0 : Sr.isAnonymous) return new pQ({
            user: Qr.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Zr = await EQ(Qr, {
              returnSecureToken: !0
            }),
            Wr = await pQ._fromIdTokenResponse(Qr, "signIn", Zr, !0);
          return await Qr._updateCurrentUser(Wr.user), Wr
        }
        class NQ extends Zr.k {
          constructor(rr, Sr, Qr, Zr) {
            var Wr;
            super(Sr.code, Sr.message), this.operationType = Qr, this.user = Zr, Object.setPrototypeOf(this, NQ.prototype), this.customData = {
              appName: rr.name,
              tenantId: null !== (Wr = rr.tenantId) && void 0 !== Wr ? Wr : void 0,
              _serverResponse: Sr.customData._serverResponse,
              operationType: Qr
            }
          }
          static _fromErrorAndOperation(rr, Sr, Qr, Zr) {
            return new NQ(rr, Sr, Qr, Zr)
          }
        }

        function UQ(rr, Sr, Qr, Zr) {
          return ("reauthenticate" === Sr ? Qr._getReauthenticationResolver(rr) : Qr._getIdTokenResponse(rr)).catch((Qr => {
            if ("auth/multi-factor-auth-required" === Qr.code) throw NQ._fromErrorAndOperation(rr, Qr, Sr, Zr);
            throw Qr
          }))
        }

        function tQ(rr) {
          return new Set(rr.map((rr => {
            let {
              providerId: Sr
            } = rr;
            return Sr
          })).filter((rr => !!rr)))
        }
        async function hQ(rr, Sr) {
          const Qr = (0, Zr.R)(rr);
          await YQ(!0, Qr, Sr);
          const {
            providerUserInfo: Wr
          } = await async function(rr, Sr) {
            return Gr(rr, "POST", "/v1/accounts:update", Sr)
          }(Qr.auth, {
            idToken: await Qr.getIdToken(),
            deleteProvider: [Sr]
          }), ar = tQ(Wr || []);
          return Qr.providerData = Qr.providerData.filter((rr => ar.has(rr.providerId))), ar.has("phone") || (Qr.phoneNumber = null), await Qr.auth._persistUserIfCurrent(Qr), Qr
        }
        async function zQ(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Zr = await Dr(rr, Sr._linkToIdToken(rr.auth, await rr.getIdToken()), Qr);
          return pQ._forOperation(rr, "link", Zr)
        }
        async function YQ(rr, Sr, Qr) {
          await ur(Sr);
          const Zr = !1 === rr ? "provider-already-linked" : "no-such-provider";
          vr(tQ(Sr.providerData).has(Qr) === rr, Sr.auth, Zr)
        }
        async function nQ(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Zr
          } = rr, Wr = "reauthenticate";
          try {
            const ar = await Dr(rr, UQ(Zr, Wr, Sr, rr), Qr);
            vr(ar.idToken, Zr, "internal-error");
            const jr = Jr(ar.idToken);
            vr(jr, Zr, "internal-error");
            const {
              sub: Ir
            } = jr;
            return vr(rr.uid === Ir, Zr, "user-mismatch"), pQ._forOperation(rr, Wr, ar)
          } catch (ar) {
            throw "auth/user-not-found" === (null === ar || void 0 === ar ? void 0 : ar.code) && er(Zr, "user-mismatch"), ar
          }
        }
        async function eQ(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Zr = "signIn",
            Wr = await UQ(rr, Zr, Sr),
            ar = await pQ._fromIdTokenResponse(rr, Zr, Wr);
          return Qr || await rr._updateCurrentUser(ar.user), ar
        }
        async function KQ(rr, Sr) {
          return eQ(HS(rr), Sr)
        }
        async function yQ(rr, Sr) {
          const Qr = (0, Zr.R)(rr);
          return await YQ(!1, Qr, Sr.providerId), zQ(Qr, Sr)
        }
        async function BQ(rr, Sr) {
          return nQ((0, Zr.R)(rr), Sr)
        }
        async function TQ(rr, Sr) {
          const Qr = HS(rr),
            Zr = await async function(rr, Sr) {
              return Ar(rr, "POST", "/v1/accounts:signInWithCustomToken", Mr(rr, Sr))
            }(Qr, {
              token: Sr,
              returnSecureToken: !0
            }), Wr = await pQ._fromIdTokenResponse(Qr, "signIn", Zr);
          return await Qr._updateCurrentUser(Wr.user), Wr
        }
        class vQ {
          constructor(rr, Sr) {
            this.factorId = rr, this.uid = Sr.mfaEnrollmentId, this.enrollmentTime = new Date(Sr.enrolledAt).toUTCString(), this.displayName = Sr.displayName
          }
          static _fromServerResponse(rr, Sr) {
            return "phoneInfo" in Sr ? OQ._fromServerResponse(rr, Sr) : "totpInfo" in Sr ? LQ._fromServerResponse(rr, Sr) : er(rr, "internal-error")
          }
        }
        class OQ extends vQ {
          constructor(rr) {
            super("phone", rr), this.phoneNumber = rr.phoneInfo
          }
          static _fromServerResponse(rr, Sr) {
            return new OQ(Sr)
          }
        }
        class LQ extends vQ {
          constructor(rr) {
            super("totp", rr)
          }
          static _fromServerResponse(rr, Sr) {
            return new LQ(Sr)
          }
        }

        function lQ(rr, Sr, Qr) {
          var Zr;
          vr((null === (Zr = Qr.url) || void 0 === Zr ? void 0 : Zr.length) > 0, rr, "invalid-continue-uri"), vr("undefined" === typeof Qr.dynamicLinkDomain || Qr.dynamicLinkDomain.length > 0, rr, "invalid-dynamic-link-domain"), Sr.continueUrl = Qr.url, Sr.dynamicLinkDomain = Qr.dynamicLinkDomain, Sr.canHandleCodeInApp = Qr.handleCodeInApp, Qr.iOS && (vr(Qr.iOS.bundleId.length > 0, rr, "missing-ios-bundle-id"), Sr.iOSBundleId = Qr.iOS.bundleId), Qr.android && (vr(Qr.android.packageName.length > 0, rr, "missing-android-pkg-name"), Sr.androidInstallApp = Qr.android.installApp, Sr.androidMinimumVersionCode = Qr.android.minimumVersion, Sr.androidPackageName = Qr.android.packageName)
        }
        async function XQ(rr, Sr, Qr) {
          var Zr;
          const Wr = HS(rr),
            ar = {
              requestType: "PASSWORD_RESET",
              email: Sr,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Zr = Wr._getRecaptchaConfig()) || void 0 === Zr ? void 0 : Zr.emailPasswordEnabled) {
            const rr = await lS(Wr, ar, "getOobCode", !0);
            Qr && lQ(Wr, rr, Qr), await wS(Wr, rr)
          } else Qr && lQ(Wr, ar, Qr), await wS(Wr, ar).catch((async rr => {
            if ("auth/missing-recaptcha-token" !== rr.code) return Promise.reject(rr);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const rr = await lS(Wr, ar, "getOobCode", !0);
              Qr && lQ(Wr, rr, Qr), await wS(Wr, rr)
            }
          }))
        }
        async function PQ(rr, Sr, Qr) {
          await kS((0, Zr.R)(rr), {
            oobCode: Sr,
            newPassword: Qr
          })
        }
        async function HQ(rr, Sr) {
          await async function(rr, Sr) {
            return Gr(rr, "POST", "/v1/accounts:update", Mr(rr, Sr))
          }((0, Zr.R)(rr), {
            oobCode: Sr
          })
        }
        async function qQ(rr, Sr) {
          const Qr = (0, Zr.R)(rr),
            Wr = await kS(Qr, {
              oobCode: Sr
            }),
            ar = Wr.requestType;
          switch (vr(ar, Qr, "internal-error"), ar) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              vr(Wr.newEmail, Qr, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              vr(Wr.mfaInfo, Qr, "internal-error");
            default:
              vr(Wr.email, Qr, "internal-error")
          }
          let jr = null;
          return Wr.mfaInfo && (jr = vQ._fromServerResponse(HS(Qr), Wr.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Wr.requestType ? Wr.newEmail : Wr.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Wr.requestType ? Wr.email : Wr.newEmail) || null,
              multiFactorInfo: jr
            },
            operation: ar
          }
        }
        async function RQ(rr, Sr) {
          const {
            data: Qr
          } = await qQ((0, Zr.R)(rr), Sr);
          return Qr.email
        }
        async function gQ(rr, Sr, Qr) {
          var Zr;
          const Wr = HS(rr),
            ar = {
              returnSecureToken: !0,
              email: Sr,
              password: Qr,
              clientType: "CLIENT_TYPE_WEB"
            };
          let jr;
          if (null === (Zr = Wr._getRecaptchaConfig()) || void 0 === Zr ? void 0 : Zr.emailPasswordEnabled) {
            const rr = await lS(Wr, ar, "signUpPassword");
            jr = EQ(Wr, rr)
          } else jr = EQ(Wr, ar).catch((async rr => {
            if ("auth/missing-recaptcha-token" === rr.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const rr = await lS(Wr, ar, "signUpPassword");
              return EQ(Wr, rr)
            }
            return Promise.reject(rr)
          }));
          const Ir = await jr.catch((rr => Promise.reject(rr))),
            fr = await pQ._fromIdTokenResponse(Wr, "signIn", Ir);
          return await Wr._updateCurrentUser(fr.user), fr
        }

        function CQ(rr, Sr, Qr) {
          return KQ((0, Zr.R)(rr), uS.credential(Sr, Qr))
        }
        async function MQ(rr, Sr, Qr) {
          var Zr;
          const Wr = HS(rr),
            ar = {
              requestType: "EMAIL_SIGNIN",
              email: Sr,
              clientType: "CLIENT_TYPE_WEB"
            };

          function jr(rr, Sr) {
            vr(Sr.handleCodeInApp, Wr, "argument-error"), Sr && lQ(Wr, rr, Sr)
          }
          if (null === (Zr = Wr._getRecaptchaConfig()) || void 0 === Zr ? void 0 : Zr.emailPasswordEnabled) {
            const rr = await lS(Wr, ar, "getOobCode", !0);
            jr(rr, Qr), await cS(Wr, rr)
          } else jr(ar, Qr), await cS(Wr, ar).catch((async rr => {
            if ("auth/missing-recaptcha-token" !== rr.code) return Promise.reject(rr);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const rr = await lS(Wr, ar, "getOobCode", !0);
              jr(rr, Qr), await cS(Wr, rr)
            }
          }))
        }

        function GQ(rr, Sr) {
          const Qr = dS.parseLink(Sr);
          return "EMAIL_SIGNIN" === (null === Qr || void 0 === Qr ? void 0 : Qr.operation)
        }
        async function kQ(rr, Sr, Qr) {
          const Wr = (0, Zr.R)(rr),
            ar = uS.credentialWithLink(Sr, Qr || lr());
          return vr(ar._tenantId === (Wr.tenantId || null), Wr, "tenant-id-mismatch"), KQ(Wr, ar)
        }
        async function AQ(rr, Sr) {
          const Qr = {
              identifier: Sr,
              continueUri: Xr() ? lr() : "http://localhost"
            },
            {
              signinMethods: Wr
            } = await async function(rr, Sr) {
              return Gr(rr, "POST", "/v1/accounts:createAuthUri", Mr(rr, Sr))
            }((0, Zr.R)(rr), Qr);
          return Wr || []
        }
        async function VQ(rr, Sr) {
          const Qr = (0, Zr.R)(rr),
            Wr = {
              requestType: "VERIFY_EMAIL",
              idToken: await rr.getIdToken()
            };
          Sr && lQ(Qr.auth, Wr, Sr);
          const {
            email: ar
          } = await async function(rr, Sr) {
            return iS(rr, Sr)
          }(Qr.auth, Wr);
          ar !== rr.email && await rr.reload()
        }
        async function iQ(rr, Sr, Qr) {
          const Wr = (0, Zr.R)(rr),
            ar = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await rr.getIdToken(),
              newEmail: Sr
            };
          Qr && lQ(Wr.auth, ar, Qr);
          const {
            email: jr
          } = await async function(rr, Sr) {
            return iS(rr, Sr)
          }(Wr.auth, ar);
          jr !== rr.email && await rr.reload()
        }
        async function wQ(rr, Sr) {
          let {
            displayName: Qr,
            photoURL: Wr
          } = Sr;
          if (void 0 === Qr && void 0 === Wr) return;
          const ar = (0, Zr.R)(rr),
            jr = {
              idToken: await ar.getIdToken(),
              displayName: Qr,
              photoUrl: Wr,
              returnSecureToken: !0
            },
            Ir = await Dr(ar, async function(rr, Sr) {
              return Gr(rr, "POST", "/v1/accounts:update", Sr)
            }(ar.auth, jr));
          ar.displayName = Ir.displayName || null, ar.photoURL = Ir.photoUrl || null;
          const fr = ar.providerData.find((rr => {
            let {
              providerId: Sr
            } = rr;
            return "password" === Sr
          }));
          fr && (fr.displayName = ar.displayName, fr.photoURL = ar.photoURL), await ar._updateTokensIfNecessary(Ir)
        }

        function cQ(rr, Sr) {
          return oQ((0, Zr.R)(rr), Sr, null)
        }

        function FQ(rr, Sr) {
          return oQ((0, Zr.R)(rr), null, Sr)
        }
        async function oQ(rr, Sr, Qr) {
          const {
            auth: Zr
          } = rr, Wr = {
            idToken: await rr.getIdToken(),
            returnSecureToken: !0
          };
          Sr && (Wr.email = Sr), Qr && (Wr.password = Qr);
          const ar = await Dr(rr, AS(Zr, Wr));
          await rr._updateTokensIfNecessary(ar, !0)
        }
        class bQ {
          constructor(rr, Sr) {
            let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = rr, this.providerId = Sr, this.profile = Qr
          }
        }
        class JQ extends bQ {
          constructor(rr, Sr, Qr, Zr) {
            super(rr, Sr, Qr), this.username = Zr
          }
        }
        class DQ extends bQ {
          constructor(rr, Sr) {
            super(rr, "facebook.com", Sr)
          }
        }
        class dQ extends JQ {
          constructor(rr, Sr) {
            super(rr, "github.com", Sr, "string" === typeof(null === Sr || void 0 === Sr ? void 0 : Sr.login) ? null === Sr || void 0 === Sr ? void 0 : Sr.login : null)
          }
        }
        class sQ extends bQ {
          constructor(rr, Sr) {
            super(rr, "google.com", Sr)
          }
        }
        class uQ extends JQ {
          constructor(rr, Sr, Qr) {
            super(rr, "twitter.com", Sr, Qr)
          }
        }

        function rZ(rr) {
          const {
            user: Sr,
            _tokenResponse: Qr
          } = rr;
          return Sr.isAnonymous && !Qr ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(rr) {
            var Sr, Qr;
            if (!rr) return null;
            const {
              providerId: Zr
            } = rr, Wr = rr.rawUserInfo ? JSON.parse(rr.rawUserInfo) : {}, ar = rr.isNewUser || "identitytoolkit#SignupNewUserResponse" === rr.kind;
            if (!Zr && (null === rr || void 0 === rr ? void 0 : rr.idToken)) {
              const Zr = null === (Qr = null === (Sr = Jr(rr.idToken)) || void 0 === Sr ? void 0 : Sr.firebase) || void 0 === Qr ? void 0 : Qr.sign_in_provider;
              if (Zr) return new bQ(ar, "anonymous" !== Zr && "custom" !== Zr ? Zr : null)
            }
            if (!Zr) return null;
            switch (Zr) {
              case "facebook.com":
                return new DQ(ar, Wr);
              case "github.com":
                return new dQ(ar, Wr);
              case "google.com":
                return new sQ(ar, Wr);
              case "twitter.com":
                return new uQ(ar, Wr, rr.screenName || null);
              case "custom":
              case "anonymous":
                return new bQ(ar, null);
              default:
                return new bQ(ar, Zr, Wr)
            }
          }(Qr)
        }

        function SZ(rr, Sr) {
          return (0, Zr.R)(rr).setPersistence(Sr)
        }

        function QZ(rr) {
          return HS(rr).initializeRecaptchaConfig()
        }

        function ZZ(rr, Sr, Qr, Wr) {
          return (0, Zr.R)(rr).onIdTokenChanged(Sr, Qr, Wr)
        }

        function WZ(rr, Sr, Qr) {
          return (0, Zr.R)(rr).beforeAuthStateChanged(Sr, Qr)
        }

        function aZ(rr, Sr, Qr, Wr) {
          return (0, Zr.R)(rr).onAuthStateChanged(Sr, Qr, Wr)
        }

        function jZ(rr) {
          (0, Zr.R)(rr).useDeviceLanguage()
        }

        function IZ(rr, Sr) {
          return (0, Zr.R)(rr).updateCurrentUser(Sr)
        }

        function fZ(rr) {
          return (0, Zr.R)(rr).signOut()
        }
        async function EZ(rr) {
          return (0, Zr.R)(rr).delete()
        }
        class pZ {
          constructor(rr, Sr, Qr) {
            this.type = rr, this.credential = Sr, this.auth = Qr
          }
          static _fromIdtoken(rr, Sr) {
            return new pZ("enroll", rr, Sr)
          }
          static _fromMfaPendingCredential(rr) {
            return new pZ("signin", rr)
          }
          toJSON() {
            const rr = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [rr]: this.credential
              }
            }
          }
          static fromJSON(rr) {
            var Sr, Qr;
            if (null === rr || void 0 === rr ? void 0 : rr.multiFactorSession) {
              if (null === (Sr = rr.multiFactorSession) || void 0 === Sr ? void 0 : Sr.pendingCredential) return pZ._fromMfaPendingCredential(rr.multiFactorSession.pendingCredential);
              if (null === (Qr = rr.multiFactorSession) || void 0 === Qr ? void 0 : Qr.idToken) return pZ._fromIdtoken(rr.multiFactorSession.idToken)
            }
            return null
          }
        }
        class xZ {
          constructor(rr, Sr, Qr) {
            this.session = rr, this.hints = Sr, this.signInResolver = Qr
          }
          static _fromError(rr, Sr) {
            const Qr = HS(rr),
              Zr = Sr.customData._serverResponse,
              Wr = (Zr.mfaInfo || []).map((rr => vQ._fromServerResponse(Qr, rr)));
            vr(Zr.mfaPendingCredential, Qr, "internal-error");
            const ar = pZ._fromMfaPendingCredential(Zr.mfaPendingCredential);
            return new xZ(ar, Wr, (async rr => {
              const Wr = await rr._process(Qr, ar);
              delete Zr.mfaInfo, delete Zr.mfaPendingCredential;
              const jr = Object.assign(Object.assign({}, Zr), {
                idToken: Wr.idToken,
                refreshToken: Wr.refreshToken
              });
              switch (Sr.operationType) {
                case "signIn":
                  const rr = await pQ._fromIdTokenResponse(Qr, Sr.operationType, jr);
                  return await Qr._updateCurrentUser(rr.user), rr;
                case "reauthenticate":
                  return vr(Sr.user, Qr, "internal-error"), pQ._forOperation(Sr.user, Sr.operationType, jr);
                default:
                  er(Qr, "internal-error")
              }
            }))
          }
          async resolveSignIn(rr) {
            const Sr = rr;
            return this.signInResolver(Sr)
          }
        }

        function mZ(rr, Sr) {
          var Qr;
          const Wr = (0, Zr.R)(rr),
            ar = Sr;
          return vr(Sr.customData.operationType, Wr, "argument-error"), vr(null === (Qr = ar.customData._serverResponse) || void 0 === Qr ? void 0 : Qr.mfaPendingCredential, Wr, "argument-error"), xZ._fromError(Wr, ar)
        }
        class NZ {
          constructor(rr) {
            this.user = rr, this.enrolledFactors = [], rr._onReload((Sr => {
              Sr.mfaInfo && (this.enrolledFactors = Sr.mfaInfo.map((Sr => vQ._fromServerResponse(rr.auth, Sr))))
            }))
          }
          static _fromUser(rr) {
            return new NZ(rr)
          }
          async getSession() {
            return pZ._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(rr, Sr) {
            const Qr = rr,
              Zr = await this.getSession(),
              Wr = await Dr(this.user, Qr._process(this.user.auth, Zr, Sr));
            return await this.user._updateTokensIfNecessary(Wr), this.user.reload()
          }
          async unenroll(rr) {
            const Sr = "string" === typeof rr ? rr : rr.uid,
              Qr = await this.user.getIdToken();
            try {
              const rr = await Dr(this.user, (Zr = this.user.auth, Wr = {
                idToken: Qr,
                mfaEnrollmentId: Sr
              }, Gr(Zr, "POST", "/v2/accounts/mfaEnrollment:withdraw", Mr(Zr, Wr))));
              this.enrolledFactors = this.enrolledFactors.filter((rr => {
                let {
                  uid: Qr
                } = rr;
                return Qr !== Sr
              })), await this.user._updateTokensIfNecessary(rr), await this.user.reload()
            } catch (ar) {
              throw ar
            }
            var Zr, Wr
          }
        }
        const UZ = new WeakMap;

        function tZ(rr) {
          const Sr = (0, Zr.R)(rr);
          return UZ.has(Sr) || UZ.set(Sr, NZ._fromUser(Sr)), UZ.get(Sr)
        }
        const hZ = "__sak";
        class zZ {
          constructor(rr, Sr) {
            this.storageRetriever = rr, this.type = Sr
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(hZ, "1"), this.storage.removeItem(hZ), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (rr) {
              return Promise.resolve(!1)
            }
          }
          _set(rr, Sr) {
            return this.storage.setItem(rr, JSON.stringify(Sr)), Promise.resolve()
          }
          _get(rr) {
            const Sr = this.storage.getItem(rr);
            return Promise.resolve(Sr ? JSON.parse(Sr) : null)
          }
          _remove(rr) {
            return this.storage.removeItem(rr), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class YZ extends zZ {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (rr, Sr) => this.onStorageEvent(rr, Sr), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const rr = (0, Zr.V)();
              return mS(rr) || YS(rr)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (rr) {
                return !1
              }
            }(), this.fallbackToPolling = nS(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(rr) {
            for (const Sr of Object.keys(this.listeners)) {
              const Qr = this.storage.getItem(Sr),
                Zr = this.localCache[Sr];
              Qr !== Zr && rr(Sr, Zr, Qr)
            }
          }
          onStorageEvent(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!rr.key) return void this.forAllChangedKeys(((rr, Sr, Qr) => {
              this.notifyListeners(rr, Qr)
            }));
            const Qr = rr.key;
            if (Sr ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Zr = this.storage.getItem(Qr);
              if (rr.newValue !== Zr) null !== rr.newValue ? this.storage.setItem(Qr, rr.newValue) : this.storage.removeItem(Qr);
              else if (this.localCache[Qr] === rr.newValue && !Sr) return
            }
            const Wr = () => {
                const rr = this.storage.getItem(Qr);
                (Sr || this.localCache[Qr] !== rr) && this.notifyListeners(Qr, rr)
              },
              ar = this.storage.getItem(Qr);
            (0, Zr.$)() && 10 === document.documentMode && ar !== rr.newValue && rr.newValue !== rr.oldValue ? setTimeout(Wr, 10) : Wr()
          }
          notifyListeners(rr, Sr) {
            this.localCache[rr] = Sr;
            const Qr = this.listeners[rr];
            if (Qr)
              for (const Zr of Array.from(Qr)) Zr(Sr ? JSON.parse(Sr) : Sr)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((rr, Sr, Qr) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: rr,
                  oldValue: Sr,
                  newValue: Qr
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
          _addListener(rr, Sr) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[rr] || (this.listeners[rr] = new Set, this.localCache[rr] = this.storage.getItem(rr)), this.listeners[rr].add(Sr)
          }
          _removeListener(rr, Sr) {
            this.listeners[rr] && (this.listeners[rr].delete(Sr), 0 === this.listeners[rr].size && delete this.listeners[rr]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(rr, Sr) {
            await super._set(rr, Sr), this.localCache[rr] = JSON.stringify(Sr)
          }
          async _get(rr) {
            const Sr = await super._get(rr);
            return this.localCache[rr] = JSON.stringify(Sr), Sr
          }
          async _remove(rr) {
            await super._remove(rr), delete this.localCache[rr]
          }
        }
        YZ.type = "LOCAL";
        const nZ = YZ;
        class eZ extends zZ {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(rr, Sr) {}
          _removeListener(rr, Sr) {}
        }
        eZ.type = "SESSION";
        const KZ = eZ;
        class yZ {
          constructor(rr) {
            this.eventTarget = rr, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(rr) {
            const Sr = this.receivers.find((Sr => Sr.isListeningto(rr)));
            if (Sr) return Sr;
            const Qr = new yZ(rr);
            return this.receivers.push(Qr), Qr
          }
          isListeningto(rr) {
            return this.eventTarget === rr
          }
          async handleEvent(rr) {
            const Sr = rr,
              {
                eventId: Qr,
                eventType: Zr,
                data: Wr
              } = Sr.data,
              ar = this.handlersMap[Zr];
            if (!(null === ar || void 0 === ar ? void 0 : ar.size)) return;
            Sr.ports[0].postMessage({
              status: "ack",
              eventId: Qr,
              eventType: Zr
            });
            const jr = Array.from(ar).map((async rr => rr(Sr.origin, Wr))),
              Ir = await
            function(rr) {
              return Promise.all(rr.map((async rr => {
                try {
                  return {
                    fulfilled: !0,
                    value: await rr
                  }
                } catch (Sr) {
                  return {
                    fulfilled: !1,
                    reason: Sr
                  }
                }
              })))
            }(jr);
            Sr.ports[0].postMessage({
              status: "done",
              eventId: Qr,
              eventType: Zr,
              response: Ir
            })
          }
          _subscribe(rr, Sr) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[rr] || (this.handlersMap[rr] = new Set), this.handlersMap[rr].add(Sr)
          }
          _unsubscribe(rr, Sr) {
            this.handlersMap[rr] && Sr && this.handlersMap[rr].delete(Sr), Sr && 0 !== this.handlersMap[rr].size || delete this.handlersMap[rr], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function BZ() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            Qr = "";
          for (let Zr = 0; Zr < Sr; Zr++) Qr += Math.floor(10 * Math.random());
          return rr + Qr
        }
        yZ.receivers = [];
        class TZ {
          constructor(rr) {
            this.target = rr, this.handlers = new Set
          }
          removeMessageHandler(rr) {
            rr.messageChannel && (rr.messageChannel.port1.removeEventListener("message", rr.rK), rr.messageChannel.port1.close()), this.handlers.delete(rr)
          }
          async _send(rr, Sr) {
            let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Zr = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Zr) throw new Error("connection_unavailable");
            let Wr, ar;
            return new Promise(((jr, Ir) => {
              const fr = BZ("", 20);
              Zr.port1.start();
              const Er = setTimeout((() => {
                Ir(new Error("unsupported_event"))
              }), Qr);
              ar = {
                messageChannel: Zr,
                rK(rr) {
                  const Sr = rr;
                  if (Sr.data.eventId === fr) switch (Sr.data.status) {
                    case "ack":
                      clearTimeout(Er), Wr = setTimeout((() => {
                        Ir(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Wr), jr(Sr.data.response);
                      break;
                    default:
                      clearTimeout(Er), clearTimeout(Wr), Ir(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(ar), Zr.port1.addEventListener("message", ar.rK), this.target.postMessage({
                eventType: rr,
                eventId: fr,
                data: Sr
              }, [Zr.port2])
            })).finally((() => {
              ar && this.removeMessageHandler(ar)
            }))
          }
        }

        function vZ() {
          return window
        }

        function OZ() {
          return "undefined" !== typeof vZ().WorkerGlobalScope && "function" === typeof vZ().importScripts
        }
        const LZ = "firebaseLocalStorageDb",
          lZ = "firebaseLocalStorage",
          XZ = "fbase_key";
        class PZ {
          constructor(rr) {
            this.request = rr
          }
          toPromise() {
            return new Promise(((rr, Sr) => {
              this.request.addEventListener("success", (() => {
                rr(this.request.result)
              })), this.request.addEventListener("error", (() => {
                Sr(this.request.error)
              }))
            }))
          }
        }

        function HZ(rr, Sr) {
          return rr.transaction([lZ], Sr ? "readwrite" : "readonly").objectStore(lZ)
        }

        function qZ() {
          const rr = indexedDB.open(LZ, 1);
          return new Promise(((Sr, Qr) => {
            rr.addEventListener("error", (() => {
              Qr(rr.error)
            })), rr.addEventListener("upgradeneeded", (() => {
              const Sr = rr.result;
              try {
                Sr.createObjectStore(lZ, {
                  keyPath: XZ
                })
              } catch (Zr) {
                Qr(Zr)
              }
            })), rr.addEventListener("success", (async () => {
              const Qr = rr.result;
              Qr.objectStoreNames.contains(lZ) ? Sr(Qr) : (Qr.close(), await
                function() {
                  const rr = indexedDB.deleteDatabase(LZ);
                  return new PZ(rr).toPromise()
                }(), Sr(await qZ()))
            }))
          }))
        }
        async function RZ(rr, Sr, Qr) {
          const Zr = HZ(rr, !0).put({
            [XZ]: Sr,
            value: Qr
          });
          return new PZ(Zr).toPromise()
        }

        function gZ(rr, Sr) {
          const Qr = HZ(rr, !0).delete(Sr);
          return new PZ(Qr).toPromise()
        }
        class CZ {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await qZ()), this.db
          }
          async _withRetries(rr) {
            let Sr = 0;
            for (;;) try {
              const Sr = await this._openDb();
              return await rr(Sr)
            } catch (Qr) {
              if (Sr++ > 3) throw Qr;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return OZ() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = yZ._getInstance(OZ() ? self : null), this.receiver._subscribe("keyChanged", (async (rr, Sr) => ({
              keyProcessed: (await this._poll()).includes(Sr.key)
            }))), this.receiver._subscribe("ping", (async (rr, Sr) => ["keyChanged"]))
          }
          async initializeSender() {
            var rr, Sr;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (rr) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new TZ(this.activeServiceWorker);
            const Qr = await this.sender._send("ping", {}, 800);
            Qr && (null === (rr = Qr[0]) || void 0 === rr ? void 0 : rr.fulfilled) && (null === (Sr = Qr[0]) || void 0 === Sr ? void 0 : Sr.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(rr) {
            if (this.sender && this.activeServiceWorker && function() {
                var rr;
                return (null === (rr = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === rr ? void 0 : rr.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: rr
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (Sr) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const rr = await qZ();
              return await RZ(rr, hZ, "1"), await gZ(rr, hZ), !0
            } catch (rr) {}
            return !1
          }
          async _withPendingWrite(rr) {
            this.pendingWrites++;
            try {
              await rr()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(rr, Sr) {
            return this._withPendingWrite((async () => (await this._withRetries((Qr => RZ(Qr, rr, Sr))), this.localCache[rr] = Sr, this.notifyServiceWorker(rr))))
          }
          async _get(rr) {
            const Sr = await this._withRetries((Sr => async function(rr, Sr) {
              const Qr = HZ(rr, !1).get(Sr),
                Zr = await new PZ(Qr).toPromise();
              return void 0 === Zr ? null : Zr.value
            }(Sr, rr)));
            return this.localCache[rr] = Sr, Sr
          }
          async _remove(rr) {
            return this._withPendingWrite((async () => (await this._withRetries((Sr => gZ(Sr, rr))), delete this.localCache[rr], this.notifyServiceWorker(rr))))
          }
          async _poll() {
            const rr = await this._withRetries((rr => {
              const Sr = HZ(rr, !1).getAll();
              return new PZ(Sr).toPromise()
            }));
            if (!rr) return [];
            if (0 !== this.pendingWrites) return [];
            const Sr = [],
              Qr = new Set;
            for (const {
                fbase_key: Zr,
                value: Wr
              }
              of rr) Qr.add(Zr), JSON.stringify(this.localCache[Zr]) !== JSON.stringify(Wr) && (this.notifyListeners(Zr, Wr), Sr.push(Zr));
            for (const Zr of Object.keys(this.localCache)) this.localCache[Zr] && !Qr.has(Zr) && (this.notifyListeners(Zr, null), Sr.push(Zr));
            return Sr
          }
          notifyListeners(rr, Sr) {
            this.localCache[rr] = Sr;
            const Qr = this.listeners[rr];
            if (Qr)
              for (const Zr of Array.from(Qr)) Zr(Sr)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(rr, Sr) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[rr] || (this.listeners[rr] = new Set, this._get(rr)), this.listeners[rr].add(Sr)
          }
          _removeListener(rr, Sr) {
            this.listeners[rr] && (this.listeners[rr].delete(Sr), 0 === this.listeners[rr].size && delete this.listeners[rr]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        CZ.type = "LOCAL";
        const MZ = CZ;
        const GZ = 1e12;
        class kZ {
          constructor(rr) {
            this.auth = rr, this.counter = GZ, this._widgets = new Map
          }
          render(rr, Sr) {
            const Qr = this.counter;
            return this._widgets.set(Qr, new AZ(rr, this.auth.name, Sr || {})), this.counter++, Qr
          }
          reset(rr) {
            var Sr;
            const Qr = rr || GZ;
            null === (Sr = this._widgets.get(Qr)) || void 0 === Sr || Sr.delete(), this._widgets.delete(Qr)
          }
          getResponse(rr) {
            var Sr;
            const Qr = rr || GZ;
            return (null === (Sr = this._widgets.get(Qr)) || void 0 === Sr ? void 0 : Sr.getResponse()) || ""
          }
          async execute(rr) {
            var Sr;
            const Qr = rr || GZ;
            return null === (Sr = this._widgets.get(Qr)) || void 0 === Sr || Sr.execute(), ""
          }
        }
        class AZ {
          constructor(rr, Sr, Qr) {
            this.params = Qr, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Zr = "string" === typeof rr ? document.getElementById(rr) : rr;
            vr(Zr, "argument-error", {
              appName: Sr
            }), this.container = Zr, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(rr) {
                const Sr = [],
                  Qr = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Zr = 0; Zr < rr; Zr++) Sr.push(Qr.charAt(Math.floor(Math.random() * Qr.length)));
                return Sr.join("")
              }(50);
              const {
                callback: rr,
                "expired-callback": Sr
              } = this.params;
              if (rr) try {
                rr(this.responseToken)
              } catch (Qr) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Sr) try {
                  Sr()
                } catch (Qr) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const VZ = OS("rcb"),
          iZ = new Hr(3e4, 6e4);
        class wZ {
          constructor() {
            var rr;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (rr = vZ().grecaptcha) || void 0 === rr ? void 0 : rr.render)
          }
          load(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return vr(function(rr) {
              return rr.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(rr)
            }(Sr), rr, "argument-error"), this.shouldResolveImmediately(Sr) && yS(vZ().grecaptcha) ? Promise.resolve(vZ().grecaptcha) : new Promise(((Qr, Wr) => {
              const ar = vZ().setTimeout((() => {
                Wr(Kr(rr, "network-request-failed"))
              }), iZ.get());
              vZ()[VZ] = () => {
                vZ().clearTimeout(ar), delete vZ()[VZ];
                const Zr = vZ().grecaptcha;
                if (!Zr || !yS(Zr)) return void Wr(Kr(rr, "internal-error"));
                const jr = Zr.render;
                Zr.render = (rr, Sr) => {
                  const Qr = jr(rr, Sr);
                  return this.counter++, Qr
                }, this.hostLanguage = Sr, Qr(Zr)
              };
              vS(`https://www.google.com/recaptcha/api.js??${(0,Zr.ib)({onload:VZ,render:"explicit",hl:Sr})}`).catch((() => {
                clearTimeout(ar), Wr(Kr(rr, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(rr) {
            var Sr;
            return !!(null === (Sr = vZ().grecaptcha) || void 0 === Sr ? void 0 : Sr.render) && (rr === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class cZ {
          async load(rr) {
            return new kZ(rr)
          }
          clearedOneInstance() {}
        }
        const FZ = "recaptcha",
          oZ = {
            theme: "light",
            type: "image"
          };
        class bZ {
          constructor(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, oZ),
              Qr = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Sr, this.type = FZ, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = HS(Qr), this.isInvisible = "invisible" === this.parameters.size, vr("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Zr = "string" === typeof rr ? document.getElementById(rr) : rr;
            vr(Zr, this.auth, "argument-error"), this.container = Zr, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new cZ : new wZ, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const rr = await this.render(),
              Sr = this.getAssertedRecaptcha(),
              Qr = Sr.getResponse(rr);
            return Qr || new Promise((Qr => {
              const Zr = rr => {
                rr && (this.tokenChangeListeners.delete(Zr), Qr(rr))
              };
              this.tokenChangeListeners.add(Zr), this.isInvisible && Sr.execute(rr)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (rr) {
              return Promise.reject(rr)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((rr => {
              throw this.renderPromise = null, rr
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((rr => {
              this.container.removeChild(rr)
            }))
          }
          validateStartingState() {
            vr(!this.parameters.sitekey, this.auth, "argument-error"), vr(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), vr("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(rr) {
            return Sr => {
              if (this.tokenChangeListeners.forEach((rr => rr(Sr))), "function" === typeof rr) rr(Sr);
              else if ("string" === typeof rr) {
                const Qr = vZ()[rr];
                "function" === typeof Qr && Qr(Sr)
              }
            }
          }
          assertNotDestroyed() {
            vr(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let rr = this.container;
              if (!this.isInvisible) {
                const Sr = document.createElement("div");
                rr.appendChild(Sr), rr = Sr
              }
              this.widgetId = this.getAssertedRecaptcha().render(rr, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            vr(Xr() && !OZ(), this.auth, "internal-error"), await
            function() {
              let rr = null;
              return new Promise((Sr => {
                "complete" !== document.readyState ? (rr = () => Sr(), window.addEventListener("load", rr)) : Sr()
              })).catch((Sr => {
                throw rr && window.removeEventListener("load", rr), Sr
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const rr = await async function(rr) {
              return (await Gr(rr, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            vr(rr, this.auth, "internal-error"), this.parameters.sitekey = rr
          }
          getAssertedRecaptcha() {
            return vr(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class JZ {
          constructor(rr, Sr) {
            this.verificationId = rr, this.onConfirmation = Sr
          }
          confirm(rr) {
            const Sr = DS._fromVerification(this.verificationId, rr);
            return this.onConfirmation(Sr)
          }
        }
        async function DZ(rr, Sr, Qr) {
          const Wr = HS(rr),
            ar = await uZ(Wr, Sr, (0, Zr.R)(Qr));
          return new JZ(ar, (rr => KQ(Wr, rr)))
        }
        async function dZ(rr, Sr, Qr) {
          const Wr = (0, Zr.R)(rr);
          await YQ(!1, Wr, "phone");
          const ar = await uZ(Wr.auth, Sr, (0, Zr.R)(Qr));
          return new JZ(ar, (rr => yQ(Wr, rr)))
        }
        async function sZ(rr, Sr, Qr) {
          const Wr = (0, Zr.R)(rr),
            ar = await uZ(Wr.auth, Sr, (0, Zr.R)(Qr));
          return new JZ(ar, (rr => BQ(Wr, rr)))
        }
        async function uZ(rr, Sr, Qr) {
          var Zr;
          const Wr = await Qr.verify();
          try {
            let ar;
            if (vr("string" === typeof Wr, rr, "argument-error"), vr(Qr.type === FZ, rr, "argument-error"), ar = "string" === typeof Sr ? {
                phoneNumber: Sr
              } : Sr, "session" in ar) {
              const Sr = ar.session;
              if ("phoneNumber" in ar) {
                vr("enroll" === Sr.type, rr, "internal-error");
                const Qr = await
                function(rr, Sr) {
                  return Gr(rr, "POST", "/v2/accounts/mfaEnrollment:start", Mr(rr, Sr))
                }(rr, {
                  idToken: Sr.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: ar.phoneNumber,
                    recaptchaToken: Wr
                  }
                });
                return Qr.phoneSessionInfo.sessionInfo
              } {
                vr("signin" === Sr.type, rr, "internal-error");
                const Qr = (null === (Zr = ar.multiFactorHint) || void 0 === Zr ? void 0 : Zr.uid) || ar.multiFactorUid;
                vr(Qr, rr, "missing-multi-factor-info");
                const jr = await
                function(rr, Sr) {
                  return Gr(rr, "POST", "/v2/accounts/mfaSignIn:start", Mr(rr, Sr))
                }(rr, {
                  mfaPendingCredential: Sr.credential,
                  mfaEnrollmentId: Qr,
                  phoneSignInInfo: {
                    recaptchaToken: Wr
                  }
                });
                return jr.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Sr
              } = await async function(rr, Sr) {
                return Gr(rr, "POST", "/v1/accounts:sendVerificationCode", Mr(rr, Sr))
              }(rr, {
                phoneNumber: ar.phoneNumber,
                recaptchaToken: Wr
              });
              return Sr
            }
          } finally {
            Qr._reset()
          }
        }
        async function rW(rr, Sr) {
          await zQ((0, Zr.R)(rr), Sr)
        }
        class SW {
          constructor(rr) {
            this.providerId = SW.PROVIDER_ID, this.auth = HS(rr)
          }
          verifyPhoneNumber(rr, Sr) {
            return uZ(this.auth, rr, (0, Zr.R)(Sr))
          }
          static credential(rr, Sr) {
            return DS._fromVerification(rr, Sr)
          }
          static credentialFromResult(rr) {
            const Sr = rr;
            return SW.credentialFromTaggedObject(Sr)
          }
          static credentialFromError(rr) {
            return SW.credentialFromTaggedObject(rr.customData || {})
          }
          static credentialFromTaggedObject(rr) {
            let {
              _tokenResponse: Sr
            } = rr;
            if (!Sr) return null;
            const {
              phoneNumber: Qr,
              temporaryProof: Zr
            } = Sr;
            return Qr && Zr ? DS._fromTokenResponse(Qr, Zr) : null
          }
        }

        function QW(rr, Sr) {
          return Sr ? aS(Sr) : (vr(rr._popupRedirectResolver, rr, "argument-error"), rr._popupRedirectResolver)
        }
        SW.PROVIDER_ID = "phone", SW.PHONE_SIGN_IN_METHOD = "phone";
        class ZW extends GS {
          constructor(rr) {
            super("custom", "custom"), this.params = rr
          }
          _getIdTokenResponse(rr) {
            return oS(rr, this._buildIdpRequest())
          }
          _linkToIdToken(rr, Sr) {
            return oS(rr, this._buildIdpRequest(Sr))
          }
          _getReauthenticationResolver(rr) {
            return oS(rr, this._buildIdpRequest())
          }
          _buildIdpRequest(rr) {
            const Sr = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return rr && (Sr.idToken = rr), Sr
          }
        }

        function WW(rr) {
          return eQ(rr.auth, new ZW(rr), rr.bypassAuthState)
        }

        function aW(rr) {
          const {
            auth: Sr,
            user: Qr
          } = rr;
          return vr(Qr, Sr, "internal-error"), nQ(Qr, new ZW(rr), rr.bypassAuthState)
        }
        async function jW(rr) {
          const {
            auth: Sr,
            user: Qr
          } = rr;
          return vr(Qr, Sr, "internal-error"), zQ(Qr, new ZW(rr), rr.bypassAuthState)
        }
        class IW {
          constructor(rr, Sr, Qr, Zr) {
            let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = rr, this.resolver = Qr, this.user = Zr, this.bypassAuthState = Wr, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Sr) ? Sr : [Sr]
          }
          execute() {
            return new Promise((async (rr, Sr) => {
              this.pendingPromise = {
                resolve: rr,
                reject: Sr
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (Qr) {
                this.reject(Qr)
              }
            }))
          }
          async onAuthEvent(rr) {
            const {
              urlResponse: Sr,
              sessionId: Qr,
              postBody: Zr,
              tenantId: Wr,
              error: ar,
              type: jr
            } = rr;
            if (ar) return void this.reject(ar);
            const Ir = {
              auth: this.auth,
              requestUri: Sr,
              sessionId: Qr,
              tenantId: Wr || void 0,
              postBody: Zr || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(jr)(Ir))
            } catch (fr) {
              this.reject(fr)
            }
          }
          onError(rr) {
            this.reject(rr)
          }
          getIdpTask(rr) {
            switch (rr) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return WW;
              case "linkViaPopup":
              case "linkViaRedirect":
                return jW;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return aW;
              default:
                er(this.auth, "internal-error")
            }
          }
          resolve(rr) {
            Lr(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(rr), this.unregisterAndCleanUp()
          }
          reject(rr) {
            Lr(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(rr), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const fW = new Hr(2e3, 1e4);
        async function EW(rr, Sr, Qr) {
          const Zr = HS(rr);
          Br(rr, Sr, rQ);
          const Wr = QW(Zr, Qr);
          return new mW(Zr, "signInViaPopup", Sr, Wr).executeNotNull()
        }
        async function pW(rr, Sr, Qr) {
          const Wr = (0, Zr.R)(rr);
          Br(Wr.auth, Sr, rQ);
          const ar = QW(Wr.auth, Qr);
          return new mW(Wr.auth, "reauthViaPopup", Sr, ar, Wr).executeNotNull()
        }
        async function xW(rr, Sr, Qr) {
          const Wr = (0, Zr.R)(rr);
          Br(Wr.auth, Sr, rQ);
          const ar = QW(Wr.auth, Qr);
          return new mW(Wr.auth, "linkViaPopup", Sr, ar, Wr).executeNotNull()
        }
        class mW extends IW {
          constructor(rr, Sr, Qr, Zr, Wr) {
            super(rr, Sr, Zr, Wr), this.provider = Qr, this.authWindow = null, this.pollId = null, mW.currentPopupAction && mW.currentPopupAction.cancel(), mW.currentPopupAction = this
          }
          async executeNotNull() {
            const rr = await this.execute();
            return vr(rr, this.auth, "internal-error"), rr
          }
          async onExecution() {
            Lr(1 === this.filter.length, "Popup operations only handle one event");
            const rr = BZ();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], rr), this.authWindow.associatedEvent = rr, this.resolver._originValidation(this.auth).catch((rr => {
              this.reject(rr)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (rr => {
              rr || this.reject(Kr(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var rr;
            return (null === (rr = this.authWindow) || void 0 === rr ? void 0 : rr.associatedEvent) || null
          }
          cancel() {
            this.reject(Kr(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, mW.currentPopupAction = null
          }
          pollUserCancellation() {
            const rr = () => {
              var Sr, Qr;
              (null === (Qr = null === (Sr = this.authWindow) || void 0 === Sr ? void 0 : Sr.window) || void 0 === Qr ? void 0 : Qr.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Kr(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(rr, fW.get())
            };
            rr()
          }
        }
        mW.currentPopupAction = null;
        const NW = "pendingRedirect",
          UW = new Map;
        class tW extends IW {
          constructor(rr, Sr) {
            super(rr, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Sr, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let rr = UW.get(this.auth._key());
            if (!rr) {
              try {
                const Sr = await async function(rr, Sr) {
                  const Qr = nW(Sr),
                    Zr = YW(rr);
                  if (!await Zr._isAvailable()) return !1;
                  const Wr = "true" === await Zr._get(Qr);
                  return await Zr._remove(Qr), Wr
                }(this.resolver, this.auth) ? await super.execute() : null;
                rr = () => Promise.resolve(Sr)
              } catch (Sr) {
                rr = () => Promise.reject(Sr)
              }
              UW.set(this.auth._key(), rr)
            }
            return this.bypassAuthState || UW.set(this.auth._key(), (() => Promise.resolve(null))), rr()
          }
          async onAuthEvent(rr) {
            if ("signInViaRedirect" === rr.type) return super.onAuthEvent(rr);
            if ("unknown" !== rr.type) {
              if (rr.eventId) {
                const Sr = await this.auth._redirectUserForId(rr.eventId);
                if (Sr) return this.user = Sr, super.onAuthEvent(rr);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function hW(rr, Sr) {
          return YW(rr)._set(nW(Sr), "true")
        }

        function zW(rr, Sr) {
          UW.set(rr._key(), Sr)
        }

        function YW(rr) {
          return aS(rr._redirectPersistence)
        }

        function nW(rr) {
          return fS(NW, rr.config.apiKey, rr.name)
        }

        function eW(rr, Sr, Qr) {
          return async function(rr, Sr, Qr) {
            const Zr = HS(rr);
            Br(rr, Sr, rQ), await Zr._initializationPromise;
            const Wr = QW(Zr, Qr);
            return await hW(Wr, Zr), Wr._openRedirect(Zr, Sr, "signInViaRedirect")
          }(rr, Sr, Qr)
        }

        function KW(rr, Sr, Qr) {
          return async function(rr, Sr, Qr) {
            const Wr = (0, Zr.R)(rr);
            Br(Wr.auth, Sr, rQ), await Wr.auth._initializationPromise;
            const ar = QW(Wr.auth, Qr);
            await hW(ar, Wr.auth);
            const jr = await vW(Wr);
            return ar._openRedirect(Wr.auth, Sr, "reauthViaRedirect", jr)
          }(rr, Sr, Qr)
        }

        function yW(rr, Sr, Qr) {
          return async function(rr, Sr, Qr) {
            const Wr = (0, Zr.R)(rr);
            Br(Wr.auth, Sr, rQ), await Wr.auth._initializationPromise;
            const ar = QW(Wr.auth, Qr);
            await YQ(!1, Wr, Sr.providerId), await hW(ar, Wr.auth);
            const jr = await vW(Wr);
            return ar._openRedirect(Wr.auth, Sr, "linkViaRedirect", jr)
          }(rr, Sr, Qr)
        }
        async function BW(rr, Sr) {
          return await HS(rr)._initializationPromise, TW(rr, Sr, !1)
        }
        async function TW(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Zr = HS(rr),
            Wr = QW(Zr, Sr),
            ar = new tW(Zr, Wr, Qr),
            jr = await ar.execute();
          return jr && !Qr && (delete jr.user._redirectEventId, await Zr._persistUserIfCurrent(jr.user), await Zr._setRedirectUser(null, Sr)), jr
        }
        async function vW(rr) {
          const Sr = BZ(`${rr.uid}:::`);
          return rr._redirectEventId = Sr, await rr.auth._setRedirectUser(rr), await rr.auth._persistUserIfCurrent(rr), Sr
        }
        class OW {
          constructor(rr) {
            this.auth = rr, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(rr) {
            this.consumers.add(rr), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, rr) && (this.sendToConsumer(this.queuedRedirectEvent, rr), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(rr) {
            this.consumers.delete(rr)
          }
          onEvent(rr) {
            if (this.hasEventBeenHandled(rr)) return !1;
            let Sr = !1;
            return this.consumers.forEach((Qr => {
              this.isEventForConsumer(rr, Qr) && (Sr = !0, this.sendToConsumer(rr, Qr), this.saveEventToCache(rr))
            })), this.hasHandledPotentialRedirect || ! function(rr) {
              switch (rr.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return lW(rr);
                default:
                  return !1
              }
            }(rr) || (this.hasHandledPotentialRedirect = !0, Sr || (this.queuedRedirectEvent = rr, Sr = !0)), Sr
          }
          sendToConsumer(rr, Sr) {
            var Qr;
            if (rr.error && !lW(rr)) {
              const Zr = (null === (Qr = rr.error.code) || void 0 === Qr ? void 0 : Qr.split("auth/")[1]) || "internal-error";
              Sr.onError(Kr(this.auth, Zr))
            } else Sr.onAuthEvent(rr)
          }
          isEventForConsumer(rr, Sr) {
            const Qr = null === Sr.eventId || !!rr.eventId && rr.eventId === Sr.eventId;
            return Sr.filter.includes(rr.type) && Qr
          }
          hasEventBeenHandled(rr) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(LW(rr))
          }
          saveEventToCache(rr) {
            this.cachedEventUids.add(LW(rr)), this.lastProcessedEventTime = Date.now()
          }
        }

        function LW(rr) {
          return [rr.type, rr.eventId, rr.sessionId, rr.tenantId].filter((rr => rr)).join("-")
        }

        function lW(rr) {
          let {
            type: Sr,
            error: Qr
          } = rr;
          return "unknown" === Sr && "auth/no-auth-event" === (null === Qr || void 0 === Qr ? void 0 : Qr.code)
        }
        const XW = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          PW = /^https?/;
        async function HW(rr) {
          if (rr.config.emulator) return;
          const {
            authorizedDomains: Sr
          } = await async function(rr) {
            return Gr(rr, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(rr);
          for (const Zr of Sr) try {
            if (qW(Zr)) return
          } catch (Qr) {}
          er(rr, "unauthorized-domain")
        }

        function qW(rr) {
          const Sr = lr(),
            {
              protocol: Qr,
              hostname: Zr
            } = new URL(Sr);
          if (rr.startsWith("chrome-extension://")) {
            const Wr = new URL(rr);
            return "" === Wr.hostname && "" === Zr ? "chrome-extension:" === Qr && rr.replace("chrome-extension://", "") === Sr.replace("chrome-extension://", "") : "chrome-extension:" === Qr && Wr.hostname === Zr
          }
          if (!PW.test(Qr)) return !1;
          if (XW.test(rr)) return Zr === rr;
          const Wr = rr.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Wr + "|" + Wr + ")$", "i").test(Zr)
        }
        const RW = new Hr(3e4, 6e4);

        function gW() {
          const rr = vZ().___jsl;
          if (null === rr || void 0 === rr ? void 0 : rr.H)
            for (const Sr of Object.keys(rr.H))
              if (rr.H[Sr].r = rr.H[Sr].r || [], rr.H[Sr].L = rr.H[Sr].L || [], rr.H[Sr].r = [...rr.H[Sr].L], rr.CP)
                for (let Qr = 0; Qr < rr.CP.length; Qr++) rr.CP[Qr] = null
        }
        let CW = null;

        function MW(rr) {
          return CW = CW || function(rr) {
            return new Promise(((Sr, Qr) => {
              var Zr, Wr, ar;

              function jr() {
                gW(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Sr(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    gW(), Qr(Kr(rr, "network-request-failed"))
                  },
                  timeout: RW.get()
                })
              }
              if (null === (Wr = null === (Zr = vZ().gapi) || void 0 === Zr ? void 0 : Zr.iframes) || void 0 === Wr ? void 0 : Wr.Iframe) Sr(gapi.iframes.getContext());
              else {
                if (!(null === (ar = vZ().gapi) || void 0 === ar ? void 0 : ar.load)) {
                  const Sr = OS("iframefcb");
                  return vZ()[Sr] = () => {
                    gapi.load ? jr() : Qr(Kr(rr, "network-request-failed"))
                  }, vS(`https://apis.google.com/js/api.js?onload=${Sr}`).catch((rr => Qr(rr)))
                }
                jr()
              }
            })).catch((rr => {
              throw CW = null, rr
            }))
          }(rr), CW
        }
        const GW = new Hr(5e3, 15e3),
          kW = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          AW = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function VW(rr) {
          const Sr = rr.config;
          vr(Sr.authDomain, rr, "auth-domain-config-required");
          const Qr = Sr.emulator ? qr(Sr, "emulator/auth/iframe") : `https://${rr.config.authDomain}/__/auth/iframe`,
            ar = {
              apiKey: Sr.apiKey,
              appName: rr.name,
              v: Wr.f
            },
            jr = AW.get(rr.config.apiHost);
          jr && (ar.eid = jr);
          const Ir = rr._getFrameworks();
          return Ir.length && (ar.fw = Ir.join(",")), `${Qr}?${(0,Zr.ib)(ar).slice(1)}`
        }
        const iW = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class wW {
          constructor(rr) {
            this.window = rr, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (rr) {}
          }
        }

        function cW(rr, Sr, Qr) {
          let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const jr = Math.max((window.screen.availHeight - ar) / 2, 0).toString(),
            Ir = Math.max((window.screen.availWidth - Wr) / 2, 0).toString();
          let fr = "";
          const Er = Object.assign(Object.assign({}, iW), {
              width: Wr.toString(),
              height: ar.toString(),
              top: jr,
              left: Ir
            }),
            pr = (0, Zr.V)().toLowerCase();
          Qr && (fr = NS(pr) ? "_blank" : Qr), xS(pr) && (Sr = Sr || "http://localhost", Er.scrollbars = "yes");
          const xr = Object.entries(Er).reduce(((rr, Sr) => {
            let [Qr, Zr] = Sr;
            return `${rr}${Qr}=${Zr},`
          }), "");
          if (function() {
              var rr;
              return YS(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.V)()) && !!(null === (rr = window.navigator) || void 0 === rr ? void 0 : rr.standalone)
            }(pr) && "_self" !== fr) return function(rr, Sr) {
            const Qr = document.createElement("a");
            Qr.href = rr, Qr.target = Sr;
            const Zr = document.createEvent("MouseEvent");
            Zr.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), Qr.dispatchEvent(Zr)
          }(Sr || "", fr), new wW(null);
          const mr = window.open(Sr || "", fr, xr);
          vr(mr, rr, "popup-blocked");
          try {
            mr.focus()
          } catch (Nr) {}
          return new wW(mr)
        }
        const FW = "__/auth/handler",
          oW = "emulator/auth/handler",
          bW = encodeURIComponent("fac");
        async function JW(rr, Sr, Qr, ar, jr, Ir) {
            vr(rr.config.authDomain, rr, "auth-domain-config-required"), vr(rr.config.apiKey, rr, "invalid-api-key");
            const fr = {
              apiKey: rr.config.apiKey,
              appName: rr.name,
              authType: Qr,
              redirectUrl: ar,
              v: Wr.f,
              eventId: jr
            };
            if (Sr instanceof rQ) {
              Sr.setDefaultLanguage(rr.languageCode), fr.providerId = Sr.providerId || "", (0, Zr._)(Sr.getCustomParameters()) || (fr.customParameters = JSON.stringify(Sr.getCustomParameters()));
              for (const [rr, Sr] of Object.entries(Ir || {})) fr[rr] = Sr
            }
            if (Sr instanceof SQ) {
              const rr = Sr.getScopes().filter((rr => "" !== rr));
              rr.length > 0 && (fr.scopes = rr.join(","))
            }
            rr.tenantId && (fr.tid = rr.tenantId);
            const Er = fr;
            for (const Zr of Object.keys(Er)) void 0 === Er[Zr] && delete Er[Zr];
            const pr = await rr._getAppCheckToken(),
              xr = pr ? `#${bW}=${encodeURIComponent(pr)}` : "";
            return `${function(rr){let{config:Sr}=rr;if(!Sr.emulator)return`
            https: //${Sr.authDomain}/${FW}`;return qr(Sr,oW)}(rr)}?${(0,Zr.ib)(Er).slice(1)}${xr}`}const DW="webStorageSupport";const dW=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KZ,this._completeRedirectFn=TW,this._overrideRedirectResult=zW}async _openPopup(rr,Sr,Qr,Zr){var Wr;Lr(null===(Wr=this.eventManagers[rr._key()])||void 0===Wr?void 0:Wr.manager,"_initialize() not called before _openPopup()");return cW(rr,await JW(rr,Sr,Qr,lr(),Zr),BZ())}async _openRedirect(rr,Sr,Qr,Zr){await this._originValidation(rr);return function(rr){vZ().location.href=rr}(await JW(rr,Sr,Qr,lr(),Zr)),new Promise((()=>{}))}_initialize(rr){const Sr=rr._key();if(this.eventManagers[Sr]){const{manager:rr,promise:Qr}=this.eventManagers[Sr];return rr?Promise.resolve(rr):(Lr(Qr,"If manager is not set, promise should be"),Qr)}const Qr=this.initAndGetManager(rr);return this.eventManagers[Sr]={promise:Qr},Qr.catch((()=>{delete this.eventManagers[Sr]})),Qr}async initAndGetManager(rr){const Sr=await async function(rr){const Sr=await MW(rr),Qr=vZ().gapi;return vr(Qr,rr,"internal-error"),Sr.open({where:document.body,url:VW(rr),messageHandlersFilter:Qr.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kW,dontclear:!0},(Sr=>new Promise((async(Qr,Zr)=>{await Sr.restyle({setHideOnLeave:!1});const Wr=Kr(rr,"network-request-failed"),ar=vZ().setTimeout((()=>{Zr(Wr)}),GW.get());function jr(){vZ().clearTimeout(ar),Qr(Sr)}Sr.ping(jr).then(jr,(()=>{Zr(Wr)}))}))))}(rr),Qr=new OW(rr);return Sr.register("authEvent",(Sr=>{vr(null===Sr||void 0===Sr?void 0:Sr.authEvent,rr,"invalid-auth-event");return{status:Qr.onEvent(Sr.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[rr._key()]={manager:Qr},this.iframes[rr._key()]=Sr,Qr}_isIframeWebStorageSupported(rr,Sr){this.iframes[rr._key()].send(DW,{type:DW},(Qr=>{var Zr;const Wr=null===(Zr=null===Qr||void 0===Qr?void 0:Qr[0])||void 0===Zr?void 0:Zr[DW];void 0!==Wr&&Sr(!!Wr),er(rr,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(rr){const Sr=rr._key();return this.originValidationPromises[Sr]||(this.originValidationPromises[Sr]=HW(rr)),this.originValidationPromises[Sr]}get _shouldInitProactively(){return nS()||mS()||YS()}};class sW{constructor(rr){this.factorId=rr}_process(rr,Sr,Qr){switch(Sr.type){case"enroll":return this._finalizeEnroll(rr,Sr.credential,Qr);case"signin":return this._finalizeSignIn(rr,Sr.credential);default:return Or("unexpected MultiFactorSessionType")}}}class uW extends sW{constructor(rr){super("phone"),this.credential=rr}static _fromCredential(rr){return new uW(rr)}_finalizeEnroll(rr,Sr,Qr){return function(rr,Sr){return Gr(rr,"POST","/v2/accounts/mfaEnrollment:finalize",Mr(rr,Sr))}(rr,{idToken:Sr,displayName:Qr,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(rr,Sr){return function(rr,Sr){return Gr(rr,"POST","/v2/accounts/mfaSignIn:finalize",Mr(rr,Sr))}(rr,{mfaPendingCredential:Sr,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ra{constructor(){}static assertion(rr){return uW._fromCredential(rr)}}ra.FACTOR_ID="phone";class Sa{static assertionForEnrollment(rr,Sr){return Qa._fromSecret(rr,Sr)}static assertionForSignIn(rr,Sr){return Qa._fromEnrollmentId(rr,Sr)}static async generateSecret(rr){const Sr=rr;vr("undefined"!==typeof Sr.auth,"internal-error");const Qr=await(Zr=Sr.auth,Wr={idToken:Sr.credential,totpEnrollmentInfo:{}},Gr(Zr,"POST","/v2/accounts/mfaEnrollment:start",Mr(Zr,Wr)));var Zr,Wr;return Za._fromStartTotpMfaEnrollmentResponse(Qr,Sr.auth)}}Sa.FACTOR_ID="totp";class Qa extends sW{constructor(rr,Sr,Qr){super("totp"),this.otp=rr,this.enrollmentId=Sr,this.secret=Qr}static _fromSecret(rr,Sr){return new Qa(Sr,void 0,rr)}static _fromEnrollmentId(rr,Sr){return new Qa(Sr,rr)}async _finalizeEnroll(rr,Sr,Qr){return vr("undefined"!==typeof this.secret,rr,"argument-error"),function(rr,Sr){return Gr(rr,"POST","/v2/accounts/mfaEnrollment:finalize",Mr(rr,Sr))}(rr,{idToken:Sr,displayName:Qr,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(rr,Sr){vr(void 0!==this.enrollmentId&&void 0!==this.otp,rr,"argument-error");const Qr={verificationCode:this.otp};return function(rr,Sr){return Gr(rr,"POST","/v2/accounts/mfaSignIn:finalize",Mr(rr,Sr))}(rr,{mfaPendingCredential:Sr,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:Qr})}}class Za{constructor(rr,Sr,Qr,Zr,Wr,ar,jr){this.sessionInfo=ar,this.auth=jr,this.secretKey=rr,this.hashingAlgorithm=Sr,this.codeLength=Qr,this.codeIntervalSeconds=Zr,this.enrollmentCompletionDeadline=Wr}static _fromStartTotpMfaEnrollmentResponse(rr,Sr){return new Za(rr.totpSessionInfo.sharedSecretKey,rr.totpSessionInfo.hashingAlgorithm,rr.totpSessionInfo.verificationCodeLength,rr.totpSessionInfo.periodSec,new Date(rr.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),rr.totpSessionInfo.sessionInfo,Sr)}_makeTotpVerificationInfo(rr){return{sessionInfo:this.sessionInfo,verificationCode:rr}}generateQrCodeUrl(rr,Sr){var Qr;let Zr=!1;return(Wa(rr)||Wa(Sr))&&(Zr=!0),Zr&&(Wa(rr)&&(rr=(null===(Qr=this.auth.currentUser)||void 0===Qr?void 0:Qr.email)||"unknownuser"),Wa(Sr)&&(Sr=this.auth.name)),`otpauth://totp/${Sr}:${rr}?secret=${this.secretKey}&issuer=${Sr}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Wa(rr){return"undefined"===typeof rr||0===(null===rr||void 0===rr?void 0:rr.length)}var aa="@firebase/auth",ja="0.23.2";class Ia{constructor(rr){this.auth=rr,this.internalListeners=new Map}getUid(){var rr;return this.assertAuthConfigured(),(null===(rr=this.auth.currentUser)||void 0===rr?void 0:rr.uid)||null}async getToken(rr){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(rr)}}addAuthTokenListener(rr){if(this.assertAuthConfigured(),this.internalListeners.has(rr))return;const Sr=this.auth.onIdTokenChanged((Sr=>{rr((null===Sr||void 0===Sr?void 0:Sr.stsTokenManager.accessToken)||null)}));this.internalListeners.set(rr,Sr),this.updateProactiveRefresh()}removeAuthTokenListener(rr){this.assertAuthConfigured();const Sr=this.internalListeners.get(rr);Sr&&(this.internalListeners.delete(rr),Sr(),this.updateProactiveRefresh())}assertAuthConfigured(){vr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const fa=(0,Zr.O)("authIdTokenMaxAge")||300;let Ea=null;const pa=rr=>async Sr=>{const Qr=Sr&&await Sr.getIdTokenResult(),Zr=Qr&&((new Date).getTime()-Date.parse(Qr.issuedAtTime))/1e3;if(Zr&&Zr>fa)return;const Wr=null===Qr||void 0===Qr?void 0:Qr.token;Ea!==Wr&&(Ea=Wr,await fetch(rr,{method:Wr?"POST":"DELETE",headers:Wr?{Authorization:`Bearer ${Wr}`}:{}}))};function xa(){let rr=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Wr.O)();const Sr=(0,Wr.A)(rr,"auth");if(Sr.isInitialized())return Sr.getImmediate();const Qr=RS(rr,{popupRedirectResolver:dW,persistence:[MZ,nZ,KZ]}),ar=(0,Zr.O)("authTokenSyncURL");if(ar){const rr=pa(ar);WZ(Qr,rr,(()=>rr(Qr.currentUser))),ZZ(Qr,(Sr=>rr(Sr)))}const jr=(0,Zr.K)("auth");return jr&&gS(Qr,`http://${jr}`),Qr}var ma;ma="Browser",(0,Wr.E)(new Ir.f("auth",((rr,Sr)=>{let{options:Qr}=Sr;const Zr=rr.getProvider("app").getImmediate(),Wr=rr.getProvider("heartbeat"),ar=rr.getProvider("app-check-internal"),{apiKey:jr,authDomain:Ir}=Zr.options;vr(jr&&!jr.includes(":"),"invalid-api-key",{appName:Zr.name});const fr={apiKey:jr,authDomain:Ir,clientPlatform:ma,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eS(ma)},Er=new PS(Zr,Wr,ar,fr);return function(rr,Sr){const Qr=(null===Sr||void 0===Sr?void 0:Sr.persistence)||[],Zr=(Array.isArray(Qr)?Qr:[Qr]).map(aS);(null===Sr||void 0===Sr?void 0:Sr.errorMap)&&rr._updateErrorMap(Sr.errorMap),rr._initializeWithPersistence(Zr,null===Sr||void 0===Sr?void 0:Sr.popupRedirectResolver)}(Er,Qr),Er}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((rr,Sr,Qr)=>{rr.getProvider("auth-internal").initialize()}))),(0,Wr.E)(new Ir.f("auth-internal",(rr=>(rr=>new Ia(rr))(HS(rr.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Wr.X)(aa,ja,function(rr){switch(rr){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ma)),(0,Wr.X)(aa,ja,"esm2017")}};Object.freeze(modules);for(const rr in modules)Object.freeze(modules[rr]);