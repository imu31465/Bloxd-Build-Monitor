export const id = 262;
export const ids = [262];
export const modules = {
  40399: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      constructor(mm, Tm, fm) {
        this.bu = mm, this.bv = Tm, this.distance = fm, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40408: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(37197),
      Am = fm(37185),
      am = fm(37191);
    class xm {
      constructor(mm, Tm, fm) {
        this.vectors = (0, hm.c)(8, Am.p.Zero), this.center = Am.p.Zero(), this.centerWorld = Am.p.Zero(), this.extendSize = Am.p.Zero(), this.extendSizeWorld = Am.p.Zero(), this.directions = (0, hm.c)(3, Am.p.Zero), this.vectorsWorld = (0, hm.c)(8, Am.p.Zero), this.minimumWorld = Am.p.Zero(), this.maximumWorld = Am.p.Zero(), this.minimum = Am.p.Zero(), this.maximum = Am.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(mm, Tm, fm)
      }
      reConstruct(mm, Tm, fm) {
        const hm = mm.x,
          am = mm.y,
          xm = mm.z,
          wm = Tm.x,
          Dm = Tm.y,
          im = Tm.z,
          Rm = this.vectors;
        this.minimum.Z8(hm, am, xm), this.maximum.Z8(wm, Dm, im), Rm[0].Z8(hm, am, xm), Rm[1].Z8(wm, Dm, im), Rm[2].Z8(wm, am, xm), Rm[3].Z8(hm, Dm, xm), Rm[4].Z8(hm, am, im), Rm[5].Z8(wm, Dm, xm), Rm[6].Z8(hm, Dm, im), Rm[7].Z8(wm, am, im), Tm.addToRef(mm, this.center).scaleInPlace(.5), Tm.subtractToRef(mm, this.extendSize).scaleInPlace(.5), this._worldMatrix = fm || Am.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(mm) {
        const Tm = xm._TmpVector3,
          fm = this.maximum.subtractToRef(this.minimum, Tm[0]),
          hm = fm.length();
        fm.normalizeFromLength(hm);
        const Am = hm * mm,
          am = fm.scaleInPlace(.5 * Am),
          wm = this.center.subtractToRef(am, Tm[1]),
          Dm = this.center.addToRef(am, Tm[2]);
        return this.reConstruct(wm, Dm, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(mm) {
        const Tm = this.minimumWorld,
          fm = this.maximumWorld,
          hm = this.directions,
          am = this.vectorsWorld,
          xm = this.vectors;
        if (mm.isIdentity()) {
          Tm.ZZ(this.minimum), fm.ZZ(this.maximum);
          for (let mm = 0; mm < 8; ++mm) am[mm].ZZ(xm[mm]);
          this.extendSizeWorld.ZZ(this.extendSize), this.centerWorld.ZZ(this.center)
        } else {
          Tm.Y5(Number.MAX_VALUE), fm.Y5(-Number.MAX_VALUE);
          for (let hm = 0; hm < 8; ++hm) {
            const wm = am[hm];
            Am.p.TransformCoordinatesToRef(xm[hm], mm, wm), Tm.minimizeInPlace(wm), fm.maximizeInPlace(wm)
          }
          fm.subtractToRef(Tm, this.extendSizeWorld).scaleInPlace(.5), fm.addToRef(Tm, this.centerWorld).scaleInPlace(.5)
        }
        Am.p.FromArrayToRef(mm.m, 0, hm[0]), Am.p.FromArrayToRef(mm.m, 4, hm[1]), Am.p.FromArrayToRef(mm.m, 8, hm[2]), this._worldMatrix = mm
      }
      isInFrustum(mm) {
        return xm.IsInFrustum(this.vectorsWorld, mm)
      }
      isCompletelyInFrustum(mm) {
        return xm.IsCompletelyInFrustum(this.vectorsWorld, mm)
      }
      intersectsPoint(mm) {
        const Tm = this.minimumWorld,
          fm = this.maximumWorld,
          hm = Tm.x,
          Am = Tm.y,
          xm = Tm.z,
          wm = fm.x,
          Dm = fm.y,
          im = fm.z,
          Rm = mm.x,
          pm = mm.y,
          Em = mm.z,
          om = -am.c;
        return !(wm - Rm < om || om > Rm - hm) && (!(Dm - pm < om || om > pm - Am) && !(im - Em < om || om > Em - xm))
      }
      intersectsSphere(mm) {
        return xm.IntersectsSphere(this.minimumWorld, this.maximumWorld, mm.centerWorld, mm.radiusWorld)
      }
      intersectsMinMax(mm, Tm) {
        const fm = this.minimumWorld,
          hm = this.maximumWorld,
          Am = fm.x,
          am = fm.y,
          xm = fm.z,
          wm = hm.x,
          Dm = hm.y,
          im = hm.z,
          Rm = mm.x,
          pm = mm.y,
          Em = mm.z,
          om = Tm.x,
          Om = Tm.y,
          Ym = Tm.z;
        return !(wm < Rm || Am > om) && (!(Dm < pm || am > Om) && !(im < Em || xm > Ym))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(mm, Tm) {
        return mm.intersectsMinMax(Tm.minimumWorld, Tm.maximumWorld)
      }
      static IntersectsSphere(mm, Tm, fm, hm) {
        const am = xm._TmpVector3[0];
        Am.p.ClampToRef(fm, mm, Tm, am);
        return Am.p.DistanceSquared(fm, am) <= hm * hm
      }
      static IsCompletelyInFrustum(mm, Tm) {
        for (let fm = 0; fm < 6; ++fm) {
          const hm = Tm[fm];
          for (let Tm = 0; Tm < 8; ++Tm)
            if (hm.dotCoordinate(mm[Tm]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(mm, Tm) {
        for (let fm = 0; fm < 6; ++fm) {
          let hm = !0;
          const Am = Tm[fm];
          for (let Tm = 0; Tm < 8; ++Tm)
            if (Am.dotCoordinate(mm[Tm]) >= 0) {
              hm = !1;
              break
            } if (hm) return !1
        }
        return !0
      }
    }
    xm._TmpVector3 = (0, hm.c)(3, Am.p.Zero)
  },
  40404: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => pm
    });
    var hm = fm(37197),
      Am = fm(37185),
      am = fm(40408);
    class xm {
      constructor(mm, Tm, fm) {
        this.center = Am.p.Zero(), this.centerWorld = Am.p.Zero(), this.minimum = Am.p.Zero(), this.maximum = Am.p.Zero(), this.reConstruct(mm, Tm, fm)
      }
      reConstruct(mm, Tm, fm) {
        this.minimum.ZZ(mm), this.maximum.ZZ(Tm);
        const hm = Am.p.Distance(mm, Tm);
        Tm.addToRef(mm, this.center).scaleInPlace(.5), this.radius = .5 * hm, this._update(fm || Am.e.IdentityReadOnly)
      }
      scale(mm) {
        const Tm = xm._TmpVector3,
          fm = this.maximum.subtractToRef(this.minimum, Tm[0]),
          hm = fm.length();
        fm.normalizeFromLength(hm);
        const Am = hm * mm,
          am = fm.scaleInPlace(.5 * Am),
          wm = this.center.subtractToRef(am, Tm[1]),
          Dm = this.center.addToRef(am, Tm[2]);
        return this.reConstruct(wm, Dm, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(mm) {
        if (mm.isIdentity()) this.centerWorld.ZZ(this.center), this.radiusWorld = this.radius;
        else {
          Am.p.TransformCoordinatesToRef(this.center, mm, this.centerWorld);
          const Tm = xm._TmpVector3[0];
          Am.p.TransformNormalFromFloatsToRef(1, 1, 1, mm, Tm), this.radiusWorld = Math.max(Math.abs(Tm.x), Math.abs(Tm.y), Math.abs(Tm.z)) * this.radius
        }
      }
      isInFrustum(mm) {
        const Tm = this.centerWorld,
          fm = this.radiusWorld;
        for (let hm = 0; hm < 6; hm++)
          if (mm[hm].dotCoordinate(Tm) <= -fm) return !1;
        return !0
      }
      isCenterInFrustum(mm) {
        const Tm = this.centerWorld;
        for (let fm = 0; fm < 6; fm++)
          if (mm[fm].dotCoordinate(Tm) < 0) return !1;
        return !0
      }
      intersectsPoint(mm) {
        const Tm = Am.p.DistanceSquared(this.centerWorld, mm);
        return !(this.radiusWorld * this.radiusWorld < Tm)
      }
      static Intersects(mm, Tm) {
        const fm = Am.p.DistanceSquared(mm.centerWorld, Tm.centerWorld),
          hm = mm.radiusWorld + Tm.radiusWorld;
        return !(hm * hm < fm)
      }
      static CreateFromCenterAndRadius(mm, Tm, fm) {
        this._TmpVector3[0].ZZ(mm), this._TmpVector3[1].Z8(0, 0, Tm), this._TmpVector3[2].ZZ(mm), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].zhm(this._TmpVector3[1]);
        const hm = new xm(this._TmpVector3[0], this._TmpVector3[2]);
        return hm._worldMatrix = fm || Am.e.Identity(), hm
      }
    }
    xm._TmpVector3 = (0, hm.c)(3, Am.p.Zero);
    const wm = {
        min: 0,
        max: 0
      },
      Dm = {
        min: 0,
        max: 0
      },
      im = (mm, Tm, fm) => {
        const hm = Am.p.Dot(Tm.centerWorld, mm),
          am = Math.abs(Am.p.Dot(Tm.directions[0], mm)) * Tm.extendSize.x + Math.abs(Am.p.Dot(Tm.directions[1], mm)) * Tm.extendSize.y + Math.abs(Am.p.Dot(Tm.directions[2], mm)) * Tm.extendSize.z;
        fm.min = hm - am, fm.max = hm + am
      },
      Rm = (mm, Tm, fm) => (im(mm, Tm, wm), im(mm, fm, Dm), !(wm.min > Dm.max || Dm.min > wm.max));
    class pm {
      constructor(mm, Tm, fm) {
        this._isLocked = !1, this.boundingBox = new am.c(mm, Tm, fm), this.Shm = new xm(mm, Tm, fm)
      }
      reConstruct(mm, Tm, fm) {
        this.boundingBox.reConstruct(mm, Tm, fm), this.Shm.reConstruct(mm, Tm, fm)
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
      set isLocked(mm) {
        this._isLocked = mm
      }
      update(mm) {
        this._isLocked || (this.boundingBox._update(mm), this.Shm._update(mm))
      }
      centerOn(mm, Tm) {
        const fm = pm._TmpVector3[0].ZZ(mm).zhm(Tm),
          hm = pm._TmpVector3[1].ZZ(mm).addInPlace(Tm);
        return this.boundingBox.reConstruct(fm, hm, this.boundingBox.getWorldMatrix()), this.Shm.reConstruct(fm, hm, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(mm) {
        const Tm = Am.p.Minimize(this.minimum, mm),
          fm = Am.p.Maximize(this.maximum, mm);
        return this.reConstruct(Tm, fm, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(mm) {
        const Tm = Am.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Tm);
        const fm = Am.j.WO[0];
        return Am.p.TransformCoordinatesToRef(mm.boundingBox.minimumWorld, Tm, fm), this.encapsulate(fm), Am.p.TransformCoordinatesToRef(mm.boundingBox.maximumWorld, Tm, fm), this.encapsulate(fm), this
      }
      scale(mm) {
        return this.boundingBox.scale(mm), this.Shm.scale(mm), this
      }
      isInFrustum(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Tm || 3 === Tm) && this.Shm.isCenterInFrustum(mm)) return !0;
        if (!this.Shm.isInFrustum(mm)) return !1;
        return !(1 !== Tm && 3 !== Tm) || this.boundingBox.isInFrustum(mm)
      }
      get diagonalLength() {
        const mm = this.boundingBox;
        return mm.maximumWorld.subtractToRef(mm.minimumWorld, pm._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(mm) {
        return this.boundingBox.isCompletelyInFrustum(mm)
      }
      _checkCollision(mm) {
        return mm._canDoCollision(this.Shm.centerWorld, this.Shm.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(mm) {
        return !!this.Shm.centerWorld && (!!this.Shm.intersectsPoint(mm) && !!this.boundingBox.intersectsPoint(mm))
      }
      intersects(mm, Tm) {
        if (!xm.Intersects(this.Shm, mm.Shm)) return !1;
        if (!am.c.Intersects(this.boundingBox, mm.boundingBox)) return !1;
        if (!Tm) return !0;
        const fm = this.boundingBox,
          hm = mm.boundingBox;
        return !!Rm(fm.directions[0], fm, hm) && (!!Rm(fm.directions[1], fm, hm) && (!!Rm(fm.directions[2], fm, hm) && (!!Rm(hm.directions[0], fm, hm) && (!!Rm(hm.directions[1], fm, hm) && (!!Rm(hm.directions[2], fm, hm) && (!!Rm(Am.p.Cross(fm.directions[0], hm.directions[0]), fm, hm) && (!!Rm(Am.p.Cross(fm.directions[0], hm.directions[1]), fm, hm) && (!!Rm(Am.p.Cross(fm.directions[0], hm.directions[2]), fm, hm) && (!!Rm(Am.p.Cross(fm.directions[1], hm.directions[0]), fm, hm) && (!!Rm(Am.p.Cross(fm.directions[1], hm.directions[1]), fm, hm) && (!!Rm(Am.p.Cross(fm.directions[1], hm.directions[2]), fm, hm) && (!!Rm(Am.p.Cross(fm.directions[2], hm.directions[0]), fm, hm) && (!!Rm(Am.p.Cross(fm.directions[2], hm.directions[1]), fm, hm) && !!Rm(Am.p.Cross(fm.directions[2], hm.directions[2]), fm, hm))))))))))))))
      }
    }
    pm._TmpVector3 = (0, hm.c)(2, Am.p.Zero)
  },
  40432: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Dm,
      g: () => wm,
      k: () => xm
    });
    var hm = fm(40259),
      Am = fm(37185);

    function am(mm) {
      -1 === mm.indexOf("vClipPlane") && mm.push("vClipPlane"), -1 === mm.indexOf("vClipPlane2") && mm.push("vClipPlane2"), -1 === mm.indexOf("vClipPlane3") && mm.push("vClipPlane3"), -1 === mm.indexOf("vClipPlane4") && mm.push("vClipPlane4"), -1 === mm.indexOf("vClipPlane5") && mm.push("vClipPlane5"), -1 === mm.indexOf("vClipPlane6") && mm.push("vClipPlane6")
    }

    function xm(mm, Tm, fm) {
      const hm = !!(mm.clipPlane ?? Tm.clipPlane),
        Am = !!(mm.clipPlane2 ?? Tm.clipPlane2),
        am = !!(mm.clipPlane3 ?? Tm.clipPlane3),
        xm = !!(mm.clipPlane4 ?? Tm.clipPlane4),
        wm = !!(mm.clipPlane5 ?? Tm.clipPlane5),
        Dm = !!(mm.clipPlane6 ?? Tm.clipPlane6);
      hm && fm.push("#define CLIPPLANE"), Am && fm.push("#define CLIPPLANE2"), am && fm.push("#define CLIPPLANE3"), xm && fm.push("#define CLIPPLANE4"), wm && fm.push("#define CLIPPLANE5"), Dm && fm.push("#define CLIPPLANE6")
    }

    function wm(mm, Tm, fm) {
      let hm = !1;
      const Am = !!(mm.clipPlane ?? Tm.clipPlane),
        am = !!(mm.clipPlane2 ?? Tm.clipPlane2),
        xm = !!(mm.clipPlane3 ?? Tm.clipPlane3),
        wm = !!(mm.clipPlane4 ?? Tm.clipPlane4),
        Dm = !!(mm.clipPlane5 ?? Tm.clipPlane5),
        im = !!(mm.clipPlane6 ?? Tm.clipPlane6);
      return fm.CLIPPLANE !== Am && (fm.CLIPPLANE = Am, hm = !0), fm.CLIPPLANE2 !== am && (fm.CLIPPLANE2 = am, hm = !0), fm.CLIPPLANE3 !== xm && (fm.CLIPPLANE3 = xm, hm = !0), fm.CLIPPLANE4 !== wm && (fm.CLIPPLANE4 = wm, hm = !0), fm.CLIPPLANE5 !== Dm && (fm.CLIPPLANE5 = Dm, hm = !0), fm.CLIPPLANE6 !== im && (fm.CLIPPLANE6 = im, hm = !0), hm
    }

    function Dm(mm, Tm, fm) {
      let hm = Tm.clipPlane ?? fm.clipPlane;
      im(mm, "vClipPlane", hm), hm = Tm.clipPlane2 ?? fm.clipPlane2, im(mm, "vClipPlane2", hm), hm = Tm.clipPlane3 ?? fm.clipPlane3, im(mm, "vClipPlane3", hm), hm = Tm.clipPlane4 ?? fm.clipPlane4, im(mm, "vClipPlane4", hm), hm = Tm.clipPlane5 ?? fm.clipPlane5, im(mm, "vClipPlane5", hm), hm = Tm.clipPlane6 ?? fm.clipPlane6, im(mm, "vClipPlane6", hm)
    }

    function im(mm, Tm, fm) {
      if (fm) {
        const am = hm.b.wG()?.floatingOriginOffset || Am.p.ZeroReadOnly;
        mm.setFloat4(Tm, fm.normal.x, fm.normal.y, fm.normal.z, fm.d + Am.p.Dot(fm.normal, am))
      }
    }
  },
  40447: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(mm, Tm) {
        this._defines[mm] || (mm < this._currentRank && (this._currentRank = mm), mm > this._maxRank && (this._maxRank = mm), this._defines[mm] = new Array), this._defines[mm].push(Tm)
      }
      addCPUSkinningFallback(mm, Tm) {
        this._mesh = Tm, mm < this._currentRank && (this._currentRank = mm), mm > this._maxRank && (this._maxRank = mm)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(mm, Tm) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, mm = mm.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), Tm._bonesComputationForcedToCPU = !0;
          const fm = this._mesh.wG();
          for (let mm = 0; mm < fm.meshes.length; mm++) {
            const hm = fm.meshes[mm];
            if (hm.material) {
              if (hm.computeBonesUsingShaders && 0 !== hm.numBoneInfluencers)
                if (hm.material.getEffect() === Tm) hm.computeBonesUsingShaders = !1;
                else if (hm.jK)
                for (const mm of hm.jK) {
                  if (mm.effect === Tm) {
                    hm.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && hm.computeBonesUsingShaders && hm.numBoneInfluencers > 0 && (hm.computeBonesUsingShaders = !1)
          }
        } else {
          const Tm = this._defines[this._currentRank];
          if (Tm)
            for (let fm = 0; fm < Tm.length; fm++) mm = mm.replace("#define " + Tm[fm], "");
          this._currentRank++
        }
        return mm
      }
    }
  },
  40383: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Vm
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(40203),
      xm = fm(37203),
      wm = fm(37201),
      Dm = fm(40391),
      im = fm(40235),
      Rm = fm(38766),
      pm = fm(37821),
      Em = fm(40423),
      om = fm(40129);
    let Om = (() => {
      var mm;
      let Tm, fm, am, xm, wm, Dm, im, Rm, pm, Em, Om, Ym, qm = [];
      return mm = class {
        constructor() {
          this._func = (0, hm.i)(this, qm), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(mm) {
          this._func = mm
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(mm) {
          this._backFunc = mm
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(mm) {
          this._funcRef = mm
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(mm) {
          this._funcMask = mm
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(mm) {
          this._opStencilFail = mm
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(mm) {
          this._opDepthFail = mm
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(mm) {
          this._opStencilDepthPass = mm
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(mm) {
          this._backOpStencilFail = mm
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(mm) {
          this._backOpDepthFail = mm
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(mm) {
          this._backOpStencilDepthPass = mm
        }
        get mask() {
          return this._mask
        }
        set mask(mm) {
          this._mask = mm
        }
        get enabled() {
          return this._enabled
        }
        set enabled(mm) {
          this._enabled = mm
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(mm) {
          om.d.Clone((() => mm), this)
        }
        serialize() {
          return om.d.Serialize(this)
        }
        parse(mm, Tm, fm) {
          om.d.Parse((() => this), mm, Tm, fm)
        }
      }, (() => {
        const om = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], xm = [(0, Am.J)()], wm = [(0, Am.J)()], Dm = [(0, Am.J)()], im = [(0, Am.J)()], Rm = [(0, Am.J)()], pm = [(0, Am.J)()], Em = [(0, Am.J)()], Om = [(0, Am.J)()], Ym = [(0, Am.J)()], (0, hm.g)(mm, null, Tm, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: mm => "func" in mm,
            get: mm => mm.func
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, fm, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: mm => "backFunc" in mm,
            get: mm => mm.backFunc
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, am, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: mm => "funcRef" in mm,
            get: mm => mm.funcRef
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, xm, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: mm => "funcMask" in mm,
            get: mm => mm.funcMask
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, wm, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: mm => "opStencilFail" in mm,
            get: mm => mm.opStencilFail
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, Dm, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: mm => "opDepthFail" in mm,
            get: mm => mm.opDepthFail
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, im, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: mm => "opStencilDepthPass" in mm,
            get: mm => mm.opStencilDepthPass
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, Rm, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: mm => "backOpStencilFail" in mm,
            get: mm => mm.backOpStencilFail
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, pm, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: mm => "backOpDepthFail" in mm,
            get: mm => mm.backOpDepthFail
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, Em, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: mm => "backOpStencilDepthPass" in mm,
            get: mm => mm.backOpStencilDepthPass
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, Om, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: mm => "mask" in mm,
            get: mm => mm.mask
          },
          metadata: om
        }, null, qm), (0, hm.g)(mm, null, Ym, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "enabled" in mm,
            get: mm => mm.enabled
          },
          metadata: om
        }, null, qm), om && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: om
        })
      })(), mm
    })();
    var Ym = fm(40428),
      qm = fm(40030),
      jm = fm(39993);
    let Vm = (() => {
      var mm;
      let Tm, fm, jm, Vm, Im, Km, Qm, nm, Jm, cm, zm, Zm, km, bm, Sm, em, Nm, Gm, Xm, Pm, Hm, ym, Cm, rm, sm, lm, Mm, um, Bm, Lm = [],
        tm = [],
        Um = [],
        dm = [],
        gm = [],
        Wm = [],
        Fm = [],
        mT = [],
        TT = [],
        fT = [],
        hT = [],
        AT = [],
        aT = [],
        xT = [],
        wT = [],
        DT = [],
        iT = [],
        RT = [],
        pT = [],
        ET = [],
        oT = [],
        OT = [],
        YT = [],
        qT = [],
        jT = [],
        VT = [],
        IT = [],
        KT = [],
        QT = [],
        nT = [],
        JT = [],
        cT = [],
        zT = [],
        ZT = [],
        kT = [],
        bT = [],
        ST = [],
        eT = [],
        NT = [],
        GT = [],
        XT = [],
        PT = [],
        HT = [],
        yT = [],
        CT = [],
        rT = [],
        sT = [],
        lT = [],
        MT = [],
        uT = [],
        BT = [];
      return mm = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Tm) {
          this._useVertexPulling !== Tm && (this._useVertexPulling = Tm, this.HTm(mm.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(mm) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(Tm) {
          if (this._alpha === Tm) return;
          const fm = this._alpha;
          this._alpha = Tm, 1 !== fm && 1 !== Tm || this.HTm(mm.MiscDirtyFlag + mm.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Tm) {
          this._backFaceCulling !== Tm && (this._backFaceCulling = Tm, this.HTm(mm.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Tm) {
          const fm = Math.max(0, Math.min(0 | Tm, 4));
          this._textureRepetitionMode !== fm && (this._textureRepetitionMode = fm, this.HTm(mm.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Tm) {
          this._cullBackFaces !== Tm && (this._cullBackFaces = Tm, this.HTm(mm.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(mm) {
          this._blockDirtyMechanism !== mm && (this._blockDirtyMechanism = mm, mm || this.markDirty())
        }
        atomicMaterialsUpdate(mm) {
          this.blockDirtyMechanism = !0;
          try {
            mm(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(mm) {
          this._onDisposeObserver && this.iG.remove(this._onDisposeObserver), this._onDisposeObserver = this.iG.add(mm)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new xm.c), this._onBindObservable
        }
        set onBind(mm) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(mm)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new xm.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new xm.c), this._onEffectCreatedObservable
        }
        set alphaMode(mm) {
          this._alphaMode[0] = mm
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[fm] !== Tm && (this._alphaMode[fm] = Tm, this.HTm(mm.TextureDirtyFlag))
        }
        set needDepthPrePass(mm) {
          this._needDepthPrePass !== mm && (this._needDepthPrePass = mm, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(Tm) {
          this._fogEnabled !== Tm && (this._fogEnabled = Tm, this.HTm(mm.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case mm.WireFrameFillMode:
            case mm.LineListDrawMode:
            case mm.LineLoopDrawMode:
            case mm.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(Tm) {
          this.fillMode = Tm ? mm.WireFrameFillMode : mm.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case mm.PointFillMode:
            case mm.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(Tm) {
          this.fillMode = Tm ? mm.PointFillMode : mm.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(Tm) {
          this._fillMode !== Tm && (this._fillMode = Tm, this.HTm(mm.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(mm) {
          const Tm = this.wG().dO().getCaps().fragmentDepthSupported;
          mm && !Tm && Rm.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = mm && Tm, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(mm) {
          this._isVertexOutputInvariant !== mm && (this._isVertexOutputInvariant = mm, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(mm) {
          this._drawWrapper = mm
        }
        constructor(Tm, fm, Am) {
          let Dm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, hm.i)(this, Lm), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, hm.i)(this, tm, void 0), this.uniqueId = ((0, hm.i)(this, Um), (0, hm.i)(this, dm, void 0)), this._loadedUniqueId = (0, hm.i)(this, gm), this.name = (0, hm.i)(this, Wm, void 0), this.metadata = ((0, hm.i)(this, Fm), (0, hm.i)(this, mT, null)), this._internalMetadata = (0, hm.i)(this, TT), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, hm.i)(this, fT, !1), this.checkReadyOnlyOnce = ((0, hm.i)(this, hT), (0, hm.i)(this, AT, !1)), this.state = ((0, hm.i)(this, aT), (0, hm.i)(this, xT, "")), this._alpha = ((0, hm.i)(this, wT), (0, hm.i)(this, DT, 1)), this.inspectableCustomProperties = (0, hm.i)(this, iT), this._backFaceCulling = (0, hm.i)(this, RT, !0), this._textureRepetitionMode = ((0, hm.i)(this, pT), (0, hm.i)(this, ET, 0)), this.textureRepetitionHexTilingParams = ((0, hm.i)(this, oT), (0, hm.i)(this, OT, [1, .6, 7, .5])), this._cullBackFaces = ((0, hm.i)(this, YT), (0, hm.i)(this, qT, !0)), this._blockDirtyMechanism = ((0, hm.i)(this, jT), !1), this.sideOrientation = (0, hm.i)(this, VT, null), this.onCompiled = ((0, hm.i)(this, IT), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.iG = new xm.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, hm.i)(this, KT, [2]), this._needDepthPrePass = ((0, hm.i)(this, QT), (0, hm.i)(this, nT, !1)), this.disableDepthWrite = ((0, hm.i)(this, JT), (0, hm.i)(this, cT, !1)), this.disableColorWrite = ((0, hm.i)(this, zT), (0, hm.i)(this, ZT, !1)), this.forceDepthWrite = ((0, hm.i)(this, kT), (0, hm.i)(this, bT, !1)), this.depthFunction = ((0, hm.i)(this, ST), (0, hm.i)(this, eT, 0)), this.separateCullingPass = ((0, hm.i)(this, NT), (0, hm.i)(this, GT, !1)), this._fogEnabled = ((0, hm.i)(this, XT), (0, hm.i)(this, PT, !0)), this.pointSize = ((0, hm.i)(this, HT), (0, hm.i)(this, yT, 1)), this.zOffset = ((0, hm.i)(this, CT), (0, hm.i)(this, rT, 0)), this.zOffsetUnits = ((0, hm.i)(this, sT), (0, hm.i)(this, lT, 0)), this.clipPlane = (0, hm.i)(this, MT), this.stencil = new Om, this._isVertexOutputInvariant = (0, hm.i)(this, uT, mm.ForceVertexOutputInvariant), this._materialContext = (0, hm.i)(this, BT), this._useUBO = !1, this._fillMode = mm.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Tm;
          const Rm = fm || wm.c.LastCreatedScene;
          Rm && (this._scene = Rm, this._dirtyCallbacks = {}, this._forceGLSL = Dm, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Tm || am.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.dO().createMaterialContext(), this._drawWrapper = new Em.b(this._scene.dO(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new im.e(this._scene.dO(), void 0, void 0, Tm), this._useUBO = this.wG().dO().supportsUniformBuffers, this._createUniformBuffer(), Am || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), mm.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const mm = this.wG().dO();
          this._uniformBuffer?.dispose(), mm.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new im.e(mm, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new im.e(this._scene.dO(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(mm) {
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
        isReady(mm, Tm) {
          return !0
        }
        isReadyForSubMesh(mm, Tm, fm) {
          const hm = Tm.materialDefines;
          return !!hm && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = hm, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        wG() {
          return this._scene
        }
        _getEffectiveOrientation(mm) {
          return null !== this.sideOrientation ? this.sideOrientation : mm.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(mm) {
          this._transparencyMode = mm
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === mm.MATERIAL_ALPHABLEND || this._transparencyMode === mm.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === mm.MATERIAL_ALPHATEST || this._transparencyMode === mm.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === mm.MATERIAL_OPAQUE || this._transparencyMode === mm.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(mm) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : mm.visibility < 1 || !this._disableAlphaBlending && (mm.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(mm) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(mm) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let Tm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const fm = this.wG().meshes;
          for (const mm of fm)
            if (mm.jK)
              for (const fm of mm.jK)
                if (fm.TY() === this)
                  for (const mm of fm._drawWrappers) mm && this._materialContext === mm.materialContext && (mm._wasPreviouslyReady = !1, mm._wasPreviouslyUsingInstances = null, mm._forceRebindOnNextCall = Tm);
          Tm && this.HTm(mm.AllDirtyFlag)
        }
        _preBind(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const hm = this._scene.dO(),
            Am = (null == fm ? this.sideOrientation : fm) === mm.ClockWiseSideOrientation,
            am = Tm || this._getDrawWrapper();
          return (0, qm.c)(am) && am.materialContext && (am.materialContext.useVertexPulling = this.useVertexPulling), hm.enableEffect(am), hm.setState(this.backFaceCulling, this.zOffset, !1, Am, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Am
        }
        bind(mm, Tm) {}
        buildUniformLayout() {
          const mm = this._uniformBuffer;
          this._eventInfo.ubo = mm, this._callbackPluginEventGeneric(8, this._eventInfo), mm.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(mm, Tm, fm) {
          const hm = fm._drawWrapper;
          this._eventInfo.subMesh = fm, this._callbackPluginEventBindForSubMesh(this._eventInfo), hm._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(mm) {}
        bindView(mm) {
          this._useUBO ? this._needToBindSceneUbo = !0 : mm.setMatrix("view", this.wG().getViewMatrix())
        }
        bindViewProjection(mm) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (mm.setMatrix("viewProjection", this.wG().getTransformMatrix()), mm.setMatrix("projection", this.wG().getProjectionMatrix()), mm.setMatrix("inverseProjection", this.wG().getInverseProjectionMatrix()))
        }
        bindEyePosition(mm, Tm) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(mm, Tm)
        }
        _afterBind(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Tm && (this._needToBindSceneUbo = !1, (0, Ym.v)(Tm, this.wG().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = mm ? mm.visibility : 1, this._onBindObservable && mm && this._onBindObservable.notifyObservers(mm), this.disableDepthWrite) {
            const mm = this._scene.dO();
            this._cachedDepthWriteState = mm.getDepthWrite(), mm.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const mm = this._scene.dO();
            this._cachedColorWriteState = mm.getColorWrite(), mm.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const mm = this._scene.dO();
            this._cachedDepthFunctionState = mm.getDepthFunction() || 0, mm.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.dO().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.dO().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.dO().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(mm) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = mm, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(mm) {
          return null
        }
        _clonePlugins(Tm, fm) {
          const hm = {};
          if (this._serializePlugins(hm), mm._ParsePlugins(hm, Tm, this._scene, fm), this.pluginManager)
            for (const mm of this.pluginManager._plugins) {
              const fm = Tm.pluginManager.getPlugin(mm.name);
              fm && mm.copyTo(fm)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const mm = [];
            for (const Tm in this.meshMap) {
              const fm = this.meshMap[Tm];
              fm && mm.push(fm)
            }
            return mm
          }
          return this._scene.meshes.filter((mm => mm.material === this))
        }
        forceCompilation(mm, Tm, fm, hm) {
          const Am = {
              clipPlane: !1,
              useInstances: !1,
              ...fm
            },
            am = this.wG(),
            xm = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const wm = () => {
            if (!this._scene || !this._scene.dO()) return;
            const fm = am.clipPlane;
            if (Am.clipPlane && (am.clipPlane = new pm.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let fm = !0,
                am = null;
              if (mm.jK) {
                const Tm = new Dm.e(0, 0, 0, 0, 0, mm, void 0, !1, !1);
                Tm.materialDefines && (Tm.materialDefines._renderId = -1), this.isReadyForSubMesh(mm, Tm, Am.useInstances) || (Tm.effect && Tm.effect.getCompilationError() && Tm.effect.allFallbacksProcessed() ? am = Tm.effect.getCompilationError() : (fm = !1, setTimeout(wm, 16)))
              }
              fm && (this.allowShaderHotSwapping = xm, am && hm && hm(am), Tm && Tm(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = xm, Tm && Tm(this)) : setTimeout(wm, 16);
            Am.clipPlane && (am.clipPlane = fm)
          };
          wm()
        }
        async forceCompilationAsync(mm, Tm) {
          return await new Promise(((fm, hm) => {
            this.forceCompilation(mm, (() => {
              fm()
            }), Tm, (mm => {
              hm(mm)
            }))
          }))
        }
        HTm(Tm) {
          this.wG().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (mm._DirtyCallbackArray.length = 0, Tm & mm.ImageProcessingDirtyFlag && mm._DirtyCallbackArray.push(mm._ImageProcessingDirtyCallBack), Tm & mm.TextureDirtyFlag && mm._DirtyCallbackArray.push(mm._TextureDirtyCallBack), Tm & mm.LightDirtyFlag && mm._DirtyCallbackArray.push(mm._LightsDirtyCallBack), Tm & mm.FresnelDirtyFlag && mm._DirtyCallbackArray.push(mm._FresnelDirtyCallBack), Tm & mm.AttributesDirtyFlag && mm._DirtyCallbackArray.push(mm._AttributeDirtyCallBack), Tm & mm.MiscDirtyFlag && mm._DirtyCallbackArray.push(mm._MiscDirtyCallBack), Tm & mm.PrePassDirtyFlag && mm._DirtyCallbackArray.push(mm._PrePassDirtyCallBack), mm._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(mm._RunDirtyCallBacks), this.wG().resetCachedMaterial())
        }
        resetDrawCache() {
          const mm = this.wG().meshes;
          for (const Tm of mm)
            if (Tm.jK)
              for (const mm of Tm.jK) mm.TY() === this && mm.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(mm) {
          const Tm = this.wG();
          if (Tm.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const fm = Tm.meshes;
          for (const hm of fm)
            if (hm.jK)
              for (const fm of hm.jK) {
                if ((fm.TY() || (Tm._hasDefaultMaterial ? Tm.defaultMaterial : null)) === this)
                  for (const Tm of fm._drawWrappers) Tm && Tm.defines && Tm.defines.markAllAsDirty && this._materialContext === Tm.materialContext && mm(Tm.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.wG().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const mm = this.wG().enablePrePassRenderer();
          mm && mm.HTm()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(mm._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(mm._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(mm._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(mm._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(mm._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(mm._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(mm._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(mm._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(mm._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(mm._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const mm = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.iG.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(mm)
            }))
          }
        }
        setPrePassRenderer(mm) {
          return !1
        }
        dispose(mm, Tm, fm) {
          const hm = this.wG();
          if (hm.stopAnimation(this), hm.freeProcessedMaterials(), hm.removeMaterial(this), this._eventInfo.forceDisposeTextures = Tm, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const mm = this._parentContainer.materials.indexOf(this);
            mm > -1 && this._parentContainer.materials.splice(mm, 1), this._parentContainer = null
          }
          if (!0 !== fm)
            if (this.meshMap)
              for (const Am in this.meshMap) {
                const mm = this.meshMap[Am];
                this._disposeMeshResources(mm)
              } else {
                const mm = hm.meshes;
                for (const Tm of mm) this._disposeMeshResources(Tm)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.iG.notifyObservers(this), this.iG.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(mm) {
          if (!mm) return;
          const Tm = mm.geometry,
            fm = mm._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (mm.jK && fm)
              for (const hm of mm.jK) {
                const mm = hm._drawWrappers;
                for (let Am = 0; Am < mm.length; Am++) {
                  const am = mm[Am]?.effect;
                  if (!am) continue;
                  fm[Am] === this && (Tm?._releaseVertexArrayObject(am), hm._removeDrawWrapper(Am, !0, !0))
                }
              }
          } else Tm?._releaseVertexArrayObject(this._drawWrapper.effect);
          mm.material !== this || mm.mAm || (mm.material = null)
        }
        serialize() {
          const mm = om.d.Serialize(this);
          return mm.stencil = this.stencil.serialize(), mm.uniqueId = this.uniqueId, this._serializePlugins(mm), mm
        }
        _serializePlugins(mm) {
          if (mm.plugins = {}, this.pluginManager)
            for (const Tm of this.pluginManager._plugins) Tm.doNotSerialize || (mm.plugins[Tm.getClassName()] = Tm.serialize())
        }
        static ParseAlphaMode(mm, Tm) {
          void 0 !== mm._alphaMode ? Tm._alphaMode = Array.isArray(mm._alphaMode) ? [...mm._alphaMode] : [mm._alphaMode] : void 0 !== mm.alphaMode ? Tm._alphaMode = Array.isArray(mm.alphaMode) ? [...mm.alphaMode] : [mm.alphaMode] : Tm._alphaMode = [2]
        }
        static Parse(Tm, fm, hm) {
          if (Tm.customType) {
            if ("BABYLON.PBRMaterial" === Tm.customType && Tm.overloadedAlbedo && (Tm.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Rm.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Tm.customType = "BABYLON.StandardMaterial";
          const Am = am.h.Instantiate(Tm.customType).Parse(Tm, fm, hm);
          return Am._loadedUniqueId = Tm.uniqueId, mm.ParseAlphaMode(Tm, Am), Am
        }
        static _ParsePlugins(mm, Tm, fm, hm) {
          if (mm.plugins)
            for (const Am in mm.plugins) {
              const xm = mm.plugins[Am];
              let wm = Tm.pluginManager?.getPlugin(xm.name);
              if (!wm) {
                const mm = am.h.Instantiate("BABYLON." + Am);
                mm && (wm = new mm(Tm))
              }
              wm?.parse(xm, fm, hm)
            }
        }
      }, (() => {
        const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], jm = [(0, Am.J)()], Vm = [(0, Am.J)()], Im = [(0, Am.J)()], Km = [(0, Am.J)()], Qm = [(0, Am.J)()], nm = [(0, Am.J)("alpha")], Jm = [(0, Am.J)("backFaceCulling")], cm = [(0, Am.J)("textureRepetitionMode")], zm = [(0, Am.J)("textureRepetitionHexTilingParams")], Zm = [(0, Am.J)("cullBackFaces")], km = [(0, Am.J)()], bm = [(0, Am.J)()], Sm = [(0, Am.J)()], em = [(0, Am.J)()], Nm = [(0, Am.J)()], Gm = [(0, Am.J)()], Xm = [(0, Am.J)()], Pm = [(0, Am.J)()], Hm = [(0, Am.J)("fogEnabled")], ym = [(0, Am.J)()], Cm = [(0, Am.J)()], rm = [(0, Am.J)()], sm = [(0, Am.J)()], lm = [(0, Am.J)()], Mm = [(0, Am.J)()], um = [(0, Am.J)()], Bm = [(0, Am.J)()], (0, hm.g)(mm, null, sm, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: mm => "pointsCloud" in mm,
            get: mm => mm.pointsCloud
          },
          metadata: am
        }, null, Lm), (0, hm.g)(mm, null, lm, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "fillMode" in mm,
            get: mm => mm.fillMode
          },
          metadata: am
        }, null, Lm), (0, hm.g)(mm, null, Mm, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: mm => "useLogarithmicDepth" in mm,
            get: mm => mm.useLogarithmicDepth
          },
          metadata: am
        }, null, Lm), (0, hm.g)(mm, null, Bm, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "transparencyMode" in mm,
            get: mm => mm.transparencyMode
          },
          metadata: am
        }, null, Lm), (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: mm => "id" in mm,
            get: mm => mm.id,
            set: (mm, Tm) => {
              mm.id = Tm
            }
          },
          metadata: am
        }, tm, Um), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: mm => "uniqueId" in mm,
            get: mm => mm.uniqueId,
            set: (mm, Tm) => {
              mm.uniqueId = Tm
            }
          },
          metadata: am
        }, dm, gm), (0, hm.g)(null, null, jm, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: mm => "name" in mm,
            get: mm => mm.name,
            set: (mm, Tm) => {
              mm.name = Tm
            }
          },
          metadata: am
        }, Wm, Fm), (0, hm.g)(null, null, Vm, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: mm => "metadata" in mm,
            get: mm => mm.metadata,
            set: (mm, Tm) => {
              mm.metadata = Tm
            }
          },
          metadata: am
        }, mT, TT), (0, hm.g)(null, null, Im, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: mm => "checkReadyOnEveryCall" in mm,
            get: mm => mm.checkReadyOnEveryCall,
            set: (mm, Tm) => {
              mm.checkReadyOnEveryCall = Tm
            }
          },
          metadata: am
        }, fT, hT), (0, hm.g)(null, null, Km, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: mm => "checkReadyOnlyOnce" in mm,
            get: mm => mm.checkReadyOnlyOnce,
            set: (mm, Tm) => {
              mm.checkReadyOnlyOnce = Tm
            }
          },
          metadata: am
        }, AT, aT), (0, hm.g)(null, null, Qm, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: mm => "state" in mm,
            get: mm => mm.state,
            set: (mm, Tm) => {
              mm.state = Tm
            }
          },
          metadata: am
        }, xT, wT), (0, hm.g)(null, null, nm, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: mm => "_alpha" in mm,
            get: mm => mm._alpha,
            set: (mm, Tm) => {
              mm._alpha = Tm
            }
          },
          metadata: am
        }, DT, iT), (0, hm.g)(null, null, Jm, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: mm => "_backFaceCulling" in mm,
            get: mm => mm._backFaceCulling,
            set: (mm, Tm) => {
              mm._backFaceCulling = Tm
            }
          },
          metadata: am
        }, RT, pT), (0, hm.g)(null, null, cm, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "_textureRepetitionMode" in mm,
            get: mm => mm._textureRepetitionMode,
            set: (mm, Tm) => {
              mm._textureRepetitionMode = Tm
            }
          },
          metadata: am
        }, ET, oT), (0, hm.g)(null, null, zm, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: mm => "textureRepetitionHexTilingParams" in mm,
            get: mm => mm.textureRepetitionHexTilingParams,
            set: (mm, Tm) => {
              mm.textureRepetitionHexTilingParams = Tm
            }
          },
          metadata: am
        }, OT, YT), (0, hm.g)(null, null, Zm, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: mm => "_cullBackFaces" in mm,
            get: mm => mm._cullBackFaces,
            set: (mm, Tm) => {
              mm._cullBackFaces = Tm
            }
          },
          metadata: am
        }, qT, jT), (0, hm.g)(null, null, km, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: mm => "sideOrientation" in mm,
            get: mm => mm.sideOrientation,
            set: (mm, Tm) => {
              mm.sideOrientation = Tm
            }
          },
          metadata: am
        }, VT, IT), (0, hm.g)(null, null, bm, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "_alphaMode" in mm,
            get: mm => mm._alphaMode,
            set: (mm, Tm) => {
              mm._alphaMode = Tm
            }
          },
          metadata: am
        }, KT, QT), (0, hm.g)(null, null, Sm, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: mm => "_needDepthPrePass" in mm,
            get: mm => mm._needDepthPrePass,
            set: (mm, Tm) => {
              mm._needDepthPrePass = Tm
            }
          },
          metadata: am
        }, nT, JT), (0, hm.g)(null, null, em, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: mm => "disableDepthWrite" in mm,
            get: mm => mm.disableDepthWrite,
            set: (mm, Tm) => {
              mm.disableDepthWrite = Tm
            }
          },
          metadata: am
        }, cT, zT), (0, hm.g)(null, null, Nm, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: mm => "disableColorWrite" in mm,
            get: mm => mm.disableColorWrite,
            set: (mm, Tm) => {
              mm.disableColorWrite = Tm
            }
          },
          metadata: am
        }, ZT, kT), (0, hm.g)(null, null, Gm, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: mm => "forceDepthWrite" in mm,
            get: mm => mm.forceDepthWrite,
            set: (mm, Tm) => {
              mm.forceDepthWrite = Tm
            }
          },
          metadata: am
        }, bT, ST), (0, hm.g)(null, null, Xm, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: mm => "depthFunction" in mm,
            get: mm => mm.depthFunction,
            set: (mm, Tm) => {
              mm.depthFunction = Tm
            }
          },
          metadata: am
        }, eT, NT), (0, hm.g)(null, null, Pm, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: mm => "separateCullingPass" in mm,
            get: mm => mm.separateCullingPass,
            set: (mm, Tm) => {
              mm.separateCullingPass = Tm
            }
          },
          metadata: am
        }, GT, XT), (0, hm.g)(null, null, Hm, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "_fogEnabled" in mm,
            get: mm => mm._fogEnabled,
            set: (mm, Tm) => {
              mm._fogEnabled = Tm
            }
          },
          metadata: am
        }, PT, HT), (0, hm.g)(null, null, ym, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: mm => "pointSize" in mm,
            get: mm => mm.pointSize,
            set: (mm, Tm) => {
              mm.pointSize = Tm
            }
          },
          metadata: am
        }, yT, CT), (0, hm.g)(null, null, Cm, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: mm => "zOffset" in mm,
            get: mm => mm.zOffset,
            set: (mm, Tm) => {
              mm.zOffset = Tm
            }
          },
          metadata: am
        }, rT, sT), (0, hm.g)(null, null, rm, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: mm => "zOffsetUnits" in mm,
            get: mm => mm.zOffsetUnits,
            set: (mm, Tm) => {
              mm.zOffsetUnits = Tm
            }
          },
          metadata: am
        }, lT, MT), (0, hm.g)(null, null, um, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: mm => "_isVertexOutputInvariant" in mm,
            get: mm => mm._isVertexOutputInvariant,
            set: (mm, Tm) => {
              mm._isVertexOutputInvariant = Tm
            }
          },
          metadata: am
        }, uT, BT), am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: am
        })
      })(), mm.TriangleFillMode = 0, mm.WireFrameFillMode = 1, mm.PointFillMode = 2, mm.PointListDrawMode = 3, mm.LineListDrawMode = 4, mm.LineLoopDrawMode = 5, mm.LineStripDrawMode = 6, mm.TriangleStripDrawMode = 7, mm.TriangleFanDrawMode = 8, mm.ClockWiseSideOrientation = 0, mm.CounterClockWiseSideOrientation = 1, mm.ImageProcessingDirtyFlag = 64, mm.TextureDirtyFlag = 1, mm.LightDirtyFlag = 2, mm.FresnelDirtyFlag = 4, mm.AttributesDirtyFlag = 8, mm.MiscDirtyFlag = 16, mm.PrePassDirtyFlag = 32, mm.AllDirtyFlag = 127, mm.MATERIAL_OPAQUE = 0, mm.MATERIAL_ALPHATEST = 1, mm.MATERIAL_ALPHABLEND = 2, mm.MATERIAL_ALPHATESTANDBLEND = 3, mm.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, mm.MATERIAL_NORMALBLENDMETHOD_RNM = 1, mm.LIGHTFALLOFF_PHYSICAL = 0, mm.LIGHTFALLOFF_GLTF = 1, mm.LIGHTFALLOFF_STANDARD = 2, mm.OnEventObservable = new xm.c, mm.ForceVertexOutputInvariant = !1, mm._AllDirtyCallBack = mm => mm.markAllAsDirty(), mm._ImageProcessingDirtyCallBack = mm => mm.markAsImageProcessingDirty(), mm._TextureDirtyCallBack = mm => mm.markAsTexturesDirty(), mm._FresnelDirtyCallBack = mm => mm.markAsFresnelDirty(), mm._MiscDirtyCallBack = mm => mm.markAsMiscDirty(), mm._PrePassDirtyCallBack = mm => mm.markAsPrePassDirty(), mm._LightsDirtyCallBack = mm => mm.markAsLightDirty(), mm._AttributeDirtyCallBack = mm => mm.markAsAttributesDirty(), mm._FresnelAndMiscDirtyCallBack = Tm => {
        mm._FresnelDirtyCallBack(Tm), mm._MiscDirtyCallBack(Tm)
      }, mm._TextureAndMiscDirtyCallBack = Tm => {
        mm._TextureDirtyCallBack(Tm), mm._MiscDirtyCallBack(Tm)
      }, mm._DirtyCallbackArray = [], mm._RunDirtyCallBacks = Tm => {
        for (const fm of mm._DirtyCallbackArray) fm(Tm)
      }, mm
    })();
    Object.getOwnPropertyDescriptor(Vm.prototype, "pluginManager") || Object.defineProperty(Vm.prototype, "pluginManager", (0, jm.e)("Material", "pluginManager"))
  },
  40440: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    var hm = fm(40014);
    class Am {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(mm) {
        this._DiffuseTextureEnabled !== mm && (this._DiffuseTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(mm) {
        this._BaseWeightTextureEnabled !== mm && (this._BaseWeightTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(mm) {
        this._BaseDiffuseRoughnessTextureEnabled !== mm && (this._BaseDiffuseRoughnessTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(mm) {
        this._DetailTextureEnabled !== mm && (this._DetailTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(mm) {
        this._DecalMapEnabled !== mm && (this._DecalMapEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(mm) {
        this._AmbientTextureEnabled !== mm && (this._AmbientTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(mm) {
        this._OpacityTextureEnabled !== mm && (this._OpacityTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(mm) {
        this._ReflectionTextureEnabled !== mm && (this._ReflectionTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(mm) {
        this._EmissiveTextureEnabled !== mm && (this._EmissiveTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(mm) {
        this._SpecularTextureEnabled !== mm && (this._SpecularTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(mm) {
        this._BumpTextureEnabled !== mm && (this._BumpTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(mm) {
        this._LightmapTextureEnabled !== mm && (this._LightmapTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(mm) {
        this._RefractionTextureEnabled !== mm && (this._RefractionTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(mm) {
        this._ColorGradingTextureEnabled !== mm && (this._ColorGradingTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(mm) {
        this._FresnelEnabled !== mm && (this._FresnelEnabled = mm, hm.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(mm) {
        this._ClearCoatTextureEnabled !== mm && (this._ClearCoatTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(mm) {
        this._ClearCoatBumpTextureEnabled !== mm && (this._ClearCoatBumpTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(mm) {
        this._ClearCoatTintTextureEnabled !== mm && (this._ClearCoatTintTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(mm) {
        this._SheenTextureEnabled !== mm && (this._SheenTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(mm) {
        this._AnisotropicTextureEnabled !== mm && (this._AnisotropicTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(mm) {
        this._ThicknessTextureEnabled !== mm && (this._ThicknessTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(mm) {
        this._RefractionIntensityTextureEnabled !== mm && (this._RefractionIntensityTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(mm) {
        this._TranslucencyIntensityTextureEnabled !== mm && (this._TranslucencyIntensityTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(mm) {
        this._TranslucencyColorTextureEnabled !== mm && (this._TranslucencyColorTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(mm) {
        this._IridescenceTextureEnabled !== mm && (this._IridescenceTextureEnabled = mm, hm.b.MarkAllMaterialsAsDirty(1))
      }
    }
    Am._DiffuseTextureEnabled = !0, Am._BaseWeightTextureEnabled = !0, Am._BaseDiffuseRoughnessTextureEnabled = !0, Am._DetailTextureEnabled = !0, Am._DecalMapEnabled = !0, Am._AmbientTextureEnabled = !0, Am._OpacityTextureEnabled = !0, Am._ReflectionTextureEnabled = !0, Am._EmissiveTextureEnabled = !0, Am._SpecularTextureEnabled = !0, Am._BumpTextureEnabled = !0, Am._LightmapTextureEnabled = !0, Am._RefractionTextureEnabled = !0, Am._ColorGradingTextureEnabled = !0, Am._FresnelEnabled = !0, Am._ClearCoatTextureEnabled = !0, Am._ClearCoatBumpTextureEnabled = !0, Am._ClearCoatTintTextureEnabled = !0, Am._SheenTextureEnabled = !0, Am._AnisotropicTextureEnabled = !0, Am._ThicknessTextureEnabled = !0, Am._RefractionIntensityTextureEnabled = !0, Am._TranslucencyIntensityTextureEnabled = !0, Am._TranslucencyColorTextureEnabled = !0, Am._IridescenceTextureEnabled = !0
  },
  40428: (mm, Tm, fm) => {
    fm.d(Tm, {
      $: () => Im,
      A: () => Sm,
      E: () => Qm,
      F: () => km,
      J: () => bm,
      L: () => om,
      P: () => Em,
      Q: () => lm,
      U: () => Hm,
      V: () => Xm,
      Z: () => Gm,
      db: () => em,
      e: () => Nm,
      f: () => nm,
      fb: () => Mm,
      gb: () => um,
      ib: () => Bm,
      j: () => pm,
      k: () => jm,
      lb: () => dm,
      mb: () => tm,
      o: () => Vm,
      p: () => Zm,
      qb: () => Um,
      r: () => Dm,
      s: () => Ym,
      ub: () => Om,
      v: () => qm,
      x: () => Km
    });
    var hm = fm(38766),
      Am = fm(37201),
      am = fm(40303),
      xm = fm(40432),
      wm = fm(40440);

    function Dm(mm, Tm, fm) {
      if (!mm || mm.LOGARITHMICDEPTH || mm.indexOf && mm.indexOf("LOGARITHMICDEPTH") >= 0) {
        const mm = fm.activeCamera;
        1 === mm.mode && hm.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Tm.setFloat("logarithmicDepthConstant", 2 / (Math.log(mm.maxZ + 1) / Math.LN2))
      }
    }
    const im = {
        r: 0,
        g: 0,
        b: 0
      },
      Rm = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function pm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      fm && mm.fogEnabled && (!Tm || Tm.applyFog) && 0 !== mm.fogMode && (fm.setFloat4("vFogInfos", mm.fogMode, mm.fogStart, mm.fogEnd, mm.fogDensity), hm ? (mm.fogColor.toLinearSpaceToRef(im, mm.dO().useExactSrgbConversions), fm.setColor3("vFogColor", im)) : fm.setColor3("vFogColor", mm.fogColor))
    }

    function Em(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
      const pm = mm.numMaxInfluencers || mm.numInfluencers;
      return pm <= 0 ? 0 : (Tm.push("#define MORPHTARGETS"), mm.hasPositions && Tm.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), mm.hasNormals && Tm.push("#define MORPHTARGETTEXTURE_HASNORMALS"), mm.hasTangents && Tm.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), mm.hasUVs && Tm.push("#define MORPHTARGETTEXTURE_HASUVS"), mm.hasUV2s && Tm.push("#define MORPHTARGETTEXTURE_HASUV2S"), mm.hasColors && Tm.push("#define MORPHTARGETTEXTURE_HASCOLORS"), mm.supportsPositions && Am && Tm.push("#define MORPHTARGETS_POSITION"), mm.supportsNormals && am && Tm.push("#define MORPHTARGETS_NORMAL"), mm.supportsTangents && xm && Tm.push("#define MORPHTARGETS_TANGENT"), mm.supportsUVs && wm && Tm.push("#define MORPHTARGETS_UV"), mm.supportsUV2s && Dm && Tm.push("#define MORPHTARGETS_UV2"), mm.supportsColors && im && Tm.push("#define MORPHTARGETS_COLOR"), Tm.push("#define NUM_MORPH_INFLUENCERS " + pm), mm.isUsingTextureForTargets && Tm.push("#define MORPHTARGETS_TEXTURE"), Rm.NUM_MORPH_INFLUENCERS = pm, Rm.NORMAL = am, Rm.TANGENT = xm, Rm.UV = wm, Rm.UV2 = Dm, Rm.COLOR = im, om(fm, hm, Rm, Am), pm)
    }

    function om(mm, Tm, fm) {
      let am = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const xm = fm.NUM_MORPH_INFLUENCERS;
      if (xm > 0 && Am.c.LastCreatedEngine) {
        const wm = Am.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          Dm = Tm.morphTargetManager;
        if (Dm?.isUsingTextureForTargets) return;
        const im = Dm && Dm.supportsPositions && am,
          Rm = Dm && Dm.supportsNormals && fm.NORMAL,
          pm = Dm && Dm.supportsTangents && fm.TANGENT,
          Em = Dm && Dm.supportsUVs && fm.UV1,
          om = Dm && Dm.supportsUV2s && fm.UV2,
          Om = Dm && Dm.supportsColors && fm.VERTEXCOLOR;
        for (let fm = 0; fm < xm; fm++) im && mm.push("position" + fm), Rm && mm.push("normal" + fm), pm && mm.push("tangent" + fm), Em && mm.push("uv_" + fm), om && mm.push("uv2_" + fm), Om && mm.push("color" + fm), mm.length > wm && hm.b.Error("Cannot add more vertex attributes for mesh " + Tm.name)
      }
    }

    function Om(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      mm.push("world0"), mm.push("world1"), mm.push("world2"), mm.push("world3"), Tm && (mm.push("previousWorld0"), mm.push("previousWorld1"), mm.push("previousWorld2"), mm.push("previousWorld3"))
    }

    function Ym(mm, Tm) {
      const fm = mm.morphTargetManager;
      mm && fm && Tm.setFloatArray("morphTargetInfluences", fm.influences)
    }

    function qm(mm, Tm) {
      Tm.bindToEffect(mm, "Scene")
    }

    function jm(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Dm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        im = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Rm = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        pm = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Em = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (mm.texturesEnabled && Am && wm.d.ReflectionTextureEnabled) {
        if (fm.K9("reflectionMatrix", Am.getReflectionTextureMatrix()), fm.updateFloat2("vReflectionInfos", Am.level * mm.iblIntensity, Em), Dm && Am.boundingBoxSize) {
          const mm = Am;
          fm.updateVector3("vReflectionPosition", mm.boundingBoxPosition), fm.updateVector3("vReflectionSize", mm.boundingBoxSize)
        }
        if (am) {
          const mm = Am.getSize().width;
          fm.updateFloat2("vReflectionFilteringInfo", mm, Math.log2(mm))
        }
        if (Rm && !Tm.USEIRRADIANCEMAP) {
          const mm = Am.sphericalPolynomial;
          if (Tm.USESPHERICALFROMREFLECTIONMAP && mm)
            if (Tm.SPHERICAL_HARMONICS) {
              const Tm = mm.preScaledHarmonics;
              fm.updateVector3("vSphericalL00", Tm.l00), fm.updateVector3("vSphericalL1_1", Tm.l1_1), fm.updateVector3("vSphericalL10", Tm.l10), fm.updateVector3("vSphericalL11", Tm.l11), fm.updateVector3("vSphericalL2_2", Tm.l2_2), fm.updateVector3("vSphericalL2_1", Tm.l2_1), fm.updateVector3("vSphericalL20", Tm.l20), fm.updateVector3("vSphericalL21", Tm.l21), fm.updateVector3("vSphericalL22", Tm.l22)
            } else fm.updateFloat3("vSphericalX", mm.x.x, mm.x.y, mm.x.z), fm.updateFloat3("vSphericalY", mm.y.x, mm.y.y, mm.y.z), fm.updateFloat3("vSphericalZ", mm.z.x, mm.z.y, mm.z.z), fm.updateFloat3("vSphericalXX_ZZ", mm.xx.x - mm.zz.x, mm.xx.y - mm.zz.y, mm.xx.z - mm.zz.z), fm.updateFloat3("vSphericalYY_ZZ", mm.yy.x - mm.zz.x, mm.yy.y - mm.zz.y, mm.yy.z - mm.zz.z), fm.updateFloat3("vSphericalZZ", mm.zz.x, mm.zz.y, mm.zz.z), fm.updateFloat3("vSphericalXY", mm.xy.x, mm.xy.y, mm.xy.z), fm.updateFloat3("vSphericalYZ", mm.yz.x, mm.yz.y, mm.yz.z), fm.updateFloat3("vSphericalZX", mm.zx.x, mm.zx.y, mm.zx.z)
        } else im && Tm.USEIRRADIANCEMAP && Tm.USE_IRRADIANCE_DOMINANT_DIRECTION && Am.irradianceTexture && fm.updateVector3("vReflectionDominantDirection", Am.irradianceTexture._dominantDirection);
        xm && fm.updateFloat3("vReflectionMicrosurfaceInfos", Am.getSize().width, Am.lodGenerationScale, Am.lodGenerationOffset)
      }
      pm && fm.updateColor3("vReflectionColor", hm)
    }

    function Vm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (hm && wm.d.ReflectionTextureEnabled) {
        Tm.LODBASEDMICROSFURACE ? fm.setTexture("reflectionSampler", hm) : (fm.setTexture("reflectionSampler", hm._lodTextureMid || hm), fm.setTexture("reflectionSamplerLow", hm._lodTextureLow || hm), fm.setTexture("reflectionSamplerHigh", hm._lodTextureHigh || hm)), Tm.USEIRRADIANCEMAP && fm.setTexture("irradianceSampler", hm.irradianceTexture);
        const am = mm.iblCdfGenerator;
        Am && am && fm.setTexture("icdfSampler", am.getIcdfTexture())
      }
    }

    function Im(mm, Tm, fm) {
      Tm._needUVs = !0, Tm[fm] = !0, mm.optimizeUVAllocation && mm.getTextureMatrix().isIdentityAs3x2() ? (Tm[fm + "DIRECTUV"] = mm.coordinatesIndex + 1, Tm["MAINUV" + (mm.coordinatesIndex + 1)] = !0) : Tm[fm + "DIRECTUV"] = 0
    }

    function Km(mm, Tm, fm) {
      const hm = mm.getTextureMatrix();
      Tm.K9(fm + "Matrix", hm)
    }

    function Qm(mm, Tm, fm) {
      fm.BAKED_VERTEX_ANIMATION_TEXTURE && fm.INSTANCES && mm.push("bakedVertexAnimationSettingsInstanced")
    }

    function nm(mm, Tm, fm) {
      var hm;
      if (Tm && mm && (mm.computeBonesUsingShaders && Tm._bonesComputationForcedToCPU && (mm.computeBonesUsingShaders = !1), mm.useBones && mm.computeBonesUsingShaders && mm.skeleton)) {
        const Am = mm.skeleton;
        if (Am.isUsingTextureForMatrices && Tm.getUniformIndex("boneTextureInfo") > -1) {
          const fm = Am.getTransformMatrixTexture(mm);
          Tm.setTexture("boneSampler", fm), Tm.setFloat2("boneTextureInfo", Am._textureWidth, Am._textureHeight)
        } else {
          const am = Am.getTransformMatrices(mm);
          am && (Tm.setMatrices("mBones", am), fm && mm.wG().prePassRenderer && mm.wG().prePassRenderer.getIndex(2) && (fm.previousBones[mm.uniqueId] || (fm.previousBones[mm.uniqueId] = am.slice()), Tm.setMatrices("mPreviousBones", fm.previousBones[mm.uniqueId]), hm = am, fm.previousBones[mm.uniqueId].set(hm)))
        }
      }
    }

    function Jm(mm, Tm, fm, hm, Am) {
      let am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      mm._bindLight(Tm, fm, hm, Am, am)
    }
    const cm = 4,
      zm = new WeakMap;

    function Zm(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const am = Math.min(Tm.lightSources.length, Am);
      for (let xm = 0; xm < am; xm++) {
        Jm(Tm.lightSources[xm], xm, mm, fm, "boolean" === typeof hm ? hm : hm.SPECULARTERM, Tm.receiveShadows)
      }
    }

    function km(mm, Tm, fm, hm) {
      fm.NUM_BONE_INFLUENCERS > 0 && (hm.addCPUSkinningFallback(0, Tm), mm.push("matricesIndices"), mm.push("matricesWeights"), fm.NUM_BONE_INFLUENCERS > 4 && (mm.push("matricesIndicesExtra"), mm.push("matricesWeightsExtra")))
    }

    function bm(mm, Tm) {
      (Tm.INSTANCES || Tm.THIN_INSTANCES) && Om(mm, !!Tm.PREPASS_VELOCITY), Tm.INSTANCESCOLOR && mm.push("instanceColor")
    }

    function Sm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Am = 0;
      for (let am = 0; am < fm && mm["LIGHT" + am]; am++) am > 0 && (Am = hm + am, Tm.addFallback(Am, "LIGHT" + am)), mm.SHADOWS || (mm["SHADOW" + am] && Tm.addFallback(hm, "SHADOW" + am), mm["SHADOWPCF" + am] && Tm.addFallback(hm, "SHADOWPCF" + am), mm["SHADOWPCSS" + am] && Tm.addFallback(hm, "SHADOWPCSS" + am), mm["SHADOWPOISSON" + am] && Tm.addFallback(hm, "SHADOWPOISSON" + am), mm["SHADOWESM" + am] && Tm.addFallback(hm, "SHADOWESM" + am), mm["SHADOWCLOSEESM" + am] && Tm.addFallback(hm, "SHADOWCLOSEESM" + am));
      return Am
    }

    function em(mm, Tm, fm, hm, Am, am, xm) {
      let wm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Dm = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        im = arguments.length > 9 ? arguments[9] : void 0,
        Rm = arguments.length > 10 ? arguments[10] : void 0;
      if (xm._areMiscDirty) {
        xm.LOGARITHMICDEPTH = fm, xm.POINTSIZE = hm, xm.FOG = Am && function(mm, Tm) {
          return Tm.fogEnabled && mm.applyFog && 0 !== Tm.fogMode
        }(mm, Tm), xm.NONUNIFORMSCALING = mm.nonUniformScaling, xm.ALPHATEST = am, xm.DECAL_AFTER_DETAIL = wm, xm.USE_VERTEX_PULLING = Dm, xm.RIGHT_HANDED = Tm.useRightHandedSystem;
        const pm = Dm ? im?.geometry?.getIndexBuffer() : null,
          Em = !!im && im.isUnIndexed;
        xm.VERTEX_PULLING_USE_INDEX_BUFFER = !!pm && !Em, xm.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!pm || Em) && pm.is32Bits, xm.VERTEXOUTPUT_INVARIANT = !!Rm
      }
    }

    function Nm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!mm.lightsEnabled || hm) return !0;
      const Am = Tm.lightSources,
        am = Math.min(Am.length, fm);
      for (let xm = 0; xm < am; xm++)
        if (!Am[xm].areLightTexturesReady()) return !1;
      return !0
    }

    function Gm(mm, Tm, fm, Am) {
      let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        xm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!fm._areLightsDirty) return fm._needNormals;
      const wm = am;
      am = function(mm, Tm) {
        const fm = mm.dO().getCaps().maxUniformBuffersPerShaderStage;
        if (null == fm) return Tm;
        const hm = Math.max(fm - cm, 1);
        return Math.min(Tm, hm)
      }(mm, am);
      let Dm = 0;
      const im = {
        needNormals: fm._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (mm.lightsEnabled && !xm) {
        Tm.lightSources.length > am && am < wm && function(mm, Tm, fm, Am) {
          let am = zm.get(mm);
          am || (am = new Set, zm.set(mm, am)), am.has(Am) || (am.add(Am), hm.b.Warn(`maxSimultaneousLights is ${Tm} but this engine supports at most ${fm} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Am} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Am+cm} uniform buffers, over the device limit of ${mm.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${fm}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${fm} or less to silence this warning.`))
        }(mm.dO(), wm, am, Math.min(Tm.lightSources.length, wm));
        for (const hm of Tm.lightSources)
          if (Pm(mm, Tm, hm, Dm, fm, Am, im), Dm++, Dm === am) break
      }
      fm.SPECULARTERM = im.specularEnabled, fm.SHADOWS = im.shadowEnabled;
      const Rm = Math.max(am, fm.MAXLIGHTCOUNT || 0);
      for (let hm = Dm; hm < Rm; hm++) void 0 !== fm["LIGHT" + hm] && (fm["LIGHT" + hm] = !1, fm["HEMILIGHT" + hm] = !1, fm["POINTLIGHT" + hm] = !1, fm["DIRLIGHT" + hm] = !1, fm["SPOTLIGHT" + hm] = !1, fm["AREALIGHT" + hm] = !1, fm["CLUSTLIGHT" + hm] = !1, fm["SHADOW" + hm] = !1, fm["SHADOWCSM" + hm] = !1, fm["SHADOWCSMDEBUG" + hm] = !1, fm["SHADOWCSMNUM_CASCADES" + hm] = !1, fm["SHADOWCSMUSESHADOWMAXZ" + hm] = !1, fm["SHADOWCSMNOBLEND" + hm] = !1, fm["SHADOWCSM_RIGHTHANDED" + hm] = !1, fm["SHADOWPCF" + hm] = !1, fm["SHADOWPCSS" + hm] = !1, fm["SHADOWPOISSON" + hm] = !1, fm["SHADOWESM" + hm] = !1, fm["SHADOWCLOSEESM" + hm] = !1, fm["SHADOWCUBE" + hm] = !1, fm["SHADOWLOWQUALITY" + hm] = !1, fm["SHADOWMEDIUMQUALITY" + hm] = !1);
      fm.LIGHTCOUNT = Dm, fm.MAXLIGHTCOUNT = am;
      const pm = mm.dO().getCaps();
      return void 0 === fm.SHADOWFLOAT && (im.needRebuild = !0), fm.SHADOWFLOAT = im.shadowEnabled && (pm.textureFloatRender && pm.textureFloatLinearFiltering || pm.textureHalfFloatRender && pm.textureHalfFloatLinearFiltering), fm.LIGHTMAPEXCLUDED = im.lightmapMode, im.needRebuild && fm.rebuild(), im.needNormals
    }

    function Xm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Tm && wm.d.ReflectionTextureEnabled) {
        if (!Tm.isReadyOrNotBlocking()) return !1;
        fm._needNormals = !0, fm.REFLECTION = !0, fm.GAMMAREFLECTION = Tm.gammaSpace, fm.RGBDREFLECTION = Tm.isRGBD, fm.LODINREFLECTIONALPHA = Tm.lodLevelInAlpha, fm.LINEARSPECULARREFLECTION = Tm.linearSpecularLOD, fm.USEIRRADIANCEMAP = !1, fm.LODBASEDMICROSFURACE = mm.dO().getCaps().textureLOD;
        const xm = mm.dO();
        switch (hm && Am > 0 ? (fm.NUM_SAMPLES = "" + Am, xm._features.needTypeSuffixInShaderConstants && (fm.NUM_SAMPLES = fm.NUM_SAMPLES + "u"), fm.REALTIME_FILTERING = !0, mm.iblCdfGenerator && (fm.IBL_CDF_FILTERING = !0)) : fm.REALTIME_FILTERING = !1, fm.INVERTCUBICMAP = 6 === Tm.coordinatesMode, fm.REFLECTIONMAP_3D = Tm.isCube, fm.REFLECTIONMAP_OPPOSITEZ = fm.REFLECTIONMAP_3D && mm.useRightHandedSystem ? !Tm.invertZ : Tm.invertZ, fm.REFLECTIONMAP_CUBIC = !1, fm.REFLECTIONMAP_EXPLICIT = !1, fm.REFLECTIONMAP_PLANAR = !1, fm.REFLECTIONMAP_PROJECTION = !1, fm.REFLECTIONMAP_SKYBOX = !1, fm.REFLECTIONMAP_SPHERICAL = !1, fm.REFLECTIONMAP_EQUIRECTANGULAR = !1, fm.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, fm.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Tm.coordinatesMode) {
          case 0:
            fm.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            fm.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            fm.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            fm.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            fm.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            fm.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            fm.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            fm.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            fm.REFLECTIONMAP_CUBIC = !0, fm.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Tm.boundingBoxSize
        }
        5 !== Tm.coordinatesMode && (Tm.irradianceTexture ? (fm.USEIRRADIANCEMAP = !0, fm.USESPHERICALFROMREFLECTIONMAP = !1, fm.USESPHERICALINVERTEX = !1, Tm.irradianceTexture._dominantDirection ? fm.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : fm.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Tm.isCube && (fm.USESPHERICALFROMREFLECTIONMAP = !0, fm.USEIRRADIANCEMAP = !1, fm.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, fm.USESPHERICALINVERTEX = am))
      } else fm.REFLECTION = !1, fm.REFLECTIONMAP_3D = !1, fm.REFLECTIONMAP_SPHERICAL = !1, fm.REFLECTIONMAP_PLANAR = !1, fm.REFLECTIONMAP_CUBIC = !1, fm.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, fm.REFLECTIONMAP_PROJECTION = !1, fm.REFLECTIONMAP_SKYBOX = !1, fm.REFLECTIONMAP_EXPLICIT = !1, fm.REFLECTIONMAP_EQUIRECTANGULAR = !1, fm.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, fm.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, fm.INVERTCUBICMAP = !1, fm.USESPHERICALFROMREFLECTIONMAP = !1, fm.USEIRRADIANCEMAP = !1, fm.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, fm.USESPHERICALINVERTEX = !1, fm.REFLECTIONMAP_OPPOSITEZ = !1, fm.LODINREFLECTIONALPHA = !1, fm.GAMMAREFLECTION = !1, fm.RGBDREFLECTION = !1, fm.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Pm(mm, Tm, fm, hm, Am, xm, wm) {
      switch (wm.needNormals = !0, void 0 === Am["LIGHT" + hm] && (wm.needRebuild = !0), Am["LIGHT" + hm] = !0, Am["SPOTLIGHT" + hm] = !1, Am["HEMILIGHT" + hm] = !1, Am["POINTLIGHT" + hm] = !1, Am["DIRLIGHT" + hm] = !1, Am["AREALIGHT" + hm] = !1, Am["CLUSTLIGHT" + hm] = !1, fm.prepareLightSpecificDefines(Am, hm), Am["LIGHT_FALLOFF_PHYSICAL" + hm] = !1, Am["LIGHT_FALLOFF_GLTF" + hm] = !1, Am["LIGHT_FALLOFF_STANDARD" + hm] = !1, fm.falloffType) {
        case am.e.FALLOFF_GLTF:
          Am["LIGHT_FALLOFF_GLTF" + hm] = !0;
          break;
        case am.e.FALLOFF_PHYSICAL:
          Am["LIGHT_FALLOFF_PHYSICAL" + hm] = !0;
          break;
        case am.e.FALLOFF_STANDARD:
          Am["LIGHT_FALLOFF_STANDARD" + hm] = !0
      }
      if (xm && !fm.specular.equalsFloats(0, 0, 0) && (wm.specularEnabled = !0), Am["SHADOW" + hm] = !1, Am["SHADOWCSM" + hm] = !1, Am["SHADOWCSMDEBUG" + hm] = !1, Am["SHADOWCSMNUM_CASCADES" + hm] = !1, Am["SHADOWCSMUSESHADOWMAXZ" + hm] = !1, Am["SHADOWCSMNOBLEND" + hm] = !1, Am["SHADOWCSM_RIGHTHANDED" + hm] = !1, Am["SHADOWPCF" + hm] = !1, Am["SHADOWPCSS" + hm] = !1, Am["SHADOWPOISSON" + hm] = !1, Am["SHADOWESM" + hm] = !1, Am["SHADOWCLOSEESM" + hm] = !1, Am["SHADOWCUBE" + hm] = !1, Am["SHADOWLOWQUALITY" + hm] = !1, Am["SHADOWMEDIUMQUALITY" + hm] = !1, Tm && Tm.receiveShadows && mm.shadowsEnabled && fm.shadowEnabled) {
        const Tm = fm.getShadowGenerator(mm.activeCamera) ?? fm.getShadowGenerator();
        if (Tm) {
          const mm = Tm.getShadowMap();
          mm && mm.renderList && mm.renderList.length > 0 && (wm.shadowEnabled = !0, Tm.prepareDefines(Am, hm))
        }
      }
      fm.lightmapMode != am.e.LIGHTMAP_DEFAULT ? (wm.lightmapMode = !0, Am["LIGHTMAPEXCLUDED" + hm] = !0, Am["LIGHTMAPNOSPECULAR" + hm] = fm.lightmapMode == am.e.LIGHTMAP_SHADOWSONLY) : (Am["LIGHTMAPEXCLUDED" + hm] = !1, Am["LIGHTMAPNOSPECULAR" + hm] = !1)
    }

    function Hm(mm, Tm, fm, hm, Am) {
      let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        wm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Dm = function(mm, Tm) {
          let fm = !1;
          if (mm.activeCamera) {
            const hm = Tm.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Am = Tm.CAMERA_PERSPECTIVE ? 1 : 0,
              am = 1 === mm.activeCamera.mode ? 1 : 0,
              xm = 0 === mm.activeCamera.mode ? 1 : 0;
            (hm ^ am || Am ^ xm) && (Tm.CAMERA_ORTHOGRAPHIC = 1 === am, Tm.CAMERA_PERSPECTIVE = 1 === xm, fm = !0)
          }
          return fm
        }(mm, hm);
      !1 !== am && (Dm = (0, xm.g)(fm, mm, hm)), hm.DEPTHPREPASS !== !Tm.getColorWrite() && (hm.DEPTHPREPASS = !hm.DEPTHPREPASS, Dm = !0), hm.INSTANCES !== Am && (hm.INSTANCES = Am, Dm = !0), hm.THIN_INSTANCES !== wm && (hm.THIN_INSTANCES = wm, Dm = !0), Dm && hm.markAsUnprocessed()
    }
    const ym = 40,
      Cm = 64,
      rm = new WeakMap,
      sm = new WeakSet;

    function lm(mm, Tm, fm, Am) {
      let am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        xm = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        wm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Tm._areAttributesDirty && Tm._needNormals === Tm._normals && Tm._needUVs === Tm._uvs) return !1;
      Tm._normals = Tm._needNormals, Tm._uvs = Tm._needUVs, Tm.NORMAL = Tm._needNormals && mm.isVerticesDataPresent("normal"), Tm._needNormals && mm.isVerticesDataPresent("tangent") && (Tm.TANGENT = !0);
      for (let hm = 1; hm <= 6; ++hm) Tm["UV" + hm] = !!Tm._needUVs && mm.isVerticesDataPresent(`uv${1===hm?"":hm}`);
      if (fm) {
        const fm = mm.useVertexColors && mm.isVerticesDataPresent("color");
        Tm.VERTEXCOLOR = fm, Tm.VERTEXALPHA = mm.hasVertexAlpha && fm && xm
      }
      return mm.isVerticesDataPresent("instanceColor") && (mm.Fhm || mm.hasThinInstances) && (Tm.INSTANCESCOLOR = !0), Am && function(mm, Tm) {
        if (mm.useBones && mm.computeBonesUsingShaders && mm.skeleton) {
          Tm.NUM_BONE_INFLUENCERS = mm.numBoneInfluencers;
          const fm = void 0 !== Tm.BONETEXTURE;
          if (mm.skeleton.isUsingTextureForMatrices && fm) Tm.BONETEXTURE = !0;
          else {
            Tm.BonesPerMesh = mm.skeleton.bones.length + 1, Tm.BONETEXTURE = !fm && void 0;
            const Am = mm.wG(),
              am = Am.prePassRenderer;
            if (am && am.enabled) {
              const fm = -1 === am.excludedSkinnedMesh.indexOf(mm);
              Tm.BONES_VELOCITY_ENABLED = fm
            }
            const xm = !0 === Tm.MULTIVIEW,
              wm = 2 * Tm.BonesPerMesh + (xm ? 1 : 0);
            if (rm.get(mm.skeleton) !== wm) {
              rm.set(mm.skeleton, wm);
              const fm = Am.dO().getCaps().maxVertexUniformVectors;
              if (fm && !sm.has(mm.skeleton)) {
                const Am = 4 * Tm.BonesPerMesh,
                  am = xm ? Cm : ym,
                  wm = Math.max(fm - am, 0);
                (Am > wm || xm && 3 * Am > fm) && (sm.add(mm.skeleton), hm.b.Warn(`Skeleton "${mm.skeleton.name}": ${mm.skeleton.bones.length} bones stored as vertex uniforms use ${Am} of ~${wm} usable uniform vectors${xm?" (multiview)":""} on a device reporting ${fm}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Tm.NUM_BONE_INFLUENCERS = 0, Tm.BonesPerMesh = 0, void 0 !== Tm.BONETEXTURE && (Tm.BONETEXTURE = !1)
      }(mm, Tm), am && function(mm, Tm) {
        const fm = mm.morphTargetManager;
        fm ? (Tm.MORPHTARGETS_UV = fm.supportsUVs && Tm.UV1, Tm.MORPHTARGETS_UV2 = fm.supportsUV2s && Tm.UV2, Tm.MORPHTARGETS_TANGENT = fm.supportsTangents && Tm.TANGENT, Tm.MORPHTARGETS_NORMAL = fm.supportsNormals && Tm.NORMAL, Tm.MORPHTARGETS_POSITION = fm.supportsPositions, Tm.MORPHTARGETS_COLOR = fm.supportsColors, Tm.MORPHTARGETTEXTURE_HASUVS = fm.hasUVs, Tm.MORPHTARGETTEXTURE_HASUV2S = fm.hasUV2s, Tm.MORPHTARGETTEXTURE_HASTANGENTS = fm.hasTangents, Tm.MORPHTARGETTEXTURE_HASNORMALS = fm.hasNormals, Tm.MORPHTARGETTEXTURE_HASPOSITIONS = fm.hasPositions, Tm.MORPHTARGETTEXTURE_HASCOLORS = fm.hasColors, Tm.NUM_MORPH_INFLUENCERS = fm.numMaxInfluencers || fm.numInfluencers, Tm.MORPHTARGETS = Tm.NUM_MORPH_INFLUENCERS > 0, Tm.MORPHTARGETS_TEXTURE = fm.isUsingTextureForTargets) : (Tm.MORPHTARGETS_UV = !1, Tm.MORPHTARGETS_UV2 = !1, Tm.MORPHTARGETS_TANGENT = !1, Tm.MORPHTARGETS_NORMAL = !1, Tm.MORPHTARGETS_POSITION = !1, Tm.MORPHTARGETS_COLOR = !1, Tm.MORPHTARGETTEXTURE_HASUVS = !1, Tm.MORPHTARGETTEXTURE_HASUV2S = !1, Tm.MORPHTARGETTEXTURE_HASTANGENTS = !1, Tm.MORPHTARGETTEXTURE_HASNORMALS = !1, Tm.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Tm.MORPHTARGETTEXTURE_HAS_COLORS = !1, Tm.MORPHTARGETS = !1, Tm.NUM_MORPH_INFLUENCERS = 0)
      }(mm, Tm), wm && function(mm, Tm) {
        const fm = mm.bakedVertexAnimationManager;
        Tm.BAKED_VERTEX_ANIMATION_TEXTURE = !(!fm || !fm.isEnabled)
      }(mm, Tm), !0
    }

    function Mm(mm, Tm) {
      if (mm.activeCamera) {
        const fm = Tm.MULTIVIEW;
        Tm.MULTIVIEW = null !== mm.activeCamera.outputRenderTarget && mm.activeCamera.outputRenderTarget.getViewCount() > 1, Tm.MULTIVIEW != fm && Tm.markAsUnprocessed()
      }
    }

    function um(mm, Tm, fm) {
      const hm = Tm.ORDER_INDEPENDENT_TRANSPARENCY,
        Am = Tm.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Tm.ORDER_INDEPENDENT_TRANSPARENCY = mm.useOrderIndependentTransparency && fm, Tm.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !mm.dO().getCaps().textureFloatLinearFiltering, hm === Tm.ORDER_INDEPENDENT_TRANSPARENCY && Am === Tm.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Tm.markAsUnprocessed()
    }

    function Bm(mm, Tm, fm) {
      const hm = Tm.PREPASS;
      if (!Tm._arePrePassDirty) return;
      const Am = [{
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
      if (mm.prePassRenderer && mm.prePassRenderer.enabled && fm) {
        Tm.PREPASS = !0, Tm.SCENE_MRT_COUNT = mm.prePassRenderer.mrtCount, Tm.PREPASS_NORMAL_WORLDSPACE = mm.prePassRenderer.generateNormalsInWorldSpace, Tm.PREPASS_COLOR = !0, Tm.PREPASS_COLOR_INDEX = 0;
        for (let fm = 0; fm < Am.length; fm++) {
          const hm = mm.prePassRenderer.getIndex(Am[fm].type); - 1 !== hm ? (Tm[Am[fm].define] = !0, Tm[Am[fm].index] = hm) : Tm[Am[fm].define] = !1
        }
      } else {
        Tm.PREPASS = !1;
        for (let mm = 0; mm < Am.length; mm++) Tm[Am[mm].define] = !1
      }
      Tm.PREPASS != hm && (Tm.markAsUnprocessed(), Tm.markAsImageProcessingDirty())
    }

    function Lm(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        wm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Dm = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        im = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Am && Am.push("Light" + mm), am || (Tm.push("vLightData" + mm, "vLightDiffuse" + mm, "vLightSpecular" + mm, "vLightDirection" + mm, "vLightWidth" + mm, "vLightHeight" + mm, "vLightFalloff" + mm, "vLightGround" + mm, "vSliceData" + mm, "vSliceRanges" + mm, "lightMatrix" + mm, "shadowsInfo" + mm, "depthValues" + mm), fm.push("shadowTexture" + mm), fm.push("depthTexture" + mm), Tm.push("viewFrustumZ" + mm, "cascadeBlendFactor" + mm, "lightSizeUVCorrection" + mm, "depthCorrection" + mm, "penumbraDarkness" + mm, "frustumLengths" + mm), hm && (fm.push("projectionLightTexture" + mm), Tm.push("textureProjectionMatrix" + mm)), xm && fm.push("iesLightTexture" + mm), Dm && fm.push("rectAreaLightEmissionTexture" + mm), wm && (fm.push("lightDataTexture" + mm), im || fm.push("tileMaskTexture" + mm)))
    }

    function tm(mm, Tm, fm) {
      const hm = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      fm && hm.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), mm.push(...hm);
      Tm.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Um(mm, Tm, fm) {
      let hm, Am, am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        xm = null;
      if (mm.uniformsNames) {
        const wm = mm;
        hm = wm.uniformsNames, Am = wm.uniformBuffersNames, Tm = wm.samplers, fm = wm.defines, am = wm.maxSimultaneousLights || 0, xm = wm.shaderLanguage ?? null
      } else hm = mm, Tm || (Tm = []);
      for (let wm = 0; wm < am && fm["LIGHT" + wm]; wm++) Lm(wm, hm, Tm, fm["PROJECTEDLIGHTTEXTURE" + wm], Am, !1, fm["IESLIGHTTEXTURE" + wm], fm["CLUSTLIGHT" + wm], fm["RECTAREALIGHTEMISSIONTEXTURE" + wm], 1 === xm);
      fm.NUM_MORPH_INFLUENCERS && (hm.push("morphTargetInfluences"), hm.push("morphTargetCount")), fm.BAKED_VERTEX_ANIMATION_TEXTURE && (hm.push("bakedVertexAnimationSettings"), hm.push("bakedVertexAnimationTextureSizeInverted"), hm.push("bakedVertexAnimationTime"), Tm.push("bakedVertexAnimationTexture"))
    }

    function dm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      mm.addUniform("vReflectionInfos", 2), mm.addUniform("reflectionMatrix", 16), Tm && mm.addUniform("vReflectionMicrosurfaceInfos", 3), fm && (mm.addUniform("vReflectionPosition", 3), mm.addUniform("vReflectionSize", 3)), hm && (mm.addUniform("vReflectionFilteringInfo", 2), mm.addUniform("vReflectionDominantDirection", 3)), am && mm.addUniform("vReflectionColor", 3), Am && (mm.addUniform("vSphericalL00", 3), mm.addUniform("vSphericalL1_1", 3), mm.addUniform("vSphericalL10", 3), mm.addUniform("vSphericalL11", 3), mm.addUniform("vSphericalL2_2", 3), mm.addUniform("vSphericalL2_1", 3), mm.addUniform("vSphericalL20", 3), mm.addUniform("vSphericalL21", 3), mm.addUniform("vSphericalL22", 3), mm.addUniform("vSphericalX", 3), mm.addUniform("vSphericalY", 3), mm.addUniform("vSphericalZ", 3), mm.addUniform("vSphericalXX_ZZ", 3), mm.addUniform("vSphericalYY_ZZ", 3), mm.addUniform("vSphericalZZ", 3), mm.addUniform("vSphericalXY", 3), mm.addUniform("vSphericalYZ", 3), mm.addUniform("vSphericalZX", 3))
    }
  },
  40445: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am
    });
    var hm = fm(37185),
      Am = fm(40383);
    class am extends Am.d {
      constructor(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(mm, Tm, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new hm.e, this._storeEffectOnSubMeshes = fm
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(mm, Tm) {
        return !!mm && (!this._storeEffectOnSubMeshes || (!mm.jK || 0 === mm.jK.length || this.isReadyForSubMesh(mm, mm.jK[0], Tm)))
      }
      _isReadyForSubMesh(mm) {
        const Tm = mm.materialDefines;
        return !(this.checkReadyOnEveryCall || !mm.effect || !Tm || Tm._renderId !== this.wG().getRenderId())
      }
      bindOnlyWorldMatrix(mm) {
        this._activeEffect.setMatrix("world", mm)
      }
      bindOnlyNormalMatrix(mm) {
        this._activeEffect.setMatrix("normalMatrix", mm)
      }
      bind(mm, Tm) {
        Tm && this.bindForSubMesh(mm, Tm, Tm.jK[0])
      }
      _afterBind(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(mm, Tm, fm), this.wG()._cachedEffect = Tm, fm ? fm._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return fm._drawWrapper._forceRebindOnNextCall || mm.isCachedMaterialInvalid(this, Tm, hm)
      }
      dispose(mm, Tm, fm) {
        this._activeEffect = void 0, super.dispose(mm, Tm, fm)
      }
    }
  },
  40465: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      f: () => Am
    });
    const hm = new WeakMap;

    function Am(mm) {
      const Tm = mm.getVertexBuffers();
      if (!Tm) return null;
      let fm = hm.get(mm);
      if (fm) {
        let mm = !1;
        for (const hm in Tm)
          if (!fm.has(hm)) {
            mm = !0;
            break
          } if (!mm) return fm
      } else fm = new Map, hm.set(mm, fm);
      for (const hm in Tm) {
        const mm = Tm[hm];
        if (mm) {
          const Tm = mm.byteOffset,
            Am = mm.byteStride,
            am = mm.type,
            xm = mm.normalized;
          fm.set(hm, {
            offset: Tm,
            stride: Am,
            type: am,
            normalized: xm
          })
        }
      }
      return fm
    }

    function am(mm, Tm) {
      Tm.forEach(((Tm, fm) => {
        const hm = `vp_${fm}_info`;
        mm.setFloat4(hm, Tm.offset, Tm.stride, Tm.type, Tm.normalized ? 1 : 0)
      }))
    }
  },
  40416: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      g: () => Dm
    });
    var hm = fm(40113),
      Am = fm(37185),
      am = fm(40119);
    let xm = (() => {
      var mm;
      let Tm, fm, Am = [];
      return mm = class {
        static extractMinAndMaxIndexed(mm, Tm, fm, hm, Am, am) {
          for (let xm = fm; xm < fm + hm; xm++) {
            const fm = 3 * Tm[xm],
              hm = mm[fm],
              wm = mm[fm + 1],
              Dm = mm[fm + 2];
            Am.minimizeInPlaceFromFloats(hm, wm, Dm), am.maximizeInPlaceFromFloats(hm, wm, Dm)
          }
        }
        static extractMinAndMax(mm, Tm, fm, hm, Am, am) {
          for (let xm = Tm, wm = Tm * hm; xm < Tm + fm; xm++, wm += hm) {
            const Tm = mm[wm],
              fm = mm[wm + 1],
              hm = mm[wm + 2];
            Am.minimizeInPlaceFromFloats(Tm, fm, hm), am.maximizeInPlaceFromFloats(Tm, fm, hm)
          }
        }
      }, (() => {
        const xm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [am.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], fm = [am.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, hm.g)(mm, null, Tm, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: mm => "extractMinAndMaxIndexed" in mm,
            get: mm => mm.extractMinAndMaxIndexed
          },
          metadata: xm
        }, null, Am), (0, hm.g)(mm, null, fm, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: mm => "extractMinAndMax" in mm,
            get: mm => mm.extractMinAndMax
          },
          metadata: xm
        }, null, Am), xm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xm
        }), (0, hm.i)(mm, Am)
      })(), mm
    })();

    function wm(mm, Tm, fm, hm) {
      let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const wm = new Am.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Dm = new Am.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return xm.extractMinAndMaxIndexed(mm, Tm, fm, hm, wm, Dm), am && (wm.x -= wm.x * am.x + am.y, wm.y -= wm.y * am.x + am.y, wm.z -= wm.z * am.x + am.y, Dm.x += Dm.x * am.x + am.y, Dm.y += Dm.y * am.x + am.y, Dm.z += Dm.z * am.x + am.y), {
        minimum: wm,
        maximum: Dm
      }
    }

    function Dm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        am = arguments.length > 4 ? arguments[4] : void 0;
      const wm = new Am.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Dm = new Am.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return am || (am = 3), xm.extractMinAndMax(mm, Tm, fm, am, wm, Dm), hm && (wm.x -= wm.x * hm.x + hm.y, wm.y -= wm.y * hm.x + hm.y, wm.z -= wm.z * hm.x + hm.y, Dm.x += Dm.x * hm.x + hm.y, Dm.y += Dm.y * hm.x + hm.y, Dm.z += Dm.z * hm.x + hm.y), {
        minimum: wm,
        maximum: Dm
      }
    }
  },
  40391: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm
    });
    var hm, Am = fm(40251),
      am = fm(40399),
      xm = fm(40404),
      wm = fm(40416),
      Dm = fm(40423),
      im = fm(39993);
    class Rm {
      get materialDefines() {
        const mm = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof mm ? null : mm
      }
      set materialDefines(mm) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = mm
      }
      _getDrawWrapper(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        mm = mm ?? this._engine.currentRenderPassId;
        let fm = this._drawWrappers[mm];
        return !fm && Tm && (this._drawWrappers[mm] = fm = new Dm.b(this._mesh.wG().dO())), fm
      }
      _removeDrawWrapper(mm) {
        let Tm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[mm]?.dispose(Tm), this._drawWrappers[mm] = void 0
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
      _setMainDrawWrapperOverride(mm) {
        this._mainDrawWrapperOverride = mm
      }
      setEffect(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Am = this._drawWrapper;
        Am.setEffect(mm, Tm, hm), void 0 !== fm && (Am.materialContext = fm), mm || (Am.defines = null, Am.materialContext = void 0)
      }
      resetDrawCache(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== mm) return void this._removeDrawWrapper(mm, !0, Tm);
          for (const mm of this._drawWrappers) mm?.dispose(Tm)
        }
        this._drawWrappers = []
      }
      static AddToMesh(mm, Tm, fm, hm, Am, am, xm) {
        return new Rm(mm, Tm, fm, hm, Am, am, xm, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(mm, Tm, fm, hm, Am, am, xm) {
        let wm = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Dm = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = mm, this.verticesStart = Tm, this.verticesCount = fm, this.indexStart = hm, this.indexCount = Am, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = am, this._renderingMesh = xm || am, Dm && am.jK.push(this), this._engine = this._mesh.wG().dO(), this.resetDrawCache(), this._trianglePlanes = [], this._id = am.jK.length - 1, wm && (this.refreshBoundingInfo(), am.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      DH() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.DH() : this._boundingInfo
      }
      setBoundingInfo(mm) {
        return this._boundingInfo = mm, this
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
        const mm = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return mm || this._renderingMesh
      }
      TY() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Tm = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Tm) return mm && this._mesh.wG()._hasDefaultMaterial ? this._mesh.wG().defaultMaterial : null;
        if (this._isMultiMaterial(Tm)) {
          const mm = Tm.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== mm && (this._currentMaterial = mm, this.resetDrawCache()), mm
        }
        return Tm
      }
      _isMultiMaterial(mm) {
        return void 0 !== mm.getSubMaterial
      }
      refreshBoundingInfo() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (mm || (mm = this._renderingMesh.getVerticesData(Am.m.PositionKind)), !mm) return this._boundingInfo = this._mesh.DH(), this;
        const Tm = this._renderingMesh.xhm();
        let fm;
        if (0 === this.indexStart && this.indexCount === Tm.length) {
          const mm = this._renderingMesh.DH();
          fm = {
            minimum: mm.minimum.clone(),
            maximum: mm.maximum.clone()
          }
        } else fm = (0, wm.c)(mm, Tm, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(fm.minimum, fm.maximum) : this._boundingInfo = new xm.b(fm.minimum, fm.maximum), this
      }
      _checkCollision(mm) {
        return this.DH()._checkCollision(mm)
      }
      updateBoundingInfo(mm) {
        let Tm = this.DH();
        return Tm || (this.refreshBoundingInfo(), Tm = this.DH()), Tm && Tm.update(mm), this
      }
      isInFrustum(mm) {
        const Tm = this.DH();
        return !!Tm && Tm.isInFrustum(mm, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(mm) {
        const Tm = this.DH();
        return !!Tm && Tm.isCompletelyInFrustum(mm)
      }
      render(mm) {
        return this._renderingMesh.render(this, mm, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(mm, Tm) {
        if (!this._linesIndexBuffer) {
          const fm = 6 * Math.floor(this.indexCount / 3),
            hm = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(fm) : new Uint16Array(fm);
          let Am = 0;
          if (0 === mm.length)
            for (let mm = this.indexStart; mm < this.indexStart + this.indexCount; mm += 3) hm[Am++] = mm, hm[Am++] = mm + 1, hm[Am++] = mm + 1, hm[Am++] = mm + 2, hm[Am++] = mm + 2, hm[Am++] = mm;
          else
            for (let Tm = this.indexStart; Tm < this.indexStart + this.indexCount; Tm += 3) hm[Am++] = mm[Tm], hm[Am++] = mm[Tm + 1], hm[Am++] = mm[Tm + 1], hm[Am++] = mm[Tm + 2], hm[Am++] = mm[Tm + 2], hm[Am++] = mm[Tm];
          this._linesIndexBuffer = Tm.createIndexBuffer(hm), this._linesIndexCount = hm.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(mm) {
        const Tm = this.DH();
        return !!Tm && mm.intersectsBox(Tm.boundingBox)
      }
      intersects(mm, Tm, fm, hm, Am) {
        const am = this.TY();
        if (!am) return null;
        let xm = 3,
          wm = !1;
        switch (am.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            xm = 1, wm = !0
        }
        return 4 === am.fillMode ? fm.length ? this._intersectLines(mm, Tm, fm, this._mesh.intersectionThreshold, hm) : this._intersectUnIndexedLines(mm, Tm, fm, this._mesh.intersectionThreshold, hm) : !fm.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(mm, Tm, fm, hm, Am) : this._intersectTriangles(mm, Tm, fm, xm, wm, hm, Am)
      }
      _intersectLines(mm, Tm, fm, hm, Am) {
        let xm = null;
        for (let wm = this.indexStart; wm < this.indexStart + this.indexCount; wm += 2) {
          const Dm = Tm[fm[wm]],
            im = Tm[fm[wm + 1]],
            Rm = mm.intersectionSegment(Dm, im, hm);
          if (!(Rm < 0) && ((Am || !xm || Rm < xm.distance) && (xm = new am.e(null, null, Rm), xm.faceId = wm / 2, Am))) break
        }
        return xm
      }
      _intersectUnIndexedLines(mm, Tm, fm, hm, Am) {
        let xm = null;
        for (let wm = this.verticesStart; wm < this.verticesStart + this.verticesCount; wm += 2) {
          const fm = Tm[wm],
            Dm = Tm[wm + 1],
            im = mm.intersectionSegment(fm, Dm, hm);
          if (!(im < 0) && ((Am || !xm || im < xm.distance) && (xm = new am.e(null, null, im), xm.faceId = wm / 2, Am))) break
        }
        return xm
      }
      _intersectTriangles(mm, Tm, fm, hm, Am, am, xm) {
        let wm = null,
          Dm = -1;
        for (let im = this.indexStart; im < this.indexStart + this.indexCount - (3 - hm); im += hm) {
          Dm++;
          const hm = fm[im],
            Rm = fm[im + 1],
            pm = fm[im + 2];
          if (Am && 4294967295 === pm) {
            im += 2;
            continue
          }
          const Em = Tm[hm],
            om = Tm[Rm],
            Om = Tm[pm];
          if (!Em || !om || !Om) continue;
          if (xm && !xm(Em, om, Om, mm, hm, Rm, pm)) continue;
          const Ym = mm.intersectsTriangle(Em, om, Om);
          if (Ym) {
            if (Ym.distance < 0) continue;
            if ((am || !wm || Ym.distance < wm.distance) && (wm = Ym, wm.faceId = Dm, am)) break
          }
        }
        return wm
      }
      _intersectUnIndexedTriangles(mm, Tm, fm, hm, Am) {
        let am = null;
        for (let xm = this.verticesStart; xm < this.verticesStart + this.verticesCount; xm += 3) {
          const fm = Tm[xm],
            wm = Tm[xm + 1],
            Dm = Tm[xm + 2];
          if (Am && !Am(fm, wm, Dm, mm, -1, -1, -1)) continue;
          const im = mm.intersectsTriangle(fm, wm, Dm);
          if (im) {
            if (im.distance < 0) continue;
            if ((hm || !am || im.distance < am.distance) && (am = im, am.faceId = xm / 3, hm)) break
          }
        }
        return am
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(mm, Tm) {
        const fm = new Rm(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, mm, Tm, !1);
        if (!this.IsGlobal) {
          const mm = this.DH();
          if (!mm) return fm;
          fm._boundingInfo = new xm.b(mm.minimum, mm.maximum)
        }
        return fm
      }
      dispose() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.wG().dO()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Tm = this._mesh.jK.indexOf(this);
        this._mesh.jK.splice(Tm, 1), this.resetDrawCache(void 0, mm)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(mm, Tm, fm, hm, Am) {
        let am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xm = Number.MAX_VALUE,
          wm = -Number.MAX_VALUE;
        const Dm = (Am || hm).xhm();
        for (let im = Tm; im < Tm + fm; im++) {
          const mm = Dm[im];
          mm < xm && (xm = mm), mm > wm && (wm = mm)
        }
        return new Rm(mm, xm, wm - xm + 1, Tm, fm, hm, Am, am)
      }
    }(hm = Rm.prototype).projectToRef ?? (hm.projectToRef = (0, im.f)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);