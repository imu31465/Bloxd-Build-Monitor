export const id = 124;
export const ids = [124];
export const modules = {
  6301: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      ShaderPackPublishForm: () => fz
    });
    var Ez = bz(56),
      nz = bz(6283),
      iz = bz(199),
      lz = bz(6307),
      Mz = bz(1047),
      tz = bz(1419),
      Hz = bz(1628),
      Oz = bz(1114),
      pz = bz(6316),
      dz = bz(6337),
      Fz = bz(1473),
      Zz = bz(1181),
      Rz = bz(6340),
      Kz = bz(6371),
      wz = bz(6274),
      Xz = bz(1089);

    function fz(zz) {
      var uz, bz, pz;
      let {
        existing: fz,
        onPublished: rz
      } = zz;
      const {
        t: Nz
      } = (0, Zz.F)(), {
        userContext: vz,
        isUserContextUpdating: xz
      } = (0, Oz.c)(), [Jz, Az] = (0, Ez.useState)(null), [Tz, Lz] = (0, Ez.useState)(0), [Pz, Gz] = (0, Ez.useState)(null !== (uz = null === fz || void 0 === fz ? void 0 : fz.name) && void 0 !== uz ? uz : ""), az = (0, Ez.useRef)(Pz), Vz = (0, Ez.useRef)(""), mz = zz => {
        az.current = zz, Gz(zz)
      }, [qz, hz] = (0, Ez.useState)(null !== (bz = null === fz || void 0 === fz ? void 0 : fz.description) && void 0 !== bz ? bz : ""), Uz = (0, Ez.useRef)(qz), cz = (0, Ez.useRef)(""), gz = zz => {
        Uz.current = zz, hz(zz)
      }, [Sz, yz] = (0, Ez.useState)(!1), {
        loading: Dz,
        error: Qz,
        setError: Wz,
        onFiles: ez
      } = (0, dz.e)((async zz => {
        const uz = await (0, Rz.loadPageShaderPackCompiler)();
        if (!uz) return void Wz(Nz("shaderPack:compilerUnavailable"));
        const bz = await (0, Kz.g)(uz, zz.files);
        if (Az({
            pack: zz,
            validation: bz,
            sourceBytes: (0, lz.u)(zz.files)
          }), !fz) {
          var Ez;
          if ("" !== az.current.trim() && az.current !== Vz.current || (Vz.current = (0, nz.O)(zz.manifest.name.trim(), nz.y), mz(Vz.current)), "" === Uz.current.trim() || Uz.current === cz.current) cz.current = (0, nz.O)((null !== (Ez = zz.manifest.description) && void 0 !== Ez ? Ez : "").trim(), nz.l), gz(cz.current);
          Lz((zz => zz + 1))
        }
      })), jz = !xz && !vz.isLoggedIn() && !iz.e.offlineMode, Iz = Pz.trim(), Bz = Iz.length < nz.z, Cz = null !== Jz && !1 !== (null === (pz = Jz.validation) || void 0 === pz ? void 0 : pz.ok) && !Dz && !Bz && !jz && !xz;
      return (0, Xz.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Xz.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: fz ? Nz("shaderPackListing:uploadIntro", {
            minutes: String(nz.D / 6e4)
          }) : Nz("shaderPackListing:publishIntro")
        }), (0, Xz.jsx)(oz, {}), jz && (0, Xz.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Nz("shaderPackListing:publishNeedsLogin")
        }), (0, Xz.jsx)(dz.c, {
          busy: Dz,
          disabled: Dz || Sz,
          onFiles: zz => {
            Az(null), ez(zz)
          }
        }), Jz && (0, Xz.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Xz.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Jz.pack.manifest.name
          }), (0, Xz.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Nz("shaderPackListing:sizeValue", {
              kilobytes: String((0, wz.N)(Jz.sourceBytes))
            }), " \xb7", " ", Nz("shaderPackListing:filesValue", {
              files: String(Jz.pack.files.length)
            })]
          }), (0, Xz.jsx)(sz, {
            picked: Jz
          })]
        }), !fz && (0, Xz.jsxs)(Xz.Fragment, {
          children: [(0, Xz.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Xz.jsx)("span", {
              children: Nz("general:name")
            }), (0, Xz.jsx)(Hz.d, {
              className: "ShaderPackPublishInput",
              defaultValue: Pz,
              maxLength: nz.y,
              onValueChange: mz
            }, Tz), Jz && Bz && (0, Xz.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Nz("shaderPackListing:nameTooShort", {
                min: String(nz.z)
              })
            })]
          }), (0, Xz.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Xz.jsx)("span", {
              children: Nz("general:description")
            }), (0, Xz.jsx)(Hz.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: qz,
              maxLength: nz.l,
              onValueChange: gz,
              useTextarea: !0
            }, Tz)]
          })]
        }), Qz && (0, Xz.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Qz
        }), (0, Xz.jsxs)(tz.q, {
          className: "ShaderPackPublishButton",
          disabled: !Cz,
          loading: Sz,
          onClick: () => {
            !async function() {
              var zz;
              if (!Jz) return;
              const {
                name: uz,
                description: bz
              } = null !== fz && void 0 !== fz ? fz : {
                name: Iz,
                description: qz.trim()
              }, Ez = {
                packId: null !== (zz = null === fz || void 0 === fz ? void 0 : fz.packId) && void 0 !== zz ? zz : null,
                name: uz,
                description: bz,
                apiVersion: Jz.pack.manifest.apiVersion,
                files: (0, lz.s)(Jz.pack.files),
                keepCircleShadows: !0 === Jz.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Ez)).byteLength > 1024 * nz.M) Wz(Nz("shaderPackListing:publishTooBig", {
                kilobytes: String(nz.M)
              }));
              else {
                yz(!0), Wz(null);
                try {
                  rz(await Fz.c.publishShaderPack(vz, Ez))
                } catch (iz) {
                  console.error("Failed to publish the shader pack", iz), Wz((0, wz.v)(iz, Nz, "shaderPackListing:publishFailed"))
                } finally {
                  yz(!1)
                }
              }
            }()
          },
          children: [(0, Xz.jsx)(Mz.c, {
            name: "upload"
          }), " ", Nz(fz ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function sz(zz) {
      let {
        picked: uz
      } = zz;
      const {
        t: bz
      } = (0, Zz.F)(), {
        validation: Ez
      } = uz;
      return null === Ez ? (0, Xz.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: bz("shaderPackListing:publishUnchecked")
      }) : Ez.ok ? (0, Xz.jsxs)(Xz.Fragment, {
        children: [(0, Xz.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Xz.jsx)(Mz.c, {
            name: "circle-check"
          }), " ", bz("shaderPackListing:publishReady")]
        }), Ez.offInStrict.length > 0 && (0, Xz.jsxs)(Xz.Fragment, {
          children: [(0, Xz.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Xz.jsx)(Mz.c, {
              name: "triangle-exclamation"
            }), " ", bz("shaderPack:offInStrict")]
          }), (0, Xz.jsx)(pz.b, {
            diagnostics: Ez.offInStrict,
            t: bz
          })]
        })]
      }) : (0, Xz.jsxs)(Xz.Fragment, {
        children: [(0, Xz.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Xz.jsx)(Mz.c, {
            name: "triangle-exclamation"
          }), " ", bz("shaderPackListing:publishHasErrors")]
        }), (0, Xz.jsx)(pz.b, {
          diagnostics: Ez.errors,
          more: Ez.moreErrors,
          t: bz
        })]
      })
    }
    const rz = "\0";

    function oz() {
      const {
        t: zz
      } = (0, Zz.F)(), [uz, bz] = zz("shaderPackListing:bloxdhubHelp", {
        site: rz
      }).split(rz);
      return (0, Xz.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [uz, (0, Xz.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: nz.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: nz.b
        }), bz]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);