export const id = 228;
export const ids = [228];
export const modules = {
  39354: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      $f: () => iZ,
      Ac: () => iJ,
      Ad: () => qJ,
      Af: () => EZ,
      Be: () => uZ,
      C: () => Rc,
      Cc: () => Lc,
      Db: () => Ac,
      De: () => gZ,
      E: () => DJ,
      Ed: () => YJ,
      Ee: () => PZ,
      Ef: () => fZ,
      Fb: () => UJ,
      Fc: () => Fc,
      Ff: () => aZ,
      Ge: () => HZ,
      H: () => Uc,
      Hd: () => fc,
      He: () => WZ,
      Hf: () => pZ,
      Ib: () => xJ,
      Ic: () => hc,
      J: () => IJ,
      Jc: () => SJ,
      K: () => bJ,
      Kc: () => jc,
      Kd: () => ic,
      Lc: () => qc,
      Ld: () => NJ,
      Le: () => zZ,
      Lf: () => dZ,
      Mb: () => rc,
      Mc: () => Zc,
      Nf: () => vZ,
      O: () => MJ,
      Ob: () => BJ,
      Oc: () => yJ,
      Oe: () => wZ,
      Pb: () => JZ,
      Pc: () => mJ,
      Pd: () => Dc,
      Pe: () => TZ,
      Q: () => Tc,
      Rf: () => GZ,
      S: () => sJ,
      T: () => CJ,
      Tb: () => wJ,
      Tc: () => FJ,
      Td: () => ac,
      Te: () => OZ,
      Uf: () => kZ,
      V: () => UF,
      Wb: () => oJ,
      Wc: () => KJ,
      Xb: () => tJ,
      Xd: () => Nc,
      Xe: () => NZ,
      Yc: () => Xc,
      Ye: () => FF,
      Yf: () => VZ,
      Z: () => lc,
      Zb: () => cc,
      Ze: () => KZ,
      Zf: () => mZ,
      _c: () => fJ,
      _d: () => Jc,
      af: () => MZ,
      bb: () => aJ,
      bc: () => Gc,
      bd: () => GJ,
      be: () => lJ,
      bf: () => yZ,
      cd: () => nJ,
      cg: () => rZ,
      d: () => eJ,
      db: () => tc,
      dg: () => CZ,
      ec: () => RJ,
      ed: () => eZ,
      ef: () => bZ,
      fb: () => oc,
      fd: () => XZ,
      fe: () => TJ,
      gb: () => LJ,
      gf: () => IZ,
      gg: () => DZ,
      h: () => XJ,
      hb: () => Bc,
      hd: () => EJ,
      he: () => QJ,
      ic: () => WJ,
      ig: () => nZ,
      j: () => VJ,
      jb: () => dJ,
      jc: () => ec,
      jf: () => SZ,
      kb: () => FZ,
      ke: () => hJ,
      l: () => pJ,
      ld: () => HJ,
      m: () => jZ,
      mb: () => UZ,
      me: () => qZ,
      nc: () => rJ,
      nf: () => ZF,
      od: () => gJ,
      p: () => AZ,
      pb: () => zJ,
      pc: () => vJ,
      pe: () => cF,
      qd: () => kJ,
      qf: () => tZ,
      r: () => AJ,
      rc: () => Yc,
      rf: () => lZ,
      s: () => Oc,
      sb: () => ZZ,
      sc: () => jJ,
      se: () => xZ,
      td: () => PJ,
      te: () => QZ,
      tf: () => BZ,
      v: () => Cc,
      vb: () => cZ,
      vf: () => oZ,
      wc: () => uc,
      xc: () => OJ,
      xd: () => nc,
      xe: () => sZ,
      y: () => uJ,
      yf: () => JF,
      zb: () => sc,
      ze: () => RZ,
      zf: () => LZ
    });
    const FJ = -2147483648,
      UJ = 12,
      eJ = 12,
      XJ = 4095,
      AJ = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      qJ = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072
      },
      jJ = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      YJ = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      hJ = {
        Alive: 16
      },
      DJ = 32,
      sJ = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      nJ = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      GJ = 4294967295,
      fJ = 0,
      xJ = 4294967295,
      rJ = 4,
      vJ = 123,
      mJ = -2147483648,
      QJ = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      EJ = 51,
      VJ = 5,
      KJ = 4294967295,
      yJ = 4294967295,
      SJ = 128,
      IJ = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      MJ = 16,
      bJ = 255,
      wJ = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      WJ = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      gJ = {
        Hotbar: 256,
        Drop: 257
      },
      HJ = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      PJ = {
        Rate: 0,
        Gyro: 1
      },
      kJ = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      pJ = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      dJ = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      zJ = {
        LookPointed: 1,
        Held: 2
      },
      NJ = 3,
      OJ = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      TJ = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      CJ = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      uJ = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      iJ = {
        Stackable: 1
      },
      RJ = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      LJ = {
        Detail: 1,
        RoomForOne: 2
      },
      aJ = {
        HaveIngredients: 1,
        Listed: 2
      },
      BJ = {
        HasOpts: 1
      },
      tJ = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      oJ = {
        Up: 1,
        Down: 2
      },
      lJ = {
        TwoD: 1,
        Loop: 2
      },
      Jc = {
        StopAfter: 1
      },
      cc = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      Zc = {
        Pose: 1,
        Visible: 2
      },
      Fc = 255,
      Uc = 65535,
      ec = 255,
      Xc = 65535,
      Ac = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      qc = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      jc = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      Yc = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      hc = 4294967295,
      Dc = 4294967295,
      sc = 255,
      nc = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      Gc = {
        critical: 123
      },
      fc = 4294967295,
      xc = {
        BYTES: 4,
        Hh: (JJ, cJ) => JJ.getUint32(cJ + 0, !0)
      },
      rc = {
        BYTES: 12,
        serverId: (JJ, cJ) => JJ.getInt32(cJ + 0, !0),
        index: (JJ, cJ) => JJ.getUint32(cJ + 4, !0),
        kind: (JJ, cJ) => JJ.getUint16(cJ + 8, !0)
      },
      vc = {
        BYTES: 20,
        pos: (JJ, cJ, ZJ) => JJ.getInt32(cJ + 0 + 4 * ZJ, !0),
        actual: (JJ, cJ) => JJ.getUint32(cJ + 12, !0),
        dataLen: (JJ, cJ) => JJ.getUint32(cJ + 16, !0)
      },
      mc = {
        BYTES: 20,
        what: (JJ, cJ) => JJ.getUint8(cJ + 0),
        value: (JJ, cJ) => JJ.getInt16(cJ + 2, !0),
        pos: (JJ, cJ, ZJ) => JJ.getInt32(cJ + 4 + 4 * ZJ, !0),
        block: (JJ, cJ) => JJ.getUint32(cJ + 16, !0)
      },
      Qc = {
        BYTES: 4,
        item: (JJ, cJ) => JJ.getUint16(cJ + 0, !0),
        slot: (JJ, cJ) => JJ.getUint8(cJ + 2)
      },
      Ec = {
        BYTES: 16,
        target: (JJ, cJ) => JJ.getInt32(cJ + 0, !0),
        damage: (JJ, cJ) => JJ.getFloat32(cJ + 4, !0),
        distance: (JJ, cJ) => JJ.getFloat32(cJ + 8, !0),
        crit: (JJ, cJ) => JJ.getUint8(cJ + 12)
      },
      Vc = {
        BYTES: 4,
        slot: (JJ, cJ) => JJ.getUint16(cJ + 0, !0)
      },
      Kc = {
        BYTES: 20,
        what: (JJ, cJ) => JJ.getUint8(cJ + 0),
        value: (JJ, cJ) => JJ.getInt16(cJ + 2, !0),
        pos: (JJ, cJ, ZJ) => JJ.getInt32(cJ + 4 + 4 * ZJ, !0),
        block: (JJ, cJ) => JJ.getUint32(cJ + 16, !0)
      },
      yc = {
        BYTES: 12,
        serverId: (JJ, cJ) => JJ.getInt32(cJ + 0, !0),
        index: (JJ, cJ) => JJ.getUint32(cJ + 4, !0),
        what: (JJ, cJ) => JJ.getUint16(cJ + 8, !0)
      },
      Sc = {
        BYTES: 24,
        cx: (JJ, cJ) => JJ.getInt32(cJ + 0, !0),
        cy: (JJ, cJ) => JJ.getInt32(cJ + 4, !0),
        cz: (JJ, cJ) => JJ.getInt32(cJ + 8, !0),
        slot: (JJ, cJ) => JJ.getUint32(cJ + 12, !0),
        generation: (JJ, cJ) => JJ.getUint32(cJ + 16, !0),
        flags: (JJ, cJ) => JJ.getUint32(cJ + 20, !0)
      },
      Ic = {
        BYTES: 44,
        pos: (JJ, cJ, ZJ) => JJ.getFloat64(cJ + 0 + 8 * ZJ, !0),
        sound: (JJ, cJ) => JJ.getUint16(cJ + 24, !0),
        flags: (JJ, cJ) => JJ.getUint16(cJ + 26, !0),
        handle: (JJ, cJ) => JJ.getUint32(cJ + 28, !0),
        volume: (JJ, cJ) => JJ.getFloat32(cJ + 32, !0),
        rate: (JJ, cJ) => JJ.getFloat32(cJ + 36, !0),
        refDist: (JJ, cJ) => JJ.getFloat32(cJ + 40, !0)
      },
      Mc = {
        BYTES: 28,
        pos: (JJ, cJ, ZJ) => JJ.getFloat64(cJ + 0 + 8 * ZJ, !0),
        handle: (JJ, cJ) => JJ.getUint32(cJ + 24, !0)
      },
      bc = {
        BYTES: 16,
        handle: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        volume: (JJ, cJ) => JJ.getFloat32(cJ + 4, !0),
        rate: (JJ, cJ) => JJ.getFloat32(cJ + 8, !0),
        refDist: (JJ, cJ) => JJ.getFloat32(cJ + 12, !0)
      },
      wc = {
        BYTES: 12,
        handle: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        to: (JJ, cJ) => JJ.getFloat32(cJ + 4, !0),
        ms: (JJ, cJ) => JJ.getUint16(cJ + 8, !0),
        flags: (JJ, cJ) => JJ.getUint16(cJ + 10, !0)
      },
      Wc = {
        BYTES: 4,
        handle: (JJ, cJ) => JJ.getUint32(cJ + 0, !0)
      },
      gc = {
        BYTES: 4,
        reason: (JJ, cJ) => JJ.getUint8(cJ + 0),
        code: (JJ, cJ) => JJ.getUint8(cJ + 1)
      },
      Hc = {
        BYTES: 4,
        key: (JJ, cJ) => JJ.getUint8(cJ + 0),
        tag: (JJ, cJ) => JJ.getUint8(cJ + 1)
      },
      Pc = {
        BYTES: 16,
        save: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        index: (JJ, cJ) => JJ.getUint32(cJ + 4, !0),
        ptr: (JJ, cJ) => JJ.getUint32(cJ + 8, !0),
        len: (JJ, cJ) => JJ.getUint32(cJ + 12, !0)
      },
      kc = {
        BYTES: 16,
        save: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        kind: (JJ, cJ) => JJ.getUint8(cJ + 4),
        parts: (JJ, cJ) => JJ.getUint32(cJ + 8, !0),
        bytes: (JJ, cJ) => JJ.getUint32(cJ + 12, !0)
      },
      pc = {
        BYTES: 4,
        totalTicks: (JJ, cJ) => JJ.getUint32(cJ + 0, !0)
      },
      dc = {
        BYTES: 24,
        what: (JJ, cJ) => JJ.getUint8(cJ + 0),
        int: (JJ, cJ) => JJ.getInt32(cJ + 4, !0),
        x: (JJ, cJ) => JJ.getFloat64(cJ + 8, !0),
        y: (JJ, cJ) => JJ.getFloat64(cJ + 16, !0)
      },
      zc = {
        BYTES: 8,
        what: (JJ, cJ) => JJ.getUint8(cJ + 0),
        kind: (JJ, cJ) => JJ.getUint8(cJ + 1),
        save: (JJ, cJ) => JJ.getUint32(cJ + 4, !0)
      },
      Nc = {
        BYTES: 4,
        JY: (JJ, cJ) => JJ.getUint16(cJ + 0, !0)
      },
      Oc = {
        BYTES: 360,
        eye: (JJ, cJ, ZJ) => JJ.getFloat64(cJ + 0 + 8 * ZJ, !0),
        localPos: (JJ, cJ, ZJ) => JJ.getFloat64(cJ + 24 + 8 * ZJ, !0),
        MJJ: (JJ, cJ, ZJ) => JJ.getFloat64(cJ + 48 + 8 * ZJ, !0),
        viewProj: (JJ, cJ, ZJ) => JJ.getFloat32(cJ + 72 + 4 * ZJ, !0),
        origin: (JJ, cJ, ZJ) => JJ.getInt32(cJ + 136 + 4 * ZJ, !0),
        heading: (JJ, cJ) => JJ.getFloat32(cJ + 148, !0),
        pitch: (JJ, cJ) => JJ.getFloat32(cJ + 152, !0),
        tanHalfFovX: (JJ, cJ) => JJ.getFloat32(cJ + 156, !0),
        tanHalfFovY: (JJ, cJ) => JJ.getFloat32(cJ + 160, !0),
        viewportCss: (JJ, cJ, ZJ) => JJ.getFloat32(cJ + 164 + 4 * ZJ, !0),
        localVel: (JJ, cJ, ZJ) => JJ.getFloat32(cJ + 172 + 4 * ZJ, !0),
        actionDir: (JJ, cJ, ZJ) => JJ.getFloat32(cJ + 184 + 4 * ZJ, !0),
        localId: (JJ, cJ) => JJ.getInt32(cJ + 196, !0),
        playerFlags: (JJ, cJ) => JJ.getUint32(cJ + 200, !0),
        targetBlock: (JJ, cJ, ZJ) => JJ.getInt32(cJ + 204 + 4 * ZJ, !0),
        targetAdjacent: (JJ, cJ, ZJ) => JJ.getInt32(cJ + 216 + 4 * ZJ, !0),
        targetBlockId: (JJ, cJ) => JJ.getUint32(cJ + 228, !0),
        targetNormal: (JJ, cJ, ZJ) => JJ.getInt8(cJ + 232 + 1 * ZJ),
        targetFlags: (JJ, cJ) => JJ.getUint8(cJ + 235),
        pickedEntity: (JJ, cJ) => JJ.getInt32(cJ + 236, !0),
        breakingPos: (JJ, cJ, ZJ) => JJ.getInt32(cJ + 240 + 4 * ZJ, !0),
        breakingProgress: (JJ, cJ) => JJ.getFloat32(cJ + 252, !0),
        cV: (JJ, cJ) => JJ.getUint16(cJ + 256, !0),
        selectedSlot: (JJ, cJ) => JJ.getUint8(cJ + 258),
        heldFlags: (JJ, cJ) => JJ.getUint8(cJ + 259),
        heldAttrVersion: (JJ, cJ) => JJ.getUint32(cJ + 260, !0),
        inventoryVersion: (JJ, cJ) => JJ.getUint32(cJ + 264, !0),
        effectsVersion: (JJ, cJ) => JJ.getUint32(cJ + 268, !0),
        entitiesVersion: (JJ, cJ) => JJ.getUint32(cJ + 272, !0),
        entRenderPtr: (JJ, cJ) => JJ.getUint32(cJ + 276, !0),
        entCapacity: (JJ, cJ) => JJ.getUint32(cJ + 280, !0),
        frameMs: (JJ, cJ) => JJ.getFloat32(cJ + 284, !0),
        fps: (JJ, cJ) => JJ.getFloat32(cJ + 288, !0),
        entVisPtr: (JJ, cJ) => JJ.getUint32(cJ + 292, !0),
        momentumFrac: (JJ, cJ) => JJ.getFloat32(cJ + 296, !0),
        chunkSlotsPtr: (JJ, cJ) => JJ.getUint32(cJ + 300, !0),
        chunkSlotsLen: (JJ, cJ) => JJ.getUint32(cJ + 304, !0),
        walkThroughPtr: (JJ, cJ) => JJ.getUint32(cJ + 308, !0),
        walkThroughLen: (JJ, cJ) => JJ.getUint32(cJ + 312, !0),
        audioViewPtr: (JJ, cJ) => JJ.getUint32(cJ + 316, !0),
        inventoryViewPtr: (JJ, cJ) => JJ.getUint32(cJ + 320, !0),
        eventOverflowGen: (JJ, cJ) => JJ.getUint32(cJ + 324, !0),
        eventOverflowMask: (JJ, cJ) => JJ.getUint32(cJ + 328, !0),
        promptEntity: (JJ, cJ) => JJ.getInt32(cJ + 332, !0),
        replayViewPtr: (JJ, cJ) => JJ.getUint32(cJ + 336, !0),
        slotIcon: (JJ, cJ) => JJ.getUint32(cJ + 340, !0),
        localDeaths: (JJ, cJ) => JJ.getUint32(cJ + 344, !0),
        cameraFar: (JJ, cJ) => JJ.getFloat32(cJ + 348, !0),
        gliderBoostFuel: (JJ, cJ) => JJ.getUint32(cJ + 352, !0),
        interactLabel: (JJ, cJ) => JJ.getUint16(cJ + 356, !0),
        interactIcon: (JJ, cJ) => JJ.getUint16(cJ + 358, !0)
      },
      Tc = {
        BYTES: 16,
        voxelsPtr: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        version: (JJ, cJ) => JJ.getUint32(cJ + 4, !0),
        generation: (JJ, cJ) => JJ.getUint32(cJ + 8, !0),
        hj: (JJ, cJ) => JJ.getUint32(cJ + 12, !0)
      },
      Cc = {
        BYTES: 56,
        listener: (JJ, cJ, ZJ) => JJ.getFloat64(cJ + 0 + 8 * ZJ, !0),
        forward: (JJ, cJ, ZJ) => JJ.getFloat32(cJ + 24 + 4 * ZJ, !0),
        up: (JJ, cJ, ZJ) => JJ.getFloat32(cJ + 36 + 4 * ZJ, !0),
        dropped: (JJ, cJ) => JJ.getUint32(cJ + 48, !0),
        unfollowed: (JJ, cJ) => JJ.getUint32(cJ + 52, !0)
      },
      uc = {
        BYTES: 8,
        item: (JJ, cJ) => JJ.getUint16(cJ + 0, !0),
        amount: (JJ, cJ) => JJ.getUint16(cJ + 2, !0),
        attrVersion: (JJ, cJ) => JJ.getUint32(cJ + 4, !0)
      },
      ic = {
        BYTES: 76,
        version: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        state: (JJ, cJ) => JJ.getUint8(cJ + 4),
        cameraMode: (JJ, cJ) => JJ.getUint8(cJ + 5),
        Hh: (JJ, cJ) => JJ.getUint32(cJ + 8, !0),
        totalTicks: (JJ, cJ) => JJ.getUint32(cJ + 12, !0),
        speed: (JJ, cJ) => JJ.getFloat32(cJ + 16, !0),
        markIn: (JJ, cJ) => JJ.getUint32(cJ + 20, !0),
        markOut: (JJ, cJ) => JJ.getUint32(cJ + 24, !0),
        editVersion: (JJ, cJ) => JJ.getUint32(cJ + 28, !0),
        drops: (JJ, cJ, ZJ) => JJ.getUint32(cJ + 32 + 4 * ZJ, !0)
      },
      Rc = {
        BYTES: 6,
        flags: (JJ, cJ) => JJ.getUint8(cJ + 0),
        harvestType: (JJ, cJ) => JJ.getUint8(cJ + 1),
        harvestLevel: (JJ, cJ) => JJ.getUint8(cJ + 2),
        attachedTop: (JJ, cJ) => JJ.getUint16(cJ + 4, !0)
      },
      Lc = {
        BYTES: 3,
        flags: (JJ, cJ) => JJ.getUint8(cJ + 0),
        harvests: (JJ, cJ) => JJ.getUint8(cJ + 1),
        level: (JJ, cJ) => JJ.getUint8(cJ + 2)
      },
      ac = {
        BYTES: 12,
        item: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        amount: (JJ, cJ) => JJ.getFloat64(cJ + 4, !0)
      },
      Bc = {
        BYTES: 16,
        recipes: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        ingredients: (JJ, cJ) => JJ.getUint32(cJ + 4, !0),
        craftAllTimes: (JJ, cJ) => JJ.getUint32(cJ + 8, !0),
        flags: (JJ, cJ) => JJ.getUint32(cJ + 12, !0)
      },
      tc = {
        BYTES: 10,
        item: (JJ, cJ) => JJ.getUint16(cJ + 0, !0),
        recipe: (JJ, cJ) => JJ.getUint16(cJ + 2, !0),
        produces: (JJ, cJ) => JJ.getUint16(cJ + 4, !0),
        requires: (JJ, cJ) => JJ.getUint16(cJ + 6, !0),
        flags: (JJ, cJ) => JJ.getUint8(cJ + 8)
      },
      oc = {
        BYTES: 4,
        amount: (JJ, cJ) => JJ.getUint16(cJ + 0, !0),
        items: (JJ, cJ) => JJ.getUint16(cJ + 2, !0)
      },
      lc = {
        BYTES: 8,
        amount: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        item: (JJ, cJ) => JJ.getUint16(cJ + 4, !0),
        from: (JJ, cJ) => JJ.getUint16(cJ + 6, !0)
      },
      JZ = {
        BYTES: 16,
        serverId: (JJ, cJ) => JJ.getInt32(cJ + 0, !0),
        len: (JJ, cJ) => JJ.getUint32(cJ + 4, !0),
        kind: (JJ, cJ) => JJ.getUint16(cJ + 8, !0),
        variation: (JJ, cJ) => JJ.getUint16(cJ + 10, !0),
        pose: (JJ, cJ) => JJ.getUint8(cJ + 12),
        meta: (JJ, cJ) => JJ.getUint8(cJ + 13),
        mesh: (JJ, cJ) => JJ.getUint8(cJ + 14),
        flags: (JJ, cJ) => JJ.getUint8(cJ + 15)
      },
      cZ = {
        BYTES: 40,
        terrainOpaque: (JJ, cJ) => JJ.getUint32(cJ + 0, !0),
        terrainTransparent: (JJ, cJ) => JJ.getUint32(cJ + 4, !0),
        terrainPack: (JJ, cJ) => JJ.getUint32(cJ + 8, !0),
        earthSky: (JJ, cJ) => JJ.getUint32(cJ + 12, !0),
        skyMeshes: (JJ, cJ) => JJ.getUint32(cJ + 16, !0),
        regular: (JJ, cJ) => JJ.getUint32(cJ + 20, !0),
        thin: (JJ, cJ) => JJ.getUint32(cJ + 24, !0),
        line: (JJ, cJ) => JJ.getUint32(cJ + 28, !0),
        text: (JJ, cJ) => JJ.getUint32(cJ + 32, !0),
        particles: (JJ, cJ) => JJ.getUint32(cJ + 36, !0)
      },
      ZZ = {
        BYTES: 16,
        fov: (JJ, cJ) => JJ.getFloat32(cJ + 0, !0),
        baseFov: (JJ, cJ) => JJ.getFloat32(cJ + 4, !0),
        aspect: (JJ, cJ) => JJ.getFloat32(cJ + 8, !0),
        bodyHeading: (JJ, cJ) => JJ.getFloat32(cJ + 12, !0)
      },
      FZ = {
        BYTES: 32,
        eye: (JJ, cJ, ZJ) => JJ.getFloat64(cJ + 0 + 8 * ZJ, !0),
        heading: (JJ, cJ) => JJ.getFloat32(cJ + 24, !0),
        pitch: (JJ, cJ) => JJ.getFloat32(cJ + 28, !0)
      },
      UZ = {
        BYTES: 40,
        feet: (JJ, cJ, ZJ) => JJ.getFloat64(cJ + 0 + 8 * ZJ, !0),
        eyeHeight: (JJ, cJ) => JJ.getFloat32(cJ + 24, !0),
        heading: (JJ, cJ) => JJ.getFloat32(cJ + 28, !0),
        headingIsDrawn: (JJ, cJ) => JJ.getUint32(cJ + 32, !0)
      },
      eZ = 32,
      XZ = 63,
      AZ = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function qZ(JJ, cJ, ZJ, FJ, UJ) {
      var eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ;
      switch (JJ) {
        case 32:
          return 4 === FJ && (null === (eJ = UJ.tickEnd) || void 0 === eJ || eJ.call(UJ, xc.Hh(cJ, ZJ)), !0);
        case 33:
          return 12 === FJ && (null === (XJ = UJ.entitySpawned) || void 0 === XJ || XJ.call(UJ, rc.serverId(cJ, ZJ), rc.index(cJ, ZJ), rc.kind(cJ, ZJ)), !0);
        case 34:
          return 12 === FJ && (null === (AJ = UJ.entityDespawned) || void 0 === AJ || AJ.call(UJ, rc.serverId(cJ, ZJ), rc.index(cJ, ZJ), rc.kind(cJ, ZJ)), !0);
        case 39:
          return !(FJ < 20) && (null === (qJ = UJ.changeBlockFail) || void 0 === qJ || qJ.call(UJ, vc.pos(cJ, ZJ, 0), vc.pos(cJ, ZJ, 1), vc.pos(cJ, ZJ, 2), vc.actual(cJ, ZJ), vc.dataLen(cJ, ZJ), ZJ + 20, FJ - 20), !0);
        case 46:
          return 0 === FJ && (null === (jJ = UJ.changeBlockFailEnd) || void 0 === jJ || jJ.call(UJ), !0);
        case 48:
          return 20 === FJ && (null === (YJ = UJ.inventoryEvent) || void 0 === YJ || YJ.call(UJ, mc.what(cJ, ZJ), mc.value(cJ, ZJ), mc.pos(cJ, ZJ, 0), mc.pos(cJ, ZJ, 1), mc.pos(cJ, ZJ, 2), mc.block(cJ, ZJ)), !0);
        case 49:
          return 4 === FJ && (null === (hJ = UJ.heldItemChanged) || void 0 === hJ || hJ.call(UJ, Qc.item(cJ, ZJ), Qc.slot(cJ, ZJ)), !0);
        case 50:
          return 16 === FJ && (null === (DJ = UJ.shotDamage) || void 0 === DJ || DJ.call(UJ, Ec.target(cJ, ZJ), Ec.damage(cJ, ZJ), Ec.distance(cJ, ZJ), Ec.crit(cJ, ZJ)), !0);
        case 51:
          return !(FJ < 4) && (null === (sJ = UJ.enchantOffer) || void 0 === sJ || sJ.call(UJ, Vc.slot(cJ, ZJ), ZJ + 4, FJ - 4), !0);
        case 52:
          return !(FJ < 20) && (null === (nJ = UJ.uiEvent) || void 0 === nJ || nJ.call(UJ, Kc.what(cJ, ZJ), Kc.value(cJ, ZJ), Kc.pos(cJ, ZJ, 0), Kc.pos(cJ, ZJ, 1), Kc.pos(cJ, ZJ, 2), Kc.block(cJ, ZJ), ZJ + 20, FJ - 20), !0);
        case 53:
          return 12 === FJ && (null === (GJ = UJ.entityInfoChanged) || void 0 === GJ || GJ.call(UJ, yc.serverId(cJ, ZJ), yc.index(cJ, ZJ), yc.what(cJ, ZJ)), !0);
        case 55:
          return 24 === FJ && (null === (fJ = UJ.chunkSlot) || void 0 === fJ || fJ.call(UJ, Sc.cx(cJ, ZJ), Sc.cy(cJ, ZJ), Sc.cz(cJ, ZJ), Sc.slot(cJ, ZJ), Sc.generation(cJ, ZJ), Sc.flags(cJ, ZJ)), !0);
        case 40:
          return 44 === FJ && (null === (xJ = UJ.playSound) || void 0 === xJ || xJ.call(UJ, Ic.pos(cJ, ZJ, 0), Ic.pos(cJ, ZJ, 1), Ic.pos(cJ, ZJ, 2), Ic.sound(cJ, ZJ), Ic.flags(cJ, ZJ), Ic.handle(cJ, ZJ), Ic.volume(cJ, ZJ), Ic.rate(cJ, ZJ), Ic.refDist(cJ, ZJ)), !0);
        case 41:
          return 28 === FJ && (null === (rJ = UJ.soundPos) || void 0 === rJ || rJ.call(UJ, Mc.pos(cJ, ZJ, 0), Mc.pos(cJ, ZJ, 1), Mc.pos(cJ, ZJ, 2), Mc.handle(cJ, ZJ)), !0);
        case 42:
          return 16 === FJ && (null === (vJ = UJ.soundSet) || void 0 === vJ || vJ.call(UJ, bc.handle(cJ, ZJ), bc.volume(cJ, ZJ), bc.rate(cJ, ZJ), bc.refDist(cJ, ZJ)), !0);
        case 43:
          return 12 === FJ && (null === (mJ = UJ.soundFade) || void 0 === mJ || mJ.call(UJ, wc.handle(cJ, ZJ), wc.to(cJ, ZJ), wc.ms(cJ, ZJ), wc.flags(cJ, ZJ)), !0);
        case 44:
          return 4 === FJ && (null === (QJ = UJ.soundStop) || void 0 === QJ || QJ.call(UJ, Wc.handle(cJ, ZJ)), !0);
        case 45:
          return 0 === FJ && (null === (EJ = UJ.soundReset) || void 0 === EJ || EJ.call(UJ), !0);
        case 56:
          return 4 === FJ && (null === (VJ = UJ.replayFailed) || void 0 === VJ || VJ.call(UJ, gc.reason(cJ, ZJ), gc.code(cJ, ZJ)), !0);
        case 57:
          return !(FJ < 4) && (null === (KJ = UJ.replayOption) || void 0 === KJ || KJ.call(UJ, Hc.key(cJ, ZJ), Hc.tag(cJ, ZJ), ZJ + 4, FJ - 4), !0);
        case 58:
          return 16 === FJ && (null === (yJ = UJ.replayFilePart) || void 0 === yJ || yJ.call(UJ, Pc.save(cJ, ZJ), Pc.index(cJ, ZJ), Pc.ptr(cJ, ZJ), Pc.len(cJ, ZJ)), !0);
        case 59:
          return 16 === FJ && (null === (SJ = UJ.replayFileReady) || void 0 === SJ || SJ.call(UJ, kc.save(cJ, ZJ), kc.kind(cJ, ZJ), kc.parts(cJ, ZJ), kc.bytes(cJ, ZJ)), !0);
        case 60:
          return !(FJ < 4) && (null === (IJ = UJ.replayOpened) || void 0 === IJ || IJ.call(UJ, pc.totalTicks(cJ, ZJ), ZJ + 4, FJ - 4), !0);
        case 61:
          return !(FJ < 24) && (null === (MJ = UJ.replayUiEvent) || void 0 === MJ || MJ.call(UJ, dc.what(cJ, ZJ), dc.int(cJ, ZJ), dc.x(cJ, ZJ), dc.y(cJ, ZJ), ZJ + 24, FJ - 24), !0);
        case 62:
          return 8 === FJ && (null === (bJ = UJ.recorderEvent) || void 0 === bJ || bJ.call(UJ, zc.what(cJ, ZJ), zc.kind(cJ, ZJ), zc.save(cJ, ZJ)), !0);
        default:
          return !1
      }
    }
    const jZ = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let YZ = new Uint8Array(0);

    function hZ(JJ) {
      return YZ.buffer !== JJ.buffer && (YZ = new Uint8Array(JJ.buffer)), YZ
    }

    function DZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(66, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint8(FJ + 0, ZJ), !0
    }

    function sZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(67, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint32(FJ + 0, ZJ, !0), !0
    }

    function nZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(68, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint8(FJ + 0, ZJ), !0
    }

    function GZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(69, cJ, 4 + FJ.length);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      return eJ.setUint8(UJ + 0, ZJ), hZ(eJ).set(FJ, eJ.byteOffset + UJ + 4), !0
    }

    function fZ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ.Fs(128, cJ, 4 + UJ.length);
      if (eJ < 0) return !1;
      const XJ = JJ.view;
      return XJ.setUint8(eJ + 0, ZJ), XJ.setUint16(eJ + 2, FJ, !0), hZ(XJ).set(UJ, XJ.byteOffset + eJ + 4), !0
    }

    function xZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(131, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setInt32(FJ + 0, ZJ, !0), !0
    }

    function rZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(132, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint32(FJ + 0, ZJ, !0), !0
    }

    function vZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(133, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint32(FJ + 0, ZJ, !0), !0
    }

    function mZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(144, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint8(FJ + 0, ZJ), !0
    }

    function QZ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ.Fs(145, cJ, 12);
      if (eJ < 0) return !1;
      const XJ = JJ.view;
      return XJ.setInt32(eJ + 0, ZJ, !0), XJ.setInt32(eJ + 4, FJ, !0), XJ.setInt32(eJ + 8, UJ, !0), !0
    }

    function EZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(256, cJ, 4 + FJ.length);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      return eJ.setUint16(UJ + 0, ZJ, !0), hZ(eJ).set(FJ, eJ.byteOffset + UJ + 4), !0
    }

    function VZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(258, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint8(FJ + 0, ZJ), !0
    }

    function KZ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
      const jJ = JJ.Fs(320, cJ, 48 + qJ.length);
      if (jJ < 0) return !1;
      const YJ = JJ.view;
      YJ.setUint32(jJ + 0, ZJ, !0), YJ.setUint16(jJ + 4, FJ, !0), YJ.setUint16(jJ + 6, UJ, !0), YJ.setUint32(jJ + 8, eJ, !0);
      for (let hJ = 0; hJ < 3; hJ++) YJ.setFloat64(jJ + 12 + 8 * hJ, XJ[hJ], !0);
      for (let hJ = 0; hJ < 3; hJ++) YJ.setFloat32(jJ + 36 + 4 * hJ, AJ[hJ], !0);
      return hZ(YJ).set(qJ, YJ.byteOffset + jJ + 48), !0
    }

    function yZ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
      const jJ = JJ.Fs(321, cJ, 48 + qJ.length);
      if (jJ < 0) return !1;
      const YJ = JJ.view;
      YJ.setUint32(jJ + 0, ZJ, !0), YJ.setInt32(jJ + 4, FJ, !0), YJ.setUint16(jJ + 8, UJ, !0), YJ.setUint16(jJ + 10, eJ, !0);
      for (let hJ = 0; hJ < 3; hJ++) YJ.setFloat64(jJ + 12 + 8 * hJ, XJ[hJ], !0);
      for (let hJ = 0; hJ < 3; hJ++) YJ.setFloat32(jJ + 36 + 4 * hJ, AJ[hJ], !0);
      return hZ(YJ).set(qJ, YJ.byteOffset + jJ + 48), !0
    }

    function SZ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      const AJ = JJ.Fs(322, cJ, 44 + XJ.length);
      if (AJ < 0) return !1;
      const qJ = JJ.view;
      qJ.setUint32(AJ + 0, ZJ, !0), qJ.setUint32(AJ + 4, FJ, !0);
      for (let jJ = 0; jJ < 3; jJ++) qJ.setFloat64(AJ + 8 + 8 * jJ, UJ[jJ], !0);
      for (let jJ = 0; jJ < 3; jJ++) qJ.setFloat32(AJ + 32 + 4 * jJ, eJ[jJ], !0);
      return hZ(qJ).set(XJ, qJ.byteOffset + AJ + 44), !0
    }

    function IZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(323, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint32(FJ + 0, ZJ, !0), !0
    }

    function MZ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = JJ.Fs(324, cJ, 32 + eJ.length);
      if (XJ < 0) return !1;
      const AJ = JJ.view;
      AJ.setUint32(XJ + 0, ZJ, !0), AJ.setUint32(XJ + 4, FJ, !0);
      for (let qJ = 0; qJ < 3; qJ++) AJ.setFloat64(XJ + 8 + 8 * qJ, UJ[qJ], !0);
      return hZ(AJ).set(eJ, AJ.byteOffset + XJ + 32), !0
    }

    function bZ(JJ, cJ) {
      return !(JJ.Fs(325, cJ, 0) < 0)
    }

    function wZ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = JJ.Fs(384, cJ, 16);
      if (XJ < 0) return !1;
      const AJ = JJ.view;
      return AJ.setUint32(XJ + 0, ZJ, !0), AJ.setUint32(XJ + 4, FJ, !0), AJ.setFloat32(XJ + 8, UJ, !0), AJ.setFloat32(XJ + 12, eJ, !0), !0
    }

    function WZ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      const AJ = JJ.Fs(385, cJ, 36 + XJ.length);
      if (AJ < 0) return !1;
      const qJ = JJ.view;
      qJ.setUint32(AJ + 0, ZJ, !0), qJ.setUint32(AJ + 4, FJ, !0);
      for (let jJ = 0; jJ < 3; jJ++) qJ.setFloat64(AJ + 8 + 8 * jJ, UJ[jJ], !0);
      return qJ.setUint32(AJ + 32, eJ, !0), hZ(qJ).set(XJ, qJ.byteOffset + AJ + 36), !0
    }

    function gZ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
      const jJ = JJ.Fs(386, cJ, 56 + qJ.length);
      if (jJ < 0) return !1;
      const YJ = JJ.view;
      YJ.setUint32(jJ + 0, ZJ, !0), YJ.setUint8(jJ + 4, FJ);
      for (let hJ = 0; hJ < 4; hJ++) YJ.setFloat32(jJ + 8 + 4 * hJ, UJ[hJ], !0);
      for (let hJ = 0; hJ < 3; hJ++) YJ.setFloat64(jJ + 24 + 8 * hJ, eJ[hJ], !0);
      return YJ.setUint32(jJ + 48, XJ, !0), YJ.setUint32(jJ + 52, AJ, !0), hZ(YJ).set(qJ, YJ.byteOffset + jJ + 56), !0
    }

    function HZ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
      const jJ = JJ.Fs(387, cJ, 56);
      if (jJ < 0) return !1;
      const YJ = JJ.view;
      YJ.setUint32(jJ + 0, ZJ, !0), YJ.setUint16(jJ + 4, FJ, !0), YJ.setUint8(jJ + 6, UJ);
      for (let hJ = 0; hJ < 3; hJ++) YJ.setFloat64(jJ + 8 + 8 * hJ, eJ[hJ], !0);
      for (let hJ = 0; hJ < 2; hJ++) YJ.setFloat32(jJ + 32 + 4 * hJ, XJ[hJ], !0);
      YJ.setFloat32(jJ + 40, AJ, !0);
      for (let hJ = 0; hJ < 3; hJ++) YJ.setFloat32(jJ + 44 + 4 * hJ, qJ[hJ], !0);
      return !0
    }

    function PZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(388, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint32(FJ + 0, ZJ, !0), !0
    }

    function kZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(389, cJ, 8);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      return eJ.setInt32(UJ + 0, ZJ, !0), eJ.setFloat32(UJ + 4, FJ, !0), !0
    }

    function pZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(390, cJ, 8);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      return eJ.setInt32(UJ + 0, ZJ, !0), eJ.setFloat32(UJ + 4, FJ, !0), !0
    }

    function dZ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = JJ.Fs(391, cJ, 12);
      if (XJ < 0) return !1;
      const AJ = JJ.view;
      return AJ.setFloat32(XJ + 0, ZJ, !0), AJ.setFloat32(XJ + 4, FJ, !0), AJ.setUint8(XJ + 8, UJ), AJ.setUint8(XJ + 9, eJ), !0
    }

    function zZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(392, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint32(FJ + 0, ZJ, !0), !0
    }

    function NZ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ.Fs(393, cJ, 12);
      if (eJ < 0) return !1;
      const XJ = JJ.view;
      return XJ.setUint32(eJ + 0, ZJ, !0), XJ.setUint16(eJ + 4, FJ, !0), XJ.setFloat32(eJ + 8, UJ, !0), !0
    }

    function OZ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      const AJ = JJ.Fs(394, cJ, 36);
      if (AJ < 0) return !1;
      const qJ = JJ.view;
      qJ.setUint32(AJ + 0, ZJ, !0), qJ.setUint16(AJ + 4, FJ, !0), qJ.setUint8(AJ + 6, UJ);
      for (let jJ = 0; jJ < 3; jJ++) qJ.setFloat64(AJ + 8 + 8 * jJ, eJ[jJ], !0);
      return qJ.setFloat32(AJ + 32, XJ, !0), !0
    }

    function TZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(398, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setUint32(FJ + 0, ZJ, !0), !0
    }

    function CZ(JJ, cJ, ZJ) {
      const FJ = JJ.Fs(448, cJ, 4);
      if (FJ < 0) return !1;
      return JJ.view.setFloat32(FJ + 0, ZJ, !0), !0
    }

    function uZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(450, cJ, 12);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      for (let XJ = 0; XJ < 2; XJ++) eJ.setFloat32(UJ + 0 + 4 * XJ, ZJ[XJ], !0);
      return eJ.setUint8(UJ + 8, FJ), !0
    }

    function iZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(452, cJ, 8);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      return eJ.setFloat32(UJ + 0, ZJ, !0), eJ.setUint8(UJ + 4, FJ), !0
    }

    function RZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(454, cJ, 4);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      return eJ.setUint8(UJ + 0, ZJ), eJ.setUint8(UJ + 1, FJ), !0
    }

    function LZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(455, cJ, 40);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      for (let XJ = 0; XJ < 9; XJ++) eJ.setInt32(UJ + 0 + 4 * XJ, ZJ[XJ], !0);
      return eJ.setUint32(UJ + 36, FJ, !0), !0
    }

    function aZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(456, cJ, 8);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      return eJ.setFloat32(UJ + 0, ZJ, !0), eJ.setUint8(UJ + 4, FJ), !0
    }

    function BZ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(530, cJ, 4 + FJ.length);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      return eJ.setUint8(UJ + 0, ZJ), hZ(eJ).set(FJ, eJ.byteOffset + UJ + 4), !0
    }

    function tZ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = JJ.Fs(531, cJ, 12 + eJ.length);
      if (XJ < 0) return !1;
      const AJ = JJ.view;
      return AJ.setFloat32(XJ + 0, ZJ, !0), AJ.setFloat32(XJ + 4, FJ, !0), AJ.setUint32(XJ + 8, UJ, !0), hZ(AJ).set(eJ, AJ.byteOffset + XJ + 12), !0
    }

    function oZ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = JJ.Fs(532, cJ, 12 + eJ.length);
      if (XJ < 0) return !1;
      const AJ = JJ.view;
      return AJ.setInt32(XJ + 0, ZJ, !0), AJ.setInt32(XJ + 4, FJ, !0), AJ.setUint32(XJ + 8, UJ, !0), hZ(AJ).set(eJ, AJ.byteOffset + XJ + 12), !0
    }

    function lZ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ.Fs(533, cJ, 8 + UJ.length);
      if (eJ < 0) return !1;
      const XJ = JJ.view;
      return XJ.setInt32(eJ + 0, ZJ, !0), XJ.setInt32(eJ + 4, FJ, !0), hZ(XJ).set(UJ, XJ.byteOffset + eJ + 8), !0
    }

    function JF(JJ, cJ) {
      return !(JJ.Fs(576, cJ, 0) < 0)
    }

    function cF(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = JJ.Fs(577, cJ, 36 + eJ.length);
      if (XJ < 0) return !1;
      const AJ = JJ.view;
      AJ.setUint8(XJ + 0, ZJ);
      for (let qJ = 0; qJ < 16; qJ++) AJ.setUint8(XJ + 4 + 1 * qJ, FJ[qJ]);
      for (let qJ = 0; qJ < 16; qJ++) AJ.setUint8(XJ + 20 + 1 * qJ, UJ[qJ]);
      return hZ(AJ).set(eJ, AJ.byteOffset + XJ + 36), !0
    }

    function ZF(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.Fs(578, cJ, 4 + FJ.length);
      if (UJ < 0) return !1;
      const eJ = JJ.view;
      return eJ.setUint8(UJ + 0, ZJ), hZ(eJ).set(FJ, eJ.byteOffset + UJ + 4), !0
    }

    function FF(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
      const qJ = JJ.Fs(579, cJ, 36);
      if (qJ < 0) return !1;
      const jJ = JJ.view;
      return jJ.setFloat64(qJ + 0, ZJ, !0), jJ.setFloat64(qJ + 8, FJ, !0), jJ.setFloat64(qJ + 16, UJ, !0), jJ.setFloat64(qJ + 24, eJ, !0), jJ.setUint16(qJ + 32, XJ, !0), jJ.setUint8(qJ + 34, AJ), !0
    }
    class UF {
      constructor(JJ, cJ) {
        this.core = JJ, this.afterCall = cJ
      }
      canModify(JJ, cJ, ZJ) {
        const FJ = this.core.jeJ(JJ, cJ, ZJ);
        return this.afterCall(), FJ
      }
      terrainBlocked(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = this.core.cXJ(JJ, cJ, ZJ, FJ, UJ);
        return this.afterCall(), eJ
      }
      fK(JJ, cJ, ZJ, FJ) {
        const UJ = this.core.ND(JJ, cJ, ZJ, FJ);
        return this.afterCall(), UJ
      }
      blockData(JJ, cJ, ZJ) {
        const FJ = this.core.AeJ(JJ, cJ, ZJ);
        return this.afterCall(), FJ
      }
      cameraSweep(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        const AJ = this.core.AUJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ);
        return this.afterCall(), AJ
      }
      hasServerTarget(JJ) {
        const cJ = this.core.QeJ(JJ);
        return this.afterCall(), cJ
      }
      entityInteractable(JJ) {
        const cJ = this.core.feJ(JJ);
        return this.afterCall(), cJ
      }
      entityCrouching(JJ) {
        const cJ = this.core.GeJ(JJ);
        return this.afterCall(), cJ
      }
      predictServerPosition(JJ, cJ, ZJ, FJ) {
        const UJ = this.core.geJ(JJ, cJ, ZJ, FJ);
        return this.afterCall(), UJ
      }
      setOtherEntitySetting(JJ, cJ, ZJ) {
        const FJ = this.core.DUJ(JJ, cJ, ZJ);
        return this.afterCall(), FJ
      }
      entityInfoBatch(JJ) {
        const cJ = this.core.GUJ(JJ);
        return this.afterCall(), cJ
      }
      entityName(JJ) {
        const cJ = this.core.xeJ(JJ);
        return this.afterCall(), cJ
      }
      hasEffect(JJ, cJ) {
        const ZJ = this.core.meJ(JJ, cJ);
        return this.afterCall(), ZJ
      }
      scratchPtr() {
        const JJ = this.core.UUJ();
        return this.afterCall(), JJ
      }
      invSwap(JJ, cJ) {
        const ZJ = this.core.IeJ(JJ, cJ);
        return this.afterCall(), ZJ
      }
      invMove(JJ, cJ, ZJ) {
        const FJ = this.core.KeJ(JJ, cJ, ZJ);
        return this.afterCall(), FJ
      }
      invQuickMove(JJ, cJ, ZJ, FJ) {
        const UJ = this.core.yeJ(JJ, cJ, ZJ, FJ);
        return this.afterCall(), UJ
      }
      invRemove(JJ, cJ, ZJ) {
        const FJ = this.core.SeJ(JJ, cJ, ZJ);
        return this.afterCall(), FJ
      }
      invEnchant(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = this.core.VeJ(JJ, cJ, ZJ, FJ, UJ);
        return this.afterCall(), eJ
      }
      craft(JJ, cJ, ZJ) {
        const FJ = this.core.craft(JJ, cJ, ZJ);
        return this.afterCall(), FJ
      }
      salvage(JJ, cJ, ZJ) {
        const FJ = this.core.salvage(JJ, cJ, ZJ);
        return this.afterCall(), FJ
      }
      selectSlot(JJ) {
        const cJ = this.core.peJ(JJ);
        return this.afterCall(), cJ
      }
      closeChest() {
        const JJ = this.core.YeJ();
        return this.afterCall(), JJ
      }
      itemAttributesBatch(JJ) {
        const cJ = this.core.nUJ(JJ);
        return this.afterCall(), cJ
      }
      itemNames() {
        const JJ = this.core.qV();
        return this.afterCall(), JJ
      }
      blockProps() {
        const JJ = this.core.qeJ();
        return this.afterCall(), JJ
      }
      itemProps() {
        const JJ = this.core.MeJ();
        return this.afterCall(), JJ
      }
      salvageRecipe(JJ) {
        const cJ = this.core.xUJ(JJ);
        return this.afterCall(), cJ
      }
      craftingView(JJ, cJ, ZJ) {
        const FJ = this.core.sUJ(JJ, cJ, ZJ);
        return this.afterCall(), FJ
      }
      directorView() {
        const JJ = this.core.XUJ();
        return this.afterCall(), JJ
      }
      directorDefaultPose() {
        const JJ = this.core.qUJ();
        return this.afterCall(), JJ
      }
      directorEntity(JJ) {
        const cJ = this.core.jUJ(JJ);
        return this.afterCall(), cJ
      }
      directorPose(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = this.core.YUJ(JJ, cJ, ZJ, FJ, UJ, eJ);
        return this.afterCall(), XJ
      }
      passTimings(JJ) {
        const cJ = this.core.WeJ(JJ);
        return this.afterCall(), cJ
      }
      drawCensus() {
        const JJ = this.core.neJ();
        return this.afterCall(), JJ
      }
    }
  },
  39399: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => qJ,
      d: () => AJ,
      g: () => XJ
    });
    var FJ = ZJ(39401),
      UJ = ZJ(4189),
      eJ = ZJ(39406);

    function XJ(JJ) {
      return JJ.payloadKind === UJ.bc.Msgpack ? (0, FJ.b)(JJ.payload) : void 0
    }

    function AJ(JJ, cJ) {
      if (cJ.payloadKind === UJ.bc.Bytes || cJ.payloadKind === UJ.bc.MsgpackBin) return (0, eJ.e)(JJ, cJ.payload)
    }

    function qJ(JJ) {
      return null !== JJ && "object" === typeof JJ
    }
  },
  39410: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ,
      e: () => DJ,
      i: () => sJ,
      k: () => YJ,
      m: () => fJ
    });
    var FJ = ZJ(4189),
      UJ = ZJ(39417);
    const eJ = new Map,
      XJ = new Set,
      AJ = new Set;
    let qJ = 0,
      jJ = 0;

    function YJ(JJ, cJ) {
      let ZJ = eJ.get(JJ);
      return ZJ || (ZJ = new Set, eJ.set(JJ, ZJ)), ZJ.add(cJ), () => {
        ZJ.delete(cJ)
      }
    }

    function hJ() {
      return 0 !== qJ
    }

    function DJ(JJ) {
      return XJ.add(JJ), () => {
        XJ.delete(JJ)
      }
    }

    function sJ(JJ) {
      return AJ.add(JJ), () => {
        AJ.delete(JJ)
      }
    }
    const nJ = "A raw message listener threw";

    function GJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XJ;
      for (const FJ of cJ) try {
        FJ()
      } catch (ZJ) {
        JJ ? (0, UJ.u)(ZJ, nJ) : console.error(nJ, ZJ)
      }
    }
    const fJ = {
      fire: function(JJ) {
        if ("connection" === JJ.type) {
          const cJ = JJ.phase === FJ.G.Activated && JJ.conn !== qJ && JJ.conn > jJ,
            ZJ = (JJ.phase === FJ.G.Left || JJ.phase === FJ.G.Closed) && JJ.conn === qJ;
          return void(cJ || ZJ ? (qJ = cJ ? JJ.conn : 0, GJ(!0)) : JJ.phase === FJ.G.Resumed && 0 !== qJ && JJ.conn > jJ && (qJ = JJ.conn, GJ(!0, AJ)))
        }
        const cJ = eJ.get(JJ.JY);
        if (cJ && JJ.conn === qJ && 0 !== qJ)
          for (const FJ of cJ) try {
            FJ(JJ)
          } catch (ZJ) {
            (0, UJ.u)(ZJ, nJ)
          }
      },
      close: function(JJ) {
        jJ = Math.max(jJ, JJ, qJ), 0 !== qJ && (qJ = 0, GJ(!1))
      }
    }
  },
  39385: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      c: () => qJ,
      d: () => AJ
    });
    var FJ = ZJ(1168),
      UJ = ZJ(39354);
    const eJ = new TextDecoder,
      XJ = new TextEncoder;

    function AJ(JJ, cJ) {
      const ZJ = JJ.queries.entityName(cJ);
      if (ZJ === UJ.Ic) return;
      const XJ = JJ.memoryData(JJ.scratch(), 4 + ZJ, 4, "entity_name's answer");
      if (!XJ) return;
      const AJ = XJ.getUint32(0, !0),
        qJ = eJ.decode(new Uint8Array(XJ.buffer, XJ.byteOffset + 4, ZJ));
      return (0, FJ.d)(qJ, !1, AJ === UJ.Pd ? null : AJ)
    }

    function qJ(JJ, cJ, ZJ) {
      const FJ = XJ.encode(ZJ);
      if (FJ.length > UJ.zb) return !1;
      const eJ = JJ.memoryView(Uint8Array, JJ.scratch(), FJ.length, "has_effect's name");
      return !!eJ && (eJ.set(FJ), 1 === JJ.queries.hasEffect(cJ, FJ.length))
    }

    function jJ(JJ, cJ, ZJ, FJ) {
      const XJ = JJ.queries.blockData(cJ, ZJ, FJ);
      if (XJ === UJ.Ic) return;
      const AJ = JJ.memoryView(Uint8Array, JJ.scratch(), XJ, "block_data's answer");
      return AJ ? JSON.parse(eJ.decode(AJ)) : void 0
    }
  },
  39401: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      e: () => YJ
    });
    const FJ = new TextDecoder;

    function UJ(JJ) {
      const cJ = new eJ(JJ),
        ZJ = cJ.value();
      if (cJ.at !== JJ.length) throw new Error(`msgpack: ${JJ.length-cJ.at} bytes after the value`);
      return ZJ
    }
    class eJ {
      constructor(JJ) {
        this.bytes = JJ, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength)
      }
      value() {
        const JJ = this.u8();
        if (JJ <= 127) return JJ;
        if (JJ >= 224) return JJ - 256;
        if (JJ >= 128 && JJ <= 143) return this.map(15 & JJ);
        if (JJ >= 144 && JJ <= 159) return this.array(15 & JJ);
        if (JJ >= 160 && JJ <= 191) return this.str(31 & JJ);
        switch (JJ) {
          case 192:
            return null;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            return this.bin(this.u8());
          case 197:
            return this.bin(this.u16());
          case 198:
            return this.bin(this.u32());
          case 199:
            return this.ext(this.u8());
          case 200:
            return this.ext(this.u16());
          case 201:
            return this.ext(this.u32());
          case 202:
            return this.view.getFloat32(this.take(4), !1);
          case 203:
            return this.view.getFloat64(this.take(8), !1);
          case 204:
            return this.u8();
          case 205:
            return this.u16();
          case 206:
            return this.u32();
          case 207:
            return this.int64(!1);
          case 208:
            return this.view.getInt8(this.take(1));
          case 209:
            return this.view.getInt16(this.take(2), !1);
          case 210:
            return this.view.getInt32(this.take(4), !1);
          case 211:
            return this.int64(!0);
          case 212:
            return this.ext(1);
          case 213:
            return this.ext(2);
          case 214:
            return this.ext(4);
          case 215:
            return this.ext(8);
          case 216:
            return this.ext(16);
          case 217:
            return this.str(this.u8());
          case 218:
            return this.str(this.u16());
          case 219:
            return this.str(this.u32());
          case 220:
            return this.array(this.u16());
          case 221:
            return this.array(this.u32());
          case 222:
            return this.map(this.u16());
          case 223:
            return this.map(this.u32());
          default:
            throw new Error(`msgpack: unknown byte 0x${JJ.toString(16)} at ${this.at-1}`)
        }
      }
      take(JJ) {
        const cJ = this.at;
        if (cJ + JJ > this.bytes.length) throw new Error(`msgpack: ${JJ} bytes past the end at ${cJ}`);
        return this.at = cJ + JJ, cJ
      }
      u8() {
        return this.view.getUint8(this.take(1))
      }
      u16() {
        return this.view.getUint16(this.take(2), !1)
      }
      u32() {
        return this.view.getUint32(this.take(4), !1)
      }
      int64(JJ) {
        const cJ = this.take(8);
        return JJ ? this.view.getBigInt64(cJ, !1) : this.view.getBigUint64(cJ, !1)
      }
      str(JJ) {
        const cJ = this.take(JJ),
          ZJ = this.bytes;
        if (JJ < 16) {
          let UJ = "";
          for (let eJ = cJ; eJ < cJ + JJ; eJ++) {
            const XJ = ZJ[eJ];
            if (XJ >= 128) return FJ.decode(ZJ.subarray(cJ, cJ + JJ));
            UJ += String.fromCharCode(XJ)
          }
          return UJ
        }
        return FJ.decode(ZJ.subarray(cJ, cJ + JJ))
      }
      bin(JJ) {
        const cJ = this.take(JJ);
        return this.bytes.subarray(cJ, cJ + JJ)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(JJ) {
        this.enter();
        const cJ = [];
        for (let ZJ = 0; ZJ < JJ; ZJ++) cJ.push(this.value());
        return this.depth--, cJ
      }
      map(JJ) {
        this.enter();
        const cJ = {};
        for (let ZJ = 0; ZJ < JJ; ZJ++) {
          const JJ = this.value(),
            ZJ = this.value();
          cJ["__proto__" === JJ ? "__proto_" : String(JJ)] = ZJ
        }
        return this.depth--, cJ
      }
      ext(JJ) {
        const cJ = this.view.getInt8(this.take(1)),
          ZJ = this.take(JJ);
        if (0 !== cJ) {
          if (-1 === cJ) {
            if (1 === JJ) return new Date(NaN);
            if (4 === JJ) return new Date(1e3 * this.view.getUint32(ZJ, !1));
            if (8 === JJ) {
              const JJ = this.view.getUint32(ZJ, !1),
                cJ = JJ >>> 2,
                FJ = 4294967296 * (3 & JJ) + this.view.getUint32(ZJ + 4, !1);
              return new Date(1e3 * FJ + cJ / 1e6)
            }
            if (12 === JJ) {
              const JJ = this.view.getUint32(ZJ, !1),
                cJ = 4294967296 * this.view.getInt32(ZJ + 4, !1) + this.view.getUint32(ZJ + 8, !1);
              return new Date(1e3 * cJ + JJ / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${cJ} of ${JJ} bytes`)
        }
      }
    }
    const XJ = new TextEncoder,
      AJ = -(2n ** 63n),
      qJ = 2n ** 63n - 1n,
      jJ = 2n ** 64n - 1n;

    function YJ(JJ) {
      const cJ = new hJ;
      return cJ.value(JJ, 0), cJ.bytes()
    }
    class hJ {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(JJ, cJ) {
        if (cJ > 512) throw new Error("msgpack: nested too deep");
        switch (typeof JJ) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(JJ ? 195 : 194);
          case "number":
            return void this.number(JJ);
          case "bigint":
            return void this.bigint(JJ);
          case "string":
            return void this.string(JJ);
          case "object":
            if (null === JJ) this.u8(192);
            else if (JJ instanceof Uint8Array) this.head(JJ.length, 196, -1, 197, 198), this.room(JJ.length), this.buf.set(JJ, this.at), this.at += JJ.length;
            else if (Array.isArray(JJ)) {
              this.head(JJ.length, 220, 144, 220, 221);
              for (const ZJ of JJ) this.value(ZJ, cJ + 1)
            } else {
              var ZJ, FJ;
              if (Object.getPrototypeOf(JJ) !== Object.prototype && null !== Object.getPrototypeOf(JJ)) throw new Error(`msgpack: can't encode a ${null!==(ZJ=null===(FJ=JJ.constructor)||void 0===FJ?void 0:FJ.name)&&void 0!==ZJ?ZJ:"object"}`);
              {
                const ZJ = Object.keys(JJ);
                this.head(ZJ.length, 222, 128, 222, 223);
                for (const FJ of ZJ) this.string(FJ), this.value(JJ[FJ], cJ + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof JJ)
        }
      }
      number(JJ) {
        Number.isInteger(JJ) && JJ >= -2147483648 && JJ <= 4294967295 ? JJ >= 0 ? JJ < 128 ? this.u8(JJ) : JJ < 256 ? (this.u8(204), this.u8(JJ)) : JJ < 65536 ? (this.u8(205), this.u16(JJ)) : (this.u8(206), this.u32(JJ)) : JJ >= -32 ? this.u8(JJ + 256) : JJ >= -128 ? (this.u8(208), this.u8(JJ + 256)) : JJ >= -32768 ? (this.u8(209), this.u16(JJ + 65536)) : (this.u8(210), this.u32(JJ >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, JJ, !1), this.at += 8)
      }
      bigint(JJ) {
        const cJ = JJ >= AJ && JJ <= qJ;
        if (!cJ && (JJ < 0n || JJ > jJ)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(cJ ? 211 : 207), this.room(8), cJ ? this.view.setBigInt64(this.at, JJ, !1) : this.view.setBigUint64(this.at, JJ, !1), this.at += 8
      }
      string(JJ) {
        const cJ = XJ.encode(JJ);
        this.head(cJ.length, 217, 160, 218, 219), this.room(cJ.length), this.buf.set(cJ, this.at), this.at += cJ.length
      }
      head(JJ, cJ, ZJ, FJ, UJ) {
        ZJ >= 0 && JJ < (160 === ZJ ? 32 : 16) ? this.u8(ZJ | JJ) : cJ !== FJ && JJ < 256 ? (this.u8(cJ), this.u8(JJ)) : JJ < 65536 ? (this.u8(FJ), this.u16(JJ)) : (this.u8(UJ), this.u32(JJ))
      }
      room(JJ) {
        if (this.at + JJ <= this.buf.length) return;
        let cJ = 2 * this.buf.length;
        for (; cJ < this.at + JJ;) cJ *= 2;
        const ZJ = new Uint8Array(cJ);
        ZJ.set(this.buf.subarray(0, this.at)), this.buf = ZJ, this.view = new DataView(ZJ.buffer)
      }
      u8(JJ) {
        this.room(1), this.buf[this.at++] = JJ
      }
      u16(JJ) {
        this.room(2), this.view.setUint16(this.at, JJ, !1), this.at += 2
      }
      u32(JJ) {
        this.room(4), this.view.setUint32(this.at, JJ, !1), this.at += 4
      }
    }
  },
  39406: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(39394);
    const UJ = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class eJ {
      constructor(JJ) {
        this.buf = JJ, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let JJ = this.u8(),
          cJ = 127 & JJ,
          ZJ = 128;
        for (; 128 & JJ;) {
          if (ZJ > 2 ** 63) throw new RangeError("avro: varint too long");
          JJ = this.u8(), cJ += (127 & JJ) * ZJ, ZJ *= 128
        }
        return cJ % 2 === 1 ? -(cJ + 1) / 2 : cJ / 2
      }
      float() {
        const JJ = this.take(4);
        return this.floats().getFloat32(JJ, !0)
      }
      double() {
        const JJ = this.take(8);
        return this.floats().getFloat64(JJ, !0)
      }
      str() {
        const JJ = this.size(),
          cJ = this.take(JJ),
          ZJ = cJ + JJ;
        if (JJ <= 32) {
          let JJ = "";
          for (let FJ = cJ; FJ < ZJ; FJ++) {
            const eJ = this.buf[FJ];
            if (eJ >= 128) return UJ.decode(this.buf.subarray(cJ, ZJ));
            JJ += String.fromCharCode(eJ)
          }
          return JJ
        }
        return UJ.decode(this.buf.subarray(cJ, ZJ))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(JJ) {
        const cJ = this.take(JJ);
        return this.buf.slice(cJ, cJ + JJ)
      }
      index(JJ) {
        const cJ = this.long();
        if (!(cJ >= 0 && cJ < JJ)) throw new RangeError(`avro: index ${cJ} of ${JJ}`);
        return cJ
      }
      rn(JJ) {
        const cJ = [];
        for (let ZJ = this.long(); 0 !== ZJ; ZJ = this.long()) {
          ZJ = this.block(ZJ);
          for (let FJ = 0; FJ < ZJ; FJ++) cJ.push(JJ(this))
        }
        return cJ
      }
      map(JJ) {
        const cJ = {};
        for (let ZJ = this.long(); 0 !== ZJ; ZJ = this.long()) {
          ZJ = this.block(ZJ);
          for (let FJ = 0; FJ < ZJ; FJ++) {
            cJ[this.str()] = JJ(this)
          }
        }
        return cJ
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(JJ) {
        let cJ = JJ;
        if (cJ < 0 && (cJ = -cJ, this.long()), cJ > this.buf.length - this.at) throw new RangeError(`avro: block of ${cJ} items in ${this.buf.length-this.at} bytes`);
        return cJ
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const JJ = this.long();
        if (JJ < 0) throw new RangeError(`avro: length ${JJ}`);
        return JJ
      }
      u8() {
        const JJ = this.buf[this.at];
        if (void 0 === JJ) throw new RangeError("avro: truncated");
        return this.at++, JJ
      }
      take(JJ) {
        const cJ = this.at;
        if (JJ > this.buf.length - cJ) throw new RangeError("avro: truncated");
        return this.at = cJ + JJ, cJ
      }
    }

    function XJ(JJ, cJ) {
      const ZJ = new eJ(cJ),
        UJ = (0, FJ.mb)(JJ, ZJ);
      return ZJ.end(), UJ
    }
  },
  39394: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => jJ,
      F: () => XJ,
      H: () => IJ,
      J: () => UJ,
      N: () => AJ,
      R: () => sJ,
      S: () => yJ,
      T: () => KJ,
      U: () => EJ,
      Y: () => YJ,
      _: () => hJ,
      ab: () => SJ,
      e: () => QJ,
      eb: () => nJ,
      g: () => fJ,
      hb: () => vJ,
      j: () => xJ,
      jb: () => GJ,
      k: () => rJ,
      kb: () => qJ,
      m: () => VJ,
      mb: () => MJ,
      p: () => FJ,
      s: () => eJ,
      u: () => mJ,
      y: () => DJ
    });
    const FJ = 2,
      UJ = 12,
      eJ = 27,
      XJ = 40,
      AJ = 52,
      qJ = 59,
      jJ = 63,
      YJ = 83,
      hJ = 84,
      DJ = 89,
      sJ = 91,
      nJ = 93,
      GJ = 94,
      fJ = 95,
      xJ = 97,
      rJ = 101,
      vJ = 102,
      mJ = 73,
      QJ = 16,
      EJ = 86,
      VJ = 60,
      KJ = 17,
      yJ = 56,
      SJ = 100,
      IJ = 81;

    function MJ(JJ, cJ) {
      switch (JJ) {
        case FJ:
          return function(JJ) {
            return {
              zF: aJ(JJ),
              NF: JJ.float(),
              TF: JJ.long()
            }
          }(cJ);
        case UJ:
          return function(JJ) {
            return {
              WJ: HJ(JJ),
              gJ: HJ(JJ)
            }
          }(cJ);
        case eJ:
          return function(JJ) {
            return {
              wZ: JJ.bool(),
              WZ: HJ(JJ)
            }
          }(cJ);
        case XJ:
          return cJ.str();
        case AJ:
          return function(JJ) {
            return {
              id: JJ.long(),
              mU: Xc(JJ)
            }
          }(cJ);
        case qJ:
        case jJ:
          return cJ.str();
        case YJ:
        case hJ:
          return cJ.long();
        case DJ:
          return function(JJ) {
            return {
              nJ: JJ.long(),
              GJ: JJ.bool(),
              fJ: JJ.float()
            }
          }(cJ);
        case sJ:
          return cJ.long();
        case nJ:
          return function(JJ) {
            return {
              hU: JJ.bool(),
              iJ: jc(JJ)
            }
          }(cJ);
        case GJ:
          return function(JJ) {
            return {
              id: JJ.str(),
              position: qc(JJ),
              nc: Yc(JJ),
              style: NJ(JJ),
              vc: JJ.bool()
            }
          }(cJ);
        case fJ:
          return function(JJ) {
            return {
              id: HJ(JJ)
            }
          }(cJ);
        case xJ:
          return function(JJ) {
            return {
              JJ: JJ.long(),
              cJ: JJ.str(),
              ZJ: Uc(JJ),
              FJ: Uc(JJ),
              UJ: HJ(JJ),
              eJ: HJ(JJ),
              XJ: HJ(JJ),
              AJ: HJ(JJ),
              qJ: HJ(JJ),
              jJ: Uc(JJ),
              YJ: Uc(JJ),
              hJ: HJ(JJ),
              DJ: HJ(JJ),
              sJ: HJ(JJ)
            }
          }(cJ);
        case rJ:
          return cJ.str();
        case vJ:
          return cJ.long();
        case mJ:
          return function(JJ) {
            return {
              Lc: JJ.long(),
              ac: JJ.str(),
              Bc: JJ.float()
            }
          }(cJ);
        case QJ:
          return function(JJ) {
            return {
              tc: JJ.bool(),
              oc: HJ(JJ),
              lc: JJ.str(),
              JZ: Dc(JJ),
              cZ: Dc(JJ),
              ZZ: JJ.bool(),
              FZ: JJ.long(),
              UZ: sc(JJ)
            }
          }(cJ);
        case EJ:
          return function(JJ) {
            return {
              gZ: HJ(JJ)
            }
          }(cJ);
        case VJ:
          return function(JJ) {
            return {
              vJ: JJ.str(),
              mJ: JJ.str(),
              QJ: nc(JJ),
              GU: JJ.str(),
              fU: oJ(JJ),
              xU: JJ.float()
            }
          }(cJ);
        case KJ:
          return function(JJ) {
            return {
              vJ: JJ.str(),
              mJ: JJ.str(),
              QJ: nc(JJ)
            }
          }(cJ);
        case yJ:
          return function(JJ) {
            return JJ.rn(Gc)
          }(cJ);
        case SJ:
          return function(JJ) {
            return {
              yF: xc(JJ),
              wF: CJ(JJ)
            }
          }(cJ);
        case IJ:
          return function(JJ) {
            return {
              aU: JJ.bool(),
              BU: HJ(JJ),
              tU: vc(JJ),
              lU: Pc(JJ)
            }
          }(cJ);
        default:
          throw new Error(`no reader for to-client message ${JJ}`)
      }
    }

    function bJ(JJ) {
      return {
        entityName: JJ.str()
      }
    }

    function wJ(JJ) {
      const cJ = JJ.index(4);
      return 0 === cJ ? JJ.str() : 1 === cJ ? JJ.long() : 2 === cJ ? JJ.bool() : bJ(JJ)
    }

    function WJ(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return JJ.map(wJ)
      }(JJ)
    }

    function gJ(JJ) {
      return {
        translationKey: JJ.str(),
        params: WJ(JJ)
      }
    }

    function HJ(JJ) {
      return 0 === JJ.index(2) ? null : JJ.str()
    }

    function PJ(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          color: HJ(JJ),
          colour: HJ(JJ),
          fontSize: HJ(JJ)
        }
      }(JJ)
    }

    function kJ(JJ) {
      return {
        icon: JJ.str(),
        style: PJ(JJ)
      }
    }

    function pJ(JJ) {
      const cJ = JJ.index(3);
      return 0 === cJ ? {
        string: JJ.str()
      } : 1 === cJ ? {
        styledEntityName: bJ(JJ)
      } : {
        styledTranslatedText: gJ(JJ)
      }
    }

    function dJ(JJ) {
      const cJ = JJ.index(3);
      return 0 === cJ ? null : 1 === cJ ? JJ.str() : JJ.long()
    }

    function zJ(JJ) {
      return 0 === JJ.index(2) ? null : JJ.float()
    }

    function NJ(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          color: HJ(JJ),
          colour: HJ(JJ),
          fontWeight: dJ(JJ),
          fontStyle: HJ(JJ),
          fontSize: HJ(JJ),
          opacity: zJ(JJ)
        }
      }(JJ)
    }

    function OJ(JJ) {
      return {
        str: pJ(JJ),
        style: NJ(JJ),
        clickableUrl: HJ(JJ)
      }
    }

    function TJ(JJ) {
      return JJ.str()
    }

    function CJ(JJ) {
      return JJ.rn(TJ)
    }

    function uJ(JJ) {
      return 0 === JJ.index(2) ? null : CJ(JJ)
    }

    function iJ(JJ) {
      return {
        type: JJ.str(),
        progress: JJ.float(),
        width: HJ(JJ),
        height: HJ(JJ),
        colours: uJ(JJ),
        backgroundColour: HJ(JJ)
      }
    }

    function RJ(JJ) {
      return {
        type: JJ.str(),
        action: JJ.str(),
        style: NJ(JJ)
      }
    }

    function LJ(JJ) {
      const cJ = JJ.index(7);
      return 0 === cJ ? {
        string: JJ.str()
      } : 1 === cJ ? {
        entityName: bJ(JJ)
      } : 2 === cJ ? {
        translatedText: gJ(JJ)
      } : 3 === cJ ? {
        styledIcon: kJ(JJ)
      } : 4 === cJ ? {
        Gc: OJ(JJ)
      } : 5 === cJ ? {
        styledProgressBar: iJ(JJ)
      } : {
        styledKeyBinding: RJ(JJ)
      }
    }

    function aJ(JJ) {
      return JJ.rn(LJ)
    }
    const BJ = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function tJ(JJ) {
      return BJ[JJ.index(5)]
    }

    function oJ(JJ) {
      return 0 === JJ.index(2) ? null : JJ.double()
    }

    function lJ(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          KU: oJ(JJ),
          yU: JJ.double(),
          SU: JJ.double(),
          IU: JJ.bool(),
          description: aJ(JJ),
          MU: JJ.str(),
          scale: oJ(JJ),
          rotation: oJ(JJ)
        }
      }(JJ)
    }

    function Jc(JJ) {
      return 0 === JJ.index(2) ? null : JJ.bool()
    }

    function cc(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          wU: JJ.double(),
          icon: JJ.str(),
          label: aJ(JJ),
          WU: JJ.bool(),
          scale: oJ(JJ),
          rotation: oJ(JJ),
          gU: Jc(JJ)
        }
      }(JJ)
    }

    function Zc(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          KU: oJ(JJ),
          PU: JJ.double(),
          kU: JJ.double(),
          pU: JJ.double(),
          gravity: JJ.double(),
          dU: JJ.double(),
          zU: JJ.double(),
          NU: JJ.double(),
          IU: JJ.bool(),
          description: aJ(JJ),
          icon: HJ(JJ)
        }
      }(JJ)
    }

    function Fc(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          speed: JJ.double(),
          TU: JJ.double(),
          label: aJ(JJ),
          icon: HJ(JJ),
          scale: oJ(JJ),
          rotation: oJ(JJ)
        }
      }(JJ)
    }

    function Uc(JJ) {
      return 0 === JJ.index(2) ? null : JJ.long()
    }

    function ec(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          uU: JJ.long(),
          iU: JJ.double(),
          RU: JJ.double(),
          LU: Uc(JJ),
          label: aJ(JJ),
          icon: HJ(JJ)
        }
      }(JJ)
    }

    function Xc(JJ) {
      return {
        type: tJ(JJ),
        progressBar: lJ(JJ),
        timedClick: cc(JJ),
        gravityBar: Zc(JJ),
        precisionBar: Fc(JJ),
        rhythmClick: ec(JJ)
      }
    }

    function Ac(JJ) {
      return JJ.float()
    }

    function qc(JJ) {
      return JJ.rn(Ac)
    }

    function jc(JJ) {
      return 0 === JJ.index(2) ? null : qc(JJ)
    }

    function Yc(JJ) {
      return 0 === JJ.index(2) ? null : aJ(JJ)
    }

    function hc(JJ) {
      return JJ.long()
    }

    function Dc(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return JJ.rn(hc)
      }(JJ)
    }

    function sc(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          PJ: JJ.str(),
          OJ: JJ.long()
        }
      }(JJ)
    }

    function nc(JJ) {
      const cJ = JJ.index(3);
      return 0 === cJ ? null : 1 === cJ ? JJ.str() : gJ(JJ)
    }

    function Gc(JJ) {
      return {
        EF: JJ.str(),
        VF: JJ.str(),
        KF: JJ.str()
      }
    }

    function fc(JJ) {
      return {
        SF: JJ.str(),
        IF: HJ(JJ),
        MF: HJ(JJ),
        bF: CJ(JJ)
      }
    }

    function xc(JJ) {
      return JJ.rn(fc)
    }

    function rc(JJ) {
      return {
        oU: JJ.str(),
        x: JJ.long(),
        y: JJ.long(),
        z: JJ.long()
      }
    }

    function vc(JJ) {
      return JJ.rn(rc)
    }

    function mc(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          Qe: JJ.float(),
          Ee: JJ.long(),
          Ve: JJ.long()
        }
      }(JJ)
    }

    function Qc(JJ) {
      return {
        blockName: JJ.str(),
        he: JJ.bool(),
        De: JJ.bool(),
        se: JJ.bool(),
        ne: JJ.float(),
        Ge: JJ.float(),
        fe: JJ.long(),
        xe: mc(JJ)
      }
    }

    function Ec(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return JJ.rn(Qc)
      }(JJ)
    }

    function Vc(JJ) {
      return {
        qe: JJ.str(),
        je: Ec(JJ)
      }
    }

    function Kc(JJ) {
      return {
        blockName: JJ.str(),
        frequency: JJ.float()
      }
    }

    function yc(JJ) {
      return JJ.rn(Kc)
    }

    function Sc(JJ) {
      return {
        Se: JJ.str(),
        Ie: JJ.str(),
        frequency: JJ.float(),
        Me: yc(JJ)
      }
    }

    function Ic(JJ) {
      return JJ.rn(Sc)
    }

    function Mc(JJ) {
      return {
        blockName: JJ.str(),
        radius: JJ.long(),
        pe: JJ.long(),
        Ze: JJ.long(),
        Fe: JJ.long(),
        de: JJ.float()
      }
    }

    function bc(JJ) {
      return JJ.rn(Mc)
    }

    function wc(JJ) {
      return {
        Ze: JJ.long(),
        Fe: JJ.long(),
        Ue: JJ.long(),
        ee: JJ.bool(),
        Xe: Vc(JJ),
        Ke: Ic(JJ),
        Pe: bc(JJ)
      }
    }

    function Wc(JJ) {
      return JJ.rn(wc)
    }

    function gc(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          name: JJ.str(),
          Te: HJ(JJ)
        }
      }(JJ)
    }

    function Hc(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          terrain: gc(JJ),
          Ce: bc(JJ)
        }
      }(JJ)
    }

    function Pc(JJ) {
      return 0 === JJ.index(2) ? null : function(JJ) {
        return {
          layers: Wc(JJ),
          ze: Hc(JJ)
        }
      }(JJ)
    }
  },
  39368: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => VJ,
      C: () => bJ,
      E: () => mJ,
      I: () => QJ,
      M: () => fJ,
      Q: () => SJ,
      U: () => WJ,
      Y: () => nJ,
      ab: () => HJ,
      bb: () => rJ,
      d: () => UJ,
      eb: () => xJ,
      g: () => gJ,
      hb: () => vJ,
      ib: () => EJ,
      j: () => wJ,
      k: () => sJ,
      m: () => GJ,
      q: () => MJ,
      r: () => KJ,
      s: () => IJ,
      w: () => yJ
    });
    var FJ = ZJ(2505);
    const UJ = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53
    };

    function eJ(JJ, cJ) {
      return !ArrayBuffer.isView(JJ) || JJ instanceof DataView ? Array.isArray(JJ) ? JJ.map((JJ => cJ(JJ))) : JJ : Array.from(JJ, (JJ => cJ(JJ)))
    }

    function XJ(JJ) {
      if ("string" !== typeof JJ) return JJ;
      for (let cJ = 0; cJ < JJ.length; cJ++) {
        const ZJ = JJ.charCodeAt(cJ);
        if (ZJ >= 55296 && ZJ <= 57343) return qJ.decode(AJ.encode(JJ))
      }
      return JJ
    }
    const AJ = new TextEncoder,
      qJ = new TextDecoder;

    function jJ(JJ) {
      return JJ
    }
    let YJ;

    function hJ(JJ) {
      return null === JJ || "object" !== typeof JJ ? JJ : [XJ(JJ.XY), XJ(JJ.AY)]
    }

    function DJ(JJ) {
      return null === JJ || "object" !== typeof JJ ? JJ : [eJ(JJ.JZ, jJ), eJ(JJ.JX, jJ)]
    }

    function sJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.JY), XJ(cJ.cY)];
      var cJ
    }

    function nJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [cJ.id, cJ.vY];
      var cJ
    }

    function GJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [cJ.JJ, XJ(cJ.cJ), cJ.ZJ, XJ(cJ.eJ), cJ.jJ, cJ.YJ, cJ.JA, XJ(cJ.cA), XJ(cJ.ZA)];
      var cJ
    }

    function fJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [eJ(cJ.QA, jJ), cJ.EA];
      var cJ
    }

    function xJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [eJ(cJ.DY, (JJ => XJ(JJ))), XJ(cJ.sY), cJ.GY];
      var cJ
    }

    function rJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [eJ(cJ.Tj, jJ), XJ(cJ.Cj), cJ.uj];
      var cJ
    }

    function vJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.VF), XJ(cJ.KF)];
      var cJ
    }

    function mJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.sj)];
      var cJ
    }

    function QJ(JJ) {
      return XJ(JJ)
    }

    function EJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.EY), XJ(cJ.VY), XJ(cJ.XY), XJ(cJ.AY)];
      var cJ
    }

    function VJ(JJ) {
      return hJ(JJ)
    }

    function KJ(JJ) {
      return hJ(JJ)
    }

    function yJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.Dj)];
      var cJ
    }

    function SJ(JJ) {
      return JJ
    }

    function IJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.IY), XJ(cJ.MY)];
      var cJ
    }

    function MJ(JJ) {
      return XJ(JJ)
    }

    function bJ(JJ) {
      return DJ(JJ)
    }

    function wJ(JJ) {
      return DJ(JJ)
    }

    function WJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.YX)];
      var cJ
    }

    function gJ(JJ) {
      return (YJ ??= (0, FJ.b)().map((JJ => JJ.name)), YJ).map((cJ => {
        return "string" === typeof(ZJ = JJ[cJ]) ? XJ(ZJ) : eJ(ZJ, jJ);
        var ZJ
      }))
    }

    function HJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [cJ.Gj, cJ.fj, cJ.xj];
      var cJ
    }
  },
  38186: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      e: () => AJ
    });
    var FJ = ZJ(235),
      UJ = ZJ(3872);
    const eJ = new Set(UJ.q),
      XJ = new Map;

    function AJ(JJ, cJ) {
      let ZJ = XJ.get(cJ);
      void 0 === ZJ && (ZJ = new Map, XJ.set(cJ, ZJ));
      let UJ = ZJ.get(JJ);
      return void 0 === UJ && (UJ = `${JJ}${(0,FJ.z)(cJ)}`, ZJ.set(JJ, UJ)), UJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);