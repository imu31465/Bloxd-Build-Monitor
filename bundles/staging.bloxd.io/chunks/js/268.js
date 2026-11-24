/*! For license information please see tz47m9.268.85dc0d6d.chunk.js.LICENSE.txt */
export const id = 268;
export const ids = [268];
export const modules = {
    40455: (DD, zD, wD) => {
        wD.r(zD), wD.d(zD, {
          ActionCodeOperation: () => UD,
          ActionCodeURL: () => Yz,
          AuthCredential: () => Nz,
          AuthErrorCodes: () => hD,
          EmailAuthCredential: () => az,
          EmailAuthProvider: () => qz,
          FacebookAuthProvider: () => pw,
          FactorId: () => cD,
          GithubAuthProvider: () => Kw,
          GoogleAuthProvider: () => sw,
          OAuthCredential: () => vz,
          OAuthProvider: () => ww,
          OperationType: () => AD,
          PhoneAuthCredential: () => Fz,
          PhoneAuthProvider: () => ps,
          PhoneMultiFactorGenerator: () => sK,
          ProviderId: () => gD,
          RecaptchaVerifier: () => Fp,
          SAMLAuthProvider: () => Lw,
          SignInMethod: () => RD,
          TotpMultiFactorGenerator: () => KK,
          TotpSecret: () => LK,
          TwitterAuthProvider: () => gw,
          applyActionCode: () => dw,
          beforeAuthStateChanged: () => Kp,
          browserLocalPersistence: () => Op,
          browserPopupRedirectResolver: () => zK,
          browserSessionPersistence: () => Ep,
          checkActionCode: () => Sw,
          confirmPasswordReset: () => jw,
          connectAuthEmulator: () => iz,
          createUserWithEmailAndPassword: () => lw,
          debugErrorMap: () => ID,
          deleteUser: () => Rp,
          fetchSignInMethodsForEmail: () => kw,
          getAdditionalUserInfo: () => zp,
          getAuth: () => BK,
          getIdToken: () => aD,
          getIdTokenResult: () => uD,
          getMultiFactorResolver: () => fp,
          getRedirectResult: () => Ps,
          inMemoryPersistence: () => Lz,
          indexedDBLocalPersistence: () => Np,
          initializeAuth: () => Sz,
          initializeRecaptchaConfig: () => pp,
          isSignInWithEmailLink: () => Zw,
          linkWithCredential: () => Qw,
          linkWithPhoneNumber: () => qp,
          linkWithPopup: () => fs,
          linkWithRedirect: () => Vs,
          multiFactor: () => Gp,
          onAuthStateChanged: () => rp,
          onIdTokenChanged: () => sp,
          parseActionCodeURL: () => Hz,
          prodErrorMap: () => BD,
          reauthenticateWithCredential: () => Xw,
          reauthenticateWithPhoneNumber: () => Ds,
          reauthenticateWithPopup: () => Us,
          reauthenticateWithRedirect: () => Xs,
          reload: () => Dz,
          sendEmailVerification: () => mw,
          sendPasswordResetEmail: () => bw,
          sendSignInLinkToEmail: () => Nw,
          setPersistence: () => wp,
          signInAnonymously: () => fw,
          signInWithCredential: () => Ew,
          signInWithCustomToken: () => Vw,
          signInWithEmailAndPassword: () => Ww,
          signInWithEmailLink: () => yw,
          signInWithPhoneNumber: () => Hp,
          signInWithPopup: () => As,
          signInWithRedirect: () => Qs,
          signOut: () => gp,
          unlink: () => hw,
          updateCurrentUser: () => cp,
          updateEmail: () => aw,
          updatePassword: () => uw,
          updatePhoneNumber: () => ws,
          updateProfile: () => ow,
          useDeviceLanguage: () => Lp,
          verifyBeforeUpdateEmail: () => ew,
          verifyPasswordResetCode: () => iw
        });
        var pD = wD(40442),
          sD = wD(40430);

        function KD(DD, zD) {
          var wD = {};
          for (var pD in DD) Object.prototype.hasOwnProperty.call(DD, pD) && zD.indexOf(pD) < 0 && (wD[pD] = DD[pD]);
          if (null != DD && "function" === typeof Object.getOwnPropertySymbols) {
            var sD = 0;
            for (pD = Object.getOwnPropertySymbols(DD); sD < pD.length; sD++) zD.indexOf(pD[sD]) < 0 && Object.prototype.propertyIsEnumerable.call(DD, pD[sD]) && (wD[pD[sD]] = DD[pD[sD]])
          }
          return wD
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var rD = wD(40446),
          LD = wD(40435);
        const cD = {
            PHONE: "phone",
            TOTP: "totp"
          },
          gD = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          RD = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          AD = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          UD = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function fD() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const ID = function() {
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
          BD = fD,
          GD = new pD.c("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          hD = {
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
          nD = new rD.h("@firebase/auth");

        function MD(DD) {
          if (nD.logLevel <= rD.e.ERROR) {
            for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
            nD.error(`Auth (${sD.e}): ${DD}`, ...wD)
          }
        }

        function OD(DD) {
          for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
          throw XD(DD, ...wD)
        }

        function JD(DD) {
          for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
          return XD(DD, ...wD)
        }

        function ED(DD, zD, wD) {
          const sD = Object.assign(Object.assign({}, BD()), {
            [zD]: wD
          });
          return new pD.c("auth", "Firebase", sD).create(zD, {
            appName: DD.name
          })
        }

        function QD(DD, zD, wD) {
          if (!(zD instanceof wD)) throw wD.name !== zD.constructor.name && OD(DD, "argument-error"), ED(DD, "argument-error", `Type of ${zD.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function XD(DD) {
          for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
          if ("string" !== typeof DD) {
            const zD = wD[0],
              pD = [...wD.slice(1)];
            return pD[0] && (pD[0].appName = DD.name), DD._errorFactory.create(zD, ...pD)
          }
          return GD.create(DD, ...wD)
        }

        function VD(DD, zD) {
          if (!DD) {
            for (var wD = arguments.length, pD = new Array(wD > 2 ? wD - 2 : 0), sD = 2; sD < wD; sD++) pD[sD - 2] = arguments[sD];
            throw XD(zD, ...pD)
          }
        }

        function PD(DD) {
          const zD = "INTERNAL ASSERTION FAILED: " + DD;
          throw MD(zD), new Error(zD)
        }

        function CD(DD, zD) {
          DD || PD(zD)
        }

        function xD() {
          var DD;
          return "undefined" !== typeof self && (null === (DD = self.location) || void 0 === DD ? void 0 : DD.href) || ""
        }

        function TD() {
          return "http:" === bD() || "https:" === bD()
        }

        function bD() {
          var DD;
          return "undefined" !== typeof self && (null === (DD = self.location) || void 0 === DD ? void 0 : DD.protocol) || null
        }
        class jD {
          constructor(DD, zD) {
            this.shortDelay = DD, this.longDelay = zD, CD(zD > DD, "Short delay should be less than long delay!"), this.isMobile = (0, pD.S)() || (0, pD.T)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (TD() || (0, pD.L)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function dD(DD, zD) {
          CD(DD.emulator, "Emulator should always be set here");
          const {
            url: wD
          } = DD.emulator;
          return zD ? `${wD}${zD.startsWith("/")?zD.slice(1):zD}` : wD
        }
        class SD {
          static initialize(DD, zD, wD) {
            this.fetchImpl = DD, zD && (this.headersImpl = zD), wD && (this.responseImpl = wD)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void PD("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void PD("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void PD("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const iD = {
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
          lD = new jD(3e4, 6e4);

        function WD(DD, zD) {
          return DD.tenantId && !zD.tenantId ? Object.assign(Object.assign({}, zD), {
            tenantId: DD.tenantId
          }) : zD
        }
        async function ND(DD, zD, wD, sD) {
          return ZD(DD, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let KD = {},
              rD = {};
            sD && ("GET" === zD ? rD = sD : KD = {
              body: JSON.stringify(sD)
            });
            const LD = (0, pD.Y)(Object.assign({
                key: DD.config.apiKey
              }, rD)).slice(1),
              cD = await DD._getAdditionalHeaders();
            return cD["Content-Type"] = "application/json", DD.languageCode && (cD["X-Firebase-Locale"] = DD.languageCode), SD.fetch()(kD(DD, DD.config.apiHost, wD, LD), Object.assign({
              method: zD,
              headers: cD,
              referrerPolicy: "no-referrer"
            }, KD))
          }))
        }
        async function ZD(DD, zD, wD) {
          DD._canInitEmulator = !1;
          const sD = Object.assign(Object.assign({}, iD), zD);
          try {
            const zD = new mD(DD),
              pD = await Promise.race([wD(), zD.promise]);
            zD.clearNetworkTimeout();
            const KD = await pD.json();
            if ("needConfirmation" in KD) throw eD(DD, "account-exists-with-different-credential", KD);
            if (pD.ok && !("errorMessage" in KD)) return KD;
            {
              const zD = pD.ok ? KD.errorMessage : KD.error.message,
                [wD, rD] = zD.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === wD) throw eD(DD, "credential-already-in-use", KD);
              if ("EMAIL_EXISTS" === wD) throw eD(DD, "email-already-in-use", KD);
              if ("USER_DISABLED" === wD) throw eD(DD, "user-disabled", KD);
              const LD = sD[wD] || wD.toLowerCase().replace(/[_\s]+/g, "-");
              if (rD) throw ED(DD, LD, rD);
              OD(DD, LD)
            }
          } catch (KD) {
            if (KD instanceof pD.e) throw KD;
            OD(DD, "network-request-failed", {
              message: String(KD)
            })
          }
        }
        async function yD(DD, zD, wD, pD) {
          let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const KD = await ND(DD, zD, wD, pD, sD);
          return "mfaPendingCredential" in KD && OD(DD, "multi-factor-auth-required", {
            _serverResponse: KD
          }), KD
        }

        function kD(DD, zD, wD, pD) {
          const sD = `${zD}${wD}?${pD}`;
          return DD.config.emulator ? dD(DD.config, sD) : `${DD.config.apiScheme}://${sD}`
        }
        class mD {
          constructor(DD) {
            this.auth = DD, this.timer = null, this.promise = new Promise(((DD, zD) => {
              this.timer = setTimeout((() => zD(JD(this.auth, "network-request-failed"))), lD.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function eD(DD, zD, wD) {
          const pD = {
            appName: DD.name
          };
          wD.email && (pD.email = wD.email), wD.phoneNumber && (pD.phoneNumber = wD.phoneNumber);
          const sD = JD(DD, zD, pD);
          return sD.customData._tokenResponse = wD, sD
        }

        function oD(DD) {
          if (DD) try {
            const zD = new Date(Number(DD));
            if (!isNaN(zD.getTime())) return zD.toUTCString()
          } catch (zD) {}
        }

        function aD(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, pD.H)(DD).getIdToken(zD)
        }
        async function uD(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const wD = (0, pD.H)(DD),
            sD = await wD.getIdToken(zD),
            KD = tD(sD);
          VD(KD && KD.exp && KD.auth_time && KD.iat, wD.auth, "internal-error");
          const rD = "object" === typeof KD.firebase ? KD.firebase : void 0,
            LD = null === rD || void 0 === rD ? void 0 : rD.sign_in_provider;
          return {
            claims: KD,
            token: sD,
            authTime: oD(vD(KD.auth_time)),
            issuedAtTime: oD(vD(KD.iat)),
            expirationTime: oD(vD(KD.exp)),
            signInProvider: LD || null,
            signInSecondFactor: (null === rD || void 0 === rD ? void 0 : rD.sign_in_second_factor) || null
          }
        }

        function vD(DD) {
          return 1e3 * Number(DD)
        }

        function tD(DD) {
          const [zD, wD, sD] = DD.split(".");
          if (void 0 === zD || void 0 === wD || void 0 === sD) return MD("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const DD = (0, pD.j)(wD);
            return DD ? JSON.parse(DD) : (MD("Failed to decode base64 JWT payload"), null)
          } catch (KD) {
            return MD("Caught error parsing JWT payload as JSON", null === KD || void 0 === KD ? void 0 : KD.toString()), null
          }
        }
        async function FD(DD, zD) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return zD;
          try {
            return await zD
          } catch (wD) {
            throw wD instanceof pD.e && function(DD) {
              let {
                code: zD
              } = DD;
              return "auth/user-disabled" === zD || "auth/user-token-expired" === zD
            }(wD) && DD.auth.currentUser === DD && await DD.auth.signOut(), wD
          }
        }
        class YD {
          constructor(DD) {
            this.user = DD, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(DD) {
            var zD;
            if (DD) {
              const DD = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), DD
            } {
              this.errorBackoff = 3e4;
              const DD = (null !== (zD = this.user.stsTokenManager.expirationTime) && void 0 !== zD ? zD : 0) - Date.now() - 3e5;
              return Math.max(0, DD)
            }
          }
          schedule() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const zD = this.getInterval(DD);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), zD)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (DD) {
              return void("auth/network-request-failed" === (null === DD || void 0 === DD ? void 0 : DD.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class HD {
          constructor(DD, zD) {
            this.createdAt = DD, this.lastLoginAt = zD, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = oD(this.lastLoginAt), this.creationTime = oD(this.createdAt)
          }
          _copy(DD) {
            this.createdAt = DD.createdAt, this.lastLoginAt = DD.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function qD(DD) {
          var zD;
          const wD = DD.auth,
            pD = await DD.getIdToken(),
            sD = await FD(DD, async function(DD, zD) {
              return ND(DD, "POST", "/v1/accounts:lookup", zD)
            }(wD, {
              idToken: pD
            }));
          VD(null === sD || void 0 === sD ? void 0 : sD.users.length, wD, "internal-error");
          const rD = sD.users[0];
          DD._notifyReloadListener(rD);
          const LD = (null === (zD = rD.providerUserInfo) || void 0 === zD ? void 0 : zD.length) ? rD.providerUserInfo.map((DD => {
            var {
              providerId: zD
            } = DD, wD = KD(DD, ["providerId"]);
            return {
              providerId: zD,
              uid: wD.rawId || "",
              displayName: wD.displayName || null,
              email: wD.email || null,
              phoneNumber: wD.phoneNumber || null,
              photoURL: wD.photoUrl || null
            }
          })) : [];
          const cD = (gD = DD.providerData, RD = LD, [...gD.filter((DD => !RD.some((zD => zD.providerId === DD.providerId)))), ...RD]);
          var gD, RD;
          const AD = DD.isAnonymous,
            UD = !(DD.email && rD.passwordHash) && !(null === cD || void 0 === cD ? void 0 : cD.length),
            fD = !!AD && UD,
            ID = {
              uid: rD.localId,
              displayName: rD.displayName || null,
              photoURL: rD.photoUrl || null,
              email: rD.email || null,
              emailVerified: rD.emailVerified || !1,
              phoneNumber: rD.phoneNumber || null,
              tenantId: rD.tenantId || null,
              providerData: cD,
              metadata: new HD(rD.createdAt, rD.lastLoginAt),
              isAnonymous: fD
            };
          Object.assign(DD, ID)
        }
        async function Dz(DD) {
          const zD = (0, pD.H)(DD);
          await qD(zD), await zD.auth._persistUserIfCurrent(zD), zD.auth._notifyListenersIfCurrent(zD)
        }
        class zz {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(DD) {
            VD(DD.idToken, "internal-error"), VD("undefined" !== typeof DD.idToken, "internal-error"), VD("undefined" !== typeof DD.refreshToken, "internal-error");
            const zD = "expiresIn" in DD && "undefined" !== typeof DD.expiresIn ? Number(DD.expiresIn) : function(DD) {
              const zD = tD(DD);
              return VD(zD, "internal-error"), VD("undefined" !== typeof zD.exp, "internal-error"), VD("undefined" !== typeof zD.iat, "internal-error"), Number(zD.exp) - Number(zD.iat)
            }(DD.idToken);
            this.updateTokensAndExpiration(DD.idToken, DD.refreshToken, zD)
          }
          async getToken(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return VD(!this.accessToken || this.refreshToken, DD, "user-token-expired"), zD || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(DD, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(DD, zD) {
            const {
              accessToken: wD,
              refreshToken: sD,
              expiresIn: KD
            } = await async function(DD, zD) {
              const wD = await ZD(DD, {}, (async () => {
                const wD = (0, pD.Y)({
                    grant_type: "refresh_token",
                    refresh_token: zD
                  }).slice(1),
                  {
                    tokenApiHost: sD,
                    apiKey: KD
                  } = DD.config,
                  rD = kD(DD, sD, "/v1/token", `key=${KD}`),
                  LD = await DD._getAdditionalHeaders();
                return LD["Content-Type"] = "application/x-www-form-urlencoded", SD.fetch()(rD, {
                  method: "POST",
                  headers: LD,
                  body: wD
                })
              }));
              return {
                accessToken: wD.access_token,
                expiresIn: wD.expires_in,
                refreshToken: wD.refresh_token
              }
            }(DD, zD);
            this.updateTokensAndExpiration(wD, sD, Number(KD))
          }
          updateTokensAndExpiration(DD, zD, wD) {
            this.refreshToken = zD || null, this.accessToken = DD || null, this.expirationTime = Date.now() + 1e3 * wD
          }
          static fromJSON(DD, zD) {
            const {
              refreshToken: wD,
              accessToken: pD,
              expirationTime: sD
            } = zD, KD = new zz;
            return wD && (VD("string" === typeof wD, "internal-error", {
              appName: DD
            }), KD.refreshToken = wD), pD && (VD("string" === typeof pD, "internal-error", {
              appName: DD
            }), KD.accessToken = pD), sD && (VD("number" === typeof sD, "internal-error", {
              appName: DD
            }), KD.expirationTime = sD), KD
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(DD) {
            this.accessToken = DD.accessToken, this.refreshToken = DD.refreshToken, this.expirationTime = DD.expirationTime
          }
          _clone() {
            return Object.assign(new zz, this.toJSON())
          }
          _performRefresh() {
            return PD("not implemented")
          }
        }

        function wz(DD, zD) {
          VD("string" === typeof DD || "undefined" === typeof DD, "internal-error", {
            appName: zD
          })
        }
        class pz {
          constructor(DD) {
            var {
              uid: zD,
              auth: wD,
              stsTokenManager: pD
            } = DD, sD = KD(DD, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new YD(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = zD, this.auth = wD, this.stsTokenManager = pD, this.accessToken = pD.accessToken, this.displayName = sD.displayName || null, this.email = sD.email || null, this.emailVerified = sD.emailVerified || !1, this.phoneNumber = sD.phoneNumber || null, this.photoURL = sD.photoURL || null, this.isAnonymous = sD.isAnonymous || !1, this.tenantId = sD.tenantId || null, this.providerData = sD.providerData ? [...sD.providerData] : [], this.metadata = new HD(sD.createdAt || void 0, sD.lastLoginAt || void 0)
          }
          async getIdToken(DD) {
            const zD = await FD(this, this.stsTokenManager.getToken(this.auth, DD));
            return VD(zD, this.auth, "internal-error"), this.accessToken !== zD && (this.accessToken = zD, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), zD
          }
          getIdTokenResult(DD) {
            return uD(this, DD)
          }
          reload() {
            return Dz(this)
          }
          _assign(DD) {
            this !== DD && (VD(this.uid === DD.uid, this.auth, "internal-error"), this.displayName = DD.displayName, this.photoURL = DD.photoURL, this.email = DD.email, this.emailVerified = DD.emailVerified, this.phoneNumber = DD.phoneNumber, this.isAnonymous = DD.isAnonymous, this.tenantId = DD.tenantId, this.providerData = DD.providerData.map((DD => Object.assign({}, DD))), this.metadata._copy(DD.metadata), this.stsTokenManager._assign(DD.stsTokenManager))
          }
          _clone(DD) {
            const zD = new pz(Object.assign(Object.assign({}, this), {
              auth: DD,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return zD.metadata._copy(this.metadata), zD
          }
          _onReload(DD) {
            VD(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = DD, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(DD) {
            this.reloadListener ? this.reloadListener(DD) : this.reloadUserInfo = DD
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wD = !1;
            DD.idToken && DD.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(DD), wD = !0), zD && await qD(this), await this.auth._persistUserIfCurrent(this), wD && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const DD = await this.getIdToken();
            return await FD(this, async function(DD, zD) {
              return ND(DD, "POST", "/v1/accounts:delete", zD)
            }(this.auth, {
              idToken: DD
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
              providerData: this.providerData.map((DD => Object.assign({}, DD))),
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
          static _fromJSON(DD, zD) {
            var wD, pD, sD, KD, rD, LD, cD, gD;
            const RD = null !== (wD = zD.displayName) && void 0 !== wD ? wD : void 0,
              AD = null !== (pD = zD.email) && void 0 !== pD ? pD : void 0,
              UD = null !== (sD = zD.phoneNumber) && void 0 !== sD ? sD : void 0,
              fD = null !== (KD = zD.photoURL) && void 0 !== KD ? KD : void 0,
              ID = null !== (rD = zD.tenantId) && void 0 !== rD ? rD : void 0,
              BD = null !== (LD = zD._redirectEventId) && void 0 !== LD ? LD : void 0,
              GD = null !== (cD = zD.createdAt) && void 0 !== cD ? cD : void 0,
              hD = null !== (gD = zD.lastLoginAt) && void 0 !== gD ? gD : void 0,
              {
                uid: nD,
                emailVerified: MD,
                isAnonymous: OD,
                providerData: JD,
                stsTokenManager: ED
              } = zD;
            VD(nD && ED, DD, "internal-error");
            const QD = zz.fromJSON(this.name, ED);
            VD("string" === typeof nD, DD, "internal-error"), wz(RD, DD.name), wz(AD, DD.name), VD("boolean" === typeof MD, DD, "internal-error"), VD("boolean" === typeof OD, DD, "internal-error"), wz(UD, DD.name), wz(fD, DD.name), wz(ID, DD.name), wz(BD, DD.name), wz(GD, DD.name), wz(hD, DD.name);
            const XD = new pz({
              uid: nD,
              auth: DD,
              email: AD,
              emailVerified: MD,
              displayName: RD,
              isAnonymous: OD,
              photoURL: fD,
              phoneNumber: UD,
              tenantId: ID,
              stsTokenManager: QD,
              createdAt: GD,
              lastLoginAt: hD
            });
            return JD && Array.isArray(JD) && (XD.providerData = JD.map((DD => Object.assign({}, DD)))), BD && (XD._redirectEventId = BD), XD
          }
          static async _fromIdTokenResponse(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const pD = new zz;
            pD.updateFromServerResponse(zD);
            const sD = new pz({
              uid: zD.localId,
              auth: DD,
              stsTokenManager: pD,
              isAnonymous: wD
            });
            return await qD(sD), sD
          }
        }
        const sz = new Map;

        function Kz(DD) {
          CD(DD instanceof Function, "Expected a class definition");
          let zD = sz.get(DD);
          return zD ? (CD(zD instanceof DD, "Instance stored in cache mismatched with class"), zD) : (zD = new DD, sz.set(DD, zD), zD)
        }
        class rz {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(DD, zD) {
            this.storage[DD] = zD
          }
          async _get(DD) {
            const zD = this.storage[DD];
            return void 0 === zD ? null : zD
          }
          async _remove(DD) {
            delete this.storage[DD]
          }
          _addListener(DD, zD) {}
          _removeListener(DD, zD) {}
        }
        rz.type = "NONE";
        const Lz = rz;

        function cz(DD, zD, wD) {
          return `firebase:${DD}:${zD}:${wD}`
        }
        class gz {
          constructor(DD, zD, wD) {
            this.persistence = DD, this.auth = zD, this.userKey = wD;
            const {
              config: pD,
              name: sD
            } = this.auth;
            this.fullUserKey = cz(this.userKey, pD.apiKey, sD), this.fullPersistenceKey = cz("persistence", pD.apiKey, sD), this.boundEventHandler = zD._onStorageEvent.bind(zD), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(DD) {
            return this.persistence._set(this.fullUserKey, DD.toJSON())
          }
          async getCurrentUser() {
            const DD = await this.persistence._get(this.fullUserKey);
            return DD ? pz._fromJSON(this.auth, DD) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(DD) {
            if (this.persistence === DD) return;
            const zD = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = DD, zD ? this.setCurrentUser(zD) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!zD.length) return new gz(Kz(Lz), DD, wD);
            const pD = (await Promise.all(zD.map((async DD => {
              if (await DD._isAvailable()) return DD
            })))).filter((DD => DD));
            let sD = pD[0] || Kz(Lz);
            const KD = cz(wD, DD.config.apiKey, DD.name);
            let rD = null;
            for (const gD of zD) try {
              const zD = await gD._get(KD);
              if (zD) {
                const wD = pz._fromJSON(DD, zD);
                gD !== sD && (rD = wD), sD = gD;
                break
              }
            } catch (cD) {}
            const LD = pD.filter((DD => DD._shouldAllowMigration));
            return sD._shouldAllowMigration && LD.length ? (sD = LD[0], rD && await sD._set(KD, rD.toJSON()), await Promise.all(zD.map((async DD => {
              if (DD !== sD) try {
                await DD._remove(KD)
              } catch (cD) {}
            }))), new gz(sD, DD, wD)) : new gz(sD, DD, wD)
          }
        }

        function Rz(DD) {
          const zD = DD.toLowerCase();
          if (zD.includes("opera/") || zD.includes("opr/") || zD.includes("opios/")) return "Opera";
          if (Iz(zD)) return "IEMobile";
          if (zD.includes("msie") || zD.includes("trident/")) return "IE";
          if (zD.includes("edge/")) return "Edge";
          if (Az(zD)) return "Firefox";
          if (zD.includes("silk/")) return "Silk";
          if (Gz(zD)) return "Blackberry";
          if (hz(zD)) return "Webos";
          if (Uz(zD)) return "Safari";
          if ((zD.includes("chrome/") || fz(zD)) && !zD.includes("edge/")) return "Chrome";
          if (Bz(zD)) return "Android";
          {
            const zD = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              wD = DD.match(zD);
            if (2 === (null === wD || void 0 === wD ? void 0 : wD.length)) return wD[1]
          }
          return "Other"
        }

        function Az() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)();
          return /firefox\//i.test(DD)
        }

        function Uz() {
          const DD = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)()).toLowerCase();
          return DD.includes("safari/") && !DD.includes("chrome/") && !DD.includes("crios/") && !DD.includes("android")
        }

        function fz() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)();
          return /crios\//i.test(DD)
        }

        function Iz() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)();
          return /iemobile/i.test(DD)
        }

        function Bz() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)();
          return /android/i.test(DD)
        }

        function Gz() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)();
          return /blackberry/i.test(DD)
        }

        function hz() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)();
          return /webos/i.test(DD)
        }

        function nz() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)();
          return /iphone|ipad|ipod/i.test(DD) || /macintosh/i.test(DD) && /mobile/i.test(DD)
        }

        function Mz() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)();
          return nz(DD) || Bz(DD) || hz(DD) || Gz(DD) || /windows phone/i.test(DD) || Iz(DD)
        }

        function Oz(DD) {
          let zD, wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (DD) {
            case "Browser":
              zD = Rz((0, pD.I)());
              break;
            case "Worker":
              zD = `${Rz((0,pD.I)())}-${DD}`;
              break;
            default:
              zD = DD
          }
          const KD = wD.length ? wD.join(",") : "FirebaseCore-web";
          return `${zD}/JsCore/${sD.e}/${KD}`
        }
        async function Jz(DD, zD) {
          return ND(DD, "GET", "/v2/recaptchaConfig", WD(DD, zD))
        }

        function Ez(DD) {
          return void 0 !== DD && void 0 !== DD.getResponse
        }

        function Qz(DD) {
          return void 0 !== DD && void 0 !== DD.enterprise
        }
        class Xz {
          constructor(DD) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === DD.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = DD.recaptchaKey.split("/")[3], this.emailPasswordEnabled = DD.recaptchaEnforcementState.some((DD => "EMAIL_PASSWORD_PROVIDER" === DD.provider && "OFF" !== DD.enforcementState))
          }
        }

        function Vz(DD) {
          return new Promise(((zD, wD) => {
            const pD = document.createElement("script");
            pD.setAttribute("src", DD), pD.onload = zD, pD.onerror = DD => {
                const zD = JD("internal-error");
                zD.customData = DD, wD(zD)
              }, pD.type = "text/javascript", pD.charset = "UTF-8",
              function() {
                var DD, zD;
                return null !== (zD = null === (DD = document.getElementsByTagName("head")) || void 0 === DD ? void 0 : DD[0]) && void 0 !== zD ? zD : document
              }().appendChild(pD)
          }))
        }

        function Pz(DD) {
          return `__${DD}${Math.floor(1e6*Math.random())}`
        }
        class Cz {
          constructor(DD) {
            this.type = "recaptcha-enterprise", this.auth = jz(DD)
          }
          async verify() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function wD(zD, wD, pD) {
              const sD = window.grecaptcha;
              Qz(sD) ? sD.enterprise.ready((() => {
                sD.enterprise.execute(zD, {
                  action: DD
                }).then((DD => {
                  wD(DD)
                })).catch((() => {
                  wD("NO_RECAPTCHA")
                }))
              })) : pD(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((DD, pD) => {
              (async function(DD) {
                if (!zD) {
                  if (null == DD.tenantId && null != DD._agentRecaptchaConfig) return DD._agentRecaptchaConfig.siteKey;
                  if (null != DD.tenantId && void 0 !== DD._tenantRecaptchaConfigs[DD.tenantId]) return DD._tenantRecaptchaConfigs[DD.tenantId].siteKey
                }
                return new Promise((async (zD, wD) => {
                  Jz(DD, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((pD => {
                    if (void 0 !== pD.recaptchaKey) {
                      const wD = new Xz(pD);
                      return null == DD.tenantId ? DD._agentRecaptchaConfig = wD : DD._tenantRecaptchaConfigs[DD.tenantId] = wD, zD(wD.siteKey)
                    }
                    wD(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((DD => {
                    wD(DD)
                  }))
                }))
              })(this.auth).then((sD => {
                if (!zD && Qz(window.grecaptcha)) wD(sD, DD, pD);
                else {
                  if ("undefined" === typeof window) return void pD(new Error("RecaptchaVerifier is only supported in browser"));
                  Vz("https://www.google.com/recaptcha/enterprise.js?render=" + sD).then((() => {
                    wD(sD, DD, pD)
                  })).catch((DD => {
                    pD(DD)
                  }))
                }
              })).catch((DD => {
                pD(DD)
              }))
            }))
          }
        }
        async function xz(DD, zD, wD) {
          let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const sD = new Cz(DD);
          let KD;
          try {
            KD = await sD.verify(wD)
          } catch (LD) {
            KD = await sD.verify(wD, !0)
          }
          const rD = Object.assign({}, zD);
          return pD ? Object.assign(rD, {
            captchaResp: KD
          }) : Object.assign(rD, {
            captchaResponse: KD
          }), Object.assign(rD, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(rD, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), rD
        }
        class Tz {
          constructor(DD) {
            this.auth = DD, this.queue = []
          }
          pushCallback(DD, zD) {
            const wD = zD => new Promise(((wD, pD) => {
              try {
                wD(DD(zD))
              } catch (sD) {
                pD(sD)
              }
            }));
            wD.onAbort = zD, this.queue.push(wD);
            const pD = this.queue.length - 1;
            return () => {
              this.queue[pD] = () => Promise.resolve()
            }
          }
          async runMiddleware(DD) {
            if (this.auth.currentUser === DD) return;
            const zD = [];
            try {
              for (const wD of this.queue) await wD(DD), wD.onAbort && zD.push(wD.onAbort)
            } catch (wD) {
              zD.reverse();
              for (const DD of zD) try {
                DD()
              } catch (pD) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === wD || void 0 === wD ? void 0 : wD.message
              })
            }
          }
        }
        class bz {
          constructor(DD, zD, wD, pD) {
            this.app = DD, this.heartbeatServiceProvider = zD, this.appCheckServiceProvider = wD, this.config = pD, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new dz(this), this.idTokenSubscription = new dz(this), this.beforeStateQueue = new Tz(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = GD, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = DD.name, this.clientVersion = pD.sdkClientVersion
          }
          _initializeWithPersistence(DD, zD) {
            return zD && (this._popupRedirectResolver = Kz(zD)), this._initializationPromise = this.queue((async () => {
              var wD, pD;
              if (!this._deleted && (this.persistenceManager = await gz.create(this, DD), !this._deleted)) {
                if (null === (wD = this._popupRedirectResolver) || void 0 === wD ? void 0 : wD._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (sD) {}
                await this.initializeCurrentUser(zD), this.lastNotifiedUid = (null === (pD = this.currentUser) || void 0 === pD ? void 0 : pD.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const DD = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || DD ? this.currentUser && DD && this.currentUser.uid === DD.uid ? (this._currentUser._assign(DD), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(DD, !0) : void 0
          }
          async initializeCurrentUser(DD) {
            var zD;
            const wD = await this.assertedPersistence.getCurrentUser();
            let pD = wD,
              sD = !1;
            if (DD && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const wD = null === (zD = this.redirectUser) || void 0 === zD ? void 0 : zD._redirectEventId,
                KD = null === pD || void 0 === pD ? void 0 : pD._redirectEventId,
                rD = await this.tryRedirectSignIn(DD);
              wD && wD !== KD || !(null === rD || void 0 === rD ? void 0 : rD.user) || (pD = rD.user, sD = !0)
            }
            if (!pD) return this.directlySetCurrentUser(null);
            if (!pD._redirectEventId) {
              if (sD) try {
                await this.beforeStateQueue.runMiddleware(pD)
              } catch (KD) {
                pD = wD, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(KD)))
              }
              return pD ? this.reloadAndSetCurrentUserOrClear(pD) : this.directlySetCurrentUser(null)
            }
            return VD(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === pD._redirectEventId ? this.directlySetCurrentUser(pD) : this.reloadAndSetCurrentUserOrClear(pD)
          }
          async tryRedirectSignIn(DD) {
            let zD = null;
            try {
              zD = await this._popupRedirectResolver._completeRedirectFn(this, DD, !0)
            } catch (wD) {
              await this._setRedirectUser(null)
            }
            return zD
          }
          async reloadAndSetCurrentUserOrClear(DD) {
            try {
              await qD(DD)
            } catch (zD) {
              if ("auth/network-request-failed" !== (null === zD || void 0 === zD ? void 0 : zD.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(DD)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const DD = navigator;
              return DD.languages && DD.languages[0] || DD.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(DD) {
            const zD = DD ? (0, pD.H)(DD) : null;
            return zD && VD(zD.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(zD && zD._clone(this))
          }
          async _updateCurrentUser(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return DD && VD(this.tenantId === DD.tenantId, this, "tenant-id-mismatch"), zD || await this.beforeStateQueue.runMiddleware(DD), this.queue((async () => {
              await this.directlySetCurrentUser(DD), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(DD) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Kz(DD))
            }))
          }
          async initializeRecaptchaConfig() {
            const DD = await Jz(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              zD = new Xz(DD);
            if (null == this.tenantId ? this._agentRecaptchaConfig = zD : this._tenantRecaptchaConfigs[this.tenantId] = zD, zD.emailPasswordEnabled) {
              new Cz(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(DD) {
            this._errorFactory = new pD.c("auth", "Firebase", DD())
          }
          onAuthStateChanged(DD, zD, wD) {
            return this.registerStateListener(this.authStateSubscription, DD, zD, wD)
          }
          beforeAuthStateChanged(DD, zD) {
            return this.beforeStateQueue.pushCallback(DD, zD)
          }
          onIdTokenChanged(DD, zD, wD) {
            return this.registerStateListener(this.idTokenSubscription, DD, zD, wD)
          }
          toJSON() {
            var DD;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (DD = this._currentUser) || void 0 === DD ? void 0 : DD.toJSON()
            }
          }
          async _setRedirectUser(DD, zD) {
            const wD = await this.getOrInitRedirectPersistenceManager(zD);
            return null === DD ? wD.removeCurrentUser() : wD.setCurrentUser(DD)
          }
          async getOrInitRedirectPersistenceManager(DD) {
            if (!this.redirectPersistenceManager) {
              const zD = DD && Kz(DD) || this._popupRedirectResolver;
              VD(zD, this, "argument-error"), this.redirectPersistenceManager = await gz.create(this, [Kz(zD._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(DD) {
            var zD, wD;
            return this._isInitialized && await this.queue((async () => {})), (null === (zD = this._currentUser) || void 0 === zD ? void 0 : zD._redirectEventId) === DD ? this._currentUser : (null === (wD = this.redirectUser) || void 0 === wD ? void 0 : wD._redirectEventId) === DD ? this.redirectUser : null
          }
          async _persistUserIfCurrent(DD) {
            if (DD === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(DD)))
          }
          _notifyListenersIfCurrent(DD) {
            DD === this.currentUser && this.notifyAuthListeners()
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
            var DD, zD;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const wD = null !== (zD = null === (DD = this.currentUser) || void 0 === DD ? void 0 : DD.uid) && void 0 !== zD ? zD : null;
            this.lastNotifiedUid !== wD && (this.lastNotifiedUid = wD, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(DD, zD, wD, pD) {
            if (this._deleted) return () => {};
            const sD = "function" === typeof zD ? zD : zD.next.bind(zD),
              KD = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return VD(KD, this, "internal-error"), KD.then((() => sD(this.currentUser))), "function" === typeof zD ? DD.addObserver(zD, wD, pD) : DD.addObserver(zD)
          }
          async directlySetCurrentUser(DD) {
            this.currentUser && this.currentUser !== DD && this._currentUser._stopProactiveRefresh(), DD && this.isProactiveRefreshEnabled && DD._startProactiveRefresh(), this.currentUser = DD, DD ? await this.assertedPersistence.setCurrentUser(DD) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(DD) {
            return this.operations = this.operations.then(DD, DD), this.operations
          }
          get assertedPersistence() {
            return VD(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(DD) {
            DD && !this.frameworks.includes(DD) && (this.frameworks.push(DD), this.frameworks.sort(), this.clientVersion = Oz(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var DD;
            const zD = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (zD["X-Firebase-gmpid"] = this.app.options.appId);
            const wD = await (null === (DD = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === DD ? void 0 : DD.getHeartbeatsHeader());
            wD && (zD["X-Firebase-Client"] = wD);
            const pD = await this._getAppCheckToken();
            return pD && (zD["X-Firebase-AppCheck"] = pD), zD
          }
          async _getAppCheckToken() {
            var DD;
            const zD = await (null === (DD = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === DD ? void 0 : DD.getToken());
            return (null === zD || void 0 === zD ? void 0 : zD.error) && function(DD) {
              if (nD.logLevel <= rD.e.WARN) {
                for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
                nD.warn(`Auth (${sD.e}): ${DD}`, ...wD)
              }
            }(`Error while retrieving App Check token: ${zD.error}`), null === zD || void 0 === zD ? void 0 : zD.token
          }
        }

        function jz(DD) {
          return (0, pD.H)(DD)
        }
        class dz {
          constructor(DD) {
            this.auth = DD, this.observer = null, this.addObserver = (0, pD.r)((DD => this.observer = DD))
          }
          get next() {
            return VD(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Sz(DD, zD) {
          const wD = (0, sD.v)(DD, "auth");
          if (wD.isInitialized()) {
            const DD = wD.getImmediate(),
              sD = wD.getOptions();
            if ((0, pD.u)(sD, null !== zD && void 0 !== zD ? zD : {})) return DD;
            OD(DD, "already-initialized")
          }
          return wD.initialize({
            options: zD
          })
        }

        function iz(DD, zD, wD) {
          const pD = jz(DD);
          VD(pD._canInitEmulator, pD, "emulator-config-failed"), VD(/^https?:\/\//.test(zD), pD, "invalid-emulator-scheme");
          const sD = !!(null === wD || void 0 === wD ? void 0 : wD.disableWarnings),
            KD = lz(zD),
            {
              host: rD,
              port: LD
            } = function(DD) {
              const zD = lz(DD),
                wD = /(\/\/)?([^?#/]+)/.exec(DD.substr(zD.length));
              if (!wD) return {
                host: "",
                port: null
              };
              const pD = wD[2].split("@").pop() || "",
                sD = /^(\[[^\]]+\])(:|$)/.exec(pD);
              if (sD) {
                const DD = sD[1];
                return {
                  host: DD,
                  port: Wz(pD.substr(DD.length + 1))
                }
              } {
                const [DD, zD] = pD.split(":");
                return {
                  host: DD,
                  port: Wz(zD)
                }
              }
            }(zD),
            cD = null === LD ? "" : `:${LD}`;
          pD.config.emulator = {
            url: `${KD}//${rD}${cD}/`
          }, pD.settings.appVerificationDisabledForTesting = !0, pD.emulatorConfig = Object.freeze({
            host: rD,
            port: LD,
            protocol: KD.replace(":", ""),
            options: Object.freeze({
              disableWarnings: sD
            })
          }), sD || function() {
            function DD() {
              const DD = document.createElement("p"),
                zD = DD.style;
              DD.innerText = "Running in emulator mode. Do not use with production credentials.", zD.position = "fixed", zD.width = "100%", zD.backgroundColor = "#ffffff", zD.border = ".1em solid #000000", zD.color = "#b50000", zD.bottom = "0px", zD.left = "0px", zD.margin = "0px", zD.zIndex = "10000", zD.textAlign = "center", DD.classList.add("firebase-emulator-warning"), document.body.appendChild(DD)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", DD) : DD())
          }()
        }

        function lz(DD) {
          const zD = DD.indexOf(":");
          return zD < 0 ? "" : DD.substr(0, zD + 1)
        }

        function Wz(DD) {
          if (!DD) return null;
          const zD = Number(DD);
          return isNaN(zD) ? null : zD
        }
        class Nz {
          constructor(DD, zD) {
            this.providerId = DD, this.signInMethod = zD
          }
          toJSON() {
            return PD("not implemented")
          }
          _getIdTokenResponse(DD) {
            return PD("not implemented")
          }
          _linkToIdToken(DD, zD) {
            return PD("not implemented")
          }
          _getReauthenticationResolver(DD) {
            return PD("not implemented")
          }
        }
        async function Zz(DD, zD) {
          return ND(DD, "POST", "/v1/accounts:resetPassword", WD(DD, zD))
        }
        async function yz(DD, zD) {
          return ND(DD, "POST", "/v1/accounts:update", zD)
        }
        async function kz(DD, zD) {
          return yD(DD, "POST", "/v1/accounts:signInWithPassword", WD(DD, zD))
        }
        async function mz(DD, zD) {
          return ND(DD, "POST", "/v1/accounts:sendOobCode", WD(DD, zD))
        }
        async function ez(DD, zD) {
          return mz(DD, zD)
        }
        async function oz(DD, zD) {
          return mz(DD, zD)
        }
        class az extends Nz {
          constructor(DD, zD, wD) {
            let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", wD), this._email = DD, this._password = zD, this._tenantId = pD
          }
          static _fromEmailAndPassword(DD, zD) {
            return new az(DD, zD, "password")
          }
          static _fromEmailAndCode(DD, zD) {
            return new az(DD, zD, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(DD) {
            const zD = "string" === typeof DD ? JSON.parse(DD) : DD;
            if ((null === zD || void 0 === zD ? void 0 : zD.email) && (null === zD || void 0 === zD ? void 0 : zD.password)) {
              if ("password" === zD.signInMethod) return this._fromEmailAndPassword(zD.email, zD.password);
              if ("emailLink" === zD.signInMethod) return this._fromEmailAndCode(zD.email, zD.password, zD.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(DD) {
            var zD;
            switch (this.signInMethod) {
              case "password":
                const wD = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (zD = DD._getRecaptchaConfig()) || void 0 === zD ? void 0 : zD.emailPasswordEnabled) {
                  const zD = await xz(DD, wD, "signInWithPassword");
                  return kz(DD, zD)
                }
                return kz(DD, wD).catch((async zD => {
                  if ("auth/missing-recaptcha-token" === zD.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const zD = await xz(DD, wD, "signInWithPassword");
                    return kz(DD, zD)
                  }
                  return Promise.reject(zD)
                }));
              case "emailLink":
                return async function(DD, zD) {
                  return yD(DD, "POST", "/v1/accounts:signInWithEmailLink", WD(DD, zD))
                }(DD, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                OD(DD, "internal-error")
            }
          }
          async _linkToIdToken(DD, zD) {
            switch (this.signInMethod) {
              case "password":
                return yz(DD, {
                  idToken: zD,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(DD, zD) {
                  return yD(DD, "POST", "/v1/accounts:signInWithEmailLink", WD(DD, zD))
                }(DD, {
                  idToken: zD,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                OD(DD, "internal-error")
            }
          }
          _getReauthenticationResolver(DD) {
            return this._getIdTokenResponse(DD)
          }
        }
        async function uz(DD, zD) {
          return yD(DD, "POST", "/v1/accounts:signInWithIdp", WD(DD, zD))
        }
        class vz extends Nz {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(DD) {
            const zD = new vz(DD.providerId, DD.signInMethod);
            return DD.idToken || DD.accessToken ? (DD.idToken && (zD.idToken = DD.idToken), DD.accessToken && (zD.accessToken = DD.accessToken), DD.nonce && !DD.pendingToken && (zD.nonce = DD.nonce), DD.pendingToken && (zD.pendingToken = DD.pendingToken)) : DD.oauthToken && DD.oauthTokenSecret ? (zD.accessToken = DD.oauthToken, zD.secret = DD.oauthTokenSecret) : OD("argument-error"), zD
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
          static fromJSON(DD) {
            const zD = "string" === typeof DD ? JSON.parse(DD) : DD,
              {
                providerId: wD,
                signInMethod: pD
              } = zD,
              sD = KD(zD, ["providerId", "signInMethod"]);
            if (!wD || !pD) return null;
            const rD = new vz(wD, pD);
            return rD.idToken = sD.idToken || void 0, rD.accessToken = sD.accessToken || void 0, rD.secret = sD.secret, rD.nonce = sD.nonce, rD.pendingToken = sD.pendingToken || null, rD
          }
          _getIdTokenResponse(DD) {
            return uz(DD, this.buildRequest())
          }
          _linkToIdToken(DD, zD) {
            const wD = this.buildRequest();
            return wD.idToken = zD, uz(DD, wD)
          }
          _getReauthenticationResolver(DD) {
            const zD = this.buildRequest();
            return zD.autoCreate = !1, uz(DD, zD)
          }
          buildRequest() {
            const DD = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) DD.pendingToken = this.pendingToken;
            else {
              const zD = {};
              this.idToken && (zD.id_token = this.idToken), this.accessToken && (zD.access_token = this.accessToken), this.secret && (zD.oauth_token_secret = this.secret), zD.providerId = this.providerId, this.nonce && !this.pendingToken && (zD.nonce = this.nonce), DD.postBody = (0, pD.Y)(zD)
            }
            return DD
          }
        }
        const tz = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Fz extends Nz {
          constructor(DD) {
            super("phone", "phone"), this.params = DD
          }
          static _fromVerification(DD, zD) {
            return new Fz({
              verificationId: DD,
              verificationCode: zD
            })
          }
          static _fromTokenResponse(DD, zD) {
            return new Fz({
              phoneNumber: DD,
              temporaryProof: zD
            })
          }
          _getIdTokenResponse(DD) {
            return async function(DD, zD) {
              return yD(DD, "POST", "/v1/accounts:signInWithPhoneNumber", WD(DD, zD))
            }(DD, this._makeVerificationRequest())
          }
          _linkToIdToken(DD, zD) {
            return async function(DD, zD) {
              const wD = await yD(DD, "POST", "/v1/accounts:signInWithPhoneNumber", WD(DD, zD));
              if (wD.temporaryProof) throw eD(DD, "account-exists-with-different-credential", wD);
              return wD
            }(DD, Object.assign({
              idToken: zD
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(DD) {
            return async function(DD, zD) {
              return yD(DD, "POST", "/v1/accounts:signInWithPhoneNumber", WD(DD, Object.assign(Object.assign({}, zD), {
                operation: "REAUTH"
              })), tz)
            }(DD, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: DD,
              phoneNumber: zD,
              verificationId: wD,
              verificationCode: pD
            } = this.params;
            return DD && zD ? {
              temporaryProof: DD,
              phoneNumber: zD
            } : {
              sessionInfo: wD,
              code: pD
            }
          }
          toJSON() {
            const DD = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (DD.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (DD.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (DD.verificationCode = this.params.verificationCode), this.params.verificationId && (DD.verificationId = this.params.verificationId), DD
          }
          static fromJSON(DD) {
            "string" === typeof DD && (DD = JSON.parse(DD));
            const {
              verificationId: zD,
              verificationCode: wD,
              phoneNumber: pD,
              temporaryProof: sD
            } = DD;
            return wD || zD || pD || sD ? new Fz({
              verificationId: zD,
              verificationCode: wD,
              phoneNumber: pD,
              temporaryProof: sD
            }) : null
          }
        }
        class Yz {
          constructor(DD) {
            var zD, wD, sD, KD, rD, LD;
            const cD = (0, pD.X)((0, pD.y)(DD)),
              gD = null !== (zD = cD.apiKey) && void 0 !== zD ? zD : null,
              RD = null !== (wD = cD.oobCode) && void 0 !== wD ? wD : null,
              AD = function(DD) {
                switch (DD) {
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
              }(null !== (sD = cD.mode) && void 0 !== sD ? sD : null);
            VD(gD && RD && AD, "argument-error"), this.apiKey = gD, this.operation = AD, this.code = RD, this.continueUrl = null !== (KD = cD.continueUrl) && void 0 !== KD ? KD : null, this.languageCode = null !== (rD = cD.languageCode) && void 0 !== rD ? rD : null, this.tenantId = null !== (LD = cD.tenantId) && void 0 !== LD ? LD : null
          }
          static parseLink(DD) {
            const zD = function(DD) {
              const zD = (0, pD.X)((0, pD.y)(DD)).link,
                wD = zD ? (0, pD.X)((0, pD.y)(zD)).deep_link_id : null,
                sD = (0, pD.X)((0, pD.y)(DD)).deep_link_id;
              return (sD ? (0, pD.X)((0, pD.y)(sD)).link : null) || sD || wD || zD || DD
            }(DD);
            try {
              return new Yz(zD)
            } catch (wD) {
              return null
            }
          }
        }

        function Hz(DD) {
          return Yz.parseLink(DD)
        }
        class qz {
          constructor() {
            this.providerId = qz.PROVIDER_ID
          }
          static credential(DD, zD) {
            return az._fromEmailAndPassword(DD, zD)
          }
          static credentialWithLink(DD, zD) {
            const wD = Yz.parseLink(zD);
            return VD(wD, "argument-error"), az._fromEmailAndCode(DD, wD.code, wD.tenantId)
          }
        }
        qz.PROVIDER_ID = "password", qz.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", qz.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Dw {
          constructor(DD) {
            this.providerId = DD, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(DD) {
            this.defaultLanguageCode = DD
          }
          setCustomParameters(DD) {
            return this.customParameters = DD, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class zw extends Dw {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(DD) {
            return this.scopes.includes(DD) || this.scopes.push(DD), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class ww extends zw {
          static credentialFromJSON(DD) {
            const zD = "string" === typeof DD ? JSON.parse(DD) : DD;
            return VD("providerId" in zD && "signInMethod" in zD, "argument-error"), vz._fromParams(zD)
          }
          credential(DD) {
            return this._credential(Object.assign(Object.assign({}, DD), {
              nonce: DD.rawNonce
            }))
          }
          _credential(DD) {
            return VD(DD.idToken || DD.accessToken, "argument-error"), vz._fromParams(Object.assign(Object.assign({}, DD), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(DD) {
            return ww.oauthCredentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return ww.oauthCredentialFromTaggedObject(DD.customData || {})
          }
          static oauthCredentialFromTaggedObject(DD) {
            let {
              _tokenResponse: zD
            } = DD;
            if (!zD) return null;
            const {
              oauthIdToken: wD,
              oauthAccessToken: pD,
              oauthTokenSecret: sD,
              pendingToken: KD,
              nonce: rD,
              providerId: LD
            } = zD;
            if (!pD && !sD && !wD && !KD) return null;
            if (!LD) return null;
            try {
              return new ww(LD)._credential({
                idToken: wD,
                accessToken: pD,
                nonce: rD,
                pendingToken: KD
              })
            } catch (cD) {
              return null
            }
          }
        }
        class pw extends zw {
          constructor() {
            super("facebook.com")
          }
          static credential(DD) {
            return vz._fromParams({
              providerId: pw.PROVIDER_ID,
              signInMethod: pw.FACEBOOK_SIGN_IN_METHOD,
              accessToken: DD
            })
          }
          static credentialFromResult(DD) {
            return pw.credentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return pw.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: zD
            } = DD;
            if (!zD || !("oauthAccessToken" in zD)) return null;
            if (!zD.oauthAccessToken) return null;
            try {
              return pw.credential(zD.oauthAccessToken)
            } catch (wD) {
              return null
            }
          }
        }
        pw.FACEBOOK_SIGN_IN_METHOD = "facebook.com", pw.PROVIDER_ID = "facebook.com";
        class sw extends zw {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(DD, zD) {
            return vz._fromParams({
              providerId: sw.PROVIDER_ID,
              signInMethod: sw.GOOGLE_SIGN_IN_METHOD,
              idToken: DD,
              accessToken: zD
            })
          }
          static credentialFromResult(DD) {
            return sw.credentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return sw.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: zD
            } = DD;
            if (!zD) return null;
            const {
              oauthIdToken: wD,
              oauthAccessToken: pD
            } = zD;
            if (!wD && !pD) return null;
            try {
              return sw.credential(wD, pD)
            } catch (sD) {
              return null
            }
          }
        }
        sw.GOOGLE_SIGN_IN_METHOD = "google.com", sw.PROVIDER_ID = "google.com";
        class Kw extends zw {
          constructor() {
            super("github.com")
          }
          static credential(DD) {
            return vz._fromParams({
              providerId: Kw.PROVIDER_ID,
              signInMethod: Kw.GITHUB_SIGN_IN_METHOD,
              accessToken: DD
            })
          }
          static credentialFromResult(DD) {
            return Kw.credentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return Kw.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: zD
            } = DD;
            if (!zD || !("oauthAccessToken" in zD)) return null;
            if (!zD.oauthAccessToken) return null;
            try {
              return Kw.credential(zD.oauthAccessToken)
            } catch (wD) {
              return null
            }
          }
        }
        Kw.GITHUB_SIGN_IN_METHOD = "github.com", Kw.PROVIDER_ID = "github.com";
        class rw extends Nz {
          constructor(DD, zD) {
            super(DD, DD), this.pendingToken = zD
          }
          _getIdTokenResponse(DD) {
            return uz(DD, this.buildRequest())
          }
          _linkToIdToken(DD, zD) {
            const wD = this.buildRequest();
            return wD.idToken = zD, uz(DD, wD)
          }
          _getReauthenticationResolver(DD) {
            const zD = this.buildRequest();
            return zD.autoCreate = !1, uz(DD, zD)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(DD) {
            const zD = "string" === typeof DD ? JSON.parse(DD) : DD,
              {
                providerId: wD,
                signInMethod: pD,
                pendingToken: sD
              } = zD;
            return wD && pD && sD && wD === pD ? new rw(wD, sD) : null
          }
          static _create(DD, zD) {
            return new rw(DD, zD)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Lw extends Dw {
          constructor(DD) {
            VD(DD.startsWith("saml."), "argument-error"), super(DD)
          }
          static credentialFromResult(DD) {
            return Lw.samlCredentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return Lw.samlCredentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromJSON(DD) {
            const zD = rw.fromJSON(DD);
            return VD(zD, "argument-error"), zD
          }
          static samlCredentialFromTaggedObject(DD) {
            let {
              _tokenResponse: zD
            } = DD;
            if (!zD) return null;
            const {
              pendingToken: wD,
              providerId: pD
            } = zD;
            if (!wD || !pD) return null;
            try {
              return rw._create(pD, wD)
            } catch (sD) {
              return null
            }
          }
        }
        class gw extends zw {
          constructor() {
            super("twitter.com")
          }
          static credential(DD, zD) {
            return vz._fromParams({
              providerId: gw.PROVIDER_ID,
              signInMethod: gw.TWITTER_SIGN_IN_METHOD,
              oauthToken: DD,
              oauthTokenSecret: zD
            })
          }
          static credentialFromResult(DD) {
            return gw.credentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return gw.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: zD
            } = DD;
            if (!zD) return null;
            const {
              oauthAccessToken: wD,
              oauthTokenSecret: pD
            } = zD;
            if (!wD || !pD) return null;
            try {
              return gw.credential(wD, pD)
            } catch (sD) {
              return null
            }
          }
        }
        async function Rw(DD, zD) {
          return yD(DD, "POST", "/v1/accounts:signUp", WD(DD, zD))
        }
        gw.TWITTER_SIGN_IN_METHOD = "twitter.com", gw.PROVIDER_ID = "twitter.com";
        class Aw {
          constructor(DD) {
            this.user = DD.user, this.providerId = DD.providerId, this._tokenResponse = DD._tokenResponse, this.operationType = DD.operationType
          }
          static async _fromIdTokenResponse(DD, zD, wD) {
            let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const sD = await pz._fromIdTokenResponse(DD, wD, pD),
              KD = Uw(wD);
            return new Aw({
              user: sD,
              providerId: KD,
              _tokenResponse: wD,
              operationType: zD
            })
          }
          static async _forOperation(DD, zD, wD) {
            await DD._updateTokensIfNecessary(wD, !0);
            const pD = Uw(wD);
            return new Aw({
              user: DD,
              providerId: pD,
              _tokenResponse: wD,
              operationType: zD
            })
          }
        }

        function Uw(DD) {
          return DD.providerId ? DD.providerId : "phoneNumber" in DD ? "phone" : null
        }
        async function fw(DD) {
          var zD;
          const wD = jz(DD);
          if (await wD._initializationPromise, null === (zD = wD.currentUser) || void 0 === zD ? void 0 : zD.isAnonymous) return new Aw({
            user: wD.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const pD = await Rw(wD, {
              returnSecureToken: !0
            }),
            sD = await Aw._fromIdTokenResponse(wD, "signIn", pD, !0);
          return await wD._updateCurrentUser(sD.user), sD
        }
        class Iw extends pD.e {
          constructor(DD, zD, wD, pD) {
            var sD;
            super(zD.code, zD.message), this.operationType = wD, this.user = pD, Object.setPrototypeOf(this, Iw.prototype), this.customData = {
              appName: DD.name,
              tenantId: null !== (sD = DD.tenantId) && void 0 !== sD ? sD : void 0,
              _serverResponse: zD.customData._serverResponse,
              operationType: wD
            }
          }
          static _fromErrorAndOperation(DD, zD, wD, pD) {
            return new Iw(DD, zD, wD, pD)
          }
        }

        function Bw(DD, zD, wD, pD) {
          return ("reauthenticate" === zD ? wD._getReauthenticationResolver(DD) : wD._getIdTokenResponse(DD)).catch((wD => {
            if ("auth/multi-factor-auth-required" === wD.code) throw Iw._fromErrorAndOperation(DD, wD, zD, pD);
            throw wD
          }))
        }

        function Gw(DD) {
          return new Set(DD.map((DD => {
            let {
              providerId: zD
            } = DD;
            return zD
          })).filter((DD => !!DD)))
        }
        async function hw(DD, zD) {
          const wD = (0, pD.H)(DD);
          await Mw(!0, wD, zD);
          const {
            providerUserInfo: sD
          } = await async function(DD, zD) {
            return ND(DD, "POST", "/v1/accounts:update", zD)
          }(wD.auth, {
            idToken: await wD.getIdToken(),
            deleteProvider: [zD]
          }), KD = Gw(sD || []);
          return wD.providerData = wD.providerData.filter((DD => KD.has(DD.providerId))), KD.has("phone") || (wD.phoneNumber = null), await wD.auth._persistUserIfCurrent(wD), wD
        }
        async function nw(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const pD = await FD(DD, zD._linkToIdToken(DD.auth, await DD.getIdToken()), wD);
          return Aw._forOperation(DD, "link", pD)
        }
        async function Mw(DD, zD, wD) {
          await qD(zD);
          const pD = !1 === DD ? "provider-already-linked" : "no-such-provider";
          VD(Gw(zD.providerData).has(wD) === DD, zD.auth, pD)
        }
        async function Ow(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: pD
          } = DD, sD = "reauthenticate";
          try {
            const KD = await FD(DD, Bw(pD, sD, zD, DD), wD);
            VD(KD.idToken, pD, "internal-error");
            const rD = tD(KD.idToken);
            VD(rD, pD, "internal-error");
            const {
              sub: LD
            } = rD;
            return VD(DD.uid === LD, pD, "user-mismatch"), Aw._forOperation(DD, sD, KD)
          } catch (KD) {
            throw "auth/user-not-found" === (null === KD || void 0 === KD ? void 0 : KD.code) && OD(pD, "user-mismatch"), KD
          }
        }
        async function Jw(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const pD = "signIn",
            sD = await Bw(DD, pD, zD),
            KD = await Aw._fromIdTokenResponse(DD, pD, sD);
          return wD || await DD._updateCurrentUser(KD.user), KD
        }
        async function Ew(DD, zD) {
          return Jw(jz(DD), zD)
        }
        async function Qw(DD, zD) {
          const wD = (0, pD.H)(DD);
          return await Mw(!1, wD, zD.providerId), nw(wD, zD)
        }
        async function Xw(DD, zD) {
          return Ow((0, pD.H)(DD), zD)
        }
        async function Vw(DD, zD) {
          const wD = jz(DD),
            pD = await async function(DD, zD) {
              return yD(DD, "POST", "/v1/accounts:signInWithCustomToken", WD(DD, zD))
            }(wD, {
              token: zD,
              returnSecureToken: !0
            }), sD = await Aw._fromIdTokenResponse(wD, "signIn", pD);
          return await wD._updateCurrentUser(sD.user), sD
        }
        class Pw {
          constructor(DD, zD) {
            this.factorId = DD, this.uid = zD.mfaEnrollmentId, this.enrollmentTime = new Date(zD.enrolledAt).toUTCString(), this.displayName = zD.displayName
          }
          static _fromServerResponse(DD, zD) {
            return "phoneInfo" in zD ? Cw._fromServerResponse(DD, zD) : "totpInfo" in zD ? xw._fromServerResponse(DD, zD) : OD(DD, "internal-error")
          }
        }
        class Cw extends Pw {
          constructor(DD) {
            super("phone", DD), this.phoneNumber = DD.phoneInfo
          }
          static _fromServerResponse(DD, zD) {
            return new Cw(zD)
          }
        }
        class xw extends Pw {
          constructor(DD) {
            super("totp", DD)
          }
          static _fromServerResponse(DD, zD) {
            return new xw(zD)
          }
        }

        function Tw(DD, zD, wD) {
          var pD;
          VD((null === (pD = wD.url) || void 0 === pD ? void 0 : pD.length) > 0, DD, "invalid-continue-uri"), VD("undefined" === typeof wD.dynamicLinkDomain || wD.dynamicLinkDomain.length > 0, DD, "invalid-dynamic-link-domain"), zD.continueUrl = wD.url, zD.dynamicLinkDomain = wD.dynamicLinkDomain, zD.canHandleCodeInApp = wD.handleCodeInApp, wD.iOS && (VD(wD.iOS.bundleId.length > 0, DD, "missing-ios-bundle-id"), zD.iOSBundleId = wD.iOS.bundleId), wD.android && (VD(wD.android.packageName.length > 0, DD, "missing-android-pkg-name"), zD.androidInstallApp = wD.android.installApp, zD.androidMinimumVersionCode = wD.android.minimumVersion, zD.androidPackageName = wD.android.packageName)
        }
        async function bw(DD, zD, wD) {
          var pD;
          const sD = jz(DD),
            KD = {
              requestType: "PASSWORD_RESET",
              email: zD,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (pD = sD._getRecaptchaConfig()) || void 0 === pD ? void 0 : pD.emailPasswordEnabled) {
            const DD = await xz(sD, KD, "getOobCode", !0);
            wD && Tw(sD, DD, wD), await ez(sD, DD)
          } else wD && Tw(sD, KD, wD), await ez(sD, KD).catch((async DD => {
            if ("auth/missing-recaptcha-token" !== DD.code) return Promise.reject(DD);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const DD = await xz(sD, KD, "getOobCode", !0);
              wD && Tw(sD, DD, wD), await ez(sD, DD)
            }
          }))
        }
        async function jw(DD, zD, wD) {
          await Zz((0, pD.H)(DD), {
            oobCode: zD,
            newPassword: wD
          })
        }
        async function dw(DD, zD) {
          await async function(DD, zD) {
            return ND(DD, "POST", "/v1/accounts:update", WD(DD, zD))
          }((0, pD.H)(DD), {
            oobCode: zD
          })
        }
        async function Sw(DD, zD) {
          const wD = (0, pD.H)(DD),
            sD = await Zz(wD, {
              oobCode: zD
            }),
            KD = sD.requestType;
          switch (VD(KD, wD, "internal-error"), KD) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              VD(sD.newEmail, wD, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              VD(sD.mfaInfo, wD, "internal-error");
            default:
              VD(sD.email, wD, "internal-error")
          }
          let rD = null;
          return sD.mfaInfo && (rD = Pw._fromServerResponse(jz(wD), sD.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === sD.requestType ? sD.newEmail : sD.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === sD.requestType ? sD.email : sD.newEmail) || null,
              multiFactorInfo: rD
            },
            operation: KD
          }
        }
        async function iw(DD, zD) {
          const {
            data: wD
          } = await Sw((0, pD.H)(DD), zD);
          return wD.email
        }
        async function lw(DD, zD, wD) {
          var pD;
          const sD = jz(DD),
            KD = {
              returnSecureToken: !0,
              email: zD,
              password: wD,
              clientType: "CLIENT_TYPE_WEB"
            };
          let rD;
          if (null === (pD = sD._getRecaptchaConfig()) || void 0 === pD ? void 0 : pD.emailPasswordEnabled) {
            const DD = await xz(sD, KD, "signUpPassword");
            rD = Rw(sD, DD)
          } else rD = Rw(sD, KD).catch((async DD => {
            if ("auth/missing-recaptcha-token" === DD.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const DD = await xz(sD, KD, "signUpPassword");
              return Rw(sD, DD)
            }
            return Promise.reject(DD)
          }));
          const LD = await rD.catch((DD => Promise.reject(DD))),
            cD = await Aw._fromIdTokenResponse(sD, "signIn", LD);
          return await sD._updateCurrentUser(cD.user), cD
        }

        function Ww(DD, zD, wD) {
          return Ew((0, pD.H)(DD), qz.credential(zD, wD))
        }
        async function Nw(DD, zD, wD) {
          var pD;
          const sD = jz(DD),
            KD = {
              requestType: "EMAIL_SIGNIN",
              email: zD,
              clientType: "CLIENT_TYPE_WEB"
            };

          function rD(DD, zD) {
            VD(zD.handleCodeInApp, sD, "argument-error"), zD && Tw(sD, DD, zD)
          }
          if (null === (pD = sD._getRecaptchaConfig()) || void 0 === pD ? void 0 : pD.emailPasswordEnabled) {
            const DD = await xz(sD, KD, "getOobCode", !0);
            rD(DD, wD), await oz(sD, DD)
          } else rD(KD, wD), await oz(sD, KD).catch((async DD => {
            if ("auth/missing-recaptcha-token" !== DD.code) return Promise.reject(DD);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const DD = await xz(sD, KD, "getOobCode", !0);
              rD(DD, wD), await oz(sD, DD)
            }
          }))
        }

        function Zw(DD, zD) {
          const wD = Yz.parseLink(zD);
          return "EMAIL_SIGNIN" === (null === wD || void 0 === wD ? void 0 : wD.operation)
        }
        async function yw(DD, zD, wD) {
          const sD = (0, pD.H)(DD),
            KD = qz.credentialWithLink(zD, wD || xD());
          return VD(KD._tenantId === (sD.tenantId || null), sD, "tenant-id-mismatch"), Ew(sD, KD)
        }
        async function kw(DD, zD) {
          const wD = {
              identifier: zD,
              continueUri: TD() ? xD() : "http://localhost"
            },
            {
              signinMethods: sD
            } = await async function(DD, zD) {
              return ND(DD, "POST", "/v1/accounts:createAuthUri", WD(DD, zD))
            }((0, pD.H)(DD), wD);
          return sD || []
        }
        async function mw(DD, zD) {
          const wD = (0, pD.H)(DD),
            sD = {
              requestType: "VERIFY_EMAIL",
              idToken: await DD.getIdToken()
            };
          zD && Tw(wD.auth, sD, zD);
          const {
            email: KD
          } = await async function(DD, zD) {
            return mz(DD, zD)
          }(wD.auth, sD);
          KD !== DD.email && await DD.reload()
        }
        async function ew(DD, zD, wD) {
          const sD = (0, pD.H)(DD),
            KD = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await DD.getIdToken(),
              newEmail: zD
            };
          wD && Tw(sD.auth, KD, wD);
          const {
            email: rD
          } = await async function(DD, zD) {
            return mz(DD, zD)
          }(sD.auth, KD);
          rD !== DD.email && await DD.reload()
        }
        async function ow(DD, zD) {
          let {
            displayName: wD,
            photoURL: sD
          } = zD;
          if (void 0 === wD && void 0 === sD) return;
          const KD = (0, pD.H)(DD),
            rD = {
              idToken: await KD.getIdToken(),
              displayName: wD,
              photoUrl: sD,
              returnSecureToken: !0
            },
            LD = await FD(KD, async function(DD, zD) {
              return ND(DD, "POST", "/v1/accounts:update", zD)
            }(KD.auth, rD));
          KD.displayName = LD.displayName || null, KD.photoURL = LD.photoUrl || null;
          const cD = KD.providerData.find((DD => {
            let {
              providerId: zD
            } = DD;
            return "password" === zD
          }));
          cD && (cD.displayName = KD.displayName, cD.photoURL = KD.photoURL), await KD._updateTokensIfNecessary(LD)
        }

        function aw(DD, zD) {
          return vw((0, pD.H)(DD), zD, null)
        }

        function uw(DD, zD) {
          return vw((0, pD.H)(DD), null, zD)
        }
        async function vw(DD, zD, wD) {
          const {
            auth: pD
          } = DD, sD = {
            idToken: await DD.getIdToken(),
            returnSecureToken: !0
          };
          zD && (sD.email = zD), wD && (sD.password = wD);
          const KD = await FD(DD, yz(pD, sD));
          await DD._updateTokensIfNecessary(KD, !0)
        }
        class tw {
          constructor(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = DD, this.providerId = zD, this.profile = wD
          }
        }
        class Fw extends tw {
          constructor(DD, zD, wD, pD) {
            super(DD, zD, wD), this.username = pD
          }
        }
        class Yw extends tw {
          constructor(DD, zD) {
            super(DD, "facebook.com", zD)
          }
        }
        class Hw extends Fw {
          constructor(DD, zD) {
            super(DD, "github.com", zD, "string" === typeof(null === zD || void 0 === zD ? void 0 : zD.login) ? null === zD || void 0 === zD ? void 0 : zD.login : null)
          }
        }
        class qw extends tw {
          constructor(DD, zD) {
            super(DD, "google.com", zD)
          }
        }
        class Dp extends Fw {
          constructor(DD, zD, wD) {
            super(DD, "twitter.com", zD, wD)
          }
        }

        function zp(DD) {
          const {
            user: zD,
            _tokenResponse: wD
          } = DD;
          return zD.isAnonymous && !wD ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(DD) {
            var zD, wD;
            if (!DD) return null;
            const {
              providerId: pD
            } = DD, sD = DD.rawUserInfo ? JSON.parse(DD.rawUserInfo) : {}, KD = DD.isNewUser || "identitytoolkit#SignupNewUserResponse" === DD.kind;
            if (!pD && (null === DD || void 0 === DD ? void 0 : DD.idToken)) {
              const pD = null === (wD = null === (zD = tD(DD.idToken)) || void 0 === zD ? void 0 : zD.firebase) || void 0 === wD ? void 0 : wD.sign_in_provider;
              if (pD) return new tw(KD, "anonymous" !== pD && "custom" !== pD ? pD : null)
            }
            if (!pD) return null;
            switch (pD) {
              case "facebook.com":
                return new Yw(KD, sD);
              case "github.com":
                return new Hw(KD, sD);
              case "google.com":
                return new qw(KD, sD);
              case "twitter.com":
                return new Dp(KD, sD, DD.screenName || null);
              case "custom":
              case "anonymous":
                return new tw(KD, null);
              default:
                return new tw(KD, pD, sD)
            }
          }(wD)
        }

        function wp(DD, zD) {
          return (0, pD.H)(DD).setPersistence(zD)
        }

        function pp(DD) {
          return jz(DD).initializeRecaptchaConfig()
        }

        function sp(DD, zD, wD, sD) {
          return (0, pD.H)(DD).onIdTokenChanged(zD, wD, sD)
        }

        function Kp(DD, zD, wD) {
          return (0, pD.H)(DD).beforeAuthStateChanged(zD, wD)
        }

        function rp(DD, zD, wD, sD) {
          return (0, pD.H)(DD).onAuthStateChanged(zD, wD, sD)
        }

        function Lp(DD) {
          (0, pD.H)(DD).useDeviceLanguage()
        }

        function cp(DD, zD) {
          return (0, pD.H)(DD).updateCurrentUser(zD)
        }

        function gp(DD) {
          return (0, pD.H)(DD).signOut()
        }
        async function Rp(DD) {
          return (0, pD.H)(DD).delete()
        }
        class Ap {
          constructor(DD, zD, wD) {
            this.type = DD, this.credential = zD, this.auth = wD
          }
          static _fromIdtoken(DD, zD) {
            return new Ap("enroll", DD, zD)
          }
          static _fromMfaPendingCredential(DD) {
            return new Ap("signin", DD)
          }
          toJSON() {
            const DD = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [DD]: this.credential
              }
            }
          }
          static fromJSON(DD) {
            var zD, wD;
            if (null === DD || void 0 === DD ? void 0 : DD.multiFactorSession) {
              if (null === (zD = DD.multiFactorSession) || void 0 === zD ? void 0 : zD.pendingCredential) return Ap._fromMfaPendingCredential(DD.multiFactorSession.pendingCredential);
              if (null === (wD = DD.multiFactorSession) || void 0 === wD ? void 0 : wD.idToken) return Ap._fromIdtoken(DD.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Up {
          constructor(DD, zD, wD) {
            this.session = DD, this.hints = zD, this.signInResolver = wD
          }
          static _fromError(DD, zD) {
            const wD = jz(DD),
              pD = zD.customData._serverResponse,
              sD = (pD.mfaInfo || []).map((DD => Pw._fromServerResponse(wD, DD)));
            VD(pD.mfaPendingCredential, wD, "internal-error");
            const KD = Ap._fromMfaPendingCredential(pD.mfaPendingCredential);
            return new Up(KD, sD, (async DD => {
              const sD = await DD._process(wD, KD);
              delete pD.mfaInfo, delete pD.mfaPendingCredential;
              const rD = Object.assign(Object.assign({}, pD), {
                idToken: sD.idToken,
                refreshToken: sD.refreshToken
              });
              switch (zD.operationType) {
                case "signIn":
                  const DD = await Aw._fromIdTokenResponse(wD, zD.operationType, rD);
                  return await wD._updateCurrentUser(DD.user), DD;
                case "reauthenticate":
                  return VD(zD.user, wD, "internal-error"), Aw._forOperation(zD.user, zD.operationType, rD);
                default:
                  OD(wD, "internal-error")
              }
            }))
          }
          async resolveSignIn(DD) {
            const zD = DD;
            return this.signInResolver(zD)
          }
        }

        function fp(DD, zD) {
          var wD;
          const sD = (0, pD.H)(DD),
            KD = zD;
          return VD(zD.customData.operationType, sD, "argument-error"), VD(null === (wD = KD.customData._serverResponse) || void 0 === wD ? void 0 : wD.mfaPendingCredential, sD, "argument-error"), Up._fromError(sD, KD)
        }
        class Ip {
          constructor(DD) {
            this.user = DD, this.enrolledFactors = [], DD._onReload((zD => {
              zD.mfaInfo && (this.enrolledFactors = zD.mfaInfo.map((zD => Pw._fromServerResponse(DD.auth, zD))))
            }))
          }
          static _fromUser(DD) {
            return new Ip(DD)
          }
          async getSession() {
            return Ap._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(DD, zD) {
            const wD = DD,
              pD = await this.getSession(),
              sD = await FD(this.user, wD._process(this.user.auth, pD, zD));
            return await this.user._updateTokensIfNecessary(sD), this.user.reload()
          }
          async unenroll(DD) {
            const zD = "string" === typeof DD ? DD : DD.uid,
              wD = await this.user.getIdToken();
            try {
              const DD = await FD(this.user, (pD = this.user.auth, sD = {
                idToken: wD,
                mfaEnrollmentId: zD
              }, ND(pD, "POST", "/v2/accounts/mfaEnrollment:withdraw", WD(pD, sD))));
              this.enrolledFactors = this.enrolledFactors.filter((DD => {
                let {
                  uid: wD
                } = DD;
                return wD !== zD
              })), await this.user._updateTokensIfNecessary(DD), await this.user.reload()
            } catch (KD) {
              throw KD
            }
            var pD, sD
          }
        }
        const Bp = new WeakMap;

        function Gp(DD) {
          const zD = (0, pD.H)(DD);
          return Bp.has(zD) || Bp.set(zD, Ip._fromUser(zD)), Bp.get(zD)
        }
        const hp = "__sak";
        class np {
          constructor(DD, zD) {
            this.storageRetriever = DD, this.type = zD
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(hp, "1"), this.storage.removeItem(hp), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (DD) {
              return Promise.resolve(!1)
            }
          }
          _set(DD, zD) {
            return this.storage.setItem(DD, JSON.stringify(zD)), Promise.resolve()
          }
          _get(DD) {
            const zD = this.storage.getItem(DD);
            return Promise.resolve(zD ? JSON.parse(zD) : null)
          }
          _remove(DD) {
            return this.storage.removeItem(DD), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Mp extends np {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (DD, zD) => this.onStorageEvent(DD, zD), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const DD = (0, pD.I)();
              return Uz(DD) || nz(DD)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (DD) {
                return !1
              }
            }(), this.fallbackToPolling = Mz(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(DD) {
            for (const zD of Object.keys(this.listeners)) {
              const wD = this.storage.getItem(zD),
                pD = this.localCache[zD];
              wD !== pD && DD(zD, pD, wD)
            }
          }
          onStorageEvent(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!DD.key) return void this.forAllChangedKeys(((DD, zD, wD) => {
              this.notifyListeners(DD, wD)
            }));
            const wD = DD.key;
            if (zD ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const pD = this.storage.getItem(wD);
              if (DD.newValue !== pD) null !== DD.newValue ? this.storage.setItem(wD, DD.newValue) : this.storage.removeItem(wD);
              else if (this.localCache[wD] === DD.newValue && !zD) return
            }
            const sD = () => {
                const DD = this.storage.getItem(wD);
                (zD || this.localCache[wD] !== DD) && this.notifyListeners(wD, DD)
              },
              KD = this.storage.getItem(wD);
            (0, pD.P)() && 10 === document.documentMode && KD !== DD.newValue && DD.newValue !== DD.oldValue ? setTimeout(sD, 10) : sD()
          }
          notifyListeners(DD, zD) {
            this.localCache[DD] = zD;
            const wD = this.listeners[DD];
            if (wD)
              for (const pD of Array.from(wD)) pD(zD ? JSON.parse(zD) : zD)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((DD, zD, wD) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: DD,
                  oldValue: zD,
                  newValue: wD
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
          _addListener(DD, zD) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[DD] || (this.listeners[DD] = new Set, this.localCache[DD] = this.storage.getItem(DD)), this.listeners[DD].add(zD)
          }
          _removeListener(DD, zD) {
            this.listeners[DD] && (this.listeners[DD].delete(zD), 0 === this.listeners[DD].size && delete this.listeners[DD]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(DD, zD) {
            await super._set(DD, zD), this.localCache[DD] = JSON.stringify(zD)
          }
          async _get(DD) {
            const zD = await super._get(DD);
            return this.localCache[DD] = JSON.stringify(zD), zD
          }
          async _remove(DD) {
            await super._remove(DD), delete this.localCache[DD]
          }
        }
        Mp.type = "LOCAL";
        const Op = Mp;
        class Jp extends np {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(DD, zD) {}
          _removeListener(DD, zD) {}
        }
        Jp.type = "SESSION";
        const Ep = Jp;
        class Qp {
          constructor(DD) {
            this.eventTarget = DD, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(DD) {
            const zD = this.receivers.find((zD => zD.isListeningto(DD)));
            if (zD) return zD;
            const wD = new Qp(DD);
            return this.receivers.push(wD), wD
          }
          isListeningto(DD) {
            return this.eventTarget === DD
          }
          async handleEvent(DD) {
            const zD = DD,
              {
                eventId: wD,
                eventType: pD,
                data: sD
              } = zD.data,
              KD = this.handlersMap[pD];
            if (!(null === KD || void 0 === KD ? void 0 : KD.size)) return;
            zD.ports[0].postMessage({
              status: "ack",
              eventId: wD,
              eventType: pD
            });
            const rD = Array.from(KD).map((async DD => DD(zD.origin, sD))),
              LD = await
            function(DD) {
              return Promise.all(DD.map((async DD => {
                try {
                  return {
                    fulfilled: !0,
                    value: await DD
                  }
                } catch (zD) {
                  return {
                    fulfilled: !1,
                    reason: zD
                  }
                }
              })))
            }(rD);
            zD.ports[0].postMessage({
              status: "done",
              eventId: wD,
              eventType: pD,
              response: LD
            })
          }
          _subscribe(DD, zD) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[DD] || (this.handlersMap[DD] = new Set), this.handlersMap[DD].add(zD)
          }
          _unsubscribe(DD, zD) {
            this.handlersMap[DD] && zD && this.handlersMap[DD].delete(zD), zD && 0 !== this.handlersMap[DD].size || delete this.handlersMap[DD], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function Xp() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            wD = "";
          for (let pD = 0; pD < zD; pD++) wD += Math.floor(10 * Math.random());
          return DD + wD
        }
        Qp.receivers = [];
        class Vp {
          constructor(DD) {
            this.target = DD, this.handlers = new Set
          }
          removeMessageHandler(DD) {
            DD.messageChannel && (DD.messageChannel.port1.removeEventListener("message", DD.bJ), DD.messageChannel.port1.close()), this.handlers.delete(DD)
          }
          async _send(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const pD = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!pD) throw new Error("connection_unavailable");
            let sD, KD;
            return new Promise(((rD, LD) => {
              const cD = Xp("", 20);
              pD.port1.start();
              const gD = setTimeout((() => {
                LD(new Error("unsupported_event"))
              }), wD);
              KD = {
                messageChannel: pD,
                bJ(DD) {
                  const zD = DD;
                  if (zD.data.eventId === cD) switch (zD.data.status) {
                    case "ack":
                      clearTimeout(gD), sD = setTimeout((() => {
                        LD(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(sD), rD(zD.data.response);
                      break;
                    default:
                      clearTimeout(gD), clearTimeout(sD), LD(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(KD), pD.port1.addEventListener("message", KD.bJ), this.target.postMessage({
                eventType: DD,
                eventId: cD,
                data: zD
              }, [pD.port2])
            })).finally((() => {
              KD && this.removeMessageHandler(KD)
            }))
          }
        }

        function Pp() {
          return window
        }

        function Cp() {
          return "undefined" !== typeof Pp().WorkerGlobalScope && "function" === typeof Pp().importScripts
        }
        const xp = "firebaseLocalStorageDb",
          Tp = "firebaseLocalStorage",
          bp = "fbase_key";
        class jp {
          constructor(DD) {
            this.request = DD
          }
          toPromise() {
            return new Promise(((DD, zD) => {
              this.request.addEventListener("success", (() => {
                DD(this.request.result)
              })), this.request.addEventListener("error", (() => {
                zD(this.request.error)
              }))
            }))
          }
        }

        function dp(DD, zD) {
          return DD.transaction([Tp], zD ? "readwrite" : "readonly").objectStore(Tp)
        }

        function Sp() {
          const DD = indexedDB.open(xp, 1);
          return new Promise(((zD, wD) => {
            DD.addEventListener("error", (() => {
              wD(DD.error)
            })), DD.addEventListener("upgradeneeded", (() => {
              const zD = DD.result;
              try {
                zD.createObjectStore(Tp, {
                  keyPath: bp
                })
              } catch (pD) {
                wD(pD)
              }
            })), DD.addEventListener("success", (async () => {
              const wD = DD.result;
              wD.objectStoreNames.contains(Tp) ? zD(wD) : (wD.close(), await
                function() {
                  const DD = indexedDB.deleteDatabase(xp);
                  return new jp(DD).toPromise()
                }(), zD(await Sp()))
            }))
          }))
        }
        async function ip(DD, zD, wD) {
          const pD = dp(DD, !0).put({
            [bp]: zD,
            value: wD
          });
          return new jp(pD).toPromise()
        }

        function lp(DD, zD) {
          const wD = dp(DD, !0).delete(zD);
          return new jp(wD).toPromise()
        }
        class Wp {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Sp()), this.db
          }
          async _withRetries(DD) {
            let zD = 0;
            for (;;) try {
              const zD = await this._openDb();
              return await DD(zD)
            } catch (wD) {
              if (zD++ > 3) throw wD;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Cp() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = Qp._getInstance(Cp() ? self : null), this.receiver._subscribe("keyChanged", (async (DD, zD) => ({
              keyProcessed: (await this._poll()).includes(zD.key)
            }))), this.receiver._subscribe("ping", (async (DD, zD) => ["keyChanged"]))
          }
          async initializeSender() {
            var DD, zD;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (DD) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new Vp(this.activeServiceWorker);
            const wD = await this.sender._send("ping", {}, 800);
            wD && (null === (DD = wD[0]) || void 0 === DD ? void 0 : DD.fulfilled) && (null === (zD = wD[0]) || void 0 === zD ? void 0 : zD.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(DD) {
            if (this.sender && this.activeServiceWorker && function() {
                var DD;
                return (null === (DD = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === DD ? void 0 : DD.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: DD
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (zD) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const DD = await Sp();
              return await ip(DD, hp, "1"), await lp(DD, hp), !0
            } catch (DD) {}
            return !1
          }
          async _withPendingWrite(DD) {
            this.pendingWrites++;
            try {
              await DD()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(DD, zD) {
            return this._withPendingWrite((async () => (await this._withRetries((wD => ip(wD, DD, zD))), this.localCache[DD] = zD, this.notifyServiceWorker(DD))))
          }
          async _get(DD) {
            const zD = await this._withRetries((zD => async function(DD, zD) {
              const wD = dp(DD, !1).get(zD),
                pD = await new jp(wD).toPromise();
              return void 0 === pD ? null : pD.value
            }(zD, DD)));
            return this.localCache[DD] = zD, zD
          }
          async _remove(DD) {
            return this._withPendingWrite((async () => (await this._withRetries((zD => lp(zD, DD))), delete this.localCache[DD], this.notifyServiceWorker(DD))))
          }
          async _poll() {
            const DD = await this._withRetries((DD => {
              const zD = dp(DD, !1).getAll();
              return new jp(zD).toPromise()
            }));
            if (!DD) return [];
            if (0 !== this.pendingWrites) return [];
            const zD = [],
              wD = new Set;
            for (const {
                fbase_key: pD,
                value: sD
              }
              of DD) wD.add(pD), JSON.stringify(this.localCache[pD]) !== JSON.stringify(sD) && (this.notifyListeners(pD, sD), zD.push(pD));
            for (const pD of Object.keys(this.localCache)) this.localCache[pD] && !wD.has(pD) && (this.notifyListeners(pD, null), zD.push(pD));
            return zD
          }
          notifyListeners(DD, zD) {
            this.localCache[DD] = zD;
            const wD = this.listeners[DD];
            if (wD)
              for (const pD of Array.from(wD)) pD(zD)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(DD, zD) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[DD] || (this.listeners[DD] = new Set, this._get(DD)), this.listeners[DD].add(zD)
          }
          _removeListener(DD, zD) {
            this.listeners[DD] && (this.listeners[DD].delete(zD), 0 === this.listeners[DD].size && delete this.listeners[DD]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Wp.type = "LOCAL";
        const Np = Wp;
        const Zp = 1e12;
        class yp {
          constructor(DD) {
            this.auth = DD, this.counter = Zp, this._widgets = new Map
          }
          render(DD, zD) {
            const wD = this.counter;
            return this._widgets.set(wD, new kp(DD, this.auth.name, zD || {})), this.counter++, wD
          }
          reset(DD) {
            var zD;
            const wD = DD || Zp;
            null === (zD = this._widgets.get(wD)) || void 0 === zD || zD.delete(), this._widgets.delete(wD)
          }
          getResponse(DD) {
            var zD;
            const wD = DD || Zp;
            return (null === (zD = this._widgets.get(wD)) || void 0 === zD ? void 0 : zD.getResponse()) || ""
          }
          async execute(DD) {
            var zD;
            const wD = DD || Zp;
            return null === (zD = this._widgets.get(wD)) || void 0 === zD || zD.execute(), ""
          }
        }
        class kp {
          constructor(DD, zD, wD) {
            this.params = wD, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const pD = "string" === typeof DD ? document.getElementById(DD) : DD;
            VD(pD, "argument-error", {
              appName: zD
            }), this.container = pD, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(DD) {
                const zD = [],
                  wD = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let pD = 0; pD < DD; pD++) zD.push(wD.charAt(Math.floor(Math.random() * wD.length)));
                return zD.join("")
              }(50);
              const {
                callback: DD,
                "expired-callback": zD
              } = this.params;
              if (DD) try {
                DD(this.responseToken)
              } catch (wD) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, zD) try {
                  zD()
                } catch (wD) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const mp = Pz("rcb"),
          ep = new jD(3e4, 6e4);
        class op {
          constructor() {
            var DD;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (DD = Pp().grecaptcha) || void 0 === DD ? void 0 : DD.render)
          }
          load(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return VD(function(DD) {
              return DD.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(DD)
            }(zD), DD, "argument-error"), this.shouldResolveImmediately(zD) && Ez(Pp().grecaptcha) ? Promise.resolve(Pp().grecaptcha) : new Promise(((wD, sD) => {
              const KD = Pp().setTimeout((() => {
                sD(JD(DD, "network-request-failed"))
              }), ep.get());
              Pp()[mp] = () => {
                Pp().clearTimeout(KD), delete Pp()[mp];
                const pD = Pp().grecaptcha;
                if (!pD || !Ez(pD)) return void sD(JD(DD, "internal-error"));
                const rD = pD.render;
                pD.render = (DD, zD) => {
                  const wD = rD(DD, zD);
                  return this.counter++, wD
                }, this.hostLanguage = zD, wD(pD)
              };
              Vz(`https://www.google.com/recaptcha/api.js??${(0,pD.Y)({onload:mp,render:"explicit",hl:zD})}`).catch((() => {
                clearTimeout(KD), sD(JD(DD, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(DD) {
            var zD;
            return !!(null === (zD = Pp().grecaptcha) || void 0 === zD ? void 0 : zD.render) && (DD === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class ap {
          async load(DD) {
            return new yp(DD)
          }
          clearedOneInstance() {}
        }
        const vp = "recaptcha",
          tp = {
            theme: "light",
            type: "image"
          };
        class Fp {
          constructor(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, tp),
              wD = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = zD, this.type = vp, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = jz(wD), this.isInvisible = "invisible" === this.parameters.size, VD("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const pD = "string" === typeof DD ? document.getElementById(DD) : DD;
            VD(pD, this.auth, "argument-error"), this.container = pD, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new ap : new op, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const DD = await this.render(),
              zD = this.getAssertedRecaptcha(),
              wD = zD.getResponse(DD);
            return wD || new Promise((wD => {
              const pD = DD => {
                DD && (this.tokenChangeListeners.delete(pD), wD(DD))
              };
              this.tokenChangeListeners.add(pD), this.isInvisible && zD.execute(DD)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (DD) {
              return Promise.reject(DD)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((DD => {
              throw this.renderPromise = null, DD
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((DD => {
              this.container.removeChild(DD)
            }))
          }
          validateStartingState() {
            VD(!this.parameters.sitekey, this.auth, "argument-error"), VD(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), VD("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(DD) {
            return zD => {
              if (this.tokenChangeListeners.forEach((DD => DD(zD))), "function" === typeof DD) DD(zD);
              else if ("string" === typeof DD) {
                const wD = Pp()[DD];
                "function" === typeof wD && wD(zD)
              }
            }
          }
          assertNotDestroyed() {
            VD(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let DD = this.container;
              if (!this.isInvisible) {
                const zD = document.createElement("div");
                DD.appendChild(zD), DD = zD
              }
              this.widgetId = this.getAssertedRecaptcha().render(DD, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            VD(TD() && !Cp(), this.auth, "internal-error"), await
            function() {
              let DD = null;
              return new Promise((zD => {
                "complete" !== document.readyState ? (DD = () => zD(), window.addEventListener("load", DD)) : zD()
              })).catch((zD => {
                throw DD && window.removeEventListener("load", DD), zD
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const DD = await async function(DD) {
              return (await ND(DD, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            VD(DD, this.auth, "internal-error"), this.parameters.sitekey = DD
          }
          getAssertedRecaptcha() {
            return VD(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Yp {
          constructor(DD, zD) {
            this.verificationId = DD, this.onConfirmation = zD
          }
          confirm(DD) {
            const zD = Fz._fromVerification(this.verificationId, DD);
            return this.onConfirmation(zD)
          }
        }
        async function Hp(DD, zD, wD) {
          const sD = jz(DD),
            KD = await zs(sD, zD, (0, pD.H)(wD));
          return new Yp(KD, (DD => Ew(sD, DD)))
        }
        async function qp(DD, zD, wD) {
          const sD = (0, pD.H)(DD);
          await Mw(!1, sD, "phone");
          const KD = await zs(sD.auth, zD, (0, pD.H)(wD));
          return new Yp(KD, (DD => Qw(sD, DD)))
        }
        async function Ds(DD, zD, wD) {
          const sD = (0, pD.H)(DD),
            KD = await zs(sD.auth, zD, (0, pD.H)(wD));
          return new Yp(KD, (DD => Xw(sD, DD)))
        }
        async function zs(DD, zD, wD) {
          var pD;
          const sD = await wD.verify();
          try {
            let KD;
            if (VD("string" === typeof sD, DD, "argument-error"), VD(wD.type === vp, DD, "argument-error"), KD = "string" === typeof zD ? {
                phoneNumber: zD
              } : zD, "session" in KD) {
              const zD = KD.session;
              if ("phoneNumber" in KD) {
                VD("enroll" === zD.type, DD, "internal-error");
                const wD = await
                function(DD, zD) {
                  return ND(DD, "POST", "/v2/accounts/mfaEnrollment:start", WD(DD, zD))
                }(DD, {
                  idToken: zD.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: KD.phoneNumber,
                    recaptchaToken: sD
                  }
                });
                return wD.phoneSessionInfo.sessionInfo
              } {
                VD("signin" === zD.type, DD, "internal-error");
                const wD = (null === (pD = KD.multiFactorHint) || void 0 === pD ? void 0 : pD.uid) || KD.multiFactorUid;
                VD(wD, DD, "missing-multi-factor-info");
                const rD = await
                function(DD, zD) {
                  return ND(DD, "POST", "/v2/accounts/mfaSignIn:start", WD(DD, zD))
                }(DD, {
                  mfaPendingCredential: zD.credential,
                  mfaEnrollmentId: wD,
                  phoneSignInInfo: {
                    recaptchaToken: sD
                  }
                });
                return rD.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: zD
              } = await async function(DD, zD) {
                return ND(DD, "POST", "/v1/accounts:sendVerificationCode", WD(DD, zD))
              }(DD, {
                phoneNumber: KD.phoneNumber,
                recaptchaToken: sD
              });
              return zD
            }
          } finally {
            wD._reset()
          }
        }
        async function ws(DD, zD) {
          await nw((0, pD.H)(DD), zD)
        }
        class ps {
          constructor(DD) {
            this.providerId = ps.PROVIDER_ID, this.auth = jz(DD)
          }
          verifyPhoneNumber(DD, zD) {
            return zs(this.auth, DD, (0, pD.H)(zD))
          }
          static credential(DD, zD) {
            return Fz._fromVerification(DD, zD)
          }
          static credentialFromResult(DD) {
            const zD = DD;
            return ps.credentialFromTaggedObject(zD)
          }
          static credentialFromError(DD) {
            return ps.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: zD
            } = DD;
            if (!zD) return null;
            const {
              phoneNumber: wD,
              temporaryProof: pD
            } = zD;
            return wD && pD ? Fz._fromTokenResponse(wD, pD) : null
          }
        }

        function ss(DD, zD) {
          return zD ? Kz(zD) : (VD(DD._popupRedirectResolver, DD, "argument-error"), DD._popupRedirectResolver)
        }
        ps.PROVIDER_ID = "phone", ps.PHONE_SIGN_IN_METHOD = "phone";
        class Ks extends Nz {
          constructor(DD) {
            super("custom", "custom"), this.params = DD
          }
          _getIdTokenResponse(DD) {
            return uz(DD, this._buildIdpRequest())
          }
          _linkToIdToken(DD, zD) {
            return uz(DD, this._buildIdpRequest(zD))
          }
          _getReauthenticationResolver(DD) {
            return uz(DD, this._buildIdpRequest())
          }
          _buildIdpRequest(DD) {
            const zD = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return DD && (zD.idToken = DD), zD
          }
        }

        function rs(DD) {
          return Jw(DD.auth, new Ks(DD), DD.bypassAuthState)
        }

        function Ls(DD) {
          const {
            auth: zD,
            user: wD
          } = DD;
          return VD(wD, zD, "internal-error"), Ow(wD, new Ks(DD), DD.bypassAuthState)
        }
        async function cs(DD) {
          const {
            auth: zD,
            user: wD
          } = DD;
          return VD(wD, zD, "internal-error"), nw(wD, new Ks(DD), DD.bypassAuthState)
        }
        class gs {
          constructor(DD, zD, wD, pD) {
            let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = DD, this.resolver = wD, this.user = pD, this.bypassAuthState = sD, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(zD) ? zD : [zD]
          }
          execute() {
            return new Promise((async (DD, zD) => {
              this.pendingPromise = {
                resolve: DD,
                reject: zD
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (wD) {
                this.reject(wD)
              }
            }))
          }
          async onAuthEvent(DD) {
            const {
              urlResponse: zD,
              sessionId: wD,
              postBody: pD,
              tenantId: sD,
              error: KD,
              type: rD
            } = DD;
            if (KD) return void this.reject(KD);
            const LD = {
              auth: this.auth,
              requestUri: zD,
              sessionId: wD,
              tenantId: sD || void 0,
              postBody: pD || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(rD)(LD))
            } catch (cD) {
              this.reject(cD)
            }
          }
          onError(DD) {
            this.reject(DD)
          }
          getIdpTask(DD) {
            switch (DD) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return rs;
              case "linkViaPopup":
              case "linkViaRedirect":
                return cs;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Ls;
              default:
                OD(this.auth, "internal-error")
            }
          }
          resolve(DD) {
            CD(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(DD), this.unregisterAndCleanUp()
          }
          reject(DD) {
            CD(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(DD), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const Rs = new jD(2e3, 1e4);
        async function As(DD, zD, wD) {
          const pD = jz(DD);
          QD(DD, zD, Dw);
          const sD = ss(pD, wD);
          return new Is(pD, "signInViaPopup", zD, sD).executeNotNull()
        }
        async function Us(DD, zD, wD) {
          const sD = (0, pD.H)(DD);
          QD(sD.auth, zD, Dw);
          const KD = ss(sD.auth, wD);
          return new Is(sD.auth, "reauthViaPopup", zD, KD, sD).executeNotNull()
        }
        async function fs(DD, zD, wD) {
          const sD = (0, pD.H)(DD);
          QD(sD.auth, zD, Dw);
          const KD = ss(sD.auth, wD);
          return new Is(sD.auth, "linkViaPopup", zD, KD, sD).executeNotNull()
        }
        class Is extends gs {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, pD, sD), this.provider = wD, this.authWindow = null, this.pollId = null, Is.currentPopupAction && Is.currentPopupAction.cancel(), Is.currentPopupAction = this
          }
          async executeNotNull() {
            const DD = await this.execute();
            return VD(DD, this.auth, "internal-error"), DD
          }
          async onExecution() {
            CD(1 === this.filter.length, "Popup operations only handle one event");
            const DD = Xp();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], DD), this.authWindow.associatedEvent = DD, this.resolver._originValidation(this.auth).catch((DD => {
              this.reject(DD)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (DD => {
              DD || this.reject(JD(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var DD;
            return (null === (DD = this.authWindow) || void 0 === DD ? void 0 : DD.associatedEvent) || null
          }
          cancel() {
            this.reject(JD(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Is.currentPopupAction = null
          }
          pollUserCancellation() {
            const DD = () => {
              var zD, wD;
              (null === (wD = null === (zD = this.authWindow) || void 0 === zD ? void 0 : zD.window) || void 0 === wD ? void 0 : wD.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(JD(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(DD, Rs.get())
            };
            DD()
          }
        }
        Is.currentPopupAction = null;
        const Bs = "pendingRedirect",
          Gs = new Map;
        class hs extends gs {
          constructor(DD, zD) {
            super(DD, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], zD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let DD = Gs.get(this.auth._key());
            if (!DD) {
              try {
                const zD = await async function(DD, zD) {
                  const wD = Es(zD),
                    pD = Os(DD);
                  if (!await pD._isAvailable()) return !1;
                  const sD = "true" === await pD._get(wD);
                  return await pD._remove(wD), sD
                }(this.resolver, this.auth) ? await super.execute() : null;
                DD = () => Promise.resolve(zD)
              } catch (zD) {
                DD = () => Promise.reject(zD)
              }
              Gs.set(this.auth._key(), DD)
            }
            return this.bypassAuthState || Gs.set(this.auth._key(), (() => Promise.resolve(null))), DD()
          }
          async onAuthEvent(DD) {
            if ("signInViaRedirect" === DD.type) return super.onAuthEvent(DD);
            if ("unknown" !== DD.type) {
              if (DD.eventId) {
                const zD = await this.auth._redirectUserForId(DD.eventId);
                if (zD) return this.user = zD, super.onAuthEvent(DD);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function ns(DD, zD) {
          return Os(DD)._set(Es(zD), "true")
        }

        function Ms(DD, zD) {
          Gs.set(DD._key(), zD)
        }

        function Os(DD) {
          return Kz(DD._redirectPersistence)
        }

        function Es(DD) {
          return cz(Bs, DD.config.apiKey, DD.name)
        }

        function Qs(DD, zD, wD) {
          return async function(DD, zD, wD) {
            const pD = jz(DD);
            QD(DD, zD, Dw), await pD._initializationPromise;
            const sD = ss(pD, wD);
            return await ns(sD, pD), sD._openRedirect(pD, zD, "signInViaRedirect")
          }(DD, zD, wD)
        }

        function Xs(DD, zD, wD) {
          return async function(DD, zD, wD) {
            const sD = (0, pD.H)(DD);
            QD(sD.auth, zD, Dw), await sD.auth._initializationPromise;
            const KD = ss(sD.auth, wD);
            await ns(KD, sD.auth);
            const rD = await xs(sD);
            return KD._openRedirect(sD.auth, zD, "reauthViaRedirect", rD)
          }(DD, zD, wD)
        }

        function Vs(DD, zD, wD) {
          return async function(DD, zD, wD) {
            const sD = (0, pD.H)(DD);
            QD(sD.auth, zD, Dw), await sD.auth._initializationPromise;
            const KD = ss(sD.auth, wD);
            await Mw(!1, sD, zD.providerId), await ns(KD, sD.auth);
            const rD = await xs(sD);
            return KD._openRedirect(sD.auth, zD, "linkViaRedirect", rD)
          }(DD, zD, wD)
        }
        async function Ps(DD, zD) {
          return await jz(DD)._initializationPromise, Cs(DD, zD, !1)
        }
        async function Cs(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const pD = jz(DD),
            sD = ss(pD, zD),
            KD = new hs(pD, sD, wD),
            rD = await KD.execute();
          return rD && !wD && (delete rD.user._redirectEventId, await pD._persistUserIfCurrent(rD.user), await pD._setRedirectUser(null, zD)), rD
        }
        async function xs(DD) {
          const zD = Xp(`${DD.uid}:::`);
          return DD._redirectEventId = zD, await DD.auth._setRedirectUser(DD), await DD.auth._persistUserIfCurrent(DD), zD
        }
        class Ts {
          constructor(DD) {
            this.auth = DD, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(DD) {
            this.consumers.add(DD), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, DD) && (this.sendToConsumer(this.queuedRedirectEvent, DD), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(DD) {
            this.consumers.delete(DD)
          }
          onEvent(DD) {
            if (this.hasEventBeenHandled(DD)) return !1;
            let zD = !1;
            return this.consumers.forEach((wD => {
              this.isEventForConsumer(DD, wD) && (zD = !0, this.sendToConsumer(DD, wD), this.saveEventToCache(DD))
            })), this.hasHandledPotentialRedirect || ! function(DD) {
              switch (DD.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return ds(DD);
                default:
                  return !1
              }
            }(DD) || (this.hasHandledPotentialRedirect = !0, zD || (this.queuedRedirectEvent = DD, zD = !0)), zD
          }
          sendToConsumer(DD, zD) {
            var wD;
            if (DD.error && !ds(DD)) {
              const pD = (null === (wD = DD.error.code) || void 0 === wD ? void 0 : wD.split("auth/")[1]) || "internal-error";
              zD.onError(JD(this.auth, pD))
            } else zD.onAuthEvent(DD)
          }
          isEventForConsumer(DD, zD) {
            const wD = null === zD.eventId || !!DD.eventId && DD.eventId === zD.eventId;
            return zD.filter.includes(DD.type) && wD
          }
          hasEventBeenHandled(DD) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(bs(DD))
          }
          saveEventToCache(DD) {
            this.cachedEventUids.add(bs(DD)), this.lastProcessedEventTime = Date.now()
          }
        }

        function bs(DD) {
          return [DD.type, DD.eventId, DD.sessionId, DD.tenantId].filter((DD => DD)).join("-")
        }

        function ds(DD) {
          let {
            type: zD,
            error: wD
          } = DD;
          return "unknown" === zD && "auth/no-auth-event" === (null === wD || void 0 === wD ? void 0 : wD.code)
        }
        const Ss = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          is = /^https?/;
        async function ls(DD) {
          if (DD.config.emulator) return;
          const {
            authorizedDomains: zD
          } = await async function(DD) {
            return ND(DD, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(DD);
          for (const pD of zD) try {
            if (Ws(pD)) return
          } catch (wD) {}
          OD(DD, "unauthorized-domain")
        }

        function Ws(DD) {
          const zD = xD(),
            {
              protocol: wD,
              hostname: pD
            } = new URL(zD);
          if (DD.startsWith("chrome-extension://")) {
            const sD = new URL(DD);
            return "" === sD.hostname && "" === pD ? "chrome-extension:" === wD && DD.replace("chrome-extension://", "") === zD.replace("chrome-extension://", "") : "chrome-extension:" === wD && sD.hostname === pD
          }
          if (!is.test(wD)) return !1;
          if (Ss.test(DD)) return pD === DD;
          const sD = DD.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + sD + "|" + sD + ")$", "i").test(pD)
        }
        const Ns = new jD(3e4, 6e4);

        function Zs() {
          const DD = Pp().___jsl;
          if (null === DD || void 0 === DD ? void 0 : DD.H)
            for (const zD of Object.keys(DD.H))
              if (DD.H[zD].r = DD.H[zD].r || [], DD.H[zD].L = DD.H[zD].L || [], DD.H[zD].r = [...DD.H[zD].L], DD.CP)
                for (let wD = 0; wD < DD.CP.length; wD++) DD.CP[wD] = null
        }
        let ys = null;

        function ks(DD) {
          return ys = ys || function(DD) {
            return new Promise(((zD, wD) => {
              var pD, sD, KD;

              function rD() {
                Zs(), gapi.load("gapi.iframes", {
                  callback: () => {
                    zD(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    Zs(), wD(JD(DD, "network-request-failed"))
                  },
                  timeout: Ns.get()
                })
              }
              if (null === (sD = null === (pD = Pp().gapi) || void 0 === pD ? void 0 : pD.iframes) || void 0 === sD ? void 0 : sD.Iframe) zD(gapi.iframes.getContext());
              else {
                if (!(null === (KD = Pp().gapi) || void 0 === KD ? void 0 : KD.load)) {
                  const zD = Pz("iframefcb");
                  return Pp()[zD] = () => {
                    gapi.load ? rD() : wD(JD(DD, "network-request-failed"))
                  }, Vz(`https://apis.google.com/js/api.js?onload=${zD}`).catch((DD => wD(DD)))
                }
                rD()
              }
            })).catch((DD => {
              throw ys = null, DD
            }))
          }(DD), ys
        }
        const ms = new jD(5e3, 15e3),
          es = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          os = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function as(DD) {
          const zD = DD.config;
          VD(zD.authDomain, DD, "auth-domain-config-required");
          const wD = zD.emulator ? dD(zD, "emulator/auth/iframe") : `https://${DD.config.authDomain}/__/auth/iframe`,
            KD = {
              apiKey: zD.apiKey,
              appName: DD.name,
              v: sD.e
            },
            rD = os.get(DD.config.apiHost);
          rD && (KD.eid = rD);
          const LD = DD._getFrameworks();
          return LD.length && (KD.fw = LD.join(",")), `${wD}?${(0,pD.Y)(KD).slice(1)}`
        }
        const us = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class vs {
          constructor(DD) {
            this.window = DD, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (DD) {}
          }
        }

        function ts(DD, zD, wD) {
          let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const rD = Math.max((window.screen.availHeight - KD) / 2, 0).toString(),
            LD = Math.max((window.screen.availWidth - sD) / 2, 0).toString();
          let cD = "";
          const gD = Object.assign(Object.assign({}, us), {
              width: sD.toString(),
              height: KD.toString(),
              top: rD,
              left: LD
            }),
            RD = (0, pD.I)().toLowerCase();
          wD && (cD = fz(RD) ? "_blank" : wD), Az(RD) && (zD = zD || "http://localhost", gD.scrollbars = "yes");
          const AD = Object.entries(gD).reduce(((DD, zD) => {
            let [wD, pD] = zD;
            return `${DD}${wD}=${pD},`
          }), "");
          if (function() {
              var DD;
              return nz(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.I)()) && !!(null === (DD = window.navigator) || void 0 === DD ? void 0 : DD.standalone)
            }(RD) && "_self" !== cD) return function(DD, zD) {
            const wD = document.createElement("a");
            wD.href = DD, wD.target = zD;
            const pD = document.createEvent("MouseEvent");
            pD.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), wD.dispatchEvent(pD)
          }(zD || "", cD), new vs(null);
          const UD = window.open(zD || "", cD, AD);
          VD(UD, DD, "popup-blocked");
          try {
            UD.focus()
          } catch (fD) {}
          return new vs(UD)
        }
        const Fs = "__/auth/handler",
          Ys = "emulator/auth/handler",
          Hs = encodeURIComponent("fac");
        async function qs(DD, zD, wD, KD, rD, LD) {
            VD(DD.config.authDomain, DD, "auth-domain-config-required"), VD(DD.config.apiKey, DD, "invalid-api-key");
            const cD = {
              apiKey: DD.config.apiKey,
              appName: DD.name,
              authType: wD,
              redirectUrl: KD,
              v: sD.e,
              eventId: rD
            };
            if (zD instanceof Dw) {
              zD.setDefaultLanguage(DD.languageCode), cD.providerId = zD.providerId || "", (0, pD.N)(zD.getCustomParameters()) || (cD.customParameters = JSON.stringify(zD.getCustomParameters()));
              for (const [DD, zD] of Object.entries(LD || {})) cD[DD] = zD
            }
            if (zD instanceof zw) {
              const DD = zD.getScopes().filter((DD => "" !== DD));
              DD.length > 0 && (cD.scopes = DD.join(","))
            }
            DD.tenantId && (cD.tid = DD.tenantId);
            const gD = cD;
            for (const pD of Object.keys(gD)) void 0 === gD[pD] && delete gD[pD];
            const RD = await DD._getAppCheckToken(),
              AD = RD ? `#${Hs}=${encodeURIComponent(RD)}` : "";
            return `${function(DD){let{config:zD}=DD;if(!zD.emulator)return`
            https: //${zD.authDomain}/${Fs}`;return dD(zD,Ys)}(DD)}?${(0,pD.Y)(gD).slice(1)}${AD}`}const DK="webStorageSupport";const zK=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ep,this._completeRedirectFn=Cs,this._overrideRedirectResult=Ms}async _openPopup(DD,zD,wD,pD){var sD;CD(null===(sD=this.eventManagers[DD._key()])||void 0===sD?void 0:sD.manager,"_initialize() not called before _openPopup()");return ts(DD,await qs(DD,zD,wD,xD(),pD),Xp())}async _openRedirect(DD,zD,wD,pD){await this._originValidation(DD);return function(DD){Pp().location.href=DD}(await qs(DD,zD,wD,xD(),pD)),new Promise((()=>{}))}_initialize(DD){const zD=DD._key();if(this.eventManagers[zD]){const{manager:DD,promise:wD}=this.eventManagers[zD];return DD?Promise.resolve(DD):(CD(wD,"If manager is not set, promise should be"),wD)}const wD=this.initAndGetManager(DD);return this.eventManagers[zD]={promise:wD},wD.catch((()=>{delete this.eventManagers[zD]})),wD}async initAndGetManager(DD){const zD=await async function(DD){const zD=await ks(DD),wD=Pp().gapi;return VD(wD,DD,"internal-error"),zD.open({where:document.body,url:as(DD),messageHandlersFilter:wD.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:es,dontclear:!0},(zD=>new Promise((async(wD,pD)=>{await zD.restyle({setHideOnLeave:!1});const sD=JD(DD,"network-request-failed"),KD=Pp().setTimeout((()=>{pD(sD)}),ms.get());function rD(){Pp().clearTimeout(KD),wD(zD)}zD.ping(rD).then(rD,(()=>{pD(sD)}))}))))}(DD),wD=new Ts(DD);return zD.register("authEvent",(zD=>{VD(null===zD||void 0===zD?void 0:zD.authEvent,DD,"invalid-auth-event");return{status:wD.onEvent(zD.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[DD._key()]={manager:wD},this.iframes[DD._key()]=zD,wD}_isIframeWebStorageSupported(DD,zD){this.iframes[DD._key()].send(DK,{type:DK},(wD=>{var pD;const sD=null===(pD=null===wD||void 0===wD?void 0:wD[0])||void 0===pD?void 0:pD[DK];void 0!==sD&&zD(!!sD),OD(DD,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(DD){const zD=DD._key();return this.originValidationPromises[zD]||(this.originValidationPromises[zD]=ls(DD)),this.originValidationPromises[zD]}get _shouldInitProactively(){return Mz()||Uz()||nz()}};class wK{constructor(DD){this.factorId=DD}_process(DD,zD,wD){switch(zD.type){case"enroll":return this._finalizeEnroll(DD,zD.credential,wD);case"signin":return this._finalizeSignIn(DD,zD.credential);default:return PD("unexpected MultiFactorSessionType")}}}class pK extends wK{constructor(DD){super("phone"),this.credential=DD}static _fromCredential(DD){return new pK(DD)}_finalizeEnroll(DD,zD,wD){return function(DD,zD){return ND(DD,"POST","/v2/accounts/mfaEnrollment:finalize",WD(DD,zD))}(DD,{idToken:zD,displayName:wD,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(DD,zD){return function(DD,zD){return ND(DD,"POST","/v2/accounts/mfaSignIn:finalize",WD(DD,zD))}(DD,{mfaPendingCredential:zD,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sK{constructor(){}static assertion(DD){return pK._fromCredential(DD)}}sK.FACTOR_ID="phone";class KK{static assertionForEnrollment(DD,zD){return rK._fromSecret(DD,zD)}static assertionForSignIn(DD,zD){return rK._fromEnrollmentId(DD,zD)}static async generateSecret(DD){const zD=DD;VD("undefined"!==typeof zD.auth,"internal-error");const wD=await(pD=zD.auth,sD={idToken:zD.credential,totpEnrollmentInfo:{}},ND(pD,"POST","/v2/accounts/mfaEnrollment:start",WD(pD,sD)));var pD,sD;return LK._fromStartTotpMfaEnrollmentResponse(wD,zD.auth)}}KK.FACTOR_ID="totp";class rK extends wK{constructor(DD,zD,wD){super("totp"),this.otp=DD,this.enrollmentId=zD,this.secret=wD}static _fromSecret(DD,zD){return new rK(zD,void 0,DD)}static _fromEnrollmentId(DD,zD){return new rK(zD,DD)}async _finalizeEnroll(DD,zD,wD){return VD("undefined"!==typeof this.secret,DD,"argument-error"),function(DD,zD){return ND(DD,"POST","/v2/accounts/mfaEnrollment:finalize",WD(DD,zD))}(DD,{idToken:zD,displayName:wD,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(DD,zD){VD(void 0!==this.enrollmentId&&void 0!==this.otp,DD,"argument-error");const wD={verificationCode:this.otp};return function(DD,zD){return ND(DD,"POST","/v2/accounts/mfaSignIn:finalize",WD(DD,zD))}(DD,{mfaPendingCredential:zD,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:wD})}}class LK{constructor(DD,zD,wD,pD,sD,KD,rD){this.sessionInfo=KD,this.auth=rD,this.secretKey=DD,this.hashingAlgorithm=zD,this.codeLength=wD,this.codeIntervalSeconds=pD,this.enrollmentCompletionDeadline=sD}static _fromStartTotpMfaEnrollmentResponse(DD,zD){return new LK(DD.totpSessionInfo.sharedSecretKey,DD.totpSessionInfo.hashingAlgorithm,DD.totpSessionInfo.verificationCodeLength,DD.totpSessionInfo.periodSec,new Date(DD.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),DD.totpSessionInfo.sessionInfo,zD)}_makeTotpVerificationInfo(DD){return{sessionInfo:this.sessionInfo,verificationCode:DD}}generateQrCodeUrl(DD,zD){var wD;let pD=!1;return(cK(DD)||cK(zD))&&(pD=!0),pD&&(cK(DD)&&(DD=(null===(wD=this.auth.currentUser)||void 0===wD?void 0:wD.email)||"unknownuser"),cK(zD)&&(zD=this.auth.name)),`otpauth://totp/${zD}:${DD}?secret=${this.secretKey}&issuer=${zD}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function cK(DD){return"undefined"===typeof DD||0===(null===DD||void 0===DD?void 0:DD.length)}var gK="@firebase/auth",RK="0.23.2";class AK{constructor(DD){this.auth=DD,this.internalListeners=new Map}getUid(){var DD;return this.assertAuthConfigured(),(null===(DD=this.auth.currentUser)||void 0===DD?void 0:DD.uid)||null}async getToken(DD){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(DD)}}addAuthTokenListener(DD){if(this.assertAuthConfigured(),this.internalListeners.has(DD))return;const zD=this.auth.onIdTokenChanged((zD=>{DD((null===zD||void 0===zD?void 0:zD.stsTokenManager.accessToken)||null)}));this.internalListeners.set(DD,zD),this.updateProactiveRefresh()}removeAuthTokenListener(DD){this.assertAuthConfigured();const zD=this.internalListeners.get(DD);zD&&(this.internalListeners.delete(DD),zD(),this.updateProactiveRefresh())}assertAuthConfigured(){VD(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const UK=(0,pD.D)("authIdTokenMaxAge")||300;let fK=null;const IK=DD=>async zD=>{const wD=zD&&await zD.getIdTokenResult(),pD=wD&&((new Date).getTime()-Date.parse(wD.issuedAtTime))/1e3;if(pD&&pD>UK)return;const sD=null===wD||void 0===wD?void 0:wD.token;fK!==sD&&(fK=sD,await fetch(DD,{method:sD?"POST":"DELETE",headers:sD?{Authorization:`Bearer ${sD}`}:{}}))};function BK(){let DD=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,sD.K)();const zD=(0,sD.v)(DD,"auth");if(zD.isInitialized())return zD.getImmediate();const wD=Sz(DD,{popupRedirectResolver:zK,persistence:[Np,Op,Ep]}),KD=(0,pD.D)("authTokenSyncURL");if(KD){const DD=IK(KD);Kp(wD,DD,(()=>DD(wD.currentUser))),sp(wD,(zD=>DD(zD)))}const rD=(0,pD.A)("auth");return rD&&iz(wD,`http://${rD}`),wD}var GK;GK="Browser",(0,sD.z)(new LD.f("auth",((DD,zD)=>{let{options:wD}=zD;const pD=DD.getProvider("app").getImmediate(),sD=DD.getProvider("heartbeat"),KD=DD.getProvider("app-check-internal"),{apiKey:rD,authDomain:LD}=pD.options;VD(rD&&!rD.includes(":"),"invalid-api-key",{appName:pD.name});const cD={apiKey:rD,authDomain:LD,clientPlatform:GK,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oz(GK)},gD=new bz(pD,sD,KD,cD);return function(DD,zD){const wD=(null===zD||void 0===zD?void 0:zD.persistence)||[],pD=(Array.isArray(wD)?wD:[wD]).map(Kz);(null===zD||void 0===zD?void 0:zD.errorMap)&&DD._updateErrorMap(zD.errorMap),DD._initializeWithPersistence(pD,null===zD||void 0===zD?void 0:zD.popupRedirectResolver)}(gD,wD),gD}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((DD,zD,wD)=>{DD.getProvider("auth-internal").initialize()}))),(0,sD.z)(new LD.f("auth-internal",(DD=>(DD=>new AK(DD))(jz(DD.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,sD.T)(gK,RK,function(DD){switch(DD){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(GK)),(0,sD.T)(gK,RK,"esm2017")}};Object.freeze(modules);for(const DD in modules)Object.freeze(modules[DD]);