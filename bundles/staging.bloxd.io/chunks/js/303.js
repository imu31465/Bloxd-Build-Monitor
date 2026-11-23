export const id = 303;
export const ids = [303];
export const modules = {
  41615: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(40107),
      Tk = Ik(41620);
    class ik {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = Ik, this.PXk = [], this._maxBlockCapacity = Fk || 64, this._selectionContent = new Xk.d(1024), this._creationFunc = kk
      }
      update(kk, Fk, Ik) {
        Tk.b._CreateBlocks(kk, Fk, Ik, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      lXk(kk) {
        for (let Fk = 0; Fk < this.blocks.length; Fk++) {
          this.blocks[Fk].addEntry(kk)
        }
      }
      zp(kk) {
        for (let Fk = 0; Fk < this.blocks.length; Fk++) {
          this.blocks[Fk].removeEntry(kk)
        }
      }
      select(kk, Fk) {
        this._selectionContent.reset();
        for (let Ik = 0; Ik < this.blocks.length; Ik++) {
          this.blocks[Ik].select(kk, this._selectionContent, Fk)
        }
        return Fk ? this._selectionContent.concat(this.PXk) : this._selectionContent.concatWithNoDuplicate(this.PXk), this._selectionContent
      }
      intersects(kk, Fk, Ik) {
        this._selectionContent.reset();
        for (let Xk = 0; Xk < this.blocks.length; Xk++) {
          this.blocks[Xk].intersects(kk, Fk, this._selectionContent, Ik)
        }
        return Ik ? this._selectionContent.concat(this.PXk) : this._selectionContent.concatWithNoDuplicate(this.PXk), this._selectionContent
      }
      intersectsRay(kk) {
        this._selectionContent.reset();
        for (let Fk = 0; Fk < this.blocks.length; Fk++) {
          this.blocks[Fk].intersectsRay(kk, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.PXk), this._selectionContent
      }
    }
    ik.CreationFuncForMeshes = (kk, Fk) => {
      const Ik = kk.vR();
      !kk.isBlocked && Ik.boundingBox.intersectsMinMax(Fk.ZXk, Fk.tXk) && Fk.entries.push(kk)
    }, ik.CreationFuncForSubMeshes = (kk, Fk) => {
      kk.vR().boundingBox.intersectsMinMax(Fk.ZXk, Fk.tXk) && Fk.entries.push(kk)
    }
  },
  41620: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik
    });
    var Xk = Ik(37153),
      Tk = Ik(40312);
    class ik {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.entries = [], this.KXk = new Array, this._capacity = Ik, this._depth = Xk, this._maxDepth = Tk, this._creationFunc = ik, this._minPoint = kk, this._maxPoint = Fk, this.KXk.push(kk.clone()), this.KXk.push(Fk.clone()), this.KXk.push(kk.clone()), this.KXk[2].x = Fk.x, this.KXk.push(kk.clone()), this.KXk[3].y = Fk.y, this.KXk.push(kk.clone()), this.KXk[4].z = Fk.z, this.KXk.push(Fk.clone()), this.KXk[5].z = kk.z, this.KXk.push(Fk.clone()), this.KXk[6].x = kk.x, this.KXk.push(Fk.clone()), this.KXk[7].y = kk.y
      }
      get St() {
        return this._capacity
      }
      get ZXk() {
        return this._minPoint
      }
      get tXk() {
        return this._maxPoint
      }
      addEntry(kk) {
        if (this.blocks)
          for (let Fk = 0; Fk < this.blocks.length; Fk++) {
            this.blocks[Fk].addEntry(kk)
          } else this._creationFunc(kk, this), this.entries.length > this.St && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(kk) {
        if (this.blocks) {
          for (let Fk = 0; Fk < this.blocks.length; Fk++) {
            this.blocks[Fk].removeEntry(kk)
          }
          return
        }
        const Fk = this.entries.indexOf(kk);
        Fk > -1 && this.entries.splice(Fk, 1)
      }
      addEntries(kk) {
        for (let Fk = 0; Fk < kk.length; Fk++) {
          const Ik = kk[Fk];
          this.addEntry(Ik)
        }
      }
      select(kk, Fk, Ik) {
        if (Tk.d.IsInFrustum(this.KXk, kk)) {
          if (this.blocks) {
            for (let Xk = 0; Xk < this.blocks.length; Xk++) {
              this.blocks[Xk].select(kk, Fk, Ik)
            }
            return
          }
          Ik ? Fk.concat(this.entries) : Fk.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(kk, Fk, Ik, Xk) {
        if (Tk.d.IntersectsSphere(this._minPoint, this._maxPoint, kk, Fk)) {
          if (this.blocks) {
            for (let Tk = 0; Tk < this.blocks.length; Tk++) {
              this.blocks[Tk].intersects(kk, Fk, Ik, Xk)
            }
            return
          }
          Xk ? Ik.concat(this.entries) : Ik.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(kk, Fk) {
        if (kk.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let Ik = 0; Ik < this.blocks.length; Ik++) {
              this.blocks[Ik].intersectsRay(kk, Fk)
            }
            return
          }
          Fk.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        ik._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(kk, Fk, Ik, Tk, yk, lk, ak, qk) {
        ak.blocks = new Array;
        const Lk = new Xk.t((Fk.x - kk.x) / 2, (Fk.y - kk.y) / 2, (Fk.z - kk.z) / 2);
        for (let Xk = 0; Xk < 2; Xk++)
          for (let Fk = 0; Fk < 2; Fk++)
            for (let tk = 0; tk < 2; tk++) {
              const Zk = kk.add(Lk.multiplyByFloats(Xk, Fk, tk)),
                jk = kk.add(Lk.multiplyByFloats(Xk + 1, Fk + 1, tk + 1)),
                ek = new ik(Zk, jk, Tk, yk + 1, lk, qk);
              ek.addEntries(Ik), ak.blocks.push(ek)
            }
      }
    }
  },
  41629: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Lk
    });
    var Xk = Ik(40090),
      Tk = Ik(37153),
      ik = Ik(40441),
      yk = Ik(41568),
      lk = Ik(40166),
      ak = Ik(37178),
      qk = Ik(41615);
    class Lk {
      constructor(kk) {
        this.name = lk.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new yk.s(Tk.t.Zero(), new Tk.t(1, 1, 1)), (kk = kk || ak.e.LastCreatedScene) && (this.Yw = kk, this.Yw.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Yw.getActiveSubMeshCandidates = kk => this.getActiveSubMeshCandidates(kk), this.Yw.getCollidingSubMeshCandidates = (kk, Fk) => this.getCollidingSubMeshCandidates(kk, Fk), this.Yw.getIntersectingSubMeshCandidates = (kk, Fk) => this.getIntersectingSubMeshCandidates(kk, Fk))
      }
      register() {
        this.Yw.onMeshRemovedObservable.add((kk => {
          const Fk = this.Yw.selectionOctree;
          if (void 0 !== Fk && null !== Fk) {
            const Ik = Fk.PXk.indexOf(kk); - 1 !== Ik && Fk.PXk.splice(Ik, 1)
          }
        })), this.Yw.onMeshImportedObservable.add((kk => {
          const Fk = this.Yw.selectionOctree;
          void 0 !== Fk && null !== Fk && Fk.lXk(kk)
        }))
      }
      getActiveMeshCandidates() {
        return this.Yw.oXk?.select(this.Yw.frustumPlanes) || this.Yw._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(kk) {
        if (kk._submeshesOctree && kk.useOctreeForRenderingSelection) {
          return kk._submeshesOctree.select(this.Yw.frustumPlanes)
        }
        return this.Yw._getDefaultSubMeshCandidates(kk)
      }
      getIntersectingSubMeshCandidates(kk, Fk) {
        if (kk._submeshesOctree && kk.useOctreeForPicking) {
          yk.s.TransformToRef(Fk, kk.getWorldMatrix(), this._tempRay);
          return kk._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Yw._getDefaultSubMeshCandidates(kk)
      }
      getCollidingSubMeshCandidates(kk, Fk) {
        if (kk._submeshesOctree && kk.useOctreeForCollisions) {
          const Ik = Fk._velocityWorldLength + Math.max(Fk._radius.x, Fk._radius.y, Fk._radius.z);
          return kk._submeshesOctree.intersects(Fk._basePointWorld, Ik)
        }
        return this.Yw._getDefaultSubMeshCandidates(kk)
      }
      rebuild() {}
      dispose() {}
    }
    let tk = !1;
    tk || (tk = !0, Xk.f.prototype.createOrUpdateSelectionOctree = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        Ik = this._getComponent(lk.b.NAME_OCTREE);
      Ik || (Ik = new Lk(this), this.AIk(Ik)), this.oXk || (this.oXk = new qk.e(qk.e.CreationFuncForMeshes, kk, Fk));
      const Xk = this.getWorldExtends();
      return this.oXk.update(Xk.min, Xk.max, this.meshes), this.oXk
    }, Object.defineProperty(Xk.f.prototype, "selectionOctree", {
      get: function() {
        return this.oXk
      },
      enumerable: !0,
      configurable: !0
    }), ik.d.prototype.createOrUpdateSubmeshesOctree = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Ik = this.mG();
      let Xk = Ik._getComponent(lk.b.NAME_OCTREE);
      Xk || (Xk = new Lk(Ik), Ik.AIk(Xk)), this._submeshesOctree || (this._submeshesOctree = new qk.e(qk.e.CreationFuncForSubMeshes, kk, Fk)), this.computeWorldMatrix(!0);
      const Tk = this.vR().boundingBox;
      return this._submeshesOctree.update(Tk.minimumWorld, Tk.maximumWorld, this.lK), this._submeshesOctree
    })
  },
  41568: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => nk,
      c: () => wk,
      d: () => ek,
      g: () => jk,
      i: () => Ek,
      j: () => vk,
      m: () => Vk,
      n: () => Sk,
      r: () => zk,
      s: () => tk
    });
    var Xk = Ik(37158),
      Tk = Ik(37153),
      ik = Ik(37166),
      yk = Ik(40304),
      lk = Ik(40139),
      ak = Ik(37178),
      qk = Ik(40189);
    const Lk = {
      internalPickerForMesh: void 0
    };
    class tk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xk.b;
        this.origin = kk, this.direction = Fk, this.length = Ik, this.epsilon = Tk
      }
      clone() {
        return new tk(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Xk = tk._TmpVector3[0].t5(kk.x - Ik, kk.y - Ik, kk.z - Ik),
          Tk = tk._TmpVector3[1].t5(Fk.x + Ik, Fk.y + Ik, Fk.z + Ik);
        let ik, yk, lk, ak, qk = 0,
          Lk = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Xk.x || this.origin.x > Tk.x) return !1
        } else if (ik = 1 / this.direction.x, yk = (Xk.x - this.origin.x) * ik, lk = (Tk.x - this.origin.x) * ik, lk === -1 / 0 && (lk = 1 / 0), yk > lk && (ak = yk, yk = lk, lk = ak), qk = Math.max(yk, qk), Lk = Math.min(lk, Lk), qk > Lk) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Xk.y || this.origin.y > Tk.y) return !1
        } else if (ik = 1 / this.direction.y, yk = (Xk.y - this.origin.y) * ik, lk = (Tk.y - this.origin.y) * ik, lk === -1 / 0 && (lk = 1 / 0), yk > lk && (ak = yk, yk = lk, lk = ak), qk = Math.max(yk, qk), Lk = Math.min(lk, Lk), qk > Lk) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Xk.z || this.origin.z > Tk.z) return !1
        } else if (ik = 1 / this.direction.z, yk = (Xk.z - this.origin.z) * ik, lk = (Tk.z - this.origin.z) * ik, lk === -1 / 0 && (lk = 1 / 0), yk > lk && (ak = yk, yk = lk, lk = ak), qk = Math.max(yk, qk), Lk = Math.min(lk, Lk), qk > Lk) return !1;
        return !0
      }
      intersectsBox(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(kk.minimum, kk.maximum, Fk)
      }
      intersectsSphere(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = kk.center.x - this.origin.x,
          Xk = kk.center.y - this.origin.y,
          Tk = kk.center.z - this.origin.z,
          ik = Ik * Ik + Xk * Xk + Tk * Tk,
          yk = kk.radius + Fk,
          lk = yk * yk;
        if (ik <= lk) return !0;
        const ak = Ik * this.direction.x + Xk * this.direction.y + Tk * this.direction.z;
        if (ak < 0) return !1;
        return ik - ak * ak <= lk
      }
      intersectsTriangle(kk, Fk, Ik) {
        const Xk = tk._TmpVector3[0],
          ik = tk._TmpVector3[1],
          lk = tk._TmpVector3[2],
          ak = tk._TmpVector3[3],
          qk = tk._TmpVector3[4];
        Fk.subtractToRef(kk, Xk), Ik.subtractToRef(kk, ik), Tk.t.CrossToRef(this.direction, ik, lk);
        const Lk = Tk.t.Dot(Xk, lk);
        if (0 === Lk) return null;
        const Zk = 1 / Lk;
        this.origin.subtractToRef(kk, ak);
        const jk = Tk.t.Dot(ak, lk) * Zk;
        if (jk < -this.epsilon || jk > 1 + this.epsilon) return null;
        Tk.t.CrossToRef(ak, Xk, qk);
        const ek = Tk.t.Dot(this.direction, qk) * Zk;
        if (ek < -this.epsilon || jk + ek > 1 + this.epsilon) return null;
        const wk = Tk.t.Dot(ik, qk) * Zk;
        return wk > this.length || wk < 0 ? null : new yk.d(1 - jk - ek, jk, wk)
      }
      intersectsPlane(kk) {
        let Fk;
        const Ik = Tk.t.Dot(kk.normal, this.direction);
        if (Math.abs(Ik) < 9.99999997475243e-7) return null;
        {
          const Xk = Tk.t.Dot(kk.normal, this.origin);
          return Fk = (-kk.d - Xk) / Ik, Fk < 0 ? Fk < -9.99999997475243e-7 ? null : 0 : Fk
        }
      }
      intersectsAxis(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (kk) {
          case "y": {
            const kk = (this.origin.y - Fk) / this.direction.y;
            return kk > 0 ? null : new Tk.t(this.origin.x + this.direction.x * -kk, Fk, this.origin.z + this.direction.z * -kk)
          }
          case "x": {
            const kk = (this.origin.x - Fk) / this.direction.x;
            return kk > 0 ? null : new Tk.t(Fk, this.origin.y + this.direction.y * -kk, this.origin.z + this.direction.z * -kk)
          }
          case "z": {
            const kk = (this.origin.z - Fk) / this.direction.z;
            return kk > 0 ? null : new Tk.t(this.origin.x + this.direction.x * -kk, this.origin.y + this.direction.y * -kk, Fk)
          }
          default:
            return null
        }
      }
      dXk(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ik = arguments.length > 4 ? arguments[4] : void 0,
          yk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const lk = Tk.l.Matrix[0];
        return kk.getWorldMatrix().invertToRef(lk), this._tmpRay ? tk.TransformToRef(this, lk, this._tmpRay) : this._tmpRay = tk.Transform(this, lk), kk.intersects(this._tmpRay, Fk, Ik, Xk, ik, yk)
      }
      intersectsMeshes(kk, Fk, Ik) {
        Ik ? Ik.length = 0 : Ik = [];
        for (let Xk = 0; Xk < kk.length; Xk++) {
          const Tk = this.dXk(kk[Xk], Fk);
          Tk.hit && Ik.push(Tk)
        }
        return Ik.sort(this._comparePickingInfo), Ik
      }
      _comparePickingInfo(kk, Fk) {
        return kk.distance < Fk.distance ? -1 : kk.distance > Fk.distance ? 1 : 0
      }
      intersectionSegment(kk, Fk, Ik) {
        const Xk = this.origin,
          ik = Tk.l.Ge[0],
          yk = Tk.l.Ge[1],
          lk = Tk.l.Ge[2],
          ak = Tk.l.Ge[3];
        Fk.subtractToRef(kk, ik), this.direction.scaleToRef(tk._Rayl, lk), Xk.addToRef(lk, yk), kk.subtractToRef(Xk, ak);
        const qk = Tk.t.Dot(ik, ik),
          Lk = Tk.t.Dot(ik, lk),
          Zk = Tk.t.Dot(lk, lk),
          jk = Tk.t.Dot(ik, ak),
          ek = Tk.t.Dot(lk, ak),
          wk = qk * Zk - Lk * Lk;
        let Hk, Jk, xk = wk,
          Pk = wk;
        wk < tk._Smallnum ? (Hk = 0, xk = 1, Jk = ek, Pk = Zk) : (Hk = Lk * ek - Zk * jk, Jk = qk * ek - Lk * jk, Hk < 0 ? (Hk = 0, Jk = ek, Pk = Zk) : Hk > xk && (Hk = xk, Jk = ek + Lk, Pk = Zk)), Jk < 0 ? (Jk = 0, -jk < 0 ? Hk = 0 : -jk > qk ? Hk = xk : (Hk = -jk, xk = qk)) : Jk > Pk && (Jk = Pk, -jk + Lk < 0 ? Hk = 0 : -jk + Lk > qk ? Hk = xk : (Hk = -jk + Lk, xk = qk));
        const Kk = Math.abs(Hk) < tk._Smallnum ? 0 : Hk / xk,
          Qk = Math.abs(Jk) < tk._Smallnum ? 0 : Jk / Pk,
          sk = Tk.l.Ge[4];
        lk.scaleToRef(Qk, sk);
        const Vk = Tk.l.Ge[5];
        ik.scaleToRef(Kk, Vk), Vk.addInPlace(ak);
        const zk = Tk.l.Ge[6];
        Vk.subtractToRef(sk, zk);
        return Qk > 0 && Qk <= this.length && zk.lengthSquared() < Ik * Ik ? Vk.length() : -1
      }
      update(kk, Fk, Ik, Xk, ik, yk, lk) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          tk._RayDistant || (tk._RayDistant = tk.Zero()), tk._RayDistant.unprojectRayToRef(kk, Fk, Ik, Xk, Tk.c.IdentityReadOnly, yk, lk);
          const ak = Tk.l.Matrix[0];
          ik.invertToRef(ak), tk.TransformToRef(tk._RayDistant, ak, this)
        } else this.unprojectRayToRef(kk, Fk, Ik, Xk, ik, yk, lk);
        return this
      }
      static Zero() {
        return new tk(Tk.t.Zero(), Tk.t.Zero())
      }
      static CreateNew(kk, Fk, Ik, Xk, Tk, ik, yk) {
        return tk.Zero().update(kk, Fk, Ik, Xk, Tk, ik, yk)
      }
      static CreateNewFromTo(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tk.c.IdentityReadOnly;
        const Xk = new tk(new Tk.t(0, 0, 0), new Tk.t(0, 0, 0));
        return tk.CreateFromToToRef(kk, Fk, Xk, Ik)
      }
      static CreateFromToToRef(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tk.c.IdentityReadOnly;
        Ik.origin.kS(kk);
        const ik = Fk.subtractToRef(kk, Ik.direction),
          yk = Math.sqrt(ik.x * ik.x + ik.y * ik.y + ik.z * ik.z);
        return Ik.length = yk, Ik.direction.normalize(), tk.TransformToRef(Ik, Xk, Ik)
      }
      static Transform(kk, Fk) {
        const Ik = new tk(new Tk.t(0, 0, 0), new Tk.t(0, 0, 0));
        return tk.TransformToRef(kk, Fk, Ik), Ik
      }
      static TransformToRef(kk, Fk, Ik) {
        Tk.t.TransformCoordinatesToRef(kk.origin, Fk, Ik.origin), Tk.t.TransformNormalToRef(kk.direction, Fk, Ik.direction), Ik.length = kk.length, Ik.epsilon = kk.epsilon;
        const Xk = Ik.direction,
          ik = Xk.length();
        if (0 !== ik && 1 !== ik) {
          const kk = 1 / ik;
          Xk.x *= kk, Xk.y *= kk, Xk.z *= kk, Ik.length *= ik
        }
        return Ik
      }
      unprojectRayToRef(kk, Fk, Ik, Xk, ik, yk, lk) {
        const qk = Tk.l.Matrix[0];
        ik.multiplyToRef(yk, qk), qk.multiplyToRef(lk, qk), qk.invert();
        const Lk = ak.e.LastCreatedEngine,
          tk = Tk.l.Ge[0];
        tk.x = kk / Ik * 2 - 1, tk.y = -(Fk / Xk * 2 - 1), tk.z = Lk?.IXk ? 1 : Lk?.isNDCHalfZRange ? 0 : -1;
        const Zk = Tk.l.Ge[1].t5(tk.x, tk.y, 1 - 1e-8),
          jk = Tk.l.Ge[2],
          ek = Tk.l.Ge[3];
        Tk.t.TransformCoordinatesToRef(tk, qk, jk), Tk.t.TransformCoordinatesToRef(Zk, qk, ek), this.origin.kS(jk), ek.subtractToRef(jk, this.direction), this.direction.normalize()
      }
    }

    function Zk(kk, Fk, Ik, Xk, Tk) {
      let ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const yk = tk.Zero();
      return jk(kk, Fk, Ik, Xk, yk, Tk, ik), yk
    }

    function jk(kk, Fk, Ik, Xk, ik, yk) {
      let lk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        ak = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const qk = kk.Oe();
      if (!yk && !(yk = kk.activeCamera) && !(yk = kk.cameraToUseForPointers)) return kk;
      const Lk = yk.viewport,
        tk = qk.getRenderHeight(),
        {
          x: Zk,
          y: jk,
          width: ek,
          height: wk
        } = Lk.toGlobal(qk.getRenderWidth(), tk),
        Hk = 1 / qk.getHardwareScalingLevel();
      return Fk = Fk * Hk - Zk, Ik = Ik * Hk - (tk - jk - wk), ik.update(Fk, Ik, ek, wk, Xk || Tk.c.IdentityReadOnly, lk ? Tk.c.IdentityReadOnly : yk.getViewMatrix(), yk.getProjectionMatrix(), ak), kk
    }

    function ek(kk, Fk, Ik, Xk) {
      const Tk = tk.Zero();
      return wk(kk, Fk, Ik, Tk, Xk), Tk
    }

    function wk(kk, Fk, Ik, Xk, ik) {
      if (!lk.b) return kk;
      const yk = kk.Oe();
      if (!ik && !(ik = kk.activeCamera) && !(ik = kk.cameraToUseForPointers)) throw new Error("Active camera not set");
      const ak = ik.viewport,
        qk = yk.getRenderHeight(),
        {
          x: Lk,
          y: tk,
          width: Zk,
          height: jk
        } = ak.toGlobal(yk.getRenderWidth(), qk),
        ek = Tk.c.Identity(),
        wk = 1 / yk.getHardwareScalingLevel();
      return Fk = Fk * wk - Lk, Ik = Ik * wk - (qk - tk - jk), Xk.update(Fk, Ik, Zk, jk, ek, ek, ik.getProjectionMatrix()), kk
    }

    function Hk(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
      return Jk(kk, Ik, Xk, Fk(Xk, Ik.enableDistantPicking), Tk, ik, yk, lk)
    }

    function Jk(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
      const ak = Fk.intersects(Xk, Tk, yk, ik, Ik, lk);
      return ak && ak.hit ? !Tk && null != kk && ak.distance >= kk.distance ? null : ak : null
    }

    function xk(kk, Fk) {
      return "InstancedLinesMesh" === kk || "LinesMesh" === kk ? Fk.intersectionThreshold : 0
    }

    function Pk(kk) {
      const Fk = kk.getClassName();
      if ("GreasedLineMesh" === Fk) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const Ik = kk.rawBoundingInfo;
      return {
        rawBoundingInfo: Ik,
        intersectionThreshold: Ik ? xk(Fk, kk) : 0
      }
    }

    function Kk(kk, Fk, Ik, Xk, Tk) {
      const ik = kk(Ik, Fk.enableDistantPicking);
      return ik.intersectsSphere(Xk.EXk, Tk) && ik.intersectsBox(Xk.boundingBox, Tk) ? ik : null
    }

    function Qk(kk, Fk, Ik, Xk, ik, yk) {
      let ak = null;
      const qk = !!(kk.activeCameras && kk.activeCameras.length > 1 && kk.cameraToUseForPointers !== kk.activeCamera),
        tk = kk.cameraToUseForPointers || kk.activeCamera,
        Zk = Lk.internalPickerForMesh || Hk,
        jk = Zk === Hk;
      for (let lk = 0; lk < kk.meshes.length; lk++) {
        const Lk = kk.meshes[lk];
        if (Ik) {
          if (!Ik(Lk, -1)) continue
        } else if (!Lk.isEnabled() || !Lk.isVisible || !Lk.gw) continue;
        const ek = qk && Lk.isWorldMatrixCameraDependent(),
          wk = Lk.computeWorldMatrix(ek, tk);
        if (Lk.hasThinInstances && Lk.vFk) {
          const kk = Zk(ak, Fk, Lk, wk, !0, !0, yk);
          if (kk) {
            if (ik) return kk;
            const {
              rawBoundingInfo: lk,
              intersectionThreshold: qk
            } = Pk(Lk), tk = Lk._thinInstanceDataStorage.matrixData;
            if (tk) {
              const kk = Tk.l.Matrix[0],
                ek = Tk.l.Matrix[1],
                Hk = Math.min(Lk.M6, tk.length >> 4);
              for (let xk = 0; xk < Hk; xk++) {
                if (Ik && !Ik(Lk, xk)) continue;
                Tk.c.FromArrayToRef(tk, xk << 4, kk), kk.multiplyToRef(wk, ek);
                const Hk = jk && lk ? Kk(Fk, Lk, ek, lk, qk) : null;
                if (jk && lk && !Hk) continue;
                const Pk = jk && Hk ? Jk(ak, Lk, ek, Hk, Xk, ik, yk, !0) : Zk(ak, Fk, Lk, ek, Xk, ik, yk, !0);
                if (Pk && (ak = Pk, ak.thinInstanceIndex = xk, Xk)) return ak
              }
            }
          }
        } else {
          const kk = Zk(ak, Fk, Lk, wk, Xk, ik, yk);
          if (kk && (ak = kk, Xk)) return ak
        }
      }
      return ak || new lk.b
    }

    function sk(kk, Fk, Ik, Xk) {
      if (!lk.b) return null;
      const ik = [],
        yk = !!(kk.activeCameras && kk.activeCameras.length > 1 && kk.cameraToUseForPointers !== kk.activeCamera),
        ak = kk.cameraToUseForPointers || kk.activeCamera,
        qk = Lk.internalPickerForMesh || Hk,
        tk = qk === Hk;
      for (let lk = 0; lk < kk.meshes.length; lk++) {
        const Lk = kk.meshes[lk];
        if (Ik) {
          if (!Ik(Lk, -1)) continue
        } else if (!Lk.isEnabled() || !Lk.isVisible || !Lk.gw) continue;
        const Zk = yk && Lk.isWorldMatrixCameraDependent(),
          jk = Lk.computeWorldMatrix(Zk, ak);
        if (Lk.hasThinInstances && Lk.vFk) {
          if (qk(null, Fk, Lk, jk, !0, !0, Xk)) {
            const {
              rawBoundingInfo: kk,
              intersectionThreshold: yk
            } = Pk(Lk), lk = Lk._thinInstanceDataStorage.matrixData;
            if (lk) {
              const ak = Tk.l.Matrix[0],
                Zk = Tk.l.Matrix[1],
                ek = Math.min(Lk.M6, lk.length >> 4);
              for (let wk = 0; wk < ek; wk++) {
                if (Ik && !Ik(Lk, wk)) continue;
                Tk.c.FromArrayToRef(lk, wk << 4, ak), ak.multiplyToRef(jk, Zk);
                const ek = tk && kk ? Kk(Fk, Lk, Zk, kk, yk) : null;
                if (tk && kk && !ek) continue;
                const Hk = tk && ek ? Jk(null, Lk, Zk, ek, !1, !1, Xk, !0) : qk(null, Fk, Lk, Zk, !1, !1, Xk, !0);
                Hk && (Hk.thinInstanceIndex = wk, ik.push(Hk))
              }
            }
          }
        } else {
          const kk = qk(null, Fk, Lk, jk, !1, !1, Xk);
          kk && ik.push(kk)
        }
      }
      return ik
    }

    function Vk(kk, Fk, Ik, Xk, ik, yk) {
      if (!lk.b) return null;
      const ak = Qk(kk, (Xk => (kk._tempPickingRay || (kk._tempPickingRay = tk.Zero()), jk(kk, Fk, Ik, Xk, kk._tempPickingRay, yk || null), kk._tempPickingRay)), Xk, ik, !0);
      return ak && (ak.ray = Zk(kk, Fk, Ik, Tk.c.Identity(), yk || null)), ak
    }

    function zk(kk, Fk, Ik, Xk, ik, yk, lk) {
      const ak = Qk(kk, ((Xk, Tk) => (kk._tempPickingRay || (kk._tempPickingRay = tk.Zero()), jk(kk, Fk, Ik, Xk, kk._tempPickingRay, yk || null, !1, Tk), kk._tempPickingRay)), Xk, ik, !1, lk);
      return ak && (ak.ray = Zk(kk, Fk, Ik, Tk.c.Identity(), yk || null)), ak
    }

    function Sk(kk, Fk, Ik, Xk, ik) {
      const yk = Qk(kk, (Ik => (kk._pickWithRayInverseMatrix || (kk._pickWithRayInverseMatrix = Tk.c.Identity()), Ik.invertToRef(kk._pickWithRayInverseMatrix), kk._cachedRayForTransform || (kk._cachedRayForTransform = tk.Zero()), tk.TransformToRef(Fk, kk._pickWithRayInverseMatrix, kk._cachedRayForTransform), kk._cachedRayForTransform)), Ik, Xk, !1, ik);
      return yk && (yk.ray = Fk), yk
    }

    function vk(kk, Fk, Ik, Xk, Tk, ik) {
      return sk(kk, (Xk => Zk(kk, Fk, Ik, Xk, Tk || null)), Xk, ik)
    }

    function Ek(kk, Fk, Ik, Xk) {
      return sk(kk, (Ik => (kk._pickWithRayInverseMatrix || (kk._pickWithRayInverseMatrix = Tk.c.Identity()), Ik.invertToRef(kk._pickWithRayInverseMatrix), kk._cachedRayForTransform || (kk._cachedRayForTransform = tk.Zero()), tk.TransformToRef(Fk, kk._pickWithRayInverseMatrix, kk._cachedRayForTransform), kk._cachedRayForTransform)), Ik, Xk)
    }

    function Ok(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Xk = arguments.length > 3 ? arguments[3] : void 0,
        ik = arguments.length > 4 ? arguments[4] : void 0;
      Xk || (Xk = kk.getWorldMatrix()), Fk.length = Ik, ik ? Fk.origin.kS(ik) : Fk.origin.kS(kk.position);
      const yk = Tk.l.Ge[2];
      yk.set(0, 0, kk._scene.useRightHandedSystem ? -1 : 1);
      const lk = Tk.l.Ge[3];
      return Tk.t.TransformNormalToRef(yk, Xk, lk), Tk.t.NormalizeToRef(lk, Fk.direction), Fk
    }

    function nk(kk, Fk) {
      Fk && (Fk.prototype.getForwardRay = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        return Ok(this, new tk(Tk.t.Zero(), Tk.t.Zero(), kk), kk, Fk, Ik)
      }, Fk.prototype.getForwardRayToRef = function(kk) {
        return Ok(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), kk && (qk.e._IsPickingAvailable = !0, kk.prototype.createPickingRay = function(kk, Fk, Ik, Xk) {
        return Zk(this, kk, Fk, Ik, Xk, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    tk._TmpVector3 = (0, ik.b)(6, Tk.t.Zero), tk._RayDistant = tk.Zero(), tk._Smallnum = 1e-8, tk._Rayl = 1e9
  },
  41561: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik.s
    });
    var Xk = Ik(40090),
      Tk = Ik(40214),
      ik = Ik(41568);
    let yk = !1;
    yk || (yk = !0, (0, ik.b)(Xk.f, Tk.d), Xk.f.prototype.createPickingRayToRef = function(kk, Fk, Ik, Xk, Tk) {
      let yk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ik.g)(this, kk, Fk, Ik, Xk, Tk, yk, lk)
    }, Xk.f.prototype.createPickingRayInCameraSpace = function(kk, Fk, Ik) {
      return (0, ik.d)(this, kk, Fk, Ik)
    }, Xk.f.prototype.createPickingRayInCameraSpaceToRef = function(kk, Fk, Ik, Xk) {
      return (0, ik.c)(this, kk, Fk, Ik, Xk)
    }, Xk.f.prototype.pickWithBoundingInfo = function(kk, Fk, Ik, Xk, Tk) {
      return (0, ik.m)(this, kk, Fk, Ik, Xk, Tk)
    }, Xk.f.prototype.rZ = function(kk, Fk, Ik, Xk, Tk, yk) {
      let lk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ik.r)(this, kk, Fk, Ik, Xk, Tk, yk, lk)
    }, Xk.f.prototype.pickWithRay = function(kk, Fk, Ik, Xk) {
      return (0, ik.n)(this, kk, Fk, Ik, Xk)
    }, Xk.f.prototype.multiPick = function(kk, Fk, Ik, Xk, Tk) {
      return (0, ik.j)(this, kk, Fk, Ik, Xk, Tk)
    }, Xk.f.prototype.multiPickWithRay = function(kk, Fk, Ik) {
      return (0, ik.i)(this, kk, Fk, Ik)
    })
  },
  41573: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Lk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37153),
      yk = Ik(40265),
      lk = Ik(41578),
      ak = Ik(40218),
      qk = Ik(37201);
    let Lk = (() => {
        var kk;
        let Fk, Ik, ak, qk, Lk, tk, Zk, jk, ek = lk.d,
          wk = [],
          Hk = [],
          Jk = [],
          xk = [],
          Pk = [],
          Kk = [],
          Qk = [],
          sk = [],
          Vk = [],
          zk = [],
          Sk = [],
          vk = [],
          Ek = [];
        return kk = class extends ek {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(kk) {
            this._shadowFrustumSize = kk, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(kk) {
            this._shadowOrthoScale = kk, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(kk) {
            this._orthoLeft = kk
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(kk) {
            this._orthoRight = kk
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(kk) {
            this._orthoTop = kk
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(kk) {
            this._orthoBottom = kk
          }
          constructor(kk, Fk, Ik, Tk) {
            super(kk, Ik, Tk), this._shadowFrustumSize = ((0, Xk.n)(this, wk), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Xk.n)(this, Hk, !0), this.autoCalcShadowZBounds = ((0, Xk.n)(this, Jk), (0, Xk.n)(this, xk, !1)), this._orthoLeft = ((0, Xk.n)(this, Pk), (0, Xk.n)(this, Kk, Number.MAX_VALUE)), this._orthoRight = ((0, Xk.n)(this, Qk), (0, Xk.n)(this, sk, Number.MIN_VALUE)), this._orthoTop = ((0, Xk.n)(this, Vk), (0, Xk.n)(this, zk, Number.MIN_VALUE)), this._orthoBottom = ((0, Xk.n)(this, Sk), (0, Xk.n)(this, vk, Number.MAX_VALUE)), (0, Xk.n)(this, Ek), this.position = Fk.scale(-1), this.direction = Fk
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return yk.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(kk, Fk, Ik) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(kk) : this._setDefaultAutoExtendShadowProjectionMatrix(kk, Fk, Ik)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(kk) {
            const Fk = this.mG().activeCamera;
            ik.c.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Fk ? Fk.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Fk ? Fk.maxZ : 1e4, kk, this.mG().Oe().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(kk, Fk, Ik) {
            const Xk = this.mG().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const kk = ik.t.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Xk = Number.MAX_VALUE,
                Tk = -Number.MAX_VALUE;
              for (let yk = 0; yk < Ik.length; yk++) {
                const lk = Ik[yk];
                if (!lk) continue;
                const ak = lk.vR().boundingBox;
                for (let Ik = 0; Ik < ak.vectorsWorld.length; Ik++) ik.t.TransformCoordinatesToRef(ak.vectorsWorld[Ik], Fk, kk), kk.x < this._orthoLeft && (this._orthoLeft = kk.x), kk.y < this._orthoBottom && (this._orthoBottom = kk.y), kk.x > this._orthoRight && (this._orthoRight = kk.x), kk.y > this._orthoTop && (this._orthoTop = kk.y), this.autoCalcShadowZBounds && (kk.z < Xk && (Xk = kk.z), kk.z > Tk && (Tk = kk.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Xk, this._shadowMaxZ = Tk)
            }
            const Tk = this._orthoRight - this._orthoLeft,
              yk = this._orthoTop - this._orthoBottom,
              lk = void 0 !== this.shadowMinZ ? this.shadowMinZ : Xk?.minZ || 0,
              ak = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Xk?.maxZ || 1e4,
              qk = this.mG().Oe().IXk;
            ik.c.OrthoOffCenterLHToRef(this._orthoLeft - Tk * this.shadowOrthoScale, this._orthoRight + Tk * this.shadowOrthoScale, this._orthoBottom - yk * this.shadowOrthoScale, this._orthoTop + yk * this.shadowOrthoScale, qk ? ak : lk, qk ? lk : ak, kk, this.mG().Oe().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(kk, Fk) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Fk), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, Fk), this)
          }
          transferToNodeMaterialEffect(kk, Fk) {
            return this.computeTransformedInformation() ? (kk.setFloat3(Fk, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (kk.setFloat3(Fk, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(kk) {
            const Fk = this._scene.Oe();
            return !Fk.IXk && Fk.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(kk) {
            const Fk = this._scene.Oe();
            return Fk.IXk && Fk.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(kk, Fk) {
            kk["DIRLIGHT" + Fk] = !0
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(ek[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)("orthoLeft")], tk = [(0, Tk.J)("orthoRight")], Zk = [(0, Tk.J)("orthoTop")], jk = [(0, Tk.J)("orthoBottom")], (0, Xk.j)(kk, null, Fk, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: kk => "shadowFrustumSize" in kk,
              get: kk => kk.shadowFrustumSize
            },
            metadata: ik
          }, null, wk), (0, Xk.j)(kk, null, Ik, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "shadowOrthoScale" in kk,
              get: kk => kk.shadowOrthoScale
            },
            metadata: ik
          }, null, wk), (0, Xk.j)(null, null, ak, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: kk => "autoUpdateExtends" in kk,
              get: kk => kk.autoUpdateExtends,
              set: (kk, Fk) => {
                kk.autoUpdateExtends = Fk
              }
            },
            metadata: ik
          }, Hk, Jk), (0, Xk.j)(null, null, qk, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: kk => "autoCalcShadowZBounds" in kk,
              get: kk => kk.autoCalcShadowZBounds,
              set: (kk, Fk) => {
                kk.autoCalcShadowZBounds = Fk
              }
            },
            metadata: ik
          }, xk, Pk), (0, Xk.j)(null, null, Lk, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: kk => "_orthoLeft" in kk,
              get: kk => kk._orthoLeft,
              set: (kk, Fk) => {
                kk._orthoLeft = Fk
              }
            },
            metadata: ik
          }, Kk, Qk), (0, Xk.j)(null, null, tk, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: kk => "_orthoRight" in kk,
              get: kk => kk._orthoRight,
              set: (kk, Fk) => {
                kk._orthoRight = Fk
              }
            },
            metadata: ik
          }, sk, Vk), (0, Xk.j)(null, null, Zk, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: kk => "_orthoTop" in kk,
              get: kk => kk._orthoTop,
              set: (kk, Fk) => {
                kk._orthoTop = Fk
              }
            },
            metadata: ik
          }, zk, Sk), (0, Xk.j)(null, null, jk, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: kk => "_orthoBottom" in kk,
              get: kk => kk._orthoBottom,
              set: (kk, Fk) => {
                kk._orthoBottom = Fk
              }
            },
            metadata: ik
          }, vk, Ek), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk
      })(),
      tk = !1;
    tk || (tk = !0, ak.b.AddNodeConstructor("Light_Type_1", ((kk, Fk) => () => new Lk(kk, ik.t.Zero(), Fk))), (0, qk.f)("BABYLON.DirectionalLight", Lk))
  },
  41591: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => AF
    });
    var Xk = Ik(38706),
      Tk = Ik(37187),
      ik = Ik(37153),
      yk = Ik(40141),
      lk = Ik(41599),
      ak = Ik(37178),
      qk = Ik(40288),
      Lk = Ik(37331),
      tk = Ik(38708),
      Zk = Ik(38666),
      jk = Ik(37189);
    class ek {
      constructor() {
        this.direction1 = new ik.t(0, 1, 0), this.direction2 = new ik.t(0, 1, 0)
      }
      startDirectionFunction(kk, Fk, Ik, Xk) {
        const Tk = (0, jk.RandomRange)(this.direction1.x, this.direction2.x),
          yk = (0, jk.RandomRange)(this.direction1.y, this.direction2.y),
          lk = (0, jk.RandomRange)(this.direction1.z, this.direction2.z);
        Xk ? Fk.t5(Tk, yk, lk) : ik.t.TransformNormalFromFloatsToRef(Tk, yk, lk, kk, Fk)
      }
      startPositionFunction(kk, Fk, Ik, Xk) {
        Xk ? Fk.t5(0, 0, 0) : ik.t.TransformCoordinatesFromFloatsToRef(0, 0, 0, kk, Fk)
      }
      clone() {
        const kk = new ek;
        return Zk.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setVector3("direction1", this.direction1), kk.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(kk) {
        kk.addUniform("direction1", 3), kk.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.direction1 = this.direction1.iXk(), kk.direction2 = this.direction2.iXk(), kk
      }
      parse(kk) {
        ik.t.FromArrayToRef(kk.direction1, 0, this.direction1), ik.t.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
    class wk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = kk, this.radiusRange = Fk, this.directionRandomizer = Ik
      }
      startDirectionFunction(kk, Fk, Ik, Xk) {
        const Tk = Ik.position.subtract(kk.getTranslation()).normalize(),
          yk = (0, jk.RandomRange)(0, this.directionRandomizer),
          lk = (0, jk.RandomRange)(0, this.directionRandomizer),
          ak = (0, jk.RandomRange)(0, this.directionRandomizer);
        Tk.x += yk, Tk.y += lk, Tk.z += ak, Tk.normalize(), Xk ? Fk.kS(Tk) : ik.t.TransformNormalFromFloatsToRef(Tk.x, Tk.y, Tk.z, kk, Fk)
      }
      startPositionFunction(kk, Fk, Ik, Xk) {
        const Tk = this.radius - (0, jk.RandomRange)(0, this.radius * this.radiusRange),
          yk = (0, jk.RandomRange)(0, 1),
          lk = (0, jk.RandomRange)(0, 2 * Math.PI),
          ak = Math.acos(2 * yk - 1),
          qk = Tk * Math.cos(lk) * Math.sin(ak),
          Lk = Tk * Math.cos(ak),
          tk = Tk * Math.sin(lk) * Math.sin(ak);
        Xk ? Fk.t5(qk, Math.abs(Lk), tk) : ik.t.TransformCoordinatesFromFloatsToRef(qk, Math.abs(Lk), tk, kk, Fk)
      }
      clone() {
        const kk = new wk(this.radius, this.directionRandomizer);
        return Zk.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setFloat("radius", this.radius), kk.setFloat("radiusRange", this.radiusRange), kk.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(kk) {
        kk.addUniform("radius", 1), kk.addUniform("radiusRange", 1), kk.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.radius = this.radius, kk.radiusRange = this.radiusRange, kk.directionRandomizer = this.directionRandomizer, kk
      }
      parse(kk) {
        this.radius = kk.radius, this.radiusRange = kk.radiusRange, this.directionRandomizer = kk.directionRandomizer
      }
    }
    class Hk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = kk, this.radiusRange = Fk, this.directionRandomizer = Ik
      }
      startDirectionFunction(kk, Fk, Ik, Xk) {
        const Tk = Ik.position.subtract(kk.getTranslation()).normalize(),
          yk = (0, jk.RandomRange)(0, this.directionRandomizer),
          lk = (0, jk.RandomRange)(0, this.directionRandomizer),
          ak = (0, jk.RandomRange)(0, this.directionRandomizer);
        Tk.x += yk, Tk.y += lk, Tk.z += ak, Tk.normalize(), Xk ? Fk.kS(Tk) : ik.t.TransformNormalFromFloatsToRef(Tk.x, Tk.y, Tk.z, kk, Fk)
      }
      startPositionFunction(kk, Fk, Ik, Xk) {
        const Tk = this.radius - (0, jk.RandomRange)(0, this.radius * this.radiusRange),
          yk = (0, jk.RandomRange)(0, 1),
          lk = (0, jk.RandomRange)(0, 2 * Math.PI),
          ak = Math.acos(2 * yk - 1),
          qk = Tk * Math.cos(lk) * Math.sin(ak),
          Lk = Tk * Math.cos(ak),
          tk = Tk * Math.sin(lk) * Math.sin(ak);
        Xk ? Fk.t5(qk, Lk, tk) : ik.t.TransformCoordinatesFromFloatsToRef(qk, Lk, tk, kk, Fk)
      }
      clone() {
        const kk = new Hk(this.radius, this.directionRandomizer);
        return Zk.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setFloat("radius", this.radius), kk.setFloat("radiusRange", this.radiusRange), kk.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(kk) {
        kk.addUniform("radius", 1), kk.addUniform("radiusRange", 1), kk.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.radius = this.radius, kk.radiusRange = this.radiusRange, kk.directionRandomizer = this.directionRandomizer, kk
      }
      parse(kk) {
        this.radius = kk.radius, this.radiusRange = kk.radiusRange, this.directionRandomizer = kk.directionRandomizer
      }
    }
    class Jk extends Hk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ik.t(0, 1, 0),
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ik.t(0, 1, 0);
        super(kk), this.direction1 = Fk, this.direction2 = Ik
      }
      startDirectionFunction(kk, Fk, Ik, Xk) {
        const Tk = (0, jk.RandomRange)(this.direction1.x, this.direction2.x),
          yk = (0, jk.RandomRange)(this.direction1.y, this.direction2.y),
          lk = (0, jk.RandomRange)(this.direction1.z, this.direction2.z);
        Xk ? Fk.t5(Tk, yk, lk) : ik.t.TransformNormalFromFloatsToRef(Tk, yk, lk, kk, Fk)
      }
      clone() {
        const kk = new Jk(this.radius, this.direction1, this.direction2);
        return Zk.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setFloat("radius", this.radius), kk.setFloat("radiusRange", this.radiusRange), kk.setVector3("direction1", this.direction1), kk.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(kk) {
        kk.addUniform("radius", 1), kk.addUniform("radiusRange", 1), kk.addUniform("direction1", 3), kk.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const kk = super.serialize();
        return kk.direction1 = this.direction1.iXk(), kk.direction2 = this.direction2.iXk(), kk
      }
      parse(kk) {
        super.parse(kk), ik.t.FromArrayToRef(kk.direction1, 0, this.direction1), ik.t.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
    var xk = Ik(38661);
    class Pk {
      get radius() {
        return this._radius
      }
      set radius(kk) {
        this._radius = kk, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(kk) {
        this._angle = kk, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = Ik, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Fk, this.radius = kk
      }
      startDirectionFunction(kk, Fk, Ik, Xk) {
        const Tk = Ik.position.subtract(kk.getTranslation()).normalize(),
          yk = (0, jk.RandomRange)(0, this.directionRandomizer),
          lk = (0, jk.RandomRange)(0, this.directionRandomizer),
          ak = (0, jk.RandomRange)(0, this.directionRandomizer);
        Tk.x += yk, Tk.y += lk, Tk.z += ak, Tk.normalize(), Xk ? Fk.kS(Tk) : ik.t.TransformNormalFromFloatsToRef(Tk.x, Tk.y, Tk.z, kk, Fk)
      }
      startPositionFunction(kk, Fk, Ik, Xk) {
        const Tk = (0, jk.RandomRange)(0, 2 * Math.PI);
        let yk;
        this.emitFromSpawnPointOnly ? yk = 1e-4 : (yk = (0, jk.RandomRange)(0, this.heightRange), yk = 1 - yk * yk);
        let lk = this._radius - (0, jk.RandomRange)(0, this._radius * this.radiusRange);
        lk *= yk;
        const ak = lk * Math.sin(Tk),
          qk = lk * Math.cos(Tk),
          Lk = yk * this._height;
        if (Xk) return Fk.x = ak, Fk.y = Lk, void(Fk.z = qk);
        ik.t.TransformCoordinatesFromFloatsToRef(ak, Lk, qk, kk, Fk)
      }
      clone() {
        const kk = new Pk(this._radius, this._angle, this.directionRandomizer);
        return Zk.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setFloat2("radius", this._radius, this.radiusRange), kk.setFloat("coneAngle", this._angle), kk.setFloat2("height", this._height, this.heightRange), kk.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(kk) {
        kk.addUniform("radius", 2), kk.addUniform("coneAngle", 1), kk.addUniform("height", 2), kk.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let kk = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (kk += "\n#define CONEEMITTERSPAWNPOINT"), kk
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.radius = this._radius, kk.angle = this._angle, kk.directionRandomizer = this.directionRandomizer, kk.radiusRange = this.radiusRange, kk.heightRange = this.heightRange, kk.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, kk
      }
      parse(kk) {
        this.radius = kk.radius, this.angle = kk.angle, this.directionRandomizer = kk.directionRandomizer, this.radiusRange = void 0 !== kk.radiusRange ? kk.radiusRange : 1, this.heightRange = void 0 !== kk.heightRange ? kk.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== kk.emitFromSpawnPointOnly && kk.emitFromSpawnPointOnly
      }
    }
    class Kk extends Pk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ik.t(0, 1, 0),
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ik.t(0, 1, 0);
        super(kk, Fk), this.direction1 = Ik, this.direction2 = Xk
      }
      startDirectionFunction(kk, Fk, Ik, Xk) {
        const Tk = (0, jk.RandomRange)(this.direction1.x, this.direction2.x),
          yk = (0, jk.RandomRange)(this.direction1.y, this.direction2.y),
          lk = (0, jk.RandomRange)(this.direction1.z, this.direction2.z);
        Xk ? Fk.t5(Tk, yk, lk) : ik.t.TransformNormalFromFloatsToRef(Tk, yk, lk, kk, Fk)
      }
      clone() {
        const kk = new Kk(this.radius, this.angle, this.direction1, this.direction2);
        return Zk.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        super.applyToShader(kk), kk.setVector3("direction1", this.direction1), kk.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(kk) {
        super.buildUniformLayout(kk), kk.addUniform("direction1", 3), kk.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const kk = super.serialize();
        return kk.direction1 = this.direction1.iXk(), kk.direction2 = this.direction2.iXk(), kk
      }
      parse(kk) {
        super.parse(kk), ik.t.FromArrayToRef(kk.direction1, 0, this.direction1), ik.t.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
    class Qk {
      get mesh() {
        return this._mesh
      }
      set mesh(kk) {
        this._mesh !== kk && (this._mesh = kk, kk ? (this._indices = kk.yXk(), this._positions = kk.getVerticesData(yk.l.PositionKind), this._normals = kk.getVerticesData(yk.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = ik.t.Zero(), this._mesh = null, this.direction1 = new ik.t(0, 1, 0), this.direction2 = new ik.t(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = kk
      }
      startDirectionFunction(kk, Fk, Ik, Xk) {
        if (this.useMeshNormalsForDirection && this._normals) return void ik.t.TransformNormalToRef(this._storedNormal, kk, Fk);
        const Tk = (0, jk.RandomRange)(this.direction1.x, this.direction2.x),
          yk = (0, jk.RandomRange)(this.direction1.y, this.direction2.y),
          lk = (0, jk.RandomRange)(this.direction1.z, this.direction2.z);
        Xk ? Fk.t5(Tk, yk, lk) : ik.t.TransformNormalFromFloatsToRef(Tk, yk, lk, kk, Fk)
      }
      startPositionFunction(kk, Fk, Ik, Xk) {
        if (!this._indices || !this._positions) return;
        const Tk = 3 * (Math.random() * (this._indices.length / 3) | 0),
          yk = Math.random(),
          lk = Math.random() * (1 - yk),
          ak = 1 - yk - lk,
          qk = this._indices[Tk],
          Lk = this._indices[Tk + 1],
          tk = this._indices[Tk + 2],
          Zk = ik.l.Ge[0],
          jk = ik.l.Ge[1],
          ek = ik.l.Ge[2],
          wk = ik.l.Ge[3];
        ik.t.FromArrayToRef(this._positions, 3 * qk, Zk), ik.t.FromArrayToRef(this._positions, 3 * Lk, jk), ik.t.FromArrayToRef(this._positions, 3 * tk, ek), wk.x = yk * Zk.x + lk * jk.x + ak * ek.x, wk.y = yk * Zk.y + lk * jk.y + ak * ek.y, wk.z = yk * Zk.z + lk * jk.z + ak * ek.z, Xk ? Fk.t5(wk.x, wk.y, wk.z) : ik.t.TransformCoordinatesFromFloatsToRef(wk.x, wk.y, wk.z, kk, Fk), this.useMeshNormalsForDirection && this._normals && (ik.t.FromArrayToRef(this._normals, 3 * qk, Zk), ik.t.FromArrayToRef(this._normals, 3 * Lk, jk), ik.t.FromArrayToRef(this._normals, 3 * tk, ek), this._storedNormal.x = yk * Zk.x + lk * jk.x + ak * ek.x, this._storedNormal.y = yk * Zk.y + lk * jk.y + ak * ek.y, this._storedNormal.z = yk * Zk.z + lk * jk.z + ak * ek.z)
      }
      clone() {
        const kk = new Qk(this.mesh);
        return Zk.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setVector3("direction1", this.direction1), kk.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(kk) {
        kk.addUniform("direction1", 3), kk.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.direction1 = this.direction1.iXk(), kk.direction2 = this.direction2.iXk(), kk.meshId = this.mesh?.id, kk.useMeshNormalsForDirection = this.useMeshNormalsForDirection, kk
      }
      parse(kk, Fk) {
        ik.t.FromArrayToRef(kk.direction1, 0, this.direction1), ik.t.FromArrayToRef(kk.direction2, 0, this.direction2), kk.meshId && Fk && (this.mesh = Fk.getLastMeshById(kk.meshId)), this.useMeshNormalsForDirection = kk.useMeshNormalsForDirection
      }
    }
    class sk {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(kk) {
        this._targetStopDuration !== kk && (this._targetStopDuration = kk)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(kk) {
        this._noiseTexture !== kk && (this._noiseTexture = kk, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(kk) {
        this._attractors.push(kk)
      }
      removeAttractor(kk) {
        const Fk = this._attractors.indexOf(kk); - 1 !== Fk && this._attractors.splice(Fk, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(kk) {
        this._animationSheetEnabled !== kk && (this._animationSheetEnabled = kk)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(kk) {
        this._isAnimationSheetEnabled != kk && (this._isAnimationSheetEnabled = kk, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(kk) {
        this._useLogarithmicDepth = kk && this.mG().Oe().getCaps().fragmentDepthSupported
      }
      mG() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(kk) {
        switch (kk) {
          case sk.BLENDMODE_MULTIPLYADD:
            return;
          case sk.BLENDMODE_ADD:
            kk = 1;
            break;
          case sk.BLENDMODE_ONEONE:
            kk = 6;
            break;
          case sk.BLENDMODE_STANDARD:
            kk = 2;
            break;
          case sk.BLENDMODE_MULTIPLY:
            kk = 4;
            break;
          case sk.BLENDMODE_SUBTRACT:
            kk = 3
        }
        this._engine.setAlphaMode(kk)
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
      addEmitRateGradient(kk, Fk, Ik) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, kk, Fk, Ik), this
      }
      removeEmitRateGradient(kk) {
        return this._removeFactorGradient(this._emitRateGradients, kk), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : ik.t.Zero()
      }
      set direction1(kk) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = kk)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : ik.t.Zero()
      }
      set direction2(kk) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = kk)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : ik.t.Zero()
      }
      set minEmitBox(kk) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = kk)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : ik.t.Zero()
      }
      set maxEmitBox(kk) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = kk)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(kk) {
        this._billboardMode !== kk && (this._billboardMode = kk, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(kk) {
        this._isBillboardBased !== kk && (this._isBillboardBased = kk, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(kk) {
        this._attachImageProcessingConfiguration(kk)
      }
      _attachImageProcessingConfiguration(kk) {
        kk !== this._imageProcessingConfiguration && (!kk && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = kk)
      }
      _reset() {}
      _addFactorGradient(kk, Fk, Ik, Tk) {
        const ik = new Xk.d(Fk, Ik, Tk);
        kk.push(ik), kk.sort(((kk, Fk) => kk.gradient < Fk.gradient ? -1 : kk.gradient > Fk.gradient ? 1 : 0))
      }
      _removeFactorGradient(kk, Fk) {
        if (!kk) return;
        let Ik = 0;
        for (const Xk of kk) {
          if (Xk.gradient === Fk) {
            kk.splice(Ik, 1);
            break
          }
          Ik++
        }
      }
      _removeGradientAndTexture(kk, Fk, Ik) {
        if (!Fk) return this;
        let Xk = 0;
        for (const Tk of Fk) {
          if (Tk.gradient === kk) {
            Fk.splice(Xk, 1);
            break
          }
          Xk++
        }
        return Ik && Ik.dispose(), this
      }
      constructor(kk) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = ik.t.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new ik.t(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = sk.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new ik.p(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new ik.t(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = ik.t.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Lk.h(1, 1, 1, 1), this.color2 = new Lk.h(1, 1, 1, 1), this.colorDead = new Lk.h(0, 0, 0, 1), this.textureMask = new Lk.h(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new qk.b, this.id = kk, this.name = kk
      }
      createPointEmitter(kk, Fk) {
        const Ik = function(kk, Fk) {
          const Ik = new ek;
          return Ik.direction1 = kk, Ik.direction2 = Fk, Ik
        }(kk, Fk);
        return this.particleEmitterType = Ik, Ik
      }
      createHemisphericEmitter() {
        const kk = function() {
          return new wk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = kk, kk
      }
      createSphereEmitter() {
        const kk = function() {
          return new Hk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = kk, kk
      }
      createDirectedSphereEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ik.t(0, 1, 0),
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ik.t(0, 1, 0);
          return new Jk(kk, Fk, Ik)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ik.t(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ik.t(0, 1, 0));
        return this.particleEmitterType = kk, kk
      }
      createCylinderEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new xk.e(kk, Fk, Ik, Xk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = kk, kk
      }
      createDirectedCylinderEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ik.t(0, 1, 0),
            Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ik.t(0, 1, 0);
          return new xk.b(kk, Fk, Ik, Xk, Tk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ik.t(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ik.t(0, 1, 0));
        return this.particleEmitterType = kk, kk
      }
      createConeEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Pk(kk, Fk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = kk, kk
      }
      createDirectedConeEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ik.t(0, 1, 0),
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ik.t(0, 1, 0);
          return new Kk(kk, Fk, Ik, Xk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ik.t(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ik.t(0, 1, 0));
        return this.particleEmitterType = kk, kk
      }
      createBoxEmitter(kk, Fk, Ik, Xk) {
        const Tk = new tk.c;
        return this.particleEmitterType = Tk, this.direction1 = kk, this.direction2 = Fk, this.minEmitBox = Ik, this.maxEmitBox = Xk, Tk
      }
      createMeshEmitter() {
        const kk = function() {
          return new Qk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = kk, kk
      }
    }
    sk.BLENDMODE_ONEONE = 0, sk.BLENDMODE_STANDARD = 1, sk.BLENDMODE_ADD = 2, sk.BLENDMODE_MULTIPLY = 3, sk.BLENDMODE_MULTIPLYADD = 4, sk.BLENDMODE_SUBTRACT = -1;
    class Vk {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Lk.h(0, 0, 0, 0), this.currentColor2 = new Lk.h(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = ik.t.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class zk {
      constructor(kk) {
        this.particleSystem = kk, this.position = ik.t.Zero(), this.direction = ik.t.Zero(), this.color = new Lk.h(0, 0, 0, 0), this.colorStep = new Lk.h(0, 0, 0, 0), this.initialColor = new Lk.h(0, 0, 0, 0), this.colorDead = new Lk.h(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new ik.p(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Vk, this.id = zk._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let kk = this.age,
          Fk = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Fk ? (Fk = 1, kk = this._properties.randomCellOffset) : kk += this._properties.randomCellOffset);
        const Ik = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Xk;
        Xk = this._properties.initialSpriteCellLoop ? (0, jk.Clamp)(kk * Fk % this.lifeTime / this.lifeTime) : (0, jk.Clamp)(kk * Fk / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Xk * Ik | 0
      }
      _inheritParticleInfoToSubEmitter(kk) {
        if (kk.particleSystem.emitter.position) {
          const Fk = kk.particleSystem.emitter;
          if (Fk.position.kS(this.position), kk.inheritDirection) {
            const kk = ik.l.Ge[0];
            this.direction.normalizeToRef(kk), Fk.setDirection(kk, 0, Math.PI / 2)
          }
        } else {
          kk.particleSystem.emitter.kS(this.position)
        }
        this.direction.scaleToRef(kk.inheritedVelocityAmount / 2, ik.l.Ge[0]), kk.particleSystem._inheritedVelocityOffset.kS(ik.l.Ge[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const kk of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(kk)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = zk._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(kk) {
        kk.position.kS(this.position), this._properties.initialDirection ? kk._properties.initialDirection ? kk._properties.initialDirection.kS(this._properties.initialDirection) : kk._properties.initialDirection = this._properties.initialDirection.clone() : kk._properties.initialDirection = null, kk.direction.kS(this.direction), this._properties.localPosition && (kk._properties.localPosition ? kk._properties.localPosition.kS(this._properties.localPosition) : kk._properties.localPosition = this._properties.localPosition.clone()), kk.color.kS(this.color), kk.colorStep.kS(this.colorStep), kk.initialColor.kS(this.initialColor), kk.colorDead.kS(this.colorDead), kk.lifeTime = this.lifeTime, kk.age = this.age, kk._properties.randomCellOffset = this._properties.randomCellOffset, kk.size = this.size, kk.scale.kS(this.scale), kk.angle = this.angle, kk.angularSpeed = this.angularSpeed, kk.particleSystem = this.particleSystem, kk.cellIndex = this.cellIndex, kk.id = this.id, kk._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (kk._properties.currentColorGradient = this._properties.currentColorGradient, kk._properties.currentColor1.kS(this._properties.currentColor1), kk._properties.currentColor2.kS(this._properties.currentColor2)), this._properties.currentSizeGradient && (kk._properties.currentSizeGradient = this._properties.currentSizeGradient, kk._properties.currentSize1 = this._properties.currentSize1, kk._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (kk._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, kk._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, kk._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (kk._properties.currentVelocityGradient = this._properties.currentVelocityGradient, kk._properties.currentVelocity1 = this._properties.currentVelocity1, kk._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (kk._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, kk._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, kk._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (kk._properties.currentDragGradient = this._properties.currentDragGradient, kk._properties.currentDrag1 = this._properties.currentDrag1, kk._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (kk._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, kk._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, kk._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (kk.remapData && this.remapData ? kk.remapData.kS(this.remapData) : kk.remapData = new ik.u(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (kk._properties.randomNoiseCoordinates1 && kk._properties.randomNoiseCoordinates2 ? (kk._properties.randomNoiseCoordinates1.kS(this._properties.randomNoiseCoordinates1), kk._properties.randomNoiseCoordinates2.kS(this._properties.randomNoiseCoordinates2)) : (kk._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), kk._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), kk.metadata = this.metadata
      }
    }
    zk._Count = 0;
    var Sk = Ik(41107);
    class vk {
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
      constructor(kk, Fk, Ik, Xk) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Fk, this.nD = kk, this._scene = Ik, this._host = Xk, this._activeTargets = [], Fk._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Fi: this._getCorrectLoopMode()
          }, this._animation.dataType === Sk.c.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = ik.c.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const kk = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, kk)
        }
        if (this.nD instanceof Array) {
          let kk = 0;
          for (const Fk of this.nD) this._preparePath(Fk, kk), this._getOriginalValues(kk), kk++;
          this._targetIsArray = !0
        } else this._preparePath(this.nD), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Tk = Fk.getEvents();
        if (Tk && Tk.length > 0)
          for (const ik of Tk) this._events.push(ik._clone());
        this._enableBlending = kk && kk.animationPropertiesOverride ? kk.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = this._animation.targetPropertyPath;
        if (Ik.length > 1) {
          let Xk = kk;
          for (let kk = 0; kk < Ik.length - 1; kk++) {
            const Fk = Ik[kk];
            if (Xk = Xk[Fk], void 0 === Xk) throw new Error(`Invalid property (${Fk}) in property path (${Ik.join(".")})`)
          }
          this._targetPath = Ik[Ik.length - 1], this._activeTargets[Fk] = Xk
        } else this._targetPath = Ik[0], this._activeTargets[Fk] = kk;
        if (void 0 === this._activeTargets[Fk][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${Ik.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.nD instanceof Array) {
            let kk = 0;
            for (const Fk of this.nD) void 0 !== this._originalValue[kk] && this._setValue(Fk, this._activeTargets[kk], this._originalValue[kk], -1, kk), kk++
          } else void 0 !== this._originalValue[0] && this._setValue(this.nD, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let kk = 0; kk < this._events.length; kk++) this._events[kk].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const kk = this._animation.runtimeAnimations.indexOf(this);
        kk > -1 && this._animation.runtimeAnimations.splice(kk, 1)
      }
      setValue(kk, Fk) {
        if (this._targetIsArray)
          for (let Ik = 0; Ik < this.nD.length; Ik++) {
            const Xk = this.nD[Ik];
            this._setValue(Xk, this._activeTargets[Ik], kk, Fk, Ik)
          } else this._setValue(this.nD, this._directTarget, kk, Fk, 0)
      }
      _getOriginalValues() {
        let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Ik = this._activeTargets[Fk];
        if (Sk.c.InheritOriginalValueFromActiveAnimations) {
          const kk = this._scene._activeAnimatables;
          for (let Xk = 0; Xk < kk.length; Xk++) {
            const Tk = kk[Xk]._runtimeAnimations;
            for (let kk = 0; kk < Tk.length; kk++) {
              const Xk = Tk[kk];
              if (Xk !== this && Xk._targetPath === this._targetPath)
                for (let kk = 0; kk < Xk._activeTargets.length; kk++)
                  if (Xk._activeTargets[kk] === Ik && void 0 !== Xk._originalValue[kk]) return void(Xk._originalValue[kk] && Xk._originalValue[kk].clone ? this._originalValue[Fk] = Xk._originalValue[kk].clone() : this._originalValue[Fk] = Xk._originalValue[kk])
            }
          }
        }
        kk = Ik.getLocalMatrix && "_matrix" === this._targetPath ? Ik.getLocalMatrix() : Ik[this._targetPath], kk && kk.clone ? this._originalValue[Fk] = kk.clone() : this._originalValue[Fk] = kk
      }
      _registerTargetForLateAnimationBinding(kk, Fk) {
        const Ik = kk.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(Ik), Ik._lateAnimationHolders || (Ik._lateAnimationHolders = {}), Ik._lateAnimationHolders[kk.targetPath] || (Ik._lateAnimationHolders[kk.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Fk
        }), kk.isAdditive ? (Ik._lateAnimationHolders[kk.targetPath].additiveAnimations.push(kk), Ik._lateAnimationHolders[kk.targetPath].totalAdditiveWeight += kk.weight) : (Ik._lateAnimationHolders[kk.targetPath].animations.push(kk), Ik._lateAnimationHolders[kk.targetPath].totalWeight += kk.weight)
      }
      _setValue(kk, Fk, Ik, Xk, Tk) {
        const yk = this._scene._animationWrites,
          lk = this._scene._animationWriteCount++;
        let ak = yk[lk];
        if (ak || (ak = yk[lk] = {
            runtimeAnimation: this,
            target: kk,
            weight: Xk,
            additive: !1,
            blendingFactor: 1,
            iH: !1
          }), ak.runtimeAnimation = this, ak.target = kk, ak.weight = Xk, ak.additive = this.isAdditive, ak.iH = !1, this._currentActiveTarget = Fk, this._weight = Xk, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const kk = Fk[this._targetPath];
            kk.clone ? this._originalBlendValue = kk.clone() : this._originalBlendValue = kk
          }
          this._originalBlendValue.m ? Sk.c.AllowMatrixDecomposeForInterpolation ? this._currentValue ? ik.c.DecomposeLerpToRef(this._originalBlendValue, Ik, this._blendingFactor, this._currentValue) : this._currentValue = ik.c.DecomposeLerp(this._originalBlendValue, Ik, this._blendingFactor) : this._currentValue ? ik.c.LerpToRef(this._originalBlendValue, Ik, this._blendingFactor, this._currentValue) : this._currentValue = ik.c.Lerp(this._originalBlendValue, Ik, this._blendingFactor) : this._currentValue = Sk.c._UniversalLerp(this._originalBlendValue, Ik, this._blendingFactor);
          const Xk = kk && kk.animationPropertiesOverride ? kk.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          ak.blendingFactor = this._blendingFactor, this._blendingFactor += Xk
        } else ak.blendingFactor = 1, this._currentValue ? this._currentValue.kS ? this._currentValue.kS(Ik) : this._currentValue = Ik : this._currentValue = Ik?.clone ? Ik.clone() : Ik; - 1 !== Xk ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Tk]) : this._animationState.Fi === Sk.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Tk], Fk[this._targetPath]) : Fk[this._targetPath] = this._originalValue[Tk] + this._currentValue : Fk[this._targetPath] = this._currentValue, kk.UFk && kk.UFk(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.nD && this.nD.animationPropertiesOverride) {
          return "MorphTarget" === this.nD.getClassName?.() && null == this.nD._animationPropertiesOverride ? this._animation.Fi : this.nD.animationPropertiesOverride.Fi
        }
        return this._animation.Fi
      }
      goToFrame(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const Ik = this._animation.getKeys();
        kk < Ik[0].frame ? kk = Ik[0].frame : kk > Ik[Ik.length - 1].frame && (kk = Ik[Ik.length - 1].frame);
        const Xk = this._events;
        if (Xk.length)
          for (let ik = 0; ik < Xk.length; ik++) Xk[ik].onlyOnce || (Xk[ik].isDone = Xk[ik].frame < kk);
        this._currentFrame = kk;
        const Tk = this._animation._interpolate(kk, this._animationState);
        this.setValue(Tk, Fk)
      }
      _prepareForSpeedRatioChange(kk) {
        const Fk = this._previousElapsedTime * (this._animation.framePerSecond * kk) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Fk
      }
      animate(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const yk = this._animation,
          lk = yk.targetPropertyPath;
        if (!lk || lk.length < 1) return this._stopped = !0, !1;
        let ak, qk = !0;
        const Lk = this._events;
        let tk;
        if (this._coreRuntimeAnimation) tk = Ik - Fk, ak = this._coreRuntimeAnimation.currentFrame, this._currentFrame = ak, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let ik;
          (Fk < this._minFrame || Fk > this._maxFrame) && (Fk = this._minFrame), (Ik < this._minFrame || Ik > this._maxFrame) && (Ik = this._maxFrame), tk = Ik - Fk;
          let lk = kk * (yk.framePerSecond * Tk) / 1e3 + this._absoluteFrameOffset,
            Zk = 0,
            jk = !1;
          const ek = Xk && this._animationState.Fi === Sk.c.ANIMATIONLOOPMODE_YOYO;
          if (ek) {
            const kk = (lk - Fk) / tk,
              Ik = Math.sin(kk * Math.PI);
            lk = Math.abs(Ik) * tk + Fk;
            const Xk = Ik >= 0 ? 1 : -1;
            this._yoyoDirection !== Xk && (jk = !0), this._yoyoDirection = Xk
          }
          if (this._previousElapsedTime = kk, this._previousAbsoluteFrame = lk, !Xk && Ik >= Fk && (lk >= tk && Tk > 0 || lk <= 0 && Tk < 0)) qk = !1, Zk = yk.evaluate(Ik);
          else if (!Xk && Fk >= Ik && (lk <= tk && Tk < 0 || lk >= 0 && Tk > 0)) qk = !1, Zk = yk.evaluate(Fk);
          else if (this._animationState.Fi !== Sk.c.ANIMATIONLOOPMODE_CYCLE) {
            const kk = Ik.toString() + Fk.toString();
            if (!this._offsetsCache[kk]) {
              this._animationState.repeatCount = 0, this._animationState.Fi = Sk.c.ANIMATIONLOOPMODE_CYCLE;
              const Xk = yk._interpolate(Fk, this._animationState),
                Tk = yk._interpolate(Ik, this._animationState);
              switch (this._animationState.Fi = this._getCorrectLoopMode(), yk.dataType) {
                case Sk.c.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[kk] = Tk - Xk;
                  break;
                case Sk.c.ANIMATIONTYPE_QUATERNION:
                case Sk.c.ANIMATIONTYPE_VECTOR3:
                case Sk.c.ANIMATIONTYPE_VECTOR2:
                case Sk.c.ANIMATIONTYPE_SIZE:
                case Sk.c.ANIMATIONTYPE_COLOR3:
                case Sk.c.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[kk] = Tk.subtract(Xk)
              }
              this._highLimitsCache[kk] = Tk
            }
            Zk = this._highLimitsCache[kk], ik = this._offsetsCache[kk]
          }
          if (void 0 === ik) switch (yk.dataType) {
            case Sk.c.ANIMATIONTYPE_FLOAT:
              ik = 0;
              break;
            case Sk.c.ANIMATIONTYPE_QUATERNION:
              ik = Sk.j;
              break;
            case Sk.c.ANIMATIONTYPE_VECTOR3:
              ik = Sk.r;
              break;
            case Sk.c.ANIMATIONTYPE_VECTOR2:
              ik = Sk.n;
              break;
            case Sk.c.ANIMATIONTYPE_SIZE:
              ik = Sk.l;
              break;
            case Sk.c.ANIMATIONTYPE_COLOR3:
              ik = Sk.h;
              break;
            case Sk.c.ANIMATIONTYPE_COLOR4:
              ik = Sk.i
          }
          const wk = this._host ? this._host.syncRoot : null;
          let Hk, Jk = this._playbackFrames,
            xk = !1;
          if (wk) {
            const kk = wk.toFrame - wk.fromFrame,
              Ik = wk.masterFrame,
              Xk = (Ik - wk.fromFrame) / kk;
            ak = Fk + tk * Xk;
            const Tk = wk.getAnimations()[0];
            if (Tk && 0 !== kk) {
              const kk = tk * Xk,
                Fk = Tk._playbackTo - Tk._playbackFrom;
              if (0 !== Fk && Tk._playbackFrom <= wk.fromFrame && Tk._playbackTo >= wk.toFrame) {
                Jk = tk * Math.round((Tk._playbackFrames - (Tk._currentFrame - Tk._playbackFrom)) / Fk) + kk
              } else xk = (Ik - this._playbackSyncMasterFrame) * (Tk._playbackFrames - this._playbackSyncMasterPlayed) < 0, Jk = kk;
              xk = xk || Tk._playbackJumped, this._playbackSyncMasterPlayed = Tk._playbackFrames, this._playbackSyncMasterFrame = Ik
            }
          } else ak = lk > 0 && Fk > Ik || lk < 0 && Fk < Ik ? qk && 0 !== tk ? Ik + lk % tk : Fk : qk && 0 !== tk ? Fk + lk % tk : Ik;
          if (!ek && (Tk > 0 && this.currentFrame > ak || Tk < 0 && this.currentFrame < ak) || ek && jk) {
            this._onLoop();
            for (let kk = 0; kk < Lk.length; kk++) Lk[kk].onlyOnce || (Lk[kk].isDone = !1);
            this._animationState.key = Tk > 0 ? 0 : yk.getKeys().length - 1
          }
          if (this._currentFrame = ak, this._animationState.repeatCount = 0 === tk ? 0 : lk / tk | 0, this._animationState.highLimitValue = Zk, this._animationState.offsetValue = ik, this._playbackFrom = Fk, this._playbackTo = Ik, this._playbackJumped = xk, this._playbackSyncRoot = wk, wk) Hk = Jk;
          else if (qk) Hk = ek ? ak === Fk && lk === Ik ? tk : ak - Fk : lk;
          else {
            const kk = 0 !== tk ? Math.floor(this._playbackFrames / tk) : 0;
            Hk = (ak === Ik ? kk + 1 : kk) * tk
          }
          this._playbackFrames = Hk, this._playbackProgress = this._animationState.Fi === Sk.c.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? tk : Hk
        }
        const Zk = yk._interpolate(ak, this._animationState);
        if (this.setValue(Zk, ik), Lk.length)
          for (let jk = 0; jk < Lk.length; jk++)
            if (tk >= 0 && ak >= Lk[jk].frame && Lk[jk].frame >= Fk || tk < 0 && ak <= Lk[jk].frame && Lk[jk].frame <= Fk) {
              const kk = Lk[jk];
              kk.isDone || (kk.onlyOnce && (Lk.splice(jk, 1), jk--), kk.isDone = !0, kk.action(ak))
            } return qk || (this._stopped = !0), qk
      }
    }
    var Ek = Ik(39891);
    class Ok {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(kk) {
        this._weight = -1 !== kk ? Math.min(Math.max(kk, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(kk) {
        for (let Fk = 0; Fk < this._runtimeAnimations.length; Fk++) {
          this._runtimeAnimations[Fk]._prepareForSpeedRatioChange(kk)
        }
        this._speedRatio = kk, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          lk = arguments.length > 6 ? arguments[6] : void 0,
          ak = arguments.length > 7 ? arguments[7] : void 0,
          qk = arguments.length > 8 ? arguments[8] : void 0,
          Lk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          tk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Fk, this.fromFrame = Ik, this.toFrame = Xk, this.loopAnimation = ik, this.onAnimationEnd = lk, this.onAnimationLoop = qk, this.isAdditive = Lk, this.playOrder = tk, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.vx = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Tk.e, this.onAnimationLoopObservable = new Tk.e, this._scene = kk, ak && this.appendAnimations(Fk, ak), this._speedRatio = yk, kk._activeAnimatables.push(this)
      }
      syncWith(kk) {
        if (this._syncRoot = kk, kk) {
          const kk = this._scene._activeAnimatables.indexOf(this);
          kk > -1 && (this._scene._activeAnimatables.splice(kk, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(kk, Fk) {
        for (let Ik = 0; Ik < Fk.length; Ik++) {
          const Xk = Fk[Ik],
            Tk = new vk(kk, Xk, this._scene, this);
          Tk._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Tk)
        }
      }
      getAnimationByTargetProperty(kk) {
        const Fk = this._runtimeAnimations;
        for (let Ik = 0; Ik < Fk.length; Ik++)
          if (Fk[Ik].animation.targetProperty === kk) return Fk[Ik].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(kk) {
        const Fk = this._runtimeAnimations;
        for (let Ik = 0; Ik < Fk.length; Ik++)
          if (Fk[Ik].animation.targetProperty === kk) return Fk[Ik];
        return null
      }
      reset() {
        const kk = this._runtimeAnimations;
        for (let Fk = 0; Fk < kk.length; Fk++) kk[Fk].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(kk) {
        const Fk = this._runtimeAnimations;
        for (let Ik = 0; Ik < Fk.length; Ik++) Fk[Ik].animation.enableBlending = !0, Fk[Ik].animation.blendingSpeed = kk
      }
      disableBlending() {
        const kk = this._runtimeAnimations;
        for (let Fk = 0; Fk < kk.length; Fk++) kk[Fk].animation.enableBlending = !1
      }
      goToFrame(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = this._runtimeAnimations;
        if (Ik[0]) {
          const Fk = Ik[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? Ik[0].currentFrame;
          const Xk = 0 === this.speedRatio ? 0 : (kk - this._frameToSyncFromJump) / Fk * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Xk
        }
        for (let Xk = 0; Xk < Ik.length; Xk++) Ik[Xk].goToFrame(kk, Fk ? this._weight : -1);
        this._goToFrame = kk
      }
      get paused() {
        return this.vx
      }
      pause() {
        this.vx || (this.vx = !0)
      }
      restart() {
        this.vx = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (kk || Fk) {
          const Tk = this._scene._activeAnimatables.indexOf(this);
          if (Tk > -1) {
            const ik = this._runtimeAnimations;
            for (let Ik = ik.length - 1; Ik >= 0; Ik--) {
              const Xk = ik[Ik];
              kk && Xk.animation.name != kk || (Fk && !Fk(Xk.target) || (Xk.dispose(), ik.splice(Ik, 1)))
            }
            0 == ik.length && (Ik || this._scene._activeAnimatables.splice(Tk, 1), Xk || this._raiseOnAnimationEnd())
          }
        } else {
          const kk = this._scene._activeAnimatables.indexOf(this);
          if (kk > -1) {
            Ik || this._scene._activeAnimatables.splice(kk, 1);
            const Fk = this._runtimeAnimations;
            for (let kk = 0; kk < Fk.length; kk++) Fk[kk].dispose();
            this._runtimeAnimations.length = 0, Xk || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((kk => {
          this.onAnimationEndObservable.add((() => {
            kk(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(kk) {
        if (this.vx) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = kk), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = kk, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += kk - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Ok.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Fk = !1;
        const Ik = this._runtimeAnimations;
        let Xk;
        for (Xk = 0; Xk < Ik.length; Xk++) {
          const Tk = Ik[Xk].animate(kk - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Fk = Fk || Tk
        }
        if (this.animationStarted = Fk, !Fk) {
          if (this.disposeOnEnd)
            for (Xk = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Xk, 1), Xk = 0; Xk < Ik.length; Xk++) Ik[Xk].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Fk
      }
    }

    function nk(kk) {
      if (0 === kk.totalWeight && 0 === kk.totalAdditiveWeight) return kk.originalValue;
      let Fk = 1;
      const Ik = ik.l.Ge[0],
        Xk = ik.l.Ge[1],
        Tk = ik.l.Quaternion[0];
      let yk = 0;
      const lk = kk.animations[0],
        ak = kk.originalValue;
      let qk, Lk = !1;
      if (kk.totalWeight < 1) qk = 1 - kk.totalWeight, ak.decompose(Xk, Tk, Ik);
      else {
        if (yk = 1, Fk = kk.totalWeight, qk = lk.weight / Fk, 1 == qk) {
          if (!kk.totalAdditiveWeight) return lk.currentValue;
          Lk = !0
        }
        lk.currentValue.decompose(Xk, Tk, Ik)
      }
      if (!Lk) {
        Xk.scaleInPlace(qk), Ik.scaleInPlace(qk), Tk.scaleInPlace(qk);
        for (let lk = yk; lk < kk.animations.length; lk++) {
          const yk = kk.animations[lk];
          if (0 === yk.weight) continue;
          qk = yk.weight / Fk;
          const ak = ik.l.Ge[2],
            Lk = ik.l.Ge[3],
            tk = ik.l.Quaternion[1];
          yk.currentValue.decompose(Lk, tk, ak), Lk.scaleAndAddToRef(qk, Xk), tk.scaleAndAddToRef(ik.f.Dot(Tk, tk) > 0 ? qk : -qk, Tk), ak.scaleAndAddToRef(qk, Ik)
        }
        Tk.normalize()
      }
      for (let Zk = 0; Zk < kk.additiveAnimations.length; Zk++) {
        const Fk = kk.additiveAnimations[Zk];
        if (0 === Fk.weight) continue;
        const yk = ik.l.Ge[2],
          lk = ik.l.Ge[3],
          ak = ik.l.Quaternion[1];
        Fk.currentValue.decompose(lk, ak, yk), lk.multiplyToRef(Xk, lk), ik.t.LerpToRef(Xk, lk, Fk.weight, Xk), Tk.multiplyToRef(ak, ak), ik.f.SlerpToRef(Tk, ak, Fk.weight, Tk), yk.scaleAndAddToRef(Fk.weight, Ik)
      }
      const tk = lk ? lk._animationState.workValue : ik.l.Matrix[0].clone();
      return ik.c.ComposeToRef(Xk, Tk, Ik, tk), tk
    }

    function Gk(kk, Fk) {
      if (0 === kk.totalWeight && 0 === kk.totalAdditiveWeight) return Fk;
      const Ik = kk.animations[0],
        Xk = kk.originalValue;
      let Tk = Fk;
      if (0 === kk.totalWeight && kk.totalAdditiveWeight > 0) Tk.kS(Xk);
      else if (1 === kk.animations.length) {
        if (ik.f.SlerpToRef(Xk, Ik.currentValue, Math.min(1, kk.totalWeight), Tk), 0 === kk.totalAdditiveWeight) return Tk
      } else if (kk.animations.length > 1) {
        let Ik, yk, lk = 1;
        if (kk.totalWeight < 1) {
          const Fk = 1 - kk.totalWeight;
          Ik = [], yk = [], Ik.push(Xk), yk.push(Fk)
        } else {
          if (2 === kk.animations.length && (ik.f.SlerpToRef(kk.animations[0].currentValue, kk.animations[1].currentValue, kk.animations[1].weight / kk.totalWeight, Fk), 0 === kk.totalAdditiveWeight)) return Fk;
          Ik = [], yk = [], lk = kk.totalWeight
        }
        for (let Fk = 0; Fk < kk.animations.length; Fk++) {
          const Xk = kk.animations[Fk];
          Ik.push(Xk.currentValue), yk.push(Xk.weight / lk)
        }
        let ak = 0;
        for (let kk = 0; kk < Ik.length;) kk ? (ak += yk[kk], ik.f.SlerpToRef(Tk, Ik[kk], yk[kk] / ak, Tk), kk++) : (ik.f.SlerpToRef(Ik[kk], Ik[kk + 1], yk[kk + 1] / (yk[kk] + yk[kk + 1]), Fk), Tk = Fk, ak = yk[kk] + yk[kk + 1], kk += 2)
      }
      for (let yk = 0; yk < kk.additiveAnimations.length; yk++) {
        const Fk = kk.additiveAnimations[yk];
        0 !== Fk.weight && (Tk.multiplyToRef(Fk.currentValue, ik.l.Quaternion[0]), ik.f.SlerpToRef(Tk, ik.l.Quaternion[0], Fk.weight, Tk))
      }
      return Tk
    }

    function pk(kk, Fk) {
      Fk && (Fk.prototype.copyAnimationRange = function(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Sk.c(this.name, "_matrix", kk.animations[0].framePerSecond, Sk.c.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const ik = kk.animations[0].getRange(Fk);
        if (!ik) return !1;
        const yk = ik.from,
          lk = ik.to,
          ak = kk.animations[0].getKeys(),
          qk = kk.length,
          Lk = kk.getParent(),
          tk = this.getParent(),
          Zk = Xk && Lk && qk && this.length && qk !== this.length,
          jk = Zk && tk && Lk ? tk.length / Lk.length : 1,
          ek = Xk && !tk && Tk && (1 !== Tk.x || 1 !== Tk.y || 1 !== Tk.z),
          wk = this.animations[0].getKeys();
        let Hk, Jk, xk;
        for (let Pk = 0, Kk = ak.length; Pk < Kk; Pk++) Hk = ak[Pk], Hk.frame >= yk && Hk.frame <= lk && (Xk ? (xk = Hk.value.clone(), Zk ? (Jk = xk.getTranslation(), xk.setTranslation(Jk.scaleInPlace(jk))) : ek && Tk ? (Jk = xk.getTranslation(), xk.setTranslation(Jk.multiplyInPlace(Tk))) : xk = Hk.value) : xk = Hk.value, wk.push({
          frame: Hk.frame + Ik,
          value: xk
        }));
        return this.animations[0].createRange(Fk, yk + Ik, lk + Ik), !0
      }), kk && (kk.prototype._animate = function(kk) {
        const Fk = this._animationWrites,
          Ik = this._animationWriteCount;
        let Xk = 0;
        for (let ik = this._animationStepWriteCount; ik < Ik; ik++) {
          const kk = Fk[ik];
          kk.iH && -1 === kk.weight || (kk.iH = !0, Fk[ik] = Fk[Xk], Fk[Xk] = kk, Xk++)
        }
        for (let ik = Xk; ik < Ik; ik++) {
          const kk = Fk[ik];
          kk.runtimeAnimation = null, kk.target = null
        }
        if (this._animationWriteCount = Xk, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Tk = Ek.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Tk
        }
        this.deltaTime = void 0 !== kk ? kk : this.useConstantAnimationDeltaTime ? 16 : (Tk - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Tk;
        const yk = this._activeAnimatables;
        if (0 === yk.length) return;
        this._animationTime += this.deltaTime;
        const lk = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let ik = 0; ik < yk.length; ik++) {
          const kk = yk[ik];
          !kk._animate(lk) && kk.disposeOnEnd && ik--
        }! function(kk) {
          if (kk._registeredForLateAnimationBindings.length) {
            for (let Fk = 0; Fk < kk._registeredForLateAnimationBindings.length; Fk++) {
              const Ik = kk._registeredForLateAnimationBindings.data[Fk];
              for (const kk in Ik._lateAnimationHolders) {
                const Fk = Ik._lateAnimationHolders[kk],
                  Xk = Fk.animations[0],
                  Tk = Fk.originalValue;
                if (void 0 === Tk || null === Tk) continue;
                const yk = Sk.c.AllowMatrixDecomposeForInterpolation && Tk.m;
                let lk = Ik[kk];
                if (yk) lk = nk(Fk);
                else if (void 0 !== Tk.w) lk = Gk(Fk, lk || ik.f.Identity());
                else {
                  let kk = 0,
                    Ik = 1;
                  const ik = Xk && Xk._animationState.Fi === Sk.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Fk.totalWeight < 1) lk = ik ? Tk.clone ? Tk.clone() : Tk : Xk && Tk.scale ? Tk.scale(1 - Fk.totalWeight) : Xk ? Tk * (1 - Fk.totalWeight) : Tk.clone ? Tk.clone() : Tk;
                  else if (Xk) {
                    Ik = Fk.totalWeight;
                    const yk = Xk.weight / Ik;
                    lk = 1 !== yk ? Xk.currentValue.scale ? Xk.currentValue.scale(yk) : Xk.currentValue * yk : (Fk.animations.length > 1 || Fk.additiveAnimations.length > 0) && Xk.currentValue.clone ? Xk.currentValue.clone() : Xk.currentValue, ik && (lk.addToRef ? lk.addToRef(Tk, lk) : lk += Tk), kk = 1
                  }
                  for (let Xk = kk; Xk < Fk.animations.length; Xk++) {
                    const kk = Fk.animations[Xk],
                      Tk = kk.weight / Ik;
                    Tk && (kk.currentValue.scaleAndAddToRef ? kk.currentValue.scaleAndAddToRef(Tk, lk) : lk += kk.currentValue * Tk)
                  }
                  for (let Xk = 0; Xk < Fk.additiveAnimations.length; Xk++) {
                    const kk = Fk.additiveAnimations[Xk],
                      Ik = kk.weight;
                    Ik && (kk.currentValue.scaleAndAddToRef ? kk.currentValue.scaleAndAddToRef(Ik, lk) : lk += kk.currentValue * Ik)
                  }
                }
                Ik[kk] = lk
              }
              Ik._lateAnimationHolders = {}
            }
            kk._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, kk.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((kk, Fk) => kk.playOrder - Fk.playOrder))
      }, kk.prototype.beginWeightedAnimation = function(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          yk = arguments.length > 6 ? arguments[6] : void 0,
          lk = arguments.length > 7 ? arguments[7] : void 0,
          ak = arguments.length > 8 ? arguments[8] : void 0,
          qk = arguments.length > 9 ? arguments[9] : void 0,
          Lk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const tk = this.beginAnimation(kk, Fk, Ik, Tk, ik, yk, lk, !1, ak, qk, Lk);
        return tk.weight = Xk, tk
      }, kk.prototype.beginAnimation = function(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ik = arguments.length > 5 ? arguments[5] : void 0,
          yk = arguments.length > 6 ? arguments[6] : void 0,
          lk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          ak = arguments.length > 8 ? arguments[8] : void 0,
          qk = arguments.length > 9 ? arguments[9] : void 0,
          Lk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Tk < 0) {
          const kk = Fk;
          Fk = Ik, Ik = kk, Tk = -Tk
        }
        Fk > Ik && (Tk = -Tk), lk && this.stopAnimation(kk, void 0, ak), yk || (yk = new Ok(this, kk, Fk, Ik, Xk, Tk, ik, void 0, qk, Lk));
        const tk = !ak || ak(kk);
        if (kk.animations && tk && yk.appendAnimations(kk, kk.animations), kk.getAnimatables) {
          const Lk = kk.getAnimatables();
          for (let kk = 0; kk < Lk.length; kk++) this.beginAnimation(Lk[kk], Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk)
        }
        return yk.reset(), yk
      }, kk.prototype.beginHierarchyAnimation = function(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          yk = arguments.length > 6 ? arguments[6] : void 0,
          lk = arguments.length > 7 ? arguments[7] : void 0,
          ak = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          qk = arguments.length > 9 ? arguments[9] : void 0,
          Lk = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const tk = kk.getDescendants(Fk),
          Zk = [];
        Zk.push(this.beginAnimation(kk, Ik, Xk, Tk, ik, yk, lk, ak, qk, void 0, Lk));
        for (const jk of tk) Zk.push(this.beginAnimation(jk, Ik, Xk, Tk, ik, yk, lk, ak, qk, void 0, Lk));
        return Zk
      }, kk.prototype.beginDirectAnimation = function(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (ik < 0) {
          const kk = Ik;
          Ik = Xk, Xk = kk, ik = -ik
        }
        Ik > Xk && (ik = -ik);
        return new Ok(this, kk, Ik, Xk, Tk, ik, arguments.length > 6 ? arguments[6] : void 0, Fk, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, kk.prototype.beginDirectHierarchyAnimation = function(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        let qk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Lk = kk.getDescendants(Fk),
          tk = [];
        tk.push(this.beginDirectAnimation(kk, Ik, Xk, Tk, ik, yk, lk, ak, qk));
        for (const Zk of Lk) tk.push(this.beginDirectAnimation(Zk, Ik, Xk, Tk, ik, yk, lk, ak, qk));
        return tk
      }, kk.prototype.getAnimatableByTarget = function(kk) {
        for (let Fk = 0; Fk < this._activeAnimatables.length; Fk++)
          if (this._activeAnimatables[Fk].target === kk) return this._activeAnimatables[Fk];
        return null
      }, kk.prototype.getAllAnimatablesByTarget = function(kk) {
        const Fk = [];
        for (let Ik = 0; Ik < this._activeAnimatables.length; Ik++) this._activeAnimatables[Ik].target === kk && Fk.push(this._activeAnimatables[Ik]);
        return Fk
      }, kk.prototype.stopAnimation = function(kk, Fk, Ik) {
        const Xk = this.getAllAnimatablesByTarget(kk);
        for (const Tk of Xk) Tk.stop(Fk, Ik)
      }, kk.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let kk = 0; kk < this._activeAnimatables.length; kk++) this._activeAnimatables[kk].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const kk of this.animationGroups) kk.stop()
      })
    }
    Ok.ProcessPausedAnimatables = !1;
    var uk, bk = Ik(37166),
      Rk = Ik(40218),
      Uk = Ik(39863);
    class Ck extends Rk.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(kk) {
        (kk.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.kS(kk), this._markAsDirtyAndDecompose())
      }
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(kk, Fk.mG(), !1), this.name = kk, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Fk, this._localMatrix = Xk?.clone() ?? ik.c.Identity(), this._restMatrix = Tk ?? this._localMatrix.clone(), this._bindMatrix = yk ?? this._localMatrix.clone(), this._index = lk, this._absoluteMatrix = new ik.c, this._absoluteBindMatrix = new ik.c, this._absoluteInverseBindMatrix = new ik.c, this._finalMatrix = new ik.c, Fk.bones.push(this), this.setParent(Ik, !1), this._updateAbsoluteBindMatrices()
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
      set parent(kk) {
        this.setParent(kk)
      }
      setParent(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== kk) {
          if (this.parent) {
            const kk = this.parent.children.indexOf(this); - 1 !== kk && this.parent.children.splice(kk, 1)
          }
          this._parentNode = kk, this.parent && this.parent.children.push(this), Fk && this._updateAbsoluteBindMatrices(), this.UFk()
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
      setRestMatrix(kk) {
        this._restMatrix.kS(kk)
      }
      setRestPose(kk) {
        this.setRestMatrix(kk)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(kk) {
        this.I9(kk)
      }
      setBindPose(kk) {
        this.setBindMatrix(kk)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const kk = ik.l.Ge[0],
            Fk = ik.l.Quaternion[0],
            Ik = ik.l.Ge[1];
          this.getRestMatrix().decompose(kk, Fk, Ik), this._linkedTransformNode.position.kS(Ik), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? ik.f.Identity(), this._linkedTransformNode.rotationQuaternion.kS(Fk), this._linkedTransformNode.ci.kS(kk)
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
      linkTransformNode(kk) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = kk, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.Mkk
      }
      set position(kk) {
        this._decompose(), this.Mkk.kS(kk), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(kk) {
        this.setRotation(kk)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(kk) {
        this.setRotationQuaternion(kk)
      }
      get ci() {
        return this.getScale()
      }
      set ci(kk) {
        this.setScale(kk)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = ik.t.Zero(), this._localRotation = ik.f.Zero(), this.Mkk = ik.t.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.Mkk))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, ik.c.ComposeToRef(this._localScaling, this._localRotation, this.Mkk, this._localMatrix)) : this._needToCompose = !1)
      }
      I9(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.kS(kk), Fk && this._updateAbsoluteBindMatrices(), Ik ? this._matrix = kk : this.UFk()
      }
      _updateAbsoluteBindMatrices(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (kk || (kk = this._bindMatrix), this.parent ? kk.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.kS(kk), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Fk)
          for (let Ik = 0; Ik < this.children.length; Ik++) this.children[Ik]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      UFk() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.UFk(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.UFk(), this._needToDecompose = !0
      }
      _updatePosition(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Tk = this.getLocalMatrix();
        if (0 == Fk) Xk ? (Tk.addAtIndex(12, kk.x), Tk.addAtIndex(13, kk.y), Tk.addAtIndex(14, kk.z)) : Tk.setTranslationFromFloats(kk.x, kk.y, kk.z);
        else {
          const Fk = Ck._TmpMats[0],
            yk = Ck._TmpVecs[0];
          this.parent ? (Fk.kS(this.parent.getAbsoluteMatrix()), Ik && Fk.multiplyToRef(Ik.getWorldMatrix(), Fk)) : ik.c.IdentityToRef(Fk), Xk && Fk.setTranslationFromFloats(0, 0, 0), Fk.invert(), ik.t.TransformCoordinatesToRef(kk, Fk, yk), Xk ? (Tk.addAtIndex(12, yk.x), Tk.addAtIndex(13, yk.y), Tk.addAtIndex(14, yk.z)) : Tk.setTranslationFromFloats(yk.x, yk.y, yk.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(kk, Fk, Ik, !0)
      }
      setPosition(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(kk, Fk, Ik, !1)
      }
      setAbsolutePosition(kk, Fk) {
        this.setPosition(kk, 1, Fk)
      }
      scale(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Tk = this.getLocalMatrix(),
          yk = Ck._TmpMats[0];
        ik.c.ScalingToRef(kk, Fk, Ik, yk), yk.multiplyToRef(Tk, Tk), yk.invert();
        for (const ik of this.children) {
          const Xk = ik.getLocalMatrix();
          Xk.multiplyToRef(yk, Xk), Xk.multiplyAtIndex(12, kk), Xk.multiplyAtIndex(13, Fk), Xk.multiplyAtIndex(14, Ik), ik._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Xk)
          for (const ik of this.children) ik.scale(kk, Fk, Ik, Xk)
      }
      setScale(kk) {
        this._decompose(), this._localScaling.kS(kk), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(kk) {
        this._decompose(), kk.kS(this._localScaling)
      }
      setYawPitchRoll(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tk = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Xk) {
          const yk = Ck._TmpQuat;
          return ik.f.RotationYawPitchRollToRef(kk, Fk, Ik, yk), void this.setRotationQuaternion(yk, Xk, Tk)
        }
        const yk = Ck._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(yk, Tk)) return;
        const lk = Ck._TmpMats[1];
        ik.c.RotationYawPitchRollToRef(kk, Fk, Ik, lk), yk.multiplyToRef(lk, lk), this._rotateWithMatrix(lk, Xk, Tk)
      }
      rotate(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        const Tk = Ck._TmpMats[0];
        Tk.setTranslationFromFloats(0, 0, 0), ik.c.RotationAxisToRef(kk, Fk, Tk), this._rotateWithMatrix(Tk, Ik, Xk)
      }
      setAxisAngle(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === Ik) {
          const Tk = Ck._TmpQuat;
          return ik.f.RotationAxisToRef(kk, Fk, Tk), void this.setRotationQuaternion(Tk, Ik, Xk)
        }
        const Tk = Ck._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Tk, Xk)) return;
        const yk = Ck._TmpMats[1];
        ik.c.RotationAxisToRef(kk, Fk, yk), Tk.multiplyToRef(yk, yk), this._rotateWithMatrix(yk, Ik, Xk)
      }
      setRotation(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(kk.y, kk.x, kk.z, Fk, Ik)
      }
      setRotationQuaternion(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Fk) return this._decompose(), this._localRotation.kS(kk), void this._markAsDirtyAndCompose();
        const Xk = Ck._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Xk, Ik)) return;
        const Tk = Ck._TmpMats[1];
        ik.c.FromQuaternionToRef(kk, Tk), Xk.multiplyToRef(Tk, Tk), this._rotateWithMatrix(Tk, Fk, Ik)
      }
      setRotationMatrix(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Fk) {
          const Xk = Ck._TmpQuat;
          return ik.f.FromRotationMatrixToRef(kk, Xk), void this.setRotationQuaternion(Xk, Fk, Ik)
        }
        const Xk = Ck._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Xk, Ik)) return;
        const Tk = Ck._TmpMats[1];
        Tk.kS(kk), Xk.multiplyToRef(kk, Tk), this._rotateWithMatrix(Tk, Fk, Ik)
      }
      _rotateWithMatrix(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Xk = this.getLocalMatrix(),
          Tk = Xk.m[12],
          ik = Xk.m[13],
          yk = Xk.m[14],
          lk = this.getParent(),
          ak = Ck._TmpMats[3],
          qk = Ck._TmpMats[4];
        lk && 1 == Fk ? (Ik ? (ak.kS(Ik.getWorldMatrix()), lk.getAbsoluteMatrix().multiplyToRef(ak, ak)) : ak.kS(lk.getAbsoluteMatrix()), qk.kS(ak), qk.invert(), Xk.multiplyToRef(ak, Xk), Xk.multiplyToRef(kk, Xk), Xk.multiplyToRef(qk, Xk)) : 1 == Fk && Ik ? (ak.kS(Ik.getWorldMatrix()), qk.kS(ak), qk.invert(), Xk.multiplyToRef(ak, Xk), Xk.multiplyToRef(kk, Xk), Xk.multiplyToRef(qk, Xk)) : Xk.multiplyToRef(kk, Xk), Xk.setTranslationFromFloats(Tk, ik, yk), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(kk, Fk) {
        const Ik = Ck._TmpMats[2];
        return kk.kS(this.getAbsoluteMatrix()), Fk ? (kk.multiplyToRef(Fk.getWorldMatrix(), kk), ik.c.ScalingToRef(Fk.ci.x, Fk.ci.y, Fk.ci.z, Ik)) : ik.c.IdentityToRef(Ik), kk.invert(), !isNaN(kk.m[0]) && (Ik.multiplyAtIndex(0, this._scalingDeterminant), kk.multiplyToRef(Ik, kk), !0)
      }
      OJ() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ik = ik.t.Zero();
        return this.getPositionToRef(kk, Fk, Ik), Ik
      }
      getPositionToRef() {
        let kk = arguments.length > 1 ? arguments[1] : void 0,
          Fk = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const kk = this.getLocalMatrix();
          Fk.x = kk.m[12], Fk.y = kk.m[13], Fk.z = kk.m[14]
        } else {
          const Ik = Ck._TmpMats[0].kS(this.getAbsoluteMatrix());
          kk && Ik.multiplyToRef(kk.getWorldMatrix(), Ik), Fk.x = Ik.m[12], Fk.y = Ik.m[13], Fk.z = Ik.m[14]
        }
      }
      getAbsolutePosition() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Fk = ik.t.Zero();
        return this.getPositionToRef(1, kk, Fk), Fk
      }
      getAbsolutePositionToRef(kk, Fk) {
        this.getPositionToRef(1, kk, Fk)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.kS(this._localMatrix);
          const kk = this._skeleton.getPoseMatrix();
          kk && this._absoluteMatrix.multiplyToRef(kk, this._absoluteMatrix)
        }
        const kk = this.children,
          Fk = kk.length;
        for (let Ik = 0; Ik < Fk; Ik++) kk[Ik].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      Am(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ik = ik.t.Zero();
        return this.getDirectionToRef(kk, Fk, Ik), Ik
      }
      getDirectionToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Xk = Ck._TmpMats[0].kS(this.getAbsoluteMatrix());
        Fk && Xk.multiplyToRef(Fk.getWorldMatrix(), Xk), ik.t.TransformNormalToRef(kk, Xk, Ik), Ik.normalize()
      }
      getRotation() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ik = ik.t.Zero();
        return this.getRotationToRef(kk, Fk, Ik), Ik
      }
      getRotationToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Xk = Ck._TmpQuat;
        this.getRotationQuaternionToRef(kk, Fk, Xk), Xk.toEulerAnglesToRef(Ik)
      }
      getRotationQuaternion() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ik = ik.f.Identity();
        return this.getRotationQuaternionToRef(kk, Fk, Ik), Ik
      }
      getRotationQuaternionToRef() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Fk = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Fk.kS(this._localRotation);
        else {
          const Ik = Ck._TmpMats[0],
            Xk = this.getAbsoluteMatrix();
          kk ? Xk.multiplyToRef(kk.getWorldMatrix(), Ik) : Ik.kS(Xk), Ik.multiplyAtIndex(0, this._scalingDeterminant), Ik.multiplyAtIndex(1, this._scalingDeterminant), Ik.multiplyAtIndex(2, this._scalingDeterminant), Ik.decompose(void 0, Fk, void 0)
        }
      }
      getRotationMatrix() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 ? arguments[1] : void 0;
        const Ik = ik.c.Identity();
        return this.getRotationMatrixToRef(kk, Fk, Ik), Ik
      }
      getRotationMatrixToRef() {
        let kk = arguments.length > 1 ? arguments[1] : void 0,
          Fk = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Fk);
        else {
          const Ik = Ck._TmpMats[0],
            Xk = this.getAbsoluteMatrix();
          kk ? Xk.multiplyToRef(kk.getWorldMatrix(), Ik) : Ik.kS(Xk), Ik.multiplyAtIndex(0, this._scalingDeterminant), Ik.multiplyAtIndex(1, this._scalingDeterminant), Ik.multiplyAtIndex(2, this._scalingDeterminant), Ik.getRotationMatrixToRef(Fk)
        }
      }
      getAbsolutePositionFromLocal(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ik = ik.t.Zero();
        return this.getAbsolutePositionFromLocalToRef(kk, Fk, Ik), Ik
      }
      getAbsolutePositionFromLocalToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Xk = Ck._TmpMats[0].kS(this.getAbsoluteMatrix());
        Fk && Xk.multiplyToRef(Fk.getWorldMatrix(), Xk), ik.t.TransformCoordinatesToRef(kk, Xk, Ik)
      }
      getLocalPositionFromAbsolute(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ik = ik.t.Zero();
        return this.getLocalPositionFromAbsoluteToRef(kk, Fk, Ik), Ik
      }
      getLocalPositionFromAbsoluteToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Xk = Ck._TmpMats[0].kS(this.getAbsoluteMatrix());
        Fk && Xk.multiplyToRef(Fk.getWorldMatrix(), Xk), Xk.invert(), ik.t.TransformCoordinatesToRef(kk, Xk, Ik)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const kk = this._skeleton.bones.indexOf(this);
        if (-1 !== kk && this._skeleton.bones.splice(kk, 1), this._parentNode && this._parentNode.children) {
          const kk = this._parentNode.children,
            Fk = kk.indexOf(this); - 1 !== Fk && kk.splice(Fk, 1)
        }
        super.dispose()
      }
    }
    Ck._TmpVecs = (0, bk.b)(2, ik.t.Zero), Ck._TmpQuat = ik.f.Identity(), Ck._TmpMats = (0, bk.b)(5, ik.c.Identity), (uk = Ck.prototype).copyAnimationRange ?? (uk.copyAnimationRange = (0, Uk.h)("Bone", "copyAnimationRange"));
    var Nk = Ik(40090);
    let ck = !1;
    var Wk = Ik(39969),
      fk = Ik(40324),
      Bk = Ik(40333),
      dk = Ik(40329),
      Yk = Ik(40126);

    function Ak(kk, Fk) {
      const Ik = (0, jk.RandomRange)(0, 1);
      Lk.h.LerpToRef(Fk.color1, Fk.color2, Ik, kk.color)
    }

    function gk(kk, Fk) {
      Fk.colorDead.subtractToRef(kk.color, Fk._colorDiff), Fk._colorDiff.scaleToRef(1 / kk.lifeTime, kk.colorStep)
    }

    function mk(kk, Fk) {
      kk._properties.currentColorGradient = Fk._colorGradients[0], kk._properties.currentColorGradient.getColorToRef(kk.color), kk._properties.currentColor1.kS(kk.color), Fk._colorGradients.length > 1 ? Fk._colorGradients[1].getColorToRef(kk._properties.currentColor2) : kk._properties.currentColor2.kS(kk.color)
    }

    function hk(kk, Fk) {
      const Ik = Fk._colorGradients;
      Xk.e.GetCurrentGradient(Fk._ratio, Ik, ((Fk, Ik, Xk) => {
        Fk !== kk._properties.currentColorGradient && (kk._properties.currentColor1.kS(kk._properties.currentColor2), Ik.getColorToRef(kk._properties.currentColor2), kk._properties.currentColorGradient = Fk), Lk.h.LerpToRef(kk._properties.currentColor1, kk._properties.currentColor2, Xk, kk.color), kk.color.a < 0 && (kk.color.a = 0)
      }))
    }

    function rk(kk, Fk) {
      kk.colorStep.scaleToRef(Fk._scaledUpdateSpeed, Fk._scaledColorStep), kk.color.addInPlace(Fk._scaledColorStep), kk.color.a < 0 && (kk.color.a = 0)
    }

    function Dk(kk, Fk) {
      Xk.e.GetCurrentGradient(Fk._ratio, Fk._angularSpeedGradients, ((Fk, Ik, Xk) => {
        Fk !== kk._properties.currentAngularSpeedGradient && (kk._properties.currentAngularSpeed1 = kk._properties.currentAngularSpeed2, kk._properties.currentAngularSpeed2 = Ik.getFactor(), kk._properties.currentAngularSpeedGradient = Fk), kk.angularSpeed = (0, jk.Lerp)(kk._properties.currentAngularSpeed1, kk._properties.currentAngularSpeed2, Xk)
      }))
    }

    function Mk(kk, Fk) {
      kk.angle += kk.angularSpeed * Fk._scaledUpdateSpeed
    }

    function kF(kk, Fk) {
      Fk.particleEmitterType.startDirectionFunction(Fk._emitterWorldMatrix, kk.direction, kk, Fk.isLocal, Fk._emitterInverseWorldMatrix)
    }

    function FF(kk, Fk) {
      Fk.startDirectionFunction(Fk._emitterWorldMatrix, kk.direction, kk, Fk.isLocal)
    }

    function IF(kk, Fk) {
      kk._properties.currentVelocityGradient = Fk._velocityGradients[0], kk._properties.currentVelocity1 = kk._properties.currentVelocityGradient.getFactor(), Fk._velocityGradients.length > 1 ? kk._properties.currentVelocity2 = Fk._velocityGradients[1].getFactor() : kk._properties.currentVelocity2 = kk._properties.currentVelocity1
    }

    function XF(kk, Fk) {
      kk._properties.currentLimitVelocityGradient = Fk._limitVelocityGradients[0], kk._properties.currentLimitVelocity1 = kk._properties.currentLimitVelocityGradient.getFactor(), Fk._limitVelocityGradients.length > 1 ? kk._properties.currentLimitVelocity2 = Fk._limitVelocityGradients[1].getFactor() : kk._properties.currentLimitVelocity2 = kk._properties.currentLimitVelocity1
    }

    function TF(kk, Fk) {
      Xk.e.GetCurrentGradient(Fk._ratio, Fk._velocityGradients, ((Fk, Ik, Xk) => {
        Fk !== kk._properties.currentVelocityGradient && (kk._properties.currentVelocity1 = kk._properties.currentVelocity2, kk._properties.currentVelocity2 = Ik.getFactor(), kk._properties.currentVelocityGradient = Fk), kk._properties.directionScale *= (0, jk.Lerp)(kk._properties.currentVelocity1, kk._properties.currentVelocity2, Xk)
      }))
    }

    function iF(kk, Fk) {
      Xk.e.GetCurrentGradient(Fk._ratio, Fk._limitVelocityGradients, ((Ik, Xk, Tk) => {
        Ik !== kk._properties.currentLimitVelocityGradient && (kk._properties.currentLimitVelocity1 = kk._properties.currentLimitVelocity2, kk._properties.currentLimitVelocity2 = Xk.getFactor(), kk._properties.currentLimitVelocityGradient = Ik);
        const ik = (0, jk.Lerp)(kk._properties.currentLimitVelocity1, kk._properties.currentLimitVelocity2, Tk);
        kk.direction.length() > ik && kk.direction.scaleInPlace(Fk.limitVelocityDamping)
      }))
    }

    function yF(kk) {
      kk.direction.scaleToRef(kk._properties.directionScale, kk._properties.scaledDirection)
    }

    function lF(kk, Fk) {
      Fk.particleEmitterType.startPositionFunction(Fk._emitterWorldMatrix, kk.position, kk, Fk.isLocal)
    }

    function aF(kk, Fk) {
      Fk.startPositionFunction(Fk._emitterWorldMatrix, kk.position, kk, Fk.isLocal)
    }

    function qF(kk, Fk) {
      kk._properties.localPosition ? kk._properties.localPosition.kS(kk.position) : kk._properties.localPosition = kk.position.clone(), ik.t.TransformCoordinatesToRef(kk._properties.localPosition, Fk._emitterWorldMatrix, kk.position)
    }

    function LF(kk, Fk) {
      Fk.isLocal && kk._properties.localPosition ? (kk._properties.localPosition.addInPlace(kk._properties.scaledDirection), ik.t.TransformCoordinatesToRef(kk._properties.localPosition, Fk._emitterWorldMatrix, kk.position)) : kk.position.addInPlace(kk._properties.scaledDirection)
    }

    function tF(kk, Fk) {
      kk._properties.currentDragGradient = Fk._dragGradients[0], kk._properties.currentDrag1 = kk._properties.currentDragGradient.getFactor(), Fk._dragGradients.length > 1 ? kk._properties.currentDrag2 = Fk._dragGradients[1].getFactor() : kk._properties.currentDrag2 = kk._properties.currentDrag1
    }

    function ZF(kk, Fk) {
      Xk.e.GetCurrentGradient(Fk._ratio, Fk._dragGradients, ((Fk, Ik, Xk) => {
        Fk !== kk._properties.currentDragGradient && (kk._properties.currentDrag1 = kk._properties.currentDrag2, kk._properties.currentDrag2 = Ik.getFactor(), kk._properties.currentDragGradient = Fk);
        const Tk = (0, jk.Lerp)(kk._properties.currentDrag1, kk._properties.currentDrag2, Xk);
        kk._properties.scaledDirection.scaleInPlace(1 - Tk)
      }))
    }

    function jF(kk, Fk) {
      kk._properties.randomNoiseCoordinates1 && kk._properties.randomNoiseCoordinates2 ? (kk._properties.randomNoiseCoordinates1.t5(Math.random(), Math.random(), Math.random()), kk._properties.randomNoiseCoordinates2.t5(Math.random(), Math.random(), Math.random())) : (kk._properties.randomNoiseCoordinates1 = new ik.t(Math.random(), Math.random(), Math.random()), kk._properties.randomNoiseCoordinates2 = new ik.t(Math.random(), Math.random(), Math.random()))
    }

    function eF(kk, Fk) {
      const Ik = Fk._noiseTextureData,
        Xk = Fk._noiseTextureSize;
      if (Ik && Xk && kk._properties.randomNoiseCoordinates1 && kk._properties.randomNoiseCoordinates2) {
        const Tk = Fk._fetchR(kk._properties.randomNoiseCoordinates1.x, kk._properties.randomNoiseCoordinates1.y, Xk.width, Xk.height, Ik),
          yk = Fk._fetchR(kk._properties.randomNoiseCoordinates1.z, kk._properties.randomNoiseCoordinates2.x, Xk.width, Xk.height, Ik),
          lk = Fk._fetchR(kk._properties.randomNoiseCoordinates2.y, kk._properties.randomNoiseCoordinates2.z, Xk.width, Xk.height, Ik),
          ak = ik.l.Ge[0],
          qk = ik.l.Ge[1];
        ak.t5((2 * Tk - 1) * Fk.noiseStrength.x, (2 * yk - 1) * Fk.noiseStrength.y, (2 * lk - 1) * Fk.noiseStrength.z), ak.scaleToRef(Fk._tempScaledUpdateSpeed, qk), kk.direction.addInPlace(qk)
      }
    }

    function wF(kk, Fk) {
      Fk.gravity.scaleToRef(Fk._tempScaledUpdateSpeed, Fk._scaledGravity), kk.direction.addInPlace(Fk._scaledGravity)
    }

    function HF(kk, Fk) {
      kk.size = (0, jk.RandomRange)(Fk.minSize, Fk.maxSize), kk.scale.t5((0, jk.RandomRange)(Fk.minScaleX, Fk.maxScaleX), (0, jk.RandomRange)(Fk.minScaleY, Fk.maxScaleY))
    }

    function JF(kk, Fk) {
      kk._properties.currentSizeGradient = Fk._sizeGradients[0], kk._properties.currentSize1 = kk._properties.currentSizeGradient.getFactor(), kk.size = kk._properties.currentSize1, Fk._sizeGradients.length > 1 ? kk._properties.currentSize2 = Fk._sizeGradients[1].getFactor() : kk._properties.currentSize2 = kk._properties.currentSize1, kk.scale.t5((0, jk.RandomRange)(Fk.minScaleX, Fk.maxScaleX), (0, jk.RandomRange)(Fk.minScaleY, Fk.maxScaleY))
    }

    function xF(kk, Fk) {
      const Ik = Fk._actualFrame / Fk.targetStopDuration;
      Xk.e.GetCurrentGradient(Ik, Fk._startSizeGradients, ((Ik, Xk, Tk) => {
        Ik !== Fk._currentStartSizeGradient && (Fk._currentStartSize1 = Fk._currentStartSize2, Fk._currentStartSize2 = Xk.getFactor(), Fk._currentStartSizeGradient = Ik);
        const ik = (0, jk.Lerp)(Fk._currentStartSize1, Fk._currentStartSize2, Tk);
        kk.scale.scaleInPlace(ik)
      }))
    }

    function PF(kk, Fk) {
      Xk.e.GetCurrentGradient(Fk._ratio, Fk._sizeGradients, ((Fk, Ik, Xk) => {
        Fk !== kk._properties.currentSizeGradient && (kk._properties.currentSize1 = kk._properties.currentSize2, kk._properties.currentSize2 = Ik.getFactor(), kk._properties.currentSizeGradient = Fk), kk.size = (0, jk.Lerp)(kk._properties.currentSize1, kk._properties.currentSize2, Xk)
      }))
    }

    function KF(kk, Fk) {
      kk.remapData = new ik.u(0, 1, 0, 1)
    }

    function QF(kk, Fk) {
      Fk._colorRemapGradients && Fk._colorRemapGradients.length > 0 && Xk.e.GetCurrentGradient(Fk._ratio, Fk._colorRemapGradients, ((Fk, Ik, Xk) => {
        const Tk = (0, jk.Lerp)(Fk.factor1, Ik.factor1, Xk),
          ik = (0, jk.Lerp)(Fk.factor2, Ik.factor2, Xk);
        kk.remapData.x = Tk, kk.remapData.y = ik - Tk
      })), Fk._alphaRemapGradients && Fk._alphaRemapGradients.length > 0 && Xk.e.GetCurrentGradient(Fk._ratio, Fk._alphaRemapGradients, ((Fk, Ik, Xk) => {
        const Tk = (0, jk.Lerp)(Fk.factor1, Ik.factor1, Xk),
          ik = (0, jk.Lerp)(Fk.factor2, Ik.factor2, Xk);
        kk.remapData.z = Tk, kk.remapData.w = ik - Tk
      }))
    }

    function sF(kk, Fk) {
      const Ik = (0, jk.Clamp)(Fk._actualFrame / Fk.targetStopDuration);
      Xk.e.GetCurrentGradient(Ik, Fk._lifeTimeGradients, ((Fk, Xk) => {
        const Tk = Fk,
          ik = Xk,
          yk = Tk.getFactor(),
          lk = ik.getFactor(),
          ak = (Ik - Tk.gradient) / (ik.gradient - Tk.gradient);
        kk.lifeTime = (0, jk.Lerp)(yk, lk, ak)
      })), Fk._emitPower = (0, jk.RandomRange)(Fk.minEmitPower, Fk.maxEmitPower)
    }

    function VF(kk, Fk) {
      kk.lifeTime = (0, jk.RandomRange)(Fk.minLifeTime, Fk.maxLifeTime), Fk._emitPower = (0, jk.RandomRange)(Fk.minEmitPower, Fk.maxEmitPower)
    }

    function zF(kk, Fk) {
      0 === Fk._emitPower ? (kk._properties.initialDirection ? kk._properties.initialDirection.kS(kk.direction) : kk._properties.initialDirection = kk.direction.clone(), kk.direction.set(0, 0, 0)) : (kk._properties.initialDirection = null, kk.direction.scaleInPlace(Fk._emitPower)), kk.direction.addInPlace(Fk._inheritedVelocityOffset)
    }

    function SF(kk, Fk) {
      kk.angularSpeed = (0, jk.RandomRange)(Fk.minAngularSpeed, Fk.maxAngularSpeed), kk.angle = (0, jk.RandomRange)(Fk.minInitialRotation, Fk.maxInitialRotation)
    }

    function oF(kk, Fk) {
      kk._properties.currentAngularSpeedGradient = Fk._angularSpeedGradients[0], kk.angularSpeed = kk._properties.currentAngularSpeedGradient.getFactor(), kk._properties.currentAngularSpeed1 = kk.angularSpeed, Fk._angularSpeedGradients.length > 1 ? kk._properties.currentAngularSpeed2 = Fk._angularSpeedGradients[1].getFactor() : kk._properties.currentAngularSpeed2 = kk._properties.currentAngularSpeed1, kk.angle = (0, jk.RandomRange)(Fk.minInitialRotation, Fk.maxInitialRotation)
    }

    function vF(kk, Fk) {
      kk._properties.initialStartSpriteCellId = Fk.startSpriteCellID, kk._properties.initialEndSpriteCellId = Fk.endSpriteCellID, kk._properties.initialSpriteCellLoop = Fk.spriteCellLoop
    }

    function EF(kk, Fk) {
      kk.previousItem = Fk.previousItem, kk.nextItem = Fk, Fk.previousItem && (Fk.previousItem.nextItem = kk), Fk.previousItem = kk
    }

    function OF(kk, Fk) {
      kk.previousItem = Fk, kk.nextItem = Fk.nextItem, Fk.nextItem && (Fk.nextItem.previousItem = kk), Fk.nextItem = kk
    }

    function nF(kk) {
      kk.previousItem && (kk.previousItem.nextItem = kk.nextItem), kk.nextItem && (kk.nextItem.previousItem = kk.previousItem)
    }
    var GF = Ik(40382);
    class pF extends sk {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(kk) {
        this._startDirectionFunction !== kk && (this._startDirectionFunction = kk, this._directionCreation.process = kk ? FF : kF)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(kk) {
        this._startPositionFunction !== kk && (this._startPositionFunction = kk, this._positionCreation.process = kk ? aF : lF)
      }
      set onDispose(kk) {
        this._onDisposeObserver && this.hG.remove(this._onDisposeObserver), this._onDisposeObserver = this.hG.add(kk)
      }
      get Hs() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(kk) {
        this._useRampGradients !== kk && (this._useRampGradients = kk, this._resetEffect(), kk ? (this._rampCreation = {
          process: KF,
          previousItem: null,
          nextItem: null
        }, OF(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: QF,
          previousItem: null,
          nextItem: null
        }, OF(this._remapGradientProcessing, this._gravityProcessing))) : (nF(this._rampCreation), nF(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(kk) {
        this._isLocal !== kk && (this._isLocal = kk, kk ? (this._isLocalCreation = {
          process: qF,
          previousItem: null,
          nextItem: null
        }, OF(this._isLocalCreation, this._positionCreation)) : nF(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(kk) {
        this._animationSheetEnabled !== kk && (this._animationSheetEnabled = kk, kk ? (this._sheetCreation = {
          process: vF,
          previousItem: null,
          nextItem: null
        }, OF(this._sheetCreation, this._colorDeadCreation)) : nF(this._sheetCreation), this._reset())
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
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[kk]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[kk] ?? this._customWrappers[0]
      }
      setCustomEffect(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[Fk] = new fk.e(this._engine), this._customWrappers[Fk].effect = kk, this._customWrappers[Fk].drawContext && (this._customWrappers[Fk].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Tk.e), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(kk) {
        if (this.noiseTexture !== kk) {
          if (this._noiseTexture = kk, !kk) return nF(this._noiseCreation), void nF(this._noiseProcessing);
          this._noiseCreation = {
            process: jF,
            previousItem: null,
            nextItem: null
          }, OF(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: eF,
            previousItem: null,
            nextItem: null
          }, OF(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          yk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          qk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        ck || (ck = !0, pk(Nk.f, Ck)), (0, Wk.e)(), super(kk), this._emitterInverseWorldMatrix = ik.c.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new ik.t, this.hG = new Tk.e, this.onStoppedObservable = new Tk.e, this.onStartedObservable = new Tk.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Lk.h(0, 0, 0, 0), this._colorDiff = new Lk.h(0, 0, 0, 0), this._scaledGravity = ik.t.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = kk => {}, this.recycleParticle = kk => {
          const Fk = this._particles.pop();
          Fk !== kk && Fk.copyTo(kk), Fk.metadata = null, this._stockParticles.push(Fk)
        }, this._createParticle = () => {
          let kk;
          return 0 !== this._stockParticles.length ? (kk = this._stockParticles.pop(), kk._reset()) : kk = new zk(this), this._prepareParticle(kk), kk
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Fk, this._epsilon = lk, Ik && "Scene" !== Ik.getClassName() ? (this._engine = Ik, this.defaultProjectionMatrix = ik.c.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = Ik || ak.e.LastCreatedScene, this._engine = this._scene.Oe(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.jK.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: VF,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: lF,
          previousItem: null,
          nextItem: null
        }, OF(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: kF,
          previousItem: null,
          nextItem: null
        }, OF(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: zF,
          previousItem: null,
          nextItem: null
        }, OF(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: HF,
          previousItem: null,
          nextItem: null
        }, OF(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: SF,
          previousItem: null,
          nextItem: null
        }, OF(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Ak,
          previousItem: null,
          nextItem: null
        }, OF(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: gk,
          previousItem: null,
          nextItem: null
        }, OF(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, qk || (this._colorProcessing = {
          process: rk,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Mk,
          previousItem: null,
          nextItem: null
        }, OF(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: yF,
          previousItem: null,
          nextItem: null
        }, OF(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: LF,
          previousItem: null,
          nextItem: null
        }, OF(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: wF,
          previousItem: null,
          nextItem: null
        }, OF(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = yk, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new fk.e(this._engine)
        }, this._customWrappers[0].effect = Xk, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new tk.c, this.updateFunction = kk => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((kk => {
            this._noiseTextureData = kk
          })));
          const Fk = kk === this._particles;
          for (let Ik = 0; Ik < kk.length; Ik++) {
            const Xk = kk[Ik];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Tk = Xk.age;
            if (Xk.age += this._tempScaledUpdateSpeed, Xk.age > Xk.lifeTime) {
              const kk = Xk.age - Tk,
                Fk = Xk.lifeTime - Tk;
              this._tempScaledUpdateSpeed = Fk * this._tempScaledUpdateSpeed / kk, Xk.age = Xk.lifeTime
            }
            this._ratio = Xk.age / Xk.lifeTime, Xk._properties.directionScale = this._tempScaledUpdateSpeed;
            let ik = this._updateQueueStart;
            for (; ik;) ik.process(Xk, this), ik = ik.nextItem;
            if (this._isAnimationSheetEnabled && !qk && Xk.updateCellIndex(), Xk._inheritParticleInfoToSubEmitters(), Xk.age >= Xk.lifeTime) {
              if (this._emitFromParticle(Xk), Xk._properties.attachedSubEmitters) {
                for (const kk of Xk._properties.attachedSubEmitters) kk.particleSystem.disposeOnStop = !0, kk.particleSystem.stop();
                Xk._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Xk), Fk && Ik--
            } else;
          }
        }
      }
      serialize(kk) {
        throw new Error("Method not implemented.")
      }
      clone(kk, Fk) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = sF : this._lifeTimeCreation.process = VF
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: xF,
          previousItem: null,
          nextItem: null
        }, OF(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (nF(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(kk) {
        this.targetStopDuration !== kk && (this._targetStopDuration = kk, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(kk, Fk, Ik) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, kk, Fk, Ik), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(kk) {
        return this._removeFactorGradient(this._lifeTimeGradients, kk), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(kk, Fk, Ik) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = JF, this._sizeGradientProcessing = {
          process: PF,
          previousItem: null,
          nextItem: null
        }, EF(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, kk, Fk, Ik), this
      }
      removeSizeGradient(kk) {
        return this._removeFactorGradient(this._sizeGradients, kk), 0 === this._sizeGradients?.length && (nF(this._sizeGradientProcessing), this._sizeCreation.process = HF), this
      }
      addColorRemapGradient(kk, Fk, Ik) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, kk, Fk, Ik), this
      }
      removeColorRemapGradient(kk) {
        return this._removeFactorGradient(this._colorRemapGradients, kk), this
      }
      addAlphaRemapGradient(kk, Fk, Ik) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, kk, Fk, Ik), this
      }
      removeAlphaRemapGradient(kk) {
        return this._removeFactorGradient(this._alphaRemapGradients, kk), this
      }
      addAngularSpeedGradient(kk, Fk, Ik) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = oF, this._angularSpeedGradientProcessing = {
          process: Dk,
          previousItem: null,
          nextItem: null
        }, EF(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, kk, Fk, Ik), this
      }
      removeAngularSpeedGradient(kk) {
        return this._removeFactorGradient(this._angularSpeedGradients, kk), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = SF, nF(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(kk, Fk, Ik) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: IF,
          previousItem: null,
          nextItem: null
        }, OF(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: TF,
          previousItem: null,
          nextItem: null
        }, EF(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, kk, Fk, Ik), this
      }
      removeVelocityGradient(kk) {
        return this._removeFactorGradient(this._velocityGradients, kk), 0 === this._velocityGradients?.length && (nF(this._velocityCreation), nF(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(kk, Fk, Ik) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: XF,
          previousItem: null,
          nextItem: null
        }, OF(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: iF,
          previousItem: null,
          nextItem: null
        }, OF(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, kk, Fk, Ik), this
      }
      removeLimitVelocityGradient(kk) {
        return this._removeFactorGradient(this._limitVelocityGradients, kk), 0 === this._limitVelocityGradients?.length && (nF(this._limitVelocityCreation), nF(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(kk, Fk, Ik) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: tF,
          previousItem: null,
          nextItem: null
        }, EF(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: ZF,
          previousItem: null,
          nextItem: null
        }, EF(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, kk, Fk, Ik), this
      }
      removeDragGradient(kk) {
        return this._removeFactorGradient(this._dragGradients, kk), 0 === this._dragGradients?.length && (nF(this._dragCreation), nF(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(kk, Fk, Ik) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, kk, Fk, Ik), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(kk) {
        return this._removeFactorGradient(this._startSizeGradients, kk), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const kk = new Uint8Array(4 * this._rawTextureWidth),
          Fk = Lk.k.Color3[0];
        for (let Ik = 0; Ik < this._rawTextureWidth; Ik++) {
          const Tk = Ik / this._rawTextureWidth;
          Xk.e.GetCurrentGradient(Tk, this._rampGradients, ((Xk, Tk, ik) => {
            Lk.e.LerpToRef(Xk.color, Tk.color, ik, Fk), kk[4 * Ik] = 255 * Fk.r, kk[4 * Ik + 1] = 255 * Fk.g, kk[4 * Ik + 2] = 255 * Fk.b, kk[4 * Ik + 3] = 255
          }))
        }
        this._rampGradientsTexture = lk.b.CreateRGBATexture(kk, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((kk, Fk) => kk.gradient < Fk.gradient ? -1 : kk.gradient > Fk.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(kk, Fk) {
        this._rampGradients || (this._rampGradients = []);
        const Ik = new Xk.c(kk, Fk);
        return this._rampGradients.push(Ik), this._syncRampGradientTexture(), this
      }
      removeRampGradient(kk) {
        return this._removeGradientAndTexture(kk, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(kk, Fk, Ik) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = mk, this._colorProcessing.process = hk);
        const Tk = new Xk.b(kk, Fk, Ik);
        return this._colorGradients.push(Tk), this._colorGradients.sort(((kk, Fk) => kk.gradient < Fk.gradient ? -1 : kk.gradient > Fk.gradient ? 1 : 0)), this
      }
      removeColorGradient(kk) {
        if (!this._colorGradients) return this;
        let Fk = 0;
        for (const Ik of this._colorGradients) {
          if (Ik.gradient === kk) {
            this._colorGradients.splice(Fk, 1);
            break
          }
          Fk++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Ak, this._colorProcessing.process = rk), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const kk of this._drawWrappers)
            if (kk)
              for (const Fk of kk) Fk?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(kk, Fk, Ik, Xk, Tk) {
        return Tk[4 * (((kk = .5 * Math.abs(kk) + .5) * Ik % Ik | 0) + ((Fk = .5 * Math.abs(Fk) + .5) * Xk % Xk | 0) * Ik)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const kk = this._engine,
          Fk = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * Fk), this._vertexBuffer = new yk.e(kk, this._vertexData, !0, Fk);
        let Ik = 0;
        const Xk = this._vertexBuffer.createVertexBuffer(yk.l.PositionKind, Ik, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[yk.l.PositionKind] = Xk, Ik += 3;
        const Tk = this._vertexBuffer.createVertexBuffer(yk.l.ColorKind, Ik, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[yk.l.ColorKind] = Tk, Ik += 4;
        const ik = this._vertexBuffer.createVertexBuffer("angle", Ik, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = ik, Ik += 1;
        const lk = this._vertexBuffer.createVertexBuffer("size", Ik, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = lk, Ik += 2, this._isAnimationSheetEnabled) {
          const kk = this._vertexBuffer.createVertexBuffer("cellIndex", Ik, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = kk, Ik += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const kk = this._vertexBuffer.createVertexBuffer("direction", Ik, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = kk, Ik += 3
        }
        if (this._useRampGradients) {
          const kk = this._vertexBuffer.createVertexBuffer("remapData", Ik, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = kk, Ik += 4
        }
        let ak;
        if (this._useInstancing) {
          const Fk = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new yk.e(kk, Fk, !1, 2), ak = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else ak = this._vertexBuffer.createVertexBuffer("offset", Ik, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = ak, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const kk = [],
          Fk = [];
        let Ik = 0;
        for (let Xk = 0; Xk < this._capacity; Xk++) kk.push(Ik), kk.push(Ik + 1), kk.push(Ik + 2), kk.push(Ik), kk.push(Ik + 2), kk.push(Ik + 3), Fk.push(Ik, Ik + 1, Ik + 1, Ik + 2, Ik + 2, Ik + 3, Ik + 3, Ik, Ik, Ik + 3), Ik += 4;
        this._indexBuffer = this._engine.createIndexBuffer(kk), this._linesIndexBuffer = this._engine.createIndexBuffer(Fk)
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
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (kk) return this.startDelay = kk, void setTimeout((() => {
          this.start(0)
        }), kk);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const kk = this.noiseTexture;
          if (kk && kk.onGeneratedObservable) kk.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let Fk = 0; Fk < this.preWarmCycles; Fk++) this.animate(!0), kk.render()
            }))
          }));
          else
            for (let Fk = 0; Fk < this.preWarmCycles; Fk++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(kk))
      }
      _postStop(kk) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(kk, Fk, Ik, Xk) {
        let Tk = kk * this._vertexBufferSize;
        const yk = ik.l.Ge[0].kS(this._scene?.floatingOriginOffset || ik.t.ZeroReadOnly);
        if (this._vertexData[Tk++] = Fk.position.x + this.worldOffset.x - yk.x, this._vertexData[Tk++] = Fk.position.y + this.worldOffset.y - yk.y, this._vertexData[Tk++] = Fk.position.z + this.worldOffset.z - yk.z, this._vertexData[Tk++] = Fk.color.r, this._vertexData[Tk++] = Fk.color.g, this._vertexData[Tk++] = Fk.color.b, this._vertexData[Tk++] = Fk.color.a, this._vertexData[Tk++] = Fk.angle, this._vertexData[Tk++] = Fk.scale.x * Fk.size, this._vertexData[Tk++] = Fk.scale.y * Fk.size, this._isAnimationSheetEnabled && (this._vertexData[Tk++] = Fk.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Tk++] = Fk.direction.x, this._vertexData[Tk++] = Fk.direction.y, this._vertexData[Tk++] = Fk.direction.z);
        else if (Fk._properties.initialDirection) {
          let kk = Fk._properties.initialDirection;
          this.isLocal && (ik.t.TransformNormalToRef(kk, this._emitterWorldMatrix, ik.l.Ge[0]), kk = ik.l.Ge[0]), 0 === kk.x && 0 === kk.z && (kk.x = .001), this._vertexData[Tk++] = kk.x, this._vertexData[Tk++] = kk.y, this._vertexData[Tk++] = kk.z
        } else {
          let kk = Fk.direction;
          this.isLocal && (ik.t.TransformNormalToRef(kk, this._emitterWorldMatrix, ik.l.Ge[0]), kk = ik.l.Ge[0]), 0 === kk.x && 0 === kk.z && (kk.x = .001), this._vertexData[Tk++] = kk.x, this._vertexData[Tk++] = kk.y, this._vertexData[Tk++] = kk.z
        }
        this._useRampGradients && Fk.remapData && (this._vertexData[Tk++] = Fk.remapData.x, this._vertexData[Tk++] = Fk.remapData.y, this._vertexData[Tk++] = Fk.remapData.z, this._vertexData[Tk++] = Fk.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === Ik ? Ik = this._epsilon : 1 === Ik && (Ik = 1 - this._epsilon), 0 === Xk ? Xk = this._epsilon : 1 === Xk && (Xk = 1 - this._epsilon)), this._vertexData[Tk++] = Ik, this._vertexData[Tk] = Xk)
      }
      _prepareParticle(kk) {}
      _createNewOnes(kk) {
        let Fk;
        for (let Ik = 0; Ik < kk && this._particles.length !== this._capacity; Ik++) {
          Fk = this._createParticle(), this._particles.push(Fk);
          let kk = this._createQueueStart;
          for (; kk;) kk.process(Fk, this), kk = kk.nextItem;
          Fk._inheritParticleInfoToSubEmitters()
        }
      }
      _update(kk) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const kk = this.emitter;
          this._emitterWorldMatrix = kk.getWorldMatrix()
        } else {
          const kk = this.emitter;
          this._emitterWorldMatrix = ik.c.Translation(kk.x, kk.y, kk.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(kk)
      }
      static _GetAttributeNamesOrOptions() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = [yk.l.PositionKind, yk.l.ColorKind, "angle", "offset", "size"];
        return kk && Xk.push("cellIndex"), Fk || Xk.push("direction"), Ik && Xk.push("remapData"), Xk
      }
      static _GetEffectCreationOptions() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Bk.d)(Xk), kk && Xk.push("particlesInfos"), Fk && Xk.push("logarithmicDepthConstant"), Ik && (Xk.push("vFogInfos"), Xk.push("vFogColor")), Xk
      }
      fillDefines(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Bk.h)(this, this._scene, kk), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && kk.push("#define FOG")), this._isAnimationSheetEnabled && kk.push("#define ANIMATESHEET"), this.useLogarithmicDepth && kk.push("#define LOGARITHMICDEPTH"), Fk === sk.BLENDMODE_MULTIPLY && kk.push("#define BLENDMULTIPLYMODE"), this.isLocal && kk.push("#define LOCAL"), this._useRampGradients && kk.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (kk.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            kk.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            kk.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && kk.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            kk.push("#define BILLBOARDMODE_ALL")
        }
        Ik && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), kk.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(kk, Fk, Ik) {
        Fk.push(...pF._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), kk.push(...pF._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), Ik.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Yk.f)(kk, this._imageProcessingConfigurationDefines), (0, Yk.c)(Ik, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(kk) {
        var Fk;
        const Ik = this._getCustomDrawWrapper(kk);
        if (Ik?.effect) return Ik;
        const Xk = [];
        this.fillDefines(Xk, kk);
        const ik = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          yk = GF.e._PrepareStringDefines(ik, Xk),
          lk = yk ? GF.e.GetConfiguration(ik) : void 0;
        let ak = this._drawWrappers[ik];
        ak || (ak = this._drawWrappers[ik] = [], 0 === ik || this._renderPassObserver || (this._renderPassObserver = ((Fk = this._engine)._onReleaseRenderPassObservable ?? (Fk._onReleaseRenderPassObservable = new Tk.e)).add((kk => {
          const Fk = this._drawWrappers[kk];
          if (Fk) {
            for (const kk of Fk) kk?.dispose();
            delete this._drawWrappers[kk]
          }
        }))));
        let qk = ak[kk];
        qk || (qk = new fk.e(this._engine), qk.drawContext && (qk.drawContext.useInstancing = this._useInstancing), ak[kk] = qk);
        const Lk = Xk.join("\n");
        if (qk.defines !== Lk) {
          const kk = [],
            Fk = [],
            Ik = [];
          this.fillUniformsAttributesAndSamplerNames(Fk, kk, Ik), yk && (Fk.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== lk?.defines.PREPASS_LOCAL_POSITION_INDEX && Fk.push("inverseEmitterWM", "geometryWorldOffset")), qk.setEffect(this._engine.createEffect("particles", {
            attributes: kk,
            uniformsNames: Fk,
            samplers: Ik,
            defines: Lk,
            shaderLanguage: this._shaderLanguage,
            multiTarget: yk,
            indexParameters: yk ? {
              buffersCount: lk?._mrtCount ?? 0
            } : void 0
          }, this._engine), Lk)
        }
        return qk
      }
      _bindGeometryRendering(kk) {
        const Fk = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Ik = GF.e.GetConfiguration(Fk);
        if (!Ik?._defines) return;
        kk.setFloat("objectId", 0), kk.setInt("meshBlendTag", 0);
        const Xk = this._scene?.activeCamera;
        if (kk.setFloat2("cameraInfo", Xk?.minZ ?? 0, Xk?.maxZ ?? 1), this.isLocal && void 0 !== Ik.defines.PREPASS_LOCAL_POSITION_INDEX) {
          kk.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Fk = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || ik.t.ZeroReadOnly, ik.l.Ge[0]);
          kk.setVector3("geometryWorldOffset", Fk)
        }
      }
      animate() {
        let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!Fk && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (Fk ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) kk = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const Fk = this._calculateEmitRate();
            kk = Fk * this._scaledUpdateSpeed | 0, this._newPartsExcess += Fk * this._scaledUpdateSpeed - kk
          }
          if (this._newPartsExcess > 1 && (kk += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? kk = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(kk), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !Fk) {
            let kk = 0;
            for (let Fk = 0; Fk < this._particles.length; Fk++) {
              const Ik = this._particles[Fk];
              this._appendParticleVertices(kk, Ik), kk += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const kk = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  Fk = this._particles.length;
                Fk < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, Fk * kk, this._fixedCapacityHighWaterMark * kk), this._fixedCapacityHighWaterMark = Fk, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const kk = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * kk), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let kk = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const Fk = this._actualFrame / this.targetStopDuration;
          Xk.e.GetCurrentGradient(Fk, this._emitRateGradients, ((Fk, Ik, Xk) => {
            Fk !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = Ik.getFactor(), this._currentEmitRateGradient = Fk), kk = (0, jk.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Xk)
          }))
        }
        return kk
      }
      _appendParticleVertices(kk, Fk) {
        this._appendParticleVertex(kk++, Fk, 0, 0), this._useInstancing || (this._appendParticleVertex(kk++, Fk, 1, 0), this._appendParticleVertex(kk++, Fk, 1, 1), this._appendParticleVertex(kk, Fk, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !pF.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Ik.e(346).then((() => Ik(61307))), Ik.e(340).then((() => Ik(61314)))])) : await Promise.all([Ik.e(329).then((() => Ik(61323))), Promise.all([Ik.e(322), Ik.e(356)]).then((() => Ik(61329)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== sk.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(sk.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(sk.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(kk) {
        const Fk = this._getWrapper(kk),
          Ik = Fk.effect,
          Xk = this._engine;
        Xk.enableEffect(Fk);
        const Tk = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        Ik.setTexture("diffuseSampler", this.particleTexture), Ik.setMatrix("view", Tk);
        const yk = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (Ik.setMatrix("projection", yk), this._isAnimationSheetEnabled && this.particleTexture) {
          const kk = this.particleTexture.getBaseSize();
          Ik.setFloat3("particlesInfos", this.spriteCellWidth / kk.width, this.spriteCellHeight / kk.height, this.spriteCellWidth / kk.width)
        }
        if (Ik.setVector2("translationPivot", this.translationPivot), Ik.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const kk = this._scene.activeCamera;
          Ik.setVector3("eyePosition", kk.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), Ik.setTexture("rampSampler", this._rampGradientsTexture));
        const lk = Ik.defines;
        this._scene && ((0, Bk.e)(Ik, this, this._scene), this.applyFog && (0, dk.f)(this._scene, void 0, Ik)), lk.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Tk.invertToRef(ik.l.Matrix[0]), Ik.setMatrix("invView", ik.l.Matrix[0])), Ik._multiTarget && this._bindGeometryRendering(Ik), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Xk.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, Ik) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, Ik)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Xk.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, Ik) : Xk.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, Ik), this.useLogarithmicDepth && this._scene && (0, dk.p)(lk, Ik, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(Ik), this._setEngineBasedOnBlendMode(kk), Ik._multiTarget && GF.e._BindZeroAlphaDiscard(Xk, Ik);
        let ak = !1;
        try {
          GF.e._BindAttachmentsForEffect(Xk, Ik) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(Ik), this._useInstancing ? this._scene?.forceWireframe ? Xk.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Xk.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Xk.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Xk.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), ak = !0)
        } finally {
          GF.e._RestoreAttachments(Xk)
        }
        return ak ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const kk = this._engine;
        let Fk;
        return kk.setState && (kk.setState(!1), this.forceDepthWrite && kk.setDepthWrite(!0)), Fk = this.blendMode === sk.BLENDMODE_MULTIPLYADD ? this._render(sk.BLENDMODE_MULTIPLY) + this._render(sk.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Fk
      }
      _onDispose() {}
      dispose() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), kk && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), kk && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Fk, Ik), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const kk = this._scene.jK.indexOf(this);
          kk > -1 && this._scene.jK.splice(kk, 1), this._scene._activeParticleSystems.dispose()
        }
        this.hG.notifyObservers(this), this.hG.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    pF.ForceGLSL = !1;
    var uF, bF = Ik(37201);
    ! function(kk) {
      kk[kk.ATTACHED = 0] = "ATTACHED", kk[kk.END = 1] = "END"
    }(uF || (uF = {}));
    class RF {
      constructor(kk) {
        if (this.particleSystem = kk, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !kk.emitter || !kk.emitter.dispose) {
          const Fk = (0, bF.b)("BABYLON.AbstractMesh");
          kk.emitter = new Fk("SubemitterSystemEmitter", kk.mG()), kk._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let kk = this.particleSystem.emitter;
        if (kk) {
          if (kk instanceof ik.t) kk = kk.clone();
          else if (-1 !== kk.getClassName().indexOf("Mesh")) {
            kk = new((0, bF.b)("BABYLON.Mesh"))("", kk.mG()), kk.isVisible = !1
          }
        } else kk = new ik.t;
        const Fk = new RF(this.particleSystem.clone(this.particleSystem.name, kk));
        return Fk.particleSystem.name += "Clone", Fk.type = this.type, Fk.inheritDirection = this.inheritDirection, Fk.inheritedVelocityAmount = this.inheritedVelocityAmount, Fk.particleSystem._disposeEmitterOnDispose = !0, Fk.particleSystem.disposeOnStop = !0, Fk
      }
      serialize() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = {};
        return Fk.type = this.type, Fk.inheritDirection = this.inheritDirection, Fk.inheritedVelocityAmount = this.inheritedVelocityAmount, Fk.particleSystem = this.particleSystem.serialize(kk), Fk
      }
      static _ParseParticleSystem(kk, Fk, Ik) {
        throw (0, Uk.j)("ParseParticle")
      }
      static Parse(kk, Fk, Ik) {
        const Xk = kk.particleSystem,
          Tk = new RF(RF._ParseParticleSystem(Xk, Fk, Ik, !0));
        return Tk.type = kk.type, Tk.inheritDirection = kk.inheritDirection, Tk.inheritedVelocityAmount = kk.inheritedVelocityAmount, Tk.particleSystem._isSubEmitter = !0, Tk
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var UF = Ik(39885),
      CF = Ik(40021);
    const NF = () => {};
    class cF {
      constructor() {
        this.particlePositionGenerator = NF, this.particleDestinationGenerator = NF, this.particleDirectionGenerator = NF
      }
      startDirectionFunction(kk, Fk, Ik, Xk) {
        const Tk = ik.l.Ge[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== NF) this.particleDirectionGenerator(-1, Ik, Tk);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== NF) {
          this.particleDestinationGenerator(-1, Ik, Tk);
          const kk = ik.l.Ge[1];
          Tk.subtractToRef(Ik.position, kk), kk.scaleToRef(1 / Ik.lifeTime, Tk)
        } else Tk.set(0, 0, 0);
        Xk ? Fk.kS(Tk) : ik.t.TransformNormalToRef(Tk, kk, Fk)
      }
      startPositionFunction(kk, Fk, Ik, Xk) {
        const Tk = ik.l.Ge[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== NF ? this.particlePositionGenerator(-1, Ik, Tk) : Tk.set(0, 0, 0), Xk ? Fk.kS(Tk) : ik.t.TransformCoordinatesToRef(Tk, kk, Fk)
      }
      clone() {
        const kk = new cF;
        return Zk.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {}
      buildUniformLayout(kk) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.particlePositionGenerator = this.particlePositionGenerator, kk.particleDestinationGenerator = this.particleDestinationGenerator, kk
      }
      parse(kk) {
        kk.particlePositionGenerator && (this.particlePositionGenerator = kk.particlePositionGenerator), kk.particleDestinationGenerator && (this.particleDestinationGenerator = kk.particleDestinationGenerator)
      }
    }
    const WF = ik.t.Zero(),
      fF = ik.t.Zero(),
      BF = ik.t.Zero();
    class dF {
      constructor() {
        this.strength = 0, this.position = ik.t.Zero()
      }
      _processParticle(kk, Fk) {
        this.position.subtractToRef(kk.position, WF);
        const Ik = WF.lengthSquared() + 1;
        WF.normalize().scaleToRef(this.strength / Ik, fF), fF.scaleToRef(Fk._tempScaledUpdateSpeed, BF), kk.direction.addInPlace(BF)
      }
      serialize() {
        return {
          position: this.position.iXk(),
          strength: this.strength
        }
      }
    }
    const YF = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class AF extends pF {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = kk => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Fk = Math.floor(Math.random() * this._subEmitters.length);
          for (const Ik of this._subEmitters[Fk])
            if (1 === Ik.type) {
              const Fk = Ik.clone();
              kk._inheritParticleInfoToSubEmitter(Fk), Fk.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(Fk.particleSystem), Fk.particleSystem.start()
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
      set flowMap(kk) {
        this._flowMap !== kk && (this._flowMap = kk, this._flowMapUpdate && (nF(this._flowMapUpdate), this._flowMapUpdate = null), kk && (this._flowMapUpdate = {
          process: kk => {
            const Fk = this.mG()?.getTransformMatrix();
            this._flowMap._processParticle(kk, this.flowMapStrength * this._tempScaledUpdateSpeed, Fk)
          },
          previousItem: null,
          nextItem: null
        }, OF(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(kk) {
        super.addAttractor(kk), 1 === this._attractors.length && (this._attractorUpdate = {
          process: kk => {
            for (const Fk of this._attractors) Fk._processParticle(kk, this)
          },
          previousItem: null,
          nextItem: null
        }, OF(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(kk) {
        super.removeAttractor(kk), 0 === this._attractors.length && this._attractorUpdate && nF(this._attractorUpdate)
      }
      start() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(kk)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const kk of this.subEmitters) kk instanceof AF ? this._subEmitters.push([new RF(kk)]) : kk instanceof RF ? this._subEmitters.push([kk]) : kk instanceof Array && this._subEmitters.push(kk)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const kk of this.activeSubSystems) kk.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const kk = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== kk && this._rootParticleSystem.activeSubSystems.splice(kk, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(kk) {
        kk && this._stopSubEmitters()
      }
      _prepareParticle(kk) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const Fk = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          kk._properties.attachedSubEmitters = [];
          for (const Ik of Fk)
            if (0 === Ik.type) {
              const Fk = Ik.clone();
              kk._properties.attachedSubEmitters.push(Fk), Fk.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), kk && this.particles)
          for (const Ik of this.particles)
            if (Ik._properties.attachedSubEmitters)
              for (let kk = Ik._properties.attachedSubEmitters.length - 1; kk >= 0; kk -= 1) Ik._properties.attachedSubEmitters[kk].dispose();
        if (Fk && this.activeSubSystems)
          for (let Ik = this.activeSubSystems.length - 1; Ik >= 0; Ik -= 1) this.activeSubSystems[Ik].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let kk = 0; kk < this._subEmitters.length; kk++)
            for (const Fk of this._subEmitters[kk]) Fk.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(kk, Fk, Ik, Xk) {
        let Tk;
        Tk = Ik instanceof UF.c ? null : Ik;
        const yk = (0, bF.b)("BABYLON.Texture");
        if (yk && Tk)
          if (kk.texture) Fk.particleTexture = yk.Parse(kk.texture, Tk, Xk);
          else if (kk.textureName) {
          const Ik = kk.textureSettings;
          if (Fk.particleTexture = new yk(Xk + kk.textureName, Tk, !1, void 0 === kk.invertY || kk.invertY, Ik ? Ik.samplingMode : void 0), Fk.particleTexture.name = kk.textureName, Ik) {
            const kk = Fk.particleTexture;
            for (const Fk of YF) void 0 !== Ik[Fk] && (kk[Fk] = Ik[Fk])
          }
        }
        if (kk.emitterId || 0 === kk.emitterId || void 0 !== kk.emitter ? (kk.emitterId || 0 === kk.emitterId) && Tk ? (Fk.emitter = Tk.getLastMeshById(kk.emitterId), Fk.emitter || (Fk.emitter = ik.t.Zero())) : Fk.emitter = ik.t.FromArray(kk.emitter) : Fk.emitter = ik.t.Zero(), Fk.isLocal = !!kk.isLocal, void 0 !== kk.renderingGroupId && (Fk.renderingGroupId = kk.renderingGroupId), void 0 !== kk.isBillboardBased && (Fk.isBillboardBased = kk.isBillboardBased), void 0 !== kk.billboardMode && (Fk.billboardMode = kk.billboardMode), void 0 !== kk.useLogarithmicDepth && (Fk.useLogarithmicDepth = kk.useLogarithmicDepth), kk.animations) {
          for (let Ik = 0; Ik < kk.animations.length; Ik++) {
            const Xk = kk.animations[Ik],
              Tk = (0, bF.b)("BABYLON.Animation");
            Tk && Fk.animations.push(Tk.Parse(Xk))
          }
          Fk.beginAnimationOnStart = kk.beginAnimationOnStart, Fk.beginAnimationFrom = kk.beginAnimationFrom, Fk.beginAnimationTo = kk.beginAnimationTo, Fk.beginAnimationLoop = kk.beginAnimationLoop
        }
        if (kk.autoAnimate && Tk && Tk.beginAnimation(Fk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), Fk.startDelay = 0 | kk.startDelay, Fk.minAngularSpeed = kk.minAngularSpeed, Fk.maxAngularSpeed = kk.maxAngularSpeed, Fk.minSize = kk.minSize, Fk.maxSize = kk.maxSize, kk.minScaleX && (Fk.minScaleX = kk.minScaleX, Fk.maxScaleX = kk.maxScaleX, Fk.minScaleY = kk.minScaleY, Fk.maxScaleY = kk.maxScaleY), void 0 !== kk.preWarmCycles && (Fk.preWarmCycles = kk.preWarmCycles, Fk.preWarmStepOffset = kk.preWarmStepOffset), void 0 !== kk.minInitialRotation && (Fk.minInitialRotation = kk.minInitialRotation, Fk.maxInitialRotation = kk.maxInitialRotation), Fk.minLifeTime = kk.minLifeTime, Fk.maxLifeTime = kk.maxLifeTime, Fk.minEmitPower = kk.minEmitPower, Fk.maxEmitPower = kk.maxEmitPower, Fk.emitRate = kk.emitRate, Fk.gravity = ik.t.FromArray(kk.gravity), kk.noiseStrength && (Fk.noiseStrength = ik.t.FromArray(kk.noiseStrength)), Fk.color1 = Lk.h.FromArray(kk.color1), Fk.color2 = Lk.h.FromArray(kk.color2), Fk.colorDead = Lk.h.FromArray(kk.colorDead), Fk.updateSpeed = kk.updateSpeed, Fk.targetStopDuration = kk.targetStopDuration, Fk.blendMode = kk.blendMode, kk.colorGradients)
          for (const ik of kk.colorGradients) Fk.addColorGradient(ik.gradient, Lk.h.FromArray(ik.color1), ik.color2 ? Lk.h.FromArray(ik.color2) : void 0);
        if (kk.rampGradients) {
          for (const Ik of kk.rampGradients) Fk.addRampGradient(Ik.gradient, Lk.e.FromArray(Ik.color));
          Fk.useRampGradients = kk.useRampGradients
        }
        if (kk.colorRemapGradients)
          for (const ik of kk.colorRemapGradients) Fk.addColorRemapGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
        if (kk.alphaRemapGradients)
          for (const ik of kk.alphaRemapGradients) Fk.addAlphaRemapGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
        if (kk.sizeGradients)
          for (const ik of kk.sizeGradients) Fk.addSizeGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
        if (kk.angularSpeedGradients)
          for (const ik of kk.angularSpeedGradients) Fk.addAngularSpeedGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
        if (kk.velocityGradients)
          for (const ik of kk.velocityGradients) Fk.addVelocityGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
        if (kk.dragGradients)
          for (const ik of kk.dragGradients) Fk.addDragGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
        if (kk.emitRateGradients)
          for (const ik of kk.emitRateGradients) Fk.addEmitRateGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
        if (kk.startSizeGradients)
          for (const ik of kk.startSizeGradients) Fk.addStartSizeGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
        if (kk.lifeTimeGradients)
          for (const ik of kk.lifeTimeGradients) Fk.addLifeTimeGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
        if (kk.limitVelocityGradients) {
          for (const Ik of kk.limitVelocityGradients) Fk.addLimitVelocityGradient(Ik.gradient, void 0 !== Ik.factor1 ? Ik.factor1 : Ik.factor, Ik.factor2);
          Fk.limitVelocityDamping = kk.limitVelocityDamping
        }
        if (kk.noiseTexture && Tk) {
          const Ik = (0, bF.b)("BABYLON.ProceduralTexture");
          Fk.noiseTexture = Ik.Parse(kk.noiseTexture, Tk, Xk)
        }
        let lk;
        if (kk.particleEmitterType) {
          switch (kk.particleEmitterType.type) {
            case "SphereParticleEmitter":
              lk = new Hk;
              break;
            case "SphereDirectedParticleEmitter":
              lk = new Jk;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              lk = new Pk;
              break;
            case "ConeDirectedParticleEmitter":
              lk = new Kk;
              break;
            case "CylinderParticleEmitter":
              lk = new xk.e;
              break;
            case "CylinderDirectedParticleEmitter":
              lk = new xk.b;
              break;
            case "HemisphericParticleEmitter":
              lk = new wk;
              break;
            case "PointParticleEmitter":
              lk = new ek;
              break;
            case "MeshParticleEmitter":
              lk = new Qk;
              break;
            case "CustomParticleEmitter":
              lk = new cF;
              break;
            default:
              lk = new tk.c
          }
          lk.parse(kk.particleEmitterType, Tk)
        } else lk = new tk.c, lk.parse(kk, Tk);
        Fk.particleEmitterType = lk, Fk.startSpriteCellID = kk.startSpriteCellID, Fk.endSpriteCellID = kk.endSpriteCellID, Fk.spriteCellLoop = kk.spriteCellLoop ?? !0, Fk.spriteCellWidth = kk.spriteCellWidth, Fk.spriteCellHeight = kk.spriteCellHeight, Fk.spriteCellChangeSpeed = kk.spriteCellChangeSpeed, Fk.spriteRandomStartCell = kk.spriteRandomStartCell, Fk.disposeOnStop = kk.disposeOnStop ?? !1, Fk.manualEmitCount = kk.manualEmitCount ?? -1
      }
      static Parse(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Tk = arguments.length > 4 ? arguments[4] : void 0;
        const yk = kk.name;
        let lk, ak, qk = null,
          tk = null;
        if (Fk instanceof UF.c ? lk = Fk : (ak = Fk, lk = ak.Oe()), kk.customShader && (0, Uk.e)(lk.createEffectForParticles)) {
          tk = kk.customShader;
          const Fk = tk.shaderOptions.defines.length > 0 ? tk.shaderOptions.defines.join("\n") : "";
          qk = lk.createEffectForParticles(tk.shaderPath.fragmentElement, tk.shaderOptions.uniforms, tk.shaderOptions.samplers, Fk)
        }
        const Zk = new AF(yk, Tk || kk.St, Fk, qk, kk.isAnimationSheetEnabled);
        if (Zk.customShader = tk, Zk._rootUrl = Ik, kk.id && (Zk.id = kk.id), kk.subEmitters) {
          Zk.subEmitters = [];
          for (const Xk of kk.subEmitters) {
            const kk = [];
            for (const Tk of Xk) kk.push(RF.Parse(Tk, Fk, Ik));
            Zk.subEmitters.push(kk)
          }
        }
        if (kk.attractors)
          for (const Lk of kk.attractors) {
            const kk = new dF;
            kk.position = ik.t.FromArray(Lk.position), kk.strength = Lk.strength, Zk.addAttractor(kk)
          }
        return AF._Parse(kk, Zk, Fk, Ik), kk.textureMask && (Zk.textureMask = Lk.h.FromArray(kk.textureMask)), kk.worldOffset && (Zk.worldOffset = ik.t.FromArray(kk.worldOffset)), kk.preventAutoStart && (Zk.preventAutoStart = kk.preventAutoStart), kk.metadata && (Zk.metadata = kk.metadata), Xk || Zk.preventAutoStart || Zk.start(), Zk
      }
      serialize() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = {};
        if (AF._Serialize(Fk, this, kk), Fk.textureMask = this.textureMask.iXk(), Fk.customShader = this.customShader, Fk.preventAutoStart = this.preventAutoStart, Fk.worldOffset = this.worldOffset.iXk(), this.metadata && (Fk.metadata = this.metadata), this.subEmitters) {
          Fk.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const Ik of this._subEmitters) {
            const Xk = [];
            for (const Fk of Ik) Fk.particleSystem.doNotSerialize || Xk.push(Fk.serialize(kk));
            Fk.subEmitters.push(Xk)
          }
        }
        if (this._attractors && this._attractors.length) {
          Fk.attractors = [];
          for (const kk of this._attractors) Fk.attractors.push(kk.serialize())
        }
        return Fk
      }
      static _Serialize(kk, Fk, Ik) {
        if (kk.name = Fk.name, kk.id = Fk.id, kk.St = Fk.getCapacity(), kk.disposeOnStop = Fk.disposeOnStop, kk.manualEmitCount = Fk.manualEmitCount, Fk.emitter.position) {
          const Ik = Fk.emitter;
          kk.emitterId = Ik.id
        } else {
          const Ik = Fk.emitter;
          kk.emitter = Ik.iXk()
        }
        if (Fk.particleEmitterType && (kk.particleEmitterType = Fk.particleEmitterType.serialize()), Fk.particleTexture)
          if (Ik) kk.texture = Fk.particleTexture.serialize();
          else {
            const Ik = Fk.particleTexture;
            kk.textureName = Fk.particleTexture.name, kk.invertY = !!Ik._invertY;
            const Xk = {};
            for (const kk of YF) Xk[kk] = Ik[kk];
            Xk.samplingMode = Ik.samplingMode, kk.textureSettings = Xk
          } kk.isLocal = Fk.isLocal, CF.b.AppendSerializedAnimations(Fk, kk), kk.beginAnimationOnStart = Fk.beginAnimationOnStart, kk.beginAnimationFrom = Fk.beginAnimationFrom, kk.beginAnimationTo = Fk.beginAnimationTo, kk.beginAnimationLoop = Fk.beginAnimationLoop, kk.startDelay = Fk.startDelay, kk.renderingGroupId = Fk.renderingGroupId, kk.isBillboardBased = Fk.isBillboardBased, kk.billboardMode = Fk.billboardMode, kk.minAngularSpeed = Fk.minAngularSpeed, kk.maxAngularSpeed = Fk.maxAngularSpeed, kk.minSize = Fk.minSize, kk.maxSize = Fk.maxSize, kk.minScaleX = Fk.minScaleX, kk.maxScaleX = Fk.maxScaleX, kk.minScaleY = Fk.minScaleY, kk.maxScaleY = Fk.maxScaleY, kk.minEmitPower = Fk.minEmitPower, kk.maxEmitPower = Fk.maxEmitPower, kk.minLifeTime = Fk.minLifeTime, kk.maxLifeTime = Fk.maxLifeTime, kk.emitRate = Fk.emitRate, kk.gravity = Fk.gravity.iXk(), kk.noiseStrength = Fk.noiseStrength.iXk(), kk.color1 = Fk.color1.iXk(), kk.color2 = Fk.color2.iXk(), kk.colorDead = Fk.colorDead.iXk(), kk.updateSpeed = Fk.updateSpeed, kk.targetStopDuration = Fk.targetStopDuration, kk.blendMode = Fk.blendMode, kk.preWarmCycles = Fk.preWarmCycles, kk.preWarmStepOffset = Fk.preWarmStepOffset, kk.minInitialRotation = Fk.minInitialRotation, kk.maxInitialRotation = Fk.maxInitialRotation, kk.startSpriteCellID = Fk.startSpriteCellID, kk.spriteCellLoop = Fk.spriteCellLoop, kk.endSpriteCellID = Fk.endSpriteCellID, kk.spriteCellChangeSpeed = Fk.spriteCellChangeSpeed, kk.spriteCellWidth = Fk.spriteCellWidth, kk.spriteCellHeight = Fk.spriteCellHeight, kk.spriteRandomStartCell = Fk.spriteRandomStartCell, kk.isAnimationSheetEnabled = Fk.isAnimationSheetEnabled, kk.useLogarithmicDepth = Fk.useLogarithmicDepth;
        const Xk = Fk.getColorGradients();
        if (Xk) {
          kk.colorGradients = [];
          for (const Fk of Xk) {
            const Ik = {
              gradient: Fk.gradient,
              color1: Fk.color1.iXk()
            };
            Fk.color2 ? Ik.color2 = Fk.color2.iXk() : Ik.color2 = Fk.color1.iXk(), kk.colorGradients.push(Ik)
          }
        }
        const Tk = Fk.getRampGradients();
        if (Tk) {
          kk.rampGradients = [];
          for (const Fk of Tk) {
            const Ik = {
              gradient: Fk.gradient,
              color: Fk.color.iXk()
            };
            kk.rampGradients.push(Ik)
          }
          kk.useRampGradients = Fk.useRampGradients
        }
        const ik = Fk.getColorRemapGradients();
        if (ik) {
          kk.colorRemapGradients = [];
          for (const Fk of ik) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.colorRemapGradients.push(Ik)
          }
        }
        const yk = Fk.getAlphaRemapGradients();
        if (yk) {
          kk.alphaRemapGradients = [];
          for (const Fk of yk) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.alphaRemapGradients.push(Ik)
          }
        }
        const lk = Fk.getSizeGradients();
        if (lk) {
          kk.sizeGradients = [];
          for (const Fk of lk) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.sizeGradients.push(Ik)
          }
        }
        const ak = Fk.getAngularSpeedGradients();
        if (ak) {
          kk.angularSpeedGradients = [];
          for (const Fk of ak) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.angularSpeedGradients.push(Ik)
          }
        }
        const qk = Fk.getVelocityGradients();
        if (qk) {
          kk.velocityGradients = [];
          for (const Fk of qk) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.velocityGradients.push(Ik)
          }
        }
        const Lk = Fk.getDragGradients();
        if (Lk) {
          kk.dragGradients = [];
          for (const Fk of Lk) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.dragGradients.push(Ik)
          }
        }
        const tk = Fk.getEmitRateGradients();
        if (tk) {
          kk.emitRateGradients = [];
          for (const Fk of tk) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.emitRateGradients.push(Ik)
          }
        }
        const Zk = Fk.getStartSizeGradients();
        if (Zk) {
          kk.startSizeGradients = [];
          for (const Fk of Zk) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.startSizeGradients.push(Ik)
          }
        }
        const jk = Fk.getLifeTimeGradients();
        if (jk) {
          kk.lifeTimeGradients = [];
          for (const Fk of jk) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.lifeTimeGradients.push(Ik)
          }
        }
        const ek = Fk.getLimitVelocityGradients();
        if (ek) {
          kk.limitVelocityGradients = [];
          for (const Fk of ek) {
            const Ik = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Ik.factor2 = Fk.factor2 : Ik.factor2 = Fk.factor1, kk.limitVelocityGradients.push(Ik)
          }
          kk.limitVelocityDamping = Fk.limitVelocityDamping
        }
        Fk.noiseTexture && (kk.noiseTexture = Fk.noiseTexture.serialize())
      }
      clone(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = {
          ...this._customWrappers
        };
        let Tk = null;
        const ik = this._engine;
        if ((0, Uk.e)(ik.createEffectForParticles) && null != this.customShader) {
          Tk = this.customShader;
          const kk = Tk.shaderOptions.defines.length > 0 ? Tk.shaderOptions.defines.join("\n") : "",
            Fk = ik.createEffectForParticles(Tk.shaderPath.fragmentElement, Tk.shaderOptions.uniforms, Tk.shaderOptions.samplers, kk);
          Xk[0] ? Xk[0].effect = Fk : this.setCustomEffect(Fk, 0)
        }
        const yk = this.serialize(Ik),
          lk = !1 === Ik && this.particleTexture ? this.particleTexture.clone() : null;
        lk && (yk.textureName = void 0);
        const ak = AF.Parse(yk, this._scene || this._engine, this._rootUrl);
        return ak.name = kk, ak.customShader = Tk, ak._customWrappers = Xk, lk && (ak.particleTexture = lk), void 0 === Fk && (Fk = this.emitter), this.noiseTexture && (ak.noiseTexture = this.noiseTexture.clone()), ak.emitter = Fk, this.preventAutoStart || ak.start(), ak
      }
    }
    AF.BILLBOARDMODE_Y = 2, AF.BILLBOARDMODE_ALL = 7, AF.BILLBOARDMODE_STRETCHED = 8, AF.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let gF = !1;
    gF || (gF = !0, RF._ParseParticleSystem = AF.Parse)
  },
  41635: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      SkyMaterial: () => Pk,
      _MaxColorValueForRenderTarget: () => xk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(40021),
      yk = Ik(37144),
      lk = Ik(40291),
      ak = Ik(40345),
      qk = Ik(41601),
      Lk = Ik(41158),
      tk = Ik(40082),
      Zk = Ik(37201),
      jk = Ik(40377),
      ek = Ik(40349),
      wk = Ik(40333),
      Hk = Ik(40329);
    class Jk extends lk.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function xk(kk) {
      switch (kk) {
        case qk.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case qk.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Pk = (() => {
      var kk;
      let Fk, lk, qk, Zk, Pk, Kk, Qk, sk, Vk, zk, Sk, vk, Ek, Ok, nk, Gk = ak.e,
        pk = [],
        uk = [],
        bk = [],
        Rk = [],
        Uk = [],
        Ck = [],
        Nk = [],
        ck = [],
        Wk = [],
        fk = [],
        Bk = [],
        dk = [],
        Yk = [],
        Ak = [],
        gk = [],
        mk = [],
        hk = [],
        rk = [],
        Dk = [],
        Mk = [],
        kF = [],
        FF = [],
        IF = [],
        XF = [],
        TF = [],
        iF = [],
        yF = [],
        lF = [],
        aF = [],
        qF = [];
      return kk = class extends Gk {
        constructor(kk, Fk) {
          super(kk, Fk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Xk.n)(this, pk, 1), this.turbidity = ((0, Xk.n)(this, uk), (0, Xk.n)(this, bk, 10)), this.rayleigh = ((0, Xk.n)(this, Rk), (0, Xk.n)(this, Uk, 2)), this.mieCoefficient = ((0, Xk.n)(this, Ck), (0, Xk.n)(this, Nk, .005)), this.mieDirectionalG = ((0, Xk.n)(this, ck), (0, Xk.n)(this, Wk, .8)), this.distance = ((0, Xk.n)(this, fk), (0, Xk.n)(this, Bk, 500)), this.inclination = ((0, Xk.n)(this, dk), (0, Xk.n)(this, Yk, .49)), this.azimuth = ((0, Xk.n)(this, Ak), (0, Xk.n)(this, gk, .25)), this.sunPosition = ((0, Xk.n)(this, mk), (0, Xk.n)(this, hk, new yk.Ge(0, 100, 0))), this.useSunPosition = ((0, Xk.n)(this, rk), (0, Xk.n)(this, Dk, !1)), this.cameraOffset = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, yk.Ge.Zero())), this.up = ((0, Xk.n)(this, FF), (0, Xk.n)(this, IF, yk.Ge.Up())), this.dithering = ((0, Xk.n)(this, XF), (0, Xk.n)(this, TF, !1)), this.rawHdrOutput = ((0, Xk.n)(this, iF), (0, Xk.n)(this, yF, !1)), this.cloudiness = ((0, Xk.n)(this, lF), (0, Xk.n)(this, aF, 0)), this._cameraPosition = ((0, Xk.n)(this, qF), yk.Ge.Zero()), this._skyOrientation = new yk.Quaternion
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
        isReadyForSubMesh(Fk, Ik) {
          const Xk = Ik._drawWrapper;
          if (this.isFrozen && Xk.effect && Xk._wasPreviouslyReady) return !0;
          Ik.materialDefines || (Ik.materialDefines = new Jk);
          const Tk = Ik.materialDefines,
            ik = this.mG();
          if (this._isReadyForSubMesh(Ik)) return !0;
          if ((0, Hk.R)(Fk, ik, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Tk, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, Hk.E)(Fk, Tk, !0, !1), Tk.IMAGEPROCESSINGPOSTPROCESS !== ik.imageProcessingConfiguration.applyByPostProcess && Tk.markAsMiscDirty(), Tk.DITHER !== this.dithering && Tk.markAsMiscDirty(), Tk.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Tk.markAsMiscDirty(), Tk.isDirty) {
            Tk.markAsProcessed(), ik.resetCachedMaterial();
            const Fk = new ek.c;
            Tk.FOG && Fk.addFallback(1, "FOG"), Tk.IMAGEPROCESSINGPOSTPROCESS = ik.imageProcessingConfiguration.applyByPostProcess, Tk.DITHER = this.dithering, Tk.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Xk = [Lk.g.PositionKind];
            Tk.VERTEXCOLOR && Xk.push(Lk.g.ColorKind);
            const yk = "sky",
              lk = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, wk.d)(lk);
            const ak = Tk.toString();
            Ik.setEffect(ik.Oe().createEffect(yk, {
              attributes: Xk,
              uniformsNames: lk,
              uniformBuffersNames: [],
              samplers: [],
              defines: ak,
              fallbacks: Fk,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, ik.Oe()), Tk, this._materialContext)
          }
          return !(!Ik.effect || !Ik.effect.isReady()) && (Tk._renderId = ik.getRenderId(), Xk._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(kk, Fk, Ik) {
          const Xk = this.mG(),
            Tk = Ik.materialDefines;
          if (!Tk) return;
          const ik = Ik.effect;
          if (!ik) return;
          this._activeEffect = ik, this.bindOnlyWorldMatrix(kk), this._activeEffect.setMatrix("viewProjection", Xk.getTransformMatrix()), this._mustRebind(Xk, ik, Ik) && ((0, wk.e)(ik, this, Xk), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, Hk.p)(Tk, ik, Xk)), Xk.fogEnabled && Fk.applyFog && Xk.fogMode !== tk.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", Xk.getViewMatrix()), (0, Hk.f)(Xk, Fk, this._activeEffect, this.rawHdrOutput);
          const lk = Xk.activeCamera;
          if (lk) {
            const kk = lk.getWorldMatrix();
            this._cameraPosition.x = kk.m[12], this._cameraPosition.y = kk.m[13], this._cameraPosition.z = kk.m[14], this._activeEffect.setVector3("cameraPosition", yk.TmpVectors.Ge[0].kS(this._cameraPosition).zXk(Xk.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const kk = Xk.Oe()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", xk(kk?.texture?.type))
          }
          if (!this.useSunPosition) {
            const kk = Math.PI * (this.inclination - .5),
              Fk = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Fk) * Math.cos(kk), this.sunPosition.y = this.distance * Math.sin(-kk), this.sunPosition.z = this.distance * Math.sin(Fk) * Math.cos(kk), yk.Quaternion.FromUnitVectorsToRef(yk.Ge.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Fk, this._activeEffect, Ik)
        }
        getAnimatables() {
          return []
        }
        dispose(kk) {
          super.dispose(kk)
        }
        clone(Fk) {
          return ik.b.Clone((() => new kk(Fk, this.mG())), this)
        }
        serialize() {
          const kk = super.serialize();
          return kk.customType = "BABYLON.SkyMaterial", kk
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Fk, Ik, Xk) {
          return ik.b.Parse((() => new kk(Fk.name, Ik)), Fk, Ik, Xk)
        }
      }, (() => {
        const Ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, Tk.J)()], lk = [(0, Tk.J)()], qk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], Pk = [(0, Tk.J)()], Kk = [(0, Tk.J)()], Qk = [(0, Tk.J)()], sk = [(0, Tk.J)()], Vk = [(0, Tk.H)()], zk = [(0, Tk.J)()], Sk = [(0, Tk.H)()], vk = [(0, Tk.H)()], Ek = [(0, Tk.J)()], Ok = [(0, Tk.J)()], nk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: kk => "luminance" in kk,
            get: kk => kk.luminance,
            set: (kk, Fk) => {
              kk.luminance = Fk
            }
          },
          metadata: Ik
        }, pk, uk), (0, Xk.j)(null, null, lk, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: kk => "turbidity" in kk,
            get: kk => kk.turbidity,
            set: (kk, Fk) => {
              kk.turbidity = Fk
            }
          },
          metadata: Ik
        }, bk, Rk), (0, Xk.j)(null, null, qk, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: kk => "rayleigh" in kk,
            get: kk => kk.rayleigh,
            set: (kk, Fk) => {
              kk.rayleigh = Fk
            }
          },
          metadata: Ik
        }, Uk, Ck), (0, Xk.j)(null, null, Zk, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: kk => "mieCoefficient" in kk,
            get: kk => kk.mieCoefficient,
            set: (kk, Fk) => {
              kk.mieCoefficient = Fk
            }
          },
          metadata: Ik
        }, Nk, ck), (0, Xk.j)(null, null, Pk, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: kk => "mieDirectionalG" in kk,
            get: kk => kk.mieDirectionalG,
            set: (kk, Fk) => {
              kk.mieDirectionalG = Fk
            }
          },
          metadata: Ik
        }, Wk, fk), (0, Xk.j)(null, null, Kk, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: kk => "distance" in kk,
            get: kk => kk.distance,
            set: (kk, Fk) => {
              kk.distance = Fk
            }
          },
          metadata: Ik
        }, Bk, dk), (0, Xk.j)(null, null, Qk, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: kk => "inclination" in kk,
            get: kk => kk.inclination,
            set: (kk, Fk) => {
              kk.inclination = Fk
            }
          },
          metadata: Ik
        }, Yk, Ak), (0, Xk.j)(null, null, sk, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: kk => "azimuth" in kk,
            get: kk => kk.azimuth,
            set: (kk, Fk) => {
              kk.azimuth = Fk
            }
          },
          metadata: Ik
        }, gk, mk), (0, Xk.j)(null, null, Vk, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: kk => "sunPosition" in kk,
            get: kk => kk.sunPosition,
            set: (kk, Fk) => {
              kk.sunPosition = Fk
            }
          },
          metadata: Ik
        }, hk, rk), (0, Xk.j)(null, null, zk, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSunPosition" in kk,
            get: kk => kk.useSunPosition,
            set: (kk, Fk) => {
              kk.useSunPosition = Fk
            }
          },
          metadata: Ik
        }, Dk, Mk), (0, Xk.j)(null, null, Sk, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: kk => "cameraOffset" in kk,
            get: kk => kk.cameraOffset,
            set: (kk, Fk) => {
              kk.cameraOffset = Fk
            }
          },
          metadata: Ik
        }, kF, FF), (0, Xk.j)(null, null, vk, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: kk => "up" in kk,
            get: kk => kk.up,
            set: (kk, Fk) => {
              kk.up = Fk
            }
          },
          metadata: Ik
        }, IF, XF), (0, Xk.j)(null, null, Ek, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: kk => "dithering" in kk,
            get: kk => kk.dithering,
            set: (kk, Fk) => {
              kk.dithering = Fk
            }
          },
          metadata: Ik
        }, TF, iF), (0, Xk.j)(null, null, Ok, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: kk => "rawHdrOutput" in kk,
            get: kk => kk.rawHdrOutput,
            set: (kk, Fk) => {
              kk.rawHdrOutput = Fk
            }
          },
          metadata: Ik
        }, yF, lF), (0, Xk.j)(null, null, nk, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: kk => "cloudiness" in kk,
            get: kk => kk.cloudiness,
            set: (kk, Fk) => {
              kk.cloudiness = Fk
            }
          },
          metadata: Ik
        }, aF, qF), Ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ik
        })
      })(), kk._ShaderLoader = new jk.c((() => [Ik.e(330).then((() => Ik(61333))), Ik.e(323).then((() => Ik(61335)))]), (() => [Ik.e(347).then((() => Ik(61337))), Ik.e(341).then((() => Ik(61343)))])), kk
    })();
    (0, Zk.f)("BABYLON.SkyMaterial", Pk)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);