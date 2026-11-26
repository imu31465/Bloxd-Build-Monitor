export const id = 291;
export const ids = [291];
export const modules = {
  41294: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor(BB, OB, GB) {
        this.bu = BB, this.bv = OB, this.distance = GB, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  41307: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(37785),
      DB = GB(37778),
      QB = GB(37782);
    class oB {
      constructor(BB, OB, GB) {
        this.vectors = (0, YB.e)(8, DB.r.Zero), this.center = DB.r.Zero(), this.centerWorld = DB.r.Zero(), this.extendSize = DB.r.Zero(), this.extendSizeWorld = DB.r.Zero(), this.directions = (0, YB.e)(3, DB.r.Zero), this.vectorsWorld = (0, YB.e)(8, DB.r.Zero), this.minimumWorld = DB.r.Zero(), this.maximumWorld = DB.r.Zero(), this.minimum = DB.r.Zero(), this.maximum = DB.r.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(BB, OB, GB)
      }
      reConstruct(BB, OB, GB) {
        const YB = BB.x,
          QB = BB.y,
          oB = BB.z,
          jB = OB.x,
          yB = OB.y,
          JB = OB.z,
          MB = this.vectors;
        this.minimum.zOB(YB, QB, oB), this.maximum.zOB(jB, yB, JB), MB[0].zOB(YB, QB, oB), MB[1].zOB(jB, yB, JB), MB[2].zOB(jB, QB, oB), MB[3].zOB(YB, yB, oB), MB[4].zOB(YB, QB, JB), MB[5].zOB(jB, yB, oB), MB[6].zOB(YB, yB, JB), MB[7].zOB(jB, QB, JB), OB.addToRef(BB, this.center).scaleInPlace(.5), OB.subtractToRef(BB, this.extendSize).scaleInPlace(.5), this._worldMatrix = GB || DB.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(BB) {
        const OB = oB._TmpVector3,
          GB = this.maximum.subtractToRef(this.minimum, OB[0]),
          YB = GB.length();
        GB.normalizeFromLength(YB);
        const DB = YB * BB,
          QB = GB.scaleInPlace(.5 * DB),
          jB = this.center.subtractToRef(QB, OB[1]),
          yB = this.center.addToRef(QB, OB[2]);
        return this.reConstruct(jB, yB, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(BB) {
        const OB = this.minimumWorld,
          GB = this.maximumWorld,
          YB = this.directions,
          QB = this.vectorsWorld,
          oB = this.vectors;
        if (BB.isIdentity()) {
          OB.IU(this.minimum), GB.IU(this.maximum);
          for (let BB = 0; BB < 8; ++BB) QB[BB].IU(oB[BB]);
          this.extendSizeWorld.IU(this.extendSize), this.centerWorld.IU(this.center)
        } else {
          OB.uBB(Number.MAX_VALUE), GB.uBB(-Number.MAX_VALUE);
          for (let YB = 0; YB < 8; ++YB) {
            const jB = QB[YB];
            DB.r.TransformCoordinatesToRef(oB[YB], BB, jB), OB.minimizeInPlace(jB), GB.maximizeInPlace(jB)
          }
          GB.subtractToRef(OB, this.extendSizeWorld).scaleInPlace(.5), GB.addToRef(OB, this.centerWorld).scaleInPlace(.5)
        }
        DB.r.FromArrayToRef(BB.m, 0, YB[0]), DB.r.FromArrayToRef(BB.m, 4, YB[1]), DB.r.FromArrayToRef(BB.m, 8, YB[2]), this._worldMatrix = BB
      }
      isInFrustum(BB) {
        return oB.IsInFrustum(this.vectorsWorld, BB)
      }
      isCompletelyInFrustum(BB) {
        return oB.IsCompletelyInFrustum(this.vectorsWorld, BB)
      }
      intersectsPoint(BB) {
        const OB = this.minimumWorld,
          GB = this.maximumWorld,
          YB = OB.x,
          DB = OB.y,
          oB = OB.z,
          jB = GB.x,
          yB = GB.y,
          JB = GB.z,
          MB = BB.x,
          PB = BB.y,
          zB = BB.z,
          lB = -QB.b;
        return !(jB - MB < lB || lB > MB - YB) && (!(yB - PB < lB || lB > PB - DB) && !(JB - zB < lB || lB > zB - oB))
      }
      intersectsSphere(BB) {
        return oB.IntersectsSphere(this.minimumWorld, this.maximumWorld, BB.centerWorld, BB.radiusWorld)
      }
      intersectsMinMax(BB, OB) {
        const GB = this.minimumWorld,
          YB = this.maximumWorld,
          DB = GB.x,
          QB = GB.y,
          oB = GB.z,
          jB = YB.x,
          yB = YB.y,
          JB = YB.z,
          MB = BB.x,
          PB = BB.y,
          zB = BB.z,
          lB = OB.x,
          pB = OB.y,
          qB = OB.z;
        return !(jB < MB || DB > lB) && (!(yB < PB || QB > pB) && !(JB < zB || oB > qB))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(BB, OB) {
        return BB.intersectsMinMax(OB.minimumWorld, OB.maximumWorld)
      }
      static IntersectsSphere(BB, OB, GB, YB) {
        const QB = oB._TmpVector3[0];
        DB.r.ClampToRef(GB, BB, OB, QB);
        return DB.r.DistanceSquared(GB, QB) <= YB * YB
      }
      static IsCompletelyInFrustum(BB, OB) {
        for (let GB = 0; GB < 6; ++GB) {
          const YB = OB[GB];
          for (let OB = 0; OB < 8; ++OB)
            if (YB.dotCoordinate(BB[OB]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(BB, OB) {
        for (let GB = 0; GB < 6; ++GB) {
          let YB = !0;
          const DB = OB[GB];
          for (let OB = 0; OB < 8; ++OB)
            if (DB.dotCoordinate(BB[OB]) >= 0) {
              YB = !1;
              break
            } if (YB) return !1
        }
        return !0
      }
    }
    oB._TmpVector3 = (0, YB.e)(3, DB.r.Zero)
  },
  41300: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => PB
    });
    var YB = GB(37785),
      DB = GB(37778),
      QB = GB(41307);
    class oB {
      constructor(BB, OB, GB) {
        this.center = DB.r.Zero(), this.centerWorld = DB.r.Zero(), this.minimum = DB.r.Zero(), this.maximum = DB.r.Zero(), this.reConstruct(BB, OB, GB)
      }
      reConstruct(BB, OB, GB) {
        this.minimum.IU(BB), this.maximum.IU(OB);
        const YB = DB.r.Distance(BB, OB);
        OB.addToRef(BB, this.center).scaleInPlace(.5), this.radius = .5 * YB, this._update(GB || DB.d.IdentityReadOnly)
      }
      scale(BB) {
        const OB = oB._TmpVector3,
          GB = this.maximum.subtractToRef(this.minimum, OB[0]),
          YB = GB.length();
        GB.normalizeFromLength(YB);
        const DB = YB * BB,
          QB = GB.scaleInPlace(.5 * DB),
          jB = this.center.subtractToRef(QB, OB[1]),
          yB = this.center.addToRef(QB, OB[2]);
        return this.reConstruct(jB, yB, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(BB) {
        if (BB.isIdentity()) this.centerWorld.IU(this.center), this.radiusWorld = this.radius;
        else {
          DB.r.TransformCoordinatesToRef(this.center, BB, this.centerWorld);
          const OB = oB._TmpVector3[0];
          DB.r.TransformNormalFromFloatsToRef(1, 1, 1, BB, OB), this.radiusWorld = Math.max(Math.abs(OB.x), Math.abs(OB.y), Math.abs(OB.z)) * this.radius
        }
      }
      isInFrustum(BB) {
        const OB = this.centerWorld,
          GB = this.radiusWorld;
        for (let YB = 0; YB < 6; YB++)
          if (BB[YB].dotCoordinate(OB) <= -GB) return !1;
        return !0
      }
      isCenterInFrustum(BB) {
        const OB = this.centerWorld;
        for (let GB = 0; GB < 6; GB++)
          if (BB[GB].dotCoordinate(OB) < 0) return !1;
        return !0
      }
      intersectsPoint(BB) {
        const OB = DB.r.DistanceSquared(this.centerWorld, BB);
        return !(this.radiusWorld * this.radiusWorld < OB)
      }
      static Intersects(BB, OB) {
        const GB = DB.r.DistanceSquared(BB.centerWorld, OB.centerWorld),
          YB = BB.radiusWorld + OB.radiusWorld;
        return !(YB * YB < GB)
      }
      static CreateFromCenterAndRadius(BB, OB, GB) {
        this._TmpVector3[0].IU(BB), this._TmpVector3[1].zOB(0, 0, OB), this._TmpVector3[2].IU(BB), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].CDB(this._TmpVector3[1]);
        const YB = new oB(this._TmpVector3[0], this._TmpVector3[2]);
        return YB._worldMatrix = GB || DB.d.Identity(), YB
      }
    }
    oB._TmpVector3 = (0, YB.e)(3, DB.r.Zero);
    const jB = {
        min: 0,
        max: 0
      },
      yB = {
        min: 0,
        max: 0
      },
      JB = (BB, OB, GB) => {
        const YB = DB.r.Dot(OB.centerWorld, BB),
          QB = Math.abs(DB.r.Dot(OB.directions[0], BB)) * OB.extendSize.x + Math.abs(DB.r.Dot(OB.directions[1], BB)) * OB.extendSize.y + Math.abs(DB.r.Dot(OB.directions[2], BB)) * OB.extendSize.z;
        GB.min = YB - QB, GB.max = YB + QB
      },
      MB = (BB, OB, GB) => (JB(BB, OB, jB), JB(BB, GB, yB), !(jB.min > yB.max || yB.min > jB.max));
    class PB {
      constructor(BB, OB, GB) {
        this._isLocked = !1, this.boundingBox = new QB.c(BB, OB, GB), this.xDB = new oB(BB, OB, GB)
      }
      reConstruct(BB, OB, GB) {
        this.boundingBox.reConstruct(BB, OB, GB), this.xDB.reConstruct(BB, OB, GB)
      }
      get minimum() {
        return this.boundingBox.minimum
      }
      get maximum() {
        return this.boundingBox.maximum
      }
      get isLocked() {
        return this._isLocked
      }
      set isLocked(BB) {
        this._isLocked = BB
      }
      update(BB) {
        this._isLocked || (this.boundingBox._update(BB), this.xDB._update(BB))
      }
      centerOn(BB, OB) {
        const GB = PB._TmpVector3[0].IU(BB).CDB(OB),
          YB = PB._TmpVector3[1].IU(BB).addInPlace(OB);
        return this.boundingBox.reConstruct(GB, YB, this.boundingBox.getWorldMatrix()), this.xDB.reConstruct(GB, YB, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(BB) {
        const OB = DB.r.Minimize(this.minimum, BB),
          GB = DB.r.Maximize(this.maximum, BB);
        return this.reConstruct(OB, GB, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(BB) {
        const OB = DB.k.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(OB);
        const GB = DB.k.Xp[0];
        return DB.r.TransformCoordinatesToRef(BB.boundingBox.minimumWorld, OB, GB), this.encapsulate(GB), DB.r.TransformCoordinatesToRef(BB.boundingBox.maximumWorld, OB, GB), this.encapsulate(GB), this
      }
      scale(BB) {
        return this.boundingBox.scale(BB), this.xDB.scale(BB), this
      }
      isInFrustum(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === OB || 3 === OB) && this.xDB.isCenterInFrustum(BB)) return !0;
        if (!this.xDB.isInFrustum(BB)) return !1;
        return !(1 !== OB && 3 !== OB) || this.boundingBox.isInFrustum(BB)
      }
      get diagonalLength() {
        const BB = this.boundingBox;
        return BB.maximumWorld.subtractToRef(BB.minimumWorld, PB._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(BB) {
        return this.boundingBox.isCompletelyInFrustum(BB)
      }
      _checkCollision(BB) {
        return BB._canDoCollision(this.xDB.centerWorld, this.xDB.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(BB) {
        return !!this.xDB.centerWorld && (!!this.xDB.intersectsPoint(BB) && !!this.boundingBox.intersectsPoint(BB))
      }
      intersects(BB, OB) {
        if (!oB.Intersects(this.xDB, BB.xDB)) return !1;
        if (!QB.c.Intersects(this.boundingBox, BB.boundingBox)) return !1;
        if (!OB) return !0;
        const GB = this.boundingBox,
          YB = BB.boundingBox;
        return !!MB(GB.directions[0], GB, YB) && (!!MB(GB.directions[1], GB, YB) && (!!MB(GB.directions[2], GB, YB) && (!!MB(YB.directions[0], GB, YB) && (!!MB(YB.directions[1], GB, YB) && (!!MB(YB.directions[2], GB, YB) && (!!MB(DB.r.Cross(GB.directions[0], YB.directions[0]), GB, YB) && (!!MB(DB.r.Cross(GB.directions[0], YB.directions[1]), GB, YB) && (!!MB(DB.r.Cross(GB.directions[0], YB.directions[2]), GB, YB) && (!!MB(DB.r.Cross(GB.directions[1], YB.directions[0]), GB, YB) && (!!MB(DB.r.Cross(GB.directions[1], YB.directions[1]), GB, YB) && (!!MB(DB.r.Cross(GB.directions[1], YB.directions[2]), GB, YB) && (!!MB(DB.r.Cross(GB.directions[2], YB.directions[0]), GB, YB) && (!!MB(DB.r.Cross(GB.directions[2], YB.directions[1]), GB, YB) && !!MB(DB.r.Cross(GB.directions[2], YB.directions[2]), GB, YB))))))))))))))
      }
    }
    PB._TmpVector3 = (0, YB.e)(2, DB.r.Zero)
  },
  41333: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      g: () => yB,
      k: () => jB,
      o: () => oB
    });
    var YB = GB(41164),
      DB = GB(37778);

    function QB(BB) {
      -1 === BB.indexOf("vClipPlane") && BB.push("vClipPlane"), -1 === BB.indexOf("vClipPlane2") && BB.push("vClipPlane2"), -1 === BB.indexOf("vClipPlane3") && BB.push("vClipPlane3"), -1 === BB.indexOf("vClipPlane4") && BB.push("vClipPlane4"), -1 === BB.indexOf("vClipPlane5") && BB.push("vClipPlane5"), -1 === BB.indexOf("vClipPlane6") && BB.push("vClipPlane6")
    }

    function oB(BB, OB, GB) {
      const YB = !!(BB.clipPlane ?? OB.clipPlane),
        DB = !!(BB.clipPlane2 ?? OB.clipPlane2),
        QB = !!(BB.clipPlane3 ?? OB.clipPlane3),
        oB = !!(BB.clipPlane4 ?? OB.clipPlane4),
        jB = !!(BB.clipPlane5 ?? OB.clipPlane5),
        yB = !!(BB.clipPlane6 ?? OB.clipPlane6);
      YB && GB.push("#define CLIPPLANE"), DB && GB.push("#define CLIPPLANE2"), QB && GB.push("#define CLIPPLANE3"), oB && GB.push("#define CLIPPLANE4"), jB && GB.push("#define CLIPPLANE5"), yB && GB.push("#define CLIPPLANE6")
    }

    function jB(BB, OB, GB) {
      let YB = !1;
      const DB = !!(BB.clipPlane ?? OB.clipPlane),
        QB = !!(BB.clipPlane2 ?? OB.clipPlane2),
        oB = !!(BB.clipPlane3 ?? OB.clipPlane3),
        jB = !!(BB.clipPlane4 ?? OB.clipPlane4),
        yB = !!(BB.clipPlane5 ?? OB.clipPlane5),
        JB = !!(BB.clipPlane6 ?? OB.clipPlane6);
      return GB.CLIPPLANE !== DB && (GB.CLIPPLANE = DB, YB = !0), GB.CLIPPLANE2 !== QB && (GB.CLIPPLANE2 = QB, YB = !0), GB.CLIPPLANE3 !== oB && (GB.CLIPPLANE3 = oB, YB = !0), GB.CLIPPLANE4 !== jB && (GB.CLIPPLANE4 = jB, YB = !0), GB.CLIPPLANE5 !== yB && (GB.CLIPPLANE5 = yB, YB = !0), GB.CLIPPLANE6 !== JB && (GB.CLIPPLANE6 = JB, YB = !0), YB
    }

    function yB(BB, OB, GB) {
      let YB = OB.clipPlane ?? GB.clipPlane;
      JB(BB, "vClipPlane", YB), YB = OB.clipPlane2 ?? GB.clipPlane2, JB(BB, "vClipPlane2", YB), YB = OB.clipPlane3 ?? GB.clipPlane3, JB(BB, "vClipPlane3", YB), YB = OB.clipPlane4 ?? GB.clipPlane4, JB(BB, "vClipPlane4", YB), YB = OB.clipPlane5 ?? GB.clipPlane5, JB(BB, "vClipPlane5", YB), YB = OB.clipPlane6 ?? GB.clipPlane6, JB(BB, "vClipPlane6", YB)
    }

    function JB(BB, OB, GB) {
      if (GB) {
        const QB = YB.c.JF()?.floatingOriginOffset || DB.r.ZeroReadOnly;
        BB.setFloat4(OB, GB.normal.x, GB.normal.y, GB.normal.z, GB.d + DB.r.Dot(GB.normal, QB))
      }
    }
  },
  41354: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(BB, OB) {
        this._defines[BB] || (BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB), this._defines[BB] = new Array), this._defines[BB].push(OB)
      }
      addCPUSkinningFallback(BB, OB) {
        this._mesh = OB, BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(BB, OB) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, BB = BB.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), OB._bonesComputationForcedToCPU = !0;
          const GB = this._mesh.JF();
          for (let BB = 0; BB < GB.meshes.length; BB++) {
            const YB = GB.meshes[BB];
            if (YB.material) {
              if (YB.computeBonesUsingShaders && 0 !== YB.numBoneInfluencers)
                if (YB.material.getEffect() === OB) YB.computeBonesUsingShaders = !1;
                else if (YB.iW)
                for (const BB of YB.iW) {
                  if (BB.effect === OB) {
                    YB.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && YB.computeBonesUsingShaders && YB.numBoneInfluencers > 0 && (YB.computeBonesUsingShaders = !1)
          }
        } else {
          const OB = this._defines[this._currentRank];
          if (OB)
            for (let GB = 0; GB < OB.length; GB++) BB = BB.replace("#define " + OB[GB], "");
          this._currentRank++
        }
        return BB
      }
    }
  },
  41283: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => RB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(41097),
      oB = GB(37802),
      jB = GB(37796),
      yB = GB(41287),
      JB = GB(41136),
      MB = GB(39366),
      PB = GB(38432),
      zB = GB(41323),
      lB = GB(41022);
    let pB = (() => {
      var BB;
      let OB, GB, QB, oB, jB, yB, JB, MB, PB, zB, pB, qB, ZB = [];
      return BB = class {
        constructor() {
          this._func = (0, YB.j)(this, ZB), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(BB) {
          this._func = BB
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(BB) {
          this._backFunc = BB
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(BB) {
          this._funcRef = BB
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(BB) {
          this._funcMask = BB
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(BB) {
          this._opStencilFail = BB
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(BB) {
          this._opDepthFail = BB
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(BB) {
          this._opStencilDepthPass = BB
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(BB) {
          this._backOpStencilFail = BB
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(BB) {
          this._backOpDepthFail = BB
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(BB) {
          this._backOpStencilDepthPass = BB
        }
        get mask() {
          return this._mask
        }
        set mask(BB) {
          this._mask = BB
        }
        get enabled() {
          return this._enabled
        }
        set enabled(BB) {
          this._enabled = BB
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(BB) {
          lB.d.Clone((() => BB), this)
        }
        serialize() {
          return lB.d.Serialize(this)
        }
        parse(BB, OB, GB) {
          lB.d.Parse((() => this), BB, OB, GB)
        }
      }, (() => {
        const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], (0, YB.h)(BB, null, OB, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: BB => "func" in BB,
            get: BB => BB.func
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, GB, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: BB => "backFunc" in BB,
            get: BB => BB.backFunc
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, QB, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: BB => "funcRef" in BB,
            get: BB => BB.funcRef
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, oB, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "funcMask" in BB,
            get: BB => BB.funcMask
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, jB, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "opStencilFail" in BB,
            get: BB => BB.opStencilFail
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, yB, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "opDepthFail" in BB,
            get: BB => BB.opDepthFail
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, JB, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "opStencilDepthPass" in BB,
            get: BB => BB.opStencilDepthPass
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, MB, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpStencilFail" in BB,
            get: BB => BB.backOpStencilFail
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, PB, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpDepthFail" in BB,
            get: BB => BB.backOpDepthFail
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, zB, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpStencilDepthPass" in BB,
            get: BB => BB.backOpStencilDepthPass
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, pB, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: BB => "mask" in BB,
            get: BB => BB.mask
          },
          metadata: lB
        }, null, ZB), (0, YB.h)(BB, null, qB, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "enabled" in BB,
            get: BB => BB.enabled
          },
          metadata: lB
        }, null, ZB), lB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lB
        })
      })(), BB
    })();
    var qB = GB(41325),
      ZB = GB(40918),
      NB = GB(40890);
    let RB = (() => {
      var BB;
      let OB, GB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB, FB, iB, LB, gB, rB, XB, wB, EB, cB, hB, aB, eB, TB = [],
        bB = [],
        CB = [],
        HB = [],
        vB = [],
        sB = [],
        xB = [],
        tB = [],
        BO = [],
        OO = [],
        GO = [],
        YO = [],
        DO = [],
        QO = [],
        oO = [],
        jO = [],
        yO = [],
        JO = [],
        MO = [],
        PO = [],
        zO = [],
        lO = [],
        pO = [],
        qO = [],
        ZO = [],
        NO = [],
        RO = [],
        WO = [],
        AO = [],
        VO = [],
        SO = [],
        nO = [],
        UO = [],
        fO = [],
        kO = [],
        dO = [],
        KO = [],
        uO = [],
        mO = [],
        IO = [],
        FO = [],
        iO = [],
        LO = [],
        gO = [],
        rO = [],
        XO = [],
        wO = [],
        EO = [],
        cO = [],
        hO = [],
        aO = [];
      return BB = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(OB) {
          this._useVertexPulling !== OB && (this._useVertexPulling = OB, this.DYB(BB.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(BB) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(OB) {
          if (this._alpha === OB) return;
          const GB = this._alpha;
          this._alpha = OB, 1 !== GB && 1 !== OB || this.DYB(BB.MiscDirtyFlag + BB.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(OB) {
          this._backFaceCulling !== OB && (this._backFaceCulling = OB, this.DYB(BB.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(OB) {
          const GB = Math.max(0, Math.min(0 | OB, 4));
          this._textureRepetitionMode !== GB && (this._textureRepetitionMode = GB, this.DYB(BB.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(OB) {
          this._cullBackFaces !== OB && (this._cullBackFaces = OB, this.DYB(BB.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(BB) {
          this._blockDirtyMechanism !== BB && (this._blockDirtyMechanism = BB, BB || this.markDirty())
        }
        atomicMaterialsUpdate(BB) {
          this.blockDirtyMechanism = !0;
          try {
            BB(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(BB) {
          this._onDisposeObserver && this.lF.remove(this._onDisposeObserver), this._onDisposeObserver = this.lF.add(BB)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new oB.b), this._onBindObservable
        }
        set onBind(BB) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(BB)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new oB.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new oB.b), this._onEffectCreatedObservable
        }
        set alphaMode(BB) {
          this._alphaMode[0] = BB
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[GB] !== OB && (this._alphaMode[GB] = OB, this.DYB(BB.TextureDirtyFlag))
        }
        set needDepthPrePass(BB) {
          this._needDepthPrePass !== BB && (this._needDepthPrePass = BB, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(OB) {
          this._fogEnabled !== OB && (this._fogEnabled = OB, this.DYB(BB.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case BB.WireFrameFillMode:
            case BB.LineListDrawMode:
            case BB.LineLoopDrawMode:
            case BB.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(OB) {
          this.fillMode = OB ? BB.WireFrameFillMode : BB.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case BB.PointFillMode:
            case BB.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(OB) {
          this.fillMode = OB ? BB.PointFillMode : BB.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(OB) {
          this._fillMode !== OB && (this._fillMode = OB, this.DYB(BB.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(BB) {
          const OB = this.JF().Lp().getCaps().fragmentDepthSupported;
          BB && !OB && MB.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = BB && OB, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(BB) {
          this._isVertexOutputInvariant !== BB && (this._isVertexOutputInvariant = BB, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(BB) {
          this._drawWrapper = BB
        }
        constructor(OB, GB, DB) {
          let yB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, YB.j)(this, TB), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, YB.j)(this, bB, void 0), this.uniqueId = ((0, YB.j)(this, CB), (0, YB.j)(this, HB, void 0)), this._loadedUniqueId = (0, YB.j)(this, vB), this.name = (0, YB.j)(this, sB, void 0), this.metadata = ((0, YB.j)(this, xB), (0, YB.j)(this, tB, null)), this._internalMetadata = (0, YB.j)(this, BO), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, YB.j)(this, OO, !1), this.checkReadyOnlyOnce = ((0, YB.j)(this, GO), (0, YB.j)(this, YO, !1)), this.state = ((0, YB.j)(this, DO), (0, YB.j)(this, QO, "")), this._alpha = ((0, YB.j)(this, oO), (0, YB.j)(this, jO, 1)), this.inspectableCustomProperties = (0, YB.j)(this, yO), this._backFaceCulling = (0, YB.j)(this, JO, !0), this._textureRepetitionMode = ((0, YB.j)(this, MO), (0, YB.j)(this, PO, 0)), this.textureRepetitionHexTilingParams = ((0, YB.j)(this, zO), (0, YB.j)(this, lO, [1, .6, 7, .5])), this._cullBackFaces = ((0, YB.j)(this, pO), (0, YB.j)(this, qO, !0)), this._blockDirtyMechanism = ((0, YB.j)(this, ZO), !1), this.sideOrientation = (0, YB.j)(this, NO, null), this.onCompiled = ((0, YB.j)(this, RO), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.lF = new oB.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, YB.j)(this, WO, [2]), this._needDepthPrePass = ((0, YB.j)(this, AO), (0, YB.j)(this, VO, !1)), this.disableDepthWrite = ((0, YB.j)(this, SO), (0, YB.j)(this, nO, !1)), this.disableColorWrite = ((0, YB.j)(this, UO), (0, YB.j)(this, fO, !1)), this.forceDepthWrite = ((0, YB.j)(this, kO), (0, YB.j)(this, dO, !1)), this.depthFunction = ((0, YB.j)(this, KO), (0, YB.j)(this, uO, 0)), this.separateCullingPass = ((0, YB.j)(this, mO), (0, YB.j)(this, IO, !1)), this._fogEnabled = ((0, YB.j)(this, FO), (0, YB.j)(this, iO, !0)), this.pointSize = ((0, YB.j)(this, LO), (0, YB.j)(this, gO, 1)), this.zOffset = ((0, YB.j)(this, rO), (0, YB.j)(this, XO, 0)), this.zOffsetUnits = ((0, YB.j)(this, wO), (0, YB.j)(this, EO, 0)), this.clipPlane = (0, YB.j)(this, cO), this.stencil = new pB, this._isVertexOutputInvariant = (0, YB.j)(this, hO, BB.ForceVertexOutputInvariant), this._materialContext = (0, YB.j)(this, aO), this._useUBO = !1, this._fillMode = BB.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = OB;
          const MB = GB || jB.b.LastCreatedScene;
          MB && (this._scene = MB, this._dirtyCallbacks = {}, this._forceGLSL = yB, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = OB || QB.j.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Lp().createMaterialContext(), this._drawWrapper = new zB.d(this._scene.Lp(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new JB.d(this._scene.Lp(), void 0, void 0, OB), this._useUBO = this.JF().Lp().supportsUniformBuffers, this._createUniformBuffer(), DB || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), BB.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const BB = this.JF().Lp();
          this._uniformBuffer?.dispose(), BB.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new JB.d(BB, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new JB.d(this._scene.Lp(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(BB) {
          return "Name: " + this.name
        }
        getClassName() {
          return "Material"
        }
        get _isMaterial() {
          return !0
        }
        get isFrozen() {
          return this.checkReadyOnlyOnce
        }
        freeze() {
          this.markDirty(), this.checkReadyOnlyOnce = !0
        }
        unfreeze() {
          this.markDirty(), this.checkReadyOnlyOnce = !1
        }
        isReady(BB, OB) {
          return !0
        }
        isReadyForSubMesh(BB, OB, GB) {
          const YB = OB.materialDefines;
          return !!YB && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = YB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        JF() {
          return this._scene
        }
        _getEffectiveOrientation(BB) {
          return null !== this.sideOrientation ? this.sideOrientation : BB.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(BB) {
          this._transparencyMode = BB
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === BB.MATERIAL_ALPHABLEND || this._transparencyMode === BB.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === BB.MATERIAL_ALPHATEST || this._transparencyMode === BB.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === BB.MATERIAL_OPAQUE || this._transparencyMode === BB.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(BB) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : BB.visibility < 1 || !this._disableAlphaBlending && (BB.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(BB) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(BB) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const GB = this.JF().meshes;
          for (const BB of GB)
            if (BB.iW)
              for (const GB of BB.iW)
                if (GB.cp() === this)
                  for (const BB of GB._drawWrappers) BB && this._materialContext === BB.materialContext && (BB._wasPreviouslyReady = !1, BB._wasPreviouslyUsingInstances = null, BB._forceRebindOnNextCall = OB);
          OB && this.DYB(BB.AllDirtyFlag)
        }
        _preBind(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const YB = this._scene.Lp(),
            DB = (null == GB ? this.sideOrientation : GB) === BB.ClockWiseSideOrientation,
            QB = OB || this._getDrawWrapper();
          return (0, ZB.b)(QB) && QB.materialContext && (QB.materialContext.useVertexPulling = this.useVertexPulling), YB.enableEffect(QB), YB.setState(this.backFaceCulling, this.zOffset, !1, DB, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), DB
        }
        bind(BB, OB) {}
        buildUniformLayout() {
          const BB = this._uniformBuffer;
          this._eventInfo.ubo = BB, this._callbackPluginEventGeneric(8, this._eventInfo), BB.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(BB, OB, GB) {
          const YB = GB._drawWrapper;
          this._eventInfo.subMesh = GB, this._callbackPluginEventBindForSubMesh(this._eventInfo), YB._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(BB) {}
        bindView(BB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : BB.setMatrix("view", this.JF().getViewMatrix())
        }
        bindViewProjection(BB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (BB.setMatrix("viewProjection", this.JF().getTransformMatrix()), BB.setMatrix("projection", this.JF().getProjectionMatrix()), BB.setMatrix("inverseProjection", this.JF().getInverseProjectionMatrix()))
        }
        bindEyePosition(BB, OB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(BB, OB)
        }
        _afterBind(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && OB && (this._needToBindSceneUbo = !1, (0, qB.E)(OB, this.JF().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = BB ? BB.visibility : 1, this._onBindObservable && BB && this._onBindObservable.notifyObservers(BB), this.disableDepthWrite) {
            const BB = this._scene.Lp();
            this._cachedDepthWriteState = BB.getDepthWrite(), BB.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const BB = this._scene.Lp();
            this._cachedColorWriteState = BB.getColorWrite(), BB.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const BB = this._scene.Lp();
            this._cachedDepthFunctionState = BB.getDepthFunction() || 0, BB.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Lp().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Lp().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Lp().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(BB) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = BB, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(BB) {
          return null
        }
        _clonePlugins(OB, GB) {
          const YB = {};
          if (this._serializePlugins(YB), BB._ParsePlugins(YB, OB, this._scene, GB), this.pluginManager)
            for (const BB of this.pluginManager._plugins) {
              const GB = OB.pluginManager.getPlugin(BB.name);
              GB && BB.copyTo(GB)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const BB = [];
            for (const OB in this.meshMap) {
              const GB = this.meshMap[OB];
              GB && BB.push(GB)
            }
            return BB
          }
          return this._scene.meshes.filter((BB => BB.material === this))
        }
        forceCompilation(BB, OB, GB, YB) {
          const DB = {
              clipPlane: !1,
              useInstances: !1,
              ...GB
            },
            QB = this.JF(),
            oB = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const jB = () => {
            if (!this._scene || !this._scene.Lp()) return;
            const GB = QB.clipPlane;
            if (DB.clipPlane && (QB.clipPlane = new PB.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let GB = !0,
                QB = null;
              if (BB.iW) {
                const OB = new yB.c(0, 0, 0, 0, 0, BB, void 0, !1, !1);
                OB.materialDefines && (OB.materialDefines._renderId = -1), this.isReadyForSubMesh(BB, OB, DB.useInstances) || (OB.effect && OB.effect.getCompilationError() && OB.effect.allFallbacksProcessed() ? QB = OB.effect.getCompilationError() : (GB = !1, setTimeout(jB, 16)))
              }
              GB && (this.allowShaderHotSwapping = oB, QB && YB && YB(QB), OB && OB(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = oB, OB && OB(this)) : setTimeout(jB, 16);
            DB.clipPlane && (QB.clipPlane = GB)
          };
          jB()
        }
        async forceCompilationAsync(BB, OB) {
          return await new Promise(((GB, YB) => {
            this.forceCompilation(BB, (() => {
              GB()
            }), OB, (BB => {
              YB(BB)
            }))
          }))
        }
        DYB(OB) {
          this.JF().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (BB._DirtyCallbackArray.length = 0, OB & BB.ImageProcessingDirtyFlag && BB._DirtyCallbackArray.push(BB._ImageProcessingDirtyCallBack), OB & BB.TextureDirtyFlag && BB._DirtyCallbackArray.push(BB._TextureDirtyCallBack), OB & BB.LightDirtyFlag && BB._DirtyCallbackArray.push(BB._LightsDirtyCallBack), OB & BB.FresnelDirtyFlag && BB._DirtyCallbackArray.push(BB._FresnelDirtyCallBack), OB & BB.AttributesDirtyFlag && BB._DirtyCallbackArray.push(BB._AttributeDirtyCallBack), OB & BB.MiscDirtyFlag && BB._DirtyCallbackArray.push(BB._MiscDirtyCallBack), OB & BB.PrePassDirtyFlag && BB._DirtyCallbackArray.push(BB._PrePassDirtyCallBack), BB._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(BB._RunDirtyCallBacks), this.JF().resetCachedMaterial())
        }
        resetDrawCache() {
          const BB = this.JF().meshes;
          for (const OB of BB)
            if (OB.iW)
              for (const BB of OB.iW) BB.cp() === this && BB.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(BB) {
          const OB = this.JF();
          if (OB.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const GB = OB.meshes;
          for (const YB of GB)
            if (YB.iW)
              for (const GB of YB.iW) {
                if ((GB.cp() || (OB._hasDefaultMaterial ? OB.defaultMaterial : null)) === this)
                  for (const OB of GB._drawWrappers) OB && OB.defines && OB.defines.markAllAsDirty && this._materialContext === OB.materialContext && BB(OB.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.JF().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const BB = this.JF().enablePrePassRenderer();
          BB && BB.DYB()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(BB._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(BB._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(BB._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(BB._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(BB._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(BB._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(BB._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(BB._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(BB._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(BB._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const BB = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.lF.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(BB)
            }))
          }
        }
        setPrePassRenderer(BB) {
          return !1
        }
        dispose(BB, OB, GB) {
          const YB = this.JF();
          if (YB.stopAnimation(this), YB.freeProcessedMaterials(), YB.removeMaterial(this), this._eventInfo.forceDisposeTextures = OB, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const BB = this._parentContainer.materials.indexOf(this);
            BB > -1 && this._parentContainer.materials.splice(BB, 1), this._parentContainer = null
          }
          if (!0 !== GB)
            if (this.meshMap)
              for (const DB in this.meshMap) {
                const BB = this.meshMap[DB];
                this._disposeMeshResources(BB)
              } else {
                const BB = YB.meshes;
                for (const OB of BB) this._disposeMeshResources(OB)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.lF.notifyObservers(this), this.lF.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(BB) {
          if (!BB) return;
          const OB = BB.geometry,
            GB = BB._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (BB.iW && GB)
              for (const YB of BB.iW) {
                const BB = YB._drawWrappers;
                for (let DB = 0; DB < BB.length; DB++) {
                  const QB = BB[DB]?.effect;
                  if (!QB) continue;
                  GB[DB] === this && (OB?._releaseVertexArrayObject(QB), YB._removeDrawWrapper(DB, !0, !0))
                }
              }
          } else OB?._releaseVertexArrayObject(this._drawWrapper.effect);
          BB.material !== this || BB.AQB || (BB.material = null)
        }
        serialize() {
          const BB = lB.d.Serialize(this);
          return BB.stencil = this.stencil.serialize(), BB.uniqueId = this.uniqueId, this._serializePlugins(BB), BB
        }
        _serializePlugins(BB) {
          if (BB.plugins = {}, this.pluginManager)
            for (const OB of this.pluginManager._plugins) OB.doNotSerialize || (BB.plugins[OB.getClassName()] = OB.serialize())
        }
        static ParseAlphaMode(BB, OB) {
          void 0 !== BB._alphaMode ? OB._alphaMode = Array.isArray(BB._alphaMode) ? [...BB._alphaMode] : [BB._alphaMode] : void 0 !== BB.alphaMode ? OB._alphaMode = Array.isArray(BB.alphaMode) ? [...BB.alphaMode] : [BB.alphaMode] : OB._alphaMode = [2]
        }
        static Parse(OB, GB, YB) {
          if (OB.customType) {
            if ("BABYLON.PBRMaterial" === OB.customType && OB.overloadedAlbedo && (OB.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return MB.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else OB.customType = "BABYLON.StandardMaterial";
          const DB = QB.j.Instantiate(OB.customType).Parse(OB, GB, YB);
          return DB._loadedUniqueId = OB.uniqueId, BB.ParseAlphaMode(OB, DB), DB
        }
        static _ParsePlugins(BB, OB, GB, YB) {
          if (BB.plugins)
            for (const DB in BB.plugins) {
              const oB = BB.plugins[DB];
              let jB = OB.pluginManager?.getPlugin(oB.name);
              if (!jB) {
                const BB = QB.j.Instantiate("BABYLON." + DB);
                BB && (jB = new BB(OB))
              }
              jB?.parse(oB, GB, YB)
            }
        }
      }, (() => {
        const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], NB = [(0, DB.L)()], RB = [(0, DB.L)()], WB = [(0, DB.L)()], AB = [(0, DB.L)()], VB = [(0, DB.L)()], SB = [(0, DB.L)("alpha")], nB = [(0, DB.L)("backFaceCulling")], UB = [(0, DB.L)("textureRepetitionMode")], fB = [(0, DB.L)("textureRepetitionHexTilingParams")], kB = [(0, DB.L)("cullBackFaces")], dB = [(0, DB.L)()], KB = [(0, DB.L)()], uB = [(0, DB.L)()], mB = [(0, DB.L)()], IB = [(0, DB.L)()], FB = [(0, DB.L)()], iB = [(0, DB.L)()], LB = [(0, DB.L)()], gB = [(0, DB.L)("fogEnabled")], rB = [(0, DB.L)()], XB = [(0, DB.L)()], wB = [(0, DB.L)()], EB = [(0, DB.L)()], cB = [(0, DB.L)()], hB = [(0, DB.L)()], aB = [(0, DB.L)()], eB = [(0, DB.L)()], (0, YB.h)(BB, null, EB, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: BB => "pointsCloud" in BB,
            get: BB => BB.pointsCloud
          },
          metadata: QB
        }, null, TB), (0, YB.h)(BB, null, cB, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "fillMode" in BB,
            get: BB => BB.fillMode
          },
          metadata: QB
        }, null, TB), (0, YB.h)(BB, null, hB, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLogarithmicDepth" in BB,
            get: BB => BB.useLogarithmicDepth
          },
          metadata: QB
        }, null, TB), (0, YB.h)(BB, null, eB, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "transparencyMode" in BB,
            get: BB => BB.transparencyMode
          },
          metadata: QB
        }, null, TB), (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, OB) => {
              BB.id = OB
            }
          },
          metadata: QB
        }, bB, CB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, OB) => {
              BB.uniqueId = OB
            }
          },
          metadata: QB
        }, HB, vB), (0, YB.h)(null, null, NB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, OB) => {
              BB.name = OB
            }
          },
          metadata: QB
        }, sB, xB), (0, YB.h)(null, null, RB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, OB) => {
              BB.metadata = OB
            }
          },
          metadata: QB
        }, tB, BO), (0, YB.h)(null, null, WB, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: BB => "checkReadyOnEveryCall" in BB,
            get: BB => BB.checkReadyOnEveryCall,
            set: (BB, OB) => {
              BB.checkReadyOnEveryCall = OB
            }
          },
          metadata: QB
        }, OO, GO), (0, YB.h)(null, null, AB, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: BB => "checkReadyOnlyOnce" in BB,
            get: BB => BB.checkReadyOnlyOnce,
            set: (BB, OB) => {
              BB.checkReadyOnlyOnce = OB
            }
          },
          metadata: QB
        }, YO, DO), (0, YB.h)(null, null, VB, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: BB => "state" in BB,
            get: BB => BB.state,
            set: (BB, OB) => {
              BB.state = OB
            }
          },
          metadata: QB
        }, QO, oO), (0, YB.h)(null, null, SB, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "_alpha" in BB,
            get: BB => BB._alpha,
            set: (BB, OB) => {
              BB._alpha = OB
            }
          },
          metadata: QB
        }, jO, yO), (0, YB.h)(null, null, nB, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: BB => "_backFaceCulling" in BB,
            get: BB => BB._backFaceCulling,
            set: (BB, OB) => {
              BB._backFaceCulling = OB
            }
          },
          metadata: QB
        }, JO, MO), (0, YB.h)(null, null, UB, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_textureRepetitionMode" in BB,
            get: BB => BB._textureRepetitionMode,
            set: (BB, OB) => {
              BB._textureRepetitionMode = OB
            }
          },
          metadata: QB
        }, PO, zO), (0, YB.h)(null, null, fB, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRepetitionHexTilingParams" in BB,
            get: BB => BB.textureRepetitionHexTilingParams,
            set: (BB, OB) => {
              BB.textureRepetitionHexTilingParams = OB
            }
          },
          metadata: QB
        }, lO, pO), (0, YB.h)(null, null, kB, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: BB => "_cullBackFaces" in BB,
            get: BB => BB._cullBackFaces,
            set: (BB, OB) => {
              BB._cullBackFaces = OB
            }
          },
          metadata: QB
        }, qO, ZO), (0, YB.h)(null, null, dB, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: BB => "sideOrientation" in BB,
            get: BB => BB.sideOrientation,
            set: (BB, OB) => {
              BB.sideOrientation = OB
            }
          },
          metadata: QB
        }, NO, RO), (0, YB.h)(null, null, KB, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_alphaMode" in BB,
            get: BB => BB._alphaMode,
            set: (BB, OB) => {
              BB._alphaMode = OB
            }
          },
          metadata: QB
        }, WO, AO), (0, YB.h)(null, null, uB, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: BB => "_needDepthPrePass" in BB,
            get: BB => BB._needDepthPrePass,
            set: (BB, OB) => {
              BB._needDepthPrePass = OB
            }
          },
          metadata: QB
        }, VO, SO), (0, YB.h)(null, null, mB, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableDepthWrite" in BB,
            get: BB => BB.disableDepthWrite,
            set: (BB, OB) => {
              BB.disableDepthWrite = OB
            }
          },
          metadata: QB
        }, nO, UO), (0, YB.h)(null, null, IB, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableColorWrite" in BB,
            get: BB => BB.disableColorWrite,
            set: (BB, OB) => {
              BB.disableColorWrite = OB
            }
          },
          metadata: QB
        }, fO, kO), (0, YB.h)(null, null, FB, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceDepthWrite" in BB,
            get: BB => BB.forceDepthWrite,
            set: (BB, OB) => {
              BB.forceDepthWrite = OB
            }
          },
          metadata: QB
        }, dO, KO), (0, YB.h)(null, null, iB, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: BB => "depthFunction" in BB,
            get: BB => BB.depthFunction,
            set: (BB, OB) => {
              BB.depthFunction = OB
            }
          },
          metadata: QB
        }, uO, mO), (0, YB.h)(null, null, LB, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "separateCullingPass" in BB,
            get: BB => BB.separateCullingPass,
            set: (BB, OB) => {
              BB.separateCullingPass = OB
            }
          },
          metadata: QB
        }, IO, FO), (0, YB.h)(null, null, gB, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "_fogEnabled" in BB,
            get: BB => BB._fogEnabled,
            set: (BB, OB) => {
              BB._fogEnabled = OB
            }
          },
          metadata: QB
        }, iO, LO), (0, YB.h)(null, null, rB, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: BB => "pointSize" in BB,
            get: BB => BB.pointSize,
            set: (BB, OB) => {
              BB.pointSize = OB
            }
          },
          metadata: QB
        }, gO, rO), (0, YB.h)(null, null, XB, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "zOffset" in BB,
            get: BB => BB.zOffset,
            set: (BB, OB) => {
              BB.zOffset = OB
            }
          },
          metadata: QB
        }, XO, wO), (0, YB.h)(null, null, wB, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: BB => "zOffsetUnits" in BB,
            get: BB => BB.zOffsetUnits,
            set: (BB, OB) => {
              BB.zOffsetUnits = OB
            }
          },
          metadata: QB
        }, EO, cO), (0, YB.h)(null, null, aB, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: BB => "_isVertexOutputInvariant" in BB,
            get: BB => BB._isVertexOutputInvariant,
            set: (BB, OB) => {
              BB._isVertexOutputInvariant = OB
            }
          },
          metadata: QB
        }, hO, aO), QB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QB
        })
      })(), BB.TriangleFillMode = 0, BB.WireFrameFillMode = 1, BB.PointFillMode = 2, BB.PointListDrawMode = 3, BB.LineListDrawMode = 4, BB.LineLoopDrawMode = 5, BB.LineStripDrawMode = 6, BB.TriangleStripDrawMode = 7, BB.TriangleFanDrawMode = 8, BB.ClockWiseSideOrientation = 0, BB.CounterClockWiseSideOrientation = 1, BB.ImageProcessingDirtyFlag = 64, BB.TextureDirtyFlag = 1, BB.LightDirtyFlag = 2, BB.FresnelDirtyFlag = 4, BB.AttributesDirtyFlag = 8, BB.MiscDirtyFlag = 16, BB.PrePassDirtyFlag = 32, BB.AllDirtyFlag = 127, BB.MATERIAL_OPAQUE = 0, BB.MATERIAL_ALPHATEST = 1, BB.MATERIAL_ALPHABLEND = 2, BB.MATERIAL_ALPHATESTANDBLEND = 3, BB.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, BB.MATERIAL_NORMALBLENDMETHOD_RNM = 1, BB.LIGHTFALLOFF_PHYSICAL = 0, BB.LIGHTFALLOFF_GLTF = 1, BB.LIGHTFALLOFF_STANDARD = 2, BB.OnEventObservable = new oB.b, BB.ForceVertexOutputInvariant = !1, BB._AllDirtyCallBack = BB => BB.markAllAsDirty(), BB._ImageProcessingDirtyCallBack = BB => BB.markAsImageProcessingDirty(), BB._TextureDirtyCallBack = BB => BB.markAsTexturesDirty(), BB._FresnelDirtyCallBack = BB => BB.markAsFresnelDirty(), BB._MiscDirtyCallBack = BB => BB.markAsMiscDirty(), BB._PrePassDirtyCallBack = BB => BB.markAsPrePassDirty(), BB._LightsDirtyCallBack = BB => BB.markAsLightDirty(), BB._AttributeDirtyCallBack = BB => BB.markAsAttributesDirty(), BB._FresnelAndMiscDirtyCallBack = OB => {
        BB._FresnelDirtyCallBack(OB), BB._MiscDirtyCallBack(OB)
      }, BB._TextureAndMiscDirtyCallBack = OB => {
        BB._TextureDirtyCallBack(OB), BB._MiscDirtyCallBack(OB)
      }, BB._DirtyCallbackArray = [], BB._RunDirtyCallBacks = OB => {
        for (const GB of BB._DirtyCallbackArray) GB(OB)
      }, BB
    })();
    Object.getOwnPropertyDescriptor(RB.prototype, "pluginManager") || Object.defineProperty(RB.prototype, "pluginManager", (0, NB.e)("Material", "pluginManager"))
  },
  41341: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB
    });
    var YB = GB(40905);
    class DB {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(BB) {
        this._DiffuseTextureEnabled !== BB && (this._DiffuseTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(BB) {
        this._BaseWeightTextureEnabled !== BB && (this._BaseWeightTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(BB) {
        this._BaseDiffuseRoughnessTextureEnabled !== BB && (this._BaseDiffuseRoughnessTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(BB) {
        this._DetailTextureEnabled !== BB && (this._DetailTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(BB) {
        this._DecalMapEnabled !== BB && (this._DecalMapEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(BB) {
        this._AmbientTextureEnabled !== BB && (this._AmbientTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(BB) {
        this._OpacityTextureEnabled !== BB && (this._OpacityTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(BB) {
        this._ReflectionTextureEnabled !== BB && (this._ReflectionTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(BB) {
        this._EmissiveTextureEnabled !== BB && (this._EmissiveTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(BB) {
        this._SpecularTextureEnabled !== BB && (this._SpecularTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(BB) {
        this._BumpTextureEnabled !== BB && (this._BumpTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(BB) {
        this._LightmapTextureEnabled !== BB && (this._LightmapTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(BB) {
        this._RefractionTextureEnabled !== BB && (this._RefractionTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(BB) {
        this._ColorGradingTextureEnabled !== BB && (this._ColorGradingTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(BB) {
        this._FresnelEnabled !== BB && (this._FresnelEnabled = BB, YB.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(BB) {
        this._ClearCoatTextureEnabled !== BB && (this._ClearCoatTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(BB) {
        this._ClearCoatBumpTextureEnabled !== BB && (this._ClearCoatBumpTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(BB) {
        this._ClearCoatTintTextureEnabled !== BB && (this._ClearCoatTintTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(BB) {
        this._SheenTextureEnabled !== BB && (this._SheenTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(BB) {
        this._AnisotropicTextureEnabled !== BB && (this._AnisotropicTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(BB) {
        this._ThicknessTextureEnabled !== BB && (this._ThicknessTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(BB) {
        this._RefractionIntensityTextureEnabled !== BB && (this._RefractionIntensityTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(BB) {
        this._TranslucencyIntensityTextureEnabled !== BB && (this._TranslucencyIntensityTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(BB) {
        this._TranslucencyColorTextureEnabled !== BB && (this._TranslucencyColorTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(BB) {
        this._IridescenceTextureEnabled !== BB && (this._IridescenceTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
      }
    }
    DB._DiffuseTextureEnabled = !0, DB._BaseWeightTextureEnabled = !0, DB._BaseDiffuseRoughnessTextureEnabled = !0, DB._DetailTextureEnabled = !0, DB._DecalMapEnabled = !0, DB._AmbientTextureEnabled = !0, DB._OpacityTextureEnabled = !0, DB._ReflectionTextureEnabled = !0, DB._EmissiveTextureEnabled = !0, DB._SpecularTextureEnabled = !0, DB._BumpTextureEnabled = !0, DB._LightmapTextureEnabled = !0, DB._RefractionTextureEnabled = !0, DB._ColorGradingTextureEnabled = !0, DB._FresnelEnabled = !0, DB._ClearCoatTextureEnabled = !0, DB._ClearCoatBumpTextureEnabled = !0, DB._ClearCoatTintTextureEnabled = !0, DB._SheenTextureEnabled = !0, DB._AnisotropicTextureEnabled = !0, DB._ThicknessTextureEnabled = !0, DB._RefractionIntensityTextureEnabled = !0, DB._TranslucencyIntensityTextureEnabled = !0, DB._TranslucencyColorTextureEnabled = !0, DB._IridescenceTextureEnabled = !0
  },
  41325: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => FB,
      A: () => qB,
      E: () => ZB,
      F: () => AB,
      J: () => uB,
      L: () => VB,
      M: () => dB,
      P: () => KB,
      R: () => lB,
      V: () => zB,
      X: () => cB,
      Y: () => gB,
      _: () => iB,
      ab: () => WB,
      cb: () => mB,
      db: () => hB,
      e: () => IB,
      gb: () => aB,
      i: () => SB,
      jb: () => eB,
      k: () => PB,
      lb: () => HB,
      mb: () => bB,
      nb: () => CB,
      o: () => NB,
      q: () => RB,
      rb: () => pB,
      t: () => kB,
      x: () => yB
    });
    var YB = GB(39366),
      DB = GB(37796),
      QB = GB(41211),
      oB = GB(41333),
      jB = GB(41341);

    function yB(BB, OB, GB) {
      if (!BB || BB.LOGARITHMICDEPTH || BB.indexOf && BB.indexOf("LOGARITHMICDEPTH") >= 0) {
        const BB = GB.activeCamera;
        1 === BB.mode && YB.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), OB.setFloat("logarithmicDepthConstant", 2 / (Math.log(BB.maxZ + 1) / Math.LN2))
      }
    }
    const JB = {
        r: 0,
        g: 0,
        b: 0
      },
      MB = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function PB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      GB && BB.fogEnabled && (!OB || OB.applyFog) && 0 !== BB.fogMode && (GB.setFloat4("vFogInfos", BB.fogMode, BB.fogStart, BB.fogEnd, BB.fogDensity), YB ? (BB.fogColor.toLinearSpaceToRef(JB, BB.Lp().useExactSrgbConversions), GB.setColor3("vFogColor", JB)) : GB.setColor3("vFogColor", BB.fogColor))
    }

    function zB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
      const PB = BB.numMaxInfluencers || BB.numInfluencers;
      return PB <= 0 ? 0 : (OB.push("#define MORPHTARGETS"), BB.hasPositions && OB.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), BB.hasNormals && OB.push("#define MORPHTARGETTEXTURE_HASNORMALS"), BB.hasTangents && OB.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), BB.hasUVs && OB.push("#define MORPHTARGETTEXTURE_HASUVS"), BB.hasUV2s && OB.push("#define MORPHTARGETTEXTURE_HASUV2S"), BB.hasColors && OB.push("#define MORPHTARGETTEXTURE_HASCOLORS"), BB.supportsPositions && DB && OB.push("#define MORPHTARGETS_POSITION"), BB.supportsNormals && QB && OB.push("#define MORPHTARGETS_NORMAL"), BB.supportsTangents && oB && OB.push("#define MORPHTARGETS_TANGENT"), BB.supportsUVs && jB && OB.push("#define MORPHTARGETS_UV"), BB.supportsUV2s && yB && OB.push("#define MORPHTARGETS_UV2"), BB.supportsColors && JB && OB.push("#define MORPHTARGETS_COLOR"), OB.push("#define NUM_MORPH_INFLUENCERS " + PB), BB.isUsingTextureForTargets && OB.push("#define MORPHTARGETS_TEXTURE"), MB.NUM_MORPH_INFLUENCERS = PB, MB.NORMAL = QB, MB.TANGENT = oB, MB.UV = jB, MB.UV2 = yB, MB.COLOR = JB, lB(GB, YB, MB, DB), PB)
    }

    function lB(BB, OB, GB) {
      let QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const oB = GB.NUM_MORPH_INFLUENCERS;
      if (oB > 0 && DB.b.LastCreatedEngine) {
        const jB = DB.b.LastCreatedEngine.getCaps().maxVertexAttribs,
          yB = OB.morphTargetManager;
        if (yB?.isUsingTextureForTargets) return;
        const JB = yB && yB.supportsPositions && QB,
          MB = yB && yB.supportsNormals && GB.NORMAL,
          PB = yB && yB.supportsTangents && GB.TANGENT,
          zB = yB && yB.supportsUVs && GB.UV1,
          lB = yB && yB.supportsUV2s && GB.UV2,
          pB = yB && yB.supportsColors && GB.VERTEXCOLOR;
        for (let GB = 0; GB < oB; GB++) JB && BB.push("position" + GB), MB && BB.push("normal" + GB), PB && BB.push("tangent" + GB), zB && BB.push("uv_" + GB), lB && BB.push("uv2_" + GB), pB && BB.push("color" + GB), BB.length > jB && YB.b.Error("Cannot add more vertex attributes for mesh " + OB.name)
      }
    }

    function pB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      BB.push("world0"), BB.push("world1"), BB.push("world2"), BB.push("world3"), OB && (BB.push("previousWorld0"), BB.push("previousWorld1"), BB.push("previousWorld2"), BB.push("previousWorld3"))
    }

    function qB(BB, OB) {
      const GB = BB.morphTargetManager;
      BB && GB && OB.setFloatArray("morphTargetInfluences", GB.influences)
    }

    function ZB(BB, OB) {
      OB.bindToEffect(BB, "Scene")
    }

    function NB(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        yB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        JB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        MB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        PB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        zB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (BB.texturesEnabled && DB && jB.d.ReflectionTextureEnabled) {
        if (GB.TBB("reflectionMatrix", DB.getReflectionTextureMatrix()), GB.updateFloat2("vReflectionInfos", DB.level * BB.iblIntensity, zB), yB && DB.boundingBoxSize) {
          const BB = DB;
          GB.updateVector3("vReflectionPosition", BB.boundingBoxPosition), GB.updateVector3("vReflectionSize", BB.boundingBoxSize)
        }
        if (QB) {
          const BB = DB.getSize().width;
          GB.updateFloat2("vReflectionFilteringInfo", BB, Math.log2(BB))
        }
        if (MB && !OB.USEIRRADIANCEMAP) {
          const BB = DB.sphericalPolynomial;
          if (OB.USESPHERICALFROMREFLECTIONMAP && BB)
            if (OB.SPHERICAL_HARMONICS) {
              const OB = BB.preScaledHarmonics;
              GB.updateVector3("vSphericalL00", OB.l00), GB.updateVector3("vSphericalL1_1", OB.l1_1), GB.updateVector3("vSphericalL10", OB.l10), GB.updateVector3("vSphericalL11", OB.l11), GB.updateVector3("vSphericalL2_2", OB.l2_2), GB.updateVector3("vSphericalL2_1", OB.l2_1), GB.updateVector3("vSphericalL20", OB.l20), GB.updateVector3("vSphericalL21", OB.l21), GB.updateVector3("vSphericalL22", OB.l22)
            } else GB.updateFloat3("vSphericalX", BB.x.x, BB.x.y, BB.x.z), GB.updateFloat3("vSphericalY", BB.y.x, BB.y.y, BB.y.z), GB.updateFloat3("vSphericalZ", BB.z.x, BB.z.y, BB.z.z), GB.updateFloat3("vSphericalXX_ZZ", BB.xx.x - BB.zz.x, BB.xx.y - BB.zz.y, BB.xx.z - BB.zz.z), GB.updateFloat3("vSphericalYY_ZZ", BB.yy.x - BB.zz.x, BB.yy.y - BB.zz.y, BB.yy.z - BB.zz.z), GB.updateFloat3("vSphericalZZ", BB.zz.x, BB.zz.y, BB.zz.z), GB.updateFloat3("vSphericalXY", BB.xy.x, BB.xy.y, BB.xy.z), GB.updateFloat3("vSphericalYZ", BB.yz.x, BB.yz.y, BB.yz.z), GB.updateFloat3("vSphericalZX", BB.zx.x, BB.zx.y, BB.zx.z)
        } else JB && OB.USEIRRADIANCEMAP && OB.USE_IRRADIANCE_DOMINANT_DIRECTION && DB.irradianceTexture && GB.updateVector3("vReflectionDominantDirection", DB.irradianceTexture._dominantDirection);
        oB && GB.updateFloat3("vReflectionMicrosurfaceInfos", DB.getSize().width, DB.lodGenerationScale, DB.lodGenerationOffset)
      }
      PB && GB.updateColor3("vReflectionColor", YB)
    }

    function RB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (YB && jB.d.ReflectionTextureEnabled) {
        OB.LODBASEDMICROSFURACE ? GB.setTexture("reflectionSampler", YB) : (GB.setTexture("reflectionSampler", YB._lodTextureMid || YB), GB.setTexture("reflectionSamplerLow", YB._lodTextureLow || YB), GB.setTexture("reflectionSamplerHigh", YB._lodTextureHigh || YB)), OB.USEIRRADIANCEMAP && GB.setTexture("irradianceSampler", YB.irradianceTexture);
        const QB = BB.iblCdfGenerator;
        DB && QB && GB.setTexture("icdfSampler", QB.getIcdfTexture())
      }
    }

    function WB(BB, OB, GB) {
      OB._needUVs = !0, OB[GB] = !0, BB.optimizeUVAllocation && BB.getTextureMatrix().isIdentityAs3x2() ? (OB[GB + "DIRECTUV"] = BB.coordinatesIndex + 1, OB["MAINUV" + (BB.coordinatesIndex + 1)] = !0) : OB[GB + "DIRECTUV"] = 0
    }

    function AB(BB, OB, GB) {
      const YB = BB.getTextureMatrix();
      OB.TBB(GB + "Matrix", YB)
    }

    function VB(BB, OB, GB) {
      GB.BAKED_VERTEX_ANIMATION_TEXTURE && GB.INSTANCES && BB.push("bakedVertexAnimationSettingsInstanced")
    }

    function SB(BB, OB, GB) {
      var YB;
      if (OB && BB && (BB.computeBonesUsingShaders && OB._bonesComputationForcedToCPU && (BB.computeBonesUsingShaders = !1), BB.useBones && BB.computeBonesUsingShaders && BB.skeleton)) {
        const DB = BB.skeleton;
        if (DB.isUsingTextureForMatrices && OB.getUniformIndex("boneTextureInfo") > -1) {
          const GB = DB.getTransformMatrixTexture(BB);
          OB.setTexture("boneSampler", GB), OB.setFloat2("boneTextureInfo", DB._textureWidth, DB._textureHeight)
        } else {
          const QB = DB.getTransformMatrices(BB);
          QB && (OB.setMatrices("mBones", QB), GB && BB.JF().prePassRenderer && BB.JF().prePassRenderer.getIndex(2) && (GB.previousBones[BB.uniqueId] || (GB.previousBones[BB.uniqueId] = QB.slice()), OB.setMatrices("mPreviousBones", GB.previousBones[BB.uniqueId]), YB = QB, GB.previousBones[BB.uniqueId].set(YB)))
        }
      }
    }

    function nB(BB, OB, GB, YB, DB) {
      let QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      BB._bindLight(OB, GB, YB, DB, QB)
    }
    const UB = 4,
      fB = new WeakMap;

    function kB(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const QB = Math.min(OB.lightSources.length, DB);
      for (let oB = 0; oB < QB; oB++) {
        nB(OB.lightSources[oB], oB, BB, GB, "boolean" === typeof YB ? YB : YB.SPECULARTERM, OB.receiveShadows)
      }
    }

    function dB(BB, OB, GB, YB) {
      GB.NUM_BONE_INFLUENCERS > 0 && (YB.addCPUSkinningFallback(0, OB), BB.push("matricesIndices"), BB.push("matricesWeights"), GB.NUM_BONE_INFLUENCERS > 4 && (BB.push("matricesIndicesExtra"), BB.push("matricesWeightsExtra")))
    }

    function KB(BB, OB) {
      (OB.INSTANCES || OB.THIN_INSTANCES) && pB(BB, !!OB.PREPASS_VELOCITY), OB.INSTANCESCOLOR && BB.push("instanceColor")
    }

    function uB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        DB = 0;
      for (let QB = 0; QB < GB && BB["LIGHT" + QB]; QB++) QB > 0 && (DB = YB + QB, OB.addFallback(DB, "LIGHT" + QB)), BB.SHADOWS || (BB["SHADOW" + QB] && OB.addFallback(YB, "SHADOW" + QB), BB["SHADOWPCF" + QB] && OB.addFallback(YB, "SHADOWPCF" + QB), BB["SHADOWPCSS" + QB] && OB.addFallback(YB, "SHADOWPCSS" + QB), BB["SHADOWPOISSON" + QB] && OB.addFallback(YB, "SHADOWPOISSON" + QB), BB["SHADOWESM" + QB] && OB.addFallback(YB, "SHADOWESM" + QB), BB["SHADOWCLOSEESM" + QB] && OB.addFallback(YB, "SHADOWCLOSEESM" + QB));
      return DB
    }

    function mB(BB, OB, GB, YB, DB, QB, oB) {
      let jB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        JB = arguments.length > 9 ? arguments[9] : void 0,
        MB = arguments.length > 10 ? arguments[10] : void 0;
      if (oB._areMiscDirty) {
        oB.LOGARITHMICDEPTH = GB, oB.POINTSIZE = YB, oB.FOG = DB && function(BB, OB) {
          return OB.fogEnabled && BB.applyFog && 0 !== OB.fogMode
        }(BB, OB), oB.NONUNIFORMSCALING = BB.nonUniformScaling, oB.ALPHATEST = QB, oB.DECAL_AFTER_DETAIL = jB, oB.USE_VERTEX_PULLING = yB, oB.RIGHT_HANDED = OB.useRightHandedSystem;
        const PB = yB ? JB?.geometry?.getIndexBuffer() : null,
          zB = !!JB && JB.isUnIndexed;
        oB.VERTEX_PULLING_USE_INDEX_BUFFER = !!PB && !zB, oB.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!PB || zB) && PB.is32Bits, oB.VERTEXOUTPUT_INVARIANT = !!MB
      }
    }

    function IB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!BB.lightsEnabled || YB) return !0;
      const DB = OB.lightSources,
        QB = Math.min(DB.length, GB);
      for (let oB = 0; oB < QB; oB++)
        if (!DB[oB].areLightTexturesReady()) return !1;
      return !0
    }

    function FB(BB, OB, GB, DB) {
      let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!GB._areLightsDirty) return GB._needNormals;
      const jB = QB;
      QB = function(BB, OB) {
        const GB = BB.Lp().getCaps().maxUniformBuffersPerShaderStage;
        if (null == GB) return OB;
        const YB = Math.max(GB - UB, 1);
        return Math.min(OB, YB)
      }(BB, QB);
      let yB = 0;
      const JB = {
        needNormals: GB._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (BB.lightsEnabled && !oB) {
        OB.lightSources.length > QB && QB < jB && function(BB, OB, GB, DB) {
          let QB = fB.get(BB);
          QB || (QB = new Set, fB.set(BB, QB)), QB.has(DB) || (QB.add(DB), YB.b.Warn(`maxSimultaneousLights is ${OB} but this engine supports at most ${GB} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${DB} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${DB+UB} uniform buffers, over the device limit of ${BB.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${GB}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${GB} or less to silence this warning.`))
        }(BB.Lp(), jB, QB, Math.min(OB.lightSources.length, jB));
        for (const YB of OB.lightSources)
          if (LB(BB, OB, YB, yB, GB, DB, JB), yB++, yB === QB) break
      }
      GB.SPECULARTERM = JB.specularEnabled, GB.SHADOWS = JB.shadowEnabled;
      const MB = Math.max(QB, GB.MAXLIGHTCOUNT || 0);
      for (let YB = yB; YB < MB; YB++) void 0 !== GB["LIGHT" + YB] && (GB["LIGHT" + YB] = !1, GB["HEMILIGHT" + YB] = !1, GB["POINTLIGHT" + YB] = !1, GB["DIRLIGHT" + YB] = !1, GB["SPOTLIGHT" + YB] = !1, GB["AREALIGHT" + YB] = !1, GB["CLUSTLIGHT" + YB] = !1, GB["SHADOW" + YB] = !1, GB["SHADOWCSM" + YB] = !1, GB["SHADOWCSMDEBUG" + YB] = !1, GB["SHADOWCSMNUM_CASCADES" + YB] = !1, GB["SHADOWCSMUSESHADOWMAXZ" + YB] = !1, GB["SHADOWCSMNOBLEND" + YB] = !1, GB["SHADOWCSM_RIGHTHANDED" + YB] = !1, GB["SHADOWPCF" + YB] = !1, GB["SHADOWPCSS" + YB] = !1, GB["SHADOWPOISSON" + YB] = !1, GB["SHADOWESM" + YB] = !1, GB["SHADOWCLOSEESM" + YB] = !1, GB["SHADOWCUBE" + YB] = !1, GB["SHADOWLOWQUALITY" + YB] = !1, GB["SHADOWMEDIUMQUALITY" + YB] = !1);
      GB.LIGHTCOUNT = yB, GB.MAXLIGHTCOUNT = QB;
      const PB = BB.Lp().getCaps();
      return void 0 === GB.SHADOWFLOAT && (JB.needRebuild = !0), GB.SHADOWFLOAT = JB.shadowEnabled && (PB.textureFloatRender && PB.textureFloatLinearFiltering || PB.textureHalfFloatRender && PB.textureHalfFloatLinearFiltering), GB.LIGHTMAPEXCLUDED = JB.lightmapMode, JB.needRebuild && GB.rebuild(), JB.needNormals
    }

    function iB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (OB && jB.d.ReflectionTextureEnabled) {
        if (!OB.isReadyOrNotBlocking()) return !1;
        GB._needNormals = !0, GB.REFLECTION = !0, GB.GAMMAREFLECTION = OB.gammaSpace, GB.RGBDREFLECTION = OB.isRGBD, GB.LODINREFLECTIONALPHA = OB.lodLevelInAlpha, GB.LINEARSPECULARREFLECTION = OB.linearSpecularLOD, GB.USEIRRADIANCEMAP = !1, GB.LODBASEDMICROSFURACE = BB.Lp().getCaps().textureLOD;
        const oB = BB.Lp();
        switch (YB && DB > 0 ? (GB.NUM_SAMPLES = "" + DB, oB._features.needTypeSuffixInShaderConstants && (GB.NUM_SAMPLES = GB.NUM_SAMPLES + "u"), GB.REALTIME_FILTERING = !0, BB.iblCdfGenerator && (GB.IBL_CDF_FILTERING = !0)) : GB.REALTIME_FILTERING = !1, GB.INVERTCUBICMAP = 6 === OB.coordinatesMode, GB.REFLECTIONMAP_3D = OB.isCube, GB.REFLECTIONMAP_OPPOSITEZ = GB.REFLECTIONMAP_3D && BB.useRightHandedSystem ? !OB.invertZ : OB.invertZ, GB.REFLECTIONMAP_CUBIC = !1, GB.REFLECTIONMAP_EXPLICIT = !1, GB.REFLECTIONMAP_PLANAR = !1, GB.REFLECTIONMAP_PROJECTION = !1, GB.REFLECTIONMAP_SKYBOX = !1, GB.REFLECTIONMAP_SPHERICAL = !1, GB.REFLECTIONMAP_EQUIRECTANGULAR = !1, GB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, GB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, OB.coordinatesMode) {
          case 0:
            GB.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            GB.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            GB.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            GB.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            GB.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            GB.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            GB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            GB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            GB.REFLECTIONMAP_CUBIC = !0, GB.USE_LOCAL_REFLECTIONMAP_CUBIC = !!OB.boundingBoxSize
        }
        5 !== OB.coordinatesMode && (OB.irradianceTexture ? (GB.USEIRRADIANCEMAP = !0, GB.USESPHERICALFROMREFLECTIONMAP = !1, GB.USESPHERICALINVERTEX = !1, OB.irradianceTexture._dominantDirection ? GB.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : GB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : OB.isCube && (GB.USESPHERICALFROMREFLECTIONMAP = !0, GB.USEIRRADIANCEMAP = !1, GB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, GB.USESPHERICALINVERTEX = QB))
      } else GB.REFLECTION = !1, GB.REFLECTIONMAP_3D = !1, GB.REFLECTIONMAP_SPHERICAL = !1, GB.REFLECTIONMAP_PLANAR = !1, GB.REFLECTIONMAP_CUBIC = !1, GB.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, GB.REFLECTIONMAP_PROJECTION = !1, GB.REFLECTIONMAP_SKYBOX = !1, GB.REFLECTIONMAP_EXPLICIT = !1, GB.REFLECTIONMAP_EQUIRECTANGULAR = !1, GB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, GB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, GB.INVERTCUBICMAP = !1, GB.USESPHERICALFROMREFLECTIONMAP = !1, GB.USEIRRADIANCEMAP = !1, GB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, GB.USESPHERICALINVERTEX = !1, GB.REFLECTIONMAP_OPPOSITEZ = !1, GB.LODINREFLECTIONALPHA = !1, GB.GAMMAREFLECTION = !1, GB.RGBDREFLECTION = !1, GB.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function LB(BB, OB, GB, YB, DB, oB, jB) {
      switch (jB.needNormals = !0, void 0 === DB["LIGHT" + YB] && (jB.needRebuild = !0), DB["LIGHT" + YB] = !0, DB["SPOTLIGHT" + YB] = !1, DB["HEMILIGHT" + YB] = !1, DB["POINTLIGHT" + YB] = !1, DB["DIRLIGHT" + YB] = !1, DB["AREALIGHT" + YB] = !1, DB["CLUSTLIGHT" + YB] = !1, GB.prepareLightSpecificDefines(DB, YB), DB["LIGHT_FALLOFF_PHYSICAL" + YB] = !1, DB["LIGHT_FALLOFF_GLTF" + YB] = !1, DB["LIGHT_FALLOFF_STANDARD" + YB] = !1, GB.falloffType) {
        case QB.c.FALLOFF_GLTF:
          DB["LIGHT_FALLOFF_GLTF" + YB] = !0;
          break;
        case QB.c.FALLOFF_PHYSICAL:
          DB["LIGHT_FALLOFF_PHYSICAL" + YB] = !0;
          break;
        case QB.c.FALLOFF_STANDARD:
          DB["LIGHT_FALLOFF_STANDARD" + YB] = !0
      }
      if (oB && !GB.specular.equalsFloats(0, 0, 0) && (jB.specularEnabled = !0), DB["SHADOW" + YB] = !1, DB["SHADOWCSM" + YB] = !1, DB["SHADOWCSMDEBUG" + YB] = !1, DB["SHADOWCSMNUM_CASCADES" + YB] = !1, DB["SHADOWCSMUSESHADOWMAXZ" + YB] = !1, DB["SHADOWCSMNOBLEND" + YB] = !1, DB["SHADOWCSM_RIGHTHANDED" + YB] = !1, DB["SHADOWPCF" + YB] = !1, DB["SHADOWPCSS" + YB] = !1, DB["SHADOWPOISSON" + YB] = !1, DB["SHADOWESM" + YB] = !1, DB["SHADOWCLOSEESM" + YB] = !1, DB["SHADOWCUBE" + YB] = !1, DB["SHADOWLOWQUALITY" + YB] = !1, DB["SHADOWMEDIUMQUALITY" + YB] = !1, OB && OB.receiveShadows && BB.shadowsEnabled && GB.shadowEnabled) {
        const OB = GB.getShadowGenerator(BB.activeCamera) ?? GB.getShadowGenerator();
        if (OB) {
          const BB = OB.getShadowMap();
          BB && BB.renderList && BB.renderList.length > 0 && (jB.shadowEnabled = !0, OB.prepareDefines(DB, YB))
        }
      }
      GB.lightmapMode != QB.c.LIGHTMAP_DEFAULT ? (jB.lightmapMode = !0, DB["LIGHTMAPEXCLUDED" + YB] = !0, DB["LIGHTMAPNOSPECULAR" + YB] = GB.lightmapMode == QB.c.LIGHTMAP_SHADOWSONLY) : (DB["LIGHTMAPEXCLUDED" + YB] = !1, DB["LIGHTMAPNOSPECULAR" + YB] = !1)
    }

    function gB(BB, OB, GB, YB, DB) {
      let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        jB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        yB = function(BB, OB) {
          let GB = !1;
          if (BB.activeCamera) {
            const YB = OB.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              DB = OB.CAMERA_PERSPECTIVE ? 1 : 0,
              QB = 1 === BB.activeCamera.mode ? 1 : 0,
              oB = 0 === BB.activeCamera.mode ? 1 : 0;
            (YB ^ QB || DB ^ oB) && (OB.CAMERA_ORTHOGRAPHIC = 1 === QB, OB.CAMERA_PERSPECTIVE = 1 === oB, GB = !0)
          }
          return GB
        }(BB, YB);
      !1 !== QB && (yB = (0, oB.k)(GB, BB, YB)), YB.DEPTHPREPASS !== !OB.getColorWrite() && (YB.DEPTHPREPASS = !YB.DEPTHPREPASS, yB = !0), YB.INSTANCES !== DB && (YB.INSTANCES = DB, yB = !0), YB.THIN_INSTANCES !== jB && (YB.THIN_INSTANCES = jB, yB = !0), yB && YB.markAsUnprocessed()
    }
    const rB = 40,
      XB = 64,
      wB = new WeakMap,
      EB = new WeakSet;

    function cB(BB, OB, GB, DB) {
      let QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        jB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!OB._areAttributesDirty && OB._needNormals === OB._normals && OB._needUVs === OB._uvs) return !1;
      OB._normals = OB._needNormals, OB._uvs = OB._needUVs, OB.NORMAL = OB._needNormals && BB.isVerticesDataPresent("normal"), OB._needNormals && BB.isVerticesDataPresent("tangent") && (OB.TANGENT = !0);
      for (let YB = 1; YB <= 6; ++YB) OB["UV" + YB] = !!OB._needUVs && BB.isVerticesDataPresent(`uv${1===YB?"":YB}`);
      if (GB) {
        const GB = BB.useVertexColors && BB.isVerticesDataPresent("color");
        OB.VERTEXCOLOR = GB, OB.VERTEXALPHA = BB.hasVertexAlpha && GB && oB
      }
      return BB.isVerticesDataPresent("instanceColor") && (BB.WQB || BB.hasThinInstances) && (OB.INSTANCESCOLOR = !0), DB && function(BB, OB) {
        if (BB.useBones && BB.computeBonesUsingShaders && BB.skeleton) {
          OB.NUM_BONE_INFLUENCERS = BB.numBoneInfluencers;
          const GB = void 0 !== OB.BONETEXTURE;
          if (BB.skeleton.isUsingTextureForMatrices && GB) OB.BONETEXTURE = !0;
          else {
            OB.BonesPerMesh = BB.skeleton.bones.length + 1, OB.BONETEXTURE = !GB && void 0;
            const DB = BB.JF(),
              QB = DB.prePassRenderer;
            if (QB && QB.enabled) {
              const GB = -1 === QB.excludedSkinnedMesh.indexOf(BB);
              OB.BONES_VELOCITY_ENABLED = GB
            }
            const oB = !0 === OB.MULTIVIEW,
              jB = 2 * OB.BonesPerMesh + (oB ? 1 : 0);
            if (wB.get(BB.skeleton) !== jB) {
              wB.set(BB.skeleton, jB);
              const GB = DB.Lp().getCaps().maxVertexUniformVectors;
              if (GB && !EB.has(BB.skeleton)) {
                const DB = 4 * OB.BonesPerMesh,
                  QB = oB ? XB : rB,
                  jB = Math.max(GB - QB, 0);
                (DB > jB || oB && 3 * DB > GB) && (EB.add(BB.skeleton), YB.b.Warn(`Skeleton "${BB.skeleton.name}": ${BB.skeleton.bones.length} bones stored as vertex uniforms use ${DB} of ~${jB} usable uniform vectors${oB?" (multiview)":""} on a device reporting ${GB}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else OB.NUM_BONE_INFLUENCERS = 0, OB.BonesPerMesh = 0, void 0 !== OB.BONETEXTURE && (OB.BONETEXTURE = !1)
      }(BB, OB), QB && function(BB, OB) {
        const GB = BB.morphTargetManager;
        GB ? (OB.MORPHTARGETS_UV = GB.supportsUVs && OB.UV1, OB.MORPHTARGETS_UV2 = GB.supportsUV2s && OB.UV2, OB.MORPHTARGETS_TANGENT = GB.supportsTangents && OB.TANGENT, OB.MORPHTARGETS_NORMAL = GB.supportsNormals && OB.NORMAL, OB.MORPHTARGETS_POSITION = GB.supportsPositions, OB.MORPHTARGETS_COLOR = GB.supportsColors, OB.MORPHTARGETTEXTURE_HASUVS = GB.hasUVs, OB.MORPHTARGETTEXTURE_HASUV2S = GB.hasUV2s, OB.MORPHTARGETTEXTURE_HASTANGENTS = GB.hasTangents, OB.MORPHTARGETTEXTURE_HASNORMALS = GB.hasNormals, OB.MORPHTARGETTEXTURE_HASPOSITIONS = GB.hasPositions, OB.MORPHTARGETTEXTURE_HASCOLORS = GB.hasColors, OB.NUM_MORPH_INFLUENCERS = GB.numMaxInfluencers || GB.numInfluencers, OB.MORPHTARGETS = OB.NUM_MORPH_INFLUENCERS > 0, OB.MORPHTARGETS_TEXTURE = GB.isUsingTextureForTargets) : (OB.MORPHTARGETS_UV = !1, OB.MORPHTARGETS_UV2 = !1, OB.MORPHTARGETS_TANGENT = !1, OB.MORPHTARGETS_NORMAL = !1, OB.MORPHTARGETS_POSITION = !1, OB.MORPHTARGETS_COLOR = !1, OB.MORPHTARGETTEXTURE_HASUVS = !1, OB.MORPHTARGETTEXTURE_HASUV2S = !1, OB.MORPHTARGETTEXTURE_HASTANGENTS = !1, OB.MORPHTARGETTEXTURE_HASNORMALS = !1, OB.MORPHTARGETTEXTURE_HASPOSITIONS = !1, OB.MORPHTARGETTEXTURE_HAS_COLORS = !1, OB.MORPHTARGETS = !1, OB.NUM_MORPH_INFLUENCERS = 0)
      }(BB, OB), jB && function(BB, OB) {
        const GB = BB.bakedVertexAnimationManager;
        OB.BAKED_VERTEX_ANIMATION_TEXTURE = !(!GB || !GB.isEnabled)
      }(BB, OB), !0
    }

    function hB(BB, OB) {
      if (BB.activeCamera) {
        const GB = OB.MULTIVIEW;
        OB.MULTIVIEW = null !== BB.activeCamera.outputRenderTarget && BB.activeCamera.outputRenderTarget.getViewCount() > 1, OB.MULTIVIEW != GB && OB.markAsUnprocessed()
      }
    }

    function aB(BB, OB, GB) {
      const YB = OB.ORDER_INDEPENDENT_TRANSPARENCY,
        DB = OB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      OB.ORDER_INDEPENDENT_TRANSPARENCY = BB.useOrderIndependentTransparency && GB, OB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !BB.Lp().getCaps().textureFloatLinearFiltering, YB === OB.ORDER_INDEPENDENT_TRANSPARENCY && DB === OB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || OB.markAsUnprocessed()
    }

    function eB(BB, OB, GB) {
      const YB = OB.PREPASS;
      if (!OB._arePrePassDirty) return;
      const DB = [{
        type: 1,
        define: "PREPASS_POSITION",
        index: "PREPASS_POSITION_INDEX"
      }, {
        type: 9,
        define: "PREPASS_LOCAL_POSITION",
        index: "PREPASS_LOCAL_POSITION_INDEX"
      }, {
        type: 2,
        define: "PREPASS_VELOCITY",
        index: "PREPASS_VELOCITY_INDEX"
      }, {
        type: 11,
        define: "PREPASS_VELOCITY_LINEAR",
        index: "PREPASS_VELOCITY_LINEAR_INDEX"
      }, {
        type: 3,
        define: "PREPASS_REFLECTIVITY",
        index: "PREPASS_REFLECTIVITY_INDEX"
      }, {
        type: 0,
        define: "PREPASS_IRRADIANCE_LEGACY",
        index: "PREPASS_IRRADIANCE_LEGACY_INDEX"
      }, {
        type: 7,
        define: "PREPASS_ALBEDO_SQRT",
        index: "PREPASS_ALBEDO_SQRT_INDEX"
      }, {
        type: 5,
        define: "PREPASS_DEPTH",
        index: "PREPASS_DEPTH_INDEX"
      }, {
        type: 10,
        define: "PREPASS_SCREENSPACE_DEPTH",
        index: "PREPASS_SCREENSPACE_DEPTH_INDEX"
      }, {
        type: 6,
        define: "PREPASS_NORMAL",
        index: "PREPASS_NORMAL_INDEX"
      }, {
        type: 8,
        define: "PREPASS_WORLD_NORMAL",
        index: "PREPASS_WORLD_NORMAL_INDEX"
      }, {
        type: 14,
        define: "PREPASS_IRRADIANCE",
        index: "PREPASS_IRRADIANCE_INDEX"
      }];
      if (BB.prePassRenderer && BB.prePassRenderer.enabled && GB) {
        OB.PREPASS = !0, OB.SCENE_MRT_COUNT = BB.prePassRenderer.mrtCount, OB.PREPASS_NORMAL_WORLDSPACE = BB.prePassRenderer.generateNormalsInWorldSpace, OB.PREPASS_COLOR = !0, OB.PREPASS_COLOR_INDEX = 0;
        for (let GB = 0; GB < DB.length; GB++) {
          const YB = BB.prePassRenderer.getIndex(DB[GB].type); - 1 !== YB ? (OB[DB[GB].define] = !0, OB[DB[GB].index] = YB) : OB[DB[GB].define] = !1
        }
      } else {
        OB.PREPASS = !1;
        for (let BB = 0; BB < DB.length; BB++) OB[DB[BB].define] = !1
      }
      OB.PREPASS != YB && (OB.markAsUnprocessed(), OB.markAsImageProcessingDirty())
    }

    function TB(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        jB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        JB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      DB && DB.push("Light" + BB), QB || (OB.push("vLightData" + BB, "vLightDiffuse" + BB, "vLightSpecular" + BB, "vLightDirection" + BB, "vLightWidth" + BB, "vLightHeight" + BB, "vLightFalloff" + BB, "vLightGround" + BB, "vSliceData" + BB, "vSliceRanges" + BB, "lightMatrix" + BB, "shadowsInfo" + BB, "depthValues" + BB), GB.push("shadowTexture" + BB), GB.push("depthTexture" + BB), OB.push("viewFrustumZ" + BB, "cascadeBlendFactor" + BB, "lightSizeUVCorrection" + BB, "depthCorrection" + BB, "penumbraDarkness" + BB, "frustumLengths" + BB), YB && (GB.push("projectionLightTexture" + BB), OB.push("textureProjectionMatrix" + BB)), oB && GB.push("iesLightTexture" + BB), yB && GB.push("rectAreaLightEmissionTexture" + BB), jB && (GB.push("lightDataTexture" + BB), JB || GB.push("tileMaskTexture" + BB)))
    }

    function bB(BB, OB, GB) {
      const YB = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      GB && YB.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), BB.push(...YB);
      OB.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function CB(BB, OB, GB) {
      let YB, DB, QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        oB = null;
      if (BB.uniformsNames) {
        const jB = BB;
        YB = jB.uniformsNames, DB = jB.uniformBuffersNames, OB = jB.samplers, GB = jB.defines, QB = jB.maxSimultaneousLights || 0, oB = jB.shaderLanguage ?? null
      } else YB = BB, OB || (OB = []);
      for (let jB = 0; jB < QB && GB["LIGHT" + jB]; jB++) TB(jB, YB, OB, GB["PROJECTEDLIGHTTEXTURE" + jB], DB, !1, GB["IESLIGHTTEXTURE" + jB], GB["CLUSTLIGHT" + jB], GB["RECTAREALIGHTEMISSIONTEXTURE" + jB], 1 === oB);
      GB.NUM_MORPH_INFLUENCERS && (YB.push("morphTargetInfluences"), YB.push("morphTargetCount")), GB.BAKED_VERTEX_ANIMATION_TEXTURE && (YB.push("bakedVertexAnimationSettings"), YB.push("bakedVertexAnimationTextureSizeInverted"), YB.push("bakedVertexAnimationTime"), OB.push("bakedVertexAnimationTexture"))
    }

    function HB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      BB.addUniform("vReflectionInfos", 2), BB.addUniform("reflectionMatrix", 16), OB && BB.addUniform("vReflectionMicrosurfaceInfos", 3), GB && (BB.addUniform("vReflectionPosition", 3), BB.addUniform("vReflectionSize", 3)), YB && (BB.addUniform("vReflectionFilteringInfo", 2), BB.addUniform("vReflectionDominantDirection", 3)), QB && BB.addUniform("vReflectionColor", 3), DB && (BB.addUniform("vSphericalL00", 3), BB.addUniform("vSphericalL1_1", 3), BB.addUniform("vSphericalL10", 3), BB.addUniform("vSphericalL11", 3), BB.addUniform("vSphericalL2_2", 3), BB.addUniform("vSphericalL2_1", 3), BB.addUniform("vSphericalL20", 3), BB.addUniform("vSphericalL21", 3), BB.addUniform("vSphericalL22", 3), BB.addUniform("vSphericalX", 3), BB.addUniform("vSphericalY", 3), BB.addUniform("vSphericalZ", 3), BB.addUniform("vSphericalXX_ZZ", 3), BB.addUniform("vSphericalYY_ZZ", 3), BB.addUniform("vSphericalZZ", 3), BB.addUniform("vSphericalXY", 3), BB.addUniform("vSphericalYZ", 3), BB.addUniform("vSphericalZX", 3))
    }
  },
  41346: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(37778),
      DB = GB(41283);
    class QB extends DB.b {
      constructor(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(BB, OB, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new YB.d, this._storeEffectOnSubMeshes = GB
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(BB, OB) {
        return !!BB && (!this._storeEffectOnSubMeshes || (!BB.iW || 0 === BB.iW.length || this.isReadyForSubMesh(BB, BB.iW[0], OB)))
      }
      _isReadyForSubMesh(BB) {
        const OB = BB.materialDefines;
        return !(this.checkReadyOnEveryCall || !BB.effect || !OB || OB._renderId !== this.JF().getRenderId())
      }
      bindOnlyWorldMatrix(BB) {
        this._activeEffect.setMatrix("world", BB)
      }
      bindOnlyNormalMatrix(BB) {
        this._activeEffect.setMatrix("normalMatrix", BB)
      }
      bind(BB, OB) {
        OB && this.bindForSubMesh(BB, OB, OB.iW[0])
      }
      _afterBind(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(BB, OB, GB), this.JF()._cachedEffect = OB, GB ? GB._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return GB._drawWrapper._forceRebindOnNextCall || BB.isCachedMaterialInvalid(this, OB, YB)
      }
      dispose(BB, OB, GB) {
        this._activeEffect = void 0, super.dispose(BB, OB, GB)
      }
    }
  },
  41368: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      e: () => DB
    });
    const YB = new WeakMap;

    function DB(BB) {
      const OB = BB.getVertexBuffers();
      if (!OB) return null;
      let GB = YB.get(BB);
      if (GB) {
        let BB = !1;
        for (const YB in OB)
          if (!GB.has(YB)) {
            BB = !0;
            break
          } if (!BB) return GB
      } else GB = new Map, YB.set(BB, GB);
      for (const YB in OB) {
        const BB = OB[YB];
        if (BB) {
          const OB = BB.byteOffset,
            DB = BB.byteStride,
            QB = BB.type,
            oB = BB.normalized;
          GB.set(YB, {
            offset: OB,
            stride: DB,
            type: QB,
            normalized: oB
          })
        }
      }
      return GB
    }

    function QB(BB, OB) {
      OB.forEach(((OB, GB) => {
        const YB = `vp_${GB}_info`;
        BB.setFloat4(YB, OB.offset, OB.stride, OB.type, OB.normalized ? 1 : 0)
      }))
    }
  },
  41315: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      g: () => yB
    });
    var YB = GB(40998),
      DB = GB(37778),
      QB = GB(41004);
    let oB = (() => {
      var BB;
      let OB, GB, DB = [];
      return BB = class {
        static extractMinAndMaxIndexed(BB, OB, GB, YB, DB, QB) {
          for (let oB = GB; oB < GB + YB; oB++) {
            const GB = 3 * OB[oB],
              YB = BB[GB],
              jB = BB[GB + 1],
              yB = BB[GB + 2];
            DB.minimizeInPlaceFromFloats(YB, jB, yB), QB.maximizeInPlaceFromFloats(YB, jB, yB)
          }
        }
        static extractMinAndMax(BB, OB, GB, YB, DB, QB) {
          for (let oB = OB, jB = OB * YB; oB < OB + GB; oB++, jB += YB) {
            const OB = BB[jB],
              GB = BB[jB + 1],
              YB = BB[jB + 2];
            DB.minimizeInPlaceFromFloats(OB, GB, YB), QB.maximizeInPlaceFromFloats(OB, GB, YB)
          }
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [QB.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], GB = [QB.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, YB.h)(BB, null, OB, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: BB => "extractMinAndMaxIndexed" in BB,
            get: BB => BB.extractMinAndMaxIndexed
          },
          metadata: oB
        }, null, DB), (0, YB.h)(BB, null, GB, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: BB => "extractMinAndMax" in BB,
            get: BB => BB.extractMinAndMax
          },
          metadata: oB
        }, null, DB), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        }), (0, YB.j)(BB, DB)
      })(), BB
    })();

    function jB(BB, OB, GB, YB) {
      let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const jB = new DB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        yB = new DB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return oB.extractMinAndMaxIndexed(BB, OB, GB, YB, jB, yB), QB && (jB.x -= jB.x * QB.x + QB.y, jB.y -= jB.y * QB.x + QB.y, jB.z -= jB.z * QB.x + QB.y, yB.x += yB.x * QB.x + QB.y, yB.y += yB.y * QB.x + QB.y, yB.z += yB.z * QB.x + QB.y), {
        minimum: jB,
        maximum: yB
      }
    }

    function yB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        QB = arguments.length > 4 ? arguments[4] : void 0;
      const jB = new DB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        yB = new DB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return QB || (QB = 3), oB.extractMinAndMax(BB, OB, GB, QB, jB, yB), YB && (jB.x -= jB.x * YB.x + YB.y, jB.y -= jB.y * YB.x + YB.y, jB.z -= jB.z * YB.x + YB.y, yB.x += yB.x * YB.x + YB.y, yB.y += yB.y * YB.x + YB.y, yB.z += yB.z * YB.x + YB.y), {
        minimum: jB,
        maximum: yB
      }
    }
  },
  41287: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB
    });
    var YB, DB = GB(41150),
      QB = GB(41294),
      oB = GB(41300),
      jB = GB(41315),
      yB = GB(41323),
      JB = GB(40890);
    class MB {
      get materialDefines() {
        const BB = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof BB ? null : BB
      }
      set materialDefines(BB) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = BB
      }
      _getDrawWrapper(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB = BB ?? this._engine.currentRenderPassId;
        let GB = this._drawWrappers[BB];
        return !GB && OB && (this._drawWrappers[BB] = GB = new yB.d(this._mesh.JF().Lp())), GB
      }
      _removeDrawWrapper(BB) {
        let OB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[BB]?.dispose(OB), this._drawWrappers[BB] = void 0
      }
      get effect() {
        return this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.effect : this._getDrawWrapper()?.effect ?? null
      }
      get _drawWrapper() {
        return this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)
      }
      get _drawWrapperOverride() {
        return this._mainDrawWrapperOverride
      }
      _setMainDrawWrapperOverride(BB) {
        this._mainDrawWrapperOverride = BB
      }
      setEffect(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const DB = this._drawWrapper;
        DB.setEffect(BB, OB, YB), void 0 !== GB && (DB.materialContext = GB), BB || (DB.defines = null, DB.materialContext = void 0)
      }
      resetDrawCache(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== BB) return void this._removeDrawWrapper(BB, !0, OB);
          for (const BB of this._drawWrappers) BB?.dispose(OB)
        }
        this._drawWrappers = []
      }
      static AddToMesh(BB, OB, GB, YB, DB, QB, oB) {
        return new MB(BB, OB, GB, YB, DB, QB, oB, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(BB, OB, GB, YB, DB, QB, oB) {
        let jB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          yB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = BB, this.verticesStart = OB, this.verticesCount = GB, this.indexStart = YB, this.indexCount = DB, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = QB, this._renderingMesh = oB || QB, yB && QB.iW.push(this), this._engine = this._mesh.JF().Lp(), this.resetDrawCache(), this._trianglePlanes = [], this._id = QB.iW.length - 1, jB && (this.refreshBoundingInfo(), QB.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      Gw() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.Gw() : this._boundingInfo
      }
      setBoundingInfo(BB) {
        return this._boundingInfo = BB, this
      }
      getMesh() {
        return this._mesh
      }
      getRenderingMesh() {
        return this._renderingMesh
      }
      getReplacementMesh() {
        return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
      }
      getEffectiveMesh() {
        const BB = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return BB || this._renderingMesh
      }
      cp() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const OB = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!OB) return BB && this._mesh.JF()._hasDefaultMaterial ? this._mesh.JF().defaultMaterial : null;
        if (this._isMultiMaterial(OB)) {
          const BB = OB.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== BB && (this._currentMaterial = BB, this.resetDrawCache()), BB
        }
        return OB
      }
      _isMultiMaterial(BB) {
        return void 0 !== BB.getSubMaterial
      }
      refreshBoundingInfo() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (BB || (BB = this._renderingMesh.getVerticesData(DB.h.PositionKind)), !BB) return this._boundingInfo = this._mesh.Gw(), this;
        const OB = this._renderingMesh.KDB();
        let GB;
        if (0 === this.indexStart && this.indexCount === OB.length) {
          const BB = this._renderingMesh.Gw();
          GB = {
            minimum: BB.minimum.clone(),
            maximum: BB.maximum.clone()
          }
        } else GB = (0, jB.c)(BB, OB, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(GB.minimum, GB.maximum) : this._boundingInfo = new oB.e(GB.minimum, GB.maximum), this
      }
      _checkCollision(BB) {
        return this.Gw()._checkCollision(BB)
      }
      updateBoundingInfo(BB) {
        let OB = this.Gw();
        return OB || (this.refreshBoundingInfo(), OB = this.Gw()), OB && OB.update(BB), this
      }
      isInFrustum(BB) {
        const OB = this.Gw();
        return !!OB && OB.isInFrustum(BB, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(BB) {
        const OB = this.Gw();
        return !!OB && OB.isCompletelyInFrustum(BB)
      }
      render(BB) {
        return this._renderingMesh.render(this, BB, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(BB, OB) {
        if (!this._linesIndexBuffer) {
          const GB = 6 * Math.floor(this.indexCount / 3),
            YB = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(GB) : new Uint16Array(GB);
          let DB = 0;
          if (0 === BB.length)
            for (let BB = this.indexStart; BB < this.indexStart + this.indexCount; BB += 3) YB[DB++] = BB, YB[DB++] = BB + 1, YB[DB++] = BB + 1, YB[DB++] = BB + 2, YB[DB++] = BB + 2, YB[DB++] = BB;
          else
            for (let OB = this.indexStart; OB < this.indexStart + this.indexCount; OB += 3) YB[DB++] = BB[OB], YB[DB++] = BB[OB + 1], YB[DB++] = BB[OB + 1], YB[DB++] = BB[OB + 2], YB[DB++] = BB[OB + 2], YB[DB++] = BB[OB];
          this._linesIndexBuffer = OB.createIndexBuffer(YB), this._linesIndexCount = YB.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(BB) {
        const OB = this.Gw();
        return !!OB && BB.intersectsBox(OB.boundingBox)
      }
      intersects(BB, OB, GB, YB, DB) {
        const QB = this.cp();
        if (!QB) return null;
        let oB = 3,
          jB = !1;
        switch (QB.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            oB = 1, jB = !0
        }
        return 4 === QB.fillMode ? GB.length ? this._intersectLines(BB, OB, GB, this._mesh.intersectionThreshold, YB) : this._intersectUnIndexedLines(BB, OB, GB, this._mesh.intersectionThreshold, YB) : !GB.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(BB, OB, GB, YB, DB) : this._intersectTriangles(BB, OB, GB, oB, jB, YB, DB)
      }
      _intersectLines(BB, OB, GB, YB, DB) {
        let oB = null;
        for (let jB = this.indexStart; jB < this.indexStart + this.indexCount; jB += 2) {
          const yB = OB[GB[jB]],
            JB = OB[GB[jB + 1]],
            MB = BB.intersectionSegment(yB, JB, YB);
          if (!(MB < 0) && ((DB || !oB || MB < oB.distance) && (oB = new QB.c(null, null, MB), oB.faceId = jB / 2, DB))) break
        }
        return oB
      }
      _intersectUnIndexedLines(BB, OB, GB, YB, DB) {
        let oB = null;
        for (let jB = this.verticesStart; jB < this.verticesStart + this.verticesCount; jB += 2) {
          const GB = OB[jB],
            yB = OB[jB + 1],
            JB = BB.intersectionSegment(GB, yB, YB);
          if (!(JB < 0) && ((DB || !oB || JB < oB.distance) && (oB = new QB.c(null, null, JB), oB.faceId = jB / 2, DB))) break
        }
        return oB
      }
      _intersectTriangles(BB, OB, GB, YB, DB, QB, oB) {
        let jB = null,
          yB = -1;
        for (let JB = this.indexStart; JB < this.indexStart + this.indexCount - (3 - YB); JB += YB) {
          yB++;
          const YB = GB[JB],
            MB = GB[JB + 1],
            PB = GB[JB + 2];
          if (DB && 4294967295 === PB) {
            JB += 2;
            continue
          }
          const zB = OB[YB],
            lB = OB[MB],
            pB = OB[PB];
          if (!zB || !lB || !pB) continue;
          if (oB && !oB(zB, lB, pB, BB, YB, MB, PB)) continue;
          const qB = BB.intersectsTriangle(zB, lB, pB);
          if (qB) {
            if (qB.distance < 0) continue;
            if ((QB || !jB || qB.distance < jB.distance) && (jB = qB, jB.faceId = yB, QB)) break
          }
        }
        return jB
      }
      _intersectUnIndexedTriangles(BB, OB, GB, YB, DB) {
        let QB = null;
        for (let oB = this.verticesStart; oB < this.verticesStart + this.verticesCount; oB += 3) {
          const GB = OB[oB],
            jB = OB[oB + 1],
            yB = OB[oB + 2];
          if (DB && !DB(GB, jB, yB, BB, -1, -1, -1)) continue;
          const JB = BB.intersectsTriangle(GB, jB, yB);
          if (JB) {
            if (JB.distance < 0) continue;
            if ((YB || !QB || JB.distance < QB.distance) && (QB = JB, QB.faceId = oB / 3, YB)) break
          }
        }
        return QB
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(BB, OB) {
        const GB = new MB(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, BB, OB, !1);
        if (!this.IsGlobal) {
          const BB = this.Gw();
          if (!BB) return GB;
          GB._boundingInfo = new oB.e(BB.minimum, BB.maximum)
        }
        return GB
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.JF().Lp()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const OB = this._mesh.iW.indexOf(this);
        this._mesh.iW.splice(OB, 1), this.resetDrawCache(void 0, BB)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(BB, OB, GB, YB, DB) {
        let QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          oB = Number.MAX_VALUE,
          jB = -Number.MAX_VALUE;
        const yB = (DB || YB).KDB();
        for (let JB = OB; JB < OB + GB; JB++) {
          const BB = yB[JB];
          BB < oB && (oB = BB), BB > jB && (jB = BB)
        }
        return new MB(BB, oB, jB - oB + 1, OB, GB, YB, DB, QB)
      }
    }(YB = MB.prototype).projectToRef ?? (YB.projectToRef = (0, JB.g)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);