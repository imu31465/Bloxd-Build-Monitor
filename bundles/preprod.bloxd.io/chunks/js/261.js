export const id = 261;
export const ids = [261];
export const modules = {
  37843: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      f: () => oB,
      g: () => DB
    });
    const YB = 1024,
      DB = 16,
      QB = 36e4;
    class oB {
      constructor(BB) {
        this.boneCount = BB, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * BB), this.position = new Float64Array(3 * BB), this.scale = new Float64Array(3 * BB).fill(1), this.touched = new Uint8Array(BB)
      }
      clampToLimits() {
        for (let BB = 0; BB < this.boneCount; BB++)
          if (0 !== this.touched[BB])
            for (let OB = 3 * BB; OB < 3 * BB + 3; OB++) {
              const BB = this.rotation[OB],
                GB = this.position[OB],
                oB = this.scale[OB];
              BB >= -36e4 && BB <= QB || (this.rotation[OB] = yB(BB, QB)), GB >= -1024 && GB <= YB || (this.position[OB] = yB(GB, YB)), oB >= -DB && oB <= DB || (this.scale[OB] = yB(oB, DB, 1))
            }
      }
      reset() {
        for (let BB = 0; BB < this.boneCount; BB++)
          if (0 !== this.touched[BB]) {
            this.touched[BB] = 0;
            for (let OB = 3 * BB; OB < 3 * BB + 3; OB++) this.rotation[OB] = 0, this.position[OB] = 0, this.scale[OB] = 1
          }
      }
    }
    class jB {
      constructor(BB) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * BB), this.position = new Float64Array(3 * BB), this.scaleDelta = new Float64Array(3 * BB), this.boneWeight = new Float64Array(BB), this.touched = new Uint8Array(BB), this.overrides = new Uint8Array(BB), this.touchedBones = new Int32Array(BB)
      }
      touch(BB, OB, GB) {
        0 === this.touched[BB] && (this.touched[BB] = 1, this.touchedBones[this.touchedCount++] = BB), this.boneWeight[BB] += OB, GB && (this.overrides[BB] = 1)
      }
      applyTo(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let DB = 0; DB < this.touchedCount; DB++) {
          const QB = this.touchedBones[DB],
            oB = this.boneWeight[QB];
          if (GB || 1 === this.overrides[QB]) {
            const GB = OB * Math.min(1, oB);
            for (let OB = 3 * QB; OB < 3 * QB + 3; OB++) BB.rotation[OB] += (this.rotation[OB] / oB - BB.rotation[OB]) * GB, BB.position[OB] += (this.position[OB] / oB - BB.position[OB]) * GB, BB.scale[OB] += (1 + this.scaleDelta[OB] / oB - BB.scale[OB]) * GB
          } else {
            const GB = YB && oB > 1 ? OB / oB : OB;
            for (let OB = 3 * QB; OB < 3 * QB + 3; OB++) BB.rotation[OB] += this.rotation[OB] * GB, BB.position[OB] += this.position[OB] * GB, BB.scale[OB] *= 1 + this.scaleDelta[OB] * GB
          }
          BB.touched[QB] = 1
        }
      }
      clear() {
        for (let BB = 0; BB < this.touchedCount; BB++) {
          const OB = this.touchedBones[BB];
          this.touched[OB] = 0, this.overrides[OB] = 0, this.boneWeight[OB] = 0;
          for (let BB = 3 * OB; BB < 3 * OB + 3; BB++) this.rotation[BB] = 0, this.position[BB] = 0, this.scaleDelta[BB] = 0
        }
        this.touchedCount = 0
      }
    }

    function yB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(BB) ? GB : Math.min(OB, Math.max(-OB, BB))
    }
  },
  37841: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB,
      e: () => jB
    });
    var YB = GB(37836),
      DB = GB(353),
      QB = GB(1998),
      oB = GB(37843);

    function jB(BB) {
      if ("NG" in BB) return fB.createAnimationScript(BB);
      return new MB(BB).createAnimationScript()
    }

    function yB(BB, OB, GB, DB) {
      const QB = BB.NG <= 0 ? 1 : OB + GB * Math.max(0, DB) / BB.NG;
      return BB.WG === YB.m.LoopOnLastFrame ? QB % 1 : BB.WG === YB.m.NoLoop && QB >= 1 ? null : Math.min(1, QB)
    }
    class JB {
      createAnimationScript(BB) {
        const {
          NG: OB,
          loop: GB,
          AG: YB
        } = BB;
        return {
          NG: Math.round(OB),
          WG: this.createLoopMode(null !== GB && void 0 !== GB && GB),
          AG: this.createNodeSkeletonAnimationScript(null !== YB && void 0 !== YB ? YB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return YB.m.NoLoop;
          case !0:
            return YB.m.LoopOnLastFrame;
          case "hold-on-last-frame":
            return YB.m.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const OB = {};
        for (const GB in BB) {
          const YB = BB[GB];
          OB[GB] = this.createNodeAnimationScript(YB)
        }
        return OB
      }
      createNodeAnimationScript(BB) {
        const {
          timeline: OB
        } = BB, GB = OB.filter((BB => Number.isFinite(BB.timeFraction)));
        return GB.sort(((BB, OB) => BB.timeFraction - OB.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(GB, "rotation", lB),
          position: this.createTimelineFromKeyframes(GB, "position", qB),
          scale: this.createTimelineFromKeyframes(GB, "scale", qB, NB)
        }
      }
      createTimelineFromKeyframes(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB => BB;
        const DB = [];
        for (const JB of BB) {
          const BB = JB[OB];
          if (BB) {
            const OB = this.createAnimationFrameWithoutPrecomputes(JB.timeFraction, BB, YB);
            PB(OB) && DB.push(OB)
          }
        }
        const QB = [];
        for (let JB = 0; JB < DB.length; JB++) {
          var oB, jB, yB;
          const BB = DB[JB],
            OB = null !== (oB = DB[JB - 1]) && void 0 !== oB ? oB : BB,
            YB = null !== (jB = DB[JB + 1]) && void 0 !== jB ? jB : BB,
            MB = null !== (yB = DB[JB + 2]) && void 0 !== yB ? yB : YB;
          QB.push({
            ...BB,
            ...GB(OB.post, OB.timeFraction, BB.post, BB.timeFraction, YB.pre, YB.timeFraction, MB.pre, MB.timeFraction)
          })
        }
        return QB
      }
      createAnimationFrameWithoutPrecomputes(BB, OB, GB) {
        let YB, DB, QB = null;
        var oB;
        if ("object" === typeof OB && "point" in OB) QB = null !== (oB = OB.nG) && void 0 !== oB ? oB : null, YB = OB.point, DB = OB.point;
        else if ("object" === typeof OB && "pre" in OB) {
          var jB;
          QB = null !== (jB = OB.nG) && void 0 !== jB ? jB : null, YB = OB.pre, DB = OB.post
        } else YB = OB, DB = OB;
        return {
          timeFraction: BB,
          nG: this.createLerpMode(QB),
          pre: GB(YB),
          post: GB(DB)
        }
      }
      createLerpMode(BB) {
        return null === BB ? YB.j.Linear : JB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }
    JB.LERP_MODE_SCHEMA_MAPPING = {
      linear: YB.j.Linear,
      "catmull-rom-spline": YB.j.CatmullRomSpline
    };
    class MB {
      constructor(BB) {
        this.animationSchema = BB
      }
      createAnimationScript() {
        const {
          animation_length: BB,
          loop: OB,
          bones: GB
        } = this.animationSchema;
        return {
          NG: Math.round(1e3 * BB),
          WG: this.createLoopMode(null !== OB && void 0 !== OB && OB),
          AG: this.createNodeSkeletonAnimationScript(null !== GB && void 0 !== GB ? GB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return YB.m.NoLoop;
          case !0:
            return YB.m.LoopOnLastFrame;
          case "hold_on_last_frame":
            return YB.m.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const OB = {};
        for (const GB in BB) {
          const YB = BB[GB];
          OB[GB] = this.createNodeAnimationScript(YB)
        }
        return OB
      }
      createNodeAnimationScript(BB) {
        const {
          rotation: OB,
          position: GB,
          scale: YB
        } = BB;
        return {
          rotation: this.createAnimationTimeline(null !== OB && void 0 !== OB ? OB : null, WB, lB, !0),
          position: this.createAnimationTimeline(null !== GB && void 0 !== GB ? GB : null, VB, qB, !1),
          scale: this.createAnimationTimeline(null !== YB && void 0 !== YB ? YB : null, ZB, qB, !1)
        }
      }
      createAnimationTimeline(BB, OB, GB, YB) {
        if (null === BB) return [];
        (Array.isArray(BB) || "number" === typeof BB) && (BB = {
          "0.0": BB
        });
        const DB = Object.entries(BB).map((BB => {
          let [GB, YB] = BB;
          const DB = Number(GB) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(DB, YB, OB)
        })).filter(PB);
        DB.sort(((BB, OB) => BB.timeFraction - OB.timeFraction)), YB && function(BB) {
          for (let OB = 1; OB < BB.length; OB++) {
            const GB = BB[OB - 1].post,
              YB = BB[OB],
              DB = SB(YB.pre),
              QB = SB(YB.post),
              oB = UB(GB, YB.pre);
            UB(GB, DB) < oB && (BB[OB] = {
              ...YB,
              pre: DB,
              post: QB
            })
          }
        }(DB);
        const QB = [];
        for (let JB = 0; JB < DB.length; JB++) {
          var oB, jB, yB;
          const BB = DB[JB],
            OB = null !== (oB = DB[JB - 1]) && void 0 !== oB ? oB : BB,
            YB = null !== (jB = DB[JB + 1]) && void 0 !== jB ? jB : BB,
            MB = null !== (yB = DB[JB + 2]) && void 0 !== yB ? yB : YB;
          QB.push({
            ...BB,
            ...GB(OB.post, OB.timeFraction, BB.post, BB.timeFraction, YB.pre, YB.timeFraction, MB.pre, MB.timeFraction)
          })
        }
        return QB
      }
      createAnimationFrameWithoutPrecomputes(BB, OB, GB) {
        let YB, DB, QB = null;
        if ("object" === typeof OB && "post" in OB) {
          var oB;
          QB = null !== (oB = OB.lerp_mode) && void 0 !== oB ? oB : null, DB = GB(OB.post), YB = void 0 !== OB.pre ? GB(OB.pre) : DB
        } else {
          const BB = GB(OB);
          DB = BB, YB = BB
        }
        return {
          timeFraction: BB,
          nG: this.createLerpMode(QB),
          pre: YB,
          post: DB
        }
      }
      createLerpMode(BB) {
        return null === BB ? YB.j.Linear : MB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }

    function PB(BB) {
      return Number.isFinite(BB.timeFraction) && zB(BB.pre) && zB(BB.post)
    }

    function zB(BB) {
      return Number.isFinite(BB[0]) && Number.isFinite(BB[1]) && Number.isFinite(BB[2])
    }

    function lB(BB, OB, GB, YB, DB, QB, oB, jB) {
      const yB = QB - OB,
        JB = QB - YB,
        MB = jB - YB,
        PB = [null, null, null];
      for (let zB = 0; zB < PB.length; zB++) PB[zB] = pB(BB[zB], GB[zB], DB[zB], oB[zB], yB, MB);
      return {
        UG: JB,
        fG: PB
      }
    }

    function pB(BB, OB, GB, YB, QB, oB) {
      return {
        dG: DB.b.computeShortestRotation(BB, GB) / QB,
        KG: DB.b.computeShortestRotation(OB, YB) / oB,
        delta: DB.b.computeShortestRotation(OB, GB)
      }
    }

    function qB(BB, OB, GB, YB, DB, QB, oB, jB) {
      const yB = QB - OB,
        JB = QB - YB,
        MB = jB - YB,
        PB = [null, null, null];
      for (let zB = 0; zB < PB.length; zB++) PB[zB] = {
        dG: (DB[zB] - BB[zB]) / yB,
        KG: (oB[zB] - GB[zB]) / MB,
        delta: DB[zB] - GB[zB]
      };
      return {
        UG: JB,
        fG: PB
      }
    }

    function ZB(BB) {
      return NB("number" === typeof BB ? [BB, BB, BB] : BB)
    }

    function NB(BB) {
      return [RB(BB[0]), RB(BB[1]), RB(BB[2])]
    }

    function RB(BB) {
      return Number.isFinite(BB) ? Math.min(oB.g, Math.max(-oB.g, BB)) : BB
    }

    function WB(BB) {
      const [OB, GB, YB] = BB, oB = -(0, QB.h)(OB), jB = -(0, QB.h)(GB), yB = (0, QB.h)(YB), JB = DB.b.quaternionFromEulerZYX(oB, jB, yB);
      return DB.b.eulerYXZFromQuaternion(JB)
    }
    MB.LERP_MODE_SCHEMA_MAPPING = {
      linear: YB.j.Linear,
      catmullrom: YB.j.CatmullRomSpline
    };
    const AB = 1 / 16;

    function VB(BB) {
      return [-BB[0] * AB, BB[1] * AB, BB[2] * AB]
    }

    function SB(BB) {
      const [OB, GB, YB] = BB;
      return [OB >= 0 ? Math.PI - OB : -Math.PI - OB, nB(GB + Math.PI), nB(YB + Math.PI)]
    }

    function nB(BB) {
      return DB.b.mod(BB + Math.PI, 2 * Math.PI) - Math.PI
    }

    function UB(BB, OB) {
      return Math.abs(DB.b.computeShortestRotation(BB[0], OB[0])) + Math.abs(DB.b.computeShortestRotation(BB[1], OB[1])) + Math.abs(DB.b.computeShortestRotation(BB[2], OB[2]))
    }
    const fB = new JB
  },
  37836: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      f: () => QB,
      j: () => YB,
      m: () => DB
    });
    let YB = function(BB) {
        return BB[BB.Linear = 0] = "Linear", BB[BB.CatmullRomSpline = 1] = "CatmullRomSpline", BB
      }({}),
      DB = function(BB) {
        return BB[BB.NoLoop = 0] = "NoLoop", BB[BB.LoopOnLastFrame = 1] = "LoopOnLastFrame", BB[BB.HoldOnLastFrame = 2] = "HoldOnLastFrame", BB
      }({}),
      QB = function(BB) {
        return BB[BB.Movement = 0] = "Movement", BB[BB.Action = 1] = "Action", BB[BB.Emote = 2] = "Emote", BB[BB.Custom = 3] = "Custom", BB
      }({}),
      oB = function(BB) {
        return BB[BB.Start = 0] = "Start", BB[BB.Stop = 1] = "Stop", BB
      }({})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);