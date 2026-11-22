export const id = 302;
export const ids = [302];
export const modules = {
  41186: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(39672),
      fk = ik(41191);
    class Sk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = ik, this.bDk = [], this._maxBlockCapacity = ek || 64, this._selectionContent = new Dk.e(1024), this._creationFunc = kk
      }
      update(kk, ek, ik) {
        fk.c._CreateBlocks(kk, ek, ik, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      Zik(kk) {
        for (let ek = 0; ek < this.blocks.length; ek++) {
          this.blocks[ek].addEntry(kk)
        }
      }
      Tu(kk) {
        for (let ek = 0; ek < this.blocks.length; ek++) {
          this.blocks[ek].removeEntry(kk)
        }
      }
      select(kk, ek) {
        this._selectionContent.reset();
        for (let ik = 0; ik < this.blocks.length; ik++) {
          this.blocks[ik].select(kk, this._selectionContent, ek)
        }
        return ek ? this._selectionContent.concat(this.bDk) : this._selectionContent.concatWithNoDuplicate(this.bDk), this._selectionContent
      }
      intersects(kk, ek, ik) {
        this._selectionContent.reset();
        for (let Dk = 0; Dk < this.blocks.length; Dk++) {
          this.blocks[Dk].intersects(kk, ek, this._selectionContent, ik)
        }
        return ik ? this._selectionContent.concat(this.bDk) : this._selectionContent.concatWithNoDuplicate(this.bDk), this._selectionContent
      }
      intersectsRay(kk) {
        this._selectionContent.reset();
        for (let ek = 0; ek < this.blocks.length; ek++) {
          this.blocks[ek].intersectsRay(kk, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.bDk), this._selectionContent
      }
    }
    Sk.CreationFuncForMeshes = (kk, ek) => {
      const ik = kk.hq();
      !kk.isBlocked && ik.boundingBox.intersectsMinMax(ek.Jik, ek.Rik) && ek.entries.push(kk)
    }, Sk.CreationFuncForSubMeshes = (kk, ek) => {
      kk.hq().boundingBox.intersectsMinMax(ek.Jik, ek.Rik) && ek.entries.push(kk)
    }
  },
  41191: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(36698),
      fk = ik(39894);
    class Sk {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.entries = [], this.rDk = new Array, this._capacity = ik, this._depth = Dk, this._maxDepth = fk, this._creationFunc = Sk, this._minPoint = kk, this._maxPoint = ek, this.rDk.push(kk.clone()), this.rDk.push(ek.clone()), this.rDk.push(kk.clone()), this.rDk[2].x = ek.x, this.rDk.push(kk.clone()), this.rDk[3].y = ek.y, this.rDk.push(kk.clone()), this.rDk[4].z = ek.z, this.rDk.push(ek.clone()), this.rDk[5].z = kk.z, this.rDk.push(ek.clone()), this.rDk[6].x = kk.x, this.rDk.push(ek.clone()), this.rDk[7].y = kk.y
      }
      get vK() {
        return this._capacity
      }
      get Jik() {
        return this._minPoint
      }
      get Rik() {
        return this._maxPoint
      }
      addEntry(kk) {
        if (this.blocks)
          for (let ek = 0; ek < this.blocks.length; ek++) {
            this.blocks[ek].addEntry(kk)
          } else this._creationFunc(kk, this), this.entries.length > this.vK && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(kk) {
        if (this.blocks) {
          for (let ek = 0; ek < this.blocks.length; ek++) {
            this.blocks[ek].removeEntry(kk)
          }
          return
        }
        const ek = this.entries.indexOf(kk);
        ek > -1 && this.entries.splice(ek, 1)
      }
      addEntries(kk) {
        for (let ek = 0; ek < kk.length; ek++) {
          const ik = kk[ek];
          this.addEntry(ik)
        }
      }
      select(kk, ek, ik) {
        if (fk.e.IsInFrustum(this.rDk, kk)) {
          if (this.blocks) {
            for (let Dk = 0; Dk < this.blocks.length; Dk++) {
              this.blocks[Dk].select(kk, ek, ik)
            }
            return
          }
          ik ? ek.concat(this.entries) : ek.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(kk, ek, ik, Dk) {
        if (fk.e.IntersectsSphere(this._minPoint, this._maxPoint, kk, ek)) {
          if (this.blocks) {
            for (let fk = 0; fk < this.blocks.length; fk++) {
              this.blocks[fk].intersects(kk, ek, ik, Dk)
            }
            return
          }
          Dk ? ik.concat(this.entries) : ik.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(kk, ek) {
        if (kk.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let ik = 0; ik < this.blocks.length; ik++) {
              this.blocks[ik].intersectsRay(kk, ek)
            }
            return
          }
          ek.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Sk._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(kk, ek, ik, fk, bk, rk, Pk, mk) {
        Pk.blocks = new Array;
        const Mk = new Dk.o((ek.x - kk.x) / 2, (ek.y - kk.y) / 2, (ek.z - kk.z) / 2);
        for (let Dk = 0; Dk < 2; Dk++)
          for (let ek = 0; ek < 2; ek++)
            for (let Kk = 0; Kk < 2; Kk++) {
              const xk = kk.add(Mk.multiplyByFloats(Dk, ek, Kk)),
                nk = kk.add(Mk.multiplyByFloats(Dk + 1, ek + 1, Kk + 1)),
                Uk = new Sk(xk, nk, fk, bk + 1, rk, mk);
              Uk.addEntries(ik), Pk.blocks.push(Uk)
            }
      }
    }
  },
  41193: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk
    });
    var Dk = ik(39653),
      fk = ik(36698),
      Sk = ik(40016),
      bk = ik(41129),
      rk = ik(39736),
      Pk = ik(36722),
      mk = ik(41186);
    class Mk {
      constructor(kk) {
        this.name = rk.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new bk.w(fk.o.Zero(), new fk.o(1, 1, 1)), (kk = kk || Pk.e.LastCreatedScene) && (this.bw = kk, this.bw.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.bw.getActiveSubMeshCandidates = kk => this.getActiveSubMeshCandidates(kk), this.bw.getCollidingSubMeshCandidates = (kk, ek) => this.getCollidingSubMeshCandidates(kk, ek), this.bw.getIntersectingSubMeshCandidates = (kk, ek) => this.getIntersectingSubMeshCandidates(kk, ek))
      }
      register() {
        this.bw.onMeshRemovedObservable.add((kk => {
          const ek = this.bw.selectionOctree;
          if (void 0 !== ek && null !== ek) {
            const ik = ek.bDk.indexOf(kk); - 1 !== ik && ek.bDk.splice(ik, 1)
          }
        })), this.bw.onMeshImportedObservable.add((kk => {
          const ek = this.bw.selectionOctree;
          void 0 !== ek && null !== ek && ek.Zik(kk)
        }))
      }
      getActiveMeshCandidates() {
        return this.bw.nDk?.select(this.bw.frustumPlanes) || this.bw._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(kk) {
        if (kk._submeshesOctree && kk.useOctreeForRenderingSelection) {
          return kk._submeshesOctree.select(this.bw.frustumPlanes)
        }
        return this.bw._getDefaultSubMeshCandidates(kk)
      }
      getIntersectingSubMeshCandidates(kk, ek) {
        if (kk._submeshesOctree && kk.useOctreeForPicking) {
          bk.w.TransformToRef(ek, kk.getWorldMatrix(), this._tempRay);
          return kk._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.bw._getDefaultSubMeshCandidates(kk)
      }
      getCollidingSubMeshCandidates(kk, ek) {
        if (kk._submeshesOctree && kk.useOctreeForCollisions) {
          const ik = ek._velocityWorldLength + Math.max(ek._radius.x, ek._radius.y, ek._radius.z);
          return kk._submeshesOctree.intersects(ek._basePointWorld, ik)
        }
        return this.bw._getDefaultSubMeshCandidates(kk)
      }
      rebuild() {}
      dispose() {}
    }
    let Kk = !1;
    Kk || (Kk = !0, Dk.f.prototype.createOrUpdateSelectionOctree = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        ik = this._getComponent(rk.b.NAME_OCTREE);
      ik || (ik = new Mk(this), this.qik(ik)), this.nDk || (this.nDk = new mk.c(mk.c.CreationFuncForMeshes, kk, ek));
      const Dk = this.getWorldExtends();
      return this.nDk.update(Dk.min, Dk.max, this.meshes), this.nDk
    }, Object.defineProperty(Dk.f.prototype, "selectionOctree", {
      get: function() {
        return this.nDk
      },
      enumerable: !0,
      configurable: !0
    }), Sk.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ik = this.XF();
      let Dk = ik._getComponent(rk.b.NAME_OCTREE);
      Dk || (Dk = new Mk(ik), ik.qik(Dk)), this._submeshesOctree || (this._submeshesOctree = new mk.c(mk.c.CreationFuncForSubMeshes, kk, ek)), this.computeWorldMatrix(!0);
      const fk = this.hq().boundingBox;
      return this._submeshesOctree.update(fk.minimumWorld, fk.maximumWorld, this.TY), this._submeshesOctree
    })
  },
  41129: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => uk,
      c: () => Hk,
      f: () => Uk,
      i: () => nk,
      l: () => Vk,
      m: () => dk,
      p: () => Ak,
      q: () => sk,
      u: () => jk,
      w: () => Kk
    });
    var Dk = ik(36703),
      fk = ik(36698),
      Sk = ik(36707),
      bk = ik(39879),
      rk = ik(39701),
      Pk = ik(36722),
      mk = ik(39767);
    const Mk = {
      internalPickerForMesh: void 0
    };
    class Kk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Dk.d;
        this.origin = kk, this.direction = ek, this.length = ik, this.epsilon = fk
      }
      clone() {
        return new Kk(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Dk = Kk._TmpVector3[0].Z6(kk.x - ik, kk.y - ik, kk.z - ik),
          fk = Kk._TmpVector3[1].Z6(ek.x + ik, ek.y + ik, ek.z + ik);
        let Sk, bk, rk, Pk, mk = 0,
          Mk = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Dk.x || this.origin.x > fk.x) return !1
        } else if (Sk = 1 / this.direction.x, bk = (Dk.x - this.origin.x) * Sk, rk = (fk.x - this.origin.x) * Sk, rk === -1 / 0 && (rk = 1 / 0), bk > rk && (Pk = bk, bk = rk, rk = Pk), mk = Math.max(bk, mk), Mk = Math.min(rk, Mk), mk > Mk) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Dk.y || this.origin.y > fk.y) return !1
        } else if (Sk = 1 / this.direction.y, bk = (Dk.y - this.origin.y) * Sk, rk = (fk.y - this.origin.y) * Sk, rk === -1 / 0 && (rk = 1 / 0), bk > rk && (Pk = bk, bk = rk, rk = Pk), mk = Math.max(bk, mk), Mk = Math.min(rk, Mk), mk > Mk) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Dk.z || this.origin.z > fk.z) return !1
        } else if (Sk = 1 / this.direction.z, bk = (Dk.z - this.origin.z) * Sk, rk = (fk.z - this.origin.z) * Sk, rk === -1 / 0 && (rk = 1 / 0), bk > rk && (Pk = bk, bk = rk, rk = Pk), mk = Math.max(bk, mk), Mk = Math.min(rk, Mk), mk > Mk) return !1;
        return !0
      }
      intersectsBox(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(kk.minimum, kk.maximum, ek)
      }
      intersectsSphere(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ik = kk.center.x - this.origin.x,
          Dk = kk.center.y - this.origin.y,
          fk = kk.center.z - this.origin.z,
          Sk = ik * ik + Dk * Dk + fk * fk,
          bk = kk.radius + ek,
          rk = bk * bk;
        if (Sk <= rk) return !0;
        const Pk = ik * this.direction.x + Dk * this.direction.y + fk * this.direction.z;
        if (Pk < 0) return !1;
        return Sk - Pk * Pk <= rk
      }
      intersectsTriangle(kk, ek, ik) {
        const Dk = Kk._TmpVector3[0],
          Sk = Kk._TmpVector3[1],
          rk = Kk._TmpVector3[2],
          Pk = Kk._TmpVector3[3],
          mk = Kk._TmpVector3[4];
        ek.subtractToRef(kk, Dk), ik.subtractToRef(kk, Sk), fk.o.CrossToRef(this.direction, Sk, rk);
        const Mk = fk.o.Dot(Dk, rk);
        if (0 === Mk) return null;
        const xk = 1 / Mk;
        this.origin.subtractToRef(kk, Pk);
        const nk = fk.o.Dot(Pk, rk) * xk;
        if (nk < -this.epsilon || nk > 1 + this.epsilon) return null;
        fk.o.CrossToRef(Pk, Dk, mk);
        const Uk = fk.o.Dot(this.direction, mk) * xk;
        if (Uk < -this.epsilon || nk + Uk > 1 + this.epsilon) return null;
        const Hk = fk.o.Dot(Sk, mk) * xk;
        return Hk > this.length || Hk < 0 ? null : new bk.c(1 - nk - Uk, nk, Hk)
      }
      intersectsPlane(kk) {
        let ek;
        const ik = fk.o.Dot(kk.normal, this.direction);
        if (Math.abs(ik) < 9.99999997475243e-7) return null;
        {
          const Dk = fk.o.Dot(kk.normal, this.origin);
          return ek = (-kk.d - Dk) / ik, ek < 0 ? ek < -9.99999997475243e-7 ? null : 0 : ek
        }
      }
      intersectsAxis(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (kk) {
          case "y": {
            const kk = (this.origin.y - ek) / this.direction.y;
            return kk > 0 ? null : new fk.o(this.origin.x + this.direction.x * -kk, ek, this.origin.z + this.direction.z * -kk)
          }
          case "x": {
            const kk = (this.origin.x - ek) / this.direction.x;
            return kk > 0 ? null : new fk.o(ek, this.origin.y + this.direction.y * -kk, this.origin.z + this.direction.z * -kk)
          }
          case "z": {
            const kk = (this.origin.z - ek) / this.direction.z;
            return kk > 0 ? null : new fk.o(this.origin.x + this.direction.x * -kk, this.origin.y + this.direction.y * -kk, ek)
          }
          default:
            return null
        }
      }
      qDk(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Sk = arguments.length > 4 ? arguments[4] : void 0,
          bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const rk = fk.j.Matrix[0];
        return kk.getWorldMatrix().invertToRef(rk), this._tmpRay ? Kk.TransformToRef(this, rk, this._tmpRay) : this._tmpRay = Kk.Transform(this, rk), kk.intersects(this._tmpRay, ek, ik, Dk, Sk, bk)
      }
      intersectsMeshes(kk, ek, ik) {
        ik ? ik.length = 0 : ik = [];
        for (let Dk = 0; Dk < kk.length; Dk++) {
          const fk = this.qDk(kk[Dk], ek);
          fk.hit && ik.push(fk)
        }
        return ik.sort(this._comparePickingInfo), ik
      }
      _comparePickingInfo(kk, ek) {
        return kk.distance < ek.distance ? -1 : kk.distance > ek.distance ? 1 : 0
      }
      intersectionSegment(kk, ek, ik) {
        const Dk = this.origin,
          Sk = fk.j.eH[0],
          bk = fk.j.eH[1],
          rk = fk.j.eH[2],
          Pk = fk.j.eH[3];
        ek.subtractToRef(kk, Sk), this.direction.scaleToRef(Kk._Rayl, rk), Dk.addToRef(rk, bk), kk.subtractToRef(Dk, Pk);
        const mk = fk.o.Dot(Sk, Sk),
          Mk = fk.o.Dot(Sk, rk),
          xk = fk.o.Dot(rk, rk),
          nk = fk.o.Dot(Sk, Pk),
          Uk = fk.o.Dot(rk, Pk),
          Hk = mk * xk - Mk * Mk;
        let wk, lk, pk = Hk,
          yk = Hk;
        Hk < Kk._Smallnum ? (wk = 0, pk = 1, lk = Uk, yk = xk) : (wk = Mk * Uk - xk * nk, lk = mk * Uk - Mk * nk, wk < 0 ? (wk = 0, lk = Uk, yk = xk) : wk > pk && (wk = pk, lk = Uk + Mk, yk = xk)), lk < 0 ? (lk = 0, -nk < 0 ? wk = 0 : -nk > mk ? wk = pk : (wk = -nk, pk = mk)) : lk > yk && (lk = yk, -nk + Mk < 0 ? wk = 0 : -nk + Mk > mk ? wk = pk : (wk = -nk + Mk, pk = mk));
        const Yk = Math.abs(wk) < Kk._Smallnum ? 0 : wk / pk,
          Lk = Math.abs(lk) < Kk._Smallnum ? 0 : lk / yk,
          Ck = fk.j.eH[4];
        rk.scaleToRef(Lk, Ck);
        const Ak = fk.j.eH[5];
        Sk.scaleToRef(Yk, Ak), Ak.addInPlace(Pk);
        const jk = fk.j.eH[6];
        Ak.subtractToRef(Ck, jk);
        return Lk > 0 && Lk <= this.length && jk.lengthSquared() < ik * ik ? Ak.length() : -1
      }
      update(kk, ek, ik, Dk, Sk, bk, rk) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Kk._RayDistant || (Kk._RayDistant = Kk.Zero()), Kk._RayDistant.unprojectRayToRef(kk, ek, ik, Dk, fk.b.IdentityReadOnly, bk, rk);
          const Pk = fk.j.Matrix[0];
          Sk.invertToRef(Pk), Kk.TransformToRef(Kk._RayDistant, Pk, this)
        } else this.unprojectRayToRef(kk, ek, ik, Dk, Sk, bk, rk);
        return this
      }
      static Zero() {
        return new Kk(fk.o.Zero(), fk.o.Zero())
      }
      static CreateNew(kk, ek, ik, Dk, fk, Sk, bk) {
        return Kk.Zero().update(kk, ek, ik, Dk, fk, Sk, bk)
      }
      static CreateNewFromTo(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fk.b.IdentityReadOnly;
        const Dk = new Kk(new fk.o(0, 0, 0), new fk.o(0, 0, 0));
        return Kk.CreateFromToToRef(kk, ek, Dk, ik)
      }
      static CreateFromToToRef(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fk.b.IdentityReadOnly;
        ik.origin.Fs(kk);
        const Sk = ek.subtractToRef(kk, ik.direction),
          bk = Math.sqrt(Sk.x * Sk.x + Sk.y * Sk.y + Sk.z * Sk.z);
        return ik.length = bk, ik.direction.normalize(), Kk.TransformToRef(ik, Dk, ik)
      }
      static Transform(kk, ek) {
        const ik = new Kk(new fk.o(0, 0, 0), new fk.o(0, 0, 0));
        return Kk.TransformToRef(kk, ek, ik), ik
      }
      static TransformToRef(kk, ek, ik) {
        fk.o.TransformCoordinatesToRef(kk.origin, ek, ik.origin), fk.o.TransformNormalToRef(kk.direction, ek, ik.direction), ik.length = kk.length, ik.epsilon = kk.epsilon;
        const Dk = ik.direction,
          Sk = Dk.length();
        if (0 !== Sk && 1 !== Sk) {
          const kk = 1 / Sk;
          Dk.x *= kk, Dk.y *= kk, Dk.z *= kk, ik.length *= Sk
        }
        return ik
      }
      unprojectRayToRef(kk, ek, ik, Dk, Sk, bk, rk) {
        const mk = fk.j.Matrix[0];
        Sk.multiplyToRef(bk, mk), mk.multiplyToRef(rk, mk), mk.invert();
        const Mk = Pk.e.LastCreatedEngine,
          Kk = fk.j.eH[0];
        Kk.x = kk / ik * 2 - 1, Kk.y = -(ek / Dk * 2 - 1), Kk.z = Mk?.Xik ? 1 : Mk?.isNDCHalfZRange ? 0 : -1;
        const xk = fk.j.eH[1].Z6(Kk.x, Kk.y, 1 - 1e-8),
          nk = fk.j.eH[2],
          Uk = fk.j.eH[3];
        fk.o.TransformCoordinatesToRef(Kk, mk, nk), fk.o.TransformCoordinatesToRef(xk, mk, Uk), this.origin.Fs(nk), Uk.subtractToRef(nk, this.direction), this.direction.normalize()
      }
    }

    function xk(kk, ek, ik, Dk, fk) {
      let Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const bk = Kk.Zero();
      return nk(kk, ek, ik, Dk, bk, fk, Sk), bk
    }

    function nk(kk, ek, ik, Dk, Sk, bk) {
      let rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Pk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const mk = kk.JU();
      if (!bk && !(bk = kk.activeCamera) && !(bk = kk.cameraToUseForPointers)) return kk;
      const Mk = bk.viewport,
        Kk = mk.getRenderHeight(),
        {
          x: xk,
          y: nk,
          width: Uk,
          height: Hk
        } = Mk.toGlobal(mk.getRenderWidth(), Kk),
        wk = 1 / mk.getHardwareScalingLevel();
      return ek = ek * wk - xk, ik = ik * wk - (Kk - nk - Hk), Sk.update(ek, ik, Uk, Hk, Dk || fk.b.IdentityReadOnly, rk ? fk.b.IdentityReadOnly : bk.getViewMatrix(), bk.getProjectionMatrix(), Pk), kk
    }

    function Uk(kk, ek, ik, Dk) {
      const fk = Kk.Zero();
      return Hk(kk, ek, ik, fk, Dk), fk
    }

    function Hk(kk, ek, ik, Dk, Sk) {
      if (!rk.b) return kk;
      const bk = kk.JU();
      if (!Sk && !(Sk = kk.activeCamera) && !(Sk = kk.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Pk = Sk.viewport,
        mk = bk.getRenderHeight(),
        {
          x: Mk,
          y: Kk,
          width: xk,
          height: nk
        } = Pk.toGlobal(bk.getRenderWidth(), mk),
        Uk = fk.b.Identity(),
        Hk = 1 / bk.getHardwareScalingLevel();
      return ek = ek * Hk - Mk, ik = ik * Hk - (mk - Kk - nk), Dk.update(ek, ik, xk, nk, Uk, Uk, Sk.getProjectionMatrix()), kk
    }

    function wk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
      return lk(kk, ik, Dk, ek(Dk, ik.enableDistantPicking), fk, Sk, bk, rk)
    }

    function lk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
      const Pk = ek.intersects(Dk, fk, bk, Sk, ik, rk);
      return Pk && Pk.hit ? !fk && null != kk && Pk.distance >= kk.distance ? null : Pk : null
    }

    function pk(kk, ek) {
      return "InstancedLinesMesh" === kk || "LinesMesh" === kk ? ek.intersectionThreshold : 0
    }

    function yk(kk) {
      const ek = kk.getClassName();
      if ("GreasedLineMesh" === ek) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const ik = kk.rawBoundingInfo;
      return {
        rawBoundingInfo: ik,
        intersectionThreshold: ik ? pk(ek, kk) : 0
      }
    }

    function Yk(kk, ek, ik, Dk, fk) {
      const Sk = kk(ik, ek.enableDistantPicking);
      return Sk.intersectsSphere(Dk.HDk, fk) && Sk.intersectsBox(Dk.boundingBox, fk) ? Sk : null
    }

    function Lk(kk, ek, ik, Dk, Sk, bk) {
      let Pk = null;
      const mk = !!(kk.activeCameras && kk.activeCameras.length > 1 && kk.cameraToUseForPointers !== kk.activeCamera),
        Kk = kk.cameraToUseForPointers || kk.activeCamera,
        xk = Mk.internalPickerForMesh || wk,
        nk = xk === wk;
      for (let rk = 0; rk < kk.meshes.length; rk++) {
        const Mk = kk.meshes[rk];
        if (ik) {
          if (!ik(Mk, -1)) continue
        } else if (!Mk.isEnabled() || !Mk.isVisible || !Mk.Pw) continue;
        const Uk = mk && Mk.isWorldMatrixCameraDependent(),
          Hk = Mk.computeWorldMatrix(Uk, Kk);
        if (Mk.hasThinInstances && Mk.Pek) {
          const kk = xk(Pk, ek, Mk, Hk, !0, !0, bk);
          if (kk) {
            if (Sk) return kk;
            const {
              rawBoundingInfo: rk,
              intersectionThreshold: mk
            } = yk(Mk), Kk = Mk._thinInstanceDataStorage.matrixData;
            if (Kk) {
              const kk = fk.j.Matrix[0],
                Uk = fk.j.Matrix[1],
                wk = Math.min(Mk.h_, Kk.length >> 4);
              for (let pk = 0; pk < wk; pk++) {
                if (ik && !ik(Mk, pk)) continue;
                fk.b.FromArrayToRef(Kk, pk << 4, kk), kk.multiplyToRef(Hk, Uk);
                const wk = nk && rk ? Yk(ek, Mk, Uk, rk, mk) : null;
                if (nk && rk && !wk) continue;
                const yk = nk && wk ? lk(Pk, Mk, Uk, wk, Dk, Sk, bk, !0) : xk(Pk, ek, Mk, Uk, Dk, Sk, bk, !0);
                if (yk && (Pk = yk, Pk.thinInstanceIndex = pk, Dk)) return Pk
              }
            }
          }
        } else {
          const kk = xk(Pk, ek, Mk, Hk, Dk, Sk, bk);
          if (kk && (Pk = kk, Dk)) return Pk
        }
      }
      return Pk || new rk.b
    }

    function Ck(kk, ek, ik, Dk) {
      if (!rk.b) return null;
      const Sk = [],
        bk = !!(kk.activeCameras && kk.activeCameras.length > 1 && kk.cameraToUseForPointers !== kk.activeCamera),
        Pk = kk.cameraToUseForPointers || kk.activeCamera,
        mk = Mk.internalPickerForMesh || wk,
        Kk = mk === wk;
      for (let rk = 0; rk < kk.meshes.length; rk++) {
        const Mk = kk.meshes[rk];
        if (ik) {
          if (!ik(Mk, -1)) continue
        } else if (!Mk.isEnabled() || !Mk.isVisible || !Mk.Pw) continue;
        const xk = bk && Mk.isWorldMatrixCameraDependent(),
          nk = Mk.computeWorldMatrix(xk, Pk);
        if (Mk.hasThinInstances && Mk.Pek) {
          if (mk(null, ek, Mk, nk, !0, !0, Dk)) {
            const {
              rawBoundingInfo: kk,
              intersectionThreshold: bk
            } = yk(Mk), rk = Mk._thinInstanceDataStorage.matrixData;
            if (rk) {
              const Pk = fk.j.Matrix[0],
                xk = fk.j.Matrix[1],
                Uk = Math.min(Mk.h_, rk.length >> 4);
              for (let Hk = 0; Hk < Uk; Hk++) {
                if (ik && !ik(Mk, Hk)) continue;
                fk.b.FromArrayToRef(rk, Hk << 4, Pk), Pk.multiplyToRef(nk, xk);
                const Uk = Kk && kk ? Yk(ek, Mk, xk, kk, bk) : null;
                if (Kk && kk && !Uk) continue;
                const wk = Kk && Uk ? lk(null, Mk, xk, Uk, !1, !1, Dk, !0) : mk(null, ek, Mk, xk, !1, !1, Dk, !0);
                wk && (wk.thinInstanceIndex = Hk, Sk.push(wk))
              }
            }
          }
        } else {
          const kk = mk(null, ek, Mk, nk, !1, !1, Dk);
          kk && Sk.push(kk)
        }
      }
      return Sk
    }

    function Ak(kk, ek, ik, Dk, Sk, bk) {
      if (!rk.b) return null;
      const Pk = Lk(kk, (Dk => (kk._tempPickingRay || (kk._tempPickingRay = Kk.Zero()), nk(kk, ek, ik, Dk, kk._tempPickingRay, bk || null), kk._tempPickingRay)), Dk, Sk, !0);
      return Pk && (Pk.ray = xk(kk, ek, ik, fk.b.Identity(), bk || null)), Pk
    }

    function jk(kk, ek, ik, Dk, Sk, bk, rk) {
      const Pk = Lk(kk, ((Dk, fk) => (kk._tempPickingRay || (kk._tempPickingRay = Kk.Zero()), nk(kk, ek, ik, Dk, kk._tempPickingRay, bk || null, !1, fk), kk._tempPickingRay)), Dk, Sk, !1, rk);
      return Pk && (Pk.ray = xk(kk, ek, ik, fk.b.Identity(), bk || null)), Pk
    }

    function sk(kk, ek, ik, Dk, Sk) {
      const bk = Lk(kk, (ik => (kk._pickWithRayInverseMatrix || (kk._pickWithRayInverseMatrix = fk.b.Identity()), ik.invertToRef(kk._pickWithRayInverseMatrix), kk._cachedRayForTransform || (kk._cachedRayForTransform = Kk.Zero()), Kk.TransformToRef(ek, kk._pickWithRayInverseMatrix, kk._cachedRayForTransform), kk._cachedRayForTransform)), ik, Dk, !1, Sk);
      return bk && (bk.ray = ek), bk
    }

    function dk(kk, ek, ik, Dk, fk, Sk) {
      return Ck(kk, (Dk => xk(kk, ek, ik, Dk, fk || null)), Dk, Sk)
    }

    function Vk(kk, ek, ik, Dk) {
      return Ck(kk, (ik => (kk._pickWithRayInverseMatrix || (kk._pickWithRayInverseMatrix = fk.b.Identity()), ik.invertToRef(kk._pickWithRayInverseMatrix), kk._cachedRayForTransform || (kk._cachedRayForTransform = Kk.Zero()), Kk.TransformToRef(ek, kk._pickWithRayInverseMatrix, kk._cachedRayForTransform), kk._cachedRayForTransform)), ik, Dk)
    }

    function Fk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Dk = arguments.length > 3 ? arguments[3] : void 0,
        Sk = arguments.length > 4 ? arguments[4] : void 0;
      Dk || (Dk = kk.getWorldMatrix()), ek.length = ik, Sk ? ek.origin.Fs(Sk) : ek.origin.Fs(kk.position);
      const bk = fk.j.eH[2];
      bk.set(0, 0, kk._scene.useRightHandedSystem ? -1 : 1);
      const rk = fk.j.eH[3];
      return fk.o.TransformNormalToRef(bk, Dk, rk), fk.o.NormalizeToRef(rk, ek.direction), ek
    }

    function uk(kk, ek) {
      ek && (ek.prototype.getForwardRay = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        return Fk(this, new Kk(fk.o.Zero(), fk.o.Zero(), kk), kk, ek, ik)
      }, ek.prototype.getForwardRayToRef = function(kk) {
        return Fk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), kk && (mk.c._IsPickingAvailable = !0, kk.prototype.createPickingRay = function(kk, ek, ik, Dk) {
        return xk(this, kk, ek, ik, Dk, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Kk._TmpVector3 = (0, Sk.c)(6, fk.o.Zero), Kk._RayDistant = Kk.Zero(), Kk._Smallnum = 1e-8, Kk._Rayl = 1e9
  },
  41122: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk.w
    });
    var Dk = ik(39653),
      fk = ik(39782),
      Sk = ik(41129);
    let bk = !1;
    bk || (bk = !0, (0, Sk.b)(Dk.f, fk.e), Dk.f.prototype.createPickingRayToRef = function(kk, ek, ik, Dk, fk) {
      let bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Sk.i)(this, kk, ek, ik, Dk, fk, bk, rk)
    }, Dk.f.prototype.createPickingRayInCameraSpace = function(kk, ek, ik) {
      return (0, Sk.f)(this, kk, ek, ik)
    }, Dk.f.prototype.createPickingRayInCameraSpaceToRef = function(kk, ek, ik, Dk) {
      return (0, Sk.c)(this, kk, ek, ik, Dk)
    }, Dk.f.prototype.pickWithBoundingInfo = function(kk, ek, ik, Dk, fk) {
      return (0, Sk.p)(this, kk, ek, ik, Dk, fk)
    }, Dk.f.prototype.Un = function(kk, ek, ik, Dk, fk, bk) {
      let rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Sk.u)(this, kk, ek, ik, Dk, fk, bk, rk)
    }, Dk.f.prototype.pickWithRay = function(kk, ek, ik, Dk) {
      return (0, Sk.q)(this, kk, ek, ik, Dk)
    }, Dk.f.prototype.multiPick = function(kk, ek, ik, Dk, fk) {
      return (0, Sk.m)(this, kk, ek, ik, Dk, fk)
    }, Dk.f.prototype.multiPickWithRay = function(kk, ek, ik) {
      return (0, Sk.l)(this, kk, ek, ik)
    })
  },
  41138: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Mk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36698),
      bk = ik(39822),
      rk = ik(41145),
      Pk = ik(39787),
      mk = ik(36734);
    let Mk = (() => {
        var kk;
        let ek, ik, Pk, mk, Mk, Kk, xk, nk, Uk = rk.b,
          Hk = [],
          wk = [],
          lk = [],
          pk = [],
          yk = [],
          Yk = [],
          Lk = [],
          Ck = [],
          Ak = [],
          jk = [],
          sk = [],
          dk = [],
          Vk = [];
        return kk = class extends Uk {
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
          constructor(kk, ek, ik, fk) {
            super(kk, ik, fk), this._shadowFrustumSize = ((0, Dk.e)(this, Hk), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Dk.e)(this, wk, !0), this.autoCalcShadowZBounds = ((0, Dk.e)(this, lk), (0, Dk.e)(this, pk, !1)), this._orthoLeft = ((0, Dk.e)(this, yk), (0, Dk.e)(this, Yk, Number.MAX_VALUE)), this._orthoRight = ((0, Dk.e)(this, Lk), (0, Dk.e)(this, Ck, Number.MIN_VALUE)), this._orthoTop = ((0, Dk.e)(this, Ak), (0, Dk.e)(this, jk, Number.MIN_VALUE)), this._orthoBottom = ((0, Dk.e)(this, sk), (0, Dk.e)(this, dk, Number.MAX_VALUE)), (0, Dk.e)(this, Vk), this.position = ek.scale(-1), this.direction = ek
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return bk.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(kk, ek, ik) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(kk) : this._setDefaultAutoExtendShadowProjectionMatrix(kk, ek, ik)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(kk) {
            const ek = this.XF().activeCamera;
            Sk.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : ek ? ek.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : ek ? ek.maxZ : 1e4, kk, this.XF().JU().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(kk, ek, ik) {
            const Dk = this.XF().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const kk = Sk.o.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Dk = Number.MAX_VALUE,
                fk = -Number.MAX_VALUE;
              for (let bk = 0; bk < ik.length; bk++) {
                const rk = ik[bk];
                if (!rk) continue;
                const Pk = rk.hq().boundingBox;
                for (let ik = 0; ik < Pk.vectorsWorld.length; ik++) Sk.o.TransformCoordinatesToRef(Pk.vectorsWorld[ik], ek, kk), kk.x < this._orthoLeft && (this._orthoLeft = kk.x), kk.y < this._orthoBottom && (this._orthoBottom = kk.y), kk.x > this._orthoRight && (this._orthoRight = kk.x), kk.y > this._orthoTop && (this._orthoTop = kk.y), this.autoCalcShadowZBounds && (kk.z < Dk && (Dk = kk.z), kk.z > fk && (fk = kk.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Dk, this._shadowMaxZ = fk)
            }
            const fk = this._orthoRight - this._orthoLeft,
              bk = this._orthoTop - this._orthoBottom,
              rk = void 0 !== this.shadowMinZ ? this.shadowMinZ : Dk?.minZ || 0,
              Pk = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Dk?.maxZ || 1e4,
              mk = this.XF().JU().Xik;
            Sk.b.OrthoOffCenterLHToRef(this._orthoLeft - fk * this.shadowOrthoScale, this._orthoRight + fk * this.shadowOrthoScale, this._orthoBottom - bk * this.shadowOrthoScale, this._orthoTop + bk * this.shadowOrthoScale, mk ? Pk : rk, mk ? rk : Pk, kk, this.XF().JU().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(kk, ek) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, ek), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, ek), this)
          }
          transferToNodeMaterialEffect(kk, ek) {
            return this.computeTransformedInformation() ? (kk.setFloat3(ek, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (kk.setFloat3(ek, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(kk) {
            const ek = this._scene.JU();
            return !ek.Xik && ek.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(kk) {
            const ek = this._scene.JU();
            return ek.Xik && ek.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(kk, ek) {
            kk["DIRLIGHT" + ek] = !0
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Uk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.I)()], ik = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], Mk = [(0, fk.I)("orthoLeft")], Kk = [(0, fk.I)("orthoRight")], xk = [(0, fk.I)("orthoTop")], nk = [(0, fk.I)("orthoBottom")], (0, Dk.d)(kk, null, ek, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: kk => "shadowFrustumSize" in kk,
              get: kk => kk.shadowFrustumSize
            },
            metadata: Sk
          }, null, Hk), (0, Dk.d)(kk, null, ik, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "shadowOrthoScale" in kk,
              get: kk => kk.shadowOrthoScale
            },
            metadata: Sk
          }, null, Hk), (0, Dk.d)(null, null, Pk, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: kk => "autoUpdateExtends" in kk,
              get: kk => kk.autoUpdateExtends,
              set: (kk, ek) => {
                kk.autoUpdateExtends = ek
              }
            },
            metadata: Sk
          }, wk, lk), (0, Dk.d)(null, null, mk, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: kk => "autoCalcShadowZBounds" in kk,
              get: kk => kk.autoCalcShadowZBounds,
              set: (kk, ek) => {
                kk.autoCalcShadowZBounds = ek
              }
            },
            metadata: Sk
          }, pk, yk), (0, Dk.d)(null, null, Mk, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: kk => "_orthoLeft" in kk,
              get: kk => kk._orthoLeft,
              set: (kk, ek) => {
                kk._orthoLeft = ek
              }
            },
            metadata: Sk
          }, Yk, Lk), (0, Dk.d)(null, null, Kk, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: kk => "_orthoRight" in kk,
              get: kk => kk._orthoRight,
              set: (kk, ek) => {
                kk._orthoRight = ek
              }
            },
            metadata: Sk
          }, Ck, Ak), (0, Dk.d)(null, null, xk, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: kk => "_orthoTop" in kk,
              get: kk => kk._orthoTop,
              set: (kk, ek) => {
                kk._orthoTop = ek
              }
            },
            metadata: Sk
          }, jk, sk), (0, Dk.d)(null, null, nk, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: kk => "_orthoBottom" in kk,
              get: kk => kk._orthoBottom,
              set: (kk, ek) => {
                kk._orthoBottom = ek
              }
            },
            metadata: Sk
          }, dk, Vk), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk
      })(),
      Kk = !1;
    Kk || (Kk = !0, Pk.b.AddNodeConstructor("Light_Type_1", ((kk, ek) => () => new Mk(kk, Sk.o.Zero(), ek))), (0, mk.h)("BABYLON.DirectionalLight", Mk))
  },
  41155: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Ze
    });
    var Dk = ik(38294),
      fk = ik(36726),
      Sk = ik(36698),
      bk = ik(39708),
      rk = ik(41162),
      Pk = ik(36722),
      mk = ik(39849),
      Mk = ik(36874),
      Kk = ik(38296),
      xk = ik(38265),
      nk = ik(36729);
    class Uk {
      constructor() {
        this.direction1 = new Sk.o(0, 1, 0), this.direction2 = new Sk.o(0, 1, 0)
      }
      startDirectionFunction(kk, ek, ik, Dk) {
        const fk = (0, nk.RandomRange)(this.direction1.x, this.direction2.x),
          bk = (0, nk.RandomRange)(this.direction1.y, this.direction2.y),
          rk = (0, nk.RandomRange)(this.direction1.z, this.direction2.z);
        Dk ? ek.Z6(fk, bk, rk) : Sk.o.TransformNormalFromFloatsToRef(fk, bk, rk, kk, ek)
      }
      startPositionFunction(kk, ek, ik, Dk) {
        Dk ? ek.Z6(0, 0, 0) : Sk.o.TransformCoordinatesFromFloatsToRef(0, 0, 0, kk, ek)
      }
      clone() {
        const kk = new Uk;
        return xk.c.DeepCopy(this, kk), kk
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
        return kk.type = this.getClassName(), kk.direction1 = this.direction1.Tik(), kk.direction2 = this.direction2.Tik(), kk
      }
      parse(kk) {
        Sk.o.FromArrayToRef(kk.direction1, 0, this.direction1), Sk.o.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
    class Hk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = kk, this.radiusRange = ek, this.directionRandomizer = ik
      }
      startDirectionFunction(kk, ek, ik, Dk) {
        const fk = ik.position.subtract(kk.getTranslation()).normalize(),
          bk = (0, nk.RandomRange)(0, this.directionRandomizer),
          rk = (0, nk.RandomRange)(0, this.directionRandomizer),
          Pk = (0, nk.RandomRange)(0, this.directionRandomizer);
        fk.x += bk, fk.y += rk, fk.z += Pk, fk.normalize(), Dk ? ek.Fs(fk) : Sk.o.TransformNormalFromFloatsToRef(fk.x, fk.y, fk.z, kk, ek)
      }
      startPositionFunction(kk, ek, ik, Dk) {
        const fk = this.radius - (0, nk.RandomRange)(0, this.radius * this.radiusRange),
          bk = (0, nk.RandomRange)(0, 1),
          rk = (0, nk.RandomRange)(0, 2 * Math.PI),
          Pk = Math.acos(2 * bk - 1),
          mk = fk * Math.cos(rk) * Math.sin(Pk),
          Mk = fk * Math.cos(Pk),
          Kk = fk * Math.sin(rk) * Math.sin(Pk);
        Dk ? ek.Z6(mk, Math.abs(Mk), Kk) : Sk.o.TransformCoordinatesFromFloatsToRef(mk, Math.abs(Mk), Kk, kk, ek)
      }
      clone() {
        const kk = new Hk(this.radius, this.directionRandomizer);
        return xk.c.DeepCopy(this, kk), kk
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
    class wk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = kk, this.radiusRange = ek, this.directionRandomizer = ik
      }
      startDirectionFunction(kk, ek, ik, Dk) {
        const fk = ik.position.subtract(kk.getTranslation()).normalize(),
          bk = (0, nk.RandomRange)(0, this.directionRandomizer),
          rk = (0, nk.RandomRange)(0, this.directionRandomizer),
          Pk = (0, nk.RandomRange)(0, this.directionRandomizer);
        fk.x += bk, fk.y += rk, fk.z += Pk, fk.normalize(), Dk ? ek.Fs(fk) : Sk.o.TransformNormalFromFloatsToRef(fk.x, fk.y, fk.z, kk, ek)
      }
      startPositionFunction(kk, ek, ik, Dk) {
        const fk = this.radius - (0, nk.RandomRange)(0, this.radius * this.radiusRange),
          bk = (0, nk.RandomRange)(0, 1),
          rk = (0, nk.RandomRange)(0, 2 * Math.PI),
          Pk = Math.acos(2 * bk - 1),
          mk = fk * Math.cos(rk) * Math.sin(Pk),
          Mk = fk * Math.cos(Pk),
          Kk = fk * Math.sin(rk) * Math.sin(Pk);
        Dk ? ek.Z6(mk, Mk, Kk) : Sk.o.TransformCoordinatesFromFloatsToRef(mk, Mk, Kk, kk, ek)
      }
      clone() {
        const kk = new wk(this.radius, this.directionRandomizer);
        return xk.c.DeepCopy(this, kk), kk
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
    class lk extends wk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Sk.o(0, 1, 0),
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Sk.o(0, 1, 0);
        super(kk), this.direction1 = ek, this.direction2 = ik
      }
      startDirectionFunction(kk, ek, ik, Dk) {
        const fk = (0, nk.RandomRange)(this.direction1.x, this.direction2.x),
          bk = (0, nk.RandomRange)(this.direction1.y, this.direction2.y),
          rk = (0, nk.RandomRange)(this.direction1.z, this.direction2.z);
        Dk ? ek.Z6(fk, bk, rk) : Sk.o.TransformNormalFromFloatsToRef(fk, bk, rk, kk, ek)
      }
      clone() {
        const kk = new lk(this.radius, this.direction1, this.direction2);
        return xk.c.DeepCopy(this, kk), kk
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
        return kk.direction1 = this.direction1.Tik(), kk.direction2 = this.direction2.Tik(), kk
      }
      parse(kk) {
        super.parse(kk), Sk.o.FromArrayToRef(kk.direction1, 0, this.direction1), Sk.o.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
    var pk = ik(38262);
    class yk {
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
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = ik, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = ek, this.radius = kk
      }
      startDirectionFunction(kk, ek, ik, Dk) {
        const fk = ik.position.subtract(kk.getTranslation()).normalize(),
          bk = (0, nk.RandomRange)(0, this.directionRandomizer),
          rk = (0, nk.RandomRange)(0, this.directionRandomizer),
          Pk = (0, nk.RandomRange)(0, this.directionRandomizer);
        fk.x += bk, fk.y += rk, fk.z += Pk, fk.normalize(), Dk ? ek.Fs(fk) : Sk.o.TransformNormalFromFloatsToRef(fk.x, fk.y, fk.z, kk, ek)
      }
      startPositionFunction(kk, ek, ik, Dk) {
        const fk = (0, nk.RandomRange)(0, 2 * Math.PI);
        let bk;
        this.emitFromSpawnPointOnly ? bk = 1e-4 : (bk = (0, nk.RandomRange)(0, this.heightRange), bk = 1 - bk * bk);
        let rk = this._radius - (0, nk.RandomRange)(0, this._radius * this.radiusRange);
        rk *= bk;
        const Pk = rk * Math.sin(fk),
          mk = rk * Math.cos(fk),
          Mk = bk * this._height;
        if (Dk) return ek.x = Pk, ek.y = Mk, void(ek.z = mk);
        Sk.o.TransformCoordinatesFromFloatsToRef(Pk, Mk, mk, kk, ek)
      }
      clone() {
        const kk = new yk(this._radius, this._angle, this.directionRandomizer);
        return xk.c.DeepCopy(this, kk), kk
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
    class Yk extends yk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Sk.o(0, 1, 0),
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Sk.o(0, 1, 0);
        super(kk, ek), this.direction1 = ik, this.direction2 = Dk
      }
      startDirectionFunction(kk, ek, ik, Dk) {
        const fk = (0, nk.RandomRange)(this.direction1.x, this.direction2.x),
          bk = (0, nk.RandomRange)(this.direction1.y, this.direction2.y),
          rk = (0, nk.RandomRange)(this.direction1.z, this.direction2.z);
        Dk ? ek.Z6(fk, bk, rk) : Sk.o.TransformNormalFromFloatsToRef(fk, bk, rk, kk, ek)
      }
      clone() {
        const kk = new Yk(this.radius, this.angle, this.direction1, this.direction2);
        return xk.c.DeepCopy(this, kk), kk
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
        return kk.direction1 = this.direction1.Tik(), kk.direction2 = this.direction2.Tik(), kk
      }
      parse(kk) {
        super.parse(kk), Sk.o.FromArrayToRef(kk.direction1, 0, this.direction1), Sk.o.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
    class Lk {
      get mesh() {
        return this._mesh
      }
      set mesh(kk) {
        this._mesh !== kk && (this._mesh = kk, kk ? (this._indices = kk.oik(), this._positions = kk.getVerticesData(bk.e.PositionKind), this._normals = kk.getVerticesData(bk.e.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Sk.o.Zero(), this._mesh = null, this.direction1 = new Sk.o(0, 1, 0), this.direction2 = new Sk.o(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = kk
      }
      startDirectionFunction(kk, ek, ik, Dk) {
        if (this.useMeshNormalsForDirection && this._normals) return void Sk.o.TransformNormalToRef(this._storedNormal, kk, ek);
        const fk = (0, nk.RandomRange)(this.direction1.x, this.direction2.x),
          bk = (0, nk.RandomRange)(this.direction1.y, this.direction2.y),
          rk = (0, nk.RandomRange)(this.direction1.z, this.direction2.z);
        Dk ? ek.Z6(fk, bk, rk) : Sk.o.TransformNormalFromFloatsToRef(fk, bk, rk, kk, ek)
      }
      startPositionFunction(kk, ek, ik, Dk) {
        if (!this._indices || !this._positions) return;
        const fk = 3 * (Math.random() * (this._indices.length / 3) | 0),
          bk = Math.random(),
          rk = Math.random() * (1 - bk),
          Pk = 1 - bk - rk,
          mk = this._indices[fk],
          Mk = this._indices[fk + 1],
          Kk = this._indices[fk + 2],
          xk = Sk.j.eH[0],
          nk = Sk.j.eH[1],
          Uk = Sk.j.eH[2],
          Hk = Sk.j.eH[3];
        Sk.o.FromArrayToRef(this._positions, 3 * mk, xk), Sk.o.FromArrayToRef(this._positions, 3 * Mk, nk), Sk.o.FromArrayToRef(this._positions, 3 * Kk, Uk), Hk.x = bk * xk.x + rk * nk.x + Pk * Uk.x, Hk.y = bk * xk.y + rk * nk.y + Pk * Uk.y, Hk.z = bk * xk.z + rk * nk.z + Pk * Uk.z, Dk ? ek.Z6(Hk.x, Hk.y, Hk.z) : Sk.o.TransformCoordinatesFromFloatsToRef(Hk.x, Hk.y, Hk.z, kk, ek), this.useMeshNormalsForDirection && this._normals && (Sk.o.FromArrayToRef(this._normals, 3 * mk, xk), Sk.o.FromArrayToRef(this._normals, 3 * Mk, nk), Sk.o.FromArrayToRef(this._normals, 3 * Kk, Uk), this._storedNormal.x = bk * xk.x + rk * nk.x + Pk * Uk.x, this._storedNormal.y = bk * xk.y + rk * nk.y + Pk * Uk.y, this._storedNormal.z = bk * xk.z + rk * nk.z + Pk * Uk.z)
      }
      clone() {
        const kk = new Lk(this.mesh);
        return xk.c.DeepCopy(this, kk), kk
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
        return kk.type = this.getClassName(), kk.direction1 = this.direction1.Tik(), kk.direction2 = this.direction2.Tik(), kk.meshId = this.mesh?.id, kk.useMeshNormalsForDirection = this.useMeshNormalsForDirection, kk
      }
      parse(kk, ek) {
        Sk.o.FromArrayToRef(kk.direction1, 0, this.direction1), Sk.o.FromArrayToRef(kk.direction2, 0, this.direction2), kk.meshId && ek && (this.mesh = ek.getLastMeshById(kk.meshId)), this.useMeshNormalsForDirection = kk.useMeshNormalsForDirection
      }
    }
    class Ck {
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
        const ek = this._attractors.indexOf(kk); - 1 !== ek && this._attractors.splice(ek, 1)
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
        this._useLogarithmicDepth = kk && this.XF().JU().getCaps().fragmentDepthSupported
      }
      XF() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(kk) {
        switch (kk) {
          case Ck.BLENDMODE_MULTIPLYADD:
            return;
          case Ck.BLENDMODE_ADD:
            kk = 1;
            break;
          case Ck.BLENDMODE_ONEONE:
            kk = 6;
            break;
          case Ck.BLENDMODE_STANDARD:
            kk = 2;
            break;
          case Ck.BLENDMODE_MULTIPLY:
            kk = 4;
            break;
          case Ck.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(kk, ek, ik) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, kk, ek, ik), this
      }
      removeEmitRateGradient(kk) {
        return this._removeFactorGradient(this._emitRateGradients, kk), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Sk.o.Zero()
      }
      set direction1(kk) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = kk)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Sk.o.Zero()
      }
      set direction2(kk) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = kk)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Sk.o.Zero()
      }
      set minEmitBox(kk) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = kk)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Sk.o.Zero()
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
      _addFactorGradient(kk, ek, ik, fk) {
        const Sk = new Dk.l(ek, ik, fk);
        kk.push(Sk), kk.sort(((kk, ek) => kk.gradient < ek.gradient ? -1 : kk.gradient > ek.gradient ? 1 : 0))
      }
      _removeFactorGradient(kk, ek) {
        if (!kk) return;
        let ik = 0;
        for (const Dk of kk) {
          if (Dk.gradient === ek) {
            kk.splice(ik, 1);
            break
          }
          ik++
        }
      }
      _removeGradientAndTexture(kk, ek, ik) {
        if (!ek) return this;
        let Dk = 0;
        for (const fk of ek) {
          if (fk.gradient === kk) {
            ek.splice(Dk, 1);
            break
          }
          Dk++
        }
        return ik && ik.dispose(), this
      }
      constructor(kk) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Sk.o.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Sk.o(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = Ck.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Sk.l(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Sk.o(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Sk.o.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Mk.f(1, 1, 1, 1), this.color2 = new Mk.f(1, 1, 1, 1), this.colorDead = new Mk.f(0, 0, 0, 1), this.textureMask = new Mk.f(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new mk.b, this.id = kk, this.name = kk
      }
      createPointEmitter(kk, ek) {
        const ik = function(kk, ek) {
          const ik = new Uk;
          return ik.direction1 = kk, ik.direction2 = ek, ik
        }(kk, ek);
        return this.particleEmitterType = ik, ik
      }
      createHemisphericEmitter() {
        const kk = function() {
          return new Hk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = kk, kk
      }
      createSphereEmitter() {
        const kk = function() {
          return new wk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = kk, kk
      }
      createDirectedSphereEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Sk.o(0, 1, 0),
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Sk.o(0, 1, 0);
          return new lk(kk, ek, ik)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Sk.o(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Sk.o(0, 1, 0));
        return this.particleEmitterType = kk, kk
      }
      createCylinderEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new pk.f(kk, ek, ik, Dk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = kk, kk
      }
      createDirectedCylinderEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Sk.o(0, 1, 0),
            fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Sk.o(0, 1, 0);
          return new pk.c(kk, ek, ik, Dk, fk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Sk.o(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Sk.o(0, 1, 0));
        return this.particleEmitterType = kk, kk
      }
      createConeEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new yk(kk, ek)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = kk, kk
      }
      createDirectedConeEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Sk.o(0, 1, 0),
            Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Sk.o(0, 1, 0);
          return new Yk(kk, ek, ik, Dk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Sk.o(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Sk.o(0, 1, 0));
        return this.particleEmitterType = kk, kk
      }
      createBoxEmitter(kk, ek, ik, Dk) {
        const fk = new Kk.d;
        return this.particleEmitterType = fk, this.direction1 = kk, this.direction2 = ek, this.minEmitBox = ik, this.maxEmitBox = Dk, fk
      }
      createMeshEmitter() {
        const kk = function() {
          return new Lk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = kk, kk
      }
    }
    Ck.BLENDMODE_ONEONE = 0, Ck.BLENDMODE_STANDARD = 1, Ck.BLENDMODE_ADD = 2, Ck.BLENDMODE_MULTIPLY = 3, Ck.BLENDMODE_MULTIPLYADD = 4, Ck.BLENDMODE_SUBTRACT = -1;
    class Ak {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Mk.f(0, 0, 0, 0), this.currentColor2 = new Mk.f(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Sk.o.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class jk {
      constructor(kk) {
        this.particleSystem = kk, this.position = Sk.o.Zero(), this.direction = Sk.o.Zero(), this.color = new Mk.f(0, 0, 0, 0), this.colorStep = new Mk.f(0, 0, 0, 0), this.initialColor = new Mk.f(0, 0, 0, 0), this.colorDead = new Mk.f(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Sk.l(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Ak, this.id = jk._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let kk = this.age,
          ek = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === ek ? (ek = 1, kk = this._properties.randomCellOffset) : kk += this._properties.randomCellOffset);
        const ik = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Dk;
        Dk = this._properties.initialSpriteCellLoop ? (0, nk.Clamp)(kk * ek % this.lifeTime / this.lifeTime) : (0, nk.Clamp)(kk * ek / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Dk * ik | 0
      }
      _inheritParticleInfoToSubEmitter(kk) {
        if (kk.particleSystem.emitter.position) {
          const ek = kk.particleSystem.emitter;
          if (ek.position.Fs(this.position), kk.inheritDirection) {
            const kk = Sk.j.eH[0];
            this.direction.normalizeToRef(kk), ek.setDirection(kk, 0, Math.PI / 2)
          }
        } else {
          kk.particleSystem.emitter.Fs(this.position)
        }
        this.direction.scaleToRef(kk.inheritedVelocityAmount / 2, Sk.j.eH[0]), kk.particleSystem._inheritedVelocityOffset.Fs(Sk.j.eH[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const kk of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(kk)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = jk._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(kk) {
        kk.position.Fs(this.position), this._properties.initialDirection ? kk._properties.initialDirection ? kk._properties.initialDirection.Fs(this._properties.initialDirection) : kk._properties.initialDirection = this._properties.initialDirection.clone() : kk._properties.initialDirection = null, kk.direction.Fs(this.direction), this._properties.localPosition && (kk._properties.localPosition ? kk._properties.localPosition.Fs(this._properties.localPosition) : kk._properties.localPosition = this._properties.localPosition.clone()), kk.color.Fs(this.color), kk.colorStep.Fs(this.colorStep), kk.initialColor.Fs(this.initialColor), kk.colorDead.Fs(this.colorDead), kk.lifeTime = this.lifeTime, kk.age = this.age, kk._properties.randomCellOffset = this._properties.randomCellOffset, kk.size = this.size, kk.scale.Fs(this.scale), kk.angle = this.angle, kk.angularSpeed = this.angularSpeed, kk.particleSystem = this.particleSystem, kk.cellIndex = this.cellIndex, kk.id = this.id, kk._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (kk._properties.currentColorGradient = this._properties.currentColorGradient, kk._properties.currentColor1.Fs(this._properties.currentColor1), kk._properties.currentColor2.Fs(this._properties.currentColor2)), this._properties.currentSizeGradient && (kk._properties.currentSizeGradient = this._properties.currentSizeGradient, kk._properties.currentSize1 = this._properties.currentSize1, kk._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (kk._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, kk._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, kk._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (kk._properties.currentVelocityGradient = this._properties.currentVelocityGradient, kk._properties.currentVelocity1 = this._properties.currentVelocity1, kk._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (kk._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, kk._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, kk._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (kk._properties.currentDragGradient = this._properties.currentDragGradient, kk._properties.currentDrag1 = this._properties.currentDrag1, kk._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (kk._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, kk._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, kk._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (kk.remapData && this.remapData ? kk.remapData.Fs(this.remapData) : kk.remapData = new Sk.p(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (kk._properties.randomNoiseCoordinates1 && kk._properties.randomNoiseCoordinates2 ? (kk._properties.randomNoiseCoordinates1.Fs(this._properties.randomNoiseCoordinates1), kk._properties.randomNoiseCoordinates2.Fs(this._properties.randomNoiseCoordinates2)) : (kk._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), kk._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), kk.metadata = this.metadata
      }
    }
    jk._Count = 0;
    var sk = ik(40684);
    class dk {
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
      constructor(kk, ek, ik, Dk) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = ek, this.xR = kk, this._scene = ik, this._host = Dk, this._activeTargets = [], ek._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            zi: this._getCorrectLoopMode()
          }, this._animation.dataType === sk.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Sk.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const kk = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, kk)
        }
        if (this.xR instanceof Array) {
          let kk = 0;
          for (const ek of this.xR) this._preparePath(ek, kk), this._getOriginalValues(kk), kk++;
          this._targetIsArray = !0
        } else this._preparePath(this.xR), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const fk = ek.getEvents();
        if (fk && fk.length > 0)
          for (const Sk of fk) this._events.push(Sk._clone());
        this._enableBlending = kk && kk.animationPropertiesOverride ? kk.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ik = this._animation.targetPropertyPath;
        if (ik.length > 1) {
          let Dk = kk;
          for (let kk = 0; kk < ik.length - 1; kk++) {
            const ek = ik[kk];
            if (Dk = Dk[ek], void 0 === Dk) throw new Error(`Invalid property (${ek}) in property path (${ik.join(".")})`)
          }
          this._targetPath = ik[ik.length - 1], this._activeTargets[ek] = Dk
        } else this._targetPath = ik[0], this._activeTargets[ek] = kk;
        if (void 0 === this._activeTargets[ek][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${ik.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.xR instanceof Array) {
            let kk = 0;
            for (const ek of this.xR) void 0 !== this._originalValue[kk] && this._setValue(ek, this._activeTargets[kk], this._originalValue[kk], -1, kk), kk++
          } else void 0 !== this._originalValue[0] && this._setValue(this.xR, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(kk, ek) {
        if (this._targetIsArray)
          for (let ik = 0; ik < this.xR.length; ik++) {
            const Dk = this.xR[ik];
            this._setValue(Dk, this._activeTargets[ik], kk, ek, ik)
          } else this._setValue(this.xR, this._directTarget, kk, ek, 0)
      }
      _getOriginalValues() {
        let kk, ek = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ik = this._activeTargets[ek];
        if (sk.b.InheritOriginalValueFromActiveAnimations) {
          const kk = this._scene._activeAnimatables;
          for (let Dk = 0; Dk < kk.length; Dk++) {
            const fk = kk[Dk]._runtimeAnimations;
            for (let kk = 0; kk < fk.length; kk++) {
              const Dk = fk[kk];
              if (Dk !== this && Dk._targetPath === this._targetPath)
                for (let kk = 0; kk < Dk._activeTargets.length; kk++)
                  if (Dk._activeTargets[kk] === ik && void 0 !== Dk._originalValue[kk]) return void(Dk._originalValue[kk] && Dk._originalValue[kk].clone ? this._originalValue[ek] = Dk._originalValue[kk].clone() : this._originalValue[ek] = Dk._originalValue[kk])
            }
          }
        }
        kk = ik.getLocalMatrix && "_matrix" === this._targetPath ? ik.getLocalMatrix() : ik[this._targetPath], kk && kk.clone ? this._originalValue[ek] = kk.clone() : this._originalValue[ek] = kk
      }
      _registerTargetForLateAnimationBinding(kk, ek) {
        const ik = kk.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(ik), ik._lateAnimationHolders || (ik._lateAnimationHolders = {}), ik._lateAnimationHolders[kk.targetPath] || (ik._lateAnimationHolders[kk.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: ek
        }), kk.isAdditive ? (ik._lateAnimationHolders[kk.targetPath].additiveAnimations.push(kk), ik._lateAnimationHolders[kk.targetPath].totalAdditiveWeight += kk.weight) : (ik._lateAnimationHolders[kk.targetPath].animations.push(kk), ik._lateAnimationHolders[kk.targetPath].totalWeight += kk.weight)
      }
      _setValue(kk, ek, ik, Dk, fk) {
        const bk = this._scene._animationWrites,
          rk = this._scene._animationWriteCount++;
        let Pk = bk[rk];
        if (Pk || (Pk = bk[rk] = {
            runtimeAnimation: this,
            target: kk,
            weight: Dk,
            additive: !1,
            blendingFactor: 1,
            Aw: !1
          }), Pk.runtimeAnimation = this, Pk.target = kk, Pk.weight = Dk, Pk.additive = this.isAdditive, Pk.Aw = !1, this._currentActiveTarget = ek, this._weight = Dk, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const kk = ek[this._targetPath];
            kk.clone ? this._originalBlendValue = kk.clone() : this._originalBlendValue = kk
          }
          this._originalBlendValue.m ? sk.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Sk.b.DecomposeLerpToRef(this._originalBlendValue, ik, this._blendingFactor, this._currentValue) : this._currentValue = Sk.b.DecomposeLerp(this._originalBlendValue, ik, this._blendingFactor) : this._currentValue ? Sk.b.LerpToRef(this._originalBlendValue, ik, this._blendingFactor, this._currentValue) : this._currentValue = Sk.b.Lerp(this._originalBlendValue, ik, this._blendingFactor) : this._currentValue = sk.b._UniversalLerp(this._originalBlendValue, ik, this._blendingFactor);
          const Dk = kk && kk.animationPropertiesOverride ? kk.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Pk.blendingFactor = this._blendingFactor, this._blendingFactor += Dk
        } else Pk.blendingFactor = 1, this._currentValue ? this._currentValue.Fs ? this._currentValue.Fs(ik) : this._currentValue = ik : this._currentValue = ik?.clone ? ik.clone() : ik; - 1 !== Dk ? this._registerTargetForLateAnimationBinding(this, this._originalValue[fk]) : this._animationState.zi === sk.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[fk], ek[this._targetPath]) : ek[this._targetPath] = this._originalValue[fk] + this._currentValue : ek[this._targetPath] = this._currentValue, kk.pek && kk.pek(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.xR && this.xR.animationPropertiesOverride) {
          return "MorphTarget" === this.xR.getClassName?.() && null == this.xR._animationPropertiesOverride ? this._animation.zi : this.xR.animationPropertiesOverride.zi
        }
        return this._animation.zi
      }
      goToFrame(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const ik = this._animation.getKeys();
        kk < ik[0].frame ? kk = ik[0].frame : kk > ik[ik.length - 1].frame && (kk = ik[ik.length - 1].frame);
        const Dk = this._events;
        if (Dk.length)
          for (let Sk = 0; Sk < Dk.length; Sk++) Dk[Sk].onlyOnce || (Dk[Sk].isDone = Dk[Sk].frame < kk);
        this._currentFrame = kk;
        const fk = this._animation._interpolate(kk, this._animationState);
        this.setValue(fk, ek)
      }
      _prepareForSpeedRatioChange(kk) {
        const ek = this._previousElapsedTime * (this._animation.framePerSecond * kk) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - ek
      }
      animate(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const bk = this._animation,
          rk = bk.targetPropertyPath;
        if (!rk || rk.length < 1) return this._stopped = !0, !1;
        let Pk, mk = !0;
        const Mk = this._events;
        let Kk;
        if (this._coreRuntimeAnimation) Kk = ik - ek, Pk = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Pk, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Sk;
          (ek < this._minFrame || ek > this._maxFrame) && (ek = this._minFrame), (ik < this._minFrame || ik > this._maxFrame) && (ik = this._maxFrame), Kk = ik - ek;
          let rk = kk * (bk.framePerSecond * fk) / 1e3 + this._absoluteFrameOffset,
            xk = 0,
            nk = !1;
          const Uk = Dk && this._animationState.zi === sk.b.ANIMATIONLOOPMODE_YOYO;
          if (Uk) {
            const kk = (rk - ek) / Kk,
              ik = Math.sin(kk * Math.PI);
            rk = Math.abs(ik) * Kk + ek;
            const Dk = ik >= 0 ? 1 : -1;
            this._yoyoDirection !== Dk && (nk = !0), this._yoyoDirection = Dk
          }
          if (this._previousElapsedTime = kk, this._previousAbsoluteFrame = rk, !Dk && ik >= ek && (rk >= Kk && fk > 0 || rk <= 0 && fk < 0)) mk = !1, xk = bk.evaluate(ik);
          else if (!Dk && ek >= ik && (rk <= Kk && fk < 0 || rk >= 0 && fk > 0)) mk = !1, xk = bk.evaluate(ek);
          else if (this._animationState.zi !== sk.b.ANIMATIONLOOPMODE_CYCLE) {
            const kk = ik.toString() + ek.toString();
            if (!this._offsetsCache[kk]) {
              this._animationState.repeatCount = 0, this._animationState.zi = sk.b.ANIMATIONLOOPMODE_CYCLE;
              const Dk = bk._interpolate(ek, this._animationState),
                fk = bk._interpolate(ik, this._animationState);
              switch (this._animationState.zi = this._getCorrectLoopMode(), bk.dataType) {
                case sk.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[kk] = fk - Dk;
                  break;
                case sk.b.ANIMATIONTYPE_QUATERNION:
                case sk.b.ANIMATIONTYPE_VECTOR3:
                case sk.b.ANIMATIONTYPE_VECTOR2:
                case sk.b.ANIMATIONTYPE_SIZE:
                case sk.b.ANIMATIONTYPE_COLOR3:
                case sk.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[kk] = fk.subtract(Dk)
              }
              this._highLimitsCache[kk] = fk
            }
            xk = this._highLimitsCache[kk], Sk = this._offsetsCache[kk]
          }
          if (void 0 === Sk) switch (bk.dataType) {
            case sk.b.ANIMATIONTYPE_FLOAT:
              Sk = 0;
              break;
            case sk.b.ANIMATIONTYPE_QUATERNION:
              Sk = sk.l;
              break;
            case sk.b.ANIMATIONTYPE_VECTOR3:
              Sk = sk.t;
              break;
            case sk.b.ANIMATIONTYPE_VECTOR2:
              Sk = sk.s;
              break;
            case sk.b.ANIMATIONTYPE_SIZE:
              Sk = sk.p;
              break;
            case sk.b.ANIMATIONTYPE_COLOR3:
              Sk = sk.g;
              break;
            case sk.b.ANIMATIONTYPE_COLOR4:
              Sk = sk.h
          }
          const Hk = this._host ? this._host.syncRoot : null;
          let wk, lk = this._playbackFrames,
            pk = !1;
          if (Hk) {
            const kk = Hk.toFrame - Hk.fromFrame,
              ik = Hk.masterFrame,
              Dk = (ik - Hk.fromFrame) / kk;
            Pk = ek + Kk * Dk;
            const fk = Hk.getAnimations()[0];
            if (fk && 0 !== kk) {
              const kk = Kk * Dk,
                ek = fk._playbackTo - fk._playbackFrom;
              if (0 !== ek && fk._playbackFrom <= Hk.fromFrame && fk._playbackTo >= Hk.toFrame) {
                lk = Kk * Math.round((fk._playbackFrames - (fk._currentFrame - fk._playbackFrom)) / ek) + kk
              } else pk = (ik - this._playbackSyncMasterFrame) * (fk._playbackFrames - this._playbackSyncMasterPlayed) < 0, lk = kk;
              pk = pk || fk._playbackJumped, this._playbackSyncMasterPlayed = fk._playbackFrames, this._playbackSyncMasterFrame = ik
            }
          } else Pk = rk > 0 && ek > ik || rk < 0 && ek < ik ? mk && 0 !== Kk ? ik + rk % Kk : ek : mk && 0 !== Kk ? ek + rk % Kk : ik;
          if (!Uk && (fk > 0 && this.currentFrame > Pk || fk < 0 && this.currentFrame < Pk) || Uk && nk) {
            this._onLoop();
            for (let kk = 0; kk < Mk.length; kk++) Mk[kk].onlyOnce || (Mk[kk].isDone = !1);
            this._animationState.key = fk > 0 ? 0 : bk.getKeys().length - 1
          }
          if (this._currentFrame = Pk, this._animationState.repeatCount = 0 === Kk ? 0 : rk / Kk | 0, this._animationState.highLimitValue = xk, this._animationState.offsetValue = Sk, this._playbackFrom = ek, this._playbackTo = ik, this._playbackJumped = pk, this._playbackSyncRoot = Hk, Hk) wk = lk;
          else if (mk) wk = Uk ? Pk === ek && rk === ik ? Kk : Pk - ek : rk;
          else {
            const kk = 0 !== Kk ? Math.floor(this._playbackFrames / Kk) : 0;
            wk = (Pk === ik ? kk + 1 : kk) * Kk
          }
          this._playbackFrames = wk, this._playbackProgress = this._animationState.zi === sk.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Kk : wk
        }
        const xk = bk._interpolate(Pk, this._animationState);
        if (this.setValue(xk, Sk), Mk.length)
          for (let nk = 0; nk < Mk.length; nk++)
            if (Kk >= 0 && Pk >= Mk[nk].frame && Mk[nk].frame >= ek || Kk < 0 && Pk <= Mk[nk].frame && Mk[nk].frame <= ek) {
              const kk = Mk[nk];
              kk.isDone || (kk.onlyOnce && (Mk.splice(nk, 1), nk--), kk.isDone = !0, kk.action(Pk))
            } return mk || (this._stopped = !0), mk
      }
    }
    var Vk = ik(39470);
    class Fk {
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
        for (let ek = 0; ek < this._runtimeAnimations.length; ek++) {
          this._runtimeAnimations[ek]._prepareForSpeedRatioChange(kk)
        }
        this._speedRatio = kk, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          rk = arguments.length > 6 ? arguments[6] : void 0,
          Pk = arguments.length > 7 ? arguments[7] : void 0,
          mk = arguments.length > 8 ? arguments[8] : void 0,
          Mk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Kk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = ek, this.fromFrame = ik, this.toFrame = Dk, this.loopAnimation = Sk, this.onAnimationEnd = rk, this.onAnimationLoop = mk, this.isAdditive = Mk, this.playOrder = Kk, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.FY = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new fk.c, this.onAnimationLoopObservable = new fk.c, this._scene = kk, Pk && this.appendAnimations(ek, Pk), this._speedRatio = bk, kk._activeAnimatables.push(this)
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
      appendAnimations(kk, ek) {
        for (let ik = 0; ik < ek.length; ik++) {
          const Dk = ek[ik],
            fk = new dk(kk, Dk, this._scene, this);
          fk._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(fk)
        }
      }
      getAnimationByTargetProperty(kk) {
        const ek = this._runtimeAnimations;
        for (let ik = 0; ik < ek.length; ik++)
          if (ek[ik].animation.targetProperty === kk) return ek[ik].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(kk) {
        const ek = this._runtimeAnimations;
        for (let ik = 0; ik < ek.length; ik++)
          if (ek[ik].animation.targetProperty === kk) return ek[ik];
        return null
      }
      reset() {
        const kk = this._runtimeAnimations;
        for (let ek = 0; ek < kk.length; ek++) kk[ek].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(kk) {
        const ek = this._runtimeAnimations;
        for (let ik = 0; ik < ek.length; ik++) ek[ik].animation.enableBlending = !0, ek[ik].animation.blendingSpeed = kk
      }
      disableBlending() {
        const kk = this._runtimeAnimations;
        for (let ek = 0; ek < kk.length; ek++) kk[ek].animation.enableBlending = !1
      }
      goToFrame(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = this._runtimeAnimations;
        if (ik[0]) {
          const ek = ik[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? ik[0].currentFrame;
          const Dk = 0 === this.speedRatio ? 0 : (kk - this._frameToSyncFromJump) / ek * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Dk
        }
        for (let Dk = 0; Dk < ik.length; Dk++) ik[Dk].goToFrame(kk, ek ? this._weight : -1);
        this._goToFrame = kk
      }
      get paused() {
        return this.FY
      }
      pause() {
        this.FY || (this.FY = !0)
      }
      restart() {
        this.FY = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (kk || ek) {
          const fk = this._scene._activeAnimatables.indexOf(this);
          if (fk > -1) {
            const Sk = this._runtimeAnimations;
            for (let ik = Sk.length - 1; ik >= 0; ik--) {
              const Dk = Sk[ik];
              kk && Dk.animation.name != kk || (ek && !ek(Dk.target) || (Dk.dispose(), Sk.splice(ik, 1)))
            }
            0 == Sk.length && (ik || this._scene._activeAnimatables.splice(fk, 1), Dk || this._raiseOnAnimationEnd())
          }
        } else {
          const kk = this._scene._activeAnimatables.indexOf(this);
          if (kk > -1) {
            ik || this._scene._activeAnimatables.splice(kk, 1);
            const ek = this._runtimeAnimations;
            for (let kk = 0; kk < ek.length; kk++) ek[kk].dispose();
            this._runtimeAnimations.length = 0, Dk || this._raiseOnAnimationEnd()
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
        if (this.FY) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = kk), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = kk, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += kk - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Fk.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let ek = !1;
        const ik = this._runtimeAnimations;
        let Dk;
        for (Dk = 0; Dk < ik.length; Dk++) {
          const fk = ik[Dk].animate(kk - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          ek = ek || fk
        }
        if (this.animationStarted = ek, !ek) {
          if (this.disposeOnEnd)
            for (Dk = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Dk, 1), Dk = 0; Dk < ik.length; Dk++) ik[Dk].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return ek
      }
    }

    function uk(kk) {
      if (0 === kk.totalWeight && 0 === kk.totalAdditiveWeight) return kk.originalValue;
      let ek = 1;
      const ik = Sk.j.eH[0],
        Dk = Sk.j.eH[1],
        fk = Sk.j.Quaternion[0];
      let bk = 0;
      const rk = kk.animations[0],
        Pk = kk.originalValue;
      let mk, Mk = !1;
      if (kk.totalWeight < 1) mk = 1 - kk.totalWeight, Pk.decompose(Dk, fk, ik);
      else {
        if (bk = 1, ek = kk.totalWeight, mk = rk.weight / ek, 1 == mk) {
          if (!kk.totalAdditiveWeight) return rk.currentValue;
          Mk = !0
        }
        rk.currentValue.decompose(Dk, fk, ik)
      }
      if (!Mk) {
        Dk.scaleInPlace(mk), ik.scaleInPlace(mk), fk.scaleInPlace(mk);
        for (let rk = bk; rk < kk.animations.length; rk++) {
          const bk = kk.animations[rk];
          if (0 === bk.weight) continue;
          mk = bk.weight / ek;
          const Pk = Sk.j.eH[2],
            Mk = Sk.j.eH[3],
            Kk = Sk.j.Quaternion[1];
          bk.currentValue.decompose(Mk, Kk, Pk), Mk.scaleAndAddToRef(mk, Dk), Kk.scaleAndAddToRef(Sk.c.Dot(fk, Kk) > 0 ? mk : -mk, fk), Pk.scaleAndAddToRef(mk, ik)
        }
        fk.normalize()
      }
      for (let xk = 0; xk < kk.additiveAnimations.length; xk++) {
        const ek = kk.additiveAnimations[xk];
        if (0 === ek.weight) continue;
        const bk = Sk.j.eH[2],
          rk = Sk.j.eH[3],
          Pk = Sk.j.Quaternion[1];
        ek.currentValue.decompose(rk, Pk, bk), rk.multiplyToRef(Dk, rk), Sk.o.LerpToRef(Dk, rk, ek.weight, Dk), fk.multiplyToRef(Pk, Pk), Sk.c.SlerpToRef(fk, Pk, ek.weight, fk), bk.scaleAndAddToRef(ek.weight, ik)
      }
      const Kk = rk ? rk._animationState.workValue : Sk.j.Matrix[0].clone();
      return Sk.b.ComposeToRef(Dk, fk, ik, Kk), Kk
    }

    function qk(kk, ek) {
      if (0 === kk.totalWeight && 0 === kk.totalAdditiveWeight) return ek;
      const ik = kk.animations[0],
        Dk = kk.originalValue;
      let fk = ek;
      if (0 === kk.totalWeight && kk.totalAdditiveWeight > 0) fk.Fs(Dk);
      else if (1 === kk.animations.length) {
        if (Sk.c.SlerpToRef(Dk, ik.currentValue, Math.min(1, kk.totalWeight), fk), 0 === kk.totalAdditiveWeight) return fk
      } else if (kk.animations.length > 1) {
        let ik, bk, rk = 1;
        if (kk.totalWeight < 1) {
          const ek = 1 - kk.totalWeight;
          ik = [], bk = [], ik.push(Dk), bk.push(ek)
        } else {
          if (2 === kk.animations.length && (Sk.c.SlerpToRef(kk.animations[0].currentValue, kk.animations[1].currentValue, kk.animations[1].weight / kk.totalWeight, ek), 0 === kk.totalAdditiveWeight)) return ek;
          ik = [], bk = [], rk = kk.totalWeight
        }
        for (let ek = 0; ek < kk.animations.length; ek++) {
          const Dk = kk.animations[ek];
          ik.push(Dk.currentValue), bk.push(Dk.weight / rk)
        }
        let Pk = 0;
        for (let kk = 0; kk < ik.length;) kk ? (Pk += bk[kk], Sk.c.SlerpToRef(fk, ik[kk], bk[kk] / Pk, fk), kk++) : (Sk.c.SlerpToRef(ik[kk], ik[kk + 1], bk[kk + 1] / (bk[kk] + bk[kk + 1]), ek), fk = ek, Pk = bk[kk] + bk[kk + 1], kk += 2)
      }
      for (let bk = 0; bk < kk.additiveAnimations.length; bk++) {
        const ek = kk.additiveAnimations[bk];
        0 !== ek.weight && (fk.multiplyToRef(ek.currentValue, Sk.j.Quaternion[0]), Sk.c.SlerpToRef(fk, Sk.j.Quaternion[0], ek.weight, fk))
      }
      return fk
    }

    function Ik(kk, ek) {
      ek && (ek.prototype.copyAnimationRange = function(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new sk.b(this.name, "_matrix", kk.animations[0].framePerSecond, sk.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Sk = kk.animations[0].getRange(ek);
        if (!Sk) return !1;
        const bk = Sk.from,
          rk = Sk.to,
          Pk = kk.animations[0].getKeys(),
          mk = kk.length,
          Mk = kk.getParent(),
          Kk = this.getParent(),
          xk = Dk && Mk && mk && this.length && mk !== this.length,
          nk = xk && Kk && Mk ? Kk.length / Mk.length : 1,
          Uk = Dk && !Kk && fk && (1 !== fk.x || 1 !== fk.y || 1 !== fk.z),
          Hk = this.animations[0].getKeys();
        let wk, lk, pk;
        for (let yk = 0, Yk = Pk.length; yk < Yk; yk++) wk = Pk[yk], wk.frame >= bk && wk.frame <= rk && (Dk ? (pk = wk.value.clone(), xk ? (lk = pk.getTranslation(), pk.setTranslation(lk.scaleInPlace(nk))) : Uk && fk ? (lk = pk.getTranslation(), pk.setTranslation(lk.multiplyInPlace(fk))) : pk = wk.value) : pk = wk.value, Hk.push({
          frame: wk.frame + ik,
          value: pk
        }));
        return this.animations[0].createRange(ek, bk + ik, rk + ik), !0
      }), kk && (kk.prototype._animate = function(kk) {
        const ek = this._animationWrites,
          ik = this._animationWriteCount;
        let Dk = 0;
        for (let Sk = this._animationStepWriteCount; Sk < ik; Sk++) {
          const kk = ek[Sk];
          kk.Aw && -1 === kk.weight || (kk.Aw = !0, ek[Sk] = ek[Dk], ek[Dk] = kk, Dk++)
        }
        for (let Sk = Dk; Sk < ik; Sk++) {
          const kk = ek[Sk];
          kk.runtimeAnimation = null, kk.target = null
        }
        if (this._animationWriteCount = Dk, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const fk = Vk.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = fk
        }
        this.deltaTime = void 0 !== kk ? kk : this.useConstantAnimationDeltaTime ? 16 : (fk - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = fk;
        const bk = this._activeAnimatables;
        if (0 === bk.length) return;
        this._animationTime += this.deltaTime;
        const rk = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Sk = 0; Sk < bk.length; Sk++) {
          const kk = bk[Sk];
          !kk._animate(rk) && kk.disposeOnEnd && Sk--
        }! function(kk) {
          if (kk._registeredForLateAnimationBindings.length) {
            for (let ek = 0; ek < kk._registeredForLateAnimationBindings.length; ek++) {
              const ik = kk._registeredForLateAnimationBindings.data[ek];
              for (const kk in ik._lateAnimationHolders) {
                const ek = ik._lateAnimationHolders[kk],
                  Dk = ek.animations[0],
                  fk = ek.originalValue;
                if (void 0 === fk || null === fk) continue;
                const bk = sk.b.AllowMatrixDecomposeForInterpolation && fk.m;
                let rk = ik[kk];
                if (bk) rk = uk(ek);
                else if (void 0 !== fk.w) rk = qk(ek, rk || Sk.c.Identity());
                else {
                  let kk = 0,
                    ik = 1;
                  const Sk = Dk && Dk._animationState.zi === sk.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (ek.totalWeight < 1) rk = Sk ? fk.clone ? fk.clone() : fk : Dk && fk.scale ? fk.scale(1 - ek.totalWeight) : Dk ? fk * (1 - ek.totalWeight) : fk.clone ? fk.clone() : fk;
                  else if (Dk) {
                    ik = ek.totalWeight;
                    const bk = Dk.weight / ik;
                    rk = 1 !== bk ? Dk.currentValue.scale ? Dk.currentValue.scale(bk) : Dk.currentValue * bk : (ek.animations.length > 1 || ek.additiveAnimations.length > 0) && Dk.currentValue.clone ? Dk.currentValue.clone() : Dk.currentValue, Sk && (rk.addToRef ? rk.addToRef(fk, rk) : rk += fk), kk = 1
                  }
                  for (let Dk = kk; Dk < ek.animations.length; Dk++) {
                    const kk = ek.animations[Dk],
                      fk = kk.weight / ik;
                    fk && (kk.currentValue.scaleAndAddToRef ? kk.currentValue.scaleAndAddToRef(fk, rk) : rk += kk.currentValue * fk)
                  }
                  for (let Dk = 0; Dk < ek.additiveAnimations.length; Dk++) {
                    const kk = ek.additiveAnimations[Dk],
                      ik = kk.weight;
                    ik && (kk.currentValue.scaleAndAddToRef ? kk.currentValue.scaleAndAddToRef(ik, rk) : rk += kk.currentValue * ik)
                  }
                }
                ik[kk] = rk
              }
              ik._lateAnimationHolders = {}
            }
            kk._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, kk.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((kk, ek) => kk.playOrder - ek.playOrder))
      }, kk.prototype.beginWeightedAnimation = function(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          bk = arguments.length > 6 ? arguments[6] : void 0,
          rk = arguments.length > 7 ? arguments[7] : void 0,
          Pk = arguments.length > 8 ? arguments[8] : void 0,
          mk = arguments.length > 9 ? arguments[9] : void 0,
          Mk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Kk = this.beginAnimation(kk, ek, ik, fk, Sk, bk, rk, !1, Pk, mk, Mk);
        return Kk.weight = Dk, Kk
      }, kk.prototype.beginAnimation = function(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Sk = arguments.length > 5 ? arguments[5] : void 0,
          bk = arguments.length > 6 ? arguments[6] : void 0,
          rk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Pk = arguments.length > 8 ? arguments[8] : void 0,
          mk = arguments.length > 9 ? arguments[9] : void 0,
          Mk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (fk < 0) {
          const kk = ek;
          ek = ik, ik = kk, fk = -fk
        }
        ek > ik && (fk = -fk), rk && this.stopAnimation(kk, void 0, Pk), bk || (bk = new Fk(this, kk, ek, ik, Dk, fk, Sk, void 0, mk, Mk));
        const Kk = !Pk || Pk(kk);
        if (kk.animations && Kk && bk.appendAnimations(kk, kk.animations), kk.getAnimatables) {
          const Mk = kk.getAnimatables();
          for (let kk = 0; kk < Mk.length; kk++) this.beginAnimation(Mk[kk], ek, ik, Dk, fk, Sk, bk, rk, Pk, mk)
        }
        return bk.reset(), bk
      }, kk.prototype.beginHierarchyAnimation = function(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          bk = arguments.length > 6 ? arguments[6] : void 0,
          rk = arguments.length > 7 ? arguments[7] : void 0,
          Pk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          mk = arguments.length > 9 ? arguments[9] : void 0,
          Mk = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Kk = kk.getDescendants(ek),
          xk = [];
        xk.push(this.beginAnimation(kk, ik, Dk, fk, Sk, bk, rk, Pk, mk, void 0, Mk));
        for (const nk of Kk) xk.push(this.beginAnimation(nk, ik, Dk, fk, Sk, bk, rk, Pk, mk, void 0, Mk));
        return xk
      }, kk.prototype.beginDirectAnimation = function(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Sk < 0) {
          const kk = ik;
          ik = Dk, Dk = kk, Sk = -Sk
        }
        ik > Dk && (Sk = -Sk);
        return new Fk(this, kk, ik, Dk, fk, Sk, arguments.length > 6 ? arguments[6] : void 0, ek, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, kk.prototype.beginDirectHierarchyAnimation = function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        let mk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Mk = kk.getDescendants(ek),
          Kk = [];
        Kk.push(this.beginDirectAnimation(kk, ik, Dk, fk, Sk, bk, rk, Pk, mk));
        for (const xk of Mk) Kk.push(this.beginDirectAnimation(xk, ik, Dk, fk, Sk, bk, rk, Pk, mk));
        return Kk
      }, kk.prototype.getAnimatableByTarget = function(kk) {
        for (let ek = 0; ek < this._activeAnimatables.length; ek++)
          if (this._activeAnimatables[ek].target === kk) return this._activeAnimatables[ek];
        return null
      }, kk.prototype.getAllAnimatablesByTarget = function(kk) {
        const ek = [];
        for (let ik = 0; ik < this._activeAnimatables.length; ik++) this._activeAnimatables[ik].target === kk && ek.push(this._activeAnimatables[ik]);
        return ek
      }, kk.prototype.stopAnimation = function(kk, ek, ik) {
        const Dk = this.getAllAnimatablesByTarget(kk);
        for (const fk of Dk) fk.stop(ek, ik)
      }, kk.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let kk = 0; kk < this._activeAnimatables.length; kk++) this._activeAnimatables[kk].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const kk of this.animationGroups) kk.stop()
      })
    }
    Fk.ProcessPausedAnimatables = !1;
    var zk, Qk = ik(36707),
      vk = ik(39787),
      Ek = ik(39447);
    class hk extends vk.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(kk) {
        (kk.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Fs(kk), this._markAsDirtyAndDecompose())
      }
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(kk, ek.XF(), !1), this.name = kk, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = ek, this._localMatrix = Dk?.clone() ?? Sk.b.Identity(), this._restMatrix = fk ?? this._localMatrix.clone(), this._bindMatrix = bk ?? this._localMatrix.clone(), this._index = rk, this._absoluteMatrix = new Sk.b, this._absoluteBindMatrix = new Sk.b, this._absoluteInverseBindMatrix = new Sk.b, this._finalMatrix = new Sk.b, ek.bones.push(this), this.setParent(ik, !1), this._updateAbsoluteBindMatrices()
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
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== kk) {
          if (this.parent) {
            const kk = this.parent.children.indexOf(this); - 1 !== kk && this.parent.children.splice(kk, 1)
          }
          this._parentNode = kk, this.parent && this.parent.children.push(this), ek && this._updateAbsoluteBindMatrices(), this.pek()
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
        this._restMatrix.Fs(kk)
      }
      setRestPose(kk) {
        this.setRestMatrix(kk)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(kk) {
        this.N7(kk)
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
          const kk = Sk.j.eH[0],
            ek = Sk.j.Quaternion[0],
            ik = Sk.j.eH[1];
          this.getRestMatrix().decompose(kk, ek, ik), this._linkedTransformNode.position.Fs(ik), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Sk.c.Identity(), this._linkedTransformNode.rotationQuaternion.Fs(ek), this._linkedTransformNode.wi.Fs(kk)
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
        return this._decompose(), this.zkk
      }
      set position(kk) {
        this._decompose(), this.zkk.Fs(kk), this._markAsDirtyAndCompose()
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
      get wi() {
        return this.getScale()
      }
      set wi(kk) {
        this.setScale(kk)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Sk.o.Zero(), this._localRotation = Sk.c.Zero(), this.zkk = Sk.o.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.zkk))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Sk.b.ComposeToRef(this._localScaling, this._localRotation, this.zkk, this._localMatrix)) : this._needToCompose = !1)
      }
      N7(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Fs(kk), ek && this._updateAbsoluteBindMatrices(), ik ? this._matrix = kk : this.pek()
      }
      _updateAbsoluteBindMatrices(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (kk || (kk = this._bindMatrix), this.parent ? kk.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Fs(kk), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), ek)
          for (let ik = 0; ik < this.children.length; ik++) this.children[ik]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      pek() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.pek(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.pek(), this._needToDecompose = !0
      }
      _updatePosition(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const fk = this.getLocalMatrix();
        if (0 == ek) Dk ? (fk.addAtIndex(12, kk.x), fk.addAtIndex(13, kk.y), fk.addAtIndex(14, kk.z)) : fk.setTranslationFromFloats(kk.x, kk.y, kk.z);
        else {
          const ek = hk._TmpMats[0],
            bk = hk._TmpVecs[0];
          this.parent ? (ek.Fs(this.parent.getAbsoluteMatrix()), ik && ek.multiplyToRef(ik.getWorldMatrix(), ek)) : Sk.b.IdentityToRef(ek), Dk && ek.setTranslationFromFloats(0, 0, 0), ek.invert(), Sk.o.TransformCoordinatesToRef(kk, ek, bk), Dk ? (fk.addAtIndex(12, bk.x), fk.addAtIndex(13, bk.y), fk.addAtIndex(14, bk.z)) : fk.setTranslationFromFloats(bk.x, bk.y, bk.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(kk, ek, ik, !0)
      }
      setPosition(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(kk, ek, ik, !1)
      }
      setAbsolutePosition(kk, ek) {
        this.setPosition(kk, 1, ek)
      }
      scale(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const fk = this.getLocalMatrix(),
          bk = hk._TmpMats[0];
        Sk.b.ScalingToRef(kk, ek, ik, bk), bk.multiplyToRef(fk, fk), bk.invert();
        for (const Sk of this.children) {
          const Dk = Sk.getLocalMatrix();
          Dk.multiplyToRef(bk, Dk), Dk.multiplyAtIndex(12, kk), Dk.multiplyAtIndex(13, ek), Dk.multiplyAtIndex(14, ik), Sk._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Dk)
          for (const Sk of this.children) Sk.scale(kk, ek, ik, Dk)
      }
      setScale(kk) {
        this._decompose(), this._localScaling.Fs(kk), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(kk) {
        this._decompose(), kk.Fs(this._localScaling)
      }
      setYawPitchRoll(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fk = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Dk) {
          const bk = hk._TmpQuat;
          return Sk.c.RotationYawPitchRollToRef(kk, ek, ik, bk), void this.setRotationQuaternion(bk, Dk, fk)
        }
        const bk = hk._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(bk, fk)) return;
        const rk = hk._TmpMats[1];
        Sk.b.RotationYawPitchRollToRef(kk, ek, ik, rk), bk.multiplyToRef(rk, rk), this._rotateWithMatrix(rk, Dk, fk)
      }
      rotate(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        const fk = hk._TmpMats[0];
        fk.setTranslationFromFloats(0, 0, 0), Sk.b.RotationAxisToRef(kk, ek, fk), this._rotateWithMatrix(fk, ik, Dk)
      }
      setAxisAngle(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === ik) {
          const fk = hk._TmpQuat;
          return Sk.c.RotationAxisToRef(kk, ek, fk), void this.setRotationQuaternion(fk, ik, Dk)
        }
        const fk = hk._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(fk, Dk)) return;
        const bk = hk._TmpMats[1];
        Sk.b.RotationAxisToRef(kk, ek, bk), fk.multiplyToRef(bk, bk), this._rotateWithMatrix(bk, ik, Dk)
      }
      setRotation(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(kk.y, kk.x, kk.z, ek, ik)
      }
      setRotationQuaternion(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ek) return this._decompose(), this._localRotation.Fs(kk), void this._markAsDirtyAndCompose();
        const Dk = hk._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Dk, ik)) return;
        const fk = hk._TmpMats[1];
        Sk.b.FromQuaternionToRef(kk, fk), Dk.multiplyToRef(fk, fk), this._rotateWithMatrix(fk, ek, ik)
      }
      setRotationMatrix(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ek) {
          const Dk = hk._TmpQuat;
          return Sk.c.FromRotationMatrixToRef(kk, Dk), void this.setRotationQuaternion(Dk, ek, ik)
        }
        const Dk = hk._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Dk, ik)) return;
        const fk = hk._TmpMats[1];
        fk.Fs(kk), Dk.multiplyToRef(kk, fk), this._rotateWithMatrix(fk, ek, ik)
      }
      _rotateWithMatrix(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const Dk = this.getLocalMatrix(),
          fk = Dk.m[12],
          Sk = Dk.m[13],
          bk = Dk.m[14],
          rk = this.getParent(),
          Pk = hk._TmpMats[3],
          mk = hk._TmpMats[4];
        rk && 1 == ek ? (ik ? (Pk.Fs(ik.getWorldMatrix()), rk.getAbsoluteMatrix().multiplyToRef(Pk, Pk)) : Pk.Fs(rk.getAbsoluteMatrix()), mk.Fs(Pk), mk.invert(), Dk.multiplyToRef(Pk, Dk), Dk.multiplyToRef(kk, Dk), Dk.multiplyToRef(mk, Dk)) : 1 == ek && ik ? (Pk.Fs(ik.getWorldMatrix()), mk.Fs(Pk), mk.invert(), Dk.multiplyToRef(Pk, Dk), Dk.multiplyToRef(kk, Dk), Dk.multiplyToRef(mk, Dk)) : Dk.multiplyToRef(kk, Dk), Dk.setTranslationFromFloats(fk, Sk, bk), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(kk, ek) {
        const ik = hk._TmpMats[2];
        return kk.Fs(this.getAbsoluteMatrix()), ek ? (kk.multiplyToRef(ek.getWorldMatrix(), kk), Sk.b.ScalingToRef(ek.wi.x, ek.wi.y, ek.wi.z, ik)) : Sk.b.IdentityToRef(ik), kk.invert(), !isNaN(kk.m[0]) && (ik.multiplyAtIndex(0, this._scalingDeterminant), kk.multiplyToRef(ik, kk), !0)
      }
      vy() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ik = Sk.o.Zero();
        return this.getPositionToRef(kk, ek, ik), ik
      }
      getPositionToRef() {
        let kk = arguments.length > 1 ? arguments[1] : void 0,
          ek = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const kk = this.getLocalMatrix();
          ek.x = kk.m[12], ek.y = kk.m[13], ek.z = kk.m[14]
        } else {
          const ik = hk._TmpMats[0].Fs(this.getAbsoluteMatrix());
          kk && ik.multiplyToRef(kk.getWorldMatrix(), ik), ek.x = ik.m[12], ek.y = ik.m[13], ek.z = ik.m[14]
        }
      }
      getAbsolutePosition() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const ek = Sk.o.Zero();
        return this.getPositionToRef(1, kk, ek), ek
      }
      getAbsolutePositionToRef(kk, ek) {
        this.getPositionToRef(1, kk, ek)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Fs(this._localMatrix);
          const kk = this._skeleton.getPoseMatrix();
          kk && this._absoluteMatrix.multiplyToRef(kk, this._absoluteMatrix)
        }
        const kk = this.children,
          ek = kk.length;
        for (let ik = 0; ik < ek; ik++) kk[ik].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      yN(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ik = Sk.o.Zero();
        return this.getDirectionToRef(kk, ek, ik), ik
      }
      getDirectionToRef(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const Dk = hk._TmpMats[0].Fs(this.getAbsoluteMatrix());
        ek && Dk.multiplyToRef(ek.getWorldMatrix(), Dk), Sk.o.TransformNormalToRef(kk, Dk, ik), ik.normalize()
      }
      getRotation() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ik = Sk.o.Zero();
        return this.getRotationToRef(kk, ek, ik), ik
      }
      getRotationToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const Dk = hk._TmpQuat;
        this.getRotationQuaternionToRef(kk, ek, Dk), Dk.toEulerAnglesToRef(ik)
      }
      getRotationQuaternion() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ik = Sk.c.Identity();
        return this.getRotationQuaternionToRef(kk, ek, ik), ik
      }
      getRotationQuaternionToRef() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ek = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), ek.Fs(this._localRotation);
        else {
          const ik = hk._TmpMats[0],
            Dk = this.getAbsoluteMatrix();
          kk ? Dk.multiplyToRef(kk.getWorldMatrix(), ik) : ik.Fs(Dk), ik.multiplyAtIndex(0, this._scalingDeterminant), ik.multiplyAtIndex(1, this._scalingDeterminant), ik.multiplyAtIndex(2, this._scalingDeterminant), ik.decompose(void 0, ek, void 0)
        }
      }
      getRotationMatrix() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 ? arguments[1] : void 0;
        const ik = Sk.b.Identity();
        return this.getRotationMatrixToRef(kk, ek, ik), ik
      }
      getRotationMatrixToRef() {
        let kk = arguments.length > 1 ? arguments[1] : void 0,
          ek = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(ek);
        else {
          const ik = hk._TmpMats[0],
            Dk = this.getAbsoluteMatrix();
          kk ? Dk.multiplyToRef(kk.getWorldMatrix(), ik) : ik.Fs(Dk), ik.multiplyAtIndex(0, this._scalingDeterminant), ik.multiplyAtIndex(1, this._scalingDeterminant), ik.multiplyAtIndex(2, this._scalingDeterminant), ik.getRotationMatrixToRef(ek)
        }
      }
      getAbsolutePositionFromLocal(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ik = Sk.o.Zero();
        return this.getAbsolutePositionFromLocalToRef(kk, ek, ik), ik
      }
      getAbsolutePositionFromLocalToRef(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const Dk = hk._TmpMats[0].Fs(this.getAbsoluteMatrix());
        ek && Dk.multiplyToRef(ek.getWorldMatrix(), Dk), Sk.o.TransformCoordinatesToRef(kk, Dk, ik)
      }
      getLocalPositionFromAbsolute(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ik = Sk.o.Zero();
        return this.getLocalPositionFromAbsoluteToRef(kk, ek, ik), ik
      }
      getLocalPositionFromAbsoluteToRef(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const Dk = hk._TmpMats[0].Fs(this.getAbsoluteMatrix());
        ek && Dk.multiplyToRef(ek.getWorldMatrix(), Dk), Dk.invert(), Sk.o.TransformCoordinatesToRef(kk, Dk, ik)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const kk = this._skeleton.bones.indexOf(this);
        if (-1 !== kk && this._skeleton.bones.splice(kk, 1), this._parentNode && this._parentNode.children) {
          const kk = this._parentNode.children,
            ek = kk.indexOf(this); - 1 !== ek && kk.splice(ek, 1)
        }
        super.dispose()
      }
    }
    hk._TmpVecs = (0, Qk.c)(2, Sk.o.Zero), hk._TmpQuat = Sk.c.Identity(), hk._TmpMats = (0, Qk.c)(5, Sk.b.Identity), (zk = hk.prototype).copyAnimationRange ?? (zk.copyAnimationRange = (0, Ek.i)("Bone", "copyAnimationRange"));
    var ak = ik(39653);
    let Wk = !1;
    var tk = ik(39540),
      Xk = ik(39906),
      Bk = ik(39919),
      ck = ik(39910),
      Tk = ik(39694);

    function Zk(kk, ek) {
      const ik = (0, nk.RandomRange)(0, 1);
      Mk.f.LerpToRef(ek.color1, ek.color2, ik, kk.color)
    }

    function Ok(kk, ek) {
      ek.colorDead.subtractToRef(kk.color, ek._colorDiff), ek._colorDiff.scaleToRef(1 / kk.lifeTime, kk.colorStep)
    }

    function gk(kk, ek) {
      kk._properties.currentColorGradient = ek._colorGradients[0], kk._properties.currentColorGradient.getColorToRef(kk.color), kk._properties.currentColor1.Fs(kk.color), ek._colorGradients.length > 1 ? ek._colorGradients[1].getColorToRef(kk._properties.currentColor2) : kk._properties.currentColor2.Fs(kk.color)
    }

    function Gk(kk, ek) {
      const ik = ek._colorGradients;
      Dk.m.GetCurrentGradient(ek._ratio, ik, ((ek, ik, Dk) => {
        ek !== kk._properties.currentColorGradient && (kk._properties.currentColor1.Fs(kk._properties.currentColor2), ik.getColorToRef(kk._properties.currentColor2), kk._properties.currentColorGradient = ek), Mk.f.LerpToRef(kk._properties.currentColor1, kk._properties.currentColor2, Dk, kk.color), kk.color.a < 0 && (kk.color.a = 0)
      }))
    }

    function Nk(kk, ek) {
      kk.colorStep.scaleToRef(ek._scaledUpdateSpeed, ek._scaledColorStep), kk.color.addInPlace(ek._scaledColorStep), kk.color.a < 0 && (kk.color.a = 0)
    }

    function Rk(kk, ek) {
      Dk.m.GetCurrentGradient(ek._ratio, ek._angularSpeedGradients, ((ek, ik, Dk) => {
        ek !== kk._properties.currentAngularSpeedGradient && (kk._properties.currentAngularSpeed1 = kk._properties.currentAngularSpeed2, kk._properties.currentAngularSpeed2 = ik.getFactor(), kk._properties.currentAngularSpeedGradient = ek), kk.angularSpeed = (0, nk.Lerp)(kk._properties.currentAngularSpeed1, kk._properties.currentAngularSpeed2, Dk)
      }))
    }

    function Jk(kk, ek) {
      kk.angle += kk.angularSpeed * ek._scaledUpdateSpeed
    }

    function ke(kk, ek) {
      ek.particleEmitterType.startDirectionFunction(ek._emitterWorldMatrix, kk.direction, kk, ek.isLocal, ek._emitterInverseWorldMatrix)
    }

    function ee(kk, ek) {
      ek.startDirectionFunction(ek._emitterWorldMatrix, kk.direction, kk, ek.isLocal)
    }

    function ie(kk, ek) {
      kk._properties.currentVelocityGradient = ek._velocityGradients[0], kk._properties.currentVelocity1 = kk._properties.currentVelocityGradient.getFactor(), ek._velocityGradients.length > 1 ? kk._properties.currentVelocity2 = ek._velocityGradients[1].getFactor() : kk._properties.currentVelocity2 = kk._properties.currentVelocity1
    }

    function De(kk, ek) {
      kk._properties.currentLimitVelocityGradient = ek._limitVelocityGradients[0], kk._properties.currentLimitVelocity1 = kk._properties.currentLimitVelocityGradient.getFactor(), ek._limitVelocityGradients.length > 1 ? kk._properties.currentLimitVelocity2 = ek._limitVelocityGradients[1].getFactor() : kk._properties.currentLimitVelocity2 = kk._properties.currentLimitVelocity1
    }

    function fe(kk, ek) {
      Dk.m.GetCurrentGradient(ek._ratio, ek._velocityGradients, ((ek, ik, Dk) => {
        ek !== kk._properties.currentVelocityGradient && (kk._properties.currentVelocity1 = kk._properties.currentVelocity2, kk._properties.currentVelocity2 = ik.getFactor(), kk._properties.currentVelocityGradient = ek), kk._properties.directionScale *= (0, nk.Lerp)(kk._properties.currentVelocity1, kk._properties.currentVelocity2, Dk)
      }))
    }

    function Se(kk, ek) {
      Dk.m.GetCurrentGradient(ek._ratio, ek._limitVelocityGradients, ((ik, Dk, fk) => {
        ik !== kk._properties.currentLimitVelocityGradient && (kk._properties.currentLimitVelocity1 = kk._properties.currentLimitVelocity2, kk._properties.currentLimitVelocity2 = Dk.getFactor(), kk._properties.currentLimitVelocityGradient = ik);
        const Sk = (0, nk.Lerp)(kk._properties.currentLimitVelocity1, kk._properties.currentLimitVelocity2, fk);
        kk.direction.length() > Sk && kk.direction.scaleInPlace(ek.limitVelocityDamping)
      }))
    }

    function be(kk) {
      kk.direction.scaleToRef(kk._properties.directionScale, kk._properties.scaledDirection)
    }

    function re(kk, ek) {
      ek.particleEmitterType.startPositionFunction(ek._emitterWorldMatrix, kk.position, kk, ek.isLocal)
    }

    function Pe(kk, ek) {
      ek.startPositionFunction(ek._emitterWorldMatrix, kk.position, kk, ek.isLocal)
    }

    function me(kk, ek) {
      kk._properties.localPosition ? kk._properties.localPosition.Fs(kk.position) : kk._properties.localPosition = kk.position.clone(), Sk.o.TransformCoordinatesToRef(kk._properties.localPosition, ek._emitterWorldMatrix, kk.position)
    }

    function Me(kk, ek) {
      ek.isLocal && kk._properties.localPosition ? (kk._properties.localPosition.addInPlace(kk._properties.scaledDirection), Sk.o.TransformCoordinatesToRef(kk._properties.localPosition, ek._emitterWorldMatrix, kk.position)) : kk.position.addInPlace(kk._properties.scaledDirection)
    }

    function Ke(kk, ek) {
      kk._properties.currentDragGradient = ek._dragGradients[0], kk._properties.currentDrag1 = kk._properties.currentDragGradient.getFactor(), ek._dragGradients.length > 1 ? kk._properties.currentDrag2 = ek._dragGradients[1].getFactor() : kk._properties.currentDrag2 = kk._properties.currentDrag1
    }

    function xe(kk, ek) {
      Dk.m.GetCurrentGradient(ek._ratio, ek._dragGradients, ((ek, ik, Dk) => {
        ek !== kk._properties.currentDragGradient && (kk._properties.currentDrag1 = kk._properties.currentDrag2, kk._properties.currentDrag2 = ik.getFactor(), kk._properties.currentDragGradient = ek);
        const fk = (0, nk.Lerp)(kk._properties.currentDrag1, kk._properties.currentDrag2, Dk);
        kk._properties.scaledDirection.scaleInPlace(1 - fk)
      }))
    }

    function ne(kk, ek) {
      kk._properties.randomNoiseCoordinates1 && kk._properties.randomNoiseCoordinates2 ? (kk._properties.randomNoiseCoordinates1.Z6(Math.random(), Math.random(), Math.random()), kk._properties.randomNoiseCoordinates2.Z6(Math.random(), Math.random(), Math.random())) : (kk._properties.randomNoiseCoordinates1 = new Sk.o(Math.random(), Math.random(), Math.random()), kk._properties.randomNoiseCoordinates2 = new Sk.o(Math.random(), Math.random(), Math.random()))
    }

    function Ue(kk, ek) {
      const ik = ek._noiseTextureData,
        Dk = ek._noiseTextureSize;
      if (ik && Dk && kk._properties.randomNoiseCoordinates1 && kk._properties.randomNoiseCoordinates2) {
        const fk = ek._fetchR(kk._properties.randomNoiseCoordinates1.x, kk._properties.randomNoiseCoordinates1.y, Dk.width, Dk.height, ik),
          bk = ek._fetchR(kk._properties.randomNoiseCoordinates1.z, kk._properties.randomNoiseCoordinates2.x, Dk.width, Dk.height, ik),
          rk = ek._fetchR(kk._properties.randomNoiseCoordinates2.y, kk._properties.randomNoiseCoordinates2.z, Dk.width, Dk.height, ik),
          Pk = Sk.j.eH[0],
          mk = Sk.j.eH[1];
        Pk.Z6((2 * fk - 1) * ek.noiseStrength.x, (2 * bk - 1) * ek.noiseStrength.y, (2 * rk - 1) * ek.noiseStrength.z), Pk.scaleToRef(ek._tempScaledUpdateSpeed, mk), kk.direction.addInPlace(mk)
      }
    }

    function He(kk, ek) {
      ek.gravity.scaleToRef(ek._tempScaledUpdateSpeed, ek._scaledGravity), kk.direction.addInPlace(ek._scaledGravity)
    }

    function we(kk, ek) {
      kk.size = (0, nk.RandomRange)(ek.minSize, ek.maxSize), kk.scale.Z6((0, nk.RandomRange)(ek.minScaleX, ek.maxScaleX), (0, nk.RandomRange)(ek.minScaleY, ek.maxScaleY))
    }

    function le(kk, ek) {
      kk._properties.currentSizeGradient = ek._sizeGradients[0], kk._properties.currentSize1 = kk._properties.currentSizeGradient.getFactor(), kk.size = kk._properties.currentSize1, ek._sizeGradients.length > 1 ? kk._properties.currentSize2 = ek._sizeGradients[1].getFactor() : kk._properties.currentSize2 = kk._properties.currentSize1, kk.scale.Z6((0, nk.RandomRange)(ek.minScaleX, ek.maxScaleX), (0, nk.RandomRange)(ek.minScaleY, ek.maxScaleY))
    }

    function pe(kk, ek) {
      const ik = ek._actualFrame / ek.targetStopDuration;
      Dk.m.GetCurrentGradient(ik, ek._startSizeGradients, ((ik, Dk, fk) => {
        ik !== ek._currentStartSizeGradient && (ek._currentStartSize1 = ek._currentStartSize2, ek._currentStartSize2 = Dk.getFactor(), ek._currentStartSizeGradient = ik);
        const Sk = (0, nk.Lerp)(ek._currentStartSize1, ek._currentStartSize2, fk);
        kk.scale.scaleInPlace(Sk)
      }))
    }

    function ye(kk, ek) {
      Dk.m.GetCurrentGradient(ek._ratio, ek._sizeGradients, ((ek, ik, Dk) => {
        ek !== kk._properties.currentSizeGradient && (kk._properties.currentSize1 = kk._properties.currentSize2, kk._properties.currentSize2 = ik.getFactor(), kk._properties.currentSizeGradient = ek), kk.size = (0, nk.Lerp)(kk._properties.currentSize1, kk._properties.currentSize2, Dk)
      }))
    }

    function Ye(kk, ek) {
      kk.remapData = new Sk.p(0, 1, 0, 1)
    }

    function Le(kk, ek) {
      ek._colorRemapGradients && ek._colorRemapGradients.length > 0 && Dk.m.GetCurrentGradient(ek._ratio, ek._colorRemapGradients, ((ek, ik, Dk) => {
        const fk = (0, nk.Lerp)(ek.factor1, ik.factor1, Dk),
          Sk = (0, nk.Lerp)(ek.factor2, ik.factor2, Dk);
        kk.remapData.x = fk, kk.remapData.y = Sk - fk
      })), ek._alphaRemapGradients && ek._alphaRemapGradients.length > 0 && Dk.m.GetCurrentGradient(ek._ratio, ek._alphaRemapGradients, ((ek, ik, Dk) => {
        const fk = (0, nk.Lerp)(ek.factor1, ik.factor1, Dk),
          Sk = (0, nk.Lerp)(ek.factor2, ik.factor2, Dk);
        kk.remapData.z = fk, kk.remapData.w = Sk - fk
      }))
    }

    function Ce(kk, ek) {
      const ik = (0, nk.Clamp)(ek._actualFrame / ek.targetStopDuration);
      Dk.m.GetCurrentGradient(ik, ek._lifeTimeGradients, ((ek, Dk) => {
        const fk = ek,
          Sk = Dk,
          bk = fk.getFactor(),
          rk = Sk.getFactor(),
          Pk = (ik - fk.gradient) / (Sk.gradient - fk.gradient);
        kk.lifeTime = (0, nk.Lerp)(bk, rk, Pk)
      })), ek._emitPower = (0, nk.RandomRange)(ek.minEmitPower, ek.maxEmitPower)
    }

    function Ae(kk, ek) {
      kk.lifeTime = (0, nk.RandomRange)(ek.minLifeTime, ek.maxLifeTime), ek._emitPower = (0, nk.RandomRange)(ek.minEmitPower, ek.maxEmitPower)
    }

    function je(kk, ek) {
      0 === ek._emitPower ? (kk._properties.initialDirection ? kk._properties.initialDirection.Fs(kk.direction) : kk._properties.initialDirection = kk.direction.clone(), kk.direction.set(0, 0, 0)) : (kk._properties.initialDirection = null, kk.direction.scaleInPlace(ek._emitPower)), kk.direction.addInPlace(ek._inheritedVelocityOffset)
    }

    function se(kk, ek) {
      kk.angularSpeed = (0, nk.RandomRange)(ek.minAngularSpeed, ek.maxAngularSpeed), kk.angle = (0, nk.RandomRange)(ek.minInitialRotation, ek.maxInitialRotation)
    }

    function de(kk, ek) {
      kk._properties.currentAngularSpeedGradient = ek._angularSpeedGradients[0], kk.angularSpeed = kk._properties.currentAngularSpeedGradient.getFactor(), kk._properties.currentAngularSpeed1 = kk.angularSpeed, ek._angularSpeedGradients.length > 1 ? kk._properties.currentAngularSpeed2 = ek._angularSpeedGradients[1].getFactor() : kk._properties.currentAngularSpeed2 = kk._properties.currentAngularSpeed1, kk.angle = (0, nk.RandomRange)(ek.minInitialRotation, ek.maxInitialRotation)
    }

    function Ve(kk, ek) {
      kk._properties.initialStartSpriteCellId = ek.startSpriteCellID, kk._properties.initialEndSpriteCellId = ek.endSpriteCellID, kk._properties.initialSpriteCellLoop = ek.spriteCellLoop
    }

    function Fe(kk, ek) {
      kk.previousItem = ek.previousItem, kk.nextItem = ek, ek.previousItem && (ek.previousItem.nextItem = kk), ek.previousItem = kk
    }

    function ue(kk, ek) {
      kk.previousItem = ek, kk.nextItem = ek.nextItem, ek.nextItem && (ek.nextItem.previousItem = kk), ek.nextItem = kk
    }

    function qe(kk) {
      kk.previousItem && (kk.previousItem.nextItem = kk.nextItem), kk.nextItem && (kk.nextItem.previousItem = kk.previousItem)
    }
    var Ie = ik(39971);
    class ze extends Ck {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(kk) {
        this._startDirectionFunction !== kk && (this._startDirectionFunction = kk, this._directionCreation.process = kk ? ee : ke)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(kk) {
        this._startPositionFunction !== kk && (this._startPositionFunction = kk, this._positionCreation.process = kk ? Pe : re)
      }
      set onDispose(kk) {
        this._onDisposeObserver && this.ZF.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZF.add(kk)
      }
      get RL() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(kk) {
        this._useRampGradients !== kk && (this._useRampGradients = kk, this._resetEffect(), kk ? (this._rampCreation = {
          process: Ye,
          previousItem: null,
          nextItem: null
        }, ue(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Le,
          previousItem: null,
          nextItem: null
        }, ue(this._remapGradientProcessing, this._gravityProcessing))) : (qe(this._rampCreation), qe(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(kk) {
        this._isLocal !== kk && (this._isLocal = kk, kk ? (this._isLocalCreation = {
          process: me,
          previousItem: null,
          nextItem: null
        }, ue(this._isLocalCreation, this._positionCreation)) : qe(this._isLocalCreation))
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
          process: Ve,
          previousItem: null,
          nextItem: null
        }, ue(this._sheetCreation, this._colorDeadCreation)) : qe(this._sheetCreation), this._reset())
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[ek] = new Xk.e(this._engine), this._customWrappers[ek].effect = kk, this._customWrappers[ek].drawContext && (this._customWrappers[ek].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new fk.c), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = kk, !kk) return qe(this._noiseCreation), void qe(this._noiseProcessing);
          this._noiseCreation = {
            process: ne,
            previousItem: null,
            nextItem: null
          }, ue(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: Ue,
            previousItem: null,
            nextItem: null
          }, ue(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          rk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          mk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        Wk || (Wk = !0, Ik(ak.f, hk)), (0, tk.b)(), super(kk), this._emitterInverseWorldMatrix = Sk.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Sk.o, this.ZF = new fk.c, this.onStoppedObservable = new fk.c, this.onStartedObservable = new fk.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Mk.f(0, 0, 0, 0), this._colorDiff = new Mk.f(0, 0, 0, 0), this._scaledGravity = Sk.o.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = kk => {}, this.recycleParticle = kk => {
          const ek = this._particles.pop();
          ek !== kk && ek.copyTo(kk), ek.metadata = null, this._stockParticles.push(ek)
        }, this._createParticle = () => {
          let kk;
          return 0 !== this._stockParticles.length ? (kk = this._stockParticles.pop(), kk._reset()) : kk = new jk(this), this._prepareParticle(kk), kk
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = ek, this._epsilon = rk, ik && "Scene" !== ik.getClassName() ? (this._engine = ik, this.defaultProjectionMatrix = Sk.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = ik || Pk.e.LastCreatedScene, this._engine = this._scene.JU(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.ZY.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Ae,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: re,
          previousItem: null,
          nextItem: null
        }, ue(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: ke,
          previousItem: null,
          nextItem: null
        }, ue(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: je,
          previousItem: null,
          nextItem: null
        }, ue(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: we,
          previousItem: null,
          nextItem: null
        }, ue(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: se,
          previousItem: null,
          nextItem: null
        }, ue(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Zk,
          previousItem: null,
          nextItem: null
        }, ue(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Ok,
          previousItem: null,
          nextItem: null
        }, ue(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, mk || (this._colorProcessing = {
          process: Nk,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Jk,
          previousItem: null,
          nextItem: null
        }, ue(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: be,
          previousItem: null,
          nextItem: null
        }, ue(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Me,
          previousItem: null,
          nextItem: null
        }, ue(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: He,
          previousItem: null,
          nextItem: null
        }, ue(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = bk, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Xk.e(this._engine)
        }, this._customWrappers[0].effect = Dk, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Kk.d, this.updateFunction = kk => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((kk => {
            this._noiseTextureData = kk
          })));
          const ek = kk === this._particles;
          for (let ik = 0; ik < kk.length; ik++) {
            const Dk = kk[ik];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const fk = Dk.age;
            if (Dk.age += this._tempScaledUpdateSpeed, Dk.age > Dk.lifeTime) {
              const kk = Dk.age - fk,
                ek = Dk.lifeTime - fk;
              this._tempScaledUpdateSpeed = ek * this._tempScaledUpdateSpeed / kk, Dk.age = Dk.lifeTime
            }
            this._ratio = Dk.age / Dk.lifeTime, Dk._properties.directionScale = this._tempScaledUpdateSpeed;
            let Sk = this._updateQueueStart;
            for (; Sk;) Sk.process(Dk, this), Sk = Sk.nextItem;
            if (this._isAnimationSheetEnabled && !mk && Dk.updateCellIndex(), Dk._inheritParticleInfoToSubEmitters(), Dk.age >= Dk.lifeTime) {
              if (this._emitFromParticle(Dk), Dk._properties.attachedSubEmitters) {
                for (const kk of Dk._properties.attachedSubEmitters) kk.particleSystem.disposeOnStop = !0, kk.particleSystem.stop();
                Dk._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Dk), ek && ik--
            } else;
          }
        }
      }
      serialize(kk) {
        throw new Error("Method not implemented.")
      }
      clone(kk, ek) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Ce : this._lifeTimeCreation.process = Ae
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: pe,
          previousItem: null,
          nextItem: null
        }, ue(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (qe(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(kk) {
        this.targetStopDuration !== kk && (this._targetStopDuration = kk, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(kk, ek, ik) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, kk, ek, ik), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(kk) {
        return this._removeFactorGradient(this._lifeTimeGradients, kk), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(kk, ek, ik) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = le, this._sizeGradientProcessing = {
          process: ye,
          previousItem: null,
          nextItem: null
        }, Fe(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, kk, ek, ik), this
      }
      removeSizeGradient(kk) {
        return this._removeFactorGradient(this._sizeGradients, kk), 0 === this._sizeGradients?.length && (qe(this._sizeGradientProcessing), this._sizeCreation.process = we), this
      }
      addColorRemapGradient(kk, ek, ik) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, kk, ek, ik), this
      }
      removeColorRemapGradient(kk) {
        return this._removeFactorGradient(this._colorRemapGradients, kk), this
      }
      addAlphaRemapGradient(kk, ek, ik) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, kk, ek, ik), this
      }
      removeAlphaRemapGradient(kk) {
        return this._removeFactorGradient(this._alphaRemapGradients, kk), this
      }
      addAngularSpeedGradient(kk, ek, ik) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = de, this._angularSpeedGradientProcessing = {
          process: Rk,
          previousItem: null,
          nextItem: null
        }, Fe(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, kk, ek, ik), this
      }
      removeAngularSpeedGradient(kk) {
        return this._removeFactorGradient(this._angularSpeedGradients, kk), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = se, qe(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(kk, ek, ik) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: ie,
          previousItem: null,
          nextItem: null
        }, ue(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: fe,
          previousItem: null,
          nextItem: null
        }, Fe(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, kk, ek, ik), this
      }
      removeVelocityGradient(kk) {
        return this._removeFactorGradient(this._velocityGradients, kk), 0 === this._velocityGradients?.length && (qe(this._velocityCreation), qe(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(kk, ek, ik) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: De,
          previousItem: null,
          nextItem: null
        }, ue(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Se,
          previousItem: null,
          nextItem: null
        }, ue(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, kk, ek, ik), this
      }
      removeLimitVelocityGradient(kk) {
        return this._removeFactorGradient(this._limitVelocityGradients, kk), 0 === this._limitVelocityGradients?.length && (qe(this._limitVelocityCreation), qe(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(kk, ek, ik) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Ke,
          previousItem: null,
          nextItem: null
        }, Fe(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: xe,
          previousItem: null,
          nextItem: null
        }, Fe(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, kk, ek, ik), this
      }
      removeDragGradient(kk) {
        return this._removeFactorGradient(this._dragGradients, kk), 0 === this._dragGradients?.length && (qe(this._dragCreation), qe(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(kk, ek, ik) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, kk, ek, ik), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(kk) {
        return this._removeFactorGradient(this._startSizeGradients, kk), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const kk = new Uint8Array(4 * this._rawTextureWidth),
          ek = Mk.k.Color3[0];
        for (let ik = 0; ik < this._rawTextureWidth; ik++) {
          const fk = ik / this._rawTextureWidth;
          Dk.m.GetCurrentGradient(fk, this._rampGradients, ((Dk, fk, Sk) => {
            Mk.e.LerpToRef(Dk.color, fk.color, Sk, ek), kk[4 * ik] = 255 * ek.r, kk[4 * ik + 1] = 255 * ek.g, kk[4 * ik + 2] = 255 * ek.b, kk[4 * ik + 3] = 255
          }))
        }
        this._rampGradientsTexture = rk.c.CreateRGBATexture(kk, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((kk, ek) => kk.gradient < ek.gradient ? -1 : kk.gradient > ek.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(kk, ek) {
        this._rampGradients || (this._rampGradients = []);
        const ik = new Dk.h(kk, ek);
        return this._rampGradients.push(ik), this._syncRampGradientTexture(), this
      }
      removeRampGradient(kk) {
        return this._removeGradientAndTexture(kk, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(kk, ek, ik) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = gk, this._colorProcessing.process = Gk);
        const fk = new Dk.d(kk, ek, ik);
        return this._colorGradients.push(fk), this._colorGradients.sort(((kk, ek) => kk.gradient < ek.gradient ? -1 : kk.gradient > ek.gradient ? 1 : 0)), this
      }
      removeColorGradient(kk) {
        if (!this._colorGradients) return this;
        let ek = 0;
        for (const ik of this._colorGradients) {
          if (ik.gradient === kk) {
            this._colorGradients.splice(ek, 1);
            break
          }
          ek++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Zk, this._colorProcessing.process = Nk), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const kk of this._drawWrappers)
            if (kk)
              for (const ek of kk) ek?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(kk, ek, ik, Dk, fk) {
        return fk[4 * (((kk = .5 * Math.abs(kk) + .5) * ik % ik | 0) + ((ek = .5 * Math.abs(ek) + .5) * Dk % Dk | 0) * ik)] / 255
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
          ek = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * ek), this._vertexBuffer = new bk.b(kk, this._vertexData, !0, ek);
        let ik = 0;
        const Dk = this._vertexBuffer.createVertexBuffer(bk.e.PositionKind, ik, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[bk.e.PositionKind] = Dk, ik += 3;
        const fk = this._vertexBuffer.createVertexBuffer(bk.e.ColorKind, ik, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[bk.e.ColorKind] = fk, ik += 4;
        const Sk = this._vertexBuffer.createVertexBuffer("angle", ik, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Sk, ik += 1;
        const rk = this._vertexBuffer.createVertexBuffer("size", ik, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = rk, ik += 2, this._isAnimationSheetEnabled) {
          const kk = this._vertexBuffer.createVertexBuffer("cellIndex", ik, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = kk, ik += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const kk = this._vertexBuffer.createVertexBuffer("direction", ik, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = kk, ik += 3
        }
        if (this._useRampGradients) {
          const kk = this._vertexBuffer.createVertexBuffer("remapData", ik, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = kk, ik += 4
        }
        let Pk;
        if (this._useInstancing) {
          const ek = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new bk.b(kk, ek, !1, 2), Pk = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Pk = this._vertexBuffer.createVertexBuffer("offset", ik, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Pk, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const kk = [],
          ek = [];
        let ik = 0;
        for (let Dk = 0; Dk < this._capacity; Dk++) kk.push(ik), kk.push(ik + 1), kk.push(ik + 2), kk.push(ik), kk.push(ik + 2), kk.push(ik + 3), ek.push(ik, ik + 1, ik + 1, ik + 2, ik + 2, ik + 3, ik + 3, ik, ik, ik + 3), ik += 4;
        this._indexBuffer = this._engine.createIndexBuffer(kk), this._linesIndexBuffer = this._engine.createIndexBuffer(ek)
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
              for (let ek = 0; ek < this.preWarmCycles; ek++) this.animate(!0), kk.render()
            }))
          }));
          else
            for (let ek = 0; ek < this.preWarmCycles; ek++) this.animate(!0)
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
      _appendParticleVertex(kk, ek, ik, Dk) {
        let fk = kk * this._vertexBufferSize;
        const bk = Sk.j.eH[0].Fs(this._scene?.floatingOriginOffset || Sk.o.ZeroReadOnly);
        if (this._vertexData[fk++] = ek.position.x + this.worldOffset.x - bk.x, this._vertexData[fk++] = ek.position.y + this.worldOffset.y - bk.y, this._vertexData[fk++] = ek.position.z + this.worldOffset.z - bk.z, this._vertexData[fk++] = ek.color.r, this._vertexData[fk++] = ek.color.g, this._vertexData[fk++] = ek.color.b, this._vertexData[fk++] = ek.color.a, this._vertexData[fk++] = ek.angle, this._vertexData[fk++] = ek.scale.x * ek.size, this._vertexData[fk++] = ek.scale.y * ek.size, this._isAnimationSheetEnabled && (this._vertexData[fk++] = ek.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[fk++] = ek.direction.x, this._vertexData[fk++] = ek.direction.y, this._vertexData[fk++] = ek.direction.z);
        else if (ek._properties.initialDirection) {
          let kk = ek._properties.initialDirection;
          this.isLocal && (Sk.o.TransformNormalToRef(kk, this._emitterWorldMatrix, Sk.j.eH[0]), kk = Sk.j.eH[0]), 0 === kk.x && 0 === kk.z && (kk.x = .001), this._vertexData[fk++] = kk.x, this._vertexData[fk++] = kk.y, this._vertexData[fk++] = kk.z
        } else {
          let kk = ek.direction;
          this.isLocal && (Sk.o.TransformNormalToRef(kk, this._emitterWorldMatrix, Sk.j.eH[0]), kk = Sk.j.eH[0]), 0 === kk.x && 0 === kk.z && (kk.x = .001), this._vertexData[fk++] = kk.x, this._vertexData[fk++] = kk.y, this._vertexData[fk++] = kk.z
        }
        this._useRampGradients && ek.remapData && (this._vertexData[fk++] = ek.remapData.x, this._vertexData[fk++] = ek.remapData.y, this._vertexData[fk++] = ek.remapData.z, this._vertexData[fk++] = ek.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === ik ? ik = this._epsilon : 1 === ik && (ik = 1 - this._epsilon), 0 === Dk ? Dk = this._epsilon : 1 === Dk && (Dk = 1 - this._epsilon)), this._vertexData[fk++] = ik, this._vertexData[fk] = Dk)
      }
      _prepareParticle(kk) {}
      _createNewOnes(kk) {
        let ek;
        for (let ik = 0; ik < kk && this._particles.length !== this._capacity; ik++) {
          ek = this._createParticle(), this._particles.push(ek);
          let kk = this._createQueueStart;
          for (; kk;) kk.process(ek, this), kk = kk.nextItem;
          ek._inheritParticleInfoToSubEmitters()
        }
      }
      _update(kk) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const kk = this.emitter;
          this._emitterWorldMatrix = kk.getWorldMatrix()
        } else {
          const kk = this.emitter;
          this._emitterWorldMatrix = Sk.b.Translation(kk.x, kk.y, kk.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(kk)
      }
      static _GetAttributeNamesOrOptions() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = [bk.e.PositionKind, bk.e.ColorKind, "angle", "offset", "size"];
        return kk && Dk.push("cellIndex"), ek || Dk.push("direction"), ik && Dk.push("remapData"), Dk
      }
      static _GetEffectCreationOptions() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Bk.d)(Dk), kk && Dk.push("particlesInfos"), ek && Dk.push("logarithmicDepthConstant"), ik && (Dk.push("vFogInfos"), Dk.push("vFogColor")), Dk
      }
      fillDefines(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Bk.m)(this, this._scene, kk), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && kk.push("#define FOG")), this._isAnimationSheetEnabled && kk.push("#define ANIMATESHEET"), this.useLogarithmicDepth && kk.push("#define LOGARITHMICDEPTH"), ek === Ck.BLENDMODE_MULTIPLY && kk.push("#define BLENDMULTIPLYMODE"), this.isLocal && kk.push("#define LOCAL"), this._useRampGradients && kk.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (kk.push("#define BILLBOARD"), this.billboardMode) {
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
        ik && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), kk.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(kk, ek, ik) {
        ek.push(...ze._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), kk.push(...ze._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), ik.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Tk.g)(kk, this._imageProcessingConfigurationDefines), (0, Tk.c)(ik, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(kk) {
        var ek;
        const ik = this._getCustomDrawWrapper(kk);
        if (ik?.effect) return ik;
        const Dk = [];
        this.fillDefines(Dk, kk);
        const Sk = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          bk = Ie.e._PrepareStringDefines(Sk, Dk),
          rk = bk ? Ie.e.GetConfiguration(Sk) : void 0;
        let Pk = this._drawWrappers[Sk];
        Pk || (Pk = this._drawWrappers[Sk] = [], 0 === Sk || this._renderPassObserver || (this._renderPassObserver = ((ek = this._engine)._onReleaseRenderPassObservable ?? (ek._onReleaseRenderPassObservable = new fk.c)).add((kk => {
          const ek = this._drawWrappers[kk];
          if (ek) {
            for (const kk of ek) kk?.dispose();
            delete this._drawWrappers[kk]
          }
        }))));
        let mk = Pk[kk];
        mk || (mk = new Xk.e(this._engine), mk.drawContext && (mk.drawContext.useInstancing = this._useInstancing), Pk[kk] = mk);
        const Mk = Dk.join("\n");
        if (mk.defines !== Mk) {
          const kk = [],
            ek = [],
            ik = [];
          this.fillUniformsAttributesAndSamplerNames(ek, kk, ik), bk && (ek.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== rk?.defines.PREPASS_LOCAL_POSITION_INDEX && ek.push("inverseEmitterWM", "geometryWorldOffset")), mk.setEffect(this._engine.createEffect("particles", {
            attributes: kk,
            uniformsNames: ek,
            samplers: ik,
            defines: Mk,
            shaderLanguage: this._shaderLanguage,
            multiTarget: bk,
            indexParameters: bk ? {
              buffersCount: rk?._mrtCount ?? 0
            } : void 0
          }, this._engine), Mk)
        }
        return mk
      }
      _bindGeometryRendering(kk) {
        const ek = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          ik = Ie.e.GetConfiguration(ek);
        if (!ik?._defines) return;
        kk.setFloat("objectId", 0), kk.setInt("meshBlendTag", 0);
        const Dk = this._scene?.activeCamera;
        if (kk.setFloat2("cameraInfo", Dk?.minZ ?? 0, Dk?.maxZ ?? 1), this.isLocal && void 0 !== ik.defines.PREPASS_LOCAL_POSITION_INDEX) {
          kk.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const ek = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Sk.o.ZeroReadOnly, Sk.j.eH[0]);
          kk.setVector3("geometryWorldOffset", ek)
        }
      }
      animate() {
        let kk, ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!ek && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (ek ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) kk = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const ek = this._calculateEmitRate();
            kk = ek * this._scaledUpdateSpeed | 0, this._newPartsExcess += ek * this._scaledUpdateSpeed - kk
          }
          if (this._newPartsExcess > 1 && (kk += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? kk = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(kk), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !ek) {
            let kk = 0;
            for (let ek = 0; ek < this._particles.length; ek++) {
              const ik = this._particles[ek];
              this._appendParticleVertices(kk, ik), kk += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const kk = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  ek = this._particles.length;
                ek < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, ek * kk, this._fixedCapacityHighWaterMark * kk), this._fixedCapacityHighWaterMark = ek, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const ek = this._actualFrame / this.targetStopDuration;
          Dk.m.GetCurrentGradient(ek, this._emitRateGradients, ((ek, ik, Dk) => {
            ek !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = ik.getFactor(), this._currentEmitRateGradient = ek), kk = (0, nk.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Dk)
          }))
        }
        return kk
      }
      _appendParticleVertices(kk, ek) {
        this._appendParticleVertex(kk++, ek, 0, 0), this._useInstancing || (this._appendParticleVertex(kk++, ek, 1, 0), this._appendParticleVertex(kk++, ek, 1, 1), this._appendParticleVertex(kk, ek, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !ze.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ik.e(345).then((() => ik(60703))), ik.e(339).then((() => ik(60708)))])) : await Promise.all([ik.e(328).then((() => ik(60711))), Promise.all([ik.e(321), ik.e(355)]).then((() => ik(60719)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== Ck.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(Ck.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(Ck.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(kk) {
        const ek = this._getWrapper(kk),
          ik = ek.effect,
          Dk = this._engine;
        Dk.enableEffect(ek);
        const fk = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        ik.setTexture("diffuseSampler", this.particleTexture), ik.setMatrix("view", fk);
        const bk = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (ik.setMatrix("projection", bk), this._isAnimationSheetEnabled && this.particleTexture) {
          const kk = this.particleTexture.getBaseSize();
          ik.setFloat3("particlesInfos", this.spriteCellWidth / kk.width, this.spriteCellHeight / kk.height, this.spriteCellWidth / kk.width)
        }
        if (ik.setVector2("translationPivot", this.translationPivot), ik.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const kk = this._scene.activeCamera;
          ik.setVector3("eyePosition", kk.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), ik.setTexture("rampSampler", this._rampGradientsTexture));
        const rk = ik.defines;
        this._scene && ((0, Bk.g)(ik, this, this._scene), this.applyFog && (0, ck.i)(this._scene, void 0, ik)), rk.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (fk.invertToRef(Sk.j.Matrix[0]), ik.setMatrix("invView", Sk.j.Matrix[0])), ik._multiTarget && this._bindGeometryRendering(ik), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Dk.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, ik) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, ik)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Dk.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, ik) : Dk.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, ik), this.useLogarithmicDepth && this._scene && (0, ck.u)(rk, ik, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(ik), this._setEngineBasedOnBlendMode(kk), ik._multiTarget && Ie.e._BindZeroAlphaDiscard(Dk, ik);
        let Pk = !1;
        try {
          Ie.e._BindAttachmentsForEffect(Dk, ik) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(ik), this._useInstancing ? this._scene?.forceWireframe ? Dk.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Dk.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Dk.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Dk.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Pk = !0)
        } finally {
          Ie.e._RestoreAttachments(Dk)
        }
        return Pk ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const kk = this._engine;
        let ek;
        return kk.setState && (kk.setState(!1), this.forceDepthWrite && kk.setDepthWrite(!0)), ek = this.blendMode === Ck.BLENDMODE_MULTIPLYADD ? this._render(Ck.BLENDMODE_MULTIPLY) + this._render(Ck.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), ek
      }
      _onDispose() {}
      dispose() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), kk && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), kk && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(ek, ik), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const kk = this._scene.ZY.indexOf(this);
          kk > -1 && this._scene.ZY.splice(kk, 1), this._scene._activeParticleSystems.dispose()
        }
        this.ZF.notifyObservers(this), this.ZF.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    ze.ForceGLSL = !1;
    var Qe, ve = ik(36734);
    ! function(kk) {
      kk[kk.ATTACHED = 0] = "ATTACHED", kk[kk.END = 1] = "END"
    }(Qe || (Qe = {}));
    class Ee {
      constructor(kk) {
        if (this.particleSystem = kk, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !kk.emitter || !kk.emitter.dispose) {
          const ek = (0, ve.d)("BABYLON.AbstractMesh");
          kk.emitter = new ek("SubemitterSystemEmitter", kk.XF()), kk._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let kk = this.particleSystem.emitter;
        if (kk) {
          if (kk instanceof Sk.o) kk = kk.clone();
          else if (-1 !== kk.getClassName().indexOf("Mesh")) {
            kk = new((0, ve.d)("BABYLON.Mesh"))("", kk.XF()), kk.isVisible = !1
          }
        } else kk = new Sk.o;
        const ek = new Ee(this.particleSystem.clone(this.particleSystem.name, kk));
        return ek.particleSystem.name += "Clone", ek.type = this.type, ek.inheritDirection = this.inheritDirection, ek.inheritedVelocityAmount = this.inheritedVelocityAmount, ek.particleSystem._disposeEmitterOnDispose = !0, ek.particleSystem.disposeOnStop = !0, ek
      }
      serialize() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = {};
        return ek.type = this.type, ek.inheritDirection = this.inheritDirection, ek.inheritedVelocityAmount = this.inheritedVelocityAmount, ek.particleSystem = this.particleSystem.serialize(kk), ek
      }
      static _ParseParticleSystem(kk, ek, ik) {
        throw (0, Ek.k)("ParseParticle")
      }
      static Parse(kk, ek, ik) {
        const Dk = kk.particleSystem,
          fk = new Ee(Ee._ParseParticleSystem(Dk, ek, ik, !0));
        return fk.type = kk.type, fk.inheritDirection = kk.inheritDirection, fk.inheritedVelocityAmount = kk.inheritedVelocityAmount, fk.particleSystem._isSubEmitter = !0, fk
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var he = ik(39467),
      ae = ik(39585);
    const We = () => {};
    class te {
      constructor() {
        this.particlePositionGenerator = We, this.particleDestinationGenerator = We, this.particleDirectionGenerator = We
      }
      startDirectionFunction(kk, ek, ik, Dk) {
        const fk = Sk.j.eH[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== We) this.particleDirectionGenerator(-1, ik, fk);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== We) {
          this.particleDestinationGenerator(-1, ik, fk);
          const kk = Sk.j.eH[1];
          fk.subtractToRef(ik.position, kk), kk.scaleToRef(1 / ik.lifeTime, fk)
        } else fk.set(0, 0, 0);
        Dk ? ek.Fs(fk) : Sk.o.TransformNormalToRef(fk, kk, ek)
      }
      startPositionFunction(kk, ek, ik, Dk) {
        const fk = Sk.j.eH[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== We ? this.particlePositionGenerator(-1, ik, fk) : fk.set(0, 0, 0), Dk ? ek.Fs(fk) : Sk.o.TransformCoordinatesToRef(fk, kk, ek)
      }
      clone() {
        const kk = new te;
        return xk.c.DeepCopy(this, kk), kk
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
    const Xe = Sk.o.Zero(),
      Be = Sk.o.Zero(),
      ce = Sk.o.Zero();
    class Te {
      constructor() {
        this.strength = 0, this.position = Sk.o.Zero()
      }
      _processParticle(kk, ek) {
        this.position.subtractToRef(kk.position, Xe);
        const ik = Xe.lengthSquared() + 1;
        Xe.normalize().scaleToRef(this.strength / ik, Be), Be.scaleToRef(ek._tempScaledUpdateSpeed, ce), kk.direction.addInPlace(ce)
      }
      serialize() {
        return {
          position: this.position.Tik(),
          strength: this.strength
        }
      }
    }
    const oe = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Ze extends ze {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = kk => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const ek = Math.floor(Math.random() * this._subEmitters.length);
          for (const ik of this._subEmitters[ek])
            if (1 === ik.type) {
              const ek = ik.clone();
              kk._inheritParticleInfoToSubEmitter(ek), ek.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(ek.particleSystem), ek.particleSystem.start()
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
        this._flowMap !== kk && (this._flowMap = kk, this._flowMapUpdate && (qe(this._flowMapUpdate), this._flowMapUpdate = null), kk && (this._flowMapUpdate = {
          process: kk => {
            const ek = this.XF()?.getTransformMatrix();
            this._flowMap._processParticle(kk, this.flowMapStrength * this._tempScaledUpdateSpeed, ek)
          },
          previousItem: null,
          nextItem: null
        }, ue(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(kk) {
        super.addAttractor(kk), 1 === this._attractors.length && (this._attractorUpdate = {
          process: kk => {
            for (const ek of this._attractors) ek._processParticle(kk, this)
          },
          previousItem: null,
          nextItem: null
        }, ue(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(kk) {
        super.removeAttractor(kk), 0 === this._attractors.length && this._attractorUpdate && qe(this._attractorUpdate)
      }
      start() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(kk)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const kk of this.subEmitters) kk instanceof Ze ? this._subEmitters.push([new Ee(kk)]) : kk instanceof Ee ? this._subEmitters.push([kk]) : kk instanceof Array && this._subEmitters.push(kk)
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
          const ek = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          kk._properties.attachedSubEmitters = [];
          for (const ik of ek)
            if (0 === ik.type) {
              const ek = ik.clone();
              kk._properties.attachedSubEmitters.push(ek), ek.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), kk && this.particles)
          for (const ik of this.particles)
            if (ik._properties.attachedSubEmitters)
              for (let kk = ik._properties.attachedSubEmitters.length - 1; kk >= 0; kk -= 1) ik._properties.attachedSubEmitters[kk].dispose();
        if (ek && this.activeSubSystems)
          for (let ik = this.activeSubSystems.length - 1; ik >= 0; ik -= 1) this.activeSubSystems[ik].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let kk = 0; kk < this._subEmitters.length; kk++)
            for (const ek of this._subEmitters[kk]) ek.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(kk, ek, ik, Dk) {
        let fk;
        fk = ik instanceof he.c ? null : ik;
        const bk = (0, ve.d)("BABYLON.Texture");
        if (bk && fk)
          if (kk.texture) ek.particleTexture = bk.Parse(kk.texture, fk, Dk);
          else if (kk.textureName) {
          const ik = kk.textureSettings;
          if (ek.particleTexture = new bk(Dk + kk.textureName, fk, !1, void 0 === kk.invertY || kk.invertY, ik ? ik.samplingMode : void 0), ek.particleTexture.name = kk.textureName, ik) {
            const kk = ek.particleTexture;
            for (const ek of oe) void 0 !== ik[ek] && (kk[ek] = ik[ek])
          }
        }
        if (kk.emitterId || 0 === kk.emitterId || void 0 !== kk.emitter ? (kk.emitterId || 0 === kk.emitterId) && fk ? (ek.emitter = fk.getLastMeshById(kk.emitterId), ek.emitter || (ek.emitter = Sk.o.Zero())) : ek.emitter = Sk.o.FromArray(kk.emitter) : ek.emitter = Sk.o.Zero(), ek.isLocal = !!kk.isLocal, void 0 !== kk.renderingGroupId && (ek.renderingGroupId = kk.renderingGroupId), void 0 !== kk.isBillboardBased && (ek.isBillboardBased = kk.isBillboardBased), void 0 !== kk.billboardMode && (ek.billboardMode = kk.billboardMode), void 0 !== kk.useLogarithmicDepth && (ek.useLogarithmicDepth = kk.useLogarithmicDepth), kk.animations) {
          for (let ik = 0; ik < kk.animations.length; ik++) {
            const Dk = kk.animations[ik],
              fk = (0, ve.d)("BABYLON.Animation");
            fk && ek.animations.push(fk.Parse(Dk))
          }
          ek.beginAnimationOnStart = kk.beginAnimationOnStart, ek.beginAnimationFrom = kk.beginAnimationFrom, ek.beginAnimationTo = kk.beginAnimationTo, ek.beginAnimationLoop = kk.beginAnimationLoop
        }
        if (kk.autoAnimate && fk && fk.beginAnimation(ek, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), ek.startDelay = 0 | kk.startDelay, ek.minAngularSpeed = kk.minAngularSpeed, ek.maxAngularSpeed = kk.maxAngularSpeed, ek.minSize = kk.minSize, ek.maxSize = kk.maxSize, kk.minScaleX && (ek.minScaleX = kk.minScaleX, ek.maxScaleX = kk.maxScaleX, ek.minScaleY = kk.minScaleY, ek.maxScaleY = kk.maxScaleY), void 0 !== kk.preWarmCycles && (ek.preWarmCycles = kk.preWarmCycles, ek.preWarmStepOffset = kk.preWarmStepOffset), void 0 !== kk.minInitialRotation && (ek.minInitialRotation = kk.minInitialRotation, ek.maxInitialRotation = kk.maxInitialRotation), ek.minLifeTime = kk.minLifeTime, ek.maxLifeTime = kk.maxLifeTime, ek.minEmitPower = kk.minEmitPower, ek.maxEmitPower = kk.maxEmitPower, ek.emitRate = kk.emitRate, ek.gravity = Sk.o.FromArray(kk.gravity), kk.noiseStrength && (ek.noiseStrength = Sk.o.FromArray(kk.noiseStrength)), ek.color1 = Mk.f.FromArray(kk.color1), ek.color2 = Mk.f.FromArray(kk.color2), ek.colorDead = Mk.f.FromArray(kk.colorDead), ek.updateSpeed = kk.updateSpeed, ek.targetStopDuration = kk.targetStopDuration, ek.blendMode = kk.blendMode, kk.colorGradients)
          for (const Sk of kk.colorGradients) ek.addColorGradient(Sk.gradient, Mk.f.FromArray(Sk.color1), Sk.color2 ? Mk.f.FromArray(Sk.color2) : void 0);
        if (kk.rampGradients) {
          for (const ik of kk.rampGradients) ek.addRampGradient(ik.gradient, Mk.e.FromArray(ik.color));
          ek.useRampGradients = kk.useRampGradients
        }
        if (kk.colorRemapGradients)
          for (const Sk of kk.colorRemapGradients) ek.addColorRemapGradient(Sk.gradient, void 0 !== Sk.factor1 ? Sk.factor1 : Sk.factor, Sk.factor2);
        if (kk.alphaRemapGradients)
          for (const Sk of kk.alphaRemapGradients) ek.addAlphaRemapGradient(Sk.gradient, void 0 !== Sk.factor1 ? Sk.factor1 : Sk.factor, Sk.factor2);
        if (kk.sizeGradients)
          for (const Sk of kk.sizeGradients) ek.addSizeGradient(Sk.gradient, void 0 !== Sk.factor1 ? Sk.factor1 : Sk.factor, Sk.factor2);
        if (kk.angularSpeedGradients)
          for (const Sk of kk.angularSpeedGradients) ek.addAngularSpeedGradient(Sk.gradient, void 0 !== Sk.factor1 ? Sk.factor1 : Sk.factor, Sk.factor2);
        if (kk.velocityGradients)
          for (const Sk of kk.velocityGradients) ek.addVelocityGradient(Sk.gradient, void 0 !== Sk.factor1 ? Sk.factor1 : Sk.factor, Sk.factor2);
        if (kk.dragGradients)
          for (const Sk of kk.dragGradients) ek.addDragGradient(Sk.gradient, void 0 !== Sk.factor1 ? Sk.factor1 : Sk.factor, Sk.factor2);
        if (kk.emitRateGradients)
          for (const Sk of kk.emitRateGradients) ek.addEmitRateGradient(Sk.gradient, void 0 !== Sk.factor1 ? Sk.factor1 : Sk.factor, Sk.factor2);
        if (kk.startSizeGradients)
          for (const Sk of kk.startSizeGradients) ek.addStartSizeGradient(Sk.gradient, void 0 !== Sk.factor1 ? Sk.factor1 : Sk.factor, Sk.factor2);
        if (kk.lifeTimeGradients)
          for (const Sk of kk.lifeTimeGradients) ek.addLifeTimeGradient(Sk.gradient, void 0 !== Sk.factor1 ? Sk.factor1 : Sk.factor, Sk.factor2);
        if (kk.limitVelocityGradients) {
          for (const ik of kk.limitVelocityGradients) ek.addLimitVelocityGradient(ik.gradient, void 0 !== ik.factor1 ? ik.factor1 : ik.factor, ik.factor2);
          ek.limitVelocityDamping = kk.limitVelocityDamping
        }
        if (kk.noiseTexture && fk) {
          const ik = (0, ve.d)("BABYLON.ProceduralTexture");
          ek.noiseTexture = ik.Parse(kk.noiseTexture, fk, Dk)
        }
        let rk;
        if (kk.particleEmitterType) {
          switch (kk.particleEmitterType.type) {
            case "SphereParticleEmitter":
              rk = new wk;
              break;
            case "SphereDirectedParticleEmitter":
              rk = new lk;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              rk = new yk;
              break;
            case "ConeDirectedParticleEmitter":
              rk = new Yk;
              break;
            case "CylinderParticleEmitter":
              rk = new pk.f;
              break;
            case "CylinderDirectedParticleEmitter":
              rk = new pk.c;
              break;
            case "HemisphericParticleEmitter":
              rk = new Hk;
              break;
            case "PointParticleEmitter":
              rk = new Uk;
              break;
            case "MeshParticleEmitter":
              rk = new Lk;
              break;
            case "CustomParticleEmitter":
              rk = new te;
              break;
            default:
              rk = new Kk.d
          }
          rk.parse(kk.particleEmitterType, fk)
        } else rk = new Kk.d, rk.parse(kk, fk);
        ek.particleEmitterType = rk, ek.startSpriteCellID = kk.startSpriteCellID, ek.endSpriteCellID = kk.endSpriteCellID, ek.spriteCellLoop = kk.spriteCellLoop ?? !0, ek.spriteCellWidth = kk.spriteCellWidth, ek.spriteCellHeight = kk.spriteCellHeight, ek.spriteCellChangeSpeed = kk.spriteCellChangeSpeed, ek.spriteRandomStartCell = kk.spriteRandomStartCell, ek.disposeOnStop = kk.disposeOnStop ?? !1, ek.manualEmitCount = kk.manualEmitCount ?? -1
      }
      static Parse(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fk = arguments.length > 4 ? arguments[4] : void 0;
        const bk = kk.name;
        let rk, Pk, mk = null,
          Kk = null;
        if (ek instanceof he.c ? rk = ek : (Pk = ek, rk = Pk.JU()), kk.customShader && (0, Ek.d)(rk.createEffectForParticles)) {
          Kk = kk.customShader;
          const ek = Kk.shaderOptions.defines.length > 0 ? Kk.shaderOptions.defines.join("\n") : "";
          mk = rk.createEffectForParticles(Kk.shaderPath.fragmentElement, Kk.shaderOptions.uniforms, Kk.shaderOptions.samplers, ek)
        }
        const xk = new Ze(bk, fk || kk.vK, ek, mk, kk.isAnimationSheetEnabled);
        if (xk.customShader = Kk, xk._rootUrl = ik, kk.id && (xk.id = kk.id), kk.subEmitters) {
          xk.subEmitters = [];
          for (const Dk of kk.subEmitters) {
            const kk = [];
            for (const fk of Dk) kk.push(Ee.Parse(fk, ek, ik));
            xk.subEmitters.push(kk)
          }
        }
        if (kk.attractors)
          for (const Mk of kk.attractors) {
            const kk = new Te;
            kk.position = Sk.o.FromArray(Mk.position), kk.strength = Mk.strength, xk.addAttractor(kk)
          }
        return Ze._Parse(kk, xk, ek, ik), kk.textureMask && (xk.textureMask = Mk.f.FromArray(kk.textureMask)), kk.worldOffset && (xk.worldOffset = Sk.o.FromArray(kk.worldOffset)), kk.preventAutoStart && (xk.preventAutoStart = kk.preventAutoStart), kk.metadata && (xk.metadata = kk.metadata), Dk || xk.preventAutoStart || xk.start(), xk
      }
      serialize() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = {};
        if (Ze._Serialize(ek, this, kk), ek.textureMask = this.textureMask.Tik(), ek.customShader = this.customShader, ek.preventAutoStart = this.preventAutoStart, ek.worldOffset = this.worldOffset.Tik(), this.metadata && (ek.metadata = this.metadata), this.subEmitters) {
          ek.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const ik of this._subEmitters) {
            const Dk = [];
            for (const ek of ik) ek.particleSystem.doNotSerialize || Dk.push(ek.serialize(kk));
            ek.subEmitters.push(Dk)
          }
        }
        if (this._attractors && this._attractors.length) {
          ek.attractors = [];
          for (const kk of this._attractors) ek.attractors.push(kk.serialize())
        }
        return ek
      }
      static _Serialize(kk, ek, ik) {
        if (kk.name = ek.name, kk.id = ek.id, kk.vK = ek.getCapacity(), kk.disposeOnStop = ek.disposeOnStop, kk.manualEmitCount = ek.manualEmitCount, ek.emitter.position) {
          const ik = ek.emitter;
          kk.emitterId = ik.id
        } else {
          const ik = ek.emitter;
          kk.emitter = ik.Tik()
        }
        if (ek.particleEmitterType && (kk.particleEmitterType = ek.particleEmitterType.serialize()), ek.particleTexture)
          if (ik) kk.texture = ek.particleTexture.serialize();
          else {
            const ik = ek.particleTexture;
            kk.textureName = ek.particleTexture.name, kk.invertY = !!ik._invertY;
            const Dk = {};
            for (const kk of oe) Dk[kk] = ik[kk];
            Dk.samplingMode = ik.samplingMode, kk.textureSettings = Dk
          } kk.isLocal = ek.isLocal, ae.b.AppendSerializedAnimations(ek, kk), kk.beginAnimationOnStart = ek.beginAnimationOnStart, kk.beginAnimationFrom = ek.beginAnimationFrom, kk.beginAnimationTo = ek.beginAnimationTo, kk.beginAnimationLoop = ek.beginAnimationLoop, kk.startDelay = ek.startDelay, kk.renderingGroupId = ek.renderingGroupId, kk.isBillboardBased = ek.isBillboardBased, kk.billboardMode = ek.billboardMode, kk.minAngularSpeed = ek.minAngularSpeed, kk.maxAngularSpeed = ek.maxAngularSpeed, kk.minSize = ek.minSize, kk.maxSize = ek.maxSize, kk.minScaleX = ek.minScaleX, kk.maxScaleX = ek.maxScaleX, kk.minScaleY = ek.minScaleY, kk.maxScaleY = ek.maxScaleY, kk.minEmitPower = ek.minEmitPower, kk.maxEmitPower = ek.maxEmitPower, kk.minLifeTime = ek.minLifeTime, kk.maxLifeTime = ek.maxLifeTime, kk.emitRate = ek.emitRate, kk.gravity = ek.gravity.Tik(), kk.noiseStrength = ek.noiseStrength.Tik(), kk.color1 = ek.color1.Tik(), kk.color2 = ek.color2.Tik(), kk.colorDead = ek.colorDead.Tik(), kk.updateSpeed = ek.updateSpeed, kk.targetStopDuration = ek.targetStopDuration, kk.blendMode = ek.blendMode, kk.preWarmCycles = ek.preWarmCycles, kk.preWarmStepOffset = ek.preWarmStepOffset, kk.minInitialRotation = ek.minInitialRotation, kk.maxInitialRotation = ek.maxInitialRotation, kk.startSpriteCellID = ek.startSpriteCellID, kk.spriteCellLoop = ek.spriteCellLoop, kk.endSpriteCellID = ek.endSpriteCellID, kk.spriteCellChangeSpeed = ek.spriteCellChangeSpeed, kk.spriteCellWidth = ek.spriteCellWidth, kk.spriteCellHeight = ek.spriteCellHeight, kk.spriteRandomStartCell = ek.spriteRandomStartCell, kk.isAnimationSheetEnabled = ek.isAnimationSheetEnabled, kk.useLogarithmicDepth = ek.useLogarithmicDepth;
        const Dk = ek.getColorGradients();
        if (Dk) {
          kk.colorGradients = [];
          for (const ek of Dk) {
            const ik = {
              gradient: ek.gradient,
              color1: ek.color1.Tik()
            };
            ek.color2 ? ik.color2 = ek.color2.Tik() : ik.color2 = ek.color1.Tik(), kk.colorGradients.push(ik)
          }
        }
        const fk = ek.getRampGradients();
        if (fk) {
          kk.rampGradients = [];
          for (const ek of fk) {
            const ik = {
              gradient: ek.gradient,
              color: ek.color.Tik()
            };
            kk.rampGradients.push(ik)
          }
          kk.useRampGradients = ek.useRampGradients
        }
        const Sk = ek.getColorRemapGradients();
        if (Sk) {
          kk.colorRemapGradients = [];
          for (const ek of Sk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.colorRemapGradients.push(ik)
          }
        }
        const bk = ek.getAlphaRemapGradients();
        if (bk) {
          kk.alphaRemapGradients = [];
          for (const ek of bk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.alphaRemapGradients.push(ik)
          }
        }
        const rk = ek.getSizeGradients();
        if (rk) {
          kk.sizeGradients = [];
          for (const ek of rk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.sizeGradients.push(ik)
          }
        }
        const Pk = ek.getAngularSpeedGradients();
        if (Pk) {
          kk.angularSpeedGradients = [];
          for (const ek of Pk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.angularSpeedGradients.push(ik)
          }
        }
        const mk = ek.getVelocityGradients();
        if (mk) {
          kk.velocityGradients = [];
          for (const ek of mk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.velocityGradients.push(ik)
          }
        }
        const Mk = ek.getDragGradients();
        if (Mk) {
          kk.dragGradients = [];
          for (const ek of Mk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.dragGradients.push(ik)
          }
        }
        const Kk = ek.getEmitRateGradients();
        if (Kk) {
          kk.emitRateGradients = [];
          for (const ek of Kk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.emitRateGradients.push(ik)
          }
        }
        const xk = ek.getStartSizeGradients();
        if (xk) {
          kk.startSizeGradients = [];
          for (const ek of xk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.startSizeGradients.push(ik)
          }
        }
        const nk = ek.getLifeTimeGradients();
        if (nk) {
          kk.lifeTimeGradients = [];
          for (const ek of nk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.lifeTimeGradients.push(ik)
          }
        }
        const Uk = ek.getLimitVelocityGradients();
        if (Uk) {
          kk.limitVelocityGradients = [];
          for (const ek of Uk) {
            const ik = {
              gradient: ek.gradient,
              factor1: ek.factor1
            };
            void 0 !== ek.factor2 ? ik.factor2 = ek.factor2 : ik.factor2 = ek.factor1, kk.limitVelocityGradients.push(ik)
          }
          kk.limitVelocityDamping = ek.limitVelocityDamping
        }
        ek.noiseTexture && (kk.noiseTexture = ek.noiseTexture.serialize())
      }
      clone(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = {
          ...this._customWrappers
        };
        let fk = null;
        const Sk = this._engine;
        if ((0, Ek.d)(Sk.createEffectForParticles) && null != this.customShader) {
          fk = this.customShader;
          const kk = fk.shaderOptions.defines.length > 0 ? fk.shaderOptions.defines.join("\n") : "",
            ek = Sk.createEffectForParticles(fk.shaderPath.fragmentElement, fk.shaderOptions.uniforms, fk.shaderOptions.samplers, kk);
          Dk[0] ? Dk[0].effect = ek : this.setCustomEffect(ek, 0)
        }
        const bk = this.serialize(ik),
          rk = !1 === ik && this.particleTexture ? this.particleTexture.clone() : null;
        rk && (bk.textureName = void 0);
        const Pk = Ze.Parse(bk, this._scene || this._engine, this._rootUrl);
        return Pk.name = kk, Pk.customShader = fk, Pk._customWrappers = Dk, rk && (Pk.particleTexture = rk), void 0 === ek && (ek = this.emitter), this.noiseTexture && (Pk.noiseTexture = this.noiseTexture.clone()), Pk.emitter = ek, this.preventAutoStart || Pk.start(), Pk
      }
    }
    Ze.BILLBOARDMODE_Y = 2, Ze.BILLBOARDMODE_ALL = 7, Ze.BILLBOARDMODE_STRETCHED = 8, Ze.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Oe = !1;
    Oe || (Oe = !0, Ee._ParseParticleSystem = Ze.Parse)
  },
  41199: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      SkyMaterial: () => yk,
      _MaxColorValueForRenderTarget: () => pk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(39585),
      bk = ik(36690),
      rk = ik(39853),
      Pk = ik(39937),
      mk = ik(41166),
      Mk = ik(40729),
      Kk = ik(39651),
      xk = ik(36734),
      nk = ik(39966),
      Uk = ik(39946),
      Hk = ik(39919),
      wk = ik(39910);
    class lk extends rk.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function pk(kk) {
      switch (kk) {
        case mk.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case mk.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let yk = (() => {
      var kk;
      let ek, rk, mk, xk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk = Pk.c,
        Ik = [],
        zk = [],
        Qk = [],
        vk = [],
        Ek = [],
        hk = [],
        ak = [],
        Wk = [],
        tk = [],
        Xk = [],
        Bk = [],
        ck = [],
        Tk = [],
        Zk = [],
        Ok = [],
        gk = [],
        Gk = [],
        Nk = [],
        Rk = [],
        Jk = [],
        ke = [],
        ee = [],
        ie = [],
        De = [],
        fe = [],
        Se = [],
        be = [],
        re = [],
        Pe = [],
        me = [];
      return kk = class extends qk {
        constructor(kk, ek) {
          super(kk, ek, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Dk.e)(this, Ik, 1), this.turbidity = ((0, Dk.e)(this, zk), (0, Dk.e)(this, Qk, 10)), this.rayleigh = ((0, Dk.e)(this, vk), (0, Dk.e)(this, Ek, 2)), this.mieCoefficient = ((0, Dk.e)(this, hk), (0, Dk.e)(this, ak, .005)), this.mieDirectionalG = ((0, Dk.e)(this, Wk), (0, Dk.e)(this, tk, .8)), this.distance = ((0, Dk.e)(this, Xk), (0, Dk.e)(this, Bk, 500)), this.inclination = ((0, Dk.e)(this, ck), (0, Dk.e)(this, Tk, .49)), this.azimuth = ((0, Dk.e)(this, Zk), (0, Dk.e)(this, Ok, .25)), this.sunPosition = ((0, Dk.e)(this, gk), (0, Dk.e)(this, Gk, new bk.eH(0, 100, 0))), this.useSunPosition = ((0, Dk.e)(this, Nk), (0, Dk.e)(this, Rk, !1)), this.cameraOffset = ((0, Dk.e)(this, Jk), (0, Dk.e)(this, ke, bk.eH.Zero())), this.up = ((0, Dk.e)(this, ee), (0, Dk.e)(this, ie, bk.eH.Up())), this.dithering = ((0, Dk.e)(this, De), (0, Dk.e)(this, fe, !1)), this.rawHdrOutput = ((0, Dk.e)(this, Se), (0, Dk.e)(this, be, !1)), this.cloudiness = ((0, Dk.e)(this, re), (0, Dk.e)(this, Pe, 0)), this._cameraPosition = ((0, Dk.e)(this, me), bk.eH.Zero()), this._skyOrientation = new bk.Quaternion
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
        isReadyForSubMesh(ek, ik) {
          const Dk = ik._drawWrapper;
          if (this.isFrozen && Dk.effect && Dk._wasPreviouslyReady) return !0;
          ik.materialDefines || (ik.materialDefines = new lk);
          const fk = ik.materialDefines,
            Sk = this.XF();
          if (this._isReadyForSubMesh(ik)) return !0;
          if ((0, wk.tb)(ek, Sk, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, fk, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, wk.db)(ek, fk, !0, !1), fk.IMAGEPROCESSINGPOSTPROCESS !== Sk.imageProcessingConfiguration.applyByPostProcess && fk.markAsMiscDirty(), fk.DITHER !== this.dithering && fk.markAsMiscDirty(), fk.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && fk.markAsMiscDirty(), fk.isDirty) {
            fk.markAsProcessed(), Sk.resetCachedMaterial();
            const ek = new Uk.b;
            fk.FOG && ek.addFallback(1, "FOG"), fk.IMAGEPROCESSINGPOSTPROCESS = Sk.imageProcessingConfiguration.applyByPostProcess, fk.DITHER = this.dithering, fk.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Dk = [Mk.h.PositionKind];
            fk.VERTEXCOLOR && Dk.push(Mk.h.ColorKind);
            const bk = "sky",
              rk = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Hk.d)(rk);
            const Pk = fk.toString();
            ik.setEffect(Sk.JU().createEffect(bk, {
              attributes: Dk,
              uniformsNames: rk,
              uniformBuffersNames: [],
              samplers: [],
              defines: Pk,
              fallbacks: ek,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Sk.JU()), fk, this._materialContext)
          }
          return !(!ik.effect || !ik.effect.isReady()) && (fk._renderId = Sk.getRenderId(), Dk._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(kk, ek, ik) {
          const Dk = this.XF(),
            fk = ik.materialDefines;
          if (!fk) return;
          const Sk = ik.effect;
          if (!Sk) return;
          this._activeEffect = Sk, this.bindOnlyWorldMatrix(kk), this._activeEffect.setMatrix("viewProjection", Dk.getTransformMatrix()), this._mustRebind(Dk, Sk, ik) && ((0, Hk.g)(Sk, this, Dk), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, wk.u)(fk, Sk, Dk)), Dk.fogEnabled && ek.applyFog && Dk.fogMode !== Kk.d.FOGMODE_NONE && this._activeEffect.setMatrix("view", Dk.getViewMatrix()), (0, wk.i)(Dk, ek, this._activeEffect, this.rawHdrOutput);
          const rk = Dk.activeCamera;
          if (rk) {
            const kk = rk.getWorldMatrix();
            this._cameraPosition.x = kk.m[12], this._cameraPosition.y = kk.m[13], this._cameraPosition.z = kk.m[14], this._activeEffect.setVector3("cameraPosition", bk.TmpVectors.eH[0].Fs(this._cameraPosition).KDk(Dk.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const kk = Dk.JU()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", pk(kk?.texture?.type))
          }
          if (!this.useSunPosition) {
            const kk = Math.PI * (this.inclination - .5),
              ek = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(ek) * Math.cos(kk), this.sunPosition.y = this.distance * Math.sin(-kk), this.sunPosition.z = this.distance * Math.sin(ek) * Math.cos(kk), bk.Quaternion.FromUnitVectorsToRef(bk.eH.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(ek, this._activeEffect, ik)
        }
        getAnimatables() {
          return []
        }
        dispose(kk) {
          super.dispose(kk)
        }
        clone(ek) {
          return Sk.b.Clone((() => new kk(ek, this.XF())), this)
        }
        serialize() {
          const kk = super.serialize();
          return kk.customType = "BABYLON.SkyMaterial", kk
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(ek, ik, Dk) {
          return Sk.b.Parse((() => new kk(ek.name, ik)), ek, ik, Dk)
        }
      }, (() => {
        const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(qk[Symbol.metadata] ?? null) : void 0;
        ek = [(0, fk.I)()], rk = [(0, fk.I)()], mk = [(0, fk.I)()], xk = [(0, fk.I)()], yk = [(0, fk.I)()], Yk = [(0, fk.I)()], Lk = [(0, fk.I)()], Ck = [(0, fk.I)()], Ak = [(0, fk.F)()], jk = [(0, fk.I)()], sk = [(0, fk.F)()], dk = [(0, fk.F)()], Vk = [(0, fk.I)()], Fk = [(0, fk.I)()], uk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: kk => "luminance" in kk,
            get: kk => kk.luminance,
            set: (kk, ek) => {
              kk.luminance = ek
            }
          },
          metadata: ik
        }, Ik, zk), (0, Dk.d)(null, null, rk, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: kk => "turbidity" in kk,
            get: kk => kk.turbidity,
            set: (kk, ek) => {
              kk.turbidity = ek
            }
          },
          metadata: ik
        }, Qk, vk), (0, Dk.d)(null, null, mk, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: kk => "rayleigh" in kk,
            get: kk => kk.rayleigh,
            set: (kk, ek) => {
              kk.rayleigh = ek
            }
          },
          metadata: ik
        }, Ek, hk), (0, Dk.d)(null, null, xk, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: kk => "mieCoefficient" in kk,
            get: kk => kk.mieCoefficient,
            set: (kk, ek) => {
              kk.mieCoefficient = ek
            }
          },
          metadata: ik
        }, ak, Wk), (0, Dk.d)(null, null, yk, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: kk => "mieDirectionalG" in kk,
            get: kk => kk.mieDirectionalG,
            set: (kk, ek) => {
              kk.mieDirectionalG = ek
            }
          },
          metadata: ik
        }, tk, Xk), (0, Dk.d)(null, null, Yk, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: kk => "distance" in kk,
            get: kk => kk.distance,
            set: (kk, ek) => {
              kk.distance = ek
            }
          },
          metadata: ik
        }, Bk, ck), (0, Dk.d)(null, null, Lk, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: kk => "inclination" in kk,
            get: kk => kk.inclination,
            set: (kk, ek) => {
              kk.inclination = ek
            }
          },
          metadata: ik
        }, Tk, Zk), (0, Dk.d)(null, null, Ck, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: kk => "azimuth" in kk,
            get: kk => kk.azimuth,
            set: (kk, ek) => {
              kk.azimuth = ek
            }
          },
          metadata: ik
        }, Ok, gk), (0, Dk.d)(null, null, Ak, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: kk => "sunPosition" in kk,
            get: kk => kk.sunPosition,
            set: (kk, ek) => {
              kk.sunPosition = ek
            }
          },
          metadata: ik
        }, Gk, Nk), (0, Dk.d)(null, null, jk, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSunPosition" in kk,
            get: kk => kk.useSunPosition,
            set: (kk, ek) => {
              kk.useSunPosition = ek
            }
          },
          metadata: ik
        }, Rk, Jk), (0, Dk.d)(null, null, sk, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: kk => "cameraOffset" in kk,
            get: kk => kk.cameraOffset,
            set: (kk, ek) => {
              kk.cameraOffset = ek
            }
          },
          metadata: ik
        }, ke, ee), (0, Dk.d)(null, null, dk, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: kk => "up" in kk,
            get: kk => kk.up,
            set: (kk, ek) => {
              kk.up = ek
            }
          },
          metadata: ik
        }, ie, De), (0, Dk.d)(null, null, Vk, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: kk => "dithering" in kk,
            get: kk => kk.dithering,
            set: (kk, ek) => {
              kk.dithering = ek
            }
          },
          metadata: ik
        }, fe, Se), (0, Dk.d)(null, null, Fk, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: kk => "rawHdrOutput" in kk,
            get: kk => kk.rawHdrOutput,
            set: (kk, ek) => {
              kk.rawHdrOutput = ek
            }
          },
          metadata: ik
        }, be, re), (0, Dk.d)(null, null, uk, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: kk => "cloudiness" in kk,
            get: kk => kk.cloudiness,
            set: (kk, ek) => {
              kk.cloudiness = ek
            }
          },
          metadata: ik
        }, Pe, me), ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ik
        })
      })(), kk._ShaderLoader = new nk.e((() => [ik.e(329).then((() => ik(60723))), ik.e(322).then((() => ik(60726)))]), (() => [ik.e(346).then((() => ik(60734))), ik.e(340).then((() => ik(60742)))])), kk
    })();
    (0, xk.h)("BABYLON.SkyMaterial", yk)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);