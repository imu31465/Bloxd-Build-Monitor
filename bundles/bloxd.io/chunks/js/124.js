export const id = 124;
export const ids = [124];
export const modules = {
  6286: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      ShaderPackPublishForm: () => vk
    });
    var Rk = Bk(61),
      tk = Bk(6253),
      ak = Bk(188),
      Xk = Bk(6289),
      bk = Bk(1028),
      wk = Bk(1389),
      dk = Bk(1620),
      sk = Bk(1096),
      Vk = Bk(6293),
      Jk = Bk(6307),
      Ak = Bk(1441),
      ek = Bk(1149),
      yk = Bk(6316),
      fk = Bk(6356),
      mk = Bk(6245),
      Wk = Bk(1069);

    function vk(kk) {
      var Fk, Bk, Vk;
      let {
        existing: vk,
        onPublished: Yk
      } = kk;
      const {
        t: Ok
      } = (0, ek.x)(), {
        userContext: Ek,
        isUserContextUpdating: Sk
      } = (0, sk.e)(), [Nk, Hk] = (0, Rk.useState)(null), [uk, Mk] = (0, Rk.useState)(0), [gk, Uk] = (0, Rk.useState)(null !== (Fk = null === vk || void 0 === vk ? void 0 : vk.name) && void 0 !== Fk ? Fk : ""), ck = (0, Rk.useRef)(gk), Gk = (0, Rk.useRef)(""), Tk = kk => {
        ck.current = kk, Uk(kk)
      }, [rk, Dk] = (0, Rk.useState)(null !== (Bk = null === vk || void 0 === vk ? void 0 : vk.description) && void 0 !== Bk ? Bk : ""), zk = (0, Rk.useRef)(rk), Pk = (0, Rk.useRef)(""), hk = kk => {
        zk.current = kk, Dk(kk)
      }, [qk, Ck] = (0, Rk.useState)(!1), {
        loading: Zk,
        error: pk,
        setError: Kk,
        onFiles: xk
      } = (0, Jk.i)((async kk => {
        const Fk = await (0, yk.loadPageShaderPackCompiler)();
        if (!Fk) return void Kk(Ok("shaderPack:compilerUnavailable"));
        const Bk = await (0, fk.g)(Fk, kk.files);
        if (Hk({
            pack: kk,
            validation: Bk,
            sourceBytes: (0, Xk.w)(kk.files)
          }), !vk) {
          var Rk;
          if ("" !== ck.current.trim() && ck.current !== Gk.current || (Gk.current = (0, tk.T)(kk.manifest.name.trim(), tk.D), Tk(Gk.current)), "" === zk.current.trim() || zk.current === Pk.current) Pk.current = (0, tk.T)((null !== (Rk = kk.manifest.description) && void 0 !== Rk ? Rk : "").trim(), tk.p), hk(Pk.current);
          Mk((kk => kk + 1))
        }
      })), jk = !Sk && !Ek.isLoggedIn() && !ak.d.offlineMode, lk = gk.trim(), nk = lk.length < tk.G, Ik = null !== Nk && !1 !== (null === (Vk = Nk.validation) || void 0 === Vk ? void 0 : Vk.ok) && !Zk && !nk && !jk && !Sk;
      return (0, Wk.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Wk.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: vk ? Ok("shaderPackListing:uploadIntro", {
            minutes: String(tk.J / 6e4)
          }) : Ok("shaderPackListing:publishIntro")
        }), (0, Wk.jsx)(Lk, {}), jk && (0, Wk.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Ok("shaderPackListing:publishNeedsLogin")
        }), (0, Wk.jsx)(Jk.e, {
          busy: Zk,
          disabled: Zk || qk,
          onFiles: kk => {
            Hk(null), xk(kk)
          }
        }), Nk && (0, Wk.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Wk.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Nk.pack.manifest.name
          }), (0, Wk.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Ok("shaderPackListing:sizeValue", {
              kilobytes: String((0, mk.M)(Nk.sourceBytes))
            }), " \xb7", " ", Ok("shaderPackListing:filesValue", {
              files: String(Nk.pack.files.length)
            })]
          }), (0, Wk.jsx)(ik, {
            picked: Nk
          })]
        }), !vk && (0, Wk.jsxs)(Wk.Fragment, {
          children: [(0, Wk.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Wk.jsx)("span", {
              children: Ok("general:name")
            }), (0, Wk.jsx)(dk.e, {
              className: "ShaderPackPublishInput",
              defaultValue: gk,
              maxLength: tk.D,
              onValueChange: Tk
            }, uk), Nk && nk && (0, Wk.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Ok("shaderPackListing:nameTooShort", {
                min: String(tk.G)
              })
            })]
          }), (0, Wk.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Wk.jsx)("span", {
              children: Ok("general:description")
            }), (0, Wk.jsx)(dk.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: rk,
              maxLength: tk.p,
              onValueChange: hk,
              useTextarea: !0
            }, uk)]
          })]
        }), pk && (0, Wk.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: pk
        }), (0, Wk.jsxs)(wk.o, {
          className: "ShaderPackPublishButton",
          disabled: !Ik,
          loading: qk,
          onClick: () => {
            !async function() {
              var kk;
              if (!Nk) return;
              const {
                name: Fk,
                description: Bk
              } = null !== vk && void 0 !== vk ? vk : {
                name: lk,
                description: rk.trim()
              }, Rk = {
                packId: null !== (kk = null === vk || void 0 === vk ? void 0 : vk.packId) && void 0 !== kk ? kk : null,
                name: Fk,
                description: Bk,
                apiVersion: Nk.pack.manifest.apiVersion,
                files: (0, Xk.s)(Nk.pack.files),
                keepCircleShadows: !0 === Nk.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Rk)).byteLength > 1024 * tk.R) Kk(Ok("shaderPackListing:publishTooBig", {
                kilobytes: String(tk.R)
              }));
              else {
                Ck(!0), Kk(null);
                try {
                  Yk(await Ak.b.publishShaderPack(Ek, Rk))
                } catch (ak) {
                  console.error("Failed to publish the shader pack", ak), Kk((0, mk.v)(ak, Ok, "shaderPackListing:publishFailed"))
                } finally {
                  Ck(!1)
                }
              }
            }()
          },
          children: [(0, Wk.jsx)(bk.d, {
            name: "upload"
          }), " ", Ok(vk ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function ik(kk) {
      let {
        picked: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ek.x)(), {
        validation: Rk
      } = Fk;
      return null === Rk ? (0, Wk.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Bk("shaderPackListing:publishUnchecked")
      }) : Rk.ok ? (0, Wk.jsxs)(Wk.Fragment, {
        children: [(0, Wk.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Wk.jsx)(bk.d, {
            name: "circle-check"
          }), " ", Bk("shaderPackListing:publishReady")]
        }), Rk.offInStrict.length > 0 && (0, Wk.jsxs)(Wk.Fragment, {
          children: [(0, Wk.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Wk.jsx)(bk.d, {
              name: "triangle-exclamation"
            }), " ", Bk("shaderPack:offInStrict")]
          }), (0, Wk.jsx)(Vk.e, {
            diagnostics: Rk.offInStrict,
            t: Bk
          })]
        })]
      }) : (0, Wk.jsxs)(Wk.Fragment, {
        children: [(0, Wk.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Wk.jsx)(bk.d, {
            name: "triangle-exclamation"
          }), " ", Bk("shaderPackListing:publishHasErrors")]
        }), (0, Wk.jsx)(Vk.e, {
          diagnostics: Rk.errors,
          more: Rk.moreErrors,
          t: Bk
        })]
      })
    }
    const Yk = "\0";

    function Lk() {
      const {
        t: kk
      } = (0, ek.x)(), [Fk, Bk] = kk("shaderPackListing:bloxdhubHelp", {
        site: Yk
      }).split(Yk);
      return (0, Wk.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Fk, (0, Wk.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: tk.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: tk.e
        }), Bk]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);