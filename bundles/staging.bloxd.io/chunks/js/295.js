export const id = 295;
export const ids = [295];
export const modules = {
  41583: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = kd(40080),
      Nd = kd(41589);
    class Wd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = kd, this.ypd = [], this._maxBlockCapacity = Jd || 64, this._selectionContent = new pd.d(1024), this._creationFunc = dd
      }
      update(dd, Jd, kd) {
        Nd.b._CreateBlocks(dd, Jd, kd, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      apd(dd) {
        for (let Jd = 0; Jd < this.blocks.length; Jd++) {
          this.blocks[Jd].addEntry(dd)
        }
      }
      Tm(dd) {
        for (let Jd = 0; Jd < this.blocks.length; Jd++) {
          this.blocks[Jd].removeEntry(dd)
        }
      }
      select(dd, Jd) {
        this._selectionContent.reset();
        for (let kd = 0; kd < this.blocks.length; kd++) {
          this.blocks[kd].select(dd, this._selectionContent, Jd)
        }
        return Jd ? this._selectionContent.concat(this.ypd) : this._selectionContent.concatWithNoDuplicate(this.ypd), this._selectionContent
      }
      intersects(dd, Jd, kd) {
        this._selectionContent.reset();
        for (let pd = 0; pd < this.blocks.length; pd++) {
          this.blocks[pd].intersects(dd, Jd, this._selectionContent, kd)
        }
        return kd ? this._selectionContent.concat(this.ypd) : this._selectionContent.concatWithNoDuplicate(this.ypd), this._selectionContent
      }
      intersectsRay(dd) {
        this._selectionContent.reset();
        for (let Jd = 0; Jd < this.blocks.length; Jd++) {
          this.blocks[Jd].intersectsRay(dd, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.ypd), this._selectionContent
      }
    }
    Wd.CreationFuncForMeshes = (dd, Jd) => {
      const kd = dd.pU();
      !dd.isBlocked && kd.boundingBox.intersectsMinMax(Jd.bpd, Jd.mpd) && Jd.entries.push(dd)
    }, Wd.CreationFuncForSubMeshes = (dd, Jd) => {
      dd.pU().boundingBox.intersectsMinMax(Jd.bpd, Jd.mpd) && Jd.entries.push(dd)
    }
  },
  41589: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(37251),
      Nd = kd(40294);
    class Wd {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.entries = [], this.Dpd = new Array, this._capacity = kd, this._depth = pd, this._maxDepth = Nd, this._creationFunc = Wd, this._minPoint = dd, this._maxPoint = Jd, this.Dpd.push(dd.clone()), this.Dpd.push(Jd.clone()), this.Dpd.push(dd.clone()), this.Dpd[2].x = Jd.x, this.Dpd.push(dd.clone()), this.Dpd[3].y = Jd.y, this.Dpd.push(dd.clone()), this.Dpd[4].z = Jd.z, this.Dpd.push(Jd.clone()), this.Dpd[5].z = dd.z, this.Dpd.push(Jd.clone()), this.Dpd[6].x = dd.x, this.Dpd.push(Jd.clone()), this.Dpd[7].y = dd.y
      }
      get oo() {
        return this._capacity
      }
      get bpd() {
        return this._minPoint
      }
      get mpd() {
        return this._maxPoint
      }
      addEntry(dd) {
        if (this.blocks)
          for (let Jd = 0; Jd < this.blocks.length; Jd++) {
            this.blocks[Jd].addEntry(dd)
          } else this._creationFunc(dd, this), this.entries.length > this.oo && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(dd) {
        if (this.blocks) {
          for (let Jd = 0; Jd < this.blocks.length; Jd++) {
            this.blocks[Jd].removeEntry(dd)
          }
          return
        }
        const Jd = this.entries.indexOf(dd);
        Jd > -1 && this.entries.splice(Jd, 1)
      }
      addEntries(dd) {
        for (let Jd = 0; Jd < dd.length; Jd++) {
          const kd = dd[Jd];
          this.addEntry(kd)
        }
      }
      select(dd, Jd, kd) {
        if (Nd.b.IsInFrustum(this.Dpd, dd)) {
          if (this.blocks) {
            for (let pd = 0; pd < this.blocks.length; pd++) {
              this.blocks[pd].select(dd, Jd, kd)
            }
            return
          }
          kd ? Jd.concat(this.entries) : Jd.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(dd, Jd, kd, pd) {
        if (Nd.b.IntersectsSphere(this._minPoint, this._maxPoint, dd, Jd)) {
          if (this.blocks) {
            for (let Nd = 0; Nd < this.blocks.length; Nd++) {
              this.blocks[Nd].intersects(dd, Jd, kd, pd)
            }
            return
          }
          pd ? kd.concat(this.entries) : kd.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(dd, Jd) {
        if (dd.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let kd = 0; kd < this.blocks.length; kd++) {
              this.blocks[kd].intersectsRay(dd, Jd)
            }
            return
          }
          Jd.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Wd._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(dd, Jd, kd, Nd, Pd, Zd, gd, Cd) {
        gd.blocks = new Array;
        const Kd = new pd.n((Jd.x - dd.x) / 2, (Jd.y - dd.y) / 2, (Jd.z - dd.z) / 2);
        for (let pd = 0; pd < 2; pd++)
          for (let Jd = 0; Jd < 2; Jd++)
            for (let od = 0; od < 2; od++) {
              const ld = dd.add(Kd.multiplyByFloats(pd, Jd, od)),
                Qd = dd.add(Kd.multiplyByFloats(pd + 1, Jd + 1, od + 1)),
                Ld = new Wd(ld, Qd, Nd, Pd + 1, Zd, Cd);
              Ld.addEntries(kd), gd.blocks.push(Ld)
            }
      }
    }
  },
  41594: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd
    });
    var pd = kd(40062),
      Nd = kd(37251),
      Wd = kd(40426),
      Pd = kd(41535),
      Zd = kd(40147),
      gd = kd(37277),
      Cd = kd(41583);
    class Kd {
      constructor(dd) {
        this.name = Zd.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Pd.B(Nd.n.Zero(), new Nd.n(1, 1, 1)), (dd = dd || gd.d.LastCreatedScene) && (this.BO = dd, this.BO.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.BO.getActiveSubMeshCandidates = dd => this.getActiveSubMeshCandidates(dd), this.BO.getCollidingSubMeshCandidates = (dd, Jd) => this.getCollidingSubMeshCandidates(dd, Jd), this.BO.getIntersectingSubMeshCandidates = (dd, Jd) => this.getIntersectingSubMeshCandidates(dd, Jd))
      }
      register() {
        this.BO.onMeshRemovedObservable.add((dd => {
          const Jd = this.BO.selectionOctree;
          if (void 0 !== Jd && null !== Jd) {
            const kd = Jd.ypd.indexOf(dd); - 1 !== kd && Jd.ypd.splice(kd, 1)
          }
        })), this.BO.onMeshImportedObservable.add((dd => {
          const Jd = this.BO.selectionOctree;
          void 0 !== Jd && null !== Jd && Jd.apd(dd)
        }))
      }
      getActiveMeshCandidates() {
        return this.BO.tpd?.select(this.BO.frustumPlanes) || this.BO._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(dd) {
        if (dd._submeshesOctree && dd.useOctreeForRenderingSelection) {
          return dd._submeshesOctree.select(this.BO.frustumPlanes)
        }
        return this.BO._getDefaultSubMeshCandidates(dd)
      }
      getIntersectingSubMeshCandidates(dd, Jd) {
        if (dd._submeshesOctree && dd.useOctreeForPicking) {
          Pd.B.TransformToRef(Jd, dd.getWorldMatrix(), this._tempRay);
          return dd._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.BO._getDefaultSubMeshCandidates(dd)
      }
      getCollidingSubMeshCandidates(dd, Jd) {
        if (dd._submeshesOctree && dd.useOctreeForCollisions) {
          const kd = Jd._velocityWorldLength + Math.max(Jd._radius.x, Jd._radius.y, Jd._radius.z);
          return dd._submeshesOctree.intersects(Jd._basePointWorld, kd)
        }
        return this.BO._getDefaultSubMeshCandidates(dd)
      }
      rebuild() {}
      dispose() {}
    }
    let od = !1;
    od || (od = !0, pd.i.prototype.createOrUpdateSelectionOctree = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        kd = this._getComponent(Zd.b.NAME_OCTREE);
      kd || (kd = new Kd(this), this.Cpd(kd)), this.tpd || (this.tpd = new Cd.e(Cd.e.CreationFuncForMeshes, dd, Jd));
      const pd = this.getWorldExtends();
      return this.tpd.update(pd.min, pd.max, this.meshes), this.tpd
    }, Object.defineProperty(pd.i.prototype, "selectionOctree", {
      get: function() {
        return this.tpd
      },
      enumerable: !0,
      configurable: !0
    }), Wd.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const kd = this.Wm();
      let pd = kd._getComponent(Zd.b.NAME_OCTREE);
      pd || (pd = new Kd(kd), kd.Cpd(pd)), this._submeshesOctree || (this._submeshesOctree = new Cd.e(Cd.e.CreationFuncForSubMeshes, dd, Jd)), this.computeWorldMatrix(!0);
      const Nd = this.pU().boundingBox;
      return this._submeshesOctree.update(Nd.minimumWorld, Nd.maximumWorld, this.rG), this._submeshesOctree
    })
  },
  41535: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => od,
      c: () => md,
      g: () => Od,
      i: () => Ld,
      k: () => Qd,
      m: () => Fd,
      n: () => Md,
      p: () => Bd,
      t: () => ad,
      x: () => sd
    });
    var pd = kd(37259),
      Nd = kd(37251),
      Wd = kd(37267),
      Pd = kd(40285),
      Zd = kd(40107),
      gd = kd(37277),
      Cd = kd(40178);
    const Kd = {
      internalPickerForMesh: void 0
    };
    class od {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pd.e;
        this.origin = dd, this.direction = Jd, this.length = kd, this.epsilon = Nd
      }
      clone() {
        return new od(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const pd = od._TmpVector3[0].kdd(dd.x - kd, dd.y - kd, dd.z - kd),
          Nd = od._TmpVector3[1].kdd(Jd.x + kd, Jd.y + kd, Jd.z + kd);
        let Wd, Pd, Zd, gd, Cd = 0,
          Kd = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < pd.x || this.origin.x > Nd.x) return !1
        } else if (Wd = 1 / this.direction.x, Pd = (pd.x - this.origin.x) * Wd, Zd = (Nd.x - this.origin.x) * Wd, Zd === -1 / 0 && (Zd = 1 / 0), Pd > Zd && (gd = Pd, Pd = Zd, Zd = gd), Cd = Math.max(Pd, Cd), Kd = Math.min(Zd, Kd), Cd > Kd) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < pd.y || this.origin.y > Nd.y) return !1
        } else if (Wd = 1 / this.direction.y, Pd = (pd.y - this.origin.y) * Wd, Zd = (Nd.y - this.origin.y) * Wd, Zd === -1 / 0 && (Zd = 1 / 0), Pd > Zd && (gd = Pd, Pd = Zd, Zd = gd), Cd = Math.max(Pd, Cd), Kd = Math.min(Zd, Kd), Cd > Kd) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < pd.z || this.origin.z > Nd.z) return !1
        } else if (Wd = 1 / this.direction.z, Pd = (pd.z - this.origin.z) * Wd, Zd = (Nd.z - this.origin.z) * Wd, Zd === -1 / 0 && (Zd = 1 / 0), Pd > Zd && (gd = Pd, Pd = Zd, Zd = gd), Cd = Math.max(Pd, Cd), Kd = Math.min(Zd, Kd), Cd > Kd) return !1;
        return !0
      }
      intersectsBox(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(dd.minimum, dd.maximum, Jd)
      }
      intersectsSphere(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = dd.center.x - this.origin.x,
          pd = dd.center.y - this.origin.y,
          Nd = dd.center.z - this.origin.z,
          Wd = kd * kd + pd * pd + Nd * Nd,
          Pd = dd.radius + Jd,
          Zd = Pd * Pd;
        if (Wd <= Zd) return !0;
        const gd = kd * this.direction.x + pd * this.direction.y + Nd * this.direction.z;
        if (gd < 0) return !1;
        return Wd - gd * gd <= Zd
      }
      intersectsTriangle(dd, Jd, kd) {
        const pd = od._TmpVector3[0],
          Wd = od._TmpVector3[1],
          Zd = od._TmpVector3[2],
          gd = od._TmpVector3[3],
          Cd = od._TmpVector3[4];
        Jd.subtractToRef(dd, pd), kd.subtractToRef(dd, Wd), Nd.n.CrossToRef(this.direction, Wd, Zd);
        const Kd = Nd.n.Dot(pd, Zd);
        if (0 === Kd) return null;
        const ld = 1 / Kd;
        this.origin.subtractToRef(dd, gd);
        const Qd = Nd.n.Dot(gd, Zd) * ld;
        if (Qd < -this.epsilon || Qd > 1 + this.epsilon) return null;
        Nd.n.CrossToRef(gd, pd, Cd);
        const Ld = Nd.n.Dot(this.direction, Cd) * ld;
        if (Ld < -this.epsilon || Qd + Ld > 1 + this.epsilon) return null;
        const Od = Nd.n.Dot(Wd, Cd) * ld;
        return Od > this.length || Od < 0 ? null : new Pd.e(1 - Qd - Ld, Qd, Od)
      }
      intersectsPlane(dd) {
        let Jd;
        const kd = Nd.n.Dot(dd.normal, this.direction);
        if (Math.abs(kd) < 9.99999997475243e-7) return null;
        {
          const pd = Nd.n.Dot(dd.normal, this.origin);
          return Jd = (-dd.d - pd) / kd, Jd < 0 ? Jd < -9.99999997475243e-7 ? null : 0 : Jd
        }
      }
      intersectsAxis(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (dd) {
          case "y": {
            const dd = (this.origin.y - Jd) / this.direction.y;
            return dd > 0 ? null : new Nd.n(this.origin.x + this.direction.x * -dd, Jd, this.origin.z + this.direction.z * -dd)
          }
          case "x": {
            const dd = (this.origin.x - Jd) / this.direction.x;
            return dd > 0 ? null : new Nd.n(Jd, this.origin.y + this.direction.y * -dd, this.origin.z + this.direction.z * -dd)
          }
          case "z": {
            const dd = (this.origin.z - Jd) / this.direction.z;
            return dd > 0 ? null : new Nd.n(this.origin.x + this.direction.x * -dd, this.origin.y + this.direction.y * -dd, Jd)
          }
          default:
            return null
        }
      }
      KNd(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wd = arguments.length > 4 ? arguments[4] : void 0,
          Pd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Zd = Nd.h.Matrix[0];
        return dd.getWorldMatrix().invertToRef(Zd), this._tmpRay ? od.TransformToRef(this, Zd, this._tmpRay) : this._tmpRay = od.Transform(this, Zd), dd.intersects(this._tmpRay, Jd, kd, pd, Wd, Pd)
      }
      intersectsMeshes(dd, Jd, kd) {
        kd ? kd.length = 0 : kd = [];
        for (let pd = 0; pd < dd.length; pd++) {
          const Nd = this.KNd(dd[pd], Jd);
          Nd.hit && kd.push(Nd)
        }
        return kd.sort(this._comparePickingInfo), kd
      }
      _comparePickingInfo(dd, Jd) {
        return dd.distance < Jd.distance ? -1 : dd.distance > Jd.distance ? 1 : 0
      }
      intersectionSegment(dd, Jd, kd) {
        const pd = this.origin,
          Wd = Nd.h.IL[0],
          Pd = Nd.h.IL[1],
          Zd = Nd.h.IL[2],
          gd = Nd.h.IL[3];
        Jd.subtractToRef(dd, Wd), this.direction.scaleToRef(od._Rayl, Zd), pd.addToRef(Zd, Pd), dd.subtractToRef(pd, gd);
        const Cd = Nd.n.Dot(Wd, Wd),
          Kd = Nd.n.Dot(Wd, Zd),
          ld = Nd.n.Dot(Zd, Zd),
          Qd = Nd.n.Dot(Wd, gd),
          Ld = Nd.n.Dot(Zd, gd),
          Od = Cd * ld - Kd * Kd;
        let ed, Rd, Id = Od,
          Gd = Od;
        Od < od._Smallnum ? (ed = 0, Id = 1, Rd = Ld, Gd = ld) : (ed = Kd * Ld - ld * Qd, Rd = Cd * Ld - Kd * Qd, ed < 0 ? (ed = 0, Rd = Ld, Gd = ld) : ed > Id && (ed = Id, Rd = Ld + Kd, Gd = ld)), Rd < 0 ? (Rd = 0, -Qd < 0 ? ed = 0 : -Qd > Cd ? ed = Id : (ed = -Qd, Id = Cd)) : Rd > Gd && (Rd = Gd, -Qd + Kd < 0 ? ed = 0 : -Qd + Kd > Cd ? ed = Id : (ed = -Qd + Kd, Id = Cd));
        const vd = Math.abs(ed) < od._Smallnum ? 0 : ed / Id,
          xd = Math.abs(Rd) < od._Smallnum ? 0 : Rd / Gd,
          qd = Nd.h.IL[4];
        Zd.scaleToRef(xd, qd);
        const Bd = Nd.h.IL[5];
        Wd.scaleToRef(vd, Bd), Bd.addInPlace(gd);
        const sd = Nd.h.IL[6];
        Bd.subtractToRef(qd, sd);
        return xd > 0 && xd <= this.length && sd.lengthSquared() < kd * kd ? Bd.length() : -1
      }
      update(dd, Jd, kd, pd, Wd, Pd, Zd) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          od._RayDistant || (od._RayDistant = od.Zero()), od._RayDistant.unprojectRayToRef(dd, Jd, kd, pd, Nd.b.IdentityReadOnly, Pd, Zd);
          const gd = Nd.h.Matrix[0];
          Wd.invertToRef(gd), od.TransformToRef(od._RayDistant, gd, this)
        } else this.unprojectRayToRef(dd, Jd, kd, pd, Wd, Pd, Zd);
        return this
      }
      static Zero() {
        return new od(Nd.n.Zero(), Nd.n.Zero())
      }
      static CreateNew(dd, Jd, kd, pd, Nd, Wd, Pd) {
        return od.Zero().update(dd, Jd, kd, pd, Nd, Wd, Pd)
      }
      static CreateNewFromTo(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd.b.IdentityReadOnly;
        const pd = new od(new Nd.n(0, 0, 0), new Nd.n(0, 0, 0));
        return od.CreateFromToToRef(dd, Jd, pd, kd)
      }
      static CreateFromToToRef(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nd.b.IdentityReadOnly;
        kd.origin.Fs(dd);
        const Wd = Jd.subtractToRef(dd, kd.direction),
          Pd = Math.sqrt(Wd.x * Wd.x + Wd.y * Wd.y + Wd.z * Wd.z);
        return kd.length = Pd, kd.direction.normalize(), od.TransformToRef(kd, pd, kd)
      }
      static Transform(dd, Jd) {
        const kd = new od(new Nd.n(0, 0, 0), new Nd.n(0, 0, 0));
        return od.TransformToRef(dd, Jd, kd), kd
      }
      static TransformToRef(dd, Jd, kd) {
        Nd.n.TransformCoordinatesToRef(dd.origin, Jd, kd.origin), Nd.n.TransformNormalToRef(dd.direction, Jd, kd.direction), kd.length = dd.length, kd.epsilon = dd.epsilon;
        const pd = kd.direction,
          Wd = pd.length();
        if (0 !== Wd && 1 !== Wd) {
          const dd = 1 / Wd;
          pd.x *= dd, pd.y *= dd, pd.z *= dd, kd.length *= Wd
        }
        return kd
      }
      unprojectRayToRef(dd, Jd, kd, pd, Wd, Pd, Zd) {
        const Cd = Nd.h.Matrix[0];
        Wd.multiplyToRef(Pd, Cd), Cd.multiplyToRef(Zd, Cd), Cd.invert();
        const Kd = gd.d.LastCreatedEngine,
          od = Nd.h.IL[0];
        od.x = dd / kd * 2 - 1, od.y = -(Jd / pd * 2 - 1), od.z = Kd?.vpd ? 1 : Kd?.isNDCHalfZRange ? 0 : -1;
        const ld = Nd.h.IL[1].kdd(od.x, od.y, 1 - 1e-8),
          Qd = Nd.h.IL[2],
          Ld = Nd.h.IL[3];
        Nd.n.TransformCoordinatesToRef(od, Cd, Qd), Nd.n.TransformCoordinatesToRef(ld, Cd, Ld), this.origin.Fs(Qd), Ld.subtractToRef(Qd, this.direction), this.direction.normalize()
      }
    }

    function ld(dd, Jd, kd, pd, Nd) {
      let Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Pd = od.Zero();
      return Qd(dd, Jd, kd, pd, Pd, Nd, Wd), Pd
    }

    function Qd(dd, Jd, kd, pd, Wd, Pd) {
      let Zd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        gd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Cd = dd.eL();
      if (!Pd && !(Pd = dd.activeCamera) && !(Pd = dd.cameraToUseForPointers)) return dd;
      const Kd = Pd.viewport,
        od = Cd.getRenderHeight(),
        {
          x: ld,
          y: Qd,
          width: Ld,
          height: Od
        } = Kd.toGlobal(Cd.getRenderWidth(), od),
        ed = 1 / Cd.getHardwareScalingLevel();
      return Jd = Jd * ed - ld, kd = kd * ed - (od - Qd - Od), Wd.update(Jd, kd, Ld, Od, pd || Nd.b.IdentityReadOnly, Zd ? Nd.b.IdentityReadOnly : Pd.getViewMatrix(), Pd.getProjectionMatrix(), gd), dd
    }

    function Ld(dd, Jd, kd, pd) {
      const Nd = od.Zero();
      return Od(dd, Jd, kd, Nd, pd), Nd
    }

    function Od(dd, Jd, kd, pd, Wd) {
      if (!Zd.d) return dd;
      const Pd = dd.eL();
      if (!Wd && !(Wd = dd.activeCamera) && !(Wd = dd.cameraToUseForPointers)) throw new Error("Active camera not set");
      const gd = Wd.viewport,
        Cd = Pd.getRenderHeight(),
        {
          x: Kd,
          y: od,
          width: ld,
          height: Qd
        } = gd.toGlobal(Pd.getRenderWidth(), Cd),
        Ld = Nd.b.Identity(),
        Od = 1 / Pd.getHardwareScalingLevel();
      return Jd = Jd * Od - Kd, kd = kd * Od - (Cd - od - Qd), pd.update(Jd, kd, ld, Qd, Ld, Ld, Wd.getProjectionMatrix()), dd
    }

    function ed(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
      return Rd(dd, kd, pd, Jd(pd, kd.enableDistantPicking), Nd, Wd, Pd, Zd)
    }

    function Rd(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
      const gd = Jd.intersects(pd, Nd, Pd, Wd, kd, Zd);
      return gd && gd.hit ? !Nd && null != dd && gd.distance >= dd.distance ? null : gd : null
    }

    function Id(dd, Jd) {
      return "InstancedLinesMesh" === dd || "LinesMesh" === dd ? Jd.intersectionThreshold : 0
    }

    function Gd(dd) {
      const Jd = dd.getClassName();
      if ("GreasedLineMesh" === Jd) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const kd = dd.rawBoundingInfo;
      return {
        rawBoundingInfo: kd,
        intersectionThreshold: kd ? Id(Jd, dd) : 0
      }
    }

    function vd(dd, Jd, kd, pd, Nd) {
      const Wd = dd(kd, Jd.enableDistantPicking);
      return Wd.intersectsSphere(pd.zpd, Nd) && Wd.intersectsBox(pd.boundingBox, Nd) ? Wd : null
    }

    function xd(dd, Jd, kd, pd, Wd, Pd) {
      let gd = null;
      const Cd = !!(dd.activeCameras && dd.activeCameras.length > 1 && dd.cameraToUseForPointers !== dd.activeCamera),
        od = dd.cameraToUseForPointers || dd.activeCamera,
        ld = Kd.internalPickerForMesh || ed,
        Qd = ld === ed;
      for (let Zd = 0; Zd < dd.meshes.length; Zd++) {
        const Kd = dd.meshes[Zd];
        if (kd) {
          if (!kd(Kd, -1)) continue
        } else if (!Kd.isEnabled() || !Kd.isVisible || !Kd.iO) continue;
        const Ld = Cd && Kd.isWorldMatrixCameraDependent(),
          Od = Kd.computeWorldMatrix(Ld, od);
        if (Kd.hasThinInstances && Kd.hJd) {
          const dd = ld(gd, Jd, Kd, Od, !0, !0, Pd);
          if (dd) {
            if (Wd) return dd;
            const {
              rawBoundingInfo: Zd,
              intersectionThreshold: Cd
            } = Gd(Kd), od = Kd._thinInstanceDataStorage.matrixData;
            if (od) {
              const dd = Nd.h.Matrix[0],
                Ld = Nd.h.Matrix[1],
                ed = Math.min(Kd.W8, od.length >> 4);
              for (let Id = 0; Id < ed; Id++) {
                if (kd && !kd(Kd, Id)) continue;
                Nd.b.FromArrayToRef(od, Id << 4, dd), dd.multiplyToRef(Od, Ld);
                const ed = Qd && Zd ? vd(Jd, Kd, Ld, Zd, Cd) : null;
                if (Qd && Zd && !ed) continue;
                const Gd = Qd && ed ? Rd(gd, Kd, Ld, ed, pd, Wd, Pd, !0) : ld(gd, Jd, Kd, Ld, pd, Wd, Pd, !0);
                if (Gd && (gd = Gd, gd.thinInstanceIndex = Id, pd)) return gd
              }
            }
          }
        } else {
          const dd = ld(gd, Jd, Kd, Od, pd, Wd, Pd);
          if (dd && (gd = dd, pd)) return gd
        }
      }
      return gd || new Zd.d
    }

    function qd(dd, Jd, kd, pd) {
      if (!Zd.d) return null;
      const Wd = [],
        Pd = !!(dd.activeCameras && dd.activeCameras.length > 1 && dd.cameraToUseForPointers !== dd.activeCamera),
        gd = dd.cameraToUseForPointers || dd.activeCamera,
        Cd = Kd.internalPickerForMesh || ed,
        od = Cd === ed;
      for (let Zd = 0; Zd < dd.meshes.length; Zd++) {
        const Kd = dd.meshes[Zd];
        if (kd) {
          if (!kd(Kd, -1)) continue
        } else if (!Kd.isEnabled() || !Kd.isVisible || !Kd.iO) continue;
        const ld = Pd && Kd.isWorldMatrixCameraDependent(),
          Qd = Kd.computeWorldMatrix(ld, gd);
        if (Kd.hasThinInstances && Kd.hJd) {
          if (Cd(null, Jd, Kd, Qd, !0, !0, pd)) {
            const {
              rawBoundingInfo: dd,
              intersectionThreshold: Pd
            } = Gd(Kd), Zd = Kd._thinInstanceDataStorage.matrixData;
            if (Zd) {
              const gd = Nd.h.Matrix[0],
                ld = Nd.h.Matrix[1],
                Ld = Math.min(Kd.W8, Zd.length >> 4);
              for (let Od = 0; Od < Ld; Od++) {
                if (kd && !kd(Kd, Od)) continue;
                Nd.b.FromArrayToRef(Zd, Od << 4, gd), gd.multiplyToRef(Qd, ld);
                const Ld = od && dd ? vd(Jd, Kd, ld, dd, Pd) : null;
                if (od && dd && !Ld) continue;
                const ed = od && Ld ? Rd(null, Kd, ld, Ld, !1, !1, pd, !0) : Cd(null, Jd, Kd, ld, !1, !1, pd, !0);
                ed && (ed.thinInstanceIndex = Od, Wd.push(ed))
              }
            }
          }
        } else {
          const dd = Cd(null, Jd, Kd, Qd, !1, !1, pd);
          dd && Wd.push(dd)
        }
      }
      return Wd
    }

    function Bd(dd, Jd, kd, pd, Wd, Pd) {
      if (!Zd.d) return null;
      const gd = xd(dd, (pd => (dd._tempPickingRay || (dd._tempPickingRay = od.Zero()), Qd(dd, Jd, kd, pd, dd._tempPickingRay, Pd || null), dd._tempPickingRay)), pd, Wd, !0);
      return gd && (gd.ray = ld(dd, Jd, kd, Nd.b.Identity(), Pd || null)), gd
    }

    function sd(dd, Jd, kd, pd, Wd, Pd, Zd) {
      const gd = xd(dd, ((pd, Nd) => (dd._tempPickingRay || (dd._tempPickingRay = od.Zero()), Qd(dd, Jd, kd, pd, dd._tempPickingRay, Pd || null, !1, Nd), dd._tempPickingRay)), pd, Wd, !1, Zd);
      return gd && (gd.ray = ld(dd, Jd, kd, Nd.b.Identity(), Pd || null)), gd
    }

    function ad(dd, Jd, kd, pd, Wd) {
      const Pd = xd(dd, (kd => (dd._pickWithRayInverseMatrix || (dd._pickWithRayInverseMatrix = Nd.b.Identity()), kd.invertToRef(dd._pickWithRayInverseMatrix), dd._cachedRayForTransform || (dd._cachedRayForTransform = od.Zero()), od.TransformToRef(Jd, dd._pickWithRayInverseMatrix, dd._cachedRayForTransform), dd._cachedRayForTransform)), kd, pd, !1, Wd);
      return Pd && (Pd.ray = Jd), Pd
    }

    function Md(dd, Jd, kd, pd, Nd, Wd) {
      return qd(dd, (pd => ld(dd, Jd, kd, pd, Nd || null)), pd, Wd)
    }

    function Fd(dd, Jd, kd, pd) {
      return qd(dd, (kd => (dd._pickWithRayInverseMatrix || (dd._pickWithRayInverseMatrix = Nd.b.Identity()), kd.invertToRef(dd._pickWithRayInverseMatrix), dd._cachedRayForTransform || (dd._cachedRayForTransform = od.Zero()), od.TransformToRef(Jd, dd._pickWithRayInverseMatrix, dd._cachedRayForTransform), dd._cachedRayForTransform)), kd, pd)
    }

    function Yd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        pd = arguments.length > 3 ? arguments[3] : void 0,
        Wd = arguments.length > 4 ? arguments[4] : void 0;
      pd || (pd = dd.getWorldMatrix()), Jd.length = kd, Wd ? Jd.origin.Fs(Wd) : Jd.origin.Fs(dd.position);
      const Pd = Nd.h.IL[2];
      Pd.set(0, 0, dd._scene.useRightHandedSystem ? -1 : 1);
      const Zd = Nd.h.IL[3];
      return Nd.n.TransformNormalToRef(Pd, pd, Zd), Nd.n.NormalizeToRef(Zd, Jd.direction), Jd
    }

    function md(dd, Jd) {
      Jd && (Jd.prototype.getForwardRay = function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        return Yd(this, new od(Nd.n.Zero(), Nd.n.Zero(), dd), dd, Jd, kd)
      }, Jd.prototype.getForwardRayToRef = function(dd) {
        return Yd(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), dd && (Cd.c._IsPickingAvailable = !0, dd.prototype.createPickingRay = function(dd, Jd, kd, pd) {
        return ld(this, dd, Jd, kd, pd, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    od._TmpVector3 = (0, Wd.b)(6, Nd.n.Zero), od._RayDistant = od.Zero(), od._Smallnum = 1e-8, od._Rayl = 1e9
  },
  41531: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd.B
    });
    var pd = kd(40062),
      Nd = kd(40199),
      Wd = kd(41535);
    let Pd = !1;
    Pd || (Pd = !0, (0, Wd.c)(pd.i, Nd.e), pd.i.prototype.createPickingRayToRef = function(dd, Jd, kd, pd, Nd) {
      let Pd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Zd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Wd.k)(this, dd, Jd, kd, pd, Nd, Pd, Zd)
    }, pd.i.prototype.createPickingRayInCameraSpace = function(dd, Jd, kd) {
      return (0, Wd.i)(this, dd, Jd, kd)
    }, pd.i.prototype.createPickingRayInCameraSpaceToRef = function(dd, Jd, kd, pd) {
      return (0, Wd.g)(this, dd, Jd, kd, pd)
    }, pd.i.prototype.pickWithBoundingInfo = function(dd, Jd, kd, pd, Nd) {
      return (0, Wd.p)(this, dd, Jd, kd, pd, Nd)
    }, pd.i.prototype.Tl = function(dd, Jd, kd, pd, Nd, Pd) {
      let Zd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Wd.x)(this, dd, Jd, kd, pd, Nd, Pd, Zd)
    }, pd.i.prototype.pickWithRay = function(dd, Jd, kd, pd) {
      return (0, Wd.t)(this, dd, Jd, kd, pd)
    }, pd.i.prototype.multiPick = function(dd, Jd, kd, pd, Nd) {
      return (0, Wd.n)(this, dd, Jd, kd, pd, Nd)
    }, pd.i.prototype.multiPickWithRay = function(dd, Jd, kd) {
      return (0, Wd.m)(this, dd, Jd, kd)
    })
  },
  41543: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Kd
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37251),
      Pd = kd(40243),
      Zd = kd(41547),
      gd = kd(40205),
      Cd = kd(37303);
    let Kd = (() => {
        var dd;
        let Jd, kd, gd, Cd, Kd, od, ld, Qd, Ld = Zd.b,
          Od = [],
          ed = [],
          Rd = [],
          Id = [],
          Gd = [],
          vd = [],
          xd = [],
          qd = [],
          Bd = [],
          sd = [],
          ad = [],
          Md = [],
          Fd = [];
        return dd = class extends Ld {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(dd) {
            this._shadowFrustumSize = dd, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(dd) {
            this._shadowOrthoScale = dd, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(dd) {
            this._orthoLeft = dd
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(dd) {
            this._orthoRight = dd
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(dd) {
            this._orthoTop = dd
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(dd) {
            this._orthoBottom = dd
          }
          constructor(dd, Jd, kd, Nd) {
            super(dd, kd, Nd), this._shadowFrustumSize = ((0, pd.i)(this, Od), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, pd.i)(this, ed, !0), this.autoCalcShadowZBounds = ((0, pd.i)(this, Rd), (0, pd.i)(this, Id, !1)), this._orthoLeft = ((0, pd.i)(this, Gd), (0, pd.i)(this, vd, Number.MAX_VALUE)), this._orthoRight = ((0, pd.i)(this, xd), (0, pd.i)(this, qd, Number.MIN_VALUE)), this._orthoTop = ((0, pd.i)(this, Bd), (0, pd.i)(this, sd, Number.MIN_VALUE)), this._orthoBottom = ((0, pd.i)(this, ad), (0, pd.i)(this, Md, Number.MAX_VALUE)), (0, pd.i)(this, Fd), this.position = Jd.scale(-1), this.direction = Jd
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Pd.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(dd, Jd, kd) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(dd) : this._setDefaultAutoExtendShadowProjectionMatrix(dd, Jd, kd)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(dd) {
            const Jd = this.Wm().activeCamera;
            Wd.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Jd ? Jd.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Jd ? Jd.maxZ : 1e4, dd, this.Wm().eL().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(dd, Jd, kd) {
            const pd = this.Wm().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const dd = Wd.n.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let pd = Number.MAX_VALUE,
                Nd = -Number.MAX_VALUE;
              for (let Pd = 0; Pd < kd.length; Pd++) {
                const Zd = kd[Pd];
                if (!Zd) continue;
                const gd = Zd.pU().boundingBox;
                for (let kd = 0; kd < gd.vectorsWorld.length; kd++) Wd.n.TransformCoordinatesToRef(gd.vectorsWorld[kd], Jd, dd), dd.x < this._orthoLeft && (this._orthoLeft = dd.x), dd.y < this._orthoBottom && (this._orthoBottom = dd.y), dd.x > this._orthoRight && (this._orthoRight = dd.x), dd.y > this._orthoTop && (this._orthoTop = dd.y), this.autoCalcShadowZBounds && (dd.z < pd && (pd = dd.z), dd.z > Nd && (Nd = dd.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = pd, this._shadowMaxZ = Nd)
            }
            const Nd = this._orthoRight - this._orthoLeft,
              Pd = this._orthoTop - this._orthoBottom,
              Zd = void 0 !== this.shadowMinZ ? this.shadowMinZ : pd?.minZ || 0,
              gd = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : pd?.maxZ || 1e4,
              Cd = this.Wm().eL().vpd;
            Wd.b.OrthoOffCenterLHToRef(this._orthoLeft - Nd * this.shadowOrthoScale, this._orthoRight + Nd * this.shadowOrthoScale, this._orthoBottom - Pd * this.shadowOrthoScale, this._orthoTop + Pd * this.shadowOrthoScale, Cd ? gd : Zd, Cd ? Zd : gd, dd, this.Wm().eL().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(dd, Jd) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Jd), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, Jd), this)
          }
          transferToNodeMaterialEffect(dd, Jd) {
            return this.computeTransformedInformation() ? (dd.setFloat3(Jd, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (dd.setFloat3(Jd, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(dd) {
            const Jd = this._scene.eL();
            return !Jd.vpd && Jd.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(dd) {
            const Jd = this._scene.eL();
            return Jd.vpd && Jd.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(dd, Jd) {
            dd["DIRLIGHT" + Jd] = !0
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ld[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], gd = [(0, Nd.H)()], Cd = [(0, Nd.H)()], Kd = [(0, Nd.H)("orthoLeft")], od = [(0, Nd.H)("orthoRight")], ld = [(0, Nd.H)("orthoTop")], Qd = [(0, Nd.H)("orthoBottom")], (0, pd.h)(dd, null, Jd, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: dd => "shadowFrustumSize" in dd,
              get: dd => dd.shadowFrustumSize
            },
            metadata: Wd
          }, null, Od), (0, pd.h)(dd, null, kd, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "shadowOrthoScale" in dd,
              get: dd => dd.shadowOrthoScale
            },
            metadata: Wd
          }, null, Od), (0, pd.h)(null, null, gd, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: dd => "autoUpdateExtends" in dd,
              get: dd => dd.autoUpdateExtends,
              set: (dd, Jd) => {
                dd.autoUpdateExtends = Jd
              }
            },
            metadata: Wd
          }, ed, Rd), (0, pd.h)(null, null, Cd, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: dd => "autoCalcShadowZBounds" in dd,
              get: dd => dd.autoCalcShadowZBounds,
              set: (dd, Jd) => {
                dd.autoCalcShadowZBounds = Jd
              }
            },
            metadata: Wd
          }, Id, Gd), (0, pd.h)(null, null, Kd, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: dd => "_orthoLeft" in dd,
              get: dd => dd._orthoLeft,
              set: (dd, Jd) => {
                dd._orthoLeft = Jd
              }
            },
            metadata: Wd
          }, vd, xd), (0, pd.h)(null, null, od, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: dd => "_orthoRight" in dd,
              get: dd => dd._orthoRight,
              set: (dd, Jd) => {
                dd._orthoRight = Jd
              }
            },
            metadata: Wd
          }, qd, Bd), (0, pd.h)(null, null, ld, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: dd => "_orthoTop" in dd,
              get: dd => dd._orthoTop,
              set: (dd, Jd) => {
                dd._orthoTop = Jd
              }
            },
            metadata: Wd
          }, sd, ad), (0, pd.h)(null, null, Qd, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: dd => "_orthoBottom" in dd,
              get: dd => dd._orthoBottom,
              set: (dd, Jd) => {
                dd._orthoBottom = Jd
              }
            },
            metadata: Wd
          }, Md, Fd), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd
      })(),
      od = !1;
    od || (od = !0, gd.c.AddNodeConstructor("Light_Type_1", ((dd, Jd) => () => new Kd(dd, Wd.n.Zero(), Jd))), (0, Cd.h)("BABYLON.DirectionalLight", Kd))
  },
  41556: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => uJ
    });
    var pd = kd(38835),
      Nd = kd(37280),
      Wd = kd(37251),
      Pd = kd(40115),
      Zd = kd(41561),
      gd = kd(37277),
      Cd = kd(40266),
      Kd = kd(37443),
      od = kd(38844),
      ld = kd(38806),
      Qd = kd(37289);
    class Ld {
      constructor() {
        this.direction1 = new Wd.n(0, 1, 0), this.direction2 = new Wd.n(0, 1, 0)
      }
      startDirectionFunction(dd, Jd, kd, pd) {
        const Nd = (0, Qd.RandomRange)(this.direction1.x, this.direction2.x),
          Pd = (0, Qd.RandomRange)(this.direction1.y, this.direction2.y),
          Zd = (0, Qd.RandomRange)(this.direction1.z, this.direction2.z);
        pd ? Jd.kdd(Nd, Pd, Zd) : Wd.n.TransformNormalFromFloatsToRef(Nd, Pd, Zd, dd, Jd)
      }
      startPositionFunction(dd, Jd, kd, pd) {
        pd ? Jd.kdd(0, 0, 0) : Wd.n.TransformCoordinatesFromFloatsToRef(0, 0, 0, dd, Jd)
      }
      clone() {
        const dd = new Ld;
        return ld.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.direction1 = this.direction1.spd(), dd.direction2 = this.direction2.spd(), dd
      }
      parse(dd) {
        Wd.n.FromArrayToRef(dd.direction1, 0, this.direction1), Wd.n.FromArrayToRef(dd.direction2, 0, this.direction2)
      }
    }
    class Od {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = dd, this.radiusRange = Jd, this.directionRandomizer = kd
      }
      startDirectionFunction(dd, Jd, kd, pd) {
        const Nd = kd.position.subtract(dd.getTranslation()).normalize(),
          Pd = (0, Qd.RandomRange)(0, this.directionRandomizer),
          Zd = (0, Qd.RandomRange)(0, this.directionRandomizer),
          gd = (0, Qd.RandomRange)(0, this.directionRandomizer);
        Nd.x += Pd, Nd.y += Zd, Nd.z += gd, Nd.normalize(), pd ? Jd.Fs(Nd) : Wd.n.TransformNormalFromFloatsToRef(Nd.x, Nd.y, Nd.z, dd, Jd)
      }
      startPositionFunction(dd, Jd, kd, pd) {
        const Nd = this.radius - (0, Qd.RandomRange)(0, this.radius * this.radiusRange),
          Pd = (0, Qd.RandomRange)(0, 1),
          Zd = (0, Qd.RandomRange)(0, 2 * Math.PI),
          gd = Math.acos(2 * Pd - 1),
          Cd = Nd * Math.cos(Zd) * Math.sin(gd),
          Kd = Nd * Math.cos(gd),
          od = Nd * Math.sin(Zd) * Math.sin(gd);
        pd ? Jd.kdd(Cd, Math.abs(Kd), od) : Wd.n.TransformCoordinatesFromFloatsToRef(Cd, Math.abs(Kd), od, dd, Jd)
      }
      clone() {
        const dd = new Od(this.radius, this.directionRandomizer);
        return ld.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("radiusRange", this.radiusRange), dd.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("radiusRange", 1), dd.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.radius = this.radius, dd.radiusRange = this.radiusRange, dd.directionRandomizer = this.directionRandomizer, dd
      }
      parse(dd) {
        this.radius = dd.radius, this.radiusRange = dd.radiusRange, this.directionRandomizer = dd.directionRandomizer
      }
    }
    class ed {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = dd, this.radiusRange = Jd, this.directionRandomizer = kd
      }
      startDirectionFunction(dd, Jd, kd, pd) {
        const Nd = kd.position.subtract(dd.getTranslation()).normalize(),
          Pd = (0, Qd.RandomRange)(0, this.directionRandomizer),
          Zd = (0, Qd.RandomRange)(0, this.directionRandomizer),
          gd = (0, Qd.RandomRange)(0, this.directionRandomizer);
        Nd.x += Pd, Nd.y += Zd, Nd.z += gd, Nd.normalize(), pd ? Jd.Fs(Nd) : Wd.n.TransformNormalFromFloatsToRef(Nd.x, Nd.y, Nd.z, dd, Jd)
      }
      startPositionFunction(dd, Jd, kd, pd) {
        const Nd = this.radius - (0, Qd.RandomRange)(0, this.radius * this.radiusRange),
          Pd = (0, Qd.RandomRange)(0, 1),
          Zd = (0, Qd.RandomRange)(0, 2 * Math.PI),
          gd = Math.acos(2 * Pd - 1),
          Cd = Nd * Math.cos(Zd) * Math.sin(gd),
          Kd = Nd * Math.cos(gd),
          od = Nd * Math.sin(Zd) * Math.sin(gd);
        pd ? Jd.kdd(Cd, Kd, od) : Wd.n.TransformCoordinatesFromFloatsToRef(Cd, Kd, od, dd, Jd)
      }
      clone() {
        const dd = new ed(this.radius, this.directionRandomizer);
        return ld.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("radiusRange", this.radiusRange), dd.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("radiusRange", 1), dd.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.radius = this.radius, dd.radiusRange = this.radiusRange, dd.directionRandomizer = this.directionRandomizer, dd
      }
      parse(dd) {
        this.radius = dd.radius, this.radiusRange = dd.radiusRange, this.directionRandomizer = dd.directionRandomizer
      }
    }
    class Rd extends ed {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wd.n(0, 1, 0),
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Wd.n(0, 1, 0);
        super(dd), this.direction1 = Jd, this.direction2 = kd
      }
      startDirectionFunction(dd, Jd, kd, pd) {
        const Nd = (0, Qd.RandomRange)(this.direction1.x, this.direction2.x),
          Pd = (0, Qd.RandomRange)(this.direction1.y, this.direction2.y),
          Zd = (0, Qd.RandomRange)(this.direction1.z, this.direction2.z);
        pd ? Jd.kdd(Nd, Pd, Zd) : Wd.n.TransformNormalFromFloatsToRef(Nd, Pd, Zd, dd, Jd)
      }
      clone() {
        const dd = new Rd(this.radius, this.direction1, this.direction2);
        return ld.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("radiusRange", this.radiusRange), dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("radiusRange", 1), dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const dd = super.serialize();
        return dd.direction1 = this.direction1.spd(), dd.direction2 = this.direction2.spd(), dd
      }
      parse(dd) {
        super.parse(dd), Wd.n.FromArrayToRef(dd.direction1, 0, this.direction1), Wd.n.FromArrayToRef(dd.direction2, 0, this.direction2)
      }
    }
    var Id = kd(38801);
    class Gd {
      get radius() {
        return this._radius
      }
      set radius(dd) {
        this._radius = dd, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(dd) {
        this._angle = dd, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = kd, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Jd, this.radius = dd
      }
      startDirectionFunction(dd, Jd, kd, pd) {
        const Nd = kd.position.subtract(dd.getTranslation()).normalize(),
          Pd = (0, Qd.RandomRange)(0, this.directionRandomizer),
          Zd = (0, Qd.RandomRange)(0, this.directionRandomizer),
          gd = (0, Qd.RandomRange)(0, this.directionRandomizer);
        Nd.x += Pd, Nd.y += Zd, Nd.z += gd, Nd.normalize(), pd ? Jd.Fs(Nd) : Wd.n.TransformNormalFromFloatsToRef(Nd.x, Nd.y, Nd.z, dd, Jd)
      }
      startPositionFunction(dd, Jd, kd, pd) {
        const Nd = (0, Qd.RandomRange)(0, 2 * Math.PI);
        let Pd;
        this.emitFromSpawnPointOnly ? Pd = 1e-4 : (Pd = (0, Qd.RandomRange)(0, this.heightRange), Pd = 1 - Pd * Pd);
        let Zd = this._radius - (0, Qd.RandomRange)(0, this._radius * this.radiusRange);
        Zd *= Pd;
        const gd = Zd * Math.sin(Nd),
          Cd = Zd * Math.cos(Nd),
          Kd = Pd * this._height;
        if (pd) return Jd.x = gd, Jd.y = Kd, void(Jd.z = Cd);
        Wd.n.TransformCoordinatesFromFloatsToRef(gd, Kd, Cd, dd, Jd)
      }
      clone() {
        const dd = new Gd(this._radius, this._angle, this.directionRandomizer);
        return ld.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat2("radius", this._radius, this.radiusRange), dd.setFloat("coneAngle", this._angle), dd.setFloat2("height", this._height, this.heightRange), dd.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 2), dd.addUniform("coneAngle", 1), dd.addUniform("height", 2), dd.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let dd = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (dd += "\n#define CONEEMITTERSPAWNPOINT"), dd
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.radius = this._radius, dd.angle = this._angle, dd.directionRandomizer = this.directionRandomizer, dd.radiusRange = this.radiusRange, dd.heightRange = this.heightRange, dd.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, dd
      }
      parse(dd) {
        this.radius = dd.radius, this.angle = dd.angle, this.directionRandomizer = dd.directionRandomizer, this.radiusRange = void 0 !== dd.radiusRange ? dd.radiusRange : 1, this.heightRange = void 0 !== dd.heightRange ? dd.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== dd.emitFromSpawnPointOnly && dd.emitFromSpawnPointOnly
      }
    }
    class vd extends Gd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Wd.n(0, 1, 0),
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wd.n(0, 1, 0);
        super(dd, Jd), this.direction1 = kd, this.direction2 = pd
      }
      startDirectionFunction(dd, Jd, kd, pd) {
        const Nd = (0, Qd.RandomRange)(this.direction1.x, this.direction2.x),
          Pd = (0, Qd.RandomRange)(this.direction1.y, this.direction2.y),
          Zd = (0, Qd.RandomRange)(this.direction1.z, this.direction2.z);
        pd ? Jd.kdd(Nd, Pd, Zd) : Wd.n.TransformNormalFromFloatsToRef(Nd, Pd, Zd, dd, Jd)
      }
      clone() {
        const dd = new vd(this.radius, this.angle, this.direction1, this.direction2);
        return ld.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        super.applyToShader(dd), dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        super.buildUniformLayout(dd), dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const dd = super.serialize();
        return dd.direction1 = this.direction1.spd(), dd.direction2 = this.direction2.spd(), dd
      }
      parse(dd) {
        super.parse(dd), Wd.n.FromArrayToRef(dd.direction1, 0, this.direction1), Wd.n.FromArrayToRef(dd.direction2, 0, this.direction2)
      }
    }
    class xd {
      get mesh() {
        return this._mesh
      }
      set mesh(dd) {
        this._mesh !== dd && (this._mesh = dd, dd ? (this._indices = dd.ipd(), this._positions = dd.getVerticesData(Pd.j.PositionKind), this._normals = dd.getVerticesData(Pd.j.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Wd.n.Zero(), this._mesh = null, this.direction1 = new Wd.n(0, 1, 0), this.direction2 = new Wd.n(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = dd
      }
      startDirectionFunction(dd, Jd, kd, pd) {
        if (this.useMeshNormalsForDirection && this._normals) return void Wd.n.TransformNormalToRef(this._storedNormal, dd, Jd);
        const Nd = (0, Qd.RandomRange)(this.direction1.x, this.direction2.x),
          Pd = (0, Qd.RandomRange)(this.direction1.y, this.direction2.y),
          Zd = (0, Qd.RandomRange)(this.direction1.z, this.direction2.z);
        pd ? Jd.kdd(Nd, Pd, Zd) : Wd.n.TransformNormalFromFloatsToRef(Nd, Pd, Zd, dd, Jd)
      }
      startPositionFunction(dd, Jd, kd, pd) {
        if (!this._indices || !this._positions) return;
        const Nd = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Pd = Math.random(),
          Zd = Math.random() * (1 - Pd),
          gd = 1 - Pd - Zd,
          Cd = this._indices[Nd],
          Kd = this._indices[Nd + 1],
          od = this._indices[Nd + 2],
          ld = Wd.h.IL[0],
          Qd = Wd.h.IL[1],
          Ld = Wd.h.IL[2],
          Od = Wd.h.IL[3];
        Wd.n.FromArrayToRef(this._positions, 3 * Cd, ld), Wd.n.FromArrayToRef(this._positions, 3 * Kd, Qd), Wd.n.FromArrayToRef(this._positions, 3 * od, Ld), Od.x = Pd * ld.x + Zd * Qd.x + gd * Ld.x, Od.y = Pd * ld.y + Zd * Qd.y + gd * Ld.y, Od.z = Pd * ld.z + Zd * Qd.z + gd * Ld.z, pd ? Jd.kdd(Od.x, Od.y, Od.z) : Wd.n.TransformCoordinatesFromFloatsToRef(Od.x, Od.y, Od.z, dd, Jd), this.useMeshNormalsForDirection && this._normals && (Wd.n.FromArrayToRef(this._normals, 3 * Cd, ld), Wd.n.FromArrayToRef(this._normals, 3 * Kd, Qd), Wd.n.FromArrayToRef(this._normals, 3 * od, Ld), this._storedNormal.x = Pd * ld.x + Zd * Qd.x + gd * Ld.x, this._storedNormal.y = Pd * ld.y + Zd * Qd.y + gd * Ld.y, this._storedNormal.z = Pd * ld.z + Zd * Qd.z + gd * Ld.z)
      }
      clone() {
        const dd = new xd(this.mesh);
        return ld.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.direction1 = this.direction1.spd(), dd.direction2 = this.direction2.spd(), dd.meshId = this.mesh?.id, dd.useMeshNormalsForDirection = this.useMeshNormalsForDirection, dd
      }
      parse(dd, Jd) {
        Wd.n.FromArrayToRef(dd.direction1, 0, this.direction1), Wd.n.FromArrayToRef(dd.direction2, 0, this.direction2), dd.meshId && Jd && (this.mesh = Jd.getLastMeshById(dd.meshId)), this.useMeshNormalsForDirection = dd.useMeshNormalsForDirection
      }
    }
    class qd {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(dd) {
        this._targetStopDuration !== dd && (this._targetStopDuration = dd)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(dd) {
        this._noiseTexture !== dd && (this._noiseTexture = dd, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(dd) {
        this._attractors.push(dd)
      }
      removeAttractor(dd) {
        const Jd = this._attractors.indexOf(dd); - 1 !== Jd && this._attractors.splice(Jd, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(dd) {
        this._animationSheetEnabled !== dd && (this._animationSheetEnabled = dd)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(dd) {
        this._isAnimationSheetEnabled != dd && (this._isAnimationSheetEnabled = dd, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(dd) {
        this._useLogarithmicDepth = dd && this.Wm().eL().getCaps().fragmentDepthSupported
      }
      Wm() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(dd) {
        switch (dd) {
          case qd.BLENDMODE_MULTIPLYADD:
            return;
          case qd.BLENDMODE_ADD:
            dd = 1;
            break;
          case qd.BLENDMODE_ONEONE:
            dd = 6;
            break;
          case qd.BLENDMODE_STANDARD:
            dd = 2;
            break;
          case qd.BLENDMODE_MULTIPLY:
            dd = 4;
            break;
          case qd.BLENDMODE_SUBTRACT:
            dd = 3
        }
        this._engine.setAlphaMode(dd)
      }
      getDragGradients() {
        return this._dragGradients
      }
      getLimitVelocityGradients() {
        return this._limitVelocityGradients
      }
      getColorGradients() {
        return this._colorGradients
      }
      getSizeGradients() {
        return this._sizeGradients
      }
      getColorRemapGradients() {
        return this._colorRemapGradients
      }
      getAlphaRemapGradients() {
        return this._alphaRemapGradients
      }
      getLifeTimeGradients() {
        return this._lifeTimeGradients
      }
      getAngularSpeedGradients() {
        return this._angularSpeedGradients
      }
      getVelocityGradients() {
        return this._velocityGradients
      }
      getStartSizeGradients() {
        return this._startSizeGradients
      }
      getEmitRateGradients() {
        return this._emitRateGradients
      }
      addEmitRateGradient(dd, Jd, kd) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, dd, Jd, kd), this
      }
      removeEmitRateGradient(dd) {
        return this._removeFactorGradient(this._emitRateGradients, dd), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Wd.n.Zero()
      }
      set direction1(dd) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = dd)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Wd.n.Zero()
      }
      set direction2(dd) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = dd)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Wd.n.Zero()
      }
      set minEmitBox(dd) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = dd)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Wd.n.Zero()
      }
      set maxEmitBox(dd) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = dd)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(dd) {
        this._billboardMode !== dd && (this._billboardMode = dd, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(dd) {
        this._isBillboardBased !== dd && (this._isBillboardBased = dd, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(dd) {
        this._attachImageProcessingConfiguration(dd)
      }
      _attachImageProcessingConfiguration(dd) {
        dd !== this._imageProcessingConfiguration && (!dd && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = dd)
      }
      _reset() {}
      _addFactorGradient(dd, Jd, kd, Nd) {
        const Wd = new pd.h(Jd, kd, Nd);
        dd.push(Wd), dd.sort(((dd, Jd) => dd.gradient < Jd.gradient ? -1 : dd.gradient > Jd.gradient ? 1 : 0))
      }
      _removeFactorGradient(dd, Jd) {
        if (!dd) return;
        let kd = 0;
        for (const pd of dd) {
          if (pd.gradient === Jd) {
            dd.splice(kd, 1);
            break
          }
          kd++
        }
      }
      _removeGradientAndTexture(dd, Jd, kd) {
        if (!Jd) return this;
        let pd = 0;
        for (const Nd of Jd) {
          if (Nd.gradient === dd) {
            Jd.splice(pd, 1);
            break
          }
          pd++
        }
        return kd && kd.dispose(), this
      }
      constructor(dd) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Wd.n.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Wd.n(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = qd.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Wd.k(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Wd.n(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Wd.n.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Kd.g(1, 1, 1, 1), this.color2 = new Kd.g(1, 1, 1, 1), this.colorDead = new Kd.g(0, 0, 0, 1), this.textureMask = new Kd.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Cd.b, this.id = dd, this.name = dd
      }
      createPointEmitter(dd, Jd) {
        const kd = function(dd, Jd) {
          const kd = new Ld;
          return kd.direction1 = dd, kd.direction2 = Jd, kd
        }(dd, Jd);
        return this.particleEmitterType = kd, kd
      }
      createHemisphericEmitter() {
        const dd = function() {
          return new Od(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = dd, dd
      }
      createSphereEmitter() {
        const dd = function() {
          return new ed(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = dd, dd
      }
      createDirectedSphereEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wd.n(0, 1, 0),
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Wd.n(0, 1, 0);
          return new Rd(dd, Jd, kd)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wd.n(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Wd.n(0, 1, 0));
        return this.particleEmitterType = dd, dd
      }
      createCylinderEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Id.d(dd, Jd, kd, pd)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = dd, dd
      }
      createDirectedCylinderEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wd.n(0, 1, 0),
            Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Wd.n(0, 1, 0);
          return new Id.c(dd, Jd, kd, pd, Nd)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wd.n(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Wd.n(0, 1, 0));
        return this.particleEmitterType = dd, dd
      }
      createConeEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Gd(dd, Jd)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = dd, dd
      }
      createDirectedConeEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Wd.n(0, 1, 0),
            pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wd.n(0, 1, 0);
          return new vd(dd, Jd, kd, pd)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Wd.n(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wd.n(0, 1, 0));
        return this.particleEmitterType = dd, dd
      }
      createBoxEmitter(dd, Jd, kd, pd) {
        const Nd = new od.d;
        return this.particleEmitterType = Nd, this.direction1 = dd, this.direction2 = Jd, this.minEmitBox = kd, this.maxEmitBox = pd, Nd
      }
      createMeshEmitter() {
        const dd = function() {
          return new xd(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = dd, dd
      }
    }
    qd.BLENDMODE_ONEONE = 0, qd.BLENDMODE_STANDARD = 1, qd.BLENDMODE_ADD = 2, qd.BLENDMODE_MULTIPLY = 3, qd.BLENDMODE_MULTIPLYADD = 4, qd.BLENDMODE_SUBTRACT = -1;
    class Bd {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Kd.g(0, 0, 0, 0), this.currentColor2 = new Kd.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Wd.n.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class sd {
      constructor(dd) {
        this.particleSystem = dd, this.position = Wd.n.Zero(), this.direction = Wd.n.Zero(), this.color = new Kd.g(0, 0, 0, 0), this.colorStep = new Kd.g(0, 0, 0, 0), this.initialColor = new Kd.g(0, 0, 0, 0), this.colorDead = new Kd.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Wd.k(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Bd, this.id = sd._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let dd = this.age,
          Jd = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Jd ? (Jd = 1, dd = this._properties.randomCellOffset) : dd += this._properties.randomCellOffset);
        const kd = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let pd;
        pd = this._properties.initialSpriteCellLoop ? (0, Qd.Clamp)(dd * Jd % this.lifeTime / this.lifeTime) : (0, Qd.Clamp)(dd * Jd / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + pd * kd | 0
      }
      _inheritParticleInfoToSubEmitter(dd) {
        if (dd.particleSystem.emitter.position) {
          const Jd = dd.particleSystem.emitter;
          if (Jd.position.Fs(this.position), dd.inheritDirection) {
            const dd = Wd.h.IL[0];
            this.direction.normalizeToRef(dd), Jd.setDirection(dd, 0, Math.PI / 2)
          }
        } else {
          dd.particleSystem.emitter.Fs(this.position)
        }
        this.direction.scaleToRef(dd.inheritedVelocityAmount / 2, Wd.h.IL[0]), dd.particleSystem._inheritedVelocityOffset.Fs(Wd.h.IL[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const dd of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(dd)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = sd._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(dd) {
        dd.position.Fs(this.position), this._properties.initialDirection ? dd._properties.initialDirection ? dd._properties.initialDirection.Fs(this._properties.initialDirection) : dd._properties.initialDirection = this._properties.initialDirection.clone() : dd._properties.initialDirection = null, dd.direction.Fs(this.direction), this._properties.localPosition && (dd._properties.localPosition ? dd._properties.localPosition.Fs(this._properties.localPosition) : dd._properties.localPosition = this._properties.localPosition.clone()), dd.color.Fs(this.color), dd.colorStep.Fs(this.colorStep), dd.initialColor.Fs(this.initialColor), dd.colorDead.Fs(this.colorDead), dd.lifeTime = this.lifeTime, dd.age = this.age, dd._properties.randomCellOffset = this._properties.randomCellOffset, dd.size = this.size, dd.scale.Fs(this.scale), dd.angle = this.angle, dd.angularSpeed = this.angularSpeed, dd.particleSystem = this.particleSystem, dd.cellIndex = this.cellIndex, dd.id = this.id, dd._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (dd._properties.currentColorGradient = this._properties.currentColorGradient, dd._properties.currentColor1.Fs(this._properties.currentColor1), dd._properties.currentColor2.Fs(this._properties.currentColor2)), this._properties.currentSizeGradient && (dd._properties.currentSizeGradient = this._properties.currentSizeGradient, dd._properties.currentSize1 = this._properties.currentSize1, dd._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (dd._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, dd._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, dd._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (dd._properties.currentVelocityGradient = this._properties.currentVelocityGradient, dd._properties.currentVelocity1 = this._properties.currentVelocity1, dd._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (dd._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, dd._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, dd._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (dd._properties.currentDragGradient = this._properties.currentDragGradient, dd._properties.currentDrag1 = this._properties.currentDrag1, dd._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (dd._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, dd._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, dd._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (dd.remapData && this.remapData ? dd.remapData.Fs(this.remapData) : dd.remapData = new Wd.o(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (dd._properties.randomNoiseCoordinates1 && dd._properties.randomNoiseCoordinates2 ? (dd._properties.randomNoiseCoordinates1.Fs(this._properties.randomNoiseCoordinates1), dd._properties.randomNoiseCoordinates2.Fs(this._properties.randomNoiseCoordinates2)) : (dd._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), dd._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), dd.metadata = this.metadata
      }
    }
    sd._Count = 0;
    var ad = kd(41082);
    class Md {
      get currentFrame() {
        return this._currentFrame
      }
      get _evaluatedFrom() {
        return this._playbackFrom
      }
      get _evaluatedTo() {
        return this._playbackTo
      }
      get _evaluatedProgress() {
        return this._playbackProgress
      }
      get _evaluatedSyncRoot() {
        return this._playbackSyncRoot
      }
      get _evaluatedJump() {
        return this._playbackJumped
      }
      get weight() {
        return this._weight
      }
      get currentValue() {
        return this._currentValue
      }
      get targetPath() {
        return this._targetPath
      }
      get target() {
        return this._currentActiveTarget
      }
      get isAdditive() {
        return this._host && this._host.isAdditive
      }
      constructor(dd, Jd, kd, pd) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Jd, this.sA = dd, this._scene = kd, this._host = pd, this._activeTargets = [], Jd._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Od: this._getCorrectLoopMode()
          }, this._animation.dataType === ad.c.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Wd.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const dd = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, dd)
        }
        if (this.sA instanceof Array) {
          let dd = 0;
          for (const Jd of this.sA) this._preparePath(Jd, dd), this._getOriginalValues(dd), dd++;
          this._targetIsArray = !0
        } else this._preparePath(this.sA), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Nd = Jd.getEvents();
        if (Nd && Nd.length > 0)
          for (const Wd of Nd) this._events.push(Wd._clone());
        this._enableBlending = dd && dd.animationPropertiesOverride ? dd.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = this._animation.targetPropertyPath;
        if (kd.length > 1) {
          let pd = dd;
          for (let dd = 0; dd < kd.length - 1; dd++) {
            const Jd = kd[dd];
            if (pd = pd[Jd], void 0 === pd) throw new Error(`Invalid property (${Jd}) in property path (${kd.join(".")})`)
          }
          this._targetPath = kd[kd.length - 1], this._activeTargets[Jd] = pd
        } else this._targetPath = kd[0], this._activeTargets[Jd] = dd;
        if (void 0 === this._activeTargets[Jd][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${kd.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.sA instanceof Array) {
            let dd = 0;
            for (const Jd of this.sA) void 0 !== this._originalValue[dd] && this._setValue(Jd, this._activeTargets[dd], this._originalValue[dd], -1, dd), dd++
          } else void 0 !== this._originalValue[0] && this._setValue(this.sA, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let dd = 0; dd < this._events.length; dd++) this._events[dd].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const dd = this._animation.runtimeAnimations.indexOf(this);
        dd > -1 && this._animation.runtimeAnimations.splice(dd, 1)
      }
      setValue(dd, Jd) {
        if (this._targetIsArray)
          for (let kd = 0; kd < this.sA.length; kd++) {
            const pd = this.sA[kd];
            this._setValue(pd, this._activeTargets[kd], dd, Jd, kd)
          } else this._setValue(this.sA, this._directTarget, dd, Jd, 0)
      }
      _getOriginalValues() {
        let dd, Jd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const kd = this._activeTargets[Jd];
        if (ad.c.InheritOriginalValueFromActiveAnimations) {
          const dd = this._scene._activeAnimatables;
          for (let pd = 0; pd < dd.length; pd++) {
            const Nd = dd[pd]._runtimeAnimations;
            for (let dd = 0; dd < Nd.length; dd++) {
              const pd = Nd[dd];
              if (pd !== this && pd._targetPath === this._targetPath)
                for (let dd = 0; dd < pd._activeTargets.length; dd++)
                  if (pd._activeTargets[dd] === kd && void 0 !== pd._originalValue[dd]) return void(pd._originalValue[dd] && pd._originalValue[dd].clone ? this._originalValue[Jd] = pd._originalValue[dd].clone() : this._originalValue[Jd] = pd._originalValue[dd])
            }
          }
        }
        dd = kd.getLocalMatrix && "_matrix" === this._targetPath ? kd.getLocalMatrix() : kd[this._targetPath], dd && dd.clone ? this._originalValue[Jd] = dd.clone() : this._originalValue[Jd] = dd
      }
      _registerTargetForLateAnimationBinding(dd, Jd) {
        const kd = dd.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(kd), kd._lateAnimationHolders || (kd._lateAnimationHolders = {}), kd._lateAnimationHolders[dd.targetPath] || (kd._lateAnimationHolders[dd.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Jd
        }), dd.isAdditive ? (kd._lateAnimationHolders[dd.targetPath].additiveAnimations.push(dd), kd._lateAnimationHolders[dd.targetPath].totalAdditiveWeight += dd.weight) : (kd._lateAnimationHolders[dd.targetPath].animations.push(dd), kd._lateAnimationHolders[dd.targetPath].totalWeight += dd.weight)
      }
      _setValue(dd, Jd, kd, pd, Nd) {
        const Pd = this._scene._animationWrites,
          Zd = this._scene._animationWriteCount++;
        let gd = Pd[Zd];
        if (gd || (gd = Pd[Zd] = {
            runtimeAnimation: this,
            target: dd,
            weight: pd,
            additive: !1,
            blendingFactor: 1,
            rO: !1
          }), gd.runtimeAnimation = this, gd.target = dd, gd.weight = pd, gd.additive = this.isAdditive, gd.rO = !1, this._currentActiveTarget = Jd, this._weight = pd, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const dd = Jd[this._targetPath];
            dd.clone ? this._originalBlendValue = dd.clone() : this._originalBlendValue = dd
          }
          this._originalBlendValue.m ? ad.c.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Wd.b.DecomposeLerpToRef(this._originalBlendValue, kd, this._blendingFactor, this._currentValue) : this._currentValue = Wd.b.DecomposeLerp(this._originalBlendValue, kd, this._blendingFactor) : this._currentValue ? Wd.b.LerpToRef(this._originalBlendValue, kd, this._blendingFactor, this._currentValue) : this._currentValue = Wd.b.Lerp(this._originalBlendValue, kd, this._blendingFactor) : this._currentValue = ad.c._UniversalLerp(this._originalBlendValue, kd, this._blendingFactor);
          const pd = dd && dd.animationPropertiesOverride ? dd.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          gd.blendingFactor = this._blendingFactor, this._blendingFactor += pd
        } else gd.blendingFactor = 1, this._currentValue ? this._currentValue.Fs ? this._currentValue.Fs(kd) : this._currentValue = kd : this._currentValue = kd?.clone ? kd.clone() : kd; - 1 !== pd ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Nd]) : this._animationState.Od === ad.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Nd], Jd[this._targetPath]) : Jd[this._targetPath] = this._originalValue[Nd] + this._currentValue : Jd[this._targetPath] = this._currentValue, dd.dkd && dd.dkd(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.sA && this.sA.animationPropertiesOverride) {
          return "MorphTarget" === this.sA.getClassName?.() && null == this.sA._animationPropertiesOverride ? this._animation.Od : this.sA.animationPropertiesOverride.Od
        }
        return this._animation.Od
      }
      goToFrame(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const kd = this._animation.getKeys();
        dd < kd[0].frame ? dd = kd[0].frame : dd > kd[kd.length - 1].frame && (dd = kd[kd.length - 1].frame);
        const pd = this._events;
        if (pd.length)
          for (let Wd = 0; Wd < pd.length; Wd++) pd[Wd].onlyOnce || (pd[Wd].isDone = pd[Wd].frame < dd);
        this._currentFrame = dd;
        const Nd = this._animation._interpolate(dd, this._animationState);
        this.setValue(Nd, Jd)
      }
      _prepareForSpeedRatioChange(dd) {
        const Jd = this._previousElapsedTime * (this._animation.framePerSecond * dd) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Jd
      }
      animate(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Pd = this._animation,
          Zd = Pd.targetPropertyPath;
        if (!Zd || Zd.length < 1) return this._stopped = !0, !1;
        let gd, Cd = !0;
        const Kd = this._events;
        let od;
        if (this._coreRuntimeAnimation) od = kd - Jd, gd = this._coreRuntimeAnimation.currentFrame, this._currentFrame = gd, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Wd;
          (Jd < this._minFrame || Jd > this._maxFrame) && (Jd = this._minFrame), (kd < this._minFrame || kd > this._maxFrame) && (kd = this._maxFrame), od = kd - Jd;
          let Zd = dd * (Pd.framePerSecond * Nd) / 1e3 + this._absoluteFrameOffset,
            ld = 0,
            Qd = !1;
          const Ld = pd && this._animationState.Od === ad.c.ANIMATIONLOOPMODE_YOYO;
          if (Ld) {
            const dd = (Zd - Jd) / od,
              kd = Math.sin(dd * Math.PI);
            Zd = Math.abs(kd) * od + Jd;
            const pd = kd >= 0 ? 1 : -1;
            this._yoyoDirection !== pd && (Qd = !0), this._yoyoDirection = pd
          }
          if (this._previousElapsedTime = dd, this._previousAbsoluteFrame = Zd, !pd && kd >= Jd && (Zd >= od && Nd > 0 || Zd <= 0 && Nd < 0)) Cd = !1, ld = Pd.evaluate(kd);
          else if (!pd && Jd >= kd && (Zd <= od && Nd < 0 || Zd >= 0 && Nd > 0)) Cd = !1, ld = Pd.evaluate(Jd);
          else if (this._animationState.Od !== ad.c.ANIMATIONLOOPMODE_CYCLE) {
            const dd = kd.toString() + Jd.toString();
            if (!this._offsetsCache[dd]) {
              this._animationState.repeatCount = 0, this._animationState.Od = ad.c.ANIMATIONLOOPMODE_CYCLE;
              const pd = Pd._interpolate(Jd, this._animationState),
                Nd = Pd._interpolate(kd, this._animationState);
              switch (this._animationState.Od = this._getCorrectLoopMode(), Pd.dataType) {
                case ad.c.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[dd] = Nd - pd;
                  break;
                case ad.c.ANIMATIONTYPE_QUATERNION:
                case ad.c.ANIMATIONTYPE_VECTOR3:
                case ad.c.ANIMATIONTYPE_VECTOR2:
                case ad.c.ANIMATIONTYPE_SIZE:
                case ad.c.ANIMATIONTYPE_COLOR3:
                case ad.c.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[dd] = Nd.subtract(pd)
              }
              this._highLimitsCache[dd] = Nd
            }
            ld = this._highLimitsCache[dd], Wd = this._offsetsCache[dd]
          }
          if (void 0 === Wd) switch (Pd.dataType) {
            case ad.c.ANIMATIONTYPE_FLOAT:
              Wd = 0;
              break;
            case ad.c.ANIMATIONTYPE_QUATERNION:
              Wd = ad.p;
              break;
            case ad.c.ANIMATIONTYPE_VECTOR3:
              Wd = ad.x;
              break;
            case ad.c.ANIMATIONTYPE_VECTOR2:
              Wd = ad.u;
              break;
            case ad.c.ANIMATIONTYPE_SIZE:
              Wd = ad.q;
              break;
            case ad.c.ANIMATIONTYPE_COLOR3:
              Wd = ad.i;
              break;
            case ad.c.ANIMATIONTYPE_COLOR4:
              Wd = ad.l
          }
          const Od = this._host ? this._host.syncRoot : null;
          let ed, Rd = this._playbackFrames,
            Id = !1;
          if (Od) {
            const dd = Od.toFrame - Od.fromFrame,
              kd = Od.masterFrame,
              pd = (kd - Od.fromFrame) / dd;
            gd = Jd + od * pd;
            const Nd = Od.getAnimations()[0];
            if (Nd && 0 !== dd) {
              const dd = od * pd,
                Jd = Nd._playbackTo - Nd._playbackFrom;
              if (0 !== Jd && Nd._playbackFrom <= Od.fromFrame && Nd._playbackTo >= Od.toFrame) {
                Rd = od * Math.round((Nd._playbackFrames - (Nd._currentFrame - Nd._playbackFrom)) / Jd) + dd
              } else Id = (kd - this._playbackSyncMasterFrame) * (Nd._playbackFrames - this._playbackSyncMasterPlayed) < 0, Rd = dd;
              Id = Id || Nd._playbackJumped, this._playbackSyncMasterPlayed = Nd._playbackFrames, this._playbackSyncMasterFrame = kd
            }
          } else gd = Zd > 0 && Jd > kd || Zd < 0 && Jd < kd ? Cd && 0 !== od ? kd + Zd % od : Jd : Cd && 0 !== od ? Jd + Zd % od : kd;
          if (!Ld && (Nd > 0 && this.currentFrame > gd || Nd < 0 && this.currentFrame < gd) || Ld && Qd) {
            this._onLoop();
            for (let dd = 0; dd < Kd.length; dd++) Kd[dd].onlyOnce || (Kd[dd].isDone = !1);
            this._animationState.key = Nd > 0 ? 0 : Pd.getKeys().length - 1
          }
          if (this._currentFrame = gd, this._animationState.repeatCount = 0 === od ? 0 : Zd / od | 0, this._animationState.highLimitValue = ld, this._animationState.offsetValue = Wd, this._playbackFrom = Jd, this._playbackTo = kd, this._playbackJumped = Id, this._playbackSyncRoot = Od, Od) ed = Rd;
          else if (Cd) ed = Ld ? gd === Jd && Zd === kd ? od : gd - Jd : Zd;
          else {
            const dd = 0 !== od ? Math.floor(this._playbackFrames / od) : 0;
            ed = (gd === kd ? dd + 1 : dd) * od
          }
          this._playbackFrames = ed, this._playbackProgress = this._animationState.Od === ad.c.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? od : ed
        }
        const ld = Pd._interpolate(gd, this._animationState);
        if (this.setValue(ld, Wd), Kd.length)
          for (let Qd = 0; Qd < Kd.length; Qd++)
            if (od >= 0 && gd >= Kd[Qd].frame && Kd[Qd].frame >= Jd || od < 0 && gd <= Kd[Qd].frame && Kd[Qd].frame <= Jd) {
              const dd = Kd[Qd];
              dd.isDone || (dd.onlyOnce && (Kd.splice(Qd, 1), Qd--), dd.isDone = !0, dd.action(gd))
            } return Cd || (this._stopped = !0), Cd
      }
    }
    var Fd = kd(39876);
    class Yd {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(dd) {
        this._weight = -1 !== dd ? Math.min(Math.max(dd, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(dd) {
        for (let Jd = 0; Jd < this._runtimeAnimations.length; Jd++) {
          this._runtimeAnimations[Jd]._prepareForSpeedRatioChange(dd)
        }
        this._speedRatio = dd, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Wd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Zd = arguments.length > 6 ? arguments[6] : void 0,
          gd = arguments.length > 7 ? arguments[7] : void 0,
          Cd = arguments.length > 8 ? arguments[8] : void 0,
          Kd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          od = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Jd, this.fromFrame = kd, this.toFrame = pd, this.loopAnimation = Wd, this.onAnimationEnd = Zd, this.onAnimationLoop = Cd, this.isAdditive = Kd, this.playOrder = od, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.YG = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Nd.e, this.onAnimationLoopObservable = new Nd.e, this._scene = dd, gd && this.appendAnimations(Jd, gd), this._speedRatio = Pd, dd._activeAnimatables.push(this)
      }
      syncWith(dd) {
        if (this._syncRoot = dd, dd) {
          const dd = this._scene._activeAnimatables.indexOf(this);
          dd > -1 && (this._scene._activeAnimatables.splice(dd, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(dd, Jd) {
        for (let kd = 0; kd < Jd.length; kd++) {
          const pd = Jd[kd],
            Nd = new Md(dd, pd, this._scene, this);
          Nd._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Nd)
        }
      }
      getAnimationByTargetProperty(dd) {
        const Jd = this._runtimeAnimations;
        for (let kd = 0; kd < Jd.length; kd++)
          if (Jd[kd].animation.targetProperty === dd) return Jd[kd].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(dd) {
        const Jd = this._runtimeAnimations;
        for (let kd = 0; kd < Jd.length; kd++)
          if (Jd[kd].animation.targetProperty === dd) return Jd[kd];
        return null
      }
      reset() {
        const dd = this._runtimeAnimations;
        for (let Jd = 0; Jd < dd.length; Jd++) dd[Jd].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(dd) {
        const Jd = this._runtimeAnimations;
        for (let kd = 0; kd < Jd.length; kd++) Jd[kd].animation.enableBlending = !0, Jd[kd].animation.blendingSpeed = dd
      }
      disableBlending() {
        const dd = this._runtimeAnimations;
        for (let Jd = 0; Jd < dd.length; Jd++) dd[Jd].animation.enableBlending = !1
      }
      goToFrame(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = this._runtimeAnimations;
        if (kd[0]) {
          const Jd = kd[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? kd[0].currentFrame;
          const pd = 0 === this.speedRatio ? 0 : (dd - this._frameToSyncFromJump) / Jd * 1e3 / this.speedRatio;
          this._manualJumpDelay = -pd
        }
        for (let pd = 0; pd < kd.length; pd++) kd[pd].goToFrame(dd, Jd ? this._weight : -1);
        this._goToFrame = dd
      }
      get paused() {
        return this.YG
      }
      pause() {
        this.YG || (this.YG = !0)
      }
      restart() {
        this.YG = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (dd || Jd) {
          const Nd = this._scene._activeAnimatables.indexOf(this);
          if (Nd > -1) {
            const Wd = this._runtimeAnimations;
            for (let kd = Wd.length - 1; kd >= 0; kd--) {
              const pd = Wd[kd];
              dd && pd.animation.name != dd || (Jd && !Jd(pd.target) || (pd.dispose(), Wd.splice(kd, 1)))
            }
            0 == Wd.length && (kd || this._scene._activeAnimatables.splice(Nd, 1), pd || this._raiseOnAnimationEnd())
          }
        } else {
          const dd = this._scene._activeAnimatables.indexOf(this);
          if (dd > -1) {
            kd || this._scene._activeAnimatables.splice(dd, 1);
            const Jd = this._runtimeAnimations;
            for (let dd = 0; dd < Jd.length; dd++) Jd[dd].dispose();
            this._runtimeAnimations.length = 0, pd || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((dd => {
          this.onAnimationEndObservable.add((() => {
            dd(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(dd) {
        if (this.YG) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = dd), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = dd, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += dd - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Yd.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Jd = !1;
        const kd = this._runtimeAnimations;
        let pd;
        for (pd = 0; pd < kd.length; pd++) {
          const Nd = kd[pd].animate(dd - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Jd = Jd || Nd
        }
        if (this.animationStarted = Jd, !Jd) {
          if (this.disposeOnEnd)
            for (pd = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(pd, 1), pd = 0; pd < kd.length; pd++) kd[pd].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Jd
      }
    }

    function md(dd) {
      if (0 === dd.totalWeight && 0 === dd.totalAdditiveWeight) return dd.originalValue;
      let Jd = 1;
      const kd = Wd.h.IL[0],
        pd = Wd.h.IL[1],
        Nd = Wd.h.Quaternion[0];
      let Pd = 0;
      const Zd = dd.animations[0],
        gd = dd.originalValue;
      let Cd, Kd = !1;
      if (dd.totalWeight < 1) Cd = 1 - dd.totalWeight, gd.decompose(pd, Nd, kd);
      else {
        if (Pd = 1, Jd = dd.totalWeight, Cd = Zd.weight / Jd, 1 == Cd) {
          if (!dd.totalAdditiveWeight) return Zd.currentValue;
          Kd = !0
        }
        Zd.currentValue.decompose(pd, Nd, kd)
      }
      if (!Kd) {
        pd.scaleInPlace(Cd), kd.scaleInPlace(Cd), Nd.scaleInPlace(Cd);
        for (let Zd = Pd; Zd < dd.animations.length; Zd++) {
          const Pd = dd.animations[Zd];
          if (0 === Pd.weight) continue;
          Cd = Pd.weight / Jd;
          const gd = Wd.h.IL[2],
            Kd = Wd.h.IL[3],
            od = Wd.h.Quaternion[1];
          Pd.currentValue.decompose(Kd, od, gd), Kd.scaleAndAddToRef(Cd, pd), od.scaleAndAddToRef(Wd.d.Dot(Nd, od) > 0 ? Cd : -Cd, Nd), gd.scaleAndAddToRef(Cd, kd)
        }
        Nd.normalize()
      }
      for (let ld = 0; ld < dd.additiveAnimations.length; ld++) {
        const Jd = dd.additiveAnimations[ld];
        if (0 === Jd.weight) continue;
        const Pd = Wd.h.IL[2],
          Zd = Wd.h.IL[3],
          gd = Wd.h.Quaternion[1];
        Jd.currentValue.decompose(Zd, gd, Pd), Zd.multiplyToRef(pd, Zd), Wd.n.LerpToRef(pd, Zd, Jd.weight, pd), Nd.multiplyToRef(gd, gd), Wd.d.SlerpToRef(Nd, gd, Jd.weight, Nd), Pd.scaleAndAddToRef(Jd.weight, kd)
      }
      const od = Zd ? Zd._animationState.workValue : Wd.h.Matrix[0].clone();
      return Wd.b.ComposeToRef(pd, Nd, kd, od), od
    }

    function bd(dd, Jd) {
      if (0 === dd.totalWeight && 0 === dd.totalAdditiveWeight) return Jd;
      const kd = dd.animations[0],
        pd = dd.originalValue;
      let Nd = Jd;
      if (0 === dd.totalWeight && dd.totalAdditiveWeight > 0) Nd.Fs(pd);
      else if (1 === dd.animations.length) {
        if (Wd.d.SlerpToRef(pd, kd.currentValue, Math.min(1, dd.totalWeight), Nd), 0 === dd.totalAdditiveWeight) return Nd
      } else if (dd.animations.length > 1) {
        let kd, Pd, Zd = 1;
        if (dd.totalWeight < 1) {
          const Jd = 1 - dd.totalWeight;
          kd = [], Pd = [], kd.push(pd), Pd.push(Jd)
        } else {
          if (2 === dd.animations.length && (Wd.d.SlerpToRef(dd.animations[0].currentValue, dd.animations[1].currentValue, dd.animations[1].weight / dd.totalWeight, Jd), 0 === dd.totalAdditiveWeight)) return Jd;
          kd = [], Pd = [], Zd = dd.totalWeight
        }
        for (let Jd = 0; Jd < dd.animations.length; Jd++) {
          const pd = dd.animations[Jd];
          kd.push(pd.currentValue), Pd.push(pd.weight / Zd)
        }
        let gd = 0;
        for (let dd = 0; dd < kd.length;) dd ? (gd += Pd[dd], Wd.d.SlerpToRef(Nd, kd[dd], Pd[dd] / gd, Nd), dd++) : (Wd.d.SlerpToRef(kd[dd], kd[dd + 1], Pd[dd + 1] / (Pd[dd] + Pd[dd + 1]), Jd), Nd = Jd, gd = Pd[dd] + Pd[dd + 1], dd += 2)
      }
      for (let Pd = 0; Pd < dd.additiveAnimations.length; Pd++) {
        const Jd = dd.additiveAnimations[Pd];
        0 !== Jd.weight && (Nd.multiplyToRef(Jd.currentValue, Wd.h.Quaternion[0]), Wd.d.SlerpToRef(Nd, Wd.h.Quaternion[0], Jd.weight, Nd))
      }
      return Nd
    }

    function Sd(dd, Jd) {
      Jd && (Jd.prototype.copyAnimationRange = function(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new ad.c(this.name, "_matrix", dd.animations[0].framePerSecond, ad.c.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Wd = dd.animations[0].getRange(Jd);
        if (!Wd) return !1;
        const Pd = Wd.from,
          Zd = Wd.to,
          gd = dd.animations[0].getKeys(),
          Cd = dd.length,
          Kd = dd.getParent(),
          od = this.getParent(),
          ld = pd && Kd && Cd && this.length && Cd !== this.length,
          Qd = ld && od && Kd ? od.length / Kd.length : 1,
          Ld = pd && !od && Nd && (1 !== Nd.x || 1 !== Nd.y || 1 !== Nd.z),
          Od = this.animations[0].getKeys();
        let ed, Rd, Id;
        for (let Gd = 0, vd = gd.length; Gd < vd; Gd++) ed = gd[Gd], ed.frame >= Pd && ed.frame <= Zd && (pd ? (Id = ed.value.clone(), ld ? (Rd = Id.getTranslation(), Id.setTranslation(Rd.scaleInPlace(Qd))) : Ld && Nd ? (Rd = Id.getTranslation(), Id.setTranslation(Rd.multiplyInPlace(Nd))) : Id = ed.value) : Id = ed.value, Od.push({
          frame: ed.frame + kd,
          value: Id
        }));
        return this.animations[0].createRange(Jd, Pd + kd, Zd + kd), !0
      }), dd && (dd.prototype._animate = function(dd) {
        const Jd = this._animationWrites,
          kd = this._animationWriteCount;
        let pd = 0;
        for (let Wd = this._animationStepWriteCount; Wd < kd; Wd++) {
          const dd = Jd[Wd];
          dd.rO && -1 === dd.weight || (dd.rO = !0, Jd[Wd] = Jd[pd], Jd[pd] = dd, pd++)
        }
        for (let Wd = pd; Wd < kd; Wd++) {
          const dd = Jd[Wd];
          dd.runtimeAnimation = null, dd.target = null
        }
        if (this._animationWriteCount = pd, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Nd = Fd.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Nd
        }
        this.deltaTime = void 0 !== dd ? dd : this.useConstantAnimationDeltaTime ? 16 : (Nd - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Nd;
        const Pd = this._activeAnimatables;
        if (0 === Pd.length) return;
        this._animationTime += this.deltaTime;
        const Zd = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Wd = 0; Wd < Pd.length; Wd++) {
          const dd = Pd[Wd];
          !dd._animate(Zd) && dd.disposeOnEnd && Wd--
        }! function(dd) {
          if (dd._registeredForLateAnimationBindings.length) {
            for (let Jd = 0; Jd < dd._registeredForLateAnimationBindings.length; Jd++) {
              const kd = dd._registeredForLateAnimationBindings.data[Jd];
              for (const dd in kd._lateAnimationHolders) {
                const Jd = kd._lateAnimationHolders[dd],
                  pd = Jd.animations[0],
                  Nd = Jd.originalValue;
                if (void 0 === Nd || null === Nd) continue;
                const Pd = ad.c.AllowMatrixDecomposeForInterpolation && Nd.m;
                let Zd = kd[dd];
                if (Pd) Zd = md(Jd);
                else if (void 0 !== Nd.w) Zd = bd(Jd, Zd || Wd.d.Identity());
                else {
                  let dd = 0,
                    kd = 1;
                  const Wd = pd && pd._animationState.Od === ad.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Jd.totalWeight < 1) Zd = Wd ? Nd.clone ? Nd.clone() : Nd : pd && Nd.scale ? Nd.scale(1 - Jd.totalWeight) : pd ? Nd * (1 - Jd.totalWeight) : Nd.clone ? Nd.clone() : Nd;
                  else if (pd) {
                    kd = Jd.totalWeight;
                    const Pd = pd.weight / kd;
                    Zd = 1 !== Pd ? pd.currentValue.scale ? pd.currentValue.scale(Pd) : pd.currentValue * Pd : (Jd.animations.length > 1 || Jd.additiveAnimations.length > 0) && pd.currentValue.clone ? pd.currentValue.clone() : pd.currentValue, Wd && (Zd.addToRef ? Zd.addToRef(Nd, Zd) : Zd += Nd), dd = 1
                  }
                  for (let pd = dd; pd < Jd.animations.length; pd++) {
                    const dd = Jd.animations[pd],
                      Nd = dd.weight / kd;
                    Nd && (dd.currentValue.scaleAndAddToRef ? dd.currentValue.scaleAndAddToRef(Nd, Zd) : Zd += dd.currentValue * Nd)
                  }
                  for (let pd = 0; pd < Jd.additiveAnimations.length; pd++) {
                    const dd = Jd.additiveAnimations[pd],
                      kd = dd.weight;
                    kd && (dd.currentValue.scaleAndAddToRef ? dd.currentValue.scaleAndAddToRef(kd, Zd) : Zd += dd.currentValue * kd)
                  }
                }
                kd[dd] = Zd
              }
              kd._lateAnimationHolders = {}
            }
            dd._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, dd.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((dd, Jd) => dd.playOrder - Jd.playOrder))
      }, dd.prototype.beginWeightedAnimation = function(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Pd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = arguments.length > 7 ? arguments[7] : void 0,
          gd = arguments.length > 8 ? arguments[8] : void 0,
          Cd = arguments.length > 9 ? arguments[9] : void 0,
          Kd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const od = this.beginAnimation(dd, Jd, kd, Nd, Wd, Pd, Zd, !1, gd, Cd, Kd);
        return od.weight = pd, od
      }, dd.prototype.beginAnimation = function(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Wd = arguments.length > 5 ? arguments[5] : void 0,
          Pd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          gd = arguments.length > 8 ? arguments[8] : void 0,
          Cd = arguments.length > 9 ? arguments[9] : void 0,
          Kd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Nd < 0) {
          const dd = Jd;
          Jd = kd, kd = dd, Nd = -Nd
        }
        Jd > kd && (Nd = -Nd), Zd && this.stopAnimation(dd, void 0, gd), Pd || (Pd = new Yd(this, dd, Jd, kd, pd, Nd, Wd, void 0, Cd, Kd));
        const od = !gd || gd(dd);
        if (dd.animations && od && Pd.appendAnimations(dd, dd.animations), dd.getAnimatables) {
          const Kd = dd.getAnimatables();
          for (let dd = 0; dd < Kd.length; dd++) this.beginAnimation(Kd[dd], Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd)
        }
        return Pd.reset(), Pd
      }, dd.prototype.beginHierarchyAnimation = function(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Pd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = arguments.length > 7 ? arguments[7] : void 0,
          gd = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Cd = arguments.length > 9 ? arguments[9] : void 0,
          Kd = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const od = dd.getDescendants(Jd),
          ld = [];
        ld.push(this.beginAnimation(dd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, void 0, Kd));
        for (const Qd of od) ld.push(this.beginAnimation(Qd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, void 0, Kd));
        return ld
      }, dd.prototype.beginDirectAnimation = function(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Wd < 0) {
          const dd = kd;
          kd = pd, pd = dd, Wd = -Wd
        }
        kd > pd && (Wd = -Wd);
        return new Yd(this, dd, kd, pd, Nd, Wd, arguments.length > 6 ? arguments[6] : void 0, Jd, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, dd.prototype.beginDirectHierarchyAnimation = function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        let Cd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Kd = dd.getDescendants(Jd),
          od = [];
        od.push(this.beginDirectAnimation(dd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd));
        for (const ld of Kd) od.push(this.beginDirectAnimation(ld, kd, pd, Nd, Wd, Pd, Zd, gd, Cd));
        return od
      }, dd.prototype.getAnimatableByTarget = function(dd) {
        for (let Jd = 0; Jd < this._activeAnimatables.length; Jd++)
          if (this._activeAnimatables[Jd].target === dd) return this._activeAnimatables[Jd];
        return null
      }, dd.prototype.getAllAnimatablesByTarget = function(dd) {
        const Jd = [];
        for (let kd = 0; kd < this._activeAnimatables.length; kd++) this._activeAnimatables[kd].target === dd && Jd.push(this._activeAnimatables[kd]);
        return Jd
      }, dd.prototype.stopAnimation = function(dd, Jd, kd) {
        const pd = this.getAllAnimatablesByTarget(dd);
        for (const Nd of pd) Nd.stop(Jd, kd)
      }, dd.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let dd = 0; dd < this._activeAnimatables.length; dd++) this._activeAnimatables[dd].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const dd of this.animationGroups) dd.stop()
      })
    }
    Yd.ProcessPausedAnimatables = !1;
    var jd, Xd = kd(37267),
      fd = kd(40205),
      nd = kd(39860);
    class Ud extends fd.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(dd) {
        (dd.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Fs(dd), this._markAsDirtyAndDecompose())
      }
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Zd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(dd, Jd.Wm(), !1), this.name = dd, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Jd, this._localMatrix = pd?.clone() ?? Wd.b.Identity(), this._restMatrix = Nd ?? this._localMatrix.clone(), this._bindMatrix = Pd ?? this._localMatrix.clone(), this._index = Zd, this._absoluteMatrix = new Wd.b, this._absoluteBindMatrix = new Wd.b, this._absoluteInverseBindMatrix = new Wd.b, this._finalMatrix = new Wd.b, Jd.bones.push(this), this.setParent(kd, !1), this._updateAbsoluteBindMatrices()
      }
      getClassName() {
        return "Bone"
      }
      getSkeleton() {
        return this._skeleton
      }
      get parent() {
        return this._parentNode
      }
      getParent() {
        return this.parent
      }
      getChildren() {
        return this.children
      }
      getIndex() {
        return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
      }
      set parent(dd) {
        this.setParent(dd)
      }
      setParent(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== dd) {
          if (this.parent) {
            const dd = this.parent.children.indexOf(this); - 1 !== dd && this.parent.children.splice(dd, 1)
          }
          this._parentNode = dd, this.parent && this.parent.children.push(this), Jd && this._updateAbsoluteBindMatrices(), this.dkd()
        }
      }
      getLocalMatrix() {
        return this._compose(), this._localMatrix
      }
      getBindMatrix() {
        return this._bindMatrix
      }
      getBaseMatrix() {
        return this.getBindMatrix()
      }
      getRestMatrix() {
        return this._restMatrix
      }
      getRestPose() {
        return this.getRestMatrix()
      }
      setRestMatrix(dd) {
        this._restMatrix.Fs(dd)
      }
      setRestPose(dd) {
        this.setRestMatrix(dd)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(dd) {
        this.o3(dd)
      }
      setBindPose(dd) {
        this.setBindMatrix(dd)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const dd = Wd.h.IL[0],
            Jd = Wd.h.Quaternion[0],
            kd = Wd.h.IL[1];
          this.getRestMatrix().decompose(dd, Jd, kd), this._linkedTransformNode.position.Fs(kd), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Wd.d.Identity(), this._linkedTransformNode.rotationQuaternion.Fs(Jd), this._linkedTransformNode.fp.Fs(dd)
        } else this._matrix = this._restMatrix
      }
      getAbsoluteInverseBindMatrix() {
        return this._absoluteInverseBindMatrix
      }
      getInvertedAbsoluteTransform() {
        return this.getAbsoluteInverseBindMatrix()
      }
      getAbsoluteMatrix() {
        return this._skeleton.computeAbsoluteMatrices(), this._absoluteMatrix
      }
      getAbsoluteTransform() {
        return this.getAbsoluteMatrix()
      }
      linkTransformNode(dd) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = dd, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.OJd
      }
      set position(dd) {
        this._decompose(), this.OJd.Fs(dd), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(dd) {
        this.setRotation(dd)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(dd) {
        this.setRotationQuaternion(dd)
      }
      get fp() {
        return this.getScale()
      }
      set fp(dd) {
        this.setScale(dd)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Wd.n.Zero(), this._localRotation = Wd.d.Zero(), this.OJd = Wd.n.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.OJd))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Wd.b.ComposeToRef(this._localScaling, this._localRotation, this.OJd, this._localMatrix)) : this._needToCompose = !1)
      }
      o3(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Fs(dd), Jd && this._updateAbsoluteBindMatrices(), kd ? this._matrix = dd : this.dkd()
      }
      _updateAbsoluteBindMatrices(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (dd || (dd = this._bindMatrix), this.parent ? dd.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Fs(dd), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Jd)
          for (let kd = 0; kd < this.children.length; kd++) this.children[kd]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      dkd() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.dkd(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.dkd(), this._needToDecompose = !0
      }
      _updatePosition(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Nd = this.getLocalMatrix();
        if (0 == Jd) pd ? (Nd.addAtIndex(12, dd.x), Nd.addAtIndex(13, dd.y), Nd.addAtIndex(14, dd.z)) : Nd.setTranslationFromFloats(dd.x, dd.y, dd.z);
        else {
          const Jd = Ud._TmpMats[0],
            Pd = Ud._TmpVecs[0];
          this.parent ? (Jd.Fs(this.parent.getAbsoluteMatrix()), kd && Jd.multiplyToRef(kd.getWorldMatrix(), Jd)) : Wd.b.IdentityToRef(Jd), pd && Jd.setTranslationFromFloats(0, 0, 0), Jd.invert(), Wd.n.TransformCoordinatesToRef(dd, Jd, Pd), pd ? (Nd.addAtIndex(12, Pd.x), Nd.addAtIndex(13, Pd.y), Nd.addAtIndex(14, Pd.z)) : Nd.setTranslationFromFloats(Pd.x, Pd.y, Pd.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(dd, Jd, kd, !0)
      }
      setPosition(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(dd, Jd, kd, !1)
      }
      setAbsolutePosition(dd, Jd) {
        this.setPosition(dd, 1, Jd)
      }
      scale(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Nd = this.getLocalMatrix(),
          Pd = Ud._TmpMats[0];
        Wd.b.ScalingToRef(dd, Jd, kd, Pd), Pd.multiplyToRef(Nd, Nd), Pd.invert();
        for (const Wd of this.children) {
          const pd = Wd.getLocalMatrix();
          pd.multiplyToRef(Pd, pd), pd.multiplyAtIndex(12, dd), pd.multiplyAtIndex(13, Jd), pd.multiplyAtIndex(14, kd), Wd._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), pd)
          for (const Wd of this.children) Wd.scale(dd, Jd, kd, pd)
      }
      setScale(dd) {
        this._decompose(), this._localScaling.Fs(dd), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(dd) {
        this._decompose(), dd.Fs(this._localScaling)
      }
      setYawPitchRoll(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === pd) {
          const Pd = Ud._TmpQuat;
          return Wd.d.RotationYawPitchRollToRef(dd, Jd, kd, Pd), void this.setRotationQuaternion(Pd, pd, Nd)
        }
        const Pd = Ud._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Pd, Nd)) return;
        const Zd = Ud._TmpMats[1];
        Wd.b.RotationYawPitchRollToRef(dd, Jd, kd, Zd), Pd.multiplyToRef(Zd, Zd), this._rotateWithMatrix(Zd, pd, Nd)
      }
      rotate(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        const Nd = Ud._TmpMats[0];
        Nd.setTranslationFromFloats(0, 0, 0), Wd.b.RotationAxisToRef(dd, Jd, Nd), this._rotateWithMatrix(Nd, kd, pd)
      }
      setAxisAngle(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === kd) {
          const Nd = Ud._TmpQuat;
          return Wd.d.RotationAxisToRef(dd, Jd, Nd), void this.setRotationQuaternion(Nd, kd, pd)
        }
        const Nd = Ud._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Nd, pd)) return;
        const Pd = Ud._TmpMats[1];
        Wd.b.RotationAxisToRef(dd, Jd, Pd), Nd.multiplyToRef(Pd, Pd), this._rotateWithMatrix(Pd, kd, pd)
      }
      setRotation(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(dd.y, dd.x, dd.z, Jd, kd)
      }
      setRotationQuaternion(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Jd) return this._decompose(), this._localRotation.Fs(dd), void this._markAsDirtyAndCompose();
        const pd = Ud._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(pd, kd)) return;
        const Nd = Ud._TmpMats[1];
        Wd.b.FromQuaternionToRef(dd, Nd), pd.multiplyToRef(Nd, Nd), this._rotateWithMatrix(Nd, Jd, kd)
      }
      setRotationMatrix(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Jd) {
          const pd = Ud._TmpQuat;
          return Wd.d.FromRotationMatrixToRef(dd, pd), void this.setRotationQuaternion(pd, Jd, kd)
        }
        const pd = Ud._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(pd, kd)) return;
        const Nd = Ud._TmpMats[1];
        Nd.Fs(dd), pd.multiplyToRef(dd, Nd), this._rotateWithMatrix(Nd, Jd, kd)
      }
      _rotateWithMatrix(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const pd = this.getLocalMatrix(),
          Nd = pd.m[12],
          Wd = pd.m[13],
          Pd = pd.m[14],
          Zd = this.getParent(),
          gd = Ud._TmpMats[3],
          Cd = Ud._TmpMats[4];
        Zd && 1 == Jd ? (kd ? (gd.Fs(kd.getWorldMatrix()), Zd.getAbsoluteMatrix().multiplyToRef(gd, gd)) : gd.Fs(Zd.getAbsoluteMatrix()), Cd.Fs(gd), Cd.invert(), pd.multiplyToRef(gd, pd), pd.multiplyToRef(dd, pd), pd.multiplyToRef(Cd, pd)) : 1 == Jd && kd ? (gd.Fs(kd.getWorldMatrix()), Cd.Fs(gd), Cd.invert(), pd.multiplyToRef(gd, pd), pd.multiplyToRef(dd, pd), pd.multiplyToRef(Cd, pd)) : pd.multiplyToRef(dd, pd), pd.setTranslationFromFloats(Nd, Wd, Pd), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(dd, Jd) {
        const kd = Ud._TmpMats[2];
        return dd.Fs(this.getAbsoluteMatrix()), Jd ? (dd.multiplyToRef(Jd.getWorldMatrix(), dd), Wd.b.ScalingToRef(Jd.fp.x, Jd.fp.y, Jd.fp.z, kd)) : Wd.b.IdentityToRef(kd), dd.invert(), !isNaN(dd.m[0]) && (kd.multiplyAtIndex(0, this._scalingDeterminant), dd.multiplyToRef(kd, dd), !0)
      }
      yI() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const kd = Wd.n.Zero();
        return this.getPositionToRef(dd, Jd, kd), kd
      }
      getPositionToRef() {
        let dd = arguments.length > 1 ? arguments[1] : void 0,
          Jd = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const dd = this.getLocalMatrix();
          Jd.x = dd.m[12], Jd.y = dd.m[13], Jd.z = dd.m[14]
        } else {
          const kd = Ud._TmpMats[0].Fs(this.getAbsoluteMatrix());
          dd && kd.multiplyToRef(dd.getWorldMatrix(), kd), Jd.x = kd.m[12], Jd.y = kd.m[13], Jd.z = kd.m[14]
        }
      }
      getAbsolutePosition() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Jd = Wd.n.Zero();
        return this.getPositionToRef(1, dd, Jd), Jd
      }
      getAbsolutePositionToRef(dd, Jd) {
        this.getPositionToRef(1, dd, Jd)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Fs(this._localMatrix);
          const dd = this._skeleton.getPoseMatrix();
          dd && this._absoluteMatrix.multiplyToRef(dd, this._absoluteMatrix)
        }
        const dd = this.children,
          Jd = dd.length;
        for (let kd = 0; kd < Jd; kd++) dd[kd].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      UH(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const kd = Wd.n.Zero();
        return this.getDirectionToRef(dd, Jd, kd), kd
      }
      getDirectionToRef(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const pd = Ud._TmpMats[0].Fs(this.getAbsoluteMatrix());
        Jd && pd.multiplyToRef(Jd.getWorldMatrix(), pd), Wd.n.TransformNormalToRef(dd, pd, kd), kd.normalize()
      }
      getRotation() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const kd = Wd.n.Zero();
        return this.getRotationToRef(dd, Jd, kd), kd
      }
      getRotationToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const pd = Ud._TmpQuat;
        this.getRotationQuaternionToRef(dd, Jd, pd), pd.toEulerAnglesToRef(kd)
      }
      getRotationQuaternion() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const kd = Wd.d.Identity();
        return this.getRotationQuaternionToRef(dd, Jd, kd), kd
      }
      getRotationQuaternionToRef() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Jd = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Jd.Fs(this._localRotation);
        else {
          const kd = Ud._TmpMats[0],
            pd = this.getAbsoluteMatrix();
          dd ? pd.multiplyToRef(dd.getWorldMatrix(), kd) : kd.Fs(pd), kd.multiplyAtIndex(0, this._scalingDeterminant), kd.multiplyAtIndex(1, this._scalingDeterminant), kd.multiplyAtIndex(2, this._scalingDeterminant), kd.decompose(void 0, Jd, void 0)
        }
      }
      getRotationMatrix() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 ? arguments[1] : void 0;
        const kd = Wd.b.Identity();
        return this.getRotationMatrixToRef(dd, Jd, kd), kd
      }
      getRotationMatrixToRef() {
        let dd = arguments.length > 1 ? arguments[1] : void 0,
          Jd = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Jd);
        else {
          const kd = Ud._TmpMats[0],
            pd = this.getAbsoluteMatrix();
          dd ? pd.multiplyToRef(dd.getWorldMatrix(), kd) : kd.Fs(pd), kd.multiplyAtIndex(0, this._scalingDeterminant), kd.multiplyAtIndex(1, this._scalingDeterminant), kd.multiplyAtIndex(2, this._scalingDeterminant), kd.getRotationMatrixToRef(Jd)
        }
      }
      getAbsolutePositionFromLocal(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const kd = Wd.n.Zero();
        return this.getAbsolutePositionFromLocalToRef(dd, Jd, kd), kd
      }
      getAbsolutePositionFromLocalToRef(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const pd = Ud._TmpMats[0].Fs(this.getAbsoluteMatrix());
        Jd && pd.multiplyToRef(Jd.getWorldMatrix(), pd), Wd.n.TransformCoordinatesToRef(dd, pd, kd)
      }
      getLocalPositionFromAbsolute(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const kd = Wd.n.Zero();
        return this.getLocalPositionFromAbsoluteToRef(dd, Jd, kd), kd
      }
      getLocalPositionFromAbsoluteToRef(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const pd = Ud._TmpMats[0].Fs(this.getAbsoluteMatrix());
        Jd && pd.multiplyToRef(Jd.getWorldMatrix(), pd), pd.invert(), Wd.n.TransformCoordinatesToRef(dd, pd, kd)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const dd = this._skeleton.bones.indexOf(this);
        if (-1 !== dd && this._skeleton.bones.splice(dd, 1), this._parentNode && this._parentNode.children) {
          const dd = this._parentNode.children,
            Jd = dd.indexOf(this); - 1 !== Jd && dd.splice(Jd, 1)
        }
        super.dispose()
      }
    }
    Ud._TmpVecs = (0, Xd.b)(2, Wd.n.Zero), Ud._TmpQuat = Wd.d.Identity(), Ud._TmpMats = (0, Xd.b)(5, Wd.b.Identity), (jd = Ud.prototype).copyAnimationRange ?? (jd.copyAnimationRange = (0, nd.j)("Bone", "copyAnimationRange"));
    var yd = kd(40062);
    let Dd = !1;
    var Td = kd(39931),
      Ed = kd(40304),
      cd = kd(40317),
      hd = kd(40308),
      rd = kd(40095);

    function ud(dd, Jd) {
      const kd = (0, Qd.RandomRange)(0, 1);
      Kd.g.LerpToRef(Jd.color1, Jd.color2, kd, dd.color)
    }

    function td(dd, Jd) {
      Jd.colorDead.subtractToRef(dd.color, Jd._colorDiff), Jd._colorDiff.scaleToRef(1 / dd.lifeTime, dd.colorStep)
    }

    function Vd(dd, Jd) {
      dd._properties.currentColorGradient = Jd._colorGradients[0], dd._properties.currentColorGradient.getColorToRef(dd.color), dd._properties.currentColor1.Fs(dd.color), Jd._colorGradients.length > 1 ? Jd._colorGradients[1].getColorToRef(dd._properties.currentColor2) : dd._properties.currentColor2.Fs(dd.color)
    }

    function zd(dd, Jd) {
      const kd = Jd._colorGradients;
      pd.k.GetCurrentGradient(Jd._ratio, kd, ((Jd, kd, pd) => {
        Jd !== dd._properties.currentColorGradient && (dd._properties.currentColor1.Fs(dd._properties.currentColor2), kd.getColorToRef(dd._properties.currentColor2), dd._properties.currentColorGradient = Jd), Kd.g.LerpToRef(dd._properties.currentColor1, dd._properties.currentColor2, pd, dd.color), dd.color.a < 0 && (dd.color.a = 0)
      }))
    }

    function Hd(dd, Jd) {
      dd.colorStep.scaleToRef(Jd._scaledUpdateSpeed, Jd._scaledColorStep), dd.color.addInPlace(Jd._scaledColorStep), dd.color.a < 0 && (dd.color.a = 0)
    }

    function wd(dd, Jd) {
      pd.k.GetCurrentGradient(Jd._ratio, Jd._angularSpeedGradients, ((Jd, kd, pd) => {
        Jd !== dd._properties.currentAngularSpeedGradient && (dd._properties.currentAngularSpeed1 = dd._properties.currentAngularSpeed2, dd._properties.currentAngularSpeed2 = kd.getFactor(), dd._properties.currentAngularSpeedGradient = Jd), dd.angularSpeed = (0, Qd.Lerp)(dd._properties.currentAngularSpeed1, dd._properties.currentAngularSpeed2, pd)
      }))
    }

    function Ad(dd, Jd) {
      dd.angle += dd.angularSpeed * Jd._scaledUpdateSpeed
    }

    function dJ(dd, Jd) {
      Jd.particleEmitterType.startDirectionFunction(Jd._emitterWorldMatrix, dd.direction, dd, Jd.isLocal, Jd._emitterInverseWorldMatrix)
    }

    function JJ(dd, Jd) {
      Jd.startDirectionFunction(Jd._emitterWorldMatrix, dd.direction, dd, Jd.isLocal)
    }

    function kJ(dd, Jd) {
      dd._properties.currentVelocityGradient = Jd._velocityGradients[0], dd._properties.currentVelocity1 = dd._properties.currentVelocityGradient.getFactor(), Jd._velocityGradients.length > 1 ? dd._properties.currentVelocity2 = Jd._velocityGradients[1].getFactor() : dd._properties.currentVelocity2 = dd._properties.currentVelocity1
    }

    function pJ(dd, Jd) {
      dd._properties.currentLimitVelocityGradient = Jd._limitVelocityGradients[0], dd._properties.currentLimitVelocity1 = dd._properties.currentLimitVelocityGradient.getFactor(), Jd._limitVelocityGradients.length > 1 ? dd._properties.currentLimitVelocity2 = Jd._limitVelocityGradients[1].getFactor() : dd._properties.currentLimitVelocity2 = dd._properties.currentLimitVelocity1
    }

    function NJ(dd, Jd) {
      pd.k.GetCurrentGradient(Jd._ratio, Jd._velocityGradients, ((Jd, kd, pd) => {
        Jd !== dd._properties.currentVelocityGradient && (dd._properties.currentVelocity1 = dd._properties.currentVelocity2, dd._properties.currentVelocity2 = kd.getFactor(), dd._properties.currentVelocityGradient = Jd), dd._properties.directionScale *= (0, Qd.Lerp)(dd._properties.currentVelocity1, dd._properties.currentVelocity2, pd)
      }))
    }

    function WJ(dd, Jd) {
      pd.k.GetCurrentGradient(Jd._ratio, Jd._limitVelocityGradients, ((kd, pd, Nd) => {
        kd !== dd._properties.currentLimitVelocityGradient && (dd._properties.currentLimitVelocity1 = dd._properties.currentLimitVelocity2, dd._properties.currentLimitVelocity2 = pd.getFactor(), dd._properties.currentLimitVelocityGradient = kd);
        const Wd = (0, Qd.Lerp)(dd._properties.currentLimitVelocity1, dd._properties.currentLimitVelocity2, Nd);
        dd.direction.length() > Wd && dd.direction.scaleInPlace(Jd.limitVelocityDamping)
      }))
    }

    function PJ(dd) {
      dd.direction.scaleToRef(dd._properties.directionScale, dd._properties.scaledDirection)
    }

    function ZJ(dd, Jd) {
      Jd.particleEmitterType.startPositionFunction(Jd._emitterWorldMatrix, dd.position, dd, Jd.isLocal)
    }

    function gJ(dd, Jd) {
      Jd.startPositionFunction(Jd._emitterWorldMatrix, dd.position, dd, Jd.isLocal)
    }

    function CJ(dd, Jd) {
      dd._properties.localPosition ? dd._properties.localPosition.Fs(dd.position) : dd._properties.localPosition = dd.position.clone(), Wd.n.TransformCoordinatesToRef(dd._properties.localPosition, Jd._emitterWorldMatrix, dd.position)
    }

    function KJ(dd, Jd) {
      Jd.isLocal && dd._properties.localPosition ? (dd._properties.localPosition.addInPlace(dd._properties.scaledDirection), Wd.n.TransformCoordinatesToRef(dd._properties.localPosition, Jd._emitterWorldMatrix, dd.position)) : dd.position.addInPlace(dd._properties.scaledDirection)
    }

    function oJ(dd, Jd) {
      dd._properties.currentDragGradient = Jd._dragGradients[0], dd._properties.currentDrag1 = dd._properties.currentDragGradient.getFactor(), Jd._dragGradients.length > 1 ? dd._properties.currentDrag2 = Jd._dragGradients[1].getFactor() : dd._properties.currentDrag2 = dd._properties.currentDrag1
    }

    function lJ(dd, Jd) {
      pd.k.GetCurrentGradient(Jd._ratio, Jd._dragGradients, ((Jd, kd, pd) => {
        Jd !== dd._properties.currentDragGradient && (dd._properties.currentDrag1 = dd._properties.currentDrag2, dd._properties.currentDrag2 = kd.getFactor(), dd._properties.currentDragGradient = Jd);
        const Nd = (0, Qd.Lerp)(dd._properties.currentDrag1, dd._properties.currentDrag2, pd);
        dd._properties.scaledDirection.scaleInPlace(1 - Nd)
      }))
    }

    function QJ(dd, Jd) {
      dd._properties.randomNoiseCoordinates1 && dd._properties.randomNoiseCoordinates2 ? (dd._properties.randomNoiseCoordinates1.kdd(Math.random(), Math.random(), Math.random()), dd._properties.randomNoiseCoordinates2.kdd(Math.random(), Math.random(), Math.random())) : (dd._properties.randomNoiseCoordinates1 = new Wd.n(Math.random(), Math.random(), Math.random()), dd._properties.randomNoiseCoordinates2 = new Wd.n(Math.random(), Math.random(), Math.random()))
    }

    function LJ(dd, Jd) {
      const kd = Jd._noiseTextureData,
        pd = Jd._noiseTextureSize;
      if (kd && pd && dd._properties.randomNoiseCoordinates1 && dd._properties.randomNoiseCoordinates2) {
        const Nd = Jd._fetchR(dd._properties.randomNoiseCoordinates1.x, dd._properties.randomNoiseCoordinates1.y, pd.width, pd.height, kd),
          Pd = Jd._fetchR(dd._properties.randomNoiseCoordinates1.z, dd._properties.randomNoiseCoordinates2.x, pd.width, pd.height, kd),
          Zd = Jd._fetchR(dd._properties.randomNoiseCoordinates2.y, dd._properties.randomNoiseCoordinates2.z, pd.width, pd.height, kd),
          gd = Wd.h.IL[0],
          Cd = Wd.h.IL[1];
        gd.kdd((2 * Nd - 1) * Jd.noiseStrength.x, (2 * Pd - 1) * Jd.noiseStrength.y, (2 * Zd - 1) * Jd.noiseStrength.z), gd.scaleToRef(Jd._tempScaledUpdateSpeed, Cd), dd.direction.addInPlace(Cd)
      }
    }

    function OJ(dd, Jd) {
      Jd.gravity.scaleToRef(Jd._tempScaledUpdateSpeed, Jd._scaledGravity), dd.direction.addInPlace(Jd._scaledGravity)
    }

    function eJ(dd, Jd) {
      dd.size = (0, Qd.RandomRange)(Jd.minSize, Jd.maxSize), dd.scale.kdd((0, Qd.RandomRange)(Jd.minScaleX, Jd.maxScaleX), (0, Qd.RandomRange)(Jd.minScaleY, Jd.maxScaleY))
    }

    function RJ(dd, Jd) {
      dd._properties.currentSizeGradient = Jd._sizeGradients[0], dd._properties.currentSize1 = dd._properties.currentSizeGradient.getFactor(), dd.size = dd._properties.currentSize1, Jd._sizeGradients.length > 1 ? dd._properties.currentSize2 = Jd._sizeGradients[1].getFactor() : dd._properties.currentSize2 = dd._properties.currentSize1, dd.scale.kdd((0, Qd.RandomRange)(Jd.minScaleX, Jd.maxScaleX), (0, Qd.RandomRange)(Jd.minScaleY, Jd.maxScaleY))
    }

    function IJ(dd, Jd) {
      const kd = Jd._actualFrame / Jd.targetStopDuration;
      pd.k.GetCurrentGradient(kd, Jd._startSizeGradients, ((kd, pd, Nd) => {
        kd !== Jd._currentStartSizeGradient && (Jd._currentStartSize1 = Jd._currentStartSize2, Jd._currentStartSize2 = pd.getFactor(), Jd._currentStartSizeGradient = kd);
        const Wd = (0, Qd.Lerp)(Jd._currentStartSize1, Jd._currentStartSize2, Nd);
        dd.scale.scaleInPlace(Wd)
      }))
    }

    function GJ(dd, Jd) {
      pd.k.GetCurrentGradient(Jd._ratio, Jd._sizeGradients, ((Jd, kd, pd) => {
        Jd !== dd._properties.currentSizeGradient && (dd._properties.currentSize1 = dd._properties.currentSize2, dd._properties.currentSize2 = kd.getFactor(), dd._properties.currentSizeGradient = Jd), dd.size = (0, Qd.Lerp)(dd._properties.currentSize1, dd._properties.currentSize2, pd)
      }))
    }

    function vJ(dd, Jd) {
      dd.remapData = new Wd.o(0, 1, 0, 1)
    }

    function xJ(dd, Jd) {
      Jd._colorRemapGradients && Jd._colorRemapGradients.length > 0 && pd.k.GetCurrentGradient(Jd._ratio, Jd._colorRemapGradients, ((Jd, kd, pd) => {
        const Nd = (0, Qd.Lerp)(Jd.factor1, kd.factor1, pd),
          Wd = (0, Qd.Lerp)(Jd.factor2, kd.factor2, pd);
        dd.remapData.x = Nd, dd.remapData.y = Wd - Nd
      })), Jd._alphaRemapGradients && Jd._alphaRemapGradients.length > 0 && pd.k.GetCurrentGradient(Jd._ratio, Jd._alphaRemapGradients, ((Jd, kd, pd) => {
        const Nd = (0, Qd.Lerp)(Jd.factor1, kd.factor1, pd),
          Wd = (0, Qd.Lerp)(Jd.factor2, kd.factor2, pd);
        dd.remapData.z = Nd, dd.remapData.w = Wd - Nd
      }))
    }

    function qJ(dd, Jd) {
      const kd = (0, Qd.Clamp)(Jd._actualFrame / Jd.targetStopDuration);
      pd.k.GetCurrentGradient(kd, Jd._lifeTimeGradients, ((Jd, pd) => {
        const Nd = Jd,
          Wd = pd,
          Pd = Nd.getFactor(),
          Zd = Wd.getFactor(),
          gd = (kd - Nd.gradient) / (Wd.gradient - Nd.gradient);
        dd.lifeTime = (0, Qd.Lerp)(Pd, Zd, gd)
      })), Jd._emitPower = (0, Qd.RandomRange)(Jd.minEmitPower, Jd.maxEmitPower)
    }

    function BJ(dd, Jd) {
      dd.lifeTime = (0, Qd.RandomRange)(Jd.minLifeTime, Jd.maxLifeTime), Jd._emitPower = (0, Qd.RandomRange)(Jd.minEmitPower, Jd.maxEmitPower)
    }

    function sJ(dd, Jd) {
      0 === Jd._emitPower ? (dd._properties.initialDirection ? dd._properties.initialDirection.Fs(dd.direction) : dd._properties.initialDirection = dd.direction.clone(), dd.direction.set(0, 0, 0)) : (dd._properties.initialDirection = null, dd.direction.scaleInPlace(Jd._emitPower)), dd.direction.addInPlace(Jd._inheritedVelocityOffset)
    }

    function iJ(dd, Jd) {
      dd.angularSpeed = (0, Qd.RandomRange)(Jd.minAngularSpeed, Jd.maxAngularSpeed), dd.angle = (0, Qd.RandomRange)(Jd.minInitialRotation, Jd.maxInitialRotation)
    }

    function aJ(dd, Jd) {
      dd._properties.currentAngularSpeedGradient = Jd._angularSpeedGradients[0], dd.angularSpeed = dd._properties.currentAngularSpeedGradient.getFactor(), dd._properties.currentAngularSpeed1 = dd.angularSpeed, Jd._angularSpeedGradients.length > 1 ? dd._properties.currentAngularSpeed2 = Jd._angularSpeedGradients[1].getFactor() : dd._properties.currentAngularSpeed2 = dd._properties.currentAngularSpeed1, dd.angle = (0, Qd.RandomRange)(Jd.minInitialRotation, Jd.maxInitialRotation)
    }

    function MJ(dd, Jd) {
      dd._properties.initialStartSpriteCellId = Jd.startSpriteCellID, dd._properties.initialEndSpriteCellId = Jd.endSpriteCellID, dd._properties.initialSpriteCellLoop = Jd.spriteCellLoop
    }

    function FJ(dd, Jd) {
      dd.previousItem = Jd.previousItem, dd.nextItem = Jd, Jd.previousItem && (Jd.previousItem.nextItem = dd), Jd.previousItem = dd
    }

    function YJ(dd, Jd) {
      dd.previousItem = Jd, dd.nextItem = Jd.nextItem, Jd.nextItem && (Jd.nextItem.previousItem = dd), Jd.nextItem = dd
    }

    function mJ(dd) {
      dd.previousItem && (dd.previousItem.nextItem = dd.nextItem), dd.nextItem && (dd.nextItem.previousItem = dd.previousItem)
    }
    var bJ = kd(40364);
    class SJ extends qd {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(dd) {
        this._startDirectionFunction !== dd && (this._startDirectionFunction = dd, this._directionCreation.process = dd ? JJ : dJ)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(dd) {
        this._startPositionFunction !== dd && (this._startPositionFunction = dd, this._positionCreation.process = dd ? gJ : ZJ)
      }
      set onDispose(dd) {
        this._onDisposeObserver && this.Zm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Zm.add(dd)
      }
      get lq() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(dd) {
        this._useRampGradients !== dd && (this._useRampGradients = dd, this._resetEffect(), dd ? (this._rampCreation = {
          process: vJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: xJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._remapGradientProcessing, this._gravityProcessing))) : (mJ(this._rampCreation), mJ(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(dd) {
        this._isLocal !== dd && (this._isLocal = dd, dd ? (this._isLocalCreation = {
          process: CJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._isLocalCreation, this._positionCreation)) : mJ(this._isLocalCreation))
      }
      get particles() {
        return this._particles
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(dd) {
        this._animationSheetEnabled !== dd && (this._animationSheetEnabled = dd, dd ? (this._sheetCreation = {
          process: MJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._sheetCreation, this._colorDeadCreation)) : mJ(this._sheetCreation), this._reset())
      }
      getActiveCount() {
        return this._particles.length
      }
      getClassName() {
        return "ParticleSystem"
      }
      isStopping() {
        return this._stopped && this.isAlive()
      }
      getCustomEffect() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[dd]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[dd] ?? this._customWrappers[0]
      }
      setCustomEffect(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[Jd] = new Ed.d(this._engine), this._customWrappers[Jd].effect = dd, this._customWrappers[Jd].drawContext && (this._customWrappers[Jd].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Nd.e), this._onBeforeDrawParticlesObservable
      }
      get vertexShaderName() {
        return "particles"
      }
      get vertexBuffers() {
        return this._vertexBuffers
      }
      get indexBuffer() {
        return this._indexBuffer
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(dd) {
        if (this.noiseTexture !== dd) {
          if (this._noiseTexture = dd, !dd) return mJ(this._noiseCreation), void mJ(this._noiseProcessing);
          this._noiseCreation = {
            process: QJ,
            previousItem: null,
            nextItem: null
          }, YJ(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: LJ,
            previousItem: null,
            nextItem: null
          }, YJ(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Pd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Zd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Cd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        Dd || (Dd = !0, Sd(yd.i, Ud)), (0, Td.b)(), super(dd), this._emitterInverseWorldMatrix = Wd.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Wd.n, this.Zm = new Nd.e, this.onStoppedObservable = new Nd.e, this.onStartedObservable = new Nd.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Kd.g(0, 0, 0, 0), this._colorDiff = new Kd.g(0, 0, 0, 0), this._scaledGravity = Wd.n.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = dd => {}, this.recycleParticle = dd => {
          const Jd = this._particles.pop();
          Jd !== dd && Jd.copyTo(dd), Jd.metadata = null, this._stockParticles.push(Jd)
        }, this._createParticle = () => {
          let dd;
          return 0 !== this._stockParticles.length ? (dd = this._stockParticles.pop(), dd._reset()) : dd = new sd(this), this._prepareParticle(dd), dd
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Jd, this._epsilon = Zd, kd && "Scene" !== kd.getClassName() ? (this._engine = kd, this.defaultProjectionMatrix = Wd.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = kd || gd.d.LastCreatedScene, this._engine = this._scene.eL(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.Qv.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: BJ,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: ZJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: dJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: sJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: eJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: iJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: ud,
          previousItem: null,
          nextItem: null
        }, YJ(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: td,
          previousItem: null,
          nextItem: null
        }, YJ(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Cd || (this._colorProcessing = {
          process: Hd,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Ad,
          previousItem: null,
          nextItem: null
        }, YJ(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: PJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: KJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: OJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Pd, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Ed.d(this._engine)
        }, this._customWrappers[0].effect = pd, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new od.d, this.updateFunction = dd => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((dd => {
            this._noiseTextureData = dd
          })));
          const Jd = dd === this._particles;
          for (let kd = 0; kd < dd.length; kd++) {
            const pd = dd[kd];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Nd = pd.age;
            if (pd.age += this._tempScaledUpdateSpeed, pd.age > pd.lifeTime) {
              const dd = pd.age - Nd,
                Jd = pd.lifeTime - Nd;
              this._tempScaledUpdateSpeed = Jd * this._tempScaledUpdateSpeed / dd, pd.age = pd.lifeTime
            }
            this._ratio = pd.age / pd.lifeTime, pd._properties.directionScale = this._tempScaledUpdateSpeed;
            let Wd = this._updateQueueStart;
            for (; Wd;) Wd.process(pd, this), Wd = Wd.nextItem;
            if (this._isAnimationSheetEnabled && !Cd && pd.updateCellIndex(), pd._inheritParticleInfoToSubEmitters(), pd.age >= pd.lifeTime) {
              if (this._emitFromParticle(pd), pd._properties.attachedSubEmitters) {
                for (const dd of pd._properties.attachedSubEmitters) dd.particleSystem.disposeOnStop = !0, dd.particleSystem.stop();
                pd._properties.attachedSubEmitters = null
              }
              this.recycleParticle(pd), Jd && kd--
            } else;
          }
        }
      }
      serialize(dd) {
        throw new Error("Method not implemented.")
      }
      clone(dd, Jd) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = qJ : this._lifeTimeCreation.process = BJ
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: IJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (mJ(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(dd) {
        this.targetStopDuration !== dd && (this._targetStopDuration = dd, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(dd, Jd, kd) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, dd, Jd, kd), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(dd) {
        return this._removeFactorGradient(this._lifeTimeGradients, dd), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(dd, Jd, kd) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = RJ, this._sizeGradientProcessing = {
          process: GJ,
          previousItem: null,
          nextItem: null
        }, FJ(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, dd, Jd, kd), this
      }
      removeSizeGradient(dd) {
        return this._removeFactorGradient(this._sizeGradients, dd), 0 === this._sizeGradients?.length && (mJ(this._sizeGradientProcessing), this._sizeCreation.process = eJ), this
      }
      addColorRemapGradient(dd, Jd, kd) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, dd, Jd, kd), this
      }
      removeColorRemapGradient(dd) {
        return this._removeFactorGradient(this._colorRemapGradients, dd), this
      }
      addAlphaRemapGradient(dd, Jd, kd) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, dd, Jd, kd), this
      }
      removeAlphaRemapGradient(dd) {
        return this._removeFactorGradient(this._alphaRemapGradients, dd), this
      }
      addAngularSpeedGradient(dd, Jd, kd) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = aJ, this._angularSpeedGradientProcessing = {
          process: wd,
          previousItem: null,
          nextItem: null
        }, FJ(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, dd, Jd, kd), this
      }
      removeAngularSpeedGradient(dd) {
        return this._removeFactorGradient(this._angularSpeedGradients, dd), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = iJ, mJ(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(dd, Jd, kd) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: kJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: NJ,
          previousItem: null,
          nextItem: null
        }, FJ(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, dd, Jd, kd), this
      }
      removeVelocityGradient(dd) {
        return this._removeFactorGradient(this._velocityGradients, dd), 0 === this._velocityGradients?.length && (mJ(this._velocityCreation), mJ(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(dd, Jd, kd) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: pJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: WJ,
          previousItem: null,
          nextItem: null
        }, YJ(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, dd, Jd, kd), this
      }
      removeLimitVelocityGradient(dd) {
        return this._removeFactorGradient(this._limitVelocityGradients, dd), 0 === this._limitVelocityGradients?.length && (mJ(this._limitVelocityCreation), mJ(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(dd, Jd, kd) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: oJ,
          previousItem: null,
          nextItem: null
        }, FJ(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: lJ,
          previousItem: null,
          nextItem: null
        }, FJ(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, dd, Jd, kd), this
      }
      removeDragGradient(dd) {
        return this._removeFactorGradient(this._dragGradients, dd), 0 === this._dragGradients?.length && (mJ(this._dragCreation), mJ(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(dd, Jd, kd) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, dd, Jd, kd), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(dd) {
        return this._removeFactorGradient(this._startSizeGradients, dd), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const dd = new Uint8Array(4 * this._rawTextureWidth),
          Jd = Kd.m.Color3[0];
        for (let kd = 0; kd < this._rawTextureWidth; kd++) {
          const Nd = kd / this._rawTextureWidth;
          pd.k.GetCurrentGradient(Nd, this._rampGradients, ((pd, Nd, Wd) => {
            Kd.c.LerpToRef(pd.color, Nd.color, Wd, Jd), dd[4 * kd] = 255 * Jd.r, dd[4 * kd + 1] = 255 * Jd.g, dd[4 * kd + 2] = 255 * Jd.b, dd[4 * kd + 3] = 255
          }))
        }
        this._rampGradientsTexture = Zd.d.CreateRGBATexture(dd, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((dd, Jd) => dd.gradient < Jd.gradient ? -1 : dd.gradient > Jd.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(dd, Jd) {
        this._rampGradients || (this._rampGradients = []);
        const kd = new pd.f(dd, Jd);
        return this._rampGradients.push(kd), this._syncRampGradientTexture(), this
      }
      removeRampGradient(dd) {
        return this._removeGradientAndTexture(dd, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(dd, Jd, kd) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Vd, this._colorProcessing.process = zd);
        const Nd = new pd.c(dd, Jd, kd);
        return this._colorGradients.push(Nd), this._colorGradients.sort(((dd, Jd) => dd.gradient < Jd.gradient ? -1 : dd.gradient > Jd.gradient ? 1 : 0)), this
      }
      removeColorGradient(dd) {
        if (!this._colorGradients) return this;
        let Jd = 0;
        for (const kd of this._colorGradients) {
          if (kd.gradient === dd) {
            this._colorGradients.splice(Jd, 1);
            break
          }
          Jd++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = ud, this._colorProcessing.process = Hd), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const dd of this._drawWrappers)
            if (dd)
              for (const Jd of dd) Jd?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(dd, Jd, kd, pd, Nd) {
        return Nd[4 * (((dd = .5 * Math.abs(dd) + .5) * kd % kd | 0) + ((Jd = .5 * Math.abs(Jd) + .5) * pd % pd | 0) * kd)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const dd = this._engine,
          Jd = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * Jd), this._vertexBuffer = new Pd.e(dd, this._vertexData, !0, Jd);
        let kd = 0;
        const pd = this._vertexBuffer.createVertexBuffer(Pd.j.PositionKind, kd, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Pd.j.PositionKind] = pd, kd += 3;
        const Nd = this._vertexBuffer.createVertexBuffer(Pd.j.ColorKind, kd, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Pd.j.ColorKind] = Nd, kd += 4;
        const Wd = this._vertexBuffer.createVertexBuffer("angle", kd, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Wd, kd += 1;
        const Zd = this._vertexBuffer.createVertexBuffer("size", kd, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = Zd, kd += 2, this._isAnimationSheetEnabled) {
          const dd = this._vertexBuffer.createVertexBuffer("cellIndex", kd, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = dd, kd += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const dd = this._vertexBuffer.createVertexBuffer("direction", kd, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = dd, kd += 3
        }
        if (this._useRampGradients) {
          const dd = this._vertexBuffer.createVertexBuffer("remapData", kd, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = dd, kd += 4
        }
        let gd;
        if (this._useInstancing) {
          const Jd = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Pd.e(dd, Jd, !1, 2), gd = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else gd = this._vertexBuffer.createVertexBuffer("offset", kd, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = gd, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const dd = [],
          Jd = [];
        let kd = 0;
        for (let pd = 0; pd < this._capacity; pd++) dd.push(kd), dd.push(kd + 1), dd.push(kd + 2), dd.push(kd), dd.push(kd + 2), dd.push(kd + 3), Jd.push(kd, kd + 1, kd + 1, kd + 2, kd + 2, kd + 3, kd + 3, kd, kd, kd + 3), kd += 4;
        this._indexBuffer = this._engine.createIndexBuffer(dd), this._linesIndexBuffer = this._engine.createIndexBuffer(Jd)
      }
      getCapacity() {
        return this._capacity
      }
      isAlive() {
        return this._alive
      }
      isStarted() {
        return this._started
      }
      _preStart() {}
      start() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (dd) return this.startDelay = dd, void setTimeout((() => {
          this.start(0)
        }), dd);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const dd = this.noiseTexture;
          if (dd && dd.onGeneratedObservable) dd.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let Jd = 0; Jd < this.preWarmCycles; Jd++) this.animate(!0), dd.render()
            }))
          }));
          else
            for (let Jd = 0; Jd < this.preWarmCycles; Jd++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(dd))
      }
      _postStop(dd) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(dd, Jd, kd, pd) {
        let Nd = dd * this._vertexBufferSize;
        const Pd = Wd.h.IL[0].Fs(this._scene?.floatingOriginOffset || Wd.n.ZeroReadOnly);
        if (this._vertexData[Nd++] = Jd.position.x + this.worldOffset.x - Pd.x, this._vertexData[Nd++] = Jd.position.y + this.worldOffset.y - Pd.y, this._vertexData[Nd++] = Jd.position.z + this.worldOffset.z - Pd.z, this._vertexData[Nd++] = Jd.color.r, this._vertexData[Nd++] = Jd.color.g, this._vertexData[Nd++] = Jd.color.b, this._vertexData[Nd++] = Jd.color.a, this._vertexData[Nd++] = Jd.angle, this._vertexData[Nd++] = Jd.scale.x * Jd.size, this._vertexData[Nd++] = Jd.scale.y * Jd.size, this._isAnimationSheetEnabled && (this._vertexData[Nd++] = Jd.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Nd++] = Jd.direction.x, this._vertexData[Nd++] = Jd.direction.y, this._vertexData[Nd++] = Jd.direction.z);
        else if (Jd._properties.initialDirection) {
          let dd = Jd._properties.initialDirection;
          this.isLocal && (Wd.n.TransformNormalToRef(dd, this._emitterWorldMatrix, Wd.h.IL[0]), dd = Wd.h.IL[0]), 0 === dd.x && 0 === dd.z && (dd.x = .001), this._vertexData[Nd++] = dd.x, this._vertexData[Nd++] = dd.y, this._vertexData[Nd++] = dd.z
        } else {
          let dd = Jd.direction;
          this.isLocal && (Wd.n.TransformNormalToRef(dd, this._emitterWorldMatrix, Wd.h.IL[0]), dd = Wd.h.IL[0]), 0 === dd.x && 0 === dd.z && (dd.x = .001), this._vertexData[Nd++] = dd.x, this._vertexData[Nd++] = dd.y, this._vertexData[Nd++] = dd.z
        }
        this._useRampGradients && Jd.remapData && (this._vertexData[Nd++] = Jd.remapData.x, this._vertexData[Nd++] = Jd.remapData.y, this._vertexData[Nd++] = Jd.remapData.z, this._vertexData[Nd++] = Jd.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === kd ? kd = this._epsilon : 1 === kd && (kd = 1 - this._epsilon), 0 === pd ? pd = this._epsilon : 1 === pd && (pd = 1 - this._epsilon)), this._vertexData[Nd++] = kd, this._vertexData[Nd] = pd)
      }
      _prepareParticle(dd) {}
      _createNewOnes(dd) {
        let Jd;
        for (let kd = 0; kd < dd && this._particles.length !== this._capacity; kd++) {
          Jd = this._createParticle(), this._particles.push(Jd);
          let dd = this._createQueueStart;
          for (; dd;) dd.process(Jd, this), dd = dd.nextItem;
          Jd._inheritParticleInfoToSubEmitters()
        }
      }
      _update(dd) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const dd = this.emitter;
          this._emitterWorldMatrix = dd.getWorldMatrix()
        } else {
          const dd = this.emitter;
          this._emitterWorldMatrix = Wd.b.Translation(dd.x, dd.y, dd.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(dd)
      }
      static _GetAttributeNamesOrOptions() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = [Pd.j.PositionKind, Pd.j.ColorKind, "angle", "offset", "size"];
        return dd && pd.push("cellIndex"), Jd || pd.push("direction"), kd && pd.push("remapData"), pd
      }
      static _GetEffectCreationOptions() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, cd.e)(pd), dd && pd.push("particlesInfos"), Jd && pd.push("logarithmicDepthConstant"), kd && (pd.push("vFogInfos"), pd.push("vFogColor")), pd
      }
      fillDefines(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, cd.m)(this, this._scene, dd), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && dd.push("#define FOG")), this._isAnimationSheetEnabled && dd.push("#define ANIMATESHEET"), this.useLogarithmicDepth && dd.push("#define LOGARITHMICDEPTH"), Jd === qd.BLENDMODE_MULTIPLY && dd.push("#define BLENDMULTIPLYMODE"), this.isLocal && dd.push("#define LOCAL"), this._useRampGradients && dd.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (dd.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            dd.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            dd.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && dd.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            dd.push("#define BILLBOARDMODE_ALL")
        }
        kd && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), dd.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(dd, Jd, kd) {
        Jd.push(...SJ._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), dd.push(...SJ._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), kd.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, rd.e)(dd, this._imageProcessingConfigurationDefines), (0, rd.c)(kd, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(dd) {
        var Jd;
        const kd = this._getCustomDrawWrapper(dd);
        if (kd?.effect) return kd;
        const pd = [];
        this.fillDefines(pd, dd);
        const Wd = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Pd = bJ.b._PrepareStringDefines(Wd, pd),
          Zd = Pd ? bJ.b.GetConfiguration(Wd) : void 0;
        let gd = this._drawWrappers[Wd];
        gd || (gd = this._drawWrappers[Wd] = [], 0 === Wd || this._renderPassObserver || (this._renderPassObserver = ((Jd = this._engine)._onReleaseRenderPassObservable ?? (Jd._onReleaseRenderPassObservable = new Nd.e)).add((dd => {
          const Jd = this._drawWrappers[dd];
          if (Jd) {
            for (const dd of Jd) dd?.dispose();
            delete this._drawWrappers[dd]
          }
        }))));
        let Cd = gd[dd];
        Cd || (Cd = new Ed.d(this._engine), Cd.drawContext && (Cd.drawContext.useInstancing = this._useInstancing), gd[dd] = Cd);
        const Kd = pd.join("\n");
        if (Cd.defines !== Kd) {
          const dd = [],
            Jd = [],
            kd = [];
          this.fillUniformsAttributesAndSamplerNames(Jd, dd, kd), Pd && (Jd.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== Zd?.defines.PREPASS_LOCAL_POSITION_INDEX && Jd.push("inverseEmitterWM", "geometryWorldOffset")), Cd.setEffect(this._engine.createEffect("particles", {
            attributes: dd,
            uniformsNames: Jd,
            samplers: kd,
            defines: Kd,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Pd,
            indexParameters: Pd ? {
              buffersCount: Zd?._mrtCount ?? 0
            } : void 0
          }, this._engine), Kd)
        }
        return Cd
      }
      _bindGeometryRendering(dd) {
        const Jd = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          kd = bJ.b.GetConfiguration(Jd);
        if (!kd?._defines) return;
        dd.setFloat("objectId", 0), dd.setInt("meshBlendTag", 0);
        const pd = this._scene?.activeCamera;
        if (dd.setFloat2("cameraInfo", pd?.minZ ?? 0, pd?.maxZ ?? 1), this.isLocal && void 0 !== kd.defines.PREPASS_LOCAL_POSITION_INDEX) {
          dd.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Jd = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Wd.n.ZeroReadOnly, Wd.h.IL[0]);
          dd.setVector3("geometryWorldOffset", Jd)
        }
      }
      animate() {
        let dd, Jd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!Jd && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (Jd ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) dd = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const Jd = this._calculateEmitRate();
            dd = Jd * this._scaledUpdateSpeed | 0, this._newPartsExcess += Jd * this._scaledUpdateSpeed - dd
          }
          if (this._newPartsExcess > 1 && (dd += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? dd = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(dd), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !Jd) {
            let dd = 0;
            for (let Jd = 0; Jd < this._particles.length; Jd++) {
              const kd = this._particles[Jd];
              this._appendParticleVertices(dd, kd), dd += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const dd = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  Jd = this._particles.length;
                Jd < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, Jd * dd, this._fixedCapacityHighWaterMark * dd), this._fixedCapacityHighWaterMark = Jd, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
              } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
          }
          0 === this.manualEmitCount && this.disposeOnStop && this.stop()
        }
      }
      _initFixedCapacitySnapshotData() {
        return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
      }
      _clearFixedCapacitySnapshotData() {
        if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
        const dd = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * dd), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let dd = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const Jd = this._actualFrame / this.targetStopDuration;
          pd.k.GetCurrentGradient(Jd, this._emitRateGradients, ((Jd, kd, pd) => {
            Jd !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = kd.getFactor(), this._currentEmitRateGradient = Jd), dd = (0, Qd.Lerp)(this._currentEmitRate1, this._currentEmitRate2, pd)
          }))
        }
        return dd
      }
      _appendParticleVertices(dd, Jd) {
        this._appendParticleVertex(dd++, Jd, 0, 0), this._useInstancing || (this._appendParticleVertex(dd++, Jd, 1, 0), this._appendParticleVertex(dd++, Jd, 1, 1), this._appendParticleVertex(dd, Jd, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !SJ.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([kd.e(337).then((() => kd(60910))), kd.e(331).then((() => kd(60917)))])) : await Promise.all([kd.e(320).then((() => kd(60925))), Promise.all([kd.e(313), kd.e(349)]).then((() => kd(60931)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== qd.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(qd.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(qd.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(dd) {
        const Jd = this._getWrapper(dd),
          kd = Jd.effect,
          pd = this._engine;
        pd.enableEffect(Jd);
        const Nd = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        kd.setTexture("diffuseSampler", this.particleTexture), kd.setMatrix("view", Nd);
        const Pd = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (kd.setMatrix("projection", Pd), this._isAnimationSheetEnabled && this.particleTexture) {
          const dd = this.particleTexture.getBaseSize();
          kd.setFloat3("particlesInfos", this.spriteCellWidth / dd.width, this.spriteCellHeight / dd.height, this.spriteCellWidth / dd.width)
        }
        if (kd.setVector2("translationPivot", this.translationPivot), kd.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const dd = this._scene.activeCamera;
          kd.setVector3("eyePosition", dd.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), kd.setTexture("rampSampler", this._rampGradientsTexture));
        const Zd = kd.defines;
        this._scene && ((0, cd.i)(kd, this, this._scene), this.applyFog && (0, hd.k)(this._scene, void 0, kd)), Zd.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Nd.invertToRef(Wd.h.Matrix[0]), kd.setMatrix("invView", Wd.h.Matrix[0])), kd._multiTarget && this._bindGeometryRendering(kd), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? pd.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, kd) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, kd)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? pd.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, kd) : pd.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, kd), this.useLogarithmicDepth && this._scene && (0, hd.s)(Zd, kd, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(kd), this._setEngineBasedOnBlendMode(dd), kd._multiTarget && bJ.b._BindZeroAlphaDiscard(pd, kd);
        let gd = !1;
        try {
          bJ.b._BindAttachmentsForEffect(pd, kd) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(kd), this._useInstancing ? this._scene?.forceWireframe ? pd.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : pd.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? pd.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : pd.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), gd = !0)
        } finally {
          bJ.b._RestoreAttachments(pd)
        }
        return gd ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const dd = this._engine;
        let Jd;
        return dd.setState && (dd.setState(!1), this.forceDepthWrite && dd.setDepthWrite(!0)), Jd = this.blendMode === qd.BLENDMODE_MULTIPLYADD ? this._render(qd.BLENDMODE_MULTIPLY) + this._render(qd.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Jd
      }
      _onDispose() {}
      dispose() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), dd && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), dd && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Jd, kd), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const dd = this._scene.Qv.indexOf(this);
          dd > -1 && this._scene.Qv.splice(dd, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Zm.notifyObservers(this), this.Zm.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    SJ.ForceGLSL = !1;
    var jJ, XJ = kd(37303);
    ! function(dd) {
      dd[dd.ATTACHED = 0] = "ATTACHED", dd[dd.END = 1] = "END"
    }(jJ || (jJ = {}));
    class fJ {
      constructor(dd) {
        if (this.particleSystem = dd, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !dd.emitter || !dd.emitter.dispose) {
          const Jd = (0, XJ.e)("BABYLON.AbstractMesh");
          dd.emitter = new Jd("SubemitterSystemEmitter", dd.Wm()), dd._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let dd = this.particleSystem.emitter;
        if (dd) {
          if (dd instanceof Wd.n) dd = dd.clone();
          else if (-1 !== dd.getClassName().indexOf("Mesh")) {
            dd = new((0, XJ.e)("BABYLON.Mesh"))("", dd.Wm()), dd.isVisible = !1
          }
        } else dd = new Wd.n;
        const Jd = new fJ(this.particleSystem.clone(this.particleSystem.name, dd));
        return Jd.particleSystem.name += "Clone", Jd.type = this.type, Jd.inheritDirection = this.inheritDirection, Jd.inheritedVelocityAmount = this.inheritedVelocityAmount, Jd.particleSystem._disposeEmitterOnDispose = !0, Jd.particleSystem.disposeOnStop = !0, Jd
      }
      serialize() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = {};
        return Jd.type = this.type, Jd.inheritDirection = this.inheritDirection, Jd.inheritedVelocityAmount = this.inheritedVelocityAmount, Jd.particleSystem = this.particleSystem.serialize(dd), Jd
      }
      static _ParseParticleSystem(dd, Jd, kd) {
        throw (0, nd.n)("ParseParticle")
      }
      static Parse(dd, Jd, kd) {
        const pd = dd.particleSystem,
          Nd = new fJ(fJ._ParseParticleSystem(pd, Jd, kd, !0));
        return Nd.type = dd.type, Nd.inheritDirection = dd.inheritDirection, Nd.inheritedVelocityAmount = dd.inheritedVelocityAmount, Nd.particleSystem._isSubEmitter = !0, Nd
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var nJ = kd(39874),
      UJ = kd(39983);
    const yJ = () => {};
    class DJ {
      constructor() {
        this.particlePositionGenerator = yJ, this.particleDestinationGenerator = yJ, this.particleDirectionGenerator = yJ
      }
      startDirectionFunction(dd, Jd, kd, pd) {
        const Nd = Wd.h.IL[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== yJ) this.particleDirectionGenerator(-1, kd, Nd);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== yJ) {
          this.particleDestinationGenerator(-1, kd, Nd);
          const dd = Wd.h.IL[1];
          Nd.subtractToRef(kd.position, dd), dd.scaleToRef(1 / kd.lifeTime, Nd)
        } else Nd.set(0, 0, 0);
        pd ? Jd.Fs(Nd) : Wd.n.TransformNormalToRef(Nd, dd, Jd)
      }
      startPositionFunction(dd, Jd, kd, pd) {
        const Nd = Wd.h.IL[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== yJ ? this.particlePositionGenerator(-1, kd, Nd) : Nd.set(0, 0, 0), pd ? Jd.Fs(Nd) : Wd.n.TransformCoordinatesToRef(Nd, dd, Jd)
      }
      clone() {
        const dd = new DJ;
        return ld.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {}
      buildUniformLayout(dd) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.particlePositionGenerator = this.particlePositionGenerator, dd.particleDestinationGenerator = this.particleDestinationGenerator, dd
      }
      parse(dd) {
        dd.particlePositionGenerator && (this.particlePositionGenerator = dd.particlePositionGenerator), dd.particleDestinationGenerator && (this.particleDestinationGenerator = dd.particleDestinationGenerator)
      }
    }
    const TJ = Wd.n.Zero(),
      EJ = Wd.n.Zero(),
      cJ = Wd.n.Zero();
    class hJ {
      constructor() {
        this.strength = 0, this.position = Wd.n.Zero()
      }
      _processParticle(dd, Jd) {
        this.position.subtractToRef(dd.position, TJ);
        const kd = TJ.lengthSquared() + 1;
        TJ.normalize().scaleToRef(this.strength / kd, EJ), EJ.scaleToRef(Jd._tempScaledUpdateSpeed, cJ), dd.direction.addInPlace(cJ)
      }
      serialize() {
        return {
          position: this.position.spd(),
          strength: this.strength
        }
      }
    }
    const rJ = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class uJ extends SJ {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = dd => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Jd = Math.floor(Math.random() * this._subEmitters.length);
          for (const kd of this._subEmitters[Jd])
            if (1 === kd.type) {
              const Jd = kd.clone();
              dd._inheritParticleInfoToSubEmitter(Jd), Jd.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(Jd.particleSystem), Jd.particleSystem.start()
            }
        }
      }
      get source() {
        return this._source
      }
      get isNodeGenerated() {
        return null !== this._source
      }
      get flowMap() {
        return this._flowMap
      }
      set flowMap(dd) {
        this._flowMap !== dd && (this._flowMap = dd, this._flowMapUpdate && (mJ(this._flowMapUpdate), this._flowMapUpdate = null), dd && (this._flowMapUpdate = {
          process: dd => {
            const Jd = this.Wm()?.getTransformMatrix();
            this._flowMap._processParticle(dd, this.flowMapStrength * this._tempScaledUpdateSpeed, Jd)
          },
          previousItem: null,
          nextItem: null
        }, YJ(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(dd) {
        super.addAttractor(dd), 1 === this._attractors.length && (this._attractorUpdate = {
          process: dd => {
            for (const Jd of this._attractors) Jd._processParticle(dd, this)
          },
          previousItem: null,
          nextItem: null
        }, YJ(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(dd) {
        super.removeAttractor(dd), 0 === this._attractors.length && this._attractorUpdate && mJ(this._attractorUpdate)
      }
      start() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(dd)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const dd of this.subEmitters) dd instanceof uJ ? this._subEmitters.push([new fJ(dd)]) : dd instanceof fJ ? this._subEmitters.push([dd]) : dd instanceof Array && this._subEmitters.push(dd)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const dd of this.activeSubSystems) dd.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const dd = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== dd && this._rootParticleSystem.activeSubSystems.splice(dd, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(dd) {
        dd && this._stopSubEmitters()
      }
      _prepareParticle(dd) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const Jd = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          dd._properties.attachedSubEmitters = [];
          for (const kd of Jd)
            if (0 === kd.type) {
              const Jd = kd.clone();
              dd._properties.attachedSubEmitters.push(Jd), Jd.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), dd && this.particles)
          for (const kd of this.particles)
            if (kd._properties.attachedSubEmitters)
              for (let dd = kd._properties.attachedSubEmitters.length - 1; dd >= 0; dd -= 1) kd._properties.attachedSubEmitters[dd].dispose();
        if (Jd && this.activeSubSystems)
          for (let kd = this.activeSubSystems.length - 1; kd >= 0; kd -= 1) this.activeSubSystems[kd].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let dd = 0; dd < this._subEmitters.length; dd++)
            for (const Jd of this._subEmitters[dd]) Jd.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(dd, Jd, kd, pd) {
        let Nd;
        Nd = kd instanceof nJ.b ? null : kd;
        const Pd = (0, XJ.e)("BABYLON.Texture");
        if (Pd && Nd)
          if (dd.texture) Jd.particleTexture = Pd.Parse(dd.texture, Nd, pd);
          else if (dd.textureName) {
          const kd = dd.textureSettings;
          if (Jd.particleTexture = new Pd(pd + dd.textureName, Nd, !1, void 0 === dd.invertY || dd.invertY, kd ? kd.samplingMode : void 0), Jd.particleTexture.name = dd.textureName, kd) {
            const dd = Jd.particleTexture;
            for (const Jd of rJ) void 0 !== kd[Jd] && (dd[Jd] = kd[Jd])
          }
        }
        if (dd.emitterId || 0 === dd.emitterId || void 0 !== dd.emitter ? (dd.emitterId || 0 === dd.emitterId) && Nd ? (Jd.emitter = Nd.getLastMeshById(dd.emitterId), Jd.emitter || (Jd.emitter = Wd.n.Zero())) : Jd.emitter = Wd.n.FromArray(dd.emitter) : Jd.emitter = Wd.n.Zero(), Jd.isLocal = !!dd.isLocal, void 0 !== dd.renderingGroupId && (Jd.renderingGroupId = dd.renderingGroupId), void 0 !== dd.isBillboardBased && (Jd.isBillboardBased = dd.isBillboardBased), void 0 !== dd.billboardMode && (Jd.billboardMode = dd.billboardMode), void 0 !== dd.useLogarithmicDepth && (Jd.useLogarithmicDepth = dd.useLogarithmicDepth), dd.animations) {
          for (let kd = 0; kd < dd.animations.length; kd++) {
            const pd = dd.animations[kd],
              Nd = (0, XJ.e)("BABYLON.Animation");
            Nd && Jd.animations.push(Nd.Parse(pd))
          }
          Jd.beginAnimationOnStart = dd.beginAnimationOnStart, Jd.beginAnimationFrom = dd.beginAnimationFrom, Jd.beginAnimationTo = dd.beginAnimationTo, Jd.beginAnimationLoop = dd.beginAnimationLoop
        }
        if (dd.autoAnimate && Nd && Nd.beginAnimation(Jd, dd.autoAnimateFrom, dd.autoAnimateTo, dd.autoAnimateLoop, dd.autoAnimateSpeed || 1), Jd.startDelay = 0 | dd.startDelay, Jd.minAngularSpeed = dd.minAngularSpeed, Jd.maxAngularSpeed = dd.maxAngularSpeed, Jd.minSize = dd.minSize, Jd.maxSize = dd.maxSize, dd.minScaleX && (Jd.minScaleX = dd.minScaleX, Jd.maxScaleX = dd.maxScaleX, Jd.minScaleY = dd.minScaleY, Jd.maxScaleY = dd.maxScaleY), void 0 !== dd.preWarmCycles && (Jd.preWarmCycles = dd.preWarmCycles, Jd.preWarmStepOffset = dd.preWarmStepOffset), void 0 !== dd.minInitialRotation && (Jd.minInitialRotation = dd.minInitialRotation, Jd.maxInitialRotation = dd.maxInitialRotation), Jd.minLifeTime = dd.minLifeTime, Jd.maxLifeTime = dd.maxLifeTime, Jd.minEmitPower = dd.minEmitPower, Jd.maxEmitPower = dd.maxEmitPower, Jd.emitRate = dd.emitRate, Jd.gravity = Wd.n.FromArray(dd.gravity), dd.noiseStrength && (Jd.noiseStrength = Wd.n.FromArray(dd.noiseStrength)), Jd.color1 = Kd.g.FromArray(dd.color1), Jd.color2 = Kd.g.FromArray(dd.color2), Jd.colorDead = Kd.g.FromArray(dd.colorDead), Jd.updateSpeed = dd.updateSpeed, Jd.targetStopDuration = dd.targetStopDuration, Jd.blendMode = dd.blendMode, dd.colorGradients)
          for (const Wd of dd.colorGradients) Jd.addColorGradient(Wd.gradient, Kd.g.FromArray(Wd.color1), Wd.color2 ? Kd.g.FromArray(Wd.color2) : void 0);
        if (dd.rampGradients) {
          for (const kd of dd.rampGradients) Jd.addRampGradient(kd.gradient, Kd.c.FromArray(kd.color));
          Jd.useRampGradients = dd.useRampGradients
        }
        if (dd.colorRemapGradients)
          for (const Wd of dd.colorRemapGradients) Jd.addColorRemapGradient(Wd.gradient, void 0 !== Wd.factor1 ? Wd.factor1 : Wd.factor, Wd.factor2);
        if (dd.alphaRemapGradients)
          for (const Wd of dd.alphaRemapGradients) Jd.addAlphaRemapGradient(Wd.gradient, void 0 !== Wd.factor1 ? Wd.factor1 : Wd.factor, Wd.factor2);
        if (dd.sizeGradients)
          for (const Wd of dd.sizeGradients) Jd.addSizeGradient(Wd.gradient, void 0 !== Wd.factor1 ? Wd.factor1 : Wd.factor, Wd.factor2);
        if (dd.angularSpeedGradients)
          for (const Wd of dd.angularSpeedGradients) Jd.addAngularSpeedGradient(Wd.gradient, void 0 !== Wd.factor1 ? Wd.factor1 : Wd.factor, Wd.factor2);
        if (dd.velocityGradients)
          for (const Wd of dd.velocityGradients) Jd.addVelocityGradient(Wd.gradient, void 0 !== Wd.factor1 ? Wd.factor1 : Wd.factor, Wd.factor2);
        if (dd.dragGradients)
          for (const Wd of dd.dragGradients) Jd.addDragGradient(Wd.gradient, void 0 !== Wd.factor1 ? Wd.factor1 : Wd.factor, Wd.factor2);
        if (dd.emitRateGradients)
          for (const Wd of dd.emitRateGradients) Jd.addEmitRateGradient(Wd.gradient, void 0 !== Wd.factor1 ? Wd.factor1 : Wd.factor, Wd.factor2);
        if (dd.startSizeGradients)
          for (const Wd of dd.startSizeGradients) Jd.addStartSizeGradient(Wd.gradient, void 0 !== Wd.factor1 ? Wd.factor1 : Wd.factor, Wd.factor2);
        if (dd.lifeTimeGradients)
          for (const Wd of dd.lifeTimeGradients) Jd.addLifeTimeGradient(Wd.gradient, void 0 !== Wd.factor1 ? Wd.factor1 : Wd.factor, Wd.factor2);
        if (dd.limitVelocityGradients) {
          for (const kd of dd.limitVelocityGradients) Jd.addLimitVelocityGradient(kd.gradient, void 0 !== kd.factor1 ? kd.factor1 : kd.factor, kd.factor2);
          Jd.limitVelocityDamping = dd.limitVelocityDamping
        }
        if (dd.noiseTexture && Nd) {
          const kd = (0, XJ.e)("BABYLON.ProceduralTexture");
          Jd.noiseTexture = kd.Parse(dd.noiseTexture, Nd, pd)
        }
        let Zd;
        if (dd.particleEmitterType) {
          switch (dd.particleEmitterType.type) {
            case "SphereParticleEmitter":
              Zd = new ed;
              break;
            case "SphereDirectedParticleEmitter":
              Zd = new Rd;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              Zd = new Gd;
              break;
            case "ConeDirectedParticleEmitter":
              Zd = new vd;
              break;
            case "CylinderParticleEmitter":
              Zd = new Id.d;
              break;
            case "CylinderDirectedParticleEmitter":
              Zd = new Id.c;
              break;
            case "HemisphericParticleEmitter":
              Zd = new Od;
              break;
            case "PointParticleEmitter":
              Zd = new Ld;
              break;
            case "MeshParticleEmitter":
              Zd = new xd;
              break;
            case "CustomParticleEmitter":
              Zd = new DJ;
              break;
            default:
              Zd = new od.d
          }
          Zd.parse(dd.particleEmitterType, Nd)
        } else Zd = new od.d, Zd.parse(dd, Nd);
        Jd.particleEmitterType = Zd, Jd.startSpriteCellID = dd.startSpriteCellID, Jd.endSpriteCellID = dd.endSpriteCellID, Jd.spriteCellLoop = dd.spriteCellLoop ?? !0, Jd.spriteCellWidth = dd.spriteCellWidth, Jd.spriteCellHeight = dd.spriteCellHeight, Jd.spriteCellChangeSpeed = dd.spriteCellChangeSpeed, Jd.spriteRandomStartCell = dd.spriteRandomStartCell, Jd.disposeOnStop = dd.disposeOnStop ?? !1, Jd.manualEmitCount = dd.manualEmitCount ?? -1
      }
      static Parse(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Nd = arguments.length > 4 ? arguments[4] : void 0;
        const Pd = dd.name;
        let Zd, gd, Cd = null,
          od = null;
        if (Jd instanceof nJ.b ? Zd = Jd : (gd = Jd, Zd = gd.eL()), dd.customShader && (0, nd.e)(Zd.createEffectForParticles)) {
          od = dd.customShader;
          const Jd = od.shaderOptions.defines.length > 0 ? od.shaderOptions.defines.join("\n") : "";
          Cd = Zd.createEffectForParticles(od.shaderPath.fragmentElement, od.shaderOptions.uniforms, od.shaderOptions.samplers, Jd)
        }
        const ld = new uJ(Pd, Nd || dd.oo, Jd, Cd, dd.isAnimationSheetEnabled);
        if (ld.customShader = od, ld._rootUrl = kd, dd.id && (ld.id = dd.id), dd.subEmitters) {
          ld.subEmitters = [];
          for (const pd of dd.subEmitters) {
            const dd = [];
            for (const Nd of pd) dd.push(fJ.Parse(Nd, Jd, kd));
            ld.subEmitters.push(dd)
          }
        }
        if (dd.attractors)
          for (const Kd of dd.attractors) {
            const dd = new hJ;
            dd.position = Wd.n.FromArray(Kd.position), dd.strength = Kd.strength, ld.addAttractor(dd)
          }
        return uJ._Parse(dd, ld, Jd, kd), dd.textureMask && (ld.textureMask = Kd.g.FromArray(dd.textureMask)), dd.worldOffset && (ld.worldOffset = Wd.n.FromArray(dd.worldOffset)), dd.preventAutoStart && (ld.preventAutoStart = dd.preventAutoStart), dd.metadata && (ld.metadata = dd.metadata), pd || ld.preventAutoStart || ld.start(), ld
      }
      serialize() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = {};
        if (uJ._Serialize(Jd, this, dd), Jd.textureMask = this.textureMask.spd(), Jd.customShader = this.customShader, Jd.preventAutoStart = this.preventAutoStart, Jd.worldOffset = this.worldOffset.spd(), this.metadata && (Jd.metadata = this.metadata), this.subEmitters) {
          Jd.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const kd of this._subEmitters) {
            const pd = [];
            for (const Jd of kd) Jd.particleSystem.doNotSerialize || pd.push(Jd.serialize(dd));
            Jd.subEmitters.push(pd)
          }
        }
        if (this._attractors && this._attractors.length) {
          Jd.attractors = [];
          for (const dd of this._attractors) Jd.attractors.push(dd.serialize())
        }
        return Jd
      }
      static _Serialize(dd, Jd, kd) {
        if (dd.name = Jd.name, dd.id = Jd.id, dd.oo = Jd.getCapacity(), dd.disposeOnStop = Jd.disposeOnStop, dd.manualEmitCount = Jd.manualEmitCount, Jd.emitter.position) {
          const kd = Jd.emitter;
          dd.emitterId = kd.id
        } else {
          const kd = Jd.emitter;
          dd.emitter = kd.spd()
        }
        if (Jd.particleEmitterType && (dd.particleEmitterType = Jd.particleEmitterType.serialize()), Jd.particleTexture)
          if (kd) dd.texture = Jd.particleTexture.serialize();
          else {
            const kd = Jd.particleTexture;
            dd.textureName = Jd.particleTexture.name, dd.invertY = !!kd._invertY;
            const pd = {};
            for (const dd of rJ) pd[dd] = kd[dd];
            pd.samplingMode = kd.samplingMode, dd.textureSettings = pd
          } dd.isLocal = Jd.isLocal, UJ.c.AppendSerializedAnimations(Jd, dd), dd.beginAnimationOnStart = Jd.beginAnimationOnStart, dd.beginAnimationFrom = Jd.beginAnimationFrom, dd.beginAnimationTo = Jd.beginAnimationTo, dd.beginAnimationLoop = Jd.beginAnimationLoop, dd.startDelay = Jd.startDelay, dd.renderingGroupId = Jd.renderingGroupId, dd.isBillboardBased = Jd.isBillboardBased, dd.billboardMode = Jd.billboardMode, dd.minAngularSpeed = Jd.minAngularSpeed, dd.maxAngularSpeed = Jd.maxAngularSpeed, dd.minSize = Jd.minSize, dd.maxSize = Jd.maxSize, dd.minScaleX = Jd.minScaleX, dd.maxScaleX = Jd.maxScaleX, dd.minScaleY = Jd.minScaleY, dd.maxScaleY = Jd.maxScaleY, dd.minEmitPower = Jd.minEmitPower, dd.maxEmitPower = Jd.maxEmitPower, dd.minLifeTime = Jd.minLifeTime, dd.maxLifeTime = Jd.maxLifeTime, dd.emitRate = Jd.emitRate, dd.gravity = Jd.gravity.spd(), dd.noiseStrength = Jd.noiseStrength.spd(), dd.color1 = Jd.color1.spd(), dd.color2 = Jd.color2.spd(), dd.colorDead = Jd.colorDead.spd(), dd.updateSpeed = Jd.updateSpeed, dd.targetStopDuration = Jd.targetStopDuration, dd.blendMode = Jd.blendMode, dd.preWarmCycles = Jd.preWarmCycles, dd.preWarmStepOffset = Jd.preWarmStepOffset, dd.minInitialRotation = Jd.minInitialRotation, dd.maxInitialRotation = Jd.maxInitialRotation, dd.startSpriteCellID = Jd.startSpriteCellID, dd.spriteCellLoop = Jd.spriteCellLoop, dd.endSpriteCellID = Jd.endSpriteCellID, dd.spriteCellChangeSpeed = Jd.spriteCellChangeSpeed, dd.spriteCellWidth = Jd.spriteCellWidth, dd.spriteCellHeight = Jd.spriteCellHeight, dd.spriteRandomStartCell = Jd.spriteRandomStartCell, dd.isAnimationSheetEnabled = Jd.isAnimationSheetEnabled, dd.useLogarithmicDepth = Jd.useLogarithmicDepth;
        const pd = Jd.getColorGradients();
        if (pd) {
          dd.colorGradients = [];
          for (const Jd of pd) {
            const kd = {
              gradient: Jd.gradient,
              color1: Jd.color1.spd()
            };
            Jd.color2 ? kd.color2 = Jd.color2.spd() : kd.color2 = Jd.color1.spd(), dd.colorGradients.push(kd)
          }
        }
        const Nd = Jd.getRampGradients();
        if (Nd) {
          dd.rampGradients = [];
          for (const Jd of Nd) {
            const kd = {
              gradient: Jd.gradient,
              color: Jd.color.spd()
            };
            dd.rampGradients.push(kd)
          }
          dd.useRampGradients = Jd.useRampGradients
        }
        const Wd = Jd.getColorRemapGradients();
        if (Wd) {
          dd.colorRemapGradients = [];
          for (const Jd of Wd) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.colorRemapGradients.push(kd)
          }
        }
        const Pd = Jd.getAlphaRemapGradients();
        if (Pd) {
          dd.alphaRemapGradients = [];
          for (const Jd of Pd) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.alphaRemapGradients.push(kd)
          }
        }
        const Zd = Jd.getSizeGradients();
        if (Zd) {
          dd.sizeGradients = [];
          for (const Jd of Zd) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.sizeGradients.push(kd)
          }
        }
        const gd = Jd.getAngularSpeedGradients();
        if (gd) {
          dd.angularSpeedGradients = [];
          for (const Jd of gd) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.angularSpeedGradients.push(kd)
          }
        }
        const Cd = Jd.getVelocityGradients();
        if (Cd) {
          dd.velocityGradients = [];
          for (const Jd of Cd) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.velocityGradients.push(kd)
          }
        }
        const Kd = Jd.getDragGradients();
        if (Kd) {
          dd.dragGradients = [];
          for (const Jd of Kd) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.dragGradients.push(kd)
          }
        }
        const od = Jd.getEmitRateGradients();
        if (od) {
          dd.emitRateGradients = [];
          for (const Jd of od) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.emitRateGradients.push(kd)
          }
        }
        const ld = Jd.getStartSizeGradients();
        if (ld) {
          dd.startSizeGradients = [];
          for (const Jd of ld) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.startSizeGradients.push(kd)
          }
        }
        const Qd = Jd.getLifeTimeGradients();
        if (Qd) {
          dd.lifeTimeGradients = [];
          for (const Jd of Qd) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.lifeTimeGradients.push(kd)
          }
        }
        const Ld = Jd.getLimitVelocityGradients();
        if (Ld) {
          dd.limitVelocityGradients = [];
          for (const Jd of Ld) {
            const kd = {
              gradient: Jd.gradient,
              factor1: Jd.factor1
            };
            void 0 !== Jd.factor2 ? kd.factor2 = Jd.factor2 : kd.factor2 = Jd.factor1, dd.limitVelocityGradients.push(kd)
          }
          dd.limitVelocityDamping = Jd.limitVelocityDamping
        }
        Jd.noiseTexture && (dd.noiseTexture = Jd.noiseTexture.serialize())
      }
      clone(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = {
          ...this._customWrappers
        };
        let Nd = null;
        const Wd = this._engine;
        if ((0, nd.e)(Wd.createEffectForParticles) && null != this.customShader) {
          Nd = this.customShader;
          const dd = Nd.shaderOptions.defines.length > 0 ? Nd.shaderOptions.defines.join("\n") : "",
            Jd = Wd.createEffectForParticles(Nd.shaderPath.fragmentElement, Nd.shaderOptions.uniforms, Nd.shaderOptions.samplers, dd);
          pd[0] ? pd[0].effect = Jd : this.setCustomEffect(Jd, 0)
        }
        const Pd = this.serialize(kd),
          Zd = !1 === kd && this.particleTexture ? this.particleTexture.clone() : null;
        Zd && (Pd.textureName = void 0);
        const gd = uJ.Parse(Pd, this._scene || this._engine, this._rootUrl);
        return gd.name = dd, gd.customShader = Nd, gd._customWrappers = pd, Zd && (gd.particleTexture = Zd), void 0 === Jd && (Jd = this.emitter), this.noiseTexture && (gd.noiseTexture = this.noiseTexture.clone()), gd.emitter = Jd, this.preventAutoStart || gd.start(), gd
      }
    }
    uJ.BILLBOARDMODE_Y = 2, uJ.BILLBOARDMODE_ALL = 7, uJ.BILLBOARDMODE_STRETCHED = 8, uJ.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let tJ = !1;
    tJ || (tJ = !0, fJ._ParseParticleSystem = uJ.Parse)
  },
  41607: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      SkyMaterial: () => Gd,
      _MaxColorValueForRenderTarget: () => Id
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(39983),
      Pd = kd(37245),
      Zd = kd(40275),
      gd = kd(40333),
      Cd = kd(41566),
      Kd = kd(41134),
      od = kd(40054),
      ld = kd(37303),
      Qd = kd(40358),
      Ld = kd(40339),
      Od = kd(40317),
      ed = kd(40308);
    class Rd extends Zd.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Id(dd) {
      switch (dd) {
        case Cd.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Cd.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Gd = (() => {
      var dd;
      let Jd, Zd, Cd, ld, Gd, vd, xd, qd, Bd, sd, ad, Md, Fd, Yd, md, bd = gd.c,
        Sd = [],
        jd = [],
        Xd = [],
        fd = [],
        nd = [],
        Ud = [],
        yd = [],
        Dd = [],
        Td = [],
        Ed = [],
        cd = [],
        hd = [],
        rd = [],
        ud = [],
        td = [],
        Vd = [],
        zd = [],
        Hd = [],
        wd = [],
        Ad = [],
        dJ = [],
        JJ = [],
        kJ = [],
        pJ = [],
        NJ = [],
        WJ = [],
        PJ = [],
        ZJ = [],
        gJ = [],
        CJ = [];
      return dd = class extends bd {
        constructor(dd, Jd) {
          super(dd, Jd, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, pd.i)(this, Sd, 1), this.turbidity = ((0, pd.i)(this, jd), (0, pd.i)(this, Xd, 10)), this.rayleigh = ((0, pd.i)(this, fd), (0, pd.i)(this, nd, 2)), this.mieCoefficient = ((0, pd.i)(this, Ud), (0, pd.i)(this, yd, .005)), this.mieDirectionalG = ((0, pd.i)(this, Dd), (0, pd.i)(this, Td, .8)), this.distance = ((0, pd.i)(this, Ed), (0, pd.i)(this, cd, 500)), this.inclination = ((0, pd.i)(this, hd), (0, pd.i)(this, rd, .49)), this.azimuth = ((0, pd.i)(this, ud), (0, pd.i)(this, td, .25)), this.sunPosition = ((0, pd.i)(this, Vd), (0, pd.i)(this, zd, new Pd.IL(0, 100, 0))), this.useSunPosition = ((0, pd.i)(this, Hd), (0, pd.i)(this, wd, !1)), this.cameraOffset = ((0, pd.i)(this, Ad), (0, pd.i)(this, dJ, Pd.IL.Zero())), this.up = ((0, pd.i)(this, JJ), (0, pd.i)(this, kJ, Pd.IL.Up())), this.dithering = ((0, pd.i)(this, pJ), (0, pd.i)(this, NJ, !1)), this.rawHdrOutput = ((0, pd.i)(this, WJ), (0, pd.i)(this, PJ, !1)), this.cloudiness = ((0, pd.i)(this, ZJ), (0, pd.i)(this, gJ, 0)), this._cameraPosition = ((0, pd.i)(this, CJ), Pd.IL.Zero()), this._skyOrientation = new Pd.Quaternion
        }
        needAlphaBlending() {
          return this.alpha < 1
        }
        needAlphaTesting() {
          return !1
        }
        getAlphaTestTexture() {
          return null
        }
        isReadyForSubMesh(Jd, kd) {
          const pd = kd._drawWrapper;
          if (this.isFrozen && pd.effect && pd._wasPreviouslyReady) return !0;
          kd.materialDefines || (kd.materialDefines = new Rd);
          const Nd = kd.materialDefines,
            Wd = this.Wm();
          if (this._isReadyForSubMesh(kd)) return !0;
          if ((0, ed.eb)(Jd, Wd, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Nd, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, ed.R)(Jd, Nd, !0, !1), Nd.IMAGEPROCESSINGPOSTPROCESS !== Wd.imageProcessingConfiguration.applyByPostProcess && Nd.markAsMiscDirty(), Nd.DITHER !== this.dithering && Nd.markAsMiscDirty(), Nd.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Nd.markAsMiscDirty(), Nd.isDirty) {
            Nd.markAsProcessed(), Wd.resetCachedMaterial();
            const Jd = new Ld.e;
            Nd.FOG && Jd.addFallback(1, "FOG"), Nd.IMAGEPROCESSINGPOSTPROCESS = Wd.imageProcessingConfiguration.applyByPostProcess, Nd.DITHER = this.dithering, Nd.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const pd = [Kd.f.PositionKind];
            Nd.VERTEXCOLOR && pd.push(Kd.f.ColorKind);
            const Pd = "sky",
              Zd = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Od.e)(Zd);
            const gd = Nd.toString();
            kd.setEffect(Wd.eL().createEffect(Pd, {
              attributes: pd,
              uniformsNames: Zd,
              uniformBuffersNames: [],
              samplers: [],
              defines: gd,
              fallbacks: Jd,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: dd._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Wd.eL()), Nd, this._materialContext)
          }
          return !(!kd.effect || !kd.effect.isReady()) && (Nd._renderId = Wd.getRenderId(), pd._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(dd, Jd, kd) {
          const pd = this.Wm(),
            Nd = kd.materialDefines;
          if (!Nd) return;
          const Wd = kd.effect;
          if (!Wd) return;
          this._activeEffect = Wd, this.bindOnlyWorldMatrix(dd), this._activeEffect.setMatrix("viewProjection", pd.getTransformMatrix()), this._mustRebind(pd, Wd, kd) && ((0, Od.i)(Wd, this, pd), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, ed.s)(Nd, Wd, pd)), pd.fogEnabled && Jd.applyFog && pd.fogMode !== od.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", pd.getViewMatrix()), (0, ed.k)(pd, Jd, this._activeEffect, this.rawHdrOutput);
          const Zd = pd.activeCamera;
          if (Zd) {
            const dd = Zd.getWorldMatrix();
            this._cameraPosition.x = dd.m[12], this._cameraPosition.y = dd.m[13], this._cameraPosition.z = dd.m[14], this._activeEffect.setVector3("cameraPosition", Pd.TmpVectors.IL[0].Fs(this._cameraPosition).hpd(pd.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const dd = pd.eL()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Id(dd?.texture?.type))
          }
          if (!this.useSunPosition) {
            const dd = Math.PI * (this.inclination - .5),
              Jd = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Jd) * Math.cos(dd), this.sunPosition.y = this.distance * Math.sin(-dd), this.sunPosition.z = this.distance * Math.sin(Jd) * Math.cos(dd), Pd.Quaternion.FromUnitVectorsToRef(Pd.IL.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Jd, this._activeEffect, kd)
        }
        getAnimatables() {
          return []
        }
        dispose(dd) {
          super.dispose(dd)
        }
        clone(Jd) {
          return Wd.c.Clone((() => new dd(Jd, this.Wm())), this)
        }
        serialize() {
          const dd = super.serialize();
          return dd.customType = "BABYLON.SkyMaterial", dd
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Jd, kd, pd) {
          return Wd.c.Parse((() => new dd(Jd.name, kd)), Jd, kd, pd)
        }
      }, (() => {
        const kd = "function" === typeof Symbol && Symbol.metadata ? Object.create(bd[Symbol.metadata] ?? null) : void 0;
        Jd = [(0, Nd.H)()], Zd = [(0, Nd.H)()], Cd = [(0, Nd.H)()], ld = [(0, Nd.H)()], Gd = [(0, Nd.H)()], vd = [(0, Nd.H)()], xd = [(0, Nd.H)()], qd = [(0, Nd.H)()], Bd = [(0, Nd.F)()], sd = [(0, Nd.H)()], ad = [(0, Nd.F)()], Md = [(0, Nd.F)()], Fd = [(0, Nd.H)()], Yd = [(0, Nd.H)()], md = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: dd => "luminance" in dd,
            get: dd => dd.luminance,
            set: (dd, Jd) => {
              dd.luminance = Jd
            }
          },
          metadata: kd
        }, Sd, jd), (0, pd.h)(null, null, Zd, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: dd => "turbidity" in dd,
            get: dd => dd.turbidity,
            set: (dd, Jd) => {
              dd.turbidity = Jd
            }
          },
          metadata: kd
        }, Xd, fd), (0, pd.h)(null, null, Cd, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: dd => "rayleigh" in dd,
            get: dd => dd.rayleigh,
            set: (dd, Jd) => {
              dd.rayleigh = Jd
            }
          },
          metadata: kd
        }, nd, Ud), (0, pd.h)(null, null, ld, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: dd => "mieCoefficient" in dd,
            get: dd => dd.mieCoefficient,
            set: (dd, Jd) => {
              dd.mieCoefficient = Jd
            }
          },
          metadata: kd
        }, yd, Dd), (0, pd.h)(null, null, Gd, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: dd => "mieDirectionalG" in dd,
            get: dd => dd.mieDirectionalG,
            set: (dd, Jd) => {
              dd.mieDirectionalG = Jd
            }
          },
          metadata: kd
        }, Td, Ed), (0, pd.h)(null, null, vd, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: dd => "distance" in dd,
            get: dd => dd.distance,
            set: (dd, Jd) => {
              dd.distance = Jd
            }
          },
          metadata: kd
        }, cd, hd), (0, pd.h)(null, null, xd, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: dd => "inclination" in dd,
            get: dd => dd.inclination,
            set: (dd, Jd) => {
              dd.inclination = Jd
            }
          },
          metadata: kd
        }, rd, ud), (0, pd.h)(null, null, qd, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: dd => "azimuth" in dd,
            get: dd => dd.azimuth,
            set: (dd, Jd) => {
              dd.azimuth = Jd
            }
          },
          metadata: kd
        }, td, Vd), (0, pd.h)(null, null, Bd, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: dd => "sunPosition" in dd,
            get: dd => dd.sunPosition,
            set: (dd, Jd) => {
              dd.sunPosition = Jd
            }
          },
          metadata: kd
        }, zd, Hd), (0, pd.h)(null, null, sd, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSunPosition" in dd,
            get: dd => dd.useSunPosition,
            set: (dd, Jd) => {
              dd.useSunPosition = Jd
            }
          },
          metadata: kd
        }, wd, Ad), (0, pd.h)(null, null, ad, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: dd => "cameraOffset" in dd,
            get: dd => dd.cameraOffset,
            set: (dd, Jd) => {
              dd.cameraOffset = Jd
            }
          },
          metadata: kd
        }, dJ, JJ), (0, pd.h)(null, null, Md, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: dd => "up" in dd,
            get: dd => dd.up,
            set: (dd, Jd) => {
              dd.up = Jd
            }
          },
          metadata: kd
        }, kJ, pJ), (0, pd.h)(null, null, Fd, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: dd => "dithering" in dd,
            get: dd => dd.dithering,
            set: (dd, Jd) => {
              dd.dithering = Jd
            }
          },
          metadata: kd
        }, NJ, WJ), (0, pd.h)(null, null, Yd, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: dd => "rawHdrOutput" in dd,
            get: dd => dd.rawHdrOutput,
            set: (dd, Jd) => {
              dd.rawHdrOutput = Jd
            }
          },
          metadata: kd
        }, PJ, ZJ), (0, pd.h)(null, null, md, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: dd => "cloudiness" in dd,
            get: dd => dd.cloudiness,
            set: (dd, Jd) => {
              dd.cloudiness = Jd
            }
          },
          metadata: kd
        }, gJ, CJ), kd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kd
        })
      })(), dd._ShaderLoader = new Qd.e((() => [kd.e(321).then((() => kd(60939))), kd.e(314).then((() => kd(60946)))]), (() => [kd.e(338).then((() => kd(60950))), kd.e(332).then((() => kd(60952)))])), dd
    })();
    (0, ld.h)("BABYLON.SkyMaterial", Gd)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);