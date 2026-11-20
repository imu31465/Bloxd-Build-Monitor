/*! For license information please see bbb6l5.260.3053a514.chunk.js.LICENSE.txt */
export const id = 260;
export const ids = [260];
export const modules = {
    40280: (qq, Eq, gq) => {
        gq.r(Eq), gq.d(Eq, {
          ActionCodeOperation: () => Wq,
          ActionCodeURL: () => IE,
          AuthCredential: () => GE,
          AuthErrorCodes: () => jq,
          EmailAuthCredential: () => sE,
          EmailAuthProvider: () => DE,
          FacebookAuthProvider: () => Yg,
          FactorId: () => Aq,
          GithubAuthProvider: () => Og,
          GoogleAuthProvider: () => lg,
          OAuthCredential: () => wE,
          OAuthProvider: () => gg,
          OperationType: () => Bq,
          PhoneAuthCredential: () => CE,
          PhoneAuthProvider: () => El,
          PhoneMultiFactorGenerator: () => qO,
          ProviderId: () => cq,
          RecaptchaVerifier: () => wY,
          SAMLAuthProvider: () => xg,
          SignInMethod: () => uq,
          TotpMultiFactorGenerator: () => EO,
          TotpSecret: () => YO,
          TwitterAuthProvider: () => Ag,
          applyActionCode: () => fg,
          beforeAuthStateChanged: () => lY,
          browserLocalPersistence: () => oY,
          browserPopupRedirectResolver: () => Il,
          browserSessionPersistence: () => QY,
          checkActionCode: () => Mg,
          confirmPasswordReset: () => Zg,
          connectAuthEmulator: () => zE,
          createUserWithEmailAndPassword: () => zg,
          debugErrorMap: () => aq,
          deleteUser: () => cY,
          fetchSignInMethodsForEmail: () => Jg,
          getAdditionalUserInfo: () => qY,
          getAuth: () => BO,
          getIdToken: () => sq,
          getIdTokenResult: () => Xq,
          getMultiFactorResolver: () => WY,
          getRedirectResult: () => tl,
          inMemoryPersistence: () => xE,
          indexedDBLocalPersistence: () => pY,
          initializeAuth: () => TE,
          initializeRecaptchaConfig: () => gY,
          isSignInWithEmailLink: () => Gg,
          linkWithCredential: () => yg,
          linkWithPhoneNumber: () => IY,
          linkWithPopup: () => Bl,
          linkWithRedirect: () => yl,
          multiFactor: () => VY,
          onAuthStateChanged: () => OY,
          onIdTokenChanged: () => YY,
          parseActionCodeURL: () => eE,
          prodErrorMap: () => Vq,
          reauthenticateWithCredential: () => tg,
          reauthenticateWithPhoneNumber: () => eY,
          reauthenticateWithPopup: () => ul,
          reauthenticateWithRedirect: () => Ql,
          reload: () => qE,
          sendEmailVerification: () => kg,
          sendPasswordResetEmail: () => ig,
          sendSignInLinkToEmail: () => pg,
          setPersistence: () => EY,
          signInAnonymously: () => Wg,
          signInWithCredential: () => Qg,
          signInWithCustomToken: () => rg,
          signInWithEmailAndPassword: () => Sg,
          signInWithEmailLink: () => Lg,
          signInWithPhoneNumber: () => CY,
          signInWithPopup: () => cl,
          signInWithRedirect: () => Pl,
          signOut: () => AY,
          unlink: () => dg,
          updateCurrentUser: () => xY,
          updateEmail: () => Fg,
          updatePassword: () => sg,
          updatePhoneNumber: () => ql,
          updateProfile: () => Ug,
          useDeviceLanguage: () => mY,
          verifyBeforeUpdateEmail: () => Rg,
          verifyPasswordResetCode: () => Tg
        });
        var Yq = gq(40265),
          lq = gq(40254);

        function Oq(qq, Eq) {
          var gq = {};
          for (var Yq in qq) Object.prototype.hasOwnProperty.call(qq, Yq) && Eq.indexOf(Yq) < 0 && (gq[Yq] = qq[Yq]);
          if (null != qq && "function" === typeof Object.getOwnPropertySymbols) {
            var lq = 0;
            for (Yq = Object.getOwnPropertySymbols(qq); lq < Yq.length; lq++) Eq.indexOf(Yq[lq]) < 0 && Object.prototype.propertyIsEnumerable.call(qq, Yq[lq]) && (gq[Yq[lq]] = qq[Yq[lq]])
          }
          return gq
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var mq = gq(40273),
          xq = gq(40258);
        const Aq = {
            PHONE: "phone",
            TOTP: "totp"
          },
          cq = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          uq = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Bq = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Wq = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Nq() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const aq = function() {
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
          Vq = Nq,
          dq = new Yq.d("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          jq = {
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
          Hq = new mq.g("@firebase/auth");

        function oq(qq) {
          if (Hq.logLevel <= mq.c.ERROR) {
            for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
            Hq.error(`Auth (${lq.d}): ${qq}`, ...gq)
          }
        }

        function Pq(qq) {
          for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
          throw rq(qq, ...gq)
        }

        function Qq(qq) {
          for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
          return rq(qq, ...gq)
        }

        function yq(qq, Eq, gq) {
          const lq = Object.assign(Object.assign({}, Vq()), {
            [Eq]: gq
          });
          return new Yq.d("auth", "Firebase", lq).create(Eq, {
            appName: qq.name
          })
        }

        function tq(qq, Eq, gq) {
          if (!(Eq instanceof gq)) throw gq.name !== Eq.constructor.name && Pq(qq, "argument-error"), yq(qq, "argument-error", `Type of ${Eq.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function rq(qq) {
          for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
          if ("string" !== typeof qq) {
            const Eq = gq[0],
              Yq = [...gq.slice(1)];
            return Yq[0] && (Yq[0].appName = qq.name), qq._errorFactory.create(Eq, ...Yq)
          }
          return dq.create(qq, ...gq)
        }

        function vq(qq, Eq) {
          if (!qq) {
            for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq];
            throw rq(Eq, ...Yq)
          }
        }

        function hq(qq) {
          const Eq = "INTERNAL ASSERTION FAILED: " + qq;
          throw oq(Eq), new Error(Eq)
        }

        function nq(qq, Eq) {
          qq || hq(Eq)
        }

        function bq() {
          var qq;
          return "undefined" !== typeof self && (null === (qq = self.location) || void 0 === qq ? void 0 : qq.href) || ""
        }

        function iq() {
          return "http:" === Zq() || "https:" === Zq()
        }

        function Zq() {
          var qq;
          return "undefined" !== typeof self && (null === (qq = self.location) || void 0 === qq ? void 0 : qq.protocol) || null
        }
        class fq {
          constructor(qq, Eq) {
            this.shortDelay = qq, this.longDelay = Eq, nq(Eq > qq, "Short delay should be less than long delay!"), this.isMobile = (0, Yq.V)() || (0, Yq.W)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (iq() || (0, Yq.M)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function Mq(qq, Eq) {
          nq(qq.emulator, "Emulator should always be set here");
          const {
            url: gq
          } = qq.emulator;
          return Eq ? `${gq}${Eq.startsWith("/")?Eq.slice(1):Eq}` : gq
        }
        class Tq {
          static initialize(qq, Eq, gq) {
            this.fetchImpl = qq, Eq && (this.headersImpl = Eq), gq && (this.responseImpl = gq)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void hq("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void hq("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void hq("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const zq = {
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
          Sq = new fq(3e4, 6e4);

        function pq(qq, Eq) {
          return qq.tenantId && !Eq.tenantId ? Object.assign(Object.assign({}, Eq), {
            tenantId: qq.tenantId
          }) : Eq
        }
        async function Gq(qq, Eq, gq, lq) {
          return Lq(qq, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Oq = {},
              mq = {};
            lq && ("GET" === Eq ? mq = lq : Oq = {
              body: JSON.stringify(lq)
            });
            const xq = (0, Yq.$)(Object.assign({
                key: qq.config.apiKey
              }, mq)).slice(1),
              Aq = await qq._getAdditionalHeaders();
            return Aq["Content-Type"] = "application/json", qq.languageCode && (Aq["X-Firebase-Locale"] = qq.languageCode), Tq.fetch()(kq(qq, qq.config.apiHost, gq, xq), Object.assign({
              method: Eq,
              headers: Aq,
              referrerPolicy: "no-referrer"
            }, Oq))
          }))
        }
        async function Lq(qq, Eq, gq) {
          qq._canInitEmulator = !1;
          const lq = Object.assign(Object.assign({}, zq), Eq);
          try {
            const Eq = new Rq(qq),
              Yq = await Promise.race([gq(), Eq.promise]);
            Eq.clearNetworkTimeout();
            const Oq = await Yq.json();
            if ("needConfirmation" in Oq) throw Uq(qq, "account-exists-with-different-credential", Oq);
            if (Yq.ok && !("errorMessage" in Oq)) return Oq;
            {
              const Eq = Yq.ok ? Oq.errorMessage : Oq.error.message,
                [gq, mq] = Eq.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === gq) throw Uq(qq, "credential-already-in-use", Oq);
              if ("EMAIL_EXISTS" === gq) throw Uq(qq, "email-already-in-use", Oq);
              if ("USER_DISABLED" === gq) throw Uq(qq, "user-disabled", Oq);
              const xq = lq[gq] || gq.toLowerCase().replace(/[_\s]+/g, "-");
              if (mq) throw yq(qq, xq, mq);
              Pq(qq, xq)
            }
          } catch (Oq) {
            if (Oq instanceof Yq.h) throw Oq;
            Pq(qq, "network-request-failed", {
              message: String(Oq)
            })
          }
        }
        async function Jq(qq, Eq, gq, Yq) {
          let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Oq = await Gq(qq, Eq, gq, Yq, lq);
          return "mfaPendingCredential" in Oq && Pq(qq, "multi-factor-auth-required", {
            _serverResponse: Oq
          }), Oq
        }

        function kq(qq, Eq, gq, Yq) {
          const lq = `${Eq}${gq}?${Yq}`;
          return qq.config.emulator ? Mq(qq.config, lq) : `${qq.config.apiScheme}://${lq}`
        }
        class Rq {
          constructor(qq) {
            this.auth = qq, this.timer = null, this.promise = new Promise(((qq, Eq) => {
              this.timer = setTimeout((() => Eq(Qq(this.auth, "network-request-failed"))), Sq.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function Uq(qq, Eq, gq) {
          const Yq = {
            appName: qq.name
          };
          gq.email && (Yq.email = gq.email), gq.phoneNumber && (Yq.phoneNumber = gq.phoneNumber);
          const lq = Qq(qq, Eq, Yq);
          return lq.customData._tokenResponse = gq, lq
        }

        function Fq(qq) {
          if (qq) try {
            const Eq = new Date(Number(qq));
            if (!isNaN(Eq.getTime())) return Eq.toUTCString()
          } catch (Eq) {}
        }

        function sq(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Yq.K)(qq).getIdToken(Eq)
        }
        async function Xq(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const gq = (0, Yq.K)(qq),
            lq = await gq.getIdToken(Eq),
            Oq = Kq(lq);
          vq(Oq && Oq.exp && Oq.auth_time && Oq.iat, gq.auth, "internal-error");
          const mq = "object" === typeof Oq.firebase ? Oq.firebase : void 0,
            xq = null === mq || void 0 === mq ? void 0 : mq.sign_in_provider;
          return {
            claims: Oq,
            token: lq,
            authTime: Fq(wq(Oq.auth_time)),
            issuedAtTime: Fq(wq(Oq.iat)),
            expirationTime: Fq(wq(Oq.exp)),
            signInProvider: xq || null,
            signInSecondFactor: (null === mq || void 0 === mq ? void 0 : mq.sign_in_second_factor) || null
          }
        }

        function wq(qq) {
          return 1e3 * Number(qq)
        }

        function Kq(qq) {
          const [Eq, gq, lq] = qq.split(".");
          if (void 0 === Eq || void 0 === gq || void 0 === lq) return oq("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const qq = (0, Yq.n)(gq);
            return qq ? JSON.parse(qq) : (oq("Failed to decode base64 JWT payload"), null)
          } catch (Oq) {
            return oq("Caught error parsing JWT payload as JSON", null === Oq || void 0 === Oq ? void 0 : Oq.toString()), null
          }
        }
        async function Cq(qq, Eq) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Eq;
          try {
            return await Eq
          } catch (gq) {
            throw gq instanceof Yq.h && function(qq) {
              let {
                code: Eq
              } = qq;
              return "auth/user-disabled" === Eq || "auth/user-token-expired" === Eq
            }(gq) && qq.auth.currentUser === qq && await qq.auth.signOut(), gq
          }
        }
        class Iq {
          constructor(qq) {
            this.user = qq, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(qq) {
            var Eq;
            if (qq) {
              const qq = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), qq
            } {
              this.errorBackoff = 3e4;
              const qq = (null !== (Eq = this.user.stsTokenManager.expirationTime) && void 0 !== Eq ? Eq : 0) - Date.now() - 3e5;
              return Math.max(0, qq)
            }
          }
          schedule() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const Eq = this.getInterval(qq);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), Eq)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (qq) {
              return void("auth/network-request-failed" === (null === qq || void 0 === qq ? void 0 : qq.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class eq {
          constructor(qq, Eq) {
            this.createdAt = qq, this.lastLoginAt = Eq, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Fq(this.lastLoginAt), this.creationTime = Fq(this.createdAt)
          }
          _copy(qq) {
            this.createdAt = qq.createdAt, this.lastLoginAt = qq.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function Dq(qq) {
          var Eq;
          const gq = qq.auth,
            Yq = await qq.getIdToken(),
            lq = await Cq(qq, async function(qq, Eq) {
              return Gq(qq, "POST", "/v1/accounts:lookup", Eq)
            }(gq, {
              idToken: Yq
            }));
          vq(null === lq || void 0 === lq ? void 0 : lq.users.length, gq, "internal-error");
          const mq = lq.users[0];
          qq._notifyReloadListener(mq);
          const xq = (null === (Eq = mq.providerUserInfo) || void 0 === Eq ? void 0 : Eq.length) ? mq.providerUserInfo.map((qq => {
            var {
              providerId: Eq
            } = qq, gq = Oq(qq, ["providerId"]);
            return {
              providerId: Eq,
              uid: gq.rawId || "",
              displayName: gq.displayName || null,
              email: gq.email || null,
              phoneNumber: gq.phoneNumber || null,
              photoURL: gq.photoUrl || null
            }
          })) : [];
          const Aq = (cq = qq.providerData, uq = xq, [...cq.filter((qq => !uq.some((Eq => Eq.providerId === qq.providerId)))), ...uq]);
          var cq, uq;
          const Bq = qq.isAnonymous,
            Wq = !(qq.email && mq.passwordHash) && !(null === Aq || void 0 === Aq ? void 0 : Aq.length),
            Nq = !!Bq && Wq,
            aq = {
              uid: mq.localId,
              displayName: mq.displayName || null,
              photoURL: mq.photoUrl || null,
              email: mq.email || null,
              emailVerified: mq.emailVerified || !1,
              phoneNumber: mq.phoneNumber || null,
              tenantId: mq.tenantId || null,
              providerData: Aq,
              metadata: new eq(mq.createdAt, mq.lastLoginAt),
              isAnonymous: Nq
            };
          Object.assign(qq, aq)
        }
        async function qE(qq) {
          const Eq = (0, Yq.K)(qq);
          await Dq(Eq), await Eq.auth._persistUserIfCurrent(Eq), Eq.auth._notifyListenersIfCurrent(Eq)
        }
        class EE {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(qq) {
            vq(qq.idToken, "internal-error"), vq("undefined" !== typeof qq.idToken, "internal-error"), vq("undefined" !== typeof qq.refreshToken, "internal-error");
            const Eq = "expiresIn" in qq && "undefined" !== typeof qq.expiresIn ? Number(qq.expiresIn) : function(qq) {
              const Eq = Kq(qq);
              return vq(Eq, "internal-error"), vq("undefined" !== typeof Eq.exp, "internal-error"), vq("undefined" !== typeof Eq.iat, "internal-error"), Number(Eq.exp) - Number(Eq.iat)
            }(qq.idToken);
            this.updateTokensAndExpiration(qq.idToken, qq.refreshToken, Eq)
          }
          async getToken(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return vq(!this.accessToken || this.refreshToken, qq, "user-token-expired"), Eq || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(qq, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(qq, Eq) {
            const {
              accessToken: gq,
              refreshToken: lq,
              expiresIn: Oq
            } = await async function(qq, Eq) {
              const gq = await Lq(qq, {}, (async () => {
                const gq = (0, Yq.$)({
                    grant_type: "refresh_token",
                    refresh_token: Eq
                  }).slice(1),
                  {
                    tokenApiHost: lq,
                    apiKey: Oq
                  } = qq.config,
                  mq = kq(qq, lq, "/v1/token", `key=${Oq}`),
                  xq = await qq._getAdditionalHeaders();
                return xq["Content-Type"] = "application/x-www-form-urlencoded", Tq.fetch()(mq, {
                  method: "POST",
                  headers: xq,
                  body: gq
                })
              }));
              return {
                accessToken: gq.access_token,
                expiresIn: gq.expires_in,
                refreshToken: gq.refresh_token
              }
            }(qq, Eq);
            this.updateTokensAndExpiration(gq, lq, Number(Oq))
          }
          updateTokensAndExpiration(qq, Eq, gq) {
            this.refreshToken = Eq || null, this.accessToken = qq || null, this.expirationTime = Date.now() + 1e3 * gq
          }
          static fromJSON(qq, Eq) {
            const {
              refreshToken: gq,
              accessToken: Yq,
              expirationTime: lq
            } = Eq, Oq = new EE;
            return gq && (vq("string" === typeof gq, "internal-error", {
              appName: qq
            }), Oq.refreshToken = gq), Yq && (vq("string" === typeof Yq, "internal-error", {
              appName: qq
            }), Oq.accessToken = Yq), lq && (vq("number" === typeof lq, "internal-error", {
              appName: qq
            }), Oq.expirationTime = lq), Oq
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(qq) {
            this.accessToken = qq.accessToken, this.refreshToken = qq.refreshToken, this.expirationTime = qq.expirationTime
          }
          _clone() {
            return Object.assign(new EE, this.toJSON())
          }
          _performRefresh() {
            return hq("not implemented")
          }
        }

        function gE(qq, Eq) {
          vq("string" === typeof qq || "undefined" === typeof qq, "internal-error", {
            appName: Eq
          })
        }
        class YE {
          constructor(qq) {
            var {
              uid: Eq,
              auth: gq,
              stsTokenManager: Yq
            } = qq, lq = Oq(qq, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Iq(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Eq, this.auth = gq, this.stsTokenManager = Yq, this.accessToken = Yq.accessToken, this.displayName = lq.displayName || null, this.email = lq.email || null, this.emailVerified = lq.emailVerified || !1, this.phoneNumber = lq.phoneNumber || null, this.photoURL = lq.photoURL || null, this.isAnonymous = lq.isAnonymous || !1, this.tenantId = lq.tenantId || null, this.providerData = lq.providerData ? [...lq.providerData] : [], this.metadata = new eq(lq.createdAt || void 0, lq.lastLoginAt || void 0)
          }
          async getIdToken(qq) {
            const Eq = await Cq(this, this.stsTokenManager.getToken(this.auth, qq));
            return vq(Eq, this.auth, "internal-error"), this.accessToken !== Eq && (this.accessToken = Eq, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Eq
          }
          getIdTokenResult(qq) {
            return Xq(this, qq)
          }
          reload() {
            return qE(this)
          }
          _assign(qq) {
            this !== qq && (vq(this.uid === qq.uid, this.auth, "internal-error"), this.displayName = qq.displayName, this.photoURL = qq.photoURL, this.email = qq.email, this.emailVerified = qq.emailVerified, this.phoneNumber = qq.phoneNumber, this.isAnonymous = qq.isAnonymous, this.tenantId = qq.tenantId, this.providerData = qq.providerData.map((qq => Object.assign({}, qq))), this.metadata._copy(qq.metadata), this.stsTokenManager._assign(qq.stsTokenManager))
          }
          _clone(qq) {
            const Eq = new YE(Object.assign(Object.assign({}, this), {
              auth: qq,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return Eq.metadata._copy(this.metadata), Eq
          }
          _onReload(qq) {
            vq(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = qq, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(qq) {
            this.reloadListener ? this.reloadListener(qq) : this.reloadUserInfo = qq
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gq = !1;
            qq.idToken && qq.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(qq), gq = !0), Eq && await Dq(this), await this.auth._persistUserIfCurrent(this), gq && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const qq = await this.getIdToken();
            return await Cq(this, async function(qq, Eq) {
              return Gq(qq, "POST", "/v1/accounts:delete", Eq)
            }(this.auth, {
              idToken: qq
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
              providerData: this.providerData.map((qq => Object.assign({}, qq))),
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
          static _fromJSON(qq, Eq) {
            var gq, Yq, lq, Oq, mq, xq, Aq, cq;
            const uq = null !== (gq = Eq.displayName) && void 0 !== gq ? gq : void 0,
              Bq = null !== (Yq = Eq.email) && void 0 !== Yq ? Yq : void 0,
              Wq = null !== (lq = Eq.phoneNumber) && void 0 !== lq ? lq : void 0,
              Nq = null !== (Oq = Eq.photoURL) && void 0 !== Oq ? Oq : void 0,
              aq = null !== (mq = Eq.tenantId) && void 0 !== mq ? mq : void 0,
              Vq = null !== (xq = Eq._redirectEventId) && void 0 !== xq ? xq : void 0,
              dq = null !== (Aq = Eq.createdAt) && void 0 !== Aq ? Aq : void 0,
              jq = null !== (cq = Eq.lastLoginAt) && void 0 !== cq ? cq : void 0,
              {
                uid: Hq,
                emailVerified: oq,
                isAnonymous: Pq,
                providerData: Qq,
                stsTokenManager: yq
              } = Eq;
            vq(Hq && yq, qq, "internal-error");
            const tq = EE.fromJSON(this.name, yq);
            vq("string" === typeof Hq, qq, "internal-error"), gE(uq, qq.name), gE(Bq, qq.name), vq("boolean" === typeof oq, qq, "internal-error"), vq("boolean" === typeof Pq, qq, "internal-error"), gE(Wq, qq.name), gE(Nq, qq.name), gE(aq, qq.name), gE(Vq, qq.name), gE(dq, qq.name), gE(jq, qq.name);
            const rq = new YE({
              uid: Hq,
              auth: qq,
              email: Bq,
              emailVerified: oq,
              displayName: uq,
              isAnonymous: Pq,
              photoURL: Nq,
              phoneNumber: Wq,
              tenantId: aq,
              stsTokenManager: tq,
              createdAt: dq,
              lastLoginAt: jq
            });
            return Qq && Array.isArray(Qq) && (rq.providerData = Qq.map((qq => Object.assign({}, qq)))), Vq && (rq._redirectEventId = Vq), rq
          }
          static async _fromIdTokenResponse(qq, Eq) {
            let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Yq = new EE;
            Yq.updateFromServerResponse(Eq);
            const lq = new YE({
              uid: Eq.localId,
              auth: qq,
              stsTokenManager: Yq,
              isAnonymous: gq
            });
            return await Dq(lq), lq
          }
        }
        const lE = new Map;

        function OE(qq) {
          nq(qq instanceof Function, "Expected a class definition");
          let Eq = lE.get(qq);
          return Eq ? (nq(Eq instanceof qq, "Instance stored in cache mismatched with class"), Eq) : (Eq = new qq, lE.set(qq, Eq), Eq)
        }
        class mE {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(qq, Eq) {
            this.storage[qq] = Eq
          }
          async _get(qq) {
            const Eq = this.storage[qq];
            return void 0 === Eq ? null : Eq
          }
          async _remove(qq) {
            delete this.storage[qq]
          }
          _addListener(qq, Eq) {}
          _removeListener(qq, Eq) {}
        }
        mE.type = "NONE";
        const xE = mE;

        function AE(qq, Eq, gq) {
          return `firebase:${qq}:${Eq}:${gq}`
        }
        class cE {
          constructor(qq, Eq, gq) {
            this.persistence = qq, this.auth = Eq, this.userKey = gq;
            const {
              config: Yq,
              name: lq
            } = this.auth;
            this.fullUserKey = AE(this.userKey, Yq.apiKey, lq), this.fullPersistenceKey = AE("persistence", Yq.apiKey, lq), this.boundEventHandler = Eq._onStorageEvent.bind(Eq), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(qq) {
            return this.persistence._set(this.fullUserKey, qq.toJSON())
          }
          async getCurrentUser() {
            const qq = await this.persistence._get(this.fullUserKey);
            return qq ? YE._fromJSON(this.auth, qq) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(qq) {
            if (this.persistence === qq) return;
            const Eq = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = qq, Eq ? this.setCurrentUser(Eq) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(qq, Eq) {
            let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Eq.length) return new cE(OE(xE), qq, gq);
            const Yq = (await Promise.all(Eq.map((async qq => {
              if (await qq._isAvailable()) return qq
            })))).filter((qq => qq));
            let lq = Yq[0] || OE(xE);
            const Oq = AE(gq, qq.config.apiKey, qq.name);
            let mq = null;
            for (const cq of Eq) try {
              const Eq = await cq._get(Oq);
              if (Eq) {
                const gq = YE._fromJSON(qq, Eq);
                cq !== lq && (mq = gq), lq = cq;
                break
              }
            } catch (Aq) {}
            const xq = Yq.filter((qq => qq._shouldAllowMigration));
            return lq._shouldAllowMigration && xq.length ? (lq = xq[0], mq && await lq._set(Oq, mq.toJSON()), await Promise.all(Eq.map((async qq => {
              if (qq !== lq) try {
                await qq._remove(Oq)
              } catch (Aq) {}
            }))), new cE(lq, qq, gq)) : new cE(lq, qq, gq)
          }
        }

        function uE(qq) {
          const Eq = qq.toLowerCase();
          if (Eq.includes("opera/") || Eq.includes("opr/") || Eq.includes("opios/")) return "Opera";
          if (aE(Eq)) return "IEMobile";
          if (Eq.includes("msie") || Eq.includes("trident/")) return "IE";
          if (Eq.includes("edge/")) return "Edge";
          if (BE(Eq)) return "Firefox";
          if (Eq.includes("silk/")) return "Silk";
          if (dE(Eq)) return "Blackberry";
          if (jE(Eq)) return "Webos";
          if (WE(Eq)) return "Safari";
          if ((Eq.includes("chrome/") || NE(Eq)) && !Eq.includes("edge/")) return "Chrome";
          if (VE(Eq)) return "Android";
          {
            const Eq = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              gq = qq.match(Eq);
            if (2 === (null === gq || void 0 === gq ? void 0 : gq.length)) return gq[1]
          }
          return "Other"
        }

        function BE() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
          return /firefox\//i.test(qq)
        }

        function WE() {
          const qq = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)()).toLowerCase();
          return qq.includes("safari/") && !qq.includes("chrome/") && !qq.includes("crios/") && !qq.includes("android")
        }

        function NE() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
          return /crios\//i.test(qq)
        }

        function aE() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
          return /iemobile/i.test(qq)
        }

        function VE() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
          return /android/i.test(qq)
        }

        function dE() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
          return /blackberry/i.test(qq)
        }

        function jE() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
          return /webos/i.test(qq)
        }

        function HE() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
          return /iphone|ipad|ipod/i.test(qq) || /macintosh/i.test(qq) && /mobile/i.test(qq)
        }

        function oE() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
          return HE(qq) || VE(qq) || jE(qq) || dE(qq) || /windows phone/i.test(qq) || aE(qq)
        }

        function PE(qq) {
          let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (qq) {
            case "Browser":
              Eq = uE((0, Yq.L)());
              break;
            case "Worker":
              Eq = `${uE((0,Yq.L)())}-${qq}`;
              break;
            default:
              Eq = qq
          }
          const Oq = gq.length ? gq.join(",") : "FirebaseCore-web";
          return `${Eq}/JsCore/${lq.d}/${Oq}`
        }
        async function QE(qq, Eq) {
          return Gq(qq, "GET", "/v2/recaptchaConfig", pq(qq, Eq))
        }

        function yE(qq) {
          return void 0 !== qq && void 0 !== qq.getResponse
        }

        function tE(qq) {
          return void 0 !== qq && void 0 !== qq.enterprise
        }
        class rE {
          constructor(qq) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === qq.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = qq.recaptchaKey.split("/")[3], this.emailPasswordEnabled = qq.recaptchaEnforcementState.some((qq => "EMAIL_PASSWORD_PROVIDER" === qq.provider && "OFF" !== qq.enforcementState))
          }
        }

        function vE(qq) {
          return new Promise(((Eq, gq) => {
            const Yq = document.createElement("script");
            Yq.setAttribute("src", qq), Yq.onload = Eq, Yq.onerror = qq => {
                const Eq = Qq("internal-error");
                Eq.customData = qq, gq(Eq)
              }, Yq.type = "text/javascript", Yq.charset = "UTF-8",
              function() {
                var qq, Eq;
                return null !== (Eq = null === (qq = document.getElementsByTagName("head")) || void 0 === qq ? void 0 : qq[0]) && void 0 !== Eq ? Eq : document
              }().appendChild(Yq)
          }))
        }

        function hE(qq) {
          return `__${qq}${Math.floor(1e6*Math.random())}`
        }
        class nE {
          constructor(qq) {
            this.type = "recaptcha-enterprise", this.auth = fE(qq)
          }
          async verify() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function gq(Eq, gq, Yq) {
              const lq = window.grecaptcha;
              tE(lq) ? lq.enterprise.ready((() => {
                lq.enterprise.execute(Eq, {
                  action: qq
                }).then((qq => {
                  gq(qq)
                })).catch((() => {
                  gq("NO_RECAPTCHA")
                }))
              })) : Yq(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((qq, Yq) => {
              (async function(qq) {
                if (!Eq) {
                  if (null == qq.tenantId && null != qq._agentRecaptchaConfig) return qq._agentRecaptchaConfig.siteKey;
                  if (null != qq.tenantId && void 0 !== qq._tenantRecaptchaConfigs[qq.tenantId]) return qq._tenantRecaptchaConfigs[qq.tenantId].siteKey
                }
                return new Promise((async (Eq, gq) => {
                  QE(qq, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Yq => {
                    if (void 0 !== Yq.recaptchaKey) {
                      const gq = new rE(Yq);
                      return null == qq.tenantId ? qq._agentRecaptchaConfig = gq : qq._tenantRecaptchaConfigs[qq.tenantId] = gq, Eq(gq.siteKey)
                    }
                    gq(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((qq => {
                    gq(qq)
                  }))
                }))
              })(this.auth).then((lq => {
                if (!Eq && tE(window.grecaptcha)) gq(lq, qq, Yq);
                else {
                  if ("undefined" === typeof window) return void Yq(new Error("RecaptchaVerifier is only supported in browser"));
                  vE("https://www.google.com/recaptcha/enterprise.js?render=" + lq).then((() => {
                    gq(lq, qq, Yq)
                  })).catch((qq => {
                    Yq(qq)
                  }))
                }
              })).catch((qq => {
                Yq(qq)
              }))
            }))
          }
        }
        async function bE(qq, Eq, gq) {
          let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const lq = new nE(qq);
          let Oq;
          try {
            Oq = await lq.verify(gq)
          } catch (xq) {
            Oq = await lq.verify(gq, !0)
          }
          const mq = Object.assign({}, Eq);
          return Yq ? Object.assign(mq, {
            captchaResp: Oq
          }) : Object.assign(mq, {
            captchaResponse: Oq
          }), Object.assign(mq, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(mq, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), mq
        }
        class iE {
          constructor(qq) {
            this.auth = qq, this.queue = []
          }
          pushCallback(qq, Eq) {
            const gq = Eq => new Promise(((gq, Yq) => {
              try {
                gq(qq(Eq))
              } catch (lq) {
                Yq(lq)
              }
            }));
            gq.onAbort = Eq, this.queue.push(gq);
            const Yq = this.queue.length - 1;
            return () => {
              this.queue[Yq] = () => Promise.resolve()
            }
          }
          async runMiddleware(qq) {
            if (this.auth.currentUser === qq) return;
            const Eq = [];
            try {
              for (const gq of this.queue) await gq(qq), gq.onAbort && Eq.push(gq.onAbort)
            } catch (gq) {
              Eq.reverse();
              for (const qq of Eq) try {
                qq()
              } catch (Yq) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === gq || void 0 === gq ? void 0 : gq.message
              })
            }
          }
        }
        class ZE {
          constructor(qq, Eq, gq, Yq) {
            this.app = qq, this.heartbeatServiceProvider = Eq, this.appCheckServiceProvider = gq, this.config = Yq, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ME(this), this.idTokenSubscription = new ME(this), this.beforeStateQueue = new iE(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = dq, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = qq.name, this.clientVersion = Yq.sdkClientVersion
          }
          _initializeWithPersistence(qq, Eq) {
            return Eq && (this._popupRedirectResolver = OE(Eq)), this._initializationPromise = this.queue((async () => {
              var gq, Yq;
              if (!this._deleted && (this.persistenceManager = await cE.create(this, qq), !this._deleted)) {
                if (null === (gq = this._popupRedirectResolver) || void 0 === gq ? void 0 : gq._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (lq) {}
                await this.initializeCurrentUser(Eq), this.lastNotifiedUid = (null === (Yq = this.currentUser) || void 0 === Yq ? void 0 : Yq.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const qq = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || qq ? this.currentUser && qq && this.currentUser.uid === qq.uid ? (this._currentUser._assign(qq), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(qq, !0) : void 0
          }
          async initializeCurrentUser(qq) {
            var Eq;
            const gq = await this.assertedPersistence.getCurrentUser();
            let Yq = gq,
              lq = !1;
            if (qq && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const gq = null === (Eq = this.redirectUser) || void 0 === Eq ? void 0 : Eq._redirectEventId,
                Oq = null === Yq || void 0 === Yq ? void 0 : Yq._redirectEventId,
                mq = await this.tryRedirectSignIn(qq);
              gq && gq !== Oq || !(null === mq || void 0 === mq ? void 0 : mq.user) || (Yq = mq.user, lq = !0)
            }
            if (!Yq) return this.directlySetCurrentUser(null);
            if (!Yq._redirectEventId) {
              if (lq) try {
                await this.beforeStateQueue.runMiddleware(Yq)
              } catch (Oq) {
                Yq = gq, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Oq)))
              }
              return Yq ? this.reloadAndSetCurrentUserOrClear(Yq) : this.directlySetCurrentUser(null)
            }
            return vq(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Yq._redirectEventId ? this.directlySetCurrentUser(Yq) : this.reloadAndSetCurrentUserOrClear(Yq)
          }
          async tryRedirectSignIn(qq) {
            let Eq = null;
            try {
              Eq = await this._popupRedirectResolver._completeRedirectFn(this, qq, !0)
            } catch (gq) {
              await this._setRedirectUser(null)
            }
            return Eq
          }
          async reloadAndSetCurrentUserOrClear(qq) {
            try {
              await Dq(qq)
            } catch (Eq) {
              if ("auth/network-request-failed" !== (null === Eq || void 0 === Eq ? void 0 : Eq.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(qq)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const qq = navigator;
              return qq.languages && qq.languages[0] || qq.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(qq) {
            const Eq = qq ? (0, Yq.K)(qq) : null;
            return Eq && vq(Eq.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Eq && Eq._clone(this))
          }
          async _updateCurrentUser(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return qq && vq(this.tenantId === qq.tenantId, this, "tenant-id-mismatch"), Eq || await this.beforeStateQueue.runMiddleware(qq), this.queue((async () => {
              await this.directlySetCurrentUser(qq), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(qq) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(OE(qq))
            }))
          }
          async initializeRecaptchaConfig() {
            const qq = await QE(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Eq = new rE(qq);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Eq : this._tenantRecaptchaConfigs[this.tenantId] = Eq, Eq.emailPasswordEnabled) {
              new nE(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(qq) {
            this._errorFactory = new Yq.d("auth", "Firebase", qq())
          }
          onAuthStateChanged(qq, Eq, gq) {
            return this.registerStateListener(this.authStateSubscription, qq, Eq, gq)
          }
          beforeAuthStateChanged(qq, Eq) {
            return this.beforeStateQueue.pushCallback(qq, Eq)
          }
          onIdTokenChanged(qq, Eq, gq) {
            return this.registerStateListener(this.idTokenSubscription, qq, Eq, gq)
          }
          toJSON() {
            var qq;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (qq = this._currentUser) || void 0 === qq ? void 0 : qq.toJSON()
            }
          }
          async _setRedirectUser(qq, Eq) {
            const gq = await this.getOrInitRedirectPersistenceManager(Eq);
            return null === qq ? gq.removeCurrentUser() : gq.setCurrentUser(qq)
          }
          async getOrInitRedirectPersistenceManager(qq) {
            if (!this.redirectPersistenceManager) {
              const Eq = qq && OE(qq) || this._popupRedirectResolver;
              vq(Eq, this, "argument-error"), this.redirectPersistenceManager = await cE.create(this, [OE(Eq._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(qq) {
            var Eq, gq;
            return this._isInitialized && await this.queue((async () => {})), (null === (Eq = this._currentUser) || void 0 === Eq ? void 0 : Eq._redirectEventId) === qq ? this._currentUser : (null === (gq = this.redirectUser) || void 0 === gq ? void 0 : gq._redirectEventId) === qq ? this.redirectUser : null
          }
          async _persistUserIfCurrent(qq) {
            if (qq === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(qq)))
          }
          _notifyListenersIfCurrent(qq) {
            qq === this.currentUser && this.notifyAuthListeners()
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
            var qq, Eq;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const gq = null !== (Eq = null === (qq = this.currentUser) || void 0 === qq ? void 0 : qq.uid) && void 0 !== Eq ? Eq : null;
            this.lastNotifiedUid !== gq && (this.lastNotifiedUid = gq, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(qq, Eq, gq, Yq) {
            if (this._deleted) return () => {};
            const lq = "function" === typeof Eq ? Eq : Eq.next.bind(Eq),
              Oq = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return vq(Oq, this, "internal-error"), Oq.then((() => lq(this.currentUser))), "function" === typeof Eq ? qq.addObserver(Eq, gq, Yq) : qq.addObserver(Eq)
          }
          async directlySetCurrentUser(qq) {
            this.currentUser && this.currentUser !== qq && this._currentUser._stopProactiveRefresh(), qq && this.isProactiveRefreshEnabled && qq._startProactiveRefresh(), this.currentUser = qq, qq ? await this.assertedPersistence.setCurrentUser(qq) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(qq) {
            return this.operations = this.operations.then(qq, qq), this.operations
          }
          get assertedPersistence() {
            return vq(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(qq) {
            qq && !this.frameworks.includes(qq) && (this.frameworks.push(qq), this.frameworks.sort(), this.clientVersion = PE(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var qq;
            const Eq = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (Eq["X-Firebase-gmpid"] = this.app.options.appId);
            const gq = await (null === (qq = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === qq ? void 0 : qq.getHeartbeatsHeader());
            gq && (Eq["X-Firebase-Client"] = gq);
            const Yq = await this._getAppCheckToken();
            return Yq && (Eq["X-Firebase-AppCheck"] = Yq), Eq
          }
          async _getAppCheckToken() {
            var qq;
            const Eq = await (null === (qq = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === qq ? void 0 : qq.getToken());
            return (null === Eq || void 0 === Eq ? void 0 : Eq.error) && function(qq) {
              if (Hq.logLevel <= mq.c.WARN) {
                for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
                Hq.warn(`Auth (${lq.d}): ${qq}`, ...gq)
              }
            }(`Error while retrieving App Check token: ${Eq.error}`), null === Eq || void 0 === Eq ? void 0 : Eq.token
          }
        }

        function fE(qq) {
          return (0, Yq.K)(qq)
        }
        class ME {
          constructor(qq) {
            this.auth = qq, this.observer = null, this.addObserver = (0, Yq.u)((qq => this.observer = qq))
          }
          get next() {
            return vq(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function TE(qq, Eq) {
          const gq = (0, lq.s)(qq, "auth");
          if (gq.isInitialized()) {
            const qq = gq.getImmediate(),
              lq = gq.getOptions();
            if ((0, Yq.x)(lq, null !== Eq && void 0 !== Eq ? Eq : {})) return qq;
            Pq(qq, "already-initialized")
          }
          return gq.initialize({
            options: Eq
          })
        }

        function zE(qq, Eq, gq) {
          const Yq = fE(qq);
          vq(Yq._canInitEmulator, Yq, "emulator-config-failed"), vq(/^https?:\/\//.test(Eq), Yq, "invalid-emulator-scheme");
          const lq = !!(null === gq || void 0 === gq ? void 0 : gq.disableWarnings),
            Oq = SE(Eq),
            {
              host: mq,
              port: xq
            } = function(qq) {
              const Eq = SE(qq),
                gq = /(\/\/)?([^?#/]+)/.exec(qq.substr(Eq.length));
              if (!gq) return {
                host: "",
                port: null
              };
              const Yq = gq[2].split("@").pop() || "",
                lq = /^(\[[^\]]+\])(:|$)/.exec(Yq);
              if (lq) {
                const qq = lq[1];
                return {
                  host: qq,
                  port: pE(Yq.substr(qq.length + 1))
                }
              } {
                const [qq, Eq] = Yq.split(":");
                return {
                  host: qq,
                  port: pE(Eq)
                }
              }
            }(Eq),
            Aq = null === xq ? "" : `:${xq}`;
          Yq.config.emulator = {
            url: `${Oq}//${mq}${Aq}/`
          }, Yq.settings.appVerificationDisabledForTesting = !0, Yq.emulatorConfig = Object.freeze({
            host: mq,
            port: xq,
            protocol: Oq.replace(":", ""),
            options: Object.freeze({
              disableWarnings: lq
            })
          }), lq || function() {
            function qq() {
              const qq = document.createElement("p"),
                Eq = qq.style;
              qq.innerText = "Running in emulator mode. Do not use with production credentials.", Eq.position = "fixed", Eq.width = "100%", Eq.backgroundColor = "#ffffff", Eq.border = ".1em solid #000000", Eq.color = "#b50000", Eq.bottom = "0px", Eq.left = "0px", Eq.margin = "0px", Eq.zIndex = "10000", Eq.textAlign = "center", qq.classList.add("firebase-emulator-warning"), document.body.appendChild(qq)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", qq) : qq())
          }()
        }

        function SE(qq) {
          const Eq = qq.indexOf(":");
          return Eq < 0 ? "" : qq.substr(0, Eq + 1)
        }

        function pE(qq) {
          if (!qq) return null;
          const Eq = Number(qq);
          return isNaN(Eq) ? null : Eq
        }
        class GE {
          constructor(qq, Eq) {
            this.providerId = qq, this.signInMethod = Eq
          }
          toJSON() {
            return hq("not implemented")
          }
          _getIdTokenResponse(qq) {
            return hq("not implemented")
          }
          _linkToIdToken(qq, Eq) {
            return hq("not implemented")
          }
          _getReauthenticationResolver(qq) {
            return hq("not implemented")
          }
        }
        async function LE(qq, Eq) {
          return Gq(qq, "POST", "/v1/accounts:resetPassword", pq(qq, Eq))
        }
        async function JE(qq, Eq) {
          return Gq(qq, "POST", "/v1/accounts:update", Eq)
        }
        async function kE(qq, Eq) {
          return Jq(qq, "POST", "/v1/accounts:signInWithPassword", pq(qq, Eq))
        }
        async function RE(qq, Eq) {
          return Gq(qq, "POST", "/v1/accounts:sendOobCode", pq(qq, Eq))
        }
        async function UE(qq, Eq) {
          return RE(qq, Eq)
        }
        async function FE(qq, Eq) {
          return RE(qq, Eq)
        }
        class sE extends GE {
          constructor(qq, Eq, gq) {
            let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", gq), this._email = qq, this._password = Eq, this._tenantId = Yq
          }
          static _fromEmailAndPassword(qq, Eq) {
            return new sE(qq, Eq, "password")
          }
          static _fromEmailAndCode(qq, Eq) {
            return new sE(qq, Eq, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(qq) {
            const Eq = "string" === typeof qq ? JSON.parse(qq) : qq;
            if ((null === Eq || void 0 === Eq ? void 0 : Eq.email) && (null === Eq || void 0 === Eq ? void 0 : Eq.password)) {
              if ("password" === Eq.signInMethod) return this._fromEmailAndPassword(Eq.email, Eq.password);
              if ("emailLink" === Eq.signInMethod) return this._fromEmailAndCode(Eq.email, Eq.password, Eq.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(qq) {
            var Eq;
            switch (this.signInMethod) {
              case "password":
                const gq = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Eq = qq._getRecaptchaConfig()) || void 0 === Eq ? void 0 : Eq.emailPasswordEnabled) {
                  const Eq = await bE(qq, gq, "signInWithPassword");
                  return kE(qq, Eq)
                }
                return kE(qq, gq).catch((async Eq => {
                  if ("auth/missing-recaptcha-token" === Eq.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Eq = await bE(qq, gq, "signInWithPassword");
                    return kE(qq, Eq)
                  }
                  return Promise.reject(Eq)
                }));
              case "emailLink":
                return async function(qq, Eq) {
                  return Jq(qq, "POST", "/v1/accounts:signInWithEmailLink", pq(qq, Eq))
                }(qq, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Pq(qq, "internal-error")
            }
          }
          async _linkToIdToken(qq, Eq) {
            switch (this.signInMethod) {
              case "password":
                return JE(qq, {
                  idToken: Eq,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(qq, Eq) {
                  return Jq(qq, "POST", "/v1/accounts:signInWithEmailLink", pq(qq, Eq))
                }(qq, {
                  idToken: Eq,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Pq(qq, "internal-error")
            }
          }
          _getReauthenticationResolver(qq) {
            return this._getIdTokenResponse(qq)
          }
        }
        async function XE(qq, Eq) {
          return Jq(qq, "POST", "/v1/accounts:signInWithIdp", pq(qq, Eq))
        }
        class wE extends GE {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(qq) {
            const Eq = new wE(qq.providerId, qq.signInMethod);
            return qq.idToken || qq.accessToken ? (qq.idToken && (Eq.idToken = qq.idToken), qq.accessToken && (Eq.accessToken = qq.accessToken), qq.nonce && !qq.pendingToken && (Eq.nonce = qq.nonce), qq.pendingToken && (Eq.pendingToken = qq.pendingToken)) : qq.oauthToken && qq.oauthTokenSecret ? (Eq.accessToken = qq.oauthToken, Eq.secret = qq.oauthTokenSecret) : Pq("argument-error"), Eq
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
          static fromJSON(qq) {
            const Eq = "string" === typeof qq ? JSON.parse(qq) : qq,
              {
                providerId: gq,
                signInMethod: Yq
              } = Eq,
              lq = Oq(Eq, ["providerId", "signInMethod"]);
            if (!gq || !Yq) return null;
            const mq = new wE(gq, Yq);
            return mq.idToken = lq.idToken || void 0, mq.accessToken = lq.accessToken || void 0, mq.secret = lq.secret, mq.nonce = lq.nonce, mq.pendingToken = lq.pendingToken || null, mq
          }
          _getIdTokenResponse(qq) {
            return XE(qq, this.buildRequest())
          }
          _linkToIdToken(qq, Eq) {
            const gq = this.buildRequest();
            return gq.idToken = Eq, XE(qq, gq)
          }
          _getReauthenticationResolver(qq) {
            const Eq = this.buildRequest();
            return Eq.autoCreate = !1, XE(qq, Eq)
          }
          buildRequest() {
            const qq = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) qq.pendingToken = this.pendingToken;
            else {
              const Eq = {};
              this.idToken && (Eq.id_token = this.idToken), this.accessToken && (Eq.access_token = this.accessToken), this.secret && (Eq.oauth_token_secret = this.secret), Eq.providerId = this.providerId, this.nonce && !this.pendingToken && (Eq.nonce = this.nonce), qq.postBody = (0, Yq.$)(Eq)
            }
            return qq
          }
        }
        const KE = {
          USER_NOT_FOUND: "user-not-found"
        };
        class CE extends GE {
          constructor(qq) {
            super("phone", "phone"), this.params = qq
          }
          static _fromVerification(qq, Eq) {
            return new CE({
              verificationId: qq,
              verificationCode: Eq
            })
          }
          static _fromTokenResponse(qq, Eq) {
            return new CE({
              phoneNumber: qq,
              temporaryProof: Eq
            })
          }
          _getIdTokenResponse(qq) {
            return async function(qq, Eq) {
              return Jq(qq, "POST", "/v1/accounts:signInWithPhoneNumber", pq(qq, Eq))
            }(qq, this._makeVerificationRequest())
          }
          _linkToIdToken(qq, Eq) {
            return async function(qq, Eq) {
              const gq = await Jq(qq, "POST", "/v1/accounts:signInWithPhoneNumber", pq(qq, Eq));
              if (gq.temporaryProof) throw Uq(qq, "account-exists-with-different-credential", gq);
              return gq
            }(qq, Object.assign({
              idToken: Eq
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(qq) {
            return async function(qq, Eq) {
              return Jq(qq, "POST", "/v1/accounts:signInWithPhoneNumber", pq(qq, Object.assign(Object.assign({}, Eq), {
                operation: "REAUTH"
              })), KE)
            }(qq, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: qq,
              phoneNumber: Eq,
              verificationId: gq,
              verificationCode: Yq
            } = this.params;
            return qq && Eq ? {
              temporaryProof: qq,
              phoneNumber: Eq
            } : {
              sessionInfo: gq,
              code: Yq
            }
          }
          toJSON() {
            const qq = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (qq.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (qq.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (qq.verificationCode = this.params.verificationCode), this.params.verificationId && (qq.verificationId = this.params.verificationId), qq
          }
          static fromJSON(qq) {
            "string" === typeof qq && (qq = JSON.parse(qq));
            const {
              verificationId: Eq,
              verificationCode: gq,
              phoneNumber: Yq,
              temporaryProof: lq
            } = qq;
            return gq || Eq || Yq || lq ? new CE({
              verificationId: Eq,
              verificationCode: gq,
              phoneNumber: Yq,
              temporaryProof: lq
            }) : null
          }
        }
        class IE {
          constructor(qq) {
            var Eq, gq, lq, Oq, mq, xq;
            const Aq = (0, Yq.X)((0, Yq.A)(qq)),
              cq = null !== (Eq = Aq.apiKey) && void 0 !== Eq ? Eq : null,
              uq = null !== (gq = Aq.oobCode) && void 0 !== gq ? gq : null,
              Bq = function(qq) {
                switch (qq) {
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
              }(null !== (lq = Aq.mode) && void 0 !== lq ? lq : null);
            vq(cq && uq && Bq, "argument-error"), this.apiKey = cq, this.operation = Bq, this.code = uq, this.continueUrl = null !== (Oq = Aq.continueUrl) && void 0 !== Oq ? Oq : null, this.languageCode = null !== (mq = Aq.languageCode) && void 0 !== mq ? mq : null, this.tenantId = null !== (xq = Aq.tenantId) && void 0 !== xq ? xq : null
          }
          static parseLink(qq) {
            const Eq = function(qq) {
              const Eq = (0, Yq.X)((0, Yq.A)(qq)).link,
                gq = Eq ? (0, Yq.X)((0, Yq.A)(Eq)).deep_link_id : null,
                lq = (0, Yq.X)((0, Yq.A)(qq)).deep_link_id;
              return (lq ? (0, Yq.X)((0, Yq.A)(lq)).link : null) || lq || gq || Eq || qq
            }(qq);
            try {
              return new IE(Eq)
            } catch (gq) {
              return null
            }
          }
        }

        function eE(qq) {
          return IE.parseLink(qq)
        }
        class DE {
          constructor() {
            this.providerId = DE.PROVIDER_ID
          }
          static credential(qq, Eq) {
            return sE._fromEmailAndPassword(qq, Eq)
          }
          static credentialWithLink(qq, Eq) {
            const gq = IE.parseLink(Eq);
            return vq(gq, "argument-error"), sE._fromEmailAndCode(qq, gq.code, gq.tenantId)
          }
        }
        DE.PROVIDER_ID = "password", DE.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", DE.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class qg {
          constructor(qq) {
            this.providerId = qq, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(qq) {
            this.defaultLanguageCode = qq
          }
          setCustomParameters(qq) {
            return this.customParameters = qq, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class Eg extends qg {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(qq) {
            return this.scopes.includes(qq) || this.scopes.push(qq), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class gg extends Eg {
          static credentialFromJSON(qq) {
            const Eq = "string" === typeof qq ? JSON.parse(qq) : qq;
            return vq("providerId" in Eq && "signInMethod" in Eq, "argument-error"), wE._fromParams(Eq)
          }
          credential(qq) {
            return this._credential(Object.assign(Object.assign({}, qq), {
              nonce: qq.rawNonce
            }))
          }
          _credential(qq) {
            return vq(qq.idToken || qq.accessToken, "argument-error"), wE._fromParams(Object.assign(Object.assign({}, qq), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(qq) {
            return gg.oauthCredentialFromTaggedObject(qq)
          }
          static credentialFromError(qq) {
            return gg.oauthCredentialFromTaggedObject(qq.customData || {})
          }
          static oauthCredentialFromTaggedObject(qq) {
            let {
              _tokenResponse: Eq
            } = qq;
            if (!Eq) return null;
            const {
              oauthIdToken: gq,
              oauthAccessToken: Yq,
              oauthTokenSecret: lq,
              pendingToken: Oq,
              nonce: mq,
              providerId: xq
            } = Eq;
            if (!Yq && !lq && !gq && !Oq) return null;
            if (!xq) return null;
            try {
              return new gg(xq)._credential({
                idToken: gq,
                accessToken: Yq,
                nonce: mq,
                pendingToken: Oq
              })
            } catch (Aq) {
              return null
            }
          }
        }
        class Yg extends Eg {
          constructor() {
            super("facebook.com")
          }
          static credential(qq) {
            return wE._fromParams({
              providerId: Yg.PROVIDER_ID,
              signInMethod: Yg.FACEBOOK_SIGN_IN_METHOD,
              accessToken: qq
            })
          }
          static credentialFromResult(qq) {
            return Yg.credentialFromTaggedObject(qq)
          }
          static credentialFromError(qq) {
            return Yg.credentialFromTaggedObject(qq.customData || {})
          }
          static credentialFromTaggedObject(qq) {
            let {
              _tokenResponse: Eq
            } = qq;
            if (!Eq || !("oauthAccessToken" in Eq)) return null;
            if (!Eq.oauthAccessToken) return null;
            try {
              return Yg.credential(Eq.oauthAccessToken)
            } catch (gq) {
              return null
            }
          }
        }
        Yg.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Yg.PROVIDER_ID = "facebook.com";
        class lg extends Eg {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(qq, Eq) {
            return wE._fromParams({
              providerId: lg.PROVIDER_ID,
              signInMethod: lg.GOOGLE_SIGN_IN_METHOD,
              idToken: qq,
              accessToken: Eq
            })
          }
          static credentialFromResult(qq) {
            return lg.credentialFromTaggedObject(qq)
          }
          static credentialFromError(qq) {
            return lg.credentialFromTaggedObject(qq.customData || {})
          }
          static credentialFromTaggedObject(qq) {
            let {
              _tokenResponse: Eq
            } = qq;
            if (!Eq) return null;
            const {
              oauthIdToken: gq,
              oauthAccessToken: Yq
            } = Eq;
            if (!gq && !Yq) return null;
            try {
              return lg.credential(gq, Yq)
            } catch (lq) {
              return null
            }
          }
        }
        lg.GOOGLE_SIGN_IN_METHOD = "google.com", lg.PROVIDER_ID = "google.com";
        class Og extends Eg {
          constructor() {
            super("github.com")
          }
          static credential(qq) {
            return wE._fromParams({
              providerId: Og.PROVIDER_ID,
              signInMethod: Og.GITHUB_SIGN_IN_METHOD,
              accessToken: qq
            })
          }
          static credentialFromResult(qq) {
            return Og.credentialFromTaggedObject(qq)
          }
          static credentialFromError(qq) {
            return Og.credentialFromTaggedObject(qq.customData || {})
          }
          static credentialFromTaggedObject(qq) {
            let {
              _tokenResponse: Eq
            } = qq;
            if (!Eq || !("oauthAccessToken" in Eq)) return null;
            if (!Eq.oauthAccessToken) return null;
            try {
              return Og.credential(Eq.oauthAccessToken)
            } catch (gq) {
              return null
            }
          }
        }
        Og.GITHUB_SIGN_IN_METHOD = "github.com", Og.PROVIDER_ID = "github.com";
        class mg extends GE {
          constructor(qq, Eq) {
            super(qq, qq), this.pendingToken = Eq
          }
          _getIdTokenResponse(qq) {
            return XE(qq, this.buildRequest())
          }
          _linkToIdToken(qq, Eq) {
            const gq = this.buildRequest();
            return gq.idToken = Eq, XE(qq, gq)
          }
          _getReauthenticationResolver(qq) {
            const Eq = this.buildRequest();
            return Eq.autoCreate = !1, XE(qq, Eq)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(qq) {
            const Eq = "string" === typeof qq ? JSON.parse(qq) : qq,
              {
                providerId: gq,
                signInMethod: Yq,
                pendingToken: lq
              } = Eq;
            return gq && Yq && lq && gq === Yq ? new mg(gq, lq) : null
          }
          static _create(qq, Eq) {
            return new mg(qq, Eq)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class xg extends qg {
          constructor(qq) {
            vq(qq.startsWith("saml."), "argument-error"), super(qq)
          }
          static credentialFromResult(qq) {
            return xg.samlCredentialFromTaggedObject(qq)
          }
          static credentialFromError(qq) {
            return xg.samlCredentialFromTaggedObject(qq.customData || {})
          }
          static credentialFromJSON(qq) {
            const Eq = mg.fromJSON(qq);
            return vq(Eq, "argument-error"), Eq
          }
          static samlCredentialFromTaggedObject(qq) {
            let {
              _tokenResponse: Eq
            } = qq;
            if (!Eq) return null;
            const {
              pendingToken: gq,
              providerId: Yq
            } = Eq;
            if (!gq || !Yq) return null;
            try {
              return mg._create(Yq, gq)
            } catch (lq) {
              return null
            }
          }
        }
        class Ag extends Eg {
          constructor() {
            super("twitter.com")
          }
          static credential(qq, Eq) {
            return wE._fromParams({
              providerId: Ag.PROVIDER_ID,
              signInMethod: Ag.TWITTER_SIGN_IN_METHOD,
              oauthToken: qq,
              oauthTokenSecret: Eq
            })
          }
          static credentialFromResult(qq) {
            return Ag.credentialFromTaggedObject(qq)
          }
          static credentialFromError(qq) {
            return Ag.credentialFromTaggedObject(qq.customData || {})
          }
          static credentialFromTaggedObject(qq) {
            let {
              _tokenResponse: Eq
            } = qq;
            if (!Eq) return null;
            const {
              oauthAccessToken: gq,
              oauthTokenSecret: Yq
            } = Eq;
            if (!gq || !Yq) return null;
            try {
              return Ag.credential(gq, Yq)
            } catch (lq) {
              return null
            }
          }
        }
        async function cg(qq, Eq) {
          return Jq(qq, "POST", "/v1/accounts:signUp", pq(qq, Eq))
        }
        Ag.TWITTER_SIGN_IN_METHOD = "twitter.com", Ag.PROVIDER_ID = "twitter.com";
        class ug {
          constructor(qq) {
            this.user = qq.user, this.providerId = qq.providerId, this._tokenResponse = qq._tokenResponse, this.operationType = qq.operationType
          }
          static async _fromIdTokenResponse(qq, Eq, gq) {
            let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const lq = await YE._fromIdTokenResponse(qq, gq, Yq),
              Oq = Bg(gq);
            return new ug({
              user: lq,
              providerId: Oq,
              _tokenResponse: gq,
              operationType: Eq
            })
          }
          static async _forOperation(qq, Eq, gq) {
            await qq._updateTokensIfNecessary(gq, !0);
            const Yq = Bg(gq);
            return new ug({
              user: qq,
              providerId: Yq,
              _tokenResponse: gq,
              operationType: Eq
            })
          }
        }

        function Bg(qq) {
          return qq.providerId ? qq.providerId : "phoneNumber" in qq ? "phone" : null
        }
        async function Wg(qq) {
          var Eq;
          const gq = fE(qq);
          if (await gq._initializationPromise, null === (Eq = gq.currentUser) || void 0 === Eq ? void 0 : Eq.isAnonymous) return new ug({
            user: gq.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Yq = await cg(gq, {
              returnSecureToken: !0
            }),
            lq = await ug._fromIdTokenResponse(gq, "signIn", Yq, !0);
          return await gq._updateCurrentUser(lq.user), lq
        }
        class Ng extends Yq.h {
          constructor(qq, Eq, gq, Yq) {
            var lq;
            super(Eq.code, Eq.message), this.operationType = gq, this.user = Yq, Object.setPrototypeOf(this, Ng.prototype), this.customData = {
              appName: qq.name,
              tenantId: null !== (lq = qq.tenantId) && void 0 !== lq ? lq : void 0,
              _serverResponse: Eq.customData._serverResponse,
              operationType: gq
            }
          }
          static _fromErrorAndOperation(qq, Eq, gq, Yq) {
            return new Ng(qq, Eq, gq, Yq)
          }
        }

        function ag(qq, Eq, gq, Yq) {
          return ("reauthenticate" === Eq ? gq._getReauthenticationResolver(qq) : gq._getIdTokenResponse(qq)).catch((gq => {
            if ("auth/multi-factor-auth-required" === gq.code) throw Ng._fromErrorAndOperation(qq, gq, Eq, Yq);
            throw gq
          }))
        }

        function Vg(qq) {
          return new Set(qq.map((qq => {
            let {
              providerId: Eq
            } = qq;
            return Eq
          })).filter((qq => !!qq)))
        }
        async function dg(qq, Eq) {
          const gq = (0, Yq.K)(qq);
          await Hg(!0, gq, Eq);
          const {
            providerUserInfo: lq
          } = await async function(qq, Eq) {
            return Gq(qq, "POST", "/v1/accounts:update", Eq)
          }(gq.auth, {
            idToken: await gq.getIdToken(),
            deleteProvider: [Eq]
          }), Oq = Vg(lq || []);
          return gq.providerData = gq.providerData.filter((qq => Oq.has(qq.providerId))), Oq.has("phone") || (gq.phoneNumber = null), await gq.auth._persistUserIfCurrent(gq), gq
        }
        async function jg(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Yq = await Cq(qq, Eq._linkToIdToken(qq.auth, await qq.getIdToken()), gq);
          return ug._forOperation(qq, "link", Yq)
        }
        async function Hg(qq, Eq, gq) {
          await Dq(Eq);
          const Yq = !1 === qq ? "provider-already-linked" : "no-such-provider";
          vq(Vg(Eq.providerData).has(gq) === qq, Eq.auth, Yq)
        }
        async function og(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Yq
          } = qq, lq = "reauthenticate";
          try {
            const Oq = await Cq(qq, ag(Yq, lq, Eq, qq), gq);
            vq(Oq.idToken, Yq, "internal-error");
            const mq = Kq(Oq.idToken);
            vq(mq, Yq, "internal-error");
            const {
              sub: xq
            } = mq;
            return vq(qq.uid === xq, Yq, "user-mismatch"), ug._forOperation(qq, lq, Oq)
          } catch (Oq) {
            throw "auth/user-not-found" === (null === Oq || void 0 === Oq ? void 0 : Oq.code) && Pq(Yq, "user-mismatch"), Oq
          }
        }
        async function Pg(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Yq = "signIn",
            lq = await ag(qq, Yq, Eq),
            Oq = await ug._fromIdTokenResponse(qq, Yq, lq);
          return gq || await qq._updateCurrentUser(Oq.user), Oq
        }
        async function Qg(qq, Eq) {
          return Pg(fE(qq), Eq)
        }
        async function yg(qq, Eq) {
          const gq = (0, Yq.K)(qq);
          return await Hg(!1, gq, Eq.providerId), jg(gq, Eq)
        }
        async function tg(qq, Eq) {
          return og((0, Yq.K)(qq), Eq)
        }
        async function rg(qq, Eq) {
          const gq = fE(qq),
            Yq = await async function(qq, Eq) {
              return Jq(qq, "POST", "/v1/accounts:signInWithCustomToken", pq(qq, Eq))
            }(gq, {
              token: Eq,
              returnSecureToken: !0
            }), lq = await ug._fromIdTokenResponse(gq, "signIn", Yq);
          return await gq._updateCurrentUser(lq.user), lq
        }
        class vg {
          constructor(qq, Eq) {
            this.factorId = qq, this.uid = Eq.mfaEnrollmentId, this.enrollmentTime = new Date(Eq.enrolledAt).toUTCString(), this.displayName = Eq.displayName
          }
          static _fromServerResponse(qq, Eq) {
            return "phoneInfo" in Eq ? hg._fromServerResponse(qq, Eq) : "totpInfo" in Eq ? ng._fromServerResponse(qq, Eq) : Pq(qq, "internal-error")
          }
        }
        class hg extends vg {
          constructor(qq) {
            super("phone", qq), this.phoneNumber = qq.phoneInfo
          }
          static _fromServerResponse(qq, Eq) {
            return new hg(Eq)
          }
        }
        class ng extends vg {
          constructor(qq) {
            super("totp", qq)
          }
          static _fromServerResponse(qq, Eq) {
            return new ng(Eq)
          }
        }

        function bg(qq, Eq, gq) {
          var Yq;
          vq((null === (Yq = gq.url) || void 0 === Yq ? void 0 : Yq.length) > 0, qq, "invalid-continue-uri"), vq("undefined" === typeof gq.dynamicLinkDomain || gq.dynamicLinkDomain.length > 0, qq, "invalid-dynamic-link-domain"), Eq.continueUrl = gq.url, Eq.dynamicLinkDomain = gq.dynamicLinkDomain, Eq.canHandleCodeInApp = gq.handleCodeInApp, gq.iOS && (vq(gq.iOS.bundleId.length > 0, qq, "missing-ios-bundle-id"), Eq.iOSBundleId = gq.iOS.bundleId), gq.android && (vq(gq.android.packageName.length > 0, qq, "missing-android-pkg-name"), Eq.androidInstallApp = gq.android.installApp, Eq.androidMinimumVersionCode = gq.android.minimumVersion, Eq.androidPackageName = gq.android.packageName)
        }
        async function ig(qq, Eq, gq) {
          var Yq;
          const lq = fE(qq),
            Oq = {
              requestType: "PASSWORD_RESET",
              email: Eq,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Yq = lq._getRecaptchaConfig()) || void 0 === Yq ? void 0 : Yq.emailPasswordEnabled) {
            const qq = await bE(lq, Oq, "getOobCode", !0);
            gq && bg(lq, qq, gq), await UE(lq, qq)
          } else gq && bg(lq, Oq, gq), await UE(lq, Oq).catch((async qq => {
            if ("auth/missing-recaptcha-token" !== qq.code) return Promise.reject(qq);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const qq = await bE(lq, Oq, "getOobCode", !0);
              gq && bg(lq, qq, gq), await UE(lq, qq)
            }
          }))
        }
        async function Zg(qq, Eq, gq) {
          await LE((0, Yq.K)(qq), {
            oobCode: Eq,
            newPassword: gq
          })
        }
        async function fg(qq, Eq) {
          await async function(qq, Eq) {
            return Gq(qq, "POST", "/v1/accounts:update", pq(qq, Eq))
          }((0, Yq.K)(qq), {
            oobCode: Eq
          })
        }
        async function Mg(qq, Eq) {
          const gq = (0, Yq.K)(qq),
            lq = await LE(gq, {
              oobCode: Eq
            }),
            Oq = lq.requestType;
          switch (vq(Oq, gq, "internal-error"), Oq) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              vq(lq.newEmail, gq, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              vq(lq.mfaInfo, gq, "internal-error");
            default:
              vq(lq.email, gq, "internal-error")
          }
          let mq = null;
          return lq.mfaInfo && (mq = vg._fromServerResponse(fE(gq), lq.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === lq.requestType ? lq.newEmail : lq.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === lq.requestType ? lq.email : lq.newEmail) || null,
              multiFactorInfo: mq
            },
            operation: Oq
          }
        }
        async function Tg(qq, Eq) {
          const {
            data: gq
          } = await Mg((0, Yq.K)(qq), Eq);
          return gq.email
        }
        async function zg(qq, Eq, gq) {
          var Yq;
          const lq = fE(qq),
            Oq = {
              returnSecureToken: !0,
              email: Eq,
              password: gq,
              clientType: "CLIENT_TYPE_WEB"
            };
          let mq;
          if (null === (Yq = lq._getRecaptchaConfig()) || void 0 === Yq ? void 0 : Yq.emailPasswordEnabled) {
            const qq = await bE(lq, Oq, "signUpPassword");
            mq = cg(lq, qq)
          } else mq = cg(lq, Oq).catch((async qq => {
            if ("auth/missing-recaptcha-token" === qq.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const qq = await bE(lq, Oq, "signUpPassword");
              return cg(lq, qq)
            }
            return Promise.reject(qq)
          }));
          const xq = await mq.catch((qq => Promise.reject(qq))),
            Aq = await ug._fromIdTokenResponse(lq, "signIn", xq);
          return await lq._updateCurrentUser(Aq.user), Aq
        }

        function Sg(qq, Eq, gq) {
          return Qg((0, Yq.K)(qq), DE.credential(Eq, gq))
        }
        async function pg(qq, Eq, gq) {
          var Yq;
          const lq = fE(qq),
            Oq = {
              requestType: "EMAIL_SIGNIN",
              email: Eq,
              clientType: "CLIENT_TYPE_WEB"
            };

          function mq(qq, Eq) {
            vq(Eq.handleCodeInApp, lq, "argument-error"), Eq && bg(lq, qq, Eq)
          }
          if (null === (Yq = lq._getRecaptchaConfig()) || void 0 === Yq ? void 0 : Yq.emailPasswordEnabled) {
            const qq = await bE(lq, Oq, "getOobCode", !0);
            mq(qq, gq), await FE(lq, qq)
          } else mq(Oq, gq), await FE(lq, Oq).catch((async qq => {
            if ("auth/missing-recaptcha-token" !== qq.code) return Promise.reject(qq);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const qq = await bE(lq, Oq, "getOobCode", !0);
              mq(qq, gq), await FE(lq, qq)
            }
          }))
        }

        function Gg(qq, Eq) {
          const gq = IE.parseLink(Eq);
          return "EMAIL_SIGNIN" === (null === gq || void 0 === gq ? void 0 : gq.operation)
        }
        async function Lg(qq, Eq, gq) {
          const lq = (0, Yq.K)(qq),
            Oq = DE.credentialWithLink(Eq, gq || bq());
          return vq(Oq._tenantId === (lq.tenantId || null), lq, "tenant-id-mismatch"), Qg(lq, Oq)
        }
        async function Jg(qq, Eq) {
          const gq = {
              identifier: Eq,
              continueUri: iq() ? bq() : "http://localhost"
            },
            {
              signinMethods: lq
            } = await async function(qq, Eq) {
              return Gq(qq, "POST", "/v1/accounts:createAuthUri", pq(qq, Eq))
            }((0, Yq.K)(qq), gq);
          return lq || []
        }
        async function kg(qq, Eq) {
          const gq = (0, Yq.K)(qq),
            lq = {
              requestType: "VERIFY_EMAIL",
              idToken: await qq.getIdToken()
            };
          Eq && bg(gq.auth, lq, Eq);
          const {
            email: Oq
          } = await async function(qq, Eq) {
            return RE(qq, Eq)
          }(gq.auth, lq);
          Oq !== qq.email && await qq.reload()
        }
        async function Rg(qq, Eq, gq) {
          const lq = (0, Yq.K)(qq),
            Oq = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await qq.getIdToken(),
              newEmail: Eq
            };
          gq && bg(lq.auth, Oq, gq);
          const {
            email: mq
          } = await async function(qq, Eq) {
            return RE(qq, Eq)
          }(lq.auth, Oq);
          mq !== qq.email && await qq.reload()
        }
        async function Ug(qq, Eq) {
          let {
            displayName: gq,
            photoURL: lq
          } = Eq;
          if (void 0 === gq && void 0 === lq) return;
          const Oq = (0, Yq.K)(qq),
            mq = {
              idToken: await Oq.getIdToken(),
              displayName: gq,
              photoUrl: lq,
              returnSecureToken: !0
            },
            xq = await Cq(Oq, async function(qq, Eq) {
              return Gq(qq, "POST", "/v1/accounts:update", Eq)
            }(Oq.auth, mq));
          Oq.displayName = xq.displayName || null, Oq.photoURL = xq.photoUrl || null;
          const Aq = Oq.providerData.find((qq => {
            let {
              providerId: Eq
            } = qq;
            return "password" === Eq
          }));
          Aq && (Aq.displayName = Oq.displayName, Aq.photoURL = Oq.photoURL), await Oq._updateTokensIfNecessary(xq)
        }

        function Fg(qq, Eq) {
          return Xg((0, Yq.K)(qq), Eq, null)
        }

        function sg(qq, Eq) {
          return Xg((0, Yq.K)(qq), null, Eq)
        }
        async function Xg(qq, Eq, gq) {
          const {
            auth: Yq
          } = qq, lq = {
            idToken: await qq.getIdToken(),
            returnSecureToken: !0
          };
          Eq && (lq.email = Eq), gq && (lq.password = gq);
          const Oq = await Cq(qq, JE(Yq, lq));
          await qq._updateTokensIfNecessary(Oq, !0)
        }
        class wg {
          constructor(qq, Eq) {
            let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = qq, this.providerId = Eq, this.profile = gq
          }
        }
        class Kg extends wg {
          constructor(qq, Eq, gq, Yq) {
            super(qq, Eq, gq), this.username = Yq
          }
        }
        class Cg extends wg {
          constructor(qq, Eq) {
            super(qq, "facebook.com", Eq)
          }
        }
        class Ig extends Kg {
          constructor(qq, Eq) {
            super(qq, "github.com", Eq, "string" === typeof(null === Eq || void 0 === Eq ? void 0 : Eq.login) ? null === Eq || void 0 === Eq ? void 0 : Eq.login : null)
          }
        }
        class eg extends wg {
          constructor(qq, Eq) {
            super(qq, "google.com", Eq)
          }
        }
        class Dg extends Kg {
          constructor(qq, Eq, gq) {
            super(qq, "twitter.com", Eq, gq)
          }
        }

        function qY(qq) {
          const {
            user: Eq,
            _tokenResponse: gq
          } = qq;
          return Eq.isAnonymous && !gq ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(qq) {
            var Eq, gq;
            if (!qq) return null;
            const {
              providerId: Yq
            } = qq, lq = qq.rawUserInfo ? JSON.parse(qq.rawUserInfo) : {}, Oq = qq.isNewUser || "identitytoolkit#SignupNewUserResponse" === qq.kind;
            if (!Yq && (null === qq || void 0 === qq ? void 0 : qq.idToken)) {
              const Yq = null === (gq = null === (Eq = Kq(qq.idToken)) || void 0 === Eq ? void 0 : Eq.firebase) || void 0 === gq ? void 0 : gq.sign_in_provider;
              if (Yq) return new wg(Oq, "anonymous" !== Yq && "custom" !== Yq ? Yq : null)
            }
            if (!Yq) return null;
            switch (Yq) {
              case "facebook.com":
                return new Cg(Oq, lq);
              case "github.com":
                return new Ig(Oq, lq);
              case "google.com":
                return new eg(Oq, lq);
              case "twitter.com":
                return new Dg(Oq, lq, qq.screenName || null);
              case "custom":
              case "anonymous":
                return new wg(Oq, null);
              default:
                return new wg(Oq, Yq, lq)
            }
          }(gq)
        }

        function EY(qq, Eq) {
          return (0, Yq.K)(qq).setPersistence(Eq)
        }

        function gY(qq) {
          return fE(qq).initializeRecaptchaConfig()
        }

        function YY(qq, Eq, gq, lq) {
          return (0, Yq.K)(qq).onIdTokenChanged(Eq, gq, lq)
        }

        function lY(qq, Eq, gq) {
          return (0, Yq.K)(qq).beforeAuthStateChanged(Eq, gq)
        }

        function OY(qq, Eq, gq, lq) {
          return (0, Yq.K)(qq).onAuthStateChanged(Eq, gq, lq)
        }

        function mY(qq) {
          (0, Yq.K)(qq).useDeviceLanguage()
        }

        function xY(qq, Eq) {
          return (0, Yq.K)(qq).updateCurrentUser(Eq)
        }

        function AY(qq) {
          return (0, Yq.K)(qq).signOut()
        }
        async function cY(qq) {
          return (0, Yq.K)(qq).delete()
        }
        class uY {
          constructor(qq, Eq, gq) {
            this.type = qq, this.credential = Eq, this.auth = gq
          }
          static _fromIdtoken(qq, Eq) {
            return new uY("enroll", qq, Eq)
          }
          static _fromMfaPendingCredential(qq) {
            return new uY("signin", qq)
          }
          toJSON() {
            const qq = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [qq]: this.credential
              }
            }
          }
          static fromJSON(qq) {
            var Eq, gq;
            if (null === qq || void 0 === qq ? void 0 : qq.multiFactorSession) {
              if (null === (Eq = qq.multiFactorSession) || void 0 === Eq ? void 0 : Eq.pendingCredential) return uY._fromMfaPendingCredential(qq.multiFactorSession.pendingCredential);
              if (null === (gq = qq.multiFactorSession) || void 0 === gq ? void 0 : gq.idToken) return uY._fromIdtoken(qq.multiFactorSession.idToken)
            }
            return null
          }
        }
        class BY {
          constructor(qq, Eq, gq) {
            this.session = qq, this.hints = Eq, this.signInResolver = gq
          }
          static _fromError(qq, Eq) {
            const gq = fE(qq),
              Yq = Eq.customData._serverResponse,
              lq = (Yq.mfaInfo || []).map((qq => vg._fromServerResponse(gq, qq)));
            vq(Yq.mfaPendingCredential, gq, "internal-error");
            const Oq = uY._fromMfaPendingCredential(Yq.mfaPendingCredential);
            return new BY(Oq, lq, (async qq => {
              const lq = await qq._process(gq, Oq);
              delete Yq.mfaInfo, delete Yq.mfaPendingCredential;
              const mq = Object.assign(Object.assign({}, Yq), {
                idToken: lq.idToken,
                refreshToken: lq.refreshToken
              });
              switch (Eq.operationType) {
                case "signIn":
                  const qq = await ug._fromIdTokenResponse(gq, Eq.operationType, mq);
                  return await gq._updateCurrentUser(qq.user), qq;
                case "reauthenticate":
                  return vq(Eq.user, gq, "internal-error"), ug._forOperation(Eq.user, Eq.operationType, mq);
                default:
                  Pq(gq, "internal-error")
              }
            }))
          }
          async resolveSignIn(qq) {
            const Eq = qq;
            return this.signInResolver(Eq)
          }
        }

        function WY(qq, Eq) {
          var gq;
          const lq = (0, Yq.K)(qq),
            Oq = Eq;
          return vq(Eq.customData.operationType, lq, "argument-error"), vq(null === (gq = Oq.customData._serverResponse) || void 0 === gq ? void 0 : gq.mfaPendingCredential, lq, "argument-error"), BY._fromError(lq, Oq)
        }
        class NY {
          constructor(qq) {
            this.user = qq, this.enrolledFactors = [], qq._onReload((Eq => {
              Eq.mfaInfo && (this.enrolledFactors = Eq.mfaInfo.map((Eq => vg._fromServerResponse(qq.auth, Eq))))
            }))
          }
          static _fromUser(qq) {
            return new NY(qq)
          }
          async getSession() {
            return uY._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(qq, Eq) {
            const gq = qq,
              Yq = await this.getSession(),
              lq = await Cq(this.user, gq._process(this.user.auth, Yq, Eq));
            return await this.user._updateTokensIfNecessary(lq), this.user.reload()
          }
          async unenroll(qq) {
            const Eq = "string" === typeof qq ? qq : qq.uid,
              gq = await this.user.getIdToken();
            try {
              const qq = await Cq(this.user, (Yq = this.user.auth, lq = {
                idToken: gq,
                mfaEnrollmentId: Eq
              }, Gq(Yq, "POST", "/v2/accounts/mfaEnrollment:withdraw", pq(Yq, lq))));
              this.enrolledFactors = this.enrolledFactors.filter((qq => {
                let {
                  uid: gq
                } = qq;
                return gq !== Eq
              })), await this.user._updateTokensIfNecessary(qq), await this.user.reload()
            } catch (Oq) {
              throw Oq
            }
            var Yq, lq
          }
        }
        const aY = new WeakMap;

        function VY(qq) {
          const Eq = (0, Yq.K)(qq);
          return aY.has(Eq) || aY.set(Eq, NY._fromUser(Eq)), aY.get(Eq)
        }
        const dY = "__sak";
        class jY {
          constructor(qq, Eq) {
            this.storageRetriever = qq, this.type = Eq
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(dY, "1"), this.storage.removeItem(dY), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (qq) {
              return Promise.resolve(!1)
            }
          }
          _set(qq, Eq) {
            return this.storage.setItem(qq, JSON.stringify(Eq)), Promise.resolve()
          }
          _get(qq) {
            const Eq = this.storage.getItem(qq);
            return Promise.resolve(Eq ? JSON.parse(Eq) : null)
          }
          _remove(qq) {
            return this.storage.removeItem(qq), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class HY extends jY {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (qq, Eq) => this.onStorageEvent(qq, Eq), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const qq = (0, Yq.L)();
              return WE(qq) || HE(qq)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (qq) {
                return !1
              }
            }(), this.fallbackToPolling = oE(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(qq) {
            for (const Eq of Object.keys(this.listeners)) {
              const gq = this.storage.getItem(Eq),
                Yq = this.localCache[Eq];
              gq !== Yq && qq(Eq, Yq, gq)
            }
          }
          onStorageEvent(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!qq.key) return void this.forAllChangedKeys(((qq, Eq, gq) => {
              this.notifyListeners(qq, gq)
            }));
            const gq = qq.key;
            if (Eq ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Yq = this.storage.getItem(gq);
              if (qq.newValue !== Yq) null !== qq.newValue ? this.storage.setItem(gq, qq.newValue) : this.storage.removeItem(gq);
              else if (this.localCache[gq] === qq.newValue && !Eq) return
            }
            const lq = () => {
                const qq = this.storage.getItem(gq);
                (Eq || this.localCache[gq] !== qq) && this.notifyListeners(gq, qq)
              },
              Oq = this.storage.getItem(gq);
            (0, Yq.Q)() && 10 === document.documentMode && Oq !== qq.newValue && qq.newValue !== qq.oldValue ? setTimeout(lq, 10) : lq()
          }
          notifyListeners(qq, Eq) {
            this.localCache[qq] = Eq;
            const gq = this.listeners[qq];
            if (gq)
              for (const Yq of Array.from(gq)) Yq(Eq ? JSON.parse(Eq) : Eq)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((qq, Eq, gq) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: qq,
                  oldValue: Eq,
                  newValue: gq
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
          _addListener(qq, Eq) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[qq] || (this.listeners[qq] = new Set, this.localCache[qq] = this.storage.getItem(qq)), this.listeners[qq].add(Eq)
          }
          _removeListener(qq, Eq) {
            this.listeners[qq] && (this.listeners[qq].delete(Eq), 0 === this.listeners[qq].size && delete this.listeners[qq]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(qq, Eq) {
            await super._set(qq, Eq), this.localCache[qq] = JSON.stringify(Eq)
          }
          async _get(qq) {
            const Eq = await super._get(qq);
            return this.localCache[qq] = JSON.stringify(Eq), Eq
          }
          async _remove(qq) {
            await super._remove(qq), delete this.localCache[qq]
          }
        }
        HY.type = "LOCAL";
        const oY = HY;
        class PY extends jY {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(qq, Eq) {}
          _removeListener(qq, Eq) {}
        }
        PY.type = "SESSION";
        const QY = PY;
        class yY {
          constructor(qq) {
            this.eventTarget = qq, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(qq) {
            const Eq = this.receivers.find((Eq => Eq.isListeningto(qq)));
            if (Eq) return Eq;
            const gq = new yY(qq);
            return this.receivers.push(gq), gq
          }
          isListeningto(qq) {
            return this.eventTarget === qq
          }
          async handleEvent(qq) {
            const Eq = qq,
              {
                eventId: gq,
                eventType: Yq,
                data: lq
              } = Eq.data,
              Oq = this.handlersMap[Yq];
            if (!(null === Oq || void 0 === Oq ? void 0 : Oq.size)) return;
            Eq.ports[0].postMessage({
              status: "ack",
              eventId: gq,
              eventType: Yq
            });
            const mq = Array.from(Oq).map((async qq => qq(Eq.origin, lq))),
              xq = await
            function(qq) {
              return Promise.all(qq.map((async qq => {
                try {
                  return {
                    fulfilled: !0,
                    value: await qq
                  }
                } catch (Eq) {
                  return {
                    fulfilled: !1,
                    reason: Eq
                  }
                }
              })))
            }(mq);
            Eq.ports[0].postMessage({
              status: "done",
              eventId: gq,
              eventType: Yq,
              response: xq
            })
          }
          _subscribe(qq, Eq) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[qq] || (this.handlersMap[qq] = new Set), this.handlersMap[qq].add(Eq)
          }
          _unsubscribe(qq, Eq) {
            this.handlersMap[qq] && Eq && this.handlersMap[qq].delete(Eq), Eq && 0 !== this.handlersMap[qq].size || delete this.handlersMap[qq], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function tY() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            gq = "";
          for (let Yq = 0; Yq < Eq; Yq++) gq += Math.floor(10 * Math.random());
          return qq + gq
        }
        yY.receivers = [];
        class rY {
          constructor(qq) {
            this.target = qq, this.handlers = new Set
          }
          removeMessageHandler(qq) {
            qq.messageChannel && (qq.messageChannel.port1.removeEventListener("message", qq.vy), qq.messageChannel.port1.close()), this.handlers.delete(qq)
          }
          async _send(qq, Eq) {
            let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Yq = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Yq) throw new Error("connection_unavailable");
            let lq, Oq;
            return new Promise(((mq, xq) => {
              const Aq = tY("", 20);
              Yq.port1.start();
              const cq = setTimeout((() => {
                xq(new Error("unsupported_event"))
              }), gq);
              Oq = {
                messageChannel: Yq,
                vy(qq) {
                  const Eq = qq;
                  if (Eq.data.eventId === Aq) switch (Eq.data.status) {
                    case "ack":
                      clearTimeout(cq), lq = setTimeout((() => {
                        xq(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(lq), mq(Eq.data.response);
                      break;
                    default:
                      clearTimeout(cq), clearTimeout(lq), xq(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Oq), Yq.port1.addEventListener("message", Oq.vy), this.target.postMessage({
                eventType: qq,
                eventId: Aq,
                data: Eq
              }, [Yq.port2])
            })).finally((() => {
              Oq && this.removeMessageHandler(Oq)
            }))
          }
        }

        function vY() {
          return window
        }

        function hY() {
          return "undefined" !== typeof vY().WorkerGlobalScope && "function" === typeof vY().importScripts
        }
        const nY = "firebaseLocalStorageDb",
          bY = "firebaseLocalStorage",
          iY = "fbase_key";
        class ZY {
          constructor(qq) {
            this.request = qq
          }
          toPromise() {
            return new Promise(((qq, Eq) => {
              this.request.addEventListener("success", (() => {
                qq(this.request.result)
              })), this.request.addEventListener("error", (() => {
                Eq(this.request.error)
              }))
            }))
          }
        }

        function fY(qq, Eq) {
          return qq.transaction([bY], Eq ? "readwrite" : "readonly").objectStore(bY)
        }

        function MY() {
          const qq = indexedDB.open(nY, 1);
          return new Promise(((Eq, gq) => {
            qq.addEventListener("error", (() => {
              gq(qq.error)
            })), qq.addEventListener("upgradeneeded", (() => {
              const Eq = qq.result;
              try {
                Eq.createObjectStore(bY, {
                  keyPath: iY
                })
              } catch (Yq) {
                gq(Yq)
              }
            })), qq.addEventListener("success", (async () => {
              const gq = qq.result;
              gq.objectStoreNames.contains(bY) ? Eq(gq) : (gq.close(), await
                function() {
                  const qq = indexedDB.deleteDatabase(nY);
                  return new ZY(qq).toPromise()
                }(), Eq(await MY()))
            }))
          }))
        }
        async function TY(qq, Eq, gq) {
          const Yq = fY(qq, !0).put({
            [iY]: Eq,
            value: gq
          });
          return new ZY(Yq).toPromise()
        }

        function zY(qq, Eq) {
          const gq = fY(qq, !0).delete(Eq);
          return new ZY(gq).toPromise()
        }
        class SY {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await MY()), this.db
          }
          async _withRetries(qq) {
            let Eq = 0;
            for (;;) try {
              const Eq = await this._openDb();
              return await qq(Eq)
            } catch (gq) {
              if (Eq++ > 3) throw gq;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return hY() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = yY._getInstance(hY() ? self : null), this.receiver._subscribe("keyChanged", (async (qq, Eq) => ({
              keyProcessed: (await this._poll()).includes(Eq.key)
            }))), this.receiver._subscribe("ping", (async (qq, Eq) => ["keyChanged"]))
          }
          async initializeSender() {
            var qq, Eq;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (qq) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new rY(this.activeServiceWorker);
            const gq = await this.sender._send("ping", {}, 800);
            gq && (null === (qq = gq[0]) || void 0 === qq ? void 0 : qq.fulfilled) && (null === (Eq = gq[0]) || void 0 === Eq ? void 0 : Eq.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(qq) {
            if (this.sender && this.activeServiceWorker && function() {
                var qq;
                return (null === (qq = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === qq ? void 0 : qq.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: qq
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (Eq) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const qq = await MY();
              return await TY(qq, dY, "1"), await zY(qq, dY), !0
            } catch (qq) {}
            return !1
          }
          async _withPendingWrite(qq) {
            this.pendingWrites++;
            try {
              await qq()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(qq, Eq) {
            return this._withPendingWrite((async () => (await this._withRetries((gq => TY(gq, qq, Eq))), this.localCache[qq] = Eq, this.notifyServiceWorker(qq))))
          }
          async _get(qq) {
            const Eq = await this._withRetries((Eq => async function(qq, Eq) {
              const gq = fY(qq, !1).get(Eq),
                Yq = await new ZY(gq).toPromise();
              return void 0 === Yq ? null : Yq.value
            }(Eq, qq)));
            return this.localCache[qq] = Eq, Eq
          }
          async _remove(qq) {
            return this._withPendingWrite((async () => (await this._withRetries((Eq => zY(Eq, qq))), delete this.localCache[qq], this.notifyServiceWorker(qq))))
          }
          async _poll() {
            const qq = await this._withRetries((qq => {
              const Eq = fY(qq, !1).getAll();
              return new ZY(Eq).toPromise()
            }));
            if (!qq) return [];
            if (0 !== this.pendingWrites) return [];
            const Eq = [],
              gq = new Set;
            for (const {
                fbase_key: Yq,
                value: lq
              }
              of qq) gq.add(Yq), JSON.stringify(this.localCache[Yq]) !== JSON.stringify(lq) && (this.notifyListeners(Yq, lq), Eq.push(Yq));
            for (const Yq of Object.keys(this.localCache)) this.localCache[Yq] && !gq.has(Yq) && (this.notifyListeners(Yq, null), Eq.push(Yq));
            return Eq
          }
          notifyListeners(qq, Eq) {
            this.localCache[qq] = Eq;
            const gq = this.listeners[qq];
            if (gq)
              for (const Yq of Array.from(gq)) Yq(Eq)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(qq, Eq) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[qq] || (this.listeners[qq] = new Set, this._get(qq)), this.listeners[qq].add(Eq)
          }
          _removeListener(qq, Eq) {
            this.listeners[qq] && (this.listeners[qq].delete(Eq), 0 === this.listeners[qq].size && delete this.listeners[qq]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        SY.type = "LOCAL";
        const pY = SY;
        const GY = 1e12;
        class LY {
          constructor(qq) {
            this.auth = qq, this.counter = GY, this._widgets = new Map
          }
          render(qq, Eq) {
            const gq = this.counter;
            return this._widgets.set(gq, new JY(qq, this.auth.name, Eq || {})), this.counter++, gq
          }
          reset(qq) {
            var Eq;
            const gq = qq || GY;
            null === (Eq = this._widgets.get(gq)) || void 0 === Eq || Eq.delete(), this._widgets.delete(gq)
          }
          getResponse(qq) {
            var Eq;
            const gq = qq || GY;
            return (null === (Eq = this._widgets.get(gq)) || void 0 === Eq ? void 0 : Eq.getResponse()) || ""
          }
          async execute(qq) {
            var Eq;
            const gq = qq || GY;
            return null === (Eq = this._widgets.get(gq)) || void 0 === Eq || Eq.execute(), ""
          }
        }
        class JY {
          constructor(qq, Eq, gq) {
            this.params = gq, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Yq = "string" === typeof qq ? document.getElementById(qq) : qq;
            vq(Yq, "argument-error", {
              appName: Eq
            }), this.container = Yq, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(qq) {
                const Eq = [],
                  gq = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Yq = 0; Yq < qq; Yq++) Eq.push(gq.charAt(Math.floor(Math.random() * gq.length)));
                return Eq.join("")
              }(50);
              const {
                callback: qq,
                "expired-callback": Eq
              } = this.params;
              if (qq) try {
                qq(this.responseToken)
              } catch (gq) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Eq) try {
                  Eq()
                } catch (gq) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const kY = hE("rcb"),
          RY = new fq(3e4, 6e4);
        class UY {
          constructor() {
            var qq;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (qq = vY().grecaptcha) || void 0 === qq ? void 0 : qq.render)
          }
          load(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return vq(function(qq) {
              return qq.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(qq)
            }(Eq), qq, "argument-error"), this.shouldResolveImmediately(Eq) && yE(vY().grecaptcha) ? Promise.resolve(vY().grecaptcha) : new Promise(((gq, lq) => {
              const Oq = vY().setTimeout((() => {
                lq(Qq(qq, "network-request-failed"))
              }), RY.get());
              vY()[kY] = () => {
                vY().clearTimeout(Oq), delete vY()[kY];
                const Yq = vY().grecaptcha;
                if (!Yq || !yE(Yq)) return void lq(Qq(qq, "internal-error"));
                const mq = Yq.render;
                Yq.render = (qq, Eq) => {
                  const gq = mq(qq, Eq);
                  return this.counter++, gq
                }, this.hostLanguage = Eq, gq(Yq)
              };
              vE(`https://www.google.com/recaptcha/api.js??${(0,Yq.$)({onload:kY,render:"explicit",hl:Eq})}`).catch((() => {
                clearTimeout(Oq), lq(Qq(qq, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(qq) {
            var Eq;
            return !!(null === (Eq = vY().grecaptcha) || void 0 === Eq ? void 0 : Eq.render) && (qq === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class FY {
          async load(qq) {
            return new LY(qq)
          }
          clearedOneInstance() {}
        }
        const sY = "recaptcha",
          XY = {
            theme: "light",
            type: "image"
          };
        class wY {
          constructor(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, XY),
              gq = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Eq, this.type = sY, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = fE(gq), this.isInvisible = "invisible" === this.parameters.size, vq("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Yq = "string" === typeof qq ? document.getElementById(qq) : qq;
            vq(Yq, this.auth, "argument-error"), this.container = Yq, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new FY : new UY, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const qq = await this.render(),
              Eq = this.getAssertedRecaptcha(),
              gq = Eq.getResponse(qq);
            return gq || new Promise((gq => {
              const Yq = qq => {
                qq && (this.tokenChangeListeners.delete(Yq), gq(qq))
              };
              this.tokenChangeListeners.add(Yq), this.isInvisible && Eq.execute(qq)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (qq) {
              return Promise.reject(qq)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((qq => {
              throw this.renderPromise = null, qq
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((qq => {
              this.container.removeChild(qq)
            }))
          }
          validateStartingState() {
            vq(!this.parameters.sitekey, this.auth, "argument-error"), vq(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), vq("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(qq) {
            return Eq => {
              if (this.tokenChangeListeners.forEach((qq => qq(Eq))), "function" === typeof qq) qq(Eq);
              else if ("string" === typeof qq) {
                const gq = vY()[qq];
                "function" === typeof gq && gq(Eq)
              }
            }
          }
          assertNotDestroyed() {
            vq(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let qq = this.container;
              if (!this.isInvisible) {
                const Eq = document.createElement("div");
                qq.appendChild(Eq), qq = Eq
              }
              this.widgetId = this.getAssertedRecaptcha().render(qq, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            vq(iq() && !hY(), this.auth, "internal-error"), await
            function() {
              let qq = null;
              return new Promise((Eq => {
                "complete" !== document.readyState ? (qq = () => Eq(), window.addEventListener("load", qq)) : Eq()
              })).catch((Eq => {
                throw qq && window.removeEventListener("load", qq), Eq
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const qq = await async function(qq) {
              return (await Gq(qq, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            vq(qq, this.auth, "internal-error"), this.parameters.sitekey = qq
          }
          getAssertedRecaptcha() {
            return vq(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class KY {
          constructor(qq, Eq) {
            this.verificationId = qq, this.onConfirmation = Eq
          }
          confirm(qq) {
            const Eq = CE._fromVerification(this.verificationId, qq);
            return this.onConfirmation(Eq)
          }
        }
        async function CY(qq, Eq, gq) {
          const lq = fE(qq),
            Oq = await DY(lq, Eq, (0, Yq.K)(gq));
          return new KY(Oq, (qq => Qg(lq, qq)))
        }
        async function IY(qq, Eq, gq) {
          const lq = (0, Yq.K)(qq);
          await Hg(!1, lq, "phone");
          const Oq = await DY(lq.auth, Eq, (0, Yq.K)(gq));
          return new KY(Oq, (qq => yg(lq, qq)))
        }
        async function eY(qq, Eq, gq) {
          const lq = (0, Yq.K)(qq),
            Oq = await DY(lq.auth, Eq, (0, Yq.K)(gq));
          return new KY(Oq, (qq => tg(lq, qq)))
        }
        async function DY(qq, Eq, gq) {
          var Yq;
          const lq = await gq.verify();
          try {
            let Oq;
            if (vq("string" === typeof lq, qq, "argument-error"), vq(gq.type === sY, qq, "argument-error"), Oq = "string" === typeof Eq ? {
                phoneNumber: Eq
              } : Eq, "session" in Oq) {
              const Eq = Oq.session;
              if ("phoneNumber" in Oq) {
                vq("enroll" === Eq.type, qq, "internal-error");
                const gq = await
                function(qq, Eq) {
                  return Gq(qq, "POST", "/v2/accounts/mfaEnrollment:start", pq(qq, Eq))
                }(qq, {
                  idToken: Eq.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Oq.phoneNumber,
                    recaptchaToken: lq
                  }
                });
                return gq.phoneSessionInfo.sessionInfo
              } {
                vq("signin" === Eq.type, qq, "internal-error");
                const gq = (null === (Yq = Oq.multiFactorHint) || void 0 === Yq ? void 0 : Yq.uid) || Oq.multiFactorUid;
                vq(gq, qq, "missing-multi-factor-info");
                const mq = await
                function(qq, Eq) {
                  return Gq(qq, "POST", "/v2/accounts/mfaSignIn:start", pq(qq, Eq))
                }(qq, {
                  mfaPendingCredential: Eq.credential,
                  mfaEnrollmentId: gq,
                  phoneSignInInfo: {
                    recaptchaToken: lq
                  }
                });
                return mq.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Eq
              } = await async function(qq, Eq) {
                return Gq(qq, "POST", "/v1/accounts:sendVerificationCode", pq(qq, Eq))
              }(qq, {
                phoneNumber: Oq.phoneNumber,
                recaptchaToken: lq
              });
              return Eq
            }
          } finally {
            gq._reset()
          }
        }
        async function ql(qq, Eq) {
          await jg((0, Yq.K)(qq), Eq)
        }
        class El {
          constructor(qq) {
            this.providerId = El.PROVIDER_ID, this.auth = fE(qq)
          }
          verifyPhoneNumber(qq, Eq) {
            return DY(this.auth, qq, (0, Yq.K)(Eq))
          }
          static credential(qq, Eq) {
            return CE._fromVerification(qq, Eq)
          }
          static credentialFromResult(qq) {
            const Eq = qq;
            return El.credentialFromTaggedObject(Eq)
          }
          static credentialFromError(qq) {
            return El.credentialFromTaggedObject(qq.customData || {})
          }
          static credentialFromTaggedObject(qq) {
            let {
              _tokenResponse: Eq
            } = qq;
            if (!Eq) return null;
            const {
              phoneNumber: gq,
              temporaryProof: Yq
            } = Eq;
            return gq && Yq ? CE._fromTokenResponse(gq, Yq) : null
          }
        }

        function gl(qq, Eq) {
          return Eq ? OE(Eq) : (vq(qq._popupRedirectResolver, qq, "argument-error"), qq._popupRedirectResolver)
        }
        El.PROVIDER_ID = "phone", El.PHONE_SIGN_IN_METHOD = "phone";
        class Yl extends GE {
          constructor(qq) {
            super("custom", "custom"), this.params = qq
          }
          _getIdTokenResponse(qq) {
            return XE(qq, this._buildIdpRequest())
          }
          _linkToIdToken(qq, Eq) {
            return XE(qq, this._buildIdpRequest(Eq))
          }
          _getReauthenticationResolver(qq) {
            return XE(qq, this._buildIdpRequest())
          }
          _buildIdpRequest(qq) {
            const Eq = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return qq && (Eq.idToken = qq), Eq
          }
        }

        function ll(qq) {
          return Pg(qq.auth, new Yl(qq), qq.bypassAuthState)
        }

        function Ol(qq) {
          const {
            auth: Eq,
            user: gq
          } = qq;
          return vq(gq, Eq, "internal-error"), og(gq, new Yl(qq), qq.bypassAuthState)
        }
        async function ml(qq) {
          const {
            auth: Eq,
            user: gq
          } = qq;
          return vq(gq, Eq, "internal-error"), jg(gq, new Yl(qq), qq.bypassAuthState)
        }
        class xl {
          constructor(qq, Eq, gq, Yq) {
            let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = qq, this.resolver = gq, this.user = Yq, this.bypassAuthState = lq, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Eq) ? Eq : [Eq]
          }
          execute() {
            return new Promise((async (qq, Eq) => {
              this.pendingPromise = {
                resolve: qq,
                reject: Eq
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (gq) {
                this.reject(gq)
              }
            }))
          }
          async onAuthEvent(qq) {
            const {
              urlResponse: Eq,
              sessionId: gq,
              postBody: Yq,
              tenantId: lq,
              error: Oq,
              type: mq
            } = qq;
            if (Oq) return void this.reject(Oq);
            const xq = {
              auth: this.auth,
              requestUri: Eq,
              sessionId: gq,
              tenantId: lq || void 0,
              postBody: Yq || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(mq)(xq))
            } catch (Aq) {
              this.reject(Aq)
            }
          }
          onError(qq) {
            this.reject(qq)
          }
          getIdpTask(qq) {
            switch (qq) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return ll;
              case "linkViaPopup":
              case "linkViaRedirect":
                return ml;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Ol;
              default:
                Pq(this.auth, "internal-error")
            }
          }
          resolve(qq) {
            nq(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(qq), this.unregisterAndCleanUp()
          }
          reject(qq) {
            nq(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(qq), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const Al = new fq(2e3, 1e4);
        async function cl(qq, Eq, gq) {
          const Yq = fE(qq);
          tq(qq, Eq, qg);
          const lq = gl(Yq, gq);
          return new Wl(Yq, "signInViaPopup", Eq, lq).executeNotNull()
        }
        async function ul(qq, Eq, gq) {
          const lq = (0, Yq.K)(qq);
          tq(lq.auth, Eq, qg);
          const Oq = gl(lq.auth, gq);
          return new Wl(lq.auth, "reauthViaPopup", Eq, Oq, lq).executeNotNull()
        }
        async function Bl(qq, Eq, gq) {
          const lq = (0, Yq.K)(qq);
          tq(lq.auth, Eq, qg);
          const Oq = gl(lq.auth, gq);
          return new Wl(lq.auth, "linkViaPopup", Eq, Oq, lq).executeNotNull()
        }
        class Wl extends xl {
          constructor(qq, Eq, gq, Yq, lq) {
            super(qq, Eq, Yq, lq), this.provider = gq, this.authWindow = null, this.pollId = null, Wl.currentPopupAction && Wl.currentPopupAction.cancel(), Wl.currentPopupAction = this
          }
          async executeNotNull() {
            const qq = await this.execute();
            return vq(qq, this.auth, "internal-error"), qq
          }
          async onExecution() {
            nq(1 === this.filter.length, "Popup operations only handle one event");
            const qq = tY();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], qq), this.authWindow.associatedEvent = qq, this.resolver._originValidation(this.auth).catch((qq => {
              this.reject(qq)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (qq => {
              qq || this.reject(Qq(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var qq;
            return (null === (qq = this.authWindow) || void 0 === qq ? void 0 : qq.associatedEvent) || null
          }
          cancel() {
            this.reject(Qq(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Wl.currentPopupAction = null
          }
          pollUserCancellation() {
            const qq = () => {
              var Eq, gq;
              (null === (gq = null === (Eq = this.authWindow) || void 0 === Eq ? void 0 : Eq.window) || void 0 === gq ? void 0 : gq.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Qq(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(qq, Al.get())
            };
            qq()
          }
        }
        Wl.currentPopupAction = null;
        const Nl = "pendingRedirect",
          al = new Map;
        class Vl extends xl {
          constructor(qq, Eq) {
            super(qq, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Eq, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let qq = al.get(this.auth._key());
            if (!qq) {
              try {
                const Eq = await async function(qq, Eq) {
                  const gq = ol(Eq),
                    Yq = Hl(qq);
                  if (!await Yq._isAvailable()) return !1;
                  const lq = "true" === await Yq._get(gq);
                  return await Yq._remove(gq), lq
                }(this.resolver, this.auth) ? await super.execute() : null;
                qq = () => Promise.resolve(Eq)
              } catch (Eq) {
                qq = () => Promise.reject(Eq)
              }
              al.set(this.auth._key(), qq)
            }
            return this.bypassAuthState || al.set(this.auth._key(), (() => Promise.resolve(null))), qq()
          }
          async onAuthEvent(qq) {
            if ("signInViaRedirect" === qq.type) return super.onAuthEvent(qq);
            if ("unknown" !== qq.type) {
              if (qq.eventId) {
                const Eq = await this.auth._redirectUserForId(qq.eventId);
                if (Eq) return this.user = Eq, super.onAuthEvent(qq);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function dl(qq, Eq) {
          return Hl(qq)._set(ol(Eq), "true")
        }

        function jl(qq, Eq) {
          al.set(qq._key(), Eq)
        }

        function Hl(qq) {
          return OE(qq._redirectPersistence)
        }

        function ol(qq) {
          return AE(Nl, qq.config.apiKey, qq.name)
        }

        function Pl(qq, Eq, gq) {
          return async function(qq, Eq, gq) {
            const Yq = fE(qq);
            tq(qq, Eq, qg), await Yq._initializationPromise;
            const lq = gl(Yq, gq);
            return await dl(lq, Yq), lq._openRedirect(Yq, Eq, "signInViaRedirect")
          }(qq, Eq, gq)
        }

        function Ql(qq, Eq, gq) {
          return async function(qq, Eq, gq) {
            const lq = (0, Yq.K)(qq);
            tq(lq.auth, Eq, qg), await lq.auth._initializationPromise;
            const Oq = gl(lq.auth, gq);
            await dl(Oq, lq.auth);
            const mq = await vl(lq);
            return Oq._openRedirect(lq.auth, Eq, "reauthViaRedirect", mq)
          }(qq, Eq, gq)
        }

        function yl(qq, Eq, gq) {
          return async function(qq, Eq, gq) {
            const lq = (0, Yq.K)(qq);
            tq(lq.auth, Eq, qg), await lq.auth._initializationPromise;
            const Oq = gl(lq.auth, gq);
            await Hg(!1, lq, Eq.providerId), await dl(Oq, lq.auth);
            const mq = await vl(lq);
            return Oq._openRedirect(lq.auth, Eq, "linkViaRedirect", mq)
          }(qq, Eq, gq)
        }
        async function tl(qq, Eq) {
          return await fE(qq)._initializationPromise, rl(qq, Eq, !1)
        }
        async function rl(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Yq = fE(qq),
            lq = gl(Yq, Eq),
            Oq = new Vl(Yq, lq, gq),
            mq = await Oq.execute();
          return mq && !gq && (delete mq.user._redirectEventId, await Yq._persistUserIfCurrent(mq.user), await Yq._setRedirectUser(null, Eq)), mq
        }
        async function vl(qq) {
          const Eq = tY(`${qq.uid}:::`);
          return qq._redirectEventId = Eq, await qq.auth._setRedirectUser(qq), await qq.auth._persistUserIfCurrent(qq), Eq
        }
        class hl {
          constructor(qq) {
            this.auth = qq, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(qq) {
            this.consumers.add(qq), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, qq) && (this.sendToConsumer(this.queuedRedirectEvent, qq), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(qq) {
            this.consumers.delete(qq)
          }
          onEvent(qq) {
            if (this.hasEventBeenHandled(qq)) return !1;
            let Eq = !1;
            return this.consumers.forEach((gq => {
              this.isEventForConsumer(qq, gq) && (Eq = !0, this.sendToConsumer(qq, gq), this.saveEventToCache(qq))
            })), this.hasHandledPotentialRedirect || ! function(qq) {
              switch (qq.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return bl(qq);
                default:
                  return !1
              }
            }(qq) || (this.hasHandledPotentialRedirect = !0, Eq || (this.queuedRedirectEvent = qq, Eq = !0)), Eq
          }
          sendToConsumer(qq, Eq) {
            var gq;
            if (qq.error && !bl(qq)) {
              const Yq = (null === (gq = qq.error.code) || void 0 === gq ? void 0 : gq.split("auth/")[1]) || "internal-error";
              Eq.onError(Qq(this.auth, Yq))
            } else Eq.onAuthEvent(qq)
          }
          isEventForConsumer(qq, Eq) {
            const gq = null === Eq.eventId || !!qq.eventId && qq.eventId === Eq.eventId;
            return Eq.filter.includes(qq.type) && gq
          }
          hasEventBeenHandled(qq) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(nl(qq))
          }
          saveEventToCache(qq) {
            this.cachedEventUids.add(nl(qq)), this.lastProcessedEventTime = Date.now()
          }
        }

        function nl(qq) {
          return [qq.type, qq.eventId, qq.sessionId, qq.tenantId].filter((qq => qq)).join("-")
        }

        function bl(qq) {
          let {
            type: Eq,
            error: gq
          } = qq;
          return "unknown" === Eq && "auth/no-auth-event" === (null === gq || void 0 === gq ? void 0 : gq.code)
        }
        const il = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Zl = /^https?/;
        async function fl(qq) {
          if (qq.config.emulator) return;
          const {
            authorizedDomains: Eq
          } = await async function(qq) {
            return Gq(qq, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(qq);
          for (const Yq of Eq) try {
            if (Ml(Yq)) return
          } catch (gq) {}
          Pq(qq, "unauthorized-domain")
        }

        function Ml(qq) {
          const Eq = bq(),
            {
              protocol: gq,
              hostname: Yq
            } = new URL(Eq);
          if (qq.startsWith("chrome-extension://")) {
            const lq = new URL(qq);
            return "" === lq.hostname && "" === Yq ? "chrome-extension:" === gq && qq.replace("chrome-extension://", "") === Eq.replace("chrome-extension://", "") : "chrome-extension:" === gq && lq.hostname === Yq
          }
          if (!Zl.test(gq)) return !1;
          if (il.test(qq)) return Yq === qq;
          const lq = qq.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + lq + "|" + lq + ")$", "i").test(Yq)
        }
        const Tl = new fq(3e4, 6e4);

        function zl() {
          const qq = vY().___jsl;
          if (null === qq || void 0 === qq ? void 0 : qq.H)
            for (const Eq of Object.keys(qq.H))
              if (qq.H[Eq].r = qq.H[Eq].r || [], qq.H[Eq].L = qq.H[Eq].L || [], qq.H[Eq].r = [...qq.H[Eq].L], qq.CP)
                for (let gq = 0; gq < qq.CP.length; gq++) qq.CP[gq] = null
        }
        let Sl = null;

        function pl(qq) {
          return Sl = Sl || function(qq) {
            return new Promise(((Eq, gq) => {
              var Yq, lq, Oq;

              function mq() {
                zl(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Eq(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    zl(), gq(Qq(qq, "network-request-failed"))
                  },
                  timeout: Tl.get()
                })
              }
              if (null === (lq = null === (Yq = vY().gapi) || void 0 === Yq ? void 0 : Yq.iframes) || void 0 === lq ? void 0 : lq.Iframe) Eq(gapi.iframes.getContext());
              else {
                if (!(null === (Oq = vY().gapi) || void 0 === Oq ? void 0 : Oq.load)) {
                  const Eq = hE("iframefcb");
                  return vY()[Eq] = () => {
                    gapi.load ? mq() : gq(Qq(qq, "network-request-failed"))
                  }, vE(`https://apis.google.com/js/api.js?onload=${Eq}`).catch((qq => gq(qq)))
                }
                mq()
              }
            })).catch((qq => {
              throw Sl = null, qq
            }))
          }(qq), Sl
        }
        const Gl = new fq(5e3, 15e3),
          Ll = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          Jl = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function kl(qq) {
          const Eq = qq.config;
          vq(Eq.authDomain, qq, "auth-domain-config-required");
          const gq = Eq.emulator ? Mq(Eq, "emulator/auth/iframe") : `https://${qq.config.authDomain}/__/auth/iframe`,
            Oq = {
              apiKey: Eq.apiKey,
              appName: qq.name,
              v: lq.d
            },
            mq = Jl.get(qq.config.apiHost);
          mq && (Oq.eid = mq);
          const xq = qq._getFrameworks();
          return xq.length && (Oq.fw = xq.join(",")), `${gq}?${(0,Yq.$)(Oq).slice(1)}`
        }
        const Rl = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Ul {
          constructor(qq) {
            this.window = qq, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (qq) {}
          }
        }

        function Fl(qq, Eq, gq) {
          let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const mq = Math.max((window.screen.availHeight - Oq) / 2, 0).toString(),
            xq = Math.max((window.screen.availWidth - lq) / 2, 0).toString();
          let Aq = "";
          const cq = Object.assign(Object.assign({}, Rl), {
              width: lq.toString(),
              height: Oq.toString(),
              top: mq,
              left: xq
            }),
            uq = (0, Yq.L)().toLowerCase();
          gq && (Aq = NE(uq) ? "_blank" : gq), BE(uq) && (Eq = Eq || "http://localhost", cq.scrollbars = "yes");
          const Bq = Object.entries(cq).reduce(((qq, Eq) => {
            let [gq, Yq] = Eq;
            return `${qq}${gq}=${Yq},`
          }), "");
          if (function() {
              var qq;
              return HE(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)()) && !!(null === (qq = window.navigator) || void 0 === qq ? void 0 : qq.standalone)
            }(uq) && "_self" !== Aq) return function(qq, Eq) {
            const gq = document.createElement("a");
            gq.href = qq, gq.target = Eq;
            const Yq = document.createEvent("MouseEvent");
            Yq.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), gq.dispatchEvent(Yq)
          }(Eq || "", Aq), new Ul(null);
          const Wq = window.open(Eq || "", Aq, Bq);
          vq(Wq, qq, "popup-blocked");
          try {
            Wq.focus()
          } catch (Nq) {}
          return new Ul(Wq)
        }
        const sl = "__/auth/handler",
          Xl = "emulator/auth/handler",
          wl = encodeURIComponent("fac");
        async function Kl(qq, Eq, gq, Oq, mq, xq) {
            vq(qq.config.authDomain, qq, "auth-domain-config-required"), vq(qq.config.apiKey, qq, "invalid-api-key");
            const Aq = {
              apiKey: qq.config.apiKey,
              appName: qq.name,
              authType: gq,
              redirectUrl: Oq,
              v: lq.d,
              eventId: mq
            };
            if (Eq instanceof qg) {
              Eq.setDefaultLanguage(qq.languageCode), Aq.providerId = Eq.providerId || "", (0, Yq.N)(Eq.getCustomParameters()) || (Aq.customParameters = JSON.stringify(Eq.getCustomParameters()));
              for (const [qq, Eq] of Object.entries(xq || {})) Aq[qq] = Eq
            }
            if (Eq instanceof Eg) {
              const qq = Eq.getScopes().filter((qq => "" !== qq));
              qq.length > 0 && (Aq.scopes = qq.join(","))
            }
            qq.tenantId && (Aq.tid = qq.tenantId);
            const cq = Aq;
            for (const Yq of Object.keys(cq)) void 0 === cq[Yq] && delete cq[Yq];
            const uq = await qq._getAppCheckToken(),
              Bq = uq ? `#${wl}=${encodeURIComponent(uq)}` : "";
            return `${function(qq){let{config:Eq}=qq;if(!Eq.emulator)return`
            https: //${Eq.authDomain}/${sl}`;return Mq(Eq,Xl)}(qq)}?${(0,Yq.$)(cq).slice(1)}${Bq}`}const Cl="webStorageSupport";const Il=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QY,this._completeRedirectFn=rl,this._overrideRedirectResult=jl}async _openPopup(qq,Eq,gq,Yq){var lq;nq(null===(lq=this.eventManagers[qq._key()])||void 0===lq?void 0:lq.manager,"_initialize() not called before _openPopup()");return Fl(qq,await Kl(qq,Eq,gq,bq(),Yq),tY())}async _openRedirect(qq,Eq,gq,Yq){await this._originValidation(qq);return function(qq){vY().location.href=qq}(await Kl(qq,Eq,gq,bq(),Yq)),new Promise((()=>{}))}_initialize(qq){const Eq=qq._key();if(this.eventManagers[Eq]){const{manager:qq,promise:gq}=this.eventManagers[Eq];return qq?Promise.resolve(qq):(nq(gq,"If manager is not set, promise should be"),gq)}const gq=this.initAndGetManager(qq);return this.eventManagers[Eq]={promise:gq},gq.catch((()=>{delete this.eventManagers[Eq]})),gq}async initAndGetManager(qq){const Eq=await async function(qq){const Eq=await pl(qq),gq=vY().gapi;return vq(gq,qq,"internal-error"),Eq.open({where:document.body,url:kl(qq),messageHandlersFilter:gq.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ll,dontclear:!0},(Eq=>new Promise((async(gq,Yq)=>{await Eq.restyle({setHideOnLeave:!1});const lq=Qq(qq,"network-request-failed"),Oq=vY().setTimeout((()=>{Yq(lq)}),Gl.get());function mq(){vY().clearTimeout(Oq),gq(Eq)}Eq.ping(mq).then(mq,(()=>{Yq(lq)}))}))))}(qq),gq=new hl(qq);return Eq.register("authEvent",(Eq=>{vq(null===Eq||void 0===Eq?void 0:Eq.authEvent,qq,"invalid-auth-event");return{status:gq.onEvent(Eq.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[qq._key()]={manager:gq},this.iframes[qq._key()]=Eq,gq}_isIframeWebStorageSupported(qq,Eq){this.iframes[qq._key()].send(Cl,{type:Cl},(gq=>{var Yq;const lq=null===(Yq=null===gq||void 0===gq?void 0:gq[0])||void 0===Yq?void 0:Yq[Cl];void 0!==lq&&Eq(!!lq),Pq(qq,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(qq){const Eq=qq._key();return this.originValidationPromises[Eq]||(this.originValidationPromises[Eq]=fl(qq)),this.originValidationPromises[Eq]}get _shouldInitProactively(){return oE()||WE()||HE()}};class el{constructor(qq){this.factorId=qq}_process(qq,Eq,gq){switch(Eq.type){case"enroll":return this._finalizeEnroll(qq,Eq.credential,gq);case"signin":return this._finalizeSignIn(qq,Eq.credential);default:return hq("unexpected MultiFactorSessionType")}}}class Dl extends el{constructor(qq){super("phone"),this.credential=qq}static _fromCredential(qq){return new Dl(qq)}_finalizeEnroll(qq,Eq,gq){return function(qq,Eq){return Gq(qq,"POST","/v2/accounts/mfaEnrollment:finalize",pq(qq,Eq))}(qq,{idToken:Eq,displayName:gq,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(qq,Eq){return function(qq,Eq){return Gq(qq,"POST","/v2/accounts/mfaSignIn:finalize",pq(qq,Eq))}(qq,{mfaPendingCredential:Eq,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qO{constructor(){}static assertion(qq){return Dl._fromCredential(qq)}}qO.FACTOR_ID="phone";class EO{static assertionForEnrollment(qq,Eq){return gO._fromSecret(qq,Eq)}static assertionForSignIn(qq,Eq){return gO._fromEnrollmentId(qq,Eq)}static async generateSecret(qq){const Eq=qq;vq("undefined"!==typeof Eq.auth,"internal-error");const gq=await(Yq=Eq.auth,lq={idToken:Eq.credential,totpEnrollmentInfo:{}},Gq(Yq,"POST","/v2/accounts/mfaEnrollment:start",pq(Yq,lq)));var Yq,lq;return YO._fromStartTotpMfaEnrollmentResponse(gq,Eq.auth)}}EO.FACTOR_ID="totp";class gO extends el{constructor(qq,Eq,gq){super("totp"),this.otp=qq,this.enrollmentId=Eq,this.secret=gq}static _fromSecret(qq,Eq){return new gO(Eq,void 0,qq)}static _fromEnrollmentId(qq,Eq){return new gO(Eq,qq)}async _finalizeEnroll(qq,Eq,gq){return vq("undefined"!==typeof this.secret,qq,"argument-error"),function(qq,Eq){return Gq(qq,"POST","/v2/accounts/mfaEnrollment:finalize",pq(qq,Eq))}(qq,{idToken:Eq,displayName:gq,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(qq,Eq){vq(void 0!==this.enrollmentId&&void 0!==this.otp,qq,"argument-error");const gq={verificationCode:this.otp};return function(qq,Eq){return Gq(qq,"POST","/v2/accounts/mfaSignIn:finalize",pq(qq,Eq))}(qq,{mfaPendingCredential:Eq,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:gq})}}class YO{constructor(qq,Eq,gq,Yq,lq,Oq,mq){this.sessionInfo=Oq,this.auth=mq,this.secretKey=qq,this.hashingAlgorithm=Eq,this.codeLength=gq,this.codeIntervalSeconds=Yq,this.enrollmentCompletionDeadline=lq}static _fromStartTotpMfaEnrollmentResponse(qq,Eq){return new YO(qq.totpSessionInfo.sharedSecretKey,qq.totpSessionInfo.hashingAlgorithm,qq.totpSessionInfo.verificationCodeLength,qq.totpSessionInfo.periodSec,new Date(qq.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),qq.totpSessionInfo.sessionInfo,Eq)}_makeTotpVerificationInfo(qq){return{sessionInfo:this.sessionInfo,verificationCode:qq}}generateQrCodeUrl(qq,Eq){var gq;let Yq=!1;return(lO(qq)||lO(Eq))&&(Yq=!0),Yq&&(lO(qq)&&(qq=(null===(gq=this.auth.currentUser)||void 0===gq?void 0:gq.email)||"unknownuser"),lO(Eq)&&(Eq=this.auth.name)),`otpauth://totp/${Eq}:${qq}?secret=${this.secretKey}&issuer=${Eq}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function lO(qq){return"undefined"===typeof qq||0===(null===qq||void 0===qq?void 0:qq.length)}var OO="@firebase/auth",mO="0.23.2";class xO{constructor(qq){this.auth=qq,this.internalListeners=new Map}getUid(){var qq;return this.assertAuthConfigured(),(null===(qq=this.auth.currentUser)||void 0===qq?void 0:qq.uid)||null}async getToken(qq){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(qq)}}addAuthTokenListener(qq){if(this.assertAuthConfigured(),this.internalListeners.has(qq))return;const Eq=this.auth.onIdTokenChanged((Eq=>{qq((null===Eq||void 0===Eq?void 0:Eq.stsTokenManager.accessToken)||null)}));this.internalListeners.set(qq,Eq),this.updateProactiveRefresh()}removeAuthTokenListener(qq){this.assertAuthConfigured();const Eq=this.internalListeners.get(qq);Eq&&(this.internalListeners.delete(qq),Eq(),this.updateProactiveRefresh())}assertAuthConfigured(){vq(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const AO=(0,Yq.J)("authIdTokenMaxAge")||300;let cO=null;const uO=qq=>async Eq=>{const gq=Eq&&await Eq.getIdTokenResult(),Yq=gq&&((new Date).getTime()-Date.parse(gq.issuedAtTime))/1e3;if(Yq&&Yq>AO)return;const lq=null===gq||void 0===gq?void 0:gq.token;cO!==lq&&(cO=lq,await fetch(qq,{method:lq?"POST":"DELETE",headers:lq?{Authorization:`Bearer ${lq}`}:{}}))};function BO(){let qq=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,lq.F)();const Eq=(0,lq.s)(qq,"auth");if(Eq.isInitialized())return Eq.getImmediate();const gq=TE(qq,{popupRedirectResolver:Il,persistence:[pY,oY,QY]}),Oq=(0,Yq.J)("authTokenSyncURL");if(Oq){const qq=uO(Oq);lY(gq,qq,(()=>qq(gq.currentUser))),YY(gq,(Eq=>qq(Eq)))}const mq=(0,Yq.F)("auth");return mq&&zE(gq,`http://${mq}`),gq}var WO;WO="Browser",(0,lq.v)(new xq.f("auth",((qq,Eq)=>{let{options:gq}=Eq;const Yq=qq.getProvider("app").getImmediate(),lq=qq.getProvider("heartbeat"),Oq=qq.getProvider("app-check-internal"),{apiKey:mq,authDomain:xq}=Yq.options;vq(mq&&!mq.includes(":"),"invalid-api-key",{appName:Yq.name});const Aq={apiKey:mq,authDomain:xq,clientPlatform:WO,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PE(WO)},cq=new ZE(Yq,lq,Oq,Aq);return function(qq,Eq){const gq=(null===Eq||void 0===Eq?void 0:Eq.persistence)||[],Yq=(Array.isArray(gq)?gq:[gq]).map(OE);(null===Eq||void 0===Eq?void 0:Eq.errorMap)&&qq._updateErrorMap(Eq.errorMap),qq._initializeWithPersistence(Yq,null===Eq||void 0===Eq?void 0:Eq.popupRedirectResolver)}(cq,gq),cq}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((qq,Eq,gq)=>{qq.getProvider("auth-internal").initialize()}))),(0,lq.v)(new xq.f("auth-internal",(qq=>(qq=>new xO(qq))(fE(qq.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,lq.L)(OO,mO,function(qq){switch(qq){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(WO)),(0,lq.L)(OO,mO,"esm2017")}};Object.freeze(modules);for(const qq in modules)Object.freeze(modules[qq]);