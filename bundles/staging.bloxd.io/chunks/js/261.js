export const id = 261;
export const ids = [261];
export const modules = {
  37977: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      h: () => Ke,
      j: () => be
    });
    const ye = 1024,
      be = 16,
      Me = 36e4;
    class Ke {
      constructor(ee) {
        this.boneCount = ee, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * ee), this.position = new Float64Array(3 * ee), this.scale = new Float64Array(3 * ee).fill(1), this.touched = new Uint8Array(ee)
      }
      clampToLimits() {
        for (let ee = 0; ee < this.boneCount; ee++)
          if (0 !== this.touched[ee])
            for (let ie = 3 * ee; ie < 3 * ee + 3; ie++) {
              const ee = this.rotation[ie],
                He = this.position[ie],
                Ke = this.scale[ie];
              ee >= -36e4 && ee <= Me || (this.rotation[ie] = Fe(ee, Me)), He >= -1024 && He <= ye || (this.position[ie] = Fe(He, ye)), Ke >= -be && Ke <= be || (this.scale[ie] = Fe(Ke, be, 1))
            }
      }
      reset() {
        for (let ee = 0; ee < this.boneCount; ee++)
          if (0 !== this.touched[ee]) {
            this.touched[ee] = 0;
            for (let ie = 3 * ee; ie < 3 * ee + 3; ie++) this.rotation[ie] = 0, this.position[ie] = 0, this.scale[ie] = 1
          }
      }
    }
    class Ue {
      constructor(ee) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * ee), this.position = new Float64Array(3 * ee), this.scaleDelta = new Float64Array(3 * ee), this.boneWeight = new Float64Array(ee), this.touched = new Uint8Array(ee), this.overrides = new Uint8Array(ee), this.touchedBones = new Int32Array(ee)
      }
      touch(ee, ie, He) {
        0 === this.touched[ee] && (this.touched[ee] = 1, this.touchedBones[this.touchedCount++] = ee), this.boneWeight[ee] += ie, He && (this.overrides[ee] = 1)
      }
      applyTo(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let be = 0; be < this.touchedCount; be++) {
          const Me = this.touchedBones[be],
            Ke = this.boneWeight[Me];
          if (He || 1 === this.overrides[Me]) {
            const He = ie * Math.min(1, Ke);
            for (let ie = 3 * Me; ie < 3 * Me + 3; ie++) ee.rotation[ie] += (this.rotation[ie] / Ke - ee.rotation[ie]) * He, ee.position[ie] += (this.position[ie] / Ke - ee.position[ie]) * He, ee.scale[ie] += (1 + this.scaleDelta[ie] / Ke - ee.scale[ie]) * He
          } else {
            const He = ye && Ke > 1 ? ie / Ke : ie;
            for (let ie = 3 * Me; ie < 3 * Me + 3; ie++) ee.rotation[ie] += this.rotation[ie] * He, ee.position[ie] += this.position[ie] * He, ee.scale[ie] *= 1 + this.scaleDelta[ie] * He
          }
          ee.touched[Me] = 1
        }
      }
      clear() {
        for (let ee = 0; ee < this.touchedCount; ee++) {
          const ie = this.touchedBones[ee];
          this.touched[ie] = 0, this.overrides[ie] = 0, this.boneWeight[ie] = 0;
          for (let ee = 3 * ie; ee < 3 * ie + 3; ee++) this.rotation[ee] = 0, this.position[ee] = 0, this.scaleDelta[ee] = 0
        }
        this.touchedCount = 0
      }
    }

    function Fe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(ee) ? He : Math.min(ie, Math.max(-ie, ee))
    }
  },
  37971: (ee, ie, He) => {
    He.d(ie, {
      b: () => Fe,
      e: () => Ue
    });
    var ye = He(37963),
      be = He(347),
      Me = He(1952),
      Ke = He(37977);

    function Ue(ee) {
      if ("WH" in ee) return te.createAnimationScript(ee);
      return new oe(ee).createAnimationScript()
    }

    function Fe(ee, ie, He, be) {
      const Me = ee.WH <= 0 ? 1 : ie + He * Math.max(0, be) / ee.WH;
      return ee.tH === ye.i.LoopOnLastFrame ? Me % 1 : ee.tH === ye.i.NoLoop && Me >= 1 ? null : Math.min(1, Me)
    }
    class Je {
      createAnimationScript(ee) {
        const {
          WH: ie,
          loop: He,
          ZH: ye
        } = ee;
        return {
          WH: Math.round(ie),
          tH: this.createLoopMode(null !== He && void 0 !== He && He),
          ZH: this.createNodeSkeletonAnimationScript(null !== ye && void 0 !== ye ? ye : null)
        }
      }
      createLoopMode(ee) {
        switch (ee) {
          case !1:
            return ye.i.NoLoop;
          case !0:
            return ye.i.LoopOnLastFrame;
          case "hold-on-last-frame":
            return ye.i.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${ee}`)
      }
      createNodeSkeletonAnimationScript(ee) {
        if (null === ee) return null;
        const ie = {};
        for (const He in ee) {
          const ye = ee[He];
          ie[He] = this.createNodeAnimationScript(ye)
        }
        return ie
      }
      createNodeAnimationScript(ee) {
        const {
          timeline: ie
        } = ee, He = ie.filter((ee => Number.isFinite(ee.timeFraction)));
        return He.sort(((ee, ie) => ee.timeFraction - ie.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(He, "rotation", qe),
          position: this.createTimelineFromKeyframes(He, "position", Te),
          scale: this.createTimelineFromKeyframes(He, "scale", Te, Xe)
        }
      }
      createTimelineFromKeyframes(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee => ee;
        const be = [];
        for (const Je of ee) {
          const ee = Je[ie];
          if (ee) {
            const ie = this.createAnimationFrameWithoutPrecomputes(Je.timeFraction, ee, ye);
            Re(ie) && be.push(ie)
          }
        }
        const Me = [];
        for (let Je = 0; Je < be.length; Je++) {
          var Ke, Ue, Fe;
          const ee = be[Je],
            ie = null !== (Ke = be[Je - 1]) && void 0 !== Ke ? Ke : ee,
            ye = null !== (Ue = be[Je + 1]) && void 0 !== Ue ? Ue : ee,
            oe = null !== (Fe = be[Je + 2]) && void 0 !== Fe ? Fe : ye;
          Me.push({
            ...ee,
            ...He(ie.post, ie.timeFraction, ee.post, ee.timeFraction, ye.pre, ye.timeFraction, oe.pre, oe.timeFraction)
          })
        }
        return Me
      }
      createAnimationFrameWithoutPrecomputes(ee, ie, He) {
        let ye, be, Me = null;
        var Ke;
        if ("object" === typeof ie && "point" in ie) Me = null !== (Ke = ie.PH) && void 0 !== Ke ? Ke : null, ye = ie.point, be = ie.point;
        else if ("object" === typeof ie && "pre" in ie) {
          var Ue;
          Me = null !== (Ue = ie.PH) && void 0 !== Ue ? Ue : null, ye = ie.pre, be = ie.post
        } else ye = ie, be = ie;
        return {
          timeFraction: ee,
          PH: this.createLerpMode(Me),
          pre: He(ye),
          post: He(be)
        }
      }
      createLerpMode(ee) {
        return null === ee ? ye.f.Linear : Je.LERP_MODE_SCHEMA_MAPPING[ee]
      }
    }
    Je.LERP_MODE_SCHEMA_MAPPING = {
      linear: ye.f.Linear,
      "catmull-rom-spline": ye.f.CatmullRomSpline
    };
    class oe {
      constructor(ee) {
        this.animationSchema = ee
      }
      createAnimationScript() {
        const {
          animation_length: ee,
          loop: ie,
          bones: He
        } = this.animationSchema;
        return {
          WH: Math.round(1e3 * ee),
          tH: this.createLoopMode(null !== ie && void 0 !== ie && ie),
          ZH: this.createNodeSkeletonAnimationScript(null !== He && void 0 !== He ? He : null)
        }
      }
      createLoopMode(ee) {
        switch (ee) {
          case !1:
            return ye.i.NoLoop;
          case !0:
            return ye.i.LoopOnLastFrame;
          case "hold_on_last_frame":
            return ye.i.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${ee}`)
      }
      createNodeSkeletonAnimationScript(ee) {
        if (null === ee) return null;
        const ie = {};
        for (const He in ee) {
          const ye = ee[He];
          ie[He] = this.createNodeAnimationScript(ye)
        }
        return ie
      }
      createNodeAnimationScript(ee) {
        const {
          rotation: ie,
          position: He,
          scale: ye
        } = ee;
        return {
          rotation: this.createAnimationTimeline(null !== ie && void 0 !== ie ? ie : null, Be, qe, !0),
          position: this.createAnimationTimeline(null !== He && void 0 !== He ? He : null, ge, Te, !1),
          scale: this.createAnimationTimeline(null !== ye && void 0 !== ye ? ye : null, pe, Te, !1)
        }
      }
      createAnimationTimeline(ee, ie, He, ye) {
        if (null === ee) return [];
        (Array.isArray(ee) || "number" === typeof ee) && (ee = {
          "0.0": ee
        });
        const be = Object.entries(ee).map((ee => {
          let [He, ye] = ee;
          const be = Number(He) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(be, ye, ie)
        })).filter(Re);
        be.sort(((ee, ie) => ee.timeFraction - ie.timeFraction)), ye && function(ee) {
          for (let ie = 1; ie < ee.length; ie++) {
            const He = ee[ie - 1].post,
              ye = ee[ie],
              be = Oe(ye.pre),
              Me = Oe(ye.post),
              Ke = We(He, ye.pre);
            We(He, be) < Ke && (ee[ie] = {
              ...ye,
              pre: be,
              post: Me
            })
          }
        }(be);
        const Me = [];
        for (let Je = 0; Je < be.length; Je++) {
          var Ke, Ue, Fe;
          const ee = be[Je],
            ie = null !== (Ke = be[Je - 1]) && void 0 !== Ke ? Ke : ee,
            ye = null !== (Ue = be[Je + 1]) && void 0 !== Ue ? Ue : ee,
            oe = null !== (Fe = be[Je + 2]) && void 0 !== Fe ? Fe : ye;
          Me.push({
            ...ee,
            ...He(ie.post, ie.timeFraction, ee.post, ee.timeFraction, ye.pre, ye.timeFraction, oe.pre, oe.timeFraction)
          })
        }
        return Me
      }
      createAnimationFrameWithoutPrecomputes(ee, ie, He) {
        let ye, be, Me = null;
        if ("object" === typeof ie && "post" in ie) {
          var Ke;
          Me = null !== (Ke = ie.lerp_mode) && void 0 !== Ke ? Ke : null, be = He(ie.post), ye = void 0 !== ie.pre ? He(ie.pre) : be
        } else {
          const ee = He(ie);
          be = ee, ye = ee
        }
        return {
          timeFraction: ee,
          PH: this.createLerpMode(Me),
          pre: ye,
          post: be
        }
      }
      createLerpMode(ee) {
        return null === ee ? ye.f.Linear : oe.LERP_MODE_SCHEMA_MAPPING[ee]
      }
    }

    function Re(ee) {
      return Number.isFinite(ee.timeFraction) && ke(ee.pre) && ke(ee.post)
    }

    function ke(ee) {
      return Number.isFinite(ee[0]) && Number.isFinite(ee[1]) && Number.isFinite(ee[2])
    }

    function qe(ee, ie, He, ye, be, Me, Ke, Ue) {
      const Fe = Me - ie,
        Je = Me - ye,
        oe = Ue - ye,
        Re = [null, null, null];
      for (let ke = 0; ke < Re.length; ke++) Re[ke] = fe(ee[ke], He[ke], be[ke], Ke[ke], Fe, oe);
      return {
        AH: Je,
        YH: Re
      }
    }

    function fe(ee, ie, He, ye, Me, Ke) {
      return {
        aH: be.c.computeShortestRotation(ee, He) / Me,
        cH: be.c.computeShortestRotation(ie, ye) / Ke,
        delta: be.c.computeShortestRotation(ie, He)
      }
    }

    function Te(ee, ie, He, ye, be, Me, Ke, Ue) {
      const Fe = Me - ie,
        Je = Me - ye,
        oe = Ue - ye,
        Re = [null, null, null];
      for (let ke = 0; ke < Re.length; ke++) Re[ke] = {
        aH: (be[ke] - ee[ke]) / Fe,
        cH: (Ke[ke] - He[ke]) / oe,
        delta: be[ke] - He[ke]
      };
      return {
        AH: Je,
        YH: Re
      }
    }

    function pe(ee) {
      return Xe("number" === typeof ee ? [ee, ee, ee] : ee)
    }

    function Xe(ee) {
      return [ze(ee[0]), ze(ee[1]), ze(ee[2])]
    }

    function ze(ee) {
      return Number.isFinite(ee) ? Math.min(Ke.j, Math.max(-Ke.j, ee)) : ee
    }

    function Be(ee) {
      const [ie, He, ye] = ee, Ke = -(0, Me.f)(ie), Ue = -(0, Me.f)(He), Fe = (0, Me.f)(ye), Je = be.c.quaternionFromEulerZYX(Ke, Ue, Fe);
      return be.c.eulerYXZFromQuaternion(Je)
    }
    oe.LERP_MODE_SCHEMA_MAPPING = {
      linear: ye.f.Linear,
      catmullrom: ye.f.CatmullRomSpline
    };
    const Ee = 1 / 16;

    function ge(ee) {
      return [-ee[0] * Ee, ee[1] * Ee, ee[2] * Ee]
    }

    function Oe(ee) {
      const [ie, He, ye] = ee;
      return [ie >= 0 ? Math.PI - ie : -Math.PI - ie, de(He + Math.PI), de(ye + Math.PI)]
    }

    function de(ee) {
      return be.c.mod(ee + Math.PI, 2 * Math.PI) - Math.PI
    }

    function We(ee, ie) {
      return Math.abs(be.c.computeShortestRotation(ee[0], ie[0])) + Math.abs(be.c.computeShortestRotation(ee[1], ie[1])) + Math.abs(be.c.computeShortestRotation(ee[2], ie[2]))
    }
    const te = new Je
  },
  37963: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      c: () => Me,
      f: () => ye,
      i: () => be
    });
    let ye = function(ee) {
        return ee[ee.Linear = 0] = "Linear", ee[ee.CatmullRomSpline = 1] = "CatmullRomSpline", ee
      }({}),
      be = function(ee) {
        return ee[ee.NoLoop = 0] = "NoLoop", ee[ee.LoopOnLastFrame = 1] = "LoopOnLastFrame", ee[ee.HoldOnLastFrame = 2] = "HoldOnLastFrame", ee
      }({}),
      Me = function(ee) {
        return ee[ee.Movement = 0] = "Movement", ee[ee.Action = 1] = "Action", ee[ee.Emote = 2] = "Emote", ee[ee.Custom = 3] = "Custom", ee
      }({}),
      Ke = function(ee) {
        return ee[ee.Start = 0] = "Start", ee[ee.Stop = 1] = "Stop", ee
      }({})
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);