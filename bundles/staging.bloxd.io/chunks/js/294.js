export const id = 294;
export const ids = [294];
export const modules = {
  41045: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(39506),
      tk = Bk(41049);
    class ak {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = Bk, this.BRk = [], this._maxBlockCapacity = Fk || 64, this._selectionContent = new Rk.b(1024), this._creationFunc = kk
      }
      update(kk, Fk, Bk) {
        tk.e._CreateBlocks(kk, Fk, Bk, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      qBk(kk) {
        for (let Fk = 0; Fk < this.blocks.length; Fk++) {
          this.blocks[Fk].addEntry(kk)
        }
      }
      hN(kk) {
        for (let Fk = 0; Fk < this.blocks.length; Fk++) {
          this.blocks[Fk].removeEntry(kk)
        }
      }
      select(kk, Fk) {
        this._selectionContent.reset();
        for (let Bk = 0; Bk < this.blocks.length; Bk++) {
          this.blocks[Bk].select(kk, this._selectionContent, Fk)
        }
        return Fk ? this._selectionContent.concat(this.BRk) : this._selectionContent.concatWithNoDuplicate(this.BRk), this._selectionContent
      }
      intersects(kk, Fk, Bk) {
        this._selectionContent.reset();
        for (let Rk = 0; Rk < this.blocks.length; Rk++) {
          this.blocks[Rk].intersects(kk, Fk, this._selectionContent, Bk)
        }
        return Bk ? this._selectionContent.concat(this.BRk) : this._selectionContent.concatWithNoDuplicate(this.BRk), this._selectionContent
      }
      intersectsRay(kk) {
        this._selectionContent.reset();
        for (let Fk = 0; Fk < this.blocks.length; Fk++) {
          this.blocks[Fk].intersectsRay(kk, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.BRk), this._selectionContent
      }
    }
    ak.CreationFuncForMeshes = (kk, Fk) => {
      const Bk = kk.ZH();
      !kk.isBlocked && Bk.boundingBox.intersectsMinMax(Fk.xBk, Fk.KBk) && Fk.entries.push(kk)
    }, ak.CreationFuncForSubMeshes = (kk, Fk) => {
      kk.ZH().boundingBox.intersectsMinMax(Fk.xBk, Fk.KBk) && Fk.entries.push(kk)
    }
  },
  41049: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(36758),
      tk = Bk(39721);
    class ak {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.entries = [], this.RRk = new Array, this._capacity = Bk, this._depth = Rk, this._maxDepth = tk, this._creationFunc = ak, this._minPoint = kk, this._maxPoint = Fk, this.RRk.push(kk.clone()), this.RRk.push(Fk.clone()), this.RRk.push(kk.clone()), this.RRk[2].x = Fk.x, this.RRk.push(kk.clone()), this.RRk[3].y = Fk.y, this.RRk.push(kk.clone()), this.RRk[4].z = Fk.z, this.RRk.push(Fk.clone()), this.RRk[5].z = kk.z, this.RRk.push(Fk.clone()), this.RRk[6].x = kk.x, this.RRk.push(Fk.clone()), this.RRk[7].y = kk.y
      }
      get KV() {
        return this._capacity
      }
      get xBk() {
        return this._minPoint
      }
      get KBk() {
        return this._maxPoint
      }
      addEntry(kk) {
        if (this.blocks)
          for (let Fk = 0; Fk < this.blocks.length; Fk++) {
            this.blocks[Fk].addEntry(kk)
          } else this._creationFunc(kk, this), this.entries.length > this.KV && this._depth < this._maxDepth && this.createInnerBlocks()
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
          const Bk = kk[Fk];
          this.addEntry(Bk)
        }
      }
      select(kk, Fk, Bk) {
        if (tk.d.IsInFrustum(this.RRk, kk)) {
          if (this.blocks) {
            for (let Rk = 0; Rk < this.blocks.length; Rk++) {
              this.blocks[Rk].select(kk, Fk, Bk)
            }
            return
          }
          Bk ? Fk.concat(this.entries) : Fk.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(kk, Fk, Bk, Rk) {
        if (tk.d.IntersectsSphere(this._minPoint, this._maxPoint, kk, Fk)) {
          if (this.blocks) {
            for (let tk = 0; tk < this.blocks.length; tk++) {
              this.blocks[tk].intersects(kk, Fk, Bk, Rk)
            }
            return
          }
          Rk ? Bk.concat(this.entries) : Bk.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(kk, Fk) {
        if (kk.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let Bk = 0; Bk < this.blocks.length; Bk++) {
              this.blocks[Bk].intersectsRay(kk, Fk)
            }
            return
          }
          Fk.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        ak._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(kk, Fk, Bk, tk, Xk, bk, wk, dk) {
        wk.blocks = new Array;
        const sk = new Rk.s((Fk.x - kk.x) / 2, (Fk.y - kk.y) / 2, (Fk.z - kk.z) / 2);
        for (let Rk = 0; Rk < 2; Rk++)
          for (let Fk = 0; Fk < 2; Fk++)
            for (let Vk = 0; Vk < 2; Vk++) {
              const Jk = kk.add(sk.multiplyByFloats(Rk, Fk, Vk)),
                Ak = kk.add(sk.multiplyByFloats(Rk + 1, Fk + 1, Vk + 1)),
                ek = new ak(Jk, Ak, tk, Xk + 1, bk, dk);
              ek.addEntries(Bk), wk.blocks.push(ek)
            }
      }
    }
  },
  41056: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => sk
    });
    var Rk = Bk(39489),
      tk = Bk(36758),
      ak = Bk(39853),
      Xk = Bk(40992),
      bk = Bk(39575),
      wk = Bk(36772),
      dk = Bk(41045);
    class sk {
      constructor(kk) {
        this.name = bk.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Xk.A(tk.s.Zero(), new tk.s(1, 1, 1)), (kk = kk || wk.c.LastCreatedScene) && (this.ef = kk, this.ef.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.ef.getActiveSubMeshCandidates = kk => this.getActiveSubMeshCandidates(kk), this.ef.getCollidingSubMeshCandidates = (kk, Fk) => this.getCollidingSubMeshCandidates(kk, Fk), this.ef.getIntersectingSubMeshCandidates = (kk, Fk) => this.getIntersectingSubMeshCandidates(kk, Fk))
      }
      register() {
        this.ef.onMeshRemovedObservable.add((kk => {
          const Fk = this.ef.selectionOctree;
          if (void 0 !== Fk && null !== Fk) {
            const Bk = Fk.BRk.indexOf(kk); - 1 !== Bk && Fk.BRk.splice(Bk, 1)
          }
        })), this.ef.onMeshImportedObservable.add((kk => {
          const Fk = this.ef.selectionOctree;
          void 0 !== Fk && null !== Fk && Fk.qBk(kk)
        }))
      }
      getActiveMeshCandidates() {
        return this.ef.sRk?.select(this.ef.frustumPlanes) || this.ef._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(kk) {
        if (kk._submeshesOctree && kk.useOctreeForRenderingSelection) {
          return kk._submeshesOctree.select(this.ef.frustumPlanes)
        }
        return this.ef._getDefaultSubMeshCandidates(kk)
      }
      getIntersectingSubMeshCandidates(kk, Fk) {
        if (kk._submeshesOctree && kk.useOctreeForPicking) {
          Xk.A.TransformToRef(Fk, kk.getWorldMatrix(), this._tempRay);
          return kk._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.ef._getDefaultSubMeshCandidates(kk)
      }
      getCollidingSubMeshCandidates(kk, Fk) {
        if (kk._submeshesOctree && kk.useOctreeForCollisions) {
          const Bk = Fk._velocityWorldLength + Math.max(Fk._radius.x, Fk._radius.y, Fk._radius.z);
          return kk._submeshesOctree.intersects(Fk._basePointWorld, Bk)
        }
        return this.ef._getDefaultSubMeshCandidates(kk)
      }
      rebuild() {}
      dispose() {}
    }
    let Vk = !1;
    Vk || (Vk = !0, Rk.c.prototype.createOrUpdateSelectionOctree = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        Bk = this._getComponent(bk.b.NAME_OCTREE);
      Bk || (Bk = new sk(this), this.SBk(Bk)), this.sRk || (this.sRk = new dk.d(dk.d.CreationFuncForMeshes, kk, Fk));
      const Rk = this.getWorldExtends();
      return this.sRk.update(Rk.min, Rk.max, this.meshes), this.sRk
    }, Object.defineProperty(Rk.c.prototype, "selectionOctree", {
      get: function() {
        return this.sRk
      },
      enumerable: !0,
      configurable: !0
    }), ak.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Bk = this.XN();
      let Rk = Bk._getComponent(bk.b.NAME_OCTREE);
      Rk || (Rk = new sk(Bk), Bk.SBk(Rk)), this._submeshesOctree || (this._submeshesOctree = new dk.d(dk.d.CreationFuncForSubMeshes, kk, Fk)), this.computeWorldMatrix(!0);
      const tk = this.ZH().boundingBox;
      return this._submeshesOctree.update(tk.minimumWorld, tk.maximumWorld, this.AY), this._submeshesOctree
    })
  },
  40992: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Vk,
      b: () => Mk,
      d: () => yk,
      g: () => ek,
      j: () => Ak,
      n: () => Hk,
      p: () => Nk,
      s: () => Ok,
      t: () => Sk,
      x: () => Ek
    });
    var Rk = Bk(36764),
      tk = Bk(36758),
      ak = Bk(36768),
      Xk = Bk(39709),
      bk = Bk(39537),
      wk = Bk(36772),
      dk = Bk(39598);
    const sk = {
      internalPickerForMesh: void 0
    };
    class Vk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Rk.c;
        this.origin = kk, this.direction = Fk, this.length = Bk, this.epsilon = tk
      }
      clone() {
        return new Vk(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Rk = Vk._TmpVector3[0].E1(kk.x - Bk, kk.y - Bk, kk.z - Bk),
          tk = Vk._TmpVector3[1].E1(Fk.x + Bk, Fk.y + Bk, Fk.z + Bk);
        let ak, Xk, bk, wk, dk = 0,
          sk = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Rk.x || this.origin.x > tk.x) return !1
        } else if (ak = 1 / this.direction.x, Xk = (Rk.x - this.origin.x) * ak, bk = (tk.x - this.origin.x) * ak, bk === -1 / 0 && (bk = 1 / 0), Xk > bk && (wk = Xk, Xk = bk, bk = wk), dk = Math.max(Xk, dk), sk = Math.min(bk, sk), dk > sk) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Rk.y || this.origin.y > tk.y) return !1
        } else if (ak = 1 / this.direction.y, Xk = (Rk.y - this.origin.y) * ak, bk = (tk.y - this.origin.y) * ak, bk === -1 / 0 && (bk = 1 / 0), Xk > bk && (wk = Xk, Xk = bk, bk = wk), dk = Math.max(Xk, dk), sk = Math.min(bk, sk), dk > sk) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Rk.z || this.origin.z > tk.z) return !1
        } else if (ak = 1 / this.direction.z, Xk = (Rk.z - this.origin.z) * ak, bk = (tk.z - this.origin.z) * ak, bk === -1 / 0 && (bk = 1 / 0), Xk > bk && (wk = Xk, Xk = bk, bk = wk), dk = Math.max(Xk, dk), sk = Math.min(bk, sk), dk > sk) return !1;
        return !0
      }
      intersectsBox(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(kk.minimum, kk.maximum, Fk)
      }
      intersectsSphere(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = kk.center.x - this.origin.x,
          Rk = kk.center.y - this.origin.y,
          tk = kk.center.z - this.origin.z,
          ak = Bk * Bk + Rk * Rk + tk * tk,
          Xk = kk.radius + Fk,
          bk = Xk * Xk;
        if (ak <= bk) return !0;
        const wk = Bk * this.direction.x + Rk * this.direction.y + tk * this.direction.z;
        if (wk < 0) return !1;
        return ak - wk * wk <= bk
      }
      intersectsTriangle(kk, Fk, Bk) {
        const Rk = Vk._TmpVector3[0],
          ak = Vk._TmpVector3[1],
          bk = Vk._TmpVector3[2],
          wk = Vk._TmpVector3[3],
          dk = Vk._TmpVector3[4];
        Fk.subtractToRef(kk, Rk), Bk.subtractToRef(kk, ak), tk.s.CrossToRef(this.direction, ak, bk);
        const sk = tk.s.Dot(Rk, bk);
        if (0 === sk) return null;
        const Jk = 1 / sk;
        this.origin.subtractToRef(kk, wk);
        const Ak = tk.s.Dot(wk, bk) * Jk;
        if (Ak < -this.epsilon || Ak > 1 + this.epsilon) return null;
        tk.s.CrossToRef(wk, Rk, dk);
        const ek = tk.s.Dot(this.direction, dk) * Jk;
        if (ek < -this.epsilon || Ak + ek > 1 + this.epsilon) return null;
        const yk = tk.s.Dot(ak, dk) * Jk;
        return yk > this.length || yk < 0 ? null : new Xk.c(1 - Ak - ek, Ak, yk)
      }
      intersectsPlane(kk) {
        let Fk;
        const Bk = tk.s.Dot(kk.normal, this.direction);
        if (Math.abs(Bk) < 9.99999997475243e-7) return null;
        {
          const Rk = tk.s.Dot(kk.normal, this.origin);
          return Fk = (-kk.d - Rk) / Bk, Fk < 0 ? Fk < -9.99999997475243e-7 ? null : 0 : Fk
        }
      }
      intersectsAxis(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (kk) {
          case "y": {
            const kk = (this.origin.y - Fk) / this.direction.y;
            return kk > 0 ? null : new tk.s(this.origin.x + this.direction.x * -kk, Fk, this.origin.z + this.direction.z * -kk)
          }
          case "x": {
            const kk = (this.origin.x - Fk) / this.direction.x;
            return kk > 0 ? null : new tk.s(Fk, this.origin.y + this.direction.y * -kk, this.origin.z + this.direction.z * -kk)
          }
          case "z": {
            const kk = (this.origin.z - Fk) / this.direction.z;
            return kk > 0 ? null : new tk.s(this.origin.x + this.direction.x * -kk, this.origin.y + this.direction.y * -kk, Fk)
          }
          default:
            return null
        }
      }
      NRk(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ak = arguments.length > 4 ? arguments[4] : void 0,
          Xk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const bk = tk.l.Matrix[0];
        return kk.getWorldMatrix().invertToRef(bk), this._tmpRay ? Vk.TransformToRef(this, bk, this._tmpRay) : this._tmpRay = Vk.Transform(this, bk), kk.intersects(this._tmpRay, Fk, Bk, Rk, ak, Xk)
      }
      intersectsMeshes(kk, Fk, Bk) {
        Bk ? Bk.length = 0 : Bk = [];
        for (let Rk = 0; Rk < kk.length; Rk++) {
          const tk = this.NRk(kk[Rk], Fk);
          tk.hit && Bk.push(tk)
        }
        return Bk.sort(this._comparePickingInfo), Bk
      }
      _comparePickingInfo(kk, Fk) {
        return kk.distance < Fk.distance ? -1 : kk.distance > Fk.distance ? 1 : 0
      }
      intersectionSegment(kk, Fk, Bk) {
        const Rk = this.origin,
          ak = tk.l.Qe[0],
          Xk = tk.l.Qe[1],
          bk = tk.l.Qe[2],
          wk = tk.l.Qe[3];
        Fk.subtractToRef(kk, ak), this.direction.scaleToRef(Vk._Rayl, bk), Rk.addToRef(bk, Xk), kk.subtractToRef(Rk, wk);
        const dk = tk.s.Dot(ak, ak),
          sk = tk.s.Dot(ak, bk),
          Jk = tk.s.Dot(bk, bk),
          Ak = tk.s.Dot(ak, wk),
          ek = tk.s.Dot(bk, wk),
          yk = dk * Jk - sk * sk;
        let fk, mk, Wk = yk,
          vk = yk;
        yk < Vk._Smallnum ? (fk = 0, Wk = 1, mk = ek, vk = Jk) : (fk = sk * ek - Jk * Ak, mk = dk * ek - sk * Ak, fk < 0 ? (fk = 0, mk = ek, vk = Jk) : fk > Wk && (fk = Wk, mk = ek + sk, vk = Jk)), mk < 0 ? (mk = 0, -Ak < 0 ? fk = 0 : -Ak > dk ? fk = Wk : (fk = -Ak, Wk = dk)) : mk > vk && (mk = vk, -Ak + sk < 0 ? fk = 0 : -Ak + sk > dk ? fk = Wk : (fk = -Ak + sk, Wk = dk));
        const ik = Math.abs(fk) < Vk._Smallnum ? 0 : fk / Wk,
          Yk = Math.abs(mk) < Vk._Smallnum ? 0 : mk / vk,
          Lk = tk.l.Qe[4];
        bk.scaleToRef(Yk, Lk);
        const Ok = tk.l.Qe[5];
        ak.scaleToRef(ik, Ok), Ok.addInPlace(wk);
        const Ek = tk.l.Qe[6];
        Ok.subtractToRef(Lk, Ek);
        return Yk > 0 && Yk <= this.length && Ek.lengthSquared() < Bk * Bk ? Ok.length() : -1
      }
      update(kk, Fk, Bk, Rk, ak, Xk, bk) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Vk._RayDistant || (Vk._RayDistant = Vk.Zero()), Vk._RayDistant.unprojectRayToRef(kk, Fk, Bk, Rk, tk.c.IdentityReadOnly, Xk, bk);
          const wk = tk.l.Matrix[0];
          ak.invertToRef(wk), Vk.TransformToRef(Vk._RayDistant, wk, this)
        } else this.unprojectRayToRef(kk, Fk, Bk, Rk, ak, Xk, bk);
        return this
      }
      static Zero() {
        return new Vk(tk.s.Zero(), tk.s.Zero())
      }
      static CreateNew(kk, Fk, Bk, Rk, tk, ak, Xk) {
        return Vk.Zero().update(kk, Fk, Bk, Rk, tk, ak, Xk)
      }
      static CreateNewFromTo(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tk.c.IdentityReadOnly;
        const Rk = new Vk(new tk.s(0, 0, 0), new tk.s(0, 0, 0));
        return Vk.CreateFromToToRef(kk, Fk, Rk, Bk)
      }
      static CreateFromToToRef(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tk.c.IdentityReadOnly;
        Bk.origin.sBk(kk);
        const ak = Fk.subtractToRef(kk, Bk.direction),
          Xk = Math.sqrt(ak.x * ak.x + ak.y * ak.y + ak.z * ak.z);
        return Bk.length = Xk, Bk.direction.normalize(), Vk.TransformToRef(Bk, Rk, Bk)
      }
      static Transform(kk, Fk) {
        const Bk = new Vk(new tk.s(0, 0, 0), new tk.s(0, 0, 0));
        return Vk.TransformToRef(kk, Fk, Bk), Bk
      }
      static TransformToRef(kk, Fk, Bk) {
        tk.s.TransformCoordinatesToRef(kk.origin, Fk, Bk.origin), tk.s.TransformNormalToRef(kk.direction, Fk, Bk.direction), Bk.length = kk.length, Bk.epsilon = kk.epsilon;
        const Rk = Bk.direction,
          ak = Rk.length();
        if (0 !== ak && 1 !== ak) {
          const kk = 1 / ak;
          Rk.x *= kk, Rk.y *= kk, Rk.z *= kk, Bk.length *= ak
        }
        return Bk
      }
      unprojectRayToRef(kk, Fk, Bk, Rk, ak, Xk, bk) {
        const dk = tk.l.Matrix[0];
        ak.multiplyToRef(Xk, dk), dk.multiplyToRef(bk, dk), dk.invert();
        const sk = wk.c.LastCreatedEngine,
          Vk = tk.l.Qe[0];
        Vk.x = kk / Bk * 2 - 1, Vk.y = -(Fk / Rk * 2 - 1), Vk.z = sk?.rBk ? 1 : sk?.isNDCHalfZRange ? 0 : -1;
        const Jk = tk.l.Qe[1].E1(Vk.x, Vk.y, 1 - 1e-8),
          Ak = tk.l.Qe[2],
          ek = tk.l.Qe[3];
        tk.s.TransformCoordinatesToRef(Vk, dk, Ak), tk.s.TransformCoordinatesToRef(Jk, dk, ek), this.origin.sBk(Ak), ek.subtractToRef(Ak, this.direction), this.direction.normalize()
      }
    }

    function Jk(kk, Fk, Bk, Rk, tk) {
      let ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Xk = Vk.Zero();
      return Ak(kk, Fk, Bk, Rk, Xk, tk, ak), Xk
    }

    function Ak(kk, Fk, Bk, Rk, ak, Xk) {
      let bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        wk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const dk = kk.ne();
      if (!Xk && !(Xk = kk.activeCamera) && !(Xk = kk.cameraToUseForPointers)) return kk;
      const sk = Xk.viewport,
        Vk = dk.getRenderHeight(),
        {
          x: Jk,
          y: Ak,
          width: ek,
          height: yk
        } = sk.toGlobal(dk.getRenderWidth(), Vk),
        fk = 1 / dk.getHardwareScalingLevel();
      return Fk = Fk * fk - Jk, Bk = Bk * fk - (Vk - Ak - yk), ak.update(Fk, Bk, ek, yk, Rk || tk.c.IdentityReadOnly, bk ? tk.c.IdentityReadOnly : Xk.getViewMatrix(), Xk.getProjectionMatrix(), wk), kk
    }

    function ek(kk, Fk, Bk, Rk) {
      const tk = Vk.Zero();
      return yk(kk, Fk, Bk, tk, Rk), tk
    }

    function yk(kk, Fk, Bk, Rk, ak) {
      if (!bk.c) return kk;
      const Xk = kk.ne();
      if (!ak && !(ak = kk.activeCamera) && !(ak = kk.cameraToUseForPointers)) throw new Error("Active camera not set");
      const wk = ak.viewport,
        dk = Xk.getRenderHeight(),
        {
          x: sk,
          y: Vk,
          width: Jk,
          height: Ak
        } = wk.toGlobal(Xk.getRenderWidth(), dk),
        ek = tk.c.Identity(),
        yk = 1 / Xk.getHardwareScalingLevel();
      return Fk = Fk * yk - sk, Bk = Bk * yk - (dk - Vk - Ak), Rk.update(Fk, Bk, Jk, Ak, ek, ek, ak.getProjectionMatrix()), kk
    }

    function fk(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
      return mk(kk, Bk, Rk, Fk(Rk, Bk.enableDistantPicking), tk, ak, Xk, bk)
    }

    function mk(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
      const wk = Fk.intersects(Rk, tk, Xk, ak, Bk, bk);
      return wk && wk.hit ? !tk && null != kk && wk.distance >= kk.distance ? null : wk : null
    }

    function Wk(kk, Fk) {
      return "InstancedLinesMesh" === kk || "LinesMesh" === kk ? Fk.intersectionThreshold : 0
    }

    function vk(kk) {
      const Fk = kk.getClassName();
      if ("GreasedLineMesh" === Fk) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const Bk = kk.rawBoundingInfo;
      return {
        rawBoundingInfo: Bk,
        intersectionThreshold: Bk ? Wk(Fk, kk) : 0
      }
    }

    function ik(kk, Fk, Bk, Rk, tk) {
      const ak = kk(Bk, Fk.enableDistantPicking);
      return ak.intersectsSphere(Rk.JRk, tk) && ak.intersectsBox(Rk.boundingBox, tk) ? ak : null
    }

    function Yk(kk, Fk, Bk, Rk, ak, Xk) {
      let wk = null;
      const dk = !!(kk.activeCameras && kk.activeCameras.length > 1 && kk.cameraToUseForPointers !== kk.activeCamera),
        Vk = kk.cameraToUseForPointers || kk.activeCamera,
        Jk = sk.internalPickerForMesh || fk,
        Ak = Jk === fk;
      for (let bk = 0; bk < kk.meshes.length; bk++) {
        const sk = kk.meshes[bk];
        if (Bk) {
          if (!Bk(sk, -1)) continue
        } else if (!sk.isEnabled() || !sk.isVisible || !sk.ff) continue;
        const ek = dk && sk.isWorldMatrixCameraDependent(),
          yk = sk.computeWorldMatrix(ek, Vk);
        if (sk.hasThinInstances && sk.wFk) {
          const kk = Jk(wk, Fk, sk, yk, !0, !0, Xk);
          if (kk) {
            if (ak) return kk;
            const {
              rawBoundingInfo: bk,
              intersectionThreshold: dk
            } = vk(sk), Vk = sk._thinInstanceDataStorage.matrixData;
            if (Vk) {
              const kk = tk.l.Matrix[0],
                ek = tk.l.Matrix[1],
                fk = Math.min(sk.i_, Vk.length >> 4);
              for (let Wk = 0; Wk < fk; Wk++) {
                if (Bk && !Bk(sk, Wk)) continue;
                tk.c.FromArrayToRef(Vk, Wk << 4, kk), kk.multiplyToRef(yk, ek);
                const fk = Ak && bk ? ik(Fk, sk, ek, bk, dk) : null;
                if (Ak && bk && !fk) continue;
                const vk = Ak && fk ? mk(wk, sk, ek, fk, Rk, ak, Xk, !0) : Jk(wk, Fk, sk, ek, Rk, ak, Xk, !0);
                if (vk && (wk = vk, wk.thinInstanceIndex = Wk, Rk)) return wk
              }
            }
          }
        } else {
          const kk = Jk(wk, Fk, sk, yk, Rk, ak, Xk);
          if (kk && (wk = kk, Rk)) return wk
        }
      }
      return wk || new bk.c
    }

    function Lk(kk, Fk, Bk, Rk) {
      if (!bk.c) return null;
      const ak = [],
        Xk = !!(kk.activeCameras && kk.activeCameras.length > 1 && kk.cameraToUseForPointers !== kk.activeCamera),
        wk = kk.cameraToUseForPointers || kk.activeCamera,
        dk = sk.internalPickerForMesh || fk,
        Vk = dk === fk;
      for (let bk = 0; bk < kk.meshes.length; bk++) {
        const sk = kk.meshes[bk];
        if (Bk) {
          if (!Bk(sk, -1)) continue
        } else if (!sk.isEnabled() || !sk.isVisible || !sk.ff) continue;
        const Jk = Xk && sk.isWorldMatrixCameraDependent(),
          Ak = sk.computeWorldMatrix(Jk, wk);
        if (sk.hasThinInstances && sk.wFk) {
          if (dk(null, Fk, sk, Ak, !0, !0, Rk)) {
            const {
              rawBoundingInfo: kk,
              intersectionThreshold: Xk
            } = vk(sk), bk = sk._thinInstanceDataStorage.matrixData;
            if (bk) {
              const wk = tk.l.Matrix[0],
                Jk = tk.l.Matrix[1],
                ek = Math.min(sk.i_, bk.length >> 4);
              for (let yk = 0; yk < ek; yk++) {
                if (Bk && !Bk(sk, yk)) continue;
                tk.c.FromArrayToRef(bk, yk << 4, wk), wk.multiplyToRef(Ak, Jk);
                const ek = Vk && kk ? ik(Fk, sk, Jk, kk, Xk) : null;
                if (Vk && kk && !ek) continue;
                const fk = Vk && ek ? mk(null, sk, Jk, ek, !1, !1, Rk, !0) : dk(null, Fk, sk, Jk, !1, !1, Rk, !0);
                fk && (fk.thinInstanceIndex = yk, ak.push(fk))
              }
            }
          }
        } else {
          const kk = dk(null, Fk, sk, Ak, !1, !1, Rk);
          kk && ak.push(kk)
        }
      }
      return ak
    }

    function Ok(kk, Fk, Bk, Rk, ak, Xk) {
      if (!bk.c) return null;
      const wk = Yk(kk, (Rk => (kk._tempPickingRay || (kk._tempPickingRay = Vk.Zero()), Ak(kk, Fk, Bk, Rk, kk._tempPickingRay, Xk || null), kk._tempPickingRay)), Rk, ak, !0);
      return wk && (wk.ray = Jk(kk, Fk, Bk, tk.c.Identity(), Xk || null)), wk
    }

    function Ek(kk, Fk, Bk, Rk, ak, Xk, bk) {
      const wk = Yk(kk, ((Rk, tk) => (kk._tempPickingRay || (kk._tempPickingRay = Vk.Zero()), Ak(kk, Fk, Bk, Rk, kk._tempPickingRay, Xk || null, !1, tk), kk._tempPickingRay)), Rk, ak, !1, bk);
      return wk && (wk.ray = Jk(kk, Fk, Bk, tk.c.Identity(), Xk || null)), wk
    }

    function Sk(kk, Fk, Bk, Rk, ak) {
      const Xk = Yk(kk, (Bk => (kk._pickWithRayInverseMatrix || (kk._pickWithRayInverseMatrix = tk.c.Identity()), Bk.invertToRef(kk._pickWithRayInverseMatrix), kk._cachedRayForTransform || (kk._cachedRayForTransform = Vk.Zero()), Vk.TransformToRef(Fk, kk._pickWithRayInverseMatrix, kk._cachedRayForTransform), kk._cachedRayForTransform)), Bk, Rk, !1, ak);
      return Xk && (Xk.ray = Fk), Xk
    }

    function Nk(kk, Fk, Bk, Rk, tk, ak) {
      return Lk(kk, (Rk => Jk(kk, Fk, Bk, Rk, tk || null)), Rk, ak)
    }

    function Hk(kk, Fk, Bk, Rk) {
      return Lk(kk, (Bk => (kk._pickWithRayInverseMatrix || (kk._pickWithRayInverseMatrix = tk.c.Identity()), Bk.invertToRef(kk._pickWithRayInverseMatrix), kk._cachedRayForTransform || (kk._cachedRayForTransform = Vk.Zero()), Vk.TransformToRef(Fk, kk._pickWithRayInverseMatrix, kk._cachedRayForTransform), kk._cachedRayForTransform)), Bk, Rk)
    }

    function uk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Rk = arguments.length > 3 ? arguments[3] : void 0,
        ak = arguments.length > 4 ? arguments[4] : void 0;
      Rk || (Rk = kk.getWorldMatrix()), Fk.length = Bk, ak ? Fk.origin.sBk(ak) : Fk.origin.sBk(kk.position);
      const Xk = tk.l.Qe[2];
      Xk.set(0, 0, kk._scene.useRightHandedSystem ? -1 : 1);
      const bk = tk.l.Qe[3];
      return tk.s.TransformNormalToRef(Xk, Rk, bk), tk.s.NormalizeToRef(bk, Fk.direction), Fk
    }

    function Mk(kk, Fk) {
      Fk && (Fk.prototype.getForwardRay = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        return uk(this, new Vk(tk.s.Zero(), tk.s.Zero(), kk), kk, Fk, Bk)
      }, Fk.prototype.getForwardRayToRef = function(kk) {
        return uk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), kk && (dk.b._IsPickingAvailable = !0, kk.prototype.createPickingRay = function(kk, Fk, Bk, Rk) {
        return Jk(this, kk, Fk, Bk, Rk, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Vk._TmpVector3 = (0, ak.c)(6, tk.s.Zero), Vk._RayDistant = Vk.Zero(), Vk._Smallnum = 1e-8, Vk._Rayl = 1e9
  },
  40990: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak.A
    });
    var Rk = Bk(39489),
      tk = Bk(39623),
      ak = Bk(40992);
    let Xk = !1;
    Xk || (Xk = !0, (0, ak.b)(Rk.c, tk.c), Rk.c.prototype.createPickingRayToRef = function(kk, Fk, Bk, Rk, tk) {
      let Xk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ak.j)(this, kk, Fk, Bk, Rk, tk, Xk, bk)
    }, Rk.c.prototype.createPickingRayInCameraSpace = function(kk, Fk, Bk) {
      return (0, ak.g)(this, kk, Fk, Bk)
    }, Rk.c.prototype.createPickingRayInCameraSpaceToRef = function(kk, Fk, Bk, Rk) {
      return (0, ak.d)(this, kk, Fk, Bk, Rk)
    }, Rk.c.prototype.pickWithBoundingInfo = function(kk, Fk, Bk, Rk, tk) {
      return (0, ak.s)(this, kk, Fk, Bk, Rk, tk)
    }, Rk.c.prototype.AA = function(kk, Fk, Bk, Rk, tk, Xk) {
      let bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ak.x)(this, kk, Fk, Bk, Rk, tk, Xk, bk)
    }, Rk.c.prototype.pickWithRay = function(kk, Fk, Bk, Rk) {
      return (0, ak.t)(this, kk, Fk, Bk, Rk)
    }, Rk.c.prototype.multiPick = function(kk, Fk, Bk, Rk, tk) {
      return (0, ak.p)(this, kk, Fk, Bk, Rk, tk)
    }, Rk.c.prototype.multiPickWithRay = function(kk, Fk, Bk) {
      return (0, ak.n)(this, kk, Fk, Bk)
    })
  },
  40997: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => sk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36758),
      Xk = Bk(39668),
      bk = Bk(41003),
      wk = Bk(39628),
      dk = Bk(36798);
    let sk = (() => {
        var kk;
        let Fk, Bk, wk, dk, sk, Vk, Jk, Ak, ek = bk.c,
          yk = [],
          fk = [],
          mk = [],
          Wk = [],
          vk = [],
          ik = [],
          Yk = [],
          Lk = [],
          Ok = [],
          Ek = [],
          Sk = [],
          Nk = [],
          Hk = [];
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
          constructor(kk, Fk, Bk, tk) {
            super(kk, Bk, tk), this._shadowFrustumSize = ((0, Rk.l)(this, yk), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Rk.l)(this, fk, !0), this.autoCalcShadowZBounds = ((0, Rk.l)(this, mk), (0, Rk.l)(this, Wk, !1)), this._orthoLeft = ((0, Rk.l)(this, vk), (0, Rk.l)(this, ik, Number.MAX_VALUE)), this._orthoRight = ((0, Rk.l)(this, Yk), (0, Rk.l)(this, Lk, Number.MIN_VALUE)), this._orthoTop = ((0, Rk.l)(this, Ok), (0, Rk.l)(this, Ek, Number.MIN_VALUE)), this._orthoBottom = ((0, Rk.l)(this, Sk), (0, Rk.l)(this, Nk, Number.MAX_VALUE)), (0, Rk.l)(this, Hk), this.position = Fk.scale(-1), this.direction = Fk
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Xk.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(kk, Fk, Bk) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(kk) : this._setDefaultAutoExtendShadowProjectionMatrix(kk, Fk, Bk)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(kk) {
            const Fk = this.XN().activeCamera;
            ak.c.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Fk ? Fk.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Fk ? Fk.maxZ : 1e4, kk, this.XN().ne().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(kk, Fk, Bk) {
            const Rk = this.XN().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const kk = ak.s.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Rk = Number.MAX_VALUE,
                tk = -Number.MAX_VALUE;
              for (let Xk = 0; Xk < Bk.length; Xk++) {
                const bk = Bk[Xk];
                if (!bk) continue;
                const wk = bk.ZH().boundingBox;
                for (let Bk = 0; Bk < wk.vectorsWorld.length; Bk++) ak.s.TransformCoordinatesToRef(wk.vectorsWorld[Bk], Fk, kk), kk.x < this._orthoLeft && (this._orthoLeft = kk.x), kk.y < this._orthoBottom && (this._orthoBottom = kk.y), kk.x > this._orthoRight && (this._orthoRight = kk.x), kk.y > this._orthoTop && (this._orthoTop = kk.y), this.autoCalcShadowZBounds && (kk.z < Rk && (Rk = kk.z), kk.z > tk && (tk = kk.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Rk, this._shadowMaxZ = tk)
            }
            const tk = this._orthoRight - this._orthoLeft,
              Xk = this._orthoTop - this._orthoBottom,
              bk = void 0 !== this.shadowMinZ ? this.shadowMinZ : Rk?.minZ || 0,
              wk = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Rk?.maxZ || 1e4,
              dk = this.XN().ne().rBk;
            ak.c.OrthoOffCenterLHToRef(this._orthoLeft - tk * this.shadowOrthoScale, this._orthoRight + tk * this.shadowOrthoScale, this._orthoBottom - Xk * this.shadowOrthoScale, this._orthoTop + Xk * this.shadowOrthoScale, dk ? wk : bk, dk ? bk : wk, kk, this.XN().ne().isNDCHalfZRange)
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
            const Fk = this._scene.ne();
            return !Fk.rBk && Fk.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(kk) {
            const Fk = this._scene.ne();
            return Fk.rBk && Fk.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(kk, Fk) {
            kk["DIRLIGHT" + Fk] = !0
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(ek[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], wk = [(0, tk.M)()], dk = [(0, tk.M)()], sk = [(0, tk.M)("orthoLeft")], Vk = [(0, tk.M)("orthoRight")], Jk = [(0, tk.M)("orthoTop")], Ak = [(0, tk.M)("orthoBottom")], (0, Rk.j)(kk, null, Fk, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: kk => "shadowFrustumSize" in kk,
              get: kk => kk.shadowFrustumSize
            },
            metadata: ak
          }, null, yk), (0, Rk.j)(kk, null, Bk, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "shadowOrthoScale" in kk,
              get: kk => kk.shadowOrthoScale
            },
            metadata: ak
          }, null, yk), (0, Rk.j)(null, null, wk, {
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
            metadata: ak
          }, fk, mk), (0, Rk.j)(null, null, dk, {
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
            metadata: ak
          }, Wk, vk), (0, Rk.j)(null, null, sk, {
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
            metadata: ak
          }, ik, Yk), (0, Rk.j)(null, null, Vk, {
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
            metadata: ak
          }, Lk, Ok), (0, Rk.j)(null, null, Jk, {
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
            metadata: ak
          }, Ek, Sk), (0, Rk.j)(null, null, Ak, {
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
            metadata: ak
          }, Nk, Hk), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk
      })(),
      Vk = !1;
    Vk || (Vk = !0, wk.b.AddNodeConstructor("Light_Type_1", ((kk, Fk) => () => new sk(kk, ak.s.Zero(), Fk))), (0, dk.d)("BABYLON.DirectionalLight", sk))
  },
  41017: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => KF
    });
    var Rk = Bk(38344),
      tk = Bk(36781),
      ak = Bk(36758),
      Xk = Bk(39541),
      bk = Bk(41021),
      wk = Bk(36772),
      dk = Bk(39686),
      sk = Bk(36917),
      Vk = Bk(38350),
      Jk = Bk(38318),
      Ak = Bk(36790);
    class ek {
      constructor() {
        this.direction1 = new ak.s(0, 1, 0), this.direction2 = new ak.s(0, 1, 0)
      }
      startDirectionFunction(kk, Fk, Bk, Rk) {
        const tk = (0, Ak.RandomRange)(this.direction1.x, this.direction2.x),
          Xk = (0, Ak.RandomRange)(this.direction1.y, this.direction2.y),
          bk = (0, Ak.RandomRange)(this.direction1.z, this.direction2.z);
        Rk ? Fk.E1(tk, Xk, bk) : ak.s.TransformNormalFromFloatsToRef(tk, Xk, bk, kk, Fk)
      }
      startPositionFunction(kk, Fk, Bk, Rk) {
        Rk ? Fk.E1(0, 0, 0) : ak.s.TransformCoordinatesFromFloatsToRef(0, 0, 0, kk, Fk)
      }
      clone() {
        const kk = new ek;
        return Jk.e.DeepCopy(this, kk), kk
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
        return kk.type = this.getClassName(), kk.direction1 = this.direction1.PBk(), kk.direction2 = this.direction2.PBk(), kk
      }
      parse(kk) {
        ak.s.FromArrayToRef(kk.direction1, 0, this.direction1), ak.s.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
    class yk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = kk, this.radiusRange = Fk, this.directionRandomizer = Bk
      }
      startDirectionFunction(kk, Fk, Bk, Rk) {
        const tk = Bk.position.subtract(kk.getTranslation()).normalize(),
          Xk = (0, Ak.RandomRange)(0, this.directionRandomizer),
          bk = (0, Ak.RandomRange)(0, this.directionRandomizer),
          wk = (0, Ak.RandomRange)(0, this.directionRandomizer);
        tk.x += Xk, tk.y += bk, tk.z += wk, tk.normalize(), Rk ? Fk.sBk(tk) : ak.s.TransformNormalFromFloatsToRef(tk.x, tk.y, tk.z, kk, Fk)
      }
      startPositionFunction(kk, Fk, Bk, Rk) {
        const tk = this.radius - (0, Ak.RandomRange)(0, this.radius * this.radiusRange),
          Xk = (0, Ak.RandomRange)(0, 1),
          bk = (0, Ak.RandomRange)(0, 2 * Math.PI),
          wk = Math.acos(2 * Xk - 1),
          dk = tk * Math.cos(bk) * Math.sin(wk),
          sk = tk * Math.cos(wk),
          Vk = tk * Math.sin(bk) * Math.sin(wk);
        Rk ? Fk.E1(dk, Math.abs(sk), Vk) : ak.s.TransformCoordinatesFromFloatsToRef(dk, Math.abs(sk), Vk, kk, Fk)
      }
      clone() {
        const kk = new yk(this.radius, this.directionRandomizer);
        return Jk.e.DeepCopy(this, kk), kk
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
    class fk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = kk, this.radiusRange = Fk, this.directionRandomizer = Bk
      }
      startDirectionFunction(kk, Fk, Bk, Rk) {
        const tk = Bk.position.subtract(kk.getTranslation()).normalize(),
          Xk = (0, Ak.RandomRange)(0, this.directionRandomizer),
          bk = (0, Ak.RandomRange)(0, this.directionRandomizer),
          wk = (0, Ak.RandomRange)(0, this.directionRandomizer);
        tk.x += Xk, tk.y += bk, tk.z += wk, tk.normalize(), Rk ? Fk.sBk(tk) : ak.s.TransformNormalFromFloatsToRef(tk.x, tk.y, tk.z, kk, Fk)
      }
      startPositionFunction(kk, Fk, Bk, Rk) {
        const tk = this.radius - (0, Ak.RandomRange)(0, this.radius * this.radiusRange),
          Xk = (0, Ak.RandomRange)(0, 1),
          bk = (0, Ak.RandomRange)(0, 2 * Math.PI),
          wk = Math.acos(2 * Xk - 1),
          dk = tk * Math.cos(bk) * Math.sin(wk),
          sk = tk * Math.cos(wk),
          Vk = tk * Math.sin(bk) * Math.sin(wk);
        Rk ? Fk.E1(dk, sk, Vk) : ak.s.TransformCoordinatesFromFloatsToRef(dk, sk, Vk, kk, Fk)
      }
      clone() {
        const kk = new fk(this.radius, this.directionRandomizer);
        return Jk.e.DeepCopy(this, kk), kk
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
    class mk extends fk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ak.s(0, 1, 0),
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ak.s(0, 1, 0);
        super(kk), this.direction1 = Fk, this.direction2 = Bk
      }
      startDirectionFunction(kk, Fk, Bk, Rk) {
        const tk = (0, Ak.RandomRange)(this.direction1.x, this.direction2.x),
          Xk = (0, Ak.RandomRange)(this.direction1.y, this.direction2.y),
          bk = (0, Ak.RandomRange)(this.direction1.z, this.direction2.z);
        Rk ? Fk.E1(tk, Xk, bk) : ak.s.TransformNormalFromFloatsToRef(tk, Xk, bk, kk, Fk)
      }
      clone() {
        const kk = new mk(this.radius, this.direction1, this.direction2);
        return Jk.e.DeepCopy(this, kk), kk
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
        return kk.direction1 = this.direction1.PBk(), kk.direction2 = this.direction2.PBk(), kk
      }
      parse(kk) {
        super.parse(kk), ak.s.FromArrayToRef(kk.direction1, 0, this.direction1), ak.s.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
    var Wk = Bk(38314);
    class vk {
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
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = Bk, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Fk, this.radius = kk
      }
      startDirectionFunction(kk, Fk, Bk, Rk) {
        const tk = Bk.position.subtract(kk.getTranslation()).normalize(),
          Xk = (0, Ak.RandomRange)(0, this.directionRandomizer),
          bk = (0, Ak.RandomRange)(0, this.directionRandomizer),
          wk = (0, Ak.RandomRange)(0, this.directionRandomizer);
        tk.x += Xk, tk.y += bk, tk.z += wk, tk.normalize(), Rk ? Fk.sBk(tk) : ak.s.TransformNormalFromFloatsToRef(tk.x, tk.y, tk.z, kk, Fk)
      }
      startPositionFunction(kk, Fk, Bk, Rk) {
        const tk = (0, Ak.RandomRange)(0, 2 * Math.PI);
        let Xk;
        this.emitFromSpawnPointOnly ? Xk = 1e-4 : (Xk = (0, Ak.RandomRange)(0, this.heightRange), Xk = 1 - Xk * Xk);
        let bk = this._radius - (0, Ak.RandomRange)(0, this._radius * this.radiusRange);
        bk *= Xk;
        const wk = bk * Math.sin(tk),
          dk = bk * Math.cos(tk),
          sk = Xk * this._height;
        if (Rk) return Fk.x = wk, Fk.y = sk, void(Fk.z = dk);
        ak.s.TransformCoordinatesFromFloatsToRef(wk, sk, dk, kk, Fk)
      }
      clone() {
        const kk = new vk(this._radius, this._angle, this.directionRandomizer);
        return Jk.e.DeepCopy(this, kk), kk
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
    class ik extends vk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ak.s(0, 1, 0),
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ak.s(0, 1, 0);
        super(kk, Fk), this.direction1 = Bk, this.direction2 = Rk
      }
      startDirectionFunction(kk, Fk, Bk, Rk) {
        const tk = (0, Ak.RandomRange)(this.direction1.x, this.direction2.x),
          Xk = (0, Ak.RandomRange)(this.direction1.y, this.direction2.y),
          bk = (0, Ak.RandomRange)(this.direction1.z, this.direction2.z);
        Rk ? Fk.E1(tk, Xk, bk) : ak.s.TransformNormalFromFloatsToRef(tk, Xk, bk, kk, Fk)
      }
      clone() {
        const kk = new ik(this.radius, this.angle, this.direction1, this.direction2);
        return Jk.e.DeepCopy(this, kk), kk
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
        return kk.direction1 = this.direction1.PBk(), kk.direction2 = this.direction2.PBk(), kk
      }
      parse(kk) {
        super.parse(kk), ak.s.FromArrayToRef(kk.direction1, 0, this.direction1), ak.s.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
    class Yk {
      get mesh() {
        return this._mesh
      }
      set mesh(kk) {
        this._mesh !== kk && (this._mesh = kk, kk ? (this._indices = kk.hBk(), this._positions = kk.getVerticesData(Xk.n.PositionKind), this._normals = kk.getVerticesData(Xk.n.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = ak.s.Zero(), this._mesh = null, this.direction1 = new ak.s(0, 1, 0), this.direction2 = new ak.s(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = kk
      }
      startDirectionFunction(kk, Fk, Bk, Rk) {
        if (this.useMeshNormalsForDirection && this._normals) return void ak.s.TransformNormalToRef(this._storedNormal, kk, Fk);
        const tk = (0, Ak.RandomRange)(this.direction1.x, this.direction2.x),
          Xk = (0, Ak.RandomRange)(this.direction1.y, this.direction2.y),
          bk = (0, Ak.RandomRange)(this.direction1.z, this.direction2.z);
        Rk ? Fk.E1(tk, Xk, bk) : ak.s.TransformNormalFromFloatsToRef(tk, Xk, bk, kk, Fk)
      }
      startPositionFunction(kk, Fk, Bk, Rk) {
        if (!this._indices || !this._positions) return;
        const tk = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Xk = Math.random(),
          bk = Math.random() * (1 - Xk),
          wk = 1 - Xk - bk,
          dk = this._indices[tk],
          sk = this._indices[tk + 1],
          Vk = this._indices[tk + 2],
          Jk = ak.l.Qe[0],
          Ak = ak.l.Qe[1],
          ek = ak.l.Qe[2],
          yk = ak.l.Qe[3];
        ak.s.FromArrayToRef(this._positions, 3 * dk, Jk), ak.s.FromArrayToRef(this._positions, 3 * sk, Ak), ak.s.FromArrayToRef(this._positions, 3 * Vk, ek), yk.x = Xk * Jk.x + bk * Ak.x + wk * ek.x, yk.y = Xk * Jk.y + bk * Ak.y + wk * ek.y, yk.z = Xk * Jk.z + bk * Ak.z + wk * ek.z, Rk ? Fk.E1(yk.x, yk.y, yk.z) : ak.s.TransformCoordinatesFromFloatsToRef(yk.x, yk.y, yk.z, kk, Fk), this.useMeshNormalsForDirection && this._normals && (ak.s.FromArrayToRef(this._normals, 3 * dk, Jk), ak.s.FromArrayToRef(this._normals, 3 * sk, Ak), ak.s.FromArrayToRef(this._normals, 3 * Vk, ek), this._storedNormal.x = Xk * Jk.x + bk * Ak.x + wk * ek.x, this._storedNormal.y = Xk * Jk.y + bk * Ak.y + wk * ek.y, this._storedNormal.z = Xk * Jk.z + bk * Ak.z + wk * ek.z)
      }
      clone() {
        const kk = new Yk(this.mesh);
        return Jk.e.DeepCopy(this, kk), kk
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
        return kk.type = this.getClassName(), kk.direction1 = this.direction1.PBk(), kk.direction2 = this.direction2.PBk(), kk.meshId = this.mesh?.id, kk.useMeshNormalsForDirection = this.useMeshNormalsForDirection, kk
      }
      parse(kk, Fk) {
        ak.s.FromArrayToRef(kk.direction1, 0, this.direction1), ak.s.FromArrayToRef(kk.direction2, 0, this.direction2), kk.meshId && Fk && (this.mesh = Fk.getLastMeshById(kk.meshId)), this.useMeshNormalsForDirection = kk.useMeshNormalsForDirection
      }
    }
    class Lk {
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
        this._useLogarithmicDepth = kk && this.XN().ne().getCaps().fragmentDepthSupported
      }
      XN() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(kk) {
        switch (kk) {
          case Lk.BLENDMODE_MULTIPLYADD:
            return;
          case Lk.BLENDMODE_ADD:
            kk = 1;
            break;
          case Lk.BLENDMODE_ONEONE:
            kk = 6;
            break;
          case Lk.BLENDMODE_STANDARD:
            kk = 2;
            break;
          case Lk.BLENDMODE_MULTIPLY:
            kk = 4;
            break;
          case Lk.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(kk, Fk, Bk) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, kk, Fk, Bk), this
      }
      removeEmitRateGradient(kk) {
        return this._removeFactorGradient(this._emitRateGradients, kk), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : ak.s.Zero()
      }
      set direction1(kk) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = kk)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : ak.s.Zero()
      }
      set direction2(kk) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = kk)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : ak.s.Zero()
      }
      set minEmitBox(kk) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = kk)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : ak.s.Zero()
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
      _addFactorGradient(kk, Fk, Bk, tk) {
        const ak = new Rk.g(Fk, Bk, tk);
        kk.push(ak), kk.sort(((kk, Fk) => kk.gradient < Fk.gradient ? -1 : kk.gradient > Fk.gradient ? 1 : 0))
      }
      _removeFactorGradient(kk, Fk) {
        if (!kk) return;
        let Bk = 0;
        for (const Rk of kk) {
          if (Rk.gradient === Fk) {
            kk.splice(Bk, 1);
            break
          }
          Bk++
        }
      }
      _removeGradientAndTexture(kk, Fk, Bk) {
        if (!Fk) return this;
        let Rk = 0;
        for (const tk of Fk) {
          if (tk.gradient === kk) {
            Fk.splice(Rk, 1);
            break
          }
          Rk++
        }
        return Bk && Bk.dispose(), this
      }
      constructor(kk) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = ak.s.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new ak.s(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = Lk.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new ak.p(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new ak.s(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = ak.s.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new sk.i(1, 1, 1, 1), this.color2 = new sk.i(1, 1, 1, 1), this.colorDead = new sk.i(0, 0, 0, 1), this.textureMask = new sk.i(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new dk.d, this.id = kk, this.name = kk
      }
      createPointEmitter(kk, Fk) {
        const Bk = function(kk, Fk) {
          const Bk = new ek;
          return Bk.direction1 = kk, Bk.direction2 = Fk, Bk
        }(kk, Fk);
        return this.particleEmitterType = Bk, Bk
      }
      createHemisphericEmitter() {
        const kk = function() {
          return new yk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = kk, kk
      }
      createSphereEmitter() {
        const kk = function() {
          return new fk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = kk, kk
      }
      createDirectedSphereEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ak.s(0, 1, 0),
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ak.s(0, 1, 0);
          return new mk(kk, Fk, Bk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ak.s(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ak.s(0, 1, 0));
        return this.particleEmitterType = kk, kk
      }
      createCylinderEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Wk.c(kk, Fk, Bk, Rk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = kk, kk
      }
      createDirectedCylinderEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ak.s(0, 1, 0),
            tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ak.s(0, 1, 0);
          return new Wk.b(kk, Fk, Bk, Rk, tk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ak.s(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ak.s(0, 1, 0));
        return this.particleEmitterType = kk, kk
      }
      createConeEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new vk(kk, Fk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = kk, kk
      }
      createDirectedConeEmitter() {
        const kk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ak.s(0, 1, 0),
            Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ak.s(0, 1, 0);
          return new ik(kk, Fk, Bk, Rk)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ak.s(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ak.s(0, 1, 0));
        return this.particleEmitterType = kk, kk
      }
      createBoxEmitter(kk, Fk, Bk, Rk) {
        const tk = new Vk.c;
        return this.particleEmitterType = tk, this.direction1 = kk, this.direction2 = Fk, this.minEmitBox = Bk, this.maxEmitBox = Rk, tk
      }
      createMeshEmitter() {
        const kk = function() {
          return new Yk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = kk, kk
      }
    }
    Lk.BLENDMODE_ONEONE = 0, Lk.BLENDMODE_STANDARD = 1, Lk.BLENDMODE_ADD = 2, Lk.BLENDMODE_MULTIPLY = 3, Lk.BLENDMODE_MULTIPLYADD = 4, Lk.BLENDMODE_SUBTRACT = -1;
    class Ok {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new sk.i(0, 0, 0, 0), this.currentColor2 = new sk.i(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = ak.s.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class Ek {
      constructor(kk) {
        this.particleSystem = kk, this.position = ak.s.Zero(), this.direction = ak.s.Zero(), this.color = new sk.i(0, 0, 0, 0), this.colorStep = new sk.i(0, 0, 0, 0), this.initialColor = new sk.i(0, 0, 0, 0), this.colorDead = new sk.i(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new ak.p(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Ok, this.id = Ek._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let kk = this.age,
          Fk = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Fk ? (Fk = 1, kk = this._properties.randomCellOffset) : kk += this._properties.randomCellOffset);
        const Bk = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Rk;
        Rk = this._properties.initialSpriteCellLoop ? (0, Ak.Clamp)(kk * Fk % this.lifeTime / this.lifeTime) : (0, Ak.Clamp)(kk * Fk / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Rk * Bk | 0
      }
      _inheritParticleInfoToSubEmitter(kk) {
        if (kk.particleSystem.emitter.position) {
          const Fk = kk.particleSystem.emitter;
          if (Fk.position.sBk(this.position), kk.inheritDirection) {
            const kk = ak.l.Qe[0];
            this.direction.normalizeToRef(kk), Fk.setDirection(kk, 0, Math.PI / 2)
          }
        } else {
          kk.particleSystem.emitter.sBk(this.position)
        }
        this.direction.scaleToRef(kk.inheritedVelocityAmount / 2, ak.l.Qe[0]), kk.particleSystem._inheritedVelocityOffset.sBk(ak.l.Qe[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const kk of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(kk)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = Ek._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(kk) {
        kk.position.sBk(this.position), this._properties.initialDirection ? kk._properties.initialDirection ? kk._properties.initialDirection.sBk(this._properties.initialDirection) : kk._properties.initialDirection = this._properties.initialDirection.clone() : kk._properties.initialDirection = null, kk.direction.sBk(this.direction), this._properties.localPosition && (kk._properties.localPosition ? kk._properties.localPosition.sBk(this._properties.localPosition) : kk._properties.localPosition = this._properties.localPosition.clone()), kk.color.sBk(this.color), kk.colorStep.sBk(this.colorStep), kk.initialColor.sBk(this.initialColor), kk.colorDead.sBk(this.colorDead), kk.lifeTime = this.lifeTime, kk.age = this.age, kk._properties.randomCellOffset = this._properties.randomCellOffset, kk.size = this.size, kk.scale.sBk(this.scale), kk.angle = this.angle, kk.angularSpeed = this.angularSpeed, kk.particleSystem = this.particleSystem, kk.cellIndex = this.cellIndex, kk.id = this.id, kk._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (kk._properties.currentColorGradient = this._properties.currentColorGradient, kk._properties.currentColor1.sBk(this._properties.currentColor1), kk._properties.currentColor2.sBk(this._properties.currentColor2)), this._properties.currentSizeGradient && (kk._properties.currentSizeGradient = this._properties.currentSizeGradient, kk._properties.currentSize1 = this._properties.currentSize1, kk._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (kk._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, kk._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, kk._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (kk._properties.currentVelocityGradient = this._properties.currentVelocityGradient, kk._properties.currentVelocity1 = this._properties.currentVelocity1, kk._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (kk._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, kk._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, kk._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (kk._properties.currentDragGradient = this._properties.currentDragGradient, kk._properties.currentDrag1 = this._properties.currentDrag1, kk._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (kk._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, kk._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, kk._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (kk.remapData && this.remapData ? kk.remapData.sBk(this.remapData) : kk.remapData = new ak.v(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (kk._properties.randomNoiseCoordinates1 && kk._properties.randomNoiseCoordinates2 ? (kk._properties.randomNoiseCoordinates1.sBk(this._properties.randomNoiseCoordinates1), kk._properties.randomNoiseCoordinates2.sBk(this._properties.randomNoiseCoordinates2)) : (kk._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), kk._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), kk.metadata = this.metadata
      }
    }
    Ek._Count = 0;
    var Sk = Bk(40521);
    class Nk {
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
      constructor(kk, Fk, Bk, Rk) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Fk, this.VK = kk, this._scene = Bk, this._host = Rk, this._activeTargets = [], Fk._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Oa: this._getCorrectLoopMode()
          }, this._animation.dataType === Sk.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = ak.c.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const kk = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, kk)
        }
        if (this.VK instanceof Array) {
          let kk = 0;
          for (const Fk of this.VK) this._preparePath(Fk, kk), this._getOriginalValues(kk), kk++;
          this._targetIsArray = !0
        } else this._preparePath(this.VK), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const tk = Fk.getEvents();
        if (tk && tk.length > 0)
          for (const ak of tk) this._events.push(ak._clone());
        this._enableBlending = kk && kk.animationPropertiesOverride ? kk.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = this._animation.targetPropertyPath;
        if (Bk.length > 1) {
          let Rk = kk;
          for (let kk = 0; kk < Bk.length - 1; kk++) {
            const Fk = Bk[kk];
            if (Rk = Rk[Fk], void 0 === Rk) throw new Error(`Invalid property (${Fk}) in property path (${Bk.join(".")})`)
          }
          this._targetPath = Bk[Bk.length - 1], this._activeTargets[Fk] = Rk
        } else this._targetPath = Bk[0], this._activeTargets[Fk] = kk;
        if (void 0 === this._activeTargets[Fk][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${Bk.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.VK instanceof Array) {
            let kk = 0;
            for (const Fk of this.VK) void 0 !== this._originalValue[kk] && this._setValue(Fk, this._activeTargets[kk], this._originalValue[kk], -1, kk), kk++
          } else void 0 !== this._originalValue[0] && this._setValue(this.VK, this._directTarget, this._originalValue[0], -1, 0);
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
          for (let Bk = 0; Bk < this.VK.length; Bk++) {
            const Rk = this.VK[Bk];
            this._setValue(Rk, this._activeTargets[Bk], kk, Fk, Bk)
          } else this._setValue(this.VK, this._directTarget, kk, Fk, 0)
      }
      _getOriginalValues() {
        let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Bk = this._activeTargets[Fk];
        if (Sk.b.InheritOriginalValueFromActiveAnimations) {
          const kk = this._scene._activeAnimatables;
          for (let Rk = 0; Rk < kk.length; Rk++) {
            const tk = kk[Rk]._runtimeAnimations;
            for (let kk = 0; kk < tk.length; kk++) {
              const Rk = tk[kk];
              if (Rk !== this && Rk._targetPath === this._targetPath)
                for (let kk = 0; kk < Rk._activeTargets.length; kk++)
                  if (Rk._activeTargets[kk] === Bk && void 0 !== Rk._originalValue[kk]) return void(Rk._originalValue[kk] && Rk._originalValue[kk].clone ? this._originalValue[Fk] = Rk._originalValue[kk].clone() : this._originalValue[Fk] = Rk._originalValue[kk])
            }
          }
        }
        kk = Bk.getLocalMatrix && "_matrix" === this._targetPath ? Bk.getLocalMatrix() : Bk[this._targetPath], kk && kk.clone ? this._originalValue[Fk] = kk.clone() : this._originalValue[Fk] = kk
      }
      _registerTargetForLateAnimationBinding(kk, Fk) {
        const Bk = kk.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(Bk), Bk._lateAnimationHolders || (Bk._lateAnimationHolders = {}), Bk._lateAnimationHolders[kk.targetPath] || (Bk._lateAnimationHolders[kk.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Fk
        }), kk.isAdditive ? (Bk._lateAnimationHolders[kk.targetPath].additiveAnimations.push(kk), Bk._lateAnimationHolders[kk.targetPath].totalAdditiveWeight += kk.weight) : (Bk._lateAnimationHolders[kk.targetPath].animations.push(kk), Bk._lateAnimationHolders[kk.targetPath].totalWeight += kk.weight)
      }
      _setValue(kk, Fk, Bk, Rk, tk) {
        const Xk = this._scene._animationWrites,
          bk = this._scene._animationWriteCount++;
        let wk = Xk[bk];
        if (wk || (wk = Xk[bk] = {
            runtimeAnimation: this,
            target: kk,
            weight: Rk,
            additive: !1,
            blendingFactor: 1,
            ws: !1
          }), wk.runtimeAnimation = this, wk.target = kk, wk.weight = Rk, wk.additive = this.isAdditive, wk.ws = !1, this._currentActiveTarget = Fk, this._weight = Rk, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const kk = Fk[this._targetPath];
            kk.clone ? this._originalBlendValue = kk.clone() : this._originalBlendValue = kk
          }
          this._originalBlendValue.m ? Sk.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? ak.c.DecomposeLerpToRef(this._originalBlendValue, Bk, this._blendingFactor, this._currentValue) : this._currentValue = ak.c.DecomposeLerp(this._originalBlendValue, Bk, this._blendingFactor) : this._currentValue ? ak.c.LerpToRef(this._originalBlendValue, Bk, this._blendingFactor, this._currentValue) : this._currentValue = ak.c.Lerp(this._originalBlendValue, Bk, this._blendingFactor) : this._currentValue = Sk.b._UniversalLerp(this._originalBlendValue, Bk, this._blendingFactor);
          const Rk = kk && kk.animationPropertiesOverride ? kk.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          wk.blendingFactor = this._blendingFactor, this._blendingFactor += Rk
        } else wk.blendingFactor = 1, this._currentValue ? this._currentValue.sBk ? this._currentValue.sBk(Bk) : this._currentValue = Bk : this._currentValue = Bk?.clone ? Bk.clone() : Bk; - 1 !== Rk ? this._registerTargetForLateAnimationBinding(this, this._originalValue[tk]) : this._animationState.Oa === Sk.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[tk], Fk[this._targetPath]) : Fk[this._targetPath] = this._originalValue[tk] + this._currentValue : Fk[this._targetPath] = this._currentValue, kk.mFk && kk.mFk(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.VK && this.VK.animationPropertiesOverride) {
          return "MorphTarget" === this.VK.getClassName?.() && null == this.VK._animationPropertiesOverride ? this._animation.Oa : this.VK.animationPropertiesOverride.Oa
        }
        return this._animation.Oa
      }
      goToFrame(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const Bk = this._animation.getKeys();
        kk < Bk[0].frame ? kk = Bk[0].frame : kk > Bk[Bk.length - 1].frame && (kk = Bk[Bk.length - 1].frame);
        const Rk = this._events;
        if (Rk.length)
          for (let ak = 0; ak < Rk.length; ak++) Rk[ak].onlyOnce || (Rk[ak].isDone = Rk[ak].frame < kk);
        this._currentFrame = kk;
        const tk = this._animation._interpolate(kk, this._animationState);
        this.setValue(tk, Fk)
      }
      _prepareForSpeedRatioChange(kk) {
        const Fk = this._previousElapsedTime * (this._animation.framePerSecond * kk) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Fk
      }
      animate(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Xk = this._animation,
          bk = Xk.targetPropertyPath;
        if (!bk || bk.length < 1) return this._stopped = !0, !1;
        let wk, dk = !0;
        const sk = this._events;
        let Vk;
        if (this._coreRuntimeAnimation) Vk = Bk - Fk, wk = this._coreRuntimeAnimation.currentFrame, this._currentFrame = wk, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let ak;
          (Fk < this._minFrame || Fk > this._maxFrame) && (Fk = this._minFrame), (Bk < this._minFrame || Bk > this._maxFrame) && (Bk = this._maxFrame), Vk = Bk - Fk;
          let bk = kk * (Xk.framePerSecond * tk) / 1e3 + this._absoluteFrameOffset,
            Jk = 0,
            Ak = !1;
          const ek = Rk && this._animationState.Oa === Sk.b.ANIMATIONLOOPMODE_YOYO;
          if (ek) {
            const kk = (bk - Fk) / Vk,
              Bk = Math.sin(kk * Math.PI);
            bk = Math.abs(Bk) * Vk + Fk;
            const Rk = Bk >= 0 ? 1 : -1;
            this._yoyoDirection !== Rk && (Ak = !0), this._yoyoDirection = Rk
          }
          if (this._previousElapsedTime = kk, this._previousAbsoluteFrame = bk, !Rk && Bk >= Fk && (bk >= Vk && tk > 0 || bk <= 0 && tk < 0)) dk = !1, Jk = Xk.evaluate(Bk);
          else if (!Rk && Fk >= Bk && (bk <= Vk && tk < 0 || bk >= 0 && tk > 0)) dk = !1, Jk = Xk.evaluate(Fk);
          else if (this._animationState.Oa !== Sk.b.ANIMATIONLOOPMODE_CYCLE) {
            const kk = Bk.toString() + Fk.toString();
            if (!this._offsetsCache[kk]) {
              this._animationState.repeatCount = 0, this._animationState.Oa = Sk.b.ANIMATIONLOOPMODE_CYCLE;
              const Rk = Xk._interpolate(Fk, this._animationState),
                tk = Xk._interpolate(Bk, this._animationState);
              switch (this._animationState.Oa = this._getCorrectLoopMode(), Xk.dataType) {
                case Sk.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[kk] = tk - Rk;
                  break;
                case Sk.b.ANIMATIONTYPE_QUATERNION:
                case Sk.b.ANIMATIONTYPE_VECTOR3:
                case Sk.b.ANIMATIONTYPE_VECTOR2:
                case Sk.b.ANIMATIONTYPE_SIZE:
                case Sk.b.ANIMATIONTYPE_COLOR3:
                case Sk.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[kk] = tk.subtract(Rk)
              }
              this._highLimitsCache[kk] = tk
            }
            Jk = this._highLimitsCache[kk], ak = this._offsetsCache[kk]
          }
          if (void 0 === ak) switch (Xk.dataType) {
            case Sk.b.ANIMATIONTYPE_FLOAT:
              ak = 0;
              break;
            case Sk.b.ANIMATIONTYPE_QUATERNION:
              ak = Sk.i;
              break;
            case Sk.b.ANIMATIONTYPE_VECTOR3:
              ak = Sk.q;
              break;
            case Sk.b.ANIMATIONTYPE_VECTOR2:
              ak = Sk.m;
              break;
            case Sk.b.ANIMATIONTYPE_SIZE:
              ak = Sk.k;
              break;
            case Sk.b.ANIMATIONTYPE_COLOR3:
              ak = Sk.f;
              break;
            case Sk.b.ANIMATIONTYPE_COLOR4:
              ak = Sk.h
          }
          const yk = this._host ? this._host.syncRoot : null;
          let fk, mk = this._playbackFrames,
            Wk = !1;
          if (yk) {
            const kk = yk.toFrame - yk.fromFrame,
              Bk = yk.masterFrame,
              Rk = (Bk - yk.fromFrame) / kk;
            wk = Fk + Vk * Rk;
            const tk = yk.getAnimations()[0];
            if (tk && 0 !== kk) {
              const kk = Vk * Rk,
                Fk = tk._playbackTo - tk._playbackFrom;
              if (0 !== Fk && tk._playbackFrom <= yk.fromFrame && tk._playbackTo >= yk.toFrame) {
                mk = Vk * Math.round((tk._playbackFrames - (tk._currentFrame - tk._playbackFrom)) / Fk) + kk
              } else Wk = (Bk - this._playbackSyncMasterFrame) * (tk._playbackFrames - this._playbackSyncMasterPlayed) < 0, mk = kk;
              Wk = Wk || tk._playbackJumped, this._playbackSyncMasterPlayed = tk._playbackFrames, this._playbackSyncMasterFrame = Bk
            }
          } else wk = bk > 0 && Fk > Bk || bk < 0 && Fk < Bk ? dk && 0 !== Vk ? Bk + bk % Vk : Fk : dk && 0 !== Vk ? Fk + bk % Vk : Bk;
          if (!ek && (tk > 0 && this.currentFrame > wk || tk < 0 && this.currentFrame < wk) || ek && Ak) {
            this._onLoop();
            for (let kk = 0; kk < sk.length; kk++) sk[kk].onlyOnce || (sk[kk].isDone = !1);
            this._animationState.key = tk > 0 ? 0 : Xk.getKeys().length - 1
          }
          if (this._currentFrame = wk, this._animationState.repeatCount = 0 === Vk ? 0 : bk / Vk | 0, this._animationState.highLimitValue = Jk, this._animationState.offsetValue = ak, this._playbackFrom = Fk, this._playbackTo = Bk, this._playbackJumped = Wk, this._playbackSyncRoot = yk, yk) fk = mk;
          else if (dk) fk = ek ? wk === Fk && bk === Bk ? Vk : wk - Fk : bk;
          else {
            const kk = 0 !== Vk ? Math.floor(this._playbackFrames / Vk) : 0;
            fk = (wk === Bk ? kk + 1 : kk) * Vk
          }
          this._playbackFrames = fk, this._playbackProgress = this._animationState.Oa === Sk.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Vk : fk
        }
        const Jk = Xk._interpolate(wk, this._animationState);
        if (this.setValue(Jk, ak), sk.length)
          for (let Ak = 0; Ak < sk.length; Ak++)
            if (Vk >= 0 && wk >= sk[Ak].frame && sk[Ak].frame >= Fk || Vk < 0 && wk <= sk[Ak].frame && sk[Ak].frame <= Fk) {
              const kk = sk[Ak];
              kk.isDone || (kk.onlyOnce && (sk.splice(Ak, 1), Ak--), kk.isDone = !0, kk.action(wk))
            } return dk || (this._stopped = !0), dk
      }
    }
    var Hk = Bk(39307);
    class uk {
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
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          ak = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          bk = arguments.length > 6 ? arguments[6] : void 0,
          wk = arguments.length > 7 ? arguments[7] : void 0,
          dk = arguments.length > 8 ? arguments[8] : void 0,
          sk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Vk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Fk, this.fromFrame = Bk, this.toFrame = Rk, this.loopAnimation = ak, this.onAnimationEnd = bk, this.onAnimationLoop = dk, this.isAdditive = sk, this.playOrder = Vk, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.RY = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new tk.e, this.onAnimationLoopObservable = new tk.e, this._scene = kk, wk && this.appendAnimations(Fk, wk), this._speedRatio = Xk, kk._activeAnimatables.push(this)
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
        for (let Bk = 0; Bk < Fk.length; Bk++) {
          const Rk = Fk[Bk],
            tk = new Nk(kk, Rk, this._scene, this);
          tk._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(tk)
        }
      }
      getAnimationByTargetProperty(kk) {
        const Fk = this._runtimeAnimations;
        for (let Bk = 0; Bk < Fk.length; Bk++)
          if (Fk[Bk].animation.targetProperty === kk) return Fk[Bk].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(kk) {
        const Fk = this._runtimeAnimations;
        for (let Bk = 0; Bk < Fk.length; Bk++)
          if (Fk[Bk].animation.targetProperty === kk) return Fk[Bk];
        return null
      }
      reset() {
        const kk = this._runtimeAnimations;
        for (let Fk = 0; Fk < kk.length; Fk++) kk[Fk].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(kk) {
        const Fk = this._runtimeAnimations;
        for (let Bk = 0; Bk < Fk.length; Bk++) Fk[Bk].animation.enableBlending = !0, Fk[Bk].animation.blendingSpeed = kk
      }
      disableBlending() {
        const kk = this._runtimeAnimations;
        for (let Fk = 0; Fk < kk.length; Fk++) kk[Fk].animation.enableBlending = !1
      }
      goToFrame(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = this._runtimeAnimations;
        if (Bk[0]) {
          const Fk = Bk[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? Bk[0].currentFrame;
          const Rk = 0 === this.speedRatio ? 0 : (kk - this._frameToSyncFromJump) / Fk * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Rk
        }
        for (let Rk = 0; Rk < Bk.length; Rk++) Bk[Rk].goToFrame(kk, Fk ? this._weight : -1);
        this._goToFrame = kk
      }
      get paused() {
        return this.RY
      }
      pause() {
        this.RY || (this.RY = !0)
      }
      restart() {
        this.RY = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (kk || Fk) {
          const tk = this._scene._activeAnimatables.indexOf(this);
          if (tk > -1) {
            const ak = this._runtimeAnimations;
            for (let Bk = ak.length - 1; Bk >= 0; Bk--) {
              const Rk = ak[Bk];
              kk && Rk.animation.name != kk || (Fk && !Fk(Rk.target) || (Rk.dispose(), ak.splice(Bk, 1)))
            }
            0 == ak.length && (Bk || this._scene._activeAnimatables.splice(tk, 1), Rk || this._raiseOnAnimationEnd())
          }
        } else {
          const kk = this._scene._activeAnimatables.indexOf(this);
          if (kk > -1) {
            Bk || this._scene._activeAnimatables.splice(kk, 1);
            const Fk = this._runtimeAnimations;
            for (let kk = 0; kk < Fk.length; kk++) Fk[kk].dispose();
            this._runtimeAnimations.length = 0, Rk || this._raiseOnAnimationEnd()
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
        if (this.RY) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = kk), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = kk, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += kk - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !uk.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Fk = !1;
        const Bk = this._runtimeAnimations;
        let Rk;
        for (Rk = 0; Rk < Bk.length; Rk++) {
          const tk = Bk[Rk].animate(kk - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Fk = Fk || tk
        }
        if (this.animationStarted = Fk, !Fk) {
          if (this.disposeOnEnd)
            for (Rk = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Rk, 1), Rk = 0; Rk < Bk.length; Rk++) Bk[Rk].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Fk
      }
    }

    function Mk(kk) {
      if (0 === kk.totalWeight && 0 === kk.totalAdditiveWeight) return kk.originalValue;
      let Fk = 1;
      const Bk = ak.l.Qe[0],
        Rk = ak.l.Qe[1],
        tk = ak.l.Quaternion[0];
      let Xk = 0;
      const bk = kk.animations[0],
        wk = kk.originalValue;
      let dk, sk = !1;
      if (kk.totalWeight < 1) dk = 1 - kk.totalWeight, wk.decompose(Rk, tk, Bk);
      else {
        if (Xk = 1, Fk = kk.totalWeight, dk = bk.weight / Fk, 1 == dk) {
          if (!kk.totalAdditiveWeight) return bk.currentValue;
          sk = !0
        }
        bk.currentValue.decompose(Rk, tk, Bk)
      }
      if (!sk) {
        Rk.scaleInPlace(dk), Bk.scaleInPlace(dk), tk.scaleInPlace(dk);
        for (let bk = Xk; bk < kk.animations.length; bk++) {
          const Xk = kk.animations[bk];
          if (0 === Xk.weight) continue;
          dk = Xk.weight / Fk;
          const wk = ak.l.Qe[2],
            sk = ak.l.Qe[3],
            Vk = ak.l.Quaternion[1];
          Xk.currentValue.decompose(sk, Vk, wk), sk.scaleAndAddToRef(dk, Rk), Vk.scaleAndAddToRef(ak.e.Dot(tk, Vk) > 0 ? dk : -dk, tk), wk.scaleAndAddToRef(dk, Bk)
        }
        tk.normalize()
      }
      for (let Jk = 0; Jk < kk.additiveAnimations.length; Jk++) {
        const Fk = kk.additiveAnimations[Jk];
        if (0 === Fk.weight) continue;
        const Xk = ak.l.Qe[2],
          bk = ak.l.Qe[3],
          wk = ak.l.Quaternion[1];
        Fk.currentValue.decompose(bk, wk, Xk), bk.multiplyToRef(Rk, bk), ak.s.LerpToRef(Rk, bk, Fk.weight, Rk), tk.multiplyToRef(wk, wk), ak.e.SlerpToRef(tk, wk, Fk.weight, tk), Xk.scaleAndAddToRef(Fk.weight, Bk)
      }
      const Vk = bk ? bk._animationState.workValue : ak.l.Matrix[0].clone();
      return ak.c.ComposeToRef(Rk, tk, Bk, Vk), Vk
    }

    function gk(kk, Fk) {
      if (0 === kk.totalWeight && 0 === kk.totalAdditiveWeight) return Fk;
      const Bk = kk.animations[0],
        Rk = kk.originalValue;
      let tk = Fk;
      if (0 === kk.totalWeight && kk.totalAdditiveWeight > 0) tk.sBk(Rk);
      else if (1 === kk.animations.length) {
        if (ak.e.SlerpToRef(Rk, Bk.currentValue, Math.min(1, kk.totalWeight), tk), 0 === kk.totalAdditiveWeight) return tk
      } else if (kk.animations.length > 1) {
        let Bk, Xk, bk = 1;
        if (kk.totalWeight < 1) {
          const Fk = 1 - kk.totalWeight;
          Bk = [], Xk = [], Bk.push(Rk), Xk.push(Fk)
        } else {
          if (2 === kk.animations.length && (ak.e.SlerpToRef(kk.animations[0].currentValue, kk.animations[1].currentValue, kk.animations[1].weight / kk.totalWeight, Fk), 0 === kk.totalAdditiveWeight)) return Fk;
          Bk = [], Xk = [], bk = kk.totalWeight
        }
        for (let Fk = 0; Fk < kk.animations.length; Fk++) {
          const Rk = kk.animations[Fk];
          Bk.push(Rk.currentValue), Xk.push(Rk.weight / bk)
        }
        let wk = 0;
        for (let kk = 0; kk < Bk.length;) kk ? (wk += Xk[kk], ak.e.SlerpToRef(tk, Bk[kk], Xk[kk] / wk, tk), kk++) : (ak.e.SlerpToRef(Bk[kk], Bk[kk + 1], Xk[kk + 1] / (Xk[kk] + Xk[kk + 1]), Fk), tk = Fk, wk = Xk[kk] + Xk[kk + 1], kk += 2)
      }
      for (let Xk = 0; Xk < kk.additiveAnimations.length; Xk++) {
        const Fk = kk.additiveAnimations[Xk];
        0 !== Fk.weight && (tk.multiplyToRef(Fk.currentValue, ak.l.Quaternion[0]), ak.e.SlerpToRef(tk, ak.l.Quaternion[0], Fk.weight, tk))
      }
      return tk
    }

    function Uk(kk, Fk) {
      Fk && (Fk.prototype.copyAnimationRange = function(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Sk.b(this.name, "_matrix", kk.animations[0].framePerSecond, Sk.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const ak = kk.animations[0].getRange(Fk);
        if (!ak) return !1;
        const Xk = ak.from,
          bk = ak.to,
          wk = kk.animations[0].getKeys(),
          dk = kk.length,
          sk = kk.getParent(),
          Vk = this.getParent(),
          Jk = Rk && sk && dk && this.length && dk !== this.length,
          Ak = Jk && Vk && sk ? Vk.length / sk.length : 1,
          ek = Rk && !Vk && tk && (1 !== tk.x || 1 !== tk.y || 1 !== tk.z),
          yk = this.animations[0].getKeys();
        let fk, mk, Wk;
        for (let vk = 0, ik = wk.length; vk < ik; vk++) fk = wk[vk], fk.frame >= Xk && fk.frame <= bk && (Rk ? (Wk = fk.value.clone(), Jk ? (mk = Wk.getTranslation(), Wk.setTranslation(mk.scaleInPlace(Ak))) : ek && tk ? (mk = Wk.getTranslation(), Wk.setTranslation(mk.multiplyInPlace(tk))) : Wk = fk.value) : Wk = fk.value, yk.push({
          frame: fk.frame + Bk,
          value: Wk
        }));
        return this.animations[0].createRange(Fk, Xk + Bk, bk + Bk), !0
      }), kk && (kk.prototype._animate = function(kk) {
        const Fk = this._animationWrites,
          Bk = this._animationWriteCount;
        let Rk = 0;
        for (let ak = this._animationStepWriteCount; ak < Bk; ak++) {
          const kk = Fk[ak];
          kk.ws && -1 === kk.weight || (kk.ws = !0, Fk[ak] = Fk[Rk], Fk[Rk] = kk, Rk++)
        }
        for (let ak = Rk; ak < Bk; ak++) {
          const kk = Fk[ak];
          kk.runtimeAnimation = null, kk.target = null
        }
        if (this._animationWriteCount = Rk, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const tk = Hk.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = tk
        }
        this.deltaTime = void 0 !== kk ? kk : this.useConstantAnimationDeltaTime ? 16 : (tk - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = tk;
        const Xk = this._activeAnimatables;
        if (0 === Xk.length) return;
        this._animationTime += this.deltaTime;
        const bk = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let ak = 0; ak < Xk.length; ak++) {
          const kk = Xk[ak];
          !kk._animate(bk) && kk.disposeOnEnd && ak--
        }! function(kk) {
          if (kk._registeredForLateAnimationBindings.length) {
            for (let Fk = 0; Fk < kk._registeredForLateAnimationBindings.length; Fk++) {
              const Bk = kk._registeredForLateAnimationBindings.data[Fk];
              for (const kk in Bk._lateAnimationHolders) {
                const Fk = Bk._lateAnimationHolders[kk],
                  Rk = Fk.animations[0],
                  tk = Fk.originalValue;
                if (void 0 === tk || null === tk) continue;
                const Xk = Sk.b.AllowMatrixDecomposeForInterpolation && tk.m;
                let bk = Bk[kk];
                if (Xk) bk = Mk(Fk);
                else if (void 0 !== tk.w) bk = gk(Fk, bk || ak.e.Identity());
                else {
                  let kk = 0,
                    Bk = 1;
                  const ak = Rk && Rk._animationState.Oa === Sk.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Fk.totalWeight < 1) bk = ak ? tk.clone ? tk.clone() : tk : Rk && tk.scale ? tk.scale(1 - Fk.totalWeight) : Rk ? tk * (1 - Fk.totalWeight) : tk.clone ? tk.clone() : tk;
                  else if (Rk) {
                    Bk = Fk.totalWeight;
                    const Xk = Rk.weight / Bk;
                    bk = 1 !== Xk ? Rk.currentValue.scale ? Rk.currentValue.scale(Xk) : Rk.currentValue * Xk : (Fk.animations.length > 1 || Fk.additiveAnimations.length > 0) && Rk.currentValue.clone ? Rk.currentValue.clone() : Rk.currentValue, ak && (bk.addToRef ? bk.addToRef(tk, bk) : bk += tk), kk = 1
                  }
                  for (let Rk = kk; Rk < Fk.animations.length; Rk++) {
                    const kk = Fk.animations[Rk],
                      tk = kk.weight / Bk;
                    tk && (kk.currentValue.scaleAndAddToRef ? kk.currentValue.scaleAndAddToRef(tk, bk) : bk += kk.currentValue * tk)
                  }
                  for (let Rk = 0; Rk < Fk.additiveAnimations.length; Rk++) {
                    const kk = Fk.additiveAnimations[Rk],
                      Bk = kk.weight;
                    Bk && (kk.currentValue.scaleAndAddToRef ? kk.currentValue.scaleAndAddToRef(Bk, bk) : bk += kk.currentValue * Bk)
                  }
                }
                Bk[kk] = bk
              }
              Bk._lateAnimationHolders = {}
            }
            kk._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, kk.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((kk, Fk) => kk.playOrder - Fk.playOrder))
      }, kk.prototype.beginWeightedAnimation = function(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Xk = arguments.length > 6 ? arguments[6] : void 0,
          bk = arguments.length > 7 ? arguments[7] : void 0,
          wk = arguments.length > 8 ? arguments[8] : void 0,
          dk = arguments.length > 9 ? arguments[9] : void 0,
          sk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Vk = this.beginAnimation(kk, Fk, Bk, tk, ak, Xk, bk, !1, wk, dk, sk);
        return Vk.weight = Rk, Vk
      }, kk.prototype.beginAnimation = function(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ak = arguments.length > 5 ? arguments[5] : void 0,
          Xk = arguments.length > 6 ? arguments[6] : void 0,
          bk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          wk = arguments.length > 8 ? arguments[8] : void 0,
          dk = arguments.length > 9 ? arguments[9] : void 0,
          sk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (tk < 0) {
          const kk = Fk;
          Fk = Bk, Bk = kk, tk = -tk
        }
        Fk > Bk && (tk = -tk), bk && this.stopAnimation(kk, void 0, wk), Xk || (Xk = new uk(this, kk, Fk, Bk, Rk, tk, ak, void 0, dk, sk));
        const Vk = !wk || wk(kk);
        if (kk.animations && Vk && Xk.appendAnimations(kk, kk.animations), kk.getAnimatables) {
          const sk = kk.getAnimatables();
          for (let kk = 0; kk < sk.length; kk++) this.beginAnimation(sk[kk], Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk)
        }
        return Xk.reset(), Xk
      }, kk.prototype.beginHierarchyAnimation = function(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Xk = arguments.length > 6 ? arguments[6] : void 0,
          bk = arguments.length > 7 ? arguments[7] : void 0,
          wk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          dk = arguments.length > 9 ? arguments[9] : void 0,
          sk = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Vk = kk.getDescendants(Fk),
          Jk = [];
        Jk.push(this.beginAnimation(kk, Bk, Rk, tk, ak, Xk, bk, wk, dk, void 0, sk));
        for (const Ak of Vk) Jk.push(this.beginAnimation(Ak, Bk, Rk, tk, ak, Xk, bk, wk, dk, void 0, sk));
        return Jk
      }, kk.prototype.beginDirectAnimation = function(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (ak < 0) {
          const kk = Bk;
          Bk = Rk, Rk = kk, ak = -ak
        }
        Bk > Rk && (ak = -ak);
        return new uk(this, kk, Bk, Rk, tk, ak, arguments.length > 6 ? arguments[6] : void 0, Fk, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, kk.prototype.beginDirectHierarchyAnimation = function(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        let dk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const sk = kk.getDescendants(Fk),
          Vk = [];
        Vk.push(this.beginDirectAnimation(kk, Bk, Rk, tk, ak, Xk, bk, wk, dk));
        for (const Jk of sk) Vk.push(this.beginDirectAnimation(Jk, Bk, Rk, tk, ak, Xk, bk, wk, dk));
        return Vk
      }, kk.prototype.getAnimatableByTarget = function(kk) {
        for (let Fk = 0; Fk < this._activeAnimatables.length; Fk++)
          if (this._activeAnimatables[Fk].target === kk) return this._activeAnimatables[Fk];
        return null
      }, kk.prototype.getAllAnimatablesByTarget = function(kk) {
        const Fk = [];
        for (let Bk = 0; Bk < this._activeAnimatables.length; Bk++) this._activeAnimatables[Bk].target === kk && Fk.push(this._activeAnimatables[Bk]);
        return Fk
      }, kk.prototype.stopAnimation = function(kk, Fk, Bk) {
        const Rk = this.getAllAnimatablesByTarget(kk);
        for (const tk of Rk) tk.stop(Fk, Bk)
      }, kk.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let kk = 0; kk < this._activeAnimatables.length; kk++) this._activeAnimatables[kk].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const kk of this.animationGroups) kk.stop()
      })
    }
    uk.ProcessPausedAnimatables = !1;
    var ck, Gk = Bk(36768),
      Tk = Bk(39628),
      rk = Bk(39296);
    class Dk extends Tk.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(kk) {
        (kk.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.sBk(kk), this._markAsDirtyAndDecompose())
      }
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(kk, Fk.XN(), !1), this.name = kk, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Fk, this._localMatrix = Rk?.clone() ?? ak.c.Identity(), this._restMatrix = tk ?? this._localMatrix.clone(), this._bindMatrix = Xk ?? this._localMatrix.clone(), this._index = bk, this._absoluteMatrix = new ak.c, this._absoluteBindMatrix = new ak.c, this._absoluteInverseBindMatrix = new ak.c, this._finalMatrix = new ak.c, Fk.bones.push(this), this.setParent(Bk, !1), this._updateAbsoluteBindMatrices()
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
          this._parentNode = kk, this.parent && this.parent.children.push(this), Fk && this._updateAbsoluteBindMatrices(), this.mFk()
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
        this._restMatrix.sBk(kk)
      }
      setRestPose(kk) {
        this.setRestMatrix(kk)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(kk) {
        this.M_(kk)
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
          const kk = ak.l.Qe[0],
            Fk = ak.l.Quaternion[0],
            Bk = ak.l.Qe[1];
          this.getRestMatrix().decompose(kk, Fk, Bk), this._linkedTransformNode.position.sBk(Bk), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? ak.e.Identity(), this._linkedTransformNode.rotationQuaternion.sBk(Fk), this._linkedTransformNode.ta.sBk(kk)
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
        return this._decompose(), this.gkk
      }
      set position(kk) {
        this._decompose(), this.gkk.sBk(kk), this._markAsDirtyAndCompose()
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
      get ta() {
        return this.getScale()
      }
      set ta(kk) {
        this.setScale(kk)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = ak.s.Zero(), this._localRotation = ak.e.Zero(), this.gkk = ak.s.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.gkk))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, ak.c.ComposeToRef(this._localScaling, this._localRotation, this.gkk, this._localMatrix)) : this._needToCompose = !1)
      }
      M_(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.sBk(kk), Fk && this._updateAbsoluteBindMatrices(), Bk ? this._matrix = kk : this.mFk()
      }
      _updateAbsoluteBindMatrices(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (kk || (kk = this._bindMatrix), this.parent ? kk.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.sBk(kk), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Fk)
          for (let Bk = 0; Bk < this.children.length; Bk++) this.children[Bk]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      mFk() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.mFk(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.mFk(), this._needToDecompose = !0
      }
      _updatePosition(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const tk = this.getLocalMatrix();
        if (0 == Fk) Rk ? (tk.addAtIndex(12, kk.x), tk.addAtIndex(13, kk.y), tk.addAtIndex(14, kk.z)) : tk.setTranslationFromFloats(kk.x, kk.y, kk.z);
        else {
          const Fk = Dk._TmpMats[0],
            Xk = Dk._TmpVecs[0];
          this.parent ? (Fk.sBk(this.parent.getAbsoluteMatrix()), Bk && Fk.multiplyToRef(Bk.getWorldMatrix(), Fk)) : ak.c.IdentityToRef(Fk), Rk && Fk.setTranslationFromFloats(0, 0, 0), Fk.invert(), ak.s.TransformCoordinatesToRef(kk, Fk, Xk), Rk ? (tk.addAtIndex(12, Xk.x), tk.addAtIndex(13, Xk.y), tk.addAtIndex(14, Xk.z)) : tk.setTranslationFromFloats(Xk.x, Xk.y, Xk.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(kk, Fk, Bk, !0)
      }
      setPosition(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(kk, Fk, Bk, !1)
      }
      setAbsolutePosition(kk, Fk) {
        this.setPosition(kk, 1, Fk)
      }
      scale(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tk = this.getLocalMatrix(),
          Xk = Dk._TmpMats[0];
        ak.c.ScalingToRef(kk, Fk, Bk, Xk), Xk.multiplyToRef(tk, tk), Xk.invert();
        for (const ak of this.children) {
          const Rk = ak.getLocalMatrix();
          Rk.multiplyToRef(Xk, Rk), Rk.multiplyAtIndex(12, kk), Rk.multiplyAtIndex(13, Fk), Rk.multiplyAtIndex(14, Bk), ak._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Rk)
          for (const ak of this.children) ak.scale(kk, Fk, Bk, Rk)
      }
      setScale(kk) {
        this._decompose(), this._localScaling.sBk(kk), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(kk) {
        this._decompose(), kk.sBk(this._localScaling)
      }
      setYawPitchRoll(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tk = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Rk) {
          const Xk = Dk._TmpQuat;
          return ak.e.RotationYawPitchRollToRef(kk, Fk, Bk, Xk), void this.setRotationQuaternion(Xk, Rk, tk)
        }
        const Xk = Dk._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Xk, tk)) return;
        const bk = Dk._TmpMats[1];
        ak.c.RotationYawPitchRollToRef(kk, Fk, Bk, bk), Xk.multiplyToRef(bk, bk), this._rotateWithMatrix(bk, Rk, tk)
      }
      rotate(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        const tk = Dk._TmpMats[0];
        tk.setTranslationFromFloats(0, 0, 0), ak.c.RotationAxisToRef(kk, Fk, tk), this._rotateWithMatrix(tk, Bk, Rk)
      }
      setAxisAngle(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === Bk) {
          const tk = Dk._TmpQuat;
          return ak.e.RotationAxisToRef(kk, Fk, tk), void this.setRotationQuaternion(tk, Bk, Rk)
        }
        const tk = Dk._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(tk, Rk)) return;
        const Xk = Dk._TmpMats[1];
        ak.c.RotationAxisToRef(kk, Fk, Xk), tk.multiplyToRef(Xk, Xk), this._rotateWithMatrix(Xk, Bk, Rk)
      }
      setRotation(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(kk.y, kk.x, kk.z, Fk, Bk)
      }
      setRotationQuaternion(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Fk) return this._decompose(), this._localRotation.sBk(kk), void this._markAsDirtyAndCompose();
        const Rk = Dk._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Rk, Bk)) return;
        const tk = Dk._TmpMats[1];
        ak.c.FromQuaternionToRef(kk, tk), Rk.multiplyToRef(tk, tk), this._rotateWithMatrix(tk, Fk, Bk)
      }
      setRotationMatrix(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Fk) {
          const Rk = Dk._TmpQuat;
          return ak.e.FromRotationMatrixToRef(kk, Rk), void this.setRotationQuaternion(Rk, Fk, Bk)
        }
        const Rk = Dk._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Rk, Bk)) return;
        const tk = Dk._TmpMats[1];
        tk.sBk(kk), Rk.multiplyToRef(kk, tk), this._rotateWithMatrix(tk, Fk, Bk)
      }
      _rotateWithMatrix(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const Rk = this.getLocalMatrix(),
          tk = Rk.m[12],
          ak = Rk.m[13],
          Xk = Rk.m[14],
          bk = this.getParent(),
          wk = Dk._TmpMats[3],
          dk = Dk._TmpMats[4];
        bk && 1 == Fk ? (Bk ? (wk.sBk(Bk.getWorldMatrix()), bk.getAbsoluteMatrix().multiplyToRef(wk, wk)) : wk.sBk(bk.getAbsoluteMatrix()), dk.sBk(wk), dk.invert(), Rk.multiplyToRef(wk, Rk), Rk.multiplyToRef(kk, Rk), Rk.multiplyToRef(dk, Rk)) : 1 == Fk && Bk ? (wk.sBk(Bk.getWorldMatrix()), dk.sBk(wk), dk.invert(), Rk.multiplyToRef(wk, Rk), Rk.multiplyToRef(kk, Rk), Rk.multiplyToRef(dk, Rk)) : Rk.multiplyToRef(kk, Rk), Rk.setTranslationFromFloats(tk, ak, Xk), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(kk, Fk) {
        const Bk = Dk._TmpMats[2];
        return kk.sBk(this.getAbsoluteMatrix()), Fk ? (kk.multiplyToRef(Fk.getWorldMatrix(), kk), ak.c.ScalingToRef(Fk.ta.x, Fk.ta.y, Fk.ta.z, Bk)) : ak.c.IdentityToRef(Bk), kk.invert(), !isNaN(kk.m[0]) && (Bk.multiplyAtIndex(0, this._scalingDeterminant), kk.multiplyToRef(Bk, kk), !0)
      }
      rW() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Bk = ak.s.Zero();
        return this.getPositionToRef(kk, Fk, Bk), Bk
      }
      getPositionToRef() {
        let kk = arguments.length > 1 ? arguments[1] : void 0,
          Fk = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const kk = this.getLocalMatrix();
          Fk.x = kk.m[12], Fk.y = kk.m[13], Fk.z = kk.m[14]
        } else {
          const Bk = Dk._TmpMats[0].sBk(this.getAbsoluteMatrix());
          kk && Bk.multiplyToRef(kk.getWorldMatrix(), Bk), Fk.x = Bk.m[12], Fk.y = Bk.m[13], Fk.z = Bk.m[14]
        }
      }
      getAbsolutePosition() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Fk = ak.s.Zero();
        return this.getPositionToRef(1, kk, Fk), Fk
      }
      getAbsolutePositionToRef(kk, Fk) {
        this.getPositionToRef(1, kk, Fk)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.sBk(this._localMatrix);
          const kk = this._skeleton.getPoseMatrix();
          kk && this._absoluteMatrix.multiplyToRef(kk, this._absoluteMatrix)
        }
        const kk = this.children,
          Fk = kk.length;
        for (let Bk = 0; Bk < Fk; Bk++) kk[Bk].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      eZ(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Bk = ak.s.Zero();
        return this.getDirectionToRef(kk, Fk, Bk), Bk
      }
      getDirectionToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const Rk = Dk._TmpMats[0].sBk(this.getAbsoluteMatrix());
        Fk && Rk.multiplyToRef(Fk.getWorldMatrix(), Rk), ak.s.TransformNormalToRef(kk, Rk, Bk), Bk.normalize()
      }
      getRotation() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Bk = ak.s.Zero();
        return this.getRotationToRef(kk, Fk, Bk), Bk
      }
      getRotationToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const Rk = Dk._TmpQuat;
        this.getRotationQuaternionToRef(kk, Fk, Rk), Rk.toEulerAnglesToRef(Bk)
      }
      getRotationQuaternion() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Bk = ak.e.Identity();
        return this.getRotationQuaternionToRef(kk, Fk, Bk), Bk
      }
      getRotationQuaternionToRef() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Fk = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Fk.sBk(this._localRotation);
        else {
          const Bk = Dk._TmpMats[0],
            Rk = this.getAbsoluteMatrix();
          kk ? Rk.multiplyToRef(kk.getWorldMatrix(), Bk) : Bk.sBk(Rk), Bk.multiplyAtIndex(0, this._scalingDeterminant), Bk.multiplyAtIndex(1, this._scalingDeterminant), Bk.multiplyAtIndex(2, this._scalingDeterminant), Bk.decompose(void 0, Fk, void 0)
        }
      }
      getRotationMatrix() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 ? arguments[1] : void 0;
        const Bk = ak.c.Identity();
        return this.getRotationMatrixToRef(kk, Fk, Bk), Bk
      }
      getRotationMatrixToRef() {
        let kk = arguments.length > 1 ? arguments[1] : void 0,
          Fk = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Fk);
        else {
          const Bk = Dk._TmpMats[0],
            Rk = this.getAbsoluteMatrix();
          kk ? Rk.multiplyToRef(kk.getWorldMatrix(), Bk) : Bk.sBk(Rk), Bk.multiplyAtIndex(0, this._scalingDeterminant), Bk.multiplyAtIndex(1, this._scalingDeterminant), Bk.multiplyAtIndex(2, this._scalingDeterminant), Bk.getRotationMatrixToRef(Fk)
        }
      }
      getAbsolutePositionFromLocal(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Bk = ak.s.Zero();
        return this.getAbsolutePositionFromLocalToRef(kk, Fk, Bk), Bk
      }
      getAbsolutePositionFromLocalToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const Rk = Dk._TmpMats[0].sBk(this.getAbsoluteMatrix());
        Fk && Rk.multiplyToRef(Fk.getWorldMatrix(), Rk), ak.s.TransformCoordinatesToRef(kk, Rk, Bk)
      }
      getLocalPositionFromAbsolute(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Bk = ak.s.Zero();
        return this.getLocalPositionFromAbsoluteToRef(kk, Fk, Bk), Bk
      }
      getLocalPositionFromAbsoluteToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const Rk = Dk._TmpMats[0].sBk(this.getAbsoluteMatrix());
        Fk && Rk.multiplyToRef(Fk.getWorldMatrix(), Rk), Rk.invert(), ak.s.TransformCoordinatesToRef(kk, Rk, Bk)
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
    Dk._TmpVecs = (0, Gk.c)(2, ak.s.Zero), Dk._TmpQuat = ak.e.Identity(), Dk._TmpMats = (0, Gk.c)(5, ak.c.Identity), (ck = Dk.prototype).copyAnimationRange ?? (ck.copyAnimationRange = (0, rk.g)("Bone", "copyAnimationRange"));
    var zk = Bk(39489);
    let Pk = !1;
    var hk = Bk(39362),
      qk = Bk(39733),
      Ck = Bk(39741),
      Zk = Bk(39735),
      pk = Bk(39526);

    function Kk(kk, Fk) {
      const Bk = (0, Ak.RandomRange)(0, 1);
      sk.i.LerpToRef(Fk.color1, Fk.color2, Bk, kk.color)
    }

    function xk(kk, Fk) {
      Fk.colorDead.subtractToRef(kk.color, Fk._colorDiff), Fk._colorDiff.scaleToRef(1 / kk.lifeTime, kk.colorStep)
    }

    function jk(kk, Fk) {
      kk._properties.currentColorGradient = Fk._colorGradients[0], kk._properties.currentColorGradient.getColorToRef(kk.color), kk._properties.currentColor1.sBk(kk.color), Fk._colorGradients.length > 1 ? Fk._colorGradients[1].getColorToRef(kk._properties.currentColor2) : kk._properties.currentColor2.sBk(kk.color)
    }

    function lk(kk, Fk) {
      const Bk = Fk._colorGradients;
      Rk.i.GetCurrentGradient(Fk._ratio, Bk, ((Fk, Bk, Rk) => {
        Fk !== kk._properties.currentColorGradient && (kk._properties.currentColor1.sBk(kk._properties.currentColor2), Bk.getColorToRef(kk._properties.currentColor2), kk._properties.currentColorGradient = Fk), sk.i.LerpToRef(kk._properties.currentColor1, kk._properties.currentColor2, Rk, kk.color), kk.color.a < 0 && (kk.color.a = 0)
      }))
    }

    function nk(kk, Fk) {
      kk.colorStep.scaleToRef(Fk._scaledUpdateSpeed, Fk._scaledColorStep), kk.color.addInPlace(Fk._scaledColorStep), kk.color.a < 0 && (kk.color.a = 0)
    }

    function Ik(kk, Fk) {
      Rk.i.GetCurrentGradient(Fk._ratio, Fk._angularSpeedGradients, ((Fk, Bk, Rk) => {
        Fk !== kk._properties.currentAngularSpeedGradient && (kk._properties.currentAngularSpeed1 = kk._properties.currentAngularSpeed2, kk._properties.currentAngularSpeed2 = Bk.getFactor(), kk._properties.currentAngularSpeedGradient = Fk), kk.angularSpeed = (0, Ak.Lerp)(kk._properties.currentAngularSpeed1, kk._properties.currentAngularSpeed2, Rk)
      }))
    }

    function Qk(kk, Fk) {
      kk.angle += kk.angularSpeed * Fk._scaledUpdateSpeed
    }

    function kF(kk, Fk) {
      Fk.particleEmitterType.startDirectionFunction(Fk._emitterWorldMatrix, kk.direction, kk, Fk.isLocal, Fk._emitterInverseWorldMatrix)
    }

    function FF(kk, Fk) {
      Fk.startDirectionFunction(Fk._emitterWorldMatrix, kk.direction, kk, Fk.isLocal)
    }

    function BF(kk, Fk) {
      kk._properties.currentVelocityGradient = Fk._velocityGradients[0], kk._properties.currentVelocity1 = kk._properties.currentVelocityGradient.getFactor(), Fk._velocityGradients.length > 1 ? kk._properties.currentVelocity2 = Fk._velocityGradients[1].getFactor() : kk._properties.currentVelocity2 = kk._properties.currentVelocity1
    }

    function RF(kk, Fk) {
      kk._properties.currentLimitVelocityGradient = Fk._limitVelocityGradients[0], kk._properties.currentLimitVelocity1 = kk._properties.currentLimitVelocityGradient.getFactor(), Fk._limitVelocityGradients.length > 1 ? kk._properties.currentLimitVelocity2 = Fk._limitVelocityGradients[1].getFactor() : kk._properties.currentLimitVelocity2 = kk._properties.currentLimitVelocity1
    }

    function tF(kk, Fk) {
      Rk.i.GetCurrentGradient(Fk._ratio, Fk._velocityGradients, ((Fk, Bk, Rk) => {
        Fk !== kk._properties.currentVelocityGradient && (kk._properties.currentVelocity1 = kk._properties.currentVelocity2, kk._properties.currentVelocity2 = Bk.getFactor(), kk._properties.currentVelocityGradient = Fk), kk._properties.directionScale *= (0, Ak.Lerp)(kk._properties.currentVelocity1, kk._properties.currentVelocity2, Rk)
      }))
    }

    function aF(kk, Fk) {
      Rk.i.GetCurrentGradient(Fk._ratio, Fk._limitVelocityGradients, ((Bk, Rk, tk) => {
        Bk !== kk._properties.currentLimitVelocityGradient && (kk._properties.currentLimitVelocity1 = kk._properties.currentLimitVelocity2, kk._properties.currentLimitVelocity2 = Rk.getFactor(), kk._properties.currentLimitVelocityGradient = Bk);
        const ak = (0, Ak.Lerp)(kk._properties.currentLimitVelocity1, kk._properties.currentLimitVelocity2, tk);
        kk.direction.length() > ak && kk.direction.scaleInPlace(Fk.limitVelocityDamping)
      }))
    }

    function XF(kk) {
      kk.direction.scaleToRef(kk._properties.directionScale, kk._properties.scaledDirection)
    }

    function bF(kk, Fk) {
      Fk.particleEmitterType.startPositionFunction(Fk._emitterWorldMatrix, kk.position, kk, Fk.isLocal)
    }

    function wF(kk, Fk) {
      Fk.startPositionFunction(Fk._emitterWorldMatrix, kk.position, kk, Fk.isLocal)
    }

    function dF(kk, Fk) {
      kk._properties.localPosition ? kk._properties.localPosition.sBk(kk.position) : kk._properties.localPosition = kk.position.clone(), ak.s.TransformCoordinatesToRef(kk._properties.localPosition, Fk._emitterWorldMatrix, kk.position)
    }

    function sF(kk, Fk) {
      Fk.isLocal && kk._properties.localPosition ? (kk._properties.localPosition.addInPlace(kk._properties.scaledDirection), ak.s.TransformCoordinatesToRef(kk._properties.localPosition, Fk._emitterWorldMatrix, kk.position)) : kk.position.addInPlace(kk._properties.scaledDirection)
    }

    function VF(kk, Fk) {
      kk._properties.currentDragGradient = Fk._dragGradients[0], kk._properties.currentDrag1 = kk._properties.currentDragGradient.getFactor(), Fk._dragGradients.length > 1 ? kk._properties.currentDrag2 = Fk._dragGradients[1].getFactor() : kk._properties.currentDrag2 = kk._properties.currentDrag1
    }

    function JF(kk, Fk) {
      Rk.i.GetCurrentGradient(Fk._ratio, Fk._dragGradients, ((Fk, Bk, Rk) => {
        Fk !== kk._properties.currentDragGradient && (kk._properties.currentDrag1 = kk._properties.currentDrag2, kk._properties.currentDrag2 = Bk.getFactor(), kk._properties.currentDragGradient = Fk);
        const tk = (0, Ak.Lerp)(kk._properties.currentDrag1, kk._properties.currentDrag2, Rk);
        kk._properties.scaledDirection.scaleInPlace(1 - tk)
      }))
    }

    function AF(kk, Fk) {
      kk._properties.randomNoiseCoordinates1 && kk._properties.randomNoiseCoordinates2 ? (kk._properties.randomNoiseCoordinates1.E1(Math.random(), Math.random(), Math.random()), kk._properties.randomNoiseCoordinates2.E1(Math.random(), Math.random(), Math.random())) : (kk._properties.randomNoiseCoordinates1 = new ak.s(Math.random(), Math.random(), Math.random()), kk._properties.randomNoiseCoordinates2 = new ak.s(Math.random(), Math.random(), Math.random()))
    }

    function eF(kk, Fk) {
      const Bk = Fk._noiseTextureData,
        Rk = Fk._noiseTextureSize;
      if (Bk && Rk && kk._properties.randomNoiseCoordinates1 && kk._properties.randomNoiseCoordinates2) {
        const tk = Fk._fetchR(kk._properties.randomNoiseCoordinates1.x, kk._properties.randomNoiseCoordinates1.y, Rk.width, Rk.height, Bk),
          Xk = Fk._fetchR(kk._properties.randomNoiseCoordinates1.z, kk._properties.randomNoiseCoordinates2.x, Rk.width, Rk.height, Bk),
          bk = Fk._fetchR(kk._properties.randomNoiseCoordinates2.y, kk._properties.randomNoiseCoordinates2.z, Rk.width, Rk.height, Bk),
          wk = ak.l.Qe[0],
          dk = ak.l.Qe[1];
        wk.E1((2 * tk - 1) * Fk.noiseStrength.x, (2 * Xk - 1) * Fk.noiseStrength.y, (2 * bk - 1) * Fk.noiseStrength.z), wk.scaleToRef(Fk._tempScaledUpdateSpeed, dk), kk.direction.addInPlace(dk)
      }
    }

    function yF(kk, Fk) {
      Fk.gravity.scaleToRef(Fk._tempScaledUpdateSpeed, Fk._scaledGravity), kk.direction.addInPlace(Fk._scaledGravity)
    }

    function fF(kk, Fk) {
      kk.size = (0, Ak.RandomRange)(Fk.minSize, Fk.maxSize), kk.scale.E1((0, Ak.RandomRange)(Fk.minScaleX, Fk.maxScaleX), (0, Ak.RandomRange)(Fk.minScaleY, Fk.maxScaleY))
    }

    function mF(kk, Fk) {
      kk._properties.currentSizeGradient = Fk._sizeGradients[0], kk._properties.currentSize1 = kk._properties.currentSizeGradient.getFactor(), kk.size = kk._properties.currentSize1, Fk._sizeGradients.length > 1 ? kk._properties.currentSize2 = Fk._sizeGradients[1].getFactor() : kk._properties.currentSize2 = kk._properties.currentSize1, kk.scale.E1((0, Ak.RandomRange)(Fk.minScaleX, Fk.maxScaleX), (0, Ak.RandomRange)(Fk.minScaleY, Fk.maxScaleY))
    }

    function WF(kk, Fk) {
      const Bk = Fk._actualFrame / Fk.targetStopDuration;
      Rk.i.GetCurrentGradient(Bk, Fk._startSizeGradients, ((Bk, Rk, tk) => {
        Bk !== Fk._currentStartSizeGradient && (Fk._currentStartSize1 = Fk._currentStartSize2, Fk._currentStartSize2 = Rk.getFactor(), Fk._currentStartSizeGradient = Bk);
        const ak = (0, Ak.Lerp)(Fk._currentStartSize1, Fk._currentStartSize2, tk);
        kk.scale.scaleInPlace(ak)
      }))
    }

    function vF(kk, Fk) {
      Rk.i.GetCurrentGradient(Fk._ratio, Fk._sizeGradients, ((Fk, Bk, Rk) => {
        Fk !== kk._properties.currentSizeGradient && (kk._properties.currentSize1 = kk._properties.currentSize2, kk._properties.currentSize2 = Bk.getFactor(), kk._properties.currentSizeGradient = Fk), kk.size = (0, Ak.Lerp)(kk._properties.currentSize1, kk._properties.currentSize2, Rk)
      }))
    }

    function iF(kk, Fk) {
      kk.remapData = new ak.v(0, 1, 0, 1)
    }

    function YF(kk, Fk) {
      Fk._colorRemapGradients && Fk._colorRemapGradients.length > 0 && Rk.i.GetCurrentGradient(Fk._ratio, Fk._colorRemapGradients, ((Fk, Bk, Rk) => {
        const tk = (0, Ak.Lerp)(Fk.factor1, Bk.factor1, Rk),
          ak = (0, Ak.Lerp)(Fk.factor2, Bk.factor2, Rk);
        kk.remapData.x = tk, kk.remapData.y = ak - tk
      })), Fk._alphaRemapGradients && Fk._alphaRemapGradients.length > 0 && Rk.i.GetCurrentGradient(Fk._ratio, Fk._alphaRemapGradients, ((Fk, Bk, Rk) => {
        const tk = (0, Ak.Lerp)(Fk.factor1, Bk.factor1, Rk),
          ak = (0, Ak.Lerp)(Fk.factor2, Bk.factor2, Rk);
        kk.remapData.z = tk, kk.remapData.w = ak - tk
      }))
    }

    function oF(kk, Fk) {
      const Bk = (0, Ak.Clamp)(Fk._actualFrame / Fk.targetStopDuration);
      Rk.i.GetCurrentGradient(Bk, Fk._lifeTimeGradients, ((Fk, Rk) => {
        const tk = Fk,
          ak = Rk,
          Xk = tk.getFactor(),
          bk = ak.getFactor(),
          wk = (Bk - tk.gradient) / (ak.gradient - tk.gradient);
        kk.lifeTime = (0, Ak.Lerp)(Xk, bk, wk)
      })), Fk._emitPower = (0, Ak.RandomRange)(Fk.minEmitPower, Fk.maxEmitPower)
    }

    function LF(kk, Fk) {
      kk.lifeTime = (0, Ak.RandomRange)(Fk.minLifeTime, Fk.maxLifeTime), Fk._emitPower = (0, Ak.RandomRange)(Fk.minEmitPower, Fk.maxEmitPower)
    }

    function OF(kk, Fk) {
      0 === Fk._emitPower ? (kk._properties.initialDirection ? kk._properties.initialDirection.sBk(kk.direction) : kk._properties.initialDirection = kk.direction.clone(), kk.direction.set(0, 0, 0)) : (kk._properties.initialDirection = null, kk.direction.scaleInPlace(Fk._emitPower)), kk.direction.addInPlace(Fk._inheritedVelocityOffset)
    }

    function EF(kk, Fk) {
      kk.angularSpeed = (0, Ak.RandomRange)(Fk.minAngularSpeed, Fk.maxAngularSpeed), kk.angle = (0, Ak.RandomRange)(Fk.minInitialRotation, Fk.maxInitialRotation)
    }

    function SF(kk, Fk) {
      kk._properties.currentAngularSpeedGradient = Fk._angularSpeedGradients[0], kk.angularSpeed = kk._properties.currentAngularSpeedGradient.getFactor(), kk._properties.currentAngularSpeed1 = kk.angularSpeed, Fk._angularSpeedGradients.length > 1 ? kk._properties.currentAngularSpeed2 = Fk._angularSpeedGradients[1].getFactor() : kk._properties.currentAngularSpeed2 = kk._properties.currentAngularSpeed1, kk.angle = (0, Ak.RandomRange)(Fk.minInitialRotation, Fk.maxInitialRotation)
    }

    function NF(kk, Fk) {
      kk._properties.initialStartSpriteCellId = Fk.startSpriteCellID, kk._properties.initialEndSpriteCellId = Fk.endSpriteCellID, kk._properties.initialSpriteCellLoop = Fk.spriteCellLoop
    }

    function HF(kk, Fk) {
      kk.previousItem = Fk.previousItem, kk.nextItem = Fk, Fk.previousItem && (Fk.previousItem.nextItem = kk), Fk.previousItem = kk
    }

    function uF(kk, Fk) {
      kk.previousItem = Fk, kk.nextItem = Fk.nextItem, Fk.nextItem && (Fk.nextItem.previousItem = kk), Fk.nextItem = kk
    }

    function MF(kk) {
      kk.previousItem && (kk.previousItem.nextItem = kk.nextItem), kk.nextItem && (kk.nextItem.previousItem = kk.previousItem)
    }
    var gF = Bk(39785);
    class UF extends Lk {
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
        this._startPositionFunction !== kk && (this._startPositionFunction = kk, this._positionCreation.process = kk ? wF : bF)
      }
      set onDispose(kk) {
        this._onDisposeObserver && this.yN.remove(this._onDisposeObserver), this._onDisposeObserver = this.yN.add(kk)
      }
      get BBk() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(kk) {
        this._useRampGradients !== kk && (this._useRampGradients = kk, this._resetEffect(), kk ? (this._rampCreation = {
          process: iF,
          previousItem: null,
          nextItem: null
        }, uF(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: YF,
          previousItem: null,
          nextItem: null
        }, uF(this._remapGradientProcessing, this._gravityProcessing))) : (MF(this._rampCreation), MF(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(kk) {
        this._isLocal !== kk && (this._isLocal = kk, kk ? (this._isLocalCreation = {
          process: dF,
          previousItem: null,
          nextItem: null
        }, uF(this._isLocalCreation, this._positionCreation)) : MF(this._isLocalCreation))
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
          process: NF,
          previousItem: null,
          nextItem: null
        }, uF(this._sheetCreation, this._colorDeadCreation)) : MF(this._sheetCreation), this._reset())
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
        this._customWrappers[Fk] = new qk.c(this._engine), this._customWrappers[Fk].effect = kk, this._customWrappers[Fk].drawContext && (this._customWrappers[Fk].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new tk.e), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = kk, !kk) return MF(this._noiseCreation), void MF(this._noiseProcessing);
          this._noiseCreation = {
            process: AF,
            previousItem: null,
            nextItem: null
          }, uF(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: eF,
            previousItem: null,
            nextItem: null
          }, uF(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Xk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          dk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        Pk || (Pk = !0, Uk(zk.c, Dk)), (0, hk.d)(), super(kk), this._emitterInverseWorldMatrix = ak.c.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new ak.s, this.yN = new tk.e, this.onStoppedObservable = new tk.e, this.onStartedObservable = new tk.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new sk.i(0, 0, 0, 0), this._colorDiff = new sk.i(0, 0, 0, 0), this._scaledGravity = ak.s.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = kk => {}, this.recycleParticle = kk => {
          const Fk = this._particles.pop();
          Fk !== kk && Fk.copyTo(kk), Fk.metadata = null, this._stockParticles.push(Fk)
        }, this._createParticle = () => {
          let kk;
          return 0 !== this._stockParticles.length ? (kk = this._stockParticles.pop(), kk._reset()) : kk = new Ek(this), this._prepareParticle(kk), kk
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Fk, this._epsilon = bk, Bk && "Scene" !== Bk.getClassName() ? (this._engine = Bk, this.defaultProjectionMatrix = ak.c.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = Bk || wk.c.LastCreatedScene, this._engine = this._scene.ne(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.fY.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: LF,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: bF,
          previousItem: null,
          nextItem: null
        }, uF(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: kF,
          previousItem: null,
          nextItem: null
        }, uF(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: OF,
          previousItem: null,
          nextItem: null
        }, uF(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: fF,
          previousItem: null,
          nextItem: null
        }, uF(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: EF,
          previousItem: null,
          nextItem: null
        }, uF(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Kk,
          previousItem: null,
          nextItem: null
        }, uF(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: xk,
          previousItem: null,
          nextItem: null
        }, uF(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, dk || (this._colorProcessing = {
          process: nk,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Qk,
          previousItem: null,
          nextItem: null
        }, uF(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: XF,
          previousItem: null,
          nextItem: null
        }, uF(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: sF,
          previousItem: null,
          nextItem: null
        }, uF(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: yF,
          previousItem: null,
          nextItem: null
        }, uF(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Xk, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new qk.c(this._engine)
        }, this._customWrappers[0].effect = Rk, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Vk.c, this.updateFunction = kk => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((kk => {
            this._noiseTextureData = kk
          })));
          const Fk = kk === this._particles;
          for (let Bk = 0; Bk < kk.length; Bk++) {
            const Rk = kk[Bk];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const tk = Rk.age;
            if (Rk.age += this._tempScaledUpdateSpeed, Rk.age > Rk.lifeTime) {
              const kk = Rk.age - tk,
                Fk = Rk.lifeTime - tk;
              this._tempScaledUpdateSpeed = Fk * this._tempScaledUpdateSpeed / kk, Rk.age = Rk.lifeTime
            }
            this._ratio = Rk.age / Rk.lifeTime, Rk._properties.directionScale = this._tempScaledUpdateSpeed;
            let ak = this._updateQueueStart;
            for (; ak;) ak.process(Rk, this), ak = ak.nextItem;
            if (this._isAnimationSheetEnabled && !dk && Rk.updateCellIndex(), Rk._inheritParticleInfoToSubEmitters(), Rk.age >= Rk.lifeTime) {
              if (this._emitFromParticle(Rk), Rk._properties.attachedSubEmitters) {
                for (const kk of Rk._properties.attachedSubEmitters) kk.particleSystem.disposeOnStop = !0, kk.particleSystem.stop();
                Rk._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Rk), Fk && Bk--
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
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = oF : this._lifeTimeCreation.process = LF
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: WF,
          previousItem: null,
          nextItem: null
        }, uF(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (MF(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(kk) {
        this.targetStopDuration !== kk && (this._targetStopDuration = kk, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(kk, Fk, Bk) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, kk, Fk, Bk), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(kk) {
        return this._removeFactorGradient(this._lifeTimeGradients, kk), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(kk, Fk, Bk) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = mF, this._sizeGradientProcessing = {
          process: vF,
          previousItem: null,
          nextItem: null
        }, HF(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, kk, Fk, Bk), this
      }
      removeSizeGradient(kk) {
        return this._removeFactorGradient(this._sizeGradients, kk), 0 === this._sizeGradients?.length && (MF(this._sizeGradientProcessing), this._sizeCreation.process = fF), this
      }
      addColorRemapGradient(kk, Fk, Bk) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, kk, Fk, Bk), this
      }
      removeColorRemapGradient(kk) {
        return this._removeFactorGradient(this._colorRemapGradients, kk), this
      }
      addAlphaRemapGradient(kk, Fk, Bk) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, kk, Fk, Bk), this
      }
      removeAlphaRemapGradient(kk) {
        return this._removeFactorGradient(this._alphaRemapGradients, kk), this
      }
      addAngularSpeedGradient(kk, Fk, Bk) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = SF, this._angularSpeedGradientProcessing = {
          process: Ik,
          previousItem: null,
          nextItem: null
        }, HF(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, kk, Fk, Bk), this
      }
      removeAngularSpeedGradient(kk) {
        return this._removeFactorGradient(this._angularSpeedGradients, kk), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = EF, MF(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(kk, Fk, Bk) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: BF,
          previousItem: null,
          nextItem: null
        }, uF(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: tF,
          previousItem: null,
          nextItem: null
        }, HF(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, kk, Fk, Bk), this
      }
      removeVelocityGradient(kk) {
        return this._removeFactorGradient(this._velocityGradients, kk), 0 === this._velocityGradients?.length && (MF(this._velocityCreation), MF(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(kk, Fk, Bk) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: RF,
          previousItem: null,
          nextItem: null
        }, uF(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: aF,
          previousItem: null,
          nextItem: null
        }, uF(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, kk, Fk, Bk), this
      }
      removeLimitVelocityGradient(kk) {
        return this._removeFactorGradient(this._limitVelocityGradients, kk), 0 === this._limitVelocityGradients?.length && (MF(this._limitVelocityCreation), MF(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(kk, Fk, Bk) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: VF,
          previousItem: null,
          nextItem: null
        }, HF(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: JF,
          previousItem: null,
          nextItem: null
        }, HF(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, kk, Fk, Bk), this
      }
      removeDragGradient(kk) {
        return this._removeFactorGradient(this._dragGradients, kk), 0 === this._dragGradients?.length && (MF(this._dragCreation), MF(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(kk, Fk, Bk) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, kk, Fk, Bk), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(kk) {
        return this._removeFactorGradient(this._startSizeGradients, kk), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const kk = new Uint8Array(4 * this._rawTextureWidth),
          Fk = sk.n.Color3[0];
        for (let Bk = 0; Bk < this._rawTextureWidth; Bk++) {
          const tk = Bk / this._rawTextureWidth;
          Rk.i.GetCurrentGradient(tk, this._rampGradients, ((Rk, tk, ak) => {
            sk.e.LerpToRef(Rk.color, tk.color, ak, Fk), kk[4 * Bk] = 255 * Fk.r, kk[4 * Bk + 1] = 255 * Fk.g, kk[4 * Bk + 2] = 255 * Fk.b, kk[4 * Bk + 3] = 255
          }))
        }
        this._rampGradientsTexture = bk.d.CreateRGBATexture(kk, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
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
        const Bk = new Rk.f(kk, Fk);
        return this._rampGradients.push(Bk), this._syncRampGradientTexture(), this
      }
      removeRampGradient(kk) {
        return this._removeGradientAndTexture(kk, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(kk, Fk, Bk) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = jk, this._colorProcessing.process = lk);
        const tk = new Rk.b(kk, Fk, Bk);
        return this._colorGradients.push(tk), this._colorGradients.sort(((kk, Fk) => kk.gradient < Fk.gradient ? -1 : kk.gradient > Fk.gradient ? 1 : 0)), this
      }
      removeColorGradient(kk) {
        if (!this._colorGradients) return this;
        let Fk = 0;
        for (const Bk of this._colorGradients) {
          if (Bk.gradient === kk) {
            this._colorGradients.splice(Fk, 1);
            break
          }
          Fk++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Kk, this._colorProcessing.process = nk), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const kk of this._drawWrappers)
            if (kk)
              for (const Fk of kk) Fk?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(kk, Fk, Bk, Rk, tk) {
        return tk[4 * (((kk = .5 * Math.abs(kk) + .5) * Bk % Bk | 0) + ((Fk = .5 * Math.abs(Fk) + .5) * Rk % Rk | 0) * Bk)] / 255
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
        this._vertexData = new Float32Array(this._capacity * Fk), this._vertexBuffer = new Xk.d(kk, this._vertexData, !0, Fk);
        let Bk = 0;
        const Rk = this._vertexBuffer.createVertexBuffer(Xk.n.PositionKind, Bk, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Xk.n.PositionKind] = Rk, Bk += 3;
        const tk = this._vertexBuffer.createVertexBuffer(Xk.n.ColorKind, Bk, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Xk.n.ColorKind] = tk, Bk += 4;
        const ak = this._vertexBuffer.createVertexBuffer("angle", Bk, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = ak, Bk += 1;
        const bk = this._vertexBuffer.createVertexBuffer("size", Bk, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = bk, Bk += 2, this._isAnimationSheetEnabled) {
          const kk = this._vertexBuffer.createVertexBuffer("cellIndex", Bk, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = kk, Bk += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const kk = this._vertexBuffer.createVertexBuffer("direction", Bk, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = kk, Bk += 3
        }
        if (this._useRampGradients) {
          const kk = this._vertexBuffer.createVertexBuffer("remapData", Bk, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = kk, Bk += 4
        }
        let wk;
        if (this._useInstancing) {
          const Fk = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Xk.d(kk, Fk, !1, 2), wk = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else wk = this._vertexBuffer.createVertexBuffer("offset", Bk, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = wk, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const kk = [],
          Fk = [];
        let Bk = 0;
        for (let Rk = 0; Rk < this._capacity; Rk++) kk.push(Bk), kk.push(Bk + 1), kk.push(Bk + 2), kk.push(Bk), kk.push(Bk + 2), kk.push(Bk + 3), Fk.push(Bk, Bk + 1, Bk + 1, Bk + 2, Bk + 2, Bk + 3, Bk + 3, Bk, Bk, Bk + 3), Bk += 4;
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
      _appendParticleVertex(kk, Fk, Bk, Rk) {
        let tk = kk * this._vertexBufferSize;
        const Xk = ak.l.Qe[0].sBk(this._scene?.floatingOriginOffset || ak.s.ZeroReadOnly);
        if (this._vertexData[tk++] = Fk.position.x + this.worldOffset.x - Xk.x, this._vertexData[tk++] = Fk.position.y + this.worldOffset.y - Xk.y, this._vertexData[tk++] = Fk.position.z + this.worldOffset.z - Xk.z, this._vertexData[tk++] = Fk.color.r, this._vertexData[tk++] = Fk.color.g, this._vertexData[tk++] = Fk.color.b, this._vertexData[tk++] = Fk.color.a, this._vertexData[tk++] = Fk.angle, this._vertexData[tk++] = Fk.scale.x * Fk.size, this._vertexData[tk++] = Fk.scale.y * Fk.size, this._isAnimationSheetEnabled && (this._vertexData[tk++] = Fk.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[tk++] = Fk.direction.x, this._vertexData[tk++] = Fk.direction.y, this._vertexData[tk++] = Fk.direction.z);
        else if (Fk._properties.initialDirection) {
          let kk = Fk._properties.initialDirection;
          this.isLocal && (ak.s.TransformNormalToRef(kk, this._emitterWorldMatrix, ak.l.Qe[0]), kk = ak.l.Qe[0]), 0 === kk.x && 0 === kk.z && (kk.x = .001), this._vertexData[tk++] = kk.x, this._vertexData[tk++] = kk.y, this._vertexData[tk++] = kk.z
        } else {
          let kk = Fk.direction;
          this.isLocal && (ak.s.TransformNormalToRef(kk, this._emitterWorldMatrix, ak.l.Qe[0]), kk = ak.l.Qe[0]), 0 === kk.x && 0 === kk.z && (kk.x = .001), this._vertexData[tk++] = kk.x, this._vertexData[tk++] = kk.y, this._vertexData[tk++] = kk.z
        }
        this._useRampGradients && Fk.remapData && (this._vertexData[tk++] = Fk.remapData.x, this._vertexData[tk++] = Fk.remapData.y, this._vertexData[tk++] = Fk.remapData.z, this._vertexData[tk++] = Fk.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === Bk ? Bk = this._epsilon : 1 === Bk && (Bk = 1 - this._epsilon), 0 === Rk ? Rk = this._epsilon : 1 === Rk && (Rk = 1 - this._epsilon)), this._vertexData[tk++] = Bk, this._vertexData[tk] = Rk)
      }
      _prepareParticle(kk) {}
      _createNewOnes(kk) {
        let Fk;
        for (let Bk = 0; Bk < kk && this._particles.length !== this._capacity; Bk++) {
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
          this._emitterWorldMatrix = ak.c.Translation(kk.x, kk.y, kk.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(kk)
      }
      static _GetAttributeNamesOrOptions() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = [Xk.n.PositionKind, Xk.n.ColorKind, "angle", "offset", "size"];
        return kk && Rk.push("cellIndex"), Fk || Rk.push("direction"), Bk && Rk.push("remapData"), Rk
      }
      static _GetEffectCreationOptions() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Ck.b)(Rk), kk && Rk.push("particlesInfos"), Fk && Rk.push("logarithmicDepthConstant"), Bk && (Rk.push("vFogInfos"), Rk.push("vFogColor")), Rk
      }
      fillDefines(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Ck.i)(this, this._scene, kk), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && kk.push("#define FOG")), this._isAnimationSheetEnabled && kk.push("#define ANIMATESHEET"), this.useLogarithmicDepth && kk.push("#define LOGARITHMICDEPTH"), Fk === Lk.BLENDMODE_MULTIPLY && kk.push("#define BLENDMULTIPLYMODE"), this.isLocal && kk.push("#define LOCAL"), this._useRampGradients && kk.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (kk.push("#define BILLBOARD"), this.billboardMode) {
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
        Bk && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), kk.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(kk, Fk, Bk) {
        Fk.push(...UF._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), kk.push(...UF._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), Bk.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, pk.d)(kk, this._imageProcessingConfigurationDefines), (0, pk.b)(Bk, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(kk) {
        var Fk;
        const Bk = this._getCustomDrawWrapper(kk);
        if (Bk?.effect) return Bk;
        const Rk = [];
        this.fillDefines(Rk, kk);
        const ak = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Xk = gF.c._PrepareStringDefines(ak, Rk),
          bk = Xk ? gF.c.GetConfiguration(ak) : void 0;
        let wk = this._drawWrappers[ak];
        wk || (wk = this._drawWrappers[ak] = [], 0 === ak || this._renderPassObserver || (this._renderPassObserver = ((Fk = this._engine)._onReleaseRenderPassObservable ?? (Fk._onReleaseRenderPassObservable = new tk.e)).add((kk => {
          const Fk = this._drawWrappers[kk];
          if (Fk) {
            for (const kk of Fk) kk?.dispose();
            delete this._drawWrappers[kk]
          }
        }))));
        let dk = wk[kk];
        dk || (dk = new qk.c(this._engine), dk.drawContext && (dk.drawContext.useInstancing = this._useInstancing), wk[kk] = dk);
        const sk = Rk.join("\n");
        if (dk.defines !== sk) {
          const kk = [],
            Fk = [],
            Bk = [];
          this.fillUniformsAttributesAndSamplerNames(Fk, kk, Bk), Xk && (Fk.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== bk?.defines.PREPASS_LOCAL_POSITION_INDEX && Fk.push("inverseEmitterWM", "geometryWorldOffset")), dk.setEffect(this._engine.createEffect("particles", {
            attributes: kk,
            uniformsNames: Fk,
            samplers: Bk,
            defines: sk,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Xk,
            indexParameters: Xk ? {
              buffersCount: bk?._mrtCount ?? 0
            } : void 0
          }, this._engine), sk)
        }
        return dk
      }
      _bindGeometryRendering(kk) {
        const Fk = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Bk = gF.c.GetConfiguration(Fk);
        if (!Bk?._defines) return;
        kk.setFloat("objectId", 0), kk.setInt("meshBlendTag", 0);
        const Rk = this._scene?.activeCamera;
        if (kk.setFloat2("cameraInfo", Rk?.minZ ?? 0, Rk?.maxZ ?? 1), this.isLocal && void 0 !== Bk.defines.PREPASS_LOCAL_POSITION_INDEX) {
          kk.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Fk = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || ak.s.ZeroReadOnly, ak.l.Qe[0]);
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
              const Bk = this._particles[Fk];
              this._appendParticleVertices(kk, Bk), kk += this._useInstancing ? 1 : 4
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
          Rk.i.GetCurrentGradient(Fk, this._emitRateGradients, ((Fk, Bk, Rk) => {
            Fk !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = Bk.getFactor(), this._currentEmitRateGradient = Fk), kk = (0, Ak.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Rk)
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
        this._engine.isWebGPU && !UF.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Bk.e(336).then((() => Bk(60942))), Bk.e(330).then((() => Bk(60947)))])) : await Promise.all([Bk.e(319).then((() => Bk(60952))), Promise.all([Bk.e(312), Bk.e(348)]).then((() => Bk(60959)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== Lk.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(Lk.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(Lk.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(kk) {
        const Fk = this._getWrapper(kk),
          Bk = Fk.effect,
          Rk = this._engine;
        Rk.enableEffect(Fk);
        const tk = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        Bk.setTexture("diffuseSampler", this.particleTexture), Bk.setMatrix("view", tk);
        const Xk = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (Bk.setMatrix("projection", Xk), this._isAnimationSheetEnabled && this.particleTexture) {
          const kk = this.particleTexture.getBaseSize();
          Bk.setFloat3("particlesInfos", this.spriteCellWidth / kk.width, this.spriteCellHeight / kk.height, this.spriteCellWidth / kk.width)
        }
        if (Bk.setVector2("translationPivot", this.translationPivot), Bk.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const kk = this._scene.activeCamera;
          Bk.setVector3("eyePosition", kk.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), Bk.setTexture("rampSampler", this._rampGradientsTexture));
        const bk = Bk.defines;
        this._scene && ((0, Ck.e)(Bk, this, this._scene), this.applyFog && (0, Zk.i)(this._scene, void 0, Bk)), bk.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (tk.invertToRef(ak.l.Matrix[0]), Bk.setMatrix("invView", ak.l.Matrix[0])), Bk._multiTarget && this._bindGeometryRendering(Bk), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Rk.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, Bk) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, Bk)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Rk.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, Bk) : Rk.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, Bk), this.useLogarithmicDepth && this._scene && (0, Zk.u)(bk, Bk, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(Bk), this._setEngineBasedOnBlendMode(kk), Bk._multiTarget && gF.c._BindZeroAlphaDiscard(Rk, Bk);
        let wk = !1;
        try {
          gF.c._BindAttachmentsForEffect(Rk, Bk) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(Bk), this._useInstancing ? this._scene?.forceWireframe ? Rk.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Rk.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Rk.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Rk.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), wk = !0)
        } finally {
          gF.c._RestoreAttachments(Rk)
        }
        return wk ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const kk = this._engine;
        let Fk;
        return kk.setState && (kk.setState(!1), this.forceDepthWrite && kk.setDepthWrite(!0)), Fk = this.blendMode === Lk.BLENDMODE_MULTIPLYADD ? this._render(Lk.BLENDMODE_MULTIPLY) + this._render(Lk.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Fk
      }
      _onDispose() {}
      dispose() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), kk && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), kk && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Fk, Bk), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const kk = this._scene.fY.indexOf(this);
          kk > -1 && this._scene.fY.splice(kk, 1), this._scene._activeParticleSystems.dispose()
        }
        this.yN.notifyObservers(this), this.yN.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    UF.ForceGLSL = !1;
    var cF, GF = Bk(36798);
    ! function(kk) {
      kk[kk.ATTACHED = 0] = "ATTACHED", kk[kk.END = 1] = "END"
    }(cF || (cF = {}));
    class TF {
      constructor(kk) {
        if (this.particleSystem = kk, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !kk.emitter || !kk.emitter.dispose) {
          const Fk = (0, GF.c)("BABYLON.AbstractMesh");
          kk.emitter = new Fk("SubemitterSystemEmitter", kk.XN()), kk._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let kk = this.particleSystem.emitter;
        if (kk) {
          if (kk instanceof ak.s) kk = kk.clone();
          else if (-1 !== kk.getClassName().indexOf("Mesh")) {
            kk = new((0, GF.c)("BABYLON.Mesh"))("", kk.XN()), kk.isVisible = !1
          }
        } else kk = new ak.s;
        const Fk = new TF(this.particleSystem.clone(this.particleSystem.name, kk));
        return Fk.particleSystem.name += "Clone", Fk.type = this.type, Fk.inheritDirection = this.inheritDirection, Fk.inheritedVelocityAmount = this.inheritedVelocityAmount, Fk.particleSystem._disposeEmitterOnDispose = !0, Fk.particleSystem.disposeOnStop = !0, Fk
      }
      serialize() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = {};
        return Fk.type = this.type, Fk.inheritDirection = this.inheritDirection, Fk.inheritedVelocityAmount = this.inheritedVelocityAmount, Fk.particleSystem = this.particleSystem.serialize(kk), Fk
      }
      static _ParseParticleSystem(kk, Fk, Bk) {
        throw (0, rk.i)("ParseParticle")
      }
      static Parse(kk, Fk, Bk) {
        const Rk = kk.particleSystem,
          tk = new TF(TF._ParseParticleSystem(Rk, Fk, Bk, !0));
        return tk.type = kk.type, tk.inheritDirection = kk.inheritDirection, tk.inheritedVelocityAmount = kk.inheritedVelocityAmount, tk.particleSystem._isSubEmitter = !0, tk
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var rF = Bk(39305),
      DF = Bk(39414);
    const zF = () => {};
    class PF {
      constructor() {
        this.particlePositionGenerator = zF, this.particleDestinationGenerator = zF, this.particleDirectionGenerator = zF
      }
      startDirectionFunction(kk, Fk, Bk, Rk) {
        const tk = ak.l.Qe[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== zF) this.particleDirectionGenerator(-1, Bk, tk);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== zF) {
          this.particleDestinationGenerator(-1, Bk, tk);
          const kk = ak.l.Qe[1];
          tk.subtractToRef(Bk.position, kk), kk.scaleToRef(1 / Bk.lifeTime, tk)
        } else tk.set(0, 0, 0);
        Rk ? Fk.sBk(tk) : ak.s.TransformNormalToRef(tk, kk, Fk)
      }
      startPositionFunction(kk, Fk, Bk, Rk) {
        const tk = ak.l.Qe[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== zF ? this.particlePositionGenerator(-1, Bk, tk) : tk.set(0, 0, 0), Rk ? Fk.sBk(tk) : ak.s.TransformCoordinatesToRef(tk, kk, Fk)
      }
      clone() {
        const kk = new PF;
        return Jk.e.DeepCopy(this, kk), kk
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
    const hF = ak.s.Zero(),
      qF = ak.s.Zero(),
      CF = ak.s.Zero();
    class ZF {
      constructor() {
        this.strength = 0, this.position = ak.s.Zero()
      }
      _processParticle(kk, Fk) {
        this.position.subtractToRef(kk.position, hF);
        const Bk = hF.lengthSquared() + 1;
        hF.normalize().scaleToRef(this.strength / Bk, qF), qF.scaleToRef(Fk._tempScaledUpdateSpeed, CF), kk.direction.addInPlace(CF)
      }
      serialize() {
        return {
          position: this.position.PBk(),
          strength: this.strength
        }
      }
    }
    const pF = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class KF extends UF {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = kk => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Fk = Math.floor(Math.random() * this._subEmitters.length);
          for (const Bk of this._subEmitters[Fk])
            if (1 === Bk.type) {
              const Fk = Bk.clone();
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
        this._flowMap !== kk && (this._flowMap = kk, this._flowMapUpdate && (MF(this._flowMapUpdate), this._flowMapUpdate = null), kk && (this._flowMapUpdate = {
          process: kk => {
            const Fk = this.XN()?.getTransformMatrix();
            this._flowMap._processParticle(kk, this.flowMapStrength * this._tempScaledUpdateSpeed, Fk)
          },
          previousItem: null,
          nextItem: null
        }, uF(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(kk) {
        super.addAttractor(kk), 1 === this._attractors.length && (this._attractorUpdate = {
          process: kk => {
            for (const Fk of this._attractors) Fk._processParticle(kk, this)
          },
          previousItem: null,
          nextItem: null
        }, uF(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(kk) {
        super.removeAttractor(kk), 0 === this._attractors.length && this._attractorUpdate && MF(this._attractorUpdate)
      }
      start() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(kk)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const kk of this.subEmitters) kk instanceof KF ? this._subEmitters.push([new TF(kk)]) : kk instanceof TF ? this._subEmitters.push([kk]) : kk instanceof Array && this._subEmitters.push(kk)
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
          for (const Bk of Fk)
            if (0 === Bk.type) {
              const Fk = Bk.clone();
              kk._properties.attachedSubEmitters.push(Fk), Fk.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), kk && this.particles)
          for (const Bk of this.particles)
            if (Bk._properties.attachedSubEmitters)
              for (let kk = Bk._properties.attachedSubEmitters.length - 1; kk >= 0; kk -= 1) Bk._properties.attachedSubEmitters[kk].dispose();
        if (Fk && this.activeSubSystems)
          for (let Bk = this.activeSubSystems.length - 1; Bk >= 0; Bk -= 1) this.activeSubSystems[Bk].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let kk = 0; kk < this._subEmitters.length; kk++)
            for (const Fk of this._subEmitters[kk]) Fk.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(kk, Fk, Bk, Rk) {
        let tk;
        tk = Bk instanceof rF.c ? null : Bk;
        const Xk = (0, GF.c)("BABYLON.Texture");
        if (Xk && tk)
          if (kk.texture) Fk.particleTexture = Xk.Parse(kk.texture, tk, Rk);
          else if (kk.textureName) {
          const Bk = kk.textureSettings;
          if (Fk.particleTexture = new Xk(Rk + kk.textureName, tk, !1, void 0 === kk.invertY || kk.invertY, Bk ? Bk.samplingMode : void 0), Fk.particleTexture.name = kk.textureName, Bk) {
            const kk = Fk.particleTexture;
            for (const Fk of pF) void 0 !== Bk[Fk] && (kk[Fk] = Bk[Fk])
          }
        }
        if (kk.emitterId || 0 === kk.emitterId || void 0 !== kk.emitter ? (kk.emitterId || 0 === kk.emitterId) && tk ? (Fk.emitter = tk.getLastMeshById(kk.emitterId), Fk.emitter || (Fk.emitter = ak.s.Zero())) : Fk.emitter = ak.s.FromArray(kk.emitter) : Fk.emitter = ak.s.Zero(), Fk.isLocal = !!kk.isLocal, void 0 !== kk.renderingGroupId && (Fk.renderingGroupId = kk.renderingGroupId), void 0 !== kk.isBillboardBased && (Fk.isBillboardBased = kk.isBillboardBased), void 0 !== kk.billboardMode && (Fk.billboardMode = kk.billboardMode), void 0 !== kk.useLogarithmicDepth && (Fk.useLogarithmicDepth = kk.useLogarithmicDepth), kk.animations) {
          for (let Bk = 0; Bk < kk.animations.length; Bk++) {
            const Rk = kk.animations[Bk],
              tk = (0, GF.c)("BABYLON.Animation");
            tk && Fk.animations.push(tk.Parse(Rk))
          }
          Fk.beginAnimationOnStart = kk.beginAnimationOnStart, Fk.beginAnimationFrom = kk.beginAnimationFrom, Fk.beginAnimationTo = kk.beginAnimationTo, Fk.beginAnimationLoop = kk.beginAnimationLoop
        }
        if (kk.autoAnimate && tk && tk.beginAnimation(Fk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), Fk.startDelay = 0 | kk.startDelay, Fk.minAngularSpeed = kk.minAngularSpeed, Fk.maxAngularSpeed = kk.maxAngularSpeed, Fk.minSize = kk.minSize, Fk.maxSize = kk.maxSize, kk.minScaleX && (Fk.minScaleX = kk.minScaleX, Fk.maxScaleX = kk.maxScaleX, Fk.minScaleY = kk.minScaleY, Fk.maxScaleY = kk.maxScaleY), void 0 !== kk.preWarmCycles && (Fk.preWarmCycles = kk.preWarmCycles, Fk.preWarmStepOffset = kk.preWarmStepOffset), void 0 !== kk.minInitialRotation && (Fk.minInitialRotation = kk.minInitialRotation, Fk.maxInitialRotation = kk.maxInitialRotation), Fk.minLifeTime = kk.minLifeTime, Fk.maxLifeTime = kk.maxLifeTime, Fk.minEmitPower = kk.minEmitPower, Fk.maxEmitPower = kk.maxEmitPower, Fk.emitRate = kk.emitRate, Fk.gravity = ak.s.FromArray(kk.gravity), kk.noiseStrength && (Fk.noiseStrength = ak.s.FromArray(kk.noiseStrength)), Fk.color1 = sk.i.FromArray(kk.color1), Fk.color2 = sk.i.FromArray(kk.color2), Fk.colorDead = sk.i.FromArray(kk.colorDead), Fk.updateSpeed = kk.updateSpeed, Fk.targetStopDuration = kk.targetStopDuration, Fk.blendMode = kk.blendMode, kk.colorGradients)
          for (const ak of kk.colorGradients) Fk.addColorGradient(ak.gradient, sk.i.FromArray(ak.color1), ak.color2 ? sk.i.FromArray(ak.color2) : void 0);
        if (kk.rampGradients) {
          for (const Bk of kk.rampGradients) Fk.addRampGradient(Bk.gradient, sk.e.FromArray(Bk.color));
          Fk.useRampGradients = kk.useRampGradients
        }
        if (kk.colorRemapGradients)
          for (const ak of kk.colorRemapGradients) Fk.addColorRemapGradient(ak.gradient, void 0 !== ak.factor1 ? ak.factor1 : ak.factor, ak.factor2);
        if (kk.alphaRemapGradients)
          for (const ak of kk.alphaRemapGradients) Fk.addAlphaRemapGradient(ak.gradient, void 0 !== ak.factor1 ? ak.factor1 : ak.factor, ak.factor2);
        if (kk.sizeGradients)
          for (const ak of kk.sizeGradients) Fk.addSizeGradient(ak.gradient, void 0 !== ak.factor1 ? ak.factor1 : ak.factor, ak.factor2);
        if (kk.angularSpeedGradients)
          for (const ak of kk.angularSpeedGradients) Fk.addAngularSpeedGradient(ak.gradient, void 0 !== ak.factor1 ? ak.factor1 : ak.factor, ak.factor2);
        if (kk.velocityGradients)
          for (const ak of kk.velocityGradients) Fk.addVelocityGradient(ak.gradient, void 0 !== ak.factor1 ? ak.factor1 : ak.factor, ak.factor2);
        if (kk.dragGradients)
          for (const ak of kk.dragGradients) Fk.addDragGradient(ak.gradient, void 0 !== ak.factor1 ? ak.factor1 : ak.factor, ak.factor2);
        if (kk.emitRateGradients)
          for (const ak of kk.emitRateGradients) Fk.addEmitRateGradient(ak.gradient, void 0 !== ak.factor1 ? ak.factor1 : ak.factor, ak.factor2);
        if (kk.startSizeGradients)
          for (const ak of kk.startSizeGradients) Fk.addStartSizeGradient(ak.gradient, void 0 !== ak.factor1 ? ak.factor1 : ak.factor, ak.factor2);
        if (kk.lifeTimeGradients)
          for (const ak of kk.lifeTimeGradients) Fk.addLifeTimeGradient(ak.gradient, void 0 !== ak.factor1 ? ak.factor1 : ak.factor, ak.factor2);
        if (kk.limitVelocityGradients) {
          for (const Bk of kk.limitVelocityGradients) Fk.addLimitVelocityGradient(Bk.gradient, void 0 !== Bk.factor1 ? Bk.factor1 : Bk.factor, Bk.factor2);
          Fk.limitVelocityDamping = kk.limitVelocityDamping
        }
        if (kk.noiseTexture && tk) {
          const Bk = (0, GF.c)("BABYLON.ProceduralTexture");
          Fk.noiseTexture = Bk.Parse(kk.noiseTexture, tk, Rk)
        }
        let bk;
        if (kk.particleEmitterType) {
          switch (kk.particleEmitterType.type) {
            case "SphereParticleEmitter":
              bk = new fk;
              break;
            case "SphereDirectedParticleEmitter":
              bk = new mk;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              bk = new vk;
              break;
            case "ConeDirectedParticleEmitter":
              bk = new ik;
              break;
            case "CylinderParticleEmitter":
              bk = new Wk.c;
              break;
            case "CylinderDirectedParticleEmitter":
              bk = new Wk.b;
              break;
            case "HemisphericParticleEmitter":
              bk = new yk;
              break;
            case "PointParticleEmitter":
              bk = new ek;
              break;
            case "MeshParticleEmitter":
              bk = new Yk;
              break;
            case "CustomParticleEmitter":
              bk = new PF;
              break;
            default:
              bk = new Vk.c
          }
          bk.parse(kk.particleEmitterType, tk)
        } else bk = new Vk.c, bk.parse(kk, tk);
        Fk.particleEmitterType = bk, Fk.startSpriteCellID = kk.startSpriteCellID, Fk.endSpriteCellID = kk.endSpriteCellID, Fk.spriteCellLoop = kk.spriteCellLoop ?? !0, Fk.spriteCellWidth = kk.spriteCellWidth, Fk.spriteCellHeight = kk.spriteCellHeight, Fk.spriteCellChangeSpeed = kk.spriteCellChangeSpeed, Fk.spriteRandomStartCell = kk.spriteRandomStartCell, Fk.disposeOnStop = kk.disposeOnStop ?? !1, Fk.manualEmitCount = kk.manualEmitCount ?? -1
      }
      static Parse(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tk = arguments.length > 4 ? arguments[4] : void 0;
        const Xk = kk.name;
        let bk, wk, dk = null,
          Vk = null;
        if (Fk instanceof rF.c ? bk = Fk : (wk = Fk, bk = wk.ne()), kk.customShader && (0, rk.c)(bk.createEffectForParticles)) {
          Vk = kk.customShader;
          const Fk = Vk.shaderOptions.defines.length > 0 ? Vk.shaderOptions.defines.join("\n") : "";
          dk = bk.createEffectForParticles(Vk.shaderPath.fragmentElement, Vk.shaderOptions.uniforms, Vk.shaderOptions.samplers, Fk)
        }
        const Jk = new KF(Xk, tk || kk.KV, Fk, dk, kk.isAnimationSheetEnabled);
        if (Jk.customShader = Vk, Jk._rootUrl = Bk, kk.id && (Jk.id = kk.id), kk.subEmitters) {
          Jk.subEmitters = [];
          for (const Rk of kk.subEmitters) {
            const kk = [];
            for (const tk of Rk) kk.push(TF.Parse(tk, Fk, Bk));
            Jk.subEmitters.push(kk)
          }
        }
        if (kk.attractors)
          for (const sk of kk.attractors) {
            const kk = new ZF;
            kk.position = ak.s.FromArray(sk.position), kk.strength = sk.strength, Jk.addAttractor(kk)
          }
        return KF._Parse(kk, Jk, Fk, Bk), kk.textureMask && (Jk.textureMask = sk.i.FromArray(kk.textureMask)), kk.worldOffset && (Jk.worldOffset = ak.s.FromArray(kk.worldOffset)), kk.preventAutoStart && (Jk.preventAutoStart = kk.preventAutoStart), kk.metadata && (Jk.metadata = kk.metadata), Rk || Jk.preventAutoStart || Jk.start(), Jk
      }
      serialize() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = {};
        if (KF._Serialize(Fk, this, kk), Fk.textureMask = this.textureMask.PBk(), Fk.customShader = this.customShader, Fk.preventAutoStart = this.preventAutoStart, Fk.worldOffset = this.worldOffset.PBk(), this.metadata && (Fk.metadata = this.metadata), this.subEmitters) {
          Fk.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const Bk of this._subEmitters) {
            const Rk = [];
            for (const Fk of Bk) Fk.particleSystem.doNotSerialize || Rk.push(Fk.serialize(kk));
            Fk.subEmitters.push(Rk)
          }
        }
        if (this._attractors && this._attractors.length) {
          Fk.attractors = [];
          for (const kk of this._attractors) Fk.attractors.push(kk.serialize())
        }
        return Fk
      }
      static _Serialize(kk, Fk, Bk) {
        if (kk.name = Fk.name, kk.id = Fk.id, kk.KV = Fk.getCapacity(), kk.disposeOnStop = Fk.disposeOnStop, kk.manualEmitCount = Fk.manualEmitCount, Fk.emitter.position) {
          const Bk = Fk.emitter;
          kk.emitterId = Bk.id
        } else {
          const Bk = Fk.emitter;
          kk.emitter = Bk.PBk()
        }
        if (Fk.particleEmitterType && (kk.particleEmitterType = Fk.particleEmitterType.serialize()), Fk.particleTexture)
          if (Bk) kk.texture = Fk.particleTexture.serialize();
          else {
            const Bk = Fk.particleTexture;
            kk.textureName = Fk.particleTexture.name, kk.invertY = !!Bk._invertY;
            const Rk = {};
            for (const kk of pF) Rk[kk] = Bk[kk];
            Rk.samplingMode = Bk.samplingMode, kk.textureSettings = Rk
          } kk.isLocal = Fk.isLocal, DF.c.AppendSerializedAnimations(Fk, kk), kk.beginAnimationOnStart = Fk.beginAnimationOnStart, kk.beginAnimationFrom = Fk.beginAnimationFrom, kk.beginAnimationTo = Fk.beginAnimationTo, kk.beginAnimationLoop = Fk.beginAnimationLoop, kk.startDelay = Fk.startDelay, kk.renderingGroupId = Fk.renderingGroupId, kk.isBillboardBased = Fk.isBillboardBased, kk.billboardMode = Fk.billboardMode, kk.minAngularSpeed = Fk.minAngularSpeed, kk.maxAngularSpeed = Fk.maxAngularSpeed, kk.minSize = Fk.minSize, kk.maxSize = Fk.maxSize, kk.minScaleX = Fk.minScaleX, kk.maxScaleX = Fk.maxScaleX, kk.minScaleY = Fk.minScaleY, kk.maxScaleY = Fk.maxScaleY, kk.minEmitPower = Fk.minEmitPower, kk.maxEmitPower = Fk.maxEmitPower, kk.minLifeTime = Fk.minLifeTime, kk.maxLifeTime = Fk.maxLifeTime, kk.emitRate = Fk.emitRate, kk.gravity = Fk.gravity.PBk(), kk.noiseStrength = Fk.noiseStrength.PBk(), kk.color1 = Fk.color1.PBk(), kk.color2 = Fk.color2.PBk(), kk.colorDead = Fk.colorDead.PBk(), kk.updateSpeed = Fk.updateSpeed, kk.targetStopDuration = Fk.targetStopDuration, kk.blendMode = Fk.blendMode, kk.preWarmCycles = Fk.preWarmCycles, kk.preWarmStepOffset = Fk.preWarmStepOffset, kk.minInitialRotation = Fk.minInitialRotation, kk.maxInitialRotation = Fk.maxInitialRotation, kk.startSpriteCellID = Fk.startSpriteCellID, kk.spriteCellLoop = Fk.spriteCellLoop, kk.endSpriteCellID = Fk.endSpriteCellID, kk.spriteCellChangeSpeed = Fk.spriteCellChangeSpeed, kk.spriteCellWidth = Fk.spriteCellWidth, kk.spriteCellHeight = Fk.spriteCellHeight, kk.spriteRandomStartCell = Fk.spriteRandomStartCell, kk.isAnimationSheetEnabled = Fk.isAnimationSheetEnabled, kk.useLogarithmicDepth = Fk.useLogarithmicDepth;
        const Rk = Fk.getColorGradients();
        if (Rk) {
          kk.colorGradients = [];
          for (const Fk of Rk) {
            const Bk = {
              gradient: Fk.gradient,
              color1: Fk.color1.PBk()
            };
            Fk.color2 ? Bk.color2 = Fk.color2.PBk() : Bk.color2 = Fk.color1.PBk(), kk.colorGradients.push(Bk)
          }
        }
        const tk = Fk.getRampGradients();
        if (tk) {
          kk.rampGradients = [];
          for (const Fk of tk) {
            const Bk = {
              gradient: Fk.gradient,
              color: Fk.color.PBk()
            };
            kk.rampGradients.push(Bk)
          }
          kk.useRampGradients = Fk.useRampGradients
        }
        const ak = Fk.getColorRemapGradients();
        if (ak) {
          kk.colorRemapGradients = [];
          for (const Fk of ak) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.colorRemapGradients.push(Bk)
          }
        }
        const Xk = Fk.getAlphaRemapGradients();
        if (Xk) {
          kk.alphaRemapGradients = [];
          for (const Fk of Xk) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.alphaRemapGradients.push(Bk)
          }
        }
        const bk = Fk.getSizeGradients();
        if (bk) {
          kk.sizeGradients = [];
          for (const Fk of bk) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.sizeGradients.push(Bk)
          }
        }
        const wk = Fk.getAngularSpeedGradients();
        if (wk) {
          kk.angularSpeedGradients = [];
          for (const Fk of wk) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.angularSpeedGradients.push(Bk)
          }
        }
        const dk = Fk.getVelocityGradients();
        if (dk) {
          kk.velocityGradients = [];
          for (const Fk of dk) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.velocityGradients.push(Bk)
          }
        }
        const sk = Fk.getDragGradients();
        if (sk) {
          kk.dragGradients = [];
          for (const Fk of sk) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.dragGradients.push(Bk)
          }
        }
        const Vk = Fk.getEmitRateGradients();
        if (Vk) {
          kk.emitRateGradients = [];
          for (const Fk of Vk) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.emitRateGradients.push(Bk)
          }
        }
        const Jk = Fk.getStartSizeGradients();
        if (Jk) {
          kk.startSizeGradients = [];
          for (const Fk of Jk) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.startSizeGradients.push(Bk)
          }
        }
        const Ak = Fk.getLifeTimeGradients();
        if (Ak) {
          kk.lifeTimeGradients = [];
          for (const Fk of Ak) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.lifeTimeGradients.push(Bk)
          }
        }
        const ek = Fk.getLimitVelocityGradients();
        if (ek) {
          kk.limitVelocityGradients = [];
          for (const Fk of ek) {
            const Bk = {
              gradient: Fk.gradient,
              factor1: Fk.factor1
            };
            void 0 !== Fk.factor2 ? Bk.factor2 = Fk.factor2 : Bk.factor2 = Fk.factor1, kk.limitVelocityGradients.push(Bk)
          }
          kk.limitVelocityDamping = Fk.limitVelocityDamping
        }
        Fk.noiseTexture && (kk.noiseTexture = Fk.noiseTexture.serialize())
      }
      clone(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = {
          ...this._customWrappers
        };
        let tk = null;
        const ak = this._engine;
        if ((0, rk.c)(ak.createEffectForParticles) && null != this.customShader) {
          tk = this.customShader;
          const kk = tk.shaderOptions.defines.length > 0 ? tk.shaderOptions.defines.join("\n") : "",
            Fk = ak.createEffectForParticles(tk.shaderPath.fragmentElement, tk.shaderOptions.uniforms, tk.shaderOptions.samplers, kk);
          Rk[0] ? Rk[0].effect = Fk : this.setCustomEffect(Fk, 0)
        }
        const Xk = this.serialize(Bk),
          bk = !1 === Bk && this.particleTexture ? this.particleTexture.clone() : null;
        bk && (Xk.textureName = void 0);
        const wk = KF.Parse(Xk, this._scene || this._engine, this._rootUrl);
        return wk.name = kk, wk.customShader = tk, wk._customWrappers = Rk, bk && (wk.particleTexture = bk), void 0 === Fk && (Fk = this.emitter), this.noiseTexture && (wk.noiseTexture = this.noiseTexture.clone()), wk.emitter = Fk, this.preventAutoStart || wk.start(), wk
      }
    }
    KF.BILLBOARDMODE_Y = 2, KF.BILLBOARDMODE_ALL = 7, KF.BILLBOARDMODE_STRETCHED = 8, KF.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let xF = !1;
    xF || (xF = !0, TF._ParseParticleSystem = KF.Parse)
  },
  41065: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      SkyMaterial: () => vk,
      _MaxColorValueForRenderTarget: () => Wk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(39414),
      Xk = Bk(36754),
      bk = Bk(39692),
      wk = Bk(39753),
      dk = Bk(41024),
      sk = Bk(40583),
      Vk = Bk(39486),
      Jk = Bk(36798),
      Ak = Bk(39777),
      ek = Bk(39762),
      yk = Bk(39741),
      fk = Bk(39735);
    class mk extends bk.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Wk(kk) {
      switch (kk) {
        case dk.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case dk.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let vk = (() => {
      var kk;
      let Fk, bk, dk, Jk, vk, ik, Yk, Lk, Ok, Ek, Sk, Nk, Hk, uk, Mk, gk = wk.d,
        Uk = [],
        ck = [],
        Gk = [],
        Tk = [],
        rk = [],
        Dk = [],
        zk = [],
        Pk = [],
        hk = [],
        qk = [],
        Ck = [],
        Zk = [],
        pk = [],
        Kk = [],
        xk = [],
        jk = [],
        lk = [],
        nk = [],
        Ik = [],
        Qk = [],
        kF = [],
        FF = [],
        BF = [],
        RF = [],
        tF = [],
        aF = [],
        XF = [],
        bF = [],
        wF = [],
        dF = [];
      return kk = class extends gk {
        constructor(kk, Fk) {
          super(kk, Fk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Rk.l)(this, Uk, 1), this.turbidity = ((0, Rk.l)(this, ck), (0, Rk.l)(this, Gk, 10)), this.rayleigh = ((0, Rk.l)(this, Tk), (0, Rk.l)(this, rk, 2)), this.mieCoefficient = ((0, Rk.l)(this, Dk), (0, Rk.l)(this, zk, .005)), this.mieDirectionalG = ((0, Rk.l)(this, Pk), (0, Rk.l)(this, hk, .8)), this.distance = ((0, Rk.l)(this, qk), (0, Rk.l)(this, Ck, 500)), this.inclination = ((0, Rk.l)(this, Zk), (0, Rk.l)(this, pk, .49)), this.azimuth = ((0, Rk.l)(this, Kk), (0, Rk.l)(this, xk, .25)), this.sunPosition = ((0, Rk.l)(this, jk), (0, Rk.l)(this, lk, new Xk.Qe(0, 100, 0))), this.useSunPosition = ((0, Rk.l)(this, nk), (0, Rk.l)(this, Ik, !1)), this.cameraOffset = ((0, Rk.l)(this, Qk), (0, Rk.l)(this, kF, Xk.Qe.Zero())), this.up = ((0, Rk.l)(this, FF), (0, Rk.l)(this, BF, Xk.Qe.Up())), this.dithering = ((0, Rk.l)(this, RF), (0, Rk.l)(this, tF, !1)), this.rawHdrOutput = ((0, Rk.l)(this, aF), (0, Rk.l)(this, XF, !1)), this.cloudiness = ((0, Rk.l)(this, bF), (0, Rk.l)(this, wF, 0)), this._cameraPosition = ((0, Rk.l)(this, dF), Xk.Qe.Zero()), this._skyOrientation = new Xk.Quaternion
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
        isReadyForSubMesh(Fk, Bk) {
          const Rk = Bk._drawWrapper;
          if (this.isFrozen && Rk.effect && Rk._wasPreviouslyReady) return !0;
          Bk.materialDefines || (Bk.materialDefines = new mk);
          const tk = Bk.materialDefines,
            ak = this.XN();
          if (this._isReadyForSubMesh(Bk)) return !0;
          if ((0, fk.ab)(Fk, ak, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, tk, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, fk.T)(Fk, tk, !0, !1), tk.IMAGEPROCESSINGPOSTPROCESS !== ak.imageProcessingConfiguration.applyByPostProcess && tk.markAsMiscDirty(), tk.DITHER !== this.dithering && tk.markAsMiscDirty(), tk.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && tk.markAsMiscDirty(), tk.isDirty) {
            tk.markAsProcessed(), ak.resetCachedMaterial();
            const Fk = new ek.c;
            tk.FOG && Fk.addFallback(1, "FOG"), tk.IMAGEPROCESSINGPOSTPROCESS = ak.imageProcessingConfiguration.applyByPostProcess, tk.DITHER = this.dithering, tk.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Rk = [sk.e.PositionKind];
            tk.VERTEXCOLOR && Rk.push(sk.e.ColorKind);
            const Xk = "sky",
              bk = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, yk.b)(bk);
            const wk = tk.toString();
            Bk.setEffect(ak.ne().createEffect(Xk, {
              attributes: Rk,
              uniformsNames: bk,
              uniformBuffersNames: [],
              samplers: [],
              defines: wk,
              fallbacks: Fk,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, ak.ne()), tk, this._materialContext)
          }
          return !(!Bk.effect || !Bk.effect.isReady()) && (tk._renderId = ak.getRenderId(), Rk._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(kk, Fk, Bk) {
          const Rk = this.XN(),
            tk = Bk.materialDefines;
          if (!tk) return;
          const ak = Bk.effect;
          if (!ak) return;
          this._activeEffect = ak, this.bindOnlyWorldMatrix(kk), this._activeEffect.setMatrix("viewProjection", Rk.getTransformMatrix()), this._mustRebind(Rk, ak, Bk) && ((0, yk.e)(ak, this, Rk), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, fk.u)(tk, ak, Rk)), Rk.fogEnabled && Fk.applyFog && Rk.fogMode !== Vk.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", Rk.getViewMatrix()), (0, fk.i)(Rk, Fk, this._activeEffect, this.rawHdrOutput);
          const bk = Rk.activeCamera;
          if (bk) {
            const kk = bk.getWorldMatrix();
            this._cameraPosition.x = kk.m[12], this._cameraPosition.y = kk.m[13], this._cameraPosition.z = kk.m[14], this._activeEffect.setVector3("cameraPosition", Xk.TmpVectors.Qe[0].sBk(this._cameraPosition).wRk(Rk.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const kk = Rk.ne()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Wk(kk?.texture?.type))
          }
          if (!this.useSunPosition) {
            const kk = Math.PI * (this.inclination - .5),
              Fk = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Fk) * Math.cos(kk), this.sunPosition.y = this.distance * Math.sin(-kk), this.sunPosition.z = this.distance * Math.sin(Fk) * Math.cos(kk), Xk.Quaternion.FromUnitVectorsToRef(Xk.Qe.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Fk, this._activeEffect, Bk)
        }
        getAnimatables() {
          return []
        }
        dispose(kk) {
          super.dispose(kk)
        }
        clone(Fk) {
          return ak.c.Clone((() => new kk(Fk, this.XN())), this)
        }
        serialize() {
          const kk = super.serialize();
          return kk.customType = "BABYLON.SkyMaterial", kk
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Fk, Bk, Rk) {
          return ak.c.Parse((() => new kk(Fk.name, Bk)), Fk, Bk, Rk)
        }
      }, (() => {
        const Bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(gk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, tk.M)()], bk = [(0, tk.M)()], dk = [(0, tk.M)()], Jk = [(0, tk.M)()], vk = [(0, tk.M)()], ik = [(0, tk.M)()], Yk = [(0, tk.M)()], Lk = [(0, tk.M)()], Ok = [(0, tk.K)()], Ek = [(0, tk.M)()], Sk = [(0, tk.K)()], Nk = [(0, tk.K)()], Hk = [(0, tk.M)()], uk = [(0, tk.M)()], Mk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
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
          metadata: Bk
        }, Uk, ck), (0, Rk.j)(null, null, bk, {
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
          metadata: Bk
        }, Gk, Tk), (0, Rk.j)(null, null, dk, {
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
          metadata: Bk
        }, rk, Dk), (0, Rk.j)(null, null, Jk, {
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
          metadata: Bk
        }, zk, Pk), (0, Rk.j)(null, null, vk, {
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
          metadata: Bk
        }, hk, qk), (0, Rk.j)(null, null, ik, {
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
          metadata: Bk
        }, Ck, Zk), (0, Rk.j)(null, null, Yk, {
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
          metadata: Bk
        }, pk, Kk), (0, Rk.j)(null, null, Lk, {
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
          metadata: Bk
        }, xk, jk), (0, Rk.j)(null, null, Ok, {
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
          metadata: Bk
        }, lk, nk), (0, Rk.j)(null, null, Ek, {
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
          metadata: Bk
        }, Ik, Qk), (0, Rk.j)(null, null, Sk, {
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
          metadata: Bk
        }, kF, FF), (0, Rk.j)(null, null, Nk, {
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
          metadata: Bk
        }, BF, RF), (0, Rk.j)(null, null, Hk, {
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
          metadata: Bk
        }, tF, aF), (0, Rk.j)(null, null, uk, {
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
          metadata: Bk
        }, XF, bF), (0, Rk.j)(null, null, Mk, {
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
          metadata: Bk
        }, wF, dF), Bk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bk
        })
      })(), kk._ShaderLoader = new Ak.d((() => [Bk.e(320).then((() => Bk(60962))), Bk.e(313).then((() => Bk(60971)))]), (() => [Bk.e(337).then((() => Bk(60975))), Bk.e(331).then((() => Bk(60983)))])), kk
    })();
    (0, Jk.d)("BABYLON.SkyMaterial", vk)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);