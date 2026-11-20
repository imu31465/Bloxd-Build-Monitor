export const id = 124;
export const ids = [124];
export const modules = {
  6158: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      ShaderPackPublishForm: () => Pz
    });
    var Fz = sz(65),
      Wz = sz(6129),
      Xz = sz(205),
      Oz = sz(6161),
      oz = sz(1036),
      vz = sz(1419),
      Uz = sz(1622),
      Kz = sz(1116),
      uz = sz(6169),
      Nz = sz(6188),
      bz = sz(1466),
      wz = sz(1173),
      Dz = sz(6193),
      gz = sz(6225),
      Hz = sz(6122),
      Bz = sz(1087);

    function Pz(zz) {
      var tz, sz, uz;
      let {
        existing: Pz,
        onPublished: Yz
      } = zz;
      const {
        t: mz
      } = (0, wz.B)(), {
        userContext: Jz,
        isUserContextUpdating: Iz
      } = (0, Kz.b)(), [Cz, ez] = (0, Fz.useState)(null), [Zz, Gz] = (0, Fz.useState)(0), [Tz, cz] = (0, Fz.useState)(null !== (tz = null === Pz || void 0 === Pz ? void 0 : Pz.name) && void 0 !== tz ? tz : ""), jz = (0, Fz.useRef)(Tz), Az = (0, Fz.useRef)(""), yz = zz => {
        jz.current = zz, cz(zz)
      }, [Mz, dz] = (0, Fz.useState)(null !== (sz = null === Pz || void 0 === Pz ? void 0 : Pz.description) && void 0 !== sz ? sz : ""), hz = (0, Fz.useRef)(Mz), Qz = (0, Fz.useRef)(""), kz = zz => {
        hz.current = zz, dz(zz)
      }, [iz, Lz] = (0, Fz.useState)(!1), {
        loading: lz,
        error: nz,
        setError: az,
        onFiles: qz
      } = (0, Nz.d)((async zz => {
        const tz = await (0, Dz.loadPageShaderPackCompiler)();
        if (!tz) return void az(mz("shaderPack:compilerUnavailable"));
        const sz = await (0, gz.f)(tz, zz.files);
        if (ez({
            pack: zz,
            validation: sz,
            sourceBytes: (0, Oz.y)(zz.files)
          }), !Pz) {
          var Fz;
          if ("" !== jz.current.trim() && jz.current !== Az.current || (Az.current = (0, Wz.N)(zz.manifest.name.trim(), Wz.w), yz(Az.current)), "" === hz.current.trim() || hz.current === Qz.current) Qz.current = (0, Wz.N)((null !== (Fz = zz.manifest.description) && void 0 !== Fz ? Fz : "").trim(), Wz.p), kz(Qz.current);
          Gz((zz => zz + 1))
        }
      })), Sz = !Iz && !Jz.isLoggedIn() && !Xz.c.offlineMode, Vz = Tz.trim(), Rz = Vz.length < Wz.A, pz = null !== Cz && !1 !== (null === (uz = Cz.validation) || void 0 === uz ? void 0 : uz.ok) && !lz && !Rz && !Sz && !Iz;
      return (0, Bz.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Bz.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Pz ? mz("shaderPackListing:uploadIntro", {
            minutes: String(Wz.F / 6e4)
          }) : mz("shaderPackListing:publishIntro")
        }), (0, Bz.jsx)(xz, {}), Sz && (0, Bz.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: mz("shaderPackListing:publishNeedsLogin")
        }), (0, Bz.jsx)(Nz.b, {
          busy: lz,
          disabled: lz || iz,
          onFiles: zz => {
            ez(null), qz(zz)
          }
        }), Cz && (0, Bz.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Bz.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Cz.pack.manifest.name
          }), (0, Bz.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [mz("shaderPackListing:sizeValue", {
              kilobytes: String((0, Hz.Y)(Cz.sourceBytes))
            }), " \xb7", " ", mz("shaderPackListing:filesValue", {
              files: String(Cz.pack.files.length)
            })]
          }), (0, Bz.jsx)(rz, {
            picked: Cz
          })]
        }), !Pz && (0, Bz.jsxs)(Bz.Fragment, {
          children: [(0, Bz.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Bz.jsx)("span", {
              children: mz("general:name")
            }), (0, Bz.jsx)(Uz.d, {
              className: "ShaderPackPublishInput",
              defaultValue: Tz,
              maxLength: Wz.w,
              onValueChange: yz
            }, Zz), Cz && Rz && (0, Bz.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: mz("shaderPackListing:nameTooShort", {
                min: String(Wz.A)
              })
            })]
          }), (0, Bz.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Bz.jsx)("span", {
              children: mz("general:description")
            }), (0, Bz.jsx)(Uz.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Mz,
              maxLength: Wz.p,
              onValueChange: kz,
              useTextarea: !0
            }, Zz)]
          })]
        }), nz && (0, Bz.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: nz
        }), (0, Bz.jsxs)(vz.p, {
          className: "ShaderPackPublishButton",
          disabled: !pz,
          loading: iz,
          onClick: () => {
            !async function() {
              var zz;
              if (!Cz) return;
              const {
                name: tz,
                description: sz
              } = null !== Pz && void 0 !== Pz ? Pz : {
                name: Vz,
                description: Mz.trim()
              }, Fz = {
                packId: null !== (zz = null === Pz || void 0 === Pz ? void 0 : Pz.packId) && void 0 !== zz ? zz : null,
                name: tz,
                description: sz,
                apiVersion: Cz.pack.manifest.apiVersion,
                files: (0, Oz.u)(Cz.pack.files),
                keepCircleShadows: !0 === Cz.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Fz)).byteLength > 1024 * Wz.J) az(mz("shaderPackListing:publishTooBig", {
                kilobytes: String(Wz.J)
              }));
              else {
                Lz(!0), az(null);
                try {
                  Yz(await bz.d.publishShaderPack(Jz, Fz))
                } catch (Xz) {
                  console.error("Failed to publish the shader pack", Xz), az((0, Hz.B)(Xz, mz, "shaderPackListing:publishFailed"))
                } finally {
                  Lz(!1)
                }
              }
            }()
          },
          children: [(0, Bz.jsx)(oz.c, {
            name: "upload"
          }), " ", mz(Pz ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function rz(zz) {
      let {
        picked: tz
      } = zz;
      const {
        t: sz
      } = (0, wz.B)(), {
        validation: Fz
      } = tz;
      return null === Fz ? (0, Bz.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: sz("shaderPackListing:publishUnchecked")
      }) : Fz.ok ? (0, Bz.jsxs)(Bz.Fragment, {
        children: [(0, Bz.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Bz.jsx)(oz.c, {
            name: "circle-check"
          }), " ", sz("shaderPackListing:publishReady")]
        }), Fz.offInStrict.length > 0 && (0, Bz.jsxs)(Bz.Fragment, {
          children: [(0, Bz.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Bz.jsx)(oz.c, {
              name: "triangle-exclamation"
            }), " ", sz("shaderPack:offInStrict")]
          }), (0, Bz.jsx)(uz.c, {
            diagnostics: Fz.offInStrict,
            t: sz
          })]
        })]
      }) : (0, Bz.jsxs)(Bz.Fragment, {
        children: [(0, Bz.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Bz.jsx)(oz.c, {
            name: "triangle-exclamation"
          }), " ", sz("shaderPackListing:publishHasErrors")]
        }), (0, Bz.jsx)(uz.c, {
          diagnostics: Fz.errors,
          more: Fz.moreErrors,
          t: sz
        })]
      })
    }
    const Yz = "\0";

    function xz() {
      const {
        t: zz
      } = (0, wz.B)(), [tz, sz] = zz("shaderPackListing:bloxdhubHelp", {
        site: Yz
      }).split(Yz);
      return (0, Bz.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [tz, (0, Bz.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Wz.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Wz.b
        }), sz]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);