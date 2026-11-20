/*! For license information please see fsa8nn.258.cf3d5666.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
    39956: (bb, cb, sb) => {
        sb.r(cb), sb.d(cb, {
          ActionCodeOperation: () => Xb,
          ActionCodeURL: () => xc,
          AuthCredential: () => Zc,
          AuthErrorCodes: () => eb,
          EmailAuthCredential: () => oc,
          EmailAuthProvider: () => pc,
          FacebookAuthProvider: () => ks,
          FactorId: () => Ib,
          GithubAuthProvider: () => as,
          GoogleAuthProvider: () => Ws,
          OAuthCredential: () => Rc,
          OAuthProvider: () => ss,
          OperationType: () => Mb,
          PhoneAuthCredential: () => Fc,
          PhoneAuthProvider: () => WW,
          PhoneMultiFactorGenerator: () => ka,
          ProviderId: () => Hb,
          RecaptchaVerifier: () => xk,
          SAMLAuthProvider: () => Us,
          SignInMethod: () => fb,
          TotpMultiFactorGenerator: () => Wa,
          TotpSecret: () => Ta,
          TwitterAuthProvider: () => Is,
          applyActionCode: () => Es,
          beforeAuthStateChanged: () => Tk,
          browserLocalPersistence: () => Lk,
          browserPopupRedirectResolver: () => ba,
          browserSessionPersistence: () => Yk,
          checkActionCode: () => is,
          confirmPasswordReset: () => Ds,
          connectAuthEmulator: () => Oc,
          createUserWithEmailAndPassword: () => Gs,
          debugErrorMap: () => mb,
          deleteUser: () => Mk,
          fetchSignInMethodsForEmail: () => ds,
          getAdditionalUserInfo: () => sk,
          getAuth: () => ma,
          getIdToken: () => ob,
          getIdTokenResult: () => Sb,
          getMultiFactorResolver: () => mk,
          getRedirectResult: () => gW,
          inMemoryPersistence: () => Uc,
          indexedDBLocalPersistence: () => zk,
          initializeAuth: () => ic,
          initializeRecaptchaConfig: () => Wk,
          isSignInWithEmailLink: () => zs,
          linkWithCredential: () => us,
          linkWithPhoneNumber: () => bW,
          linkWithPopup: () => mW,
          linkWithRedirect: () => JW,
          multiFactor: () => ek,
          onAuthStateChanged: () => Uk,
          onIdTokenChanged: () => ak,
          parseActionCodeURL: () => jc,
          prodErrorMap: () => lb,
          reauthenticateWithCredential: () => Ys,
          reauthenticateWithPhoneNumber: () => cW,
          reauthenticateWithPopup: () => nW,
          reauthenticateWithRedirect: () => hW,
          reload: () => bc,
          sendEmailVerification: () => As,
          sendPasswordResetEmail: () => Ps,
          sendSignInLinkToEmail: () => Zs,
          setPersistence: () => kk,
          signInAnonymously: () => Xs,
          signInWithCredential: () => Ls,
          signInWithCustomToken: () => hs,
          signInWithEmailAndPassword: () => Ks,
          signInWithEmailLink: () => qs,
          signInWithPhoneNumber: () => pk,
          signInWithPopup: () => XW,
          signInWithRedirect: () => YW,
          signOut: () => fk,
          unlink: () => Qs,
          updateCurrentUser: () => Hk,
          updateEmail: () => os,
          updatePassword: () => Ss,
          updatePhoneNumber: () => kW,
          updateProfile: () => rs,
          useDeviceLanguage: () => Ik,
          verifyBeforeUpdateEmail: () => ws,
          verifyPasswordResetCode: () => Os
        });
        var kb = sb(39940),
          Wb = sb(39926);

        function ab(bb, cb) {
          var sb = {};
          for (var kb in bb) Object.prototype.hasOwnProperty.call(bb, kb) && cb.indexOf(kb) < 0 && (sb[kb] = bb[kb]);
          if (null != bb && "function" === typeof Object.getOwnPropertySymbols) {
            var Wb = 0;
            for (kb = Object.getOwnPropertySymbols(bb); Wb < kb.length; Wb++) cb.indexOf(kb[Wb]) < 0 && Object.prototype.propertyIsEnumerable.call(bb, kb[Wb]) && (sb[kb[Wb]] = bb[kb[Wb]])
          }
          return sb
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Tb = sb(39945),
          Ub = sb(39934);
        const Ib = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Hb = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          fb = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Mb = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Xb = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function nb() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const mb = function() {
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
          lb = nb,
          Qb = new kb.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          eb = {
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
          Cb = new Tb.h("@firebase/auth");

        function Nb(bb) {
          if (Cb.logLevel <= Tb.e.ERROR) {
            for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
            Cb.error(`Auth (${Wb.i}): ${bb}`, ...sb)
          }
        }

        function Vb(bb) {
          for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
          throw hb(bb, ...sb)
        }

        function Lb(bb) {
          for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
          return hb(bb, ...sb)
        }

        function ub(bb, cb, sb) {
          const Wb = Object.assign(Object.assign({}, lb()), {
            [cb]: sb
          });
          return new kb.h("auth", "Firebase", Wb).create(cb, {
            appName: bb.name
          })
        }

        function Yb(bb, cb, sb) {
          if (!(cb instanceof sb)) throw sb.name !== cb.constructor.name && Vb(bb, "argument-error"), ub(bb, "argument-error", `Type of ${cb.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function hb(bb) {
          for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
          if ("string" !== typeof bb) {
            const cb = sb[0],
              kb = [...sb.slice(1)];
            return kb[0] && (kb[0].appName = bb.name), bb._errorFactory.create(cb, ...kb)
          }
          return Qb.create(bb, ...sb)
        }

        function Jb(bb, cb) {
          if (!bb) {
            for (var sb = arguments.length, kb = new Array(sb > 2 ? sb - 2 : 0), Wb = 2; Wb < sb; Wb++) kb[Wb - 2] = arguments[Wb];
            throw hb(cb, ...kb)
          }
        }

        function gb(bb) {
          const cb = "INTERNAL ASSERTION FAILED: " + bb;
          throw Nb(cb), new Error(cb)
        }

        function Bb(bb, cb) {
          bb || gb(cb)
        }

        function tb() {
          var bb;
          return "undefined" !== typeof self && (null === (bb = self.location) || void 0 === bb ? void 0 : bb.href) || ""
        }

        function yb() {
          return "http:" === Pb() || "https:" === Pb()
        }

        function Pb() {
          var bb;
          return "undefined" !== typeof self && (null === (bb = self.location) || void 0 === bb ? void 0 : bb.protocol) || null
        }
        class Db {
          constructor(bb, cb) {
            this.shortDelay = bb, this.longDelay = cb, Bb(cb > bb, "Short delay should be less than long delay!"), this.isMobile = (0, kb.S)() || (0, kb.T)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (yb() || (0, kb.G)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function Eb(bb, cb) {
          Bb(bb.emulator, "Emulator should always be set here");
          const {
            url: sb
          } = bb.emulator;
          return cb ? `${sb}${cb.startsWith("/")?cb.slice(1):cb}` : sb
        }
        class ib {
          static initialize(bb, cb, sb) {
            this.fetchImpl = bb, cb && (this.headersImpl = cb), sb && (this.responseImpl = sb)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void gb("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void gb("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void gb("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Ob = {
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
          Gb = new Db(3e4, 6e4);

        function Kb(bb, cb) {
          return bb.tenantId && !cb.tenantId ? Object.assign(Object.assign({}, cb), {
            tenantId: bb.tenantId
          }) : cb
        }
        async function Zb(bb, cb, sb, Wb) {
          return zb(bb, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let ab = {},
              Tb = {};
            Wb && ("GET" === cb ? Tb = Wb : ab = {
              body: JSON.stringify(Wb)
            });
            const Ub = (0, kb._)(Object.assign({
                key: bb.config.apiKey
              }, Tb)).slice(1),
              Ib = await bb._getAdditionalHeaders();
            return Ib["Content-Type"] = "application/json", bb.languageCode && (Ib["X-Firebase-Locale"] = bb.languageCode), ib.fetch()(db(bb, bb.config.apiHost, sb, Ub), Object.assign({
              method: cb,
              headers: Ib,
              referrerPolicy: "no-referrer"
            }, ab))
          }))
        }
        async function zb(bb, cb, sb) {
          bb._canInitEmulator = !1;
          const Wb = Object.assign(Object.assign({}, Ob), cb);
          try {
            const cb = new Ab(bb),
              kb = await Promise.race([sb(), cb.promise]);
            cb.clearNetworkTimeout();
            const ab = await kb.json();
            if ("needConfirmation" in ab) throw wb(bb, "account-exists-with-different-credential", ab);
            if (kb.ok && !("errorMessage" in ab)) return ab;
            {
              const cb = kb.ok ? ab.errorMessage : ab.error.message,
                [sb, Tb] = cb.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === sb) throw wb(bb, "credential-already-in-use", ab);
              if ("EMAIL_EXISTS" === sb) throw wb(bb, "email-already-in-use", ab);
              if ("USER_DISABLED" === sb) throw wb(bb, "user-disabled", ab);
              const Ub = Wb[sb] || sb.toLowerCase().replace(/[_\s]+/g, "-");
              if (Tb) throw ub(bb, Ub, Tb);
              Vb(bb, Ub)
            }
          } catch (ab) {
            if (ab instanceof kb.k) throw ab;
            Vb(bb, "network-request-failed", {
              message: String(ab)
            })
          }
        }
        async function qb(bb, cb, sb, kb) {
          let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const ab = await Zb(bb, cb, sb, kb, Wb);
          return "mfaPendingCredential" in ab && Vb(bb, "multi-factor-auth-required", {
            _serverResponse: ab
          }), ab
        }

        function db(bb, cb, sb, kb) {
          const Wb = `${cb}${sb}?${kb}`;
          return bb.config.emulator ? Eb(bb.config, Wb) : `${bb.config.apiScheme}://${Wb}`
        }
        class Ab {
          constructor(bb) {
            this.auth = bb, this.timer = null, this.promise = new Promise(((bb, cb) => {
              this.timer = setTimeout((() => cb(Lb(this.auth, "network-request-failed"))), Gb.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function wb(bb, cb, sb) {
          const kb = {
            appName: bb.name
          };
          sb.email && (kb.email = sb.email), sb.phoneNumber && (kb.phoneNumber = sb.phoneNumber);
          const Wb = Lb(bb, cb, kb);
          return Wb.customData._tokenResponse = sb, Wb
        }

        function rb(bb) {
          if (bb) try {
            const cb = new Date(Number(bb));
            if (!isNaN(cb.getTime())) return cb.toUTCString()
          } catch (cb) {}
        }

        function ob(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, kb.E)(bb).getIdToken(cb)
        }
        async function Sb(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const sb = (0, kb.E)(bb),
            Wb = await sb.getIdToken(cb),
            ab = vb(Wb);
          Jb(ab && ab.exp && ab.auth_time && ab.iat, sb.auth, "internal-error");
          const Tb = "object" === typeof ab.firebase ? ab.firebase : void 0,
            Ub = null === Tb || void 0 === Tb ? void 0 : Tb.sign_in_provider;
          return {
            claims: ab,
            token: Wb,
            authTime: rb(Rb(ab.auth_time)),
            issuedAtTime: rb(Rb(ab.iat)),
            expirationTime: rb(Rb(ab.exp)),
            signInProvider: Ub || null,
            signInSecondFactor: (null === Tb || void 0 === Tb ? void 0 : Tb.sign_in_second_factor) || null
          }
        }

        function Rb(bb) {
          return 1e3 * Number(bb)
        }

        function vb(bb) {
          const [cb, sb, Wb] = bb.split(".");
          if (void 0 === cb || void 0 === sb || void 0 === Wb) return Nb("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const bb = (0, kb.n)(sb);
            return bb ? JSON.parse(bb) : (Nb("Failed to decode base64 JWT payload"), null)
          } catch (ab) {
            return Nb("Caught error parsing JWT payload as JSON", null === ab || void 0 === ab ? void 0 : ab.toString()), null
          }
        }
        async function Fb(bb, cb) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return cb;
          try {
            return await cb
          } catch (sb) {
            throw sb instanceof kb.k && function(bb) {
              let {
                code: cb
              } = bb;
              return "auth/user-disabled" === cb || "auth/user-token-expired" === cb
            }(sb) && bb.auth.currentUser === bb && await bb.auth.signOut(), sb
          }
        }
        class xb {
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
            var cb;
            if (bb) {
              const bb = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), bb
            } {
              this.errorBackoff = 3e4;
              const bb = (null !== (cb = this.user.stsTokenManager.expirationTime) && void 0 !== cb ? cb : 0) - Date.now() - 3e5;
              return Math.max(0, bb)
            }
          }
          schedule() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const cb = this.getInterval(bb);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), cb)
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
        class jb {
          constructor(bb, cb) {
            this.createdAt = bb, this.lastLoginAt = cb, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = rb(this.lastLoginAt), this.creationTime = rb(this.createdAt)
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
        async function pb(bb) {
          var cb;
          const sb = bb.auth,
            kb = await bb.getIdToken(),
            Wb = await Fb(bb, async function(bb, cb) {
              return Zb(bb, "POST", "/v1/accounts:lookup", cb)
            }(sb, {
              idToken: kb
            }));
          Jb(null === Wb || void 0 === Wb ? void 0 : Wb.users.length, sb, "internal-error");
          const Tb = Wb.users[0];
          bb._notifyReloadListener(Tb);
          const Ub = (null === (cb = Tb.providerUserInfo) || void 0 === cb ? void 0 : cb.length) ? Tb.providerUserInfo.map((bb => {
            var {
              providerId: cb
            } = bb, sb = ab(bb, ["providerId"]);
            return {
              providerId: cb,
              uid: sb.rawId || "",
              displayName: sb.displayName || null,
              email: sb.email || null,
              phoneNumber: sb.phoneNumber || null,
              photoURL: sb.photoUrl || null
            }
          })) : [];
          const Ib = (Hb = bb.providerData, fb = Ub, [...Hb.filter((bb => !fb.some((cb => cb.providerId === bb.providerId)))), ...fb]);
          var Hb, fb;
          const Mb = bb.isAnonymous,
            Xb = !(bb.email && Tb.passwordHash) && !(null === Ib || void 0 === Ib ? void 0 : Ib.length),
            nb = !!Mb && Xb,
            mb = {
              uid: Tb.localId,
              displayName: Tb.displayName || null,
              photoURL: Tb.photoUrl || null,
              email: Tb.email || null,
              emailVerified: Tb.emailVerified || !1,
              phoneNumber: Tb.phoneNumber || null,
              tenantId: Tb.tenantId || null,
              providerData: Ib,
              metadata: new jb(Tb.createdAt, Tb.lastLoginAt),
              isAnonymous: nb
            };
          Object.assign(bb, mb)
        }
        async function bc(bb) {
          const cb = (0, kb.E)(bb);
          await pb(cb), await cb.auth._persistUserIfCurrent(cb), cb.auth._notifyListenersIfCurrent(cb)
        }
        class cc {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(bb) {
            Jb(bb.idToken, "internal-error"), Jb("undefined" !== typeof bb.idToken, "internal-error"), Jb("undefined" !== typeof bb.refreshToken, "internal-error");
            const cb = "expiresIn" in bb && "undefined" !== typeof bb.expiresIn ? Number(bb.expiresIn) : function(bb) {
              const cb = vb(bb);
              return Jb(cb, "internal-error"), Jb("undefined" !== typeof cb.exp, "internal-error"), Jb("undefined" !== typeof cb.iat, "internal-error"), Number(cb.exp) - Number(cb.iat)
            }(bb.idToken);
            this.updateTokensAndExpiration(bb.idToken, bb.refreshToken, cb)
          }
          async getToken(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Jb(!this.accessToken || this.refreshToken, bb, "user-token-expired"), cb || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(bb, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(bb, cb) {
            const {
              accessToken: sb,
              refreshToken: Wb,
              expiresIn: ab
            } = await async function(bb, cb) {
              const sb = await zb(bb, {}, (async () => {
                const sb = (0, kb._)({
                    grant_type: "refresh_token",
                    refresh_token: cb
                  }).slice(1),
                  {
                    tokenApiHost: Wb,
                    apiKey: ab
                  } = bb.config,
                  Tb = db(bb, Wb, "/v1/token", `key=${ab}`),
                  Ub = await bb._getAdditionalHeaders();
                return Ub["Content-Type"] = "application/x-www-form-urlencoded", ib.fetch()(Tb, {
                  method: "POST",
                  headers: Ub,
                  body: sb
                })
              }));
              return {
                accessToken: sb.access_token,
                expiresIn: sb.expires_in,
                refreshToken: sb.refresh_token
              }
            }(bb, cb);
            this.updateTokensAndExpiration(sb, Wb, Number(ab))
          }
          updateTokensAndExpiration(bb, cb, sb) {
            this.refreshToken = cb || null, this.accessToken = bb || null, this.expirationTime = Date.now() + 1e3 * sb
          }
          static fromJSON(bb, cb) {
            const {
              refreshToken: sb,
              accessToken: kb,
              expirationTime: Wb
            } = cb, ab = new cc;
            return sb && (Jb("string" === typeof sb, "internal-error", {
              appName: bb
            }), ab.refreshToken = sb), kb && (Jb("string" === typeof kb, "internal-error", {
              appName: bb
            }), ab.accessToken = kb), Wb && (Jb("number" === typeof Wb, "internal-error", {
              appName: bb
            }), ab.expirationTime = Wb), ab
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
            return Object.assign(new cc, this.toJSON())
          }
          _performRefresh() {
            return gb("not implemented")
          }
        }

        function sc(bb, cb) {
          Jb("string" === typeof bb || "undefined" === typeof bb, "internal-error", {
            appName: cb
          })
        }
        class kc {
          constructor(bb) {
            var {
              uid: cb,
              auth: sb,
              stsTokenManager: kb
            } = bb, Wb = ab(bb, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new xb(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = cb, this.auth = sb, this.stsTokenManager = kb, this.accessToken = kb.accessToken, this.displayName = Wb.displayName || null, this.email = Wb.email || null, this.emailVerified = Wb.emailVerified || !1, this.phoneNumber = Wb.phoneNumber || null, this.photoURL = Wb.photoURL || null, this.isAnonymous = Wb.isAnonymous || !1, this.tenantId = Wb.tenantId || null, this.providerData = Wb.providerData ? [...Wb.providerData] : [], this.metadata = new jb(Wb.createdAt || void 0, Wb.lastLoginAt || void 0)
          }
          async getIdToken(bb) {
            const cb = await Fb(this, this.stsTokenManager.getToken(this.auth, bb));
            return Jb(cb, this.auth, "internal-error"), this.accessToken !== cb && (this.accessToken = cb, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), cb
          }
          getIdTokenResult(bb) {
            return Sb(this, bb)
          }
          reload() {
            return bc(this)
          }
          _assign(bb) {
            this !== bb && (Jb(this.uid === bb.uid, this.auth, "internal-error"), this.displayName = bb.displayName, this.photoURL = bb.photoURL, this.email = bb.email, this.emailVerified = bb.emailVerified, this.phoneNumber = bb.phoneNumber, this.isAnonymous = bb.isAnonymous, this.tenantId = bb.tenantId, this.providerData = bb.providerData.map((bb => Object.assign({}, bb))), this.metadata._copy(bb.metadata), this.stsTokenManager._assign(bb.stsTokenManager))
          }
          _clone(bb) {
            const cb = new kc(Object.assign(Object.assign({}, this), {
              auth: bb,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return cb.metadata._copy(this.metadata), cb
          }
          _onReload(bb) {
            Jb(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = bb, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sb = !1;
            bb.idToken && bb.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(bb), sb = !0), cb && await pb(this), await this.auth._persistUserIfCurrent(this), sb && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const bb = await this.getIdToken();
            return await Fb(this, async function(bb, cb) {
              return Zb(bb, "POST", "/v1/accounts:delete", cb)
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
          static _fromJSON(bb, cb) {
            var sb, kb, Wb, ab, Tb, Ub, Ib, Hb;
            const fb = null !== (sb = cb.displayName) && void 0 !== sb ? sb : void 0,
              Mb = null !== (kb = cb.email) && void 0 !== kb ? kb : void 0,
              Xb = null !== (Wb = cb.phoneNumber) && void 0 !== Wb ? Wb : void 0,
              nb = null !== (ab = cb.photoURL) && void 0 !== ab ? ab : void 0,
              mb = null !== (Tb = cb.tenantId) && void 0 !== Tb ? Tb : void 0,
              lb = null !== (Ub = cb._redirectEventId) && void 0 !== Ub ? Ub : void 0,
              Qb = null !== (Ib = cb.createdAt) && void 0 !== Ib ? Ib : void 0,
              eb = null !== (Hb = cb.lastLoginAt) && void 0 !== Hb ? Hb : void 0,
              {
                uid: Cb,
                emailVerified: Nb,
                isAnonymous: Vb,
                providerData: Lb,
                stsTokenManager: ub
              } = cb;
            Jb(Cb && ub, bb, "internal-error");
            const Yb = cc.fromJSON(this.name, ub);
            Jb("string" === typeof Cb, bb, "internal-error"), sc(fb, bb.name), sc(Mb, bb.name), Jb("boolean" === typeof Nb, bb, "internal-error"), Jb("boolean" === typeof Vb, bb, "internal-error"), sc(Xb, bb.name), sc(nb, bb.name), sc(mb, bb.name), sc(lb, bb.name), sc(Qb, bb.name), sc(eb, bb.name);
            const hb = new kc({
              uid: Cb,
              auth: bb,
              email: Mb,
              emailVerified: Nb,
              displayName: fb,
              isAnonymous: Vb,
              photoURL: nb,
              phoneNumber: Xb,
              tenantId: mb,
              stsTokenManager: Yb,
              createdAt: Qb,
              lastLoginAt: eb
            });
            return Lb && Array.isArray(Lb) && (hb.providerData = Lb.map((bb => Object.assign({}, bb)))), lb && (hb._redirectEventId = lb), hb
          }
          static async _fromIdTokenResponse(bb, cb) {
            let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const kb = new cc;
            kb.updateFromServerResponse(cb);
            const Wb = new kc({
              uid: cb.localId,
              auth: bb,
              stsTokenManager: kb,
              isAnonymous: sb
            });
            return await pb(Wb), Wb
          }
        }
        const Wc = new Map;

        function ac(bb) {
          Bb(bb instanceof Function, "Expected a class definition");
          let cb = Wc.get(bb);
          return cb ? (Bb(cb instanceof bb, "Instance stored in cache mismatched with class"), cb) : (cb = new bb, Wc.set(bb, cb), cb)
        }
        class Tc {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(bb, cb) {
            this.storage[bb] = cb
          }
          async _get(bb) {
            const cb = this.storage[bb];
            return void 0 === cb ? null : cb
          }
          async _remove(bb) {
            delete this.storage[bb]
          }
          _addListener(bb, cb) {}
          _removeListener(bb, cb) {}
        }
        Tc.type = "NONE";
        const Uc = Tc;

        function Ic(bb, cb, sb) {
          return `firebase:${bb}:${cb}:${sb}`
        }
        class Hc {
          constructor(bb, cb, sb) {
            this.persistence = bb, this.auth = cb, this.userKey = sb;
            const {
              config: kb,
              name: Wb
            } = this.auth;
            this.fullUserKey = Ic(this.userKey, kb.apiKey, Wb), this.fullPersistenceKey = Ic("persistence", kb.apiKey, Wb), this.boundEventHandler = cb._onStorageEvent.bind(cb), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(bb) {
            return this.persistence._set(this.fullUserKey, bb.toJSON())
          }
          async getCurrentUser() {
            const bb = await this.persistence._get(this.fullUserKey);
            return bb ? kc._fromJSON(this.auth, bb) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(bb) {
            if (this.persistence === bb) return;
            const cb = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = bb, cb ? this.setCurrentUser(cb) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(bb, cb) {
            let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!cb.length) return new Hc(ac(Uc), bb, sb);
            const kb = (await Promise.all(cb.map((async bb => {
              if (await bb._isAvailable()) return bb
            })))).filter((bb => bb));
            let Wb = kb[0] || ac(Uc);
            const ab = Ic(sb, bb.config.apiKey, bb.name);
            let Tb = null;
            for (const Hb of cb) try {
              const cb = await Hb._get(ab);
              if (cb) {
                const sb = kc._fromJSON(bb, cb);
                Hb !== Wb && (Tb = sb), Wb = Hb;
                break
              }
            } catch (Ib) {}
            const Ub = kb.filter((bb => bb._shouldAllowMigration));
            return Wb._shouldAllowMigration && Ub.length ? (Wb = Ub[0], Tb && await Wb._set(ab, Tb.toJSON()), await Promise.all(cb.map((async bb => {
              if (bb !== Wb) try {
                await bb._remove(ab)
              } catch (Ib) {}
            }))), new Hc(Wb, bb, sb)) : new Hc(Wb, bb, sb)
          }
        }

        function fc(bb) {
          const cb = bb.toLowerCase();
          if (cb.includes("opera/") || cb.includes("opr/") || cb.includes("opios/")) return "Opera";
          if (mc(cb)) return "IEMobile";
          if (cb.includes("msie") || cb.includes("trident/")) return "IE";
          if (cb.includes("edge/")) return "Edge";
          if (Mc(cb)) return "Firefox";
          if (cb.includes("silk/")) return "Silk";
          if (Qc(cb)) return "Blackberry";
          if (ec(cb)) return "Webos";
          if (Xc(cb)) return "Safari";
          if ((cb.includes("chrome/") || nc(cb)) && !cb.includes("edge/")) return "Chrome";
          if (lc(cb)) return "Android";
          {
            const cb = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              sb = bb.match(cb);
            if (2 === (null === sb || void 0 === sb ? void 0 : sb.length)) return sb[1]
          }
          return "Other"
        }

        function Mc() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)();
          return /firefox\//i.test(bb)
        }

        function Xc() {
          const bb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)()).toLowerCase();
          return bb.includes("safari/") && !bb.includes("chrome/") && !bb.includes("crios/") && !bb.includes("android")
        }

        function nc() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)();
          return /crios\//i.test(bb)
        }

        function mc() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)();
          return /iemobile/i.test(bb)
        }

        function lc() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)();
          return /android/i.test(bb)
        }

        function Qc() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)();
          return /blackberry/i.test(bb)
        }

        function ec() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)();
          return /webos/i.test(bb)
        }

        function Cc() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)();
          return /iphone|ipad|ipod/i.test(bb) || /macintosh/i.test(bb) && /mobile/i.test(bb)
        }

        function Nc() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)();
          return Cc(bb) || lc(bb) || ec(bb) || Qc(bb) || /windows phone/i.test(bb) || mc(bb)
        }

        function Vc(bb) {
          let cb, sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (bb) {
            case "Browser":
              cb = fc((0, kb.F)());
              break;
            case "Worker":
              cb = `${fc((0,kb.F)())}-${bb}`;
              break;
            default:
              cb = bb
          }
          const ab = sb.length ? sb.join(",") : "FirebaseCore-web";
          return `${cb}/JsCore/${Wb.i}/${ab}`
        }
        async function Lc(bb, cb) {
          return Zb(bb, "GET", "/v2/recaptchaConfig", Kb(bb, cb))
        }

        function uc(bb) {
          return void 0 !== bb && void 0 !== bb.getResponse
        }

        function Yc(bb) {
          return void 0 !== bb && void 0 !== bb.enterprise
        }
        class hc {
          constructor(bb) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === bb.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = bb.recaptchaKey.split("/")[3], this.emailPasswordEnabled = bb.recaptchaEnforcementState.some((bb => "EMAIL_PASSWORD_PROVIDER" === bb.provider && "OFF" !== bb.enforcementState))
          }
        }

        function Jc(bb) {
          return new Promise(((cb, sb) => {
            const kb = document.createElement("script");
            kb.setAttribute("src", bb), kb.onload = cb, kb.onerror = bb => {
                const cb = Lb("internal-error");
                cb.customData = bb, sb(cb)
              }, kb.type = "text/javascript", kb.charset = "UTF-8",
              function() {
                var bb, cb;
                return null !== (cb = null === (bb = document.getElementsByTagName("head")) || void 0 === bb ? void 0 : bb[0]) && void 0 !== cb ? cb : document
              }().appendChild(kb)
          }))
        }

        function gc(bb) {
          return `__${bb}${Math.floor(1e6*Math.random())}`
        }
        class Bc {
          constructor(bb) {
            this.type = "recaptcha-enterprise", this.auth = Dc(bb)
          }
          async verify() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function sb(cb, sb, kb) {
              const Wb = window.grecaptcha;
              Yc(Wb) ? Wb.enterprise.ready((() => {
                Wb.enterprise.execute(cb, {
                  action: bb
                }).then((bb => {
                  sb(bb)
                })).catch((() => {
                  sb("NO_RECAPTCHA")
                }))
              })) : kb(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((bb, kb) => {
              (async function(bb) {
                if (!cb) {
                  if (null == bb.tenantId && null != bb._agentRecaptchaConfig) return bb._agentRecaptchaConfig.siteKey;
                  if (null != bb.tenantId && void 0 !== bb._tenantRecaptchaConfigs[bb.tenantId]) return bb._tenantRecaptchaConfigs[bb.tenantId].siteKey
                }
                return new Promise((async (cb, sb) => {
                  Lc(bb, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((kb => {
                    if (void 0 !== kb.recaptchaKey) {
                      const sb = new hc(kb);
                      return null == bb.tenantId ? bb._agentRecaptchaConfig = sb : bb._tenantRecaptchaConfigs[bb.tenantId] = sb, cb(sb.siteKey)
                    }
                    sb(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((bb => {
                    sb(bb)
                  }))
                }))
              })(this.auth).then((Wb => {
                if (!cb && Yc(window.grecaptcha)) sb(Wb, bb, kb);
                else {
                  if ("undefined" === typeof window) return void kb(new Error("RecaptchaVerifier is only supported in browser"));
                  Jc("https://www.google.com/recaptcha/enterprise.js?render=" + Wb).then((() => {
                    sb(Wb, bb, kb)
                  })).catch((bb => {
                    kb(bb)
                  }))
                }
              })).catch((bb => {
                kb(bb)
              }))
            }))
          }
        }
        async function tc(bb, cb, sb) {
          let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Wb = new Bc(bb);
          let ab;
          try {
            ab = await Wb.verify(sb)
          } catch (Ub) {
            ab = await Wb.verify(sb, !0)
          }
          const Tb = Object.assign({}, cb);
          return kb ? Object.assign(Tb, {
            captchaResp: ab
          }) : Object.assign(Tb, {
            captchaResponse: ab
          }), Object.assign(Tb, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Tb, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Tb
        }
        class yc {
          constructor(bb) {
            this.auth = bb, this.queue = []
          }
          pushCallback(bb, cb) {
            const sb = cb => new Promise(((sb, kb) => {
              try {
                sb(bb(cb))
              } catch (Wb) {
                kb(Wb)
              }
            }));
            sb.onAbort = cb, this.queue.push(sb);
            const kb = this.queue.length - 1;
            return () => {
              this.queue[kb] = () => Promise.resolve()
            }
          }
          async runMiddleware(bb) {
            if (this.auth.currentUser === bb) return;
            const cb = [];
            try {
              for (const sb of this.queue) await sb(bb), sb.onAbort && cb.push(sb.onAbort)
            } catch (sb) {
              cb.reverse();
              for (const bb of cb) try {
                bb()
              } catch (kb) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === sb || void 0 === sb ? void 0 : sb.message
              })
            }
          }
        }
        class Pc {
          constructor(bb, cb, sb, kb) {
            this.app = bb, this.heartbeatServiceProvider = cb, this.appCheckServiceProvider = sb, this.config = kb, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Ec(this), this.idTokenSubscription = new Ec(this), this.beforeStateQueue = new yc(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Qb, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = bb.name, this.clientVersion = kb.sdkClientVersion
          }
          _initializeWithPersistence(bb, cb) {
            return cb && (this._popupRedirectResolver = ac(cb)), this._initializationPromise = this.queue((async () => {
              var sb, kb;
              if (!this._deleted && (this.persistenceManager = await Hc.create(this, bb), !this._deleted)) {
                if (null === (sb = this._popupRedirectResolver) || void 0 === sb ? void 0 : sb._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Wb) {}
                await this.initializeCurrentUser(cb), this.lastNotifiedUid = (null === (kb = this.currentUser) || void 0 === kb ? void 0 : kb.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const bb = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || bb ? this.currentUser && bb && this.currentUser.uid === bb.uid ? (this._currentUser._assign(bb), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(bb, !0) : void 0
          }
          async initializeCurrentUser(bb) {
            var cb;
            const sb = await this.assertedPersistence.getCurrentUser();
            let kb = sb,
              Wb = !1;
            if (bb && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const sb = null === (cb = this.redirectUser) || void 0 === cb ? void 0 : cb._redirectEventId,
                ab = null === kb || void 0 === kb ? void 0 : kb._redirectEventId,
                Tb = await this.tryRedirectSignIn(bb);
              sb && sb !== ab || !(null === Tb || void 0 === Tb ? void 0 : Tb.user) || (kb = Tb.user, Wb = !0)
            }
            if (!kb) return this.directlySetCurrentUser(null);
            if (!kb._redirectEventId) {
              if (Wb) try {
                await this.beforeStateQueue.runMiddleware(kb)
              } catch (ab) {
                kb = sb, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(ab)))
              }
              return kb ? this.reloadAndSetCurrentUserOrClear(kb) : this.directlySetCurrentUser(null)
            }
            return Jb(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === kb._redirectEventId ? this.directlySetCurrentUser(kb) : this.reloadAndSetCurrentUserOrClear(kb)
          }
          async tryRedirectSignIn(bb) {
            let cb = null;
            try {
              cb = await this._popupRedirectResolver._completeRedirectFn(this, bb, !0)
            } catch (sb) {
              await this._setRedirectUser(null)
            }
            return cb
          }
          async reloadAndSetCurrentUserOrClear(bb) {
            try {
              await pb(bb)
            } catch (cb) {
              if ("auth/network-request-failed" !== (null === cb || void 0 === cb ? void 0 : cb.code)) return this.directlySetCurrentUser(null)
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
            const cb = bb ? (0, kb.E)(bb) : null;
            return cb && Jb(cb.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(cb && cb._clone(this))
          }
          async _updateCurrentUser(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return bb && Jb(this.tenantId === bb.tenantId, this, "tenant-id-mismatch"), cb || await this.beforeStateQueue.runMiddleware(bb), this.queue((async () => {
              await this.directlySetCurrentUser(bb), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(bb) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(ac(bb))
            }))
          }
          async initializeRecaptchaConfig() {
            const bb = await Lc(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              cb = new hc(bb);
            if (null == this.tenantId ? this._agentRecaptchaConfig = cb : this._tenantRecaptchaConfigs[this.tenantId] = cb, cb.emailPasswordEnabled) {
              new Bc(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(bb) {
            this._errorFactory = new kb.h("auth", "Firebase", bb())
          }
          onAuthStateChanged(bb, cb, sb) {
            return this.registerStateListener(this.authStateSubscription, bb, cb, sb)
          }
          beforeAuthStateChanged(bb, cb) {
            return this.beforeStateQueue.pushCallback(bb, cb)
          }
          onIdTokenChanged(bb, cb, sb) {
            return this.registerStateListener(this.idTokenSubscription, bb, cb, sb)
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
          async _setRedirectUser(bb, cb) {
            const sb = await this.getOrInitRedirectPersistenceManager(cb);
            return null === bb ? sb.removeCurrentUser() : sb.setCurrentUser(bb)
          }
          async getOrInitRedirectPersistenceManager(bb) {
            if (!this.redirectPersistenceManager) {
              const cb = bb && ac(bb) || this._popupRedirectResolver;
              Jb(cb, this, "argument-error"), this.redirectPersistenceManager = await Hc.create(this, [ac(cb._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(bb) {
            var cb, sb;
            return this._isInitialized && await this.queue((async () => {})), (null === (cb = this._currentUser) || void 0 === cb ? void 0 : cb._redirectEventId) === bb ? this._currentUser : (null === (sb = this.redirectUser) || void 0 === sb ? void 0 : sb._redirectEventId) === bb ? this.redirectUser : null
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
            var bb, cb;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const sb = null !== (cb = null === (bb = this.currentUser) || void 0 === bb ? void 0 : bb.uid) && void 0 !== cb ? cb : null;
            this.lastNotifiedUid !== sb && (this.lastNotifiedUid = sb, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(bb, cb, sb, kb) {
            if (this._deleted) return () => {};
            const Wb = "function" === typeof cb ? cb : cb.next.bind(cb),
              ab = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Jb(ab, this, "internal-error"), ab.then((() => Wb(this.currentUser))), "function" === typeof cb ? bb.addObserver(cb, sb, kb) : bb.addObserver(cb)
          }
          async directlySetCurrentUser(bb) {
            this.currentUser && this.currentUser !== bb && this._currentUser._stopProactiveRefresh(), bb && this.isProactiveRefreshEnabled && bb._startProactiveRefresh(), this.currentUser = bb, bb ? await this.assertedPersistence.setCurrentUser(bb) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(bb) {
            return this.operations = this.operations.then(bb, bb), this.operations
          }
          get assertedPersistence() {
            return Jb(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(bb) {
            bb && !this.frameworks.includes(bb) && (this.frameworks.push(bb), this.frameworks.sort(), this.clientVersion = Vc(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var bb;
            const cb = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (cb["X-Firebase-gmpid"] = this.app.options.appId);
            const sb = await (null === (bb = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === bb ? void 0 : bb.getHeartbeatsHeader());
            sb && (cb["X-Firebase-Client"] = sb);
            const kb = await this._getAppCheckToken();
            return kb && (cb["X-Firebase-AppCheck"] = kb), cb
          }
          async _getAppCheckToken() {
            var bb;
            const cb = await (null === (bb = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === bb ? void 0 : bb.getToken());
            return (null === cb || void 0 === cb ? void 0 : cb.error) && function(bb) {
              if (Cb.logLevel <= Tb.e.WARN) {
                for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
                Cb.warn(`Auth (${Wb.i}): ${bb}`, ...sb)
              }
            }(`Error while retrieving App Check token: ${cb.error}`), null === cb || void 0 === cb ? void 0 : cb.token
          }
        }

        function Dc(bb) {
          return (0, kb.E)(bb)
        }
        class Ec {
          constructor(bb) {
            this.auth = bb, this.observer = null, this.addObserver = (0, kb.r)((bb => this.observer = bb))
          }
          get next() {
            return Jb(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function ic(bb, cb) {
          const sb = (0, Wb.A)(bb, "auth");
          if (sb.isInitialized()) {
            const bb = sb.getImmediate(),
              Wb = sb.getOptions();
            if ((0, kb.t)(Wb, null !== cb && void 0 !== cb ? cb : {})) return bb;
            Vb(bb, "already-initialized")
          }
          return sb.initialize({
            options: cb
          })
        }

        function Oc(bb, cb, sb) {
          const kb = Dc(bb);
          Jb(kb._canInitEmulator, kb, "emulator-config-failed"), Jb(/^https?:\/\//.test(cb), kb, "invalid-emulator-scheme");
          const Wb = !!(null === sb || void 0 === sb ? void 0 : sb.disableWarnings),
            ab = Gc(cb),
            {
              host: Tb,
              port: Ub
            } = function(bb) {
              const cb = Gc(bb),
                sb = /(\/\/)?([^?#/]+)/.exec(bb.substr(cb.length));
              if (!sb) return {
                host: "",
                port: null
              };
              const kb = sb[2].split("@").pop() || "",
                Wb = /^(\[[^\]]+\])(:|$)/.exec(kb);
              if (Wb) {
                const bb = Wb[1];
                return {
                  host: bb,
                  port: Kc(kb.substr(bb.length + 1))
                }
              } {
                const [bb, cb] = kb.split(":");
                return {
                  host: bb,
                  port: Kc(cb)
                }
              }
            }(cb),
            Ib = null === Ub ? "" : `:${Ub}`;
          kb.config.emulator = {
            url: `${ab}//${Tb}${Ib}/`
          }, kb.settings.appVerificationDisabledForTesting = !0, kb.emulatorConfig = Object.freeze({
            host: Tb,
            port: Ub,
            protocol: ab.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Wb
            })
          }), Wb || function() {
            function bb() {
              const bb = document.createElement("p"),
                cb = bb.style;
              bb.innerText = "Running in emulator mode. Do not use with production credentials.", cb.position = "fixed", cb.width = "100%", cb.backgroundColor = "#ffffff", cb.border = ".1em solid #000000", cb.color = "#b50000", cb.bottom = "0px", cb.left = "0px", cb.margin = "0px", cb.zIndex = "10000", cb.textAlign = "center", bb.classList.add("firebase-emulator-warning"), document.body.appendChild(bb)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", bb) : bb())
          }()
        }

        function Gc(bb) {
          const cb = bb.indexOf(":");
          return cb < 0 ? "" : bb.substr(0, cb + 1)
        }

        function Kc(bb) {
          if (!bb) return null;
          const cb = Number(bb);
          return isNaN(cb) ? null : cb
        }
        class Zc {
          constructor(bb, cb) {
            this.providerId = bb, this.signInMethod = cb
          }
          toJSON() {
            return gb("not implemented")
          }
          _getIdTokenResponse(bb) {
            return gb("not implemented")
          }
          _linkToIdToken(bb, cb) {
            return gb("not implemented")
          }
          _getReauthenticationResolver(bb) {
            return gb("not implemented")
          }
        }
        async function zc(bb, cb) {
          return Zb(bb, "POST", "/v1/accounts:resetPassword", Kb(bb, cb))
        }
        async function qc(bb, cb) {
          return Zb(bb, "POST", "/v1/accounts:update", cb)
        }
        async function dc(bb, cb) {
          return qb(bb, "POST", "/v1/accounts:signInWithPassword", Kb(bb, cb))
        }
        async function Ac(bb, cb) {
          return Zb(bb, "POST", "/v1/accounts:sendOobCode", Kb(bb, cb))
        }
        async function wc(bb, cb) {
          return Ac(bb, cb)
        }
        async function rc(bb, cb) {
          return Ac(bb, cb)
        }
        class oc extends Zc {
          constructor(bb, cb, sb) {
            let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", sb), this._email = bb, this._password = cb, this._tenantId = kb
          }
          static _fromEmailAndPassword(bb, cb) {
            return new oc(bb, cb, "password")
          }
          static _fromEmailAndCode(bb, cb) {
            return new oc(bb, cb, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const cb = "string" === typeof bb ? JSON.parse(bb) : bb;
            if ((null === cb || void 0 === cb ? void 0 : cb.email) && (null === cb || void 0 === cb ? void 0 : cb.password)) {
              if ("password" === cb.signInMethod) return this._fromEmailAndPassword(cb.email, cb.password);
              if ("emailLink" === cb.signInMethod) return this._fromEmailAndCode(cb.email, cb.password, cb.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(bb) {
            var cb;
            switch (this.signInMethod) {
              case "password":
                const sb = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (cb = bb._getRecaptchaConfig()) || void 0 === cb ? void 0 : cb.emailPasswordEnabled) {
                  const cb = await tc(bb, sb, "signInWithPassword");
                  return dc(bb, cb)
                }
                return dc(bb, sb).catch((async cb => {
                  if ("auth/missing-recaptcha-token" === cb.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const cb = await tc(bb, sb, "signInWithPassword");
                    return dc(bb, cb)
                  }
                  return Promise.reject(cb)
                }));
              case "emailLink":
                return async function(bb, cb) {
                  return qb(bb, "POST", "/v1/accounts:signInWithEmailLink", Kb(bb, cb))
                }(bb, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Vb(bb, "internal-error")
            }
          }
          async _linkToIdToken(bb, cb) {
            switch (this.signInMethod) {
              case "password":
                return qc(bb, {
                  idToken: cb,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(bb, cb) {
                  return qb(bb, "POST", "/v1/accounts:signInWithEmailLink", Kb(bb, cb))
                }(bb, {
                  idToken: cb,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Vb(bb, "internal-error")
            }
          }
          _getReauthenticationResolver(bb) {
            return this._getIdTokenResponse(bb)
          }
        }
        async function Sc(bb, cb) {
          return qb(bb, "POST", "/v1/accounts:signInWithIdp", Kb(bb, cb))
        }
        class Rc extends Zc {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(bb) {
            const cb = new Rc(bb.providerId, bb.signInMethod);
            return bb.idToken || bb.accessToken ? (bb.idToken && (cb.idToken = bb.idToken), bb.accessToken && (cb.accessToken = bb.accessToken), bb.nonce && !bb.pendingToken && (cb.nonce = bb.nonce), bb.pendingToken && (cb.pendingToken = bb.pendingToken)) : bb.oauthToken && bb.oauthTokenSecret ? (cb.accessToken = bb.oauthToken, cb.secret = bb.oauthTokenSecret) : Vb("argument-error"), cb
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
            const cb = "string" === typeof bb ? JSON.parse(bb) : bb,
              {
                providerId: sb,
                signInMethod: kb
              } = cb,
              Wb = ab(cb, ["providerId", "signInMethod"]);
            if (!sb || !kb) return null;
            const Tb = new Rc(sb, kb);
            return Tb.idToken = Wb.idToken || void 0, Tb.accessToken = Wb.accessToken || void 0, Tb.secret = Wb.secret, Tb.nonce = Wb.nonce, Tb.pendingToken = Wb.pendingToken || null, Tb
          }
          _getIdTokenResponse(bb) {
            return Sc(bb, this.buildRequest())
          }
          _linkToIdToken(bb, cb) {
            const sb = this.buildRequest();
            return sb.idToken = cb, Sc(bb, sb)
          }
          _getReauthenticationResolver(bb) {
            const cb = this.buildRequest();
            return cb.autoCreate = !1, Sc(bb, cb)
          }
          buildRequest() {
            const bb = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) bb.pendingToken = this.pendingToken;
            else {
              const cb = {};
              this.idToken && (cb.id_token = this.idToken), this.accessToken && (cb.access_token = this.accessToken), this.secret && (cb.oauth_token_secret = this.secret), cb.providerId = this.providerId, this.nonce && !this.pendingToken && (cb.nonce = this.nonce), bb.postBody = (0, kb._)(cb)
            }
            return bb
          }
        }
        const vc = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Fc extends Zc {
          constructor(bb) {
            super("phone", "phone"), this.params = bb
          }
          static _fromVerification(bb, cb) {
            return new Fc({
              verificationId: bb,
              verificationCode: cb
            })
          }
          static _fromTokenResponse(bb, cb) {
            return new Fc({
              phoneNumber: bb,
              temporaryProof: cb
            })
          }
          _getIdTokenResponse(bb) {
            return async function(bb, cb) {
              return qb(bb, "POST", "/v1/accounts:signInWithPhoneNumber", Kb(bb, cb))
            }(bb, this._makeVerificationRequest())
          }
          _linkToIdToken(bb, cb) {
            return async function(bb, cb) {
              const sb = await qb(bb, "POST", "/v1/accounts:signInWithPhoneNumber", Kb(bb, cb));
              if (sb.temporaryProof) throw wb(bb, "account-exists-with-different-credential", sb);
              return sb
            }(bb, Object.assign({
              idToken: cb
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(bb) {
            return async function(bb, cb) {
              return qb(bb, "POST", "/v1/accounts:signInWithPhoneNumber", Kb(bb, Object.assign(Object.assign({}, cb), {
                operation: "REAUTH"
              })), vc)
            }(bb, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: bb,
              phoneNumber: cb,
              verificationId: sb,
              verificationCode: kb
            } = this.params;
            return bb && cb ? {
              temporaryProof: bb,
              phoneNumber: cb
            } : {
              sessionInfo: sb,
              code: kb
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
              verificationId: cb,
              verificationCode: sb,
              phoneNumber: kb,
              temporaryProof: Wb
            } = bb;
            return sb || cb || kb || Wb ? new Fc({
              verificationId: cb,
              verificationCode: sb,
              phoneNumber: kb,
              temporaryProof: Wb
            }) : null
          }
        }
        class xc {
          constructor(bb) {
            var cb, sb, Wb, ab, Tb, Ub;
            const Ib = (0, kb.X)((0, kb.x)(bb)),
              Hb = null !== (cb = Ib.apiKey) && void 0 !== cb ? cb : null,
              fb = null !== (sb = Ib.oobCode) && void 0 !== sb ? sb : null,
              Mb = function(bb) {
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
              }(null !== (Wb = Ib.mode) && void 0 !== Wb ? Wb : null);
            Jb(Hb && fb && Mb, "argument-error"), this.apiKey = Hb, this.operation = Mb, this.code = fb, this.continueUrl = null !== (ab = Ib.continueUrl) && void 0 !== ab ? ab : null, this.languageCode = null !== (Tb = Ib.languageCode) && void 0 !== Tb ? Tb : null, this.tenantId = null !== (Ub = Ib.tenantId) && void 0 !== Ub ? Ub : null
          }
          static parseLink(bb) {
            const cb = function(bb) {
              const cb = (0, kb.X)((0, kb.x)(bb)).link,
                sb = cb ? (0, kb.X)((0, kb.x)(cb)).deep_link_id : null,
                Wb = (0, kb.X)((0, kb.x)(bb)).deep_link_id;
              return (Wb ? (0, kb.X)((0, kb.x)(Wb)).link : null) || Wb || sb || cb || bb
            }(bb);
            try {
              return new xc(cb)
            } catch (sb) {
              return null
            }
          }
        }

        function jc(bb) {
          return xc.parseLink(bb)
        }
        class pc {
          constructor() {
            this.providerId = pc.PROVIDER_ID
          }
          static credential(bb, cb) {
            return oc._fromEmailAndPassword(bb, cb)
          }
          static credentialWithLink(bb, cb) {
            const sb = xc.parseLink(cb);
            return Jb(sb, "argument-error"), oc._fromEmailAndCode(bb, sb.code, sb.tenantId)
          }
        }
        pc.PROVIDER_ID = "password", pc.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", pc.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class bs {
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
        class cs extends bs {
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
        class ss extends cs {
          static credentialFromJSON(bb) {
            const cb = "string" === typeof bb ? JSON.parse(bb) : bb;
            return Jb("providerId" in cb && "signInMethod" in cb, "argument-error"), Rc._fromParams(cb)
          }
          credential(bb) {
            return this._credential(Object.assign(Object.assign({}, bb), {
              nonce: bb.rawNonce
            }))
          }
          _credential(bb) {
            return Jb(bb.idToken || bb.accessToken, "argument-error"), Rc._fromParams(Object.assign(Object.assign({}, bb), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(bb) {
            return ss.oauthCredentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return ss.oauthCredentialFromTaggedObject(bb.customData || {})
          }
          static oauthCredentialFromTaggedObject(bb) {
            let {
              _tokenResponse: cb
            } = bb;
            if (!cb) return null;
            const {
              oauthIdToken: sb,
              oauthAccessToken: kb,
              oauthTokenSecret: Wb,
              pendingToken: ab,
              nonce: Tb,
              providerId: Ub
            } = cb;
            if (!kb && !Wb && !sb && !ab) return null;
            if (!Ub) return null;
            try {
              return new ss(Ub)._credential({
                idToken: sb,
                accessToken: kb,
                nonce: Tb,
                pendingToken: ab
              })
            } catch (Ib) {
              return null
            }
          }
        }
        class ks extends cs {
          constructor() {
            super("facebook.com")
          }
          static credential(bb) {
            return Rc._fromParams({
              providerId: ks.PROVIDER_ID,
              signInMethod: ks.FACEBOOK_SIGN_IN_METHOD,
              accessToken: bb
            })
          }
          static credentialFromResult(bb) {
            return ks.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return ks.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: cb
            } = bb;
            if (!cb || !("oauthAccessToken" in cb)) return null;
            if (!cb.oauthAccessToken) return null;
            try {
              return ks.credential(cb.oauthAccessToken)
            } catch (sb) {
              return null
            }
          }
        }
        ks.FACEBOOK_SIGN_IN_METHOD = "facebook.com", ks.PROVIDER_ID = "facebook.com";
        class Ws extends cs {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(bb, cb) {
            return Rc._fromParams({
              providerId: Ws.PROVIDER_ID,
              signInMethod: Ws.GOOGLE_SIGN_IN_METHOD,
              idToken: bb,
              accessToken: cb
            })
          }
          static credentialFromResult(bb) {
            return Ws.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return Ws.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: cb
            } = bb;
            if (!cb) return null;
            const {
              oauthIdToken: sb,
              oauthAccessToken: kb
            } = cb;
            if (!sb && !kb) return null;
            try {
              return Ws.credential(sb, kb)
            } catch (Wb) {
              return null
            }
          }
        }
        Ws.GOOGLE_SIGN_IN_METHOD = "google.com", Ws.PROVIDER_ID = "google.com";
        class as extends cs {
          constructor() {
            super("github.com")
          }
          static credential(bb) {
            return Rc._fromParams({
              providerId: as.PROVIDER_ID,
              signInMethod: as.GITHUB_SIGN_IN_METHOD,
              accessToken: bb
            })
          }
          static credentialFromResult(bb) {
            return as.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return as.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: cb
            } = bb;
            if (!cb || !("oauthAccessToken" in cb)) return null;
            if (!cb.oauthAccessToken) return null;
            try {
              return as.credential(cb.oauthAccessToken)
            } catch (sb) {
              return null
            }
          }
        }
        as.GITHUB_SIGN_IN_METHOD = "github.com", as.PROVIDER_ID = "github.com";
        class Ts extends Zc {
          constructor(bb, cb) {
            super(bb, bb), this.pendingToken = cb
          }
          _getIdTokenResponse(bb) {
            return Sc(bb, this.buildRequest())
          }
          _linkToIdToken(bb, cb) {
            const sb = this.buildRequest();
            return sb.idToken = cb, Sc(bb, sb)
          }
          _getReauthenticationResolver(bb) {
            const cb = this.buildRequest();
            return cb.autoCreate = !1, Sc(bb, cb)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(bb) {
            const cb = "string" === typeof bb ? JSON.parse(bb) : bb,
              {
                providerId: sb,
                signInMethod: kb,
                pendingToken: Wb
              } = cb;
            return sb && kb && Wb && sb === kb ? new Ts(sb, Wb) : null
          }
          static _create(bb, cb) {
            return new Ts(bb, cb)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Us extends bs {
          constructor(bb) {
            Jb(bb.startsWith("saml."), "argument-error"), super(bb)
          }
          static credentialFromResult(bb) {
            return Us.samlCredentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return Us.samlCredentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromJSON(bb) {
            const cb = Ts.fromJSON(bb);
            return Jb(cb, "argument-error"), cb
          }
          static samlCredentialFromTaggedObject(bb) {
            let {
              _tokenResponse: cb
            } = bb;
            if (!cb) return null;
            const {
              pendingToken: sb,
              providerId: kb
            } = cb;
            if (!sb || !kb) return null;
            try {
              return Ts._create(kb, sb)
            } catch (Wb) {
              return null
            }
          }
        }
        class Is extends cs {
          constructor() {
            super("twitter.com")
          }
          static credential(bb, cb) {
            return Rc._fromParams({
              providerId: Is.PROVIDER_ID,
              signInMethod: Is.TWITTER_SIGN_IN_METHOD,
              oauthToken: bb,
              oauthTokenSecret: cb
            })
          }
          static credentialFromResult(bb) {
            return Is.credentialFromTaggedObject(bb)
          }
          static credentialFromError(bb) {
            return Is.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: cb
            } = bb;
            if (!cb) return null;
            const {
              oauthAccessToken: sb,
              oauthTokenSecret: kb
            } = cb;
            if (!sb || !kb) return null;
            try {
              return Is.credential(sb, kb)
            } catch (Wb) {
              return null
            }
          }
        }
        async function Hs(bb, cb) {
          return qb(bb, "POST", "/v1/accounts:signUp", Kb(bb, cb))
        }
        Is.TWITTER_SIGN_IN_METHOD = "twitter.com", Is.PROVIDER_ID = "twitter.com";
        class fs {
          constructor(bb) {
            this.user = bb.user, this.providerId = bb.providerId, this._tokenResponse = bb._tokenResponse, this.operationType = bb.operationType
          }
          static async _fromIdTokenResponse(bb, cb, sb) {
            let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Wb = await kc._fromIdTokenResponse(bb, sb, kb),
              ab = Ms(sb);
            return new fs({
              user: Wb,
              providerId: ab,
              _tokenResponse: sb,
              operationType: cb
            })
          }
          static async _forOperation(bb, cb, sb) {
            await bb._updateTokensIfNecessary(sb, !0);
            const kb = Ms(sb);
            return new fs({
              user: bb,
              providerId: kb,
              _tokenResponse: sb,
              operationType: cb
            })
          }
        }

        function Ms(bb) {
          return bb.providerId ? bb.providerId : "phoneNumber" in bb ? "phone" : null
        }
        async function Xs(bb) {
          var cb;
          const sb = Dc(bb);
          if (await sb._initializationPromise, null === (cb = sb.currentUser) || void 0 === cb ? void 0 : cb.isAnonymous) return new fs({
            user: sb.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const kb = await Hs(sb, {
              returnSecureToken: !0
            }),
            Wb = await fs._fromIdTokenResponse(sb, "signIn", kb, !0);
          return await sb._updateCurrentUser(Wb.user), Wb
        }
        class ns extends kb.k {
          constructor(bb, cb, sb, kb) {
            var Wb;
            super(cb.code, cb.message), this.operationType = sb, this.user = kb, Object.setPrototypeOf(this, ns.prototype), this.customData = {
              appName: bb.name,
              tenantId: null !== (Wb = bb.tenantId) && void 0 !== Wb ? Wb : void 0,
              _serverResponse: cb.customData._serverResponse,
              operationType: sb
            }
          }
          static _fromErrorAndOperation(bb, cb, sb, kb) {
            return new ns(bb, cb, sb, kb)
          }
        }

        function ms(bb, cb, sb, kb) {
          return ("reauthenticate" === cb ? sb._getReauthenticationResolver(bb) : sb._getIdTokenResponse(bb)).catch((sb => {
            if ("auth/multi-factor-auth-required" === sb.code) throw ns._fromErrorAndOperation(bb, sb, cb, kb);
            throw sb
          }))
        }

        function ls(bb) {
          return new Set(bb.map((bb => {
            let {
              providerId: cb
            } = bb;
            return cb
          })).filter((bb => !!bb)))
        }
        async function Qs(bb, cb) {
          const sb = (0, kb.E)(bb);
          await Cs(!0, sb, cb);
          const {
            providerUserInfo: Wb
          } = await async function(bb, cb) {
            return Zb(bb, "POST", "/v1/accounts:update", cb)
          }(sb.auth, {
            idToken: await sb.getIdToken(),
            deleteProvider: [cb]
          }), ab = ls(Wb || []);
          return sb.providerData = sb.providerData.filter((bb => ab.has(bb.providerId))), ab.has("phone") || (sb.phoneNumber = null), await sb.auth._persistUserIfCurrent(sb), sb
        }
        async function es(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const kb = await Fb(bb, cb._linkToIdToken(bb.auth, await bb.getIdToken()), sb);
          return fs._forOperation(bb, "link", kb)
        }
        async function Cs(bb, cb, sb) {
          await pb(cb);
          const kb = !1 === bb ? "provider-already-linked" : "no-such-provider";
          Jb(ls(cb.providerData).has(sb) === bb, cb.auth, kb)
        }
        async function Ns(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: kb
          } = bb, Wb = "reauthenticate";
          try {
            const ab = await Fb(bb, ms(kb, Wb, cb, bb), sb);
            Jb(ab.idToken, kb, "internal-error");
            const Tb = vb(ab.idToken);
            Jb(Tb, kb, "internal-error");
            const {
              sub: Ub
            } = Tb;
            return Jb(bb.uid === Ub, kb, "user-mismatch"), fs._forOperation(bb, Wb, ab)
          } catch (ab) {
            throw "auth/user-not-found" === (null === ab || void 0 === ab ? void 0 : ab.code) && Vb(kb, "user-mismatch"), ab
          }
        }
        async function Vs(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const kb = "signIn",
            Wb = await ms(bb, kb, cb),
            ab = await fs._fromIdTokenResponse(bb, kb, Wb);
          return sb || await bb._updateCurrentUser(ab.user), ab
        }
        async function Ls(bb, cb) {
          return Vs(Dc(bb), cb)
        }
        async function us(bb, cb) {
          const sb = (0, kb.E)(bb);
          return await Cs(!1, sb, cb.providerId), es(sb, cb)
        }
        async function Ys(bb, cb) {
          return Ns((0, kb.E)(bb), cb)
        }
        async function hs(bb, cb) {
          const sb = Dc(bb),
            kb = await async function(bb, cb) {
              return qb(bb, "POST", "/v1/accounts:signInWithCustomToken", Kb(bb, cb))
            }(sb, {
              token: cb,
              returnSecureToken: !0
            }), Wb = await fs._fromIdTokenResponse(sb, "signIn", kb);
          return await sb._updateCurrentUser(Wb.user), Wb
        }
        class gs {
          constructor(bb, cb) {
            this.factorId = bb, this.uid = cb.mfaEnrollmentId, this.enrollmentTime = new Date(cb.enrolledAt).toUTCString(), this.displayName = cb.displayName
          }
          static _fromServerResponse(bb, cb) {
            return "phoneInfo" in cb ? Bs._fromServerResponse(bb, cb) : "totpInfo" in cb ? ts._fromServerResponse(bb, cb) : Vb(bb, "internal-error")
          }
        }
        class Bs extends gs {
          constructor(bb) {
            super("phone", bb), this.phoneNumber = bb.phoneInfo
          }
          static _fromServerResponse(bb, cb) {
            return new Bs(cb)
          }
        }
        class ts extends gs {
          constructor(bb) {
            super("totp", bb)
          }
          static _fromServerResponse(bb, cb) {
            return new ts(cb)
          }
        }

        function ys(bb, cb, sb) {
          var kb;
          Jb((null === (kb = sb.url) || void 0 === kb ? void 0 : kb.length) > 0, bb, "invalid-continue-uri"), Jb("undefined" === typeof sb.dynamicLinkDomain || sb.dynamicLinkDomain.length > 0, bb, "invalid-dynamic-link-domain"), cb.continueUrl = sb.url, cb.dynamicLinkDomain = sb.dynamicLinkDomain, cb.canHandleCodeInApp = sb.handleCodeInApp, sb.iOS && (Jb(sb.iOS.bundleId.length > 0, bb, "missing-ios-bundle-id"), cb.iOSBundleId = sb.iOS.bundleId), sb.android && (Jb(sb.android.packageName.length > 0, bb, "missing-android-pkg-name"), cb.androidInstallApp = sb.android.installApp, cb.androidMinimumVersionCode = sb.android.minimumVersion, cb.androidPackageName = sb.android.packageName)
        }
        async function Ps(bb, cb, sb) {
          var kb;
          const Wb = Dc(bb),
            ab = {
              requestType: "PASSWORD_RESET",
              email: cb,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (kb = Wb._getRecaptchaConfig()) || void 0 === kb ? void 0 : kb.emailPasswordEnabled) {
            const bb = await tc(Wb, ab, "getOobCode", !0);
            sb && ys(Wb, bb, sb), await wc(Wb, bb)
          } else sb && ys(Wb, ab, sb), await wc(Wb, ab).catch((async bb => {
            if ("auth/missing-recaptcha-token" !== bb.code) return Promise.reject(bb);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const bb = await tc(Wb, ab, "getOobCode", !0);
              sb && ys(Wb, bb, sb), await wc(Wb, bb)
            }
          }))
        }
        async function Ds(bb, cb, sb) {
          await zc((0, kb.E)(bb), {
            oobCode: cb,
            newPassword: sb
          })
        }
        async function Es(bb, cb) {
          await async function(bb, cb) {
            return Zb(bb, "POST", "/v1/accounts:update", Kb(bb, cb))
          }((0, kb.E)(bb), {
            oobCode: cb
          })
        }
        async function is(bb, cb) {
          const sb = (0, kb.E)(bb),
            Wb = await zc(sb, {
              oobCode: cb
            }),
            ab = Wb.requestType;
          switch (Jb(ab, sb, "internal-error"), ab) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Jb(Wb.newEmail, sb, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Jb(Wb.mfaInfo, sb, "internal-error");
            default:
              Jb(Wb.email, sb, "internal-error")
          }
          let Tb = null;
          return Wb.mfaInfo && (Tb = gs._fromServerResponse(Dc(sb), Wb.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Wb.requestType ? Wb.newEmail : Wb.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Wb.requestType ? Wb.email : Wb.newEmail) || null,
              multiFactorInfo: Tb
            },
            operation: ab
          }
        }
        async function Os(bb, cb) {
          const {
            data: sb
          } = await is((0, kb.E)(bb), cb);
          return sb.email
        }
        async function Gs(bb, cb, sb) {
          var kb;
          const Wb = Dc(bb),
            ab = {
              returnSecureToken: !0,
              email: cb,
              password: sb,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Tb;
          if (null === (kb = Wb._getRecaptchaConfig()) || void 0 === kb ? void 0 : kb.emailPasswordEnabled) {
            const bb = await tc(Wb, ab, "signUpPassword");
            Tb = Hs(Wb, bb)
          } else Tb = Hs(Wb, ab).catch((async bb => {
            if ("auth/missing-recaptcha-token" === bb.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const bb = await tc(Wb, ab, "signUpPassword");
              return Hs(Wb, bb)
            }
            return Promise.reject(bb)
          }));
          const Ub = await Tb.catch((bb => Promise.reject(bb))),
            Ib = await fs._fromIdTokenResponse(Wb, "signIn", Ub);
          return await Wb._updateCurrentUser(Ib.user), Ib
        }

        function Ks(bb, cb, sb) {
          return Ls((0, kb.E)(bb), pc.credential(cb, sb))
        }
        async function Zs(bb, cb, sb) {
          var kb;
          const Wb = Dc(bb),
            ab = {
              requestType: "EMAIL_SIGNIN",
              email: cb,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Tb(bb, cb) {
            Jb(cb.handleCodeInApp, Wb, "argument-error"), cb && ys(Wb, bb, cb)
          }
          if (null === (kb = Wb._getRecaptchaConfig()) || void 0 === kb ? void 0 : kb.emailPasswordEnabled) {
            const bb = await tc(Wb, ab, "getOobCode", !0);
            Tb(bb, sb), await rc(Wb, bb)
          } else Tb(ab, sb), await rc(Wb, ab).catch((async bb => {
            if ("auth/missing-recaptcha-token" !== bb.code) return Promise.reject(bb);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const bb = await tc(Wb, ab, "getOobCode", !0);
              Tb(bb, sb), await rc(Wb, bb)
            }
          }))
        }

        function zs(bb, cb) {
          const sb = xc.parseLink(cb);
          return "EMAIL_SIGNIN" === (null === sb || void 0 === sb ? void 0 : sb.operation)
        }
        async function qs(bb, cb, sb) {
          const Wb = (0, kb.E)(bb),
            ab = pc.credentialWithLink(cb, sb || tb());
          return Jb(ab._tenantId === (Wb.tenantId || null), Wb, "tenant-id-mismatch"), Ls(Wb, ab)
        }
        async function ds(bb, cb) {
          const sb = {
              identifier: cb,
              continueUri: yb() ? tb() : "http://localhost"
            },
            {
              signinMethods: Wb
            } = await async function(bb, cb) {
              return Zb(bb, "POST", "/v1/accounts:createAuthUri", Kb(bb, cb))
            }((0, kb.E)(bb), sb);
          return Wb || []
        }
        async function As(bb, cb) {
          const sb = (0, kb.E)(bb),
            Wb = {
              requestType: "VERIFY_EMAIL",
              idToken: await bb.getIdToken()
            };
          cb && ys(sb.auth, Wb, cb);
          const {
            email: ab
          } = await async function(bb, cb) {
            return Ac(bb, cb)
          }(sb.auth, Wb);
          ab !== bb.email && await bb.reload()
        }
        async function ws(bb, cb, sb) {
          const Wb = (0, kb.E)(bb),
            ab = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await bb.getIdToken(),
              newEmail: cb
            };
          sb && ys(Wb.auth, ab, sb);
          const {
            email: Tb
          } = await async function(bb, cb) {
            return Ac(bb, cb)
          }(Wb.auth, ab);
          Tb !== bb.email && await bb.reload()
        }
        async function rs(bb, cb) {
          let {
            displayName: sb,
            photoURL: Wb
          } = cb;
          if (void 0 === sb && void 0 === Wb) return;
          const ab = (0, kb.E)(bb),
            Tb = {
              idToken: await ab.getIdToken(),
              displayName: sb,
              photoUrl: Wb,
              returnSecureToken: !0
            },
            Ub = await Fb(ab, async function(bb, cb) {
              return Zb(bb, "POST", "/v1/accounts:update", cb)
            }(ab.auth, Tb));
          ab.displayName = Ub.displayName || null, ab.photoURL = Ub.photoUrl || null;
          const Ib = ab.providerData.find((bb => {
            let {
              providerId: cb
            } = bb;
            return "password" === cb
          }));
          Ib && (Ib.displayName = ab.displayName, Ib.photoURL = ab.photoURL), await ab._updateTokensIfNecessary(Ub)
        }

        function os(bb, cb) {
          return Rs((0, kb.E)(bb), cb, null)
        }

        function Ss(bb, cb) {
          return Rs((0, kb.E)(bb), null, cb)
        }
        async function Rs(bb, cb, sb) {
          const {
            auth: kb
          } = bb, Wb = {
            idToken: await bb.getIdToken(),
            returnSecureToken: !0
          };
          cb && (Wb.email = cb), sb && (Wb.password = sb);
          const ab = await Fb(bb, qc(kb, Wb));
          await bb._updateTokensIfNecessary(ab, !0)
        }
        class vs {
          constructor(bb, cb) {
            let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = bb, this.providerId = cb, this.profile = sb
          }
        }
        class Fs extends vs {
          constructor(bb, cb, sb, kb) {
            super(bb, cb, sb), this.username = kb
          }
        }
        class xs extends vs {
          constructor(bb, cb) {
            super(bb, "facebook.com", cb)
          }
        }
        class ps extends Fs {
          constructor(bb, cb) {
            super(bb, "github.com", cb, "string" === typeof(null === cb || void 0 === cb ? void 0 : cb.login) ? null === cb || void 0 === cb ? void 0 : cb.login : null)
          }
        }
        class bk extends vs {
          constructor(bb, cb) {
            super(bb, "google.com", cb)
          }
        }
        class ck extends Fs {
          constructor(bb, cb, sb) {
            super(bb, "twitter.com", cb, sb)
          }
        }

        function sk(bb) {
          const {
            user: cb,
            _tokenResponse: sb
          } = bb;
          return cb.isAnonymous && !sb ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(bb) {
            var cb, sb;
            if (!bb) return null;
            const {
              providerId: kb
            } = bb, Wb = bb.rawUserInfo ? JSON.parse(bb.rawUserInfo) : {}, ab = bb.isNewUser || "identitytoolkit#SignupNewUserResponse" === bb.kind;
            if (!kb && (null === bb || void 0 === bb ? void 0 : bb.idToken)) {
              const kb = null === (sb = null === (cb = vb(bb.idToken)) || void 0 === cb ? void 0 : cb.firebase) || void 0 === sb ? void 0 : sb.sign_in_provider;
              if (kb) return new vs(ab, "anonymous" !== kb && "custom" !== kb ? kb : null)
            }
            if (!kb) return null;
            switch (kb) {
              case "facebook.com":
                return new xs(ab, Wb);
              case "github.com":
                return new ps(ab, Wb);
              case "google.com":
                return new bk(ab, Wb);
              case "twitter.com":
                return new ck(ab, Wb, bb.screenName || null);
              case "custom":
              case "anonymous":
                return new vs(ab, null);
              default:
                return new vs(ab, kb, Wb)
            }
          }(sb)
        }

        function kk(bb, cb) {
          return (0, kb.E)(bb).setPersistence(cb)
        }

        function Wk(bb) {
          return Dc(bb).initializeRecaptchaConfig()
        }

        function ak(bb, cb, sb, Wb) {
          return (0, kb.E)(bb).onIdTokenChanged(cb, sb, Wb)
        }

        function Tk(bb, cb, sb) {
          return (0, kb.E)(bb).beforeAuthStateChanged(cb, sb)
        }

        function Uk(bb, cb, sb, Wb) {
          return (0, kb.E)(bb).onAuthStateChanged(cb, sb, Wb)
        }

        function Ik(bb) {
          (0, kb.E)(bb).useDeviceLanguage()
        }

        function Hk(bb, cb) {
          return (0, kb.E)(bb).updateCurrentUser(cb)
        }

        function fk(bb) {
          return (0, kb.E)(bb).signOut()
        }
        async function Mk(bb) {
          return (0, kb.E)(bb).delete()
        }
        class Xk {
          constructor(bb, cb, sb) {
            this.type = bb, this.credential = cb, this.auth = sb
          }
          static _fromIdtoken(bb, cb) {
            return new Xk("enroll", bb, cb)
          }
          static _fromMfaPendingCredential(bb) {
            return new Xk("signin", bb)
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
            var cb, sb;
            if (null === bb || void 0 === bb ? void 0 : bb.multiFactorSession) {
              if (null === (cb = bb.multiFactorSession) || void 0 === cb ? void 0 : cb.pendingCredential) return Xk._fromMfaPendingCredential(bb.multiFactorSession.pendingCredential);
              if (null === (sb = bb.multiFactorSession) || void 0 === sb ? void 0 : sb.idToken) return Xk._fromIdtoken(bb.multiFactorSession.idToken)
            }
            return null
          }
        }
        class nk {
          constructor(bb, cb, sb) {
            this.session = bb, this.hints = cb, this.signInResolver = sb
          }
          static _fromError(bb, cb) {
            const sb = Dc(bb),
              kb = cb.customData._serverResponse,
              Wb = (kb.mfaInfo || []).map((bb => gs._fromServerResponse(sb, bb)));
            Jb(kb.mfaPendingCredential, sb, "internal-error");
            const ab = Xk._fromMfaPendingCredential(kb.mfaPendingCredential);
            return new nk(ab, Wb, (async bb => {
              const Wb = await bb._process(sb, ab);
              delete kb.mfaInfo, delete kb.mfaPendingCredential;
              const Tb = Object.assign(Object.assign({}, kb), {
                idToken: Wb.idToken,
                refreshToken: Wb.refreshToken
              });
              switch (cb.operationType) {
                case "signIn":
                  const bb = await fs._fromIdTokenResponse(sb, cb.operationType, Tb);
                  return await sb._updateCurrentUser(bb.user), bb;
                case "reauthenticate":
                  return Jb(cb.user, sb, "internal-error"), fs._forOperation(cb.user, cb.operationType, Tb);
                default:
                  Vb(sb, "internal-error")
              }
            }))
          }
          async resolveSignIn(bb) {
            const cb = bb;
            return this.signInResolver(cb)
          }
        }

        function mk(bb, cb) {
          var sb;
          const Wb = (0, kb.E)(bb),
            ab = cb;
          return Jb(cb.customData.operationType, Wb, "argument-error"), Jb(null === (sb = ab.customData._serverResponse) || void 0 === sb ? void 0 : sb.mfaPendingCredential, Wb, "argument-error"), nk._fromError(Wb, ab)
        }
        class lk {
          constructor(bb) {
            this.user = bb, this.enrolledFactors = [], bb._onReload((cb => {
              cb.mfaInfo && (this.enrolledFactors = cb.mfaInfo.map((cb => gs._fromServerResponse(bb.auth, cb))))
            }))
          }
          static _fromUser(bb) {
            return new lk(bb)
          }
          async getSession() {
            return Xk._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(bb, cb) {
            const sb = bb,
              kb = await this.getSession(),
              Wb = await Fb(this.user, sb._process(this.user.auth, kb, cb));
            return await this.user._updateTokensIfNecessary(Wb), this.user.reload()
          }
          async unenroll(bb) {
            const cb = "string" === typeof bb ? bb : bb.uid,
              sb = await this.user.getIdToken();
            try {
              const bb = await Fb(this.user, (kb = this.user.auth, Wb = {
                idToken: sb,
                mfaEnrollmentId: cb
              }, Zb(kb, "POST", "/v2/accounts/mfaEnrollment:withdraw", Kb(kb, Wb))));
              this.enrolledFactors = this.enrolledFactors.filter((bb => {
                let {
                  uid: sb
                } = bb;
                return sb !== cb
              })), await this.user._updateTokensIfNecessary(bb), await this.user.reload()
            } catch (ab) {
              throw ab
            }
            var kb, Wb
          }
        }
        const Qk = new WeakMap;

        function ek(bb) {
          const cb = (0, kb.E)(bb);
          return Qk.has(cb) || Qk.set(cb, lk._fromUser(cb)), Qk.get(cb)
        }
        const Ck = "__sak";
        class Nk {
          constructor(bb, cb) {
            this.storageRetriever = bb, this.type = cb
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Ck, "1"), this.storage.removeItem(Ck), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (bb) {
              return Promise.resolve(!1)
            }
          }
          _set(bb, cb) {
            return this.storage.setItem(bb, JSON.stringify(cb)), Promise.resolve()
          }
          _get(bb) {
            const cb = this.storage.getItem(bb);
            return Promise.resolve(cb ? JSON.parse(cb) : null)
          }
          _remove(bb) {
            return this.storage.removeItem(bb), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Vk extends Nk {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (bb, cb) => this.onStorageEvent(bb, cb), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const bb = (0, kb.F)();
              return Xc(bb) || Cc(bb)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (bb) {
                return !1
              }
            }(), this.fallbackToPolling = Nc(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(bb) {
            for (const cb of Object.keys(this.listeners)) {
              const sb = this.storage.getItem(cb),
                kb = this.localCache[cb];
              sb !== kb && bb(cb, kb, sb)
            }
          }
          onStorageEvent(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!bb.key) return void this.forAllChangedKeys(((bb, cb, sb) => {
              this.notifyListeners(bb, sb)
            }));
            const sb = bb.key;
            if (cb ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const kb = this.storage.getItem(sb);
              if (bb.newValue !== kb) null !== bb.newValue ? this.storage.setItem(sb, bb.newValue) : this.storage.removeItem(sb);
              else if (this.localCache[sb] === bb.newValue && !cb) return
            }
            const Wb = () => {
                const bb = this.storage.getItem(sb);
                (cb || this.localCache[sb] !== bb) && this.notifyListeners(sb, bb)
              },
              ab = this.storage.getItem(sb);
            (0, kb.O)() && 10 === document.documentMode && ab !== bb.newValue && bb.newValue !== bb.oldValue ? setTimeout(Wb, 10) : Wb()
          }
          notifyListeners(bb, cb) {
            this.localCache[bb] = cb;
            const sb = this.listeners[bb];
            if (sb)
              for (const kb of Array.from(sb)) kb(cb ? JSON.parse(cb) : cb)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((bb, cb, sb) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: bb,
                  oldValue: cb,
                  newValue: sb
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
          _addListener(bb, cb) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[bb] || (this.listeners[bb] = new Set, this.localCache[bb] = this.storage.getItem(bb)), this.listeners[bb].add(cb)
          }
          _removeListener(bb, cb) {
            this.listeners[bb] && (this.listeners[bb].delete(cb), 0 === this.listeners[bb].size && delete this.listeners[bb]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(bb, cb) {
            await super._set(bb, cb), this.localCache[bb] = JSON.stringify(cb)
          }
          async _get(bb) {
            const cb = await super._get(bb);
            return this.localCache[bb] = JSON.stringify(cb), cb
          }
          async _remove(bb) {
            await super._remove(bb), delete this.localCache[bb]
          }
        }
        Vk.type = "LOCAL";
        const Lk = Vk;
        class uk extends Nk {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(bb, cb) {}
          _removeListener(bb, cb) {}
        }
        uk.type = "SESSION";
        const Yk = uk;
        class hk {
          constructor(bb) {
            this.eventTarget = bb, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(bb) {
            const cb = this.receivers.find((cb => cb.isListeningto(bb)));
            if (cb) return cb;
            const sb = new hk(bb);
            return this.receivers.push(sb), sb
          }
          isListeningto(bb) {
            return this.eventTarget === bb
          }
          async handleEvent(bb) {
            const cb = bb,
              {
                eventId: sb,
                eventType: kb,
                data: Wb
              } = cb.data,
              ab = this.handlersMap[kb];
            if (!(null === ab || void 0 === ab ? void 0 : ab.size)) return;
            cb.ports[0].postMessage({
              status: "ack",
              eventId: sb,
              eventType: kb
            });
            const Tb = Array.from(ab).map((async bb => bb(cb.origin, Wb))),
              Ub = await
            function(bb) {
              return Promise.all(bb.map((async bb => {
                try {
                  return {
                    fulfilled: !0,
                    value: await bb
                  }
                } catch (cb) {
                  return {
                    fulfilled: !1,
                    reason: cb
                  }
                }
              })))
            }(Tb);
            cb.ports[0].postMessage({
              status: "done",
              eventId: sb,
              eventType: kb,
              response: Ub
            })
          }
          _subscribe(bb, cb) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[bb] || (this.handlersMap[bb] = new Set), this.handlersMap[bb].add(cb)
          }
          _unsubscribe(bb, cb) {
            this.handlersMap[bb] && cb && this.handlersMap[bb].delete(cb), cb && 0 !== this.handlersMap[bb].size || delete this.handlersMap[bb], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function Jk() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            sb = "";
          for (let kb = 0; kb < cb; kb++) sb += Math.floor(10 * Math.random());
          return bb + sb
        }
        hk.receivers = [];
        class gk {
          constructor(bb) {
            this.target = bb, this.handlers = new Set
          }
          removeMessageHandler(bb) {
            bb.messageChannel && (bb.messageChannel.port1.removeEventListener("message", bb.mN), bb.messageChannel.port1.close()), this.handlers.delete(bb)
          }
          async _send(bb, cb) {
            let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const kb = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!kb) throw new Error("connection_unavailable");
            let Wb, ab;
            return new Promise(((Tb, Ub) => {
              const Ib = Jk("", 20);
              kb.port1.start();
              const Hb = setTimeout((() => {
                Ub(new Error("unsupported_event"))
              }), sb);
              ab = {
                messageChannel: kb,
                mN(bb) {
                  const cb = bb;
                  if (cb.data.eventId === Ib) switch (cb.data.status) {
                    case "ack":
                      clearTimeout(Hb), Wb = setTimeout((() => {
                        Ub(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Wb), Tb(cb.data.response);
                      break;
                    default:
                      clearTimeout(Hb), clearTimeout(Wb), Ub(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(ab), kb.port1.addEventListener("message", ab.mN), this.target.postMessage({
                eventType: bb,
                eventId: Ib,
                data: cb
              }, [kb.port2])
            })).finally((() => {
              ab && this.removeMessageHandler(ab)
            }))
          }
        }

        function Bk() {
          return window
        }

        function tk() {
          return "undefined" !== typeof Bk().WorkerGlobalScope && "function" === typeof Bk().importScripts
        }
        const yk = "firebaseLocalStorageDb",
          Pk = "firebaseLocalStorage",
          Dk = "fbase_key";
        class Ek {
          constructor(bb) {
            this.request = bb
          }
          toPromise() {
            return new Promise(((bb, cb) => {
              this.request.addEventListener("success", (() => {
                bb(this.request.result)
              })), this.request.addEventListener("error", (() => {
                cb(this.request.error)
              }))
            }))
          }
        }

        function ik(bb, cb) {
          return bb.transaction([Pk], cb ? "readwrite" : "readonly").objectStore(Pk)
        }

        function Ok() {
          const bb = indexedDB.open(yk, 1);
          return new Promise(((cb, sb) => {
            bb.addEventListener("error", (() => {
              sb(bb.error)
            })), bb.addEventListener("upgradeneeded", (() => {
              const cb = bb.result;
              try {
                cb.createObjectStore(Pk, {
                  keyPath: Dk
                })
              } catch (kb) {
                sb(kb)
              }
            })), bb.addEventListener("success", (async () => {
              const sb = bb.result;
              sb.objectStoreNames.contains(Pk) ? cb(sb) : (sb.close(), await
                function() {
                  const bb = indexedDB.deleteDatabase(yk);
                  return new Ek(bb).toPromise()
                }(), cb(await Ok()))
            }))
          }))
        }
        async function Gk(bb, cb, sb) {
          const kb = ik(bb, !0).put({
            [Dk]: cb,
            value: sb
          });
          return new Ek(kb).toPromise()
        }

        function Kk(bb, cb) {
          const sb = ik(bb, !0).delete(cb);
          return new Ek(sb).toPromise()
        }
        class Zk {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Ok()), this.db
          }
          async _withRetries(bb) {
            let cb = 0;
            for (;;) try {
              const cb = await this._openDb();
              return await bb(cb)
            } catch (sb) {
              if (cb++ > 3) throw sb;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return tk() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = hk._getInstance(tk() ? self : null), this.receiver._subscribe("keyChanged", (async (bb, cb) => ({
              keyProcessed: (await this._poll()).includes(cb.key)
            }))), this.receiver._subscribe("ping", (async (bb, cb) => ["keyChanged"]))
          }
          async initializeSender() {
            var bb, cb;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (bb) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new gk(this.activeServiceWorker);
            const sb = await this.sender._send("ping", {}, 800);
            sb && (null === (bb = sb[0]) || void 0 === bb ? void 0 : bb.fulfilled) && (null === (cb = sb[0]) || void 0 === cb ? void 0 : cb.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(bb) {
            if (this.sender && this.activeServiceWorker && function() {
                var bb;
                return (null === (bb = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === bb ? void 0 : bb.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: bb
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (cb) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const bb = await Ok();
              return await Gk(bb, Ck, "1"), await Kk(bb, Ck), !0
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
          async _set(bb, cb) {
            return this._withPendingWrite((async () => (await this._withRetries((sb => Gk(sb, bb, cb))), this.localCache[bb] = cb, this.notifyServiceWorker(bb))))
          }
          async _get(bb) {
            const cb = await this._withRetries((cb => async function(bb, cb) {
              const sb = ik(bb, !1).get(cb),
                kb = await new Ek(sb).toPromise();
              return void 0 === kb ? null : kb.value
            }(cb, bb)));
            return this.localCache[bb] = cb, cb
          }
          async _remove(bb) {
            return this._withPendingWrite((async () => (await this._withRetries((cb => Kk(cb, bb))), delete this.localCache[bb], this.notifyServiceWorker(bb))))
          }
          async _poll() {
            const bb = await this._withRetries((bb => {
              const cb = ik(bb, !1).getAll();
              return new Ek(cb).toPromise()
            }));
            if (!bb) return [];
            if (0 !== this.pendingWrites) return [];
            const cb = [],
              sb = new Set;
            for (const {
                fbase_key: kb,
                value: Wb
              }
              of bb) sb.add(kb), JSON.stringify(this.localCache[kb]) !== JSON.stringify(Wb) && (this.notifyListeners(kb, Wb), cb.push(kb));
            for (const kb of Object.keys(this.localCache)) this.localCache[kb] && !sb.has(kb) && (this.notifyListeners(kb, null), cb.push(kb));
            return cb
          }
          notifyListeners(bb, cb) {
            this.localCache[bb] = cb;
            const sb = this.listeners[bb];
            if (sb)
              for (const kb of Array.from(sb)) kb(cb)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(bb, cb) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[bb] || (this.listeners[bb] = new Set, this._get(bb)), this.listeners[bb].add(cb)
          }
          _removeListener(bb, cb) {
            this.listeners[bb] && (this.listeners[bb].delete(cb), 0 === this.listeners[bb].size && delete this.listeners[bb]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Zk.type = "LOCAL";
        const zk = Zk;
        const qk = 1e12;
        class dk {
          constructor(bb) {
            this.auth = bb, this.counter = qk, this._widgets = new Map
          }
          render(bb, cb) {
            const sb = this.counter;
            return this._widgets.set(sb, new Ak(bb, this.auth.name, cb || {})), this.counter++, sb
          }
          reset(bb) {
            var cb;
            const sb = bb || qk;
            null === (cb = this._widgets.get(sb)) || void 0 === cb || cb.delete(), this._widgets.delete(sb)
          }
          getResponse(bb) {
            var cb;
            const sb = bb || qk;
            return (null === (cb = this._widgets.get(sb)) || void 0 === cb ? void 0 : cb.getResponse()) || ""
          }
          async execute(bb) {
            var cb;
            const sb = bb || qk;
            return null === (cb = this._widgets.get(sb)) || void 0 === cb || cb.execute(), ""
          }
        }
        class Ak {
          constructor(bb, cb, sb) {
            this.params = sb, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const kb = "string" === typeof bb ? document.getElementById(bb) : bb;
            Jb(kb, "argument-error", {
              appName: cb
            }), this.container = kb, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const cb = [],
                  sb = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let kb = 0; kb < bb; kb++) cb.push(sb.charAt(Math.floor(Math.random() * sb.length)));
                return cb.join("")
              }(50);
              const {
                callback: bb,
                "expired-callback": cb
              } = this.params;
              if (bb) try {
                bb(this.responseToken)
              } catch (sb) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, cb) try {
                  cb()
                } catch (sb) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const wk = gc("rcb"),
          rk = new Db(3e4, 6e4);
        class Sk {
          constructor() {
            var bb;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (bb = Bk().grecaptcha) || void 0 === bb ? void 0 : bb.render)
          }
          load(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Jb(function(bb) {
              return bb.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(bb)
            }(cb), bb, "argument-error"), this.shouldResolveImmediately(cb) && uc(Bk().grecaptcha) ? Promise.resolve(Bk().grecaptcha) : new Promise(((sb, Wb) => {
              const ab = Bk().setTimeout((() => {
                Wb(Lb(bb, "network-request-failed"))
              }), rk.get());
              Bk()[wk] = () => {
                Bk().clearTimeout(ab), delete Bk()[wk];
                const kb = Bk().grecaptcha;
                if (!kb || !uc(kb)) return void Wb(Lb(bb, "internal-error"));
                const Tb = kb.render;
                kb.render = (bb, cb) => {
                  const sb = Tb(bb, cb);
                  return this.counter++, sb
                }, this.hostLanguage = cb, sb(kb)
              };
              Jc(`https://www.google.com/recaptcha/api.js??${(0,kb._)({onload:wk,render:"explicit",hl:cb})}`).catch((() => {
                clearTimeout(ab), Wb(Lb(bb, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(bb) {
            var cb;
            return !!(null === (cb = Bk().grecaptcha) || void 0 === cb ? void 0 : cb.render) && (bb === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class Rk {
          async load(bb) {
            return new dk(bb)
          }
          clearedOneInstance() {}
        }
        const vk = "recaptcha",
          Fk = {
            theme: "light",
            type: "image"
          };
        class xk {
          constructor(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Fk),
              sb = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = cb, this.type = vk, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Dc(sb), this.isInvisible = "invisible" === this.parameters.size, Jb("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const kb = "string" === typeof bb ? document.getElementById(bb) : bb;
            Jb(kb, this.auth, "argument-error"), this.container = kb, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Rk : new Sk, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const bb = await this.render(),
              cb = this.getAssertedRecaptcha(),
              sb = cb.getResponse(bb);
            return sb || new Promise((sb => {
              const kb = bb => {
                bb && (this.tokenChangeListeners.delete(kb), sb(bb))
              };
              this.tokenChangeListeners.add(kb), this.isInvisible && cb.execute(bb)
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
            Jb(!this.parameters.sitekey, this.auth, "argument-error"), Jb(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Jb("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(bb) {
            return cb => {
              if (this.tokenChangeListeners.forEach((bb => bb(cb))), "function" === typeof bb) bb(cb);
              else if ("string" === typeof bb) {
                const sb = Bk()[bb];
                "function" === typeof sb && sb(cb)
              }
            }
          }
          assertNotDestroyed() {
            Jb(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let bb = this.container;
              if (!this.isInvisible) {
                const cb = document.createElement("div");
                bb.appendChild(cb), bb = cb
              }
              this.widgetId = this.getAssertedRecaptcha().render(bb, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            Jb(yb() && !tk(), this.auth, "internal-error"), await
            function() {
              let bb = null;
              return new Promise((cb => {
                "complete" !== document.readyState ? (bb = () => cb(), window.addEventListener("load", bb)) : cb()
              })).catch((cb => {
                throw bb && window.removeEventListener("load", bb), cb
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const bb = await async function(bb) {
              return (await Zb(bb, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Jb(bb, this.auth, "internal-error"), this.parameters.sitekey = bb
          }
          getAssertedRecaptcha() {
            return Jb(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class jk {
          constructor(bb, cb) {
            this.verificationId = bb, this.onConfirmation = cb
          }
          confirm(bb) {
            const cb = Fc._fromVerification(this.verificationId, bb);
            return this.onConfirmation(cb)
          }
        }
        async function pk(bb, cb, sb) {
          const Wb = Dc(bb),
            ab = await sW(Wb, cb, (0, kb.E)(sb));
          return new jk(ab, (bb => Ls(Wb, bb)))
        }
        async function bW(bb, cb, sb) {
          const Wb = (0, kb.E)(bb);
          await Cs(!1, Wb, "phone");
          const ab = await sW(Wb.auth, cb, (0, kb.E)(sb));
          return new jk(ab, (bb => us(Wb, bb)))
        }
        async function cW(bb, cb, sb) {
          const Wb = (0, kb.E)(bb),
            ab = await sW(Wb.auth, cb, (0, kb.E)(sb));
          return new jk(ab, (bb => Ys(Wb, bb)))
        }
        async function sW(bb, cb, sb) {
          var kb;
          const Wb = await sb.verify();
          try {
            let ab;
            if (Jb("string" === typeof Wb, bb, "argument-error"), Jb(sb.type === vk, bb, "argument-error"), ab = "string" === typeof cb ? {
                phoneNumber: cb
              } : cb, "session" in ab) {
              const cb = ab.session;
              if ("phoneNumber" in ab) {
                Jb("enroll" === cb.type, bb, "internal-error");
                const sb = await
                function(bb, cb) {
                  return Zb(bb, "POST", "/v2/accounts/mfaEnrollment:start", Kb(bb, cb))
                }(bb, {
                  idToken: cb.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: ab.phoneNumber,
                    recaptchaToken: Wb
                  }
                });
                return sb.phoneSessionInfo.sessionInfo
              } {
                Jb("signin" === cb.type, bb, "internal-error");
                const sb = (null === (kb = ab.multiFactorHint) || void 0 === kb ? void 0 : kb.uid) || ab.multiFactorUid;
                Jb(sb, bb, "missing-multi-factor-info");
                const Tb = await
                function(bb, cb) {
                  return Zb(bb, "POST", "/v2/accounts/mfaSignIn:start", Kb(bb, cb))
                }(bb, {
                  mfaPendingCredential: cb.credential,
                  mfaEnrollmentId: sb,
                  phoneSignInInfo: {
                    recaptchaToken: Wb
                  }
                });
                return Tb.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: cb
              } = await async function(bb, cb) {
                return Zb(bb, "POST", "/v1/accounts:sendVerificationCode", Kb(bb, cb))
              }(bb, {
                phoneNumber: ab.phoneNumber,
                recaptchaToken: Wb
              });
              return cb
            }
          } finally {
            sb._reset()
          }
        }
        async function kW(bb, cb) {
          await es((0, kb.E)(bb), cb)
        }
        class WW {
          constructor(bb) {
            this.providerId = WW.PROVIDER_ID, this.auth = Dc(bb)
          }
          verifyPhoneNumber(bb, cb) {
            return sW(this.auth, bb, (0, kb.E)(cb))
          }
          static credential(bb, cb) {
            return Fc._fromVerification(bb, cb)
          }
          static credentialFromResult(bb) {
            const cb = bb;
            return WW.credentialFromTaggedObject(cb)
          }
          static credentialFromError(bb) {
            return WW.credentialFromTaggedObject(bb.customData || {})
          }
          static credentialFromTaggedObject(bb) {
            let {
              _tokenResponse: cb
            } = bb;
            if (!cb) return null;
            const {
              phoneNumber: sb,
              temporaryProof: kb
            } = cb;
            return sb && kb ? Fc._fromTokenResponse(sb, kb) : null
          }
        }

        function aW(bb, cb) {
          return cb ? ac(cb) : (Jb(bb._popupRedirectResolver, bb, "argument-error"), bb._popupRedirectResolver)
        }
        WW.PROVIDER_ID = "phone", WW.PHONE_SIGN_IN_METHOD = "phone";
        class TW extends Zc {
          constructor(bb) {
            super("custom", "custom"), this.params = bb
          }
          _getIdTokenResponse(bb) {
            return Sc(bb, this._buildIdpRequest())
          }
          _linkToIdToken(bb, cb) {
            return Sc(bb, this._buildIdpRequest(cb))
          }
          _getReauthenticationResolver(bb) {
            return Sc(bb, this._buildIdpRequest())
          }
          _buildIdpRequest(bb) {
            const cb = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return bb && (cb.idToken = bb), cb
          }
        }

        function UW(bb) {
          return Vs(bb.auth, new TW(bb), bb.bypassAuthState)
        }

        function IW(bb) {
          const {
            auth: cb,
            user: sb
          } = bb;
          return Jb(sb, cb, "internal-error"), Ns(sb, new TW(bb), bb.bypassAuthState)
        }
        async function HW(bb) {
          const {
            auth: cb,
            user: sb
          } = bb;
          return Jb(sb, cb, "internal-error"), es(sb, new TW(bb), bb.bypassAuthState)
        }
        class fW {
          constructor(bb, cb, sb, kb) {
            let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = bb, this.resolver = sb, this.user = kb, this.bypassAuthState = Wb, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(cb) ? cb : [cb]
          }
          execute() {
            return new Promise((async (bb, cb) => {
              this.pendingPromise = {
                resolve: bb,
                reject: cb
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (sb) {
                this.reject(sb)
              }
            }))
          }
          async onAuthEvent(bb) {
            const {
              urlResponse: cb,
              sessionId: sb,
              postBody: kb,
              tenantId: Wb,
              error: ab,
              type: Tb
            } = bb;
            if (ab) return void this.reject(ab);
            const Ub = {
              auth: this.auth,
              requestUri: cb,
              sessionId: sb,
              tenantId: Wb || void 0,
              postBody: kb || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Tb)(Ub))
            } catch (Ib) {
              this.reject(Ib)
            }
          }
          onError(bb) {
            this.reject(bb)
          }
          getIdpTask(bb) {
            switch (bb) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return UW;
              case "linkViaPopup":
              case "linkViaRedirect":
                return HW;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return IW;
              default:
                Vb(this.auth, "internal-error")
            }
          }
          resolve(bb) {
            Bb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(bb), this.unregisterAndCleanUp()
          }
          reject(bb) {
            Bb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(bb), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const MW = new Db(2e3, 1e4);
        async function XW(bb, cb, sb) {
          const kb = Dc(bb);
          Yb(bb, cb, bs);
          const Wb = aW(kb, sb);
          return new lW(kb, "signInViaPopup", cb, Wb).executeNotNull()
        }
        async function nW(bb, cb, sb) {
          const Wb = (0, kb.E)(bb);
          Yb(Wb.auth, cb, bs);
          const ab = aW(Wb.auth, sb);
          return new lW(Wb.auth, "reauthViaPopup", cb, ab, Wb).executeNotNull()
        }
        async function mW(bb, cb, sb) {
          const Wb = (0, kb.E)(bb);
          Yb(Wb.auth, cb, bs);
          const ab = aW(Wb.auth, sb);
          return new lW(Wb.auth, "linkViaPopup", cb, ab, Wb).executeNotNull()
        }
        class lW extends fW {
          constructor(bb, cb, sb, kb, Wb) {
            super(bb, cb, kb, Wb), this.provider = sb, this.authWindow = null, this.pollId = null, lW.currentPopupAction && lW.currentPopupAction.cancel(), lW.currentPopupAction = this
          }
          async executeNotNull() {
            const bb = await this.execute();
            return Jb(bb, this.auth, "internal-error"), bb
          }
          async onExecution() {
            Bb(1 === this.filter.length, "Popup operations only handle one event");
            const bb = Jk();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], bb), this.authWindow.associatedEvent = bb, this.resolver._originValidation(this.auth).catch((bb => {
              this.reject(bb)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (bb => {
              bb || this.reject(Lb(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var bb;
            return (null === (bb = this.authWindow) || void 0 === bb ? void 0 : bb.associatedEvent) || null
          }
          cancel() {
            this.reject(Lb(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, lW.currentPopupAction = null
          }
          pollUserCancellation() {
            const bb = () => {
              var cb, sb;
              (null === (sb = null === (cb = this.authWindow) || void 0 === cb ? void 0 : cb.window) || void 0 === sb ? void 0 : sb.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Lb(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(bb, MW.get())
            };
            bb()
          }
        }
        lW.currentPopupAction = null;
        const QW = "pendingRedirect",
          eW = new Map;
        class CW extends fW {
          constructor(bb, cb) {
            super(bb, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], cb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let bb = eW.get(this.auth._key());
            if (!bb) {
              try {
                const cb = await async function(bb, cb) {
                  const sb = uW(cb),
                    kb = LW(bb);
                  if (!await kb._isAvailable()) return !1;
                  const Wb = "true" === await kb._get(sb);
                  return await kb._remove(sb), Wb
                }(this.resolver, this.auth) ? await super.execute() : null;
                bb = () => Promise.resolve(cb)
              } catch (cb) {
                bb = () => Promise.reject(cb)
              }
              eW.set(this.auth._key(), bb)
            }
            return this.bypassAuthState || eW.set(this.auth._key(), (() => Promise.resolve(null))), bb()
          }
          async onAuthEvent(bb) {
            if ("signInViaRedirect" === bb.type) return super.onAuthEvent(bb);
            if ("unknown" !== bb.type) {
              if (bb.eventId) {
                const cb = await this.auth._redirectUserForId(bb.eventId);
                if (cb) return this.user = cb, super.onAuthEvent(bb);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function NW(bb, cb) {
          return LW(bb)._set(uW(cb), "true")
        }

        function VW(bb, cb) {
          eW.set(bb._key(), cb)
        }

        function LW(bb) {
          return ac(bb._redirectPersistence)
        }

        function uW(bb) {
          return Ic(QW, bb.config.apiKey, bb.name)
        }

        function YW(bb, cb, sb) {
          return async function(bb, cb, sb) {
            const kb = Dc(bb);
            Yb(bb, cb, bs), await kb._initializationPromise;
            const Wb = aW(kb, sb);
            return await NW(Wb, kb), Wb._openRedirect(kb, cb, "signInViaRedirect")
          }(bb, cb, sb)
        }

        function hW(bb, cb, sb) {
          return async function(bb, cb, sb) {
            const Wb = (0, kb.E)(bb);
            Yb(Wb.auth, cb, bs), await Wb.auth._initializationPromise;
            const ab = aW(Wb.auth, sb);
            await NW(ab, Wb.auth);
            const Tb = await tW(Wb);
            return ab._openRedirect(Wb.auth, cb, "reauthViaRedirect", Tb)
          }(bb, cb, sb)
        }

        function JW(bb, cb, sb) {
          return async function(bb, cb, sb) {
            const Wb = (0, kb.E)(bb);
            Yb(Wb.auth, cb, bs), await Wb.auth._initializationPromise;
            const ab = aW(Wb.auth, sb);
            await Cs(!1, Wb, cb.providerId), await NW(ab, Wb.auth);
            const Tb = await tW(Wb);
            return ab._openRedirect(Wb.auth, cb, "linkViaRedirect", Tb)
          }(bb, cb, sb)
        }
        async function gW(bb, cb) {
          return await Dc(bb)._initializationPromise, BW(bb, cb, !1)
        }
        async function BW(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const kb = Dc(bb),
            Wb = aW(kb, cb),
            ab = new CW(kb, Wb, sb),
            Tb = await ab.execute();
          return Tb && !sb && (delete Tb.user._redirectEventId, await kb._persistUserIfCurrent(Tb.user), await kb._setRedirectUser(null, cb)), Tb
        }
        async function tW(bb) {
          const cb = Jk(`${bb.uid}:::`);
          return bb._redirectEventId = cb, await bb.auth._setRedirectUser(bb), await bb.auth._persistUserIfCurrent(bb), cb
        }
        class yW {
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
            let cb = !1;
            return this.consumers.forEach((sb => {
              this.isEventForConsumer(bb, sb) && (cb = !0, this.sendToConsumer(bb, sb), this.saveEventToCache(bb))
            })), this.hasHandledPotentialRedirect || ! function(bb) {
              switch (bb.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return DW(bb);
                default:
                  return !1
              }
            }(bb) || (this.hasHandledPotentialRedirect = !0, cb || (this.queuedRedirectEvent = bb, cb = !0)), cb
          }
          sendToConsumer(bb, cb) {
            var sb;
            if (bb.error && !DW(bb)) {
              const kb = (null === (sb = bb.error.code) || void 0 === sb ? void 0 : sb.split("auth/")[1]) || "internal-error";
              cb.onError(Lb(this.auth, kb))
            } else cb.onAuthEvent(bb)
          }
          isEventForConsumer(bb, cb) {
            const sb = null === cb.eventId || !!bb.eventId && bb.eventId === cb.eventId;
            return cb.filter.includes(bb.type) && sb
          }
          hasEventBeenHandled(bb) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(PW(bb))
          }
          saveEventToCache(bb) {
            this.cachedEventUids.add(PW(bb)), this.lastProcessedEventTime = Date.now()
          }
        }

        function PW(bb) {
          return [bb.type, bb.eventId, bb.sessionId, bb.tenantId].filter((bb => bb)).join("-")
        }

        function DW(bb) {
          let {
            type: cb,
            error: sb
          } = bb;
          return "unknown" === cb && "auth/no-auth-event" === (null === sb || void 0 === sb ? void 0 : sb.code)
        }
        const EW = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          iW = /^https?/;
        async function OW(bb) {
          if (bb.config.emulator) return;
          const {
            authorizedDomains: cb
          } = await async function(bb) {
            return Zb(bb, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(bb);
          for (const kb of cb) try {
            if (GW(kb)) return
          } catch (sb) {}
          Vb(bb, "unauthorized-domain")
        }

        function GW(bb) {
          const cb = tb(),
            {
              protocol: sb,
              hostname: kb
            } = new URL(cb);
          if (bb.startsWith("chrome-extension://")) {
            const Wb = new URL(bb);
            return "" === Wb.hostname && "" === kb ? "chrome-extension:" === sb && bb.replace("chrome-extension://", "") === cb.replace("chrome-extension://", "") : "chrome-extension:" === sb && Wb.hostname === kb
          }
          if (!iW.test(sb)) return !1;
          if (EW.test(bb)) return kb === bb;
          const Wb = bb.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Wb + "|" + Wb + ")$", "i").test(kb)
        }
        const KW = new Db(3e4, 6e4);

        function ZW() {
          const bb = Bk().___jsl;
          if (null === bb || void 0 === bb ? void 0 : bb.H)
            for (const cb of Object.keys(bb.H))
              if (bb.H[cb].r = bb.H[cb].r || [], bb.H[cb].L = bb.H[cb].L || [], bb.H[cb].r = [...bb.H[cb].L], bb.CP)
                for (let sb = 0; sb < bb.CP.length; sb++) bb.CP[sb] = null
        }
        let zW = null;

        function qW(bb) {
          return zW = zW || function(bb) {
            return new Promise(((cb, sb) => {
              var kb, Wb, ab;

              function Tb() {
                ZW(), gapi.load("gapi.iframes", {
                  callback: () => {
                    cb(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    ZW(), sb(Lb(bb, "network-request-failed"))
                  },
                  timeout: KW.get()
                })
              }
              if (null === (Wb = null === (kb = Bk().gapi) || void 0 === kb ? void 0 : kb.iframes) || void 0 === Wb ? void 0 : Wb.Iframe) cb(gapi.iframes.getContext());
              else {
                if (!(null === (ab = Bk().gapi) || void 0 === ab ? void 0 : ab.load)) {
                  const cb = gc("iframefcb");
                  return Bk()[cb] = () => {
                    gapi.load ? Tb() : sb(Lb(bb, "network-request-failed"))
                  }, Jc(`https://apis.google.com/js/api.js?onload=${cb}`).catch((bb => sb(bb)))
                }
                Tb()
              }
            })).catch((bb => {
              throw zW = null, bb
            }))
          }(bb), zW
        }
        const dW = new Db(5e3, 15e3),
          AW = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          wW = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function rW(bb) {
          const cb = bb.config;
          Jb(cb.authDomain, bb, "auth-domain-config-required");
          const sb = cb.emulator ? Eb(cb, "emulator/auth/iframe") : `https://${bb.config.authDomain}/__/auth/iframe`,
            ab = {
              apiKey: cb.apiKey,
              appName: bb.name,
              v: Wb.i
            },
            Tb = wW.get(bb.config.apiHost);
          Tb && (ab.eid = Tb);
          const Ub = bb._getFrameworks();
          return Ub.length && (ab.fw = Ub.join(",")), `${sb}?${(0,kb._)(ab).slice(1)}`
        }
        const oW = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class SW {
          constructor(bb) {
            this.window = bb, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (bb) {}
          }
        }

        function RW(bb, cb, sb) {
          let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Tb = Math.max((window.screen.availHeight - ab) / 2, 0).toString(),
            Ub = Math.max((window.screen.availWidth - Wb) / 2, 0).toString();
          let Ib = "";
          const Hb = Object.assign(Object.assign({}, oW), {
              width: Wb.toString(),
              height: ab.toString(),
              top: Tb,
              left: Ub
            }),
            fb = (0, kb.F)().toLowerCase();
          sb && (Ib = nc(fb) ? "_blank" : sb), Mc(fb) && (cb = cb || "http://localhost", Hb.scrollbars = "yes");
          const Mb = Object.entries(Hb).reduce(((bb, cb) => {
            let [sb, kb] = cb;
            return `${bb}${sb}=${kb},`
          }), "");
          if (function() {
              var bb;
              return Cc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.F)()) && !!(null === (bb = window.navigator) || void 0 === bb ? void 0 : bb.standalone)
            }(fb) && "_self" !== Ib) return function(bb, cb) {
            const sb = document.createElement("a");
            sb.href = bb, sb.target = cb;
            const kb = document.createEvent("MouseEvent");
            kb.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), sb.dispatchEvent(kb)
          }(cb || "", Ib), new SW(null);
          const Xb = window.open(cb || "", Ib, Mb);
          Jb(Xb, bb, "popup-blocked");
          try {
            Xb.focus()
          } catch (nb) {}
          return new SW(Xb)
        }
        const vW = "__/auth/handler",
          FW = "emulator/auth/handler",
          xW = encodeURIComponent("fac");
        async function jW(bb, cb, sb, ab, Tb, Ub) {
            Jb(bb.config.authDomain, bb, "auth-domain-config-required"), Jb(bb.config.apiKey, bb, "invalid-api-key");
            const Ib = {
              apiKey: bb.config.apiKey,
              appName: bb.name,
              authType: sb,
              redirectUrl: ab,
              v: Wb.i,
              eventId: Tb
            };
            if (cb instanceof bs) {
              cb.setDefaultLanguage(bb.languageCode), Ib.providerId = cb.providerId || "", (0, kb.K)(cb.getCustomParameters()) || (Ib.customParameters = JSON.stringify(cb.getCustomParameters()));
              for (const [bb, cb] of Object.entries(Ub || {})) Ib[bb] = cb
            }
            if (cb instanceof cs) {
              const bb = cb.getScopes().filter((bb => "" !== bb));
              bb.length > 0 && (Ib.scopes = bb.join(","))
            }
            bb.tenantId && (Ib.tid = bb.tenantId);
            const Hb = Ib;
            for (const kb of Object.keys(Hb)) void 0 === Hb[kb] && delete Hb[kb];
            const fb = await bb._getAppCheckToken(),
              Mb = fb ? `#${xW}=${encodeURIComponent(fb)}` : "";
            return `${function(bb){let{config:cb}=bb;if(!cb.emulator)return`
            https: //${cb.authDomain}/${vW}`;return Eb(cb,FW)}(bb)}?${(0,kb._)(Hb).slice(1)}${Mb}`}const pW="webStorageSupport";const ba=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yk,this._completeRedirectFn=BW,this._overrideRedirectResult=VW}async _openPopup(bb,cb,sb,kb){var Wb;Bb(null===(Wb=this.eventManagers[bb._key()])||void 0===Wb?void 0:Wb.manager,"_initialize() not called before _openPopup()");return RW(bb,await jW(bb,cb,sb,tb(),kb),Jk())}async _openRedirect(bb,cb,sb,kb){await this._originValidation(bb);return function(bb){Bk().location.href=bb}(await jW(bb,cb,sb,tb(),kb)),new Promise((()=>{}))}_initialize(bb){const cb=bb._key();if(this.eventManagers[cb]){const{manager:bb,promise:sb}=this.eventManagers[cb];return bb?Promise.resolve(bb):(Bb(sb,"If manager is not set, promise should be"),sb)}const sb=this.initAndGetManager(bb);return this.eventManagers[cb]={promise:sb},sb.catch((()=>{delete this.eventManagers[cb]})),sb}async initAndGetManager(bb){const cb=await async function(bb){const cb=await qW(bb),sb=Bk().gapi;return Jb(sb,bb,"internal-error"),cb.open({where:document.body,url:rW(bb),messageHandlersFilter:sb.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AW,dontclear:!0},(cb=>new Promise((async(sb,kb)=>{await cb.restyle({setHideOnLeave:!1});const Wb=Lb(bb,"network-request-failed"),ab=Bk().setTimeout((()=>{kb(Wb)}),dW.get());function Tb(){Bk().clearTimeout(ab),sb(cb)}cb.ping(Tb).then(Tb,(()=>{kb(Wb)}))}))))}(bb),sb=new yW(bb);return cb.register("authEvent",(cb=>{Jb(null===cb||void 0===cb?void 0:cb.authEvent,bb,"invalid-auth-event");return{status:sb.onEvent(cb.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[bb._key()]={manager:sb},this.iframes[bb._key()]=cb,sb}_isIframeWebStorageSupported(bb,cb){this.iframes[bb._key()].send(pW,{type:pW},(sb=>{var kb;const Wb=null===(kb=null===sb||void 0===sb?void 0:sb[0])||void 0===kb?void 0:kb[pW];void 0!==Wb&&cb(!!Wb),Vb(bb,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(bb){const cb=bb._key();return this.originValidationPromises[cb]||(this.originValidationPromises[cb]=OW(bb)),this.originValidationPromises[cb]}get _shouldInitProactively(){return Nc()||Xc()||Cc()}};class ca{constructor(bb){this.factorId=bb}_process(bb,cb,sb){switch(cb.type){case"enroll":return this._finalizeEnroll(bb,cb.credential,sb);case"signin":return this._finalizeSignIn(bb,cb.credential);default:return gb("unexpected MultiFactorSessionType")}}}class sa extends ca{constructor(bb){super("phone"),this.credential=bb}static _fromCredential(bb){return new sa(bb)}_finalizeEnroll(bb,cb,sb){return function(bb,cb){return Zb(bb,"POST","/v2/accounts/mfaEnrollment:finalize",Kb(bb,cb))}(bb,{idToken:cb,displayName:sb,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(bb,cb){return function(bb,cb){return Zb(bb,"POST","/v2/accounts/mfaSignIn:finalize",Kb(bb,cb))}(bb,{mfaPendingCredential:cb,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ka{constructor(){}static assertion(bb){return sa._fromCredential(bb)}}ka.FACTOR_ID="phone";class Wa{static assertionForEnrollment(bb,cb){return aa._fromSecret(bb,cb)}static assertionForSignIn(bb,cb){return aa._fromEnrollmentId(bb,cb)}static async generateSecret(bb){const cb=bb;Jb("undefined"!==typeof cb.auth,"internal-error");const sb=await(kb=cb.auth,Wb={idToken:cb.credential,totpEnrollmentInfo:{}},Zb(kb,"POST","/v2/accounts/mfaEnrollment:start",Kb(kb,Wb)));var kb,Wb;return Ta._fromStartTotpMfaEnrollmentResponse(sb,cb.auth)}}Wa.FACTOR_ID="totp";class aa extends ca{constructor(bb,cb,sb){super("totp"),this.otp=bb,this.enrollmentId=cb,this.secret=sb}static _fromSecret(bb,cb){return new aa(cb,void 0,bb)}static _fromEnrollmentId(bb,cb){return new aa(cb,bb)}async _finalizeEnroll(bb,cb,sb){return Jb("undefined"!==typeof this.secret,bb,"argument-error"),function(bb,cb){return Zb(bb,"POST","/v2/accounts/mfaEnrollment:finalize",Kb(bb,cb))}(bb,{idToken:cb,displayName:sb,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(bb,cb){Jb(void 0!==this.enrollmentId&&void 0!==this.otp,bb,"argument-error");const sb={verificationCode:this.otp};return function(bb,cb){return Zb(bb,"POST","/v2/accounts/mfaSignIn:finalize",Kb(bb,cb))}(bb,{mfaPendingCredential:cb,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:sb})}}class Ta{constructor(bb,cb,sb,kb,Wb,ab,Tb){this.sessionInfo=ab,this.auth=Tb,this.secretKey=bb,this.hashingAlgorithm=cb,this.codeLength=sb,this.codeIntervalSeconds=kb,this.enrollmentCompletionDeadline=Wb}static _fromStartTotpMfaEnrollmentResponse(bb,cb){return new Ta(bb.totpSessionInfo.sharedSecretKey,bb.totpSessionInfo.hashingAlgorithm,bb.totpSessionInfo.verificationCodeLength,bb.totpSessionInfo.periodSec,new Date(bb.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),bb.totpSessionInfo.sessionInfo,cb)}_makeTotpVerificationInfo(bb){return{sessionInfo:this.sessionInfo,verificationCode:bb}}generateQrCodeUrl(bb,cb){var sb;let kb=!1;return(Ua(bb)||Ua(cb))&&(kb=!0),kb&&(Ua(bb)&&(bb=(null===(sb=this.auth.currentUser)||void 0===sb?void 0:sb.email)||"unknownuser"),Ua(cb)&&(cb=this.auth.name)),`otpauth://totp/${cb}:${bb}?secret=${this.secretKey}&issuer=${cb}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ua(bb){return"undefined"===typeof bb||0===(null===bb||void 0===bb?void 0:bb.length)}var Ia="@firebase/auth",Ha="0.23.2";class fa{constructor(bb){this.auth=bb,this.internalListeners=new Map}getUid(){var bb;return this.assertAuthConfigured(),(null===(bb=this.auth.currentUser)||void 0===bb?void 0:bb.uid)||null}async getToken(bb){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(bb)}}addAuthTokenListener(bb){if(this.assertAuthConfigured(),this.internalListeners.has(bb))return;const cb=this.auth.onIdTokenChanged((cb=>{bb((null===cb||void 0===cb?void 0:cb.stsTokenManager.accessToken)||null)}));this.internalListeners.set(bb,cb),this.updateProactiveRefresh()}removeAuthTokenListener(bb){this.assertAuthConfigured();const cb=this.internalListeners.get(bb);cb&&(this.internalListeners.delete(bb),cb(),this.updateProactiveRefresh())}assertAuthConfigured(){Jb(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const Ma=(0,kb.D)("authIdTokenMaxAge")||300;let Xa=null;const na=bb=>async cb=>{const sb=cb&&await cb.getIdTokenResult(),kb=sb&&((new Date).getTime()-Date.parse(sb.issuedAtTime))/1e3;if(kb&&kb>Ma)return;const Wb=null===sb||void 0===sb?void 0:sb.token;Xa!==Wb&&(Xa=Wb,await fetch(bb,{method:Wb?"POST":"DELETE",headers:Wb?{Authorization:`Bearer ${Wb}`}:{}}))};function ma(){let bb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Wb.M)();const cb=(0,Wb.A)(bb,"auth");if(cb.isInitialized())return cb.getImmediate();const sb=ic(bb,{popupRedirectResolver:ba,persistence:[zk,Lk,Yk]}),ab=(0,kb.D)("authTokenSyncURL");if(ab){const bb=na(ab);Tk(sb,bb,(()=>bb(sb.currentUser))),ak(sb,(cb=>bb(cb)))}const Tb=(0,kb.C)("auth");return Tb&&Oc(sb,`http://${Tb}`),sb}var la;la="Browser",(0,Wb.B)(new Ub.i("auth",((bb,cb)=>{let{options:sb}=cb;const kb=bb.getProvider("app").getImmediate(),Wb=bb.getProvider("heartbeat"),ab=bb.getProvider("app-check-internal"),{apiKey:Tb,authDomain:Ub}=kb.options;Jb(Tb&&!Tb.includes(":"),"invalid-api-key",{appName:kb.name});const Ib={apiKey:Tb,authDomain:Ub,clientPlatform:la,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vc(la)},Hb=new Pc(kb,Wb,ab,Ib);return function(bb,cb){const sb=(null===cb||void 0===cb?void 0:cb.persistence)||[],kb=(Array.isArray(sb)?sb:[sb]).map(ac);(null===cb||void 0===cb?void 0:cb.errorMap)&&bb._updateErrorMap(cb.errorMap),bb._initializeWithPersistence(kb,null===cb||void 0===cb?void 0:cb.popupRedirectResolver)}(Hb,sb),Hb}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((bb,cb,sb)=>{bb.getProvider("auth-internal").initialize()}))),(0,Wb.B)(new Ub.i("auth-internal",(bb=>(bb=>new fa(bb))(Dc(bb.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Wb.R)(Ia,Ha,function(bb){switch(bb){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(la)),(0,Wb.R)(Ia,Ha,"esm2017")}};Object.freeze(modules);for(const bb in modules)Object.freeze(modules[bb]);