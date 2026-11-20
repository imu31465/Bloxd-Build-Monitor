export const id = 294;
export const ids = [294];
export const modules = {
  41025: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(39536),
      Wb = sb(41032);
    class ab {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = sb, this.jsb = [], this._maxBlockCapacity = cb || 64, this._selectionContent = new kb.b(1024), this._creationFunc = bb
      }
      update(bb, cb, sb) {
        Wb.e._CreateBlocks(bb, cb, sb, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      Ksb(bb) {
        for (let cb = 0; cb < this.blocks.length; cb++) {
          this.blocks[cb].addEntry(bb)
        }
      }
      pY(bb) {
        for (let cb = 0; cb < this.blocks.length; cb++) {
          this.blocks[cb].removeEntry(bb)
        }
      }
      select(bb, cb) {
        this._selectionContent.reset();
        for (let sb = 0; sb < this.blocks.length; sb++) {
          this.blocks[sb].select(bb, this._selectionContent, cb)
        }
        return cb ? this._selectionContent.concat(this.jsb) : this._selectionContent.concatWithNoDuplicate(this.jsb), this._selectionContent
      }
      intersects(bb, cb, sb) {
        this._selectionContent.reset();
        for (let kb = 0; kb < this.blocks.length; kb++) {
          this.blocks[kb].intersects(bb, cb, this._selectionContent, sb)
        }
        return sb ? this._selectionContent.concat(this.jsb) : this._selectionContent.concatWithNoDuplicate(this.jsb), this._selectionContent
      }
      intersectsRay(bb) {
        this._selectionContent.reset();
        for (let cb = 0; cb < this.blocks.length; cb++) {
          this.blocks[cb].intersectsRay(bb, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.jsb), this._selectionContent
      }
    }
    ab.CreationFuncForMeshes = (bb, cb) => {
      const sb = bb.PJ();
      !bb.isBlocked && sb.boundingBox.intersectsMinMax(cb.Asb, cb.dsb) && cb.entries.push(bb)
    }, ab.CreationFuncForSubMeshes = (bb, cb) => {
      bb.PJ().boundingBox.intersectsMinMax(cb.Asb, cb.dsb) && cb.entries.push(bb)
    }
  },
  41032: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab
    });
    var kb = sb(36656),
      Wb = sb(39750);
    class ab {
      constructor(bb, cb, sb, kb, Wb, ab) {
        this.entries = [], this.psb = new Array, this._capacity = sb, this._depth = kb, this._maxDepth = Wb, this._creationFunc = ab, this._minPoint = bb, this._maxPoint = cb, this.psb.push(bb.clone()), this.psb.push(cb.clone()), this.psb.push(bb.clone()), this.psb[2].x = cb.x, this.psb.push(bb.clone()), this.psb[3].y = cb.y, this.psb.push(bb.clone()), this.psb[4].z = cb.z, this.psb.push(cb.clone()), this.psb[5].z = bb.z, this.psb.push(cb.clone()), this.psb[6].x = bb.x, this.psb.push(cb.clone()), this.psb[7].y = bb.y
      }
      get GM() {
        return this._capacity
      }
      get Asb() {
        return this._minPoint
      }
      get dsb() {
        return this._maxPoint
      }
      addEntry(bb) {
        if (this.blocks)
          for (let cb = 0; cb < this.blocks.length; cb++) {
            this.blocks[cb].addEntry(bb)
          } else this._creationFunc(bb, this), this.entries.length > this.GM && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(bb) {
        if (this.blocks) {
          for (let cb = 0; cb < this.blocks.length; cb++) {
            this.blocks[cb].removeEntry(bb)
          }
          return
        }
        const cb = this.entries.indexOf(bb);
        cb > -1 && this.entries.splice(cb, 1)
      }
      addEntries(bb) {
        for (let cb = 0; cb < bb.length; cb++) {
          const sb = bb[cb];
          this.addEntry(sb)
        }
      }
      select(bb, cb, sb) {
        if (Wb.c.IsInFrustum(this.psb, bb)) {
          if (this.blocks) {
            for (let kb = 0; kb < this.blocks.length; kb++) {
              this.blocks[kb].select(bb, cb, sb)
            }
            return
          }
          sb ? cb.concat(this.entries) : cb.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(bb, cb, sb, kb) {
        if (Wb.c.IntersectsSphere(this._minPoint, this._maxPoint, bb, cb)) {
          if (this.blocks) {
            for (let Wb = 0; Wb < this.blocks.length; Wb++) {
              this.blocks[Wb].intersects(bb, cb, sb, kb)
            }
            return
          }
          kb ? sb.concat(this.entries) : sb.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(bb, cb) {
        if (bb.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let sb = 0; sb < this.blocks.length; sb++) {
              this.blocks[sb].intersectsRay(bb, cb)
            }
            return
          }
          cb.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        ab._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(bb, cb, sb, Wb, Tb, Ub, Ib, Hb) {
        Ib.blocks = new Array;
        const fb = new kb.p((cb.x - bb.x) / 2, (cb.y - bb.y) / 2, (cb.z - bb.z) / 2);
        for (let kb = 0; kb < 2; kb++)
          for (let cb = 0; cb < 2; cb++)
            for (let Mb = 0; Mb < 2; Mb++) {
              const Xb = bb.add(fb.multiplyByFloats(kb, cb, Mb)),
                nb = bb.add(fb.multiplyByFloats(kb + 1, cb + 1, Mb + 1)),
                mb = new ab(Xb, nb, Wb, Tb + 1, Ub, Hb);
              mb.addEntries(sb), Ib.blocks.push(mb)
            }
      }
    }
  },
  41035: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => fb
    });
    var kb = sb(39524),
      Wb = sb(36656),
      ab = sb(39865),
      Tb = sb(40975),
      Ub = sb(39608),
      Ib = sb(36677),
      Hb = sb(41025);
    class fb {
      constructor(bb) {
        this.name = Ub.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Tb.u(Wb.p.Zero(), new Wb.p(1, 1, 1)), (bb = bb || Ib.d.LastCreatedScene) && (this.aQ = bb, this.aQ.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.aQ.getActiveSubMeshCandidates = bb => this.getActiveSubMeshCandidates(bb), this.aQ.getCollidingSubMeshCandidates = (bb, cb) => this.getCollidingSubMeshCandidates(bb, cb), this.aQ.getIntersectingSubMeshCandidates = (bb, cb) => this.getIntersectingSubMeshCandidates(bb, cb))
      }
      register() {
        this.aQ.onMeshRemovedObservable.add((bb => {
          const cb = this.aQ.selectionOctree;
          if (void 0 !== cb && null !== cb) {
            const sb = cb.jsb.indexOf(bb); - 1 !== sb && cb.jsb.splice(sb, 1)
          }
        })), this.aQ.onMeshImportedObservable.add((bb => {
          const cb = this.aQ.selectionOctree;
          void 0 !== cb && null !== cb && cb.Ksb(bb)
        }))
      }
      getActiveMeshCandidates() {
        return this.aQ.Tkb?.select(this.aQ.frustumPlanes) || this.aQ._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(bb) {
        if (bb._submeshesOctree && bb.useOctreeForRenderingSelection) {
          return bb._submeshesOctree.select(this.aQ.frustumPlanes)
        }
        return this.aQ._getDefaultSubMeshCandidates(bb)
      }
      getIntersectingSubMeshCandidates(bb, cb) {
        if (bb._submeshesOctree && bb.useOctreeForPicking) {
          Tb.u.TransformToRef(cb, bb.getWorldMatrix(), this._tempRay);
          return bb._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.aQ._getDefaultSubMeshCandidates(bb)
      }
      getCollidingSubMeshCandidates(bb, cb) {
        if (bb._submeshesOctree && bb.useOctreeForCollisions) {
          const sb = cb._velocityWorldLength + Math.max(cb._radius.x, cb._radius.y, cb._radius.z);
          return bb._submeshesOctree.intersects(cb._basePointWorld, sb)
        }
        return this.aQ._getDefaultSubMeshCandidates(bb)
      }
      rebuild() {}
      dispose() {}
    }
    let Mb = !1;
    Mb || (Mb = !0, kb.c.prototype.createOrUpdateSelectionOctree = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        sb = this._getComponent(Ub.e.NAME_OCTREE);
      sb || (sb = new fb(this), this.Vsb(sb)), this.Tkb || (this.Tkb = new Hb.c(Hb.c.CreationFuncForMeshes, bb, cb));
      const kb = this.getWorldExtends();
      return this.Tkb.update(kb.min, kb.max, this.meshes), this.Tkb
    }, Object.defineProperty(kb.c.prototype, "selectionOctree", {
      get: function() {
        return this.Tkb
      },
      enumerable: !0,
      configurable: !0
    }), ab.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const sb = this.EY();
      let kb = sb._getComponent(Ub.e.NAME_OCTREE);
      kb || (kb = new fb(sb), sb.Vsb(kb)), this._submeshesOctree || (this._submeshesOctree = new Hb.c(Hb.c.CreationFuncForSubMeshes, bb, cb)), this.computeWorldMatrix(!0);
      const Wb = this.PJ().boundingBox;
      return this._submeshesOctree.update(Wb.minimumWorld, Wb.maximumWorld, this.XV), this._submeshesOctree
    })
  },
  40975: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => yb,
      f: () => lb,
      g: () => mb,
      j: () => nb,
      k: () => Bb,
      l: () => gb,
      m: () => Yb,
      n: () => Jb,
      r: () => hb,
      u: () => Mb
    });
    var kb = sb(36661),
      Wb = sb(36656),
      ab = sb(36666),
      Tb = sb(39741),
      Ub = sb(39568),
      Ib = sb(36677),
      Hb = sb(39638);
    const fb = {
      internalPickerForMesh: void 0
    };
    class Mb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kb.d;
        this.origin = bb, this.direction = cb, this.length = sb, this.epsilon = Wb
      }
      clone() {
        return new Mb(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const kb = Mb._TmpVector3[0].I5(bb.x - sb, bb.y - sb, bb.z - sb),
          Wb = Mb._TmpVector3[1].I5(cb.x + sb, cb.y + sb, cb.z + sb);
        let ab, Tb, Ub, Ib, Hb = 0,
          fb = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < kb.x || this.origin.x > Wb.x) return !1
        } else if (ab = 1 / this.direction.x, Tb = (kb.x - this.origin.x) * ab, Ub = (Wb.x - this.origin.x) * ab, Ub === -1 / 0 && (Ub = 1 / 0), Tb > Ub && (Ib = Tb, Tb = Ub, Ub = Ib), Hb = Math.max(Tb, Hb), fb = Math.min(Ub, fb), Hb > fb) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < kb.y || this.origin.y > Wb.y) return !1
        } else if (ab = 1 / this.direction.y, Tb = (kb.y - this.origin.y) * ab, Ub = (Wb.y - this.origin.y) * ab, Ub === -1 / 0 && (Ub = 1 / 0), Tb > Ub && (Ib = Tb, Tb = Ub, Ub = Ib), Hb = Math.max(Tb, Hb), fb = Math.min(Ub, fb), Hb > fb) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < kb.z || this.origin.z > Wb.z) return !1
        } else if (ab = 1 / this.direction.z, Tb = (kb.z - this.origin.z) * ab, Ub = (Wb.z - this.origin.z) * ab, Ub === -1 / 0 && (Ub = 1 / 0), Tb > Ub && (Ib = Tb, Tb = Ub, Ub = Ib), Hb = Math.max(Tb, Hb), fb = Math.min(Ub, fb), Hb > fb) return !1;
        return !0
      }
      intersectsBox(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(bb.minimum, bb.maximum, cb)
      }
      intersectsSphere(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = bb.center.x - this.origin.x,
          kb = bb.center.y - this.origin.y,
          Wb = bb.center.z - this.origin.z,
          ab = sb * sb + kb * kb + Wb * Wb,
          Tb = bb.radius + cb,
          Ub = Tb * Tb;
        if (ab <= Ub) return !0;
        const Ib = sb * this.direction.x + kb * this.direction.y + Wb * this.direction.z;
        if (Ib < 0) return !1;
        return ab - Ib * Ib <= Ub
      }
      intersectsTriangle(bb, cb, sb) {
        const kb = Mb._TmpVector3[0],
          ab = Mb._TmpVector3[1],
          Ub = Mb._TmpVector3[2],
          Ib = Mb._TmpVector3[3],
          Hb = Mb._TmpVector3[4];
        cb.subtractToRef(bb, kb), sb.subtractToRef(bb, ab), Wb.p.CrossToRef(this.direction, ab, Ub);
        const fb = Wb.p.Dot(kb, Ub);
        if (0 === fb) return null;
        const Xb = 1 / fb;
        this.origin.subtractToRef(bb, Ib);
        const nb = Wb.p.Dot(Ib, Ub) * Xb;
        if (nb < -this.epsilon || nb > 1 + this.epsilon) return null;
        Wb.p.CrossToRef(Ib, kb, Hb);
        const mb = Wb.p.Dot(this.direction, Hb) * Xb;
        if (mb < -this.epsilon || nb + mb > 1 + this.epsilon) return null;
        const lb = Wb.p.Dot(ab, Hb) * Xb;
        return lb > this.length || lb < 0 ? null : new Tb.c(1 - nb - mb, nb, lb)
      }
      intersectsPlane(bb) {
        let cb;
        const sb = Wb.p.Dot(bb.normal, this.direction);
        if (Math.abs(sb) < 9.99999997475243e-7) return null;
        {
          const kb = Wb.p.Dot(bb.normal, this.origin);
          return cb = (-bb.d - kb) / sb, cb < 0 ? cb < -9.99999997475243e-7 ? null : 0 : cb
        }
      }
      intersectsAxis(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (bb) {
          case "y": {
            const bb = (this.origin.y - cb) / this.direction.y;
            return bb > 0 ? null : new Wb.p(this.origin.x + this.direction.x * -bb, cb, this.origin.z + this.direction.z * -bb)
          }
          case "x": {
            const bb = (this.origin.x - cb) / this.direction.x;
            return bb > 0 ? null : new Wb.p(cb, this.origin.y + this.direction.y * -bb, this.origin.z + this.direction.z * -bb)
          }
          case "z": {
            const bb = (this.origin.z - cb) / this.direction.z;
            return bb > 0 ? null : new Wb.p(this.origin.x + this.direction.x * -bb, this.origin.y + this.direction.y * -bb, cb)
          }
          default:
            return null
        }
      }
      Ykb(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ab = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ub = Wb.m.Matrix[0];
        return bb.getWorldMatrix().invertToRef(Ub), this._tmpRay ? Mb.TransformToRef(this, Ub, this._tmpRay) : this._tmpRay = Mb.Transform(this, Ub), bb.intersects(this._tmpRay, cb, sb, kb, ab, Tb)
      }
      intersectsMeshes(bb, cb, sb) {
        sb ? sb.length = 0 : sb = [];
        for (let kb = 0; kb < bb.length; kb++) {
          const Wb = this.Ykb(bb[kb], cb);
          Wb.hit && sb.push(Wb)
        }
        return sb.sort(this._comparePickingInfo), sb
      }
      _comparePickingInfo(bb, cb) {
        return bb.distance < cb.distance ? -1 : bb.distance > cb.distance ? 1 : 0
      }
      intersectionSegment(bb, cb, sb) {
        const kb = this.origin,
          ab = Wb.m.Fm[0],
          Tb = Wb.m.Fm[1],
          Ub = Wb.m.Fm[2],
          Ib = Wb.m.Fm[3];
        cb.subtractToRef(bb, ab), this.direction.scaleToRef(Mb._Rayl, Ub), kb.addToRef(Ub, Tb), bb.subtractToRef(kb, Ib);
        const Hb = Wb.p.Dot(ab, ab),
          fb = Wb.p.Dot(ab, Ub),
          Xb = Wb.p.Dot(Ub, Ub),
          nb = Wb.p.Dot(ab, Ib),
          mb = Wb.p.Dot(Ub, Ib),
          lb = Hb * Xb - fb * fb;
        let Qb, eb, Cb = lb,
          Nb = lb;
        lb < Mb._Smallnum ? (Qb = 0, Cb = 1, eb = mb, Nb = Xb) : (Qb = fb * mb - Xb * nb, eb = Hb * mb - fb * nb, Qb < 0 ? (Qb = 0, eb = mb, Nb = Xb) : Qb > Cb && (Qb = Cb, eb = mb + fb, Nb = Xb)), eb < 0 ? (eb = 0, -nb < 0 ? Qb = 0 : -nb > Hb ? Qb = Cb : (Qb = -nb, Cb = Hb)) : eb > Nb && (eb = Nb, -nb + fb < 0 ? Qb = 0 : -nb + fb > Hb ? Qb = Cb : (Qb = -nb + fb, Cb = Hb));
        const Vb = Math.abs(Qb) < Mb._Smallnum ? 0 : Qb / Cb,
          Lb = Math.abs(eb) < Mb._Smallnum ? 0 : eb / Nb,
          ub = Wb.m.Fm[4];
        Ub.scaleToRef(Lb, ub);
        const Yb = Wb.m.Fm[5];
        ab.scaleToRef(Vb, Yb), Yb.addInPlace(Ib);
        const hb = Wb.m.Fm[6];
        Yb.subtractToRef(ub, hb);
        return Lb > 0 && Lb <= this.length && hb.lengthSquared() < sb * sb ? Yb.length() : -1
      }
      update(bb, cb, sb, kb, ab, Tb, Ub) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Mb._RayDistant || (Mb._RayDistant = Mb.Zero()), Mb._RayDistant.unprojectRayToRef(bb, cb, sb, kb, Wb.e.IdentityReadOnly, Tb, Ub);
          const Ib = Wb.m.Matrix[0];
          ab.invertToRef(Ib), Mb.TransformToRef(Mb._RayDistant, Ib, this)
        } else this.unprojectRayToRef(bb, cb, sb, kb, ab, Tb, Ub);
        return this
      }
      static Zero() {
        return new Mb(Wb.p.Zero(), Wb.p.Zero())
      }
      static CreateNew(bb, cb, sb, kb, Wb, ab, Tb) {
        return Mb.Zero().update(bb, cb, sb, kb, Wb, ab, Tb)
      }
      static CreateNewFromTo(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wb.e.IdentityReadOnly;
        const kb = new Mb(new Wb.p(0, 0, 0), new Wb.p(0, 0, 0));
        return Mb.CreateFromToToRef(bb, cb, kb, sb)
      }
      static CreateFromToToRef(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wb.e.IdentityReadOnly;
        sb.origin.ssb(bb);
        const ab = cb.subtractToRef(bb, sb.direction),
          Tb = Math.sqrt(ab.x * ab.x + ab.y * ab.y + ab.z * ab.z);
        return sb.length = Tb, sb.direction.normalize(), Mb.TransformToRef(sb, kb, sb)
      }
      static Transform(bb, cb) {
        const sb = new Mb(new Wb.p(0, 0, 0), new Wb.p(0, 0, 0));
        return Mb.TransformToRef(bb, cb, sb), sb
      }
      static TransformToRef(bb, cb, sb) {
        Wb.p.TransformCoordinatesToRef(bb.origin, cb, sb.origin), Wb.p.TransformNormalToRef(bb.direction, cb, sb.direction), sb.length = bb.length, sb.epsilon = bb.epsilon;
        const kb = sb.direction,
          ab = kb.length();
        if (0 !== ab && 1 !== ab) {
          const bb = 1 / ab;
          kb.x *= bb, kb.y *= bb, kb.z *= bb, sb.length *= ab
        }
        return sb
      }
      unprojectRayToRef(bb, cb, sb, kb, ab, Tb, Ub) {
        const Hb = Wb.m.Matrix[0];
        ab.multiplyToRef(Tb, Hb), Hb.multiplyToRef(Ub, Hb), Hb.invert();
        const fb = Ib.d.LastCreatedEngine,
          Mb = Wb.m.Fm[0];
        Mb.x = bb / sb * 2 - 1, Mb.y = -(cb / kb * 2 - 1), Mb.z = fb?.Dsb ? 1 : fb?.isNDCHalfZRange ? 0 : -1;
        const Xb = Wb.m.Fm[1].I5(Mb.x, Mb.y, 1 - 1e-8),
          nb = Wb.m.Fm[2],
          mb = Wb.m.Fm[3];
        Wb.p.TransformCoordinatesToRef(Mb, Hb, nb), Wb.p.TransformCoordinatesToRef(Xb, Hb, mb), this.origin.ssb(nb), mb.subtractToRef(nb, this.direction), this.direction.normalize()
      }
    }

    function Xb(bb, cb, sb, kb, Wb) {
      let ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Tb = Mb.Zero();
      return nb(bb, cb, sb, kb, Tb, Wb, ab), Tb
    }

    function nb(bb, cb, sb, kb, ab, Tb) {
      let Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ib = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Hb = bb.Sm();
      if (!Tb && !(Tb = bb.activeCamera) && !(Tb = bb.cameraToUseForPointers)) return bb;
      const fb = Tb.viewport,
        Mb = Hb.getRenderHeight(),
        {
          x: Xb,
          y: nb,
          width: mb,
          height: lb
        } = fb.toGlobal(Hb.getRenderWidth(), Mb),
        Qb = 1 / Hb.getHardwareScalingLevel();
      return cb = cb * Qb - Xb, sb = sb * Qb - (Mb - nb - lb), ab.update(cb, sb, mb, lb, kb || Wb.e.IdentityReadOnly, Ub ? Wb.e.IdentityReadOnly : Tb.getViewMatrix(), Tb.getProjectionMatrix(), Ib), bb
    }

    function mb(bb, cb, sb, kb) {
      const Wb = Mb.Zero();
      return lb(bb, cb, sb, Wb, kb), Wb
    }

    function lb(bb, cb, sb, kb, ab) {
      if (!Ub.e) return bb;
      const Tb = bb.Sm();
      if (!ab && !(ab = bb.activeCamera) && !(ab = bb.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Ib = ab.viewport,
        Hb = Tb.getRenderHeight(),
        {
          x: fb,
          y: Mb,
          width: Xb,
          height: nb
        } = Ib.toGlobal(Tb.getRenderWidth(), Hb),
        mb = Wb.e.Identity(),
        lb = 1 / Tb.getHardwareScalingLevel();
      return cb = cb * lb - fb, sb = sb * lb - (Hb - Mb - nb), kb.update(cb, sb, Xb, nb, mb, mb, ab.getProjectionMatrix()), bb
    }

    function Qb(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
      return eb(bb, sb, kb, cb(kb, sb.enableDistantPicking), Wb, ab, Tb, Ub)
    }

    function eb(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
      const Ib = cb.intersects(kb, Wb, Tb, ab, sb, Ub);
      return Ib && Ib.hit ? !Wb && null != bb && Ib.distance >= bb.distance ? null : Ib : null
    }

    function Cb(bb, cb) {
      return "InstancedLinesMesh" === bb || "LinesMesh" === bb ? cb.intersectionThreshold : 0
    }

    function Nb(bb) {
      const cb = bb.getClassName();
      if ("GreasedLineMesh" === cb) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const sb = bb.rawBoundingInfo;
      return {
        rawBoundingInfo: sb,
        intersectionThreshold: sb ? Cb(cb, bb) : 0
      }
    }

    function Vb(bb, cb, sb, kb, Wb) {
      const ab = bb(sb, cb.enableDistantPicking);
      return ab.intersectsSphere(kb.Ikb, Wb) && ab.intersectsBox(kb.boundingBox, Wb) ? ab : null
    }

    function Lb(bb, cb, sb, kb, ab, Tb) {
      let Ib = null;
      const Hb = !!(bb.activeCameras && bb.activeCameras.length > 1 && bb.cameraToUseForPointers !== bb.activeCamera),
        Mb = bb.cameraToUseForPointers || bb.activeCamera,
        Xb = fb.internalPickerForMesh || Qb,
        nb = Xb === Qb;
      for (let Ub = 0; Ub < bb.meshes.length; Ub++) {
        const fb = bb.meshes[Ub];
        if (sb) {
          if (!sb(fb, -1)) continue
        } else if (!fb.isEnabled() || !fb.isVisible || !fb.UQ) continue;
        const mb = Hb && fb.isWorldMatrixCameraDependent(),
          lb = fb.computeWorldMatrix(mb, Mb);
        if (fb.hasThinInstances && fb.vbb) {
          const bb = Xb(Ib, cb, fb, lb, !0, !0, Tb);
          if (bb) {
            if (ab) return bb;
            const {
              rawBoundingInfo: Ub,
              intersectionThreshold: Hb
            } = Nb(fb), Mb = fb._thinInstanceDataStorage.matrixData;
            if (Mb) {
              const bb = Wb.m.Matrix[0],
                mb = Wb.m.Matrix[1],
                Qb = Math.min(fb.W8, Mb.length >> 4);
              for (let Cb = 0; Cb < Qb; Cb++) {
                if (sb && !sb(fb, Cb)) continue;
                Wb.e.FromArrayToRef(Mb, Cb << 4, bb), bb.multiplyToRef(lb, mb);
                const Qb = nb && Ub ? Vb(cb, fb, mb, Ub, Hb) : null;
                if (nb && Ub && !Qb) continue;
                const Nb = nb && Qb ? eb(Ib, fb, mb, Qb, kb, ab, Tb, !0) : Xb(Ib, cb, fb, mb, kb, ab, Tb, !0);
                if (Nb && (Ib = Nb, Ib.thinInstanceIndex = Cb, kb)) return Ib
              }
            }
          }
        } else {
          const bb = Xb(Ib, cb, fb, lb, kb, ab, Tb);
          if (bb && (Ib = bb, kb)) return Ib
        }
      }
      return Ib || new Ub.e
    }

    function ub(bb, cb, sb, kb) {
      if (!Ub.e) return null;
      const ab = [],
        Tb = !!(bb.activeCameras && bb.activeCameras.length > 1 && bb.cameraToUseForPointers !== bb.activeCamera),
        Ib = bb.cameraToUseForPointers || bb.activeCamera,
        Hb = fb.internalPickerForMesh || Qb,
        Mb = Hb === Qb;
      for (let Ub = 0; Ub < bb.meshes.length; Ub++) {
        const fb = bb.meshes[Ub];
        if (sb) {
          if (!sb(fb, -1)) continue
        } else if (!fb.isEnabled() || !fb.isVisible || !fb.UQ) continue;
        const Xb = Tb && fb.isWorldMatrixCameraDependent(),
          nb = fb.computeWorldMatrix(Xb, Ib);
        if (fb.hasThinInstances && fb.vbb) {
          if (Hb(null, cb, fb, nb, !0, !0, kb)) {
            const {
              rawBoundingInfo: bb,
              intersectionThreshold: Tb
            } = Nb(fb), Ub = fb._thinInstanceDataStorage.matrixData;
            if (Ub) {
              const Ib = Wb.m.Matrix[0],
                Xb = Wb.m.Matrix[1],
                mb = Math.min(fb.W8, Ub.length >> 4);
              for (let lb = 0; lb < mb; lb++) {
                if (sb && !sb(fb, lb)) continue;
                Wb.e.FromArrayToRef(Ub, lb << 4, Ib), Ib.multiplyToRef(nb, Xb);
                const mb = Mb && bb ? Vb(cb, fb, Xb, bb, Tb) : null;
                if (Mb && bb && !mb) continue;
                const Qb = Mb && mb ? eb(null, fb, Xb, mb, !1, !1, kb, !0) : Hb(null, cb, fb, Xb, !1, !1, kb, !0);
                Qb && (Qb.thinInstanceIndex = lb, ab.push(Qb))
              }
            }
          }
        } else {
          const bb = Hb(null, cb, fb, nb, !1, !1, kb);
          bb && ab.push(bb)
        }
      }
      return ab
    }

    function Yb(bb, cb, sb, kb, ab, Tb) {
      if (!Ub.e) return null;
      const Ib = Lb(bb, (kb => (bb._tempPickingRay || (bb._tempPickingRay = Mb.Zero()), nb(bb, cb, sb, kb, bb._tempPickingRay, Tb || null), bb._tempPickingRay)), kb, ab, !0);
      return Ib && (Ib.ray = Xb(bb, cb, sb, Wb.e.Identity(), Tb || null)), Ib
    }

    function hb(bb, cb, sb, kb, ab, Tb, Ub) {
      const Ib = Lb(bb, ((kb, Wb) => (bb._tempPickingRay || (bb._tempPickingRay = Mb.Zero()), nb(bb, cb, sb, kb, bb._tempPickingRay, Tb || null, !1, Wb), bb._tempPickingRay)), kb, ab, !1, Ub);
      return Ib && (Ib.ray = Xb(bb, cb, sb, Wb.e.Identity(), Tb || null)), Ib
    }

    function Jb(bb, cb, sb, kb, ab) {
      const Tb = Lb(bb, (sb => (bb._pickWithRayInverseMatrix || (bb._pickWithRayInverseMatrix = Wb.e.Identity()), sb.invertToRef(bb._pickWithRayInverseMatrix), bb._cachedRayForTransform || (bb._cachedRayForTransform = Mb.Zero()), Mb.TransformToRef(cb, bb._pickWithRayInverseMatrix, bb._cachedRayForTransform), bb._cachedRayForTransform)), sb, kb, !1, ab);
      return Tb && (Tb.ray = cb), Tb
    }

    function gb(bb, cb, sb, kb, Wb, ab) {
      return ub(bb, (kb => Xb(bb, cb, sb, kb, Wb || null)), kb, ab)
    }

    function Bb(bb, cb, sb, kb) {
      return ub(bb, (sb => (bb._pickWithRayInverseMatrix || (bb._pickWithRayInverseMatrix = Wb.e.Identity()), sb.invertToRef(bb._pickWithRayInverseMatrix), bb._cachedRayForTransform || (bb._cachedRayForTransform = Mb.Zero()), Mb.TransformToRef(cb, bb._pickWithRayInverseMatrix, bb._cachedRayForTransform), bb._cachedRayForTransform)), sb, kb)
    }

    function tb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        kb = arguments.length > 3 ? arguments[3] : void 0,
        ab = arguments.length > 4 ? arguments[4] : void 0;
      kb || (kb = bb.getWorldMatrix()), cb.length = sb, ab ? cb.origin.ssb(ab) : cb.origin.ssb(bb.position);
      const Tb = Wb.m.Fm[2];
      Tb.set(0, 0, bb._scene.useRightHandedSystem ? -1 : 1);
      const Ub = Wb.m.Fm[3];
      return Wb.p.TransformNormalToRef(Tb, kb, Ub), Wb.p.NormalizeToRef(Ub, cb.direction), cb
    }

    function yb(bb, cb) {
      cb && (cb.prototype.getForwardRay = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        return tb(this, new Mb(Wb.p.Zero(), Wb.p.Zero(), bb), bb, cb, sb)
      }, cb.prototype.getForwardRayToRef = function(bb) {
        return tb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), bb && (Hb.c._IsPickingAvailable = !0, bb.prototype.createPickingRay = function(bb, cb, sb, kb) {
        return Xb(this, bb, cb, sb, kb, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Mb._TmpVector3 = (0, ab.b)(6, Wb.p.Zero), Mb._RayDistant = Mb.Zero(), Mb._Smallnum = 1e-8, Mb._Rayl = 1e9
  },
  40966: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab.u
    });
    var kb = sb(39524),
      Wb = sb(39658),
      ab = sb(40975);
    let Tb = !1;
    Tb || (Tb = !0, (0, ab.c)(kb.c, Wb.c), kb.c.prototype.createPickingRayToRef = function(bb, cb, sb, kb, Wb) {
      let Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ab.j)(this, bb, cb, sb, kb, Wb, Tb, Ub)
    }, kb.c.prototype.createPickingRayInCameraSpace = function(bb, cb, sb) {
      return (0, ab.g)(this, bb, cb, sb)
    }, kb.c.prototype.createPickingRayInCameraSpaceToRef = function(bb, cb, sb, kb) {
      return (0, ab.f)(this, bb, cb, sb, kb)
    }, kb.c.prototype.pickWithBoundingInfo = function(bb, cb, sb, kb, Wb) {
      return (0, ab.m)(this, bb, cb, sb, kb, Wb)
    }, kb.c.prototype.Wn = function(bb, cb, sb, kb, Wb, Tb) {
      let Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ab.r)(this, bb, cb, sb, kb, Wb, Tb, Ub)
    }, kb.c.prototype.pickWithRay = function(bb, cb, sb, kb) {
      return (0, ab.n)(this, bb, cb, sb, kb)
    }, kb.c.prototype.multiPick = function(bb, cb, sb, kb, Wb) {
      return (0, ab.l)(this, bb, cb, sb, kb, Wb)
    }, kb.c.prototype.multiPickWithRay = function(bb, cb, sb) {
      return (0, ab.k)(this, bb, cb, sb)
    })
  },
  40981: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => fb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36656),
      Tb = sb(39706),
      Ub = sb(40987),
      Ib = sb(39667),
      Hb = sb(36698);
    let fb = (() => {
        var bb;
        let cb, sb, Ib, Hb, fb, Mb, Xb, nb, mb = Ub.c,
          lb = [],
          Qb = [],
          eb = [],
          Cb = [],
          Nb = [],
          Vb = [],
          Lb = [],
          ub = [],
          Yb = [],
          hb = [],
          Jb = [],
          gb = [],
          Bb = [];
        return bb = class extends mb {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(bb) {
            this._shadowFrustumSize = bb, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(bb) {
            this._shadowOrthoScale = bb, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(bb) {
            this._orthoLeft = bb
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(bb) {
            this._orthoRight = bb
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(bb) {
            this._orthoTop = bb
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(bb) {
            this._orthoBottom = bb
          }
          constructor(bb, cb, sb, Wb) {
            super(bb, sb, Wb), this._shadowFrustumSize = ((0, kb.m)(this, lb), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, kb.m)(this, Qb, !0), this.autoCalcShadowZBounds = ((0, kb.m)(this, eb), (0, kb.m)(this, Cb, !1)), this._orthoLeft = ((0, kb.m)(this, Nb), (0, kb.m)(this, Vb, Number.MAX_VALUE)), this._orthoRight = ((0, kb.m)(this, Lb), (0, kb.m)(this, ub, Number.MIN_VALUE)), this._orthoTop = ((0, kb.m)(this, Yb), (0, kb.m)(this, hb, Number.MIN_VALUE)), this._orthoBottom = ((0, kb.m)(this, Jb), (0, kb.m)(this, gb, Number.MAX_VALUE)), (0, kb.m)(this, Bb), this.position = cb.scale(-1), this.direction = cb
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Tb.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(bb, cb, sb) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(bb) : this._setDefaultAutoExtendShadowProjectionMatrix(bb, cb, sb)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(bb) {
            const cb = this.EY().activeCamera;
            ab.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : cb ? cb.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : cb ? cb.maxZ : 1e4, bb, this.EY().Sm().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(bb, cb, sb) {
            const kb = this.EY().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const bb = ab.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let kb = Number.MAX_VALUE,
                Wb = -Number.MAX_VALUE;
              for (let Tb = 0; Tb < sb.length; Tb++) {
                const Ub = sb[Tb];
                if (!Ub) continue;
                const Ib = Ub.PJ().boundingBox;
                for (let sb = 0; sb < Ib.vectorsWorld.length; sb++) ab.p.TransformCoordinatesToRef(Ib.vectorsWorld[sb], cb, bb), bb.x < this._orthoLeft && (this._orthoLeft = bb.x), bb.y < this._orthoBottom && (this._orthoBottom = bb.y), bb.x > this._orthoRight && (this._orthoRight = bb.x), bb.y > this._orthoTop && (this._orthoTop = bb.y), this.autoCalcShadowZBounds && (bb.z < kb && (kb = bb.z), bb.z > Wb && (Wb = bb.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = kb, this._shadowMaxZ = Wb)
            }
            const Wb = this._orthoRight - this._orthoLeft,
              Tb = this._orthoTop - this._orthoBottom,
              Ub = void 0 !== this.shadowMinZ ? this.shadowMinZ : kb?.minZ || 0,
              Ib = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : kb?.maxZ || 1e4,
              Hb = this.EY().Sm().Dsb;
            ab.e.OrthoOffCenterLHToRef(this._orthoLeft - Wb * this.shadowOrthoScale, this._orthoRight + Wb * this.shadowOrthoScale, this._orthoBottom - Tb * this.shadowOrthoScale, this._orthoTop + Tb * this.shadowOrthoScale, Hb ? Ib : Ub, Hb ? Ub : Ib, bb, this.EY().Sm().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(bb, cb) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, cb), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, cb), this)
          }
          transferToNodeMaterialEffect(bb, cb) {
            return this.computeTransformedInformation() ? (bb.setFloat3(cb, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (bb.setFloat3(cb, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(bb) {
            const cb = this._scene.Sm();
            return !cb.Dsb && cb.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(bb) {
            const cb = this._scene.Sm();
            return cb.Dsb && cb.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(bb, cb) {
            bb["DIRLIGHT" + cb] = !0
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(mb[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], Ib = [(0, Wb.E)()], Hb = [(0, Wb.E)()], fb = [(0, Wb.E)("orthoLeft")], Mb = [(0, Wb.E)("orthoRight")], Xb = [(0, Wb.E)("orthoTop")], nb = [(0, Wb.E)("orthoBottom")], (0, kb.j)(bb, null, cb, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: bb => "shadowFrustumSize" in bb,
              get: bb => bb.shadowFrustumSize
            },
            metadata: ab
          }, null, lb), (0, kb.j)(bb, null, sb, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "shadowOrthoScale" in bb,
              get: bb => bb.shadowOrthoScale
            },
            metadata: ab
          }, null, lb), (0, kb.j)(null, null, Ib, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoUpdateExtends" in bb,
              get: bb => bb.autoUpdateExtends,
              set: (bb, cb) => {
                bb.autoUpdateExtends = cb
              }
            },
            metadata: ab
          }, Qb, eb), (0, kb.j)(null, null, Hb, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoCalcShadowZBounds" in bb,
              get: bb => bb.autoCalcShadowZBounds,
              set: (bb, cb) => {
                bb.autoCalcShadowZBounds = cb
              }
            },
            metadata: ab
          }, Cb, Nb), (0, kb.j)(null, null, fb, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoLeft" in bb,
              get: bb => bb._orthoLeft,
              set: (bb, cb) => {
                bb._orthoLeft = cb
              }
            },
            metadata: ab
          }, Vb, Lb), (0, kb.j)(null, null, Mb, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoRight" in bb,
              get: bb => bb._orthoRight,
              set: (bb, cb) => {
                bb._orthoRight = cb
              }
            },
            metadata: ab
          }, ub, Yb), (0, kb.j)(null, null, Xb, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoTop" in bb,
              get: bb => bb._orthoTop,
              set: (bb, cb) => {
                bb._orthoTop = cb
              }
            },
            metadata: ab
          }, hb, Jb), (0, kb.j)(null, null, nb, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoBottom" in bb,
              get: bb => bb._orthoBottom,
              set: (bb, cb) => {
                bb._orthoBottom = cb
              }
            },
            metadata: ab
          }, gb, Bb), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb
      })(),
      Mb = !1;
    Mb || (Mb = !0, Ib.c.AddNodeConstructor("Light_Type_1", ((bb, cb) => () => new fb(bb, ab.p.Zero(), cb))), (0, Hb.h)("BABYLON.DirectionalLight", fb))
  },
  40995: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => oc
    });
    var kb = sb(38313),
      Wb = sb(36683),
      ab = sb(36656),
      Tb = sb(39576),
      Ub = sb(41e3),
      Ib = sb(36677),
      Hb = sb(39722),
      fb = sb(36830),
      Mb = sb(38315),
      Xb = sb(38279),
      nb = sb(36688);
    class mb {
      constructor() {
        this.direction1 = new ab.p(0, 1, 0), this.direction2 = new ab.p(0, 1, 0)
      }
      startDirectionFunction(bb, cb, sb, kb) {
        const Wb = (0, nb.RandomRange)(this.direction1.x, this.direction2.x),
          Tb = (0, nb.RandomRange)(this.direction1.y, this.direction2.y),
          Ub = (0, nb.RandomRange)(this.direction1.z, this.direction2.z);
        kb ? cb.I5(Wb, Tb, Ub) : ab.p.TransformNormalFromFloatsToRef(Wb, Tb, Ub, bb, cb)
      }
      startPositionFunction(bb, cb, sb, kb) {
        kb ? cb.I5(0, 0, 0) : ab.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, bb, cb)
      }
      clone() {
        const bb = new mb;
        return Xb.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.Osb(), bb.direction2 = this.direction2.Osb(), bb
      }
      parse(bb) {
        ab.p.FromArrayToRef(bb.direction1, 0, this.direction1), ab.p.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    class lb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = bb, this.radiusRange = cb, this.directionRandomizer = sb
      }
      startDirectionFunction(bb, cb, sb, kb) {
        const Wb = sb.position.subtract(bb.getTranslation()).normalize(),
          Tb = (0, nb.RandomRange)(0, this.directionRandomizer),
          Ub = (0, nb.RandomRange)(0, this.directionRandomizer),
          Ib = (0, nb.RandomRange)(0, this.directionRandomizer);
        Wb.x += Tb, Wb.y += Ub, Wb.z += Ib, Wb.normalize(), kb ? cb.ssb(Wb) : ab.p.TransformNormalFromFloatsToRef(Wb.x, Wb.y, Wb.z, bb, cb)
      }
      startPositionFunction(bb, cb, sb, kb) {
        const Wb = this.radius - (0, nb.RandomRange)(0, this.radius * this.radiusRange),
          Tb = (0, nb.RandomRange)(0, 1),
          Ub = (0, nb.RandomRange)(0, 2 * Math.PI),
          Ib = Math.acos(2 * Tb - 1),
          Hb = Wb * Math.cos(Ub) * Math.sin(Ib),
          fb = Wb * Math.cos(Ib),
          Mb = Wb * Math.sin(Ub) * Math.sin(Ib);
        kb ? cb.I5(Hb, Math.abs(fb), Mb) : ab.p.TransformCoordinatesFromFloatsToRef(Hb, Math.abs(fb), Mb, bb, cb)
      }
      clone() {
        const bb = new lb(this.radius, this.directionRandomizer);
        return Xb.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class Qb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = bb, this.radiusRange = cb, this.directionRandomizer = sb
      }
      startDirectionFunction(bb, cb, sb, kb) {
        const Wb = sb.position.subtract(bb.getTranslation()).normalize(),
          Tb = (0, nb.RandomRange)(0, this.directionRandomizer),
          Ub = (0, nb.RandomRange)(0, this.directionRandomizer),
          Ib = (0, nb.RandomRange)(0, this.directionRandomizer);
        Wb.x += Tb, Wb.y += Ub, Wb.z += Ib, Wb.normalize(), kb ? cb.ssb(Wb) : ab.p.TransformNormalFromFloatsToRef(Wb.x, Wb.y, Wb.z, bb, cb)
      }
      startPositionFunction(bb, cb, sb, kb) {
        const Wb = this.radius - (0, nb.RandomRange)(0, this.radius * this.radiusRange),
          Tb = (0, nb.RandomRange)(0, 1),
          Ub = (0, nb.RandomRange)(0, 2 * Math.PI),
          Ib = Math.acos(2 * Tb - 1),
          Hb = Wb * Math.cos(Ub) * Math.sin(Ib),
          fb = Wb * Math.cos(Ib),
          Mb = Wb * Math.sin(Ub) * Math.sin(Ib);
        kb ? cb.I5(Hb, fb, Mb) : ab.p.TransformCoordinatesFromFloatsToRef(Hb, fb, Mb, bb, cb)
      }
      clone() {
        const bb = new Qb(this.radius, this.directionRandomizer);
        return Xb.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class eb extends Qb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ab.p(0, 1, 0),
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ab.p(0, 1, 0);
        super(bb), this.direction1 = cb, this.direction2 = sb
      }
      startDirectionFunction(bb, cb, sb, kb) {
        const Wb = (0, nb.RandomRange)(this.direction1.x, this.direction2.x),
          Tb = (0, nb.RandomRange)(this.direction1.y, this.direction2.y),
          Ub = (0, nb.RandomRange)(this.direction1.z, this.direction2.z);
        kb ? cb.I5(Wb, Tb, Ub) : ab.p.TransformNormalFromFloatsToRef(Wb, Tb, Ub, bb, cb)
      }
      clone() {
        const bb = new eb(this.radius, this.direction1, this.direction2);
        return Xb.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("radiusRange", this.radiusRange), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("radiusRange", 1), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.Osb(), bb.direction2 = this.direction2.Osb(), bb
      }
      parse(bb) {
        super.parse(bb), ab.p.FromArrayToRef(bb.direction1, 0, this.direction1), ab.p.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    var Cb = sb(38274);
    class Nb {
      get radius() {
        return this._radius
      }
      set radius(bb) {
        this._radius = bb, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(bb) {
        this._angle = bb, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = sb, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = cb, this.radius = bb
      }
      startDirectionFunction(bb, cb, sb, kb) {
        const Wb = sb.position.subtract(bb.getTranslation()).normalize(),
          Tb = (0, nb.RandomRange)(0, this.directionRandomizer),
          Ub = (0, nb.RandomRange)(0, this.directionRandomizer),
          Ib = (0, nb.RandomRange)(0, this.directionRandomizer);
        Wb.x += Tb, Wb.y += Ub, Wb.z += Ib, Wb.normalize(), kb ? cb.ssb(Wb) : ab.p.TransformNormalFromFloatsToRef(Wb.x, Wb.y, Wb.z, bb, cb)
      }
      startPositionFunction(bb, cb, sb, kb) {
        const Wb = (0, nb.RandomRange)(0, 2 * Math.PI);
        let Tb;
        this.emitFromSpawnPointOnly ? Tb = 1e-4 : (Tb = (0, nb.RandomRange)(0, this.heightRange), Tb = 1 - Tb * Tb);
        let Ub = this._radius - (0, nb.RandomRange)(0, this._radius * this.radiusRange);
        Ub *= Tb;
        const Ib = Ub * Math.sin(Wb),
          Hb = Ub * Math.cos(Wb),
          fb = Tb * this._height;
        if (kb) return cb.x = Ib, cb.y = fb, void(cb.z = Hb);
        ab.p.TransformCoordinatesFromFloatsToRef(Ib, fb, Hb, bb, cb)
      }
      clone() {
        const bb = new Nb(this._radius, this._angle, this.directionRandomizer);
        return Xb.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat2("radius", this._radius, this.radiusRange), bb.setFloat("coneAngle", this._angle), bb.setFloat2("height", this._height, this.heightRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 2), bb.addUniform("coneAngle", 1), bb.addUniform("height", 2), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let bb = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (bb += "\n#define CONEEMITTERSPAWNPOINT"), bb
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this._radius, bb.angle = this._angle, bb.directionRandomizer = this.directionRandomizer, bb.radiusRange = this.radiusRange, bb.heightRange = this.heightRange, bb.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.angle = bb.angle, this.directionRandomizer = bb.directionRandomizer, this.radiusRange = void 0 !== bb.radiusRange ? bb.radiusRange : 1, this.heightRange = void 0 !== bb.heightRange ? bb.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== bb.emitFromSpawnPointOnly && bb.emitFromSpawnPointOnly
      }
    }
    class Vb extends Nb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ab.p(0, 1, 0),
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ab.p(0, 1, 0);
        super(bb, cb), this.direction1 = sb, this.direction2 = kb
      }
      startDirectionFunction(bb, cb, sb, kb) {
        const Wb = (0, nb.RandomRange)(this.direction1.x, this.direction2.x),
          Tb = (0, nb.RandomRange)(this.direction1.y, this.direction2.y),
          Ub = (0, nb.RandomRange)(this.direction1.z, this.direction2.z);
        kb ? cb.I5(Wb, Tb, Ub) : ab.p.TransformNormalFromFloatsToRef(Wb, Tb, Ub, bb, cb)
      }
      clone() {
        const bb = new Vb(this.radius, this.angle, this.direction1, this.direction2);
        return Xb.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        super.applyToShader(bb), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        super.buildUniformLayout(bb), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.Osb(), bb.direction2 = this.direction2.Osb(), bb
      }
      parse(bb) {
        super.parse(bb), ab.p.FromArrayToRef(bb.direction1, 0, this.direction1), ab.p.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    class Lb {
      get mesh() {
        return this._mesh
      }
      set mesh(bb) {
        this._mesh !== bb && (this._mesh = bb, bb ? (this._indices = bb.Gsb(), this._positions = bb.getVerticesData(Tb.l.PositionKind), this._normals = bb.getVerticesData(Tb.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = ab.p.Zero(), this._mesh = null, this.direction1 = new ab.p(0, 1, 0), this.direction2 = new ab.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = bb
      }
      startDirectionFunction(bb, cb, sb, kb) {
        if (this.useMeshNormalsForDirection && this._normals) return void ab.p.TransformNormalToRef(this._storedNormal, bb, cb);
        const Wb = (0, nb.RandomRange)(this.direction1.x, this.direction2.x),
          Tb = (0, nb.RandomRange)(this.direction1.y, this.direction2.y),
          Ub = (0, nb.RandomRange)(this.direction1.z, this.direction2.z);
        kb ? cb.I5(Wb, Tb, Ub) : ab.p.TransformNormalFromFloatsToRef(Wb, Tb, Ub, bb, cb)
      }
      startPositionFunction(bb, cb, sb, kb) {
        if (!this._indices || !this._positions) return;
        const Wb = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Tb = Math.random(),
          Ub = Math.random() * (1 - Tb),
          Ib = 1 - Tb - Ub,
          Hb = this._indices[Wb],
          fb = this._indices[Wb + 1],
          Mb = this._indices[Wb + 2],
          Xb = ab.m.Fm[0],
          nb = ab.m.Fm[1],
          mb = ab.m.Fm[2],
          lb = ab.m.Fm[3];
        ab.p.FromArrayToRef(this._positions, 3 * Hb, Xb), ab.p.FromArrayToRef(this._positions, 3 * fb, nb), ab.p.FromArrayToRef(this._positions, 3 * Mb, mb), lb.x = Tb * Xb.x + Ub * nb.x + Ib * mb.x, lb.y = Tb * Xb.y + Ub * nb.y + Ib * mb.y, lb.z = Tb * Xb.z + Ub * nb.z + Ib * mb.z, kb ? cb.I5(lb.x, lb.y, lb.z) : ab.p.TransformCoordinatesFromFloatsToRef(lb.x, lb.y, lb.z, bb, cb), this.useMeshNormalsForDirection && this._normals && (ab.p.FromArrayToRef(this._normals, 3 * Hb, Xb), ab.p.FromArrayToRef(this._normals, 3 * fb, nb), ab.p.FromArrayToRef(this._normals, 3 * Mb, mb), this._storedNormal.x = Tb * Xb.x + Ub * nb.x + Ib * mb.x, this._storedNormal.y = Tb * Xb.y + Ub * nb.y + Ib * mb.y, this._storedNormal.z = Tb * Xb.z + Ub * nb.z + Ib * mb.z)
      }
      clone() {
        const bb = new Lb(this.mesh);
        return Xb.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.Osb(), bb.direction2 = this.direction2.Osb(), bb.meshId = this.mesh?.id, bb.useMeshNormalsForDirection = this.useMeshNormalsForDirection, bb
      }
      parse(bb, cb) {
        ab.p.FromArrayToRef(bb.direction1, 0, this.direction1), ab.p.FromArrayToRef(bb.direction2, 0, this.direction2), bb.meshId && cb && (this.mesh = cb.getLastMeshById(bb.meshId)), this.useMeshNormalsForDirection = bb.useMeshNormalsForDirection
      }
    }
    class ub {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(bb) {
        this._targetStopDuration !== bb && (this._targetStopDuration = bb)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(bb) {
        this._noiseTexture !== bb && (this._noiseTexture = bb, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(bb) {
        this._attractors.push(bb)
      }
      removeAttractor(bb) {
        const cb = this._attractors.indexOf(bb); - 1 !== cb && this._attractors.splice(cb, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(bb) {
        this._animationSheetEnabled !== bb && (this._animationSheetEnabled = bb)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(bb) {
        this._isAnimationSheetEnabled != bb && (this._isAnimationSheetEnabled = bb, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(bb) {
        this._useLogarithmicDepth = bb && this.EY().Sm().getCaps().fragmentDepthSupported
      }
      EY() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(bb) {
        switch (bb) {
          case ub.BLENDMODE_MULTIPLYADD:
            return;
          case ub.BLENDMODE_ADD:
            bb = 1;
            break;
          case ub.BLENDMODE_ONEONE:
            bb = 6;
            break;
          case ub.BLENDMODE_STANDARD:
            bb = 2;
            break;
          case ub.BLENDMODE_MULTIPLY:
            bb = 4;
            break;
          case ub.BLENDMODE_SUBTRACT:
            bb = 3
        }
        this._engine.setAlphaMode(bb)
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
      addEmitRateGradient(bb, cb, sb) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, bb, cb, sb), this
      }
      removeEmitRateGradient(bb) {
        return this._removeFactorGradient(this._emitRateGradients, bb), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : ab.p.Zero()
      }
      set direction1(bb) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = bb)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : ab.p.Zero()
      }
      set direction2(bb) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = bb)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : ab.p.Zero()
      }
      set minEmitBox(bb) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = bb)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : ab.p.Zero()
      }
      set maxEmitBox(bb) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = bb)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(bb) {
        this._billboardMode !== bb && (this._billboardMode = bb, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(bb) {
        this._isBillboardBased !== bb && (this._isBillboardBased = bb, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(bb) {
        this._attachImageProcessingConfiguration(bb)
      }
      _attachImageProcessingConfiguration(bb) {
        bb !== this._imageProcessingConfiguration && (!bb && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = bb)
      }
      _reset() {}
      _addFactorGradient(bb, cb, sb, Wb) {
        const ab = new kb.h(cb, sb, Wb);
        bb.push(ab), bb.sort(((bb, cb) => bb.gradient < cb.gradient ? -1 : bb.gradient > cb.gradient ? 1 : 0))
      }
      _removeFactorGradient(bb, cb) {
        if (!bb) return;
        let sb = 0;
        for (const kb of bb) {
          if (kb.gradient === cb) {
            bb.splice(sb, 1);
            break
          }
          sb++
        }
      }
      _removeGradientAndTexture(bb, cb, sb) {
        if (!cb) return this;
        let kb = 0;
        for (const Wb of cb) {
          if (Wb.gradient === bb) {
            cb.splice(kb, 1);
            break
          }
          kb++
        }
        return sb && sb.dispose(), this
      }
      constructor(bb) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = ab.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new ab.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = ub.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new ab.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new ab.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = ab.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new fb.g(1, 1, 1, 1), this.color2 = new fb.g(1, 1, 1, 1), this.colorDead = new fb.g(0, 0, 0, 1), this.textureMask = new fb.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Hb.d, this.id = bb, this.name = bb
      }
      createPointEmitter(bb, cb) {
        const sb = function(bb, cb) {
          const sb = new mb;
          return sb.direction1 = bb, sb.direction2 = cb, sb
        }(bb, cb);
        return this.particleEmitterType = sb, sb
      }
      createHemisphericEmitter() {
        const bb = function() {
          return new lb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = bb, bb
      }
      createSphereEmitter() {
        const bb = function() {
          return new Qb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = bb, bb
      }
      createDirectedSphereEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ab.p(0, 1, 0),
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ab.p(0, 1, 0);
          return new eb(bb, cb, sb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ab.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ab.p(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createCylinderEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Cb.g(bb, cb, sb, kb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = bb, bb
      }
      createDirectedCylinderEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ab.p(0, 1, 0),
            Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ab.p(0, 1, 0);
          return new Cb.c(bb, cb, sb, kb, Wb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ab.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ab.p(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createConeEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Nb(bb, cb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = bb, bb
      }
      createDirectedConeEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ab.p(0, 1, 0),
            kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ab.p(0, 1, 0);
          return new Vb(bb, cb, sb, kb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ab.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ab.p(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createBoxEmitter(bb, cb, sb, kb) {
        const Wb = new Mb.d;
        return this.particleEmitterType = Wb, this.direction1 = bb, this.direction2 = cb, this.minEmitBox = sb, this.maxEmitBox = kb, Wb
      }
      createMeshEmitter() {
        const bb = function() {
          return new Lb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = bb, bb
      }
    }
    ub.BLENDMODE_ONEONE = 0, ub.BLENDMODE_STANDARD = 1, ub.BLENDMODE_ADD = 2, ub.BLENDMODE_MULTIPLY = 3, ub.BLENDMODE_MULTIPLYADD = 4, ub.BLENDMODE_SUBTRACT = -1;
    class Yb {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new fb.g(0, 0, 0, 0), this.currentColor2 = new fb.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = ab.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class hb {
      constructor(bb) {
        this.particleSystem = bb, this.position = ab.p.Zero(), this.direction = ab.p.Zero(), this.color = new fb.g(0, 0, 0, 0), this.colorStep = new fb.g(0, 0, 0, 0), this.initialColor = new fb.g(0, 0, 0, 0), this.colorDead = new fb.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new ab.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Yb, this.id = hb._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let bb = this.age,
          cb = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === cb ? (cb = 1, bb = this._properties.randomCellOffset) : bb += this._properties.randomCellOffset);
        const sb = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let kb;
        kb = this._properties.initialSpriteCellLoop ? (0, nb.Clamp)(bb * cb % this.lifeTime / this.lifeTime) : (0, nb.Clamp)(bb * cb / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + kb * sb | 0
      }
      _inheritParticleInfoToSubEmitter(bb) {
        if (bb.particleSystem.emitter.position) {
          const cb = bb.particleSystem.emitter;
          if (cb.position.ssb(this.position), bb.inheritDirection) {
            const bb = ab.m.Fm[0];
            this.direction.normalizeToRef(bb), cb.setDirection(bb, 0, Math.PI / 2)
          }
        } else {
          bb.particleSystem.emitter.ssb(this.position)
        }
        this.direction.scaleToRef(bb.inheritedVelocityAmount / 2, ab.m.Fm[0]), bb.particleSystem._inheritedVelocityOffset.ssb(ab.m.Fm[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const bb of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(bb)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = hb._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(bb) {
        bb.position.ssb(this.position), this._properties.initialDirection ? bb._properties.initialDirection ? bb._properties.initialDirection.ssb(this._properties.initialDirection) : bb._properties.initialDirection = this._properties.initialDirection.clone() : bb._properties.initialDirection = null, bb.direction.ssb(this.direction), this._properties.localPosition && (bb._properties.localPosition ? bb._properties.localPosition.ssb(this._properties.localPosition) : bb._properties.localPosition = this._properties.localPosition.clone()), bb.color.ssb(this.color), bb.colorStep.ssb(this.colorStep), bb.initialColor.ssb(this.initialColor), bb.colorDead.ssb(this.colorDead), bb.lifeTime = this.lifeTime, bb.age = this.age, bb._properties.randomCellOffset = this._properties.randomCellOffset, bb.size = this.size, bb.scale.ssb(this.scale), bb.angle = this.angle, bb.angularSpeed = this.angularSpeed, bb.particleSystem = this.particleSystem, bb.cellIndex = this.cellIndex, bb.id = this.id, bb._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (bb._properties.currentColorGradient = this._properties.currentColorGradient, bb._properties.currentColor1.ssb(this._properties.currentColor1), bb._properties.currentColor2.ssb(this._properties.currentColor2)), this._properties.currentSizeGradient && (bb._properties.currentSizeGradient = this._properties.currentSizeGradient, bb._properties.currentSize1 = this._properties.currentSize1, bb._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (bb._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, bb._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, bb._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (bb._properties.currentVelocityGradient = this._properties.currentVelocityGradient, bb._properties.currentVelocity1 = this._properties.currentVelocity1, bb._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (bb._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, bb._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, bb._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (bb._properties.currentDragGradient = this._properties.currentDragGradient, bb._properties.currentDrag1 = this._properties.currentDrag1, bb._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (bb._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, bb._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, bb._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (bb.remapData && this.remapData ? bb.remapData.ssb(this.remapData) : bb.remapData = new ab.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2 ? (bb._properties.randomNoiseCoordinates1.ssb(this._properties.randomNoiseCoordinates1), bb._properties.randomNoiseCoordinates2.ssb(this._properties.randomNoiseCoordinates2)) : (bb._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), bb._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), bb.metadata = this.metadata
      }
    }
    hb._Count = 0;
    var Jb = sb(40519);
    class gb {
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
      constructor(bb, cb, sb, kb) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = cb, this.mw = bb, this._scene = sb, this._host = kb, this._activeTargets = [], cb._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Aa: this._getCorrectLoopMode()
          }, this._animation.dataType === Jb.c.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = ab.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const bb = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, bb)
        }
        if (this.mw instanceof Array) {
          let bb = 0;
          for (const cb of this.mw) this._preparePath(cb, bb), this._getOriginalValues(bb), bb++;
          this._targetIsArray = !0
        } else this._preparePath(this.mw), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Wb = cb.getEvents();
        if (Wb && Wb.length > 0)
          for (const ab of Wb) this._events.push(ab._clone());
        this._enableBlending = bb && bb.animationPropertiesOverride ? bb.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = this._animation.targetPropertyPath;
        if (sb.length > 1) {
          let kb = bb;
          for (let bb = 0; bb < sb.length - 1; bb++) {
            const cb = sb[bb];
            if (kb = kb[cb], void 0 === kb) throw new Error(`Invalid property (${cb}) in property path (${sb.join(".")})`)
          }
          this._targetPath = sb[sb.length - 1], this._activeTargets[cb] = kb
        } else this._targetPath = sb[0], this._activeTargets[cb] = bb;
        if (void 0 === this._activeTargets[cb][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${sb.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.mw instanceof Array) {
            let bb = 0;
            for (const cb of this.mw) void 0 !== this._originalValue[bb] && this._setValue(cb, this._activeTargets[bb], this._originalValue[bb], -1, bb), bb++
          } else void 0 !== this._originalValue[0] && this._setValue(this.mw, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let bb = 0; bb < this._events.length; bb++) this._events[bb].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const bb = this._animation.runtimeAnimations.indexOf(this);
        bb > -1 && this._animation.runtimeAnimations.splice(bb, 1)
      }
      setValue(bb, cb) {
        if (this._targetIsArray)
          for (let sb = 0; sb < this.mw.length; sb++) {
            const kb = this.mw[sb];
            this._setValue(kb, this._activeTargets[sb], bb, cb, sb)
          } else this._setValue(this.mw, this._directTarget, bb, cb, 0)
      }
      _getOriginalValues() {
        let bb, cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const sb = this._activeTargets[cb];
        if (Jb.c.InheritOriginalValueFromActiveAnimations) {
          const bb = this._scene._activeAnimatables;
          for (let kb = 0; kb < bb.length; kb++) {
            const Wb = bb[kb]._runtimeAnimations;
            for (let bb = 0; bb < Wb.length; bb++) {
              const kb = Wb[bb];
              if (kb !== this && kb._targetPath === this._targetPath)
                for (let bb = 0; bb < kb._activeTargets.length; bb++)
                  if (kb._activeTargets[bb] === sb && void 0 !== kb._originalValue[bb]) return void(kb._originalValue[bb] && kb._originalValue[bb].clone ? this._originalValue[cb] = kb._originalValue[bb].clone() : this._originalValue[cb] = kb._originalValue[bb])
            }
          }
        }
        bb = sb.getLocalMatrix && "_matrix" === this._targetPath ? sb.getLocalMatrix() : sb[this._targetPath], bb && bb.clone ? this._originalValue[cb] = bb.clone() : this._originalValue[cb] = bb
      }
      _registerTargetForLateAnimationBinding(bb, cb) {
        const sb = bb.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(sb), sb._lateAnimationHolders || (sb._lateAnimationHolders = {}), sb._lateAnimationHolders[bb.targetPath] || (sb._lateAnimationHolders[bb.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: cb
        }), bb.isAdditive ? (sb._lateAnimationHolders[bb.targetPath].additiveAnimations.push(bb), sb._lateAnimationHolders[bb.targetPath].totalAdditiveWeight += bb.weight) : (sb._lateAnimationHolders[bb.targetPath].animations.push(bb), sb._lateAnimationHolders[bb.targetPath].totalWeight += bb.weight)
      }
      _setValue(bb, cb, sb, kb, Wb) {
        const Tb = this._scene._animationWrites,
          Ub = this._scene._animationWriteCount++;
        let Ib = Tb[Ub];
        if (Ib || (Ib = Tb[Ub] = {
            runtimeAnimation: this,
            target: bb,
            weight: kb,
            additive: !1,
            blendingFactor: 1,
            tQ: !1
          }), Ib.runtimeAnimation = this, Ib.target = bb, Ib.weight = kb, Ib.additive = this.isAdditive, Ib.tQ = !1, this._currentActiveTarget = cb, this._weight = kb, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const bb = cb[this._targetPath];
            bb.clone ? this._originalBlendValue = bb.clone() : this._originalBlendValue = bb
          }
          this._originalBlendValue.m ? Jb.c.AllowMatrixDecomposeForInterpolation ? this._currentValue ? ab.e.DecomposeLerpToRef(this._originalBlendValue, sb, this._blendingFactor, this._currentValue) : this._currentValue = ab.e.DecomposeLerp(this._originalBlendValue, sb, this._blendingFactor) : this._currentValue ? ab.e.LerpToRef(this._originalBlendValue, sb, this._blendingFactor, this._currentValue) : this._currentValue = ab.e.Lerp(this._originalBlendValue, sb, this._blendingFactor) : this._currentValue = Jb.c._UniversalLerp(this._originalBlendValue, sb, this._blendingFactor);
          const kb = bb && bb.animationPropertiesOverride ? bb.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Ib.blendingFactor = this._blendingFactor, this._blendingFactor += kb
        } else Ib.blendingFactor = 1, this._currentValue ? this._currentValue.ssb ? this._currentValue.ssb(sb) : this._currentValue = sb : this._currentValue = sb?.clone ? sb.clone() : sb; - 1 !== kb ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Wb]) : this._animationState.Aa === Jb.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Wb], cb[this._targetPath]) : cb[this._targetPath] = this._originalValue[Wb] + this._currentValue : cb[this._targetPath] = this._currentValue, bb.Tcb && bb.Tcb(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.mw && this.mw.animationPropertiesOverride) {
          return "MorphTarget" === this.mw.getClassName?.() && null == this.mw._animationPropertiesOverride ? this._animation.Aa : this.mw.animationPropertiesOverride.Aa
        }
        return this._animation.Aa
      }
      goToFrame(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const sb = this._animation.getKeys();
        bb < sb[0].frame ? bb = sb[0].frame : bb > sb[sb.length - 1].frame && (bb = sb[sb.length - 1].frame);
        const kb = this._events;
        if (kb.length)
          for (let ab = 0; ab < kb.length; ab++) kb[ab].onlyOnce || (kb[ab].isDone = kb[ab].frame < bb);
        this._currentFrame = bb;
        const Wb = this._animation._interpolate(bb, this._animationState);
        this.setValue(Wb, cb)
      }
      _prepareForSpeedRatioChange(bb) {
        const cb = this._previousElapsedTime * (this._animation.framePerSecond * bb) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - cb
      }
      animate(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Tb = this._animation,
          Ub = Tb.targetPropertyPath;
        if (!Ub || Ub.length < 1) return this._stopped = !0, !1;
        let Ib, Hb = !0;
        const fb = this._events;
        let Mb;
        if (this._coreRuntimeAnimation) Mb = sb - cb, Ib = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Ib, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let ab;
          (cb < this._minFrame || cb > this._maxFrame) && (cb = this._minFrame), (sb < this._minFrame || sb > this._maxFrame) && (sb = this._maxFrame), Mb = sb - cb;
          let Ub = bb * (Tb.framePerSecond * Wb) / 1e3 + this._absoluteFrameOffset,
            Xb = 0,
            nb = !1;
          const mb = kb && this._animationState.Aa === Jb.c.ANIMATIONLOOPMODE_YOYO;
          if (mb) {
            const bb = (Ub - cb) / Mb,
              sb = Math.sin(bb * Math.PI);
            Ub = Math.abs(sb) * Mb + cb;
            const kb = sb >= 0 ? 1 : -1;
            this._yoyoDirection !== kb && (nb = !0), this._yoyoDirection = kb
          }
          if (this._previousElapsedTime = bb, this._previousAbsoluteFrame = Ub, !kb && sb >= cb && (Ub >= Mb && Wb > 0 || Ub <= 0 && Wb < 0)) Hb = !1, Xb = Tb.evaluate(sb);
          else if (!kb && cb >= sb && (Ub <= Mb && Wb < 0 || Ub >= 0 && Wb > 0)) Hb = !1, Xb = Tb.evaluate(cb);
          else if (this._animationState.Aa !== Jb.c.ANIMATIONLOOPMODE_CYCLE) {
            const bb = sb.toString() + cb.toString();
            if (!this._offsetsCache[bb]) {
              this._animationState.repeatCount = 0, this._animationState.Aa = Jb.c.ANIMATIONLOOPMODE_CYCLE;
              const kb = Tb._interpolate(cb, this._animationState),
                Wb = Tb._interpolate(sb, this._animationState);
              switch (this._animationState.Aa = this._getCorrectLoopMode(), Tb.dataType) {
                case Jb.c.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[bb] = Wb - kb;
                  break;
                case Jb.c.ANIMATIONTYPE_QUATERNION:
                case Jb.c.ANIMATIONTYPE_VECTOR3:
                case Jb.c.ANIMATIONTYPE_VECTOR2:
                case Jb.c.ANIMATIONTYPE_SIZE:
                case Jb.c.ANIMATIONTYPE_COLOR3:
                case Jb.c.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[bb] = Wb.subtract(kb)
              }
              this._highLimitsCache[bb] = Wb
            }
            Xb = this._highLimitsCache[bb], ab = this._offsetsCache[bb]
          }
          if (void 0 === ab) switch (Tb.dataType) {
            case Jb.c.ANIMATIONTYPE_FLOAT:
              ab = 0;
              break;
            case Jb.c.ANIMATIONTYPE_QUATERNION:
              ab = Jb.j;
              break;
            case Jb.c.ANIMATIONTYPE_VECTOR3:
              ab = Jb.s;
              break;
            case Jb.c.ANIMATIONTYPE_VECTOR2:
              ab = Jb.o;
              break;
            case Jb.c.ANIMATIONTYPE_SIZE:
              ab = Jb.m;
              break;
            case Jb.c.ANIMATIONTYPE_COLOR3:
              ab = Jb.g;
              break;
            case Jb.c.ANIMATIONTYPE_COLOR4:
              ab = Jb.h
          }
          const lb = this._host ? this._host.syncRoot : null;
          let Qb, eb = this._playbackFrames,
            Cb = !1;
          if (lb) {
            const bb = lb.toFrame - lb.fromFrame,
              sb = lb.masterFrame,
              kb = (sb - lb.fromFrame) / bb;
            Ib = cb + Mb * kb;
            const Wb = lb.getAnimations()[0];
            if (Wb && 0 !== bb) {
              const bb = Mb * kb,
                cb = Wb._playbackTo - Wb._playbackFrom;
              if (0 !== cb && Wb._playbackFrom <= lb.fromFrame && Wb._playbackTo >= lb.toFrame) {
                eb = Mb * Math.round((Wb._playbackFrames - (Wb._currentFrame - Wb._playbackFrom)) / cb) + bb
              } else Cb = (sb - this._playbackSyncMasterFrame) * (Wb._playbackFrames - this._playbackSyncMasterPlayed) < 0, eb = bb;
              Cb = Cb || Wb._playbackJumped, this._playbackSyncMasterPlayed = Wb._playbackFrames, this._playbackSyncMasterFrame = sb
            }
          } else Ib = Ub > 0 && cb > sb || Ub < 0 && cb < sb ? Hb && 0 !== Mb ? sb + Ub % Mb : cb : Hb && 0 !== Mb ? cb + Ub % Mb : sb;
          if (!mb && (Wb > 0 && this.currentFrame > Ib || Wb < 0 && this.currentFrame < Ib) || mb && nb) {
            this._onLoop();
            for (let bb = 0; bb < fb.length; bb++) fb[bb].onlyOnce || (fb[bb].isDone = !1);
            this._animationState.key = Wb > 0 ? 0 : Tb.getKeys().length - 1
          }
          if (this._currentFrame = Ib, this._animationState.repeatCount = 0 === Mb ? 0 : Ub / Mb | 0, this._animationState.highLimitValue = Xb, this._animationState.offsetValue = ab, this._playbackFrom = cb, this._playbackTo = sb, this._playbackJumped = Cb, this._playbackSyncRoot = lb, lb) Qb = eb;
          else if (Hb) Qb = mb ? Ib === cb && Ub === sb ? Mb : Ib - cb : Ub;
          else {
            const bb = 0 !== Mb ? Math.floor(this._playbackFrames / Mb) : 0;
            Qb = (Ib === sb ? bb + 1 : bb) * Mb
          }
          this._playbackFrames = Qb, this._playbackProgress = this._animationState.Aa === Jb.c.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Mb : Qb
        }
        const Xb = Tb._interpolate(Ib, this._animationState);
        if (this.setValue(Xb, ab), fb.length)
          for (let nb = 0; nb < fb.length; nb++)
            if (Mb >= 0 && Ib >= fb[nb].frame && fb[nb].frame >= cb || Mb < 0 && Ib <= fb[nb].frame && fb[nb].frame <= cb) {
              const bb = fb[nb];
              bb.isDone || (bb.onlyOnce && (fb.splice(nb, 1), nb--), bb.isDone = !0, bb.action(Ib))
            } return Hb || (this._stopped = !0), Hb
      }
    }
    var Bb = sb(39314);
    class tb {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(bb) {
        this._weight = -1 !== bb ? Math.min(Math.max(bb, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(bb) {
        for (let cb = 0; cb < this._runtimeAnimations.length; cb++) {
          this._runtimeAnimations[cb]._prepareForSpeedRatioChange(bb)
        }
        this._speedRatio = bb, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          ab = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Ib = arguments.length > 7 ? arguments[7] : void 0,
          Hb = arguments.length > 8 ? arguments[8] : void 0,
          fb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Mb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = cb, this.fromFrame = sb, this.toFrame = kb, this.loopAnimation = ab, this.onAnimationEnd = Ub, this.onAnimationLoop = Hb, this.isAdditive = fb, this.playOrder = Mb, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.bV = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Wb.c, this.onAnimationLoopObservable = new Wb.c, this._scene = bb, Ib && this.appendAnimations(cb, Ib), this._speedRatio = Tb, bb._activeAnimatables.push(this)
      }
      syncWith(bb) {
        if (this._syncRoot = bb, bb) {
          const bb = this._scene._activeAnimatables.indexOf(this);
          bb > -1 && (this._scene._activeAnimatables.splice(bb, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(bb, cb) {
        for (let sb = 0; sb < cb.length; sb++) {
          const kb = cb[sb],
            Wb = new gb(bb, kb, this._scene, this);
          Wb._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Wb)
        }
      }
      getAnimationByTargetProperty(bb) {
        const cb = this._runtimeAnimations;
        for (let sb = 0; sb < cb.length; sb++)
          if (cb[sb].animation.targetProperty === bb) return cb[sb].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(bb) {
        const cb = this._runtimeAnimations;
        for (let sb = 0; sb < cb.length; sb++)
          if (cb[sb].animation.targetProperty === bb) return cb[sb];
        return null
      }
      reset() {
        const bb = this._runtimeAnimations;
        for (let cb = 0; cb < bb.length; cb++) bb[cb].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(bb) {
        const cb = this._runtimeAnimations;
        for (let sb = 0; sb < cb.length; sb++) cb[sb].animation.enableBlending = !0, cb[sb].animation.blendingSpeed = bb
      }
      disableBlending() {
        const bb = this._runtimeAnimations;
        for (let cb = 0; cb < bb.length; cb++) bb[cb].animation.enableBlending = !1
      }
      goToFrame(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = this._runtimeAnimations;
        if (sb[0]) {
          const cb = sb[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? sb[0].currentFrame;
          const kb = 0 === this.speedRatio ? 0 : (bb - this._frameToSyncFromJump) / cb * 1e3 / this.speedRatio;
          this._manualJumpDelay = -kb
        }
        for (let kb = 0; kb < sb.length; kb++) sb[kb].goToFrame(bb, cb ? this._weight : -1);
        this._goToFrame = bb
      }
      get paused() {
        return this.bV
      }
      pause() {
        this.bV || (this.bV = !0)
      }
      restart() {
        this.bV = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (bb || cb) {
          const Wb = this._scene._activeAnimatables.indexOf(this);
          if (Wb > -1) {
            const ab = this._runtimeAnimations;
            for (let sb = ab.length - 1; sb >= 0; sb--) {
              const kb = ab[sb];
              bb && kb.animation.name != bb || (cb && !cb(kb.target) || (kb.dispose(), ab.splice(sb, 1)))
            }
            0 == ab.length && (sb || this._scene._activeAnimatables.splice(Wb, 1), kb || this._raiseOnAnimationEnd())
          }
        } else {
          const bb = this._scene._activeAnimatables.indexOf(this);
          if (bb > -1) {
            sb || this._scene._activeAnimatables.splice(bb, 1);
            const cb = this._runtimeAnimations;
            for (let bb = 0; bb < cb.length; bb++) cb[bb].dispose();
            this._runtimeAnimations.length = 0, kb || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((bb => {
          this.onAnimationEndObservable.add((() => {
            bb(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(bb) {
        if (this.bV) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = bb), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = bb, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += bb - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !tb.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let cb = !1;
        const sb = this._runtimeAnimations;
        let kb;
        for (kb = 0; kb < sb.length; kb++) {
          const Wb = sb[kb].animate(bb - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          cb = cb || Wb
        }
        if (this.animationStarted = cb, !cb) {
          if (this.disposeOnEnd)
            for (kb = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(kb, 1), kb = 0; kb < sb.length; kb++) sb[kb].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return cb
      }
    }

    function yb(bb) {
      if (0 === bb.totalWeight && 0 === bb.totalAdditiveWeight) return bb.originalValue;
      let cb = 1;
      const sb = ab.m.Fm[0],
        kb = ab.m.Fm[1],
        Wb = ab.m.Quaternion[0];
      let Tb = 0;
      const Ub = bb.animations[0],
        Ib = bb.originalValue;
      let Hb, fb = !1;
      if (bb.totalWeight < 1) Hb = 1 - bb.totalWeight, Ib.decompose(kb, Wb, sb);
      else {
        if (Tb = 1, cb = bb.totalWeight, Hb = Ub.weight / cb, 1 == Hb) {
          if (!bb.totalAdditiveWeight) return Ub.currentValue;
          fb = !0
        }
        Ub.currentValue.decompose(kb, Wb, sb)
      }
      if (!fb) {
        kb.scaleInPlace(Hb), sb.scaleInPlace(Hb), Wb.scaleInPlace(Hb);
        for (let Ub = Tb; Ub < bb.animations.length; Ub++) {
          const Tb = bb.animations[Ub];
          if (0 === Tb.weight) continue;
          Hb = Tb.weight / cb;
          const Ib = ab.m.Fm[2],
            fb = ab.m.Fm[3],
            Mb = ab.m.Quaternion[1];
          Tb.currentValue.decompose(fb, Mb, Ib), fb.scaleAndAddToRef(Hb, kb), Mb.scaleAndAddToRef(ab.f.Dot(Wb, Mb) > 0 ? Hb : -Hb, Wb), Ib.scaleAndAddToRef(Hb, sb)
        }
        Wb.normalize()
      }
      for (let Xb = 0; Xb < bb.additiveAnimations.length; Xb++) {
        const cb = bb.additiveAnimations[Xb];
        if (0 === cb.weight) continue;
        const Tb = ab.m.Fm[2],
          Ub = ab.m.Fm[3],
          Ib = ab.m.Quaternion[1];
        cb.currentValue.decompose(Ub, Ib, Tb), Ub.multiplyToRef(kb, Ub), ab.p.LerpToRef(kb, Ub, cb.weight, kb), Wb.multiplyToRef(Ib, Ib), ab.f.SlerpToRef(Wb, Ib, cb.weight, Wb), Tb.scaleAndAddToRef(cb.weight, sb)
      }
      const Mb = Ub ? Ub._animationState.workValue : ab.m.Matrix[0].clone();
      return ab.e.ComposeToRef(kb, Wb, sb, Mb), Mb
    }

    function Pb(bb, cb) {
      if (0 === bb.totalWeight && 0 === bb.totalAdditiveWeight) return cb;
      const sb = bb.animations[0],
        kb = bb.originalValue;
      let Wb = cb;
      if (0 === bb.totalWeight && bb.totalAdditiveWeight > 0) Wb.ssb(kb);
      else if (1 === bb.animations.length) {
        if (ab.f.SlerpToRef(kb, sb.currentValue, Math.min(1, bb.totalWeight), Wb), 0 === bb.totalAdditiveWeight) return Wb
      } else if (bb.animations.length > 1) {
        let sb, Tb, Ub = 1;
        if (bb.totalWeight < 1) {
          const cb = 1 - bb.totalWeight;
          sb = [], Tb = [], sb.push(kb), Tb.push(cb)
        } else {
          if (2 === bb.animations.length && (ab.f.SlerpToRef(bb.animations[0].currentValue, bb.animations[1].currentValue, bb.animations[1].weight / bb.totalWeight, cb), 0 === bb.totalAdditiveWeight)) return cb;
          sb = [], Tb = [], Ub = bb.totalWeight
        }
        for (let cb = 0; cb < bb.animations.length; cb++) {
          const kb = bb.animations[cb];
          sb.push(kb.currentValue), Tb.push(kb.weight / Ub)
        }
        let Ib = 0;
        for (let bb = 0; bb < sb.length;) bb ? (Ib += Tb[bb], ab.f.SlerpToRef(Wb, sb[bb], Tb[bb] / Ib, Wb), bb++) : (ab.f.SlerpToRef(sb[bb], sb[bb + 1], Tb[bb + 1] / (Tb[bb] + Tb[bb + 1]), cb), Wb = cb, Ib = Tb[bb] + Tb[bb + 1], bb += 2)
      }
      for (let Tb = 0; Tb < bb.additiveAnimations.length; Tb++) {
        const cb = bb.additiveAnimations[Tb];
        0 !== cb.weight && (Wb.multiplyToRef(cb.currentValue, ab.m.Quaternion[0]), ab.f.SlerpToRef(Wb, ab.m.Quaternion[0], cb.weight, Wb))
      }
      return Wb
    }

    function Db(bb, cb) {
      cb && (cb.prototype.copyAnimationRange = function(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Jb.c(this.name, "_matrix", bb.animations[0].framePerSecond, Jb.c.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const ab = bb.animations[0].getRange(cb);
        if (!ab) return !1;
        const Tb = ab.from,
          Ub = ab.to,
          Ib = bb.animations[0].getKeys(),
          Hb = bb.length,
          fb = bb.getParent(),
          Mb = this.getParent(),
          Xb = kb && fb && Hb && this.length && Hb !== this.length,
          nb = Xb && Mb && fb ? Mb.length / fb.length : 1,
          mb = kb && !Mb && Wb && (1 !== Wb.x || 1 !== Wb.y || 1 !== Wb.z),
          lb = this.animations[0].getKeys();
        let Qb, eb, Cb;
        for (let Nb = 0, Vb = Ib.length; Nb < Vb; Nb++) Qb = Ib[Nb], Qb.frame >= Tb && Qb.frame <= Ub && (kb ? (Cb = Qb.value.clone(), Xb ? (eb = Cb.getTranslation(), Cb.setTranslation(eb.scaleInPlace(nb))) : mb && Wb ? (eb = Cb.getTranslation(), Cb.setTranslation(eb.multiplyInPlace(Wb))) : Cb = Qb.value) : Cb = Qb.value, lb.push({
          frame: Qb.frame + sb,
          value: Cb
        }));
        return this.animations[0].createRange(cb, Tb + sb, Ub + sb), !0
      }), bb && (bb.prototype._animate = function(bb) {
        const cb = this._animationWrites,
          sb = this._animationWriteCount;
        let kb = 0;
        for (let ab = this._animationStepWriteCount; ab < sb; ab++) {
          const bb = cb[ab];
          bb.tQ && -1 === bb.weight || (bb.tQ = !0, cb[ab] = cb[kb], cb[kb] = bb, kb++)
        }
        for (let ab = kb; ab < sb; ab++) {
          const bb = cb[ab];
          bb.runtimeAnimation = null, bb.target = null
        }
        if (this._animationWriteCount = kb, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Wb = Bb.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Wb
        }
        this.deltaTime = void 0 !== bb ? bb : this.useConstantAnimationDeltaTime ? 16 : (Wb - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Wb;
        const Tb = this._activeAnimatables;
        if (0 === Tb.length) return;
        this._animationTime += this.deltaTime;
        const Ub = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let ab = 0; ab < Tb.length; ab++) {
          const bb = Tb[ab];
          !bb._animate(Ub) && bb.disposeOnEnd && ab--
        }! function(bb) {
          if (bb._registeredForLateAnimationBindings.length) {
            for (let cb = 0; cb < bb._registeredForLateAnimationBindings.length; cb++) {
              const sb = bb._registeredForLateAnimationBindings.data[cb];
              for (const bb in sb._lateAnimationHolders) {
                const cb = sb._lateAnimationHolders[bb],
                  kb = cb.animations[0],
                  Wb = cb.originalValue;
                if (void 0 === Wb || null === Wb) continue;
                const Tb = Jb.c.AllowMatrixDecomposeForInterpolation && Wb.m;
                let Ub = sb[bb];
                if (Tb) Ub = yb(cb);
                else if (void 0 !== Wb.w) Ub = Pb(cb, Ub || ab.f.Identity());
                else {
                  let bb = 0,
                    sb = 1;
                  const ab = kb && kb._animationState.Aa === Jb.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (cb.totalWeight < 1) Ub = ab ? Wb.clone ? Wb.clone() : Wb : kb && Wb.scale ? Wb.scale(1 - cb.totalWeight) : kb ? Wb * (1 - cb.totalWeight) : Wb.clone ? Wb.clone() : Wb;
                  else if (kb) {
                    sb = cb.totalWeight;
                    const Tb = kb.weight / sb;
                    Ub = 1 !== Tb ? kb.currentValue.scale ? kb.currentValue.scale(Tb) : kb.currentValue * Tb : (cb.animations.length > 1 || cb.additiveAnimations.length > 0) && kb.currentValue.clone ? kb.currentValue.clone() : kb.currentValue, ab && (Ub.addToRef ? Ub.addToRef(Wb, Ub) : Ub += Wb), bb = 1
                  }
                  for (let kb = bb; kb < cb.animations.length; kb++) {
                    const bb = cb.animations[kb],
                      Wb = bb.weight / sb;
                    Wb && (bb.currentValue.scaleAndAddToRef ? bb.currentValue.scaleAndAddToRef(Wb, Ub) : Ub += bb.currentValue * Wb)
                  }
                  for (let kb = 0; kb < cb.additiveAnimations.length; kb++) {
                    const bb = cb.additiveAnimations[kb],
                      sb = bb.weight;
                    sb && (bb.currentValue.scaleAndAddToRef ? bb.currentValue.scaleAndAddToRef(sb, Ub) : Ub += bb.currentValue * sb)
                  }
                }
                sb[bb] = Ub
              }
              sb._lateAnimationHolders = {}
            }
            bb._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, bb.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((bb, cb) => bb.playOrder - cb.playOrder))
      }, bb.prototype.beginWeightedAnimation = function(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Tb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = arguments.length > 7 ? arguments[7] : void 0,
          Ib = arguments.length > 8 ? arguments[8] : void 0,
          Hb = arguments.length > 9 ? arguments[9] : void 0,
          fb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Mb = this.beginAnimation(bb, cb, sb, Wb, ab, Tb, Ub, !1, Ib, Hb, fb);
        return Mb.weight = kb, Mb
      }, bb.prototype.beginAnimation = function(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ab = arguments.length > 5 ? arguments[5] : void 0,
          Tb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Ib = arguments.length > 8 ? arguments[8] : void 0,
          Hb = arguments.length > 9 ? arguments[9] : void 0,
          fb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Wb < 0) {
          const bb = cb;
          cb = sb, sb = bb, Wb = -Wb
        }
        cb > sb && (Wb = -Wb), Ub && this.stopAnimation(bb, void 0, Ib), Tb || (Tb = new tb(this, bb, cb, sb, kb, Wb, ab, void 0, Hb, fb));
        const Mb = !Ib || Ib(bb);
        if (bb.animations && Mb && Tb.appendAnimations(bb, bb.animations), bb.getAnimatables) {
          const fb = bb.getAnimatables();
          for (let bb = 0; bb < fb.length; bb++) this.beginAnimation(fb[bb], cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb)
        }
        return Tb.reset(), Tb
      }, bb.prototype.beginHierarchyAnimation = function(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Tb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = arguments.length > 7 ? arguments[7] : void 0,
          Ib = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Hb = arguments.length > 9 ? arguments[9] : void 0,
          fb = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Mb = bb.getDescendants(cb),
          Xb = [];
        Xb.push(this.beginAnimation(bb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, void 0, fb));
        for (const nb of Mb) Xb.push(this.beginAnimation(nb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, void 0, fb));
        return Xb
      }, bb.prototype.beginDirectAnimation = function(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (ab < 0) {
          const bb = sb;
          sb = kb, kb = bb, ab = -ab
        }
        sb > kb && (ab = -ab);
        return new tb(this, bb, sb, kb, Wb, ab, arguments.length > 6 ? arguments[6] : void 0, cb, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, bb.prototype.beginDirectHierarchyAnimation = function(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        let Hb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const fb = bb.getDescendants(cb),
          Mb = [];
        Mb.push(this.beginDirectAnimation(bb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb));
        for (const Xb of fb) Mb.push(this.beginDirectAnimation(Xb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb));
        return Mb
      }, bb.prototype.getAnimatableByTarget = function(bb) {
        for (let cb = 0; cb < this._activeAnimatables.length; cb++)
          if (this._activeAnimatables[cb].target === bb) return this._activeAnimatables[cb];
        return null
      }, bb.prototype.getAllAnimatablesByTarget = function(bb) {
        const cb = [];
        for (let sb = 0; sb < this._activeAnimatables.length; sb++) this._activeAnimatables[sb].target === bb && cb.push(this._activeAnimatables[sb]);
        return cb
      }, bb.prototype.stopAnimation = function(bb, cb, sb) {
        const kb = this.getAllAnimatablesByTarget(bb);
        for (const Wb of kb) Wb.stop(cb, sb)
      }, bb.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let bb = 0; bb < this._activeAnimatables.length; bb++) this._activeAnimatables[bb].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const bb of this.animationGroups) bb.stop()
      })
    }
    tb.ProcessPausedAnimatables = !1;
    var Eb, ib = sb(36666),
      Ob = sb(39667),
      Gb = sb(39296);
    class Kb extends Ob.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(bb) {
        (bb.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.ssb(bb), this._markAsDirtyAndDecompose())
      }
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(bb, cb.EY(), !1), this.name = bb, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = cb, this._localMatrix = kb?.clone() ?? ab.e.Identity(), this._restMatrix = Wb ?? this._localMatrix.clone(), this._bindMatrix = Tb ?? this._localMatrix.clone(), this._index = Ub, this._absoluteMatrix = new ab.e, this._absoluteBindMatrix = new ab.e, this._absoluteInverseBindMatrix = new ab.e, this._finalMatrix = new ab.e, cb.bones.push(this), this.setParent(sb, !1), this._updateAbsoluteBindMatrices()
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
      set parent(bb) {
        this.setParent(bb)
      }
      setParent(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== bb) {
          if (this.parent) {
            const bb = this.parent.children.indexOf(this); - 1 !== bb && this.parent.children.splice(bb, 1)
          }
          this._parentNode = bb, this.parent && this.parent.children.push(this), cb && this._updateAbsoluteBindMatrices(), this.Tcb()
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
      setRestMatrix(bb) {
        this._restMatrix.ssb(bb)
      }
      setRestPose(bb) {
        this.setRestMatrix(bb)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(bb) {
        this.O4(bb)
      }
      setBindPose(bb) {
        this.setBindMatrix(bb)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const bb = ab.m.Fm[0],
            cb = ab.m.Quaternion[0],
            sb = ab.m.Fm[1];
          this.getRestMatrix().decompose(bb, cb, sb), this._linkedTransformNode.position.ssb(sb), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? ab.f.Identity(), this._linkedTransformNode.rotationQuaternion.ssb(cb), this._linkedTransformNode.bl.ssb(bb)
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
      linkTransformNode(bb) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = bb, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.Qbb
      }
      set position(bb) {
        this._decompose(), this.Qbb.ssb(bb), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(bb) {
        this.setRotation(bb)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(bb) {
        this.setRotationQuaternion(bb)
      }
      get bl() {
        return this.getScale()
      }
      set bl(bb) {
        this.setScale(bb)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = ab.p.Zero(), this._localRotation = ab.f.Zero(), this.Qbb = ab.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.Qbb))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, ab.e.ComposeToRef(this._localScaling, this._localRotation, this.Qbb, this._localMatrix)) : this._needToCompose = !1)
      }
      O4(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.ssb(bb), cb && this._updateAbsoluteBindMatrices(), sb ? this._matrix = bb : this.Tcb()
      }
      _updateAbsoluteBindMatrices(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (bb || (bb = this._bindMatrix), this.parent ? bb.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.ssb(bb), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), cb)
          for (let sb = 0; sb < this.children.length; sb++) this.children[sb]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      Tcb() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.Tcb(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.Tcb(), this._needToDecompose = !0
      }
      _updatePosition(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wb = this.getLocalMatrix();
        if (0 == cb) kb ? (Wb.addAtIndex(12, bb.x), Wb.addAtIndex(13, bb.y), Wb.addAtIndex(14, bb.z)) : Wb.setTranslationFromFloats(bb.x, bb.y, bb.z);
        else {
          const cb = Kb._TmpMats[0],
            Tb = Kb._TmpVecs[0];
          this.parent ? (cb.ssb(this.parent.getAbsoluteMatrix()), sb && cb.multiplyToRef(sb.getWorldMatrix(), cb)) : ab.e.IdentityToRef(cb), kb && cb.setTranslationFromFloats(0, 0, 0), cb.invert(), ab.p.TransformCoordinatesToRef(bb, cb, Tb), kb ? (Wb.addAtIndex(12, Tb.x), Wb.addAtIndex(13, Tb.y), Wb.addAtIndex(14, Tb.z)) : Wb.setTranslationFromFloats(Tb.x, Tb.y, Tb.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(bb, cb, sb, !0)
      }
      setPosition(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(bb, cb, sb, !1)
      }
      setAbsolutePosition(bb, cb) {
        this.setPosition(bb, 1, cb)
      }
      scale(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wb = this.getLocalMatrix(),
          Tb = Kb._TmpMats[0];
        ab.e.ScalingToRef(bb, cb, sb, Tb), Tb.multiplyToRef(Wb, Wb), Tb.invert();
        for (const ab of this.children) {
          const kb = ab.getLocalMatrix();
          kb.multiplyToRef(Tb, kb), kb.multiplyAtIndex(12, bb), kb.multiplyAtIndex(13, cb), kb.multiplyAtIndex(14, sb), ab._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), kb)
          for (const ab of this.children) ab.scale(bb, cb, sb, kb)
      }
      setScale(bb) {
        this._decompose(), this._localScaling.ssb(bb), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(bb) {
        this._decompose(), bb.ssb(this._localScaling)
      }
      setYawPitchRoll(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === kb) {
          const Tb = Kb._TmpQuat;
          return ab.f.RotationYawPitchRollToRef(bb, cb, sb, Tb), void this.setRotationQuaternion(Tb, kb, Wb)
        }
        const Tb = Kb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Tb, Wb)) return;
        const Ub = Kb._TmpMats[1];
        ab.e.RotationYawPitchRollToRef(bb, cb, sb, Ub), Tb.multiplyToRef(Ub, Ub), this._rotateWithMatrix(Ub, kb, Wb)
      }
      rotate(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        const Wb = Kb._TmpMats[0];
        Wb.setTranslationFromFloats(0, 0, 0), ab.e.RotationAxisToRef(bb, cb, Wb), this._rotateWithMatrix(Wb, sb, kb)
      }
      setAxisAngle(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === sb) {
          const Wb = Kb._TmpQuat;
          return ab.f.RotationAxisToRef(bb, cb, Wb), void this.setRotationQuaternion(Wb, sb, kb)
        }
        const Wb = Kb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Wb, kb)) return;
        const Tb = Kb._TmpMats[1];
        ab.e.RotationAxisToRef(bb, cb, Tb), Wb.multiplyToRef(Tb, Tb), this._rotateWithMatrix(Tb, sb, kb)
      }
      setRotation(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(bb.y, bb.x, bb.z, cb, sb)
      }
      setRotationQuaternion(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === cb) return this._decompose(), this._localRotation.ssb(bb), void this._markAsDirtyAndCompose();
        const kb = Kb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(kb, sb)) return;
        const Wb = Kb._TmpMats[1];
        ab.e.FromQuaternionToRef(bb, Wb), kb.multiplyToRef(Wb, Wb), this._rotateWithMatrix(Wb, cb, sb)
      }
      setRotationMatrix(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === cb) {
          const kb = Kb._TmpQuat;
          return ab.f.FromRotationMatrixToRef(bb, kb), void this.setRotationQuaternion(kb, cb, sb)
        }
        const kb = Kb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(kb, sb)) return;
        const Wb = Kb._TmpMats[1];
        Wb.ssb(bb), kb.multiplyToRef(bb, Wb), this._rotateWithMatrix(Wb, cb, sb)
      }
      _rotateWithMatrix(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const kb = this.getLocalMatrix(),
          Wb = kb.m[12],
          ab = kb.m[13],
          Tb = kb.m[14],
          Ub = this.getParent(),
          Ib = Kb._TmpMats[3],
          Hb = Kb._TmpMats[4];
        Ub && 1 == cb ? (sb ? (Ib.ssb(sb.getWorldMatrix()), Ub.getAbsoluteMatrix().multiplyToRef(Ib, Ib)) : Ib.ssb(Ub.getAbsoluteMatrix()), Hb.ssb(Ib), Hb.invert(), kb.multiplyToRef(Ib, kb), kb.multiplyToRef(bb, kb), kb.multiplyToRef(Hb, kb)) : 1 == cb && sb ? (Ib.ssb(sb.getWorldMatrix()), Hb.ssb(Ib), Hb.invert(), kb.multiplyToRef(Ib, kb), kb.multiplyToRef(bb, kb), kb.multiplyToRef(Hb, kb)) : kb.multiplyToRef(bb, kb), kb.setTranslationFromFloats(Wb, ab, Tb), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(bb, cb) {
        const sb = Kb._TmpMats[2];
        return bb.ssb(this.getAbsoluteMatrix()), cb ? (bb.multiplyToRef(cb.getWorldMatrix(), bb), ab.e.ScalingToRef(cb.bl.x, cb.bl.y, cb.bl.z, sb)) : ab.e.IdentityToRef(sb), bb.invert(), !isNaN(bb.m[0]) && (sb.multiplyAtIndex(0, this._scalingDeterminant), bb.multiplyToRef(sb, bb), !0)
      }
      aN() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sb = ab.p.Zero();
        return this.getPositionToRef(bb, cb, sb), sb
      }
      getPositionToRef() {
        let bb = arguments.length > 1 ? arguments[1] : void 0,
          cb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const bb = this.getLocalMatrix();
          cb.x = bb.m[12], cb.y = bb.m[13], cb.z = bb.m[14]
        } else {
          const sb = Kb._TmpMats[0].ssb(this.getAbsoluteMatrix());
          bb && sb.multiplyToRef(bb.getWorldMatrix(), sb), cb.x = sb.m[12], cb.y = sb.m[13], cb.z = sb.m[14]
        }
      }
      getAbsolutePosition() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const cb = ab.p.Zero();
        return this.getPositionToRef(1, bb, cb), cb
      }
      getAbsolutePositionToRef(bb, cb) {
        this.getPositionToRef(1, bb, cb)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.ssb(this._localMatrix);
          const bb = this._skeleton.getPoseMatrix();
          bb && this._absoluteMatrix.multiplyToRef(bb, this._absoluteMatrix)
        }
        const bb = this.children,
          cb = bb.length;
        for (let sb = 0; sb < cb; sb++) bb[sb].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      Jq(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sb = ab.p.Zero();
        return this.getDirectionToRef(bb, cb, sb), sb
      }
      getDirectionToRef(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const kb = Kb._TmpMats[0].ssb(this.getAbsoluteMatrix());
        cb && kb.multiplyToRef(cb.getWorldMatrix(), kb), ab.p.TransformNormalToRef(bb, kb, sb), sb.normalize()
      }
      getRotation() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sb = ab.p.Zero();
        return this.getRotationToRef(bb, cb, sb), sb
      }
      getRotationToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const kb = Kb._TmpQuat;
        this.getRotationQuaternionToRef(bb, cb, kb), kb.toEulerAnglesToRef(sb)
      }
      getRotationQuaternion() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sb = ab.f.Identity();
        return this.getRotationQuaternionToRef(bb, cb, sb), sb
      }
      getRotationQuaternionToRef() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), cb.ssb(this._localRotation);
        else {
          const sb = Kb._TmpMats[0],
            kb = this.getAbsoluteMatrix();
          bb ? kb.multiplyToRef(bb.getWorldMatrix(), sb) : sb.ssb(kb), sb.multiplyAtIndex(0, this._scalingDeterminant), sb.multiplyAtIndex(1, this._scalingDeterminant), sb.multiplyAtIndex(2, this._scalingDeterminant), sb.decompose(void 0, cb, void 0)
        }
      }
      getRotationMatrix() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 ? arguments[1] : void 0;
        const sb = ab.e.Identity();
        return this.getRotationMatrixToRef(bb, cb, sb), sb
      }
      getRotationMatrixToRef() {
        let bb = arguments.length > 1 ? arguments[1] : void 0,
          cb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(cb);
        else {
          const sb = Kb._TmpMats[0],
            kb = this.getAbsoluteMatrix();
          bb ? kb.multiplyToRef(bb.getWorldMatrix(), sb) : sb.ssb(kb), sb.multiplyAtIndex(0, this._scalingDeterminant), sb.multiplyAtIndex(1, this._scalingDeterminant), sb.multiplyAtIndex(2, this._scalingDeterminant), sb.getRotationMatrixToRef(cb)
        }
      }
      getAbsolutePositionFromLocal(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sb = ab.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(bb, cb, sb), sb
      }
      getAbsolutePositionFromLocalToRef(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const kb = Kb._TmpMats[0].ssb(this.getAbsoluteMatrix());
        cb && kb.multiplyToRef(cb.getWorldMatrix(), kb), ab.p.TransformCoordinatesToRef(bb, kb, sb)
      }
      getLocalPositionFromAbsolute(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sb = ab.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(bb, cb, sb), sb
      }
      getLocalPositionFromAbsoluteToRef(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const kb = Kb._TmpMats[0].ssb(this.getAbsoluteMatrix());
        cb && kb.multiplyToRef(cb.getWorldMatrix(), kb), kb.invert(), ab.p.TransformCoordinatesToRef(bb, kb, sb)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const bb = this._skeleton.bones.indexOf(this);
        if (-1 !== bb && this._skeleton.bones.splice(bb, 1), this._parentNode && this._parentNode.children) {
          const bb = this._parentNode.children,
            cb = bb.indexOf(this); - 1 !== cb && bb.splice(cb, 1)
        }
        super.dispose()
      }
    }
    Kb._TmpVecs = (0, ib.b)(2, ab.p.Zero), Kb._TmpQuat = ab.f.Identity(), Kb._TmpMats = (0, ib.b)(5, ab.e.Identity), (Eb = Kb.prototype).copyAnimationRange ?? (Eb.copyAnimationRange = (0, Gb.e)("Bone", "copyAnimationRange"));
    var Zb = sb(39524);
    let zb = !1;
    var qb = sb(39373),
      db = sb(39755),
      Ab = sb(39767),
      wb = sb(39761),
      rb = sb(39557);

    function ob(bb, cb) {
      const sb = (0, nb.RandomRange)(0, 1);
      fb.g.LerpToRef(cb.color1, cb.color2, sb, bb.color)
    }

    function Sb(bb, cb) {
      cb.colorDead.subtractToRef(bb.color, cb._colorDiff), cb._colorDiff.scaleToRef(1 / bb.lifeTime, bb.colorStep)
    }

    function Rb(bb, cb) {
      bb._properties.currentColorGradient = cb._colorGradients[0], bb._properties.currentColorGradient.getColorToRef(bb.color), bb._properties.currentColor1.ssb(bb.color), cb._colorGradients.length > 1 ? cb._colorGradients[1].getColorToRef(bb._properties.currentColor2) : bb._properties.currentColor2.ssb(bb.color)
    }

    function vb(bb, cb) {
      const sb = cb._colorGradients;
      kb.i.GetCurrentGradient(cb._ratio, sb, ((cb, sb, kb) => {
        cb !== bb._properties.currentColorGradient && (bb._properties.currentColor1.ssb(bb._properties.currentColor2), sb.getColorToRef(bb._properties.currentColor2), bb._properties.currentColorGradient = cb), fb.g.LerpToRef(bb._properties.currentColor1, bb._properties.currentColor2, kb, bb.color), bb.color.a < 0 && (bb.color.a = 0)
      }))
    }

    function Fb(bb, cb) {
      bb.colorStep.scaleToRef(cb._scaledUpdateSpeed, cb._scaledColorStep), bb.color.addInPlace(cb._scaledColorStep), bb.color.a < 0 && (bb.color.a = 0)
    }

    function xb(bb, cb) {
      kb.i.GetCurrentGradient(cb._ratio, cb._angularSpeedGradients, ((cb, sb, kb) => {
        cb !== bb._properties.currentAngularSpeedGradient && (bb._properties.currentAngularSpeed1 = bb._properties.currentAngularSpeed2, bb._properties.currentAngularSpeed2 = sb.getFactor(), bb._properties.currentAngularSpeedGradient = cb), bb.angularSpeed = (0, nb.Lerp)(bb._properties.currentAngularSpeed1, bb._properties.currentAngularSpeed2, kb)
      }))
    }

    function jb(bb, cb) {
      bb.angle += bb.angularSpeed * cb._scaledUpdateSpeed
    }

    function pb(bb, cb) {
      cb.particleEmitterType.startDirectionFunction(cb._emitterWorldMatrix, bb.direction, bb, cb.isLocal, cb._emitterInverseWorldMatrix)
    }

    function bc(bb, cb) {
      cb.startDirectionFunction(cb._emitterWorldMatrix, bb.direction, bb, cb.isLocal)
    }

    function cc(bb, cb) {
      bb._properties.currentVelocityGradient = cb._velocityGradients[0], bb._properties.currentVelocity1 = bb._properties.currentVelocityGradient.getFactor(), cb._velocityGradients.length > 1 ? bb._properties.currentVelocity2 = cb._velocityGradients[1].getFactor() : bb._properties.currentVelocity2 = bb._properties.currentVelocity1
    }

    function sc(bb, cb) {
      bb._properties.currentLimitVelocityGradient = cb._limitVelocityGradients[0], bb._properties.currentLimitVelocity1 = bb._properties.currentLimitVelocityGradient.getFactor(), cb._limitVelocityGradients.length > 1 ? bb._properties.currentLimitVelocity2 = cb._limitVelocityGradients[1].getFactor() : bb._properties.currentLimitVelocity2 = bb._properties.currentLimitVelocity1
    }

    function kc(bb, cb) {
      kb.i.GetCurrentGradient(cb._ratio, cb._velocityGradients, ((cb, sb, kb) => {
        cb !== bb._properties.currentVelocityGradient && (bb._properties.currentVelocity1 = bb._properties.currentVelocity2, bb._properties.currentVelocity2 = sb.getFactor(), bb._properties.currentVelocityGradient = cb), bb._properties.directionScale *= (0, nb.Lerp)(bb._properties.currentVelocity1, bb._properties.currentVelocity2, kb)
      }))
    }

    function Wc(bb, cb) {
      kb.i.GetCurrentGradient(cb._ratio, cb._limitVelocityGradients, ((sb, kb, Wb) => {
        sb !== bb._properties.currentLimitVelocityGradient && (bb._properties.currentLimitVelocity1 = bb._properties.currentLimitVelocity2, bb._properties.currentLimitVelocity2 = kb.getFactor(), bb._properties.currentLimitVelocityGradient = sb);
        const ab = (0, nb.Lerp)(bb._properties.currentLimitVelocity1, bb._properties.currentLimitVelocity2, Wb);
        bb.direction.length() > ab && bb.direction.scaleInPlace(cb.limitVelocityDamping)
      }))
    }

    function ac(bb) {
      bb.direction.scaleToRef(bb._properties.directionScale, bb._properties.scaledDirection)
    }

    function Tc(bb, cb) {
      cb.particleEmitterType.startPositionFunction(cb._emitterWorldMatrix, bb.position, bb, cb.isLocal)
    }

    function Uc(bb, cb) {
      cb.startPositionFunction(cb._emitterWorldMatrix, bb.position, bb, cb.isLocal)
    }

    function Ic(bb, cb) {
      bb._properties.localPosition ? bb._properties.localPosition.ssb(bb.position) : bb._properties.localPosition = bb.position.clone(), ab.p.TransformCoordinatesToRef(bb._properties.localPosition, cb._emitterWorldMatrix, bb.position)
    }

    function Hc(bb, cb) {
      cb.isLocal && bb._properties.localPosition ? (bb._properties.localPosition.addInPlace(bb._properties.scaledDirection), ab.p.TransformCoordinatesToRef(bb._properties.localPosition, cb._emitterWorldMatrix, bb.position)) : bb.position.addInPlace(bb._properties.scaledDirection)
    }

    function fc(bb, cb) {
      bb._properties.currentDragGradient = cb._dragGradients[0], bb._properties.currentDrag1 = bb._properties.currentDragGradient.getFactor(), cb._dragGradients.length > 1 ? bb._properties.currentDrag2 = cb._dragGradients[1].getFactor() : bb._properties.currentDrag2 = bb._properties.currentDrag1
    }

    function Mc(bb, cb) {
      kb.i.GetCurrentGradient(cb._ratio, cb._dragGradients, ((cb, sb, kb) => {
        cb !== bb._properties.currentDragGradient && (bb._properties.currentDrag1 = bb._properties.currentDrag2, bb._properties.currentDrag2 = sb.getFactor(), bb._properties.currentDragGradient = cb);
        const Wb = (0, nb.Lerp)(bb._properties.currentDrag1, bb._properties.currentDrag2, kb);
        bb._properties.scaledDirection.scaleInPlace(1 - Wb)
      }))
    }

    function Xc(bb, cb) {
      bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2 ? (bb._properties.randomNoiseCoordinates1.I5(Math.random(), Math.random(), Math.random()), bb._properties.randomNoiseCoordinates2.I5(Math.random(), Math.random(), Math.random())) : (bb._properties.randomNoiseCoordinates1 = new ab.p(Math.random(), Math.random(), Math.random()), bb._properties.randomNoiseCoordinates2 = new ab.p(Math.random(), Math.random(), Math.random()))
    }

    function nc(bb, cb) {
      const sb = cb._noiseTextureData,
        kb = cb._noiseTextureSize;
      if (sb && kb && bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2) {
        const Wb = cb._fetchR(bb._properties.randomNoiseCoordinates1.x, bb._properties.randomNoiseCoordinates1.y, kb.width, kb.height, sb),
          Tb = cb._fetchR(bb._properties.randomNoiseCoordinates1.z, bb._properties.randomNoiseCoordinates2.x, kb.width, kb.height, sb),
          Ub = cb._fetchR(bb._properties.randomNoiseCoordinates2.y, bb._properties.randomNoiseCoordinates2.z, kb.width, kb.height, sb),
          Ib = ab.m.Fm[0],
          Hb = ab.m.Fm[1];
        Ib.I5((2 * Wb - 1) * cb.noiseStrength.x, (2 * Tb - 1) * cb.noiseStrength.y, (2 * Ub - 1) * cb.noiseStrength.z), Ib.scaleToRef(cb._tempScaledUpdateSpeed, Hb), bb.direction.addInPlace(Hb)
      }
    }

    function mc(bb, cb) {
      cb.gravity.scaleToRef(cb._tempScaledUpdateSpeed, cb._scaledGravity), bb.direction.addInPlace(cb._scaledGravity)
    }

    function lc(bb, cb) {
      bb.size = (0, nb.RandomRange)(cb.minSize, cb.maxSize), bb.scale.I5((0, nb.RandomRange)(cb.minScaleX, cb.maxScaleX), (0, nb.RandomRange)(cb.minScaleY, cb.maxScaleY))
    }

    function Qc(bb, cb) {
      bb._properties.currentSizeGradient = cb._sizeGradients[0], bb._properties.currentSize1 = bb._properties.currentSizeGradient.getFactor(), bb.size = bb._properties.currentSize1, cb._sizeGradients.length > 1 ? bb._properties.currentSize2 = cb._sizeGradients[1].getFactor() : bb._properties.currentSize2 = bb._properties.currentSize1, bb.scale.I5((0, nb.RandomRange)(cb.minScaleX, cb.maxScaleX), (0, nb.RandomRange)(cb.minScaleY, cb.maxScaleY))
    }

    function ec(bb, cb) {
      const sb = cb._actualFrame / cb.targetStopDuration;
      kb.i.GetCurrentGradient(sb, cb._startSizeGradients, ((sb, kb, Wb) => {
        sb !== cb._currentStartSizeGradient && (cb._currentStartSize1 = cb._currentStartSize2, cb._currentStartSize2 = kb.getFactor(), cb._currentStartSizeGradient = sb);
        const ab = (0, nb.Lerp)(cb._currentStartSize1, cb._currentStartSize2, Wb);
        bb.scale.scaleInPlace(ab)
      }))
    }

    function Cc(bb, cb) {
      kb.i.GetCurrentGradient(cb._ratio, cb._sizeGradients, ((cb, sb, kb) => {
        cb !== bb._properties.currentSizeGradient && (bb._properties.currentSize1 = bb._properties.currentSize2, bb._properties.currentSize2 = sb.getFactor(), bb._properties.currentSizeGradient = cb), bb.size = (0, nb.Lerp)(bb._properties.currentSize1, bb._properties.currentSize2, kb)
      }))
    }

    function Nc(bb, cb) {
      bb.remapData = new ab.t(0, 1, 0, 1)
    }

    function Vc(bb, cb) {
      cb._colorRemapGradients && cb._colorRemapGradients.length > 0 && kb.i.GetCurrentGradient(cb._ratio, cb._colorRemapGradients, ((cb, sb, kb) => {
        const Wb = (0, nb.Lerp)(cb.factor1, sb.factor1, kb),
          ab = (0, nb.Lerp)(cb.factor2, sb.factor2, kb);
        bb.remapData.x = Wb, bb.remapData.y = ab - Wb
      })), cb._alphaRemapGradients && cb._alphaRemapGradients.length > 0 && kb.i.GetCurrentGradient(cb._ratio, cb._alphaRemapGradients, ((cb, sb, kb) => {
        const Wb = (0, nb.Lerp)(cb.factor1, sb.factor1, kb),
          ab = (0, nb.Lerp)(cb.factor2, sb.factor2, kb);
        bb.remapData.z = Wb, bb.remapData.w = ab - Wb
      }))
    }

    function Lc(bb, cb) {
      const sb = (0, nb.Clamp)(cb._actualFrame / cb.targetStopDuration);
      kb.i.GetCurrentGradient(sb, cb._lifeTimeGradients, ((cb, kb) => {
        const Wb = cb,
          ab = kb,
          Tb = Wb.getFactor(),
          Ub = ab.getFactor(),
          Ib = (sb - Wb.gradient) / (ab.gradient - Wb.gradient);
        bb.lifeTime = (0, nb.Lerp)(Tb, Ub, Ib)
      })), cb._emitPower = (0, nb.RandomRange)(cb.minEmitPower, cb.maxEmitPower)
    }

    function uc(bb, cb) {
      bb.lifeTime = (0, nb.RandomRange)(cb.minLifeTime, cb.maxLifeTime), cb._emitPower = (0, nb.RandomRange)(cb.minEmitPower, cb.maxEmitPower)
    }

    function Yc(bb, cb) {
      0 === cb._emitPower ? (bb._properties.initialDirection ? bb._properties.initialDirection.ssb(bb.direction) : bb._properties.initialDirection = bb.direction.clone(), bb.direction.set(0, 0, 0)) : (bb._properties.initialDirection = null, bb.direction.scaleInPlace(cb._emitPower)), bb.direction.addInPlace(cb._inheritedVelocityOffset)
    }

    function hc(bb, cb) {
      bb.angularSpeed = (0, nb.RandomRange)(cb.minAngularSpeed, cb.maxAngularSpeed), bb.angle = (0, nb.RandomRange)(cb.minInitialRotation, cb.maxInitialRotation)
    }

    function Jc(bb, cb) {
      bb._properties.currentAngularSpeedGradient = cb._angularSpeedGradients[0], bb.angularSpeed = bb._properties.currentAngularSpeedGradient.getFactor(), bb._properties.currentAngularSpeed1 = bb.angularSpeed, cb._angularSpeedGradients.length > 1 ? bb._properties.currentAngularSpeed2 = cb._angularSpeedGradients[1].getFactor() : bb._properties.currentAngularSpeed2 = bb._properties.currentAngularSpeed1, bb.angle = (0, nb.RandomRange)(cb.minInitialRotation, cb.maxInitialRotation)
    }

    function gc(bb, cb) {
      bb._properties.initialStartSpriteCellId = cb.startSpriteCellID, bb._properties.initialEndSpriteCellId = cb.endSpriteCellID, bb._properties.initialSpriteCellLoop = cb.spriteCellLoop
    }

    function Bc(bb, cb) {
      bb.previousItem = cb.previousItem, bb.nextItem = cb, cb.previousItem && (cb.previousItem.nextItem = bb), cb.previousItem = bb
    }

    function tc(bb, cb) {
      bb.previousItem = cb, bb.nextItem = cb.nextItem, cb.nextItem && (cb.nextItem.previousItem = bb), cb.nextItem = bb
    }

    function yc(bb) {
      bb.previousItem && (bb.previousItem.nextItem = bb.nextItem), bb.nextItem && (bb.nextItem.previousItem = bb.previousItem)
    }
    var Pc = sb(39796);
    class Dc extends ub {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(bb) {
        this._startDirectionFunction !== bb && (this._startDirectionFunction = bb, this._directionCreation.process = bb ? bc : pb)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(bb) {
        this._startPositionFunction !== bb && (this._startPositionFunction = bb, this._positionCreation.process = bb ? Uc : Tc)
      }
      set onDispose(bb) {
        this._onDisposeObserver && this.ZY.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZY.add(bb)
      }
      get Scb() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(bb) {
        this._useRampGradients !== bb && (this._useRampGradients = bb, this._resetEffect(), bb ? (this._rampCreation = {
          process: Nc,
          previousItem: null,
          nextItem: null
        }, tc(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Vc,
          previousItem: null,
          nextItem: null
        }, tc(this._remapGradientProcessing, this._gravityProcessing))) : (yc(this._rampCreation), yc(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(bb) {
        this._isLocal !== bb && (this._isLocal = bb, bb ? (this._isLocalCreation = {
          process: Ic,
          previousItem: null,
          nextItem: null
        }, tc(this._isLocalCreation, this._positionCreation)) : yc(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(bb) {
        this._animationSheetEnabled !== bb && (this._animationSheetEnabled = bb, bb ? (this._sheetCreation = {
          process: gc,
          previousItem: null,
          nextItem: null
        }, tc(this._sheetCreation, this._colorDeadCreation)) : yc(this._sheetCreation), this._reset())
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[bb]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[bb] ?? this._customWrappers[0]
      }
      setCustomEffect(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[cb] = new db.b(this._engine), this._customWrappers[cb].effect = bb, this._customWrappers[cb].drawContext && (this._customWrappers[cb].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Wb.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(bb) {
        if (this.noiseTexture !== bb) {
          if (this._noiseTexture = bb, !bb) return yc(this._noiseCreation), void yc(this._noiseProcessing);
          this._noiseCreation = {
            process: Xc,
            previousItem: null,
            nextItem: null
          }, tc(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: nc,
            previousItem: null,
            nextItem: null
          }, tc(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Hb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        zb || (zb = !0, Db(Zb.c, Kb)), (0, qb.b)(), super(bb), this._emitterInverseWorldMatrix = ab.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new ab.p, this.ZY = new Wb.c, this.onStoppedObservable = new Wb.c, this.onStartedObservable = new Wb.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new fb.g(0, 0, 0, 0), this._colorDiff = new fb.g(0, 0, 0, 0), this._scaledGravity = ab.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = bb => {}, this.recycleParticle = bb => {
          const cb = this._particles.pop();
          cb !== bb && cb.copyTo(bb), cb.metadata = null, this._stockParticles.push(cb)
        }, this._createParticle = () => {
          let bb;
          return 0 !== this._stockParticles.length ? (bb = this._stockParticles.pop(), bb._reset()) : bb = new hb(this), this._prepareParticle(bb), bb
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = cb, this._epsilon = Ub, sb && "Scene" !== sb.getClassName() ? (this._engine = sb, this.defaultProjectionMatrix = ab.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = sb || Ib.d.LastCreatedScene, this._engine = this._scene.Sm(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.mV.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: uc,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Tc,
          previousItem: null,
          nextItem: null
        }, tc(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: pb,
          previousItem: null,
          nextItem: null
        }, tc(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Yc,
          previousItem: null,
          nextItem: null
        }, tc(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: lc,
          previousItem: null,
          nextItem: null
        }, tc(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: hc,
          previousItem: null,
          nextItem: null
        }, tc(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: ob,
          previousItem: null,
          nextItem: null
        }, tc(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Sb,
          previousItem: null,
          nextItem: null
        }, tc(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Hb || (this._colorProcessing = {
          process: Fb,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: jb,
          previousItem: null,
          nextItem: null
        }, tc(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: ac,
          previousItem: null,
          nextItem: null
        }, tc(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Hc,
          previousItem: null,
          nextItem: null
        }, tc(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: mc,
          previousItem: null,
          nextItem: null
        }, tc(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Tb, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new db.b(this._engine)
        }, this._customWrappers[0].effect = kb, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Mb.d, this.updateFunction = bb => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((bb => {
            this._noiseTextureData = bb
          })));
          const cb = bb === this._particles;
          for (let sb = 0; sb < bb.length; sb++) {
            const kb = bb[sb];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Wb = kb.age;
            if (kb.age += this._tempScaledUpdateSpeed, kb.age > kb.lifeTime) {
              const bb = kb.age - Wb,
                cb = kb.lifeTime - Wb;
              this._tempScaledUpdateSpeed = cb * this._tempScaledUpdateSpeed / bb, kb.age = kb.lifeTime
            }
            this._ratio = kb.age / kb.lifeTime, kb._properties.directionScale = this._tempScaledUpdateSpeed;
            let ab = this._updateQueueStart;
            for (; ab;) ab.process(kb, this), ab = ab.nextItem;
            if (this._isAnimationSheetEnabled && !Hb && kb.updateCellIndex(), kb._inheritParticleInfoToSubEmitters(), kb.age >= kb.lifeTime) {
              if (this._emitFromParticle(kb), kb._properties.attachedSubEmitters) {
                for (const bb of kb._properties.attachedSubEmitters) bb.particleSystem.disposeOnStop = !0, bb.particleSystem.stop();
                kb._properties.attachedSubEmitters = null
              }
              this.recycleParticle(kb), cb && sb--
            } else;
          }
        }
      }
      serialize(bb) {
        throw new Error("Method not implemented.")
      }
      clone(bb, cb) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Lc : this._lifeTimeCreation.process = uc
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: ec,
          previousItem: null,
          nextItem: null
        }, tc(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (yc(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(bb) {
        this.targetStopDuration !== bb && (this._targetStopDuration = bb, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(bb, cb, sb) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, bb, cb, sb), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(bb) {
        return this._removeFactorGradient(this._lifeTimeGradients, bb), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(bb, cb, sb) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Qc, this._sizeGradientProcessing = {
          process: Cc,
          previousItem: null,
          nextItem: null
        }, Bc(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, bb, cb, sb), this
      }
      removeSizeGradient(bb) {
        return this._removeFactorGradient(this._sizeGradients, bb), 0 === this._sizeGradients?.length && (yc(this._sizeGradientProcessing), this._sizeCreation.process = lc), this
      }
      addColorRemapGradient(bb, cb, sb) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, bb, cb, sb), this
      }
      removeColorRemapGradient(bb) {
        return this._removeFactorGradient(this._colorRemapGradients, bb), this
      }
      addAlphaRemapGradient(bb, cb, sb) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, bb, cb, sb), this
      }
      removeAlphaRemapGradient(bb) {
        return this._removeFactorGradient(this._alphaRemapGradients, bb), this
      }
      addAngularSpeedGradient(bb, cb, sb) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = Jc, this._angularSpeedGradientProcessing = {
          process: xb,
          previousItem: null,
          nextItem: null
        }, Bc(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, bb, cb, sb), this
      }
      removeAngularSpeedGradient(bb) {
        return this._removeFactorGradient(this._angularSpeedGradients, bb), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = hc, yc(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(bb, cb, sb) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: cc,
          previousItem: null,
          nextItem: null
        }, tc(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: kc,
          previousItem: null,
          nextItem: null
        }, Bc(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, bb, cb, sb), this
      }
      removeVelocityGradient(bb) {
        return this._removeFactorGradient(this._velocityGradients, bb), 0 === this._velocityGradients?.length && (yc(this._velocityCreation), yc(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(bb, cb, sb) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: sc,
          previousItem: null,
          nextItem: null
        }, tc(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Wc,
          previousItem: null,
          nextItem: null
        }, tc(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, bb, cb, sb), this
      }
      removeLimitVelocityGradient(bb) {
        return this._removeFactorGradient(this._limitVelocityGradients, bb), 0 === this._limitVelocityGradients?.length && (yc(this._limitVelocityCreation), yc(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(bb, cb, sb) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: fc,
          previousItem: null,
          nextItem: null
        }, Bc(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Mc,
          previousItem: null,
          nextItem: null
        }, Bc(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, bb, cb, sb), this
      }
      removeDragGradient(bb) {
        return this._removeFactorGradient(this._dragGradients, bb), 0 === this._dragGradients?.length && (yc(this._dragCreation), yc(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(bb, cb, sb) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, bb, cb, sb), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(bb) {
        return this._removeFactorGradient(this._startSizeGradients, bb), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const bb = new Uint8Array(4 * this._rawTextureWidth),
          cb = fb.m.Color3[0];
        for (let sb = 0; sb < this._rawTextureWidth; sb++) {
          const Wb = sb / this._rawTextureWidth;
          kb.i.GetCurrentGradient(Wb, this._rampGradients, ((kb, Wb, ab) => {
            fb.e.LerpToRef(kb.color, Wb.color, ab, cb), bb[4 * sb] = 255 * cb.r, bb[4 * sb + 1] = 255 * cb.g, bb[4 * sb + 2] = 255 * cb.b, bb[4 * sb + 3] = 255
          }))
        }
        this._rampGradientsTexture = Ub.e.CreateRGBATexture(bb, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((bb, cb) => bb.gradient < cb.gradient ? -1 : bb.gradient > cb.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(bb, cb) {
        this._rampGradients || (this._rampGradients = []);
        const sb = new kb.f(bb, cb);
        return this._rampGradients.push(sb), this._syncRampGradientTexture(), this
      }
      removeRampGradient(bb) {
        return this._removeGradientAndTexture(bb, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(bb, cb, sb) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Rb, this._colorProcessing.process = vb);
        const Wb = new kb.e(bb, cb, sb);
        return this._colorGradients.push(Wb), this._colorGradients.sort(((bb, cb) => bb.gradient < cb.gradient ? -1 : bb.gradient > cb.gradient ? 1 : 0)), this
      }
      removeColorGradient(bb) {
        if (!this._colorGradients) return this;
        let cb = 0;
        for (const sb of this._colorGradients) {
          if (sb.gradient === bb) {
            this._colorGradients.splice(cb, 1);
            break
          }
          cb++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = ob, this._colorProcessing.process = Fb), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const bb of this._drawWrappers)
            if (bb)
              for (const cb of bb) cb?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(bb, cb, sb, kb, Wb) {
        return Wb[4 * (((bb = .5 * Math.abs(bb) + .5) * sb % sb | 0) + ((cb = .5 * Math.abs(cb) + .5) * kb % kb | 0) * sb)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const bb = this._engine,
          cb = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * cb), this._vertexBuffer = new Tb.b(bb, this._vertexData, !0, cb);
        let sb = 0;
        const kb = this._vertexBuffer.createVertexBuffer(Tb.l.PositionKind, sb, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Tb.l.PositionKind] = kb, sb += 3;
        const Wb = this._vertexBuffer.createVertexBuffer(Tb.l.ColorKind, sb, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Tb.l.ColorKind] = Wb, sb += 4;
        const ab = this._vertexBuffer.createVertexBuffer("angle", sb, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = ab, sb += 1;
        const Ub = this._vertexBuffer.createVertexBuffer("size", sb, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = Ub, sb += 2, this._isAnimationSheetEnabled) {
          const bb = this._vertexBuffer.createVertexBuffer("cellIndex", sb, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = bb, sb += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const bb = this._vertexBuffer.createVertexBuffer("direction", sb, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = bb, sb += 3
        }
        if (this._useRampGradients) {
          const bb = this._vertexBuffer.createVertexBuffer("remapData", sb, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = bb, sb += 4
        }
        let Ib;
        if (this._useInstancing) {
          const cb = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Tb.b(bb, cb, !1, 2), Ib = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Ib = this._vertexBuffer.createVertexBuffer("offset", sb, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Ib, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const bb = [],
          cb = [];
        let sb = 0;
        for (let kb = 0; kb < this._capacity; kb++) bb.push(sb), bb.push(sb + 1), bb.push(sb + 2), bb.push(sb), bb.push(sb + 2), bb.push(sb + 3), cb.push(sb, sb + 1, sb + 1, sb + 2, sb + 2, sb + 3, sb + 3, sb, sb, sb + 3), sb += 4;
        this._indexBuffer = this._engine.createIndexBuffer(bb), this._linesIndexBuffer = this._engine.createIndexBuffer(cb)
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (bb) return this.startDelay = bb, void setTimeout((() => {
          this.start(0)
        }), bb);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const bb = this.noiseTexture;
          if (bb && bb.onGeneratedObservable) bb.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let cb = 0; cb < this.preWarmCycles; cb++) this.animate(!0), bb.render()
            }))
          }));
          else
            for (let cb = 0; cb < this.preWarmCycles; cb++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(bb))
      }
      _postStop(bb) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(bb, cb, sb, kb) {
        let Wb = bb * this._vertexBufferSize;
        const Tb = ab.m.Fm[0].ssb(this._scene?.floatingOriginOffset || ab.p.ZeroReadOnly);
        if (this._vertexData[Wb++] = cb.position.x + this.worldOffset.x - Tb.x, this._vertexData[Wb++] = cb.position.y + this.worldOffset.y - Tb.y, this._vertexData[Wb++] = cb.position.z + this.worldOffset.z - Tb.z, this._vertexData[Wb++] = cb.color.r, this._vertexData[Wb++] = cb.color.g, this._vertexData[Wb++] = cb.color.b, this._vertexData[Wb++] = cb.color.a, this._vertexData[Wb++] = cb.angle, this._vertexData[Wb++] = cb.scale.x * cb.size, this._vertexData[Wb++] = cb.scale.y * cb.size, this._isAnimationSheetEnabled && (this._vertexData[Wb++] = cb.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Wb++] = cb.direction.x, this._vertexData[Wb++] = cb.direction.y, this._vertexData[Wb++] = cb.direction.z);
        else if (cb._properties.initialDirection) {
          let bb = cb._properties.initialDirection;
          this.isLocal && (ab.p.TransformNormalToRef(bb, this._emitterWorldMatrix, ab.m.Fm[0]), bb = ab.m.Fm[0]), 0 === bb.x && 0 === bb.z && (bb.x = .001), this._vertexData[Wb++] = bb.x, this._vertexData[Wb++] = bb.y, this._vertexData[Wb++] = bb.z
        } else {
          let bb = cb.direction;
          this.isLocal && (ab.p.TransformNormalToRef(bb, this._emitterWorldMatrix, ab.m.Fm[0]), bb = ab.m.Fm[0]), 0 === bb.x && 0 === bb.z && (bb.x = .001), this._vertexData[Wb++] = bb.x, this._vertexData[Wb++] = bb.y, this._vertexData[Wb++] = bb.z
        }
        this._useRampGradients && cb.remapData && (this._vertexData[Wb++] = cb.remapData.x, this._vertexData[Wb++] = cb.remapData.y, this._vertexData[Wb++] = cb.remapData.z, this._vertexData[Wb++] = cb.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === sb ? sb = this._epsilon : 1 === sb && (sb = 1 - this._epsilon), 0 === kb ? kb = this._epsilon : 1 === kb && (kb = 1 - this._epsilon)), this._vertexData[Wb++] = sb, this._vertexData[Wb] = kb)
      }
      _prepareParticle(bb) {}
      _createNewOnes(bb) {
        let cb;
        for (let sb = 0; sb < bb && this._particles.length !== this._capacity; sb++) {
          cb = this._createParticle(), this._particles.push(cb);
          let bb = this._createQueueStart;
          for (; bb;) bb.process(cb, this), bb = bb.nextItem;
          cb._inheritParticleInfoToSubEmitters()
        }
      }
      _update(bb) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const bb = this.emitter;
          this._emitterWorldMatrix = bb.getWorldMatrix()
        } else {
          const bb = this.emitter;
          this._emitterWorldMatrix = ab.e.Translation(bb.x, bb.y, bb.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(bb)
      }
      static _GetAttributeNamesOrOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = [Tb.l.PositionKind, Tb.l.ColorKind, "angle", "offset", "size"];
        return bb && kb.push("cellIndex"), cb || kb.push("direction"), sb && kb.push("remapData"), kb
      }
      static _GetEffectCreationOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Ab.c)(kb), bb && kb.push("particlesInfos"), cb && kb.push("logarithmicDepthConstant"), sb && (kb.push("vFogInfos"), kb.push("vFogColor")), kb
      }
      fillDefines(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Ab.j)(this, this._scene, bb), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && bb.push("#define FOG")), this._isAnimationSheetEnabled && bb.push("#define ANIMATESHEET"), this.useLogarithmicDepth && bb.push("#define LOGARITHMICDEPTH"), cb === ub.BLENDMODE_MULTIPLY && bb.push("#define BLENDMULTIPLYMODE"), this.isLocal && bb.push("#define LOCAL"), this._useRampGradients && bb.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (bb.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            bb.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            bb.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && bb.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            bb.push("#define BILLBOARDMODE_ALL")
        }
        sb && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), bb.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(bb, cb, sb) {
        cb.push(...Dc._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), bb.push(...Dc._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), sb.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, rb.f)(bb, this._imageProcessingConfigurationDefines), (0, rb.e)(sb, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(bb) {
        var cb;
        const sb = this._getCustomDrawWrapper(bb);
        if (sb?.effect) return sb;
        const kb = [];
        this.fillDefines(kb, bb);
        const ab = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Tb = Pc.d._PrepareStringDefines(ab, kb),
          Ub = Tb ? Pc.d.GetConfiguration(ab) : void 0;
        let Ib = this._drawWrappers[ab];
        Ib || (Ib = this._drawWrappers[ab] = [], 0 === ab || this._renderPassObserver || (this._renderPassObserver = ((cb = this._engine)._onReleaseRenderPassObservable ?? (cb._onReleaseRenderPassObservable = new Wb.c)).add((bb => {
          const cb = this._drawWrappers[bb];
          if (cb) {
            for (const bb of cb) bb?.dispose();
            delete this._drawWrappers[bb]
          }
        }))));
        let Hb = Ib[bb];
        Hb || (Hb = new db.b(this._engine), Hb.drawContext && (Hb.drawContext.useInstancing = this._useInstancing), Ib[bb] = Hb);
        const fb = kb.join("\n");
        if (Hb.defines !== fb) {
          const bb = [],
            cb = [],
            sb = [];
          this.fillUniformsAttributesAndSamplerNames(cb, bb, sb), Tb && (cb.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== Ub?.defines.PREPASS_LOCAL_POSITION_INDEX && cb.push("inverseEmitterWM", "geometryWorldOffset")), Hb.setEffect(this._engine.createEffect("particles", {
            attributes: bb,
            uniformsNames: cb,
            samplers: sb,
            defines: fb,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Tb,
            indexParameters: Tb ? {
              buffersCount: Ub?._mrtCount ?? 0
            } : void 0
          }, this._engine), fb)
        }
        return Hb
      }
      _bindGeometryRendering(bb) {
        const cb = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          sb = Pc.d.GetConfiguration(cb);
        if (!sb?._defines) return;
        bb.setFloat("objectId", 0), bb.setInt("meshBlendTag", 0);
        const kb = this._scene?.activeCamera;
        if (bb.setFloat2("cameraInfo", kb?.minZ ?? 0, kb?.maxZ ?? 1), this.isLocal && void 0 !== sb.defines.PREPASS_LOCAL_POSITION_INDEX) {
          bb.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const cb = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || ab.p.ZeroReadOnly, ab.m.Fm[0]);
          bb.setVector3("geometryWorldOffset", cb)
        }
      }
      animate() {
        let bb, cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!cb && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (cb ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) bb = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const cb = this._calculateEmitRate();
            bb = cb * this._scaledUpdateSpeed | 0, this._newPartsExcess += cb * this._scaledUpdateSpeed - bb
          }
          if (this._newPartsExcess > 1 && (bb += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? bb = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(bb), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !cb) {
            let bb = 0;
            for (let cb = 0; cb < this._particles.length; cb++) {
              const sb = this._particles[cb];
              this._appendParticleVertices(bb, sb), bb += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const bb = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  cb = this._particles.length;
                cb < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, cb * bb, this._fixedCapacityHighWaterMark * bb), this._fixedCapacityHighWaterMark = cb, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const bb = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * bb), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let bb = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const cb = this._actualFrame / this.targetStopDuration;
          kb.i.GetCurrentGradient(cb, this._emitRateGradients, ((cb, sb, kb) => {
            cb !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = sb.getFactor(), this._currentEmitRateGradient = cb), bb = (0, nb.Lerp)(this._currentEmitRate1, this._currentEmitRate2, kb)
          }))
        }
        return bb
      }
      _appendParticleVertices(bb, cb) {
        this._appendParticleVertex(bb++, cb, 0, 0), this._useInstancing || (this._appendParticleVertex(bb++, cb, 1, 0), this._appendParticleVertex(bb++, cb, 1, 1), this._appendParticleVertex(bb, cb, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Dc.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([sb.e(336).then((() => sb(60613))), sb.e(330).then((() => sb(60618)))])) : await Promise.all([sb.e(319).then((() => sb(60627))), Promise.all([sb.e(312), sb.e(348)]).then((() => sb(60632)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== ub.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(ub.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(ub.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(bb) {
        const cb = this._getWrapper(bb),
          sb = cb.effect,
          kb = this._engine;
        kb.enableEffect(cb);
        const Wb = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        sb.setTexture("diffuseSampler", this.particleTexture), sb.setMatrix("view", Wb);
        const Tb = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (sb.setMatrix("projection", Tb), this._isAnimationSheetEnabled && this.particleTexture) {
          const bb = this.particleTexture.getBaseSize();
          sb.setFloat3("particlesInfos", this.spriteCellWidth / bb.width, this.spriteCellHeight / bb.height, this.spriteCellWidth / bb.width)
        }
        if (sb.setVector2("translationPivot", this.translationPivot), sb.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const bb = this._scene.activeCamera;
          sb.setVector3("eyePosition", bb.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), sb.setTexture("rampSampler", this._rampGradientsTexture));
        const Ub = sb.defines;
        this._scene && ((0, Ab.f)(sb, this, this._scene), this.applyFog && (0, wb.g)(this._scene, void 0, sb)), Ub.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Wb.invertToRef(ab.m.Matrix[0]), sb.setMatrix("invView", ab.m.Matrix[0])), sb._multiTarget && this._bindGeometryRendering(sb), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? kb.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, sb) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, sb)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? kb.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, sb) : kb.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, sb), this.useLogarithmicDepth && this._scene && (0, wb.s)(Ub, sb, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(sb), this._setEngineBasedOnBlendMode(bb), sb._multiTarget && Pc.d._BindZeroAlphaDiscard(kb, sb);
        let Ib = !1;
        try {
          Pc.d._BindAttachmentsForEffect(kb, sb) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(sb), this._useInstancing ? this._scene?.forceWireframe ? kb.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : kb.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? kb.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : kb.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Ib = !0)
        } finally {
          Pc.d._RestoreAttachments(kb)
        }
        return Ib ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const bb = this._engine;
        let cb;
        return bb.setState && (bb.setState(!1), this.forceDepthWrite && bb.setDepthWrite(!0)), cb = this.blendMode === ub.BLENDMODE_MULTIPLYADD ? this._render(ub.BLENDMODE_MULTIPLY) + this._render(ub.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), cb
      }
      _onDispose() {}
      dispose() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), bb && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), bb && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(cb, sb), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const bb = this._scene.mV.indexOf(this);
          bb > -1 && this._scene.mV.splice(bb, 1), this._scene._activeParticleSystems.dispose()
        }
        this.ZY.notifyObservers(this), this.ZY.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Dc.ForceGLSL = !1;
    var Ec, ic = sb(36698);
    ! function(bb) {
      bb[bb.ATTACHED = 0] = "ATTACHED", bb[bb.END = 1] = "END"
    }(Ec || (Ec = {}));
    class Oc {
      constructor(bb) {
        if (this.particleSystem = bb, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !bb.emitter || !bb.emitter.dispose) {
          const cb = (0, ic.e)("BABYLON.AbstractMesh");
          bb.emitter = new cb("SubemitterSystemEmitter", bb.EY()), bb._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let bb = this.particleSystem.emitter;
        if (bb) {
          if (bb instanceof ab.p) bb = bb.clone();
          else if (-1 !== bb.getClassName().indexOf("Mesh")) {
            bb = new((0, ic.e)("BABYLON.Mesh"))("", bb.EY()), bb.isVisible = !1
          }
        } else bb = new ab.p;
        const cb = new Oc(this.particleSystem.clone(this.particleSystem.name, bb));
        return cb.particleSystem.name += "Clone", cb.type = this.type, cb.inheritDirection = this.inheritDirection, cb.inheritedVelocityAmount = this.inheritedVelocityAmount, cb.particleSystem._disposeEmitterOnDispose = !0, cb.particleSystem.disposeOnStop = !0, cb
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = {};
        return cb.type = this.type, cb.inheritDirection = this.inheritDirection, cb.inheritedVelocityAmount = this.inheritedVelocityAmount, cb.particleSystem = this.particleSystem.serialize(bb), cb
      }
      static _ParseParticleSystem(bb, cb, sb) {
        throw (0, Gb.i)("ParseParticle")
      }
      static Parse(bb, cb, sb) {
        const kb = bb.particleSystem,
          Wb = new Oc(Oc._ParseParticleSystem(kb, cb, sb, !0));
        return Wb.type = bb.type, Wb.inheritDirection = bb.inheritDirection, Wb.inheritedVelocityAmount = bb.inheritedVelocityAmount, Wb.particleSystem._isSubEmitter = !0, Wb
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Gc = sb(39311),
      Kc = sb(39441);
    const Zc = () => {};
    class zc {
      constructor() {
        this.particlePositionGenerator = Zc, this.particleDestinationGenerator = Zc, this.particleDirectionGenerator = Zc
      }
      startDirectionFunction(bb, cb, sb, kb) {
        const Wb = ab.m.Fm[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Zc) this.particleDirectionGenerator(-1, sb, Wb);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Zc) {
          this.particleDestinationGenerator(-1, sb, Wb);
          const bb = ab.m.Fm[1];
          Wb.subtractToRef(sb.position, bb), bb.scaleToRef(1 / sb.lifeTime, Wb)
        } else Wb.set(0, 0, 0);
        kb ? cb.ssb(Wb) : ab.p.TransformNormalToRef(Wb, bb, cb)
      }
      startPositionFunction(bb, cb, sb, kb) {
        const Wb = ab.m.Fm[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Zc ? this.particlePositionGenerator(-1, sb, Wb) : Wb.set(0, 0, 0), kb ? cb.ssb(Wb) : ab.p.TransformCoordinatesToRef(Wb, bb, cb)
      }
      clone() {
        const bb = new zc;
        return Xb.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {}
      buildUniformLayout(bb) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.particlePositionGenerator = this.particlePositionGenerator, bb.particleDestinationGenerator = this.particleDestinationGenerator, bb
      }
      parse(bb) {
        bb.particlePositionGenerator && (this.particlePositionGenerator = bb.particlePositionGenerator), bb.particleDestinationGenerator && (this.particleDestinationGenerator = bb.particleDestinationGenerator)
      }
    }
    const qc = ab.p.Zero(),
      dc = ab.p.Zero(),
      Ac = ab.p.Zero();
    class wc {
      constructor() {
        this.strength = 0, this.position = ab.p.Zero()
      }
      _processParticle(bb, cb) {
        this.position.subtractToRef(bb.position, qc);
        const sb = qc.lengthSquared() + 1;
        qc.normalize().scaleToRef(this.strength / sb, dc), dc.scaleToRef(cb._tempScaledUpdateSpeed, Ac), bb.direction.addInPlace(Ac)
      }
      serialize() {
        return {
          position: this.position.Osb(),
          strength: this.strength
        }
      }
    }
    const rc = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class oc extends Dc {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = bb => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const cb = Math.floor(Math.random() * this._subEmitters.length);
          for (const sb of this._subEmitters[cb])
            if (1 === sb.type) {
              const cb = sb.clone();
              bb._inheritParticleInfoToSubEmitter(cb), cb.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(cb.particleSystem), cb.particleSystem.start()
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
      set flowMap(bb) {
        this._flowMap !== bb && (this._flowMap = bb, this._flowMapUpdate && (yc(this._flowMapUpdate), this._flowMapUpdate = null), bb && (this._flowMapUpdate = {
          process: bb => {
            const cb = this.EY()?.getTransformMatrix();
            this._flowMap._processParticle(bb, this.flowMapStrength * this._tempScaledUpdateSpeed, cb)
          },
          previousItem: null,
          nextItem: null
        }, tc(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(bb) {
        super.addAttractor(bb), 1 === this._attractors.length && (this._attractorUpdate = {
          process: bb => {
            for (const cb of this._attractors) cb._processParticle(bb, this)
          },
          previousItem: null,
          nextItem: null
        }, tc(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(bb) {
        super.removeAttractor(bb), 0 === this._attractors.length && this._attractorUpdate && yc(this._attractorUpdate)
      }
      start() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(bb)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const bb of this.subEmitters) bb instanceof oc ? this._subEmitters.push([new Oc(bb)]) : bb instanceof Oc ? this._subEmitters.push([bb]) : bb instanceof Array && this._subEmitters.push(bb)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const bb of this.activeSubSystems) bb.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const bb = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== bb && this._rootParticleSystem.activeSubSystems.splice(bb, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(bb) {
        bb && this._stopSubEmitters()
      }
      _prepareParticle(bb) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const cb = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          bb._properties.attachedSubEmitters = [];
          for (const sb of cb)
            if (0 === sb.type) {
              const cb = sb.clone();
              bb._properties.attachedSubEmitters.push(cb), cb.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), bb && this.particles)
          for (const sb of this.particles)
            if (sb._properties.attachedSubEmitters)
              for (let bb = sb._properties.attachedSubEmitters.length - 1; bb >= 0; bb -= 1) sb._properties.attachedSubEmitters[bb].dispose();
        if (cb && this.activeSubSystems)
          for (let sb = this.activeSubSystems.length - 1; sb >= 0; sb -= 1) this.activeSubSystems[sb].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let bb = 0; bb < this._subEmitters.length; bb++)
            for (const cb of this._subEmitters[bb]) cb.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(bb, cb, sb, kb) {
        let Wb;
        Wb = sb instanceof Gc.b ? null : sb;
        const Tb = (0, ic.e)("BABYLON.Texture");
        if (Tb && Wb)
          if (bb.texture) cb.particleTexture = Tb.Parse(bb.texture, Wb, kb);
          else if (bb.textureName) {
          const sb = bb.textureSettings;
          if (cb.particleTexture = new Tb(kb + bb.textureName, Wb, !1, void 0 === bb.invertY || bb.invertY, sb ? sb.samplingMode : void 0), cb.particleTexture.name = bb.textureName, sb) {
            const bb = cb.particleTexture;
            for (const cb of rc) void 0 !== sb[cb] && (bb[cb] = sb[cb])
          }
        }
        if (bb.emitterId || 0 === bb.emitterId || void 0 !== bb.emitter ? (bb.emitterId || 0 === bb.emitterId) && Wb ? (cb.emitter = Wb.getLastMeshById(bb.emitterId), cb.emitter || (cb.emitter = ab.p.Zero())) : cb.emitter = ab.p.FromArray(bb.emitter) : cb.emitter = ab.p.Zero(), cb.isLocal = !!bb.isLocal, void 0 !== bb.renderingGroupId && (cb.renderingGroupId = bb.renderingGroupId), void 0 !== bb.isBillboardBased && (cb.isBillboardBased = bb.isBillboardBased), void 0 !== bb.billboardMode && (cb.billboardMode = bb.billboardMode), void 0 !== bb.useLogarithmicDepth && (cb.useLogarithmicDepth = bb.useLogarithmicDepth), bb.animations) {
          for (let sb = 0; sb < bb.animations.length; sb++) {
            const kb = bb.animations[sb],
              Wb = (0, ic.e)("BABYLON.Animation");
            Wb && cb.animations.push(Wb.Parse(kb))
          }
          cb.beginAnimationOnStart = bb.beginAnimationOnStart, cb.beginAnimationFrom = bb.beginAnimationFrom, cb.beginAnimationTo = bb.beginAnimationTo, cb.beginAnimationLoop = bb.beginAnimationLoop
        }
        if (bb.autoAnimate && Wb && Wb.beginAnimation(cb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), cb.startDelay = 0 | bb.startDelay, cb.minAngularSpeed = bb.minAngularSpeed, cb.maxAngularSpeed = bb.maxAngularSpeed, cb.minSize = bb.minSize, cb.maxSize = bb.maxSize, bb.minScaleX && (cb.minScaleX = bb.minScaleX, cb.maxScaleX = bb.maxScaleX, cb.minScaleY = bb.minScaleY, cb.maxScaleY = bb.maxScaleY), void 0 !== bb.preWarmCycles && (cb.preWarmCycles = bb.preWarmCycles, cb.preWarmStepOffset = bb.preWarmStepOffset), void 0 !== bb.minInitialRotation && (cb.minInitialRotation = bb.minInitialRotation, cb.maxInitialRotation = bb.maxInitialRotation), cb.minLifeTime = bb.minLifeTime, cb.maxLifeTime = bb.maxLifeTime, cb.minEmitPower = bb.minEmitPower, cb.maxEmitPower = bb.maxEmitPower, cb.emitRate = bb.emitRate, cb.gravity = ab.p.FromArray(bb.gravity), bb.noiseStrength && (cb.noiseStrength = ab.p.FromArray(bb.noiseStrength)), cb.color1 = fb.g.FromArray(bb.color1), cb.color2 = fb.g.FromArray(bb.color2), cb.colorDead = fb.g.FromArray(bb.colorDead), cb.updateSpeed = bb.updateSpeed, cb.targetStopDuration = bb.targetStopDuration, cb.blendMode = bb.blendMode, bb.colorGradients)
          for (const ab of bb.colorGradients) cb.addColorGradient(ab.gradient, fb.g.FromArray(ab.color1), ab.color2 ? fb.g.FromArray(ab.color2) : void 0);
        if (bb.rampGradients) {
          for (const sb of bb.rampGradients) cb.addRampGradient(sb.gradient, fb.e.FromArray(sb.color));
          cb.useRampGradients = bb.useRampGradients
        }
        if (bb.colorRemapGradients)
          for (const ab of bb.colorRemapGradients) cb.addColorRemapGradient(ab.gradient, void 0 !== ab.factor1 ? ab.factor1 : ab.factor, ab.factor2);
        if (bb.alphaRemapGradients)
          for (const ab of bb.alphaRemapGradients) cb.addAlphaRemapGradient(ab.gradient, void 0 !== ab.factor1 ? ab.factor1 : ab.factor, ab.factor2);
        if (bb.sizeGradients)
          for (const ab of bb.sizeGradients) cb.addSizeGradient(ab.gradient, void 0 !== ab.factor1 ? ab.factor1 : ab.factor, ab.factor2);
        if (bb.angularSpeedGradients)
          for (const ab of bb.angularSpeedGradients) cb.addAngularSpeedGradient(ab.gradient, void 0 !== ab.factor1 ? ab.factor1 : ab.factor, ab.factor2);
        if (bb.velocityGradients)
          for (const ab of bb.velocityGradients) cb.addVelocityGradient(ab.gradient, void 0 !== ab.factor1 ? ab.factor1 : ab.factor, ab.factor2);
        if (bb.dragGradients)
          for (const ab of bb.dragGradients) cb.addDragGradient(ab.gradient, void 0 !== ab.factor1 ? ab.factor1 : ab.factor, ab.factor2);
        if (bb.emitRateGradients)
          for (const ab of bb.emitRateGradients) cb.addEmitRateGradient(ab.gradient, void 0 !== ab.factor1 ? ab.factor1 : ab.factor, ab.factor2);
        if (bb.startSizeGradients)
          for (const ab of bb.startSizeGradients) cb.addStartSizeGradient(ab.gradient, void 0 !== ab.factor1 ? ab.factor1 : ab.factor, ab.factor2);
        if (bb.lifeTimeGradients)
          for (const ab of bb.lifeTimeGradients) cb.addLifeTimeGradient(ab.gradient, void 0 !== ab.factor1 ? ab.factor1 : ab.factor, ab.factor2);
        if (bb.limitVelocityGradients) {
          for (const sb of bb.limitVelocityGradients) cb.addLimitVelocityGradient(sb.gradient, void 0 !== sb.factor1 ? sb.factor1 : sb.factor, sb.factor2);
          cb.limitVelocityDamping = bb.limitVelocityDamping
        }
        if (bb.noiseTexture && Wb) {
          const sb = (0, ic.e)("BABYLON.ProceduralTexture");
          cb.noiseTexture = sb.Parse(bb.noiseTexture, Wb, kb)
        }
        let Ub;
        if (bb.particleEmitterType) {
          switch (bb.particleEmitterType.type) {
            case "SphereParticleEmitter":
              Ub = new Qb;
              break;
            case "SphereDirectedParticleEmitter":
              Ub = new eb;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              Ub = new Nb;
              break;
            case "ConeDirectedParticleEmitter":
              Ub = new Vb;
              break;
            case "CylinderParticleEmitter":
              Ub = new Cb.g;
              break;
            case "CylinderDirectedParticleEmitter":
              Ub = new Cb.c;
              break;
            case "HemisphericParticleEmitter":
              Ub = new lb;
              break;
            case "PointParticleEmitter":
              Ub = new mb;
              break;
            case "MeshParticleEmitter":
              Ub = new Lb;
              break;
            case "CustomParticleEmitter":
              Ub = new zc;
              break;
            default:
              Ub = new Mb.d
          }
          Ub.parse(bb.particleEmitterType, Wb)
        } else Ub = new Mb.d, Ub.parse(bb, Wb);
        cb.particleEmitterType = Ub, cb.startSpriteCellID = bb.startSpriteCellID, cb.endSpriteCellID = bb.endSpriteCellID, cb.spriteCellLoop = bb.spriteCellLoop ?? !0, cb.spriteCellWidth = bb.spriteCellWidth, cb.spriteCellHeight = bb.spriteCellHeight, cb.spriteCellChangeSpeed = bb.spriteCellChangeSpeed, cb.spriteRandomStartCell = bb.spriteRandomStartCell, cb.disposeOnStop = bb.disposeOnStop ?? !1, cb.manualEmitCount = bb.manualEmitCount ?? -1
      }
      static Parse(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wb = arguments.length > 4 ? arguments[4] : void 0;
        const Tb = bb.name;
        let Ub, Ib, Hb = null,
          Mb = null;
        if (cb instanceof Gc.b ? Ub = cb : (Ib = cb, Ub = Ib.Sm()), bb.customShader && (0, Gb.b)(Ub.createEffectForParticles)) {
          Mb = bb.customShader;
          const cb = Mb.shaderOptions.defines.length > 0 ? Mb.shaderOptions.defines.join("\n") : "";
          Hb = Ub.createEffectForParticles(Mb.shaderPath.fragmentElement, Mb.shaderOptions.uniforms, Mb.shaderOptions.samplers, cb)
        }
        const Xb = new oc(Tb, Wb || bb.GM, cb, Hb, bb.isAnimationSheetEnabled);
        if (Xb.customShader = Mb, Xb._rootUrl = sb, bb.id && (Xb.id = bb.id), bb.subEmitters) {
          Xb.subEmitters = [];
          for (const kb of bb.subEmitters) {
            const bb = [];
            for (const Wb of kb) bb.push(Oc.Parse(Wb, cb, sb));
            Xb.subEmitters.push(bb)
          }
        }
        if (bb.attractors)
          for (const fb of bb.attractors) {
            const bb = new wc;
            bb.position = ab.p.FromArray(fb.position), bb.strength = fb.strength, Xb.addAttractor(bb)
          }
        return oc._Parse(bb, Xb, cb, sb), bb.textureMask && (Xb.textureMask = fb.g.FromArray(bb.textureMask)), bb.worldOffset && (Xb.worldOffset = ab.p.FromArray(bb.worldOffset)), bb.preventAutoStart && (Xb.preventAutoStart = bb.preventAutoStart), bb.metadata && (Xb.metadata = bb.metadata), kb || Xb.preventAutoStart || Xb.start(), Xb
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = {};
        if (oc._Serialize(cb, this, bb), cb.textureMask = this.textureMask.Osb(), cb.customShader = this.customShader, cb.preventAutoStart = this.preventAutoStart, cb.worldOffset = this.worldOffset.Osb(), this.metadata && (cb.metadata = this.metadata), this.subEmitters) {
          cb.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const sb of this._subEmitters) {
            const kb = [];
            for (const cb of sb) cb.particleSystem.doNotSerialize || kb.push(cb.serialize(bb));
            cb.subEmitters.push(kb)
          }
        }
        if (this._attractors && this._attractors.length) {
          cb.attractors = [];
          for (const bb of this._attractors) cb.attractors.push(bb.serialize())
        }
        return cb
      }
      static _Serialize(bb, cb, sb) {
        if (bb.name = cb.name, bb.id = cb.id, bb.GM = cb.getCapacity(), bb.disposeOnStop = cb.disposeOnStop, bb.manualEmitCount = cb.manualEmitCount, cb.emitter.position) {
          const sb = cb.emitter;
          bb.emitterId = sb.id
        } else {
          const sb = cb.emitter;
          bb.emitter = sb.Osb()
        }
        if (cb.particleEmitterType && (bb.particleEmitterType = cb.particleEmitterType.serialize()), cb.particleTexture)
          if (sb) bb.texture = cb.particleTexture.serialize();
          else {
            const sb = cb.particleTexture;
            bb.textureName = cb.particleTexture.name, bb.invertY = !!sb._invertY;
            const kb = {};
            for (const bb of rc) kb[bb] = sb[bb];
            kb.samplingMode = sb.samplingMode, bb.textureSettings = kb
          } bb.isLocal = cb.isLocal, Kc.d.AppendSerializedAnimations(cb, bb), bb.beginAnimationOnStart = cb.beginAnimationOnStart, bb.beginAnimationFrom = cb.beginAnimationFrom, bb.beginAnimationTo = cb.beginAnimationTo, bb.beginAnimationLoop = cb.beginAnimationLoop, bb.startDelay = cb.startDelay, bb.renderingGroupId = cb.renderingGroupId, bb.isBillboardBased = cb.isBillboardBased, bb.billboardMode = cb.billboardMode, bb.minAngularSpeed = cb.minAngularSpeed, bb.maxAngularSpeed = cb.maxAngularSpeed, bb.minSize = cb.minSize, bb.maxSize = cb.maxSize, bb.minScaleX = cb.minScaleX, bb.maxScaleX = cb.maxScaleX, bb.minScaleY = cb.minScaleY, bb.maxScaleY = cb.maxScaleY, bb.minEmitPower = cb.minEmitPower, bb.maxEmitPower = cb.maxEmitPower, bb.minLifeTime = cb.minLifeTime, bb.maxLifeTime = cb.maxLifeTime, bb.emitRate = cb.emitRate, bb.gravity = cb.gravity.Osb(), bb.noiseStrength = cb.noiseStrength.Osb(), bb.color1 = cb.color1.Osb(), bb.color2 = cb.color2.Osb(), bb.colorDead = cb.colorDead.Osb(), bb.updateSpeed = cb.updateSpeed, bb.targetStopDuration = cb.targetStopDuration, bb.blendMode = cb.blendMode, bb.preWarmCycles = cb.preWarmCycles, bb.preWarmStepOffset = cb.preWarmStepOffset, bb.minInitialRotation = cb.minInitialRotation, bb.maxInitialRotation = cb.maxInitialRotation, bb.startSpriteCellID = cb.startSpriteCellID, bb.spriteCellLoop = cb.spriteCellLoop, bb.endSpriteCellID = cb.endSpriteCellID, bb.spriteCellChangeSpeed = cb.spriteCellChangeSpeed, bb.spriteCellWidth = cb.spriteCellWidth, bb.spriteCellHeight = cb.spriteCellHeight, bb.spriteRandomStartCell = cb.spriteRandomStartCell, bb.isAnimationSheetEnabled = cb.isAnimationSheetEnabled, bb.useLogarithmicDepth = cb.useLogarithmicDepth;
        const kb = cb.getColorGradients();
        if (kb) {
          bb.colorGradients = [];
          for (const cb of kb) {
            const sb = {
              gradient: cb.gradient,
              color1: cb.color1.Osb()
            };
            cb.color2 ? sb.color2 = cb.color2.Osb() : sb.color2 = cb.color1.Osb(), bb.colorGradients.push(sb)
          }
        }
        const Wb = cb.getRampGradients();
        if (Wb) {
          bb.rampGradients = [];
          for (const cb of Wb) {
            const sb = {
              gradient: cb.gradient,
              color: cb.color.Osb()
            };
            bb.rampGradients.push(sb)
          }
          bb.useRampGradients = cb.useRampGradients
        }
        const ab = cb.getColorRemapGradients();
        if (ab) {
          bb.colorRemapGradients = [];
          for (const cb of ab) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.colorRemapGradients.push(sb)
          }
        }
        const Tb = cb.getAlphaRemapGradients();
        if (Tb) {
          bb.alphaRemapGradients = [];
          for (const cb of Tb) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.alphaRemapGradients.push(sb)
          }
        }
        const Ub = cb.getSizeGradients();
        if (Ub) {
          bb.sizeGradients = [];
          for (const cb of Ub) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.sizeGradients.push(sb)
          }
        }
        const Ib = cb.getAngularSpeedGradients();
        if (Ib) {
          bb.angularSpeedGradients = [];
          for (const cb of Ib) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.angularSpeedGradients.push(sb)
          }
        }
        const Hb = cb.getVelocityGradients();
        if (Hb) {
          bb.velocityGradients = [];
          for (const cb of Hb) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.velocityGradients.push(sb)
          }
        }
        const fb = cb.getDragGradients();
        if (fb) {
          bb.dragGradients = [];
          for (const cb of fb) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.dragGradients.push(sb)
          }
        }
        const Mb = cb.getEmitRateGradients();
        if (Mb) {
          bb.emitRateGradients = [];
          for (const cb of Mb) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.emitRateGradients.push(sb)
          }
        }
        const Xb = cb.getStartSizeGradients();
        if (Xb) {
          bb.startSizeGradients = [];
          for (const cb of Xb) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.startSizeGradients.push(sb)
          }
        }
        const nb = cb.getLifeTimeGradients();
        if (nb) {
          bb.lifeTimeGradients = [];
          for (const cb of nb) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.lifeTimeGradients.push(sb)
          }
        }
        const mb = cb.getLimitVelocityGradients();
        if (mb) {
          bb.limitVelocityGradients = [];
          for (const cb of mb) {
            const sb = {
              gradient: cb.gradient,
              factor1: cb.factor1
            };
            void 0 !== cb.factor2 ? sb.factor2 = cb.factor2 : sb.factor2 = cb.factor1, bb.limitVelocityGradients.push(sb)
          }
          bb.limitVelocityDamping = cb.limitVelocityDamping
        }
        cb.noiseTexture && (bb.noiseTexture = cb.noiseTexture.serialize())
      }
      clone(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = {
          ...this._customWrappers
        };
        let Wb = null;
        const ab = this._engine;
        if ((0, Gb.b)(ab.createEffectForParticles) && null != this.customShader) {
          Wb = this.customShader;
          const bb = Wb.shaderOptions.defines.length > 0 ? Wb.shaderOptions.defines.join("\n") : "",
            cb = ab.createEffectForParticles(Wb.shaderPath.fragmentElement, Wb.shaderOptions.uniforms, Wb.shaderOptions.samplers, bb);
          kb[0] ? kb[0].effect = cb : this.setCustomEffect(cb, 0)
        }
        const Tb = this.serialize(sb),
          Ub = !1 === sb && this.particleTexture ? this.particleTexture.clone() : null;
        Ub && (Tb.textureName = void 0);
        const Ib = oc.Parse(Tb, this._scene || this._engine, this._rootUrl);
        return Ib.name = bb, Ib.customShader = Wb, Ib._customWrappers = kb, Ub && (Ib.particleTexture = Ub), void 0 === cb && (cb = this.emitter), this.noiseTexture && (Ib.noiseTexture = this.noiseTexture.clone()), Ib.emitter = cb, this.preventAutoStart || Ib.start(), Ib
      }
    }
    oc.BILLBOARDMODE_Y = 2, oc.BILLBOARDMODE_ALL = 7, oc.BILLBOARDMODE_STRETCHED = 8, oc.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Sc = !1;
    Sc || (Sc = !0, Oc._ParseParticleSystem = oc.Parse)
  },
  41047: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      SkyMaterial: () => Nb,
      _MaxColorValueForRenderTarget: () => Cb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(39441),
      Tb = sb(36654),
      Ub = sb(39726),
      Ib = sb(39774),
      Hb = sb(41006),
      fb = sb(40567),
      Mb = sb(39522),
      Xb = sb(36698),
      nb = sb(39794),
      mb = sb(39777),
      lb = sb(39767),
      Qb = sb(39761);
    class eb extends Ub.b {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Cb(bb) {
      switch (bb) {
        case Hb.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Hb.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Nb = (() => {
      var bb;
      let cb, Ub, Hb, Xb, Nb, Vb, Lb, ub, Yb, hb, Jb, gb, Bb, tb, yb, Pb = Ib.d,
        Db = [],
        Eb = [],
        ib = [],
        Ob = [],
        Gb = [],
        Kb = [],
        Zb = [],
        zb = [],
        qb = [],
        db = [],
        Ab = [],
        wb = [],
        rb = [],
        ob = [],
        Sb = [],
        Rb = [],
        vb = [],
        Fb = [],
        xb = [],
        jb = [],
        pb = [],
        bc = [],
        cc = [],
        sc = [],
        kc = [],
        Wc = [],
        ac = [],
        Tc = [],
        Uc = [],
        Ic = [];
      return bb = class extends Pb {
        constructor(bb, cb) {
          super(bb, cb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, kb.m)(this, Db, 1), this.turbidity = ((0, kb.m)(this, Eb), (0, kb.m)(this, ib, 10)), this.rayleigh = ((0, kb.m)(this, Ob), (0, kb.m)(this, Gb, 2)), this.mieCoefficient = ((0, kb.m)(this, Kb), (0, kb.m)(this, Zb, .005)), this.mieDirectionalG = ((0, kb.m)(this, zb), (0, kb.m)(this, qb, .8)), this.distance = ((0, kb.m)(this, db), (0, kb.m)(this, Ab, 500)), this.inclination = ((0, kb.m)(this, wb), (0, kb.m)(this, rb, .49)), this.azimuth = ((0, kb.m)(this, ob), (0, kb.m)(this, Sb, .25)), this.sunPosition = ((0, kb.m)(this, Rb), (0, kb.m)(this, vb, new Tb.Fm(0, 100, 0))), this.useSunPosition = ((0, kb.m)(this, Fb), (0, kb.m)(this, xb, !1)), this.cameraOffset = ((0, kb.m)(this, jb), (0, kb.m)(this, pb, Tb.Fm.Zero())), this.up = ((0, kb.m)(this, bc), (0, kb.m)(this, cc, Tb.Fm.Up())), this.dithering = ((0, kb.m)(this, sc), (0, kb.m)(this, kc, !1)), this.rawHdrOutput = ((0, kb.m)(this, Wc), (0, kb.m)(this, ac, !1)), this.cloudiness = ((0, kb.m)(this, Tc), (0, kb.m)(this, Uc, 0)), this._cameraPosition = ((0, kb.m)(this, Ic), Tb.Fm.Zero()), this._skyOrientation = new Tb.Quaternion
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
        isReadyForSubMesh(cb, sb) {
          const kb = sb._drawWrapper;
          if (this.isFrozen && kb.effect && kb._wasPreviouslyReady) return !0;
          sb.materialDefines || (sb.materialDefines = new eb);
          const Wb = sb.materialDefines,
            ab = this.EY();
          if (this._isReadyForSubMesh(sb)) return !0;
          if ((0, Qb.hb)(cb, ab, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Wb, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, Qb.V)(cb, Wb, !0, !1), Wb.IMAGEPROCESSINGPOSTPROCESS !== ab.imageProcessingConfiguration.applyByPostProcess && Wb.markAsMiscDirty(), Wb.DITHER !== this.dithering && Wb.markAsMiscDirty(), Wb.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Wb.markAsMiscDirty(), Wb.isDirty) {
            Wb.markAsProcessed(), ab.resetCachedMaterial();
            const cb = new mb.b;
            Wb.FOG && cb.addFallback(1, "FOG"), Wb.IMAGEPROCESSINGPOSTPROCESS = ab.imageProcessingConfiguration.applyByPostProcess, Wb.DITHER = this.dithering, Wb.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const kb = [fb.f.PositionKind];
            Wb.VERTEXCOLOR && kb.push(fb.f.ColorKind);
            const Tb = "sky",
              Ub = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, lb.c)(Ub);
            const Ib = Wb.toString();
            sb.setEffect(ab.Sm().createEffect(Tb, {
              attributes: kb,
              uniformsNames: Ub,
              uniformBuffersNames: [],
              samplers: [],
              defines: Ib,
              fallbacks: cb,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, ab.Sm()), Wb, this._materialContext)
          }
          return !(!sb.effect || !sb.effect.isReady()) && (Wb._renderId = ab.getRenderId(), kb._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(bb, cb, sb) {
          const kb = this.EY(),
            Wb = sb.materialDefines;
          if (!Wb) return;
          const ab = sb.effect;
          if (!ab) return;
          this._activeEffect = ab, this.bindOnlyWorldMatrix(bb), this._activeEffect.setMatrix("viewProjection", kb.getTransformMatrix()), this._mustRebind(kb, ab, sb) && ((0, lb.f)(ab, this, kb), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, Qb.s)(Wb, ab, kb)), kb.fogEnabled && cb.applyFog && kb.fogMode !== Mb.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", kb.getViewMatrix()), (0, Qb.g)(kb, cb, this._activeEffect, this.rawHdrOutput);
          const Ub = kb.activeCamera;
          if (Ub) {
            const bb = Ub.getWorldMatrix();
            this._cameraPosition.x = bb.m[12], this._cameraPosition.y = bb.m[13], this._cameraPosition.z = bb.m[14], this._activeEffect.setVector3("cameraPosition", Tb.TmpVectors.Fm[0].ssb(this._cameraPosition).Wkb(kb.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const bb = kb.Sm()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Cb(bb?.texture?.type))
          }
          if (!this.useSunPosition) {
            const bb = Math.PI * (this.inclination - .5),
              cb = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(cb) * Math.cos(bb), this.sunPosition.y = this.distance * Math.sin(-bb), this.sunPosition.z = this.distance * Math.sin(cb) * Math.cos(bb), Tb.Quaternion.FromUnitVectorsToRef(Tb.Fm.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(cb, this._activeEffect, sb)
        }
        getAnimatables() {
          return []
        }
        dispose(bb) {
          super.dispose(bb)
        }
        clone(cb) {
          return ab.d.Clone((() => new bb(cb, this.EY())), this)
        }
        serialize() {
          const bb = super.serialize();
          return bb.customType = "BABYLON.SkyMaterial", bb
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(cb, sb, kb) {
          return ab.d.Parse((() => new bb(cb.name, sb)), cb, sb, kb)
        }
      }, (() => {
        const sb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pb[Symbol.metadata] ?? null) : void 0;
        cb = [(0, Wb.E)()], Ub = [(0, Wb.E)()], Hb = [(0, Wb.E)()], Xb = [(0, Wb.E)()], Nb = [(0, Wb.E)()], Vb = [(0, Wb.E)()], Lb = [(0, Wb.E)()], ub = [(0, Wb.E)()], Yb = [(0, Wb.C)()], hb = [(0, Wb.E)()], Jb = [(0, Wb.C)()], gb = [(0, Wb.C)()], Bb = [(0, Wb.E)()], tb = [(0, Wb.E)()], yb = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: bb => "luminance" in bb,
            get: bb => bb.luminance,
            set: (bb, cb) => {
              bb.luminance = cb
            }
          },
          metadata: sb
        }, Db, Eb), (0, kb.j)(null, null, Ub, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: bb => "turbidity" in bb,
            get: bb => bb.turbidity,
            set: (bb, cb) => {
              bb.turbidity = cb
            }
          },
          metadata: sb
        }, ib, Ob), (0, kb.j)(null, null, Hb, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: bb => "rayleigh" in bb,
            get: bb => bb.rayleigh,
            set: (bb, cb) => {
              bb.rayleigh = cb
            }
          },
          metadata: sb
        }, Gb, Kb), (0, kb.j)(null, null, Xb, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: bb => "mieCoefficient" in bb,
            get: bb => bb.mieCoefficient,
            set: (bb, cb) => {
              bb.mieCoefficient = cb
            }
          },
          metadata: sb
        }, Zb, zb), (0, kb.j)(null, null, Nb, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: bb => "mieDirectionalG" in bb,
            get: bb => bb.mieDirectionalG,
            set: (bb, cb) => {
              bb.mieDirectionalG = cb
            }
          },
          metadata: sb
        }, qb, db), (0, kb.j)(null, null, Vb, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: bb => "distance" in bb,
            get: bb => bb.distance,
            set: (bb, cb) => {
              bb.distance = cb
            }
          },
          metadata: sb
        }, Ab, wb), (0, kb.j)(null, null, Lb, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: bb => "inclination" in bb,
            get: bb => bb.inclination,
            set: (bb, cb) => {
              bb.inclination = cb
            }
          },
          metadata: sb
        }, rb, ob), (0, kb.j)(null, null, ub, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: bb => "azimuth" in bb,
            get: bb => bb.azimuth,
            set: (bb, cb) => {
              bb.azimuth = cb
            }
          },
          metadata: sb
        }, Sb, Rb), (0, kb.j)(null, null, Yb, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: bb => "sunPosition" in bb,
            get: bb => bb.sunPosition,
            set: (bb, cb) => {
              bb.sunPosition = cb
            }
          },
          metadata: sb
        }, vb, Fb), (0, kb.j)(null, null, hb, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSunPosition" in bb,
            get: bb => bb.useSunPosition,
            set: (bb, cb) => {
              bb.useSunPosition = cb
            }
          },
          metadata: sb
        }, xb, jb), (0, kb.j)(null, null, Jb, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "cameraOffset" in bb,
            get: bb => bb.cameraOffset,
            set: (bb, cb) => {
              bb.cameraOffset = cb
            }
          },
          metadata: sb
        }, pb, bc), (0, kb.j)(null, null, gb, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: bb => "up" in bb,
            get: bb => bb.up,
            set: (bb, cb) => {
              bb.up = cb
            }
          },
          metadata: sb
        }, cc, sc), (0, kb.j)(null, null, Bb, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: bb => "dithering" in bb,
            get: bb => bb.dithering,
            set: (bb, cb) => {
              bb.dithering = cb
            }
          },
          metadata: sb
        }, kc, Wc), (0, kb.j)(null, null, tb, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: bb => "rawHdrOutput" in bb,
            get: bb => bb.rawHdrOutput,
            set: (bb, cb) => {
              bb.rawHdrOutput = cb
            }
          },
          metadata: sb
        }, ac, Tc), (0, kb.j)(null, null, yb, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: bb => "cloudiness" in bb,
            get: bb => bb.cloudiness,
            set: (bb, cb) => {
              bb.cloudiness = cb
            }
          },
          metadata: sb
        }, Uc, Ic), sb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sb
        })
      })(), bb._ShaderLoader = new nb.d((() => [sb.e(320).then((() => sb(60636))), sb.e(313).then((() => sb(60639)))]), (() => [sb.e(337).then((() => sb(60643))), sb.e(331).then((() => sb(60650)))])), bb
    })();
    (0, Xb.h)("BABYLON.SkyMaterial", Nb)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);