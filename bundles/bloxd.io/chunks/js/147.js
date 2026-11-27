export const id = 147;
export const ids = [147, 214];
export const modules = {
  34872: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = He(347),
      be = He(34880);

    function Me(ee, ie, He) {
      const Me = Object.entries(ie).sort(((ee, ie) => ie[1] - ee[1])),
        Ke = (0, ye.Cb)(ee);
      Ke.push(ee ? "\n\n" : "\n");
      for (const [be, fe] of Me) {
        var Ue, Fe, Je;
        const ee = null !== (Ue = null === He || void 0 === He || null === (Fe = He[be]) || void 0 === Fe ? void 0 : Fe.icon) && void 0 !== Ue ? Ue : `${be} Enchantment`;
        Ke.push({
          icon: ee,
          style: {
            fontSize: "1.5rem"
          }
        }), Ke.push({
          str: `${be} ${null!==(Je=(0,ye.T)(fe))&&void 0!==Je?Je:fe}\n`
        })
      }
      Ke.push({
        str: "\n"
      });
      for (const [ye, fe] of Me) {
        var oe, Re, ke, qe;
        const ee = null !== (oe = null === He || void 0 === He || null === (Re = He[ye]) || void 0 === Re ? void 0 : Re.icon) && void 0 !== oe ? oe : `${ye} Enchantment`,
          ie = null !== (ke = null === He || void 0 === He || null === (qe = He[ye]) || void 0 === qe ? void 0 : qe.description) && void 0 !== ke ? ke : (0, be.o)(ye);
        Ke.push({
          icon: ee,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Ke.push({
          str: ie,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Ke.push({
          str: "\n"
        })
      }
      return Ke
    }
  },
  34889: (ee, ie, He) => {
    He.d(ie, {
      B: () => Re,
      d: () => Je,
      e: () => ze,
      i: () => pe,
      m: () => Fe,
      p: () => Xe,
      s: () => oe,
      v: () => ke,
      x: () => Te
    });
    var ye = He(335),
      be = He(610),
      Me = He(347),
      Ke = He(4585),
      Ue = He(34872);

    function Fe(ee, ie) {
      var He;
      let {
        player: ye,
        chestOrCreative: be
      } = ee;
      var Me;
      return ie < ye.length ? null !== (Me = ye[ie]) && void 0 !== Me ? Me : null : null !== (He = be[ie - ye.length]) && void 0 !== He ? He : null
    }

    function Je(ee) {
      var ie;
      return null !== (ie = ee.amount) && void 0 !== ie ? ie : 0
    }

    function oe(ee) {
      return 0 === ee.button || void 0 === ee.button
    }

    function Re(ee) {
      return !!ee.shiftKey
    }

    function ke(ee) {
      return "touches" in ee || "touch" === ee.pointerType || "pen" === ee.pointerType
    }
    const qe = new Set,
      fe = 50;

    function Te(ee, ie) {
      var He;
      const ye = null === (He = ee[ie]) || void 0 === He ? void 0 : He.displayName;
      return (0, be.P)(ye) ? "string" !== typeof ie ? "" : (!qe.has(ie) && qe.size < fe && (qe.add(ie), console.warn(`No item called "${ie}", so its hover shows the name as given`)), ie) : ye
    }

    function pe(ee, ie, He) {
      var Fe, Je, oe, Re, ke, qe, fe, pe, Xe, ze, Be, Ee, ge, Oe;
      const de = ee.attributes,
        We = null !== (Fe = null === (Je = ie[ee.name]) || void 0 === Je ? void 0 : Je.rootName) && void 0 !== Fe ? Fe : ee.name,
        te = null !== (oe = null !== (Re = de.customDisplayName) && void 0 !== Re ? Re : null === (ke = ie[ee.name]) || void 0 === ke ? void 0 : ke.displayName) && void 0 !== oe ? oe : Te(ie, We);
      let Ze = te;
      const we = null === (qe = de.customAttributes) || void 0 === qe ? void 0 : qe.enchantmentTier;
      we && (Ze = (0, Me.Cb)(te, {
        colour: Me.xb[we]
      }));
      const De = null !== (fe = null !== (pe = null !== (Xe = function(ee, ie) {
        var He;
        if (void 0 === ee || null !== (He = ie.customAttributes) && void 0 !== He && He.author) return ee;
        const be = (0, ye.kc)(ee);
        return be.every((ee => "string" === typeof ee)) ? ee : be.map((ee => "string" === typeof ee ? ee : {
          icon: ee.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(de.customDescription, de)) && void 0 !== Xe ? Xe : null === (ze = ie[ee.name]) || void 0 === ze ? void 0 : ze.description) && void 0 !== pe ? pe : null === (Be = ie[We]) || void 0 === Be ? void 0 : Be.description) && void 0 !== fe ? fe : "";
      let Pe = De;
      if (null !== (Ee = de.customAttributes) && void 0 !== Ee && Ee.enchantments) Pe = (0, Ue.c)(De, de.customAttributes.enchantments, de.customAttributes.enchantmentData);
      else if (He[We]) Pe = (0, Me.Cb)(De), Pe.push({
        str: "\n"
      }), Pe.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (ge = de.customAttributes) && void 0 !== ge && ge.mobSettings) {
        var Ae, Ye;
        const ee = de.customAttributes.mobSettings;
        var Ve, ae;
        if (Pe = [], (0, be.P)(de.customAttributes.health) || (Pe.push({
            str: "\n"
          }), Pe.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Pe.push({
            str: " "
          }), Pe.push({
            str: de.customAttributes.health.toString()
          }), (0, be.P)(ee.maxHealth) || (Pe.push({
            str: "/"
          }), Pe.push({
            str: ee.maxHealth.toString()
          }))), !(0, be.P)(ee.attackDamage) && ee.attackDamage > 0 && (Pe.push({
            str: "\n"
          }), Pe.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Pe.push({
            str: " "
          }), Pe.push({
            str: ee.attackDamage.toString()
          })), !(0, be.P)(ee.secondaryAttackDamage) && ee.secondaryAttackDamage > 0 && (Pe.push({
            str: "\n"
          }), Pe.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Pe.push({
            str: " "
          }), Pe.push({
            str: ee.secondaryAttackDamage.toString()
          })), (0, be.P)(ee.baseRunningSpeed) || (Pe.push({
            str: "\n"
          }), Pe.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Pe.push({
            str: " "
          }), Pe.push({
            str: ee.baseRunningSpeed.toFixed(2)
          })), "Saddled" === ee.metaInfo) Pe.push({
          str: "\n"
        }), Pe.push({
          str: {
            translationKey: "general:has"
          }
        }), Pe.push({
          str: " "
        }), Pe.push({
          icon: null !== (Ve = null === (ae = ee.tameInfo) || void 0 === ae ? void 0 : ae.saddleItemName) && void 0 !== Ve ? Ve : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Pe.push({
            str: "\n"
          }), Pe.push({
            str: "\n"
          }), ee.petInfo && null !== (Ae = ee.tameInfo) && void 0 !== Ae && Ae.supportsFriendship) {
          const ie = Ke.d.getIconsFromFriendshipPoints(ee.petInfo.friendshipPoints);
          for (const ee of ie) Pe.push({
            icon: ee,
            style: {
              fontSize: "1.5em"
            }
          });
          Pe.push({
            str: "\n"
          });
          const He = Ke.d.getMobHungerLevel(ee.petInfo.lastFedAt);
          for (const ee of Ke.d.hungerLevelIcons[He]) Pe.push({
            icon: ee,
            style: {
              fontSize: "1.5em"
            }
          });
          Pe.push({
            str: " "
          }), Pe.push({
            str: Ke.d.hungerLevelTranslations[He],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (ee.tameInfo && null !== (Ye = ee.tameInfo) && void 0 !== Ye && Ye.supportsFriendship) {
          var ce, xe;
          let ie = null !== (ce = ee.tameInfo.likedFoods) && void 0 !== ce ? ce : [];
          Pe.push({
            str: "\n"
          }), Pe.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ke.d.feedTextColours[Ke.d.MobFoodType.Superliked]
            }
          }), Pe.push({
            str: " "
          }), null !== (xe = ee.petInfo) && void 0 !== xe && xe.superlikedFoodKnown ? (Pe.push({
            icon: ee.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), ie = ie.filter((ie => ie !== ee.petInfo.superlikedFood))) : Pe.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Pe.push({
            str: "\n"
          }), Pe.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ke.d.feedTextColours[Ke.d.MobFoodType.Liked]
            }
          }), Pe.push({
            str: " "
          });
          for (const ee of ie) Pe.push({
            icon: ee,
            style: {
              fontSize: "1.5em"
            }
          });
          Pe.push({
            str: "\n"
          }), Pe.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ke.d.feedTextColours[Ke.d.MobFoodType.Neutral]
            }
          }), Pe.push({
            str: " "
          });
          for (const He of null !== (Le = ee.tameInfo.neutralFoods) && void 0 !== Le ? Le : []) {
            var Le;
            Pe.push({
              icon: He,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Pe.push({
            str: "\n"
          }), Pe.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ke.d.feedTextColours[Ke.d.MobFoodType.Disliked]
            }
          }), Pe.push({
            str: " "
          });
          for (const He of null !== (Ce = ee.tameInfo.dislikedFoods) && void 0 !== Ce ? Ce : []) {
            var Ce;
            Pe.push({
              icon: He,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Pe.length > 0 ? (Pe.shift(), Pe.unshift(...(0, Me.Cb)(De))) : Pe = (0, Me.Cb)(De)
      }
      return {
        name: Ze,
        desc: Pe,
        fontStyle: null !== (Oe = de.customAttributes) && void 0 !== Oe && Oe.author ? "italic" : "normal"
      }
    }

    function Xe(ee, ie, He, ye) {
      const be = Fe(ee, He),
        Me = Fe(ee, ye);
      if (!be) return !1;
      const Ke = ie[be.name].armourReduction,
        Ue = ie[Me.name].armourReduction;
      if (Ue === Ke) {
        var Je, oe, Re, ke;
        const ee = null !== (Je = null === (oe = be.attributes.customAttributes) || void 0 === oe ? void 0 : oe.enchantmentTier) && void 0 !== Je ? Je : "Tier 0",
          ie = null !== (Re = null === (ke = Me.attributes.customAttributes) || void 0 === ke ? void 0 : ke.enchantmentTier) && void 0 !== Re ? Re : "Tier 0";
        return parseInt(ee.replace("Tier ", "")) >= parseInt(ie.replace("Tier ", ""))
      }
      return Ke > Ue
    }

    function ze(ee) {
      let ie;
      if ("number" === typeof ee) {
        const He = document.querySelector(`[data-inven-idx="${ee}"]`);
        if (!He) return null;
        ie = He.getBoundingClientRect()
      } else ie = ee.getBoundingClientRect();
      return {
        x: ie.left + ie.width / 2,
        y: ie.top + ie.height / 2
      }
    }
  },
  9654: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ze,
      h: () => Pe
    });
    var ye = He(59),
      be = He(27),
      Me = He(2591),
      Ke = He(3760);
    const Ue = 6,
      Fe = 4,
      Je = ["HudMove-inventory", "HudLocked-inventory"];

    function oe(ee) {
      let {
        left: ie,
        right: He,
        height: ye,
        rowTop: be,
        besideBottom: Me,
        obstacles: Ke
      } = ee;
      const Je = Ke.filter((ee => ee.left < He + Ue && ee.right > ie - Ue));
      let oe = Me;
      for (let Ue = 0; Ue <= Je.length; Ue++) {
        const ee = Je.filter((ee => ee.top < oe + Fe && ee.bottom > oe - ye - Fe));
        if (0 === ee.length) break;
        oe = Math.min(...ee.map((ee => ee.top))) - Fe
      }
      return oe === Me ? null : Math.ceil(be - oe)
    }

    function Re(ee) {
      return Array.from(ee.children).filter((ee => !ee.classList.contains("HotBarRow")))
    }

    function ke(ee) {
      return function(ee) {
        const ie = [],
          He = (ee, ye) => {
            const be = ee.getBoundingClientRect();
            if (be.width > 0 && be.height > 0) ie.push(ee);
            else if (ye < 2)
              for (const ie of Array.from(ee.children)) He(ie, ye + 1)
          };
        for (const ye of ee) He(ye, 0);
        return ie
      }(Re(ee).flatMap((ee => ee.classList.contains("AuraBarWrapper") ? [] : ee.classList.contains("BottomScreenStatBarList") ? Array.from(ee.children) : [ee])))
    }

    function qe(ee, ie) {
      var He;
      const ye = null === (He = ee.querySelector(":scope > .AuraBarWrapper")) || void 0 === He ? void 0 : He.getBoundingClientRect();
      return (ye && ye.height > 0 ? ye.top : ie) - Fe
    }
    const fe = ".BottomScreenMessage, [role='status']";

    function Te(ee, ie, He, ye, be) {
      const Me = ee => ee.map((ee => ee.getBoundingClientRect())),
        Ke = oe({
          ...He,
          obstacles: Me(He.obstacles.filter((ee => !ee.matches(fe))))
        }),
        Ue = ie.ownerDocument.defaultView,
        Fe = `${null===Ue||void 0===Ue?void 0:Ue.innerWidth}x${null===Ue||void 0===Ue?void 0:Ue.innerHeight}:${ye}:${Math.round(He.rowTop)}`,
        Je = ee.get(ie),
        Re = (null === Je || void 0 === Je ? void 0 : Je.at) === Fe ? (ke = Je.rise, qe = Ke, null === ke ? qe : null === qe ? ke : Math.max(ke, qe)) : Ke;
      var ke, qe;
      const Te = oe({
        ...He,
        besideBottom: null === Re ? He.besideBottom : He.rowTop - Re,
        obstacles: Me(He.obstacles)
      });
      return be && ee.set(ie, {
        at: Fe,
        rise: Re
      }), null !== Te && void 0 !== Te ? Te : Re
    }

    function pe(ee, ie, He, ye) {
      ee.classList.toggle(ie, null !== ye), null === ye ? ee.style.removeProperty(He) : ee.style.setProperty(He, `${ye}px`)
    }
    const Xe = new WeakMap,
      ze = new WeakMap,
      Be = "(orientation: portrait) and (max-width: 600px)";

    function Ee(ee, ie) {
      const He = ee.getBoundingClientRect();
      if (0 === He.width) return null;
      const ye = [He, ...Array.from(ee.children).filter((ee => !(ee => ie.contains(ee.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(ee))).map((ee => ee.getBoundingClientRect())).filter((ee => ee.width > 0))];
      return {
        left: Math.min(...ye.map((ee => ee.left))),
        top: Math.min(...ye.map((ee => ee.top))),
        right: Math.max(...ye.map((ee => ee.right))),
        bottom: Math.max(...ye.map((ee => ee.bottom)))
      }
    }

    function ge(ee) {
      let {
        slotsLeft: ie,
        slotsRight: He,
        width: ye,
        zoneRight: be
      } = ee;
      const Me = Math.max(0, Math.floor(He - ie - ye));
      return null === be ? 0 : Math.min(Me, Math.max(0, Math.ceil(be + Ue - ie)))
    }

    function Oe(ee) {
      var ie;
      const He = ee.getBoundingClientRect();
      if (0 === He.width) return null;
      const ye = null === (ie = ee.parentElement) || void 0 === ie ? void 0 : ie.getBoundingClientRect();
      return ye && ye.width > 0 ? Math.min(He.right, ye.left + ye.width * de) : He.right
    }
    const de = .35,
      We = new WeakMap,
      te = new WeakMap;

    function Ze(ee) {
      we(ee) && we(ee),
        function(ee) {
          var ie, He;
          const ye = ee.documentElement.classList;
          if (!ye.contains("TouchHotbar") || !ye.contains("TouchHotbarKeysAbove") || Je.some((ee => ye.contains(ee))) || !1 !== (null === (ie = ee.defaultView) || void 0 === ie || null === (He = ie.matchMedia) || void 0 === He ? void 0 : He.call(ie, Be).matches)) return;
          const be = ee.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            Me = null === be || void 0 === be ? void 0 : be.closest(".BottomMiddleElements"),
            Ke = null === be || void 0 === be ? void 0 : be.parentElement;
          if (!be || !Me || !Ke || Me.classList.contains("TouchInventoryOpen") || be.querySelector("[data-pressing]")) return;
          const Ue = Ee(be, ye),
            Fe = Ke.getBoundingClientRect().top,
            oe = Ue && Te(Xe, Me, {
              left: Ue.left,
              right: Ue.right,
              height: Ue.bottom - Ue.top,
              rowTop: Fe,
              besideBottom: qe(Me, Fe),
              obstacles: ke(Me).filter((ee => !ee.classList.contains("BottomScreenMessage")))
            }, `${Math.round(Ue.left)}:${Math.round(Ue.right-Ue.left)}x${Math.round(Ue.bottom-Ue.top)}`, !0);
          ze.has(Me) && ze.get(Me) === oe || (pe(Me, "KeysAboveUp", "--touch-keys-above-rise", oe), ze.set(Me, oe))
        }(ee)
    }

    function we(ee) {
      var ie, He, ye, be;
      const Me = ee.documentElement.classList;
      if (!Me.contains("TouchHotbar") || Me.contains("TouchHotbarKeysAbove") || Je.some((ee => Me.contains(ee))) || null === (ie = ee.defaultView) || void 0 === ie || null === (He = ie.matchMedia) || void 0 === He || !He.call(ie, De).matches) return !1;
      const Ke = ee.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Ue = null === Ke || void 0 === Ke ? void 0 : Ke.parentElement,
        Fe = null === Ke || void 0 === Ke ? void 0 : Ke.closest(".BottomMiddleElements"),
        oe = null === Fe || void 0 === Fe ? void 0 : Fe.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Ke || !Ue || !Fe || !oe || Fe.classList.contains("TouchInventoryOpen")) return !1;
      const Re = Ke.getBoundingClientRect();
      if (0 === Re.width) return !1;
      const fe = ee.querySelector(".JoystickZone"),
        Xe = oe.getBoundingClientRect(),
        ze = Ue.getBoundingClientRect().top,
        Be = ge({
          slotsLeft: Xe.left,
          slotsRight: Xe.right,
          width: Re.width,
          zoneRight: fe ? Oe(fe) : null
        }),
        Ee = We.get(Fe),
        de = Xe.left + Be,
        Ze = {
          shift: Be,
          rise: Te(te, Fe, {
            left: de,
            right: de + Re.width,
            height: Re.height,
            rowTop: ze,
            besideBottom: qe(Fe, ze),
            obstacles: ke(Fe)
          }, `${Be}:${Math.round(Re.width)}`, (null !== (ye = null === Ee || void 0 === Ee ? void 0 : Ee.shift) && void 0 !== ye ? ye : 0) === Be)
        };
      return (null === Ee || void 0 === Ee ? void 0 : Ee.shift) !== Ze.shift && Fe.style.setProperty("--touch-shop-above-shift", `${Ze.shift}px`), (null === Ee || void 0 === Ee ? void 0 : Ee.rise) !== Ze.rise && pe(Fe, "ShopAboveUp", "--touch-shop-above-rise", Ze.rise), We.set(Fe, Ze), (null !== (be = null === Ee || void 0 === Ee ? void 0 : Ee.shift) && void 0 !== be ? be : 0) !== Ze.shift
    }
    const De = "(orientation: landscape) and (max-height: 500px)";

    function Pe(ee, ie, He) {
      (0, ye.useLayoutEffect)((() => {
        var ie;
        const ye = null === (ie = ee.current) || void 0 === ie ? void 0 : ie.closest(".BottomMiddleElements");
        if (!ye || He) return;
        const Ue = new ResizeObserver((() => {
            qe(!1)
          })),
          Fe = () => {
            Ue.disconnect();
            const ee = document.querySelector(".JoystickZone");
            for (const ie of [ee, ye, ye.querySelector(".HotBarGameItemsContainer"), ...ke(ye)]) ie && Ue.observe(ie)
          };
        let Je = null,
          oe = !1;
        const qe = ee => {
            oe ||= ee, Je ??= requestAnimationFrame((() => {
              Je = null, oe && (oe = !1, Fe()), Ze(document)
            }))
          },
          fe = new MutationObserver((() => {
            qe(!0)
          }));
        fe.observe(ye, {
          childList: !0
        });
        for (const ee of Re(ye)) fe.observe(ee, {
          childList: !0,
          subtree: !0
        });
        Ze(document), Fe();
        const Te = () => {
            qe(!0)
          },
          pe = [(0, be.j)(Me.f, Te), (0, be.j)(Ke.c, Te)],
          Xe = new MutationObserver((() => {
            qe(!1)
          }));
        return ee.current && Xe.observe(ee.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          Xe.disconnect(), null !== Je && cancelAnimationFrame(Je), Ue.disconnect(), fe.disconnect();
          for (const ee of pe) ee()
        }
      }), [ee, ie, He])
    }
  },
  34767: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      c: () => qe,
      d: () => fe
    });
    var ye = He(59),
      be = He(34765),
      Me = He(1294),
      Ke = He(4922),
      Ue = He(2415),
      Fe = He(97),
      Je = He(2029),
      oe = He(1320),
      Re = He(1228);

    function ke(ee) {
      let {
        show: ie,
        onClose: He
      } = ee;
      const {
        requestedGameNameWithVariation: ye,
        lobbyName: be,
        shownLobbyName: Me
      } = (0, Je.k)("connectedGame"), ke = (0, Ue.c)(ye, be, !1);
      return Fe.featureFlags.canUseInviteLinks && (0, Re.jsx)(Ke.e, {
        show: ie,
        close: He,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Re.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Re.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Re.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Re.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === ke ? (0, Re.jsx)(oe.b, {}) : ke, (0, Re.jsx)("br", {}), "Lobby Name: ", Me, (0, Re.jsx)("br", {}), (0, Re.jsx)("br", {}), (0, Re.jsx)("br", {}), (0, Re.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Re.jsx)(qe, {})]
        })
      })
    }

    function qe() {
      var ee;
      const ie = null !== (ee = fe(Fe.featureFlags.canUseInviteLinks)) && void 0 !== ee ? ee : "Loading Link...";
      return Fe.featureFlags.canUseInviteLinks && (0, Re.jsx)(be.e, {
        text: ie
      })
    }

    function fe(ee) {
      const [ie, He] = (0, ye.useState)(null);
      return (0, ye.useEffect)((() => {
        if (!ee) return;
        let ie = !0;
        return (0, Me.B)().then((ee => {
          ie && He(ee)
        })).catch((ee => {
          console.error("Failed to get invite link:", ee)
        })), () => {
          ie = !1
        }
      }), [ee]), ie
    }
  },
  34863: (ee, ie, He) => {
    He.d(ie, {
      d: () => Je
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(2029),
      Ue = He(1228);

    function Fe(ee) {
      const ie = Math.floor(ee / 3600),
        He = Math.floor(ee % 3600 / 60),
        ye = Math.floor(ee % 60),
        be = `${He.toString().padStart(2,"0")}:${ye.toString().padStart(2,"0")}`;
      return ie > 0 ? `${ie}:${be}` : be
    }
    const Je = (0, ye.memo)((function(ee) {
      let {
        className: ie
      } = ee;
      const {
        recording: He,
        clipping: ye,
        seconds: be
      } = (0, Ke.k)("replayRecorder");
      return He || ye ? (0, Ue.jsxs)("div", {
        className: Me()("RecordingIndicator", {
          RecordingIndicatorClipping: !He
        }, ie),
        "data-camera-keeper": "",
        children: [(0, Ue.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Ue.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: He ? "REC" : "CLIP"
        }), He && (0, Ue.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Fe(be)
        })]
      }) : null
    }))
  },
  34959: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1228);
    const Ke = 21,
      Ue = 2 * Math.PI * Ke;

    function Fe(ee) {
      let {
        tier: ie,
        state: He,
        progress: ye,
        size: Fe = "large"
      } = ee;
      const Je = be()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === Fe,
        SeasonPassTierNodeLarge: "large" === Fe,
        SeasonPassTierNodeReached: "reached" === He,
        SeasonPassTierNodeEarning: "earning" === He
      });
      if ("earning" !== He || "large" === Fe) return (0, Me.jsx)("span", {
        className: Je,
        children: (0, Me.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: ie
        })
      });
      const oe = Math.max(0, Math.min(1, ye));
      return (0, Me.jsxs)("span", {
        className: Je,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * oe),
        children: [(0, Me.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, Me.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, Me.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: Ke
          }), (0, Me.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: Ke,
            strokeDasharray: `${oe*Ue} ${Ue}`,
            transform: "rotate(-90 28 28)"
          }), (0, Me.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, Me.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: ie
        })]
      })
    }
  },
  34765: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe
    });
    var ye = He(4721),
      be = He(1127),
      Me = He(2841),
      Ke = He(1438),
      Ue = He(1228);

    function Fe(ee) {
      let {
        text: ie
      } = ee;
      const {
        t: He
      } = (0, be.v)(), [Fe, Je] = (0, Me.i)();
      return (0, Ue.jsxs)("div", {
        className: "CopyTextRow",
        children: [(0, Ue.jsx)("div", {
          className: "CopyTextRowText",
          children: ie
        }), (0, Ue.jsx)(Ke.c, {
          className: "CopyTextRowButton",
          onClick: () => {
            (0, ye.e)(ie).catch((ee => {
              console.error("Failed to copy text:", ee)
            })), Je()
          },
          disabled: Fe,
          children: He(Fe ? "general:copied" : "general:copy")
        })]
      })
    }
  },
  34867: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(4931),
      be = He(4937);

    function Me(ee) {
      let {
        children: ie,
        showing: He,
        globallyUniqueKey: Me,
        alwaysMountChildren: Ke = !1,
        doGameplayStartStopOnShow: Ue = !0,
        keepsMovement: Fe = !1
      } = ee;
      return (0, be.e)(!0, He, Me, Fe), (0, ye.c)(Ue, He), He || Ke ? ie : null
    }
  },
  7220: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me
    });
    var ye = He(59),
      be = He(35);

    function Me(ee, ie) {
      var He;
      const [Me, Ke] = (0, ye.useState)(null !== (He = be.i.getItem(ee)) && void 0 !== He ? He : ie);
      return [Me, ie => {
        be.i.setItem(ee, ie), Ke(ie)
      }]
    }
  },
  9629: (ee, ie, He) => {
    He.d(ie, {
      A: () => Re,
      E: () => Fe,
      G: () => ke,
      I: () => Je,
      K: () => fe,
      N: () => Me,
      d: () => be,
      g: () => Ue,
      i: () => ye,
      k: () => Te,
      n: () => qe,
      r: () => oe,
      u: () => Ke,
      y: () => pe
    });
    const ye = ee => ({
      left: ee.left,
      top: ee.top,
      right: ee.right,
      bottom: ee.bottom
    });

    function be(ee) {
      return {
        x: (ee.left + ee.right) / 2,
        y: (ee.top + ee.bottom) / 2
      }
    }

    function Me(ee) {
      return 0 === ee.length ? null : ee.reduce(((ee, ie) => ({
        left: Math.min(ee.left, ie.left),
        top: Math.min(ee.top, ie.top),
        right: Math.max(ee.right, ie.right),
        bottom: Math.max(ee.bottom, ie.bottom)
      })))
    }

    function Ke(ee, ie) {
      const He = Math.max(0, (ie - (ee.right - ee.left)) / 2),
        ye = Math.max(0, (ie - (ee.bottom - ee.top)) / 2);
      return {
        left: ee.left - He,
        top: ee.top - ye,
        right: ee.right + He,
        bottom: ee.bottom + ye
      }
    }

    function Ue(ee, ie) {
      return ie.x >= ee.left && ie.x <= ee.right && ie.y >= ee.top && ie.y <= ee.bottom
    }

    function Fe(ee, ie, He) {
      let ye = null,
        Me = 1 / 0;
      for (const {
          id: be,
          box: Ke
        }
        of ie) {
        const ie = (Ke.right - Ke.left) * (Ke.bottom - Ke.top);
        Ue(Ke, ee) && ie < Me && (Me = ie, ye = be)
      }
      if (null !== ye) return ye;
      let Fe = 1 / 0;
      for (const {
          id: Je,
          box: oe
        }
        of ie) {
        if (!Ue(Ke(oe, He), ee)) continue;
        const ie = be(oe),
          Me = Math.hypot(ee.x - ie.x, ee.y - ie.y);
        Me < Fe && (Fe = Me, ye = Je)
      }
      return ye
    }

    function Je(ee, ie, He) {
      return {
        left: He.left,
        top: He.top,
        right: ee - He.right,
        bottom: ie - He.bottom
      }
    }

    function oe(ee, ie, He, ye) {
      const be = (ee, ie, He) => Math.max(Math.min(ie, 0), Math.min(Math.max(He, 0), ee));
      return {
        x: be(ie, ye.left - ee.left, ye.right - ee.right),
        y: be(He, ye.top - ee.top, ye.bottom - ee.bottom)
      }
    }

    function Re(ee, ie, He, ye, be) {
      const Me = ee.dx * ye + ie,
        Ke = ee.dy * be + He,
        Ue = ee => Math.max(-1, Math.min(1, ee));
      return {
        dx: Ue(Me / ye),
        dy: Ue(Ke / be)
      }
    }

    function ke(ee, ie, He, ye) {
      return ie <= 0 || He <= 0 ? 1 : Math.max(.05, Math.min(1, ee / ie, ye / He))
    }

    function qe(ee, ie, He) {
      return Math.min(ee.right, ie.right) - Math.max(ee.left, ie.left) > He && Math.min(ee.bottom, ie.bottom) - Math.max(ee.top, ie.top) > He
    }

    function fe(ee, ie) {
      const He = (ee, ie, He, ye) => ie - ee > ye - He ? He - ee > ie - ye ? ye - ie : He - ee : ee < He ? He - ee : ie > ye ? ye - ie : 0;
      return {
        x: He(ee.left, ee.right, ie.left, ie.right),
        y: He(ee.top, ee.bottom, ie.top, ie.bottom)
      }
    }

    function Te(ee, ie, He) {
      return qe(ee, {
        left: 0,
        top: 0,
        right: ie,
        bottom: He
      }, 0)
    }

    function pe(ee, ie) {
      let {
        avoid: He = null,
        bounds: ye = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, be = 0, Me = 1 / 0;
      return ee.forEach(((ee, Ke) => {
        const Ue = ie.filter((ie => qe(ee, ie, 0))).length,
          Fe = null !== ye && (ee.left < ye.left || ee.top < ye.top || ee.right > ye.right || ee.bottom > ye.bottom),
          Je = Ue + (He && qe(ee, He, 0) ? 1e3 : 0) + (Fe ? 1e6 : 0);
        Je < Me && (be = Ke, Me = Je)
      })), be
    }
  },
  9620: (ee, ie, He) => {
    He.d(ie, {
      B: () => ge,
      E: () => Je,
      F: () => qe,
      J: () => ke,
      M: () => Re,
      e: () => Ue,
      h: () => Ee,
      l: () => Be,
      p: () => ze,
      q: () => Fe,
      s: () => fe,
      u: () => oe,
      y: () => Oe
    });
    var ye = He(9629),
      be = He(2560);
    const Me = {
        sprint: "joystick",
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        shop: "inventory",
        bag: "inventory",
        ...Object.fromEntries(be.A.map((ee => [ee, "menu"])))
      },
      Ke = ee => be.t.filter((ie => Me[ie] === ee)),
      Ue = new Set(Ke("cluster")),
      Fe = new Set(Ke("inventory")),
      Je = ee => "inventory" === ee || Fe.has(ee),
      oe = ee => {
        const ie = Me[ee];
        return void 0 === ie ? [] : [ie, ...oe(ie)]
      },
      Re = ee => [ee, ...oe(ee)],
      ke = (ee, ie, He) => "shop" === ee && ie ? He("inventory") ? ["inventory"] : He("bag") ? [ee, "bag"] : [ee] : [ee],
      qe = (ee, ie, He, be) => {
        const Me = ee => {
          const Me = ie[ee],
            {
              x: Ke,
              y: Ue
            } = Me && be(ee) ? (0, ye.K)(Me, He) : {
              x: 0,
              y: 0
            };
          return Me && {
            left: Me.left + Ke,
            top: Me.top + Ue,
            right: Me.right + Ke,
            bottom: Me.bottom + Ue
          }
        };
        return ee.flatMap((ee => {
          const Ke = ie[ee];
          if ("inventory" !== ee || !Ke || Ke.right - Ke.left <= He.right - He.left && Ke.bottom - Ke.top <= He.bottom - He.top) return [ee];
          const [Ue, Fe] = [Me("shop"), Me("bag")];
          return Ue && Fe && !(0, ye.n)(Ue, Fe, 0) ? ["shop", "bag"].filter(be) : [ee]
        }))
      },
      fe = new Map([
        ["cluster", Ue],
        ["inventory", Fe]
      ]),
      Te = ["cluster"],
      pe = [...Te, ...be.t.filter((ee => !Te.includes(ee) && !Me[ee]))],
      Xe = ee => [ee, ...Ke(ee).flatMap(Xe)],
      ze = pe.flatMap(Xe).map((ee => ({
        id: ee,
        label: `hudLayout:${ee}`,
        ...be.q[ee],
        parent: Me[ee]
      }))),
      Be = Object.fromEntries(ze.map((ee => [ee.id, ee]))),
      Ee = "data-hud-el";

    function ge(ee, ie, He, ye) {
      const be = He(function(ee, ie) {
          return "attack" !== ee || ie ? Be[ee].label : "hudLayout:attackContext"
        }(ee, ie)),
        Me = ye[ee];
      return Me ? He("hudLayout:slotWithKey", {
        slot: be,
        key: Me
      }) : be
    }

    function Oe(ee, ie, He, ye) {
      return ee.map((ee => ge(ee, ie, He, ye))).join(", ")
    }
  },
  9645: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      d: () => Me,
      e: () => be,
      g: () => Ke,
      j: () => Re,
      l: () => oe,
      n: () => Je,
      r: () => Fe
    });
    var ye = He(2560);
    const be = ["J", "C", "A", "P", "U", "X", "G"],
      Me = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function Ke(ee) {
      return ee ? ["X"] : ["P", "X"]
    }
    const Ue = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: ye.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function Fe(ee, ie, He) {
      const ye = ee.querySelector(".InGameUi .TouchComponentsButtons");
      if (!ye) return Ue;
      const Me = {},
        Ke = {};
      for (const Ue of be) {
        const ee = ye.querySelector(`.TouchSlot${Ue} > .TouchKey`);
        if (ee) {
          var Fe, Je;
          Me[Ue] = ee.cloneNode(!0);
          const ie = (null !== (Fe = null === (Je = ee.querySelector(".TouchKeyLabel")) || void 0 === Je ? void 0 : Je.textContent) && void 0 !== Fe ? Fe : "").split(/\s+/).filter((ee => !/[\d\xd7]/.test(ee))).join(" ");
          ie && (Ke[Ue] = ie)
        }
      }
      const oe = ie => {
          const He = ee.querySelector(`.InGameUi ${ie}`);
          return null !== He && !He.classList.contains("Hidden")
        },
        Re = [...ee.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((ee => ee.cloneNode(!0)));
      return {
        faces: Object.keys(Me).length > 0 ? Me : null,
        names: Ke,
        shop: oe(".TouchInventoryKey.ShopKey"),
        bag: oe(".TouchInventoryKey.BagKey"),
        sprint: oe(".TouchSprintHit"),
        items: Re.length > 0 ? Re : null,
        rowIcons: ie,
        pinnedIcons: He
      }
    }

    function Je(ee, ie) {
      const He = {};
      for (const ye of [...Ke(ie), "G"]) {
        const ie = ee.names[ye];
        ie && (He[Me[ye]] = ie)
      }
      return He
    }

    function oe(ee, ie) {
      const {
        faces: He
      } = ee;
      if (null === He) return [];
      const ye = new Set(Object.keys(He).map((ee => Me[ee])));
      return Ke(ie).filter((ee => !ye.has(Me[ee])))
    }

    function Re(ee, ie) {
      ee.replaceChildren(...[...ie.childNodes].map((ee => ee.cloneNode(!0))))
    }
  },
  9637: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      f: () => Je
    });
    var ye = He(9629),
      be = He(9620),
      Me = He(2560),
      Ke = He(2565);
    const Ue = 2,
      Fe = (ee, ie, He) => {
        const ye = (0, be.u)(ie).includes(ee) ? ee : (0, be.u)(ee).includes(ie) ? ie : null;
        if (null === ye || "joystick" === ye) return !1;
        const Ue = ye === ee ? ie : ee;
        if ("menu" === ye) return (0, Ke.u)(Ue, He.hudElements[Ue]);
        if ("hotbar" !== ye || !(0, be.E)(Ue)) return !0;
        if ((0, Me.K)(He.hudElements[Ue]) || (0, Me.K)(He.hudElements.inventory)) return !1;
        return !(He.hudLocked.includes(Ue) || He.hudLocked.includes("inventory")) || (0, Me.I)(He.hudElements.hotbar)
      };

    function Je(ee, ie, He, Je) {
      const oe = ee => (0, be.M)(ee).some((ee => (0, Me.m)(He.hudElements, ee) || (0, Ke.t)(ee, He, Je)));
      if (oe(ee)) return [];
      const Re = ee => {
          var ie, ye;
          return "bag" === ee && 1 !== (null !== (ie = null === (ye = He.hudElements.shop) || void 0 === ye ? void 0 : ye[2]) && void 0 !== ie ? ie : 1) || (0, be.M)(ee).some((ee => void 0 !== He.hudElements[ee]))
        },
        ke = be.s.get(ee),
        qe = ie.filter((ie => {
          let {
            id: He
          } = ie;
          return ke ? ke.has(He) && !oe(He) : He === ee
        })),
        fe = new Set;
      for (const be of ie) be.id === ee || null !== ke && void 0 !== ke && ke.has(be.id) || fe.has(be.id) || oe(be.id) || qe.some((ee => {
        let {
          id: ie,
          box: Me
        } = ee;
        return !Fe(ie, be.id, He) && (Re(ie) || Re(be.id)) && (0, ye.n)(Me, be.box, Ue)
      })) && fe.add(be.id);
      return [...fe]
    }
  },
  34774: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      e: () => ye
    });
    const ye = "image/jpeg",
      be = "jpg"
  },
  34783: (ee, ie, He) => {
    He.d(ie, {
      d: () => Fe,
      g: () => Je,
      j: () => oe
    });
    var ye = He(1682),
      be = He(3529),
      Me = He(97),
      Ke = He(1790),
      Ue = He(34774);

    function Fe() {
      return !(0, Me.isMobileApp)() || ye.c.supports("photos")
    }
    async function Je(ee) {
      var ie, He;
      if ((0, Me.isMobileApp)()) {
        const {
          saved: ie
        } = await ye.c.request("photos.save", {
          data: await (0, be.h)(ee),
          mimeType: Ue.e
        });
        return ie ? "saved" : "denied"
      }
      return (0, Me.isIOS)() && null !== (ie = (He = navigator).canShare) && void 0 !== ie && ie.call(He, {
        files: [ee]
      }) ? oe(ee) : ((0, Ke.e)(ee, ee.name), "saved")
    }
    async function oe(ee) {
      try {
        return await navigator.share({
          files: [ee]
        }), "shared"
      } catch (ie) {
        if (ie instanceof DOMException && "AbortError" === ie.name) return "Ce";
        if (ie instanceof DOMException && "NotAllowedError" === ie.name) return "needsTap";
        throw ie
      }
    }
  },
  34770: (ee, ie, He) => {
    He.d(ie, {
      e: () => Je,
      i: () => oe,
      j: () => Re
    });
    var ye = He(18),
      be = He(34751),
      Me = He(1620),
      Ke = He(34774);
    const Ue = 8294400,
      Fe = .92;

    function Je() {
      (0, Me.e)(), ye.e.set({
        screenshotMode: !0
      })
    }

    function oe() {
      ye.e.set({
        screenshotMode: !1
      })
    }
    async function Re() {
      const {
        width: ee,
        height: ie,
        scale: He
      } = function(ee, ie, He) {
        const ye = Math.max(1, ee),
          be = Math.max(1, ie),
          Me = Math.min(Math.max(1, He), Math.sqrt(Ue / (ye * be)));
        return {
          width: Math.round(ye * Me),
          height: Math.round(be * Me),
          scale: Me
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: ye
      } = await be.devTools.capturePhoto(ee, ie, {
        scale: He,
        type: Ke.e,
        quality: Fe
      });
      return new File([ye], function(ee) {
        const ie = ee => String(ee).padStart(2, "0"),
          He = `${ee.getFullYear()}${ie(ee.getMonth()+1)}${ie(ee.getDate())}`,
          ye = `${ie(ee.getHours())}${ie(ee.getMinutes())}${ie(ee.getSeconds())}`;
        return `bloxd-${He}-${ye}.${Ke.c}`
      }(new Date), {
        type: Ke.e
      })
    }
  },
  9413: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      e: () => ye
    });
    const ye = "controllerOpenKeyboard",
      be = "controllerKeyboardVisible"
  },
  34754: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    const ye = new Set(["chunkBorders"])
  },
  34751: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ALL_DEV_TOOLS: () => Ke,
      coreDevTools: () => Je,
      devTools: () => Fe
    });
    var ye = He(645),
      be = He(1260),
      Me = He(34754);
    const Ke = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Ue() {
      const {
        noaDevTools: ee
      } = await He.e(264).then((() => He(42142)));
      return ee
    }
    const Fe = new class {
        constructor() {
          this.loadHost = Ue, this.tools = Ke
        }
        setHost(ee) {
          this.tools = null === ee ? Ke : ee.tools, this.loadHost = null === ee ? Ue : async () => ee
        }
        supports(ee) {
          return this.tools.has(ee)
        }
        async downloadScene(ee, ie) {
          const He = await this.loadHost();
          await He.downloadScene(ee, ie)
        }
        async setAmbientLightIntensity(ee) {
          const ie = await this.loadHost();
          await ie.setAmbientLightIntensity(ee)
        }
        async capturePhoto(ee, ie, He) {
          return (await this.loadHost()).capturePhoto(ee, ie, He)
        }
      },
      Je = {
        tools: Me.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        },
        capturePhoto: async () => {
          throw new Error("No game is drawing yet")
        }
      };
    ye.I && Fe.setHost(Je), (0, be.s)((() => {
      Fe.setHost(Je)
    }))
  },
  34927: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      d: () => be,
      h: () => oe
    });
    var ye = He(1557);

    function be(ee) {
      var ie;
      return {
        ...Ke.store,
        yaw: Ke.store.yaw + (null !== (ie = ye.b[ee].previewYaw) && void 0 !== ie ? ie : 0)
      }
    }
    const Me = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Ke = {
        player: Me,
        store: {
          ...Me,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ue(ee, ie) {
      ee instanceof Promise ? ee.then(ie).catch((ee => {
        console.error("Couldn't open the preview", ee)
      })) : ie(ee)
    }
    class Fe {
      constructor(ee) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ue(ee, (ee => {
          this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height), null !== this.view && ee.show(this.view))
        }))
      }
      show(ee) {
        var ie;
        this.view = ee, null === (ie = this.opened) || void 0 === ie || ie.show(ee)
      }
      resize(ee, ie) {
        var He;
        this.size = {
          width: ee,
          height: ie
        }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
      }
      close() {
        var ee;
        this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
      }
    }
    class Je {
      constructor(ee) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(ee).then((ee => ee.ready)), Ue(ee, (ee => {
          this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var ee, ie;
        return null !== (ee = null === (ie = this.opened) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
      }
      setCosmetic(ee, ie) {
        var He;
        null === (He = this.opened) || void 0 === He || He.setCosmetic(ee, ie)
      }
      playEmote(ee) {
        var ie;
        null === (ie = this.opened) || void 0 === ie || ie.playEmote(ee)
      }
      setOrbit(ee) {
        var ie;
        null === (ie = this.opened) || void 0 === ie || ie.setOrbit(ee)
      }
      resetCamera() {
        var ee;
        null === (ee = this.opened) || void 0 === ee || ee.resetCamera()
      }
      async untilDrawn(ee) {
        var ie;
        await this.ready, await (null === (ie = this.opened) || void 0 === ie ? void 0 : ie.untilDrawn(ee))
      }
      resize(ee, ie) {
        var He;
        this.size = {
          width: ee,
          height: ie
        }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
      }
      close() {
        var ee;
        this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
      }
    }
    const oe = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(ee) {
        this.host = ee
      }
      setDefaultHost(ee) {
        this.makeDefault = ee
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(ee) {
        return new Fe(this.current().openMob(ee))
      }
      openPet(ee) {
        return new Fe(this.current().openPet(ee))
      }
      openMobLineup(ee) {
        return new Fe(this.current().openMobLineup(ee))
      }
      openCharacter(ee, ie) {
        return new Je(this.current().openCharacter(ee, ie))
      }
    }
  },
  34919: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye.b,
      f: () => ye.d,
      i: () => ye.h
    });
    var ye = He(34927);
    class be {
      constructor(ee) {
        this.load = ee, this.loaded = null, this.loading = null
      }
      run(ee) {
        return null !== this.loaded ? ee(this.loaded) : (this.loading ??= this.load().then((ee => (this.loaded = ee, ee)), (ee => {
          throw this.loading = null, ee
        })), this.loading.then(ee))
      }
    }
    class Me {
      constructor() {
        this.mobScene = new be((() => Promise.all([He.e(84), He.e(259), He.e(258), He.e(283), He.e(111), He.e(284), He.e(87), He.e(281), He.e(85), He.e(86), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(303), He.e(255), He.e(272), He.e(286), He.e(289), He.e(89), He.e(249), He.e(204), He.e(109), He.e(261), He.e(252), He.e(268), He.e(219), He.e(269), He.e(88), He.e(273)]).then((() => He(42155))))), this.characterScene = new be((() => Promise.all([He.e(84), He.e(259), He.e(258), He.e(283), He.e(111), He.e(284), He.e(87), He.e(281), He.e(85), He.e(86), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(303), He.e(255), He.e(272), He.e(286), He.e(289), He.e(89), He.e(249), He.e(204), He.e(109), He.e(261), He.e(252), He.e(268), He.e(219), He.e(269), He.e(88), He.e(218)]).then((() => He(42256)))))
      }
      openMob(ee) {
        return this.mobScene.run((ie => ie.openMobPreview(ee)))
      }
      openPet(ee) {
        return this.mobScene.run((ie => ie.openPetPreview(ee)))
      }
      openMobLineup(ee) {
        return this.mobScene.run((ie => ie.openMobLineupPreview(ee)))
      }
      openCharacter(ee, ie) {
        return this.characterScene.run((He => He.openCharacterPreview(ee, ie)))
      }
    }
    ye.h.setDefaultHost((() => new Me))
  },
  7296: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      h: () => Me
    });
    var ye = He(35);
    const be = "shaderPack";
    async function Me() {
      var ee;
      let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (ee = await ye.e.getItem(be, ie)) && void 0 !== ee ? ee : null
    }
  },
  9609: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      h: () => Fe
    });
    var ye = He(18),
      be = He(1305),
      Me = He(97);
    const Ke = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function Ue() {
      return (0, Me.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Fe = new class {
      constructor(ee) {
        this.deps = ee, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(ee, ie) {
        var He;
        if (!this.deps.enabled()) return;
        const ye = Ke[ee],
          be = null !== ie && void 0 !== ie ? ie : ye.pattern;
        if (null === be) return void console.warn("No vibration pattern for", ee);
        const Me = this.deps.now();
        Me - this.lastAnyAt < 40 && ye.priority < this.playingPriority || Me - (null !== (He = this.lastAt.get(ee)) && void 0 !== He ? He : -1 / 0) < ye.minGapMs || Me < this.playingUntil && ye.priority < this.playingPriority || (this.lastAt.set(ee, Me), this.lastAnyAt = Me, this.playingUntil = Me + be.reduce(((ee, ie) => ee + ie), 0), this.playingPriority = ye.priority, this.deps.vibrate(be))
      }
    }({
      vibrate: ee => {
        navigator.vibrate([...ee])
      },
      now: () => performance.now(),
      enabled: () => Ue() && ye.e.get("isTouchScreen") && ye.e.get("clientEscMenuOptions").vibration && !(0, be.g)()
    })
  },
  9509: (ee, ie, He) => {
    function ye(ee, ie) {
      return !ee.hidden && (ie || !ee.isRewardedAd)
    }

    function be(ee) {
      return "object" === typeof ee ? ee.option : ee
    }

    function Me(ee, ie) {
      var He;
      if ("dropdown" === (null === (He = ee.userInput) || void 0 === He ? void 0 : He.type) && "object" === typeof ee.userInput.dropdownOptions[0]) {
        for (const He of ee.userInput.dropdownOptions)
          if (be(He) === ie) return "object" === typeof He ? He.cost : ee.cost;
        console.error("Didn't find matching option for dropdown item. Item:", ee, "input:", ie)
      }
      return ee.cost
    }

    function Ke(ee, ie, He) {
      var ye;
      const be = null !== (ye = He.excludedPlayers) && void 0 !== ye ? ye : [ie];
      return ee.filter((ee => !be.includes(ee)))
    }
    He.d(ie, {
      d: () => Me,
      f: () => be,
      h: () => Ke,
      i: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);