export const id = 295;
export const ids = [295];
export const modules = {
  41361: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq
    });
    var Yq = gq(39858),
      lq = gq(41369);
    class Oq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = gq, this.UYq = [], this._maxBlockCapacity = Eq || 64, this._selectionContent = new Yq.b(1024), this._creationFunc = qq
      }
      update(qq, Eq, gq) {
        lq.c._CreateBlocks(qq, Eq, gq, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      ZYq(qq) {
        for (let Eq = 0; Eq < this.blocks.length; Eq++) {
          this.blocks[Eq].addEntry(qq)
        }
      }
      Wk(qq) {
        for (let Eq = 0; Eq < this.blocks.length; Eq++) {
          this.blocks[Eq].removeEntry(qq)
        }
      }
      select(qq, Eq) {
        this._selectionContent.reset();
        for (let gq = 0; gq < this.blocks.length; gq++) {
          this.blocks[gq].select(qq, this._selectionContent, Eq)
        }
        return Eq ? this._selectionContent.concat(this.UYq) : this._selectionContent.concatWithNoDuplicate(this.UYq), this._selectionContent
      }
      intersects(qq, Eq, gq) {
        this._selectionContent.reset();
        for (let Yq = 0; Yq < this.blocks.length; Yq++) {
          this.blocks[Yq].intersects(qq, Eq, this._selectionContent, gq)
        }
        return gq ? this._selectionContent.concat(this.UYq) : this._selectionContent.concatWithNoDuplicate(this.UYq), this._selectionContent
      }
      intersectsRay(qq) {
        this._selectionContent.reset();
        for (let Eq = 0; Eq < this.blocks.length; Eq++) {
          this.blocks[Eq].intersectsRay(qq, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.UYq), this._selectionContent
      }
    }
    Oq.CreationFuncForMeshes = (qq, Eq) => {
      const gq = qq.yR();
      !qq.isBlocked && gq.boundingBox.intersectsMinMax(Eq.SYq, Eq.zYq) && Eq.entries.push(qq)
    }, Oq.CreationFuncForSubMeshes = (qq, Eq) => {
      qq.yR().boundingBox.intersectsMinMax(Eq.SYq, Eq.zYq) && Eq.entries.push(qq)
    }
  },
  41369: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq
    });
    var Yq = gq(37139),
      lq = gq(40060);
    class Oq {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.entries = [], this.FYq = new Array, this._capacity = gq, this._depth = Yq, this._maxDepth = lq, this._creationFunc = Oq, this._minPoint = qq, this._maxPoint = Eq, this.FYq.push(qq.clone()), this.FYq.push(Eq.clone()), this.FYq.push(qq.clone()), this.FYq[2].x = Eq.x, this.FYq.push(qq.clone()), this.FYq[3].y = Eq.y, this.FYq.push(qq.clone()), this.FYq[4].z = Eq.z, this.FYq.push(Eq.clone()), this.FYq[5].z = qq.z, this.FYq.push(Eq.clone()), this.FYq[6].x = qq.x, this.FYq.push(Eq.clone()), this.FYq[7].y = qq.y
      }
      get WB() {
        return this._capacity
      }
      get SYq() {
        return this._minPoint
      }
      get zYq() {
        return this._maxPoint
      }
      addEntry(qq) {
        if (this.blocks)
          for (let Eq = 0; Eq < this.blocks.length; Eq++) {
            this.blocks[Eq].addEntry(qq)
          } else this._creationFunc(qq, this), this.entries.length > this.WB && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(qq) {
        if (this.blocks) {
          for (let Eq = 0; Eq < this.blocks.length; Eq++) {
            this.blocks[Eq].removeEntry(qq)
          }
          return
        }
        const Eq = this.entries.indexOf(qq);
        Eq > -1 && this.entries.splice(Eq, 1)
      }
      addEntries(qq) {
        for (let Eq = 0; Eq < qq.length; Eq++) {
          const gq = qq[Eq];
          this.addEntry(gq)
        }
      }
      select(qq, Eq, gq) {
        if (lq.d.IsInFrustum(this.FYq, qq)) {
          if (this.blocks) {
            for (let Yq = 0; Yq < this.blocks.length; Yq++) {
              this.blocks[Yq].select(qq, Eq, gq)
            }
            return
          }
          gq ? Eq.concat(this.entries) : Eq.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(qq, Eq, gq, Yq) {
        if (lq.d.IntersectsSphere(this._minPoint, this._maxPoint, qq, Eq)) {
          if (this.blocks) {
            for (let lq = 0; lq < this.blocks.length; lq++) {
              this.blocks[lq].intersects(qq, Eq, gq, Yq)
            }
            return
          }
          Yq ? gq.concat(this.entries) : gq.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(qq, Eq) {
        if (qq.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let gq = 0; gq < this.blocks.length; gq++) {
              this.blocks[gq].intersectsRay(qq, Eq)
            }
            return
          }
          Eq.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Oq._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(qq, Eq, gq, lq, mq, xq, Aq, cq) {
        Aq.blocks = new Array;
        const uq = new Yq.q((Eq.x - qq.x) / 2, (Eq.y - qq.y) / 2, (Eq.z - qq.z) / 2);
        for (let Yq = 0; Yq < 2; Yq++)
          for (let Eq = 0; Eq < 2; Eq++)
            for (let Bq = 0; Bq < 2; Bq++) {
              const Wq = qq.add(uq.multiplyByFloats(Yq, Eq, Bq)),
                Nq = qq.add(uq.multiplyByFloats(Yq + 1, Eq + 1, Bq + 1)),
                aq = new Oq(Wq, Nq, lq, mq + 1, xq, cq);
              aq.addEntries(gq), Aq.blocks.push(aq)
            }
      }
    }
  },
  41374: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq
    });
    var Yq = gq(39838),
      lq = gq(37139),
      Oq = gq(40197),
      mq = gq(41315),
      xq = gq(39911),
      Aq = gq(37153),
      cq = gq(41361);
    class uq {
      constructor(qq) {
        this.name = xq.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new mq.A(lq.q.Zero(), new lq.q(1, 1, 1)), (qq = qq || Aq.b.LastCreatedScene) && (this.PV = qq, this.PV.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.PV.getActiveSubMeshCandidates = qq => this.getActiveSubMeshCandidates(qq), this.PV.getCollidingSubMeshCandidates = (qq, Eq) => this.getCollidingSubMeshCandidates(qq, Eq), this.PV.getIntersectingSubMeshCandidates = (qq, Eq) => this.getIntersectingSubMeshCandidates(qq, Eq))
      }
      register() {
        this.PV.onMeshRemovedObservable.add((qq => {
          const Eq = this.PV.selectionOctree;
          if (void 0 !== Eq && null !== Eq) {
            const gq = Eq.UYq.indexOf(qq); - 1 !== gq && Eq.UYq.splice(gq, 1)
          }
        })), this.PV.onMeshImportedObservable.add((qq => {
          const Eq = this.PV.selectionOctree;
          void 0 !== Eq && null !== Eq && Eq.ZYq(qq)
        }))
      }
      getActiveMeshCandidates() {
        return this.PV.IYq?.select(this.PV.frustumPlanes) || this.PV._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(qq) {
        if (qq._submeshesOctree && qq.useOctreeForRenderingSelection) {
          return qq._submeshesOctree.select(this.PV.frustumPlanes)
        }
        return this.PV._getDefaultSubMeshCandidates(qq)
      }
      getIntersectingSubMeshCandidates(qq, Eq) {
        if (qq._submeshesOctree && qq.useOctreeForPicking) {
          mq.A.TransformToRef(Eq, qq.getWorldMatrix(), this._tempRay);
          return qq._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.PV._getDefaultSubMeshCandidates(qq)
      }
      getCollidingSubMeshCandidates(qq, Eq) {
        if (qq._submeshesOctree && qq.useOctreeForCollisions) {
          const gq = Eq._velocityWorldLength + Math.max(Eq._radius.x, Eq._radius.y, Eq._radius.z);
          return qq._submeshesOctree.intersects(Eq._basePointWorld, gq)
        }
        return this.PV._getDefaultSubMeshCandidates(qq)
      }
      rebuild() {}
      dispose() {}
    }
    let Bq = !1;
    Bq || (Bq = !0, Yq.i.prototype.createOrUpdateSelectionOctree = function() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        gq = this._getComponent(xq.e.NAME_OCTREE);
      gq || (gq = new uq(this), this.VYq(gq)), this.IYq || (this.IYq = new cq.c(cq.c.CreationFuncForMeshes, qq, Eq));
      const Yq = this.getWorldExtends();
      return this.IYq.update(Yq.min, Yq.max, this.meshes), this.IYq
    }, Object.defineProperty(Yq.i.prototype, "selectionOctree", {
      get: function() {
        return this.IYq
      },
      enumerable: !0,
      configurable: !0
    }), Oq.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const gq = this.ZJ();
      let Yq = gq._getComponent(xq.e.NAME_OCTREE);
      Yq || (Yq = new uq(gq), gq.VYq(Yq)), this._submeshesOctree || (this._submeshesOctree = new cq.c(cq.c.CreationFuncForSubMeshes, qq, Eq)), this.computeWorldMatrix(!0);
      const lq = this.yR().boundingBox;
      return this._submeshesOctree.update(lq.minimumWorld, lq.maximumWorld, this.fn), this._submeshesOctree
    })
  },
  41315: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Bq,
      e: () => iq,
      h: () => Vq,
      j: () => aq,
      l: () => Nq,
      n: () => nq,
      r: () => hq,
      v: () => tq,
      w: () => vq,
      z: () => rq
    });
    var Yq = gq(37145),
      lq = gq(37139),
      Oq = gq(37149),
      mq = gq(40049),
      xq = gq(39876),
      Aq = gq(37153),
      cq = gq(39932);
    const uq = {
      internalPickerForMesh: void 0
    };
    class Bq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Yq.c;
        this.origin = qq, this.direction = Eq, this.length = gq, this.epsilon = lq
      }
      clone() {
        return new Bq(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Yq = Bq._TmpVector3[0].Vqq(qq.x - gq, qq.y - gq, qq.z - gq),
          lq = Bq._TmpVector3[1].Vqq(Eq.x + gq, Eq.y + gq, Eq.z + gq);
        let Oq, mq, xq, Aq, cq = 0,
          uq = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Yq.x || this.origin.x > lq.x) return !1
        } else if (Oq = 1 / this.direction.x, mq = (Yq.x - this.origin.x) * Oq, xq = (lq.x - this.origin.x) * Oq, xq === -1 / 0 && (xq = 1 / 0), mq > xq && (Aq = mq, mq = xq, xq = Aq), cq = Math.max(mq, cq), uq = Math.min(xq, uq), cq > uq) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Yq.y || this.origin.y > lq.y) return !1
        } else if (Oq = 1 / this.direction.y, mq = (Yq.y - this.origin.y) * Oq, xq = (lq.y - this.origin.y) * Oq, xq === -1 / 0 && (xq = 1 / 0), mq > xq && (Aq = mq, mq = xq, xq = Aq), cq = Math.max(mq, cq), uq = Math.min(xq, uq), cq > uq) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Yq.z || this.origin.z > lq.z) return !1
        } else if (Oq = 1 / this.direction.z, mq = (Yq.z - this.origin.z) * Oq, xq = (lq.z - this.origin.z) * Oq, xq === -1 / 0 && (xq = 1 / 0), mq > xq && (Aq = mq, mq = xq, xq = Aq), cq = Math.max(mq, cq), uq = Math.min(xq, uq), cq > uq) return !1;
        return !0
      }
      intersectsBox(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(qq.minimum, qq.maximum, Eq)
      }
      intersectsSphere(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = qq.center.x - this.origin.x,
          Yq = qq.center.y - this.origin.y,
          lq = qq.center.z - this.origin.z,
          Oq = gq * gq + Yq * Yq + lq * lq,
          mq = qq.radius + Eq,
          xq = mq * mq;
        if (Oq <= xq) return !0;
        const Aq = gq * this.direction.x + Yq * this.direction.y + lq * this.direction.z;
        if (Aq < 0) return !1;
        return Oq - Aq * Aq <= xq
      }
      intersectsTriangle(qq, Eq, gq) {
        const Yq = Bq._TmpVector3[0],
          Oq = Bq._TmpVector3[1],
          xq = Bq._TmpVector3[2],
          Aq = Bq._TmpVector3[3],
          cq = Bq._TmpVector3[4];
        Eq.subtractToRef(qq, Yq), gq.subtractToRef(qq, Oq), lq.q.CrossToRef(this.direction, Oq, xq);
        const uq = lq.q.Dot(Yq, xq);
        if (0 === uq) return null;
        const Wq = 1 / uq;
        this.origin.subtractToRef(qq, Aq);
        const Nq = lq.q.Dot(Aq, xq) * Wq;
        if (Nq < -this.epsilon || Nq > 1 + this.epsilon) return null;
        lq.q.CrossToRef(Aq, Yq, cq);
        const aq = lq.q.Dot(this.direction, cq) * Wq;
        if (aq < -this.epsilon || Nq + aq > 1 + this.epsilon) return null;
        const Vq = lq.q.Dot(Oq, cq) * Wq;
        return Vq > this.length || Vq < 0 ? null : new mq.c(1 - Nq - aq, Nq, Vq)
      }
      intersectsPlane(qq) {
        let Eq;
        const gq = lq.q.Dot(qq.normal, this.direction);
        if (Math.abs(gq) < 9.99999997475243e-7) return null;
        {
          const Yq = lq.q.Dot(qq.normal, this.origin);
          return Eq = (-qq.d - Yq) / gq, Eq < 0 ? Eq < -9.99999997475243e-7 ? null : 0 : Eq
        }
      }
      intersectsAxis(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (qq) {
          case "y": {
            const qq = (this.origin.y - Eq) / this.direction.y;
            return qq > 0 ? null : new lq.q(this.origin.x + this.direction.x * -qq, Eq, this.origin.z + this.direction.z * -qq)
          }
          case "x": {
            const qq = (this.origin.x - Eq) / this.direction.x;
            return qq > 0 ? null : new lq.q(Eq, this.origin.y + this.direction.y * -qq, this.origin.z + this.direction.z * -qq)
          }
          case "z": {
            const qq = (this.origin.z - Eq) / this.direction.z;
            return qq > 0 ? null : new lq.q(this.origin.x + this.direction.x * -qq, this.origin.y + this.direction.y * -qq, Eq)
          }
          default:
            return null
        }
      }
      Nlq(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Oq = arguments.length > 4 ? arguments[4] : void 0,
          mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const xq = lq.o.Matrix[0];
        return qq.getWorldMatrix().invertToRef(xq), this._tmpRay ? Bq.TransformToRef(this, xq, this._tmpRay) : this._tmpRay = Bq.Transform(this, xq), qq.intersects(this._tmpRay, Eq, gq, Yq, Oq, mq)
      }
      intersectsMeshes(qq, Eq, gq) {
        gq ? gq.length = 0 : gq = [];
        for (let Yq = 0; Yq < qq.length; Yq++) {
          const lq = this.Nlq(qq[Yq], Eq);
          lq.hit && gq.push(lq)
        }
        return gq.sort(this._comparePickingInfo), gq
      }
      _comparePickingInfo(qq, Eq) {
        return qq.distance < Eq.distance ? -1 : qq.distance > Eq.distance ? 1 : 0
      }
      intersectionSegment(qq, Eq, gq) {
        const Yq = this.origin,
          Oq = lq.o.Na[0],
          mq = lq.o.Na[1],
          xq = lq.o.Na[2],
          Aq = lq.o.Na[3];
        Eq.subtractToRef(qq, Oq), this.direction.scaleToRef(Bq._Rayl, xq), Yq.addToRef(xq, mq), qq.subtractToRef(Yq, Aq);
        const cq = lq.q.Dot(Oq, Oq),
          uq = lq.q.Dot(Oq, xq),
          Wq = lq.q.Dot(xq, xq),
          Nq = lq.q.Dot(Oq, Aq),
          aq = lq.q.Dot(xq, Aq),
          Vq = cq * Wq - uq * uq;
        let dq, jq, Hq = Vq,
          oq = Vq;
        Vq < Bq._Smallnum ? (dq = 0, Hq = 1, jq = aq, oq = Wq) : (dq = uq * aq - Wq * Nq, jq = cq * aq - uq * Nq, dq < 0 ? (dq = 0, jq = aq, oq = Wq) : dq > Hq && (dq = Hq, jq = aq + uq, oq = Wq)), jq < 0 ? (jq = 0, -Nq < 0 ? dq = 0 : -Nq > cq ? dq = Hq : (dq = -Nq, Hq = cq)) : jq > oq && (jq = oq, -Nq + uq < 0 ? dq = 0 : -Nq + uq > cq ? dq = Hq : (dq = -Nq + uq, Hq = cq));
        const Pq = Math.abs(dq) < Bq._Smallnum ? 0 : dq / Hq,
          Qq = Math.abs(jq) < Bq._Smallnum ? 0 : jq / oq,
          yq = lq.o.Na[4];
        xq.scaleToRef(Qq, yq);
        const tq = lq.o.Na[5];
        Oq.scaleToRef(Pq, tq), tq.addInPlace(Aq);
        const rq = lq.o.Na[6];
        tq.subtractToRef(yq, rq);
        return Qq > 0 && Qq <= this.length && rq.lengthSquared() < gq * gq ? tq.length() : -1
      }
      update(qq, Eq, gq, Yq, Oq, mq, xq) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Bq._RayDistant || (Bq._RayDistant = Bq.Zero()), Bq._RayDistant.unprojectRayToRef(qq, Eq, gq, Yq, lq.e.IdentityReadOnly, mq, xq);
          const Aq = lq.o.Matrix[0];
          Oq.invertToRef(Aq), Bq.TransformToRef(Bq._RayDistant, Aq, this)
        } else this.unprojectRayToRef(qq, Eq, gq, Yq, Oq, mq, xq);
        return this
      }
      static Zero() {
        return new Bq(lq.q.Zero(), lq.q.Zero())
      }
      static CreateNew(qq, Eq, gq, Yq, lq, Oq, mq) {
        return Bq.Zero().update(qq, Eq, gq, Yq, lq, Oq, mq)
      }
      static CreateNewFromTo(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.e.IdentityReadOnly;
        const Yq = new Bq(new lq.q(0, 0, 0), new lq.q(0, 0, 0));
        return Bq.CreateFromToToRef(qq, Eq, Yq, gq)
      }
      static CreateFromToToRef(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lq.e.IdentityReadOnly;
        gq.origin.WG(qq);
        const Oq = Eq.subtractToRef(qq, gq.direction),
          mq = Math.sqrt(Oq.x * Oq.x + Oq.y * Oq.y + Oq.z * Oq.z);
        return gq.length = mq, gq.direction.normalize(), Bq.TransformToRef(gq, Yq, gq)
      }
      static Transform(qq, Eq) {
        const gq = new Bq(new lq.q(0, 0, 0), new lq.q(0, 0, 0));
        return Bq.TransformToRef(qq, Eq, gq), gq
      }
      static TransformToRef(qq, Eq, gq) {
        lq.q.TransformCoordinatesToRef(qq.origin, Eq, gq.origin), lq.q.TransformNormalToRef(qq.direction, Eq, gq.direction), gq.length = qq.length, gq.epsilon = qq.epsilon;
        const Yq = gq.direction,
          Oq = Yq.length();
        if (0 !== Oq && 1 !== Oq) {
          const qq = 1 / Oq;
          Yq.x *= qq, Yq.y *= qq, Yq.z *= qq, gq.length *= Oq
        }
        return gq
      }
      unprojectRayToRef(qq, Eq, gq, Yq, Oq, mq, xq) {
        const cq = lq.o.Matrix[0];
        Oq.multiplyToRef(mq, cq), cq.multiplyToRef(xq, cq), cq.invert();
        const uq = Aq.b.LastCreatedEngine,
          Bq = lq.o.Na[0];
        Bq.x = qq / gq * 2 - 1, Bq.y = -(Eq / Yq * 2 - 1), Bq.z = uq?.vYq ? 1 : uq?.isNDCHalfZRange ? 0 : -1;
        const Wq = lq.o.Na[1].Vqq(Bq.x, Bq.y, 1 - 1e-8),
          Nq = lq.o.Na[2],
          aq = lq.o.Na[3];
        lq.q.TransformCoordinatesToRef(Bq, cq, Nq), lq.q.TransformCoordinatesToRef(Wq, cq, aq), this.origin.WG(Nq), aq.subtractToRef(Nq, this.direction), this.direction.normalize()
      }
    }

    function Wq(qq, Eq, gq, Yq, lq) {
      let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const mq = Bq.Zero();
      return Nq(qq, Eq, gq, Yq, mq, lq, Oq), mq
    }

    function Nq(qq, Eq, gq, Yq, Oq, mq) {
      let xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Aq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const cq = qq.Ba();
      if (!mq && !(mq = qq.activeCamera) && !(mq = qq.cameraToUseForPointers)) return qq;
      const uq = mq.viewport,
        Bq = cq.getRenderHeight(),
        {
          x: Wq,
          y: Nq,
          width: aq,
          height: Vq
        } = uq.toGlobal(cq.getRenderWidth(), Bq),
        dq = 1 / cq.getHardwareScalingLevel();
      return Eq = Eq * dq - Wq, gq = gq * dq - (Bq - Nq - Vq), Oq.update(Eq, gq, aq, Vq, Yq || lq.e.IdentityReadOnly, xq ? lq.e.IdentityReadOnly : mq.getViewMatrix(), mq.getProjectionMatrix(), Aq), qq
    }

    function aq(qq, Eq, gq, Yq) {
      const lq = Bq.Zero();
      return Vq(qq, Eq, gq, lq, Yq), lq
    }

    function Vq(qq, Eq, gq, Yq, Oq) {
      if (!xq.d) return qq;
      const mq = qq.Ba();
      if (!Oq && !(Oq = qq.activeCamera) && !(Oq = qq.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Aq = Oq.viewport,
        cq = mq.getRenderHeight(),
        {
          x: uq,
          y: Bq,
          width: Wq,
          height: Nq
        } = Aq.toGlobal(mq.getRenderWidth(), cq),
        aq = lq.e.Identity(),
        Vq = 1 / mq.getHardwareScalingLevel();
      return Eq = Eq * Vq - uq, gq = gq * Vq - (cq - Bq - Nq), Yq.update(Eq, gq, Wq, Nq, aq, aq, Oq.getProjectionMatrix()), qq
    }

    function dq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
      return jq(qq, gq, Yq, Eq(Yq, gq.enableDistantPicking), lq, Oq, mq, xq)
    }

    function jq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
      const Aq = Eq.intersects(Yq, lq, mq, Oq, gq, xq);
      return Aq && Aq.hit ? !lq && null != qq && Aq.distance >= qq.distance ? null : Aq : null
    }

    function Hq(qq, Eq) {
      return "InstancedLinesMesh" === qq || "LinesMesh" === qq ? Eq.intersectionThreshold : 0
    }

    function oq(qq) {
      const Eq = qq.getClassName();
      if ("GreasedLineMesh" === Eq) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const gq = qq.rawBoundingInfo;
      return {
        rawBoundingInfo: gq,
        intersectionThreshold: gq ? Hq(Eq, qq) : 0
      }
    }

    function Pq(qq, Eq, gq, Yq, lq) {
      const Oq = qq(gq, Eq.enableDistantPicking);
      return Oq.intersectsSphere(Yq.DYq, lq) && Oq.intersectsBox(Yq.boundingBox, lq) ? Oq : null
    }

    function Qq(qq, Eq, gq, Yq, Oq, mq) {
      let Aq = null;
      const cq = !!(qq.activeCameras && qq.activeCameras.length > 1 && qq.cameraToUseForPointers !== qq.activeCamera),
        Bq = qq.cameraToUseForPointers || qq.activeCamera,
        Wq = uq.internalPickerForMesh || dq,
        Nq = Wq === dq;
      for (let xq = 0; xq < qq.meshes.length; xq++) {
        const uq = qq.meshes[xq];
        if (gq) {
          if (!gq(uq, -1)) continue
        } else if (!uq.isEnabled() || !uq.isVisible || !uq.yV) continue;
        const aq = cq && uq.isWorldMatrixCameraDependent(),
          Vq = uq.computeWorldMatrix(aq, Bq);
        if (uq.hasThinInstances && uq.eEq) {
          const qq = Wq(Aq, Eq, uq, Vq, !0, !0, mq);
          if (qq) {
            if (Oq) return qq;
            const {
              rawBoundingInfo: xq,
              intersectionThreshold: cq
            } = oq(uq), Bq = uq._thinInstanceDataStorage.matrixData;
            if (Bq) {
              const qq = lq.o.Matrix[0],
                aq = lq.o.Matrix[1],
                dq = Math.min(uq.o5, Bq.length >> 4);
              for (let Hq = 0; Hq < dq; Hq++) {
                if (gq && !gq(uq, Hq)) continue;
                lq.e.FromArrayToRef(Bq, Hq << 4, qq), qq.multiplyToRef(Vq, aq);
                const dq = Nq && xq ? Pq(Eq, uq, aq, xq, cq) : null;
                if (Nq && xq && !dq) continue;
                const oq = Nq && dq ? jq(Aq, uq, aq, dq, Yq, Oq, mq, !0) : Wq(Aq, Eq, uq, aq, Yq, Oq, mq, !0);
                if (oq && (Aq = oq, Aq.thinInstanceIndex = Hq, Yq)) return Aq
              }
            }
          }
        } else {
          const qq = Wq(Aq, Eq, uq, Vq, Yq, Oq, mq);
          if (qq && (Aq = qq, Yq)) return Aq
        }
      }
      return Aq || new xq.d
    }

    function yq(qq, Eq, gq, Yq) {
      if (!xq.d) return null;
      const Oq = [],
        mq = !!(qq.activeCameras && qq.activeCameras.length > 1 && qq.cameraToUseForPointers !== qq.activeCamera),
        Aq = qq.cameraToUseForPointers || qq.activeCamera,
        cq = uq.internalPickerForMesh || dq,
        Bq = cq === dq;
      for (let xq = 0; xq < qq.meshes.length; xq++) {
        const uq = qq.meshes[xq];
        if (gq) {
          if (!gq(uq, -1)) continue
        } else if (!uq.isEnabled() || !uq.isVisible || !uq.yV) continue;
        const Wq = mq && uq.isWorldMatrixCameraDependent(),
          Nq = uq.computeWorldMatrix(Wq, Aq);
        if (uq.hasThinInstances && uq.eEq) {
          if (cq(null, Eq, uq, Nq, !0, !0, Yq)) {
            const {
              rawBoundingInfo: qq,
              intersectionThreshold: mq
            } = oq(uq), xq = uq._thinInstanceDataStorage.matrixData;
            if (xq) {
              const Aq = lq.o.Matrix[0],
                Wq = lq.o.Matrix[1],
                aq = Math.min(uq.o5, xq.length >> 4);
              for (let Vq = 0; Vq < aq; Vq++) {
                if (gq && !gq(uq, Vq)) continue;
                lq.e.FromArrayToRef(xq, Vq << 4, Aq), Aq.multiplyToRef(Nq, Wq);
                const aq = Bq && qq ? Pq(Eq, uq, Wq, qq, mq) : null;
                if (Bq && qq && !aq) continue;
                const dq = Bq && aq ? jq(null, uq, Wq, aq, !1, !1, Yq, !0) : cq(null, Eq, uq, Wq, !1, !1, Yq, !0);
                dq && (dq.thinInstanceIndex = Vq, Oq.push(dq))
              }
            }
          }
        } else {
          const qq = cq(null, Eq, uq, Nq, !1, !1, Yq);
          qq && Oq.push(qq)
        }
      }
      return Oq
    }

    function tq(qq, Eq, gq, Yq, Oq, mq) {
      if (!xq.d) return null;
      const Aq = Qq(qq, (Yq => (qq._tempPickingRay || (qq._tempPickingRay = Bq.Zero()), Nq(qq, Eq, gq, Yq, qq._tempPickingRay, mq || null), qq._tempPickingRay)), Yq, Oq, !0);
      return Aq && (Aq.ray = Wq(qq, Eq, gq, lq.e.Identity(), mq || null)), Aq
    }

    function rq(qq, Eq, gq, Yq, Oq, mq, xq) {
      const Aq = Qq(qq, ((Yq, lq) => (qq._tempPickingRay || (qq._tempPickingRay = Bq.Zero()), Nq(qq, Eq, gq, Yq, qq._tempPickingRay, mq || null, !1, lq), qq._tempPickingRay)), Yq, Oq, !1, xq);
      return Aq && (Aq.ray = Wq(qq, Eq, gq, lq.e.Identity(), mq || null)), Aq
    }

    function vq(qq, Eq, gq, Yq, Oq) {
      const mq = Qq(qq, (gq => (qq._pickWithRayInverseMatrix || (qq._pickWithRayInverseMatrix = lq.e.Identity()), gq.invertToRef(qq._pickWithRayInverseMatrix), qq._cachedRayForTransform || (qq._cachedRayForTransform = Bq.Zero()), Bq.TransformToRef(Eq, qq._pickWithRayInverseMatrix, qq._cachedRayForTransform), qq._cachedRayForTransform)), gq, Yq, !1, Oq);
      return mq && (mq.ray = Eq), mq
    }

    function hq(qq, Eq, gq, Yq, lq, Oq) {
      return yq(qq, (Yq => Wq(qq, Eq, gq, Yq, lq || null)), Yq, Oq)
    }

    function nq(qq, Eq, gq, Yq) {
      return yq(qq, (gq => (qq._pickWithRayInverseMatrix || (qq._pickWithRayInverseMatrix = lq.e.Identity()), gq.invertToRef(qq._pickWithRayInverseMatrix), qq._cachedRayForTransform || (qq._cachedRayForTransform = Bq.Zero()), Bq.TransformToRef(Eq, qq._pickWithRayInverseMatrix, qq._cachedRayForTransform), qq._cachedRayForTransform)), gq, Yq)
    }

    function bq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Yq = arguments.length > 3 ? arguments[3] : void 0,
        Oq = arguments.length > 4 ? arguments[4] : void 0;
      Yq || (Yq = qq.getWorldMatrix()), Eq.length = gq, Oq ? Eq.origin.WG(Oq) : Eq.origin.WG(qq.position);
      const mq = lq.o.Na[2];
      mq.set(0, 0, qq._scene.useRightHandedSystem ? -1 : 1);
      const xq = lq.o.Na[3];
      return lq.q.TransformNormalToRef(mq, Yq, xq), lq.q.NormalizeToRef(xq, Eq.direction), Eq
    }

    function iq(qq, Eq) {
      Eq && (Eq.prototype.getForwardRay = function() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        return bq(this, new Bq(lq.q.Zero(), lq.q.Zero(), qq), qq, Eq, gq)
      }, Eq.prototype.getForwardRayToRef = function(qq) {
        return bq(this, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), qq && (cq.b._IsPickingAvailable = !0, qq.prototype.createPickingRay = function(qq, Eq, gq, Yq) {
        return Wq(this, qq, Eq, gq, Yq, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Bq._TmpVector3 = (0, Oq.e)(6, lq.q.Zero), Bq._RayDistant = Bq.Zero(), Bq._Smallnum = 1e-8, Bq._Rayl = 1e9
  },
  41311: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq.A
    });
    var Yq = gq(39838),
      lq = gq(39951),
      Oq = gq(41315);
    let mq = !1;
    mq || (mq = !0, (0, Oq.e)(Yq.i, lq.e), Yq.i.prototype.createPickingRayToRef = function(qq, Eq, gq, Yq, lq) {
      let mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Oq.l)(this, qq, Eq, gq, Yq, lq, mq, xq)
    }, Yq.i.prototype.createPickingRayInCameraSpace = function(qq, Eq, gq) {
      return (0, Oq.j)(this, qq, Eq, gq)
    }, Yq.i.prototype.createPickingRayInCameraSpaceToRef = function(qq, Eq, gq, Yq) {
      return (0, Oq.h)(this, qq, Eq, gq, Yq)
    }, Yq.i.prototype.pickWithBoundingInfo = function(qq, Eq, gq, Yq, lq) {
      return (0, Oq.v)(this, qq, Eq, gq, Yq, lq)
    }, Yq.i.prototype.zW = function(qq, Eq, gq, Yq, lq, mq) {
      let xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Oq.z)(this, qq, Eq, gq, Yq, lq, mq, xq)
    }, Yq.i.prototype.pickWithRay = function(qq, Eq, gq, Yq) {
      return (0, Oq.w)(this, qq, Eq, gq, Yq)
    }, Yq.i.prototype.multiPick = function(qq, Eq, gq, Yq, lq) {
      return (0, Oq.r)(this, qq, Eq, gq, Yq, lq)
    }, Yq.i.prototype.multiPickWithRay = function(qq, Eq, gq) {
      return (0, Oq.n)(this, qq, Eq, gq)
    })
  },
  41324: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37139),
      mq = gq(39995),
      xq = gq(41329),
      Aq = gq(39960),
      cq = gq(37171);
    let uq = (() => {
        var qq;
        let Eq, gq, Aq, cq, uq, Bq, Wq, Nq, aq = xq.e,
          Vq = [],
          dq = [],
          jq = [],
          Hq = [],
          oq = [],
          Pq = [],
          Qq = [],
          yq = [],
          tq = [],
          rq = [],
          vq = [],
          hq = [],
          nq = [];
        return qq = class extends aq {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(qq) {
            this._shadowFrustumSize = qq, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(qq) {
            this._shadowOrthoScale = qq, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(qq) {
            this._orthoLeft = qq
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(qq) {
            this._orthoRight = qq
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(qq) {
            this._orthoTop = qq
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(qq) {
            this._orthoBottom = qq
          }
          constructor(qq, Eq, gq, lq) {
            super(qq, gq, lq), this._shadowFrustumSize = ((0, Yq.i)(this, Vq), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Yq.i)(this, dq, !0), this.autoCalcShadowZBounds = ((0, Yq.i)(this, jq), (0, Yq.i)(this, Hq, !1)), this._orthoLeft = ((0, Yq.i)(this, oq), (0, Yq.i)(this, Pq, Number.MAX_VALUE)), this._orthoRight = ((0, Yq.i)(this, Qq), (0, Yq.i)(this, yq, Number.MIN_VALUE)), this._orthoTop = ((0, Yq.i)(this, tq), (0, Yq.i)(this, rq, Number.MIN_VALUE)), this._orthoBottom = ((0, Yq.i)(this, vq), (0, Yq.i)(this, hq, Number.MAX_VALUE)), (0, Yq.i)(this, nq), this.position = Eq.scale(-1), this.direction = Eq
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return mq.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(qq, Eq, gq) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(qq) : this._setDefaultAutoExtendShadowProjectionMatrix(qq, Eq, gq)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(qq) {
            const Eq = this.ZJ().activeCamera;
            Oq.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Eq ? Eq.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Eq ? Eq.maxZ : 1e4, qq, this.ZJ().Ba().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(qq, Eq, gq) {
            const Yq = this.ZJ().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const qq = Oq.q.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Yq = Number.MAX_VALUE,
                lq = -Number.MAX_VALUE;
              for (let mq = 0; mq < gq.length; mq++) {
                const xq = gq[mq];
                if (!xq) continue;
                const Aq = xq.yR().boundingBox;
                for (let gq = 0; gq < Aq.vectorsWorld.length; gq++) Oq.q.TransformCoordinatesToRef(Aq.vectorsWorld[gq], Eq, qq), qq.x < this._orthoLeft && (this._orthoLeft = qq.x), qq.y < this._orthoBottom && (this._orthoBottom = qq.y), qq.x > this._orthoRight && (this._orthoRight = qq.x), qq.y > this._orthoTop && (this._orthoTop = qq.y), this.autoCalcShadowZBounds && (qq.z < Yq && (Yq = qq.z), qq.z > lq && (lq = qq.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Yq, this._shadowMaxZ = lq)
            }
            const lq = this._orthoRight - this._orthoLeft,
              mq = this._orthoTop - this._orthoBottom,
              xq = void 0 !== this.shadowMinZ ? this.shadowMinZ : Yq?.minZ || 0,
              Aq = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Yq?.maxZ || 1e4,
              cq = this.ZJ().Ba().vYq;
            Oq.e.OrthoOffCenterLHToRef(this._orthoLeft - lq * this.shadowOrthoScale, this._orthoRight + lq * this.shadowOrthoScale, this._orthoBottom - mq * this.shadowOrthoScale, this._orthoTop + mq * this.shadowOrthoScale, cq ? Aq : xq, cq ? xq : Aq, qq, this.ZJ().Ba().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(qq, Eq) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Eq), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, Eq), this)
          }
          transferToNodeMaterialEffect(qq, Eq) {
            return this.computeTransformedInformation() ? (qq.setFloat3(Eq, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (qq.setFloat3(Eq, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(qq) {
            const Eq = this._scene.Ba();
            return !Eq.vYq && Eq.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(qq) {
            const Eq = this._scene.Ba();
            return Eq.vYq && Eq.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(qq, Eq) {
            qq["DIRLIGHT" + Eq] = !0
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(aq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], uq = [(0, lq.M)("orthoLeft")], Bq = [(0, lq.M)("orthoRight")], Wq = [(0, lq.M)("orthoTop")], Nq = [(0, lq.M)("orthoBottom")], (0, Yq.f)(qq, null, Eq, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: qq => "shadowFrustumSize" in qq,
              get: qq => qq.shadowFrustumSize
            },
            metadata: Oq
          }, null, Vq), (0, Yq.f)(qq, null, gq, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: qq => "shadowOrthoScale" in qq,
              get: qq => qq.shadowOrthoScale
            },
            metadata: Oq
          }, null, Vq), (0, Yq.f)(null, null, Aq, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: qq => "autoUpdateExtends" in qq,
              get: qq => qq.autoUpdateExtends,
              set: (qq, Eq) => {
                qq.autoUpdateExtends = Eq
              }
            },
            metadata: Oq
          }, dq, jq), (0, Yq.f)(null, null, cq, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: qq => "autoCalcShadowZBounds" in qq,
              get: qq => qq.autoCalcShadowZBounds,
              set: (qq, Eq) => {
                qq.autoCalcShadowZBounds = Eq
              }
            },
            metadata: Oq
          }, Hq, oq), (0, Yq.f)(null, null, uq, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: qq => "_orthoLeft" in qq,
              get: qq => qq._orthoLeft,
              set: (qq, Eq) => {
                qq._orthoLeft = Eq
              }
            },
            metadata: Oq
          }, Pq, Qq), (0, Yq.f)(null, null, Bq, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: qq => "_orthoRight" in qq,
              get: qq => qq._orthoRight,
              set: (qq, Eq) => {
                qq._orthoRight = Eq
              }
            },
            metadata: Oq
          }, yq, tq), (0, Yq.f)(null, null, Wq, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: qq => "_orthoTop" in qq,
              get: qq => qq._orthoTop,
              set: (qq, Eq) => {
                qq._orthoTop = Eq
              }
            },
            metadata: Oq
          }, rq, vq), (0, Yq.f)(null, null, Nq, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: qq => "_orthoBottom" in qq,
              get: qq => qq._orthoBottom,
              set: (qq, Eq) => {
                qq._orthoBottom = Eq
              }
            },
            metadata: Oq
          }, hq, nq), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq
      })(),
      Bq = !1;
    Bq || (Bq = !0, Aq.c.AddNodeConstructor("Light_Type_1", ((qq, Eq) => () => new uq(qq, Oq.q.Zero(), Eq))), (0, cq.g)("BABYLON.DirectionalLight", uq))
  },
  41338: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => sE
    });
    var Yq = gq(38677),
      lq = gq(37156),
      Oq = gq(37139),
      mq = gq(39879),
      xq = gq(41340),
      Aq = gq(37153),
      cq = gq(40028),
      uq = gq(37289),
      Bq = gq(38679),
      Wq = gq(38649),
      Nq = gq(37158);
    class aq {
      constructor() {
        this.direction1 = new Oq.q(0, 1, 0), this.direction2 = new Oq.q(0, 1, 0)
      }
      startDirectionFunction(qq, Eq, gq, Yq) {
        const lq = (0, Nq.RandomRange)(this.direction1.x, this.direction2.x),
          mq = (0, Nq.RandomRange)(this.direction1.y, this.direction2.y),
          xq = (0, Nq.RandomRange)(this.direction1.z, this.direction2.z);
        Yq ? Eq.Vqq(lq, mq, xq) : Oq.q.TransformNormalFromFloatsToRef(lq, mq, xq, qq, Eq)
      }
      startPositionFunction(qq, Eq, gq, Yq) {
        Yq ? Eq.Vqq(0, 0, 0) : Oq.q.TransformCoordinatesFromFloatsToRef(0, 0, 0, qq, Eq)
      }
      clone() {
        const qq = new aq;
        return Wq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        qq.setVector3("direction1", this.direction1), qq.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(qq) {
        qq.addUniform("direction1", 3), qq.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const qq = {};
        return qq.type = this.getClassName(), qq.direction1 = this.direction1.bYq(), qq.direction2 = this.direction2.bYq(), qq
      }
      parse(qq) {
        Oq.q.FromArrayToRef(qq.direction1, 0, this.direction1), Oq.q.FromArrayToRef(qq.direction2, 0, this.direction2)
      }
    }
    class Vq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = qq, this.radiusRange = Eq, this.directionRandomizer = gq
      }
      startDirectionFunction(qq, Eq, gq, Yq) {
        const lq = gq.position.subtract(qq.getTranslation()).normalize(),
          mq = (0, Nq.RandomRange)(0, this.directionRandomizer),
          xq = (0, Nq.RandomRange)(0, this.directionRandomizer),
          Aq = (0, Nq.RandomRange)(0, this.directionRandomizer);
        lq.x += mq, lq.y += xq, lq.z += Aq, lq.normalize(), Yq ? Eq.WG(lq) : Oq.q.TransformNormalFromFloatsToRef(lq.x, lq.y, lq.z, qq, Eq)
      }
      startPositionFunction(qq, Eq, gq, Yq) {
        const lq = this.radius - (0, Nq.RandomRange)(0, this.radius * this.radiusRange),
          mq = (0, Nq.RandomRange)(0, 1),
          xq = (0, Nq.RandomRange)(0, 2 * Math.PI),
          Aq = Math.acos(2 * mq - 1),
          cq = lq * Math.cos(xq) * Math.sin(Aq),
          uq = lq * Math.cos(Aq),
          Bq = lq * Math.sin(xq) * Math.sin(Aq);
        Yq ? Eq.Vqq(cq, Math.abs(uq), Bq) : Oq.q.TransformCoordinatesFromFloatsToRef(cq, Math.abs(uq), Bq, qq, Eq)
      }
      clone() {
        const qq = new Vq(this.radius, this.directionRandomizer);
        return Wq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        qq.setFloat("radius", this.radius), qq.setFloat("radiusRange", this.radiusRange), qq.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(qq) {
        qq.addUniform("radius", 1), qq.addUniform("radiusRange", 1), qq.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const qq = {};
        return qq.type = this.getClassName(), qq.radius = this.radius, qq.radiusRange = this.radiusRange, qq.directionRandomizer = this.directionRandomizer, qq
      }
      parse(qq) {
        this.radius = qq.radius, this.radiusRange = qq.radiusRange, this.directionRandomizer = qq.directionRandomizer
      }
    }
    class dq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = qq, this.radiusRange = Eq, this.directionRandomizer = gq
      }
      startDirectionFunction(qq, Eq, gq, Yq) {
        const lq = gq.position.subtract(qq.getTranslation()).normalize(),
          mq = (0, Nq.RandomRange)(0, this.directionRandomizer),
          xq = (0, Nq.RandomRange)(0, this.directionRandomizer),
          Aq = (0, Nq.RandomRange)(0, this.directionRandomizer);
        lq.x += mq, lq.y += xq, lq.z += Aq, lq.normalize(), Yq ? Eq.WG(lq) : Oq.q.TransformNormalFromFloatsToRef(lq.x, lq.y, lq.z, qq, Eq)
      }
      startPositionFunction(qq, Eq, gq, Yq) {
        const lq = this.radius - (0, Nq.RandomRange)(0, this.radius * this.radiusRange),
          mq = (0, Nq.RandomRange)(0, 1),
          xq = (0, Nq.RandomRange)(0, 2 * Math.PI),
          Aq = Math.acos(2 * mq - 1),
          cq = lq * Math.cos(xq) * Math.sin(Aq),
          uq = lq * Math.cos(Aq),
          Bq = lq * Math.sin(xq) * Math.sin(Aq);
        Yq ? Eq.Vqq(cq, uq, Bq) : Oq.q.TransformCoordinatesFromFloatsToRef(cq, uq, Bq, qq, Eq)
      }
      clone() {
        const qq = new dq(this.radius, this.directionRandomizer);
        return Wq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        qq.setFloat("radius", this.radius), qq.setFloat("radiusRange", this.radiusRange), qq.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(qq) {
        qq.addUniform("radius", 1), qq.addUniform("radiusRange", 1), qq.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const qq = {};
        return qq.type = this.getClassName(), qq.radius = this.radius, qq.radiusRange = this.radiusRange, qq.directionRandomizer = this.directionRandomizer, qq
      }
      parse(qq) {
        this.radius = qq.radius, this.radiusRange = qq.radiusRange, this.directionRandomizer = qq.directionRandomizer
      }
    }
    class jq extends dq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Oq.q(0, 1, 0),
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Oq.q(0, 1, 0);
        super(qq), this.direction1 = Eq, this.direction2 = gq
      }
      startDirectionFunction(qq, Eq, gq, Yq) {
        const lq = (0, Nq.RandomRange)(this.direction1.x, this.direction2.x),
          mq = (0, Nq.RandomRange)(this.direction1.y, this.direction2.y),
          xq = (0, Nq.RandomRange)(this.direction1.z, this.direction2.z);
        Yq ? Eq.Vqq(lq, mq, xq) : Oq.q.TransformNormalFromFloatsToRef(lq, mq, xq, qq, Eq)
      }
      clone() {
        const qq = new jq(this.radius, this.direction1, this.direction2);
        return Wq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        qq.setFloat("radius", this.radius), qq.setFloat("radiusRange", this.radiusRange), qq.setVector3("direction1", this.direction1), qq.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(qq) {
        qq.addUniform("radius", 1), qq.addUniform("radiusRange", 1), qq.addUniform("direction1", 3), qq.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const qq = super.serialize();
        return qq.direction1 = this.direction1.bYq(), qq.direction2 = this.direction2.bYq(), qq
      }
      parse(qq) {
        super.parse(qq), Oq.q.FromArrayToRef(qq.direction1, 0, this.direction1), Oq.q.FromArrayToRef(qq.direction2, 0, this.direction2)
      }
    }
    var Hq = gq(38646);
    class oq {
      get radius() {
        return this._radius
      }
      set radius(qq) {
        this._radius = qq, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(qq) {
        this._angle = qq, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = gq, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Eq, this.radius = qq
      }
      startDirectionFunction(qq, Eq, gq, Yq) {
        const lq = gq.position.subtract(qq.getTranslation()).normalize(),
          mq = (0, Nq.RandomRange)(0, this.directionRandomizer),
          xq = (0, Nq.RandomRange)(0, this.directionRandomizer),
          Aq = (0, Nq.RandomRange)(0, this.directionRandomizer);
        lq.x += mq, lq.y += xq, lq.z += Aq, lq.normalize(), Yq ? Eq.WG(lq) : Oq.q.TransformNormalFromFloatsToRef(lq.x, lq.y, lq.z, qq, Eq)
      }
      startPositionFunction(qq, Eq, gq, Yq) {
        const lq = (0, Nq.RandomRange)(0, 2 * Math.PI);
        let mq;
        this.emitFromSpawnPointOnly ? mq = 1e-4 : (mq = (0, Nq.RandomRange)(0, this.heightRange), mq = 1 - mq * mq);
        let xq = this._radius - (0, Nq.RandomRange)(0, this._radius * this.radiusRange);
        xq *= mq;
        const Aq = xq * Math.sin(lq),
          cq = xq * Math.cos(lq),
          uq = mq * this._height;
        if (Yq) return Eq.x = Aq, Eq.y = uq, void(Eq.z = cq);
        Oq.q.TransformCoordinatesFromFloatsToRef(Aq, uq, cq, qq, Eq)
      }
      clone() {
        const qq = new oq(this._radius, this._angle, this.directionRandomizer);
        return Wq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        qq.setFloat2("radius", this._radius, this.radiusRange), qq.setFloat("coneAngle", this._angle), qq.setFloat2("height", this._height, this.heightRange), qq.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(qq) {
        qq.addUniform("radius", 2), qq.addUniform("coneAngle", 1), qq.addUniform("height", 2), qq.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let qq = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (qq += "\n#define CONEEMITTERSPAWNPOINT"), qq
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const qq = {};
        return qq.type = this.getClassName(), qq.radius = this._radius, qq.angle = this._angle, qq.directionRandomizer = this.directionRandomizer, qq.radiusRange = this.radiusRange, qq.heightRange = this.heightRange, qq.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, qq
      }
      parse(qq) {
        this.radius = qq.radius, this.angle = qq.angle, this.directionRandomizer = qq.directionRandomizer, this.radiusRange = void 0 !== qq.radiusRange ? qq.radiusRange : 1, this.heightRange = void 0 !== qq.heightRange ? qq.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== qq.emitFromSpawnPointOnly && qq.emitFromSpawnPointOnly
      }
    }
    class Pq extends oq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Oq.q(0, 1, 0),
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Oq.q(0, 1, 0);
        super(qq, Eq), this.direction1 = gq, this.direction2 = Yq
      }
      startDirectionFunction(qq, Eq, gq, Yq) {
        const lq = (0, Nq.RandomRange)(this.direction1.x, this.direction2.x),
          mq = (0, Nq.RandomRange)(this.direction1.y, this.direction2.y),
          xq = (0, Nq.RandomRange)(this.direction1.z, this.direction2.z);
        Yq ? Eq.Vqq(lq, mq, xq) : Oq.q.TransformNormalFromFloatsToRef(lq, mq, xq, qq, Eq)
      }
      clone() {
        const qq = new Pq(this.radius, this.angle, this.direction1, this.direction2);
        return Wq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        super.applyToShader(qq), qq.setVector3("direction1", this.direction1), qq.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(qq) {
        super.buildUniformLayout(qq), qq.addUniform("direction1", 3), qq.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const qq = super.serialize();
        return qq.direction1 = this.direction1.bYq(), qq.direction2 = this.direction2.bYq(), qq
      }
      parse(qq) {
        super.parse(qq), Oq.q.FromArrayToRef(qq.direction1, 0, this.direction1), Oq.q.FromArrayToRef(qq.direction2, 0, this.direction2)
      }
    }
    class Qq {
      get mesh() {
        return this._mesh
      }
      set mesh(qq) {
        this._mesh !== qq && (this._mesh = qq, qq ? (this._indices = qq.iYq(), this._positions = qq.getVerticesData(mq.g.PositionKind), this._normals = qq.getVerticesData(mq.g.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Oq.q.Zero(), this._mesh = null, this.direction1 = new Oq.q(0, 1, 0), this.direction2 = new Oq.q(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = qq
      }
      startDirectionFunction(qq, Eq, gq, Yq) {
        if (this.useMeshNormalsForDirection && this._normals) return void Oq.q.TransformNormalToRef(this._storedNormal, qq, Eq);
        const lq = (0, Nq.RandomRange)(this.direction1.x, this.direction2.x),
          mq = (0, Nq.RandomRange)(this.direction1.y, this.direction2.y),
          xq = (0, Nq.RandomRange)(this.direction1.z, this.direction2.z);
        Yq ? Eq.Vqq(lq, mq, xq) : Oq.q.TransformNormalFromFloatsToRef(lq, mq, xq, qq, Eq)
      }
      startPositionFunction(qq, Eq, gq, Yq) {
        if (!this._indices || !this._positions) return;
        const lq = 3 * (Math.random() * (this._indices.length / 3) | 0),
          mq = Math.random(),
          xq = Math.random() * (1 - mq),
          Aq = 1 - mq - xq,
          cq = this._indices[lq],
          uq = this._indices[lq + 1],
          Bq = this._indices[lq + 2],
          Wq = Oq.o.Na[0],
          Nq = Oq.o.Na[1],
          aq = Oq.o.Na[2],
          Vq = Oq.o.Na[3];
        Oq.q.FromArrayToRef(this._positions, 3 * cq, Wq), Oq.q.FromArrayToRef(this._positions, 3 * uq, Nq), Oq.q.FromArrayToRef(this._positions, 3 * Bq, aq), Vq.x = mq * Wq.x + xq * Nq.x + Aq * aq.x, Vq.y = mq * Wq.y + xq * Nq.y + Aq * aq.y, Vq.z = mq * Wq.z + xq * Nq.z + Aq * aq.z, Yq ? Eq.Vqq(Vq.x, Vq.y, Vq.z) : Oq.q.TransformCoordinatesFromFloatsToRef(Vq.x, Vq.y, Vq.z, qq, Eq), this.useMeshNormalsForDirection && this._normals && (Oq.q.FromArrayToRef(this._normals, 3 * cq, Wq), Oq.q.FromArrayToRef(this._normals, 3 * uq, Nq), Oq.q.FromArrayToRef(this._normals, 3 * Bq, aq), this._storedNormal.x = mq * Wq.x + xq * Nq.x + Aq * aq.x, this._storedNormal.y = mq * Wq.y + xq * Nq.y + Aq * aq.y, this._storedNormal.z = mq * Wq.z + xq * Nq.z + Aq * aq.z)
      }
      clone() {
        const qq = new Qq(this.mesh);
        return Wq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        qq.setVector3("direction1", this.direction1), qq.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(qq) {
        qq.addUniform("direction1", 3), qq.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const qq = {};
        return qq.type = this.getClassName(), qq.direction1 = this.direction1.bYq(), qq.direction2 = this.direction2.bYq(), qq.meshId = this.mesh?.id, qq.useMeshNormalsForDirection = this.useMeshNormalsForDirection, qq
      }
      parse(qq, Eq) {
        Oq.q.FromArrayToRef(qq.direction1, 0, this.direction1), Oq.q.FromArrayToRef(qq.direction2, 0, this.direction2), qq.meshId && Eq && (this.mesh = Eq.getLastMeshById(qq.meshId)), this.useMeshNormalsForDirection = qq.useMeshNormalsForDirection
      }
    }
    class yq {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(qq) {
        this._targetStopDuration !== qq && (this._targetStopDuration = qq)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(qq) {
        this._noiseTexture !== qq && (this._noiseTexture = qq, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(qq) {
        this._attractors.push(qq)
      }
      removeAttractor(qq) {
        const Eq = this._attractors.indexOf(qq); - 1 !== Eq && this._attractors.splice(Eq, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(qq) {
        this._animationSheetEnabled !== qq && (this._animationSheetEnabled = qq)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(qq) {
        this._isAnimationSheetEnabled != qq && (this._isAnimationSheetEnabled = qq, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(qq) {
        this._useLogarithmicDepth = qq && this.ZJ().Ba().getCaps().fragmentDepthSupported
      }
      ZJ() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(qq) {
        switch (qq) {
          case yq.BLENDMODE_MULTIPLYADD:
            return;
          case yq.BLENDMODE_ADD:
            qq = 1;
            break;
          case yq.BLENDMODE_ONEONE:
            qq = 6;
            break;
          case yq.BLENDMODE_STANDARD:
            qq = 2;
            break;
          case yq.BLENDMODE_MULTIPLY:
            qq = 4;
            break;
          case yq.BLENDMODE_SUBTRACT:
            qq = 3
        }
        this._engine.setAlphaMode(qq)
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
      addEmitRateGradient(qq, Eq, gq) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, qq, Eq, gq), this
      }
      removeEmitRateGradient(qq) {
        return this._removeFactorGradient(this._emitRateGradients, qq), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Oq.q.Zero()
      }
      set direction1(qq) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = qq)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Oq.q.Zero()
      }
      set direction2(qq) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = qq)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Oq.q.Zero()
      }
      set minEmitBox(qq) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = qq)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Oq.q.Zero()
      }
      set maxEmitBox(qq) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = qq)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(qq) {
        this._billboardMode !== qq && (this._billboardMode = qq, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(qq) {
        this._isBillboardBased !== qq && (this._isBillboardBased = qq, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(qq) {
        this._attachImageProcessingConfiguration(qq)
      }
      _attachImageProcessingConfiguration(qq) {
        qq !== this._imageProcessingConfiguration && (!qq && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = qq)
      }
      _reset() {}
      _addFactorGradient(qq, Eq, gq, lq) {
        const Oq = new Yq.i(Eq, gq, lq);
        qq.push(Oq), qq.sort(((qq, Eq) => qq.gradient < Eq.gradient ? -1 : qq.gradient > Eq.gradient ? 1 : 0))
      }
      _removeFactorGradient(qq, Eq) {
        if (!qq) return;
        let gq = 0;
        for (const Yq of qq) {
          if (Yq.gradient === Eq) {
            qq.splice(gq, 1);
            break
          }
          gq++
        }
      }
      _removeGradientAndTexture(qq, Eq, gq) {
        if (!Eq) return this;
        let Yq = 0;
        for (const lq of Eq) {
          if (lq.gradient === qq) {
            Eq.splice(Yq, 1);
            break
          }
          Yq++
        }
        return gq && gq.dispose(), this
      }
      constructor(qq) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Oq.q.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Oq.q(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = yq.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Oq.p(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Oq.q(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Oq.q.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new uq.g(1, 1, 1, 1), this.color2 = new uq.g(1, 1, 1, 1), this.colorDead = new uq.g(0, 0, 0, 1), this.textureMask = new uq.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new cq.d, this.id = qq, this.name = qq
      }
      createPointEmitter(qq, Eq) {
        const gq = function(qq, Eq) {
          const gq = new aq;
          return gq.direction1 = qq, gq.direction2 = Eq, gq
        }(qq, Eq);
        return this.particleEmitterType = gq, gq
      }
      createHemisphericEmitter() {
        const qq = function() {
          return new Vq(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = qq, qq
      }
      createSphereEmitter() {
        const qq = function() {
          return new dq(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = qq, qq
      }
      createDirectedSphereEmitter() {
        const qq = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Oq.q(0, 1, 0),
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Oq.q(0, 1, 0);
          return new jq(qq, Eq, gq)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Oq.q(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Oq.q(0, 1, 0));
        return this.particleEmitterType = qq, qq
      }
      createCylinderEmitter() {
        const qq = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Hq.e(qq, Eq, gq, Yq)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = qq, qq
      }
      createDirectedCylinderEmitter() {
        const qq = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Oq.q(0, 1, 0),
            lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Oq.q(0, 1, 0);
          return new Hq.d(qq, Eq, gq, Yq, lq)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Oq.q(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Oq.q(0, 1, 0));
        return this.particleEmitterType = qq, qq
      }
      createConeEmitter() {
        const qq = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new oq(qq, Eq)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = qq, qq
      }
      createDirectedConeEmitter() {
        const qq = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Oq.q(0, 1, 0),
            Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Oq.q(0, 1, 0);
          return new Pq(qq, Eq, gq, Yq)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Oq.q(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Oq.q(0, 1, 0));
        return this.particleEmitterType = qq, qq
      }
      createBoxEmitter(qq, Eq, gq, Yq) {
        const lq = new Bq.b;
        return this.particleEmitterType = lq, this.direction1 = qq, this.direction2 = Eq, this.minEmitBox = gq, this.maxEmitBox = Yq, lq
      }
      createMeshEmitter() {
        const qq = function() {
          return new Qq(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = qq, qq
      }
    }
    yq.BLENDMODE_ONEONE = 0, yq.BLENDMODE_STANDARD = 1, yq.BLENDMODE_ADD = 2, yq.BLENDMODE_MULTIPLY = 3, yq.BLENDMODE_MULTIPLYADD = 4, yq.BLENDMODE_SUBTRACT = -1;
    class tq {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new uq.g(0, 0, 0, 0), this.currentColor2 = new uq.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Oq.q.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class rq {
      constructor(qq) {
        this.particleSystem = qq, this.position = Oq.q.Zero(), this.direction = Oq.q.Zero(), this.color = new uq.g(0, 0, 0, 0), this.colorStep = new uq.g(0, 0, 0, 0), this.initialColor = new uq.g(0, 0, 0, 0), this.colorDead = new uq.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Oq.p(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new tq, this.id = rq._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let qq = this.age,
          Eq = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Eq ? (Eq = 1, qq = this._properties.randomCellOffset) : qq += this._properties.randomCellOffset);
        const gq = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Yq;
        Yq = this._properties.initialSpriteCellLoop ? (0, Nq.Clamp)(qq * Eq % this.lifeTime / this.lifeTime) : (0, Nq.Clamp)(qq * Eq / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Yq * gq | 0
      }
      _inheritParticleInfoToSubEmitter(qq) {
        if (qq.particleSystem.emitter.position) {
          const Eq = qq.particleSystem.emitter;
          if (Eq.position.WG(this.position), qq.inheritDirection) {
            const qq = Oq.o.Na[0];
            this.direction.normalizeToRef(qq), Eq.setDirection(qq, 0, Math.PI / 2)
          }
        } else {
          qq.particleSystem.emitter.WG(this.position)
        }
        this.direction.scaleToRef(qq.inheritedVelocityAmount / 2, Oq.o.Na[0]), qq.particleSystem._inheritedVelocityOffset.WG(Oq.o.Na[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const qq of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(qq)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = rq._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(qq) {
        qq.position.WG(this.position), this._properties.initialDirection ? qq._properties.initialDirection ? qq._properties.initialDirection.WG(this._properties.initialDirection) : qq._properties.initialDirection = this._properties.initialDirection.clone() : qq._properties.initialDirection = null, qq.direction.WG(this.direction), this._properties.localPosition && (qq._properties.localPosition ? qq._properties.localPosition.WG(this._properties.localPosition) : qq._properties.localPosition = this._properties.localPosition.clone()), qq.color.WG(this.color), qq.colorStep.WG(this.colorStep), qq.initialColor.WG(this.initialColor), qq.colorDead.WG(this.colorDead), qq.lifeTime = this.lifeTime, qq.age = this.age, qq._properties.randomCellOffset = this._properties.randomCellOffset, qq.size = this.size, qq.scale.WG(this.scale), qq.angle = this.angle, qq.angularSpeed = this.angularSpeed, qq.particleSystem = this.particleSystem, qq.cellIndex = this.cellIndex, qq.id = this.id, qq._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (qq._properties.currentColorGradient = this._properties.currentColorGradient, qq._properties.currentColor1.WG(this._properties.currentColor1), qq._properties.currentColor2.WG(this._properties.currentColor2)), this._properties.currentSizeGradient && (qq._properties.currentSizeGradient = this._properties.currentSizeGradient, qq._properties.currentSize1 = this._properties.currentSize1, qq._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (qq._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, qq._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, qq._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (qq._properties.currentVelocityGradient = this._properties.currentVelocityGradient, qq._properties.currentVelocity1 = this._properties.currentVelocity1, qq._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (qq._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, qq._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, qq._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (qq._properties.currentDragGradient = this._properties.currentDragGradient, qq._properties.currentDrag1 = this._properties.currentDrag1, qq._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (qq._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, qq._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, qq._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (qq.remapData && this.remapData ? qq.remapData.WG(this.remapData) : qq.remapData = new Oq.r(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (qq._properties.randomNoiseCoordinates1 && qq._properties.randomNoiseCoordinates2 ? (qq._properties.randomNoiseCoordinates1.WG(this._properties.randomNoiseCoordinates1), qq._properties.randomNoiseCoordinates2.WG(this._properties.randomNoiseCoordinates2)) : (qq._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), qq._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), qq.metadata = this.metadata
      }
    }
    rq._Count = 0;
    var vq = gq(40844);
    class hq {
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
      constructor(qq, Eq, gq, Yq) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Eq, this.K3 = qq, this._scene = gq, this._host = Yq, this._activeTargets = [], Eq._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Vq: this._getCorrectLoopMode()
          }, this._animation.dataType === vq.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Oq.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const qq = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, qq)
        }
        if (this.K3 instanceof Array) {
          let qq = 0;
          for (const Eq of this.K3) this._preparePath(Eq, qq), this._getOriginalValues(qq), qq++;
          this._targetIsArray = !0
        } else this._preparePath(this.K3), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const lq = Eq.getEvents();
        if (lq && lq.length > 0)
          for (const Oq of lq) this._events.push(Oq._clone());
        this._enableBlending = qq && qq.animationPropertiesOverride ? qq.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = this._animation.targetPropertyPath;
        if (gq.length > 1) {
          let Yq = qq;
          for (let qq = 0; qq < gq.length - 1; qq++) {
            const Eq = gq[qq];
            if (Yq = Yq[Eq], void 0 === Yq) throw new Error(`Invalid property (${Eq}) in property path (${gq.join(".")})`)
          }
          this._targetPath = gq[gq.length - 1], this._activeTargets[Eq] = Yq
        } else this._targetPath = gq[0], this._activeTargets[Eq] = qq;
        if (void 0 === this._activeTargets[Eq][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${gq.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.K3 instanceof Array) {
            let qq = 0;
            for (const Eq of this.K3) void 0 !== this._originalValue[qq] && this._setValue(Eq, this._activeTargets[qq], this._originalValue[qq], -1, qq), qq++
          } else void 0 !== this._originalValue[0] && this._setValue(this.K3, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let qq = 0; qq < this._events.length; qq++) this._events[qq].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const qq = this._animation.runtimeAnimations.indexOf(this);
        qq > -1 && this._animation.runtimeAnimations.splice(qq, 1)
      }
      setValue(qq, Eq) {
        if (this._targetIsArray)
          for (let gq = 0; gq < this.K3.length; gq++) {
            const Yq = this.K3[gq];
            this._setValue(Yq, this._activeTargets[gq], qq, Eq, gq)
          } else this._setValue(this.K3, this._directTarget, qq, Eq, 0)
      }
      _getOriginalValues() {
        let qq, Eq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const gq = this._activeTargets[Eq];
        if (vq.d.InheritOriginalValueFromActiveAnimations) {
          const qq = this._scene._activeAnimatables;
          for (let Yq = 0; Yq < qq.length; Yq++) {
            const lq = qq[Yq]._runtimeAnimations;
            for (let qq = 0; qq < lq.length; qq++) {
              const Yq = lq[qq];
              if (Yq !== this && Yq._targetPath === this._targetPath)
                for (let qq = 0; qq < Yq._activeTargets.length; qq++)
                  if (Yq._activeTargets[qq] === gq && void 0 !== Yq._originalValue[qq]) return void(Yq._originalValue[qq] && Yq._originalValue[qq].clone ? this._originalValue[Eq] = Yq._originalValue[qq].clone() : this._originalValue[Eq] = Yq._originalValue[qq])
            }
          }
        }
        qq = gq.getLocalMatrix && "_matrix" === this._targetPath ? gq.getLocalMatrix() : gq[this._targetPath], qq && qq.clone ? this._originalValue[Eq] = qq.clone() : this._originalValue[Eq] = qq
      }
      _registerTargetForLateAnimationBinding(qq, Eq) {
        const gq = qq.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(gq), gq._lateAnimationHolders || (gq._lateAnimationHolders = {}), gq._lateAnimationHolders[qq.targetPath] || (gq._lateAnimationHolders[qq.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Eq
        }), qq.isAdditive ? (gq._lateAnimationHolders[qq.targetPath].additiveAnimations.push(qq), gq._lateAnimationHolders[qq.targetPath].totalAdditiveWeight += qq.weight) : (gq._lateAnimationHolders[qq.targetPath].animations.push(qq), gq._lateAnimationHolders[qq.targetPath].totalWeight += qq.weight)
      }
      _setValue(qq, Eq, gq, Yq, lq) {
        const mq = this._scene._animationWrites,
          xq = this._scene._animationWriteCount++;
        let Aq = mq[xq];
        if (Aq || (Aq = mq[xq] = {
            runtimeAnimation: this,
            target: qq,
            weight: Yq,
            additive: !1,
            blendingFactor: 1,
            kV: !1
          }), Aq.runtimeAnimation = this, Aq.target = qq, Aq.weight = Yq, Aq.additive = this.isAdditive, Aq.kV = !1, this._currentActiveTarget = Eq, this._weight = Yq, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const qq = Eq[this._targetPath];
            qq.clone ? this._originalBlendValue = qq.clone() : this._originalBlendValue = qq
          }
          this._originalBlendValue.m ? vq.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Oq.e.DecomposeLerpToRef(this._originalBlendValue, gq, this._blendingFactor, this._currentValue) : this._currentValue = Oq.e.DecomposeLerp(this._originalBlendValue, gq, this._blendingFactor) : this._currentValue ? Oq.e.LerpToRef(this._originalBlendValue, gq, this._blendingFactor, this._currentValue) : this._currentValue = Oq.e.Lerp(this._originalBlendValue, gq, this._blendingFactor) : this._currentValue = vq.d._UniversalLerp(this._originalBlendValue, gq, this._blendingFactor);
          const Yq = qq && qq.animationPropertiesOverride ? qq.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Aq.blendingFactor = this._blendingFactor, this._blendingFactor += Yq
        } else Aq.blendingFactor = 1, this._currentValue ? this._currentValue.WG ? this._currentValue.WG(gq) : this._currentValue = gq : this._currentValue = gq?.clone ? gq.clone() : gq; - 1 !== Yq ? this._registerTargetForLateAnimationBinding(this, this._originalValue[lq]) : this._animationState.Vq === vq.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[lq], Eq[this._targetPath]) : Eq[this._targetPath] = this._originalValue[lq] + this._currentValue : Eq[this._targetPath] = this._currentValue, qq.xgq && qq.xgq(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.K3 && this.K3.animationPropertiesOverride) {
          return "MorphTarget" === this.K3.getClassName?.() && null == this.K3._animationPropertiesOverride ? this._animation.Vq : this.K3.animationPropertiesOverride.Vq
        }
        return this._animation.Vq
      }
      goToFrame(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const gq = this._animation.getKeys();
        qq < gq[0].frame ? qq = gq[0].frame : qq > gq[gq.length - 1].frame && (qq = gq[gq.length - 1].frame);
        const Yq = this._events;
        if (Yq.length)
          for (let Oq = 0; Oq < Yq.length; Oq++) Yq[Oq].onlyOnce || (Yq[Oq].isDone = Yq[Oq].frame < qq);
        this._currentFrame = qq;
        const lq = this._animation._interpolate(qq, this._animationState);
        this.setValue(lq, Eq)
      }
      _prepareForSpeedRatioChange(qq) {
        const Eq = this._previousElapsedTime * (this._animation.framePerSecond * qq) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Eq
      }
      animate(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const mq = this._animation,
          xq = mq.targetPropertyPath;
        if (!xq || xq.length < 1) return this._stopped = !0, !1;
        let Aq, cq = !0;
        const uq = this._events;
        let Bq;
        if (this._coreRuntimeAnimation) Bq = gq - Eq, Aq = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Aq, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Oq;
          (Eq < this._minFrame || Eq > this._maxFrame) && (Eq = this._minFrame), (gq < this._minFrame || gq > this._maxFrame) && (gq = this._maxFrame), Bq = gq - Eq;
          let xq = qq * (mq.framePerSecond * lq) / 1e3 + this._absoluteFrameOffset,
            Wq = 0,
            Nq = !1;
          const aq = Yq && this._animationState.Vq === vq.d.ANIMATIONLOOPMODE_YOYO;
          if (aq) {
            const qq = (xq - Eq) / Bq,
              gq = Math.sin(qq * Math.PI);
            xq = Math.abs(gq) * Bq + Eq;
            const Yq = gq >= 0 ? 1 : -1;
            this._yoyoDirection !== Yq && (Nq = !0), this._yoyoDirection = Yq
          }
          if (this._previousElapsedTime = qq, this._previousAbsoluteFrame = xq, !Yq && gq >= Eq && (xq >= Bq && lq > 0 || xq <= 0 && lq < 0)) cq = !1, Wq = mq.evaluate(gq);
          else if (!Yq && Eq >= gq && (xq <= Bq && lq < 0 || xq >= 0 && lq > 0)) cq = !1, Wq = mq.evaluate(Eq);
          else if (this._animationState.Vq !== vq.d.ANIMATIONLOOPMODE_CYCLE) {
            const qq = gq.toString() + Eq.toString();
            if (!this._offsetsCache[qq]) {
              this._animationState.repeatCount = 0, this._animationState.Vq = vq.d.ANIMATIONLOOPMODE_CYCLE;
              const Yq = mq._interpolate(Eq, this._animationState),
                lq = mq._interpolate(gq, this._animationState);
              switch (this._animationState.Vq = this._getCorrectLoopMode(), mq.dataType) {
                case vq.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[qq] = lq - Yq;
                  break;
                case vq.d.ANIMATIONTYPE_QUATERNION:
                case vq.d.ANIMATIONTYPE_VECTOR3:
                case vq.d.ANIMATIONTYPE_VECTOR2:
                case vq.d.ANIMATIONTYPE_SIZE:
                case vq.d.ANIMATIONTYPE_COLOR3:
                case vq.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[qq] = lq.subtract(Yq)
              }
              this._highLimitsCache[qq] = lq
            }
            Wq = this._highLimitsCache[qq], Oq = this._offsetsCache[qq]
          }
          if (void 0 === Oq) switch (mq.dataType) {
            case vq.d.ANIMATIONTYPE_FLOAT:
              Oq = 0;
              break;
            case vq.d.ANIMATIONTYPE_QUATERNION:
              Oq = vq.h;
              break;
            case vq.d.ANIMATIONTYPE_VECTOR3:
              Oq = vq.q;
              break;
            case vq.d.ANIMATIONTYPE_VECTOR2:
              Oq = vq.m;
              break;
            case vq.d.ANIMATIONTYPE_SIZE:
              Oq = vq.j;
              break;
            case vq.d.ANIMATIONTYPE_COLOR3:
              Oq = vq.f;
              break;
            case vq.d.ANIMATIONTYPE_COLOR4:
              Oq = vq.g
          }
          const Vq = this._host ? this._host.syncRoot : null;
          let dq, jq = this._playbackFrames,
            Hq = !1;
          if (Vq) {
            const qq = Vq.toFrame - Vq.fromFrame,
              gq = Vq.masterFrame,
              Yq = (gq - Vq.fromFrame) / qq;
            Aq = Eq + Bq * Yq;
            const lq = Vq.getAnimations()[0];
            if (lq && 0 !== qq) {
              const qq = Bq * Yq,
                Eq = lq._playbackTo - lq._playbackFrom;
              if (0 !== Eq && lq._playbackFrom <= Vq.fromFrame && lq._playbackTo >= Vq.toFrame) {
                jq = Bq * Math.round((lq._playbackFrames - (lq._currentFrame - lq._playbackFrom)) / Eq) + qq
              } else Hq = (gq - this._playbackSyncMasterFrame) * (lq._playbackFrames - this._playbackSyncMasterPlayed) < 0, jq = qq;
              Hq = Hq || lq._playbackJumped, this._playbackSyncMasterPlayed = lq._playbackFrames, this._playbackSyncMasterFrame = gq
            }
          } else Aq = xq > 0 && Eq > gq || xq < 0 && Eq < gq ? cq && 0 !== Bq ? gq + xq % Bq : Eq : cq && 0 !== Bq ? Eq + xq % Bq : gq;
          if (!aq && (lq > 0 && this.currentFrame > Aq || lq < 0 && this.currentFrame < Aq) || aq && Nq) {
            this._onLoop();
            for (let qq = 0; qq < uq.length; qq++) uq[qq].onlyOnce || (uq[qq].isDone = !1);
            this._animationState.key = lq > 0 ? 0 : mq.getKeys().length - 1
          }
          if (this._currentFrame = Aq, this._animationState.repeatCount = 0 === Bq ? 0 : xq / Bq | 0, this._animationState.highLimitValue = Wq, this._animationState.offsetValue = Oq, this._playbackFrom = Eq, this._playbackTo = gq, this._playbackJumped = Hq, this._playbackSyncRoot = Vq, Vq) dq = jq;
          else if (cq) dq = aq ? Aq === Eq && xq === gq ? Bq : Aq - Eq : xq;
          else {
            const qq = 0 !== Bq ? Math.floor(this._playbackFrames / Bq) : 0;
            dq = (Aq === gq ? qq + 1 : qq) * Bq
          }
          this._playbackFrames = dq, this._playbackProgress = this._animationState.Vq === vq.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Bq : dq
        }
        const Wq = mq._interpolate(Aq, this._animationState);
        if (this.setValue(Wq, Oq), uq.length)
          for (let Nq = 0; Nq < uq.length; Nq++)
            if (Bq >= 0 && Aq >= uq[Nq].frame && uq[Nq].frame >= Eq || Bq < 0 && Aq <= uq[Nq].frame && uq[Nq].frame <= Eq) {
              const qq = uq[Nq];
              qq.isDone || (qq.onlyOnce && (uq.splice(Nq, 1), Nq--), qq.isDone = !0, qq.action(Aq))
            } return cq || (this._stopped = !0), cq
      }
    }
    var nq = gq(39662);
    class bq {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(qq) {
        this._weight = -1 !== qq ? Math.min(Math.max(qq, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(qq) {
        for (let Eq = 0; Eq < this._runtimeAnimations.length; Eq++) {
          this._runtimeAnimations[Eq]._prepareForSpeedRatioChange(qq)
        }
        this._speedRatio = qq, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          xq = arguments.length > 6 ? arguments[6] : void 0,
          Aq = arguments.length > 7 ? arguments[7] : void 0,
          cq = arguments.length > 8 ? arguments[8] : void 0,
          uq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Bq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Eq, this.fromFrame = gq, this.toFrame = Yq, this.loopAnimation = Oq, this.onAnimationEnd = xq, this.onAnimationLoop = cq, this.isAdditive = uq, this.playOrder = Bq, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.Av = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new lq.d, this.onAnimationLoopObservable = new lq.d, this._scene = qq, Aq && this.appendAnimations(Eq, Aq), this._speedRatio = mq, qq._activeAnimatables.push(this)
      }
      syncWith(qq) {
        if (this._syncRoot = qq, qq) {
          const qq = this._scene._activeAnimatables.indexOf(this);
          qq > -1 && (this._scene._activeAnimatables.splice(qq, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(qq, Eq) {
        for (let gq = 0; gq < Eq.length; gq++) {
          const Yq = Eq[gq],
            lq = new hq(qq, Yq, this._scene, this);
          lq._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(lq)
        }
      }
      getAnimationByTargetProperty(qq) {
        const Eq = this._runtimeAnimations;
        for (let gq = 0; gq < Eq.length; gq++)
          if (Eq[gq].animation.targetProperty === qq) return Eq[gq].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(qq) {
        const Eq = this._runtimeAnimations;
        for (let gq = 0; gq < Eq.length; gq++)
          if (Eq[gq].animation.targetProperty === qq) return Eq[gq];
        return null
      }
      reset() {
        const qq = this._runtimeAnimations;
        for (let Eq = 0; Eq < qq.length; Eq++) qq[Eq].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(qq) {
        const Eq = this._runtimeAnimations;
        for (let gq = 0; gq < Eq.length; gq++) Eq[gq].animation.enableBlending = !0, Eq[gq].animation.blendingSpeed = qq
      }
      disableBlending() {
        const qq = this._runtimeAnimations;
        for (let Eq = 0; Eq < qq.length; Eq++) qq[Eq].animation.enableBlending = !1
      }
      goToFrame(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = this._runtimeAnimations;
        if (gq[0]) {
          const Eq = gq[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? gq[0].currentFrame;
          const Yq = 0 === this.speedRatio ? 0 : (qq - this._frameToSyncFromJump) / Eq * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Yq
        }
        for (let Yq = 0; Yq < gq.length; Yq++) gq[Yq].goToFrame(qq, Eq ? this._weight : -1);
        this._goToFrame = qq
      }
      get paused() {
        return this.Av
      }
      pause() {
        this.Av || (this.Av = !0)
      }
      restart() {
        this.Av = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (qq || Eq) {
          const lq = this._scene._activeAnimatables.indexOf(this);
          if (lq > -1) {
            const Oq = this._runtimeAnimations;
            for (let gq = Oq.length - 1; gq >= 0; gq--) {
              const Yq = Oq[gq];
              qq && Yq.animation.name != qq || (Eq && !Eq(Yq.target) || (Yq.dispose(), Oq.splice(gq, 1)))
            }
            0 == Oq.length && (gq || this._scene._activeAnimatables.splice(lq, 1), Yq || this._raiseOnAnimationEnd())
          }
        } else {
          const qq = this._scene._activeAnimatables.indexOf(this);
          if (qq > -1) {
            gq || this._scene._activeAnimatables.splice(qq, 1);
            const Eq = this._runtimeAnimations;
            for (let qq = 0; qq < Eq.length; qq++) Eq[qq].dispose();
            this._runtimeAnimations.length = 0, Yq || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((qq => {
          this.onAnimationEndObservable.add((() => {
            qq(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(qq) {
        if (this.Av) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = qq), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = qq, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += qq - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !bq.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Eq = !1;
        const gq = this._runtimeAnimations;
        let Yq;
        for (Yq = 0; Yq < gq.length; Yq++) {
          const lq = gq[Yq].animate(qq - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Eq = Eq || lq
        }
        if (this.animationStarted = Eq, !Eq) {
          if (this.disposeOnEnd)
            for (Yq = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Yq, 1), Yq = 0; Yq < gq.length; Yq++) gq[Yq].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Eq
      }
    }

    function iq(qq) {
      if (0 === qq.totalWeight && 0 === qq.totalAdditiveWeight) return qq.originalValue;
      let Eq = 1;
      const gq = Oq.o.Na[0],
        Yq = Oq.o.Na[1],
        lq = Oq.o.Quaternion[0];
      let mq = 0;
      const xq = qq.animations[0],
        Aq = qq.originalValue;
      let cq, uq = !1;
      if (qq.totalWeight < 1) cq = 1 - qq.totalWeight, Aq.decompose(Yq, lq, gq);
      else {
        if (mq = 1, Eq = qq.totalWeight, cq = xq.weight / Eq, 1 == cq) {
          if (!qq.totalAdditiveWeight) return xq.currentValue;
          uq = !0
        }
        xq.currentValue.decompose(Yq, lq, gq)
      }
      if (!uq) {
        Yq.scaleInPlace(cq), gq.scaleInPlace(cq), lq.scaleInPlace(cq);
        for (let xq = mq; xq < qq.animations.length; xq++) {
          const mq = qq.animations[xq];
          if (0 === mq.weight) continue;
          cq = mq.weight / Eq;
          const Aq = Oq.o.Na[2],
            uq = Oq.o.Na[3],
            Bq = Oq.o.Quaternion[1];
          mq.currentValue.decompose(uq, Bq, Aq), uq.scaleAndAddToRef(cq, Yq), Bq.scaleAndAddToRef(Oq.h.Dot(lq, Bq) > 0 ? cq : -cq, lq), Aq.scaleAndAddToRef(cq, gq)
        }
        lq.normalize()
      }
      for (let Wq = 0; Wq < qq.additiveAnimations.length; Wq++) {
        const Eq = qq.additiveAnimations[Wq];
        if (0 === Eq.weight) continue;
        const mq = Oq.o.Na[2],
          xq = Oq.o.Na[3],
          Aq = Oq.o.Quaternion[1];
        Eq.currentValue.decompose(xq, Aq, mq), xq.multiplyToRef(Yq, xq), Oq.q.LerpToRef(Yq, xq, Eq.weight, Yq), lq.multiplyToRef(Aq, Aq), Oq.h.SlerpToRef(lq, Aq, Eq.weight, lq), mq.scaleAndAddToRef(Eq.weight, gq)
      }
      const Bq = xq ? xq._animationState.workValue : Oq.o.Matrix[0].clone();
      return Oq.e.ComposeToRef(Yq, lq, gq, Bq), Bq
    }

    function Zq(qq, Eq) {
      if (0 === qq.totalWeight && 0 === qq.totalAdditiveWeight) return Eq;
      const gq = qq.animations[0],
        Yq = qq.originalValue;
      let lq = Eq;
      if (0 === qq.totalWeight && qq.totalAdditiveWeight > 0) lq.WG(Yq);
      else if (1 === qq.animations.length) {
        if (Oq.h.SlerpToRef(Yq, gq.currentValue, Math.min(1, qq.totalWeight), lq), 0 === qq.totalAdditiveWeight) return lq
      } else if (qq.animations.length > 1) {
        let gq, mq, xq = 1;
        if (qq.totalWeight < 1) {
          const Eq = 1 - qq.totalWeight;
          gq = [], mq = [], gq.push(Yq), mq.push(Eq)
        } else {
          if (2 === qq.animations.length && (Oq.h.SlerpToRef(qq.animations[0].currentValue, qq.animations[1].currentValue, qq.animations[1].weight / qq.totalWeight, Eq), 0 === qq.totalAdditiveWeight)) return Eq;
          gq = [], mq = [], xq = qq.totalWeight
        }
        for (let Eq = 0; Eq < qq.animations.length; Eq++) {
          const Yq = qq.animations[Eq];
          gq.push(Yq.currentValue), mq.push(Yq.weight / xq)
        }
        let Aq = 0;
        for (let qq = 0; qq < gq.length;) qq ? (Aq += mq[qq], Oq.h.SlerpToRef(lq, gq[qq], mq[qq] / Aq, lq), qq++) : (Oq.h.SlerpToRef(gq[qq], gq[qq + 1], mq[qq + 1] / (mq[qq] + mq[qq + 1]), Eq), lq = Eq, Aq = mq[qq] + mq[qq + 1], qq += 2)
      }
      for (let mq = 0; mq < qq.additiveAnimations.length; mq++) {
        const Eq = qq.additiveAnimations[mq];
        0 !== Eq.weight && (lq.multiplyToRef(Eq.currentValue, Oq.o.Quaternion[0]), Oq.h.SlerpToRef(lq, Oq.o.Quaternion[0], Eq.weight, lq))
      }
      return lq
    }

    function fq(qq, Eq) {
      Eq && (Eq.prototype.copyAnimationRange = function(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new vq.d(this.name, "_matrix", qq.animations[0].framePerSecond, vq.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Oq = qq.animations[0].getRange(Eq);
        if (!Oq) return !1;
        const mq = Oq.from,
          xq = Oq.to,
          Aq = qq.animations[0].getKeys(),
          cq = qq.length,
          uq = qq.getParent(),
          Bq = this.getParent(),
          Wq = Yq && uq && cq && this.length && cq !== this.length,
          Nq = Wq && Bq && uq ? Bq.length / uq.length : 1,
          aq = Yq && !Bq && lq && (1 !== lq.x || 1 !== lq.y || 1 !== lq.z),
          Vq = this.animations[0].getKeys();
        let dq, jq, Hq;
        for (let oq = 0, Pq = Aq.length; oq < Pq; oq++) dq = Aq[oq], dq.frame >= mq && dq.frame <= xq && (Yq ? (Hq = dq.value.clone(), Wq ? (jq = Hq.getTranslation(), Hq.setTranslation(jq.scaleInPlace(Nq))) : aq && lq ? (jq = Hq.getTranslation(), Hq.setTranslation(jq.multiplyInPlace(lq))) : Hq = dq.value) : Hq = dq.value, Vq.push({
          frame: dq.frame + gq,
          value: Hq
        }));
        return this.animations[0].createRange(Eq, mq + gq, xq + gq), !0
      }), qq && (qq.prototype._animate = function(qq) {
        const Eq = this._animationWrites,
          gq = this._animationWriteCount;
        let Yq = 0;
        for (let Oq = this._animationStepWriteCount; Oq < gq; Oq++) {
          const qq = Eq[Oq];
          qq.kV && -1 === qq.weight || (qq.kV = !0, Eq[Oq] = Eq[Yq], Eq[Yq] = qq, Yq++)
        }
        for (let Oq = Yq; Oq < gq; Oq++) {
          const qq = Eq[Oq];
          qq.runtimeAnimation = null, qq.target = null
        }
        if (this._animationWriteCount = Yq, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const lq = nq.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = lq
        }
        this.deltaTime = void 0 !== qq ? qq : this.useConstantAnimationDeltaTime ? 16 : (lq - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = lq;
        const mq = this._activeAnimatables;
        if (0 === mq.length) return;
        this._animationTime += this.deltaTime;
        const xq = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Oq = 0; Oq < mq.length; Oq++) {
          const qq = mq[Oq];
          !qq._animate(xq) && qq.disposeOnEnd && Oq--
        }! function(qq) {
          if (qq._registeredForLateAnimationBindings.length) {
            for (let Eq = 0; Eq < qq._registeredForLateAnimationBindings.length; Eq++) {
              const gq = qq._registeredForLateAnimationBindings.data[Eq];
              for (const qq in gq._lateAnimationHolders) {
                const Eq = gq._lateAnimationHolders[qq],
                  Yq = Eq.animations[0],
                  lq = Eq.originalValue;
                if (void 0 === lq || null === lq) continue;
                const mq = vq.d.AllowMatrixDecomposeForInterpolation && lq.m;
                let xq = gq[qq];
                if (mq) xq = iq(Eq);
                else if (void 0 !== lq.w) xq = Zq(Eq, xq || Oq.h.Identity());
                else {
                  let qq = 0,
                    gq = 1;
                  const Oq = Yq && Yq._animationState.Vq === vq.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Eq.totalWeight < 1) xq = Oq ? lq.clone ? lq.clone() : lq : Yq && lq.scale ? lq.scale(1 - Eq.totalWeight) : Yq ? lq * (1 - Eq.totalWeight) : lq.clone ? lq.clone() : lq;
                  else if (Yq) {
                    gq = Eq.totalWeight;
                    const mq = Yq.weight / gq;
                    xq = 1 !== mq ? Yq.currentValue.scale ? Yq.currentValue.scale(mq) : Yq.currentValue * mq : (Eq.animations.length > 1 || Eq.additiveAnimations.length > 0) && Yq.currentValue.clone ? Yq.currentValue.clone() : Yq.currentValue, Oq && (xq.addToRef ? xq.addToRef(lq, xq) : xq += lq), qq = 1
                  }
                  for (let Yq = qq; Yq < Eq.animations.length; Yq++) {
                    const qq = Eq.animations[Yq],
                      lq = qq.weight / gq;
                    lq && (qq.currentValue.scaleAndAddToRef ? qq.currentValue.scaleAndAddToRef(lq, xq) : xq += qq.currentValue * lq)
                  }
                  for (let Yq = 0; Yq < Eq.additiveAnimations.length; Yq++) {
                    const qq = Eq.additiveAnimations[Yq],
                      gq = qq.weight;
                    gq && (qq.currentValue.scaleAndAddToRef ? qq.currentValue.scaleAndAddToRef(gq, xq) : xq += qq.currentValue * gq)
                  }
                }
                gq[qq] = xq
              }
              gq._lateAnimationHolders = {}
            }
            qq._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, qq.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((qq, Eq) => qq.playOrder - Eq.playOrder))
      }, qq.prototype.beginWeightedAnimation = function(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          mq = arguments.length > 6 ? arguments[6] : void 0,
          xq = arguments.length > 7 ? arguments[7] : void 0,
          Aq = arguments.length > 8 ? arguments[8] : void 0,
          cq = arguments.length > 9 ? arguments[9] : void 0,
          uq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Bq = this.beginAnimation(qq, Eq, gq, lq, Oq, mq, xq, !1, Aq, cq, uq);
        return Bq.weight = Yq, Bq
      }, qq.prototype.beginAnimation = function(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Oq = arguments.length > 5 ? arguments[5] : void 0,
          mq = arguments.length > 6 ? arguments[6] : void 0,
          xq = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Aq = arguments.length > 8 ? arguments[8] : void 0,
          cq = arguments.length > 9 ? arguments[9] : void 0,
          uq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (lq < 0) {
          const qq = Eq;
          Eq = gq, gq = qq, lq = -lq
        }
        Eq > gq && (lq = -lq), xq && this.stopAnimation(qq, void 0, Aq), mq || (mq = new bq(this, qq, Eq, gq, Yq, lq, Oq, void 0, cq, uq));
        const Bq = !Aq || Aq(qq);
        if (qq.animations && Bq && mq.appendAnimations(qq, qq.animations), qq.getAnimatables) {
          const uq = qq.getAnimatables();
          for (let qq = 0; qq < uq.length; qq++) this.beginAnimation(uq[qq], Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq)
        }
        return mq.reset(), mq
      }, qq.prototype.beginHierarchyAnimation = function(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          mq = arguments.length > 6 ? arguments[6] : void 0,
          xq = arguments.length > 7 ? arguments[7] : void 0,
          Aq = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          cq = arguments.length > 9 ? arguments[9] : void 0,
          uq = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Bq = qq.getDescendants(Eq),
          Wq = [];
        Wq.push(this.beginAnimation(qq, gq, Yq, lq, Oq, mq, xq, Aq, cq, void 0, uq));
        for (const Nq of Bq) Wq.push(this.beginAnimation(Nq, gq, Yq, lq, Oq, mq, xq, Aq, cq, void 0, uq));
        return Wq
      }, qq.prototype.beginDirectAnimation = function(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Oq < 0) {
          const qq = gq;
          gq = Yq, Yq = qq, Oq = -Oq
        }
        gq > Yq && (Oq = -Oq);
        return new bq(this, qq, gq, Yq, lq, Oq, arguments.length > 6 ? arguments[6] : void 0, Eq, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, qq.prototype.beginDirectHierarchyAnimation = function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        let cq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const uq = qq.getDescendants(Eq),
          Bq = [];
        Bq.push(this.beginDirectAnimation(qq, gq, Yq, lq, Oq, mq, xq, Aq, cq));
        for (const Wq of uq) Bq.push(this.beginDirectAnimation(Wq, gq, Yq, lq, Oq, mq, xq, Aq, cq));
        return Bq
      }, qq.prototype.getAnimatableByTarget = function(qq) {
        for (let Eq = 0; Eq < this._activeAnimatables.length; Eq++)
          if (this._activeAnimatables[Eq].target === qq) return this._activeAnimatables[Eq];
        return null
      }, qq.prototype.getAllAnimatablesByTarget = function(qq) {
        const Eq = [];
        for (let gq = 0; gq < this._activeAnimatables.length; gq++) this._activeAnimatables[gq].target === qq && Eq.push(this._activeAnimatables[gq]);
        return Eq
      }, qq.prototype.stopAnimation = function(qq, Eq, gq) {
        const Yq = this.getAllAnimatablesByTarget(qq);
        for (const lq of Yq) lq.stop(Eq, gq)
      }, qq.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let qq = 0; qq < this._activeAnimatables.length; qq++) this._activeAnimatables[qq].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const qq of this.animationGroups) qq.stop()
      })
    }
    bq.ProcessPausedAnimatables = !1;
    var Mq, Tq = gq(37149),
      zq = gq(39960),
      Sq = gq(39636);
    class pq extends zq.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(qq) {
        (qq.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.WG(qq), this._markAsDirtyAndDecompose())
      }
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(qq, Eq.ZJ(), !1), this.name = qq, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Eq, this._localMatrix = Yq?.clone() ?? Oq.e.Identity(), this._restMatrix = lq ?? this._localMatrix.clone(), this._bindMatrix = mq ?? this._localMatrix.clone(), this._index = xq, this._absoluteMatrix = new Oq.e, this._absoluteBindMatrix = new Oq.e, this._absoluteInverseBindMatrix = new Oq.e, this._finalMatrix = new Oq.e, Eq.bones.push(this), this.setParent(gq, !1), this._updateAbsoluteBindMatrices()
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
      set parent(qq) {
        this.setParent(qq)
      }
      setParent(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== qq) {
          if (this.parent) {
            const qq = this.parent.children.indexOf(this); - 1 !== qq && this.parent.children.splice(qq, 1)
          }
          this._parentNode = qq, this.parent && this.parent.children.push(this), Eq && this._updateAbsoluteBindMatrices(), this.xgq()
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
      setRestMatrix(qq) {
        this._restMatrix.WG(qq)
      }
      setRestPose(qq) {
        this.setRestMatrix(qq)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(qq) {
        this.Eqq(qq)
      }
      setBindPose(qq) {
        this.setBindMatrix(qq)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const qq = Oq.o.Na[0],
            Eq = Oq.o.Quaternion[0],
            gq = Oq.o.Na[1];
          this.getRestMatrix().decompose(qq, Eq, gq), this._linkedTransformNode.position.WG(gq), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Oq.h.Identity(), this._linkedTransformNode.rotationQuaternion.WG(Eq), this._linkedTransformNode.rc.WG(qq)
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
      linkTransformNode(qq) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = qq, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.PEq
      }
      set position(qq) {
        this._decompose(), this.PEq.WG(qq), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(qq) {
        this.setRotation(qq)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(qq) {
        this.setRotationQuaternion(qq)
      }
      get rc() {
        return this.getScale()
      }
      set rc(qq) {
        this.setScale(qq)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Oq.q.Zero(), this._localRotation = Oq.h.Zero(), this.PEq = Oq.q.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.PEq))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Oq.e.ComposeToRef(this._localScaling, this._localRotation, this.PEq, this._localMatrix)) : this._needToCompose = !1)
      }
      Eqq(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.WG(qq), Eq && this._updateAbsoluteBindMatrices(), gq ? this._matrix = qq : this.xgq()
      }
      _updateAbsoluteBindMatrices(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (qq || (qq = this._bindMatrix), this.parent ? qq.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.WG(qq), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Eq)
          for (let gq = 0; gq < this.children.length; gq++) this.children[gq]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      xgq() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.xgq(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.xgq(), this._needToDecompose = !0
      }
      _updatePosition(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const lq = this.getLocalMatrix();
        if (0 == Eq) Yq ? (lq.addAtIndex(12, qq.x), lq.addAtIndex(13, qq.y), lq.addAtIndex(14, qq.z)) : lq.setTranslationFromFloats(qq.x, qq.y, qq.z);
        else {
          const Eq = pq._TmpMats[0],
            mq = pq._TmpVecs[0];
          this.parent ? (Eq.WG(this.parent.getAbsoluteMatrix()), gq && Eq.multiplyToRef(gq.getWorldMatrix(), Eq)) : Oq.e.IdentityToRef(Eq), Yq && Eq.setTranslationFromFloats(0, 0, 0), Eq.invert(), Oq.q.TransformCoordinatesToRef(qq, Eq, mq), Yq ? (lq.addAtIndex(12, mq.x), lq.addAtIndex(13, mq.y), lq.addAtIndex(14, mq.z)) : lq.setTranslationFromFloats(mq.x, mq.y, mq.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(qq, Eq, gq, !0)
      }
      setPosition(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(qq, Eq, gq, !1)
      }
      setAbsolutePosition(qq, Eq) {
        this.setPosition(qq, 1, Eq)
      }
      scale(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const lq = this.getLocalMatrix(),
          mq = pq._TmpMats[0];
        Oq.e.ScalingToRef(qq, Eq, gq, mq), mq.multiplyToRef(lq, lq), mq.invert();
        for (const Oq of this.children) {
          const Yq = Oq.getLocalMatrix();
          Yq.multiplyToRef(mq, Yq), Yq.multiplyAtIndex(12, qq), Yq.multiplyAtIndex(13, Eq), Yq.multiplyAtIndex(14, gq), Oq._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Yq)
          for (const Oq of this.children) Oq.scale(qq, Eq, gq, Yq)
      }
      setScale(qq) {
        this._decompose(), this._localScaling.WG(qq), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(qq) {
        this._decompose(), qq.WG(this._localScaling)
      }
      setYawPitchRoll(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          lq = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Yq) {
          const mq = pq._TmpQuat;
          return Oq.h.RotationYawPitchRollToRef(qq, Eq, gq, mq), void this.setRotationQuaternion(mq, Yq, lq)
        }
        const mq = pq._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(mq, lq)) return;
        const xq = pq._TmpMats[1];
        Oq.e.RotationYawPitchRollToRef(qq, Eq, gq, xq), mq.multiplyToRef(xq, xq), this._rotateWithMatrix(xq, Yq, lq)
      }
      rotate(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        const lq = pq._TmpMats[0];
        lq.setTranslationFromFloats(0, 0, 0), Oq.e.RotationAxisToRef(qq, Eq, lq), this._rotateWithMatrix(lq, gq, Yq)
      }
      setAxisAngle(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === gq) {
          const lq = pq._TmpQuat;
          return Oq.h.RotationAxisToRef(qq, Eq, lq), void this.setRotationQuaternion(lq, gq, Yq)
        }
        const lq = pq._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(lq, Yq)) return;
        const mq = pq._TmpMats[1];
        Oq.e.RotationAxisToRef(qq, Eq, mq), lq.multiplyToRef(mq, mq), this._rotateWithMatrix(mq, gq, Yq)
      }
      setRotation(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(qq.y, qq.x, qq.z, Eq, gq)
      }
      setRotationQuaternion(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Eq) return this._decompose(), this._localRotation.WG(qq), void this._markAsDirtyAndCompose();
        const Yq = pq._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Yq, gq)) return;
        const lq = pq._TmpMats[1];
        Oq.e.FromQuaternionToRef(qq, lq), Yq.multiplyToRef(lq, lq), this._rotateWithMatrix(lq, Eq, gq)
      }
      setRotationMatrix(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Eq) {
          const Yq = pq._TmpQuat;
          return Oq.h.FromRotationMatrixToRef(qq, Yq), void this.setRotationQuaternion(Yq, Eq, gq)
        }
        const Yq = pq._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Yq, gq)) return;
        const lq = pq._TmpMats[1];
        lq.WG(qq), Yq.multiplyToRef(qq, lq), this._rotateWithMatrix(lq, Eq, gq)
      }
      _rotateWithMatrix(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const Yq = this.getLocalMatrix(),
          lq = Yq.m[12],
          Oq = Yq.m[13],
          mq = Yq.m[14],
          xq = this.getParent(),
          Aq = pq._TmpMats[3],
          cq = pq._TmpMats[4];
        xq && 1 == Eq ? (gq ? (Aq.WG(gq.getWorldMatrix()), xq.getAbsoluteMatrix().multiplyToRef(Aq, Aq)) : Aq.WG(xq.getAbsoluteMatrix()), cq.WG(Aq), cq.invert(), Yq.multiplyToRef(Aq, Yq), Yq.multiplyToRef(qq, Yq), Yq.multiplyToRef(cq, Yq)) : 1 == Eq && gq ? (Aq.WG(gq.getWorldMatrix()), cq.WG(Aq), cq.invert(), Yq.multiplyToRef(Aq, Yq), Yq.multiplyToRef(qq, Yq), Yq.multiplyToRef(cq, Yq)) : Yq.multiplyToRef(qq, Yq), Yq.setTranslationFromFloats(lq, Oq, mq), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(qq, Eq) {
        const gq = pq._TmpMats[2];
        return qq.WG(this.getAbsoluteMatrix()), Eq ? (qq.multiplyToRef(Eq.getWorldMatrix(), qq), Oq.e.ScalingToRef(Eq.rc.x, Eq.rc.y, Eq.rc.z, gq)) : Oq.e.IdentityToRef(gq), qq.invert(), !isNaN(qq.m[0]) && (gq.multiplyAtIndex(0, this._scalingDeterminant), qq.multiplyToRef(gq, qq), !0)
      }
      Py() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gq = Oq.q.Zero();
        return this.getPositionToRef(qq, Eq, gq), gq
      }
      getPositionToRef() {
        let qq = arguments.length > 1 ? arguments[1] : void 0,
          Eq = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const qq = this.getLocalMatrix();
          Eq.x = qq.m[12], Eq.y = qq.m[13], Eq.z = qq.m[14]
        } else {
          const gq = pq._TmpMats[0].WG(this.getAbsoluteMatrix());
          qq && gq.multiplyToRef(qq.getWorldMatrix(), gq), Eq.x = gq.m[12], Eq.y = gq.m[13], Eq.z = gq.m[14]
        }
      }
      getAbsolutePosition() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Eq = Oq.q.Zero();
        return this.getPositionToRef(1, qq, Eq), Eq
      }
      getAbsolutePositionToRef(qq, Eq) {
        this.getPositionToRef(1, qq, Eq)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.WG(this._localMatrix);
          const qq = this._skeleton.getPoseMatrix();
          qq && this._absoluteMatrix.multiplyToRef(qq, this._absoluteMatrix)
        }
        const qq = this.children,
          Eq = qq.length;
        for (let gq = 0; gq < Eq; gq++) qq[gq].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      RD(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gq = Oq.q.Zero();
        return this.getDirectionToRef(qq, Eq, gq), gq
      }
      getDirectionToRef(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const Yq = pq._TmpMats[0].WG(this.getAbsoluteMatrix());
        Eq && Yq.multiplyToRef(Eq.getWorldMatrix(), Yq), Oq.q.TransformNormalToRef(qq, Yq, gq), gq.normalize()
      }
      getRotation() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gq = Oq.q.Zero();
        return this.getRotationToRef(qq, Eq, gq), gq
      }
      getRotationToRef() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const Yq = pq._TmpQuat;
        this.getRotationQuaternionToRef(qq, Eq, Yq), Yq.toEulerAnglesToRef(gq)
      }
      getRotationQuaternion() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gq = Oq.h.Identity();
        return this.getRotationQuaternionToRef(qq, Eq, gq), gq
      }
      getRotationQuaternionToRef() {
        let qq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Eq = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Eq.WG(this._localRotation);
        else {
          const gq = pq._TmpMats[0],
            Yq = this.getAbsoluteMatrix();
          qq ? Yq.multiplyToRef(qq.getWorldMatrix(), gq) : gq.WG(Yq), gq.multiplyAtIndex(0, this._scalingDeterminant), gq.multiplyAtIndex(1, this._scalingDeterminant), gq.multiplyAtIndex(2, this._scalingDeterminant), gq.decompose(void 0, Eq, void 0)
        }
      }
      getRotationMatrix() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 ? arguments[1] : void 0;
        const gq = Oq.e.Identity();
        return this.getRotationMatrixToRef(qq, Eq, gq), gq
      }
      getRotationMatrixToRef() {
        let qq = arguments.length > 1 ? arguments[1] : void 0,
          Eq = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Eq);
        else {
          const gq = pq._TmpMats[0],
            Yq = this.getAbsoluteMatrix();
          qq ? Yq.multiplyToRef(qq.getWorldMatrix(), gq) : gq.WG(Yq), gq.multiplyAtIndex(0, this._scalingDeterminant), gq.multiplyAtIndex(1, this._scalingDeterminant), gq.multiplyAtIndex(2, this._scalingDeterminant), gq.getRotationMatrixToRef(Eq)
        }
      }
      getAbsolutePositionFromLocal(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gq = Oq.q.Zero();
        return this.getAbsolutePositionFromLocalToRef(qq, Eq, gq), gq
      }
      getAbsolutePositionFromLocalToRef(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const Yq = pq._TmpMats[0].WG(this.getAbsoluteMatrix());
        Eq && Yq.multiplyToRef(Eq.getWorldMatrix(), Yq), Oq.q.TransformCoordinatesToRef(qq, Yq, gq)
      }
      getLocalPositionFromAbsolute(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gq = Oq.q.Zero();
        return this.getLocalPositionFromAbsoluteToRef(qq, Eq, gq), gq
      }
      getLocalPositionFromAbsoluteToRef(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const Yq = pq._TmpMats[0].WG(this.getAbsoluteMatrix());
        Eq && Yq.multiplyToRef(Eq.getWorldMatrix(), Yq), Yq.invert(), Oq.q.TransformCoordinatesToRef(qq, Yq, gq)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const qq = this._skeleton.bones.indexOf(this);
        if (-1 !== qq && this._skeleton.bones.splice(qq, 1), this._parentNode && this._parentNode.children) {
          const qq = this._parentNode.children,
            Eq = qq.indexOf(this); - 1 !== Eq && qq.splice(Eq, 1)
        }
        super.dispose()
      }
    }
    pq._TmpVecs = (0, Tq.e)(2, Oq.q.Zero), pq._TmpQuat = Oq.h.Identity(), pq._TmpMats = (0, Tq.e)(5, Oq.e.Identity), (Mq = pq.prototype).copyAnimationRange ?? (Mq.copyAnimationRange = (0, Sq.i)("Bone", "copyAnimationRange"));
    var Gq = gq(39838);
    let Lq = !1;
    var Jq = gq(39721),
      kq = gq(40074),
      Rq = gq(40083),
      Uq = gq(40079),
      Fq = gq(39865);

    function sq(qq, Eq) {
      const gq = (0, Nq.RandomRange)(0, 1);
      uq.g.LerpToRef(Eq.color1, Eq.color2, gq, qq.color)
    }

    function Xq(qq, Eq) {
      Eq.colorDead.subtractToRef(qq.color, Eq._colorDiff), Eq._colorDiff.scaleToRef(1 / qq.lifeTime, qq.colorStep)
    }

    function wq(qq, Eq) {
      qq._properties.currentColorGradient = Eq._colorGradients[0], qq._properties.currentColorGradient.getColorToRef(qq.color), qq._properties.currentColor1.WG(qq.color), Eq._colorGradients.length > 1 ? Eq._colorGradients[1].getColorToRef(qq._properties.currentColor2) : qq._properties.currentColor2.WG(qq.color)
    }

    function Kq(qq, Eq) {
      const gq = Eq._colorGradients;
      Yq.k.GetCurrentGradient(Eq._ratio, gq, ((Eq, gq, Yq) => {
        Eq !== qq._properties.currentColorGradient && (qq._properties.currentColor1.WG(qq._properties.currentColor2), gq.getColorToRef(qq._properties.currentColor2), qq._properties.currentColorGradient = Eq), uq.g.LerpToRef(qq._properties.currentColor1, qq._properties.currentColor2, Yq, qq.color), qq.color.a < 0 && (qq.color.a = 0)
      }))
    }

    function Cq(qq, Eq) {
      qq.colorStep.scaleToRef(Eq._scaledUpdateSpeed, Eq._scaledColorStep), qq.color.addInPlace(Eq._scaledColorStep), qq.color.a < 0 && (qq.color.a = 0)
    }

    function Iq(qq, Eq) {
      Yq.k.GetCurrentGradient(Eq._ratio, Eq._angularSpeedGradients, ((Eq, gq, Yq) => {
        Eq !== qq._properties.currentAngularSpeedGradient && (qq._properties.currentAngularSpeed1 = qq._properties.currentAngularSpeed2, qq._properties.currentAngularSpeed2 = gq.getFactor(), qq._properties.currentAngularSpeedGradient = Eq), qq.angularSpeed = (0, Nq.Lerp)(qq._properties.currentAngularSpeed1, qq._properties.currentAngularSpeed2, Yq)
      }))
    }

    function eq(qq, Eq) {
      qq.angle += qq.angularSpeed * Eq._scaledUpdateSpeed
    }

    function Dq(qq, Eq) {
      Eq.particleEmitterType.startDirectionFunction(Eq._emitterWorldMatrix, qq.direction, qq, Eq.isLocal, Eq._emitterInverseWorldMatrix)
    }

    function qE(qq, Eq) {
      Eq.startDirectionFunction(Eq._emitterWorldMatrix, qq.direction, qq, Eq.isLocal)
    }

    function EE(qq, Eq) {
      qq._properties.currentVelocityGradient = Eq._velocityGradients[0], qq._properties.currentVelocity1 = qq._properties.currentVelocityGradient.getFactor(), Eq._velocityGradients.length > 1 ? qq._properties.currentVelocity2 = Eq._velocityGradients[1].getFactor() : qq._properties.currentVelocity2 = qq._properties.currentVelocity1
    }

    function gE(qq, Eq) {
      qq._properties.currentLimitVelocityGradient = Eq._limitVelocityGradients[0], qq._properties.currentLimitVelocity1 = qq._properties.currentLimitVelocityGradient.getFactor(), Eq._limitVelocityGradients.length > 1 ? qq._properties.currentLimitVelocity2 = Eq._limitVelocityGradients[1].getFactor() : qq._properties.currentLimitVelocity2 = qq._properties.currentLimitVelocity1
    }

    function YE(qq, Eq) {
      Yq.k.GetCurrentGradient(Eq._ratio, Eq._velocityGradients, ((Eq, gq, Yq) => {
        Eq !== qq._properties.currentVelocityGradient && (qq._properties.currentVelocity1 = qq._properties.currentVelocity2, qq._properties.currentVelocity2 = gq.getFactor(), qq._properties.currentVelocityGradient = Eq), qq._properties.directionScale *= (0, Nq.Lerp)(qq._properties.currentVelocity1, qq._properties.currentVelocity2, Yq)
      }))
    }

    function lE(qq, Eq) {
      Yq.k.GetCurrentGradient(Eq._ratio, Eq._limitVelocityGradients, ((gq, Yq, lq) => {
        gq !== qq._properties.currentLimitVelocityGradient && (qq._properties.currentLimitVelocity1 = qq._properties.currentLimitVelocity2, qq._properties.currentLimitVelocity2 = Yq.getFactor(), qq._properties.currentLimitVelocityGradient = gq);
        const Oq = (0, Nq.Lerp)(qq._properties.currentLimitVelocity1, qq._properties.currentLimitVelocity2, lq);
        qq.direction.length() > Oq && qq.direction.scaleInPlace(Eq.limitVelocityDamping)
      }))
    }

    function OE(qq) {
      qq.direction.scaleToRef(qq._properties.directionScale, qq._properties.scaledDirection)
    }

    function mE(qq, Eq) {
      Eq.particleEmitterType.startPositionFunction(Eq._emitterWorldMatrix, qq.position, qq, Eq.isLocal)
    }

    function xE(qq, Eq) {
      Eq.startPositionFunction(Eq._emitterWorldMatrix, qq.position, qq, Eq.isLocal)
    }

    function AE(qq, Eq) {
      qq._properties.localPosition ? qq._properties.localPosition.WG(qq.position) : qq._properties.localPosition = qq.position.clone(), Oq.q.TransformCoordinatesToRef(qq._properties.localPosition, Eq._emitterWorldMatrix, qq.position)
    }

    function cE(qq, Eq) {
      Eq.isLocal && qq._properties.localPosition ? (qq._properties.localPosition.addInPlace(qq._properties.scaledDirection), Oq.q.TransformCoordinatesToRef(qq._properties.localPosition, Eq._emitterWorldMatrix, qq.position)) : qq.position.addInPlace(qq._properties.scaledDirection)
    }

    function uE(qq, Eq) {
      qq._properties.currentDragGradient = Eq._dragGradients[0], qq._properties.currentDrag1 = qq._properties.currentDragGradient.getFactor(), Eq._dragGradients.length > 1 ? qq._properties.currentDrag2 = Eq._dragGradients[1].getFactor() : qq._properties.currentDrag2 = qq._properties.currentDrag1
    }

    function BE(qq, Eq) {
      Yq.k.GetCurrentGradient(Eq._ratio, Eq._dragGradients, ((Eq, gq, Yq) => {
        Eq !== qq._properties.currentDragGradient && (qq._properties.currentDrag1 = qq._properties.currentDrag2, qq._properties.currentDrag2 = gq.getFactor(), qq._properties.currentDragGradient = Eq);
        const lq = (0, Nq.Lerp)(qq._properties.currentDrag1, qq._properties.currentDrag2, Yq);
        qq._properties.scaledDirection.scaleInPlace(1 - lq)
      }))
    }

    function WE(qq, Eq) {
      qq._properties.randomNoiseCoordinates1 && qq._properties.randomNoiseCoordinates2 ? (qq._properties.randomNoiseCoordinates1.Vqq(Math.random(), Math.random(), Math.random()), qq._properties.randomNoiseCoordinates2.Vqq(Math.random(), Math.random(), Math.random())) : (qq._properties.randomNoiseCoordinates1 = new Oq.q(Math.random(), Math.random(), Math.random()), qq._properties.randomNoiseCoordinates2 = new Oq.q(Math.random(), Math.random(), Math.random()))
    }

    function NE(qq, Eq) {
      const gq = Eq._noiseTextureData,
        Yq = Eq._noiseTextureSize;
      if (gq && Yq && qq._properties.randomNoiseCoordinates1 && qq._properties.randomNoiseCoordinates2) {
        const lq = Eq._fetchR(qq._properties.randomNoiseCoordinates1.x, qq._properties.randomNoiseCoordinates1.y, Yq.width, Yq.height, gq),
          mq = Eq._fetchR(qq._properties.randomNoiseCoordinates1.z, qq._properties.randomNoiseCoordinates2.x, Yq.width, Yq.height, gq),
          xq = Eq._fetchR(qq._properties.randomNoiseCoordinates2.y, qq._properties.randomNoiseCoordinates2.z, Yq.width, Yq.height, gq),
          Aq = Oq.o.Na[0],
          cq = Oq.o.Na[1];
        Aq.Vqq((2 * lq - 1) * Eq.noiseStrength.x, (2 * mq - 1) * Eq.noiseStrength.y, (2 * xq - 1) * Eq.noiseStrength.z), Aq.scaleToRef(Eq._tempScaledUpdateSpeed, cq), qq.direction.addInPlace(cq)
      }
    }

    function aE(qq, Eq) {
      Eq.gravity.scaleToRef(Eq._tempScaledUpdateSpeed, Eq._scaledGravity), qq.direction.addInPlace(Eq._scaledGravity)
    }

    function VE(qq, Eq) {
      qq.size = (0, Nq.RandomRange)(Eq.minSize, Eq.maxSize), qq.scale.Vqq((0, Nq.RandomRange)(Eq.minScaleX, Eq.maxScaleX), (0, Nq.RandomRange)(Eq.minScaleY, Eq.maxScaleY))
    }

    function dE(qq, Eq) {
      qq._properties.currentSizeGradient = Eq._sizeGradients[0], qq._properties.currentSize1 = qq._properties.currentSizeGradient.getFactor(), qq.size = qq._properties.currentSize1, Eq._sizeGradients.length > 1 ? qq._properties.currentSize2 = Eq._sizeGradients[1].getFactor() : qq._properties.currentSize2 = qq._properties.currentSize1, qq.scale.Vqq((0, Nq.RandomRange)(Eq.minScaleX, Eq.maxScaleX), (0, Nq.RandomRange)(Eq.minScaleY, Eq.maxScaleY))
    }

    function jE(qq, Eq) {
      const gq = Eq._actualFrame / Eq.targetStopDuration;
      Yq.k.GetCurrentGradient(gq, Eq._startSizeGradients, ((gq, Yq, lq) => {
        gq !== Eq._currentStartSizeGradient && (Eq._currentStartSize1 = Eq._currentStartSize2, Eq._currentStartSize2 = Yq.getFactor(), Eq._currentStartSizeGradient = gq);
        const Oq = (0, Nq.Lerp)(Eq._currentStartSize1, Eq._currentStartSize2, lq);
        qq.scale.scaleInPlace(Oq)
      }))
    }

    function HE(qq, Eq) {
      Yq.k.GetCurrentGradient(Eq._ratio, Eq._sizeGradients, ((Eq, gq, Yq) => {
        Eq !== qq._properties.currentSizeGradient && (qq._properties.currentSize1 = qq._properties.currentSize2, qq._properties.currentSize2 = gq.getFactor(), qq._properties.currentSizeGradient = Eq), qq.size = (0, Nq.Lerp)(qq._properties.currentSize1, qq._properties.currentSize2, Yq)
      }))
    }

    function oE(qq, Eq) {
      qq.remapData = new Oq.r(0, 1, 0, 1)
    }

    function PE(qq, Eq) {
      Eq._colorRemapGradients && Eq._colorRemapGradients.length > 0 && Yq.k.GetCurrentGradient(Eq._ratio, Eq._colorRemapGradients, ((Eq, gq, Yq) => {
        const lq = (0, Nq.Lerp)(Eq.factor1, gq.factor1, Yq),
          Oq = (0, Nq.Lerp)(Eq.factor2, gq.factor2, Yq);
        qq.remapData.x = lq, qq.remapData.y = Oq - lq
      })), Eq._alphaRemapGradients && Eq._alphaRemapGradients.length > 0 && Yq.k.GetCurrentGradient(Eq._ratio, Eq._alphaRemapGradients, ((Eq, gq, Yq) => {
        const lq = (0, Nq.Lerp)(Eq.factor1, gq.factor1, Yq),
          Oq = (0, Nq.Lerp)(Eq.factor2, gq.factor2, Yq);
        qq.remapData.z = lq, qq.remapData.w = Oq - lq
      }))
    }

    function QE(qq, Eq) {
      const gq = (0, Nq.Clamp)(Eq._actualFrame / Eq.targetStopDuration);
      Yq.k.GetCurrentGradient(gq, Eq._lifeTimeGradients, ((Eq, Yq) => {
        const lq = Eq,
          Oq = Yq,
          mq = lq.getFactor(),
          xq = Oq.getFactor(),
          Aq = (gq - lq.gradient) / (Oq.gradient - lq.gradient);
        qq.lifeTime = (0, Nq.Lerp)(mq, xq, Aq)
      })), Eq._emitPower = (0, Nq.RandomRange)(Eq.minEmitPower, Eq.maxEmitPower)
    }

    function yE(qq, Eq) {
      qq.lifeTime = (0, Nq.RandomRange)(Eq.minLifeTime, Eq.maxLifeTime), Eq._emitPower = (0, Nq.RandomRange)(Eq.minEmitPower, Eq.maxEmitPower)
    }

    function tE(qq, Eq) {
      0 === Eq._emitPower ? (qq._properties.initialDirection ? qq._properties.initialDirection.WG(qq.direction) : qq._properties.initialDirection = qq.direction.clone(), qq.direction.set(0, 0, 0)) : (qq._properties.initialDirection = null, qq.direction.scaleInPlace(Eq._emitPower)), qq.direction.addInPlace(Eq._inheritedVelocityOffset)
    }

    function rE(qq, Eq) {
      qq.angularSpeed = (0, Nq.RandomRange)(Eq.minAngularSpeed, Eq.maxAngularSpeed), qq.angle = (0, Nq.RandomRange)(Eq.minInitialRotation, Eq.maxInitialRotation)
    }

    function vE(qq, Eq) {
      qq._properties.currentAngularSpeedGradient = Eq._angularSpeedGradients[0], qq.angularSpeed = qq._properties.currentAngularSpeedGradient.getFactor(), qq._properties.currentAngularSpeed1 = qq.angularSpeed, Eq._angularSpeedGradients.length > 1 ? qq._properties.currentAngularSpeed2 = Eq._angularSpeedGradients[1].getFactor() : qq._properties.currentAngularSpeed2 = qq._properties.currentAngularSpeed1, qq.angle = (0, Nq.RandomRange)(Eq.minInitialRotation, Eq.maxInitialRotation)
    }

    function hE(qq, Eq) {
      qq._properties.initialStartSpriteCellId = Eq.startSpriteCellID, qq._properties.initialEndSpriteCellId = Eq.endSpriteCellID, qq._properties.initialSpriteCellLoop = Eq.spriteCellLoop
    }

    function nE(qq, Eq) {
      qq.previousItem = Eq.previousItem, qq.nextItem = Eq, Eq.previousItem && (Eq.previousItem.nextItem = qq), Eq.previousItem = qq
    }

    function bE(qq, Eq) {
      qq.previousItem = Eq, qq.nextItem = Eq.nextItem, Eq.nextItem && (Eq.nextItem.previousItem = qq), Eq.nextItem = qq
    }

    function iE(qq) {
      qq.previousItem && (qq.previousItem.nextItem = qq.nextItem), qq.nextItem && (qq.nextItem.previousItem = qq.previousItem)
    }
    var ZE = gq(40127);
    class fE extends yq {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(qq) {
        this._startDirectionFunction !== qq && (this._startDirectionFunction = qq, this._directionCreation.process = qq ? qE : Dq)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(qq) {
        this._startPositionFunction !== qq && (this._startPositionFunction = qq, this._positionCreation.process = qq ? xE : mE)
      }
      set onDispose(qq) {
        this._onDisposeObserver && this.MJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.MJ.add(qq)
      }
      get bM() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(qq) {
        this._useRampGradients !== qq && (this._useRampGradients = qq, this._resetEffect(), qq ? (this._rampCreation = {
          process: oE,
          previousItem: null,
          nextItem: null
        }, bE(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: PE,
          previousItem: null,
          nextItem: null
        }, bE(this._remapGradientProcessing, this._gravityProcessing))) : (iE(this._rampCreation), iE(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(qq) {
        this._isLocal !== qq && (this._isLocal = qq, qq ? (this._isLocalCreation = {
          process: AE,
          previousItem: null,
          nextItem: null
        }, bE(this._isLocalCreation, this._positionCreation)) : iE(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(qq) {
        this._animationSheetEnabled !== qq && (this._animationSheetEnabled = qq, qq ? (this._sheetCreation = {
          process: hE,
          previousItem: null,
          nextItem: null
        }, bE(this._sheetCreation, this._colorDeadCreation)) : iE(this._sheetCreation), this._reset())
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
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[qq]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[qq] ?? this._customWrappers[0]
      }
      setCustomEffect(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[Eq] = new kq.b(this._engine), this._customWrappers[Eq].effect = qq, this._customWrappers[Eq].drawContext && (this._customWrappers[Eq].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new lq.d), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(qq) {
        if (this.noiseTexture !== qq) {
          if (this._noiseTexture = qq, !qq) return iE(this._noiseCreation), void iE(this._noiseProcessing);
          this._noiseCreation = {
            process: WE,
            previousItem: null,
            nextItem: null
          }, bE(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: NE,
            previousItem: null,
            nextItem: null
          }, bE(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          cq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        Lq || (Lq = !0, fq(Gq.i, pq)), (0, Jq.b)(), super(qq), this._emitterInverseWorldMatrix = Oq.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Oq.q, this.MJ = new lq.d, this.onStoppedObservable = new lq.d, this.onStartedObservable = new lq.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new uq.g(0, 0, 0, 0), this._colorDiff = new uq.g(0, 0, 0, 0), this._scaledGravity = Oq.q.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = qq => {}, this.recycleParticle = qq => {
          const Eq = this._particles.pop();
          Eq !== qq && Eq.copyTo(qq), Eq.metadata = null, this._stockParticles.push(Eq)
        }, this._createParticle = () => {
          let qq;
          return 0 !== this._stockParticles.length ? (qq = this._stockParticles.pop(), qq._reset()) : qq = new rq(this), this._prepareParticle(qq), qq
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Eq, this._epsilon = xq, gq && "Scene" !== gq.getClassName() ? (this._engine = gq, this.defaultProjectionMatrix = Oq.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = gq || Aq.b.LastCreatedScene, this._engine = this._scene.Ba(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.xZ.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: yE,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: mE,
          previousItem: null,
          nextItem: null
        }, bE(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: Dq,
          previousItem: null,
          nextItem: null
        }, bE(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: tE,
          previousItem: null,
          nextItem: null
        }, bE(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: VE,
          previousItem: null,
          nextItem: null
        }, bE(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: rE,
          previousItem: null,
          nextItem: null
        }, bE(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: sq,
          previousItem: null,
          nextItem: null
        }, bE(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Xq,
          previousItem: null,
          nextItem: null
        }, bE(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, cq || (this._colorProcessing = {
          process: Cq,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: eq,
          previousItem: null,
          nextItem: null
        }, bE(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: OE,
          previousItem: null,
          nextItem: null
        }, bE(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: cE,
          previousItem: null,
          nextItem: null
        }, bE(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: aE,
          previousItem: null,
          nextItem: null
        }, bE(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = mq, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new kq.b(this._engine)
        }, this._customWrappers[0].effect = Yq, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Bq.b, this.updateFunction = qq => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((qq => {
            this._noiseTextureData = qq
          })));
          const Eq = qq === this._particles;
          for (let gq = 0; gq < qq.length; gq++) {
            const Yq = qq[gq];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const lq = Yq.age;
            if (Yq.age += this._tempScaledUpdateSpeed, Yq.age > Yq.lifeTime) {
              const qq = Yq.age - lq,
                Eq = Yq.lifeTime - lq;
              this._tempScaledUpdateSpeed = Eq * this._tempScaledUpdateSpeed / qq, Yq.age = Yq.lifeTime
            }
            this._ratio = Yq.age / Yq.lifeTime, Yq._properties.directionScale = this._tempScaledUpdateSpeed;
            let Oq = this._updateQueueStart;
            for (; Oq;) Oq.process(Yq, this), Oq = Oq.nextItem;
            if (this._isAnimationSheetEnabled && !cq && Yq.updateCellIndex(), Yq._inheritParticleInfoToSubEmitters(), Yq.age >= Yq.lifeTime) {
              if (this._emitFromParticle(Yq), Yq._properties.attachedSubEmitters) {
                for (const qq of Yq._properties.attachedSubEmitters) qq.particleSystem.disposeOnStop = !0, qq.particleSystem.stop();
                Yq._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Yq), Eq && gq--
            } else;
          }
        }
      }
      serialize(qq) {
        throw new Error("Method not implemented.")
      }
      clone(qq, Eq) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = QE : this._lifeTimeCreation.process = yE
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: jE,
          previousItem: null,
          nextItem: null
        }, bE(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (iE(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(qq) {
        this.targetStopDuration !== qq && (this._targetStopDuration = qq, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(qq, Eq, gq) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, qq, Eq, gq), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(qq) {
        return this._removeFactorGradient(this._lifeTimeGradients, qq), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(qq, Eq, gq) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = dE, this._sizeGradientProcessing = {
          process: HE,
          previousItem: null,
          nextItem: null
        }, nE(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, qq, Eq, gq), this
      }
      removeSizeGradient(qq) {
        return this._removeFactorGradient(this._sizeGradients, qq), 0 === this._sizeGradients?.length && (iE(this._sizeGradientProcessing), this._sizeCreation.process = VE), this
      }
      addColorRemapGradient(qq, Eq, gq) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, qq, Eq, gq), this
      }
      removeColorRemapGradient(qq) {
        return this._removeFactorGradient(this._colorRemapGradients, qq), this
      }
      addAlphaRemapGradient(qq, Eq, gq) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, qq, Eq, gq), this
      }
      removeAlphaRemapGradient(qq) {
        return this._removeFactorGradient(this._alphaRemapGradients, qq), this
      }
      addAngularSpeedGradient(qq, Eq, gq) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = vE, this._angularSpeedGradientProcessing = {
          process: Iq,
          previousItem: null,
          nextItem: null
        }, nE(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, qq, Eq, gq), this
      }
      removeAngularSpeedGradient(qq) {
        return this._removeFactorGradient(this._angularSpeedGradients, qq), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = rE, iE(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(qq, Eq, gq) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: EE,
          previousItem: null,
          nextItem: null
        }, bE(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: YE,
          previousItem: null,
          nextItem: null
        }, nE(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, qq, Eq, gq), this
      }
      removeVelocityGradient(qq) {
        return this._removeFactorGradient(this._velocityGradients, qq), 0 === this._velocityGradients?.length && (iE(this._velocityCreation), iE(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(qq, Eq, gq) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: gE,
          previousItem: null,
          nextItem: null
        }, bE(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: lE,
          previousItem: null,
          nextItem: null
        }, bE(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, qq, Eq, gq), this
      }
      removeLimitVelocityGradient(qq) {
        return this._removeFactorGradient(this._limitVelocityGradients, qq), 0 === this._limitVelocityGradients?.length && (iE(this._limitVelocityCreation), iE(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(qq, Eq, gq) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: uE,
          previousItem: null,
          nextItem: null
        }, nE(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: BE,
          previousItem: null,
          nextItem: null
        }, nE(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, qq, Eq, gq), this
      }
      removeDragGradient(qq) {
        return this._removeFactorGradient(this._dragGradients, qq), 0 === this._dragGradients?.length && (iE(this._dragCreation), iE(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(qq, Eq, gq) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, qq, Eq, gq), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(qq) {
        return this._removeFactorGradient(this._startSizeGradients, qq), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const qq = new Uint8Array(4 * this._rawTextureWidth),
          Eq = uq.k.Color3[0];
        for (let gq = 0; gq < this._rawTextureWidth; gq++) {
          const lq = gq / this._rawTextureWidth;
          Yq.k.GetCurrentGradient(lq, this._rampGradients, ((Yq, lq, Oq) => {
            uq.d.LerpToRef(Yq.color, lq.color, Oq, Eq), qq[4 * gq] = 255 * Eq.r, qq[4 * gq + 1] = 255 * Eq.g, qq[4 * gq + 2] = 255 * Eq.b, qq[4 * gq + 3] = 255
          }))
        }
        this._rampGradientsTexture = xq.d.CreateRGBATexture(qq, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((qq, Eq) => qq.gradient < Eq.gradient ? -1 : qq.gradient > Eq.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(qq, Eq) {
        this._rampGradients || (this._rampGradients = []);
        const gq = new Yq.h(qq, Eq);
        return this._rampGradients.push(gq), this._syncRampGradientTexture(), this
      }
      removeRampGradient(qq) {
        return this._removeGradientAndTexture(qq, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(qq, Eq, gq) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = wq, this._colorProcessing.process = Kq);
        const lq = new Yq.e(qq, Eq, gq);
        return this._colorGradients.push(lq), this._colorGradients.sort(((qq, Eq) => qq.gradient < Eq.gradient ? -1 : qq.gradient > Eq.gradient ? 1 : 0)), this
      }
      removeColorGradient(qq) {
        if (!this._colorGradients) return this;
        let Eq = 0;
        for (const gq of this._colorGradients) {
          if (gq.gradient === qq) {
            this._colorGradients.splice(Eq, 1);
            break
          }
          Eq++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = sq, this._colorProcessing.process = Cq), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const qq of this._drawWrappers)
            if (qq)
              for (const Eq of qq) Eq?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(qq, Eq, gq, Yq, lq) {
        return lq[4 * (((qq = .5 * Math.abs(qq) + .5) * gq % gq | 0) + ((Eq = .5 * Math.abs(Eq) + .5) * Yq % Yq | 0) * gq)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const qq = this._engine,
          Eq = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * Eq), this._vertexBuffer = new mq.b(qq, this._vertexData, !0, Eq);
        let gq = 0;
        const Yq = this._vertexBuffer.createVertexBuffer(mq.g.PositionKind, gq, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[mq.g.PositionKind] = Yq, gq += 3;
        const lq = this._vertexBuffer.createVertexBuffer(mq.g.ColorKind, gq, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[mq.g.ColorKind] = lq, gq += 4;
        const Oq = this._vertexBuffer.createVertexBuffer("angle", gq, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Oq, gq += 1;
        const xq = this._vertexBuffer.createVertexBuffer("size", gq, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = xq, gq += 2, this._isAnimationSheetEnabled) {
          const qq = this._vertexBuffer.createVertexBuffer("cellIndex", gq, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = qq, gq += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const qq = this._vertexBuffer.createVertexBuffer("direction", gq, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = qq, gq += 3
        }
        if (this._useRampGradients) {
          const qq = this._vertexBuffer.createVertexBuffer("remapData", gq, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = qq, gq += 4
        }
        let Aq;
        if (this._useInstancing) {
          const Eq = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new mq.b(qq, Eq, !1, 2), Aq = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Aq = this._vertexBuffer.createVertexBuffer("offset", gq, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Aq, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const qq = [],
          Eq = [];
        let gq = 0;
        for (let Yq = 0; Yq < this._capacity; Yq++) qq.push(gq), qq.push(gq + 1), qq.push(gq + 2), qq.push(gq), qq.push(gq + 2), qq.push(gq + 3), Eq.push(gq, gq + 1, gq + 1, gq + 2, gq + 2, gq + 3, gq + 3, gq, gq, gq + 3), gq += 4;
        this._indexBuffer = this._engine.createIndexBuffer(qq), this._linesIndexBuffer = this._engine.createIndexBuffer(Eq)
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
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (qq) return this.startDelay = qq, void setTimeout((() => {
          this.start(0)
        }), qq);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const qq = this.noiseTexture;
          if (qq && qq.onGeneratedObservable) qq.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let Eq = 0; Eq < this.preWarmCycles; Eq++) this.animate(!0), qq.render()
            }))
          }));
          else
            for (let Eq = 0; Eq < this.preWarmCycles; Eq++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(qq))
      }
      _postStop(qq) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(qq, Eq, gq, Yq) {
        let lq = qq * this._vertexBufferSize;
        const mq = Oq.o.Na[0].WG(this._scene?.floatingOriginOffset || Oq.q.ZeroReadOnly);
        if (this._vertexData[lq++] = Eq.position.x + this.worldOffset.x - mq.x, this._vertexData[lq++] = Eq.position.y + this.worldOffset.y - mq.y, this._vertexData[lq++] = Eq.position.z + this.worldOffset.z - mq.z, this._vertexData[lq++] = Eq.color.r, this._vertexData[lq++] = Eq.color.g, this._vertexData[lq++] = Eq.color.b, this._vertexData[lq++] = Eq.color.a, this._vertexData[lq++] = Eq.angle, this._vertexData[lq++] = Eq.scale.x * Eq.size, this._vertexData[lq++] = Eq.scale.y * Eq.size, this._isAnimationSheetEnabled && (this._vertexData[lq++] = Eq.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[lq++] = Eq.direction.x, this._vertexData[lq++] = Eq.direction.y, this._vertexData[lq++] = Eq.direction.z);
        else if (Eq._properties.initialDirection) {
          let qq = Eq._properties.initialDirection;
          this.isLocal && (Oq.q.TransformNormalToRef(qq, this._emitterWorldMatrix, Oq.o.Na[0]), qq = Oq.o.Na[0]), 0 === qq.x && 0 === qq.z && (qq.x = .001), this._vertexData[lq++] = qq.x, this._vertexData[lq++] = qq.y, this._vertexData[lq++] = qq.z
        } else {
          let qq = Eq.direction;
          this.isLocal && (Oq.q.TransformNormalToRef(qq, this._emitterWorldMatrix, Oq.o.Na[0]), qq = Oq.o.Na[0]), 0 === qq.x && 0 === qq.z && (qq.x = .001), this._vertexData[lq++] = qq.x, this._vertexData[lq++] = qq.y, this._vertexData[lq++] = qq.z
        }
        this._useRampGradients && Eq.remapData && (this._vertexData[lq++] = Eq.remapData.x, this._vertexData[lq++] = Eq.remapData.y, this._vertexData[lq++] = Eq.remapData.z, this._vertexData[lq++] = Eq.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === gq ? gq = this._epsilon : 1 === gq && (gq = 1 - this._epsilon), 0 === Yq ? Yq = this._epsilon : 1 === Yq && (Yq = 1 - this._epsilon)), this._vertexData[lq++] = gq, this._vertexData[lq] = Yq)
      }
      _prepareParticle(qq) {}
      _createNewOnes(qq) {
        let Eq;
        for (let gq = 0; gq < qq && this._particles.length !== this._capacity; gq++) {
          Eq = this._createParticle(), this._particles.push(Eq);
          let qq = this._createQueueStart;
          for (; qq;) qq.process(Eq, this), qq = qq.nextItem;
          Eq._inheritParticleInfoToSubEmitters()
        }
      }
      _update(qq) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const qq = this.emitter;
          this._emitterWorldMatrix = qq.getWorldMatrix()
        } else {
          const qq = this.emitter;
          this._emitterWorldMatrix = Oq.e.Translation(qq.x, qq.y, qq.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(qq)
      }
      static _GetAttributeNamesOrOptions() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = [mq.g.PositionKind, mq.g.ColorKind, "angle", "offset", "size"];
        return qq && Yq.push("cellIndex"), Eq || Yq.push("direction"), gq && Yq.push("remapData"), Yq
      }
      static _GetEffectCreationOptions() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Rq.e)(Yq), qq && Yq.push("particlesInfos"), Eq && Yq.push("logarithmicDepthConstant"), gq && (Yq.push("vFogInfos"), Yq.push("vFogColor")), Yq
      }
      fillDefines(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Rq.m)(this, this._scene, qq), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && qq.push("#define FOG")), this._isAnimationSheetEnabled && qq.push("#define ANIMATESHEET"), this.useLogarithmicDepth && qq.push("#define LOGARITHMICDEPTH"), Eq === yq.BLENDMODE_MULTIPLY && qq.push("#define BLENDMULTIPLYMODE"), this.isLocal && qq.push("#define LOCAL"), this._useRampGradients && qq.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (qq.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            qq.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            qq.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && qq.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            qq.push("#define BILLBOARDMODE_ALL")
        }
        gq && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), qq.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(qq, Eq, gq) {
        Eq.push(...fE._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), qq.push(...fE._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), gq.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Fq.e)(qq, this._imageProcessingConfigurationDefines), (0, Fq.b)(gq, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(qq) {
        var Eq;
        const gq = this._getCustomDrawWrapper(qq);
        if (gq?.effect) return gq;
        const Yq = [];
        this.fillDefines(Yq, qq);
        const Oq = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          mq = ZE.e._PrepareStringDefines(Oq, Yq),
          xq = mq ? ZE.e.GetConfiguration(Oq) : void 0;
        let Aq = this._drawWrappers[Oq];
        Aq || (Aq = this._drawWrappers[Oq] = [], 0 === Oq || this._renderPassObserver || (this._renderPassObserver = ((Eq = this._engine)._onReleaseRenderPassObservable ?? (Eq._onReleaseRenderPassObservable = new lq.d)).add((qq => {
          const Eq = this._drawWrappers[qq];
          if (Eq) {
            for (const qq of Eq) qq?.dispose();
            delete this._drawWrappers[qq]
          }
        }))));
        let cq = Aq[qq];
        cq || (cq = new kq.b(this._engine), cq.drawContext && (cq.drawContext.useInstancing = this._useInstancing), Aq[qq] = cq);
        const uq = Yq.join("\n");
        if (cq.defines !== uq) {
          const qq = [],
            Eq = [],
            gq = [];
          this.fillUniformsAttributesAndSamplerNames(Eq, qq, gq), mq && (Eq.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== xq?.defines.PREPASS_LOCAL_POSITION_INDEX && Eq.push("inverseEmitterWM", "geometryWorldOffset")), cq.setEffect(this._engine.createEffect("particles", {
            attributes: qq,
            uniformsNames: Eq,
            samplers: gq,
            defines: uq,
            shaderLanguage: this._shaderLanguage,
            multiTarget: mq,
            indexParameters: mq ? {
              buffersCount: xq?._mrtCount ?? 0
            } : void 0
          }, this._engine), uq)
        }
        return cq
      }
      _bindGeometryRendering(qq) {
        const Eq = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          gq = ZE.e.GetConfiguration(Eq);
        if (!gq?._defines) return;
        qq.setFloat("objectId", 0), qq.setInt("meshBlendTag", 0);
        const Yq = this._scene?.activeCamera;
        if (qq.setFloat2("cameraInfo", Yq?.minZ ?? 0, Yq?.maxZ ?? 1), this.isLocal && void 0 !== gq.defines.PREPASS_LOCAL_POSITION_INDEX) {
          qq.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Eq = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Oq.q.ZeroReadOnly, Oq.o.Na[0]);
          qq.setVector3("geometryWorldOffset", Eq)
        }
      }
      animate() {
        let qq, Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!Eq && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (Eq ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) qq = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const Eq = this._calculateEmitRate();
            qq = Eq * this._scaledUpdateSpeed | 0, this._newPartsExcess += Eq * this._scaledUpdateSpeed - qq
          }
          if (this._newPartsExcess > 1 && (qq += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? qq = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(qq), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !Eq) {
            let qq = 0;
            for (let Eq = 0; Eq < this._particles.length; Eq++) {
              const gq = this._particles[Eq];
              this._appendParticleVertices(qq, gq), qq += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const qq = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  Eq = this._particles.length;
                Eq < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, Eq * qq, this._fixedCapacityHighWaterMark * qq), this._fixedCapacityHighWaterMark = Eq, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const qq = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * qq), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let qq = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const Eq = this._actualFrame / this.targetStopDuration;
          Yq.k.GetCurrentGradient(Eq, this._emitRateGradients, ((Eq, gq, Yq) => {
            Eq !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = gq.getFactor(), this._currentEmitRateGradient = Eq), qq = (0, Nq.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Yq)
          }))
        }
        return qq
      }
      _appendParticleVertices(qq, Eq) {
        this._appendParticleVertex(qq++, Eq, 0, 0), this._useInstancing || (this._appendParticleVertex(qq++, Eq, 1, 0), this._appendParticleVertex(qq++, Eq, 1, 1), this._appendParticleVertex(qq, Eq, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !fE.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([gq.e(337).then((() => gq(61158))), gq.e(331).then((() => gq(61162)))])) : await Promise.all([gq.e(320).then((() => gq(61167))), Promise.all([gq.e(313), gq.e(349)]).then((() => gq(61175)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== yq.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(yq.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(yq.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(qq) {
        const Eq = this._getWrapper(qq),
          gq = Eq.effect,
          Yq = this._engine;
        Yq.enableEffect(Eq);
        const lq = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        gq.setTexture("diffuseSampler", this.particleTexture), gq.setMatrix("view", lq);
        const mq = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (gq.setMatrix("projection", mq), this._isAnimationSheetEnabled && this.particleTexture) {
          const qq = this.particleTexture.getBaseSize();
          gq.setFloat3("particlesInfos", this.spriteCellWidth / qq.width, this.spriteCellHeight / qq.height, this.spriteCellWidth / qq.width)
        }
        if (gq.setVector2("translationPivot", this.translationPivot), gq.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const qq = this._scene.activeCamera;
          gq.setVector3("eyePosition", qq.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), gq.setTexture("rampSampler", this._rampGradientsTexture));
        const xq = gq.defines;
        this._scene && ((0, Rq.i)(gq, this, this._scene), this.applyFog && (0, Uq.f)(this._scene, void 0, gq)), xq.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (lq.invertToRef(Oq.o.Matrix[0]), gq.setMatrix("invView", Oq.o.Matrix[0])), gq._multiTarget && this._bindGeometryRendering(gq), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Yq.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, gq) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, gq)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Yq.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, gq) : Yq.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, gq), this.useLogarithmicDepth && this._scene && (0, Uq.o)(xq, gq, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(gq), this._setEngineBasedOnBlendMode(qq), gq._multiTarget && ZE.e._BindZeroAlphaDiscard(Yq, gq);
        let Aq = !1;
        try {
          ZE.e._BindAttachmentsForEffect(Yq, gq) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(gq), this._useInstancing ? this._scene?.forceWireframe ? Yq.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Yq.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Yq.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Yq.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Aq = !0)
        } finally {
          ZE.e._RestoreAttachments(Yq)
        }
        return Aq ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const qq = this._engine;
        let Eq;
        return qq.setState && (qq.setState(!1), this.forceDepthWrite && qq.setDepthWrite(!0)), Eq = this.blendMode === yq.BLENDMODE_MULTIPLYADD ? this._render(yq.BLENDMODE_MULTIPLY) + this._render(yq.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Eq
      }
      _onDispose() {}
      dispose() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), qq && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), qq && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Eq, gq), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const qq = this._scene.xZ.indexOf(this);
          qq > -1 && this._scene.xZ.splice(qq, 1), this._scene._activeParticleSystems.dispose()
        }
        this.MJ.notifyObservers(this), this.MJ.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    fE.ForceGLSL = !1;
    var ME, TE = gq(37171);
    ! function(qq) {
      qq[qq.ATTACHED = 0] = "ATTACHED", qq[qq.END = 1] = "END"
    }(ME || (ME = {}));
    class zE {
      constructor(qq) {
        if (this.particleSystem = qq, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !qq.emitter || !qq.emitter.dispose) {
          const Eq = (0, TE.e)("BABYLON.AbstractMesh");
          qq.emitter = new Eq("SubemitterSystemEmitter", qq.ZJ()), qq._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let qq = this.particleSystem.emitter;
        if (qq) {
          if (qq instanceof Oq.q) qq = qq.clone();
          else if (-1 !== qq.getClassName().indexOf("Mesh")) {
            qq = new((0, TE.e)("BABYLON.Mesh"))("", qq.ZJ()), qq.isVisible = !1
          }
        } else qq = new Oq.q;
        const Eq = new zE(this.particleSystem.clone(this.particleSystem.name, qq));
        return Eq.particleSystem.name += "Clone", Eq.type = this.type, Eq.inheritDirection = this.inheritDirection, Eq.inheritedVelocityAmount = this.inheritedVelocityAmount, Eq.particleSystem._disposeEmitterOnDispose = !0, Eq.particleSystem.disposeOnStop = !0, Eq
      }
      serialize() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = {};
        return Eq.type = this.type, Eq.inheritDirection = this.inheritDirection, Eq.inheritedVelocityAmount = this.inheritedVelocityAmount, Eq.particleSystem = this.particleSystem.serialize(qq), Eq
      }
      static _ParseParticleSystem(qq, Eq, gq) {
        throw (0, Sq.m)("ParseParticle")
      }
      static Parse(qq, Eq, gq) {
        const Yq = qq.particleSystem,
          lq = new zE(zE._ParseParticleSystem(Yq, Eq, gq, !0));
        return lq.type = qq.type, lq.inheritDirection = qq.inheritDirection, lq.inheritedVelocityAmount = qq.inheritedVelocityAmount, lq.particleSystem._isSubEmitter = !0, lq
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var SE = gq(39653),
      pE = gq(39779);
    const GE = () => {};
    class LE {
      constructor() {
        this.particlePositionGenerator = GE, this.particleDestinationGenerator = GE, this.particleDirectionGenerator = GE
      }
      startDirectionFunction(qq, Eq, gq, Yq) {
        const lq = Oq.o.Na[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== GE) this.particleDirectionGenerator(-1, gq, lq);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== GE) {
          this.particleDestinationGenerator(-1, gq, lq);
          const qq = Oq.o.Na[1];
          lq.subtractToRef(gq.position, qq), qq.scaleToRef(1 / gq.lifeTime, lq)
        } else lq.set(0, 0, 0);
        Yq ? Eq.WG(lq) : Oq.q.TransformNormalToRef(lq, qq, Eq)
      }
      startPositionFunction(qq, Eq, gq, Yq) {
        const lq = Oq.o.Na[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== GE ? this.particlePositionGenerator(-1, gq, lq) : lq.set(0, 0, 0), Yq ? Eq.WG(lq) : Oq.q.TransformCoordinatesToRef(lq, qq, Eq)
      }
      clone() {
        const qq = new LE;
        return Wq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {}
      buildUniformLayout(qq) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const qq = {};
        return qq.type = this.getClassName(), qq.particlePositionGenerator = this.particlePositionGenerator, qq.particleDestinationGenerator = this.particleDestinationGenerator, qq
      }
      parse(qq) {
        qq.particlePositionGenerator && (this.particlePositionGenerator = qq.particlePositionGenerator), qq.particleDestinationGenerator && (this.particleDestinationGenerator = qq.particleDestinationGenerator)
      }
    }
    const JE = Oq.q.Zero(),
      kE = Oq.q.Zero(),
      RE = Oq.q.Zero();
    class UE {
      constructor() {
        this.strength = 0, this.position = Oq.q.Zero()
      }
      _processParticle(qq, Eq) {
        this.position.subtractToRef(qq.position, JE);
        const gq = JE.lengthSquared() + 1;
        JE.normalize().scaleToRef(this.strength / gq, kE), kE.scaleToRef(Eq._tempScaledUpdateSpeed, RE), qq.direction.addInPlace(RE)
      }
      serialize() {
        return {
          position: this.position.bYq(),
          strength: this.strength
        }
      }
    }
    const FE = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class sE extends fE {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = qq => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Eq = Math.floor(Math.random() * this._subEmitters.length);
          for (const gq of this._subEmitters[Eq])
            if (1 === gq.type) {
              const Eq = gq.clone();
              qq._inheritParticleInfoToSubEmitter(Eq), Eq.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(Eq.particleSystem), Eq.particleSystem.start()
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
      set flowMap(qq) {
        this._flowMap !== qq && (this._flowMap = qq, this._flowMapUpdate && (iE(this._flowMapUpdate), this._flowMapUpdate = null), qq && (this._flowMapUpdate = {
          process: qq => {
            const Eq = this.ZJ()?.getTransformMatrix();
            this._flowMap._processParticle(qq, this.flowMapStrength * this._tempScaledUpdateSpeed, Eq)
          },
          previousItem: null,
          nextItem: null
        }, bE(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(qq) {
        super.addAttractor(qq), 1 === this._attractors.length && (this._attractorUpdate = {
          process: qq => {
            for (const Eq of this._attractors) Eq._processParticle(qq, this)
          },
          previousItem: null,
          nextItem: null
        }, bE(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(qq) {
        super.removeAttractor(qq), 0 === this._attractors.length && this._attractorUpdate && iE(this._attractorUpdate)
      }
      start() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(qq)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const qq of this.subEmitters) qq instanceof sE ? this._subEmitters.push([new zE(qq)]) : qq instanceof zE ? this._subEmitters.push([qq]) : qq instanceof Array && this._subEmitters.push(qq)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const qq of this.activeSubSystems) qq.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const qq = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== qq && this._rootParticleSystem.activeSubSystems.splice(qq, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(qq) {
        qq && this._stopSubEmitters()
      }
      _prepareParticle(qq) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const Eq = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          qq._properties.attachedSubEmitters = [];
          for (const gq of Eq)
            if (0 === gq.type) {
              const Eq = gq.clone();
              qq._properties.attachedSubEmitters.push(Eq), Eq.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), qq && this.particles)
          for (const gq of this.particles)
            if (gq._properties.attachedSubEmitters)
              for (let qq = gq._properties.attachedSubEmitters.length - 1; qq >= 0; qq -= 1) gq._properties.attachedSubEmitters[qq].dispose();
        if (Eq && this.activeSubSystems)
          for (let gq = this.activeSubSystems.length - 1; gq >= 0; gq -= 1) this.activeSubSystems[gq].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let qq = 0; qq < this._subEmitters.length; qq++)
            for (const Eq of this._subEmitters[qq]) Eq.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(qq, Eq, gq, Yq) {
        let lq;
        lq = gq instanceof SE.b ? null : gq;
        const mq = (0, TE.e)("BABYLON.Texture");
        if (mq && lq)
          if (qq.texture) Eq.particleTexture = mq.Parse(qq.texture, lq, Yq);
          else if (qq.textureName) {
          const gq = qq.textureSettings;
          if (Eq.particleTexture = new mq(Yq + qq.textureName, lq, !1, void 0 === qq.invertY || qq.invertY, gq ? gq.samplingMode : void 0), Eq.particleTexture.name = qq.textureName, gq) {
            const qq = Eq.particleTexture;
            for (const Eq of FE) void 0 !== gq[Eq] && (qq[Eq] = gq[Eq])
          }
        }
        if (qq.emitterId || 0 === qq.emitterId || void 0 !== qq.emitter ? (qq.emitterId || 0 === qq.emitterId) && lq ? (Eq.emitter = lq.getLastMeshById(qq.emitterId), Eq.emitter || (Eq.emitter = Oq.q.Zero())) : Eq.emitter = Oq.q.FromArray(qq.emitter) : Eq.emitter = Oq.q.Zero(), Eq.isLocal = !!qq.isLocal, void 0 !== qq.renderingGroupId && (Eq.renderingGroupId = qq.renderingGroupId), void 0 !== qq.isBillboardBased && (Eq.isBillboardBased = qq.isBillboardBased), void 0 !== qq.billboardMode && (Eq.billboardMode = qq.billboardMode), void 0 !== qq.useLogarithmicDepth && (Eq.useLogarithmicDepth = qq.useLogarithmicDepth), qq.animations) {
          for (let gq = 0; gq < qq.animations.length; gq++) {
            const Yq = qq.animations[gq],
              lq = (0, TE.e)("BABYLON.Animation");
            lq && Eq.animations.push(lq.Parse(Yq))
          }
          Eq.beginAnimationOnStart = qq.beginAnimationOnStart, Eq.beginAnimationFrom = qq.beginAnimationFrom, Eq.beginAnimationTo = qq.beginAnimationTo, Eq.beginAnimationLoop = qq.beginAnimationLoop
        }
        if (qq.autoAnimate && lq && lq.beginAnimation(Eq, qq.autoAnimateFrom, qq.autoAnimateTo, qq.autoAnimateLoop, qq.autoAnimateSpeed || 1), Eq.startDelay = 0 | qq.startDelay, Eq.minAngularSpeed = qq.minAngularSpeed, Eq.maxAngularSpeed = qq.maxAngularSpeed, Eq.minSize = qq.minSize, Eq.maxSize = qq.maxSize, qq.minScaleX && (Eq.minScaleX = qq.minScaleX, Eq.maxScaleX = qq.maxScaleX, Eq.minScaleY = qq.minScaleY, Eq.maxScaleY = qq.maxScaleY), void 0 !== qq.preWarmCycles && (Eq.preWarmCycles = qq.preWarmCycles, Eq.preWarmStepOffset = qq.preWarmStepOffset), void 0 !== qq.minInitialRotation && (Eq.minInitialRotation = qq.minInitialRotation, Eq.maxInitialRotation = qq.maxInitialRotation), Eq.minLifeTime = qq.minLifeTime, Eq.maxLifeTime = qq.maxLifeTime, Eq.minEmitPower = qq.minEmitPower, Eq.maxEmitPower = qq.maxEmitPower, Eq.emitRate = qq.emitRate, Eq.gravity = Oq.q.FromArray(qq.gravity), qq.noiseStrength && (Eq.noiseStrength = Oq.q.FromArray(qq.noiseStrength)), Eq.color1 = uq.g.FromArray(qq.color1), Eq.color2 = uq.g.FromArray(qq.color2), Eq.colorDead = uq.g.FromArray(qq.colorDead), Eq.updateSpeed = qq.updateSpeed, Eq.targetStopDuration = qq.targetStopDuration, Eq.blendMode = qq.blendMode, qq.colorGradients)
          for (const Oq of qq.colorGradients) Eq.addColorGradient(Oq.gradient, uq.g.FromArray(Oq.color1), Oq.color2 ? uq.g.FromArray(Oq.color2) : void 0);
        if (qq.rampGradients) {
          for (const gq of qq.rampGradients) Eq.addRampGradient(gq.gradient, uq.d.FromArray(gq.color));
          Eq.useRampGradients = qq.useRampGradients
        }
        if (qq.colorRemapGradients)
          for (const Oq of qq.colorRemapGradients) Eq.addColorRemapGradient(Oq.gradient, void 0 !== Oq.factor1 ? Oq.factor1 : Oq.factor, Oq.factor2);
        if (qq.alphaRemapGradients)
          for (const Oq of qq.alphaRemapGradients) Eq.addAlphaRemapGradient(Oq.gradient, void 0 !== Oq.factor1 ? Oq.factor1 : Oq.factor, Oq.factor2);
        if (qq.sizeGradients)
          for (const Oq of qq.sizeGradients) Eq.addSizeGradient(Oq.gradient, void 0 !== Oq.factor1 ? Oq.factor1 : Oq.factor, Oq.factor2);
        if (qq.angularSpeedGradients)
          for (const Oq of qq.angularSpeedGradients) Eq.addAngularSpeedGradient(Oq.gradient, void 0 !== Oq.factor1 ? Oq.factor1 : Oq.factor, Oq.factor2);
        if (qq.velocityGradients)
          for (const Oq of qq.velocityGradients) Eq.addVelocityGradient(Oq.gradient, void 0 !== Oq.factor1 ? Oq.factor1 : Oq.factor, Oq.factor2);
        if (qq.dragGradients)
          for (const Oq of qq.dragGradients) Eq.addDragGradient(Oq.gradient, void 0 !== Oq.factor1 ? Oq.factor1 : Oq.factor, Oq.factor2);
        if (qq.emitRateGradients)
          for (const Oq of qq.emitRateGradients) Eq.addEmitRateGradient(Oq.gradient, void 0 !== Oq.factor1 ? Oq.factor1 : Oq.factor, Oq.factor2);
        if (qq.startSizeGradients)
          for (const Oq of qq.startSizeGradients) Eq.addStartSizeGradient(Oq.gradient, void 0 !== Oq.factor1 ? Oq.factor1 : Oq.factor, Oq.factor2);
        if (qq.lifeTimeGradients)
          for (const Oq of qq.lifeTimeGradients) Eq.addLifeTimeGradient(Oq.gradient, void 0 !== Oq.factor1 ? Oq.factor1 : Oq.factor, Oq.factor2);
        if (qq.limitVelocityGradients) {
          for (const gq of qq.limitVelocityGradients) Eq.addLimitVelocityGradient(gq.gradient, void 0 !== gq.factor1 ? gq.factor1 : gq.factor, gq.factor2);
          Eq.limitVelocityDamping = qq.limitVelocityDamping
        }
        if (qq.noiseTexture && lq) {
          const gq = (0, TE.e)("BABYLON.ProceduralTexture");
          Eq.noiseTexture = gq.Parse(qq.noiseTexture, lq, Yq)
        }
        let xq;
        if (qq.particleEmitterType) {
          switch (qq.particleEmitterType.type) {
            case "SphereParticleEmitter":
              xq = new dq;
              break;
            case "SphereDirectedParticleEmitter":
              xq = new jq;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              xq = new oq;
              break;
            case "ConeDirectedParticleEmitter":
              xq = new Pq;
              break;
            case "CylinderParticleEmitter":
              xq = new Hq.e;
              break;
            case "CylinderDirectedParticleEmitter":
              xq = new Hq.d;
              break;
            case "HemisphericParticleEmitter":
              xq = new Vq;
              break;
            case "PointParticleEmitter":
              xq = new aq;
              break;
            case "MeshParticleEmitter":
              xq = new Qq;
              break;
            case "CustomParticleEmitter":
              xq = new LE;
              break;
            default:
              xq = new Bq.b
          }
          xq.parse(qq.particleEmitterType, lq)
        } else xq = new Bq.b, xq.parse(qq, lq);
        Eq.particleEmitterType = xq, Eq.startSpriteCellID = qq.startSpriteCellID, Eq.endSpriteCellID = qq.endSpriteCellID, Eq.spriteCellLoop = qq.spriteCellLoop ?? !0, Eq.spriteCellWidth = qq.spriteCellWidth, Eq.spriteCellHeight = qq.spriteCellHeight, Eq.spriteCellChangeSpeed = qq.spriteCellChangeSpeed, Eq.spriteRandomStartCell = qq.spriteRandomStartCell, Eq.disposeOnStop = qq.disposeOnStop ?? !1, Eq.manualEmitCount = qq.manualEmitCount ?? -1
      }
      static Parse(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          lq = arguments.length > 4 ? arguments[4] : void 0;
        const mq = qq.name;
        let xq, Aq, cq = null,
          Bq = null;
        if (Eq instanceof SE.b ? xq = Eq : (Aq = Eq, xq = Aq.Ba()), qq.customShader && (0, Sq.b)(xq.createEffectForParticles)) {
          Bq = qq.customShader;
          const Eq = Bq.shaderOptions.defines.length > 0 ? Bq.shaderOptions.defines.join("\n") : "";
          cq = xq.createEffectForParticles(Bq.shaderPath.fragmentElement, Bq.shaderOptions.uniforms, Bq.shaderOptions.samplers, Eq)
        }
        const Wq = new sE(mq, lq || qq.WB, Eq, cq, qq.isAnimationSheetEnabled);
        if (Wq.customShader = Bq, Wq._rootUrl = gq, qq.id && (Wq.id = qq.id), qq.subEmitters) {
          Wq.subEmitters = [];
          for (const Yq of qq.subEmitters) {
            const qq = [];
            for (const lq of Yq) qq.push(zE.Parse(lq, Eq, gq));
            Wq.subEmitters.push(qq)
          }
        }
        if (qq.attractors)
          for (const uq of qq.attractors) {
            const qq = new UE;
            qq.position = Oq.q.FromArray(uq.position), qq.strength = uq.strength, Wq.addAttractor(qq)
          }
        return sE._Parse(qq, Wq, Eq, gq), qq.textureMask && (Wq.textureMask = uq.g.FromArray(qq.textureMask)), qq.worldOffset && (Wq.worldOffset = Oq.q.FromArray(qq.worldOffset)), qq.preventAutoStart && (Wq.preventAutoStart = qq.preventAutoStart), qq.metadata && (Wq.metadata = qq.metadata), Yq || Wq.preventAutoStart || Wq.start(), Wq
      }
      serialize() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = {};
        if (sE._Serialize(Eq, this, qq), Eq.textureMask = this.textureMask.bYq(), Eq.customShader = this.customShader, Eq.preventAutoStart = this.preventAutoStart, Eq.worldOffset = this.worldOffset.bYq(), this.metadata && (Eq.metadata = this.metadata), this.subEmitters) {
          Eq.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const gq of this._subEmitters) {
            const Yq = [];
            for (const Eq of gq) Eq.particleSystem.doNotSerialize || Yq.push(Eq.serialize(qq));
            Eq.subEmitters.push(Yq)
          }
        }
        if (this._attractors && this._attractors.length) {
          Eq.attractors = [];
          for (const qq of this._attractors) Eq.attractors.push(qq.serialize())
        }
        return Eq
      }
      static _Serialize(qq, Eq, gq) {
        if (qq.name = Eq.name, qq.id = Eq.id, qq.WB = Eq.getCapacity(), qq.disposeOnStop = Eq.disposeOnStop, qq.manualEmitCount = Eq.manualEmitCount, Eq.emitter.position) {
          const gq = Eq.emitter;
          qq.emitterId = gq.id
        } else {
          const gq = Eq.emitter;
          qq.emitter = gq.bYq()
        }
        if (Eq.particleEmitterType && (qq.particleEmitterType = Eq.particleEmitterType.serialize()), Eq.particleTexture)
          if (gq) qq.texture = Eq.particleTexture.serialize();
          else {
            const gq = Eq.particleTexture;
            qq.textureName = Eq.particleTexture.name, qq.invertY = !!gq._invertY;
            const Yq = {};
            for (const qq of FE) Yq[qq] = gq[qq];
            Yq.samplingMode = gq.samplingMode, qq.textureSettings = Yq
          } qq.isLocal = Eq.isLocal, pE.d.AppendSerializedAnimations(Eq, qq), qq.beginAnimationOnStart = Eq.beginAnimationOnStart, qq.beginAnimationFrom = Eq.beginAnimationFrom, qq.beginAnimationTo = Eq.beginAnimationTo, qq.beginAnimationLoop = Eq.beginAnimationLoop, qq.startDelay = Eq.startDelay, qq.renderingGroupId = Eq.renderingGroupId, qq.isBillboardBased = Eq.isBillboardBased, qq.billboardMode = Eq.billboardMode, qq.minAngularSpeed = Eq.minAngularSpeed, qq.maxAngularSpeed = Eq.maxAngularSpeed, qq.minSize = Eq.minSize, qq.maxSize = Eq.maxSize, qq.minScaleX = Eq.minScaleX, qq.maxScaleX = Eq.maxScaleX, qq.minScaleY = Eq.minScaleY, qq.maxScaleY = Eq.maxScaleY, qq.minEmitPower = Eq.minEmitPower, qq.maxEmitPower = Eq.maxEmitPower, qq.minLifeTime = Eq.minLifeTime, qq.maxLifeTime = Eq.maxLifeTime, qq.emitRate = Eq.emitRate, qq.gravity = Eq.gravity.bYq(), qq.noiseStrength = Eq.noiseStrength.bYq(), qq.color1 = Eq.color1.bYq(), qq.color2 = Eq.color2.bYq(), qq.colorDead = Eq.colorDead.bYq(), qq.updateSpeed = Eq.updateSpeed, qq.targetStopDuration = Eq.targetStopDuration, qq.blendMode = Eq.blendMode, qq.preWarmCycles = Eq.preWarmCycles, qq.preWarmStepOffset = Eq.preWarmStepOffset, qq.minInitialRotation = Eq.minInitialRotation, qq.maxInitialRotation = Eq.maxInitialRotation, qq.startSpriteCellID = Eq.startSpriteCellID, qq.spriteCellLoop = Eq.spriteCellLoop, qq.endSpriteCellID = Eq.endSpriteCellID, qq.spriteCellChangeSpeed = Eq.spriteCellChangeSpeed, qq.spriteCellWidth = Eq.spriteCellWidth, qq.spriteCellHeight = Eq.spriteCellHeight, qq.spriteRandomStartCell = Eq.spriteRandomStartCell, qq.isAnimationSheetEnabled = Eq.isAnimationSheetEnabled, qq.useLogarithmicDepth = Eq.useLogarithmicDepth;
        const Yq = Eq.getColorGradients();
        if (Yq) {
          qq.colorGradients = [];
          for (const Eq of Yq) {
            const gq = {
              gradient: Eq.gradient,
              color1: Eq.color1.bYq()
            };
            Eq.color2 ? gq.color2 = Eq.color2.bYq() : gq.color2 = Eq.color1.bYq(), qq.colorGradients.push(gq)
          }
        }
        const lq = Eq.getRampGradients();
        if (lq) {
          qq.rampGradients = [];
          for (const Eq of lq) {
            const gq = {
              gradient: Eq.gradient,
              color: Eq.color.bYq()
            };
            qq.rampGradients.push(gq)
          }
          qq.useRampGradients = Eq.useRampGradients
        }
        const Oq = Eq.getColorRemapGradients();
        if (Oq) {
          qq.colorRemapGradients = [];
          for (const Eq of Oq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.colorRemapGradients.push(gq)
          }
        }
        const mq = Eq.getAlphaRemapGradients();
        if (mq) {
          qq.alphaRemapGradients = [];
          for (const Eq of mq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.alphaRemapGradients.push(gq)
          }
        }
        const xq = Eq.getSizeGradients();
        if (xq) {
          qq.sizeGradients = [];
          for (const Eq of xq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.sizeGradients.push(gq)
          }
        }
        const Aq = Eq.getAngularSpeedGradients();
        if (Aq) {
          qq.angularSpeedGradients = [];
          for (const Eq of Aq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.angularSpeedGradients.push(gq)
          }
        }
        const cq = Eq.getVelocityGradients();
        if (cq) {
          qq.velocityGradients = [];
          for (const Eq of cq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.velocityGradients.push(gq)
          }
        }
        const uq = Eq.getDragGradients();
        if (uq) {
          qq.dragGradients = [];
          for (const Eq of uq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.dragGradients.push(gq)
          }
        }
        const Bq = Eq.getEmitRateGradients();
        if (Bq) {
          qq.emitRateGradients = [];
          for (const Eq of Bq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.emitRateGradients.push(gq)
          }
        }
        const Wq = Eq.getStartSizeGradients();
        if (Wq) {
          qq.startSizeGradients = [];
          for (const Eq of Wq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.startSizeGradients.push(gq)
          }
        }
        const Nq = Eq.getLifeTimeGradients();
        if (Nq) {
          qq.lifeTimeGradients = [];
          for (const Eq of Nq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.lifeTimeGradients.push(gq)
          }
        }
        const aq = Eq.getLimitVelocityGradients();
        if (aq) {
          qq.limitVelocityGradients = [];
          for (const Eq of aq) {
            const gq = {
              gradient: Eq.gradient,
              factor1: Eq.factor1
            };
            void 0 !== Eq.factor2 ? gq.factor2 = Eq.factor2 : gq.factor2 = Eq.factor1, qq.limitVelocityGradients.push(gq)
          }
          qq.limitVelocityDamping = Eq.limitVelocityDamping
        }
        Eq.noiseTexture && (qq.noiseTexture = Eq.noiseTexture.serialize())
      }
      clone(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = {
          ...this._customWrappers
        };
        let lq = null;
        const Oq = this._engine;
        if ((0, Sq.b)(Oq.createEffectForParticles) && null != this.customShader) {
          lq = this.customShader;
          const qq = lq.shaderOptions.defines.length > 0 ? lq.shaderOptions.defines.join("\n") : "",
            Eq = Oq.createEffectForParticles(lq.shaderPath.fragmentElement, lq.shaderOptions.uniforms, lq.shaderOptions.samplers, qq);
          Yq[0] ? Yq[0].effect = Eq : this.setCustomEffect(Eq, 0)
        }
        const mq = this.serialize(gq),
          xq = !1 === gq && this.particleTexture ? this.particleTexture.clone() : null;
        xq && (mq.textureName = void 0);
        const Aq = sE.Parse(mq, this._scene || this._engine, this._rootUrl);
        return Aq.name = qq, Aq.customShader = lq, Aq._customWrappers = Yq, xq && (Aq.particleTexture = xq), void 0 === Eq && (Eq = this.emitter), this.noiseTexture && (Aq.noiseTexture = this.noiseTexture.clone()), Aq.emitter = Eq, this.preventAutoStart || Aq.start(), Aq
      }
    }
    sE.BILLBOARDMODE_Y = 2, sE.BILLBOARDMODE_ALL = 7, sE.BILLBOARDMODE_STRETCHED = 8, sE.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let XE = !1;
    XE || (XE = !0, zE._ParseParticleSystem = sE.Parse)
  },
  41383: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      SkyMaterial: () => oq,
      _MaxColorValueForRenderTarget: () => Hq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(39779),
      mq = gq(37131),
      xq = gq(40033),
      Aq = gq(40096),
      cq = gq(41347),
      uq = gq(40901),
      Bq = gq(39833),
      Wq = gq(37171),
      Nq = gq(40123),
      aq = gq(40104),
      Vq = gq(40083),
      dq = gq(40079);
    class jq extends xq.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Hq(qq) {
      switch (qq) {
        case cq.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case cq.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let oq = (() => {
      var qq;
      let Eq, xq, cq, Wq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq, Zq = Aq.b,
        fq = [],
        Mq = [],
        Tq = [],
        zq = [],
        Sq = [],
        pq = [],
        Gq = [],
        Lq = [],
        Jq = [],
        kq = [],
        Rq = [],
        Uq = [],
        Fq = [],
        sq = [],
        Xq = [],
        wq = [],
        Kq = [],
        Cq = [],
        Iq = [],
        eq = [],
        Dq = [],
        qE = [],
        EE = [],
        gE = [],
        YE = [],
        lE = [],
        OE = [],
        mE = [],
        xE = [],
        AE = [];
      return qq = class extends Zq {
        constructor(qq, Eq) {
          super(qq, Eq, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Yq.i)(this, fq, 1), this.turbidity = ((0, Yq.i)(this, Mq), (0, Yq.i)(this, Tq, 10)), this.rayleigh = ((0, Yq.i)(this, zq), (0, Yq.i)(this, Sq, 2)), this.mieCoefficient = ((0, Yq.i)(this, pq), (0, Yq.i)(this, Gq, .005)), this.mieDirectionalG = ((0, Yq.i)(this, Lq), (0, Yq.i)(this, Jq, .8)), this.distance = ((0, Yq.i)(this, kq), (0, Yq.i)(this, Rq, 500)), this.inclination = ((0, Yq.i)(this, Uq), (0, Yq.i)(this, Fq, .49)), this.azimuth = ((0, Yq.i)(this, sq), (0, Yq.i)(this, Xq, .25)), this.sunPosition = ((0, Yq.i)(this, wq), (0, Yq.i)(this, Kq, new mq.Na(0, 100, 0))), this.useSunPosition = ((0, Yq.i)(this, Cq), (0, Yq.i)(this, Iq, !1)), this.cameraOffset = ((0, Yq.i)(this, eq), (0, Yq.i)(this, Dq, mq.Na.Zero())), this.up = ((0, Yq.i)(this, qE), (0, Yq.i)(this, EE, mq.Na.Up())), this.dithering = ((0, Yq.i)(this, gE), (0, Yq.i)(this, YE, !1)), this.rawHdrOutput = ((0, Yq.i)(this, lE), (0, Yq.i)(this, OE, !1)), this.cloudiness = ((0, Yq.i)(this, mE), (0, Yq.i)(this, xE, 0)), this._cameraPosition = ((0, Yq.i)(this, AE), mq.Na.Zero()), this._skyOrientation = new mq.Quaternion
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
        isReadyForSubMesh(Eq, gq) {
          const Yq = gq._drawWrapper;
          if (this.isFrozen && Yq.effect && Yq._wasPreviouslyReady) return !0;
          gq.materialDefines || (gq.materialDefines = new jq);
          const lq = gq.materialDefines,
            Oq = this.ZJ();
          if (this._isReadyForSubMesh(gq)) return !0;
          if ((0, dq.fb)(Eq, Oq, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, lq, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, dq.R)(Eq, lq, !0, !1), lq.IMAGEPROCESSINGPOSTPROCESS !== Oq.imageProcessingConfiguration.applyByPostProcess && lq.markAsMiscDirty(), lq.DITHER !== this.dithering && lq.markAsMiscDirty(), lq.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && lq.markAsMiscDirty(), lq.isDirty) {
            lq.markAsProcessed(), Oq.resetCachedMaterial();
            const Eq = new aq.c;
            lq.FOG && Eq.addFallback(1, "FOG"), lq.IMAGEPROCESSINGPOSTPROCESS = Oq.imageProcessingConfiguration.applyByPostProcess, lq.DITHER = this.dithering, lq.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Yq = [uq.f.PositionKind];
            lq.VERTEXCOLOR && Yq.push(uq.f.ColorKind);
            const mq = "sky",
              xq = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Vq.e)(xq);
            const Aq = lq.toString();
            gq.setEffect(Oq.Ba().createEffect(mq, {
              attributes: Yq,
              uniformsNames: xq,
              uniformBuffersNames: [],
              samplers: [],
              defines: Aq,
              fallbacks: Eq,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: qq._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Oq.Ba()), lq, this._materialContext)
          }
          return !(!gq.effect || !gq.effect.isReady()) && (lq._renderId = Oq.getRenderId(), Yq._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(qq, Eq, gq) {
          const Yq = this.ZJ(),
            lq = gq.materialDefines;
          if (!lq) return;
          const Oq = gq.effect;
          if (!Oq) return;
          this._activeEffect = Oq, this.bindOnlyWorldMatrix(qq), this._activeEffect.setMatrix("viewProjection", Yq.getTransformMatrix()), this._mustRebind(Yq, Oq, gq) && ((0, Vq.i)(Oq, this, Yq), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, dq.o)(lq, Oq, Yq)), Yq.fogEnabled && Eq.applyFog && Yq.fogMode !== Bq.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", Yq.getViewMatrix()), (0, dq.f)(Yq, Eq, this._activeEffect, this.rawHdrOutput);
          const xq = Yq.activeCamera;
          if (xq) {
            const qq = xq.getWorldMatrix();
            this._cameraPosition.x = qq.m[12], this._cameraPosition.y = qq.m[13], this._cameraPosition.z = qq.m[14], this._activeEffect.setVector3("cameraPosition", mq.TmpVectors.Na[0].WG(this._cameraPosition).KYq(Yq.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const qq = Yq.Ba()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Hq(qq?.texture?.type))
          }
          if (!this.useSunPosition) {
            const qq = Math.PI * (this.inclination - .5),
              Eq = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Eq) * Math.cos(qq), this.sunPosition.y = this.distance * Math.sin(-qq), this.sunPosition.z = this.distance * Math.sin(Eq) * Math.cos(qq), mq.Quaternion.FromUnitVectorsToRef(mq.Na.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Eq, this._activeEffect, gq)
        }
        getAnimatables() {
          return []
        }
        dispose(qq) {
          super.dispose(qq)
        }
        clone(Eq) {
          return Oq.d.Clone((() => new qq(Eq, this.ZJ())), this)
        }
        serialize() {
          const qq = super.serialize();
          return qq.customType = "BABYLON.SkyMaterial", qq
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Eq, gq, Yq) {
          return Oq.d.Parse((() => new qq(Eq.name, gq)), Eq, gq, Yq)
        }
      }, (() => {
        const gq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zq[Symbol.metadata] ?? null) : void 0;
        Eq = [(0, lq.M)()], xq = [(0, lq.M)()], cq = [(0, lq.M)()], Wq = [(0, lq.M)()], oq = [(0, lq.M)()], Pq = [(0, lq.M)()], Qq = [(0, lq.M)()], yq = [(0, lq.M)()], tq = [(0, lq.I)()], rq = [(0, lq.M)()], vq = [(0, lq.I)()], hq = [(0, lq.I)()], nq = [(0, lq.M)()], bq = [(0, lq.M)()], iq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: qq => "luminance" in qq,
            get: qq => qq.luminance,
            set: (qq, Eq) => {
              qq.luminance = Eq
            }
          },
          metadata: gq
        }, fq, Mq), (0, Yq.f)(null, null, xq, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: qq => "turbidity" in qq,
            get: qq => qq.turbidity,
            set: (qq, Eq) => {
              qq.turbidity = Eq
            }
          },
          metadata: gq
        }, Tq, zq), (0, Yq.f)(null, null, cq, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: qq => "rayleigh" in qq,
            get: qq => qq.rayleigh,
            set: (qq, Eq) => {
              qq.rayleigh = Eq
            }
          },
          metadata: gq
        }, Sq, pq), (0, Yq.f)(null, null, Wq, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: qq => "mieCoefficient" in qq,
            get: qq => qq.mieCoefficient,
            set: (qq, Eq) => {
              qq.mieCoefficient = Eq
            }
          },
          metadata: gq
        }, Gq, Lq), (0, Yq.f)(null, null, oq, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: qq => "mieDirectionalG" in qq,
            get: qq => qq.mieDirectionalG,
            set: (qq, Eq) => {
              qq.mieDirectionalG = Eq
            }
          },
          metadata: gq
        }, Jq, kq), (0, Yq.f)(null, null, Pq, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: qq => "distance" in qq,
            get: qq => qq.distance,
            set: (qq, Eq) => {
              qq.distance = Eq
            }
          },
          metadata: gq
        }, Rq, Uq), (0, Yq.f)(null, null, Qq, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: qq => "inclination" in qq,
            get: qq => qq.inclination,
            set: (qq, Eq) => {
              qq.inclination = Eq
            }
          },
          metadata: gq
        }, Fq, sq), (0, Yq.f)(null, null, yq, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: qq => "azimuth" in qq,
            get: qq => qq.azimuth,
            set: (qq, Eq) => {
              qq.azimuth = Eq
            }
          },
          metadata: gq
        }, Xq, wq), (0, Yq.f)(null, null, tq, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: qq => "sunPosition" in qq,
            get: qq => qq.sunPosition,
            set: (qq, Eq) => {
              qq.sunPosition = Eq
            }
          },
          metadata: gq
        }, Kq, Cq), (0, Yq.f)(null, null, rq, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: qq => "useSunPosition" in qq,
            get: qq => qq.useSunPosition,
            set: (qq, Eq) => {
              qq.useSunPosition = Eq
            }
          },
          metadata: gq
        }, Iq, eq), (0, Yq.f)(null, null, vq, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: qq => "cameraOffset" in qq,
            get: qq => qq.cameraOffset,
            set: (qq, Eq) => {
              qq.cameraOffset = Eq
            }
          },
          metadata: gq
        }, Dq, qE), (0, Yq.f)(null, null, hq, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: qq => "up" in qq,
            get: qq => qq.up,
            set: (qq, Eq) => {
              qq.up = Eq
            }
          },
          metadata: gq
        }, EE, gE), (0, Yq.f)(null, null, nq, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: qq => "dithering" in qq,
            get: qq => qq.dithering,
            set: (qq, Eq) => {
              qq.dithering = Eq
            }
          },
          metadata: gq
        }, YE, lE), (0, Yq.f)(null, null, bq, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: qq => "rawHdrOutput" in qq,
            get: qq => qq.rawHdrOutput,
            set: (qq, Eq) => {
              qq.rawHdrOutput = Eq
            }
          },
          metadata: gq
        }, OE, mE), (0, Yq.f)(null, null, iq, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: qq => "cloudiness" in qq,
            get: qq => qq.cloudiness,
            set: (qq, Eq) => {
              qq.cloudiness = Eq
            }
          },
          metadata: gq
        }, xE, AE), gq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gq
        })
      })(), qq._ShaderLoader = new Nq.c((() => [gq.e(321).then((() => gq(61180))), gq.e(314).then((() => gq(61184)))]), (() => [gq.e(338).then((() => gq(61190))), gq.e(332).then((() => gq(61198)))])), qq
    })();
    (0, Wq.g)("BABYLON.SkyMaterial", oq)
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);