/*! For license information please see 7jvyee.247.cb7d11af.chunk.js.LICENSE.txt */
export const id = 247;
export const ids = [247];
export const modules = {
    39040: (yb, bb, Wy) => {
        Wy.r(bb), Wy.d(bb, {
          ActionCodeOperation: () => ey,
          ActionCodeURL: () => xW,
          AuthCredential: () => Fb,
          AuthErrorCodes: () => ly,
          EmailAuthCredential: () => wb,
          EmailAuthProvider: () => db,
          FacebookAuthProvider: () => UW,
          FactorId: () => Py,
          GithubAuthProvider: () => fW,
          GoogleAuthProvider: () => hW,
          OAuthCredential: () => Nb,
          OAuthProvider: () => WW,
          OperationType: () => Ky,
          PhoneAuthCredential: () => Ib,
          PhoneAuthProvider: () => bf,
          PhoneMultiFactorGenerator: () => bZ,
          ProviderId: () => oy,
          RecaptchaVerifier: () => NU,
          SAMLAuthProvider: () => cU,
          SignInMethod: () => By,
          TotpMultiFactorGenerator: () => Wf,
          TotpSecret: () => hf,
          TwitterAuthProvider: () => PW,
          applyActionCode: () => XW,
          beforeAuthStateChanged: () => hU,
          browserLocalPersistence: () => CU,
          browserPopupRedirectResolver: () => Ah,
          browserSessionPersistence: () => VU,
          checkActionCode: () => nW,
          confirmPasswordReset: () => YW,
          connectAuthEmulator: () => rW,
          createUserWithEmailAndPassword: () => rU,
          debugErrorMap: () => sy,
          deleteUser: () => oU,
          fetchSignInMethodsForEmail: () => LW,
          getAdditionalUserInfo: () => yh,
          getAuth: () => ef,
          getIdToken: () => wy,
          getIdTokenResult: () => kb,
          getMultiFactorResolver: () => eU,
          getRedirectResult: () => gf,
          inMemoryPersistence: () => cW,
          indexedDBLocalPersistence: () => ah,
          initializeAuth: () => ub,
          initializeRecaptchaConfig: () => WU,
          isSignInWithEmailLink: () => FW,
          linkWithCredential: () => JW,
          linkWithPhoneNumber: () => xh,
          linkWithPopup: () => Kh,
          linkWithRedirect: () => Jh,
          multiFactor: () => SU,
          onAuthStateChanged: () => fU,
          onIdTokenChanged: () => UU,
          parseActionCodeURL: () => Ab,
          prodErrorMap: () => Sy,
          reauthenticateWithCredential: () => gU,
          reauthenticateWithPhoneNumber: () => AU,
          reauthenticateWithPopup: () => Bh,
          reauthenticateWithRedirect: () => Vh,
          reload: () => yW,
          sendEmailVerification: () => QW,
          sendPasswordResetEmail: () => MW,
          sendSignInLinkToEmail: () => aU,
          setPersistence: () => bh,
          signInAnonymously: () => eW,
          signInWithCredential: () => VW,
          signInWithCustomToken: () => GW,
          signInWithEmailAndPassword: () => HW,
          signInWithEmailLink: () => pW,
          signInWithPhoneNumber: () => IU,
          signInWithPopup: () => oh,
          signInWithRedirect: () => Th,
          signOut: () => PU,
          unlink: () => EW,
          updateCurrentUser: () => ch,
          updateEmail: () => tU,
          updatePassword: () => wW,
          updatePhoneNumber: () => yf,
          updateProfile: () => DW,
          useDeviceLanguage: () => ZU,
          verifyBeforeUpdateEmail: () => jU,
          verifyPasswordResetCode: () => uW
        });
        var Uy = Wy(39029),
          hy = Wy(39016);

        function fy(yb, bb) {
          var Wy = {};
          for (var Uy in yb) Object.prototype.hasOwnProperty.call(yb, Uy) && bb.indexOf(Uy) < 0 && (Wy[Uy] = yb[Uy]);
          if (null != yb && "function" === typeof Object.getOwnPropertySymbols) {
            var hy = 0;
            for (Uy = Object.getOwnPropertySymbols(yb); hy < Uy.length; hy++) bb.indexOf(Uy[hy]) < 0 && Object.prototype.propertyIsEnumerable.call(yb, Uy[hy]) && (Wy[Uy[hy]] = yb[Uy[hy]])
          }
          return Wy
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Zy = Wy(39034),
          cb = Wy(39025);
        const Py = {
            PHONE: "phone",
            TOTP: "totp"
          },
          oy = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          By = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Ky = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          ey = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function qb() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const sy = function() {
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
          Sy = qb,
          Ey = new Uy.e("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          ly = {
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
          mb = new Zy.f("@firebase/auth");

        function Cy(yb) {
          if (mb.logLevel <= Zy.e.ERROR) {
            for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
            mb.error(`Auth (${hy.h}): ${yb}`, ...Wy)
          }
        }

        function Ty(yb) {
          for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
          throw Gy(yb, ...Wy)
        }

        function Vy(yb) {
          for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
          return Gy(yb, ...Wy)
        }

        function Jy(yb, bb, Wy) {
          const hy = Object.assign(Object.assign({}, Sy()), {
            [bb]: Wy
          });
          return new Uy.e("auth", "Firebase", hy).create(bb, {
            appName: yb.name
          })
        }

        function gb(yb, bb, Wy) {
          if (!(bb instanceof Wy)) throw Wy.name !== bb.constructor.name && Ty(yb, "argument-error"), Jy(yb, "argument-error", `Type of ${bb.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function Gy(yb) {
          for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
          if ("string" !== typeof yb) {
            const bb = Wy[0],
              Uy = [...Wy.slice(1)];
            return Uy[0] && (Uy[0].appName = yb.name), yb._errorFactory.create(bb, ...Uy)
          }
          return Ey.create(yb, ...Wy)
        }

        function Oy(yb, bb) {
          if (!yb) {
            for (var Wy = arguments.length, Uy = new Array(Wy > 2 ? Wy - 2 : 0), hy = 2; hy < Wy; hy++) Uy[hy - 2] = arguments[hy];
            throw Gy(bb, ...Uy)
          }
        }

        function Ry(yb) {
          const bb = "INTERNAL ASSERTION FAILED: " + yb;
          throw Cy(bb), new Error(bb)
        }

        function vb(yb, bb) {
          yb || Ry(bb)
        }

        function ib() {
          var yb;
          return "undefined" !== typeof self && (null === (yb = self.location) || void 0 === yb ? void 0 : yb.href) || ""
        }

        function My() {
          return "http:" === Yy() || "https:" === Yy()
        }

        function Yy() {
          var yb;
          return "undefined" !== typeof self && (null === (yb = self.location) || void 0 === yb ? void 0 : yb.protocol) || null
        }
        class Xy {
          constructor(yb, bb) {
            this.shortDelay = yb, this.longDelay = bb, vb(bb > yb, "Short delay should be less than long delay!"), this.isMobile = (0, Uy.V)() || (0, Uy.Z)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (My() || (0, Uy.L)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function ny(yb, bb) {
          vb(yb.emulator, "Emulator should always be set here");
          const {
            url: Wy
          } = yb.emulator;
          return bb ? `${Wy}${bb.startsWith("/")?bb.slice(1):bb}` : Wy
        }
        class uy {
          static initialize(yb, bb, Wy) {
            this.fetchImpl = yb, bb && (this.headersImpl = bb), Wy && (this.responseImpl = Wy)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Ry("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Ry("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Ry("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const rb = {
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
          Hy = new Xy(3e4, 6e4);

        function ab(yb, bb) {
          return yb.tenantId && !bb.tenantId ? Object.assign(Object.assign({}, bb), {
            tenantId: yb.tenantId
          }) : bb
        }
        async function Fy(yb, bb, Wy, hy) {
          return py(yb, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let fy = {},
              Zy = {};
            hy && ("GET" === bb ? Zy = hy : fy = {
              body: JSON.stringify(hy)
            });
            const cb = (0, Uy.cb)(Object.assign({
                key: yb.config.apiKey
              }, Zy)).slice(1),
              Py = await yb._getAdditionalHeaders();
            return Py["Content-Type"] = "application/json", yb.languageCode && (Py["X-Firebase-Locale"] = yb.languageCode), uy.fetch()(Qy(yb, yb.config.apiHost, Wy, cb), Object.assign({
              method: bb,
              headers: Py,
              referrerPolicy: "no-referrer"
            }, fy))
          }))
        }
        async function py(yb, bb, Wy) {
          yb._canInitEmulator = !1;
          const hy = Object.assign(Object.assign({}, rb), bb);
          try {
            const bb = new jb(yb),
              Uy = await Promise.race([Wy(), bb.promise]);
            bb.clearNetworkTimeout();
            const fy = await Uy.json();
            if ("needConfirmation" in fy) throw Dy(yb, "account-exists-with-different-credential", fy);
            if (Uy.ok && !("errorMessage" in fy)) return fy;
            {
              const bb = Uy.ok ? fy.errorMessage : fy.error.message,
                [Wy, Zy] = bb.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === Wy) throw Dy(yb, "credential-already-in-use", fy);
              if ("EMAIL_EXISTS" === Wy) throw Dy(yb, "email-already-in-use", fy);
              if ("USER_DISABLED" === Wy) throw Dy(yb, "user-disabled", fy);
              const cb = hy[Wy] || Wy.toLowerCase().replace(/[_\s]+/g, "-");
              if (Zy) throw Jy(yb, cb, Zy);
              Ty(yb, cb)
            }
          } catch (fy) {
            if (fy instanceof Uy.i) throw fy;
            Ty(yb, "network-request-failed", {
              message: String(fy)
            })
          }
        }
        async function Ly(yb, bb, Wy, Uy) {
          let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const fy = await Fy(yb, bb, Wy, Uy, hy);
          return "mfaPendingCredential" in fy && Ty(yb, "multi-factor-auth-required", {
            _serverResponse: fy
          }), fy
        }

        function Qy(yb, bb, Wy, Uy) {
          const hy = `${bb}${Wy}?${Uy}`;
          return yb.config.emulator ? ny(yb.config, hy) : `${yb.config.apiScheme}://${hy}`
        }
        class jb {
          constructor(yb) {
            this.auth = yb, this.timer = null, this.promise = new Promise(((yb, bb) => {
              this.timer = setTimeout((() => bb(Vy(this.auth, "network-request-failed"))), Hy.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function Dy(yb, bb, Wy) {
          const Uy = {
            appName: yb.name
          };
          Wy.email && (Uy.email = Wy.email), Wy.phoneNumber && (Uy.phoneNumber = Wy.phoneNumber);
          const hy = Vy(yb, bb, Uy);
          return hy.customData._tokenResponse = Wy, hy
        }

        function tb(yb) {
          if (yb) try {
            const bb = new Date(Number(yb));
            if (!isNaN(bb.getTime())) return bb.toUTCString()
          } catch (bb) {}
        }

        function wy(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Uy.J)(yb).getIdToken(bb)
        }
        async function kb(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const Wy = (0, Uy.J)(yb),
            hy = await Wy.getIdToken(bb),
            fy = zb(hy);
          Oy(fy && fy.exp && fy.auth_time && fy.iat, Wy.auth, "internal-error");
          const Zy = "object" === typeof fy.firebase ? fy.firebase : void 0,
            cb = null === Zy || void 0 === Zy ? void 0 : Zy.sign_in_provider;
          return {
            claims: fy,
            token: hy,
            authTime: tb(Ny(fy.auth_time)),
            issuedAtTime: tb(Ny(fy.iat)),
            expirationTime: tb(Ny(fy.exp)),
            signInProvider: cb || null,
            signInSecondFactor: (null === Zy || void 0 === Zy ? void 0 : Zy.sign_in_second_factor) || null
          }
        }

        function Ny(yb) {
          return 1e3 * Number(yb)
        }

        function zb(yb) {
          const [bb, Wy, hy] = yb.split(".");
          if (void 0 === bb || void 0 === Wy || void 0 === hy) return Cy("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const yb = (0, Uy.p)(Wy);
            return yb ? JSON.parse(yb) : (Cy("Failed to decode base64 JWT payload"), null)
          } catch (fy) {
            return Cy("Caught error parsing JWT payload as JSON", null === fy || void 0 === fy ? void 0 : fy.toString()), null
          }
        }
        async function Iy(yb, bb) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return bb;
          try {
            return await bb
          } catch (Wy) {
            throw Wy instanceof Uy.i && function(yb) {
              let {
                code: bb
              } = yb;
              return "auth/user-disabled" === bb || "auth/user-token-expired" === bb
            }(Wy) && yb.auth.currentUser === yb && await yb.auth.signOut(), Wy
          }
        }
        class xb {
          constructor(yb) {
            this.user = yb, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(yb) {
            var bb;
            if (yb) {
              const yb = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), yb
            } {
              this.errorBackoff = 3e4;
              const yb = (null !== (bb = this.user.stsTokenManager.expirationTime) && void 0 !== bb ? bb : 0) - Date.now() - 3e5;
              return Math.max(0, yb)
            }
          }
          schedule() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const bb = this.getInterval(yb);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), bb)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (yb) {
              return void("auth/network-request-failed" === (null === yb || void 0 === yb ? void 0 : yb.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class Ay {
          constructor(yb, bb) {
            this.createdAt = yb, this.lastLoginAt = bb, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = tb(this.lastLoginAt), this.creationTime = tb(this.createdAt)
          }
          _copy(yb) {
            this.createdAt = yb.createdAt, this.lastLoginAt = yb.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function dy(yb) {
          var bb;
          const Wy = yb.auth,
            Uy = await yb.getIdToken(),
            hy = await Iy(yb, async function(yb, bb) {
              return Fy(yb, "POST", "/v1/accounts:lookup", bb)
            }(Wy, {
              idToken: Uy
            }));
          Oy(null === hy || void 0 === hy ? void 0 : hy.users.length, Wy, "internal-error");
          const Zy = hy.users[0];
          yb._notifyReloadListener(Zy);
          const cb = (null === (bb = Zy.providerUserInfo) || void 0 === bb ? void 0 : bb.length) ? Zy.providerUserInfo.map((yb => {
            var {
              providerId: bb
            } = yb, Wy = fy(yb, ["providerId"]);
            return {
              providerId: bb,
              uid: Wy.rawId || "",
              displayName: Wy.displayName || null,
              email: Wy.email || null,
              phoneNumber: Wy.phoneNumber || null,
              photoURL: Wy.photoUrl || null
            }
          })) : [];
          const Py = (oy = yb.providerData, By = cb, [...oy.filter((yb => !By.some((bb => bb.providerId === yb.providerId)))), ...By]);
          var oy, By;
          const Ky = yb.isAnonymous,
            ey = !(yb.email && Zy.passwordHash) && !(null === Py || void 0 === Py ? void 0 : Py.length),
            qb = !!Ky && ey,
            sy = {
              uid: Zy.localId,
              displayName: Zy.displayName || null,
              photoURL: Zy.photoUrl || null,
              email: Zy.email || null,
              emailVerified: Zy.emailVerified || !1,
              phoneNumber: Zy.phoneNumber || null,
              tenantId: Zy.tenantId || null,
              providerData: Py,
              metadata: new Ay(Zy.createdAt, Zy.lastLoginAt),
              isAnonymous: qb
            };
          Object.assign(yb, sy)
        }
        async function yW(yb) {
          const bb = (0, Uy.J)(yb);
          await dy(bb), await bb.auth._persistUserIfCurrent(bb), bb.auth._notifyListenersIfCurrent(bb)
        }
        class bW {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(yb) {
            Oy(yb.idToken, "internal-error"), Oy("undefined" !== typeof yb.idToken, "internal-error"), Oy("undefined" !== typeof yb.refreshToken, "internal-error");
            const bb = "expiresIn" in yb && "undefined" !== typeof yb.expiresIn ? Number(yb.expiresIn) : function(yb) {
              const bb = zb(yb);
              return Oy(bb, "internal-error"), Oy("undefined" !== typeof bb.exp, "internal-error"), Oy("undefined" !== typeof bb.iat, "internal-error"), Number(bb.exp) - Number(bb.iat)
            }(yb.idToken);
            this.updateTokensAndExpiration(yb.idToken, yb.refreshToken, bb)
          }
          async getToken(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Oy(!this.accessToken || this.refreshToken, yb, "user-token-expired"), bb || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(yb, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(yb, bb) {
            const {
              accessToken: Wy,
              refreshToken: hy,
              expiresIn: fy
            } = await async function(yb, bb) {
              const Wy = await py(yb, {}, (async () => {
                const Wy = (0, Uy.cb)({
                    grant_type: "refresh_token",
                    refresh_token: bb
                  }).slice(1),
                  {
                    tokenApiHost: hy,
                    apiKey: fy
                  } = yb.config,
                  Zy = Qy(yb, hy, "/v1/token", `key=${fy}`),
                  cb = await yb._getAdditionalHeaders();
                return cb["Content-Type"] = "application/x-www-form-urlencoded", uy.fetch()(Zy, {
                  method: "POST",
                  headers: cb,
                  body: Wy
                })
              }));
              return {
                accessToken: Wy.access_token,
                expiresIn: Wy.expires_in,
                refreshToken: Wy.refresh_token
              }
            }(yb, bb);
            this.updateTokensAndExpiration(Wy, hy, Number(fy))
          }
          updateTokensAndExpiration(yb, bb, Wy) {
            this.refreshToken = bb || null, this.accessToken = yb || null, this.expirationTime = Date.now() + 1e3 * Wy
          }
          static fromJSON(yb, bb) {
            const {
              refreshToken: Wy,
              accessToken: Uy,
              expirationTime: hy
            } = bb, fy = new bW;
            return Wy && (Oy("string" === typeof Wy, "internal-error", {
              appName: yb
            }), fy.refreshToken = Wy), Uy && (Oy("string" === typeof Uy, "internal-error", {
              appName: yb
            }), fy.accessToken = Uy), hy && (Oy("number" === typeof hy, "internal-error", {
              appName: yb
            }), fy.expirationTime = hy), fy
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(yb) {
            this.accessToken = yb.accessToken, this.refreshToken = yb.refreshToken, this.expirationTime = yb.expirationTime
          }
          _clone() {
            return Object.assign(new bW, this.toJSON())
          }
          _performRefresh() {
            return Ry("not implemented")
          }
        }

        function Wb(yb, bb) {
          Oy("string" === typeof yb || "undefined" === typeof yb, "internal-error", {
            appName: bb
          })
        }
        class Ub {
          constructor(yb) {
            var {
              uid: bb,
              auth: Wy,
              stsTokenManager: Uy
            } = yb, hy = fy(yb, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new xb(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = bb, this.auth = Wy, this.stsTokenManager = Uy, this.accessToken = Uy.accessToken, this.displayName = hy.displayName || null, this.email = hy.email || null, this.emailVerified = hy.emailVerified || !1, this.phoneNumber = hy.phoneNumber || null, this.photoURL = hy.photoURL || null, this.isAnonymous = hy.isAnonymous || !1, this.tenantId = hy.tenantId || null, this.providerData = hy.providerData ? [...hy.providerData] : [], this.metadata = new Ay(hy.createdAt || void 0, hy.lastLoginAt || void 0)
          }
          async getIdToken(yb) {
            const bb = await Iy(this, this.stsTokenManager.getToken(this.auth, yb));
            return Oy(bb, this.auth, "internal-error"), this.accessToken !== bb && (this.accessToken = bb, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), bb
          }
          getIdTokenResult(yb) {
            return kb(this, yb)
          }
          reload() {
            return yW(this)
          }
          _assign(yb) {
            this !== yb && (Oy(this.uid === yb.uid, this.auth, "internal-error"), this.displayName = yb.displayName, this.photoURL = yb.photoURL, this.email = yb.email, this.emailVerified = yb.emailVerified, this.phoneNumber = yb.phoneNumber, this.isAnonymous = yb.isAnonymous, this.tenantId = yb.tenantId, this.providerData = yb.providerData.map((yb => Object.assign({}, yb))), this.metadata._copy(yb.metadata), this.stsTokenManager._assign(yb.stsTokenManager))
          }
          _clone(yb) {
            const bb = new Ub(Object.assign(Object.assign({}, this), {
              auth: yb,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return bb.metadata._copy(this.metadata), bb
          }
          _onReload(yb) {
            Oy(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = yb, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(yb) {
            this.reloadListener ? this.reloadListener(yb) : this.reloadUserInfo = yb
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Wy = !1;
            yb.idToken && yb.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(yb), Wy = !0), bb && await dy(this), await this.auth._persistUserIfCurrent(this), Wy && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const yb = await this.getIdToken();
            return await Iy(this, async function(yb, bb) {
              return Fy(yb, "POST", "/v1/accounts:delete", bb)
            }(this.auth, {
              idToken: yb
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
              providerData: this.providerData.map((yb => Object.assign({}, yb))),
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
          static _fromJSON(yb, bb) {
            var Wy, Uy, hy, fy, Zy, cb, Py, oy;
            const By = null !== (Wy = bb.displayName) && void 0 !== Wy ? Wy : void 0,
              Ky = null !== (Uy = bb.email) && void 0 !== Uy ? Uy : void 0,
              ey = null !== (hy = bb.phoneNumber) && void 0 !== hy ? hy : void 0,
              qb = null !== (fy = bb.photoURL) && void 0 !== fy ? fy : void 0,
              sy = null !== (Zy = bb.tenantId) && void 0 !== Zy ? Zy : void 0,
              Sy = null !== (cb = bb._redirectEventId) && void 0 !== cb ? cb : void 0,
              Ey = null !== (Py = bb.createdAt) && void 0 !== Py ? Py : void 0,
              ly = null !== (oy = bb.lastLoginAt) && void 0 !== oy ? oy : void 0,
              {
                uid: mb,
                emailVerified: Cy,
                isAnonymous: Ty,
                providerData: Vy,
                stsTokenManager: Jy
              } = bb;
            Oy(mb && Jy, yb, "internal-error");
            const gb = bW.fromJSON(this.name, Jy);
            Oy("string" === typeof mb, yb, "internal-error"), Wb(By, yb.name), Wb(Ky, yb.name), Oy("boolean" === typeof Cy, yb, "internal-error"), Oy("boolean" === typeof Ty, yb, "internal-error"), Wb(ey, yb.name), Wb(qb, yb.name), Wb(sy, yb.name), Wb(Sy, yb.name), Wb(Ey, yb.name), Wb(ly, yb.name);
            const Gy = new Ub({
              uid: mb,
              auth: yb,
              email: Ky,
              emailVerified: Cy,
              displayName: By,
              isAnonymous: Ty,
              photoURL: qb,
              phoneNumber: ey,
              tenantId: sy,
              stsTokenManager: gb,
              createdAt: Ey,
              lastLoginAt: ly
            });
            return Vy && Array.isArray(Vy) && (Gy.providerData = Vy.map((yb => Object.assign({}, yb)))), Sy && (Gy._redirectEventId = Sy), Gy
          }
          static async _fromIdTokenResponse(yb, bb) {
            let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Uy = new bW;
            Uy.updateFromServerResponse(bb);
            const hy = new Ub({
              uid: bb.localId,
              auth: yb,
              stsTokenManager: Uy,
              isAnonymous: Wy
            });
            return await dy(hy), hy
          }
        }
        const hb = new Map;

        function fb(yb) {
          vb(yb instanceof Function, "Expected a class definition");
          let bb = hb.get(yb);
          return bb ? (vb(bb instanceof yb, "Instance stored in cache mismatched with class"), bb) : (bb = new yb, hb.set(yb, bb), bb)
        }
        class Zb {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(yb, bb) {
            this.storage[yb] = bb
          }
          async _get(yb) {
            const bb = this.storage[yb];
            return void 0 === bb ? null : bb
          }
          async _remove(yb) {
            delete this.storage[yb]
          }
          _addListener(yb, bb) {}
          _removeListener(yb, bb) {}
        }
        Zb.type = "NONE";
        const cW = Zb;

        function Pb(yb, bb, Wy) {
          return `firebase:${yb}:${bb}:${Wy}`
        }
        class ob {
          constructor(yb, bb, Wy) {
            this.persistence = yb, this.auth = bb, this.userKey = Wy;
            const {
              config: Uy,
              name: hy
            } = this.auth;
            this.fullUserKey = Pb(this.userKey, Uy.apiKey, hy), this.fullPersistenceKey = Pb("persistence", Uy.apiKey, hy), this.boundEventHandler = bb._onStorageEvent.bind(bb), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(yb) {
            return this.persistence._set(this.fullUserKey, yb.toJSON())
          }
          async getCurrentUser() {
            const yb = await this.persistence._get(this.fullUserKey);
            return yb ? Ub._fromJSON(this.auth, yb) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(yb) {
            if (this.persistence === yb) return;
            const bb = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = yb, bb ? this.setCurrentUser(bb) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(yb, bb) {
            let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!bb.length) return new ob(fb(cW), yb, Wy);
            const Uy = (await Promise.all(bb.map((async yb => {
              if (await yb._isAvailable()) return yb
            })))).filter((yb => yb));
            let hy = Uy[0] || fb(cW);
            const fy = Pb(Wy, yb.config.apiKey, yb.name);
            let Zy = null;
            for (const oy of bb) try {
              const bb = await oy._get(fy);
              if (bb) {
                const Wy = Ub._fromJSON(yb, bb);
                oy !== hy && (Zy = Wy), hy = oy;
                break
              }
            } catch (Py) {}
            const cb = Uy.filter((yb => yb._shouldAllowMigration));
            return hy._shouldAllowMigration && cb.length ? (hy = cb[0], Zy && await hy._set(fy, Zy.toJSON()), await Promise.all(bb.map((async yb => {
              if (yb !== hy) try {
                await yb._remove(fy)
              } catch (Py) {}
            }))), new ob(hy, yb, Wy)) : new ob(hy, yb, Wy)
          }
        }

        function Bb(yb) {
          const bb = yb.toLowerCase();
          if (bb.includes("opera/") || bb.includes("opr/") || bb.includes("opios/")) return "Opera";
          if (sb(bb)) return "IEMobile";
          if (bb.includes("msie") || bb.includes("trident/")) return "IE";
          if (bb.includes("edge/")) return "Edge";
          if (Kb(bb)) return "Firefox";
          if (bb.includes("silk/")) return "Silk";
          if (Eb(bb)) return "Blackberry";
          if (lb(bb)) return "Webos";
          if (eb(bb)) return "Safari";
          if ((bb.includes("chrome/") || qW(bb)) && !bb.includes("edge/")) return "Chrome";
          if (Sb(bb)) return "Android";
          {
            const bb = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              Wy = yb.match(bb);
            if (2 === (null === Wy || void 0 === Wy ? void 0 : Wy.length)) return Wy[1]
          }
          return "Other"
        }

        function Kb() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)();
          return /firefox\//i.test(yb)
        }

        function eb() {
          const yb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)()).toLowerCase();
          return yb.includes("safari/") && !yb.includes("chrome/") && !yb.includes("crios/") && !yb.includes("android")
        }

        function qW() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)();
          return /crios\//i.test(yb)
        }

        function sb() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)();
          return /iemobile/i.test(yb)
        }

        function Sb() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)();
          return /android/i.test(yb)
        }

        function Eb() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)();
          return /blackberry/i.test(yb)
        }

        function lb() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)();
          return /webos/i.test(yb)
        }

        function mW() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)();
          return /iphone|ipad|ipod/i.test(yb) || /macintosh/i.test(yb) && /mobile/i.test(yb)
        }

        function Cb() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)();
          return mW(yb) || Sb(yb) || lb(yb) || Eb(yb) || /windows phone/i.test(yb) || sb(yb)
        }

        function Tb(yb) {
          let bb, Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (yb) {
            case "Browser":
              bb = Bb((0, Uy.K)());
              break;
            case "Worker":
              bb = `${Bb((0,Uy.K)())}-${yb}`;
              break;
            default:
              bb = yb
          }
          const fy = Wy.length ? Wy.join(",") : "FirebaseCore-web";
          return `${bb}/JsCore/${hy.h}/${fy}`
        }
        async function Vb(yb, bb) {
          return Fy(yb, "GET", "/v2/recaptchaConfig", ab(yb, bb))
        }

        function Jb(yb) {
          return void 0 !== yb && void 0 !== yb.getResponse
        }

        function gW(yb) {
          return void 0 !== yb && void 0 !== yb.enterprise
        }
        class Gb {
          constructor(yb) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === yb.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = yb.recaptchaKey.split("/")[3], this.emailPasswordEnabled = yb.recaptchaEnforcementState.some((yb => "EMAIL_PASSWORD_PROVIDER" === yb.provider && "OFF" !== yb.enforcementState))
          }
        }

        function Ob(yb) {
          return new Promise(((bb, Wy) => {
            const Uy = document.createElement("script");
            Uy.setAttribute("src", yb), Uy.onload = bb, Uy.onerror = yb => {
                const bb = Vy("internal-error");
                bb.customData = yb, Wy(bb)
              }, Uy.type = "text/javascript", Uy.charset = "UTF-8",
              function() {
                var yb, bb;
                return null !== (bb = null === (yb = document.getElementsByTagName("head")) || void 0 === yb ? void 0 : yb[0]) && void 0 !== bb ? bb : document
              }().appendChild(Uy)
          }))
        }

        function Rb(yb) {
          return `__${yb}${Math.floor(1e6*Math.random())}`
        }
        class vW {
          constructor(yb) {
            this.type = "recaptcha-enterprise", this.auth = Xb(yb)
          }
          async verify() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function Wy(bb, Wy, Uy) {
              const hy = window.grecaptcha;
              gW(hy) ? hy.enterprise.ready((() => {
                hy.enterprise.execute(bb, {
                  action: yb
                }).then((yb => {
                  Wy(yb)
                })).catch((() => {
                  Wy("NO_RECAPTCHA")
                }))
              })) : Uy(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((yb, Uy) => {
              (async function(yb) {
                if (!bb) {
                  if (null == yb.tenantId && null != yb._agentRecaptchaConfig) return yb._agentRecaptchaConfig.siteKey;
                  if (null != yb.tenantId && void 0 !== yb._tenantRecaptchaConfigs[yb.tenantId]) return yb._tenantRecaptchaConfigs[yb.tenantId].siteKey
                }
                return new Promise((async (bb, Wy) => {
                  Vb(yb, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Uy => {
                    if (void 0 !== Uy.recaptchaKey) {
                      const Wy = new Gb(Uy);
                      return null == yb.tenantId ? yb._agentRecaptchaConfig = Wy : yb._tenantRecaptchaConfigs[yb.tenantId] = Wy, bb(Wy.siteKey)
                    }
                    Wy(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((yb => {
                    Wy(yb)
                  }))
                }))
              })(this.auth).then((hy => {
                if (!bb && gW(window.grecaptcha)) Wy(hy, yb, Uy);
                else {
                  if ("undefined" === typeof window) return void Uy(new Error("RecaptchaVerifier is only supported in browser"));
                  Ob("https://www.google.com/recaptcha/enterprise.js?render=" + hy).then((() => {
                    Wy(hy, yb, Uy)
                  })).catch((yb => {
                    Uy(yb)
                  }))
                }
              })).catch((yb => {
                Uy(yb)
              }))
            }))
          }
        }
        async function iW(yb, bb, Wy) {
          let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const hy = new vW(yb);
          let fy;
          try {
            fy = await hy.verify(Wy)
          } catch (cb) {
            fy = await hy.verify(Wy, !0)
          }
          const Zy = Object.assign({}, bb);
          return Uy ? Object.assign(Zy, {
            captchaResp: fy
          }) : Object.assign(Zy, {
            captchaResponse: fy
          }), Object.assign(Zy, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Zy, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Zy
        }
        class Mb {
          constructor(yb) {
            this.auth = yb, this.queue = []
          }
          pushCallback(yb, bb) {
            const Wy = bb => new Promise(((Wy, Uy) => {
              try {
                Wy(yb(bb))
              } catch (hy) {
                Uy(hy)
              }
            }));
            Wy.onAbort = bb, this.queue.push(Wy);
            const Uy = this.queue.length - 1;
            return () => {
              this.queue[Uy] = () => Promise.resolve()
            }
          }
          async runMiddleware(yb) {
            if (this.auth.currentUser === yb) return;
            const bb = [];
            try {
              for (const Wy of this.queue) await Wy(yb), Wy.onAbort && bb.push(Wy.onAbort)
            } catch (Wy) {
              bb.reverse();
              for (const yb of bb) try {
                yb()
              } catch (Uy) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === Wy || void 0 === Wy ? void 0 : Wy.message
              })
            }
          }
        }
        class Yb {
          constructor(yb, bb, Wy, Uy) {
            this.app = yb, this.heartbeatServiceProvider = bb, this.appCheckServiceProvider = Wy, this.config = Uy, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new nb(this), this.idTokenSubscription = new nb(this), this.beforeStateQueue = new Mb(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Ey, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = yb.name, this.clientVersion = Uy.sdkClientVersion
          }
          _initializeWithPersistence(yb, bb) {
            return bb && (this._popupRedirectResolver = fb(bb)), this._initializationPromise = this.queue((async () => {
              var Wy, Uy;
              if (!this._deleted && (this.persistenceManager = await ob.create(this, yb), !this._deleted)) {
                if (null === (Wy = this._popupRedirectResolver) || void 0 === Wy ? void 0 : Wy._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (hy) {}
                await this.initializeCurrentUser(bb), this.lastNotifiedUid = (null === (Uy = this.currentUser) || void 0 === Uy ? void 0 : Uy.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const yb = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || yb ? this.currentUser && yb && this.currentUser.uid === yb.uid ? (this._currentUser._assign(yb), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(yb, !0) : void 0
          }
          async initializeCurrentUser(yb) {
            var bb;
            const Wy = await this.assertedPersistence.getCurrentUser();
            let Uy = Wy,
              hy = !1;
            if (yb && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const Wy = null === (bb = this.redirectUser) || void 0 === bb ? void 0 : bb._redirectEventId,
                fy = null === Uy || void 0 === Uy ? void 0 : Uy._redirectEventId,
                Zy = await this.tryRedirectSignIn(yb);
              Wy && Wy !== fy || !(null === Zy || void 0 === Zy ? void 0 : Zy.user) || (Uy = Zy.user, hy = !0)
            }
            if (!Uy) return this.directlySetCurrentUser(null);
            if (!Uy._redirectEventId) {
              if (hy) try {
                await this.beforeStateQueue.runMiddleware(Uy)
              } catch (fy) {
                Uy = Wy, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(fy)))
              }
              return Uy ? this.reloadAndSetCurrentUserOrClear(Uy) : this.directlySetCurrentUser(null)
            }
            return Oy(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Uy._redirectEventId ? this.directlySetCurrentUser(Uy) : this.reloadAndSetCurrentUserOrClear(Uy)
          }
          async tryRedirectSignIn(yb) {
            let bb = null;
            try {
              bb = await this._popupRedirectResolver._completeRedirectFn(this, yb, !0)
            } catch (Wy) {
              await this._setRedirectUser(null)
            }
            return bb
          }
          async reloadAndSetCurrentUserOrClear(yb) {
            try {
              await dy(yb)
            } catch (bb) {
              if ("auth/network-request-failed" !== (null === bb || void 0 === bb ? void 0 : bb.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(yb)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const yb = navigator;
              return yb.languages && yb.languages[0] || yb.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(yb) {
            const bb = yb ? (0, Uy.J)(yb) : null;
            return bb && Oy(bb.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(bb && bb._clone(this))
          }
          async _updateCurrentUser(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return yb && Oy(this.tenantId === yb.tenantId, this, "tenant-id-mismatch"), bb || await this.beforeStateQueue.runMiddleware(yb), this.queue((async () => {
              await this.directlySetCurrentUser(yb), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(yb) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(fb(yb))
            }))
          }
          async initializeRecaptchaConfig() {
            const yb = await Vb(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              bb = new Gb(yb);
            if (null == this.tenantId ? this._agentRecaptchaConfig = bb : this._tenantRecaptchaConfigs[this.tenantId] = bb, bb.emailPasswordEnabled) {
              new vW(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(yb) {
            this._errorFactory = new Uy.e("auth", "Firebase", yb())
          }
          onAuthStateChanged(yb, bb, Wy) {
            return this.registerStateListener(this.authStateSubscription, yb, bb, Wy)
          }
          beforeAuthStateChanged(yb, bb) {
            return this.beforeStateQueue.pushCallback(yb, bb)
          }
          onIdTokenChanged(yb, bb, Wy) {
            return this.registerStateListener(this.idTokenSubscription, yb, bb, Wy)
          }
          toJSON() {
            var yb;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (yb = this._currentUser) || void 0 === yb ? void 0 : yb.toJSON()
            }
          }
          async _setRedirectUser(yb, bb) {
            const Wy = await this.getOrInitRedirectPersistenceManager(bb);
            return null === yb ? Wy.removeCurrentUser() : Wy.setCurrentUser(yb)
          }
          async getOrInitRedirectPersistenceManager(yb) {
            if (!this.redirectPersistenceManager) {
              const bb = yb && fb(yb) || this._popupRedirectResolver;
              Oy(bb, this, "argument-error"), this.redirectPersistenceManager = await ob.create(this, [fb(bb._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(yb) {
            var bb, Wy;
            return this._isInitialized && await this.queue((async () => {})), (null === (bb = this._currentUser) || void 0 === bb ? void 0 : bb._redirectEventId) === yb ? this._currentUser : (null === (Wy = this.redirectUser) || void 0 === Wy ? void 0 : Wy._redirectEventId) === yb ? this.redirectUser : null
          }
          async _persistUserIfCurrent(yb) {
            if (yb === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(yb)))
          }
          _notifyListenersIfCurrent(yb) {
            yb === this.currentUser && this.notifyAuthListeners()
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
            var yb, bb;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const Wy = null !== (bb = null === (yb = this.currentUser) || void 0 === yb ? void 0 : yb.uid) && void 0 !== bb ? bb : null;
            this.lastNotifiedUid !== Wy && (this.lastNotifiedUid = Wy, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(yb, bb, Wy, Uy) {
            if (this._deleted) return () => {};
            const hy = "function" === typeof bb ? bb : bb.next.bind(bb),
              fy = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Oy(fy, this, "internal-error"), fy.then((() => hy(this.currentUser))), "function" === typeof bb ? yb.addObserver(bb, Wy, Uy) : yb.addObserver(bb)
          }
          async directlySetCurrentUser(yb) {
            this.currentUser && this.currentUser !== yb && this._currentUser._stopProactiveRefresh(), yb && this.isProactiveRefreshEnabled && yb._startProactiveRefresh(), this.currentUser = yb, yb ? await this.assertedPersistence.setCurrentUser(yb) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(yb) {
            return this.operations = this.operations.then(yb, yb), this.operations
          }
          get assertedPersistence() {
            return Oy(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(yb) {
            yb && !this.frameworks.includes(yb) && (this.frameworks.push(yb), this.frameworks.sort(), this.clientVersion = Tb(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var yb;
            const bb = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (bb["X-Firebase-gmpid"] = this.app.options.appId);
            const Wy = await (null === (yb = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === yb ? void 0 : yb.getHeartbeatsHeader());
            Wy && (bb["X-Firebase-Client"] = Wy);
            const Uy = await this._getAppCheckToken();
            return Uy && (bb["X-Firebase-AppCheck"] = Uy), bb
          }
          async _getAppCheckToken() {
            var yb;
            const bb = await (null === (yb = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === yb ? void 0 : yb.getToken());
            return (null === bb || void 0 === bb ? void 0 : bb.error) && function(yb) {
              if (mb.logLevel <= Zy.e.WARN) {
                for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
                mb.warn(`Auth (${hy.h}): ${yb}`, ...Wy)
              }
            }(`Error while retrieving App Check token: ${bb.error}`), null === bb || void 0 === bb ? void 0 : bb.token
          }
        }

        function Xb(yb) {
          return (0, Uy.J)(yb)
        }
        class nb {
          constructor(yb) {
            this.auth = yb, this.observer = null, this.addObserver = (0, Uy.v)((yb => this.observer = yb))
          }
          get next() {
            return Oy(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function ub(yb, bb) {
          const Wy = (0, hy.v)(yb, "auth");
          if (Wy.isInitialized()) {
            const yb = Wy.getImmediate(),
              hy = Wy.getOptions();
            if ((0, Uy.z)(hy, null !== bb && void 0 !== bb ? bb : {})) return yb;
            Ty(yb, "already-initialized")
          }
          return Wy.initialize({
            options: bb
          })
        }

        function rW(yb, bb, Wy) {
          const Uy = Xb(yb);
          Oy(Uy._canInitEmulator, Uy, "emulator-config-failed"), Oy(/^https?:\/\//.test(bb), Uy, "invalid-emulator-scheme");
          const hy = !!(null === Wy || void 0 === Wy ? void 0 : Wy.disableWarnings),
            fy = Hb(bb),
            {
              host: Zy,
              port: cb
            } = function(yb) {
              const bb = Hb(yb),
                Wy = /(\/\/)?([^?#/]+)/.exec(yb.substr(bb.length));
              if (!Wy) return {
                host: "",
                port: null
              };
              const Uy = Wy[2].split("@").pop() || "",
                hy = /^(\[[^\]]+\])(:|$)/.exec(Uy);
              if (hy) {
                const yb = hy[1];
                return {
                  host: yb,
                  port: aW(Uy.substr(yb.length + 1))
                }
              } {
                const [yb, bb] = Uy.split(":");
                return {
                  host: yb,
                  port: aW(bb)
                }
              }
            }(bb),
            Py = null === cb ? "" : `:${cb}`;
          Uy.config.emulator = {
            url: `${fy}//${Zy}${Py}/`
          }, Uy.settings.appVerificationDisabledForTesting = !0, Uy.emulatorConfig = Object.freeze({
            host: Zy,
            port: cb,
            protocol: fy.replace(":", ""),
            options: Object.freeze({
              disableWarnings: hy
            })
          }), hy || function() {
            function yb() {
              const yb = document.createElement("p"),
                bb = yb.style;
              yb.innerText = "Running in emulator mode. Do not use with production credentials.", bb.position = "fixed", bb.width = "100%", bb.backgroundColor = "#ffffff", bb.border = ".1em solid #000000", bb.color = "#b50000", bb.bottom = "0px", bb.left = "0px", bb.margin = "0px", bb.zIndex = "10000", bb.textAlign = "center", yb.classList.add("firebase-emulator-warning"), document.body.appendChild(yb)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", yb) : yb())
          }()
        }

        function Hb(yb) {
          const bb = yb.indexOf(":");
          return bb < 0 ? "" : yb.substr(0, bb + 1)
        }

        function aW(yb) {
          if (!yb) return null;
          const bb = Number(yb);
          return isNaN(bb) ? null : bb
        }
        class Fb {
          constructor(yb, bb) {
            this.providerId = yb, this.signInMethod = bb
          }
          toJSON() {
            return Ry("not implemented")
          }
          _getIdTokenResponse(yb) {
            return Ry("not implemented")
          }
          _linkToIdToken(yb, bb) {
            return Ry("not implemented")
          }
          _getReauthenticationResolver(yb) {
            return Ry("not implemented")
          }
        }
        async function pb(yb, bb) {
          return Fy(yb, "POST", "/v1/accounts:resetPassword", ab(yb, bb))
        }
        async function Lb(yb, bb) {
          return Fy(yb, "POST", "/v1/accounts:update", bb)
        }
        async function Qb(yb, bb) {
          return Ly(yb, "POST", "/v1/accounts:signInWithPassword", ab(yb, bb))
        }
        async function jW(yb, bb) {
          return Fy(yb, "POST", "/v1/accounts:sendOobCode", ab(yb, bb))
        }
        async function Db(yb, bb) {
          return jW(yb, bb)
        }
        async function tW(yb, bb) {
          return jW(yb, bb)
        }
        class wb extends Fb {
          constructor(yb, bb, Wy) {
            let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", Wy), this._email = yb, this._password = bb, this._tenantId = Uy
          }
          static _fromEmailAndPassword(yb, bb) {
            return new wb(yb, bb, "password")
          }
          static _fromEmailAndCode(yb, bb) {
            return new wb(yb, bb, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(yb) {
            const bb = "string" === typeof yb ? JSON.parse(yb) : yb;
            if ((null === bb || void 0 === bb ? void 0 : bb.email) && (null === bb || void 0 === bb ? void 0 : bb.password)) {
              if ("password" === bb.signInMethod) return this._fromEmailAndPassword(bb.email, bb.password);
              if ("emailLink" === bb.signInMethod) return this._fromEmailAndCode(bb.email, bb.password, bb.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(yb) {
            var bb;
            switch (this.signInMethod) {
              case "password":
                const Wy = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (bb = yb._getRecaptchaConfig()) || void 0 === bb ? void 0 : bb.emailPasswordEnabled) {
                  const bb = await iW(yb, Wy, "signInWithPassword");
                  return Qb(yb, bb)
                }
                return Qb(yb, Wy).catch((async bb => {
                  if ("auth/missing-recaptcha-token" === bb.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const bb = await iW(yb, Wy, "signInWithPassword");
                    return Qb(yb, bb)
                  }
                  return Promise.reject(bb)
                }));
              case "emailLink":
                return async function(yb, bb) {
                  return Ly(yb, "POST", "/v1/accounts:signInWithEmailLink", ab(yb, bb))
                }(yb, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Ty(yb, "internal-error")
            }
          }
          async _linkToIdToken(yb, bb) {
            switch (this.signInMethod) {
              case "password":
                return Lb(yb, {
                  idToken: bb,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(yb, bb) {
                  return Ly(yb, "POST", "/v1/accounts:signInWithEmailLink", ab(yb, bb))
                }(yb, {
                  idToken: bb,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Ty(yb, "internal-error")
            }
          }
          _getReauthenticationResolver(yb) {
            return this._getIdTokenResponse(yb)
          }
        }
        async function kW(yb, bb) {
          return Ly(yb, "POST", "/v1/accounts:signInWithIdp", ab(yb, bb))
        }
        class Nb extends Fb {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(yb) {
            const bb = new Nb(yb.providerId, yb.signInMethod);
            return yb.idToken || yb.accessToken ? (yb.idToken && (bb.idToken = yb.idToken), yb.accessToken && (bb.accessToken = yb.accessToken), yb.nonce && !yb.pendingToken && (bb.nonce = yb.nonce), yb.pendingToken && (bb.pendingToken = yb.pendingToken)) : yb.oauthToken && yb.oauthTokenSecret ? (bb.accessToken = yb.oauthToken, bb.secret = yb.oauthTokenSecret) : Ty("argument-error"), bb
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
          static fromJSON(yb) {
            const bb = "string" === typeof yb ? JSON.parse(yb) : yb,
              {
                providerId: Wy,
                signInMethod: Uy
              } = bb,
              hy = fy(bb, ["providerId", "signInMethod"]);
            if (!Wy || !Uy) return null;
            const Zy = new Nb(Wy, Uy);
            return Zy.idToken = hy.idToken || void 0, Zy.accessToken = hy.accessToken || void 0, Zy.secret = hy.secret, Zy.nonce = hy.nonce, Zy.pendingToken = hy.pendingToken || null, Zy
          }
          _getIdTokenResponse(yb) {
            return kW(yb, this.buildRequest())
          }
          _linkToIdToken(yb, bb) {
            const Wy = this.buildRequest();
            return Wy.idToken = bb, kW(yb, Wy)
          }
          _getReauthenticationResolver(yb) {
            const bb = this.buildRequest();
            return bb.autoCreate = !1, kW(yb, bb)
          }
          buildRequest() {
            const yb = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) yb.pendingToken = this.pendingToken;
            else {
              const bb = {};
              this.idToken && (bb.id_token = this.idToken), this.accessToken && (bb.access_token = this.accessToken), this.secret && (bb.oauth_token_secret = this.secret), bb.providerId = this.providerId, this.nonce && !this.pendingToken && (bb.nonce = this.nonce), yb.postBody = (0, Uy.cb)(bb)
            }
            return yb
          }
        }
        const zW = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Ib extends Fb {
          constructor(yb) {
            super("phone", "phone"), this.params = yb
          }
          static _fromVerification(yb, bb) {
            return new Ib({
              verificationId: yb,
              verificationCode: bb
            })
          }
          static _fromTokenResponse(yb, bb) {
            return new Ib({
              phoneNumber: yb,
              temporaryProof: bb
            })
          }
          _getIdTokenResponse(yb) {
            return async function(yb, bb) {
              return Ly(yb, "POST", "/v1/accounts:signInWithPhoneNumber", ab(yb, bb))
            }(yb, this._makeVerificationRequest())
          }
          _linkToIdToken(yb, bb) {
            return async function(yb, bb) {
              const Wy = await Ly(yb, "POST", "/v1/accounts:signInWithPhoneNumber", ab(yb, bb));
              if (Wy.temporaryProof) throw Dy(yb, "account-exists-with-different-credential", Wy);
              return Wy
            }(yb, Object.assign({
              idToken: bb
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(yb) {
            return async function(yb, bb) {
              return Ly(yb, "POST", "/v1/accounts:signInWithPhoneNumber", ab(yb, Object.assign(Object.assign({}, bb), {
                operation: "REAUTH"
              })), zW)
            }(yb, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: yb,
              phoneNumber: bb,
              verificationId: Wy,
              verificationCode: Uy
            } = this.params;
            return yb && bb ? {
              temporaryProof: yb,
              phoneNumber: bb
            } : {
              sessionInfo: Wy,
              code: Uy
            }
          }
          toJSON() {
            const yb = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (yb.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (yb.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (yb.verificationCode = this.params.verificationCode), this.params.verificationId && (yb.verificationId = this.params.verificationId), yb
          }
          static fromJSON(yb) {
            "string" === typeof yb && (yb = JSON.parse(yb));
            const {
              verificationId: bb,
              verificationCode: Wy,
              phoneNumber: Uy,
              temporaryProof: hy
            } = yb;
            return Wy || bb || Uy || hy ? new Ib({
              verificationId: bb,
              verificationCode: Wy,
              phoneNumber: Uy,
              temporaryProof: hy
            }) : null
          }
        }
        class xW {
          constructor(yb) {
            var bb, Wy, hy, fy, Zy, cb;
            const Py = (0, Uy._)((0, Uy.B)(yb)),
              oy = null !== (bb = Py.apiKey) && void 0 !== bb ? bb : null,
              By = null !== (Wy = Py.oobCode) && void 0 !== Wy ? Wy : null,
              Ky = function(yb) {
                switch (yb) {
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
              }(null !== (hy = Py.mode) && void 0 !== hy ? hy : null);
            Oy(oy && By && Ky, "argument-error"), this.apiKey = oy, this.operation = Ky, this.code = By, this.continueUrl = null !== (fy = Py.continueUrl) && void 0 !== fy ? fy : null, this.languageCode = null !== (Zy = Py.languageCode) && void 0 !== Zy ? Zy : null, this.tenantId = null !== (cb = Py.tenantId) && void 0 !== cb ? cb : null
          }
          static parseLink(yb) {
            const bb = function(yb) {
              const bb = (0, Uy._)((0, Uy.B)(yb)).link,
                Wy = bb ? (0, Uy._)((0, Uy.B)(bb)).deep_link_id : null,
                hy = (0, Uy._)((0, Uy.B)(yb)).deep_link_id;
              return (hy ? (0, Uy._)((0, Uy.B)(hy)).link : null) || hy || Wy || bb || yb
            }(yb);
            try {
              return new xW(bb)
            } catch (Wy) {
              return null
            }
          }
        }

        function Ab(yb) {
          return xW.parseLink(yb)
        }
        class db {
          constructor() {
            this.providerId = db.PROVIDER_ID
          }
          static credential(yb, bb) {
            return wb._fromEmailAndPassword(yb, bb)
          }
          static credentialWithLink(yb, bb) {
            const Wy = xW.parseLink(bb);
            return Oy(Wy, "argument-error"), wb._fromEmailAndCode(yb, Wy.code, Wy.tenantId)
          }
        }
        db.PROVIDER_ID = "password", db.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", db.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class yU {
          constructor(yb) {
            this.providerId = yb, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(yb) {
            this.defaultLanguageCode = yb
          }
          setCustomParameters(yb) {
            return this.customParameters = yb, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class bU extends yU {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(yb) {
            return this.scopes.includes(yb) || this.scopes.push(yb), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class WW extends bU {
          static credentialFromJSON(yb) {
            const bb = "string" === typeof yb ? JSON.parse(yb) : yb;
            return Oy("providerId" in bb && "signInMethod" in bb, "argument-error"), Nb._fromParams(bb)
          }
          credential(yb) {
            return this._credential(Object.assign(Object.assign({}, yb), {
              nonce: yb.rawNonce
            }))
          }
          _credential(yb) {
            return Oy(yb.idToken || yb.accessToken, "argument-error"), Nb._fromParams(Object.assign(Object.assign({}, yb), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(yb) {
            return WW.oauthCredentialFromTaggedObject(yb)
          }
          static credentialFromError(yb) {
            return WW.oauthCredentialFromTaggedObject(yb.customData || {})
          }
          static oauthCredentialFromTaggedObject(yb) {
            let {
              _tokenResponse: bb
            } = yb;
            if (!bb) return null;
            const {
              oauthIdToken: Wy,
              oauthAccessToken: Uy,
              oauthTokenSecret: hy,
              pendingToken: fy,
              nonce: Zy,
              providerId: cb
            } = bb;
            if (!Uy && !hy && !Wy && !fy) return null;
            if (!cb) return null;
            try {
              return new WW(cb)._credential({
                idToken: Wy,
                accessToken: Uy,
                nonce: Zy,
                pendingToken: fy
              })
            } catch (Py) {
              return null
            }
          }
        }
        class UW extends bU {
          constructor() {
            super("facebook.com")
          }
          static credential(yb) {
            return Nb._fromParams({
              providerId: UW.PROVIDER_ID,
              signInMethod: UW.FACEBOOK_SIGN_IN_METHOD,
              accessToken: yb
            })
          }
          static credentialFromResult(yb) {
            return UW.credentialFromTaggedObject(yb)
          }
          static credentialFromError(yb) {
            return UW.credentialFromTaggedObject(yb.customData || {})
          }
          static credentialFromTaggedObject(yb) {
            let {
              _tokenResponse: bb
            } = yb;
            if (!bb || !("oauthAccessToken" in bb)) return null;
            if (!bb.oauthAccessToken) return null;
            try {
              return UW.credential(bb.oauthAccessToken)
            } catch (Wy) {
              return null
            }
          }
        }
        UW.FACEBOOK_SIGN_IN_METHOD = "facebook.com", UW.PROVIDER_ID = "facebook.com";
        class hW extends bU {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(yb, bb) {
            return Nb._fromParams({
              providerId: hW.PROVIDER_ID,
              signInMethod: hW.GOOGLE_SIGN_IN_METHOD,
              idToken: yb,
              accessToken: bb
            })
          }
          static credentialFromResult(yb) {
            return hW.credentialFromTaggedObject(yb)
          }
          static credentialFromError(yb) {
            return hW.credentialFromTaggedObject(yb.customData || {})
          }
          static credentialFromTaggedObject(yb) {
            let {
              _tokenResponse: bb
            } = yb;
            if (!bb) return null;
            const {
              oauthIdToken: Wy,
              oauthAccessToken: Uy
            } = bb;
            if (!Wy && !Uy) return null;
            try {
              return hW.credential(Wy, Uy)
            } catch (hy) {
              return null
            }
          }
        }
        hW.GOOGLE_SIGN_IN_METHOD = "google.com", hW.PROVIDER_ID = "google.com";
        class fW extends bU {
          constructor() {
            super("github.com")
          }
          static credential(yb) {
            return Nb._fromParams({
              providerId: fW.PROVIDER_ID,
              signInMethod: fW.GITHUB_SIGN_IN_METHOD,
              accessToken: yb
            })
          }
          static credentialFromResult(yb) {
            return fW.credentialFromTaggedObject(yb)
          }
          static credentialFromError(yb) {
            return fW.credentialFromTaggedObject(yb.customData || {})
          }
          static credentialFromTaggedObject(yb) {
            let {
              _tokenResponse: bb
            } = yb;
            if (!bb || !("oauthAccessToken" in bb)) return null;
            if (!bb.oauthAccessToken) return null;
            try {
              return fW.credential(bb.oauthAccessToken)
            } catch (Wy) {
              return null
            }
          }
        }
        fW.GITHUB_SIGN_IN_METHOD = "github.com", fW.PROVIDER_ID = "github.com";
        class ZW extends Fb {
          constructor(yb, bb) {
            super(yb, yb), this.pendingToken = bb
          }
          _getIdTokenResponse(yb) {
            return kW(yb, this.buildRequest())
          }
          _linkToIdToken(yb, bb) {
            const Wy = this.buildRequest();
            return Wy.idToken = bb, kW(yb, Wy)
          }
          _getReauthenticationResolver(yb) {
            const bb = this.buildRequest();
            return bb.autoCreate = !1, kW(yb, bb)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(yb) {
            const bb = "string" === typeof yb ? JSON.parse(yb) : yb,
              {
                providerId: Wy,
                signInMethod: Uy,
                pendingToken: hy
              } = bb;
            return Wy && Uy && hy && Wy === Uy ? new ZW(Wy, hy) : null
          }
          static _create(yb, bb) {
            return new ZW(yb, bb)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class cU extends yU {
          constructor(yb) {
            Oy(yb.startsWith("saml."), "argument-error"), super(yb)
          }
          static credentialFromResult(yb) {
            return cU.samlCredentialFromTaggedObject(yb)
          }
          static credentialFromError(yb) {
            return cU.samlCredentialFromTaggedObject(yb.customData || {})
          }
          static credentialFromJSON(yb) {
            const bb = ZW.fromJSON(yb);
            return Oy(bb, "argument-error"), bb
          }
          static samlCredentialFromTaggedObject(yb) {
            let {
              _tokenResponse: bb
            } = yb;
            if (!bb) return null;
            const {
              pendingToken: Wy,
              providerId: Uy
            } = bb;
            if (!Wy || !Uy) return null;
            try {
              return ZW._create(Uy, Wy)
            } catch (hy) {
              return null
            }
          }
        }
        class PW extends bU {
          constructor() {
            super("twitter.com")
          }
          static credential(yb, bb) {
            return Nb._fromParams({
              providerId: PW.PROVIDER_ID,
              signInMethod: PW.TWITTER_SIGN_IN_METHOD,
              oauthToken: yb,
              oauthTokenSecret: bb
            })
          }
          static credentialFromResult(yb) {
            return PW.credentialFromTaggedObject(yb)
          }
          static credentialFromError(yb) {
            return PW.credentialFromTaggedObject(yb.customData || {})
          }
          static credentialFromTaggedObject(yb) {
            let {
              _tokenResponse: bb
            } = yb;
            if (!bb) return null;
            const {
              oauthAccessToken: Wy,
              oauthTokenSecret: Uy
            } = bb;
            if (!Wy || !Uy) return null;
            try {
              return PW.credential(Wy, Uy)
            } catch (hy) {
              return null
            }
          }
        }
        async function oW(yb, bb) {
          return Ly(yb, "POST", "/v1/accounts:signUp", ab(yb, bb))
        }
        PW.TWITTER_SIGN_IN_METHOD = "twitter.com", PW.PROVIDER_ID = "twitter.com";
        class BW {
          constructor(yb) {
            this.user = yb.user, this.providerId = yb.providerId, this._tokenResponse = yb._tokenResponse, this.operationType = yb.operationType
          }
          static async _fromIdTokenResponse(yb, bb, Wy) {
            let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const hy = await Ub._fromIdTokenResponse(yb, Wy, Uy),
              fy = KW(Wy);
            return new BW({
              user: hy,
              providerId: fy,
              _tokenResponse: Wy,
              operationType: bb
            })
          }
          static async _forOperation(yb, bb, Wy) {
            await yb._updateTokensIfNecessary(Wy, !0);
            const Uy = KW(Wy);
            return new BW({
              user: yb,
              providerId: Uy,
              _tokenResponse: Wy,
              operationType: bb
            })
          }
        }

        function KW(yb) {
          return yb.providerId ? yb.providerId : "phoneNumber" in yb ? "phone" : null
        }
        async function eW(yb) {
          var bb;
          const Wy = Xb(yb);
          if (await Wy._initializationPromise, null === (bb = Wy.currentUser) || void 0 === bb ? void 0 : bb.isAnonymous) return new BW({
            user: Wy.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Uy = await oW(Wy, {
              returnSecureToken: !0
            }),
            hy = await BW._fromIdTokenResponse(Wy, "signIn", Uy, !0);
          return await Wy._updateCurrentUser(hy.user), hy
        }
        class qU extends Uy.i {
          constructor(yb, bb, Wy, Uy) {
            var hy;
            super(bb.code, bb.message), this.operationType = Wy, this.user = Uy, Object.setPrototypeOf(this, qU.prototype), this.customData = {
              appName: yb.name,
              tenantId: null !== (hy = yb.tenantId) && void 0 !== hy ? hy : void 0,
              _serverResponse: bb.customData._serverResponse,
              operationType: Wy
            }
          }
          static _fromErrorAndOperation(yb, bb, Wy, Uy) {
            return new qU(yb, bb, Wy, Uy)
          }
        }

        function sW(yb, bb, Wy, Uy) {
          return ("reauthenticate" === bb ? Wy._getReauthenticationResolver(yb) : Wy._getIdTokenResponse(yb)).catch((Wy => {
            if ("auth/multi-factor-auth-required" === Wy.code) throw qU._fromErrorAndOperation(yb, Wy, bb, Uy);
            throw Wy
          }))
        }

        function SW(yb) {
          return new Set(yb.map((yb => {
            let {
              providerId: bb
            } = yb;
            return bb
          })).filter((yb => !!yb)))
        }
        async function EW(yb, bb) {
          const Wy = (0, Uy.J)(yb);
          await mU(!0, Wy, bb);
          const {
            providerUserInfo: hy
          } = await async function(yb, bb) {
            return Fy(yb, "POST", "/v1/accounts:update", bb)
          }(Wy.auth, {
            idToken: await Wy.getIdToken(),
            deleteProvider: [bb]
          }), fy = SW(hy || []);
          return Wy.providerData = Wy.providerData.filter((yb => fy.has(yb.providerId))), fy.has("phone") || (Wy.phoneNumber = null), await Wy.auth._persistUserIfCurrent(Wy), Wy
        }
        async function lW(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Uy = await Iy(yb, bb._linkToIdToken(yb.auth, await yb.getIdToken()), Wy);
          return BW._forOperation(yb, "link", Uy)
        }
        async function mU(yb, bb, Wy) {
          await dy(bb);
          const Uy = !1 === yb ? "provider-already-linked" : "no-such-provider";
          Oy(SW(bb.providerData).has(Wy) === yb, bb.auth, Uy)
        }
        async function CW(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Uy
          } = yb, hy = "reauthenticate";
          try {
            const fy = await Iy(yb, sW(Uy, hy, bb, yb), Wy);
            Oy(fy.idToken, Uy, "internal-error");
            const Zy = zb(fy.idToken);
            Oy(Zy, Uy, "internal-error");
            const {
              sub: cb
            } = Zy;
            return Oy(yb.uid === cb, Uy, "user-mismatch"), BW._forOperation(yb, hy, fy)
          } catch (fy) {
            throw "auth/user-not-found" === (null === fy || void 0 === fy ? void 0 : fy.code) && Ty(Uy, "user-mismatch"), fy
          }
        }
        async function TW(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Uy = "signIn",
            hy = await sW(yb, Uy, bb),
            fy = await BW._fromIdTokenResponse(yb, Uy, hy);
          return Wy || await yb._updateCurrentUser(fy.user), fy
        }
        async function VW(yb, bb) {
          return TW(Xb(yb), bb)
        }
        async function JW(yb, bb) {
          const Wy = (0, Uy.J)(yb);
          return await mU(!1, Wy, bb.providerId), lW(Wy, bb)
        }
        async function gU(yb, bb) {
          return CW((0, Uy.J)(yb), bb)
        }
        async function GW(yb, bb) {
          const Wy = Xb(yb),
            Uy = await async function(yb, bb) {
              return Ly(yb, "POST", "/v1/accounts:signInWithCustomToken", ab(yb, bb))
            }(Wy, {
              token: bb,
              returnSecureToken: !0
            }), hy = await BW._fromIdTokenResponse(Wy, "signIn", Uy);
          return await Wy._updateCurrentUser(hy.user), hy
        }
        class OW {
          constructor(yb, bb) {
            this.factorId = yb, this.uid = bb.mfaEnrollmentId, this.enrollmentTime = new Date(bb.enrolledAt).toUTCString(), this.displayName = bb.displayName
          }
          static _fromServerResponse(yb, bb) {
            return "phoneInfo" in bb ? RW._fromServerResponse(yb, bb) : "totpInfo" in bb ? vU._fromServerResponse(yb, bb) : Ty(yb, "internal-error")
          }
        }
        class RW extends OW {
          constructor(yb) {
            super("phone", yb), this.phoneNumber = yb.phoneInfo
          }
          static _fromServerResponse(yb, bb) {
            return new RW(bb)
          }
        }
        class vU extends OW {
          constructor(yb) {
            super("totp", yb)
          }
          static _fromServerResponse(yb, bb) {
            return new vU(bb)
          }
        }

        function iU(yb, bb, Wy) {
          var Uy;
          Oy((null === (Uy = Wy.url) || void 0 === Uy ? void 0 : Uy.length) > 0, yb, "invalid-continue-uri"), Oy("undefined" === typeof Wy.dynamicLinkDomain || Wy.dynamicLinkDomain.length > 0, yb, "invalid-dynamic-link-domain"), bb.continueUrl = Wy.url, bb.dynamicLinkDomain = Wy.dynamicLinkDomain, bb.canHandleCodeInApp = Wy.handleCodeInApp, Wy.iOS && (Oy(Wy.iOS.bundleId.length > 0, yb, "missing-ios-bundle-id"), bb.iOSBundleId = Wy.iOS.bundleId), Wy.android && (Oy(Wy.android.packageName.length > 0, yb, "missing-android-pkg-name"), bb.androidInstallApp = Wy.android.installApp, bb.androidMinimumVersionCode = Wy.android.minimumVersion, bb.androidPackageName = Wy.android.packageName)
        }
        async function MW(yb, bb, Wy) {
          var Uy;
          const hy = Xb(yb),
            fy = {
              requestType: "PASSWORD_RESET",
              email: bb,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Uy = hy._getRecaptchaConfig()) || void 0 === Uy ? void 0 : Uy.emailPasswordEnabled) {
            const yb = await iW(hy, fy, "getOobCode", !0);
            Wy && iU(hy, yb, Wy), await Db(hy, yb)
          } else Wy && iU(hy, fy, Wy), await Db(hy, fy).catch((async yb => {
            if ("auth/missing-recaptcha-token" !== yb.code) return Promise.reject(yb);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const yb = await iW(hy, fy, "getOobCode", !0);
              Wy && iU(hy, yb, Wy), await Db(hy, yb)
            }
          }))
        }
        async function YW(yb, bb, Wy) {
          await pb((0, Uy.J)(yb), {
            oobCode: bb,
            newPassword: Wy
          })
        }
        async function XW(yb, bb) {
          await async function(yb, bb) {
            return Fy(yb, "POST", "/v1/accounts:update", ab(yb, bb))
          }((0, Uy.J)(yb), {
            oobCode: bb
          })
        }
        async function nW(yb, bb) {
          const Wy = (0, Uy.J)(yb),
            hy = await pb(Wy, {
              oobCode: bb
            }),
            fy = hy.requestType;
          switch (Oy(fy, Wy, "internal-error"), fy) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Oy(hy.newEmail, Wy, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Oy(hy.mfaInfo, Wy, "internal-error");
            default:
              Oy(hy.email, Wy, "internal-error")
          }
          let Zy = null;
          return hy.mfaInfo && (Zy = OW._fromServerResponse(Xb(Wy), hy.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === hy.requestType ? hy.newEmail : hy.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === hy.requestType ? hy.email : hy.newEmail) || null,
              multiFactorInfo: Zy
            },
            operation: fy
          }
        }
        async function uW(yb, bb) {
          const {
            data: Wy
          } = await nW((0, Uy.J)(yb), bb);
          return Wy.email
        }
        async function rU(yb, bb, Wy) {
          var Uy;
          const hy = Xb(yb),
            fy = {
              returnSecureToken: !0,
              email: bb,
              password: Wy,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Zy;
          if (null === (Uy = hy._getRecaptchaConfig()) || void 0 === Uy ? void 0 : Uy.emailPasswordEnabled) {
            const yb = await iW(hy, fy, "signUpPassword");
            Zy = oW(hy, yb)
          } else Zy = oW(hy, fy).catch((async yb => {
            if ("auth/missing-recaptcha-token" === yb.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const yb = await iW(hy, fy, "signUpPassword");
              return oW(hy, yb)
            }
            return Promise.reject(yb)
          }));
          const cb = await Zy.catch((yb => Promise.reject(yb))),
            Py = await BW._fromIdTokenResponse(hy, "signIn", cb);
          return await hy._updateCurrentUser(Py.user), Py
        }

        function HW(yb, bb, Wy) {
          return VW((0, Uy.J)(yb), db.credential(bb, Wy))
        }
        async function aU(yb, bb, Wy) {
          var Uy;
          const hy = Xb(yb),
            fy = {
              requestType: "EMAIL_SIGNIN",
              email: bb,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Zy(yb, bb) {
            Oy(bb.handleCodeInApp, hy, "argument-error"), bb && iU(hy, yb, bb)
          }
          if (null === (Uy = hy._getRecaptchaConfig()) || void 0 === Uy ? void 0 : Uy.emailPasswordEnabled) {
            const yb = await iW(hy, fy, "getOobCode", !0);
            Zy(yb, Wy), await tW(hy, yb)
          } else Zy(fy, Wy), await tW(hy, fy).catch((async yb => {
            if ("auth/missing-recaptcha-token" !== yb.code) return Promise.reject(yb);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const yb = await iW(hy, fy, "getOobCode", !0);
              Zy(yb, Wy), await tW(hy, yb)
            }
          }))
        }

        function FW(yb, bb) {
          const Wy = xW.parseLink(bb);
          return "EMAIL_SIGNIN" === (null === Wy || void 0 === Wy ? void 0 : Wy.operation)
        }
        async function pW(yb, bb, Wy) {
          const hy = (0, Uy.J)(yb),
            fy = db.credentialWithLink(bb, Wy || ib());
          return Oy(fy._tenantId === (hy.tenantId || null), hy, "tenant-id-mismatch"), VW(hy, fy)
        }
        async function LW(yb, bb) {
          const Wy = {
              identifier: bb,
              continueUri: My() ? ib() : "http://localhost"
            },
            {
              signinMethods: hy
            } = await async function(yb, bb) {
              return Fy(yb, "POST", "/v1/accounts:createAuthUri", ab(yb, bb))
            }((0, Uy.J)(yb), Wy);
          return hy || []
        }
        async function QW(yb, bb) {
          const Wy = (0, Uy.J)(yb),
            hy = {
              requestType: "VERIFY_EMAIL",
              idToken: await yb.getIdToken()
            };
          bb && iU(Wy.auth, hy, bb);
          const {
            email: fy
          } = await async function(yb, bb) {
            return jW(yb, bb)
          }(Wy.auth, hy);
          fy !== yb.email && await yb.reload()
        }
        async function jU(yb, bb, Wy) {
          const hy = (0, Uy.J)(yb),
            fy = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await yb.getIdToken(),
              newEmail: bb
            };
          Wy && iU(hy.auth, fy, Wy);
          const {
            email: Zy
          } = await async function(yb, bb) {
            return jW(yb, bb)
          }(hy.auth, fy);
          Zy !== yb.email && await yb.reload()
        }
        async function DW(yb, bb) {
          let {
            displayName: Wy,
            photoURL: hy
          } = bb;
          if (void 0 === Wy && void 0 === hy) return;
          const fy = (0, Uy.J)(yb),
            Zy = {
              idToken: await fy.getIdToken(),
              displayName: Wy,
              photoUrl: hy,
              returnSecureToken: !0
            },
            cb = await Iy(fy, async function(yb, bb) {
              return Fy(yb, "POST", "/v1/accounts:update", bb)
            }(fy.auth, Zy));
          fy.displayName = cb.displayName || null, fy.photoURL = cb.photoUrl || null;
          const Py = fy.providerData.find((yb => {
            let {
              providerId: bb
            } = yb;
            return "password" === bb
          }));
          Py && (Py.displayName = fy.displayName, Py.photoURL = fy.photoURL), await fy._updateTokensIfNecessary(cb)
        }

        function tU(yb, bb) {
          return kU((0, Uy.J)(yb), bb, null)
        }

        function wW(yb, bb) {
          return kU((0, Uy.J)(yb), null, bb)
        }
        async function kU(yb, bb, Wy) {
          const {
            auth: Uy
          } = yb, hy = {
            idToken: await yb.getIdToken(),
            returnSecureToken: !0
          };
          bb && (hy.email = bb), Wy && (hy.password = Wy);
          const fy = await Iy(yb, Lb(Uy, hy));
          await yb._updateTokensIfNecessary(fy, !0)
        }
        class NW {
          constructor(yb, bb) {
            let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = yb, this.providerId = bb, this.profile = Wy
          }
        }
        class zU extends NW {
          constructor(yb, bb, Wy, Uy) {
            super(yb, bb, Wy), this.username = Uy
          }
        }
        class IW extends NW {
          constructor(yb, bb) {
            super(yb, "facebook.com", bb)
          }
        }
        class xU extends zU {
          constructor(yb, bb) {
            super(yb, "github.com", bb, "string" === typeof(null === bb || void 0 === bb ? void 0 : bb.login) ? null === bb || void 0 === bb ? void 0 : bb.login : null)
          }
        }
        class AW extends NW {
          constructor(yb, bb) {
            super(yb, "google.com", bb)
          }
        }
        class dW extends zU {
          constructor(yb, bb, Wy) {
            super(yb, "twitter.com", bb, Wy)
          }
        }

        function yh(yb) {
          const {
            user: bb,
            _tokenResponse: Wy
          } = yb;
          return bb.isAnonymous && !Wy ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(yb) {
            var bb, Wy;
            if (!yb) return null;
            const {
              providerId: Uy
            } = yb, hy = yb.rawUserInfo ? JSON.parse(yb.rawUserInfo) : {}, fy = yb.isNewUser || "identitytoolkit#SignupNewUserResponse" === yb.kind;
            if (!Uy && (null === yb || void 0 === yb ? void 0 : yb.idToken)) {
              const Uy = null === (Wy = null === (bb = zb(yb.idToken)) || void 0 === bb ? void 0 : bb.firebase) || void 0 === Wy ? void 0 : Wy.sign_in_provider;
              if (Uy) return new NW(fy, "anonymous" !== Uy && "custom" !== Uy ? Uy : null)
            }
            if (!Uy) return null;
            switch (Uy) {
              case "facebook.com":
                return new IW(fy, hy);
              case "github.com":
                return new xU(fy, hy);
              case "google.com":
                return new AW(fy, hy);
              case "twitter.com":
                return new dW(fy, hy, yb.screenName || null);
              case "custom":
              case "anonymous":
                return new NW(fy, null);
              default:
                return new NW(fy, Uy, hy)
            }
          }(Wy)
        }

        function bh(yb, bb) {
          return (0, Uy.J)(yb).setPersistence(bb)
        }

        function WU(yb) {
          return Xb(yb).initializeRecaptchaConfig()
        }

        function UU(yb, bb, Wy, hy) {
          return (0, Uy.J)(yb).onIdTokenChanged(bb, Wy, hy)
        }

        function hU(yb, bb, Wy) {
          return (0, Uy.J)(yb).beforeAuthStateChanged(bb, Wy)
        }

        function fU(yb, bb, Wy, hy) {
          return (0, Uy.J)(yb).onAuthStateChanged(bb, Wy, hy)
        }

        function ZU(yb) {
          (0, Uy.J)(yb).useDeviceLanguage()
        }

        function ch(yb, bb) {
          return (0, Uy.J)(yb).updateCurrentUser(bb)
        }

        function PU(yb) {
          return (0, Uy.J)(yb).signOut()
        }
        async function oU(yb) {
          return (0, Uy.J)(yb).delete()
        }
        class BU {
          constructor(yb, bb, Wy) {
            this.type = yb, this.credential = bb, this.auth = Wy
          }
          static _fromIdtoken(yb, bb) {
            return new BU("enroll", yb, bb)
          }
          static _fromMfaPendingCredential(yb) {
            return new BU("signin", yb)
          }
          toJSON() {
            const yb = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [yb]: this.credential
              }
            }
          }
          static fromJSON(yb) {
            var bb, Wy;
            if (null === yb || void 0 === yb ? void 0 : yb.multiFactorSession) {
              if (null === (bb = yb.multiFactorSession) || void 0 === bb ? void 0 : bb.pendingCredential) return BU._fromMfaPendingCredential(yb.multiFactorSession.pendingCredential);
              if (null === (Wy = yb.multiFactorSession) || void 0 === Wy ? void 0 : Wy.idToken) return BU._fromIdtoken(yb.multiFactorSession.idToken)
            }
            return null
          }
        }
        class KU {
          constructor(yb, bb, Wy) {
            this.session = yb, this.hints = bb, this.signInResolver = Wy
          }
          static _fromError(yb, bb) {
            const Wy = Xb(yb),
              Uy = bb.customData._serverResponse,
              hy = (Uy.mfaInfo || []).map((yb => OW._fromServerResponse(Wy, yb)));
            Oy(Uy.mfaPendingCredential, Wy, "internal-error");
            const fy = BU._fromMfaPendingCredential(Uy.mfaPendingCredential);
            return new KU(fy, hy, (async yb => {
              const hy = await yb._process(Wy, fy);
              delete Uy.mfaInfo, delete Uy.mfaPendingCredential;
              const Zy = Object.assign(Object.assign({}, Uy), {
                idToken: hy.idToken,
                refreshToken: hy.refreshToken
              });
              switch (bb.operationType) {
                case "signIn":
                  const yb = await BW._fromIdTokenResponse(Wy, bb.operationType, Zy);
                  return await Wy._updateCurrentUser(yb.user), yb;
                case "reauthenticate":
                  return Oy(bb.user, Wy, "internal-error"), BW._forOperation(bb.user, bb.operationType, Zy);
                default:
                  Ty(Wy, "internal-error")
              }
            }))
          }
          async resolveSignIn(yb) {
            const bb = yb;
            return this.signInResolver(bb)
          }
        }

        function eU(yb, bb) {
          var Wy;
          const hy = (0, Uy.J)(yb),
            fy = bb;
          return Oy(bb.customData.operationType, hy, "argument-error"), Oy(null === (Wy = fy.customData._serverResponse) || void 0 === Wy ? void 0 : Wy.mfaPendingCredential, hy, "argument-error"), KU._fromError(hy, fy)
        }
        class qh {
          constructor(yb) {
            this.user = yb, this.enrolledFactors = [], yb._onReload((bb => {
              bb.mfaInfo && (this.enrolledFactors = bb.mfaInfo.map((bb => OW._fromServerResponse(yb.auth, bb))))
            }))
          }
          static _fromUser(yb) {
            return new qh(yb)
          }
          async getSession() {
            return BU._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(yb, bb) {
            const Wy = yb,
              Uy = await this.getSession(),
              hy = await Iy(this.user, Wy._process(this.user.auth, Uy, bb));
            return await this.user._updateTokensIfNecessary(hy), this.user.reload()
          }
          async unenroll(yb) {
            const bb = "string" === typeof yb ? yb : yb.uid,
              Wy = await this.user.getIdToken();
            try {
              const yb = await Iy(this.user, (Uy = this.user.auth, hy = {
                idToken: Wy,
                mfaEnrollmentId: bb
              }, Fy(Uy, "POST", "/v2/accounts/mfaEnrollment:withdraw", ab(Uy, hy))));
              this.enrolledFactors = this.enrolledFactors.filter((yb => {
                let {
                  uid: Wy
                } = yb;
                return Wy !== bb
              })), await this.user._updateTokensIfNecessary(yb), await this.user.reload()
            } catch (fy) {
              throw fy
            }
            var Uy, hy
          }
        }
        const sU = new WeakMap;

        function SU(yb) {
          const bb = (0, Uy.J)(yb);
          return sU.has(bb) || sU.set(bb, qh._fromUser(bb)), sU.get(bb)
        }
        const EU = "__sak";
        class lU {
          constructor(yb, bb) {
            this.storageRetriever = yb, this.type = bb
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(EU, "1"), this.storage.removeItem(EU), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (yb) {
              return Promise.resolve(!1)
            }
          }
          _set(yb, bb) {
            return this.storage.setItem(yb, JSON.stringify(bb)), Promise.resolve()
          }
          _get(yb) {
            const bb = this.storage.getItem(yb);
            return Promise.resolve(bb ? JSON.parse(bb) : null)
          }
          _remove(yb) {
            return this.storage.removeItem(yb), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class mh extends lU {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (yb, bb) => this.onStorageEvent(yb, bb), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const yb = (0, Uy.K)();
              return eb(yb) || mW(yb)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (yb) {
                return !1
              }
            }(), this.fallbackToPolling = Cb(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(yb) {
            for (const bb of Object.keys(this.listeners)) {
              const Wy = this.storage.getItem(bb),
                Uy = this.localCache[bb];
              Wy !== Uy && yb(bb, Uy, Wy)
            }
          }
          onStorageEvent(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!yb.key) return void this.forAllChangedKeys(((yb, bb, Wy) => {
              this.notifyListeners(yb, Wy)
            }));
            const Wy = yb.key;
            if (bb ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Uy = this.storage.getItem(Wy);
              if (yb.newValue !== Uy) null !== yb.newValue ? this.storage.setItem(Wy, yb.newValue) : this.storage.removeItem(Wy);
              else if (this.localCache[Wy] === yb.newValue && !bb) return
            }
            const hy = () => {
                const yb = this.storage.getItem(Wy);
                (bb || this.localCache[Wy] !== yb) && this.notifyListeners(Wy, yb)
              },
              fy = this.storage.getItem(Wy);
            (0, Uy.Q)() && 10 === document.documentMode && fy !== yb.newValue && yb.newValue !== yb.oldValue ? setTimeout(hy, 10) : hy()
          }
          notifyListeners(yb, bb) {
            this.localCache[yb] = bb;
            const Wy = this.listeners[yb];
            if (Wy)
              for (const Uy of Array.from(Wy)) Uy(bb ? JSON.parse(bb) : bb)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((yb, bb, Wy) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: yb,
                  oldValue: bb,
                  newValue: Wy
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
          _addListener(yb, bb) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[yb] || (this.listeners[yb] = new Set, this.localCache[yb] = this.storage.getItem(yb)), this.listeners[yb].add(bb)
          }
          _removeListener(yb, bb) {
            this.listeners[yb] && (this.listeners[yb].delete(bb), 0 === this.listeners[yb].size && delete this.listeners[yb]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(yb, bb) {
            await super._set(yb, bb), this.localCache[yb] = JSON.stringify(bb)
          }
          async _get(yb) {
            const bb = await super._get(yb);
            return this.localCache[yb] = JSON.stringify(bb), bb
          }
          async _remove(yb) {
            await super._remove(yb), delete this.localCache[yb]
          }
        }
        mh.type = "LOCAL";
        const CU = mh;
        class TU extends lU {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(yb, bb) {}
          _removeListener(yb, bb) {}
        }
        TU.type = "SESSION";
        const VU = TU;
        class JU {
          constructor(yb) {
            this.eventTarget = yb, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(yb) {
            const bb = this.receivers.find((bb => bb.isListeningto(yb)));
            if (bb) return bb;
            const Wy = new JU(yb);
            return this.receivers.push(Wy), Wy
          }
          isListeningto(yb) {
            return this.eventTarget === yb
          }
          async handleEvent(yb) {
            const bb = yb,
              {
                eventId: Wy,
                eventType: Uy,
                data: hy
              } = bb.data,
              fy = this.handlersMap[Uy];
            if (!(null === fy || void 0 === fy ? void 0 : fy.size)) return;
            bb.ports[0].postMessage({
              status: "ack",
              eventId: Wy,
              eventType: Uy
            });
            const Zy = Array.from(fy).map((async yb => yb(bb.origin, hy))),
              cb = await
            function(yb) {
              return Promise.all(yb.map((async yb => {
                try {
                  return {
                    fulfilled: !0,
                    value: await yb
                  }
                } catch (bb) {
                  return {
                    fulfilled: !1,
                    reason: bb
                  }
                }
              })))
            }(Zy);
            bb.ports[0].postMessage({
              status: "done",
              eventId: Wy,
              eventType: Uy,
              response: cb
            })
          }
          _subscribe(yb, bb) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[yb] || (this.handlersMap[yb] = new Set), this.handlersMap[yb].add(bb)
          }
          _unsubscribe(yb, bb) {
            this.handlersMap[yb] && bb && this.handlersMap[yb].delete(bb), bb && 0 !== this.handlersMap[yb].size || delete this.handlersMap[yb], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function gh() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            Wy = "";
          for (let Uy = 0; Uy < bb; Uy++) Wy += Math.floor(10 * Math.random());
          return yb + Wy
        }
        JU.receivers = [];
        class GU {
          constructor(yb) {
            this.target = yb, this.handlers = new Set
          }
          removeMessageHandler(yb) {
            yb.messageChannel && (yb.messageChannel.port1.removeEventListener("message", yb.Gl), yb.messageChannel.port1.close()), this.handlers.delete(yb)
          }
          async _send(yb, bb) {
            let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Uy = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Uy) throw new Error("connection_unavailable");
            let hy, fy;
            return new Promise(((Zy, cb) => {
              const Py = gh("", 20);
              Uy.port1.start();
              const oy = setTimeout((() => {
                cb(new Error("unsupported_event"))
              }), Wy);
              fy = {
                messageChannel: Uy,
                Gl(yb) {
                  const bb = yb;
                  if (bb.data.eventId === Py) switch (bb.data.status) {
                    case "ack":
                      clearTimeout(oy), hy = setTimeout((() => {
                        cb(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(hy), Zy(bb.data.response);
                      break;
                    default:
                      clearTimeout(oy), clearTimeout(hy), cb(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(fy), Uy.port1.addEventListener("message", fy.Gl), this.target.postMessage({
                eventType: yb,
                eventId: Py,
                data: bb
              }, [Uy.port2])
            })).finally((() => {
              fy && this.removeMessageHandler(fy)
            }))
          }
        }

        function OU() {
          return window
        }

        function RU() {
          return "undefined" !== typeof OU().WorkerGlobalScope && "function" === typeof OU().importScripts
        }
        const vh = "firebaseLocalStorageDb",
          ih = "firebaseLocalStorage",
          MU = "fbase_key";
        class YU {
          constructor(yb) {
            this.request = yb
          }
          toPromise() {
            return new Promise(((yb, bb) => {
              this.request.addEventListener("success", (() => {
                yb(this.request.result)
              })), this.request.addEventListener("error", (() => {
                bb(this.request.error)
              }))
            }))
          }
        }

        function XU(yb, bb) {
          return yb.transaction([ih], bb ? "readwrite" : "readonly").objectStore(ih)
        }

        function nU() {
          const yb = indexedDB.open(vh, 1);
          return new Promise(((bb, Wy) => {
            yb.addEventListener("error", (() => {
              Wy(yb.error)
            })), yb.addEventListener("upgradeneeded", (() => {
              const bb = yb.result;
              try {
                bb.createObjectStore(ih, {
                  keyPath: MU
                })
              } catch (Uy) {
                Wy(Uy)
              }
            })), yb.addEventListener("success", (async () => {
              const Wy = yb.result;
              Wy.objectStoreNames.contains(ih) ? bb(Wy) : (Wy.close(), await
                function() {
                  const yb = indexedDB.deleteDatabase(vh);
                  return new YU(yb).toPromise()
                }(), bb(await nU()))
            }))
          }))
        }
        async function uU(yb, bb, Wy) {
          const Uy = XU(yb, !0).put({
            [MU]: bb,
            value: Wy
          });
          return new YU(Uy).toPromise()
        }

        function rh(yb, bb) {
          const Wy = XU(yb, !0).delete(bb);
          return new YU(Wy).toPromise()
        }
        class HU {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await nU()), this.db
          }
          async _withRetries(yb) {
            let bb = 0;
            for (;;) try {
              const bb = await this._openDb();
              return await yb(bb)
            } catch (Wy) {
              if (bb++ > 3) throw Wy;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return RU() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = JU._getInstance(RU() ? self : null), this.receiver._subscribe("keyChanged", (async (yb, bb) => ({
              keyProcessed: (await this._poll()).includes(bb.key)
            }))), this.receiver._subscribe("ping", (async (yb, bb) => ["keyChanged"]))
          }
          async initializeSender() {
            var yb, bb;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (yb) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new GU(this.activeServiceWorker);
            const Wy = await this.sender._send("ping", {}, 800);
            Wy && (null === (yb = Wy[0]) || void 0 === yb ? void 0 : yb.fulfilled) && (null === (bb = Wy[0]) || void 0 === bb ? void 0 : bb.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(yb) {
            if (this.sender && this.activeServiceWorker && function() {
                var yb;
                return (null === (yb = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === yb ? void 0 : yb.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: yb
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (bb) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const yb = await nU();
              return await uU(yb, EU, "1"), await rh(yb, EU), !0
            } catch (yb) {}
            return !1
          }
          async _withPendingWrite(yb) {
            this.pendingWrites++;
            try {
              await yb()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(yb, bb) {
            return this._withPendingWrite((async () => (await this._withRetries((Wy => uU(Wy, yb, bb))), this.localCache[yb] = bb, this.notifyServiceWorker(yb))))
          }
          async _get(yb) {
            const bb = await this._withRetries((bb => async function(yb, bb) {
              const Wy = XU(yb, !1).get(bb),
                Uy = await new YU(Wy).toPromise();
              return void 0 === Uy ? null : Uy.value
            }(bb, yb)));
            return this.localCache[yb] = bb, bb
          }
          async _remove(yb) {
            return this._withPendingWrite((async () => (await this._withRetries((bb => rh(bb, yb))), delete this.localCache[yb], this.notifyServiceWorker(yb))))
          }
          async _poll() {
            const yb = await this._withRetries((yb => {
              const bb = XU(yb, !1).getAll();
              return new YU(bb).toPromise()
            }));
            if (!yb) return [];
            if (0 !== this.pendingWrites) return [];
            const bb = [],
              Wy = new Set;
            for (const {
                fbase_key: Uy,
                value: hy
              }
              of yb) Wy.add(Uy), JSON.stringify(this.localCache[Uy]) !== JSON.stringify(hy) && (this.notifyListeners(Uy, hy), bb.push(Uy));
            for (const Uy of Object.keys(this.localCache)) this.localCache[Uy] && !Wy.has(Uy) && (this.notifyListeners(Uy, null), bb.push(Uy));
            return bb
          }
          notifyListeners(yb, bb) {
            this.localCache[yb] = bb;
            const Wy = this.listeners[yb];
            if (Wy)
              for (const Uy of Array.from(Wy)) Uy(bb)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(yb, bb) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[yb] || (this.listeners[yb] = new Set, this._get(yb)), this.listeners[yb].add(bb)
          }
          _removeListener(yb, bb) {
            this.listeners[yb] && (this.listeners[yb].delete(bb), 0 === this.listeners[yb].size && delete this.listeners[yb]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        HU.type = "LOCAL";
        const ah = HU;
        const FU = 1e12;
        class pU {
          constructor(yb) {
            this.auth = yb, this.counter = FU, this._widgets = new Map
          }
          render(yb, bb) {
            const Wy = this.counter;
            return this._widgets.set(Wy, new LU(yb, this.auth.name, bb || {})), this.counter++, Wy
          }
          reset(yb) {
            var bb;
            const Wy = yb || FU;
            null === (bb = this._widgets.get(Wy)) || void 0 === bb || bb.delete(), this._widgets.delete(Wy)
          }
          getResponse(yb) {
            var bb;
            const Wy = yb || FU;
            return (null === (bb = this._widgets.get(Wy)) || void 0 === bb ? void 0 : bb.getResponse()) || ""
          }
          async execute(yb) {
            var bb;
            const Wy = yb || FU;
            return null === (bb = this._widgets.get(Wy)) || void 0 === bb || bb.execute(), ""
          }
        }
        class LU {
          constructor(yb, bb, Wy) {
            this.params = Wy, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Uy = "string" === typeof yb ? document.getElementById(yb) : yb;
            Oy(Uy, "argument-error", {
              appName: bb
            }), this.container = Uy, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(yb) {
                const bb = [],
                  Wy = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Uy = 0; Uy < yb; Uy++) bb.push(Wy.charAt(Math.floor(Math.random() * Wy.length)));
                return bb.join("")
              }(50);
              const {
                callback: yb,
                "expired-callback": bb
              } = this.params;
              if (yb) try {
                yb(this.responseToken)
              } catch (Wy) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, bb) try {
                  bb()
                } catch (Wy) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const QU = Rb("rcb"),
          jh = new Xy(3e4, 6e4);
        class DU {
          constructor() {
            var yb;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (yb = OU().grecaptcha) || void 0 === yb ? void 0 : yb.render)
          }
          load(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Oy(function(yb) {
              return yb.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(yb)
            }(bb), yb, "argument-error"), this.shouldResolveImmediately(bb) && Jb(OU().grecaptcha) ? Promise.resolve(OU().grecaptcha) : new Promise(((Wy, hy) => {
              const fy = OU().setTimeout((() => {
                hy(Vy(yb, "network-request-failed"))
              }), jh.get());
              OU()[QU] = () => {
                OU().clearTimeout(fy), delete OU()[QU];
                const Uy = OU().grecaptcha;
                if (!Uy || !Jb(Uy)) return void hy(Vy(yb, "internal-error"));
                const Zy = Uy.render;
                Uy.render = (yb, bb) => {
                  const Wy = Zy(yb, bb);
                  return this.counter++, Wy
                }, this.hostLanguage = bb, Wy(Uy)
              };
              Ob(`https://www.google.com/recaptcha/api.js??${(0,Uy.cb)({onload:QU,render:"explicit",hl:bb})}`).catch((() => {
                clearTimeout(fy), hy(Vy(yb, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(yb) {
            var bb;
            return !!(null === (bb = OU().grecaptcha) || void 0 === bb ? void 0 : bb.render) && (yb === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class th {
          async load(yb) {
            return new pU(yb)
          }
          clearedOneInstance() {}
        }
        const wU = "recaptcha",
          kh = {
            theme: "light",
            type: "image"
          };
        class NU {
          constructor(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, kh),
              Wy = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = bb, this.type = wU, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Xb(Wy), this.isInvisible = "invisible" === this.parameters.size, Oy("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Uy = "string" === typeof yb ? document.getElementById(yb) : yb;
            Oy(Uy, this.auth, "argument-error"), this.container = Uy, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new th : new DU, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const yb = await this.render(),
              bb = this.getAssertedRecaptcha(),
              Wy = bb.getResponse(yb);
            return Wy || new Promise((Wy => {
              const Uy = yb => {
                yb && (this.tokenChangeListeners.delete(Uy), Wy(yb))
              };
              this.tokenChangeListeners.add(Uy), this.isInvisible && bb.execute(yb)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (yb) {
              return Promise.reject(yb)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((yb => {
              throw this.renderPromise = null, yb
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((yb => {
              this.container.removeChild(yb)
            }))
          }
          validateStartingState() {
            Oy(!this.parameters.sitekey, this.auth, "argument-error"), Oy(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Oy("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(yb) {
            return bb => {
              if (this.tokenChangeListeners.forEach((yb => yb(bb))), "function" === typeof yb) yb(bb);
              else if ("string" === typeof yb) {
                const Wy = OU()[yb];
                "function" === typeof Wy && Wy(bb)
              }
            }
          }
          assertNotDestroyed() {
            Oy(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let yb = this.container;
              if (!this.isInvisible) {
                const bb = document.createElement("div");
                yb.appendChild(bb), yb = bb
              }
              this.widgetId = this.getAssertedRecaptcha().render(yb, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            Oy(My() && !RU(), this.auth, "internal-error"), await
            function() {
              let yb = null;
              return new Promise((bb => {
                "complete" !== document.readyState ? (yb = () => bb(), window.addEventListener("load", yb)) : bb()
              })).catch((bb => {
                throw yb && window.removeEventListener("load", yb), bb
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const yb = await async function(yb) {
              return (await Fy(yb, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Oy(yb, this.auth, "internal-error"), this.parameters.sitekey = yb
          }
          getAssertedRecaptcha() {
            return Oy(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class zh {
          constructor(yb, bb) {
            this.verificationId = yb, this.onConfirmation = bb
          }
          confirm(yb) {
            const bb = Ib._fromVerification(this.verificationId, yb);
            return this.onConfirmation(bb)
          }
        }
        async function IU(yb, bb, Wy) {
          const hy = Xb(yb),
            fy = await dU(hy, bb, (0, Uy.J)(Wy));
          return new zh(fy, (yb => VW(hy, yb)))
        }
        async function xh(yb, bb, Wy) {
          const hy = (0, Uy.J)(yb);
          await mU(!1, hy, "phone");
          const fy = await dU(hy.auth, bb, (0, Uy.J)(Wy));
          return new zh(fy, (yb => JW(hy, yb)))
        }
        async function AU(yb, bb, Wy) {
          const hy = (0, Uy.J)(yb),
            fy = await dU(hy.auth, bb, (0, Uy.J)(Wy));
          return new zh(fy, (yb => gU(hy, yb)))
        }
        async function dU(yb, bb, Wy) {
          var Uy;
          const hy = await Wy.verify();
          try {
            let fy;
            if (Oy("string" === typeof hy, yb, "argument-error"), Oy(Wy.type === wU, yb, "argument-error"), fy = "string" === typeof bb ? {
                phoneNumber: bb
              } : bb, "session" in fy) {
              const bb = fy.session;
              if ("phoneNumber" in fy) {
                Oy("enroll" === bb.type, yb, "internal-error");
                const Wy = await
                function(yb, bb) {
                  return Fy(yb, "POST", "/v2/accounts/mfaEnrollment:start", ab(yb, bb))
                }(yb, {
                  idToken: bb.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: fy.phoneNumber,
                    recaptchaToken: hy
                  }
                });
                return Wy.phoneSessionInfo.sessionInfo
              } {
                Oy("signin" === bb.type, yb, "internal-error");
                const Wy = (null === (Uy = fy.multiFactorHint) || void 0 === Uy ? void 0 : Uy.uid) || fy.multiFactorUid;
                Oy(Wy, yb, "missing-multi-factor-info");
                const Zy = await
                function(yb, bb) {
                  return Fy(yb, "POST", "/v2/accounts/mfaSignIn:start", ab(yb, bb))
                }(yb, {
                  mfaPendingCredential: bb.credential,
                  mfaEnrollmentId: Wy,
                  phoneSignInInfo: {
                    recaptchaToken: hy
                  }
                });
                return Zy.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: bb
              } = await async function(yb, bb) {
                return Fy(yb, "POST", "/v1/accounts:sendVerificationCode", ab(yb, bb))
              }(yb, {
                phoneNumber: fy.phoneNumber,
                recaptchaToken: hy
              });
              return bb
            }
          } finally {
            Wy._reset()
          }
        }
        async function yf(yb, bb) {
          await lW((0, Uy.J)(yb), bb)
        }
        class bf {
          constructor(yb) {
            this.providerId = bf.PROVIDER_ID, this.auth = Xb(yb)
          }
          verifyPhoneNumber(yb, bb) {
            return dU(this.auth, yb, (0, Uy.J)(bb))
          }
          static credential(yb, bb) {
            return Ib._fromVerification(yb, bb)
          }
          static credentialFromResult(yb) {
            const bb = yb;
            return bf.credentialFromTaggedObject(bb)
          }
          static credentialFromError(yb) {
            return bf.credentialFromTaggedObject(yb.customData || {})
          }
          static credentialFromTaggedObject(yb) {
            let {
              _tokenResponse: bb
            } = yb;
            if (!bb) return null;
            const {
              phoneNumber: Wy,
              temporaryProof: Uy
            } = bb;
            return Wy && Uy ? Ib._fromTokenResponse(Wy, Uy) : null
          }
        }

        function Wh(yb, bb) {
          return bb ? fb(bb) : (Oy(yb._popupRedirectResolver, yb, "argument-error"), yb._popupRedirectResolver)
        }
        bf.PROVIDER_ID = "phone", bf.PHONE_SIGN_IN_METHOD = "phone";
        class Uh extends Fb {
          constructor(yb) {
            super("custom", "custom"), this.params = yb
          }
          _getIdTokenResponse(yb) {
            return kW(yb, this._buildIdpRequest())
          }
          _linkToIdToken(yb, bb) {
            return kW(yb, this._buildIdpRequest(bb))
          }
          _getReauthenticationResolver(yb) {
            return kW(yb, this._buildIdpRequest())
          }
          _buildIdpRequest(yb) {
            const bb = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return yb && (bb.idToken = yb), bb
          }
        }

        function hh(yb) {
          return TW(yb.auth, new Uh(yb), yb.bypassAuthState)
        }

        function fh(yb) {
          const {
            auth: bb,
            user: Wy
          } = yb;
          return Oy(Wy, bb, "internal-error"), CW(Wy, new Uh(yb), yb.bypassAuthState)
        }
        async function Zh(yb) {
          const {
            auth: bb,
            user: Wy
          } = yb;
          return Oy(Wy, bb, "internal-error"), lW(Wy, new Uh(yb), yb.bypassAuthState)
        }
        class cf {
          constructor(yb, bb, Wy, Uy) {
            let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = yb, this.resolver = Wy, this.user = Uy, this.bypassAuthState = hy, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(bb) ? bb : [bb]
          }
          execute() {
            return new Promise((async (yb, bb) => {
              this.pendingPromise = {
                resolve: yb,
                reject: bb
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (Wy) {
                this.reject(Wy)
              }
            }))
          }
          async onAuthEvent(yb) {
            const {
              urlResponse: bb,
              sessionId: Wy,
              postBody: Uy,
              tenantId: hy,
              error: fy,
              type: Zy
            } = yb;
            if (fy) return void this.reject(fy);
            const cb = {
              auth: this.auth,
              requestUri: bb,
              sessionId: Wy,
              tenantId: hy || void 0,
              postBody: Uy || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Zy)(cb))
            } catch (Py) {
              this.reject(Py)
            }
          }
          onError(yb) {
            this.reject(yb)
          }
          getIdpTask(yb) {
            switch (yb) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return hh;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Zh;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return fh;
              default:
                Ty(this.auth, "internal-error")
            }
          }
          resolve(yb) {
            vb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(yb), this.unregisterAndCleanUp()
          }
          reject(yb) {
            vb(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(yb), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const Ph = new Xy(2e3, 1e4);
        async function oh(yb, bb, Wy) {
          const Uy = Xb(yb);
          gb(yb, bb, yU);
          const hy = Wh(Uy, Wy);
          return new eh(Uy, "signInViaPopup", bb, hy).executeNotNull()
        }
        async function Bh(yb, bb, Wy) {
          const hy = (0, Uy.J)(yb);
          gb(hy.auth, bb, yU);
          const fy = Wh(hy.auth, Wy);
          return new eh(hy.auth, "reauthViaPopup", bb, fy, hy).executeNotNull()
        }
        async function Kh(yb, bb, Wy) {
          const hy = (0, Uy.J)(yb);
          gb(hy.auth, bb, yU);
          const fy = Wh(hy.auth, Wy);
          return new eh(hy.auth, "linkViaPopup", bb, fy, hy).executeNotNull()
        }
        class eh extends cf {
          constructor(yb, bb, Wy, Uy, hy) {
            super(yb, bb, Uy, hy), this.provider = Wy, this.authWindow = null, this.pollId = null, eh.currentPopupAction && eh.currentPopupAction.cancel(), eh.currentPopupAction = this
          }
          async executeNotNull() {
            const yb = await this.execute();
            return Oy(yb, this.auth, "internal-error"), yb
          }
          async onExecution() {
            vb(1 === this.filter.length, "Popup operations only handle one event");
            const yb = gh();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], yb), this.authWindow.associatedEvent = yb, this.resolver._originValidation(this.auth).catch((yb => {
              this.reject(yb)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (yb => {
              yb || this.reject(Vy(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var yb;
            return (null === (yb = this.authWindow) || void 0 === yb ? void 0 : yb.associatedEvent) || null
          }
          cancel() {
            this.reject(Vy(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, eh.currentPopupAction = null
          }
          pollUserCancellation() {
            const yb = () => {
              var bb, Wy;
              (null === (Wy = null === (bb = this.authWindow) || void 0 === bb ? void 0 : bb.window) || void 0 === Wy ? void 0 : Wy.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Vy(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(yb, Ph.get())
            };
            yb()
          }
        }
        eh.currentPopupAction = null;
        const qf = "pendingRedirect",
          sh = new Map;
        class Sh extends cf {
          constructor(yb, bb) {
            super(yb, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], bb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let yb = sh.get(this.auth._key());
            if (!yb) {
              try {
                const bb = await async function(yb, bb) {
                  const Wy = Ch(bb),
                    Uy = mf(yb);
                  if (!await Uy._isAvailable()) return !1;
                  const hy = "true" === await Uy._get(Wy);
                  return await Uy._remove(Wy), hy
                }(this.resolver, this.auth) ? await super.execute() : null;
                yb = () => Promise.resolve(bb)
              } catch (bb) {
                yb = () => Promise.reject(bb)
              }
              sh.set(this.auth._key(), yb)
            }
            return this.bypassAuthState || sh.set(this.auth._key(), (() => Promise.resolve(null))), yb()
          }
          async onAuthEvent(yb) {
            if ("signInViaRedirect" === yb.type) return super.onAuthEvent(yb);
            if ("unknown" !== yb.type) {
              if (yb.eventId) {
                const bb = await this.auth._redirectUserForId(yb.eventId);
                if (bb) return this.user = bb, super.onAuthEvent(yb);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Eh(yb, bb) {
          return mf(yb)._set(Ch(bb), "true")
        }

        function lh(yb, bb) {
          sh.set(yb._key(), bb)
        }

        function mf(yb) {
          return fb(yb._redirectPersistence)
        }

        function Ch(yb) {
          return Pb(qf, yb.config.apiKey, yb.name)
        }

        function Th(yb, bb, Wy) {
          return async function(yb, bb, Wy) {
            const Uy = Xb(yb);
            gb(yb, bb, yU), await Uy._initializationPromise;
            const hy = Wh(Uy, Wy);
            return await Eh(hy, Uy), hy._openRedirect(Uy, bb, "signInViaRedirect")
          }(yb, bb, Wy)
        }

        function Vh(yb, bb, Wy) {
          return async function(yb, bb, Wy) {
            const hy = (0, Uy.J)(yb);
            gb(hy.auth, bb, yU), await hy.auth._initializationPromise;
            const fy = Wh(hy.auth, Wy);
            await Eh(fy, hy.auth);
            const Zy = await Oh(hy);
            return fy._openRedirect(hy.auth, bb, "reauthViaRedirect", Zy)
          }(yb, bb, Wy)
        }

        function Jh(yb, bb, Wy) {
          return async function(yb, bb, Wy) {
            const hy = (0, Uy.J)(yb);
            gb(hy.auth, bb, yU), await hy.auth._initializationPromise;
            const fy = Wh(hy.auth, Wy);
            await mU(!1, hy, bb.providerId), await Eh(fy, hy.auth);
            const Zy = await Oh(hy);
            return fy._openRedirect(hy.auth, bb, "linkViaRedirect", Zy)
          }(yb, bb, Wy)
        }
        async function gf(yb, bb) {
          return await Xb(yb)._initializationPromise, Gh(yb, bb, !1)
        }
        async function Gh(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Uy = Xb(yb),
            hy = Wh(Uy, bb),
            fy = new Sh(Uy, hy, Wy),
            Zy = await fy.execute();
          return Zy && !Wy && (delete Zy.user._redirectEventId, await Uy._persistUserIfCurrent(Zy.user), await Uy._setRedirectUser(null, bb)), Zy
        }
        async function Oh(yb) {
          const bb = gh(`${yb.uid}:::`);
          return yb._redirectEventId = bb, await yb.auth._setRedirectUser(yb), await yb.auth._persistUserIfCurrent(yb), bb
        }
        class Rh {
          constructor(yb) {
            this.auth = yb, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(yb) {
            this.consumers.add(yb), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, yb) && (this.sendToConsumer(this.queuedRedirectEvent, yb), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(yb) {
            this.consumers.delete(yb)
          }
          onEvent(yb) {
            if (this.hasEventBeenHandled(yb)) return !1;
            let bb = !1;
            return this.consumers.forEach((Wy => {
              this.isEventForConsumer(yb, Wy) && (bb = !0, this.sendToConsumer(yb, Wy), this.saveEventToCache(yb))
            })), this.hasHandledPotentialRedirect || ! function(yb) {
              switch (yb.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Mh(yb);
                default:
                  return !1
              }
            }(yb) || (this.hasHandledPotentialRedirect = !0, bb || (this.queuedRedirectEvent = yb, bb = !0)), bb
          }
          sendToConsumer(yb, bb) {
            var Wy;
            if (yb.error && !Mh(yb)) {
              const Uy = (null === (Wy = yb.error.code) || void 0 === Wy ? void 0 : Wy.split("auth/")[1]) || "internal-error";
              bb.onError(Vy(this.auth, Uy))
            } else bb.onAuthEvent(yb)
          }
          isEventForConsumer(yb, bb) {
            const Wy = null === bb.eventId || !!yb.eventId && yb.eventId === bb.eventId;
            return bb.filter.includes(yb.type) && Wy
          }
          hasEventBeenHandled(yb) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(vf(yb))
          }
          saveEventToCache(yb) {
            this.cachedEventUids.add(vf(yb)), this.lastProcessedEventTime = Date.now()
          }
        }

        function vf(yb) {
          return [yb.type, yb.eventId, yb.sessionId, yb.tenantId].filter((yb => yb)).join("-")
        }

        function Mh(yb) {
          let {
            type: bb,
            error: Wy
          } = yb;
          return "unknown" === bb && "auth/no-auth-event" === (null === Wy || void 0 === Wy ? void 0 : Wy.code)
        }
        const Yh = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Xh = /^https?/;
        async function nh(yb) {
          if (yb.config.emulator) return;
          const {
            authorizedDomains: bb
          } = await async function(yb) {
            return Fy(yb, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(yb);
          for (const Uy of bb) try {
            if (uh(Uy)) return
          } catch (Wy) {}
          Ty(yb, "unauthorized-domain")
        }

        function uh(yb) {
          const bb = ib(),
            {
              protocol: Wy,
              hostname: Uy
            } = new URL(bb);
          if (yb.startsWith("chrome-extension://")) {
            const hy = new URL(yb);
            return "" === hy.hostname && "" === Uy ? "chrome-extension:" === Wy && yb.replace("chrome-extension://", "") === bb.replace("chrome-extension://", "") : "chrome-extension:" === Wy && hy.hostname === Uy
          }
          if (!Xh.test(Wy)) return !1;
          if (Yh.test(yb)) return Uy === yb;
          const hy = yb.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + hy + "|" + hy + ")$", "i").test(Uy)
        }
        const rf = new Xy(3e4, 6e4);

        function Hh() {
          const yb = OU().___jsl;
          if (null === yb || void 0 === yb ? void 0 : yb.H)
            for (const bb of Object.keys(yb.H))
              if (yb.H[bb].r = yb.H[bb].r || [], yb.H[bb].L = yb.H[bb].L || [], yb.H[bb].r = [...yb.H[bb].L], yb.CP)
                for (let Wy = 0; Wy < yb.CP.length; Wy++) yb.CP[Wy] = null
        }
        let af = null;

        function Fh(yb) {
          return af = af || function(yb) {
            return new Promise(((bb, Wy) => {
              var Uy, hy, fy;

              function Zy() {
                Hh(), gapi.load("gapi.iframes", {
                  callback: () => {
                    bb(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    Hh(), Wy(Vy(yb, "network-request-failed"))
                  },
                  timeout: rf.get()
                })
              }
              if (null === (hy = null === (Uy = OU().gapi) || void 0 === Uy ? void 0 : Uy.iframes) || void 0 === hy ? void 0 : hy.Iframe) bb(gapi.iframes.getContext());
              else {
                if (!(null === (fy = OU().gapi) || void 0 === fy ? void 0 : fy.load)) {
                  const bb = Rb("iframefcb");
                  return OU()[bb] = () => {
                    gapi.load ? Zy() : Wy(Vy(yb, "network-request-failed"))
                  }, Ob(`https://apis.google.com/js/api.js?onload=${bb}`).catch((yb => Wy(yb)))
                }
                Zy()
              }
            })).catch((yb => {
              throw af = null, yb
            }))
          }(yb), af
        }
        const ph = new Xy(5e3, 15e3),
          Lh = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          Qh = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function jf(yb) {
          const bb = yb.config;
          Oy(bb.authDomain, yb, "auth-domain-config-required");
          const Wy = bb.emulator ? ny(bb, "emulator/auth/iframe") : `https://${yb.config.authDomain}/__/auth/iframe`,
            fy = {
              apiKey: bb.apiKey,
              appName: yb.name,
              v: hy.h
            },
            Zy = Qh.get(yb.config.apiHost);
          Zy && (fy.eid = Zy);
          const cb = yb._getFrameworks();
          return cb.length && (fy.fw = cb.join(",")), `${Wy}?${(0,Uy.cb)(fy).slice(1)}`
        }
        const Dh = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class tf {
          constructor(yb) {
            this.window = yb, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (yb) {}
          }
        }

        function wh(yb, bb, Wy) {
          let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Zy = Math.max((window.screen.availHeight - fy) / 2, 0).toString(),
            cb = Math.max((window.screen.availWidth - hy) / 2, 0).toString();
          let Py = "";
          const oy = Object.assign(Object.assign({}, Dh), {
              width: hy.toString(),
              height: fy.toString(),
              top: Zy,
              left: cb
            }),
            By = (0, Uy.K)().toLowerCase();
          Wy && (Py = qW(By) ? "_blank" : Wy), Kb(By) && (bb = bb || "http://localhost", oy.scrollbars = "yes");
          const Ky = Object.entries(oy).reduce(((yb, bb) => {
            let [Wy, Uy] = bb;
            return `${yb}${Wy}=${Uy},`
          }), "");
          if (function() {
              var yb;
              return mW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.K)()) && !!(null === (yb = window.navigator) || void 0 === yb ? void 0 : yb.standalone)
            }(By) && "_self" !== Py) return function(yb, bb) {
            const Wy = document.createElement("a");
            Wy.href = yb, Wy.target = bb;
            const Uy = document.createEvent("MouseEvent");
            Uy.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), Wy.dispatchEvent(Uy)
          }(bb || "", Py), new tf(null);
          const ey = window.open(bb || "", Py, Ky);
          Oy(ey, yb, "popup-blocked");
          try {
            ey.focus()
          } catch (qb) {}
          return new tf(ey)
        }
        const kf = "__/auth/handler",
          Nh = "emulator/auth/handler",
          zf = encodeURIComponent("fac");
        async function Ih(yb, bb, Wy, fy, Zy, cb) {
            Oy(yb.config.authDomain, yb, "auth-domain-config-required"), Oy(yb.config.apiKey, yb, "invalid-api-key");
            const Py = {
              apiKey: yb.config.apiKey,
              appName: yb.name,
              authType: Wy,
              redirectUrl: fy,
              v: hy.h,
              eventId: Zy
            };
            if (bb instanceof yU) {
              bb.setDefaultLanguage(yb.languageCode), Py.providerId = bb.providerId || "", (0, Uy.P)(bb.getCustomParameters()) || (Py.customParameters = JSON.stringify(bb.getCustomParameters()));
              for (const [yb, bb] of Object.entries(cb || {})) Py[yb] = bb
            }
            if (bb instanceof bU) {
              const yb = bb.getScopes().filter((yb => "" !== yb));
              yb.length > 0 && (Py.scopes = yb.join(","))
            }
            yb.tenantId && (Py.tid = yb.tenantId);
            const oy = Py;
            for (const Uy of Object.keys(oy)) void 0 === oy[Uy] && delete oy[Uy];
            const By = await yb._getAppCheckToken(),
              Ky = By ? `#${zf}=${encodeURIComponent(By)}` : "";
            return `${function(yb){let{config:bb}=yb;if(!bb.emulator)return`
            https: //${bb.authDomain}/${kf}`;return ny(bb,Nh)}(yb)}?${(0,Uy.cb)(oy).slice(1)}${Ky}`}const xf="webStorageSupport";const Ah=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VU,this._completeRedirectFn=Gh,this._overrideRedirectResult=lh}async _openPopup(yb,bb,Wy,Uy){var hy;vb(null===(hy=this.eventManagers[yb._key()])||void 0===hy?void 0:hy.manager,"_initialize() not called before _openPopup()");return wh(yb,await Ih(yb,bb,Wy,ib(),Uy),gh())}async _openRedirect(yb,bb,Wy,Uy){await this._originValidation(yb);return function(yb){OU().location.href=yb}(await Ih(yb,bb,Wy,ib(),Uy)),new Promise((()=>{}))}_initialize(yb){const bb=yb._key();if(this.eventManagers[bb]){const{manager:yb,promise:Wy}=this.eventManagers[bb];return yb?Promise.resolve(yb):(vb(Wy,"If manager is not set, promise should be"),Wy)}const Wy=this.initAndGetManager(yb);return this.eventManagers[bb]={promise:Wy},Wy.catch((()=>{delete this.eventManagers[bb]})),Wy}async initAndGetManager(yb){const bb=await async function(yb){const bb=await Fh(yb),Wy=OU().gapi;return Oy(Wy,yb,"internal-error"),bb.open({where:document.body,url:jf(yb),messageHandlersFilter:Wy.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lh,dontclear:!0},(bb=>new Promise((async(Wy,Uy)=>{await bb.restyle({setHideOnLeave:!1});const hy=Vy(yb,"network-request-failed"),fy=OU().setTimeout((()=>{Uy(hy)}),ph.get());function Zy(){OU().clearTimeout(fy),Wy(bb)}bb.ping(Zy).then(Zy,(()=>{Uy(hy)}))}))))}(yb),Wy=new Rh(yb);return bb.register("authEvent",(bb=>{Oy(null===bb||void 0===bb?void 0:bb.authEvent,yb,"invalid-auth-event");return{status:Wy.onEvent(bb.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[yb._key()]={manager:Wy},this.iframes[yb._key()]=bb,Wy}_isIframeWebStorageSupported(yb,bb){this.iframes[yb._key()].send(xf,{type:xf},(Wy=>{var Uy;const hy=null===(Uy=null===Wy||void 0===Wy?void 0:Wy[0])||void 0===Uy?void 0:Uy[xf];void 0!==hy&&bb(!!hy),Ty(yb,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(yb){const bb=yb._key();return this.originValidationPromises[bb]||(this.originValidationPromises[bb]=nh(yb)),this.originValidationPromises[bb]}get _shouldInitProactively(){return Cb()||eb()||mW()}};class dh{constructor(yb){this.factorId=yb}_process(yb,bb,Wy){switch(bb.type){case"enroll":return this._finalizeEnroll(yb,bb.credential,Wy);case"signin":return this._finalizeSignIn(yb,bb.credential);default:return Ry("unexpected MultiFactorSessionType")}}}class yZ extends dh{constructor(yb){super("phone"),this.credential=yb}static _fromCredential(yb){return new yZ(yb)}_finalizeEnroll(yb,bb,Wy){return function(yb,bb){return Fy(yb,"POST","/v2/accounts/mfaEnrollment:finalize",ab(yb,bb))}(yb,{idToken:bb,displayName:Wy,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(yb,bb){return function(yb,bb){return Fy(yb,"POST","/v2/accounts/mfaSignIn:finalize",ab(yb,bb))}(yb,{mfaPendingCredential:bb,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bZ{constructor(){}static assertion(yb){return yZ._fromCredential(yb)}}bZ.FACTOR_ID="phone";class Wf{static assertionForEnrollment(yb,bb){return Uf._fromSecret(yb,bb)}static assertionForSignIn(yb,bb){return Uf._fromEnrollmentId(yb,bb)}static async generateSecret(yb){const bb=yb;Oy("undefined"!==typeof bb.auth,"internal-error");const Wy=await(Uy=bb.auth,hy={idToken:bb.credential,totpEnrollmentInfo:{}},Fy(Uy,"POST","/v2/accounts/mfaEnrollment:start",ab(Uy,hy)));var Uy,hy;return hf._fromStartTotpMfaEnrollmentResponse(Wy,bb.auth)}}Wf.FACTOR_ID="totp";class Uf extends dh{constructor(yb,bb,Wy){super("totp"),this.otp=yb,this.enrollmentId=bb,this.secret=Wy}static _fromSecret(yb,bb){return new Uf(bb,void 0,yb)}static _fromEnrollmentId(yb,bb){return new Uf(bb,yb)}async _finalizeEnroll(yb,bb,Wy){return Oy("undefined"!==typeof this.secret,yb,"argument-error"),function(yb,bb){return Fy(yb,"POST","/v2/accounts/mfaEnrollment:finalize",ab(yb,bb))}(yb,{idToken:bb,displayName:Wy,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(yb,bb){Oy(void 0!==this.enrollmentId&&void 0!==this.otp,yb,"argument-error");const Wy={verificationCode:this.otp};return function(yb,bb){return Fy(yb,"POST","/v2/accounts/mfaSignIn:finalize",ab(yb,bb))}(yb,{mfaPendingCredential:bb,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:Wy})}}class hf{constructor(yb,bb,Wy,Uy,hy,fy,Zy){this.sessionInfo=fy,this.auth=Zy,this.secretKey=yb,this.hashingAlgorithm=bb,this.codeLength=Wy,this.codeIntervalSeconds=Uy,this.enrollmentCompletionDeadline=hy}static _fromStartTotpMfaEnrollmentResponse(yb,bb){return new hf(yb.totpSessionInfo.sharedSecretKey,yb.totpSessionInfo.hashingAlgorithm,yb.totpSessionInfo.verificationCodeLength,yb.totpSessionInfo.periodSec,new Date(yb.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),yb.totpSessionInfo.sessionInfo,bb)}_makeTotpVerificationInfo(yb){return{sessionInfo:this.sessionInfo,verificationCode:yb}}generateQrCodeUrl(yb,bb){var Wy;let Uy=!1;return(ff(yb)||ff(bb))&&(Uy=!0),Uy&&(ff(yb)&&(yb=(null===(Wy=this.auth.currentUser)||void 0===Wy?void 0:Wy.email)||"unknownuser"),ff(bb)&&(bb=this.auth.name)),`otpauth://totp/${bb}:${yb}?secret=${this.secretKey}&issuer=${bb}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ff(yb){return"undefined"===typeof yb||0===(null===yb||void 0===yb?void 0:yb.length)}var Zf="@firebase/auth",cZ="0.23.2";class Pf{constructor(yb){this.auth=yb,this.internalListeners=new Map}getUid(){var yb;return this.assertAuthConfigured(),(null===(yb=this.auth.currentUser)||void 0===yb?void 0:yb.uid)||null}async getToken(yb){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(yb)}}addAuthTokenListener(yb){if(this.assertAuthConfigured(),this.internalListeners.has(yb))return;const bb=this.auth.onIdTokenChanged((bb=>{yb((null===bb||void 0===bb?void 0:bb.stsTokenManager.accessToken)||null)}));this.internalListeners.set(yb,bb),this.updateProactiveRefresh()}removeAuthTokenListener(yb){this.assertAuthConfigured();const bb=this.internalListeners.get(yb);bb&&(this.internalListeners.delete(yb),bb(),this.updateProactiveRefresh())}assertAuthConfigured(){Oy(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const of=(0,Uy.I)("authIdTokenMaxAge")||300;let Bf=null;const Kf=yb=>async bb=>{const Wy=bb&&await bb.getIdTokenResult(),Uy=Wy&&((new Date).getTime()-Date.parse(Wy.issuedAtTime))/1e3;if(Uy&&Uy>of)return;const hy=null===Wy||void 0===Wy?void 0:Wy.token;Bf!==hy&&(Bf=hy,await fetch(yb,{method:hy?"POST":"DELETE",headers:hy?{Authorization:`Bearer ${hy}`}:{}}))};function ef(){let yb=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,hy.L)();const bb=(0,hy.v)(yb,"auth");if(bb.isInitialized())return bb.getImmediate();const Wy=ub(yb,{popupRedirectResolver:Ah,persistence:[ah,CU,VU]}),fy=(0,Uy.I)("authTokenSyncURL");if(fy){const yb=Kf(fy);hU(Wy,yb,(()=>yb(Wy.currentUser))),UU(Wy,(bb=>yb(bb)))}const Zy=(0,Uy.G)("auth");return Zy&&rW(Wy,`http://${Zy}`),Wy}var qZ;qZ="Browser",(0,hy.z)(new cb.i("auth",((yb,bb)=>{let{options:Wy}=bb;const Uy=yb.getProvider("app").getImmediate(),hy=yb.getProvider("heartbeat"),fy=yb.getProvider("app-check-internal"),{apiKey:Zy,authDomain:cb}=Uy.options;Oy(Zy&&!Zy.includes(":"),"invalid-api-key",{appName:Uy.name});const Py={apiKey:Zy,authDomain:cb,clientPlatform:qZ,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tb(qZ)},oy=new Yb(Uy,hy,fy,Py);return function(yb,bb){const Wy=(null===bb||void 0===bb?void 0:bb.persistence)||[],Uy=(Array.isArray(Wy)?Wy:[Wy]).map(fb);(null===bb||void 0===bb?void 0:bb.errorMap)&&yb._updateErrorMap(bb.errorMap),yb._initializeWithPersistence(Uy,null===bb||void 0===bb?void 0:bb.popupRedirectResolver)}(oy,Wy),oy}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((yb,bb,Wy)=>{yb.getProvider("auth-internal").initialize()}))),(0,hy.z)(new cb.i("auth-internal",(yb=>(yb=>new Pf(yb))(Xb(yb.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,hy.R)(Zf,cZ,function(yb){switch(yb){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(qZ)),(0,hy.R)(Zf,cZ,"esm2017")}};Object.freeze(modules);for(const yb in modules)Object.freeze(modules[yb]);