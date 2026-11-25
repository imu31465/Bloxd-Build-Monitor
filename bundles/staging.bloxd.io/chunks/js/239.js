export const id = 239;
export const ids = [239];
export const modules = {
  37562: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      g: () => Xu,
      h: () => Uu
    });
    const su = 1024,
      Uu = 16,
      Zu = 36e4;
    class Xu {
      constructor(uu) {
        this.boneCount = uu, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * uu), this.position = new Float64Array(3 * uu), this.scale = new Float64Array(3 * uu).fill(1), this.touched = new Uint8Array(uu)
      }
      clampToLimits() {
        for (let uu = 0; uu < this.boneCount; uu++)
          if (0 !== this.touched[uu])
            for (let Eu = 3 * uu; Eu < 3 * uu + 3; Eu++) {
              const uu = this.rotation[Eu],
                ju = this.position[Eu],
                Xu = this.scale[Eu];
              uu >= -36e4 && uu <= Zu || (this.rotation[Eu] = qu(uu, Zu)), ju >= -1024 && ju <= su || (this.position[Eu] = qu(ju, su)), Xu >= -Uu && Xu <= Uu || (this.scale[Eu] = qu(Xu, Uu, 1))
            }
      }
      reset() {
        for (let uu = 0; uu < this.boneCount; uu++)
          if (0 !== this.touched[uu]) {
            this.touched[uu] = 0;
            for (let Eu = 3 * uu; Eu < 3 * uu + 3; Eu++) this.rotation[Eu] = 0, this.position[Eu] = 0, this.scale[Eu] = 1
          }
      }
    }
    class lu {
      constructor(uu) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * uu), this.position = new Float64Array(3 * uu), this.scaleDelta = new Float64Array(3 * uu), this.boneWeight = new Float64Array(uu), this.touched = new Uint8Array(uu), this.overrides = new Uint8Array(uu), this.touchedBones = new Int32Array(uu)
      }
      touch(uu, Eu, ju) {
        0 === this.touched[uu] && (this.touched[uu] = 1, this.touchedBones[this.touchedCount++] = uu), this.boneWeight[uu] += Eu, ju && (this.overrides[uu] = 1)
      }
      applyTo(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let Uu = 0; Uu < this.touchedCount; Uu++) {
          const Zu = this.touchedBones[Uu],
            Xu = this.boneWeight[Zu];
          if (ju || 1 === this.overrides[Zu]) {
            const ju = Eu * Math.min(1, Xu);
            for (let Eu = 3 * Zu; Eu < 3 * Zu + 3; Eu++) uu.rotation[Eu] += (this.rotation[Eu] / Xu - uu.rotation[Eu]) * ju, uu.position[Eu] += (this.position[Eu] / Xu - uu.position[Eu]) * ju, uu.scale[Eu] += (1 + this.scaleDelta[Eu] / Xu - uu.scale[Eu]) * ju
          } else {
            const ju = su && Xu > 1 ? Eu / Xu : Eu;
            for (let Eu = 3 * Zu; Eu < 3 * Zu + 3; Eu++) uu.rotation[Eu] += this.rotation[Eu] * ju, uu.position[Eu] += this.position[Eu] * ju, uu.scale[Eu] *= 1 + this.scaleDelta[Eu] * ju
          }
          uu.touched[Zu] = 1
        }
      }
      clear() {
        for (let uu = 0; uu < this.touchedCount; uu++) {
          const Eu = this.touchedBones[uu];
          this.touched[Eu] = 0, this.overrides[Eu] = 0, this.boneWeight[Eu] = 0;
          for (let uu = 3 * Eu; uu < 3 * Eu + 3; uu++) this.rotation[uu] = 0, this.position[uu] = 0, this.scaleDelta[uu] = 0
        }
        this.touchedCount = 0
      }
    }

    function qu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(uu) ? ju : Math.min(Eu, Math.max(-Eu, uu))
    }
  },
  37554: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => qu,
      d: () => lu
    });
    var su = ju(37541),
      Uu = ju(349),
      Zu = ju(1955),
      Xu = ju(37562);

    function lu(uu) {
      if ("UU" in uu) return du.createAnimationScript(uu);
      return new Cu(uu).createAnimationScript()
    }

    function qu(uu, Eu, ju, Uu) {
      const Zu = uu.UU <= 0 ? 1 : Eu + ju * Math.max(0, Uu) / uu.UU;
      return uu.ZU === su.k.LoopOnLastFrame ? Zu % 1 : uu.ZU === su.k.NoLoop && Zu >= 1 ? null : Math.min(1, Zu)
    }
    class fu {
      createAnimationScript(uu) {
        const {
          UU: Eu,
          loop: ju,
          XU: su
        } = uu;
        return {
          UU: Math.round(Eu),
          ZU: this.createLoopMode(null !== ju && void 0 !== ju && ju),
          XU: this.createNodeSkeletonAnimationScript(null !== su && void 0 !== su ? su : null)
        }
      }
      createLoopMode(uu) {
        switch (uu) {
          case !1:
            return su.k.NoLoop;
          case !0:
            return su.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return su.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${uu}`)
      }
      createNodeSkeletonAnimationScript(uu) {
        if (null === uu) return null;
        const Eu = {};
        for (const ju in uu) {
          const su = uu[ju];
          Eu[ju] = this.createNodeAnimationScript(su)
        }
        return Eu
      }
      createNodeAnimationScript(uu) {
        const {
          timeline: Eu
        } = uu, ju = Eu.filter((uu => Number.isFinite(uu.timeFraction)));
        return ju.sort(((uu, Eu) => uu.timeFraction - Eu.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(ju, "rotation", Nu),
          position: this.createTimelineFromKeyframes(ju, "position", Yu),
          scale: this.createTimelineFromKeyframes(ju, "scale", Yu, Du)
        }
      }
      createTimelineFromKeyframes(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu => uu;
        const Uu = [];
        for (const fu of uu) {
          const uu = fu[Eu];
          if (uu) {
            const Eu = this.createAnimationFrameWithoutPrecomputes(fu.timeFraction, uu, su);
            bu(Eu) && Uu.push(Eu)
          }
        }
        const Zu = [];
        for (let fu = 0; fu < Uu.length; fu++) {
          var Xu, lu, qu;
          const uu = Uu[fu],
            Eu = null !== (Xu = Uu[fu - 1]) && void 0 !== Xu ? Xu : uu,
            su = null !== (lu = Uu[fu + 1]) && void 0 !== lu ? lu : uu,
            Cu = null !== (qu = Uu[fu + 2]) && void 0 !== qu ? qu : su;
          Zu.push({
            ...uu,
            ...ju(Eu.post, Eu.timeFraction, uu.post, uu.timeFraction, su.pre, su.timeFraction, Cu.pre, Cu.timeFraction)
          })
        }
        return Zu
      }
      createAnimationFrameWithoutPrecomputes(uu, Eu, ju) {
        let su, Uu, Zu = null;
        var Xu;
        if ("object" === typeof Eu && "point" in Eu) Zu = null !== (Xu = Eu.fU) && void 0 !== Xu ? Xu : null, su = Eu.point, Uu = Eu.point;
        else if ("object" === typeof Eu && "pre" in Eu) {
          var lu;
          Zu = null !== (lu = Eu.fU) && void 0 !== lu ? lu : null, su = Eu.pre, Uu = Eu.post
        } else su = Eu, Uu = Eu;
        return {
          timeFraction: uu,
          fU: this.createLerpMode(Zu),
          pre: ju(su),
          post: ju(Uu)
        }
      }
      createLerpMode(uu) {
        return null === uu ? su.h.Linear : fu.LERP_MODE_SCHEMA_MAPPING[uu]
      }
    }
    fu.LERP_MODE_SCHEMA_MAPPING = {
      linear: su.h.Linear,
      "catmull-rom-spline": su.h.CatmullRomSpline
    };
    class Cu {
      constructor(uu) {
        this.animationSchema = uu
      }
      createAnimationScript() {
        const {
          animation_length: uu,
          loop: Eu,
          bones: ju
        } = this.animationSchema;
        return {
          UU: Math.round(1e3 * uu),
          ZU: this.createLoopMode(null !== Eu && void 0 !== Eu && Eu),
          XU: this.createNodeSkeletonAnimationScript(null !== ju && void 0 !== ju ? ju : null)
        }
      }
      createLoopMode(uu) {
        switch (uu) {
          case !1:
            return su.k.NoLoop;
          case !0:
            return su.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return su.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${uu}`)
      }
      createNodeSkeletonAnimationScript(uu) {
        if (null === uu) return null;
        const Eu = {};
        for (const ju in uu) {
          const su = uu[ju];
          Eu[ju] = this.createNodeAnimationScript(su)
        }
        return Eu
      }
      createNodeAnimationScript(uu) {
        const {
          rotation: Eu,
          position: ju,
          scale: su
        } = uu;
        return {
          rotation: this.createAnimationTimeline(null !== Eu && void 0 !== Eu ? Eu : null, Mu, Nu, !0),
          position: this.createAnimationTimeline(null !== ju && void 0 !== ju ? ju : null, Gu, Yu, !1),
          scale: this.createAnimationTimeline(null !== su && void 0 !== su ? su : null, hu, Yu, !1)
        }
      }
      createAnimationTimeline(uu, Eu, ju, su) {
        if (null === uu) return [];
        (Array.isArray(uu) || "number" === typeof uu) && (uu = {
          "0.0": uu
        });
        const Uu = Object.entries(uu).map((uu => {
          let [ju, su] = uu;
          const Uu = Number(ju) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Uu, su, Eu)
        })).filter(bu);
        Uu.sort(((uu, Eu) => uu.timeFraction - Eu.timeFraction)), su && function(uu) {
          for (let Eu = 1; Eu < uu.length; Eu++) {
            const ju = uu[Eu - 1].post,
              su = uu[Eu],
              Uu = pu(su.pre),
              Zu = pu(su.post),
              Xu = Ju(ju, su.pre);
            Ju(ju, Uu) < Xu && (uu[Eu] = {
              ...su,
              pre: Uu,
              post: Zu
            })
          }
        }(Uu);
        const Zu = [];
        for (let fu = 0; fu < Uu.length; fu++) {
          var Xu, lu, qu;
          const uu = Uu[fu],
            Eu = null !== (Xu = Uu[fu - 1]) && void 0 !== Xu ? Xu : uu,
            su = null !== (lu = Uu[fu + 1]) && void 0 !== lu ? lu : uu,
            Cu = null !== (qu = Uu[fu + 2]) && void 0 !== qu ? qu : su;
          Zu.push({
            ...uu,
            ...ju(Eu.post, Eu.timeFraction, uu.post, uu.timeFraction, su.pre, su.timeFraction, Cu.pre, Cu.timeFraction)
          })
        }
        return Zu
      }
      createAnimationFrameWithoutPrecomputes(uu, Eu, ju) {
        let su, Uu, Zu = null;
        if ("object" === typeof Eu && "post" in Eu) {
          var Xu;
          Zu = null !== (Xu = Eu.lerp_mode) && void 0 !== Xu ? Xu : null, Uu = ju(Eu.post), su = void 0 !== Eu.pre ? ju(Eu.pre) : Uu
        } else {
          const uu = ju(Eu);
          Uu = uu, su = uu
        }
        return {
          timeFraction: uu,
          fU: this.createLerpMode(Zu),
          pre: su,
          post: Uu
        }
      }
      createLerpMode(uu) {
        return null === uu ? su.h.Linear : Cu.LERP_MODE_SCHEMA_MAPPING[uu]
      }
    }

    function bu(uu) {
      return Number.isFinite(uu.timeFraction) && cu(uu.pre) && cu(uu.post)
    }

    function cu(uu) {
      return Number.isFinite(uu[0]) && Number.isFinite(uu[1]) && Number.isFinite(uu[2])
    }

    function Nu(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
      const qu = Zu - Eu,
        fu = Zu - su,
        Cu = lu - su,
        bu = [null, null, null];
      for (let cu = 0; cu < bu.length; cu++) bu[cu] = Ou(uu[cu], ju[cu], Uu[cu], Xu[cu], qu, Cu);
      return {
        CU: fu,
        bU: bu
      }
    }

    function Ou(uu, Eu, ju, su, Zu, Xu) {
      return {
        NU: Uu.b.computeShortestRotation(uu, ju) / Zu,
        OU: Uu.b.computeShortestRotation(Eu, su) / Xu,
        delta: Uu.b.computeShortestRotation(Eu, ju)
      }
    }

    function Yu(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
      const qu = Zu - Eu,
        fu = Zu - su,
        Cu = lu - su,
        bu = [null, null, null];
      for (let cu = 0; cu < bu.length; cu++) bu[cu] = {
        NU: (Uu[cu] - uu[cu]) / qu,
        OU: (Xu[cu] - ju[cu]) / Cu,
        delta: Uu[cu] - ju[cu]
      };
      return {
        CU: fu,
        bU: bu
      }
    }

    function hu(uu) {
      return Du("number" === typeof uu ? [uu, uu, uu] : uu)
    }

    function Du(uu) {
      return [gu(uu[0]), gu(uu[1]), gu(uu[2])]
    }

    function gu(uu) {
      return Number.isFinite(uu) ? Math.min(Xu.h, Math.max(-Xu.h, uu)) : uu
    }

    function Mu(uu) {
      const [Eu, ju, su] = uu, Xu = -(0, Zu.k)(Eu), lu = -(0, Zu.k)(ju), qu = (0, Zu.k)(su), fu = Uu.b.quaternionFromEulerZYX(Xu, lu, qu);
      return Uu.b.eulerYXZFromQuaternion(fu)
    }
    Cu.LERP_MODE_SCHEMA_MAPPING = {
      linear: su.h.Linear,
      catmullrom: su.h.CatmullRomSpline
    };
    const eu = 1 / 16;

    function Gu(uu) {
      return [-uu[0] * eu, uu[1] * eu, uu[2] * eu]
    }

    function pu(uu) {
      const [Eu, ju, su] = uu;
      return [Eu >= 0 ? Math.PI - Eu : -Math.PI - Eu, wu(ju + Math.PI), wu(su + Math.PI)]
    }

    function wu(uu) {
      return Uu.b.mod(uu + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Ju(uu, Eu) {
      return Math.abs(Uu.b.computeShortestRotation(uu[0], Eu[0])) + Math.abs(Uu.b.computeShortestRotation(uu[1], Eu[1])) + Math.abs(Uu.b.computeShortestRotation(uu[2], Eu[2]))
    }
    const du = new fu
  },
  37541: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      f: () => Zu,
      h: () => su,
      k: () => Uu
    });
    let su = function(uu) {
        return uu[uu.Linear = 0] = "Linear", uu[uu.CatmullRomSpline = 1] = "CatmullRomSpline", uu
      }({}),
      Uu = function(uu) {
        return uu[uu.NoLoop = 0] = "NoLoop", uu[uu.LoopOnLastFrame = 1] = "LoopOnLastFrame", uu[uu.HoldOnLastFrame = 2] = "HoldOnLastFrame", uu
      }({}),
      Zu = function(uu) {
        return uu[uu.Movement = 0] = "Movement", uu[uu.Action = 1] = "Action", uu[uu.Emote = 2] = "Emote", uu[uu.Custom = 3] = "Custom", uu
      }({}),
      Xu = function(uu) {
        return uu[uu.Start = 0] = "Start", uu[uu.Stop = 1] = "Stop", uu
      }({})
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);